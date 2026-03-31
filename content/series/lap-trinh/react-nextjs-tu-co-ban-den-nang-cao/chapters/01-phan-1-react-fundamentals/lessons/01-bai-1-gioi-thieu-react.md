---
id: 019d8b40-d101-7001-b005-reactnx000101
title: 'Bài 1: Giới thiệu React'
slug: bai-1-gioi-thieu-react
description: >-
  React là gì, Virtual DOM, component-based architecture. So sánh React vs Vue
  vs Angular vs Svelte. Tooling ecosystem, create-react-app vs Vite.
  JSX syntax, first component.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: React Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-react-la-gi"><strong>1. React là gì?</strong></h2>

<p>React là thư viện JavaScript để xây dựng giao diện người dùng (UI), được phát triển bởi Meta (Facebook). React không phải là framework — nó chỉ tập trung vào <strong>view layer</strong> và cho phép bạn tự chọn các tools khác cho routing, state management, data fetching.</p>

<h3 id="1-1-core-concepts"><strong>1.1. Core Concepts</strong></h3>

<ul>
<li><strong>Component-Based</strong>: UI được chia thành các components độc lập, tái sử dụng</li>
<li><strong>Declarative</strong>: Mô tả UI <em>nên trông như thế nào</em>, React tự handle DOM updates</li>
<li><strong>Virtual DOM</strong>: React tạo DOM ảo trong memory, so sánh và chỉ update phần thay đổi</li>
<li><strong>Unidirectional data flow</strong>: Data chảy từ parent → child qua props</li>
</ul>

<h3 id="1-2-virtual-dom"><strong>1.2. Virtual DOM hoạt động như thế nào?</strong></h3>

<pre><code class="language-text">User Action → setState() → Virtual DOM re-render (in memory)
    → Diffing (so sánh Virtual DOM cũ và mới)
    → Reconciliation (chỉ update DOM thật ở phần thay đổi)
</code></pre>

<h2 id="2-so-sanh-frameworks"><strong>2. So sánh React vs Vue vs Angular vs Svelte</strong></h2>

<table>
<thead><tr><th>Feature</th><th>React</th><th>Vue</th><th>Angular</th><th>Svelte</th></tr></thead>
<tbody>
<tr><td>Type</td><td>Library</td><td>Framework</td><td>Framework</td><td>Compiler</td></tr>
<tr><td>Learning Curve</td><td>Medium</td><td>Easy</td><td>Hard</td><td>Easy</td></tr>
<tr><td>Bundle Size</td><td>~45KB</td><td>~33KB</td><td>~143KB</td><td>~2KB</td></tr>
<tr><td>Performance</td><td>Fast (Virtual DOM)</td><td>Fast (Virtual DOM)</td><td>Fast (Change Detection)</td><td>Fastest (No runtime)</td></tr>
<tr><td>Ecosystem</td><td>Largest</td><td>Large</td><td>Complete</td><td>Growing</td></tr>
<tr><td>TypeScript</td><td>Excellent</td><td>Good</td><td>Built-in</td><td>Good</td></tr>
<tr><td>SSR</td><td>Next.js</td><td>Nuxt</td><td>Angular Universal</td><td>SvelteKit</td></tr>
<tr><td>Jobs</td><td>Most</td><td>Many</td><td>Many</td><td>Growing</td></tr>
</tbody>
</table>

<h2 id="3-setup-voi-vite"><strong>3. Setup Project với Vite</strong></h2>

<pre><code class="language-bash"># Create React + TypeScript project
npm create vite@latest my-app -- --template react-ts

cd my-app
npm install
npm run dev
</code></pre>

<h3 id="3-1-project-structure"><strong>3.1. Project Structure</strong></h3>

<pre><code class="language-text">my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.tsx          ← Root component
│   ├── App.css
│   ├── main.tsx         ← Entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
</code></pre>

<h2 id="4-jsx-syntax"><strong>4. JSX Syntax</strong></h2>

<pre><code class="language-tsx">// JSX = JavaScript XML
// Cho phép viết HTML-like syntax trong JavaScript

// ✅ JSX
const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;

// ↓ Biên dịch thành
const element = React.createElement('h1', null, 'Hello, React!');
</code></pre>

<h3 id="4-1-jsx-rules"><strong>4.1. JSX Rules</strong></h3>

<pre><code class="language-tsx">function App() {
  const name = 'Duy';
  const isLoggedIn = true;
  const items = ['React', 'Vue', 'Angular'];

  return (
    // Rule 1: Phải có 1 root element (hoặc Fragment)
    &lt;&gt;
      {/* Rule 2: Expressions trong {} */}
      &lt;h1&gt;Hello, {name}!&lt;/h1&gt;

      {/* Rule 3: className thay vì class */}
      &lt;div className="container"&gt;
        {/* Rule 4: htmlFor thay vì for */}
        &lt;label htmlFor="email"&gt;Email&lt;/label&gt;

        {/* Rule 5: CamelCase cho attributes */}
        &lt;input onClick={() =&gt; {}} tabIndex={0} /&gt;

        {/* Rule 6: Self-closing tags */}
        &lt;img src="logo.png" alt="Logo" /&gt;
        &lt;br /&gt;

        {/* Conditional rendering */}
        {isLoggedIn &amp;&amp; &lt;p&gt;Welcome back!&lt;/p&gt;}
        {isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}

        {/* List rendering */}
        &lt;ul&gt;
          {items.map((item, index) =&gt; (
            &lt;li key={index}&gt;{item}&lt;/li&gt;
          ))}
        &lt;/ul&gt;

        {/* Inline styles (object, camelCase) */}
        &lt;div style={{ backgroundColor: 'blue', fontSize: '16px' }}&gt;
          Styled div
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}
</code></pre>

<h2 id="5-first-component"><strong>5. First Component</strong></h2>

<pre><code class="language-tsx">// src/components/Greeting.tsx
function Greeting() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Xin chào từ React! 🚀&lt;/h1&gt;
      &lt;p&gt;Đây là component đầu tiên của bạn.&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default Greeting;

// src/App.tsx
import Greeting from './components/Greeting';

function App() {
  return (
    &lt;div&gt;
      &lt;Greeting /&gt;
    &lt;/div&gt;
  );
}

export default App;
</code></pre>

<p>Bài tiếp theo: <strong>Components, Props & TypeScript</strong> — functional components, typing props, và component composition.</p>
