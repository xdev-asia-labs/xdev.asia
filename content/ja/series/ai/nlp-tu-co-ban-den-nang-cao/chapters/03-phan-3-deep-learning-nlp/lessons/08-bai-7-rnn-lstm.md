---
id: 019d8b30-bb07-7007-c007-ee0700000007
title: 'レッスン 7: RNN と LSTM — 逐次シーケンス処理'
slug: bai-7-rnn-lstm
description: >-
  リカレント ニューラル ネットワーク: アーキテクチャ、時間の経過によるバックプロパゲーション。勾配消失問題。 LSTM: セル状態、ゲート
  (忘れ、入力、出力)。 GRU: 簡略化されたバリアント。双方向 RNN。 PyTorch を使用した実践的なテキスト分類。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 3: NLP のための深層学習 — RNN、LSTM、Transformer へ'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9582" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9582)"/>

  <!-- Decorations -->
  <g>
    <circle cx="672" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="744" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="816" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="888" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="206" x2="1100" y2="286" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="236" x2="1050" y2="306" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.507041555162,85.5 941.507041555162,126.5 906,147 870.492958444838,126.5 870.492958444838,85.50000000000001 906,65" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: RNN と LSTM — 逐次シーケンス処理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: NLP のための深層学習 — RNN、LSTM、Transformer へ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**リカレント ニューラル ネットワーク (RNN)** は、**シーケンシャル** データ (テキスト、時系列、オーディオ) 用に設計された初のニューラル ネットワーク アーキテクチャです。 Transformer は多くの問題で置き換えられてきましたが、RNN/LSTM を理解することは、tention と Transformer が生まれた理由を理解するための基礎となります。

---

## 1. RNN — リカレント ニューラル ネットワーク

### 1.1 アーキテクチャ

```
        x₁          x₂          x₃          x₄
        │           │           │           │
        ▼           ▼           ▼           ▼
    ┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐
h₀──│ RNN   │──▶│ RNN   │──▶│ RNN   │──▶│ RNN   │──▶ h₄
    │ Cell  │   │ Cell  │   │ Cell  │   │ Cell  │
    └───┬───┘   └───┬───┘   └───┬───┘   └───┬───┘
        │           │           │           │
        ▼           ▼           ▼           ▼
        y₁          y₂          y₃          y₄
```

$$h_t = \tanh(W_{hh} \cdot h_{t-1} + W_{xh} \cdot x_t + b)$$

### 1.2 勾配消失問題

チェーンが長い場合、勾配はタイムステップごとに **指数関数的に減少**します。 → RNN はチェーンの先頭の情報を「忘れます」。

```
"The cat, which sat on the mat and watched the birds for hours, was ___"
 ↑                                                                 ↑
 Thông tin cần ở rất xa                                           Cần predict ở đây
 → Gradient ≈ 0 khi backpropagate ngược lại!
```

---

## 2. LSTM — 長期短期記憶

### 2.1 LSTM セルのアーキテクチャ

```
                 Cell State (C)
    ──────────────────────────────────────────
         │              │              │
    ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
    │ Forget  │    │  Input  │    │ Output  │
    │  Gate   │    │  Gate   │    │  Gate   │
    │ σ(Wf)   │    │ σ(Wi)   │    │ σ(Wo)   │
    └─────────┘    └─────────┘    └─────────┘
```

|ゲート |レシピ |機能 |
|-----|----------|----------|
|忘れてください | $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$ |何を忘れましたか？ |
|入力 | $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$ |新着情報？ |
|出力 | $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$ |どのような出力ですか? |

### 2.2 PyTorch を使用した LSTM

```python
import torch
import torch.nn as nn

class TextClassifierLSTM(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(
            embed_dim, hidden_dim,
            num_layers=2,
            bidirectional=True,
            batch_first=True,
            dropout=0.3,
        )
        self.fc = nn.Linear(hidden_dim * 2, num_classes)  # *2 for bidirectional
        self.dropout = nn.Dropout(0.3)

    def forward(self, x):
        # x: (batch_size, seq_len)
        embedded = self.embedding(x)           # (B, L, embed_dim)
        output, (hidden, cell) = self.lstm(embedded)  # output: (B, L, hidden*2)

        # Lấy hidden state cuối cùng từ 2 directions
        hidden = torch.cat((hidden[-2], hidden[-1]), dim=1)  # (B, hidden*2)
        hidden = self.dropout(hidden)
        return self.fc(hidden)  # (B, num_classes)

# Khởi tạo
model = TextClassifierLSTM(
    vocab_size=30000,
    embed_dim=128,
    hidden_dim=256,
    num_classes=3,
)
```

---

## 3. GRU — ゲート付きリカレント ユニット

GRU は LSTM を簡素化します。忘却ゲートと入力ゲートを **更新ゲート** に結合し、個別の状態セルを削除します。

```python
class TextClassifierGRU(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.gru = nn.GRU(
            embed_dim, hidden_dim,
            num_layers=2,
            bidirectional=True,
            batch_first=True,
            dropout=0.3,
        )
        self.fc = nn.Linear(hidden_dim * 2, num_classes)

    def forward(self, x):
        embedded = self.embedding(x)
        output, hidden = self.gru(embedded)  # Không có cell state
        hidden = torch.cat((hidden[-2], hidden[-1]), dim=1)
        return self.fc(hidden)
```

|比較 | LSTM |グル |
|----------|----------|-----|
|パラメータ |詳細 (4 ゲート) |少ない (2 ゲート) |
|トレーニング |遅い |より速く |
|長いシーケンス |より良い |良い |
|品質 |通常は | と同等です。通常は | と同等です。

---

## 4. 双方向 RNN

```
Forward:   h₁ → h₂ → h₃ → h₄
                                  → concat → output
Backward:  h₄ ← h₃ ← h₂ ← h₁
```

**両方向**からテキストを読みます。前後のコンテキストを理解します。

---

## 概要

|建築 |利点 |制限事項 |
|----------|-----------|----------|
|バニラ RNN |シンプル |消えるグラデーション、すぐに忘れられる |
| LSTM |長期的な依存関係 |低速、順次 (並列ではない) |
|グル | LSTMより軽量で効果的 | LSTM |に似ている
|双方向 |双方向のコンテキストを理解する | 2倍の計算 |

> 📌 **なぜTransformerが必要なのでしょうか?** RNN/LSTMは各トークンを順番に処理します → **並列できない** → 長いチェーンでは遅いです。トランスはこの問題を解決します。

---

## 次の記事

**レッスン 8: 注意のメカニズム** — NLP の最大の転換点: モデルが最も重要な部分に「集中」できるようにします。
