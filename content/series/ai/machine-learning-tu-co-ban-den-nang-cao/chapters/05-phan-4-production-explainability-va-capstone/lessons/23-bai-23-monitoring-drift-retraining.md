---
id: 019d8b39-bb23-7023-c023-ee2300000023
title: 'Bài 23: Monitoring, Drift Detection & Retraining'
slug: bai-23-monitoring-drift-retraining
description: >-
  Theo dõi chất lượng sau deploy, phát hiện drift, thiết kế retraining loop và
  alerting tối thiểu.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Model sau khi deploy không đứng yên. Dữ liệu người dùng thay đổi, hành vi thị trường thay đổi, sản phẩm thay đổi. Vì vậy một hệ thống ML có trách nhiệm phải theo dõi chất lượng sau triển khai thay vì coi train xong là hết việc.

## Mục tiêu bài học

- Hiểu prediction drift, data drift và concept drift.
- Biết những tín hiệu tối thiểu cần monitor.
- Thiết kế vòng lặp retraining cơ bản.

## Những thứ cần theo dõi

- Phân phối feature đầu vào.
- Tỉ lệ dự đoán theo từng lớp.
- Chất lượng model khi có nhãn phản hồi.
- Latency, lỗi request và availability của service.

## Các loại drift

- Data drift: phân phối input thay đổi.
- Concept drift: quan hệ giữa input và target thay đổi.
- Prediction drift: đầu ra model thay đổi bất thường.

## Khi nào cần retrain?

Không phải cứ thấy drift là retrain ngay. Bạn cần trả lời drift có ảnh hưởng hiệu năng thật không, có đủ dữ liệu mới đáng tin để train lại không, và việc retrain có cần human review trước khi release không.

## Monitoring tối thiểu cho người mới

- Dashboard theo dõi số request và lỗi.
- Biểu đồ phân phối vài feature quan trọng.
- Theo dõi metric chính theo tuần hoặc tháng.
- Cảnh báo khi phân phối lệch quá ngưỡng.

## Sai lầm thường gặp

- Chỉ monitor hạ tầng mà không monitor chất lượng model.
- Retrain tự động không kiểm tra regression.
- Không version hóa data và model.

## Bài tập thực hành

- Thiết kế một checklist monitoring cho model churn hoặc housing.
- Xác định 5 chỉ số bắt buộc phải theo dõi.
- Viết chính sách retrain đơn giản: khi nào retrain, ai duyệt, cách rollback.

## Tiêu chí hoàn thành

- [ ] Phân biệt được data drift và concept drift.
- [ ] Đề xuất được bộ chỉ số monitor tối thiểu.
- [ ] Có kế hoạch retrain và rollback ở mức cơ bản.

## Thực hành từng bước (nâng cao)

1. Chọn bộ chỉ số monitor cho chất lượng và vận hành.
2. Thiết lập ngưỡng cảnh báo data drift cho 5 feature chính.
3. Mô phỏng một kịch bản drift và quan sát cảnh báo.
4. Thiết kế quy trình retrain có bước phê duyệt.
5. Viết playbook rollback khi model mới kém hơn.

## Artifact nên nộp

- Monitoring checklist theo tuần.
- Quy trình retraining và release model.
- Playbook incident response cho mô hình.

## Câu hỏi tự kiểm tra

- Data drift và concept drift ảnh hưởng khác nhau thế nào?
- Khi nào nên retrain định kỳ, khi nào retrain theo sự kiện?
- Nếu drift tăng nhưng metric chưa giảm thì có hành động gì trước?
