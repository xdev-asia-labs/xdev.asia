---
id: 019d8b39-bb15-7015-c015-ee1500000015
title: 'Lesson 15: Challenge 60 minutes — Advanced House Prices'
slug: bai-15-challenge-house-prices
description: >-
  Time-boxed challenge: build a complete pipeline and improve scores with
  controlled tuning + feature engineering.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 2: Industry standard workflow'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="173" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="95" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="56" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="277" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Challenge 60 minutes — House Prices</tspan>
      <tspan x="60" dy="42">advanced</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Industry standard workflow</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is the first combined challenge. You will return to the real estate problem but do it at a more mature level: pipeline, missing handling, feature engineering, cross-validation and tuning. The goal is to combine discrete skills into a complete workflow.

## Lesson objectives

- Complete a relatively complete regression challenge.
- Combine preprocessing, pipeline and tuning in the same flow.
- Write a clear summary like a mini technical report.

## Request challenge

You need to submit 3 outputs: a notebook or training script, a file describing the technical decision, and a table comparing at least 3 model experiments.

## Suggested directions

1. Start with a simple baseline.
2. Check for missing values ​​and data types.
3. Create a standard pipeline.
4. Run cross-validation.
5. Tuning few important parameters.
6. Analyze the best model and outstanding errors.

## Questions you must answer for yourself

- Which feature is the most important?
- Which group of houses does the biggest error fall into?
- Does adding feature engineering really improve it?
- Is the current model reliable enough to use as a preliminary estimate?

## Common mistakes

- Write a long notebook but without a clear conclusion.
- Tuning a lot but not saving old results.
- Evaluate based on feeling without using consistent metrics.

## Practice exercises

- Do the challenge as an independent submission.
- Create a test table with columns: model, preprocessing, CV score, notes.
- Write a lesson learned section about 10 lines long.

## Completion criteria

- [ ] Have a complete pipeline that runs end-to-end.
- [ ] There are structured experimental comparisons.
- [ ] There is a clear conclusion as to why the final model was chosen.

## Practice step by step (advanced)

1. Time-box 60 minutes in three phases: preparation, modeling, summary.
2. Design at least 3 experiments with clear differences.
3. Fully write down the assumptions for each experiment.
4. Select the final model using metric + stability criteria.
5. Post-mortem writing: if you had 2 more hours what would you do?

## Artifact should be submitted

- Experiment tracking table has at least 3 lines.
- Clean notebook, runs from start to finish.
- 1-page summary in technical + business format.

## Self-test questions

- Have you really controlled leakage?
- Which tuning brings the greatest benefit?
- Are the current results enough to ship the beta version?
