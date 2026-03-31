---
id: 019e0b20-b205-7a01-e001-f1a7f8000005
title: "Bài 5: Usagi — Mapping mã nguồn sang OMOP Standard Concepts"
slug: bai-5-usagi-mapping-ma-nguon-sang-omop-standard-concepts
description: >-
  Cài đặt Usagi, import source codes, sử dụng thuật toán term similarity
  để tìm mapping candidates, review và approve mappings thủ công,
  xử lý các trường hợp đặc biệt (ICD-10 Việt Nam, thuốc nội địa),
  export mapping file cho ETL pipeline.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: ETL & Chuẩn hóa Dữ liệu"
course:
  id: 019e0b20-b200-7a01-e001-f1a7f8000001
  title: "OHDSI & OMOP CDM — Phân tích Dữ liệu Y tế Toàn diện"
  slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
---

![Bài 5: Usagi — Mapping Source Codes](/storage/uploads/2026/03/ohdsi-bai-5-usagi-mapping.png)

## Giới thiệu

Trong quá trình ETL, bước quan trọng nhất là **mapping source codes → Standard Concepts**. Nhiều mã nguồn (ICD-10, mã thuốc nội bộ, mã xét nghiệm bệnh viện) không có sẵn mapping trong Athena.

**Usagi** là công cụ hỗ trợ quá trình mapping thủ công — sử dụng thuật toán term similarity để gợi ý candidates, và cung cấp giao diện cho experts review/approve.

---

## 1. Cài đặt Usagi

### 1.1 Yêu cầu

```bash
# Java 17+
java -version

# Download Usagi từ GitHub
# https://github.com/OHDSI/Usagi/releases

# Download Vocabulary Index (cần thiết để Usagi hoạt động)
# Tải vocabulary từ Athena → Usagi sẽ build index tự động
```

### 1.2 Khởi chạy

```bash
# Chạy Usagi
java -jar Usagi.jar

# Lần đầu: Usagi yêu cầu path đến vocabulary CSV files
# → Chọn thư mục chứa CONCEPT.csv, CONCEPT_RELATIONSHIP.csv, etc.
# → Usagi build Lucene index (~10-20 phút lần đầu)

# Sau khi index xong: Usagi sẵn sàng sử dụng
```

### 1.3 Giao diện chính

```
┌─────────────────────────────────────────────────────────────┐
│  Usagi — Code Mapping Tool                                  │
│                                                             │
│  File  │  Help                                              │
│                                                             │
│  Source Codes          │  Mapping Candidates               │
│  ┌────────────────────┐│  ┌────────────────────────────────┐│
│  │ Code │ Name        ││  │ Concept ID │ Name    │ Score  ││
│  │──────┼─────────────││  │────────────┼─────────┼────────││
│  │ I10  │ Tăng HA     ││  │ 320128     │ Essent  │ 0.85   ││
│  │ E11  │ ĐTĐ type 2 ││  │ 316866     │ Hypert  │ 0.72   ││
│  │ J06  │ NKHHCT      ││  │ 4228112    │ Second  │ 0.65   ││
│  │ K29  │ Viêm DD    ││  │            │         │        ││
│  │ ...  │ ...         ││  │            │         │        ││
│  └────────────────────┘│  └────────────────────────────────┘│
│                        │                                    │
│  Status: [UNCHECKED ▼] │  [Approve] [Flag] [Search]        │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Workflow Usagi

### 2.1 Chuẩn bị Source Codes

```csv
# Tạo file CSV với source codes cần mapping
# Columns bắt buộc: sourceCode, sourceName
# Columns tùy chọn: sourceFrequency, sourceAutoAssignedConceptIds

sourceCode,sourceName,sourceFrequency
I10,"Essential (primary) hypertension",15000
E11.9,"Type 2 diabetes mellitus without complications",12000
J06.9,"Acute upper respiratory infection unspecified",8000
K29.7,"Gastritis unspecified",5000
N18.9,"Chronic kidney disease unspecified",3000
AMLO5,"Amlodipine 5mg tab",10000
MET500,"Metformin 500mg tab",8000
GLUC,"Glucose mau",25000
HBA1C,"HbA1c",15000
```

**Lưu ý cho dữ liệu Việt Nam**:
```csv
# Nếu source codes có tên tiếng Việt, thêm cột English translation
sourceCode,sourceName,sourceNameEnglish,sourceFrequency
I10,"Tăng huyết áp nguyên phát","Essential hypertension",15000
E11.9,"Đái tháo đường type 2","Type 2 diabetes mellitus",12000
J06.9,"Nhiễm khuẩn hô hấp trên cấp","Acute upper respiratory infection",8000
```

### 2.2 Import Source Codes

```
Bước 1: File → Import codes
Bước 2: Chọn CSV file đã chuẩn bị
Bước 3: Map columns:
         - Source code → sourceCode
         - Source name → sourceName
         - Source name English → sourceNameEnglish (nếu có)
         - Source frequency → sourceFrequency
Bước 4: Chọn target domain filter (Condition, Drug, Measurement...)
Bước 5: Click Import → Usagi chạy term similarity search
```

### 2.3 Review Mapping Candidates

```
Cho mỗi source code, Usagi suggests mapping candidates:

Source: I10 — "Essential (primary) hypertension"
┌─────────────┬──────────────────────────────┬───────┬──────────┐
│ Concept ID  │ Concept Name                 │ Score │ Vocab    │
├─────────────┼──────────────────────────────┼───────┼──────────┤
│ 320128      │ Essential hypertension       │ 0.95  │ SNOMED   │ ← Best match
│ 316866      │ Hypertensive disorder        │ 0.75  │ SNOMED   │
│ 4133004     │ Malignant essential HTN      │ 0.72  │ SNOMED   │
│ 4228112     │ Secondary hypertension       │ 0.65  │ SNOMED   │
└─────────────┴──────────────────────────────┴───────┴──────────┘

Actions:
✅ Approve: Xác nhận mapping đúng (chọn concept 320128)
🔍 Search: Tìm thêm concepts nếu candidates không phù hợp
🚩 Flag: Đánh dấu cần review thêm bởi domain expert
❌ Skip: Bỏ qua (concept không có standard mapping)
```

### 2.4 Mapping Status

```
UNCHECKED  → Chưa review
APPROVED   → Đã xác nhận mapping đúng
FLAGGED    → Cần review thêm (gửi cho bác sĩ/chuyên gia)
INVALID    → Không thể mapping (concept không tồn tại trong SNOMED)

Best practice: 
- Luôn đặt APPROVED cho mappings chắc chắn
- FLAGGED cho các trường hợp cần domain expertise
- Tracking: frequency × status = ưu tiên review
```

---

## 3. Xử lý các trường hợp đặc biệt

### 3.1 ICD-10 Việt Nam

```
Vấn đề: ICD-10 Việt Nam có mở rộng nội địa
- ICD-10 quốc tế: I10 (Essential hypertension)
- ICD-10 VN: I10.0, I10.1 (mã mở rộng không có trong OMOP)

Giải pháp:
1. Map I10.0, I10.1 → parent concept I10
2. Hoặc tìm SNOMED concept tương đương trực tiếp
3. Document deviations trong ETL specification
```

### 3.2 Thuốc nội địa

```
Vấn đề: Thuốc Việt Nam có tên thương mại không có trong RxNorm
- "Amlodipin STELLA 5mg" → không có trong RxNorm
- "Metformin Hậu Giang 500mg" → không có trong RxNorm

Giải pháp:
1. Map theo hoạt chất + liều + dạng bào chế
   "Amlodipin STELLA 5mg" → Amlodipine 5 MG Oral Tablet (RxNorm 1332419)
   
2. Sử dụng RxNorm Extension cho thuốc quốc tế
   
3. Nếu hoạt chất không có → map ở mức Ingredient
   "Thuốc ABC" → Ingredient concept trong RxNorm
```

### 3.3 Xét nghiệm nội bộ

```
Vấn đề: Mã xét nghiệm bệnh viện không phải LOINC
- "XN001" = "Glucose máu đói"
- "XN002" = "HbA1c"

Giải pháp trong Usagi:
1. Dùng tên tiếng Anh: "Fasting blood glucose"
2. Usagi search → LOINC 1558-6 (Fasting glucose)
3. Review unit: mg/dL vs mmol/L
4. Approve mapping
```

---

## 4. Export Mapping Results

### 4.1 Export CSV

```
File → Export source_to_concept_map

Output file chứa:
sourceCode,sourceConceptId,sourceVocabularyId,targetConceptId,targetVocabularyId,validStartDate,validEndDate,invalidReason
I10,45566052,ICD10CM,320128,SNOMED,2024-01-01,2099-12-31,
E11.9,45541578,ICD10CM,201826,SNOMED,2024-01-01,2099-12-31,
AMLO5,0,MY_HOSPITAL,1332419,RxNorm,2024-01-01,2099-12-31,
GLUC,0,MY_HOSPITAL,3004410,LOINC,2024-01-01,2099-12-31,
```

### 4.2 Import vào OMOP CDM

```sql
-- Load mapping results vào SOURCE_TO_CONCEPT_MAP
\COPY source_to_concept_map
FROM '/path/to/usagi_export.csv'
WITH (FORMAT csv, HEADER true);

-- Verify mapping
SELECT
  stcm.source_code,
  stcm.source_vocabulary_id,
  c.concept_name AS target_concept,
  c.vocabulary_id AS target_vocabulary
FROM source_to_concept_map stcm
JOIN concept c ON stcm.target_concept_id = c.concept_id
LIMIT 20;
```

---

## 5. Mapping Quality Metrics

### 5.1 Coverage Analysis

```sql
-- Tính coverage: bao nhiêu % source codes đã được mapping?

-- Total distinct source codes
SELECT COUNT(DISTINCT source_code) AS total_source_codes
FROM source_to_concept_map
WHERE source_vocabulary_id = 'MY_HOSPITAL';

-- Mapped codes (target_concept_id > 0)
SELECT COUNT(DISTINCT source_code) AS mapped_codes
FROM source_to_concept_map
WHERE source_vocabulary_id = 'MY_HOSPITAL'
  AND target_concept_id > 0;

-- By frequency (quan trọng hơn)
-- Ví dụ: 80% codes = 95% records
```

### 5.2 Tiêu chí chấp nhận

```
Mục tiêu mapping coverage:
- Conditions (ICD-10): ≥ 95% by frequency
- Drugs: ≥ 90% by frequency
- Measurements: ≥ 90% by frequency
- Procedures: ≥ 85% by frequency

Nếu chưa đạt → focus vào high-frequency unmapped codes
```

---

## 6. Tips và Best Practices

```
1. Bắt đầu với high-frequency codes
   → Sort by sourceFrequency DESC → mapping codes phổ biến trước

2. Sử dụng English translations
   → Usagi term similarity hoạt động tốt nhất với tiếng Anh

3. Batch review theo domain
   → Conditions trước, rồi Drugs, rồi Measurements
   → Mỗi domain cần chuyên gia khác nhau

4. Lưu file Usagi thường xuyên
   → File .usagi format → có thể share và continue mapping

5. Version control mapping files
   → Commit mapping CSV vào Git
   → Track thay đổi qua thời gian

6. Tổ chức mapping review sessions
   → 1 data engineer + 1 bác sĩ/dược sĩ
   → Engineer thao tác Usagi, expert validate clinical correctness

7. Re-run khi vocabulary update
   → Vocabulary mới có thể có mapping tốt hơn
```

---

## Tóm tắt

| Khái niệm | Giải thích |
|-----------|-----------|
| Usagi | Tool mapping source codes → OMOP Standard Concepts |
| Term Similarity | Thuật toán tìm concept gần nhất dựa trên tên |
| APPROVED | Mapping đã được expert xác nhận |
| FLAGGED | Mapping cần review thêm bởi domain expert |
| SOURCE_TO_CONCEPT_MAP | Bảng OMOP CDM lưu custom mappings |
| Coverage | Tỷ lệ source codes đã được mapping thành công |

**Bài tiếp theo**: Xây dựng ETL Pipeline — Từ dữ liệu nguồn sang OMOP CDM
