---
id: 019d8b40-d202-7001-b005-reactnx000202
title: 'Bài 6: React Patterns & Performance'
slug: bai-6-react-patterns-va-performance
description: >-
  Higher-Order Components, Compound Components, Render Props.
  React.memo, useMemo, useCallback optimization. React DevTools Profiler,
  performance anti-patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: React Advanced & State Management"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1584" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1584)"/>

  <!-- Decorations -->
  <g>
    <circle cx="720" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="960" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: React Patterns &amp; Performance</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React &amp; Next.js: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: React Advanced &amp; State Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-react-memo"><strong>1. React.memo</strong></h2>

<pre><code class="language-tsx">import { memo } from 'react';

// Memoize component — chỉ re-render khi props thay đổi
const ExpensiveList = memo(function ExpensiveList({ items }: { items: Item[] }) {
  console.log('ExpensiveList rendered');
  return (
    &lt;ul&gt;
      {items.map(item => &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
});

// Custom comparison
const UserCard = memo(
  function UserCard({ user }: { user: User }) {
    return &lt;div&gt;{user.name}&lt;/div&gt;;
  },
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id
      && prevProps.user.name === nextProps.user.name;
  }
);
</code></pre>

<h2 id="2-hoc"><strong>2. Higher-Order Components (HOC)</strong></h2>

<pre><code class="language-tsx">// withAuth HOC
function withAuth&lt;T extends object&gt;(Component: React.ComponentType&lt;T&gt;) {
  return function AuthenticatedComponent(props: T) {
    const { user, isLoading } = useAuth();

    if (isLoading) return &lt;Spinner /&gt;;
    if (!user) return &lt;Navigate to="/login" /&gt;;

    return &lt;Component {...props} /&gt;;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);

// withLogging HOC
function withLogging&lt;T extends object&gt;(Component: React.ComponentType&lt;T&gt;, name: string) {
  return function LoggedComponent(props: T) {
    useEffect(() => {
      console.log(`${name} mounted`);
      return () => console.log(`${name} unmounted`);
    }, []);

    return &lt;Component {...props} /&gt;;
  };
}
</code></pre>

<h2 id="3-render-props"><strong>3. Render Props</strong></h2>

<pre><code class="language-tsx">interface MouseTrackerProps {
  render: (position: { x: number; y: number }) => React.ReactNode;
}

function MouseTracker({ render }: MouseTrackerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return &lt;div&gt;{render(position)}&lt;/div&gt;;
}

// Usage
&lt;MouseTracker
  render={({ x, y }) =&gt; (
    &lt;p&gt;Mouse: {x}, {y}&lt;/p&gt;
  )}
/&gt;
</code></pre>

<h2 id="4-performance-patterns"><strong>4. Performance Patterns</strong></h2>

<pre><code class="language-tsx">// ❌ Anti-pattern: Object/array creation in render
function Bad() {
  return &lt;Child style={{ color: 'red' }} items={[1, 2, 3]} /&gt;; // New ref every render!
}

// ✅ Fix: useMemo or hoist outside
const style = { color: 'red' };
const items = [1, 2, 3];

function Good() {
  return &lt;Child style={style} items={items} /&gt;;
}

// ❌ Anti-pattern: Inline function as prop to memoized child
function Bad2() {
  return &lt;MemoizedChild onClick={() =&gt; doSomething()} /&gt;;
}

// ✅ Fix: useCallback
function Good2() {
  const handleClick = useCallback(() =&gt; doSomething(), []);
  return &lt;MemoizedChild onClick={handleClick} /&gt;;
}

// ❌ Anti-pattern: State too high in tree
// ✅ Fix: Lift state only as needed, or co-locate state
</code></pre>

<h2 id="5-code-splitting"><strong>5. Code Splitting & Lazy Loading</strong></h2>

<pre><code class="language-tsx">import { lazy, Suspense } from 'react';

// Lazy load components
const AdminPanel = lazy(() =&gt; import('./AdminPanel'));
const Analytics = lazy(() =&gt; import('./Analytics'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/admin" element={&lt;AdminPanel /&gt;} /&gt;
        &lt;Route path="/analytics" element={&lt;Analytics /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}
</code></pre>

<h2 id="6-profiling"><strong>6. React DevTools Profiler</strong></h2>

<ul>
<li>Mở React DevTools → Profiler tab</li>
<li>Click "Record" → interact → "Stop"</li>
<li>Xem flame graph: components nào render lâu nhất</li>
<li>Xem "Why did this render?" cho từng component</li>
<li><strong>Highlight updates</strong>: Settings → Highlight updates → thấy components nào re-render</li>
</ul>

<p>Bài tiếp theo: <strong>Styling & UI Components</strong> — Tailwind CSS, shadcn/ui, và Framer Motion animations.</p>
