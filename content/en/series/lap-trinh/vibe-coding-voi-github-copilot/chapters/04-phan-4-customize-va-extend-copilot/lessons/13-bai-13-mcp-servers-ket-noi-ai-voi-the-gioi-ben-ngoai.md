---
id: 019f1c30-a403-7001-c001-v1b3c0d10403
title: 'Lesson 13: MCP Servers — Connecting AI to the outside world'
slug: bai-13-mcp-servers-ket-noi-ai-voi-the-gioi-ben-ngoai
description: >-
  What is Model Context Protocol (MCP). Install MCP servers in VS Code. Figma
  MCP, GitHub MCP, Database MCP. Create custom MCP server. Security
  considerations. Actual use cases: design-to-code, DB queries, API integration.
  Copilot Hooks for automation.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 4: Customize & Extend Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6194" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6194)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: MCP Servers — Connecting AI to the world</tspan>
      <tspan x="60" dy="42">outside world</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Customize & Extend Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-mcp-la-gi"><strong>1. What is Model Context Protocol (MCP)?</strong></h2>

<p><strong>MCP</strong> is a standard protocol that allows AI agents to communicate with <strong>external tools and services</strong>. Instead of writing the integration code yourself, you install MCP servers to expand Copilot's capabilities.</p>

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

<h2 id="2-cai-dat-mcp-servers"><strong>2. Install MCP Servers in VS Code</strong></h2>

<h3>2.1. Configuration in settings.json</h3>
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

<h3>2.2. Per-project configuration (.vscode/mcp.json)</h3>
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

<h2 id="3-mcp-servers-pho-bien"><strong>3. Popular MCP Servers</strong></h2>

<h3>3.1. Figma MCP — Design to Code</h3>
<p>Connect Figma with Copilot to convert design into code:</p>

<pre><code class="language-text">// Prompt ví dụ:
Look at the Figma design for the login page and create
a React component that matches it exactly.
Use TailwindCSS for styling.
</code></pre>

<p>March 2026: Figma MCP server possible <strong>generate design layers directly from VS Code</strong>.</p>

<h3>3.2. GitHub MCP — Repository Operations</h3>
<pre><code class="language-text">// Copilot có thể:
- Tìm và phân tích issues
- Đọc pull request comments
- Tạo issues từ code analysis
- Review PR changes
</code></pre>

<h3>3.3. Database MCP — Query and Schema</h3>
<pre><code class="language-text">// Prompt ví dụ:
Show me the schema of the users table and write a query
to find all users who registered in the last 30 days
but haven't made any purchases.
</code></pre>

<h3>3.4. Other MCP servers</h3>
<table>
<thead>
<tr>
<th>MCP Server</th>
<th>Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Filesystem</strong></td>
<td>Read/write files outside the workspace</td>
</tr>
<tr>
<td><strong>Brave Search</strong></td>
<td>Web search from within Copilot</td>
</tr>
<tr>
<td><strong>Puppeteer</strong></td>
<td>Browser automation and screenshots</td>
</tr>
<tr>
<td><strong>Slack</strong></td>
<td>Send messages, create issues from Slack</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>Persistent memory for conversations</td>
</tr>
<tr>
<td><strong>GitKraken</strong></td>
<td>Advanced Git operations</td>
</tr>
</tbody>
</table>

<h2 id="4-tao-custom-mcp-server"><strong>4. Create Custom MCP Server</strong></h2>

<p>You can create a separate MCP server for internal tools:</p>

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

<h2 id="5-copilot-hooks"><strong>5. Copilot Hooks — Automation at lifecycle events</strong></h2>

<p>Hooks allow running custom commands at specific events:</p>

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

<p>Hooks ensure AI code is always generated <strong>format and lint automatically</strong>.</p>

<h2 id="6-security-considerations"><strong>6. Security Considerations</strong></h2>

<p><strong>⚠️ MCP servers have strong access rights:</strong></p>

<ul>
<li>Database MCP: can read/write database → only used with dev database</li>
<li>Filesystem MCP: can access files outside the workspace</li>
<li>MCP API: can call external APIs with your credentials</li>
</ul>

<h3>Best practices:</h3>
<ul>
<li>Use <strong>environment variables</strong> for secrets, not hardcode</li>
<li><strong>Limit scope</strong>: only grant necessary permissions to the MCP server</li>
<li><strong>Review MCP source</strong>: check MCP server code before installing</li>
<li><strong>Separate environments</strong>: dev database is different from production database</li>
<li><strong>Audit logs</strong>: monitor MCP server activity</li>
</ul>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<p>MCP Servers turn Copilot from <strong>code generator</strong> into <strong>full development assistant</strong> Can interact with design tools, databases, APIs, and external services.</p>

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

<p>From Part 5, we will apply all the knowledge we have learned <strong>real combat project</strong> — build a complete full-stack app using Vibe Coding.</p>
