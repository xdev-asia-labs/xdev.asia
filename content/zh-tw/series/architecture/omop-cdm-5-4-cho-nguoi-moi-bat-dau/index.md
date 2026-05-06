---
id: 019f1a00-a100-7b01-e001-omopcdm54001
title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
description: >-
  適合初學者學習 OMOP 通用資料模型 5.4
  版本的最全面的系列。從醫療資料標準化的基本概念、以人為中心的架構、37個資料表（臨床資料、衛生系統、健康經濟學、標準化詞彙、衍生元素、元資料），到概念/詞彙系統、ETL流程和OHDSI生態系統工具。每節課都有來自越南醫院的真實例子、直覺的圖表和
  SQL 實踐練習。
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
  name: 系統架構
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
    title: 第 1 部分：概述與背景
    description: 什麼是OMOP CDM，為什麼需要標準化醫療數據，整體架構和概念體系
    sort_order: 1
    lessons:
      - id: 019f1a00-a101-7b01-e001-omopcdm54001
        title: 第 1 課：什麼是 OMOP CDM？ — 為什麼需要標準化醫療數據？
        slug: bai-1-omop-cdm-la-gi-tai-sao-can-chuan-hoa-du-lieu-y-te
        description: 介紹 OMOP 通用資料模型、從 OMOP 計畫到 OHDSI 社群的歷史、醫療資料碎片化的問題以及資料標準化在臨床研究中的重要性。
        duration_minutes: 45
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019f1a00-a102-7b01-e001-omopcdm54002
        title: 第 2 課：OMOP CDM 5.4 的整體架構 — 表組與設計原則
        slug: bai-2-kien-truc-tong-the-omop-cdm-5-4-nhom-bang-nguyen-ly-thiet-ke
        description: >-
          OMOP CDM 5.4 中 37 個表格、6
          個主要表格組（臨床資料、健康系統、健康經濟學、標準化詞彙、衍生元素、元資料）、以人為中心的模型和核心設計原則的概述。
        duration_minutes: 60
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019f1a00-a103-7b01-e001-omopcdm54003
        title: 第 3 課：理解概念 — OMOP CDM 的核心
        slug: bai-3-hieu-concept-trai-tim-cua-omop-cdm
        description: >-
          什麼是概念、標準概念、來源概念、分類概念、concept_id、source_value、source_concept_id、網域、詞彙、概念類別以及如何在
          Athena 上尋找。
        duration_minutes: 60
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：人員與存取 — 資料平台
    description: PERSON、OBSERVATION_PERIOD、VISIT_OCCURRENCE 和 VISIT_DETAIL 表
    sort_order: 2
    lessons:
      - id: 019f1a00-a104-7b01-e001-omopcdm54004
        title: 第 4 課：PERSON 表 — 病人身分管理
        slug: bai-4-bang-person-quan-ly-danh-tinh-benh-nhan
        description: >-
          PERSON 表結構、必填欄位（person_id、gender_concept_id、year_of_birth）、人口統計資料、與
          LOCATION 和 PROVIDER 的連結、越南資料的 ETL 約定。
        duration_minutes: 60
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019f1a00-a105-7b01-e001-omopcdm54005
        title: 第 5 課：OBSERVATION_PERIOD — 病人監護期
        slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
        description: >-
          OBSERVATION_PERIOD 的含義是什麼、為什麼需要此表、如何從來源資料確定開始/結束日期、它如何影響發病率/盛行率計算以及
          ETL 約定。
        duration_minutes: 45
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019f1a00-a106-7b01-e001-omopcdm54006
        title: 第 6 課：VISIT_OCCURRENCE 和 VISIT_DETAIL — 訪問和詳細信息
        slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
        description: >-
          就診類型（住院、門診、急診室、遠距醫療）、VISIT_OCCURRENCE、VISIT_DETAIL
          結構（了解就診詳細資訊）、入院/出院以及 OMOP 模式中的就診事件關係。
        duration_minutes: 60
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 第 3 部分：關鍵臨床事件
    description: 情況發生、藥物暴露、過程發生、測量
    sort_order: 3
    lessons:
      - id: 019f1a00-a107-7b01-e001-omopcdm54007
        title: 第 7 課：CONDITION_OCCURRENCE — 診斷與病理學
        slug: bai-7-condition-occurrence-chan-doan-benh-ly
        description: >-
          記錄診斷、症狀、病理徵兆、condition_concept_id vs
          source_value、condition_status（入院/主要/次要），連結到就診和提供者，與觀察表區分。
        duration_minutes: 60
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019f1a00-a108-7b01-e001-omopcdm54008
        title: 第 8 課：DRUG_EXPOSURE — 藥物與治療
        slug: bai-8-drug-exposure-thuoc-dieu-tri
        description: >-
          記錄越南藥品資料的處方、配藥、給藥、疫苗、drug_concept_id
          (RxNorm)、數量/days_supply/refills、route_concept_id、sig、DRUG_STRENGTH 連結和
          ETL 約定。
        duration_minutes: 75
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019f1a00-a109-7b01-e001-omopcdm54009
        title: 第 9 課：PROCEDURE_OCCURRENCE — 程序與手術
        slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
        description: >-
          記錄醫務人員執行的活動、
          procedure_concept_id（SNOMED、CPT4、ICD-10-PCS）、modifier_concept_id、數量，區分程序、測量與藥物，並處理重複記錄。
        duration_minutes: 60
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019f1a00-a110-7b01-e001-omopcdm54010
        title: 第 10 課：測量 — 測驗與測量
        slug: bai-10-measurement-xet-nghiem-do-luong
        description: >-
          記錄測試結果、生命徵象、指數、value_as_number/value_as_concept_id、unit_concept_id、operator_concept_id
          (>、<、=)、range_low/range_high、measurement_event_id（新 CDM 5.4），並區分測量與觀察。
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：擴展臨床表
    description: 觀察、設備暴露、註釋、樣本、死亡、情節
    sort_order: 4
    lessons:
      - id: 019f1a00-a111-7b01-e001-omopcdm54011
        title: 第 11 課：觀察 — 臨床觀察、病史與生活方式
        slug: bai-11-observation-quan-sat-lam-sang-tien-su-loi-song
        description: >-
          「包羅萬象」表，用於不屬於其他領域的資料、家族史、病史、生活方式（吸煙、飲酒）、value_as_number/string/concept、qualifier_concept_id、observation_event_id（新
          CDM 5.4）。
        duration_minutes: 60
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019f1a00-a112-7b01-e001-omopcdm54012
        title: 第 12 課：DEVICE_EXPOSURE、樣本和註釋 — 設備、樣本和註釋
        slug: bai-12-device-exposure-specimen-note-thiet-bi-mau-vat-ghi-chu
        description: >-
          DEVICE_EXPOSURE（支架、心律調節器、UDI）、新的 production_id CDM
          5.4、SPECIMEN（血液樣本、組織）、anatmic_site_concept_id、NOTE（自由文字、HL7/LOINC
          CDO）、NOTE_NLP（NLP 輸出）、編碼和語言概念。
        duration_minutes: 60
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019f1a00-a113-7b01-e001-omopcdm54013
        title: 第 13 課：DEATH、EPISODE 和 EPISODE_EVENT — 死亡與疾病階段
        slug: bai-13-death-episode-episode-event-tu-vong-giai-doan-benh
        description: >-
          DEATH 表（cause_concept_id、death_type_concept_id）、EPISODE（新表 CDM 5.4 —
          疾病發作、治療方案）、EPISODE_EVENT（將事件與發作連結）、FACT_RELATIONSHIP（CDM 中事實之間的關係）。
        duration_minutes: 60
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 第 5 部分：標準化詞彙
    description: 概念系統、詞彙層次、關係、映射
    sort_order: 5
    lessons:
      - id: 019f1a00-a114-7b01-e001-omopcdm54014
        title: 第 14 課：詞彙系統 — CONCEPT、VOCABULARY、DOMAIN 和 CONCEPT_CLASS
        slug: bai-14-he-thong-vocabulary-concept-vocabulary-domain-concept-class
        description: >-
          OMOP 如何組織超過 1000 萬個詞彙表（SNOMED CT、ICD-10、RxNorm、LOINC、ATC）的超過 1000
          萬個概念、詳細的 CONCEPT 表、VOCABULARY、DOMAIN、CONCEPT_CLASS、standard_concept
          標誌、VOCABULARY、DOMAIN、CONCEPT_CLASS、standard_concept
          標誌、valid_start_date/valid_Rvalate 和 4PT_Hall_Hallvalid_start。
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019f1a00-a115-7b01-e001-omopcdm54015
        title: 第 15 課：CONCEPT_RELATIONSHIP 和 CONCEPT_ANCESTOR — 關係和譜系
        slug: bai-15-concept-relationship-concept-ancestor-moi-quan-he-pha-he
        description: >-
          關係類型（對應、是、有元件）、CONCEPT_RELATIONSHIP 表、RELATIONSHIP
          表、CONCEPT_ANCESTOR（分層總和）、min/max_levels_of_separation、佇列定義和分析中的應用。
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019f1a00-a116-7b01-e001-omopcdm54016
        title: 第 16 課：SOURCE_TO_CONCEPT_MAP 和 DRUG_STRENGTH — 映射和藥物內容
        slug: bai-16-source-to-concept-map-drug-strength-mapping-ham-luong-thuoc
        description: >-
          用於自訂映射的 SOURCE_TO_CONCEPT_MAP（ICD-10
          VN、國內藥物）、DRUG_STRENGTH（金額、濃度分子/分母）、b​​ox_size、用於映射的 Usagi 工具和最佳實踐。
        duration_minutes: 60
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 第 6 部分：衛生系統、經濟學和衍生表
    description: LOCATION、CARE_SITE、PROVIDER、PAYER_PLAN_PERIOD、COST、Era 表
    sort_order: 6
    lessons:
      - id: 019f1a00-a117-7b01-e001-omopcdm54017
        title: 第 17 課：衛生系統 — 地點、照護地點和提供者
        slug: bai-17-health-system-location-care-site-provider
        description: >-
          表LOCATION（地址、country_concept_id、緯度/經度）、CARE_SITE（醫療保健組織、place_of_service）、PROVIDER（醫療保健工作者、specialty_concept_id、NPI）、層級關係和FACT_RELATIONSHIP。
        duration_minutes: 45
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019f1a00-a118-7b01-e001-omopcdm54018
        title: 第 18 課：健康經濟學 — PAYER_PLAN_PERIOD 和 COST
        slug: bai-18-health-economics-payer-plan-period-cost
        description: >-
          PAYER_PLAN_PERIOD（健康保險、付款人/計劃/贊助商）、COST
          表（與每個臨床事件相關的成本）、total_charge/total_paid/paid_by_payer、DRG、revenue_code
          以及在健康經濟與結果研究 (HEOR) 中的應用。
        duration_minutes: 60
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019f1a00-a119-7b01-e001-omopcdm54019
        title: 第 19 課：派生元素 — DRUG_ERA、DOSE_ERA 和 CONDITION_ERA
        slug: bai-19-derived-elements-drug-era-dose-era-condition-era
        description: >-
          Era 表根據原始資料、DRUG_ERA（按成分分組藥物暴露，持續時間視窗 30
          天）、DOSE_ERA（穩定劑量）、CONDITION_ERA（分組條件，間隔 30 天）、建立 Era 的 SQL
          腳本和分析應用程式計算得出。
        duration_minutes: 60
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: 第 7 部分：元資料、群組和實踐總結
    description: CDM_SOURCE、METADATA、COHORT，整個CDM的總結以及下一步
    sort_order: 7
    lessons:
      - id: 019f1a00-a120-7b01-e001-omopcdm54020
        title: 第 20 課：CDM_SOURCE、元資料、群組和摘要 — 下一步
        slug: bai-20-cdm-source-metadata-cohort-tong-ket-buoc-tiep-theo
        description: >-
          CDM_SOURCE（有關資料集的元資料）、METADATA 表、COHORT 和 COHORT_DEFINITION（患者亞組）、所有
          37 個 OMOP CDM 5.4 表的摘要、下一個路線圖（ETL、ATLAS、ACHILLES、HADES）和學習資源。
        duration_minutes: 60
        is_free: true
        sort_order: 20
        video_url: null
locale: zh-tw
---

## 系列介紹

**OMOP CDM 5.4 初學者** 是最全面的越南語系列，可幫助您了解 **OMOP 通用資料模型版本 5.4** — 80 個國家** 400 多個組織使用的健康資料標準。

### 問題

每個醫院的醫療資料都以自己的方式儲存：

```
Bệnh viện A (HIS)          Bệnh viện B (EMR)          Bảo hiểm Y tế XH
├── patients               ├── nguoi_benh              ├── ho_so_kcb
├── diagnoses (ICD-10)     ├── chan_doan (ICD-10-VN)   ├── ma_benh
├── prescriptions           ├── don_thuoc               ├── thuoc_bh
└── lab_results            └── ket_qua_xn             └── xet_nghiem
    (khác format)              (khác format)               (khác format)
```

→ **無法跨醫院進行比較、總結或研究。 **

### 解決方案：OMOP CDM

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

### 你會學到什麼？

|部分|內容 |文章|
|-----|----------|-----|
| 1. 概述 | OMOP CDM、架構、概念 |第 1-3 課 |
| 2. 人員與拜訪 |人員，觀察期，訪問 |第 4-6 課 |
| 3. 臨床事件 |病情、藥物、手術、測量 |第 7-10 課 |
| 4.擴充表|觀察、裝置、筆記、死亡、情節 | | 第 11-13 課
| 5. 詞彙|概念系統、關係、映射 | | 第 14-16 課
| 6.系統與經濟學|位置、提供者、成本、時代表 | | 第 17-19 課
| 7. 總結 |元資料、佇列、路線圖 |第 20 課 |

### 先決條件

- 對資料庫的基本了解（了解表格、列、行）
- 基本 SQL（SELECT、JOIN、WHERE）－有用但不是必要的
- 無需深入的醫學知識—每個概念都有解釋

### 與OHDSI & OMOP CDM系列不同

本系列**100% 專注於 OMOP CDM 5.4 資料結構** — 透過具體範例解釋每個表格、每個欄位。如果您想了解更多工具（ATLAS、WebAPI、ACHILLES、ETL），請查看該系列 [OHDSI 和 OMOP CDM — 綜合醫療數據分析](/series/ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien)。
