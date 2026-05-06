---
id: 019c9619-bb11-7011-d011-bb1100000011
title: 'Lesson 11: Modelfiles - Custom models & system prompts'
slug: bai-11-modelfiles-custom-models-va-system-prompts
description: >-
  Modelfile syntax. Custom system prompt, temperature, top_p, stop tokens.
  Create specialized models. Manage and share custom models.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 4: Optimization, management & production setup'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Running AI Local with Ollama on Apple Silicon
  slug: ollama-apple-silicon
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7361" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7361)"/>

  <!-- Decorations -->
  <g>
    <circle cx="781" cy="193" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="962" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="643" cy="215" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="824" cy="96" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="237" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="163" x2="1100" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="193" x2="1050" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.9089653438086,194 1045.9089653438086,232 1013,251 980.0910346561914,232 980.0910346561914,194 1013,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Modelfiles - Custom models &</tspan>
      <tspan x="60" dy="42">system prompts</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Running AI Local with Ollama on Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Optimization, management & production setup</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Modelfile is how you customize models in Ollama — set system prompts, adjust parameters, create your own "character" AI. Like Dockerfile but for AI models.

---

## 1. Basic Modelfile

### Structure

```dockerfile
# Modelfile cơ bản
FROM llama3.2

SYSTEM """Bạn là trợ lý lập trình chuyên về Python.
Luôn trả lời bằng tiếng Việt.
Viết code rõ ràng, có comment."""

PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

### Create model from Modelfile

```bash
# Tạo model
ollama create xdev-py -f ./Modelfile

# Chạy
ollama run xdev-py

# Kiểm tra
ollama list | grep xdev
```

---

## 2. Directives in Modelfile

### FROM — Base model

```dockerfile
# Từ model có sẵn
FROM llama3.2

# Từ model cụ thể (tag)
FROM llama3.2:3b-instruct-q4_K_M

# Từ custom model khác
FROM xdev-py
```

### SYSTEM — System prompt

```dockerfile
SYSTEM """Bạn là xDev AI, trợ lý lập trình.

Quy tắc:
1. Trả lời bằng tiếng Việt
2. Code phải có type hints (Python)
3. Giải thích ngắn gọn, đi thẳng vào vấn đề
4. Dùng markdown formatting
5. Nếu không chắc, nói rõ "tôi không chắc chắn"
"""
```

### PARAMETER — Model parameter

```dockerfile
# Temperature: 0 = deterministic, 1 = creative (default: 0.8)
PARAMETER temperature 0.7

# Top_p: nucleus sampling (default: 0.9)
PARAMETER top_p 0.9

# Top_k: limit token candidates (default: 40)
PARAMETER top_k 40

# Context window
PARAMETER num_ctx 4096

# Max tokens to generate
PARAMETER num_predict 1024

# Repeat penalty (default: 1.1)
PARAMETER repeat_penalty 1.1

# Repeat last N tokens to check (default: 64)
PARAMETER repeat_last_n 64

# Stop sequences
PARAMETER stop "<|end|>"
PARAMETER stop "Human:"
PARAMETER stop "---"

# Seed (for reproducibility)
PARAMETER seed 42

# Mirostat sampling (0=disabled, 1=v1, 2=v2)
PARAMETER mirostat 2
PARAMETER mirostat_eta 0.1
PARAMETER mirostat_tau 5.0
```

### TEMPLATE — Chat template

```dockerfile
TEMPLATE """{{ if .System }}<|system|>
{{ .System }}<|end|>
{{ end }}{{ if .Prompt }}<|user|>
{{ .Prompt }}<|end|>
{{ end }}<|assistant|>
{{ .Response }}<|end|>
"""
```

### MESSAGE — Pre-seed conversations

```dockerfile
MESSAGE user "Xin chào!"
MESSAGE assistant "Chào bạn! Tôi là xDev AI, tôi có thể giúp gì về lập trình?"
```

### LICENSE

```dockerfile
LICENSE """
MIT License
Custom model by xDev.asia
"""
```

---

## 3. Realistic custom models example

### 3.1. Python Expert

```dockerfile
# Modelfile.python-expert
FROM llama3.2

SYSTEM """Bạn là Python Expert AI.

Quy tắc:
- Code phải có type hints
- Dùng f-strings thay format()
- Follow PEP 8
- Viết docstring cho functions
- Error handling với specific exceptions
- Suggest test cases khi viết function

Không bao giờ dùng: global variables, bare except, eval, exec.
Trả lời bằng tiếng Việt, code bằng Python."""

PARAMETER temperature 0.3
PARAMETER num_ctx 4096
PARAMETER num_predict 2048
PARAMETER stop "```"
```

```bash
ollama create python-expert -f Modelfile.python-expert
ollama run python-expert "Write function to validate email address"
```

### 3.2. Code Reviewer

```dockerfile
# Modelfile.code-reviewer
FROM llama3.2

SYSTEM """You are a Senior Code Reviewer.

When reviewing code, you check:
1. 🐛 Bugs & logic errors
2. 🔒 Security vulnerabilities (OWASP Top 10)
3. ⚡ Performance issues
4. 📖 Readability & maintainability
5. 🧪 Testability

Format output:
## Overview
[General comments]

## Issues
- 🔴 Critical: [...]
- 🟡 Warning: [...]
- 🟢 Suggestion: [...]

## Refactored code
[Code fixed]

Reply in Vietnamese."""

PARAMETER temperature 0.2
PARAMETER num_ctx 8192
```

### 3.3. DevOps Assistant

```dockerfile
# Modelfile.devops
FROM llama3.2

SYSTEM """You are a DevOps Engineer AI.

Expertise:
- Docker, Kubernetes, Helm
- CI/CD (GitHub Actions, GitLab CI, Jenkins)
- Infrastructure as Code (Terraform, Ansible)
- Cloud (AWS, GCP, Azure)
- Monitoring (Prometheus, Grafana)

Rules:
- Always mention security best practices
- Explain "why" not just "how"
- Provides practical YAML/JSON examples
- Warning about common pitfalls
Reply in Vietnamese."""

PARAMETER temperature 0.5
PARAMETER num_ctx 4096

MESSAGE user "Who are you?"
MESSAGE assistant "I am DevOps AI Assistant, specializing in support for Docker, K8s, CI/CD, and Infrastructure. Ask me anything about DevOps!"
```

### 3.4. SQL Generator

```dockerfile
# Modelfile.sql
FROM llama3.2

SYSTEM """You are a SQL Expert.
- Only write SQL, no lengthy explanations
- Use PostgreSQL syntax
- Include comments in SQL
- Optimize for performance
- Avoid SELECT *

Format: write SQL in code block, with 1-2 lines of explanation.
If the question is vague, ask again before writing the SQL."""

PARAMETER temperature 0.1
PARAMETER num_predict 1024
PARAMETER stop ";"
```

### 3.5. Creative Writer (Vietnamese)

```dockerfile
# Modelfile.writer
FROM llama3.2

SYSTEM """You are a creative writer writing in Vietnamese.
- Natural, smooth writing style
- Use metaphors and vivid images
- Tone appropriate to requirements (formal, casual, humorous...)
- Know how to write blog posts, poems, short stories, advertisements.

PARAMETER temperature 0.9
PARAMETER top_p 0.95
PARAMETER top_k 60
PARAMETER repeat_penalty 1.2
PARAMETER num_predict 4096
```

---

## 4. Quản lý custom models

### Liệt kê models

```bash
ollama list
```

Output:

```
NAME ID SIZE MODIFIED
python-expert abc123def 2.0 GB 5 minutes ago
code-reviewer def456ghi 2.0 GB 10 minutes ago
llama3.2:latest xyz789abc 2.0 GB 2 hours ago
```

### Xem Modelfile của model

```bash
ollama show python-expert --modelfile
```

### Copy model

```bash
ollama cp python-expert python-expert-v2
```

### Xóa model

```bash
ollama rm python-expert-v2
```

### Export/Import workflow

```bash
# Export: save Modelfile
ollama show python-expert --modelfile > Modelfile.python-expert

# Import on another machine
ollama create python-expert -f Modelfile.python-expert
```

---

## 5. Tham số model — Deep dive

### Temperature

Kiểm soát mức độ "sáng tạo":

```
temperature = 0.0 → Always choose the token with the highest probability (deterministic)
temperature = 0.5 → Balance between accuracy and diversity
temperature = 1.0 → Creative, sometimes inaccurate
temperature = 2.0 → Very random (not recommended)
```

| Use case | Temperature |
|----------|------------|
| Code generation | 0.1 - 0.3 |
| Q&A, factual | 0.3 - 0.5 |
| Chat thông thường | 0.5 - 0.8 |
| Creative writing | 0.8 - 1.0 |
| Brainstorming | 0.9 - 1.2 |

### Top_p vs Top_k

```
top_k = 40: Choose from 40 tokens with the highest probability
top_p = 0.9: Choose from tokens that account for 90% cumulative probability
```

Thường dùng **một trong hai**, không cả hai.

### Stop sequences

```dockerfile
# Stop generating when a keyword is encountered
PARAMETER stop "<|end|>"
PARAMETER stop "Human:"
PARAMETER stop "User:"

# Useful when the model often "loops" or creates its own dialogue
```

---

## 6. Test và iterate

### Script test model

```python
#!/usr/bin/env python3
"""Test custom model with multiple prompts."""

import ollama

MODEL = "python-expert"
TEST_PROMPTS = [
    "Write a function that reads CSV file and returns a list of dicts",
    "Explain the @property decorator",
    "Find bugs in this code: def add(a, b): return a * b",
    "Write unit test for function validate_email()",
]

for i, prompt in enumerate(TEST_PROMPTS, 1):
    print(f"\n{'='*60}")
    print(f"Test {i}: {prompt}")
    print('='*60)

    response = ollama.chat(
        model=MODEL,
        messages=[{'role': 'user', 'content': prompt}]
    )
    print(response['message']['content'])
```

### So sánh models

```python
import ollama

MODELS = ['llama3.2', 'python-expert', 'code-reviewer']
PROMPT = "Review code: def calc(x): return x*2+1"

for models in MODELS:
    print(f"\n--- {model} ---")
    response = ollama.chat(
        model=model,
        messages=[{'role': 'user', 'content': PROMPT}]
    )
    print(response['message']['content'][:500])
```

---

## 7. Tổ chức Modelfiles trong project

```
ai-models/
├── README.md
├── Modelfile.python-expert
├── Modelfile.code-reviewer
├── Modelfile.devops
├── Modelfile.sql
├── Modelfile.writer
├── setup.sh # Script to create all models
└── test.py # Script test models
```

`setup.sh`:

```bash
#!/bin/bash
echo "🚀 Creating custom Ollama models..."

for f in Modelfile.*; due
    name="${f#Modelfile.}"
    echo "📦 Creating: $name"
    ollama create "$name" -f "$f"
done

echo "✅ Done! Models:"
ollama list
```

---

## Tóm tắt

| Directive | Mục đích | Ví dụ |
|-----------|---------|------|
| `FROM` | Base model | `FROM llama3.2` |
| `SYSTEM` | System prompt | Personality, rules |
| `PARAMETER` | Tuning params | temperature, num_ctx |
| `TEMPLATE` | Chat format | Custom template |
| `MESSAGE` | Seed conversation | Pre-defined Q&A |
| `LICENSE` | License info | MIT, custom |

---

## Exercises

1. Create Modelfile for "Vietnamese Technical Writer" — writing technical blog posts
2. Create a "JSON Generator" model — only output JSON, no extra text
3. Compare temperature 0.1 vs 0.5 vs 0.9 with the same prompt and comments
4. Organize folder ai-models/ with 3+ Modelfiles and setup.sh script
5. (Bonus) Create "Interview Bot" model — ask interview questions, score

**Next article**: Complete Workflow — Personal AI setup →
