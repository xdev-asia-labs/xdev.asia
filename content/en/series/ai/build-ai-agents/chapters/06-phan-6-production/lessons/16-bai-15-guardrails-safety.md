---
id: 019c9619-cc15-7015-d015-cc1500000015
title: 'Lesson 15: Guardrails & Safety — Protect Agents from "rebellion"'
slug: bai-15-guardrails-safety
description: >-
  Prompt injection defense, output validation, PII filtering. Guardrails
  frameworks: NeMo Guardrails, Guardrails AI. Human-in-the-loop patterns. Rate
  limiting and cost controls.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 6: Production & Actual Deployment'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1233" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1233)"/>

  <!-- Decorations -->
  <g>
    <circle cx="937" cy="241" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="774" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="611" cy="35" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="948" cy="192" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="89" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Guardrails & Safety — Protecting Agents</tspan>
      <tspan x="60" dy="42">from "rebellion"</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Production & Actual Deployment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Agents have the right to **act** — meaning the wrong agent can cause **real damage**: deleting files, sending wrong emails, leaking data. Safety is not a nice-to-have — it is a **mandatory requirement**.

---

## 1. Threats

### 1.1 Prompt Injection
Users intentionally provide hidden instructions to hijack agent behavior.

### 1.2 Tool Misuse
Agent calls the tool the wrong way: DELETE instead of SELECT, sending email to the wrong person.

### 1.3 Data Leakage
Agent accidentally exposed sensitive data in response.

## 2. Defense Layers

```python
class GuardedAgent:
    def run(self, user_input):
        # Layer 1: Input validation
        if self.detect_injection(user_input):
            return "Suspicious input detected"
        
        # Layer 2: Tool permission check
        # Only allow approved tools
        
        # Layer 3: Output filtering
        output = self.agent.run(user_input)
        output = self.filter_pii(output)
        
        # Layer 4: Human approval for risky actions
        if self.is_risky_action(output):
            return self.request_human_approval(output)
        
        return output
```

---

## Summary

- Agent safety = input validation + tool permissions + output filtering + human approval
- Prompt injection is threat #1
- Never give agent DELETE/UPDATE permissions without approval
- Cost controls prevent runaway spending
- Human-in-the-loop for high-stakes decisions

## Exercises

1. Implement prompt injection detector
2. Build permission system for tools (read-only vs read-write)
3. Implement PII filter (mask emails, phone numbers)
4. Build human-in-the-loop approval flow

