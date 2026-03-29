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

