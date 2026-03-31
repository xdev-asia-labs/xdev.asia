---
id: 019d8b40-e402-7001-b006-flutter000402
title: 'Bài 14: Custom Painting & Advanced Widgets'
slug: bai-14-custom-painting-va-advanced-widgets
description: >-
  CustomPainter, Canvas API, Path operations. Slivers: SliverAppBar,
  SliverList, SliverGrid. CustomScrollView, NestedScrollView.
  Draggable, DragTarget, ReorderableListView.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Advanced UI & Features"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-custom-painter"><strong>1. CustomPainter</strong></h2>

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

<h2 id="2-slivers"><strong>2. Slivers & CustomScrollView</strong></h2>

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

<h2 id="3-drag-drop"><strong>3. Drag & Drop</strong></h2>

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

<h2 id="4-render-objects"><strong>4. Custom RenderObject</strong></h2>

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

<p>Bài tiếp theo: <strong>Platform Channels & Native Integration</strong>.</p>
