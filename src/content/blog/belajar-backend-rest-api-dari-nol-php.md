---
title: "Belajar Backend Development dengan Membangun REST API dari Nol dalam PHP"
description: "Tentang proyek Basic PHP RESTful API saya -- API CRUD minimal tapi lengkap yang dibangun tanpa framework untuk memahami dasar-dasarnya."
pubDate: 2024-10-21
tags: ["PHP", "MySQL", "PDO", "REST API"]
lang: "id"
---

## Apa itu Basic PHP RESTful API?

Ini adalah API REST sederhana namun lengkap yang dibangun sepenuhnya dalam PHP native dengan MySQL. API ini menyediakan operasi CRUD lengkap untuk entitas user (create, read, update, delete) dengan routing manual, prepared statement PDO, dan formatting JSON yang konsisten. Tanpa framework, tanpa ORM -- hanya PHP mentah.

## Mengapa Saya Membangunnya

Sebelum menyelam ke framework seperti Symfony dan NestJS, saya ingin memahami apa yang mereka abstraksi. Membangun REST API dari nol dalam PHP native memaksa Anda menangani semuanya secara manual: mengurai URI request, mendispatch berdasarkan HTTP method, memvalidasi input, memformat response, mengelola koneksi database, dan menangani error. Proyek ini menjadi fondasi saya untuk memahami backend development.

## Sorotan Teknis

Sistem routing secara manual mengurai `$_SERVER['REQUEST_URI']` dan `$_SERVER['REQUEST_METHOD']` untuk mendispatch ke method controller yang sesuai. Layer database menggunakan PDO dengan parameterized query di sepanjang alur, mencegah SQL injection tanpa mengandalkan ORM. Penanganan error mengembalikan HTTP status code yang tepat (200, 201, 400, 404, 405, 422, 500) dan mencatat error server dengan timestamp ke file.

Struktur proyek mengikuti pola bersih bertema MVC: `config/` untuk setup database, `src/routes/` untuk dispatch URI, `src/controllers/` untuk penanganan request, dan `src/models/` untuk query database. Variabel environment dikelola melalui file `.env` menggunakan `phpdotenv`.

## Apa yang Saya Pelajari

Meskipun ini proyek kecil (~10 file), ini mengajarkan saya fondasi yang membuat framework besar bekerja. Memahami bagaimana routing, dependency loading, dan database abstraction bekerja di level paling rendah membuat saya lebih mudah menguasai Symfony dan NestJS setelahnya.

[Lihat di GitHub](https://github.com/FarrelAD/Basic-PHP-RESTful-API)
