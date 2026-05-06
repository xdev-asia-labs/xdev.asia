---
id: 019d8b40-g404-7001-b008-nodejs0000404
title: 第 16 課：本機外掛程式和 N-API
slug: bai-16-native-addons-va-napi
description: >-
  N-API（節點 API）、napi-rs（Rust 綁定）。節點 gyp，預建置。 C/C++
  外掛程式、效能關鍵的本機程式碼。何時使用原生外掛程式、工作執行緒和 WASM。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：無框架構建
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：本機外掛程式和 N-API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：無框架構建</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-napi"><strong>1.N-API（節點API）</strong></h2>

<p>Node-API 是一個穩定的 ABI（應用程式二進位介面），允許在升級 Node.js 版本時用 C/C++ 或 Rust 編寫本機插件，而無需重建。</p>

<table>
<thead><tr><th>方法</th><th>語言</th><th>建構工具</th><th>何時使用</th></tr></thead>
<tbody>
<tr><td>節點插件 API</td><td>C++</td><td>節點 gyp</td><td>C/C++ 函式庫可用</td></tr>
<tr><td>納皮-RS</td><td>鐵鏽</td><td>貨物.貨物</td><td>Rust 項目，效能</td></tr>
<tr><td>WASM</td><td>任意 → WASM</td><td>wasm 包</td><td>便攜式、沙箱</td></tr>
<tr><td>工作執行緒</td><td>JavaScript</td><td>無</td><td>CPU任務很簡單</td></tr>
</tbody>
</table>

<h2 id="2-napi-rs"><strong>2.napi-rs（Rust → Node.js）</strong></h2>

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

<h2 id="3-node-gyp"><strong>3.有node-addon-api的C++插件</strong></h2>

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

<h2 id="4-prebuild"><strong>4. 預先建置與分發</strong></h2>

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

<h2 id="5-benchmark"><strong>5. 何時使用原生插件？</strong></h2>

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

<p>下一篇： <strong>測試 Node.js 應用程式</strong> — 節點：測試、Vitest、Supertest。</p>
