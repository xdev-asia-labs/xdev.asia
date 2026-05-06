---
id: 019d8b40-e201-7001-b006-flutter000201
title: 'Lesson 5: Navigation & Routing'
slug: bai-5-navigation-va-routing
description: >-
  Navigator 2.0, GoRouter. Named routes, path parameters, query parameters.
  Nested navigation, tab navigation, drawer navigation. Deep linking, route
  guards.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Navigation & State Management'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: From Basics to Advanced'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8847" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8847)"/>

  <!-- Decorations -->
  <g>
    <circle cx="898" cy="204" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="696" cy="262" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="994" cy="60" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="792" cy="118" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="176" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="104" x2="1100" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="134" x2="1050" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="987.7749907475932,134.5 987.7749907475932,173.5 954,193 920.2250092524068,173.5 920.2250092524068,134.5 954,115" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Navigation & Routing</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter & Dart: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Navigation & State Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-gorouter"><strong>1. GoRouter Setup</strong></h2>

<pre><code class="language-yaml"># pubspec.yaml
dependencies:
  go_router: ^14.0.0
</code></pre>

<pre><code class="language-dart">final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomePage(),
    ),
    GoRoute(
      path: '/products',
      builder: (context, state) => const ProductListPage(),
      routes: [
        GoRoute(
          path: ':id',
          builder: (context, state) {
            final id = state.pathParameters['id']!;
            return ProductDetailPage(id: id);
          },
        ),
      ],
    ),
    GoRoute(
      path: '/search',
      builder: (context, state) {
        final query = state.uri.queryParameters['q'] ?? '';
        return SearchPage(query: query);
      },
    ),
  ],
  redirect: (context, state) {
    final isLoggedIn = authNotifier.isLoggedIn;
    if (!isLoggedIn && state.matchedLocation.startsWith('/dashboard')) {
      return '/login';
    }
    return null;
  },
);
</code></pre>

<h2 id="2-navigation"><strong>2. Navigation</strong></h2>

<pre><code class="language-dart">// Programmatic navigation
context.go('/products');
context.push('/products/123');
context.pop();

// Named routes
context.goNamed('productDetail', pathParameters: {'id': '123'});
</code></pre>

<h2 id="3-shell-route"><strong>3. Shell Route (Tab Navigation)</strong></h2>

<pre><code class="language-dart">ShellRoute(
  builder: (context, state, child) {
    return MainShell(child: child);
  },
  routes: [
    GoRoute(path: '/home', builder: (_, __) => const HomePage()),
    GoRoute(path: '/explore', builder: (_, __) => const ExplorePage()),
    GoRoute(path: '/profile', builder: (_, __) => const ProfilePage()),
  ],
);

class MainShell extends StatelessWidget {
  final Widget child;
  const MainShell({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: child,
      bottomNavigationBar: NavigationBar(
        selectedIndex: _calculateIndex(GoRouterState.of(context).matchedLocation),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home), label: 'Home'),
          NavigationDestination(icon: Icon(Icons.explore), label: 'Explore'),
          NavigationDestination(icon: Icon(Icons.person), label: 'Profile'),
        ],
        onDestinationSelected: (index) {
          switch (index) {
            case 0: context.go('/home');
            case 1: context.go('/explore');
            case 2: context.go('/profile');
          }
        },
      ),
    );
  }
}
</code></pre>

<p>Next article: <strong>State Management with Riverpod</strong>.</p>
