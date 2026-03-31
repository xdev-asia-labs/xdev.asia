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
