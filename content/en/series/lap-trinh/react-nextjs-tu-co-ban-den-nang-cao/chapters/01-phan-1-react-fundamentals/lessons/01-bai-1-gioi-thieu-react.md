---
id: 019d8b40-d101-7001-b005-reactnx000101
title: 'Lesson 1: Introducing React'
slug: bai-1-gioi-thieu-react
description: >-
  What is React, Virtual DOM, component-based architecture. Compare React vs Vue
  vs Angular vs Svelte. Tooling ecosystem, create-react-app vs Vite. JSX syntax,
  first components.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: React Fundamentals'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7964" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7964)"/>

  <!-- Decorations -->
  <g>
    <circle cx="629" cy="97" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="658" cy="206" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="687" cy="55" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="716" cy="164" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="273" r="20" fill="#818cf8" opacity="0.1"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Introducing React</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: React Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-react-la-gi"><strong>1. What is React?</strong></h2>

<p>React is a JavaScript library for building user interfaces (UI), developed by Meta (Facebook). React is not a framework — it just focuses <strong>view layer</strong> and allows you to choose other tools for routing, state management, data fetching.</p>

<h3 id="1-1-core-concepts"><strong>1.1. Core Concepts</strong></h3>

<ul>
<li><strong>Component-Based</strong>: UI is divided into independent, reusable components</li>
<li><strong>Declarative</strong>: UI description <em>should look like</em>, React automatically handles DOM updates</li>
<li><strong>Virtual DOM</strong>: React creates a virtual DOM in memory, compares and only updates the changed part</li>
<li><strong>Unidirectional data flow</strong>: Data flows from parent → child through props</li>
</ul>

<h3 id="1-2-virtual-dom"><strong>1.2. How does Virtual DOM work?</strong></h3>

<pre><code class="language-text">User Action → setState() → Virtual DOM re-render (in memory)
    → Diffing (so sánh Virtual DOM cũ và mới)
    → Reconciliation (chỉ update DOM thật ở phần thay đổi)
</code></pre>

<h2 id="2-so-sanh-frameworks"><strong>2. Compare React vs Vue vs Angular vs Svelte</strong></h2>

<table>
<thead><tr><th>Features</th><th>React</th><th>Vue</th><th>Angular</th><th>Svelte</th></tr></thead>
<tbody>
<tr><td>Type</td><td>Library</td><td>Framework</td><td>Framework</td><td>Compiler</td></tr>
<tr><td>Learning Curve</td><td>Medium</td><td>Easy</td><td>Hard</td><td>Easy</td></tr>
<tr><td>Bundle Size</td><td>~45KB</td><td>~33KB</td><td>~143KB</td><td>~2KB</td></tr>
<tr><td>Performance</td><td>Fast (Virtual DOM)</td><td>Fast (Virtual DOM)</td><td>Fast (Change Detection)</td><td>Fastest (No runtime)</td></tr>
<tr><td>Ecosystem</td><td>Largest</td><td>Large</td><td>Complete</td><td>Growing. Growing</td></tr>
<tr><td>TypeScript</td><td>Excellent</td><td>Good</td><td>Built-in</td><td>Good</td></tr>
<tr><td>SSR</td><td>Next.js</td><td>Nuxt</td><td>Angular Universal</td><td>SvelteKit</td></tr>
<tr><td>Jobs</td><td>Most</td><td>Many</td><td>Many</td><td>Growing. Growing</td></tr>
</tbody>
</table>

<h2 id="3-setup-voi-vite"><strong>3. Setup Project with Vite</strong></h2>

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

<p>Next article: <strong>Components, Props & TypeScript</strong> — functional components, typing props, and component composition.</p>
