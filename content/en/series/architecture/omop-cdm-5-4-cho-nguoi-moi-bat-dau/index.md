---
id: 019f1a00-a100-7b01-e001-omopcdm54001
title: OMOP CDM 5.4 for Beginners — Understand A to Z
slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
description: >-
  The most comprehensive series for beginners to learn OMOP Common Data Model
  version 5.4. From the basic concept of medical data standardization,
  Person-centric architecture, 37 data tables (Clinical Data, Health System,
  Health Economics, Standardized Vocabularies, Derived Elements, Metadata), to
  Concept/Vocabulary systems, ETL processes, and OHDSI ecosystem tools. Each
  lesson has real-life examples from Vietnamese hospitals, intuitive diagrams,
  and hands-on SQL exercises.
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
  name: System architecture
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
    title: 'Part 1: Overview & Background'
    description: >-
      What is OMOP CDM, why is it necessary to standardize medical data, overall
      architecture and Concept system
    sort_order: 1
    lessons:
      - id: 019f1a00-a101-7b01-e001-omopcdm54001
        title: >-
          Lesson 1: What is OMOP CDM? — Why is it necessary to standardize
          medical data?
        slug: bai-1-omop-cdm-la-gi-tai-sao-can-chuan-hoa-du-lieu-y-te
        description: >-
          Introducing the OMOP Common Data Model, its history from the OMOP
          project to the OHDSI community, the problem of fragmented medical
          data, and the importance of data standardization in clinical research.
        duration_minutes: 45
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019f1a00-a102-7b01-e001-omopcdm54002
        title: >-
          Lesson 2: Overall architecture of OMOP CDM 5.4 — Table groups & Design
          principles
        slug: bai-2-kien-truc-tong-the-omop-cdm-5-4-nhom-bang-nguyen-ly-thiet-ke
        description: >-
          Overview of 37 tables in OMOP CDM 5.4, 6 main table groups (Clinical
          Data, Health System, Health Economics, Standardized Vocabularies,
          Derived Elements, Metadata), Person-centric model and core design
          principles.
        duration_minutes: 60
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019f1a00-a103-7b01-e001-omopcdm54003
        title: 'Lesson 3: Understanding the Concept — The heart of OMOP CDM'
        slug: bai-3-hieu-concept-trai-tim-cua-omop-cdm
        description: >-
          What is Concept, Standard Concept vs Source Concept vs Classification
          Concept, concept_id vs source_value vs source_concept_id, Domain,
          Vocabulary, Concept Class, and how to look up on Athena.
        duration_minutes: 60
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Person & Visit — Data platform'
    description: 'PERSON, OBSERVATION_PERIOD, VISIT_OCCURRENCE and VISIT_DETAIL tables'
    sort_order: 2
    lessons:
      - id: 019f1a00-a104-7b01-e001-omopcdm54004
        title: 'Lesson 4: PERSON table — Patient identity management'
        slug: bai-4-bang-person-quan-ly-danh-tinh-benh-nhan
        description: >-
          PERSON table structure, required fields (person_id, gender_concept_id,
          year_of_birth), demographic data, link with LOCATION and PROVIDER, ETL
          conventions for Vietnamese data.
        duration_minutes: 60
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019f1a00-a105-7b01-e001-omopcdm54005
        title: 'Lesson 5: OBSERVATION_PERIOD — Patient monitoring period'
        slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
        description: >-
          What is the meaning of OBSERVATION_PERIOD, why is this table required,
          how to determine start/end date from source data, how it affects
          incidence/prevalence calculations, and ETL conventions.
        duration_minutes: 45
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019f1a00-a106-7b01-e001-omopcdm54006
        title: 'Lesson 6: VISIT_OCCURRENCE & VISIT_DETAIL — Visits & Details'
        slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
        description: >-
          Visit types (Inpatient, Outpatient, ER, Telehealth), VISIT_OCCURRENCE,
          VISIT_DETAIL structures for details in a visit,
          admitted_from/discharged_to, and Visit-Event relationships in the OMOP
          model.
        duration_minutes: 60
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'Part 3: Key clinical events'
    description: 'CONDITION_OCCURRENCE, DRUG_EXPOSURE, PROCEDURE_OCCURRENCE, MEASUREMENT'
    sort_order: 3
    lessons:
      - id: 019f1a00-a107-7b01-e001-omopcdm54007
        title: 'Lesson 7: CONDITION_OCCURRENCE — Diagnosis & Pathology'
        slug: bai-7-condition-occurrence-chan-doan-benh-ly
        description: >-
          Record diagnosis, symptoms, pathological signs, condition_concept_id
          vs source_value, condition_status (admitting/primary/secondary), link
          to Visit and Provider, distinguish from OBSERVATION table.
        duration_minutes: 60
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019f1a00-a108-7b01-e001-omopcdm54008
        title: 'Lesson 8: DRUG_EXPOSURE — Medicine & Treatment'
        slug: bai-8-drug-exposure-thuoc-dieu-tri
        description: >-
          Record prescription, dispensing, drug administration, vaccine,
          drug_concept_id (RxNorm), quantity/days_supply/refills,
          route_concept_id, sig, DRUG_STRENGTH link, and ETL conventions for
          Vietnamese drug data.
        duration_minutes: 75
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019f1a00-a109-7b01-e001-omopcdm54009
        title: 'Lesson 9: PROCEDURE_OCCURRENCE — Procedures & Surgery'
        slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
        description: >-
          Record activities performed by medical staff, procedure_concept_id
          (SNOMED, ​​CPT4, ICD-10-PCS), modifier_concept_id, quantity,
          differentiate Procedure vs Measurement vs Drug, and handle duplicate
          records.
        duration_minutes: 60
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019f1a00-a110-7b01-e001-omopcdm54010
        title: 'Lesson 10: MEASUREMENT — Testing & Measurement'
        slug: bai-10-measurement-xet-nghiem-do-luong
        description: >-
          Record test results, vital signs, indexes,
          value_as_number/value_as_concept_id, unit_concept_id,
          operator_concept_id (>, <, =), range_low/range_high,
          measurement_event_id (new CDM 5.4), and differentiate Measurement vs
          Observation.
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Part 4: Expanded clinical table'
    description: 'OBSERVATION, DEVICE_EXPOSURE, NOTE, SPECIMEN, DEATH, EPISODE'
    sort_order: 4
    lessons:
      - id: 019f1a00-a111-7b01-e001-omopcdm54011
        title: 'Lesson 11: OBSERVATION — Clinical observations, history & lifestyle'
        slug: bai-11-observation-quan-sat-lam-sang-tien-su-loi-song
        description: >-
          "catch-all" table for data not belonging to other domains, family
          history, medical history, lifestyle (smoking, alcohol),
          value_as_number/string/concept, qualifier_concept_id,
          observation_event_id (new CDM 5.4).
        duration_minutes: 60
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019f1a00-a112-7b01-e001-omopcdm54012
        title: >-
          Lesson 12: DEVICE_EXPOSURE, SPECIMEN & NOTES — Equipment, Specimens &
          Notes
        slug: bai-12-device-exposure-specimen-note-thiet-bi-mau-vat-ghi-chu
        description: >-
          DEVICE_EXPOSURE (stent, pacemaker, UDI), new production_id CDM 5.4,
          SPECIMEN (blood sample, tissue), anatomic_site_concept_id, NOTE
          (free-text, HL7/LOINC CDO), NOTE_NLP (NLP output), encoding and
          language concepts.
        duration_minutes: 60
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019f1a00-a113-7b01-e001-omopcdm54013
        title: 'Lesson 13: DEATH, EPISODE & EPISODE_EVENT — Death & Disease Stage'
        slug: bai-13-death-episode-episode-event-tu-vong-giai-doan-benh
        description: >-
          DEATH table (cause_concept_id, death_type_concept_id), EPISODE (new
          table CDM 5.4 — disease episodes, treatment lines), EPISODE_EVENT
          (link events with episodes), FACT_RELATIONSHIP (relationship between
          facts in CDM).
        duration_minutes: 60
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'Part 5: Standardized Vocabularies'
    description: 'Concept system, Vocabulary hierarchy, Relationships, Mapping'
    sort_order: 5
    lessons:
      - id: 019f1a00-a114-7b01-e001-omopcdm54014
        title: >-
          Lesson 14: Vocabulary System — CONCEPT, VOCABULARY, DOMAIN &
          CONCEPT_CLASS
        slug: bai-14-he-thong-vocabulary-concept-vocabulary-domain-concept-class
        description: >-
          How OMOP organizes over 10 million Concepts from 100+ vocabularies
          (SNOMED CT, ICD-10, RxNorm, LOINC, ATC), detailed CONCEPT table,
          VOCABULARY, DOMAIN, CONCEPT_CLASS, standard_concept flag,
          valid_start_date/valid_end_date, and CONCEPT_SYNONYM.
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019f1a00-a115-7b01-e001-omopcdm54015
        title: >-
          Lesson 15: CONCEPT_RELATIONSHIP & CONCEPT_ANCESTOR — Relationships &
          Genealogy
        slug: bai-15-concept-relationship-concept-ancestor-moi-quan-he-pha-he
        description: >-
          Relationship types (Maps to, Is a, Has component),
          CONCEPT_RELATIONSHIP table, RELATIONSHIP table, CONCEPT_ANCESTOR
          (hierarchical rollup), min/max_levels_of_separation, application in
          cohort definition and analysis.
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019f1a00-a116-7b01-e001-omopcdm54016
        title: >-
          Lesson 16: SOURCE_TO_CONCEPT_MAP & DRUG_STRENGTH — Mapping & Drug
          Content
        slug: bai-16-source-to-concept-map-drug-strength-mapping-ham-luong-thuoc
        description: >-
          SOURCE_TO_CONCEPT_MAP for custom mappings (ICD-10 VN, domestic drugs),
          DRUG_STRENGTH (amount_value, numerator/denominator for concentration),
          box_size, Usagi tool for mapping, and best practices.
        duration_minutes: 60
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'Part 6: Health System, Economics & Derived Tables'
    description: 'LOCATION, CARE_SITE, PROVIDER, PAYER_PLAN_PERIOD, COST, Era tables'
    sort_order: 6
    lessons:
      - id: 019f1a00-a117-7b01-e001-omopcdm54017
        title: 'Lesson 17: Health System — LOCATION, CARE_SITE & PROVIDER'
        slug: bai-17-health-system-location-care-site-provider
        description: >-
          Table LOCATION (address, country_concept_id, latitude/longitude),
          CARE_SITE (healthcare organization, place_of_service), PROVIDER
          (healthcare worker, specialty_concept_id, NPI), hierarchical
          relationship and FACT_RELATIONSHIP.
        duration_minutes: 45
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019f1a00-a118-7b01-e001-omopcdm54018
        title: 'Lesson 18: Health Economics — PAYER_PLAN_PERIOD & COST'
        slug: bai-18-health-economics-payer-plan-period-cost
        description: >-
          PAYER_PLAN_PERIOD (health insurance, payer/plan/sponsor), COST table
          (cost associated with every clinical event),
          total_charge/total_paid/paid_by_payer, DRG, revenue_code, and
          application in Health Economics & Outcomes Research (HEOR).
        duration_minutes: 60
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019f1a00-a119-7b01-e001-omopcdm54019
        title: 'Lesson 19: Derived Elements — DRUG_ERA, DOSE_ERA & CONDITION_ERA'
        slug: bai-19-derived-elements-drug-era-dose-era-condition-era
        description: >-
          Era tables are calculated from the original data, DRUG_ERA (group drug
          exposures by ingredient, persistence window 30 days), DOSE_ERA (stable
          dose), CONDITION_ERA (group conditions, gap 30 days), SQL scripts to
          create era, and analysis application.
        duration_minutes: 60
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: 'Part 7: Metadata, Cohort & Practice Summary'
    description: 'CDM_SOURCE, METADATA, COHORT, summary of the entire CDM and next step'
    sort_order: 7
    lessons:
      - id: 019f1a00-a120-7b01-e001-omopcdm54020
        title: 'Lesson 20: CDM_SOURCE, METADATA, COHORT & Summary — Next step'
        slug: bai-20-cdm-source-metadata-cohort-tong-ket-buoc-tiep-theo
        description: >-
          CDM_SOURCE (metadata about dataset), METADATA table, COHORT &
          COHORT_DEFINITION (patient subgroups), summary of all 37 OMOP CDM 5.4
          tables, next roadmap (ETL, ATLAS, ACHILLES, HADES), and learning
          resources.
        duration_minutes: 60
        is_free: true
        sort_order: 20
        video_url: null
locale: en
---

## Introducing the Series

**OMOP CDM 5.4 for Beginners** is the most comprehensive series in Vietnamese, helping you understand **OMOP Common Data Model version 5.4** — the health data standard used by more than **400 organizations in 80 countries**.

### Problem

Medical data at each hospital is stored in its own way:

```
Bệnh viện A (HIS)          Bệnh viện B (EMR)          Bảo hiểm Y tế XH
├── patients               ├── nguoi_benh              ├── ho_so_kcb
├── diagnoses (ICD-10)     ├── chan_doan (ICD-10-VN)   ├── ma_benh
├── prescriptions           ├── don_thuoc               ├── thuoc_bh
└── lab_results            └── ket_qua_xn             └── xet_nghiem
    (khác format)              (khác format)               (khác format)
```

→ **Cannot be compared, aggregated, or studied across hospitals.**

### Solution: OMOP CDM

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

### What will you learn?

| Part | Content | Article |
|-----|----------|-----|
| 1. Overview | OMOP CDM, architecture, Concept | Lesson 1-3 |
| 2. Person & Visit | PERSON, OBSERVATION_PERIOD, VISIT | Lesson 4-6 |
| 3. Clinical events | Condition, Drug, Procedure, Measurement | Lesson 7-10 |
| 4. Expansion Table | Observation, Device, Note, Death, Episode | Lesson 11-13 |
| 5. Vocabularies | Concept systems, Relationships, Mapping | Lesson 14-16 |
| 6. Systems & Economics | Location, Provider, Cost, Era tables | Lesson 17-19 |
| 7. Summary | Metadata, Cohort, roadmap | Lesson 20 |

### Prerequisites

- Basic understanding of databases (know tables, columns, rows)
- Basic SQL (SELECT, JOIN, WHERE) — useful but not required
- No need for in-depth medical knowledge — every concept is explained

### Different from OHDSI & OMOP CDM series

This series focuses **100% on the OMOP CDM 5.4 data structure** — explaining each table, each field, with specific examples. If you want to learn more tools (ATLAS, WebAPI, ACHILLES, ETL), check out the series [OHDSI & OMOP CDM — Comprehensive Healthcare Data Analysis](/series/ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien).
