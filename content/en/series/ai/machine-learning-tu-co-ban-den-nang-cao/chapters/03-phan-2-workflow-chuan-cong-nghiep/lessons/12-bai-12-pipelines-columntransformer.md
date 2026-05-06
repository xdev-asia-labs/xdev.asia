---
id: 019d8b39-bb12-7012-c012-ee1200000012
title: 'Lesson 12: Pipelines & ColumnTransformer with scikit-learn'
slug: bai-12-pipelines-columntransformer
description: >-
  Build a pipeline that resists manual errors, has good reuse, and reduces the
  risk of leakage in training.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 2: Industry standard workflow'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1947" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1947)"/>

  <!-- Decorations -->
  <g>
    <circle cx="910" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1030" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Pipelines & ColumnTransformer with</tspan>
      <tspan x="60" dy="42">scikit-learn</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Industry standard workflow</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When an ML project starts with many pre-processing steps, it's easy to go wrong by hand-writing each step. Pipeline and ColumnTransformer help you combine all preprocessing and models into a unified flow, easy to reproduce, easy to debug and reduce the risk of leakage.

## Lesson objectives

- Understand why you should use Pipeline instead of discrete processing.
- Know how to use ColumnTransformer for data of many column types.
- Build a consistent train/predict workflow.

## Why is pipeline important?

Pipelines help avoid common mistakes like fitting scalers on both train and test, forgetting to apply the same transform when predicting new data, or saving the model but forgetting the preprocessing logic.

## Standard structure

- Numeric: impute then scale.
- Categorical: impute then one-hot.
- Merge using ColumnTransformer.
- Set classifier or regressor in the last step.

## Code example

~~~python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
~~~

## Benefits in practice

- Easy to put into cross-validation.
- Easy to save/load with joblib.
- Fewer errors when deploying batch inference.

## Common mistakes

- Wrong use of column list.
- Added new feature but forgot to update ColumnTransformer.
- Call fit_transform outside the pipeline and then fit again in the pipeline.

## Practice exercises

- Build a complete pipeline for churn or housing data.
- Compare code using pipeline and code processed manually.
- Write 5 lines: which type of error does the pipeline help reduce the most?

## Completion criteria

- [ ] Can build Pipeline and ColumnTransformer yourself.
- [ ] Understand how pipelines help avoid leakage.
- [ ] Complete workflow can be saved/loaded.

## Practice step by step (advanced)

1. Write a complete pipeline including preprocessing + model.
2. Split numeric/categorical into two transform branches.
3. Use the same pipeline to train, validate and predict new samples.
4. Save the pipeline with joblib and reload it for prediction.
5. Write small tests to ensure the input schema is not broken.

## Artifact should be submitted

- File pipeline can be reused.
- Minimum predict script for 1 record.
- Checklist for leakage prevention based on pipeline.

## Self-test questions

- Why is manual fit_transform more error-prone than pipeline?
- When adding new features, what needs to be updated in ColumnTransformer?
- What is the biggest benefit of pipeline when deploying?
