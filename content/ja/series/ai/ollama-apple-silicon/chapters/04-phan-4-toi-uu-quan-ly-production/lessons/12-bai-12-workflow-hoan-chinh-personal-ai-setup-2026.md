---
id: 019c9619-bb12-7012-d012-bb1200000012
title: 'レッスン 12: 完全なワークフロー - 開発者向けのパーソナル AI セットアップ'
slug: bai-12-workflow-hoan-chinh-personal-ai-setup-2026
description: >-
  Open WebUI、Continue.dev、Ollama を使用して完全なパーソナル AI システムを構築します。 Obsidian、VS
  Code、ターミナルを統合します。プライバシー最優先のワークフロー。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 4: 最適化、管理、および生産セットアップ'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: 完全なワークフロー - パーソナル AI</tspan>
      <tspan x="60" dy="42">開発者向けのセットアップ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 最適化、管理、および生産セットアップ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

最後のレッスン — これまでの 11 レッスンで得たすべての知識を完全なワークフローに結合します。チャット UI、コード アシスタント、メモ作成、RAG など、プライバシーを最優先したパーソナル AI システムがすべて Mac 上でローカルに実行されます。

---

## 1. アーキテクチャの概要

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

## 2. オープン WebUI — Ollama 用の ChatGPT のような UI

[Open WebUI](https://openwebui.com/) は、ローカルで実行される Ollama の最も美しい Web UI です。

### インストール

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

アクセス: `http://localhost:3000`

### 主な特長

- **マルチモデルチャット**: モデル間の切り替え
- **チャット履歴**: 会話の保存と検索
- **マークダウン**: コード ブロック、テーブル、計算をレンダリングします。
- **ファイルのアップロード**: ドキュメントを含む RAG
- **画像生成**: 安定した拡散を統合
- **音声**: 音声合成およびテキスト読み上げ
- **プリセット プロンプト**: ライブラリ システム プロンプト
- **マルチユーザー**: 複数のユーザーをサポートします
- **モバイルフレンドリー**: レスポンシブ UI

### 良い構成

1. **モデル プリセット**: 設定 → モデル → ユースケースごとにプリセットを作成
2. **システム プロンプト**: [設定] → [一般] → [デフォルトのシステム プロンプト]
3. **RAG**: PDF/TXT をアップロード → 文書に基づいて AI が回答
4. **キーボード ショートカット**: `Ctrl+Shift+O` → 新しいチャット

---

## 3. Continue.dev — VS Code の AI アシスタント

[Continue](https://continue.dev/) は、Ollama をサポートする VS Code の最も強力な AI 拡張機能です。

### インストール

1. VS Code → 拡張機能 → 「続行」を見つけます。
2. **続行 - Codestral、Claude など** をインストールします。

### Ollama の構成

作成・編集 `~/.continue/config.yaml`:

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

### 使用する

|特長 |ショートカット |説明 |
|----------|----------|----------|
|チャット | `Cmd+L` |チャットパネルを開く |
|インライン編集 | `Cmd+I` |コードをインラインで編集する |
|選択 + 説明 |選択→ `Cmd+L` |コードの説明 |
|オートコンプリートタブ | `Tab` |コードの提案 |
|ターミナルデバッグ |クリックエラー | AI がエラーを説明する |

### カスタム スラッシュ コマンド

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

## 4. ターミナルのワークフロー

### 便利なエイリアス

追加されました `~/.zshrc`:

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

### 使用する

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

## 5. 黒曜石 + AI ノート

[Obsidian](https://obsidian.md/) + AI プラグインは、ローカル AI で「第二の脳」を作成します。

### プラグイン: スマート接続

1. Obsidian → 設定 → コミュニティプラグイン → 「スマート接続」を見つけます
2. インストールして有効にする
3. 設定 → スマート接続:
   - チャットモデルプラットフォーム: **Ollama**
   - チャットモデル: `llama3.2`
   - 埋め込みモデル プラットフォーム: **Ollama**
   - 埋め込みモデル: `nomic-embed-text`

### プラグイン: Obsidian のコパイロット

1.「Copilot」プラグインをインストールする
2. 設定 → デフォルトのモデルプロバイダー: **Ollama**
3. オラマ URL: `http://localhost:11434`

### ワークフロー

```
Đọc tài liệu → Highlight → AI tóm tắt → Lưu note → AI search notes
     ↓              ↓            ↓             ↓           ↓
   Input        Selection    Ollama API    Obsidian    Embeddings
                                                      + RAG local
```

---

## 6.個人文書を含むRAG

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

## 7. 自動化スクリプト

### 毎日の AI サマリー

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

### 自動 README ジェネレーター

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

## 8. セキュリティとプライバシーのチェックリスト

### これまでの成果

✅ **すべてがローカルで実行されます** - データはインターネットに送信されません
✅ **クラウドに依存しない** — オフラインで動作します
✅ **追跡なし** — モデルからのテレメトリなし
✅ **データの所有者はあなたです** — モデルとデータはあなたのデバイス上にあります
✅ **レート制限なし** — 好きなだけ使用できます
✅ **費用なし** — 永久に無料

### ベストプラクティス

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

### クラウドAIとの比較

| |地元 (オラマ) |クラウド（OpenAI等） |
|--|--|--|--|
| **コスト** | $0 | $20-200/月 |
| **プライバシー** | 100% 地元 |インターネットに送信されるデータ |
| **速度** |ハードウェアに依存 |高速、安定 |
| **品質** | 7B ≈ GPT-3.5 | GPT-4、クロード 3.5 |
| **オフライン** | ✅ | ❌ |
| **レート制限** |いいえ |はい |
| **カスタムモデル** | ✅ モデルファイル | ❌限定 |

---

## 9. セットアップ スクリプトを完了する

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

## 10. コース概要

### 何を学びましたか?

|記事 |コンテンツ |スキル |
|-----|----------|----------|
| 1 | AppleシリコンとAI |ハードウェアを理解する |
| 2 |オラマをインストールする |セットアップと CLI |
| 3 |モデルを選択 |モデルの選択 |
| 4 | MLX フレームワーク | MLX の基本 |
| 5 | mlx-lm |量子化、変換 |
| 6 |オラマ + MLX |統合 |
| 7 | REST API | HTTP API、OpenAI 互換 |
| 8 | Python の統合 |チャットボット、RAG |
| 9 |ビジョンモデル |画像解析 |
| 10 |パフォーマンスを最適化する | RAM、同時実行性 |
| 11 |モデルファイル |カスタムモデル |
| 12 |完全なワークフロー |生産セットアップ |

### 次へ

- **xDev.asia** をフォローして新しいシリーズを更新してください
- **コミュニティに参加**して経験を交換してください
- **貢献** — モデルファイル、スクリプト、ワークフローを共有します

---

## 最後の演習

1.完全なセットアップ: Ollama + WebUI を開く + Continue.dev
2. 個々のワークフローに合わせて 3 つのカスタム モデルを作成する
3. ドキュメント (メモ、ドキュメント) の RAG システム インデックスを構築します。
4. ai-commit スクリプトを作成し、1 週間毎日使用します。
5. (おまけ) Ollama を使用してローカルで実行する Telegram/Discord ボットを作成する

---

🎉 **コース修了おめでとうございます!**

これで、Apple Silicon 上で AI を完全にローカルで、高速、無料、そして完全に安全に実行するための知識が得られました。
