---
id: 019c961a-aa14-7014-e014-aa1400000014
title: 'Lesson 14: Skill System — Dynamic Tool Composition'
slug: bai-14-skill-system
description: >-
  Build Skill System: defineSkill(), SkillSelector, activation per session.
  RL-based ranking, getRankedTools(), context-aware tool selection. Skills vs
  Tools distinction.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 5: Skills, Domains & Plugins'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: Building AI Agent Platform from Zero — Real battle with xClaw
  slug: xay-dung-ai-agent-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3579" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3579)"/>

  <!-- Decorations -->
  <g>
    <circle cx="890" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="970" cy="280" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: Skill System — Dynamic Tool</tspan>
      <tspan x="60" dy="42">Composition</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Building AI Agent Platform from Zero — Real battle with xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Skills, Domains & Plugins</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Tool Registry manages individual tools. But in reality, tools often come in groups — "web research" needs `web_search` + `url_reader` + `summarize`. Skill System groups tools into **skills** with context, activation rules, and ranking.

---

## 1. Skills vs Tools

| Aspect | Tools | Skills |
|--------|--------|-------|
| **Scope** | Single function | Group of related tools |
| **Context** | Stateless | Has system prompt & context |
| **Activation** | Always available | Activated per session/domain |
| **Ranking** | Equal priority | RL-based ranking |
| **Example** | `web_search` | "Web Research" skill (search + read + summarize) |

---

## 2. Skill Definition

```typescript
// packages/core/src/skills/skill-manager.ts
export interface SkillDefinition {
  id: string;
  name: string;
  description: string;
  version: string;
  tools: AdditionalTool[];           // Tools provided by this skill
  systemPromptAddition?: string;     // Injected into agent's system prompt
  activationKeywords?: string[];     // Auto-activate when user mentions these
  requiredPermissions?: string[];    // RBAC permissions needed
  config?: Record<string, unknown>;  // Skill-specific config
}

export function defineSkill(def: SkillDefinition): SkillDefinition {
  // Validate skill definition
  if (!def.id || !def.name) throw new Error('Skill must have id and name');
  if (!def.tools || def.tools.length === 0) throw new Error('Skill must have at least one tool');

  return Object.freeze(def);
}
```

### Example: Web Research Skill

```typescript
const webResearchSkill = defineSkill({
  id: 'web-research',
  name: 'Web Research',
  description: 'Search the web and analyze content',
  version: '1.0.0',
  systemPromptAddition: 'You can search the web and read URLs to find information.',
  activationKeywords: ['search', 'find', 'research', 'look up'],
  tools: [
    {
      definition: {
        name: 'web_search',
        description: 'Search the web',
        parameters: {
          type: 'object',
          properties: {
            query: { type: 'string', description: 'Search query' },
          },
          required: ['query'],
        },
      },
      handler: webSearchHandler,
    },
    {
      definition: {
        name: 'read_url',
        description: 'Read and extract content from a URL',
        parameters: {
          type: 'object',
          properties: {
            url: { type: 'string', description: 'URL to read' },
          },
          required: ['url'],
        },
      },
      handler: readUrlHandler,
    },
  ],
});
```

---

## 3. Skill Manager

```typescript
export class SkillManager {
  private skills = new Map<string, SkillDefinition>();
  private activeSkills = new Map<string, Set<string>>(); // sessionId → skill IDs
  private selector?: SkillSelector;

  register(skill: SkillDefinition) {
    this.skills.set(skill.id, skill);
  }

  activate(sessionId: string, skillId: string) {
    if (!this.activeSkills.has(sessionId)) {
      this.activeSkills.set(sessionId, new Set());
    }
    this.activeSkills.get(sessionId)!.add(skillId);
  }

  deactivate(sessionId: string, skillId: string) {
    this.activeSkills.get(sessionId)?.delete(skillId);
  }

  // Get all tools from active skills for a session
  getActiveTools(sessionId: string): AdditionalTool[] {
    const activeIds = this.activeSkills.get(sessionId);
    if (!activeIds) return [];

    const tools: AdditionalTool[] = [];
    for (const id of activeIds) {
      const skill = this.skills.get(id);
      if (skill) tools.push(...skill.tools);
    }
    return tools;
  }

  // Get system prompt additions from active skills
  getSystemPromptAdditions(sessionId: string): string {
    const activeIds = this.activeSkills.get(sessionId);
    if (!activeIds) return '';

    const additions: string[] = [];
    for (const id of activeIds) {
      const skill = this.skills.get(id);
      if (skill?.systemPromptAddition) {
        additions.push(skill.systemPromptAddition);
      }
    }
    return additions.join('\n\n');
  }
}
```

---

## 4. RL-based Skill Ranking

```typescript
export interface SkillSelector {
  rank(skills: SkillDefinition[], context: string): SkillDefinition[];
  recordFeedback(skillId: string, score: number): void;
}

// Reinforcement Learning selector
export class RLSkillSelector implements SkillSelector {
  private scores = new Map<string, { total: number; count: number }>();

  rank(skills: SkillDefinition[], userMessage: string): SkillDefinition[] {
    return skills
      .map(skill => ({
        skill,
        score: this.calculateScore(skill, userMessage),
      }))
      .sort((a, b) => b.score - a.score)
      .map(s => s.skill);
  }

  private calculateScore(skill: SkillDefinition, message: string): number {
    let score = 0;

    // Historical performance
    const history = this.scores.get(skill.id);
    if (history) {
      score += (history.total / history.count) * 0.6;
    }

    // Keyword match
    if (skill.activationKeywords) {
      const messageLower = message.toLowerCase();
      const matches = skill.activationKeywords.filter(k =>
        messageLower.includes(k.toLowerCase())
      );
      score += (matches.length / skill.activationKeywords.length) * 0.4;
    }

    return score;
  }

  recordFeedback(skillId: string, score: number) {
    const current = this.scores.get(skillId) || { total: 0, count: 0 };
    current.total += score;
    current.count += 1;
    this.scores.set(skillId, current);
  }
}
```

---

## 5. Summary

- **Skills** group related tools + context + activation rules
- **SkillManager** manages lifecycle: register, activate, deactivate per session
- **RL Ranking** learns from feedback to prioritize appropriate skills
- **Integration** — Agent receives tools + system prompt from active skills

**Next article:** Domain Packs — Pre-built skill bundles for industry verticals.
