---
id: 019e7a10-a114-7001-d001-f1e2d3c4b514
title: 第 14 課：監控、指標與警報
slug: bai-14-monitoring-metrics-alerting
description: >-
  通知平台、Prometheus 和 Grafana 儀表板、OpenTelemetry 分散式追蹤、隊列深度監控、工作人員運行狀況檢查、SLA
  追蹤和常見事件運行手冊的關鍵指標。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 第 5 部分：交付能力、監控與生產
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6959" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6959)"/>

  <!-- Decorations -->
  <g>
    <circle cx="866" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="632" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="898" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="664" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.2390923627308,146.5 1005.2390923627308,189.5 968,211 930.7609076372692,189.5 930.7609076372692,146.5 968,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：監控、指標與警報</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：交付能力、監控與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

如果沒有指標，一千萬封電子郵件行銷活動只不過是一次盲目的信念飛躍。通知產生系統必須能夠立即回答以下問題：發送速度有多快、卡在哪裡、哪個提供者故障、哪個活動即將違反其 SLA。

---

## 1.逐層觀察系統

### 四個主要指標層

|班級 |例如公制|
|-----|--------------|
|業務 |電子郵件已發送、已送達、投訴、活動預計到達時間 |
|應用 |渲染延遲、發送延遲、重試計數 |
|隊列|消費者延遲、隊列深度、DLQ 大小 |
|基礎架構| CPU、記憶體、網路、pod 重啟 |

### 應避免反模式

- 只看CPU/RAM，不看佇列延遲。
- 看看 `sent_count` 不看交貨/退貨/投訴。
- 不附加指標 `provider`, `campaign_type`, `recipient_domain`。

---

## 2. 電子郵件平台的核心指標集

### 業務指標

|指標|意義|
|--------|--------|
| `emails_requested_total` |請求發送的電子郵件總數 |
| `emails_sent_total` |提供者接受的電子郵件數量 |
| `emails_delivered_total` |交貨確認電子郵件號碼 |
| `emails_bounced_total` |按類型反彈 |
| `emails_complained_total` |投訴垃圾郵件 |
| `campaign_eta_seconds` |活動完成預計時間 |

### 應用程式指標

|指標|標籤應該有|
|--------|----------------|
| `template_render_seconds` | template_id、語言環境 |
| `provider_send_seconds` |供應商，優先|
| `retry_attempt_total` |錯誤類，提供者 |
| `throttle_decision_total` |限制類型，結果 |
| `worker_batch_duration_seconds` |工人組 |

### 隊列指標

|指標|意義|
|--------|--------|
| `queue_depth` |待處理職位總數 |
| `consumer_lag` |與生產商相比的積壓水平
| `retry_queue_depth` |等待重試的作業數量 |
| `dlq_messages_total` |數量進入 DLQ |

---

## 3. Prometheus 儀器

### 指標定義範例

```python
from prometheus_client import Counter, Histogram, Gauge

emails_sent_total = Counter(
    'emails_sent_total',
    'Total emails accepted by provider',
    ['provider', 'priority', 'campaign_type']
)

provider_send_seconds = Histogram(
    'provider_send_seconds',
    'Latency of provider send API',
    ['provider'],
    buckets=(0.05, 0.1, 0.25, 0.5, 1, 2, 5, 10)
)

queue_depth = Gauge(
    'queue_depth',
    'Current queue depth',
    ['queue_name']
)
```

### 使用標籤時的注意事項

- 只加上基數可控的標籤。
- 不要附上好的電子郵件地址 `message_id` 轉到公制標籤。
- 對於行銷活動，通常最好進行相應的總結 `campaign_type` 或前 N 個行銷活動，而不是同時所有行銷活動。

---

## 4. 儀表板應該顯示什麼？

### 活動管理儀表板

- 根據提供者的當前發送速率。
- 按網域劃分的遞送率和跳出率。
- 預計到達時間完成戰役。
- 隊列積壓和重試積壓。
- 5分鐘內投訴率。

### 待命工程師儀表板

- 過去 15 分鐘內最常見的錯誤類別。
- 每個提供者的斷路器狀態。
- 工作 Pod 重新啟動。
- DB 延遲、Redis 延遲。
- Webhook 攝取滯後。

### 交付能力擁有者儀表板

- 按領域開啟/點擊趨勢。
- 按段硬退回/投訴。
- IP變暖進展。
- 網域聲譽指標。

---

## 5. 警報：很少但正確的警告

### 警報規則範例

```yaml
groups:
  - name: notification-alerts
    rules:
      - alert: NotificationDLQSpike
        expr: increase(dlq_messages_total[5m]) > 200
        for: 10m
        labels:
          severity: page
        annotations:
          summary: "DLQ spike detected"

      - alert: ProviderThrottleRateHigh
        expr: rate(retry_attempt_total{error_class="provider_throttled"}[5m]) > 20
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Provider throttling rate is high"

      - alert: CriticalQueueBacklog
        expr: queue_depth{queue_name="critical-email"} > 1000
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "Critical email backlog exceeded threshold"
```

### 警報原則

- 僅在存在 SLA 風險或資料遺失時頁面。
- 當您需要觀察但不需要隨叫隨到時發出警告。
- 警報必須導致明確的行動，而不僅僅是一般通知。

---

## 6. 使用 OpenTelemetry 進行分散式追蹤

一封電子郵件會經歷許多躍點：API -> 佇列 -> 工作人員 -> 提供者 -> webhook -> 分析。如果沒有蹤跡，發生事件時很難將訊息的故事連結起來。

### 傳播相關標識符

```python
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def enqueue_email(job):
    with tracer.start_as_current_span("enqueue_email") as span:
        span.set_attribute("campaign.id", job.campaign_id)
        span.set_attribute("message.id", job.message_id)
        span.set_attribute("priority", job.priority)
        publish_to_queue(job)
```

### 欄位應該傳播

- `trace_id`
- `campaign_id`
- `message_id`
- `provider`
- `recipient_domain`

追蹤不會取代指標，但對於分析特定錯誤或延遲異常值非常有用。

---

## 7.通知系統的SLO/SLA

### 實用 SLO 範例

|流量類型| SLO |
|--------------|-----|
| OTP/密碼重設 | 99% 在 15 秒內傳送給提供者 |
|訂單確認 | 2 分鐘內完成 99% |
|行銷活動| 95% 在承諾的 ETA 內完成 |

### 錯誤的預算心態

如果您的行銷工作負載消耗了過多的系統錯誤預算，則必須降低行銷活動的優先順序或延長行銷活動的運行時間。 SLO 幫助團隊使用數據而不是情感爭論來做出決策。

---

## 8. 常見問題操作手冊

###事件：隊列積壓急劇增加

1. 檢查提供者的節流率。
2. 檢查自動縮放器是否放大。
3.檢查Redis限位器是否鎖得太緊。
4. 如果是行銷活動，請考慮降低發送速率或暫停。

###事件：投訴率異常上升

1. 確定哪個活動導致了高峰。
2. 首先暫停該活動。
3. 檢查分段和電子郵件內容。
4. 如果影響廣泛，則降低域範圍的吞吐量。

### 事件：遞送減少，但發送量仍然很高

1. 檢查 webhook 是否遺失或速度緩慢。
2. 檢查郵箱提供者特定的問題。
3. 按網域比較：Gmail 或 Outlook 是否分別受到影響？
4. 檢查聲譽儀表板。

---

## 總結

良好的監控可以幫助您從真實的營運角度查看通知系統：吞吐量、品質、SLA 和風險。正確的指標將縮短調查時間，減少誤報，並讓活動規模更有信心。

**下一篇文章：** 我們以生產案例研究結束本系列，部署一個系統在現實世界的基礎設施上發送 1000 萬封端到端電子郵件。
