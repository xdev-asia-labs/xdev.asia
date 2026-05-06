---
id: 019d8b40-a100-7001-b002-fastapi000001
title: Python FastAPI：從基礎到進階
slug: python-fastapi-tu-co-ban-den-nang-cao
description: >-
  Python FastAPI 課程從基礎到進階都很全面，幫助您掌握後端 API 最現代的 Python 框架。包括 Python
  基礎知識、Pydantic、async/await、SQLAlchemy、Alembic、身份驗證、授權、OAuth2、WebSockets、後台任務、測試、Docker
  和生產部署。使用最新的 2026 年最佳實務更新至 FastAPI 0.115+ 和 Python 3.12+。
featured_image: uploads/2026/03/python-fastapi-banner-v2.png
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
  - name: FastAPI
    slug: fastapi
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Pydantic
    slug: pydantic
  - name: SQLAlchemy
    slug: sqlalchemy
  - name: Alembic
    slug: alembic
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: JWT
    slug: jwt
  - name: OAuth2
    slug: oauth2
  - name: WebSocket
    slug: websocket
  - name: Async
    slug: async
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
sections:
  - id: section-01
    title: 第 1 部分：Python 基礎和 FastAPI
    description: 熟悉現代 Python、FastAPI 並建立您的第一個 REST API
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b002-fastapi000101
        title: 第 1 課：介紹 FastAPI - 最現代的 Python 框架
        slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
        description: >-
          了解 FastAPI 是什麼，與 Django、Flask、Litestar 進行比較。 ASGI
          架構、非同步優先、類型提示、自動文件。生態系統和實際用例。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b002-fastapi000102
        title: 第 2 課：FastAPI 的 Python 基礎知識
        slug: bai-2-python-essentials-cho-fastapi
        description: >-
          FastAPI 的基本 Python 回顧：類型提示、資料類別、裝飾器、上下文管理器、生成器、基本非同步/等待。使用 Poetry/uv
          進行虛擬環境和依賴管理。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b002-fastapi000103
        title: 第 3 課：安裝並初始化 FastAPI 項目
        slug: bai-3-cai-dat-va-khoi-tao-fastapi-project
        description: >-
          安裝FastAPI和Uvicorn，初始化專案結構，了解標準目錄結構。運行開發伺服器、Swagger UI、ReDoc 並編寫第一個 API
          端點。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b002-fastapi000104
        title: 第 4 課：路徑操作、請求與回應
        slug: bai-4-path-operations-request-va-response
        description: >-
          路徑參數、查詢參數、請求內文、標頭、Cookie。 HTTP 方法、狀態碼、回應模型、JSONResponse。使用 Pydantic
          自動進行類型驗證。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：Pydantic、資料庫和 ORM
    description: Pydantic 模型、SQLAlchemy ORM、Alembic 遷移、CRUD 操作
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b002-fastapi000201
        title: 第 5 課：Pydantic V2 - 資料驗證與序列化
        slug: bai-5-pydantic-v2-data-validation-va-serialization
        description: >-
          Pydantic BaseModel、欄位驗證器、model_validator、計算欄位。自訂類型、JSON 模式產生、使用
          pydantic-settings 進行設定管理。嵌套模式和受歧視的聯合。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b002-fastapi000202
        title: 第 6 課：SQLAlchemy 2.0 和非同步資料庫
        slug: bai-6-sqlalchemy-2-va-async-database
        description: >-
          SQLAlchemy 2.0 ORM 具有宣告式映射、關係式（1-1、1-N、N-N）、具有 asyncpg
          的非同步引擎。會話管理，工作單元模式。連接 PostgreSQL 和 MySQL。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b002-fastapi000203
        title: 第 7 課：Alembic 遷移與資料庫播種
        slug: bai-7-alembic-migrations-va-database-seeding
        description: 非同步 SQLAlchemy 的 Alembic 配置、自動產生遷移、遷移策略。資料庫播種、批次操作、原始 SQL。多資料庫和模式版本控制。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b002-fastapi000204
        title: 第 8 課：CRUD 操作與儲存庫模式
        slug: bai-8-crud-operations-va-repository-pattern
        description: 建立完整的 CRUD API、儲存庫模式、分頁、過濾、排序。 FastAPI 中使用 Depends() 進行依賴注入。錯誤處理和自訂異常。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：身份驗證和安全性
    description: OAuth2、JWT、密碼雜湊、RBAC、CORS、速率限制
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b002-fastapi000301
        title: 第 9 課：使用 OAuth2 和 JWT 進行身份驗證
        slug: bai-9-authentication-voi-oauth2-va-jwt
        description: >-
          FastAPI、JWT 存取權杖和刷新令牌中的 OAuth2 密碼流。使用 Passlib/Bcrypt 進行密碼雜湊。令牌輪換、黑名單。
          OpenAPI 中的安全方案。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b002-fastapi000302
        title: 第 10 課：授權 - RBAC 和權限
        slug: bai-10-authorization-rbac-va-permissions
        description: FastAPI 中基於角色的存取控制、基於權限的授權。授權、裝飾器模式的自訂相依性。多租戶授權策略。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b002-fastapi000303
        title: 第 11 課：安全最佳實踐
        slug: bai-11-security-best-practices
        description: >-
          CORS 設定、SlowAPI 速率限制、輸入清理、SQL 注入預防。 HTTPS、安全標頭、環境變數管理。 FastAPI 的 OWASP
          前 10 名。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b002-fastapi000304
        title: 第 12 課：社交登入和 OAuth2 提供者
        slug: bai-12-social-login-va-oauth2-providers
        description: >-
          OAuth2 授權程式碼流程，使用 Google、GitHub、Facebook 進行社群登入。 Authlib
          整合、帳戶連結、OpenID Connect。多提供者身份驗證策略。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：進階功能
    description: 中間件、WebSockets、後台任務、快取、檔案上傳、非同步深入研究
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b002-fastapi000401
        title: 第 13 課：中介軟體、事件與生命週期
        slug: bai-13-middleware-events-va-lifespan
        description: >-
          HTTP 中間件、ASGI 中間件、Starlette 中間件堆疊。生命週期事件（啟動/關閉）、應用程式狀態。用於日誌記錄、計時、請求 ID
          追蹤的自訂中間件。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b002-fastapi000402
        title: 第 14 課：WebSocket 和即時通信
        slug: bai-14-websockets-va-real-time-communication
        description: FastAPI、連線管理員、廣播、房間模式中的 WebSocket 端點。即時聊天、通知。伺服器發送事件 (SSE) 和長輪詢替代方案。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b002-fastapi000403
        title: 第 15 課：後台任務、Celery 和任務佇列
        slug: bai-15-background-tasks-celery-va-task-queues
        description: >-
          FastAPI 後台任務、帶有 Redis/RabbitMQ 代理的 Celery、用於計劃任務的 Celery
          Beat。任務鏈、錯誤處理、重試策略。非同步任務佇列的 ARQ 和 SAQ 替代方案。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b002-fastapi000404
        title: 第 16 課：文件上傳、快取和非同步深入探討
        slug: bai-16-file-upload-caching-va-async-deep-dive
        description: >-
          檔案上傳流、UploadFile、多部分錶單。使用 fastapi-cache2 進行 Redis
          快取。非同步/等待深入研究：非同步、並發任務、信號量、非同步產生器。 httpx 用於非同步 HTTP 用戶端。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：架構、測試與生產
    description: 乾淨的架構、測試、Docker、CI/CD 和生產部署
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b002-fastapi000501
        title: 第 17 課：簡潔的架構與專案結構
        slug: bai-17-clean-architecture-va-project-structure
        description: FastAPI 的簡潔架構、領域驅動設計基礎。服務層、儲存庫模式、使用案例。適用於大規模應用的模組化專案結構。 API 版本控制策略。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b002-fastapi000502
        title: 第 18 課：FastAPI 測試
        slug: bai-18-testing-trong-fastapi
        description: >-
          使用 pytest、TestClient 和 httpx.AsyncClient
          進行單元測試。整合測試，帶有factory_boy的資料庫裝置。模擬依賴關係，測試資料庫隔離。程式碼覆蓋率和測試策略。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b002-fastapi000503
        title: 第 19 課：FastAPI 的 Dockerize 與 CI/CD
        slug: bai-19-dockerize-va-cicd-cho-fastapi
        description: >-
          針對 FastAPI、Docker Compose 與 PostgreSQL、Redis、Celery 工作人員的 Dockerfile
          多階段建置。 GitHub Actions CI/CD 管道。健康檢查、正常關閉、Gunicorn + Uvicorn 工作人員。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b002-fastapi000504
        title: 第 20 課：生產部署與監控
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          將 FastAPI 部署到 VPS/雲端（AWS、GCP）。 Nginx 反向代理、SSL/TLS。使用
          structlog、OpenTelemetry 追蹤進行記錄。 Prometheus 指標、Grafana
          儀表板。效能調整、連線池、擴充策略。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: zh-tw
---

