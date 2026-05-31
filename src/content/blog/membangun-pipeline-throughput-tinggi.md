---
title: "Membangun Pipeline Data Throughput Tinggi dengan Kafka"
description: "Gambaran umum tentang merancang arsitektur event streaming terdistribusi yang skalabel untuk ingesti telemetri."
pubDate: 2026-05-31
tags: ["Data Engineering", "Kafka", "Python", "Desain Sistem"]
lang: "id"
---

Saat merancang sistem modern yang menerima jutaan data telemetri, arsitektur sinkron request-response biasa akan cepat mengalami kendala. Di bawah beban puncak, database dapat terkunci, server mencapai batas CPU, dan pengguna mengalami latensi yang tinggi.

Untuk mengatasi hal ini, kita memisahkan proses penerimaan data (ingestion) dari pemrosesan data menggunakan commit log terdistribusi: **Apache Kafka**.

## Mengapa Memisahkan dengan Kafka?

Dalam arsitektur terdekopel ini, endpoint API bertindak sebagai \"producers\" ringan yang mempublikasikan event mentah ke topik Kafka dan segera mengembalikan respons status `202 Accepted`. Hal ini membuat waktu respons API tetap di bawah beberapa milidetik.

Proses background worker (\"consumers\") kemudian membaca event dari topik tersebut, melakukan transformasi, dan menyimpannya secara massal (batch-writing) ke database.

```
[Producers (FastAPI)] ---> [Kafka Topic] ---> [Consumers (Pandas/Worker)] ---> [TimescaleDB]
```

## Contoh Kode Ingesti

Berikut adalah contoh Python sederhana untuk mengirim data telemetri menggunakan pustaka `confluent-kafka`:

```python
from confluent_kafka import Producer
import json

conf = {'bootstrap.servers': "localhost:9092"}
producer = Producer(conf)

def delivery_report(err, msg):
    if err is not None:
        print(f"Pengiriman pesan gagal: {err}")
    else:
        print(f"Pesan terkirim ke {msg.topic()} [{msg.partition()}]")

def send_telemetry(event_id, payload):
    data = json.dumps({"id": event_id, "payload": payload})
    producer.produce(
        'telemetry-events', 
        key=str(event_id), 
        value=data, 
        callback=delivery_report
    )
    producer.flush()

send_telemetry(10293, {"sensor": "temp_sensor_01", "reading": 23.4})
```

## Poin Penting Rekayasa Sistem

1. **Partitioning**: Pastikan Anda mempartisi topik Kafka berdasarkan kunci yang konsisten (misalnya, `device_id`) agar data terkirim secara berurutan.
2. **Batching**: Konsumen harus menyimpan data ke database dalam jumlah kelompok (batch) daripada satu per satu untuk mengurangi overhead koneksi.
3. **Backpressure**: Ketika database atau layanan hilir melambat, Kafka menyimpan antrean dengan aman tanpa kehilangan data apa pun.
