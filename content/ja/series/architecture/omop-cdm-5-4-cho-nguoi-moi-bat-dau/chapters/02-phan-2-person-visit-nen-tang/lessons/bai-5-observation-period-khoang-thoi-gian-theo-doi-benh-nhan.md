---
id: 019f1a00-a105-7b01-e001-omopcdm54005
title: 'レッスン 5: OBSERVATION_PERIOD — 患者モニタリング期間'
slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
description: >-
  OBSERVATION_PERIOD の意味、このテーブルが必要な理由、ソース データから開始日/終了日を決定する方法、発生率/有病率の計算、ETL
  規則に与える影響。
duration_minutes: 45
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: 人物と訪問 — データ プラットフォーム'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop05" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop05)"/>
  <g>
    <circle cx="659" cy="87" r="22" fill="#818cf8" opacity="0.12"/>
    <circle cx="718" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="777" cy="125" r="36" fill="#818cf8" opacity="0.06"/>
    <circle cx="836" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="163" r="20" fill="#818cf8" opacity="0.1"/>
    <line x1="600" y1="157" x2="1100" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 5</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">OBSERVATION_PERIOD — 約</tspan>
    <tspan x="60" dy="42">患者のフォローアップ時間</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 人物と訪問 — データ プラットフォーム</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**OBSERVATION_PERIOD** は多くの初心者が見落としがちなテーブルですが、非常に重要です。この表は、**「この患者に関するデータはいつから入手できましたか?」** という質問に答えます。

患者に OBSERVATION_PERIOD がない場合、「患者は病気ではない」のか、「患者は病気だが検査に来ていない（したがってデータがない）」のかを区別することができません。

---

## 1. OBSERVATION_PERIOD が必要な理由は何ですか?

＃＃＃１．１． 「不在vs行方不明」の問題

```
  Bệnh nhân Lan:
  ├── 2020-01-10: Khám → chẩn đoán Tiểu đường
  ├── 2020-06-15: Tái khám
  ├── 2021-01-20: Tái khám
  ├── (im lặng 2 năm)
  └── 2023-03-10: Nhập viện → Suy tim

  Câu hỏi: Từ 2021-01 đến 2023-03, Lan có khỏe mạnh
  hay chuyển sang bệnh viện khác?
```

**OBSERVATION_PERIOD** は、患者がデータ ソースを「表示」していた時間を示します。

```
  Observation Period:
  ┌──────────────────────────────────────────────────────────────┐
  │  2020-01-10 ════════════════════════ 2021-12-31             │
  │  (Có BHYT tại BV này)                                       │
  └──────────────────────────────────────────────────────────────┘
  
  ┌──────────────────────────────────────────────────────────────┐
  │  2023-01-01 ════════════════════════ 2024-06-30             │
  │  (Quay lại BV, có BHYT mới)                                │
  └──────────────────────────────────────────────────────────────┘

  → Trong observation period: không có Condition = bệnh nhân KHÔNG bị
  → Ngoài observation period: không có Condition = KHÔNG BIẾT
```

＃＃＃１．２．分析への影響

|分析 | OPなし |はいOP |
|----------|---------------|----------|
| **発生率** |不正確 (分母が不正確) |正しい (危険な作業時間を把握) |
| **有病率** |間違っています (カウントが不十分です) | True (総人口がわかっている) |
| **生存分析** |検閲時間が分からない |イベントまでの正確な時間 |
| **コホートエントリー** |データの外部から患者を選択できる | OP で BN のみを選択 |

---

## 2. テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `observation_period_id` |整数 | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |人物 リファレンス |
| `observation_period_start_date` |日付 | ✅ |データ開始日 |
| `observation_period_end_date` |日付 | ✅ |データの終了日 |
| `period_type_concept_id` |整数 | ✅ |原点がOPを決定 |

＃＃＃２．１． period_type_concept_id

|コンセプトID |コンセプト名 |説明 |
|----------|--------------|------|
| 32817 | EHR | EHR 記録から判断 |
| 32810 |クレーム |保険金請求/健康保険という言葉を決める |
| 44814724 |医療現場での出会いをカバーする期間 |出会いから |
| 44814725 |アルゴリズムによって推定される期間 |推論アルゴリズム |

---

## 3. 観測期間の決定方法

＃＃＃３．１．請求/保険データから

```
  BHXH cấp thẻ BHYT:
  ┌─────────────────────────────────────────┐
  │ Mã thẻ: DN-123456  Hiệu lực: 01/2020   │
  │ BV đăng ký: Chợ Rẫy  Hết hạn: 12/2024  │
  └─────────────────────────────────────────┘

  → observation_period_start_date = 2020-01-01
  → observation_period_end_date   = 2024-12-31
  → period_type_concept_id = 32810 (Claim)
```

＃＃＃３．２． EHRデータより

明確な保険情報がない場合は、**最初から最後の出会い/訪問まで**として数えます。

```sql
-- Tính OP từ visits
SELECT
    person_id,
    MIN(visit_start_date) AS observation_period_start_date,
    MAX(COALESCE(visit_end_date, visit_start_date))
        AS observation_period_end_date,
    32817 AS period_type_concept_id  -- EHR
FROM visit_occurrence
GROUP BY person_id;
```

＃＃＃３．３．患者は複数の観察期間を持つことができます

```
  Bệnh nhân person_id = 100001:

  OP 1: ═══════════ (2018-01-01 → 2019-06-30)
          Có BHYT tại BV A

                  Gap (6 tháng, không có dữ liệu)

  OP 2: ═══════════════════ (2020-01-01 → 2024-12-31)
          Có BHYT mới tại BV A

  → 2 records trong OBSERVATION_PERIOD
```

```sql
INSERT INTO observation_period VALUES
    (1, 100001, '2018-01-01', '2019-06-30', 32810),
    (2, 100001, '2020-01-01', '2024-12-31', 32810);
```

---

## 4. 重要なルール

＃＃＃４．１．すべての臨床事象は観察期間内に発生する必要があります

```
  OP: ════════════════════════════════════
  2020-01-01                        2024-12-31

      ✅ Visit 2020-03-15 (trong OP)
      ✅ Condition 2022-06-10 (trong OP)
      ❌ Drug Exposure 2019-05-10 (NGOÀI OP!) → Cảnh báo data quality
```

**ACHILLES データ品質チェック**: OBSERVATION_PERIOD 以外の臨床イベントがあるかどうかを確認します。

＃＃＃４．２．観測期間は重複できません

同じ person_id が与えられた場合、OP は **時系列順であり、重複しない**必要があります。

```
  ✅ ĐÚng:
  OP1: ═══════    OP2: ═══════════
  2018-01  2019-06    2020-01  2024-12

  ❌ SAI (overlap):
  OP1: ═══════════════
  OP2:       ═══════════════
```

＃＃＃４．３．特別大会

|状況 |処理 |
|----------|----------|
|患者は一度だけ来た |開始日 = 終了日 = 試験日 |
|患者が死亡 | end_date = 死亡日 |
| ギャップ < 32 日 (クレーム) |通常は 1 つの OP に結合されます。
|多くの情報源が重複しています |最大の OP に結合 |

---

## 5. 分析への応用

＃＃＃５．１．リスクにさらされる作業時間を計算する

```sql
-- Tổng thời gian theo dõi (person-years)
SELECT
    SUM(
        observation_period_end_date - observation_period_start_date
    ) / 365.25 AS total_person_years
FROM observation_period;

-- Person-time cho incidence rate
SELECT
    p.gender_concept_id,
    SUM(
        op.observation_period_end_date - op.observation_period_start_date
    ) / 365.25 AS person_years
FROM observation_period op
JOIN person p ON op.person_id = p.person_id
GROUP BY p.gender_concept_id;
```

＃＃＃５．２． 「十分なデータ」で患者をフィルタリングする

```sql
-- Chỉ chọn BN có ≥ 1 năm follow-up
SELECT person_id
FROM observation_period
WHERE observation_period_end_date - observation_period_start_date >= 365
GROUP BY person_id;
```

＃＃＃５．３．データ品質をチェックする

```SQL
-- 観測期間外のイベントを検索する
選択
    'CONDITION' ASevent_type、
    co.person_id、
    co.condition_start_date ASevent_date
FROM 条件発生 co
LEFT JOIN 観測期間演算
    ON co.person_id = op.person_id
    AND co.condition_start_date
        op.observation_period_start_date の間
            かつ、op.observation_period_end_date
WHERE op.observation_period_id が NULL;
```

---

## 6. 完全な例

```SQL
-- OBSERVATION_PERIOD (ベトナムの病院の場合)
INSERT INTO 観測期間 (
    観測期間ID、
    person_id、
    観測期間開始日、観測期間開始日
    観測期間終了日、観測期間終了日
    period_type_concept_id
) 値
    -- 患者 100001: 2020 年から 2024 年まで健康保険に加入しています。
    (1, 100001, '2020-01-01', '2024-12-31', 32810),
    -- 患者 100002: 2023 年に 3 回来院
    (2、100002、'2023-02-15'、'2023-11-20'、32817)、
    -- 患者 100003: 2 つの異なる段階
    (3、100003、'2019-03-10'、'2020-06-30'、32817)、
    (4、100003、'2022-01-15'、'2024-06-30'、32817);
```

---

## 概要

1. **OBSERVATION_PERIOD** = 患者がシステムに「データを保持している」時間
2. **「病気ではない」** と **「データなし」** を区別する
3. **全員に必須** — 1 人あたり少なくとも 1 つの OP が必要です
4. 同じ person_id を持つ OP 間で **重複なし**
5. **すべての臨床イベント**は OP に含まれている必要があります
6. **主な用途**: 人時間、罹患率、有病率、コホート定義を計算します。

**次の記事:** VISIT_OCCURRENCE と VISIT_DETAIL — OMOP CDM が医療システムとの各患者の接触を記録する方法。

---

## 参考文献

- [OMOP CDM 5.4 — OBSERVATION_PERIOD](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION_PERIOD)
- [The Book of OHDSI — Observation Periods](https://ohdsi.github.io/TheBookOfOhdsi/CommonDataModel.html)
