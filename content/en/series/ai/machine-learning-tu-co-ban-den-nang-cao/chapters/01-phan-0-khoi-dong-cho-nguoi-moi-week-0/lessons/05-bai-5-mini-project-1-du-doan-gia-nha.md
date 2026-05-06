---
id: 019d8b39-bb05-7005-c005-ee0500000005
title: 'Lesson 5: Mini-project 1 — Predicting house prices'
slug: bai-5-mini-project-1-du-doan-gia-nha
description: >-
  The first complete practice session: simple EDA, train/test split, baseline
  model, evaluation and lessons learned.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 0: Getting started for newbies (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2294" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2294)"/>

  <!-- Decorations -->
  <g>
    <circle cx="677" cy="81" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="831" cy="115" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="132" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="149" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.5166604983954,158 993.5166604983954,184 971,197 948.4833395016046,184 948.4833395016046,158 971,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Mini-project 1 — Predicting house prices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 0: Getting started for newbies (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is the first mini-project of the series. The goal is not to optimize to the best level, but for you to go through the entire process from start to finish: understand the data, choose features, split train/test, build baseline, train model, evaluate and draw conclusions.

## Problem context

You have housing data in a city with the following information:

- area
- number of bedrooms
- toilet number
- district
- age of house
- selling price

The goal is to predict the house price for a new home.

## Mini-project goal

- Do basic EDA to understand the data
- Build the first baseline
- Train at least one regression model
- Give clear conclusions using metrics

## 1. Business question

A realtor or listing system wants to estimate a fair selling price for a new home.

Corresponding ML question:

> With the input information of the house, what is the estimated selling price?

## 2. Minimum EDA required

```python
import pandas as pd

df = pd.read_csv('data/raw/houses.csv')

print(df.head())
print(df.shape)
print(df.info())
print(df.isnull().sum())
print(df.describe())
```

You need to answer at least the following questions:

1. How many rows of data are there?
2. Are there any columns missing data?
3. What is the target column?
4. Are there any columns that don't make sense to include in the model?

## 3. Select the first feature

In the first round, don't choose too many columns. Just a few obvious features:

```python
features = ['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha']
X = df[features]
y = df['gia']
```

Reasons for choosing few features in the first round:

- easy to debug
- easy to understand the influence of each variable
- reduce errors in complex data processing

## 4. Baseline

```python
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

baseline_pred = [y_train.mean()] * len(y_test)
baseline_mae = mean_absolute_error(y_test, baseline_pred)

print('Baseline MAE:', baseline_mae)
```

## 5. First model

```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict(X_test)
model_mae = mean_absolute_error(y_test, pred)

print('Model MAE:', model_mae)
```

## 6. Read the results

For example:

- Baseline MAE: 0.85 billion
- Model MAE: 0.42 billion

Preliminary conclusion:

- The model is quite clearly better than the baseline
- Initial workflow is on track
- Can be further improved with feature engineering or more powerful models

## 7. Expand one step further

Try adding a categorical variable like `quan`:

```python
X = pd.get_dummies(df[['dien_tich', 'so_phong', 'so_toilet', 'tuoi_nha', 'quan']], drop_first=True)
y = df['gia']
```

Then train again and compare metrics. This is a simple way to test whether adding location information actually helps the model.

## 8. Short report sample after mini-project

You should write a summary like this:

> I use 4 basic numerical features to predict house prices. Baseline prediction by average price gives MAE = X, while Linear Regression gives MAE = Y. This shows that the model has learned the relationship between feature and selling price. However, the model currently does not use the detailed position feature and has not processed the outlier.

This is a very important habit because ML is not just about coding, but also about communicating the results.

## Extra challenge

1. Compare Linear Regression with Random Forest Regressor.
2. Try removing a feature to see how the metric changes.
3. Create features `gia_m2` and see if there is leakage if used incorrectly.

## Common mistakes

- Using every column without understanding the meaning.
- Forgot to separate train/test before evaluating.
- Seeing that the metric is better than the baseline and then drawing conclusions too early, without checking the data.

## Completion criteria

- [ ] Finished running the mini-project from start to finish
- [ ] Has a baseline and at least 1 machine learning model
- [ ] Can write a short, easy-to-understand conclusion about the results
