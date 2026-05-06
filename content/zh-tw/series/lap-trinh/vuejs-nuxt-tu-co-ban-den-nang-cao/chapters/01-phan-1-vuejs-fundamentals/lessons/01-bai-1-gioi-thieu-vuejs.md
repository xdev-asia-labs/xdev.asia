---
id: 019d8b40-h101-7001-b009-vuenuxt000101
title: 第 1 課：介紹 Vue.js - 漸進式框架
slug: bai-1-gioi-thieu-vuejs
description: >-
  什麼是 Vue.js，「漸進式框架」哲學。比較 Vue、React、Angular、Svelte。 Vue DevTools、Vite
  設定。單文件組件，模板語法。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Vue.js 基礎知識
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: Vue.js 和 Nuxt：從基礎到高級
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：Vue.js 簡介 - 漸進式</tspan>
      <tspan x="60" dy="42">框架</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js 和 Nuxt：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Vue.js 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-vuejs-la-gi"><strong>1.什麼是Vue.js？</strong></h2>

<p>Vue.js 就是其中之一 <strong>漸進框架</strong> 用於建立使用者介面。 「漸進」意味著您可以從簡單開始，然後逐漸擴展——從一個小型庫到 Nuxt 的全端框架。</p>

<table>
<thead><tr><th>特點</th><th>維埃</th><th>反應</th><th>角</th><th>斯韋爾特</th></tr></thead>
<tbody>
<tr><td>類型</td><td>進步的</td><td>圖書館</td><td>完整框架</td><td>編譯器</td></tr>
<tr><td>反應性</td><td>基於代理</td><td>虛擬DOM</td><td>區域.js</td><td>編譯時</td></tr>
<tr><td>範本</td><td>基於 HTML</td><td>JSX</td><td>HTML + 指令</td><td>類似 HTML</td></tr>
<tr><td>狀態</td><td>松屬</td><td>Redux/Zustand</td><td>RxJS/NGRx</td><td>商店</td></tr>
<tr><td>固態繼電器</td><td>努克斯特</td><td>Next.js</td><td>角度通用</td><td>苗條套件</td></tr>
<tr><td>學習曲線</td><td>簡單</td><td>平均</td><td>困難</td><td>簡單</td></tr>
</tbody>
</table>

<h2 id="2-setup"><strong>2. Vite設定</strong></h2>

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

<h2 id="3-sfc"><strong>3. 單一檔案元件（SFC）</strong></h2>

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

<h2 id="4-template-syntax"><strong>4. 模板語法</strong></h2>

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

<h2 id="5-devtools"><strong>5.Vue開發工具</strong></h2>

<p>安裝 <strong>Vue 開發工具</strong> Chrome/Firefox 上的調試擴充功能：</p>

<ul>
<li>查看組件樹和狀態</li>
<li>追蹤 Pinia 商店</li>
<li>檢查 Vue 路由器</li>
<li>時間軸事件</li>
<li>性能分析</li>
</ul>

<h2 id="6-project-structure"><strong>六、項目結構</strong></h2>

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

<p>下一篇： <strong>反應系統和成分 API</strong> — 參考、反應、計算、觀察。</p>
