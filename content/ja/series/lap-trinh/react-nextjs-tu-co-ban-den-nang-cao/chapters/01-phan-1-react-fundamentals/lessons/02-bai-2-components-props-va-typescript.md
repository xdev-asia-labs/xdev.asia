---
id: 019d8b40-d102-7001-b005-reactnx000102
title: 'レッスン 2: コンポーネント、プロップ、TypeScript'
slug: bai-2-components-props-va-typescript
description: >-
  機能コンポーネント、小道具、子。 React を使用した TypeScript、props、event、ref
  の入力。コンポーネント構成、レンダリング小道具パターン。 React.FC と関数宣言。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: React の基礎'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React と Next.js: 基本から高度まで'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2609" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2609)"/>

  <!-- Decorations -->
  <g>
    <circle cx="893" cy="149" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="686" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="979" cy="55" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="772" cy="268" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="221" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="139" x2="1100" y2="219" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="169" x2="1050" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1018.444863728671,172 1018.444863728671,206 989,223 959.555136271329,206 959.555136271329,172 989,155" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: コンポーネント、プロップ、TypeScript</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React と Next.js: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: React の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-functional-components"><strong>1. 機能部品</strong></h2>

<pre><code class="language-tsx">// Cách 1: Function declaration (khuyến khích)
function Button() {
  return &lt;button&gt;Click me&lt;/button&gt;;
}

// Cách 2: Arrow function
const Button = () =&gt; {
  return &lt;button&gt;Click me&lt;/button&gt;;
};

// Cách 3: React.FC (KHÔNG khuyến khích — implicit children, generic issues)
const Button: React.FC = () =&gt; {
  return &lt;button&gt;Click me&lt;/button&gt;;
};
</code></pre>

<h2 id="2-props"><strong>2. 小道具</strong></h2>

<pre><code class="language-tsx">// Define props interface
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger'; // Optional with union type
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick: () =&gt; void;
}

function Button({ label, variant = 'primary', size = 'md', disabled = false, onClick }: ButtonProps) {
  return (
    &lt;button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    &gt;
      {label}
    &lt;/button&gt;
  );
}

// Usage
&lt;Button label="Submit" variant="primary" onClick={() =&gt; console.log('clicked')} /&gt;
&lt;Button label="Cancel" variant="secondary" onClick={handleCancel} disabled /&gt;
</code></pre>

<h2 id="3-children-prop"><strong>3.子供用小道具</strong></h2>

<pre><code class="language-tsx">interface CardProps {
  title: string;
  children: React.ReactNode; // Explicit children typing
}

function Card({ title, children }: CardProps) {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;div className="card-body"&gt;{children}&lt;/div&gt;
    &lt;/div&gt;
  );
}

// Usage
&lt;Card title="User Profile"&gt;
  &lt;p&gt;Name: Duy Tran&lt;/p&gt;
  &lt;p&gt;Role: Developer&lt;/p&gt;
&lt;/Card&gt;
</code></pre>

<h2 id="4-typescript-patterns"><strong>4. React の TypeScript パターン</strong></h2>

<h3 id="4-1-event-typing"><strong>4.1.イベントの型付け</strong></h3>

<pre><code class="language-tsx">function Form() {
  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
    e.preventDefault();
  };

  const handleClick = (e: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; {
    console.log('clicked');
  };

  const handleKeyDown = (e: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; {
    if (e.key === 'Enter') {
      // submit
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input onChange={handleChange} onKeyDown={handleKeyDown} /&gt;
      &lt;button onClick={handleClick}&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h3 id="4-2-generic-components"><strong>4.2.汎用コンポーネント</strong></h3>

<pre><code class="language-tsx">interface ListProps&lt;T&gt; {
  items: T[];
  renderItem: (item: T) =&gt; React.ReactNode;
  keyExtractor: (item: T) =&gt; string | number;
}

function List&lt;T&gt;({ items, renderItem, keyExtractor }: ListProps&lt;T&gt;) {
  return (
    &lt;ul&gt;
      {items.map((item) =&gt; (
        &lt;li key={keyExtractor(item)}&gt;{renderItem(item)}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// Usage
interface User {
  id: number;
  name: string;
}

&lt;List&lt;User&gt;
  items={users}
  keyExtractor={(user) =&gt; user.id}
  renderItem={(user) =&gt; &lt;span&gt;{user.name}&lt;/span&gt;}
/&gt;
</code></pre>

<h3 id="4-3-discriminated-unions"><strong>4.3.差別的な組合</strong></h3>

<pre><code class="language-tsx">// Props that depend on each other
type AlertProps =
  | { variant: 'success'; message: string }
  | { variant: 'error'; message: string; onRetry: () =&gt; void }
  | { variant: 'loading' };

function Alert(props: AlertProps) {
  switch (props.variant) {
    case 'success':
      return &lt;div className="alert-success"&gt;{props.message}&lt;/div&gt;;
    case 'error':
      return (
        &lt;div className="alert-error"&gt;
          {props.message}
          &lt;button onClick={props.onRetry}&gt;Retry&lt;/button&gt;
        &lt;/div&gt;
      );
    case 'loading':
      return &lt;div className="alert-loading"&gt;Loading...&lt;/div&gt;;
  }
}
</code></pre>

<h2 id="5-component-composition"><strong>5. 成分構成</strong></h2>

<pre><code class="language-tsx">// Compound Components pattern
interface TabsProps {
  children: React.ReactNode;
  defaultTab?: string;
}

function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || '');

  return (
    &lt;TabsContext.Provider value={{ activeTab, setActiveTab }}&gt;
      &lt;div className="tabs"&gt;{children}&lt;/div&gt;
    &lt;/TabsContext.Provider&gt;
  );
}

function TabList({ children }: { children: React.ReactNode }) {
  return &lt;div className="tab-list" role="tablist"&gt;{children}&lt;/div&gt;;
}

function Tab({ value, children }: { value: string; children: React.ReactNode }) {
  const { activeTab, setActiveTab } = useTabsContext();
  return (
    &lt;button
      role="tab"
      className={activeTab === value ? 'active' : ''}
      onClick={() =&gt; setActiveTab(value)}
    &gt;
      {children}
    &lt;/button&gt;
  );
}

function TabPanel({ value, children }: { value: string; children: React.ReactNode }) {
  const { activeTab } = useTabsContext();
  if (activeTab !== value) return null;
  return &lt;div role="tabpanel"&gt;{children}&lt;/div&gt;;
}

// Attach sub-components
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// Usage
&lt;Tabs defaultTab="overview"&gt;
  &lt;Tabs.List&gt;
    &lt;Tabs.Tab value="overview"&gt;Overview&lt;/Tabs.Tab&gt;
    &lt;Tabs.Tab value="settings"&gt;Settings&lt;/Tabs.Tab&gt;
  &lt;/Tabs.List&gt;
  &lt;Tabs.Panel value="overview"&gt;Content here&lt;/Tabs.Panel&gt;
  &lt;Tabs.Panel value="settings"&gt;Settings here&lt;/Tabs.Panel&gt;
&lt;/Tabs&gt;
</code></pre>

<p>次の記事: <strong>フックの詳細</strong> — useState、useEffect、useRef、useMemo、useCallback、およびカスタム フック。</p>
