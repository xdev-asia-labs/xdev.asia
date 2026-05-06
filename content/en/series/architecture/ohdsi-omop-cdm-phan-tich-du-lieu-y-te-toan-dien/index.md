---
id: 019e0b20-b200-7a01-e001-f1a7f8000001
title: OHDSI & OMOP CDM — Comprehensive Healthcare Data Analysis
slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
description: >-
  Comprehensive series on the OHDSI (Observational Health Data Sciences and
  Informatics) ecosystem and OMOP Common Data Model — from platform overview,
  Standardized Vocabularies (Athena), medical data ETL (WhiteRabbit,
  Rabbit-in-a-Hat, Usagi), OMOP CDM implementation on PostgreSQL, WebAPI and
  ATLAS installation, to clinical data analysis (Cohort Definitions,
  Characterization, Incidence Rates, Population-Level Estimation, Patient-Level
  Prediction), data quality assessment (ACHILLES, Data Quality Dashboard), HADES
  R packages for observational studies, and OHDSI stack deployment on
  Docker/Kubernetes for multicenter Network Studies.
featured_image: uploads/2026/03/ohdsi-omop-cdm-series-banner.png
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
  name: System architecture
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
    title: 'Part 1: Overview of OHDSI & OMOP CDM'
    description: >-
      Introducing the OHDSI ecosystem, OMOP CDM architecture, and Standardized
      Vocabularies
    sort_order: 1
    lessons:
      - id: 019e0b20-b201-7a01-e001-f1a7f8000001
        title: 'Lesson 1: What is OHDSI? — Overview of ecosystem and vision'
        slug: bai-1-ohdsi-la-gi-tong-quan-he-sinh-thai-va-tam-nhin
        description: >-
          Introducing OHDSI (Observational Health Data Sciences and
          Informatics), its goals and vision, the overall architecture of the
          tool ecosystem (Atlas, WebAPI, Athena, Usagi, ACHILLES, HADES), and
          the role of OMOP CDM in global health data standardization.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0b20-b202-7a01-e001-f1a7f8000002
        title: 'Lesson 2: OMOP Common Data Model — Structure, principles & Domain'
        slug: bai-2-omop-cdm-cau-truc-nguyen-ly-domain
        description: >-
          OMOP CDM v5.4 architecture, table groups (Clinical Data, Health
          System, Health Economics, Standardized Vocabularies, Metadata),
          relationships between domains (Condition, Drug, Procedure,
          Measurement, Observation), Person-Visit-Event model and design
          principles.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0b20-b203-7a01-e001-f1a7f8000003
        title: 'Lesson 3: Athena — Look up & Manage Standardized Vocabularies'
        slug: bai-3-athena-tra-cuu-quan-ly-standardized-vocabularies
        description: >-
          Use Athena to look up Standard Concepts, understand Vocabulary
          hierarchy (ICD-10, SNOMED CT, RxNorm, LOINC, ATC), concept
          relationships, how to load and import vocabularies into OMOP CDM
          database, mapping between source concepts and standard concepts.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: ETL & Data Normalization'
    description: >-
      ETL process from source data to OMOP CDM — WhiteRabbit, Rabbit-in-a-Hat,
      Usagi
    sort_order: 2
    lessons:
      - id: 019e0b20-b204-7a01-e001-f1a7f8000004
        title: >-
          Lesson 4: WhiteRabbit & Rabbit-in-a-Hat — Source Data Survey & ETL
          Design
        slug: bai-4-whiterabbit-rabbit-in-a-hat-khao-sat-du-lieu-thiet-ke-etl
        description: >-
          Install and use WhiteRabbit to scan source data, analyze scan reports,
          use Rabbit-in-a-Hat to design table-to-table and field-to-field
          mapping, create ETL specification documents, and standard workflow for
          the ETL team.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0b20-b205-7a01-e001-f1a7f8000005
        title: 'Lesson 5: Usagi — Mapping source code to OMOP Standard Concepts'
        slug: bai-5-usagi-mapping-ma-nguon-sang-omop-standard-concepts
        description: >-
          Install Usagi, import source codes, use term similarity algorithm to
          find mapping candidates, review and approve mappings manually, handle
          special cases (ICD-10 Vietnam, domestic drugs), export mapping file
          for ETL pipeline.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0b20-b206-7a01-e001-f1a7f8000006
        title: 'Lesson 6: Building ETL Pipeline — From source data to OMOP CDM'
        slug: bai-6-xay-dung-etl-pipeline-tu-du-lieu-nguon-sang-omop-cdm
        description: >-
          Design and implement complete ETL pipeline, handle data transformation
          (date formats, unit conversion, code mapping), load data into OMOP CDM
          tables, error handling and data validation, incremental ETL strategy,
          ETL framework recommendations (Python, SQL, Talend).
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'Part 3: Deploying OHDSI Platform'
    description: 'Install OMOP CDM database, WebAPI backend, and ATLAS frontend'
    sort_order: 3
    lessons:
      - id: 019e0b20-b207-7a01-e001-f1a7f8000007
        title: 'Lesson 7: Install OMOP CDM Database on PostgreSQL'
        slug: bai-7-cai-dat-omop-cdm-database-tren-postgresql
        description: >-
          Create OMOP CDM schema on PostgreSQL, import DDL scripts, load
          Standardized Vocabularies from Athena, create indexes and constraints,
          configure performance tuning for OMOP queries, and script automation
          for the setup process.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0b20-b208-7a01-e001-f1a7f8000008
        title: 'Lesson 8: WebAPI — Installation, Configuration & REST API'
        slug: bai-8-webapi-cai-dat-cau-hinh-rest-api
        description: >-
          OHDSI WebAPI (Spring Boot) architecture, installation from source or
          Docker, CDM database connection configuration, WebAPI REST endpoints
          (source, vocabulary, cohortdefinition, ir, estimation),
          authentication/authorization, and multi-source configuration.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0b20-b209-7a01-e001-f1a7f8000009
        title: >-
          Lesson 9: ATLAS — Installation, WebAPI Integration & Overview
          Interface
        slug: bai-9-atlas-cai-dat-tich-hop-webapi-giao-dien-tong-quan
        description: >-
          Install ATLAS web application, configure WebAPI connection, interface
          overview (Data Sources, Concept Sets, Cohort Definitions,
          Characterizations, Incidence Rates, Estimation, Prediction), Security
          configuration (OAuth, LDAP), and common troubleshooting.
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 'Part 4: Data Analysis with ATLAS'
    description: >-
      Cohort Definitions, Characterization, Incidence Rates, Estimation and
      Prediction
    sort_order: 4
    lessons:
      - id: 019e0b20-b210-7a01-e001-f1a7f8000010
        title: 'Lesson 10: ATLAS — Concept Sets & Cohort Definitions'
        slug: bai-10-atlas-concept-sets-cohort-definitions
        description: >-
          Create Concept Sets (include/exclude descendants, mapped), design
          Cohort Definitions (initial events, inclusion criteria, censoring, era
          logic), best practices for cohort design, generate SQL and execute on
          CDM database.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e0b20-b211-7a01-e001-f1a7f8000011
        title: 'Lesson 11: ATLAS — Characterization, Incidence Rates & Pathways'
        slug: bai-11-atlas-characterization-incidence-rates-pathways
        description: >-
          Cohort Characterization (demographics, conditions, drugs,
          measurements), Incidence Rate analysis (time-at-risk, target/outcome
          cohort), Treatment Pathways visualization, export results and share
          via OHDSI network.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0b20-b212-7a01-e001-f1a7f8000012
        title: >-
          Lesson 12: ATLAS — Population-Level Estimation & Patient-Level
          Prediction
        slug: bai-12-atlas-population-level-estimation-patient-level-prediction
        description: >-
          Population-Level Effect Estimation (comparative cohort analysis,
          propensity score matching, negative control outcomes), Patient-Level
          Prediction (predictive model development, LASSO, gradient boosting,
          model evaluation ROC/AUC), and generate R study packages.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'Part 5: Data Quality & Advanced Analytics'
    description: 'ACHILLES, Data Quality Dashboard, and HADES R packages'
    sort_order: 5
    lessons:
      - id: 019e0b20-b213-7a01-e001-f1a7f8000013
        title: 'Lesson 13: ACHILLES — Data Characterization & Source Profiling'
        slug: bai-13-achilles-data-characterization-source-profiling
        description: >-
          Install and run ACHILLES on CDM database, analyze reports (person,
          visit, condition, drug, measurement distributions), ACHILLES Heel —
          detect data quality issues, integrate results into ATLAS Data Sources.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0b20-b214-7a01-e001-f1a7f8000014
        title: 'Lesson 14: Data Quality Dashboard — Evaluate CDM data quality'
        slug: bai-14-data-quality-dashboard-danh-gia-chat-luong-du-lieu-cdm
        description: >-
          Install Data Quality Dashboard, run 1,500+ checks according to Kahn
          Framework (Conformance, Completeness, Plausibility), analyze PASS/FAIL
          results, threshold configuration, prioritize data quality issues, and
          continuously improve data quality process.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0b20-b215-7a01-e001-f1a7f8000015
        title: 'Lesson 15: HADES — R Packages for Observational Studies'
        slug: bai-15-hades-r-packages-cho-nghien-cuu-quan-sat
        description: >-
          Overview of HADES ecosystem (CohortGenerator, FeatureExtraction,
          CohortMethod, PatientLevelPrediction, SelfControlledCaseSeries),
          install and use main packages, run complete studies from R, Strategus
          — execution engine for reproducible studies.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 'Part 6: Production & Network Studies'
    description: Deployment of OHDSI stack production and multi-center research
    sort_order: 6
    lessons:
      - id: 019e0b20-b216-7a01-e001-f1a7f8000016
        title: 'Lesson 16: Deploying OHDSI Stack on Docker & Kubernetes'
        slug: bai-16-trien-khai-ohdsi-stack-tren-docker-kubernetes
        description: >-
          Docker Compose for OHDSI stack (PostgreSQL + WebAPI + ATLAS),
          Kubernetes deployment (Helm charts, volumes, ingress), backup &
          restore strategy, monitoring & alerting, performance tuning for
          production workloads.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0b20-b217-7a01-e001-f1a7f8000017
        title: 'Lesson 17: Network Studies & Best Practices — Multicenter research'
        slug: bai-17-network-studies-best-practices-nghien-cuu-da-trung-tam
        description: >-
          OHDSI Network Study workflow, distributed research (each site runs
          analysis locally, only sharing aggregate results), study package
          development, data governance and privacy, OHDSI community
          participation, and OHDSI implementation roadmap in Vietnam.
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
locale: en
---

## Introducing the course

**OHDSI & OMOP CDM** is a comprehensive course on the world's largest observational health data analytics ecosystem.

### Why OHDSI?

Medical data at each hospital and health system is stored in different formats — making multicenter research nearly impossible. **OHDSI** (pronounced: "Odyssey") solves this problem by normalizing data into the **OMOP Common Data Model** and providing a unified set of analytics tools.

### What will you learn?

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

### Prerequisites

- Basic SQL (SELECT, JOIN, GROUP BY)
- Basic understanding of databases (PostgreSQL preferred)
- Docker basics (docker run, docker-compose)
- Basic R (for HADES section) — not required
- Does not require in-depth medical knowledge
