---
id: 019c961a-aa12-7012-e012-aa1200000012
title: "Bài 12: Workflow Engine — Thiết kế Node-based Automation"
slug: bai-12-workflow-engine
description: >-
  Thiết kế Workflow Engine: DAG (Directed Acyclic Graph), node
  types (trigger, action, condition, loop). Template resolution,
  variable interpolation. Workflow schema & validation.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Workflow Engine"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3399" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3399)"/>

  <!-- Decorations -->
  <g>
    <circle cx="687" cy="111" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="774" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="861" cy="165" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="948" cy="192" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="201" x2="1100" y2="281" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="231" x2="1050" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.1769145362398,133 982.1769145362398,169 951,187 919.8230854637602,169 919.8230854637602,133 951,115" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Workflow Engine — Thiết kế</tspan>
      <tspan x="60" dy="42">Node-based Automation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Workflow Engine</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Workflow Engine cho phép user tạo automation bằng visual nodes — kéo thả, nối nodes, define logic phức tạp mà không cần code. Bài này thiết kế engine từ core concepts.

---

## 1. Workflow Data Model

```typescript
// packages/core/src/workflow/types.ts
export interface Workflow {
  id: string;
  name: string;
  description?: string;
  tenantId: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  variables: Record<string, unknown>;
  status: 'draft' | 'active' | 'paused';
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkflowNode {
  id: string;
  type: NodeType;
  label: string;
  config: Record<string, unknown>;
  position: { x: number; y: number };
}

export type NodeType =
  | 'trigger'          // Start node — webhook, schedule, manual
  | 'llm_call'         // Call LLM with prompt
  | 'tool_call'        // Execute a tool
  | 'condition'        // If/else branching
  | 'loop'             // For each / while
  | 'transform'        // Data transformation
  | 'http_request'     // External API call
  | 'code'             // Custom code (sandboxed)
  | 'delay'            // Wait N seconds
  | 'parallel'         // Run branches in parallel
  | 'merge'            // Merge parallel results
  | 'rag_query'        // Query knowledge base
  | 'set_variable'     // Set workflow variable
  | 'notification'     // Send notification
  | 'sub_workflow'     // Call another workflow
  | 'end'              // End node

export interface WorkflowEdge {
  id: string;
  source: string;       // Source node ID
  target: string;       // Target node ID
  label?: string;       // Edge label (for conditions)
  condition?: string;   // Condition expression
}
```

---

## 2. Node Handlers

```typescript
// packages/core/src/workflow/workflow-engine.ts
type NodeHandler = (
  node: WorkflowNode,
  context: WorkflowContext,
) => Promise<unknown>;

export class WorkflowEngine {
  private handlers = new Map<NodeType, NodeHandler>();
  private llmRouter: LLMRouter;
  private toolRegistry: ToolRegistry;

  constructor(llmRouter: LLMRouter, toolRegistry: ToolRegistry) {
    this.llmRouter = llmRouter;
    this.toolRegistry = toolRegistry;
    this.registerBuiltinHandlers();
  }

  private registerBuiltinHandlers() {
    this.handlers.set('trigger', async (node, ctx) => {
      return ctx.triggerData; // Pass-through trigger data
    });

    this.handlers.set('llm_call', async (node, ctx) => {
      const prompt = this.resolveTemplate(
        node.config.prompt as string,
        ctx.variables,
      );
      const response = await this.llmRouter.chat([
        { role: 'system', content: node.config.systemPrompt as string || '' },
        { role: 'user', content: prompt },
      ]);
      return response.content;
    });

    this.handlers.set('condition', async (node, ctx) => {
      const expression = this.resolveTemplate(
        node.config.expression as string,
        ctx.variables,
      );
      // Safe evaluation — no eval()
      return this.evaluateCondition(expression, ctx.variables);
    });

    this.handlers.set('transform', async (node, ctx) => {
      const input = ctx.variables[node.config.inputVar as string];
      const template = node.config.template as string;
      return this.resolveTemplate(template, { ...ctx.variables, input });
    });

    this.handlers.set('http_request', async (node, ctx) => {
      const url = this.resolveTemplate(node.config.url as string, ctx.variables);
      const method = node.config.method as string || 'GET';

      const response = await fetch(url, {
        method,
        headers: node.config.headers as Record<string, string>,
        body: method !== 'GET' ? JSON.stringify(node.config.body) : undefined,
        signal: AbortSignal.timeout(30_000),
      });

      return response.json();
    });

    this.handlers.set('loop', async (node, ctx) => {
      const items = ctx.variables[node.config.collection as string] as unknown[];
      const results: unknown[] = [];

      for (const item of items) {
        ctx.variables['_current'] = item;
        const loopBody = this.getLoopBody(node, ctx.workflow);
        const result = await this.executeSubgraph(loopBody, ctx);
        results.push(result);
      }

      return results;
    });

    this.handlers.set('code', async (node, ctx) => {
      const code = this.resolveTemplate(node.config.code as string, ctx.variables);
      const sandbox = new VMSandbox();
      return sandbox.execute(code);
    });

    this.handlers.set('set_variable', async (node, ctx) => {
      const name = node.config.variableName as string;
      const value = this.resolveTemplate(
        node.config.value as string,
        ctx.variables,
      );
      ctx.variables[name] = value;
      return value;
    });
  }
}
```

---

## 3. Template Resolution

```typescript
// Variable interpolation: {{variableName}} → actual value
private resolveTemplate(
  template: string,
  variables: Record<string, unknown>,
): string {
  return template.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (_, path) => {
    const value = this.getNestedValue(variables, path);
    return value !== undefined ? String(value) : `{{${path}}}`;
  });
}

private getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object') {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}
```

**Ví dụ:**
```
Template: "Summarize this article: {{article.content}}"
Variables: { article: { content: "AI is transforming..." } }
Result:   "Summarize this article: AI is transforming..."
```

---

## 4. Tổng kết

- **DAG model** — nodes + edges, no cycles allowed
- **16 node types** — từ LLM calls đến HTTP requests
- **Template resolution** — `{{variable}}` interpolation
- **Sandboxed code** — VM isolation cho custom code nodes
- **Composable** — sub-workflows cho reusability

**Bài tiếp theo:** Workflow Validation & Execution — chạy workflow end-to-end.
