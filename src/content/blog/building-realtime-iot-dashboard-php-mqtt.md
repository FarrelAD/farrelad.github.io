---
title: "Building a Real-Time IoT Dashboard with PHP and MQTT"
description: "How I built Luminous IoT -- a real-time monitoring dashboard bridging MQTT sensor telemetry with a Symfony web application."
pubDate: 2026-06-24
tags: ["PHP", "Symfony", "MQTT", "IoT", "Docker"]
lang: "en"
---

## What is Luminous IoT?

Luminous IoT is a full-stack IoT monitoring dashboard that receives real-time telemetry data from sensor devices via MQTT, persists it to MySQL, and renders it in a responsive web dashboard with live gauges and timeline charts. The system supports bidirectional communication -- users can not only view sensor readings but also send commands back to devices (toggle LEDs, reboot, change reporting intervals).

## Why I Built It

I wanted to explore how lightweight IoT protocols like MQTT could integrate with traditional PHP web frameworks. Most IoT platforms are built with Python or Node.js, so building one entirely in PHP with Symfony was an interesting challenge. The project also served as a deep dive into background daemon processes, since the MQTT subscriber runs as a persistent CLI command separate from the HTTP server.

## Key Technical Highlights

The most interesting part was designing the MQTT topic structure and the subscriber daemon. The daemon subscribes to wildcard topics like `iot/devices/+/telemetry`, automatically registers new devices on first contact, and manages Doctrine ORM's identity map to prevent memory leaks in long-running processes. On the frontend, Chart.js renders a dual-axis timeline that updates every 3 seconds via API polling. The project also includes a device simulator CLI for testing without physical hardware.

## Architecture

The system runs as four concurrent processes: a Webpack Encore asset compiler, a Symfony HTTP server, the MQTT subscriber daemon, and optional device simulators. MQTT handles all device-to-server and server-to-device communication, while HTTP serves the dashboard UI and REST API.

The project is open source and fully documented, including production deployment guidance with Supervisor, Symfony Messenger integration, and migration paths to WebSockets.

[View on GitHub](https://github.com/FarrelAD/PHP-IoT-MQTT)
