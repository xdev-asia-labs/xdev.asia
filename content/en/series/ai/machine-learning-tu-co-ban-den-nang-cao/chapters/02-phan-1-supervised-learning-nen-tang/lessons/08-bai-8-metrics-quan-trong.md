---
id: 019d8b39-bb08-7008-c008-ee0800000008
title: 'Lesson 8: Important metrics: Accuracy, Precision, Recall, F1, AUC'
slug: bai-8-metrics-quan-trong
description: >-
  Choose the right metric according to the business problem; when to use PR-AUC
  instead of ROC-AUC; Avoid optimizing for the wrong goal.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 1: Supervised Learning foundation'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="916" cy="178" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="732" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1048" cy="190" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="864" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="202" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="218" x2="1100" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="248" x2="1050" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Important Metrics: Accuracy,</tspan>
      <tspan x="60" dy="42">Precision, Recall, F1, AUC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Supervised Learning foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Whether the model is good or not depends a lot on the metric you choose. The same model can look very good in terms of accuracy but very bad in terms of recall. This article helps you choose metrics according to the right problem instead of out of habit.

## Lesson objectives

- Distinguishing metrics for regression and classification.
- Understand accuracy, precision, recall, F1, ROC-AUC and when to use them.
- Know why metrics must stick to product goals.

## Regression metrics

- MAE: easy to understand, measures the average absolute error.
- RMSE: penalty for serious errors is greater than MAE.
- R-squared: measures the amount of variance explained, but don't sanctify it.

## Classification metrics

- Accuracy: overall correct prediction rate.
- Precision: among the samples predicted to be positive, how many are actually positive.
- Recall: among the true positive samples, how many can the model capture?
- F1-score: balance between precision and recall.
- ROC-AUC: measures the ability to rank the probability between two classes.

## Example of selecting metrics according to context

- Detect fraud: prioritize high recall so you don't miss it.
- Spam emails: need to be accurate enough to avoid mistakenly blocking regular emails.
- Customer churn: often cares about recall and the business value of retention actions.

## Sample code

~~~python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score

print('Accuracy:', accuracy_score(y_test, preds))
print('Precision:', precision_score(y_test, preds))
print('Recall:', recall_score(y_test, preds))
print('F1:', f1_score(y_test, preds))
print('ROC-AUC:', roc_auc_score(y_test, proba))
~~~

## Common mistakes

- Use accuracy for strongly imbalanced data.
- Compare models using different metrics between tests.
- Optimize technical metrics but forget business costs.

## Practice exercises

- Take an imbalanced classification problem.
- Calculate confusion matrix and 5 main metrics.
- Write a short paragraph: if you were a PM, which metric would you choose as the main KPI?

## Completion criteria

- [ ] Choose the appropriate metric for at least 3 different problems.
- [ ] Explain precision and recall with real-life examples.
- [ ] Can read the confusion matrix without confusion.

## Practice step by step (advanced)

1. Choose a churn or fraud problem with class imbalance.
2. Measure 5 metrics: Accuracy, Precision, Recall, F1, ROC-AUC.
3. Add PR-AUC for comparison in class difference data.
4. Simulate FP/FN cost and calculate expected cost.
5. Key metrics used for weekly reporting.

## Artifact should be submitted

- Metric table + PR curve and ROC curve graphs.
- Simple cost matrix model.
- Conclusion of main metrics and secondary metrics for monitoring.

## Self-test questions

- Why is accuracy misleading on out-of-class data?
- How does PR-AUC differ from ROC-AUC in terms of meaning?
- When do you need to monitor multiple metrics at the same time?
