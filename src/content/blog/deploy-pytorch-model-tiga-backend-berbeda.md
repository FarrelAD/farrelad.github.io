---
title: "MendePLOY Model PyTorch di Tiga Backend Framework Berbeda"
description: "Bagaimana saya mendeploy model deep learning crowd counting melalui Flask, FastAPI, dan Express.js -- dengan ONNX yang memungkinkan inferensi cross-platform tanpa Python."
pubDate: 2025-11-09
tags: ["PyTorch", "FastAPI", "Flask", "Express.js", "ONNX"]
lang: "id"
---

## Apa itu Crowd Counting Model Deployment?

Proyek ini mengambil model crowd counting PyTorch yang sudah dilatih -- SFCN (Sequential Fully Convolutional Network) yang Disederhanakan dengan VGG-16 backbone -- dan mendeploy-nya sebagai web service melalui tiga framework backend berbeda: Flask, FastAPI, dan Express.js. Pengguna mengunggah gambar yang berisi orang, dan sistem mengembalikan estimasi jumlah kerumunan. Model yang sama, tiga stack deployment yang sepenuhnya berbeda.

## Mengapa Saya Membangunnya

Melatih model hanyalah setengah perjalanan -- mendapatkan model ke produksi adalah di mana sebagian besar proyek ML terhenti. Saya ingin memahami bagaimana model yang sama berperilaku di berbagai ekosistem, dan mempelajari pipeline ekspor ONNX yang memungkinkan menjalankan model PyTorch di lingkungan non-Python. Mendeploy melalui Express.js dengan ONNX Runtime sangat membuka mata -- membuktikan bahwa server Node.js dapat menjalankan model PyTorch tanpa runtime Python.

## Sorotan Teknis

Model ini menggunakan pendekatan peta kepadatan (density map) alih-alih deteksi objek: model menghasilkan heatmap kontinu di mana setiap piksel merepresentasikan kepadatan kerumunan lokal, dan jumlah total adalah jumlah seluruh nilai piksel. Pipeline pra-pemrosesan (letterbox resize ke 768x768, normalisasi ImageNet) direplikasi secara faithful dalam Python (OpenCV + torchvision) dan TypeScript (sharp + perhitungan piksel manual) untuk memastikan input model yang identik.

Konversi ONNX mendemonstrasikan ekspor dengan dynamic batch axes dan constant folding, divalidasi dengan `onnx.checker`. Implementasi Express.js memuat model ONNX melalui `onnxruntime-node` dan menjalankan inferensi sepenuhnya di Node.js -- tanpa dependensi Python saat runtime. Kedua implementasi Python menggunakan pola singleton level modul untuk memuat model VGG-16 ~500MB sekali saat startup.

## Arsitektur

Ketiga implementasi mengikuti pola yang sama: route web menyajikan UI upload drag-and-drop, dan route API menerima unggahan gambar multipart, memproses gambar, menjalankan inferensi, dan mengembalikan `{ "count": N }`. Versi Flask dan FastAPI menggunakan PyTorch native; versi Express.js menggunakan ONNX Runtime.

[Lihat di GitHub](https://github.com/FarrelAD/PyTorch-Crowd-Counting-Model-Deployment)
