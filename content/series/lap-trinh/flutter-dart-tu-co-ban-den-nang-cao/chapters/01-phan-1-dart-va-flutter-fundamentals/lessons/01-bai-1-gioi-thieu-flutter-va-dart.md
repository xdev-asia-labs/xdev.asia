---
id: 019d8b40-e101-7001-b006-flutter000101
title: 'Bài 1: Giới thiệu Flutter & Dart'
slug: bai-1-gioi-thieu-flutter-va-dart
description: >-
  Flutter là gì, kiến trúc Skia engine, so sánh với React Native,
  Kotlin Multiplatform. Dart language overview, DartPad. Cài đặt
  Flutter SDK, Android Studio/VS Code setup.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Dart & Flutter Fundamentals"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-flutter-la-gi"><strong>1. Flutter là gì?</strong></h2>

<p>Flutter là UI toolkit của Google, cho phép xây dựng ứng dụng natively compiled trên mobile, web và desktop từ một codebase duy nhất. Flutter sử dụng <strong>Skia engine</strong> để render trực tiếp lên canvas, không phụ thuộc vào native widgets.</p>

<table>
<thead><tr><th>Framework</th><th>Engine</th><th>Ngôn ngữ</th><th>Ưu điểm</th></tr></thead>
<tbody>
<tr><td>Flutter</td><td>Skia/Impeller</td><td>Dart</td><td>60fps, UI pixel-perfect</td></tr>
<tr><td>React Native</td><td>Native Bridge</td><td>JavaScript</td><td>Hệ sinh thái JS lớn</td></tr>
<tr><td>Kotlin Multiplatform</td><td>Native</td><td>Kotlin</td><td>Shared business logic</td></tr>
</tbody>
</table>

<h2 id="2-setup"><strong>2. Cài đặt Flutter</strong></h2>

<pre><code class="language-bash"># macOS
brew install --cask flutter

# Kiểm tra
flutter doctor
flutter --version

# Tạo project mới
flutter create my_app
cd my_app
flutter run
</code></pre>

<h2 id="3-first-app"><strong>3. Ứng dụng đầu tiên</strong></h2>

<pre><code class="language-dart">import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      theme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Xin chào Flutter!')),
      body: const Center(
        child: Text('Hello World', style: TextStyle(fontSize: 24)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
</code></pre>

<h2 id="4-structure"><strong>4. Cấu trúc Project</strong></h2>

<pre><code class="language-text">my_app/
├── lib/
│   └── main.dart
├── test/
├── android/
├── ios/
├── web/
├── pubspec.yaml      # Dependencies
└── analysis_options.yaml
</code></pre>

<p>Bài tiếp theo: <strong>Dart Language Deep Dive</strong>.</p>
