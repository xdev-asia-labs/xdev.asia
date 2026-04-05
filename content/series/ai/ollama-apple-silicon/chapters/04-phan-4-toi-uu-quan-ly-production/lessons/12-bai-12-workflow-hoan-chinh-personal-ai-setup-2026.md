---
id: 019c9619-bb12-7012-d012-bb1200000012
title: 'Bài 12: Workflow hoàn chỉnh - Personal AI setup cho developer'
slug: bai-12-workflow-hoan-chinh-personal-ai-setup-2026
description: >-
  Dựng hệ thống AI cá nhân hoàn chỉnh với Open WebUI, Continue.dev, Ollama.
  Tích hợp Obsidian, VS Code, terminal. Privacy-first workflow.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 4: Tối ưu, quản lý & production setup"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2948" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2948)"/>

  <!-- Decorations -->
  <g>
    <circle cx="951" cy="283" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="194" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="653" cy="105" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="276" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="187" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="947.2487113059643,109 947.2487113059643,137 923,151 898.7512886940357,137 898.7512886940357,109 923,95" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Workflow hoàn chỉnh - Personal AI</tspan>
      <tspan x="60" dy="42">setup cho developer</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Chạy AI Local với Ollama trên Apple Silicon</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Tối ưu, quản lý &amp; production setup</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài cuối cùng — gộp tất cả kiến thức từ 11 bài trước thành một workflow hoàn chỉnh. Bạn sẽ có hệ thống AI cá nhân privacy-first: chat UI, code assistant, note-taking, RAG — tất cả chạy local trên Mac.

---

## 1. Kiến trúc tổng quan

```
┌─────────────────────────────────────────────┐
│              Personal AI Stack              │
│                                             │
│  ┌──────────┐  ┌───────────┐  ┌──────────┐ │
│  │ Open     │  │ Continue  │  │ Obsidian │ │
│  │ WebUI    │  │ .dev      │  │ + AI     │ │
│  │ (Chat)   │  │ (VS Code) │  │ (Notes)  │ │
│  └────┬─────┘  └─────┬─────┘  └────┬─────┘ │
│       │              │              │       │
│       └──────────────┼──────────────┘       │
│                      │                      │
│              ┌───────┴──────┐               │
│              │   Ollama     │               │
│              │ localhost:   │               │
│              │   11434      │               │
│              └───────┬──────┘               │
│                      │                      │
│              ┌───────┴──────┐               │
│              │ Apple Silicon│               │
│              │ GPU + Neural │               │
│              │   Engine     │               │
│              └──────────────┘               │
└─────────────────────────────────────────────┘
```

---

## 2. Open WebUI — ChatGPT-like UI cho Ollama

[Open WebUI](https://openwebui.com/) là web UI đẹp nhất cho Ollama, chạy local.

### Cài đặt

```bash
# Cách 1: Docker (khuyến nghị)
docker run -d \
  --name open-webui \
  -p 3000:8080 \
  -v open-webui:/app/backend/data \
  --add-host=host.docker.internal:host-gateway \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  --restart always \
  ghcr.io/open-webui/open-webui:main

# Cách 2: pip (không cần Docker)
pip3 install open-webui
open-webui serve --port 3000
```

Truy cập: `http://localhost:3000`

### Tính năng chính

- **Multi-model chat**: Switch giữa các model
- **Chat history**: Lưu và search conversations
- **Markdown**: Render code blocks, tables, math
- **File upload**: RAG với documents
- **Image generation**: Tích hợp Stable Diffusion
- **Voice**: Speech-to-text và text-to-speech
- **Preset prompts**: Library system prompts
- **Multi-user**: Hỗ trợ nhiều người dùng
- **Mobile-friendly**: Responsive UI

### Cấu hình hay

1. **Model presets**: Settings → Models → tạo preset cho từng use case
2. **System prompts**: Settings → General → Default system prompt
3. **RAG**: Upload PDF/TXT → AI trả lời dựa trên tài liệu
4. **Keyboard shortcuts**: `Ctrl+Shift+O` → New chat

---

## 3. Continue.dev — AI assistant trong VS Code

[Continue](https://continue.dev/) là extension AI mạnh nhất cho VS Code, hỗ trợ Ollama.

### Cài đặt

1. VS Code → Extensions → tìm "Continue"
2. Install **Continue - Codestral, Claude, and more**

### Cấu hình cho Ollama

Tạo/sửa `~/.continue/config.yaml`:

```yaml
models:
  - name: Ollama - Llama 3.2
    provider: ollama
    model: llama3.2
    apiBase: http://localhost:11434

  - name: Ollama - Qwen Coder
    provider: ollama
    model: qwen2.5-coder:7b
    apiBase: http://localhost:11434

  - name: Ollama - Gemma 3
    provider: ollama
    model: gemma3:12b
    apiBase: http://localhost:11434

tabAutocompleteModel:
  provider: ollama
  model: qwen2.5-coder:1.5b
  apiBase: http://localhost:11434

embeddingsProvider:
  provider: ollama
  model: nomic-embed-text
  apiBase: http://localhost:11434
```

### Sử dụng

| Tính năng | Shortcut | Mô tả |
|-----------|----------|-------|
| Chat | `Cmd+L` | Mở chat panel |
| Inline edit | `Cmd+I` | Edit code inline |
| Select + explain | Select → `Cmd+L` | Giải thích đoạn code |
| Tab autocomplete | `Tab` | Gợi ý code |
| Terminal debug | Click error | AI giải thích lỗi |

### Custom slash commands

```yaml
# ~/.continue/config.yaml
customCommands:
  - name: review
    description: Review selected code
    prompt: |
      Review code này. Tìm bugs, security issues, performance problems.
      Suggest improvements. Trả lời bằng tiếng Việt.

  - name: test
    description: Generate tests
    prompt: |
      Viết unit tests cho code này dùng pytest.
      Cover edge cases. Mock external dependencies.

  - name: doc
    description: Add documentation
    prompt: |
      Thêm docstring và comments cho code này.
      Dùng Google style docstring.
```

---

## 4. Terminal workflow

### Alias hữu ích

Thêm vào `~/.zshrc`:

```bash
# Quick chat
alias ai="ollama run llama3.2"
alias aicode="ollama run qwen2.5-coder:7b"
alias aiviet="ollama run gemma3:4b 'Trả lời bằng tiếng Việt:'"

# Pipe output to AI
alias explain="ollama run llama3.2 'Giải thích output này:'"
alias fix="ollama run qwen2.5-coder:7b 'Fix lỗi này:'"

# Quick functions
function ai-commit() {
    git diff --staged | ollama run llama3.2 "Write a concise git commit message for this diff. Follow conventional commits format. Just the message, nothing else."
}

function ai-review() {
    cat "$1" | ollama run qwen2.5-coder:7b "Review code này, tìm bugs và đề xuất cải thiện. Tiếng Việt."
}

function ai-explain() {
    cat "$1" | ollama run llama3.2 "Giải thích file code này đang làm gì. Tiếng Việt, ngắn gọn."
}
```

### Sử dụng

```bash
# Quick chat
ai "Docker volume mount là gì?"

# Pipe command output
kubectl get pods | explain

# Generate commit message
git add . && ai-commit

# Review file
ai-review src/app.py

# Explain file
ai-explain config/nginx.conf
```

---

## 5. Obsidian + AI Notes

[Obsidian](https://obsidian.md/) + plugin AI tạo "second brain" với AI local.

### Plugin: Smart Connections

1. Obsidian → Settings → Community plugins → tìm "Smart Connections"
2. Install và enable
3. Settings → Smart Connections:
   - Chat Model Platform: **Ollama**
   - Chat Model: `llama3.2`
   - Embedding Model Platform: **Ollama**
   - Embedding Model: `nomic-embed-text`

### Plugin: Copilot for Obsidian

1. Install "Copilot" plugin
2. Settings → Default Model Provider: **Ollama**
3. Ollama URL: `http://localhost:11434`

### Workflow

```
Đọc tài liệu → Highlight → AI tóm tắt → Lưu note → AI search notes
     ↓              ↓            ↓             ↓           ↓
   Input        Selection    Ollama API    Obsidian    Embeddings
                                                      + RAG local
```

---

## 6. RAG với tài liệu cá nhân

### Ollama + ChromaDB

```bash
pip3 install chromadb ollama
```

```python
#!/usr/bin/env python3
"""Personal RAG - Index và search tài liệu local."""

import ollama
import chromadb
from pathlib import Path

# Setup ChromaDB
client = chromadb.PersistentClient(path="./chroma_db")
collection = client.get_or_create_collection("my_docs")

def index_folder(folder_path):
    """Index tất cả .md và .txt files."""
    folder = Path(folder_path)
    files = list(folder.glob("**/*.md")) + list(folder.glob("**/*.txt"))

    for f in files:
        content = f.read_text(encoding='utf-8')

        # Chunk by paragraphs
        chunks = [c.strip() for c in content.split('\n\n') if c.strip()]

        for i, chunk in enumerate(chunks):
            doc_id = f"{f.stem}_{i}"

            # Generate embedding
            response = ollama.embeddings(
                model='nomic-embed-text',
                prompt=chunk
            )

            collection.upsert(
                ids=[doc_id],
                embeddings=[response['embedding']],
                documents=[chunk],
                metadatas=[{"source": str(f), "chunk": i}]
            )

    print(f"✅ Indexed {len(files)} files")

def search(query, top_k=3):
    """Search documents."""
    query_emb = ollama.embeddings(
        model='nomic-embed-text',
        prompt=query
    )['embedding']

    results = collection.query(
        query_embeddings=[query_emb],
        n_results=top_k
    )

    return results

def ask(question):
    """RAG: search + generate."""
    results = search(question)
    context = "\n\n".join(results['documents'][0])

    response = ollama.chat(
        model='llama3.2',
        messages=[{
            'role': 'user',
            'content': f"""Dựa vào context sau để trả lời câu hỏi.
Nếu không tìm thấy thông tin, nói rõ.

Context:
{context}

Câu hỏi: {question}

Trả lời bằng tiếng Việt:"""
        }]
    )
    return response['message']['content']

# Sử dụng
if __name__ == "__main__":
    # Index notes
    index_folder("~/Documents/notes")

    # Ask questions
    answer = ask("Kubernetes pod restart policy có mấy loại?")
    print(answer)
```

---

## 7. Automation scripts

### Daily AI summary

```python
#!/usr/bin/env python3
"""Tóm tắt git commits hàng ngày."""

import subprocess
import ollama
from datetime import datetime

def get_today_commits():
    result = subprocess.run(
        ['git', 'log', '--since=midnight', '--pretty=format:%s'],
        capture_output=True, text=True
    )
    return result.stdout

def daily_summary():
    commits = get_today_commits()
    if not commits:
        print("Không có commits hôm nay.")
        return

    response = ollama.chat(
        model='llama3.2',
        messages=[{
            'role': 'user',
            'content': f"""Tóm tắt những thay đổi trong ngày dựa trên git commits:

{commits}

Viết tóm tắt ngắn gọn bằng tiếng Việt, gom nhóm theo feature/fix."""
        }]
    )

    today = datetime.now().strftime('%Y-%m-%d')
    print(f"📋 Daily Summary - {today}")
    print("=" * 40)
    print(response['message']['content'])

daily_summary()
```

### Auto README generator

```python
#!/usr/bin/env python3
"""Generate README.md từ cấu trúc project."""

import ollama
import subprocess

def get_project_info():
    # File structure
    tree = subprocess.run(
        ['find', '.', '-maxdepth', '3', '-not', '-path', './.git/*',
         '-not', '-path', './node_modules/*', '-not', '-path', './.next/*'],
        capture_output=True, text=True
    ).stdout

    # Package info
    import json
    try:
        with open('package.json') as f:
            pkg = json.load(f)
    except FileNotFoundError:
        pkg = {}

    return tree, pkg

def generate_readme():
    tree, pkg = get_project_info()

    response = ollama.chat(
        model='llama3.2',
        messages=[{
            'role': 'user',
            'content': f"""Generate README.md cho project này.

File structure:
{tree[:2000]}

Package.json:
{str(pkg)[:1000]}

Include sections:
- Project title & description
- Features
- Tech stack
- Getting started (install, run)
- Project structure
- Contributing
- License

Viết bằng tiếng Anh, format markdown."""
        }]
    )

    with open('README.ai.md', 'w') as f:
        f.write(response['message']['content'])
    print("✅ Generated README.ai.md")

generate_readme()
```

---

## 8. Security & Privacy checklist

### Những gì ĐÃ đạt được

✅ **Mọi thứ chạy local** — không data nào gửi ra internet
✅ **Không phụ thuộc cloud** — hoạt động offline
✅ **Không tracking** — không telemetry từ model
✅ **Bạn sở hữu data** — models và data nằm trên máy bạn
✅ **Không rate limit** — dùng bao nhiêu tùy thích
✅ **Không chi phí** — miễn phí, mãi mãi

### Best practices

```bash
# 1. Ollama chỉ bind localhost (default, an toàn)
export OLLAMA_HOST=127.0.0.1:11434

# 2. Nếu cần expose ra mạng, dùng authentication
# (Open WebUI có built-in auth)

# 3. Encrypt sensitive data
# macOS FileVault đã mã hóa toàn bộ disk

# 4. Regular backup models list
ollama list > ~/backups/ollama-models-$(date +%Y%m%d).txt
```

### So sánh với cloud AI

| | Local (Ollama) | Cloud (OpenAI, etc.) |
|--|---------------|---------------------|
| **Chi phí** | $0 | $20-200/tháng |
| **Privacy** | 100% local | Data gửi ra internet |
| **Tốc độ** | Phụ thuộc hardware | Nhanh, ổn định |
| **Chất lượng** | 7B ≈ GPT-3.5 | GPT-4, Claude 3.5 |
| **Offline** | ✅ | ❌ |
| **Rate limit** | Không | Có |
| **Custom model** | ✅ Modelfile | ❌ Limited |

---

## 9. Setup script hoàn chỉnh

```bash
#!/bin/bash
# setup-ai-workspace.sh
# One-click Personal AI Setup trên macOS

set -e

echo "🚀 Setting up Personal AI Workspace..."

# 1. Install Ollama
if ! command -v ollama &> /dev/null; then
    echo "📦 Installing Ollama..."
    curl -fsSL https://ollama.com/install.sh | sh
fi

# 2. Pull recommended models
echo "📥 Pulling models..."
ollama pull llama3.2
ollama pull qwen2.5-coder:7b
ollama pull nomic-embed-text
ollama pull gemma3:4b

# 3. Set environment variables
echo "⚙️  Configuring environment..."
cat >> ~/.zshrc << 'ZSHRC'

# === Ollama AI Config ===
export OLLAMA_NUM_PARALLEL=2
export OLLAMA_FLASH_ATTENTION=1
export OLLAMA_KEEP_ALIVE=10m

# AI aliases
alias ai="ollama run llama3.2"
alias aicode="ollama run qwen2.5-coder:7b"
function ai-commit() {
    git diff --staged | ollama run llama3.2 "Write a concise conventional commit message for this diff. Just the message."
}
ZSHRC

# 4. Create custom models
echo "🔧 Creating custom models..."

cat > /tmp/Modelfile.xdev << 'EOF'
FROM llama3.2
SYSTEM """Bạn là xDev AI, trợ lý lập trình chuyên nghiệp.
- Trả lời bằng tiếng Việt
- Code rõ ràng, có comment
- Đề cập best practices"""
PARAMETER temperature 0.5
PARAMETER num_ctx 4096
EOF

ollama create xdev-ai -f /tmp/Modelfile.xdev

# 5. Start Open WebUI (nếu có Docker)
if command -v docker &> /dev/null; then
    echo "🌐 Starting Open WebUI..."
    docker run -d \
        --name open-webui \
        -p 3000:8080 \
        -v open-webui:/app/backend/data \
        --add-host=host.docker.internal:host-gateway \
        -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
        --restart always \
        ghcr.io/open-webui/open-webui:main 2>/dev/null || true
fi

# 6. Install Python packages
echo "🐍 Installing Python packages..."
pip3 install ollama chromadb rich 2>/dev/null || true

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 What's ready:"
echo "   • Ollama: http://localhost:11434"
echo "   • Open WebUI: http://localhost:3000 (if Docker)"
echo "   • Models: llama3.2, qwen2.5-coder:7b, gemma3:4b"
echo "   • Custom: xdev-ai"
echo "   • Aliases: ai, aicode, ai-commit"
echo ""
echo "🎯 Quick start:"
echo "   ai 'Hello, AI!'"
echo "   aicode 'Viết function sort bằng Python'"
echo ""
echo "🎉 Happy coding with local AI!"
```

---

## 10. Tổng kết khóa học

### Bạn đã học được gì

| Bài | Nội dung | Kỹ năng |
|-----|---------|---------|
| 1 | Apple Silicon & AI | Hiểu hardware |
| 2 | Cài đặt Ollama | Setup & CLI |
| 3 | Chọn model | Model selection |
| 4 | MLX Framework | MLX basics |
| 5 | mlx-lm | Quantization, conversion |
| 6 | Ollama + MLX | Integration |
| 7 | REST API | HTTP API, OpenAI-compatible |
| 8 | Python integration | Chatbot, RAG |
| 9 | Vision models | Image analysis |
| 10 | Tối ưu hiệu năng | RAM, concurrency |
| 11 | Modelfiles | Custom models |
| 12 | Workflow hoàn chỉnh | Production setup |

### Tiếp theo

- **Theo dõi xDev.asia** để cập nhật series mới
- **Join community** để trao đổi kinh nghiệm
- **Contribute** — chia sẻ Modelfile, script, workflow của bạn

---

## Bài tập cuối khóa

1. Setup đầy đủ: Ollama + Open WebUI + Continue.dev
2. Tạo 3 custom models cho workflow cá nhân
3. Xây RAG system index tài liệu của bạn (notes, docs)
4. Viết script ai-commit và dùng hàng ngày trong 1 tuần
5. (Bonus) Tạo Telegram/Discord bot chạy local bằng Ollama

---

🎉 **Chúc mừng bạn đã hoàn thành khóa học!**

Bạn đã có đầy đủ kiến thức để chạy AI hoàn toàn local trên Apple Silicon — nhanh, miễn phí, và bảo mật tuyệt đối.
