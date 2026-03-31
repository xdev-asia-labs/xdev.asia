---
id: 019f0b20-b203-7001-e001-f2b8f9000203
title: 'Bài 6: Prompt Engineering Engine — Template System, Chain-of-Thought & Dynamic Prompts'
slug: bai-6-prompt-engineering-engine
description: >-
  Prompt template engine (Jinja2/Handlebars), system prompt versioning,
  chain-of-thought prompting, few-shot example management, dynamic prompt
  assembly, prompt A/B testing, persona management, output format control.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Core Chatbot Engine"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-prompt-as-code"><strong>1. Prompt as Code — Tại sao cần Prompt Engine?</strong></h2>

<p>Trong production, prompt không phải "một chuỗi text hardcode". Prompt cần được <strong>quản lý, versioned, A/B tested, và compose dynamically</strong> dựa trên context.</p>

<pre><code class="language-text">
┌─────────────────── PROMPT ENGINE ───────────────────────┐
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │ Template │  │ Variable │  │ Persona  │  │  A/B   │  │
│  │ Registry │  │ Resolver │  │ Manager  │  │ Tester │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └───┬────┘  │
│       │              │             │             │       │
│       └──────────────┼─────────────┘             │       │
│                      │                           │       │
│                ┌─────▼─────┐              ┌──────▼────┐  │
│                │  Prompt   │              │  Version  │  │
│                │ Assembler │              │  Manager  │  │
│                └─────┬─────┘              └───────────┘  │
│                      │                                   │
│                ┌─────▼─────┐                             │
│                │ Final     │                             │
│                │ Prompt    │──▶ LLM                      │
│                └───────────┘                             │
└──────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-template-system"><strong>2. Template System</strong></h2>

<pre><code class="language-typescript">
interface PromptTemplate {
  id: string;
  name: string;
  version: number;
  tenantId: string;
  category: 'system' | 'few_shot' | 'instruction' | 'output_format';
  template: string;       // Handlebars template
  variables: VariableDefinition[];
  metadata: {
    author: string;
    description: string;
    createdAt: Date;
    isActive: boolean;
    abTestGroup?: string;
  };
}

interface VariableDefinition {
  name: string;
  type: 'string' | 'array' | 'object' | 'boolean';
  required: boolean;
  defaultValue?: unknown;
  source: 'context' | 'config' | 'runtime' | 'rag' | 'memory';
}

class PromptTemplateEngine {
  private handlebars = Handlebars.create();

  constructor() {
    // Register custom helpers
    this.handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
      return arg1 === arg2 ? options.fn(this) : options.inverse(this);
    });

    this.handlebars.registerHelper('truncate', function (str: string, len: number) {
      return str.length &gt; len ? str.substring(0, len) + '...' : str;
    });

    this.handlebars.registerHelper('formatDate', function (date: string) {
      return new Date(date).toLocaleDateString('vi-VN');
    });
  }

  compile(template: PromptTemplate, variables: Record&lt;string, unknown&gt;): string {
    const compiled = this.handlebars.compile(template.template);
    return compiled(variables);
  }
}
</code></pre>

<h2 id="3-system-prompt-design"><strong>3. System Prompt Design Pattern</strong></h2>

<pre><code class="language-typescript">
// Production system prompt template
const SYSTEM_PROMPT_TEMPLATE = `
You are {{persona.name}}, {{persona.description}}.

## Your Role
{{persona.role_description}}

## Instructions
{{#each instructions}}
- {{this}}
{{/each}}

## Knowledge Context
{{#if rag_context}}
Use the following knowledge to answer the user's question. Cite sources using [1], [2] notation.
If the knowledge doesn't contain the answer, say you don't have enough information.

{{rag_context}}
{{/if}}

## User Memory
{{#if user_memory}}
What you know about this user:
{{#each user_memory}}
- {{this.content}}
{{/each}}
{{/if}}

## Conversation Summary
{{#if conversation_summary}}
Previous conversation summary: {{conversation_summary}}
{{/if}}

## Output Rules
{{#each output_rules}}
- {{this}}
{{/each}}

## Available Tools
{{#if tools}}
You have access to these tools:
{{#each tools}}
- **{{this.name}}**: {{this.description}}
{{/each}}
Use tools when needed. Do NOT make up information.
{{/if}}

## Language
Always respond in {{language}}.
Current date: {{current_date}}.
`;
</code></pre>

<h2 id="4-persona-manager"><strong>4. Persona Manager</strong></h2>

<pre><code class="language-typescript">
interface Persona {
  id: string;
  name: string;
  description: string;
  role_description: string;
  tone: 'formal' | 'friendly' | 'professional' | 'casual';
  language: string;
  instructions: string[];
  output_rules: string[];
  forbidden_topics: string[];
}

const DEFAULT_PERSONAS: Record&lt;string, Persona&gt; = {
  'customer-support': {
    id: 'customer-support',
    name: 'Support Assistant',
    description: 'a helpful customer support agent',
    role_description: 'You help customers with their questions about products, orders, and account issues.',
    tone: 'friendly',
    language: 'vi',
    instructions: [
      'Be empathetic and patient with customers',
      'If you cannot help, offer to escalate to a human agent',
      'Never share internal system details or pricing formulas',
      'Always verify order numbers before making changes',
    ],
    output_rules: [
      'Keep responses concise (under 200 words unless detailed explanation needed)',
      'Use bullet points for lists',
      'Include next steps when applicable',
    ],
    forbidden_topics: ['competitor pricing', 'internal metrics', 'employee information'],
  },
  'knowledge-assistant': {
    id: 'knowledge-assistant',
    name: 'Knowledge Assistant',
    description: 'an internal knowledge base assistant',
    role_description: 'You help employees find information from company documentation and policies.',
    tone: 'professional',
    language: 'vi',
    instructions: [
      'Always cite sources with document names and sections',
      'If unsure, say so and suggest who to contact',
      'Provide step-by-step guides when explaining processes',
    ],
    output_rules: [
      'Format responses with clear headings',
      'Include links to source documents when available',
    ],
    forbidden_topics: ['salary information', 'personal employee data'],
  },
};
</code></pre>

<h2 id="5-dynamic-assembly"><strong>5. Dynamic Prompt Assembly</strong></h2>

<pre><code class="language-typescript">
class PromptAssembler {
  constructor(
    private templateEngine: PromptTemplateEngine,
    private personaManager: PersonaManager,
    private templateRegistry: TemplateRegistry,
  ) {}

  async assemble(context: AssemblyContext): Promise&lt;AssembledPrompt&gt; {
    // 1. Get persona
    const persona = await this.personaManager.getPersona(
      context.tenantId,
      context.personaId,
    );

    // 2. Get template (check A/B test)
    const template = await this.templateRegistry.getActiveTemplate(
      context.tenantId,
      'system',
      context.abTestGroup,
    );

    // 3. Resolve variables
    const variables: Record&lt;string, unknown&gt; = {
      persona,
      rag_context: context.ragContext,
      user_memory: context.userMemory,
      conversation_summary: context.conversationSummary,
      tools: context.tools,
      language: persona.language === 'vi' ? 'Tiếng Việt' : 'English',
      current_date: new Date().toLocaleDateString('vi-VN'),
      instructions: persona.instructions,
      output_rules: persona.output_rules,
    };

    // 4. Compile
    const systemPrompt = this.templateEngine.compile(template, variables);

    // 5. Build few-shot examples if available
    const fewShotMessages = await this.buildFewShotExamples(context);

    return {
      systemPrompt,
      fewShotMessages,
      templateVersion: template.version,
      personaId: persona.id,
      abTestGroup: context.abTestGroup,
    };
  }

  private async buildFewShotExamples(context: AssemblyContext): Promise&lt;Message[]&gt; {
    const examples = await this.templateRegistry.getFewShotExamples(
      context.tenantId,
      context.personaId,
      3, // Max 3 examples
    );

    return examples.flatMap(ex =&gt; [
      { role: 'user' as const, content: ex.userMessage },
      { role: 'assistant' as const, content: ex.assistantMessage },
    ]);
  }
}
</code></pre>

<h2 id="6-versioning"><strong>6. Prompt Versioning & Rollback</strong></h2>

<pre><code class="language-typescript">
class PromptVersionManager {
  async createVersion(
    tenantId: string,
    templateId: string,
    newTemplate: string,
    changelog: string,
  ): Promise&lt;PromptTemplate&gt; {
    const current = await this.db.promptTemplate.findActive(tenantId, templateId);
    const newVersion = (current?.version ?? 0) + 1;

    const created = await this.db.promptTemplate.create({
      ...current,
      id: crypto.randomUUID(),
      template: newTemplate,
      version: newVersion,
      metadata: {
        ...current?.metadata,
        changelog,
        createdAt: new Date(),
        isActive: false, // Not active until explicitly activated
      },
    });

    return created;
  }

  async activateVersion(tenantId: string, templateId: string, version: number): Promise&lt;void&gt; {
    // Deactivate current
    await this.db.promptTemplate.updateMany(
      { tenantId, name: templateId, 'metadata.isActive': true },
      { 'metadata.isActive': false },
    );

    // Activate target version
    await this.db.promptTemplate.update(
      { tenantId, name: templateId, version },
      { 'metadata.isActive': true },
    );
  }

  async rollback(tenantId: string, templateId: string): Promise&lt;void&gt; {
    const versions = await this.db.promptTemplate.findAll({
      tenantId, name: templateId,
      orderBy: 'version', order: 'desc', limit: 2,
    });

    if (versions.length &lt; 2) throw new Error('No previous version to rollback to');
    await this.activateVersion(tenantId, templateId, versions[1].version);
  }
}
</code></pre>

<h2 id="7-ab-testing"><strong>7. Prompt A/B Testing</strong></h2>

<pre><code class="language-typescript">
class PromptABTester {
  async assignGroup(
    tenantId: string,
    userId: string,
    experimentId: string,
  ): Promise&lt;string&gt; {
    // Consistent hashing — same user always gets same group
    const hash = this.hashString(`${tenantId}:${userId}:${experimentId}`);
    const experiment = await this.db.experiment.findById(experimentId);

    let cumulative = 0;
    for (const variant of experiment.variants) {
      cumulative += variant.trafficPercent;
      if (hash &lt;= cumulative) return variant.group;
    }

    return experiment.variants[0].group; // Fallback to control
  }

  async trackOutcome(
    experimentId: string,
    group: string,
    metrics: {
      responseQuality?: number;  // LLM-judge score 1-5
      userSatisfaction?: number; // Thumbs up/down
      resolutionRate?: boolean;  // Was issue resolved?
      latencyMs?: number;
    },
  ): Promise&lt;void&gt; {
    await this.db.experimentResult.create({
      experimentId,
      group,
      metrics,
      timestamp: new Date(),
    });
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i &lt; str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash &lt;&lt; 5) - hash) + char;
      hash = hash &amp; hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 100; // 0-99
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 6</strong></h2>

<ul>
<li>Prompt engine = <strong>Template System</strong> + <strong>Variable Resolver</strong> + <strong>Persona Manager</strong> + <strong>Version Control</strong></li>
<li>System prompt gồm: persona + instructions + RAG context + memory + tools + output rules</li>
<li>Persona quản lý <strong>tone, language, instructions, forbidden topics</strong> per use case</li>
<li>Prompt versioning cho phép <strong>rollback</strong> khi prompt mới giảm quality</li>
<li>A/B testing với <strong>consistent hashing</strong> — same user luôn thấy same variant</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Streaming & Real-time — SSE/WebSocket streaming, voice agent (STT + TTS), multimodal input, latency optimization.</p>
