---
id: 019d8b40-f303-7001-b007-rust000000303
title: 'Lesson 11: SQLx & Database Integration'
slug: bai-11-sqlx-va-database-integration
description: >-
  SQLx async, compile-time query checking. Migrations, connection pooling. CRUD
  operations, transactions. Sea-ORM alternative. Repository pattern, clean
  architecture.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Async Rust & Web Development'
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: From Basics to Advanced'
  slug: rust-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9526" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9526)"/>

  <!-- Decorations -->
  <g>
    <circle cx="957" cy="61" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="814" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="671" cy="255" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1028" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.5166604983954,148 983.5166604983954,174 961,187 938.4833395016046,174 938.4833395016046,148 961,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: SQLx & Database Integration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Async Rust & Web Development</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. SQLx Setup</strong></h2>

<pre><code class="language-toml">[dependencies]
sqlx = { version = "0.7", features = ["runtime-tokio", "postgres", "uuid", "chrono"] }
</code></pre>

<pre><code class="language-bash"># Cài SQLx CLI
cargo install sqlx-cli --no-default-features --features postgres

# Tạo database
sqlx database create

# Tạo migration
sqlx migrate add create_products_table
</code></pre>

<pre><code class="language-sql">-- migrations/001_create_products_table.sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
</code></pre>

<h2 id="2-crud"><strong>2. CRUD Operations</strong></h2>

<pre><code class="language-rust">use sqlx::{PgPool, FromRow};
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, FromRow, Serialize)]
struct Product {
    id: Uuid,
    name: String,
    price: rust_decimal::Decimal,
    description: Option&lt;String&gt;,
    created_at: DateTime&lt;Utc&gt;,
}

struct ProductRepository {
    pool: PgPool,
}

impl ProductRepository {
    // Compile-time verified query
    async fn find_all(&self, limit: i64, offset: i64) -> Result&lt;Vec&lt;Product&gt;, sqlx::Error&gt; {
        sqlx::query_as!(
            Product,
            "SELECT id, name, price, description, created_at FROM products ORDER BY created_at DESC LIMIT $1 OFFSET $2",
            limit, offset
        )
        .fetch_all(&self.pool)
        .await
    }

    async fn find_by_id(&self, id: Uuid) -> Result&lt;Option&lt;Product&gt;, sqlx::Error&gt; {
        sqlx::query_as!(Product, "SELECT * FROM products WHERE id = $1", id)
            .fetch_optional(&self.pool)
            .await
    }

    async fn create(&self, name: &str, price: Decimal, description: Option&lt;&str&gt;) -> Result&lt;Product, sqlx::Error&gt; {
        sqlx::query_as!(
            Product,
            "INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *",
            name, price, description
        )
        .fetch_one(&self.pool)
        .await
    }

    async fn delete(&self, id: Uuid) -> Result&lt;bool, sqlx::Error&gt; {
        let result = sqlx::query!("DELETE FROM products WHERE id = $1", id)
            .execute(&self.pool)
            .await?;
        Ok(result.rows_affected() > 0)
    }
}
</code></pre>

<h2 id="3-transactions"><strong>3. Transactions</strong></h2>

<pre><code class="language-rust">async fn transfer_stock(
    pool: &PgPool,
    from_id: Uuid,
    to_id: Uuid,
    quantity: i32,
) -> Result&lt;(), sqlx::Error&gt; {
    let mut tx = pool.begin().await?;

    sqlx::query!("UPDATE inventory SET stock = stock - $1 WHERE product_id = $2", quantity, from_id)
        .execute(&mut *tx).await?;

    sqlx::query!("UPDATE inventory SET stock = stock + $1 WHERE product_id = $2", quantity, to_id)
        .execute(&mut *tx).await?;

    tx.commit().await?;
    Ok(())
}
</code></pre>

<h2 id="4-connection"><strong>4. Connection Pool</strong></h2>

<pre><code class="language-rust">use sqlx::postgres::PgPoolOptions;

let pool = PgPoolOptions::new()
    .max_connections(20)
    .min_connections(5)
    .acquire_timeout(Duration::from_secs(5))
    .idle_timeout(Duration::from_secs(600))
    .connect(&database_url)
    .await?;

// Run migrations
sqlx::migrate!("./migrations").run(&pool).await?;
</code></pre>

<p>Next article: <strong>Authentication & Authorization</strong>.</p>
