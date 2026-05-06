---
id: 019d8b40-d101-7001-b005-reactnx000101
title: 第 1 課：React 簡介
slug: bai-1-gioi-thieu-react
description: >-
  什麼是React、Virtual DOM、基於元件的架構。比較
  React、Vue、Angular、Svelte。工俱生態系統，create-react-app 與 Vite。 JSX 語法，第一個元件。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：React 基礎知識
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: React 和 Next.js：從基礎到高級
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：React 簡介</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React 和 Next.js：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：React 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-react-la-gi"><strong>1.React是什麼？</strong></h2>

<p>React 是一個用於建立使用者介面 (UI) 的 JavaScript 程式庫，由 Meta (Facebook) 開發。 React 不是一個框架——它只是專注於 <strong>視圖圖層</strong> 並允許您選擇其他工具進行路由、狀態管理、資料擷取。</p>

<h3 id="1-1-core-concepts"><strong>1.1.核心概念</strong></h3>

<ul>
<li><strong>基於組件的</strong>：UI被劃分為獨立的、可重複使用的元件</li>
<li><strong>聲明式</strong>：介面說明 <em>應該看起來像</em>, React 自動處理 DOM 更新</li>
<li><strong>虛擬DOM</strong>：React在記憶體中建立一個虛擬DOM，比較並只更新變化的部分</li>
<li><strong>單向資料流</strong>：資料透過 props 從父級→子級流動</li>
</ul>

<h3 id="1-2-virtual-dom"><strong>1.2.虛擬 DOM 是如何運作的？</strong></h3>

<pre><code class="language-text">User Action → setState() → Virtual DOM re-render (in memory)
    → Diffing (so sánh Virtual DOM cũ và mới)
    → Reconciliation (chỉ update DOM thật ở phần thay đổi)
</code></pre>

<h2 id="2-so-sanh-frameworks"><strong>2. 比較 React、Vue、Angular、Svelte</strong></h2>

<table>
<thead><tr><th>特點</th><th>反應</th><th>維埃</th><th>角</th><th>斯韋爾特</th></tr></thead>
<tbody>
<tr><td>類型</td><td>圖書館</td><td>框架</td><td>框架</td><td>編譯器</td></tr>
<tr><td>學習曲線</td><td>中等</td><td>簡單</td><td>硬</td><td>簡單</td></tr>
<tr><td>捆綁尺寸</td><td>~45KB</td><td>〜33KB</td><td>〜143KB</td><td>〜2KB</td></tr>
<tr><td>效能</td><td>快速（虛擬 DOM）</td><td>快速（虛擬 DOM）</td><td>快速（變化檢測）</td><td>最快（無運轉時間）</td></tr>
<tr><td>生態系統</td><td>最大</td><td>大號</td><td>完成</td><td>成長。成長</td></tr>
<tr><td>打字稿</td><td>優秀</td><td>好</td><td>內建</td><td>好</td></tr>
<tr><td>固態繼電器</td><td>Next.js</td><td>努克斯特</td><td>角度通用</td><td>苗條套件</td></tr>
<tr><td>工作機會</td><td>大多數</td><td>很多</td><td>很多</td><td>成長。成長</td></tr>
</tbody>
</table>

<h2 id="3-setup-voi-vite"><strong>3. 使用Vite搭建項目</strong></h2>

<pre><code class="language-bash"># Create React + TypeScript project
npm create vite@latest my-app -- --template react-ts

cd my-app
npm install
npm run dev
</code></pre>

<h3 id="3-1-project-structure"><strong>3.1.項目結構</strong></h3>

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

<h2 id="4-jsx-syntax"><strong>4.JSX 語法</strong></h2>

<pre><code class="language-tsx">// JSX = JavaScript XML
// Cho phép viết HTML-like syntax trong JavaScript

// ✅ JSX
const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;

// ↓ Biên dịch thành
const element = React.createElement('h1', null, 'Hello, React!');
</code></pre>

<h3 id="4-1-jsx-rules"><strong>4.1. JSX 規則</strong></h3>

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

<h2 id="5-first-component"><strong>5. 第一個組件</strong></h2>

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

<p>下一篇： <strong>組件、道具和 TypeScript</strong> — 功能組件、打字道具和組件組成。</p>
