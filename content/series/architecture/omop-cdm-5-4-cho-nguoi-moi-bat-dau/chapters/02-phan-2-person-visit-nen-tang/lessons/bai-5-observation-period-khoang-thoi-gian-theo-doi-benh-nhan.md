---
id: 019f1a00-a105-7b01-e001-omopcdm54005
title: "Bài 5: OBSERVATION_PERIOD — Khoảng thời gian theo dõi bệnh nhân"
slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
description: >-
  Ý nghĩa của OBSERVATION_PERIOD, tại sao đây là bảng bắt buộc,
  cách xác định start/end date từ dữ liệu nguồn, ảnh hưởng đến
  tính toán incidence/prevalence, và các quy ước ETL.
duration_minutes: 45
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Person & Visit — Nền tảng dữ liệu"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 5</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">OBSERVATION_PERIOD — Khoảng</tspan>
    <tspan x="60" dy="42">thời gian theo dõi bệnh nhân</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Person &amp; Visit — Nền tảng dữ liệu</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**OBSERVATION_PERIOD** là bảng mà nhiều người mới hay bỏ qua — nhưng nó cực kỳ quan trọng. Bảng này trả lời câu hỏi: **"Từ khi nào đến khi nào chúng ta có dữ liệu về bệnh nhân này?"**

Nếu bệnh nhân không có OBSERVATION_PERIOD, ta không thể phân biệt: "bệnh nhân không bị bệnh" hay "bệnh nhân bị bệnh nhưng không đến khám (nên không có dữ liệu)".

---

## 1. Tại sao cần OBSERVATION_PERIOD?

### 1.1. Vấn đề "absence vs missing"

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

**OBSERVATION_PERIOD** cho biết khoảng thời gian bệnh nhân "nằm trong tầm quan sát" của nguồn dữ liệu:

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

### 1.2. Ảnh hưởng đến phân tích

| Phân tích | Không có OP | Có OP |
|-----------|-------------|-------|
| **Incidence rate** | Sai (mẫu số không chính xác) | Đúng (biết person-time at risk) |
| **Prevalence** | Sai (đếm không đủ) | Đúng (biết tổng population) |
| **Survival analysis** | Không biết censoring time | Time-to-event chính xác |
| **Cohort entry** | Có thể chọn BN ngoài dữ liệu | Chỉ chọn BN trong OP |

---

## 2. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `observation_period_id` | INTEGER | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Tham chiếu PERSON |
| `observation_period_start_date` | DATE | ✅ | Ngày bắt đầu có dữ liệu |
| `observation_period_end_date` | DATE | ✅ | Ngày kết thúc có dữ liệu |
| `period_type_concept_id` | INTEGER | ✅ | Nguồn gốc xác định OP |

### 2.1. period_type_concept_id

| Concept ID | Concept Name | Mô tả |
|-----------|--------------|-------|
| 32817 | EHR | Xác định từ EHR records |
| 32810 | Claim | Xác định từ claims/BHYT |
| 44814724 | Period covering healthcare encounters | Từ encounters |
| 44814725 | Period inferred by algorithm | Thuật toán suy ra |

---

## 3. Cách xác định Observation Period

### 3.1. Từ dữ liệu claims/bảo hiểm

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

### 3.2. Từ dữ liệu EHR

Khi không có thông tin bảo hiểm rõ ràng, tính từ **encounter/visit đầu tiên đến cuối cùng**:

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

### 3.3. Một bệnh nhân có thể có nhiều Observation Periods

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

## 4. Quy tắc quan trọng

### 4.1. Mọi clinical event phải nằm trong Observation Period

```
  OP: ════════════════════════════════════
  2020-01-01                        2024-12-31

      ✅ Visit 2020-03-15 (trong OP)
      ✅ Condition 2022-06-10 (trong OP)
      ❌ Drug Exposure 2019-05-10 (NGOÀI OP!) → Cảnh báo data quality
```

**ACHILLES data quality checks**: kiểm tra xem có clinical events nào nằm ngoài OBSERVATION_PERIOD không.

### 4.2. Observation Periods không được chồng lấp

Cho cùng 1 person_id, các OP phải **thứ tự thời gian, không overlap**:

```
  ✅ ĐÚng:
  OP1: ═══════    OP2: ═══════════
  2018-01  2019-06    2020-01  2024-12

  ❌ SAI (overlap):
  OP1: ═══════════════
  OP2:       ═══════════════
```

### 4.3. Quy ước đặc biệt

| Tình huống | Xử lý |
|-----------|-------|
| BN chỉ đến 1 lần | start_date = end_date = ngày khám |
| BN tử vong | end_date = ngày tử vong |
| Gap < 32 ngày (Claim) | Thường gộp thành 1 OP |
| Nhiều nguồn overlap | Gộp thành OP lớn nhất |

---

## 5. Ứng dụng trong phân tích

### 5.1. Tính Person-Time at Risk

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

### 5.2. Lọc bệnh nhân "đủ dữ liệu"

```sql
-- Chỉ chọn BN có ≥ 1 năm follow-up
SELECT person_id
FROM observation_period
WHERE observation_period_end_date - observation_period_start_date >= 365
GROUP BY person_id;
```

### 5.3. Kiểm tra data quality

```sql
-- Tìm events nằm ngoài observation period
SELECT
    'CONDITION' AS event_type,
    co.person_id,
    co.condition_start_date AS event_date
FROM condition_occurrence co
LEFT JOIN observation_period op
    ON co.person_id = op.person_id
    AND co.condition_start_date
        BETWEEN op.observation_period_start_date
            AND op.observation_period_end_date
WHERE op.observation_period_id IS NULL;
```

---

## 6. Ví dụ hoàn chỉnh

```sql
-- OBSERVATION_PERIOD cho bệnh viện VN
INSERT INTO observation_period (
    observation_period_id,
    person_id,
    observation_period_start_date,
    observation_period_end_date,
    period_type_concept_id
) VALUES
    -- BN 100001: có BHYT từ 2020 đến 2024
    (1, 100001, '2020-01-01', '2024-12-31', 32810),
    -- BN 100002: đến khám 3 lần trong 2023
    (2, 100002, '2023-02-15', '2023-11-20', 32817),
    -- BN 100003: 2 giai đoạn khác nhau
    (3, 100003, '2019-03-10', '2020-06-30', 32817),
    (4, 100003, '2022-01-15', '2024-06-30', 32817);
```

---

## Tổng kết

1. **OBSERVATION_PERIOD** = khoảng thời gian bệnh nhân "có dữ liệu" trong hệ thống
2. Phân biệt **"không bị bệnh"** vs **"không có dữ liệu"**
3. **Bắt buộc** cho mọi person — cần ít nhất 1 OP per person
4. **Không overlap** giữa các OP cùng person_id
5. **Mọi clinical events** phải nằm trong OP
6. **Ứng dụng chính**: tính person-time, incidence rate, prevalence, cohort definition

**Bài tiếp theo:** VISIT_OCCURRENCE & VISIT_DETAIL — cách OMOP CDM ghi nhận mỗi lần bệnh nhân tiếp xúc với hệ thống y tế.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — OBSERVATION_PERIOD](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION_PERIOD)
- [The Book of OHDSI — Observation Periods](https://ohdsi.github.io/TheBookOfOhdsi/CommonDataModel.html)
