---
id: 019d8b40-e203-7001-b006-flutter000203
title: 'Bài 7: Bloc Pattern & Cubit'
slug: bai-7-bloc-pattern-va-cubit
description: >-
  Bloc pattern, Events, States. Cubit vs Bloc. BlocProvider,
  BlocBuilder, BlocListener, BlocConsumer.
  MultiBlocProvider, Bloc-to-Bloc communication. Hydrated Bloc.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Navigation & State Management"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-cubit"><strong>1. Cubit — State Management Đơn giản</strong></h2>

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

<h2 id="2-bloc"><strong>2. Bloc — Event-Driven</strong></h2>

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

<h2 id="3-widgets"><strong>3. BlocProvider, BlocBuilder, BlocListener</strong></h2>

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

<h2 id="4-hydrated"><strong>4. Hydrated Bloc — Persist State</strong></h2>

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

<p>Bài tiếp theo: <strong>Forms, Validation & Theming</strong>.</p>
