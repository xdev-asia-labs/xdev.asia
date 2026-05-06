---
id: 019d8b40-f502-7001-b007-rust000000502
title: 第 18 課：FFI 與不安全的 Rust
slug: bai-18-ffi-va-unsafe-rust
description: 不安全塊、原始指標、轉換。 FFI（外部函數介面），從 Rust 呼叫 C。建置 C 相容庫。 PyO3 用於 Python 綁定。安全變數。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 第 5 部分：WebAssembly 和系統
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5712" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5712)"/>

  <!-- Decorations -->
  <g>
    <circle cx="684" cy="42" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="768" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="852" cy="50" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="936" cy="54" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="58" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：FFI 與不安全的 Rust</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：WebAssembly 和系統</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-unsafe"><strong>1. 不安全的生鏽</strong></h2>

<pre><code class="language-rust">// 5 unsafe superpowers:
// 1. Dereference raw pointer
// 2. Call unsafe function
// 3. Access/modify mutable static
// 4. Implement unsafe trait
// 5. Access fields of union

fn main() {
    // Raw pointers
    let mut num = 5;
    let r1 = &num as *const i32;      // immutable raw pointer
    let r2 = &mut num as *mut i32;     // mutable raw pointer

    unsafe {
        println!("r1: {}", *r1);
        *r2 = 10;
        println!("r2: {}", *r2);
    }

    // unsafe function
    unsafe fn dangerous() {
        // ...
    }
    unsafe { dangerous(); }

    // Safe abstraction over unsafe code
    fn split_at_mut(values: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
        let len = values.len();
        let ptr = values.as_mut_ptr();
        assert!(mid <= len);

        unsafe {
            (
                std::slice::from_raw_parts_mut(ptr, mid),
                std::slice::from_raw_parts_mut(ptr.add(mid), len - mid),
            )
        }
    }
}
</code></pre>

<h2 id="2-ffi-c"><strong>2. FFI——从 Rust 调用 C</strong></h2>

<pre><code class="language-rust">// Gọi C standard library
extern "C" {
    fn abs(input: i32) -> i32;
    fn strlen(s: *const std::ffi::c_char) -> usize;
}

fn main() {
    unsafe {
        println!("abs(-5) = {}", abs(-5));
    }
}

// Expose Rust function cho C
#[no_mangle]
pub extern "C" fn rust_add(a: i32, b: i32) -> i32 {
    a + b
}
</code></pre>

<pre><code class="language-rust">// Dùng bindgen cho C libraries
// build.rs
fn main() {
    println!("cargo:rustc-link-lib=z"); // Link libz

    let bindings = bindgen::Builder::default()
        .header("wrapper.h")
        .generate()
        .expect("Unable to generate bindings");

    bindings.write_to_file("src/bindings.rs").unwrap();
}
</code></pre>

<h2 id="3-pyo3"><strong>3. PyO3——Python 绑定</strong></h2>

<pre><code class="language-rust">use pyo3::prelude::*;

#[pyfunction]
fn sum_as_string(a: usize, b: usize) -> String {
    (a + b).to_string()
}

#[pyclass]
struct Calculator {
    value: f64,
}

#[pymethods]
impl Calculator {
    #[new]
    fn new(value: f64) -> Self {
        Calculator { value }
    }

    fn add(&mut self, x: f64) {
        self.value += x;
    }

    fn result(&self) -> f64 {
        self.value
    }
}

#[pymodule]
fn my_rust_lib(m: &Bound&lt;'_, PyModule&gt;) -> PyResult&lt;()&gt; {
    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;
    m.add_class::&lt;Calculator&gt;()?;
    Ok(())
}
</code></pre>

<pre><code class="language-python"># Python
import my_rust_lib

print(my_rust_lib.sum_as_string(5, 3))  # "8"

calc = my_rust_lib.Calculator(0.0)
calc.add(3.14)
print(calc.result())  # 3.14
</code></pre>

<h2 id="4-safety"><strong>4. 安全不變量</strong></h2>

<pre><code class="language-rust">// ✅ Safe wrapper pattern
pub struct SafeBuffer {
    ptr: *mut u8,
    len: usize,
    capacity: usize,
}

impl SafeBuffer {
    pub fn new(capacity: usize) -> Self {
        let layout = std::alloc::Layout::array::&lt;u8&gt;(capacity).unwrap();
        let ptr = unsafe { std::alloc::alloc(layout) };
        Self { ptr, len: 0, capacity }
    }

    pub fn push(&mut self, byte: u8) {
        assert!(self.len < self.capacity, "Buffer full");
        unsafe { *self.ptr.add(self.len) = byte; }
        self.len += 1;
    }
}

impl Drop for SafeBuffer {
    fn drop(&mut self) {
        let layout = std::alloc::Layout::array::&lt;u8&gt;(self.capacity).unwrap();
        unsafe { std::alloc::dealloc(self.ptr, layout); }
    }
}
</code></pre>

<p>下一篇： <strong>測試和基準測試</strong>。</p>
