---
id: 019c9619-cc17-7017-d017-cc1700000017
title: 'Bài 17: Deploy Agent lên Production — FastAPI, Docker & Cloud'
slug: bai-17-deploy-agent-production
description: >-
  Wrap agent thành API với FastAPI. Dockerize, CI/CD pipeline. Deploy lên cloud (AWS/GCP). Scaling strategies, session management, caching. WebSocket cho real-time agent chat.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 6: Production & Triển khai thực tế"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Agent chạy trong notebook ≠ agent chạy trên production. Bài này cover toàn bộ pipeline từ wrap agent thành API → containerize → deploy → scale.

---

## 1. FastAPI Wrapper

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

## 3. Scaling Considerations

- Session affinity cho stateful agents
- Redis cho shared state
- Queue-based processing cho long-running tasks
- Cost budgets per user/session

---

## Tóm tắt

- FastAPI + WebSocket cho real-time agent API
- Docker cho reproducible deployments
- Cloud deployment: AWS ECS, GCP Cloud Run, Railway
- Session management & scaling are key challenges

## Bài tập

1. Wrap SimpleAgent thành FastAPI app
2. Dockerize và test locally
3. Implement WebSocket streaming
4. Deploy lên Railway hoặc Cloud Run

