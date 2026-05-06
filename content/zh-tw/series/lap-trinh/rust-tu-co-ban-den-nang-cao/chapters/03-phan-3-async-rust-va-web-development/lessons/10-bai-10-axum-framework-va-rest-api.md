---
id: 019d8b40-f302-7001-b007-rust000000302
title: 第 10 課：Axum 框架和 REST API
slug: bai-10-axum-framework-va-rest-api
description: >-
  Axum 設定、路由、處理程序、提取器。狀態管理，中間件（塔）。序列化、JSON 響應。錯誤處理，自訂錯誤。比較 Axum、Actix-web 和
  Rocket。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：非同步 Rust 和 Web 開發
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1043" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1043)"/>

  <!-- Decorations -->
  <g>
    <circle cx="737" cy="201" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1011" cy="55" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="112" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="169" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：Axum 框架和 REST API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：非同步 Rust 和 Web 開發</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-setup"><strong>1.阿克蘇姆設置</strong></h2>

<pre><code class="language-toml">[dependencies]
axum = "0.7"
tokio = { version = "1", features = ["full"] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
tower = "0.4"
tower-http = { version = "0.5", features = ["cors", "trace"] }
tracing = "0.1"
tracing-subscriber = "0.3"
</code></pre>

<pre><code class="language-rust">use axum::{routing::{get, post}, Router, Json, extract::{State, Path, Query}};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Clone)]
struct AppState {
    db: Arc&lt;RwLock&lt;Vec&lt;Product&gt;&gt;&gt;,
}

#[tokio::main]
async fn main() {
    tracing_subscriber::init();

    let state = AppState {
        db: Arc::new(RwLock::new(Vec::new())),
    };

    let app = Router::new()
        .route("/products", get(list_products).post(create_product))
        .route("/products/{id}", get(get_product).put(update_product).delete(delete_product))
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
</code></pre>

<h2 id="2-handlers"><strong>2. 處理機和提取機</strong></h2>

<pre><code class="language-rust">#[derive(Serialize, Deserialize, Clone)]
struct Product {
    id: String,
    name: String,
    price: f64,
}

#[derive(Deserialize)]
struct CreateProduct {
    name: String,
    price: f64,
}

#[derive(Deserialize)]
struct Pagination {
    page: Option&lt;u32&gt;,
    limit: Option&lt;u32&gt;,
}

async fn list_products(
    State(state): State&lt;AppState&gt;,
    Query(pagination): Query&lt;Pagination&gt;,
) -> Json&lt;Vec&lt;Product&gt;&gt; {
    let db = state.db.read().await;
    let page = pagination.page.unwrap_or(1);
    let limit = pagination.limit.unwrap_or(20);
    let skip = ((page - 1) * limit) as usize;
    let products: Vec&lt;Product&gt; = db.iter().skip(skip).take(limit as usize).cloned().collect();
    Json(products)
}

async fn create_product(
    State(state): State&lt;AppState&gt;,
    Json(input): Json&lt;CreateProduct&gt;,
) -> (axum::http::StatusCode, Json&lt;Product&gt;) {
    let product = Product {
        id: uuid::Uuid::new_v4().to_string(),
        name: input.name,
        price: input.price,
    };
    state.db.write().await.push(product.clone());
    (axum::http::StatusCode::CREATED, Json(product))
}

async fn get_product(
    State(state): State&lt;AppState&gt;,
    Path(id): Path&lt;String&gt;,
) -> Result&lt;Json&lt;Product&gt;, AppError&gt; {
    let db = state.db.read().await;
    let product = db.iter().find(|p| p.id == id)
        .cloned()
        .ok_or(AppError::NotFound(format!("Product {}", id)))?;
    Ok(Json(product))
}
</code></pre>

<h2 id="3-error-handling"><strong>3. 錯誤處理</strong></h2>

<pre><code class="language-rust">use axum::response::IntoResponse;
use axum::http::StatusCode;

enum AppError {
    NotFound(String),
    BadRequest(String),
    Internal(anyhow::Error),
}

impl IntoResponse for AppError {
    fn into_response(self) -> axum::response::Response {
        let (status, message) = match self {
            AppError::NotFound(msg) => (StatusCode::NOT_FOUND, msg),
            AppError::BadRequest(msg) => (StatusCode::BAD_REQUEST, msg),
            AppError::Internal(e) => (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()),
        };
        (status, Json(serde_json::json!({ "error": message }))).into_response()
    }
}
</code></pre>

<h2 id="4-middleware"><strong>4. 帶有 Tower 的中間件</strong></h2>

<pre><code class="language-rust">use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;

let app = Router::new()
    .route("/products", get(list_products))
    .layer(CorsLayer::permissive())
    .layer(TraceLayer::new_for_http())
    .with_state(state);
</code></pre>

<p>下一篇： <strong>SQLx 和資料庫集成</strong>。</p>
