---
id: 019d8b40-e402-7001-b006-flutter000402
title: 第 14 課：自訂繪畫和高級小部件
slug: bai-14-custom-painting-va-advanced-widgets
description: >-
  CustomPainter、Canvas API、路徑操作。
  Slivers：SliverAppBar、SliverList、SliverGrid。自訂滾動視圖、巢狀滾動視圖。可拖曳、拖曳目標、可重新排序清單視圖。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：進階 UI 和功能
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: Flutter 和 Dart：從基礎到高級
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6007" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6007)"/>

  <!-- Decorations -->
  <g>
    <circle cx="698" cy="224" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="796" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="894" cy="180" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="992" cy="158" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：自訂繪畫和高級小部件</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter 和 Dart：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階 UI 和功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-custom-painter"><strong>1. 自訂畫家</strong></h2>

<pre><code class="language-dart">class CircularProgressPainter extends CustomPainter {
  final double progress;
  final Color color;
  final double strokeWidth;

  CircularProgressPainter({
    required this.progress,
    this.color = Colors.indigo,
    this.strokeWidth = 8,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = (size.width - strokeWidth) / 2;

    // Background circle
    final bgPaint = Paint()
      ..color = color.withOpacity(0.2)
      ..strokeWidth = strokeWidth
      ..style = PaintingStyle.stroke;
    canvas.drawCircle(center, radius, bgPaint);

    // Progress arc
    final progressPaint = Paint()
      ..color = color
      ..strokeWidth = strokeWidth
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius),
      -pi / 2,
      2 * pi * progress,
      false,
      progressPaint,
    );

    // Percentage text
    final textPainter = TextPainter(
      text: TextSpan(
        text: '${(progress * 100).toInt()}%',
        style: TextStyle(color: color, fontSize: radius * 0.5, fontWeight: FontWeight.bold),
      ),
      textDirection: TextDirection.ltr,
    )..layout();
    textPainter.paint(canvas, center - Offset(textPainter.width / 2, textPainter.height / 2));
  }

  @override
  bool shouldRepaint(CircularProgressPainter oldDelegate) => oldDelegate.progress != progress;
}

// Sử dụng
CustomPaint(
  size: const Size(120, 120),
  painter: CircularProgressPainter(progress: 0.75),
);
</code></pre>

<h2 id="2-slivers"><strong>2. Slivers 和 CustomScrollView</strong></h2>

<pre><code class="language-dart">CustomScrollView(
  slivers: [
    SliverAppBar(
      expandedHeight: 250,
      pinned: true,
      flexibleSpace: FlexibleSpaceBar(
        title: const Text('Shop'),
        background: Image.network('https://example.com/banner.jpg', fit: BoxFit.cover),
      ),
    ),
    SliverPersistentHeader(
      pinned: true,
      delegate: _FilterHeaderDelegate(
        child: Container(
          color: Theme.of(context).scaffoldBackgroundColor,
          padding: const EdgeInsets.all(8),
          child: const SearchBar(hintText: 'Tìm kiếm'),
        ),
      ),
    ),
    SliverGrid(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 0.75,
        mainAxisSpacing: 8,
        crossAxisSpacing: 8,
      ),
      delegate: SliverChildBuilderDelegate(
        (context, index) => ProductCard(product: products[index]),
        childCount: products.length,
      ),
    ),
  ],
);
</code></pre>

<h2 id="3-drag-drop"><strong>3. 拖放</strong></h2>

<pre><code class="language-dart">ReorderableListView.builder(
  itemCount: items.length,
  onReorder: (oldIndex, newIndex) {
    setState(() {
      if (newIndex > oldIndex) newIndex--;
      final item = items.removeAt(oldIndex);
      items.insert(newIndex, item);
    });
  },
  itemBuilder: (context, index) {
    return ListTile(
      key: ValueKey(items[index].id),
      leading: const Icon(Icons.drag_handle),
      title: Text(items[index].name),
      trailing: IconButton(
        icon: const Icon(Icons.delete),
        onPressed: () => setState(() => items.removeAt(index)),
      ),
    );
  },
);
</code></pre>

<h2 id="4-render-objects"><strong>4. 自訂渲染對象</strong></h2>

<pre><code class="language-dart">class GapWidget extends LeafRenderObjectWidget {
  final double size;
  const GapWidget(this.size, {super.key});

  @override
  RenderObject createRenderObject(BuildContext context) => _RenderGap(size);

  @override
  void updateRenderObject(BuildContext context, _RenderGap renderObject) {
    renderObject._size = size;
    renderObject.markNeedsLayout();
  }
}

class _RenderGap extends RenderBox {
  double _size;
  _RenderGap(this._size);

  @override
  void performLayout() {
    final constraints = this.constraints;
    if (constraints.hasBoundedWidth) {
      size = Size(constraints.maxWidth, _size);
    } else {
      size = Size(_size, _size);
    }
  }
}
</code></pre>

<p>下一篇： <strong>平台通路和本機集成</strong>。</p>
