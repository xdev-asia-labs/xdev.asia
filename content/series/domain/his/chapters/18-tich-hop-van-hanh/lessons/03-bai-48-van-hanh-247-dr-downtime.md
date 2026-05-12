---
id: 019f5a01-d000-7001-his0-000000001803
title: "Bài 48: Vận hành HIS 24/7 — DR, downtime & continuity"
slug: bai-48-van-hanh-247-dr-downtime
description: >-
  HIS không bao giờ được "đứng" — kiến trúc HA, DR site, quy trình
  downtime kế hoạch & ngoài kế hoạch, chế độ "giấy" dự phòng.
duration_minutes: 40
is_free: true
featured_image: /storage/uploads/2026/05/his/bai-48-van-hanh-247-dr-downtime-banner.png
video_url: null
sort_order: 3
section_title: "Phần 18: Tích hợp & Vận hành"
course:
  id: 019f5a01-d000-7001-his0-000000000001
  title: "Hospital Information System (HIS) — Tổng quan & Triển khai"
  slug: his
---

![Vận hành 24/7, DR & downtime](/storage/uploads/2026/05/his/bai-48-van-hanh-247-dr-downtime-banner.png)

## Tại sao HIS phải 24/7

![NOC theo dõi 24/7 và DR site mirror dữ liệu](/storage/uploads/2026/05/his/bai-48-van-hanh-247-dr-downtime-workflow.png)


Cấp cứu, sản, ICU không có "giờ làm việc". Mất HIS:

- Không kê thuốc → không phát thuốc.
- Không có y lệnh → không truyền dịch.
- Không in được giấy ra viện → BN tắc.
- Không thanh toán → mất doanh thu.

## SLA tham khảo

| Hệ thống | Uptime | RPO | RTO |
| --- | --- | --- | --- |
| HIS core (EMR + Order) | 99.9 % | 5 phút | 30 phút |
| LIS / RIS / PACS | 99.5 % | 15 phút | 1 giờ |
| Billing / BHYT | 99 % | 1 giờ | 4 giờ |
| Mobile / Web BN | 99 % | 15 phút | 1 giờ |

## Kiến trúc HA

- Active-Active hoặc Active-Standby cho App.
- DB replication đồng bộ (vd. PostgreSQL streaming, Oracle Data Guard).
- Load balancer + health check.
- Storage redundancy (RAID, replication).

## DR Site

- Site dự phòng cách ≥ 30 km (tốt nhất khác vùng điện lực).
- Replication async với độ trễ chấp nhận được.
- Diễn tập DR ≥ 1 lần/năm — failover thật, không chỉ "trên giấy".

## Downtime kế hoạch

- Lịch maintenance vào khung ít hoạt động (2–5 giờ sáng).
- Thông báo trước 7–14 ngày cho các khoa.
- Kế hoạch rollback rõ ràng.

## Downtime ngoài kế hoạch

Quy trình "Code Yellow" (HIS down):

1. Xác nhận sự cố — gọi NOC.
2. Thông báo loa toàn BV: kích hoạt **chế độ giấy**.
3. Các khoa dùng mẫu giấy in sẵn (đã chuẩn bị từ trước).
4. ER / ICU có printer offline với template biểu mẫu.
5. Khi HIS phục hồi, **back-entry** dữ liệu giấy vào hệ thống.

Chuẩn bị bộ "downtime kit" cho từng khoa: mẫu giấy, hướng dẫn, danh sách BN đang điều trị (in cuối ngày).

## Monitoring & Alerting

- APM (Datadog, Dynatrace, Elastic APM) — theo dõi response time, error rate.
- Synthetic monitoring — bot thử login, đặt lịch giả mỗi 5 phút.
- On-call rotation 24/7 với escalation path.

## Backup

- Full DB hàng đêm + WAL liên tục.
- Backup PACS: 3-2-1.
- Test restore định kỳ — backup không restore được = không có backup.

## Bài học vận hành

- HIS down 1 giờ vào giờ cao điểm = hỗn loạn lớn → mọi quyết định kiến trúc đều phải nghĩ đến HA.
- "Chế độ giấy" không phải dự phòng "đẹp" — phải drill thật để mọi điều dưỡng biết làm.
- Sau mỗi sự cố: **postmortem không đổ lỗi**, tập trung cải tiến hệ thống.

> **Hết series.** Cảm ơn bạn đã theo dõi! Series tiếp theo có thể đi sâu vào: kiến trúc kỹ thuật HIS hiện đại (microservice, event-driven), HL7 FHIR R4 chi tiết, hoặc xây EMR mã nguồn mở (OpenMRS, OpenEMR).
