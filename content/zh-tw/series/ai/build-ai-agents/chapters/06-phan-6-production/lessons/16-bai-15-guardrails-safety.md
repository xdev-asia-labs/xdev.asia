---
id: 019c9619-cc15-7015-d015-cc1500000015
title: 第 15 課：護欄與安全 — 保護特工免受“叛亂”
slug: bai-15-guardrails-safety
description: >-
  及時注入防禦、輸出驗證、PII 過濾。 Guardrails 框架：NeMo Guardrails、Guardrails
  AI。人機互動模式。速率限制和成本控制。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 第 6 部分：生產與實際部署
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1233" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1233)"/>

  <!-- Decorations -->
  <g>
    <circle cx="937" cy="241" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="774" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="611" cy="35" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="948" cy="192" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="89" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：護欄與安全 — 保護人員</tspan>
      <tspan x="60" dy="42">來自“叛逆”</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產與實際部署</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

特工有權**採取行動**——這意味著錯誤的特工可能會造成**真正的損害**：刪除文件、發送錯誤的電子郵件、洩露資料。安全並不是可有可無的－它是**強制性要求**。

---

## 1. 威脅

### 1.1 及時注射
使用者故意提供隱藏指令來劫持代理行為。

### 1.2 工具濫用
代理以錯誤的方式呼叫該工具：刪除而不是選擇，將電子郵件傳送給錯誤的人。

### 1.3 資料外洩
代理在回應中意外暴露了敏感資料。

## 2. 防禦層

```python
class GuardedAgent:
    def run(self, user_input):
        # Layer 1: Input validation
        if self.detect_injection(user_input):
            return "Suspicious input detected"
        
        # Layer 2: Tool permission check
        # Only allow approved tools
        
        # Layer 3: Output filtering
        output = self.agent.run(user_input)
        output = self.filter_pii(output)
        
        # Layer 4: Human approval for risky actions
        if self.is_risky_action(output):
            return self.request_human_approval(output)
        
        return output
```

---

## 總結

- 代理安全=輸入驗證+工具權限+輸出過濾+手動批准
- 及時注射是威脅#1
- 未經批准切勿授予代理刪除/更新權限
- 成本控制防止支出失控
- 高風險決策的人機參與

## 練習

1. 實作提示注入偵測器
2. 建立工具的權限系統（唯讀 vs 讀寫）
3. 實施 PII 過濾器（屏蔽電子郵件、電話號碼）
4. 建立人機互動的審批流程

