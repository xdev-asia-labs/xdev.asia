---
id: 019d8b40-h101-7001-b009-vuenuxt000101
title: 'Bài 1: Giới thiệu Vue.js - The Progressive Framework'
slug: bai-1-gioi-thieu-vuejs
description: >-
  Vue.js là gì, triết lý "progressive framework". So sánh Vue vs React
  vs Angular vs Svelte. Vue DevTools, Vite setup. Single File
  Components, template syntax.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Vue.js Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3182" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3182)"/>

  <!-- Decorations -->
  <g>
    <circle cx="729" cy="257" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="858" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="987" cy="235" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="616" cy="224" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="167" x2="1100" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="197" x2="1050" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="953.3730669589464,96 953.3730669589464,138 917,159 880.6269330410536,138 880.6269330410536,96.00000000000001 917,75" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Lập trình — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu Vue.js - The Progressive</tspan>
      <tspan x="60" dy="42">Framework</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js &amp; Nuxt: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Vue.js Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vuejs-la-gi"><strong>1. Vue.js là gì?</strong></h2>

<p>Vue.js là một <strong>progressive framework</strong> cho xây dựng giao diện người dùng. "Progressive" nghĩa là bạn có thể bắt đầu đơn giản rồi mở rộng dần — từ một thư viện nhỏ đến full-stack framework với Nuxt.</p>

<table>
<thead><tr><th>Feature</th><th>Vue</th><th>React</th><th>Angular</th><th>Svelte</th></tr></thead>
<tbody>
<tr><td>Kiểu</td><td>Progressive</td><td>Library</td><td>Full Framework</td><td>Compiler</td></tr>
<tr><td>Reactivity</td><td>Proxy-based</td><td>Virtual DOM</td><td>Zone.js</td><td>Compile-time</td></tr>
<tr><td>Template</td><td>HTML-based</td><td>JSX</td><td>HTML + directives</td><td>HTML-like</td></tr>
<tr><td>State</td><td>Pinia</td><td>Redux/Zustand</td><td>RxJS/NgRx</td><td>Stores</td></tr>
<tr><td>SSR</td><td>Nuxt</td><td>Next.js</td><td>Angular Universal</td><td>SvelteKit</td></tr>
<tr><td>Learning curve</td><td>Dễ</td><td>Trung bình</td><td>Khó</td><td>Dễ</td></tr>
</tbody>
</table>

<h2 id="2-setup"><strong>2. Setup với Vite</strong></h2>

<pre><code class="language-bash"># Tạo project Vue + TypeScript
npm create vue@latest my-app

# Options:
# ✔ TypeScript? Yes
# ✔ JSX Support? No
# ✔ Vue Router? Yes
# ✔ Pinia? Yes
# ✔ Vitest? Yes
# ✔ ESLint? Yes
# ✔ Prettier? Yes

cd my-app
npm install
npm run dev
</code></pre>

<h2 id="3-sfc"><strong>3. Single File Component (SFC)</strong></h2>

<pre><code class="language-vue">&lt;!-- HelloWorld.vue --&gt;
&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const message = ref('Xin chào Vue.js!')
const count = ref(0)

function increment() {
  count.value++
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click="increment"&gt;+1&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.container {
  padding: 1rem;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
&lt;/style&gt;
</code></pre>

<h2 id="4-template-syntax"><strong>4. Template Syntax</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Text interpolation --&gt;
  &lt;p&gt;{{ message }}&lt;/p&gt;
  &lt;p&gt;{{ count * 2 }}&lt;/p&gt;

  &lt;!-- Attribute binding --&gt;
  &lt;a :href="url"&gt;Link&lt;/a&gt;
  &lt;img :src="imageUrl" :alt="title" /&gt;

  &lt;!-- Event handling --&gt;
  &lt;button @click="handleClick"&gt;Click&lt;/button&gt;
  &lt;button @click="count++"&gt;+1&lt;/button&gt;
  &lt;input @keydown.enter="submit" /&gt;

  &lt;!-- Two-way binding --&gt;
  &lt;input v-model="name" /&gt;
  &lt;p&gt;Xin chào, {{ name }}!&lt;/p&gt;

  &lt;!-- Conditional rendering --&gt;
  &lt;p v-if="count &gt; 10"&gt;Lớn hơn 10&lt;/p&gt;
  &lt;p v-else-if="count &gt; 5"&gt;Lớn hơn 5&lt;/p&gt;
  &lt;p v-else&gt;Nhỏ hơn hoặc bằng 5&lt;/p&gt;

  &lt;!-- List rendering --&gt;
  &lt;ul&gt;
    &lt;li v-for="item in items" :key="item.id"&gt;
      {{ item.name }}
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-devtools"><strong>5. Vue DevTools</strong></h2>

<p>Cài đặt <strong>Vue DevTools</strong> extension trên Chrome/Firefox để debug:</p>

<ul>
<li>Xem component tree và state</li>
<li>Track Pinia stores</li>
<li>Inspect Vue Router</li>
<li>Timeline events</li>
<li>Performance profiling</li>
</ul>

<h2 id="6-project-structure"><strong>6. Cấu trúc Project</strong></h2>

<pre><code class="language-text">my-app/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── composables/    # Custom composables
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components (if using vue-router)
│   ├── router/         # Vue Router config
│   ├── stores/         # Pinia stores
│   ├── types/          # TypeScript types
│   ├── App.vue         # Root component
│   └── main.ts         # Entry point
├── public/             # Static files
├── index.html
├── vite.config.ts
└── tsconfig.json
</code></pre>

<p>Bài tiếp theo: <strong>Reactivity System & Composition API</strong> — ref, reactive, computed, watch.</p>
