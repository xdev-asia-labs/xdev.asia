---
id: 019e0b20-b200-7a01-e001-f1a7f8000001
title: OHDSI & OMOP CDM — Phân tích Dữ liệu Y tế Toàn diện
slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
description: >-
  Series toàn diện về hệ sinh thái OHDSI (Observational Health Data Sciences
  and Informatics) và OMOP Common Data Model — từ tổng quan nền tảng, chuẩn hóa
  Standardized Vocabularies (Athena), ETL dữ liệu y tế (WhiteRabbit,
  Rabbit-in-a-Hat, Usagi), triển khai OMOP CDM trên PostgreSQL, cài đặt
  WebAPI và ATLAS, đến phân tích dữ liệu lâm sàng (Cohort Definitions,
  Characterization, Incidence Rates, Population-Level Estimation, Patient-Level
  Prediction), đánh giá chất lượng dữ liệu (ACHILLES, Data Quality Dashboard),
  HADES R packages cho nghiên cứu quan sát, và triển khai OHDSI stack trên
  Docker/Kubernetes cho Network Studies đa trung tâm.
featured_image: null
level: intermediate
duration_hours: 50
lesson_count: 17
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T14:00:00.000000Z'
created_at: '2026-03-31T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat7-7007-a007-000000000007
  name: Kiến trúc hệ thống
  slug: architecture
tags:
  - name: OHDSI
    slug: ohdsi
  - name: OMOP
    slug: omop
  - name: CDM
    slug: cdm
  - name: ATLAS
    slug: atlas
  - name: WebAPI
    slug: webapi
  - name: Athena
    slug: athena
  - name: Usagi
    slug: usagi
  - name: healthcare
    slug: healthcare
  - name: y-te
    slug: y-te
  - name: ETL
    slug: etl
  - name: ACHILLES
    slug: achilles
  - name: HADES
    slug: hades
  - name: PostgreSQL
    slug: postgresql
  - name: data-quality
    slug: data-quality
  - name: observational-research
    slug: observational-research
sections:
  - id: section-01
    title: 'Phần 1: Tổng quan OHDSI & OMOP CDM'
    description: 'Giới thiệu hệ sinh thái OHDSI, kiến trúc OMOP CDM, và Standardized Vocabularies'
    sort_order: 1
    lessons:
      - id: 019e0b20-b201-7a01-e001-f1a7f8000001
        title: 'Bài 1: OHDSI là gì? — Tổng quan hệ sinh thái và tầm nhìn'
        slug: bai-1-ohdsi-la-gi-tong-quan-he-sinh-thai-va-tam-nhin
        description: >-
          Giới thiệu OHDSI (Observational Health Data Sciences and Informatics),
          mục tiêu và tầm nhìn, kiến trúc tổng thể hệ sinh thái công cụ
          (Atlas, WebAPI, Athena, Usagi, ACHILLES, HADES),
          và vai trò của OMOP CDM trong chuẩn hóa dữ liệu y tế toàn cầu.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0b20-b202-7a01-e001-f1a7f8000002
        title: 'Bài 2: OMOP Common Data Model — Cấu trúc, nguyên lý & Domain'
        slug: bai-2-omop-cdm-cau-truc-nguyen-ly-domain
        description: >-
          Kiến trúc OMOP CDM v5.4, các nhóm bảng (Clinical Data, Health System,
          Health Economics, Standardized Vocabularies, Metadata), quan hệ giữa
          các domain (Condition, Drug, Procedure, Measurement, Observation),
          Person-Visit-Event model và nguyên lý thiết kế.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0b20-b203-7a01-e001-f1a7f8000003
        title: 'Bài 3: Athena — Tra cứu & Quản lý Standardized Vocabularies'
        slug: bai-3-athena-tra-cuu-quan-ly-standardized-vocabularies
        description: >-
          Sử dụng Athena để tra cứu Standard Concepts, hiểu Vocabulary hierarchy
          (ICD-10, SNOMED CT, RxNorm, LOINC, ATC), concept relationships,
          cách tải và import vocabularies vào OMOP CDM database,
          mapping giữa source concepts và standard concepts.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: ETL & Chuẩn hóa Dữ liệu'
    description: 'Quy trình ETL từ dữ liệu nguồn sang OMOP CDM — WhiteRabbit, Rabbit-in-a-Hat, Usagi'
    sort_order: 2
    lessons:
      - id: 019e0b20-b204-7a01-e001-f1a7f8000004
        title: 'Bài 4: WhiteRabbit & Rabbit-in-a-Hat — Khảo sát dữ liệu nguồn & Thiết kế ETL'
        slug: bai-4-whiterabbit-rabbit-in-a-hat-khao-sat-du-lieu-thiet-ke-etl
        description: >-
          Cài đặt và sử dụng WhiteRabbit để scan dữ liệu nguồn, phân tích
          scan report, sử dụng Rabbit-in-a-Hat để thiết kế mapping
          table-to-table và field-to-field, tạo ETL specification document,
          và workflow chuẩn cho team ETL.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0b20-b205-7a01-e001-f1a7f8000005
        title: 'Bài 5: Usagi — Mapping mã nguồn sang OMOP Standard Concepts'
        slug: bai-5-usagi-mapping-ma-nguon-sang-omop-standard-concepts
        description: >-
          Cài đặt Usagi, import source codes, sử dụng thuật toán term similarity
          để tìm mapping candidates, review và approve mappings thủ công,
          xử lý các trường hợp đặc biệt (ICD-10 Việt Nam, thuốc nội địa),
          export mapping file cho ETL pipeline.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0b20-b206-7a01-e001-f1a7f8000006
        title: 'Bài 6: Xây dựng ETL Pipeline — Từ dữ liệu nguồn sang OMOP CDM'
        slug: bai-6-xay-dung-etl-pipeline-tu-du-lieu-nguon-sang-omop-cdm
        description: >-
          Thiết kế và implement ETL pipeline hoàn chỉnh, xử lý data transformation
          (date formats, unit conversion, code mapping), load data vào OMOP CDM
          tables, xử lý lỗi và data validation, incremental ETL strategy,
          ETL framework recommendations (Python, SQL, Talend).
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'Phần 3: Triển khai OHDSI Platform'
    description: 'Cài đặt OMOP CDM database, WebAPI backend, và ATLAS frontend'
    sort_order: 3
    lessons:
      - id: 019e0b20-b207-7a01-e001-f1a7f8000007
        title: 'Bài 7: Cài đặt OMOP CDM Database trên PostgreSQL'
        slug: bai-7-cai-dat-omop-cdm-database-tren-postgresql
        description: >-
          Tạo OMOP CDM schema trên PostgreSQL, import DDL scripts,
          load Standardized Vocabularies từ Athena, tạo indexes và constraints,
          cấu hình performance tuning cho OMOP queries,
          và script automation cho quá trình setup.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0b20-b208-7a01-e001-f1a7f8000008
        title: 'Bài 8: WebAPI — Cài đặt, Cấu hình & REST API'
        slug: bai-8-webapi-cai-dat-cau-hinh-rest-api
        description: >-
          Kiến trúc OHDSI WebAPI (Spring Boot), cài đặt từ source hoặc Docker,
          cấu hình kết nối CDM database, WebAPI REST endpoints (source, vocabulary,
          cohortdefinition, ir, estimation), authentication/authorization,
          và multi-source configuration.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0b20-b209-7a01-e001-f1a7f8000009
        title: 'Bài 9: ATLAS — Cài đặt, Tích hợp WebAPI & Giao diện tổng quan'
        slug: bai-9-atlas-cai-dat-tich-hop-webapi-giao-dien-tong-quan
        description: >-
          Cài đặt ATLAS web application, cấu hình kết nối WebAPI,
          tổng quan giao diện (Data Sources, Concept Sets, Cohort Definitions,
          Characterizations, Incidence Rates, Estimation, Prediction),
          cấu hình Security (OAuth, LDAP), và troubleshooting phổ biến.
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 'Phần 4: Phân tích Dữ liệu với ATLAS'
    description: 'Cohort Definitions, Characterization, Incidence Rates, Estimation và Prediction'
    sort_order: 4
    lessons:
      - id: 019e0b20-b210-7a01-e001-f1a7f8000010
        title: 'Bài 10: ATLAS — Concept Sets & Cohort Definitions'
        slug: bai-10-atlas-concept-sets-cohort-definitions
        description: >-
          Tạo Concept Sets (include/exclude descendants, mapped),
          thiết kế Cohort Definitions (initial events, inclusion criteria,
          censoring, era logic), best practices cho cohort design,
          generate SQL và execute trên CDM database.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e0b20-b211-7a01-e001-f1a7f8000011
        title: 'Bài 11: ATLAS — Characterization, Incidence Rates & Pathways'
        slug: bai-11-atlas-characterization-incidence-rates-pathways
        description: >-
          Cohort Characterization (demographics, conditions, drugs, measurements),
          Incidence Rate analysis (time-at-risk, target/outcome cohort),
          Treatment Pathways visualization, export kết quả và chia sẻ
          qua OHDSI network.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0b20-b212-7a01-e001-f1a7f8000012
        title: 'Bài 12: ATLAS — Population-Level Estimation & Patient-Level Prediction'
        slug: bai-12-atlas-population-level-estimation-patient-level-prediction
        description: >-
          Population-Level Effect Estimation (comparative cohort analysis,
          propensity score matching, negative control outcomes),
          Patient-Level Prediction (predictive model development, LASSO,
          gradient boosting, model evaluation ROC/AUC),
          và generate R study packages.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'Phần 5: Data Quality & Advanced Analytics'
    description: 'ACHILLES, Data Quality Dashboard, và HADES R packages'
    sort_order: 5
    lessons:
      - id: 019e0b20-b213-7a01-e001-f1a7f8000013
        title: 'Bài 13: ACHILLES — Data Characterization & Source Profiling'
        slug: bai-13-achilles-data-characterization-source-profiling
        description: >-
          Cài đặt và chạy ACHILLES trên CDM database, phân tích reports
          (person, visit, condition, drug, measurement distributions),
          ACHILLES Heel — phát hiện data quality issues, tích hợp kết quả
          vào ATLAS Data Sources.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0b20-b214-7a01-e001-f1a7f8000014
        title: 'Bài 14: Data Quality Dashboard — Đánh giá chất lượng dữ liệu CDM'
        slug: bai-14-data-quality-dashboard-danh-gia-chat-luong-du-lieu-cdm
        description: >-
          Cài đặt Data Quality Dashboard, chạy 1,500+ checks theo Kahn Framework
          (Conformance, Completeness, Plausibility), phân tích kết quả PASS/FAIL,
          threshold configuration, prioritize data quality issues,
          và quy trình cải thiện data quality liên tục.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0b20-b215-7a01-e001-f1a7f8000015
        title: 'Bài 15: HADES — R Packages cho Nghiên cứu Quan sát'
        slug: bai-15-hades-r-packages-cho-nghien-cuu-quan-sat
        description: >-
          Tổng quan HADES ecosystem (CohortGenerator, FeatureExtraction,
          CohortMethod, PatientLevelPrediction, SelfControlledCaseSeries),
          cài đặt và sử dụng các package chính, chạy complete study từ R,
          Strategus — execution engine cho reproducible studies.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 'Phần 6: Production & Network Studies'
    description: 'Triển khai OHDSI stack production và nghiên cứu đa trung tâm'
    sort_order: 6
    lessons:
      - id: 019e0b20-b216-7a01-e001-f1a7f8000016
        title: 'Bài 16: Triển khai OHDSI Stack trên Docker & Kubernetes'
        slug: bai-16-trien-khai-ohdsi-stack-tren-docker-kubernetes
        description: >-
          Docker Compose cho OHDSI stack (PostgreSQL + WebAPI + ATLAS),
          Kubernetes deployment (Helm charts, persistent volumes, ingress),
          backup & restore strategy, monitoring & alerting,
          performance tuning cho production workload.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0b20-b217-7a01-e001-f1a7f8000017
        title: 'Bài 17: Network Studies & Best Practices — Nghiên cứu đa trung tâm'
        slug: bai-17-network-studies-best-practices-nghien-cuu-da-trung-tam
        description: >-
          OHDSI Network Study workflow, distributed research (mỗi site chạy
          analysis local, chỉ chia sẻ aggregate results), study package
          development, data governance và privacy, OHDSI community participation,
          và lộ trình triển khai OHDSI tại Việt Nam.
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
---

## Giới thiệu khóa học

**OHDSI & OMOP CDM** là khóa học toàn diện về hệ sinh thái phân tích dữ liệu y tế quan sát lớn nhất thế giới.

### Tại sao OHDSI?

Dữ liệu y tế tại mỗi bệnh viện, hệ thống y tế được lưu trữ trong các định dạng khác nhau — khiến việc nghiên cứu đa trung tâm gần như không thể. **OHDSI** (phát âm: "Odyssey") giải quyết vấn đề này bằng cách chuẩn hóa dữ liệu vào **OMOP Common Data Model** và cung cấp bộ công cụ phân tích thống nhất.

### Bạn sẽ học gì?

```
Hệ sinh thái OHDSI
├── Standardized Vocabularies (Athena)
├── ETL Tools
│   ├── WhiteRabbit — Khảo sát dữ liệu nguồn
│   ├── Rabbit-in-a-Hat — Thiết kế ETL mapping
│   └── Usagi — Mapping mã nguồn → Standard Concepts
├── OMOP CDM Database (PostgreSQL)
├── WebAPI — Backend REST API
├── ATLAS — Web-based Analytics Platform
│   ├── Concept Sets & Cohort Definitions
│   ├── Characterization & Incidence Rates
│   ├── Population-Level Estimation
│   └── Patient-Level Prediction
├── Data Quality
│   ├── ACHILLES — Data Profiling
│   └── Data Quality Dashboard — 1,500+ Quality Checks
└── HADES — R Packages cho Observational Research
```

### Yêu cầu tiên quyết

- SQL cơ bản (SELECT, JOIN, GROUP BY)
- Hiểu biết cơ bản về database (PostgreSQL ưu tiên)
- Docker cơ bản (docker run, docker-compose)
- R cơ bản (cho phần HADES) — không bắt buộc
- Không yêu cầu kiến thức y khoa chuyên sâu
