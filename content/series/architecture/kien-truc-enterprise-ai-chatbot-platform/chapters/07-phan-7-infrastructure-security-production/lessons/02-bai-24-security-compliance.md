---
id: 019f0b20-b702-7001-e001-f2b8f9000702
title: 'Bài 24: Security & Compliance — Bảo mật End-to-End cho AI Chatbot Platform'
slug: bai-24-security-compliance
description: >-
  End-to-end encryption, audit logging, GDPR/HIPAA compliance, penetration testing
  cho AI systems, prompt injection defense, data retention policies.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 24
section_title: "Phần 7: Infrastructure, Security & Production"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-threat-model"><strong>1. AI Chatbot Threat Model</strong></h2>

<p>AI Chatbot platform có <strong>attack surface rộng hơn</strong> ứng dụng truyền thống — vì thêm các vector tấn công qua LLM (prompt injection, data extraction, model manipulation).</p>

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

<h2 id="2-encryption"><strong>2. End-to-End Encryption</strong></h2>

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

<h2 id="3-audit-logging"><strong>3. Immutable Audit Logging</strong></h2>

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

<h2 id="4-gdpr-compliance"><strong>4. GDPR & Data Privacy Compliance</strong></h2>

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

<h2 id="5-data-retention"><strong>5. Data Retention Policies</strong></h2>

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

<h2 id="6-rbac"><strong>6. RBAC & API Security</strong></h2>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 24</strong></h2>

<ul>
<li><strong>Threat Model</strong>: AI chatbot thêm attack surface qua prompt injection, PII extraction, model poisoning</li>
<li><strong>Encryption</strong>: AES-256-GCM cho conversation data, key wrapping (DEK/KEK pattern)</li>
<li><strong>Audit Logging</strong>: Hash-chain immutable logs, AI-specific events (inference, data access)</li>
<li><strong>GDPR</strong>: Right to deletion (Art 17), data portability (Art 20), retention policies</li>
<li><strong>RBAC</strong>: 4 roles (user → platform-admin), scoped API keys with prefix identification</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Case Studies — Real-world enterprise AI chatbot implementations, architecture decisions, lessons learned, ROI analysis.</p>
