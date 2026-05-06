---
id: 019e0a01-bb13-7001-c001-ee1300000001
title: 'レッスン 13: ツール呼び出し、関数呼び出し、ReAct パターン'
slug: bai-13-tool-calling-function-calling-react
description: >-
  関数呼び出し API (OpenAI、Anthropic)。ツール定義、スキーマ設計。
  ReActパターンの実装。ツールの選択、エラー処理、再試行ロジック。カスタム ツール: Web 検索、データベース クエリ、API
  呼び出し、コード実行。ツール呼び出しを使用してエージェントを構築する練習をします。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 4: AI エージェントとエージェントベースのシステム'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **LLMには腕がありません。ツール呼び出しはその手です。** 純粋な LLM はテキストを生成する方法のみを知っています。Google を検索したり、データベースにクエリを実行したり、API を呼び出したりすることはできません。しかし、**関数呼び出し** (または **ツールの使用**) を装備すると、LLM は突然現実世界と対話できるようになります。つまり、リアルタイム情報を検索し、データを操作し、コードを実行し、電子メールを送信することができます。これは、**チャットボット**から**エージェント**への飛躍です。この記事では、OpenAI と Anthropic の関数呼び出し API、効果的なツール スキーマの設計方法、**ReAct パターン**を最初から実装する方法、本番環境に対応したカスタム ツールのセットを構築する方法、そして最終的にそれらをすべてまとめて完全な **Research Agent** にする方法など、あらゆる側面を詳しく掘り下げていきます。

---

## 1. 関数呼び出しとは何ですか?

＃＃＃１．１．進化: テキスト補完からツールの使用まで

LLM インタラクションの段階的な発展:

```text
Evolution of LLM Capabilities:

  2020-2022          2023 Early         2023 Mid            2024+
  ─────────          ──────────         ────────            ─────
  Text In →          Text In →          Text In →           Text In →
  Text Out           Structured Out     Function Call Out    Multi-Tool
                                                             Parallel Call
  ┌──────┐          ┌──────────┐       ┌──────────────┐    ┌──────────────┐
  │ GPT-3│          │ GPT-3.5  │       │ GPT-3.5/4    │    │ GPT-4o/      │
  │      │          │ + JSON   │       │ + Functions  │    │ Claude 3.5   │
  │"Tell │          │ mode     │       │              │    │ + Parallel   │
  │ me..."│         │          │       │ Can call     │    │   tool calls │
  │      │          │ Returns  │       │ your APIs!   │    │ + Streaming  │
  │ Free │          │ valid    │       │              │    │ + Any combo  │
  │ text │          │ JSON     │       │ Structured   │    │   of tools   │
  └──────┘          └──────────┘       │ tool call    │    └──────────────┘
                                       └──────────────┘

  Limitation:        Better but:        Game changer:       Full autonomy:
  No structure,      Still just text,   LLM can trigger     Multiple tools
  hallucinations     no actions         external actions     in one turn
```

＃＃＃１．２．関数呼び出しとツール呼び出し

これら 2 つの用語はしばしば同じ意味で使用されますが、若干の違いがあります。

|側面 |関数呼び出し |ツール呼び出し |
|----------|------|---------------|
| **元の用語** | OpenAI (2023 年 6 月) | OpenAI の名前変更 (2023 年 11 月) |
| **範囲** |関数を呼び出す |複数のツールを呼び出す (関数 + コードインタープリター + 取得) |
| **API フィールド** | `functions` (非推奨) | `tools` (現在) |
| **パラレル** |いいえ |はい (ターンごとに複数のツール呼び出し) |
| **プロバイダー** | OpenAIオリジナル | OpenAI、Anthropic、Google、Mistral、... |

> **注意:** この記事では、「ツール呼び出し」と「関数呼び出し」を同じ意味で使用します。 API について具体的に説明する場合は、そのプロバイダーの正しいパラメーター名を使用します。

＃＃＃１．３．作用機序

```text
How Tool Calling Works (high-level):

  ┌──────┐    1. Request + Tool Definitions    ┌──────────┐
  │      │ ──────────────────────────────────→ │          │
  │      │                                     │   LLM    │
  │      │    2. Response: tool_call(name,args) │          │
  │ Your │ ←────────────────────────────────── │ (GPT-4o/ │
  │ Code │                                     │  Claude) │
  │      │    3. Execute tool, send result      │          │
  │      │ ──────────────────────────────────→ │          │
  │      │                                     │          │
  │      │    4. Final response with answer     │          │
  │      │ ←────────────────────────────────── │          │
  └──────┘                                     └──────────┘

  Key Insight: LLM KHÔNG thực sự chạy function.
  Nó chỉ OUTPUT tên function + arguments (JSON).
  YOUR CODE chịu trách nhiệm execute function đó.
```

> **警告:** LLM はコードを実行しません。 「引数 Y を指定して関数 X を呼び出したい」と指定する JSON オブジェクトを生成するだけです。コードはその JSON を解析し、関数を実行して、結果を LLM に送り返します。これは重要なセキュリティ ポイントです。常に実行を制御します。

---

## 2. OpenAI 関数呼び出し API

＃＃＃２．１．ツール定義スキーマ

OpenAI は **JSON スキーマ**を使用してツールを定義します。各ツールには次のものが含まれます。 `name`、 `description`、 `parameters`。

```python
# Tool definition — OpenAI format
weather_tool = {
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": (
            "Get current weather for a specific location. "
            "Returns temperature, humidity, and conditions. "
            "Use this when user asks about weather, temperature, "
            "or outdoor conditions for any city."
        ),
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name, e.g. 'Ho Chi Minh City' or 'Tokyo, Japan'"
                },
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"],
                    "description": "Temperature unit. Default: celsius"
                }
            },
            "required": ["location"]
        }
    }
}
```

> **ヒント:** `description` はツール定義の**最も重要**な要素です。 LLM は記述に基づいて、このツールを呼び出すかどうか、いつ呼び出すかを決定します。適切な説明を書くと、エージェントはより正確に動作します。パート 4 で詳しく説明します。

＃＃＃２．２．完全な例: ツール呼び出しフロー

```python
from openai import OpenAI
import json

client = OpenAI()  # OPENAI_API_KEY from env

# ── Step 1: Define tools ──
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city. Use when user asks about weather.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g. 'Hanoi'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "Temperature unit"
                    }
                },
                "required": ["location"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_restaurants",
            "description": "Search for restaurants in a city. Use when user asks for food recommendations.",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {"type": "string", "description": "City to search in"},
                    "cuisine": {"type": "string", "description": "Type of cuisine, e.g. 'Vietnamese', 'Italian'"},
                    "price_range": {
                        "type": "string",
                        "enum": ["budget", "mid", "high"],
                        "description": "Price range filter"
                    }
                },
                "required": ["city"]
            }
        }
    }
]

# ── Step 2: Tool implementations ──
def get_weather(location: str, unit: str = "celsius") -> dict:
    """Simulated weather API call."""
    # In production: call real weather API (OpenWeatherMap, etc.)
    weather_data = {
        "Hanoi": {"temp": 32, "humidity": 78, "condition": "Partly cloudy"},
        "Ho Chi Minh City": {"temp": 35, "humidity": 82, "condition": "Thunderstorm"},
    }
    data = weather_data.get(location, {"temp": 25, "humidity": 60, "condition": "Clear"})
    if unit == "fahrenheit":
        data["temp"] = data["temp"] * 9/5 + 32
    data["unit"] = unit
    data["location"] = location
    return data

def search_restaurants(city: str, cuisine: str = None, price_range: str = None) -> list:
    """Simulated restaurant search."""
    return [
        {"name": "Pho Thin", "cuisine": "Vietnamese", "rating": 4.5, "price": "budget"},
        {"name": "Pizza 4P's", "cuisine": "Italian-Japanese", "rating": 4.7, "price": "mid"},
    ]

# Map function names to implementations
TOOL_FUNCTIONS = {
    "get_weather": get_weather,
    "search_restaurants": search_restaurants,
}

# ── Step 3: Agent loop with tool calling ──
def run_agent(user_message: str) -> str:
    """Run a complete tool-calling agent loop."""
    messages = [
        {"role": "system", "content": "You are a helpful travel assistant for Vietnam."},
        {"role": "user", "content": user_message}
    ]
    
    while True:
        # Call LLM
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=tools,
            tool_choice="auto",  # LLM decides whether to call tools
        )
        
        message = response.choices[0].message
        messages.append(message)  # Add assistant message to history
        
        # Check if LLM wants to call tools
        if not message.tool_calls:
            # No tool calls — LLM is done, return final answer
            return message.content
        
        # Execute each tool call
        for tool_call in message.tool_calls:
            func_name = tool_call.function.name
            func_args = json.loads(tool_call.function.arguments)
            
            print(f"  🔧 Calling: {func_name}({func_args})")
            
            # Execute the function
            func = TOOL_FUNCTIONS.get(func_name)
            if func:
                result = func(**func_args)
            else:
                result = {"error": f"Unknown function: {func_name}"}
            
            # Send result back to LLM
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": json.dumps(result, ensure_ascii=False)
            })
        
        # Loop continues — LLM will process tool results

# ── Run it ──
answer = run_agent("Thời tiết Hà Nội hôm nay thế nào? Gợi ý nhà hàng ngon nhé!")
print(answer)
```

＃＃＃２．３．並列関数呼び出し

GPT-4o 以降、LLM は 1 ターンで **複数のツールを同時に**呼び出すことができます。

```text
Parallel Tool Calling:

  User: "So sánh thời tiết Hà Nội và Sài Gòn, gợi ý nhà hàng ở cả 2 nơi"

  LLM Response (1 turn, 4 tool calls):
  ┌─────────────────────────────────────────────────┐
  │  tool_calls: [                                   │
  │    { name: "get_weather", args: {loc: "Hanoi"} },│
  │    { name: "get_weather", args: {loc: "HCMC"} }, │
  │    { name: "search_restaurants", args: {city: "Hanoi"} },│
  │    { name: "search_restaurants", args: {city: "HCMC"} }, │
  │  ]                                               │
  └─────────────────────────────────────────────────┘

  → Execute all 4 in parallel → Send all results back → 1 final answer

  Benefit: 1 LLM round-trip thay vì 4. Giảm latency đáng kể.
```

＃＃＃２．４． `tool_choice` パラメータ

|値 |行動 |使用例 |
|----------|----------|----------|
| `"auto"` | LLM はツールを呼び出すかどうかを決定します。デフォルト、最も人気のある |
| `"required"` | LLM **必ず** 少なくとも 1 つのツールを呼び出す |ツールが必要であることが確実にわかっている場合 |
| `"none"` | LLM **はツールを呼び出してはなりません** |テキストのみの応答を強制する |
| `{"type": "function", "function": {"name": "get_weather"}}` |このツールを強制的に正しく呼び出す |特定のツールを強制する |

```python
# Force LLM to call a specific tool
response = client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
    tool_choice={
        "type": "function",
        "function": {"name": "get_weather"}
    }
)
```

---

## 3. 人間のツールを使用する API

＃＃＃３．１．ツール定義フォーマット

Anthropic (Claude) は同様の形式を使用しますが、いくつかの違いがあります。

```python
import anthropic

client = anthropic.Anthropic()  # ANTHROPIC_API_KEY from env

# ── Anthropic tool definition ──
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a city.",
        "input_schema": {             # Anthropic dùng "input_schema" 
            "type": "object",         # thay vì "parameters"
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name"
                },
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"],
                    "description": "Temperature unit"
                }
            },
            "required": ["location"]
        }
    }
]

# ── Call Claude with tools ──
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "What's the weather in Hanoi?"}
    ]
)

# ── Process response ──
for block in response.content:
    if block.type == "tool_use":
        # Claude wants to call a tool
        print(f"Tool: {block.name}")
        print(f"Args: {block.input}")   # Anthropic dùng "input" thay vì "arguments"
        print(f"ID:   {block.id}")
    elif block.type == "text":
        print(f"Text: {block.text}")
```

＃＃＃３．２．人間のツール呼び出しの流れ

```python
def run_claude_agent(user_message: str) -> str:
    """Complete tool-calling loop with Claude."""
    messages = [{"role": "user", "content": user_message}]
    
    while True:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4096,
            tools=tools,
            messages=messages,
        )
        
        # Check stop reason
        if response.stop_reason == "end_turn":
            # Claude is done — extract text
            return "".join(
                block.text for block in response.content 
                if block.type == "text"
            )
        
        if response.stop_reason == "tool_use":
            # Claude wants to use tools
            tool_results = []
            
            for block in response.content:
                if block.type == "tool_use":
                    # Execute tool
                    func = TOOL_FUNCTIONS.get(block.name)
                    result = func(**block.input) if func else {"error": "Unknown tool"}
                    
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": json.dumps(result, ensure_ascii=False)
                    })
            
            # Add assistant response + tool results to conversation  
            messages.append({"role": "assistant", "content": response.content})
            messages.append({"role": "user", "content": tool_results})
            # Note: Anthropic đặt tool_result trong role "user"
```

＃＃＃３．３． OpenAI と Anthropic ツール呼び出しの比較

|特長 | OpenAI (GPT-4o) |人間性 (クロード 3.5+) |
|----------|------|--------------------------|
| **ツール定義キー** | `parameters` | `input_schema` |
| **応答フィールド** | `tool_calls[].function.arguments` (JSON文字列) | `content[].input` (辞書) |
| **ツール結果の役割** | `role: "tool"` | `role: "user"` + `type: "tool_result"` |
| **ツール呼び出し ID** | `tool_call.id` | `block.id` |
| **同時通話** |はい (ネイティブ) |はい (クロード 3.5 より) |
| **強制ツール** | `tool_choice: {type, function}` | `tool_choice: {type: "tool", name: "..."}` |
| **ストリーミング** |はい (デルタ チャンク) |はい (イベント ストリーム) |
| **停止理由** | `finish_reason: "tool_calls"` | `stop_reason: "tool_use"` |
| **ネストされたオブジェクト** |良いサポート |良いサポート |
| **最大ツール** | 128 | 128 (クロード 3.5) |

> **ヒント:** 複数の LLM プロバイダーをサポートするエージェントを構築する場合は、抽象化レイヤーを作成してツール呼び出し形式を正規化します。レッスン 14 (LangChain/LlamaIndex) で説明します。

---

## 4. ツール定義のベスト プラクティス

＃＃＃４．１．説明 エンジニアリング

**ツールの説明** は、LLM が適切なツールを選択するかどうかの決定要因となります。プロンプト エンジニアリングと同様、**説明エンジニアリング**も重要なスキルです。

```python
# ❌ BAD: Mơ hồ, thiếu context
bad_tool = {
    "name": "search",
    "description": "Search for stuff",    # LLM không biết search cái gì
    "input_schema": {
        "type": "object",
        "properties": {
            "q": {"type": "string"}       # Parameter name quá ngắn
        }
    }
}

# ✅ GOOD: Rõ ràng, có examples, có khi-nào-dùng
good_tool = {
    "name": "search_product_catalog",
    "description": (
        "Search the e-commerce product catalog by keyword, category, or SKU. "
        "Returns product name, price, availability, and image URL. "
        "Use this when user asks about products, prices, stock availability, "
        "or wants to find specific items. "
        "Examples: 'laptop under $1000', 'Nike Air Max size 42', 'SKU-12345'."
    ),
    "input_schema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Search keyword or phrase. Can be product name, category, or SKU."
            },
            "category": {
                "type": "string",
                "enum": ["electronics", "fashion", "home", "sports", "books"],
                "description": "Filter by product category. Optional."
            },
            "max_price": {
                "type": "number",
                "description": "Maximum price in USD. Optional."
            },
            "in_stock_only": {
                "type": "boolean",
                "description": "If true, only return items currently in stock. Default: true."
            }
        },
        "required": ["query"]
    }
}
```

＃＃＃４．２．説明 エンジニアリングチェックリスト

|要素 |説明 |例 |
|----------|----------|----------|
| **機能** |主な機能説明 | 「製品カタログを探す」 |
| **返される内容** |説明の出力形式 | "名前、価格、在庫状況を返します" |
| **使用する場合** | LLM がこのツールを呼び出すタイミング | 「ユーザーが商品について質問するときに使用します」 |
| **使用しない場合** |電話をかけるべきではない場合 | 「注文追跡には使用しないでください」 |
| **例** |具体的な入力例 | "「1000 ドル以下のラップトップ」、「ナイキ サイズ 42」" |
| **制限事項** |制限 | "クエリごとに最大 50 件の結果" |

＃＃＃４．３． Pydantic によるパラメータ検証

**Pydantic** を使用して、実行前にツール引数を検証します。

```python
from pydantic import BaseModel, Field, field_validator
from typing import Optional, Literal
from enum import Enum
import json

# ── Define tool input models ──
class WeatherInput(BaseModel):
    """Input schema for weather tool."""
    location: str = Field(
        ..., 
        description="City name, e.g. 'Hanoi' or 'Tokyo, Japan'",
        min_length=1,
        max_length=100
    )
    unit: Literal["celsius", "fahrenheit"] = Field(
        default="celsius",
        description="Temperature unit"
    )
    
    @field_validator("location")
    @classmethod
    def validate_location(cls, v: str) -> str:
        # Sanitize input — prevent injection
        if any(char in v for char in [";", "'", '"', "\\", "--"]):
            raise ValueError("Invalid characters in location")
        return v.strip()

class SearchInput(BaseModel):
    """Input schema for product search tool."""
    query: str = Field(..., min_length=1, max_length=200)
    category: Optional[str] = Field(default=None)
    max_price: Optional[float] = Field(default=None, ge=0, le=100000)
    in_stock_only: bool = Field(default=True)

# ── Auto-generate JSON Schema from Pydantic ──
def pydantic_to_openai_tool(name: str, description: str, model: type[BaseModel]) -> dict:
    """Convert Pydantic model to OpenAI tool definition."""
    schema = model.model_json_schema()
    # Remove Pydantic-specific fields not needed by OpenAI
    schema.pop("title", None)
    schema.pop("description", None)
    return {
        "type": "function",
        "function": {
            "name": name,
            "description": description,
            "parameters": schema
        }
    }

# Usage
weather_tool = pydantic_to_openai_tool(
    name="get_weather",
    description="Get current weather for a city.",
    model=WeatherInput
)
print(json.dumps(weather_tool, indent=2))

# ── Validate before executing ──
def execute_tool_safe(name: str, raw_args: dict) -> dict:
    """Validate and execute tool with Pydantic."""
    TOOL_SCHEMAS = {
        "get_weather": WeatherInput,
        "search_product_catalog": SearchInput,
    }
    
    schema = TOOL_SCHEMAS.get(name)
    if not schema:
        return {"error": f"Unknown tool: {name}"}
    
    try:
        validated = schema(**raw_args)           # Pydantic validation
        func = TOOL_FUNCTIONS[name]
        return func(**validated.model_dump())     # Execute with validated args
    except Exception as e:
        return {"error": f"Validation failed: {str(e)}"}
```

＃＃＃４．４．ツール応答でのエラー処理

実行ツールが失敗した場合、LLM が処理できるように構造化エラー メッセージを LLM に送信します。

```python
import traceback

def execute_tool_with_error_handling(
    name: str, 
    args: dict, 
    max_retries: int = 2
) -> dict:
    """Execute tool with structured error handling."""
    for attempt in range(max_retries + 1):
        try:
            func = TOOL_FUNCTIONS.get(name)
            if not func:
                return {
                    "status": "error",
                    "error_type": "unknown_tool",
                    "message": f"Tool '{name}' not found. Available: {list(TOOL_FUNCTIONS.keys())}"
                }
            
            result = func(**args)
            return {"status": "success", "data": result}
        
        except TypeError as e:
            # Wrong arguments
            return {
                "status": "error",
                "error_type": "invalid_arguments",
                "message": f"Invalid arguments for {name}: {str(e)}",
                "hint": "Please check parameter names and types."
            }
        
        except ConnectionError as e:
            if attempt < max_retries:
                continue  # Retry
            return {
                "status": "error",
                "error_type": "connection_failed",
                "message": f"Could not connect after {max_retries + 1} attempts: {str(e)}",
                "hint": "The external service may be down. Try again later."
            }
        
        except Exception as e:
            return {
                "status": "error",
                "error_type": "execution_error",
                "message": str(e),
                "traceback": traceback.format_exc()
            }
```

> **ヒント:** LLM の場合は、常に **自然言語**のエラー メッセージを返します。 LLM はエラー メッセージを読み取り、再試行するか、別のツールを試すか、ユーザーに通知するかを独自に決定します。生の例外を返さないでください。

---

## 5. ReAct パターン — 推論 + 行動

＃＃＃５．１． ReAct ペーパーのコンセプト

**ReAct** (Reasoning + Acting) は、論文 *「ReAct: Synergizing Reasoning and Acting in Language Models」* (Yao et al., 2022) で紹介されたパターンです。中心となるアイデア: LLM は、ただ盲目的に行動するのではなく、思考と行動を **交互** します。

```text
ReAct vs Other Approaches:

  Standard Prompting:          Chain-of-Thought:           ReAct:
  ┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
  │ Question →       │        │ Question →       │        │ Question →       │
  │       Answer     │        │   Think step 1   │        │   Thought 1      │
  │                  │        │   Think step 2   │        │   Action 1       │
  │ (no reasoning,   │        │   Think step 3   │        │   Observation 1  │
  │  no grounding)   │        │       Answer     │        │   Thought 2      │
  │                  │        │                  │        │   Action 2       │
  │                  │        │ (reasoning but   │        │   Observation 2  │
  │                  │        │  no grounding)   │        │   Thought 3      │
  │                  │        │                  │        │       Answer     │
  └──────────────────┘        └──────────────────┘        └──────────────────┘
                                                           
  Problem:                    Problem:                    Solution:
  Hallucination,              Can reason but              Grounded reasoning
  no fact-checking            still hallucinate           via tool feedback
```

＃＃＃５．２．思考→行動→観察のループ

```text
The ReAct Loop:

  ┌───────────────────────────────────────────────────────────────┐
  │                                                               │
  │  User Question: "Dân số Việt Nam năm 2024 là bao nhiêu?"    │
  │                                                               │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ THOUGHT 1:                              │                 │
  │  │ Tôi cần tìm dân số VN mới nhất.        │  ← LLM reasons  │
  │  │ Sẽ search web để có số liệu chính xác. │                 │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ ACTION 1:                               │                 │
  │  │ search("Vietnam population 2024")       │  ← LLM acts     │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ OBSERVATION 1:                          │                 │
  │  │ "Vietnam population: ~100.3 million     │  ← Tool output  │
  │  │  (2024 est.) — World Bank data"         │                 │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ THOUGHT 2:                              │                 │
  │  │ Đã có dữ liệu đáng tin cậy từ World    │  ← LLM reflects │
  │  │ Bank. Có thể trả lời người dùng.       │                 │
  │  └───────────────┬─────────────────────────┘                 │
  │                  │                                            │
  │                  ▼                                            │
  │  ┌─────────────────────────────────────────┐                 │
  │  │ ANSWER:                                 │                 │
  │  │ Theo World Bank, dân số Việt Nam năm    │  ← Final answer │
  │  │ 2024 ước tính khoảng 100.3 triệu người.│                 │
  │  └─────────────────────────────────────────┘                 │
  │                                                               │
  └───────────────────────────────────────────────────────────────┘
```

＃＃＃５．３． ReAct のゼロからの実装

```python
from openai import OpenAI
import json
from typing import Callable

client = OpenAI()

class ReActAgent:
    """
    ReAct Agent — implements Thought → Action → Observation loop.
    
    Khác với basic tool calling (LLM tự quyết tool), ReAct agent
    force LLM suy nghĩ trước khi act, tạo reasoning trace rõ ràng.
    """
    
    def __init__(
        self, 
        tools: dict[str, Callable],
        tool_definitions: list[dict],
        model: str = "gpt-4o",
        max_iterations: int = 10,
        verbose: bool = True,
    ):
        self.tools = tools
        self.tool_definitions = tool_definitions
        self.model = model
        self.max_iterations = max_iterations
        self.verbose = verbose
        self.trace: list[dict] = []  # Full reasoning trace
    
    def _build_system_prompt(self) -> str:
        tool_names = ", ".join(self.tools.keys())
        return f"""You are a ReAct agent. You solve problems by interleaving 
Thought and Action steps.

Available tools: {tool_names}

For each step:
1. THINK about what you know and what you need to find out
2. Decide which tool to call (or if you have enough info to answer)
3. After receiving tool results, THINK about what the results mean

Always reason step by step. Be concise in your thoughts.
When you have enough information, provide the final answer directly."""
    
    def run(self, query: str) -> str:
        """Run the ReAct loop."""
        messages = [
            {"role": "system", "content": self._build_system_prompt()},
            {"role": "user", "content": query}
        ]
        
        for i in range(self.max_iterations):
            if self.verbose:
                print(f"\n{'='*60}")
                print(f"  Iteration {i + 1}/{self.max_iterations}")
                print(f"{'='*60}")
            
            response = client.chat.completions.create(
                model=self.model,
                messages=messages,
                tools=self.tool_definitions,
                tool_choice="auto",
            )
            
            message = response.choices[0].message
            messages.append(message)
            
            # ── Thought: Extract any text reasoning ──
            if message.content:
                self.trace.append({"type": "thought", "content": message.content})
                if self.verbose:
                    print(f"  💭 Thought: {message.content[:200]}...")
            
            # ── Check if done ──
            if not message.tool_calls:
                self.trace.append({"type": "answer", "content": message.content})
                if self.verbose:
                    print(f"  ✅ Final Answer")
                return message.content
            
            # ── Action: Execute tool calls ──
            for tool_call in message.tool_calls:
                name = tool_call.function.name
                args = json.loads(tool_call.function.arguments)
                
                self.trace.append({
                    "type": "action", 
                    "tool": name, 
                    "args": args
                })
                if self.verbose:
                    print(f"  🔧 Action: {name}({json.dumps(args, ensure_ascii=False)})")
                
                # Execute tool
                try:
                    result = self.tools[name](**args)
                    result_str = json.dumps(result, ensure_ascii=False) \
                                 if not isinstance(result, str) else result
                except Exception as e:
                    result_str = json.dumps({
                        "error": str(e), 
                        "hint": "Try different parameters or another tool."
                    })
                
                # ── Observation: Tool output ──
                self.trace.append({
                    "type": "observation", 
                    "tool": name, 
                    "result": result_str[:500]
                })
                if self.verbose:
                    print(f"  👁 Observation: {result_str[:200]}...")
                
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result_str
                })
        
        return "Max iterations reached. Could not complete the task."
    
    def get_trace(self) -> list[dict]:
        """Return full reasoning trace for debugging."""
        return self.trace
    
    def print_trace(self):
        """Pretty-print the reasoning trace."""
        for i, step in enumerate(self.trace):
            if step["type"] == "thought":
                print(f"  [{i}] 💭 THOUGHT: {step['content'][:150]}")
            elif step["type"] == "action":
                print(f"  [{i}] 🔧 ACTION:  {step['tool']}({step['args']})")
            elif step["type"] == "observation":
                print(f"  [{i}] 👁 OBSERVE: {step['result'][:150]}")
            elif step["type"] == "answer":
                print(f"  [{i}] ✅ ANSWER:  {step['content'][:150]}")
```

---

## 6. カスタム ツールの構築

＃＃＃６．１．ウェブ検索ツール (Tavily)

```python
import httpx
import os

class WebSearchTool:
    """Web search tool using Tavily API."""
    
    name = "web_search"
    description = (
        "Search the web for current information. Returns top results with "
        "titles, URLs, and content snippets. Use when you need up-to-date "
        "information that may not be in your training data."
    )
    schema = {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Search query in natural language"
            },
            "max_results": {
                "type": "integer",
                "description": "Number of results to return (1-10). Default: 5",
                "default": 5
            }
        },
        "required": ["query"]
    }
    
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("TAVILY_API_KEY")
        self.base_url = "https://api.tavily.com"
    
    def __call__(self, query: str, max_results: int = 5) -> dict:
        """Execute web search."""
        response = httpx.post(
            f"{self.base_url}/search",
            json={
                "api_key": self.api_key,
                "query": query,
                "max_results": min(max_results, 10),
                "include_answer": True,
                "include_raw_content": False,
            },
            timeout=30.0
        )
        response.raise_for_status()
        data = response.json()
        
        return {
            "answer": data.get("answer", ""),
            "results": [
                {
                    "title": r["title"],
                    "url": r["url"],
                    "snippet": r["content"][:300]
                }
                for r in data.get("results", [])
            ]
        }
```

＃＃＃６．２．データベースクエリツール (SQLAlchemy)

```python
from sqlalchemy import create_engine, text
from typing import Optional

class DatabaseQueryTool:
    """Execute read-only SQL queries against a database."""
    
    name = "query_database"
    description = (
        "Execute a read-only SQL query against the application database. "
        "Returns query results as a list of rows. "
        "ONLY SELECT queries are allowed — no INSERT, UPDATE, DELETE. "
        "Use this to look up user data, order history, product info, etc."
    )
    schema = {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "SQL SELECT query to execute"
            },
            "limit": {
                "type": "integer",
                "description": "Max rows to return. Default: 20",
                "default": 20
            }
        },
        "required": ["query"]
    }
    
    # Allowlist of safe SQL operations
    ALLOWED_OPERATIONS = {"select", "show", "describe", "explain"}
    
    def __init__(self, connection_string: str):
        self.engine = create_engine(connection_string)
    
    def __call__(self, query: str, limit: int = 20) -> dict:
        """Execute SQL query with safety checks."""
        # ── Security: Only allow SELECT queries ──
        first_word = query.strip().split()[0].lower()
        if first_word not in self.ALLOWED_OPERATIONS:
            return {
                "error": f"Only SELECT queries allowed. Got: {first_word.upper()}",
                "hint": "Rephrase as a SELECT query."
            }
        
        # ── Security: Prevent SQL injection patterns ──
        dangerous_patterns = ["drop ", "delete ", "update ", "insert ", 
                              "alter ", "truncate ", "--", ";"]
        query_lower = query.lower()
        for pattern in dangerous_patterns:
            if pattern in query_lower and first_word != "select":
                return {"error": f"Potentially dangerous pattern detected: {pattern}"}
        
        # Add LIMIT if not present
        if "limit" not in query_lower:
            query = f"{query.rstrip().rstrip(';')} LIMIT {limit}"
        
        try:
            with self.engine.connect() as conn:
                result = conn.execute(text(query))
                columns = list(result.keys())
                rows = [dict(zip(columns, row)) for row in result.fetchall()]
                return {
                    "columns": columns,
                    "rows": rows,
                    "row_count": len(rows)
                }
        except Exception as e:
            return {"error": f"Query failed: {str(e)}"}
```

＃＃＃６．３．コード実行ツール (サンドボックス)

```python
import subprocess
import tempfile
import os

class CodeExecutionTool:
    """Execute Python code in a sandboxed environment."""
    
    name = "execute_python"
    description = (
        "Execute Python code and return stdout/stderr output. "
        "Use for calculations, data processing, generating charts, "
        "or any task that requires code execution. "
        "Code runs in isolated environment with 30s timeout."
    )
    schema = {
        "type": "object",
        "properties": {
            "code": {
                "type": "string",
                "description": "Python code to execute"
            }
        },
        "required": ["code"]
    }
    
    BLOCKED_IMPORTS = {"os", "subprocess", "shutil", "sys", "importlib"}
    TIMEOUT_SECONDS = 30
    
    def __call__(self, code: str) -> dict:
        """Execute Python code safely."""
        # ── Security checks ──
        for blocked in self.BLOCKED_IMPORTS:
            if f"import {blocked}" in code or f"from {blocked}" in code:
                return {
                    "error": f"Import '{blocked}' is not allowed for security reasons.",
                    "hint": "Use only safe libraries: math, json, datetime, collections, etc."
                }
        
        if "__" in code:  # Block dunder access (e.g., __import__)
            return {"error": "Double underscores not allowed for security."}
        
        # ── Execute in subprocess for isolation ──
        with tempfile.NamedTemporaryFile(
            mode='w', suffix='.py', delete=False
        ) as f:
            f.write(code)
            temp_path = f.name
        
        try:
            result = subprocess.run(
                ["python3", temp_path],
                capture_output=True,
                text=True,
                timeout=self.TIMEOUT_SECONDS,
                cwd=tempfile.gettempdir(),
                env={"PATH": os.environ.get("PATH", "")},  # Minimal env
            )
            return {
                "stdout": result.stdout[:5000],          # Truncate large output
                "stderr": result.stderr[:2000] if result.stderr else None,
                "return_code": result.returncode,
            }
        except subprocess.TimeoutExpired:
            return {"error": f"Code execution timed out after {self.TIMEOUT_SECONDS}s"}
        finally:
            os.unlink(temp_path)
```

＃＃＃６．４． API統合ツール

```python
class APIIntegrationTool:
    """Generic HTTP API caller for external service integration."""
    
    name = "call_api"
    description = (
        "Make HTTP requests to external APIs. Supports GET and POST. "
        "Use for fetching data from REST APIs, webhooks, etc."
    )
    schema = {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "description": "Full API URL including path"
            },
            "method": {
                "type": "string",
                "enum": ["GET", "POST"],
                "description": "HTTP method"
            },
            "headers": {
                "type": "object",
                "description": "HTTP headers as key-value pairs"
            },
            "body": {
                "type": "object",
                "description": "Request body for POST requests"
            }
        },
        "required": ["url", "method"]
    }
    
    # Only allow pre-approved domains
    ALLOWED_DOMAINS = [
        "api.github.com",
        "api.openweathermap.org",
        "jsonplaceholder.typicode.com",
    ]
    
    def __call__(
        self, url: str, method: str = "GET", 
        headers: dict = None, body: dict = None
    ) -> dict:
        """Make HTTP request with domain allowlist."""
        from urllib.parse import urlparse
        
        # ── Security: Domain allowlist ──
        domain = urlparse(url).hostname
        if domain not in self.ALLOWED_DOMAINS:
            return {
                "error": f"Domain '{domain}' not in allowlist.",
                "allowed_domains": self.ALLOWED_DOMAINS
            }
        
        try:
            if method == "GET":
                resp = httpx.get(url, headers=headers, timeout=15.0)
            elif method == "POST":
                resp = httpx.post(url, headers=headers, json=body, timeout=15.0)
            else:
                return {"error": f"Unsupported method: {method}"}
            
            return {
                "status_code": resp.status_code,
                "body": resp.json() if "json" in resp.headers.get("content-type", "") else resp.text[:3000]
            }
        except Exception as e:
            return {"error": str(e)}
```

＃＃＃６．５。完全なツールボックス クラス

すべてのツールを 1 つの管理しやすい **ツールボックス**に統合します。

```python
from dataclasses import dataclass, field
from typing import Callable, Any

@dataclass
class ToolDefinition:
    """Wrapper for a tool with its metadata and implementation."""
    name: str
    description: str
    schema: dict
    func: Callable[..., Any]
    
    def to_openai_format(self) -> dict:
        """Convert to OpenAI tool definition."""
        return {
            "type": "function",
            "function": {
                "name": self.name,
                "description": self.description,
                "parameters": self.schema,
            }
        }
    
    def to_anthropic_format(self) -> dict:
        """Convert to Anthropic tool definition."""
        return {
            "name": self.name,
            "description": self.description,
            "input_schema": self.schema,
        }


class Toolbox:
    """
    Central registry for all agent tools.
    
    Manages tool definitions, execution, and format conversion
    for multiple LLM providers.
    """
    
    def __init__(self):
        self._tools: dict[str, ToolDefinition] = {}
    
    def register(self, tool_instance) -> "Toolbox":
        """Register a tool from a class instance."""
        td = ToolDefinition(
            name=tool_instance.name,
            description=tool_instance.description,
            schema=tool_instance.schema,
            func=tool_instance,  # __call__ method
        )
        self._tools[td.name] = td
        return self  # Enable chaining
    
    def register_function(
        self, name: str, description: str, 
        schema: dict, func: Callable
    ) -> "Toolbox":
        """Register a plain function as a tool."""
        td = ToolDefinition(name=name, description=description, schema=schema, func=func)
        self._tools[td.name] = td
        return self
    
    def execute(self, name: str, args: dict) -> dict:
        """Execute a tool by name with error handling."""
        tool = self._tools.get(name)
        if not tool:
            return {"error": f"Tool '{name}' not found. Available: {list(self._tools.keys())}"}
        try:
            return tool.func(**args)
        except Exception as e:
            return {"error": f"Tool execution failed: {str(e)}"}
    
    def get_openai_tools(self) -> list[dict]:
        """Get all tool definitions in OpenAI format."""
        return [t.to_openai_format() for t in self._tools.values()]
    
    def get_anthropic_tools(self) -> list[dict]:
        """Get all tool definitions in Anthropic format."""
        return [t.to_anthropic_format() for t in self._tools.values()]
    
    def get_function_map(self) -> dict[str, Callable]:
        """Get name→function mapping for execution."""
        return {name: td.func for name, td in self._tools.items()}
    
    def list_tools(self) -> list[str]:
        """List all registered tool names."""
        return list(self._tools.keys())


# ── Usage ──
toolbox = Toolbox()
toolbox.register(WebSearchTool())
toolbox.register(DatabaseQueryTool("sqlite:///app.db"))
toolbox.register(CodeExecutionTool())
toolbox.register(APIIntegrationTool())

print(f"Registered tools: {toolbox.list_tools()}")
# ['web_search', 'query_database', 'execute_python', 'call_api']

# Works with both providers
openai_tools = toolbox.get_openai_tools()
anthropic_tools = toolbox.get_anthropic_tools()
```

---

## 7. ツールの選択とルーティング

＃＃＃７．１． LLM はどのようにツールを選択しますか?

LLM は、次の 3 つの要素に基づいてツールを選択します。

```text
How LLM Selects Tools:

  ┌─────────────────────────────────────────────────────────────┐
  │                                                             │
  │  User Message: "Tìm giá Bitcoin hôm nay"                  │
  │                                                             │
  │  LLM evaluates each tool:                                  │
  │                                                             │
  │  ┌──────────────────────┬───────────┬───────────────────┐  │
  │  │ Tool                 │ Score     │ Reasoning          │  │
  │  ├──────────────────────┼───────────┼───────────────────┤  │
  │  │ web_search           │ ★★★★★    │ "current info"     │  │
  │  │   "Search web for    │ HIGH      │ matches "hôm nay" │  │
  │  │    current info..."  │           │                    │  │
  │  ├──────────────────────┼───────────┼───────────────────┤  │
  │  │ query_database       │ ★★       │ "user data, orders"│  │
  │  │   "Query app DB..."  │ LOW       │ no crypto in DB    │  │
  │  ├──────────────────────┼───────────┼───────────────────┤  │
  │  │ execute_python       │ ★★★      │ Could calculate    │  │
  │  │   "Run Python..."    │ MEDIUM    │ but needs data src │  │
  │  └──────────────────────┴───────────┴───────────────────┘  │
  │                                                             │
  │  Winner: web_search(query="Bitcoin price today USD")       │
  │                                                             │
  └─────────────────────────────────────────────────────────────┘

  Key factors:
  1. Tool DESCRIPTION matching user intent     (most important)
  2. Tool NAME semantic similarity              (secondary)
  3. Parameter descriptions matching entities   (tertiary)
```

＃＃＃７．２．ツールチェーンパターン

```text
Common Tool Chaining Patterns:

  Pattern 1: SEQUENTIAL (output of tool A → input of tool B)
  ┌────────┐    result    ┌────────┐    result    ┌────────┐
  │ Search │────────────→│ Read   │────────────→│Summarize│
  │ Web    │             │ Page   │             │ Content │
  └────────┘             └────────┘             └────────┘
  
  Pattern 2: FAN-OUT (parallel tools, aggregate results)
                         ┌──────────┐
                    ┌───→│ Source A  │───┐
  ┌────────┐       │    └──────────┘   │    ┌───────────┐
  │  Plan  │───────┤                    ├───→│ Aggregate │
  │        │       │    ┌──────────┐   │    │ & Compare │
  └────────┘       └───→│ Source B  │───┘    └───────────┘
                         └──────────┘
  
  Pattern 3: CONDITIONAL (choose based on previous result)
  ┌────────┐    if error    ┌────────┐
  │ Try DB │───────────────→│ Try Web│
  │ Query  │                │ Search │
  └────┬───┘                └────────┘
       │ if success
       ▼
  ┌────────┐
  │ Format │
  │ Result │
  └────────┘
  
  Pattern 4: ITERATIVE (loop until condition met)
  ┌────────┐    not done    ┌────────┐    refine
  │ Search │───────────────→│ Analyze│───────────→ (back to Search)
  │        │                │ Result │
  └────────┘                └────────┘
       ↓ done
  ┌────────┐
  │ Answer │
  └────────┘
```

＃＃＃７．３． `tool_choice` 戦略ガイド

|シナリオ | `tool_choice` |理由 |
|----------|--------------|------|
|一般的なQ&Aエージェント | `"auto"` | LLM は検索するか知識から回答するかを決定します。
|データ抽出パイプライン | `"required"` |すべてのクエリにはツールが必要です (構造化データの抽出)。
|分類ステップ | `"none"` | LLM 分類するだけでツールは不要 |
|ウェザーボット | `{"name": "get_weather"}` |すべてのクエリには天気ツールが必要です。
|マルチステップ エージェント、ステップ 1 | `"required"` |スキップするのではなく、エージェントに強制的に行動させる |
|マルチステップ エージェント、最終ステップ | `"none"` |強制エージェントが合成して応答する |

```python
# Strategy: Force first action, then auto for the rest
def run_agent_with_strategy(query: str, messages: list) -> str:
    # Step 1: Force tool call
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        tools=tools,
        tool_choice="required",  # Must use at least 1 tool
    )
    # ... execute tools, add results to messages ...
    
    # Step 2+: Auto mode — let LLM decide
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        tools=tools,
        tool_choice="auto",  # LLM can answer or call more tools
    )
    return response.choices[0].message.content
```

---

## 8. エラー処理と再試行ロジック

### 8.1。実稼働グレードのエラー ハンドラー

```python
import time
import random
import logging
from functools import wraps
from typing import TypeVar, Generic
from dataclasses import dataclass

logger = logging.getLogger(__name__)

@dataclass
class ToolResult:
    """Standardized result object for all tool executions."""
    success: bool
    data: dict | None = None
    error: str | None = None
    error_type: str | None = None
    retry_count: int = 0
    latency_ms: float = 0


def with_retry(
    max_retries: int = 3,
    base_delay: float = 1.0,
    max_delay: float = 30.0,
    retryable_errors: tuple = (ConnectionError, TimeoutError),
):
    """Decorator for retry with exponential backoff + jitter."""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs) -> ToolResult:
            last_error = None
            start_time = time.time()
            
            for attempt in range(max_retries + 1):
                try:
                    result = func(*args, **kwargs)
                    latency = (time.time() - start_time) * 1000
                    return ToolResult(
                        success=True, 
                        data=result, 
                        retry_count=attempt,
                        latency_ms=latency
                    )
                except retryable_errors as e:
                    last_error = e
                    if attempt < max_retries:
                        # Exponential backoff with jitter
                        delay = min(
                            base_delay * (2 ** attempt) + random.uniform(0, 1),
                            max_delay
                        )
                        logger.warning(
                            f"Tool {func.__name__} failed (attempt {attempt + 1}/"
                            f"{max_retries + 1}): {e}. Retrying in {delay:.1f}s..."
                        )
                        time.sleep(delay)
                except Exception as e:
                    # Non-retryable error — fail immediately
                    latency = (time.time() - start_time) * 1000
                    return ToolResult(
                        success=False,
                        error=str(e),
                        error_type=type(e).__name__,
                        latency_ms=latency
                    )
            
            # All retries exhausted
            latency = (time.time() - start_time) * 1000
            return ToolResult(
                success=False,
                error=f"Failed after {max_retries + 1} attempts: {last_error}",
                error_type="RetryExhausted",
                retry_count=max_retries,
                latency_ms=latency
            )
        return wrapper
    return decorator


# ── Usage with decorator ──
@with_retry(max_retries=3, retryable_errors=(ConnectionError, TimeoutError))
def fetch_stock_price(symbol: str) -> dict:
    """Fetch stock price from API."""
    resp = httpx.get(
        f"https://api.example.com/stock/{symbol}",
        timeout=10.0
    )
    resp.raise_for_status()
    return resp.json()
```

### 8.2。グレースフル デグラデーションとフォールバック

```python
class ResilientToolbox:
    """Toolbox with fallback chains for graceful degradation."""
    
    def __init__(self):
        self.toolbox = Toolbox()
        # Fallback chains: if primary fails, try alternatives
        self.fallbacks: dict[str, list[str]] = {}
    
    def register_with_fallback(
        self, tool_instance, fallback_tools: list[str] = None
    ):
        """Register tool with fallback alternatives."""
        self.toolbox.register(tool_instance)
        if fallback_tools:
            self.fallbacks[tool_instance.name] = fallback_tools
    
    def execute(self, name: str, args: dict) -> dict:
        """Execute with automatic fallback on failure."""
        # Try primary tool
        result = self.toolbox.execute(name, args)
        
        if "error" not in result:
            return result
        
        # Primary failed — try fallbacks
        fallback_chain = self.fallbacks.get(name, [])
        for fallback_name in fallback_chain:
            logger.warning(
                f"Tool '{name}' failed, trying fallback '{fallback_name}'"
            )
            result = self.toolbox.execute(fallback_name, args)
            if "error" not in result:
                result["_fallback_used"] = fallback_name
                return result
        
        # All fallbacks failed
        return {
            "error": f"Tool '{name}' and all fallbacks failed.",
            "hint": "The requested information is temporarily unavailable.",
            "tried": [name] + fallback_chain,
        }


# ── Example: Search with fallbacks ──
resilient = ResilientToolbox()
resilient.register_with_fallback(
    WebSearchTool(),                            # Primary: Tavily
    fallback_tools=["search_backup"]            # Fallback: SerpAPI
)
```

### 8.3。 LLM のエラー メッセージの形式

```text
Error Message Design for LLM Consumption:

  ❌ BAD (raw exception):
  "ConnectionError: HTTPSConnectionPool(host='api.example.com'): 
   Max retries exceeded with url: /v1/search..."

  ✅ GOOD (structured, actionable):
  {
    "status": "error",
    "error_type": "service_unavailable",
    "message": "Web search service is temporarily unavailable.",
    "suggestion": "Try rephrasing the query or use a different approach.",
    "can_retry": true
  }

  Why? LLM reads error messages to decide next action:
  - "can_retry: true" → LLM may retry
  - "suggestion: use different approach" → LLM tries another tool
  - Clear "message" → LLM can explain to user if needed
```

---

## 9. 実践: リサーチ エージェントを構築する

これらすべてを完全な **Research Agent** にまとめます。エージェントは、Web を検索し、Web コンテンツを読み取り、情報を計算し、合成することができます。

＃＃＃９．１．インストール

```bash
pip install openai httpx pydantic
```

＃＃＃９．２．ツールの定義

```python
import httpx
import json
import re
from openai import OpenAI

client = OpenAI()

# ── Tool 1: Web Search ──
def web_search(query: str, max_results: int = 5) -> dict:
    """Search the web using Tavily API."""
    import os
    resp = httpx.post(
        "https://api.tavily.com/search",
        json={
            "api_key": os.getenv("TAVILY_API_KEY"),
            "query": query,
            "max_results": max_results,
            "include_answer": True,
        },
        timeout=30.0
    )
    data = resp.json()
    return {
        "answer": data.get("answer", ""),
        "results": [
            {"title": r["title"], "url": r["url"], "snippet": r["content"][:300]}
            for r in data.get("results", [])
        ]
    }

# ── Tool 2: Read Web Page ──
def read_webpage(url: str) -> dict:
    """Fetch and extract text content from a web page."""
    try:
        resp = httpx.get(
            url, 
            timeout=15.0, 
            follow_redirects=True,
            headers={"User-Agent": "ResearchAgent/1.0"}
        )
        # Simple HTML → text extraction
        text = re.sub(r'<script[^>]*>.*?</script>', '', resp.text, flags=re.DOTALL)
        text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
        text = re.sub(r'<[^>]+>', ' ', text)
        text = re.sub(r'\s+', ' ', text).strip()
        return {
            "url": url,
            "content": text[:5000],  # Truncate to 5K chars
            "status_code": resp.status_code,
        }
    except Exception as e:
        return {"error": str(e), "url": url}

# ── Tool 3: Calculator ──
def calculate(expression: str) -> dict:
    """Safely evaluate a math expression."""
    import ast
    import operator
    
    SAFE_OPS = {
        ast.Add: operator.add,
        ast.Sub: operator.sub,
        ast.Mult: operator.mul,
        ast.Div: operator.truediv,
        ast.Pow: operator.pow,
        ast.USub: operator.neg,
    }
    
    def _eval(node):
        if isinstance(node, ast.Constant):
            return node.value
        elif isinstance(node, ast.BinOp):
            left = _eval(node.left)
            right = _eval(node.right)
            return SAFE_OPS[type(node.op)](left, right)
        elif isinstance(node, ast.UnaryOp):
            return SAFE_OPS[type(node.op)](_eval(node.operand))
        else:
            raise ValueError(f"Unsupported operation: {type(node)}")
    
    try:
        tree = ast.parse(expression, mode='eval')
        result = _eval(tree.body)
        return {"expression": expression, "result": result}
    except Exception as e:
        return {"error": f"Cannot evaluate: {expression}. Error: {str(e)}"}

# ── Tool 4: Take Notes ──
research_notes = []

def save_note(note: str, source: str = "") -> dict:
    """Save a research note for later synthesis."""
    entry = {"note": note, "source": source, "index": len(research_notes)}
    research_notes.append(entry)
    return {"saved": True, "total_notes": len(research_notes)}

def get_notes() -> dict:
    """Retrieve all saved research notes."""
    return {"notes": research_notes, "count": len(research_notes)}
```

＃＃＃９．３．ツールの定義

```python
RESEARCH_TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "web_search",
            "description": (
                "Search the web for current information. Use when you need "
                "facts, statistics, recent events, or any info not in your knowledge. "
                "Returns top results with snippets."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"},
                    "max_results": {"type": "integer", "description": "Results count (1-10)", "default": 5}
                },
                "required": ["query"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "read_webpage",
            "description": (
                "Fetch and read the text content of a specific web page. "
                "Use after web_search to get detailed content from a URL. "
                "Returns extracted text (max 5000 chars)."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "url": {"type": "string", "description": "Full URL to read"}
                },
                "required": ["url"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Evaluate a math expression. Supports +, -, *, /, **.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {"type": "string", "description": "Math expression, e.g. '2 + 3 * 4'"}
                },
                "required": ["expression"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "save_note",
            "description": (
                "Save an important finding or note during research. "
                "Use to record key facts, statistics, or insights you want to "
                "include in the final synthesis."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "note": {"type": "string", "description": "The research note/finding"},
                    "source": {"type": "string", "description": "Source URL or reference"}
                },
                "required": ["note"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_notes",
            "description": "Retrieve all saved research notes for synthesis.",
            "parameters": {"type": "object", "properties": {}}
        }
    },
]

TOOL_MAP = {
    "web_search": web_search,
    "read_webpage": read_webpage,
    "calculate": calculate,
    "save_note": save_note,
    "get_notes": get_notes,
}
```

＃＃＃９．４．リサーチエージェントの導入

```python
class ResearchAgent:
    """
    Research Agent — searches web, reads pages, takes notes, synthesizes.
    
    Uses ReAct-style reasoning with a full tool suite.
    """
    
    SYSTEM_PROMPT = """You are a thorough research agent. Your goal is to research 
topics by searching the web, reading relevant pages, and synthesizing findings 
into a comprehensive answer.

Your workflow:
1. SEARCH for relevant information using web_search
2. READ promising pages using read_webpage for detailed content
3. SAVE important findings using save_note
4. When you have enough information, SYNTHESIZE into a clear answer

Guidelines:
- Search multiple queries to get diverse perspectives
- Read at least 2-3 sources for important claims
- Save key facts with source attribution
- Be thorough but efficient — don't over-search
- Cite sources in your final answer
- If calculations are needed, use the calculate tool"""
    
    def __init__(self, model: str = "gpt-4o", max_iterations: int = 15):
        self.model = model
        self.max_iterations = max_iterations
        self.messages = []
        self.tool_calls_log = []
    
    def research(self, query: str) -> str:
        """Conduct research on a topic and return synthesis."""
        global research_notes
        research_notes = []  # Reset notes for new research
        
        self.messages = [
            {"role": "system", "content": self.SYSTEM_PROMPT},
            {"role": "user", "content": f"Research this topic thoroughly and provide a comprehensive answer:\n\n{query}"}
        ]
        
        for iteration in range(self.max_iterations):
            print(f"\n--- Iteration {iteration + 1} ---")
            
            response = client.chat.completions.create(
                model=self.model,
                messages=self.messages,
                tools=RESEARCH_TOOLS,
                tool_choice="auto",
            )
            
            message = response.choices[0].message
            self.messages.append(message)
            
            # Print thought if any
            if message.content:
                print(f"💭 {message.content[:200]}...")
            
            # Check if done
            if not message.tool_calls:
                print(f"\n✅ Research complete after {iteration + 1} iterations")
                print(f"   Tool calls made: {len(self.tool_calls_log)}")
                return message.content
            
            # Execute tool calls
            for tc in message.tool_calls:
                name = tc.function.name
                args = json.loads(tc.function.arguments)
                
                print(f"🔧 {name}({json.dumps(args, ensure_ascii=False)[:100]})")
                
                # Execute
                func = TOOL_MAP.get(name)
                try:
                    result = func(**args) if func else {"error": f"Unknown: {name}"}
                except Exception as e:
                    result = {"error": str(e)}
                
                result_str = json.dumps(result, ensure_ascii=False)
                self.tool_calls_log.append({
                    "iteration": iteration,
                    "tool": name,
                    "args": args,
                    "result_preview": result_str[:200]
                })
                
                self.messages.append({
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "content": result_str[:8000]  # Limit context size
                })
        
        return "Research incomplete — max iterations reached."
    
    def get_log(self) -> list[dict]:
        """Return full tool call log for debugging."""
        return self.tool_calls_log


# ── Run the Research Agent ──
if __name__ == "__main__":
    agent = ResearchAgent(model="gpt-4o", max_iterations=15)
    
    result = agent.research(
        "So sánh GDP per capita của Việt Nam, Thái Lan, và Indonesia "
        "năm 2024. Nước nào tăng trưởng nhanh nhất trong 5 năm qua?"
    )
    
    print("\n" + "=" * 60)
    print("RESEARCH RESULT:")
    print("=" * 60)
    print(result)
    
    print(f"\nTotal tool calls: {len(agent.get_log())}")
    for log in agent.get_log():
        print(f"  [{log['iteration']}] {log['tool']}: {log['result_preview'][:80]}")
```

＃＃＃９．５。トレース例

上記のエージェントを実行すると、推論トレースは次のようになります。

```text
Research Agent Trace:

  --- Iteration 1 ---
  💭 I need to find GDP per capita data for Vietnam, Thailand, 
     and Indonesia for 2024 and compare 5-year growth...
  🔧 web_search({"query": "GDP per capita Vietnam Thailand Indonesia 2024"})
  
  --- Iteration 2 ---
  💭 I found some data but need to verify from another source.
     Let me read the World Bank page for detailed figures...
  🔧 read_webpage({"url": "https://data.worldbank.org/..."})
  🔧 save_note({"note": "Vietnam GDP/capita 2024: ~$4,650", 
                 "source": "World Bank"})
  
  --- Iteration 3 ---
  💭 Now I need historical data for the 5-year comparison...
  🔧 web_search({"query": "GDP per capita growth 2019-2024 Southeast Asia"})
  
  --- Iteration 4 ---
  🔧 save_note({"note": "Vietnam growth 2019-2024: +45%", ...})
  🔧 save_note({"note": "Thailand growth 2019-2024: +18%", ...})
  🔧 calculate({"expression": "4650 / 3200"})  → 1.453 (45.3% growth)
  
  --- Iteration 5 ---
  🔧 get_notes()
  💭 I have enough data. Let me synthesize...
  
  ✅ Research complete after 5 iterations
     Tool calls made: 8
```

---

## 概要

**レッスン 13 の重要なポイント:**

1. **ツール呼び出し = LLM の手** — LLM はツール名 + 引数を指定して JSON を生成し、コードが実行されます。 LLM はコードを直接実行することはありません。
2. **OpenAI を使用 `tools` + `parameters`**、人為的使用 `tools` + `input_schema`。形式は違いますがコンセプトは同じです。両方をサポートする抽象化レイヤー (ツールボックス) を構築します。
3. **説明エンジニアリング**は、プロンプト エンジニアリングと同様に重要です。 LLM が適切なツールを選択するかどうかは、ツールの説明によって決まります。内容: 何をするのか、いつ使用するのか、いつ使用しないのか、例。
4. **Pydantic 検証** — 実行前にツールの引数を常に検証します。インジェクションを防止し、型の安全性を確保し、エラーを早期に発見します。
5. **ReAct パターン** (思考 → 行動 → 観察ループ) は明確な推論トレースを作成し、デバッグに役立ち、「ブラインド」ツール呼び出しと比較して精度を高めます。
6. **カスタム ツール**はクラス パターンに従う必要があります。 `name`、 `description`、 `schema`、 `__call__`。 **Toolbox** クラスを使用して、多くのプロバイダーの形式を管理し、自動的に変換します。
7. **`tool_choice`** 戦略: `auto` 一般的な使用のために、 `required` 必ずツールが必要な場合は、特定のツールが 1 つしかない場合。
8. **エラー処理は交渉不可能です** — 指数バックオフ、フォールバック チェーン、LLM が読み取る構造化エラー メッセージを使用して再試行します。実稼働エージェントはツールの障害を適切に処理しなければなりません (MUST)。
9. **セキュリティ第一**: API ツールの入力の許可リスト、SQL の検証 (読み取り専用)、サンドボックス コードの実行、サニタイズ。ツール呼び出しは攻撃対象領域を開き、それを保護します。

```text
Tool Calling Knowledge Map (Bài 13):

  ┌──────────────────────────────────────────────────────────────┐
  │  Function Calling = LLM outputs JSON → Your code executes   │
  │                                                              │
  │  Providers:                                                  │
  │    OpenAI (tools/parameters) ←→ Anthropic (tools/input_schema)│
  │                                                              │
  │  Best Practices:                                             │
  │    Description Engineering + Pydantic Validation + Security  │
  │                                                              │
  │  ReAct Pattern:                                              │
  │    Thought → Action → Observation → (loop) → Answer         │
  │                                                              │
  │  Custom Tools:                                               │
  │    Search ─ Database ─ Code Exec ─ API ─ Notes              │
  │    ↓                                                         │
  │    Toolbox (register, execute, multi-provider format)        │
  │                                                              │
  │  Production:                                                 │
  │    Retry + Fallback + Error Messages + Logging + Security   │
  └──────────────────────────────────────────────────────────────┘
```

---

## 次の記事

**レッスン 14: LangChain と LlamaIndex – エージェント フレームワーク** – このレッスンのようにすべてを最初から構築するのではなく、最も一般的な 2 つのフレームワークを使用してエージェントをより速く構築します。 LangChain エージェントのアーキテクチャ (AgentExecutor、ツール、メモリ)、LlamaIndex エージェント (ReAct エージェント、クエリ エンジン ツール)、2 つのフレームワークの詳細な比較、および各ユースケースに適切なフレームワークを選択する方法を学びます。 Research Agent のセルフビルドから、LangChain を使用して 50 行のコードで再構築します。
