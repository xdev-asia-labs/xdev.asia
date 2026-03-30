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
