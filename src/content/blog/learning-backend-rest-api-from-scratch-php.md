---
title: "Learning Backend Development by Building a REST API from Scratch in PHP"
description: "A look at my Basic PHP RESTful API project -- a minimal but complete CRUD API built without frameworks to understand the fundamentals."
pubDate: 2024-10-21
tags: ["PHP", "MySQL", "PDO", "REST API"]
lang: "en"
---

## What is Basic PHP RESTful API?

This is a simple but complete RESTful API built entirely in native PHP with MySQL. It provides full CRUD operations for a user entity (create, read, update, delete) with manual routing, PDO prepared statements, and consistent JSON response formatting. No frameworks, no ORM -- just raw PHP.

## Why I Built It

Before diving into frameworks like Symfony and NestJS, I wanted to understand what they abstract away. Building a REST API from scratch in native PHP forces you to handle everything manually: parsing request URIs, dispatching by HTTP method, validating input, formatting responses, managing database connections, and handling errors. This project was my foundation for understanding backend development.

## Key Technical Highlights

The routing system manually parses `$_SERVER['REQUEST_URI']` and `$_SERVER['REQUEST_METHOD']` to dispatch to the appropriate controller method. The database layer uses PDO with parameterized queries throughout, preventing SQL injection without relying on an ORM. Error handling returns proper HTTP status codes (200, 201, 400, 404, 405, 422, 500) and logs server errors with timestamps to a file.

The project structure follows a clean MVC-inspired pattern: `config/` for database setup, `src/routes/` for URI dispatching, `src/controllers/` for request handling, and `src/models/` for database queries. Environment variables are managed via `.env` files using `phpdotenv`.

## What I Learned

While this is a small project (~10 files), it taught me the fundamentals that make larger frameworks work. Understanding how routing, dependency loading, and database abstraction work at the lowest level made it much easier to pick up Symfony and NestJS afterward.

[View on GitHub](https://github.com/FarrelAD/Basic-PHP-RESTful-API)
