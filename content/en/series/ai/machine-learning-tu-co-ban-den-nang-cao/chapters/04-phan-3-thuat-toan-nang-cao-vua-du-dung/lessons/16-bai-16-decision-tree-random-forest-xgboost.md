---
id: 019d8b39-bb16-7016-c016-ee1600000016
title: 'Lesson 16: Decision Tree, Random Forest, XGBoost'
slug: bai-16-decision-tree-random-forest-xgboost
description: >-
  Compare tree-based models, understand feature importance, overfitting control,
  and how to choose a model according to the data.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 3: Advanced algorithms just enough to use'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6500" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6500)"/>

  <!-- Decorations -->
  <g>
    <circle cx="961" cy="253" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="683" cy="55" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="216" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="117" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Decision Tree, Random Forest,</tspan>
      <tspan x="60" dy="42">XGBoost</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Advanced algorithms just enough to use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

At this point you have a good foundation with linear models. This article introduces the most powerful group of algorithms for panel data in practice: decision tree, random forest and boosting.

## Lesson objectives

- Understand the intuition of decision trees, random forests and boosting.
- Know the trade-off between explainability, speed and strength.
- Choose the correct tree-based model for table data.

## Decision tree

The decision tree divides the data by questions like age > 35 or num_tickets > 3. The advantage is that it is easy to understand, does not need to scale features and captures nonlinear relationships. The downside is that it's easy to overfit if the tree is too deep.

## Random forest

Random forest is many decision trees voting together. It often reduces overfitting compared to a single tree and is a very strong baseline for tabular data.

## XGBoost and boosting

Boosting trains multiple trees sequentially; Each new tree focuses on correcting the errors of the previous tree. Therefore, boosting is often very powerful on the leaderboard, but can also be easily abused if validation is not well controlled.

## When to use which model?

- Decision tree: to learn intuitively or need a very easy-to-explain model.
- Random forest: strong baseline for tabular data.
- XGBoost, LightGBM, CatBoost: when you want to seriously optimize performance.

## Common mistakes

- Tuning too many parameters from the beginning.
- Use feature importance as evidence of cause and effect.
- Trust leaderboard without viewing leakage or error analysis.

## Practice exercises

- Compare Logistic Regression, Random Forest and XGBoost on the same dataset.
- Record metrics, training time, explainability.
- Conclude which model is most suitable for the small and medium enterprise environment.

## Completion criteria

- [ ] Explain the difference between bagging and boosting.
- [ ] Know when a tree-based model is stronger than a linear model.
- [ ] Compare at least 3 models on the same problem.

## Practice step by step (advanced)

1. Run 3 models: Decision Tree, Random Forest, XGBoost.
2. Keep the same train/validation split for fair comparison.
3. Light tuning for each model (2-3 main parameters).
4. Compare metrics, training time and ease of interpretation.
5. Write a guideline for selecting models according to data size.

## Artifact should be submitted

- Benchmark table for three models.
- The feature importance chart has careful annotations.
- Rules for choosing models according to each project context.

## Self-test questions

- How are Bagging and Boosting different in terms of error reduction mechanism?
- When is Random Forest better than XGBoost?
- Why is feature importance not synonymous with cause and effect?
