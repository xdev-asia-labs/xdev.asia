---
id: 019d8b40-f104-7001-b007-rust000000104
title: 'Bài 4: Structs, Enums & Pattern Matching'
slug: bai-4-structs-enums-va-pattern-matching
description: >-
  Structs, impl blocks, methods. Enums, Option<T>, Result<T, E>.
  Pattern matching với match, if let, while let. Destructuring. Builder pattern.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Rust Fundamentals"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6763" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6763)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1002" cy="36" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="904" cy="38" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="806" cy="40" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="708" cy="42" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="44" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="196" x2="1100" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="226" x2="1050" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Lập trình — Bài 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: Structs, Enums &amp; Pattern Matching</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Rust Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-structs"><strong>1. Structs & Methods</strong></h2>

<pre><code class="language-rust">#[derive(Debug, Clone)]
struct User {
    id: u64,
    username: String,
    email: String,
    active: bool,
}

impl User {
    // Associated function (constructor)
    fn new(id: u64, username: String, email: String) -> Self {
        Self {
            id,
            username,
            email,
            active: true,
        }
    }

    // Method — takes &self
    fn full_info(&self) -> String {
        format!("{} <{}>", self.username, self.email)
    }

    // Mutable method
    fn deactivate(&mut self) {
        self.active = false;
    }

    // Takes ownership
    fn into_username(self) -> String {
        self.username
    }
}

// Struct update syntax
let user2 = User {
    email: String::from("new@example.com"),
    ..user1
};

// Tuple struct
struct Color(u8, u8, u8);
struct Point(f64, f64);
</code></pre>

<h2 id="2-enums"><strong>2. Enums</strong></h2>

<pre><code class="language-rust">#[derive(Debug)]
enum Shape {
    Circle(f64),                    // radius
    Rectangle { width: f64, height: f64 },
    Triangle(f64, f64, f64),        // 3 sides
}

impl Shape {
    fn area(&self) -> f64 {
        match self {
            Shape::Circle(r) => std::f64::consts::PI * r * r,
            Shape::Rectangle { width, height } => width * height,
            Shape::Triangle(a, b, c) => {
                let s = (a + b + c) / 2.0;
                (s * (s - a) * (s - b) * (s - c)).sqrt()
            }
        }
    }
}

// Option&lt;T&gt; — thay thế null
fn find_user(id: u64) -> Option&lt;User&gt; {
    if id == 1 {
        Some(User::new(1, "admin".into(), "admin@test.com".into()))
    } else {
        None
    }
}

// Result&lt;T, E&gt; — error handling
fn parse_port(s: &str) -> Result&lt;u16, String&gt; {
    s.parse::&lt;u16&gt;().map_err(|e| format!("Invalid port: {}", e))
}
</code></pre>

<h2 id="3-pattern"><strong>3. Pattern Matching nâng cao</strong></h2>

<pre><code class="language-rust">// match guard
fn classify(x: i32) -> &'static str {
    match x {
        n if n < 0 => "negative",
        0 => "zero",
        n if n % 2 == 0 => "positive even",
        _ => "positive odd",
    }
}

// Destructuring nested
struct Order {
    id: u64,
    status: OrderStatus,
}

enum OrderStatus {
    Pending,
    Shipped { tracking: String },
    Delivered,
    Cancelled(String),
}

fn process_order(order: &Order) {
    match &order.status {
        OrderStatus::Shipped { tracking } => {
            println!("Order {} shipped: {}", order.id, tracking);
        }
        OrderStatus::Cancelled(reason) if reason.contains("fraud") => {
            println!("Fraud detected for order {}", order.id);
        }
        _ => {}
    }
}
</code></pre>

<h2 id="4-builder"><strong>4. Builder Pattern</strong></h2>

<pre><code class="language-rust">#[derive(Debug)]
struct ServerConfig {
    host: String,
    port: u16,
    max_connections: usize,
    timeout_secs: u64,
}

struct ServerConfigBuilder {
    host: String,
    port: u16,
    max_connections: usize,
    timeout_secs: u64,
}

impl ServerConfigBuilder {
    fn new() -> Self {
        Self {
            host: "127.0.0.1".to_string(),
            port: 8080,
            max_connections: 100,
            timeout_secs: 30,
        }
    }

    fn host(mut self, host: &str) -> Self { self.host = host.to_string(); self }
    fn port(mut self, port: u16) -> Self { self.port = port; self }
    fn max_connections(mut self, max: usize) -> Self { self.max_connections = max; self }

    fn build(self) -> ServerConfig {
        ServerConfig {
            host: self.host,
            port: self.port,
            max_connections: self.max_connections,
            timeout_secs: self.timeout_secs,
        }
    }
}

// Sử dụng
let config = ServerConfigBuilder::new()
    .host("0.0.0.0")
    .port(3000)
    .max_connections(500)
    .build();
</code></pre>

<p>Bài tiếp theo: <strong>Traits & Generics</strong>.</p>
