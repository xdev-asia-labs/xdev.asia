---
id: 019d8b40-f302-7001-b007-rust000000302
title: 'Bài 10: Axum Framework & REST API'
slug: bai-10-axum-framework-va-rest-api
description: >-
  Axum setup, routing, handlers, extractors. State management, middleware (tower).
  Serde serialization, JSON responses. Error handling, custom errors.
  So sánh Axum vs Actix-web vs Rocket.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Async Rust & Web Development"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Axum Setup</strong></h2>

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

<h2 id="2-handlers"><strong>2. Handlers & Extractors</strong></h2>

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

<h2 id="3-error-handling"><strong>3. Error Handling</strong></h2>

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

<h2 id="4-middleware"><strong>4. Middleware với Tower</strong></h2>

<pre><code class="language-rust">use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;

let app = Router::new()
    .route("/products", get(list_products))
    .layer(CorsLayer::permissive())
    .layer(TraceLayer::new_for_http())
    .with_state(state);
</code></pre>

<p>Bài tiếp theo: <strong>SQLx & Database Integration</strong>.</p>
