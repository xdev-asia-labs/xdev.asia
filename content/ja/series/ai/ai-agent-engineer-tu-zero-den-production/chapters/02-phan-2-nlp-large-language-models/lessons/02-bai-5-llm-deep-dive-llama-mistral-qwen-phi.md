---
id: 019e0a01-bb05-7001-c001-ee0500000001
title: 'レッスン 5: LLM の詳細 - LLaMA、ミストラル、クウェン、ファイ'
slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
description: >-
  オープンソース LLM の詳細な比較: LLaMA 3、Mistral、Qwen 2.5、Phi-3/4。アーキテクチャの違い、ベンチマーク、使用例。
  Ollama、vLLM を使用してローカルで実行します。商用モデル: GPT-4、クロード、ジェミニ。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: NLP と大規模言語モデル (LLM)'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **2023 年、LLaMA の漏洩により、オープンソース AI が爆発的に増加します。 2025 年には、ラップトップでモデル 70B を実行できるようになります。** メタ、ミストラル、アリババ、マイクロソフトの間の競争により、状況は完全に変わりました。この記事では、アーキテクチャ、ベンチマーク、およびこれらのモデルを**実際に実行**する方法について詳しく説明します。 `ollama run` vLLM を使用して実稼働環境を提供します。

## 1. Landscape LLM 2024-2026 — オープンソース vs 商用

```text
LLM Evolution Timeline:

2023 Q1         2023 Q3          2024 Q1-Q2        2024 Q3-2025      2025-2026
┌─────────┐   ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  ┌─────────────┐
│ LLaMA 1 │──▶│ LLaMA 2      │─▶│ LLaMA 3      │─▶│ LLaMA 3.1-  │─▶│ LLaMA 4     │
│ GPT-4   │   │ Mistral 7B   │  │ Mixtral 8x22B│  │ 3.3, Qwen2.5│  │ Qwen 3      │
│ (leaked)│   │ Qwen 1,Phi-2 │  │ Phi-3,Claude3│  │ Mistral Lg  │  │ Phi-4       │
└─────────┘   └──────────────┘  └──────────────┘  └─────────────┘  └─────────────┘
GPT-4 chỉ     Open-source       Gap thu hẹp       Open ≈ Closed    Open dẫn đầu
qua API        bùng nổ          coding, math      nhiều task        nhiều benchmark
```

|基準 |オープンウェイト |クローズドソース |
|----------|---------------|----------|
| **代表者** | LLaMA、ミストラル、クウェン、ファイ | GPT-4o、クロード 4、ジェミニ 2 |
| **コスト** |インフラコスト、トークンごとの手数料なし |トークンごとの支払い |
| **カスタマイズ** |微調整、マージ、クオンタイズ |制限付き (システム プロンプト、RAG) |
| **プライバシー** |データはオンプレミスに留まる | API経由で送信されるデータ |
| **こんな用途に最適** |プロダクションは自律的でドメイン固有です |高速プロトタイプ、SOTA 品質 |

＃＃＃１．１．用語を区別する必要がある

- **オープンソース**: コード + 重み + トレーニング データ (まれ - OLMo、BLOOM のみ)
- **無差別ウェイト**: ウェイトはリリースされますが、トレーニング データはありません (LLaMA、Mistral、Qwen)
- **オープンアクセス**: API 経由で無料で使用できますが、重みはダウンロードされません
- **独自仕様**: なし — API のみ (GPT-4、クロード)

## 2. アーキテクチャ パターン — デコーダのみ、MoE、GQA、RoPE、SWA

＃＃＃２．１．デコーダのみ + GQA

```text
Decoder-Only (GPT, LLaMA, Mistral):

Input tokens → Embeddings + RoPE
        │
        ▼
┌───────────────────────────────────────┐
│  Masked Self-Attention (causal)  │◄─ Chỉ nhìn tokens TRƯỚC
├───────────────────────────────────────┤
│  Feed-Forward (SwiGLU)           │
├───────────────────────────────────────┤
│  RMSNorm (pre-norm)              │
└───────────────────────────────────────┘
        │  × N layers (32-80)
        ▼
  Linear → Softmax → Next token

Grouped-Query Attention (GQA) — giảm KV cache:

MHA (cũ):        GQA (LLaMA 3):       MQA:
Q1 Q2 Q3 Q4      Q1 Q2 | Q3 Q4        Q1 Q2 Q3 Q4
│  │  │  │         \ | /   \ | /         \ |  | /
K1 K2 K3 K4        K1,2    K3,4           K_shared
V1 V2 V3 V4        V1,2    V3,4           V_shared
KV cache: 4×d     KV cache: 2×d         KV cache: 1×d
```

> **重要な洞察:** GQA はキャッシュ KV を 4 ～ 8 分の 1 に削減しますが、品質はほとんど変わりません。これがモデル 70B がコンシューマ GPU で実行できる理由です。

＃＃＃２．２．回転位置埋め込み (RoPE)

**RoPE** は、複素空間内でベクトルを回転させることで位置をエンコードします。利点: 自然な相対位置、コンテキストの長さを簡単に拡張できます。 LLaMA、Mistral、Qwen で使用されており、最新のすべての LLM の標準位置エンコーディングです。

＃＃＃２．３．スライディング ウィンドウ アテンション (SWA) と MoE

```text
SWA (Mistral): mỗi layer attend W tokens gần nhất
  Layer 1: window = 4096 → mỗi token "thấy" 4K tokens
  Layer N: effective range = N × W = 32 × 4096 = 131K tokens!
  Memory: O(n×w) thay vì O(n²) — tiết kiệm VRAM lớn

MoE (Mixtral 8×7B): sparse — chỉ activate 2/8 experts mỗi token
  Input → Router (gating) → top-2 experts → weighted sum
  Total params: 47B | Active: ~13B/token
  Speed ≈ 13B dense | Quality ≈ 70B dense
```

|パターン | | で使用されるメリット |
|----------|----------|----------|
| **GQA** | LLaMA 3、ミストラル |キャッシュ KV が 4 ～ 8 倍に減少 |
| **ロープ** |ほとんどの LLM |コンテキストの拡張は簡単です |
| **SWA** |ミストラル 7B | O(n×w) メモリ |
| **萌え** |ミストラル、Qwen-MoE |高速推論、スケーラブル |
| **SwiGLU** | LLaMA、ミストラル | ReLU よりも優れたアクティベーション |

## 3. LLaMA ファミリ (メタ) — オープンソースの柱

```text
LLaMA 1 (Feb'23)      LLaMA 2 (Jul'23)      LLaMA 3 (Apr'24)
├─ 7B-65B              ├─ 7B, 13B, 70B       ├─ 8B, 70B (15T tokens!)
├─ Research only       ├─ Commercial license  ├─ GQA, RoPE, 128K vocab
└─ Leaked → bùng nổ   └─ RLHF, 4K ctx       └─ 128K ctx (3.1), tool use

LLaMA 3.2 (Sep'24): 1B/3B (edge) + 11B/90B (vision!)
LLaMA 3.3 (Dec'24): 70B cải thiện multilingual, instruction following
```

|特長 |ラマ3 8B |ラマ3 70B | LLaMA 3.1 405B |
|----------|-----------|---------------|----------------|
|レイヤー | 32 | 80 | 126 |
|隠れた薄暗い | 4096 | 8192 | 16384 |
| KVヘッド(GQA) | 8 | 8 | 16 |
|コンテキスト | 8K→128K | 8K→128K | 128K |
|トレーニングトークン | 15T+ | 15T+ | 15T+ |

**LLaMA が重要な理由** 最大のオープンソース AI エコシステム。ほとんどの微調整モデルは LLaMA ベースに基づいています: Alpaca (Stanford)、Vicuna (LMSYS)、CodeLlama、Llama-Guard (安全性)、WizardLM。主なイノベーション: RMSNorm (プレノーム)、SwiGLU アクティベーション、RoPE、GQA、128K 語彙。ライセンス: Llama Community — 7 億 MAU 未満は無料。

## 4. ミストラルファミリー — 効率こそが重要

Mistral AI (フランスのスタートアップ、元 DeepMind/Meta) — 哲学: **小さなモデル、大きなパフォーマンス**。

|モデル |サイズ |タイプ |コンテキスト |ハイライト |
|----------|----------|----------|----------|-------------|
|ミストラル 7B | 7B |密 | 32K | SWA、LLaMA 2 13B に勝利 |
|ミストラル 8×7B | 47B (13B アクティブ) |環境省 | 32K |最初の MoE オープン |
|ミストラル 8×22B | 141B (39B アクティブ) |環境省 | 64K |最強のオープンMoE |
|ミストラル・ラージ | ～120B |密 | 128K | GPT-4付近 |
|コードストラル | 22B |密 | 32K |コードに特化した |

**Mistral 7B のイノベーション:** SWA (ウィンドウ = 4096) + GQA (8 KV ヘッド) + ローリング バッファ キャッシュ (固定メモリ、拡張なし) + プリフィル チャンキング → 7B モデルは、ほとんどのベンチマークで LLaMA 2 13B を上回ります。 Mixtral 8×7B は MoE が実用的であることを証明しています。速度は 13B 密度、品質はほぼ 70B 密度です。

## 5. Qwen Family (Alibaba) — 多言語チャンピオン

Qwen 2.5 (2024 年 9 月) は、Open LLM Leaderboard のトップに常にランクされており、特に多言語 (29 以上の言語、CJK、ベトナム語) に優れています。

|特長 |詳細 |
|----------|----------|
|サイズ | 0.5B → 72B (両方の MoE バージョン) |
|トレーニング | 18T トークン、厳選された多言語 |
|コンテキスト | 128K ネイティブ (YARN RoPE) |
|コーディング | Qwen2.5-Coder — 最上位のオープン コーディング モデル |
|ライセンス | **Apache 2.0** (最も普及している) |
|ツールの使用 |ネイティブ関数呼び出し、JSON モード |

**QwQ** (32B) — OpenAI o1 スタイルの推論モデルですが、オープンウェイトです。答える前に、特に数学やコードなど、多くのステップを「考えて」ください。モデルは自らに質問し、各ステップを検証して、最終結果を出力します。

```text
QwQ reasoning flow:
  Prompt: "Sum of primes < 20?"
  → "Let me think step by step..."
  → "Primes: 2, 3, 5, 7, 11, 13, 17, 19"
  → "Wait, is 9 prime? 9 = 3×3, no."
  → "Sum = 2+3+5+7+11+13+17+19 = 77"
  → "The answer is 77."
  
  Self-verification → fewer errors on complex tasks
```

## 6. Phi ファミリー (Microsoft) — 小型モデル、大きなパフォーマンス

哲学: **データ品質 > モデル サイズ** — 「教科書品質」 + 合成データでトレーニングします。

```text
Phi Philosophy:  Web crawl (noisy) × Massive scale → okay model
                 vs
                 Curated data × Modest scale → GREAT model
```

|モデル |サイズ |コンテキスト | MMLU |ハイライト |
|----------|----------|----------|------|----------|
|ファイ2 | 2.7B | 2K | 56.7 |一部の 7B モデルを上回る |
|ファイ-3 ミニ | 3.8B | 128K | 68.8 |オンデバイス、拡張 ctx |
|ファイ-3 ミディアム | 14B | 128K | 78.0 | GPT-3.5付近 |
|ファイ-3.5 MoE | 42B (6.6B アクティブ) | 128K | 78.9 |まばらなMoE |
| **ファイ-4** | **14B** | 16K | **81.4** | **14B は 70B と競合します!** |

Phi-4 は、MMLU 81.4、MATH 80.4、HumanEval 82.6 を達成しました。推論タスクでは、LLaMA 3.1 70B に相当します。秘密: **合成データ生成パイプライン** は、大規模な LLM から高品質のトレーニング データを作成し、トレーニング前にフィルターと検証を行います。

## 7. 商用モデル — GPT-4o、クロード、ジェミニ

|モデル |コンテキスト |強み |価格（100万トーク） |
|----------|-----------|-----------|--------|
| GPT-4o | 128K |汎用、高速 | 2.5 ドルイン / 10 ドルアウト |
| GPT-4o-mini | 128K |予算に優しい | $0.15 / $0.60 |
| o1 / o3 | 200K |深い推論 | $15 / $60 |
|クロード 3.5 ソネット | 200K |コーディング、分析 | 3ドル / 15ドル |
|クロード 4 オーパス | 200K |エージェント、ツールの使用 | $15 / $75 |
|ジェミニ 2 フラッシュ | 1M |スピード、巨大なコンテキスト | $0.075 / $0.30 |
|ジェミニ 2 プロ | 2M |ロングコンテキストキング | $1.25 / $10 |

## 8. メガベンチマークテーブル

|モデル | MMLU |ヒューマンエヴァル | GSM8K |アリーナELO |
|----------|----------|---------------|----------|----------|
| GPT-4o | 88.7 | 90.2 | 97.8 | 1285 |
|クロード 4 オーパス | 88.1 | 92.0 | 96.5 | 1290 |
|ジェミニ 2 プロ | 87.5 | 85.0 | 96.0 | 1270 |
| LLaMA 3.1 405B | 85.2 | 89.0 | 96.8 | 1210 |
|クウェン 2.5 72B | 83.1 | 86.4 | 95.8 | 1190 |
|ファイ4 (14B) | 81.4 | 82.6 | 95.3 | 1150 |
| LLaMA 3.3 70B | 82.0 | 84.5 | 95.1 | 1180 |
|ミストラル・ラージ | 81.2 | 82.0 | 93.0 | 1160 |
|ファイ-3 ミニ (3.8B) | 68.8 | 58.5 | 82.5 | 1010 |

ベンチマークの説明: **MMLU** = 知識 57 科目、**HumanEval** = Python コード遺伝子、**GSM8K** = 数学的推論、**Arena ELO** = 実際の人間の好み (最も信頼性が高い)。

> **注意:** ベンチマークは「ゲーム化」される可能性があります (トレーニング データの汚染、ベンチマーク固有の調整)。実際のユーザーからの Arena ELO が最も信頼できます。

## 9. LLM ローカルを実行します — Ollama、vLLM、llama.cpp

最も重要な部分: **実践**。 LLM をコンピュータ上で直接実行する方法を学びます。

＃＃＃９．１． Ollama — セットアップは 5 分

```bash
# Install
curl -fsSL https://ollama.com/install.sh | sh  # Linux
brew install ollama                              # macOS

# Chạy models
ollama run llama3.1          # LLaMA 3.1 8B (~4.7GB)
ollama run mistral           # Mistral 7B
ollama run qwen2.5           # Qwen 2.5 7B
ollama run phi4              # Phi-4 14B (~8GB)
ollama run qwen2.5-coder     # Coding optimized
ollama run llama3.1:70b      # 70B — cần ~40GB VRAM
```

＃＃＃９．２． Ollama API — OpenAI 互換

```python
from openai import OpenAI

# Ollama chạy OpenAI-compatible API tại localhost:11434
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama",  # Không cần real key
)

response = client.chat.completions.create(
    model="llama3.1",
    messages=[
        {"role": "system", "content": "Trả lời ngắn gọn bằng tiếng Việt."},
        {"role": "user", "content": "GQA là gì trong Transformer?"},
    ],
    temperature=0.7,
)
print(response.choices[0].message.content)
```

＃＃＃９．３． vLLM — 実稼働サービス

**vLLM** (カリフォルニア大学バークレー校) は最速の推論エンジンです。効率的な KV キャッシュ管理のために **PagesAttendant** を使用し、継続的なバッチ処理をサポートします。

```bash
pip install vllm

# Serve với OpenAI-compatible API
python -m vllm.entrypoints.openai.api_server \
    --model meta-llama/Llama-3.1-8B-Instruct \
    --port 8000 \
    --gpu-memory-utilization 0.9
```

```python
# Gọi vLLM — same OpenAI format
client = OpenAI(base_url="http://localhost:8000/v1", api_key="dummy")
response = client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[{"role": "user", "content": "Hello!"}],
)
```

＃＃＃９．４． llama.cpp — CPU 推論と GGUF

**llama.cpp** (Georgi Gerganov) を使用すると、純粋な CPU または混合 CPU/GPU で LLM を実行できます。形式 **GGUF** は、量子化モデルの標準です。

```bash
brew install llama.cpp  # macOS

# Download GGUF model từ Hugging Face
huggingface-cli download \
  bartowski/Meta-Llama-3.1-8B-Instruct-GGUF \
  Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \
  --local-dir ./models/

# Chạy interactive chat
llama-cli -m ./models/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf \
  -c 4096 --chat-template llama3 -i
```

＃＃＃９．５。ハグフェイストランスフォーマー

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

model_name = "microsoft/Phi-4"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name, torch_dtype=torch.bfloat16, device_map="auto",
)

messages = [{"role": "user", "content": "Explain MoE briefly."}]
inputs = tokenizer.apply_chat_template(
    messages, return_tensors="pt", add_generation_prompt=True
).to(model.device)
outputs = model.generate(inputs, max_new_tokens=300, temperature=0.7, do_sample=True)
print(tokenizer.decode(outputs[0][inputs.shape[1]:], skip_special_tokens=True))
```

＃＃＃９．６。比較ツール

|ツール |最適な用途 |スピード |簡単 | GPU？ |
|----------|-----------|----------|----------|----------|
| **オラマ** |開発、実験 |良い | ⭐⭐⭐⭐⭐ |オプション |
| **vLLM** |生産サービス | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |はい |
| **ラマ.cpp** | CPU/エッジ |良い | ⭐⭐⭐ |オプション |
| **トランスフォーマー** |微調整、調査 |良い | ⭐⭐⭐⭐ |おすすめ |

## 10. 量子化 — GGUF、GPTQ、AWQ

**量子化**により、モデルの重みの精度が低下します: FP16 (16 ビット) → INT4 (4 ビット)。結果: モデルが 3 ～ 4 倍小さくなり、推論が高速になりますが、品質が低下する可能性があります。これは、コンシューマ ハードウェアで大規模なモデルを実行する場合に**必須**のテクニックです。

```text
LLaMA 3.1 8B (FP16): ~16 GB
        │
  ┌─────┼─────────────────┐
  ▼     ▼                 ▼
GGUF   GPTQ              AWQ
(CPU+) (GPU)              (GPU)
Q4_K_M: ~4.9GB   INT4: ~4.5GB   INT4: ~4.3GB
Best: llama.cpp   Best: HF        Best: vLLM
      Ollama            AutoGPTQ         Fastest
```

|量子 |ビット |サイズ(8B) |品質 |使用例 |
|----------|----------|---------------|----------|----------|
| Q3_K_M | 3-4 | ～3.9 GB | ~90% |限られた VRAM |
| **Q4_K_M** | 4-5 | **~4.9 GB** | **~95%** | **スイートスポット** |
| Q5_K_M | 5-6 | ～5.7 GB | ~97% |より良い品質 |
| Q8_0 | 8 | ～8.5 GB | ~99.5% |ほぼロスレス |
| FP16 | 16 | ～16 GB | 100% |ベースライン |

```bash
# Tạo custom model với Ollama Modelfile
cat > Modelfile << 'EOF'
FROM llama3.1:8b-instruct-q4_K_M
PARAMETER temperature 0.7
PARAMETER num_ctx 8192
SYSTEM "Bạn là trợ lý AI, trả lời bằng tiếng Việt, ngắn gọn kèm ví dụ."
EOF

ollama create my-assistant -f Modelfile
ollama run my-assistant "Giải thích MoE là gì?"
```

> **経験則:** ほとんどのユースケースでは **Q4_K_M** を使用してください。さらなる品質が必要: Q5_K_M。 VRAM 制限: Q3_K_M。

## 11. 適切なモデルを選択する — デシジョン ツリー

「最適なモデル」は存在しません。ユースケース、予算、ハードウェアに応じて **最適なモデル** があるだけです。

```text
START: Bạn cần gì?
├─► Prototype nhanh → GPT-4o-mini / Claude 3.5 Sonnet (API)
├─► Production on-premise
│   ├─ GPU (A100+)  → vLLM + LLaMA 3.1 70B / Qwen 2.5 72B
│   └─ No GPU       → Ollama + Phi-4 (Q4) / LLaMA 3.1 8B (Q4)
├─► Coding → Qwen2.5-Coder (local) / Claude 4 (API)
├─► Multilingual (CJK, Vietnamese) → Qwen 2.5
├─► Mobile/Edge (<4GB) → Phi-3 Mini / LLaMA 3.2 1B-3B
├─► Math/Reasoning → QwQ 32B / o1-mini (API) / Phi-4
└─► Longest context → Gemini 2 (1M-2M) / Claude 4 (200K)
```

### 11.1。ハードウェア要件

|モデルサイズ | VRAM (FP16) | VRAM (第 4 四半期) | RAM (CPU) |
|----------|---------------|---------------|-----------|
| 1-3B | 4GB | 2GB | 4GB |
| 7-8B | 16GB | 6GB | 8GB |
| 13-14B | 28GB | 10GB | 16GB |
| 70-72B | 140GB | 42GB | 64GB |
| 405B | 810GB | 230GB | 256GB以上 |

```text
MacBook M-series (8GB):   → Phi-3 Mini, LLaMA 3.2 3B (Q4)
MacBook M-series (16GB):  → LLaMA 3.1 8B (Q4), Mistral 7B
MacBook M-series (32GB):  → Phi-4, Qwen 2.5 14B (Q4)
RTX 4090 (24GB):          → LLaMA 3.1 8B (FP16), 70B (Q4)
A100 (80GB):              → LLaMA 3.1 70B (FP16)
8× H100:                  → LLaMA 3.1 405B (FP16)
```

## 概要

```text
Key Takeaways:

1. ARCHITECTURE: Decoder-only + GQA + RoPE = standard recipe
   MoE = quality lớn compute nhỏ | SWA = memory-efficient

2. OPEN-SOURCE FAMILIES:
   LLaMA (Meta) → ecosystem lớn nhất
   Mistral → efficiency king, SWA + MoE pioneer
   Qwen (Alibaba) → best multilingual, Apache 2.0
   Phi (Microsoft) → small model big performance

3. CHẠY LOCAL: Ollama (5 phút) → vLLM (production) → llama.cpp (CPU)

4. QUANTIZATION: Q4_K_M = sweet spot (3× nhỏ, ~95% quality)

5. Không có "best model" — chỉ có "best fit" cho context cụ thể
```

## 演習

### 演習 1: モデルの実行と比較 (30 分)

1. **Ollama** をインストールし、3 つのモデルをプルします。 `llama3.1`、 `qwen2.5`、 `phi4`
2. 3 つすべてに同じ質問をします (例: 「トランスフォーマーを 5 つの文で説明してください」)
3. 応答品質、速度、スタイルを比較する

### 演習 2: Ollama API 統合 (30 分)

1. **OpenAI SDK** を使用して Ollama ローカルを呼び出す Python スクリプトを作成します。
2.実装する `compare_models(prompt, models)` — 同じプロンプトを複数のモデルに送信し、結果 + 経過時間を返します。
3. 各モデルの **トークン/秒** を測定します

### 演習 3: 量子化の実践 (20 分)

1. ベトナム語のシステム プロンプトを使用してカスタム **Modelfile** を作成します
2. モデルの構築: `ollama create my-assistant -f Modelfile`
3. モデルの実行時に VRAM/RAM の使用量を測定します。

### 演習 4: モデルの選択 (20 分)

各シナリオのモデルとデプロイメントを選択し、その理由を説明します。

1. **ヘルスケア チャットボット** — データはオンプレミスで、低予算で、正確である必要があります
2. **モバイル AI アシスタント** — Android 4GB RAM、オフライン モード
3. **研究ラボ** — 中国語 + 英語の論文、長いコンテキストを分析します (>50,000 トークン)
4. **電子商取引のサポート** — 1 分あたり 1000 以上の同時リクエスト、高速応答
5. **コード レビュー ツール** — 50 人の開発者チームの PR をさまざまな言語でレビューします

### 演習 5: ベンチマーク調査 (20 分)

1. アクセス [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
2. 上位 5 モデルを比較します。どのモデルがどのベンチマークをリードしていますか?
3.「隠れた宝石」を見つける：15B未満だが高ランクのモデル
4. 傾向を分析した短いレポートを作成します: MoE 対高密度、小規模対大規模

