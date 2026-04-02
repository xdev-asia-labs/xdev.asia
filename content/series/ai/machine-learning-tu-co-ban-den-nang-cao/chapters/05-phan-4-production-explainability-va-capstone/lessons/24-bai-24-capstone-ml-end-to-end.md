---
id: 019d8b39-bb24-7024-c024-ee2400000024
title: 'Bài 24: Capstone — Dự án ML end-to-end + demo'
slug: bai-24-capstone-ml-end-to-end
description: >-
  Hoàn thành 1 dự án theo rubric: baseline -> pipeline -> tuning -> evaluation
  -> API -> monitoring -> báo cáo 1 trang cho business.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Mục tiêu bài học

- Hoàn thành dự án ML end-to-end theo rubric rõ ràng
- Trình bày kết quả theo góc nhìn kỹ thuật và business
- Chuẩn bị portfolio sẵn sàng phỏng vấn

## Checklist nộp bài

- [ ] Mô tả bài toán, metric và baseline
- [ ] Pipeline tiền xử lý + model huấn luyện tái lập được
- [ ] Kết quả validation và error analysis
- [ ] Explainability có ý nghĩa (SHAP/permutation)
- [ ] API inferencing hoạt động và có hướng dẫn run
- [ ] Monitoring plan (drift, retraining, alert)
- [ ] Báo cáo 1 trang cho stakeholder

## Rubric chấm điểm capstone (100 điểm)

- Định nghĩa bài toán và metric đúng: 10
- Chất lượng dữ liệu và preprocessing: 15
- Baseline và cải tiến có hệ thống: 15
- Đánh giá mô hình + CV + tuning: 20
- Error analysis + giải thích kết quả: 15
- Serving + tái lập + hướng dẫn run: 15
- Monitoring/retraining + báo cáo business: 10

## Hướng dẫn thực hiện

1. Chọn 1 use case cụ thể (churn, fraud, demand forecasting, pricing).
2. Dùng baseline đơn giản trước khi dùng model phức tạp.
3. Chỉ tối ưu metric đã chốt từ đầu, không đổi metric giữa chừng.
4. Gói toàn bộ preprocessing vào pipeline để tránh leakage.
5. Viết README ngắn: cách train, eval, serve và theo dõi sau deploy.

## Đầu ra mong đợi

Bạn có 1 dự án hoàn chỉnh để đưa vào CV/portfolio và demo khi phỏng vấn.

## Lộ trình nộp capstone đề xuất

1. Chốt đề bài và tiêu chí thành công có thể đo được.
2. Chốt baseline, bộ metric chính và metric phụ.
3. Hoàn thiện pipeline + báo cáo error analysis.
4. Có bản demo inference tối thiểu (batch hoặc API).
5. Nộp báo cáo cuối cùng theo rubric 100 điểm.

## Artifact bắt buộc nên có

- Dataset card mô tả dữ liệu và rủi ro.
- Model card mô tả phạm vi sử dụng, giới hạn và fairness notes.
- Repo có hướng dẫn chạy lại toàn bộ quy trình.

## Tự đánh giá trước khi nộp

- Kết quả có tái lập được trên máy khác không?
- Rủi ro leakage hoặc bias đã được nêu minh bạch chưa?
- Có kế hoạch monitor nếu đưa vào production chưa?
