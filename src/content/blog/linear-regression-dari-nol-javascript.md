---
title: "Mengimplementasikan Linear Regression dari Nol dalam JavaScript"
description: "Membangun model linear regression murni JavaScript dengan antarmuka CLI dan web -- tanpa library ML, hanya matematika."
pubDate: 2025-01-14
tags: ["JavaScript", "Machine Learning", "Chart.js", "Node.js"]
lang: "id"
---

## Apa itu JavaScript Linear Regression?

Ini adalah implementasi linear regression dari nol dalam JavaScript murni -- tanpa `ml-regression`, tanpa `math.js`, tanpa library ML eksternal. Proyek ini menghitung persamaan regresi menggunakan rumus ordinary least squares (OLS) klasik yang diimplementasikan sepenuhnya secara manual. Proyek ini menyediakan dua antarmuka: aplikasi CLI untuk workflow berbasis terminal dan aplikasi web dengan visualisasi scatter plot interaktif Chart.js.

## Mengapa Saya Membangunnya

Sebagian besar tutorial machine learning melewati matematika dengan mengimpor library yang melakukan semuanya di balik layar. Saya ingin memahami rumus yang sebenarnya -- slope, intercept, least squares -- dengan mengimplementasikannya dari nol dalam bahasa yang saya gunakan setiap hari. JavaScript menjadi pilihan alami karena memungkinkan saya membangun CLI Node.js dan antarmuka visual berbasis browser untuk algoritma inti yang sama.

## Sorotan Teknis

Algoritma inti menghitung statistik ringkasan (jumlah X, jumlah Y, jumlah XY, jumlah X-kuadrat) menggunakan `Array.reduce()`, lalu menghitung slope dan intercept dari statistik tersebut. Fungsi modeling mengembalikan closure JavaScript -- `const y = (x) => a + (b * x)` -- menjadikan persamaan tersebut dapat dipanggil untuk prediksi berulang. Antarmuka web menggunakan Chart.js untuk merender scatter plot titik data dengan garis regresi yang telah dipasang. Kedua antarmuka menyertakan validasi data untuk memastikan kolom yang dipilih hanya berisi nilai numerik.

Proyek ini dilengkapi dengan empat dataset sampel yang mencakup prediksi gaji, performa siswa, dan statistik olahraga, mendemonstrasikan regresi single-feature dan multi-feature.

## Apa yang Saya Pelajari

Mengimplementasikan OLS secara manual menyingkap apa yang dilakukan library seperti scikit-learn di internalnya. Pola closure untuk mengembalikan persamaan yang dapat dipanggil merupakan wawasan spesifik JavaScript yang elegan, dan membangun antarmuka CLI serta web untuk algoritma yang sama menyoroti bagaimana konteks UX yang berbeda mengubah cara pengguna berinteraksi dengan perhitungan dasar yang sama.

[Lihat di GitHub](https://github.com/FarrelAD/JavaScript-Linear-Regression)
