---
id: 019c961a-aa15-7015-e015-aa1500000015
title: "Bài 15: Domain Packs — Industry-specific AI Bundles"
slug: bai-15-domain-packs
description: >-
  Thiết kế Domain Pack architecture: pack definition, specialized
  tools, domain-specific prompts. Build packs cho Healthcare,
  Legal, Finance, Education. Auto-activation, pack marketplace.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 5: Skills, Domains & Plugins"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Domain Packs là pre-built bundles gồm skills + tools + prompts đặc thù cho ngành cụ thể. Thay vì agent generic, user chọn "Healthcare Pack" và ngay lập tức có medical tools, clinical prompts, HIPAA compliance checks.

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

## 4. Available Domain Packs trong xClaw

| Pack | Tools | Use Case |
|------|-------|----------|
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

## 5. Tổng kết

- **Domain Packs** = pre-built bundles (skills + prompts + compliance)
- **Registry pattern** — plug-and-play activation
- **Compliance rules** — domain-specific safety checks
- **Scalability** — mỗi pack là independent package, có thể publish riêng

**Bài tiếp theo:** Plugin System & MCP Protocol.
