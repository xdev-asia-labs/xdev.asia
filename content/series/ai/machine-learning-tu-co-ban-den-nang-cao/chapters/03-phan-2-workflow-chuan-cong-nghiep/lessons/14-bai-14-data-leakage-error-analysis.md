---
id: 019d8b39-bb14-7014-c014-ee1400000014
title: 'Bài 14: Data Leakage & Error Analysis (bắt buộc)'
slug: bai-14-data-leakage-error-analysis
description: >-
  Nhận diện leakage phổ biến, điều tra mẫu dự đoán sai và lập kế hoạch cải thiện
  theo lỗi thực tế thay vì đoán mò.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1852" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1852)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1002" cy="76" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="904" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="806" cy="280" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="708" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="224" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="96" x2="1100" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="126" x2="1050" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Data Leakage &amp; Error Analysis (bắt</tspan>
      <tspan x="60" dy="42">buộc)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Workflow chuẩn công nghiệp</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Nhiều model có điểm số đẹp nhưng không sống nổi ngoài môi trường thật vì một lý do rất cơ bản: data leakage. Bài này cực kỳ quan trọng, vì chỉ cần sai ở đây thì mọi metric đẹp trước đó gần như không còn giá trị.

## Mục tiêu bài học

- Nhận biết các dạng leakage phổ biến.
- Biết cách làm error analysis để hiểu model sai ở đâu.
- Xây tư duy kiểm tra mô hình trước khi tin vào điểm số.

## Data leakage là gì?

Leakage xảy ra khi mô hình vô tình nhìn thấy thông tin mà thực tế lúc dự đoán nó không được phép biết, ví dụ chuẩn hóa dữ liệu trước khi split hoặc tạo feature dùng dữ liệu sau thời điểm target xảy ra.

## Dấu hiệu nghi ngờ leakage

- Kết quả quá đẹp bất thường so với trực giác nghiệp vụ.
- Validation score rất cao nhưng triển khai thực tế kém.
- Một vài feature nghe có vẻ quá biết nhiều.

## Error analysis

Sau khi train model, hãy xem những mẫu nào bị dự đoán sai nhiều nhất, sai tập trung ở nhóm người dùng nào, và có pattern nào liên quan tới dữ liệu thiếu, outlier hay segment đặc biệt không.

## Quy trình kiểm tra nhanh

1. Kiểm tra feature nào chỉ xuất hiện sau sự kiện target.
2. Kiểm tra toàn bộ preprocessing có nằm trong pipeline không.
3. Xem top lỗi nặng nhất và các nhóm lỗi lặp lại.
4. Xác nhận cách chia dữ liệu có đúng logic thời gian hoặc logic người dùng hay không.

## Sai lầm thường gặp

- Nhìn leaderboard đẹp là tin ngay.
- Không đọc vài chục dòng dữ liệu lỗi thực tế.
- Bỏ qua yếu tố thời gian trong bài toán dự báo.

## Bài tập thực hành

- Tự tạo một ví dụ leakage nhỏ và quan sát điểm số tăng bất thường.
- Quay lại sửa pipeline cho đúng.
- Làm một bảng error analysis cho 20 mẫu dự đoán sai.

## Tiêu chí hoàn thành

- [ ] Phát hiện được ít nhất 3 kiểu leakage phổ biến.
- [ ] Có thói quen xem mẫu lỗi thật thay vì chỉ xem score.
- [ ] Biết nêu lý do vì sao một mô hình đẹp điểm số chưa chắc dùng được.

## Thực hành từng bước (nâng cao)

1. Lập timeline dữ liệu để đánh dấu thời điểm feature được tạo.
2. Kiểm tra toàn bộ feature có vi phạm thời điểm dự đoán không.
3. Huấn luyện lại mô hình sau khi loại feature nghi leakage.
4. So sánh metric trước/sau để lượng hóa tác động leakage.
5. Làm error analysis trên top 30 dự đoán sai nhất.

## Artifact nên nộp

- Bảng audit feature theo mốc thời gian.
- Báo cáo leakage findings và hành động sửa.
- Bảng nhóm lỗi chính kèm đề xuất cải thiện.

## Câu hỏi tự kiểm tra

- Leakage kiểu preprocessing khác leakage kiểu target leakage ra sao?
- Vì sao model quá đẹp có thể là tín hiệu nguy hiểm?
- Error analysis giúp chọn hướng cải thiện như thế nào?
