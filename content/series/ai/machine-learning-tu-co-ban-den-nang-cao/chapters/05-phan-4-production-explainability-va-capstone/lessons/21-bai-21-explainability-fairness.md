---
id: 019d8b39-bb21-7021-c021-ee2100000021
title: 'Bài 21: Explainability & Fairness cho stakeholder'
slug: bai-21-explainability-fairness
description: >-
  SHAP, permutation importance, fairness checks và cách trình bày kết quả để
  team business hiểu và tin mô hình.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Một mô hình tốt trong notebook chưa đủ. Stakeholder cần hiểu vì sao mô hình ra quyết định như vậy, và tổ chức cũng cần biết mô hình có gây thiên lệch không. Đây là nơi explainability và fairness trở nên bắt buộc.

## Mục tiêu bài học

- Hiểu sự khác nhau giữa explainability cục bộ và toàn cục.
- Biết dùng permutation importance hoặc SHAP ở mức nhập môn.
- Biết đặt câu hỏi fairness trước khi deploy.

## Explainability cho ai?

- Data scientist cần debug mô hình.
- PM cần hiểu feature nào ảnh hưởng kết quả.
- Stakeholder nghiệp vụ cần câu chuyện đơn giản, đáng tin.
- Người dùng cuối có thể cần lý do cụ thể cho một dự đoán cá nhân.

## Hai mức giải thích

- Global explainability: mô hình nhìn chung dựa vào những yếu tố nào.
- Local explainability: vì sao riêng một mẫu lại bị dự đoán như vậy.

## Fairness không phải tùy chọn phụ

Nếu mô hình ảnh hưởng quyết định với con người, bạn nên kiểm tra hiệu năng theo từng nhóm người dùng, tỉ lệ false positive hoặc false negative theo từng nhóm, và feature nào có thể là proxy cho thuộc tính nhạy cảm.

## Cách trình bày với stakeholder

- Tránh công thức dài dòng.
- Dùng 3 đến 5 feature ảnh hưởng nhất.
- Nói rõ mức tự tin và giới hạn của mô hình.
- Nêu các rủi ro thiên lệch một cách thẳng thắn.

## Sai lầm thường gặp

- Lạm dụng biểu đồ SHAP mà không hiểu bản chất.
- Nhầm explainability với chứng minh nhân quả.
- Chỉ kiểm tra fairness sau khi đã triển khai.

## Bài tập thực hành

- Chọn một mô hình classification đã train.
- Tạo permutation importance hoặc SHAP summary.
- Kiểm tra metric theo 2 nhóm người dùng khác nhau.
- Viết phần giải thích như thể bạn đang trình bày với PM.

## Tiêu chí hoàn thành

- [ ] Phân biệt được global và local explainability.
- [ ] Biết ít nhất một cách kiểm tra fairness cơ bản.
- [ ] Trình bày được kết quả mà stakeholder không kỹ thuật vẫn hiểu.

## Thực hành từng bước (nâng cao)

1. Chọn một model đã huấn luyện và tập validation cố định.
2. Tính global importance và local explanation cho 5 mẫu.
3. Chia dữ liệu theo 2-3 nhóm người dùng để so fairness.
4. Ghi lại chênh lệch metric theo nhóm.
5. Soạn memo rủi ro đạo đức và khuyến nghị kiểm soát.

## Artifact nên nộp

- Báo cáo explainability 1-2 trang.
- Bảng fairness metrics theo nhóm.
- Danh sách hành động giảm bias theo mức ưu tiên.

## Câu hỏi tự kiểm tra

- Vì sao explainability không chứng minh quan hệ nhân quả?
- Chênh lệch metric bao nhiêu thì đáng báo động?
- Khi nào cần từ chối deploy vì fairness risk?
