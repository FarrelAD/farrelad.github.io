---
title: "Deploy Platform IoT Full-Stack dengan NestJS, Docker, dan TimescaleDB"
description: "Bagaimana saya membangun dan mendeploy platform IoT smart farming dengan 8 container Docker, telemetri MQTT, agregasi time-series, dan CI/CD ke DigitalOcean."
pubDate: 2026-05-29
tags: ["NestJS", "Docker", "TimescaleDB", "MQTT", "CI/CD"]
lang: "id"
---

## Apa itu IoT Smart Farming API?

Ini adalah aplikasi NestJS yang sepenuhnya terdockerisasi yang mensimulasikan sistem IoT smart farming. Aplikasi ini memodelkan hierarki Pengguna yang memiliki Lahan, Lahan yang berisi Perangkat (sensor dan stasiun cuaca), dan Perangkat yang menghasilkan data Telemetri time-series (suhu, kelembaban, kelembaban tanah). Sistem ini menyertakan simulator otomatis, ingest telemetri berbasis MQTT, dan REST API dengan dokumentasi Swagger.

## Mengapa Saya Membangunnya

Saya ingin membangun platform IoT kelas produksi dari nol untuk memahami stack penuh -- dari perangkat sensor yang disimulasikan hingga desain database time-series hingga orkestrasi container. Smart farming menjadi domain yang menarik karena pola datanya unik: kelembaban tanah perlahan mengering dan reset pada ambang irigasi, stasiun cuaca menghasilkan pembacaan berbeda dari sensor tanah, dan data tersebut secara alami cocok untuk agregasi time-series.

## Sorotan Teknis

Pembelajaran paling berharga adalah merancang arsitektur Docker Compose dengan 8 container: API NestJS, TimescaleDB, broker MQTT Mosquitto, Node-RED untuk orkestrasi data, Prometheus untuk metrik, Grafana untuk visualisasi, cAdvisor, dan Postgres Exporter. Setiap container memiliki batas memori, rotasi log, dan layanan internal hanya diikat ke localhost untuk keamanan.

Di sisi database, tabel telemetri menggunakan `create_hypertable()` dari TimescaleDB untuk partisi otomatis berbasis waktu, memungkinkan agregasi `time_bucket()` yang efisien untuk statistik dashboard. Simulator menjalankan cron job setiap 5 detik, menggunakan state cache in-memory untuk transisi random-walk yang smooth daripada nilai random independen.

## Deployment

Pipeline CI/CD mengemas kode sebagai tarball, mengunggahnya ke DigitalOcean droplet melalui SCP, dan menjalankan `docker compose up -d --build`. Dockerfile multi-stage menggunakan 5 build stage untuk meminimalkan ukuran image akhir.

[Lihat di GitHub](https://github.com/FarrelAD/IOT-PROTO-SAMPLE)
