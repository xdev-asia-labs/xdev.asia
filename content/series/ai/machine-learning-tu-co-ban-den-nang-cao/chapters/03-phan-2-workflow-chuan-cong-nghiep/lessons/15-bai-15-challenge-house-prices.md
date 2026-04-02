---
id: 019d8b39-bb15-7015-c015-ee1500000015
title: 'Bài 15: Challenge 60 phút — House Prices nâng cao'
slug: bai-15-challenge-house-prices
description: >-
  Bài thử thách time-boxed: xây pipeline hoàn chỉnh và cải thiện điểm số bằng
  tuning + feature engineering có kiểm soát.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'Phần 2: Workflow chuẩn công nghiệp'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Đây là challenge tổng hợp đầu tiên. Bạn sẽ quay lại bài toán nhà đất nhưng làm ở mức trưởng thành hơn: pipeline, xử lý missing, feature engineering, cross-validation và tuning. Mục tiêu là ghép các kỹ năng rời rạc thành một workflow hoàn chỉnh.

## Mục tiêu bài học

- Hoàn thành một challenge regression tương đối đầy đủ.
- Kết hợp preprocessing, pipeline và tuning trong cùng một luồng.
- Viết phần tổng kết rõ ràng như một mini báo cáo kỹ thuật.

## Yêu cầu challenge

Bạn cần nộp 3 đầu ra: notebook hoặc script huấn luyện, file mô tả quyết định kỹ thuật và bảng so sánh ít nhất 3 thử nghiệm mô hình.

## Hướng làm đề xuất

1. Bắt đầu bằng baseline đơn giản.
2. Kiểm tra missing values và kiểu dữ liệu.
3. Tạo một pipeline chuẩn.
4. Chạy cross-validation.
5. Tuning ít tham số quan trọng.
6. Phân tích model tốt nhất và các lỗi nổi bật.

## Những câu hỏi bạn phải tự trả lời

- Feature nào quan trọng nhất?
- Sai số lớn nhất rơi vào nhóm nhà nào?
- Thêm feature engineering có cải thiện thật không?
- Model hiện tại có đủ tin cậy để dùng ước lượng sơ bộ hay chưa?

## Sai lầm thường gặp

- Viết notebook dài nhưng không có kết luận rõ.
- Tuning rất nhiều nhưng không lưu kết quả cũ.
- Đánh giá theo cảm giác mà không dùng metric nhất quán.

## Bài tập thực hành

- Làm challenge như một submission độc lập.
- Tạo bảng thí nghiệm với cột: model, preprocessing, CV score, ghi chú.
- Viết phần bài học rút ra dài khoảng 10 dòng.

## Tiêu chí hoàn thành

- [ ] Có pipeline hoàn chỉnh chạy được end-to-end.
- [ ] Có so sánh thí nghiệm có cấu trúc.
- [ ] Có kết luận rõ vì sao chọn model cuối cùng.

## Thực hành từng bước (nâng cao)

1. Time-box 60 phút theo ba pha: chuẩn bị, mô hình, tổng kết.
2. Thiết kế ít nhất 3 thí nghiệm có khác biệt rõ ràng.
3. Ghi đầy đủ giả định cho từng thí nghiệm.
4. Chọn model cuối bằng tiêu chí metric + tính ổn định.
5. Viết post-mortem: nếu có thêm 2 giờ bạn sẽ làm gì.

## Artifact nên nộp

- Bảng experiment tracking tối thiểu 3 dòng.
- Notebook sạch, chạy từ đầu đến cuối.
- Tóm tắt 1 trang theo format kỹ thuật + business.

## Câu hỏi tự kiểm tra

- Bạn đã thực sự kiểm soát leakage chưa?
- Tuning nào mang lại lợi ích lớn nhất?
- Kết quả hiện tại đủ để ship bản beta chưa?
