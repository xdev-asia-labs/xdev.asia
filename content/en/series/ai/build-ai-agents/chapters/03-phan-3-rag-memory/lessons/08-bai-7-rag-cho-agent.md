---
id: 019c9619-cc07-7007-d007-cc0700000007
title: 'Lesson 7: RAG for Agents — Connecting to Knowledge Base'
slug: bai-7-rag-cho-agent
description: >-
  Build RAG pipeline for agents: document loading, chunking strategies,
  embedding models, vector store (ChromaDB, Qdrant). Semantic search vs keyword
  search. Hybrid retrieval.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 3: RAG & Memory — Give Agent memory'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'Build AI Agents: From Zero to Production'
  slug: build-ai-agents
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6349" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6349)"/>

  <!-- Decorations -->
  <g>
    <circle cx="660" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.650635094611,217.5 1051.650635094611,242.5 1030,255 1008.349364905389,242.5 1008.349364905389,217.5 1030,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: RAG for Agents — Connecting Knowledge</tspan>
      <tspan x="60" dy="42">Base</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: From Zero to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: RAG & Memory — Give Agent memory</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Agents are stronger when they have their own **knowledge base**. RAG (Retrieval-Augmented Generation) allows agents to search for information from documents, databases, or knowledge bases before responding — reducing hallucination and increasing accuracy.

---

## 1. RAG Pipeline Overview

```
Documents → Chunking → Embedding → Vector Store → Retrieval → LLM → Answer
```

## 2. Implementation with ChromaDB

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

## Summary

- RAG = allows agents to access private knowledge base
- Chunking strategy affects retrieval quality
- ChromaDB and Qdrant are the two most popular DB vectors
- Hybrid search (semantic + keyword) gives the best results

## Exercises

1. Build RAG pipeline with ChromaDB for 100+ documents
2. Compare chunking strategies: fixed-size vs recursive vs semantic
3. Implement hybrid search (semantic + BM25)
4. Integrate RAG tool into SimpleAgent from lesson 6

