---
id: 019f5a01-d000-7001-his0-000000001101
title: "Bài 27: Sản khoa — quản lý thai sản & sinh đẻ"
slug: bai-27-san-khoa-thai-san
description: >-
  Quy trình quản lý thai từ khám đầu, các mốc khám thai, partogram trong
  chuyển dạ, sinh thường / mổ và hồ sơ mẹ — bé.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-27-san-khoa-thai-san-banner.png
video_url: null
sort_order: 1
section_title: "Phần 11: Chuyên khoa đặc thù"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Sản khoa & quản lý thai sản](/storage/uploads/2026/05/his/bai-27-san-khoa-thai-san-banner.png)

## Hồ sơ thai phụ

![Khám thai với CTG và siêu âm thai](/storage/uploads/2026/05/his/bai-27-san-khoa-thai-san-workflow.png)


Một thai phụ có 1 hồ sơ "Pregnancy" gắn với MPI:

- PARA (Para — số sinh đủ tháng / non / sảy / sống)
- Tuổi thai (GA), ngày dự sinh (EDD)
- Nhóm máu mẹ + Rh
- Tiền sử sản khoa, bệnh lý

## Mốc khám thai (theo Bộ Y tế)

| Mốc | Nội dung |
| --- | --- |
| Trước 12 tuần | Khám đầu, siêu âm tuổi thai, NIPT/Combined test |
| 12–16 tuần | Double test, sàng lọc tiền sản giật |
| 22 tuần | Siêu âm 4D hình thái |
| 24–28 tuần | Tiểu đường thai kỳ (OGTT), tiêm uốn ván |
| 32 tuần | Siêu âm tăng trưởng |
| 36 tuần+ | Khám hàng tuần, theo dõi tim thai (NST) |

HIS gửi nhắc tự động và in **sổ khám thai điện tử** (mẫu Bộ Y tế).

## Chuyển dạ & Partogram

Khi nhập viện sinh, ĐD/HS lập **biểu đồ partogram** điện tử:

- Cơn co tử cung (mỗi 30 phút)
- Tim thai (NST liên tục)
- Độ mở cổ tử cung
- Ngôi, thế, kiểu thế
- Sinh hiệu mẹ

Cảnh báo "Action line" — nếu vượt qua → can thiệp.

## Sinh

- Sinh thường: ghi giờ sổ thai, giới tính, cân nặng, Apgar 1' / 5'.
- Mổ lấy thai: tạo encounter mổ, ghi chỉ định (suy thai, ngôi mông, mổ cũ…) → BHYT yêu cầu chỉ định rõ ràng.
- Phương pháp giảm đau: gây tê NMC, gây mê.

## Hồ sơ trẻ sơ sinh

Ngay sau sinh, HIS sinh:

- MPI mới cho bé (gắn liên kết "child_of" tới mẹ).
- Wristband mẹ + bé matching (an toàn chống nhầm bé).
- Tiêm vitamin K1, viêm gan B, BCG (xem bài 28 — Vaccination).
- Sàng lọc sơ sinh: máu gót chân, thính lực, tim bẩm sinh.

## Hậu sản

- Theo dõi mẹ 24 giờ (chảy máu, co hồi tử cung, sinh hiệu).
- Tư vấn nuôi con bằng sữa mẹ, kế hoạch hoá.
- Hẹn tái khám 1 tuần / 6 tuần.

## BHYT trong sản

- BHYT chi trả khám thai theo TT 39, sinh thường / mổ theo bảng giá.
- BN sinh không BHYT vẫn không bị từ chối tiếp nhận (đặc biệt cấp cứu).
- Trẻ sơ sinh được cấp BHYT miễn phí < 6 tuổi → HIS hỗ trợ đăng ký nhanh.

> **Bài tiếp theo:** Tiêm chủng (Vaccination) — sổ tiêm điện tử, lịch và quản lý tủ lạnh.
