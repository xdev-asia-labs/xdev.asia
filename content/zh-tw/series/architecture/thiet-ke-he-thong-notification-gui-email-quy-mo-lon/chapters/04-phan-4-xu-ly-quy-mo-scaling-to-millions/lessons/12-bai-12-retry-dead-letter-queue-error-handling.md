---
id: 019e7a10-a112-7001-d001-f1e2d3c4b512
title: 第 12 課：重試、死信隊列與錯誤處理
slug: bai-12-retry-dead-letter-queue-error-handling
description: 重試策略、指數退避、抖動、死信佇列設計、錯誤分類、有害訊息處理、補償邏輯和警報。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 4 部分：處理規模 - 擴展到數百萬
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3687" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3687)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：重試、死信隊列與錯誤</tspan>
      <tspan x="60" dy="42">處理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：處理規模 - 擴展到數百萬</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

從規模上看，錯誤不再是例外，而是系統的預設狀態。 SMTP 逾時、提供者 429、DNS 查找速度慢、Webhook 未回傳、資料庫鎖定爭用、負載資料錯誤。為了做好生產準備，您必須將錯誤處理設計為架構的核心部分。

---

## 1. 在談論重試之前先將錯誤分類

僅當錯誤是暫時的時重試才有效。如果錯誤是永久性的並且仍然重試，則您正在建立重試風暴。

### 錯誤分類

|錯誤組|範例|有重試嗎？ |行動|
|----------|---------|------------|------------|
|臨時基礎設施|網路逾時、DNS逾時|是的 |指數退避|
|供應商節流| HTTP 429、SMTP 421 |是的 |減速+重試|
|臨時信箱問題 |信箱已滿，灰名單 |有限公司|緩慢重試|
|永久收件者失敗 |使用者未知，網域無效 |沒有 |標記反彈 |
|內容/政策失敗 |被阻止的內容、違反政策 |沒有 |轉向手動審核 |
|內部錯誤 |空白字段，錯誤的模板渲染 |不會立即|隔離，DLQ |

### 重要規則

- 根據**錯誤類型**重試，而不是根據情緒重試。
- 保存來自提供者的原始錯誤代碼以提供足夠的分類資料。
- 定義從提供者錯誤到內部錯誤類別的清晰對應。

---

## 2.合理的重試策略

### 策略矩陣範例

|錯誤類別|最大重試次數 |延遲政策 |
|----------|-------------|--------------|
|網路逾時 | 5 | 5 秒、15 秒、30 秒、60 秒、120 秒 |
|供應商節流 | 8 | 10s + 抖動，與自適應節流相關 |
| 軟彈跳 | 3 | 15m、1小時、6小時 |
|渲染失敗 | 0 |直走 DLQ |
|無效的收件者 | 0 |標記永久失效|

### 帶有抖動的指數退避

```python
import random

def next_retry_delay(base_seconds: int, attempt: int, max_seconds: int = 3600) -> int:
    delay = min(base_seconds * (2 ** (attempt - 1)), max_seconds)
    jitter = random.randint(0, max(1, delay // 4))
    return delay + jitter

for attempt in range(1, 6):
    print(attempt, next_retry_delay(5, attempt))
```

抖動可以幫助工作人員避免同時重試錯誤並在提供者上造成額外的高峰。

---

## 3. 重試佇列與計畫重新處理

### 為什麼不立即推回主隊列？

如果作業失敗並立即返回主佇列，worker 可以立即重新加載，從而導致無用的熱循環。重試需要**故意超時**。

### 熱門模特

```
send-queue
   │ success
   ├──────────────▶ sent-status
   │
   │ transient failure
   ▼
retry-scheduler
   │
   ├── retry in 5s
   ├── retry in 1m
   └── retry in 15m
   │
   ▼
send-queue
   │
   └── after max retry -> DLQ
```

### Redis Sorted Set 用於延遲重試

```python
def schedule_retry(redis_client, message_id: str, payload: dict, retry_at_epoch: int):
    redis_client.zadd(
        'email:retry:zset',
        {json.dumps({'message_id': message_id, 'payload': payload}): retry_at_epoch}
    )
```

一個單獨的調度程序將輪詢到期專案並將它們重新發佈到主隊列。

---

## 4.死信隊列是如何設計的？

DLQ 不是垃圾掩埋場。它是調查、修復和受控後處理的隔離區。

### 訊息什麼時候進入DLQ？

- 重試次數過多。
- 有效負載已損壞或違反架構。
- 範本渲染錯誤重複出現。
- 提供者回傳策略/永久失敗錯誤，但仍需要審核。
- 未知錯誤類別沒有安全性映射。

### DLQ 訊息中保留的內容

```json
{
  "message_id": "msg_019e7a10_dead1",
  "campaign_id": "camp_flash_sale_april",
  "recipient": "bad-user@example.com",
  "error_class": "rendering_failure",
  "error_code": "TEMPLATE_VARIABLE_MISSING",
  "error_message": "variable first_name is required",
  "attempt_count": 3,
  "last_failed_at": "2026-04-01T14:00:00Z",
  "original_payload": {
    "template_id": "flash_sale_v2",
    "variables": {"discount_code": "FLASH30"}
  }
}
```

### DLQ 運作原理

- DLQ 必須可依活動、提供者、錯誤類別進行搜尋。
- 具有儀表板頂部錯誤類型。
- 僅允許透過工具/流程控制進行再處理。
- 如果您不了解根本原因，請勿自動重新驅動整個 DLQ。

---

## 5. 中毒訊息與隔離

有害訊息是導致工作執行緒崩潰或無法無限重複的訊息。如果不隔離的話，就會毀掉整個消費群。

### 如何處理

1. 未知/內部錯誤的嘗試限制非常低。
2. 將解析/渲染/發送步驟包裝在清晰的邊界中。
3. 記錄 `error_class = poison_message` 如果工作人員在同一負載上多次失敗。
4.切換到DLQ並提醒值班工程師。

### 發送前的防禦性驗證

```python
def validate_job(job):
    required_fields = ['message_id', 'recipient', 'template_id', 'campaign_id']
    missing = [field for field in required_fields if not job.get(field)]
    if missing:
        raise ValueError(f"Missing required fields: {missing}")

    if '@' not in job['recipient']['email']:
        raise ValueError('Invalid recipient email')

    return True
```

早期驗證有助於在錯誤深入流程之前發現錯誤。

---

## 6. 外部提供者的斷路器

當提供者遇到廣泛的錯誤時，不斷的重試只會使情況變得更糟。

### 狀態機很簡單

|狀態|意義|行動|
|--------|---------|------------|
|關閉 |普通提供者|正常發送|
|開啟|提供者錯誤超過閾值 |停止流量，切換到故障轉移 |
|半開|流量較少時重試 |恢復審查|

### 偽代碼

```python
class CircuitBreaker:
    def __init__(self, failure_threshold=10, recovery_seconds=60):
        self.failure_threshold = failure_threshold
        self.recovery_seconds = recovery_seconds
        self.failures = 0
        self.state = 'closed'

    def on_success(self):
        self.failures = 0
        self.state = 'closed'

    def on_failure(self):
        self.failures += 1
        if self.failures >= self.failure_threshold:
            self.state = 'open'
```

斷路器必須附加到**提供者故障轉移策略**。如果沒有替代路徑而沒有打開斷路器，則隊列仍將保持靜止。

---

## 7. 補償邏輯與一致狀態

提供者可能已收到電子郵件，但工作人員在更新資料庫之前失敗。如果沒有補償，您將不知道電子郵件是否已發送。

### 如何處理

- 安裝 `message_id` 提供者發送的元資料的內部。
- 接收 webhook 或回呼以協調狀態。
- 定期進行作業協調：將出站日誌與提供者事件進行比較。
- 對於不確定的狀態，請檢查 `unknown` 而不是假設失敗。

###推薦內部狀態

```text
pending -> processing -> sent_to_provider -> delivered
                           │
                           ├-> deferred
                           ├-> bounced_permanent
                           ├-> bounced_transient
                           └-> failed_internal
```

---

## 8. 警報與最小運轉手冊

### 應該要有警告

- 進入DLQ的消息率急劇增加。
- 5分鐘內錯誤類別佔比超過20%。
- 與主要提供者的斷路器開啟。
- 重試佇列積壓增加，但吞吐量下降。
- 出現新的未知錯誤代碼。

### 待命簡短操作手冊

1. 識別新提供者、資料或已部署代碼中的錯誤。
2. 檢查您是否需要暫停活動或故障轉移提供者。
3. 查看 DLQ 中的頂級錯誤類別和一些範​​例負載。
4. 只有在確認根本原因已解決後才能重新駕駛。

---

## 總結

重試和 DLQ 不是售後配件。它們是系統容忍錯誤而不造成混亂的強制性機制。好的設計必須知道如何對錯誤進行分類、有策略地重試、隔離有害訊息並留下足夠的痕跡以供調查。

**下一篇文章：** 我們從發送能力轉向到達收件匣的能力，即透過 SPF、DKIM、DMARC 和信譽管理實現的送達能力。
