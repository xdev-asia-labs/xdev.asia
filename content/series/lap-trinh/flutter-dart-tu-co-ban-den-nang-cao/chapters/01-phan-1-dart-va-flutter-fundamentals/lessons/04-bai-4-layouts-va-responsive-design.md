---
id: 019d8b40-e104-7001-b006-flutter000104
title: 'Bài 4: Layouts & Responsive Design'
slug: bai-4-layouts-va-responsive-design
description: >-
  Row, Column, Stack, Expanded, Flexible. Container, Padding,
  SizedBox. ListView, GridView, CustomScrollView, Slivers.
  MediaQuery, LayoutBuilder, responsive breakpoints.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Dart & Flutter Fundamentals"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<h2 id="1-row-column"><strong>1. Row & Column</strong></h2>

<pre><code class="language-dart">Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    Expanded(flex: 2, child: Text('Left')),
    Expanded(flex: 1, child: Text('Right')),
  ],
);

Column(
  children: [
    Flexible(child: Container(color: Colors.red)),
    Flexible(child: Container(color: Colors.blue)),
  ],
);
</code></pre>

<h2 id="2-stack"><strong>2. Stack & Positioned</strong></h2>

<pre><code class="language-dart">Stack(
  children: [
    Image.network(imageUrl, fit: BoxFit.cover),
    Positioned(
      bottom: 16,
      left: 16,
      child: Text('Overlay', style: TextStyle(color: Colors.white, fontSize: 24)),
    ),
  ],
);
</code></pre>

<h2 id="3-listview-gridview"><strong>3. ListView & GridView</strong></h2>

<pre><code class="language-dart">// ListView.builder — lazy loading
ListView.builder(
  itemCount: products.length,
  itemBuilder: (context, index) {
    final product = products[index];
    return ListTile(
      title: Text(product.name),
      subtitle: Text('${product.price}đ'),
    );
  },
);

// GridView
GridView.builder(
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    mainAxisSpacing: 8,
    crossAxisSpacing: 8,
    childAspectRatio: 0.75,
  ),
  itemCount: products.length,
  itemBuilder: (context, index) => ProductCard(product: products[index]),
);
</code></pre>

<h2 id="4-slivers"><strong>4. CustomScrollView & Slivers</strong></h2>

<pre><code class="language-dart">CustomScrollView(
  slivers: [
    SliverAppBar(
      expandedHeight: 200,
      floating: true,
      pinned: true,
      flexibleSpace: FlexibleSpaceBar(title: Text('Products')),
    ),
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => ListTile(title: Text('Item $index')),
        childCount: 50,
      ),
    ),
  ],
);
</code></pre>

<h2 id="5-responsive"><strong>5. Responsive Design</strong></h2>

<pre><code class="language-dart">LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth > 900) {
      return DesktopLayout();
    } else if (constraints.maxWidth > 600) {
      return TabletLayout();
    }
    return MobileLayout();
  },
);

// MediaQuery
final screenWidth = MediaQuery.of(context).size.width;
final isTablet = screenWidth >= 600;
</code></pre>

<p>Bài tiếp theo: <strong>Navigation & Routing</strong>.</p>
