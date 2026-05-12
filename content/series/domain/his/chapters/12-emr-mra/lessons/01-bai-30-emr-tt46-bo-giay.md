---
id: 019f5a01-d000-7001-his0-000000001201
title: "Bài 30: EMR — bệnh án điện tử theo TT 46/2018 & lộ trình bỏ giấy"
slug: bai-30-emr-tt46-bo-giay
description: >-
  Tiêu chuẩn EMR theo TT 46/2018, các mức độ hoàn thiện (EMRAM), lộ trình
  chuyển đổi từ HSBA giấy sang điện tử và những bài học pháp lý.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-30-emr-tt46-bo-giay-banner.png
video_url: null
sort_order: 1
section_title: "Phần 12: EMR & lưu trữ HSBA"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![EMR — chuyển đổi từ HSBA giấy sang điện tử](/storage/uploads/2026/05/his/bai-30-emr-tt46-bo-giay-banner.png)

## TT 46/2018 — khung pháp lý EMR Việt Nam *(cập nhật 2026)*

![Bác sĩ đóng hồ sơ giấy, mở EMR trên tablet](/storage/uploads/2026/05/his/bai-30-emr-tt46-bo-giay-workflow.png)


Thông tư **46/2018/TT-BYT** vẫn là văn bản nền cho HSBA điện tử, được củng cố bởi:

- **Luật KCB 15/2023/QH15** (hiệu lực 01/01/2024) — công nhận HSBA điện tử, quy định quyền tiếp cận hồ sơ của BN.
- **Luật Giao dịch điện tử 20/2023/QH15** (hiệu lực 01/07/2024) — chữ ký số có giá trị pháp lý tương đương chữ ký tay.
- **NĐ 96/2023/NĐ-CP** — hướng dẫn Luật KCB.
- **NĐ 13/2023/NĐ-CP** — bảo vệ dữ liệu cá nhân (dữ liệu sức khỏe = nhóm nhạy cảm).
- Công văn BYT **2024–2025** — mở rộng lộ trình EMR cho BV hạng II, III.

Nguyên tắc TT 46/2018:

- HSBA điện tử có giá trị **tương đương HSBA giấy**.
- Bảo đảm tính: **toàn vẹn, xác thực, bảo mật, sẵn sàng, có thể truy hồi**.
- Bắt buộc **chữ ký số** của người tạo nội dung (BS, ĐD).
- Lưu trữ ≥ 10 năm với nội trú, 5 năm ngoại trú (theo TT 53/2017, không đổi đến 2026).

## Cấu phần HSBA

- Tờ bìa
- Hồ sơ hành chính
- Bệnh án (vào viện, diễn biến, sơ kết, ra viện)
- Tờ điều trị, theo dõi điều dưỡng, chăm sóc
- Phiếu CLS, phẫu thuật, gây mê, hội chẩn
- Phụ lục: phim CĐHA, kết quả GPB, biểu đồ partogram...

HIS phải xuất được **bộ HSBA hoàn chỉnh PDF/A** ký số → đó là "bản gốc điện tử".

## Mức trưởng thành EMR

Tham chiếu **EMRAM** của HIMSS (0–7) hoặc thang Bộ Y tế Việt Nam (1–7):

| Mức | Tóm tắt |
| --- | --- |
| 0 | Chưa có EMR |
| 1–2 | Có một số phân hệ (LIS, RIS riêng lẻ) |
| 3 | EMR điều dưỡng + CDS cơ bản |
| 4 | CPOE đầy đủ |
| 5 | Closed-loop medication (eMAR + barcode) |
| 6 | Cấu trúc hoá template, không giấy ở khoa |
| 7 | Hoàn toàn không giấy, dữ liệu chia sẻ HIE |

Nhiều BV VN đang ở mức 3–5.

## Lộ trình "không giấy" *(cập nhật theo chỉ đạo BYT 2024–2026)*

```
2019–2023: BV hạng đặc biệt, hạng I (tự nguyện) → chính thức triển khai
2024–2025: BV hạng II bắt buộc lộ trình, bắt buộc kết nối HSSK / Văn phòng số
2026–2028: BV hạng III–IV mở rộng; bắt buộc định danh BN qua VNeID/CCCD
2030     : 100% cơ sở KCB dùng EMR đạt mức tối thiểu, không lưu HSBA giấy song song
```

Các bước vận hành:

1. Kiểm kê tài liệu giấy hiện hành.
2. Số hoá template theo TT 46.
3. Ký số bác sĩ + điều dưỡng (USB token / SIM PKI / **Smart-CA / Remote Signing** được công nhận theo Luật GDĐT 20/2023).
4. Pilot 1 khoa → mở rộng.
5. Đăng ký thẩm định EMR với Sở/Bộ Y tế.

## Yêu cầu kỹ thuật then chốt

- **Audit log bất biến** — mọi xem/sửa/xoá phải log đầy đủ. Ai, khi nào, IP, thiết bị.
- **Không cho hard-delete** — chỉ "logical delete" + version history.
- **Versioning HSBA** — mỗi sửa đổi tạo phiên bản, có khả năng so sánh diff.
- **Backup & DR** — RPO ≤ 1 giờ, RTO ≤ 4 giờ cho hệ thống quan trọng.

## Bài học pháp lý

- Khi BHYT / cơ quan điều tra yêu cầu HSBA, BV phải xuất được **bản giấy in từ HSBA điện tử có ký số xác thực** + **bản điện tử PDF/A**.
- Mất chữ ký số → toàn bộ HSBA mất giá trị pháp lý — phải có quy trình HSM (Hardware Security Module) chuẩn.
- Tranh chấp y khoa: log audit là bằng chứng quan trọng → đừng bao giờ tắt log "vì performance".
- Quyền tiếp cận HSBA của BN (Luật KCB 15/2023, Đ.66): BV phải có cơ chế cho BN xem/sao hồ sơ của mình trong thời hạn quy định.
- Dữ liệu sức khỏe là **dữ liệu cá nhân nhạy cảm** (NĐ 13/2023) → cần cơ sở pháp lý rõ ràng khi chia sẻ (HIE, nghiên cứu…).

## Cơ sở pháp lý áp dụng (2026)

- Luật KCB **15/2023/QH15** (Đ.62 về HSBA, Đ.66 về quyền tiếp cận).
- Luật GDĐT **20/2023/QH15**.
- NĐ **96/2023/NĐ-CP**.
- NĐ **13/2023/NĐ-CP** — bảo vệ dữ liệu cá nhân.
- TT **46/2018/TT-BYT** — HSBA điện tử.
- TT **53/2017/TT-BYT** — lưu trữ HSBA.

> **Bài tiếp theo:** Lưu trữ HSBA (MRA) — số hoá phim, scan giấy cũ.
