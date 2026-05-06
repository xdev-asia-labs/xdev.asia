---
id: 019f1c30-a100-7001-c001-v1b3c0d10001
title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
slug: vibe-coding-voi-github-copilot
description: >-
  有關使用 GitHub Copilot 進行 Vibe 編碼的綜合課程 — 從基本概念到高級技術。了解如何利用 AI 代理、內聯建議、自訂指令、MCP
  伺服器、Copilot CLI 和 Copilot 編碼代理來加速軟體開發。包括程式碼快速工程、安全最佳實踐、處理技術債務、建立全端應用程式以及專業的
  Vibe 編碼生產流程。根據 GitHub Copilot 2026 更新了代理模式、排程代理程式、雲端代理程式和最新功能。
featured_image: uploads/2026/03/vibe-coding-github-copilot-banner.png
level: beginner
duration_hours: 65
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
  - name: AI
    slug: ai
  - name: GitHub Copilot
    slug: github-copilot
  - name: Vibe Coding
    slug: vibe-coding
  - name: VS Code
    slug: vs-code
  - name: Prompt Engineering
    slug: prompt-engineering
  - name: AI Agent
    slug: ai-agent
  - name: MCP
    slug: mcp
  - name: LLM
    slug: llm
  - name: Web Development
    slug: web-development
  - name: Productivity
    slug: productivity
  - name: TypeScript
    slug: typescript
  - name: Python
    slug: python
sections:
  - id: section-01
    title: 第 1 部分：Vibe 編碼平台和 GitHub Copilot
    description: Vibe Coding 概念，安裝 GitHub Copilot，熟悉基本功能
    sort_order: 1
    lessons:
      - id: 019f1c30-a101-7001-c001-v1b3c0d10101
        title: 第 1 課：什麼是 Vibe 編碼？ — 人工智慧程式設計新時代
        slug: bai-1-vibe-coding-la-gi-ky-nguyen-moi-cua-lap-trinh-voi-ai
        description: >-
          Vibe 編碼的定義 (Andrej Karpathy)、AI 輔助編碼開發的歷史、Vibe 編碼與傳統編碼的比較、流行工具（GitHub
          Copilot、Cursor、Replit Agent）、何時應該和不應該使用 Vibe 代碼。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019f1c30-a102-7001-c001-v1b3c0d10102
        title: 第 2 課：在 VS Code 中安裝和設定 GitHub Copilot
        slug: bai-2-cai-dat-va-cau-hinh-github-copilot-trong-vs-code
        description: >-
          註冊 GitHub
          Copilot（免費/專業版/專業版+/企業版）、安裝擴充功能、設定設定、選擇模型（GPT-5.4、Claude、Gemini）、自動模型選擇、鍵盤快速鍵和基本工作流程。
        duration_minutes: 45
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019f1c30-a103-7001-c001-v1b3c0d10103
        title: 第 3 課：內聯建議與下一個編輯建議 - 智慧代碼建議
        slug: bai-3-inline-suggestions-va-next-edit-suggestions
        description: >-
          幽靈文字完成、選項卡接受、循環建議、多行完成。下一個編輯建議 (NES) —
          預測下一個編輯。導航建議、部分接受、鍵盤快速鍵。優化建議品質的提示。
        duration_minutes: 60
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019f1c30-a104-7001-c001-v1b3c0d10104
        title: 第 4 課：內嵌聊天與智慧操作 — 現場編輯程式碼
        slug: bai-4-inline-chat-va-smart-actions
        description: >-
          內嵌聊天 (Cmd+I)
          用於針對性的編輯、重構、錯誤修復。智慧操作：產生提交訊息、重新命名符號、修復錯誤、語意搜尋。與副駕駛快速修復。融入日常工作流程。
        duration_minutes: 60
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第二部分：代理模式－AI自動編寫程式碼
    description: VS Code 中的主代理模式、聊天視圖和代理程式類型
    sort_order: 2
    lessons:
      - id: 019f1c30-a201-7001-c001-v1b3c0d10201
        title: 第5課：代理模式－讓AI為你寫程式碼
        slug: bai-5-agent-mode-de-ai-tu-viet-code-cho-ban
        description: >-
          什麼是代理，代理如何運作（計劃→執行→驗證），代理循環，聊天視圖（Ctrl+Cmd+I），比較代理與詢問與計劃模式。權限等級：預設、繞過批准、自動駕駛。動手實作：使用
          Agent 建立第一個 Web 應用程式。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019f1c30-a202-7001-c001-v1b3c0d10202
        title: 第 6 課：計劃代理 — 編碼前計劃
        slug: bai-6-plan-agent-lap-ke-hoach-truoc-khi-code
        description: 計劃代理工作流程：分析→計劃→移交。創建結構化的實施計劃，審查和調整計劃，交給代理模式執行。規劃複雜功能的最佳實務。比較計劃優先與代碼優先。
        duration_minutes: 75
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019f1c30-a203-7001-c001-v1b3c0d10203
        title: 第 7 課：雲端代理和 Copilot CLI — 代理隨處運行
        slug: bai-7-cloud-agent-va-copilot-cli
        description: >-
          本地代理、雲端代理、Copilot CLI 與第三方代理。雲端代理：自動建立分支、實施、開啟PR。 Copilot
          CLI：從終端運行代理，Git 工作樹隔離。在代理類型之間切換。會話管理。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：快速程式碼工程
    description: AI產生高品質程式碼的有效提示編寫技巧
    sort_order: 3
    lessons:
      - id: 019f1c30-a301-7001-c001-v1b3c0d10301
        title: 第 8 課：寫 Prompt for Code 的藝術 — 從模糊到精確
        slug: bai-8-nghe-thuat-viet-prompt-cho-code
        description: 良好程式碼提示的剖析：上下文、限制、範例。提示模式：程式碼的零樣本、少樣本、思考鏈。如何清楚描述需求。迭代提示。常見錯誤以及如何修復它們。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019f1c30-a302-7001-c001-v1b3c0d10302
        title: 第 9 課：情境管理－為 AI 提供情境
        slug: bai-9-context-management-cung-cap-ngu-canh-cho-ai
        description: >-
          上下文視窗的作用。如何附加文件、資料夾、選擇。
          #檔、#選擇、#編輯器參考。工作區索引。程式碼庫感知提示。保持上下文簡潔有效的技巧。什麼時候需要新的會話與繼續會話。
        duration_minutes: 75
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019f1c30-a303-7001-c001-v1b3c0d10303
        title: 第 10 課：進階提示模式 — 斜線指令、參與者與變數
        slug: bai-10-prompt-patterns-nang-cao
        description: >-
          斜杠指令（/init、/fix、/tests、/doc、/explain）。聊天參與者（@workspace、@terminal、@vscode）。上下文變數（#file、#selection、#codebase）。組合模式。常見用例的提示範本。個人提示庫。
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：自訂和擴充 Copilot
    description: 自訂指令、自訂代理、MCP 伺服器、Hooks — 擴充 AI 功能
    sort_order: 4
    lessons:
      - id: 019f1c30-a401-7001-c001-v1b3c0d10401
        title: 第 11 課：自訂指令 — 根據您的程式設計風格教授 AI
        slug: bai-11-custom-instructions-day-ai-theo-coding-style-cua-ban
        description: >-
          文件.github/copilot-instructions.md，高效的指令結構。項目級指令與用戶級指令。檔案類型特定指令
          (.instructions.md)。 /init 指令自動產生指令。團隊的最佳實踐。
        duration_minutes: 75
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019f1c30-a402-7001-c001-v1b3c0d10402
        title: 第 12 課：自訂代理程式和代理程式技能 — 創建專門的 AI
        slug: bai-12-custom-agents-va-agent-skills
        description: >-
          建立自訂代理程式 (.agent.md)：角色、工具、說明。 YAML 的前沿內容。代理技能
          (SKILL.md)：可重複使用的領域知識。例如：程式碼審閱者代理程式、文件編寫者代理程式、測試生成器代理程式。透過
          .github/agents/ 在團隊內共用代理程式。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019f1c30-a403-7001-c001-v1b3c0d10403
        title: 第 13 課：MCP 伺服器 — 將 AI 連接到外部世界
        slug: bai-13-mcp-servers-ket-noi-ai-voi-the-gioi-ben-ngoai
        description: >-
          什麼是模型上下文協定 (MCP)。在 VS Code 中安裝 MCP 伺服器。 Figma MCP、GitHub MCP、資料庫
          MCP。建立自訂 MCP 伺服器。安全考慮。實際用例：設計到程式碼、資料庫查詢、API 整合。用於自動化的副駕駛掛鉤。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 第 5 部分：Vibe 編碼實踐 — 建構真實項目
    description: 應用 Vibe Coding 從頭到尾建立全端應用程式
    sort_order: 5
    lessons:
      - id: 019f1c30-a501-7001-c001-v1b3c0d10501
        title: 第 14 課：Vibe 編碼全端應用程式（第 1 部分）－初始化與後端
        slug: bai-14-vibe-coding-full-stack-app-phan-1-backend
        description: >-
          實踐專案：建立一個完整的任務管理應用程式。使用代理模式初始化專案、設定後端（Node.js/Express 或
          Python/FastAPI）、資料庫架構、REST API、身份驗證。 Vibe 編碼工作流程正在運作。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019f1c30-a502-7001-c001-v1b3c0d10502
        title: 第 15 課：Vibe 編碼全端應用程式（第 2 部分）—前端與整合
        slug: bai-15-vibe-coding-full-stack-app-phan-2-frontend
        description: >-
          繼續專案：建立前端（React/Next.js）、響應式 UI、API 整合、狀態管理。使用 Copilot
          產生的測試進行測試。使用人工智慧進行調試。瀏覽器代理測試（實驗性）。部署預覽。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019f1c30-a503-7001-c001-v1b3c0d10503
        title: 第 16 課：移動和跨平台 Vibe 編碼
        slug: bai-16-vibe-coding-cho-mobile-va-cross-platform
        description: >-
          使用 Flutter/React Native 進行 Vibe 編碼。從想法到行動應用程式原型。 Dart、Swift、Kotlin
          的副駕駛。跨平台考慮。快速原型製作工作流程。結合 Figma MCP 進行設計到程式碼。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 第 6 部分：專業 Vibe 編碼 — 品質、安全與生產
    description: 最佳實踐、安全性、程式碼審查、技術債和產品流程
    sort_order: 6
    lessons:
      - id: 019f1c30-a601-7001-c001-v1b3c0d10601
        title: 第 17 課：程式碼品質與審查 — Vibe Responsible Coding
        slug: bai-17-code-quality-va-review-vibe-coding-co-trach-nhiem
        description: >-
          為什麼要審查人工智慧產生的程式碼？ Copilot
          程式碼審查（代理架構）。測試策略：單元測試、整合測試、AI產生的端對端測試。代碼品質指標。避免「編碼後遺症」。檢查清單審查人工智慧產生的程式碼。西蒙威利森的規則：理解你的程式碼。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019f1c30-a602-7001-c001-v1b3c0d10602
        title: 第 18 課：Vibe 編碼中的安全性 — 避免人工智慧的安全陷阱
        slug: bai-18-security-trong-vibe-coding
        description: >-
          AI 產生程式碼安全性的現況（VeraCode 2025、CodeRabbit 2025）。 OWASP Top 10 和 AI
          代碼。注入、身份驗證缺陷、秘密暴露。安全掃描工具。安全代碼的提示模式。案例研究：可愛的漏洞，蘭花的缺陷。安全檢查表。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019f1c30-a603-7001-c001-v1b3c0d10603
        title: 第 19 課：技術債與可維護性 — 管理人工智慧的技術債
        slug: bai-19-technical-debt-va-maintainability
        description: >-
          AI 產生的程式碼中出現程式碼重複、程式碼混亂 (GitClear
          2025)。重構人工智慧程式碼。架構一致性。文件.長期維護策略。何時重寫與迭代。開源影響（Vibe Coding Kills Open
          Source 論文，2026 年 1 月）。
        duration_minutes: 75
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019f1c30-a604-7001-c001-v1b3c0d10604
        title: 第 20 課：團隊與生產中的 Vibe 編碼 — 專業流程
        slug: bai-20-vibe-coding-trong-team-va-production
        description: >-
          企業/業務副駕駛：策略、內容排除、審核日誌。團隊工作流程：共用自訂指令、代理、MCP 伺服器。與 Copilot 整合 CI/CD。 PR
          自動化的編碼代理。指標和監控。未來 Vibe 編碼：Andrew Ng 的觀點，METR 研究（開發人員生產力）。負責任的人工智慧編碼宣言。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
locale: zh-tw
---

