---
id: 019d8b40-f502-7001-b007-rust000000502
title: 'Bài 18: FFI & Unsafe Rust'
slug: bai-18-ffi-va-unsafe-rust
description: >-
  Unsafe blocks, raw pointers, transmute. FFI (Foreign Function Interface),
  calling C from Rust. Building C-compatible libraries.
  PyO3 cho Python bindings. Safety invariants.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: WebAssembly & Systems"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-unsafe"><strong>1. Unsafe Rust</strong></h2>

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

<h2 id="2-ffi-c"><strong>2. FFI — Gọi C từ Rust</strong></h2>

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

<h2 id="3-pyo3"><strong>3. PyO3 — Python Bindings</strong></h2>

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

<h2 id="4-safety"><strong>4. Safety Invariants</strong></h2>

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

<p>Bài tiếp theo: <strong>Testing & Benchmarking</strong>.</p>
