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
