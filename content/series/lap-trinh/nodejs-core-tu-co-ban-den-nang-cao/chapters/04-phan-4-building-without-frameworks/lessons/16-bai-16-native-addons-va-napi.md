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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8346" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8346)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1057" cy="101" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="971" cy="235" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="172" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="109" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.5166604983954,198 1033.5166604983954,224 1011,237 988.4833395016046,224 988.4833395016046,198 1011,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Native Addons &amp; N-API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Building Without Frameworks</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
