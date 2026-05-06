---
id: 019f1a00-a112-7b01-e001-omopcdm54012
title: 'レッスン 12: DEVICE_EXPOSURE、検体、メモ'
slug: bai-12-device-exposure-specimen-note
description: >-
  追加の 3 つの臨床テーブル: 医療機器 (ステント、ペースメーカー) 用の DEVICE_EXPOSURE、検体 (血液、組織) 用の
  SPECIMEN、臨床メモおよび NLP 処理用の NOTE および NOTE_NLP。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 4: 拡張された臨床テーブル'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop12)"/>
  <g>
    <circle cx="680" cy="90" r="24" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="110" r="18" fill="#818cf8" opacity="0.09"/>
    <circle cx="840" cy="130" r="32" fill="#818cf8" opacity="0.06"/>
    <line x1="620" y1="160" x2="1100" y2="240" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 12</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">DEVICE_EXPOSURE、</tspan>
    <tspan x="60" dy="42">標本とメモ</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 拡張された臨床テーブル</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

この記事では、**DEVICE_EXPOSURE** (埋め込み型/患者装着型医療機器)、**SPECIMEN** (テストに使用される標本)、および **NOTE / NOTE_NLP** (自由記述の臨床メモ) という 3 つの追加臨床テーブルを紹介します。状態/薬剤/処置ほど一般的ではありませんが、研究ではますます重要になっています。

---

## 1. DEVICE_EXPOSURE — 医療機器

＃＃＃１．１．テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `device_exposure_id` |整数 | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |患者 |
| `device_concept_id` |整数 | ✅ |スタンダードコンセプト |
| `device_exposure_start_date` |日付 | ✅ |開始日 |
| `device_exposure_start_datetime` |日時 | | |
| `device_exposure_end_date` |日付 | |有効期限/削除日 |
| `device_exposure_end_datetime` |日時 | | |
| `device_type_concept_id` |整数 | ✅ |データソース |
| `unique_device_id` | VARCHAR(255) | |固有のデバイス識別子 (UDI) |
| `production_id` | VARCHAR(255) | | ⭐ 新しい CDM 5.4 |
| `quantity` |整数 | |数量 |
| `provider_id` |整数 | FK |医師 |
| `visit_occurrence_id` |整数 | FK |訪問 |
| `visit_detail_id` |整数 | FK | |
| `device_source_value` | VARCHAR(50) | | |
| `device_source_concept_id` |整数 | | |
| `unit_concept_id` |整数 | | ⭐ 新しい CDM 5.4 |
| `unit_source_value` | VARCHAR(50) | | ⭐ 新しい CDM 5.4 |
| `unit_source_concept_id` |整数 | | ⭐ 新しい CDM 5.4 |

＃＃＃１．２．たとえば

|設備 |コンセプト |例 |
|----------|-----------|----------|
|冠状動脈ステント | 4138390 |介入後のステント留置 |
|ペースメーカー | 4051938 |ペースメーカー |
|気管内チューブ | 4097216 |手術中の挿管 |
|眼鏡 | 4175440 |メガネを処方する |
|補聴器 | 4023396 |補聴器レベル |
|鍼治療0 |東洋医学の機器 (まだマッピングされていません) |

```sql
-- Đặt stent mạch vành
INSERT INTO device_exposure (
    device_exposure_id, person_id, device_concept_id,
    device_exposure_start_date,
    device_type_concept_id,
    unique_device_id, quantity,
    provider_id, visit_occurrence_id,
    device_source_value
) VALUES (
    140001, 100001, 4138390,
    '2024-06-15',
    32817,
    '(01)00844588003288(17)141120(10)A213B1',
    2,                            -- 2 stent
    5001, 50001,
    'STENT_CORONARY'
);
```

＃＃＃１．３． CDM 5.4 —production_id

5.4 の新機能: `production_id` から分離する `unique_device_id`、製造識別子（シリアル番号、ロット番号）に使用されます。

---

## 2. 検体 — 患者のサンプル

＃＃＃２．１．テーブル構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `specimen_id` |整数 | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |患者 |
| `specimen_concept_id` |整数 | ✅ |サンプルタイプ (SNOMED) |
| `specimen_type_concept_id` |整数 | ✅ |データソース |
| `specimen_date` |日付 | ✅ |サンプリング日 |
| `specimen_datetime` |日時 | | |
| `quantity` |フロート | |サンプル数量 |
| `unit_concept_id` |整数 | |単位 (mL、g...) |
| `anatomic_site_concept_id` |整数 | |サンプリング場所 |
| `disease_status_concept_id` |整数 | |病状 |
| `specimen_source_id` | VARCHAR(50) | |オリジナルのバーコード |
| `specimen_source_value` | VARCHAR(50) | |オリジナルモデルのタイプ |
| `unit_source_value` | VARCHAR(50) | |オリジナルユニット |
| `anatomic_site_source_value` | VARCHAR(50) | |元の場所 |
| `disease_status_source_value` | VARCHAR(50) | |元の状態 |

＃＃＃２．２．人気のモデルタイプ

|標本コンセプトID |サンプルの種類 |ベトナム語 |
|---------------------|----------|----------|
| 4045667 |血液検体 |血液サンプル |
| 4048506 |尿検体 |尿 |
| 4002890 |血清検体 |血清 |
| 4219166 |組織標本 |組織サンプル |
| 4045666 |喀痰標本 |ダム |
| 4260640 |脳脊髄液 |脳脊髄液 |
| 4000626 |骨髄骨髄

＃＃＃２．３．試料→測定リンク

```sql
-- Mẫu máu lấy ngày 15/6
INSERT INTO specimen VALUES (
    150001, 100001, 4045667,      -- Blood specimen
    32817, '2024-06-15', NULL,
    5, 8587,                      -- 5 mL
    4236402,                      -- Antecubital vein
    NULL, 'BARCODE_123456',
    'MAU_MAU', 'mL', 'tinh_mach_khuu_tay', NULL
);

-- Xét nghiệm Glucose từ mẫu máu này
-- (liên kết qua person_id + measurement_date + logic ETL)
```

> **注:** CDM 5.4 では、SPECIMEN には MEASUREMENT への直接の FK がありません。リンクは通常、person_id + date または FACT_RELATIONSHIP を介して行われます。

---

## 3. 注意 — 臨床メモ

＃＃＃３．１．注テーブルの構造

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `note_id` |整数 | ✅PK |固有の ID |
| `person_id` |整数 | ✅FK |患者 |
| `note_date` |日付 | ✅ |メモの日付 |
| `note_datetime` |日時 | | |
| `note_type_concept_id` |整数 | ✅ |ノートの種類 |
| `note_class_concept_id` |整数 | ✅ |分類 |
| `note_title` | VARCHAR(250) | |タイトル |
| `note_text` |クロブ | ✅ |コンテンツ |
| `encoding_concept_id` |整数 | ✅ |エンコーディング (UTF-8) |
| `language_concept_id` |整数 | ✅ |言語 |
| `provider_id` |整数 | FK |医師はこう書いています |
| `visit_occurrence_id` |整数 | FK |訪問 |
| `visit_detail_id` |整数 | FK | |
| `note_source_value` | VARCHAR(50) | | |
| `note_event_id` |ビッグINT | | ⭐ CDM 5.4 |
| `note_event_field_concept_id` |整数 | | ⭐ CDM 5.4 |

＃＃＃３．２．共通の note_class_concept_id

|コンセプトID |ノートクラス |ベトナム語 |
|----------|-----------|----------|
| 44814637 |退院概要 |退院概要 |
| 44814638 |救急科のメモ |緊急時の注意事項 |
| 44814639 |入院中のメモ |搭乗メモ |
| 44814640 |外来メモ |外来メモ |
| 44814641 |病理レポート |病理学的結果 |
| 44814642 |放射線科レポート | X線/CT結果 |
| 44814643 |手術記録 |手術記録 |

＃＃＃３．３．たとえば

```sql
-- Tóm tắt xuất viện
INSERT INTO note (
    note_id, person_id, note_date,
    note_type_concept_id, note_class_concept_id,
    note_title, note_text,
    encoding_concept_id, language_concept_id,
    provider_id, visit_occurrence_id
) VALUES (
    160001, 100001, '2024-06-20',
    32817,                            -- EHR
    44814637,                         -- Discharge summary
    'TÓM TẮT XUẤT VIỆN',
    'Bệnh nhân nam, 55 tuổi, nhập viện vì đau ngực. '
    || 'Chẩn đoán: Nhồi máu cơ tim cấp. '
    || 'Đã can thiệp mạch vành, đặt 2 stent. '
    || 'Xuất viện ngày 20/06/2024 với đơn thuốc: '
    || 'Aspirin 81mg, Clopidogrel 75mg, Atorvastatin 40mg. '
    || 'Tái khám sau 1 tháng.',
    32678,                            -- UTF-8
    4181730,                          -- Vietnamese
    5001, 50001
);
```

---

## 4.NOTE_NLP — NLP 処理の結果

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `note_nlp_id` |ビッグINT | ✅PK | ID |
| `note_id` |整数 | ✅FK |オリジナルノート |
| `section_concept_id` |整数 | |セクション (HPI、評価...) |
| `snippet` | VARCHAR(250) | |抜粋テキスト |
| `offset` | VARCHAR(50) | |メモ内の場所 |
| `lexical_variant` | VARCHAR(250) | ✅ |ルート単語/フレーズ |
| `note_nlp_concept_id` |整数 | ✅ |コンセプトの発見 |
| `note_nlp_source_concept_id` |整数 | | |
| `nlp_system` | VARCHAR(250) | |名前 NLP ツール |
| `nlp_date` |日付 | ✅ | NLP 実行日 |
| `nlp_datetime` |日時 | | |
| `term_exists` | VARCHAR(1) | | Y/N — 確認または拒否 |
| `term_temporal` | VARCHAR(50) | |過去/現在/未来 |
| `term_modifiers` | VARCHAR(2000) | |修飾子 (否定、ファミリー...) |

```sql
-- NLP phát hiện "Nhồi máu cơ tim" từ tóm tắt xuất viện
INSERT INTO note_nlp (
    note_nlp_id, note_id,
    snippet, offset, lexical_variant,
    note_nlp_concept_id,
    nlp_system, nlp_date,
    term_exists, term_temporal
) VALUES (
    170001, 160001,
    'Chẩn đoán: Nhồi máu cơ tim cấp',
    '120-153',
    'nhồi máu cơ tim cấp',
    4329847,                          -- SNOMED: AMI
    'cTAKES-VN', '2024-07-01',
    'Y',                              -- Có (không phải negation)
    'Present'                         -- Hiện tại
);
```

---

## 5. どのテーブルをいつ使用するか?

```
  Dữ liệu gốc
       │
       ├── Thiết bị gắn/cấy trên BN ──→ DEVICE_EXPOSURE
       │   (stent, pacemaker, kính)
       │
       ├── Mẫu bệnh phẩm ──────────→ SPECIMEN
       │   (máu, nước tiểu, mô)
       │
       ├── Văn bản tự do ───────────→ NOTE
       │   (tóm tắt xuất viện,
       │    biên bản phẫu thuật)
       │
       └── Kết quả NLP từ NOTE ─────→ NOTE_NLP
           (concepts phát hiện tự động)
```

---

## 概要

1. **DEVICE_EXPOSURE**: 埋め込まれた/取り付けられた医療機器、トレースに UDI を使用します
2. **検体**: 患者サンプル、測定に間接的にリンクされます。
3. **注意**: 自由テキストの臨床ノート、ベトナム語サポート
4. **NOTE_NLP**: NLP 分析結果、自動コンセプト検出
5. CDM 5.4 が追加されました `production_id` (デバイス)、 `note_event_id` (注)

**次の記事:** DEATH、EPISODE、EPISODE_EVENT — 特別なイベント。

---

## 参考文献

- [OMOP CDM 5.4 — DEVICE_EXPOSURE](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEVICE_EXPOSURE)
- [OMOP CDM 5.4 — SPECIMEN](https://ohdsi.github.io/CommonDataModel/cdm54.html#SPECIMEN)
- [OMOP CDM 5.4 — NOTE](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE)
- [OMOP CDM 5.4 — NOTE_NLP](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE_NLP)
