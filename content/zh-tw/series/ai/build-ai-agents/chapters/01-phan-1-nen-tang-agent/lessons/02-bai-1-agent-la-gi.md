---
id: 019c9619-cc01-7001-d001-cc0100000001
title: 第一課：什麼是代理？ — 從聊天機器人到自主人工智慧
slug: bai-1-agent-la-gi
description: 定義人工智慧代理，區分聊天機器人、代理和副駕駛。感知-理性-計劃-行動循環。代理類型：反應型、深思熟慮型、混合型。最簡單的 Python 演示代理。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：代理平台 — 建置前了解
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是代理？ ——來自聊天機器人</tspan>
      <tspan x="60" dy="42">自主人工智慧</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：代理平台 — 建置前了解</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您已使用 ChatGPT。您已經看到人工智慧回答問題、編寫程式碼、撰寫電子郵件。但想像一下，人工智慧不僅可以回答問題，還可以**自行行動**：在網路上搜尋資訊、呼叫 API、讀取資料庫、發送電子郵件，甚至在失敗時進行自我修正。

那就是**AI Agent**——2025-2026年AI世界最熱門的話題。

---

## 1.什麼是代理？

### 1.1 定義

**AI Agent**是一個使用LLM（大語言模型）作為「大腦」的系統，用於：

1. **感知**：理解來自使用者或環境的輸入
2. **理由**：分析情況，制定計劃
3. **Act**（Action）：透過工具/API執行操作
4. **學習**（學習）：將結果儲存到記憶體以便下次改進

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

### 1.2 實際例子

**不是代理人：** 您問 ChatGPT “今天西貢的天氣怎麼樣？” → ChatGPT 基於訓練資料的答案（可能是錯誤的）。

**作為代理：** 你問同樣的問題→代理呼叫Weather API→取得真實資料→準確回答溫度34°C，下午有雨。

---

## 2. 聊天機器人 vs Agent vs Copilot — 明顯差異

| |聊天機器人 |副駕駛 |代理|
|---|---|---|---|
| **它是如何運作的** |回答問題 |建議、支持 |自我行動|
| **互動世界** |沒有 |限制 |完整（工具、API）|
| **自主程度** |非常低|平均 |曹 |
| **決策** |使用者決定|推薦，使用者選擇|代理人決定（可能需要批准）|
| **記憶體** |在談話中 |基於會話的 |短期+長期|
| **範例** | ChatGPT 基本 | GitHub 副駕駛 |克勞德德文 電腦使用 |

### 自治譜

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

## 3. AI 代理程式的類型

### 3.1 簡單反射代理
- 直接對當前輸入做出反應
- 沒有記憶，沒有計劃
- 例如：聊天機器人常見問題、基於規則的機器人

### 3.2 基於模型的反射代理
- 維護世界狀態的內部“模型”
- 可以處理不完整的訊息
- 例如：客戶支援機器人了解對話上下文

### 3.3 基於目標的代理
- 有明確的目標要實現
- 制定行動計畫（計畫）
- 例如：旅行預訂代理 — 在您的預算範圍內找到最便宜的機票

### 3.4 基於實用程式的代理
- 不僅實現目標，而且優化「效用」（滿意度）
- 比較並選擇最佳選項
- 範例：投資組合管理代理 — 最大回報/風險比

### 3.5 學習代理
- 透過經驗自我提升
- 使用回饋循環
- 例如：代理程式在每次審查後學習如何編寫更好的程式碼

---

## 4. 基本代理架構

每個代理程式都有 4 個主要元件：

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

### 4.1 法學碩士（腦）
大腦做出決定。 LLM 決定：呼叫哪個工具？用什麼參數？結果夠嗎？

### 4.2 工具（手）
代理與世界互動的工具：網頁搜尋、計算器、資料庫查詢、API 呼叫、檔案 I/O、程式碼執行...

### 4.3 內存
- **短期：**當前會話中的對話歷史記錄
- **長期：** 在多次會議中累積的知識（向量資料庫）

### 4.4 編排邏輯
控制循環：接收輸入→呼叫LLM→選擇工具→執行→檢查結果→重複或回傳。

---

## 5. 示範：最簡單的 Python 代理

建立最簡單的代理程式——僅使用純 Python 和 OpenAI API。

### 5.1 設置

```bash
pip install openai
```

### 5.2 程式碼

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

### 5.3 預期輸出

```
============================================================
👤 User: Thời tiết Sài Gòn hôm nay thế nào?
============================================================

🔧 Tool call [1]: get_weather({"city": "Ho Chi Minh City"})
   📦 Result: {"temp": 34, "condition": "Nắng, mưa chiều"}

🤖 Agent: Thời tiết Sài Gòn hôm nay: **34°C**, trời nắng và có thể mưa vào buổi chiều. 
   Nhớ mang ô khi ra ngoài nhé! ☀️🌧️
```

注意第三個問題－代理會打電話 `get_weather` **兩次**（河內和峴港），然後**比較**結果。這就是智能體的力量：多步驟推理+工具使用。

---

## 6. 2025–2026 年代理商趨勢

### 6.1 代理人工智慧在哪裡？

```
2023: Chatbots (Q&A, content generation)
2024: Copilots (code assist, writing assist)
2025: Single Agents (autonomous task completion)
2026: Multi-Agent Systems (coordinated agent teams)
```

### 6.2 重要里程碑

|時間 |活動 |
|------------|---------|
| 2024 年 3 月 | Devin——第一位（有爭議的）“人工智慧軟體工程師” |
| 2024 年 6 月 | Claude 3.5 Sonnet + 工具使用 — 代理的遊戲規則改變者 |
| 2024 年 10 月 |克勞德電腦使用—電腦控制代理|
| 2024 年 11 月 | Anthropic MCP — 開源連線標準 |
| 2025 年 4 月 | Google A2A 協定 — 代理程式之間相互通訊 |
| 2025–2026 |多元代理平台競賽 |

### 6.3 為什麼你現在應該學習？

- **無需了解深度 ML/DL**：代理主要透過 API 使用 LLM — 您需要工程技能，無需訓練模型
- **需求極高**：「AI 代理開發人員」是最受追捧的技能組合
- **低門檻，高上限**：開始簡單，但可以建造極其複雜的系統
- **實用**：立即應用到工作中－自動化、研究、內容、編碼......

---

## 課程總結

- **AI Agent** = LLM + 工具 + 記憶體 + 編排邏輯
- 代理與聊天機器人的不同之處在於他們能夠與外界**自行行動**
- 核心循環：感知→原因→行動→觀察→（重複）
- 5 種類型的代理：簡單反射 → 基於模型 → 基於目標 → 基於效用 → 學習
- 使用 OpenAI 函數呼叫編寫最簡單的代理
- 2025-2026年是Agentic AI時代－開始的最佳時機

## 練習

1.運行第5部分中的演示代理並嘗試提出更複雜的問題（需要呼叫許多工具）
2.新增工具： `search_web(query)` — 傳回模擬結果。代理知道什麼時候使用它嗎？
3. 想想看代理可以在您的日常工作中解決的 3 個用例
4. 閱讀部落格文章「什麼是 AI 代理？」在人類網站上
