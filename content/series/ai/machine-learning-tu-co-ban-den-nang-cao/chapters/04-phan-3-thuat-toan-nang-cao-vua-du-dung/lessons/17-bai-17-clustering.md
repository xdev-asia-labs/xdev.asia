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
