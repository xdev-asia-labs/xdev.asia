---
id: 019f0b20-b203-7001-e001-f2b8f9000203
title: >-
  Lesson 6: Prompt Engineering Engine — Template System, Chain-of-Thought &
  Dynamic Prompts
slug: bai-6-prompt-engineering-engine
description: >-
  Prompt template engine (Jinja2/Handlebars), system prompt versioning,
  chain-of-thought prompting, few-shot example management, dynamic prompt
  assembly, prompt A/B testing, persona management, output format control.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Core Chatbot Engine'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Enterprise AI Chatbot Platform Architecture — From Prototype to Production
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2508" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2508)"/>

  <!-- Decorations -->
  <g>
    <circle cx="649" cy="197" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="698" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="747" cy="135" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="796" cy="104" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="73" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="127" x2="1100" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="157" x2="1050" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.3730669589464,106 963.3730669589464,148 927,169 890.6269330410536,148 890.6269330410536,106.00000000000001 927,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Prompt Engineering Engine —</tspan>
      <tspan x="60" dy="42">Template System, Chain-of-Thought &</tspan>
      <tspan x="60" dy="42">Dynamic Prompts</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Enterprise AI Chatbot Platform Architecture — From Prototype to Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core Chatbot Engine</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-prompt-as-code"><strong>1. Prompt as Code — Why do we need Prompt Engine?</strong></h2>

<p>In production, the prompt is not "a hardcoded text string". Prompt should be <strong>managed, versioned, A/B tested, and composed dynamically</strong> based on context.</p>

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

<h2 id="tong-ket"><strong>Summary of Lesson 6</strong></h2>

<ul>
<li>Prompt engine = <strong>Template System</strong> + <strong>Variable Resolver</strong> + <strong>Persona Manager</strong> + <strong>Version Control</strong></li>
<li>System prompt includes: persona + instructions + RAG context + memory + tools + output rules</li>
<li>Management Persona <strong>tone, language, instructions, forbidden topics</strong> per use case</li>
<li>Prompt versioning enabled <strong>rollback</strong> When the new prompt drops quality</li>
<li>A/B testing with <strong>consistent hashing</strong> — same user always sees same variant</li>
</ul>

<p><strong>Next article:</strong> Streaming & Real-time — SSE/WebSocket streaming, voice agent (STT + TTS), multimodal input, latency optimization.</p>
