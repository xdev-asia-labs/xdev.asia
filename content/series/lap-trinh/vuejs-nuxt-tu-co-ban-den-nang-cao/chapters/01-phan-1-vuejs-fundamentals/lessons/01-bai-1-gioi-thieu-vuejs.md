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
