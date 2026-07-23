---
title: "Implementing Linear Regression from Scratch in JavaScript"
description: "Building a pure JavaScript linear regression model with CLI and web interfaces -- no ML libraries, just math."
pubDate: 2025-01-14
tags: ["JavaScript", "Machine Learning", "Chart.js", "Node.js"]
lang: "en"
---

## What is JavaScript Linear Regression?

This is a from-scratch implementation of linear regression in pure JavaScript -- no `ml-regression`, no `math.js`, no external ML libraries. It computes regression equations using classical ordinary least squares (OLS) formulas implemented entirely by hand. The project provides two interfaces: a CLI application for terminal-based workflows and a web application with interactive Chart.js scatter plot visualization.

## Why I Built It

Most machine learning tutorials skip over the math by importing a library that does everything behind the scenes. I wanted to understand the actual formulas -- slope, intercept, least squares -- by implementing them from scratch in a language I use every day. JavaScript was a natural choice because it let me build both a Node.js CLI and a browser-based visual interface for the same core algorithm.

## Key Technical Highlights

The core algorithm computes summary statistics (sum of X, sum of Y, sum of XY, sum of X-squared) using `Array.reduce()`, then calculates slope and intercept from those. The modeling functions return a JavaScript closure -- `const y = (x) => a + (b * x)` -- making the equation callable for repeated predictions. The web interface uses Chart.js to render a scatter plot of data points with the fitted regression line overlaid. Both interfaces include data validation to ensure selected columns contain only numeric values.

The project ships with four sample datasets covering salary prediction, student performance, and sports statistics, demonstrating both single-feature and multi-feature regression.

## What I Learned

Implementing OLS by hand demystified what libraries like scikit-learn do internally. The closure pattern for returning callable equations was an elegant JavaScript-specific insight, and building both CLI and web interfaces for the same algorithm highlighted how different UX contexts change how users interact with the same underlying computation.

[View on GitHub](https://github.com/FarrelAD/JavaScript-Linear-Regression)
