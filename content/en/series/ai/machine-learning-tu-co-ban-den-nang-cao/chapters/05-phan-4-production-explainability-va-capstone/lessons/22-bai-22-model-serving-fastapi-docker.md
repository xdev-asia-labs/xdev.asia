---
id: 019d8b39-bb22-7022-c022-ee2200000022
title: 'Lesson 22: Model Serving with FastAPI + Docker'
slug: bai-22-model-serving-fastapi-docker
description: >-
  Package the model, build an inference API, version the model, and deploy a
  compact ML service.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 'Part 4: Production, Explainability and Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8517" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8517)"/>

  <!-- Decorations -->
  <g>
    <circle cx="686" cy="228" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="772" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="858" cy="100" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="944" cy="166" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 22: Model Serving with FastAPI + Docker</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production, Explainability and Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

After training the model but not putting it into use, the value remains in the notebook. This article helps you package the model into a simple service using FastAPI and Docker, enough for internal demo or as a foundation for real deployment.

## Lesson objectives

- Serialize the model properly.
- Create an API that receives input and returns prediction.
- Package the service using Docker.

## Minimum required output

- Saved model file, for example with joblib.
- File app FastAPI.
- File requirements or equivalent.
- Dockerfile to run the service stably.

## Proposed procedure

1. Train model and save artifact.
2. Define input or output schema.
3. Write endpoint /predict.
4. Test locally with sample request.
5. Containerize using Docker.

## FastAPI framework code

~~~python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
~~~

## Things to think about when going out into the real environment

- Logging requests and responses at an appropriate level.
- Manage model versions.
- Validation of input more carefully.
- Timeout, retry and monitoring.

## Common mistakes

- Save the model but forget the preprocessing pipeline.
- API Schema does not match training data.
- Test with beautiful data, do not test error input.

## Practice exercises

- Package the churn or housing model into an API.
- Create 3 sample requests: valid, missing fields, wrong data type.
- Write a short README describing how to run locally using Docker.

## Completion criteria

- [ ] There is a predict API that can run locally.
- [ ] Docker build and run successfully.
- [ ] Schema input is clear enough for others to call the API.

## Practice step by step (advanced)

1. Standardize input/output schema with Pydantic.
2. Package model + preprocessing into versioned artifact.
3. Write endpoint predict and health check.
4. Add basic logging and clear error handling.
5. Build Docker image and run smoke test using curl.

## Artifact should be submitted

- API source code and Dockerfile can be run.
- Example request/response for 3 situations.
- Minimum local deployment README.

## Self-test questions

- Why is it necessary to version the model artifact?
- If the input schema changes, how will backward compatibility handle it?
- Which runtime metrics need to be monitored right from the start?
