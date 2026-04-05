---
id: 019d8b40-e103-7001-b006-flutter000103
title: 'Bài 3: Widget Tree & Basic Widgets'
slug: bai-3-widget-tree-va-basic-widgets
description: >-
  Widget tree, Element tree, RenderObject tree. StatelessWidget vs
  StatefulWidget. Text, Image, Icon, Button widgets. MaterialApp,
  Scaffold, AppBar. Hot reload/restart.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Dart & Flutter Fundamentals"
course:
  id: 019d8b40-e100-7001-b006-flutter000001
  title: 'Flutter & Dart: Từ Cơ bản đến Nâng cao'
  slug: flutter-dart-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3037" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3037)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1057" cy="161" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="118" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="971" cy="75" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="32" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="249" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.5166604983954,148 983.5166604983954,174 961,187 938.4833395016046,174 938.4833395016046,148 961,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Widget Tree &amp; Basic Widgets</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Flutter &amp; Dart: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Dart &amp; Flutter Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-widget-tree"><strong>1. Widget Tree</strong></h2>

<p>Flutter có 3 cây (trees): <strong>Widget Tree</strong> (mô tả UI), <strong>Element Tree</strong> (quản lý lifecycle), <strong>RenderObject Tree</strong> (layout & paint). Mỗi khi setState(), Flutter rebuild widget tree nhưng tái sử dụng elements khi có thể.</p>

<h2 id="2-stateless-stateful"><strong>2. StatelessWidget vs StatefulWidget</strong></h2>

<pre><code class="language-dart">// StatelessWidget — không có state nội tại
class Greeting extends StatelessWidget {
  final String name;
  const Greeting({super.key, required this.name});

  @override
  Widget build(BuildContext context) {
    return Text('Xin chào, $name!');
  }
}

// StatefulWidget — có state thay đổi
class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State&lt;Counter&gt; createState() => _CounterState();
}

class _CounterState extends State&lt;Counter&gt; {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Count: $_count', style: Theme.of(context).textTheme.headlineMedium),
        const SizedBox(height: 16),
        ElevatedButton(
          onPressed: () => setState(() => _count++),
          child: const Text('Tăng'),
        ),
      ],
    );
  }
}
</code></pre>

<h2 id="3-basic-widgets"><strong>3. Basic Widgets</strong></h2>

<pre><code class="language-dart">// Text
Text('Hello', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold));

// Image
Image.network('https://example.com/image.jpg', fit: BoxFit.cover);
Image.asset('assets/images/logo.png');

// Buttons
ElevatedButton(onPressed: () {}, child: Text('Elevated'));
TextButton(onPressed: () {}, child: Text('Text'));
OutlinedButton(onPressed: () {}, child: Text('Outlined'));
IconButton(onPressed: () {}, icon: Icon(Icons.favorite));

// Card
Card(
  elevation: 4,
  child: ListTile(
    leading: Icon(Icons.star),
    title: Text('Title'),
    subtitle: Text('Subtitle'),
    trailing: Icon(Icons.arrow_forward_ios),
  ),
);
</code></pre>

<h2 id="4-scaffold"><strong>4. Scaffold & AppBar</strong></h2>

<pre><code class="language-dart">Scaffold(
  appBar: AppBar(
    title: const Text('My App'),
    actions: [
      IconButton(onPressed: () {}, icon: const Icon(Icons.search)),
    ],
  ),
  body: const Center(child: Text('Content')),
  bottomNavigationBar: NavigationBar(
    destinations: const [
      NavigationDestination(icon: Icon(Icons.home), label: 'Home'),
      NavigationDestination(icon: Icon(Icons.person), label: 'Profile'),
    ],
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {},
    child: const Icon(Icons.add),
  ),
);
</code></pre>

<p>Bài tiếp theo: <strong>Layouts & Responsive Design</strong>.</p>
