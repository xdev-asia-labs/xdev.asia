---
id: 019d8b40-e203-7001-b006-flutter000203
title: 第 7 課：塊圖案和肘節
slug: bai-7-bloc-pattern-va-cubit
description: >-
  集團模式、事件、狀態。肘節 vs 塊。 BlocProvider、BlocBuilder、BlocListener、BlocConsumer。
  MultiBlocProvider，塊到塊通信。水合塊。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：導航和狀態管理
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2132" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2132)"/>

  <!-- Decorations -->
  <g>
    <circle cx="612" cy="46" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="636" cy="230" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="62" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="154" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：塊圖案和肘節</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：導航和狀態管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-cubit"><strong>1. Cubit－簡單狀態管理</strong></h2>

<pre><code class="language-yaml">dependencies:
  flutter_bloc: ^8.1.0
  hydrated_bloc: ^9.1.0
</code></pre>

<pre><code class="language-dart">class CounterCubit extends Cubit&lt;int&gt; {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
  void decrement() => emit(state - 1);
  void reset() => emit(0);
}
</code></pre>

<h2 id="2-bloc"><strong>2. Bloc－事件驅動</strong></h2>

<pre><code class="language-dart">// Events
sealed class AuthEvent {}
class AuthLoginRequested extends AuthEvent {
  final String email;
  final String password;
  AuthLoginRequested({required this.email, required this.password});
}
class AuthLogoutRequested extends AuthEvent {}

// States
sealed class AuthState {}
class AuthInitial extends AuthState {}
class AuthLoading extends AuthState {}
class AuthAuthenticated extends AuthState {
  final User user;
  AuthAuthenticated(this.user);
}
class AuthError extends AuthState {
  final String message;
  AuthError(this.message);
}

// Bloc
class AuthBloc extends Bloc&lt;AuthEvent, AuthState&gt; {
  final AuthRepository _authRepository;

  AuthBloc(this._authRepository) : super(AuthInitial()) {
    on&lt;AuthLoginRequested&gt;(_onLogin);
    on&lt;AuthLogoutRequested&gt;(_onLogout);
  }

  Future&lt;void&gt; _onLogin(AuthLoginRequested event, Emitter&lt;AuthState&gt; emit) async {
    emit(AuthLoading());
    try {
      final user = await _authRepository.login(event.email, event.password);
      emit(AuthAuthenticated(user));
    } catch (e) {
      emit(AuthError(e.toString()));
    }
  }

  Future&lt;void&gt; _onLogout(AuthLogoutRequested event, Emitter&lt;AuthState&gt; emit) async {
    await _authRepository.logout();
    emit(AuthInitial());
  }
}
</code></pre>

<h2 id="3-widgets"><strong>3. BlocProvider、BlocBuilder、BlocListener</strong></h2>

<pre><code class="language-dart">// Provide
MultiBlocProvider(
  providers: [
    BlocProvider(create: (_) => AuthBloc(authRepo)),
    BlocProvider(create: (_) => ThemeBloc()),
  ],
  child: const MyApp(),
);

// Build
BlocBuilder&lt;AuthBloc, AuthState&gt;(
  builder: (context, state) => switch (state) {
    AuthLoading() => const CircularProgressIndicator(),
    AuthAuthenticated(:final user) => Text('Welcome ${user.name}'),
    AuthError(:final message) => Text(message),
    _ => const LoginForm(),
  },
);

// Listen — side effects
BlocListener&lt;AuthBloc, AuthState&gt;(
  listener: (context, state) {
    if (state is AuthError) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(state.message)));
    }
  },
  child: const LoginForm(),
);

// BlocConsumer = Builder + Listener
BlocConsumer&lt;AuthBloc, AuthState&gt;(
  listener: (context, state) {
    if (state is AuthAuthenticated) {
      context.go('/home');
    }
  },
  builder: (context, state) {
    return ElevatedButton(
      onPressed: state is AuthLoading ? null : () {
        context.read&lt;AuthBloc&gt;().add(AuthLoginRequested(email: email, password: password));
      },
      child: state is AuthLoading ? const CircularProgressIndicator() : const Text('Login'),
    );
  },
);
</code></pre>

<h2 id="4-hydrated"><strong>4. 水合塊－持久狀態</strong></h2>

<pre><code class="language-dart">class ThemeBloc extends HydratedCubit&lt;ThemeMode&gt; {
  ThemeBloc() : super(ThemeMode.system);

  void toggle() => emit(state == ThemeMode.dark ? ThemeMode.light : ThemeMode.dark);

  @override
  ThemeMode fromJson(Map&lt;String, dynamic&gt; json) =>
      ThemeMode.values[json['mode'] as int];

  @override
  Map&lt;String, dynamic&gt; toJson(ThemeMode state) => {'mode': state.index};
}
</code></pre>

<p>下一篇： <strong>表單、驗證和主題</strong>。</p>
