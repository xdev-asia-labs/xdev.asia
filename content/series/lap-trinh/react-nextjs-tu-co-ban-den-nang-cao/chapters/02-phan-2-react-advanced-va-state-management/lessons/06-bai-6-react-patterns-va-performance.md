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
