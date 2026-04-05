---
id: 019d8b39-bb17-7017-c017-ee1700000017
title: 'Bài 17: Clustering (K-Means, DBSCAN, Hierarchical)'
slug: bai-17-clustering
description: >-
  Unsupervised learning cho phân khúc khách hàng và khám phá cấu trúc dữ liệu
  khi không có nhãn.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4140" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4140)"/>

  <!-- Decorations -->
  <g>
    <circle cx="980" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: Clustering (K-Means, DBSCAN,</tspan>
      <tspan x="60" dy="42">Hierarchical)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Thuật toán nâng cao vừa đủ dùng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Không phải lúc nào bạn cũng có nhãn. Clustering là nhóm kỹ thuật giúp tìm cấu trúc ẩn trong dữ liệu chưa gán nhãn. Trong thực tế, nó thường dùng cho segmentation khách hàng, gom nhóm hành vi và khám phá dữ liệu.

## Mục tiêu bài học

- Hiểu clustering khác supervised learning như thế nào.
- Biết dùng K-Means ở mức cơ bản.
- Hiểu hạn chế của việc đánh giá clustering.

## K-Means hoạt động ra sao?

1. Chọn số cụm k.
2. Gán mỗi điểm vào tâm cụm gần nhất.
3. Cập nhật lại tâm cụm.
4. Lặp lại đến khi ổn định.

## Bài toán thực tế phù hợp

- Phân nhóm khách hàng theo hành vi mua hàng.
- Gom nhóm bài viết hoặc người dùng theo embedding.
- Tạo phân khúc để team business hành động khác nhau.

## Chọn số cụm như thế nào?

Không có đáp án tuyệt đối. Có thể tham khảo elbow method, silhouette score và quan trọng nhất là tính diễn giải với business.

## Sai lầm thường gặp

- Nghĩ rằng cụm tạo ra luôn là sự thật tự nhiên.
- Chọn k chỉ vì biểu đồ nhìn đẹp.
- Không kiểm tra ý nghĩa nghiệp vụ của cụm.

## Bài tập thực hành

- Chạy K-Means trên một dataset segmentation.
- Mô tả từng cụm bằng ngôn ngữ kinh doanh.
- Đề xuất một hành động khác nhau cho mỗi cụm.

## Tiêu chí hoàn thành

- [ ] Hiểu clustering không cần nhãn.
- [ ] Chạy được K-Means với dữ liệu đã scale.
- [ ] Diễn giải được cụm theo góc nhìn nghiệp vụ.

## Thực hành từng bước (nâng cao)

1. Chuẩn hóa feature trước khi phân cụm.
2. Chạy K-Means với nhiều giá trị k.
3. Đánh giá bằng silhouette score và tính diễn giải nghiệp vụ.
4. Thử thêm DBSCAN hoặc Hierarchical để so sánh.
5. Đặt tên cụm theo ngôn ngữ business.

## Artifact nên nộp

- Bảng so sánh các thuật toán phân cụm.
- Hồ sơ mô tả từng cụm (cluster profile).
- Danh sách hành động đề xuất cho từng cụm.

## Câu hỏi tự kiểm tra

- Vì sao clustering không có một đáp án đúng tuyệt đối?
- Khi nào DBSCAN có lợi hơn K-Means?
- Làm sao đánh giá cụm có hữu ích cho business hay không?
