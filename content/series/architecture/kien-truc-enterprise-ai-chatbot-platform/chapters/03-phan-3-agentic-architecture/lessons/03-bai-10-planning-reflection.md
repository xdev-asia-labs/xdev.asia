---
id: 019f0b20-b303-7001-e001-f2b8f9000303
title: 'Bài 10: Planning & Reflection — ReAct, Self-Correction & Complex Task Decomposition'
slug: bai-10-planning-reflection
description: >-
  ReAct pattern (Reasoning + Acting), plan-execute-review cycle,
  self-reflection loop, task decomposition, error recovery, hallucination
  detection, confidence scoring.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Agentic Architecture"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-react-pattern"><strong>1. ReAct Pattern — Reasoning + Acting</strong></h2>

<p>ReAct (Reason + Act) là pattern mạnh nhất cho agentic AI — LLM <strong>suy nghĩ trước khi hành động</strong>, và <strong>phản hồi sau khi nhận kết quả</strong>. Khác với naive function calling, ReAct tạo trace of thought giúp debug và improve agent.</p>

<pre><code class="language-text">
┌────────────── ReAct LOOP ──────────────────┐
│                                             │
│  ┌──────────┐                               │
│  │ Thought  │  "Tôi cần kiểm tra đơn hàng" │
│  └────┬─────┘                               │
│       │                                     │
│  ┌────▼─────┐                               │
│  │ Action   │  call get_order(id="12345")   │
│  └────┬─────┘                               │
│       │                                     │
│  ┌────▼──────┐                              │
│  │Observation│  {status: "shipped", ...}    │
│  └────┬──────┘                              │
│       │                                     │
│  ┌────▼─────┐                               │
│  │ Thought  │  "Đơn đang ship, cần kiểm    │
│  │          │   tra tracking number"        │
│  └────┬─────┘                               │
│       │                                     │
│  ┌────▼─────┐                               │
│  │ Action   │  call get_tracking(...)       │
│  └────┬─────┘                               │
│       │                                     │
│  ┌────▼──────┐                              │
│  │ Answer   │  "Đơn #12345 đang ship,      │
│  │          │   mã tracking: VN123..."      │
│  └──────────┘                               │
└─────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-typescript">
class ReActAgent {
  private maxIterations = 10;

  async execute(
    task: string,
    tools: ToolDefinition[],
    context: AgentContext,
  ): Promise&lt;ReActResult&gt; {
    const trace: ReActStep[] = [];

    const systemPrompt = `
You are a reasoning agent. For each step, you MUST follow this format:

Thought: [Your reasoning about what to do next]
Action: [Tool name to call, or "answer" if you have enough info]
Action Input: [JSON arguments for the tool]

After receiving an observation, reason about the result before taking the next action.
If you have enough information to answer, use Action: answer.

Available tools:
${tools.map(t => `- ${t.name}: ${t.description}`).join('\n')}
`;

    const messages: LLMMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: task },
    ];

    for (let i = 0; i &lt; this.maxIterations; i++) {
      // Get LLM's thought + action
      const response = await this.llm.chat({
        messages,
        model: context.model,
        temperature: 0.2,
        stop: ['Observation:'], // Stop before observation
      });

      const parsed = this.parseReActResponse(response.content);
      trace.push(parsed);

      // If agent wants to answer, we're done
      if (parsed.action === 'answer') {
        return {
          answer: parsed.actionInput as string,
          trace,
          iterations: i + 1,
        };
      }

      // Execute tool
      const toolResult = await this.toolExecutor.execute(
        { name: parsed.action, arguments: parsed.actionInput },
        context,
      );

      // Add observation
      messages.push({ role: 'assistant', content: response.content });
      messages.push({
        role: 'user',
        content: `Observation: ${JSON.stringify(toolResult.data ?? toolResult.error)}`,
      });
    }

    return {
      answer: 'Không thể hoàn thành task trong số bước cho phép.',
      trace,
      iterations: this.maxIterations,
    };
  }

  private parseReActResponse(text: string): ReActStep {
    const thoughtMatch = text.match(/Thought:\s*(.+?)(?=\nAction:)/s);
    const actionMatch = text.match(/Action:\s*(.+?)(?=\nAction Input:)/s);
    const inputMatch = text.match(/Action Input:\s*(.+)/s);

    return {
      thought: thoughtMatch?.[1]?.trim() ?? '',
      action: actionMatch?.[1]?.trim() ?? 'answer',
      actionInput: inputMatch ? JSON.parse(inputMatch[1].trim()) : text,
    };
  }
}
</code></pre>

<h2 id="2-plan-execute"><strong>2. Plan-Execute-Review Cycle</strong></h2>

<pre><code class="language-typescript">
interface TaskPlan {
  goal: string;
  steps: PlanStep[];
  dependencies: Map&lt;number, number[]&gt;; // step → depends on steps
}

interface PlanStep {
  id: number;
  description: string;
  tool: string;
  expectedOutput: string;
  status: 'pending' | 'executing' | 'completed' | 'failed' | 'skipped';
  result?: unknown;
}

class PlanExecuteAgent {
  async execute(task: string, context: AgentContext): Promise&lt;PlanResult&gt; {
    // Phase 1: PLAN
    const plan = await this.createPlan(task, context);

    // Phase 2: EXECUTE step by step
    for (const step of plan.steps) {
      // Check dependencies
      const deps = plan.dependencies.get(step.id) ?? [];
      const depsCompleted = deps.every(
        d =&gt; plan.steps.find(s =&gt; s.id === d)?.status === 'completed',
      );

      if (!depsCompleted) {
        step.status = 'skipped';
        continue;
      }

      step.status = 'executing';
      try {
        const result = await this.executeStep(step, plan, context);
        step.result = result;
        step.status = 'completed';
      } catch (error) {
        step.status = 'failed';
        // Phase 3: REPLAN on failure
        const replan = await this.replan(plan, step, error, context);
        if (replan) {
          plan.steps = replan.steps;
          continue;
        }
      }
    }

    // Phase 4: REVIEW — Self-assess the results
    const review = await this.reviewResults(task, plan, context);

    return { plan, review, finalAnswer: review.answer };
  }

  private async createPlan(task: string, context: AgentContext): Promise&lt;TaskPlan&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Create a step-by-step plan to accomplish the task.
Output JSON:
{
  "goal": "...",
  "steps": [
    {"id": 1, "description": "...", "tool": "tool_name", "expectedOutput": "..."},
    ...
  ],
  "dependencies": {"2": [1], "3": [1, 2]}
}
Available tools: ${context.tools.map(t =&gt; t.name).join(', ')}`,
      }, {
        role: 'user',
        content: task,
      }],
      response_format: { type: 'json_object' },
    });

    return JSON.parse(response.content);
  }

  private async reviewResults(
    task: string,
    plan: TaskPlan,
    context: AgentContext,
  ): Promise&lt;ReviewResult&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Review if the plan execution successfully addressed the user's task.
Assess:
1. Were all necessary steps completed?
2. Is the information sufficient to answer?
3. Are there any inconsistencies?
Provide a final answer to the user.`,
      }, {
        role: 'user',
        content: `Task: ${task}\n\nPlan results:\n${JSON.stringify(plan.steps, null, 2)}`,
      }],
    });

    return { answer: response.content, isComplete: true };
  }
}
</code></pre>

<h2 id="3-self-reflection"><strong>3. Self-Reflection & Error Recovery</strong></h2>

<pre><code class="language-typescript">
class ReflectionAgent {
  async executeWithReflection(
    task: string,
    context: AgentContext,
    maxReflections = 3,
  ): Promise&lt;ReflectionResult&gt; {
    let attempt = 0;
    let lastResponse = '';
    const reflections: Reflection[] = [];

    while (attempt &lt; maxReflections) {
      // Generate response
      const response = await this.generateResponse(task, context, reflections);
      lastResponse = response;

      // Self-reflect on quality
      const reflection = await this.reflect(task, response, context);
      reflections.push(reflection);

      if (reflection.isAcceptable) {
        return {
          finalResponse: response,
          reflections,
          attempts: attempt + 1,
        };
      }

      // Log improvement areas
      console.log(`Reflection ${attempt + 1}: ${reflection.feedback}`);
      attempt++;
    }

    // Return best attempt with disclaimer
    return {
      finalResponse: lastResponse,
      reflections,
      attempts: maxReflections,
      disclaimer: 'Response may be incomplete — reached max reflection attempts.',
    };
  }

  private async reflect(
    task: string,
    response: string,
    context: AgentContext,
  ): Promise&lt;Reflection&gt; {
    const result = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `You are a quality reviewer. Evaluate the response against the task.

Check for:
1. Accuracy: Does it correctly address the task?
2. Completeness: Are all aspects covered?
3. Hallucination: Any made-up information?
4. Consistency: Does it contradict known facts?
5. Actionability: Can the user act on this?

Output JSON:
{
  "isAcceptable": true/false,
  "score": 1-10,
  "issues": ["issue1", ...],
  "feedback": "specific improvement suggestions",
  "hallucinations": ["any detected hallucinations"]
}`,
      }, {
        role: 'user',
        content: `Task: ${task}\n\nResponse to evaluate:\n${response}`,
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o', // Use strong model for reflection
    });

    return JSON.parse(result.content);
  }
}
</code></pre>

<h2 id="4-hallucination-detection"><strong>4. Hallucination Detection</strong></h2>

<pre><code class="language-typescript">
class HallucinationDetector {
  async check(
    response: string,
    sources: Document[],
    toolResults: ToolResult[],
  ): Promise&lt;HallucinationReport&gt; {
    // Strategy 1: Source attribution check
    const claims = await this.extractClaims(response);
    const unsupported: string[] = [];

    for (const claim of claims) {
      const isSupported = await this.isClaimSupported(claim, sources, toolResults);
      if (!isSupported) unsupported.push(claim);
    }

    // Strategy 2: Self-consistency check (ask same question N times)
    const consistencyScore = await this.checkConsistency(response);

    // Strategy 3: Factual verification (for numeric claims)
    const numericClaims = this.extractNumericClaims(response);
    const numericErrors = await this.verifyNumericClaims(numericClaims, sources);

    return {
      overallScore: this.calculateScore(unsupported, consistencyScore, numericErrors),
      unsupportedClaims: unsupported,
      consistencyScore,
      numericErrors,
      recommendation: unsupported.length &gt; 0 ? 'FLAG_FOR_REVIEW' : 'PASS',
    };
  }

  private async extractClaims(text: string): Promise&lt;string[]&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: 'Extract all factual claims from the text. Output as JSON array of strings.',
      }, {
        role: 'user',
        content: text,
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o-mini',
    });

    return JSON.parse(response.content).claims;
  }

  private async isClaimSupported(
    claim: string,
    sources: Document[],
    toolResults: ToolResult[],
  ): Promise&lt;boolean&gt; {
    // Check against RAG sources
    const claimEmbedding = await this.embedder.embed(claim);

    for (const source of sources) {
      const sourceEmbedding = await this.embedder.embed(source.content);
      const similarity = this.cosineSimilarity(claimEmbedding, sourceEmbedding);
      if (similarity &gt; 0.8) return true;
    }

    // Check against tool results
    const allResults = JSON.stringify(toolResults);
    if (allResults.toLowerCase().includes(claim.toLowerCase().slice(0, 50))) {
      return true;
    }

    return false;
  }
}
</code></pre>

<h2 id="5-confidence-scoring"><strong>5. Confidence Scoring Framework</strong></h2>

<pre><code class="language-typescript">
interface ConfidenceScore {
  overall: number;        // 0.0 - 1.0
  sourceReliability: number;
  modelCertainty: number;
  responseConsistency: number;
  action: 'respond' | 'caveat' | 'escalate' | 'refuse';
}

class ConfidenceScorer {
  score(response: AgentResponse): ConfidenceScore {
    const sourceReliability = this.scoreSourceReliability(response.sources);
    const modelCertainty = this.scoreModelCertainty(response.logprobs);
    const responseConsistency = response.hallucinationReport.consistencyScore;

    const overall = (
      sourceReliability * 0.4 +
      modelCertainty * 0.3 +
      responseConsistency * 0.3
    );

    return {
      overall,
      sourceReliability,
      modelCertainty,
      responseConsistency,
      action: this.determineAction(overall),
    };
  }

  private determineAction(score: number): ConfidenceScore['action'] {
    if (score &gt;= 0.8) return 'respond';       // High confidence
    if (score &gt;= 0.5) return 'caveat';         // Add disclaimer
    if (score &gt;= 0.3) return 'escalate';       // Transfer to human
    return 'refuse';                             // Don't answer
  }

  private scoreModelCertainty(logprobs: number[] | undefined): number {
    if (!logprobs?.length) return 0.5;
    const avgLogprob = logprobs.reduce((a, b) =&gt; a + b, 0) / logprobs.length;
    return Math.exp(avgLogprob); // Convert log probability to probability
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 10</strong></h2>

<ul>
<li><strong>ReAct</strong>: Thought → Action → Observation loop — agent suy nghĩ trước khi hành động</li>
<li><strong>Plan-Execute-Review</strong>: Tạo plan → execute step-by-step → review kết quả → replan nếu fail</li>
<li><strong>Self-Reflection</strong>: Agent tự đánh giá quality, detect issues, improve response (max N attempts)</li>
<li><strong>Hallucination Detection</strong>: Extract claims → check against sources → flag unsupported claims</li>
<li><strong>Confidence Scoring</strong>: ≥0.8 respond, ≥0.5 add caveat, ≥0.3 escalate, &lt;0.3 refuse</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Structured Data Querying — Text-to-SQL, knowledge graph querying, database agent, result formatting.</p>
