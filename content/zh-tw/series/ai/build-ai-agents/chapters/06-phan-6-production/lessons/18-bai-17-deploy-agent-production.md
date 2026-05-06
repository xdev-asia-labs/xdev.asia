---
id: 019c9619-cc17-7017-d017-cc1700000017
title: 第 17 課：將代理部署到生產環境 - FastAPI、Docker 和雲端
slug: bai-17-deploy-agent-production
description: >-
  使用 FastAPI 將代理程式包裝到 API 中。 Dockerize、CI/CD 管道。部署到雲端
  (AWS/GCP)。擴展策略、會話管理、快取。用於即時代理聊天的 WebSocket。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: 第 6 部分：生產與實際部署
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 建構 AI 代理：從零到生產
  slug: build-ai-agents
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-552" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-552)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1075" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="220" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="975" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="125" x2="1100" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="155" x2="1050" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.6410161513776,155 1009.6410161513776,195 975,215 940.3589838486224,195 940.3589838486224,155 975,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：將代理部署到生產環境 —</tspan>
      <tspan x="60" dy="42">FastAPI、Docker 與雲端</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">建構 AI 代理：從零到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：生產與實際部署</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在筆記本中運行的代理≠在生產中運行的代理。本文涵蓋了從包裝代理到 API → 容器化 → 部署 → 擴充的整個管道。

---

## 1.FastAPI 包裝器

```python
from fastapi import FastAPI, WebSocket
from pydantic import BaseModel

app = FastAPI()

class AgentRequest(BaseModel):
    message: str
    session_id: str = None

@app.post("/chat")
async def chat(request: AgentRequest):
    agent = get_or_create_agent(request.session_id)
    response = await agent.run(request.message)
    return {"response": response, "session_id": agent.session_id}

@app.websocket("/ws/chat")
async def websocket_chat(websocket: WebSocket):
    await websocket.accept()
    agent = create_agent()
    while True:
        data = await websocket.receive_text()
        async for chunk in agent.stream(data):
            await websocket.send_text(chunk)
```

## 2. Docker

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 3. 擴展考慮因素

- 有狀態代理的會話關聯性
- Redis 用於共享狀態
- 基於佇列的長時間運行任務處理
- 每個使用者/會話的成本預算

---

## 總結

- FastAPI + WebSocket 用於即時代理 API
- 用於可重複部署的 Docker
- 雲端部署：AWS ECS、GCP Cloud Run、Railway
- 會話管理和擴展是關鍵挑戰

## 練習

1. 將SimpleAgent封裝到FastAPI應用程式中
2. Docker化並在本地測試
3. 實現WebSocket串流
4. 部署到Railway或Cloud Run

