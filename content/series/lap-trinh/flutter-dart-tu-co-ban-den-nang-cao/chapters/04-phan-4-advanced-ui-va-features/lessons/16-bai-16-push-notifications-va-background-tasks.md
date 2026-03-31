---
id: 019d8b40-e404-7001-b006-flutter000404
title: 'Bài 16: Push Notifications & Background Tasks'
slug: bai-16-push-notifications-va-background-tasks
description: >-
  Firebase Cloud Messaging setup. Local notifications.
  Background fetch, WorkManager. Foreground services.
  Deep linking từ notifications.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Advanced UI & Features"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

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

<h2 id="3-background"><strong>3. Background Tasks với WorkManager</strong></h2>

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

<p>Bài tiếp theo: <strong>Clean Architecture cho Flutter</strong>.</p>
