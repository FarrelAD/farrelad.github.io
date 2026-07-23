---
title: "Membangun Dashboard IoT Real-Time dengan PHP dan MQTT"
description: "Bagaimana saya membangun Luminous IoT -- dashboard monitoring real-time yang menjembatani telemetri sensor MQTT dengan aplikasi web Symfony."
pubDate: 2026-06-24
tags: ["PHP", "Symfony", "MQTT", "IoT", "Docker"]
lang: "id"
---

## Apa itu Luminous IoT?

Luminous IoT adalah dashboard monitoring IoT full-stack yang menerima data telemetri real-time dari perangkat sensor melalui MQTT, menyimpannya ke MySQL, dan menampilkannya dalam dashboard web responsif dengan gauge live dan chart timeline. Sistem ini mendukung komunikasi dua arah -- pengguna tidak hanya dapat melihat data sensor tetapi juga mengirim perintah kembali ke perangkat (toggle LED, reboot, mengubah interval pelaporan).

## Mengapa Saya Membangunnya

Saya ingin mengeksplorasi bagaimana protokol IoT ringan seperti MQTT dapat terintegrasi dengan framework web PHP tradisional. Sebagian besar platform IoT dibangun dengan Python atau Node.js, jadi membangunnya sepenuhnya dalam PHP dengan Symfony merupakan tantangan yang menarik. Proyek ini juga menjadi penelusuran mendalam tentang proses daemon latar belakang, karena subscriber MQTT berjalan sebagai perintah CLI persisten terpisah dari server HTTP.

## Sorotan Teknis

Bagian paling menarik adalah merancang struktur topik MQTT dan daemon subscriber. Daemon berlangganan ke topik wildcard seperti `iot/devices/+/telemetry`, secara otomatis mendaftarkan perangkat baru saat kontak pertama, dan mengelola identity map Doctrine ORM untuk mencegah kebocoran memori dalam proses jangka panjang. Di sisi frontend, Chart.js merender chart dual-axis timeline yang diperbarui setiap 3 detik melalui API polling. Proyek ini juga menyertakan simulator device CLI untuk pengujian tanpa perangkat keras.

## Arsitektur

Sistem ini berjalan sebagai empat proses bersamaan: compiler aset Webpack Encore, server HTTP Symfony, daemon subscriber MQTT, dan simulator perangkat opsional. MQTT menangani semua komunikasi device-to-server dan server-to-device, sementara HTTP menyajikan UI dashboard dan REST API.

Proyek ini open source dan dokumentasi lengkap, termasuk panduan deployment produksi dengan Supervisor, integrasi Symfony Messenger, dan jalur migrasi ke WebSocket.

[Lihat di GitHub](https://github.com/FarrelAD/PHP-IoT-MQTT)
