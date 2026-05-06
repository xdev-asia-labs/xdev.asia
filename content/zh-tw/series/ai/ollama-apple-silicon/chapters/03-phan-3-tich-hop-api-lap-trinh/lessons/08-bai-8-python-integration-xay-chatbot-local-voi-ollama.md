---
id: 019c9619-bb08-7008-d008-bb0800000008
title: 第 8 課：Python 整合 - 使用 Ollama 建立本地聊天機器人
slug: bai-8-python-integration-xay-chatbot-local-voi-ollama
description: >-
  將 Ollama 函式庫用於 Python 和 LangChain 以及 Ollama 後端。建立具有記憶體、串流 UI 的聊天機器人。本地嵌入和簡單的
  RAG 範例。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 3 部分：API 整合與應用程式編程
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4265" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4265)"/>

  <!-- Decorations -->
  <g>
    <circle cx="946" cy="228" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="792" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="638" cy="100" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="984" cy="166" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <polygon points="945.2390923627308,86.5 945.2390923627308,129.5 908,151 870.7609076372692,129.5 870.7609076372692,86.50000000000001 908,65" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：Python 整合 - 建立聊天機器人</tspan>
      <tspan x="60" dy="42">奧拉馬本地</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：API 整合與應用程式編程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一課中，您已經了解了 Ollama API。現在使用 Python 建立真正的 AI 應用程式 — 從簡單的聊天機器人到 RAG 管道，全部在 Mac 上本地運行。

---

## 1.Ollama Python 函式庫

### 安裝

```bash
pip3 install ollama
```

### 簡單聊天

```python
import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {'role': 'system', 'content': 'Trả lời bằng tiếng Việt, ngắn gọn.'},
        {'role': 'user', 'content': 'FastAPI vs Flask: nên chọn cái nào?'},
    ]
)

print(response['message']['content'])
```

### 串流媒體

```python
import ollama

stream = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': 'Viết function merge sort bằng Python'}],
    stream=True,
)

for chunk in stream:
    print(chunk['message']['content'], end='', flush=True)
print()
```

---

## 2. 帶記憶的聊天機器人終端

```python
#!/usr/bin/env python3
"""Chatbot terminal chạy local với Ollama."""

import ollama

MODEL = "llama3.2"
SYSTEM_PROMPT = """Bạn là xDev AI, trợ lý lập trình thông minh.
- Trả lời bằng tiếng Việt
- Ngắn gọn, đi thẳng vào vấn đề
- Viết code khi được hỏi
- Giải thích rõ ràng cho beginner"""

def main():
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]

    print("🤖 xDev AI Chatbot (local)")
    print(f"📦 Model: {MODEL}")
    print("💡 Gõ 'quit' để thoát, 'clear' để xóa history\n")

    while True:
        try:
            user_input = input("👤 You: ").strip()
        except (KeyboardInterrupt, EOFError):
            print("\n\n👋 Tạm biệt!")
            break

        if not user_input:
            continue

        if user_input.lower() == 'quit':
            print("👋 Tạm biệt!")
            break

        if user_input.lower() == 'clear':
            messages = [{"role": "system", "content": SYSTEM_PROMPT}]
            print("🗑️  Đã xóa lịch sử chat\n")
            continue

        messages.append({"role": "user", "content": user_input})

        print("🤖 AI: ", end="", flush=True)

        full_response = ""
        stream = ollama.chat(model=MODEL, messages=messages, stream=True)

        for chunk in stream:
            token = chunk['message']['content']
            print(token, end="", flush=True)
            full_response += token

        print("\n")

        messages.append({"role": "assistant", "content": full_response})

        # Giới hạn history để không tốn quá nhiều context
        if len(messages) > 21:  # system + 10 turns
            messages = [messages[0]] + messages[-20:]

if __name__ == "__main__":
    main()
```

保存清 `chatbot.py` 並運行：

```bash
python3 chatbot.py
```

---

## 3. 具有豐富 UI 的聊天機器人（終端）

使用庫升級 UI `rich`：

```bash
pip3 install rich
```

```python
#!/usr/bin/env python3
"""Chatbot terminal với Rich UI."""

import ollama
from rich.console import Console
from rich.markdown import Markdown
from rich.panel import Panel
from rich.prompt import Prompt

console = Console()
MODEL = "llama3.2"

def main():
    messages = [
        {"role": "system", "content": "Trả lời bằng tiếng Việt. Dùng markdown formatting."}
    ]

    console.print(Panel.fit(
        "🤖 [bold cyan]xDev AI Chatbot[/]\n"
        f"📦 Model: [green]{MODEL}[/] (local)\n"
        "💡 Gõ [yellow]quit[/] để thoát",
        border_style="cyan"
    ))

    while True:
        user_input = Prompt.ask("\n[bold green]You[/]")

        if user_input.lower() in ('quit', 'exit'):
            console.print("\n[dim]👋 Bye![/]")
            break

        messages.append({"role": "user", "content": user_input})

        # Collect full response
        full_response = ""
        with console.status("[cyan]Đang suy nghĩ...[/]"):
            response = ollama.chat(model=MODEL, messages=messages)
            full_response = response['message']['content']

        # Render markdown
        console.print()
        console.print(Panel(
            Markdown(full_response),
            title="🤖 AI",
            border_style="blue",
            padding=(1, 2)
        ))

        messages.append({"role": "assistant", "content": full_response})

if __name__ == "__main__":
    main()
```

---

## 4.浪鏈+Ollama

[LangChain](https://www.langchain.com/) 是 LLM 應用程式最受歡迎的框架。它本身支持 Ollama。

### 安裝

```bash
pip3 install langchain langchain-ollama
```

### 簡單聊天

```python
from langchain_ollama import ChatOllama

llm = ChatOllama(model="llama3.2", temperature=0.7)

response = llm.invoke("Docker là gì? Trả lời bằng tiếng Việt, 3 câu.")
print(response.content)
```

### 帶有提示模板的鏈

```python
from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate

llm = ChatOllama(model="llama3.2")

prompt = ChatPromptTemplate.from_messages([
    ("system", "Bạn là chuyên gia {topic}. Trả lời bằng tiếng Việt."),
    ("user", "{question}"),
])

chain = prompt | llm

result = chain.invoke({
    "topic": "DevOps",
    "question": "CI/CD pipeline cơ bản gồm những bước gì?"
})
print(result.content)
```

---

## 5. 本地嵌入

嵌入將文字轉換為向量——對於語義搜尋和 RAG 至關重要。

### 使用 Ollama API

```python
import ollama

# Pull embedding model (chỉ cần lần đầu)
# ollama pull nomic-embed-text

response = ollama.embeddings(
    model='nomic-embed-text',
    prompt='Docker là công nghệ containerization'
)

embedding = response['embedding']
print(f"Dimension: {len(embedding)}")  # 768
print(f"First 5: {embedding[:5]}")
```

### 計算相似度

```python
import ollama
import numpy as np

def get_embedding(text):
    response = ollama.embeddings(model='nomic-embed-text', prompt=text)
    return np.array(response['embedding'])

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# So sánh semantic similarity
texts = [
    "Docker container giúp đóng gói ứng dụng",
    "Kubernetes orchestrates containerized applications",
    "Python là ngôn ngữ lập trình phổ biến",
    "Cách deploy app với Docker Compose",
]

query = "Làm sao chạy ứng dụng trong container?"
query_emb = get_embedding(query)

print(f"Query: {query}\n")
for text in texts:
    text_emb = get_embedding(text)
    sim = cosine_similarity(query_emb, text_emb)
    print(f"  {sim:.4f} | {text}")
```

輸出：

```
Query: Làm sao chạy ứng dụng trong container?

  0.8234 | Docker container giúp đóng gói ứng dụng
  0.7891 | Kubernetes orchestrates containerized applications
  0.4123 | Python là ngôn ngữ lập trình phổ biến
  0.8456 | Cách deploy app với Docker Compose
```

---

## 6. 簡單 RAG（檢索增強生成）

RAG=從文件中取得相關資訊→輸入提示→LLM回答較準確。

```python
#!/usr/bin/env python3
"""Simple RAG with Ollama - hoàn toàn local."""

import ollama
import numpy as np

# --- Bước 1: Chuẩn bị knowledge base ---
documents = [
    "FastAPI là web framework Python hiện đại, hỗ trợ async/await và tự động tạo OpenAPI docs.",
    "Docker Compose dùng file YAML để define và chạy multi-container Docker applications.",
    "PostgreSQL là hệ quản trị CSDL quan hệ mã nguồn mở, hỗ trợ JSON, full-text search.",
    "Kubernetes (K8s) là hệ thống orchestration container, tự động scale và heal applications.",
    "Redis là in-memory data store, thường dùng làm cache, message broker, session store.",
    "Nginx là web server và reverse proxy phổ biến, dùng để load balancing và serving static files.",
    "Git là hệ thống version control phân tán, GitHub là platform hosting Git repositories.",
    "CI/CD là quy trình tự động build, test và deploy code. Tools phổ biến: GitHub Actions, Jenkins.",
]

# --- Bước 2: Tạo embeddings cho documents ---
def get_embedding(text):
    resp = ollama.embeddings(model='nomic-embed-text', prompt=text)
    return np.array(resp['embedding'])

print("📚 Đang tạo embeddings cho knowledge base...")
doc_embeddings = [get_embedding(doc) for doc in documents]
print(f"✅ Đã index {len(documents)} documents\n")

# --- Bước 3: Retrieval ---
def retrieve(query, top_k=3):
    query_emb = get_embedding(query)
    similarities = [
        np.dot(query_emb, doc_emb) / (np.linalg.norm(query_emb) * np.linalg.norm(doc_emb))
        for doc_emb in doc_embeddings
    ]
    top_indices = np.argsort(similarities)[-top_k:][::-1]
    return [(documents[i], similarities[i]) for i in top_indices]

# --- Bước 4: Generate with context ---
def rag_query(question):
    # Retrieve relevant documents
    relevant = retrieve(question, top_k=3)

    context = "\n".join([f"- {doc}" for doc, _ in relevant])

    prompt = f"""Dựa vào thông tin sau đây để trả lời câu hỏi. Nếu thông tin không đủ, hãy nói rõ.

Thông tin:
{context}

Câu hỏi: {question}

Trả lời bằng tiếng Việt, ngắn gọn:"""

    response = ollama.chat(
        model='llama3.2',
        messages=[{'role': 'user', 'content': prompt}]
    )

    print(f"📖 Retrieved documents (similarity):")
    for doc, sim in relevant:
        print(f"   [{sim:.3f}] {doc[:80]}...")
    print()
    return response['message']['content']

# --- Sử dụng ---
questions = [
    "FastAPI có hỗ trợ async không?",
    "Dùng gì để cache trong Python app?",
    "Làm sao tự động deploy code?",
]

for q in questions:
    print(f"❓ {q}")
    answer = rag_query(q)
    print(f"💡 {answer}\n")
    print("---\n")
```

---

## 7. 非同步支持

```python
import asyncio
import ollama

async def async_chat():
    client = ollama.AsyncClient()

    response = await client.chat(
        model='llama3.2',
        messages=[{'role': 'user', 'content': 'Hello!'}]
    )
    print(response['message']['content'])

    # Streaming
    stream = await client.chat(
        model='llama3.2',
        messages=[{'role': 'user', 'content': 'Viết haiku về code'}],
        stream=True,
    )
    async for chunk in stream:
        print(chunk['message']['content'], end='', flush=True)

asyncio.run(async_chat())
```

---

## 總結

|方法|工具|使用案例 |
|----------|--------|----------|
|簡單聊天 | `ollama` 圖書館 |快速腳本，簡單聊天機器人 |
|豐富的使用者介面 | `ollama` + `rich` |漂亮的聊天機器人終端 |
|浪鏈 | `langchain-ollama` |連鎖、代理、複雜管道|
|嵌入 | `nomic-embed-text` |語義搜索，RAG |
|非同步 | `ollama.AsyncClient` | Web 伺服器，並發請求 |

---

## 練習

1. 運行基本聊天機器人終端，聊天10次並檢查運行內存
2. 新增儲存/載入歷史記錄到 JSON 檔案的功能
3. 建立一個包含 20 多個關於您感興趣的主題的文檔的迷你 RAG
4.使用LangChain創建鏈：英文翻譯→總結→重點
5.（獎勵）創建 CLI 工具來接收文件 `.py` 並解釋一下裡面的程式碼

**下一篇文章**：視覺模型 - 分析本地圖像 →
