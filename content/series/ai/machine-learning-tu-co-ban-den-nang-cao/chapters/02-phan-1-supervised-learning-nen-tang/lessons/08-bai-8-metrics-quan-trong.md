---
id: 019d8b39-bb08-7008-c008-ee0800000008
title: 'Bài 8: Metrics quan trọng: Accuracy, Precision, Recall, F1, AUC'
slug: bai-8-metrics-quan-trong
description: >-
  Chọn đúng metric theo business problem; khi nào dùng PR-AUC thay vì ROC-AUC;
  tránh tối ưu sai mục tiêu.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'Phần 1: Supervised Learning nền tảng'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="916" cy="178" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="732" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1048" cy="190" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="864" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="202" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="218" x2="1100" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="248" x2="1050" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: Metrics quan trọng: Accuracy,</tspan>
      <tspan x="60" dy="42">Precision, Recall, F1, AUC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Supervised Learning nền tảng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Model tốt hay không phụ thuộc rất nhiều vào metric bạn chọn. Cùng một mô hình có thể trông rất tốt theo accuracy nhưng lại rất tệ theo recall. Bài này giúp bạn chọn metric theo đúng bài toán thay vì theo thói quen.

## Mục tiêu bài học

- Phân biệt metric cho regression và classification.
- Hiểu accuracy, precision, recall, F1, ROC-AUC và khi nào nên dùng.
- Biết vì sao metric phải bám vào mục tiêu sản phẩm.

## Regression metrics

- MAE: dễ hiểu, đo sai lệch tuyệt đối trung bình.
- RMSE: phạt nặng lỗi lớn hơn MAE.
- R-squared: đo mức độ giải thích phương sai, nhưng đừng thần thánh hóa.

## Classification metrics

- Accuracy: tỉ lệ dự đoán đúng tổng thể.
- Precision: trong số các mẫu bị dự đoán dương, bao nhiêu mẫu thật sự dương.
- Recall: trong số các mẫu dương thật, model bắt được bao nhiêu.
- F1-score: cân bằng giữa precision và recall.
- ROC-AUC: đo khả năng xếp hạng xác suất giữa hai lớp.

## Ví dụ chọn metric theo ngữ cảnh

- Phát hiện gian lận: ưu tiên recall cao để không bỏ sót.
- Email spam: cần precision đủ tốt để tránh chặn nhầm email thường.
- Churn khách hàng: thường quan tâm recall và giá trị kinh doanh của hành động giữ chân.

## Code mẫu

~~~python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score

print('Accuracy:', accuracy_score(y_test, preds))
print('Precision:', precision_score(y_test, preds))
print('Recall:', recall_score(y_test, preds))
print('F1:', f1_score(y_test, preds))
print('ROC-AUC:', roc_auc_score(y_test, proba))
~~~

## Sai lầm thường gặp

- Dùng accuracy cho dữ liệu mất cân bằng mạnh.
- So sánh model bằng metric khác nhau giữa các lần thử.
- Tối ưu metric kỹ thuật nhưng quên cost kinh doanh.

## Bài tập thực hành

- Lấy một bài toán classification mất cân bằng.
- Tính confusion matrix và 5 metric chính.
- Viết 1 đoạn ngắn: nếu bạn là PM, bạn sẽ chọn metric nào làm KPI chính.

## Tiêu chí hoàn thành

- [ ] Chọn được metric phù hợp cho ít nhất 3 bài toán khác nhau.
- [ ] Giải thích được precision và recall bằng ví dụ đời thường.
- [ ] Đọc được confusion matrix mà không nhầm lẫn.

## Thực hành từng bước (nâng cao)

1. Chọn một bài toán churn hoặc fraud có mất cân bằng lớp.
2. Đo 5 metric: Accuracy, Precision, Recall, F1, ROC-AUC.
3. Thêm PR-AUC để so sánh trong dữ liệu lệch lớp.
4. Mô phỏng chi phí FP/FN và tính expected cost.
5. Chốt metric chính dùng để báo cáo tuần.

## Artifact nên nộp

- Bảng metric + biểu đồ PR curve và ROC curve.
- Mô hình cost matrix đơn giản.
- Kết luận metric chính và metric phụ để giám sát.

## Câu hỏi tự kiểm tra

- Vì sao accuracy gây hiểu nhầm trên dữ liệu lệch lớp?
- PR-AUC khác ROC-AUC ở điểm nào về ý nghĩa?
- Khi nào cần theo dõi nhiều metric cùng lúc?
