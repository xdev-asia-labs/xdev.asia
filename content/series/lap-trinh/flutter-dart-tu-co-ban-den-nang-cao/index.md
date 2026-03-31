---
id: 019d8b40-e100-7001-b006-flutter000001
title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
slug: flutter-dart-tu-co-ban-den-nang-cao
description: >-
  Khóa học Flutter và Dart toàn diện từ cơ bản đến nâng cao, giúp bạn xây dựng
  ứng dụng mobile cross-platform chuyên nghiệp. Bao gồm Dart fundamentals,
  Widget tree, State Management (Riverpod/Bloc), Navigation, Firebase,
  REST API, Local Storage, Testing, CI/CD và publish lên App Store/Google Play.
  Cập nhật theo Flutter 3.27+ và Dart 3.6+ với các best practices mới nhất 2026.
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
  name: Lập Trình
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
    title: 'Phần 1: Dart & Flutter Fundamentals'
    description: 'Dart language, Flutter setup, widgets, layouts, navigation'
    sort_order: 1
    lessons:
      - id: 019d8b40-e101-7001-b006-flutter000101
        title: 'Bài 1: Giới thiệu Flutter & Dart'
        slug: bai-1-gioi-thieu-flutter-va-dart
        description: >-
          Flutter là gì, kiến trúc Skia engine, so sánh với React Native,
          Kotlin Multiplatform. Dart language overview, DartPad. Cài đặt Flutter
          SDK, Android Studio/VS Code setup.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-e102-7001-b006-flutter000102
        title: 'Bài 2: Dart Language Deep Dive'
        slug: bai-2-dart-language-deep-dive
        description: >-
          Variables, types, null safety, late keyword. Functions, closures,
          extensions. Classes, mixins, abstract classes. Collections (List,
          Set, Map), pattern matching, records. Async/await, Futures, Streams.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-e103-7001-b006-flutter000103
        title: 'Bài 3: Widget Tree & Basic Widgets'
        slug: bai-3-widget-tree-va-basic-widgets
        description: >-
          Widget tree, Element tree, RenderObject tree. StatelessWidget vs
          StatefulWidget. Text, Image, Icon, Button widgets. MaterialApp,
          Scaffold, AppBar. Hot reload/restart.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-e104-7001-b006-flutter000104
        title: 'Bài 4: Layouts & Responsive Design'
        slug: bai-4-layouts-va-responsive-design
        description: >-
          Row, Column, Stack, Expanded, Flexible. Container, Padding, SizedBox.
          ListView, GridView, CustomScrollView, Slivers. MediaQuery,
          LayoutBuilder, responsive breakpoints.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Navigation & State Management'
    description: 'Routing, state management, form handling, theming'
    sort_order: 2
    lessons:
      - id: 019d8b40-e201-7001-b006-flutter000201
        title: 'Bài 5: Navigation & Routing'
        slug: bai-5-navigation-va-routing
        description: >-
          Navigator 2.0, GoRouter. Named routes, path parameters, query
          parameters. Nested navigation, tab navigation, drawer navigation.
          Deep linking, route guards.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-e202-7001-b006-flutter000202
        title: 'Bài 6: State Management với Riverpod'
        slug: bai-6-state-management-voi-riverpod
        description: >-
          Provider vs Riverpod vs Bloc. Riverpod 2.0: Provider, StateProvider,
          StateNotifierProvider, FutureProvider, StreamProvider. Auto-dispose,
          family modifier. Code generation với riverpod_generator.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-e203-7001-b006-flutter000203
        title: 'Bài 7: Bloc Pattern & Cubit'
        slug: bai-7-bloc-pattern-va-cubit
        description: >-
          Bloc pattern, Events, States. Cubit vs Bloc. BlocProvider,
          BlocBuilder, BlocListener, BlocConsumer. MultiBlocProvider,
          Bloc-to-Bloc communication. Hydrated Bloc.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-e204-7001-b006-flutter000204
        title: 'Bài 8: Forms, Validation & Theming'
        slug: bai-8-forms-validation-va-theming
        description: >-
          Form widget, TextFormField, validation. flutter_form_builder,
          custom form fields. ThemeData, ColorScheme, TextTheme. Dark mode,
          dynamic theming. Custom fonts, Material 3.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Networking & Data'
    description: 'REST API, local storage, Firebase, offline-first'
    sort_order: 3
    lessons:
      - id: 019d8b40-e301-7001-b006-flutter000301
        title: 'Bài 9: HTTP & REST API Integration'
        slug: bai-9-http-va-rest-api-integration
        description: >-
          Dio HTTP client, interceptors, retry. JSON serialization với
          json_serializable/freezed. Repository pattern, error handling.
          Pagination, infinite scroll.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-e302-7001-b006-flutter000302
        title: 'Bài 10: Local Storage & Offline First'
        slug: bai-10-local-storage-va-offline-first
        description: >-
          SharedPreferences, secure_storage. SQLite với drift (moor).
          Hive/Isar NoSQL database. Offline-first architecture, sync
          strategies, connectivity handling.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-e303-7001-b006-flutter000303
        title: 'Bài 11: Firebase Integration'
        slug: bai-11-firebase-integration
        description: >-
          FlutterFire setup, Firebase Auth (email, Google, Apple sign-in).
          Cloud Firestore, realtime listeners. Firebase Storage, Cloud
          Messaging (push notifications). Crashlytics.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-e304-7001-b006-flutter000304
        title: 'Bài 12: Authentication & Authorization'
        slug: bai-12-authentication-va-authorization
        description: >-
          JWT authentication flow, token storage (flutter_secure_storage).
          OAuth2, biometric authentication. Role-based navigation,
          protected routes. Session management.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Advanced UI & Features'
    description: 'Animations, custom painting, platform channels, camera, maps'
    sort_order: 4
    lessons:
      - id: 019d8b40-e401-7001-b006-flutter000401
        title: 'Bài 13: Animations & Motion'
        slug: bai-13-animations-va-motion
        description: >-
          Implicit animations (AnimatedContainer, AnimatedOpacity). Explicit
          animations (AnimationController, Tween, Curves). Hero transitions,
          page transitions. Rive/Lottie animations.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-e402-7001-b006-flutter000402
        title: 'Bài 14: Custom Painting & Advanced Widgets'
        slug: bai-14-custom-painting-va-advanced-widgets
        description: >-
          CustomPainter, Canvas API, drawing paths. CustomClipper,
          ShaderMask. ReorderableListView, Draggable. Slivers deep dive,
          StickyHeaders, NestedScrollView.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-e403-7001-b006-flutter000403
        title: 'Bài 15: Platform Channels & Native Integration'
        slug: bai-15-platform-channels-va-native-integration
        description: >-
          MethodChannel, EventChannel, Pigeon. Camera, image picker,
          file picker. Location services, Google Maps. Permissions handling.
          Platform-specific UI (Cupertino widgets).
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-e404-7001-b006-flutter000404
        title: 'Bài 16: Push Notifications & Background Tasks'
        slug: bai-16-push-notifications-va-background-tasks
        description: >-
          Firebase Cloud Messaging, local notifications. Background fetch,
          WorkManager. WebSockets cho real-time. App lifecycle, deep
          linking, universal links.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Architecture & Patterns'
    description: 'Clean architecture, dependency injection, modularization'
    sort_order: 5
    lessons:
      - id: 019d8b40-e501-7001-b006-flutter000501
        title: 'Bài 17: Clean Architecture cho Flutter'
        slug: bai-17-clean-architecture-cho-flutter
        description: >-
          Clean Architecture layers (Presentation, Domain, Data). Use cases,
          repositories, data sources. Dependency injection với get_it/injectable.
          Feature-first project structure.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-e502-7001-b006-flutter000502
        title: 'Bài 18: Code Generation & Freezed'
        slug: bai-18-code-generation-va-freezed
        description: >-
          build_runner, freezed cho immutable models. json_serializable,
          auto_route, injectable. Sealed classes, union types. Reducing
          boilerplate code.
        duration_minutes: 100
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Phần 6: Testing, CI/CD & Production'
    description: 'Testing, CI/CD, app signing, store publishing'
    sort_order: 6
    lessons:
      - id: 019d8b40-e601-7001-b006-flutter000601
        title: 'Bài 19: Testing trong Flutter'
        slug: bai-19-testing-trong-flutter
        description: >-
          Unit tests, widget tests, integration tests. Mocktail/Mockito
          mocking. Golden tests cho UI snapshots. Test coverage, testing
          Bloc/Riverpod. flutter_test package.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-e602-7001-b006-flutter000602
        title: 'Bài 20: Performance & Debugging'
        slug: bai-20-performance-va-debugging
        description: >-
          Flutter DevTools, performance overlay. Widget rebuild optimization,
          const constructors. Memory profiling, jank detection. Flutter
          Inspector, Dart Observatory.
        duration_minutes: 100
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-e603-7001-b006-flutter000603
        title: 'Bài 21: CI/CD & App Signing'
        slug: bai-21-cicd-va-app-signing
        description: >-
          Fastlane, Codemagic, GitHub Actions cho Flutter. Android keystore,
          iOS certificates & provisioning profiles. Flavor/scheme cho
          dev/staging/production. App distribution (Firebase App Distribution).
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-e604-7001-b006-flutter000604
        title: 'Bài 22: Publish lên App Store & Google Play'
        slug: bai-22-publish-len-app-store-va-google-play
        description: >-
          Google Play Console, App Store Connect. App metadata, screenshots,
          store listing. Review guidelines, common rejection reasons.
          In-app purchases, subscriptions. Analytics, crash reporting,
          A/B testing.
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
---

Khóa học **Flutter & Dart: Từ Cơ bản đến Nâng cao** giúp bạn xây dựng ứng dụng mobile cross-platform (iOS + Android) chuyên nghiệp với Flutter — framework UI đa nền tảng phổ biến nhất từ Google.

## Bạn sẽ học được gì?

- **Dart Language**: Null safety, async/await, Streams, pattern matching, records
- **Flutter UI**: Widgets, Layouts, Navigation, Animations, Custom Painting
- **State Management**: Riverpod, Bloc/Cubit, Provider patterns
- **Data**: REST API, Firebase, Local Storage, Offline-First
- **Advanced**: Platform Channels, Push Notifications, Clean Architecture
- **Production**: Testing, CI/CD, App Store/Google Play publishing

## Yêu cầu

- Kiến thức lập trình OOP cơ bản
- Máy tính macOS (cho iOS development) hoặc Windows/Linux (Android only)
- Flutter SDK 3.27+ và Android Studio / VS Code
