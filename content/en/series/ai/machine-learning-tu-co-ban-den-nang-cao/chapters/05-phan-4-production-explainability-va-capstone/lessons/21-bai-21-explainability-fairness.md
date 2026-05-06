---
id: 019d8b39-bb21-7021-c021-ee2100000021
title: 'Lesson 21: Explainability & Fairness for stakeholders'
slug: bai-21-explainability-fairness
description: >-
  SHAP, permutation importance, fairness checks and how to present results so
  the business team can understand and trust the model.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 'Part 4: Production, Explainability and Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7373" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7373)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="144" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="220" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="258" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="36" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 21: Explainability & Fairness for</tspan>
      <tspan x="60" dy="42">stakeholders</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production, Explainability and Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

A good model in a notebook is not enough. Stakeholders need to understand why the model makes the decisions it does, and the organization also needs to know if the model is biased. This is where explainability and fairness become imperative.

## Lesson objectives

- Understand the difference between local and global explainability.
- Know how to use permutation importance or SHAP at an introductory level.
- Know how to ask fairness questions before deploying.

## Explainability to whom?

- Data scientists need to debug the model.
- PM needs to understand which features affect results.
- Professional stakeholders need simple, trustworthy stories.
- End users may need specific reasons for an individual prediction.

## Two levels of explanation

- Global explainability: what factors does the model generally rely on?
- Local explainability: why a particular sample is predicted like that.

## Fairness is not a secondary option

If the model influences decisions with humans, you should test the performance for each user group, the rate of false positives or false negatives by each group, and which features can be proxies for sensitive attributes.

## How to present to stakeholders

- Avoid lengthy formulas.
- Use 3 to 5 most influential features.
- Clearly state the confidence level and limits of the model.
- State the risks of bias frankly.

## Common mistakes

- Abusing the SHAP chart without understanding its nature.
- Confusing explainability with proving cause and effect.
- Only check fairness after deployment.

## Practice exercises

- Choose a trained classification model.
- Create permutation importance or SHAP summary.
- Check metrics by 2 different user groups.
- Write the explanation as if you were presenting to the PM.

## Completion criteria

- [ ] Distinguish between global and local explainability.
- [ ] Know at least one basic fairness check.
- [ ] Present results that non-technical stakeholders can still understand.

## Practice step by step (advanced)

1. Choose a trained model and a fixed validation set.
2. Calculate global importance and local explanation for 5 samples.
3. Divide data into 2-3 user groups to compare fairness.
4. Record the metric difference by group.
5. Prepare ethical risk memo and control recommendations.

## Artifact should be submitted

- 1-2 page explainability report.
- Fairness metrics table by group.
- List of actions to reduce bias by priority.

## Self-test questions

- Why does explainability not prove causality?
- How much metric difference is alarming?
- When should I refuse to deploy because of fairness risk?
