---
id: 019d8b39-bb06-7006-c006-ee0600000006
title: 'Lesson 6: Linear Regression & intuitive gradient descent'
slug: bai-6-linear-regression-gradient-descent
description: >-
  Understand loss function, gradient descent and regularization at an
  easy-to-understand level, enough to debug regression models.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 1: Supervised Learning foundation'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3393" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3393)"/>

  <!-- Decorations -->
  <g>
    <circle cx="709" cy="117" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="818" cy="146" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="927" cy="175" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1036" cy="204" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="233" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Linear Regression & intuition</tspan>
      <tspan x="60" dy="42">gradient descent</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Supervised Learning foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

After you have trained the first model, the next question is: why did the model learn? This article helps you understand linear regression at an intuitive level strong enough to read the loss, debug the results, and know when the model is learning correctly or incorrectly.

## Lesson objectives

- Understand what linear regression is trying to learn.
- Intuitively grasp loss function, gradient descent and regularization.
- Know when to use linear regression and when not to force it.

## What is Linear regression doing?

Imagine you want to predict house prices from area. The linear model tries to find the best straight line so that the error between the predicted price and the actual price is minimal.

Basic formula:

$$
\hat{y} = w_1x_1 + w_2x_2 + ... + w_nx_n + b
$$

## Loss function: a measure of how bad the model is

With regression, a familiar loss is MSE:

$$
MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y_i})^2
$$

The meaning is very common: the more the predicted model deviates from reality, the greater the loss. Squaring helps severely penalize points that are too far away.

## Gradient descent: how the model corrects errors

Gradient descent is an iterative process: predict, calculate loss, see how to increase or decrease weights, then update many times until the model is more stable.

If the learning rate is too large, the model easily jumps back and forth and does not converge. If it's too small, the model learns very slowly.

## Minimal code example

~~~python
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)
preds = model.predict(X_test)

print('MAE:', mean_absolute_error(y_test, preds))
print('Intercept:', model.intercept_)
print('Coefficients:', model.coef_)
~~~

## Regularization to prevent overlearning

- Ridge often helps smoother weighting.
- Lasso can push some weights to 0, suitable when you want to select features.

## Common mistakes

- Data normalization is completed but not applied the same way to the test set.
- Conclusion that the coefficient is a cause and effect relationship.
- Only look at the train score without looking at the test error.

## Practice exercises

- Train Linear Regression and Ridge on the same data set.
- Compare the MAE of the two models.
- Write in 5 short lines: when is Ridge better than pure Linear Regression?

## Completion criteria

- [ ] Explain the loss function in simple language.
- [ ] Understand gradient descent used to update weights.
- [ ] Compare Linear Regression and Ridge on a real example.

## Practice step by step (advanced)

1. Choose a regression dataset with at least 6 features.
2. Train baseline using Linear Regression without regularization.
3. Test Ridge with 5 different alpha values.
4. Draw a graph comparing MAE for each alpha.
5. Write a comment: How does too large an alpha affect bias/variance?

## Artifact should be submitted

- Notebook has a comparison of Linear vs Ridge.
- Table of MAE and RMSE results.
- Conclusion in 8-10 lines about choosing regularization.

## Self-test questions

- Why is MSE more sensitive to outliers than MAE?
- How does learning rate affect convergence speed?
- When is Lasso worth trying more than Ridge?
