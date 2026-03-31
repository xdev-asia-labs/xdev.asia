---
id: 019d8b40-e303-7001-b006-flutter000303
title: 'Bài 11: Firebase Integration'
slug: bai-11-firebase-integration
description: >-
  Firebase setup với FlutterFire CLI. Cloud Firestore CRUD, realtime listeners.
  Firebase Auth, Cloud Storage, Cloud Messaging. Analytics, Crashlytics.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Networking & Data"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Authentication & Authorization</strong>.</p>
