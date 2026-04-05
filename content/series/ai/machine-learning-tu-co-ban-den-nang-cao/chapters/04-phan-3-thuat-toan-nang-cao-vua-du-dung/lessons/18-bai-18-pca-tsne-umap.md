---
id: 019d8b39-bb18-7018-c018-ee1800000018
title: 'Bài 18: PCA, t-SNE, UMAP cho trực quan hóa'
slug: bai-18-pca-tsne-umap
description: >-
  Giảm chiều dữ liệu để hiểu cụm, phát hiện bất thường và tăng hiệu năng cho
  downstream model.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1930" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1930)"/>

  <!-- Decorations -->
  <g>
    <circle cx="768" cy="274" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="936" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="604" cy="90" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="772" cy="258" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="166" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.1147367097487,149.5 989.1147367097487,178.5 964,193 938.8852632902513,178.5 938.8852632902513,149.5 964,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 18: PCA, t-SNE, UMAP cho trực quan hóa</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Thuật toán nâng cao vừa đủ dùng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Khi dữ liệu có quá nhiều chiều, rất khó nhìn, khó vẽ và đôi khi khó mô hình hóa. PCA, t-SNE và UMAP giúp giảm chiều dữ liệu nhưng phục vụ các mục đích khác nhau.

## Mục tiêu bài học

- Phân biệt PCA với t-SNE và UMAP.
- Biết khi nào dùng để nén chiều, khi nào dùng để trực quan.
- Tránh diễn giải sai các biểu đồ giảm chiều.

## PCA

PCA tìm các trục mới giữ lại nhiều phương sai nhất của dữ liệu. Đây là kỹ thuật tuyến tính, nhanh, tương đối dễ giải thích và hữu ích khi cần giảm số chiều đầu vào.

## t-SNE và UMAP

t-SNE và UMAP chủ yếu hữu ích cho trực quan hóa cấu trúc cục bộ trong dữ liệu nhiều chiều. UMAP thường nhanh hơn và khá hợp với embedding; t-SNE mạnh cho trực quan các cụm cục bộ.

## Cảnh báo diễn giải

Khoảng cách trên biểu đồ 2D sau giảm chiều không phải lúc nào cũng phản ánh đúng khoảng cách thật trong không gian gốc. Đừng dùng biểu đồ đẹp làm bằng chứng quá mạnh cho kết luận.

## Sai lầm thường gặp

- Dùng t-SNE hoặc UMAP làm feature input chính mà không kiểm tra kỹ.
- Diễn giải biểu đồ như ranh giới phân lớp thật.
- Không scale dữ liệu trước PCA khi cần.

## Bài tập thực hành

- Chạy PCA và t-SNE trên cùng một dataset.
- Vẽ biểu đồ 2D cho cả hai.
- Viết nhận xét: công cụ nào hợp hơn cho trực quan, công cụ nào hợp hơn cho preprocessing.

## Tiêu chí hoàn thành

- [ ] Phân biệt được mục đích của PCA, t-SNE, UMAP.
- [ ] Không diễn giải quá mức biểu đồ giảm chiều.
- [ ] Biết chọn công cụ theo đúng mục đích.

## Thực hành từng bước (nâng cao)

1. Chạy PCA giữ lại 90% phương sai.
2. Trực quan hóa dữ liệu bằng PCA 2D.
3. Chạy t-SNE và UMAP trên cùng embedding đầu vào.
4. So sánh thời gian chạy và độ ổn định hình cụm.
5. Viết cảnh báo diễn giải cho người xem dashboard.

## Artifact nên nộp

- Bộ hình trực quan từ 3 kỹ thuật.
- Bảng so sánh mục tiêu sử dụng từng kỹ thuật.
- Hướng dẫn chọn công cụ giảm chiều theo use-case.

## Câu hỏi tự kiểm tra

- PCA có ưu điểm gì về khả năng tái lập?
- Vì sao t-SNE không phù hợp làm feature chính?
- Khi nào UMAP đáng ưu tiên hơn t-SNE?
