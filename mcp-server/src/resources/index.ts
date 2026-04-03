import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  loadAllSeries,
  loadAllLessons,
  loadBlogPosts,
  loadShowcases,
  readSeriesIndex,
  readLessonContent,
  readContentFile,
  getContentStats,
} from "../content-loader.js";

export function registerResources(server: McpServer) {
  // =====================================================
  // 1. xDev Overview
  // =====================================================
  server.resource(
    "xdev-overview",
    "xdev://overview",
    {
      description: "Tổng quan nội dung xDev.asia - 57 series, 1200+ lessons, blog posts, showcases",
      mimeType: "text/markdown",
    },
    async () => {
      const stats = getContentStats();
      const series = loadAllSeries();

      const categoryLabels: Record<string, string> = {
        ai: "🤖 AI & Machine Learning",
        architecture: "🏗️ Architecture",
        devsecops: "🔐 DevSecOps",
        "lap-trinh": "💻 Lập trình",
      };

      let text = `# xDev.asia Knowledge Base\n\n`;
      text += `- **${stats.seriesCount}** series | **${stats.lessonCount}** lessons | **${stats.blogPostCount}** blog posts | **${stats.showcaseCount}** showcases\n\n`;

      const grouped = new Map<string, typeof series>();
      for (const s of series) {
        if (!grouped.has(s.category)) grouped.set(s.category, []);
        grouped.get(s.category)!.push(s);
      }

      for (const [cat, catSeries] of grouped) {
        text += `## ${categoryLabels[cat] || cat} (${catSeries.length})\n`;
        for (const s of catSeries) {
          text += `- ${s.title} (${s.lessonCount} lessons)\n`;
        }
        text += "\n";
      }

      return {
        contents: [{ uri: "xdev://overview", mimeType: "text/markdown", text }],
      };
    }
  );

  // =====================================================
  // 2. Series Template Resource
  // =====================================================
  server.resource(
    "series",
    new ResourceTemplate("xdev://series/{slug}", {
      list: async () => {
        const allSeries = loadAllSeries();
        return {
          resources: allSeries.map((s) => ({
            uri: `xdev://series/${s.slug}`,
            name: s.title,
            description: `[${s.category}] ${s.lessonCount} lessons - ${s.level}`,
            mimeType: "text/markdown" as const,
          })),
        };
      },
    }),
    {
      description: "Overview của từng series trên xDev.asia",
      mimeType: "text/markdown",
    },
    async (uri, { slug }) => {
      const content = readSeriesIndex(slug as string);
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "text/markdown",
            text: content || `Series '${slug}' not found`,
          },
        ],
      };
    }
  );

  // =====================================================
  // 3. Lesson Template Resource
  // =====================================================
  server.resource(
    "lesson",
    new ResourceTemplate("xdev://lessons/{slug}", {
      list: async () => {
        const lessons = loadAllLessons();
        return {
          resources: lessons.slice(0, 100).map((l) => ({
            uri: `xdev://lessons/${l.slug}`,
            name: l.title,
            description: `[${l.seriesSlug}] ${l.description?.slice(0, 100) || ""}`,
            mimeType: "text/markdown" as const,
          })),
        };
      },
    }),
    {
      description: "Nội dung chi tiết từng bài học",
      mimeType: "text/markdown",
    },
    async (uri, { slug }) => {
      const content = readLessonContent(slug as string);
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "text/markdown",
            text: content || `Lesson '${slug}' not found`,
          },
        ],
      };
    }
  );

  // =====================================================
  // 3. HIPAA Quick Reference
  // =====================================================
  server.resource(
    "hipaa-reference",
    "healthcare-security://reference/hipaa",
    {
      description: "HIPAA Technical Safeguards quick reference card",
      mimeType: "text/markdown",
    },
    async () => {
      const text = `# HIPAA Technical Safeguards - Quick Reference

## Access Control (§164.312(a))
- **Unique User ID** (Required): Mỗi user có ID duy nhất
- **Emergency Access** (Required): Break-the-glass procedure
- **Automatic Logoff** (Addressable): Session timeout
- **Encryption** (Addressable): Encrypt ePHI at rest

## Audit Controls (§164.312(b))
- **Audit Logging** (Required): Record all ePHI access
- Sử dụng: pgAudit + OpenTelemetry + ELK Stack

## Integrity Controls (§164.312(c))
- **ePHI Integrity** (Addressable): HMAC checksums
- Prevent unauthorized alteration/destruction

## Authentication (§164.312(d))
- **Person/Entity Auth** (Required): MFA cho users
- TOTP, WebAuthn, proximity badges

## Transmission Security (§164.312(e))
- **Integrity Controls** (Addressable): TLS 1.3
- **Encryption** (Addressable): mTLS between services

## PHI - 18 HIPAA Identifiers (Safe Harbor)
1. Names
2. Geographic data (< state)
3. Dates (except year)
4. Phone numbers
5. Fax numbers
6. Email addresses
7. SSN / CCCD
8. Medical record numbers
9. Health plan numbers
10. Account numbers
11. Certificate/license numbers
12. Vehicle identifiers
13. Device identifiers
14. Web URLs
15. IP addresses
16. Biometric identifiers
17. Full-face photos
18. Any other unique ID

## Vietnamese Regulations
- Luật An ninh mạng 2018 (Law on Cybersecurity)
- Nghị định 13/2023/NĐ-CP (Personal Data Protection)
- Thông tư 46/2018/TT-BYT (Health IT standards)
`;
      return {
        contents: [
          {
            uri: "healthcare-security://reference/hipaa",
            mimeType: "text/markdown",
            text,
          },
        ],
      };
    }
  );

  // =====================================================
  // 4. Tech Stack Reference
  // =====================================================
  server.resource(
    "tech-stack",
    "healthcare-security://reference/tech-stack",
    {
      description: "Healthcare security tech stack: Quarkus + PostgreSQL + Keycloak + Kubernetes",
      mimeType: "text/markdown",
    },
    async () => {
      const text = `# Healthcare Security Tech Stack

## Core Stack
| Component | Technology | Purpose |
|-----------|-----------|---------|
| Backend | Quarkus (Java) | Microservices framework |
| Database | PostgreSQL | Primary data store with RLS + pgcrypto |
| IAM | Keycloak | Identity & Access Management |
| API Gateway | Kong / APISIX | Rate limiting, WAF |
| Container | Kubernetes | Orchestration |
| Service Mesh | Istio / Linkerd | mTLS, observability |
| Monitoring | OpenTelemetry + ELK | Audit trail, tracing |
| Secrets | HashiCorp Vault | Key management |
| Backup | pgBackRest | Encrypted backup, PITR |

## Key Quarkus Extensions
- \`quarkus-oidc\` - Keycloak/OIDC integration
- \`quarkus-smallrye-jwt\` - JWT token handling
- \`quarkus-hibernate-orm-panache\` - ORM with security
- \`quarkus-opentelemetry\` - Distributed tracing
- \`quarkus-smallrye-health\` - Health checks
- \`quarkus-micrometer\` - Metrics

## Key PostgreSQL Extensions
- \`pgcrypto\` - Column-level encryption
- \`pgaudit\` - Audit logging
- \`pg_stat_statements\` - Query monitoring
- \`pg_trgm\` - Fuzzy search (without decrypting PHI)

## Architecture Patterns
- API Gateway Pattern
- mTLS Service Mesh
- Event-driven (Kafka)
- CQRS for audit separation
- Zero Trust Architecture
`;
      return {
        contents: [
          {
            uri: "healthcare-security://reference/tech-stack",
            mimeType: "text/markdown",
            text,
          },
        ],
      };
    }
  );
}
