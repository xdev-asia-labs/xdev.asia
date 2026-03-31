---
id: 019d8b40-f601-7001-b007-rust000000601
title: 'Bài 19: Testing & Benchmarking'
slug: bai-19-testing-va-benchmarking
description: >-
  Unit tests, integration tests, doc tests. rstest (fixtures, parametrize),
  mockall. API testing với reqwest. Criterion.rs benchmarking.
  Property-based testing, fuzzing. Code coverage.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-unit"><strong>1. Unit Tests</strong></h2>

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

<h2 id="2-rstest"><strong>2. rstest — Fixtures & Parametrize</strong></h2>

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

<h2 id="3-mockall"><strong>3. Mocking với mockall</strong></h2>

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

<h2 id="4-benchmark"><strong>4. Criterion Benchmarking</strong></h2>

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

<p>Bài tiếp theo: <strong>Docker & CI/CD cho Rust</strong>.</p>
