---
id: 019f5a01-d000-7001-his0-000000001202
title: "Bài 31: Lưu trữ HSBA (MRA) — số hoá & truy xuất"
slug: bai-31-mra-luu-tru-hsba
description: >-
  Phòng Kế hoạch tổng hợp & Lưu trữ HSBA: quy trình mượn — trả, scan giấy
  cũ, số hoá phim, OCR, gắn metadata, kho lạnh / kho điện tử.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-31-mra-luu-tru-hsba-banner.png
video_url: null
sort_order: 2
section_title: "Phần 12: EMR & lưu trữ HSBA"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![MRA — lưu trữ HSBA hết liệu trình](/storage/uploads/2026/05/his/bai-31-mra-luu-tru-hsba-banner.png)

## Vai trò MRA (Medical Records Archive)

![Phòng lưu trữ HSBA giấy + vault điện tử](/storage/uploads/2026/05/his/bai-31-mra-luu-tru-hsba-workflow.png)


Phòng KHTH & Lưu trữ HSBA chịu trách nhiệm:

- Nhận HSBA giấy từ các khoa sau ra viện.
- Kiểm tra đủ — đóng dấu — đánh số lưu trữ.
- Quản lý kho.
- Cho mượn / trả phục vụ tra cứu, kiện tụng, BHYT, nghiên cứu.
- Tiêu huỷ đúng quy định.

Khi chuyển sang EMR, vai trò này không mất mà chuyển thành **quản lý kho điện tử + scan giấy cũ**.

## Quy trình mượn — trả

```
[Khoa / BS / Cơ quan] → Yêu cầu mượn → Phê duyệt
        │
        ▼
[Lấy HSBA] → Ghi sổ mượn (ai, lý do, hẹn trả)
        │
        ▼
[Trả] → Đối chiếu đủ tài liệu → Ghi sổ trả
```

HIS quản lý điện tử:

- Ai đang giữ HSBA → cảnh báo quá hạn trả.
- Tra cứu nhanh theo MPI / ngày ra viện / chẩn đoán.

## Số hoá HSBA giấy

Backlog của các BV cũ rất lớn — hàng triệu HSBA giấy. Quy trình số hoá:

1. **Phân loại** theo độ ưu tiên (mới nhất → cũ).
2. **Tách trang**, gỡ ghim.
3. **Scan** chuẩn ≥ 300 DPI, PDF/A.
4. **OCR** + nhận dạng form mẫu để trích metadata.
5. **Indexing** theo MPI + năm + chẩn đoán.
6. **QC** — lấy mẫu kiểm tra chất lượng.
7. **Lưu vào kho điện tử + đẩy index vào HIS**.
8. **Huỷ giấy** sau khi đối chiếu đủ + qua thời hạn pháp lý.

## Số hoá phim CĐHA cũ

- Phim X-quang giấy / tấm in → scan bằng máy chuyên dụng (transparency scanner) → DICOM.
- Đẩy về PACS với metadata đầy đủ.

## Metadata bắt buộc

Mỗi HSBA scan cần tối thiểu:

- MPI / Mã bệnh án
- Ngày vào viện / ra viện
- Khoa
- Chẩn đoán chính (ICD)
- Bác sĩ điều trị
- Loại HSBA (nội trú / ngoại trú / cấp cứu)

Thiếu metadata → tra cứu sau này gần như vô dụng.

## Tiêu huỷ HSBA

- Sau khi vượt thời hạn lưu trữ pháp định.
- Có biên bản hội đồng tiêu huỷ.
- Phương thức: cắt huỷ, đốt — đảm bảo PHI không lộ.
- Với HSBA điện tử: xoá đảm bảo + xoá khỏi backup.

## Bài học vận hành

- **Không scan ồ ạt rồi indexing sau** — luôn vứt mất, không tìm lại được.
- Luôn giữ song song cho đến khi BV được công nhận EMR thay HSBA giấy.
- Đầu tư hệ thống search full-text trên HSBA OCR → tăng năng suất tra cứu.

> **Bài tiếp theo:** Ký số, audit log & truy vết.
