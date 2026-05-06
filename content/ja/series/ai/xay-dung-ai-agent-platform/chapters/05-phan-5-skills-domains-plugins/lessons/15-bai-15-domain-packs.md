---
id: 019c961a-aa15-7015-e015-aa1500000015
title: 'レッスン 15: ドメイン パック — 業界固有の AI バンドル'
slug: bai-15-domain-packs
description: >-
  ドメイン パック アーキテクチャの設計:
  パック定義、専用ツール、ドメイン固有のプロンプト。医療、法務、財務、教育向けのパックを構築します。自動アクティベーション、パック マーケットプレイス。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 5: スキル、ドメイン、プラグイン'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: AIエージェントプラットフォームをゼロから構築 — xClawとの実戦
  slug: xay-dung-ai-agent-platform
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: ドメイン パック — 業界固有</tspan>
      <tspan x="60" dy="42">AI バンドル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AIエージェントプラットフォームをゼロから構築 — xClawとの実戦</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: スキル、ドメイン、プラグイン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ドメイン パックは、特定の業界に固有のスキル、ツール、プロンプトを含む、事前に構築されたバンドルです。ユーザーは、ジェネリック エージェントの代わりに「ヘルスケア パック」を選択すると、医療ツール、臨床プロンプト、HIPAA 準拠チェックをすぐに利用できます。

---

## 1. ドメイン パックのアーキテクチャ

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

## 2. ヘルスケア ドメイン パック

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

## 3. ドメイン パック レジストリ

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

## 4. xClaw で利用可能なドメイン パック

|パック |ツール |使用例 |
|------|------|----------|
| **ヘルスケア** | PubMed 検索、薬物相互作用、ICD-10 |医療AIアシスタント |
| **法的** |判例調査、契約分析、コンプライアンス |法的調査 |
| **財務** |市場データ、財務分析、リスクスコアリング |ファイナンシャルアドバイザー |
| **教育** |クイズジェネレーター、カリキュラムビルダー、採点 |エドテック AI |
| **DevOps** |ログ分析、インフラチェック、AlertManager | SRE アシスタント |
| **カスタマーサポート** |チケット検索、FAQ検索、感情分析 |サポートボット |
| **内容** | SEO分析、コンテンツカレンダー、ソーシャルポスト生成 |コンテンツマーケティング |
| **人事** |履歴書パーサー、求人マッチング、面接の質問 |人事オートメーション |
| **電子商取引** |製品検索、価格比較、レビュー分析 |ショッピングアシスタント |
| **データ分析** | SQL生成、チャート作成、統計テスト |データアナリスト |
| **研究** |論文検索、引用管理、文献レビュー |学術研究 |
| **クリエイティブ** |画像プロンプト、ストーリージェネレーター、ブランドネーミング |クリエイティブAI |
| **セキュリティ** | CVE ルックアップ、SIEM 分析、脅威インテリジェンス |セキュリティアナリスト |

---

## 5. まとめ

- **ドメイン パック** = 事前構築されたバンドル (スキル + プロンプト + コンプライアンス)
- **レジストリ パターン** — プラグアンドプレイのアクティベーション
- **コンプライアンス ルール** — ドメイン固有の安全性チェック
- **スケーラビリティ** — 各パックは独立したパッケージであり、個別に公開できます。

**次の記事:** プラグイン システムと MCP プロトコル。
