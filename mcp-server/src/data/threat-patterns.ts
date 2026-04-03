/**
 * STRIDE/DREAD Threat Modeling data for Healthcare systems
 */

export interface ThreatCategory {
  id: string;
  name: string;
  description: string;
  healthcareExamples: string[];
  mitigations: string[];
}

export const STRIDE_CATEGORIES: ThreatCategory[] = [
  {
    id: "S",
    name: "Spoofing",
    description: "Giả mạo danh tính - attacker giả dạng user/system hợp lệ",
    healthcareExamples: [
      "Giả mạo bác sĩ để truy cập hồ sơ bệnh nhân",
      "Spoofing service identity giữa các microservices",
      "Session hijacking trên shared workstation bệnh viện",
      "Fake FHIR client request với stolen OAuth token",
    ],
    mitigations: [
      "MFA cho tất cả nhân viên y tế (TOTP/WebAuthn)",
      "mTLS giữa các microservices",
      "Short-lived JWT tokens (15 phút) với refresh token rotation",
      "Device fingerprinting cho clinical workstations",
      "Keycloak: cấu hình brute force detection",
    ],
  },
  {
    id: "T",
    name: "Tampering",
    description: "Sửa đổi dữ liệu trái phép",
    healthcareExamples: [
      "Sửa đổi kết quả xét nghiệm (lab results)",
      "Thay đổi đơn thuốc (prescription tampering)",
      "Modify audit logs để che dấu truy cập trái phép",
      "SQL injection để sửa dữ liệu bệnh nhân",
    ],
    mitigations: [
      "HMAC integrity check cho mọi PHI record",
      "Immutable audit log (append-only, separate storage)",
      "Input validation + parameterized queries",
      "Database triggers cho change tracking",
      "pgAudit cho comprehensive database audit",
    ],
  },
  {
    id: "R",
    name: "Repudiation",
    description: "Phủ nhận hành động đã thực hiện",
    healthcareExamples: [
      "Bác sĩ phủ nhận đã truy cập hồ sơ bệnh nhân",
      "Phủ nhận đã thay đổi liều thuốc",
      "Admin phủ nhận đã grant quyền truy cập",
      "Phủ nhận đã export dữ liệu bệnh nhân",
    ],
    mitigations: [
      "Comprehensive audit logging (who, what, when, where, why)",
      "Digital signatures cho critical actions (e-prescriptions)",
      "Tamper-proof audit trail (write-once storage)",
      "Correlation IDs cho distributed tracing",
      "OpenTelemetry instrumentation cho mọi PHI operation",
    ],
  },
  {
    id: "I",
    name: "Information Disclosure",
    description: "Lộ thông tin nhạy cảm",
    healthcareExamples: [
      "Lộ PHI/ePHI qua API response không filter",
      "Database dump chứa dữ liệu bệnh nhân không mã hóa",
      "Log files chứa PHI (tên, CCCD, chẩn đoán)",
      "Side-channel attacks qua error messages",
      "Insider threat - nhân viên truy cập hồ sơ người nổi tiếng",
    ],
    mitigations: [
      "Column-level encryption cho PHI fields (pgcrypto)",
      "Row-Level Security policies",
      "Data masking trong non-production environments",
      "Structured logging KHÔNG bao giờ log PHI",
      "TLS 1.3 cho mọi communication",
      "API response filtering dựa trên role",
    ],
  },
  {
    id: "D",
    name: "Denial of Service",
    description: "Từ chối dịch vụ - làm hệ thống không khả dụng",
    healthcareExamples: [
      "DDoS attack vào hệ thống EMR trong giờ cao điểm",
      "Resource exhaustion qua large FHIR bundle requests",
      "Database connection pool exhaustion",
      "Ransomware mã hóa database y tế",
    ],
    mitigations: [
      "Rate limiting per client/endpoint (API Gateway)",
      "Connection pooling với limits (PgBouncer)",
      "Request size limits cho FHIR resources",
      "Immutable backup storage (ransomware protection)",
      "Circuit breaker pattern giữa services",
      "Kubernetes resource limits + HPA",
    ],
  },
  {
    id: "E",
    name: "Elevation of Privilege",
    description: "Leo thang đặc quyền",
    healthcareExamples: [
      "Y tá access quyền của bác sĩ trưởng khoa",
      "Patient Portal user truy cập admin API",
      "SQL injection để bypass RLS policies",
      "JWT manipulation để thêm admin role",
      "Exploit Keycloak vulnerability để tạo admin account",
    ],
    mitigations: [
      "Principle of Least Privilege (PoLP)",
      "Keycloak RBAC + ABAC with fine-grained permissions",
      "PostgreSQL RLS enforced tại database level",
      "JWT signature verification (RS256/ES256)",
      "Regular security patching",
      "Kubernetes Pod Security Standards",
    ],
  },
];

export interface DREADScore {
  damage: number; // 1-10
  reproducibility: number;
  exploitability: number;
  affectedUsers: number;
  discoverability: number;
  total: number;
  severity: "Critical" | "High" | "Medium" | "Low";
}

export function calculateDREAD(scores: {
  damage: number;
  reproducibility: number;
  exploitability: number;
  affectedUsers: number;
  discoverability: number;
}): DREADScore {
  const total =
    (scores.damage +
      scores.reproducibility +
      scores.exploitability +
      scores.affectedUsers +
      scores.discoverability) /
    5;

  let severity: DREADScore["severity"];
  if (total >= 8) severity = "Critical";
  else if (total >= 6) severity = "High";
  else if (total >= 4) severity = "Medium";
  else severity = "Low";

  return { ...scores, total: Math.round(total * 10) / 10, severity };
}

/**
 * Common healthcare-specific threat patterns
 */
export const HEALTHCARE_THREAT_PATTERNS = [
  {
    name: "Insider Threat - Curious Employee",
    description: "Nhân viên truy cập hồ sơ bệnh nhân không thuộc phạm vi công việc",
    strideCategory: "I",
    dreadDefaults: { damage: 7, reproducibility: 9, exploitability: 8, affectedUsers: 3, discoverability: 6 },
    controls: ["Audit logging + anomaly detection", "Break-the-glass với justification", "Department-based RLS"],
  },
  {
    name: "Ransomware Attack",
    description: "Malware mã hóa database và yêu cầu tiền chuộc",
    strideCategory: "D",
    dreadDefaults: { damage: 10, reproducibility: 7, exploitability: 6, affectedUsers: 10, discoverability: 5 },
    controls: ["Immutable backups (S3 Object Lock)", "Network segmentation", "Endpoint Detection & Response"],
  },
  {
    name: "API Data Exfiltration",
    description: "Exploit API để bulk download dữ liệu bệnh nhân",
    strideCategory: "I",
    dreadDefaults: { damage: 9, reproducibility: 6, exploitability: 5, affectedUsers: 9, discoverability: 4 },
    controls: ["Rate limiting", "Response size limits", "Data Loss Prevention (DLP)", "Anomaly detection"],
  },
  {
    name: "Prescription Fraud",
    description: "Giả mạo hoặc sửa đổi đơn thuốc điện tử",
    strideCategory: "T",
    dreadDefaults: { damage: 8, reproducibility: 4, exploitability: 5, affectedUsers: 6, discoverability: 3 },
    controls: ["Digital signatures", "Immutable audit trail", "Dual approval workflow", "HMAC integrity"],
  },
  {
    name: "Cross-Tenant Data Leak",
    description: "Bệnh viện A truy cập dữ liệu bệnh viện B trong multi-tenant",
    strideCategory: "I",
    dreadDefaults: { damage: 9, reproducibility: 5, exploitability: 4, affectedUsers: 8, discoverability: 3 },
    controls: ["Tenant isolation tại database (schema/RLS)", "Keycloak realm separation", "Network policies"],
  },
];
