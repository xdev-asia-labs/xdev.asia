/**
 * Security configuration templates for PostgreSQL, Keycloak, Quarkus
 */

export type ConfigComponent = "postgresql" | "keycloak" | "quarkus" | "kubernetes" | "nginx";

export interface SecurityConfig {
  component: ConfigComponent;
  name: string;
  description: string;
  config: string;
  notes: string[];
}

export const SECURITY_CONFIGS: Record<ConfigComponent, SecurityConfig[]> = {
  postgresql: [
    {
      component: "postgresql",
      name: "postgresql.conf - Security Hardening",
      description: "Cấu hình PostgreSQL hardening cho dữ liệu y tế",
      config: `# === TLS/SSL ===
ssl = on
ssl_cert_file = '/etc/ssl/certs/server.crt'
ssl_key_file = '/etc/ssl/private/server.key'
ssl_ca_file = '/etc/ssl/certs/ca.crt'
ssl_min_protocol_version = 'TLSv1.3'
ssl_ciphers = 'HIGH:!aNULL:!MD5:!3DES:!RC4'

# === Authentication ===
password_encryption = scram-sha-256

# === Connection Security ===
listen_addresses = 'localhost'  # Chỉ listen local, dùng pgbouncer cho remote
max_connections = 100
superuser_reserved_connections = 3

# === Logging & Audit ===
log_destination = 'syslog'
logging_collector = on
log_connections = on
log_disconnections = on
log_duration = on
log_statement = 'ddl'
log_line_prefix = '%t [%p] %u@%d '

# === pgAudit ===
shared_preload_libraries = 'pgaudit'
pgaudit.log = 'read, write, ddl, role'
pgaudit.log_catalog = off
pgaudit.log_parameter = on
pgaudit.log_statement_once = on

# === Resource Limits ===
statement_timeout = '30s'
idle_in_transaction_session_timeout = '60s'
`,
      notes: [
        "Chạy PostgreSQL KHÔNG dùng user root",
        "Mount ssl certs từ Kubernetes secrets",
        "Dùng pgbouncer cho connection pooling",
        "Backup encryption key KHÁC với database server",
      ],
    },
    {
      component: "postgresql",
      name: "pg_hba.conf - Healthcare",
      description: "Cấu hình authentication cho hệ thống y tế",
      config: `# TYPE  DATABASE    USER         ADDRESS           METHOD
# Local connections
local   all         postgres                       peer
local   all         all                            scram-sha-256

# SSL required for all remote connections
hostssl healthcare  app_user     10.0.0.0/8        scram-sha-256  clientcert=verify-full
hostssl healthcare  readonly     10.0.0.0/8        scram-sha-256  clientcert=verify-ca
hostssl replication repl_user    10.0.1.0/24       scram-sha-256  clientcert=verify-full

# Deny all other connections
host    all         all          0.0.0.0/0         reject
hostssl all         all          0.0.0.0/0         reject
`,
      notes: [
        "Luôn dùng hostssl, KHÔNG dùng host cho healthcare data",
        "clientcert=verify-full cho mutual TLS",
        "Restrict replication tới subnet riêng",
      ],
    },
    {
      component: "postgresql",
      name: "Row-Level Security Template",
      description: "RLS policies cho bảng patient data",
      config: `-- Enable RLS on patient tables
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE prescriptions ENABLE ROW LEVEL SECURITY;

-- Force RLS even for table owners
ALTER TABLE patients FORCE ROW LEVEL SECURITY;

-- Policy: Bác sĩ chỉ xem bệnh nhân của mình
CREATE POLICY doctor_patient_access ON patients
  FOR SELECT
  USING (
    current_setting('app.current_role') = 'ADMIN'
    OR EXISTS (
      SELECT 1 FROM doctor_patient_assignments dpa
      WHERE dpa.patient_id = patients.id
        AND dpa.doctor_id = current_setting('app.current_user_id')::uuid
        AND dpa.active = true
    )
  );

-- Policy: Department-based access
CREATE POLICY department_access ON medical_records
  FOR SELECT
  USING (
    department_id = current_setting('app.current_department')::uuid
    OR current_setting('app.current_role') IN ('ADMIN', 'CHIEF_DOCTOR')
  );

-- Policy: Emergency access (break-the-glass)
CREATE POLICY emergency_access ON patients
  FOR SELECT
  USING (
    current_setting('app.emergency_access', true)::boolean = true
  );

-- Audit trigger for PHI access
CREATE OR REPLACE FUNCTION audit_phi_access()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO phi_access_log(
    user_id, table_name, record_id, action, accessed_at, ip_address, reason
  ) VALUES (
    current_setting('app.current_user_id')::uuid,
    TG_TABLE_NAME,
    NEW.id,
    TG_OP,
    now(),
    current_setting('app.client_ip', true),
    current_setting('app.access_reason', true)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
`,
      notes: [
        "Luôn dùng FORCE ROW LEVEL SECURITY",
        "Session variables (app.*) set từ Quarkus middleware",
        "Emergency access phải có audit trail riêng",
      ],
    },
    {
      component: "postgresql",
      name: "Column-Level Encryption với pgcrypto",
      description: "Mã hóa PHI fields trong PostgreSQL",
      config: `-- Enable pgcrypto
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Encrypted patient table
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Public fields (not encrypted)
  hospital_id UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  
  -- PHI fields (encrypted with AES-256)
  full_name_encrypted BYTEA NOT NULL,
  national_id_encrypted BYTEA NOT NULL,
  date_of_birth_encrypted BYTEA NOT NULL,
  phone_encrypted BYTEA,
  address_encrypted BYTEA,
  
  -- Searchable hash for lookup (SHA-256)
  national_id_hash TEXT NOT NULL UNIQUE,
  
  -- HMAC for integrity verification
  hmac_signature TEXT NOT NULL
);

-- Encrypt function
CREATE OR REPLACE FUNCTION encrypt_phi(data TEXT, key TEXT)
RETURNS BYTEA AS $$
  SELECT pgp_sym_encrypt(data, key, 'compress-algo=1, cipher-algo=aes256');
$$ LANGUAGE sql IMMUTABLE;

-- Decrypt function
CREATE OR REPLACE FUNCTION decrypt_phi(data BYTEA, key TEXT)
RETURNS TEXT AS $$
  SELECT pgp_sym_decrypt(data, key);
$$ LANGUAGE sql IMMUTABLE;

-- Hash for searchable encryption
CREATE OR REPLACE FUNCTION hash_phi(data TEXT, salt TEXT)
RETURNS TEXT AS $$
  SELECT encode(hmac(data, salt, 'sha256'), 'hex');
$$ LANGUAGE sql IMMUTABLE;

-- Integrity check
CREATE OR REPLACE FUNCTION compute_hmac(patient_row patients, key TEXT)
RETURNS TEXT AS $$
  SELECT encode(
    hmac(
      patient_row.id::text || patient_row.full_name_encrypted::text,
      key,
      'sha256'
    ),
    'hex'
  );
$$ LANGUAGE sql STABLE;
`,
      notes: [
        "Encryption key PHẢI lưu trong KMS (HashiCorp Vault), KHÔNG hardcode",
        "national_id_hash cho phép tìm kiếm mà không decrypt",
        "HMAC signature verify integrity của record",
        "Key rotation: re-encrypt tất cả records khi rotate key",
      ],
    },
  ],

  keycloak: [
    {
      component: "keycloak",
      name: "Realm Configuration - Healthcare",
      description: "Cấu hình Keycloak realm cho hệ thống y tế",
      config: `{
  "realm": "healthcare",
  "enabled": true,
  "sslRequired": "all",
  "bruteForceProtected": true,
  "maxFailureWaitSeconds": 900,
  "failureFactor": 5,
  "permanentLockout": false,
  "passwordPolicy": "length(12) and upperCase(1) and lowerCase(1) and digits(1) and specialChars(1) and notUsername and passwordHistory(5)",
  "ssoSessionIdleTimeout": 900,
  "ssoSessionMaxLifespan": 28800,
  "offlineSessionIdleTimeout": 2592000,
  "accessTokenLifespan": 900,
  "accessCodeLifespan": 60,
  "roles": {
    "realm": [
      {"name": "ADMIN", "description": "System Administrator"},
      {"name": "CHIEF_DOCTOR", "description": "Bác sĩ trưởng khoa"},
      {"name": "DOCTOR", "description": "Bác sĩ điều trị"},
      {"name": "HEAD_NURSE", "description": "Y tá trưởng"},
      {"name": "NURSE", "description": "Y tá"},
      {"name": "TECHNICIAN", "description": "Kỹ thuật viên"},
      {"name": "PHARMACIST", "description": "Dược sĩ"},
      {"name": "RECEPTIONIST", "description": "Lễ tân"},
      {"name": "PATIENT", "description": "Bệnh nhân"},
      {"name": "EMERGENCY_ACCESS", "description": "Emergency break-the-glass role"}
    ]
  },
  "clients": [
    {
      "clientId": "his-app",
      "name": "Hospital Information System",
      "protocol": "openid-connect",
      "publicClient": false,
      "standardFlowEnabled": true,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": true,
      "authorizationServicesEnabled": true
    },
    {
      "clientId": "patient-portal",
      "name": "Patient Portal",
      "protocol": "openid-connect",
      "publicClient": true,
      "standardFlowEnabled": true,
      "directAccessGrantsEnabled": false,
      "consentRequired": true
    }
  ],
  "requiredActions": [
    {"alias": "CONFIGURE_TOTP", "name": "Configure OTP", "enabled": true, "defaultAction": true},
    {"alias": "VERIFY_EMAIL", "name": "Verify Email", "enabled": true, "defaultAction": true}
  ],
  "eventsConfig": {
    "eventsEnabled": true,
    "eventsExpiration": 7776000,
    "eventsListeners": ["jboss-logging", "custom-audit-listener"],
    "adminEventsEnabled": true,
    "adminEventsDetailsEnabled": true
  }
}`,
      notes: [
        "sslRequired: 'all' - bắt buộc SSL cho mọi connection",
        "Brute force protection: lock sau 5 lần fail",
        "Session idle 15 phút phù hợp môi trường bệnh viện",
        "OAuth: KHÔNG dùng directAccessGrantsEnabled cho production",
      ],
    },
  ],

  quarkus: [
    {
      component: "quarkus",
      name: "application.properties - Security",
      description: "Cấu hình bảo mật Quarkus cho healthcare microservice",
      config: `# === OIDC / Keycloak ===
quarkus.oidc.auth-server-url=https://keycloak.hospital.local/realms/healthcare
quarkus.oidc.client-id=his-app
quarkus.oidc.credentials.secret=\${OIDC_CLIENT_SECRET}
quarkus.oidc.tls.verification=required
quarkus.oidc.token.issuer=https://keycloak.hospital.local/realms/healthcare

# Token validation
quarkus.oidc.token.lifespan-grace=30
quarkus.oidc.token.principal-claim=preferred_username

# === HTTP Security ===
quarkus.http.ssl.certificate.files=/etc/ssl/certs/app.crt
quarkus.http.ssl.certificate.key-files=/etc/ssl/private/app.key
quarkus.http.insecure-requests=disabled
quarkus.http.cors.origins=https://his.hospital.local
quarkus.http.cors.methods=GET,POST,PUT,DELETE
quarkus.http.cors.headers=Authorization,Content-Type,X-Correlation-ID
quarkus.http.cors.exposed-headers=X-Correlation-ID
quarkus.http.cors.access-control-max-age=24H

# Security headers
quarkus.http.header."X-Content-Type-Options".value=nosniff
quarkus.http.header."X-Frame-Options".value=DENY
quarkus.http.header."Strict-Transport-Security".value=max-age=31536000; includeSubDomains
quarkus.http.header."X-XSS-Protection".value=0
quarkus.http.header."Content-Security-Policy".value=default-src 'self'
quarkus.http.header."Referrer-Policy".value=strict-origin-when-cross-origin

# === Database Security ===
quarkus.datasource.db-kind=postgresql
quarkus.datasource.jdbc.url=jdbc:postgresql://db.hospital.local:5432/healthcare?ssl=true&sslmode=verify-full
quarkus.datasource.username=\${DB_USER}
quarkus.datasource.password=\${DB_PASSWORD}
quarkus.datasource.jdbc.max-size=20
quarkus.datasource.jdbc.min-size=5

# === Logging (NEVER log PHI) ===
quarkus.log.console.format=%d{yyyy-MM-dd HH:mm:ss} %-5p [%c{2.}] (%t) correlation=%X{correlationId} user=%X{userId} %s%e%n
quarkus.log.category."io.quarkus.security".level=DEBUG
quarkus.log.category."org.keycloak".level=WARN

# === OpenTelemetry ===
quarkus.otel.enabled=true
quarkus.otel.exporter.otlp.endpoint=http://otel-collector:4317
quarkus.otel.resource.attributes=service.name=patient-service,service.version=1.0.0
`,
      notes: [
        "Secrets từ environment variables, KHÔNG hardcode",
        "insecure-requests=disabled: chỉ cho phép HTTPS",
        "sslmode=verify-full: verify server certificate",
        "CORS chỉ cho phép specific origin",
      ],
    },
  ],

  kubernetes: [
    {
      component: "kubernetes",
      name: "Pod Security - Healthcare Workload",
      description: "Kubernetes security config cho healthcare services",
      config: `apiVersion: v1
kind: Pod
metadata:
  name: patient-service
  labels:
    app: patient-service
    compliance: hipaa
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 1000
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: patient-service
    image: registry.hospital.local/patient-service:1.0.0@sha256:abc123...
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]
    resources:
      limits:
        cpu: "1"
        memory: "512Mi"
      requests:
        cpu: "250m"
        memory: "256Mi"
    env:
    - name: DB_PASSWORD
      valueFrom:
        secretRef:
          name: patient-db-credentials
          key: password
    - name: OIDC_CLIENT_SECRET
      valueFrom:
        secretRef:
          name: keycloak-client-secret
          key: secret
    volumeMounts:
    - name: tmp
      mountPath: /tmp
    - name: tls-certs
      mountPath: /etc/ssl/certs
      readOnly: true
  volumes:
  - name: tmp
    emptyDir:
      sizeLimit: 100Mi
  - name: tls-certs
    secret:
      secretName: patient-service-tls
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: patient-service-netpol
spec:
  podSelector:
    matchLabels:
      app: patient-service
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: api-gateway
    ports:
    - protocol: TCP
      port: 8443
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: postgresql
    ports:
    - protocol: TCP
      port: 5432
  - to:
    - podSelector:
        matchLabels:
          app: keycloak
    ports:
    - protocol: TCP
      port: 8443
`,
      notes: [
        "Image pinned by digest (sha256), không dùng :latest",
        "readOnlyRootFilesystem + emptyDir cho tmp",
        "NetworkPolicy restrict traffic chỉ từ API gateway",
        "Secrets mount từ External Secrets Operator",
      ],
    },
  ],

  nginx: [
    {
      component: "nginx",
      name: "API Gateway / Reverse Proxy",
      description: "Nginx config làm reverse proxy cho healthcare API",
      config: `# Rate limiting zones
limit_req_zone $binary_remote_addr zone=api_general:10m rate=30r/s;
limit_req_zone $binary_remote_addr zone=api_auth:10m rate=5r/s;
limit_req_zone $binary_remote_addr zone=api_fhir:10m rate=10r/s;

server {
    listen 443 ssl http2;
    server_name api.hospital.local;

    # TLS Configuration
    ssl_certificate     /etc/ssl/certs/api.crt;
    ssl_certificate_key /etc/ssl/private/api.key;
    ssl_protocols       TLSv1.3;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Content-Security-Policy "default-src 'self'" always;

    # Request size limit (prevent large payload attacks)
    client_max_body_size 10m;
    client_body_timeout 10s;
    client_header_timeout 10s;

    # FHIR API endpoints
    location /fhir/ {
        limit_req zone=api_fhir burst=20 nodelay;
        proxy_pass https://patient-service:8443/fhir/;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Correlation-ID $request_id;
    }

    # Auth endpoints
    location /auth/ {
        limit_req zone=api_auth burst=5 nodelay;
        proxy_pass https://keycloak:8443/;
    }

    # Block sensitive file extensions
    location ~* \\.(sql|bak|log|env|git)$ {
        deny all;
    }
}`,
      notes: [
        "Rate limiting khác nhau cho từng endpoint type",
        "TLSv1.3 only - không support legacy",
        "Request size capped tại 10MB",
        "Block access tới sensitive file extensions",
      ],
    },
  ],
};

export function getConfigForComponent(
  component: ConfigComponent,
  context?: string
): SecurityConfig[] {
  return SECURITY_CONFIGS[component] || [];
}
