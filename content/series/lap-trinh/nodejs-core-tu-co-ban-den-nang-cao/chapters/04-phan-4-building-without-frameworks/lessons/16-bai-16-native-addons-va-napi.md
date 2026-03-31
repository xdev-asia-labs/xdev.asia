---
id: 019d8b40-g404-7001-b008-nodejs0000404
title: 'Bài 16: Native Addons & N-API'
slug: bai-16-native-addons-va-napi
description: >-
  N-API (Node-API), napi-rs (Rust bindings). node-gyp, prebuild.
  C/C++ addons, performance-critical native code. When to use
  native addons vs Worker Threads vs WASM.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Building Without Frameworks"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-napi"><strong>1. N-API (Node-API)</strong></h2>

<p>Node-API là stable ABI (Application Binary Interface) cho phép viết native addons bằng C/C++ hoặc Rust mà không cần rebuild khi nâng cấp Node.js version.</p>

<table>
<thead><tr><th>Approach</th><th>Language</th><th>Build tool</th><th>Khi nào dùng</th></tr></thead>
<tbody>
<tr><td>node-addon-api</td><td>C++</td><td>node-gyp</td><td>C/C++ libraries hiện có</td></tr>
<tr><td>napi-rs</td><td>Rust</td><td>cargo</td><td>Rust projects, performance</td></tr>
<tr><td>WASM</td><td>Any → WASM</td><td>wasm-pack</td><td>Portable, sandbox</td></tr>
<tr><td>Worker Threads</td><td>JavaScript</td><td>None</td><td>CPU tasks đơn giản</td></tr>
</tbody>
</table>

<h2 id="2-napi-rs"><strong>2. napi-rs (Rust → Node.js)</strong></h2>

<pre><code class="language-bash"># Tạo project napi-rs
npm create napi@latest
# Chọn: @myapp/native, supported platforms
</code></pre>

<pre><code class="language-rust">// src/lib.rs
use napi_derive::napi;
use napi::Result;

#[napi]
pub fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => {
            let (mut a, mut b) = (0u64, 1u64);
            for _ in 2..=n {
                let tmp = a + b;
                a = b;
                b = tmp;
            }
            b
        }
    }
}

#[napi]
pub fn hash_password(password: String, salt: String) -> Result<String> {
    use argon2::{self, Config};
    let config = Config::default();
    argon2::hash_encoded(password.as_bytes(), salt.as_bytes(), &config)
        .map_err(|e| napi::Error::from_reason(e.to_string()))
}
</code></pre>

<pre><code class="language-ts">// Sử dụng trong JS/TS
import { fibonacci, hashPassword } from '@myapp/native'

console.log(fibonacci(50))  // 12586269025 — nhanh hơn JS
const hash = hashPassword('mypassword', 'randomsalt')
</code></pre>

<h2 id="3-node-gyp"><strong>3. C++ Addon với node-addon-api</strong></h2>

<pre><code class="language-cpp">// addon.cc
#include &lt;napi.h&gt;

Napi::Value Add(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  double a = info[0].As&lt;Napi::Number&gt;().DoubleValue();
  double b = info[1].As&lt;Napi::Number&gt;().DoubleValue();
  return Napi::Number::New(env, a + b);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set("add", Napi::Function::New(env, Add));
  return exports;
}

NODE_API_MODULE(addon, Init)
</code></pre>

<pre><code class="language-json">// binding.gyp
{
  "targets": [{
    "target_name": "addon",
    "sources": ["addon.cc"],
    "include_dirs": ["&lt;!@(node -p \"require('node-addon-api').include\")"]
  }]
}
</code></pre>

<h2 id="4-prebuild"><strong>4. Prebuild & Distribution</strong></h2>

<pre><code class="language-json">{
  "scripts": {
    "build": "napi build --release",
    "prepublishOnly": "napi prepublish -t npm"
  },
  "napi": {
    "name": "mylib",
    "triples": {
      "defaults": true,
      "additional": ["aarch64-apple-darwin", "aarch64-unknown-linux-gnu"]
    }
  }
}
</code></pre>

<h2 id="5-benchmark"><strong>5. Khi nào dùng Native Addons?</strong></h2>

<pre><code class="language-ts">// Benchmark: Fibonacci(40)
// JavaScript:    ~1200ms
// Rust (napi-rs): ~35ms  (34x faster)
// WASM:          ~50ms   (24x faster)

// → Dùng native addons khi:
// 1. CPU-bound tasks (crypto, image processing, compression)
// 2. Cần tích hợp C/C++ libraries (FFmpeg, OpenCV)
// 3. Performance là critical
// 4. Cần memory-safe parallel processing (Rust)
</code></pre>

<p>Bài tiếp theo: <strong>Testing Node.js Applications</strong> — node:test, Vitest, Supertest.</p>
