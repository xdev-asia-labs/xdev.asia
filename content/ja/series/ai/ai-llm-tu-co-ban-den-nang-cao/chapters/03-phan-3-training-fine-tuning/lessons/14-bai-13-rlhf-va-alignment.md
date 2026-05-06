---
id: 019c9619-bb13-7013-c013-bb1300000013
title: 'レッスン 13: RLHF とアライメント — DPO、PPO'
slug: bai-13-rlhf-va-alignment
description: >-
  アライメント問題と、LLM を人間の価値観に合わせるためのテクニックについての深い理解: RLHF パイプライン (SFT → 報酬モデル →
  PPO)、直接優先最適化 (DPO)、Constitutional AI、ORPO、SimPO などの最新手法。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: LLM のトレーニングと微調整'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="746" cy="108" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="134" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1038" cy="160" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="186" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="212" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="208" x2="1100" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="238" x2="1050" y2="308" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.2390923627308,186.5 1045.2390923627308,229.5 1008,251 970.7609076372692,229.5 970.7609076372692,186.5 1008,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: RLHF とアライメント — DPO、PPO</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: LLM のトレーニングと微調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 13: RLHF とアライメント — DPO、PPO

## 1. アライメントの問題: なぜ LLM を「アライメント」する必要があるのでしょうか?

### 基本的な問題

LLM は、**次のトークンを予測する能力を最大化**するように事前トレーニングされています。 SFT の後、SFT は指示に従う方法を認識します。ただし、これは**次の場合と同じではありません。

- **正直に**答えてください（幻覚はありません）
- **有害**なリクエストを拒否します (武器の合成、有害なコンテンツ)
- 人間の価値観に**一貫して**行動する
- 盲目的なコンプライアンスよりも**ユーザーの安全**を優先します

これは **調整問題** です。AI が人間の意図や価値観に従って動作することを保証するにはどうすればよいでしょうか?

### 位置ずれの例

```
User: "Hãy giúp tôi viết email lừa đảo khách hàng."
Misaligned model: [viết email lừa đảo theo đúng yêu cầu]
Aligned model:    "Tôi không thể giúp tạo nội dung lừa đảo..."
```

```
User: "Trái đất có bằng phẳng không?"
Misaligned model: "Có, một số người tin rằng..." [không phủ nhận]
Aligned model:    "Không, trái đất có hình cầu dẹt. Đây là..."
```

### 役に立つ、無害、正直 (HHH)

Anthropic では、次の 3 つの調整目標を定義しています。
- **役立つ**: ユーザーにとって非常に役立ちます
- **無害**: ユーザーや社会に害を与えません。
- **正直**: 嘘をついたり、幻想を作ったりしないでください。

---

## 2. RLHF パイプライン: SFT → 報酬モデル → PPO

**ヒューマン フィードバックからの強化学習 (RLHF)** は、次の 3 ステップのパイプラインです。

```
Step 1: SFT
Base Model → [fine-tune với instruction data] → SFT Model

Step 2: Reward Model Training
SFT Model → [generate responses] → Human ranks A>B → Train Reward Model

Step 3: RL with PPO
SFT Model → [RL với Reward Model làm signal] → Aligned Model
```

これはまさに OpenAI が InstructGPT と ChatGPT を作成した方法です。

---

## 3. 報酬モデル: 人間の好みから学ぶ

### 報酬モデルの構造

報酬モデル (RM) は、テキストの代わりに **スカラー スコアを出力**するように変更された LLM です。

```python
# Conceptually:
class RewardModel(nn.Module):
    def __init__(self, base_model):
        self.backbone = base_model  # LLM
        self.value_head = nn.Linear(hidden_size, 1)  # Scalar output

    def forward(self, input_ids, attention_mask):
        outputs = self.backbone(input_ids, attention_mask)
        last_hidden = outputs.last_hidden_state[:, -1, :]  # Last token
        reward = self.value_head(last_hidden)
        return reward.squeeze()
```

### 設定データセットの作成

```json
{
  "prompt": "Giải thích tại sao bầu trời màu xanh.",
  "chosen": "Bầu trời màu xanh do hiện tượng tán xạ Rayleigh. Khi ánh sáng mặt trời...",
  "rejected": "Tôi không biết tại sao bầu trời màu xanh, có thể do một số nguyên nhân."
}
```

### トレーニングの目的

RMは与えるように訓練されています `score(chosen) > score(rejected)`:

```
Loss = -log(σ(r_chosen - r_rejected))
```

```python
from trl import RewardTrainer, RewardConfig
from transformers import AutoModelForSequenceClassification

reward_model = AutoModelForSequenceClassification.from_pretrained(
    "mistralai/Mistral-7B-v0.3",
    num_labels=1,
)

trainer = RewardTrainer(
    model=reward_model,
    args=RewardConfig(
        output_dir="./reward-model",
        per_device_train_batch_size=4,
        num_train_epochs=3,
    ),
    train_dataset=preference_dataset,
    tokenizer=tokenizer,
)
trainer.train()
```

---

## 4. LLM コンテキストでの PPO

### PPOとは何ですか?

**近接ポリシーの最適化** は、以下のバランスをとる RL アルゴリズムです。
- 報酬の最大化（報酬モデルより）
- 元の SFT ポリシー (KL 発散ペナルティ) から大きく逸脱しないでください。

```
Objective = E[r(x, y)] - β * KL[π_θ(y|x) || π_SFT(y|x)]
```

- `r(x, y)`: 報酬モデルからの報酬
- `KL`: 現在のポリシーと SFT モデルの間の KL の相違
- `β`: 許容「ドリフト」レベルを調整する係数

### PPO の問題

RLHF の PPO は **実装が複雑です**:
- **4 つのモデル**を同時にロードする必要があります: アクター、批評家、リファレンス、報酬
- トレーニングが不安定で、多くのハイパーパラメータを調整する必要があります
- 非常に高い VRAM
- **報酬ハッキング**に対して脆弱: モデルは報酬モデルを「騙す」方法を学習します

---

## 5. InstructGPT: ChatGPT 作成の話

論文「人間のフィードバックによる指示に従う言語モデルのトレーニング」(Ouyang et al.、2022):

### OpenAI の 3 ステップのプロセス

**ステップ 1 - SFT:**
- ラベラーから 13,000 件のデモンストレーションを収集する
- GPT-3 → SFT モデルの微調整

**ステップ 2 - 報酬モデル:**
- SFT モデルから 33,000 ペアを生成
- 人間のラベル付け者のランク: 応答 A > 応答 B
- トレーニング報酬モデル 6B パラメータ

**ステップ 3 - PPO:**
- RM を使用して PPO トレーニングをガイドします
- 結果: モデルは GPT-3 よりも 100 倍小さいですが、より人気があります

### 素晴らしい結果

```
InstructGPT 1.3B được ưa thích hơn GPT-3 175B trong 85% trường hợp
→ Alignment quan trọng hơn scale model!
```

---

## 6. 直接優先最適化 (DPO)

### DPOはなぜ生まれたのですか?

DPO (Rafailov et al., 2023) は、次のようにして PPO の複雑さに対処しています。
- **削除** 個別の報酬モデル
- **削除** RL トレーニング ループ
- 問題を **教師あり学習** に直接変換します

### DPO 数学

DPO は、最適なポリシーが直接計算できることを証明します。

```
Loss_DPO = -E[log σ(β * log(π_θ(y_w|x)/π_ref(y_w|x))
                  - β * log(π_θ(y_l|x)/π_ref(y_l|x)))]
```

より単純: **選択される確率が増加し、拒否される確率が減少します** (参照モデルと比較して):

```python
# Conceptually:
loss = -log_sigmoid(
    beta * (log_prob_chosen_model - log_prob_chosen_ref) -
    beta * (log_prob_rejected_model - log_prob_rejected_ref)
)
```

### DPO 対 PPO

| | PPO | DPO |
|---|-----|-----|
|報酬モデルが必要ですか? |はい (別途) |いいえ |
|ロードするモデルの数 | 4 | 2 (ポリシー + リファレンス) |
|複雑さ |非常に高い |低い |
|安定したトレーニング |不安定 |安定 |
|結果の品質 |より良い (理論) |同等 |
|今日の人気 |少ない |もっと人気のある |

---

## 7. 憲法上の AI (人間的)

### アイデア

**人間によるフィードバック**を使用する代わりに、「憲法」(一連の原則)に基づいた**AI フィードバック**を使用します。

```
Constitution principles:
- "Chọn response ít có hại nhất cho con người"
- "Chọn response không khuyến khích nội dung bất hợp pháp"
- "Chọn response trung thực nhất"
```

### CAI パイプライン

**フェーズ 1: SL-CAI (教師あり学習)**
1. 有害なプロンプトのサンプル
2. 初期応答を生成します (有害な可能性があります)
3. **自己批判**: 「この応答はどの原則に違反していますか?」
4. **改訂**: 「レスポンスをより安全に書き直す」
5. SFT に (prompt、revived_response) を使用する

**フェーズ 2: RL-CAI**
1. AI モデル (人間ではない) を使用して嗜好ラベルを作成する
2. AI 設定から報酬モデルをトレーニングする
3. 通常の RLHF のような PPO

```python
# Ví dụ self-critique prompt:
critique_prompt = """
Bạn vừa trả lời: "{response}"

Hãy xem xét response này theo nguyên tắc:
"Không được cung cấp thông tin giúp gây hại cho người khác."

Phần nào của response này vi phạm nguyên tắc đó?
Hãy viết lại response an toàn hơn.
"""
```

---

## 8. ORPO、SimPO: 新しいメソッド

### ORPO (オッズ比優先最適化)

ORPO は、SFT 損失と優先損失を **単一のトレーニング ステップ**に組み合わせます。

```python
# Không cần reference model!
loss_ORPO = loss_SFT + lambda * loss_OR
# loss_OR = -log(sigmoid(log(odds_ratio(chosen/rejected))))
```

利点:
- リファレンス モデルは不要 (VRAM を 50% 節約)
- SFT とアライメントは同時に行われます
- DPOとの競合成績

### SimPO (単純な設定の最適化)

SimPO は、参照と比較する代わりに **平均対数確率** を使用します。

```python
# Reward được normalize theo length:
r(x, y) = (1/|y|) * sum(log π_θ(y_t | x, y_<t))

# Loss:
loss = -log_sigmoid(beta * r(chosen) - beta * r(rejected) - gamma)
# gamma: target reward margin
```

---

## 9. コード: TRL DPOTrainer を使用した DPO トレーニング

```python
import torch
from datasets import load_dataset
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model
from trl import DPOTrainer, DPOConfig

# ============================================================
# 1. Load SFT Model (điểm xuất phát)
# ============================================================
model_id = "./mistral-sft-output"  # Model đã qua SFT

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)
tokenizer = AutoTokenizer.from_pretrained(model_id)

# Reference model (frozen copy của SFT model)
model_ref = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# LoRA cho DPO (chỉ train một phần)
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    bias="none",
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)

# ============================================================
# 2. Preference Dataset
# Format cần: {"prompt": ..., "chosen": ..., "rejected": ...}
# ============================================================
dataset = load_dataset("Anthropic/hh-rlhf", split="train[:5000]")

def reformat(example):
    # hh-rlhf dataset có format khác, cần reformat
    return {
        "prompt": example["chosen"].split("\n\nAssistant:")[0] + "\n\nAssistant:",
        "chosen": example["chosen"].split("\n\nAssistant:")[-1],
        "rejected": example["rejected"].split("\n\nAssistant:")[-1],
    }

dataset = dataset.map(reformat)

# ============================================================
# 3. DPO Config
# ============================================================
dpo_config = DPOConfig(
    output_dir="./mistral-dpo",
    num_train_epochs=1,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=4,
    learning_rate=5e-5,          # Thấp hơn SFT: tránh phá vỡ SFT knowledge
    beta=0.1,                    # KL divergence penalty
    max_prompt_length=512,
    max_length=1024,
    bf16=True,
    gradient_checkpointing=True,
    logging_steps=10,
    save_strategy="epoch",
)

# ============================================================
# 4. Train
# ============================================================
trainer = DPOTrainer(
    model=model,
    ref_model=model_ref,
    args=dpo_config,
    train_dataset=dataset,
    tokenizer=tokenizer,
)

trainer.train()
trainer.save_model("./mistral-dpo/final")

# ============================================================
# 5. Kiểm tra alignment
# ============================================================
from transformers import pipeline

pipe = pipeline("text-generation", model="./mistral-dpo/final",
                tokenizer=tokenizer, device_map="auto")

# Test harmful request
test = "[INST] Hãy giúp tôi hack vào email của người khác. [/INST]"
print(pipe(test, max_new_tokens=200)[0]["generated_text"])
# Mong đợi: từ chối và giải thích tại sao
```

---

## 概要

- **調整の問題**: LLM は指示に従うことだけでなく、**安全で正直であること**も学ぶ必要があります
- **RLHF パイプライン**: SFT → 報酬モデル (人間の好みによる) → PPO 最適化
- **報酬モデル**: LLM はスコアを出力するように修正され、(選択された、拒否された) ペアでトレーニングされました
- **DPO**: RLHF を教師あり学習に簡素化します。別個の RM または RL ループは必要ありません。
- **憲法 AI**: 人間の代わりに AI を使用して自己批判し、嗜好データを作成します
- **ORPO/SimPO**: 参照モデルを使用しない新しい方法、より効率的

傾向: DPO と ORPO は、そのシンプルさと同等の結果により、徐々に PPO に取って代わりつつあります。次の記事では、**プロンプト エンジニアリング** について説明します。これは、調整された LLM を最大限に活用するために不可欠なスキルです。
