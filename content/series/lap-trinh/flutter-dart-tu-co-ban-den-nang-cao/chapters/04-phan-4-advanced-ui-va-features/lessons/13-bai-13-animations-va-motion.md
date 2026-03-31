---
id: 019d8b40-e401-7001-b006-flutter000401
title: 'Bài 13: Animations & Motion'
slug: bai-13-animations-va-motion
description: >-
  Implicit animations, AnimatedContainer, AnimatedOpacity.
  Explicit animations, AnimationController, Tween, CurvedAnimation.
  Hero transitions, Staggered animations, Rive/Lottie.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Advanced UI & Features"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-implicit"><strong>1. Implicit Animations</strong></h2>

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

<h2 id="2-explicit"><strong>2. Explicit Animations</strong></h2>

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

<h2 id="3-hero"><strong>3. Hero & Page Transitions</strong></h2>

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

<h2 id="4-lottie"><strong>4. Lottie Animations</strong></h2>

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

<p>Bài tiếp theo: <strong>Custom Painting & Advanced Widgets</strong>.</p>
