---
id: 019f1c30-a403-7001-c001-v1b3c0d10403
title: 'Bài 13: MCP Servers — Kết nối AI với thế giới bên ngoài'
slug: bai-13-mcp-servers-ket-noi-ai-voi-the-gioi-ben-ngoai
description: >-
  Model Context Protocol (MCP) là gì. Cài đặt MCP servers trong VS Code.
  Figma MCP, GitHub MCP, Database MCP. Tạo custom MCP server.
  Security considerations. Use cases thực tế: design-to-code, DB queries,
  API integration. Copilot Hooks cho automation.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Customize & Extend Copilot"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-mcp-la-gi"><strong>1. Model Context Protocol (MCP) là gì?</strong></h2>

<p><strong>MCP</strong> là giao thức chuẩn cho phép AI agents giao tiếp với <strong>external tools và services</strong>. Thay vì tự viết code tích hợp, bạn cài MCP servers để mở rộng khả năng của Copilot.</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│              MCP ARCHITECTURE                    │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐     ┌────────────┐                │
│  │ Copilot  │────▶│ MCP Server │                │
│  │ Agent    │◀────│ (Figma)    │                │
│  └──────────┘     └────────────┘                │
│       │                                          │
│       │           ┌────────────┐                │
│       └──────────▶│ MCP Server │                │
│       ◀───────────│ (Database) │                │
│                   └────────────┘                │
│       │                                          │
│       │           ┌────────────┐                │
│       └──────────▶│ MCP Server │                │
│       ◀───────────│ (GitHub)   │                │
│                   └────────────┘                │
│                                                  │
│  Copilot dùng tools từ MCP servers              │
│  như dùng built-in tools                        │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-cai-dat-mcp-servers"><strong>2. Cài đặt MCP Servers trong VS Code</strong></h2>

<h3>2.1. Cấu hình trong settings.json</h3>
<pre><code class="language-json">{
  "mcp": {
    "servers": {
      "figma": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-figma"],
        "env": {
          "FIGMA_ACCESS_TOKEN": "${env:FIGMA_ACCESS_TOKEN}"
        }
      },
      "github": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-github"],
        "env": {
          "GITHUB_TOKEN": "${env:GITHUB_TOKEN}"
        }
      },
      "postgres": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-postgres"],
        "env": {
          "DATABASE_URL": "${env:DATABASE_URL}"
        }
      }
    }
  }
}
</code></pre>

<h3>2.2. Cấu hình per-project (.vscode/mcp.json)</h3>
<pre><code class="language-json">{
  "servers": {
    "project-db": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://dev:password@localhost:5432/myapp_dev"
      }
    }
  }
}
</code></pre>

<h2 id="3-mcp-servers-pho-bien"><strong>3. MCP Servers phổ biến</strong></h2>

<h3>3.1. Figma MCP — Design to Code</h3>
<p>Kết nối Figma với Copilot để chuyển design thành code:</p>

<pre><code class="language-text">// Prompt ví dụ:
Look at the Figma design for the login page and create
a React component that matches it exactly.
Use TailwindCSS for styling.
</code></pre>

<p>Tháng 3/2026: Figma MCP server có thể <strong>generate design layers trực tiếp từ VS Code</strong>.</p>

<h3>3.2. GitHub MCP — Repository Operations</h3>
<pre><code class="language-text">// Copilot có thể:
- Tìm và phân tích issues
- Đọc pull request comments
- Tạo issues từ code analysis
- Review PR changes
</code></pre>

<h3>3.3. Database MCP — Query và Schema</h3>
<pre><code class="language-text">// Prompt ví dụ:
Show me the schema of the users table and write a query
to find all users who registered in the last 30 days
but haven't made any purchases.
</code></pre>

<h3>3.4. Các MCP servers khác</h3>
<table>
<thead>
<tr>
<th>MCP Server</th>
<th>Chức năng</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Filesystem</strong></td>
<td>Read/write files ngoài workspace</td>
</tr>
<tr>
<td><strong>Brave Search</strong></td>
<td>Web search từ trong Copilot</td>
</tr>
<tr>
<td><strong>Puppeteer</strong></td>
<td>Browser automation và screenshots</td>
</tr>
<tr>
<td><strong>Slack</strong></td>
<td>Gửi messages, tạo issues từ Slack</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>Persistent memory cho conversations</td>
</tr>
<tr>
<td><strong>GitKraken</strong></td>
<td>Git operations nâng cao</td>
</tr>
</tbody>
</table>

<h2 id="4-tao-custom-mcp-server"><strong>4. Tạo Custom MCP Server</strong></h2>

<p>Bạn có thể tạo MCP server riêng cho internal tools:</p>

<pre><code class="language-typescript">// custom-mcp-server/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({
  name: 'internal-api',
  version: '1.0.0',
}, {
  capabilities: {
    tools: {},
  },
});

// Register tool
server.setRequestHandler('tools/list', async () => ({
  tools: [{
    name: 'get_customer',
    description: 'Lấy thông tin khách hàng từ CRM',
    inputSchema: {
      type: 'object',
      properties: {
        customerId: { type: 'string', description: 'Customer ID' },
      },
      required: ['customerId'],
    },
  }],
}));

server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'get_customer') {
    const { customerId } = request.params.arguments;
    // Call internal API
    const customer = await fetchCustomer(customerId);
    return { content: [{ type: 'text', text: JSON.stringify(customer) }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
</code></pre>

<h2 id="5-copilot-hooks"><strong>5. Copilot Hooks — Automation tại lifecycle events</strong></h2>

<p>Hooks cho phép chạy custom commands tại các events cụ thể:</p>

<pre><code class="language-json">{
  "github.copilot.chat.hooks": {
    "postSave": [
      {
        "command": "npm run lint:fix",
        "pattern": "**/*.{ts,tsx}"
      }
    ],
    "postCreate": [
      {
        "command": "npx prettier --write",
        "pattern": "**/*.{ts,tsx,css}"
      }
    ]
  }
}
</code></pre>

<p>Hooks đảm bảo code AI sinh ra luôn được <strong>format và lint tự động</strong>.</p>

<h2 id="6-security-considerations"><strong>6. Security Considerations</strong></h2>

<p><strong>⚠️ MCP servers có quyền truy cập mạnh:</strong></p>

<ul>
<li>Database MCP: có thể đọc/ghi database → chỉ dùng với dev database</li>
<li>Filesystem MCP: có thể truy cập files ngoài workspace</li>
<li>API MCP: có thể gọi external APIs với credentials của bạn</li>
</ul>

<h3>Best practices:</h3>
<ul>
<li>Dùng <strong>environment variables</strong> cho secrets, không hardcode</li>
<li><strong>Limit scope</strong>: chỉ cấp quyền cần thiết cho MCP server</li>
<li><strong>Review MCP source</strong>: kiểm tra code MCP server trước khi cài</li>
<li><strong>Separate environments</strong>: dev database khác production database</li>
<li><strong>Audit logs</strong>: theo dõi MCP server activity</li>
</ul>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<p>MCP Servers biến Copilot từ <strong>code generator</strong> thành <strong>full development assistant</strong> có thể tương tác với design tools, databases, APIs, và services bên ngoài.</p>

<table>
<thead>
<tr>
<th>MCP Server</th>
<th>Vibe Coding Use Case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Figma</strong></td>
<td>"Build this design" → code</td>
</tr>
<tr>
<td><strong>Database</strong></td>
<td>"Create API for this schema" → full CRUD</td>
</tr>
<tr>
<td><strong>GitHub</strong></td>
<td>"Fix issues assigned to me" → auto-implement</td>
</tr>
<tr>
<td><strong>Custom</strong></td>
<td>"Integrate with our CRM" → domain-specific tools</td>
</tr>
</tbody>
</table>

<p>Từ Phần 5, chúng ta sẽ áp dụng tất cả kiến thức đã học vào <strong>dự án thực chiến</strong> — xây dựng full-stack app hoàn chỉnh bằng Vibe Coding.</p>
