---
id: 019d8b40-e404-7001-b006-flutter000404
title: 'Lesson 16: Push Notifications & Background Tasks'
slug: bai-16-push-notifications-va-background-tasks
description: >-
  Firebase Cloud Messaging setup. Local notifications. Background fetch,
  WorkManager. Foreground services. Deep linking from notifications.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 4: Advanced UI & Features'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: From Basics to Advanced'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3732" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3732)"/>

  <!-- Decorations -->
  <g>
    <circle cx="838" cy="144" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1076" cy="182" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="814" cy="220" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1052" cy="258" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="36" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Push Notifications & Background</tspan>
      <tspan x="60" dy="42">Tasks</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter & Dart: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced UI & Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fcm"><strong>1. Firebase Cloud Messaging</strong></h2>

<pre><code class="language-dart">class PushNotificationService {
  final _messaging = FirebaseMessaging.instance;

  Future&lt;void&gt; init() async {
    // Xin quyền
    final settings = await _messaging.requestPermission(
      alert: true,
      badge: true,
      sound: true,
    );

    if (settings.authorizationStatus == AuthorizationStatus.authorized) {
      final token = await _messaging.getToken();
      debugPrint('FCM Token: $token');

      // Token refresh
      _messaging.onTokenRefresh.listen((newToken) {
        // Gửi token mới lên server
      });
    }

    // Foreground messages
    FirebaseMessaging.onMessage.listen(_handleForegroundMessage);

    // Background messages
    FirebaseMessaging.onBackgroundMessage(_firebaseBackgroundHandler);

    // User tapped notification
    FirebaseMessaging.onMessageOpenedApp.listen(_handleNotificationTap);
  }

  void _handleForegroundMessage(RemoteMessage message) {
    // Hiển thị local notification
    _showLocalNotification(
      title: message.notification?.title ?? '',
      body: message.notification?.body ?? '',
      payload: message.data['route'] ?? '',
    );
  }

  void _handleNotificationTap(RemoteMessage message) {
    final route = message.data['route'];
    if (route != null) {
      // Navigate to route
    }
  }
}

@pragma('vm:entry-point')
Future&lt;void&gt; _firebaseBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  // Handle background message
}
</code></pre>

<h2 id="2-local"><strong>2. Local Notifications</strong></h2>

<pre><code class="language-dart">class LocalNotificationService {
  final _plugin = FlutterLocalNotificationsPlugin();

  Future&lt;void&gt; init() async {
    const androidSettings = AndroidInitializationSettings('@mipmap/ic_launcher');
    const iosSettings = DarwinInitializationSettings(
      requestAlertPermission: true,
      requestBadgePermission: true,
      requestSoundPermission: true,
    );

    await _plugin.initialize(
      const InitializationSettings(android: androidSettings, iOS: iosSettings),
      onDidReceiveNotificationResponse: (response) {
        // Handle tap
        final payload = response.payload;
        if (payload != null) {
          // Navigate
        }
      },
    );
  }

  Future&lt;void&gt; show({required String title, required String body, String? payload}) async {
    await _plugin.show(
      DateTime.now().millisecondsSinceEpoch ~/ 1000,
      title,
      body,
      const NotificationDetails(
        android: AndroidNotificationDetails(
          'default_channel',
          'Default',
          importance: Importance.high,
          priority: Priority.high,
        ),
      ),
      payload: payload,
    );
  }

  // Scheduled notification
  Future&lt;void&gt; schedule({
    required String title,
    required String body,
    required DateTime scheduledDate,
  }) async {
    await _plugin.zonedSchedule(
      DateTime.now().millisecondsSinceEpoch ~/ 1000,
      title,
      body,
      tz.TZDateTime.from(scheduledDate, tz.local),
      const NotificationDetails(
        android: AndroidNotificationDetails('scheduled', 'Scheduled'),
      ),
      androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
      uiLocalNotificationDateInterpretation: UILocalNotificationDateInterpretation.absoluteTime,
    );
  }
}
</code></pre>

<h2 id="3-background"><strong>3. Background Tasks with WorkManager</strong></h2>

<pre><code class="language-dart">// Setup
Workmanager().initialize(callbackDispatcher, isInDebugMode: true);

// Register periodic task
Workmanager().registerPeriodicTask(
  'sync-data',
  'syncDataTask',
  frequency: const Duration(hours: 1),
  constraints: Constraints(
    networkType: NetworkType.connected,
    requiresBatteryNotLow: true,
  ),
);

@pragma('vm:entry-point')
void callbackDispatcher() {
  Workmanager().executeTask((taskName, inputData) async {
    switch (taskName) {
      case 'syncDataTask':
        await _syncData();
        return true;
      default:
        return false;
    }
  });
}

Future&lt;void&gt; _syncData() async {
  // Sync logic — chạy trong isolate riêng
}
</code></pre>

<p>Next article: <strong>Clean Architecture for Flutter</strong>.</p>
