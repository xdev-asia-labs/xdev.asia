---
id: 019c9619-bb13-7013-c013-bb1300000013
title: 第 13 課：RLHF 與協調 — DPO、PPO
slug: bai-13-rlhf-va-alignment
description: >-
  深入理解對齊問題以及使LLM與人類價值觀對齊的技術：RLHF管道（SFT→獎勵模型→PPO）、直接偏好優化（DPO）、憲法AI以及ORPO、SimPO等最新方法。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 3 部分：法學碩士培訓和微調
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：RLHF 與協調 — DPO、PPO</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：法學碩士培訓和微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 13 課：RLHF 與對齊 — DPO、PPO

## 1. 對齊問題：為什麼LLM需要「對齊」？

### 基本問題

LLM 經過預先訓練，以**最大化預測下一個標記的能力**。 SFT 之後，它知道如何遵循指令——但這**不同於：

- **誠實**地回答（沒有幻覺）
- 拒絕**有害**請求（武器合成、有害內容）
- 行為**一致**符合人類價值觀
- 優先考慮**使用者安全**而不是盲目遵從

這就是**一致性問題**：如何確保人工智慧按照人類的意圖和價值觀行事？

### 錯位範例

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

### 有幫助、無害、誠實 (HHH)

Anthropic 定義了三個對齊目標：
- **有幫助**：對使用者確實有幫助
- **無害**：不會對使用者或社會造成傷害
- **誠實**：不要說謊或製造幻想

---

## 2. RLHF 管道：SFT → 獎勵模型 → PPO

**基於人類回饋的強化學習 (RLHF)** 是一個 3 步驟流程：

```
Step 1: SFT
Base Model → [fine-tune với instruction data] → SFT Model

Step 2: Reward Model Training
SFT Model → [generate responses] → Human ranks A>B → Train Reward Model

Step 3: RL with PPO
SFT Model → [RL với Reward Model làm signal] → Aligned Model
```

這正是 OpenAI 創建 InstructGPT 和 ChatGPT 的方式。

---

## 3. 獎勵模型：從人類偏好學習

### 獎勵模型結構

獎勵模型 (RM) 是一個經過修改的 LLM，以**輸出標量分數**而不是文字：

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

### 建立偏好資料集

```json
{
  "prompt": "Giải thích tại sao bầu trời màu xanh.",
  "chosen": "Bầu trời màu xanh do hiện tượng tán xạ Rayleigh. Khi ánh sáng mặt trời...",
  "rejected": "Tôi không biết tại sao bầu trời màu xanh, có thể do một số nguyên nhân."
}
```

### 培訓目標

RM 受過訓練，並能給予 `score(chosen) > score(rejected)`:

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

## 4. LLM 背景下的 PPO

### 什麼是 PPO？

**近端策略最佳化**是一種 RL 演算法，它平衡：
- 最大化獎勵（來自獎勵模型）
- 不要偏離原來的SFT政策太遠（KL散度懲罰）

```
Objective = E[r(x, y)] - β * KL[π_θ(y|x) || π_SFT(y|x)]
```

- `r(x, y)`：獎勵模型的獎勵
- `KL`：當前政策和SFT模型之間的KL分歧
- `β`：調整允許「漂移」水平的係數

### PPO 問題

RLHF 中的 PPO **實作起來很複雜**：
- 需要同時載入**4個模型**：Actor、Critic、Reference、Reward
- 訓練不穩定，許多超參數需要調整
- 極高的 VRAM
- 容易受到**獎勵黑客攻擊**：模型學習如何「欺騙」獎勵模型

---

## 5. InstructGPT：創造 ChatGPT 的故事

論文「訓練語言模型以遵循人類回饋的指令」（Ouyang et al., 2022）：

### OpenAI 的 3 步驟流程

**步驟 1 - SFT：**
- 收集貼標商的 13,000 個演示
- 微調 GPT-3 → SFT 模型

**第 2 步 - 獎勵模型：**
- 從 SFT 模型產生 33,000 對
- 人工貼標排名：回應 A > 回應 B
- 訓練獎勵模型 6B 參數

**步驟 3 - PPO：**
- 使用RM指導PPO培訓
- 結果：模型比 GPT-3 小 100 倍，但更受歡迎

### 顯著的結果

```
InstructGPT 1.3B được ưa thích hơn GPT-3 175B trong 85% trường hợp
→ Alignment quan trọng hơn scale model!
```

---

## 6. 直接偏好優化（DPO）

### DPO 為何誕生？

DPO（Rafailov 等人，2023）透過以下方式解決了 PPO 的複雜性：
- **刪除**單獨的獎勵模型
- **刪除** RL 訓練循環
- 直接將問題轉化為**監督學習**

### DPO 數學

DPO證明可以直接計算最優策略：

```
Loss_DPO = -E[log σ(β * log(π_θ(y_w|x)/π_ref(y_w|x))
                  - β * log(π_θ(y_l|x)/π_ref(y_l|x)))]
```

更簡單：**增加選擇的機率，降低拒絕的機率**（與參考模型相比）：

```python
# Conceptually:
loss = -log_sigmoid(
    beta * (log_prob_chosen_model - log_prob_chosen_ref) -
    beta * (log_prob_rejected_model - log_prob_rejected_ref)
)
```

### DPO 與 PPO

| |聚苯醚 |資料保護官 |
|---|-----|-----|
|需要獎勵模型嗎？ |是（單獨）|沒有 |
|要載入的模型數量 | 4 | 2（政策+參考）|
|複雜性 |非常高|低|
|穩定訓練|不穩定|穩定|
|結果品質 |更好（理論）|同等|
|今日熱門|少 |更多熱門 |

---

## 7.憲法人工智慧（人擇）

### 想法

不使用**人類回饋**，而是使用基於「憲法」（一組原則）的**人工智慧回饋**：

```
Constitution principles:
- "Chọn response ít có hại nhất cho con người"
- "Chọn response không khuyến khích nội dung bất hợp pháp"
- "Chọn response trung thực nhất"
```

### CAI 管道

**階段 1：SL-CAI（監督學習）**
1. 有害提示範例
2. 產生初始回應（可能有害）
3. **自我批評**：“這個回應違反了什麼原則？”
4. **修訂**：“更安全地重寫回應”
5.使用(prompt,revised_response)進行SFT

**階段 2：RL-CAI**
1. 使用人工智慧模型（而非人類）建立偏好標籤
2. 根據AI偏好訓練獎勵模型
3. PPO 與普通 RLHF 類似

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

## 8. ORPO、SimPO：新方法

### ORPO（優勢比偏好優化）

ORPO 將 SFT 損失和偏好損失結合到**單一訓練步驟**：

```python
# Không cần reference model!
loss_ORPO = loss_SFT + lambda * loss_OR
# loss_OR = -log(sigmoid(log(odds_ratio(chosen/rejected))))
```

優點：
- 無需參考模型（節省 VRAM 50%）
- SFT和對齊同時發生
- 與 DPO 競爭的結果

### SimPO（簡單偏好最佳化）

SimPO 使用**平均對數機率**而不是與參考進行比較：

```python
# Reward được normalize theo length:
r(x, y) = (1/|y|) * sum(log π_θ(y_t | x, y_<t))

# Loss:
loss = -log_sigmoid(beta * r(chosen) - beta * r(rejected) - gamma)
# gamma: target reward margin
```

---

## 9. 代碼：使用 TRL DPOTrainer 進行 DPO 培訓

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

## 總結

- **對齊問題**：法學碩士不僅需要學習遵循指示，還需要學習**安全和誠實**
- **RLHF Pipeline**：SFT → 獎勵模型（根據人類偏好）→ PPO 優化
- **獎勵模型**：LLM修改為輸出分數，在（選擇的、拒絕的）對上進行訓練
- **DPO**：將 RLHF 簡化為監督學習，無需單獨的 RM 或 RL 循環
- **憲政人工智慧**：使用人工智慧取代人類進行自我批評並創建偏好數據
- **ORPO/SimPO**：無需參考模型的新方法，效率更高

趨勢：DPO 和 ORPO 因其簡單性和等效結果而逐漸取代 PPO。下一篇文章將討論**即時工程**——充分利用您的 LLM 的基本技能。
