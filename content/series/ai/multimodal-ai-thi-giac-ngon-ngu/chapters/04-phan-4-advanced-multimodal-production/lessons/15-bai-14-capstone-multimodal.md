---
id: 019d8b35-bb14-7014-c014-ee1400000014
title: "Bài 14: Capstone — Multimodal Assistant Pipeline"
slug: bai-14-capstone-multimodal
description: >-
  Dự án tổng kết: Build multimodal AI assistant — image understanding + document extraction + conversation. Production-ready pipeline.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Advanced Multimodal & Production"
course:
  id: 019d8b35-aa01-7001-b001-ff0600000001
  title: "Multimodal AI: Kết hợp Thị giác, Ngôn ngữ & Hơn thế"
  slug: multimodal-ai-thi-giac-ngon-ngu
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7118" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7118)"/>

  <!-- Decorations -->
  <g>
    <circle cx="769" cy="57" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="938" cy="66" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="607" cy="75" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="776" cy="84" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="93" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="187" x2="1100" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="217" x2="1050" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1073.3730669589463,216 1073.3730669589463,258 1037,279 1000.6269330410536,258 1000.6269330410536,216 1037,195" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Capstone — Multimodal Assistant</tspan>
      <tspan x="60" dy="42">Pipeline</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Multimodal AI: Kết hợp Thị giác, Ngôn ngữ &amp; Hơn thế</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Advanced Multimodal &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Capstone project áp dụng toàn bộ kiến thức đã học trong series vào một bài toán thực tế end-to-end.

---

## Yêu cầu dự án

### Mô tả
Dự án tổng kết: Build multimodal AI assistant — image understanding + document extraction + conversation. Production-ready pipeline.

### Deliverables

| Item | Description | Weight |
|------|-------------|--------|
| Code | Clean, documented GitHub repository | 30% |
| Report | Architecture decisions, results analysis | 30% |
| Demo | Interactive demo (web app hoặc video) | 20% |
| Documentation | README, API docs, deployment guide | 20% |

---

## Pipeline đề xuất

1. **Data Collection & Preprocessing**: Thu thập và xử lý dữ liệu
2. **Model Development**: Xây dựng và train model
3. **Evaluation**: Đánh giá với metrics phù hợp
4. **Optimization**: Tối ưu performance và costs
5. **Deployment**: Deploy lên production
6. **Monitoring**: Thiết lập monitoring & alerting

---

## Tổng kết

Chúc mừng bạn đã hoàn thành series! Hãy áp dụng kiến thức vào các dự án thực tế.
