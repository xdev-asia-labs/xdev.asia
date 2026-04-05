---
id: 019c9619-cc13-7013-d013-cc1300000013
title: 'Bài 13: Agent-to-Agent (A2A) Protocol — Agent nói chuyện với nhau'
slug: bai-13-a2a-protocol
description: >-
  Google A2A Protocol: Agent Cards, capability discovery, task lifecycle, inter-agent communication. So sánh A2A vs MCP. Demo hai agent từ hai framework khác nhau collaborate.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 5: MCP, A2A & Multi-Agent Systems"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2469" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2469)"/>

  <!-- Decorations -->
  <g>
    <circle cx="603" cy="179" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="606" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="609" cy="105" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="612" cy="68" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="31" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="69" x2="1100" y2="149" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="99" x2="1050" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.1051177665153,147 1007.1051177665153,191 969,213 930.8948822334847,191 930.8948822334847,147 969,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI &amp; ML — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Agent-to-Agent (A2A) Protocol —</tspan>
      <tspan x="60" dy="42">Agent nói chuyện với nhau</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: Từ Zero đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: MCP, A2A &amp; Multi-Agent Systems</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

MCP kết nối agent với **tools/data**. Nhưng khi bạn cần agent kết nối với **agent khác** thì sao? **A2A (Agent-to-Agent Protocol)** — do Google phát triển — giải quyết vấn đề này.

---

## 1. A2A vs MCP

| | MCP | A2A |
|---|---|---|
| Kết nối | Agent ↔ Tools/Data | Agent ↔ Agent |
| Mô hình | Client/Server | Peer-to-Peer |
| Discovery | Tool schemas | Agent Cards |
| Use case | Đọc DB, gọi API | Delegate tasks giữa agents |

## 2. Agent Cards

```json
{
  "name": "Research Agent",
  "description": "Tìm kiếm và tổng hợp thông tin",
  "capabilities": ["web_search", "summarize", "translate"],
  "endpoint": "https://research-agent.example.com/a2a",
  "input_schema": {...},
  "output_schema": {...}
}
```

## 3. Cross-Framework Communication

A2A cho phép agent từ LangGraph giao tiếp với agent từ CrewAI, AutoGen, hoặc bất kỳ framework nào.

---

## Tóm tắt

- A2A = protocol cho agent-to-agent communication
- Agent Cards = self-description cho capability discovery
- MCP + A2A = full connectivity (tools + agents)
- Cross-framework interoperability

## Bài tập

1. Tạo Agent Card cho 3 agents khác nhau
2. Implement A2A server đơn giản
3. Demo 2 agents từ 2 frameworks communicate
4. So sánh: trực tiếp call vs qua A2A protocol

