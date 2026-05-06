---
id: 019d8a21-a107-7001-b001-d0c4e7000107
title: 'Lesson 7: Docker Registry - Docker Hub and Private Registry'
slug: bai-7-docker-registry-docker-hub-va-private-registry
description: >-
  Work with Docker Hub, create repositories, automated builds. Deploy Private
  Registry with Docker Registry and Harbor. Image tagging strategies,
  versioning, vulnerability scanning and registry security best practices.
duration_minutes: 140
is_free: true
video_url: null
sort_order: 7
section_title: "Part 2: Dockerfile and Image Optimization"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker from Basics to Advanced
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1456" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1456)"/>

  <!-- Decorations -->
  <g>
    <circle cx="848" cy="174" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1096" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="844" cy="270" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1092" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="929.1147367097487,89.5 929.1147367097487,118.5 904,133 878.8852632902513,118.5 878.8852632902513,89.50000000000001 904,75" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Docker Registry - Docker Hub and</tspan>
      <tspan x="60" dy="42">Private Registry</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Dockerfile and Image Optimization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-registry-overview"><strong>1. Docker Registry - Overview</strong></h2>
<p>A Docker Registry is a service for storing and distributing Docker images. Registry plays a central role in CI/CD workflows and deployment.</p>

<h3><strong>Common Registry Types</strong></h3>
<ul>
<li><p><strong>Docker Hub</strong>: Default public registry, free for public repos</p></li>
<li><p><strong>GitHub Container Registry (GHCR)</strong>: Integrated with GitHub Actions</p></li>
<li><p><strong>AWS ECR</strong>: Amazon Elastic Container Registry</p></li>
<li><p><strong>Google Artifact Registry</strong>: GCP container registry</p></li>
<li><p><strong>Azure Container Registry (ACR)</strong>: Microsoft Azure</p></li>
<li><p><strong>Harbor</strong>: Open-source enterprise registry</p></li>
