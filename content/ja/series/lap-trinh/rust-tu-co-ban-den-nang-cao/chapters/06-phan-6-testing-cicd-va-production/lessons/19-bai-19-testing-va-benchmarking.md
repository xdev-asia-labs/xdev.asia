---
id: 019d8b40-f601-7001-b007-rust000000601
title: 'レッスン 19: テストとベンチマーク'
slug: bai-19-testing-va-benchmarking
description: >-
  単体テスト、統合テスト、ドキュメントテスト。 rstest (フィクスチャ、パラメータ化)、モコール。リクエストを使用した API テスト。
  Criterion.rs のベンチマーク。プロパティベースのテスト、ファジング。コードカバレッジ。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 6: テスト、CI/CD、本番環境'
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: 基本から上級まで'
  slug: rust-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-361" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-361)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1044" cy="202" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="86" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="932" cy="230" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="114" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="820" cy="258" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="162" x2="1100" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="192" x2="1050" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1044.0429399400243,193.5 1044.0429399400243,230.5 1012,249 979.9570600599758,230.5 979.9570600599758,193.5 1012,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: テストとベンチマーク</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: テスト、CI/CD、本番環境</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-unit"><strong>1. 単体テスト</strong></h2>

<pre><code class="language-rust">pub fn add(a: i32, b: i32) -> i32 { a + b }

pub fn divide(a: f64, b: f64) -> Result&lt;f64, String&gt; {
    if b == 0.0 { Err("Division by zero".into()) } else { Ok(a / b) }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    fn test_divide() {
        assert_eq!(divide(10.0, 2.0), Ok(5.0));
    }

    #[test]
    fn test_divide_by_zero() {
        assert!(divide(10.0, 0.0).is_err());
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn test_overflow() {
        let _ = i8::MAX.checked_add(1).expect("overflow");
    }
}
</code></pre>

<h2 id="2-rstest"><strong>2. rstest — フィクスチャとパラメータ化</strong></h2>

<pre><code class="language-rust">use rstest::*;

#[fixture]
fn db_pool() -> PgPool {
    // Setup test database
    PgPoolOptions::new().connect_lazy("postgres://test:test@localhost/test").unwrap()
}

#[rstest]
#[case(2, 3, 5)]
#[case(0, 0, 0)]
#[case(-1, 1, 0)]
fn test_add_parametrized(#[case] a: i32, #[case] b: i32, #[case] expected: i32) {
    assert_eq!(add(a, b), expected);
}

// Async test
#[rstest]
#[tokio::test]
async fn test_create_product(db_pool: PgPool) {
    let repo = ProductRepository::new(db_pool);
    let product = repo.create("Test", 9.99, None).await.unwrap();
    assert_eq!(product.name, "Test");
}
</code></pre>

<h2 id="3-mockall"><strong>3. モックルによるモック化</strong></h2>

<pre><code class="language-rust">use mockall::{automock, predicate::*};

#[automock]
trait UserRepository {
    async fn find_by_id(&self, id: &str) -> Option&lt;User&gt;;
    async fn save(&self, user: &User) -> Result&lt;(), String&gt;;
}

#[tokio::test]
async fn test_user_service() {
    let mut mock = MockUserRepository::new();

    mock.expect_find_by_id()
        .with(eq("user-1"))
        .times(1)
        .returning(|_| Some(User { id: "user-1".into(), name: "Alice".into() }));

    let service = UserService::new(mock);
    let user = service.get_user("user-1").await.unwrap();
    assert_eq!(user.name, "Alice");
}
</code></pre>

<h2 id="4-benchmark"><strong>4. 基準ベンチマーク</strong></h2>

<pre><code class="language-rust">// benches/my_bench.rs
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn fibonacci(n: u64) -> u64 {
    match n {
        0 | 1 => n,
        _ => { let (mut a, mut b) = (0, 1); for _ in 2..=n { let t = a + b; a = b; b = t; } b }
    }
}

fn bench_fibonacci(c: &mut Criterion) {
    c.bench_function("fib 20", |b| b.iter(|| fibonacci(black_box(20))));

    let mut group = c.benchmark_group("fibonacci");
    for n in [10, 20, 30, 40] {
        group.bench_with_input(format!("fib {}", n), &n, |b, &n| {
            b.iter(|| fibonacci(black_box(n)));
        });
    }
    group.finish();
}

criterion_group!(benches, bench_fibonacci);
criterion_main!(benches);
</code></pre>

<pre><code class="language-bash">cargo bench
cargo test
cargo test -- --test-threads=1  # Sequential
cargo tarpaulin --out Html       # Coverage
</code></pre>

<p>次の記事: <strong>Rust 用の Docker と CI/CD</strong>。</p>
