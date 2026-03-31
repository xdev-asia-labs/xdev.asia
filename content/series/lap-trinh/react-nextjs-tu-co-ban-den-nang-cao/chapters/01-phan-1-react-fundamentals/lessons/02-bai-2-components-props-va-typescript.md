---
id: 019d8b40-d102-7001-b005-reactnx000102
title: 'Bài 2: Components, Props & TypeScript'
slug: bai-2-components-props-va-typescript
description: >-
  Functional components, props, children. TypeScript với React, typing props,
  events, refs. Component composition, render props pattern.
  React.FC vs function declarations.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: React Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-functional-components"><strong>1. Functional Components</strong></h2>

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

<h2 id="2-props"><strong>2. Props</strong></h2>

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

<h2 id="3-children-prop"><strong>3. Children Prop</strong></h2>

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

<h2 id="4-typescript-patterns"><strong>4. TypeScript Patterns cho React</strong></h2>

<h3 id="4-1-event-typing"><strong>4.1. Event Typing</strong></h3>

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

<h3 id="4-2-generic-components"><strong>4.2. Generic Components</strong></h3>

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

<h3 id="4-3-discriminated-unions"><strong>4.3. Discriminated Unions</strong></h3>

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

<h2 id="5-component-composition"><strong>5. Component Composition</strong></h2>

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

<p>Bài tiếp theo: <strong>Hooks Deep Dive</strong> — useState, useEffect, useRef, useMemo, useCallback, và custom hooks.</p>
