---
id: 019d8b40-e101-7001-b006-flutter000101
title: 第 1 課：介紹 Flutter 與 Dart
slug: bai-1-gioi-thieu-flutter-va-dart
description: >-
  什麼是 Flutter，Skia 引擎架構，與 React Native、Kotlin Multiplatform 的比較。 Dart
  語言概述，DartPad。安裝 Flutter SDK、Android Studio/VS Code 安裝程式。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Dart 和 Flutter 基礎知識
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-992" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-992)"/>

  <!-- Decorations -->
  <g>
    <circle cx="622" cy="156" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="644" cy="198" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="666" cy="240" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="688" cy="282" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="64" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="56" x2="1100" y2="136" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="86" x2="1050" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：介紹 Flutter 與 Dart</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Dart 和 Flutter 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-flutter-la-gi"><strong>1.什麼是顫振？</strong></h2>

<p>Flutter 是 Google 的 UI 工具包，可讓您從單一程式碼庫在行動裝置、Web 和桌面上建立本機編譯的應用程式。顫振用途 <strong>斯基亞發動機</strong> 直接渲染到畫布，而不依賴本機小工具。</p>

<table>
<thead><tr><th>框架</th><th>引擎</th><th>語言</th><th>優點</th></tr></thead>
<tbody>
<tr><td>顫動</td><td>斯基亞/葉輪</td><td>飛鏢</td><td>60fps，像素完美的 UI</td></tr>
<tr><td>反應本機</td><td>本地橋</td><td>JavaScript</td><td>龐大的 JS 生態系統</td></tr>
<tr><td>Kotlin 多平台</td><td>本地人</td><td>科特林</td><td>共享業務邏輯</td></tr>
</tbody>
</table>

<h2 id="2-setup"><strong>2.安裝顫振</strong></h2>

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

<h2 id="3-first-app"><strong>3. 首次申請</strong></h2>

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

<h2 id="4-structure"><strong>4. 項目結構</strong></h2>

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

<p>下一篇： <strong>Dart 語言深入探究</strong>。</p>
