---
id: 019f1a00-a111-7b01-e001-omopcdm54011
title: 'レッスン 11: 観察 — 一般的な臨床事象'
slug: bai-11-observation-su-kien-lam-sang-tong-hop
description: >-
  OBSERVATION
  テーブルには、状態、薬剤、手順、または測定の一部ではない臨床事象が記録されます。病歴、ライフスタイル、アレルギー、家族歴、新しい観察イベント ID CDM
  5.4。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: 拡張された臨床テーブル'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop11)"/>
  <g>
    <circle cx="690" cy="80" r="22" fill="#818cf8" opacity="0.11"/>
    <circle cx="770" cy="120" r="30" fill="#818cf8" opacity="0.08"/>
    <circle cx="860" cy="105" r="25" fill="#818cf8" opacity="0.07"/>
    <line x1="630" y1="155" x2="1100" y2="235" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 11</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">観察</tspan>
    <tspan x="60" dy="42">臨床事象の概要</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 拡張された臨床テーブル</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**OBSERVATION** は「包括的な」テーブルです。状態、薬剤、手順、または測定に一致しない臨床イベントを保存する場所です。病歴、ライフスタイル（喫煙、飲酒）、アレルギー、家族歴、婚姻状況、すべてがここにあります。

---

## 1. テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `observation_id` |整数 | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |患者 |
| `observation_concept_id` |整数 | ✅ |スタンダードコンセプト |
| `observation_date` |日付 | ✅ |記録日 |
| `observation_datetime` |日時 | |日付と時刻 |
| `observation_type_concept_id` |整数 | ✅ |データソース |
| `value_as_number` |フロート | |数値 |
| `value_as_string` | VARCHAR(60) | |テキスト値 |
| `value_as_concept_id` |整数 | |カテゴリ値 |
| `qualifier_concept_id` |整数 | |追加のコンテキスト |
| `unit_concept_id` |整数 | |単位 |
| `provider_id` |整数 | FK |プロバイダーの記録 |
| `visit_occurrence_id` |整数 | FK |関連する訪問 |
| `visit_detail_id` |整数 | FK |訪問詳細 |
| `observation_source_value` | VARCHAR(50) | |元のコード |
| `observation_source_concept_id` |整数 | |オリジナルコンセプト |
| `unit_source_value` | VARCHAR(50) | |オリジナルユニット |
| `qualifier_source_value` | VARCHAR(50) | |元の修飾子 |
| `value_as_datetime` |日時 | | ⭐ CDM 5.4 |
| `observation_event_id` |ビッグINT | | ⭐ CDM 5.4 |
| `obs_event_field_concept_id` |整数 | | ⭐ CDM 5.4 |

---

## 2. OBSERVATION では何を保存しますか?

＃＃＃２．１．ユースケースのリスト

|使用例 |観察_概念_id |値 |例 |
|----------|----------|----------|----------|
| **喫煙** | 4275495 (喫煙) |コンセプトとしての値 | 4298794 (現在喫煙者) |
| **アレルギー** | 439224 (アレルギー) |コンセプトとしての値 |医薬品/食品のコンセプト |
| **家族の歴史** | 4167217 (家族歴) |コンセプトとしての値 |病気の概念 |
| **婚姻状況** | 4053609 (婚姻状況) |コンセプトとしての値 | 4338692 (既婚) |
| **血液型** | 4041671 (血液型) |コンセプトとしての値 | 36308332 (O型) |
| **病歴** | 4214956 (歴史) + 条件コンセプト |コンセプトとしての値 | |
| **妊娠** | 4299535 (妊娠) |コンセプトとしての値 | |
| **職業** | 4019962 (職業) |値としての文字列 | 「先生」 |

＃＃＃２．２．観察と状態 — いつどこに保存するか?

|データ |表 |説明 |
|----------|----------|----------|
| 「2 型糖尿病患者」 | **状態** |活動性疾患 |
| 「糖尿病の家族歴」 | **観察** |家族の歴史 |
| 「患者はB型肝炎を患っていました（回復しました）」 | **観察** | |の歴史
| 「ペニシリンアレルギー」 | **観察** |アレルギー |
| 「患者は20年間喫煙しています」 | **観察** |ライフスタイル |
| 「発熱38.5℃」 | **測定** |測定値あり |

---

## 3. 詳細な例

＃＃＃３．１．喫煙

```sql
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    observation_source_value
) VALUES (
    130001, 100001,
    4275495,                     -- Tobacco smoking behavior
    '2024-06-15', 32817,
    4298794,                     -- Current every day smoker
    'SMOKING_STATUS'
);
```

＃＃＃３．２．薬物アレルギー

```sql
-- Dị ứng Penicillin
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    qualifier_concept_id,
    observation_source_value
) VALUES (
    130002, 100001,
    439224,                      -- Allergy to substance
    '2024-06-15', 32817,
    1713332,                     -- Penicillin (RxNorm ingredient)
    4129512,                     -- Severe (qualifier)
    'ALLERGY_PENICILLIN'
);
```

＃＃＃３．３．家族歴

```sql
-- Mẹ bị ung thư vú
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    qualifier_concept_id,
    observation_source_value
) VALUES (
    130003, 100001,
    4167217,                     -- Family history of clinical finding
    '2024-06-15', 32817,
    4112853,                     -- Malignant neoplasm of breast
    4166847,                     -- Mother (qualifier)
    'FHX_BREAST_CANCER_MOTHER'
);
```

---

## 4. 観測イベントID — CDM 5.4

Measurement_event_id と同様に、観測値を他のイベントにリンクできるようにします。

```sql
-- Ghi nhận: "Lý do nhập viện: Đau ngực"
-- Liên kết với visit_occurrence_id = 50001
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    observation_event_id,
    obs_event_field_concept_id
) VALUES (
    130004, 100001,
    4148832,                     -- Chief complaint
    '2024-06-15', 32817,
    77670,                       -- Chest pain
    50001,                       -- visit_occurrence_id
    1147082                      -- Field = visit_occurrence.visit_occurrence_id
);
```

---

## 5. qualifier_concept_id — コンテキストを追加します

|コンセプトID |修飾子 |用途 |
|----------|-----------|----------|
| 4129512 |深刻な |重大度レベル |
| 4148136 |マイルド |軽度レベル |
| 4129511 |中程度 |中程度のレベル |
| 4166847 |母 |家族関係 |
| 4166848 |父 |家族関係 |
| 4192403 |兄弟 |兄弟/姉妹 |
| 4167233 |一親等親族 |一親等親族 |

---

## 6. VNデータETL

```sql
-- Tiền sử từ HIS
SELECT
    ROW_NUMBER() OVER() AS observation_id,
    pm.person_id,
    COALESCE(stcm.target_concept_id, 0) AS observation_concept_id,
    ts.ngay_ghinhan AS observation_date,
    32817 AS observation_type_concept_id,
    -- Map giá trị
    CASE ts.loai_tiensu
        WHEN 'HUT_THUOC' THEN
            CASE ts.gia_tri
                WHEN 'CO' THEN 4298794     -- Current smoker
                WHEN 'DA_BO' THEN 4144272  -- Former smoker
                WHEN 'KHONG' THEN 4144273  -- Never smoker
            END
        WHEN 'DI_UNG' THEN
            COALESCE(stcm_drug.target_concept_id, 0)
    END AS value_as_concept_id,
    ts.mo_ta AS value_as_string,
    ts.ma_tiensu AS observation_source_value
FROM tiensu_his ts
JOIN person_mapping pm ON ts.ma_bn = pm.source_id
LEFT JOIN source_to_concept_map stcm
    ON ts.loai_tiensu = stcm.source_code
    AND stcm.source_vocabulary_id = 'VN_OBS_TYPE'
LEFT JOIN source_to_concept_map stcm_drug
    ON ts.gia_tri = stcm_drug.source_code
    AND stcm_drug.source_vocabulary_id = 'VN_DRUG';
```

---

## 7. SQL分析

```sql
-- Tỉ lệ hút thuốc theo giới tính
SELECT
    g.concept_name AS gender,
    s.concept_name AS smoking_status,
    COUNT(DISTINCT o.person_id) AS patients
FROM observation o
JOIN person p ON o.person_id = p.person_id
JOIN concept g ON p.gender_concept_id = g.concept_id
JOIN concept s ON o.value_as_concept_id = s.concept_id
WHERE o.observation_concept_id = 4275495  -- Tobacco smoking
GROUP BY g.concept_name, s.concept_name
ORDER BY g.concept_name, patients DESC;

-- Top dị ứng thuốc
SELECT
    c.concept_name AS allergen,
    COUNT(DISTINCT o.person_id) AS patients
FROM observation o
JOIN concept c ON o.value_as_concept_id = c.concept_id
WHERE o.observation_concept_id = 439224  -- Allergy
GROUP BY c.concept_name
ORDER BY patients DESC
LIMIT 10;
```

---

## 概要

1. **OBSERVATION** = 特殊なテーブルの一部ではないデータの「キャッチオール」テーブル
2. 主な使用例: 喫煙、アレルギー、家族歴、ライフスタイル、結婚
3. **qualifier_concept_id** はコンテキスト (レベル、関係) を追加します
4. CDM 5.4: 別のイベントに関連付けられた **observation_event_id**
5. **ドメインルーティング**は、観察、状態、測定を決定します

**次の記事:** DEVICE_EXPOSURE、検体、およびメモ — 医療機器、検体、および臨床メモ。

---

## 参考文献

- [OMOP CDM 5.4 — OBSERVATION](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION)
- [Athena — Observation Domain](https://athena.ohdsi.org/)
