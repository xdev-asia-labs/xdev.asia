---
id: 019e1a40-a100-7001-d001-f0a1b2c30001
title: >-
  Building a Microservices Healthcare System — Quarkus, PostgreSQL, Keycloak
  with HIPAA standards
slug: xay-dung-he-thong-y-te-microservices
description: >-
  Step-by-step instructions for building a medical information system
  (HIS/EMR/LIS) with Microservices architecture using Quarkus, PostgreSQL and
  Keycloak. Compliant with HIPAA, HL7 FHIR, Zero Trust security standards. From
  architectural design, building services, decentralization, data encryption,
  audit logging to production deployment on Kubernetes. Each article has
  practical code, ready to be applied to hospitals and medical facilities.
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
  name: System architecture
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
    title: 'Part 1: Architecture & Platform'
    description: >-
      Medical system overview, Microservices architecture design, data
      classification and threat modeling
    sort_order: 1
    lessons:
      - id: 019e1a40-a101-7001-d001-f0a1b2c30101
        title: >-
          Lesson 1: Healthcare System Overview & Security Requirements — HIPAA,
          HL7 FHIR
        slug: bai-1-tong-quan-he-thong-y-te-yeu-cau-bao-mat
        description: >-
          Understand the overview of medical information systems (HIS/EMR/LIS),
          PHI/ePHI data, HIPAA standards, HL7 FHIR, Vietnam Cyber ​​Security
          Law. Determine requirements when building a security standard medical
          system.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e1a40-a102-7001-d001-f0a1b2c30102
        title: >-
          Lesson 2: Designing Microservices Architecture for Healthcare —
          Quarkus Stack Blueprint
        slug: bai-2-thiet-ke-kien-truc-microservices-y-te
        description: >-
          Design the overall architecture of Microservices medical system with
          Quarkus, PostgreSQL, Keycloak, Kafka. API Gateway, service mesh,
          network segmentation, DMZ design and architectural blueprint for
          HIS/EMR/LIS.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e1a40-a103-7001-d001-f0a1b2c30103
        title: 'Lesson 3: Health Data Classification (PHI/ePHI) & Risk Assessment'
        slug: bai-3-phan-loai-du-lieu-y-te-danh-gia-rui-ro
        description: >-
          Classify medical data according to sensitivity level, develop Data
          Classification Policy, Data Flow Mapping, Risk Assessment according to
          NIST SP 800-30.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e1a40-a104-7001-d001-f0a1b2c30104
        title: 'Lesson 4: Threat Modeling STRIDE/DREAD for Healthcare Systems'
        slug: bai-4-threat-modeling-stride-dread
        description: >-
          Apply STRIDE, DREAD scoring, Attack Trees to Microservices medical
          system. Build Security Requirements from threat model.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Identity & Access Management with Keycloak'
    description: 'Setup Keycloak, RBAC/ABAC decentralization, SMART on FHIR, MFA'
    sort_order: 2
    lessons:
      - id: 019e1a40-a105-7001-d001-f0a1b2c30105
        title: 'Lesson 5: Setup Keycloak Realm for Hospitals — Multi-tenancy'
        slug: bai-5-setup-keycloak-realm-benh-vien
        description: >-
          Design and setup Keycloak Realm for a multi-hospital medical system.
          Client configuration for HIS/EMR/LIS, User Profile, Patient Portal,
          session management and security defenses.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e1a40-a106-7001-d001-f0a1b2c30106
        title: 'Lesson 6: RBAC & ABAC Decentralization — Doctors, Nurses, Patients'
        slug: bai-6-phan-quyen-rbac-abac
        description: >-
          Deploying RBAC/ABAC for healthcare: role hierarchy, department-based
          access, Keycloak Authorization Services, break-the-glass emergency
          access.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e1a40-a107-7001-d001-f0a1b2c30107
        title: 'Lesson 7: SMART on FHIR — OAuth2/OIDC for Healthcare APIs'
        slug: bai-7-smart-on-fhir-oauth2-oidc
        description: >-
          Deploying SMART on FHIR with Keycloak: App Launch Framework, FHIR
          scopes, EHR Launch vs Standalone Launch, integrating HAPI FHIR Server
          on Quarkus.
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e1a40-a108-7001-d001-f0a1b2c30108
        title: 'Lesson 8: MFA, Passkeys & Emergency Access for Healthcare Workers'
        slug: bai-8-mfa-passkeys-emergency-access
        description: >-
          Implement MFA suitable for the medical environment: TOTP,
          WebAuthn/Passkeys, proximity badge, conditional MFA, Emergency Access
          procedure.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Building Data Layer — PostgreSQL for Healthcare'
    description: 'Database hardening, encryption, Row-Level Security, Audit Logging'
    sort_order: 3
    lessons:
      - id: 019e1a40-a109-7001-d001-f0a1b2c30109
        title: 'Lesson 9: PostgreSQL Security Hardening — Comprehensive Configuration'
        slug: bai-9-postgresql-security-hardening
        description: >-
          Hardening PostgreSQL for medical data: TLS, pg_hba.conf, role
          management, schema isolation, CIS Benchmark compliance.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e1a40-a110-7001-d001-f0a1b2c30110
        title: 'Lesson 10: Encrypting At-Rest & In-Transit Data with PostgreSQL'
        slug: bai-10-ma-hoa-du-lieu-postgresql
        description: >-
          TDE, pgcrypto, SSL/TLS, Key Management with HashiCorp Vault, envelope
          encryption for medical data.
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e1a40-a111-7001-d001-f0a1b2c30111
        title: 'Lesson 11: Row-Level Security & Column Encryption for PHI'
        slug: bai-11-row-level-security-column-encryption
        description: >-
          RLS policies for patient data isolation, department-based access,
          column-level encryption, RLS integration with Keycloak JWT in Quarkus.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e1a40-a112-7001-d001-f0a1b2c30112
        title: 'Lesson 12: Audit Logging & CDC with pgAudit + Debezium'
        slug: bai-12-audit-logging-cdc-pgaudit
        description: >-
          pgAudit, Change Data Capture with Debezium, immutable audit trail,
          compliance reporting from audit logs.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Building Microservices with Quarkus'
    description: 'Quarkus OIDC, API Gateway, end-to-end encryption, mTLS service mesh'
    sort_order: 4
    lessons:
      - id: 019e1a40-a113-7001-d001-f0a1b2c30113
        title: 'Lesson 13: Quarkus Security — OIDC, JWT Propagation & RBAC'
        slug: bai-13-quarkus-security-oidc-jwt-rbac
        description: >-
          Quarkus OIDC extension with Keycloak, Bearer Token auth, JWT
          claim-based authorization, @RolesAllowed, token propagation between
          services.
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e1a40-a114-7001-d001-f0a1b2c30114
        title: 'Lesson 14: API Gateway — Rate Limiting, Validation & WAF'
        slug: bai-14-api-gateway-rate-limiting-waf
        description: >-
          API Gateway security for healthcare: Kong/APISIX, rate limiting, JSON
          Schema validation, WAF rules, API versioning.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e1a40-a115-7001-d001-f0a1b2c30115
        title: 'Lesson 15: End-to-End Encryption in Microservices'
        slug: bai-15-ma-hoa-end-to-end-microservices
        description: >-
          Application-level encryption, envelope encryption, encrypted Kafka,
          field-level encryption in REST/gRPC, key rotation.
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e1a40-a116-7001-d001-f0a1b2c30116
        title: 'Lesson 16: mTLS, Service Mesh & Inter-Service Communication'
        slug: bai-16-mtls-service-mesh
        description: >-
          mTLS with Quarkus, Istio service mesh, cert-manager, Kubernetes
          NetworkPolicies, service-to-service authentication.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: Compliance, Audit & Data Protection'
    description: 'HIPAA compliance, audit trail, data masking, disaster recovery'
    sort_order: 5
    lessons:
      - id: 019e1a40-a117-7001-d001-f0a1b2c30117
        title: 'Lesson 17: HIPAA Technical Safeguards — Implementation Checklist'
        slug: bai-17-hipaa-technical-safeguards
        description: >-
          Full checklist of HIPAA Technical Safeguards, mapping each requirement
          into Quarkus/PostgreSQL/Keycloak implementation.
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e1a40-a118-7001-d001-f0a1b2c30118
        title: 'Lesson 18: Centralized Audit Trail — OpenTelemetry & ELK Stack'
        slug: bai-18-audit-trail-opentelemetry-elk
        description: >-
          OpenTelemetry for Quarkus, distributed tracing, structured logging,
          ELK Stack, immutable log storage, compliance dashboards.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e1a40-a119-7001-d001-f0a1b2c30119
        title: 'Lesson 19: Data Masking, Anonymization & De-identification'
        slug: bai-19-data-masking-anonymization
        description: >-
          HIPAA Safe Harbor de-identification, k-anonymity, pseudonymization,
          tokenization, PostgreSQL views and Quarkus response filters.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e1a40-a120-7001-d001-f0a1b2c30120
        title: 'Lesson 20: Backup, Disaster Recovery & Business Continuity'
        slug: bai-20-backup-disaster-recovery
        description: >-
          Encrypted backup, pgBackRest, PITR, cross-region replication, RPO/RTO,
          ransomware protection, DR testing.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 'Part 6: Production & Operation'
    description: 'Zero Trust, Container/K8s security, Pentest, Deploy production'
    sort_order: 6
    lessons:
      - id: 019e1a40-a121-7001-d001-f0a1b2c30121
        title: 'Lesson 21: Zero Trust Architecture for Healthcare Systems'
        slug: bai-21-zero-trust-architecture
        description: >-
          Deploying Zero Trust: micro-segmentation, continuous verification,
          NIST SP 800-207, Keycloak + Istio + OPA.
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e1a40-a122-7001-d001-f0a1b2c30122
        title: 'Lesson 22: Containers & Kubernetes Security for Healthcare'
        slug: bai-22-container-kubernetes-security
        description: >-
          Image scanning Trivy, Pod Security Standards, NetworkPolicies,
          External Secrets Operator, runtime security Falco, SBOM.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e1a40-a123-7001-d001-f0a1b2c30123
        title: 'Lesson 23: Penetration Testing & Security Assessment'
        slug: bai-23-penetration-testing
        description: >-
          OWASP ZAP, SAST/DAST, dependency scanning, PostgreSQL/Keycloak
          security audit, API security testing, compliance report.
        duration_minutes: 150
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e1a40-a124-7001-d001-f0a1b2c30124
        title: 'Lesson 24: Capstone — Deploy Healthcare Platform Production-Ready'
        slug: bai-24-capstone-deploy-production
        description: >-
          Comprehensive project: deploy complete Healthcare Microservices
          Platform on Kubernetes with full HIPAA compliance — Patient,
          Appointment, Lab, Prescription Services on Quarkus + PostgreSQL +
          Keycloak.
        duration_minutes: 300
        is_free: true
        sort_order: 24
        video_url: null
locale: en
---

## Introduction

**Building a Microservices Healthcare System** is a step-by-step, hands-on course that guides you through building a complete healthcare information system (HIS/EMR/LIS) following the **Microservices** architecture, using **Quarkus** (Java), **PostgreSQL** and **Keycloak** — compliant with the highest **HIPAA** security standards.

Unlike courses that only teach security theory, this series **builds a practical system** from scratch: architectural design → services building → decentralization → encryption → audit → deployment production. Every design decision complies with international medical security standards.

### What will you build?

- **Patient Service** — Manage patient records with RLS + column encryption
- **Clinical Service (EMR)** — Electronic medical records, encounters, diagnosis
- **Lab Service (LIS)** — Tests, results, specimens
- **Appointment Service** — Make appointment, manage clinic
- **API Gateway** — Rate limiting, WAF, request validation
- **Keycloak IAM** — SSO, RBAC/ABAC, SMART on FHIR, MFA
- **Audit & Monitoring** — OpenTelemetry, ELK, pgAudit audit trail
- **Kubernetes Deployment** — mTLS, Zero Trust, production-ready

### Technology Stack

| Technology | Version | Role |
|-----------|-----------|---------|
| **Quarkus** | 3.x | Microservices framework (Java) |
| **PostgreSQL** | 16+ | Database — RLS, pgcrypto, pgAudit |
| **Keycloak** | 26.x | Identity & Access Management |
| **Apache Kafka** | 3.x | Event streaming, CDC |
| **Istio** | 1.x | Service mesh, mTLS |
| **Docker + K8s** | latest | Container orchestration |
| **HashiCorp Vault** | 1.x | Secrets & key management |
| **OpenTelemetry** | 1.x | Observability & distributed tracing |

### Knowledge required

- Basic Java & Quarkus framework
- Basic PostgreSQL (SQL, schema design)
- Docker & container concepts
- REST API & microservices architecture

### Who should learn?

- **Backend Engineers** build medical systems
- **DevSecOps Engineers** implement healthcare security
- **Tech Leads** architectural design for hospitals/medical facilities
- **Full-stack Developers** want to understand HIPAA standard security
