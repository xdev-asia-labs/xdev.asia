---
id: 019d8a21-a104-7001-b001-d0c4e7000104
title: 'Lesson 4: Docker Containers - Lifecycle and Management'
slug: bai-4-docker-containers-vong-doi-va-quan-ly
description: >-
  Understand container lifecycle (created, running, paused, stopped, deleted),
  advanced management commands, resource limits (CPU, memory), restart policies,
  docker inspect, docker stats and container debugging techniques.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Part 1: Docker Fundamentals"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker from Basics to Advanced
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7881" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7881)"/>

  <!-- Decorations -->
  <g>
    <circle cx="929" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="758" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1087" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="916" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="67" x2="1100" y2="147" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="97" x2="1050" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1053.3730669589463,196 1053.3730669589463,238 1017,259 980.6269330410536,238 980.6269330410536,196 1017,175" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Docker Containers - Lifecycle and</tspan>
      <tspan x="60" dy="42">Management</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Docker Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-container-lifecycle"><strong>1. Container Lifecycle</strong></h2>
<p>A Docker container goes through the following states:</p>

<pre><code>
  docker create       docker start        docker pause
  ──────────►  Created ──────────► Running ──────────► Paused
                                     │   ◄──────────
                                     │   docker unpause
                                     │
                                     │ docker stop / docker kill
                                     ▼
