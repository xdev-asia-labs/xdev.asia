---
id: 019d8b39-bb11-7011-c011-ee1100000011
title: 'Lesson 11: Missing Values, Categorical Variables, Feature Engineering'
slug: bai-11-missing-categorical-feature-engineering
description: >-
  Actual data processing process: missing, encoding, scaling, outlier handling
  and basic feature crosses.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 2: Industry standard workflow'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8918" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8918)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1006" cy="168" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="912" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="818" cy="260" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="724" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="92" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Missing Values, Categorical</tspan>
      <tspan x="60" dy="42">Variables, Feature Engineering</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Industry standard workflow</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Real-life data is rarely clean. Columns are missing values, text has strange symbols, categories have too many levels, features are manually created inconsistently. This article helps you handle these tasks in a repeatable and error-free way.

## Lesson objectives

- Handle missing values for numeric and categorical.
- Encode categorical variables properly.
- Understand what feature engineering is and when to stop.

## Missing values: does not mean missing them all

Missing data is sometimes a signal. Before filling, ask: why is the data missing, is it missing randomly or systematically, and should we create additional columns to mark missing or not?

## Common treatment

- Numeric: median is usually safer than mean when there is an outlier.
- Categorical: fill with the most common value or label it Unknown.
- Missing indicator: useful when the missing itself is a signal.

## Feature engineering is practical

Prioritize features with clear business logic such as total spending in the last 30 days, number of support tickets per month or usage rate above limit.

## Frame code

~~~python
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder

num_imputer = SimpleImputer(strategy='median')
cat_imputer = SimpleImputer(strategy='most_frequent')
encoder = OneHotEncoder(handle_unknown='ignore')
~~~

## Common mistakes

- Fill missing before splitting data.
- Create a feature that sees the future.
- One-hot has too many categories, making the feature space uselessly bloated.

## Practice exercises

- Choose a tabular dataset that has both numeric and categorical.
- Try 2 ways to fill in missing numbers for numeric.
- Create 3 new features with clear business explanations.

## Completion criteria

- [ ] Know how to choose the fill missing strategy for each column type.
- [ ] Using one-hot encoding does not cause errors when encountering new categories.
- [ ] Create new features without causing leakage.

## Practice step by step (advanced)

1. Prepare data profiling report (missing rate, cardinality, outlier).
2. Create 2 versions of missing handling for comparison.
3. Encode classification using one-hot and compare with target safe encoding.
4. Add 3 business features with clearly explained origins.
5. Evaluate the impact of each step on the final metric.

## Artifact should be submitted

- Data quality table before/after processing.
- List of new features and reasons for their existence.
- Experiment log following each preprocessing step.

## Self-test questions

- Non-random missingness needs to be handled differently?
- When does one-hot become ineffective?
- How to prove that the new feature has real value?
