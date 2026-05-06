---
id: 019d8b36-bb14-7014-c014-ee1400000014
title: 'Lesson 14: Capstone — E-commerce Recommendation Engine'
slug: bai-14-capstone-recsys
description: >-
  Project summary: Build e-commerce recommendation engine end-to-end. Two-tower
  retrieval + re-ranking + A/B testing + deployment.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 4: RecSys Production — Deploy & Scale'
course:
  id: 019d8b36-aa01-7001-b001-ff0700000001
  title: 'Recommendation Systems: From Basic to Production'
  slug: he-thong-goi-y-recommendation-systems
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8605" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8605)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="206" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="150" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="94" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: Capstone — E-commerce</tspan>
      <tspan x="60" dy="42">Recommendation Engine</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Recommendation Systems: From Basic to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: RecSys Production — Deploy & Scale</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Capstone project applies all the knowledge learned in the series to a real end-to-end problem.

---

## Project requirements

### Description
Project summary: Build e-commerce recommendation engine end-to-end. Two-tower retrieval + re-ranking + A/B testing + deployment.

### Deliverables

| Item | Description | Weight |
|-------|-------------|--------|
| Code | Clean, documented GitHub repository | 30% |
| Report | Architecture decisions, results analysis | 30% |
| Demo | Interactive demo (web app or video) | 20% |
| Documentation | README, API docs, deployment guide | 20% |

---

## Recommended pipeline

1. **Data Collection & Preprocessing**: Collect and process data
2. **Model Development**: Build and train the model
3. **Evaluation**: Evaluation with appropriate metrics
4. **Optimization**: Optimize performance and costs
5. **Deployment**: Deploy to production
6. **Monitoring**: Set up monitoring & alerting

---

## Summary

Congratulations on completing the series! Apply your knowledge to real projects.
