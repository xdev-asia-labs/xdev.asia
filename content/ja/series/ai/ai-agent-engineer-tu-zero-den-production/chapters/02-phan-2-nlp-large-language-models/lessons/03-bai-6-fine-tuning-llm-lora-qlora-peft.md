---
id: 019e0a01-bb06-7001-c001-ee0600000001
title: 'レッスン 6: LLM の微調整 — LoRA、QLoRA、PEFT'
slug: bai-6-fine-tuning-llm-lora-qlora-peft
description: >-
  微調整戦略: 完全な微調整 vs パラメーター効率的。 LoRA、QLoRA、PEFT。データセットの準備、Hugging Face TRL
  によるトレーニング。評価指標。アダプターを結合します。ドメイン固有のタスク向けに Mistral/LLaMA を微調整する練習をします。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: NLP と大規模言語モデル (LLM)'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **GPT-4 はすべてを知っていますが、内部データについては何も知りません。** 事前トレーニングされたモデルが基礎であり、微調整はそれをドメインの専門家に変えるステップです。問題？完全な微調整 LLaMA 3 70B には 140GB 以上の VRAM が必要です。 LoRA は **0.1% パラメーター** をトレーニングするだけで済みます。 QLoRA は **シングル GPU 24GB** まで押し下げられます。この記事では、理論から完全なコードまでを説明します。Hugging Face TRL を使用してプライベート データに基づいて Mistral 7B を微調整します。

## 1. なぜ微調整するのか? — 事前学習済みモデルでは不十分な場合

＃＃＃１．１．事前学習済みモデルの制限

事前トレーニングされた LLM は、**インターネット規模のデータ** — Wikipedia、GitHub、書籍、フォーラムでトレーニングされます。しかし、彼らには次のものが欠けています。

- **特定の分野の知識**: 医療用語、ベトナムの法律、内部コードベース
- **一貫した出力形式**: 修正された JSON スキーマ、企業レポート テンプレート
- **トーンとスタイル**: カスタマー サポート チャットボットはテクニカル チャットボットとはまったく異なります
- **プライベート データ**: モデルは、オンライン上に一度も出現したことのない内部データについては何も知りません。

```text
Khi nào cần Fine-tuning vs Prompting vs RAG?

                    ┌─────────────────────┐
                    │  Task cần gì?       │
                    └─────────┬───────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌────────────┐  ┌──────────────┐  ┌──────────────┐
     │ Knowledge  │  │   Behavior   │  │  Both        │
     │ mới        │  │   mới        │  │              │
     └─────┬──────┘  └──────┬───────┘  └──────┬───────┘
           │                │                  │
           ▼                ▼                  ▼
       ┌───────┐     ┌────────────┐     ┌────────────┐
       │  RAG  │     │ Fine-tune  │     │ Fine-tune  │
       └───────┘     └────────────┘     │  + RAG     │
                                        └────────────┘

Decision Matrix:
┌──────────────────┬──────────┬────────────┬───────────────┐
│ Yêu cầu         │ Prompting│ RAG        │ Fine-tuning   │
├──────────────────┼──────────┼────────────┼───────────────┤
│ Thêm knowledge  │ ✗        │ ✓ (best)   │ ✓ (expensive) │
│ Thay đổi style  │ ~        │ ✗          │ ✓ (best)      │
│ Output format    │ ~        │ ✗          │ ✓ (best)      │
│ Giảm latency    │ ✗        │ ✗          │ ✓             │
│ Giảm token cost │ ✗        │ ✗          │ ✓             │
│ Setup nhanh     │ ✓ (best) │ ✓          │ ✗             │
└──────────────────┴──────────┴────────────┴───────────────┘
```

＃＃＃１．２．実際の例

|使用例 |なぜ微調整するのでしょうか? |
|----------|----------|
|ベトナムの医療チャットボット |ベトナムの医療用語を理解し、正しい形式で回答する必要があります |
|内部フレームワークのコードアシスタント | RAG だけでは十分ではありません - コーディング パターンを「理解する」モデルが必要です |
|サポートメールを分類する |一貫した JSON 出力、低レイテンシ、API コストなし |
|財務諸表の概要 |ドメイン固有の用語 + 厳密な形式 |

> **重要な洞察:** 微調整によりモデルの**動作**が変化します。 RAG は **知識**を変えます。 **コンテキスト**の変更を求めるプロンプト。 3 つのテクニックは相互に置き換えるのではなく、相互に補完します。

## 2. 完全な微調整とパラメータ効率の良い微調整 (PEFT)

＃＃＃２．１．完全な微調整 - ブルートフォースアプローチ

完全な微調整では、モデルの**すべてのパラメータ**が更新されます。 LLaMA 3 8B では、**80 億パラメータ**になります。

```text
Full Fine-tuning Memory Requirements:

Model Parameters:  8B × 4 bytes (FP32)  = 32 GB
              or   8B × 2 bytes (BF16)  = 16 GB

Optimizer States (AdamW):
  - Momentum (m):      8B × 4 bytes     = 32 GB
  - Variance (v):      8B × 4 bytes     = 32 GB

Gradients:            8B × 4 bytes       = 32 GB

Activations (vary):   ~10-30 GB (batch, seq_len dependent)

TOTAL (FP32):    32 + 32 + 32 + 32 + ~20 = ~148 GB VRAM
TOTAL (BF16):    16 + 32 + 32 + 16 + ~20 = ~116 GB VRAM

→ Cần 4× A100 80GB hoặc 2× H100 80GB cho LLaMA 8B
→ LLaMA 70B? 10-16× A100 80GB → ~$30-50/hour cloud
```

＃＃＃２．２． PEFT — 少ないトレーニングでより効果的

**パラメータ効率の良い微調整 (PEFT)** は、パラメータのごく一部 (通常はモデル全体の **0.1% ～ 1%**) のみをトレーニングします。

|基準 |完全な微調整 | PEFT (LoRA/QLoRA) |
|----------|------|--------|
| **トレーニング可能なパラメータ** | 100% (8B) | 0.1-1% (8-80M) |
| **VRAM (LLaMA 8B)** | ~116 GB (BF16) | ~6-16 GB |
| **トレーニング時間** |時間-日 (マルチ GPU) |時間 (シングル GPU) |
| **GPU が必要です** | 4-8×A100 | 1× RTX 4090/A100 |
| **クラウドコスト (80 億)** | $50-200 | 5～20ドル |
| **壊滅的な忘れのリスク** |曹操 |低い |
| **アダプターの交換が簡単** |いいえ — 完全な新しいモデル |はい - 少量のアダプター交換のみ |
| **品質** |最高 (データが十分な場合) |フル FT と比較して 95 ～ 99% |

> **重要なポイント:** PEFT は、**1/10 のコスト**で最大 95% の品質の完全な微調整を実現します。数十万のサンプルと多額の予算がない限り、PEFT が常にデフォルトの選択肢になります。

## 3. LoRA の詳細 - 低ランクの適応

＃＃＃３．１．中心となるアイデア — 行列分解

**LoRA (低ランク適応)** — Microsoft Research の論文 (Hu et al.、2021)。核となるアイデア:

> 微調整する場合、**重みの変更には本質的に低いランク**があります。大きな行列 W を更新する代わりに、2 つの小さな行列の積を分解して変更します。

```text
LoRA Math Intuition:

Standard fine-tuning:
  W' = W + ΔW          (ΔW has same shape as W)
  W ∈ ℝ^(d×d)         (ví dụ: 4096 × 4096 = 16.7M params)

LoRA decomposition:
  W' = W + BA           (freeze W, chỉ train B và A)
  A ∈ ℝ^(r×d)          (ví dụ: r=16 → 16 × 4096 = 65K)
  B ∈ ℝ^(d×r)          (ví dụ: 4096 × 16 = 65K)
  ΔW = BA ∈ ℝ^(d×d)   (full-rank approximation)

Params so sánh:
  ΔW trực tiếp:  d × d = 4096 × 4096 = 16,777,216  params
  LoRA (r=16):   2 × d × r = 2 × 4096 × 16 = 131,072  params
  → Giảm 128×! (chỉ 0.78% original)

Scaling factor:
  h = Wx + (α/r) · BAx
  α (lora_alpha): scaling hyperparameter, thường α = 2×r

Hình dung:

  Input x ──────────────────── W (frozen) ────────── + ──▶ Output h
     │                                                ▲
     │                                                │
     └──▶ A (down-project) ──▶ B (up-project) ──────┘
          d → r (compress)      r → d (expand)
          ℝ^(r×d)               ℝ^(d×r)
          
     r = rank (4, 8, 16, 32, 64)
     Nhỏ hơn → ít params hơn, nhưng có thể mất expressiveness
```

＃＃＃３．２． LoRA を適用する場所 - ターゲット モジュール

Transformer では、各注目レイヤーには 4 つの射影行列があります。 LoRA は次の 1 つ以上に適用されます。

```text
Attention Block Target Modules:

Input ──▶ ┌─── q_proj (Query)  ──┐
           ├─── k_proj (Key)    ──┤──▶ Attention ──▶ o_proj (Output)
           └─── v_proj (Value)  ──┘
           
MLP Block:
Input ──▶ gate_proj ──▶ SiLU ──▶ × ──▶ down_proj ──▶ Output
           up_proj ────────────▶ ┘

Recommended Target Modules:
┌────────────────┬───────────┬──────────────────────────────┐
│ Target         │ Impact    │ Khi nào dùng                │
├────────────────┼───────────┼──────────────────────────────┤
│ q_proj, v_proj │ Cao       │ Default choice, paper gốc   │
│ + k_proj       │ Cao hơn   │ Thêm ~33% params, nhích     │
│ + o_proj       │ Marginal  │ Thêm nếu budget cho phép    │
│ + gate, up,    │ Cao nhất  │ "all-linear" — best quality │
│   down proj    │           │ nhưng 3× params so default   │
└────────────────┴───────────┴──────────────────────────────┘

Ví dụ thực tế (Mistral 7B, r=16):
  - q_proj + v_proj only:      ~4.2M trainable params
  - All attention + MLP:       ~21M trainable params  
  - Tổng model: 7.24B → train 0.06% - 0.3%
```

＃＃＃３．３． LoRA ハイパーパラメータ

|ハイパーパラメータ |意味 |人気の値 |推奨事項 |
|--------------|--------|---------------|---------------|
| `r` (ランク) |分解のランク | 4、8、16、32、64 |ほとんどのタスクでは 16 ～ 32 |
| `lora_alpha` |スケーリング係数 | 16、32、64 |通常 = 2×r |
| `lora_dropout` | LoRA レイヤーでのドロップアウト | 0.0、0.05、0.1 |過学習の場合は 0.05 ～ 0.1 |
| `target_modules` |レイヤーは LoRA を適用します | q_proj、v_proj、... |最高品質の「すべて」 |
| `bias` |トレーニングバイアスはありません。 "なし"、"すべて"、"lora_only" | "なし" (デフォルト) |
| `task_type` |タスクの種類 | CAUSAL_LM、SEQ_CLS |生成用の CAUSAL_LM |

> **試験のヒント:** `r` 高いほど**必ずしも良いとは限りません**。通常は r=16 で十分です。 r=64 を増やすことは、データセットが大きく (サンプルが 50,000 を超える)、タスクが複雑な場合にのみ役立ちます。 r=256 は完全な微調整とほぼ同等ですが、速度が遅くなります。

## 4. QLoRA — 4 ビット量子化 + LoRA

＃＃＃４．１． QLoRA: 3 つの主要なイノベーション

**QLoRA** (Dettmers et al.、2023) は量子化と LoRA を組み合わせており、単一の 48GB GPU で 65B モデリングを微調整できます。

```text
QLoRA = 3 innovations:

1. NF4 (4-bit NormalFloat):
   ┌─────────────────────────────────────────────────┐
   │  FP16 weights → quantize → 4-bit NF4           │
   │  Dựa trên: weight distributions are ~Normal     │
   │  Optimal cho normal distribution → ít info loss  │
   │                                                  │
   │  FP16: 16 bits → NF4: 4 bits = 4× compression  │
   │  7B model: 14GB → 3.5GB                         │
   └─────────────────────────────────────────────────┘

2. Double Quantization:
   ┌─────────────────────────────────────────────────┐
   │  Quantization constants cũng được quantize!     │
   │  Mỗi block 64 weights → 1 FP32 scale (4 bytes) │
   │  Double quant: FP32 scale → FP8 (1 byte)        │
   │  Tiết kiệm thêm ~0.37 bits/param               │
   │  7B model: tiết kiệm ~3GB RAM                   │
   └─────────────────────────────────────────────────┘

3. Paged Optimizers:
   ┌─────────────────────────────────────────────────┐
   │  Optimizer states (AdamW m,v) → CPU RAM          │
   │  Khi GPU VRAM hết → page out to CPU              │
   │  Giống virtual memory của OS                     │
   │  Tránh OOM khi batch lớn hoặc sequence dài       │
   └─────────────────────────────────────────────────┘

Memory comparison (LLaMA 7B fine-tuning):
┌───────────────────┬──────────┬──────────┬──────────┐
│                   │ Full FT  │ LoRA     │ QLoRA    │
├───────────────────┼──────────┼──────────┼──────────┤
│ Model weights     │ 14 GB    │ 14 GB    │ 3.5 GB   │
│ LoRA params       │ —        │ ~50 MB   │ ~50 MB   │
│ Optimizer states  │ 28 GB    │ ~100 MB  │ ~100 MB  │
│ Gradients         │ 14 GB    │ ~50 MB   │ ~50 MB   │
│ Activations       │ ~10 GB   │ ~5 GB    │ ~5 GB    │
├───────────────────┼──────────┼──────────┼──────────┤
│ TOTAL VRAM        │ ~66 GB   │ ~19 GB   │ ~9 GB    │
│ GPU needed        │ 2×A100   │ 1×A100   │ 1×RTX4090│
└───────────────────┴──────────┴──────────┴──────────┘
```

＃＃＃４．２． NF4 vs INT4 vs FP4

|量子化タイプ |精度 |こんな方に最適 |情報損失 |
|----------|-----------|----------|-----------|
| **INT4** |均一な 4 ビット |汎用 |中程度 |
| **FP4** |浮動小数点 4 ビット |外れ値に優しい | INT4未満 |
| **NF4** | NormalFloat 4 ビット |ニューラル ネットワークの重み |最低 (最適) |

NF4 は、**ニューラル ネットワークの重みは正規分布に従う**という観察に基づいて機能します。 NF4 は、正規分布の分位数に従って量子化ビンを分割します → 各ビンには同じ数の値が含まれます → 情報損失が最小限に抑えられます。

> **重要な洞察:** QLoRA + NF4 は、**~1/7 VRAM** のみを使用する完全な微調整 FP16 と比較して、**99.3% の品質**を達成します。品質の違いは、ほとんどのベンチマークではほとんど測定できません。

## 5. その他の PEFT メソッド — プレフィックス チューニング、プロンプト チューニング、IA3

＃＃＃５．１．簡単な比較

```text
PEFT Methods Family:

┌─────────────────────────────────────────────────────┐
│                 PEFT Methods                        │
├──────────────┬──────────────┬───────────────────────┤
│  Additive    │  Reparameter.│  Selective            │
├──────────────┼──────────────┼───────────────────────┤
│ Adapter      │ LoRA         │ BitFit (bias only)    │
│ Prefix Tuning│ QLoRA        │ Freeze some layers    │
│ Prompt Tuning│ IA3          │                       │
│ (IA)3        │ DoRA         │                       │
└──────────────┴──────────────┴───────────────────────┘
```

|方法 |トレーニング可能なパラメータ |主なアイデア |利点 |デメリット |
|----------|------|------|----------|-------------|
| **LoRA** | 0.1-1% |低ランク並列行列 |最高の品質とコストのトレードオフ |ランク、ターゲットモジュールを選択する必要があります |
| **QLoRA** | 0.1-1% | LoRA + 4 ビット量子化 |コンシューマ GPU で実行 | LoRA よりも約 15 ～ 20% 遅い |
| **プレフィックスチューニング** | ~0.1% |訓練可能なベクトルを K,V に付加する |パラメーターが非常に少ない | LoRAより品質が低い |
| **迅速なチューニング** | <0.01% |トレーニング可能なソフト トークンを先頭に追加する |超軽量で交換が簡単 | 10B を超えるモデルにのみ適しています |
| **IA3** | <0.01% |学習したベクトルによる K、V、FFN のスケール |最小のパラメータ、最速のトレイン | LoRAより品質が低い |
| **ドラ** | ~1-2% | LoRA + 重み分解 (大きさ/方向) |品質 = 一部のタスクで完全な FT |新しい、あまりテストされていません |
| **アダプター** | 1-5% |交互のボトルネック層 |実証済みのモジュール式 |レイテンシーを増やす (レイヤーを追加する) |

### 5.2. Prefix Tuning vs Prompt Tuning

```text
Prompt Tuning:
  [P1 P2 P3 ... Pk] [actual input tokens] → Model → Output
   └── trainable ──┘  └── frozen ────────┘
  Soft prompts prepend trước input, chỉ train Pk vectors

Prefix Tuning:
  Mỗi layer attention nhận prefix:
  Layer 1: [prefix_K₁, prefix_V₁] + [actual K, V]
  Layer 2: [prefix_K₂, prefix_V₂] + [actual K, V]
  ...
  Trainable prefixes ở MỌI layer → expressive hơn Prompt Tuning
```

> **実践的なアドバイス:** 95% の場合、**QLoRA** を使用する必要があります。これは、品質、コスト、使いやすさの間のスイートスポットです。同じモデル (サービス効率) または非常に大規模なモデル (>100B) で数百のタスクを交換する必要がある場合にのみ、プロンプト チューニングを検討してください。

## 6. 微調整のためのデータセットの準備

＃＃＃６．１．命令形式 — Alpaca 対 ShareGPT

データセットは、品質の微調整にとって**最も決定的な**要素です。一般的な形式:

**Alpaca 形式** — シングルターンの命令と応答:

```json
{
  "instruction": "Tóm tắt đoạn văn sau thành 3 bullet points",
  "input": "Trí tuệ nhân tạo (AI) đang thay đổi ngành y tế...",
  "output": "• AI giúp chẩn đoán chính xác hơn\n• Giảm chi phí vận hành\n• Cá nhân hóa điều trị"
}
```

**ShareGPT / 会話形式** — マルチターン:

```json
{
  "conversations": [
    {"role": "system", "content": "Bạn là trợ lý y tế chuyên nghiệp."},
    {"role": "user", "content": "Triệu chứng đau đầu kéo dài là gì?"},
    {"role": "assistant", "content": "Đau đầu kéo dài có thể do nhiều nguyên nhân..."},
    {"role": "user", "content": "Khi nào cần đi khám?"},
    {"role": "assistant", "content": "Bạn nên đi khám khi đau đầu kèm theo..."}
  ]
}
```

＃＃＃６．２．チャット テンプレート — なぜ重要ですか?

各モデルには独自の **チャット テンプレート**があります。トレーニング データはベース モデル テンプレートと一致する必要があります。

```text
Mistral / LLaMA 3 Chat Template:

<s>[INST] <<SYS>>
{system_message}
<</SYS>>

{user_message_1} [/INST] {assistant_response_1} </s>
<s>[INST] {user_message_2} [/INST] {assistant_response_2} </s>

ChatML Template (Qwen, nhiều model khác):

<|im_start|>system
{system_message}<|im_end|>
<|im_start|>user
{user_message}<|im_end|>
<|im_start|>assistant
{assistant_response}<|im_end|>
```

> **警告:** 微調整する際に、間違ったチャット テンプレートを使用することが最も一般的な間違いです。トレーニング形式が推論形式と異なる場合、モデルは意味不明な内容を生成します。 **常に使用する `tokenizer.apply_chat_template()`**。

＃＃＃６．３．データセット品質チェックリスト

|基準 |説明 |最小 |
|----------|----------|----------|
| **数量** |命令と応答のペアの数 |特定のタスクには 1,000 以上 |
| **多様性** |多様な指示 |コピー＆ペーストのパターンを避ける |
| **品質** |応答は正確かつ完全です |人間によるレビュー > AI 生成 |
| **長さ** |出力の一貫した長さ |予想される出力長と一致する |
| **形式** |正しいチャット テンプレート |トレーニング前に検証する |
| **重複はありません** |重複排除 |ハッシュベースの重複排除 |

```text
Dataset Size Guidelines:

Task specificity:        Samples needed:
┌──────────────────────┬───────────────────┐
│ Single narrow task   │ 500 - 2,000       │
│ (classify, extract)  │                   │
├──────────────────────┼───────────────────┤
│ Domain adaptation    │ 5,000 - 20,000    │
│ (medical, legal)     │                   │
├──────────────────────┼───────────────────┤
│ General assistant    │ 50,000 - 200,000  │
│ (chat, multi-task)   │                   │
├──────────────────────┼───────────────────┤
│ Pretrain-style       │ 1M+ tokens        │
│ (continued pretraining│                  │
└──────────────────────┴───────────────────┘
```

## 7. ハンズオン: QLoRA を使用して Mistral 7B を微調整する

＃＃＃７．１．環境設定

```bash
# Tạo environment
conda create -n finetune python=3.11 -y
conda activate finetune

# Install core packages
pip install torch==2.3.0 --index-url https://download.pytorch.org/whl/cu121
pip install transformers==4.44.0
pip install datasets==2.20.0
pip install peft==0.12.0
pip install trl==0.9.6
pip install bitsandbytes==0.43.1
pip install accelerate==0.33.0
pip install scipy sentencepiece protobuf

# Verify CUDA
python -c "import torch; print(f'CUDA: {torch.cuda.is_available()}, Device: {torch.cuda.get_device_name(0)}')"
```

＃＃＃７．２．完全なトレーニング スクリプト

完全なスクリプトは次のとおりです。**単一の 24GB GPU** (RTX 4090、A5000、または A100) で実行されます。

```python
"""
Fine-tune Mistral 7B Instruct với QLoRA
Yêu cầu: 1× GPU 24GB VRAM, ~16GB RAM
Thời gian: ~2-4 hours cho 3 epochs trên 5K samples
"""

import torch
from datasets import load_dataset, Dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from trl import SFTTrainer

# ============================================================
# 1. Configuration
# ============================================================
MODEL_NAME = "mistralai/Mistral-7B-Instruct-v0.3"
OUTPUT_DIR = "./mistral-7b-finetuned"
MAX_SEQ_LENGTH = 2048

# LoRA Config
LORA_R = 16              # Rank — 16 là sweet spot
LORA_ALPHA = 32          # Scaling factor = 2 * r
LORA_DROPOUT = 0.05      # Nhẹ dropout chống overfitting
TARGET_MODULES = [        # Apply LoRA vào attention + MLP
    "q_proj", "k_proj", "v_proj", "o_proj",
    "gate_proj", "up_proj", "down_proj",
]

# Training Config
NUM_EPOCHS = 3
BATCH_SIZE = 4
GRADIENT_ACCUMULATION = 4  # Effective batch = 4 × 4 = 16
LEARNING_RATE = 2e-4
WARMUP_RATIO = 0.03
WEIGHT_DECAY = 0.001

# ============================================================
# 2. Load Model với 4-bit Quantization (QLoRA)
# ============================================================
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",          # NormalFloat4 — optimal
    bnb_4bit_compute_dtype=torch.bfloat16,  # Compute in BF16
    bnb_4bit_use_double_quant=True,     # Double quantization
)

print("Loading model in 4-bit...")
model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    quantization_config=bnb_config,
    device_map="auto",             # Auto distribute across GPUs
    attn_implementation="flash_attention_2",  # Flash Attention 2
    torch_dtype=torch.bfloat16,
)
model.config.use_cache = False     # Disable KV cache for training
model.config.pretraining_tp = 1

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"   # Phải padding right cho causal LM

# Prepare model cho k-bit training
model = prepare_model_for_kbit_training(model)

# ============================================================
# 3. Configure LoRA
# ============================================================
lora_config = LoraConfig(
    r=LORA_R,
    lora_alpha=LORA_ALPHA,
    lora_dropout=LORA_DROPOUT,
    target_modules=TARGET_MODULES,
    bias="none",
    task_type="CAUSAL_LM",
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 21,299,200 || all params: 7,262,928,896
#         || trainable: 0.293%

# ============================================================
# 4. Prepare Dataset
# ============================================================
def format_instruction(sample):
    """Format sample thành Mistral chat template."""
    messages = [
        {"role": "user", "content": sample["instruction"]},
        {"role": "assistant", "content": sample["output"]},
    ]
    # Dùng apply_chat_template để format đúng
    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=False,
    )
    return {"text": text}

# Load dataset — thay bằng dataset của bạn
# Ví dụ: dataset medical QA tiếng Việt
dataset = load_dataset("json", data_files="./data/medical_qa_vi.json")

# Nếu chưa có dataset, tạo demo dataset
demo_data = [
    {
        "instruction": "Triệu chứng COVID-19 phổ biến nhất là gì?",
        "output": "Các triệu chứng phổ biến nhất của COVID-19 bao gồm: sốt, ho khan, mệt mỏi, đau họng, đau cơ, và mất vị giác/khứu giác. Triệu chứng nặng gồm khó thở, đau ngực, và lú lẫn.",
    },
    {
        "instruction": "Phân biệt viêm phổi do vi khuẩn và virus",
        "output": "Viêm phổi vi khuẩn: sốt cao đột ngột, đờm vàng/xanh, bạch cầu tăng, đáp ứng kháng sinh. Viêm phổi virus: sốt nhẹ từ từ, ho khan, bạch cầu bình thường/giảm, không đáp ứng kháng sinh.",
    },
]
# Trong thực tế, cần 1000+ samples
dataset = Dataset.from_list(demo_data)
dataset = dataset.map(format_instruction)

# Split train/eval (90/10)
dataset = dataset.train_test_split(test_size=0.1, seed=42)

# ============================================================
# 5. Training Arguments
# ============================================================
training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,
    num_train_epochs=NUM_EPOCHS,
    per_device_train_batch_size=BATCH_SIZE,
    per_device_eval_batch_size=BATCH_SIZE,
    gradient_accumulation_steps=GRADIENT_ACCUMULATION,
    gradient_checkpointing=True,        # Tiết kiệm VRAM
    optim="paged_adamw_32bit",          # Paged optimizer (QLoRA)
    learning_rate=LEARNING_RATE,
    lr_scheduler_type="cosine",
    warmup_ratio=WARMUP_RATIO,
    weight_decay=WEIGHT_DECAY,
    max_grad_norm=0.3,                  # Gradient clipping
    fp16=False,
    bf16=True,                          # BFloat16 training
    logging_steps=10,
    eval_strategy="steps",
    eval_steps=50,
    save_strategy="steps",
    save_steps=100,
    save_total_limit=3,                 # Keep last 3 checkpoints
    load_best_model_at_end=True,
    metric_for_best_model="eval_loss",
    report_to="tensorboard",            # Hoặc "wandb"
    seed=42,
)

# ============================================================
# 6. Initialize Trainer & Train
# ============================================================
trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"],
    tokenizer=tokenizer,
    dataset_text_field="text",          # Column chứa formatted text
    max_seq_length=MAX_SEQ_LENGTH,
    packing=True,                       # Pack ngắn samples → 1 sequence
)

print("Starting training...")
trainer.train()

# Save final adapter
trainer.save_model(f"{OUTPUT_DIR}/final")
tokenizer.save_pretrained(f"{OUTPUT_DIR}/final")
print(f"Training complete! Adapter saved to {OUTPUT_DIR}/final")
```

＃＃＃７．３．微調整されたモデルによる推論

```python
"""Test model sau fine-tuning."""
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load base model + adapter
base_model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.3",
    torch_dtype=torch.bfloat16,
    device_map="auto",
    load_in_4bit=True,
)
model = PeftModel.from_pretrained(base_model, "./mistral-7b-finetuned/final")
tokenizer = AutoTokenizer.from_pretrained("./mistral-7b-finetuned/final")

# Generate
messages = [
    {"role": "user", "content": "Triệu chứng sốt xuất huyết và cách xử lý?"}
]
input_ids = tokenizer.apply_chat_template(
    messages, return_tensors="pt", add_generation_prompt=True
).to(model.device)

outputs = model.generate(
    input_ids,
    max_new_tokens=512,
    temperature=0.7,
    top_p=0.9,
    do_sample=True,
    repetition_penalty=1.1,
)

response = tokenizer.decode(outputs[0][input_ids.shape[-1]:], skip_special_tokens=True)
print(response)
```

## 8. トレーニングのモニタリング — 損失曲線と一般的な問題

### 8.1。指標は追跡する必要がある

```text
Healthy Training Curves:

Loss                     Learning Rate
│                        │
│╲                       │    ╱‾‾‾‾‾‾╲
│  ╲                     │   ╱ warmup  ╲
│    ╲___                │  ╱           ╲
│        ╲___            │ ╱    cosine   ╲
│            ╲____       │╱    decay      ╲
│                 ╲___   │                 ╲
├──────────────────────  ├──────────────────────
0   steps         end    0   steps         end

Training loss: giảm smooth, cuối ổn định
Eval loss:     giảm theo train loss, KHÔNG tăng ngược lại
```

|問題 |標識 |ソリューション |
|----------|-----------|----------|
| **過学習** |評価損失が増加し、列車損失が減少します。エポックを減らし、ドロップアウトを増やし、データを追加する |
| **フィッティング不足** |どちらの損失も大きく、どちらも減少しません | r/rank を増やし、学習率を高め、target_modules を追加します。
| **壊滅的な物忘れ** |モデルは一般知識を忘れています | LR を減らし、エポックを減らし、完全な FT の代わりに PEFT を使用します。
| **損失の急増** |損失が突然増加しました | LR を減らし、ウォームアップを増やし、データ品質をチェックする |
| **NaN 損失** |損失 = NaN | FP16 の代わりに BF16 を使用し、LR を減らし、データをチェックします。
| **収束が遅い** |損失は​​非常にゆっくりと減少します。 LRを上げる、データ形式を確認する、チャットテンプレートを確認する |

### 8.2。微調整されたモデルの品質を評価する

```python
"""Simple evaluation script."""
import json

# Test samples (không nằm trong training data)
test_prompts = [
    "Phân biệt tiểu đường type 1 và type 2",
    "Khi nào cần xét nghiệm máu?",
    "Tác dụng phụ phổ biến của kháng sinh là gì?",
]

results = []
for prompt in test_prompts:
    messages = [{"role": "user", "content": prompt}]
    input_ids = tokenizer.apply_chat_template(
        messages, return_tensors="pt", add_generation_prompt=True
    ).to(model.device)
    
    outputs = model.generate(input_ids, max_new_tokens=256, temperature=0.1)
    response = tokenizer.decode(
        outputs[0][input_ids.shape[-1]:], skip_special_tokens=True
    )
    results.append({"prompt": prompt, "response": response})
    print(f"Q: {prompt}")
    print(f"A: {response}\n{'='*60}")

# Save results cho human review
with open("eval_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
```

> **ベストプラクティス:** 損失だけに頼らないでください。 50 ～ 100 個のサンプルに対する **人による評価** がゴールドスタンダードです。ルーブリックを作成します: 正確さ、関連性、形式の遵守、その後 1 ～ 5 のスコアを付けます。

## 9. アダプターの結合と展開

＃＃＃９．１． LoRA をベースモデルにマージする

導入時には、次の 2 つのオプションがあります。
- **アダプターは別に保管してください**: 基本モデル + 小さなアダプター ファイル (~50 ～ 100MB)。柔軟で交換可能。
- **マージ**: アダプターをモデル → 単一モデル ファイルにマージします。推論が速くなります。

```python
"""Merge LoRA adapter vào base model và push lên HF Hub."""
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Load base model (KHÔNG quantize — phải full precision để merge)
base_model = AutoModelForCausalLM.from_pretrained(
    "mistralai/Mistral-7B-Instruct-v0.3",
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# Load adapter
model = PeftModel.from_pretrained(base_model, "./mistral-7b-finetuned/final")

# Merge adapter vào base model
print("Merging adapter into base model...")
merged_model = model.merge_and_unload()

# Save merged model
MERGED_DIR = "./mistral-7b-medical-merged"
merged_model.save_pretrained(MERGED_DIR)
tokenizer = AutoTokenizer.from_pretrained("./mistral-7b-finetuned/final")
tokenizer.save_pretrained(MERGED_DIR)

# Push to Hugging Face Hub (optional)
# merged_model.push_to_hub("your-username/mistral-7b-medical-vi")
# tokenizer.push_to_hub("your-username/mistral-7b-medical-vi")

print(f"Merged model saved to {MERGED_DIR}")
```

＃＃＃９．２．マージ後の展開オプション

```text
Deployment Pipeline:

Fine-tuned Adapter
       │
       ├──▶ Option A: Serve riêng adapter
       │    ├── vLLM: --lora-modules adapter_name=./adapter_path
       │    ├── Ollama: tạo Modelfile FROM base + ADAPTER
       │    └── Ưu điểm: swap adapters runtime, multi-tenant
       │
       └──▶ Option B: Merge → Single model
            ├── merge_and_unload() → GGUF (llama.cpp)
            ├── merge → Quantize (GPTQ/AWQ) → vLLM
            └── Ưu điểm: faster inference, simpler deploy
```

## 10. DPO/ORPO — 好みに基づいたトレーニング

### 10.1。 SFT を超えて — 人間の好みとの調整

**教師あり微調整 (SFT)** は、ANSWER モデルを教えます。ただし、良い応答と悪い応答を区別するようにモデルに教えないでください。これは**位置合わせ**が必要な場合です。

```text
Training Pipeline:

Pretrained Model
       │
       ▼
┌──────────────┐
│     SFT      │◄── Instruction dataset (instruction → response)
│ (Bài này)    │    Dạy model follow instructions
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  RLHF / DPO  │◄── Preference dataset (chosen vs rejected)
│  / ORPO      │    Dạy model chọn response TỐT hơn
└──────┬───────┘
       │
       ▼
  Aligned Model (helpful, harmless, honest)
```

|方法 |必要なデータ |利点 |デメリット |
|----------|----------|----------|-------------|
| **RLHF** |優先ペア + 報酬モデル |ゴールドスタンダード (ChatGPT) |複雑、不安定、報酬モデルが必要 |
| **DPO** |優先ペアのみ |安定した、シンプルな、報酬なしのモデル |データに敏感なため、最初に SFT が必要 |
| **オルポ** |優先ペアのみ |シングルステージ（SFT＋アライメント同時） |新しい、あまり検証されていない |
| **KTO** |親指を上げたり下げたりするだけ |データ収集が最も簡単 | DPO よりも品質が低い |

**DPO (直接優先最適化)** データセット形式:

```json
{
  "prompt": "Giải thích machine learning cho người mới",
  "chosen": "Machine learning là phương pháp giúp máy tính tự học từ dữ liệu mà không cần lập trình cụ thể. Ví dụ: email spam filter học phân loại từ hàng ngàn email...",
  "rejected": "ML là AI subfield dùng statistical methods để tối ưu loss function trên hypothesis space H với VC dimension hữu hạn qua ERM principle..."
}
```

> **実用的な注意事項:** ほとんどの使用例では、**SFT で十分です**。 DPO/ORPO は、モデルの品質に一貫性がない場合、または厳密な調整 (安全性、トーン) が必要な場合にのみ必要です。 DPO ではトレーニング ステージが 1 つ追加されましたが、一貫性が大幅に向上しました。

## 11. コスト見積もりの微調整

### 11.1。 GPU 時間とクラウドの料金

```text
Cost Estimation Formula:

Training time ≈ (num_samples × num_epochs × seq_length) / 
                (tokens_per_second × batch_size)

Ví dụ: 10K samples, 3 epochs, avg 512 tokens:
  Total tokens = 10,000 × 3 × 512 = 15,360,000 tokens
  QLoRA speed ≈ 3,000 tokens/sec (A100) hoặc 1,500 tokens/sec (4090)
  A100: 15.36M / 3,000 = 5,120 sec ≈ 1.4 hours
  4090: 15.36M / 1,500 = 10,240 sec ≈ 2.8 hours
```

|クラウドプロバイダー | GPU | VRAM |料金/時間 (オンデマンド) | QLoRA 7B (10K サンプル) |
|--------------|-----|----------|----------|---------------------|
| **ラムダ研究所** | A100 80GB | 80GB | ~$1.10/時間 | ~$1.50 |
| **ランポッド** | A100 80GB | 80GB | ~$1.64/時間 | ~$2.30 |
| **ランポッド** | RTX4090 | 24GB | ~$0.44/時間 | ~$1.20 |
| **AWS** | p4d(A100) | 80GB | ~$3.80/時間 | ~$5.30 |
| **Google クラウド** | A100 | 80GB | ~$3.67/時間 | ~$5.10 |
| **Vast.ai** | RTX4090 | 24GB | ~$0.30/時間 | ~$0.85 |
| **Google Colab** | T4/A100 | 15 ～ 40 GB |無料 - 月額 10 ドル |無料 (T4、低速) |

＃＃＃１１．２．コストの比較: 微調整と API

```text
Scenario: Medical QA chatbot, 1000 queries/day, avg 500 tokens response

Option A — GPT-4o API:
  1000 queries × (200 input + 500 output) tokens/query
  Input:  200K tokens/day × $2.50/1M = $0.50/day
  Output: 500K tokens/day × $10/1M  = $5.00/day
  Monthly: $165/month

Option B — Fine-tuned Mistral 7B (self-hosted):
  Training: ~$5 one-time (QLoRA trên RunPod)
  Serving: RTX 4090 instance ~$0.44/hr × 24hr = $10.56/day
  Monthly: $320/month (dedicated) hoặc $50/month (spot/shared)

Option C — Fine-tuned + quantized (GGUF Q4):
  Serving trên CPU/small GPU: ~$50-100/month VPS
  Monthly: $50-100/month
  
Break-even analysis:
  GPT-4o rẻ hơn nếu < 500 queries/day
  Self-host rẻ hơn nếu > 2000 queries/day hoặc cần privacy
```

> **実践的なアドバイス:** API (GPT-4o / Claude) から始めてアイデアを検証します。ボリュームが 2000 クエリ/日を超える場合、またはデータ プライバシー → 微調整 + セルフホストが必要な場合。 QLoRA のトレーニング費用はほぼ無視できます (<$10 cho 7B model).

## 12. Cheat Sheet — Quick Reference

```text
┌──────────────────────────────────────────────────────────┐
│          FINE-TUNING LLMs — CHEAT SHEET                 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  KTHND fine-tune?                                        │
│  ✓ Behavior thay đổi (style, format, domain)            │
│  ✗ Knowledge mới → dùng RAG                             │
│                                                          │
│  Method: QLoRA (99% trường hợp)                         │
│  ├── r=16-32, alpha=2×r, dropout=0.05                   │
│  ├── target_modules="all" (attention + MLP)             │
│  ├── bnb: nf4 + double_quant + bf16_compute             │
│  └── paged_adamw_32bit optimizer                        │
│                                                          │
│  Dataset:                                                │
│  ├── Format: Alpaca (single-turn) / ShareGPT (multi)    │
│  ├── PHẢI match chat_template của base model            │
│  ├── Min 1000 samples cho narrow task                   │
│  └── Quality > 数量（常時） │
│ │
│ トレーニング引数: │
│ §── LR: 2e-4 (QLoRA デフォルト) │
│ §── エポック: 1 ～ 3 (データが少ない = 3、データが多い = 1) │
│ §── バッチ: 4-16 (効果的、グラッド蓄積を使用) │
│ §── gradient_checkpointing=True │
│ └── bf16=True、fp16=False │
│ │
│ 展開: │
│ §── merge_and_unload() → 単一モデル │
│ §── 量子化 (GGUF/GPTQ) → vLLM/Ollama を提供 │
│ └── またはアダプタを直接提供する (マルチテナント) │
│ │
│ デバッグ: │
│ §── NaN 損失 → FP16/BF16 を確認し、LR を減らす │
│ §── Eval 損失の増加 → 過学習、エポックの減少 │
│ §── 意味不明な出力 → 間違ったチャット テンプレート │
│ └── 壊滅的な忘却 → LRの減少、エポックの減少 │
│ │
━━━━━━━━━━━━━━━━━━━━━━━━┘
```

＃＃ まとめ

この記事では、LLM のパイプライン微調整全体について説明します。

1. **微調整を行う理由**: プロンプトと RAG だけでは不十分な場合、知識だけでなく行動を変える必要がある
2. **フル FT と PEFT**: PEFT (LoRA/QLoRA) は 1/10 のコストで 95% 以上の品質を達成します — 常にデフォルトの選択肢です
3. **LoRA**: 低ランク分解 — 0.1 ～ 0.3% のパラメーターをトレーニングし、ほぼ完全な微調整効率を実現します
4. **QLoRA**: 4 ビット量子化 (NF4) + LoRA — 単一の 24GB GPU で 7B モデルを微調整
5. **PEFT Zoo**: プレフィックス チューニング、プロンプト チューニング、IA3 — ニッチなユースケース、QLoRA は依然として王者です
6. **データセット**: チャット テンプレートの正しい形式が最も重要です。質 > 量
7. **ハンズオン**: SFTTrainer + QLoRA を使用して Mistral 7B を完全にコード微調整する
8. **モニタリング**: 損失曲線、評価指標、一般的な問題と解決策
9. **マージとデプロイ**: マージとアンロード、ハブへのプッシュ、vLLM/Ollama での提供
10. **DPO/ORPO**: SFT 後の調整 — 一貫した品質が必要な場合に使用されます
11. **コスト**: QLoRA トレーニングは 7B モデルで 10 ドル未満。 1 日あたり 2000 クエリを超える場合、セルフホストは API よりも安価です

**次の記事**では、微調整せずにモデルに知識を追加する手法である**RAG (検索拡張生成)** について説明します。

＃＃ エクササイズ

### 演習 1: QLoRA の微調整 (演習)

1. 選択したドメイン (コード レビュー、カスタマー サポート、医療 QA など) の 200 の命令と応答のペアのデータセットを作成します。
2. Format dataset theo Alpaca format, validate chat template
3. 微調整ミストラル 7B (または LLaMA 3 8B) はレッスンでスクリプトを使用します
4. 20 個のテスト プロンプトで微調整の前後で出力を比較します。
5. 変更を試す `r` (8 vs 16 vs 32) と品質 + トレーニング時間を比較します。

### 演習 2: LoRA ハイパーパラメーター スイープ (分析)

ハイパーパラメータを使用してグリッド検索を実行します。

| Experiment | r | alpha | target_modules | Expect |
|-----------|---|-------|---------------|--------|
| Baseline | 16 | 32 | q_proj, v_proj | — |
| Low rank | 4 | 8 | q_proj, v_proj | Faster, lower quality? |
| High rank | 64 | 128 | q_proj, v_proj | Better quality? |
| All linear | 16 | 32 | all | Best quality? |

比較: トレーニング時間、評価損失、50 サンプルでの人間による評価。

### 演習 3: マージとデプロイ (エンドツーエンド)

1. アダプターを使用する基本モデルにマージします。 `マージアンドアンロード()`
2. GGUF 形式に変換します (使用 `ラマ.cpp/convert.py`)
3. Quantize GGUF sang Q4_K_M
4. Ollama を使用して提供します。Modelfile を作成し、 `オラマがマイモデルを作成する`
5. ベンチマーク: アダプター推論と比較した遅延、スループット (トークン/秒)、品質

### 演習 4: DPO トレーニング (上級)

1. 演習 1 の SFT モデルから、100 個のプリファレンス ペア (選択/拒否) を作成します。
2. DPOを使用して追加された微調整 `TRL の DPOTrainer`
3. 同じテスト セットで SFT のみと SFT+DPO を比較します。
4. 評価: 一貫性、安全性、形式の遵守

