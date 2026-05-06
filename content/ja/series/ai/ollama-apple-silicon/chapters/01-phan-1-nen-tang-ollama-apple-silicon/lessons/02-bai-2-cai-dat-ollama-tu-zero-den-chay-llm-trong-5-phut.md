---
id: 019c9619-bb02-7002-d002-bb0200000002
title: 'レッスン 2: Ollama のインストール - ゼロから 5 分で LLM を実行するまで'
slug: bai-2-cai-dat-ollama-tu-zero-den-chay-llm-trong-5-phut
description: >-
  Ollama を macOS にインストールし、フォルダー構造とモデル管理を理解します。 Llama 3.2、Gemma 3、Mistral、Qwen
  2.5 をプルして実行します。重要な Ollama CLI コマンド: run、pull、list、rm、show、ps。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: プラットフォーム - Ollama と Apple Silicon'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1428" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1428)"/>

  <!-- Decorations -->
  <g>
    <circle cx="784" cy="222" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="652" cy="90" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="154" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: Ollama のインストール - ゼロから実行まで</tspan>
      <tspan x="60" dy="42">5分でわかるLLM</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: プラットフォーム - Ollama と Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

前回の記事で、Apple SiliconがAIに強い理由が分かりました。さあ、理論を現実に変えましょう。Ollama をインストールして、インターネットや API キーを必要とせずに、コンピューターに直接 LLM とチャットしましょう。

**このレッスンの目標**: 5 分後には、完全にコンピューター上で実行されている AI モデルとチャットできるようになります。

---

＃＃１．オラマとは何ですか？

[Ollama](https://ollama.com) は、現在ローカルで LLM を実行する最も簡単なツールです。これを「LLM 用の Docker」と考えてください。

- Docker イメージをプルするのと同様に、レジストリから **モデルをプル**
- **1 つのコマンドでモデルを実行**
- **OpenAI エンドポイントと互換性のある API を公開**
- **複数のモデルを同時に管理**

Ollama はその下で **llama.cpp** (C++ で書かれた推論エンジン) を使用しますが、それを非常にシンプルなエクスペリエンスにまとめています。

---

## 2. macOS に Ollama をインストールする

### 方法 1: Web サイトからダウンロードする (推奨)

```bash
# Truy cập https://ollama.com/download và tải bản macOS
# Hoặc dùng curl:
curl -fsSL https://ollama.com/install.sh | sh
```

### 方法 2: Homebrew を使用する

```bash
brew install ollama
```

### インストールの確認

```bash
ollama --version
```

出力:

```
ollama version is 0.6.x
```

### Ollama サーバーを起動します

からインストールされた場合 `.dmg`, Ollama アプリを開くと、自動的にサーバーが実行されます。 CLI からインストールする場合:

```bash
# Chạy server (giữ terminal này mở)
ollama serve
```

サーバーは上で実行されます `http://localhost:11434`。

確認してください:

```bash
curl http://localhost:11434
# Output: Ollama is running
```

---

## 3. 最初のモデルを実行します

### Llama 3.2 をプルして実行する

```bash
# Pull model (chỉ cần lần đầu, ~2GB cho 3B, ~4.5GB cho 8B)
ollama pull llama3.2

# Chạy và chat
ollama run llama3.2
```

次のプロンプトが表示されます。

```
>>> Send a message (/? for help)
```

尋ねてみてください:

```
>>> Giải thích Docker trong 3 câu
```

AI はすぐに応答し、完全にコンピューター上で実行されます。プレス `Ctrl+D` 逃げるために。

### 別のモデルをプルする

```bash
# Gemma 3 - model của Google, mạnh với tiếng Việt
ollama pull gemma3:4b

# Qwen 2.5 - model của Alibaba, đa ngôn ngữ xuất sắc
ollama pull qwen2.5:7b

# Mistral - model của Pháp, code tốt
ollama pull mistral

# Phi-4 - model nhỏ của Microsoft, hiệu quả
ollama pull phi4-mini
```

---

## 4. 重要な Ollama CLI コマンド

### ロードされたモデルのリストを表示する

```bash
ollama list
```

出力例:

```
NAME                ID              SIZE      MODIFIED
llama3.2:latest     a80c4f17acd5    2.0 GB    2 minutes ago
gemma3:4b           2d2a94b1e3fc    3.3 GB    5 minutes ago
qwen2.5:7b          845dbda0ea48    4.7 GB    8 minutes ago
```

### 詳細なモデル情報を表示する

```bash
ollama show llama3.2
```

出力には以下が表示されます。

- アーキテクチャ (LlamaForCausalLM)
- パラメータ (3.2B)
- 量子化 (Q4_K_M)
- コンテキスト長 (128K)
- システムプロンプトのデフォルト

### ランニングモデルを見る

```bash
ollama ps
```

出力:

```
NAME              ID            SIZE     PROCESSOR    UNTIL
llama3.2:latest   a80c4f17acd5  3.2 GB   100% GPU     4 minutes from now
```

> 💡 **100% GPU** は、モデル全体が GPU メモリ上にあることを意味します (Mac では Metal)。これが理想的なケースです。

### モデルの削除

```bash
# Xóa một model để giải phóng ổ cứng
ollama rm mistral
```

### モデルのコピー (別の名前でコピーを作成)

```bash
ollama cp llama3.2 my-assistant
```

---

## 5. Ollama フォルダー構造

Ollama は次の場所ですべてをホストしています。

```
~/.ollama/
├── models/
│   ├── blobs/        # Model weights (file lớn)
│   └── manifests/    # Metadata cho mỗi model
└── logs/             # Logs
```

容量の確認:

```bash
du -sh ~/.ollama/models
```

> ⚠️ **注意**: 重いモデルです。 3 ～ 5 モデルは 20 ～ 30 GB を占有する可能性があります。 SSD が小さい場合は、必要なモデルを選択してください。

### モデルフォルダーを外部ドライブに移動します。

メインドライブが小さい場合:

```bash
# Dừng Ollama
# Di chuyển thư mục
mv ~/.ollama/models /Volumes/ExternalSSD/ollama-models

# Tạo symlink
ln -s /Volumes/ExternalSSD/ollama-models ~/.ollama/models

# Khởi động lại Ollama
```

---

## 6. Ollama との高度なチャット

### システムプロンプトインライン

```bash
ollama run llama3.2 "Bạn là một chuyên gia Python. Trả lời bằng tiếng Việt." \
  --system "You are a senior Python developer who explains things simply in Vietnamese."
```

### 複数行入力

チャットモードでは、使用します `"""` 複数行を入力するには:

```
>>> """
... Phân tích đoạn code sau:
... def fibonacci(n):
...     if n <= 1: return n
...     return fibonacci(n-1) + fibonacci(n-2)
... """
```

### 温度とコンテキストを設定する

```bash
# Temperature thấp = ít sáng tạo, chính xác hơn
ollama run llama3.2 --temperature 0.1

# Context window lớn hơn (tốn RAM hơn)
ollama run llama3.2 --num-ctx 8192
```

### チャットでのスラッシュ コマンド

|コマンド |説明 |
|------|------|
| `/set system <prompt>` |システムプロンプトを設定する |
| `/show info` |モデル情報を見る |
| `/show modelfile` |モデルファイル | を参照してください。
| `/clear` |チャット履歴を削除する |
| `/bye` または `Ctrl+D` |終了 |
| `/?` |ヘルプを参照 |

---

## 7. 便利な環境変数

```bash
# Thay đổi host/port
export OLLAMA_HOST=0.0.0.0:11434

# Thay đổi thư mục lưu model
export OLLAMA_MODELS=/path/to/models

# Giới hạn số model load đồng thời
export OLLAMA_MAX_LOADED_MODELS=2

# Bật debug logging
export OLLAMA_DEBUG=1
```

追加されました `~/.zshrc` 永久に保存するには:

```bash
echo 'export OLLAMA_MAX_LOADED_MODELS=2' >> ~/.zshrc
source ~/.zshrc
```

---

## 8. トラブルシューティングは一般的です

### 「エラー: モデルには使用可能なメモリを超えるメモリが必要です」

モデルが RAM に対して大きすぎます。解決策:

- より小さいモデルを使用します。 `llama3.2:3b` 代わりに `llama3.2:8b`
- 他のアプリを閉じてRAMを解放します

### 異常に速度が遅い

```bash
# Kiểm tra GPU utilization
ollama ps
# Nếu thấy "100% CPU" thay vì "100% GPU" → model quá lớn, không fit GPU memory
```

### Ollama サーバーが起動しませんでした

```bash
# Kiểm tra port xem có bị chiếm không
lsof -i :11434

# Kill process cũ nếu cần
pkill ollama
ollama serve
```

---

## 概要

|コマンド |説明 |
|------|------|
| `ollama pull <model>` |モデルをダウンロード |
| `ollama run <model>` |走ってチャット |
| `ollama list` |ダウンロードしたモデルを表示 |
| `ollama ps` |実行中のモデルを表示 |
| `ollama show <model>` |機種情報 |
| `ollama rm <model>` |モデルを削除 |
| `ollama serve` |サーバーを起動する |

---

## 演習

1. Ollama をインストールし、2 つのモデルをドラッグします。 `llama3.2` そして `gemma3:4b`
2. 同じ質問をする各モデルとチャットし、回答の質を比較します。
3. 使用する `ollama show` 両方のモデルの情報を参照してください: 量子化、パラメータ数、コンテキスト長
4. チェック `ollama ps` チャット中 - モデルはどれくらいの RAM を使用しますか? GPUかCPUか？
5. 使用する `du -sh ~/.ollama/models` モデルが占めるスペースを確認する

**次の記事**: ユースケースに合わせて選択するモデルはどれですか? →
