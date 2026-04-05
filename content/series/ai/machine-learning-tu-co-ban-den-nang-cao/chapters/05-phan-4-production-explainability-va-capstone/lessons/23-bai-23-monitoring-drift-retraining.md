---
id: 019d8b39-bb23-7023-c023-ee2300000023
title: 'Bài 23: Monitoring, Drift Detection & Retraining'
slug: bai-23-monitoring-drift-retraining
description: >-
  Theo dõi chất lượng sau deploy, phát hiện drift, thiết kế retraining loop và
  alerting tối thiểu.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 23: Monitoring, Drift Detection &amp;</tspan>
      <tspan x="60" dy="42">Retraining</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Production, Explainability và Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Model sau khi deploy không đứng yên. Dữ liệu người dùng thay đổi, hành vi thị trường thay đổi, sản phẩm thay đổi. Vì vậy một hệ thống ML có trách nhiệm phải theo dõi chất lượng sau triển khai thay vì coi train xong là hết việc.

## Mục tiêu bài học

- Hiểu prediction drift, data drift và concept drift.
- Biết những tín hiệu tối thiểu cần monitor.
- Thiết kế vòng lặp retraining cơ bản.

## Những thứ cần theo dõi

- Phân phối feature đầu vào.
- Tỉ lệ dự đoán theo từng lớp.
- Chất lượng model khi có nhãn phản hồi.
- Latency, lỗi request và availability của service.

## Các loại drift

- Data drift: phân phối input thay đổi.
- Concept drift: quan hệ giữa input và target thay đổi.
- Prediction drift: đầu ra model thay đổi bất thường.

## Khi nào cần retrain?

Không phải cứ thấy drift là retrain ngay. Bạn cần trả lời drift có ảnh hưởng hiệu năng thật không, có đủ dữ liệu mới đáng tin để train lại không, và việc retrain có cần human review trước khi release không.

## Monitoring tối thiểu cho người mới

- Dashboard theo dõi số request và lỗi.
- Biểu đồ phân phối vài feature quan trọng.
- Theo dõi metric chính theo tuần hoặc tháng.
- Cảnh báo khi phân phối lệch quá ngưỡng.

## Sai lầm thường gặp

- Chỉ monitor hạ tầng mà không monitor chất lượng model.
- Retrain tự động không kiểm tra regression.
- Không version hóa data và model.

## Bài tập thực hành

- Thiết kế một checklist monitoring cho model churn hoặc housing.
- Xác định 5 chỉ số bắt buộc phải theo dõi.
- Viết chính sách retrain đơn giản: khi nào retrain, ai duyệt, cách rollback.

## Tiêu chí hoàn thành

- [ ] Phân biệt được data drift và concept drift.
- [ ] Đề xuất được bộ chỉ số monitor tối thiểu.
- [ ] Có kế hoạch retrain và rollback ở mức cơ bản.

## Thực hành từng bước (nâng cao)

1. Chọn bộ chỉ số monitor cho chất lượng và vận hành.
2. Thiết lập ngưỡng cảnh báo data drift cho 5 feature chính.
3. Mô phỏng một kịch bản drift và quan sát cảnh báo.
4. Thiết kế quy trình retrain có bước phê duyệt.
5. Viết playbook rollback khi model mới kém hơn.

## Artifact nên nộp

- Monitoring checklist theo tuần.
- Quy trình retraining và release model.
- Playbook incident response cho mô hình.

## Câu hỏi tự kiểm tra

- Data drift và concept drift ảnh hưởng khác nhau thế nào?
- Khi nào nên retrain định kỳ, khi nào retrain theo sự kiện?
- Nếu drift tăng nhưng metric chưa giảm thì có hành động gì trước?
