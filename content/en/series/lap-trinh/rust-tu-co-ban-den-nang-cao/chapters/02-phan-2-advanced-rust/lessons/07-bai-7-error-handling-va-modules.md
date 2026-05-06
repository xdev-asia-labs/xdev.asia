---
id: 019d8b40-f203-7001-b007-rust000000203
title: 'Lesson 7: Error Handling & Modules'
slug: bai-7-error-handling-va-modules
description: >-
  Result, Option, unwrap, expect. ? operator, error propagation. Custom error
  types, thiserror, anyhow. Module system, crate structure, pub visibility.
  Cargo workspace.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Advanced Rust'
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: From Basics to Advanced'
  slug: rust-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5055" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5055)"/>

  <!-- Decorations -->
  <g>
    <circle cx="753" cy="129" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1059" cy="195" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="228" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="998.444863728671,152 998.444863728671,186 969,203 939.555136271329,186 939.555136271329,152 969,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Error Handling & Modules</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Advanced Rust</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-result-option"><strong>1. Result & Options</strong></h2>

<pre><code class="language-rust">use std::fs;
use std::num::ParseIntError;

fn main() {
    // Option&lt;T&gt; — có hoặc không
    let value: Option&lt;i32&gt; = Some(42);
    let nothing: Option&lt;i32&gt; = None;

    // Unwrap — PROD không nên dùng
    let v = value.unwrap();          // panic nếu None
    let v = value.expect("No value"); // panic với message

    // Safe access
    let v = value.unwrap_or(0);
    let v = value.unwrap_or_else(|| compute_default());
    let v = value.map(|x| x * 2);   // Some(84)

    // Result&lt;T, E&gt; — success hoặc error
    let content: Result&lt;String, std::io::Error&gt; = fs::read_to_string("config.toml");
    match content {
        Ok(text) => println!("{}", text),
        Err(e) => eprintln!("Error: {}", e),
    }
}
</code></pre>

<h2 id="2-propagation"><strong>2. ? Operator & Error Propagation</strong></h2>

<pre><code class="language-rust">use std::io;

fn read_config() -> Result&lt;Config, AppError&gt; {
    let content = fs::read_to_string("config.toml")?; // Auto-convert io::Error → AppError
    let port: u16 = content.trim().parse()?;            // Auto-convert ParseIntError → AppError
    Ok(Config { port })
}

// ? hoạt động nhờ From trait
// impl From&lt;io::Error&gt; for AppError { ... }
// impl From&lt;ParseIntError&gt; for AppError { ... }
</code></pre>

<h2 id="3-custom-errors"><strong>3. Custom Errors with thiserror & anyhow</strong></h2>

<pre><code class="language-rust">// thiserror — cho library code
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("Database error: {0}")]
    Database(#[from] sqlx::Error),

    #[error("Not found: {entity} with id {id}")]
    NotFound { entity: String, id: String },

    #[error("Unauthorized")]
    Unauthorized,

    #[error("Validation error: {0}")]
    Validation(String),

    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

// anyhow — cho application code
use anyhow::{Context, Result};

async fn setup_database() -> Result&lt;Pool&lt;Postgres&gt;&gt; {
    let url = std::env::var("DATABASE_URL")
        .context("DATABASE_URL must be set")?;

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&url)
        .await
        .context("Failed to connect to database")?;

    Ok(pool)
}
</code></pre>

<h2 id="4-modules"><strong>4. Module System</strong></h2>

<pre><code class="language-text">src/
├── main.rs
├── lib.rs
├── config.rs
├── models/
│   ├── mod.rs
│   ├── user.rs
│   └── product.rs
└── handlers/
    ├── mod.rs
    └── auth.rs
</code></pre>

<pre><code class="language-rust">// src/models/mod.rs
pub mod user;
pub mod product;

// src/models/user.rs
pub struct User {
    pub id: u64,
    pub username: String,
    email: String, // private
}

impl User {
    pub fn new(id: u64, username: String, email: String) -> Self {
        Self { id, username, email }
    }
}

// src/main.rs
mod config;
mod models;
mod handlers;

use models::user::User;
</code></pre>

<pre><code class="language-toml"># Cargo workspace — multiple crates
# Cargo.toml (root)
[workspace]
members = ["api", "domain", "infrastructure"]

# api/Cargo.toml
[dependencies]
domain = { path = "../domain" }
infrastructure = { path = "../infrastructure" }
</code></pre>

<p>Next article: <strong>Smart Pointers & Concurrency</strong>.</p>
