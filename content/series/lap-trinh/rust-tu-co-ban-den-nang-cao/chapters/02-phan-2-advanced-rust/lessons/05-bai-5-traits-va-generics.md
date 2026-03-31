---
id: 019d8b40-f201-7001-b007-rust000000201
title: 'Bài 5: Traits & Generics'
slug: bai-5-traits-va-generics
description: >-
  Trait definition, default implementations. Generic types, trait bounds.
  Associated types, supertraits. impl Trait, dyn Trait. Derive macros.
  Common traits (Display, Debug, Clone, From/Into).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Advanced Rust"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-traits"><strong>1. Traits</strong></h2>

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

<h2 id="2-generics"><strong>2. Generics & Trait Bounds</strong></h2>

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

<h2 id="3-associated"><strong>3. Associated Types & Supertraits</strong></h2>

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

<h2 id="4-dyn-trait"><strong>4. impl Trait vs dyn Trait</strong></h2>

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

<p>Bài tiếp theo: <strong>Closures, Iterators & Collections</strong>.</p>
