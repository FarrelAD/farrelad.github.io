---
title: "Deploying a PyTorch Model Across Three Backend Frameworks"
description: "How I deployed a crowd counting deep learning model via Flask, FastAPI, and Express.js -- with ONNX enabling cross-platform inference without Python."
pubDate: 2025-11-09
tags: ["PyTorch", "FastAPI", "Flask", "Express.js", "ONNX"]
lang: "en"
---

## What is Crowd Counting Model Deployment?

This project takes a trained PyTorch crowd counting model -- a Simplified SFCN (Sequential Fully Convolutional Network) with a VGG-16 backbone -- and deploys it as a web service across three different backend frameworks: Flask, FastAPI, and Express.js. A user uploads an image containing people, and the system returns the estimated crowd count. The same model, three completely different deployment stacks.

## Why I Built It

Training a model is only half the battle -- getting it into production is where most ML projects stall. I wanted to understand how the same model behaves across different ecosystems, and to learn the ONNX export pipeline that enables running PyTorch models in non-Python environments. Deploying via Express.js with ONNX Runtime was particularly eye-opening -- it proved that a Node.js server can serve a PyTorch model without any Python runtime.

## Key Technical Highlights

The model uses a density-map approach rather than object detection: it produces a continuous heatmap where each pixel represents local crowd density, and the total count is the sum of all pixel values. The preprocessing pipeline (letterbox resize to 768x768, ImageNet normalization) was faithfully replicated in both Python (OpenCV + torchvision) and TypeScript (sharp + manual pixel math) to ensure identical model inputs.

The ONNX conversion notebook demonstrates exporting with dynamic batch axes and constant folding, validated with `onnx.checker`. The Express.js implementation loads the ONNX model via `onnxruntime-node` and runs inference entirely in Node.js -- no Python dependency at runtime. Both Python implementations use a module-level singleton pattern to load the ~500MB VGG-16 model once at startup.

## Architecture

Each of the three implementations follows the same pattern: a web route serves a drag-and-drop upload UI, and an API route accepts multipart image uploads, preprocesses the image, runs inference, and returns `{ "count": N }`. The Flask and FastAPI versions use native PyTorch; the Express.js version uses ONNX Runtime.

[View on GitHub](https://github.com/FarrelAD/PyTorch-Crowd-Counting-Model-Deployment)
