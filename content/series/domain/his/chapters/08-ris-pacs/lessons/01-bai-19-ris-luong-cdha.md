---
id: 019f5a01-d000-7001-his0-000000000801
title: "Bài 19: RIS — luồng nghiệp vụ chẩn đoán hình ảnh"
slug: bai-19-ris-luong-cdha
description: >-
  Order CĐHA, scheduling máy CT/MRI, chuẩn bị bệnh nhân, chụp, đọc kết quả
  bởi BS chẩn đoán hình ảnh, ký số phiếu CĐHA và trả về EMR.
duration_minutes: 55
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-19-ris-luong-cdha-banner.png
video_url: null
sort_order: 1
section_title: "Phần 8: Chẩn đoán hình ảnh (RIS / PACS)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![RIS — quy trình chẩn đoán hình ảnh](/storage/uploads/2026/05/his/bai-19-ris-luong-cdha-banner.png)

## Tổng quan

![Phòng CT/MR và phòng đọc hình của bác sĩ](/storage/uploads/2026/05/his/bai-19-ris-luong-cdha-workflow.png)


RIS (**Radiology Information System**) quản lý phần "thông tin" của khoa CĐHA: order, lịch chụp, báo cáo. PACS lo phần "ảnh" (xem ch.8 bài 20). Cả hai chạy song song nhưng dữ liệu được ghép qua **Accession Number**.

## Luồng nghiệp vụ

```
[Order EMR] → [RIS nhận]
        │
        ▼
[Scheduler chọn máy + slot] → [Sinh Accession Number]
        │
        ▼
[Hướng dẫn BN chuẩn bị (nhịn ăn, uống thuốc cản quang)]
        │
        ▼
[Kỹ thuật viên chụp — Worklist DICOM tới máy]
        │
        ▼
[Ảnh đẩy về PACS] ← liên kết qua Accession Number ← [RIS]
        │
        ▼
[BS CĐHA đọc trên Viewer] → [Soạn báo cáo + ký số]
        │
        ▼
[Trả EMR + Billing]
```

## Loại dịch vụ điển hình

| Nhóm | Dịch vụ | Đặc thù |
| --- | --- | --- |
| X-quang | Ngực, xương khớp | Nhanh, không chuẩn bị |
| Siêu âm | Bụng, tim, mạch | Cần KTV/BS thực hiện |
| CT | Sọ, ngực, bụng có/không cản quang | Cản quang cần xét chức năng thận |
| MRI | Sọ, cột sống, khớp | 30–60 phút/ca, cần loại bỏ kim loại |
| Can thiệp mạch | DSA | Phối hợp với phòng can thiệp |
| Y học hạt nhân | PET, SPECT | Xem ch.11 |

## Modality Worklist (MWL)

Chuẩn DICOM cho phép RIS đẩy danh sách chụp (worklist) tới máy:

```
RIS → DICOM C-FIND-RSP → Máy chụp
{
  PatientID: 100023
  PatientName: NGUYEN^VAN^A
  AccessionNumber: ACC-20260512-0123
  ScheduledProcedureStepDescription: CT scan ngực có cản quang
}
```

Lợi ích: KTV không nhập tay → giảm sai bệnh nhân, sai phim.

## Phiếu kết quả CĐHA

Cấu trúc chuẩn:

- Thông tin BN, lâm sàng (chẩn đoán nghi ngờ)
- Kỹ thuật chụp
- Mô tả tổn thương
- Kết luận (KEY FINDING — in đậm)
- Khuyến nghị (recommendations)
- BS đọc + chữ ký số + thời gian

Yêu cầu pháp lý: BS đọc phải có **chứng chỉ hành nghề CĐHA** — HIS kiểm tra role.

## Đọc 2 BS (Double reading)

Với ca khó / ung thư, BV tốt áp dụng đọc 2 BS:

- BS1 đọc → BS2 đọc độc lập (blinded).
- Nếu khác biệt → hội chẩn → kết luận chung.
- Tỷ lệ đọc 2 / tỷ lệ đồng thuận là KPI chất lượng.

## Cản quang & an toàn

- Trước CT cản quang: bắt buộc creatinine + cân nặng + tiền sử dị ứng iod.
- HIS cảnh báo nếu eGFR < 30 → tránh cản quang hoặc điều chỉnh.
- Sau chụp: phiếu theo dõi 30 phút phản ứng.

## Bài học vận hành

- **Accession Number duy nhất toàn BV**, không tái sử dụng — sai sẽ trộn ảnh giữa BN.
- Lịch máy phải có khe **bảo trì + STAT khẩn** dự phòng.
- Backup PACS: ảnh không bao giờ được mất (xem bài 21).

> **Bài tiếp theo:** PACS — quản lý ảnh DICOM, viewer, lưu trữ.
