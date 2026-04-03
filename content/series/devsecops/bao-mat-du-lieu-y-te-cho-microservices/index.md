---
id: 019e1a40-a100-7001-d001-f0a1b2c30001
title: Bảo mật Dữ liệu Y Tế cho Hệ thống Microservices
slug: bao-mat-du-lieu-y-te-cho-microservices
description: >-
  Khóa học toàn diện về bảo mật dữ liệu y tế (Healthcare Data Security) cho hệ thống
  microservices, sử dụng Quarkus, PostgreSQL và Keycloak. Bao gồm các tiêu chuẩn
  HIPAA, HL7 FHIR, Luật An ninh mạng Việt Nam, từ thiết kế kiến trúc bảo mật,
  Identity & Access Management, mã hóa dữ liệu, Row-Level Security, Audit Logging,
  đến Zero Trust Architecture và Penetration Testing. Mỗi bài học đều có ví dụ
  thực tế với code Quarkus Java, cấu hình PostgreSQL và Keycloak, sẵn sàng áp dụng
  cho hệ thống HIS, EMR, LIS trong bệnh viện và cơ sở y tế.
featured_image: uploads/2026/04/bao-mat-du-lieu-y-te-microservices-banner.png
level: intermediate
duration_hours: 75
lesson_count: 24
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-03T08:00:00.000000Z'
created_at: '2026-04-03T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevSecOps
  slug: devsecops
tags:
  - name: Security
    slug: security
  - name: Healthcare
    slug: healthcare
  - name: HIPAA
    slug: hipaa
  - name: Quarkus
    slug: quarkus
  - name: PostgreSQL
    slug: postgresql
  - name: Keycloak
    slug: keycloak
  - name: Microservices
    slug: microservices
  - name: Encryption
    slug: encryption
  - name: Zero Trust
    slug: zero-trust
  - name: HL7 FHIR
    slug: hl7-fhir
  - name: Docker
    slug: docker
  - name: kubernetes
    slug: kubernetes
  - name: HandsOn
    slug: handson
sections:
  - id: section-01
    title: 'Phần 1: Nền tảng Bảo mật Dữ liệu Y Tế'
    description: 'Tiêu chuẩn quốc tế, kiến trúc hệ thống, phân loại dữ liệu và threat modeling'
    sort_order: 1
    lessons:
      - id: 019e1a40-a101-7001-d001-f0a1b2c30101
        title: 'Bài 1: Tổng quan Bảo mật Dữ liệu Y Tế - HIPAA, HL7 FHIR & Luật Việt Nam'
        slug: bai-1-tong-quan-bao-mat-du-lieu-y-te-hipaa-hl7-fhir
        description: >-
          Tìm hiểu tổng quan bảo mật dữ liệu y tế: khái niệm PHI/ePHI, các tiêu chuẩn
          quốc tế HIPAA (Privacy Rule, Security Rule, Breach Notification), HL7 FHIR
          Security, GDPR cho dữ liệu sức khỏe, Luật An ninh mạng Việt Nam 2018,
          Nghị định 13/2023 về bảo vệ dữ liệu cá nhân, và các framework bảo mật
          NIST Cybersecurity Framework, ISO 27799 cho healthcare.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e1a40-a102-7001-d001-f0a1b2c30102
        title: 'Bài 2: Kiến trúc Microservices An toàn cho Y Tế với Quarkus Stack'
        slug: bai-2-kien-truc-microservices-an-toan-cho-y-te
        description: >-
          Thiết kế kiến trúc microservices bảo mật cho hệ thống y tế sử dụng
          Quarkus, PostgreSQL, Keycloak. Bao gồm API Gateway pattern, service mesh,
          event-driven architecture với Kafka, network segmentation, DMZ design,
          và blueprint kiến trúc tham chiếu cho HIS/EMR/LIS.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e1a40-a103-7001-d001-f0a1b2c30103
        title: 'Bài 3: Phân loại Dữ liệu Y Tế (PHI/ePHI) và Đánh giá Rủi ro'
        slug: bai-3-phan-loai-du-lieu-y-te-phi-va-danh-gia-rui-ro
        description: >-
          Phân loại dữ liệu y tế theo mức độ nhạy cảm: PHI, ePHI, PII, dữ liệu
          lâm sàng, dữ liệu hành chính. Xây dựng Data Classification Policy,
          Data Flow Mapping, Risk Assessment theo NIST SP 800-30, và thiết lập
          Risk Register cho hệ thống microservices y tế.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e1a40-a104-7001-d001-f0a1b2c30104
        title: 'Bài 4: Threat Modeling STRIDE/DREAD cho Health Information System'
        slug: bai-4-threat-modeling-stride-dread-cho-his
        description: >-
          Áp dụng Threat Modeling cho hệ thống y tế: STRIDE (Spoofing, Tampering,
          Repudiation, Information Disclosure, DoS, Elevation of Privilege),
          DREAD scoring, Attack Trees, Data Flow Diagrams cho microservices y tế,
          OWASP Top 10 trong healthcare context, và xây dựng Security Requirements
          từ threat model.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Identity & Access Management với Keycloak'
    description: 'Thiết kế IAM, phân quyền RBAC/ABAC, SMART on FHIR và MFA cho y tế'
    sort_order: 2
    lessons:
      - id: 019e1a40-a105-7001-d001-f0a1b2c30105
        title: 'Bài 5: Thiết kế Keycloak Realm chuẩn Y Tế - Multi-tenancy cho Bệnh viện'
        slug: bai-5-thiet-ke-keycloak-realm-chuan-y-te
        description: >-
          Thiết kế Keycloak Realm cho hệ thống y tế đa bệnh viện: cấu trúc
          Realm per Hospital vs Organizations, Client configuration cho HIS/EMR/LIS,
          User Profile schema cho nhân viên y tế, Patient Portal client,
          session management, security defenses, và realm import/export automation.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e1a40-a106-7001-d001-f0a1b2c30106
        title: 'Bài 6: RBAC & ABAC - Phân quyền Bác sĩ, Y tá, Bệnh nhân'
        slug: bai-6-rbac-abac-phan-quyen-nhan-vien-y-te
        description: >-
          Triển khai Role-Based Access Control (RBAC) và Attribute-Based Access
          Control (ABAC) cho y tế: thiết kế role hierarchy (Bác sĩ trưởng khoa,
          Bác sĩ điều trị, Y tá trưởng, Y tá, Kỹ thuật viên, Admin, Bệnh nhân),
          department-based access, Keycloak Authorization Services với policies
          và permissions, và break-the-glass emergency access.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e1a40-a107-7001-d001-f0a1b2c30107
        title: 'Bài 7: SMART on FHIR - OAuth2/OIDC cho Healthcare APIs'
        slug: bai-7-smart-on-fhir-oauth2-oidc-healthcare-apis
        description: >-
          Triển khai SMART on FHIR (Substitutable Medical Applications, Reusable
          Technologies) với Keycloak: SMART App Launch Framework, scopes cho
          FHIR resources (patient/*.read, user/*.write), launch context,
          EHR Launch vs Standalone Launch, Backend Services Authorization,
          và tích hợp với HAPI FHIR Server trên Quarkus.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e1a40-a108-7001-d001-f0a1b2c30108
        title: 'Bài 8: MFA, Passkeys & Emergency Access cho Nhân viên Y Tế'
        slug: bai-8-mfa-passkeys-emergency-access-nhan-vien-y-te
        description: >-
          Triển khai Multi-Factor Authentication phù hợp môi trường y tế:
          TOTP/HOTP cho bác sĩ, WebAuthn/Passkeys cho workstations, proximity
          badge authentication, conditional MFA (skip MFA trong mạng nội bộ),
          Emergency Access (break-the-glass) procedure với audit trail,
          và Session Management cho shared workstations trong bệnh viện.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Bảo mật PostgreSQL cho Dữ liệu Y Tế'
    description: 'Hardening, mã hóa, Row-Level Security và Audit Logging cho PostgreSQL'
    sort_order: 3
    lessons:
      - id: 019e1a40-a109-7001-d001-f0a1b2c30109
        title: 'Bài 9: PostgreSQL Security Hardening - Cấu hình Bảo mật Toàn diện'
        slug: bai-9-postgresql-security-hardening-toan-dien
        description: >-
          Hardening PostgreSQL cho dữ liệu y tế: pg_hba.conf authentication methods,
          SSL/TLS configuration, connection limits, password policies, role management
          và least privilege, schema isolation, network security, postgresql.conf
          security parameters, và CIS Benchmark for PostgreSQL compliance.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e1a40-a110-7001-d001-f0a1b2c30110
        title: 'Bài 10: Mã hóa Dữ liệu At-Rest & In-Transit với PostgreSQL'
        slug: bai-10-ma-hoa-du-lieu-at-rest-in-transit-postgresql
        description: >-
          Triển khai mã hóa toàn diện cho PostgreSQL: Transparent Data Encryption (TDE),
          pgcrypto extension cho column-level encryption, SSL/TLS certificates
          với mutual TLS, Key Management với HashiCorp Vault, envelope encryption
          pattern, và so sánh các phương pháp mã hóa (AES-256-GCM, AES-256-CBC)
          cho dữ liệu y tế.
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e1a40-a111-7001-d001-f0a1b2c30111
        title: 'Bài 11: Row-Level Security & Column Encryption cho PHI'
        slug: bai-11-row-level-security-column-encryption-phi
        description: >-
          Triển khai Row-Level Security (RLS) trong PostgreSQL cho dữ liệu y tế:
          RLS policies cho patient data isolation, department-based access control,
          doctor-patient relationship policies, column-level encryption cho
          sensitive fields (SSN, diagnosis, lab results), dynamic data masking,
          và tích hợp RLS với Keycloak JWT claims trong Quarkus.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e1a40-a112-7001-d001-f0a1b2c30112
        title: 'Bài 12: Audit Logging & Change Data Capture với pgAudit'
        slug: bai-12-audit-logging-cdc-pgaudit
        description: >-
          Triển khai Audit Logging cho PostgreSQL y tế: pgAudit extension configuration,
          statement-level vs object-level audit, audit log format và storage,
          Change Data Capture (CDC) với Debezium cho event sourcing,
          immutable audit trail design, log shipping và archival,
          và compliance reporting từ audit logs.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Bảo mật Microservices Quarkus'
    description: 'OIDC integration, API Gateway, mã hóa end-to-end và mTLS'
    sort_order: 4
    lessons:
      - id: 019e1a40-a113-7001-d001-f0a1b2c30113
        title: 'Bài 13: Quarkus Security - OIDC Extension, JWT Propagation & RBAC'
        slug: bai-13-quarkus-security-oidc-jwt-rbac
        description: >-
          Bảo mật Quarkus microservices với Keycloak: quarkus-oidc extension,
          Bearer Token authentication, JWT claim-based authorization,
          @RolesAllowed và custom SecurityIdentityAugmentor, tenant-aware
          security với quarkus-oidc-client, token propagation giữa services,
          và testing security với @TestSecurity annotation.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e1a40-a114-7001-d001-f0a1b2c30114
        title: 'Bài 14: API Gateway Pattern - Rate Limiting, Input Validation & WAF'
        slug: bai-14-api-gateway-rate-limiting-input-validation-waf
        description: >-
          Triển khai API Gateway bảo mật cho healthcare APIs: Kong/APISIX gateway
          với Keycloak plugin, rate limiting per client/endpoint, request validation
          với JSON Schema cho FHIR resources, SQL injection & XSS prevention,
          Web Application Firewall (WAF) rules cho healthcare,
          và API versioning security.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e1a40-a115-7001-d001-f0a1b2c30115
        title: 'Bài 15: Mã hóa End-to-End trong Microservices Healthcare'
        slug: bai-15-ma-hoa-end-to-end-microservices-healthcare
        description: >-
          Thiết kế và triển khai mã hóa end-to-end cho microservices y tế:
          application-level encryption cho PHI fields, envelope encryption
          với KMS, encrypted message queues (Kafka encryption), field-level
          encryption trong REST/gRPC payloads, client-side encryption cho
          patient portal, và key rotation strategies.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e1a40-a116-7001-d001-f0a1b2c30116
        title: 'Bài 16: mTLS, Service Mesh & Secure Inter-Service Communication'
        slug: bai-16-mtls-service-mesh-secure-inter-service
        description: >-
          Triển khai secure inter-service communication: mutual TLS (mTLS)
          với Quarkus, Istio/Linkerd service mesh cho healthcare microservices,
          certificate management với cert-manager, network policies trong
          Kubernetes, service-to-service authentication patterns,
          và circuit breaker security considerations.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Compliance, Audit & Data Protection'
    description: 'HIPAA compliance, audit trail, data masking và disaster recovery'
    sort_order: 5
    lessons:
      - id: 019e1a40-a117-7001-d001-f0a1b2c30117
        title: 'Bài 17: HIPAA Technical Safeguards - Checklist Triển khai Đầy đủ'
        slug: bai-17-hipaa-technical-safeguards-checklist
        description: >-
          Triển khai đầy đủ HIPAA Technical Safeguards cho microservices:
          Access Control (unique user ID, emergency access, auto logoff, encryption),
          Audit Controls (hardware, software, procedural mechanisms),
          Integrity Controls (electronic PHI alteration/destruction),
          Person/Entity Authentication, Transmission Security, mapping từng
          requirement vào Quarkus/PostgreSQL/Keycloak implementation.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e1a40-a118-7001-d001-f0a1b2c30118
        title: 'Bài 18: Centralized Audit Trail với OpenTelemetry & ELK Stack'
        slug: bai-18-centralized-audit-trail-opentelemetry-elk
        description: >-
          Xây dựng centralized audit trail cho hệ thống y tế: OpenTelemetry
          instrumentation cho Quarkus, distributed tracing cho patient data access,
          structured logging với correlation ID, ELK Stack (Elasticsearch,
          Logstash, Kibana) deployment, immutable log storage, SIEM integration,
          alert rules cho suspicious access patterns, và compliance dashboards.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e1a40-a119-7001-d001-f0a1b2c30119
        title: 'Bài 19: Data Masking, Anonymization & De-identification cho PHI'
        slug: bai-19-data-masking-anonymization-de-identification-phi
        description: >-
          Kỹ thuật bảo vệ PHI: Static vs Dynamic Data Masking, HIPAA Safe Harbor
          de-identification (18 identifiers), Expert Determination method,
          k-anonymity, l-diversity, t-closeness, pseudonymization cho research data,
          tokenization cho payment/insurance, implementation trong PostgreSQL
          views và Quarkus response filters.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e1a40-a120-7001-d001-f0a1b2c30120
        title: 'Bài 20: Backup, Disaster Recovery & Business Continuity'
        slug: bai-20-backup-dr-business-continuity-y-te
        description: >-
          Thiết kế Backup/DR cho dữ liệu y tế: encrypted backup strategies
          (pg_basebackup, pgBackRest, Barman), Point-in-Time Recovery (PITR),
          cross-region replication, RPO/RTO cho healthcare (near-zero tolerance),
          DR testing procedures, Business Continuity Planning,
          ransomware protection, và immutable backup storage.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 'Phần 6: Nâng cao & Dự án Thực hành'
    description: 'Zero Trust, Container Security, Pentest và Capstone Project'
    sort_order: 6
    lessons:
      - id: 019e1a40-a121-7001-d001-f0a1b2c30121
        title: 'Bài 21: Zero Trust Architecture cho Hệ thống Y Tế'
        slug: bai-21-zero-trust-architecture-he-thong-y-te
        description: >-
          Triển khai Zero Trust cho y tế: "Never trust, always verify" principles,
          identity-centric security, micro-segmentation, continuous verification,
          device trust assessment, NIST SP 800-207 Zero Trust Architecture,
          implementation với Keycloak + Istio + OPA (Open Policy Agent),
          và use cases thực tế trong bệnh viện.
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e1a40-a122-7001-d001-f0a1b2c30122
        title: 'Bài 22: Container & Kubernetes Security cho Healthcare Workloads'
        slug: bai-22-container-kubernetes-security-healthcare
        description: >-
          Bảo mật container và Kubernetes cho y tế: image scanning với Trivy,
          distroless/minimal base images, Pod Security Standards, NetworkPolicies,
          Secrets management với External Secrets Operator, RBAC Kubernetes,
          runtime security với Falco, supply chain security (SBOM, Sigstore),
          và CIS Kubernetes Benchmark cho healthcare.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e1a40-a123-7001-d001-f0a1b2c30123
        title: 'Bài 23: Penetration Testing & Vulnerability Assessment cho Y Tế'
        slug: bai-23-penetration-testing-vulnerability-assessment-y-te
        description: >-
          Security testing cho hệ thống y tế: vulnerability scanning (OWASP ZAP,
          Nuclei), SAST/DAST/IAST integration trong CI/CD, dependency scanning
          (Snyk, Dependabot), PostgreSQL security audit, Keycloak security
          assessment, API security testing, compliance scanning,
          và tạo Security Assessment Report theo HIPAA requirements.
        duration_minutes: 150
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e1a40-a124-7001-d001-f0a1b2c30124
        title: 'Bài 24: Capstone - Xây dựng Secure Healthcare Microservices Platform'
        slug: bai-24-capstone-xay-dung-secure-healthcare-platform
        description: >-
          Dự án tổng hợp: xây dựng Healthcare Microservices Platform hoàn chỉnh
          với đầy đủ security controls. Bao gồm Patient Service, Appointment Service,
          Lab Results Service, Prescription Service trên Quarkus, PostgreSQL
          với RLS + encryption, Keycloak IAM, API Gateway, audit logging,
          monitoring, và deployment trên Kubernetes với full HIPAA compliance.
        duration_minutes: 300
        is_free: true
        sort_order: 24
        video_url: null
---

## Giới thiệu Khóa học

**Bảo mật Dữ liệu Y Tế cho Hệ thống Microservices** là khóa học chuyên sâu được thiết kế cho các kỹ sư phần mềm, DevSecOps engineers, và technical leads đang xây dựng hoặc vận hành hệ thống thông tin y tế (HIS, EMR, LIS, RIS, PACS).

Trong bối cảnh chuyển đổi số y tế tại Việt Nam và quốc tế, việc bảo vệ dữ liệu sức khỏe của bệnh nhân (Protected Health Information - PHI) không chỉ là yêu cầu kỹ thuật mà còn là **nghĩa vụ pháp lý**. Khóa học này cung cấp kiến thức và kỹ năng thực hành để triển khai bảo mật toàn diện trên technology stack phổ biến: **Quarkus** (microservices framework), **PostgreSQL** (database), và **Keycloak** (Identity & Access Management).

### Bạn sẽ học được gì?

- **Tiêu chuẩn bảo mật y tế**: HIPAA, HL7 FHIR Security, ISO 27799, Luật An ninh mạng Việt Nam
- **Kiến trúc bảo mật**: Zero Trust Architecture, Defense-in-Depth cho microservices y tế
- **Identity & Access Management**: Keycloak Realm design, RBAC/ABAC, SMART on FHIR, MFA
- **Database Security**: PostgreSQL hardening, encryption (TDE, pgcrypto), Row-Level Security, pgAudit
- **Application Security**: Quarkus OIDC, JWT propagation, mTLS, API Gateway security
- **Compliance & Audit**: HIPAA Technical Safeguards checklist, centralized audit trail, data masking
- **DevSecOps**: Container security, Kubernetes hardening, SAST/DAST, penetration testing
- **Hands-on Project**: Xây dựng Healthcare Platform hoàn chỉnh với full security controls

### Yêu cầu kiến thức

- Kiến thức cơ bản về Java và Quarkus framework
- Hiểu biết cơ bản về PostgreSQL
- Kinh nghiệm sử dụng Docker và Kubernetes
- Đã làm quen với Keycloak (hoặc hoàn thành series "Keycloak từ Cơ bản đến Nâng cao")
- Hiểu biết cơ bản về REST API và microservices architecture

### Technology Stack

| Công nghệ | Phiên bản | Vai trò |
|-----------|-----------|---------|
| Quarkus | 3.x | Microservices framework |
| PostgreSQL | 16+ | Database chính |
| Keycloak | 26.x | Identity & Access Management |
| Apache Kafka | 3.x | Event streaming & audit |
| Istio | 1.x | Service mesh & mTLS |
| Docker | 24+ | Container runtime |
| Kubernetes | 1.30+ | Container orchestration |
| HashiCorp Vault | 1.x | Secrets & key management |
| OpenTelemetry | 1.x | Observability & tracing |
| ELK Stack | 8.x | Log aggregation & SIEM |
