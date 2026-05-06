---
id: 019d8b39-bb07-7007-c007-ee0700000007
title: 'Lesson 7: Logistic Regression & probability for classification'
slug: bai-7-logistic-regression
description: >-
  Logistic regression, sigmoid, decision boundary, threshold and how to properly
  read prediction probabilities.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 1: Supervised Learning foundation'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8295" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8295)"/>

  <!-- Decorations -->
  <g>
    <circle cx="977" cy="61" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="731" cy="255" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <polygon points="943.5166604983954,108 943.5166604983954,134 921,147 898.4833395016046,134 898.4833395016046,108 921,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Logistic Regression & probability for</tspan>
      <tspan x="60" dy="42">classification</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Supervised Learning foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Regression predicts a continuous number, while classification predicts a label. Logistic regression is the best introductory classification model because it is simple, fast, easy to explain, and still very useful in practice.

## Lesson objectives

- Understand how logistic regression differs from linear regression.
- Read the model's output probability.
- Know how to use threshold to turn probabilities into prediction labels.

## From straight lines to probabilities

Linear regression can produce any value from negative infinity to positive infinity. Binary classification requires probabilities between 0 and 1. Logistic regression solves this problem with the sigmoid function:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

Where $z = w_1x_1 + ... + w_nx_n + b$.

## Threshold is not a fixed truth

Many new users default threshold = 0.5. This is only true when the costs of false positive and false negative are equal.

For example, disease prediction often prioritizes recall; Customer churn may accept redundant calls rather than missing out on customers who are about to leave.

## Code example

~~~python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
proba = model.predict_proba(X_test)[:, 1]
preds = (proba >= 0.5).astype(int)

print(classification_report(y_test, preds))
~~~

## Advantages and disadvantages

Advantages: fast, easy to baseline, easy to explain.

Disadvantages: ineffective when class boundaries are too nonlinear, sensitive to feature engineering and scale.

## Common mistakes

- Only look at accuracy when the data is out of class.
- Do not test different thresholds.
- Causes leakage in the encoding or scaling step.

## Practice exercises

- Train logistic regression for a churn or spam problem.
- Compare results at thresholds 0.3, 0.5 and 0.7.
- Write comments: which threshold suits the problem better and why.

## Completion criteria

- [ ] Explain the role of sigmoid.
- [ ] Understand the probability that the output differs from the predicted label.
- [ ] Know how to change threshold according to business goals.

## Practice step by step (advanced)

1. Use dataset classification with slight class bias.
2. Train Logistic Regression with default class_weight and balanced.
3. Compare precision, recall, F1 at thresholds 0.3, 0.5, 0.7.
4. Draw precision-recall tradeoff.
5. Choose threshold according to a specific product scenario.

## Artifact should be submitted

- Metric table according to threshold.
- A confusion matrix with clearly annotated FP/FN.
- 1 page explanation sent to PM for simulation.

## Self-test questions

- Why is threshold 0.5 not always correct?
- In what cases should recall be prioritized over precision?
- High ROC-AUC but still bad business outcomes, what could be the reason?
