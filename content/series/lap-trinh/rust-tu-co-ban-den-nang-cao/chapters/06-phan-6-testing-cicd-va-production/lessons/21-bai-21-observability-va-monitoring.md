---
id: 019d8b40-f603-7001-b007-rust000000603
title: 'Bài 21: Observability & Monitoring'
slug: bai-21-observability-va-monitoring
description: >-
  tracing crate, structured logging. OpenTelemetry integration,
  Prometheus metrics. Grafana dashboards. Health checks, graceful shutdown.
  tokio-console cho async debugging.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-tracing"><strong>1. Structured Logging với tracing</strong></h2>

<pre><code class="language-rust">use tracing::{info, warn, error, instrument, Level};
use tracing_subscriber::{fmt, layer::SubscriberExt, util::SubscriberInitExt, EnvFilter};

fn init_tracing() {
    tracing_subscriber::registry()
        .with(EnvFilter::try_from_default_env().unwrap_or_else(|_| "info".into()))
        .with(fmt::layer().json()) // JSON format cho production
        .init();
}

#[instrument(skip(pool), fields(user_id = %user_id))]
async fn get_user(pool: &PgPool, user_id: &str) -> Result&lt;User, AppError&gt; {
    info!("Fetching user");

    let user = sqlx::query_as!(User, "SELECT * FROM users WHERE id = $1", user_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| {
            error!(error = %e, "Database query failed");
            AppError::Internal(e.into())
        })?;

    match user {
        Some(u) => {
            info!(username = %u.username, "User found");
            Ok(u)
        }
        None => {
            warn!("User not found");
            Err(AppError::NotFound("User".into()))
        }
    }
}
</code></pre>

<h2 id="2-metrics"><strong>2. Prometheus Metrics</strong></h2>

<pre><code class="language-rust">use metrics::{counter, gauge, histogram};
use metrics_exporter_prometheus::PrometheusBuilder;

fn init_metrics() {
    PrometheusBuilder::new()
        .with_http_listener(([0, 0, 0, 0], 9090))
        .install()
        .unwrap();
}

// Middleware đo request metrics
async fn metrics_middleware(
    req: axum::extract::Request,
    next: axum::middleware::Next,
) -> axum::response::Response {
    let path = req.uri().path().to_string();
    let method = req.method().to_string();
    let start = std::time::Instant::now();

    counter!("http_requests_total", "method" => method.clone(), "path" => path.clone()).increment(1);
    gauge!("http_requests_in_flight").increment(1.0);

    let response = next.run(req).await;

    let duration = start.elapsed().as_secs_f64();
    let status = response.status().as_u16().to_string();

    histogram!("http_request_duration_seconds", "method" => method, "path" => path, "status" => status).record(duration);
    gauge!("http_requests_in_flight").decrement(1.0);

    response
}
</code></pre>

<h2 id="3-health"><strong>3. Health Checks & Graceful Shutdown</strong></h2>

<pre><code class="language-rust">async fn health_check(State(state): State&lt;AppState&gt;) -> impl IntoResponse {
    let db_ok = sqlx::query("SELECT 1")
        .execute(&state.pool)
        .await
        .is_ok();

    let redis_ok = state.redis.get().await
        .map(|mut conn| redis::cmd("PING").query_async::&lt;String&gt;(&mut conn))
        .is_ok();

    if db_ok && redis_ok {
        (StatusCode::OK, Json(serde_json::json!({"status": "healthy"})))
    } else {
        (StatusCode::SERVICE_UNAVAILABLE, Json(serde_json::json!({"status": "unhealthy", "db": db_ok, "redis": redis_ok})))
    }
}

// Graceful shutdown
async fn main() {
    let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .unwrap();
}

async fn shutdown_signal() {
    let ctrl_c = async { tokio::signal::ctrl_c().await.unwrap() };

    #[cfg(unix)]
    let terminate = async {
        tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate())
            .unwrap()
            .recv()
            .await;
    };

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }
    tracing::info!("Shutting down gracefully...");
}
</code></pre>

<p>Bài tiếp theo: <strong>Production Deployment & Performance Tuning</strong>.</p>
