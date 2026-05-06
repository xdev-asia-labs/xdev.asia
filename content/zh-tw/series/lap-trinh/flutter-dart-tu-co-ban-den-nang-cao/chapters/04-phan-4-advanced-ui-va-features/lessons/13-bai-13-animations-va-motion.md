---
id: 019d8b40-e401-7001-b006-flutter000401
title: 第 13 課：動畫與動作
slug: bai-13-animations-va-motion
description: >-
  隱式動畫、AnimatedContainer、AnimatedOpacity。 Explicit animations,
  AnimationController, Tween, CurvedAnimation.英雄過渡、交錯動畫、Rive/Lottie。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：進階 UI 和功能
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6431" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6431)"/>

  <!-- Decorations -->
  <g>
    <circle cx="834" cy="252" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="1068" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="802" cy="140" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1036" cy="214" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.3826859021799,118.5 955.3826859021799,145.5 932,159 908.6173140978201,145.5 908.6173140978201,118.5 932,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：動畫與動作</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階 UI 和功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-implicit"><strong>1. 隱式動畫</strong></h2>

<pre><code class="language-dart">class AnimatedCard extends StatefulWidget {
  @override
  State&lt;AnimatedCard&gt; createState() => _AnimatedCardState();
}

class _AnimatedCardState extends State&lt;AnimatedCard&gt; {
  bool _expanded = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => _expanded = !_expanded),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        width: _expanded ? 300 : 200,
        height: _expanded ? 200 : 100,
        decoration: BoxDecoration(
          color: _expanded ? Colors.indigo : Colors.grey[300],
          borderRadius: BorderRadius.circular(_expanded ? 24 : 12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(_expanded ? 0.3 : 0.1),
              blurRadius: _expanded ? 16 : 4,
              offset: Offset(0, _expanded ? 8 : 2),
            ),
          ],
        ),
        child: AnimatedOpacity(
          opacity: _expanded ? 1.0 : 0.6,
          duration: const Duration(milliseconds: 300),
          child: Center(
            child: AnimatedDefaultTextStyle(
              style: TextStyle(
                fontSize: _expanded ? 24 : 16,
                color: _expanded ? Colors.white : Colors.black,
              ),
              duration: const Duration(milliseconds: 300),
              child: const Text('Tap me'),
            ),
          ),
        ),
      ),
    );
  }
}
</code></pre>

<h2 id="2-explicit"><strong>2. 顯式動畫</strong></h2>

<pre><code class="language-dart">class PulseAnimation extends StatefulWidget {
  @override
  State&lt;PulseAnimation&gt; createState() => _PulseAnimationState();
}

class _PulseAnimationState extends State&lt;PulseAnimation&gt;
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;
  late final Animation&lt;double&gt; _scaleAnimation;
  late final Animation&lt;double&gt; _opacityAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);

    _scaleAnimation = Tween&lt;double&gt;(begin: 0.8, end: 1.2).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );

    _opacityAnimation = Tween&lt;double&gt;(begin: 0.5, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeIn),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) {
        return Opacity(
          opacity: _opacityAnimation.value,
          child: Transform.scale(
            scale: _scaleAnimation.value,
            child: child,
          ),
        );
      },
      child: const Icon(Icons.favorite, size: 80, color: Colors.red),
    );
  }
}
</code></pre>

<h2 id="3-hero"><strong>3. 英雄和頁面轉換</strong></h2>

<pre><code class="language-dart">// Source page
Hero(
  tag: 'product-${product.id}',
  child: Image.network(product.imageUrl, width: 120, height: 120, fit: BoxFit.cover),
);

// Detail page
Hero(
  tag: 'product-${product.id}',
  child: Image.network(product.imageUrl, width: double.infinity, height: 300, fit: BoxFit.cover),
);

// Custom page transition
GoRoute(
  path: '/detail/:id',
  pageBuilder: (context, state) => CustomTransitionPage(
    child: DetailPage(id: state.pathParameters['id']!),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      return FadeTransition(
        opacity: CurvedAnimation(parent: animation, curve: Curves.easeIn),
        child: SlideTransition(
          position: Tween&lt;Offset&gt;(begin: const Offset(0, 0.1), end: Offset.zero)
              .animate(CurvedAnimation(parent: animation, curve: Curves.easeOut)),
          child: child,
        ),
      );
    },
  ),
);
</code></pre>

<h2 id="4-lottie"><strong>4.洛蒂動畫</strong></h2>

<pre><code class="language-dart">// pubspec.yaml: lottie: ^3.1.0
Lottie.asset(
  'assets/animations/loading.json',
  width: 200,
  height: 200,
  repeat: true,
  animate: true,
);

// Controller-based
class LottieExample extends StatefulWidget {
  @override
  State&lt;LottieExample&gt; createState() => _LottieExampleState();
}

class _LottieExampleState extends State&lt;LottieExample&gt;
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        _controller.forward(from: 0);
      },
      child: Lottie.asset(
        'assets/animations/like.json',
        controller: _controller,
        onLoaded: (composition) {
          _controller.duration = composition.duration;
        },
      ),
    );
  }
}
</code></pre>

<p>下一篇： <strong>自訂繪畫和高級小部件</strong>。</p>
