---
id: 019d8b40-e304-7001-b006-flutter000304
title: 'Bài 12: Authentication & Authorization'
slug: bai-12-authentication-va-authorization
description: >-
  Firebase Auth: email/password, Google Sign-In, Apple Sign-In.
  JWT token management. Auth state persistence. Role-based access control.
  Biometric authentication.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Networking & Data"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-firebase-auth"><strong>1. Firebase Auth</strong></h2>

<pre><code class="language-dart">class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  Stream&lt;User?&gt; get authStateChanges => _auth.authStateChanges();

  // Email/Password
  Future&lt;UserCredential&gt; register(String email, String password) async {
    return _auth.createUserWithEmailAndPassword(email: email, password: password);
  }

  Future&lt;UserCredential&gt; login(String email, String password) async {
    return _auth.signInWithEmailAndPassword(email: email, password: password);
  }

  // Google Sign-In
  Future&lt;UserCredential&gt; signInWithGoogle() async {
    final googleUser = await GoogleSignIn().signIn();
    final googleAuth = await googleUser!.authentication;
    final credential = GoogleAuthProvider.credential(
      accessToken: googleAuth.accessToken,
      idToken: googleAuth.idToken,
    );
    return _auth.signInWithCredential(credential);
  }

  Future&lt;void&gt; signOut() async {
    await GoogleSignIn().signOut();
    await _auth.signOut();
  }
}
</code></pre>

<h2 id="2-auth-state"><strong>2. Auth State với Riverpod</strong></h2>

<pre><code class="language-dart">final authServiceProvider = Provider&lt;AuthService&gt;((ref) => AuthService());

final authStateProvider = StreamProvider&lt;User?&gt;((ref) {
  return ref.watch(authServiceProvider).authStateChanges;
});

// Router guard
final routerProvider = Provider&lt;GoRouter&gt;((ref) {
  final authState = ref.watch(authStateProvider);

  return GoRouter(
    redirect: (context, state) {
      final isLoggedIn = authState.valueOrNull != null;
      final isLoginRoute = state.matchedLocation == '/login';

      if (!isLoggedIn && !isLoginRoute) return '/login';
      if (isLoggedIn && isLoginRoute) return '/home';
      return null;
    },
    routes: [/* ... */],
  );
});
</code></pre>

<h2 id="3-jwt"><strong>3. JWT Token Management</strong></h2>

<pre><code class="language-dart">class TokenManager {
  static const _storage = FlutterSecureStorage();

  Future&lt;void&gt; saveTokens({required String access, required String refresh}) async {
    await _storage.write(key: 'access_token', value: access);
    await _storage.write(key: 'refresh_token', value: refresh);
  }

  Future&lt;String?&gt; get accessToken => _storage.read(key: 'access_token');
  Future&lt;String?&gt; get refreshToken => _storage.read(key: 'refresh_token');

  Future&lt;void&gt; clear() => _storage.deleteAll();
}

// Dio interceptor — auto-refresh token
class AuthInterceptor extends Interceptor {
  final TokenManager _tokenManager;
  final Dio _dio;

  AuthInterceptor(this._tokenManager, this._dio);

  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    final token = await _tokenManager.accessToken;
    if (token != null) options.headers['Authorization'] = 'Bearer $token';
    handler.next(options);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) async {
    if (err.response?.statusCode == 401) {
      final refresh = await _tokenManager.refreshToken;
      if (refresh != null) {
        try {
          final response = await _dio.post('/auth/refresh', data: {'refresh_token': refresh});
          await _tokenManager.saveTokens(
            access: response.data['access_token'],
            refresh: response.data['refresh_token'],
          );
          // Retry request
          final retryResponse = await _dio.fetch(err.requestOptions);
          handler.resolve(retryResponse);
          return;
        } catch (_) {
          await _tokenManager.clear();
        }
      }
    }
    handler.next(err);
  }
}
</code></pre>

<h2 id="4-biometric"><strong>4. Biometric Authentication</strong></h2>

<pre><code class="language-dart">class BiometricService {
  final _auth = LocalAuthentication();

  Future&lt;bool&gt; get isAvailable async {
    final canCheck = await _auth.canCheckBiometrics;
    final isSupported = await _auth.isDeviceSupported();
    return canCheck && isSupported;
  }

  Future&lt;bool&gt; authenticate() async {
    return _auth.authenticate(
      localizedReason: 'Xác thực để truy cập ứng dụng',
      options: const AuthenticationOptions(biometricOnly: true),
    );
  }
}
</code></pre>

<p>Bài tiếp theo: <strong>Animations & Motion</strong>.</p>
