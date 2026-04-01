---
id: 019e7a10-a115-7001-d001-f1e2d3c4b515
title: "Bài 15: Production Deployment — Case Study gửi 10 triệu email"
slug: bai-15-production-deployment-case-study-gui-10-trieu-email
description: >-
  Case study end-to-end: thiết kế và triển khai hệ thống gửi 10 triệu email cho
  marketing campaign. Infrastructure setup, Kubernetes deployment, CI/CD, load
  testing, chaos scenarios, cost analysis và production lessons learned.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Deliverability, Monitoring & Production"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Chúng ta kết thúc series bằng một bài toán sát thực tế: một công ty e-commerce cần gửi **10 triệu email flash sale trong 4 giờ**, đồng thời vẫn giữ luồng transactional hoạt động bình thường. Bài này ghép toàn bộ mảnh ghép trước đó thành một thiết kế production-ready.

---

## 1. Bài toán và giả định đầu vào

### Business requirements

- Gửi 10 triệu email trong tối đa 4 giờ.
- Có personalization cơ bản theo tên, mã giảm giá, locale.
- Có unsubscribe, open tracking, click tracking.
- Không ảnh hưởng tới OTP và order confirmation.

### Capacity target

```text
10,000,000 / 14,400 giây ≈ 694 emails/giây
Peak headroom x2 -> thiết kế cho ~1,400 emails/giây
```

### Kiến trúc vận hành

- 1 provider chính: Amazon SES.
- 1 provider dự phòng: SendGrid.
- 2 pools worker riêng: transactional và bulk marketing.
- 1 Redis cluster cho rate limiting và scheduling.
- 1 Kafka cluster làm backbone event-driven.
- 1 PostgreSQL primary + read replicas cho metadata và analytics ingestion.

---

## 2. Kiến trúc production tổng thể

```
Admin UI / Campaign API
        │
        ▼
Campaign Planner
        │
        ├── Recipient Snapshot Service
        ├── Batch Planner
        └── Kafka topics
                │
                ▼
          Bulk Worker Pool
                │
        ┌───────┴────────┐
        ▼                ▼
   Amazon SES        SendGrid Fallback
        │                │
        └───────┬────────┘
                ▼
        Webhook Ingestion
                │
                ▼
         Status Aggregator
                │
                ▼
      PostgreSQL + Grafana/Prometheus
```

### Thành phần chính

| Thành phần | Vai trò |
|------------|---------|
| Campaign Planner | tạo snapshot và batch jobs |
| Kafka | decouple producer/consumer |
| Redis | limiter, retry schedule, distributed locks |
| Bulk Workers | render + send campaign traffic |
| Transactional Workers | đảm bảo traffic critical |
| Webhook Ingestion | nhận delivery/bounce/complaint events |

---

## 3. Hạ tầng Kubernetes đề xuất

### Phân tách workload bằng namespaces và deployments

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bulk-email-workers
spec:
  replicas: 12
  selector:
    matchLabels:
      app: bulk-email-workers
  template:
    metadata:
      labels:
        app: bulk-email-workers
    spec:
      containers:
        - name: worker
          image: ghcr.io/xdev/notification-workers:2026.04.01
          env:
            - name: WORKER_GROUP
              value: bulk
            - name: KAFKA_CONSUMER_GROUP
              value: bulk-workers
          resources:
            requests:
              cpu: "500m"
              memory: "512Mi"
            limits:
              cpu: "2"
              memory: "2Gi"
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
```

### Gợi ý sizing ban đầu

| Service | Số lượng | Ghi chú |
|--------|----------|---------|
| API / Planner | 3 pods | HA cơ bản |
| Bulk Workers | 12-40 pods | autoscale theo lag |
| Transactional Workers | 4-8 pods | reserved capacity |
| Webhook Processors | 3-6 pods | scale theo callback burst |
| Redis | 3 node | sentinel/cluster |
| Kafka | 3 broker | replication factor 3 |

---

## 4. CI/CD và release strategy

### Pipeline nên có

1. Unit tests cho template rendering, limiter, provider adapters.
2. Integration tests với Kafka, Redis, PostgreSQL.
3. Smoke test gửi email qua sandbox provider.
4. Canary deploy cho worker version mới.
5. Rollback nhanh nếu send failure rate tăng.

### Tại sao worker cần canary?

Một bug nhỏ trong renderer hoặc provider adapter có thể biến 10 triệu email thành 10 triệu lỗi. Canary 1-5% traffic giúp phát hiện regression trước khi chiến dịch bị ảnh hưởng trên diện rộng.

---

## 5. Load testing với k6

Không thể test production traffic nếu chưa load test phần điều phối chiến dịch.

### Ví dụ k6 cho Campaign API

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    create_campaigns: {
      executor: 'ramping-vus',
      startVUs: 1,
      stages: [
        { duration: '1m', target: 20 },
        { duration: '3m', target: 100 },
        { duration: '2m', target: 0 },
      ],
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    campaign_id: `camp-${__VU}-${__ITER}`,
    template_id: 'flash_sale_v2',
    segment_id: 'active_users_30d',
    priority: 'normal',
  });

  const response = http.post('https://api.example.com/campaigns', payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(response, {
    'campaign accepted': (r) => r.status === 202,
  });

  sleep(1);
}
```

### Những gì cần test ngoài API

- Queue backlog growth khi provider throttle.
- Worker autoscaling khi lag tăng.
- Redis limiter latency khi concurrent access cao.
- Webhook ingestion burst sau khi provider flush events.

---

## 6. Chaos scenarios nên mô phỏng

| Tình huống | Kỳ vọng |
|------------|---------|
| SES trả 429 kéo dài 15 phút | giảm tốc + failover một phần sang SendGrid |
| Redis tăng latency | worker degrade nhưng không duplicate ồ ạt |
| 20% worker pods bị kill | batch leases được reclaim và resume |
| Webhook processor downtime | sự kiện được buffer, không mất trạng thái |
| Template bug trên một campaign | campaign bị pause, traffic khác vẫn an toàn |

### Mục tiêu của chaos test

Không phải để chứng minh hệ thống bất tử, mà để xác nhận khi hỏng nó hỏng theo cách có kiểm soát, có quan sát được, và phục hồi được.

---

## 7. Cost analysis sơ bộ

### Thành phần chi phí lớn

| Hạng mục | Ước tính |
|---------|----------|
| Amazon SES gửi 10M email | khoảng $1,000 |
| SendGrid fallback reserve | vài trăm đến vài nghìn USD tùy plan |
| Kubernetes compute | phụ thuộc cloud và autoscale window |
| Kafka/Redis/PostgreSQL | chi phí nền cố định |
| Observability | Prometheus/Grafana managed hoặc self-hosted |

### Tối ưu chi phí

- Dùng SES làm provider chính cho high-volume workloads.
- Chỉ bật fallback provider ở mức đủ cho disaster scenarios.
- Tách analytics nặng sang pipeline async, không ép PostgreSQL chính gánh toàn bộ.
- Tối ưu template rendering cache để giảm CPU worker.

---

## 8. Lessons learned từ production

### Những quyết định đúng

- Tách transactional và bulk workers từ đầu.
- Định danh message bằng `message_id` ổn định để idempotent.
- Xây dashboard campaign ETA và complaint rate trước khi chạy chiến dịch lớn.
- Warm-up domain/IP cẩn thận hơn dự tính ban đầu.

### Những bài học đau nhưng đáng giá

1. Throughput lý thuyết của worker không quan trọng bằng throughput thực tế qua provider.
2. Một chiến dịch marketing tệ có thể làm xấu reputation cho cả traffic giao dịch nếu dùng chung domain/IP.
3. Retry không có jitter sẽ nhanh chóng biến thành self-inflicted DDoS.
4. Webhook reconciliation là bắt buộc để biết email nào thực sự delivered.

---

## 9. Checklist go-live cho chiến dịch 10 triệu email

- Domain SPF, DKIM, DMARC đã xác thực và align.
- Segment đã được làm sạch, suppression list được áp dụng.
- Rate limits theo provider/domain/IP đã cấu hình.
- Dashboard, alerts và runbooks đã sẵn sàng.
- Fallback provider đã được test thật.
- Canary campaign nhỏ đã chạy thành công.
- On-call rotation biết chính xác ngưỡng page và cách pause campaign.

---

## Tổng kết

Bài toán gửi 10 triệu email không chỉ là scale worker. Nó là bài toán đồng thời của kiến trúc event-driven, deliverability, rate control, quan sát hệ thống và quy trình vận hành. Khi các lớp này được thiết kế đồng bộ, chiến dịch lớn sẽ trở thành một workload có thể dự đoán và kiểm soát thay vì một canh bạc.

Bạn đã đi hết chuỗi kiến thức cốt lõi để thiết kế một notification email platform quy mô lớn, từ high-level design đến production deployment.