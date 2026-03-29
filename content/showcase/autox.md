---
featured_image: null
---

## Giới thiệu

**AutoX** là nền tảng AI Agent cho phép xây dựng, triển khai và quản lý các agent AI tự động. Hỗ trợ orchestration đa agent với kiến trúc plugin linh hoạt.

## Tính năng chính

- 🤖 **Multi-Agent**: Tạo và quản lý nhiều agent hoạt động song song
- 🔌 **Plugin Architecture**: Mở rộng chức năng qua hệ thống plugin
- 🔗 **Agent Orchestration**: Điều phối workflow giữa nhiều agents
- 📊 **Monitoring Dashboard**: Theo dõi hiệu suất và logs real-time
- 🔒 **Sandboxed Execution**: Chạy agent trong môi trường cô lập
- 🌐 **REST API**: API đầy đủ để tích hợp vào hệ thống khác

## Cài đặt nhanh

### Yêu cầu

- Node.js 18+
- Docker (khuyến nghị)

### Clone và cài đặt

```bash
git clone https://github.com/tdduydev/autox.git
cd autox
npm install
```

### Cấu hình

Tạo file `.env` từ template:

```bash
cp .env.example .env
```

Cập nhật các biến:

```env
# AI Provider Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/autox

# Server
PORT=3000
NODE_ENV=development
```

### Chạy development

```bash
npm run dev
```

## Kiến trúc

```
autox/
├── packages/
│   ├── core/          # Agent runtime engine
│   ├── orchestrator/  # Multi-agent orchestration
│   ├── plugins/       # Built-in plugins
│   │   ├── web-search/
│   │   ├── code-exec/
│   │   └── file-io/
│   ├── api/           # REST API server
│   └── dashboard/     # Monitoring UI
├── agents/            # Agent configurations
├── workflows/         # Workflow definitions
└── package.json
```

## Tạo Agent mới

```typescript
import { Agent, Plugin } from '@autox/core';

const myAgent = new Agent({
  name: 'research-assistant',
  model: 'gpt-4',
  plugins: [
    Plugin.webSearch(),
    Plugin.codeExec(),
  ],
  instructions: `
    You are a research assistant.
    Search the web and summarize findings.
  `,
});

await myAgent.run('Research latest AI trends');
```

## Tạo Workflow

```yaml
# workflows/research-and-report.yml
name: research-and-report
agents:
  - name: researcher
    task: "Search and collect data about {topic}"
  - name: writer
    task: "Write a comprehensive report based on research"
    depends_on: [researcher]
  - name: reviewer
    task: "Review and improve the report quality"
    depends_on: [writer]
```

## API Reference

### Tạo Agent

```bash
curl -X POST http://localhost:3000/api/agents \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-agent",
    "model": "gpt-4",
    "instructions": "You are a helpful assistant."
  }'
```

### Chạy Agent

```bash
curl -X POST http://localhost:3000/api/agents/my-agent/run \
  -H "Content-Type: application/json" \
  -d '{"input": "Hello, world!"}'
```

## License

MIT License
