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
