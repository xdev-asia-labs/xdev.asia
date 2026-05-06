---
id: 019c9619-cc05-7005-d005-cc0500000005
title: 第 5 課：建立自訂工具 - Web 搜尋、程式碼執行、API 集成
slug: bai-5-xay-dung-custom-tools
description: 創建複雜的工具：網頁抓取、Google 搜尋、Python 程式碼沙箱、資料庫查詢、REST API 呼叫程式。管理登錄工具、錯誤處理和重試邏輯。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第二部分：函數呼叫和工具使用
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3603" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3603)"/>

  <!-- Decorations -->
  <g>
    <circle cx="774" cy="92" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="622" cy="220" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="154" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="88" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="52" x2="1100" y2="132" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="82" x2="1050" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.38268590218,188.5 1025.38268590218,215.5 1002,229 978.6173140978201,215.5 978.6173140978201,188.5 1002,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：建立自訂工具 - 網頁搜索，</tspan>
      <tspan x="60" dy="42">程式碼執行、API 集成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第二部分：函數呼叫和工具使用</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一課中，您學習了函數呼叫的**如何**工作原理。本文重點介紹代理在生產中所需的 **實際建構工具**：Web 搜尋、程式碼執行沙箱、資料庫查詢和 REST API 整合。

---

## 1. 網頁搜尋工具

### 1.1 使用 SerpAPI / Tavilly

```python
import httpx

def web_search(query: str, num_results: int = 5) -> str:
    """Tìm kiếm web và trả về kết quả top."""
    response = httpx.get("https://api.tavily.com/search", params={
        "api_key": TAVILY_API_KEY,
        "query": query,
        "max_results": num_results,
    })
    results = response.json()["results"]
    return "\n".join([
        f"- [{r['title']}]({r['url']}): {r['content'][:200]}"
        for r in results
    ])
```

---

## 2. 程式碼執行沙箱

```python
import subprocess
import tempfile

def execute_python(code: str, timeout: int = 10) -> str:
    """Chạy Python code trong sandbox."""
    with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as f:
        f.write(code)
        f.flush()
        try:
            result = subprocess.run(
                ['python', f.name],
                capture_output=True, text=True, timeout=timeout,
                env={"PATH": "/usr/bin"}  # Restricted env
            )
            return result.stdout or result.stderr
        except subprocess.TimeoutExpired:
            return "Error: Code execution timed out"
```

---

## 3.資料庫查詢工具

```python
import sqlite3

def query_database(sql: str) -> str:
    """Chạy SQL query (read-only) trên database."""
    if not sql.strip().upper().startswith("SELECT"):
        return "Error: Only SELECT queries allowed"
    
    conn = sqlite3.connect("app.db")
    try:
        cursor = conn.execute(sql)
        columns = [desc[0] for desc in cursor.description]
        rows = cursor.fetchall()
        return json.dumps({"columns": columns, "rows": rows[:50]})
    except Exception as e:
        return f"SQL Error: {e}"
    finally:
        conn.close()
```

---

## 4. 錯誤處理與重試邏輯

```python
def safe_tool_execute(tool_func, args, max_retries=2):
    for attempt in range(max_retries + 1):
        try:
            result = tool_func(**args)
            return {"status": "success", "data": result}
        except Exception as e:
            if attempt == max_retries:
                return {"status": "error", "error": str(e)}
            time.sleep(1)
```

---

## 總結

- 網路搜尋、程式碼執行、資料庫查詢——三個最重要的工具
- **安全第一**：沙箱程式碼執行、唯讀資料庫、輸入驗證
- 生產代理需要錯誤處理+重試邏輯
- 工具可觀察性：記錄所有工具呼叫以進行調試

## 練習

1. 使用 Tavily API 實作實際的 web_search 工具
2.建置更安全的沙箱執行程式碼（使用Docker）
3. 建立一個可以呼叫任意端點的REST API工具
4. 對工具實作速率限制（避免垃圾郵件 API 呼叫）

