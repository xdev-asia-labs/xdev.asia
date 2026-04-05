---
id: 019d8b33-bb02-7002-c002-ee0200000002
title: "Bài 2: Dữ liệu Y tế — DICOM, HL7 FHIR & Privacy"
slug: bai-2-du-lieu-y-te-dicom-fhir
description: >-
  Medical data formats: DICOM images, HL7 FHIR. EHR systems. De-identification. HIPAA compliance. Data pipeline cho medical AI.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng AI Y tế & Medical Data"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3039" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3039)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="220" x2="1100" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="250" x2="1050" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI &amp; ML — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Dữ liệu Y tế — DICOM, HL7 FHIR &amp;</tspan>
      <tspan x="60" dy="42">Privacy</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI trong Y tế &amp; Healthcare: Ứng dụng Thực chiến</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng AI Y tế &amp; Medical Data</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> Dữ liệu y tế không giống bất kỳ dữ liệu nào bạn từng làm việc. Bài này giải thích **vì sao** — và cách làm việc với nó đúng cách từ ngày đầu.

---

## 1. DICOM — Tiêu chuẩn hình ảnh y tế

**DICOM** (Digital Imaging and Communications in Medicine) là chuẩn quốc tế lưu trữ và truyền tải hình ảnh y tế. Ra đời 1993, ngày nay toàn bộ bệnh viện trên thế giới đều dùng DICOM.

### 1.1. Cấu trúc file DICOM

DICOM không phải chỉ là hình ảnh — nó là **hình ảnh + metadata**:

```
File DICOM (.dcm)
├── File Meta Information
│   ├── Transfer Syntax UID   (cách encode dữ liệu pixel)
│   └── SOP Class UID         (loại hình ảnh: CT, MRI, X-ray...)
│
└── Data Set (hàng trăm tags)
    ├── Patient Info
    │   ├── (0010,0010) PatientName     = "Nguyen^Van^A"
    │   ├── (0010,0020) PatientID       = "BN-2024-001"
    │   ├── (0010,0030) PatientBirthDate = "19650315"
    │   └── (0010,0040) PatientSex      = "M"
    │
    ├── Study Info
    │   ├── (0020,000D) StudyInstanceUID
    │   ├── (0008,0020) StudyDate       = "20240115"
    │   └── (0008,1030) StudyDescription = "CHEST AP"
    │
    ├── Image Info
    │   ├── (0028,0010) Rows            = 2048
    │   ├── (0028,0011) Columns         = 2048
    │   ├── (0028,0030) PixelSpacing    = [0.175, 0.175] mm/pixel
    │   ├── (0028,1050) WindowCenter    = 40
    │   ├── (0028,1051) WindowWidth     = 400
    │   └── (0028,0103) PixelRepresentation = 1 (signed integers)
    │
    └── Pixel Data
        └── (7FE0,0010) PixelData = [raw 12-bit pixel values...]
```

### 1.2. Đọc DICOM với pydicom

```python
import pydicom
import numpy as np
import matplotlib.pyplot as plt

# Đọc file DICOM
dcm = pydicom.dcmread("chest_xray.dcm")

# Xem metadata
print(f"Patient: {dcm.PatientName}")
print(f"Study Date: {dcm.StudyDate}")
print(f"Modality: {dcm.Modality}")       # CR (X-ray), CT, MR, US...
print(f"Image size: {dcm.Rows} x {dcm.Columns}")
print(f"Pixel spacing: {dcm.PixelSpacing} mm/pixel")

# Lấy pixel array (giá trị thô — chưa phải HU units!)
raw_pixels = dcm.pixel_array
print(f"Pixel shape: {raw_pixels.shape}")
print(f"Pixel dtype: {raw_pixels.dtype}")  # Thường là int16 cho CT
print(f"Min/Max values: {raw_pixels.min()} / {raw_pixels.max()}")

# Chuyển sang Hounsfield Units (HU) cho CT
# Công thức: HU = pixel_value * RescaleSlope + RescaleIntercept
def to_hounsfield_units(dcm_file):
    pixels = dcm_file.pixel_array.astype(np.float32)
    slope = float(dcm_file.RescaleSlope) if hasattr(dcm_file, 'RescaleSlope') else 1.0
    intercept = float(dcm_file.RescaleIntercept) if hasattr(dcm_file, 'RescaleIntercept') else 0.0
    return pixels * slope + intercept

hu_image = to_hounsfield_units(dcm)

# HU reference values:
# Air: -1000 HU | Lung: -500 HU | Fat: -100 HU
# Water/Soft tissue: 0-80 HU | Blood: 40-80 HU | Bone: 400-1000 HU
```

### 1.3. Windowing — Cốt lõi của Medical Image Display

Màn hình chỉ hiển thị 256 mức xám, nhưng CT có ~4000 mức HU. **Windowing** chọn range HU cần xem:

```python
def apply_windowing(image_hu: np.ndarray, window_center: int, window_width: int) -> np.ndarray:
    """
    Window Center (WC) và Window Width (WW) cho các mô khác nhau:
    
    Phổi:       WC=-600, WW=1500  (thấy cấu trúc phổi chi tiết)
    Ổ bụng:    WC=40,   WW=400   (thấy gan, lách, thận)
    Não:        WC=40,   WW=80    (thấy hematoma)
    Xương:      WC=400,  WW=1800  (thấy gãy xương)
    """
    lower = window_center - window_width / 2
    upper = window_center + window_width / 2

    # Clip và normalize về [0, 1]
    windowed = np.clip(image_hu, lower, upper)
    normalized = (windowed - lower) / (upper - lower)
    return normalized

# Hiển thị cùng một CT scan với 3 window settings khác nhau
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

windows = [
    ("Lung Window", -600, 1500),
    ("Soft Tissue", 40, 400),
    ("Bone Window", 400, 1800),
]

for ax, (title, wc, ww) in zip(axes, windows):
    windowed = apply_windowing(hu_image, wc, ww)
    ax.imshow(windowed, cmap='gray')
    ax.set_title(f"{title}\nWC={wc}, WW={ww}")
    ax.axis('off')

plt.tight_layout()
plt.savefig("windowing_comparison.png", dpi=150)
```

---

## 2. HL7 FHIR — Chuẩn trao đổi dữ liệu lâm sàng

**HL7 FHIR** (Fast Healthcare Interoperability Resources) là chuẩn hiện đại nhất để trao đổi dữ liệu giữa các hệ thống y tế. Không phải hình ảnh — đây là **dữ liệu lâm sàng có cấu trúc**.

### 2.1. Resources cốt lõi

FHIR tổ chức dữ liệu thành "Resources" — từng loại thực thể có schema riêng:

```
FHIR Resources (chỉ các resource quan trọng nhất cho AI)
│
├── Patient          — thông tin bệnh nhân
├── Observation      — vital signs, lab results, measurements
├── Condition        — diagnoses, problems (mã ICD-10/11)
├── MedicationRequest— đơn thuốc
├── Procedure        — phẫu thuật, can thiệp (mã CPT/ICD)
├── DiagnosticReport — báo cáo xét nghiệm, hình ảnh
├── Encounter        — lần khám/nhập viện
└── AllergyIntolerance — dị ứng
```

### 2.2. Làm việc với FHIR API

```python
import requests
from datetime import datetime, timedelta

# FHIR R4 RESTful API
FHIR_SERVER = "https://r4.smarthealthit.org"  # Public test server

def get_patient_observations(patient_id: str, code: str) -> list:
    """
    Lấy lab results của bệnh nhân
    code: LOINC code — chuẩn mã cho lab tests
    
    Ví dụ LOINC codes:
    - 2339-0: Glucose [Mass/volume] in Blood
    - 4548-4: Hemoglobin A1c/Hemoglobin.total in Blood (HbA1c)
    - 2160-0: Creatinine [Mass/volume] in Serum or Plasma
    - 718-7:  Hemoglobin [Mass/volume] in Blood
    """
    response = requests.get(
        f"{FHIR_SERVER}/Observation",
        params={
            "patient": patient_id,
            "code": code,
            "_sort": "-date",      # Mới nhất trước
            "_count": 100,
        },
        headers={"Accept": "application/fhir+json"}
    )
    response.raise_for_status()
    bundle = response.json()

    observations = []
    for entry in bundle.get("entry", []):
        obs = entry["resource"]
        observations.append({
            "date": obs.get("effectiveDateTime"),
            "value": obs.get("valueQuantity", {}).get("value"),
            "unit": obs.get("valueQuantity", {}).get("unit"),
            "status": obs.get("status"),
        })

    return observations

# Ví dụ: lấy lịch sử HbA1c của bệnh nhân để dự đoán tiểu đường
hba1c_history = get_patient_observations("patient-123", "4548-4")
# [{"date": "2024-01-15", "value": 8.2, "unit": "%", "status": "final"},
#  {"date": "2023-10-10", "value": 7.9, "unit": "%", "status": "final"}, ...]

def build_patient_ai_features(patient_id: str) -> dict:
    """Tổng hợp features từ FHIR cho ML model"""
    # Latest vitals
    bp_readings = get_patient_observations(patient_id, "55284-4")  # Blood pressure
    glucose = get_patient_observations(patient_id, "2339-0")
    hba1c = get_patient_observations(patient_id, "4548-4")
    creatinine = get_patient_observations(patient_id, "2160-0")

    return {
        "latest_systolic": bp_readings[0]["value"] if bp_readings else None,
        "latest_glucose": glucose[0]["value"] if glucose else None,
        "latest_hba1c": hba1c[0]["value"] if hba1c else None,
        "hba1c_trend": (
            hba1c[0]["value"] - hba1c[-1]["value"]
            if len(hba1c) >= 2 else 0
        ),
        "latest_creatinine": creatinine[0]["value"] if creatinine else None,
        # ... thêm nhiều features khác
    }
```

---

## 3. De-identification — Ẩn danh hóa dữ liệu y tế

### 3.1. Tại sao de-identification khó hơn bạn nghĩ

**Sai lầm phổ biến**: "Chỉ cần xóa tên và ngày sinh là xong."

**Thực tế**: Re-identification attack có thể tái xác định danh tính từ:
- Tổ hợp tuổi + giới tính + mã vùng → 87% người Mỹ có thể bị định danh (Sweeney, 2000)
- Rare diagnosis combination: "50 tuổi + ung thư tuyến nước bọt + đột quỵ nhỏ" → gần như unique
- Wearable data patterns → nhận ra người từ dáng đi
- Medical image metadata (ngày chụp, thiết bị)

### 3.2. HIPAA Safe Harbor — 18 identifiers cần xóa

```python
# HIPAA Safe Harbor method: xóa 18 loại thông tin nhận dạng
HIPAA_PHI_IDENTIFIERS = [
    "name",                   # Tên
    "geographic_data",        # Địa chỉ (chỉ giữ 3 digits zip code)
    "dates",                  # Ngày (chỉ giữ năm — QUAN TRỌNG!)
    "phone_numbers",          # Số điện thoại
    "fax_numbers",            # Fax
    "email_addresses",        # Email
    "ssn",                    # Số an sinh xã hội
    "medical_record_numbers", # Mã hồ sơ bệnh án
    "health_plan_numbers",    # Số bảo hiểm
    "account_numbers",        # Số tài khoản
    "certificate_numbers",    # Số chứng chỉ
    "vehicle_identifiers",    # Biển số xe
    "device_identifiers",     # Serial number thiết bị
    "urls",                   # Website URLs
    "ip_addresses",           # Địa chỉ IP
    "biometric_identifiers",  # Vân tay, giọng nói, mống mắt
    "full_face_photos",       # Ảnh mặt
    "unique_identifiers",     # Bất kỳ ID duy nhất nào khác
]

import re
from dateutil import parser as dateparser

def deidentify_clinical_note(text: str) -> str:
    """
    De-identify text sử dụng NLP + regex
    Đây là ví dụ đơn giản — thực tế dùng tools như:
    - Microsoft Presidio (open source)
    - AWS Comprehend Medical + AWS Macie
    - Google Cloud Healthcare DLP API
    """
    # Xóa các patterns thông thường với regex
    patterns = {
        # Tên (giả sử đại tự hóa)
        r'\b[A-Z][a-z]+ [A-Z][a-z]+\b': '[NAME]',
        # Số điện thoại VN
        r'\b(0[3-9]\d{8}|\+84[3-9]\d{8})\b': '[PHONE]',
        # Email
        r'\b[\w.+-]+@[\w-]+\.[a-z]{2,}\b': '[EMAIL]',
        # Ngày tháng
        r'\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b': '[DATE]',
        # Tuổi chính xác (giữ age range thay vì exact age)
        r'\b(\d+)\s*(tuổi|years?\s*old)\b': lambda m: f"[AGE_{(int(m.group(1))//10)*10}s]",
    }

    deidentified = text
    for pattern, replacement in patterns.items():
        if callable(replacement):
            deidentified = re.sub(pattern, replacement, deidentified, flags=re.IGNORECASE)
        else:
            deidentified = re.sub(pattern, replacement, deidentified, flags=re.IGNORECASE)

    return deidentified

# Input:  "Bệnh nhân Nguyễn Văn A, 65 tuổi, nhập viện ngày 15/01/2024. SĐT: 0912345678"
# Output: "Bệnh nhân [NAME], [AGE_60s], nhập viện ngày [DATE]. SĐT: [PHONE]"
```

### 3.3. De-identification cho DICOM images

```python
import pydicom
from pydicom.uid import generate_uid

def deidentify_dicom(input_path: str, output_path: str, patient_pseudoid: str):
    """
    De-identify DICOM file theo DICOM Supplement 142 (Clinical Trial De-identification Profiles)
    """
    dcm = pydicom.dcmread(input_path)

    # Tags cần xóa hoặc thay thế (danh sách đầy đủ hơn nhiều trong thực tế)
    tags_to_blank = [
        (0x0010, 0x0010),   # PatientName
        (0x0010, 0x0030),   # PatientBirthDate
        (0x0010, 0x0040),   # PatientSex — có thể giữ cho bias evaluation
        (0x0008, 0x0080),   # InstitutionName
        (0x0008, 0x1070),   # OperatorsName
        (0x0008, 0x1048),   # PhysiciansOfRecord
        (0x0010, 0x1000),   # OtherPatientIDs
    ]

    for tag in tags_to_blank:
        if tag in dcm:
            del dcm[tag]

    # Thay PatientID bằng pseudonymized ID
    dcm.PatientID = patient_pseudoid

    # Chỉ giữ năm, xóa tháng ngày
    if hasattr(dcm, 'StudyDate'):
        dcm.StudyDate = dcm.StudyDate[:4] + "0101"  # Keep year only

    # Tạo UIDs mới (break linkage giữa các study)
    dcm.StudyInstanceUID = generate_uid()
    dcm.SeriesInstanceUID = generate_uid()
    dcm.SOPInstanceUID = generate_uid()

    # QUAN TRỌNG: Xóa private tags (manufacturer-specific metadata)
    # Có thể chứa thông tin nhận dạng không chuẩn
    dcm.remove_private_tags()

    dcm.save_as(output_path, write_like_original=False)
    print(f"De-identified DICOM saved to {output_path}")
```

---

## 4. EHR Systems — Hiểu môi trường dữ liệu thực tế

### 4.1. Các hệ thống EHR phổ biến

| HIS/EHR | Thị trường | Định dạng Export |
|---------|-----------|-----------------|
| **Epic** | 33% bệnh viện Mỹ | FHIR R4, HL7 v2 |
| **Oracle Health (Cerner)** | 25% bệnh viện Mỹ | FHIR R4, CCDs |
| **VNPT-HIS** | Nhiều BV VN | HL7 v2, CSV |
| **BV Bạch Mai HIS** | Bạch Mai, VN | Proprietary + HL7 |
| **Medisoft** | Phòng khám nhỏ | CSV, custom |

### 4.2. Vấn đề thực tế khi làm việc với EHR data

```python
# Những điều bạn sẽ gặp khi nhận EHR data thực tế:

problems = {
    "missing_data": """
        Lab result thiếu: bệnh nhân không làm xét nghiệm hoặc chưa import
        Vitals gap: không điều dưỡng nhập giữa các ca
        MCAR vs MAR vs MNAR — missing pattern quan trọng hơn missing rate!
        
        MCAR = Missing Completely At Random (có thể impute an toàn)
        MAR = Missing At Random (cần cẩn thận)
        MNAR = Missing Not At Random (bias nghiêm trọng — BN nặng thường miss labs)
    """,

    "inconsistent_units": """
        Glucose: một chỗ ghi mmol/L, chỗ khác mg/dL (nhân/chia 18.016!)
        Weight: kg vs lbs
        Creatinine: mg/dL vs μmol/L
        → Cần unit normalization pipeline nghiêm túc
    """,

    "free_text_mess": """
        "BN khó thở 3 ngày, SOB on exertion, DOE x 3d"
        "Pt c/o dyspnea 3 days, worsening with activity"
        → Cùng một ý, viết 100 cách khác nhau
        → NLP cần xử lý: abbreviations, typos, bilingual mixing (VN+EN)
    """,

    "temporal_issues": """
        Timezone: bệnh viện dùng server time khác nhau
        Backdating: bác sĩ nhập lại sau 3 ngày
        Overlapping encounters: emergency + inpatient cùng lúc
    """,

    "icd_coding_errors": """
        ICD-10 được code bởi billing coder, không phải bác sĩ
        Over-coding (để maximize reimbursement)
        Under-coding (để tránh audit)
        → Training label quality phụ thuộc vào billing accuracy!
    """
}
```

---

## 5. Xây dựng Medical Data Pipeline cơ bản

```python
from pathlib import Path
import pandas as pd
import pydicom
import torch
from torch.utils.data import Dataset
from torchvision import transforms

class MedicalDataPipeline:
    """
    Pipeline đơn giản: DICOM files → ML-ready tensors
    """
    def __init__(self, dicom_dir: str, labels_csv: str):
        self.dicom_dir = Path(dicom_dir)
        self.labels = pd.read_csv(labels_csv)

    def load_and_preprocess(self, patient_id: str) -> np.ndarray:
        """Load DICOM, apply windowing, normalize cho model input"""
        dcm_path = self.dicom_dir / f"{patient_id}.dcm"
        dcm = pydicom.dcmread(dcm_path)

        # Convert to HU
        pixels = self._to_hu(dcm)

        # Apply lung window (ví dụ cho chest X-ray AI)
        pixels = apply_windowing(pixels, window_center=-600, window_width=1500)

        # Resize to model input (224x224 cho ResNet)
        from PIL import Image
        img = Image.fromarray((pixels * 255).astype(np.uint8))
        img = img.convert("RGB")  # Grayscale → 3 channels (cho ImageNet pretrained)
        img = img.resize((224, 224), Image.BILINEAR)

        return np.array(img)

    def _to_hu(self, dcm) -> np.ndarray:
        pixels = dcm.pixel_array.astype(np.float32)
        slope = float(getattr(dcm, 'RescaleSlope', 1.0))
        intercept = float(getattr(dcm, 'RescaleIntercept', 0.0))
        return pixels * slope + intercept

class ChestXrayDataset(Dataset):
    def __init__(self, df: pd.DataFrame, dicom_dir: str, transform=None, label_cols: list = None):
        self.df = df.reset_index(drop=True)
        self.pipeline = MedicalDataPipeline(dicom_dir, None)
        self.transform = transform
        self.label_cols = label_cols or []

    def __len__(self):
        return len(self.df)

    def __getitem__(self, idx):
        row = self.df.iloc[idx]
        image = self.pipeline.load_and_preprocess(row["patient_id"])

        if self.transform:
            image = self.transform(image)

        labels = torch.FloatTensor([row[col] for col in self.label_cols])
        return image, labels
```

---

## 6. Tổng kết & Bài tập

Sau bài này, bạn nên nắm được:
- ✅ DICOM structure: tags, pixel data, Hounsfield Units
- ✅ Windowing: tại sao cần và cách implement
- ✅ FHIR R4: Resources chính, REST API
- ✅ De-identification: HIPAA Safe Harbor, 18 identifiers
- ✅ Những vấn đề thực tế của EHR data

**Bài 3** sẽ đi vào preprocessing pipeline hoàn chỉnh cho medical images — normalization, augmentation đúng cách, và tại sao flip dọc X-ray ngực là sai về mặt lâm sàng.

---

## Bài tập

1. Download một file DICOM sample từ [TCIA (The Cancer Imaging Archive)](https://www.cancerimagingarchive.net/). Mở bằng pydicom và in ra 10 tags quan trọng nhất.

2. Viết function `apply_windowing` với parameter validation — ném exception nếu window_width ≤ 0 hoặc image không phải HU range (-1024 đến 3000).

3. Truy cập FHIR public test server (`https://r4.smarthealthit.org`). Dùng Python requests để lấy danh sách Conditions của patient `87a339d0-8cae-418e-89c7-8651e6aab3c6`. ICD codes là gì?

## 2. Kiến trúc & Nguyên lý

### Core Architecture

```python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. Thực hành

### Setup

```bash
pip install torch transformers datasets
```

### Training Pipeline

```python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
```

---

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Architecture | Phù hợp với bài toán |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
