---
id: 019f1a00-a109-7b01-e001-omopcdm54009
title: 'レッスン 9: PROCEDURE_OCCURRENCE — 手順と手術'
slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
description: >-
  手順、手術、医療介入を記録します。 SNOMED / CPT4 / ICD-10-PCS
  マッピング、modifier_concept_id、手順、測定、薬剤の区別、ベトナムの病院データの ETL の実践。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: 主要な臨床事象'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop09" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop09)"/>
  <g>
    <circle cx="700" cy="95" r="26" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="120" r="20" fill="#818cf8" opacity="0.09"/>
    <circle cx="850" cy="100" r="32" fill="#818cf8" opacity="0.06"/>
    <circle cx="910" cy="170" r="18" fill="#818cf8" opacity="0.10"/>
    <line x1="640" y1="160" x2="1100" y2="230" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 9</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">PROCEDURE_OCCURRENCE</tspan>
    <tspan x="60" dy="42">手順と手術</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 主要な臨床事象</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**PROCEDURE_OCCURRENCE** は、患者に対して行われたすべての処置、手術、医療介入を記録します。単純な血圧測定から複雑な開胸手術まで、すべてこの表で標準化されています。このレッスンは、PROCEDURE をいつ使用するか、MEASUREMENT または DRUG をいつ使用するかを理解するのに役立ちます。

---

## 1. テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `procedure_occurrence_id` |整数 | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |患者 |
| `procedure_concept_id` |整数 | ✅ |スタンダードコンセプト |
| `procedure_date` |日付 | ✅ |実施日 |
| `procedure_datetime` |日時 | |日付と時刻 |
| `procedure_end_date` |日付 | |終了日 (新しい CDM 5.4) |
| `procedure_end_datetime` |日時 | |閉店時間 |
| `procedure_type_concept_id` |整数 | ✅ |データソース |
| `modifier_concept_id` |整数 | |追加 (左/右、2 番目...) |
| `quantity` |整数 | |実行数 |
| `provider_id` |整数 | FK |医師が実施 |
| `visit_occurrence_id` |整数 | FK |関連する訪問 |
| `visit_detail_id` |整数 | FK |訪問詳細 |
| `procedure_source_value` | VARCHAR(50) | |元のコード |
| `procedure_source_concept_id` |整数 | |オリジナルコンセプト |
| `modifier_source_value` | VARCHAR(50) | |元の修飾子 |

**CDM 5.4の新機能:** `procedure_end_date` そして `procedure_end_datetime` — 数時間/数日かかる手術にとって重要です。

---

## 2. 手順の語彙

＃＃＃２．１．人気の語彙

|語彙 |役割 |例 |
|----------|-----------|----------|
| **SNOMED CT** |スタンダードコンセプト |虫垂切除術 (44783086) |
| **CPT4** |米国の請求先コード | 44970 (腹腔鏡下虫垂切除術) |
| **ICD-10-PCS** |米国の入院手順 | 0DTJ4ZZ |
| **ICD-9-Proc** |従来の米国の手順 | 47.01 |
| **HCPCS** |米国の外来サービス | G0101 |

＃＃＃２．２．ドメインルーティングルール

```
  ICD-10-PCS mã = '0DTJ4ZZ' (Lapar appendectomy)
       │
       │ concept_relationship: Maps to
       ↓
  SNOMED concept_id = 44783086
  concept_name = 'Laparoscopic appendectomy'
  domain_id = 'Procedure'
       │
       └──→ Lưu vào PROCEDURE_OCCURRENCE ✓


  CPT4 mã = '80053' (Basic metabolic panel)
       │
       │ concept_relationship: Maps to
       ↓
  SNOMED concept_id = 3019897
  domain_id = 'Measurement'
       │
       └──→ Lưu vào MEASUREMENT ✗ (không phải Procedure!)
```

> **ゴールデン ルール:** 標準コンセプトのドメイン ID を常に確認してください。ソースコードが CPT4 (プロシージャコード) であっても、Standard Concept がドメイン = Measurement の場合は、MEASUREMENT に保存する必要があります。

---

## 3. 手順 vs 測定 vs 薬剤 — 境界

|元データ |どこ？ |理由 |
|-----------|--------|------|
|虫垂炎の手術 | **手順** |ドメイン = プロシージャ |
|腹部超音波 | **手順** |ドメイン = 手順 (イメージング) |
|血液検査 (結果 5.8 mmol/L) | **測定** |測定値がある → 測定 |
|心肺 X 線検査 (結果なし) | **手順** |イメージング → 手順 |
|インスリン注射 | **DRUG_EXPOSURE** |医薬品管理 |
|結腸内視鏡検査 + 生検 | **手順** |手続き的介入 |
|理学療法 30 分 | **手順** |プロシージャドメイン |
|輸血 | **手順** |輸血 = 手順 |

---

## 4. modifier_concept_id — 追加情報

|コンセプトID |修飾子 |意味 |
|----------|----------|----------|
| 4148525 |左 |左 |
| 4149625 |右 |右 |
| 4236436 |二国間 |両面 |
| 4215561 |最初の出会い |初めて |
| 4215562 |その後の出会い |再検討 |

```sql
-- Phẫu thuật cắt ruột thừa nội soi (bên phải)
INSERT INTO procedure_occurrence (
    procedure_occurrence_id, person_id, procedure_concept_id,
    procedure_date, procedure_end_date,
    procedure_type_concept_id,
    modifier_concept_id, quantity,
    provider_id, visit_occurrence_id,
    procedure_source_value
) VALUES (
    90001, 100001, 44783086,          -- SNOMED: Lapar appendectomy
    '2024-06-15', '2024-06-15',
    32817,                             -- EHR
    4149625, 1,                        -- Right side, 1 time
    5001, 50001,
    '0DTJ4ZZ'                          -- ICD-10-PCS
);
```

---

## 5. ETL VN データ

＃＃＃５．１．人気のデータソース

|出典 |説明 |オリジナルの語彙 |
|------|------|-----|
|病院技術サービス一覧 | BVテクニカルサービス |内部コード |
| ICD-9-CM プロセス |古い手術コード | ICD9Proc |
|社会保険一覧 |社会保険サービスコード |社内保険コード |

＃＃＃５．２． SQL ETL

```sql
SELECT
    ROW_NUMBER() OVER() AS procedure_occurrence_id,
    pm.person_id,
    COALESCE(cr.concept_id_2, 0) AS procedure_concept_id,
    tt.ngay_thuchien AS procedure_date,
    tt.ngay_ketthuc AS procedure_end_date,
    32817 AS procedure_type_concept_id,
    0 AS modifier_concept_id,
    tt.so_lan AS quantity,
    tt.ma_dvkt AS procedure_source_value,
    COALESCE(c_source.concept_id, 0) AS procedure_source_concept_id
FROM thuthuat_his tt
JOIN person_mapping pm ON tt.ma_bn = pm.source_id
LEFT JOIN source_to_concept_map stcm
    ON tt.ma_dvkt = stcm.source_code
    AND stcm.source_vocabulary_id = 'VN_PROCEDURE'
LEFT JOIN concept c_std
    ON stcm.target_concept_id = c_std.concept_id
    AND c_std.standard_concept = 'S'
    AND c_std.domain_id = 'Procedure'   -- ← Chỉ Procedure domain!
LEFT JOIN concept c_source
    ON tt.ma_dvkt = c_source.concept_code
LEFT JOIN concept_relationship cr
    ON c_source.concept_id = cr.concept_id_1
    AND cr.relationship_id = 'Maps to';
```

＃＃＃５．３．ドメインルーティングを処理します

```sql
-- DVKT "Xét nghiệm HbA1c" → mã CPT 83036
-- Standard concept domain = Measurement → KHÔNG lưu vào PROCEDURE

-- Bước 1: Tìm Standard Concept
SELECT c.*
FROM concept c
JOIN concept_relationship cr ON c.concept_id = cr.concept_id_2
    AND cr.relationship_id = 'Maps to'
JOIN concept c_src ON cr.concept_id_1 = c_src.concept_id
WHERE c_src.concept_code = '83036'
  AND c_src.vocabulary_id = 'CPT4';
-- domain_id = 'Measurement' → route sang MEASUREMENT table

-- Bước 2: Lưu vào đúng bảng
-- Nếu domain = 'Procedure' → procedure_occurrence
-- Nếu domain = 'Measurement' → measurement
-- Nếu domain = 'Observation' → observation
-- Nếu domain = 'Drug' → drug_exposure
```

---

## 6. SQL分析

```sql
-- Top 10 thủ thuật phổ biến
SELECT
    c.concept_name AS procedure_name,
    COUNT(*) AS procedure_count,
    COUNT(DISTINCT po.person_id) AS patient_count
FROM procedure_occurrence po
JOIN concept c ON po.procedure_concept_id = c.concept_id
WHERE po.procedure_concept_id != 0
GROUP BY c.concept_name
ORDER BY procedure_count DESC
LIMIT 10;

-- Thống kê phẫu thuật theo tháng
SELECT
    DATE_TRUNC('month', po.procedure_date) AS month,
    c.concept_name AS procedure_name,
    COUNT(*) AS total
FROM procedure_occurrence po
JOIN concept c ON po.procedure_concept_id = c.concept_id
WHERE po.procedure_concept_id = 44783086  -- Appendectomy
GROUP BY month, c.concept_name
ORDER BY month;

-- BN có cả chẩn đoán + phẫu thuật liên quan
SELECT
    po.person_id,
    co_cond.concept_name AS diagnosis,
    co_proc.concept_name AS procedure_name,
    co.condition_start_date,
    po.procedure_date
FROM procedure_occurrence po
JOIN condition_occurrence co ON po.person_id = co.person_id
    AND po.visit_occurrence_id = co.visit_occurrence_id
JOIN concept co_cond ON co.condition_concept_id = co_cond.concept_id
JOIN concept co_proc ON po.procedure_concept_id = co_proc.concept_id
WHERE co.condition_concept_id = 441604    -- Appendicitis
  AND po.procedure_concept_id = 44783086  -- Appendectomy
LIMIT 20;
```

---

## 概要

1. **PROCEDURE_OCCURRENCE** = 処置、手術、介入、画像処理
2. 主な標準語彙: **SNOMED CT**
3. **ドメイン ルーティング**は非常に重要です。CPT4 コードは手順ではなく測定にマッピングできます。
4. CDM 5.4 は、延長手術用の **procedure_end_date** を追加します
5. **modifier_concept_id** (左/右、初回/再訪問用)
6. ETL VN: 内部アカウンティング サービス コード → SOURCE_TO_CONCEPT_MAP → 標準 SNOMED

**次の記事:** 測定 — テスト、測定、数値。

---

## 参考文献

- [OMOP CDM 5.4 — PROCEDURE_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#PROCEDURE_OCCURRENCE)
- [Athena — Procedure Domain](https://athena.ohdsi.org/)
