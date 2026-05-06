---
id: 019f0b20-b702-7001-e001-f2b8f9000702
title: 'レッスン 24: セキュリティとコンプライアンス — AI チャットボット プラットフォームのエンドツーエンドのセキュリティ'
slug: bai-24-security-compliance
description: エンドツーエンドの暗号化、監査ログ、GDPR/HIPAA 準拠、AI システムの侵入テスト、プロンプト インジェクション防御、データ保持ポリシー。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 24
section_title: 'パート 7: インフラストラクチャ、セキュリティ、および生産'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="724" cy="42" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="848" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="972" cy="50" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="1096" cy="54" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="58" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="202" x2="1100" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="232" x2="1050" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="984.0429399400242,133.5 984.0429399400242,170.5 952,189 919.9570600599758,170.5 919.9570600599758,133.5 952,115" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ アーキテクチャ — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: セキュリティとコンプライアンス — セキュリティ</tspan>
      <tspan x="60" dy="42">AIチャットボットプラットフォームのエンドツーエンド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: インフラストラクチャ、セキュリティ、および生産</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-threat-model"><strong>1. AIチャットボット脅威モデル</strong></h2>

<p>AIチャットボットプラットフォームには、 <strong>より広い攻撃対象領域</strong> 従来のアプリケーション — LLM を介した追加の攻撃ベクトル (プロンプト インジェクション、データ抽出、モデル操作) のため。</p>

<pre><code class="language-text">
┌─────────── AI CHATBOT THREAT MODEL ───────────────────┐
│                                                       │
│  EXTERNAL THREATS              INTERNAL THREATS        │
│  ┌──────────────┐              ┌──────────────┐       │
│  │ Prompt       │              │ Data leakage │       │
│  │ Injection    │              │ between      │       │
│  │              │              │ tenants      │       │
│  ├──────────────┤              ├──────────────┤       │
│  │ PII          │              │ Unauthorized │       │
│  │ Extraction   │              │ model access │       │
│  ├──────────────┤              ├──────────────┤       │
│  │ Jailbreak    │              │ Audit log    │       │
│  │ Attempts     │              │ tampering    │       │
│  ├──────────────┤              ├──────────────┤       │
│  │ DDoS on      │              │ Insider      │       │
│  │ inference    │              │ threat       │       │
│  ├──────────────┤              ├──────────────┤       │
│  │ Model        │              │ Supply chain │       │
│  │ poisoning    │              │ (malicious   │       │
│  │ via RAG      │              │  model)      │       │
│  └──────────────┘              └──────────────┘       │
│                                                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │              DEFENSE LAYERS                     │   │
│  │  1. Network (WAF, TLS, mTLS)                    │   │
│  │  2. Authentication (OAuth2, API keys)           │   │
│  │  3. Authorization (RBAC, ABAC, tenant isolation)│   │
│  │  4. AI Safety (Guardrails, input validation)    │   │
│  │  5. Data Protection (encryption, masking)       │   │
│  │  6. Audit (immutable logging, SIEM)             │   │
│  └─────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-encryption"><strong>2. エンドツーエンドの暗号化</strong></h2>

<pre><code class="language-typescript">
class ConversationEncryption {
  // Encrypt conversation data at rest
  async encryptConversation(
    conversation: Conversation,
    tenantKey: CryptoKey,
  ): Promise&lt;EncryptedConversation&gt; {
    // Per-conversation data encryption key (DEK)
    const dek = await crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt'],
    );

    // Encrypt conversation content with DEK
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const plaintext = new TextEncoder().encode(
      JSON.stringify(conversation.messages),
    );
    const ciphertext = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      dek,
      plaintext,
    );

    // Wrap DEK with tenant's KEK (Key Encryption Key)
    const wrappedDEK = await crypto.subtle.wrapKey(
      'raw',
      dek,
      tenantKey,
      { name: 'AES-KW' },
    );

    return {
      id: conversation.id,
      tenantId: conversation.tenantId,
      encryptedMessages: Buffer.from(ciphertext).toString('base64'),
      iv: Buffer.from(iv).toString('base64'),
      wrappedKey: Buffer.from(wrappedDEK).toString('base64'),
      metadata: {
        // Metadata is NOT encrypted — for indexing
        createdAt: conversation.createdAt,
        userId: conversation.userId,
        messageCount: conversation.messages.length,
      },
    };
  }

  async decryptConversation(
    encrypted: EncryptedConversation,
    tenantKey: CryptoKey,
  ): Promise&lt;Conversation&gt; {
    // Unwrap DEK
    const dek = await crypto.subtle.unwrapKey(
      'raw',
      Buffer.from(encrypted.wrappedKey, 'base64'),
      tenantKey,
      { name: 'AES-KW' },
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt'],
    );

    // Decrypt messages
    const plaintext = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: Buffer.from(encrypted.iv, 'base64'),
      },
      dek,
      Buffer.from(encrypted.encryptedMessages, 'base64'),
    );

    const messages = JSON.parse(
      new TextDecoder().decode(plaintext),
    );

    return {
      id: encrypted.id,
      tenantId: encrypted.tenantId,
      userId: encrypted.metadata.userId,
      messages,
      createdAt: encrypted.metadata.createdAt,
    };
  }
}
</code></pre>

<h2 id="3-audit-logging"><strong>3. 不変の監査ログ</strong></h2>

<pre><code class="language-typescript">
class AIAuditLogger {
  constructor(
    private readonly store: AuditStore,
    private readonly hasher: HashChain,
  ) {}

  async logEvent(event: AuditEvent): Promise&lt;void&gt; {
    // Hash chain — each entry links to previous (tamper-evident)
    const previousHash = await this.hasher.getLastHash(event.tenantId);

    const entry: AuditEntry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      tenantId: event.tenantId,
      userId: event.userId,
      action: event.action,
      resource: event.resource,
      details: this.sanitizeDetails(event.details),
      previousHash,
      hash: '', // Computed below
    };

    // Compute hash of this entry (includes previous hash for chaining)
    entry.hash = await this.hasher.computeHash(entry);

    await this.store.append(entry);
  }

  // AI-specific audit events
  async logInference(event: InferenceAuditEvent): Promise&lt;void&gt; {
    await this.logEvent({
      tenantId: event.tenantId,
      userId: event.userId,
      action: 'ai.inference',
      resource: `model:${event.model}`,
      details: {
        model: event.model,
        inputTokens: event.inputTokens,
        outputTokens: event.outputTokens,
        latencyMs: event.latencyMs,
        promptHash: await this.hasher.hashContent(event.prompt),
        responseHash: await this.hasher.hashContent(event.response),
        guardrailTriggered: event.guardrailTriggered,
        piiDetected: event.piiDetected,
        costUsd: event.costUsd,
      },
    });
  }

  async logDataAccess(event: DataAccessAuditEvent): Promise&lt;void&gt; {
    await this.logEvent({
      tenantId: event.tenantId,
      userId: event.userId,
      action: 'data.access',
      resource: `document:${event.documentId}`,
      details: {
        documentId: event.documentId,
        accessType: event.accessType, // 'read' | 'search' | 'rag_retrieval'
        query: event.query ? await this.hasher.hashContent(event.query) : null,
        chunksRetrieved: event.chunksRetrieved,
      },
    });
  }

  private sanitizeDetails(
    details: Record&lt;string, unknown&gt;,
  ): Record&lt;string, unknown&gt; {
    // Redact sensitive fields
    const sensitiveKeys = ['password', 'token', 'secret', 'apiKey'];
    const sanitized = { ...details };
    for (const key of Object.keys(sanitized)) {
      if (sensitiveKeys.some(sk =&gt; key.toLowerCase().includes(sk))) {
        sanitized[key] = '[REDACTED]';
      }
    }
    return sanitized;
  }
}
</code></pre>

<h2 id="4-gdpr-compliance"><strong>4. GDPR およびデータプライバシーのコンプライアンス</strong></h2>

<pre><code class="language-typescript">
class GDPRComplianceManager {
  // Right to be forgotten (Article 17)
  async handleDeletionRequest(
    userId: string,
    tenantId: string,
  ): Promise&lt;DeletionReport&gt; {
    const report: DeletionReport = {
      userId,
      requestedAt: new Date(),
      deletedItems: [],
      retainedItems: [],
    };

    // 1. Delete conversations
    const conversations = await this.conversationStore.findByUser(
      userId,
      tenantId,
    );
    for (const conv of conversations) {
      await this.conversationStore.delete(conv.id);
      report.deletedItems.push({
        type: 'conversation',
        id: conv.id,
        deletedAt: new Date(),
      });
    }

    // 2. Delete from vector store (RAG memories)
    await this.vectorStore.deleteByFilter({
      tenantId,
      userId,
    });
    report.deletedItems.push({
      type: 'vector_embeddings',
      count: conversations.length,
      deletedAt: new Date(),
    });

    // 3. Delete user profile and preferences
    await this.userStore.delete(userId);
    report.deletedItems.push({
      type: 'user_profile',
      id: userId,
      deletedAt: new Date(),
    });

    // 4. Retain audit logs (legal basis: legitimate interest)
    report.retainedItems.push({
      type: 'audit_logs',
      reason: 'Legal obligation — retained for compliance audit (Art. 17(3)(b))',
      retentionPeriod: '7 years',
    });

    // 5. Log the deletion itself
    await this.auditLogger.logEvent({
      tenantId,
      userId: 'system',
      action: 'gdpr.deletion',
      resource: `user:${userId}`,
      details: {
        deletedConversations: conversations.length,
        retainedAuditLogs: true,
      },
    });

    return report;
  }

  // Data export (Article 20 — Right to Data Portability)
  async exportUserData(
    userId: string,
    tenantId: string,
  ): Promise&lt;DataExport&gt; {
    const [conversations, profile, preferences] = await Promise.all([
      this.conversationStore.findByUser(userId, tenantId),
      this.userStore.get(userId),
      this.preferenceStore.get(userId),
    ]);

    return {
      exportedAt: new Date(),
      format: 'JSON',
      data: {
        profile,
        preferences,
        conversations: conversations.map(c =&gt; ({
          id: c.id,
          createdAt: c.createdAt,
          messages: c.messages.map(m =&gt; ({
            role: m.role,
            content: m.content,
            timestamp: m.timestamp,
          })),
        })),
      },
    };
  }
}
</code></pre>

<h2 id="5-data-retention"><strong>5. データ保持ポリシー</strong></h2>

<pre><code class="language-typescript">
class DataRetentionManager {
  private readonly policies: RetentionPolicy[] = [
    {
      dataType: 'conversations',
      retentionDays: 90,
      action: 'anonymize', // Keep structure, remove PII
    },
    {
      dataType: 'conversations',
      retentionDays: 365,
      action: 'delete',
    },
    {
      dataType: 'inference_logs',
      retentionDays: 30,
      action: 'aggregate', // Keep stats, delete raw prompts
    },
    {
      dataType: 'audit_logs',
      retentionDays: 2555, // ~7 years
      action: 'archive', // Move to cold storage
    },
    {
      dataType: 'vector_embeddings',
      retentionDays: 180,
      action: 'delete',
    },
  ];

  async enforceRetention(tenantId: string): Promise&lt;RetentionReport&gt; {
    const report: RetentionReport = { tenantId, actions: [] };

    for (const policy of this.policies) {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - policy.retentionDays);

      switch (policy.action) {
        case 'anonymize': {
          const count = await this.anonymizeOlderThan(
            policy.dataType, tenantId, cutoff,
          );
          report.actions.push({
            policy: `${policy.dataType}:anonymize`,
            affectedRecords: count,
          });
          break;
        }
        case 'delete': {
          const count = await this.deleteOlderThan(
            policy.dataType, tenantId, cutoff,
          );
          report.actions.push({
            policy: `${policy.dataType}:delete`,
            affectedRecords: count,
          });
          break;
        }
        case 'aggregate': {
          const count = await this.aggregateOlderThan(
            policy.dataType, tenantId, cutoff,
          );
          report.actions.push({
            policy: `${policy.dataType}:aggregate`,
            affectedRecords: count,
          });
          break;
        }
        case 'archive': {
          const count = await this.archiveOlderThan(
            policy.dataType, tenantId, cutoff,
          );
          report.actions.push({
            policy: `${policy.dataType}:archive`,
            affectedRecords: count,
          });
          break;
        }
      }
    }

    return report;
  }
}
</code></pre>

<h2 id="6-rbac"><strong>6. RBAC と API セキュリティ</strong></h2>

<pre><code class="language-typescript">
// Role-Based Access Control for AI Platform
const AI_PLATFORM_ROLES = {
  'chatbot-user': {
    permissions: [
      'conversation:create',
      'conversation:read:own',
      'knowledge:search',
    ],
  },
  'chatbot-admin': {
    permissions: [
      'conversation:read:all',
      'knowledge:manage',
      'prompt:manage',
      'guardrail:manage',
      'analytics:read',
      'workflow:manage',
    ],
  },
  'tenant-owner': {
    permissions: [
      'tenant:manage',
      'billing:manage',
      'user:manage',
      'api-key:manage',
      'audit:read',
      'model:configure',
    ],
  },
  'platform-admin': {
    permissions: [
      'tenant:create',
      'model:deploy',
      'gpu:manage',
      'system:configure',
      'audit:read:all',
    ],
  },
} as const;

// API Key with scoped permissions
class APIKeyManager {
  async createAPIKey(
    tenantId: string,
    name: string,
    permissions: string[],
    expiresAt?: Date,
  ): Promise&lt;APIKey&gt; {
    const rawKey = crypto.randomBytes(32).toString('base64url');
    const prefix = `xai_${tenantId.substring(0, 8)}`;
    const fullKey = `${prefix}_${rawKey}`;

    // Store only the hash
    const keyHash = await this.hashKey(fullKey);

    const apiKey: APIKey = {
      id: crypto.randomUUID(),
      tenantId,
      name,
      keyHash,
      keyPrefix: fullKey.substring(0, 12), // For identification
      permissions,
      expiresAt: expiresAt ?? new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      lastUsedAt: null,
    };

    await this.store.save(apiKey);

    // Return full key ONLY on creation (never stored/logged)
    return { ...apiKey, rawKey: fullKey };
  }
}
</code></pre>

<h2 id="tong-ket"><strong>レッスン 24 のまとめ</strong></h2>

<ul>
<li><strong>脅威モデル</strong>: AI チャットボットは、プロンプト インジェクション、PII 抽出、モデル ポイズニングを通じて攻撃対象領域を追加します</li>
<li><strong>暗号化</strong>: 会話データ用 AES-256-GCM、キーラッピング (DEK/KEK パターン)</li>
<li><strong>監査ログ</strong>: ハッシュチェーンの不変ログ、AI 固有のイベント (推論、データアクセス)</li>
<li><strong>GDPR</strong>: 削除の権利 (第 17 条)、データのポータビリティ (第 20 条)、保持ポリシー</li>
<li><strong>RBAC</strong>: 4 つのロール (ユーザー → プラットフォーム管理者)、プレフィックス識別付きのスコープ指定された API キー</li>
</ul>

<p><strong>次の記事:</strong> ケーススタディ — 現実世界のエンタープライズ AI チャットボットの実装、アーキテクチャの決定、学んだ教訓、ROI 分析。</p>
