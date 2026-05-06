---
id: 019d8b40-e100-7001-b006-flutter000001
title: Flutter 和 Dart：從基礎到高級
slug: flutter-dart-tu-co-ban-den-nang-cao
description: >-
  Flutter 和 Dart 課程從基礎到進階都很全面，幫助您建立專業的跨平台行動應用程式。包括 Dart 基礎、Widget 樹、狀態管理
  (Riverpod/Bloc)、導航、Firebase、REST API、本機儲存、測試、CI/CD 以及發佈到 App Store/Google
  Play。使用最新的 2026 年最佳實踐更新到 Flutter 3.27+ 和 Dart 3.6+。
featured_image: uploads/2026/03/flutter-banner-v2.png
level: beginner
duration_hours: 85
lesson_count: 22
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
  - name: Flutter
    slug: flutter
  - name: Dart
    slug: dart
  - name: Mobile
    slug: mobile
  - name: Cross-Platform
    slug: cross-platform
  - name: iOS
    slug: ios
  - name: Android
    slug: android
  - name: Riverpod
    slug: riverpod
  - name: Bloc
    slug: bloc
  - name: Firebase
    slug: firebase
  - name: Testing
    slug: testing
  - name: UI/UX
    slug: ui-ux
  - name: State Management
    slug: state-management
  - name: REST API
    slug: rest-api
sections:
  - id: section-01
    title: 第 1 部分：Dart 和 Flutter 基礎知識
    description: Dart 語言、Flutter 設定、小工具、佈局、導航
    sort_order: 1
    lessons:
      - id: 019d8b40-e101-7001-b006-flutter000101
        title: 第 1 課：介紹 Flutter 與 Dart
        slug: bai-1-gioi-thieu-flutter-va-dart
        description: >-
          什麼是 Flutter，Skia 引擎架構，與 React Native、Kotlin Multiplatform 的比較。 Dart
          語言概述，DartPad。安裝 Flutter SDK、Android Studio/VS Code 安裝程式。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-e102-7001-b006-flutter000102
        title: 第 2 課：Dart 語言深入探究
        slug: bai-2-dart-language-deep-dive
        description: >-
          變數、類型、null 安全性、late
          關鍵字。函數、閉包、擴充。類別、mixin、抽象類別。集合（列表、集合、映射）、模式匹配、記錄。非同步/等待、期貨、流。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-e103-7001-b006-flutter000103
        title: 第 3 課：小部件樹和基本小部件
        slug: bai-3-widget-tree-va-basic-widgets
        description: >-
          Widget 樹、Element 樹、RenderObject 樹。 StatelessWidget 與
          StatefulWidget。文字、圖像、圖示、按鈕小工具。 MaterialApp、支架、AppBar。熱重載/重啟。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-e104-7001-b006-flutter000104
        title: 第 4 課：佈局與響應式設計
        slug: bai-4-layouts-va-responsive-design
        description: >-
          行、列、堆疊、擴充、靈活。容器、填充物、SizedBox。
          ListView、GridView、CustomScrollView、Slivers。
          MediaQuery、LayoutBuilder、響應式斷點。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：導航和狀態管理
    description: 路由、狀態管理、表單處理、主題
    sort_order: 2
    lessons:
      - id: 019d8b40-e201-7001-b006-flutter000201
        title: 第 5 課：導航與路線選擇
        slug: bai-5-navigation-va-routing
        description: 導航器2.0，GoRouter。命名路由、路徑參數、查詢參數。嵌套導航、選項卡導航、抽屜式導航。深層鏈接，路線守衛。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-e202-7001-b006-flutter000202
        title: 第 6 課：使用 Riverpod 進行狀態管理
        slug: bai-6-state-management-voi-riverpod
        description: >-
          Provider vs Riverpod vs Bloc。 Riverpod
          2.0：Provider、StateProvider、StateNotifierProvider、FutureProvider、StreamProvider。自動處置，系列修改器。使用
          Riverpod_generator 產生程式碼。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-e203-7001-b006-flutter000203
        title: 第 7 課：塊圖案和肘節
        slug: bai-7-bloc-pattern-va-cubit
        description: >-
          集團模式、事件、狀態。肘節 vs 塊。
          BlocProvider、BlocBuilder、BlocListener、BlocConsumer。
          MultiBlocProvider，塊到塊通信。水合塊。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-e204-7001-b006-flutter000204
        title: 第 8 課：表單、驗證與主題
        slug: bai-8-forms-validation-va-theming
        description: >-
          表單小部件、TextFormField、驗證。
          flutter_form_builder，自訂表單欄位。主題資料、顏色方案、文字主題。深色模式，動態主題。自訂字體，材質 3。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：網路與數據
    description: REST API、本機儲存、Firebase、離線優先
    sort_order: 3
    lessons:
      - id: 019d8b40-e301-7001-b006-flutter000301
        title: 第 9 課：HTTP 和 REST API 集成
        slug: bai-9-http-va-rest-api-integration
        description: >-
          Dio HTTP 用戶端、攔截器、重試。使用 json_serialized/freezed 進行 JSON
          序列化。儲存庫模式，錯誤處理。分頁，無限滾動。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-e302-7001-b006-flutter000302
        title: 第 10 課：本地儲存和離線優先
        slug: bai-10-local-storage-va-offline-first
        description: 共享首選項、安全儲存。 SQLite 與漂移（停泊）。 Hive/Isar NoSQL 資料庫。離線優先架構、同步策略、連線處理。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-e303-7001-b006-flutter000303
        title: 第 11 課：Firebase 集成
        slug: bai-11-firebase-integration
        description: >-
          FlutterFire 設定、Firebase Auth（電子郵件、Google、Apple 登入）。 Cloud
          Firestore，即時監聽器。 Firebase 儲存、雲端訊息傳遞（推播通知）。崩潰。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-e304-7001-b006-flutter000304
        title: 第 12 課：身分驗證與授權
        slug: bai-12-authentication-va-authorization
        description: >-
          JWT 驗證流程、令牌儲存 (flutter_secure_storage)。
          OAuth2，生物特徵認證。以角色為基礎的導航，受保護的路線。會話管理。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：進階 UI 和功能
    description: 動畫、自訂繪畫、平台頻道、相機、地圖
    sort_order: 4
    lessons:
      - id: 019d8b40-e401-7001-b006-flutter000401
        title: 第 13 課：動畫與動作
        slug: bai-13-animations-va-motion
        description: >-
          隱式動畫（AnimatedContainer、AnimatedOpacity）。顯式動畫（AnimationController、Tween、Curves）。英雄轉換、頁面轉換。
          Rive/Lottie 動畫。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-e402-7001-b006-flutter000402
        title: 第 14 課：自訂繪畫和高級小部件
        slug: bai-14-custom-painting-va-advanced-widgets
        description: >-
          CustomPainter、Canvas API、繪圖路徑。自訂剪輯器、著色器遮罩。可重新排序的ListView，可拖曳。 Slivers
          深入研究，StickyHeaders，NestedScrollView。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-e403-7001-b006-flutter000403
        title: 第 15 課：平台通路與本機集成
        slug: bai-15-platform-channels-va-native-integration
        description: >-
          方法通道、事件通道、鴿子。相機、影像選擇器、檔案選擇器。定位服務，Google地圖。權限處理。特定於平台的 UI（Cupertino
          小部件）。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-e404-7001-b006-flutter000404
        title: 第 16 課：推播通知與後台任務
        slug: bai-16-push-notifications-va-background-tasks
        description: Firebase 云消息传递、本地通知。後台獲取，WorkManager。即時 WebSocket。应用程序生命周期、深度链接、通用链接。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：架構與模式
    description: 乾淨的架構、依賴注入、模組化
    sort_order: 5
    lessons:
      - id: 019d8b40-e501-7001-b006-flutter000501
        title: 第 17 課：Flutter 的簡潔架構
        slug: bai-17-clean-architecture-cho-flutter
        description: 乾淨的架構層（表示、網域、資料）。用例、儲存庫、資料來源。使用 get_it/injectable 進行依賴注入。功能優先的項目結構。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-e502-7001-b006-flutter000502
        title: 第 18 課：程式碼產生與凍結
        slug: bai-18-code-generation-va-freezed
        description: >-
          build_runner，針對不可變模型凍結。
          json_serialized、auto_route、可注入。密封類別、聯合型別。減少樣板代碼。
        duration_minutes: 100
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 第 6 部分：測試、CI/CD 和生產
    description: 測試、CI/CD、應用程式簽名、商店發布
    sort_order: 6
    lessons:
      - id: 019d8b40-e601-7001-b006-flutter000601
        title: 第 19 課：Flutter 中的測試
        slug: bai-19-testing-trong-flutter
        description: >-
          單元測試、小部件測試、整合測試。 Mocktail/Mockito 嘲笑。 UI 快照的黃金測試。測試覆蓋率，測試
          Bloc/Riverpod。 flutter_test 套件。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-e602-7001-b006-flutter000602
        title: 第 20 課：效能與調試
        slug: bai-20-performance-va-debugging
        description: Flutter DevTools，效能疊加。小部件重建最佳化，常量建構函數。記憶體分析、卡頓檢測。達特天文台顫振檢查員。
        duration_minutes: 100
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-e603-7001-b006-flutter000603
        title: 第 21 課：CI/CD 和應用程式簽名
        slug: bai-21-cicd-va-app-signing
        description: >-
          Fastlane、Codemagic、Flutter 的 GitHub Actions。 Android 金鑰庫、iOS
          憑證和設定檔。開發/登台/生產的風格/方案。應用程式分發（Firebase 應用程式分發）。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-e604-7001-b006-flutter000604
        title: 第 22 課：發佈到 App Store 和 Google Play
        slug: bai-22-publish-len-app-store-va-google-play
        description: >-
          Google Play 控制台、App Store
          Connect。應用元資料、螢幕截圖、商店清單。查看指南、拒絕的常見原因。應用程式內購買、訂閱。分析、崩潰報告、A/B 測試。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
locale: zh-tw
---

**Flutter 和 Dart：從基礎知識到高級** 課程可協助您使用 Flutter（Google 最受歡迎的跨平台 UI 框架）建立專業的跨平台（iOS + Android）行動應用程式。

## 你會學到什麼？

- **Dart 語言**：空白安全性、非同步/等待、流、模式匹配、記錄
- **Flutter UI**：小部件、佈局、導航、動畫、自訂繪畫
- **狀態管理**：Riverpod、Bloc/Cubit、Provider 模式
- **資料**：REST API、Firebase、本機儲存、離線優先
- **進階**：平台頻道、推播通知、簡潔架構
- **生產**：測試、CI/CD、App Store/Google Play 發布

## 請求

- 基本的OOP程式設計知識
- macOS 電腦（用於 iOS 開發）或 Windows/Linux（僅限 Android）
- Flutter SDK 3.27+ 和 Android Studio / VS Code
