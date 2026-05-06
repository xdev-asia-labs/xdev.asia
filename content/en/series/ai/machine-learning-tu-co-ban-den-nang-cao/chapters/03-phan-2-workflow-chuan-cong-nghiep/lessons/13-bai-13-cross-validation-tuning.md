---
id: 019d8b39-bb13-7013-c013-ee1300000013
title: 'Lesson 13: Cross-validation & Hyperparameter Tuning'
slug: bai-13-cross-validation-tuning
description: >-
  KFold/StratifiedKFold, GridSearch/RandomizedSearch, and how to read tuning
  results to choose a more reliable model.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 2: Industry standard workflow'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7754" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7754)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="262" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="70" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="234" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="138" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.0429399400243,203.5 1054.0429399400243,240.5 1022,259 989.9570600599758,240.5 989.9570600599758,203.5 1022,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI & ML — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: Cross-validation & Hyperparameters</tspan>
      <tspan x="60" dy="42">Tuning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Industry standard workflow</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

A single train-test split can give you a false sense of model quality. Cross-validation provides a more stable evaluation, while hyperparameter tuning helps you find a reasonable configuration without relying on the luck of a data split.

## Lesson objectives

- Understand why you should not absolutely believe in a single split.
- Use cross-validation to estimate more stable performance.
- Tuning hyperparameters according to a controlled process.

## What is cross-validation?

The data is divided into many folds. Each time, one fold does validation, the remaining folds do training. The final result is the average of multiple evaluations.

## What is hyperparameter?

Hyperparameters are values ​​you choose before training, for example max_depth, n_estimators, C or learning_rate. They are different from parameters where the model learns itself from data.

## Practical tuning

- Start with a simple baseline.
- Select the least important hyperparameters.
- Use GridSearchCV or RandomizedSearchCV.
- Track both mean score and standard deviation between folds.

## Sample code

~~~python
from sklearn.model_selection import RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
~~~

## Common mistakes

- Tuning is too wide when the baseline is not yet stable.
- Use test set to adjust hyperparameter.
- Run lots of tests but don't record the results.

## Practice exercises

- Tuning a tree-based model with 3 hyperparameters.
- Compare scores before tuning and after tuning.
- Record comments: has the tuning really improved, or has it only improved very little?

## Completion criteria

- [ ] Can use cross-validation in a complete pipeline.
- [ ] Distinguish between validation used for tuning and testing used for final evaluation.
- [ ] Record experiments systematically.

## Practice step by step (advanced)

1. Run baseline with a standard split.
2. Run KFold or StratifiedKFold 5 folds.
3. Tuning using RandomizedSearchCV with no more than 4 important parameters.
4. Compare mean score and std score between configurations.
5. Finalize configuration according to performance + stability.

## Artifact should be submitted

- Table of top 10 configurations by score.
- Score distribution chart by fold.
- Rules for stopping tuning to avoid over-search.

## Self-test questions

- When should RandomizedSearchCV be preferred over GridSearchCV?
- What does a high standard deviation between folds mean?
- Why is the test set not used for tuning?
