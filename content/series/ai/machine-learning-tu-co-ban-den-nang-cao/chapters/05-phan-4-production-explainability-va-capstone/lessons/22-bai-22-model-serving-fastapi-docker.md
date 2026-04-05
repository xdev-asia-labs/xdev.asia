---
id: 019d8b39-bb22-7022-c022-ee2200000022
title: 'Bài 22: Model Serving với FastAPI + Docker'
slug: bai-22-model-serving-fastapi-docker
description: >-
  Đóng gói model, xây inference API, versioning model và triển khai dịch vụ ML
  nhỏ gọn.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8517" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8517)"/>

  <!-- Decorations -->
  <g>
    <circle cx="686" cy="228" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="772" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="858" cy="100" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="944" cy="166" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 22: Model Serving với FastAPI + Docker</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Production, Explainability và Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Đào tạo xong mô hình nhưng không đưa vào sử dụng thì giá trị vẫn dừng ở notebook. Bài này giúp bạn đóng gói model thành một service đơn giản bằng FastAPI và Docker, đủ để demo nội bộ hoặc làm nền cho triển khai thật.

## Mục tiêu bài học

- Serialize model đúng cách.
- Tạo API nhận input và trả prediction.
- Đóng gói service bằng Docker.

## Đầu ra tối thiểu cần có

- File model đã lưu, ví dụ bằng joblib.
- File app FastAPI.
- File requirements hoặc tương đương.
- Dockerfile để chạy service ổn định.

## Quy trình đề xuất

1. Train model và lưu artifact.
2. Định nghĩa schema input hoặc output.
3. Viết endpoint /predict.
4. Test local bằng request mẫu.
5. Containerize bằng Docker.

## Code khung FastAPI

~~~python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
~~~

## Điều cần nghĩ thêm khi ra môi trường thật

- Logging request và response ở mức phù hợp.
- Quản lý version model.
- Validation input kỹ hơn.
- Timeout, retry và monitoring.

## Sai lầm thường gặp

- Lưu model nhưng quên preprocessing pipeline.
- Schema API không khớp với dữ liệu training.
- Test bằng dữ liệu đẹp, không test input lỗi.

## Bài tập thực hành

- Đóng gói model churn hoặc housing thành API.
- Tạo 3 request mẫu: hợp lệ, thiếu field, sai kiểu dữ liệu.
- Viết README ngắn mô tả cách chạy local bằng Docker.

## Tiêu chí hoàn thành

- [ ] Có API predict chạy local được.
- [ ] Docker build và run thành công.
- [ ] Schema input đủ rõ để người khác gọi API.

## Thực hành từng bước (nâng cao)

1. Chuẩn hóa schema input/output bằng Pydantic.
2. Đóng gói model + preprocessing thành artifact versioned.
3. Viết endpoint predict và health check.
4. Thêm logging cơ bản và xử lý lỗi rõ ràng.
5. Build Docker image và chạy smoke test bằng curl.

## Artifact nên nộp

- Mã nguồn API và Dockerfile chạy được.
- Ví dụ request/response cho 3 tình huống.
- README deployment local tối thiểu.

## Câu hỏi tự kiểm tra

- Vì sao phải version hóa model artifact?
- Nếu schema input thay đổi thì backward compatibility xử lý sao?
- Chỉ số runtime nào cần monitor ngay từ bản đầu?
