---
id: 019c961a-aa14-7014-e014-aa1400000014
title: 'レッスン 14: スキル システム — 動的なツール構成'
slug: bai-14-skill-system
description: >-
  スキル システムの構築:defineSkill()、SkillSelector、セッションごとのアクティブ化。 RL
  ベースのランキング、getRankedTools()、コンテキスト認識ツールの選択。スキルとツールの区別。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 5: スキル、ドメイン、プラグイン'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: AIエージェントプラットフォームをゼロから構築 — xClawとの実戦
  slug: xay-dung-ai-agent-platform
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: スキル システム — ダイナミック ツール</tspan>
      <tspan x="60" dy="42">構成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AIエージェントプラットフォームをゼロから構築 — xClawとの実戦</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: スキル、ドメイン、プラグイン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ツール レジストリは個々のツールを管理します。しかし実際には、ツールはグループで提供されることが多く、「Web リサーチ」のニーズに応えます。 `web_search` + `url_reader` + `summarize`。スキル システムは、コンテキスト、アクティブ化ルール、ランキングを使用してツールを **スキル** にグループ化します。

---

## 1. スキルとツール

|側面 |ツール |スキル |
|----------|----------|----------|
| **範囲** |単機能 |関連ツール群 |
| **コンテキスト** |無国籍 |システム プロンプトとコンテキストがある |
| **アクティベーション** |いつでも利用可能 |セッション/ドメインごとにアクティブ化 |
| **ランキング** |等しい優先度 | RL ベースのランキング |
| **例** | `web_search` | 「Webリサーチ」スキル（探す＋読む＋まとめる） |

---

## 2. スキルの定義

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

### 例: ウェブリサーチスキル

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

## 3. スキルマネージャー

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

## 4. RL ベースのスキルランキング

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

## 5. まとめ

- **スキル** グループ関連ツール + コンテキスト + アクティベーション ルール
- **SkillManager** はライフサイクルを管理します: セッションごとに登録、アクティブ化、非アクティブ化
- **RL ランキング** はフィードバックから学習し、適切なスキルに優先順位を付けます
- **統合** — エージェントはアクティブなスキルからツールとシステム プロンプトを受け取ります

**次の記事:** ドメイン パック — 業界向けの事前構築済みスキル バンドル。
