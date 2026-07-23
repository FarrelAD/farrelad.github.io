---
title: "Deploying a Full-Stack IoT Platform with NestJS, Docker, and TimescaleDB"
description: "How I built and deployed an IoT smart farming platform with 8 Docker containers, MQTT telemetry, time-series aggregation, and CI/CD to DigitalOcean."
pubDate: 2026-05-29
tags: ["NestJS", "Docker", "TimescaleDB", "MQTT", "CI/CD"]
lang: "en"
---

## What is IoT Smart Farming API?

This is a fully dockerized NestJS application that simulates a smart farming IoT system. It models a hierarchy of Users owning Farms, Farms containing Devices (sensors and weather stations), and Devices generating time-series Telemetry data (temperature, humidity, soil moisture). The system includes an automated simulator, MQTT-based telemetry ingestion, and REST APIs with Swagger documentation.

## Why I Built It

I wanted to build a production-grade IoT platform from scratch to understand the full stack -- from simulated sensor devices to time-series database design to container orchestration. Smart farming was an appealing domain because the data patterns are interesting: soil moisture slowly dries down and resets at irrigation thresholds, weather stations produce different readings than soil sensors, and the data naturally lends itself to time-series aggregation.

## Key Technical Highlights

The most valuable learning was designing the Docker Compose architecture with 8 containers: NestJS API, TimescaleDB, Mosquitto MQTT broker, Node-RED for data orchestration, Prometheus for metrics, Grafana for visualization, cAdvisor, and Postgres Exporter. Each container has memory limits, log rotation, and internal services are bound to localhost only for security.

On the database side, the telemetry table uses TimescaleDB's `create_hypertable()` for automatic time-based partitioning, enabling efficient `time_bucket()` aggregations for dashboard stats. The simulator runs a cron job every 5 seconds, using an in-memory state cache for smooth random-walk transitions rather than independent random values.

## Deployment

The CI/CD pipeline packages the code as a tarball, uploads it to a DigitalOcean droplet via SCP, and runs `docker compose up -d --build`. The multi-stage Dockerfile uses 5 build stages to minimize the final image size.

[View on GitHub](https://github.com/FarrelAD/IOT-PROTO-SAMPLE)
