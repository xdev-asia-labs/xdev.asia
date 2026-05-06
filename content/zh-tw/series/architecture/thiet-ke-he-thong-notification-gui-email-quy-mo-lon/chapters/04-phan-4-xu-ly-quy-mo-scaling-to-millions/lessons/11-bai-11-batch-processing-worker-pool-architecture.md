---
id: 019e7a10-a111-7001-d001-f1e2d3c4b511
title: 第 11 課：批次和工作池架構
slug: bai-11-batch-processing-worker-pool-architecture
description: 分塊策略、工作池設計、動態擴展、正常關閉、批次資料庫操作、記憶體高效處理、進度追蹤和可恢復活動。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：處理規模 - 擴展到數百萬
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7447" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7447)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1066" cy="208" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="998" cy="240" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="126" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="272" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="1055.2390923627308,196.5 1055.2390923627308,239.5 1018,261 980.7609076372692,239.5 980.7609076372692,196.5 1018,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：批次和工作池</tspan>
      <tspan x="60" dy="42">大樓</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：處理規模 - 擴展到數百萬</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

速率限制有助於以正確的速度發送，但如果您想有效地處理**數百萬收件人**，您必須劃分工作，將其平均分配給工作人員，並確保在活動中間出現問題時可以恢復。

本文將介紹生產工作負載的工作池架構和批次編排。

---

## 1. 為什麼不單獨處理每封電子郵件？

如果每個接收者從一開始就是單獨的作業，系統將會面臨：

- 隊列太大，積壓的主題巨大。
- 資料庫查找重複多次。
- 每個訊息的開銷序列化/解析。
- 進度追蹤是零星的，難以恢復。

### 合理的做法

1. 建立收件人的**活動快照**。
2. 將快照拆分為**穩定批次**。
3. 每個batch都會被分配到worker池中。
4. 批次時，Worker會依照目前配額渲染發送。
5. 定期更新進度，如果不需要，不要在每封電子郵件後更新資料庫。

---

## 2. 收件者清單的分塊策略

### 選擇批次大小的標準

|批量大小|優勢 |缺點 |當使用 |
|----------|---------|----------|----------|
| 100 | 100重試方便，流暢度高 |大開銷隊列|交易爆發 |
| 500 | 500平衡|需要良好的進度管理|最受歡迎|
| 1,000 |對批量 API 更有效 |重試成本更高 |行銷活動|
| 5,000+ |優化網路通話 |準確恢復困難|用於預處理 |

### 推薦

- 使用 SES/SendGrid 等批次 API，建立 500-1000 個收件人的**邏輯批次**。
- 使用 SMTP 或大量範本渲染時，保持批次小於 200-500。
- 如果個性化很複雜，則批次應該很小，以避免記憶體峰值。

### 快照收件人

```sql
CREATE TABLE campaign_recipients_snapshot (
  campaign_id TEXT NOT NULL,
  recipient_id BIGINT NOT NULL,
  email TEXT NOT NULL,
  locale TEXT,
  timezone TEXT,
  template_variables JSONB,
  batch_no INT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  PRIMARY KEY (campaign_id, recipient_id)
);

CREATE INDEX idx_campaign_batch_status
  ON campaign_recipients_snapshot (campaign_id, batch_no, status);
```

當來源系統中的使用者細分不斷更新時，快照有助於防止行銷活動中途更改。

---

## 3.工作池架構

```
Campaign Planner
    │
    ├── Create recipient snapshot
    ├── Split to batch jobs
    └── Publish batch jobs
         │
         ▼
   Batch Queue / Topic
         │
         ├── Worker Group A: critical
         ├── Worker Group B: high
         └── Worker Group C: bulk marketing
                │
                ▼
          Send Adapter Layer
                │
                ▼
         ESP / SMTP / Webhooks
```

### 以工作量區分工人

|工人團體|流量類型|數量 |特徵|
|--------------|--------------|----------|----------|
|關鍵工人 | OTP，重置密碼 |數量很少但始終可用 |低延遲 |
|標準工人 |交易正常|平均 |穩定 |
|散裝工人 |行銷活動|彈性強|高通量|

將工作人員群體分開有助於行銷活動不會造成重要交易流的匱乏。

---

## 4. 以節省記憶體的方式取得數據

### 常見錯誤

```python
recipients = db.query("SELECT * FROM recipients WHERE campaign_id = ?", campaign_id)
for recipient in recipients:
    process(recipient)
```

對於數百萬筆記錄，這種方法很容易導致工作人員耗盡千兆位元組的 RAM。

### 串流/分頁更正確

```python
def fetch_batch(db, campaign_id: str, batch_no: int, limit: int = 500):
    return db.fetch_all(
        """
        SELECT recipient_id, email, locale, timezone, template_variables
        FROM campaign_recipients_snapshot
        WHERE campaign_id = %s
          AND batch_no = %s
          AND status IN ('pending', 'retry')
        ORDER BY recipient_id
        LIMIT %s
        """,
        (campaign_id, batch_no, limit),
    )

def process_batch(batch_job):
    rows = fetch_batch(db, batch_job.campaign_id, batch_job.batch_no)
    rendered = [render_email(row) for row in rows]
    send_results = email_provider.send_bulk(rendered)
    persist_results(batch_job.campaign_id, batch_job.batch_no, send_results)
```

### 操作規則

- 一次只在記憶體中保存一批。
- 渲染後立即發送，整個活動不會累積在RAM中。
- 以批次或微批量記錄狀態以減少寫入放大。

---

## 5. 使用 Kubernetes 進行動態擴展

### HPA 基於佇列深度

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: bulk-email-workers
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: bulk-email-workers
  minReplicas: 4
  maxReplicas: 80
  metrics:
    - type: External
      external:
        metric:
          name: kafka_consumer_lag
          selector:
            matchLabels:
              consumer_group: bulk-workers
        target:
          type: AverageValue
          averageValue: "5000"
```

### 自動縮放不應僅基於 CPU

CPU 低不一定意味著隊列健康。工作線程可能處於空閒狀態，因為它被速率限制器阻止或因為提供程序響應緩慢。佇列延遲、待處理批次、平均發送延遲是更接近業務的訊號。

---

## 6. 正常關閉和可恢復處理

工作人員在部署或自動擴展時發送電子郵件並中途被殺是很正常的。設計必須提前計算。

### 原則

1. Worker接收批次作業。
2. 將批次標記為 `processing` 有租約超時。
3. 處理過程中，週期性進行心跳。
4. 如果worker死亡，租約到期且批次返回佇列。
5. 發送電子郵件必須是冪等的 `message_id`。

### 租賃表示例

```sql
CREATE TABLE batch_leases (
  campaign_id TEXT NOT NULL,
  batch_no INT NOT NULL,
  worker_id TEXT NOT NULL,
  leased_until TIMESTAMPTZ NOT NULL,
  heartbeat_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (campaign_id, batch_no)
);
```

### 避免重複的電子郵件

- 每個收件者/訊息必須有一個 `message_id` 穩定。
- 記錄具有獨特約束的出站日誌 `message_id`。
- 重試或回收租約時，請在再次發送之前檢查出站狀態。

---

## 7. 大型活動的進度追蹤

### 需要即時查看的指標

|指標|意義|
|--------|--------|
|收件人總數 |快照中的收件人總數 |
|排隊批次 |批次待定 |
|處理批次 |批量運行 |
|已傳送計數 |電子郵件已傳送至 ESP |
|已交付數量 |電子郵件送達已確認 |
|失敗計數 |永久失敗 |
| eta_分鐘 |預計完成 |

### 聚合狀態表

```sql
CREATE TABLE campaign_progress (
  campaign_id TEXT PRIMARY KEY,
  total_recipients BIGINT NOT NULL,
  sent_count BIGINT NOT NULL DEFAULT 0,
  failed_count BIGINT NOT NULL DEFAULT 0,
  processing_batches INT NOT NULL DEFAULT 0,
  queued_batches INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### 簡單預計到達時間

```text
ETA = remaining_recipients / effective_send_rate_per_second
```

`effective_send_rate` 必須是從指標中獲得的實際速度，而不是紙上的理論速度。

---

## 8.實戰優化

### 優化清單

- 透過大量更新收集資料庫寫入，而不是更新每一行。
- 快取模板編譯結果。
- 如果需要，將 CPU 密集型渲染與 IO 密集型發送分開。
- 對服務之間的大負載使用 gzip/壓縮。
- 如果可能的話，不要將所有繁重的模板變數填入佇列中，只需發送引用即可。

### 什麼時候應該分開渲染服務？

- 模板太複雜或個人化使用大量額外資料。
- 需要單獨的 A/B 測試、在地化、內容驗證。
- 工作發送需要保持極其緊湊以實現線性擴展。

---

## 總結

批次和工作池是將數百萬個接收者清單轉變為可控制、重試、復原和自動縮放的工作單元的層。如果設計正確，一場大型活動將解決許多小型的獨立問題，而不是一個巨大的風險。

**下一篇文章：** 我們將處理失敗情況，從策略重試到死信佇列和安全重新處理。
