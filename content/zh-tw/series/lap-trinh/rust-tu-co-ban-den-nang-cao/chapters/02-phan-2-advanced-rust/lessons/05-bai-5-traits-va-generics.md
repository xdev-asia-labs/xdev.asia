---
id: 019d8b40-f201-7001-b007-rust000000201
title: 第 5 課：特徵與泛型
slug: bai-5-traits-va-generics
description: >-
  特徵定義，預設實現。通用類型，特徵邊界。相關類型，超級特徵。 impl Trait, dyn Trait. Derive
  macros.常見特徵（顯示、調試、克隆、從/到）。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：高級 Rust
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5817" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5817)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="73" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="275" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="116" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="217" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.9089653438086,174 1025.9089653438086,212 993,231 960.0910346561914,212 960.0910346561914,174 993,155" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：特徵與泛型</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：高級 Rust</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-traits"><strong>1. 性狀</strong></h2>

<pre><code class="language-rust">trait Summary {
    fn summarize_author(&self) -> String;

    // Default implementation
    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}

struct Article {
    title: String,
    author: String,
    content: String,
}

impl Summary for Article {
    fn summarize_author(&self) -> String {
        self.author.clone()
    }

    fn summarize(&self) -> String {
        format!("{} by {}: {}...", self.title, self.author, &self.content[..50])
    }
}
</code></pre>

<h2 id="2-generics"><strong>2. 泛型和特徵界限</strong></h2>

<pre><code class="language-rust">// Generic function
fn largest&lt;T: PartialOrd&gt;(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in &list[1..] {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// Multiple trait bounds
fn print_summary&lt;T: Summary + std::fmt::Display&gt;(item: &T) {
    println!("{}: {}", item, item.summarize());
}

// where clause — dễ đọc hơn
fn complex_function&lt;T, U&gt;(t: &T, u: &U) -> String
where
    T: Summary + Clone,
    U: std::fmt::Display + std::fmt::Debug,
{
    format!("{} - {:?}", t.summarize(), u)
}

// Generic struct
struct Pair&lt;T&gt; {
    first: T,
    second: T,
}

impl&lt;T: std::fmt::Display + PartialOrd&gt; Pair&lt;T&gt; {
    fn larger(&self) -> &T {
        if self.first >= self.second { &self.first } else { &self.second }
    }
}
</code></pre>

<h2 id="3-associated"><strong>3. 相關類型和超級特徵</strong></h2>

<pre><code class="language-rust">// Associated type — type placeholder trong trait
trait Iterator {
    type Item;
    fn next(&mut self) -> Option&lt;Self::Item&gt;;
}

struct Counter {
    count: u32,
    max: u32,
}

impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option&lt;Self::Item&gt; {
        if self.count < self.max {
            self.count += 1;
            Some(self.count)
        } else {
            None
        }
    }
}

// Supertrait — trait kế thừa
trait PrettyPrint: std::fmt::Display {
    fn pretty_print(&self) {
        println!("╔══════════════╗");
        println!("║ {} ║", self);
        println!("╚══════════════╝");
    }
}
</code></pre>

<h2 id="4-dyn-trait"><strong>4. impl Trait 與 dyn Trait</strong></h2>

<pre><code class="language-rust">// impl Trait — static dispatch (monomorphization)
fn notify(item: &impl Summary) -> impl std::fmt::Display {
    format!("Breaking: {}", item.summarize())
}

// dyn Trait — dynamic dispatch (trait object)
fn get_formatter(format: &str) -> Box&lt;dyn Summary&gt; {
    match format {
        "article" => Box::new(Article { /* ... */ }),
        "tweet" => Box::new(Tweet { /* ... */ }),
        _ => panic!("Unknown format"),
    }
}

// Common derives
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
struct ProductId(String);

// From/Into
impl From&lt;String&gt; for ProductId {
    fn from(s: String) -> Self {
        ProductId(s)
    }
}

let id: ProductId = "abc".to_string().into();
</code></pre>

<p>下一篇： <strong>閉包、迭代器與集合</strong>。</p>
