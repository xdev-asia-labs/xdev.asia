---
id: 019d8b39-bb23-7023-c023-ee2300000023
title: 'Lesson 23: Monitoring, Drift Detection & Retraining'
slug: bai-23-monitoring-drift-retraining
description: >-
  Monitor quality after deployment, detect drift, design retraining loop and
  minimal alerting.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 'Part 4: Production, Explainability and Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 23: Monitoring, Drift Detection &</tspan>
      <tspan x="60" dy="42">Retraining</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production, Explainability and Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

The model after deployment does not stand still. User data changes, market behavior changes, products change. Therefore, an ML system has a responsibility to monitor quality after deployment instead of considering training as finished.

## Lesson objectives

- Understand prediction drift, data drift and concept drift.
- Know the minimum signals that need to be monitored.
- Design a basic retraining loop.

## Things to keep track of

- Distributing input features.
- Prediction rate for each class.
- Model quality when there is a feedback label.
- Latency, request errors and service availability.

## Types of drifting

- Data drift: input distribution changes.
- Concept drift: the relationship between input and target changes.
- Prediction drift: model output changes abnormally.

## When to retrain?

Not every time you see a drift, you immediately retrain. You need to answer whether drifting really affects performance, whether there is enough new reliable data to retrain, and whether retraining requires human review before release.

## Minimum monitoring for newbies

- Dashboard tracks number of requests and errors.
- Distribution chart of some important features.
- Track key metrics by week or month.
- Warning when the distribution deviates beyond the threshold.

## Common mistakes

- Only monitors infrastructure but not model quality.
- Automatic retrain does not check for regression.
- Do not version data and models.

## Practice exercises

- Design a monitoring checklist for model churn or housing.
- Identify 5 indicators that must be monitored.
- Write a simple retrain policy: when to retrain, who approves, how to rollback.

## Completion criteria

- [ ] Distinguish between data drift and concept drift.
- [ ] Recommended minimum set of monitor indicators.
- [ ] Have a basic retrain and rollback plan.

## Practice step by step (advanced)

1. Select a set of monitoring indicators for quality and performance.
2. Set data drift warning thresholds for 5 main features.
3. Simulate a drift scenario and observe the warning.
4. Design a retrain process with an approval step.
5. Write a rollback playbook when the new model is inferior.

## Artifact should be submitted

- Monitoring checklist weekly.
- Retraining and release model process.
- Incident response playbook for the model.

## Self-test questions

- What is the difference between data drift and concept drift?
- When should you retrain periodically, when should you retrain according to events?
- If drift increases but metric has not decreased, what action should be taken first?
