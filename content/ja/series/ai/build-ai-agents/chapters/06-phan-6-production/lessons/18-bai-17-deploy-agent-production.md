---
id: 019c9619-cc17-7017-d017-cc1700000017
title: 'レッスン 17: エージェントを本番環境にデプロイする — FastAPI、Docker、クラウド'
slug: bai-17-deploy-agent-production
description: >-
  FastAPI を使用してエージェントを API にラップします。 Dockerize、CI/CD パイプライン。クラウド (AWS/GCP)
  にデプロイします。スケーリング戦略、セッション管理、キャッシュ。リアルタイムのエージェント チャット用の WebSocket。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 6: 本番環境と実際のデプロイメント'
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: 'AI エージェントの構築: ゼロから本番環境まで'
  slug: build-ai-agents
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: エージェントを実稼働環境にデプロイする —</tspan>
      <tspan x="60" dy="42">FastAPI、Docker、クラウド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI エージェントの構築: ゼロから本番環境まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 本番環境と実際のデプロイメント</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ノートブックで実行されているエージェント ≠ 実稼働環境で実行されているエージェント。この記事では、ラップ エージェントから API → コンテナ化 → デプロイ → スケールまでのパイプライン全体について説明します。

---

## 1. FastAPI ラッパー

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

## 2. ドッカー

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 3. スケーリングに関する考慮事項

- ステートフル エージェントのセッション アフィニティ
- 共有状態の Redis
- 長時間実行タスクのキューベースの処理
- ユーザー/セッションあたりのコスト予算

---

## 概要

- FastAPI + WebSocket によるリアルタイム エージェント API
- 再現可能なデプロイメントのための Docker
- クラウド展開: AWS ECS、GCP Cloud Run、鉄道
- セッション管理とスケーリングが重要な課題

## 演習

1. SimpleAgent を FastAPI アプリにラップする
2. Docker化してローカルでテストする
3. WebSocketストリーミングの実装
4. Railway または Cloud Run へのデプロイ

