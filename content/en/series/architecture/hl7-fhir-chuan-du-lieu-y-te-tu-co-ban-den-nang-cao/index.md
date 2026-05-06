---
id: 019e0a10-a100-7001-d001-f1a7f8000001
title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
description: >-
  Comprehensive course on the HL7 FHIR (Fast Healthcare Interoperability
  Resources) data standard in healthcare — from theoretical foundation to
  practical implementation. Covers HL7 history (v2, v3, CDA), FHIR R5
  architecture, Core Resources (Patient, Observation, Encounter, Medication,
  DiagnosticReport), RESTful API (CRUD, Search, Bundle, Transaction), Data
  Types, Terminologies (ICD-10, SNOMED CT, LOINC), Profiles & Extensions, SMART
  on FHIR, FHIR Subscriptions, building FHIR Server with FHIR HAPI (Java/Spring
  Boot), integration with EMR/HIS, Security & Privacy systems (HIPAA, GDPR), and
  practical applications in Vietnam (Circular 54/2017/TT-BYT, VNEID, Social
  Insurance). Updated to FHIR R5 (v5.0.0), the latest official version from HL7
  International.
featured_image: uploads/2026/03/hl7-fhir-series-banner.png
level: beginner
duration_hours: 100
lesson_count: 25
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T14:00:00.000000Z'
created_at: '2026-03-30T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat7-7007-a007-000000000007
  name: System architecture
  slug: architecture
tags:
  - name: HL7
    slug: hl7
  - name: FHIR
    slug: fhir
  - name: healthcare
    slug: healthcare
  - name: interoperability
    slug: interoperability
  - name: y-te
    slug: y-te
  - name: EMR
    slug: emr
  - name: HIS
    slug: his
  - name: HAPI-FHIR
    slug: hapi-fhir
  - name: REST-API
    slug: rest-api
  - name: ICD-10
    slug: icd-10
  - name: SNOMED-CT
    slug: snomed-ct
  - name: LOINC
    slug: loinc
  - name: SMART-on-FHIR
    slug: smart-on-fhir
  - name: HandsOn
    slug: handson
  - name: security
    slug: security
  - name: Java
    slug: java
  - name: Spring Boot
    slug: spring-boot
sections:
  - id: section-01
    title: 'Part 1: HL7 and FHIR Platform'
    description: >-
      History of medical data standards, FHIR R5 overview, development
      environment settings
    sort_order: 1
    lessons:
      - id: 019e0a10-a101-7001-d001-f1a7f8000101
        title: 'Lesson 1: Introduction to HL7 and history of medical data standards'
        slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
        description: >-
          Learn what HL7 International is, the history of developing healthcare
          data standards (HL7 v2, HL7 v3/RIM, CDA), why medical data
          standardization is needed, interoperability challenges in healthcare,
          and how FHIR was born to address the limitations of previous
          standards.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a10-a102-7001-d001-f1a7f8000102
        title: 'Lesson 2: Overview of FHIR R5 - Architecture and design principles'
        slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
        description: >-
          FHIR architecture (Resources, Data Types, Extensibility, RESTful API,
          Messaging, Documents), 80/20 design principles, FHIR Maturity Model
          (FMM), comparison of FHIR R4 vs R5, modules in specification
          (Foundation, Conformance, Terminology, Clinical, Financial).
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0a10-a103-7001-d001-f1a7f8000103
        title: 'Lesson 3: Install the FHIR development environment'
        slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
        description: >-
          Install HAPI FHIR Server (Docker), public FHIR Test Server, Postman
          Collection for FHIR, FHIR Shorthand (FSH) and SUSHI, VS Code
          extensions for FHIR, test the first CRUD operations.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Core FHIR Resources'
    description: 'Learn more about administrative, clinical, drug and diagnostic Resources'
    sort_order: 2
    lessons:
      - id: 019e0a10-a201-7001-d001-f1a7f8000201
        title: >-
          Lesson 4: Patient, Practitioner, Organization - Administrative
          Resources
        slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
        description: >-
          Resource Patient details (demographics, identifiers, contact, link),
          Practitioner and PractitionerRole, Organization, Location, Endpoint.
          Practice creating, reading, and updating Patients on FHIR Server.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a10-a202-7001-d001-f1a7f8000202
        title: 'Lesson 5: Encounter, Condition, Observation - Clinical Resources'
        slug: bai-5-encounter-condition-observation-resources-lam-sang
        description: >-
          Resource Encounter (visits, hospitalizations), Condition (diagnosis,
          health problems), Observation (vital signs, lab results, social
          history). How to link Resources together through References,
          Observation categories, Condition staging.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a10-a203-7001-d001-f1a7f8000203
        title: 'Lesson 6: Medication, MedicationRequest, Immunization - Drug resources'
        slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
        description: >-
          Medication management in FHIR: Medication, MedicationRequest
          (prescription), MedicationAdministration, MedicationDispense,
          MedicationStatement. Immunization (vaccination), linked to drug
          CodeSystem (RxNorm, ATC).
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e0a10-a204-7001-d001-f1a7f8000204
        title: >-
          Lesson 7: DiagnosticReport, Procedure, AllergyIntolerance - Diagnostic
          Resources
        slug: >-
          bai-7-diagnosticreport-procedure-allergyintolerance-resources-chan-doan
        description: >-
          DiagnosticReport (test results, images), Procedure (procedure,
          surgery), AllergyIntolerance (allergy), ServiceRequest (service
          request), Specimen (specimen). Diagnostic workflow from requirements
          to results.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: FHIR RESTful API and Data Exchange'
    description: 'Advanced REST, Bundle, Transaction, Search interactions'
    sort_order: 3
    lessons:
      - id: 019e0a10-a301-7001-d001-f1a7f8000301
        title: 'Lesson 8: FHIR RESTful API - CRUD, Search, History and Versioning'
        slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
        description: >-
          Details of REST interactions: create (POST), read (GET), update (PUT),
          patch (PATCH), delete (DELETE), vread, history. Content negotiation
          (JSON/XML), ETag, If-Match, Conditional operations,
          CapabilityStatement.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a10-a302-7001-d001-f1a7f8000302
        title: 'Lesson 9: Bundle, Transaction and Batch - Handling multiple Resources'
        slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
        description: >-
          Resource Bundle and types (searchset, transaction, batch, document,
          message, collection, history). Transaction processing rules, atomic
          operations, conditional references, batch processing, practice
          creating transaction bundles.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a10-a303-7001-d001-f1a7f8000303
        title: 'Lesson 10: Search Parameters and advanced search'
        slug: bai-10-search-parameters-va-tim-kiem-nang-cao
        description: >-
          Search parameter types (string, token, reference, date, number,
          quantity, uri), modifiers (:exact, :contains, :missing, :not),
          chaining, reverse chaining (_has), _include, _revinclude, _summary,
          _elements, _count, paging, Composite search parameters, custom
          SearchParameter.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Part 4: Data Types, Terminologies and Profiles'
    description: 'Data types, medical coding system, Profiles and Extensions'
    sort_order: 4
    lessons:
      - id: 019e0a10-a401-7001-d001-f1a7f8000401
        title: 'Lesson 11: FHIR Data Types - Primitive, Complex and Special'
        slug: bai-11-fhir-data-types-primitive-complex-va-special
        description: >-
          Primitive types (boolean, string, uri, date, dateTime, instant,
          decimal, integer), Complex types (HumanName, Address, ContactPoint,
          Identifier, CodeableConcept, Coding, Quantity, Period, Reference,
          Narrative), BackboneElement, Element. Extensions on data types.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a10-a402-7001-d001-f1a7f8000402
        title: 'Lesson 12: Terminologies - CodeSystem, ValueSet, ConceptMap'
        slug: bai-12-terminologies-codesystem-valueset-conceptmap
        description: >-
          Medical terminology system: ICD-10 (diagnosis), SNOMED CT (clinical),
          LOINC (laboratory), RxNorm (drug), CPT (procedure), ATC (drug
          classification). CodeSystem, ValueSet, ConceptMap in FHIR. Terminology
          binding (required, extensible, preferred, example). $validate-code,
          $expand, $lookup.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a10-a403-7001-d001-f1a7f8000403
        title: 'Lesson 13: Profiles, Extensions and Implementation Guides'
        slug: bai-13-profiles-extensions-va-implementation-guides
        description: >-
          StructureDefinition, create Profile to bind Resource, Extensions
          (simple, complex, modifier), Slicing, Invariants (FHIRPath
          constraints). Implementation Guide (IG), IG Publisher, US Core Profile
          as an example, International Patient Summary (IPS). FHIR Shorthand
          (FSH).
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'Part 5: Integration, Messaging and Security'
    description: 'Documents, Messaging, Subscriptions, SMART on FHIR, security'
    sort_order: 5
    lessons:
      - id: 019e0a10-a501-7001-d001-f1a7f8000501
        title: 'Lesson 14: FHIR Documents and Messaging'
        slug: bai-14-fhir-documents-va-messaging
        description: >-
          FHIR Documents (Composition resource, Document Bundle, signatures),
          FHIR Messaging (MessageHeader, MessageDefinition, message events),
          compare REST vs Messaging vs Documents, use cases for each paradigm.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a10-a502-7001-d001-f1a7f8000502
        title: 'Lesson 15: FHIR Subscriptions and Real-time Notifications'
        slug: bai-15-fhir-subscriptions-va-real-time-notifications
        description: >-
          Topic-based Subscriptions (R5), SubscriptionTopic, Subscription
          resource, notification channels (rest-hook, websocket, email),
          notification types (handshake, heartbeat, event-notification),
          filters, payload content. Practice configuring Subscription on HAPI
          FHIR Server.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e0a10-a503-7001-d001-f1a7f8000503
        title: 'Lesson 16: SMART on FHIR - OAuth2 and medical applications'
        slug: bai-16-smart-on-fhir-oauth2-va-ung-dung-y-te
        description: >-
          SMART App Launch Framework, OAuth 2.0 in healthcare, clinical scopes,
          launch context (EHR launch, standalone launch), SMART Backend Services
          (system-to-system), CDS Hooks (Clinical Decision Support). Practice
          creating simple SMART apps.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a10-a504-7001-d001-f1a7f8000504
        title: 'Lesson 17: Security, Privacy and Consent in FHIR'
        slug: bai-17-security-privacy-va-consent-trong-fhir
        description: >-
          FHIR Security labels, AuditEvent resource, Provenance resource,
          Consent framework, RBAC/ABAC in FHIR, medical data encryption, HIPAA
          compliance, GDPR, Vietnam medical security regulations, security best
          practices for FHIR Server.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'Part 6: Practice - Building the FHIR system'
    description: 'Hands-on building FHIR Server, Client, Implementation Guide'
    sort_order: 6
    lessons:
      - id: 019e0a10-a601-7001-d001-f1a7f8000601
        title: 'Lesson 18: Hands-on - Building FHIR Server with HAPI FHIR'
        slug: bai-18-hands-on-xay-dung-fhir-server-voi-hapi-fhir
        description: >-
          Build FHIR Server production-ready with HAPI FHIR JPA Server (Spring
          Boot), PostgreSQL configuration, indexing, validation, interceptors,
          custom operations, bulk data export ($export), Docker deployment.
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e0a10-a602-7001-d001-f1a7f8000602
        title: 'Lesson 19: Hands-on - FHIR Client and application integration'
        slug: bai-19-hands-on-fhir-client-va-tich-hop-ung-dung
        description: >-
          HAPI FHIR Client (Java), fhir.js (JavaScript/TypeScript), Python
          fhirclient. Integrate FHIR into web and mobile applications. Fluent
          Client API, Generic Client, handling errors, retry, pagination.
          Practice: simple patient management app.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a10-a603-7001-d001-f1a7f8000603
        title: 'Lesson 20: Hands-on - Developing an Implementation Guide for Vietnam'
        slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
        description: >-
          Create Vietnam FHIR Implementation Guide: VN-Core-Patient profile
          (CCCD, health insurance, Vietnamese address), VN-Core-Organization
          (health insurance facility code), VN-Core-Encounter (health insurance
          examination type code). Use FSH + SUSHI + IG Publisher. Publish IG to
          FHIR Registry.
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a10-a604-7001-d001-f1a7f8000604
        title: 'Lesson 21: Hands-on - Integrating FHIR with actual EMR/HIS'
        slug: bai-21-hands-on-tich-hop-fhir-voi-emr-his-thuc-te
        description: >-
          FHIR integration architecture with existing EMR/HIS system, FHIR
          Facade pattern, data mapping from legacy database to FHIR, HL7 v2 to
          FHIR conversion, CDA to FHIR mapping, ETL pipeline for FHIR data
          warehouse.
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'Part 7: Production, Scale and Future'
    description: 'Production deployment, Vietnamese context, case studies, future trends'
    sort_order: 7
    lessons:
      - id: 019e0a10-a701-7001-d001-f1a7f8000701
        title: 'Lesson 22: FHIR Performance, Scalability and Monitoring'
        slug: bai-22-fhir-performance-scalability-va-monitoring
        description: >-
          Optimize FHIR Server performance (indexing, caching, bulk operations),
          horizontal scaling, load balancing, database optimization, monitoring
          with Prometheus/Grafana, logging, Bulk Data Access ($export), FHIR nFD
          (near-real-time data pipeline).
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e0a10-a702-7001-d001-f1a7f8000702
        title: 'Lesson 23: FHIR in the context of Vietnamese Health'
        slug: bai-23-fhir-trong-boi-canh-y-te-viet-nam
        description: >-
          Current status of Vietnamese healthcare digitalization, Circular
          54/2017/TT-BYT (data interoperability), Circular 46/2018/TT-BYT
          (electronic medical records), VNEID and identity authentication,
          social insurance data interoperability, roadmap for applying FHIR in
          Vietnam, barriers and solutions.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e0a10-a703-7001-d001-f1a7f8000703
        title: 'Lesson 24: Case Studies - US Core, IPS and practical implementation'
        slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
        description: >-
          Analyze US Core Implementation Guide, International Patient Summary
          (IPS), UK NHS Digital, Australia AU Base. Lessons from practical
          implementation, FHIR Connectathon, testing and certification.
          Interoperability Roadmap.
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e0a10-a704-7001-d001-f1a7f8000704
        title: 'Lesson 25: The future of FHIR - R6, AI/ML, Genomics and new trends'
        slug: bai-25-tuong-lai-fhir-r6-ai-ml-genomics-va-xu-huong-moi
        description: >-
          FHIR R6 roadmap, FHIR and AI/ML (CDS Hooks, clinical reasoning),
          Genomics in FHIR, FHIR Bulk Data for population health, FHIR and
          IoT/wearables, Patient-Generated Health Data (PGHD), Digital Twins in
          healthcare, summary and further learning roadmap.
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
locale: en
---

## Introducing the Series

**HL7 FHIR (Fast Healthcare Interoperability Resources)** is a new generation medical data standard developed by HL7 International — the world's leading medical standards organization. FHIR is quickly becoming a mandatory standard in many countries (US, UK, Australia, EU) and is the foundation for global healthcare digitalization.

This series is designed to help you:

- **Understand the foundation**: History of HL7, why it is necessary to standardize medical data, FHIR architecture
- **Master Resources**: All core Resources (Patient, Observation, Encounter, Medication...)
- **API proficiency**: RESTful API, Search, Bundle, Transaction, Messaging
- **FHIR Customization**: Data Types, Terminologies (ICD-10, SNOMED CT, LOINC), Profiles, Extensions
- **Integration & security**: SMART on FHIR, OAuth2, Security labels, Consent
- **Practical practice**: Building FHIR Server (HAPI FHIR), Client apps, Implementation Guide
- **Applicable in Vietnam**: Circular 54/2017, linking social insurance, VNEID, VN FHIR Profile

### Target audience

- Developers want to build a medical system according to international standards
- Software architect (Solution Architect) in the field of Healthcare IT
- Business Analysts, Project Managers want to understand medical data standards
- Healthcare managers, IT doctors want to understand about interoperability
- Health IT and Biomedical students

### Prerequisites

- Basic knowledge of REST API and HTTP
- Know how to read JSON/XML
- Have basic programming knowledge (Java/Python/JavaScript — depending on practice)
- Does not require in-depth medical knowledge (will be explained in the article)
