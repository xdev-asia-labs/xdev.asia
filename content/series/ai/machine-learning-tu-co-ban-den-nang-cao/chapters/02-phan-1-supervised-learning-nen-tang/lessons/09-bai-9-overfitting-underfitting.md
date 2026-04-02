---
id: 019d8b39-bb09-7009-c009-ee0900000009
title: 'Bài 9: Overfitting/Underfitting và cách sửa'
slug: bai-9-overfitting-underfitting
description: >-
  Learning curve, validation curve, bias-variance tradeoff và chiến lược cải
  thiện mô hình có hệ thống.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Học ML không chỉ là làm cho điểm số cao lên. Một model mạnh trên tập train nhưng yếu trên dữ liệu mới là model chưa sẵn sàng dùng thực tế. Bài này giúp bạn nhìn ra overfitting và underfitting bằng dấu hiệu rất cụ thể.

## Mục tiêu bài học

- Phân biệt overfitting và underfitting.
- Biết cách đọc train score và validation score cùng nhau.
- Có checklist xử lý khi model học chưa đúng mức.

## Underfitting là gì?

Underfitting xảy ra khi model quá đơn giản hoặc feature quá nghèo nàn, khiến nó không học được tín hiệu đủ tốt ngay cả trên tập train.

## Overfitting là gì?

Overfitting xảy ra khi model học cả tín hiệu thật lẫn nhiễu riêng của tập train.

Dấu hiệu điển hình:

- Train score rất cao.
- Validation score thấp rõ rệt.
- Mỗi lần đổi split thì kết quả dao động mạnh.

## Cách xử lý theo hướng thực dụng

Khi underfitting: thêm feature hữu ích, dùng model mạnh hơn, huấn luyện lâu hơn nếu là iterative algorithm.

Khi overfitting: giảm độ phức tạp model, thêm regularization, tăng dữ liệu hoặc dùng cross-validation.

## Learning curves

Learning curve cho bạn thấy nếu tăng dữ liệu thì model có khả năng cải thiện không. Đây là cách chẩn đoán tốt hơn việc đoán mò.

## Sai lầm thường gặp

- Tăng model complexity liên tục mà không có validation tử tế.
- Chạy nhiều lần rồi chọn split đẹp nhất.
- Sửa feature dựa trên test set.

## Bài tập thực hành

- Train 3 mô hình với độ phức tạp tăng dần.
- Ghi lại train score và validation score.
- Kết luận mô hình nào underfit, mô hình nào overfit, mô hình nào hợp lý nhất.

## Tiêu chí hoàn thành

- [ ] Giải thích được hai khái niệm bằng ngôn ngữ đời thường.
- [ ] Biết đọc chênh lệch giữa train và validation.
- [ ] Đề xuất được ít nhất 2 cách xử lý cho mỗi tình huống.

## Thực hành từng bước (nâng cao)

1. Train ba model với độ phức tạp tăng dần.
2. Thu train/validation score cho từng model.
3. Vẽ learning curve theo số lượng dữ liệu train.
4. Thử regularization hoặc giảm độ sâu model.
5. Ghi lại thay đổi trước và sau khi sửa.

## Artifact nên nộp

- Biểu đồ learning curve.
- Bảng so sánh trước/sau điều chỉnh.
- Checklist quyết định xử lý overfitting áp dụng cho dự án sau.

## Câu hỏi tự kiểm tra

- Dấu hiệu nào phân biệt underfit và overfit rõ nhất?
- Vì sao thêm dữ liệu có thể giảm overfitting?
- Khi nào giảm model complexity là lựa chọn hợp lý nhất?
