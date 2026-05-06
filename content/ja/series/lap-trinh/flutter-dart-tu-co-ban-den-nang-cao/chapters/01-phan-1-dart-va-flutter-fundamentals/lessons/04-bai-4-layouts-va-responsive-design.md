---
id: 019d8b40-e104-7001-b006-flutter000104
title: 'レッスン 4: レイアウトとレスポンシブ デザイン'
slug: bai-4-layouts-va-responsive-design
description: >-
  行、列、スタック、展開、柔軟。コンテナー、パディング、SizedBox。
  ListView、GridView、CustomScrollView、Sliver。 MediaQuery、LayoutBuilder、レスポンシブ
  ブレークポイント。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: ダーツとフラッターの基礎'
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'フラッター＆ダーツ: 基本から上級まで'
  slug: flutter-dart-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2918" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2918)"/>

  <!-- Decorations -->
  <g>
    <circle cx="845" cy="85" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1090" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="835" cy="35" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1080" cy="140" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="135" x2="1100" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="165" x2="1050" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.9807621135332,120 960.9807621135332,150 935,165 909.0192378864668,150 909.0192378864668,120.00000000000001 935,105" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: レイアウトとレスポンシブ デザイン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">フラッター＆ダーツ: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: ダーツとフラッターの基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-row-column"><strong>1. 行と列</strong></h2>

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

<h2 id="2-stack"><strong>2. 積み重ねて配置する</strong></h2>

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

<h2 id="3-listview-gridview"><strong>3. リストビューとグリッドビュー</strong></h2>

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

<h2 id="4-slivers"><strong>4. CustomScrollView とスライバー</strong></h2>

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

<h2 id="5-responsive"><strong>5.レスポンシブデザイン</strong></h2>

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

<p>次の記事: <strong>ナビゲーションとルーティング</strong>。</p>
