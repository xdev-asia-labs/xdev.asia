---
id: 019f5a01-d000-7001-his0-000000001002
title: "Bài 26: Vật tư tiêu hao, BHYT phẫu thuật & giải phẫu bệnh"
slug: bai-26-vat-tu-bhyt-gpb
description: >-
  Quản lý vật tư cấy ghép (implant), gói phẫu thuật BHYT, theo dõi mẫu giải
  phẫu bệnh từ phòng mổ → khoa GPB → kết quả.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-26-vat-tu-bhyt-gpb-banner.png
video_url: null
sort_order: 2
section_title: "Phần 10: Phòng mổ (Surgery)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Vật tư phòng mổ, BHYT & giải phẫu bệnh](/storage/uploads/2026/05/his/bai-26-vat-tu-bhyt-gpb-banner.png)

## Vật tư tiêu hao & cấy ghép

![Đếm vật tư surgery và đóng gói mẫu GPB](/storage/uploads/2026/05/his/bai-26-vat-tu-bhyt-gpb-workflow.png)


Phòng mổ tiêu tốn vật tư lớn:

- Gạc, kim, chỉ, găng, dao điện
- Implant (nẹp vít, khớp nhân tạo, stent)
- Vật tư đặc biệt (lưới thoát vị, chất kết dính sinh học)

Mỗi item phải:

- Có mã nội bộ + mã BHYT + mã GS1 (UDI cho implant).
- Quét barcode khi sử dụng → trừ kho + ghi vào hồ sơ phẫu thuật.
- **Implant** lưu vĩnh viễn lô + serial trong EMR — phục vụ recall nếu nhà sản xuất thông báo.

## Gói phẫu thuật BHYT

Bộ Y tế ban hành giá theo gói cho nhiều phẫu thuật. Có 2 cách thanh toán:

| Cách | Áp dụng |
| --- | --- |
| Theo định suất / DRG | Một số tỉnh thí điểm |
| Phí dịch vụ + vật tư | Phổ biến |

Quy tắc:

- BV phải đăng ký giá phẫu thuật với BHYT.
- Vật tư trong "trọn gói" → không tính riêng; ngoài gói → tính riêng (kèm chứng từ).
- Implant ngoài danh mục BHYT → BN tự chi.

HIS phải biết loại BN → tự áp đúng cấu hình.

## Mẫu giải phẫu bệnh (Pathology)

```
[Trong mổ] cắt mẫu → ghi nhãn (BN, vị trí, kỹ thuật cố định)
        │
        ▼
[Vận chuyển formalin] → [Khoa GPB nhận]
        │
        ▼
[Cắt — nhuộm — đọc bởi BS GPB]
        │
        ▼
[Báo cáo GPB → trả về EMR phẫu thuật]
```

Đặc thù:

- Chu kỳ 3–10 ngày, ung thư có thể 2–3 tuần (kèm IHC, gen).
- BN có thể đã ra viện → HIS đẩy KQ tới BS phẫu thuật + cảnh báo gọi BN tái khám.

## Frozen section (sinh thiết tức thì)

- Trong mổ cần biết lành/ác → cắt lát đông ngay → có KQ trong 20–30 phút.
- HIS phải hỗ trợ "preliminary report" tách biệt với báo cáo cuối.

## Bệnh phẩm thất lạc

Đáng sợ nhất ở GPB là mẫu mất / lẫn. HIS giúp:

- Mỗi mẫu có barcode duy nhất.
- Quét tại từng điểm chuyển giao.
- Báo cáo chuỗi truy vết đầy đủ.

## Bài học vận hành

- Đối chiếu **vật tư đã quét = vật tư đã trừ kho = vật tư trên hoá đơn** mỗi tuần — phát hiện rò rỉ.
- KQ GPB **bắt buộc đính vào HSBA** — thiếu sẽ bị BHYT xuất toán (chi phí GPB & phẫu thuật).

> **Bài tiếp theo:** Sản khoa, tiêm chủng, hỗ trợ sinh sản (IVF), y học hạt nhân.
