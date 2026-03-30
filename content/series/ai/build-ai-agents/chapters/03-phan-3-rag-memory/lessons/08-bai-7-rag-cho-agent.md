---
id: 019c9619-cc07-7007-d007-cc0700000007
title: 'Bài 7: RAG cho Agent — Kết nối Knowledge Base'
slug: bai-7-rag-cho-agent
description: >-
  Xây RAG pipeline cho agent: document loading, chunking strategies, embedding models, vector store (ChromaDB, Qdrant). Semantic search vs keyword search. Hybrid retrieval.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: RAG & Memory — Cho Agent trí nhớ"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Agent mạnh hơn khi có **knowledge base** riêng. RAG (Retrieval-Augmented Generation) cho phép agent tìm kiếm thông tin từ documents, databases, hoặc knowledge bases trước khi trả lời — giảm hallucination và tăng độ chính xác.

---

## 1. RAG Pipeline Overview

```
Documents → Chunking → Embedding → Vector Store → Retrieval → LLM → Answer
```

## 2. Implementation với ChromaDB

```python
import chromadb
from openai import OpenAI

client = OpenAI()
chroma = chromadb.PersistentClient(path="./agent_knowledge")
collection = chroma.get_or_create_collection("docs")

def add_documents(texts, metadatas=None):
    embeddings = get_embeddings(texts)
    collection.add(
        documents=texts,
        embeddings=embeddings,
        ids=[f"doc_{i}" for i in range(len(texts))],
        metadatas=metadatas,
    )

def search_knowledge(query, n_results=5):
    query_embedding = get_embeddings([query])[0]
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )
    return results["documents"][0]
```

## 3. RAG as Agent Tool

```python
@registry.register("search_knowledge", "Tìm kiếm trong knowledge base", {...})
def search_knowledge_tool(query: str) -> str:
    results = search_knowledge(query, n_results=3)
    return "\n---\n".join(results)
```

---

## Tóm tắt

- RAG = cho agent truy cập knowledge base riêng
- Chunking strategy ảnh hưởng chất lượng retrieval
- ChromaDB và Qdrant là 2 vector DB phổ biến nhất
- Hybrid search (semantic + keyword) cho kết quả tốt nhất

## Bài tập

1. Build RAG pipeline với ChromaDB cho 100+ documents
2. So sánh chunking strategies: fixed-size vs recursive vs semantic
3. Implement hybrid search (semantic + BM25)
4. Tích hợp RAG tool vào SimpleAgent từ bài 6

