import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerPrompts(server: McpServer) {
  // =====================================================
  // 1. Security Code Review
  // =====================================================
  server.prompt(
    "security_review",
    "Review code cho healthcare security issues - kiểm tra PHI handling, authentication, authorization, encryption",
    {
      code: z.string().describe("Code cần review"),
      language: z
        .string()
        .default("java")
        .describe("Ngôn ngữ (java, sql, yaml, properties)"),
    },
    async ({ code, language }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Bạn là Healthcare Security Expert. Review code ${language} sau theo các tiêu chuẩn HIPAA và best practices bảo mật y tế.

## Code cần review:
\`\`\`${language}
${code}
\`\`\`

## Checklist kiểm tra:
1. **PHI Handling**: Có PHI fields nào không được encrypt? Có log PHI không?
2. **Authentication**: Có kiểm tra JWT/OIDC token đúng cách không?
3. **Authorization**: Có RLS/RBAC/ABAC đúng cách không? Có thiếu permission check?
4. **Encryption**: PHI có encrypt at-rest (AES-256) và in-transit (TLS 1.3)?
5. **SQL Injection**: Có dùng parameterized queries không?
6. **Input Validation**: Có validate input trước khi xử lý?
7. **Error Handling**: Có leak sensitive info trong error messages?
8. **Audit Logging**: Có log PHI access đầy đủ (who, what, when)?
9. **Secrets Management**: Có hardcode secrets/credentials không?
10. **HIPAA Compliance**: Có vi phạm §164.312 safeguards nào không?

## Format output:
- 🔴 CRITICAL: Vấn đề phải fix ngay (security vulnerability)
- 🟠 HIGH: Vấn đề nghiêm trọng (HIPAA non-compliance)
- 🟡 MEDIUM: Nên cải thiện
- 🟢 GOOD: Practices đang đúng

Cho mỗi issue, cung cấp:
- Mô tả vấn đề
- HIPAA reference (nếu applicable)
- Code fix gợi ý
`,
          },
        },
      ],
    })
  );

  // =====================================================
  // 2. HIPAA Assessment
  // =====================================================
  server.prompt(
    "hipaa_assessment",
    "Đánh giá HIPAA compliance cho hệ thống hoặc architecture",
    {
      system_description: z
        .string()
        .describe("Mô tả hệ thống cần đánh giá"),
    },
    async ({ system_description }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Bạn là HIPAA Compliance Auditor với chuyên môn về Healthcare IT Security. Đánh giá hệ thống sau:

## Hệ thống:
${system_description}

## Đánh giá theo 5 nhóm HIPAA Safeguards:

### 1. Administrative Safeguards (§164.308)
- Security Management Process (risk analysis, risk management)
- Workforce Security (authorization, supervision)
- Information Access Management (access establishment, modification)
- Security Awareness Training
- Security Incident Procedures
- Contingency Plan (backup, DR, emergency mode)

### 2. Physical Safeguards (§164.310)
- Facility Access Controls
- Workstation Use & Security
- Device and Media Controls

### 3. Technical Safeguards (§164.312)
- Access Control (unique user ID, emergency access, auto logoff, encryption)
- Audit Controls
- Integrity Controls
- Person/Entity Authentication
- Transmission Security

### 4. Organizational Requirements (§164.314)
- Business Associate Agreements
- Policies and procedures documentation

### 5. Policies, Procedures, and Documentation (§164.316)
- Documentation requirements
- Updates and review schedule

## Output format:
- Compliance score: X/100
- Risk level: Critical/High/Medium/Low
- Bảng tóm tắt: Trạng thái từng safeguard
- Gap analysis: Danh sách gaps cụ thể
- Remediation plan: Ưu tiên theo risk level
- Timeline gợi ý cho remediation
`,
          },
        },
      ],
    })
  );

  // =====================================================
  // 3. Threat Analysis
  // =====================================================
  server.prompt(
    "threat_analysis",
    "Phân tích threats cho healthcare microservices system",
    {
      architecture: z
        .string()
        .describe("Mô tả kiến trúc hệ thống (components, data flows, access points)"),
    },
    async ({ architecture }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Bạn là Security Architect chuyên healthcare systems. Thực hiện threat analysis đầy đủ.

## Architecture:
${architecture}

## Yêu cầu phân tích:

### 1. Attack Surface Analysis
- Liệt kê tất cả entry points (APIs, UIs, integrations)
- Identify trust boundaries
- Data flow diagram (text-based)

### 2. STRIDE Analysis cho mỗi component
- S (Spoofing): Ai/gì có thể bị giả mạo?
- T (Tampering): Data nào có thể bị sửa?
- R (Repudiation): Actions nào có thể bị phủ nhận?
- I (Information Disclosure): PHI nào có thể bị lộ?
- D (Denial of Service): Components nào critical?
- E (Elevation of Privilege): Roles nào có thể bị leo thang?

### 3. Healthcare-Specific Threats
- Insider threats (curious employees)
- Ransomware targeting healthcare
- Supply chain attacks
- Medical device exploitation
- Cross-tenant data leaks (multi-hospital)

### 4. DREAD Scoring cho top threats
- Rate 1-10 cho: Damage, Reproducibility, Exploitability, Affected Users, Discoverability

### 5. Mitigation Strategy
- Ưu tiên theo risk score
- Map mitigations vào tech stack: Quarkus, PostgreSQL, Keycloak, Kubernetes
- Estimate effort (Low/Medium/High)

### 6. Monitoring & Detection
- Security metrics cần track
- Alert rules
- Incident response triggers
`,
          },
        },
      ],
    })
  );

  // =====================================================
  // 4. Database Security Design
  // =====================================================
  server.prompt(
    "database_security_design",
    "Thiết kế database security cho healthcare data - RLS, encryption, audit",
    {
      schema: z
        .string()
        .describe("Database schema hoặc danh sách tables/columns"),
    },
    async ({ schema }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Bạn là PostgreSQL Security Expert cho Healthcare. Thiết kế bảo mật database.

## Schema:
${schema}

## Yêu cầu thiết kế:

### 1. Data Classification
- Phân loại mỗi column: PUBLIC / INTERNAL / CONFIDENTIAL / RESTRICTED
- Xác định columns là HIPAA identifiers
- Đề xuất encryption strategy (column-level vs application-level)

### 2. Row-Level Security (RLS)
- Thiết kế RLS policies cho từng table
- Roles: ADMIN, CHIEF_DOCTOR, DOCTOR, HEAD_NURSE, NURSE, TECHNICIAN, PATIENT
- Department-based access control
- Doctor-patient assignment policies
- Emergency access (break-the-glass)

### 3. Column-Level Encryption
- Columns cần encrypt (pgcrypto)
- Searchable encryption strategy (hashing)
- Key management approach

### 4. Audit Logging
- pgAudit configuration
- Custom audit triggers cho PHI tables
- Audit log schema design

### 5. SQL Scripts
- Provide complete SQL cho:
  - RLS policies
  - Encryption functions
  - Audit triggers
  - Role setup

### 6. Quarkus Integration
- How to set RLS context từ JWT claims
- Encryption/decryption trong Quarkus entities
- Audit interceptor implementation
`,
          },
        },
      ],
    })
  );
}
