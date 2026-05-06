---
id: 019c9619-bb05-7005-d005-bb0500000005
title: 'レッスン 5: mlx-lm をインストールし、MLX 量子化モデルを実行する'
slug: bai-5-cai-dat-mlx-lm-va-chay-model-mlx-quantized
description: >-
  mlx-lm、mlx-vlmをインストールします。 Hugging Face MLX Community からモデルをダウンロードします。同じモデルの
  Ollama (llama.cpp) と mlx-lm の速度を比較します。 MLX
  のフォーマットセーフテンソルと量子化を理解します。チャット推論を実行します。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 2: MLX - Apple のネイティブ フレームワークによる 3 倍の高速化'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="720" cy="270" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="931.650635094611,97.5 931.650635094611,122.5 910,135 888.349364905389,122.5 888.349364905389,97.5 910,85" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: mlx-lm をインストールしてモデルを実行する</tspan>
      <tspan x="60" dy="42">MLX量子化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: MLX - Apple のネイティブ フレームワークによる 3 倍の高速化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

前回の記事では、MLX とは何か、そして MLX が高速である理由を理解しました。さあ、実際にインストールしてみましょう。 `mlx-lm`、Hugging Face からモデルをダウンロードし、MLX で直接 LLM 推論を実行します。

---

## 1.mlx-lmをインストールする

```bash
# Cài đặt mlx-lm (bao gồm mlx core)
pip3 install mlx-lm

# Cài thêm mlx-vlm cho vision models (tùy chọn)
pip3 install mlx-vlm

# Kiểm tra
python3 -c "import mlx_lm; print('mlx-lm ready!')"
```

> 💡 仮想環境の使用を推奨:
>
> ```bash
> python3 -m venv ~/mlx-env
> source ~/mlx-env/bin/activate
> pip install mlx-lm mlx-vlm
> ```

---

## 2. MLX コミュニティからモデルをダウンロードする

ハグフェイスにはコミュニティがあります [mlx-community](https://huggingface.co/mlx-community) モデルを MLX 形式に変換および定量化することを専門としています。

### CLI から直接ダウンロードして実行

```bash
# Chạy Llama 3.2 8B (4-bit quantized)
mlx_lm.generate \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit \
  --prompt "Viết hàm fibonacci bằng Python" \
  --max-tokens 500
```

### チャットモード (対話型)

```bash
mlx_lm.chat \
  --model mlx-community/Llama-3.2-3B-Instruct-4bit
```

最初の実行では、Hugging Face からモデルをダウンロードします (3B Q4 の場合は最大 2GB)。モデルは次の場所にキャッシュされます `~/.cache/huggingface/`。

### 人気の MLX モデル

```bash
# Llama 3.2
mlx_lm.chat --model mlx-community/Llama-3.2-3B-Instruct-4bit
mlx_lm.chat --model mlx-community/Llama-3.2-8B-Instruct-4bit

# Qwen 2.5
mlx_lm.chat --model mlx-community/Qwen2.5-7B-Instruct-4bit
mlx_lm.chat --model mlx-community/Qwen2.5-14B-Instruct-4bit

# Gemma 3
mlx_lm.chat --model mlx-community/gemma-3-4b-it-4bit

# Mistral
mlx_lm.chat --model mlx-community/Mistral-7B-Instruct-v0.3-4bit

# Phi-4
mlx_lm.chat --model mlx-community/phi-4-mini-instruct-4bit
```

---

## 3. Python で mlx-lm を使用する

### 基本的な推論

```python
from mlx_lm import load, generate

# Load model (tải lần đầu, cache lần sau)
model, tokenizer = load("mlx-community/Llama-3.2-3B-Instruct-4bit")

# Chat format
messages = [
    {"role": "system", "content": "Bạn là trợ lý AI thông minh, trả lời bằng tiếng Việt."},
    {"role": "user", "content": "Docker compose là gì?"}
]

prompt = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
)

# Generate
response = generate(
    model,
    tokenizer,
    prompt=prompt,
    max_tokens=500,
    temp=0.7,
)

print(response)
```

### ストリーミング出力

```python
from mlx_lm import load, stream_generate

model, tokenizer = load("mlx-community/Llama-3.2-3B-Instruct-4bit")

prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": "Giải thích Kubernetes trong 5 câu"}],
    tokenize=False,
    add_generation_prompt=True
)

# Stream từng token
for token_text in stream_generate(model, tokenizer, prompt=prompt, max_tokens=300):
    print(token_text, end="", flush=True)
print()
```

### 追跡指標

```python
from mlx_lm import load, generate
import time

model, tokenizer = load("mlx-community/Llama-3.2-8B-Instruct-4bit")

prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": "Write a Python function to sort a list"}],
    tokenize=False,
    add_generation_prompt=True
)

start = time.time()
response = generate(
    model, tokenizer,
    prompt=prompt,
    max_tokens=200,
    verbose=True,  # In metrics
)
elapsed = time.time() - start
print(f"\nTotal time: {elapsed:.2f}s")
```

出力例:

```
Prompt: 18 tokens, 842.3 tokens/s
Generation: 156 tokens, 54.2 tokens/s, 2.88s
Total time: 2.90s
```

---

## 4. MLX モデル形式を理解する

### モデルのフォルダー構造

```
~/.cache/huggingface/hub/models--mlx-community--Llama-3.2-3B-Instruct-4bit/
├── config.json          # Model config (architecture, hidden size...)
├── model.safetensors    # Weights (quantized)
├── tokenizer.json       # Tokenizer vocabulary
├── tokenizer_config.json
└── special_tokens_map.json
```

### SafeTensors 形式

MLX は **safetensors** 形式を使用します (Hugging Face による):

- pickle より安全 (任意のコードを実行しない)
- メモリマッピング可能 (高速にロードされるため、すべてを RAM に読み込む必要はありません)
- ハグフェイスエコシステムと互換性があります

### MLX での量子化

MLX は次の量子化レベルをサポートします。

```python
# Kiểm tra quantization của model đã load
import json
config = json.load(open("config.json"))
print(config.get("quantization", "No quantization info"))
```

|レベル |ビット |品質 |モデル名では |
|----------|--------|----------|------|
| 4ビット | 4 |良い (推奨) | `*-4bit` |
| 8ビット | 8 |とても良い | `*-8bit` |
| 3ビット | 3 |かなり | `*-3bit` |
| FP16 | 16 |ベスト |サフィックスなし |

---

## 5. 量子化モデルは自動的に変換されます

モデルに MLX バージョンがない場合は、自分で変換できます。

```bash
# Convert từ Hugging Face model sang MLX format
mlx_lm.convert \
  --hf-path meta-llama/Llama-3.2-3B-Instruct \
  --mlx-path ./my-llama-3.2-3b-4bit \
  --quantize \
  --q-bits 4

# Chạy model vừa convert
mlx_lm.chat --model ./my-llama-3.2-3b-4bit
```

### 他の量子化で変換する

```bash
# 8-bit (chất lượng cao, tốn RAM hơn)
mlx_lm.convert \
  --hf-path meta-llama/Llama-3.2-3B-Instruct \
  --mlx-path ./my-llama-3.2-3b-8bit \
  --quantize \
  --q-bits 8

# 3-bit (nhỏ nhất, giảm chất lượng)
mlx_lm.convert \
  --hf-path meta-llama/Llama-3.2-3B-Instruct \
  --mlx-path ./my-llama-3.2-3b-3bit \
  --quantize \
  --q-bits 3
```

---

## 6. 直接比較: Ollama と mlx-lm

同じモデル、同じプロンプト、同じデバイス上で実行します。

### スクリプトのベンチマーク

```python
import subprocess
import time
import json

PROMPT = "Explain what Docker Compose is and give an example docker-compose.yml"

# --- Benchmark Ollama ---
print("=== Ollama (llama.cpp) ===")
start = time.time()
result = subprocess.run(
    ["curl", "-s", "http://localhost:11434/api/generate",
     "-d", json.dumps({"model": "llama3.2", "prompt": PROMPT, "stream": False})],
    capture_output=True, text=True
)
ollama_time = time.time() - start
data = json.loads(result.stdout)
ollama_gen_speed = data["eval_count"] / (data["eval_duration"] / 1e9)
print(f"Time: {ollama_time:.2f}s")
print(f"Generation: {ollama_gen_speed:.1f} tok/s")
print(f"Tokens: {data['eval_count']}")

print()

# --- Benchmark MLX ---
print("=== MLX (mlx-lm) ===")
from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.2-3B-Instruct-4bit")
prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": PROMPT}],
    tokenize=False, add_generation_prompt=True
)

start = time.time()
response = generate(model, tokenizer, prompt=prompt, max_tokens=500, verbose=True)
mlx_time = time.time() - start
print(f"Total time: {mlx_time:.2f}s")
```

---

## 7. mlx-vlm を使用したビジョン モデル

```bash
# Cài mlx-vlm
pip3 install mlx-vlm
```

```python
from mlx_vlm import load, generate

# Load vision model
model, processor = load("mlx-community/Qwen2-VL-7B-Instruct-4bit")

# Phân tích hình ảnh
response = generate(
    model, processor,
    prompt="Describe this image in detail",
    image="path/to/image.jpg",
    max_tokens=500,
)
print(response)
```

---

## 8. キャッシュ管理

モデルは多くのスペースを占有します。キャッシュ管理:

```bash
# Xem dung lượng cache Hugging Face
du -sh ~/.cache/huggingface/hub/

# Xóa model cụ thể
rm -rf ~/.cache/huggingface/hub/models--mlx-community--Llama-3.2-3B-Instruct-4bit

# Dùng huggingface-cli (cài sẵn với mlx-lm)
huggingface-cli scan-cache
huggingface-cli delete-cache
```

---

## 概要

|コマンド |説明 |
|------|------|
| `mlx_lm.chat --model <name>` |インタラクティブなチャット |
| `mlx_lm.generate --model <name> --prompt "..."` |一度生成 |
| `mlx_lm.convert --hf-path <model> --quantize` |モデルを変換する |
| `load(model_name)` | Python でモデルをロードする |
| `generate(model, tokenizer, ...)` |テキストを生成する |
| `stream_generate(...)` |ストリーミングを生成 |

---

## 演習

1. mlx-lmをインストールし、ダウンロードします `mlx-community/Llama-3.2-3B-Instruct-4bit` そしてチャット
2. 使用する Python スクリプトを作成します `load()` + `generate()` 簡単なチャットボットを作成する（ループ入力）
3. 同じプロンプトを使用した同じモデルの Ollama と mlx-lm の速度を比較します。
4. モデル Qwen 2.5 7B MLX をダウンロードし、Llama 3.2 と品質を比較します。
5. (おまけ) 小型モデルを Hugging Face から MLX 形式に変換する

**次の記事**: Ollama + MLX バックエンドの組み合わせ →
