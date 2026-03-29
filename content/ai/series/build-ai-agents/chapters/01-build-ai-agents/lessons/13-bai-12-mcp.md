---
id: 019c9619-cc12-7012-d012-cc1200000012
title: 'Bài 12: Model Context Protocol (MCP) — Chuẩn kết nối cho Agent'
slug: bai-12-mcp
description: >-
  MCP là gì, tại sao cần standardization. Kiến trúc Client/Server, tool discovery, capability negotiation. Xây MCP Server kết nối database, GitHub API, file system.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 5: MCP, A2A & Multi-Agent Systems"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

**Model Context Protocol (MCP)** — do Anthropic phát triển — là chuẩn mở giúp agent kết nối với bất kỳ data source hoặc tool nào một cách thống nhất. Thay vì viết custom integration cho mỗi tool, bạn implement MCP Server một lần và mọi MCP-compatible client đều dùng được.

---

## 1. MCP Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  MCP Client  │◄───►│  MCP Server  │◄───►│  Data Source  │
│  (Agent/IDE) │     │  (Your code) │     │  (DB/API/FS) │
└──────────────┘     └──────────────┘     └──────────────┘
```

## 2. Build MCP Server

```python
from mcp.server import Server
from mcp.types import Tool

server = Server("my-tools")

@server.tool("query_database")
async def query_db(sql: str) -> str:
    """Execute read-only SQL query."""
    result = await db.execute(sql)
    return json.dumps(result)

@server.tool("search_github")
async def search_github(query: str, repo: str) -> str:
    """Search code in a GitHub repository."""
    ...
```

---

## Tóm tắt

- MCP = USB-C cho AI — chuẩn kết nối universal
- Client/Server architecture: agent là client, tools là servers
- Tool discovery: agent tự biết có tools nào available
- Ecosystem: 1000+ MCP servers có sẵn

## Bài tập

1. Build MCP Server cho SQLite database
2. Build MCP Server cho GitHub API (search repos, read files)
3. Connect agent tới 3+ MCP Servers cùng lúc
4. So sánh custom tool vs MCP tool: development experience

