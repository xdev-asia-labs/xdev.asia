---
id: 019e7a10-a110-7001-d001-f1e2d3c4b510
title: 第 10 課：速率限制與節流 — 控制傳送速度
slug: bai-10-rate-limiting-throttling-kiem-soat-toc-do-gui
description: 為什麼電子郵件系統需要速率限制。令牌桶、滑動視窗、漏桶。依提供者、網域、IP 進行多層限制。自適應速率限制基於跳出率。基於Redis的分散式限制器。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 4 部分：處理規模 - 擴展到數百萬
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="927" cy="271" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1081" cy="85" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="252" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="159" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ 建築 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：速率限制與節流 — 檢查</tspan>
      <tspan x="60" dy="42">控制發送速度</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：處理規模 - 擴展到數百萬</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

可以呈現和排隊數百萬封電子郵件的系統可能無法安全地發送它們。真正的瓶頸往往在於**有效發送速率**：來自ESP、域/IP信譽和下游系統吸收能力的限制。

本文重點關注流量調節層，該層決定了 1,000 萬封電子郵件活動是否會成功或將整個網域推入垃圾郵件資料夾。

---

## 1. 為什麼需要限速？

### 實際限制

|來源有限|範例|超過閾值的後果 |
|----------|------|------------------------|
| ESP 發送配額 | SES 預設為 200 封電子郵件/秒 | `ThrottlingException`, 隊列積壓|
|網域信譽|新網域突然寄100萬封郵件 |垃圾郵件投放量急遽增加|
| IP信譽|專用IP尚未預熱|退回郵件和投訴增加 |
| ISP 限制 | Gmail、Yahoo 依網域限制 |延期交貨、軟退回 |
|內部系統|工人太多，資料庫更新太厚 | CPU佔用率高，鎖爭用|

### 節流層的目標

- 保護寄件者的聲譽。
- 保護電子郵件提供者免受流量爆發的影響。
- 優先考慮交易電子郵件而不是電子郵件行銷。
- 保持穩定的吞吐量，而不是短暫的峰值然後崩潰。
- 控制隊列積壓。

---

## 2. 流行演算法

### 快速比較

|演算法|優點 |弱點|適合 |
|------------|------------|----------|------------|
|固定窗|易於實施 |窗口邊界突發 |簡易櫃檯|
|滑動窗|更準確|消耗更多狀態 |每個域的限制 |
|漏桶|輸出相等|有效流量突發時有點僵硬 |暢通交通|
|令牌桶|允許受控爆發|需要同步狀態| ESP/API 節流 |

### 電子郵件系統的建議

- 使用**令牌桶**按提供者和IP池進行限制。
- 使用 **滑動視窗** 依活動/網域統計投訴率、跳出率、開啟率。
- 使用**優先權感知排程器**來防止重要電子郵件被行銷消耗。

---

## 3.多層節流架構

```
Campaign Queue
    │
    ▼
Priority Scheduler
    │
    ├── Check provider quota (SES / SendGrid / Mailgun)
    ├── Check domain quota (gmail.com / yahoo.com / outlook.com)
    ├── Check IP pool quota
    ├── Check campaign quota
    └── Check suppression / reputation guard
    │
    ▼
Dispatch Queue
    │
    ▼
Workers -> ESP
```

###合理的測試順序

1. 檢查抑制清單和退回歷史記錄。
2. 檢查訊息的優先順序。
3. 按提供者檢查配額。
4. 按收件者網域檢查配額。
5. 依照寄件者IP/專用IP池檢查配額。
6. 如果失敗，重新安排而不是放棄。

### 優先策略範例

|優先事項 |使用案例 |服務等級協定 |規則|
|----------|----------|-----|---------|
| 關鍵| OTP，重新設定密碼 | < 30 秒 |總有預留容量 |
|高|訂單確認 | < 2 分鐘 |不受行銷阻礙|
|正常 |產品更新 | < 15 分鐘 |動態配額共享 |
|低|時事通訊、點滴活動|依計畫|惡名前斬斷|

---

## 4. Redis 分散式速率限制器

### Token bucket model

```python
import time
import redis

class RedisTokenBucket:
    def __init__(self, client: redis.Redis, key: str, rate: int, burst: int):
        self.client = client
        self.key = key
        self.rate = rate
        self.burst = burst

    def allow(self, tokens: int = 1) -> 布爾：
        now_ms = int(時間.時間() * 1000)
        腳本=“””
        本機密鑰 = KEYS[1]
        本地 now_ms = tonumber(ARGV[1])
        本地費率 = tonumber(ARGV[2])
        本地突發 = tonumber(ARGV[3])
        本地請求 = tonumber(ARGV[4])

        本地資料 = redis.call('HMGET', key, 'tokens', 'updated_at')
        本地標記 = tonumber(data[1])
        本地 update_at = tonumber(data[2])

        如果 tokens == nil 那麼
          代幣 = 爆發
          更新時間 = now_ms
        結束

        本地已用時間 = math.max(0, now_ms - Updated_at)
        本地補充 = (已用時間 / 1000.0) * 費率
        代幣 = math.min(爆裂, 代幣 + 補充)

        本地允許 = 0
        如果令牌 >= 請求，則
          令牌 = 令牌 - 請求
          允許 = 1
        結束

        redis.call('HMSET', key, 'tokens', tokens, 'updated_at', now_ms)
        redis.call('PEXPIRE', key, 60000)
        允許返回
        ”“”

        結果 = self.client.eval(script, 1, self.key, now_ms, self.rate, self.burst, tokens)
        回傳結果==1
```

### 需要遵循的要點

```文本。文字
費率：提供者：ses
費率：提供者：sendgrid
費率：網域：gmail.com
費率：網域：yahoo.com
速率：ip-池：warm-01
價格：活動：camp_flash_sale_april
```

重要的一點是，限制器必須**在所有工人之間共享**，否則每個工人都會認為自己有配額，系統將立即超出限制。

---

## 5. 基於訊號傳遞能力的自適應節流

發送速度不應該是固定的。它必須對來自現實的訊號做出反應。

### 要監控的訊號

|信號|意義|行動|
|--------|---------|-----------|
|軟彈跳增加| ISP 延遲流量 |發送費率 20-40% 折扣 |
|投訴率上升 |內容/清單品質很差 |強力減持，暫停活動|
|開啟率異常下降 |垃圾郵件投放量增加 |降低速度、更改 IP/域組合 |
|隊列延遲太高 |系統缺少工人/配額 |增加工人或延長預計到達時間 |

### 策略引擎範例

```蟒蛇
defcompute_send_rate(base_rate, 指標):
    比率 = 基本比率

    如果指標.soft_bounce_rate > 0.03：
        率 *= 0.7

    如果metrics.complaint_rate > 0.001：
        比率 *= 0.5

    如果metrics.provider_throttle_rate > 0.05：
        比率 *= 0.8

    如果metrics.ritic_queue_深度 > 1000：
        速率 = 最大（速率，metrics.reserve_for_ritic）

    傳回最大值（整數（速率），10）
```

### 原則

- 行銷流量是首先要犧牲的地方。
- 交易流量應有固定的配額儲備。
- 不要立即將配額減少到 0，除非投訴高峰非常高或 ESP 需要暫停。

---

## 6. IP 預熱和域預熱

一個常見的錯誤是新的域/IP，但在第一天就發送了完整的負載。

### 新專用 IP 的範例預熱路線圖

|日期 |每天最多發送電子郵件 |物件|
|------|--------------------|------------|
| 1 | 5,000 |用戶參與度高|
| 2 | 10,000 |細分市場乾淨，最近活躍 |
| 3 | 20,000 |輕微擴張 |
| 4 | 40,000 |開始混合交通 |
| 5 | 80,000 |跟進投訴/退回郵件 |
| 6 | 160,000 |繼續縮放 |
| 7+ |據信譽|僅在指標良好時才增加 |

### 熱身期間的護欄

- 僅發送給明確選擇加入的收件者。
- 優先考慮具有良好開啟/點擊率的細分。
- 不要重複使用舊的低品質清單。
- 監控 Gmail Postmaster Tools 和 Microsoft SNDS（如果可用）。

---

## 7. 常見故障模式

### 當限制器設計錯誤時

1. **每個工作人員的本地限制器**：即使每個工作人員“正確”，總吞吐量也超過配額。
2. **沒有儲備容量**：OTP 很慢，因為行銷活動正在消耗所有代幣。
3. **根據提供者進行限制，但忘記了網域**：ESP 仍然接收，但 Gmail 開始延遲。
4. **無限重試**：由於重試風暴，油門被放大。

### 清單製作

- 按提供者、網域、IP、活動劃分的配額。
- 為關鍵交通預留空間。
- 有一個手動暫停活動機制。
- 具有基於回饋循環的自適應節流。
- 有一個儀表板顯示目前發送速率和剩餘配額。

---

## 總結

速率限制不僅僅是一個技術問題，而且是交付能力的重要保護層。一個好的系統必須知道如何在允許的情況下快速發送，在訊號不好時減慢速度，並始終優先處理最重要的流量。

**下一篇文章：** 我們將組織批次和工作池來有效地處理數百萬個收件人，而不會耗盡記憶體或堵塞資料庫。
