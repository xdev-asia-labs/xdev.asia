---
id: 019e7a10-a115-7001-d001-f1e2d3c4b515
title: 第 15 課：生產部署 — 發送 1000 萬封電子郵件的案例研究
slug: bai-15-production-deployment-case-study-gui-10-trieu-email
description: >-
  端到端案例研究：設計和實施一個發送 1000 萬封電子郵件用於行銷活動的系統。基礎架構設置、Kubernetes
  部署、CI/CD、負載測試、混亂場景、成本分析和生產經驗教訓。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 第 5 部分：交付能力、監控與生產
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8722" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8722)"/>

  <!-- Decorations -->
  <g>
    <circle cx="777" cy="261" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="954" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="631" cy="155" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="808" cy="232" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="49" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.5166604983954,208 1043.5166604983954,234 1021,247 998.4833395016046,234 998.4833395016046,208 1021,195" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ 建築 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：生產部署 — 個案研究</tspan>
      <tspan x="60" dy="42">發送了 1000 萬封電子郵件</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：交付能力、監控與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

我們以一個現實問題結束本系列：一家電子商務公司需要在 4 小時內發送 1000 萬封閃購電子郵件，同時仍保持交易流程正常運作。本文將先前的所有部分組合成一個可立即投入生產的設計。

---

## 1. 問題與輸入假設

### 業務需求

- 最多 4 小時內發送 1000 萬封電子郵件。
- 有基本的個人化名稱、折扣代碼、區域設定。
- 有取消訂閱、開啟追蹤、點選追蹤。
- 不影響OTP和訂單確認。

### 容量目標

```text
10,000,000 / 14,400 giây ≈ 694 emails/giây
Peak headroom x2 -> thiết kế cho ~1,400 emails/giây
```

### 營運架構

- 1 個主要提供者：Amazon SES。
- 1 備份提供者：SendGrid。
- 2 個獨立的工作人員池：交易型和批量行銷型。
- 1 個 Redis 集群用於速率限制和調度。
- 1 個 Kafka 叢集作為事件驅動的主幹。
- 1 個 PostgreSQL 主副本 + 用於元資料和分析攝取的唯讀副本。

---

## 2.整體生產架構

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

### 主要成分

|成分|角色 |
|------------|---------|
|活動規劃|建立快照和批次作業|
|卡夫卡|生產者/消費者解耦 |
| Redis |限制器、重試計畫、分散式鎖 |
|散裝工人|渲染 + 發送行銷活動流量 |
|事務性工作者|確保關鍵流量 |
| Webhook 攝取 |接收遞送/退回/投訴事件 |

---

## 3.推薦的 Kubernetes 基礎設施

### 依命名空間和部署分離工作負載

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

### 初始尺寸建議

|服務 |數量 |筆記|
|--------|----------|--------|
| API / 規劃器 | 3 莢 |基礎血壓 |
| 散裝工人| 12-40 莢 |依滯後自動縮放 |
|事務性工作者| 4-8 莢 |預留容量|
| Webhook 處理器 | 3-6 個豆莢 |透過回呼突發擴展 |
| Redis | 3 個節點 |哨兵/叢集 |
|卡夫卡| 3 經紀人 |複製因子 3 |

---

## 4. CI/CD 與發布策略

### 管道應該在那裡

1. 模板渲染、限制器、提供者適配器的單元測試。
2. 與Kafka、Redis、PostgreSQL的整合測試。
3. 冒煙測試透過沙箱提供者發送電子郵件。
4. Canary 部署到新的工作版本。
5. 如果發送失敗率增加，請快速回滾。

### 為什麼工人需要金絲雀？

渲染器或提供者適配器中的一個小錯誤可能會將 1000 萬封電子郵件變成 1000 萬個錯誤。金絲雀 1-5% 的流量有助於在活動受到廣泛影響之前檢測到回歸情況。

---

## 5. 使用 k6 進行負載測試

如果不對活動協調部分進行負載測試，就不可能測試生產流量。

### 行銷活動 API 的 k6 範例

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

### 除了 API 還需要測試什麼

- 當提供者節流時佇列積壓成長。
- 當延遲增加時工作人員會自動縮放。
- Redis 在同時存取較高時限制延遲。
- 提供者刷新事件後 Webhook 攝取爆發。

---

## 6. 應模擬混沌場景

|情況|期望|
|------------|---------|
| SES 支付 429 持續 15 分鐘 |減速+部分故障轉移到SendGrid |
| Redis 增加延遲 |工人退化但不會大規模複製|
| 20% 的工蜂群被殺 |批量租約回收並恢復 |
| Webhook 處理器停機 |事件被緩衝，沒有狀態遺失 |
|活動中的範本錯誤 |活動已暫停，其他流量仍然安全 |

### 混沌測試的目標

不是為了證明系統是不朽的，而是為了確認當系統發生故障時，它會以受控、可觀察和可恢復的方式發生故障。

---

## 7. 初步成本分析

### 成本構成較大

|類別 |估計|
|--------|----------|
| Amazon SES 發送 1000 萬封電子郵件 |約 1,000 美元 |
| SendGrid 後備儲備 |幾百到幾千美元，取決於計劃|
| Kubernetes 運算 |取決於雲端和自動縮放視窗|
|卡夫卡/Redis/PostgreSQL |固定基礎成本|
|可觀察性| Prometheus/Grafana 託管或自架 |

### 成本優化

- 使用 SES 作為大容量工作負載的主要提供者。
- 僅在足以應對災難場景的層級啟用後備提供者。
- 將繁重的分析分離到非同步管道中，而不強制主 PostgreSQL 承擔整個負載。
- 優化模板渲染快取以減少工作CPU。

---

## 8. 從生產中學到的經驗教訓

### 正確的決定

- 從一開始就將事務性工作人員和散裝工作人員分開。
- 標識訊息 `message_id` 穩定到冪等。
- 在進行大型活動之前建立儀表板活動預計到達時間和投訴率。
- 比最初預期更仔細地預熱網域名稱/IP。

### 痛苦但寶貴的教訓

1.worker的理論吞吐量並不像通過provider的實際吞吐量那麼重要。
2. 如果使用相同的網域/IP，糟糕的行銷活動甚至可能會損害交易流量的聲譽。
3. 沒有抖動的重試很快就會變成自殘的DDoS。
4. 需要進行 Webhook 協調才能了解實際發送了哪些電子郵件。

---

## 9. 1000 萬封電子郵件活動的上線清單

- SPF、DKIM、DMARC 域已通過身份驗證和對齊。
- 段已清理，已套用抑制清單。
- 根據配置的提供者/域/IP 進行速率限制。
- 儀表板、警報和操作手冊已準備就緒。
- 後備提供者經過測試。
- 小型金絲雀戰役成功進行。
- 待命輪調準確了解頁面閾值以及如何暫停活動。

---

## 總結

發送 1000 萬封電子郵件的問題不僅僅是規模工人的問題。這是事件驅動架構、可交付性、速率控制、系統監控和操作程序的同時問題。當這些層被設計在一起時，大型活動就變成了可預測、可控制的工作負載，而不是一場賭博。

您已經完成了設計大型電子郵件通知平台的核心知識鏈，從高層設計到生產部署。
