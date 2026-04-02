---
id: 019d8b39-bb19-7019-c019-ee1900000019
title: 'Bài 19: Anomaly Detection trong hệ thống thật'
slug: bai-19-anomaly-detection
description: >-
  Isolation Forest, One-Class SVM và thiết kế rule cảnh báo cho fraud, log
  monitoring, quality control.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Có những bài toán mà lớp dương hiếm đến mức gần như không có đủ nhãn để train classification chuẩn, ví dụ phát hiện gian lận, bất thường vận hành, lỗi cảm biến. Khi đó anomaly detection là một hướng rất đáng cân nhắc.

## Mục tiêu bài học

- Hiểu anomaly detection khác classification ở đâu.
- Biết một vài kỹ thuật nhập môn như Isolation Forest.
- Biết đánh giá bất thường trong bối cảnh nghiệp vụ.

## Trực giác cốt lõi

Một điểm bất thường là điểm khác phần lớn dữ liệu còn lại theo một cách có ý nghĩa. Vấn đề là khác không phải lúc nào cũng xấu. Vì vậy anomaly detection luôn cần gắn với ngữ cảnh vận hành.

## Isolation Forest

Ý tưởng trực giác: điểm bất thường thường bị cô lập nhanh hơn trong các lần chia ngẫu nhiên của cây. Điểm càng dễ bị tách ra thì càng có khả năng là anomaly.

## Đánh giá mô hình

Bạn có thể cần một tập có nhãn hạn chế, review top cảnh báo bằng chuyên gia nghiệp vụ và đo chi phí false alarm so với chi phí bỏ sót.

## Sai lầm thường gặp

- Gọi mọi outlier là anomaly quan trọng.
- Không xác nhận với domain expert.
- Dùng threshold tùy tiện mà không xem tác động vận hành.

## Bài tập thực hành

- Chạy Isolation Forest trên một dataset giao dịch.
- Lấy top 20 điểm bất thường nhất để review.
- Viết nhận xét: cảnh báo nào hợp lý, cảnh báo nào có thể là false alarm.

## Tiêu chí hoàn thành

- [ ] Hiểu anomaly detection không chỉ là tìm outlier bằng mắt.
- [ ] Biết dùng một mô hình cơ bản như Isolation Forest.
- [ ] Gắn được việc đánh giá với chi phí vận hành thực tế.

## Thực hành từng bước (nâng cao)

1. Định nghĩa rõ thế nào là anomaly trong bài toán cụ thể.
2. Chạy Isolation Forest với vài mức contamination.
3. Kiểm tra top điểm bất thường bằng review thủ công.
4. So sánh false alarm giữa các cấu hình.
5. Đề xuất ngưỡng cảnh báo vận hành thực tế.

## Artifact nên nộp

- Danh sách top anomaly có giải thích.
- Bảng tác động vận hành của false positives.
- Đề xuất quy trình triage cảnh báo.

## Câu hỏi tự kiểm tra

- Outlier thống kê và anomaly nghiệp vụ khác gì?
- Vì sao contamination cần hiệu chỉnh theo bối cảnh?
- Khi nào cần human-in-the-loop cho anomaly review?
