---
id: 019d8b39-bb09-7009-c009-ee0900000009
title: 'Lesson 9: Overfitting/Underfitting and how to fix it'
slug: bai-9-overfitting-underfitting
description: >-
  Learning curve, validation curve, bias-variance tradeoff and systematic model
  improvement strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 1: Supervised Learning foundation'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6534" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6534)"/>

  <!-- Decorations -->
  <g>
    <circle cx="780" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Overfitting/Underfitting and how</tspan>
      <tspan x="60" dy="42">edit</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Supervised Learning foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Learning ML isn't just about getting better grades. A model that is strong on the training set but weak on new data is a model that is not ready for practical use. This article helps you spot overfitting and underfitting with very specific signs.

## Lesson objectives

- Distinguish between overfitting and underfitting.
- Know how to read train score and validation score together.
- There is a checklist to handle when the model has not learned properly.

## What is Underfitting?

Underfitting occurs when the model is too simple or the features are too poor, causing it to not learn the signal well enough even on the training set.

## What is overfitting?

Overfitting occurs when the model learns both the real signal and the unique noise of the training set.

Typical signs:

- Train score is very high.
- Validation score is clearly low.
- Each time you change the split, the results fluctuate drastically.

## How to handle it in a pragmatic way

When underfitting: add useful features, use a stronger model, train longer if it is an iterative algorithm.

When overfitting: reduce model complexity, add regularization, increase data or use cross-validation.

## Learning curves

Learning curve shows you if you increase the data, the model is likely to improve. This is a better way to diagnose than guessing.

## Common mistakes

- Constantly increasing model complexity without proper validation.
- Run many times and then choose the best split.
- Fix features based on test set.

## Practice exercises

- Train 3 models with increasing complexity.
- Record training score and validation score.
- Conclusion which model is underfit, which model is overfit, which model is most reasonable.

## Completion criteria

- [ ] Explain two concepts in everyday language.
- [ ] Know how to read the difference between training and validation.
- [ ] Suggest at least 2 solutions for each situation.

## Practice step by step (advanced)

1. Train three models with increasing complexity.
2. Collect training/validation scores for each model.
3. Draw the learning curve according to the amount of training data.
4. Try regularization or reducing model depth.
5. Record changes before and after editing.

## Artifact should be submitted

- Learning curve chart.
- Comparison table before/after adjustment.
- Checklist of overfitting decisions applied to the following project.

## Self-test questions

- Which sign best distinguishes underfit and overfit?
- Why can more data reduce overfitting?
- When is reducing model complexity the most reasonable choice?
