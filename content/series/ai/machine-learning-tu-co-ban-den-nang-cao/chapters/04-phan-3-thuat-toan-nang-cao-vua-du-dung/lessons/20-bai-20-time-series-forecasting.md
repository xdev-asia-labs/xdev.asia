---
id: 019d8b39-bb20-7020-c020-ee2000000020
title: 'Bài 20: Time Series Forecasting cơ bản'
slug: bai-20-time-series-forecasting
description: >-
  Walk-forward validation, lag features, baseline forecast, và ứng dụng dự báo
  nhu cầu cơ bản.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'Phần 3: Thuật toán nâng cao vừa đủ dùng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Dự báo theo thời gian khác với tabular ML thông thường ở một điểm rất quan trọng: thứ tự thời gian là cốt lõi. Nếu làm sai cách chia dữ liệu hoặc tạo feature, bạn rất dễ tự lừa mình bằng những kết quả cực đẹp nhưng vô dụng khi triển khai thật.

## Mục tiêu bài học

- Hiểu khác biệt giữa forecasting và regression thường.
- Biết tạo feature thời gian cơ bản.
- Tránh leakage trong chuỗi thời gian.

## Đặc thù của time series

- Dữ liệu có thứ tự trước sau.
- Có thể có xu hướng, mùa vụ, chu kỳ.
- Quan sát gần nhau thường phụ thuộc nhau.

## Feature phổ biến

- Lag features như sales_t-1, sales_t-7.
- Rolling statistics như trung bình 7 ngày, 30 ngày.
- Calendar features như thứ trong tuần, tháng, quý, ngày lễ.

## Cách chia dữ liệu đúng

Không shuffle ngẫu nhiên như tabular thông thường. Hãy chia theo trục thời gian: train ở quá khứ, validation gần hiện tại hơn, test là đoạn mới nhất.

## Baseline rất quan trọng

Trước khi dùng model phức tạp, hãy so sánh với baseline như giá trị kỳ trước, trung bình trượt hoặc cùng kỳ tuần trước.

## Sai lầm thường gặp

- Random split time series.
- Tạo rolling feature nhìn xuyên qua tương lai.
- Không so sánh với naive baseline.

## Bài tập thực hành

- Dự báo doanh thu ngày bằng lag features và một model tree-based đơn giản.
- So sánh với baseline cùng kỳ hôm trước.
- Viết nhận xét khi nào mô hình học thêm được tín hiệu ngoài baseline.

## Tiêu chí hoàn thành

- [ ] Chia dữ liệu theo thời gian đúng logic.
- [ ] Tạo được lag và rolling features cơ bản.
- [ ] So sánh mô hình với baseline thời gian.

## Thực hành từng bước (nâng cao)

1. Xây train/validation/test theo trục thời gian.
2. Tạo lag features và rolling window features.
3. So sánh mô hình ML với naive baseline.
4. Đánh giá theo MAE, MAPE và lỗi theo từng giai đoạn.
5. Kiểm tra hiệu năng ở các mốc mùa vụ quan trọng.

## Artifact nên nộp

- Biểu đồ dự báo vs thực tế theo thời gian.
- Bảng lỗi theo tuần hoặc tháng.
- Nhận xét drift theo mùa vụ và đề xuất cập nhật mô hình.

## Câu hỏi tự kiểm tra

- Vì sao random split gây sai lệch nghiêm trọng cho forecasting?
- Khi nào baseline theo cùng kỳ đủ tốt để dùng ngay?
- Feature nào dễ gây leakage trong time series?
