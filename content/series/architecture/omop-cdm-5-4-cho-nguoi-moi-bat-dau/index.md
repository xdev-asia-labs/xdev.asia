---
id: 019f1a00-a100-7b01-e001-omopcdm54001
title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
description: >-
  Series toàn diện nhất dành cho người mới bắt đầu tìm hiểu OMOP Common Data
  Model phiên bản 5.4. Từ khái niệm cơ bản về chuẩn hóa dữ liệu y tế,
  kiến trúc Person-centric, 37 bảng dữ liệu (Clinical Data, Health System,
  Health Economics, Standardized Vocabularies, Derived Elements, Metadata),
  đến hệ thống Concept/Vocabulary, quy trình ETL, và các công cụ hệ sinh thái
  OHDSI. Mỗi bài học đều có ví dụ thực tế từ bệnh viện Việt Nam, sơ đồ
  trực quan, và bài tập SQL hands-on.
featured_image: uploads/2026/04/omop-cdm-5-4-series-banner.png
level: beginner
duration_hours: 40
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-09T10:00:00.000000Z'
created_at: '2026-04-09T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat7-7007-a007-000000000007
  name: Kiến trúc hệ thống
  slug: architecture
tags:
  - name: OMOP
    slug: omop
  - name: CDM
    slug: cdm
  - name: OHDSI
    slug: ohdsi
  - name: healthcare
    slug: healthcare
  - name: y-te
    slug: y-te
  - name: data-model
    slug: data-model
  - name: ETL
    slug: etl
  - name: Vocabulary
    slug: vocabulary
  - name: PostgreSQL
    slug: postgresql
  - name: beginner
    slug: beginner
sections:
  - id: section-01
    title: "Phần 1: Tổng quan & Nền tảng"
    description: "OMOP CDM là gì, tại sao cần chuẩn hóa dữ liệu y tế, kiến trúc tổng thể và hệ thống Concept"
    sort_order: 1
    lessons:
      - id: 019f1a00-a101-7b01-e001-omopcdm54001
        title: "Bài 1: OMOP CDM là gì? — Tại sao cần chuẩn hóa dữ liệu y tế"
        slug: bai-1-omop-cdm-la-gi-tai-sao-can-chuan-hoa-du-lieu-y-te
        description: >-
          Giới thiệu OMOP Common Data Model, lịch sử ra đời từ dự án OMOP
          đến cộng đồng OHDSI, vấn đề dữ liệu y tế phân mảnh,
          và tầm quan trọng của chuẩn hóa dữ liệu trong nghiên cứu lâm sàng.
        duration_minutes: 45
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019f1a00-a102-7b01-e001-omopcdm54002
        title: "Bài 2: Kiến trúc tổng thể OMOP CDM 5.4 — Nhóm bảng & Nguyên lý thiết kế"
        slug: bai-2-kien-truc-tong-the-omop-cdm-5-4-nhom-bang-nguyen-ly-thiet-ke
        description: >-
          Tổng quan 37 bảng trong OMOP CDM 5.4, 6 nhóm bảng chính
          (Clinical Data, Health System, Health Economics, Standardized
          Vocabularies, Derived Elements, Metadata), mô hình Person-centric
          và các nguyên lý thiết kế cốt lõi.
        duration_minutes: 60
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019f1a00-a103-7b01-e001-omopcdm54003
        title: "Bài 3: Hiểu Concept — Trái tim của OMOP CDM"
        slug: bai-3-hieu-concept-trai-tim-cua-omop-cdm
        description: >-
          Concept là gì, Standard Concept vs Source Concept vs Classification
          Concept, concept_id vs source_value vs source_concept_id,
          Domain, Vocabulary, Concept Class, và cách tra cứu trên Athena.
        duration_minutes: 60
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: "Phần 2: Person & Visit — Nền tảng dữ liệu"
    description: "Bảng PERSON, OBSERVATION_PERIOD, VISIT_OCCURRENCE và VISIT_DETAIL"
    sort_order: 2
    lessons:
      - id: 019f1a00-a104-7b01-e001-omopcdm54004
        title: "Bài 4: Bảng PERSON — Quản lý danh tính bệnh nhân"
        slug: bai-4-bang-person-quan-ly-danh-tinh-benh-nhan
        description: >-
          Cấu trúc bảng PERSON, các trường bắt buộc (person_id,
          gender_concept_id, year_of_birth), demographic data, liên kết
          với LOCATION và PROVIDER, ETL conventions cho dữ liệu Việt Nam.
        duration_minutes: 60
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019f1a00-a105-7b01-e001-omopcdm54005
        title: "Bài 5: OBSERVATION_PERIOD — Khoảng thời gian theo dõi bệnh nhân"
        slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
        description: >-
          Ý nghĩa của OBSERVATION_PERIOD, tại sao đây là bảng bắt buộc,
          cách xác định start/end date từ dữ liệu nguồn, ảnh hưởng đến
          tính toán incidence/prevalence, và các quy ước ETL.
        duration_minutes: 45
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019f1a00-a106-7b01-e001-omopcdm54006
        title: "Bài 6: VISIT_OCCURRENCE & VISIT_DETAIL — Lượt khám & Chi tiết"
        slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
        description: >-
          Các loại Visit (Inpatient, Outpatient, ER, Telehealth),
          cấu trúc VISIT_OCCURRENCE, VISIT_DETAIL cho chi tiết trong
          một lượt khám, admitted_from/discharged_to, và mối quan hệ
          Visit-Event trong mô hình OMOP.
        duration_minutes: 60
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: "Phần 3: Sự kiện lâm sàng chính"
    description: "CONDITION_OCCURRENCE, DRUG_EXPOSURE, PROCEDURE_OCCURRENCE, MEASUREMENT"
    sort_order: 3
    lessons:
      - id: 019f1a00-a107-7b01-e001-omopcdm54007
        title: "Bài 7: CONDITION_OCCURRENCE — Chẩn đoán & Bệnh lý"
        slug: bai-7-condition-occurrence-chan-doan-benh-ly
        description: >-
          Ghi nhận chẩn đoán, triệu chứng, dấu hiệu bệnh lý,
          condition_concept_id vs source_value, condition_status
          (admitting/primary/secondary), liên kết với Visit và Provider,
          phân biệt với OBSERVATION table.
        duration_minutes: 60
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019f1a00-a108-7b01-e001-omopcdm54008
        title: "Bài 8: DRUG_EXPOSURE — Thuốc & Điều trị"
        slug: bai-8-drug-exposure-thuoc-dieu-tri
        description: >-
          Ghi nhận kê đơn, phát thuốc, dùng thuốc, vaccine,
          drug_concept_id (RxNorm), quantity/days_supply/refills,
          route_concept_id, sig, liên kết DRUG_STRENGTH,
          và ETL conventions cho dữ liệu thuốc Việt Nam.
        duration_minutes: 75
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019f1a00-a109-7b01-e001-omopcdm54009
        title: "Bài 9: PROCEDURE_OCCURRENCE — Thủ thuật & Phẫu thuật"
        slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
        description: >-
          Ghi nhận các hoạt động do nhân viên y tế thực hiện,
          procedure_concept_id (SNOMED, CPT4, ICD-10-PCS),
          modifier_concept_id, quantity, phân biệt Procedure vs
          Measurement vs Drug, và xử lý duplicate records.
        duration_minutes: 60
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019f1a00-a110-7b01-e001-omopcdm54010
        title: "Bài 10: MEASUREMENT — Xét nghiệm & Đo lường"
        slug: bai-10-measurement-xet-nghiem-do-luong
        description: >-
          Ghi nhận kết quả xét nghiệm, sinh hiệu, chỉ số,
          value_as_number/value_as_concept_id, unit_concept_id,
          operator_concept_id (>, <, =), range_low/range_high,
          measurement_event_id (CDM 5.4 mới), và phân biệt
          Measurement vs Observation.
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: "Phần 4: Bảng lâm sàng mở rộng"
    description: "OBSERVATION, DEVICE_EXPOSURE, NOTE, SPECIMEN, DEATH, EPISODE"
    sort_order: 4
    lessons:
      - id: 019f1a00-a111-7b01-e001-omopcdm54011
        title: "Bài 11: OBSERVATION — Quan sát lâm sàng, tiền sử & lối sống"
        slug: bai-11-observation-quan-sat-lam-sang-tien-su-loi-song
        description: >-
          Bảng "catch-all" cho dữ liệu không thuộc các domain khác,
          tiền sử gia đình, tiền sử bệnh, lối sống (hút thuốc, rượu),
          value_as_number/string/concept, qualifier_concept_id,
          observation_event_id (CDM 5.4 mới).
        duration_minutes: 60
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019f1a00-a112-7b01-e001-omopcdm54012
        title: "Bài 12: DEVICE_EXPOSURE, SPECIMEN & NOTE — Thiết bị, Mẫu vật & Ghi chú"
        slug: bai-12-device-exposure-specimen-note-thiet-bi-mau-vat-ghi-chu
        description: >-
          DEVICE_EXPOSURE (stent, pacemaker, UDI), production_id mới CDM 5.4,
          SPECIMEN (mẫu máu, mô), anatomic_site_concept_id,
          NOTE (free-text, HL7/LOINC CDO), NOTE_NLP (NLP output),
          encoding và language concepts.
        duration_minutes: 60
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019f1a00-a113-7b01-e001-omopcdm54013
        title: "Bài 13: DEATH, EPISODE & EPISODE_EVENT — Tử vong & Giai đoạn bệnh"
        slug: bai-13-death-episode-episode-event-tu-vong-giai-doan-benh
        description: >-
          Bảng DEATH (cause_concept_id, death_type_concept_id),
          EPISODE (bảng mới CDM 5.4 — disease episodes, treatment lines),
          EPISODE_EVENT (liên kết events với episodes), FACT_RELATIONSHIP
          (quan hệ giữa các facts trong CDM).
        duration_minutes: 60
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: "Phần 5: Standardized Vocabularies"
    description: "Hệ thống Concept, Vocabulary hierarchy, Relationships, Mapping"
    sort_order: 5
    lessons:
      - id: 019f1a00-a114-7b01-e001-omopcdm54014
        title: "Bài 14: Hệ thống Vocabulary — CONCEPT, VOCABULARY, DOMAIN & CONCEPT_CLASS"
        slug: bai-14-he-thong-vocabulary-concept-vocabulary-domain-concept-class
        description: >-
          Cách OMOP tổ chức hơn 10 triệu Concepts từ 100+ vocabularies
          (SNOMED CT, ICD-10, RxNorm, LOINC, ATC), bảng CONCEPT chi tiết,
          VOCABULARY, DOMAIN, CONCEPT_CLASS, standard_concept flag,
          valid_start_date/valid_end_date, và CONCEPT_SYNONYM.
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019f1a00-a115-7b01-e001-omopcdm54015
        title: "Bài 15: CONCEPT_RELATIONSHIP & CONCEPT_ANCESTOR — Mối quan hệ & Phả hệ"
        slug: bai-15-concept-relationship-concept-ancestor-moi-quan-he-pha-he
        description: >-
          Các loại relationship (Maps to, Is a, Has component),
          bảng CONCEPT_RELATIONSHIP, bảng RELATIONSHIP,
          CONCEPT_ANCESTOR (hierarchical rollup), min/max_levels_of_separation,
          ứng dụng trong cohort definition và phân tích.
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019f1a00-a116-7b01-e001-omopcdm54016
        title: "Bài 16: SOURCE_TO_CONCEPT_MAP & DRUG_STRENGTH — Mapping & Hàm lượng thuốc"
        slug: bai-16-source-to-concept-map-drug-strength-mapping-ham-luong-thuoc
        description: >-
          SOURCE_TO_CONCEPT_MAP cho custom mappings (ICD-10 VN, thuốc nội địa),
          DRUG_STRENGTH (amount_value, numerator/denominator cho concentration),
          box_size, công cụ Usagi cho mapping, và best practices.
        duration_minutes: 60
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: "Phần 6: Health System, Economics & Derived Tables"
    description: "LOCATION, CARE_SITE, PROVIDER, PAYER_PLAN_PERIOD, COST, Era tables"
    sort_order: 6
    lessons:
      - id: 019f1a00-a117-7b01-e001-omopcdm54017
        title: "Bài 17: Health System — LOCATION, CARE_SITE & PROVIDER"
        slug: bai-17-health-system-location-care-site-provider
        description: >-
          Bảng LOCATION (address, country_concept_id, latitude/longitude),
          CARE_SITE (tổ chức y tế, place_of_service),
          PROVIDER (nhân viên y tế, specialty_concept_id, NPI),
          quan hệ phân cấp và FACT_RELATIONSHIP.
        duration_minutes: 45
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019f1a00-a118-7b01-e001-omopcdm54018
        title: "Bài 18: Health Economics — PAYER_PLAN_PERIOD & COST"
        slug: bai-18-health-economics-payer-plan-period-cost
        description: >-
          PAYER_PLAN_PERIOD (bảo hiểm y tế, payer/plan/sponsor),
          bảng COST (chi phí gắn với mọi clinical event),
          total_charge/total_paid/paid_by_payer, DRG, revenue_code,
          và ứng dụng trong Health Economics & Outcomes Research (HEOR).
        duration_minutes: 60
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019f1a00-a119-7b01-e001-omopcdm54019
        title: "Bài 19: Derived Elements — DRUG_ERA, DOSE_ERA & CONDITION_ERA"
        slug: bai-19-derived-elements-drug-era-dose-era-condition-era
        description: >-
          Era tables được tính toán từ dữ liệu gốc, DRUG_ERA
          (gộp drug exposures theo ingredient, persistence window 30 ngày),
          DOSE_ERA (liều ổn định), CONDITION_ERA (gộp conditions,
          gap 30 ngày), SQL scripts tạo era, và ứng dụng phân tích.
        duration_minutes: 60
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: "Phần 7: Metadata, Cohort & Tổng kết thực hành"
    description: "CDM_SOURCE, METADATA, COHORT, tổng kết toàn bộ CDM và bước tiếp theo"
    sort_order: 7
    lessons:
      - id: 019f1a00-a120-7b01-e001-omopcdm54020
        title: "Bài 20: CDM_SOURCE, METADATA, COHORT & Tổng kết — Bước tiếp theo"
        slug: bai-20-cdm-source-metadata-cohort-tong-ket-buoc-tiep-theo
        description: >-
          CDM_SOURCE (metadata về dataset), METADATA table, COHORT &
          COHORT_DEFINITION (phân nhóm bệnh nhân), tổng kết toàn bộ
          37 bảng OMOP CDM 5.4, lộ trình tiếp theo (ETL, ATLAS,
          ACHILLES, HADES), và tài nguyên học tập.
        duration_minutes: 60
        is_free: true
        sort_order: 20
        video_url: null
---

## Giới thiệu Series

**OMOP CDM 5.4 cho Người mới** là series toàn diện nhất bằng tiếng Việt, giúp bạn hiểu rõ **OMOP Common Data Model phiên bản 5.4** — tiêu chuẩn dữ liệu y tế được sử dụng bởi hơn **400 tổ chức trên 80 quốc gia**.

### Vấn đề

Dữ liệu y tế tại mỗi bệnh viện được lưu trữ theo cách riêng:

```
Bệnh viện A (HIS)          Bệnh viện B (EMR)          Bảo hiểm Y tế XH
├── patients               ├── nguoi_benh              ├── ho_so_kcb
├── diagnoses (ICD-10)     ├── chan_doan (ICD-10-VN)   ├── ma_benh
├── prescriptions           ├── don_thuoc               ├── thuoc_bh
└── lab_results            └── ket_qua_xn             └── xet_nghiem
    (khác format)              (khác format)               (khác format)
```

→ **Không thể so sánh, tổng hợp, hay nghiên cứu liên bệnh viện.**

### Giải pháp: OMOP CDM

```
                          OMOP Common Data Model 5.4
                    ┌─────────────────────────────────────┐
  Bệnh viện A ──→  │  PERSON                             │
  Bệnh viện B ──→  │  ├── VISIT_OCCURRENCE               │  ──→ Phân tích thống nhất
  BHYT        ──→  │  │   ├── CONDITION_OCCURRENCE        │  ──→ Nghiên cứu đa trung tâm
  Phòng khám  ──→  │  │   ├── DRUG_EXPOSURE               │  ──→ AI/ML trên dữ liệu y tế
                    │  │   ├── PROCEDURE_OCCURRENCE        │
                    │  │   ├── MEASUREMENT                 │
                    │  │   └── OBSERVATION                 │
                    │  ├── Standardized Vocabularies       │
                    │  └── Health System / Economics       │
                    └─────────────────────────────────────┘
```

### Bạn sẽ học gì?

| Phần | Nội dung | Bài |
|------|----------|-----|
| 1. Tổng quan | OMOP CDM, kiến trúc, Concept | Bài 1-3 |
| 2. Person & Visit | PERSON, OBSERVATION_PERIOD, VISIT | Bài 4-6 |
| 3. Sự kiện lâm sàng | Condition, Drug, Procedure, Measurement | Bài 7-10 |
| 4. Bảng mở rộng | Observation, Device, Note, Death, Episode | Bài 11-13 |
| 5. Vocabularies | Concept system, Relationships, Mapping | Bài 14-16 |
| 6. System & Economics | Location, Provider, Cost, Era tables | Bài 17-19 |
| 7. Tổng kết | Metadata, Cohort, lộ trình tiếp | Bài 20 |

### Yêu cầu tiên quyết

- Hiểu biết cơ bản về database (biết table, column, row)
- SQL cơ bản (SELECT, JOIN, WHERE) — hữu ích nhưng không bắt buộc
- Không cần kiến thức y tế chuyên sâu — mọi khái niệm đều được giải thích

### Khác với series OHDSI & OMOP CDM

Series này tập trung **100% vào cấu trúc dữ liệu OMOP CDM 5.4** — giải thích từng bảng, từng trường, với ví dụ cụ thể. Nếu bạn muốn học thêm công cụ (ATLAS, WebAPI, ACHILLES, ETL), hãy xem series [OHDSI & OMOP CDM — Phân tích Dữ liệu Y tế Toàn diện](/series/ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien).
