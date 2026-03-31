---
id: 019d8b40-f303-7001-b007-rust000000303
title: 'Bài 11: SQLx & Database Integration'
slug: bai-11-sqlx-va-database-integration
description: >-
  SQLx async, compile-time query checking. Migrations, connection pooling.
  CRUD operations, transactions. Sea-ORM alternative.
  Repository pattern, clean architecture.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Async Rust & Web Development"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Authentication & Authorization</strong>.</p>
