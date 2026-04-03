/**
 * HIPAA Technical Safeguards - Complete checklist data
 * Based on 45 CFR Part 164
 */

export interface HIPAASafeguard {
  id: string;
  category: string;
  subcategory: string;
  requirement: string;
  standard: string;
  implementation: string;
  required: boolean; // Required vs Addressable
  quarkusImpl?: string;
  postgresImpl?: string;
  keycloakImpl?: string;
}

export const HIPAA_SAFEGUARDS: HIPAASafeguard[] = [
  // === ACCESS CONTROL (§164.312(a)(1)) ===
  {
    id: "AC-1",
    category: "Access Control",
    subcategory: "Unique User Identification",
    requirement: "Assign a unique name and/or number for identifying and tracking user identity",
    standard: "§164.312(a)(2)(i)",
    implementation: "Keycloak user ID + PostgreSQL session variable",
    required: true,
    keycloakImpl: "Mỗi user có UUID duy nhất trong Keycloak realm. Map vào JWT claim 'sub'.",
    quarkusImpl: "Sử dụng @Inject SecurityIdentity để lấy user ID từ JWT token.",
    postgresImpl: "SET app.current_user_id = '<uuid>' cho mỗi session, dùng trong RLS policies.",
  },
  {
    id: "AC-2",
    category: "Access Control",
    subcategory: "Emergency Access Procedure",
    requirement: "Establish procedures for obtaining ePHI during an emergency",
    standard: "§164.312(a)(2)(ii)",
    implementation: "Break-the-glass procedure with full audit trail",
    required: true,
    keycloakImpl: "Emergency role với time-limited access, yêu cầu MFA + reason code.",
    quarkusImpl: "EmergencyAccessFilter ghi audit log, tự động revoke sau thời gian quy định.",
    postgresImpl: "RLS policy đặc biệt cho emergency_access role, trigger ghi audit_log.",
  },
  {
    id: "AC-3",
    category: "Access Control",
    subcategory: "Automatic Logoff",
    requirement: "Electronic procedures to terminate session after inactivity",
    standard: "§164.312(a)(2)(iii)",
    implementation: "Session timeout configuration",
    required: false,
    keycloakImpl: "SSO Session Idle: 15 phút, SSO Session Max: 8 giờ cho clinical workstations.",
    quarkusImpl: "quarkus.oidc.token.lifespan-grace=30, tự động redirect khi token expired.",
  },
  {
    id: "AC-4",
    category: "Access Control",
    subcategory: "Encryption and Decryption",
    requirement: "Implement mechanism to encrypt and decrypt ePHI",
    standard: "§164.312(a)(2)(iv)",
    implementation: "AES-256-GCM for data at rest, TLS 1.3 in transit",
    required: false,
    postgresImpl: "pgcrypto extension: pgp_sym_encrypt(data, key, 'compress-algo=1, cipher-algo=aes256')",
    quarkusImpl: "SmallRye Config cho KMS key, custom @Encrypted annotation cho PHI fields.",
  },
  // === AUDIT CONTROLS (§164.312(b)) ===
  {
    id: "AU-1",
    category: "Audit Controls",
    subcategory: "Audit Logging",
    requirement: "Implement hardware, software, and/or procedural mechanisms to record and examine access to ePHI",
    standard: "§164.312(b)",
    implementation: "pgAudit + OpenTelemetry + ELK Stack",
    required: true,
    postgresImpl: "pgaudit.log = 'read, write, ddl' trên schema chứa PHI. Log ra syslog.",
    quarkusImpl: "OpenTelemetry instrumentation, custom AuditInterceptor cho mọi PHI access.",
    keycloakImpl: "Event Listener SPI để ghi tất cả login/logout/admin events.",
  },
  // === INTEGRITY (§164.312(c)(1)) ===
  {
    id: "IN-1",
    category: "Integrity",
    subcategory: "Mechanism to Authenticate ePHI",
    requirement: "Implement electronic mechanisms to corroborate that ePHI has not been altered or destroyed",
    standard: "§164.312(c)(2)",
    implementation: "HMAC checksums + immutable audit trail",
    required: false,
    postgresImpl: "Computed column hmac_hash = hmac(row_data, secret, 'sha256'). Trigger kiểm tra integrity.",
    quarkusImpl: "IntegrityService tính HMAC cho mỗi PHI record, verify trước khi trả về client.",
  },
  // === PERSON/ENTITY AUTHENTICATION (§164.312(d)) ===
  {
    id: "PE-1",
    category: "Person/Entity Authentication",
    subcategory: "Authentication",
    requirement: "Implement procedures to verify that a person or entity seeking access to ePHI is the one claimed",
    standard: "§164.312(d)",
    implementation: "MFA with Keycloak + device trust",
    required: true,
    keycloakImpl: "Required actions: CONFIGURE_TOTP hoặc WEBAUTHN_REGISTER. Conditional MFA flow.",
    quarkusImpl: "Verify 'acr' claim trong JWT >= 'urn:mfa' cho sensitive endpoints.",
  },
  // === TRANSMISSION SECURITY (§164.312(e)(1)) ===
  {
    id: "TS-1",
    category: "Transmission Security",
    subcategory: "Integrity Controls",
    requirement: "Implement security measures to ensure electronically transmitted ePHI is not improperly modified",
    standard: "§164.312(e)(2)(i)",
    implementation: "TLS 1.3 + message signing",
    required: false,
    quarkusImpl: "quarkus.http.ssl.protocols=TLSv1.3, HSTS header enabled.",
    postgresImpl: "ssl = on, ssl_min_protocol_version = TLSv1.3 trong postgresql.conf",
  },
  {
    id: "TS-2",
    category: "Transmission Security",
    subcategory: "Encryption",
    requirement: "Implement mechanism to encrypt ePHI whenever deemed appropriate",
    standard: "§164.312(e)(2)(ii)",
    implementation: "TLS everywhere + mTLS between services",
    required: false,
    quarkusImpl: "mTLS giữa services với quarkus.http.ssl.client-auth=required",
    postgresImpl: "hostssl all all 0.0.0.0/0 scram-sha-256 clientcert=verify-full",
  },
  // === ADDITIONAL ADMINISTRATIVE SAFEGUARDS ===
  {
    id: "AD-1",
    category: "Administrative",
    subcategory: "Security Management Process",
    requirement: "Risk analysis and risk management",
    standard: "§164.308(a)(1)",
    implementation: "STRIDE/DREAD threat modeling + risk register",
    required: true,
  },
  {
    id: "AD-2",
    category: "Administrative",
    subcategory: "Workforce Security",
    requirement: "Authorization and/or supervision of workforce members",
    standard: "§164.308(a)(3)",
    implementation: "RBAC with department-based access control",
    required: true,
    keycloakImpl: "Role hierarchy: Admin > Bác sĩ trưởng khoa > Bác sĩ > Y tá trưởng > Y tá > Kỹ thuật viên.",
  },
  {
    id: "AD-3",
    category: "Administrative",
    subcategory: "Information Access Management",
    requirement: "Role-based access to ePHI",
    standard: "§164.308(a)(4)",
    implementation: "RBAC + ABAC with Keycloak Authorization Services",
    required: true,
    keycloakImpl: "Authorization Services với resource, scope, policy (role-based + attribute-based).",
    quarkusImpl: "@RolesAllowed + custom SecurityIdentityAugmentor cho ABAC.",
    postgresImpl: "Row-Level Security policies dựa trên app.current_role và app.current_department.",
  },
  {
    id: "AD-4",
    category: "Administrative",
    subcategory: "Security Incident Procedures",
    requirement: "Identify, respond to, and mitigate security incidents",
    standard: "§164.308(a)(6)",
    implementation: "SIEM alerts + incident response playbook",
    required: true,
  },
  {
    id: "AD-5",
    category: "Administrative",
    subcategory: "Contingency Plan",
    requirement: "Data backup, disaster recovery, emergency mode operation",
    standard: "§164.308(a)(7)",
    implementation: "Encrypted backups + PITR + cross-region replication",
    required: true,
    postgresImpl: "pgBackRest với encryption, PITR, cross-region S3 backup. RPO < 1 phút.",
  },
  // === PHYSICAL SAFEGUARDS (relevant for infrastructure) ===
  {
    id: "PH-1",
    category: "Physical",
    subcategory: "Workstation Use & Security",
    requirement: "Physical safeguards for workstations accessing ePHI",
    standard: "§164.310(b)-(c)",
    implementation: "Device trust + session management cho shared workstations",
    required: true,
    keycloakImpl: "Device policy: chỉ cho phép registered devices. Auto-logoff trên shared workstations.",
  },
];

/**
 * Check compliance for a given system description
 */
export function checkHIPAACompliance(
  systemDescription: string,
  implementedControls: string[]
): {
  score: number;
  total: number;
  gaps: HIPAASafeguard[];
  implemented: HIPAASafeguard[];
  recommendations: string[];
} {
  const controlsLower = implementedControls.map((c) => c.toLowerCase());
  const descLower = systemDescription.toLowerCase();

  const implemented: HIPAASafeguard[] = [];
  const gaps: HIPAASafeguard[] = [];

  for (const safeguard of HIPAA_SAFEGUARDS) {
    const keywords = [
      safeguard.subcategory.toLowerCase(),
      safeguard.category.toLowerCase(),
      ...safeguard.implementation.toLowerCase().split(/[,&+]/),
    ];

    const isImplemented = keywords.some(
      (kw) =>
        controlsLower.some((c) => c.includes(kw.trim())) ||
        descLower.includes(kw.trim())
    );

    if (isImplemented) {
      implemented.push(safeguard);
    } else {
      gaps.push(safeguard);
    }
  }

  const requiredGaps = gaps.filter((g) => g.required);
  const recommendations: string[] = [];

  if (requiredGaps.length > 0) {
    recommendations.push(
      `⚠️ ${requiredGaps.length} REQUIRED safeguards chưa được triển khai!`
    );
    for (const gap of requiredGaps) {
      recommendations.push(
        `  - [${gap.id}] ${gap.subcategory}: ${gap.implementation}`
      );
    }
  }

  const addressableGaps = gaps.filter((g) => !g.required);
  if (addressableGaps.length > 0) {
    recommendations.push(
      `\n📋 ${addressableGaps.length} Addressable safeguards nên xem xét:`
    );
    for (const gap of addressableGaps) {
      recommendations.push(
        `  - [${gap.id}] ${gap.subcategory}: ${gap.implementation}`
      );
    }
  }

  return {
    score: implemented.length,
    total: HIPAA_SAFEGUARDS.length,
    gaps,
    implemented,
    recommendations,
  };
}
