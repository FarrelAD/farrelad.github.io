---
title: "PrintX: A Browser-Based Mail Merge Tool for Print-Ready Documents"
description: "How I built PrintX -- a zero-backend PWA that generates 300 DPI print-ready PDFs from spreadsheet data using a visual canvas editor."
pubDate: 2026-04-23
tags: ["React", "TypeScript", "Konva", "jsPDF", "PWA"]
lang: "en"
---

## What is PrintX?

PrintX is a browser-based application that automates generating ready-to-print documents (ID cards, certificates, labels) from spreadsheet data. Think of it as a mail merge tool for the printing industry. You upload a design template image and a dataset (CSV/XLSX), map spreadsheet columns onto the design using a drag-and-drop canvas editor, preview every generated document with real data, and export a print-ready PDF with crop marks and bleed margins.

## Why I Built It

I frequently saw small printing businesses manually editing templates one-by-one for each customer. Existing mail merge tools are either desktop-only, require expensive software, or don't support print-ready output with proper DPI and imposition. I wanted to build something that runs entirely in the browser -- no server, no data leaves the device -- while still producing professional-grade output.

## Key Technical Highlights

The most challenging part was the PDF generation engine. It renders each row at 300 DPI using an offscreen canvas, compositing the design template with mapped text fields and QR codes. The engine supports N-Up imposition (automatically fitting multiple copies per page), configurable bleed margins, and professional crop marks. To keep the UI responsive during generation of large datasets, the engine yields to the browser every 5 rows via `setTimeout`.

The visual editor uses Konva (HTML5 Canvas) with a transformer for drag, resize, and selection. All project data is stored in IndexedDB, making the app fully offline-capable as a PWA.

## Architecture

PrintX is a completely zero-backend application -- a static SPA deployed to GitHub Pages. The `xlsx` library parses spreadsheets entirely in the browser, Konva handles the visual editor, and jsPDF produces the final output. Internationalization supports English and Indonesian with auto-detection.

[View on GitHub](https://github.com/FarrelAD/PrintX)
