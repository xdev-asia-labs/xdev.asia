---
id: 019d8a21-c106-7001-d001-e1f2a3b4c506
title: "Bài 6: CDN (Content Delivery Network) - Tăng tốc toàn cầu"
slug: bai-6-cdn-content-delivery-network-tang-toc-toan-cau
description: >-
  CDN là gì và cách hoạt động. Push CDN vs Pull CDN. Cache Invalidation
  strategies. Multi-tier CDN architecture. Edge Computing.
  So sánh CloudFlare, AWS CloudFront, Fastly. Use cases và anti-patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Các Thành Phần Hạ Tầng (Infrastructure Components)"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Nếu server đặt ở Singapore, user ở Hà Nội phải đợi ~50ms roundtrip cho mỗi request. User ở Mỹ phải đợi ~200ms. CDN giải quyết vấn đề này bằng cách đặt content **gần user nhất có thể**.

---

## 1. CDN là gì?

CDN là mạng lưới proxy servers phân tán toàn cầu, serve content từ locations gần user nhất.

```
Không có CDN:
  User (Hà Nội) ──── 200ms ────► Origin Server (US)

Có CDN:
  User (Hà Nội) ──── 10ms ────► CDN Edge (Hà Nội)
                                    │ cache miss
                                    ▼
                              CDN Edge ── 200ms ──► Origin Server (US)
                                    │ cache result
                                    ▼
  User (Hà Nội) ──── 10ms ────► CDN Edge (Hà Nội)  ← Lần sau = 10ms!
```

### 1.1 CDN Architecture

```
                    Origin Server
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
         ┌────────┐ ┌────────┐ ┌────────┐
         │Regional│ │Regional│ │Regional│
         │  PoP   │ │  PoP   │ │  PoP   │
         │ (Asia) │ │  (EU)  │ │ (US)   │
         └───┬────┘ └───┬────┘ └───┬────┘
         ┌───┴───┐  ┌───┴───┐  ┌───┴───┐
         │Edge   │  │Edge   │  │Edge   │
         │Servers│  │Servers│  │Servers│
         └───────┘  └───────┘  └───────┘
             ▲           ▲          ▲
           Users       Users      Users
```

---

## 2. Push CDN vs Pull CDN

### 2.1 Push CDN

```
Origin Server ──push──► CDN Edge
  Khi content thay đổi, origin chủ động push lên CDN

Flow:
  1. Developer deploy new image
  2. CI/CD pipeline push image to CDN
  3. CDN distributes to all edges
  4. User request → Edge server → Return immediately
```

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Content luôn sẵn sàng | Phải quản lý push process |
| Không có "first request" delay | Tốn storage trên tất cả edges |
| Kiểm soát hoàn toàn | Phức tạp khi content thay đổi nhiều |

**Best for:** Static content ít thay đổi, nhỏ

### 2.2 Pull CDN

```
User ──request──► CDN Edge
  Edge: "Tôi không có content này"
  Edge ──request──► Origin Server
  Origin ──response──► Edge
  Edge: cache content + return to user

Lần sau:
  User ──request──► CDN Edge
  Edge: "Tôi có rồi!" → Return from cache
```

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Tự động, không cần quản lý | First request chậm (cache miss) |
| Chỉ cache content được request | Cần TTL strategy |
| Dễ setup | Cache stampede risk |

**Best for:** Dynamic content, traffic cao

---

## 3. Cache Invalidation Strategies

### 3.1 TTL (Time To Live)

```
CDN cache product image với TTL = 1 giờ
  T=0:  User request → Cache MISS → Fetch from origin → Cache 1 giờ
  T=30m: User request → Cache HIT → Return cached
  T=61m: Cache expired → Fetch from origin → Cache lại

Trade-off: TTL ngắn = fresh hơn nhưng nhiều origin hits
           TTL dài = nhanh hơn nhưng content có thể cũ
```

### 3.2 Cache Purge

```
CDN API: DELETE /cache?url=https://xdev.asia/images/logo.png
→ Xóa content khỏi tất cả edge servers

Use case: Cập nhật logo, fix typo trong hình ảnh
```

### 3.3 Cache Busting

```
Thay đổi URL khi content thay đổi:

Trước: /style.css
Sau:   /style.css?v=2
Hoặc:  /style.a1b2c3d4.css (hash trong filename)

→ CDN coi đây là content mới → fetch from origin
```

### 3.4 Stale-While-Revalidate

```
Cache expired, nhưng:
  1. Trả cached content ngay (stale)
  2. Đồng thời fetch fresh content từ origin
  3. Update cache khi origin respond

→ User luôn nhận response nhanh
→ Content cuối cùng sẽ fresh
```

---

## 4. Edge Computing

```
Traditional CDN:
  Edge chỉ serve static files

Edge Computing:
  Edge chạy code (logic) tại edge location

Ví dụ Cloudflare Workers:
  - A/B testing tại edge
  - Geolocation-based redirects
  - Authentication tại edge
  - Image resizing tại edge
  - API response transformation
```

---

## 5. So sánh CDN Providers

| Feature | CloudFlare | AWS CloudFront | Fastly |
|---------|-----------|---------------|--------|
| **PoPs** | 300+ | 450+ | 90+ |
| **Edge Compute** | Workers | Lambda@Edge | Compute@Edge |
| **Free tier** | Generous | Limited | None |
| **Price** | $ | $$ | $$$ |
| **DDoS protection** | Built-in | AWS Shield | Limited |
| **Best for** | General, small-medium | AWS ecosystem | Performance-critical |

---

## 6. CDN Anti-patterns

| Anti-pattern | Vấn đề | Giải pháp |
|-------------|--------|-----------|
| Cache personalized content | User A thấy data User B | Cache-Control: private |
| Quá dài TTL cho API | Data stale | TTL ngắn + stale-while-revalidate |
| Không dùng CDN cho API | API chậm ở xa | Cache GET APIs ở edge |
| CDN cho tất cả mọi thứ | POST/PUT/DELETE qua CDN | Chỉ CDN cho GET requests |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| CDN | Serve content từ location gần user nhất |
| Push vs Pull | Push cho static, Pull cho dynamic |
| Cache Invalidation | TTL + purge + cache busting |
| Edge Computing | Chạy logic tại edge, giảm latency |

---

## Bài tập

1. **CDN Strategy:** Thiết kế CDN strategy cho e-commerce site với: product images (ít thay đổi), product prices (thay đổi thường xuyên), user profile (personalized).

2. **Cache Invalidation:** Blog platform cần cập nhật bài viết ngay khi author edit. Thiết kế cache invalidation strategy.

3. **Cost Estimation:** Website có 10M page views/ngày, mỗi page 2MB (500KB HTML + 1.5MB images). Ước tính CDN bandwidth/tháng và chi phí (CloudFront: $0.085/GB).
