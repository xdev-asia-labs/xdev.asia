---
id: 019d8b37-bb14-7014-c014-ee1400000014
title: "Bài 14: Capstone — Demand Forecasting System"
slug: bai-14-capstone-forecasting
description: >-
  Dự án tổng kết: Build demand forecasting system — EDA, multiple models comparison, ensemble, deploy pipeline. Dashboard & monitoring.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Ứng dụng & Production"
course:
  id: 019d8b37-aa01-7001-b001-ff0800000001
  title: "Time Series AI: Dự đoán & Phân tích Chuỗi Thời gian"
  slug: time-series-ai-du-doan-chuoi-thoi-gian
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2333" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2333)"/>

  <!-- Decorations -->
  <g>
    <circle cx="652" cy="246" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="704" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="756" cy="130" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="808" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="274" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="246" x2="1100" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="276" x2="1050" y2="346" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1081.507041555162,225.5 1081.507041555162,266.5 1046,287 1010.492958444838,266.5 1010.492958444838,225.5 1046,205" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Capstone — Demand Forecasting</tspan>
      <tspan x="60" dy="42">System</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Time Series AI: Dự đoán &amp; Phân tích Chuỗi Thời gian</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Ứng dụng &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Capstone project áp dụng toàn bộ kiến thức đã học trong series vào một bài toán thực tế end-to-end.

---

## Yêu cầu dự án

### Mô tả
Dự án tổng kết: Build demand forecasting system — EDA, multiple models comparison, ensemble, deploy pipeline. Dashboard & monitoring.

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
