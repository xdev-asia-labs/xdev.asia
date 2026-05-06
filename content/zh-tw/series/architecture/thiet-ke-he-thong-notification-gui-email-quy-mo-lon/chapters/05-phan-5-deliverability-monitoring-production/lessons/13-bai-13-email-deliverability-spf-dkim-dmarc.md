---
id: 019e7a10-a113-7001-d001-f1e2d3c4b513
title: 第 13 課：電子郵件送達率 — SPF、DKIM、DMARC
slug: bai-13-email-deliverability-spf-dkim-dmarc
description: 使用 SPF、DKIM、DMARC 進行電子郵件驗證。 IP 聲譽、網域預熱、垃圾郵件分數優化、清單衛生、投訴處理、黑名單監控和 BIMI。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 5 部分：交付能力、監控與生產
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: 設計一個通知系統來發送數百萬封電子郵件
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8533" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8533)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="224" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="180" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="158" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.7749907475932,204.5 1057.7749907475932,243.5 1024,263 990.2250092524068,243.5 990.2250092524068,204.5 1024,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ 建築 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：電子郵件送達率 — SPF、DKIM、</tspan>
      <tspan x="60" dy="42">DMARC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">設計一個通知系統來發送數百萬封電子郵件</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：交付能力、監控與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

成功發送給提供者並不意味著電子郵件已進入收件匣。送達率是電子郵件身分驗證基礎設施、收件者清單品質、電子郵件內容和隨著時間的推移累積的聲譽之間的協調問題。

本文重點介紹大型發送系統維持穩定收件匣放置的最重要部分。

---

## 1. 送達能力其實是由什麼決定的？

### 四大支柱

|支柱|需要回答的問題 |
|--------|---------------------|
|認證|這封電子郵件真的被授權由有效域發送嗎？ |
|信譽|該網域/IP 的歷史記錄是好是壞？ |
|列出品質 |接收者是否存在、互動並選擇加入？ |
|內容品質 |內容是否有垃圾郵件、誤導性或違反政策的跡象？ |

### 常見誤解

- 正確的 DKIM 並不能自動保證對收件匣的存取。
- 購買專用 IP 並不能修復髒清單。
- 添加過多的追蹤像素可能會適得其反。
- 新網域但從第一天開始發送舊量幾乎肯定會受到限制。

---

## 2. SPF：誰可以代替發送您的網域名稱？

SPF 是一筆 DNS 記錄，用於聲明允許哪些郵件伺服器或提供者向網域發送郵件。

### SPF 記錄範例

```dns
example.com. IN TXT "v=spf1 include:amazonses.com include:sendgrid.net -all"
```

### 意義

- `v=spf1`：SPF 版本。
- `include:amazonses.com`：允許SES。
- `include:sendgrid.net`：啟用 SendGrid。
- `-all`：所有其他來源都很難失敗。

### 實用說明

- 不應該太多 `include` 因為 SPF 查找是有限的。
- SPF 檢查信封寄件人，但並非總是如此 `From:` 用戶看到。
- 如果使用多個 ESP，請仔細控制與 DMARC 的對齊。

---

## 3. DKIM：簽署內容證明完整性

DKIM 將數位簽章新增至電子郵件標頭。郵件接收者使用 DNS 中的公鑰來驗證電子郵件內容在過程中沒有被修改。

### DKIM 記錄範例

```dns
ses2026._domainkey.example.com. IN TXT (
  "v=DKIM1; k=rsa; "
  "p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw..."
)
```

### 最佳實踐

- 按提供者或按年/季度使用明確選擇器來輪換密鑰。
- 金鑰長度必須至少為 1024 位，如果提供者支持，最好為 2048 位。
- 定期輪調 DKIM 金鑰，但不中斷舊電子郵件驗證。

---

## 4. DMARC：政策與調整

DMARC 允許網域擁有者聲明如何處理 SPF/DKIM 失敗的電子郵件，並接收總計報告。

### DMARC 記錄範例

```dns
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-agg@example.com; ruf=mailto:dmarc-forensic@example.com; adkim=s; aspf=s"
```

### 常用模式

|政策 |意義|當使用 |
|--------|---------|----------|
| `p=none` |僅監控 |實施的初始階段 |
| `p=quarantine` |將失敗的郵件推送至垃圾郵件/隔離區 |對準穩定後|
| `p=reject` |絕對拒絕|當域名得到很好的控制時|

### 安全實施路線圖

1. 開始於 `p=none`。
2. 收集 DMARC 報告至少幾週。
3. 處理所有未對齊的有效電子郵件來源。
4. 增加 `quarantine` 然後 `reject`。

---

## 5. 網域/IP 預熱和聲譽管理

### 為什麼聲譽很重要？

Gmail、Outlook、Yahoo 等郵箱提供者會評估一段時間內的郵件發送行為。他們關心：

- 硬跳出率。
- 投訴率。
- 參與的開啟/點擊率。
- 發送頻率是否自然增加？
- 發送到長時間不活動地址的速率。

### 新網域預熱計劃

|週 |細分 |卷 |
|--------|--------|--------|
| 1 |用戶在過去 7 天內打開了郵件 |低|
| 2 |用戶參與 30 天 |略有增加|
| 3 |延長至 60-90 天 |控製成長|
| 4+ |整個清單都是乾淨的 |根據實際指標|

### 不應該這樣做

- 從同一個新網域/IP 同時發送交易和行銷訊息。
- 在未經明確同意的情況下使用共享清單。
- 僅僅因為系統容量過剩而將體積擴展10倍。

---

## 6. 列出衛生與抱怨處理

無論基礎設施有多好，它都無法保存髒的收件者清單。

### 應刪除的位址類型

|類型 |行動|
|-----|------------|
|硬彈跳|現在壓制|
|投訴用戶|永久壓製或根據政策|
|高風險角色帳號|考慮刪除 |
|常年不活躍 |投入重新參與之前|
|一次性電子郵件|從頭開始阻止 |

### 內部抑制列表

```sql
CREATE TABLE suppression_list (
  email TEXT PRIMARY KEY,
  reason TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ
);
```

### 投訴處理流程

1. 收到提供者的 webhook 投訴。
2. 映射回 `recipient` 和 `message_id` 內部的。
3. 將收件人加入黑名單。
4. 如果網域/活動的投訴率增加，則降低發送率。
5. 如果活動內容品質較差，則警告行銷團隊。

---

## 7. 電子郵件內容和垃圾郵件訊號

### 常見的不良訊號

- 對象太興奮了，例如“免費！！！限時優惠！！！”。
- 大量 HTML，圖像很多，但文字很少。
- 奇怪的域名跟踪鏈接，品牌不一致。
- 缺少取消訂閱連結。
- 名稱/網域名稱與品牌不一致。

### 健康內容清單

- 主題清晰，沒有過多的點擊誘餌。
- 有純文字後備。
- 有適當的地址和聯絡資訊。
- 有一個明顯可見的取消訂閱連結。
- 如果可能，請使用品牌子網域追蹤網域。

---

## 8. 監控交付能力

### 要追蹤的指標

|指標|參考警告等級|
|--------|------------------------|
|硬跳出率| > 2% |
|投訴率| > 0.1% |
|交貨率|與基線相比大幅下降|
|開啟率|網域異常下降 |
|垃圾郵件放置 |持續增加多項活動|

### 有用的工具

- Gmail 郵局管理員工具
- 微軟SNDS
- DMARC 聚合報告分析器
- SES/SendGrid/Mailgun 提供者儀表板

### 什麼是 BIMI？

BIMI 允許在某些郵箱提供者的收件匣中顯示品牌徽標，但通常需要良好的 DMARC 執行，有時還需要品牌認證證書。它不會取代 SPF/DKIM/DMARC，而是在其基礎上建置。

---

## 總結

可交付性是一場長期遊戲。您無法使用腳本或單一 DNS 記錄來修復它。您需要同時進行適當的身份驗證、仔細預熱、保持清單清潔並每天監控聲譽訊號。

**下一篇文章：** 我們將建立監控、指標和警報，以像真實的生產系統一樣查看通知系統。
