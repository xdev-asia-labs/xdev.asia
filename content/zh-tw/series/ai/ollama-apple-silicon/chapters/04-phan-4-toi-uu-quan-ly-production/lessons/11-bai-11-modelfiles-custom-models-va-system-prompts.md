---
id: 019c9619-bb11-7011-d011-bb1100000011
title: 第 11 課：模型檔 - 自訂模型與系統提示
slug: bai-11-modelfiles-custom-models-va-system-prompts
description: 模型檔案語法。自訂系統提示、溫度、top_p、停止標記。創建專門的模型。管理和共享自訂模型。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 1
section_title: 第 4 部分：最佳化、管理和生產設置
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：模型檔 - 自訂模型 &</tspan>
      <tspan x="60" dy="42">系統提示</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：最佳化、管理和生產設置</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Modelfile 是您在 Ollama 中自訂模型的方式 — 設定係統提示、調整參數、建立您自己的「角色」AI。類似於 Dockerfile，但用於 AI 模型。

---

## 1. 基本模型文件

### 結構

```dockerfile
# Modelfile cơ bản
FROM llama3.2

SYSTEM """Bạn là trợ lý lập trình chuyên về Python.
Luôn trả lời bằng tiếng Việt.
Viết code rõ ràng, có comment."""

PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

### 從模型檔案建立模型

```bash
# Tạo model
ollama create xdev-py -f ./Modelfile

# Chạy
ollama run xdev-py

# Kiểm tra
ollama list | grep xdev
```

---

## 2. 模型檔案中的指令

### FROM — 基本模型

```dockerfile
# Từ model có sẵn
FROM llama3.2

# Từ model cụ thể (tag)
FROM llama3.2:3b-instruct-q4_K_M

# Từ custom model khác
FROM xdev-py
```

### SYSTEM — 系統提示符

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

### 參數 — 模型參數

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

### 模板 — 聊天模板

```dockerfile
TEMPLATE """{{ if .System }}<|system|>
{{ .System }}<|end|>
{{ end }}{{ if .Prompt }}<|user|>
{{ .Prompt }}<|end|>
{{ end }}<|assistant|>
{{ .Response }}<|end|>
"""
```

### MESSAGE — 種子前對話

```dockerfile
MESSAGE user "Xin chào!"
MESSAGE assistant "Chào bạn! Tôi là xDev AI, tôi có thể giúp gì về lập trình?"
```

### 許可證

```dockerfile
LICENSE """
MIT License
Custom model by xDev.asia
"""
```

---

## 3. 現實的自訂模型範例

### 3.1。 Python專家

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

```巴什
ollama 創建 python-expert -f Modelfile.python-expert
ollama run python-expert“編寫函數來驗證電子郵件地址”
```

### 3.2. Code Reviewer

```docker文件
# Modelfile.code-reviewer
來自 llama3.2

系統“”“您是高級代碼審查員。

檢查代碼時，您會檢查：
1. 🐛 錯誤和邏輯錯誤
2. 🔒 安全漏洞（OWASP Top 10）
3. ⚡ 性能問題
4. 📖 可讀性和可維護性
5. 🧪 可測試性

格式輸出：
## 概述
[一般評論]

## 問題
- 🔴 關鍵：[...]
- 🟡警告：[...]
- 🟢建議：[...]

## 重構程式碼
[程式碼已修復]

用越南語回覆。 """

參數溫度0.2
參數 num_ctx 8192
```

### 3.3. DevOps Assistant

```docker文件
# 模型檔.devops
來自 llama3.2

系統「」「您是一名 DevOps 工程師 AI。

專長：
- Docker、Kubernetes、Helm
- CI/CD（GitHub Actions、GitLab CI、Jenkins）
- 基礎架構即程式碼（Terraform、Ansible）
- 雲（AWS、GCP、Azure）
- 監控（普羅米修斯、Grafana）

規則：
- 始終提及安全最佳實踐
- 解釋“為什麼”而不僅僅是“如何”
- 提供實用的 YAML/JSON 範例
- 關於常見陷阱的警告
用越南語回覆。 """

參數溫度0.5
參數 num_ctx 4096

MESSAGE用戶「你是誰？ 」
MESSAGE助理「我是DevOps AI助理，專門負責對Docker、K8s、CI/CD和基礎設施的支援。有任何關於 DevOps 的問題都可以問我！ 」
```

### 3.4. SQL Generator

```docker文件
# 模型檔.sql
來自 llama3.2

SYSTEM """您是 SQL 專家。
- 只寫SQL，沒有冗長的解釋
- 使用 PostgreSQL 文法
- 在 SQL 中包含註釋
- 優化效能
- 避免選擇 *

格式：在程式碼區塊中編寫SQL，並附有1-2行解釋。
如果問題不清楚，請在編寫 SQL 之前再次詢問。 """

參數溫度0.1
參數 num_predict 1024
參數停止“;”
```

### 3.5. Creative Writer (Vietnamese)

```docker文件
# 模型檔.writer
來自 llama3.2

系統“”“你是一位用越南語寫作的創意作家。
- 自然、流暢的寫作風格
- 使用隱喻和生動的圖像
- 適合要求的語氣（正式、休閒、幽默...）
- 知道如何寫部落格文章、詩歌、短篇故事、廣告。

參數溫度0.9
參數 top_p 0.95
參數 top_k 60
參數重複懲罰 1.2
參數 num_predict 4096
```

---

## 4. Quản lý custom models

### Liệt kê models

```巴什
烏拉馬名單
```

Output:

```
姓名 ID 尺寸已修改
python-expert abc123def 2.0 GB 5 分鐘前
代碼審閱者 def456ghi 2.0 GB 10 分鐘前
llama3.2:最新 xyz789abc 2.0 GB 2 小時前
```

### Xem Modelfile của model

```巴什
ollama 顯示 python-expert --modelfile
```

### Copy model

```巴什
ollama cp python-expert python-expert-v2
```

### Xóa model

```巴什
ollama rm python-expert-v2
```

### Export/Import workflow

```巴什
# 匯出：儲存模型文件
ollama 顯示 python-expert --modelfile > Modelfile.python-expert

# 在另一台機器上匯入
ollama 創建 python-expert -f Modelfile.python-expert
```

---

## 5. Tham số model — Deep dive

### Temperature

Kiểm soát mức độ "sáng tạo":

```
溫度 = 0.0 → 始終選擇機率最高的代幣（確定性）
溫度 = 0.5 → 準確性和多樣性之間的平衡
溫度 = 1.0 → 有創意，有時不準確
溫度 = 2.0 → 非常隨機（不建議）
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
top_k = 40：從40個token中選擇機率最高的
top_p = 0.9：從累積機率為 90% 的 token 中進行選擇
```

Thường dùng **một trong hai**, không cả hai.

### Stop sequences

```docker文件
# 遇到關鍵字時停止生成
參數停止“<|end|>」
參數停止“人類：”
參數停止“用戶：”

# 當模型經常「循環」或創建自己的對話時很有用
```

---

## 6. Test và iterate

### Script test model

```蟒蛇
#!/usr/bin/env python3
"""使用多個提示測試自訂模型。 """

進口烏拉馬

模型=“Python專家”
測試提示 = [
    “編寫一個讀取 CSV 檔案並返回字典列表的函數”，
    “解釋@property裝飾器”，
    「找出此程式碼中的錯誤：def add(a, b): return a * b”,
    “為函數 validate_email() 編寫單元測試”，
]

對於 i，枚舉中提示（TEST_PROMPTS, 1）：
    印出(f"\n{'='*60}")
    print(f"測試 {i}: {提示}")
    印製（'='*60）

    響應 = ollama.chat(
        型號=型號，
        messages=[{'角色':'使用者','內容':提示}]
    ）
    print(回應['訊息']['內容'])
```

### So sánh models

```蟒蛇
進口烏拉馬

MODELS = ['llama3.2', 'python-expert', 'code-reviewer']
PROMPT = "查看程式碼：def calc(x): return x*2+1"

對於 MODELS 中的模型：
    print(f"\n--- {模型} ---")
    響應 = ollama.chat(
        型號=型號，
        messages=[{'角色': '使用者', '內容': 提示}]
    ）
    印出（回應['訊息']['內容'][:500]）
```

---

## 7. Tổ chức Modelfiles trong project

```
人工智慧模型/
├── 自述文件.md
├── Modelfile.python-expert
├── Modelfile.code-reviewer
├── 模型檔.devops
├── 模型檔.sql
├── 模型檔.writer
├── setup.sh # 建立所有模型的腳本
└── test.py # 腳本測試模型
```

`setup.sh`:

```巴什
#!/bin/bash
echo "🚀 创建自定义 Ollama 模型..."

对于模型文件中的 f。 *；由於
    名称 =“${f#Modelfile.}”
    echo "📦 创建: $name"
    ollama 创建“$name”-f“$f”
完成

echo "✅ 完成！模型："
烏拉馬名單
```

---

## Tóm tắt

| Directive | Mục đích | Ví dụ |
|-----------|---------|------|
| `從` | Base model | `來自 llama3.2` |
| `系統` | System prompt | Personality, rules |
| `參數` | Tuning params | temperature, num_ctx |
| `範本` | Chat format | Custom template |
| `留言` | Seed conversation | Pre-defined Q&A |
| `許可證` |許可證資訊 |麻省理工學院，客製化|

---

## 練習

1. 為「越南技術作家」創建模型文件－撰寫技術部落格文章
2. 創建一個「JSON Generator」模型－只輸出JSON，沒有額外的文本
3.使用相同的提示和註釋比較溫度0.1 vs 0.5 vs 0.9
4. 用 3+ 個模型檔案和 setup.sh 腳本組織資料夾 ai-models/
5.（獎勵）創建「面試機器人」模型－提出面試問題，評分

**下一篇文章**：完整的工作流程 - 個人人工智慧設定 →
