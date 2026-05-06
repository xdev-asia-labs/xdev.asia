---
id: 019d8b40-d201-7001-b005-reactnx000201
title: 'Lesson 5: Context API & State Management'
slug: bai-5-context-api-va-state-management
description: >-
  Context API, provider pattern. Zustand for global state. TanStack Query for
  server state. Compare Redux vs Zustand vs Jotai vs Recoil. State management
  strategies.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: React Advanced & State Management'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5970" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5970)"/>

  <!-- Decorations -->
  <g>
    <circle cx="611" cy="123" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="633" cy="185" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="216" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="247" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="53" x2="1100" y2="133" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="83" x2="1050" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="927.2487113059643,89 927.2487113059643,117 903,131 878.7512886940357,117 878.7512886940357,89 903,75" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Context API & State Management</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: React Advanced & State Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-context-api"><strong>1. Context API</strong></h2>

<pre><code class="language-tsx">import { createContext, useContext, useState } from 'react';

// 1. Create context with type
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext&lt;ThemeContextType | null&gt;(null);

// 2. Custom hook (type-safe)
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 3. Provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState&lt;'light' | 'dark'&gt;('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

// 4. Usage
function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    &lt;header className={theme}&gt;
      &lt;button onClick={toggleTheme}&gt;Toggle: {theme}&lt;/button&gt;
    &lt;/header&gt;
  );
}

// App
function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
    &lt;/ThemeProvider&gt;
  );
}
</code></pre>

<h2 id="2-zustand"><strong>2. Zustand — Global State</strong></h2>

<pre><code class="language-bash">npm install zustand
</code></pre>

<pre><code class="language-tsx">import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define store
interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create&lt;CartStore&gt;()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        total: 0,

        addItem: (item) => set((state) => ({
          items: [...state.items, item],
          total: state.total + item.price,
        })),

        removeItem: (id) => set((state) => {
          const item = state.items.find(i => i.id === id);
          return {
            items: state.items.filter(i => i.id !== id),
            total: state.total - (item?.price || 0),
          };
        }),

        clearCart: () => set({ items: [], total: 0 }),
      }),
      { name: 'cart-storage' } // localStorage key
    )
  )
);

// Usage — component tự động re-render khi state thay đổi
function CartBadge() {
  const itemCount = useCartStore(state => state.items.length); // Selector
  return &lt;span&gt;{itemCount}&lt;/span&gt;;
}

function CartTotal() {
  const total = useCartStore(state => state.total);
  return &lt;span&gt;${total}&lt;/span&gt;;
}

function AddButton({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem);
  return &lt;button onClick={() => addItem(product)}&gt;Add to Cart&lt;/button&gt;;
}
</code></pre>

<h2 id="3-tanstack-query"><strong>3. TanStack Query — Server State</strong></h2>

<pre><code class="language-bash">npm install @tanstack/react-query
</code></pre>

<pre><code class="language-tsx">import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min
      gcTime: 10 * 60 * 1000,   // 10 min
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    &lt;QueryClientProvider client={queryClient}&gt;
      &lt;MyApp /&gt;
    &lt;/QueryClientProvider&gt;
  );
}

// Fetch data
function UserList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json() as Promise&lt;User[]&gt;;
    },
  });

  if (isLoading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;ul&gt;
      {users?.map(user => &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
}

// Mutation
function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newUser: CreateUserInput) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // Refetch
    },
  });

  return (
    &lt;button
      onClick={() => mutation.mutate({ name: 'New User', email: 'new@test.com' })}
      disabled={mutation.isPending}
    &gt;
      {mutation.isPending ? 'Creating...' : 'Create User'}
    &lt;/button&gt;
  );
}
</code></pre>

<h2 id="4-so-sanh"><strong>4. Compare State Management</strong></h2>

<table>
<thead><tr><th>Library</th><th>Type</th><th>Bundle</th><th>Learning</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Context</td><td>Built-in</td><td>0KB</td><td>Easy</td><td>Theme, auth, simple global state</td></tr>
<tr><td>Zustand</td><td>Client state</td><td>~1KB</td><td>Easy</td><td>Global client state, any size</td></tr>
<tr><td>Redux Toolkit</td><td>Client state</td><td>~11KB</td><td>Medium</td><td>Large apps, complex state</td></tr>
<tr><td>Jotai</td><td>Atomic</td><td>~2KB</td><td>Easy</td><td>Atomic state, derived values</td></tr>
<tr><td>TanStackQuery</td><td>Server state</td><td>~12KB</td><td>Medium</td><td>API data, caching, sync</td></tr>
</tbody>
</table>

<p><strong>Strategy</strong>: Use Zustand for client state + TanStack Query for server state. Context is only for simple theme/auth.</p>

<p>Next article: <strong>React Patterns & Performance</strong> — HOC, compound components, React.memo, and performance optimization.</p>
