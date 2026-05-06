---
id: 019c961a-aa13-7013-e013-aa1300000013
title: 第 13 課：工作流程驗證與執行
slug: bai-13-workflow-validation-execution
description: DAG 驗證：循環偵測、孤兒節點。拓撲排序執行。錯誤處理、重試、超時。執行歷史記錄，逐步調試。透過 EventBus 即時進度。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: 第 4 部分：工作流程引擎
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-730" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-730)"/>

  <!-- Decorations -->
  <g>
    <circle cx="954" cy="172" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="662" cy="180" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="54" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="192" x2="1100" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="222" x2="1050" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1065.38268590218,228.5 1065.38268590218,255.5 1042,269 1018.6173140978201,255.5 1018.6173140978201,228.5 1042,215" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：工作流程驗證與執行</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：工作流程引擎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

無效的工作流程（有循環、孤立節點）將導致運行時崩潰。本文實作了生產級工作流程引擎的驗證+拓樸排序執行+錯誤處理。

---

## 1. 工作流程驗證

```typescript
// packages/core/src/workflow/workflow-engine.ts
validateWorkflow(workflow: Workflow): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Must have exactly one trigger node
  const triggers = workflow.nodes.filter(n => n.type === 'trigger');
  if (triggers.length === 0) errors.push('Workflow must have a trigger node');
  if (triggers.length > 1) errors.push('Workflow must have exactly one trigger node');

  // 2. Must have at least one end node
  const ends = workflow.nodes.filter(n => n.type === 'end');
  if (ends.length === 0) warnings.push('No end node — workflow may not terminate cleanly');

  // 3. Cycle detection (DFS)
  if (this.hasCycle(workflow)) {
    errors.push('Workflow contains a cycle — not allowed in DAG');
  }

  // 4. Orphan detection
  const connectedIds = new Set<string>();
  for (const edge of workflow.edges) {
    connectedIds.add(edge.source);
    connectedIds.add(edge.target);
  }
  const orphans = workflow.nodes.filter(n =>
    n.type !== 'trigger' && !connectedIds.has(n.id)
  );
  if (orphans.length > 0) {
    warnings.push(`Orphan nodes: ${orphans.map(n => n.label).join(', ')}`);
  }

  // 5. All edges reference valid nodes
  const nodeIds = new Set(workflow.nodes.map(n => n.id));
  for (const edge of workflow.edges) {
    if (!nodeIds.has(edge.source)) errors.push(`Edge references missing source: ${edge.source}`);
    if (!nodeIds.has(edge.target)) errors.push(`Edge references missing target: ${edge.target}`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

private hasCycle(workflow: Workflow): boolean {
  const adj = new Map<string, string[]>();
  for (const edge of workflow.edges) {
    if (!adj.has(edge.source)) adj.set(edge.source, []);
    adj.get(edge.source)!.push(edge.target);
  }

  const visited = new Set<string>();
  const inStack = new Set<string>();

  function dfs(nodeId: string): boolean {
    visited.add(nodeId);
    inStack.add(nodeId);

    for (const neighbor of adj.get(nodeId) || []) {
      if (inStack.has(neighbor)) return true; // Cycle!
      if (!visited.has(neighbor) && dfs(neighbor)) return true;
    }

    inStack.delete(nodeId);
    return false;
  }

  for (const node of workflow.nodes) {
    if (!visited.has(node.id) && dfs(node.id)) return true;
  }
  return false;
}
```

---

## 2. 拓樸排序執行

```typescript
async execute(
  workflow: Workflow,
  triggerData: unknown,
  context: ToolContext,
): Promise<WorkflowResult> {
  // Validate first
  const validation = this.validateWorkflow(workflow);
  if (!validation.valid) {
    throw new Error(`Invalid workflow: ${validation.errors.join('; ')}`);
  }

  const ctx: WorkflowContext = {
    workflow,
    variables: { ...workflow.variables },
    triggerData,
    toolContext: context,
    nodeResults: new Map(),
    executionLog: [],
  };

  // Topological sort
  const executionOrder = this.topologicalSort(workflow);

  for (const nodeId of executionOrder) {
    const node = workflow.nodes.find(n => n.id === nodeId)!;
    const handler = this.handlers.get(node.type);

    if (!handler) {
      throw new Error(`No handler for node type: ${node.type}`);
    }

    const stepStart = Date.now();
    try {
      // Handle condition branching
      if (node.type === 'condition') {
        const result = await handler(node, ctx);
        ctx.nodeResults.set(nodeId, result);

        // Skip nodes not on the chosen branch
        // (handled by edge conditions)
        continue;
      }

      const result = await handler(node, ctx);
      ctx.nodeResults.set(nodeId, result);
      ctx.variables[`_node_${nodeId}`] = result;

      ctx.executionLog.push({
        nodeId,
        nodeType: node.type,
        status: 'success',
        result,
        duration: Date.now() - stepStart,
      });
    } catch (error) {
      ctx.executionLog.push({
        nodeId,
        nodeType: node.type,
        status: 'error',
        error: error instanceof Error ? error.message : String(error),
        duration: Date.now() - stepStart,
      });

      // Stop execution on error (or retry if configured)
      if (node.config.onError !== 'continue') {
        throw error;
      }
    }
  }

  return {
    success: true,
    variables: ctx.variables,
    executionLog: ctx.executionLog,
  };
}

private topologicalSort(workflow: Workflow): string[] {
  const inDegree = new Map<string, number>();
  const adj = new Map<string, string[]>();

  for (const node of workflow.nodes) {
    inDegree.set(node.id, 0);
    adj.set(node.id, []);
  }

  for (const edge of workflow.edges) {
    adj.get(edge.source)!.push(edge.target);
    inDegree.set(edge.target, (inDegree.get(edge.target) || 0) + 1);
  }

  const queue: string[] = [];
  for (const [id, degree] of inDegree) {
    if (degree === 0) queue.push(id);
  }

  const order: string[] = [];
  while (queue.length > 0) {
    const nodeId = queue.shift()!;
    order.push(nodeId);

    for (const neighbor of adj.get(nodeId) || []) {
      const newDegree = inDegree.get(neighbor)! - 1;
      inDegree.set(neighbor, newDegree);
      if (newDegree === 0) queue.push(neighbor);
    }
  }

  return order;
}
```

---

## 3. 工作流程範例：內容產生管道

```json
{
  "nodes": [
    { "id": "1", "type": "trigger", "label": "Manual Trigger", "config": {} },
    { "id": "2", "type": "llm_call", "label": "Generate Outline", "config": {
      "prompt": "Create an outline for: {{topic}}", "systemPrompt": "You are a content strategist"
    }},
    { "id": "3", "type": "llm_call", "label": "Write Article", "config": {
      "prompt": "Write article from outline: {{_node_2}}"
    }},
    { "id": "4", "type": "llm_call", "label": "Generate SEO", "config": {
      "prompt": "Generate SEO metadata for: {{_node_3}}"
    }},
    { "id": "5", "type": "end", "label": "Done", "config": {} }
  ],
  "edges": [
    { "source": "1", "target": "2" },
    { "source": "2", "target": "3" },
    { "source": "3", "target": "4" },
    { "source": "4", "target": "5" }
  ],
  "variables": { "topic": "AI Agent Architecture" }
}
```

---

## 4. 總結

- **驗證** — 循環偵測、孤立節點、缺失引用
- **拓樸排序** — 依照依賴順序執行節點
- **錯誤處理** — 每個節點的錯誤策略（停止、繼續、重試）
- **執行日誌** — 逐步調試和審計跟踪

**下一篇：** 技能係統－動態工具組合。
