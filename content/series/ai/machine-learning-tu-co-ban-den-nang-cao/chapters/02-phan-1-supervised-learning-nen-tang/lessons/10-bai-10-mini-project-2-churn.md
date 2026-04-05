---
id: 019d8b39-bb10-7010-c010-ee1000000010
title: 'Bài 10: Mini-project 2 — Dự đoán churn khách hàng'
slug: bai-10-mini-project-2-churn
description: >-
  Ứng dụng supervised learning cho bài toán phân loại thực tế và trình bày kết
  quả theo góc nhìn sản phẩm.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="766" cy="48" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1098" cy="60" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="72" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Mini-project 2 — Dự đoán churn</tspan>
      <tspan x="60" dy="42">khách hàng</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Supervised Learning nền tảng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Đây là mini-project classification đầu tiên của series. Mục tiêu không phải chỉ train được model churn, mà là biết đặt câu hỏi sản phẩm: dự đoán ai sắp rời đi để làm gì, hành động nào sẽ được kích hoạt, và metric nào thực sự đáng quan tâm.

## Mục tiêu bài học

- Làm một workflow phân loại tương đối trọn vẹn.
- Xây baseline, chọn metric, thử nhiều threshold.
- Trình bày kết quả theo góc nhìn kinh doanh.

## Bối cảnh bài toán

Một công ty subscription muốn dự đoán khách hàng nào có nguy cơ rời đi trong 30 ngày tới. Nếu biết sớm, team CS hoặc marketing có thể gửi ưu đãi giữ chân.

## Quy trình nên làm

1. Đọc và kiểm tra dữ liệu.
2. Xem tỉ lệ churn có bị lệch lớp không.
3. Tạo baseline đơn giản.
4. Train logistic regression trước.
5. Đánh giá bằng confusion matrix, precision, recall, F1, ROC-AUC.
6. Thử threshold theo mục tiêu business.

## Feature gợi ý

- tenure
- monthly_charges
- contract_type
- support_tickets
- payment_method
- is_auto_renew

## Code khung

~~~python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
~~~

## Cách trình bày cho stakeholder

Đừng chỉ nói “model đạt F1 = 0.71”. Hãy nói model bắt được bao nhiêu phần trăm khách sắp churn, đổi lại có bao nhiêu khách bị cảnh báo nhầm, và chi phí giữ chân có hợp lý không.

## Sai lầm thường gặp

- Chỉ báo accuracy khi dữ liệu lệch lớp.
- Không nói rõ threshold đang dùng.
- Dùng feature phát sinh sau thời điểm churn, gây leakage.

## Bài tập thực hành

- Làm notebook hoàn chỉnh cho churn prediction.
- Chọn 2 threshold khác nhau và so sánh chi phí/lợi ích giả định.
- Viết phần kết luận như một email ngắn gửi PM.

## Tiêu chí hoàn thành

- [ ] Có baseline, model chính và metric rõ ràng.
- [ ] Có giải thích về threshold.
- [ ] Có kết luận theo góc nhìn kinh doanh, không chỉ kỹ thuật.

## Thực hành từng bước (nâng cao)

1. Thiết kế biến mục tiêu churn rõ thời gian cửa sổ dự báo.
2. Xây baseline theo quy tắc nghiệp vụ (rule-based).
3. Train ít nhất 2 model: Logistic + Tree-based.
4. Tối ưu threshold theo chi phí giữ chân giả định.
5. Viết executive summary ngắn cho team business.

## Artifact nên nộp

- Notebook end-to-end có pipeline.
- File markdown tổng hợp giả định chi phí.
- Một bảng action list: nhóm nào cần can thiệp trước.

## Câu hỏi tự kiểm tra

- Churn label có thể bị leakage ở bước nào?
- Vì sao cần baseline rule-based trước model ML?
- Cách chọn threshold nào sát mục tiêu lợi nhuận hơn?
