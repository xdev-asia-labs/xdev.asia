---
id: 019d8b40-d103-7001-b005-reactnx000103
title: 'Bài 3: Hooks Deep Dive'
slug: bai-3-hooks-deep-dive
description: >-
  useState, useEffect, useRef, useMemo, useCallback. Custom hooks, rules of
  hooks. useReducer cho complex state. React 19 use() hook,
  useTransition, useDeferredValue.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: React Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Event Handling, Forms & Conditional Rendering</strong> — controlled forms, React Hook Form, và Zod validation.</p>
