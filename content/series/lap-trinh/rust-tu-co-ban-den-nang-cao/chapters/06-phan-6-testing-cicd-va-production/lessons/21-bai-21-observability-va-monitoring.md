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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9183" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9183)"/>

  <!-- Decorations -->
  <g>
    <circle cx="941" cy="273" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="782" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="623" cy="175" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="964" cy="256" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="77" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="143" x2="1100" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="173" x2="1050" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.9089653438086,174 1025.9089653438086,212 993,231 960.0910346561914,212 960.0910346561914,174 993,155" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 21: Observability &amp; Monitoring</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Testing, CI/CD &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
