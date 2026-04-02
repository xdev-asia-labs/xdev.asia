---
id: 019d8b39-aa01-7001-b001-ff1000000001
title: "Machine Learning: Từ Cơ bản đến Nâng cao"
slug: machine-learning-tu-co-ban-den-nang-cao
description: >-
  Lộ trình Machine Learning cho người mới bắt đầu từ số 0, theo phương pháp
  dễ hiểu: trực giác trước, code sau, toán vừa đủ dùng. Khóa học đi từ cài đặt
  môi trường, model đầu tiên, đánh giá đúng, chống overfitting/data leakage,
  đến các mô hình phổ biến (Linear, Logistic, Tree, XGBoost), unsupervised,
  time series, và triển khai production. Mỗi cụm bài đều có mini-project,
  challenge thực chiến và checklist đầu ra rõ ràng.
featured_image: uploads/2026/03/machine-learning-tu-co-ban-den-nang-cao-cover.png
level: beginner
duration_hours: 72
lesson_count: 24
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-02T10:00:00.000000Z'
created_at: '2026-04-02T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: Machine Learning
    slug: machine-learning
  - name: Supervised Learning
    slug: supervised-learning
  - name: Unsupervised Learning
    slug: unsupervised-learning
  - name: scikit-learn
    slug: scikit-learn
  - name: Feature Engineering
    slug: feature-engineering
  - name: Model Evaluation
    slug: model-evaluation
  - name: Ensemble Learning
    slug: ensemble-learning
  - name: XGBoost
    slug: xgboost
  - name: MLOps
    slug: mlops
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-ml-00
    title: "Phần 0: Khởi động cho người mới (Week 0)"
    description: Cài môi trường, ôn Python/Pandas tối thiểu, làm model đầu tiên
    sort_order: 1
    lessons:
      - id: 019d8b39-bb01-7001-c001-ee0100000001
        title: "Bài 1: ML là gì? Cách học để không ngợp"
        slug: bai-1-ml-la-gi
        description: >-
          So sánh AI/ML/Deep Learning bằng ví dụ đời thực. Giới thiệu workflow
          end-to-end và mindset học ML theo hướng thực hành.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b39-bb02-7002-c002-ee0200000002
        title: "Bài 2: Setup môi trường học ML chuẩn production"
        slug: bai-2-setup-moi-truong-ml
        description: >-
          Cài Python, Jupyter, VS Code, NumPy/Pandas/scikit-learn; tạo project
          template, quản lý dependency và notebook workflow.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b39-bb03-7003-c003-ee0300000003
        title: "Bài 3: Python/Pandas crash course cho ML"
        slug: bai-3-python-pandas-crash-course
        description: >-
          DataFrame, filtering, groupby, merge, xử lý thiếu dữ liệu mức cơ bản
          và EDA nhanh cho người chưa vững Python dữ liệu.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b39-bb04-7004-c004-ee0400000004
        title: "Bài 4: Model đầu tiên trong 30 phút + baseline"
        slug: bai-4-model-dau-tien-baseline
        description: >-
          Tạo mô hình đầu tiên với scikit-learn, hiểu baseline là gì và vì sao
          luôn cần baseline trước khi tối ưu.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b39-bb05-7005-c005-ee0500000005
        title: "Bài 5: Mini-project 1 — Dự đoán giá nhà"
        slug: bai-5-mini-project-1-du-doan-gia-nha
        description: >-
          Bài thực hành trọn vẹn đầu tiên: EDA đơn giản, train/test split,
          baseline model, đánh giá và rút kinh nghiệm.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-ml-01
    title: "Phần 1: Supervised Learning nền tảng"
    description: Regression, classification và các metric cốt lõi
    sort_order: 2
    lessons:
      - id: 019d8b39-bb06-7006-c006-ee0600000006
        title: "Bài 6: Linear Regression & trực giác gradient descent"
        slug: bai-6-linear-regression-gradient-descent
        description: >-
          Hiểu loss function, gradient descent và regularization ở mức dễ hiểu,
          đủ để debug mô hình regression.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b39-bb07-7007-c007-ee0700000007
        title: "Bài 7: Logistic Regression & xác suất cho classification"
        slug: bai-7-logistic-regression
        description: >-
          Logistic regression, sigmoid, decision boundary, threshold và cách
          đọc xác suất dự đoán đúng cách.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b39-bb08-7008-c008-ee0800000008
        title: "Bài 8: Metrics quan trọng: Accuracy, Precision, Recall, F1, AUC"
        slug: bai-8-metrics-quan-trong
        description: >-
          Chọn đúng metric theo business problem; khi nào dùng PR-AUC thay vì
          ROC-AUC; tránh tối ưu sai mục tiêu.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b39-bb09-7009-c009-ee0900000009
        title: "Bài 9: Overfitting/Underfitting và cách sửa"
        slug: bai-9-overfitting-underfitting
        description: >-
          Learning curve, validation curve, bias-variance tradeoff và chiến lược
          cải thiện mô hình có hệ thống.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b39-bb10-7010-c010-ee1000000010
        title: "Bài 10: Mini-project 2 — Dự đoán churn khách hàng"
        slug: bai-10-mini-project-2-churn
        description: >-
          Ứng dụng supervised learning cho bài toán phân loại thực tế và trình
          bày kết quả theo góc nhìn sản phẩm.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-ml-02
    title: "Phần 2: Workflow chuẩn công nghiệp"
    description: Pipeline, CV, xử lý dữ liệu bẩn và chống data leakage
    sort_order: 3
    lessons:
      - id: 019d8b39-bb11-7011-c011-ee1100000011
        title: "Bài 11: Missing Values, Categorical Variables, Feature Engineering"
        slug: bai-11-missing-categorical-feature-engineering
        description: >-
          Quy trình xử lý dữ liệu thực tế: missing, encoding, scaling,
          outlier handling và feature crosses cơ bản.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b39-bb12-7012-c012-ee1200000012
        title: "Bài 12: Pipelines & ColumnTransformer với scikit-learn"
        slug: bai-12-pipelines-columntransformer
        description: >-
          Xây pipeline chống lỗi thao tác thủ công, tái sử dụng tốt và giảm rủi
          ro leakage trong huấn luyện.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b39-bb13-7013-c013-ee1300000013
        title: "Bài 13: Cross-validation & Hyperparameter Tuning"
        slug: bai-13-cross-validation-tuning
        description: >-
          KFold/StratifiedKFold, GridSearch/RandomizedSearch, và cách đọc kết quả
          tuning để chọn mô hình chắc chắn hơn.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b39-bb14-7014-c014-ee1400000014
        title: "Bài 14: Data Leakage & Error Analysis (bắt buộc)"
        slug: bai-14-data-leakage-error-analysis
        description: >-
          Nhận diện leakage phổ biến, điều tra mẫu dự đoán sai và lập kế hoạch
          cải thiện theo lỗi thực tế thay vì đoán mò.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b39-bb15-7015-c015-ee1500000015
        title: "Bài 15: Challenge 60 phút — House Prices nâng cao"
        slug: bai-15-challenge-house-prices
        description: >-
          Bài thử thách time-boxed: xây pipeline hoàn chỉnh và cải thiện điểm số
          bằng tuning + feature engineering có kiểm soát.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-ml-03
    title: "Phần 3: Thuật toán nâng cao vừa đủ dùng"
    description: Tree ensembles, unsupervised, anomaly detection và time series
    sort_order: 4
    lessons:
      - id: 019d8b39-bb16-7016-c016-ee1600000016
        title: "Bài 16: Decision Tree, Random Forest, XGBoost"
        slug: bai-16-decision-tree-random-forest-xgboost
        description: >-
          So sánh tree-based models, hiểu feature importance, overfitting control,
          và cách chọn mô hình theo dữ liệu.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b39-bb17-7017-c017-ee1700000017
        title: "Bài 17: Clustering (K-Means, DBSCAN, Hierarchical)"
        slug: bai-17-clustering
        description: >-
          Unsupervised learning cho phân khúc khách hàng và khám phá cấu trúc
          dữ liệu khi không có nhãn.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b39-bb18-7018-c018-ee1800000018
        title: "Bài 18: PCA, t-SNE, UMAP cho trực quan hóa"
        slug: bai-18-pca-tsne-umap
        description: >-
          Giảm chiều dữ liệu để hiểu cụm, phát hiện bất thường và tăng hiệu năng
          cho downstream model.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b39-bb19-7019-c019-ee1900000019
        title: "Bài 19: Anomaly Detection trong hệ thống thật"
        slug: bai-19-anomaly-detection
        description: >-
          Isolation Forest, One-Class SVM và thiết kế rule cảnh báo cho fraud,
          log monitoring, quality control.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b39-bb20-7020-c020-ee2000000020
        title: "Bài 20: Time Series Forecasting cơ bản"
        slug: bai-20-time-series-forecasting
        description: >-
          Walk-forward validation, lag features, baseline forecast, và ứng dụng
          dự báo nhu cầu cơ bản.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-ml-04
    title: "Phần 4: Production, Explainability và Capstone"
    description: Tối ưu mô hình, theo dõi chất lượng và triển khai bền vững
    sort_order: 5
    lessons:
      - id: 019d8b39-bb21-7021-c021-ee2100000021
        title: "Bài 21: Explainability & Fairness cho stakeholder"
        slug: bai-21-explainability-fairness
        description: >-
          SHAP, permutation importance, fairness checks và cách trình bày kết quả
          để team business hiểu và tin mô hình.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b39-bb22-7022-c022-ee2200000022
        title: "Bài 22: Model Serving với FastAPI + Docker"
        slug: bai-22-model-serving-fastapi-docker
        description: >-
          Đóng gói model, xây inference API, versioning model và triển khai dịch
          vụ ML nhỏ gọn.
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b39-bb23-7023-c023-ee2300000023
        title: "Bài 23: Monitoring, Drift Detection & Retraining"
        slug: bai-23-monitoring-drift-retraining
        description: >-
          Theo dõi chất lượng sau deploy, phát hiện drift, thiết kế retraining
          loop và alerting tối thiểu.
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8b39-bb24-7024-c024-ee2400000024
        title: "Bài 24: Capstone — Dự án ML end-to-end + demo"
        slug: bai-24-capstone-ml-end-to-end
        description: >-
          Hoàn thành 1 dự án theo rubric: baseline -> pipeline -> tuning ->
          evaluation -> API -> monitoring -> báo cáo 1 trang cho business.
        duration_minutes: 240
        is_free: true
        sort_order: 23
        video_url: null
---

## Series Này Dành Cho Ai?

Series này dành cho người mới học ML từ con số 0, đặc biệt nếu bạn:

- Biết Python cơ bản nhưng chưa tự tin làm dự án ML.
- Đã học vài thuật toán rời rạc nhưng chưa ghép thành quy trình hoàn chỉnh.
- Muốn học theo cách dễ hiểu, thực hành nhiều, tránh quá tải công thức.

## Bạn Sẽ Học Theo Cách Nào?

Mỗi bài được thiết kế theo khung cố định:

1. Trực giác: hiểu "vì sao" trước.
2. Code: chạy ví dụ tối thiểu, sửa tham số để thấy khác biệt.
3. Toán vừa đủ: chỉ học phần cần để đọc kết quả và debug model.
4. Checklist: biết rõ học xong phải làm được gì.

## Đầu Ra Sau Series

Sau khi hoàn thành, bạn sẽ có:

- 1 quy trình ML end-to-end có thể tái sử dụng.
- Kỹ năng chọn metric đúng và tránh data leakage.
- Kinh nghiệm dùng pipeline, cross-validation, tuning chuẩn.
- 1 capstone project có rubric rõ ràng để đưa vào portfolio.

## Lộ Trình Nhanh

- Phần 0: Khởi động cho người mới (setup + model đầu tiên + baseline).
- Phần 1: Supervised learning nền tảng (regression/classification/metrics).
- Phần 2: Workflow công nghiệp (pipeline/CV/leakage/error analysis).
- Phần 3: Thuật toán nâng cao vừa đủ dùng (tree, clustering, time series).
- Phần 4: Production + Explainability + Capstone.

## Gợi Ý Cách Học Để Không Bối Rối

- Mỗi tuần học 2-3 bài, ưu tiên hoàn thành bài tập thực hành.
- Không nhảy ngay vào model phức tạp trước khi có baseline.
- Với mỗi bài, ghi lại 3 ý: giả thuyết, kết quả, bài học rút ra.

Nếu bạn mới hoàn toàn, hãy bắt đầu đúng thứ tự từ Phần 0.
