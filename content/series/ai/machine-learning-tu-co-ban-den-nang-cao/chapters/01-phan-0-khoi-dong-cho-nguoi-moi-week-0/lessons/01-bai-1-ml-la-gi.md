---
id: 019d8b39-bb01-7001-c001-ee0100000001
title: 'Bài 1: ML là gì? Cách học để không ngợp'
slug: bai-1-ml-la-gi
description: >-
  So sánh AI/ML/Deep Learning bằng ví dụ đời thực. Giới thiệu workflow
  end-to-end và mindset học ML theo hướng thực hành.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Phần 0: Khởi động cho người mới (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5457" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5457)"/>

  <!-- Decorations -->
  <g>
    <circle cx="627" cy="51" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="654" cy="58" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="681" cy="65" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="708" cy="72" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="79" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.1769145362398,103 952.1769145362398,139 921,157 889.8230854637602,139 889.8230854637602,103.00000000000001 921,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 0</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: ML là gì? Cách học để không ngợp</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 0: Khởi động cho người mới (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Nếu bạn mới bước vào Machine Learning, điều khó nhất thường không phải là code mà là cảm giác mọi thứ quá rộng: nào là mô hình, dữ liệu, metric, train/test, rồi lại thêm AI, Deep Learning, LLM. Bài này có nhiệm vụ làm một việc rất rõ ràng: dựng cho bạn một bản đồ tổng thể để biết mình đang học gì, học để làm gì, và học theo thứ tự nào thì không bị ngợp.

## Mục tiêu bài học

- Phân biệt được AI, Machine Learning, Deep Learning và Data Science
- Hiểu quy trình ML end-to-end ở mức trực giác
- Biết một bài toán nào nên giải bằng ML và bài toán nào không cần ML

## 1. Machine Learning là gì?

Machine Learning là cách để máy tính **học quy luật từ dữ liệu** thay vì chúng ta viết ra mọi luật bằng tay.

Ví dụ:

- Bài toán spam email: thay vì viết hàng trăm luật kiểu “nếu có từ free thì là spam”, ta đưa cho mô hình hàng nghìn email đã gán nhãn spam/không spam để nó tự học mẫu.
- Bài toán dự đoán giá nhà: mô hình học mối liên hệ giữa diện tích, vị trí, số phòng, tuổi nhà và giá bán.

Điểm quan trọng: ML không “thông minh” theo kiểu con người. Nó chỉ giỏi tìm quy luật thống kê nếu dữ liệu đủ tốt và mục tiêu đủ rõ.

## 2. Phân biệt các khái niệm hay bị nhầm

| Khái niệm | Ý nghĩa ngắn gọn | Ví dụ |
|---|---|---|
| AI | Khái niệm rộng nhất: làm máy có hành vi giống trí tuệ | chatbot, game AI |
| Machine Learning | Nhánh của AI học từ dữ liệu | dự đoán churn, fraud detection |
| Deep Learning | ML dùng neural network nhiều lớp | image recognition, speech recognition |
| Data Science | Khai thác dữ liệu để ra insight và hỗ trợ quyết định | dashboard, phân tích cohort |

Cách nhớ nhanh:

- AI là “ô lớn”.
- ML là một cách phổ biến để làm AI.
- Deep Learning là một nhóm kỹ thuật bên trong ML.
- Data Science không hoàn toàn giống ML, nhưng dùng ML như một công cụ mạnh.

## 3. Quy trình ML end-to-end

Một dự án ML thực tế thường đi theo luồng sau:

1. Xác định bài toán business.
2. Chuyển bài toán business thành bài toán dự đoán.
3. Thu thập và hiểu dữ liệu.
4. Chọn metric đánh giá.
5. Tạo baseline.
6. Huấn luyện mô hình tốt hơn baseline.
7. Kiểm tra lỗi, giải thích kết quả.
8. Đưa mô hình vào sử dụng.
9. Theo dõi drift và retrain khi cần.

Ví dụ bài toán churn:

- Business question: khách nào sắp rời bỏ dịch vụ?
- ML formulation: dự đoán xác suất một khách hàng sẽ hủy trong 30 ngày tới.
- Input features: số lần đăng nhập, số ticket support, gói dịch vụ, thời gian sử dụng.
- Output: xác suất churn hoặc nhãn churn / không churn.

## 4. Khi nào nên dùng ML, khi nào không?

ML phù hợp khi:

- Có dữ liệu lịch sử đủ nhiều.
- Có đầu ra rõ ràng để học.
- Quy luật khó viết bằng rule cứng.
- Có giá trị thực tế nếu dự đoán tốt hơn hiện tại.

Không nên dùng ML khi:

- Bài toán chỉ cần vài rule cố định là giải được.
- Không có dữ liệu hoặc dữ liệu quá bẩn.
- Không có cách đo mô hình đúng/sai.
- Chi phí triển khai ML cao hơn lợi ích mang lại.

Ví dụ không cần ML:

- Tính VAT theo luật cố định.
- Tự động đánh số hóa đơn.
- Kiểm tra một trường có rỗng hay không.

## 5. Các loại bài toán ML cơ bản

### Regression

Dự đoán một số thực.

Ví dụ:

- Giá nhà
- Doanh thu tuần sau
- Nhiệt độ

### Classification

Dự đoán một nhãn.

Ví dụ:

- Spam / không spam
- Churn / không churn
- Gian lận / không gian lận

### Clustering

Không có nhãn sẵn, mô hình tự nhóm dữ liệu.

Ví dụ:

- Phân khúc khách hàng
- Gom nhóm sản phẩm theo hành vi mua

### Anomaly Detection

Tìm điểm bất thường.

Ví dụ:

- Giao dịch bất thường
- Thiết bị phát tín hiệu lỗi

## 6. Baseline là gì và vì sao bắt buộc?

Baseline là mô hình hoặc chiến lược đơn giản nhất để làm mốc so sánh.

Ví dụ:

- Dự đoán giá nhà bằng giá trung bình của tập train.
- Dự đoán mọi khách hàng đều “không churn”.

Nếu mô hình mới không thắng baseline, thì dự án chưa có giá trị. Người mới thường mắc lỗi nhảy thẳng vào XGBoost hoặc neural network mà chưa biết mô hình phức tạp có thực sự cải thiện gì không.

## 7. Một ví dụ cực ngắn với scikit-learn

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LogisticRegression(max_iter=300)
model.fit(X_train, y_train)

pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, pred))
```

Điều quan trọng ở đoạn code này không phải là nhớ từng hàm, mà là hiểu cấu trúc:

- có dữ liệu `X, y`
- tách train/test
- fit mô hình trên train
- đánh giá trên test

Đó là xương sống của hầu hết workflow ML.

## 8. Người mới nên học theo thứ tự nào?

Thứ tự hợp lý cho series này là:

1. Hiểu bức tranh tổng thể.
2. Biết thao tác dữ liệu với Pandas.
3. Làm được mô hình đầu tiên thật nhanh.
4. Học metric và overfitting sớm.
5. Sau đó mới đi vào pipeline, tuning và production.

Nếu học ngược, ví dụ lao vào tuning trước khi hiểu baseline, bạn sẽ rất dễ bị “học vẹt theo notebook”.

## Bài tập thực hành

1. Viết lại bằng lời của bạn sự khác nhau giữa AI, ML và Deep Learning.
2. Chọn 3 bài toán trong công việc hoặc đời sống và phân loại xem đó là regression, classification, clustering hay không nên dùng ML.
3. Tìm một ví dụ bài toán có thể giải bằng rule-based tốt hơn ML.

## Sai lầm thường gặp

- Học thuật toán trước khi hiểu bài toán business.
- Dùng ML cho bài toán quá đơn giản.
- Chỉ quan tâm mô hình mà bỏ qua dữ liệu và metric.

## Tiêu chí hoàn thành

- [ ] Giải thích được ML là gì bằng ngôn ngữ đời thường
- [ ] Phân biệt được 4 loại bài toán cơ bản
- [ ] Mô tả được workflow ML end-to-end ở mức cao
