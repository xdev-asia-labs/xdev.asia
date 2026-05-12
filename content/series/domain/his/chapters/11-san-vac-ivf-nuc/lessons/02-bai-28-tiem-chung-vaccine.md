---
id: 019f5a01-d000-7001-his0-000000001102
title: "Bài 28: Tiêm chủng — sổ tiêm điện tử & quản lý vaccine"
slug: bai-28-tiem-chung-vaccine
description: >-
  Quản lý tiêm chủng mở rộng & dịch vụ: lịch tiêm theo độ tuổi, lưu lô —
  hạn — tủ lạnh, ghi nhận phản ứng sau tiêm, đẩy lên hệ thống TCQG.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-28-tiem-chung-vaccine-banner.png
video_url: null
sort_order: 2
section_title: "Phần 11: Chuyên khoa đặc thù"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Tiêm chủng & sổ tiêm điện tử](/storage/uploads/2026/05/his/bai-28-tiem-chung-vaccine-banner.png)

## Đối tượng

![Tiêm vaccine và đẩy lên sổ tiêm chủng quốc gia](/storage/uploads/2026/05/his/bai-28-tiem-chung-vaccine-workflow.png)


| Nhóm | Lịch chuẩn |
| --- | --- |
| Trẻ < 1 tuổi (TCMR) | Sơ sinh, 2/3/4 tháng, 9 tháng |
| Trẻ 1–18 tuổi | Nhắc, MMR, HPV, viêm não Nhật Bản... |
| Người lớn | Cúm, viêm gan B, HPV, Zona, COVID-19 |
| Phụ nữ trước/đang mang thai | Uốn ván, cúm, ho gà |

## Sổ tiêm điện tử

Mỗi mũi tiêm gồm:

- Vaccine (mã, hãng, tên thương mại)
- Lô + hạn dùng
- Vị trí tiêm (đùi T/P, delta T/P)
- Người tiêm + người chỉ định
- Phản ứng sau tiêm 30 phút (theo dõi tại chỗ)

HIS in **sổ tiêm chủng** + đẩy lên **Hệ thống tiêm chủng quốc gia (tiemchung.vncdc.gov.vn)** qua API.

## Lịch tự động & nhắc

- Khi tiêm xong mũi N, hệ thống tự sinh lịch hẹn mũi N+1.
- Reminder qua SMS/Zalo/email trước 1–3 ngày.
- Cảnh báo lịch quá hạn → cần gọi điện.

## Quản lý kho lạnh

Vaccine **bắt buộc 2–8 °C** (trừ một số đặc biệt). HIS tích hợp sensor IoT:

- Ghi nhiệt độ mỗi 5 phút.
- Cảnh báo SMS/email khi vượt ngưỡng.
- Lưu biểu đồ nhiệt — phục vụ thanh tra.

Khi mất chuỗi lạnh → "cách ly" lô, không cho tiêm cho đến khi có ý kiến chuyên môn.

## Phản ứng nặng sau tiêm (AEFI)

- Form khai báo AEFI tự động đẩy về CDC + Bộ Y tế.
- Theo dõi BN nội trú nếu phản ứng nặng.
- Họp xem xét nguyên nhân (CIOMS / WHO causality assessment).

## Đặc thù đại dịch (COVID-19)

Hệ thống cần cấu hình linh hoạt cho:

- Loại vaccine mới + lịch theo CDC.
- Ưu tiên đối tượng (lực lượng tuyến đầu, NCT, nguy cơ cao).
- Sinh "Sổ sức khoẻ điện tử / chứng nhận tiêm" — QR đọc bởi PC-COVID/HSSK.

> **Bài tiếp theo:** IVF & y học hạt nhân — quy trình đặc biệt.
