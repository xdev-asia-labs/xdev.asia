---
id: 019d8b39-bb10-7010-c010-ee1000000010
title: 'Lesson 10: Mini-project 2 — Predicting customer churn'
slug: bai-10-mini-project-2-churn
description: >-
  Apply supervised learning to practical classification problems and present
  results from a product perspective.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 1: Supervised Learning foundation'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="766" cy="48" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1098" cy="60" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="72" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Mini-project 2 — Churn prediction</tspan>
      <tspan x="60" dy="42">customers</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Supervised Learning foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is the first mini-project classification of the series. The goal is not just to train the churn model, but to know how to ask product questions: predict who is leaving for what, what actions will be triggered, and what metrics are really worth paying attention to.

## Lesson objectives

- Make a relatively complete classification workflow.
- Build baseline, choose metrics, try multiple thresholds.
- Present results from a business perspective.

## Problem context

A subscription company wants to predict which customers are at risk of leaving in the next 30 days. If you know early, the CS or marketing team can send retention incentives.

## Recommended procedure

1. Read and check the data.
2. See if the churn rate is out of class.
3. Create a simple baseline.
4. Train logistic regression first.
5. Evaluation by confusion matrix, precision, recall, F1, ROC-AUC.
6. Test threshold according to business goals.

## Feature suggestion

- tenure
- monthly_charges
- contract_type
- support_tickets
- payment_method
- is_auto_renew

## Frame code

~~~python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
~~~

## How to present to stakeholders

Don't just say "model achieves F1 = 0.71". Let's say what percentage of customers about to churn is caught by the model, how many customers are falsely warned, and whether the retention cost is reasonable.

## Common mistakes

- Accuracy indicator when data is out of class.
- Does not specify the threshold being used.
- Using features that arise after the churn time, causing leakage.

## Practice exercises

- Make a complete notebook for churn prediction.
- Choose 2 different thresholds and compare hypothetical costs/benefits.
- Write the conclusion as a short email to PM.

## Completion criteria

- [ ] Has clear baseline, main model and metrics.
- [ ] There is an explanation about threshold.
- [ ] Conclude from a business perspective, not just a technical one.

## Practice step by step (advanced)

1. Design the churn target variable with a clear forecasting window time.
2. Build baseline according to business rules (rule-based).
3. Train at least 2 models: Logistic + Tree-based.
4. Optimize threshold according to assumed retention costs.
5. Write a short executive summary for the business team.

## Artifact should be submitted

- End-to-end notebook with pipeline.
- Markdown file summarizes cost assumptions.
- An action list table: which group needs to intervene first.

## Self-test questions

- At what step can the churn label leak?
- Why do we need a baseline rule-based before the ML model?
- How to choose which threshold is closer to the profit target?
