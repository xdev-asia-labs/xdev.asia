---
id: 019d8b40-f203-7001-b007-rust000000203
title: 'Bài 7: Error Handling & Modules'
slug: bai-7-error-handling-va-modules
description: >-
  Result, Option, unwrap, expect. ? operator, error propagation. Custom error
  types, thiserror, anyhow. Module system, crate structure, pub visibility.
  Cargo workspace.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Advanced Rust"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-result-option"><strong>1. Result & Option</strong></h2>

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

<h2 id="3-custom-errors"><strong>3. Custom Errors với thiserror & anyhow</strong></h2>

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

<p>Bài tiếp theo: <strong>Smart Pointers & Concurrency</strong>.</p>
