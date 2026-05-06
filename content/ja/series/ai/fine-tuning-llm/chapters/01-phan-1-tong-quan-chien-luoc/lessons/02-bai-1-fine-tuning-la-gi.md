---
id: 019c9619-dd01-7001-e001-dd0100000001
title: 'レッスン 1: 微調整とは何ですか? — 風景と（まだ）必要ない理由。'
slug: bai-1-fine-tuning-la-gi
description: >-
  最新の LLM コンテキストでの微調整の定義。事前トレーニング vs SFT vs RLHF/DPO。微調整する場合とそうでない場合。意思決定の枠組み:
  プロンプトエンジニアリング → RAG → 微調整。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: 概要と戦略 — いつ微調整するか?'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4800" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4800)"/>

  <!-- Decorations -->
  <g>
    <circle cx="818" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1036" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="754" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="972" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="64" x2="1100" y2="144" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="94" x2="1050" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.7749907475932,194.5 1047.7749907475932,233.5 1014,253 980.2250092524068,233.5 980.2250092524068,194.5 1014,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: 微調整とは何ですか? — 風景と</tspan>
      <tspan x="60" dy="42">なぜ（まだ）それが必要なのか</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 概要と戦略 — いつ微調整するか?</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

「微調整」は AI で最も話題になっているバズワードの 1 つですが、最も**悪用**されるテクニックでもあります。コードに取り掛かる前に、ファインチューニングとは実際何なのか、AI パイプラインのどこにあるのか、**本当に必要な場合** を理解する必要があります。

> ⚠️ **黄金律**: 80% の場合、微調整が必​​要だと思われますが、実際には即時エンジニアリングまたは RAG で十分です。微調整は最初の選択ではなく、**最後の選択**です。

---

## 1. LLM のライフサイクル

微調整を理解する前に、LLM がどのように作成されるかを見てみましょう。

```
┌──────────────────────────────────────────────────────────────────┐
│                    VÒNG ĐỜI MỘT LLM                             │
│                                                                  │
│  Phase 1: PRE-TRAINING                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện trên TOÀN BỘ internet (~15 nghìn tỷ tokens)  │    │
│  │ → Học ngôn ngữ, kiến thức, lập luận chung               │    │
│  │ Cost: $10M–$100M+ | Time: Weeks–Months | GPUs: Hàng nghìn│    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 2: SUPERVISED FINE-TUNING (SFT) ← Bạn đang ở đây        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện thêm trên dataset nhỏ, chất lượng cao        │    │
│  │ → Dạy model cách tuân thủ instructions, format, style    │    │
│  │ Cost: $10–$10,000 | Time: Minutes–Hours | GPUs: 1–8      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 3: ALIGNMENT (RLHF / DPO)                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Tinh chỉnh model theo preferences con người              │    │
│  │ → An toàn, helpful, honest                               │    │
│  │ Cost: $1,000–$50,000 | Cần human annotators              │    │
│  └─────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

### 結論

- **事前トレーニング**: モデルにインターネット全体を「読み取らせ」ます → すべてを知っていますが、どう答えるかはわかりません
- **SFT (微調整)**: 希望する形式/スタイルでモデルに応答の *方法* を教えます
- **RLHF/DPO**: 人間に「正しく」反応するようにモデルを改良する

**人々が「微調整」と言うとき、それは通常フェーズ 2、つまり SFT を意味します。**

---

## 2. ファインチューニングはどのような問題を解決しますか?

### 2.1 行動と知識

微調整が必要かどうかを判断する**最も重要**な違いは次のとおりです。

|問題 |タイプ |ソリューション |
|----------|----------|----------|
|モデルはあなたの会社の製品を知りません | **知識のギャップ** |ラグ |
|モデルの応答はベトナム語、特定の JSON 形式である必要があります。 **行動のギャップ** |微調整 |
|モデルにはリアルタイム データ (株価、天気) が必要です。 **知識のギャップ** | RAG / ツールの使い方 |
|モデルでは正しい業界用語が使用されていません。 **行動のギャップ** |微調整 |
|モデルは「話しすぎます」、簡潔に答える必要があります | **行動のギャップ** |微調整 (またはプロンプト) |
|モデルは最新の内部ポリシーを知りません | **知識のギャップ** |ラグ |

### 2.2 具体的な例

**❌ 微調整は必要ありません:**
・「チャットボットに自社製品を知ってもらいたい」 → **RAG**を利用する
- 「ドキュメントの質問にモデルが正確に答えてほしい」 → **RAG** を使用
- 「データベースを読み取って応答するモデルが必要です」 → **ツールの使用/エージェント**を使用します

**✅ 微調整が必要です:**
- 「モデルは常に特定のスキーマを使用して JSON で応答する必要があります」 → **微調整**
- 「モデルはデフォルトとは大きく異なる、独自のブランド トーンを使用する必要があります。」 → **微調整**
- 「小型モデル (Flash/Mini) は大型モデル (Pro/4o) と同じように動作する必要があります。」 → **微調整** (蒸留)
- 「モデルはベトナムの医療用語を理解する必要があります」 → **微調整** + RAG

---

## 3. 意思決定の枠組み: 3 段階のはしご

微調整する前に、次の 3 つのステップを順番に実行してください。

```
Bước 1: PROMPT ENGINEERING
├── Chi phí: $0 | Thời gian: Phút
├── Thử: System prompt tốt hơn, few-shot examples, chain-of-thought
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 2

Bước 2: RAG (Retrieval-Augmented Generation)
├── Chi phí: $50–$500 setup | Thời gian: Ngày
├── Thử: Kết nối knowledge base, vector DB
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 3

Bước 3: FINE-TUNING
├── Chi phí: $50–$10,000+ | Thời gian: Days–Weeks
├── Chuẩn bị data, train, evaluate, iterate
└── Đây là lựa chọn cuối cùng
```

### 微調整前のチェックリスト

- [ ] 少なくとも 5 つの異なるシステム プロンプト バージョンを試しましたか?
- [ ] 数ショットのプロンプト (プロンプトに 3 ～ 5 個の例) を試してみましたか?
- [ ] 新しい知識が必要な場合 → RAG を試してみましたか?
- [ ] 高品質のトレーニング データの例が少なくとも 100 個ありますか?
- [ ] トレーニングと評価を繰り返すための予算はありますか?
- [ ] モデルに長期のメンテナンス期間はありますか?

---

## 4. 微調整方法

### 4.1 完全な微調整
- **すべて**のモデルの重みを更新します
- 巨大な GPU が必要 (A100 80GB+)
- 高コスト、致命的な忘れのリスク
- 2025 ～ 2026 年には実際にはほとんど必要とされない

### 4.2 API 経由の教師あり微調整 (SFT)
- Google/OpenAI APIを使用する
- GPU管理が不要
- 早くて簡単、適度なコスト
- **これが最も一般的な方法です**

### 4.3 LoRA / QLoRA (パラメータ効率的)
- 重みの **ごく一部** のみを更新します (~0.1 ～ 1%)
- コンシューマー向け GPU (RTX 3090、T4) で実行可能
- 最低コスト
- より専門的な知識が必要です

```
┌─────────────────────────────────────────────────┐
│           So sánh 3 phương pháp                  │
│                                                  │
│  Full FT    ████████████████████  $$$$$  🔥🔥🔥  │
│  SFT (API)  ██████████           $$     🔥       │
│  LoRA       ████                 $      🔥🔥     │
│                                                  │
│  ████ = Resources    $$$ = Cost    🔥 = Difficulty│
└─────────────────────────────────────────────────┘
```

---

## 5. 2025 ～ 2026 年の景観: 微調整を提供するのは誰ですか?

|プロバイダー |サポートされているモデル |価格モデル |利点 |
|----------|------|------|----------|
| **Google (Vertex AI)** | Gemini 2.0 フラッシュ、プロ |トレーニング トークンごと |ベースモデル別の推論価格 |
| **OpenAI** | GPT-4o-mini、GPT-4o |トレーニング トークンごと |エコシステムは大きく、使いやすい |
| **人類学** |まだ出版されていない SFT |該当なし |エンドユーザーは利用できません |
| **顔を抱きしめる** |すべてのオープンソース モデル |自己ホスト型 / AutoTrain |最も柔軟、最も安価 |
| **AI と一緒に** | LLaMA、ミストラル、... |トレーニング トークンごと |インフラ管理 |
| **ナマケモノ** | LLaMA、ミストラル、... |無料 (自己ホスト型) | 2 倍高速、VRAM の削減 |

---

## 6. クイックデモ: 「Hello World」の微調整

OpenAI API を使用して、最も簡単な微調整をお楽しみください。

```python
from openai import OpenAI
import json

client = OpenAI()

# Step 1: Chuẩn bị dataset (tối thiểu ~10 examples cho demo)
training_data = [
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Giá dịch vụ thế nào?"},
        {"role": "assistant", "content": "Dạ, XDev có 3 gói: Starter (miễn phí), Pro ($29/tháng), Enterprise (liên hệ). Anh/chị quan tâm gói nào ạ? 😊"}
    ]},
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Làm sao liên hệ support?"},
        {"role": "assistant", "content": "Dạ, anh/chị có thể liên hệ qua: 📧 support@xdev.asia hoặc 💬 chat trực tiếp trên website. Team support online 9h-18h (GMT+7) các ngày trong tuần ạ!"}
    ]},
    # ... thêm 8+ examples nữa
]

# Step 2: Save thành JSONL file
with open("training_data.jsonl", "w") as f:
    for item in training_data:
        f.write(json.dumps(item, ensure_ascii=False) + "\n")

# Step 3: Upload file
file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)

# Step 4: Tạo fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

print(f"Job ID: {job.id}")
print(f"Status: {job.status}")  # → "validating_files" → "running" → "succeeded"
```

> 💡 **注意**: これは単なるデモ フローです。レッスン 7 と 9 では、実際のデータセットを使用して詳しく説明します。

---

## レッスンの概要

- **微調整** = **知識**を教えるのではなく、モデルに**行動**する方法を教える
- **知識ギャップ** → RAG を使用する | **動作ギャップ** → 微調整を使用
- 常に 3 つのステップを実行します: プロンプト エンジニアリング → RAG → 微調整
- 3 つの方法: フル FT (レア) | API 経由の SFT (人気) | LoRA（倹約）
- Google Vertex AI + OpenAI は API 微調整のための 2 つの主要なプラットフォームです
- LoRA/QLoRA による自己ホスト型、最低コスト

## 演習

1. あなたの仕事における AI の問題を 3 つリストアップします — 知識のギャップと行動のギャップを分類します
2. 問題ごとに、解決策を提案します。プロンプト エンジニアリング、RAG、または微調整?
3. 興味のあるユースケースに合わせて 10 個のトレーニング サンプル (JSONL 形式) を作成します。
4. OpenAI Cookbook のブログ投稿「微調整の実践ガイド」を読む
