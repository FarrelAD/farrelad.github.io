---
title: "PrintX: Tool Mail Merge Berbasis Browser untuk Dokumen Siap Cetak"
description: "Bagaimana saya membangun PrintX -- PWA zero-backend yang menghasilkan PDF siap cetak 300 DPI dari data spreadsheet menggunakan editor canvas visual."
pubDate: 2026-04-23
tags: ["React", "TypeScript", "Konva", "jsPDF", "PWA"]
lang: "id"
---

## Apa itu PrintX?

PrintX adalah aplikasi berbasis browser yang mengotomatisasi pembuatan dokumen siap cetak (kartu ID, sertifikat, label) dari data spreadsheet. Bayangkan ini sebagai tool mail merge untuk industri percetakan. Anda mengunggah gambar template desain dan dataset (CSV/XLSX), memetakan kolom spreadsheet ke desain menggunakan editor canvas drag-and-drop, mempratinjau setiap dokumen yang dihasilkan dengan data nyata, dan mengekspor PDF siap cetak dengan crop mark dan bleed margin.

## Mengapa Saya Membangunnya

Saya sering melihat usaha percetakan kecil mengedit template satu per satu untuk setiap pelanggan. Tool mail merge yang ada entah hanya desktop, memerlukan software mahal, atau tidak mendukung output siap cetak dengan DPI dan imposition yang tepat. Saya ingin membangun sesuatu yang sepenuhnya berjalan di browser -- tanpa server, tanpa data yang keluar dari perangkat -- tetapi tetap menghasilkan output kelas profesional.

## Sorotan Teknis

Bagian paling menantang adalah engine generasi PDF. Engine merender setiap baris pada 300 DPI menggunakan offscreen canvas, mengkomposisikan template desain dengan field teks yang dipetakan dan kode QR. Engine mendukung N-Up imposition (secara otomatis menempatkan beberapa salinan per halaman), bleed margin yang dapat dikonfigurasi, dan crop mark profesional. Untuk menjaga UI tetap responsif selama generasi dataset besar, engine memberikan jeda ke browser setiap 5 baris melalui `setTimeout`.

Editor visual menggunakan Konva (HTML5 Canvas) dengan transformer untuk drag, resize, dan selection. Semua data proyek disimpan di IndexedDB, menjadikan aplikasi sepenuhnya offline-capable sebagai PWA.

## Arsitektur

PrintX adalah aplikasi zero-backend sepenuhnya -- SPA statis yang di-deploy ke GitHub Pages. Library `xlsx` mengurai spreadsheet sepenuhnya di browser, Konva menangani editor visual, dan jsPDF menghasilkan output akhir. Internasionalisasi mendukung bahasa Inggris dan Indonesia dengan auto-detection.

[Lihat di GitHub](https://github.com/FarrelAD/PrintX)
