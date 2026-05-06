---
id: 019e0a10-a100-7001-d001-f1a7f8000001
title: HL7 FHIR - 基本から高度な医療データ標準
slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
description: >-
  ヘルスケアにおける HL7 FHIR (Fast Healthcare Interoperability Resources)
  データ標準に関する、理論的基礎から実践的な実装までの包括的なコース。 HL7 履歴 (v2、v3、CDA)、FHIR R5 アーキテクチャ、コア リソース
  (患者、観察、遭遇、投薬、診断レポート)、RESTful API (CRUD、検索、バンドル、トランザクション)、データ型、用語
  (ICD-10、SNOMED CT、LOINC)、プロファイルと拡張機能、SMART on FHIR、FHIR サブスクリプション、構築をカバーします。
  FHIR HAPI (Java/Spring Boot) を備えた FHIR サーバー、EMR/HIS との統合、セキュリティおよびプライバシー システム
  (HIPAA、GDPR)、およびベトナムでの実用的なアプリケーション (Circular 54/2017/TT-BYT、VNEID、社会保険)。 HL7
  International の最新公式バージョンである FHIR R5 (v5.0.0) に更新されました。
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
  name: システムアーキテクチャ
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
    title: 'パート 1: HL7 と FHIR プラットフォーム'
    description: 医療データ標準の歴史、FHIR R5の概要、開発環境の設定
    sort_order: 1
    lessons:
      - id: 019e0a10-a101-7001-d001-f1a7f8000101
        title: 'レッスン 1: HL7 の概要と医療データ標準の歴史'
        slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
        description: >-
          HL7 International とは何か、医療データ標準の開発の歴史 (HL7 v2、HL7
          v3/RIM、CDA)、医療データの標準化が必要な理由、医療における相互運用性の課題、以前の標準の制限に対処するために FHIR
          がどのように誕生したかについて学びます。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a10-a102-7001-d001-f1a7f8000102
        title: 'レッスン 2: FHIR R5 の概要 - アーキテクチャと設計原則'
        slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
        description: >-
          FHIR アーキテクチャ (リソース、データ型、拡張性、RESTful API、メッセージング、ドキュメント)、80/20
          設計原則、FHIR 成熟度モデル (FMM)、FHIR R4 と R5 の比較、仕様内のモジュール (基礎、適合性、用語、臨床、財務)。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0a10-a103-7001-d001-f1a7f8000103
        title: 'レッスン 3: FHIR 開発環境をインストールする'
        slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
        description: >-
          HAPI FHIR サーバー (Docker)、パブリック FHIR テスト サーバー、FHIR 用 Postman
          Collection、FHIR Shorthand (FSH) および SUSHI、FHIR 用の VS Code
          拡張機能をインストールし、最初の CRUD 操作をテストします。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: コア FHIR リソース'
    description: 管理、臨床、薬剤、診断のリソースについて詳しく学ぶ
    sort_order: 2
    lessons:
      - id: 019e0a10-a201-7001-d001-f1a7f8000201
        title: 'レッスン 4: 患者、医師、組織 - 管理リソース'
        slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
        description: >-
          リソース 患者の詳細 (人口統計、識別子、連絡先、リンク)、医師と医師の役割、組織、場所、エンドポイント。 FHIR
          サーバーで患者を作成、読み取り、更新する練習をします。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a10-a202-7001-d001-f1a7f8000202
        title: 'レッスン 5: 遭遇、状態、観察 - 臨床リソース'
        slug: bai-5-encounter-condition-observation-resources-lam-sang
        description: >-
          リソース
          遭遇（訪問、入院）、状態（診断、健康上の問題）、観察（バイタルサイン、検査結果、社会歴）。参照、観察カテゴリ、条件ステージングを通じてリソースをリンクする方法。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a10-a203-7001-d001-f1a7f8000203
        title: 'レッスン 6: 投薬、投薬リクエスト、予防接種 - 医薬品リソース'
        slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
        description: >-
          FHIR での薬剤管理: Medication、MedicationRequest
          (処方箋)、MedicationAdministration、MedicationDispense、MedicationStatement。予防接種
          (ワクチン接種)、薬剤コードシステム (RxNorm、ATC) にリンクされています。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e0a10-a204-7001-d001-f1a7f8000204
        title: 'レッスン 7: 診断レポート、手順、アレルギー不耐症 - 診断リソース'
        slug: >-
          bai-7-diagnosticreport-procedure-allergyintolerance-resources-chan-doan
        description: >-
          DiagnosticReport（検査結果、画像）、Procedure（処置、手術）、AllergyIntolerance（アレルギー）、ServiceRequest（サービスリクエスト）、Specimen（検体）。要件から結果までの診断ワークフロー。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: FHIR RESTful API とデータ交換'
    description: 高度な REST、バンドル、トランザクション、検索インタラクション
    sort_order: 3
    lessons:
      - id: 019e0a10-a301-7001-d001-f1a7f8000301
        title: 'レッスン 8: FHIR RESTful API - CRUD、検索、履歴、およびバージョニング'
        slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
        description: >-
          REST インタラクションの詳細: 作成 (POST)、読み取り (GET)、更新 (PUT)、パッチ (PATCH)、削除
          (DELETE)、vread、履歴。コンテンツ ネゴシエーション
          (JSON/XML)、ETag、If-Match、条件付き操作、CapabilityStatement。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a10-a302-7001-d001-f1a7f8000302
        title: 'レッスン 9: バンドル、トランザクション、バッチ - 複数のリソースの処理'
        slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
        description: >-
          リソース バンドルとタイプ
          (サーチセット、トランザクション、バッチ、ドキュメント、メッセージ、コレクション、履歴)。トランザクション処理ルール、アトミック操作、条件付き参照、バッチ処理、トランザクション
          バンドルの作成の練習。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a10-a303-7001-d001-f1a7f8000303
        title: 'レッスン 10: 検索パラメータと高度な検索'
        slug: bai-10-search-parameters-va-tim-kiem-nang-cao
        description: >-
          検索パラメーターのタイプ (文字列、トークン、参照、日付、数値、数量、uri)、修飾子
          (:exact、:contains、:missing、:not)、連鎖、逆連鎖
          (_has)、_include、_revinclude、_summary、_elements、_count、ページング、複合検索パラメーター、カスタム
          SearchParameter。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: データ型、用語、プロファイル'
    description: データタイプ、医療コーディングシステム、プロファイルと拡張子
    sort_order: 4
    lessons:
      - id: 019e0a10-a401-7001-d001-f1a7f8000401
        title: 'レッスン 11: FHIR データ型 - プリミティブ、複雑、特殊'
        slug: bai-11-fhir-data-types-primitive-complex-va-special
        description: >-
          プリミティブ型 (ブール、文字列、uri、日付、dateTime、インスタント、十進数、整数)、複合型
          (HumanName、住所、連絡先、識別子、CodeableConcept、コーディング、数量、期間、参照、物語)、BackboneElement、Element。データ型の拡張。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a10-a402-7001-d001-f1a7f8000402
        title: 'レッスン 12: 用語 - コードシステム、バリューセット、コンセプトマップ'
        slug: bai-12-terminologies-codesystem-valueset-conceptmap
        description: >-
          医療用語システム: ICD-10 (診断)、SNOMED CT (臨床)、LOINC (検査室)、RxNorm (薬剤)、CPT
          (処置)、ATC (薬剤分類)。 FHIR のコードシステム、バリューセット、コンセプトマップ。用語のバインディング
          (必須、拡張可能、推奨など)。 $validate-code、$expand、$lookup。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a10-a403-7001-d001-f1a7f8000403
        title: 'レッスン 13: プロファイル、拡張機能、および実装ガイド'
        slug: bai-13-profiles-extensions-va-implementation-guides
        description: >-
          StructureDefinition で、リソース、拡張機能 (単純、複合、修飾子)、スライス、不変条件 (FHIRPath 制約)
          をバインドするプロファイルを作成します。 Implementation Guide (IG)、IG Publisher、例としての US
          Core Profile、International Patient Summary (IPS)。 FHIR 略記法 (FSH)。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'パート 5: 統合、メッセージング、セキュリティ'
    description: ドキュメント、メッセージング、サブスクリプション、SMART on FHIR、セキュリティ
    sort_order: 5
    lessons:
      - id: 019e0a10-a501-7001-d001-f1a7f8000501
        title: 'レッスン 14: FHIR ドキュメントとメッセージング'
        slug: bai-14-fhir-documents-va-messaging
        description: >-
          FHIR ドキュメント (構成リソース、ドキュメント バンドル、署名)、FHIR メッセージング (メッセージ
          ヘッダー、メッセージ定義、メッセージ イベント)、REST 対メッセージング対ドキュメントの比較、各パラダイムのユースケース。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a10-a502-7001-d001-f1a7f8000502
        title: 'レッスン 15: FHIR サブスクリプションとリアルタイム通知'
        slug: bai-15-fhir-subscriptions-va-real-time-notifications
        description: >-
          トピックベースのサブスクリプション (R5)、SubscriptionTopic、サブスクリプション リソース、通知チャネル
          (レストフック、Web ソケット、電子メール)、通知タイプ (ハンドシェイク、ハートビート、イベント通知)、フィルター、ペイロード
          コンテンツ。 HAPI FHIR サーバーでのサブスクリプションの構成を練習します。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e0a10-a503-7001-d001-f1a7f8000503
        title: 'レッスン 16: FHIR の SMART - OAuth2 と医療アプリケーション'
        slug: bai-16-smart-on-fhir-oauth2-va-ung-dung-y-te
        description: >-
          SMART アプリ起動フレームワーク、医療における OAuth 2.0、臨床スコープ、起動コンテキスト (EHR
          起動、スタンドアロン起動)、SMART バックエンド サービス (システム間)、CDS フック (臨床意思決定支援)。簡単な SMART
          アプリの作成を練習します。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a10-a504-7001-d001-f1a7f8000504
        title: 'レッスン 17: FHIR におけるセキュリティ、プライバシー、および同意'
        slug: bai-17-security-privacy-va-consent-trong-fhir
        description: >-
          FHIR セキュリティ ラベル、AuditEvent リソース、来歴リソース、同意フレームワーク、FHIR の
          RBAC/ABAC、医療データの暗号化、HIPAA 準拠、GDPR、ベトナムの医療セキュリティ規制、FHIR サーバーのセキュリティのベスト
          プラクティス。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'パート 6: 実践 - FHIR システムの構築'
    description: FHIR サーバー、クライアント、実装ガイドの実践的な構築
    sort_order: 6
    lessons:
      - id: 019e0a10-a601-7001-d001-f1a7f8000601
        title: 'レッスン 18: ハンズオン - HAPI FHIR を使用した FHIR サーバーの構築'
        slug: bai-18-hands-on-xay-dung-fhir-server-voi-hapi-fhir
        description: >-
          HAPI FHIR JPA サーバー (Spring Boot)、PostgreSQL
          構成、インデックス作成、検証、インターセプター、カスタム オペレーション、一括データ エクスポート ($export)、Docker
          デプロイメントを使用して、本番環境に対応した FHIR サーバーを構築します。
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e0a10-a602-7001-d001-f1a7f8000602
        title: 'レッスン 19: 実践 - FHIR クライアントとアプリケーションの統合'
        slug: bai-19-hands-on-fhir-client-va-tich-hop-ung-dung
        description: >-
          HAPI FHIR クライアント (Java)、fhir.js (JavaScript/TypeScript)、Python
          fhirclient。 FHIR を Web およびモバイル アプリケーションに統合します。 Fluent Client
          API、汎用クライアント、エラー処理、再試行、ページネーション。実践: シンプルな患者管理アプリ。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a10-a603-7001-d001-f1a7f8000603
        title: 'レッスン 20: 実践 - ベトナム向けの実装ガイドの作成'
        slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
        description: >-
          ベトナム FHIR 実装ガイドの作成: VN-Core-Patient プロファイル
          (CCCD、健康保険、ベトナムの住所)、VN-Core-Organization (健康保険施設コード)、VN-Core-Encounter
          (健康保険検査タイプ コード)。 FSH + SUSHI + IG パブリッシャーを使用します。 IG を FHIR
          レジストリに公開します。
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a10-a604-7001-d001-f1a7f8000604
        title: 'レッスン 21: 実践 - FHIR と実際の EMR/HIS の統合'
        slug: bai-21-hands-on-tich-hop-fhir-voi-emr-his-thuc-te
        description: >-
          既存の EMR/HIS システムとの FHIR 統合アーキテクチャ、FHIR ファサード パターン、レガシー データベースから FHIR
          へのデータ マッピング、HL7 v2 から FHIR への変換、CDA から FHIR へのマッピング、FHIR データ ウェアハウスの
          ETL パイプライン。
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'パート 7: 生産、規模、将来'
    description: 生産展開、ベトナムの背景、ケーススタディ、将来の傾向
    sort_order: 7
    lessons:
      - id: 019e0a10-a701-7001-d001-f1a7f8000701
        title: 'レッスン 22: FHIR のパフォーマンス、スケーラビリティ、およびモニタリング'
        slug: bai-22-fhir-performance-scalability-va-monitoring
        description: >-
          FHIR サーバーのパフォーマンス (インデックス作成、キャッシュ、一括操作)、水平スケーリング、ロード
          バランシング、データベースの最適化、Prometheus/Grafana によるモニタリング、ロギング、一括データ アクセス
          ($export)、FHIR nFD (準リアルタイム データ パイプライン) を最適化します。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e0a10-a702-7001-d001-f1a7f8000702
        title: 'レッスン 23: ベトナムの健康との関連における FHIR'
        slug: bai-23-fhir-trong-boi-canh-y-te-viet-nam
        description: >-
          ベトナムの医療デジタル化の現状、Circular 54/2017/TT-BYT (データ相互運用性)、Circular
          46/2018/TT-BYT (電子医療記録)、VNEID と ID 認証、社会保険データの相互運用性、ベトナムでの FHIR
          適用のロードマップ、障壁とソリューション。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e0a10-a703-7001-d001-f1a7f8000703
        title: 'レッスン 24: ケーススタディ - 米国コア、IPS、および実際の実装'
        slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
        description: >-
          米国のコア実装ガイド、国際患者概要 (IPS)、英国の NHS デジタル、オーストラリアの AU ベースを分析します。実際の実装、FHIR
          コネクタソン、テストおよび認証から得た教訓。相互運用性ロードマップ。
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e0a10-a704-7001-d001-f1a7f8000704
        title: 'レッスン 25: FHIR の将来 - R6、AI/ML、ゲノミクス、および新しいトレンド'
        slug: bai-25-tuong-lai-fhir-r6-ai-ml-genomics-va-xu-huong-moi
        description: >-
          FHIR R6 ロードマップ、FHIR および AI/ML (CDS フック、臨床推論)、FHIR のゲノミクス、集団健康のための FHIR
          バルク データ、FHIR および IoT/ウェアラブル、患者生成医療データ (PGHD)、ヘルスケアにおけるデジタル
          ツイン、要約およびさらなる学習ロードマップ。
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
locale: ja
---

## シリーズのご紹介

**HL7 FHIR (Fast Healthcare Interoperability Resources)** は、世界をリードする医療標準化団体である HL7 International によって開発された新世代の医療データ標準です。 FHIR は多くの国 (米国、英国、オーストラリア、EU) で急速に必須規格となりつつあり、世界的な医療デジタル化の基盤となっています。

このシリーズは、次のことを支援するように設計されています。

- **基礎を理解する**: HL7 の歴史、医療データの標準化が必要な理由、FHIR アーキテクチャ
- **マスター リソース**: すべてのコア リソース (患者、観察、遭遇、投薬...)
- **API の熟練度**: RESTful API、検索、バンドル、トランザクション、メッセージング
- **FHIR カスタマイズ**: データ型、用語 (ICD-10、SNOMED CT、LOINC)、プロファイル、拡張子
- **統合とセキュリティ**: FHIR、OAuth2、セキュリティ ラベル、同意に関する SMART
- **実践**: FHIR サーバー (HAPI FHIR) の構築、クライアント アプリ、実装ガイド
- **Applicable in Vietnam**: Circular 54/2017, linking social insurance, VNEID, VN FHIR Profile

### 対象者

- 開発者は国際標準に従って医療システムを構築したいと考えています
- ヘルスケアIT分野のソフトウェアアーキテクト（ソリューションアーキテクト）
- ビジネス アナリストやプロジェクト マネージャーは、医療データの標準を理解したいと考えています
- 医療管理者、IT 医師が相互運用性について理解したい
- ヘルス IT および生物医学の学生

### 前提条件

- REST API と HTTP の基本的な知識
- JSON/XMLの読み方を理解する
- 基本的なプログラミングの知識がある (Java/Python/JavaScript — 実践に応じて)
- 深い医学知識は必要ありません（記事内で説明します）
