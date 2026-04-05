---
id: 019d8b40-f501-7001-b007-rust000000501
title: 'Bài 17: WebAssembly với Rust'
slug: bai-17-webassembly-voi-rust
description: >-
  wasm-pack, wasm-bindgen. Rust → WASM compilation. JavaScript interop,
  web-sys, js-sys. Performance-critical browser code. Leptos/Yew frontend frameworks.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: WebAssembly & Systems"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-805" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-805)"/>

  <!-- Decorations -->
  <g>
    <circle cx="636" cy="158" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="708" cy="70" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="286" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="242" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="178" x2="1100" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="208" x2="1050" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="956.5788383248864,111.5 956.5788383248864,144.5 928,161 899.4211616751136,144.5 899.4211616751135,111.50000000000001 928,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Lập trình — Bài 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: WebAssembly với Rust</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: WebAssembly &amp; Systems</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. WASM Setup</strong></h2>

<pre><code class="language-bash"># Cài tools
rustup target add wasm32-unknown-unknown
cargo install wasm-pack
</code></pre>

<pre><code class="language-toml"># Cargo.toml
[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wasm-bindgen = "0.2"
web-sys = { version = "0.3", features = ["console", "Document", "Element", "HtmlElement"] }
js-sys = "0.3"
</code></pre>

<pre><code class="language-rust">use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => {
            let mut a: u64 = 0;
            let mut b: u64 = 1;
            for _ in 2..=n {
                let temp = a + b;
                a = b;
                b = temp;
            }
            b
        }
    }
}

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
</code></pre>

<pre><code class="language-bash"># Build
wasm-pack build --target web
</code></pre>

<h2 id="2-js-interop"><strong>2. JavaScript Interop</strong></h2>

<pre><code class="language-rust">use wasm_bindgen::prelude::*;

// Import JS function
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = Math)]
    fn random() -> f64;
}

// Export struct to JS
#[wasm_bindgen]
pub struct ImageProcessor {
    width: u32,
    height: u32,
    pixels: Vec&lt;u8&gt;,
}

#[wasm_bindgen]
impl ImageProcessor {
    #[wasm_bindgen(constructor)]
    pub fn new(width: u32, height: u32) -> Self {
        Self {
            width, height,
            pixels: vec![0; (width * height * 4) as usize],
        }
    }

    pub fn grayscale(&mut self) {
        for chunk in self.pixels.chunks_mut(4) {
            let gray = (0.299 * chunk[0] as f64 + 0.587 * chunk[1] as f64 + 0.114 * chunk[2] as f64) as u8;
            chunk[0] = gray;
            chunk[1] = gray;
            chunk[2] = gray;
        }
    }

    pub fn pixels_ptr(&self) -> *const u8 {
        self.pixels.as_ptr()
    }
}
</code></pre>

<h2 id="3-web-sys"><strong>3. DOM Manipulation với web-sys</strong></h2>

<pre><code class="language-rust">use web_sys::{Document, Element, window};

#[wasm_bindgen(start)]
pub fn main() -> Result&lt;(), JsValue&gt; {
    let window = window().unwrap();
    let document = window.document().unwrap();

    let div = document.create_element("div")?;
    div.set_inner_html("&lt;h1&gt;Hello from Rust WASM!&lt;/h1&gt;");
    div.set_attribute("class", "rust-content")?;

    document.body().unwrap().append_child(&div)?;
    Ok(())
}
</code></pre>

<h2 id="4-leptos"><strong>4. Leptos Frontend Framework</strong></h2>

<pre><code class="language-rust">use leptos::*;

#[component]
fn App() -> impl IntoView {
    let (count, set_count) = create_signal(0);

    view! {
        &lt;div class="app"&gt;
            &lt;h1&gt;"Counter: " {count}&lt;/h1&gt;
            &lt;button on:click=move |_| set_count.update(|n| *n += 1)&gt;
                "Increment"
            &lt;/button&gt;
        &lt;/div&gt;
    }
}

fn main() {
    leptos::mount_to_body(|| view! { &lt;App/&gt; });
}
</code></pre>

<p>Bài tiếp theo: <strong>FFI & Unsafe Rust</strong>.</p>
