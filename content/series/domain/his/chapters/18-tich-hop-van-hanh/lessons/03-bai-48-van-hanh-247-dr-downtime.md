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


## Mục tiêu bài học

- Thiết kế kiến trúc **HA (High Availability)** + **DR (Disaster Recovery)** cho HIS chạy 24/7.
- Xác định RPO/RTO theo mức độ quan trọng từng module.
- Triển khai **downtime procedure** (BCP — Business Continuity Plan) cho các kịch bản mất hệ thống.
- Tổ chức **diễn tập downtime** định kỳ — yêu cầu của TT 46/2018 + ISO 27031.
- Vận hành NOC (Network Operations Center) 24/7 với on-call rotation, runbook, post-mortem.

## Bối cảnh

- HIS down 1 giờ ở BV 1000 giường = ~50-150 BN bị ảnh hưởng + nguy cơ an toàn.
- Sự cố hạ tầng (mất điện, đứt cáp, ransomware) đã xảy ra ở nhiều BV VN 2022-2025.
- BYT yêu cầu BV có quy trình downtime + diễn tập định kỳ (TT 46/2018).
- Ransomware Conti/Lockbit/BlackCat tấn công y tế Mỹ-EU mạnh; VN chưa nhiều nhưng đã bắt đầu.

## RPO / RTO theo module

| Module | RPO | RTO | Mức quan trọng |
| --- | --- | --- | --- |
| EMR / Order | ≤ 5 phút | ≤ 15 phút | CRITICAL |
| Pharmacy / eMAR | ≤ 5 phút | ≤ 15 phút | CRITICAL |
| LIS (kết quả CLS) | ≤ 15 phút | ≤ 30 phút | HIGH |
| Billing / BHYT | ≤ 1h | ≤ 4h | MEDIUM |
| MRA / Reports | ≤ 4h | ≤ 24h | LOW |
| PACS imaging | ≤ 15 phút | ≤ 1h | HIGH |
| Tele-consult | ≤ 5 phút | ≤ 30 phút | HIGH |

RPO = Recovery Point Objective (mất tối đa bao nhiêu data); RTO = Recovery Time Objective (downtime tối đa).

## Kiến trúc HA + DR

```
         Active Site (DC1)               Passive Site (DC2 - DR)
   ┌──────────────────────┐         ┌──────────────────────┐
   │  Load Balancer (HA)  │         │  Load Balancer       │
   │  App servers (N+1)    │         │  App servers (warm)  │
   │  DB Primary (Postgres)│ ◄────► │  DB Replica (sync ≤  │
   │  Pacemaker/Patroni    │  WAN    │  1s lag)             │
   │  Object Storage       │         │  Object Storage      │
   └──────────────────────┘         └──────────────────────┘
            │                                  │
            └──────── Backup → S3 / Tape ──────┘
                       (3-2-1: 3 copies, 2 media, 1 offsite)
```

Khuyến nghị: **DC chính + DC DR cách ≥ 100km** (nếu BV lớn) hoặc ít nhất 2 phòng máy khác nhau (BV vừa).

## Downtime procedure (BCP)

3 cấp downtime:

| Cấp | Mô tả | Thời gian | Hành động |
| --- | --- | --- | --- |
| Brief | < 30 phút, dự đoán recover sớm | < 30 phút | hold dữ liệu, không in giấy |
| Extended | 30 phút - 4 giờ | 0.5-4h | activate paper forms cấp cứu, ICU dùng giấy |
| Catastrophic | > 4h hoặc data loss | > 4h | full BCP, tổ chức điều hành thủ công, thông báo BYT |

Tài liệu BCP cần có:
- Danh sách form giấy "downtime kit" tại mỗi khoa (đơn thuốc, y lệnh, kết quả CLS giả lập).
- Quy trình ai báo ai, thứ tự gọi.
- Quy trình "catch-up": khi hệ thống về, ai nhập backlog, deadline bao lâu.
- Communication template gửi BN/cộng đồng nếu downtime kéo dài.

## Diễn tập downtime

- Tần suất: ≥ 2 lần/năm (sáng + trưa hoặc đêm).
- Bắt đầu nhỏ: 1 khoa 30 phút → mở rộng toàn BV 2-4 giờ.
- Đo: thời gian khôi phục, sai sót khi catch-up, NV còn nhớ form giấy không.
- Post-mortem báo cáo Giám đốc.

## Bảo mật & phòng ransomware

- Backup **immutable** (S3 Object Lock, Veeam hardened repo) — ransomware không xoá được.
- Test restore hàng tháng — backup không test = không có backup.
- EDR (CrowdStrike / Defender / Sentinel) trên mọi server và endpoint BV cấp.
- Network segmentation: medical devices VLAN tách app servers.
- Patching cadence: critical patch trong 7 ngày, others trong 30 ngày.
- Phishing simulation cho NV — y tế là nạn nhân hàng đầu của ransomware.

## NOC + On-call

- 24/7 NOC team (in-house hoặc outsourced).
- Monitoring: Grafana + Prometheus + Alertmanager / Datadog.
- Runbook cho mỗi alert: cách diagnose, cách mitigate.
- On-call rotation với escalation policy.
- Post-mortem **blameless** sau mỗi incident SEV1/SEV2.

## Sai lầm thường gặp

1. Backup chỉ 1 site (cùng phòng máy) → cháy = mất hết.
2. Không test restore → backup hỏng mà không biết.
3. Diễn tập downtime "trên giấy" không thực sự → khi xảy ra, chaos.
4. Khi downtime, NV không nhớ form giấy → bệnh án bị bỏ trống.
5. Catch-up sau downtime không có deadline → dữ liệu sai sự thật.
6. Không có EDR → ransomware mã hoá DB chính + replica cùng lúc.
7. Patch chậm → CVE bị khai thác.

## Output / Deliverables

- Kiến trúc HA + DR documented.
- BCP + downtime kit cho mỗi khoa.
- Lịch diễn tập + post-mortem.
- NOC 24/7 + runbook + on-call rotation.
- Backup policy + monthly restore test.
- Security stack (EDR, segmentation, MFA).

## UAT checklist

- [ ] Failover DC1 → DC2 trong RTO ≤ 15 phút (test simulator).
- [ ] Restore DB từ backup tháng trước thành công.
- [ ] Diễn tập downtime 2 giờ → ICU/ER vẫn hoạt động an toàn.
- [ ] Catch-up dữ liệu sau diễn tập đúng 100%.
- [ ] EDR phát hiện malware giả lập trong 5 phút.
- [ ] Patch CVE critical trong 7 ngày.

## KPI

| Chỉ số | Mục tiêu |
| --- | --- |
| Uptime HIS / năm | ≥ 99.9% (≤ 8.76h downtime/năm) |
| RPO module CRITICAL | ≤ 5 phút |
| RTO module CRITICAL | ≤ 15 phút |
| % backup restore test thành công | 100% |
| % NV qua đào tạo BCP | ≥ 90% |
| Sự cố security có lộ data | 0 |

## Cơ sở pháp lý 2026

- **Luật An ninh mạng 24/2018/QH14** + **NĐ 53/2022**.
- **Luật KCB 15/2023/QH15** — Điều 110 ứng dụng CNTT.
- **Thông tư 46/2018/TT-BYT** — yêu cầu DR/backup cho EMR.
- **Nghị định 13/2023/NĐ-CP** — bảo vệ DLCN.
- **Quyết định 06/QĐ-TTg/2022** — bảo mật dữ liệu tích hợp với CSDLQG.
- **Thông tư 12/2022/TT-BTTTT** — bảo đảm an toàn hệ thống thông tin theo cấp độ.
- **ISO 27001 / ISO 27031 / ISO 22301** — chuẩn quốc tế tham chiếu.
