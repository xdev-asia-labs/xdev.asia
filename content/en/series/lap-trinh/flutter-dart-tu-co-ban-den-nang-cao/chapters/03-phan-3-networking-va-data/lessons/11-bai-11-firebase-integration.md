---
id: 019d8b40-e303-7001-b006-flutter000303
title: 'Lesson 11: Firebase Integration'
slug: bai-11-firebase-integration
description: >-
  Firebase setup with FlutterFire CLI. Cloud Firestore CRUD, realtime listeners.
  Firebase Auth, Cloud Storage, Cloud Messaging. Analytics, Crashlytics.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Networking & Data'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: From Basics to Advanced'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5780" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5780)"/>

  <!-- Decorations -->
  <g>
    <circle cx="704" cy="62" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="912" cy="170" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="94" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="278" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.0429399400243,173.5 1024.0429399400243,210.5 992,229 959.9570600599758,210.5 959.9570600599758,173.5 992,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Firebase Integration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter & Dart: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Networking & Data</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Firebase Setup</strong></h2>

<pre><code class="language-bash"># Cài FlutterFire CLI
dart pub global activate flutterfire_cli

# Cấu hình project
flutterfire configure --project=my-flutter-app
</code></pre>

<pre><code class="language-dart">void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const MyApp());
}
</code></pre>

<h2 id="2-firestore"><strong>2. Cloud Firestore</strong></h2>

<pre><code class="language-dart">class FirestoreProductRepository {
  final _collection = FirebaseFirestore.instance.collection('products');

  // Create
  Future&lt;void&gt; add(Product product) async {
    await _collection.doc(product.id).set(product.toJson());
  }

  // Read
  Future&lt;List&lt;Product&gt;&gt; getAll() async {
    final snapshot = await _collection.orderBy('createdAt', descending: true).get();
    return snapshot.docs.map((doc) => Product.fromJson(doc.data())).toList();
  }

  // Realtime stream
  Stream&lt;List&lt;Product&gt;&gt; watchAll() {
    return _collection
        .orderBy('createdAt', descending: true)
        .snapshots()
        .map((snapshot) => snapshot.docs.map((doc) => Product.fromJson(doc.data())).toList());
  }

  // Query
  Future&lt;List&lt;Product&gt;&gt; getByCategory(String category, {int limit = 20}) async {
    final snapshot = await _collection
        .where('category', isEqualTo: category)
        .where('price', isGreaterThan: 0)
        .limit(limit)
        .get();
    return snapshot.docs.map((doc) => Product.fromJson(doc.data())).toList();
  }

  // Update
  Future&lt;void&gt; update(String id, Map&lt;String, dynamic&gt; data) async {
    await _collection.doc(id).update(data);
  }

  // Delete
  Future&lt;void&gt; delete(String id) async {
    await _collection.doc(id).delete();
  }
}
</code></pre>

<h2 id="3-storage"><strong>3. Cloud Storage</strong></h2>

<pre><code class="language-dart">class StorageService {
  final _storage = FirebaseStorage.instance;

  Future&lt;String&gt; uploadImage(File file, String path) async {
    final ref = _storage.ref().child(path);
    final uploadTask = ref.putFile(file, SettableMetadata(contentType: 'image/jpeg'));

    uploadTask.snapshotEvents.listen((event) {
      final progress = event.bytesTransferred / event.totalBytes;
      debugPrint('Upload: ${(progress * 100).toStringAsFixed(0)}%');
    });

    final snapshot = await uploadTask;
    return snapshot.ref.getDownloadURL();
  }
}
</code></pre>

<h2 id="4-crashlytics"><strong>4. Crashlytics & Analytics</strong></h2>

<pre><code class="language-dart">void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  FlutterError.onError = FirebaseCrashlytics.instance.recordFlutterFatalError;
  PlatformDispatcher.instance.onError = (error, stack) {
    FirebaseCrashlytics.instance.recordError(error, stack, fatal: true);
    return true;
  };

  await FirebaseAnalytics.instance.logEvent(name: 'app_open');
  runApp(const MyApp());
}
</code></pre>

<p>Next article: <strong>Authentication & Authorization</strong>.</p>
