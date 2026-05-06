---
id: 019d8b40-c100-7001-b004-django00000001
title: Django：從基礎到高級
slug: django-tu-co-ban-den-nang-cao
description: >-
  從基礎到進階的全面Django課程，幫助您掌握最強大的全端Python框架。包括 Django ORM、Django REST
  Framework、基於類別的視圖、身份驗證、Celery、通道 (WebSockets)、測試、Docker 和生產部署。使用最新的 2026
  年最佳實踐更新到 Django 5.2+ 和 Python 3.12+。
featured_image: uploads/2026/03/django-banner-v2.png
level: beginner
duration_hours: 80
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T12:00:00.000000Z'
created_at: '2026-03-31T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: 程式設計
  slug: lap-trinh
tags:
  - name: Python
    slug: python
  - name: Django
    slug: django
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: DRF
    slug: drf
  - name: Django REST Framework
    slug: django-rest-framework
  - name: ORM
    slug: orm
  - name: Celery
    slug: celery
  - name: Channels
    slug: channels
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: WebSocket
    slug: websocket
  - name: Full-Stack
    slug: full-stack
sections:
  - id: section-01
    title: 第 1 部分：Django 基礎知識
    description: 安裝 Django、MVT 模式、模型、視圖、範本、URL 路由
    sort_order: 1
    lessons:
      - id: 019d8b40-c101-7001-b004-django00000101
        title: 第 1 課：Django 簡介 - 完美主義者的 Web 框架
        slug: bai-1-gioi-thieu-django
        description: >-
          Django 的「自備電池」理念是什麼？比較 Django、FastAPI、Flask 和 Laravel。
          MVT架構，Django生態系。安裝並創建您的第一個專案和應用程式。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-c102-7001-b004-django00000102
        title: 第 2 課：模型和 Django ORM
        slug: bai-2-models-va-django-orm
        description: >-
          Django ORM、模型欄位、關係（ForeignKey、OneToOne、ManyToMany）。元選項、管理器、自訂查詢集。遷移
          CLI、資料庫路由器。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-c103-7001-b004-django00000103
        title: 第 3 課：檢視、URL 和模板
        slug: bai-3-views-urls-va-templates
        description: 基於函數的視圖、URL 路由、URL 命名空間。 Django 模板語言、模板繼承、自訂模板標籤/過濾器。靜態文件、媒體文件。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-c104-7001-b004-django00000104
        title: 第 4 課：基於類別的檢視和表單
        slug: bai-4-class-based-views-va-forms
        description: >-
          基於類別的視圖（ListView、DetailView、CreateView、UpdateView、DeleteView）。 Django
          表單、模型表單、表單集。 CSRF 保護、表單驗證、文件上傳。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：Django REST 框架
    description: DRF 序列化器、視圖集、路由器、分頁、過濾、節流
    sort_order: 2
    lessons:
      - id: 019d8b40-c201-7001-b004-django00000201
        title: 第 5 課：Django REST 框架 - 序列化器和視圖
        slug: bai-5-drf-serializers-va-views
        description: >-
          DRF 設定、序列化器（序列化器、模型序列化器、巢狀序列化器）。
          APIView、GenericAPIView、mixins。請求/回應對象、狀態代碼、內容協商。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-c202-7001-b004-django00000202
        title: 第 6 課：視圖集、路由器和分頁
        slug: bai-6-viewsets-routers-va-pagination
        description: >-
          ModelViewSet，自訂操作。 DefaultRouter，嵌套路由器。分頁（頁碼、LimitOffset、遊標）。使用
          django-filter、SearchFilter、OrderingFilter 進行過濾。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-c203-7001-b004-django00000203
        title: 第 7 課：高階序列化器與驗證
        slug: bai-7-advanced-serializers-va-validation
        description: >-
          WritableNestedSerializer，多型序列化器。欄位級、物件級驗證。
          SerializerMethodField，自訂欄位。使用 select_lated/prefetch_lated 最佳化 N+1 查詢。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-c204-7001-b004-django00000204
        title: 第 8 課：版本控制、限制和 API 文檔
        slug: bai-8-versioning-throttling-va-api-docs
        description: >-
          API 版本控制策略。節流（AnonRate、UserRate、ScopedRate）。 OpenAPI/Swagger 與 drf
          壯觀。使用 DRF 測試客戶端進行 API 測試。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：身份驗證和安全性
    description: Django auth、JWT、OAuth2、權限、安全最佳實踐
    sort_order: 3
    lessons:
      - id: 019d8b40-c301-7001-b004-django00000301
        title: 第 9 課：身份驗證 - 會話、令牌和 JWT
        slug: bai-9-authentication-session-token-va-jwt
        description: >-
          Django 身份驗證系統，自訂使用者模型。會話驗證、令牌驗證、JWT 與
          djangorestframework-simplejwt。令牌刷新、黑名單。多因素身份驗證。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-c302-7001-b004-django00000302
        title: 第 10 課：權限與授權
        slug: bai-10-permissions-va-authorization
        description: >-
          DRF 權限（IsAuthenticated、IsAdminUser、自訂權限）。物件級權限，django-guardian。 Django
          群組和權限，RBAC 模式。 Django 規則。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-c303-7001-b004-django00000303
        title: 第 11 課：社交身分驗證與 OAuth2
        slug: bai-11-social-auth-va-oauth2
        description: >-
          django-allauth 用於社交認證。 Google、GitHub、Facebook 登入。帶有
          django-oauth-toolkit 的 OAuth2 提供者。帳戶連結、電子郵件驗證。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-c304-7001-b004-django00000304
        title: 第 12 課：安全最佳實踐
        slug: bai-12-security-best-practices
        description: >-
          CSRF、XSS、SQL 注入防護。 CORS 與
          django-cors-headers。速率限制、安全中介軟體。內容安全策略，django-csp。 Django 的 OWASP 前 10
          名。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：進階功能
    description: Django Channels、Celery、快取、訊號、管理自訂
    sort_order: 4
    lessons:
      - id: 019d8b40-c401-7001-b004-django00000401
        title: 第 13 課：Django 管理自訂
        slug: bai-13-django-admin-customization
        description: >-
          ModelAdmin
          客製化、list_display、list_filter、search_fields。內嵌模型、自訂管理作業、管理小工具。
          django-unfold 用於現代管理 UI。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-c402-7001-b004-django00000402
        title: 第 14 課：Django 通道和 WebSocket
        slug: bai-14-django-channels-va-websockets
        description: >-
          Django Channels、ASGI、通道層 (Redis)。 WebSocket
          消費者、群體、廣播。即時聊天應用程式。具有通道的後台工作人員。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-c403-7001-b004-django00000403
        title: 第 15 課：Celery、訊號與緩存
        slug: bai-15-celery-signals-va-caching
        description: >-
          Celery 與 Redis/RabbitMQ，週期性任務 (Celery Beat)。 Django 訊號，自訂訊號。 Django
          快取框架、Redis 快取、快取模式。 django-cachalot。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-c404-7001-b004-django00000404
        title: 第 16 課：文件儲存、電子郵件和通知
        slug: bai-16-file-storage-email-va-notifications
        description: >-
          Django 儲存後端，帶有 django-storages 的 S3。使用 Pillow
          進行影像處理。電子郵件發送，範本。推播通知，django-notifications-hq。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：測試、部署和生產
    description: 測試、Docker、CI/CD、監控、效能最佳化
    sort_order: 5
    lessons:
      - id: 019d8b40-c501-7001-b004-django00000501
        title: 第 17 課：在 Django 中測試
        slug: bai-17-testing-trong-django
        description: >-
          Django 測試用例，pytest-django。工廠男孩，麵包店模特兒。使用 DRF 測試客戶端進行 API
          測試。覆蓋率報告，測試策略。模擬、固定裝置、事務測試。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-c502-7001-b004-django00000502
        title: 第 18 課：效能優化
        slug: bai-18-performance-optimization
        description: >-
          QuerySet 最佳化、select_lated/prefetch_lated、子查詢、F/Q 物件。資料庫索引、查詢分析。 Django
          調試工具列，django-silk 分析。異步視圖。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-c503-7001-b004-django00000503
        title: 第 19 課：Django 的 Docker 和 CI/CD
        slug: bai-19-docker-va-cicd-cho-django
        description: >-
          Django 的 Dockerfile 多階段建置。 Docker Compose（Django + PostgreSQL + Redis
          + Celery + Nginx）。 GitHub Actions CI/CD 管道。 Gunicorn 配置，靜態檔案服務。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-c504-7001-b004-django00000504
        title: 第 20 課：生產部署與監控
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          部署 Django + Nginx + Gunicorn。 Sentry 錯誤追蹤、結構化日誌記錄。 Prometheus
          指標、Grafana 儀表板。 Django 健康檢查、擴展策略、零停機部署。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: zh-tw
---

課程 **Django：從基礎知識到進階** 旨在幫助您掌握 Django — 用於 Web 開發的最強大的「內建電池」Python 框架，從 MVT 模式到 REST API 生產就緒。

## 你會學到什麼？

- **Django 核心**：模型、檢視、範本、URL 路由、表單、管理
- **Django REST Framework**：序列化器、視圖集、路由器、分頁、過濾
- **身份驗證**：會話、JWT、OAuth2、社交登入、權限
- **進階**：通道 (WebSockets)、Celery、快取、訊號、檔案存儲
- **生產**：測試、Docker、CI/CD、監控、效能最佳化

## 請求

- 基礎Python知識（函數、類別、模組）
- 對 HTTP、HTML 和 SQL 的基本了解
- 安裝了 Python 3.12+ 和 Docker 的計算機
