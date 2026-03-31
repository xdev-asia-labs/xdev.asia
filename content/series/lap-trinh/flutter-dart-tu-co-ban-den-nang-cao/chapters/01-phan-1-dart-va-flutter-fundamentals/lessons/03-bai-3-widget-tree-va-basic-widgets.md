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
