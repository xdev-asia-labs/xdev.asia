// Rewrite all 5 AI series with detailed, topic-specific content + Mermaid diagrams
// Target: 220-350 lines per lesson (matching Generative AI quality)

import fs from 'fs';
import path from 'path';

const SERIES_BASE = "content/series/ai";

function writeLessonBody(seriesSlug, chapterDir, fileName, body) {
  const filePath = path.join(SERIES_BASE, seriesSlug, "chapters", chapterDir, "lessons", fileName);
  const existing = fs.readFileSync(filePath, 'utf8');
  // Keep frontmatter, replace body
  const fmEnd = existing.indexOf('---', 4);
  const frontmatter = existing.substring(0, fmEnd + 3);
  fs.writeFileSync(filePath, frontmatter + "\n\n" + body.trim() + "\n");
  const lines = (frontmatter + "\n\n" + body.trim() + "\n").split('\n').length;
  console.log(`  ✓ ${fileName} (${lines} lines)`);
}

// =====================================================
// HEALTHCARE AI — 15 lessons
// =====================================================
console.log("=== Healthcare AI ===");
const HC = "ai-trong-y-te-healthcare";

// Bài 1
writeLessonBody(HC, "01-phan-1-nen-tang-ai-y-te-medical-data", "02-bai-1-ai-y-te-tong-quan.md", `
## Giới thiệu

**AI trong Y tế (Healthcare AI)** đang thay đổi hoàn toàn cách chúng ta chẩn đoán bệnh, phát triển thuốc, và chăm sóc bệnh nhân. Từ phát hiện ung thư sớm qua X-ray đến tối ưu hoá lịch trình phẫu thuật — AI đã trở thành công cụ không thể thiếu của y tế hiện đại.

> 💡 FDA đã phê duyệt hơn **800 AI/ML-enabled medical devices** tính đến 2026.

---

## 1. Healthcare AI Landscape

\`\`\`mermaid
mindmap
  root((Healthcare AI))
    Chẩn đoán
      Medical Imaging
      Pathology
      Genomics
    Điều trị
      Drug Discovery
      Treatment Planning
      Robotic Surgery
    Vận hành
      EHR Analytics
      Scheduling
      Revenue Cycle
    Chăm sóc
      Remote Monitoring
      Chatbot Y tế
      Wearables
\`\`\`

---

## 2. Các ứng dụng chính

### 2.1 Medical Imaging AI

\`\`\`mermaid
flowchart LR
    A[X-ray / CT / MRI] --> B[Preprocessing]
    B --> C[AI Model<br/>CNN / ViT]
    C --> D{Kết quả}
    D -->|Normal| E[Báo bình thường]
    D -->|Bất thường| F[Highlight vùng nghi ngờ]
    F --> G[Bác sĩ review + quyết định]
\`\`\`

| Ứng dụng | Accuracy | FDA Status |
|----------|----------|------------|
| Phát hiện ung thư vú (mammography) | ≥94% AUC | Cleared |
| Phát hiện viêm phổi (CXR) | ≥90% AUC | Cleared |
| Đo retinal disease (fundus) | ≥95% AUC | Cleared |
| CT brain hemorrhage | ≥95% AUC | Cleared |
| Skin lesion classification | ≥91% AUC | Cleared |

### 2.2 Clinical NLP

Phân tích hồ sơ bệnh án (EHR) ở dạng text — trích xuất chẩn đoán, thuốc, triệu chứng:

\`\`\`python
# Named Entity Recognition cho y tế
from transformers import pipeline

ner = pipeline("ner", model="d4data/biomedical-ner-all")
text = "Patient has type 2 diabetes and was prescribed Metformin 500mg twice daily."
entities = ner(text)

for ent in entities:
    print(f"{ent['word']:20} → {ent['entity_group']:15} (score: {ent['score']:.3f})")
# diabetes             → DISEASE          (score: 0.987)
# Metformin            → CHEMICAL         (score: 0.995)
# 500mg                → DOSAGE           (score: 0.912)
\`\`\`

### 2.3 Drug Discovery

\`\`\`mermaid
flowchart LR
    A[Target<br/>Identification] --> B[Lead<br/>Discovery]
    B --> C[Lead<br/>Optimization]
    C --> D[Preclinical<br/>Testing]
    D --> E[Clinical<br/>Trials]
    E --> F[FDA<br/>Approval]

    style A fill:#e3f2fd
    style B fill:#e3f2fd
    style C fill:#e3f2fd
    style D fill:#fff3e0
    style E fill:#fff3e0
    style F fill:#e8f5e9
\`\`\`

AI rút ngắn thời gian từ **10-15 năm** xuống **5-7 năm** trong giai đoạn đầu:

| Giai đoạn | Truyền thống | Với AI |
|-----------|-------------|--------|
| Target identification | 2-3 năm | 6-12 tháng |
| Lead discovery | 2-3 năm | 3-6 tháng |
| Lead optimization | 1-2 năm | 6-12 tháng |
| ADMET prediction | Months (wet lab) | Hours (in silico) |

---

## 3. Đạo đức AI trong Y tế

### 3.1 Bias & Fairness

\`\`\`mermaid
flowchart TD
    A[Training Data Bias] --> B[Model Bias]
    B --> C[Disparate Outcomes]
    C --> D[Health Inequality]
    
    E[Mitigation] --> F[Diverse datasets]
    E --> G[Fairness metrics]
    E --> H[Subgroup analysis]
    E --> I[Continuous monitoring]
\`\`\`

**Ví dụ thực tế:**
- Dermatology AI trained chủ yếu trên da sáng → accuracy thấp hơn trên da tối
- Pulse oximeter bias → đo sai SpO2 cho bệnh nhân da tối
- EHR models reflect historical treatment disparities

### 3.2 Privacy & Security

| Regulation | Phạm vi | Yêu cầu chính |
|-----------|---------|---------------|
| HIPAA (US) | Protected Health Information | De-identification, BAA, audit trails |
| GDPR (EU) | Personal data | Consent, right to erasure, DPO |
| HITECH Act | EHR incentives | Breach notification, encryption |
| PIPL (China) | Personal information | Consent, data localization |

### 3.3 Explainability (XAI)

Bác sĩ cần hiểu **tại sao** AI đưa ra quyết định:

\`\`\`python
# Grad-CAM: Visualize vùng ảnh AI tập trung
import torch
from torchvision.models import resnet50

model = resnet50(pretrained=True)
# ... load medical image, forward pass ...

# Grad-CAM highlights vùng bất thường trên X-ray
# → Bác sĩ verify: "AI nhìn đúng vùng phổi phải dưới"
\`\`\`

---

## 4. Regulatory Landscape

### 4.1 FDA Pathway cho AI/ML Medical Devices

\`\`\`mermaid
flowchart TD
    A[AI Medical Device] --> B{Risk Classification}
    B -->|Low Risk<br/>Class I| C[510k Exempt]
    B -->|Moderate Risk<br/>Class II| D[510k Clearance]
    B -->|High Risk<br/>Class III| E[PMA Approval]
    B -->|Novel| F[De Novo Pathway]
    
    D --> G[Predicate Device?]
    G -->|Yes| H[Submit 510k]
    G -->|No| F
    
    style C fill:#e8f5e9
    style D fill:#fff3e0
    style E fill:#ffebee
    style F fill:#e3f2fd
\`\`\`

### 4.2 SaMD — Software as a Medical Device

| SaMD Category | Mô tả | Ví dụ |
|--------------|--------|-------|
| Category I | Inform clinical management | Wellness apps |
| Category II | Drive clinical management | Triage tools |
| Category III | Treat or diagnose | Diagnostic AI |
| Category IV | Critical care decisions | ICU monitoring AI |

---

## 5. Healthcare AI Technology Stack

\`\`\`mermaid
graph TB
    subgraph Data Layer
        A[DICOM Images] 
        B[HL7 FHIR APIs]
        C[EHR Text]
        D[Genomic Data]
    end
    
    subgraph AI Layer
        E[Medical Imaging<br/>CNN, ViT, U-Net]
        F[Clinical NLP<br/>BioBERT, Med-PaLM]
        G[Drug Discovery<br/>GNN, AlphaFold]
        H[Predictive<br/>XGBoost, LSTM]
    end
    
    subgraph Infrastructure
        I[HIPAA Cloud<br/>AWS/GCP/Azure]
        J[Federated Learning]
        K[MLOps Pipeline]
    end
    
    A --> E
    B --> F
    C --> F
    D --> G
    E --> K
    F --> K
    G --> K
    H --> K
    K --> I
    K --> J
\`\`\`

---

## 6. Setup môi trường phát triển

\`\`\`bash
# Tạo virtual environment cho Healthcare AI
python -m venv healthcare-ai
source healthcare-ai/bin/activate

# Core ML packages
pip install torch torchvision
pip install transformers datasets

# Medical-specific packages
pip install pydicom        # DICOM image processing
pip install nibabel        # NIfTI brain imaging
pip install monai          # Medical Open Network for AI
pip install scikit-image   # Image processing
pip install fhirpy         # HL7 FHIR client

# NLP y tế
pip install scispacy
pip install medspacy
python -m spacy download en_core_sci_lg
\`\`\`

---

## 7. Bài tập thực hành

1. Liệt kê 5 ứng dụng AI y tế đã được FDA phê duyệt và phân loại theo SaMD category
2. Phân tích bias tiềm ẩn trong một dataset y tế (ví dụ: MIMIC-IV demographics)
3. So sánh HIPAA vs GDPR trong bối cảnh AI y tế

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Healthcare AI | Đang thay đổi mọi khía cạnh y tế — từ chẩn đoán đến thuốc |
| Medical Imaging | Ứng dụng thành công nhất, 800+ FDA clearances |
| Clinical NLP | Trích xuất thông tin từ hồ sơ bệnh án unstructured |
| Drug Discovery | Rút ngắn 50-70% thời gian giai đoạn đầu |
| Ethics | Bias, privacy, explainability là bắt buộc |
| Regulatory | FDA 510(k), De Novo, PMA — tuỳ risk level |
`);

// Bài 2
writeLessonBody(HC, "01-phan-1-nen-tang-ai-y-te-medical-data", "03-bai-2-du-lieu-y-te-dicom-fhir.md", `
## Giới thiệu

**Dữ liệu y tế** không giống dữ liệu thông thường — đặc biệt về format (DICOM, HL7, FHIR), privacy requirements (HIPAA), và complexity (multimodal: ảnh + text + lab + genetics). Hiểu đúng data pipeline là nền tảng cho mọi dự án Healthcare AI.

---

## 1. Medical Data Formats

\`\`\`mermaid
mindmap
  root((Medical Data))
    Images
      DICOM
      NIfTI
      TIFF WSI
    Structured
      HL7 v2
      HL7 FHIR
      openEHR
    Text
      Clinical Notes
      Discharge Summary
      Pathology Report
    Genomics
      FASTQ
      VCF
      BAM/CRAM
    Time Series
      ECG
      EEG
      Vitals
\`\`\`

---

## 2. DICOM — Digital Imaging and Communications in Medicine

### 2.1 DICOM là gì?

DICOM là **tiêu chuẩn quốc tế** cho ảnh y tế — chứa cả pixel data VÀ metadata (bệnh nhân, máy chụp, protocol).

\`\`\`mermaid
flowchart LR
    A[Máy chụp<br/>CT/MRI/X-ray] -->|DICOM| B[PACS Server]
    B -->|DICOM Query/Retrieve| C[AI Pipeline]
    B -->|DICOM Web| D[Web Viewer]
    C --> E[Preprocessing]
    E --> F[AI Model]
    F --> G[DICOM SR<br/>Structured Report]
    G --> B
\`\`\`

### 2.2 Đọc DICOM với pydicom

\`\`\`python
import pydicom
import numpy as np
import matplotlib.pyplot as plt

# Đọc file DICOM
ds = pydicom.dcmread("chest_xray.dcm")

# Metadata
print(f"Patient Name: {ds.PatientName}")
print(f"Modality: {ds.Modality}")           # CR, CT, MR, ...
print(f"Body Part: {ds.BodyPartExamined}")  # CHEST, HEAD, ...
print(f"Image Size: {ds.Rows} x {ds.Columns}")
print(f"Bits Stored: {ds.BitsStored}")      # 12 hoặc 16
print(f"Pixel Spacing: {ds.PixelSpacing}")  # mm

# Pixel data → numpy array
pixel_array = ds.pixel_array  # shape: (rows, cols) hoặc (slices, rows, cols)
print(f"Pixel range: [{pixel_array.min()}, {pixel_array.max()}]")
print(f"Data type: {pixel_array.dtype}")

# Hiển thị
plt.figure(figsize=(8, 8))
plt.imshow(pixel_array, cmap='gray')
plt.title(f"{ds.Modality} - {ds.BodyPartExamined}")
plt.axis('off')
plt.show()
\`\`\`

### 2.3 Windowing cho CT

CT scan dùng **Hounsfield Units (HU)** — cần windowing để xem các tissue khác nhau:

\`\`\`python
def apply_windowing(image, window_center, window_width):
    """Apply CT windowing to convert HU → display range."""
    img_min = window_center - window_width // 2
    img_max = window_center + window_width // 2
    image = np.clip(image, img_min, img_max)
    image = (image - img_min) / (img_max - img_min)  # Normalize to [0, 1]
    return image

# Các window settings phổ biến
WINDOWS = {
    "lung":     {"center": -600, "width": 1500},
    "mediastinum": {"center": 40, "width": 400},
    "bone":     {"center": 400, "width": 1800},
    "brain":    {"center": 40, "width": 80},
    "liver":    {"center": 60, "width": 150},
    "stroke":   {"center": 32, "width": 8},
}

# Áp dụng lung window
ct_array = ds.pixel_array.astype(np.float32)
ct_hu = ct_array * ds.RescaleSlope + ds.RescaleIntercept
lung_view = apply_windowing(ct_hu, -600, 1500)
\`\`\`

| Window | Center (HU) | Width (HU) | Xem gì |
|--------|-------------|------------|--------|
| Lung | -600 | 1500 | Nhu mô phổi, khí |
| Mediastinum | 40 | 400 | Tim, mạch máu, hạch |
| Bone | 400 | 1800 | Xương, calcification |
| Brain | 40 | 80 | Não — gray/white matter |
| Stroke | 32 | 8 | Nhồi máu sớm |

---

## 3. HL7 FHIR — Healthcare Data Exchange

### 3.1 FHIR là gì?

**FHIR (Fast Healthcare Interoperability Resources)** là tiêu chuẩn RESTful API cho trao đổi dữ liệu y tế.

\`\`\`mermaid
flowchart TD
    subgraph FHIR Resources
        A[Patient]
        B[Observation]
        C[Condition]
        D[MedicationRequest]
        E[DiagnosticReport]
        F[ImagingStudy]
    end
    
    A -->|has| B
    A -->|has| C
    A -->|has| D
    A -->|has| E
    A -->|has| F
    B -->|references| C
    E -->|references| F
\`\`\`

### 3.2 Query FHIR Server

\`\`\`python
from fhirpy import SyncFHIRClient

client = SyncFHIRClient("https://hapi.fhir.org/baseR4")

# Lấy danh sách Patients
patients = client.resources("Patient").limit(10).fetch()
for p in patients:
    name = p.get("name", [{}])[0]
    print(f"{name.get('family', 'N/A')}, {' '.join(name.get('given', []))}")

# Lấy Observations (lab results) cho patient
observations = client.resources("Observation").search(
    patient="Patient/123",
    code="http://loinc.org|2339-0",  # Glucose
    _sort="-date",
    _count=5,
).fetch()

for obs in observations:
    value = obs.get("valueQuantity", {})
    print(f"{obs['effectiveDateTime']}: {value.get('value')} {value.get('unit')}")
\`\`\`

---

## 4. De-identification — Xoá thông tin cá nhân

### 4.1 HIPAA Safe Harbor — 18 identifiers phải xoá

\`\`\`mermaid
flowchart LR
    A[Original<br/>DICOM/EHR] --> B[De-identification<br/>Pipeline]
    B --> C[Names → Removed]
    B --> D[Dates → Shifted]
    B --> E[MRN → Pseudonym]
    B --> F[Faces → Defaced]
    B --> G[GPS → Removed]
    C & D & E & F & G --> H[Safe Dataset<br/>for AI Training]
\`\`\`

\`\`\`python
from pydicom.dataset import Dataset
import hashlib

def deidentify_dicom(ds: Dataset, salt: str = "xdev-2026") -> Dataset:
    """De-identify DICOM following HIPAA Safe Harbor."""
    
    # 1. Remove direct identifiers
    tags_to_remove = [
        "PatientName", "PatientID", "PatientBirthDate",
        "InstitutionName", "ReferringPhysicianName",
        "StudyDate", "AccessionNumber",
        "OtherPatientIDs", "PatientAddress",
        "PatientTelephoneNumbers",
    ]
    for tag in tags_to_remove:
        if hasattr(ds, tag):
            delattr(ds, tag)
    
    # 2. Pseudonymize Patient ID (consistent hash)
    original_id = str(ds.get("PatientID", "unknown"))
    pseudo_id = hashlib.sha256(f"{salt}:{original_id}".encode()).hexdigest()[:16]
    ds.PatientID = pseudo_id
    ds.PatientName = f"ANON-{pseudo_id[:8]}"
    
    # 3. Remove burned-in annotations (pixel data)
    # → Requires dedicated tools like DicomCleaner
    
    return ds
\`\`\`

### 4.2 Text De-identification

\`\`\`python
import medspacy
from medspacy.context import ConTextComponent

nlp = medspacy.load()

# Clinical text de-identification
text = """
Patient John Smith, DOB 01/15/1980, MRN 12345678.
Dr. Jane Doe at Mayo Clinic prescribed Metformin.
Address: 123 Main St, Rochester, MN 55905.
"""

# After de-identification:
# Patient [NAME], DOB [DATE], MRN [ID].
# Dr. [NAME] at [HOSPITAL] prescribed Metformin.
# Address: [ADDRESS].
\`\`\`

---

## 5. Medical AI Data Pipeline

\`\`\`mermaid
flowchart TD
    A[Data Sources] --> B[Ingestion]
    B --> C[De-identification]
    C --> D[Quality Control]
    D --> E[Annotation]
    E --> F[Train/Val/Test Split]
    F --> G[AI Model Training]
    
    subgraph Data Sources
        A1[PACS — DICOM]
        A2[EHR — FHIR]
        A3[Lab — HL7 v2]
    end
    
    subgraph Quality Control
        D1[Missing data check]
        D2[Outlier detection]
        D3[Label verification]
    end
    
    subgraph Annotation
        E1[Radiologist review]
        E2[Multi-reader consensus]
        E3[Semi-auto with AI assist]
    end
\`\`\`

---

## 6. Public Medical Datasets

| Dataset | Modality | Size | Task |
|---------|---------|------|------|
| CheXpert | Chest X-ray | 224K images | 14 pathology classification |
| MIMIC-CXR | Chest X-ray + Reports | 377K images | Multi-label + NLP |
| MIMIC-IV | EHR (structured + text) | 300K admissions | Prediction, NLP |
| NIH ChestXray14 | Chest X-ray | 112K images | 14 disease labels |
| RSNA Pneumonia | Chest X-ray | 30K images | Detection |
| BraTS | Brain MRI | 2000+ cases | Tumor segmentation |
| ISIC | Dermoscopy | 70K images | Skin lesion classification |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| DICOM | Tiêu chuẩn ảnh y tế — pixels + metadata |
| FHIR | RESTful API cho healthcare data exchange |
| Windowing | CT cần window/level để xem từng tissue |
| De-identification | Bắt buộc theo HIPAA — 18 identifiers |
| Pipeline | Ingest → De-ID → QC → Annotate → Train |
| Public datasets | CheXpert, MIMIC, BraTS — dùng để học và benchmark |
`);

// Bài 3
writeLessonBody(HC, "01-phan-1-nen-tang-ai-y-te-medical-data", "04-bai-3-medical-image-processing.md", `
## Giới thiệu

**Medical Image Processing** là bước tiền xử lý quan trọng trước khi đưa ảnh y tế vào model AI. Ảnh y tế khác ảnh thường — 12/16-bit depth, multiple channels (CT slices), đa dạng kích thước, và cần augmentation đặc biệt.

---

## 1. Các loại ảnh y tế

\`\`\`mermaid
graph TD
    subgraph 2D Imaging
        A[X-ray] --> A1[Single image<br/>8-16 bit grayscale]
        B[Mammography] --> B1[High resolution<br/>~4000x3000]
        C[Dermoscopy] --> C1[Color RGB<br/>skin lesions]
        D[Fundus] --> D1[Color RGB<br/>retinal imaging]
    end
    
    subgraph 3D Imaging
        E[CT Scan] --> E1[Stack of 2D slices<br/>HU values]
        F[MRI] --> F1[Multiple sequences<br/>T1, T2, FLAIR]
        G[PET] --> G1[Functional imaging<br/>metabolic activity]
    end
    
    subgraph Microscopy
        H[Histopathology] --> H1[Whole Slide Image<br/>~100K x 100K pixels]
        I[Cytology] --> I1[Cell-level analysis]
    end
\`\`\`

| Modality | Resolution | Bit Depth | Channels | Typical Size |
|----------|-----------|-----------|----------|-------------|
| X-ray | 2000-3000px | 12-16 bit | 1 (gray) | 5-15 MB |
| CT | 512×512×N | 12 bit (HU) | 1 per slice | 100-500 MB |
| MRI | 256×256×N | 12-16 bit | Multiple sequences | 50-200 MB |
| Mammography | 3000-5000px | 12-14 bit | 1 (gray) | 30-80 MB |
| WSI | 50K-100K px | 8 bit | 3 (RGB) | 1-5 GB |

---

## 2. Preprocessing Pipeline

\`\`\`mermaid
flowchart LR
    A[Raw DICOM] --> B[Read &<br/>Convert]
    B --> C[Normalize<br/>Intensity]
    C --> D[Resize /<br/>Crop]
    D --> E[Augmentation]
    E --> F[Tensor<br/>Ready]
\`\`\`

### 2.1 Normalization

\`\`\`python
import numpy as np
import pydicom
from skimage import exposure

def preprocess_xray(dicom_path, target_size=(512, 512)):
    """Full preprocessing pipeline cho X-ray."""
    
    # 1. Read DICOM
    ds = pydicom.dcmread(dicom_path)
    img = ds.pixel_array.astype(np.float32)
    
    # 2. Apply VOI LUT (Value of Interest Lookup Table)
    if hasattr(ds, 'WindowCenter'):
        from pydicom.pixel_data_handlers.util import apply_voi_lut
        img = apply_voi_lut(ds.pixel_array, ds).astype(np.float32)
    
    # 3. Invert if MONOCHROME1 (white = low density)
    if ds.PhotometricInterpretation == "MONOCHROME1":
        img = img.max() - img
    
    # 4. Normalize to [0, 1]
    img = (img - img.min()) / (img.max() - img.min() + 1e-8)
    
    # 5. CLAHE — Contrast Limited Adaptive Histogram Equalization
    img = exposure.equalize_adapthist(img, clip_limit=0.02)
    
    # 6. Resize
    from skimage.transform import resize
    img = resize(img, target_size, anti_aliasing=True)
    
    return img


def preprocess_ct_volume(dicom_dir, target_spacing=(1.0, 1.0, 1.0)):
    """Preprocess CT volume: load slices → stack → resample → normalize."""
    import os
    
    # 1. Load all slices
    slices = []
    for f in sorted(os.listdir(dicom_dir)):
        ds = pydicom.dcmread(os.path.join(dicom_dir, f))
        slices.append(ds)
    
    # 2. Sort by ImagePositionPatient (z-axis)
    slices.sort(key=lambda s: float(s.ImagePositionPatient[2]))
    
    # 3. Stack into 3D volume + convert to HU
    volume = np.stack([s.pixel_array for s in slices]).astype(np.float32)
    volume = volume * slices[0].RescaleSlope + slices[0].RescaleIntercept
    
    # 4. Clip to valid HU range
    volume = np.clip(volume, -1024, 3071)
    
    # 5. Resample to isotropic spacing
    current_spacing = np.array([
        float(slices[0].SliceThickness),
        float(slices[0].PixelSpacing[0]),
        float(slices[0].PixelSpacing[1]),
    ])
    # ... scipy.ndimage.zoom for resampling ...
    
    return volume
\`\`\`

### 2.2 CLAHE — Tăng contrast cho ảnh y tế

\`\`\`python
from skimage import exposure
import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# Original
axes[0].imshow(img_original, cmap='gray')
axes[0].set_title('Original X-ray')

# Histogram Equalization
img_he = exposure.equalize_hist(img_original)
axes[1].imshow(img_he, cmap='gray')
axes[1].set_title('Histogram Equalization')

# CLAHE (tốt nhất cho y tế)
img_clahe = exposure.equalize_adapthist(img_original, clip_limit=0.02)
axes[2].imshow(img_clahe, cmap='gray')
axes[2].set_title('CLAHE (Recommended)')
\`\`\`

---

## 3. Data Augmentation cho Y tế

\`\`\`mermaid
graph TD
    A[Medical Image<br/>Augmentation] --> B[Geometric]
    A --> C[Intensity]
    A --> D[Medical-specific]
    
    B --> B1[Random rotation ±15°]
    B --> B2[Random flip horizontal]
    B --> B3[Random crop/pad]
    B --> B4[Elastic deformation]
    
    C --> C1[Brightness ±10%]
    C --> C2[Contrast ±10%]
    C --> C3[Gaussian noise]
    C --> C4[Gamma correction]
    
    D --> D1[Random windowing CT]
    D --> D2[Simulate low-dose noise]
    D --> D3[Multi-resolution crops]
\`\`\`

**Lưu ý:** KHÔNG flip vertical cho X-ray (situs inversus rất hiếm), KHÔNG xoay quá 15° (bất thường lâm sàng).

\`\`\`python
import albumentations as A
from albumentations.pytorch import ToTensorV2

# Augmentation pipeline cho X-ray classification
train_transform = A.Compose([
    A.Resize(512, 512),
    A.HorizontalFlip(p=0.5),
    A.ShiftScaleRotate(
        shift_limit=0.1,
        scale_limit=0.15,
        rotate_limit=15,  # Giới hạn xoay cho y tế
        p=0.5,
    ),
    A.OneOf([
        A.RandomBrightnessContrast(brightness_limit=0.1, contrast_limit=0.1),
        A.RandomGamma(gamma_limit=(90, 110)),
        A.CLAHE(clip_limit=4.0),
    ], p=0.5),
    A.GaussNoise(var_limit=(5, 25), p=0.3),
    A.CoarseDropout(max_holes=8, max_height=32, max_width=32, p=0.3),
    A.Normalize(mean=0.5, std=0.5),
    ToTensorV2(),
])

# Augmentation cho segmentation (transform cả image + mask)
seg_transform = A.Compose([
    A.Resize(256, 256),
    A.HorizontalFlip(p=0.5),
    A.ElasticTransform(alpha=120, sigma=12, p=0.3),
    A.GridDistortion(p=0.3),
    A.Normalize(mean=0.5, std=0.5),
    ToTensorV2(),
])
\`\`\`

---

## 4. MONAI — Medical Open Network for AI

\`\`\`python
import monai
from monai.transforms import (
    Compose, LoadImaged, EnsureChannelFirstd,
    Spacingd, Orientationd, ScaleIntensityRanged,
    CropForegroundd, RandCropByPosNegLabeld,
    RandFlipd, RandRotate90d, ToTensord,
)

# MONAI preprocessing cho CT segmentation
train_transforms = Compose([
    LoadImaged(keys=["image", "label"]),
    EnsureChannelFirstd(keys=["image", "label"]),
    Orientationd(keys=["image", "label"], axcodes="RAS"),
    Spacingd(
        keys=["image", "label"],
        pixdim=(1.5, 1.5, 2.0),  # Resample to 1.5×1.5×2mm
        mode=("bilinear", "nearest"),
    ),
    ScaleIntensityRanged(
        keys=["image"],
        a_min=-175, a_max=250,  # Abdomen CT window
        b_min=0.0, b_max=1.0,
        clip=True,
    ),
    CropForegroundd(keys=["image", "label"], source_key="image"),
    RandCropByPosNegLabeld(
        keys=["image", "label"],
        label_key="label",
        spatial_size=(96, 96, 96),
        pos=1, neg=1,
        num_samples=4,
    ),
    RandFlipd(keys=["image", "label"], prob=0.5, spatial_axis=0),
    RandRotate90d(keys=["image", "label"], prob=0.5, max_k=3),
    ToTensord(keys=["image", "label"]),
])
\`\`\`

---

## 5. Medical Image Dataset Class

\`\`\`python
import torch
from torch.utils.data import Dataset
from pathlib import Path

class CheXpertDataset(Dataset):
    """CheXpert chest X-ray dataset."""
    
    LABELS = [
        "No Finding", "Enlarged Cardiomediastinum", "Cardiomegaly",
        "Lung Opacity", "Lung Lesion", "Edema", "Consolidation",
        "Pneumonia", "Atelectasis", "Pneumothorax", "Pleural Effusion",
        "Pleural Other", "Fracture", "Support Devices",
    ]
    
    def __init__(self, csv_path, image_root, transform=None, policy="zeros"):
        import pandas as pd
        self.df = pd.read_csv(csv_path)
        self.image_root = Path(image_root)
        self.transform = transform
        self.policy = policy  # "zeros", "ones", "ignore" for uncertain labels
        self._handle_uncertain_labels()
    
    def _handle_uncertain_labels(self):
        """Handle CheXpert uncertainty labels (-1)."""
        for col in self.LABELS:
            if col in self.df.columns:
                if self.policy == "zeros":
                    self.df[col] = self.df[col].replace(-1, 0)
                elif self.policy == "ones":
                    self.df[col] = self.df[col].replace(-1, 1)
                self.df[col] = self.df[col].fillna(0)
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        row = self.df.iloc[idx]
        img_path = self.image_root / row["Path"]
        
        # Load image (DICOM or PNG)
        import cv2
        img = cv2.imread(str(img_path), cv2.IMREAD_GRAYSCALE)
        img = img.astype(np.float32) / 255.0
        
        if self.transform:
            augmented = self.transform(image=img)
            img = augmented["image"]
        
        labels = torch.FloatTensor([row[col] for col in self.LABELS])
        return img, labels
\`\`\`

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Modalities | X-ray (2D), CT/MRI (3D), WSI (ultra-high-res) |
| Preprocessing | Windowing, normalization, CLAHE |
| Augmentation | Geometric + intensity, giới hạn rotation cho y tế |
| MONAI | Framework chuyên dụng cho medical AI |
| Dataset | Handle uncertainty labels (CheXpert -1 policy) |
`);

// Bài 4
writeLessonBody(HC, "02-phan-2-medical-imaging-ai-computer-vision-cho-y-te", "05-bai-4-cnn-medical-classification.md", `
## Giới thiệu

**Medical Image Classification** là ứng dụng thành công nhất của AI trong y tế — phân loại bệnh lý từ ảnh X-ray, CT, MRI. Transfer learning từ ImageNet + fine-tuning là approach chuẩn, cùng với **Grad-CAM** để bác sĩ hiểu AI đang "nhìn" vào đâu.

---

## 1. Architecture Overview

\`\`\`mermaid
flowchart LR
    A[Medical Image<br/>512×512] --> B[Backbone<br/>ResNet/EfficientNet/ViT]
    B --> C[Global Average<br/>Pooling]
    C --> D[FC Layers]
    D --> E{Output}
    E -->|Binary| F[Sigmoid<br/>Normal/Abnormal]
    E -->|Multi-label| G[Sigmoid per class<br/>14 pathologies]
    E -->|Multi-class| H[Softmax<br/>1 of N classes]
\`\`\`

### Chọn Backbone

| Backbone | Params | ImageNet Top-1 | Medical AI phù hợp |
|----------|--------|----------------|-------------------|
| ResNet-50 | 25M | 76.1% | Baseline tốt, stable |
| EfficientNet-B4 | 19M | 82.9% | Balance accuracy/speed |
| DenseNet-121 | 8M | 74.4% | CheXNet gốc dùng |
| ConvNeXt-Base | 89M | 83.8% | Modern CNN |
| ViT-B/16 | 86M | 81.8% | Cần nhiều data |
| BiomedCLIP | 86M | — | Pre-trained on medical |

---

## 2. Transfer Learning cho Medical Imaging

\`\`\`mermaid
flowchart TD
    A[ImageNet Pre-trained<br/>Backbone] --> B[Freeze backbone<br/>Train head only]
    B --> C{Performance OK?}
    C -->|No| D[Unfreeze last N layers<br/>Lower learning rate]
    C -->|Yes| E[Done]
    D --> F{Better?}
    F -->|No| G[Unfreeze all<br/>Very low LR]
    F -->|Yes| E
    G --> E
\`\`\`

\`\`\`python
import torch
import torch.nn as nn
from torchvision import models

class CheXNetModel(nn.Module):
    """Multi-label chest X-ray classification."""
    
    def __init__(self, num_classes=14, backbone="densenet121", pretrained=True):
        super().__init__()
        
        if backbone == "densenet121":
            self.backbone = models.densenet121(
                weights="IMAGENET1K_V1" if pretrained else None
            )
            num_features = self.backbone.classifier.in_features
            self.backbone.classifier = nn.Identity()
            
        elif backbone == "efficientnet_b4":
            self.backbone = models.efficientnet_b4(
                weights="IMAGENET1K_V1" if pretrained else None
            )
            num_features = self.backbone.classifier[1].in_features
            self.backbone.classifier = nn.Identity()
        
        # Classification head
        self.classifier = nn.Sequential(
            nn.Dropout(0.3),
            nn.Linear(num_features, 512),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(512, num_classes),
        )
    
    def forward(self, x):
        features = self.backbone(x)
        return self.classifier(features)  # No sigmoid — dùng BCEWithLogitsLoss
\`\`\`

---

## 3. Training Pipeline

\`\`\`python
from torch.utils.data import DataLoader
from sklearn.metrics import roc_auc_score
import numpy as np

def train_medical_classifier(model, train_loader, val_loader, epochs=30):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model = model.to(device)
    
    # BCEWithLogitsLoss cho multi-label
    criterion = nn.BCEWithLogitsLoss()
    
    # Different LR for backbone vs head
    optimizer = torch.optim.AdamW([
        {"params": model.backbone.parameters(), "lr": 1e-5},  # Backbone: low LR
        {"params": model.classifier.parameters(), "lr": 1e-3},  # Head: high LR
    ], weight_decay=1e-4)
    
    scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=epochs)
    
    best_auc = 0
    for epoch in range(epochs):
        # === Training ===
        model.train()
        train_loss = 0
        for images, labels in train_loader:
            images, labels = images.to(device), labels.to(device)
            
            optimizer.zero_grad()
            outputs = model(images)
            loss = criterion(outputs, labels)
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            optimizer.step()
            train_loss += loss.item()
        
        # === Validation ===
        model.eval()
        all_preds, all_labels = [], []
        with torch.no_grad():
            for images, labels in val_loader:
                images = images.to(device)
                outputs = torch.sigmoid(model(images))
                all_preds.append(outputs.cpu().numpy())
                all_labels.append(labels.numpy())
        
        all_preds = np.concatenate(all_preds)
        all_labels = np.concatenate(all_labels)
        
        # Per-class AUC
        aucs = []
        for i in range(all_labels.shape[1]):
            try:
                auc = roc_auc_score(all_labels[:, i], all_preds[:, i])
                aucs.append(auc)
            except ValueError:
                pass
        mean_auc = np.mean(aucs)
        
        print(f"Epoch {epoch+1}/{epochs} — Loss: {train_loss/len(train_loader):.4f} — AUC: {mean_auc:.4f}")
        
        if mean_auc > best_auc:
            best_auc = mean_auc
            torch.save(model.state_dict(), "best_chexnet.pth")
        
        scheduler.step()
    
    return best_auc
\`\`\`

---

## 4. Grad-CAM — Explainability cho Medical AI

\`\`\`mermaid
flowchart LR
    A[Input X-ray] --> B[Forward Pass]
    B --> C[Prediction:<br/>Pneumonia 0.92]
    B --> D[Target Layer<br/>Feature Maps]
    D --> E[Gradient<br/>Backprop]
    E --> F[Weight<br/>Feature Maps]
    F --> G[Heatmap]
    G --> H[Overlay on<br/>Original Image]
    H --> I[Bác sĩ review:<br/>AI nhìn đúng vùng?]
\`\`\`

\`\`\`python
import torch
import torch.nn.functional as F
import numpy as np
import cv2

class GradCAM:
    """Grad-CAM visualization cho medical images."""
    
    def __init__(self, model, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None
        
        # Register hooks
        target_layer.register_forward_hook(self._save_activation)
        target_layer.register_full_backward_hook(self._save_gradient)
    
    def _save_activation(self, module, input, output):
        self.activations = output.detach()
    
    def _save_gradient(self, module, grad_input, grad_output):
        self.gradients = grad_output[0].detach()
    
    def generate(self, input_image, target_class=None):
        # Forward
        self.model.eval()
        output = self.model(input_image)
        
        if target_class is None:
            target_class = output.argmax(dim=1).item()
        
        # Backward
        self.model.zero_grad()
        output[0, target_class].backward()
        
        # Compute CAM
        weights = self.gradients.mean(dim=[2, 3], keepdim=True)  # GAP of gradients
        cam = (weights * self.activations).sum(dim=1, keepdim=True)
        cam = F.relu(cam)  # Only positive contributions
        cam = F.interpolate(cam, size=input_image.shape[2:], mode='bilinear')
        cam = cam - cam.min()
        cam = cam / (cam.max() + 1e-8)
        
        return cam.squeeze().cpu().numpy()


# Sử dụng
model = CheXNetModel(num_classes=14)
model.load_state_dict(torch.load("best_chexnet.pth"))

# Target layer: last conv layer of backbone
target_layer = model.backbone.features[-1]  # DenseNet
gradcam = GradCAM(model, target_layer)

# Generate heatmap
cam = gradcam.generate(input_image, target_class=7)  # Pneumonia

# Overlay
heatmap = cv2.applyColorMap(np.uint8(255 * cam), cv2.COLORMAP_JET)
overlay = cv2.addWeighted(original_image, 0.6, heatmap, 0.4, 0)
\`\`\`

---

## 5. Evaluation Metrics cho Medical AI

| Metric | Formula | Ý nghĩa trong y tế |
|--------|---------|-------------------|
| AUC-ROC | Area under ROC curve | Overall discrimination — metric chính |
| Sensitivity (Recall) | TP / (TP + FN) | Tỉ lệ phát hiện bệnh — QUAN TRỌNG |
| Specificity | TN / (TN + FP) | Tỉ lệ loại trừ đúng |
| PPV (Precision) | TP / (TP + FP) | Xác suất thực sự bệnh khi AI nói bệnh |
| NPV | TN / (TN + FN) | Xác suất khỏe khi AI nói khỏe |
| F1-Score | 2×PPV×Sens / (PPV+Sens) | Balance precision & recall |

> ⚠️ **Trong y tế, sensitivity thường quan trọng hơn specificity** — bỏ sót bệnh nguy hiểm hơn false alarm.

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Transfer Learning | ImageNet backbone + fine-tune = standard approach |
| Multi-label | BCEWithLogitsLoss, per-class AUC evaluation |
| Differential LR | Backbone 1e-5, Head 1e-3 |
| Grad-CAM | Bắt buộc cho clinical trust — bác sĩ cần biết AI nhìn đâu |
| Sensitivity | Metric quan trọng nhất trong screening |
`);

// Bài 5
writeLessonBody(HC, "02-phan-2-medical-imaging-ai-computer-vision-cho-y-te", "06-bai-5-unet-segmentation.md", `
## Giới thiệu

**Medical Image Segmentation** — vẽ boundary chính xác cho từng organ, tumor, lesion trong ảnh y tế. **U-Net** là architecture kinh điển, được thiết kế đặc biệt cho medical imaging — hoạt động tốt với ít data nhờ skip connections.

---

## 1. Segmentation vs Classification vs Detection

\`\`\`mermaid
flowchart LR
    subgraph Classification
        A1[Toàn ảnh] --> B1[Label: Pneumonia]
    end
    
    subgraph Detection
        A2[Toàn ảnh] --> B2[Bounding box<br/>quanh tumor]
    end
    
    subgraph Segmentation
        A3[Toàn ảnh] --> B3[Pixel mask<br/>chính xác từng vùng]
    end
\`\`\`

| Task | Output | Ví dụ y tế | Precision |
|------|--------|-----------|-----------|
| Classification | 1 label | "Có pneumonia" | Low — toàn ảnh |
| Detection | Bounding box | Vùng có tumor | Medium |
| Semantic Seg | Pixel mask | Từng pixel = organ nào | High |
| Instance Seg | Pixel mask + ID | Từng cell riêng biệt | Highest |

---

## 2. U-Net Architecture

\`\`\`mermaid
flowchart TD
    subgraph Encoder [Encoder — Contracting Path]
        E1[Input 256×256×1] --> E2[Conv Block 1<br/>64 filters]
        E2 --> E3[MaxPool → 128×128]
        E3 --> E4[Conv Block 2<br/>128 filters]
        E4 --> E5[MaxPool → 64×64]
        E5 --> E6[Conv Block 3<br/>256 filters]
        E6 --> E7[MaxPool → 32×32]
        E7 --> E8[Conv Block 4<br/>512 filters]
        E8 --> E9[MaxPool → 16×16]
    end
    
    E9 --> B[Bottleneck<br/>1024 filters<br/>16×16]
    
    subgraph Decoder [Decoder — Expansive Path]
        B --> D1[UpConv → 32×32]
        D1 --> D2[Concat + Conv<br/>512 filters]
        D2 --> D3[UpConv → 64×64]
        D3 --> D4[Concat + Conv<br/>256 filters]
        D4 --> D5[UpConv → 128×128]
        D5 --> D6[Concat + Conv<br/>128 filters]
        D6 --> D7[UpConv → 256×256]
        D7 --> D8[Concat + Conv<br/>64 filters]
    end
    
    E8 -.->|Skip Connection| D2
    E6 -.->|Skip Connection| D4
    E4 -.->|Skip Connection| D6
    E2 -.->|Skip Connection| D8
    
    D8 --> O[1×1 Conv<br/>Output Mask]
\`\`\`

\`\`\`python
import torch
import torch.nn as nn

class DoubleConv(nn.Module):
    """Conv → BN → ReLU → Conv → BN → ReLU"""
    def __init__(self, in_ch, out_ch):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(in_ch, out_ch, 3, padding=1, bias=False),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
            nn.Conv2d(out_ch, out_ch, 3, padding=1, bias=False),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
        )
    def forward(self, x):
        return self.conv(x)


class UNet(nn.Module):
    def __init__(self, in_channels=1, out_channels=1, features=[64, 128, 256, 512]):
        super().__init__()
        self.encoder = nn.ModuleList()
        self.decoder = nn.ModuleList()
        self.pool = nn.MaxPool2d(2, 2)
        
        # Encoder
        for f in features:
            self.encoder.append(DoubleConv(in_channels, f))
            in_channels = f
        
        # Bottleneck
        self.bottleneck = DoubleConv(features[-1], features[-1] * 2)
        
        # Decoder
        for f in reversed(features):
            self.decoder.append(nn.ConvTranspose2d(f * 2, f, kernel_size=2, stride=2))
            self.decoder.append(DoubleConv(f * 2, f))
        
        # Output
        self.output = nn.Conv2d(features[0], out_channels, kernel_size=1)
    
    def forward(self, x):
        skip_connections = []
        
        # Encoder
        for enc in self.encoder:
            x = enc(x)
            skip_connections.append(x)
            x = self.pool(x)
        
        x = self.bottleneck(x)
        skip_connections = skip_connections[::-1]
        
        # Decoder
        for i in range(0, len(self.decoder), 2):
            x = self.decoder[i](x)  # UpConv
            skip = skip_connections[i // 2]
            
            # Handle size mismatch
            if x.shape != skip.shape:
                x = nn.functional.interpolate(x, size=skip.shape[2:])
            
            x = torch.cat([skip, x], dim=1)  # Skip connection
            x = self.decoder[i + 1](x)  # DoubleConv
        
        return self.output(x)
\`\`\`

---

## 3. Loss Functions cho Segmentation

### 3.1 Dice Loss

\`\`\`python
class DiceLoss(nn.Module):
    """Dice Loss — xử lý class imbalance tốt cho y tế."""
    def __init__(self, smooth=1.0):
        super().__init__()
        self.smooth = smooth
    
    def forward(self, pred, target):
        pred = torch.sigmoid(pred)
        pred_flat = pred.view(-1)
        target_flat = target.view(-1)
        
        intersection = (pred_flat * target_flat).sum()
        dice = (2. * intersection + self.smooth) / (
            pred_flat.sum() + target_flat.sum() + self.smooth
        )
        return 1 - dice


class CombinedLoss(nn.Module):
    """BCE + Dice — combination phổ biến nhất cho medical segmentation."""
    def __init__(self, bce_weight=0.5, dice_weight=0.5):
        super().__init__()
        self.bce = nn.BCEWithLogitsLoss()
        self.dice = DiceLoss()
        self.bce_weight = bce_weight
        self.dice_weight = dice_weight
    
    def forward(self, pred, target):
        return self.bce_weight * self.bce(pred, target) + \\
               self.dice_weight * self.dice(pred, target)
\`\`\`

---

## 4. U-Net Variants cho Medical AI

\`\`\`mermaid
graph TD
    A[U-Net 2015] --> B[Attention U-Net 2018]
    A --> C[U-Net++ 2018]
    A --> D[3D U-Net 2016]
    A --> E[V-Net 2016]
    A --> F[TransUNet 2021]
    A --> G[nnU-Net 2021]
    A --> H[Swin-UNet 2022]
    
    style G fill:#e8f5e9,stroke:#4caf50
\`\`\`

| Variant | Key Innovation | Best For |
|---------|---------------|----------|
| Attention U-Net | Attention gates ở skip connections | Focus vào relevant regions |
| U-Net++ | Dense skip connections, deep supervision | Small lesions |
| 3D U-Net | 3D convolutions | CT/MRI volumetric |
| nnU-Net | Auto-configured U-Net | **Mọi medical seg task** |
| TransUNet | ViT encoder + U-Net decoder | Large receptive field |
| Swin-UNet | Swin Transformer encoder | Global context |

> 💡 **nnU-Net** (no-new-Net) tự động chọn architecture, preprocessing, augmentation — thắng hầu hết medical seg challenges. Luôn thử nnU-Net trước.

---

## 5. Metrics cho Segmentation

\`\`\`python
def compute_metrics(pred_mask, gt_mask, threshold=0.5):
    pred = (pred_mask > threshold).float()
    
    intersection = (pred * gt_mask).sum()
    union = pred.sum() + gt_mask.sum() - intersection
    
    dice = (2 * intersection) / (pred.sum() + gt_mask.sum() + 1e-8)
    iou = intersection / (union + 1e-8)
    
    # Hausdorff Distance — surface distance metric
    # Quan trọng cho surgical planning
    
    return {
        "dice": dice.item(),
        "iou": iou.item(),
    }
\`\`\`

| Metric | Formula | Ý nghĩa |
|--------|---------|---------|
| Dice Coefficient | 2\|A∩B\| / (\|A\|+\|B\|) | Overlap giữa prediction và ground truth |
| IoU (Jaccard) | \|A∩B\| / \|A∪B\| | Tương tự Dice nhưng stricter |
| Hausdorff Distance | max surface distance | Quan trọng cho surgical planning |
| Surface Dice | Dice on surfaces | Boundary accuracy |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| U-Net | Skip connections giữ spatial detail — standard cho medical |
| Dice Loss | Xử lý class imbalance (tumor nhỏ vs background lớn) |
| nnU-Net | Auto-configured, SOTA trên hầu hết benchmarks |
| Attention | Focus vào relevant regions, bỏ qua irrelevant |
| 3D Seg | Cần cho CT/MRI volumetric data |
`);

// Bài 6
writeLessonBody(HC, "02-phan-2-medical-imaging-ai-computer-vision-cho-y-te", "07-bai-6-detection-pathology.md", `
## Giới thiệu

**Object Detection** trong y tế giúp localize bất thường — nodule phổi, tổn thương xương, polyp. **Digital Pathology AI** phân tích Whole Slide Images (WSI) siêu lớn (100K×100K pixels) — một lĩnh vực đang bùng nổ.

---

## 1. Medical Object Detection

\`\`\`mermaid
flowchart LR
    A[Medical Image] --> B[Detection Model]
    B --> C[Bounding Boxes]
    C --> D[Location + Size<br/>+ Confidence]
    D --> E[Bác sĩ review<br/>+ confirm]

    subgraph Detection Models
        B1[YOLO v8]
        B2[Faster R-CNN]
        B3[RetinaNet]
        B4[DETR]
    end
\`\`\`

### 1.1 YOLO cho Medical Detection

\`\`\`python
from ultralytics import YOLO

# Train YOLO v8 cho nodule detection
model = YOLO("yolov8m.pt")  # Pre-trained backbone

results = model.train(
    data="lung_nodule.yaml",  # Dataset config
    epochs=100,
    imgsz=640,
    batch=16,
    lr0=0.001,
    augment=True,
    patience=20,
)
\`\`\`

\`\`\`yaml
# lung_nodule.yaml
path: /data/lung_nodules
train: images/train
val: images/val
test: images/test

names:
  0: nodule_benign
  1: nodule_malignant
  2: nodule_indeterminate
\`\`\`

### 1.2 Evaluation cho Detection

| Metric | Threshold | Ý nghĩa |
|--------|-----------|---------|
| mAP@0.5 | IoU ≥ 0.5 | Standard detection metric |
| mAP@0.5:0.95 | IoU 0.5→0.95 | Stricter localization |
| FROC | Free-Response ROC | Sensitivity vs FP/image — **chuẩn LUNA16** |
| CPM | Competition Performance Metric | Average sensitivity tại 7 FP rates |

---

## 2. Digital Pathology

\`\`\`mermaid
flowchart TD
    A[Glass Slide] --> B[Scanner<br/>40x magnification]
    B --> C[Whole Slide Image<br/>~100K × 100K pixels]
    C --> D[Tiling<br/>256×256 patches]
    D --> E[Patch Classification<br/>CNN]
    E --> F[Aggregation<br/>MIL / Attention]
    F --> G[Slide-level<br/>Prediction]
    G --> H[Heatmap<br/>Visualization]
\`\`\`

### 2.1 Tại sao WSI đặc biệt?

| Thách thức | Chi tiết |
|-----------|----------|
| File size | 1-5 GB per slide |
| Resolution | 50,000-100,000 pixels mỗi chiều |
| Staining variation | H&E, IHC — khác nhau giữa labs |
| Annotation cost | Pathologist cần hàng giờ per slide |
| Label scarcity | Chỉ có slide-level label, không có pixel-level |

### 2.2 Multi-Instance Learning (MIL)

\`\`\`python
import torch
import torch.nn as nn
from torchvision import models

class AttentionMIL(nn.Module):
    """Attention-based MIL cho WSI classification."""
    
    def __init__(self, feature_dim=512, hidden_dim=256, num_classes=2):
        super().__init__()
        
        # Feature extractor (pre-trained, frozen)
        resnet = models.resnet18(weights="IMAGENET1K_V1")
        self.feature_extractor = nn.Sequential(*list(resnet.children())[:-1])
        
        # Attention mechanism
        self.attention = nn.Sequential(
            nn.Linear(feature_dim, hidden_dim),
            nn.Tanh(),
            nn.Linear(hidden_dim, 1),
        )
        
        # Classifier
        self.classifier = nn.Sequential(
            nn.Linear(feature_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(hidden_dim, num_classes),
        )
    
    def forward(self, patches):
        """
        patches: (N_patches, C, H, W)
        returns: slide-level prediction
        """
        # Extract features for all patches
        features = self.feature_extractor(patches)  # (N, 512, 1, 1)
        features = features.squeeze(-1).squeeze(-1)  # (N, 512)
        
        # Attention weights
        attn_weights = self.attention(features)  # (N, 1)
        attn_weights = torch.softmax(attn_weights, dim=0)  # Normalize
        
        # Weighted aggregation
        slide_repr = (attn_weights * features).sum(dim=0)  # (512,)
        
        # Classification
        return self.classifier(slide_repr.unsqueeze(0))
\`\`\`

### 2.3 Stain Normalization

\`\`\`python
import staintools

# Normalize staining variation giữa các labs
target = staintools.read_image("reference_slide.png")
normalizer = staintools.StainNormalizer(method='vahadane')
normalizer.fit(target)

# Transform new slides to match reference
source = staintools.read_image("new_slide.png")
normalized = normalizer.transform(source)
\`\`\`

---

## 3. Cell Detection & Counting

\`\`\`mermaid
flowchart LR
    A[Pathology Patch] --> B[HoVer-Net]
    B --> C[Cell Segmentation]
    B --> D[Cell Classification]
    C --> E[Instance Masks]
    D --> F[Cell Types<br/>Epithelial, Lymphocyte,<br/>Neutrophil, etc.]
    E & F --> G[Spatial Analysis<br/>Tumor microenvironment]
\`\`\`

\`\`\`python
# Cell detection với StarDist
from stardist.models import StarDist2D

model = StarDist2D.from_pretrained('2D_versatile_he')
labels, details = model.predict_instances(
    image_normalized,
    prob_thresh=0.5,
    nms_thresh=0.3,
)
print(f"Detected {labels.max()} cells")
\`\`\`

---

## 4. Foundation Models cho Pathology

| Model | Training Data | Capability |
|-------|-------------|-----------|
| UNI (Harvard) | 100K+ WSIs | General pathology features |
| Virchow (Paige) | 1.5M WSIs | Pan-cancer classification |
| CONCH | WSI + pathology reports | Vision-language pathology |
| Prov-GigaPath | 1.3B patches | Gigapixel-scale analysis |

\`\`\`python
# Sử dụng UNI pre-trained features
import timm

model = timm.create_model("uni_vit_large", pretrained=True)
model.eval()

# Extract features cho từng patch
with torch.no_grad():
    features = model(patch_tensor)  # (batch, 1024)
# → Dùng features cho downstream MIL
\`\`\`

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Medical Detection | YOLO/Faster R-CNN + FROC evaluation |
| Digital Pathology | WSI → Tiling → MIL aggregation |
| Attention MIL | Slide-level prediction từ patch features |
| Stain Normalization | Cần cho cross-lab generalization |
| Foundation Models | UNI, Virchow — pre-trained pathology features |
`);

// Bài 7
writeLessonBody(HC, "03-phan-3-clinical-nlp-genomics-ai", "08-bai-7-clinical-nlp.md", `
## Giới thiệu

**Clinical NLP** trích xuất thông tin có cấu trúc từ hồ sơ bệnh án (clinical notes) — một nguồn dữ liệu y tế khổng lồ nhưng ở dạng text tự do. Khoảng **80% dữ liệu y tế là unstructured** — discharge summaries, radiology reports, progress notes.

---

## 1. Clinical Text vs General Text

\`\`\`mermaid
graph TD
    subgraph Clinical Text Challenges
        A[Abbreviations<br/>SOB = Shortness of Breath<br/>NOT Son of a B...]
        B[Negation<br/>'No evidence of pneumonia'<br/>→ Pneumonia = ABSENT]
        C[Temporal<br/>'History of MI 2020'<br/>vs 'Current MI']
        D[Uncertainty<br/>'Possible' 'Likely'<br/>'Cannot rule out']
        E[Section structure<br/>HPI, ROS, PE, A/P]
    end
\`\`\`

| Aspect | General NLP | Clinical NLP |
|--------|------------|-------------|
| Vocabulary | General words | Medical terminology + abbreviations |
| Negation | Rare, simple | Very common, complex |
| Context | Straightforward | Temporal, conditional, uncertain |
| Privacy | Public data usually | HIPAA protected |
| Annotation | Crowdsourcing OK | Domain experts required |
| Errors | Typos, grammar | Copy-paste, templates, shortcuts |

---

## 2. Named Entity Recognition (NER) Y tế

\`\`\`mermaid
flowchart LR
    A["Patient presents with<br/><b>chest pain</b> and<br/><b>shortness of breath</b>.<br/>Started <b>Aspirin 81mg</b><br/>daily for <b>CAD</b>."]
    A --> B[NER Model]
    B --> C["chest pain → SYMPTOM"]
    B --> D["shortness of breath → SYMPTOM"]
    B --> E["Aspirin 81mg → MEDICATION"]
    B --> F["CAD → DISEASE"]
\`\`\`

\`\`\`python
# BioBERT / PubMedBERT cho Medical NER
from transformers import pipeline

# Biomedical NER
ner_pipeline = pipeline(
    "ner",
    model="d4data/biomedical-ner-all",
    aggregation_strategy="simple",
)

text = """
Patient is a 65-year-old male with history of type 2 diabetes mellitus
and hypertension. He was admitted for acute myocardial infarction.
Current medications: Metformin 1000mg BID, Lisinopril 10mg daily.
Lab: HbA1c 7.8%, Troponin 2.5 ng/mL.
"""

entities = ner_pipeline(text)
for ent in entities:
    print(f"  {ent['word']:30} → {ent['entity_group']:15} ({ent['score']:.3f})")

# Output:
# type 2 diabetes mellitus       → Disease          (0.993)
# hypertension                   → Disease          (0.997)
# acute myocardial infarction    → Disease          (0.995)
# Metformin                      → Chemical         (0.998)
# 1000mg                         → Dosage           (0.912)
# Lisinopril                     → Chemical         (0.996)
# HbA1c                         → Lab_test         (0.987)
# Troponin                      → Lab_test         (0.991)
\`\`\`

---

## 3. Negation Detection — NegEx & Context

\`\`\`python
import medspacy

nlp = medspacy.load()

text = "No evidence of pneumonia. Patient denies chest pain. History of diabetes."

doc = nlp(text)
for ent in doc.ents:
    print(f"  {ent.text:25} | Negated: {ent._.is_negated} | Historical: {ent._.is_historical}")

# pneumonia                 | Negated: True  | Historical: False
# chest pain                | Negated: True  | Historical: False  
# diabetes                  | Negated: False | Historical: True
\`\`\`

\`\`\`mermaid
flowchart LR
    A[Clinical Text] --> B[Entity Extraction]
    B --> C[Context Detection]
    C --> D{Assertion}
    D -->|Present| E[Active condition]
    D -->|Negated| F[Ruled out]
    D -->|Historical| G[Past history]
    D -->|Hypothetical| H[Possible/Uncertain]
    D -->|Family| I[Family history]
\`\`\`

---

## 4. ICD Coding Automation

\`\`\`mermaid
flowchart TD
    A[Discharge Summary] --> B[Text Processing]
    B --> C[Multi-label<br/>Classification]
    C --> D[ICD-10 Codes]
    D --> E["E11.9 — Type 2 DM<br/>I21.9 — AMI<br/>I10 — Hypertension"]
    E --> F[Coder Review<br/>+ Correction]
\`\`\`

\`\`\`python
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# PLM-ICD: Pre-trained Language Model for ICD coding
model_name = "GanjinZero/UMLSBert_ENG"
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Multi-label classification cho ICD codes
class ICDClassifier(nn.Module):
    def __init__(self, num_codes=8929):  # ICD-10 full code set
        super().__init__()
        from transformers import AutoModel
        self.bert = AutoModel.from_pretrained(model_name)
        self.classifier = nn.Linear(768, num_codes)
    
    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        cls_output = outputs.last_hidden_state[:, 0, :]
        return self.classifier(cls_output)
\`\`\`

---

## 5. Relation Extraction

Trích xuất quan hệ giữa entities — drug-disease, drug-dosage, symptom-anatomy:

\`\`\`python
# Ví dụ: Trích xuất Drug-Dosage-Frequency
text = "Metformin 1000mg twice daily for diabetes"

# Output:
relations = [
    {
        "drug": "Metformin",
        "dosage": "1000mg",
        "frequency": "twice daily",
        "indication": "diabetes",
        "relation_type": "treats",
    }
]
\`\`\`

---

## 6. Medical Language Models

| Model | Base | Training Data | Use Case |
|-------|------|-------------|----------|
| BioBERT | BERT | PubMed + PMC | Biomedical NLP |
| PubMedBERT | BERT | PubMed only | Biomedical NLP |
| ClinicalBERT | BERT | MIMIC-III notes | Clinical NLP |
| GatorTron | Megatron | 90B words clinical | Clinical NLP |
| BioGPT | GPT-2 | PubMed | Text generation |
| Med-PaLM 2 | PaLM 2 | Medical QA | Medical reasoning |
| Meditron | Llama 2 | Medical guidelines | Clinical decision |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Clinical NER | BioBERT/PubMedBERT cho entity extraction |
| Negation | Critical — "no pneumonia" ≠ "pneumonia" |
| ICD Coding | Multi-label classification từ discharge summary |
| Relation Extraction | Drug-disease-dosage relationships |
| Domain Models | ClinicalBERT, GatorTron cho clinical text |
`);

// Bài 8 - Medical Q&A
writeLessonBody(HC, "03-phan-3-clinical-nlp-genomics-ai", "09-bai-8-medical-qa-chatbot.md", `
## Giới thiệu

**Medical Q&A** và **AI Chatbot Y tế** đang cách mạng hoá cách bệnh nhân tiếp cận thông tin sức khoẻ. Tuy nhiên, y tế đòi hỏi **accuracy cao nhất** — sai lầm có thể gây nguy hiểm tính mạng. RAG (Retrieval-Augmented Generation) với medical knowledge base là approach an toàn nhất.

---

## 1. Medical Q&A Architecture

\`\`\`mermaid
flowchart TD
    A[User Question] --> B[Query Processing]
    B --> C{Intent Classification}
    C -->|Medical Question| D[RAG Pipeline]
    C -->|Emergency| E[Emergency Alert<br/>Call 115/911]
    C -->|Non-medical| F[Redirect hoặc<br/>General Response]
    
    D --> G[Retrieve from<br/>Medical Knowledge Base]
    G --> H[PubMed / UpToDate<br/>/ Clinical Guidelines]
    H --> I[Generate Answer<br/>with citations]
    I --> J[Safety Filter]
    J --> K[Response + Sources]
\`\`\`

---

## 2. RAG cho Y tế

\`\`\`python
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter

# 1. Load medical knowledge base
from langchain.document_loaders import PubMedLoader

loader = PubMedLoader(query="type 2 diabetes treatment guidelines", load_max_docs=100)
docs = loader.load()

# 2. Chunk documents
splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\\n\\n", "\\n", ". ", " "],
)
chunks = splitter.split_documents(docs)

# 3. Create vector store với medical embeddings
embeddings = HuggingFaceEmbeddings(
    model_name="pritamdeka/S-PubMedBert-MS-MARCO",  # Medical embedding model
)
vectorstore = Chroma.from_documents(chunks, embeddings, persist_directory="./medical_db")

# 4. Retrieval
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
relevant_docs = retriever.get_relevant_documents("What is first-line treatment for T2DM?")
\`\`\`

### 2.1 Medical-specific Chunking

\`\`\`python
class MedicalTextSplitter:
    """Chunk medical documents respecting section boundaries."""
    
    SECTION_HEADERS = [
        "BACKGROUND", "METHODS", "RESULTS", "CONCLUSION",
        "INDICATIONS", "CONTRAINDICATIONS", "DOSAGE",
        "ADVERSE EFFECTS", "MECHANISM OF ACTION",
    ]
    
    def split(self, text, max_chunk_size=500):
        # Split by section headers first
        # Then split long sections by sentences
        # Keep tables intact
        pass
\`\`\`

---

## 3. Safety Guardrails

\`\`\`mermaid
flowchart TD
    A[Generated Response] --> B{Safety Checks}
    B -->|Emergency keywords| C[Add emergency disclaimer<br/>+ hotline numbers]
    B -->|Drug interactions| D[Flag for pharmacist review]
    B -->|Diagnosis attempt| E[Add 'consult doctor' disclaimer]
    B -->|Harmful advice| F[BLOCK response]
    B -->|Safe| G[Return with citations]
    
    C & D & E & G --> H[Final Response]
\`\`\`

\`\`\`python
class MedicalSafetyFilter:
    """Safety guardrails cho medical chatbot."""
    
    EMERGENCY_KEYWORDS = [
        "chest pain", "can't breathe", "suicidal", "overdose",
        "severe bleeding", "stroke symptoms", "anaphylaxis",
    ]
    
    BLOCKED_ACTIONS = [
        "prescribe", "diagnose", "change medication",
        "stop taking", "increase dose",
    ]
    
    REQUIRED_DISCLAIMERS = (
        "\\n\\n⚠️ **Thông tin này chỉ mang tính tham khảo. "
        "Vui lòng tham khảo ý kiến bác sĩ cho tình trạng cụ thể của bạn.**"
    )
    
    def check(self, query, response):
        # 1. Emergency detection
        query_lower = query.lower()
        for keyword in self.EMERGENCY_KEYWORDS:
            if keyword in query_lower:
                return self._emergency_response(keyword)
        
        # 2. Check for blocked actions
        response_lower = response.lower()
        for action in self.BLOCKED_ACTIONS:
            if action in response_lower:
                response = self._add_disclaimer(response, action)
        
        # 3. Always add medical disclaimer
        response += self.REQUIRED_DISCLAIMERS
        
        return response
    
    def _emergency_response(self, keyword):
        return (
            f"🚨 **Đây có thể là tình huống khẩn cấp!**\\n\\n"
            f"Xin hãy gọi **115** (VN) hoặc **911** (US) ngay lập tức.\\n\\n"
            f"Keyword detected: {keyword}"
        )
\`\`\`

---

## 4. Evaluation cho Medical Q&A

| Metric | Mô tả | Target |
|--------|--------|--------|
| Medical Accuracy | Đánh giá bởi bác sĩ | ≥90% |
| Faithfulness | Response phải dựa trên retrieved context | ≥95% |
| Harmfulness | Không đưa ra lời khuyên nguy hiểm | 0% |
| Citation accuracy | Sources phải chính xác | ≥95% |
| Comprehensiveness | Trả lời đầy đủ câu hỏi | ≥80% |

---

## 5. Benchmark: Medical LLM Performance

| Model | USMLE (MedQA) | PubMedQA | Notes |
|-------|--------------|----------|-------|
| GPT-4 | ~90% | ~80% | Best commercial |
| Med-PaLM 2 | ~86% | ~81% | Google medical |
| Claude 3 | ~85% | ~78% | Anthropic |
| Meditron-70B | ~70% | ~74% | Open-source |
| Llama 3 70B | ~65% | ~72% | General purpose |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| RAG | Retrieve từ medical knowledge base → generate answer |
| Safety | Emergency detection, disclaimers, blocked actions |
| Embeddings | Medical-specific embeddings (PubMedBERT) |
| Evaluation | Accuracy bởi domain experts, không chỉ automated metrics |
| Guardrails | Luôn thêm disclaimer, luôn cite sources |
`);

// Bài 9 - Drug Discovery
writeLessonBody(HC, "03-phan-3-clinical-nlp-genomics-ai", "10-bai-9-drug-discovery-gnn.md", `
## Giới thiệu

**Drug Discovery với AI** — sử dụng Graph Neural Networks (GNN) để dự đoán tính chất phân tử, screening thuốc tiềm năng, và thiết kế phân tử mới. AI đã rút ngắn 50-70% thời gian cho giai đoạn tiền lâm sàng.

---

## 1. Drug Discovery Pipeline

\`\`\`mermaid
flowchart LR
    A[Target<br/>Identification] --> B[Hit<br/>Discovery]
    B --> C[Lead<br/>Optimization]
    C --> D[ADMET<br/>Prediction]
    D --> E[Preclinical<br/>Testing]
    
    A1[AI: Genomics<br/>Network analysis] -.-> A
    B1[AI: Virtual screening<br/>Docking] -.-> B
    C1[AI: Generative<br/>Molecular design] -.-> C
    D1[AI: Property<br/>prediction GNN] -.-> D
    
    style A1 fill:#e3f2fd
    style B1 fill:#e3f2fd
    style C1 fill:#e3f2fd
    style D1 fill:#e3f2fd
\`\`\`

---

## 2. Molecular Representations

\`\`\`mermaid
graph TD
    A[Molecule] --> B[SMILES String]
    A --> C[Molecular Graph]
    A --> D[Fingerprint]
    A --> E[3D Conformation]
    
    B --> B1["CC(=O)Oc1ccccc1C(=O)O"]
    C --> C1[Atoms = nodes<br/>Bonds = edges]
    D --> D1[Binary vector<br/>2048 bits]
    E --> E1[3D coordinates<br/>per atom]
\`\`\`

\`\`\`python
from rdkit import Chem
from rdkit.Chem import AllChem, Draw

# Parse SMILES
mol = Chem.MolFromSmiles("CC(=O)Oc1ccccc1C(=O)O")  # Aspirin
print(f"Atoms: {mol.GetNumAtoms()}")   # 13
print(f"Bonds: {mol.GetNumBonds()}")   # 13
print(f"MW: {Chem.Descriptors.MolWt(mol):.1f}")  # 180.2

# Morgan Fingerprint (ECFP)
fp = AllChem.GetMorganFingerprintAsBitVect(mol, radius=2, nBits=2048)
fp_array = np.array(fp)
print(f"Fingerprint: {fp_array.shape}")  # (2048,)

# Molecular descriptors
from rdkit.Chem import Descriptors
print(f"LogP: {Descriptors.MolLogP(mol):.2f}")
print(f"TPSA: {Descriptors.TPSA(mol):.1f}")
print(f"HBD: {Descriptors.NumHDonors(mol)}")
print(f"HBA: {Descriptors.NumHAcceptors(mol)}")
\`\`\`

---

## 3. Graph Neural Networks cho Molecules

\`\`\`mermaid
flowchart LR
    A[Molecule<br/>SMILES] --> B[Molecular Graph<br/>Atoms + Bonds]
    B --> C[GNN Layers<br/>Message Passing]
    C --> D[Graph-level<br/>Readout]
    D --> E[Property<br/>Prediction]

    subgraph GNN Layer
        C1[Node features<br/>atom type, charge] --> C2[Message<br/>Passing]
        C3[Edge features<br/>bond type, stereo] --> C2
        C2 --> C4[Updated<br/>Node features]
    end
\`\`\`

\`\`\`python
import torch
import torch.nn as nn
from torch_geometric.nn import GCNConv, global_mean_pool
from torch_geometric.data import Data

class MoleculeGNN(nn.Module):
    """GNN cho molecular property prediction."""
    
    def __init__(self, num_node_features, hidden_dim=128, num_classes=1):
        super().__init__()
        self.conv1 = GCNConv(num_node_features, hidden_dim)
        self.conv2 = GCNConv(hidden_dim, hidden_dim)
        self.conv3 = GCNConv(hidden_dim, hidden_dim)
        
        self.mlp = nn.Sequential(
            nn.Linear(hidden_dim, 64),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(64, num_classes),
        )
    
    def forward(self, data):
        x, edge_index, batch = data.x, data.edge_index, data.batch
        
        # Message passing
        x = torch.relu(self.conv1(x, edge_index))
        x = torch.relu(self.conv2(x, edge_index))
        x = torch.relu(self.conv3(x, edge_index))
        
        # Readout: aggregate node features → graph feature
        x = global_mean_pool(x, batch)  # (batch, hidden_dim)
        
        return self.mlp(x)


# Convert SMILES → PyG Data
def smiles_to_graph(smiles):
    mol = Chem.MolFromSmiles(smiles)
    
    # Node features: atom type, degree, charge, ...
    atom_features = []
    for atom in mol.GetAtoms():
        features = [
            atom.GetAtomicNum(),
            atom.GetDegree(),
            atom.GetFormalCharge(),
            int(atom.GetIsAromatic()),
            atom.GetNumRadicalElectrons(),
        ]
        atom_features.append(features)
    
    # Edge index
    edges = []
    for bond in mol.GetBonds():
        i, j = bond.GetBeginAtomIdx(), bond.GetEndAtomIdx()
        edges.extend([[i, j], [j, i]])
    
    return Data(
        x=torch.FloatTensor(atom_features),
        edge_index=torch.LongTensor(edges).t().contiguous(),
    )
\`\`\`

---

## 4. ADMET Prediction

ADMET = Absorption, Distribution, Metabolism, Excretion, Toxicity:

| Property | Mô tả | Model Type |
|----------|--------|-----------|
| Solubility | Tan trong nước? | Regression |
| Lipophilicity | LogP | Regression |
| CYP Inhibition | Tương tác thuốc? | Classification |
| hERG Toxicity | Độc tim? | Classification |
| BBB Penetration | Qua hàng rào máu não? | Classification |
| Bioavailability | Hấp thu qua đường uống? | Classification |

\`\`\`python
# ADMET prediction với DeepChem
import deepchem as dc

# Load pre-built ADMET dataset
tasks, datasets, transformers = dc.molnet.load_tox21()
train, val, test = datasets

# Train GCN model
model = dc.models.GCNModel(
    n_tasks=len(tasks),
    graph_conv_layers=[64, 64],
    dense_layer_size=256,
    dropout=0.2,
    learning_rate=0.001,
)
model.fit(train, nb_epoch=50)

# Evaluate
metric = dc.metrics.Metric(dc.metrics.roc_auc_score)
print(f"Test AUC: {model.evaluate(test, [metric])}")
\`\`\`

---

## 5. Molecular Generation

\`\`\`mermaid
flowchart LR
    A["Desired Properties<br/>High potency<br/>Low toxicity<br/>Good ADMET"] --> B[Generative Model<br/>VAE / Diffusion]
    B --> C[Novel Molecules<br/>SMILES]
    C --> D[Validity Check<br/>+ Filtering]
    D --> E[Synthesizability<br/>Score]
    E --> F[Top Candidates<br/>for Wet Lab]
\`\`\`

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| SMILES | Text representation cho molecules |
| GNN | Graph neural network cho molecular property prediction |
| ADMET | Dự đoán pharmacokinetics với AI |
| Molecular Gen | Thiết kế phân tử mới với desired properties |
| DeepChem | Framework chuyên dụng cho drug discovery |
`);

// Bài 10 - Genomics
writeLessonBody(HC, "03-phan-3-clinical-nlp-genomics-ai", "11-bai-10-genomics-protein.md", `
## Giới thiệu

**Genomics AI** phân tích DNA/RNA sequences để chẩn đoán bệnh di truyền, dự đoán risk, và phát triển precision medicine. **Protein Structure Prediction** đã được cách mạng hoá bởi AlphaFold — giải quyết thách thức 50 năm trong sinh học.

---

## 1. Genomics Data Pipeline

\`\`\`mermaid
flowchart LR
    A[DNA Sample] --> B[Sequencing<br/>Illumina/ONT]
    B --> C[FASTQ Files<br/>Raw reads]
    C --> D[Alignment<br/>BWA/minimap2]
    D --> E[BAM Files<br/>Sorted & indexed]
    E --> F[Variant Calling<br/>GATK/DeepVariant]
    F --> G[VCF Files<br/>Variants]
    G --> H[AI Analysis<br/>Pathogenicity prediction]
\`\`\`

---

## 2. DNA Sequence Classification

\`\`\`python
import torch
import torch.nn as nn

class DNAClassifier(nn.Module):
    """CNN cho DNA sequence classification."""
    
    VOCAB = {'A': 0, 'C': 1, 'G': 2, 'T': 3, 'N': 4}
    
    def __init__(self, seq_length=1000, num_classes=2):
        super().__init__()
        self.embedding = nn.Embedding(5, 64)
        self.conv_layers = nn.Sequential(
            nn.Conv1d(64, 128, kernel_size=15, padding=7),
            nn.BatchNorm1d(128),
            nn.ReLU(),
            nn.MaxPool1d(4),
            nn.Conv1d(128, 256, kernel_size=9, padding=4),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.MaxPool1d(4),
            nn.Conv1d(256, 256, kernel_size=5, padding=2),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.AdaptiveAvgPool1d(1),
        )
        self.classifier = nn.Sequential(
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(128, num_classes),
        )
    
    def forward(self, x):
        x = self.embedding(x)       # (batch, seq, 64)
        x = x.transpose(1, 2)       # (batch, 64, seq)
        x = self.conv_layers(x)     # (batch, 256, 1)
        x = x.squeeze(-1)           # (batch, 256)
        return self.classifier(x)

# Encode DNA sequence
def encode_dna(sequence):
    vocab = {'A': 0, 'C': 1, 'G': 2, 'T': 3, 'N': 4}
    return torch.LongTensor([vocab.get(c, 4) for c in sequence.upper()])
\`\`\`

---

## 3. Variant Pathogenicity Prediction

\`\`\`mermaid
flowchart TD
    A[Genetic Variant<br/>chr17:g.41245466G→A] --> B[Feature Extraction]
    B --> C[Conservation Score<br/>GERP, PhyloP]
    B --> D[Protein Impact<br/>Missense, Nonsense]
    B --> E[Population Frequency<br/>gnomAD]
    B --> F[Functional Annotation<br/>Regulatory, Splice]
    C & D & E & F --> G[AI Classifier<br/>CADD / SpliceAI / AlphaMissense]
    G --> H{Pathogenicity}
    H -->|Pathogenic| I[Report to clinician]
    H -->|Benign| J[No action]
    H -->|VUS| K[Further investigation]
\`\`\`

| Tool | Approach | Focus |
|------|---------|-------|
| CADD | GBT ensemble | General variant pathogenicity |
| SpliceAI | Deep CNN | Splicing effect prediction |
| AlphaMissense | AlphaFold-based | Missense variant classification |
| PrimateAI | CNN | Primate conservation-based |
| ClinVar | Curated database | Known pathogenic variants |

---

## 4. AlphaFold — Protein Structure Prediction

\`\`\`mermaid
flowchart TD
    A[Amino Acid Sequence<br/>MVLSPA...] --> B[MSA Generation<br/>Multiple Sequence Alignment]
    B --> C[Evoformer<br/>48 blocks]
    C --> D[Structure Module<br/>8 blocks]
    D --> E[3D Structure<br/>+ pLDDT confidence]

    subgraph Evoformer
        C1[MSA Row Attention]
        C2[MSA Column Attention]
        C3[Pair Representation]
        C1 <--> C3
        C2 <--> C3
    end
\`\`\`

\`\`\`python
# Sử dụng ESMFold (Meta) — single-sequence protein structure
from transformers import EsmForProteinFolding, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("facebook/esmfold_v1")
model = EsmForProteinFolding.from_pretrained("facebook/esmfold_v1")

sequence = "MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSH"

inputs = tokenizer(sequence, return_tensors="pt", add_special_tokens=False)
with torch.no_grad():
    outputs = model(**inputs)

# outputs.positions — 3D coordinates per residue
# outputs.plddt    — confidence per residue (0-100)
print(f"Predicted structure shape: {outputs.positions.shape}")
print(f"Mean pLDDT: {outputs.plddt.mean():.1f}")
\`\`\`

---

## 5. Precision Medicine

\`\`\`mermaid
flowchart TD
    A[Patient's Genome] --> B[Variant Analysis]
    B --> C[Pharmacogenomics<br/>CYP2D6, CYP2C19]
    B --> D[Cancer Genomics<br/>Somatic mutations]
    B --> E[Rare Disease<br/>Mendelian analysis]
    
    C --> F[Drug Selection<br/>& Dosing]
    D --> G[Targeted Therapy<br/>Selection]
    E --> H[Diagnosis &<br/>Genetic Counseling]
\`\`\`

| Application | Example | AI Role |
|------------|---------|---------|
| Pharmacogenomics | CYP2D6 poor metabolizer → adjust codeine dose | Variant classification |
| Cancer | BRCA1 mutation → PARP inhibitor | Somatic variant calling |
| Rare disease | WES/WGS → identify causal variant | Variant prioritization |
| PRS | Polygenic Risk Score for diabetes | Risk prediction |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| DNA Classification | CNN/Transformer trên encoded sequences |
| Variant Prediction | CADD, SpliceAI, AlphaMissense |
| AlphaFold | Protein structure từ sequence — Nobel Prize 2024 |
| Precision Medicine | Genome → personalized treatment |
`);

// Bài 11 - Federated Learning
writeLessonBody(HC, "04-phan-4-production-compliance", "12-bai-11-federated-learning-y-te.md", `
## Giới thiệu

**Federated Learning (FL)** cho phép train AI model trên dữ liệu y tế **mà không cần share data** giữa các bệnh viện — giải quyết bài toán privacy, HIPAA compliance, và data sovereignty. Mỗi bệnh viện giữ data tại chỗ, chỉ share model updates.

---

## 1. Tại sao cần Federated Learning trong Y tế?

\`\`\`mermaid
flowchart TD
    subgraph "Traditional ML ❌"
        A1[Hospital A Data] --> B1[Central Server]
        A2[Hospital B Data] --> B1
        A3[Hospital C Data] --> B1
        B1 --> C1[Train Model]
        C1 --> D1[Model]
    end
    
    subgraph "Federated Learning ✅"
        E1[Hospital A<br/>Train locally] --> F1[Gradient / Model Updates]
        E2[Hospital B<br/>Train locally] --> F2[Gradient / Model Updates]
        E3[Hospital C<br/>Train locally] --> F3[Gradient / Model Updates]
        F1 & F2 & F3 --> G1[Central Server<br/>Aggregate updates]
        G1 --> H1[Global Model]
        H1 --> E1 & E2 & E3
    end
\`\`\`

| Challenge | Centralized | Federated |
|-----------|------------|-----------|
| Data privacy | ❌ Data leaves hospital | ✅ Data stays local |
| HIPAA/GDPR | Complex BAA needed | ✅ Simpler compliance |
| Data heterogeneity | ❌ All in one format | ⚠️ Need handling |
| Communication cost | High bandwidth (data) | Lower (model weights) |

---

## 2. FedAvg Algorithm

\`\`\`python
# Simplified Federated Averaging
import torch
import copy

class FederatedServer:
    def __init__(self, model, num_clients):
        self.global_model = model
        self.num_clients = num_clients
    
    def aggregate(self, client_models, client_weights):
        """Weighted average of client model parameters."""
        global_dict = self.global_model.state_dict()
        
        for key in global_dict:
            global_dict[key] = sum(
                client_models[i].state_dict()[key] * client_weights[i]
                for i in range(len(client_models))
            )
        
        self.global_model.load_state_dict(global_dict)
        return self.global_model

class FederatedClient:
    def __init__(self, model, train_data, client_id):
        self.model = copy.deepcopy(model)
        self.train_data = train_data
        self.client_id = client_id
    
    def train(self, global_model, epochs=5, lr=0.001):
        """Local training on hospital data."""
        self.model.load_state_dict(global_model.state_dict())
        optimizer = torch.optim.Adam(self.model.parameters(), lr=lr)
        criterion = torch.nn.BCEWithLogitsLoss()
        
        self.model.train()
        for epoch in range(epochs):
            for images, labels in self.train_data:
                optimizer.zero_grad()
                outputs = self.model(images)
                loss = criterion(outputs, labels)
                loss.backward()
                optimizer.step()
        
        return self.model
\`\`\`

---

## 3. Flower Framework

\`\`\`python
import flwr as fl
import torch

# === Server ===
strategy = fl.server.strategy.FedAvg(
    fraction_fit=0.5,        # 50% clients per round
    min_fit_clients=3,       # Minimum 3 hospitals
    min_available_clients=5, # Need 5 hospitals online
)

fl.server.start_server(
    server_address="0.0.0.0:8080",
    config=fl.server.ServerConfig(num_rounds=20),
    strategy=strategy,
)

# === Client (each hospital) ===
class HospitalClient(fl.client.NumPyClient):
    def __init__(self, model, train_loader, val_loader):
        self.model = model
        self.train_loader = train_loader
        self.val_loader = val_loader
    
    def get_parameters(self, config):
        return [p.detach().numpy() for p in self.model.parameters()]
    
    def fit(self, parameters, config):
        # Set global model weights
        for p, param in zip(self.model.parameters(), parameters):
            p.data = torch.from_numpy(param)
        
        # Local training
        train_local(self.model, self.train_loader, epochs=5)
        
        return self.get_parameters({}), len(self.train_loader.dataset), {}
    
    def evaluate(self, parameters, config):
        for p, param in zip(self.model.parameters(), parameters):
            p.data = torch.from_numpy(param)
        
        loss, auc = evaluate_model(self.model, self.val_loader)
        return float(loss), len(self.val_loader.dataset), {"auc": float(auc)}

# Start client
fl.client.start_numpy_client(
    server_address="server:8080",
    client=HospitalClient(model, train_loader, val_loader),
)
\`\`\`

---

## 4. Privacy-Enhancing Techniques

\`\`\`mermaid
flowchart TD
    A[Federated Learning] --> B[Differential Privacy<br/>Add noise to gradients]
    A --> C[Secure Aggregation<br/>Encrypt model updates]
    A --> D[Homomorphic Encryption<br/>Compute on encrypted data]
    
    B --> E[Privacy guarantee<br/>ε-differential privacy]
    C --> F[Server can't see<br/>individual updates]
    D --> G[Strongest but<br/>slowest]
\`\`\`

\`\`\`python
# Differential Privacy with Opacus
from opacus import PrivacyEngine

model = CheXNetModel()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

privacy_engine = PrivacyEngine()
model, optimizer, train_loader = privacy_engine.make_private(
    module=model,
    optimizer=optimizer,
    data_loader=train_loader,
    noise_multiplier=1.0,   # More noise = more privacy
    max_grad_norm=1.0,       # Gradient clipping
)

# Train normally — Opacus handles DP automatically
for batch in train_loader:
    optimizer.zero_grad()
    loss = criterion(model(batch["image"]), batch["label"])
    loss.backward()
    optimizer.step()

# Check privacy budget
epsilon = privacy_engine.get_epsilon(delta=1e-5)
print(f"Privacy budget: ε = {epsilon:.2f}")
\`\`\`

---

## 5. Real-world FL in Healthcare

| Project | Hospitals | Task | Impact |
|---------|----------|------|--------|
| FeTS (UPenn) | 71 sites, 6 continents | Brain tumor segmentation | +33% vs single-site |
| EXAM (NVIDIA FLARE) | 20 hospitals | COVID-19 severity prediction | +16% AUC |
| Owkin (France) | Multiple cancer centers | Cancer survival prediction | Published Nature Med |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Federated Learning | Train trên multi-hospital data mà không share |
| FedAvg | Aggregate model weights — simple & effective |
| Flower | Production-ready FL framework |
| Differential Privacy | Thêm noise để bảo vệ individual records |
| Real-world | FeTS, EXAM — đã chứng minh FL vượt single-site |
`);

// Bài 12 - XAI
writeLessonBody(HC, "04-phan-4-production-compliance", "13-bai-12-xai-y-te.md", `
## Giới thiệu

**Explainable AI (XAI)** là yêu cầu bắt buộc trong y tế — bác sĩ cần hiểu **tại sao** AI đưa ra quyết định trước khi hành động. FDA và EU AI Act đều yêu cầu transparency cho AI medical devices.

---

## 1. Tại sao XAI quan trọng trong Y tế?

\`\`\`mermaid
flowchart LR
    A[AI Prediction<br/>Pneumonia: 0.92] --> B{Bác sĩ nhận kết quả}
    B -->|Without XAI| C["'AI nói có pneumonia'<br/>Trust or not?<br/>❌ Black box"]
    B -->|With XAI| D["'AI nói pneumonia<br/>vì vùng phổi phải dưới<br/>có consolidation'<br/>✅ Actionable"]
\`\`\`

| Lý do | Chi tiết |
|-------|----------|
| Clinical trust | Bác sĩ không dùng tool họ không hiểu |
| Error detection | Phát hiện AI nhìn sai vùng (artifact, laterality marker) |
| Legal | Cần giải thích quyết định cho bệnh nhân |
| Regulatory | FDA yêu cầu transparency cho SaMD |
| Bias detection | Kiểm tra AI có bias theo demographics không |

---

## 2. XAI Methods cho Medical Imaging

\`\`\`mermaid
graph TD
    A[XAI Methods] --> B[Gradient-based]
    A --> C[Perturbation-based]
    A --> D[Attention-based]
    
    B --> B1[Grad-CAM]
    B --> B2[Integrated Gradients]
    B --> B3[SmoothGrad]
    
    C --> C1[LIME]
    C --> C2[SHAP]
    C --> C3[Occlusion]
    
    D --> D1[Attention Maps<br/>ViT]
    D --> D2[Self-Attention<br/>Rollout]
\`\`\`

### 2.1 Grad-CAM cho X-ray

\`\`\`python
import torch
import torch.nn.functional as F
import numpy as np
import cv2

def grad_cam(model, image, target_class, target_layer):
    """Generate Grad-CAM heatmap cho medical image."""
    # Hooks to capture activations and gradients
    activations = {}
    gradients = {}
    
    def forward_hook(module, input, output):
        activations['value'] = output.detach()
    
    def backward_hook(module, grad_input, grad_output):
        gradients['value'] = grad_output[0].detach()
    
    handle_fwd = target_layer.register_forward_hook(forward_hook)
    handle_bwd = target_layer.register_full_backward_hook(backward_hook)
    
    # Forward
    model.eval()
    output = model(image)
    
    # Backward for target class
    model.zero_grad()
    output[0, target_class].backward()
    
    # Compute heatmap
    weights = gradients['value'].mean(dim=[2, 3], keepdim=True)
    cam = (weights * activations['value']).sum(dim=1, keepdim=True)
    cam = F.relu(cam)
    cam = F.interpolate(cam, size=image.shape[2:], mode='bilinear', align_corners=False)
    cam = (cam - cam.min()) / (cam.max() - cam.min() + 1e-8)
    
    handle_fwd.remove()
    handle_bwd.remove()
    
    return cam.squeeze().cpu().numpy()

# Visualize
def overlay_heatmap(image, cam, alpha=0.4):
    heatmap = cv2.applyColorMap(np.uint8(255 * cam), cv2.COLORMAP_JET)
    heatmap = cv2.cvtColor(heatmap, cv2.COLOR_BGR2RGB)
    
    if len(image.shape) == 2:
        image_rgb = cv2.cvtColor(np.uint8(255 * image), cv2.COLOR_GRAY2RGB)
    else:
        image_rgb = np.uint8(255 * image)
    
    overlay = cv2.addWeighted(image_rgb, 1 - alpha, heatmap, alpha, 0)
    return overlay
\`\`\`

### 2.2 SHAP cho Tabular Medical Data

\`\`\`python
import shap

# SHAP cho mortality prediction model
explainer = shap.TreeExplainer(xgb_model)
shap_values = explainer.shap_values(patient_features)

# Feature importance visualization
shap.summary_plot(shap_values, patient_features, feature_names=[
    "Age", "Heart Rate", "Blood Pressure", "SpO2",
    "Respiratory Rate", "Temperature", "GCS", "Lactate",
    "Creatinine", "Bilirubin", "Platelet Count", "WBC",
])

# Single patient explanation
shap.force_plot(
    explainer.expected_value,
    shap_values[patient_idx],
    patient_features.iloc[patient_idx],
)
\`\`\`

### 2.3 LIME cho Medical Images

\`\`\`python
from lime import lime_image

explainer = lime_image.LimeImageExplainer()

explanation = explainer.explain_instance(
    image_np,
    model_predict_fn,
    top_labels=3,
    hide_color=0,
    num_samples=1000,
)

# Visualize — green = supports prediction, red = against
temp, mask = explanation.get_image_and_mask(
    label=predicted_class,
    positive_only=False,
    num_features=10,
    hide_rest=False,
)
\`\`\`

---

## 3. Faithfulness Evaluation

| Test | Method | Purpose |
|------|--------|---------|
| Deletion | Remove top-k important pixels | Prediction should drop |
| Insertion | Add top-k pixels to blank | Prediction should rise |
| Pointing Game | Check if highlight hits GT bbox | Localization accuracy |
| Sanity Check | Randomize model → XAI should change | Verify explanation is model-dependent |

---

## 4. Clinical Validation của XAI

\`\`\`mermaid
flowchart TD
    A[Train AI Model] --> B[Generate Explanations]
    B --> C[Radiologist Study]
    C --> D{Questions}
    D --> E["Is the explanation<br/>clinically meaningful?"]
    D --> F["Does it highlight<br/>correct anatomy?"]
    D --> G["Does it improve<br/>diagnostic confidence?"]
    D --> H["Does it reduce<br/>diagnostic errors?"]
\`\`\`

---

## Tổng kết

| Method | Type | Speed | Faithfulness | Clinical Use |
|--------|------|-------|-------------|-------------|
| Grad-CAM | Gradient | Fast | Good | **Standard cho imaging** |
| SHAP | Perturbation | Slow | High | **Standard cho tabular** |
| LIME | Perturbation | Slow | Good | Interpretable regions |
| Attention | Built-in | Fast | Variable | ViT models |
| Integrated Gradients | Gradient | Medium | High | Detailed attribution |
`);

// Bài 13 - FDA Regulatory
writeLessonBody(HC, "04-phan-4-production-compliance", "14-bai-13-fda-regulatory.md", `
## Giới thiệu

Phát triển **AI Medical Device** cần hiểu rõ regulatory pathway — từ FDA (Mỹ), CE Mark (EU), đến các cơ quan APAC. Sai quy trình có thể dẫn đến sản phẩm bị từ chối, thu hồi, hoặc phạt nặng.

---

## 1. FDA Regulatory Framework

\`\`\`mermaid
flowchart TD
    A[AI/ML Medical Device] --> B{Device Classification}
    B -->|Class I<br/>Low Risk| C[510k Exempt<br/>Self-certification]
    B -->|Class II<br/>Moderate Risk| D{Pathway}
    B -->|Class III<br/>High Risk| E[PMA<br/>Premarket Approval]
    
    D -->|Predicate exists| F[510k Clearance<br/>~3-6 months]
    D -->|No predicate| G[De Novo<br/>~6-12 months]
    
    style C fill:#e8f5e9
    style F fill:#fff3e0
    style G fill:#e3f2fd
    style E fill:#ffebee
\`\`\`

### FDA AI/ML Categories

| Category | Ví dụ | Risk | Pathway |
|----------|-------|------|---------|
| CADe | Computer-aided Detection — highlight suspect areas | Moderate | 510(k) |
| CADx | Computer-aided Diagnosis — provide diagnosis | Moderate-High | 510(k) / De Novo |
| CADt | Computer-aided Triage — prioritize worklist | Moderate | 510(k) |
| Autonomous AI | AI makes decision without physician | High | De Novo / PMA |

---

## 2. 510(k) Submission cho AI

\`\`\`mermaid
flowchart LR
    A[Define<br/>Intended Use] --> B[Identify<br/>Predicate]
    B --> C[Clinical<br/>Validation]
    C --> D[Prepare<br/>Submission]
    D --> E[FDA<br/>Review]
    E --> F{Decision}
    F -->|Cleared| G[Market]
    F -->|Additional Info| H[Respond]
    F -->|Not Cleared| I[Revise &<br/>Resubmit]
    H --> E
\`\`\`

### Key Submission Components

\`\`\`
510(k) Submission Structure:
├── Device Description
│   ├── Intended Use / Indications for Use
│   ├── Algorithm Description (architecture, training)
│   └── Input/Output specifications
├── Predicate Comparison
│   └── Substantial Equivalence argument
├── Performance Testing
│   ├── Standalone performance (AUC, Sensitivity, Specificity)
│   ├── Clinical validation study
│   └── Sub-population analysis (age, sex, race)
├── Software Documentation
│   ├── Software Development Life Cycle
│   ├── Risk Management (ISO 14971)
│   └── Cybersecurity
└── Labeling
    ├── Instructions for Use
    └── Warnings/Precautions
\`\`\`

---

## 3. Clinical Validation Study Design

\`\`\`mermaid
flowchart TD
    A[Study Design] --> B[Retrospective]
    A --> C[Prospective]
    
    B --> D[Curated dataset<br/>with ground truth]
    C --> E[Real clinical setting<br/>Reader study]
    
    D --> F[Standalone<br/>Performance]
    E --> G[AI-assisted<br/>vs Unassisted]
    
    F --> H[AUC, Sens, Spec<br/>per subgroup]
    G --> I[Reader performance<br/>improvement]
\`\`\`

| Study Type | Speed | FDA Weight | Cost |
|-----------|-------|-----------|------|
| Retrospective, multi-site | 3-6 months | Good | $$ |
| Prospective reader study | 6-12 months | Best | $$$$ |
| Real-world evidence | Ongoing | Supplementary | $$ |

---

## 4. EU MDR & AI Act

| Regulation | Scope | Key Requirements |
|-----------|-------|-----------------|
| EU MDR (2017/745) | Medical devices in EU | CE Marking, Notified Body audit |
| EU AI Act (2024) | AI systems in EU | Risk classification, transparency |
| AI Act — High Risk | AI medical devices | Conformity assessment, human oversight |

---

## 5. Post-market Surveillance

\`\`\`mermaid
flowchart TD
    A[Deployed AI Device] --> B[Continuous Monitoring]
    B --> C[Performance Metrics<br/>AUC, Sensitivity drift]
    B --> D[Adverse Events<br/>MDR reporting]
    B --> E[User Complaints]
    B --> F[Data Drift<br/>New scanner, population]
    
    C & D & E & F --> G{Action Needed?}
    G -->|Yes| H[CAPA<br/>Corrective Action]
    G -->|Model Update| I[PCCP<br/>Predetermined Change Control Plan]
    G -->|No| J[Continue Monitoring]
\`\`\`

> 💡 **PCCP (Predetermined Change Control Plan)** — FDA 2023: cho phép pre-define cách model sẽ được update mà không cần submit mới.

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| 510(k) | Substantial equivalence to predicate — most common |
| De Novo | Novel device, no predicate — defines new risk category |
| Clinical Validation | Multi-site, subgroup analysis required |
| EU AI Act | High-risk AI classification cho medical devices |
| Post-market | Continuous monitoring + PCCP cho model updates |
`);

// Bài 14 - Deploy Medical AI
writeLessonBody(HC, "04-phan-4-production-compliance", "15-bai-14-deploy-medical-ai.md", `
## Giới thiệu

**Deploy Medical AI vào Production** đòi hỏi HIPAA-compliant infrastructure, clinical workflow integration, monitoring liên tục, và audit trails. Đây là phần khó nhất — nhiều AI models đạt SOTA trong paper nhưng không bao giờ thành sản phẩm thực.

---

## 1. Medical AI Production Architecture

\`\`\`mermaid
flowchart TD
    subgraph Clinical System
        A[PACS] -->|DICOM| B[DICOM Router]
        B --> C[AI Gateway]
    end
    
    subgraph AI Service [HIPAA-Compliant Cloud]
        C --> D[Preprocessing<br/>Service]
        D --> E[Inference<br/>Service]
        E --> F[Post-processing<br/>& Report]
        F --> G[DICOM SR<br/>Generator]
    end
    
    subgraph Monitoring
        E --> H[Performance<br/>Monitor]
        E --> I[Latency<br/>Tracker]
        E --> J[Audit<br/>Log]
    end
    
    G --> A
\`\`\`

---

## 2. HIPAA-Compliant Infrastructure

\`\`\`python
# Docker setup cho HIPAA compliance
\`\`\`

\`\`\`yaml
# docker-compose.yml cho Medical AI service
version: '3.8'
services:
  ai-inference:
    image: medical-ai:latest
    environment:
      - ENCRYPTION_AT_REST=true
      - TLS_ENABLED=true
      - AUDIT_LOG_ENABLED=true
    volumes:
      - type: tmpfs
        target: /tmp  # No data persistence on disk
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    networks:
      - hipaa-net
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        tag: "ai-inference"

  dicom-router:
    image: orthanc:latest
    environment:
      - ORTHANC__REGISTERED_USERS={"ai-service": "secure-password-here"}
    ports:
      - "4242:4242"  # DICOM port
      - "8042:8042"  # REST API
    networks:
      - hipaa-net

networks:
  hipaa-net:
    driver: bridge
    driver_opts:
      encrypted: "true"
\`\`\`

### HIPAA Technical Safeguards Checklist

| Requirement | Implementation |
|------------|---------------|
| Encryption at rest | AES-256 volumes, encrypted DB |
| Encryption in transit | TLS 1.3 everywhere |
| Access control | RBAC, MFA, least privilege |
| Audit logging | All access to PHI logged |
| Data backup | Encrypted backups, tested restore |
| Breach notification | Automated detection + alerting |
| BAA | Business Associate Agreement với cloud provider |

---

## 3. Model Serving cho Medical AI

\`\`\`python
from fastapi import FastAPI, UploadFile
import torch
import pydicom
from io import BytesIO

app = FastAPI(title="Medical AI Inference")

# Load model once at startup
model = None

@app.on_event("startup")
async def load_model():
    global model
    model = CheXNetModel(num_classes=14)
    model.load_state_dict(torch.load("best_model.pth", map_location="cpu"))
    model.eval()

@app.post("/predict")
async def predict(file: UploadFile):
    # 1. Read DICOM
    content = await file.read()
    ds = pydicom.dcmread(BytesIO(content))
    
    # 2. Preprocess
    image = preprocess_xray(ds)
    tensor = torch.FloatTensor(image).unsqueeze(0).unsqueeze(0)
    
    # 3. Inference
    with torch.no_grad():
        logits = model(tensor)
        probs = torch.sigmoid(logits).squeeze().tolist()
    
    # 4. Format results
    LABELS = ["No Finding", "Cardiomegaly", "Edema", "Consolidation",
              "Pneumonia", "Atelectasis", "Pneumothorax", "Pleural Effusion",
              "Lung Opacity", "Lung Lesion", "Fracture", "Support Devices",
              "Enlarged Cardiomediastinum", "Pleural Other"]
    
    results = [
        {"finding": label, "probability": round(prob, 4)}
        for label, prob in zip(LABELS, probs)
        if prob > 0.3  # Threshold
    ]
    results.sort(key=lambda x: x["probability"], reverse=True)
    
    # 5. Audit log
    log_inference(ds.PatientID, ds.StudyInstanceUID, results)
    
    return {"findings": results, "model_version": "v2.1.0"}
\`\`\`

---

## 4. Performance Monitoring

\`\`\`mermaid
flowchart LR
    A[Production<br/>Predictions] --> B[Compare with<br/>Radiologist Reads]
    B --> C[Performance<br/>Dashboard]
    C --> D{Drift Detected?}
    D -->|Yes| E[Alert + Investigation]
    D -->|No| F[Continue Monitoring]
    E --> G[Root Cause Analysis]
    G --> H[New scanner? Population shift?<br/>Software update?]
\`\`\`

\`\`\`python
class MedicalAIMonitor:
    def __init__(self):
        self.predictions = []
        self.ground_truths = []
    
    def log_prediction(self, study_id, prediction, confidence):
        self.predictions.append({
            "study_id": study_id,
            "prediction": prediction,
            "confidence": confidence,
            "timestamp": datetime.now(),
        })
    
    def check_performance(self, window_days=30):
        """Check if model performance is degrading."""
        recent = self._get_recent(window_days)
        
        # 1. Confidence distribution shift
        recent_conf = [p["confidence"] for p in recent]
        if np.mean(recent_conf) < 0.7:  # Low confidence alert
            self.alert("Low average confidence detected")
        
        # 2. Prediction distribution shift
        pred_counts = Counter(p["prediction"] for p in recent)
        # Compare with baseline distribution
        
        # 3. If ground truth available, compute AUC trend
        if self.ground_truths:
            auc = compute_auc(recent, self.ground_truths)
            if auc < 0.85:  # Below acceptable threshold
                self.alert(f"AUC dropped to {auc:.3f}")
\`\`\`

---

## 5. DICOM Integration

\`\`\`python
from pydicom.dataset import Dataset
from pydicom.uid import generate_uid
from pydicom.sr.codedict import codes

def create_dicom_sr(study_ds, findings):
    """Create DICOM Structured Report with AI findings."""
    sr = Dataset()
    sr.SOPClassUID = "1.2.840.10008.5.1.4.1.1.88.22"  # Enhanced SR
    sr.SOPInstanceUID = generate_uid()
    sr.Modality = "SR"
    sr.SeriesDescription = "AI Analysis Report"
    
    # Reference original study
    sr.StudyInstanceUID = study_ds.StudyInstanceUID
    sr.PatientID = study_ds.PatientID
    
    # Content sequence with findings
    # ... structured report content ...
    
    return sr
\`\`\`

---

## Tổng kết

| Aspect | Best Practice |
|--------|---------------|
| Infrastructure | HIPAA-compliant cloud, encryption, BAA |
| Serving | FastAPI + ONNX, DICOM integration |
| Security | TLS, RBAC, audit logging, no PHI in logs |
| Monitoring | Performance drift, confidence tracking |
| Integration | DICOM SR output back to PACS |
`);

// Bài 15 - Capstone
writeLessonBody(HC, "04-phan-4-production-compliance", "16-bai-15-capstone-medical-ai.md", `
## Giới thiệu

Capstone project áp dụng toàn bộ kiến thức Healthcare AI vào một bài toán thực tế end-to-end — từ data pipeline đến model training, explainability, và deploy tuân thủ regulations.

---

## Chọn 1 trong 3 Projects

### Project 1: Chest X-ray Classification System

\`\`\`mermaid
flowchart LR
    A[CheXpert<br/>Dataset] --> B[Preprocessing<br/>CLAHE + Resize]
    B --> C[DenseNet-121<br/>Transfer Learning]
    C --> D[Multi-label<br/>14 Pathologies]
    D --> E[Grad-CAM<br/>Explainability]
    E --> F[FastAPI<br/>Service]
    F --> G[Monitoring<br/>Dashboard]
\`\`\`

**Deliverables:**
1. Model đạt AUC ≥ 0.85 trên CheXpert test set
2. Grad-CAM visualization cho mỗi prediction
3. API endpoint nhận DICOM, trả kết quả + heatmap
4. Performance monitoring script

### Project 2: Clinical NLP Pipeline

\`\`\`mermaid
flowchart LR
    A[MIMIC-III<br/>Clinical Notes] --> B[De-identification]
    B --> C[NER<br/>BioBERT]
    C --> D[Negation<br/>Detection]
    D --> E[Relation<br/>Extraction]
    E --> F[Structured<br/>Output JSON]
    F --> G[ICD Code<br/>Suggestion]
\`\`\`

**Deliverables:**
1. NER model F1 ≥ 0.80 cho medical entities
2. Negation detection accuracy ≥ 0.90
3. Structured data extraction pipeline
4. De-identification module cho clinical text

### Project 3: Medical Image Segmentation

\`\`\`mermaid
flowchart LR
    A[BraTS Dataset<br/>Brain MRI] --> B[3D Preprocessing<br/>MONAI]
    B --> C[U-Net / nnU-Net]
    C --> D[Tumor<br/>Segmentation]
    D --> E[Volume<br/>Calculation]
    E --> F[3D<br/>Visualization]
\`\`\`

**Deliverables:**
1. Dice score ≥ 0.80 trên BraTS validation
2. 3D visualization of segmented tumors
3. Volume/growth tracking across time points
4. Report generation

---

## Evaluation Rubric

| Criteria | Weight | Excellent (A) | Good (B) |
|----------|--------|--------------|----------|
| Model Performance | 25% | Meets target metrics | Close to target |
| Code Quality | 20% | Clean, documented, tested | Readable, some tests |
| Explainability | 20% | Multiple XAI methods | At least Grad-CAM |
| Clinical Relevance | 15% | Validated by domain expert | Clinically reasonable |
| Documentation | 10% | Complete report + README | Basic documentation |
| Demo | 10% | Working web demo | Screenshots/video |

---

## Submission Checklist

- [ ] GitHub repository với clean code
- [ ] README với setup instructions
- [ ] Training logs và learning curves
- [ ] Model performance report (per-class metrics)
- [ ] XAI visualizations (≥10 examples)
- [ ] Deploy instructions (Docker)
- [ ] Video demo hoặc live web app

---

## Tổng kết

Chúc mừng bạn đã hoàn thành series **AI trong Y tế & Healthcare**!

### Kiến thức đã học

| Phần | Nội dung chính |
|------|----------------|
| 1. Nền tảng | Medical data, DICOM, FHIR, preprocessing |
| 2. Medical Imaging | CNN classification, U-Net segmentation, detection |
| 3. Clinical NLP | NER, negation, drug discovery, genomics |
| 4. Production | Federated learning, XAI, FDA, deploy |

### Con đường tiếp theo

- **Research**: Đọc papers trên arXiv — cs.CV (medical imaging), cs.CL (clinical NLP)
- **Certification**: AWS Healthcare, Google Health AI
- **Community**: MICCAI, RSNA AI, AMIA
- **Career**: Medical AI Engineer, Clinical Data Scientist, Regulatory Affairs
`);

console.log("✅ Healthcare AI — all 15 lessons rewritten!\n");

// Count total lines
let totalLines = 0;
const countDir = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) countDir(fullPath);
    else if (entry.name.endsWith('.md')) {
      const lines = fs.readFileSync(fullPath, 'utf8').split('\n').length;
      totalLines += lines;
    }
  }
};
countDir(path.join(SERIES_BASE, HC, "chapters"));
console.log(`Total lines in Healthcare AI lessons: ${totalLines}`);
