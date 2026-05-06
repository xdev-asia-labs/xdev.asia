---
id: 019f1a00-a100-7b01-e001-omopcdm54001
title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
description: >-
  初心者向けに OMOP Common Data Model バージョン 5.4
  を学習するための最も包括的なシリーズ。医療データの標準化の基本概念、個人中心のアーキテクチャ、37 のデータ テーブル
  (臨床データ、医療システム、医療経済、標準化語彙、派生要素、メタデータ) から、概念/語彙システム、ETL プロセス、OHDSI エコシステム
  ツールまで。各レッスンには、ベトナムの病院での実例、直感的な図、実践的な SQL 演習が含まれています。
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
  name: システムアーキテクチャ
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
    title: 'パート 1: 概要と背景'
    description: OMOP CDMとは何ですか、なぜ医療データの標準化が必要なのか、全体のアーキテクチャとコンセプトシステム
    sort_order: 1
    lessons:
      - id: 019f1a00-a101-7b01-e001-omopcdm54001
        title: 'レッスン 1: OMOP CDM とは何ですか? ――なぜ医療データの標準化が必要なのでしょうか？'
        slug: bai-1-omop-cdm-la-gi-tai-sao-can-chuan-hoa-du-lieu-y-te
        description: >-
          OMOP Common Data Model、OMOP プロジェクトから OHDSI
          コミュニティまでの歴史、断片化された医療データの問題、臨床研究におけるデータ標準化の重要性について紹介します。
        duration_minutes: 45
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019f1a00-a102-7b01-e001-omopcdm54002
        title: 'レッスン 2: OMOP CDM 5.4 の全体的なアーキテクチャ — テーブル グループと設計原則'
        slug: bai-2-kien-truc-tong-the-omop-cdm-5-4-nhom-bang-nguyen-ly-thiet-ke
        description: >-
          OMOP CDM 5.4 の 37 のテーブル、6 つの主要なテーブル グループ
          (臨床データ、医療システム、医療経済、標準化された語彙、派生要素、メタデータ)、個人中心モデル、および中核となる設計原則の概要。
        duration_minutes: 60
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019f1a00-a103-7b01-e001-omopcdm54003
        title: 'レッスン 3: 概念を理解する — OMOP CDM の核心'
        slug: bai-3-hieu-concept-trai-tim-cua-omop-cdm
        description: >-
          コンセプトとは何か、標準コンセプトとソースコンセプトと分類コンセプト、コンセプトIDとソース値とソースコンセプトID、ドメイン、語彙、コンセプトクラス、およびAthenaの検索方法。
        duration_minutes: 60
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: 人物と訪問 — データ プラットフォーム'
    description: PERSON、OBSERVATION_PERIOD、VISIT_OCCURRENCE、および VISIT_DETAIL テーブル
    sort_order: 2
    lessons:
      - id: 019f1a00-a104-7b01-e001-omopcdm54004
        title: 'レッスン 4: PERSON テーブル — 患者 ID 管理'
        slug: bai-4-bang-person-quan-ly-danh-tinh-benh-nhan
        description: >-
          PERSON テーブル構造、必須フィールド
          (person_id、gender_concept_id、year_of_birth)、人口統計データ、LOCATION および
          PROVIDER とのリンク、ベトナム データの ETL 規約。
        duration_minutes: 60
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019f1a00-a105-7b01-e001-omopcdm54005
        title: 'レッスン 5: OBSERVATION_PERIOD — 患者モニタリング期間'
        slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
        description: >-
          OBSERVATION_PERIOD の意味、このテーブルが必要な理由、ソース
          データから開始日/終了日を決定する方法、発生率/有病率の計算、ETL 規則に与える影響。
        duration_minutes: 45
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019f1a00-a106-7b01-e001-omopcdm54006
        title: 'レッスン 6: VISIT_OCCURRENCE と VISIT_DETAIL — 訪問と詳細'
        slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
        description: >-
          訪問タイプ (入院患者、外来患者、ER、遠隔医療)、訪問の詳細のための VISIT_OCCURRENCE、VISIT_DETAIL
          構造、OMOP モデルの入院_from/退院_to、訪問とイベントの関係。
        duration_minutes: 60
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'パート 3: 主要な臨床事象'
    description: CONDITION_OCCURRENCE、DRUG_EXPOSURE、PROCEDURE_OCCURRENCE、MEASUREMENT
    sort_order: 3
    lessons:
      - id: 019f1a00-a107-7b01-e001-omopcdm54007
        title: 'レッスン 7: CONDITION_OCCURRENCE — 診断と病理学'
        slug: bai-7-condition-occurrence-chan-doan-benh-ly
        description: >-
          診断、症状、病理学的兆候、condition_concept_id と source_value、condition_status
          (入院中/一次/二次)、訪問およびプロバイダーへのリンクを記録し、OBSERVATION テーブルと区別します。
        duration_minutes: 60
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019f1a00-a108-7b01-e001-omopcdm54008
        title: 'レッスン 8: DRUG_EXPOSURE — 薬と治療'
        slug: bai-8-drug-exposure-thuoc-dieu-tri
        description: >-
          処方箋、調剤、薬剤投与、ワクチン、drug_concept_id
          (RxNorm)、quantity/days_supply/refills、route_concept_id、sig、DRUG_STRENGTH
          リンク、およびベトナムの医薬品データの ETL 規約を記録します。
        duration_minutes: 75
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019f1a00-a109-7b01-e001-omopcdm54009
        title: 'レッスン 9: PROCEDURE_OCCURRENCE — 手順と手術'
        slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
        description: >-
          医療スタッフによって実行された活動、procedure_concept_id
          (SNOMED、CPT4、ICD-10-PCS)、modifier_concept_id、数量を記録し、手順、測定、薬剤を区別し、重複レコードを処理します。
        duration_minutes: 60
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019f1a00-a110-7b01-e001-omopcdm54010
        title: 'レッスン 10: 測定 — テストと測定'
        slug: bai-10-measurement-xet-nghiem-do-luong
        description: >-
          テスト結果、バイタルサイン、インデックス、value_as_number/value_as_concept_id、unit_concept_id、operator_concept_id
          (>、<、=)、range_low/range_high、measurement_event_id (新しい CDM 5.4)
          を記録し、測定と観察を区別します。
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: 拡張された臨床テーブル'
    description: 観察、デバイス_露出、メモ、標本、死、エピソード
    sort_order: 4
    lessons:
      - id: 019f1a00-a111-7b01-e001-omopcdm54011
        title: 'レッスン 11: 観察 — 臨床観察、歴史、ライフスタイル'
        slug: bai-11-observation-quan-sat-lam-sang-tien-su-loi-song
        description: >-
          他のドメインに属さないデータ、家族歴、病歴、ライフスタイル
          (喫煙、アルコール)、value_as_number/string/concept、qualifier_concept_id、observation_event_id
          の「キャッチオール」テーブル (新しい CDM 5.4)。
        duration_minutes: 60
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019f1a00-a112-7b01-e001-omopcdm54012
        title: 'レッスン 12: DEVICE_EXPOSURE、標本およびメモ — 機器、標本およびメモ'
        slug: bai-12-device-exposure-specimen-note-thiet-bi-mau-vat-ghi-chu
        description: >-
          DEVICE_EXPOSURE (ステント、ペースメーカー、UDI)、新しいproduction_id CDM 5.4、SPECIMEN
          (血液サンプル、組織)、anatomic_site_concept_id、NOTE (フリーテキスト、HL7/LOINC
          CDO)、NOTE_NLP (NLP 出力)、エンコーディングおよび言語の概念。
        duration_minutes: 60
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019f1a00-a113-7b01-e001-omopcdm54013
        title: 'レッスン 13: DEATH、EPISODE、EPISODE_EVENT — 死と病気の段階'
        slug: bai-13-death-episode-episode-event-tu-vong-giai-doan-benh
        description: >-
          DEATH テーブル (cause_concept_id、death_type_concept_id)、EPISODE (新しいテーブル
          CDM 5.4 — 病気のエピソード、治療ライン)、EPISODE_EVENT
          (イベントとエピソードのリンク)、FACT_RELATIONSHIP (CDM 内の事実間の関係)。
        duration_minutes: 60
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'パート 5: 標準化された語彙'
    description: 概念体系、語彙階層、関係性、マッピング
    sort_order: 5
    lessons:
      - id: 019f1a00-a114-7b01-e001-omopcdm54014
        title: 'レッスン 14: 語彙システム — コンセプト、語彙、ドメイン、コンセプトクラス'
        slug: bai-14-he-thong-vocabulary-concept-vocabulary-domain-concept-class
        description: >-
          OMOP が 100 以上の語彙 (SNOMED CT、ICD-10、RxNorm、LOINC、ATC)、詳細な CONCEPT
          テーブル、VOCABULARY、DOMAIN、CONCEPT_CLASS、standard_concept
          フラグ、valid_start_date/valid_end_date、および CONCEPT_SYNONYM からの 1,000
          万を超えるコンセプトをどのように整理するか。
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019f1a00-a115-7b01-e001-omopcdm54015
        title: 'レッスン 15: CONCEPT_RELATIONSHIP と CONCEPT_ANCESTOR — 関係と系図'
        slug: bai-15-concept-relationship-concept-ancestor-moi-quan-he-pha-he
        description: >-
          関係タイプ (マップ先、コンポーネントあり、コンポーネントあり)、CONCEPT_RELATIONSHIP
          テーブル、RELATIONSHIP テーブル、CONCEPT_ANCESTOR
          (階層ロールアップ)、min/max_levels_of_separation、コホート定義および分析でのアプリケーション。
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019f1a00-a116-7b01-e001-omopcdm54016
        title: 'レッスン 16: SOURCE_TO_CONCEPT_MAP と DRUG_STRENGTH — マッピングと薬物含有量'
        slug: bai-16-source-to-concept-map-drug-strength-mapping-ham-luong-thuoc
        description: >-
          カスタム マッピング用の SOURCE_TO_CONCEPT_MAP (ICD-10 VN、国内医薬品)、DRUG_STRENGTH
          (amount_value、濃度の分子/分母)、box_size、マッピング用の Usagi ツール、およびベスト プラクティス。
        duration_minutes: 60
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'パート 6: 医療システム、経済学、および派生テーブル'
    description: LOCATION、CARE_SITE、PROVIDER、PAYER_PLAN_PERIOD、COST、Era テーブル
    sort_order: 6
    lessons:
      - id: 019f1a00-a117-7b01-e001-omopcdm54017
        title: 'レッスン 17: 医療システム — LOCATION、CARE_SITE、および PROVIDER'
        slug: bai-17-health-system-location-care-site-provider
        description: >-
          テーブル LOCATION (住所、country_concept_id、緯度/経度)、CARE_SITE
          (医療機関、place_of_service)、PROVIDER
          (医療従事者、speciality_concept_id、NPI)、階層関係、および FACT_RELATIONSHIP。
        duration_minutes: 45
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019f1a00-a118-7b01-e001-omopcdm54018
        title: 'レッスン 18: 医療経済 — PAYER_PLAN_PERIOD と COST'
        slug: bai-18-health-economics-payer-plan-period-cost
        description: >-
          PAYER_PLAN_PERIOD (健康保険、支払者/プラン/スポンサー)、COST テーブル
          (すべての臨床イベントに関連するコスト)、total_charge/total_paid/paid_by_payer、DRG、revenue_code、および医療経済学および結果研究
          (HEOR) でのアプリケーション。
        duration_minutes: 60
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019f1a00-a119-7b01-e001-omopcdm54019
        title: 'レッスン 19: 派生要素 — DRUG_ERA、DOSE_ERA、CONDITION_ERA'
        slug: bai-19-derived-elements-drug-era-dose-era-condition-era
        description: >-
          Era テーブルは、元のデータ、DRUG_ERA (成分ごとのグループ薬物曝露、持続期間 30 日)、DOSE_ERA
          (安定用量)、CONDITION_ERA (グループ条件、ギャップ 30 日)、ERA を作成する SQL
          スクリプト、および分析アプリケーションから計算されます。
        duration_minutes: 60
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: 'パート 7: メタデータ、コホート、実践の概要'
    description: CDM_SOURCE、METADATA、COHORT、CDM 全体の概要と次のステップ
    sort_order: 7
    lessons:
      - id: 019f1a00-a120-7b01-e001-omopcdm54020
        title: 'レッスン 20: CDM_SOURCE、METADATA、COHORT、および要約 — 次のステップ'
        slug: bai-20-cdm-source-metadata-cohort-tong-ket-buoc-tiep-theo
        description: >-
          CDM_SOURCE (データセットに関するメタデータ)、METADATA テーブル、COHORT および
          COHORT_DEFINITION (患者サブグループ)、37 個の OMOP CDM 5.4 テーブルすべての概要、次のロードマップ
          (ETL、ATLAS、ACHILLES、HADES)、および学習リソース。
        duration_minutes: 60
        is_free: true
        sort_order: 20
        video_url: null
locale: ja
---

## シリーズのご紹介

**OMOP CDM 5.4 for Beginners** はベトナム語で最も包括的なシリーズであり、**80 か国の 400 以上の組織**で使用されている医療データ標準である **OMOP Common Data Model バージョン 5.4** を理解するのに役立ちます。

### 問題

各病院の医療データは独自の方法で保存されます。

```
Bệnh viện A (HIS)          Bệnh viện B (EMR)          Bảo hiểm Y tế XH
├── patients               ├── nguoi_benh              ├── ho_so_kcb
├── diagnoses (ICD-10)     ├── chan_doan (ICD-10-VN)   ├── ma_benh
├── prescriptions           ├── don_thuoc               ├── thuoc_bh
└── lab_results            └── ket_qua_xn             └── xet_nghiem
    (khác format)              (khác format)               (khác format)
```

→ **病院間での比較、集計、検討はできません。**

### ソリューション: OMOP CDM

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

### 何を学びますか?

|パート |コンテンツ |記事 |
|-----|----------|-----|
| 1. 概要 | OMOP CDM、アーキテクチャ、コンセプト |レッスン 1-3 |
| 2. 人物と訪問 |人物、観察期間、訪問 |レッスン 4-6 |
| 3. 臨床事象 |症状、薬剤、処置、測定 |レッスン 7-10 |
| 4. 展開表 |観察、装置、メモ、死、エピソード |レッスン 11-13 |
| 5. 語彙 |概念システム、関係、マッピング |レッスン 14-16 |
| 6. システムと経済 |場所、プロバイダー、コスト、時代のテーブル |レッスン 17-19 |
| 7. まとめ |メタデータ、コホート、ロードマップ |レッスン 20 |

### 前提条件

- データベースの基本的な理解 (テーブル、列、行についての知識)
- 基本的な SQL (SELECT、JOIN、WHERE) — 便利ですが必須ではありません
- 深い医学知識は必要ありません - すべての概念が説明されています

### OHDSI & OMOP CDM シリーズとの違い

このシリーズでは、**OMOP CDM 5.4 データ構造**に 100% 焦点を当て、各テーブル、各フィールドを具体的な例とともに説明します。さらに多くのツール (ATLAS、WebAPI、ACHILLES、ETL) を学びたい場合は、シリーズをチェックしてください。 [OHDSI および OMOP CDM — 包括的な医療データ分析](/series/ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien)。
