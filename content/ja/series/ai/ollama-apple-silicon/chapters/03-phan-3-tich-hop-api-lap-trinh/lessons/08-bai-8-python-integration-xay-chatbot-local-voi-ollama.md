---
id: 019c9619-bb08-7008-d008-bb0800000008
title: 'レッスン 8: Python の統合 - Ollama を使用してローカル チャットボットを構築する'
slug: bai-8-python-integration-xay-chatbot-local-voi-ollama
description: >-
  Ollama バックエンドで Python および LangChain 用の Ollama ライブラリを使用します。メモリ、ストリーミング UI
  を備えたチャットボットを作成します。ローカル埋め込みと単純な RAG の例。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 3: API 統合とアプリケーション プログラミング'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: Python の統合 - チャットボットの構築</tspan>
      <tspan x="60" dy="42">オラマと地元で</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: API 統合とアプリケーション プログラミング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

前のレッスンで、Ollama API についてはすでに理解しました。シンプルなチャットボットから RAG パイプラインまで、すべて Mac 上でローカルに実行できる実際の AI アプリを Python で構築しましょう。

---

## 1. Ollama Python ライブラリ

### インストール

```bash
pip3 install ollama
```

### 簡単なチャット

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

### ストリーミング

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

## 2. メモリ付きチャットボット端末

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

タインを保存 `chatbot.py` そして実行します:

```bash
python3 chatbot.py
```

---

## 3. リッチなUIを備えたチャットボット（端末）

ライブラリを使用して UI をアップグレードする `rich`:

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

## 4. ラングチェーン + オラマ

[LangChain](https://www.langchain.com/) は、LLM アプリケーションの最も人気のあるフレームワークです。 Ollama をネイティブでサポートします。

### インストール

```bash
pip3 install langchain langchain-ollama
```

### 簡単なチャット

```python
from langchain_ollama import ChatOllama

llm = ChatOllama(model="llama3.2", temperature=0.7)

response = llm.invoke("Docker là gì? Trả lời bằng tiếng Việt, 3 câu.")
print(response.content)
```

### プロンプトテンプレートを使用したチェーン

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

## 5. ローカルの埋め込み

埋め込みはテキストをベクトルに変換します。これはセマンティック検索と RAG に不可欠です。

### Ollama API を使用する

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

### 類似度を計算する

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

出力:

```
Query: Làm sao chạy ứng dụng trong container?

  0.8234 | Docker container giúp đóng gói ứng dụng
  0.7891 | Kubernetes orchestrates containerized applications
  0.4123 | Python là ngôn ngữ lập trình phổ biến
  0.8456 | Cách deploy app với Docker Compose
```

---

## 6. 単純な RAG (検索拡張生成)

RAG = ドキュメントから関連情報を取得 → プロンプトに入力 → LLM がより正確に回答します。

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

## 7. 非同期のサポート

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

## 概要

|アプローチ |ツール |使用例 |
|----------|----------|----------|
|簡単なチャット | `ollama` 図書館 |高速スクリプト、シンプルなチャットボット |
|リッチなUI | `ollama` + `rich` |美しいチャットボット端末 |
|ラングチェーン | `langchain-ollama` |チェーン、エージェント、複雑なパイプライン |
|埋め込み | `nomic-embed-text` |セマンティック検索、RAG |
|非同期 | `ollama.AsyncClient` | Web サーバー、同時リクエスト |

---

## 演習

1.基本的なチャットボットターミナルを実行し、10回チャットし、動作メモリを確認します
2. 履歴をJSONファイルに保存/読み込みする機能を追加
3. 興味のあるトピックに関する 20 以上のドキュメントを含むミニ RAG を構築します
4. LangChainを使って英語翻訳→要約→箇条書きのチェーンを作成する
5. (おまけ) ファイルを受信するための CLI ツールを作成する `.py` 内部のコードを説明します

**次の記事**: ビジョン モデル — ローカル画像の分析 →
