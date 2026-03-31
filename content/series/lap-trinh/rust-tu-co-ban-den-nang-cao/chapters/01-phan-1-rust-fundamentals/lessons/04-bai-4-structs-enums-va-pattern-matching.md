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
