---
id: 019d8b40-e403-7001-b006-flutter000403
title: 'Bài 15: Platform Channels & Native Integration'
slug: bai-15-platform-channels-va-native-integration
description: >-
  MethodChannel, EventChannel. Gọi native code từ Flutter (iOS/Android).
  Pigeon code generation. FFI cho C/C++ libraries. Plugin development.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Advanced UI & Features"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-method-channel"><strong>1. MethodChannel</strong></h2>

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

<h2 id="2-event-channel"><strong>2. EventChannel — Streams từ Native</strong></h2>

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

<h2 id="3-pigeon"><strong>3. Pigeon — Type-safe Code Generation</strong></h2>

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

<h2 id="4-ffi"><strong>4. Dart FFI</strong></h2>

<pre><code class="language-dart">import 'dart:ffi';

typedef NativeAdd = Int32 Function(Int32, Int32);
typedef DartAdd = int Function(int, int);

final dylib = DynamicLibrary.open('libnative.so');

final add = dylib.lookupFunction&lt;NativeAdd, DartAdd&gt;('add');

void main() {
  print(add(3, 5)); // 8
}
</code></pre>

<p>Bài tiếp theo: <strong>Push Notifications & Background Tasks</strong>.</p>
