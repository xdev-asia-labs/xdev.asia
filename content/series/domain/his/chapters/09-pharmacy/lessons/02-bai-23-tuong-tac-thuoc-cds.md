---
id: 019f5a01-d000-7001-his0-000000000902
title: "Bài 23: Tương tác thuốc, dị ứng & cảnh báo CDS"
slug: bai-23-tuong-tac-thuoc-cds
description: >-
  Bộ kiểm tra Drug-Drug, Drug-Food, Drug-Allergy, Drug-Disease và cách
  tránh "alert fatigue" cho bác sĩ.
duration_minutes: 45
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-23-tuong-tac-thuoc-cds-banner.png
video_url: null
sort_order: 2
section_title: "Phần 9: Dược (Pharmacy)"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Tương tác thuốc & CDS cảnh báo](/storage/uploads/2026/05/his/bai-23-tuong-tac-thuoc-cds-banner.png)

## Các loại tương tác

![Cảnh báo DDI severity nghiêm trọng trên màn hình kê đơn](/storage/uploads/2026/05/his/bai-23-tuong-tac-thuoc-cds-workflow.png)


| Loại | Ví dụ |
| --- | --- |
| Drug-Drug (DDI) | Warfarin + Aspirin → nguy cơ chảy máu |
| Drug-Allergy | BN dị ứng penicillin → cảnh báo nhóm beta-lactam |
| Drug-Food | Statin + nước bưởi → tăng nồng độ |
| Drug-Disease | Metformin + suy thận → toan lactic |
| Drug-Lab | Aminoglycoside + creatinine cao |
| Drug-Pregnancy | ACE inhibitor + thai kỳ |

## Mức cảnh báo

| Mức | Hành động |
| --- | --- |
| A | Không nguy hại — không hiển thị |
| B | Nhẹ — thông tin |
| C | Trung bình — popup, có thể bỏ qua |
| D | Nguy hiểm — bắt buộc nhập lý do |
| X | Chống chỉ định — chặn cứng |

## Nguồn dữ liệu

Phổ biến: **Lexicomp**, **Micromedex**, **First DataBank**, **DrugBank**, hoặc tự xây dựng từ Bộ Y tế VN. Nguồn tốt là tài sản cốt lõi của HIS — phải có hợp đồng cập nhật.

## Alert fatigue

> 90 % cảnh báo bị BS bỏ qua → mất tác dụng cảnh báo thật.

Giải pháp:

- Tinh chỉnh: chỉ hiện mức C trở lên cho thuốc trùng đơn.
- Theo dõi tỷ lệ override theo BS → coaching.
- Cho phép BS tắt "trùng nhóm" trong 24 h cho cùng cặp thuốc.
- Smart suppression: nếu D đã được giải trình lý do, không hỏi lại trong cùng đợt điều trị.

## Allergy reconciliation

Khi nhập viện, ĐD phải xác nhận:

- Có dị ứng / không / không xác định
- Dị ứng cái gì (thuốc / thực phẩm / latex)
- Phản ứng (mề đay / sốc / khó thở)

HIS coi "không xác định" khác "không có" — tránh false negative.

## Medication reconciliation

Tại các điểm chuyển (admission, transfer, discharge), BS đối chiếu danh sách thuốc:

- Trước khi vào viện
- Đang dùng tại viện
- Mang về sau ra viện

→ tránh trùng / sót thuốc khi BN dùng song song nhiều nguồn.

## Bài học vận hành

- Bộ rules cần "owner" là dược sĩ lâm sàng — không nên để IT tự định cấu hình.
- Mọi override D/X **bắt buộc lý do văn bản** (không chọn "Khác").
- Audit hàng tháng: đơn nào có cảnh báo D/X bị bỏ qua mà sau đó BN có ADR → bài học cho cả BV.

> **Bài tiếp theo:** Quản lý kho dược, lô, hạn dùng & chuỗi cung ứng.
