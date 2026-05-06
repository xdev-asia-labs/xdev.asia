---
id: 019d8b40-e304-7001-b006-flutter000304
title: 'Lesson 12: Authentication & Authorization'
slug: bai-12-authentication-va-authorization
description: >-
  Firebase Auth: email/password, Google Sign-In, Apple Sign-In. JWT token
  management. Auth state persistence. Role-based access control. Biometric
  authentication.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 3: Networking & Data'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: From Basics to Advanced'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-548" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-548)"/>

  <!-- Decorations -->
  <g>
    <circle cx="987" cy="111" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="761" cy="165" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="192" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="101" x2="1100" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="131" x2="1050" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.1769145362398,183 1032.1769145362398,219 1001,237 969.8230854637602,219 969.8230854637602,183 1001,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Authentication & Authorization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter & Dart: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Networking & Data</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

<h2 id="2-auth-state"><strong>2. Auth State with Riverpod</strong></h2>

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

<p>Next article: <strong>Animations & Motions</strong>.</p>
