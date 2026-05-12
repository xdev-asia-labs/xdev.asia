---
id: 019f5a01-d000-7001-his0-000000000501
title: "Bài 12: Nội trú (IPD) — nhập viện & phân giường"
slug: bai-12-noi-tru-nhap-vien-phan-giuong
description: >-
  Quy trình nhập viện nội trú: lệnh nhập viện, phân giường theo khoa/loại
  giường, tạm ứng viện phí, hồ sơ bệnh án nội trú, theo dõi diễn biến.
duration_minutes: 60
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-12-noi-tru-nhap-vien-phan-giuong-banner.png
video_url: null
sort_order: 1
section_title: "Phần 5: Nội trú (IPD)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Nội trú — nhập viện & phân giường](/storage/uploads/2026/05/his/bai-12-noi-tru-nhap-vien-phan-giuong-banner.png)

## Tổng quan

![Phân giường theo bản đồ trống/đầy thời gian thực](/storage/uploads/2026/05/his/bai-12-noi-tru-nhap-vien-phan-giuong-workflow.png)


Nội trú (**Inpatient Department — IPD**) là phần phức tạp nhất của HIS:

- Bệnh nhân ở viện ngày → tuần → tháng.
- Sinh vô số y lệnh, CLS, thuốc, vật tư.
- Ràng buộc BHYT chặt: tiền giường, ngày giờ chính xác, chuyển khoa nội bộ, kiểm soát chỉ định trùng.

## Cấu trúc dữ liệu

```
Admission (1 đợt nội trú)
  ├── ward_history[]    — lịch sử nằm khoa nào, từ-đến
  ├── bed_history[]     — giường nào, từ-đến
  ├── orders[]          — y lệnh (thuốc, CLS, thủ thuật, dinh dưỡng)
  ├── progress_notes[]  — diễn biến hàng ngày (SOAP)
  ├── nursing_notes[]   — chăm sóc điều dưỡng
  └── discharge        — ra viện (xem ch.5 bài 14)
```

## Lệnh nhập viện

Nguồn:

- Từ OPD (BS quyết định nhập viện)
- Từ ER (cấp cứu chuyển)
- Đặt lịch trước (mổ phiên — xem ch.10)

Nội dung lệnh:

| Trường | Bắt buộc |
| --- | --- |
| Khoa nhập | ✓ |
| Loại giường (thường/dịch vụ/yêu cầu/hồi sức) | ✓ |
| Chẩn đoán nhập viện (ICD-10) | ✓ |
| Lý do nhập viện | ✓ |
| Mức độ ưu tiên | ✓ |
| Bác sĩ điều trị (nếu chỉ định cụ thể) |   |

## Phân giường (Bed Management)

Sơ đồ giường (`Bed Map`) hiển thị realtime:

```
Khoa Nội — Tầng 3
[101A] 🟢 trống     [101B] 🔵 đang nằm — Trần Văn B
[102A] 🔵 — Lê C    [102B] 🟡 chuẩn bị nhận
[103A] ⚫ bảo trì   [103B] 🟢 trống
```

Quy tắc nghiệp vụ:

1. **Không trộn giới** trong cùng phòng (trừ phòng dịch vụ riêng & phòng cấp cứu).
2. **Cách ly** theo bệnh truyền nhiễm — phòng cách ly riêng, không chung CTV ăn uống.
3. **Phòng VIP / dịch vụ** chỉ phân khi có cam kết tự trả phần chênh.
4. **Trẻ < 6 tuổi** đi kèm 1 người chăm — quản lý suất ăn theo người chăm.

## Tạm ứng viện phí

Khi nhập viện cần tạm ứng (trừ BHYT 100 % và một số đối tượng miễn):

- Định mức tạm ứng theo **dự toán đợt điều trị** (ví dụ phẫu thuật khớp háng ~40 triệu).
- Cảnh báo khi **dư nợ > 70 % tạm ứng** → yêu cầu nộp thêm.
- BHYT đồng chi trả → tạm ứng theo phần dự kiến BN tự trả.

## Hồ sơ bệnh án nội trú (HSBA)

Theo TT 46/2018 — HSBA điện tử gồm các phần:

- Bệnh án vào viện (mẫu 01)
- Tờ điều trị (diễn biến, y lệnh)
- Tờ theo dõi điều dưỡng
- Phiếu chăm sóc
- Phiếu công khai dịch vụ
- Phiếu xét nghiệm, hình ảnh
- Phiếu phẫu thuật / thủ thuật
- Phiếu truyền dịch / truyền máu
- Phiếu sơ kết / hội chẩn
- Tóm tắt ra viện

HIS phải kết xuất được **bộ HSBA hoàn chỉnh PDF** ký số tại thời điểm ra viện (xem ch.12).

## Theo dõi diễn biến

- BS điều trị ghi diễn biến **ít nhất 1 lần/ngày**, BN nặng 2 lần/ngày, ICU 4–6 lần/ngày.
- Form mặc định SOAP, có thể chèn sinh hiệu, kết quả CLS mới nhất tự động.
- Thay đổi y lệnh phải ghi rõ lý do, không được sửa lùi.

> **Bài tiếp theo:** Y lệnh hàng ngày, phát thuốc & truyền dịch.
