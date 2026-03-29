---
id: 019c9619-cc13-7013-d013-cc1300000013
title: 'Bài 13: Agent-to-Agent (A2A) Protocol — Agent nói chuyện với nhau'
slug: bai-13-a2a-protocol
description: >-
  Google A2A Protocol: Agent Cards, capability discovery, task lifecycle, inter-agent communication. So sánh A2A vs MCP. Demo hai agent từ hai framework khác nhau collaborate.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 5: MCP, A2A & Multi-Agent Systems"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

MCP kết nối agent với **tools/data**. Nhưng khi bạn cần agent kết nối với **agent khác** thì sao? **A2A (Agent-to-Agent Protocol)** — do Google phát triển — giải quyết vấn đề này.

---

## 1. A2A vs MCP

| | MCP | A2A |
|---|---|---|
| Kết nối | Agent ↔ Tools/Data | Agent ↔ Agent |
| Mô hình | Client/Server | Peer-to-Peer |
| Discovery | Tool schemas | Agent Cards |
| Use case | Đọc DB, gọi API | Delegate tasks giữa agents |

## 2. Agent Cards

```json
{
  "name": "Research Agent",
  "description": "Tìm kiếm và tổng hợp thông tin",
  "capabilities": ["web_search", "summarize", "translate"],
  "endpoint": "https://research-agent.example.com/a2a",
  "input_schema": {...},
  "output_schema": {...}
}
```

## 3. Cross-Framework Communication

A2A cho phép agent từ LangGraph giao tiếp với agent từ CrewAI, AutoGen, hoặc bất kỳ framework nào.

---

## Tóm tắt

- A2A = protocol cho agent-to-agent communication
- Agent Cards = self-description cho capability discovery
- MCP + A2A = full connectivity (tools + agents)
- Cross-framework interoperability

## Bài tập

1. Tạo Agent Card cho 3 agents khác nhau
2. Implement A2A server đơn giản
3. Demo 2 agents từ 2 frameworks communicate
4. So sánh: trực tiếp call vs qua A2A protocol

