---
id: 019d8b39-bb18-7018-c018-ee1800000018
title: 'Lesson 18: PCA, t-SNE, UMAP for visualization'
slug: bai-18-pca-tsne-umap
description: >-
  Reduce data dimensionality to understand clusters, detect anomalies, and
  increase downstream model performance.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 'Part 3: Advanced algorithms just enough to use'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1930" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1930)"/>

  <!-- Decorations -->
  <g>
    <circle cx="768" cy="274" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="936" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="604" cy="90" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="772" cy="258" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="166" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.1147367097487,149.5 989.1147367097487,178.5 964,193 938.8852632902513,178.5 938.8852632902513,149.5 964,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: PCA, t-SNE, UMAP for visualization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Advanced algorithms just enough to use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When data has too many dimensions, it is difficult to see, difficult to draw, and sometimes difficult to model. PCA, t-SNE and UMAP help reduce data dimensionality but serve different purposes.

## Lesson objectives

- Distinguish PCA from t-SNE and UMAP.
- Know when to use it for dimensional compression and when to use it for visualization.
- Avoid misinterpreting dimensionality reduction plots.

## PCA

PCA finds new axes that retain the most variance of the data. This is a fast, linear technique that is relatively easy to explain and useful when it comes to reducing input dimensionality.

## t-SNE and UMAP

t-SNE and UMAP are mainly useful for visualizing local structure in high-dimensional data. UMAP is generally faster and quite suitable for embedding; Robust t-SNE for visualizing local clusters.

## Interpretation warning

The distance on the 2D chart after dimension reduction does not always reflect the true distance in the original space. Don't use pretty graphs as too strong evidence for a conclusion.

## Common mistakes

- Using t-SNE or UMAP as the main feature input without checking carefully.
- Interpret the diagram as a true class boundary.
- Do not scale data before PCA when needed.

## Practice exercises

- Run PCA and t-SNE on the same dataset.
- Draw 2D diagrams for both.
- Write comments: which tool is more suitable for visualization, which tool is more suitable for preprocessing.

## Completion criteria

- [ ] Distinguish the purposes of PCA, t-SNE, UMAP.
- [ ] Do not over-interpret the dimensionality reduction diagram.
- [ ] Know how to choose tools for the right purpose.

## Practice step by step (advanced)

1. Run PCA retaining 90% of the variance.
2. Data visualization using 2D PCA.
3. Run t-SNE and UMAP on the same input embedding.
4. Comparison of runtime and cluster image stability.
5. Write an explanatory warning for dashboard viewers.

## Artifact should be submitted

- Visual set from 3 techniques.
- Table comparing the goals of using each technique.
- Instructions for choosing dimension reduction tools according to use-case.

## Self-test questions

- What advantages does PCA have in terms of reproducibility?
- Why is t-SNE not suitable as the main feature?
- When is UMAP preferable to t-SNE?
