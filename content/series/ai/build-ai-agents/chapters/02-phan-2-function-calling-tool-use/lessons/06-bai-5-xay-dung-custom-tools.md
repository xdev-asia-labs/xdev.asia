---
id: 019c9619-cc05-7005-d005-cc0500000005
title: 'Bài 5: Xây dựng Custom Tools — Web Search, Code Execution, API Integration'
slug: bai-5-xay-dung-custom-tools
description: >-
  Tạo tool phức tạp: web scraping, Google Search, Python code sandbox, database query, REST API caller. Quản lý tool registry, error handling, và retry logic.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Function Calling & Tool Use"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: Xây dựng Custom Tools — Web Search,</tspan>
      <tspan x="60" dy="42">Code Execution, API Integration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Build AI Agents: Từ Zero đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Function Calling &amp; Tool Use</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài trước bạn đã biết **cách** function calling hoạt động. Bài này tập trung vào **build tools thực tế** mà agent cần trong production: web search, code execution sandbox, database queries, và REST API integration.

---

## 1. Web Search Tool

### 1.1 Dùng SerpAPI / Tavily

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

## 2. Code Execution Sandbox

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

## 3. Database Query Tool

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

## 4. Error Handling & Retry Logic

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

## Tóm tắt

- Web search, code execution, database query — 3 tools quan trọng nhất
- **Security first**: sandbox code execution, read-only DB, input validation
- Error handling + retry logic là bắt buộc cho production agent
- Tool observability: log mọi tool call để debug

## Bài tập

1. Implement web_search tool thực tế với Tavily API
2. Xây code execution sandbox an toàn hơn (dùng Docker)
3. Tạo REST API tool gọi được bất kỳ endpoint nào
4. Implement rate limiting cho tools (tránh spam API calls)

