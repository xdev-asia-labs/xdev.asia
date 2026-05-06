---
id: 019e0a10-a502-7001-d001-f1a7f8000502
title: 'レッスン 15: FHIR サブスクリプションとリアルタイム通知'
slug: bai-15-fhir-subscriptions-va-real-time-notifications
description: >-
  トピックベースのサブスクリプション (R5)、SubscriptionTopic、サブスクリプション リソース、通知チャネル (レストフック、Web
  ソケット、電子メール)、通知タイプ (ハンドシェイク、ハートビート、イベント通知)、フィルター、ペイロード コンテンツ。 HAPI FHIR
  サーバーでのサブスクリプションの構成を練習します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 5: 統合、メッセージング、セキュリティ'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ アーキテクチャ — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: FHIR サブスクリプションとリアルタイム</tspan>
      <tspan x="60" dy="42">通知</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 統合、メッセージング、セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-subscriptions-overview"><strong>1. FHIR R5 のサブスクリプション</strong></h2>

<p>FHIR R5導入 <strong>トピックベースの購読</strong> — R4 の古いメカニズムを完全に置き換えます。データが変更されたときにシステムがリアルタイムの通知を受信できるようにします。</p>

<pre><code>
┌──────────┐      Subscribe       ┌──────────┐
│  Client  │ ──────────────────▶ │  FHIR    │
│  (EMR,   │                     │  Server  │
│  app)    │ ◀────────────────── │          │
│          │    Notification      │          │
└──────────┘                     └──────────┘
</code></pre>

<h2 id="2-subscription-topic"><strong>2. サブスクリプショントピック</strong></h2>

<p>サブスクリプショントピックの定義 <strong>「何を購読できますか?」</strong> — イベント、トリガー、フィルターが利用可能。</p>

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

<h2 id="3-subscription-resource"><strong>3. サブスクリプションリソース</strong></h2>

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

<h3 id="channel-types"><strong>チャネルの種類</strong></h3>

<table>
<thead>
<tr><th>チャンネル</th><th>説明</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td>レストフック</td><td>エンドポイントへのHTTP POST</td><td>サーバー間の統合</td></tr>
<tr><td>ウェブソケット</td><td>WebSocket接続</td><td>リアルタイム UI、ダッシュボード</td></tr>
<tr><td>電子メール</td><td>電子メール通知</td><td>エンジニアへの注意喚起</td></tr>
<tr><td>メッセージ。メッセージ</td><td>FHIR メッセージング ($process-message)</td><td>統合メッセージング システム</td></tr>
</tbody>
</table>

<h3 id="content-levels"><strong>コンテンツレベル</strong></h3>

<table>
<thead>
<tr><th>レベル</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>空の</td><td>通知ヘッダーのみ、リソース データなし</td></tr>
<tr><td>ID のみ</td><td>リソース ID + タイプ、クライアントが自身を取得する</td></tr>
<tr><td>フルリソース</td><td>通知内のすべてのリソースが含まれます</td></tr>
</tbody>
</table>

<h2 id="4-notification-types"><strong>4. 通知の種類</strong></h2>

<h3 id="handshake"><strong>ハンドシェイク通知</strong></h3>

<p>サブスクリプションの作成時に送信され、エンドポイントがアクティブであることを確認します。</p>

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

<h3 id="event-notification"><strong>イベントのお知らせ</strong></h3>

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

<h3 id="heartbeat"><strong>ハートビート通知</strong></h3>

<p>イベントがない場合でも、サブスクリプションがアクティブであることを確認するために定期的に送信します。</p>

<h2 id="5-subscription-lifecycle"><strong>5. サブスクリプションのライフサイクル</strong></h2>

<pre><code>
requested → active → error → off
    │          │        │
    │          │        └── Server tạm dừng sau nhiều lần gửi thất bại
    │          └── Nhận handshake thành công
    └── Client POST Subscription
</code></pre>

<h2 id="6-thuc-hanh-hapi"><strong>6. HAPI FHIR でのサブスクリプションの練習</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>サブスクリプショントピック</strong> — サーバーはサブスクライブできるイベントを定義します</p></li>
<li><p><strong>定期購入</strong> — クライアントは通知を受信するように登録し、チャネル、フィルター、コンテンツ レベルを選択します</p></li>
<li><p><strong>チャンネル</strong> — レストフック (最も一般的)、WebSocket、電子メール、メッセージ</p></li>
<li><p><strong>通知の種類</strong> — ハンドシェイク、ハートビート、イベント通知</p></li>
<li><p>R4 の古いサブスクリプション メカニズム (基準ベース) を完全に置き換えます。</p></li>
</ul>
