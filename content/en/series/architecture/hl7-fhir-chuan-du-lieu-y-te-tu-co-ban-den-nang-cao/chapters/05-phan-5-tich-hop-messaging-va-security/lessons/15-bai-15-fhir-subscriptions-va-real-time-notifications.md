---
id: 019e0a10-a502-7001-d001-f1a7f8000502
title: 'Lesson 15: FHIR Subscriptions and Real-time Notifications'
slug: bai-15-fhir-subscriptions-va-real-time-notifications
description: >-
  Topic-based Subscriptions (R5), SubscriptionTopic, Subscription resource,
  notification channels (rest-hook, websocket, email), notification types
  (handshake, heartbeat, event-notification), filters, payload content. Practice
  configuring Subscription on HAPI FHIR Server.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 5: Integration, Messaging and Security'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3169" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3169)"/>

  <!-- Decorations -->
  <g>
    <circle cx="604" cy="82" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="608" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="612" cy="30" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="616" cy="134" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="238" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.0429399400243,223.5 1074.0429399400243,260.5 1042,279 1009.9570600599758,260.5 1009.9570600599758,223.5 1042,205" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ Architecture — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: FHIR Subscriptions and Real-time</tspan>
      <tspan x="60" dy="42">Notifications</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Integration, Messaging and Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-subscriptions-overview"><strong>1. Subscriptions in FHIR R5</strong></h2>

<p>FHIR R5 introduced <strong>Topic-based Subscriptions</strong> — completely replaces the old mechanism of the R4. Allows the system to receive real-time notifications when data changes.</p>

<pre><code>
┌──────────┐      Subscribe       ┌──────────┐
│  Client  │ ──────────────────▶ │  FHIR    │
│  (EMR,   │                     │  Server  │
│  app)    │ ◀────────────────── │          │
│          │    Notification      │          │
└──────────┘                     └──────────┘
</code></pre>

<h2 id="2-subscription-topic"><strong>2. SubscriptionTopic</strong></h2>

<p>SubscriptionTopic definition <strong>"What can I subscribe to?"</strong> — events, triggers, filters available.</p>

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
<tr><th>Channel</th><th>Description</th><th>Use cases</th></tr>
</thead>
<tbody>
<tr><td>rest-hook</td><td>HTTP POST to the endpoint</td><td>Server-to-server integration</td></tr>
<tr><td>websocket</td><td>WebSocket connection</td><td>Real-time UI, dashboards</td></tr>
<tr><td>email</td><td>Email notifications</td><td>Alert for engineers</td></tr>
<tr><td>message. message</td><td>FHIR Messaging ($process-message)</td><td>Integrated messaging systems</td></tr>
</tbody>
</table>

<h3 id="content-levels"><strong>Content Levels</strong></h3>

<table>
<thead>
<tr><th>Level</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>empty</td><td>Only notification header, no resource data</td></tr>
<tr><td>id-only</td><td>Resource ID + type, client fetches itself</td></tr>
<tr><td>full-resources</td><td>Contains all resources in the notification</td></tr>
</tbody>
</table>

<h2 id="4-notification-types"><strong>4. Notification Types</strong></h2>

<h3 id="handshake"><strong>Handshake Notification</strong></h3>

<p>Sent when the subscription is created, confirming the endpoint is active.</p>

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

<p>Send periodically to confirm subscription is active, even when there are no events.</p>

<h2 id="5-subscription-lifecycle"><strong>5. Subscription Lifecycle</strong></h2>

<pre><code>
requested → active → error → off
    │          │        │
    │          │        └── Server tạm dừng sau nhiều lần gửi thất bại
    │          └── Nhận handshake thành công
    └── Client POST Subscription
</code></pre>

<h2 id="6-thuc-hanh-hapi"><strong>6. Practice Subscriptions on HAPI FHIR</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>SubscriptionTopic</strong> — Server defines events that can be subscribed</p></li>
<li><p><strong>Subscription</strong> — Client registers to receive notifications, selects channel, filter, content level</p></li>
<li><p><strong>Channels</strong> — rest-hook (most common), websocket, email, message</p></li>
<li><p><strong>Notification types</strong> — handshake, heartbeat, event-notification</p></li>
<li><p>Completely replaces the old Subscription mechanism of R4 (criteria-based)</p></li>
</ul>
