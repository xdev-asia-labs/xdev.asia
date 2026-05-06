---
id: 019d8b39-bb04-7004-c004-ee0400000004
title: 'Lesson 4: First model in 30 minutes + baseline'
slug: bai-4-model-dau-tien-baseline
description: >-
  Create your first model with scikit-learn, understand what a baseline is and
  why you always need a baseline before optimizing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 0: Getting started for newbies (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="837" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1074" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="811" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1048" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: First model in 30 minutes +</tspan>
      <tspan x="60" dy="42">baseline. baseline</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 0: Getting started for newbies (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is a very important article because it helps you overcome the biggest psychological barrier: "know the theory but have never trained any model". The goal of this article is for you to manually fit your first model, measure the results, and understand why **baseline** is always a mandatory step in every serious ML project.

## Lesson objectives

- Train is first modeled using scikit-learn
- Understand how train/test split works
- Know how to create baselines and compare with machine learning models

## 1. Sample problem: predicting house prices

We assume we have house data consisting of the following columns:

- area
- room number
- age of house
- district
- selling price

In this problem:

- `X` is the feature set
- `y` is the house price

This is a **regression** problem because the output is a real number.

## 2. What is Baseline?

Baseline is the simplest option to use as a landmark.

House price prediction example:

- baseline 1: always guess the average price of the training set
- Baseline 2: always guess at the median price

If the ML model is not better than the baseline, then there is no reason to use a complex model.

## 3. Train/test split

We divide the data into two parts:

- `train`: to model learning
- `test`: to evaluate on unseen data

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

Meaning of `random_state=42` is for you and someone else to run again and get the same results.

## 4. First model with Linear Regression

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

df = pd.read_csv('data/raw/houses.csv')

features = ['dien_tich', 'so_phong', 'tuoi_nha']
X = df[features]
y = df['gia']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
mae = mean_absolute_error(y_test, pred)
print('MAE:', mae)
```

The most important thing to understand:

- `fit()` is when the model learns from train data
- `predict()` is when the model predicts on new data
- metric tells us how good the model is

## 5. Measure baseline for comparison

```python
baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
print('Model MAE:', mae)
```

If `Model MAE < Baseline MAE`, the model created value.

## 6. Why choose MAE?

With regression, common metrics are:

- MAE
- MSE
- RMSE
- $R^2$

For beginners, MAE is the easiest metric to understand because it represents the average error in the correct units of the problem.

For example:

- MAE = 0.25 billion means that the average model deviation is about 250 million.

## 7. The first model does not need to be strong

Many people just find Linear Regression simple so they want to skip it and switch to XGBoost. That is the wrong learning rhythm.

Reasons to start simple:

- easy to debug
- easy to explain
- easy to detect data errors
- Have a thinking baseline for the following models

## 8. Checklist reads results properly

After training, don't just look at a metric number and make conclusions. Ask:

1. Is the model better than the baseline?
2. Is the metric correct for the problem?
3. Is the test data representative of real data?
4. Are there any columns leaking?

## 9. A very short classification variant

If the problem is classification, the code structure is almost identical, only the model and metrics are changed.

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

clf = LogisticRegression(max_iter=300)
clf.fit(X_train, y_train)
pred = clf.predict(X_test)

print('Accuracy:', accuracy_score(y_test, pred))
```

This helps you see how the same workflow can be applied to many different problems.

## Practice exercises

1. Create a baseline for a regression problem.
2. Train a Linear Regression model.
3. Compare metrics between baseline and model.
4. Write 3 concluding sentences: is the model worth keeping, and why.

## Common mistakes

- Evaluate the model on the train set itself.
- Do not compare with baseline.
- Using metrics without understanding its actual meaning.

## Completion criteria

- [ ] Self-train the first model
- [ ] Create a reasonable baseline
- [ ] Explain why the model is better or worse than the baseline
