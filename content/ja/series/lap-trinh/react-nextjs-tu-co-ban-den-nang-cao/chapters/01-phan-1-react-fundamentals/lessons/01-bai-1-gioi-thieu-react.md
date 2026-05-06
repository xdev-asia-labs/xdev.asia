---
id: 019d8b40-d101-7001-b005-reactnx000101
title: 'レッスン 1: React の紹介'
slug: bai-1-gioi-thieu-react
description: >-
  React、Virtual DOM、コンポーネントベースのアーキテクチャとは何ですか。 React、Vue、Angular、Svelte
  を比較します。ツール エコシステム、create-react-app と Vite。 JSX 構文、最初のコンポーネント。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: React の基礎'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: React の紹介</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: React の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-react-la-gi"><strong>1. Reactとは何ですか?</strong></h2>

<p>React は、Meta (Facebook) によって開発された、ユーザー インターフェイス (UI) を構築するための JavaScript ライブラリです。 React はフレームワークではありません - 焦点を絞っているだけです <strong>ビューレイヤー</strong> また、ルーティング、状態管理、データ取得のための他のツールを選択することもできます。</p>

<h3 id="1-1-core-concepts"><strong>1.1.中心となる概念</strong></h3>

<ul>
<li><strong>コンポーネントベース</strong>: UI は独立した再利用可能なコンポーネントに分割されます</li>
<li><strong>宣言的</strong>：UIの説明 <em>のように見えるはずです</em>, React は DOM 更新を自動的に処理します</li>
<li><strong>仮想 DOM</strong>: React はメモリ内に仮想 DOM を作成し、比較して変更された部分のみを更新します</li>
<li><strong>一方向のデータフロー</strong>: データは props を介して親→子に流れます。</li>
</ul>

<h3 id="1-2-virtual-dom"><strong>1.2.仮想 DOM はどのように機能しますか?</strong></h3>

<pre><code class="language-text">User Action → setState() → Virtual DOM re-render (in memory)
    → Diffing (so sánh Virtual DOM cũ và mới)
    → Reconciliation (chỉ update DOM thật ở phần thay đổi)
</code></pre>

<h2 id="2-so-sanh-frameworks"><strong>2. React、Vue、Angular、Svelte の比較</strong></h2>

<table>
<thead><tr><th>特長</th><th>反応する</th><th>ヴュー</th><th>角度のある</th><th>スレンダー</th></tr></thead>
<tbody>
<tr><td>種類</td><td>図書館</td><td>フレームワーク</td><td>フレームワーク</td><td>コンパイラ</td></tr>
<tr><td>学習曲線</td><td>中</td><td>簡単</td><td>ハード</td><td>簡単</td></tr>
<tr><td>バンドルのサイズ</td><td>～45KB</td><td>～33KB</td><td>～143KB</td><td>～2KB</td></tr>
<tr><td>パフォーマンス</td><td>高速 (仮想 DOM)</td><td>高速 (仮想 DOM)</td><td>高速 (変化検出)</td><td>最速 (ランタイムなし)</td></tr>
<tr><td>生態系</td><td>最大の</td><td>大</td><td>完了</td><td>成長中。成長する</td></tr>
<tr><td>TypeScript</td><td>素晴らしい</td><td>良い</td><td>内蔵</td><td>良い</td></tr>
<tr><td>SSR</td><td>Next.js</td><td>ナクスト</td><td>角度ユニバーサル</td><td>SvelteKit</td></tr>
<tr><td>求人</td><td>ほとんど</td><td>たくさん</td><td>たくさん</td><td>成長中。成長する</td></tr>
</tbody>
</table>

<h2 id="3-setup-voi-vite"><strong>3. Vite でプロジェクトをセットアップする</strong></h2>

<pre><code class="language-bash"># Create React + TypeScript project
npm create vite@latest my-app -- --template react-ts

cd my-app
npm install
npm run dev
</code></pre>

<h3 id="3-1-project-structure"><strong>3.1.プロジェクトの構造</strong></h3>

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

<h2 id="4-jsx-syntax"><strong>4. JSX 構文</strong></h2>

<pre><code class="language-tsx">// JSX = JavaScript XML
// Cho phép viết HTML-like syntax trong JavaScript

// ✅ JSX
const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;

// ↓ Biên dịch thành
const element = React.createElement('h1', null, 'Hello, React!');
</code></pre>

<h3 id="4-1-jsx-rules"><strong>4.1. JSX ルール</strong></h3>

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

<h2 id="5-first-component"><strong>5. 最初のコンポーネント</strong></h2>

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

<p>次の記事: <strong>コンポーネント、プロップ、TypeScript</strong> — 機能コンポーネント、プロップの入力、およびコンポーネントの構成。</p>
