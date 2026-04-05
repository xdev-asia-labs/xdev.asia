---
id: 019d8b40-f404-7001-b007-rust000000404
title: 'Bài 16: Caching, CLI Tools & Macros'
slug: bai-16-caching-cli-tools-va-macros
description: >-
  Redis caching với deadpool-redis. Command-line tools với clap.
  Procedural macros, derive macros. Serde custom serialization.
  Configuration management.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Advanced Backend"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8932" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8932)"/>

  <!-- Decorations -->
  <g>
    <circle cx="615" cy="275" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="645" cy="265" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="260" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="145" x2="1100" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="175" x2="1050" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1079.6410161513775,225 1079.6410161513775,265 1045,285 1010.3589838486224,265 1010.3589838486224,225 1045,205" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Lập trình — Bài 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Caching, CLI Tools &amp; Macros</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Advanced Backend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-redis"><strong>1. Redis Caching</strong></h2>

<pre><code class="language-rust">use deadpool_redis::{Config, Runtime, Pool};
use redis::AsyncCommands;

async fn setup_redis() -> Pool {
    let cfg = Config::from_url("redis://localhost:6379");
    cfg.create_pool(Some(Runtime::Tokio1)).unwrap()
}

async fn get_cached&lt;T: serde::de::DeserializeOwned + serde::Serialize&gt;(
    pool: &Pool,
    key: &str,
    ttl_secs: u64,
    fetch: impl std::future::Future&lt;Output = Result&lt;T, anyhow::Error&gt;&gt;,
) -> Result&lt;T, anyhow::Error&gt; {
    let mut conn = pool.get().await?;

    // Try cache
    let cached: Option&lt;String&gt; = conn.get(key).await?;
    if let Some(data) = cached {
        return Ok(serde_json::from_str(&data)?);
    }

    // Fetch & cache
    let value = fetch.await?;
    let serialized = serde_json::to_string(&value)?;
    conn.set_ex(key, &serialized, ttl_secs).await?;
    Ok(value)
}
</code></pre>

<h2 id="2-clap"><strong>2. CLI Tools với Clap</strong></h2>

<pre><code class="language-rust">use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "myctl", version, about = "My CLI tool")]
struct Cli {
    #[command(subcommand)]
    command: Commands,

    /// Enable verbose output
    #[arg(short, long, global = true)]
    verbose: bool,
}

#[derive(Subcommand)]
enum Commands {
    /// Initialize a new project
    Init {
        /// Project name
        #[arg(short, long)]
        name: String,
        /// Template to use
        #[arg(short, long, default_value = "default")]
        template: String,
    },
    /// Deploy to production
    Deploy {
        /// Environment
        #[arg(short, long)]
        env: String,
        /// Skip confirmation
        #[arg(long)]
        yes: bool,
    },
    /// Run database migrations
    Migrate {
        #[command(subcommand)]
        action: MigrateAction,
    },
}

#[derive(Subcommand)]
enum MigrateAction {
    Up,
    Down { steps: Option&lt;u32&gt; },
    Status,
}

fn main() {
    let cli = Cli::parse();
    match cli.command {
        Commands::Init { name, template } => {
            println!("Creating project '{}' with template '{}'", name, template);
        }
        Commands::Deploy { env, yes } => {
            println!("Deploying to {}", env);
        }
        Commands::Migrate { action } => match action {
            MigrateAction::Up => println!("Running migrations"),
            MigrateAction::Down { steps } => println!("Rolling back {:?}", steps),
            MigrateAction::Status => println!("Migration status"),
        },
    }
}
</code></pre>

<h2 id="3-macros"><strong>3. Declarative Macros</strong></h2>

<pre><code class="language-rust">// macro_rules! — pattern-based
macro_rules! hashmap {
    ($($key:expr => $value:expr),* $(,)?) => {
        {
            let mut map = std::collections::HashMap::new();
            $(map.insert($key, $value);)*
            map
        }
    };
}

let scores = hashmap! {
    "Alice" => 95,
    "Bob" => 87,
    "Charlie" => 92,
};
</code></pre>

<h2 id="4-config"><strong>4. Configuration Management</strong></h2>

<pre><code class="language-rust">use config::{Config, Environment, File};

#[derive(Deserialize)]
struct AppConfig {
    server: ServerConfig,
    database: DatabaseConfig,
    redis: RedisConfig,
}

#[derive(Deserialize)]
struct ServerConfig {
    host: String,
    port: u16,
}

#[derive(Deserialize)]
struct DatabaseConfig {
    url: String,
    max_connections: u32,
}

fn load_config() -> Result&lt;AppConfig, config::ConfigError&gt; {
    let config = Config::builder()
        .add_source(File::with_name("config/default"))
        .add_source(File::with_name("config/local").required(false))
        .add_source(Environment::with_prefix("APP").separator("__"))
        .build()?;

    config.try_deserialize()
}
// APP__SERVER__PORT=3000 → server.port = 3000
</code></pre>

<p>Bài tiếp theo: <strong>WebAssembly với Rust</strong>.</p>
