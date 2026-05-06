---
id: 019c9619-cc01-7001-d001-cc0100000001
title: 'レッスン 1: エージェントとは何ですか? — チャットボットから自律型AIへ'
slug: bai-1-agent-la-gi
description: >-
  AI エージェントを定義し、チャットボット、エージェント、副操縦士を区別します。知覚-理由-計画-行動のループ。エージェントの種類:
  反応型、熟議型、ハイブリッド。 Python を使用した最も単純なデモ エージェント。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: エージェント プラットフォーム — 構築する前に理解する'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9745" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9745)"/>

  <!-- Decorations -->
  <g>
    <circle cx="979" cy="267" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="858" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="737" cy="165" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="616" cy="244" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="995" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="117" x2="1100" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="147" x2="1050" y2="217" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="994.712812921102,151 994.712812921102,183 967,199 939.287187078898,183 939.287187078898,151 967,135" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: エージェントとは何ですか? — チャットボットから来ます</tspan>
      <tspan x="60" dy="42">自律型AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: エージェント プラットフォーム — 構築する前に理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ChatGPT を使用しました。 AI が質問に答えたり、コードを書いたり、メールを作成したりしているのを見たことがあるでしょう。しかし、想像してみてください。AI はただ答えるだけでなく、**自ら行動**することができます。Web 上の情報を検索し、API を呼び出し、データベースを読み取り、電子メールを送信し、失敗した場合には自己修正することもできます。

それが **AI エージェント** です。2025 年から 2026 年の AI の世界で最もホットなトピックです。

---

## 1. エージェントとは何ですか?

### 1.1 定義

**AI エージェント** は、LLM (Large Language Model) を「頭脳」として使用して次のことを行うシステムです。

1. **認識**: ユーザーまたは環境からの入力を理解します。
2. **理由**: 状況を分析し、計画を立てる
3. **Act** (アクション): ツール/API を介してアクションを実行します。
4. **学習** (学習): 次回の改善のために結果をメモリに保存します。

```
                    ┌─────────────┐
                    │   USER      │
                    │   INPUT     │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
              ┌────►│  PERCEIVE   │
              │     └──────┬──────┘
              │            │
              │     ┌──────▼──────┐
              │     │   REASON    │◄────── Memory
              │     │   & PLAN    │
              │     └──────┬──────┘
              │            │
              │     ┌──────▼──────┐
              │     │    ACT      │────── Tools
              │     │  (Execute)  │       (APIs, DB, Web...)
              │     └──────┬──────┘
              │            │
              │     ┌──────▼──────┐
              └─────│  OBSERVE    │
                    │  (Result)   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   OUTPUT    │
                    └─────────────┘
```

### 1.2 実践例

**エージェントではありません:** あなたは ChatGPT に「今日のサイゴンの天気はどうですか?」と尋ねます。 → ChatGPT は訓練データに基づいて回答します (間違っている可能性があります)。

**エージェントとして:** 同じ質問をする → エージェントが Weather API を呼び出す → 実際のデータを取得する → 気温 34°C、午後に雨が正確に回答します。

---

## 2. チャットボット vs エージェント vs 副操縦士 — 明確な区別

| |チャットボット |副操縦士 |エージェント |
|---|---|---|---|
| **仕組み** |質問に答える |提案、サポート |セルフアクション |
| **インタラクティブな世界** |いいえ |制限事項 |フル (ツール、API) |
| **自律性のレベル** |非常に低い |平均 |曹操 |
| **意思決定** |ユーザーが決定 |推奨: ユーザーは | を選択します。エージェントが決定します (承認が必要な場合があります) |
| **メモリ** |会話中 |セッションベース |短期 + 長期 |
| **例** | ChatGPT基本 | GitHub コパイロット |デビン、クロード コンピューターの使用 |

### 自律性スペクトル

```
Chatbot ◄──────────── Copilot ──────────►  Agent
  │                     │                    │
  │ "Trả lời câu hỏi"  │ "Gợi ý & hỗ trợ" │ "Tự thực hiện"
  │                     │                    │
  │ Q&A đơn giản        │ Code completion    │ Research & report
  │ Dịch thuật          │ Email drafting     │ Order processing
  │ Tóm tắt             │ Bug suggestion     │ Automated testing
```

---

## 3. AI エージェントの種類

### 3.1 単純な反射エージェント
- 現在の入力に直接反応します
- 記憶力も計画性もない
- 例: チャットボット FAQ、ルールベースのボット

### 3.2 モデルベースの反射エージェント
- 世界状態の内部「モデル」を維持する
- 不完全な情報を扱うことができる
- 例: カスタマー サポート ボットは会話のコンテキストを認識します。

### 3.3 目標ベースのエージェント
- 達成すべき明確な目標がある
・行動計画（計画）を立てる
- 例: 旅行予約エージェント — 予算内で最も安いチケットを見つける

### 3.4 ユーティリティベースのエージェント
- 目標を達成するだけでなく「効用」（満足度）を最適化する
- 比較して最適なオプションを選択します
- 例: ポートフォリオ管理エージェント — 最大リターン/リスク比

### 3.5 学習エージェント
- 経験を通じた自己改善
- フィードバックループを使用する
- 例: エージェントはレビューのたびに、より良いコードの書き方を学習します。

---

## 4. 基本的なエージェントのアーキテクチャ

すべてのエージェントには 4 つの主要コンポーネントがあります。

```
┌──────────────────────────────────────────────┐
│                  AI AGENT                     │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   LLM    │  │  TOOLS   │  │  MEMORY  │   │
│  │  (Brain) │  │  (Hands) │  │  (Mind)  │   │
│  └──────────┘  └──────────┘  └──────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │        ORCHESTRATION LOGIC           │    │
│  │   (Agent Loop / State Machine)       │    │
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

### 4.1 LLM (脳)
脳は決断を下します。 LLM が決定します: どのツールを呼び出すか?どのようなパラメータで?結果は十分ですか？

### 4.2 ツール (手)
エージェントが世界と対話するためのツール: Web 検索、電卓、データベース クエリ、API 呼び出し、ファイル I/O、コード実行...

### 4.3 メモリ
- **短期:** 現在のセッションでの会話履歴
- **長期:** 多くのセッションで蓄積されたナレッジ (ベクター DB)

### 4.4 オーケストレーション ロジック
制御ループ: 入力の受信 → LLM の呼び出し → ツールの選択 → 実行 → 結果の確認 → 繰り返すまたは戻ります。

---

## 5. デモ: Python を使用した最も単純なエージェント

純粋な Python と OpenAI API のみを使用して、可能な限り単純なエージェントを構築します。

### 5.1 セットアップ

```bash
pip install openai
```

### 5.2 コード

```python
import json
from openai import OpenAI

client = OpenAI()  # Dùng OPENAI_API_KEY từ env

# Step 1: Định nghĩa tools
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Lấy thời tiết hiện tại của một thành phố",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "Tên thành phố, ví dụ: Ho Chi Minh City"
                    }
                },
                "required": ["city"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Tính toán biểu thức toán học",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Biểu thức cần tính, ví dụ: 2 + 3 * 4"
                    }
                },
                "required": ["expression"]
            }
        }
    }
]

# Step 2: Implement tool functions
def get_weather(city: str) -> str:
    """Fake weather API cho demo"""
    weather_data = {
        "Ho Chi Minh City": {"temp": 34, "condition": "Nắng, mưa chiều"},
        "Hanoi": {"temp": 28, "condition": "Nhiều mây, ẩm"},
        "Da Nang": {"temp": 30, "condition": "Nắng đẹp"},
    }
    data = weather_data.get(city, {"temp": 25, "condition": "Không có dữ liệu"})
    return json.dumps(data, ensure_ascii=False)

def calculate(expression: str) -> str:
    """Simple calculator"""
    try:
        result = eval(expression)  # ⚠️ Dùng eval cho demo, production cần sandbox
        return json.dumps({"result": result})
    except Exception as e:
        return json.dumps({"error": str(e)})

# Step 3: Tool dispatcher
tool_functions = {
    "get_weather": get_weather,
    "calculate": calculate,
}

# Step 4: The Agent Loop
def run_agent(user_message: str):
    print(f"\n{'='*60}")
    print(f"👤 User: {user_message}")
    print(f"{'='*60}")

    messages = [
        {"role": "system", "content": "Bạn là một AI assistant thông minh. "
         "Hãy sử dụng tools khi cần để trả lời chính xác."},
        {"role": "user", "content": user_message}
    ]

    # Agent loop — tối đa 5 vòng
    for step in range(5):
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            tools=tools,
        )
        
        message = response.choices[0].message
        messages.append(message)

        # Nếu LLM không gọi tool → trả lời cuối cùng
        if not message.tool_calls:
            print(f"\n🤖 Agent: {message.content}")
            return message.content

        # Nếu LLM gọi tool(s)
        for tool_call in message.tool_calls:
            func_name = tool_call.function.name
            func_args = json.loads(tool_call.function.arguments)
            
            print(f"\n🔧 Tool call [{step+1}]: {func_name}({func_args})")
            
            # Thực thi tool
            result = tool_functions[func_name](**func_args)
            print(f"   📦 Result: {result}")

            # Trả kết quả về cho LLM
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result,
            })

    return "Agent loop exceeded maximum steps."

# Step 5: Test
if __name__ == "__main__":
    run_agent("Thời tiết Sài Gòn hôm nay thế nào?")
    run_agent("Tính cho tôi: (15 * 7) + (23 * 3) - 42")
    run_agent("So sánh thời tiết Hà Nội và Đà Nẵng, thành phố nào nóng hơn bao nhiêu độ?")
```

### 5.3 期待される出力

```
============================================================
👤 User: Thời tiết Sài Gòn hôm nay thế nào?
============================================================

🔧 Tool call [1]: get_weather({"city": "Ho Chi Minh City"})
   📦 Result: {"temp": 34, "condition": "Nắng, mưa chiều"}

🤖 Agent: Thời tiết Sài Gòn hôm nay: **34°C**, trời nắng và có thể mưa vào buổi chiều. 
   Nhớ mang ô khi ra ngoài nhé! ☀️🌧️
```

3 番目の質問に注意してください。エージェントから電話があります。 `get_weather` **2 回** (ハノイとダナンの場合)、結果を**比較**します。これがエージェントの力です。複数ステップの推論とツールの使用です。

---

## 6. エージェントの傾向 2025 ～ 2026 年

### 6.1 Agentic AI はどこにありますか?

```
2023: Chatbots (Q&A, content generation)
2024: Copilots (code assist, writing assist)
2025: Single Agents (autonomous task completion)
2026: Multi-Agent Systems (coordinated agent teams)
```

### 6.2 重要なマイルストーン

|時間 |イベント |
|----------|----------|
| 2024 年 3 月 | Devin — 最初の (物議を醸す) 「AI ソフトウェア エンジニア」 |
| 2024 年 6 月 |クロード 3.5 ソネット + ツールの使用 — エージェントにとってゲームチェンジャー |
| 2024 年 10 月 |クロード コンピュータの使用 — コンピュータ制御エージェント |
| 2024 年 11 月 | Anthropic MCP — オープンソース接続標準 |
| 2025 年 4 月 | Google A2A プロトコル — エージェントは相互に通信します。
| 2025–2026 |マルチエージェント プラットフォームの競争 |

### 6.3 なぜ今学ぶ必要があるのですか?

- **深い ML/DL を知る必要はありません**: エージェントは主に API 経由で LLM を使用します。エンジニアリング スキルは必要ですが、モデルをトレーニングする必要はありません
- **非常に高い需要**: 「AI エージェント開発者」は最も求められているスキルセットです
- **障壁が低く、天井が高い**: 最初はシンプルですが、非常に複雑なシステムを構築できます。
- **実用的**: 自動化、リサーチ、コンテンツ、コーディングなど、仕事にすぐに適用できます...

---

## レッスンの概要

- **AI エージェント** = LLM + ツール + メモリ + オーケストレーション ロジック
- エージェントは、外の世界と**独自に行動する**能力がチャットボットとは異なります。
- コアループ: 知覚→理由→行動→観察→(繰り返し)
- 5種類のエージェント：Simple Reflex → Model-Based → Goal-Based → Utility-Based → Learning
- OpenAI 関数呼び出しを使用して最も単純なエージェントをコーディングしました
- 2025 ～ 2026 年は Agentic AI の時代 — 始めるのに最適な時期

## 演習

1. パート 5 でデモ エージェントを実行し、より複雑な質問をしてみます (多くのツールを呼び出す必要があります)。
2. 新しいツールを追加します。 `search_web(query)` — シミュレーション結果を返します。エージェントはそれをいつ使用するかを知っていますか?
3. エージェントが日常業務で解決できる 3 つのユースケースを考えてください。
4. ブログ投稿「AI エージェントとは?」を読んでください。 Anthropic サイトで
