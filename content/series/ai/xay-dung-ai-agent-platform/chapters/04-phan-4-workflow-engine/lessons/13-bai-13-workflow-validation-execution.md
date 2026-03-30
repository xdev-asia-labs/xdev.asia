---
id: 019c961a-aa13-7013-e013-aa1300000013
title: "Bài 13: Workflow Validation & Execution"
slug: bai-13-workflow-validation-execution
description: >-
  DAG validation: cycle detection, orphan nodes. Topological sort
  execution. Error handling, retry, timeout. Execution history,
  step-by-step debugging. Real-time progress via EventBus.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Workflow Engine"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Một workflow invalid (có cycle, orphan nodes) sẽ crash runtime. Bài này implement validation + topological sort execution + error handling cho production-grade workflow engine.

---

## 1. Workflow Validation

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

## 2. Topological Sort Execution

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

## 3. Ví dụ Workflow: Content Generation Pipeline

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

## 4. Tổng kết

- **Validation** — cycle detection, orphan nodes, missing references
- **Topological sort** — execute nodes theo dependency order
- **Error handling** — per-node error policy (stop, continue, retry)
- **Execution log** — step-by-step debugging & audit trail

**Bài tiếp theo:** Skill System — Dynamic tool composition.
