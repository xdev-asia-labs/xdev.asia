---
id: 019c9619-bb11-7011-d011-bb1100000011
title: 'レッスン 11: モデルファイル - カスタム モデルとシステム プロンプト'
slug: bai-11-modelfiles-custom-models-va-system-prompts
description: >-
  モデルファイルの構文。カスタム システム プロンプト、温度、top_p、ストップ トークン。特殊なモデルを作成します。カスタム
  モデルを管理および共有します。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 4: 最適化、管理、および生産セットアップ'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: モデルファイル - カスタム モデルと</tspan>
      <tspan x="60" dy="42">システムプロンプト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 最適化、管理、および生産セットアップ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Modelfile は、Ollama でモデルをカスタマイズする方法です。システム プロンプトを設定し、パラメーターを調整し、独自の「キャラクター」 AI を作成します。 Dockerfile に似ていますが、AI モデル用です。

---

## 1. 基本的なモデルファイル

### 構造

```dockerfile
# Modelfile cơ bản
FROM llama3.2

SYSTEM """Bạn là trợ lý lập trình chuyên về Python.
Luôn trả lời bằng tiếng Việt.
Viết code rõ ràng, có comment."""

PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

### Modelfile からモデルを作成する

```bash
# Tạo model
ollama create xdev-py -f ./Modelfile

# Chạy
ollama run xdev-py

# Kiểm tra
ollama list | grep xdev
```

---

## 2. Modelfile 内のディレクティブ

### FROM — 基本モデル

```dockerfile
# Từ model có sẵn
FROM llama3.2

# Từ model cụ thể (tag)
FROM llama3.2:3b-instruct-q4_K_M

# Từ custom model khác
FROM xdev-py
```

### SYSTEM — システムプロンプト

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

### PARAMETER — モデルパラメータ

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

### テンプレート — チャット テンプレート

```dockerfile
TEMPLATE """{{ if .System }}<|system|>
{{ .System }}<|end|>
{{ end }}{{ if .Prompt }}<|user|>
{{ .Prompt }}<|end|>
{{ end }}<|assistant|>
{{ .Response }}<|end|>
"""
```

### メッセージ — シード前の会話

```dockerfile
MESSAGE user "Xin chào!"
MESSAGE assistant "Chào bạn! Tôi là xDev AI, tôi có thể giúp gì về lập trình?"
```

### ライセンス

```dockerfile
LICENSE """
MIT License
Custom model by xDev.asia
"""
```

---

## 3. 現実的なカスタム モデルの例

＃＃＃３．１． Python エキスパート

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
PARAMETER stop "```」
```

```バッシュ
ollama create python-expert -f Modelfile.python-expert
ollam a run python-expert "メールアドレスを検証する関数を作成"
```

### 3.2. Code Reviewer

```ドッカーファイル
# Modelfile.code-reviewer
ラマ3.2から

SYSTEM """あなたは上級コードレビュー担当者です。

コードをレビューするときは、次のことを確認します。
1. 🐛 バグとロジックエラー
2. 🔒 セキュリティ脆弱性 (OWASP トップ 10)
3. ⚡ パフォーマンスの問題
4. 📖 可読性と保守性
5. 🧪 テスト容易性

出力の形式:
## 概要
【総評】

## 問題
- 🔴 クリティカル: [...]
- 🟡 警告: [...]
- 🟢 提案: [...]

## リファクタリングされたコード
[コード修正済み]

ベトナム語で答えてください。」

パラメータ 温度 0.2
パラメータ num_ctx 8192
```

### 3.3. DevOps Assistant

```ドッカーファイル
# Modelfile.devops
ラマ3.2から

SYSTEM """あなたは DevOps エンジニア AI です。

専門知識:
- Docker、Kubernetes、Helm
- CI/CD (GitHub アクション、GitLab CI、Jenkins)
- コードとしてのインフラストラクチャ (Terraform、Ansible)
- クラウド（AWS、GCP、Azure）
- モニタリング (プロメテウス、グラファナ)

ルール:
- セキュリティのベストプラクティスについて常に言及する
- 「どのように」だけでなく「なぜ」を説明する
- 実用的な YAML/JSON の例を提供します
- よくある落とし穴についての警告
ベトナム語で答えてください。」

パラメータ 温度 0.5
パラメータ num_ctx 4096

メッセージユーザー「あなたは誰ですか？」
MESSAGE アシスタント「私は DevOps AI アシスタントで、Docker、K8s、CI/CD、インフラストラクチャのサポートを専門としています。 DevOps について何でも聞いてください!」
```

### 3.4. SQL Generator

```ドッカーファイル
# Modelfile.sql
ラマ3.2から

SYSTEM """あなたは SQL エキスパートです。
- SQLのみを記述し、長い説明は不要
- PostgreSQL 構文を使用する
- SQLにコメントを含める
- パフォーマンスを最適化する
- SELECT を避ける *

形式: SQL をコード ブロックに記述し、1 ～ 2 行の説明を付けます。
質問があいまいな場合は、SQL を作成する前にもう一度質問してください。"""

パラメータ 温度 0.1
パラメータ num_predict 1024
パラメータ停止「;」
```

### 3.5. Creative Writer (Vietnamese)

```ドッカーファイル
# Modelfile.writer
ラマ3.2から

SYSTEM """あなたはベトナム語で執筆しているクリエイティブライターです。
- 自然で滑らかな書き味
- 比喩や鮮やかなイメージを使用する
- 要件に適した口調 (フォーマル、カジュアル、ユーモアなど)
- ブログ投稿、詩、短編小説、広告の書き方を知る。

パラメータ 温度 0.9
パラメータtop_p 0.95
パラメータtop_k 60
パラメータ リピートペナルティ 1.2
パラメータ num_predict 4096
```

---

## 4. Quản lý custom models

### Liệt kê models

```バッシュ
オラマリスト
```

Output:

```
名前 ID サイズが変更されました
python-expert abc123def 2.0 GB 5 分前
コードレビューアー def456ghi 2.0 GB 10 分前
llama3.2:最新 xyz789abc 2.0 GB 2 時間前
```

### Xem Modelfile của model

```バッシュ
オラマショー python-expert --modelfile
```

### Copy model

```バッシュ
オラマ cp python-expert python-expert-v2
```

### Xóa model

```バッシュ
オラマ rm python-expert-v2
```

### Export/Import workflow

```バッシュ
# エクスポート: モデルファイルを保存
ollama show python-expert --modelfile > Modelfile.python-expert

# 別のマシンにインポートする
ollama create python-expert -f Modelfile.python-expert
```

---

## 5. Tham số model — Deep dive

### Temperature

Kiểm soát mức độ "sáng tạo":

```
温度 = 0.0 → 常に最も確率の高いトークンを選択します (決定論的)
温度 = 0.5 → 精度と多様性のバランス
温度 = 1.0 → クリエイティブ、時々不正確
温度 = 2.0 → 非常にランダム (非推奨)
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
top_k = 40: 最も高い確率で 40 個のトークンから選択します
top_p = 0.9: 累積確率の 90% を占めるトークンから選択します。
```

Thường dùng **một trong hai**, không cả hai.

### Stop sequences

```ドッカーファイル
# キーワードが見つかったら生成を停止する
パラメータ停止 "<|end|>」
PARAMETER 停止「人間:」
パラメータ停止「ユーザー:」

# モデルが頻繁に「ループ」したり、独自のダイアログを作成したりする場合に便利です
```

---

## 6. Test và iterate

### Script test model

```パイソン
#!/usr/bin/env python3
"""複数のプロンプトを使用してカスタム モデルをテストします。"""

オラマを輸入する

MODEL = "Python エキスパート"
テストプロンプト = [
    "CSV ファイルを読み取り、辞書のリストを返す関数を作成します",
    "@property デコレータについて説明します",
    "このコードのバグを見つけます: def add(a, b): return a * b",
    "関数 validate_email() の単体テストを作成します",
】

i の場合、enumerate(TEST_PROMPTS, 1) のプロンプト:
    print(f"\n{'='*60}")
    print(f"テスト {i}: {プロンプト}")
    print('='*60)

    応答 = ollam.chat(
        モデル=モデル、
        メッセージ=[{'役割': 'ユーザー', 'コンテンツ': プロンプト}]
    ）
    print(応答['メッセージ']['コンテンツ'])
```

### So sánh models

```パイソン
オラマを輸入する

モデル = ['llama3.2', 'python-expert', 'code-reviewer']
PROMPT = "コードを確認してください: def calc(x): return x*2+1"

MODELS 内のモデルの場合:
    print(f"\n--- {モデル} ---")
    応答 = ollam.chat(
        モデル=モデル、
        メッセージ=[{'役割': 'ユーザー', 'コンテンツ': プロンプト}]
    ）
    print(応答['メッセージ']['コンテンツ'][:500])
```

---

## 7. Tổ chức Modelfiles trong project

```
AIモデル/
§── README.md
§── Modelfile.python-expert
§── Modelfile.code-reviewer
§── Modelfile.devops
§── Modelfile.sql
§── Modelfile.writer
§── setup.sh # すべてのモデルを作成するスクリプト
└── test.py # スクリプトテストモデル
```

`setup.sh`:

```バッシュ
#!/bin/bash
echo "🚀 カスタム Ollama モデルを作成しています..."

Modelfile.* の f の場合;期限の
    name="${f#Modelfile.}"
    echo "📦 作成中: $name"
    オラマ作成 "$name" -f "$f"
完了しました

echo "✅ 完了! モデル:"
オラマリスト
```

---

## Tóm tắt

| Directive | Mục đích | Ví dụ |
|-----------|---------|------|
| `から` | Base model | `ラマ3.2から` |
| `システム` | System prompt | Personality, rules |
| `パラメータ` | Tuning params | temperature, num_ctx |
| `テンプレート` | Chat format | Custom template |
| `メッセージ` | Seed conversation | Pre-defined Q&A |
| `ライセンス` |ライセンス情報 | MIT、カスタム |

---

## 演習

1.「ベトナムのテクニカル ライター」のモデルファイルを作成する — 技術的なブログ投稿を書く
2.「JSON ジェネレーター」モデルを作成します。JSON のみを出力し、余分なテキストは含まれません。
3. 同じプロンプトとコメントを使用して、温度 0.1、0.5、0.9 を比較します。
4. フォルダー ai-models/ を 3 つ以上のモデルファイルと setup.sh スクリプトで整理します。
5. (ボーナス) 「インタビュー ボット」モデルの作成 — インタビューの質問をし、スコアを付けます

**次の記事**: 完全なワークフロー — パーソナル AI セットアップ →
