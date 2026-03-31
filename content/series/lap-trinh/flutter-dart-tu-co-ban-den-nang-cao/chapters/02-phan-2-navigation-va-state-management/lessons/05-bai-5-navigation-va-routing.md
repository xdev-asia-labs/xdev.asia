---
id: 019d8b40-e201-7001-b006-flutter000201
title: 'Bài 5: Navigation & Routing'
slug: bai-5-navigation-va-routing
description: >-
  Navigator 2.0, GoRouter. Named routes, path parameters, query
  parameters. Nested navigation, tab navigation, drawer navigation.
  Deep linking, route guards.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Navigation & State Management"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>State Management với Riverpod</strong>.</p>
