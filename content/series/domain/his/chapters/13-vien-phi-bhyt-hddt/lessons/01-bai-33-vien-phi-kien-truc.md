---
id: 019f5a01-d000-7001-his0-000000001301
title: "Bài 33: Viện phí — kiến trúc tính phí phức tạp"
slug: bai-33-vien-phi-kien-truc
description: >-
  Mô hình bảng giá: nội bộ — BHYT — yêu cầu — bảo hiểm tư nhân; cơ chế ưu
  tiên giá; chính sách miễn giảm; phí phát sinh trong đợt điều trị.
duration_minutes: 50
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-33-vien-phi-kien-truc-banner.png
video_url: null
sort_order: 1
section_title: "Phần 13: Viện phí, BHYT & Hóa đơn điện tử"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Viện phí — kiến trúc & nguồn chi trả](/storage/uploads/2026/05/his/bai-33-vien-phi-kien-truc-banner.png)

## Bảng giá nhiều tầng

![Quầy thu ngân tách BHYT / dịch vụ / BH tư](/storage/uploads/2026/05/his/bai-33-vien-phi-kien-truc-workflow.png)


Một dịch vụ có thể có **nhiều giá** tuỳ đối tượng:

| Loại giá | Cơ sở pháp lý |
| --- | --- |
| BHYT | TT 39/2018, TT 13/2019, TT 22... |
| Không BHYT (giá nhà nước) | UBND tỉnh / TT BYT |
| Khám yêu cầu / dịch vụ kỹ thuật cao | TT 13/2023 |
| Giá tự nguyện / khám VIP | Theo BV, niêm yết công khai |
| Bảo hiểm tư nhân (Bao Viet, Manulife...) | Hợp đồng trực tiếp |
| Đối tác doanh nghiệp | Hợp đồng |

HIS cần engine **chọn giá** theo `service_id × patient_payor × thời điểm`.

## Cơ chế chọn giá

```
function getPrice(service, patient, date):
    candidates = lookupPrices(service, date)
    if patient has BHYT and bhyt valid:
        return candidates.bhyt
    if patient is contracted_payor:
        return candidates.contract
    return candidates.public_default
```

Lưu ý: giá có **hiệu lực theo ngày** — phải dùng giá **tại thời điểm phát sinh dịch vụ**, không phải giá hiện hành.

## Phí trong 1 đợt điều trị

Một admission có thể chứa hàng trăm dòng phí:

- Tiền giường theo ngày (theo loại + khoa)
- Khám, hội chẩn
- Xét nghiệm
- CĐHA
- Thủ thuật, phẫu thuật
- Thuốc, vật tư
- Dịch vụ ngoài (suất ăn, giặt là, người chăm)

Mỗi dòng có:

- Giá đơn vị
- Số lượng
- Tổng
- Tỷ lệ BHYT chi trả
- Đồng chi trả BN

## Tính tiền giường

Khá phức tạp:

- Theo loại (thường / dịch vụ / hồi sức / nhiễm).
- Tính theo ngày (≥ 4 giờ ngày đó tính 1 ngày, theo TT 39).
- Đổi giường giữa ngày → tính theo loại nằm > 4 giờ.
- Ngày vào / ra cùng ngày: tính 1 ngày.

## Miễn giảm

Đối tượng có thể được giảm:

- Trẻ mồ côi, người cao tuổi
- Cán bộ BV, người nhà
- Bệnh nhân khó khăn (Hội đồng XHH duyệt)

HIS cần **workflow phê duyệt miễn giảm** với người đề nghị, người duyệt, lý do, % giảm — log audit.

## Hoàn phí

- BN không dùng dịch vụ đã thu (huỷ XN sau khi đã nộp tiền).
- Trả thuốc thừa.
- Sai bảng giá → hoàn lại chênh.

Luôn tạo **phiếu hoàn** liên kết với phiếu thu gốc — không sửa phiếu thu cũ.

> **Bài tiếp theo:** BHYT — quy trình giám định & XML 4210.
