---
id: 019d8b39-bb17-7017-c017-ee1700000017
title: 'Lesson 17: Clustering (K-Means, DBSCAN, Hierarchical)'
slug: bai-17-clustering
description: >-
  Unsupervised learning for customer segmentation and data structure discovery
  in the absence of labels.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 3: Advanced algorithms just enough to use'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4140" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4140)"/>

  <!-- Decorations -->
  <g>
    <circle cx="980" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 17: Clustering (K-Means, DBSCAN,</tspan>
      <tspan x="60" dy="42">Hierarchical)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Advanced algorithms just enough to use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You don't always have labels. Clustering is a group of techniques that help find hidden structures in unlabeled data. In practice, it is often used for customer segmentation, behavioral grouping, and data discovery.

## Lesson objectives

- Understand how clustering is different from supervised learning.
- Know how to use K-Means at a basic level.
- Understand the limitations of clustering evaluation.

## How does K-Means work?

1. Choose number of clusters k.
2. Assign each point to the nearest cluster center.
3. Update the cluster center again.
4. Repeat until stable.

## Appropriate practical problem

- Grouping customers according to purchasing behavior.
- Group posts or users by embedding.
- Create segments for business teams to act differently.

## How to choose the number of clusters?

There is no absolute answer. Can refer to elbow method, silhouette score and most importantly, business interpretation.

## Common mistakes

- Think that the generated cluster is always a natural truth.
- Choose k just because the chart looks nice.
- Do not check the business significance of the cluster.

## Practice exercises

- Run K-Means on a dataset segmentation.
- Describe each cluster in business language.
- Suggest a different action for each cluster.

## Completion criteria

- [ ] Understand clustering without labels.
- [ ] Can run K-Means with scaled data.
- [ ] Interpret the cluster from a business perspective.

## Practice step by step (advanced)

1. Normalize features before clustering.
2. Run K-Means with multiple k values.
3. Evaluate using silhouette score and business interpretation.
4. Try adding DBSCAN or Hierarchical for comparison.
5. Name the cluster according to business language.

## Artifact should be submitted

- Comparison table of clustering algorithms.
- Profile describing each cluster (cluster profile).
- List of recommended actions for each cluster.

## Self-test questions

- Why doesn't clustering have an absolutely correct answer?
- When is DBSCAN more beneficial than K-Means?
- How to evaluate whether a cluster is useful for business or not?
