---
id: 019d8b39-bb20-7020-c020-ee2000000020
title: 'Lesson 20: Basic Time Series Forecasting'
slug: bai-20-time-series-forecasting
description: >-
  Walk-forward validation, lag features, baseline forecast, and basic demand
  forecasting applications.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 3: Advanced algorithms just enough to use'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5736" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5736)"/>

  <!-- Decorations -->
  <g>
    <circle cx="869" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="638" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="907" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="676" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.3730669589464,166 1023.3730669589464,208 987,229 950.6269330410536,208 950.6269330410536,166 987,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 20: Basic Time Series Forecasting</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Advanced algorithms just enough to use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Time-based forecasting differs from regular tabular ML in one very important way: time order is the core. If you do the wrong way to divide data or create features, it's easy to trick yourself with beautiful results that are useless when actually deployed.

## Lesson objectives

- Understand the difference between forecasting and regular regression.
- Know how to create basic time features.
- Avoid leakage in time series.

## Characteristics of time series

- Data is in previous order.
- There may be trends, seasons, cycles.
- Close observations often depend on each other.

## Popular features

- Lag features like sales_t-1, sales_t-7.
- Rolling statistics such as 7-day, 30-day average.
- Calendar features such as days of the week, months, quarters, and holidays.

## How to divide data correctly

Doesn't shuffle randomly like regular tabular. Let's divide it along the time axis: train is in the past, validation is closer to the present, test is the latest segment.

## Baseline is very important

Before using complex models, compare with a baseline such as the previous period's value, a moving average or the same period last week.

## Common mistakes

- Random split time series.
- Create a rolling feature that looks into the future.
- Do not compare with naive baseline.

## Practice exercises

- Forecast daily revenue using lag features and a simple tree-based model.
- Compare with baseline of the same period the previous day.
- Write comments when the model learns more signals beyond the baseline.

## Completion criteria

- [ ] Divide data by time logically.
- [ ] Create basic lag and rolling features.
- [ ] Compare the model with the time baseline.

## Practice step by step (advanced)

1. Build train/validation/test on the time axis.
2. Create lag features and rolling window features.
3. Compare ML model with naive baseline.
4. Evaluate by MAE, MAPE and error by stage.
5. Test performance at important seasonal milestones.

## Artifact should be submitted

- Forecast vs actual chart over time.
- Error table by week or month.
- Comment on seasonal drift and suggest model updates.

## Self-test questions

- Why does random split cause serious errors in forecasting?
- When is the baseline over the same period good enough to use immediately?
- Which features easily cause leakage in time series?
