---
id: 019e0a10-a100-7001-d001-f1a7f8000001
title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
description: >-
  Khóa học toàn diện về chuẩn dữ liệu HL7 FHIR (Fast Healthcare Interoperability
  Resources) trong y tế — từ nền tảng lý thuyết đến thực hành triển khai.
  Bao gồm lịch sử HL7 (v2, v3, CDA), kiến trúc FHIR R5, Resources cốt lõi
  (Patient, Observation, Encounter, Medication, DiagnosticReport), RESTful API
  (CRUD, Search, Bundle, Transaction), Data Types, Terminologies (ICD-10,
  SNOMED CT, LOINC), Profiles & Extensions, SMART on FHIR, FHIR Subscriptions,
  xây dựng FHIR Server với HAPI FHIR (Java/Spring Boot), tích hợp với hệ thống
  EMR/HIS, Security & Privacy (HIPAA, GDPR), và ứng dụng thực tế tại Việt Nam
  (Thông tư 54/2017/TT-BYT, VNEID, BHXH). Cập nhật theo FHIR R5 (v5.0.0),
  phiên bản chính thức mới nhất từ HL7 International.
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
  name: Kiến trúc hệ thống
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
    title: 'Phần 1: Nền tảng HL7 và FHIR'
    description: 'Lịch sử chuẩn dữ liệu y tế, tổng quan FHIR R5, cài đặt môi trường phát triển'
    sort_order: 1
    lessons:
      - id: 019e0a10-a101-7001-d001-f1a7f8000101
        title: 'Bài 1: Giới thiệu HL7 và lịch sử chuẩn dữ liệu y tế'
        slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
        description: >-
          Tìm hiểu HL7 International là gì, lịch sử phát triển chuẩn dữ liệu y tế
          (HL7 v2, HL7 v3/RIM, CDA), tại sao cần chuẩn hóa dữ liệu y tế,
          các thách thức interoperability trong healthcare, và cách FHIR ra đời
          để giải quyết các hạn chế của các chuẩn trước đó.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a10-a102-7001-d001-f1a7f8000102
        title: 'Bài 2: Tổng quan FHIR R5 - Kiến trúc và nguyên tắc thiết kế'
        slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
        description: >-
          Kiến trúc FHIR (Resources, Data Types, Extensibility, RESTful API,
          Messaging, Documents), nguyên tắc thiết kế 80/20, FHIR Maturity Model (FMM),
          so sánh FHIR R4 vs R5, các modules trong specification
          (Foundation, Conformance, Terminology, Clinical, Financial).
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0a10-a103-7001-d001-f1a7f8000103
        title: 'Bài 3: Cài đặt môi trường phát triển FHIR'
        slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
        description: >-
          Cài đặt HAPI FHIR Server (Docker), FHIR Test Server công khai,
          Postman Collection cho FHIR, FHIR Shorthand (FSH) và SUSHI,
          VS Code extensions cho FHIR, chạy thử các thao tác CRUD đầu tiên.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: FHIR Resources cốt lõi'
    description: 'Tìm hiểu chi tiết các Resources hành chính, lâm sàng, thuốc và chẩn đoán'
    sort_order: 2
    lessons:
      - id: 019e0a10-a201-7001-d001-f1a7f8000201
        title: 'Bài 4: Patient, Practitioner, Organization - Resources hành chính'
        slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
        description: >-
          Chi tiết Resource Patient (demographics, identifiers, contact, link),
          Practitioner và PractitionerRole, Organization, Location, Endpoint.
          Thực hành tạo, đọc, cập nhật Patient trên FHIR Server.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a10-a202-7001-d001-f1a7f8000202
        title: 'Bài 5: Encounter, Condition, Observation - Resources lâm sàng'
        slug: bai-5-encounter-condition-observation-resources-lam-sang
        description: >-
          Resource Encounter (lượt khám, nhập viện), Condition (chẩn đoán, vấn đề sức khỏe),
          Observation (vital signs, lab results, social history). Cách liên kết
          Resources với nhau qua References, Observation categories, Condition staging.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a10-a203-7001-d001-f1a7f8000203
        title: 'Bài 6: Medication, MedicationRequest, Immunization - Resources thuốc'
        slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
        description: >-
          Quản lý thuốc trong FHIR: Medication, MedicationRequest (đơn thuốc),
          MedicationAdministration, MedicationDispense, MedicationStatement.
          Immunization (tiêm chủng), liên kết với CodeSystem thuốc (RxNorm, ATC).
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e0a10-a204-7001-d001-f1a7f8000204
        title: 'Bài 7: DiagnosticReport, Procedure, AllergyIntolerance - Resources chẩn đoán'
        slug: bai-7-diagnosticreport-procedure-allergyintolerance-resources-chan-doan
        description: >-
          DiagnosticReport (kết quả xét nghiệm, hình ảnh), Procedure (thủ thuật, phẫu thuật),
          AllergyIntolerance (dị ứng), ServiceRequest (yêu cầu dịch vụ),
          Specimen (mẫu bệnh phẩm). Workflow chẩn đoán từ yêu cầu đến kết quả.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Phần 3: FHIR RESTful API và Data Exchange'
    description: 'Tương tác REST, Bundle, Transaction, Search nâng cao'
    sort_order: 3
    lessons:
      - id: 019e0a10-a301-7001-d001-f1a7f8000301
        title: 'Bài 8: FHIR RESTful API - CRUD, Search, History và Versioning'
        slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
        description: >-
          Chi tiết các tương tác REST: create (POST), read (GET), update (PUT),
          patch (PATCH), delete (DELETE), vread, history. Content negotiation
          (JSON/XML), ETag, If-Match, Conditional operations, CapabilityStatement.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a10-a302-7001-d001-f1a7f8000302
        title: 'Bài 9: Bundle, Transaction và Batch - Xử lý nhiều Resources'
        slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
        description: >-
          Resource Bundle và các loại (searchset, transaction, batch, document, message,
          collection, history). Transaction processing rules, atomic operations,
          conditional references, batch processing, thực hành tạo transaction bundle.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a10-a303-7001-d001-f1a7f8000303
        title: 'Bài 10: Search Parameters và tìm kiếm nâng cao'
        slug: bai-10-search-parameters-va-tim-kiem-nang-cao
        description: >-
          Search parameter types (string, token, reference, date, number, quantity, uri),
          modifiers (:exact, :contains, :missing, :not), chaining, reverse chaining (_has),
          _include, _revinclude, _summary, _elements, _count, paging,
          Composite search parameters, custom SearchParameter.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Phần 4: Data Types, Terminologies và Profiles'
    description: 'Kiểu dữ liệu, hệ thống mã y tế, Profiles và Extensions'
    sort_order: 4
    lessons:
      - id: 019e0a10-a401-7001-d001-f1a7f8000401
        title: 'Bài 11: FHIR Data Types - Primitive, Complex và Special'
        slug: bai-11-fhir-data-types-primitive-complex-va-special
        description: >-
          Primitive types (boolean, string, uri, date, dateTime, instant, decimal, integer),
          Complex types (HumanName, Address, ContactPoint, Identifier, CodeableConcept,
          Coding, Quantity, Period, Reference, Narrative), BackboneElement, Element.
          Extensions trên data types.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a10-a402-7001-d001-f1a7f8000402
        title: 'Bài 12: Terminologies - CodeSystem, ValueSet, ConceptMap'
        slug: bai-12-terminologies-codesystem-valueset-conceptmap
        description: >-
          Hệ thống thuật ngữ y tế: ICD-10 (chẩn đoán), SNOMED CT (lâm sàng),
          LOINC (xét nghiệm), RxNorm (thuốc), CPT (thủ thuật), ATC (phân loại thuốc).
          CodeSystem, ValueSet, ConceptMap trong FHIR. Terminology binding
          (required, extensible, preferred, example). $validate-code, $expand, $lookup.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a10-a403-7001-d001-f1a7f8000403
        title: 'Bài 13: Profiles, Extensions và Implementation Guides'
        slug: bai-13-profiles-extensions-va-implementation-guides
        description: >-
          StructureDefinition, tạo Profile để ràng buộc Resource, Extensions
          (simple, complex, modifier), Slicing, Invariants (FHIRPath constraints).
          Implementation Guide (IG), IG Publisher, US Core Profile làm ví dụ,
          International Patient Summary (IPS). FHIR Shorthand (FSH).
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'Phần 5: Tích hợp, Messaging và Security'
    description: 'Documents, Messaging, Subscriptions, SMART on FHIR, bảo mật'
    sort_order: 5
    lessons:
      - id: 019e0a10-a501-7001-d001-f1a7f8000501
        title: 'Bài 14: FHIR Documents và Messaging'
        slug: bai-14-fhir-documents-va-messaging
        description: >-
          FHIR Documents (Composition resource, Document Bundle, signatures),
          FHIR Messaging (MessageHeader, MessageDefinition, message events),
          so sánh REST vs Messaging vs Documents, use cases cho từng paradigm.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a10-a502-7001-d001-f1a7f8000502
        title: 'Bài 15: FHIR Subscriptions và Real-time Notifications'
        slug: bai-15-fhir-subscriptions-va-real-time-notifications
        description: >-
          Topic-based Subscriptions (R5), SubscriptionTopic, Subscription resource,
          notification channels (rest-hook, websocket, email), notification types
          (handshake, heartbeat, event-notification), filters, payload content.
          Thực hành cấu hình Subscription trên HAPI FHIR Server.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e0a10-a503-7001-d001-f1a7f8000503
        title: 'Bài 16: SMART on FHIR - OAuth2 và ứng dụng y tế'
        slug: bai-16-smart-on-fhir-oauth2-va-ung-dung-y-te
        description: >-
          SMART App Launch Framework, OAuth 2.0 trong healthcare, clinical scopes,
          launch context (EHR launch, standalone launch), SMART Backend Services
          (system-to-system), CDS Hooks (Clinical Decision Support).
          Thực hành tạo SMART app đơn giản.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a10-a504-7001-d001-f1a7f8000504
        title: 'Bài 17: Security, Privacy và Consent trong FHIR'
        slug: bai-17-security-privacy-va-consent-trong-fhir
        description: >-
          FHIR Security labels, AuditEvent resource, Provenance resource,
          Consent framework, RBAC/ABAC trong FHIR, mã hóa dữ liệu y tế,
          HIPAA compliance, GDPR, quy định bảo mật y tế Việt Nam,
          best practices bảo mật cho FHIR Server.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'Phần 6: Thực hành - Xây dựng hệ thống FHIR'
    description: 'Hands-on xây dựng FHIR Server, Client, Implementation Guide'
    sort_order: 6
    lessons:
      - id: 019e0a10-a601-7001-d001-f1a7f8000601
        title: 'Bài 18: Hands-on - Xây dựng FHIR Server với HAPI FHIR'
        slug: bai-18-hands-on-xay-dung-fhir-server-voi-hapi-fhir
        description: >-
          Xây dựng FHIR Server production-ready với HAPI FHIR JPA Server (Spring Boot),
          cấu hình PostgreSQL, indexing, validation, interceptors,
          custom operations, bulk data export ($export), Docker deployment.
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e0a10-a602-7001-d001-f1a7f8000602
        title: 'Bài 19: Hands-on - FHIR Client và tích hợp ứng dụng'
        slug: bai-19-hands-on-fhir-client-va-tich-hop-ung-dung
        description: >-
          HAPI FHIR Client (Java), fhir.js (JavaScript/TypeScript), Python fhirclient.
          Tích hợp FHIR vào ứng dụng web, mobile. Fluent Client API,
          Generic Client, handling errors, retry, pagination.
          Thực hành: app quản lý bệnh nhân đơn giản.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a10-a603-7001-d001-f1a7f8000603
        title: 'Bài 20: Hands-on - Xây dựng Implementation Guide cho Việt Nam'
        slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
        description: >-
          Tạo Vietnam FHIR Implementation Guide: VN-Core-Patient profile
          (CCCD, BHYT, địa chỉ Việt Nam), VN-Core-Organization (mã BHXH cơ sở y tế),
          VN-Core-Encounter (mã loại khám BHYT). Sử dụng FSH + SUSHI + IG Publisher.
          Publish IG lên FHIR Registry.
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a10-a604-7001-d001-f1a7f8000604
        title: 'Bài 21: Hands-on - Tích hợp FHIR với EMR/HIS thực tế'
        slug: bai-21-hands-on-tich-hop-fhir-voi-emr-his-thuc-te
        description: >-
          Kiến trúc tích hợp FHIR với hệ thống EMR/HIS hiện có,
          FHIR Facade pattern, data mapping từ legacy database sang FHIR,
          HL7 v2 to FHIR conversion, CDA to FHIR mapping,
          ETL pipeline cho FHIR data warehouse.
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'Phần 7: Production, Quy mô và Tương lai'
    description: 'Triển khai production, bối cảnh Việt Nam, case studies, xu hướng tương lai'
    sort_order: 7
    lessons:
      - id: 019e0a10-a701-7001-d001-f1a7f8000701
        title: 'Bài 22: FHIR Performance, Scalability và Monitoring'
        slug: bai-22-fhir-performance-scalability-va-monitoring
        description: >-
          Tối ưu hiệu năng FHIR Server (indexing, caching, bulk operations),
          horizontal scaling, load balancing, database optimization,
          monitoring với Prometheus/Grafana, logging, Bulk Data Access ($export),
          FHIR nFD (near-real-time data pipeline).
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e0a10-a702-7001-d001-f1a7f8000702
        title: 'Bài 23: FHIR trong bối cảnh Y tế Việt Nam'
        slug: bai-23-fhir-trong-boi-canh-y-te-viet-nam
        description: >-
          Thực trạng số hóa y tế Việt Nam, Thông tư 54/2017/TT-BYT (liên thông dữ liệu),
          Thông tư 46/2018/TT-BYT (hồ sơ bệnh án điện tử), VNEID và xác thực định danh,
          liên thông dữ liệu BHXH, roadmap áp dụng FHIR tại Việt Nam,
          rào cản và giải pháp.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e0a10-a703-7001-d001-f1a7f8000703
        title: 'Bài 24: Case Studies - US Core, IPS và triển khai thực tế'
        slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
        description: >-
          Phân tích US Core Implementation Guide, International Patient Summary (IPS),
          UK NHS Digital, Australia AU Base. Bài học từ triển khai thực tế,
          FHIR Connectathon, testing và certification. Interoperability Roadmap.
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e0a10-a704-7001-d001-f1a7f8000704
        title: 'Bài 25: Tương lai FHIR - R6, AI/ML, Genomics và xu hướng mới'
        slug: bai-25-tuong-lai-fhir-r6-ai-ml-genomics-va-xu-huong-moi
        description: >-
          FHIR R6 roadmap, FHIR và AI/ML (CDS Hooks, clinical reasoning),
          Genomics trong FHIR, FHIR Bulk Data cho population health,
          FHIR và IoT/wearables, Patient-Generated Health Data (PGHD),
          Digital Twins trong y tế, tổng kết và lộ trình học tiếp.
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
---

## Giới thiệu Series

**HL7 FHIR (Fast Healthcare Interoperability Resources)** là chuẩn dữ liệu y tế thế hệ mới được phát triển bởi HL7 International — tổ chức tiêu chuẩn y tế hàng đầu thế giới. FHIR đang nhanh chóng trở thành tiêu chuẩn bắt buộc tại nhiều quốc gia (Mỹ, Anh, Úc, EU) và là nền tảng cho việc số hóa y tế toàn cầu.

Series này được thiết kế để giúp bạn:

- **Hiểu rõ nền tảng**: Lịch sử HL7, tại sao cần chuẩn hóa dữ liệu y tế, kiến trúc FHIR
- **Nắm vững Resources**: Tất cả các Resources cốt lõi (Patient, Observation, Encounter, Medication...)
- **Thành thạo API**: RESTful API, Search, Bundle, Transaction, Messaging
- **Tùy chỉnh FHIR**: Data Types, Terminologies (ICD-10, SNOMED CT, LOINC), Profiles, Extensions
- **Tích hợp & bảo mật**: SMART on FHIR, OAuth2, Security labels, Consent
- **Thực hành thực tế**: Xây dựng FHIR Server (HAPI FHIR), Client apps, Implementation Guide
- **Áp dụng tại Việt Nam**: Thông tư 54/2017, liên thông BHXH, VNEID, VN FHIR Profile

### Đối tượng hướng đến

- Developers muốn xây dựng hệ thống y tế theo chuẩn quốc tế
- Kiến trúc sư phần mềm (Solution Architect) trong lĩnh vực Healthcare IT
- Business Analysts, Project Managers muốn hiểu chuẩn dữ liệu y tế
- Quản lý y tế, bác sĩ CNTT muốn hiểu về interoperability
- Sinh viên CNTT Y tế, Y Sinh học

### Yêu cầu tiên quyết

- Kiến thức cơ bản về REST API và HTTP
- Biết đọc JSON/XML
- Có kiến thức lập trình cơ bản (Java/Python/JavaScript — tùy phần thực hành)
- Không yêu cầu kiến thức y tế chuyên sâu (sẽ giải thích trong bài)
