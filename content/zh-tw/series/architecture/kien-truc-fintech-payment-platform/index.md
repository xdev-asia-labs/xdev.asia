---
id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
title: 金融科技與支付平台架構
slug: kien-truc-fintech-payment-platform
description: >-
  從基礎到進階的金融科技和支付平台系統架構綜合課程。包括支付網關、數位錢包、複式簿記系統、詐欺偵測、AML/KYC 管道、核心銀行架構、借貸平台。與
  VNPay、MoMo、ZaloPay、Stripe 的實際整合。符合 PCI-DSS、PSD2
  和越南國家銀行法規。來自世界和越南領先支付系統的案例研究。根據 2026 年金融科技趨勢更新。
featured_image: uploads/2026/03/fintech-payment-platform-series-banner-2026.png
level: intermediate
duration_hours: 75
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
  name: 系統架構
  slug: kien-truc-he-thong
tags:
  - name: FinTech
    slug: fintech
  - name: Payment
    slug: payment
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: Security
    slug: security
  - name: Banking
    slug: banking
  - name: FraudDetection
    slug: fraud-detection
  - name: Ledger
    slug: ledger
  - name: PCI-DSS
    slug: pci-dss
  - name: DigitalWallet
    slug: digital-wallet
  - name: DDD
    slug: ddd
  - name: EventDriven
    slug: event-driven
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 第 1 部分：金融科技與支付平台
    description: 了解金融科技領域、商業模式和支付平台的整體架構
    sort_order: 1
    lessons:
      - id: 019d8a21-c501-7005-d001-e1f2a3b4c501
        title: 第 1 課：金融科技概述 - 領域分析與商業模式
        slug: bai-1-tong-quan-fintech-domain-analysis-business-models
        description: >-
          分析金融科技領域的主要垂直領域（支付、貸款、銀行、保險、投資）。商業模式和收入來源。越南和國際的監管環境。 2026
          年金融科技生態系與趨勢。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c502-7005-d001-e1f2a3b4c502
        title: 第 2 課：平台架構概述 - 金融科技的微服務與 DDD
        slug: bai-2-platform-architecture-overview-microservices-ddd-cho-fintech
        description: 使用微服務和領域驅動設計設計金融科技平台的整體架構。支付、錢包、帳本、風險、身分的有界脈絡。事件驅動架構和 API 網關模式。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c503-7005-d001-e1f2a3b4c503
        title: 第 3 課：監理合規性 - PCI-DSS、PSD2 和越南國家銀行的法規
        slug: bai-3-regulatory-compliance-pci-dss-psd2-quy-dinh-nhnn
        description: 金融科技合規概述。支付處理的 PCI-DSS 要求。 PSD2 和開放銀行。越南國家銀行關於電子支付和電子錢包的規定。設計系統以滿足合規性。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：核心支付引擎
    description: 設計和建置支付網關、支付處理和多 PSP 集成
    sort_order: 2
    lessons:
      - id: 019d8a21-c504-7005-d001-e1f2a3b4c504
        title: 第 4 課：支付網關架構 - 端對端支付流程
        slug: bai-4-payment-gateway-architecture-luong-thanh-toan-end-to-end
        description: 從結帳到結算的支付網關架構。支付流程：卡片支付、銀行轉帳、電子錢包。支付生命週期：授權、捕獲、作廢、退款。支付的冪等性和重試模式。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c505-7005-d001-e1f2a3b4c505
        title: 第 5 課：支付處理 - 授權、捕獲和結算
        slug: bai-5-payment-processing-authorization-capture-settlement
        description: 深入研究支付處理流程。兩階段承諾付款。授權保持和捕獲計時。結算流程和清算。批量處理與即時結算。處理部分捕獲和分攤付款。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c506-7005-d001-e1f2a3b4c506
        title: 第 6 課：多 PSP 整合 - VNPay、MoMo、ZaloPay、Stripe
        slug: bai-6-multi-psp-integration-vnpay-momo-zalopay-stripe
        description: >-
          設計支付服務提供者抽象層。多個 PSP 的適配器模式。與 VNPay、MoMo、ZaloPay（越南）和
          Stripe、PayPal（國際）整合。 PSP 路由和回退策略。基於成本和成功率的智慧路由。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c507-7005-d001-e1f2a3b4c507
        title: 第 7 課：對帳與結算引擎
        slug: bai-7-reconciliation-settlement-engine
        description: 設計一個自動對帳系統。用於交易協調的匹配演算法。結算引擎和支付處理。處理差異和異常。自動與手動對帳工作流程。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：數位錢包和帳本系統
    description: 建構數位錢包、複式帳本和交易處理
    sort_order: 3
    lessons:
      - id: 019d8a21-c508-7005-d001-e1f2a3b4c508
        title: 第 8 課：數位錢包架構 - 電子錢包和餘額管理
        slug: bai-8-digital-wallet-architecture-e-wallet-balance-management
        description: 數位錢包架構：帳戶類型、餘額管理、儲值/提現流程。錢包到錢包的轉帳。託管帳戶並持有餘額。即時餘額計算與事件來源餘額。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c509-7005-d001-e1f2a3b4c509
        title: 第 9 課：複式記帳系統 - 會計引擎
        slug: bai-9-double-entry-ledger-system-accounting-engine
        description: 金融科技中的複式記帳原則。設計分類帳模式：帳戶、日記帳分錄、過帳。不可變的僅附加分類帳。審計追蹤和合規性。支付平台的會計科目表設計。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c510-7005-d001-e1f2a3b4c510
        title: 第 10 課：事務處理 - ACID、冪等性與 Saga 模式
        slug: bai-10-transaction-processing-acid-idempotency-saga-pattern
        description: 確保金融交易的一致性。單一服務事務的 ACID 屬性。分散式事務的 Saga 模式。冪等鍵和重複資料刪除。補償事務和回滾策略。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c511-7005-d001-e1f2a3b4c511
        title: 第 11 課：貨幣和匯率引擎 - 多貨幣支持
        slug: bai-11-currency-exchange-rate-engine-multi-currency
        description: 多幣種系統設計。貨幣轉換引擎和匯率管理。匯率快取和更新策略。跨境支付流。處理財務計算中的捨入和精度。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 第 4 部分：風險管理與詐欺偵測
    description: 建構詐欺偵測、AML/KYC 和風險評分系統
    sort_order: 4
    lessons:
      - id: 019d8a21-c512-7005-d001-e1f2a3b4c512
        title: 第 12 課：詐欺偵測系統 - 規則引擎和 ML 模型
        slug: bai-12-fraud-detection-system-rule-engine-ml-models
        description: 詐欺檢測系統架構。具有動態規則的基於規則的引擎。用於詐欺偵測的機器學習模型。即時評分管道。欺詐信號的特徵工程。平衡誤報和漏報。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c513-7005-d001-e1f2a3b4c513
        title: 第 13 課：反洗錢 (AML) 和 KYC 流程
        slug: bai-13-anti-money-laundering-aml-kyc-pipeline
        description: >-
          設計 KYC（了解您的客戶）管道：身份驗證、文件驗證、活性檢查。 AML 篩選：制裁名單、PEP 篩選、交易監控。可疑活動報告
          (SAR)。合規工作流程和審計追蹤。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c514-7005-d001-e1f2a3b4c514
        title: 第 14 課：風險評分與即時交易監控
        slug: bai-14-risk-scoring-real-time-transaction-monitoring
        description: 設計風險評分系統。透過串流處理進行即時交易監控。速度檢查和模式檢測。基於風險的身份驗證（3D 安全、SCA）。警報管理和案件調查工作流程。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 第 5 部分：銀行和借貸平台
    description: 核心銀行架構、借貸平台、信用評分和利息引擎
    sort_order: 5
    lessons:
      - id: 019d8a21-c515-7005-d001-e1f2a3b4c515
        title: 第 15 課：核心銀行架構 - 帳戶管理
        slug: bai-15-core-banking-architecture-account-management
        description: 現代核心銀行系統架構。帳戶管理：儲蓄、支票、貸款帳戶。利息計算引擎。語句生成。與國家支付系統（NAPAS、SWIFT、ACH）整合。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c516-7005-d001-e1f2a3b4c516
        title: 第 16 課：借貸平台 - 貸款發放與承銷
        slug: bai-16-lending-platform-loan-origination-underwriting
        description: 端到端借貸平台設計。貸款發放系統（LOS）：申請、驗證、核准工作流程。自動承保引擎。貸款產品配置。付款和收款流程。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c517-7005-d001-e1f2a3b4c517
        title: 第 17 課：信用評分引擎 - 資料管道和機器學習
        slug: bai-17-credit-scoring-engine-data-pipeline-ml
        description: >-
          建立信用評分引擎。信用評分的替代資料來源。特色工程管道。用於信用風險評估的機器學習模型。模型監控和偏差檢測。與越南
          CIC（信用資訊中心）整合。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c518-7005-d001-e1f2a3b4c518
        title: 第 18 課：利息計算與攤銷引擎
        slug: bai-18-interest-calculation-amortization-engine
        description: 利息计算引擎设计：单利、复利、日数约定。攤銷時間表產生。預付款和罰款計算。延遲付款處理和寬限期。監管利率上限。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 第 6 部分：資料平台與分析
    description: 建立財務數據管道、報告和即時分析
    sort_order: 6
    lessons:
      - id: 019d8a21-c519-7005-d001-e1f2a3b4c519
        title: 第 19 課：金融資料管道 - 事件流和 CDC
        slug: bai-19-financial-data-pipeline-event-streaming-cdc
        description: >-
          為金融科技設計數據管道。使用 Kafka 進行金融事件的事件流處理。用於帳本複製的變更資料擷取
          (CDC)。金融資料的資料湖架構。資料保留和歸檔政策。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c520-7005-d001-e1f2a3b4c520
        title: 第 20 課：報告與商業智慧 - 監理報告
        slug: bai-20-reporting-business-intelligence-regulatory-reports
        description: 金融科技報告系統。監管報告：BSP 報告、稅務報告、AML 報告。商業智慧儀表板。商戶分析和結算報告。自動報告產生和調度。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c521-7005-d001-e1f2a3b4c521
        title: 第 21 課：即時分析與儀表板
        slug: bai-21-real-time-analytics-dashboard
        description: 支付平台的即時分析。交易監控儀表板。 KPI追蹤：TPV、成功率、轉換率。即時詐欺警報。交易模式中的異常檢測。 NOC 的營運儀表板。
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 第 7 部分：基礎設施、安全與生產
    description: 安全架構、HA基礎設施、效能調優與實際案例研究
    sort_order: 7
    lessons:
      - id: 019d8a21-c522-7005-d001-e1f2a3b4c522
        title: 第 22 課：安全架構 - 加密、HSM 和令牌化
        slug: bai-22-security-architecture-encryption-hsm-tokenization
        description: >-
          金融科技的安全架構。支付資料的端對端加密。用於金鑰管理的硬體安全模組 (HSM)。 PAN 資料的標記化。網路安全：PCI-DSS網路分段。
          API 安全性和 OAuth2/mTLS。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c523-7005-d001-e1f2a3b4c523
        title: 第 23 課：基礎設施和高可用性 - 多區域和災難復原
        slug: bai-23-infrastructure-high-availability-multi-region-dr
        description: >-
          支付系統的基礎設施設計。多區域部署，實現低延遲。主動-主動與主動-被動災難復原策略。財務資料的資料庫複製。零停機部署。支付系統的 SLA
          和正常運作時間要求 (99.99%+)。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c524-7005-d001-e1f2a3b4c524
        title: 第 24 課：效能和可擴展性 - 處理峰值事務
        slug: bai-24-performance-scalability-handling-peak-transactions
        description: 支付平台效能優化。處理高峰負載（限時搶購、假日）。高吞吐量事務的資料庫優化。支付緩存策略。負載測試和容量規劃。支付服務擴展的橫向模式。
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c525-7005-d001-e1f2a3b4c525
        title: 第 25 課：案例研究 - VNPay、MoMo、GrabPay 和 Stripe
        slug: bai-25-case-studies-vnpay-momo-grabpay-stripe
        description: >-
          分析領先支付平台的實際架構。 VNPay：越南最大的支付中介。 MoMo：超級應用策略。 GrabPay：東南亞區域支付。
          Stripe：開發者優先的支付平台。從生產系統中學到的經驗教訓和最佳實踐。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

