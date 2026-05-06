---
id: 019c9619-bb02-7002-d002-bb0200000002
title: 第 2 課：安裝 Ollama - 5 分鐘內從零到運行 LLM
slug: bai-2-cai-dat-ollama-tu-zero-den-chay-llm-trong-5-phut
description: >-
  在 macOS 上安裝 Ollama，以了解資料夾結構和模型管理。拉動並運行 Llama 3.2、Gemma 3、Mistral、Qwen 2.5。重要的
  Ollama CLI 指令：run、pull、list、rm、show、ps。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：平台 - Ollama 和 Apple Silicon
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: 在 Apple Silicon 上使用 Ollama 運行本地 AI
  slug: ollama-apple-silicon
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：安裝 Ollama - 從零到運行</tspan>
      <tspan x="60" dy="42">5分鐘搞定法學碩士</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">在 Apple Silicon 上使用 Ollama 運行本地 AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：平台 - Ollama 和 Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一篇文章中，您了解了為什麼 Apple Silicon 在 AI 方面表現強勁。現在讓我們將理論變為現實：在您的電腦上安裝 Ollama 並與 LLM 聊天，無需互聯網，也無需 API 金鑰。

**本課程的目標**：5 分鐘後，您將與完全在您的電腦上運行的 AI 模型聊天。

---

## 1.Ollama 是什麼？

[Ollama](https://ollama.com) 是當今本地運行 LLM 最簡單的工具。將其視為“LLM 的 Docker”：

- **從登錄機碼中拉取模型**，就像拉取 Docker 映像一樣
- **使用單一命令運行模型**
- **公開 API** 與 OpenAI 端點相容
- **同時管理**多個模型

Ollama 在底層使用 **llama.cpp** （一個用 C++ 寫的推理引擎），但將其包裝成一個超級簡單的體驗。

---

## 2. 在 macOS 上安裝 Ollama

### 方法一：從網站下載（建議）

```bash
# Truy cập https://ollama.com/download và tải bản macOS
# Hoặc dùng curl:
curl -fsSL https://ollama.com/install.sh | sh
```

### 方法 2：使用 Homebrew

```bash
brew install ollama
```

### 確認安裝

```bash
ollama --version
```

輸出：

```
ollama version is 0.6.x
```

### 啟動Ollama伺服器

如果安裝自 `.dmg`，Ollama app開啟後會自動執行伺服器。如果從 CLI 安裝：

```bash
# Chạy server (giữ terminal này mở)
ollama serve
```

伺服器運行於 `http://localhost:11434`。

檢查：

```bash
curl http://localhost:11434
# Output: Ollama is running
```

---

## 3. 運行第一個模型

### 拉動並運行 Llama 3.2

```bash
# Pull model (chỉ cần lần đầu, ~2GB cho 3B, ~4.5GB cho 8B)
ollama pull llama3.2

# Chạy và chat
ollama run llama3.2
```

你會看到提示：

```
>>> Send a message (/? for help)
```

嘗試詢問：

```
>>> Giải thích Docker trong 3 câu
```

人工智慧將立即響應，完全在您的電腦上運行。新聞 `Ctrl+D` 逃跑。

### 拉另一個模型

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

## 4. 重要的 Ollama CLI 指令

### 查看載入模型列表

```bash
ollama list
```

範例輸出：

```
NAME                ID              SIZE      MODIFIED
llama3.2:latest     a80c4f17acd5    2.0 GB    2 minutes ago
gemma3:4b           2d2a94b1e3fc    3.3 GB    5 minutes ago
qwen2.5:7b          845dbda0ea48    4.7 GB    8 minutes ago
```

### 查看詳細型號信息

```bash
ollama show llama3.2
```

輸出顯示：

- 建築（LlamaForCausalLM）
- 參數（3.2B）
- 量化（Q4_K_M）
- 上下文長度（128K）
- 系統提示預設

### 查看運行模型

```bash
ollama ps
```

輸出：

```
NAME              ID            SIZE     PROCESSOR    UNTIL
llama3.2:latest   a80c4f17acd5  3.2 GB   100% GPU     4 minutes from now
```

> 💡 **100% GPU** 表示整個模型都在 GPU 記憶體上（Mac 上為 Metal）。這是理想的情況。

### 刪除模型

```bash
# Xóa một model để giải phóng ổ cứng
ollama rm mistral
```

### 複製模型（使用不同的名稱建立副本）

```bash
ollama cp llama3.2 my-assistant
```

---

## 5.Ollama 資料夾結構

奧拉瑪 (Ollama) 的一切託管地點為：

```
~/.ollama/
├── models/
│   ├── blobs/        # Model weights (file lớn)
│   └── manifests/    # Metadata cho mỗi model
└── logs/             # Logs
```

檢查容量：

```bash
du -sh ~/.ollama/models
```

> ⚠️ **注意**：重型模型！ 3-5型號可佔用20-30GB。如果SSD較小，請選擇對應的型號。

### 將模型資料夾移至外部磁碟機

如果主驅動器較小：

```bash
# Dừng Ollama
# Di chuyển thư mục
mv ~/.ollama/models /Volumes/ExternalSSD/ollama-models

# Tạo symlink
ln -s /Volumes/ExternalSSD/ollama-models ~/.ollama/models

# Khởi động lại Ollama
```

---

## 6. 與 Ollama 的高階聊天

### 內聯絡系統提示符

```bash
ollama run llama3.2 "Bạn là một chuyên gia Python. Trả lời bằng tiếng Việt." \
  --system "You are a senior Python developer who explains things simply in Vietnamese."
```

### 多行輸入

在聊天模式下，使用 `"""` 輸入多行：

```
>>> """
... Phân tích đoạn code sau:
... def fibonacci(n):
...     if n <= 1: return n
...     return fibonacci(n-1) + fibonacci(n-2)
... """
```

### 設定溫度和環境

```bash
# Temperature thấp = ít sáng tạo, chính xác hơn
ollama run llama3.2 --temperature 0.1

# Context window lớn hơn (tốn RAM hơn)
ollama run llama3.2 --num-ctx 8192
```

### 聊天中的斜線指令

|命令|描述 |
|--------|--------|
| `/set system <prompt>` |設定係統提示|
| `/show info` |檢視型號資訊 |
| `/show modelfile` |請參閱模型檔 |
| `/clear` |刪除聊天記錄 |
| `/bye` 或 `Ctrl+D` |退出 |
| `/?` |查看幫助 |

---

## 7. 有用的環境變數

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

已新增 `~/.zshrc` 永遠保存：

```bash
echo 'export OLLAMA_MAX_LOADED_MODELS=2' >> ~/.zshrc
source ~/.zshrc
```

---

## 8. 故障排除很常見

###“錯誤：模型需要的記憶體多於可用記憶體”

模型對於 RAM 來說太大。解決方案：

- 使用較小的模型： `llama3.2:3b` 相反 `llama3.2:8b`
- 關閉其他應用程式以釋放 RAM

### 速度異常慢

```bash
# Kiểm tra GPU utilization
ollama ps
# Nếu thấy "100% CPU" thay vì "100% GPU" → model quá lớn, không fit GPU memory
```

### Ollama 伺服器未啟動

```bash
# Kiểm tra port xem có bị chiếm không
lsof -i :11434

# Kill process cũ nếu cần
pkill ollama
ollama serve
```

---

## 總結

|命令|描述 |
|--------|--------|
| `ollama pull <model>` |下載模型 |
| `ollama run <model>` |邊跑邊聊天|
| `ollama list` |查看下載的模型 |
| `ollama ps` |查看正在運行的模型 |
| `ollama show <model>` |型號資訊 |
| `ollama rm <model>` |刪除模型 |
| `ollama serve` |啟動伺服器|

---

## 練習

1.安裝Ollama並拖曳2個模型： `llama3.2` 和 `gemma3:4b`
2. 與每個模特兒聊天，提出相同的問題並比較答案的質量
3. 使用 `ollama show` 查看兩個模型的資訊：量化、參數計數、上下文長度
4. 檢查 `ollama ps` 聊天時－模型使用了多少 RAM？ GPU 還是 CPU？
5. 使用 `du -sh ~/.ollama/models` 查看模型佔用了多少空間

**下一篇文章**：為您的用例選擇哪種模型？ →
