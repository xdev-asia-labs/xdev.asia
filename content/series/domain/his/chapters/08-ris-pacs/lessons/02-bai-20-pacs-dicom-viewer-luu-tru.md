---
id: 019f5a01-d000-7001-his0-000000000802
title: "Bài 20: PACS — DICOM, viewer & lưu trữ ảnh y tế"
slug: bai-20-pacs-dicom-viewer-luu-tru
description: >-
  PACS là gì, chuẩn DICOM, lưu trữ tier (online/nearline/offline), web
  viewer cho lâm sàng, chia sẻ ảnh với bệnh nhân, tuân thủ thời gian lưu
  trữ theo TT 56.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-20-pacs-dicom-viewer-luu-tru-banner.png
video_url: null
sort_order: 2
section_title: "Phần 8: Chẩn đoán hình ảnh (RIS / PACS)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![PACS — lưu trữ và xem DICOM](/storage/uploads/2026/05/his/bai-20-pacs-dicom-viewer-luu-tru-banner.png)

## Vai trò PACS

![Workstation PACS với so sánh prior/current](/storage/uploads/2026/05/his/bai-20-pacs-dicom-viewer-luu-tru-workflow.png)


PACS (**Picture Archiving and Communication System**) lưu và phân phối ảnh y tế chuẩn DICOM. Khác RIS:

- RIS = thông tin (text, lịch, báo cáo).
- PACS = pixel (CT slices, MRI series, X-quang, siêu âm).

## Chuẩn DICOM cốt lõi

```
Patient
└── Study (1 lần chụp)
    └── Series (1 chuỗi ảnh: trục axial, sagittal...)
        └── Instance (1 file ảnh)
```

UID:

- Study Instance UID
- Series Instance UID
- SOP Instance UID

Mỗi UID là duy nhất toàn cầu — KHÔNG tái sử dụng.

## Lưu trữ phân tầng

| Tier | Đặc điểm | Truy xuất | Chi phí |
| --- | --- | --- | --- |
| Online (SSD) | 30–90 ngày gần nhất | < 2 s | Cao |
| Nearline (HDD) | 1–3 năm | 5–15 s | Trung bình |
| Offline (Tape/Object) | > 3 năm | Phút | Thấp |

Cần job tự động "demote" study cũ xuống tier rẻ hơn — gọi là **HSM (Hierarchical Storage Management)**.

## Thời gian lưu trữ theo quy định

- HSBA nội trú: **ít nhất 10 năm** sau ra viện.
- HSBA ngoại trú: **ít nhất 5 năm**.
- Ung thư, tâm thần, nghề nghiệp: **vĩnh viễn**.
- Phim CĐHA gắn với HSBA cùng thời hạn.

## Web Viewer (zero-footprint)

BS lâm sàng không nên phải cài viewer DICOM dày. Chuẩn hiện đại dùng **WADO-RS / DICOMweb**:

- BS click "xem ảnh" trong EMR → mở viewer trên trình duyệt.
- Hỗ trợ MPR, MIP, đo đạc, so sánh prior study.
- Lazy-load: tải sub-images theo thao tác zoom/scroll → không phải tải cả GB ảnh.

## Chia sẻ với bệnh nhân

- App / web "Hồ sơ của tôi" → BN xem ảnh + KQ.
- Giấy ra viện kèm **QR link** xem online + tải DICOM.
- Tuân thủ **PHI**: link có token, hết hạn, không index search engine.

## Chia sẻ liên BV

Hai cách phổ biến:

1. **DICOM CD** — vẫn dùng cho BN tự cầm.
2. **XDS-I.b / FHIR ImagingStudy** — chia sẻ qua HIE / HSSK.

## QC ảnh

KTV cần đánh dấu **reject reason** khi ảnh lỗi (mờ, sai tư thế) → KPI chất lượng kỹ thuật, dùng để đào tạo.

## Bài học vận hành

- Backup PACS bắt buộc **3-2-1** (3 bản, 2 media, 1 offsite).
- Theo dõi **dung lượng tăng** (CT 64 lát có thể 500 MB / study, MRI cardiac 1–2 GB).
- Có quy trình **anonymize** trước khi chia sẻ cho nghiên cứu / hội thảo.

> **Bài tiếp theo:** Tích hợp PACS với AI hỗ trợ đọc ảnh.
