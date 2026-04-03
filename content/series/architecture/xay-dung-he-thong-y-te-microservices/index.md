---
id: 019e1a40-a100-7001-d001-f0a1b2c30001
title: "Xây dựng Hệ thống Y tế Microservices — Quarkus, PostgreSQL, Keycloak chuẩn HIPAA"
slug: xay-dung-he-thong-y-te-microservices
description: >-
  Hướng dẫn từng bước xây dựng hệ thống thông tin y tế (HIS/EMR/LIS) kiến trúc
  Microservices sử dụng Quarkus, PostgreSQL và Keycloak. Tuân thủ chuẩn bảo mật
  HIPAA, HL7 FHIR, Zero Trust. Từ thiết kế kiến trúc, xây dựng services, phân quyền,
  mã hóa dữ liệu, audit logging đến deploy production trên Kubernetes.
  Mỗi bài đều có code thực tế, sẵn sàng áp dụng cho bệnh viện và cơ sở y tế.
featured_image: uploads/2026/04/xay-dung-he-thong-y-te-microservices-banner.png
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
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: Kiến trúc hệ thống
  slug: kien-truc-he-thong
tags:
  - name: Healthcare
    slug: healthcare
  - name: Quarkus
    slug: quarkus
  - name: PostgreSQL
    slug: postgresql
  - name: Keycloak
    slug: keycloak
  - name: Microservices
    slug: microservices
  - name: HIPAA
    slug: hipaa
  - name: Security
    slug: security
  - name: HL7 FHIR
    slug: hl7-fhir
  - name: Docker
    slug: docker
  - name: kubernetes
    slug: kubernetes
  - name: Java
    slug: java
  - name: HandsOn
    slug: handson
sections:
  - id: section-01
    title: 'Phần 1: Kiến trúc & Nền tảng'
    description: 'Tổng quan hệ thống y tế, thiết kế kiến trúc Microservices, phân loại dữ liệu và threat modeling'
    sort_order: 1
    lessons:
      - id: 019e1a40-a101-7001-d001-f0a1b2c30101
        title: 'Bài 1: Tổng quan Hệ thống Y tế & Yêu cầu Bảo mật — HIPAA, HL7 FHIR'
        slug: bai-1-tong-quan-he-thong-y-te-yeu-cau-bao-mat
        description: >-
          Hiểu tổng quan hệ thống thông tin y tế (HIS/EMR/LIS), dữ liệu PHI/ePHI,
          các tiêu chuẩn HIPAA, HL7 FHIR, Luật An ninh mạng Việt Nam. Xác định
          requirements khi xây dựng hệ thống y tế chuẩn bảo mật.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e1a40-a102-7001-d001-f0a1b2c30102
        title: 'Bài 2: Thiết kế Kiến trúc Microservices cho Y tế — Quarkus Stack Blueprint'
        slug: bai-2-thiet-ke-kien-truc-microservices-y-te
        description: >-
          Thiết kế kiến trúc tổng thể hệ thống y tế Microservices với Quarkus,
          PostgreSQL, Keycloak, Kafka. API Gateway, service mesh, network segmentation,
          DMZ design và blueprint kiến trúc cho HIS/EMR/LIS.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e1a40-a103-7001-d001-f0a1b2c30103
        title: 'Bài 3: Phân loại Dữ liệu Y tế (PHI/ePHI) & Đánh giá Rủi ro'
        slug: bai-3-phan-loai-du-lieu-y-te-danh-gia-rui-ro
        description: >-
          Phân loại dữ liệu y tế theo mức nhạy cảm, xây dựng Data Classification
          Policy, Data Flow Mapping, Risk Assessment theo NIST SP 800-30.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e1a40-a104-7001-d001-f0a1b2c30104
        title: 'Bài 4: Threat Modeling STRIDE/DREAD cho Hệ thống Y tế'
        slug: bai-4-threat-modeling-stride-dread
        description: >-
          Áp dụng STRIDE, DREAD scoring, Attack Trees cho hệ thống y tế Microservices.
          Xây dựng Security Requirements từ threat model.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Identity & Access Management với Keycloak'
    description: 'Setup Keycloak, phân quyền RBAC/ABAC, SMART on FHIR, MFA'
    sort_order: 2
    lessons:
      - id: 019e1a40-a105-7001-d001-f0a1b2c30105
        title: 'Bài 5: Setup Keycloak Realm cho Bệnh viện — Multi-tenancy'
        slug: bai-5-setup-keycloak-realm-benh-vien
        description: >-
          Thiết kế và setup Keycloak Realm cho hệ thống y tế đa bệnh viện.
          Client configuration cho HIS/EMR/LIS, User Profile, Patient Portal,
          session management và security defenses.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e1a40-a106-7001-d001-f0a1b2c30106
        title: 'Bài 6: Phân quyền RBAC & ABAC — Bác sĩ, Y tá, Bệnh nhân'
        slug: bai-6-phan-quyen-rbac-abac
        description: >-
          Triển khai RBAC/ABAC cho y tế: role hierarchy, department-based access,
          Keycloak Authorization Services, break-the-glass emergency access.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e1a40-a107-7001-d001-f0a1b2c30107
        title: 'Bài 7: SMART on FHIR — OAuth2/OIDC cho Healthcare APIs'
        slug: bai-7-smart-on-fhir-oauth2-oidc
        description: >-
          Triển khai SMART on FHIR với Keycloak: App Launch Framework, FHIR scopes,
          EHR Launch vs Standalone Launch, tích hợp HAPI FHIR Server trên Quarkus.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e1a40-a108-7001-d001-f0a1b2c30108
        title: 'Bài 8: MFA, Passkeys & Emergency Access cho Nhân viên Y tế'
        slug: bai-8-mfa-passkeys-emergency-access
        description: >-
          Triển khai MFA phù hợp môi trường y tế: TOTP, WebAuthn/Passkeys,
          proximity badge, conditional MFA, Emergency Access procedure.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Xây dựng Data Layer — PostgreSQL cho Y tế'
    description: 'Database hardening, mã hóa, Row-Level Security, Audit Logging'
    sort_order: 3
    lessons:
      - id: 019e1a40-a109-7001-d001-f0a1b2c30109
        title: 'Bài 9: PostgreSQL Security Hardening — Cấu hình Toàn diện'
        slug: bai-9-postgresql-security-hardening
        description: >-
          Hardening PostgreSQL cho dữ liệu y tế: TLS, pg_hba.conf, role management,
          schema isolation, CIS Benchmark compliance.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e1a40-a110-7001-d001-f0a1b2c30110
        title: 'Bài 10: Mã hóa Dữ liệu At-Rest & In-Transit với PostgreSQL'
        slug: bai-10-ma-hoa-du-lieu-postgresql
        description: >-
          TDE, pgcrypto, SSL/TLS, Key Management với HashiCorp Vault,
          envelope encryption cho dữ liệu y tế.
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e1a40-a111-7001-d001-f0a1b2c30111
        title: 'Bài 11: Row-Level Security & Column Encryption cho PHI'
        slug: bai-11-row-level-security-column-encryption
        description: >-
          RLS policies cho patient data isolation, department-based access,
          column-level encryption, tích hợp RLS với Keycloak JWT trong Quarkus.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e1a40-a112-7001-d001-f0a1b2c30112
        title: 'Bài 12: Audit Logging & CDC với pgAudit + Debezium'
        slug: bai-12-audit-logging-cdc-pgaudit
        description: >-
          pgAudit, Change Data Capture với Debezium, immutable audit trail,
          compliance reporting từ audit logs.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Xây dựng Microservices với Quarkus'
    description: 'Quarkus OIDC, API Gateway, mã hóa end-to-end, mTLS service mesh'
    sort_order: 4
    lessons:
      - id: 019e1a40-a113-7001-d001-f0a1b2c30113
        title: 'Bài 13: Quarkus Security — OIDC, JWT Propagation & RBAC'
        slug: bai-13-quarkus-security-oidc-jwt-rbac
        description: >-
          Quarkus OIDC extension với Keycloak, Bearer Token auth, JWT claim-based
          authorization, @RolesAllowed, token propagation giữa services.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e1a40-a114-7001-d001-f0a1b2c30114
        title: 'Bài 14: API Gateway — Rate Limiting, Validation & WAF'
        slug: bai-14-api-gateway-rate-limiting-waf
        description: >-
          API Gateway bảo mật cho healthcare: Kong/APISIX, rate limiting,
          JSON Schema validation, WAF rules, API versioning.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e1a40-a115-7001-d001-f0a1b2c30115
        title: 'Bài 15: Mã hóa End-to-End trong Microservices'
        slug: bai-15-ma-hoa-end-to-end-microservices
        description: >-
          Application-level encryption, envelope encryption, encrypted Kafka,
          field-level encryption trong REST/gRPC, key rotation.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e1a40-a116-7001-d001-f0a1b2c30116
        title: 'Bài 16: mTLS, Service Mesh & Inter-Service Communication'
        slug: bai-16-mtls-service-mesh
        description: >-
          mTLS với Quarkus, Istio service mesh, cert-manager, Kubernetes
          NetworkPolicies, service-to-service authentication.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Compliance, Audit & Data Protection'
    description: 'HIPAA compliance, audit trail, data masking, disaster recovery'
    sort_order: 5
    lessons:
      - id: 019e1a40-a117-7001-d001-f0a1b2c30117
        title: 'Bài 17: HIPAA Technical Safeguards — Checklist Triển khai'
        slug: bai-17-hipaa-technical-safeguards
        description: >-
          Checklist đầy đủ HIPAA Technical Safeguards, mapping từng requirement
          vào Quarkus/PostgreSQL/Keycloak implementation.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e1a40-a118-7001-d001-f0a1b2c30118
        title: 'Bài 18: Centralized Audit Trail — OpenTelemetry & ELK Stack'
        slug: bai-18-audit-trail-opentelemetry-elk
        description: >-
          OpenTelemetry cho Quarkus, distributed tracing, structured logging,
          ELK Stack, immutable log storage, compliance dashboards.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e1a40-a119-7001-d001-f0a1b2c30119
        title: 'Bài 19: Data Masking, Anonymization & De-identification'
        slug: bai-19-data-masking-anonymization
        description: >-
          HIPAA Safe Harbor de-identification, k-anonymity, pseudonymization,
          tokenization, PostgreSQL views và Quarkus response filters.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e1a40-a120-7001-d001-f0a1b2c30120
        title: 'Bài 20: Backup, Disaster Recovery & Business Continuity'
        slug: bai-20-backup-disaster-recovery
        description: >-
          Encrypted backup, pgBackRest, PITR, cross-region replication,
          RPO/RTO, ransomware protection, DR testing.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 'Phần 6: Production & Vận hành'
    description: 'Zero Trust, Container/K8s security, Pentest, Deploy production'
    sort_order: 6
    lessons:
      - id: 019e1a40-a121-7001-d001-f0a1b2c30121
        title: 'Bài 21: Zero Trust Architecture cho Hệ thống Y tế'
        slug: bai-21-zero-trust-architecture
        description: >-
          Triển khai Zero Trust: micro-segmentation, continuous verification,
          NIST SP 800-207, Keycloak + Istio + OPA.
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e1a40-a122-7001-d001-f0a1b2c30122
        title: 'Bài 22: Container & Kubernetes Security cho Healthcare'
        slug: bai-22-container-kubernetes-security
        description: >-
          Image scanning Trivy, Pod Security Standards, NetworkPolicies,
          External Secrets Operator, runtime security Falco, SBOM.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e1a40-a123-7001-d001-f0a1b2c30123
        title: 'Bài 23: Penetration Testing & Security Assessment'
        slug: bai-23-penetration-testing
        description: >-
          OWASP ZAP, SAST/DAST, dependency scanning, PostgreSQL/Keycloak
          security audit, API security testing, compliance report.
        duration_minutes: 150
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e1a40-a124-7001-d001-f0a1b2c30124
        title: 'Bài 24: Capstone — Deploy Healthcare Platform Production-Ready'
        slug: bai-24-capstone-deploy-production
        description: >-
          Dự án tổng hợp: deploy Healthcare Microservices Platform hoàn chỉnh
          trên Kubernetes với full HIPAA compliance — Patient, Appointment,
          Lab, Prescription Services trên Quarkus + PostgreSQL + Keycloak.
        duration_minutes: 300
        is_free: true
        sort_order: 24
        video_url: null
---

## Giới thiệu

**Xây dựng Hệ thống Y tế Microservices** là khóa học thực hành từng bước, hướng dẫn bạn xây dựng hệ thống thông tin y tế (HIS/EMR/LIS) hoàn chỉnh theo kiến trúc **Microservices**, sử dụng **Quarkus** (Java), **PostgreSQL** và **Keycloak** — tuân thủ chuẩn bảo mật **HIPAA** cao nhất.

Khác với các khóa học chỉ dạy lý thuyết bảo mật, series này **xây dựng hệ thống thực tế** từ đầu: thiết kế kiến trúc → xây dựng services → phân quyền → mã hóa → audit → deploy production. Mọi quyết định thiết kế đều tuân thủ tiêu chuẩn bảo mật y tế quốc tế.

### Bạn sẽ xây dựng gì?

- **Patient Service** — Quản lý hồ sơ bệnh nhân với RLS + column encryption
- **Clinical Service (EMR)** — Hồ sơ bệnh án điện tử, encounter, diagnosis
- **Lab Service (LIS)** — Xét nghiệm, kết quả, specimens
- **Appointment Service** — Đặt lịch khám, quản lý phòng khám
- **API Gateway** — Rate limiting, WAF, request validation
- **Keycloak IAM** — SSO, RBAC/ABAC, SMART on FHIR, MFA
- **Audit & Monitoring** — OpenTelemetry, ELK, pgAudit audit trail
- **Kubernetes Deployment** — mTLS, Zero Trust, production-ready

### Technology Stack

| Công nghệ | Phiên bản | Vai trò |
|-----------|-----------|---------|
| **Quarkus** | 3.x | Microservices framework (Java) |
| **PostgreSQL** | 16+ | Database — RLS, pgcrypto, pgAudit |
| **Keycloak** | 26.x | Identity & Access Management |
| **Apache Kafka** | 3.x | Event streaming, CDC |
| **Istio** | 1.x | Service mesh, mTLS |
| **Docker + K8s** | latest | Container orchestration |
| **HashiCorp Vault** | 1.x | Secrets & key management |
| **OpenTelemetry** | 1.x | Observability & distributed tracing |

### Yêu cầu kiến thức

- Java cơ bản & Quarkus framework
- PostgreSQL cơ bản (SQL, schema design)
- Docker & container concepts
- REST API & microservices architecture

### Ai nên học?

- **Backend Engineers** xây dựng hệ thống y tế
- **DevSecOps Engineers** triển khai bảo mật healthcare
- **Tech Leads** thiết kế kiến trúc cho bệnh viện/cơ sở y tế
- **Full-stack Developers** muốn hiểu bảo mật chuẩn HIPAA
