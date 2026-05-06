---
id: 019d8b39-bb19-7019-c019-ee1900000019
title: 'Lesson 19: Anomaly Detection in real systems'
slug: bai-19-anomaly-detection
description: >-
  Isolation Forest, One-Class SVM and design warning rules for fraud, log
  monitoring, quality control.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 'Part 3: Advanced algorithms just enough to use'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-85" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-85)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="147" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 19: Anomaly Detection in the system</tspan>
      <tspan x="60" dy="42">really</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Advanced algorithms just enough to use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

There are problems where positive classes are so rare that there are almost not enough labels to train a standard classification, for example detecting fraud, operational abnormalities, sensor errors. Then anomaly detection is a direction worth considering.

## Lesson objectives

- Understand how anomaly detection differs from classification.
- Know some introductory techniques like Isolation Forest.
- Know how to evaluate abnormalities in the business context.

## Core intuition

An outlier is one that differs from the rest of the data in a meaningful way. The point is that different is not always bad. Therefore, anomaly detection always needs to be tied to the operational context.

## Isolation Forest

Intuitive idea: outliers are often isolated faster in random splits of the tree. The easier it is to separate a point, the more likely it is to be an anomaly.

## Evaluate the model

You may need a set of limited labels, review the top alarms with a business expert, and measure the cost of false alarms versus the cost of missing them.

## Common mistakes

- Call every outlier an important anomaly.
- Not confirmed with domain expert.
- Use threshold arbitrarily without considering the operational impact.

## Practice exercises

- Run Isolation Forest on a transaction dataset.
- Take the top 20 most unusual points to review.
- Write comments: which warnings are reasonable, which warnings could be false alarms.

## Completion criteria

- [ ] Understanding anomaly detection is not just about finding outliers with your eyes.
- [ ] Know how to use a basic model like Isolation Forest.
- [ ] Link the assessment with actual operating costs.

## Practice step by step (advanced)

1. Clearly define what an anomaly is in a specific problem.
2. Run Isolation Forest with several levels of contamination.
3. Check the top abnormal scores by manual review.
4. Compare false alarms between configurations.
5. Propose practical operating warning thresholds.

## Artifact should be submitted

- List of top anomalies with explanations.
- Operational impact table of false positives.
- Proposed warning triage procedure.

## Self-test questions

- What is the difference between statistical outlier and business anomaly?
- Why does contamination need to be adjusted according to context?
- When is human-in-the-loop needed for anomaly review?
