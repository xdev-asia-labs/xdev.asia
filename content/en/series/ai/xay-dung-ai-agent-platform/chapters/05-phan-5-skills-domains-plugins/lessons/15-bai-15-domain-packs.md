---
id: 019c961a-aa15-7015-e015-aa1500000015
title: 'Lesson 15: Domain Packs — Industry-specific AI Bundles'
slug: bai-15-domain-packs
description: >-
  Design Domain Pack architecture: pack definition, specialized tools,
  domain-specific prompts. Build packs for Healthcare, Legal, Finance,
  Education. Auto-activation, pack marketplace.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 5: Skills, Domains & Plugins'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: Building AI Agent Platform from Zero — Real battle with xClaw
  slug: xay-dung-ai-agent-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3560" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3560)"/>

  <!-- Decorations -->
  <g>
    <circle cx="853" cy="169" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="606" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="859" cy="175" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="612" cy="48" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="181" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1048.444863728671,202 1048.444863728671,236 1019,253 989.555136271329,236 989.555136271329,202 1019,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Domain Packs — Industry-specific</tspan>
      <tspan x="60" dy="42">AI Bundles</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Building AI Agent Platform from Zero — Real battle with xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Skills, Domains & Plugins</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Domain Packs are pre-built bundles including skills + tools + prompts specific to a specific industry. Instead of the generic agent, the user selects "Healthcare Pack" and immediately gets medical tools, clinical prompts, and HIPAA compliance checks.

---

## 1. Domain Pack Architecture

```typescript
// packages/domains/src/types.ts
export interface DomainPack {
  id: string;
  name: string;
  slug: string;
  description: string;
  version: string;
  icon: string;
  color: string;
  skills: SkillDefinition[];
  systemPrompt: string;              // Domain-specific base prompt
  suggestedQuestions: string[];       // Quick-start examples
  complianceRules?: ComplianceRule[];
  requiredPermissions?: string[];
}

export interface ComplianceRule {
  id: string;
  name: string;
  description: string;
  check: (message: string) => boolean;
  action: 'warn' | 'block' | 'redact';
}
```

---

## 2. Healthcare Domain Pack

```typescript
// packages/domains/src/packs/healthcare.ts
export const healthcarePack: DomainPack = {
  id: 'healthcare',
  name: 'Healthcare & Medical',
  slug: 'healthcare',
  description: 'Medical AI assistant with clinical tools and HIPAA compliance',
  version: '1.0.0',
  icon: '🏥',
  color: '#10b981',

  systemPrompt: `You are a medical AI assistant. Guidelines:
- Always cite medical sources (PubMed, clinical guidelines)
- Include appropriate disclaimers for medical advice
- Follow HIPAA compliance for patient data
- Use ICD-10 codes when relevant
- Recommend professional consultation for diagnoses`,

  suggestedQuestions: [
    'Explain the mechanism of action of metformin',
    'What are the differential diagnoses for chest pain?',
    'Summarize the latest guidelines for hypertension management',
  ],

  skills: [
    defineSkill({
      id: 'medical-search',
      name: 'Medical Literature Search',
      description: 'Search PubMed and medical databases',
      version: '1.0.0',
      tools: [
        {
          definition: {
            name: 'pubmed_search',
            description: 'Search PubMed for medical literature',
            parameters: {
              type: 'object',
              properties: {
                query: { type: 'string', description: 'Medical search query' },
                maxResults: { type: 'number', description: 'Max results (1-20)' },
              },
              required: ['query'],
            },
          },
          handler: pubmedSearchHandler,
        },
        {
          definition: {
            name: 'drug_interaction_check',
            description: 'Check for drug-drug interactions',
            parameters: {
              type: 'object',
              properties: {
                drugs: { type: 'string', description: 'Comma-separated drug names' },
              },
              required: ['drugs'],
            },
          },
          handler: drugInteractionHandler,
        },
        {
          definition: {
            name: 'icd10_lookup',
            description: 'Look up ICD-10 diagnosis codes',
            parameters: {
              type: 'object',
              properties: {
                query: { type: 'string', description: 'Condition or symptom' },
              },
              required: ['query'],
            },
          },
          handler: icd10LookupHandler,
        },
      ],
    }),
  ],

  complianceRules: [
    {
      id: 'hipaa-phi',
      name: 'HIPAA PHI Detection',
      description: 'Detect and redact Protected Health Information',
      check: (message) => {
        // Detect SSN, patient IDs, etc.
        return /\b\d{3}-\d{2}-\d{4}\b/.test(message) ||
               /patient\s+id:\s*\w+/i.test(message);
      },
      action: 'redact',
    },
  ],
};
```

---

## 3. Domain Pack Registry

```typescript
// packages/domains/src/domain-registry.ts
export class DomainRegistry {
  private packs = new Map<string, DomainPack>();

  register(pack: DomainPack) {
    this.packs.set(pack.id, pack);
  }

  get(id: string): DomainPack | undefined {
    return this.packs.get(id);
  }

  listAll(): DomainPack[] {
    return Array.from(this.packs.values());
  }

  // Activate domain for a session
  activateForSession(
    domainId: string,
    sessionId: string,
    skillManager: SkillManager,
  ): void {
    const pack = this.packs.get(domainId);
    if (!pack) throw new Error(`Domain pack not found: ${domainId}`);

    // Register all skills from the pack
    for (const skill of pack.skills) {
      skillManager.register(skill);
      skillManager.activate(sessionId, skill.id);
    }
  }
}
```

---

## 4. Available Domain Packs in xClaw

| Pack | Tools | Use Case |
|-------|-------|----------|
| **Healthcare** | PubMed search, Drug interactions, ICD-10 | Medical AI assistant |
| **Legal** | Case law search, Contract analysis, Compliance | Legal research |
| **Finance** | Market data, Financial analysis, Risk scoring | Financial advisor |
| **Education** | Quiz generator, Curriculum builder, Grading | EdTech AI |
| **DevOps** | Log analysis, Infrastructure check, AlertManager | SRE assistant |
| **Customer Support** | Ticket search, FAQ retrieval, Sentiment analysis | Support bot |
| **Content** | SEO analysis, Content calendar, Social post gen | Content marketing |
| **HR** | Resume parser, Job matching, Interview questions | HR automation |
| **E-commerce** | Product search, Price comparison, Review analysis | Shopping assistant |
| **Data Analysis** | SQL generation, Chart creation, Statistical tests | Data analyst |
| **Research** | Paper search, Citation manager, Literature review | Academic research |
| **Creative** | Image prompts, Story generator, Brand naming | Creative AI |
| **Security** | CVE lookup, SIEM analysis, Threat intelligence | Security analyst |

---

## 5. Summary

- **Domain Packs** = pre-built bundles (skills + prompts + compliance)
- **Registry pattern** — plug-and-play activation
- **Compliance rules** — domain-specific safety checks
- **Scalability** — each pack is an independent package, can be published separately

**Next article:** Plugin System & MCP Protocol.
