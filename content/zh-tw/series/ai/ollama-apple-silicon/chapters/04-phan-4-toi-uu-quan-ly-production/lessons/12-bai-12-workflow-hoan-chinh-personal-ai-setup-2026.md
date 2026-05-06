---
id: 019c9619-bb12-7012-d012-bb1200000012
title: 第 12 課：完整工作流程 - 開發人員的個人 AI 設定
slug: bai-12-workflow-hoan-chinh-personal-ai-setup-2026
description: >-
  使用 Open WebUI、Continue.dev、Ollama 建立完整的個人 AI 系統。整合 Obsidian、VS
  Code、終端機。隱私第一的工作流程。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 4 部分：最佳化、管理和生產設置
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：完整工作流程 - 個人 AI</tspan>
      <tspan x="60" dy="42">為開發者設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：最佳化、管理和生產設置</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

最後一課－將前 11 課的所有知識結合到一個完整的工作流程中。您將擁有一個隱私第一的個人 AI 系統：聊天 UI、程式碼助理、筆記、RAG — 所有這些都在 Mac 上本地運行。

---

## 1. 架構概述

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

## 2. 開啟 WebUI — Ollama 的類似 ChatGPT 的 UI

[Open WebUI](https://openwebui.com/) 是 Ollama 最漂亮的 Web UI，在本地運行。

### 安裝

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

訪問： `http://localhost:3000`

### 主要特點

- **多模型聊天**：模型之間切換
- **聊天記錄**：儲存和搜尋對話
- **Markdown**：渲染程式碼區塊、表格、數學
- **文件上傳**：帶有文件的RAG
- **影像生成**：整合穩定擴散
- **語音**：語音轉文字與文字轉語音
- **預設提示**：圖書館系統提示
- **多用戶**：支援多個用戶
- **行動裝置友善**：響應式使用者介面

### 不錯的配置

1. **模型預設**：設定→模型→為每個用例建立預設
2. **系統提示**：設定→常規→預設系統提示
3. **RAG**：上傳PDF/TXT→AI根據文件給出答案
4. **鍵盤快捷鍵**： `Ctrl+Shift+O` → 新聊天

---

## 3.Continue.dev — VS Code 中的 AI 助手

[Continue](https://continue.dev/) 是 VS Code 最強大的 AI 擴展，支援 Ollama。

### 安裝

1.VS Code → 擴充 → 找到“繼續”
2. 安裝**繼續 - Codestral、Claude 等**

### Olama 的配置

建立/編輯 `~/.continue/config.yaml`：

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

### 使用

|特點|捷徑 |說明 |
|------------|----------|--------|
|聊天 | `Cmd+L` |打開聊天面板 |
|內嵌編輯 | `Cmd+I` |內嵌編輯程式碼 |
|選擇+解釋 |選擇→ `Cmd+L` |代碼解釋 |
|自動完成選項卡 | `Tab` |代碼建議 |
|終端調試|點擊錯誤| AI 解釋錯誤 |

### 自訂斜線命令

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

## 4. 終端機工作流程

### 有用的別名

已新增 `~/.zshrc`：

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

### 使用

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

## 5.黑曜石+AI筆記

[Obsidian](https://obsidian.md/) + AI插件用本地AI創造「第二個大腦」。

### 外掛：智慧連接

1.Obsidian → 設定 → 社群插件 → 找到“智慧連結”
2.安裝並啟用
3. 設定→智慧連接：
   - 聊天模型平台：**Ollama**
   - 聊天模型： `llama3.2`
   - 嵌入模型平台：**Ollama**
   - 嵌入模型： `nomic-embed-text`

### 外掛：Obsidian 的 Copilot

1.安裝“Copilot”插件
2. 設定→預設模型提供者：**Ollama**
3. 奧拉瑪網址： `http://localhost:11434`

### 工作流程

```
Đọc tài liệu → Highlight → AI tóm tắt → Lưu note → AI search notes
     ↓              ↓            ↓             ↓           ↓
   Input        Selection    Ollama API    Obsidian    Embeddings
                                                      + RAG local
```

---

## 6. 帶有個人文件的 RAG

### 奧拉馬 + ChromaDB

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

## 7. 自動化腳本

###每日AI總結

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

### 自動自述文件產生器

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

## 8. 安全與隱私清單

### 已取得什麼成就

✅ **一切都在本地運行** - 沒有資料發送到互聯網
✅ **不依賴雲端** — 離線工作
✅ **無追蹤** — 沒有來自模型的遙測
✅ **您擁有數據** — 模型和數據都在您的設備上
✅ **無速率限制** — 隨心所欲地使用
✅ **免費** — 永久免費

### 最佳實踐

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

### 與雲端AI比較

| |本地（奧拉馬）|雲（OpenAI等）|
|--|----------------------------|---------------------|
| **成本** | 0 美元 | 20-200 美元/月 |
| **隱私權** | 100%本地化|資料傳送到網路|
| **速度** |硬體相關 |快速、穩定|
| **質** | 7B ≈ GPT-3.5 | GPT-4，克勞德 3.5 |
| **離線** | ✅ | ❌ |
| **速率限制** |沒有 |是的 |
| **自訂模型** | ✅ 模型檔 | ❌ 限量|

---

## 9. 完整的設定腳本

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

## 10. 課程總結

### 你學到了什麼？

|文章|內容 |技能 |
|-----|---------|---------|
| 1 |蘋果晶片與人工智慧 |了解硬體 |
| 2 |安裝 Ollama |設定和 CLI |
| 3 |選擇機型 |選型|
| 4 | MLX 框架 | MLX 基礎知識 |
| 5 | MLX-LM |量化、轉換 |
| 6 |奧拉馬 + MLX |整合 |
| 7 |休息 API | HTTP API，相容於 OpenAI |
| 8 | Python 整合 |聊天機器人，RAG |
| 9 |視覺模型|影像分析|
| 10 | 10優化效能 |記憶體、並發 |
| 11 | 11模型檔案 |客製化型號|
| 12 | 12完整的工作流程 |生產設定|

### 下一步

- **追蹤 xDev.asia** 更新新系列
- **加入社群**交流經驗
- **貢獻** — 分享您的模型檔案、腳本、工作流程

---

## 最後練習

1. 完整設定：Ollama + 開啟 WebUI + Continue.dev
2. 為各個工作流程建立 3 個自訂模型
3. 為您的文件（註釋、文件）建立 RAG 系統索引
4. 編寫 ai-commit 腳本並每天使用它，持續 1 週
5.（獎勵）使用 Ollama 創建本地運行的 Telegram/Discord 機器人

---

🎉 **恭喜您完成課程！ **

您現在已經掌握了在 Apple Silicon 上完全本地運行 AI 的知識——快速、免費且完全安全。
