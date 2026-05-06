---
id: 019d8b40-d103-7001-b005-reactnx000103
title: 'Lesson 3: Hooks Deep Dive'
slug: bai-3-hooks-deep-dive
description: >-
  useState, useEffect, useRef, useMemo, useCallback. Custom hooks, rules of
  hooks. useReducer for complex state. React 19 use() hook, useTransition,
  useDeferredValue.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: React Fundamentals'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9794" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9794)"/>

  <!-- Decorations -->
  <g>
    <circle cx="637" cy="261" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="674" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="711" cy="155" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="748" cy="232" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="49" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Hooks Deep Dive</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: React Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-usestate"><strong>1. useState</strong></h2>

<pre><code class="language-tsx">import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState&lt;User | null&gt;(null);

  // ⚠️ State updates are asynchronous và batched
  const handleClick = () =&gt; {
    setCount(count + 1);     // ❌ Stale closure nếu multiple calls
    setCount(prev =&gt; prev + 1); // ✅ Functional update
  };

  // Object state
  const [form, setForm] = useState({ name: '', email: '' });
  const updateName = (name: string) =&gt; {
    setForm(prev =&gt; ({ ...prev, name })); // ✅ Spread previous state
  };

  return &lt;button onClick={handleClick}&gt;Count: {count}&lt;/button&gt;;
}

// Lazy initialization (expensive computation)
const [data, setData] = useState(() =&gt; {
  return expensiveComputation(); // Chỉ chạy lần đầu
});
</code></pre>

<h2 id="2-useeffect"><strong>2. useEffect</strong></h2>

<pre><code class="language-tsx">import { useEffect, useState } from 'react';

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState&lt;User | null&gt;(null);

  useEffect(() =&gt; {
    // Side effect: fetch data
    let cancelled = false;

    async function fetchUser() {
      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();
      if (!cancelled) {
        setUser(data);
      }
    }

    fetchUser();

    // Cleanup function
    return () =&gt; {
      cancelled = true; // Prevent state update after unmount
    };
  }, [userId]); // Dependency array: re-run when userId changes

  return user ? &lt;div&gt;{user.name}&lt;/div&gt; : &lt;div&gt;Loading...&lt;/div&gt;;
}

// useEffect dependency patterns:
// useEffect(() =&gt; {}, []);      // Mount only (componentDidMount)
// useEffect(() =&gt; {});          // Every render (⚠️ avoid)
// useEffect(() =&gt; {}, [dep]);   // When dep changes
// useEffect(() =&gt; { return () =&gt; {} }, []); // Unmount cleanup
</code></pre>

<h2 id="3-useref"><strong>3. useRef</strong></h2>

<pre><code class="language-tsx">import { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef&lt;HTMLInputElement&gt;(null);
  const renderCount = useRef(0); // Mutable value, no re-render

  useEffect(() =&gt; {
    inputRef.current?.focus(); // Auto-focus on mount
  }, []);

  useEffect(() =&gt; {
    renderCount.current += 1; // Track renders without causing re-render
  });

  return (
    &lt;div&gt;
      &lt;input ref={inputRef} type="text" /&gt;
      &lt;p&gt;Rendered {renderCount.current} times&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="4-usememo-usecallback"><strong>4. useMemo & useCallback</strong></h2>

<pre><code class="language-tsx">import { useMemo, useCallback, useState } from 'react';

function ProductList({ products, category }: Props) {
  // useMemo: cache kết quả computation
  const filteredProducts = useMemo(() =&gt; {
    return products.filter(p =&gt; p.category === category);
  }, [products, category]); // Chỉ re-compute khi dependencies thay đổi

  // useCallback: cache function reference
  const handleDelete = useCallback((id: number) =&gt; {
    // delete logic
  }, []); // Stable reference, không tạo function mới mỗi render

  return (
    &lt;div&gt;
      {filteredProducts.map(product =&gt; (
        &lt;ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete} // Stable reference → prevent re-render
        /&gt;
      ))}
    &lt;/div&gt;
  );
}

// ⚠️ Khi nào dùng useMemo/useCallback:
// ✅ Expensive computations
// ✅ Passing callbacks to memoized children (React.memo)
// ✅ Dependencies of other hooks
// ❌ KHÔNG dùng cho mọi thứ — premature optimization
</code></pre>

<h2 id="5-usereducer"><strong>5. useReducer</strong></h2>

<pre><code class="language-tsx">import { useReducer } from 'react';

interface State {
  items: CartItem[];
  total: number;
  isLoading: boolean;
}

type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_CART' };

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_ITEM':
      const item = state.items.find(i =&gt; i.id === action.payload.id);
      return {
        ...state,
        items: state.items.filter(i =&gt; i.id !== action.payload.id),
        total: state.total - (item?.price || 0),
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'CLEAR_CART':
      return { items: [], total: 0, isLoading: false };
    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    isLoading: false,
  });

  return (
    &lt;div&gt;
      &lt;p&gt;Total: ${state.total}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'CLEAR_CART' })}&gt;
        Clear Cart
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="6-custom-hooks"><strong>6. Custom Hooks</strong></h2>

<pre><code class="language-tsx">// useLocalStorage
function useLocalStorage&lt;T&gt;(key: string, initialValue: T) {
  const [value, setValue] = useState&lt;T&gt;(() =&gt; {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() =&gt; {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// useDebounce
function useDebounce&lt;T&gt;(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() =&gt; {
    const timer = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// useFetch
function useFetch&lt;T&gt;(url: string) {
  const [data, setData] = useState&lt;T | null&gt;(null);
  const [error, setError] = useState&lt;Error | null&gt;(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =&gt; {
    let cancelled = false;

    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err as Error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchData();
    return () =&gt; { cancelled = true; };
  }, [url]);

  return { data, error, isLoading };
}

// Usage
function Users() {
  const { data: users, error, isLoading } = useFetch&lt;User[]&gt;('/api/users');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  if (isLoading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return &lt;div&gt;{/* render users */}&lt;/div&gt;;
}
</code></pre>

<h2 id="7-react-19-hooks"><strong>7. React 19 Hooks</strong></h2>

<pre><code class="language-tsx">import { useTransition, useDeferredValue, use } from 'react';

// useTransition: mark state update as non-urgent
function Search() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (value: string) =&gt; {
    setQuery(value); // Urgent: update input immediately

    startTransition(() =&gt; {
      // Non-urgent: update filtered list (can be interrupted)
      setFilteredItems(filterItems(value));
    });
  };

  return (
    &lt;div&gt;
      &lt;input value={query} onChange={e =&gt; handleChange(e.target.value)} /&gt;
      {isPending &amp;&amp; &lt;Spinner /&gt;}
    &lt;/div&gt;
  );
}

// useDeferredValue: defer re-rendering of a value
function SearchResults({ query }: { query: string }) {
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    &lt;div style={{ opacity: isStale ? 0.5 : 1 }}&gt;
      &lt;Results query={deferredQuery} /&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<p>Next article: <strong>Event Handling, Forms & Conditional Rendering</strong> — controlled forms, React Hook Form, and Zod validation.</p>
