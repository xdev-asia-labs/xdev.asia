---
id: 019c9619-cc15-7015-d015-cc1500000015
title: 'レッスン 15: ガードレールと安全 — エージェントを「反乱」から守る'
slug: bai-15-guardrails-safety
description: >-
  プロンプトインジェクション防御、出力検証、PII フィルタリング。ガードレール フレームワーク: NeMo ガードレール、ガードレール
  AI。人間参加型パターン。レート制限とコスト制御。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 6: 本番環境と実際のデプロイメント'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: ガードレールと安全 — 保護剤</tspan>
      <tspan x="60" dy="42">「反乱」より</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 本番環境と実際のデプロイメント</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

エージェントには**行動**する権利があります。つまり、間違ったエージェントはファイルの削除、間違ったメールの送信、データの漏洩など**実際の損害**を引き起こす可能性があります。安全性はあればよいものではなく、**必須要件**です。

---

## 1. 脅威

### 1.1 即時注入
ユーザーは、エージェントの動作を乗っ取るための隠された指示を意図的に提供します。

### 1.2 ツールの誤用
エージェントが間違った方法でツールを呼び出し、SELECT ではなく DELETE を実行し、間違った人に電子メールを送信しました。

### 1.3 データ漏洩
エージェントはこれに応じて機密データを誤って公開してしまいました。

## 2. 防御層

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

## 概要

- エージェントの安全性 = 入力検証 + ツール権限 + 出力フィルタリング + 人間の承認
- 迅速な注射が脅威 #1
- 承認なしにエージェントに DELETE/UPDATE 権限を与えないでください
- コスト管理により無駄な支出を防止
- 一か八かの意思決定のための人間参加型

## 演習

1. 即時噴射検出器の実装
2. ツールの権限システムを構築する (読み取り専用と読み取り/書き込み)
3. PII フィルターの実装 (メール、電話番号のマスク)
4. 人間参加型の承認フローを構築する

