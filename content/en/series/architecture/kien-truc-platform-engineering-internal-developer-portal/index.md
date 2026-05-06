---
id: 019d8a21-ca00-700a-d001-e1f2a3b4c5d6
title: Architecture Platform Engineering & Internal Developer Portal
slug: kien-truc-platform-engineering-internal-developer-portal
description: >-
  Comprehensive course on Platform Engineering and Internal Developer Portal
  (IDP). Includes Backstage, Service Catalog, Golden Paths, Self-service
  Infrastructure, Developer Experience (DX), CI/CD Platform, Environment
  Management, and Internal Tools. Platform design helps developers self-serve
  infrastructure, increase developer productivity, and reduce cognitive load.
  Case studies: Spotify (Backstage), Netflix, Airbnb. Updated 2026.
featured_image: uploads/2026/03/platform-engineering-series-banner-2026.png
level: intermediate
duration_hours: 70
lesson_count: 25
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: System architecture
  slug: kien-truc-he-thong
tags:
  - name: PlatformEngineering
    slug: platformengineering
  - name: IDP
    slug: idp
  - name: Backstage
    slug: backstage
  - name: DevEx
    slug: devex
  - name: CICD
    slug: cicd
  - name: Kubernetes
    slug: kubernetes
  - name: InfraAsCode
    slug: infraascode
  - name: SelfService
    slug: selfservice
  - name: GitOps
    slug: gitops
  - name: SRE
    slug: sre
  - name: GoldenPath
    slug: goldenpath
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Part 1: Platform Engineering Foundations'
    description: What is Platform Engineering?
    sort_order: 1
    lessons:
      - id: 019d8a21-ca01-70ca-d001-e1f2a3b4c501
        title: 'Lesson 1: Overview of Platform Engineering - Why, What & How'
        slug: bai-1-tong-quan-platform-engineering-why-what-how
        description: >-
          What is Platform Engineering? DevOps vs Platform Engineering. Internal
          Developer Platform (IDP) concept. Platform as a Product. Team
          Topologies for platform teams.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-ca02-70ca-d001-e1f2a3b4c502
        title: 'Lesson 2: Developer Experience (DX) - Measuring & Improving'
        slug: bai-2-developer-experience-dx-measuring-improving
        description: >-
          Developer Experience: cognitive load, flow state, feedback loops. DORA
          metrics, SPACE framework. Developer surveys. Onboarding time.
          Time-to-first-deploy.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-ca03-70ca-d001-e1f2a3b4c503
        title: 'Lesson 3: Platform Architecture Overview - Layers & Components'
        slug: bai-3-platform-architecture-overview-layers-components
        description: >-
          IDP architecture layers: UI Portal, API, orchestration, integration.
          Platform capabilities map. Build vs buy decisions. Platform maturity
          model.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Developer Portal'
    description: 'Spotify Backstage: architecture, plugins, catalog'
    sort_order: 2
    lessons:
      - id: 019d8a21-ca04-70ca-d001-e1f2a3b4c504
        title: 'Lesson 4: Backstage - Internal Developer Portal'
        slug: bai-4-backstage-internal-developer-portal
        description: >-
          Spotify Backstage: architecture, plugins, catalog. Software catalog:
          components, APIs, resources. TechDocs integration. Customization and
          plugin development.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-ca05-70ca-d001-e1f2a3b4c505
        title: 'Lesson 5: Service Catalog & Software Templates'
        slug: bai-5-service-catalog-software-templates
        description: >-
          Service catalog: register, discover, manage services. Software
          templates (scaffolder): golden paths for new services. Template
          customization. API documentation.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-ca06-70ca-d001-e1f2a3b4c506
        title: 'Lesson 6: API Portal & Documentation'
        slug: bai-6-api-portal-documentation
        description: >-
          API catalog: discovery, documentation, versioning.
          OpenAPI/AsyncAPI/GraphQL specs. API governance. Automated API docs
          generation. API health monitoring.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-ca07-70ca-d001-e1f2a3b4c507
        title: 'Lesson 7: Golden Paths & Paved Roads'
        slug: bai-7-golden-paths-paved-roads
        description: >-
          Golden paths: opinionated default workflows. Paved roads vs
          guardrails. Service creation golden path. Deployment golden path.
          Incident response golden path.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: Self-service Infrastructure'
    description: 'Self-service infrastructure: request → approve → provision → manage'
    sort_order: 3
    lessons:
      - id: 019d8a21-ca08-70ca-d001-e1f2a3b4c508
        title: 'Lesson 8: Self-service Infrastructure - Provisioning & Management'
        slug: bai-8-self-service-infrastructure-provisioning-management
        description: >-
          Self-service infrastructure: request → approve → provision → manage.
          Infrastructure abstraction layers. Resource catalog. Cost visibility
          per request.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-ca09-70ca-d001-e1f2a3b4c509
        title: 'Lesson 9: Infrastructure as Code - Terraform, Crossplane & Pulumi'
        slug: bai-9-infrastructure-as-code-terraform-crossplane-pulumi
        description: >-
          IaC platforms: Terraform modules, Crossplane compositions, Pulumi
          programs. Platform abstractions over raw IaC. Self-service with
          guardrails. State management.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-ca10-70ca-d001-e1f2a3b4c510
        title: 'Lesson 10: Environment Management - Dev, Staging, Production'
        slug: bai-10-environment-management-dev-staging-production
        description: >-
          Environment management: ephemeral environments, preview environments.
          Environment parity. Namespace-based isolation. Cost optimization for
          dev/staging.
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-ca11-70ca-d001-e1f2a3b4c511
        title: 'Lesson 11: Database & Middleware Self-service'
        slug: bai-11-database-middleware-self-service
        description: >-
          Database provisioning: PostgreSQL, Redis, Kafka as self-service.
          Operators patterns. Backup automation. Schema migration. Connection
          management.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Part 4: CI/CD Platform'
    description: 'CI/CD platform: shared pipelines, reusable workflows'
    sort_order: 4
    lessons:
      - id: 019d8a21-ca12-70ca-d001-e1f2a3b4c512
        title: 'Lesson 12: CI/CD Platform Architecture - Pipeline as Code'
        slug: bai-12-cicd-platform-architecture-pipeline-as-code
        description: >-
          CI/CD platform: shared pipelines, reusable workflows. GitHub Actions,
          GitLab CI, Tekton. Pipeline templates. Build caching. Artifact
          management.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-ca13-70ca-d001-e1f2a3b4c513
        title: 'Lesson 13: GitOps & Deployment Automation'
        slug: bai-13-gitops-deployment-automation
        description: >-
          GitOps: ArgoCD, Flux. Deployment strategies: blue-green, canary,
          progressive. Rollback automation. Environmental promotion. Drift
          detection.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-ca14-70ca-d001-e1f2a3b4c514
        title: 'Lesson 14: Containers & Image Management'
        slug: bai-14-container-image-management
        description: >-
          Container registry (Harbor). Image scanning & signing (Cosign). Base
          image management. Multi-arch builds. Image promotion pipeline. SBOM
          generation.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-ca15-70ca-d001-e1f2a3b4c515
        title: 'Lesson 15: Testing Platform - Shift-left & Quality Gates'
        slug: bai-15-testing-platform-shift-left-quality-gates
        description: >-
          Testing infrastructure: test environments, test data management.
          Quality gates: code coverage, security scan, performance testing.
          Flaky test detection.
        duration_minutes: 90
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'Part 5: Security & Compliance Platform'
    description: 'Security platform: OPA/Gatekeeper, Kyverno'
    sort_order: 5
    lessons:
      - id: 019d8a21-ca16-70ca-d001-e1f2a3b4c516
        title: 'Lesson 16: Security Platform - Policy as Code'
        slug: bai-16-security-platform-policy-as-code
        description: >-
          Security platform: OPA/Gatekeeper, Kyverno. Policy as Code. Automated
          compliance checks. Vulnerability management platform. Secret
          management (Vault).
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-ca17-70ca-d001-e1f2a3b4c517
        title: 'Lesson 17: Supply Chain Security - SBOM & SLSA'
        slug: bai-17-supply-chain-security-sbom-slsa
        description: >-
          Software supply chain security. SBOM (Software Bill of Materials).
          SLSA framework. Dependency scanning. Signed builds. Provenance
          verification.
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-ca18-70ca-d001-e1f2a3b4c518
        title: 'Lesson 18: Cost Management & FinOps Platform'
        slug: bai-18-cost-management-finops-platform
        description: >-
          Cloud cost management: cost allocation per team/service. FinOps
          practices. Budget alerts. Resource right-sizing. Spot instance
          management. Showback/chargeback.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Part 6: Observability Platform'
    description: 'Unified observability: OpenTelemetry, Prometheus, Grafana, Loki, Tempo'
    sort_order: 6
    lessons:
      - id: 019d8a21-ca19-70ca-d001-e1f2a3b4c519
        title: 'Lesson 19: Observability Platform - Metrics, Logs & Traces'
        slug: bai-19-observability-platform-metrics-logs-traces
        description: >-
          Unified observability: OpenTelemetry, Prometheus, Grafana, Loki,
          Tempo. Self-service dashboards. Alert routing. On-call management
          integration.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-ca20-70ca-d001-e1f2a3b4c520
        title: 'Lesson 20: SRE Platform - SLO, Error Budgets & Incident Management'
        slug: bai-20-sre-platform-slo-error-budgets-incident-management
        description: >-
          SRE practices: SLI/SLO/SLA definition. Error budget tracking. Incident
          management platform. Postmortem automation. Chaos engineering
          integration.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-ca21-70ca-d001-e1f2a3b4c521
        title: 'Lesson 21: Logging & Audit Platform'
        slug: bai-21-logging-audit-platform
        description: >-
          Centralized logging: ELK/EFK, Loki. Log aggregation at scale. Audit
          logging platform. Log-based alerting. Compliance logging requirements.
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'Part 7: Production & Case Studies'
    description: 'Platform team structure: team topologies, enabling teams'
    sort_order: 7
    lessons:
      - id: 019d8a21-ca22-70ca-d001-e1f2a3b4c522
        title: 'Lesson 22: Platform Team Organization & Operating Model'
        slug: bai-22-platform-team-organization-operating-model
        description: >-
          Platform team structure: team topologies, enabling teams. Platform
          product management. User research for internal tools. Platform
          adoption strategy.
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-ca23-70ca-d001-e1f2a3b4c523
        title: 'Lesson 23: Platform Migration & Adoption'
        slug: bai-23-platform-migration-adoption
        description: >-
          Migrating to new platform: phased adoption, incentives. Legacy systems
          integration. Measuring platform adoption. Community building.
          Documentation.
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-ca24-70ca-d001-e1f2a3b4c524
        title: 'Lesson 24: Measuring Platform Success - Metrics & ROI'
        slug: bai-24-measuring-platform-success-metrics-roi
        description: >-
          Platform success metrics: developer satisfaction, deployment
          frequency, lead time. ROI calculation. Platform maturity assessment.
          Continuous improvement.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-ca25-70ca-d001-e1f2a3b4c525
        title: 'Lesson 25: Case Studies - Spotify, Netflix, Airbnb & Mercado Libre'
        slug: bai-25-case-studies-spotify-netflix-airbnb-mercado-libre
        description: >-
          Actual platform engineering analysis: Spotify (Backstage origin),
          Netflix (full cycle dev), Airbnb (service mesh), Mercado Libre
          (platform at scale). Lessons learned.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: en
---

