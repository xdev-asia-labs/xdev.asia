---
id: 019f0b20-b301-7001-e001-f2b8f9000301
title: 'Bài 8: Function Calling & Tool Use — Tool Registry, Safe Execution & Output Validation'
slug: bai-8-function-calling-tool-use
description: >-
  Thiết kế tool registry, OpenAI/Anthropic function calling, safe execution
  sandbox, output validation, tool chaining, error handling, rate limiting
  per tool.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Agentic Architecture"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2726" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2726)"/>

  <!-- Decorations -->
  <g>
    <circle cx="604" cy="162" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="608" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="612" cy="250" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="616" cy="34" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="78" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.0429399400243,173.5 1024.0429399400243,210.5 992,229 959.9570600599758,210.5 959.9570600599758,173.5 992,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ Kiến trúc — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: Function Calling &amp; Tool Use — Tool</tspan>
      <tspan x="60" dy="42">Registry, Safe Execution &amp; Output</tspan>
      <tspan x="60" dy="42">Validation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Agentic Architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-function-calling-overview"><strong>1. Function Calling — Biến LLM thành Action Engine</strong></h2>

<p>Function calling cho phép LLM <strong>gọi external tools/APIs</strong> thay vì chỉ generate text. Đây là nền tảng của mọi agentic chatbot — từ tra cứu đơn hàng, đặt lịch hẹn đến thực thi workflow phức tạp.</p>

<pre><code class="language-text">
┌────────────── FUNCTION CALLING FLOW ──────────────────┐
│                                                        │
│  User: "Kiểm tra đơn hàng #12345"                     │
│                  │                                     │
│                  ▼                                     │
│  ┌───────────────────┐                                 │
│  │   LLM decides:    │                                 │
│  │   call tool       │                                 │
│  │   "get_order"     │                                 │
│  │   args: {id:12345}│                                 │
│  └─────────┬─────────┘                                 │
│            │                                           │
│            ▼                                           │
│  ┌───────────────────┐    ┌────────────────────┐       │
│  │  Tool Executor    │───▶│ Order Service API  │       │
│  │  (Sandbox)        │◀───│                    │       │
│  └─────────┬─────────┘    └────────────────────┘       │
│            │                                           │
│            ▼                                           │
│  ┌───────────────────┐                                 │
│  │   LLM formats     │                                 │
│  │   response with   │                                 │
│  │   tool result     │                                 │
│  └───────────────────┘                                 │
│                                                        │
│  Bot: "Đơn hàng #12345 đang được vận chuyển..."       │
└────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-tool-registry"><strong>2. Tool Registry Design</strong></h2>

<pre><code class="language-typescript">
interface ToolDefinition {
  name: string;
  description: string;
  category: 'query' | 'action' | 'computation';
  parameters: JSONSchema;           // OpenAI function schema
  requiredPermissions: string[];    // RBAC permissions needed
  rateLimit: { maxCalls: number; windowMs: number };
  timeout: number;                  // Max execution time in ms
  retryPolicy: { maxRetries: number; backoffMs: number };
  dangerLevel: 'safe' | 'moderate' | 'dangerous';
  requiresConfirmation: boolean;    // Ask user before executing?
}

class ToolRegistry {
  private tools = new Map&lt;string, RegisteredTool&gt;();

  register(tool: ToolDefinition, handler: ToolHandler): void {
    // Validate schema
    this.validateSchema(tool.parameters);

    this.tools.set(tool.name, {
      definition: tool,
      handler,
      metrics: { totalCalls: 0, totalErrors: 0, avgLatencyMs: 0 },
    });
  }

  getToolsForLLM(
    tenantId: string,
    userPermissions: string[],
  ): OpenAIToolDefinition[] {
    return Array.from(this.tools.values())
      .filter(t =&gt; this.hasPermission(t.definition, userPermissions))
      .map(t =&gt; ({
        type: 'function' as const,
        function: {
          name: t.definition.name,
          description: t.definition.description,
          parameters: t.definition.parameters,
        },
      }));
  }

  private hasPermission(tool: ToolDefinition, permissions: string[]): boolean {
    return tool.requiredPermissions.every(p =&gt; permissions.includes(p));
  }
}

// Example tool registrations
registry.register(
  {
    name: 'get_order_status',
    description: 'Get the current status of a customer order by order ID',
    category: 'query',
    parameters: {
      type: 'object',
      properties: {
        order_id: { type: 'string', description: 'The order ID (e.g., ORD-12345)' },
      },
      required: ['order_id'],
    },
    requiredPermissions: ['orders:read'],
    rateLimit: { maxCalls: 10, windowMs: 60_000 },
    timeout: 5_000,
    retryPolicy: { maxRetries: 2, backoffMs: 1000 },
    dangerLevel: 'safe',
    requiresConfirmation: false,
  },
  async (args: { order_id: string }) =&gt; {
    const order = await orderService.getOrder(args.order_id);
    return {
      orderId: order.id,
      status: order.status,
      estimatedDelivery: order.estimatedDelivery,
      items: order.items.map(i =&gt; ({ name: i.name, quantity: i.quantity })),
    };
  },
);

registry.register(
  {
    name: 'cancel_order',
    description: 'Cancel a customer order. Only works for orders not yet shipped.',
    category: 'action',
    parameters: {
      type: 'object',
      properties: {
        order_id: { type: 'string', description: 'The order ID to cancel' },
        reason: { type: 'string', description: 'Cancellation reason' },
      },
      required: ['order_id', 'reason'],
    },
    requiredPermissions: ['orders:write'],
    rateLimit: { maxCalls: 5, windowMs: 60_000 },
    timeout: 10_000,
    retryPolicy: { maxRetries: 1, backoffMs: 2000 },
    dangerLevel: 'moderate',
    requiresConfirmation: true, // Ask user before cancelling
  },
  async (args: { order_id: string; reason: string }) =&gt; {
    return orderService.cancelOrder(args.order_id, args.reason);
  },
);
</code></pre>

<h2 id="3-safe-execution"><strong>3. Safe Execution Sandbox</strong></h2>

<pre><code class="language-typescript">
class ToolExecutor {
  constructor(
    private registry: ToolRegistry,
    private rateLimiter: ToolRateLimiter,
    private auditLog: AuditLogger,
  ) {}

  async execute(
    toolCall: LLMToolCall,
    context: ExecutionContext,
  ): Promise&lt;ToolResult&gt; {
    const tool = this.registry.get(toolCall.name);
    if (!tool) {
      return { success: false, error: `Unknown tool: ${toolCall.name}` };
    }

    // 1. Permission check
    if (!this.hasPermission(tool.definition, context.userPermissions)) {
      return { success: false, error: 'Insufficient permissions' };
    }

    // 2. Rate limit check
    const allowed = await this.rateLimiter.check(
      `${context.tenantId}:${context.userId}:${toolCall.name}`,
      tool.definition.rateLimit,
    );
    if (!allowed) {
      return { success: false, error: 'Rate limit exceeded. Please try again later.' };
    }

    // 3. Input validation
    const validation = this.validateArgs(toolCall.arguments, tool.definition.parameters);
    if (!validation.valid) {
      return { success: false, error: `Invalid arguments: ${validation.errors.join(', ')}` };
    }

    // 4. Sanitize inputs (prevent injection)
    const sanitizedArgs = this.sanitizeArgs(toolCall.arguments);

    // 5. Confirmation check for dangerous actions
    if (tool.definition.requiresConfirmation) {
      return {
        success: true,
        requiresConfirmation: true,
        confirmationMessage: `Bạn có muốn thực hiện "${tool.definition.description}" không?`,
        pendingAction: { toolName: toolCall.name, args: sanitizedArgs },
      };
    }

    // 6. Execute with timeout
    const startTime = Date.now();
    try {
      const result = await this.executeWithTimeout(
        tool.handler,
        sanitizedArgs,
        tool.definition.timeout,
      );

      // 7. Output validation (prevent data leakage)
      const sanitizedResult = this.sanitizeOutput(result, tool.definition);

      // 8. Audit log
      await this.auditLog.log({
        tenantId: context.tenantId,
        userId: context.userId,
        tool: toolCall.name,
        args: sanitizedArgs,
        result: 'success',
        latencyMs: Date.now() - startTime,
      });

      return { success: true, data: sanitizedResult };
    } catch (error) {
      await this.auditLog.log({
        tenantId: context.tenantId,
        userId: context.userId,
        tool: toolCall.name,
        args: sanitizedArgs,
        result: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        latencyMs: Date.now() - startTime,
      });

      return { success: false, error: 'Tool execution failed. Please try again.' };
    }
  }

  private async executeWithTimeout&lt;T&gt;(
    handler: ToolHandler,
    args: unknown,
    timeoutMs: number,
  ): Promise&lt;T&gt; {
    return Promise.race([
      handler(args),
      new Promise&lt;never&gt;((_, reject) =&gt;
        setTimeout(() =&gt; reject(new Error('Tool execution timed out')), timeoutMs),
      ),
    ]);
  }

  private sanitizeArgs(args: Record&lt;string, unknown&gt;): Record&lt;string, unknown&gt; {
    const sanitized: Record&lt;string, unknown&gt; = {};
    for (const [key, value] of Object.entries(args)) {
      if (typeof value === 'string') {
        // Prevent SQL injection, command injection
        sanitized[key] = value
          .replace(/[;\-\-]/g, '')
          .replace(/['"`]/g, '')
          .trim();
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }
}
</code></pre>

<h2 id="4-tool-chain"><strong>4. Tool Chaining — Multi-step Tool Calls</strong></h2>

<pre><code class="language-typescript">
class ToolChainExecutor {
  private maxChainDepth = 5; // Prevent infinite loops

  async executeChain(
    messages: LLMMessage[],
    tools: OpenAIToolDefinition[],
    context: ExecutionContext,
  ): Promise&lt;ChainResult&gt; {
    const toolResults: ToolCallRecord[] = [];
    let depth = 0;

    while (depth &lt; this.maxChainDepth) {
      // Call LLM
      const response = await this.llm.chat({
        messages,
        tools,
        tool_choice: 'auto',
      });

      // If no tool calls, we're done
      if (!response.toolCalls?.length) {
        return { finalResponse: response.content, toolResults };
      }

      // Execute all tool calls (can be parallel)
      const results = await Promise.all(
        response.toolCalls.map(async (tc) =&gt; {
          const result = await this.toolExecutor.execute(tc, context);
          return { toolCall: tc, result };
        }),
      );

      // Handle confirmation requests
      const needsConfirmation = results.find(r =&gt; r.result.requiresConfirmation);
      if (needsConfirmation) {
        return {
          finalResponse: null,
          toolResults,
          pendingConfirmation: needsConfirmation.result,
        };
      }

      // Append tool results to messages
      messages.push({
        role: 'assistant',
        content: null,
        tool_calls: response.toolCalls.map(tc =&gt; ({
          id: tc.id,
          type: 'function',
          function: { name: tc.name, arguments: JSON.stringify(tc.arguments) },
        })),
      });

      for (const { toolCall, result } of results) {
        messages.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: JSON.stringify(result.data ?? { error: result.error }),
        });
        toolResults.push({ tool: toolCall.name, args: toolCall.arguments, result });
      }

      depth++;
    }

    return {
      finalResponse: 'Đã đạt giới hạn số bước xử lý. Vui lòng thử lại.',
      toolResults,
    };
  }
}
</code></pre>

<h2 id="5-structured-output"><strong>5. Structured Output Validation</strong></h2>

<pre><code class="language-typescript">
import { z } from 'zod';

// Define expected tool output schemas
const OrderStatusSchema = z.object({
  orderId: z.string(),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  estimatedDelivery: z.string().datetime().nullable(),
  items: z.array(z.object({
    name: z.string(),
    quantity: z.number().positive(),
  })),
});

class ToolOutputValidator {
  private schemas = new Map&lt;string, z.ZodSchema&gt;();

  register(toolName: string, schema: z.ZodSchema): void {
    this.schemas.set(toolName, schema);
  }

  validate(toolName: string, output: unknown): ValidationResult {
    const schema = this.schemas.get(toolName);
    if (!schema) return { valid: true, data: output };

    const result = schema.safeParse(output);
    if (result.success) {
      return { valid: true, data: result.data };
    }

    return {
      valid: false,
      errors: result.error.errors.map(e =&gt; `${e.path.join('.')}: ${e.message}`),
    };
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 8</strong></h2>

<ul>
<li><strong>Tool Registry</strong>: Quản lý tool definitions, permissions, rate limits, danger levels</li>
<li><strong>Safe Execution</strong>: Permission check → Rate limit → Input validation → Sanitize → Timeout → Audit log</li>
<li><strong>Tool Chaining</strong>: LLM tự động chain nhiều tool calls, max depth = 5 để tránh infinite loop</li>
<li><strong>Confirmation</strong>: Actions nguy hiểm (cancel, delete) yêu cầu user xác nhận trước khi thực thi</li>
<li><strong>Output Validation</strong>: Dùng Zod schema để validate tool output trước khi gửi lại LLM</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Multi-Agent Orchestration — agent routing, supervisor pattern, handoff protocol, shared memory giữa agents.</p>
