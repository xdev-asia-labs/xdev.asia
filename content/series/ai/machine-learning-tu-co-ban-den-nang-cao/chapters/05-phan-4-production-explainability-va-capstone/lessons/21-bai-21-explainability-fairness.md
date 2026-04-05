---
id: 019d8b39-bb21-7021-c021-ee2100000021
title: 'Bài 21: Explainability & Fairness cho stakeholder'
slug: bai-21-explainability-fairness
description: >-
  SHAP, permutation importance, fairness checks và cách trình bày kết quả để
  team business hiểu và tin mô hình.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7373" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7373)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="144" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="220" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="258" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="36" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 21: Explainability &amp; Fairness cho</tspan>
      <tspan x="60" dy="42">stakeholder</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Production, Explainability và Capstone</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Một mô hình tốt trong notebook chưa đủ. Stakeholder cần hiểu vì sao mô hình ra quyết định như vậy, và tổ chức cũng cần biết mô hình có gây thiên lệch không. Đây là nơi explainability và fairness trở nên bắt buộc.

## Mục tiêu bài học

- Hiểu sự khác nhau giữa explainability cục bộ và toàn cục.
- Biết dùng permutation importance hoặc SHAP ở mức nhập môn.
- Biết đặt câu hỏi fairness trước khi deploy.

## Explainability cho ai?

- Data scientist cần debug mô hình.
- PM cần hiểu feature nào ảnh hưởng kết quả.
- Stakeholder nghiệp vụ cần câu chuyện đơn giản, đáng tin.
- Người dùng cuối có thể cần lý do cụ thể cho một dự đoán cá nhân.

## Hai mức giải thích

- Global explainability: mô hình nhìn chung dựa vào những yếu tố nào.
- Local explainability: vì sao riêng một mẫu lại bị dự đoán như vậy.

## Fairness không phải tùy chọn phụ

Nếu mô hình ảnh hưởng quyết định với con người, bạn nên kiểm tra hiệu năng theo từng nhóm người dùng, tỉ lệ false positive hoặc false negative theo từng nhóm, và feature nào có thể là proxy cho thuộc tính nhạy cảm.

## Cách trình bày với stakeholder

- Tránh công thức dài dòng.
- Dùng 3 đến 5 feature ảnh hưởng nhất.
- Nói rõ mức tự tin và giới hạn của mô hình.
- Nêu các rủi ro thiên lệch một cách thẳng thắn.

## Sai lầm thường gặp

- Lạm dụng biểu đồ SHAP mà không hiểu bản chất.
- Nhầm explainability với chứng minh nhân quả.
- Chỉ kiểm tra fairness sau khi đã triển khai.

## Bài tập thực hành

- Chọn một mô hình classification đã train.
- Tạo permutation importance hoặc SHAP summary.
- Kiểm tra metric theo 2 nhóm người dùng khác nhau.
- Viết phần giải thích như thể bạn đang trình bày với PM.

## Tiêu chí hoàn thành

- [ ] Phân biệt được global và local explainability.
- [ ] Biết ít nhất một cách kiểm tra fairness cơ bản.
- [ ] Trình bày được kết quả mà stakeholder không kỹ thuật vẫn hiểu.

## Thực hành từng bước (nâng cao)

1. Chọn một model đã huấn luyện và tập validation cố định.
2. Tính global importance và local explanation cho 5 mẫu.
3. Chia dữ liệu theo 2-3 nhóm người dùng để so fairness.
4. Ghi lại chênh lệch metric theo nhóm.
5. Soạn memo rủi ro đạo đức và khuyến nghị kiểm soát.

## Artifact nên nộp

- Báo cáo explainability 1-2 trang.
- Bảng fairness metrics theo nhóm.
- Danh sách hành động giảm bias theo mức ưu tiên.

## Câu hỏi tự kiểm tra

- Vì sao explainability không chứng minh quan hệ nhân quả?
- Chênh lệch metric bao nhiêu thì đáng báo động?
- Khi nào cần từ chối deploy vì fairness risk?
