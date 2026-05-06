---
id: 019f1a00-a113-7b01-e001-omopcdm54013
title: 'レッスン 13: DEATH、EPISODE、EPISODE_EVENT'
slug: bai-13-death-episode-episode-event
description: >-
  死亡 (DEATH)、がん治療などの長期疾患プロセス (EPISODE - 新しい CDM 5.4)、およびエピソード内の関連イベント
  (EPISODE_EVENT) を記録します。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: 拡張された臨床テーブル'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop13)"/>
  <g>
    <circle cx="700" cy="85" r="20" fill="#818cf8" opacity="0.12"/>
    <circle cx="780" cy="115" r="28" fill="#818cf8" opacity="0.08"/>
    <circle cx="870" cy="95" r="24" fill="#818cf8" opacity="0.06"/>
    <line x1="640" y1="150" x2="1100" y2="230" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 13</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">死、エピソード</tspan>
    <tspan x="60" dy="42">& EPISODE_EVENT</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 拡張された臨床テーブル</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Clinical Data グループの最後の 3 つのテーブル: **DEATH** は死亡イベントを記録し、**EPISODE** (CDM 5.4 の新機能) は長期的な臨床/治療の進行を記録し、**EPISODE_EVENT** はエピソード内のイベントをリンクします。 EPISODE は CDM 5.4 への最も注目すべき追加であり、特にがん研究にとって重要です。

---

## 1. DEATH — 死亡記録

＃＃＃１．１．テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `person_id` |整数 | ✅ PK/FK |患者 (1 レコード/患者) |
| `death_date` |日付 | ✅ |死亡日 |
| `death_datetime` |日時 | |死亡日時 |
| `death_type_concept_id` |整数 | ✅ |データソース |
| `cause_concept_id` |整数 | |死因 (SNOMED) |
| `cause_source_value` | VARCHAR(50) | |オリジナル ICD |
| `cause_source_concept_id` |整数 | |オリジナルコンセプト |

＃＃＃１．２．重要な特徴

- **1 人あたり 1 つの固有のレコード** — 複数の情報源がある場合は、最も信頼できるものを選択してください
- **person_id** は PK と FK の両方です → 独自の death_id はありません
- **cause_concept_id**: 主な原因に SNOMED を使用します

＃＃＃１．３． death_type_concept_id

|コンセプトID |出典 |説明 |
|----------|----------|----------|
| 32817 | EHR | HIS からの記録 |
| 32810 |クレーム |社会保険データ |
| 32885 |死亡証明書 |死亡証明書 |
| 32886 |全国死亡指数 |国民登録簿 |

＃＃＃１．４．たとえば

```sql
-- BN tử vong do nhồi máu cơ tim cấp
INSERT INTO death (
    person_id, death_date,
    death_type_concept_id,
    cause_concept_id,
    cause_source_value,
    cause_source_concept_id
) VALUES (
    100001, '2024-06-20',
    32885,                        -- Death certificate
    4329847,                      -- SNOMED: AMI
    'I21.9',                      -- ICD-10
    45572161                      -- ICD10CM concept
);
```

＃＃＃１．５。 SQL分析

```sql
-- Top 10 nguyên nhân tử vong
SELECT
    c.concept_name AS cause_of_death,
    COUNT(*) AS death_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS pct
FROM death d
JOIN concept c ON d.cause_concept_id = c.concept_id
WHERE d.cause_concept_id != 0
GROUP BY c.concept_name
ORDER BY death_count DESC
LIMIT 10;

-- Tỉ lệ tử vong sau nhập viện ICU
SELECT
    ROUND(
        COUNT(DISTINCT d.person_id) * 100.0 /
        NULLIF(COUNT(DISTINCT v.person_id), 0), 1
    ) AS mortality_rate_pct
FROM visit_occurrence v
LEFT JOIN death d ON v.person_id = d.person_id
    AND d.death_date BETWEEN v.visit_start_date
    AND v.visit_start_date + INTERVAL '30 days'
WHERE v.visit_concept_id = 32037;  -- ICU visit
```

---

## 2. エピソード — 病理学的プロセス (新しい CDM 5.4)

＃＃＃２．１．なぜエピソードが必要なのでしょうか?

CDM 5.4 より前は、「がん治療プロセス」を表現する方法がありませんでした。イベント (診断、化学療法、放射線療法、手術) は複数のテーブルに分散していました。 EPISODE はそれらをひとつの「物語」にまとめます。

```
  Trước CDM 5.4:

  CONDITION: Ung thư phổi ─────────── (rời rạc)
  PROCEDURE: Sinh thiết phổi ────────── (rời rạc)
  DRUG:      Cisplatin cycle 1 ──────── (rời rạc)
  DRUG:      Cisplatin cycle 2 ──────── (rời rạc)
  PROCEDURE: Phẫu thuật cắt thùy phổi ─ (rời rạc)

  Sau CDM 5.4:

  EPISODE: "Điều trị ung thư phổi giai đoạn 3"
       │
       ├── EPISODE_EVENT → CONDITION (chẩn đoán)
       ├── EPISODE_EVENT → PROCEDURE (sinh thiết)
       ├── EPISODE_EVENT → DRUG (hóa trị cycle 1)
       ├── EPISODE_EVENT → DRUG (hóa trị cycle 2)
       └── EPISODE_EVENT → PROCEDURE (phẫu thuật)
```

＃＃＃２．２． EPISODE テーブルの構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `episode_id` |ビッグINT | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |患者 |
| `episode_concept_id` |整数 | ✅ |エピソードの種類 |
| `episode_start_date` |日付 | ✅ |開始日 |
| `episode_start_datetime` |日時 | | |
| `episode_end_date` |日付 | |終了日 |
| `episode_end_datetime` |日時 | | |
| `episode_parent_id` |ビッグINT | |エピソードの親 (階層) |
| `episode_number` |整数 | |シリアル番号 |
| `episode_object_concept_id` |整数 | ✅ |エピソード オブジェクト |
| `episode_type_concept_id` |整数 | ✅ |データソース |
| `episode_source_value` | VARCHAR(50) | |元のコード |
| `episode_source_concept_id` |整数 | | |

＃＃＃２．３． Episode_concept_id — エピソード タイプ

|コンセプトID |エピソードの種類 |例 |
|----------|---------------|----------|
| 32528 |病気の最初の発生 |初めての肺がん |
| 32529 |病気の再発 |がん再発 |
| 32531 |治療計画 |シスプラチン-エトポシド療法 |
| 32532 |治療サイクル |サイクル 1、サイクル 2... |

＃＃＃２．４．例: 肺がんの治療

```sql
-- Episode cha: Bệnh ung thư phổi
INSERT INTO episode (
    episode_id, person_id,
    episode_concept_id,
    episode_start_date, episode_end_date,
    episode_parent_id,
    episode_object_concept_id,
    episode_type_concept_id
) VALUES (
    200001, 100001,
    32528,                            -- Disease first occurrence
    '2024-01-15', NULL,               -- Chưa kết thúc
    NULL,                             -- Không có cha
    4311499,                          -- SNOMED: Lung cancer
    32817                             -- EHR
);

-- Episode con: Phác đồ hóa trị
INSERT INTO episode (
    episode_id, person_id,
    episode_concept_id,
    episode_start_date, episode_end_date,
    episode_parent_id,
    episode_number,
    episode_object_concept_id,
    episode_type_concept_id
) VALUES (
    200002, 100001,
    32531,                            -- Treatment regimen
    '2024-02-01', '2024-06-30',
    200001,                           -- Thuộc episode ung thư phổi
    1,
    35804410,                         -- Cisplatin regimen
    32817
);

-- Episode con: Cycle 1
INSERT INTO episode (
    episode_id, person_id,
    episode_concept_id,
    episode_start_date, episode_end_date,
    episode_parent_id,
    episode_number,
    episode_object_concept_id,
    episode_type_concept_id
) VALUES (
    200003, 100001,
    32532,                            -- Treatment cycle
    '2024-02-01', '2024-02-21',
    200002,                           -- Thuộc phác đồ
    1,                                -- Cycle 1
    35804410,
    32817
);
```

---

## 3. EPISODE_EVENT — イベントバインディング

＃＃＃３．１．テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `episode_id` |ビッグINT | ✅FK |エピソード |
| `event_id` |ビッグINT | ✅ |イベントID |
| `episode_event_field_concept_id` |整数 | ✅ |イベントを含むテーブル |

＃＃＃３．２．エピソード_イベント_フィールド_コンセプト_id

|コンセプトID |イベントテーブル |
|----------|---------------|
| 1147127 |条件発生.条件発生_id |
| 1147094 |薬物暴露.薬物暴露_id |
| 1147082 |手続き_発生.手続き_発生_id |
| 1147138 |測定.測定ID |
| 1147165 |デバイス_露出.デバイス_露出_id |

＃＃＃３．３．例: イベントをサイクル 1 にアタッチします。

```sql
-- Chẩn đoán ung thư → Episode chẩn đoán
INSERT INTO episode_event VALUES (
    200001,                           -- Episode: lung cancer
    70010,                            -- condition_occurrence_id
    1147127                           -- condition_occurrence table
);

-- Hóa trị Cisplatin → Episode Cycle 1
INSERT INTO episode_event VALUES (
    200003,                           -- Episode: Cycle 1
    80010,                            -- drug_exposure_id (Cisplatin)
    1147094                           -- drug_exposure table
);

-- XN máu trước hóa trị → Episode Cycle 1
INSERT INTO episode_event VALUES (
    200003,
    110020,                           -- measurement_id (CBC)
    1147138                           -- measurement table
);
```

---

## 4. EPISODEの研究への応用

```sql
-- Tìm BN ung thư phổi có >= 4 cycle hóa trị
SELECT
    e_disease.person_id,
    c_disease.concept_name AS cancer_type,
    COUNT(e_cycle.episode_id) AS total_cycles
FROM episode e_disease
JOIN concept c_disease
    ON e_disease.episode_object_concept_id = c_disease.concept_id
JOIN episode e_regimen
    ON e_disease.episode_id = e_regimen.episode_parent_id
    AND e_regimen.episode_concept_id = 32531  -- Treatment regimen
JOIN episode e_cycle
    ON e_regimen.episode_id = e_cycle.episode_parent_id
    AND e_cycle.episode_concept_id = 32532    -- Treatment cycle
WHERE e_disease.episode_concept_id = 32528    -- First occurrence
  AND c_disease.concept_id = 4311499          -- Lung cancer
GROUP BY e_disease.person_id, c_disease.concept_name
HAVING COUNT(e_cycle.episode_id) >= 4;

-- Timeline điều trị 1 BN
SELECT
    e.episode_number,
    ec.concept_name AS episode_type,
    e.episode_start_date,
    e.episode_end_date,
    oc.concept_name AS episode_object
FROM episode e
JOIN concept ec ON e.episode_concept_id = ec.concept_id
JOIN concept oc ON e.episode_object_concept_id = oc.concept_id
WHERE e.person_id = 100001
ORDER BY e.episode_start_date, e.episode_number;
```

---

## 概要

1. **死亡**: 1 人の記録、SNOMED を使用した死因
2. **エピソード** (新しい CDM 5.4): 病理/治療プロセス、親子階層のサポート
3. **EPISODE_EVENT**: 複数のテーブルのイベントをエピソードにリンクします
4. EPISODE は主に **腫瘍学** 向けに設計されていますが、すべての慢性疾患にも適用できます
5. 構造: 疾患 → 治療レジメン → 治療サイクル → イベント

**次の記事:** パート 5 を開始します — 標準化された語彙、標準化された辞書システムです。

---

## 参考文献

- [OMOP CDM 5.4 — DEATH](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEATH)
- [OMOP CDM 5.4 — EPISODE](https://ohdsi.github.io/CommonDataModel/cdm54.html#EPISODE)
- [OMOP CDM 5.4 — EPISODE_EVENT](https://ohdsi.github.io/CommonDataModel/cdm54.html#EPISODE_EVENT)
- [OHDSI Oncology WG](https://www.ohdsi.org/web/wiki/doku.php?id=documentation:next_cdm:oncology)
