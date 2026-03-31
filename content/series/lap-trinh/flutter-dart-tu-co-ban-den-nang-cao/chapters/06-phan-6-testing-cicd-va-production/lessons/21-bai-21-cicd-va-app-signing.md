---
id: 019d8b40-e603-7001-b006-flutter000603
title: 'Bài 21: CI/CD & App Signing'
slug: bai-21-cicd-va-app-signing
description: >-
  Android keystore & app signing. iOS certificates & provisioning profiles.
  GitHub Actions cho Flutter. Fastlane automation.
  Codemagic, App Center. Flavor/Environment configs.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-android-signing"><strong>1. Android App Signing</strong></h2>

<pre><code class="language-bash"># Tạo keystore
keytool -genkey -v -keystore upload-keystore.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload
</code></pre>

<pre><code class="language-properties"># android/key.properties (KHÔNG commit vào git)
storePassword=your_store_password
keyPassword=your_key_password
keyAlias=upload
storeFile=../upload-keystore.jks
</code></pre>

<pre><code class="language-groovy">// android/app/build.gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
</code></pre>

<h2 id="2-flavors"><strong>2. Build Flavors</strong></h2>

<pre><code class="language-dart">// lib/config/env.dart
enum Environment { dev, staging, production }

class EnvConfig {
  final String apiBaseUrl;
  final String appName;
  final Environment environment;

  const EnvConfig({required this.apiBaseUrl, required this.appName, required this.environment});

  static const dev = EnvConfig(
    apiBaseUrl: 'https://dev-api.example.com',
    appName: 'MyApp Dev',
    environment: Environment.dev,
  );

  static const production = EnvConfig(
    apiBaseUrl: 'https://api.example.com',
    appName: 'MyApp',
    environment: Environment.production,
  );
}
</code></pre>

<pre><code class="language-bash"># Run with flavor
flutter run --dart-define=ENV=dev
flutter build apk --dart-define=ENV=production
</code></pre>

<h2 id="3-github-actions"><strong>3. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml"># .github/workflows/flutter.yml
name: Flutter CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.24.0'
          channel: stable
      - run: flutter pub get
      - run: flutter analyze
      - run: flutter test --coverage
      - uses: codecov/codecov-action@v4
        with:
          file: coverage/lcov.info

  build-android:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.24.0'
      - run: flutter build appbundle --release --dart-define=ENV=production
      - uses: actions/upload-artifact@v4
        with:
          name: app-release
          path: build/app/outputs/bundle/release/app-release.aab

  build-ios:
    needs: test
    runs-on: macos-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.24.0'
      - run: flutter build ipa --release --dart-define=ENV=production --no-codesign
</code></pre>

<h2 id="4-fastlane"><strong>4. Fastlane Automation</strong></h2>

<pre><code class="language-ruby"># android/fastlane/Fastfile
default_platform(:android)

platform :android do
  lane :deploy do
    upload_to_play_store(
      track: 'internal',
      aab: '../build/app/outputs/bundle/release/app-release.aab',
    )
  end
end
</code></pre>

<pre><code class="language-ruby"># ios/fastlane/Fastfile
default_platform(:ios)

platform :ios do
  lane :deploy do
    build_app(workspace: "Runner.xcworkspace", scheme: "Runner")
    upload_to_testflight
  end
end
</code></pre>

<p>Bài tiếp theo: <strong>Publish lên App Store & Google Play</strong>.</p>
