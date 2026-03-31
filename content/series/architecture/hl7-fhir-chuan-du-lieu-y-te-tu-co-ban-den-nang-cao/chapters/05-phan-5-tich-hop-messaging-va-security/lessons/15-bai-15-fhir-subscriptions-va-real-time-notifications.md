---
id: 019e0a10-a502-7001-d001-f1a7f8000502
title: 'Bài 15: FHIR Subscriptions và Real-time Notifications'
slug: bai-15-fhir-subscriptions-va-real-time-notifications
description: >-
  Topic-based Subscriptions (R5), SubscriptionTopic, Subscription resource,
  notification channels (rest-hook, websocket, email), notification types
  (handshake, heartbeat, event-notification), filters, payload content.
  Thực hành cấu hình Subscription trên HAPI FHIR Server.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Tích hợp, Messaging và Security"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-subscriptions-overview"><strong>1. Subscriptions trong FHIR R5</strong></h2>

<p>FHIR R5 giới thiệu <strong>Topic-based Subscriptions</strong> — thay thế hoàn toàn cơ chế cũ của R4. Cho phép hệ thống nhận thông báo real-time khi data thay đổi.</p>

<pre><code>
┌──────────┐      Subscribe       ┌──────────┐
│  Client  │ ──────────────────▶ │  FHIR    │
│  (EMR,   │                     │  Server  │
│  app)    │ ◀────────────────── │          │
│          │    Notification      │          │
└──────────┘                     └──────────┘
</code></pre>

<h2 id="2-subscription-topic"><strong>2. SubscriptionTopic</strong></h2>

<p>SubscriptionTopic định nghĩa <strong>"chuyện gì có thể subscribe"</strong> — events, triggers, filters có sẵn.</p>

<pre><code class="language-json">{
  "resourceType": "SubscriptionTopic",
  "id": "topic-encounter-admission",
  "url": "http://hospital.vn/fhir/SubscriptionTopic/encounter-admission",
  "title": "Encounter Admission",
  "status": "active",
  "description": "Thông báo khi có bệnh nhân nhập viện mới",
  "resourceTrigger": [
    {
      "description": "Encounter mới được tạo hoặc chuyển status sang in-progress",
      "resource": "http://hl7.org/fhir/StructureDefinition/Encounter",
      "supportedInteraction": ["create", "update"],
      "queryCriteria": {
        "current": "status=in-progress&class=http://terminology.hl7.org/CodeSystem/v3-ActCode|IMP",
        "resultForCreate": "test-passes",
        "resultForDelete": "test-fails"
      }
    }
  ],
  "canFilterBy": [
    {
      "description": "Filter theo location (khoa)",
      "resource": "Encounter",
      "filterParameter": "location"
    },
    {
      "description": "Filter theo service provider",
      "resource": "Encounter",
      "filterParameter": "service-provider"
    }
  ],
  "notificationShape": [
    {
      "resource": "Encounter",
      "include": [
        "Encounter:subject",
        "Encounter:participant"
      ]
    }
  ]
}
</code></pre>

<h2 id="3-subscription-resource"><strong>3. Subscription Resource</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Subscription",
  "id": "sub-admission-notify-001",
  "status": "requested",
  "topic": "http://hospital.vn/fhir/SubscriptionTopic/encounter-admission",
  "reason": "Nhận thông báo nhập viện khoa Tim mạch",
  "filterBy": [
    {
      "resourceType": "Encounter",
      "filterParameter": "location",
      "value": "Location/loc-cardiology"
    }
  ],
  "channelType": {
    "system": "http://terminology.hl7.org/CodeSystem/subscription-channel-type",
    "code": "rest-hook"
  },
  "endpoint": "https://ehr-app.hospital.vn/api/webhooks/fhir-notifications",
  "heartbeatPeriod": 60,
  "timeout": 60,
  "contentType": "application/fhir+json",
  "content": "id-only",
  "maxCount": 10
}
</code></pre>

<h3 id="channel-types"><strong>Channel Types</strong></h3>

<table>
<thead>
<tr><th>Channel</th><th>Mô tả</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td>rest-hook</td><td>HTTP POST đến endpoint</td><td>Server-to-server integration</td></tr>
<tr><td>websocket</td><td>WebSocket connection</td><td>Real-time UI, dashboards</td></tr>
<tr><td>email</td><td>Email notification</td><td>Alert cho clinicians</td></tr>
<tr><td>message</td><td>FHIR Messaging ($process-message)</td><td>Tích hợp messaging systems</td></tr>
</tbody>
</table>

<h3 id="content-levels"><strong>Content Levels</strong></h3>

<table>
<thead>
<tr><th>Level</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>empty</td><td>Chỉ notification header, không có resource data</td></tr>
<tr><td>id-only</td><td>Resource ID + type, client tự fetch</td></tr>
<tr><td>full-resource</td><td>Chứa đầy đủ resource trong notification</td></tr>
</tbody>
</table>

<h2 id="4-notification-types"><strong>4. Notification Types</strong></h2>

<h3 id="handshake"><strong>Handshake Notification</strong></h3>

<p>Gửi khi subscription được tạo, xác nhận endpoint hoạt động.</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "subscription-notification",
  "entry": [
    {
      "resource": {
        "resourceType": "SubscriptionStatus",
        "type": "handshake",
        "subscription": {
          "reference": "Subscription/sub-admission-notify-001"
        },
        "topic": "http://hospital.vn/fhir/SubscriptionTopic/encounter-admission",
        "eventsSinceSubscriptionStart": "0"
      }
    }
  ]
}
</code></pre>

<h3 id="event-notification"><strong>Event Notification</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "subscription-notification",
  "entry": [
    {
      "resource": {
        "resourceType": "SubscriptionStatus",
        "type": "event-notification",
        "subscription": {
          "reference": "Subscription/sub-admission-notify-001"
        },
        "topic": "http://hospital.vn/fhir/SubscriptionTopic/encounter-admission",
        "eventsSinceSubscriptionStart": "5",
        "notificationEvent": [
          {
            "eventNumber": "5",
            "focus": {
              "reference": "Encounter/enc-new-001"
            },
            "additionalContext": [
              {"reference": "Patient/patient-new-001"}
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "https://fhir-server.example.com/fhir/r5/Encounter/enc-new-001",
      "resource": {
        "resourceType": "Encounter",
        "id": "enc-new-001",
        "status": "in-progress"
      }
    }
  ]
}
</code></pre>

<h3 id="heartbeat"><strong>Heartbeat Notification</strong></h3>

<p>Gửi định kỳ để xác nhận subscription còn hoạt động, ngay cả khi không có events.</p>

<h2 id="5-subscription-lifecycle"><strong>5. Subscription Lifecycle</strong></h2>

<pre><code>
requested → active → error → off
    │          │        │
    │          │        └── Server tạm dừng sau nhiều lần gửi thất bại
    │          └── Nhận handshake thành công
    └── Client POST Subscription
</code></pre>

<h2 id="6-thuc-hanh-hapi"><strong>6. Thực hành Subscriptions trên HAPI FHIR</strong></h2>

<pre><code class="language-bash"># 1. Kiểm tra SubscriptionTopics có sẵn
curl -s https://hapi.fhir.org/baseR5/SubscriptionTopic | jq '.entry[].resource.url'

# 2. Tạo Subscription
curl -X POST https://hapi.fhir.org/baseR5/Subscription \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Subscription",
    "status": "requested",
    "topic": "http://example.org/FHIR/SubscriptionTopic/admission",
    "channelType": {"code": "rest-hook"},
    "endpoint": "https://your-webhook.example.com/fhir-notify",
    "contentType": "application/fhir+json",
    "content": "id-only"
  }'

# 3. Kiểm tra status
curl -s https://hapi.fhir.org/baseR5/Subscription/sub-id | jq '.status'

# 4. Tạo Encounter để trigger notification
curl -X POST https://hapi.fhir.org/baseR5/Encounter \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Encounter","status":"in-progress","class":[{"coding":[{"code":"IMP"}]}],"subject":{"reference":"Patient/123"}}'
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>SubscriptionTopic</strong> — Server định nghĩa events có thể subscribe</p></li>
<li><p><strong>Subscription</strong> — Client đăng ký nhận thông báo, chọn channel, filter, content level</p></li>
<li><p><strong>Channels</strong> — rest-hook (phổ biến nhất), websocket, email, message</p></li>
<li><p><strong>Notification types</strong> — handshake, heartbeat, event-notification</p></li>
<li><p>Thay thế hoàn toàn cơ chế Subscription cũ của R4 (criteria-based)</p></li>
</ul>
