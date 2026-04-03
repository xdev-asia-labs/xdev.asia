---
id: 019c9619-bb08-7008-d008-bb0800000008
title: 'Bài 8: Python integration - Xây chatbot local với Ollama'
slug: bai-8-python-integration-xay-chatbot-local-voi-ollama
description: >-
  Dùng thư viện Ollama cho Python và LangChain với Ollama backend.
  Tạo chatbot với memory, streaming UI. Embeddings local và ví dụ RAG đơn giản.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 3: Tích hợp API & lập trình ứng dụng"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

## Giới thiệu

Bài trước bạn đã biết Ollama API. Giờ hãy xây dựng ứng dụng AI thực sự bằng Python — từ chatbot đơn giản đến RAG pipeline, tất cả chạy local trên Mac.

---

## 1. Ollama Python library

### Cài đặt

```bash
pip3 install ollama
```

### Chat đơn giản

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

### Streaming

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

## 2. Chatbot terminal với memory

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

Lưu thành `chatbot.py` và chạy:

```bash
python3 chatbot.py
```

---

## 3. Chatbot với Rich UI (terminal)

Nâng cấp UI bằng thư viện `rich`:

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

## 4. LangChain + Ollama

[LangChain](https://www.langchain.com/) là framework phổ biến nhất cho LLM applications. Nó hỗ trợ Ollama natively.

### Cài đặt

```bash
pip3 install langchain langchain-ollama
```

### Chat đơn giản

```python
from langchain_ollama import ChatOllama

llm = ChatOllama(model="llama3.2", temperature=0.7)

response = llm.invoke("Docker là gì? Trả lời bằng tiếng Việt, 3 câu.")
print(response.content)
```

### Chain với prompt template

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

## 5. Embeddings local

Embeddings chuyển text thành vectors — cần thiết cho semantic search và RAG.

### Dùng Ollama API

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

### Tính similarity

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

Output:

```
Query: Làm sao chạy ứng dụng trong container?

  0.8234 | Docker container giúp đóng gói ứng dụng
  0.7891 | Kubernetes orchestrates containerized applications
  0.4123 | Python là ngôn ngữ lập trình phổ biến
  0.8456 | Cách deploy app với Docker Compose
```

---

## 6. RAG đơn giản (Retrieval-Augmented Generation)

RAG = lấy thông tin liên quan từ tài liệu → đưa vào prompt → LLM trả lời chính xác hơn.

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

## 7. Async support

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

## Tóm tắt

| Approach | Tool | Use case |
|----------|------|----------|
| Simple chat | `ollama` library | Script nhanh, chatbot đơn giản |
| Rich UI | `ollama` + `rich` | Terminal chatbot đẹp |
| LangChain | `langchain-ollama` | Chain, agent, complex pipeline |
| Embeddings | `nomic-embed-text` | Semantic search, RAG |
| Async | `ollama.AsyncClient` | Web server, concurrent requests |

---

## Bài tập

1. Chạy chatbot terminal cơ bản, chat 10 lượt và kiểm tra memory hoạt động
2. Thêm tính năng lưu/load history ra file JSON
3. Xây RAG mini với 20+ documents về một chủ đề bạn quan tâm
4. Dùng LangChain tạo chain: dịch tiếng Anh → tóm tắt → bullet points
5. (Bonus) Tạo CLI tool nhận file `.py` và giải thích code bên trong

**Bài tiếp theo**: Vision models — Phân tích hình ảnh local →
