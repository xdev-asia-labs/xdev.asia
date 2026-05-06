---
id: 019c9619-bb06-7006-d006-bb0600000006
title: 'レッスン 6: Ollama + MLX バックエンド - 2 つの世界の長所を組み合わせる'
slug: bai-6-ollama-mlx-backend-ket-hop-tot-nhat-cua-hai-the-gioi
description: >-
  llama.cpp の代わりに MLX バックエンドを使用するように Ollama を構成します。詳細なベンチマーク。コンテキストウィンドウを最適化します。
  MLX バックエンドをいつ使用するか、いつ llama.cpp を使用するか。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 2: MLX - Apple のネイティブ フレームワークによる 3 倍の高速化'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2579" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2579)"/>

  <!-- Decorations -->
  <g>
    <circle cx="934" cy="192" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="768" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="602" cy="40" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="936" cy="94" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.3826859021799,118.5 955.3826859021799,145.5 932,159 908.6173140978201,145.5 908.6173140978201,118.5 932,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: Ollama + MLX バックエンド - 良い組み合わせ</tspan>
      <tspan x="60" dy="42">二つの世界のベスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: MLX - Apple のネイティブ フレームワークによる 3 倍の高速化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Ollama (便利、大規模な API、エコシステムを備えている) と MLX (Mac で高速である) についてはすでにご存知でしょう。当然の質問: **この 2 つを組み合わせることはできますか?**

答え: **はい**。 Ollama は MLX バックエンドをサポートしているため、Ollama のユーティリティ (API、モデル管理) を使用しながら、MLX エンジンを使用して推論することができます。

---

## 1. Ollama の MLX バックエンド

バージョン 0.5 以降から、Ollama は macOS での MLX のサポートを追加します。 llama.cpp (GGUF 形式) を使用する代わりに、MLX モデル (safetensors 形式) をインポートすると、Ollama は MLX エンジンを使用します。

### 仕組み

```
                    ┌─────── Backend ────────┐
User ──► Ollama ──►│ llama.cpp (default)     │──► Response
         API       │ MLX (khi dùng MLX model)│
                    └────────────────────────┘
```

---

## 2. MLX 重みから Ollama モデルを作成する

### ステップ 1: モデル MLX をダウンロードする

```bash
# Dùng huggingface-cli
pip3 install huggingface-hub
huggingface-cli download mlx-community/Llama-3.2-3B-Instruct-4bit \
  --local-dir ./models/llama-3.2-3b-mlx
```

### ステップ 2: モデルファイルを作成する

```bash
cat > Modelfile.mlx << 'EOF'
FROM ./models/llama-3.2-3b-mlx

PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER num_ctx 4096

SYSTEM """Bạn là trợ lý AI thông minh. Trả lời ngắn gọn, chính xác, bằng tiếng Việt."""
EOF
```

### ステップ 3: Ollama でモデルを構築する

```bash
ollama create llama3.2-mlx -f Modelfile.mlx
```

### ステップ 4: 実行する

```bash
ollama run llama3.2-mlx
```

Ollama はこのモデルに MLX エンジンを使用しますが、引き続き Ollama CLI と API を通常どおり使用します。

---

## 3. 比較: 同じモデル、2 つのバックエンド

### ベンチマーク スクリプト

```bash
#!/bin/bash
# benchmark-backends.sh

PROMPT="Write a Python function that implements binary search on a sorted list. Include docstring and type hints."

echo "=== Ollama + llama.cpp (GGUF) ==="
curl -s http://localhost:11434/api/generate -d "{
  \"model\": \"llama3.2\",
  \"prompt\": \"$PROMPT\",
  \"stream\": false
}" | python3 -c "
import sys, json
d = json.load(sys.stdin)
pt = d['prompt_eval_duration']/1e9
gt = d['eval_duration']/1e9
print(f'Prompt: {d[\"prompt_eval_count\"]} tok in {pt:.2f}s = {d[\"prompt_eval_count\"]/pt:.0f} tok/s')
print(f'Generate: {d[\"eval_count\"]} tok in {gt:.2f}s = {d[\"eval_count\"]/gt:.0f} tok/s')
"

echo ""
echo "=== Ollama + MLX ==="
curl -s http://localhost:11434/api/generate -d "{
  \"model\": \"llama3.2-mlx\",
  \"prompt\": \"$PROMPT\",
  \"stream\": false
}" | python3 -c "
import sys, json
d = json.load(sys.stdin)
pt = d['prompt_eval_duration']/1e9
gt = d['eval_duration']/1e9
print(f'Prompt: {d[\"prompt_eval_count\"]} tok in {pt:.2f}s = {d[\"prompt_eval_count\"]/pt:.0f} tok/s')
print(f'Generate: {d[\"eval_count\"]} tok in {gt:.2f}s = {d[\"eval_count\"]/gt:.0f} tok/s')
"
```

### サンプル結果 (M3 Pro 36GB)

|メトリクス |ラマ.cpp | MLX |スピードアップ |
|-----|----------|-----|----------|
|迅速な処理 | 285 トーク/秒 | 640 トーク/秒 | 2.2倍 |
|トークン生成 | 33 トーク/秒 | 55 トーク/秒 | 1.7倍 |
|メモリ使用量 | 6.5GB | 5.8GB | -10% |
| API 応答時間 | 8.2秒| 4.8秒 | 1.7倍 |

---

## 4. コンテキストウィンドウの調整

コンテキスト ウィンドウは、テキスト モデルが会話の中でどれだけ「記憶」するかを決定します。コンテキストの増加 = より多くの RAM を消費します。

### コンテキストの RAM を計算する

```
KV Cache memory ≈ 2 × n_layers × n_heads × head_dim × context_length × 2 bytes (FP16)
```

Llama 3.2 8B (コンテキスト長あり):

|コンテキスト | KV キャッシュが追加されました |総RAM |
|----------|------|----------|
| 2048年 | ～0.5GB | ～6 GB |
| 4096 | ～1 GB | ～6.5GB |
| 8192 | ～2 GB | ～7.5GB |
| 16384 | ～4 GB | ～9.5GB |
| 32768 | ～8 GB | ～13.5 GB |
| 131072 | ～32 GB | ～37.5 GB |

### Modelfile にコンテキストを設定する

```
FROM ./models/llama-3.2-3b-mlx

# Context window
PARAMETER num_ctx 8192

# Giảm context nếu ít RAM
# PARAMETER num_ctx 2048
```

### 実行時にコンテキストを設定する

```bash
# Override context khi chạy
ollama run llama3.2-mlx --num-ctx 16384
```

> 💡 **推奨**: から始めましょう `4096`、RAM がなくなるまで、またはユースケースに十分な量になるまで、徐々に増加します。

---

## 5. パフォーマンスを最適化する

### GPU 使用率

```bash
# Kiểm tra model dùng GPU hay CPU
ollama ps
```

理想的な出力: `100% GPU`。 CPU が表示される場合は、モデルが GPU でアクセス可能なメモリに適合しないことを意味します。

### モデルをメモリ内に保持する

デフォルトでは、Ollama は 5 分間のアイドル時間が経過するとモデルをアンロードします。変更:

```bash
# Giữ model loaded 30 phút
export OLLAMA_KEEP_ALIVE=30m

# Giữ vĩnh viễn (cho đến khi restart)
export OLLAMA_KEEP_ALIVE=-1
```

または API で次のようにします。

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2-mlx",
  "keep_alive": -1
}'
```

### 複数のモデルを同時に実行する

```bash
# Cho phép 3 model cùng lúc
export OLLAMA_MAX_LOADED_MODELS=3

# Chạy song song
export OLLAMA_NUM_PARALLEL=4
```

> ⚠️ 各モデルは独自の RAM を占有します。 3モデル × 5GB = 15GB。 macOS と他のアプリに十分な RAM があることを確認してください。

---

## 6. パフォーマンスの監視

### アクティビティモニター

**アクティビティ モニター** → **GPU** タブを開いて、次を確認します。

- 推論中の GPU 使用率 %
- GPUメモリ使用量

### 端末監視

```bash
# Xem GPU usage real-time
sudo powermetrics --samplers gpu_power -i 1000

# Xem memory pressure
memory_pressure

# Xem Ollama process
ps aux | grep ollama
```

### オラマのログ

```bash
# Xem logs chi tiết
cat ~/.ollama/logs/server.log | tail -50

# Follow logs real-time
tail -f ~/.ollama/logs/server.log
```

---

## 7. 推奨されるワークフロー

実際の経験に基づく、最適なワークフローは次のとおりです。

### 日常使用: Ollama (llama.cpp)

```bash
# Model mặc định cho chat, hỏi đáp
ollama run qwen2.5:14b
```

- 安定した大規模なエコシステム (Open WebUI、Continue.dev...)
- インタラクティブなチャットに十分な速度

### スピードが必要な場合: Ollama + MLX

```bash
# Model MLX cho tác vụ cần nhanh
ollama run qwen2.5-mlx
```

- プロンプト処理が 2 倍高速 → 最初のトークンまでの時間が非常に短い
- 複数のリクエストをバッチ処理する

### スクリプト/パイプライン: mlx-lm を直接実行する

```python
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Qwen2.5-14B-Instruct-4bit")
# Custom pipeline, batch processing, fine-tuning...
```

- 完全な制御
- Ollamaサーバーのオーバーヘッドなし

---

## 概要

|アプローチ |長所 |デメリット |いつ使用するか |
|----------|---|----------|---------------|
|オラマ + ラマ.cpp |安定したエコシステム | MLX よりも遅い |毎日のデフォルト |
|オラマ + MLX |より速く、Ollama API を使用してください |より複雑なセットアップ |スピード + API が必要 |
| mlx-lm ライブ |最速、柔軟 | API サーバーがありません |スクリプト、パイプライン |

---

## 演習

1. セクション 2 の手順に従って、MLX バックエンドを使用して Ollama モデルを作成します。
2.同じモデルの 2 つのバックエンド (llama.cpp と MLX) を比較するベンチマークを実行します。
3. コンテキスト ウィンドウを 2048 → 4096 → 8192 と増やしてみます。RAM 使用量がどれだけ増加するかを記録します。
4. テスト `OLLAMA_KEEP_ALIVE=-1` — アイドル時に RAM に影響しますか?
5. 個人的なワークフローを構築する: 日常の 3 つのユースケースに合わせてモデルとバックエンドを選択します

**次の記事**: Ollama REST API →
