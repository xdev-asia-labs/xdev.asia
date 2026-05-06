---
id: 019d5b01-bb21-7021-c021-bb2100000021
title: 'レッスン 21: Apple Silicon 上で Ollama を使用して AI をローカルで実行する — ディープダイブ'
slug: bai-21-ollama-apple-silicon
description: >-
  Apple Silicon 上でローカルで LLM を実行する詳細な説明: ユニファイド メモリおよびメタル GPU アーキテクチャの理解、Ollama
  の詳細なインストールと構成、モデルファイルのチューニング、GGUF 量子化、M1/M2/M3/M4 上の実際のトークンのベンチマーク測定、MLX
  フレームワークとの比較、マルチモデル サービング、完全なローカル AI 開発スタックの構築。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 6: 生産と強化'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1056" cy="38" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1012" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="968" cy="130" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="924" cy="46" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="880" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="138" x2="1100" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="168" x2="1050" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1016.5788383248864,171.5 1016.5788383248864,204.5 988,221 959.4211616751136,204.5 959.4211616751135,171.5 988,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: 上記の Ollama を使用して AI Local を実行する</tspan>
      <tspan x="60" dy="42">Appleシリコン — 詳細</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 生産と強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 概要

レッスン 20 では、Ollama、vLLM、TGI を使用して LLM を導入する方法を概要レベルで紹介しました。この記事では、Apple Silicon について**完全に掘り下げ**、Apple Silicon が通常のラップトップよりも LLM を実行する**理由**、ハードウェアを最大限に活用する方法、Mac 上で実稼働グレードのローカル AI スタックを構築する方法を理解します。

**次のことを学びます:**

1. Apple シリコン アーキテクチャ — ユニファイド メモリ、メタル GPU、ニューラル エンジン
2. Ollama が推論にメタル パフォーマンス シェーダーをどのように利用するか
3. 量子化 GGUF — 各チップに適切なフォーマットを選択します
4. Modelfile — チューニングパラメータ、システムプロンプト、テンプレート
5. M1 → M4 の詳細なトークンのベンチマーク
6. Apple MLX フレームワーク — Ollama との比較
7. マルチモデルの提供と同時推論
8. 完全なローカル AI 開発スタックを構築する (RAG + コード アシスタント + 埋め込み)

---

## 1. なぜ Apple Silicon は LLM をうまく実行できるのでしょうか?

### 1.1 ユニファイド メモリ アーキテクチャ (UMA)

通常の PC/ラップトップでは、CPU と GPU には別々の RAM があります。 GPU で LLM を実行する場合、モデルの重みを **システム RAM から VRAM にコピー**する必要があります。このプロセスは遅く、PCIe 帯域幅 (~32 GB/秒 PCIe 4.0 x16) によって制限されます。

Apple Silicon は **統合メモリ** で完全に変わります:

```
╔══════════════════════════════════════════════════════════╗
║              Kiến trúc truyền thống (x86)               ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌─────────┐    PCIe 4.0     ┌──────────┐               ║
║  │   CPU   │◄──────────────►│   GPU    │               ║
║  │         │   ~32 GB/s      │          │               ║
║  └────┬────┘                 └────┬─────┘               ║
║       │                           │                      ║
║  ┌────▼────┐                 ┌────▼─────┐               ║
║  │ System  │                 │   VRAM   │               ║
║  │  RAM    │   ← COPY →     │ (riêng)  │               ║
║  │ 32-64GB │                 │ 8-24GB   │               ║
║  └─────────┘                 └──────────┘               ║
║                                                          ║
║  Bottleneck: PCIe bandwidth + VRAM giới hạn             ║
╚══════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════╗
║              Apple Silicon (UMA)                         ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌─────────┐  ┌─────────┐  ┌──────────────┐            ║
║  │   CPU   │  │   GPU   │  │ Neural Engine│            ║
║  │ (P+E)   │  │ (Metal) │  │   (ANE)      │            ║
║  └────┬────┘  └────┬────┘  └──────┬───────┘            ║
║       │             │              │                     ║
║       └─────────────┼──────────────┘                     ║
║                     │                                    ║
║              ┌──────▼──────┐                             ║
║              │  Unified    │                             ║
║              │  Memory     │                             ║
║              │  8-192 GB   │                             ║
║              │             │                             ║
║              │ ~200-800    │                             ║
║              │  GB/s       │                             ║
║              └─────────────┘                             ║
║                                                          ║
║  Không cần copy! CPU/GPU/ANE truy cập cùng memory pool  ║
╚══════════════════════════════════════════════════════════╝
```

**実際の意味:**

- Mac 16GB RAM = モデルの 16GB (個別の CPU/GPU 分割なし)
- PCIe経由でデータをコピーするオーバーヘッドなし
- 非常に高いメモリ帯域幅 - 推論速度の決定要因

### 1.2 メモリ帯域幅 — 速度を決定する要素

LLM 推論 (特に自己回帰デコード) は、計算ではなく **メモリ帯域幅** によって制限されます。理由: 生成された各トークンは、モデルの重み全体を 1 回読み取る必要があります。

```
Công thức ước tính tokens/s:

  tokens/s ≈ Memory_Bandwidth(GB/s) / Model_Size(GB)

Ví dụ: M2 Pro (200 GB/s) chạy Llama 3.2 3B (Q4_K_M ≈ 2.0 GB):
  → 200 / 2.0 ≈ 100 tokens/s (lý thuyết)
  → Thực tế: ~70-80 tokens/s (overhead KV cache, OS, ...)
```

**Apple Silicon メモリ帯域幅ボード:**

|チップス |メモリ帯域幅 | RTX 4090 (1008 GB/秒) との比較 |
|---|---|---|
| **M1** | 68.25 GB/秒 | 6.8% |
| **M1 プロ** | 200 GB/秒 | 19.8% |
| **M1 マックス** | 400 GB/秒 | 39.7% |
| **M1 ウルトラ** | 800 GB/秒 | 79.4% |
| **M2** | 100 GB/秒 | 9.9% |
| **M2 プロ** | 200 GB/秒 | 19.8% |
| **M2 マックス** | 400 GB/秒 | 39.7% |
| **M2 ウルトラ** | 800 GB/秒 | 79.4% |
| **M3** | 100 GB/秒 | 9.9% |
| **M3 プロ** | 150 GB/秒 | 14.9% |
| **M3 マックス** | 400 GB/秒 | 39.7% |
| **M4** | 120 GB/秒 | 11.9% |
| **M4 プロ** | 273 GB/秒 | 27.1% |
| **M4 最大** | 546 GB/秒 | 54.2% |

> RTX 4090 は帯域幅がはるかに高いですが、VRAM は 24GB のみです。 Mac M4 Max は最大 128GB のユニファイド メモリを搭載できます。これは、デスクトップ GPU では実行できない 70B モデルを実行するのに十分です。

### 1.3 メタル GPU とコンピューティング パイプライン

Ollama は以下の **llama.cpp** を使用しており、llama.cpp は Apple **Metal** (Apple の GPU コンピューティング フレームワーク) をサポートしています。 Apple Silicon 上で実行する場合:

```
Request → Ollama Server → llama.cpp → Metal Backend
                                          │
                                    ┌─────▼─────┐
                                    │ Metal      │
                                    │ Performance│
                                    │ Shaders    │
                                    │            │
                                    │ • MatMul   │
                                    │ • Softmax  │
                                    │ • RoPE     │
                                    │ • RMS Norm │
                                    │ • GELU     │
                                    └────────────┘
                                          │
                                    ┌─────▼─────┐
                                    │ Apple GPU  │
                                    │ Cores      │
                                    │ (10-40)    │
                                    └────────────┘
```

すべてのテンソル演算 (行列乗算、注意、正規化) は、CPU ではなく **Metal 経由** GPU コアで実行されます。これが、Mac が純粋な x86 CPU ラップトップよりもはるかに高速に LLM を実行する理由です。

Ollama が Metal を使用しているかどうかを確認します。

```bash
# Xem log khi load model
OLLAMA_DEBUG=1 ollama run llama3.2:3b

# Tìm dòng này trong log:
# ggml_metal_init: allocating
# ggml_metal_init: found device: Apple M2 Pro
# ggml_metal_init: recommendedMaxWorkingSetSize = 22906.50 MB
```

### 1.4 ニューラル エンジン (ANE) — 未開発

Apple Silicon には、ML 推論用に設計された **Neural Engine** (ANE) — 16-38 TOPS が搭載されています。ただし、現在、ほとんどの LLM フレームワーク (Ollama、llama.cpp、MLX) は、**テキスト生成に ANE を使用しません**。理由は次のとおりです。

- バッチ処理 (画像分類、ビジョン) に最適化された ANE
- LLM 自己回帰デコードは 1 トークン/ステップを生成します - ANE には適していません
- 新しい Transformer アーキテクチャに対するオペレーターのサポートの欠如

> これが、Ollama の実行時に GPU 使用率が高くなるのに、ANE はほぼアイドル状態になる理由です。

---

## 2. macOS に Ollama をインストールする — 詳細な構成

### 2.1 インストール

```bash
# Cách 1: Homebrew
brew install ollama

# Cách 2: Download app từ ollama.com (có GUI status icon)
# → khuyên dùng cho người mới

# Kiểm tra
ollama --version
# ollama version is 0.6.x
```

### 2.2 環境変数による設定

Ollama には調整すべき環境変数が多数ありますが、ほとんどのユーザーは以下を無視します。

```bash
# Tạo file cấu hình cho launchd (persistent sau reboot)
cat > ~/Library/LaunchAgents/com.ollama.env.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.ollama.env</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/true</string>
  </array>
  <key>EnvironmentVariables</key>
  <dict>
    <key>OLLAMA_HOST</key>
    <string>127.0.0.1:11434</string>
    <key>OLLAMA_NUM_PARALLEL</key>
    <string>2</string>
    <key>OLLAMA_MAX_LOADED_MODELS</key>
    <string>2</string>
    <key>OLLAMA_KEEP_ALIVE</key>
    <string>30m</string>
    <key>OLLAMA_FLASH_ATTENTION</key>
    <string>1</string>
  </dict>
</dict>
</plist>
EOF
```

またはもっと簡単に、シェルで設定します。

```bash
# Thêm vào ~/.zshrc
export OLLAMA_HOST="127.0.0.1:11434"   # Bind address (default: 127.0.0.1)
export OLLAMA_NUM_PARALLEL=2            # Concurrent requests per model
export OLLAMA_MAX_LOADED_MODELS=2       # Số model giữ trong memory cùng lúc
export OLLAMA_KEEP_ALIVE="30m"          # Giữ model trong RAM bao lâu sau request cuối
export OLLAMA_FLASH_ATTENTION=1         # Bật Flash Attention (tiết kiệm memory)
export OLLAMA_MODELS="$HOME/.ollama/models"  # Thư mục lưu models
```

**詳しい説明:**

|変数 |デフォルト |意味 |
|---|---|---|
| `OLLAMA_NUM_PARALLEL` | 1 | 1 つのモデルで並列処理されるリクエストの数。増やす = KV キャッシュに使用する RAM を増やす |
| `OLLAMA_MAX_LOADED_MODELS` | 1 |同時に読み込まれる型番。 M1 8GB は 1 に設定する必要があり、M4 Max 64GB は 3 ～ 4 に設定できます。
| `OLLAMA_KEEP_ALIVE` | 5m |一定期間使用しなかった場合は、モデルをアンロードします。 「0」を設定するとすぐにアンロードされ、「-1」は永久に保持されます。
| `OLLAMA_FLASH_ATTENTION` | 0 | Flash アテンションにより、KV キャッシュのメモリ使用量が最大 50% 削減されます。 **Apple Silicon で有効にする必要があります** |

### 2.3 Metal GPU が動作していることを確認する

```bash
# Chạy model với debug log
OLLAMA_DEBUG=1 ollama run llama3.2:3b 2>&1 | head -30

# Kết quả mong đợi:
# ggml_metal_init: allocating
# ggml_metal_init: found device: Apple M2 Pro
# ggml_metal_init: recommendedMaxWorkingSetSize = 22906.50 MB
# ggml_metal_init: hasUnifiedMemory = true
# ...
# llm_load_tensors: offloading 32 repeating layers to GPU
# llm_load_tensors: offloaded 32/33 layers to GPU
```

見たら `offloaded X/Y layers to GPU` X = Y または Y に近い場合 → モデルは完全に Metal GPU で実行されます。

---

## 3. 量子化 GGUF — Apple Silicon に適した形式を選択する

### 3.1 GGUF とは何ですか?

GGUF (GPT-Generated Unified Format) は、Ollama がその下で使用するランタイムである llama.cpp のモデル形式です。あなたが `ollama pull llama3.2:3b`, Ollama は量子化済みの GGUF ファイルをダウンロードします。

### 3.2 量子化レベル

```
┌─────────────────────────────────────────────────────────────────┐
│              Quantization Levels — Chất lượng vs Kích thước     │
├──────────┬──────────┬────────────┬──────────────────────────────┤
│ Format   │ Bits/w   │ Size (7B)  │ Ghi chú                      │
├──────────┼──────────┼────────────┼──────────────────────────────┤
│ F16      │ 16       │ ~14 GB     │ Full precision, chậm         │
│ Q8_0     │ 8        │ ~7.5 GB    │ Gần như không mất chất lượng │
│ Q6_K     │ 6        │ ~5.5 GB    │ Rất tốt, khó phân biệt F16  │
│ Q5_K_M   │ 5        │ ~4.8 GB    │ Sweet spot cho 16GB RAM      │
│ Q4_K_M   │ 4        │ ~4.1 GB    │ ★ Khuyên dùng — cân bằng    │
│ Q4_K_S   │ 4        │ ~3.9 GB    │ Nhỏ hơn Q4_K_M một chút     │
│ Q3_K_M   │ 3        │ ~3.3 GB    │ Bắt đầu giảm chất lượng     │
│ Q2_K     │ 2        │ ~2.7 GB    │ Chất lượng kém, chỉ để test  │
│ IQ4_XS   │ ~4       │ ~3.8 GB    │ i-quant, tốt hơn Q4 cùng    │
│          │          │            │ kích thước                    │
│ IQ3_XXS  │ ~3       │ ~2.9 GB    │ i-quant, tốt hơn Q3 cùng    │
│          │          │            │ kích thước                    │
└──────────┴──────────┴────────────┴──────────────────────────────┘

★ Khuyên dùng trên Apple Silicon:
  - 8GB RAM  → Q4_K_M (model 3B-7B)
  - 16GB RAM → Q4_K_M hoặc Q5_K_M (model 7B-14B)
  - 32GB RAM → Q5_K_M hoặc Q6_K (model 14B-32B)
  - 64GB+    → Q6_K hoặc Q8_0 (model 32B-70B)
```

### 3.3 Apple Silicon での K-クオンツと I-クオンツ

**K-quants** (Q4_K_M、Q5_K_M、...): K-means クラスタリング手法を使用します。 Metal GPU では高速です。

**I-quants** (IQ4_XS、IQ3_XXS、...): 重要度に重み付けされた量子化。同じサイズでは品質が向上しますが、**Metal では複雑なルックアップ テーブルが必要になるため速度が低下します**。

```
Benchmark: Llama 3.1 8B trên M3 Pro 18GB

Format      Size    tokens/s    Perplexity (thấp = tốt)
Q8_0        8.5 GB  28 t/s      5.82
Q6_K        6.6 GB  34 t/s      5.84
Q5_K_M      5.7 GB  38 t/s      5.89
Q4_K_M      4.9 GB  42 t/s      5.98     ← sweet spot
IQ4_XS      4.5 GB  36 t/s      5.95     ← tốt hơn Q4 nhưng chậm hơn trên Metal
Q3_K_M      3.9 GB  45 t/s      6.18     ← bắt đầu thấy chất lượng giảm
Q2_K        3.2 GB  48 t/s      6.95     ← chất lượng kém rõ rệt
```

> **結論:** Apple Silicon では、**Q4_K_M** が最適な選択です。追加の RAM がある場合は、Q5_K_M または Q6_K にアップグレードしてください。

### 3.4 特定の量子化を使用してモデルをロードする

```bash
# Ollama thường dùng Q4_K_M mặc định
ollama pull llama3.2

# Muốn dùng GGUF cụ thể từ HuggingFace? → Tạo Modelfile
# (xem phần 4)
```

---

## 4. モデルファイル — チューニングとカスタマイズ

Modelfile は、モデルをカスタマイズできるようにする Ollama の方法です。 `Dockerfile` コンテナ用。

### 4.1 モデルファイルの構造

```dockerfile
# Modelfile cho coding assistant tiếng Việt
FROM qwen2.5-coder:7b

# Parameters — ảnh hưởng trực tiếp đến chất lượng output
PARAMETER temperature 0.3
PARAMETER top_p 0.9
PARAMETER top_k 40
PARAMETER repeat_penalty 1.1
PARAMETER num_ctx 8192
PARAMETER num_predict 2048
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"

# System prompt
SYSTEM """Bạn là senior software engineer chuyên viết code clean, có comment tiếng Việt.
Quy tắc:
1. Luôn giải thích approach trước khi viết code
2. Code phải production-ready — có error handling, logging
3. Dùng TypeScript strict mode khi được hỏi về JS/TS
4. Trả lời bằng tiếng Việt, thuật ngữ kỹ thuật giữ nguyên tiếng Anh
"""

# Template — Jinja2
TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"""
```

### 4.2 Apple Siliconのパラメータの説明

```
┌──────────────┬─────────┬────────────────────────────────────────┐
│ Parameter    │ Default │ Ý nghĩa và tuning tips                 │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_ctx      │ 2048    │ Context window. Tăng = dùng nhiều RAM  │
│              │         │ cho KV cache. Trên 8GB RAM, giữ ≤ 4096 │
│              │         │ Trên 16GB+, có thể tăng lên 8192-16384 │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_predict  │ -1      │ Max tokens sinh ra. -1 = unlimited     │
│              │         │ Set giới hạn để tránh response quá dài │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_gpu      │ auto    │ Số GPU layers offload. Trên Apple      │
│              │         │ Silicon nên để auto hoặc 999 (all GPU) │
├──────────────┼─────────┼────────────────────────────────────────┤
│ num_thread   │ auto    │ CPU threads cho operations không chạy  │
│              │         │ trên GPU. Để auto trên Apple Silicon   │
├──────────────┼─────────┼────────────────────────────────────────┤
│ temperature  │ 0.8     │ 0.0 = deterministic, 1.0+ = creative  │
│              │         │ Code: 0.1-0.3 / Chat: 0.7-0.9         │
├──────────────┼─────────┼────────────────────────────────────────┤
│ repeat_penalty│ 1.1    │ Phạt token lặp lại. Tăng nếu model    │
│              │         │ hay repeat. 1.0 = không phạt           │
└──────────────┴─────────┴────────────────────────────────────────┘
```

### 4.3 カスタム モデルの作成と使用

```bash
# Lưu Modelfile ở trên vào file
vim ~/Modelfiles/vn-coder

# Build model
ollama create vn-coder -f ~/Modelfiles/vn-coder

# Chạy
ollama run vn-coder
>>> Viết API endpoint đăng ký user bằng Hono + Drizzle ORM
```

### 4.4 HuggingFace から GGUF をインポートする

Ollama レジストリで使用できないモデル/量子化を使用したい場合:

```bash
# Download GGUF từ HuggingFace
pip install huggingface-hub
huggingface-cli download bartowski/Qwen2.5-14B-Instruct-GGUF \
  --include "Qwen2.5-14B-Instruct-Q5_K_M.gguf" \
  --local-dir ~/models/

# Tạo Modelfile trỏ đến GGUF
cat > ~/Modelfiles/qwen14b-q5 << 'EOF'
FROM ~/models/Qwen2.5-14B-Instruct-Q5_K_M.gguf

PARAMETER num_ctx 8192
PARAMETER temperature 0.7

TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"""
EOF

# Build
ollama create qwen14b-q5 -f ~/Modelfiles/qwen14b-q5

# Chạy
ollama run qwen14b-q5
```

---

## 5. Apple Siliconの詳細なベンチマーク

### 5.1 スクリプトベンチマークトークン/秒

Ollama は、次の場合に応答としてメトリクスを返します。 `stream: false`:

```python
#!/usr/bin/env python3
"""benchmark_ollama.py — Benchmark Ollama trên Apple Silicon"""

import json
import time
import subprocess
import requests

OLLAMA_URL = "http://localhost:11434"

PROMPTS = {
    "short": "Giải thích Docker là gì trong 3 câu.",
    "medium": "Viết hàm Python merge sort với type hints, docstring và unit tests đầy đủ.",
    "long": "Thiết kế kiến trúc hệ thống e-commerce với microservices: API Gateway, "
            "User Service, Product Service, Order Service, Payment Service. Vẽ ASCII "
            "diagram, giải thích communication patterns, database choices, và deployment strategy.",
}

def benchmark_model(model: str, prompt_key: str, prompt: str) -> dict:
    """Chạy benchmark 1 model với 1 prompt"""
    start = time.time()

    resp = requests.post(f"{OLLAMA_URL}/api/generate", json={
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {"num_ctx": 4096}
    })

    elapsed = time.time() - start
    data = resp.json()

    # Ollama trả về timing chi tiết
    total_duration = data.get("total_duration", 0) / 1e9  # nanoseconds → seconds
    load_duration = data.get("load_duration", 0) / 1e9
    prompt_eval_count = data.get("prompt_eval_count", 0)
    prompt_eval_duration = data.get("prompt_eval_duration", 0) / 1e9
    eval_count = data.get("eval_count", 0)
    eval_duration = data.get("eval_duration", 0) / 1e9

    prompt_tokens_per_sec = prompt_eval_count / prompt_eval_duration if prompt_eval_duration > 0 else 0
    gen_tokens_per_sec = eval_count / eval_duration if eval_duration > 0 else 0

    return {
        "model": model,
        "prompt_type": prompt_key,
        "prompt_tokens": prompt_eval_count,
        "generated_tokens": eval_count,
        "prompt_processing": f"{prompt_tokens_per_sec:.1f} t/s",
        "generation_speed": f"{gen_tokens_per_sec:.1f} t/s",
        "total_time": f"{total_duration:.1f}s",
        "load_time": f"{load_duration:.1f}s",
        "time_to_first_token": f"{prompt_eval_duration:.2f}s",
    }

def get_system_info() -> dict:
    """Lấy thông tin chip và RAM"""
    chip = subprocess.run(
        ["sysctl", "-n", "machdep.cpu.brand_string"],
        capture_output=True, text=True
    ).stdout.strip()

    mem_bytes = int(subprocess.run(
        ["sysctl", "-n", "hw.memsize"],
        capture_output=True, text=True
    ).stdout.strip())

    return {"chip": chip, "ram_gb": mem_bytes / (1024**3)}

if __name__ == "__main__":
    system = get_system_info()
    print(f"\n{'='*60}")
    print(f"System: {system['chip']}")
    print(f"RAM: {system['ram_gb']:.0f} GB")
    print(f"{'='*60}\n")

    models = ["llama3.2:3b", "qwen2.5:7b"]
    results = []

    for model in models:
        print(f"\n--- Benchmarking: {model} ---")
        # Warm up — load model vào memory
        requests.post(f"{OLLAMA_URL}/api/generate", json={
            "model": model, "prompt": "hi", "stream": False
        })

        for key, prompt in PROMPTS.items():
            result = benchmark_model(model, key, prompt)
            results.append(result)
            print(f"  [{key:6s}] gen: {result['generation_speed']:>8s} | "
                  f"tokens: {result['generated_tokens']:>4d} | "
                  f"total: {result['total_time']:>6s}")

    print(f"\n{'='*60}")
    print(json.dumps(results, indent=2, ensure_ascii=False))
```

```bash
python3 benchmark_ollama.py
```

### 5.2 参考ベンチマーク結果

Apple Silicon チップでの実際の結果は次のとおりです (Q4_K_M、num_ctx=4096)。

```
╔═══════════════════════════════════════════════════════════════════════════╗
║         Benchmark: Generation Speed (tokens/s) — Q4_K_M                  ║
╠═════════════════╦═══════════╦════════════╦════════════╦════════════════════╣
║ Chip            ║ 3B model  ║ 7B model   ║ 14B model  ║ 32B model         ║
║                 ║ (Llama    ║ (Qwen2.5   ║ (Qwen2.5   ║ (Qwen2.5          ║
║                 ║  3.2)     ║  7B)       ║  14B)      ║  32B)             ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M1 8GB          ║ 35 t/s    ║ 15 t/s     ║ OOM        ║ OOM               ║
║ M1 Pro 16GB     ║ 55 t/s    ║ 30 t/s     ║ 12 t/s     ║ OOM               ║
║ M1 Max 32GB     ║ 80 t/s    ║ 52 t/s     ║ 28 t/s     ║ 10 t/s            ║
║ M1 Max 64GB     ║ 82 t/s    ║ 55 t/s     ║ 30 t/s     ║ 16 t/s            ║
║ M1 Ultra 128GB  ║ 95 t/s    ║ 75 t/s     ║ 48 t/s     ║ 28 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M2 8GB          ║ 42 t/s    ║ 18 t/s     ║ OOM        ║ OOM               ║
║ M2 Pro 16GB     ║ 60 t/s    ║ 35 t/s     ║ 14 t/s     ║ OOM               ║
║ M2 Max 32GB     ║ 85 t/s    ║ 55 t/s     ║ 30 t/s     ║ 12 t/s            ║
║ M2 Max 96GB     ║ 88 t/s    ║ 58 t/s     ║ 32 t/s     ║ 18 t/s            ║
║ M2 Ultra 192GB  ║ 105 t/s   ║ 80 t/s     ║ 52 t/s     ║ 32 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M3 8GB          ║ 45 t/s    ║ 20 t/s     ║ OOM        ║ OOM               ║
║ M3 Pro 18GB     ║ 52 t/s    ║ 32 t/s     ║ 15 t/s     ║ OOM               ║
║ M3 Max 36GB     ║ 90 t/s    ║ 58 t/s     ║ 32 t/s     ║ 14 t/s            ║
║ M3 Max 128GB    ║ 92 t/s    ║ 60 t/s     ║ 34 t/s     ║ 18 t/s            ║
╠═════════════════╬═══════════╬════════════╬════════════╬════════════════════╣
║ M4 16GB         ║ 50 t/s    ║ 25 t/s     ║ OOM        ║ OOM               ║
║ M4 Pro 24GB     ║ 72 t/s    ║ 45 t/s     ║ 22 t/s     ║ OOM               ║
║ M4 Max 36GB     ║ 105 t/s   ║ 68 t/s     ║ 38 t/s     ║ 16 t/s            ║
║ M4 Max 64GB     ║ 108 t/s   ║ 70 t/s     ║ 40 t/s     ║ 22 t/s            ║
║ M4 Max 128GB    ║ 110 t/s   ║ 72 t/s     ║ 42 t/s     ║ 25 t/s            ║
╚═════════════════╩═══════════╩════════════╩════════════╩════════════════════╝

OOM = Out of Memory — model không vừa RAM (cần swap, cực chậm)

Ngưỡng "usable" cho interactive chat: ≥ 15 tokens/s
Ngưỡng "comfortable":                 ≥ 30 tokens/s
Ngưỡng "fast":                        ≥ 50 tokens/s
```

### 5.3 機械に応じたモデル選択マトリックス

```
╔═══════════════════════════════════════════════════════════════════╗
║            Bạn có Mac nào? → Dùng model gì?                     ║
╠══════════════╦════════════════════════════════════════════════════╣
║ 8GB RAM      ║ llama3.2:3b, phi3:mini, gemma2:2b                ║
║ (M1/M2/M3/M4)║ → Chat cơ bản, summarization, quick Q&A          ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 16GB RAM     ║ qwen2.5:7b, mistral:7b, llama3.1:8b              ║
║              ║ → Coding, RAG, structured output                  ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 24GB RAM     ║ qwen2.5:14b, phi4:14b                            ║
║              ║ → Chất lượng cao, reasoning tasks                 ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 32-36GB RAM  ║ qwen2.5:32b (Q4), deepseek-coder-v2:16b          ║
║              ║ → Near-GPT-4 quality cho nhiều task               ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 64GB+ RAM    ║ llama3.1:70b (Q4), qwen2.5:72b (Q4)              ║
║              ║ → GPT-4 class, enterprise use cases               ║
╠══════════════╬════════════════════════════════════════════════════╣
║ 128GB+ RAM   ║ llama3.1:70b (Q6/Q8), mixtral 8x22B              ║
║              ║ → Full precision large models                      ║
╚══════════════╩════════════════════════════════════════════════════╝
```

---

## 6. Apple MLX 対 Ollama — いつ何を使用するか?

### 6.1 MLX とは何ですか?

**MLX** は、Apple が開発した ML フレームワークで、Apple Silicon 向けに特別に最適化されています。コンピューティング シェーダー経由で Metal を使用する Ollama/llama.cpp とは異なり、MLX は UMA 用に**ゼロから設計**されました。

```bash
# Cài MLX
pip install mlx mlx-lm

# Chạy model
mlx_lm.generate \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --prompt "Giải thích Kubernetes" \
  --max-tokens 500

# Hoặc chạy server OpenAI-compatible
mlx_lm.server --model mlx-community/Qwen2.5-7B-Instruct-4bit --port 8080
```

### 6.2 MLX と Ollama の比較

```
╔══════════════════╦══════════════════════╦══════════════════════╗
║                  ║ Ollama               ║ MLX                  ║
╠══════════════════╬══════════════════════╬══════════════════════╣
║ Backend          ║ llama.cpp + Metal    ║ MLX (Apple native)   ║
║ Tốc độ           ║ Nhanh                ║ Nhanh hơn 10-20%     ║
║                  ║                      ║ (một số model)       ║
║ Dễ dùng          ║ ★★★★★ (1 lệnh)      ║ ★★★ (cần Python)     ║
║ Model format     ║ GGUF                 ║ SafeTensors (MLX)    ║
║ Model hub        ║ ollama.com library   ║ HuggingFace          ║
║                  ║ (1-click pull)       ║ (mlx-community)      ║
║ Multi-model      ║ ✅ Built-in           ║ ❌ Manual             ║
║ API Server       ║ ✅ OpenAI-compatible  ║ ✅ (mlx_lm.server)   ║
║ Fine-tuning      ║ ❌                    ║ ✅ LoRA/QLoRA         ║
║ Cross-platform   ║ ✅ Mac/Linux/Windows  ║ ❌ Mac only           ║
║ Docker support   ║ ✅                    ║ ❌                    ║
║ Memory efficient ║ Tốt                  ║ Rất tốt (lazy eval)  ║
╚══════════════════╩══════════════════════╩══════════════════════╝
```

### 6.3 いつ何を使用するか?

- **Ollama**: ほとんどの場合に使用されます。簡単なセットアップ、組み込みのモデル ライブラリ、API サーバーの実稼働対応、マルチモデルの提供。
- **MLX**: Mac で最高速度が必要な場合、LoRA をローカルで微調整したい場合、または Python パイプラインへの緊密な統合が必要な場合。

### 6.4 MLX を使用した LoRA の微調整 (Mac のみ)

```bash
# Cài đặt
pip install mlx-lm

# Chuẩn bị data (JSONL format)
cat > train.jsonl << 'EOF'
{"text": "<|im_start|>user\nDocker là gì?<|im_end|>\n<|im_start|>assistant\nDocker là nền tảng container hóa...<|im_end|>"}
{"text": "<|im_start|>user\nKubernetes là gì?<|im_end|>\n<|im_start|>assistant\nKubernetes là hệ thống orchestration...<|im_end|>"}
EOF

# Fine-tune
mlx_lm.lora \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --data ./train.jsonl \
  --batch-size 1 \
  --lora-layers 8 \
  --iters 100 \
  --adapter-path ./adapters

# Test model đã fine-tune
mlx_lm.generate \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --adapter-path ./adapters \
  --prompt "Docker là gì?"

# Merge adapter vào model
mlx_lm.fuse \
  --model mlx-community/Qwen2.5-7B-Instruct-4bit \
  --adapter-path ./adapters \
  --save-path ./my-finetuned-model
```

---

## 7. マルチモデルの提供と同時推論

### 7.1 複数のモデルを同時に実行する

```bash
# Cấu hình Ollama cho multi-model
export OLLAMA_MAX_LOADED_MODELS=3      # Load tối đa 3 models
export OLLAMA_NUM_PARALLEL=2            # 2 requests song song per model
export OLLAMA_KEEP_ALIVE="1h"           # Giữ model loaded 1 giờ

# Restart Ollama
brew services restart ollama
```

### 7.2 ルーター パターン — タスクごとにモデルを選択する

```python
#!/usr/bin/env python3
"""model_router.py — Route requests đến model phù hợp"""

from openai import OpenAI
from enum import Enum

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

class TaskType(Enum):
    CODE = "code"
    CHAT = "chat"
    ANALYSIS = "analysis"
    EMBEDDING = "embedding"

# Mapping task → model (tuỳ chỉnh theo RAM của bạn)
MODEL_MAP = {
    TaskType.CODE: "qwen2.5-coder:7b",       # Code-optimized
    TaskType.CHAT: "llama3.2:3b",             # Nhẹ, nhanh cho chat
    TaskType.ANALYSIS: "qwen2.5:14b",         # Nặng hơn, cho reasoning
    TaskType.EMBEDDING: "nomic-embed-text",   # Embedding model
}

def classify_task(user_message: str) -> TaskType:
    """Phân loại task đơn giản bằng keyword matching"""
    code_keywords = ["code", "viết", "function", "class", "bug", "error",
                     "implement", "refactor", "API", "endpoint", "SQL"]
    analysis_keywords = ["phân tích", "so sánh", "thiết kế", "kiến trúc",
                         "đánh giá", "review", "explain why", "trade-off"]

    msg_lower = user_message.lower()

    if any(kw.lower() in msg_lower for kw in code_keywords):
        return TaskType.CODE
    if any(kw.lower() in msg_lower for kw in analysis_keywords):
        return TaskType.ANALYSIS
    return TaskType.CHAT

def route_and_generate(user_message: str, task_type: TaskType = None) -> str:
    """Route request đến model phù hợp"""
    if task_type is None:
        task_type = classify_task(user_message)

    model = MODEL_MAP[task_type]
    print(f"[Router] Task: {task_type.value} → Model: {model}")

    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": user_message}],
        temperature=0.3 if task_type == TaskType.CODE else 0.7,
    )
    return response.choices[0].message.content

# Demo
if __name__ == "__main__":
    # Tự động route đến code model
    print(route_and_generate("Viết function Python merge sort"))

    # Tự động route đến analysis model
    print(route_and_generate("Phân tích trade-off giữa SQL và NoSQL"))

    # Tự động route đến chat model (nhẹ, nhanh)
    print(route_and_generate("Hôm nay thời tiết thế nào?"))
```

### 7.3 埋め込み + チャット パイプライン (RAG ローカル)

```python
#!/usr/bin/env python3
"""local_rag.py — RAG hoàn toàn local trên Apple Silicon"""

import json
import numpy as np
from openai import OpenAI

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

# ─── 1. Embedding local ────────────────────────────────────────

def get_embedding(text: str) -> list[float]:
    """Lấy embedding từ Ollama (nomic-embed-text)"""
    response = client.embeddings.create(
        model="nomic-embed-text",
        input=text
    )
    return response.data[0].embedding

def cosine_similarity(a: list[float], b: list[float]) -> float:
    a_np, b_np = np.array(a), np.array(b)
    return float(np.dot(a_np, b_np) / (np.linalg.norm(a_np) * np.linalg.norm(b_np)))

# ─── 2. Simple Vector Store ────────────────────────────────────

class LocalVectorStore:
    def __init__(self):
        self.documents: list[dict] = []

    def add(self, text: str, metadata: dict = None):
        embedding = get_embedding(text)
        self.documents.append({
            "text": text,
            "embedding": embedding,
            "metadata": metadata or {}
        })

    def search(self, query: str, top_k: int = 3) -> list[dict]:
        query_embedding = get_embedding(query)
        scored = []
        for doc in self.documents:
            score = cosine_similarity(query_embedding, doc["embedding"])
            scored.append({**doc, "score": score})
        scored.sort(key=lambda x: x["score"], reverse=True)
        return scored[:top_k]

# ─── 3. RAG Pipeline ──────────────────────────────────────────

def rag_query(store: LocalVectorStore, question: str) -> str:
    """Full RAG: retrieve → augment → generate"""
    # Retrieve
    results = store.search(question, top_k=3)
    context = "\n\n".join([
        f"[Nguồn {i+1} — score: {r['score']:.3f}]\n{r['text']}"
        for i, r in enumerate(results)
    ])

    # Generate với context
    response = client.chat.completions.create(
        model="qwen2.5:7b",  # Hoặc model khác tuỳ RAM
        messages=[
            {"role": "system", "content":
                "Trả lời câu hỏi dựa trên context được cung cấp. "
                "Nếu context không đủ thông tin, nói rõ. "
                "Trích dẫn nguồn khi trả lời."},
            {"role": "user", "content":
                f"Context:\n{context}\n\nCâu hỏi: {question}"}
        ],
        temperature=0.3
    )
    return response.choices[0].message.content

# ─── 4. Demo ───────────────────────────────────────────────────

if __name__ == "__main__":
    store = LocalVectorStore()

    # Index documents
    docs = [
        "Docker là platform container hóa giúp đóng gói ứng dụng cùng dependencies "
        "vào container. Container chia sẻ kernel với host OS, nhẹ hơn VM.",
        "Kubernetes (K8s) là hệ thống orchestration cho containers. K8s quản lý "
        "scheduling, scaling, self-healing, service discovery cho containerized apps.",
        "Docker Compose cho phép định nghĩa multi-container application bằng YAML file. "
        "Phù hợp cho development và testing, không nên dùng cho production scale lớn.",
        "Helm là package manager cho Kubernetes. Helm Charts đóng gói K8s manifests "
        "thành reusable packages, dễ versioning và sharing.",
    ]

    print("Indexing documents...")
    for doc in docs:
        store.add(doc)
    print(f"Indexed {len(docs)} documents.\n")

    # Query
    question = "Khi nào nên dùng Docker Compose vs Kubernetes?"
    print(f"Q: {question}\n")
    answer = rag_query(store, question)
    print(f"A: {answer}")
```

```bash
# Cần pull embedding model trước
ollama pull nomic-embed-text
ollama pull qwen2.5:7b

# Chạy
pip install numpy openai
python3 local_rag.py
```

---

## 8. 完全なローカル AI 開発スタックを構築する

### 8.1 スタックの概要

```
╔══════════════════════════════════════════════════════════════════╗
║             Local AI Dev Stack trên Apple Silicon               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  ┌──────────────────────────────────────────────────────────┐   ║
║  │ IDE: VS Code / Cursor / Zed                              │   ║
║  │ + Continue.dev extension (kết nối Ollama)                │   ║
║  └─────────────────────┬────────────────────────────────────┘   ║
║                        │                                         ║
║  ┌─────────────────────▼────────────────────────────────────┐   ║
║  │ Ollama Server (localhost:11434)                           │   ║
║  │                                                           │   ║
║  │  ┌───────────┐  ┌────────────────┐  ┌────────────────┐   │   ║
║  │  │ Chat/Q&A  │  │ Code Assistant │  │ Embedding      │   │   ║
║  │  │ llama3.2  │  │ qwen2.5-coder  │  │ nomic-embed    │   │   ║
║  │  │ :3b       │  │ :7b            │  │ -text          │   │   ║
║  │  └───────────┘  └────────────────┘  └────────────────┘   │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                        │                                         ║
║  ┌─────────────────────▼────────────────────────────────────┐   ║
║  │ Application Layer                                         │   ║
║  │                                                           │   ║
║  │  • Python scripts (OpenAI SDK → Ollama)                  │   ║
║  │  • Local RAG pipeline (embedding + vector search)         │   ║
║  │  • CLI tools (shell scripts → curl Ollama API)            │   ║
║  │  • Web UI: Open WebUI (Docker)                            │   ║
║  └──────────────────────────────────────────────────────────┘   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### 8.2 ステップ 1: 必要なモデルをプルする

```bash
# Code assistant (ưu tiên nhất)
ollama pull qwen2.5-coder:7b

# General chat
ollama pull llama3.2:3b

# Embedding cho RAG
ollama pull nomic-embed-text

# (Tuỳ chọn) Model lớn hơn nếu có RAM
ollama pull qwen2.5:14b          # 24GB+ RAM
ollama pull deepseek-coder-v2    # 16GB+ RAM

# Kiểm tra
ollama list
```

### 8.3 ステップ 2: VS Code の Continue.dev をインストールする

**Continue** は VS Code/JetBrains の拡張機能で、Ollama に直接接続して AI コーディング アシスタントを **完全にオフライン**で使用できます。

```bash
# Cài extension
code --install-extension continue.continue
```

構成 `~/.continue/config.json`:

```json
{
  "models": [
    {
      "title": "Qwen2.5 Coder 7B (Local)",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b",
      "apiBase": "http://localhost:11434"
    },
    {
      "title": "Llama 3.2 3B (Fast)",
      "provider": "ollama",
      "model": "llama3.2:3b",
      "apiBase": "http://localhost:11434"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Qwen2.5 Coder (Autocomplete)",
    "provider": "ollama",
    "model": "qwen2.5-coder:7b",
    "apiBase": "http://localhost:11434"
  },
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text",
    "apiBase": "http://localhost:11434"
  }
}
```

インストール後: VS Code を開きます → `Cmd+L` チャットする、 `Tab` オートコンプリートの場合 — すべてローカルで実行されます。

### 8.4 ステップ 3: WebUI を開く (ChatGPT のようなローカル インターフェイス)

```bash
# Chạy Open WebUI kết nối Ollama
docker run -d \
  --name open-webui \
  -p 3000:8080 \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui-data:/app/backend/data \
  ghcr.io/open-webui/open-webui:main

# Truy cập http://localhost:3000
# Tạo tài khoản admin (local, không gửi data đi đâu)
```

### 8.5 ステップ 4: CLI ヘルパー スクリプト

```bash
# Thêm vào ~/.zshrc

# Chat nhanh từ terminal
ai() {
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"llama3.2:3b\", \"prompt\": \"$*\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Code review từ clipboard
ai-review() {
  local code=$(pbpaste)
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"qwen2.5-coder:7b\", \"prompt\": \"Review code này, chỉ ra bugs và improvements:\\n\\n$code\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Giải thích error message
ai-error() {
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"qwen2.5-coder:7b\", \"prompt\": \"Giải thích error này và cách fix:\\n\\n$*\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}

# Commit message generator
ai-commit() {
  local diff=$(git diff --staged)
  if [ -z "$diff" ]; then echo "No staged changes"; return 1; fi
  curl -s http://localhost:11434/api/generate \
    -d "{\"model\": \"llama3.2:3b\", \"prompt\": \"Viết conventional commit message (ngắn gọn, tiếng Anh) cho diff này:\\n\\n$diff\", \"stream\": false}" \
    | python3 -c "import sys,json; print(json.load(sys.stdin)['response'])"
}
```

```bash
# Dùng
source ~/.zshrc

ai "Giải thích SOLID principles"
ai-error "TypeError: cannot unpack non-iterable NoneType object"
ai-commit  # Tự generate commit message từ staged changes
```

---

## 9. モニタリングとプロファイリング

### 9.1 リソースの使用状況を監視する

```bash
# Xem model đang loaded và memory usage
ollama ps

# Output:
# NAME              ID           SIZE    PROCESSOR  UNTIL
# qwen2.5:7b       abcd1234     5.3 GB  100% GPU   4 minutes from now
# llama3.2:3b       efgh5678     2.0 GB  100% GPU   4 minutes from now

# Monitor GPU/memory real-time
# Mở Activity Monitor → GPU History (⌘+4)
# Hoặc dùng powermetrics (cần sudo)
sudo powermetrics --samplers gpu_power -i 1000 -n 10
```

### 9.2 モデルが RAM に適合するかどうかを確認する

```
Công thức ước tính RAM cần:

  RAM_needed = Model_Size + KV_Cache + OS_overhead

Trong đó:
  Model_Size  = (params × bits_per_weight) / 8
  KV_Cache    ≈ 2 × num_layers × d_model × num_ctx × 2 bytes
              ≈ Model_Size × (num_ctx / 1000) × 0.05
  OS_overhead ≈ 2-4 GB (macOS + background apps)

Ví dụ: Qwen2.5 7B Q4_K_M, num_ctx = 8192
  Model     ≈ 4.5 GB
  KV_Cache  ≈ 4.5 × 8.192 × 0.05 ≈ 1.8 GB
  OS        ≈ 3 GB
  ─────────────────
  TỔNG      ≈ 9.3 GB → Cần ít nhất 16GB RAM

Nếu bạn dùng Flash Attention (OLLAMA_FLASH_ATTENTION=1):
  KV_Cache giảm ~50% → TỔNG ≈ 8.4 GB → Vẫn tight trên 8GB
```

---

## 10. 高度なトラブルシューティング

### 10.1 モデルはロードされますが、実行が非常に遅い

**症状:** `ollama ps` ディスプレイ `PROCESSOR: 50% GPU / 50% CPU` または `100% CPU`。

**原因:** モデルが GPU メモリに完全に収まらない → レイヤーの一部が CPU 上で実行されます。

**修正:**
```bash
# Kiểm tra
ollama ps
# Nếu thấy "X% CPU" → model quá lớn

# Giải pháp 1: Dùng model nhỏ hơn
ollama rm qwen2.5:14b
ollama pull qwen2.5:7b

# Giải pháp 2: Giảm context window
# Tạo Modelfile với num_ctx thấp hơn
echo 'FROM qwen2.5:7b
PARAMETER num_ctx 2048' > /tmp/Modelfile
ollama create qwen-small-ctx -f /tmp/Modelfile

# Giải pháp 3: Bật Flash Attention
export OLLAMA_FLASH_ATTENTION=1
brew services restart ollama
```

### 10.2 エラー `signal: killed` またはアプリがクラッシュする

macOS はメモリが不足するとプロセスを強制終了します。 Console.app を確認 → 検索 `jetsam` イベント。イベント。

```bash
# Xem memory pressure
memory_pressure

# Kết quả:
# The system has X free pages (...)
# System-wide memory free percentage: Y%

# Nếu Y < 10% → cần giải phóng RAM
```

### 10.3 Ollama はアップデート後に新しいモデルを受け入れません

```bash
# Clear cache
rm -rf ~/.ollama/tmp/*

# Re-pull model
ollama pull qwen2.5:7b

# Restart service
brew services restart ollama
```

### 10.4 外部モニター使用時のパフォーマンスの低下

一部の Mac (特に M1/M2 ベース) では、外部ディスプレイを接続するときに GPU がディスプレイ全体をレンダリングする必要があるため、GPU スロットルが機能します。

**修正:** LLM を集中的に使用するタスクを実行する場合は、GPU を集中的に使用するアプリ (ゲーム、ビデオ編集) を閉じます。

---

## 11. Local AI 実行時のセキュリティ

### 11.1 ネットワークへの露出

```bash
# ❌ NGUY HIỂM — expose ra mạng nội bộ / internet
export OLLAMA_HOST="0.0.0.0:11434"

# ✅ AN TOÀN — chỉ bind localhost
export OLLAMA_HOST="127.0.0.1:11434"
```

リモート アクセスが必要な場合 (たとえば、ローカル ネットワーク上の別のコンピュータから):

```bash
# Dùng SSH tunnel thay vì expose trực tiếp
# Trên máy remote:
ssh -L 11434:localhost:11434 user@mac-server

# Hoặc đặt sau reverse proxy với auth
# (xem bài về Nginx trong series DevSecOps)
```

### 11.2 データプライバシー

- すべてのプロンプトと応答は **コンピュータ上に残ります**。どこにも送信されません。
- Ollama **テレメトリを収集しません** (オープンソース、テスト可能)
- ファイルのログイン `~/.ollama/logs/` — 機密データが含まれている場合は非表示にする必要があります

---

## 概要

|側面 |重要なポイント |
|---|---|
| **Apple Silicon が優れている理由** |統合メモリ = モデルに使用されるすべての RAM、高メモリ帯域幅、メタル GPU アクセラレーション |
| **量子化** | Q4_K_M がスイートスポットです。 RAMを増やす → Q5_K_M/Q6_Kに増やす |
| **モデルファイル** |ユースケースごとに num_ctx、温度、システム プロンプトを調整する |
| **ベンチマーク** | M1: 35-95 t/s (3B)、M4 Max: 110 t/s (3B)、70 t/s (7B) |
| **MLX vs オラマ** |日常使用には Ollama、最大速度と微調整には MLX |
| **マルチモデル** |ルーター パターン ルート タスク → 正しいモデル。 OLLAMA_MAX_LOADED_MODELS > 1 |
| **開発スタック** | Ollama + Continue.dev + Open WebUI = 完全なオフライン AI IDE |
| **フラッシュ注意** | OLLAMA_FLASH_ATTENTION=1 をオンにする → キャッシュ メモリを 50% 削減 |

---

## 練習問題を練習する

### 基本

1. Ollama を取り付け、引っ張ります `llama3.2:3b` そして `qwen2.5-coder:7b`。走る `ollama ps` モデルが 100% GPU をロードしていることを確認します。
2. スクリプトを実行します `benchmark_ollama.py` 上記 — マシン上のトークンをログに記録します。
3. ベトナム語コーディングアシスタントのモデルファイルを作成し、ビルドしてテストします。

### 平均

4. Ollama に接続するために、VS Code で Continue.dev 拡張機能をセットアップします。オートコンプリートとチャットを試してください。
5. Docker を使用して Open WebUI を実行し、Ollama に接続します。 ChatGPT とのエクスペリエンスを比較してください。
6. 少なくとも 4 つのタスク タイプを分類するルーター モデル (セクション 7.2 と同様) を作成します。

### 上級者向け

7. ローカル RAG パイプライン (セクション 7.3) を構築し、20 以上のドキュメントにインデックスを付け、精度を測定します。
8. 同じモデル (Qwen2.5 7B Q4) で Ollama と MLX の速度を比較します。プロンプト処理と生成トークンをレポートします。
9. 自己生成されたデータセット (50 以上のサンプル) に対して MLX を使用して LoRA を微調整します。基本モデルと微調整モデルを比較します。
10. 2 ～ 3 つのモデルを同時に実行するときの実際の RAM 使用量を測定します。デバイスに最適な OLLAMA_MAX_LOADED_MODELS 構成を見つけます。
