---
id: 019c9619-bb07-7007-d007-bb0700000007
title: 'Bài 7: Ollama REST API - OpenAI-compatible endpoint'
slug: bai-7-ollama-rest-api-openai-compatible-endpoint
description: >-
  Ollama expose REST API tương thích OpenAI: /api/chat, /api/generate, /api/embeddings.
  Dùng curl và Python requests. Streaming responses. Tích hợp với OpenAI SDK.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 3: Tích hợp API & lập trình ứng dụng"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI &amp; ML — Bài 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: Ollama REST API - OpenAI-compatible</tspan>
      <tspan x="60" dy="42">endpoint</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Chạy AI Local với Ollama trên Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Tích hợp API &amp; lập trình ứng dụng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Ollama không chỉ là CLI tool. Nó expose một **REST API** chạy trên `http://localhost:11434`, cho phép bất kỳ ứng dụng nào gọi LLM. Đặc biệt, Ollama hỗ trợ **OpenAI-compatible endpoint** — nghĩa là code viết cho OpenAI API có thể dùng Ollama model gần như không đổi.

---

## 1. API cơ bản

### Kiểm tra server

```bash
curl http://localhost:11434
# Output: Ollama is running
```

### /api/generate — Generate text

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Viết hàm fibonacci bằng Python",
  "stream": false
}'
```

Response:

```json
{
  "model": "llama3.2",
  "response": "```python\ndef fibonacci(n):\n    ...",
  "done": true,
  "total_duration": 3241920000,
  "prompt_eval_count": 12,
  "prompt_eval_duration": 180000000,
  "eval_count": 156,
  "eval_duration": 2890000000
}
```

### /api/chat — Chat với history

```bash
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {"role": "system", "content": "Bạn là chuyên gia Python, trả lời bằng tiếng Việt."},
    {"role": "user", "content": "Dictionary comprehension là gì?"}
  ],
  "stream": false
}'
```

### /api/embeddings — Vector embeddings

```bash
curl http://localhost:11434/api/embeddings -d '{
  "model": "nomic-embed-text",
  "prompt": "Docker là công nghệ container hóa"
}'
```

Response chứa vector embedding (mảng số thực), dùng cho RAG, semantic search.

---

## 2. Streaming responses

Mặc định `stream: true` — Ollama trả về từng chunk:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Giải thích microservices"
}'
```

Mỗi dòng là một JSON object:

```json
{"model":"llama3.2","response":"Micro","done":false}
{"model":"llama3.2","response":"services","done":false}
{"model":"llama3.2","response":" là","done":false}
...
{"model":"llama3.2","response":"","done":true,"total_duration":...}
```

---

## 3. OpenAI-compatible endpoint

Ollama expose endpoint tương thích OpenAI tại `/v1/`:

```bash
# Chat completions (giống OpenAI)
curl http://localhost:11434/v1/chat/completions -d '{
  "model": "llama3.2",
  "messages": [
    {"role": "user", "content": "Hello, who are you?"}
  ]
}'
```

### Dùng OpenAI Python SDK

```bash
pip3 install openai
```

```python
from openai import OpenAI

# Trỏ tới Ollama thay vì OpenAI
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama",  # Ollama không cần key, nhưng SDK yêu cầu
)

response = client.chat.completions.create(
    model="llama3.2",
    messages=[
        {"role": "system", "content": "Trả lời bằng tiếng Việt."},
        {"role": "user", "content": "Kubernetes là gì?"},
    ],
    temperature=0.7,
    max_tokens=500,
)

print(response.choices[0].message.content)
```

### Streaming với OpenAI SDK

```python
from openai import OpenAI

client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")

stream = client.chat.completions.create(
    model="llama3.2",
    messages=[{"role": "user", "content": "Viết function quicksort bằng Python"}],
    stream=True,
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
print()
```

> 💡 **Tại sao điều này quan trọng?** Bất kỳ thư viện/framework nào hỗ trợ OpenAI API (LangChain, LlamaIndex, Vercel AI SDK, Cursor, Continue.dev...) đều có thể dùng Ollama chỉ bằng cách đổi `base_url`.

---

## 4. Python requests (không cần SDK)

```python
import requests
import json

def chat(messages, model="llama3.2", stream=False):
    response = requests.post(
        "http://localhost:11434/api/chat",
        json={"model": model, "messages": messages, "stream": stream}
    )
    if stream:
        for line in response.iter_lines():
            if line:
                data = json.loads(line)
                if not data["done"]:
                    yield data["message"]["content"]
    else:
        return response.json()["message"]["content"]

# Non-streaming
result = chat([
    {"role": "user", "content": "Docker là gì?"}
])
print(result)

# Streaming
print("\n--- Streaming ---")
for token in chat(
    [{"role": "user", "content": "Viết hàm binary search"}],
    stream=True
):
    print(token, end="", flush=True)
```

---

## 5. JavaScript/TypeScript (Node.js)

### Fetch API

```javascript
async function chat(messages) {
  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2',
      messages,
      stream: false,
    }),
  });
  const data = await response.json();
  return data.message.content;
}

// Sử dụng
const result = await chat([
  { role: 'user', content: 'Explain Promise in JavaScript' },
]);
console.log(result);
```

### Streaming với ReadableStream

```javascript
async function streamChat(messages) {
  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2',
      messages,
      stream: true,
    }),
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const lines = decoder.decode(value).split('\n').filter(Boolean);
    for (const line of lines) {
      const data = JSON.parse(line);
      if (!data.done) {
        process.stdout.write(data.message.content);
      }
    }
  }
  console.log();
}

await streamChat([
  { role: 'user', content: 'Viết async function fetch data trong TypeScript' },
]);
```

### Dùng OpenAI SDK cho JavaScript

```bash
npm install openai
```

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama',
});

const completion = await client.chat.completions.create({
  model: 'llama3.2',
  messages: [{ role: 'user', content: 'Hello!' }],
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

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Viết bài thơ về lập trình",
  "options": {
    "temperature": 1.2,
    "top_p": 0.95,
    "num_predict": 300,
    "seed": 42
  },
  "stream": false
}'
```

---

## 7. Model management API

```bash
# List models
curl http://localhost:11434/api/tags

# Show model info
curl http://localhost:11434/api/show -d '{"name": "llama3.2"}'

# Pull model
curl http://localhost:11434/api/pull -d '{"name": "gemma3:4b"}'

# Delete model
curl http://localhost:11434/api/delete -d '{"name": "mistral"}'

# Running models
curl http://localhost:11434/api/ps
```

---

## 8. Expose API ra mạng local

Mặc định Ollama chỉ listen trên `localhost`. Để expose cho các máy khác trong mạng:

```bash
# Listen trên tất cả interfaces
export OLLAMA_HOST=0.0.0.0:11434
ollama serve
```

Giờ các máy khác trong mạng có thể truy cập:

```bash
# Từ máy khác
curl http://192.168.1.100:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Hello!",
  "stream": false
}'
```

> ⚠️ **Bảo mật**: Chỉ expose trong mạng nội bộ (LAN). Không expose ra internet public nếu không có authentication.

---

## Tóm tắt

| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/api/generate` | POST | Generate text |
| `/api/chat` | POST | Chat với message history |
| `/api/embeddings` | POST | Vector embeddings |
| `/v1/chat/completions` | POST | OpenAI-compatible |
| `/api/tags` | GET | List models |
| `/api/show` | POST | Model info |
| `/api/pull` | POST | Pull model |
| `/api/ps` | GET | Running models |

---

## Bài tập

1. Dùng curl gọi `/api/chat` với system prompt tiếng Việt
2. Viết Python script tạo chatbot terminal dùng requests + streaming
3. Dùng OpenAI SDK Python/JS trỏ tới Ollama, chạy chat
4. Đo thời gian response với các `temperature` khác nhau (0.1, 0.7, 1.5)
5. Thử expose Ollama ra LAN và gọi từ điện thoại (qua browser)

**Bài tiếp theo**: Xây chatbot local với Python →
