---
id: 019f0b20-b203-7001-e001-f2b8f9000203
title: 第六課：提示工程引擎－模板系統、思路鍊和動態提示
slug: bai-6-prompt-engineering-engine
description: 提示範本引擎（Jinja2/Handlebars）、系統提示版本控制、想法提示、小樣本管理、動態提示組裝、提示 A/B 測試、角色管理、輸出格式控制。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：核心聊天機器人引擎
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: 企業人工智慧聊天機器人平台架構－從原型到生產
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：快速工程引擎 —</tspan>
      <tspan x="60" dy="42">模板系統、思想鏈&</tspan>
      <tspan x="60" dy="42">動態提示</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">企業人工智慧聊天機器人平台架構－從原型到生產</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：核心聊天機器人引擎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-prompt-as-code"><strong>1. Prompt as Code－為什麼我們需要 Prompt Engine？</strong></h2>

<p>在生產中，提示不是「硬編碼的文字字串」。提示應該是 <strong>動態管理、版本控制、A/B 測試和組合</strong> 基於上下文。</p>

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

<h2 id="2-template-system"><strong>2. 模板系統</strong></h2>

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

<h2 id="3-system-prompt-design"><strong>3.系統提示設計模式</strong></h2>

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

<h2 id="4-persona-manager"><strong>4.角色經理</strong></h2>

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

<h2 id="5-dynamic-assembly"><strong>5. 動態提示組裝</strong></h2>

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

<h2 id="6-versioning"><strong>6. 及時版本控制與回滾</strong></h2>

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

<h2 id="7-ab-testing"><strong>7. 及時進行 A/B 測試</strong></h2>

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

<h2 id="tong-ket"><strong>第 6 課總結</strong></h2>

<ul>
<li>提示引擎= <strong>模板系統</strong> + <strong>變數解析器</strong> + <strong>角色經理</strong> + <strong>版本控制</strong></li>
<li>系統提示包括：角色+指令+RAG上下文+記憶體+工具+輸出規則</li>
<li>管理角色 <strong>語氣、語言、指示、禁止話題</strong> 每個用例</li>
<li>已啟用提示版本控制 <strong>復原</strong> 當新的提示品質下降時</li>
<li>A/B 測試 <strong>一致性哈希</strong> — 同一用戶總是看到相同的變體</li>
</ul>

<p><strong>下一篇：</strong> 串流媒體與即時 — SSE/WebSocket 串流、語音代理 (STT + TTS)、多模式輸入、延遲優化。</p>
