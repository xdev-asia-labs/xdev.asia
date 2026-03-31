---
id: 019d8b40-e604-7001-b006-flutter000604
title: 'Bài 22: Publish lên App Store & Google Play'
slug: bai-22-publish-len-app-store-va-google-play
description: >-
  Google Play Console: listing, screenshots, release tracks.
  App Store Connect: metadata, TestFlight. App review guidelines.
  Versioning strategy, staged rollout. Post-launch monitoring.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-pre-publish"><strong>1. Chuẩn bị trước khi Publish</strong></h2>

<pre><code class="language-yaml"># pubspec.yaml
name: my_app
description: A Flutter application
version: 1.0.0+1  # version_name + version_code

flutter:
  uses-material-design: true
  assets:
    - assets/images/
    - assets/icons/
</code></pre>

<pre><code class="language-bash"># Build release
flutter build appbundle --release   # Android AAB
flutter build ipa --release         # iOS IPA

# Verify APK size
flutter build apk --analyze-size
</code></pre>

<table>
<thead><tr><th>Checklist</th><th>Android</th><th>iOS</th></tr></thead>
<tbody>
<tr><td>App icon</td><td>Adaptive icon các size</td><td>1024x1024 + các size</td></tr>
<tr><td>Splash screen</td><td>flutter_native_splash</td><td>flutter_native_splash</td></tr>
<tr><td>Permissions</td><td>AndroidManifest.xml</td><td>Info.plist</td></tr>
<tr><td>ProGuard</td><td>proguard-rules.pro</td><td>N/A</td></tr>
<tr><td>Signing</td><td>Keystore + key.properties</td><td>Certificates + Profiles</td></tr>
</tbody>
</table>

<h2 id="2-google-play"><strong>2. Google Play Console</strong></h2>

<pre><code class="language-text">Google Play Console workflow:
1. Tạo app: All apps → Create app
2. Store listing:
   - Title, Short description, Full description
   - Screenshots: phone (2+), tablet, TV nếu có
   - Feature graphic: 1024x500
   - App icon: 512x512
3. App content:
   - Privacy policy URL
   - Content rating questionnaire
   - Target audience
   - Data safety form
4. Release:
   - Internal testing → Closed testing → Open testing → Production
   - Upload AAB file
   - Release notes cho mỗi version
5. Pricing & Distribution: Free/Paid, countries
</code></pre>

<h2 id="3-app-store"><strong>3. App Store Connect</strong></h2>

<pre><code class="language-text">App Store Connect workflow:
1. Tạo app: My Apps → (+) New App
   - Bundle ID matching Xcode
   - SKU unique
2. App Information:
   - Name, subtitle, category
   - Privacy policy URL
   - Age rating
3. Prepare for Submission:
   - Screenshots: 6.7", 6.5", 5.5" iPhone + iPad
   - Description, keywords, support URL
   - Build: upload từ Xcode hoặc Transporter
4. TestFlight:
   - Internal testing (25 testers max)
   - External testing (10,000 testers)
5. Submit for Review
</code></pre>

<h2 id="4-versioning"><strong>4. Versioning & Staged Rollout</strong></h2>

<pre><code class="language-dart">// Versioning strategy
// pubspec.yaml version format: MAJOR.MINOR.PATCH+BUILD_NUMBER
// Ví dụ: 1.2.3+45

// Auto-increment build number trong CI
// flutter build apk --build-number=$GITHUB_RUN_NUMBER
</code></pre>

<pre><code class="language-bash"># Android staged rollout
# Google Play Console → Release → Production
# Rollout percentage: 5% → 20% → 50% → 100%

# iOS phased release
# App Store Connect → Version → Phased Release
# 1% → 2% → 5% → 10% → 20% → 50% → 100% (7 ngày)
</code></pre>

<h2 id="5-monitoring"><strong>5. Post-Launch Monitoring</strong></h2>

<pre><code class="language-dart">// Firebase Crashlytics — theo dõi crashes
// Firebase Analytics — user behavior
// Firebase Performance — app performance

// Sentry alternative
import 'package:sentry_flutter/sentry_flutter.dart';

Future&lt;void&gt; main() async {
  await SentryFlutter.init(
    (options) {
      options.dsn = 'https://your-dsn@sentry.io/project';
      options.tracesSampleRate = 0.2;
      options.environment = 'production';
    },
    appRunner: () => runApp(const ProviderScope(child: MyApp())),
  );
}
</code></pre>

<p>Chúc mừng bạn đã hoàn thành series <strong>Flutter & Dart: Từ Cơ bản đến Nâng cao</strong>! 🎉</p>
