---
id: 019c9619-bb07-7007-d007-bb0700000007
title: 第 7 課：Ollama REST API - OpenAI 相容端點
slug: bai-7-ollama-rest-api-openai-compatible-endpoint
description: >-
  Ollama 公開了 OpenAI 相容的 REST
  API：/api/chat、/api/generate、/api/embeddings。使用curl和Python請求。流式響應。與 OpenAI SDK
  整合。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 第 3 部分：API 整合與應用程式編程
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2149" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2149)"/>

  <!-- Decorations -->
  <g>
    <circle cx="823" cy="279" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="769" cy="185" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="268" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="91" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.1051177665153,157 1017.1051177665153,201 979,223 940.8948822334847,201 940.8948822334847,157 979,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：Ollama REST API - OpenAI 相容</tspan>
      <tspan x="60" dy="42">端點。終點</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：API 整合與應用程式編程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Ollama 不僅僅是一個 CLI 工具。它公開了一個在頂部運行的 **REST API** `http://localhost:11434`，允許任何應用程式呼叫LLM。特別是，Ollama 支援 **OpenAI 相容端點**——這意味著為 OpenAI API 編寫的程式碼幾乎可以使用 Ollama 模型。

---

## 1. 基本API

### 檢查伺服器

```bash
curl http://localhost:11434
# Output: Ollama is running
```

### /api/generate — 生成文本

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Viết hàm fibonacci bằng Python",
  "stream": false
}'
```

回應：

```json
{
  "model": "llama3.2",
  "response": "```python\ndef 斐波那契(n):\n ...",
  「完成」：真實，
  「總持續時間」：3241920000，
  “提示評估計數”：12，
  「提示評估持續時間」：180000000，
  「評估計數」：156，
  「評估持續時間」：2890000000
}
```

### /api/chat — Chat với history

```巴什
捲曲 http://localhost:11434/api/chat -d'{
  “型號”：“llama3.2”，
  「訊息」：[
    {"role": "system", "content": "您是Python專家，請用越南文回答。 "},
    {"role": "user", "content": "什麼是字典理解？ "}
  ],
  「流」：假
}'
```

### /api/embeddings — Vector embeddings

```巴什
捲曲 http://localhost:11434/api/embeddings -d'{
  “模型”：“經濟嵌入文本”，
  "prompt": "Docker是一種容器化技術"
}'
```

Response chứa vector embedding (mảng số thực), dùng cho RAG, semantic search.

---

## 2. Streaming responses

Mặc định `stream: true` — Ollama trả về từng chunk:

```巴什
捲曲 http://localhost:11434/api/generate -d'{
  “型號”：“llama3.2”，
  "prompt": "解釋微服務"
}'
```

Mỗi dòng là một JSON object:

```json
{"model":"llama3.2","response":"Micro","done":false}
{“模型”：“llama3.2”，“回應”：“服務”，“完成”：false}
{“model”：“llama3.2”，“response”：“是”，“done”：false}
…
{“模型”：“llama3.2”，“回應”：“”，“完成”：true，“total_duration”：...}
```

---

## 3. OpenAI-compatible endpoint

Ollama expose endpoint tương thích OpenAI tại `/v1/`:

```巴什
# 聊天完成（如 OpenAI）
捲曲 http://localhost:11434/v1/chat/completions -d'{
  “型號”：“llama3.2”，
  「訊息」：[
    {"role": "user", "content": "你好，你是誰？ "}
  ]
}'
```

### Dùng OpenAI Python SDK

```巴什
pip3安裝openai
```

```蟒蛇
從 openai 導入 OpenAI

# 指向 Ollama 而不是 OpenAI
客戶端 = OpenAI(
    基本網址=“http://localhost:11434/v1「，
    api_key="ollama", # Ollama 不需要金鑰，但 SDK 需要它
）

回應 = client.chat.completions.create(
    型號=“llama3.2”，
    訊息=[
        {"role": "system", "content": "用越南語回覆。"},
        {"role": "用戶", "content": "什麼是 Kubernetes？"},
    ],
    溫度=0.7，
    最大令牌=500，
）

列印（回應.選擇[0].訊息.內容）
```

### Streaming với OpenAI SDK

```蟒蛇
從 openai 導入 OpenAI

客戶端 = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

流 = client.chat.completions.create(
    型號=“llama3.2”，
    messages=[{"role": "user", "content": "用Python寫快速排序函數"}],
    流=真，
）

對於流中的區塊：
    if chunk.choices[0].delta.content:
        印出（chunk.choices[0].delta.content，end =“”，flush = True）
列印（）
```

> 💡 **Tại sao điều này quan trọng?** Bất kỳ thư viện/framework nào hỗ trợ OpenAI API (LangChain, LlamaIndex, Vercel AI SDK, Cursor, Continue.dev...) đều có thể dùng Ollama chỉ bằng cách đổi `base_url`.

---

## 4. Python requests (không cần SDK)

```蟒蛇
導入請求
導入 json

def chat（訊息，model =“llama3.2”，stream = False）：
    回應 = requests.post(
        」http://localhost:11434/api/chat「，
        json={“model”：模型，“messages”：訊息，“stream”：流}
    ）
    如果流：
        對於response.iter_lines()中的行：
            如果行：
                資料 = json.loads(行)
                如果不是資料[“完成”]：
                    產生數據[“訊息”][“內容”]
    其他：
        return response.json()["訊息"]["內容"]

# 非串流媒體
結果=聊天（[
    {"role": "user", "content": "什麼是 Docker？"}
]）
列印（結果）

#串流媒體
print("\n--- 串流 ---")
對於聊天中的令牌（
    [{"role": "user", "content": "寫一個二分查找函數"}],
    流=真
）：
    列印（令牌，結束=“”，刷新= True）
```

---

## 5. JavaScript/TypeScript (Node.js)

### Fetch API

```javascript
非同步函數聊天（訊息）{
  const 回應 = 等待獲取（'http://localhost:11434/api/chat', {
    方法：'POST'，
    headers: { 'Content-Type': 'application/json' },
    正文：JSON.stringify({
      型號：'llama3.2'，
      訊息，
      流：假，
    }),
  });
  const data =等待response.json();
  返回資料.訊息.內容；
}

// 使用
const 結果 = 等待聊天（[
  { role: 'user', content: '用 JavaScript 解釋 Promise' },
]);
控制台.log(結果);
```

### Streaming với ReadableStream

```javascript
非同步函數streamChat（訊息）{
  const 回應 = 等待獲取（'http://localhost:11434/api/chat', {
    方法：'POST'，
    headers: { 'Content-Type': 'application/json' },
    正文：JSON.stringify({
      型號：'llama3.2'，
      訊息，
      串流：真實，
    }),
  });

  const reader = response.body.getReader();
  const 解碼器 = new TextDecoder();

  而（真）{
    const { 完成，值 } = 等待 reader.read();
    如果（完成）中斷；

    constlines=decode.decode(value).split('\n').filter(Boolean);
    for (const line oflines) {
      const 資料 = JSON.parse(line);
      如果（！data.done）{
        process.stdout.write(data.message.content);
      }
    }
  }
  控制台.log();
}

等待串流聊天（[
  { role: 'user', content: '在 TypeScript 中寫一個非同步函數取得資料' },
]);
```

### Dùng OpenAI SDK cho JavaScript

```巴什
npm 安裝 openai
```

```javascript
從“openai”導入 OpenAI；

const 客戶端 = 新 OpenAI({
  基本網址：'http://localhost:11434/v1',
  apiKey: 'ollama',
});

const 完成 = 等待 client.chat.completions.create({
  型號：'llama3.2'，
  訊息：[{角色：'用戶'，內容：'你好！ ' }],
});

console.log(completion.choices[0].message.content);
```

---

## 6. API Parameters quan trọng

| Parameter | Mô tả | Mặc định |
|-----------|--------|---------|
| `temperature` | Độ sáng tạo (0.0-2.0) | 0.8 |
| `top_p` | Nucleus sampling | 0.9 |
| `top_k` | Top-k sampling | 40 |
| `num_predict` | Max tokens generate | 128 |
| `num_ctx` | Context window size | 2048 |
| `stop` | Stop sequences | `[]` |
| `seed` | Random seed (cho reproducible) | random |
| `keep_alive` | Thời gian giữ model loaded | "5m" |

```巴什
捲曲 http://localhost:11434/api/generate -d'{
  “型號”：“llama3.2”，
  "prompt": "寫一首關於程式設計的詩",
  「選項」：{
    “溫度”：1.2，
    「頂部p」：0.95，
    “num_predict”：300，
    「種子」：42
  },
  「流」：假
}'
```

---

## 7. Model management API

```巴什
# 列出模型
捲曲 http://localhost:11434/api/tags

# 顯示模型訊息
捲曲 http://localhost:11434/api/show -d '{"name": "llama3.2"}'

# 拉模型
捲曲 http://localhost:11434/api/pull -d '{"name": "gemma3:4b"}'

# 刪除模型
捲曲 http://localhost:11434/api/delete -d '{“名稱”：“米斯特拉爾”}'

# 運行模型
捲曲 http://localhost:11434/api/ps
```

---

## 8. Expose API ra mạng local

Mặc định Ollama chỉ listen trên `localhost`. Để expose cho các máy khác trong mạng:

```巴什
# 監聽所有介面
匯出 OLLAMA_HOST=0.0.0.0:11434
烏拉馬服務
```

Giờ các máy khác trong mạng có thể truy cập:

```巴什
# 從另一台設備
捲曲 http://192.168.1.100:11434/api/generate -d'{
  “型號”：“llama3.2”，
  "提示": "您好！",
  「流」：假
}'
```

> ⚠️ **Bảo mật**: Chỉ expose trong mạng nội bộ (LAN). Không expose ra internet public nếu không có authentication.

---

## Tóm tắt

| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/api/生成` | POST | Generate text |
| `/api/聊天` | POST | Chat với message history |
| `/api/嵌入` | POST | Vector embeddings |
| `/v1/聊天/完成` | POST | OpenAI-compatible |
| `/api/標籤` | GET | List models |
| `/api/顯示` | POST | Model info |
| `/api/拉` | POST | Pull model |
| `/api/ps` | GET | Running models |

---

## Bài tập

1. Dùng curl gọi `/api/聊天` với system prompt tiếng Việt
2. Viết Python script tạo chatbot terminal dùng requests + streaming
3. Dùng OpenAI SDK Python/JS trỏ tới Ollama, chạy chat
4. Đo thời gian response với các `溫度`不同（0.1、0.7、1.5）
5. 嘗試將 Ollama 暴露在 LAN 中並透過手機撥打電話（透過瀏覽器）

**下一篇文章**：使用 Python 建立本機聊天機器人 →
