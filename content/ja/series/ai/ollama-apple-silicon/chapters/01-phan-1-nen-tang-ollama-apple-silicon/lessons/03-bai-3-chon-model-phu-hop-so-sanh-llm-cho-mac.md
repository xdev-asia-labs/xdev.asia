---
id: 019c9619-bb03-7003-d003-bb0300000003
title: 'レッスン 3: 適切なモデルを選択する - Mac 用 LLM を比較する'
slug: bai-3-chon-model-phu-hop-so-sanh-llm-cho-mac
description: >-
  包括的な比較表: Llama 3.2 vs Gemma 3 vs Qwen 2.5 vs Mistral vs Phi-4。各モデル サイズの RAM
  要件。量子化 (Q4、Q5、Q8) は速度と品質に影響します。ユースケースに応じてモデルを選択してください。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: プラットフォーム - Ollama と Apple Silicon'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4148" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4148)"/>

  <!-- Decorations -->
  <g>
    <circle cx="812" cy="146" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1024" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="736" cy="50" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="948" cy="262" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="214" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 適切なモデルを選択する - LLM を比較する</tspan>
      <tspan x="60" dy="42">Mac用</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: プラットフォーム - Ollama と Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Ollama レジストリには数百のモデルがあります。では、どのモデルを選ぶべきでしょうか?この記事は実際の**チートシート**です。最も人気のあるモデルを比較し、各タスクと Mac 構成に適したモデルを選択するのに役立ちます。

---

## 1. モデルの命名規則を理解する

見ると `qwen2.5:14b-instruct-q4_K_M`、読み方は次のとおりです。

```
qwen2.5    :  14b    -  instruct   -  q4_K_M
└── Family    └── Size   └── Variant    └── Quantization
```

- **ファミリー**: 元のモデル名 (ラマ、ジェマ、クウェン、ミストラル...)
- **サイズ**: パラメータの数 (1B、3B、7B、8B、14B、32B、70B...)
- **バリアント**: `instruct` (チャット)、 `base` (生)、 `code` (コーディング)
- **量子化**: モデル圧縮レベル (Q4、Q5、Q8、F16)

---

## 2. 量子化 — どの Q を選択するか?

量子化は、重みの精度を下げることによってモデルのサイズを縮小する手法です。

|量子化 |ビット/重量 |サイズ比 |品質 |スピード |
|---------------|---------------|---------------|----------|----------|
| F16 | 16ビット | 100% (ベースライン) |ベスト |最も遅い |
| Q8_0 | 8ビット | ~50% | F16とほぼ同等 |より速く |
| Q6_K | 6ビット | ~37% |とても良い |速い |
| Q5_K_M | 5ビット | ~31% |良い |速い |
| Q4_K_M | 4ビット | ~25% |かなり良い |最速 |
| Q3_K_M | 3ビット | ~19% |大幅な削減 |非常に速い |
| Q2_K | 2ビット | ~12% |悪い |非常に速い |

> 💡 **推奨**: **Q4_K_M** は、ほとんどの場合のスイート スポットです。サイズは約 75% 縮小されましたが、依然として高品質です。もう少し高画質を求めるならQ5_K_M。

### 実際の例: Llama 3.2 8B

|量子化 |ディスク上のサイズ |必要なRAM |トークン/秒 (M3 Pro) |
|-----------|------|-----------|------|
| F16 | 16GB | ～18 GB | ~12 トーク/秒 |
| Q8_0 | 8.5GB | ～10 GB | ~24 トーク/秒 |
| Q4_K_M | 4.9GB | ～6.5GB | ~32 トーク/秒 |

---

## 3. 総合モデル比較表

### 小規模モデル グループ (1B-4B) — MacBook Air 8GB

|モデル |サイズ (Q4) | RAM 最小値 |コード |ベトナム語 |概要 |
|----------|---------------|----------|-----|-------------|----------|
|ラマ 3.2 3B | 2.0GB | 4GB | ★★★☆ | ★★☆☆ |何でも屋 |
|ジェマ3 4B | 3.3GB | 5GB | ★★★☆ | ★★★☆ |優れた多言語 |
|ファイ-4 ミニ 3.8B | 2.5GB | 4.5GB | ★★★★ | ★★☆☆ |コード/数学は非常に強力です |
|クウェン 2.5 3B | 1.9GB | 4GB | ★★★☆ | ★★★☆ |バランスが良い |

### 中型モデル グループ (7B-14B) — MacBook 16-24GB

|モデル |サイズ (Q4) | RAM 最小値 |コード |ベトナム語 |概要 |
|----------|---------------|----------|-----|-------------|----------|
|ラマ 3.2 8B | 4.9GB | 7GB | ★★★★ | ★★★☆ |オールラウンドに最適 |
|ジェマ3 12B | 8.1GB | 10GB | ★★★★ | ★★★★ |多言語チャンピオン |
|クウェン 2.5 14B | 9.0GB | 11GB | ★★★★ | ★★★★★ |最高のベトナム料理 |
|ミストラル 7B | 4.1GB | 6GB | ★★★★ | ★★★☆ |コード/推論がしっかりしている |
| DeepSeek コーダー V2 16B | 10.2GB | 13GB | ★★★★★ | ★★☆☆ |コーディングビースト |

### 大規模モデル グループ (30B+) — MacBook 32GB+

|モデル |サイズ (Q4) | RAM 最小値 |コード |ベトナム語 |概要 |
|----------|---------------|----------|-----|-------------|----------|
|クウェン 2.5 32B | 18GB | 22GB | ★★★★★ | ★★★★★ |最高のローカルモデル |
|ラマ 3.3 70B | 40GB | 48GB | ★★★★★ | ★★★★ | 64GB以上のRAMが必要 |
| DeepSeek V3 (蒸留 32B) | 19GB | 23GB | ★★★★★ | ★★★☆ |推理王 |

---

## 4. ユースケースに応じたモデルの選択

### スマートチャットボット / Q&A

```bash
# Tiếng Việt tốt nhất
ollama run qwen2.5:14b

# Cân bằng nhất
ollama run llama3.2

# RAM ít (8GB)
ollama run gemma3:4b
```

### コード作成 / コードレビュー

```bash
# Coding chuyên sâu
ollama run deepseek-coder-v2:16b

# Cân bằng code + chat
ollama run qwen2.5-coder:14b

# RAM ít
ollama run phi4-mini
```

### 要約/執筆

```bash
# Tiếng Việt
ollama run qwen2.5:14b

# Tiếng Anh
ollama run llama3.2
```

### 画像解析（ビジョン）

```bash
# Vision tốt nhất
ollama run gemma3:12b   # Có vision built-in

# Nhẹ hơn
ollama run llava:7b
```

---

## 5. Mac RAMに応じてモデルを選択します

### 8 GB RAM (MacBook Air M1/M2 ベース)

```bash
# Chỉ nên dùng model 3-4B
ollama run llama3.2:3b     # 2.0 GB, chạy tốt
ollama run phi4-mini       # 2.5 GB, code tốt
ollama run gemma3:1b       # 1.0 GB, cực nhẹ
```

> ⚠️ 8GB の場合は、モデル 3B を実行する前に Safari を閉じてください。 macOS のシステムには最大 4GB が必要です。

### 16 GB RAM

```bash
# Sweet spot
ollama run llama3.2        # 8B, 4.9 GB
ollama run qwen2.5:7b      # 7B, 4.7 GB
ollama run mistral          # 7B, 4.1 GB
```

### 24 ～ 36 GB RAM

```bash
# Mở rộng lên 12-14B
ollama run gemma3:12b      # 8.1 GB
ollama run qwen2.5:14b     # 9.0 GB, khuyến nghị
ollama run deepseek-coder-v2:16b  # 10.2 GB
```

### 48～64 GB+ RAM

```bash
# Model lớn, chất lượng gần cloud
ollama run qwen2.5:32b     # 18 GB
ollama run llama3.3:70b    # 40 GB, cần 48GB+ RAM
```

---

## 6. 現実的なベンチマーク

簡単なベンチマークを実行します。

```bash
# Đo thời gian generate
time ollama run llama3.2 "Viết function fibonacci bằng Python" --nowordwrap
```

または、Ollama API を使用して正確なメトリクスを取得します。

```bash
curl -s http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Explain Docker in 3 sentences",
  "stream": false
}' | python3 -c "
import sys, json
d = json.load(sys.stdin)
prompt_tokens = d['prompt_eval_count']
gen_tokens = d['eval_count']
prompt_time = d['prompt_eval_duration'] / 1e9
gen_time = d['eval_duration'] / 1e9
print(f'Prompt: {prompt_tokens} tokens in {prompt_time:.2f}s ({prompt_tokens/prompt_time:.1f} tok/s)')
print(f'Generate: {gen_tokens} tokens in {gen_time:.2f}s ({gen_tokens/gen_time:.1f} tok/s)')
"
```

---

## 7. 知っておくべきモデルタグ

モデルをプルするときのデフォルトのタグは次のとおりです。 `latest` (通常は + Q4_K_M を指示します)。ただし、次のように指定できます。

```bash
# Chất lượng cao hơn (tốn RAM hơn)
ollama pull llama3.2:8b-instruct-q8_0

# Nhẹ nhất có thể
ollama pull llama3.2:3b-instruct-q4_0

# Model vision
ollama pull gemma3:12b    # Tự động có vision

# Chỉ lấy text model
ollama pull gemma3:4b-it-q4_K_M
```

利用可能なすべてのタグを表示します。

```bash
# Truy cập: https://ollama.com/library/llama3.2/tags
# Hoặc: https://ollama.com/library/qwen2.5/tags
```

---

## 概要

| MacのRAM |おすすめモデル｜サイズ |
|----------|--------|---------------|
| 8GB | `llama3.2:3b`、 `phi4-mini` | 2～3GB |
| 16GB | `llama3.2`、 `qwen2.5:7b` | 4～5GB |
| 24-36 GB | `qwen2.5:14b`、 `gemma3:12b` | 8～10GB |
| 48GB以上 | `qwen2.5:32b` | 18GB |

**量子化**: 常に **Q4_K_M** から開始します (デフォルト)。より良い品質が必要で、追加の RAM がある場合にのみ、Q5/Q8 にアップグレードしてください。

---

## 演習

1. Mac の RAM に基づいて、適切なモデルを 2 ～ 3 つ選択し、ダウンロードします。
2. 各モデルについてベトナム語について同じ質問をし、どのモデルが最もよく答えるかを記録します。
3. 上記のベンチマーク スクリプトを使用して、各モデルのトークン/秒を測定します。
4. 同じモデルの Q4 と Q8 を比較します。品質に明らかな違いはありますか?どれくらい速度が違うの？

**次の記事**: MLX フレームワーク — 3x 推論の高速化 →
