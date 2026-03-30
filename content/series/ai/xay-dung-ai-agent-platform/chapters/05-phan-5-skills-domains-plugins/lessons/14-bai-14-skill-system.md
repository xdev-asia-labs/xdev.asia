---
id: 019c961a-aa14-7014-e014-aa1400000014
title: "Bài 14: Skill System — Dynamic Tool Composition"
slug: bai-14-skill-system
description: >-
  Xây dựng Skill System: defineSkill(), SkillSelector, activation
  per session. RL-based ranking, getRankedTools(), context-aware
  tool selection. Skills vs Tools distinction.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 5: Skills, Domains & Plugins"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Tool Registry quản lý individual tools. Nhưng thực tế, tools thường đi theo nhóm — "web research" cần `web_search` + `url_reader` + `summarize`. Skill System gom tools thành **skills** có context, activation rules, và ranking.

---

## 1. Skills vs Tools

| Aspect | Tool | Skill |
|--------|------|-------|
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

### Ví dụ: Web Research Skill

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

## 5. Tổng kết

- **Skills** nhóm related tools + context + activation rules
- **SkillManager** quản lý lifecycle: register, activate, deactivate per session
- **RL Ranking** học từ feedback để ưu tiên skills phù hợp
- **Integration** — Agent nhận tools + system prompt từ active skills

**Bài tiếp theo:** Domain Packs — Pre-built skill bundles cho industry verticals.
