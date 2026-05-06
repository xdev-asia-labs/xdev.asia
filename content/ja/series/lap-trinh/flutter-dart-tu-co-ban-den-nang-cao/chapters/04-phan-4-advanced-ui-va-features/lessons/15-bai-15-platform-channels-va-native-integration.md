---
id: 019d8b40-e403-7001-b006-flutter000403
title: 'レッスン 15: プラットフォーム チャネルとネイティブ統合'
slug: bai-15-platform-channels-va-native-integration
description: >-
  メソッドチャネル、イベントチャネル。 Flutter (iOS/Android) からネイティブ コードを呼び出します。ピジョンコードの生成。 C/C++
  ライブラリの FFI。プラグイン開発。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: 高度な UI と機能'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'フラッター＆ダーツ: 基本から上級まで'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3704" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3704)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1073" cy="69" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1019" cy="95" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="108" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="121" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="179" x2="1100" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="209" x2="1050" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="958.444863728671,112 958.444863728671,146 929,163 899.555136271329,146 899.555136271329,112.00000000000001 929,95" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: プラットフォーム チャネルとネイティブ</tspan>
      <tspan x="60" dy="42">統合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">フラッター＆ダーツ: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な UI と機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-method-channel"><strong>1.メソッドチャネル</strong></h2>

<pre><code class="language-dart">// Dart side
class BatteryService {
  static const _channel = MethodChannel('com.example.app/battery');

  Future&lt;int&gt; getBatteryLevel() async {
    final level = await _channel.invokeMethod&lt;int&gt;('getBatteryLevel');
    return level ?? -1;
  }
}
</code></pre>

<pre><code class="language-kotlin">// Android — MainActivity.kt
class MainActivity : FlutterActivity() {
    private val CHANNEL = "com.example.app/battery"

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL)
            .setMethodCallHandler { call, result ->
                when (call.method) {
                    "getBatteryLevel" -> {
                        val batteryManager = getSystemService(BATTERY_SERVICE) as BatteryManager
                        val level = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
                        result.success(level)
                    }
                    else -> result.notImplemented()
                }
            }
    }
}
</code></pre>

<pre><code class="language-swift">// iOS — AppDelegate.swift
@UIApplicationMain
class AppDelegate: FlutterAppDelegate {
    override func application(_ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        let controller = window?.rootViewController as! FlutterViewController
        let channel = FlutterMethodChannel(name: "com.example.app/battery", binaryMessenger: controller.binaryMessenger)

        channel.setMethodCallHandler { (call, result) in
            if call.method == "getBatteryLevel" {
                UIDevice.current.isBatteryMonitoringEnabled = true
                let level = Int(UIDevice.current.batteryLevel * 100)
                result(level)
            } else {
                result(FlutterMethodNotImplemented)
            }
        }

        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
}
</code></pre>

<h2 id="2-event-channel"><strong>2. EventChannel — ネイティブからのストリーム</strong></h2>

<pre><code class="language-dart">// Dart side — lắng nghe sensor
class AccelerometerService {
  static const _channel = EventChannel('com.example.app/accelerometer');

  Stream&lt;AccelerometerData&gt; get stream {
    return _channel.receiveBroadcastStream().map((event) {
      final data = event as Map;
      return AccelerometerData(
        x: data['x'] as double,
        y: data['y'] as double,
        z: data['z'] as double,
      );
    });
  }
}
</code></pre>

<h2 id="3-pigeon"><strong>3. Pigeon — タイプセーフなコード生成</strong></h2>

<pre><code class="language-dart">// pigeons/messages.dart
import 'package:pigeon/pigeon.dart';

class SearchRequest {
  String? query;
  int? limit;
}

class SearchResponse {
  List&lt;String?&gt;? results;
}

@HostApi()
abstract class SearchApi {
  SearchResponse search(SearchRequest request);
}
</code></pre>

<pre><code class="language-bash"># Generate
dart run pigeon --input pigeons/messages.dart \
    --dart_out lib/src/generated/messages.g.dart \
    --kotlin_out android/app/src/main/kotlin/Messages.g.kt \
    --swift_out ios/Runner/Messages.g.swift
</code></pre>

<h2 id="4-ffi"><strong>4.ダーツFFI</strong></h2>

<pre><code class="language-dart">import 'dart:ffi';

typedef NativeAdd = Int32 Function(Int32, Int32);
typedef DartAdd = int Function(int, int);

final dylib = DynamicLibrary.open('libnative.so');

final add = dylib.lookupFunction&lt;NativeAdd, DartAdd&gt;('add');

void main() {
  print(add(3, 5)); // 8
}
</code></pre>

<p>次の記事: <strong>プッシュ通知とバックグラウンドタスク</strong>。</p>
