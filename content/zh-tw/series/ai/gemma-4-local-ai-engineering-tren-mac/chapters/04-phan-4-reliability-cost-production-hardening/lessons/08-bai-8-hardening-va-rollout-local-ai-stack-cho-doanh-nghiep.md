---
id: 01970001-bb08-7008-d008-bb0800001008
title: '課程 8：企業級本地 AI 技術棧的強化與上線'
slug: bai-8-hardening-va-rollout-local-ai-stack-cho-doanh-nghiep
description: >-
  密鑰管理、PII 控制、RBAC、備份策略、
  穩定運作的 Go-Live 檢查清單。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 1
section_title: "第四部分：可靠性、成本與生產環境強化"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 本地 AI 工程實戰 on Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8081" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-8081)"/>
  <g>
    <circle cx="730" cy="55" r="26" fill="#f87171" opacity="0.09"/>
    <circle cx="890" cy="210" r="22" fill="#f87171" opacity="0.07"/>
    <circle cx="1010" cy="120" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1090" cy="275" r="16" fill="#f87171" opacity="0.13"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — L1</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">課程 8：企業級本地 AI 技術棧的</tspan>
      <tspan x="60" dy="42">強化與上線</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Gemma 4 本地 AI 工程實戰 on Mac</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第四部分：可靠性、成本與生產環境強化</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 前言

最後一堂課聚焦於將本地 AI 技術棧提升至企業等級：安全性、資料保護、備份，以及團隊階段性上線。

## 1. 密鑰管理

- 不在程式碼中硬編碼 API 密鑰
- 使用環境變數或專用密鑰管理工具
- 設定密鑰輪換政策
- 稽核存取日誌

## 2. PII 控制

防止機密資料外洩：

- 偵測並遮罩 prompt 中的 PII
- 日誌中不記錄 PII
- 限制聊天記錄的保留期限
- 定期更新 PII 偵測規則

## 3. RBAC（角色型存取控制）

按團隊設定存取控制：

| 角色 | 聊天 | RAG | Eval | 管理 |
|------|------|-----|------|------|
| 開發者 | ✅ | ✅ | ✅ | ❌ |
| PM | ✅ | ✅ | ❌ | ❌ |
| 管理員 | ✅ | ✅ | ✅ | ✅ |

## 4. 備份與災難復原

需保護的三個元件：

- 向量索引
- Prompt 模板與版本
- 設定檔與策略

備份排程：

- 向量索引：每日
- 設定：每次變更時
- 完整快照：每週

## 5. 變更管理

模型或 prompt 的變更流程：

1. 在 staging 環境測試變更
2. 執行 golden set eval
3. 確認品質達到閾值
4. 金絲雀發佈（10% 流量）
5. 全面上線

## 6. Go-Live 檢查清單

- [ ] 所有 SLO 已定義
- [ ] 監控儀表板已上線
- [ ] 備份已驗證
- [ ] RBAC 已設定
- [ ] PII 過濾器已測試
- [ ] 事件回應 runbook 已備妥
- [ ] 團隊培訓已完成
- [ ] 備援模型已設定
- [ ] 文件已更新

## Demo 程式碼

安全設定驗證結果：

![安全檢查](/images/blog/gemma4-series-demo/08-security-check.png)

Go-Live 檢查清單自動驗證：

![Go-Live 檢查](/images/blog/gemma4-series-demo/08-go-live-check.png)

> 原始碼：[07-hardening](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/07-hardening)

## 總結

恭喜！透過本系列，您已學習了使用 Gemma 4 建構本地 AI 技術棧的設計、建構、測試、強化與上線的完整過程。

重要要點：

1. 從一開始就正確設計架構
2. 用 API contract 明確團隊間的邊界
3. 將 prompt 作為程式碼管理並進行測試
4. RAG 管線從資料品質開始
5. 無衡量則無改善 — Eval 與 observability 不可或缺
6. 安全與治理是第一天就該做的事，不是事後補救

下一步，將此技術棧應用於團隊的實際使用案例，並根據回饋持續改善。
