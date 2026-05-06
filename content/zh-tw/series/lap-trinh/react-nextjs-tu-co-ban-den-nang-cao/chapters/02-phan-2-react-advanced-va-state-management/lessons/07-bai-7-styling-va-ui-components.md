---
id: 019d8b40-d203-7001-b005-reactnx000203
title: 第 7 課：樣式和 UI 元件
slug: bai-7-styling-va-ui-components
description: >-
  Tailwind CSS 整合、CSS 模組。元件庫（shadcn/ui、Radix UI）。使用 Framer Motion
  製作動畫。響應式設計、主題（深色模式）。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：React 進階和狀態管理
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: React 和 Next.js：從基礎到高級
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-567" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-567)"/>

  <!-- Decorations -->
  <g>
    <circle cx="793" cy="189" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="986" cy="242" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="679" cy="35" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="872" cy="88" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="141" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="968.444863728671,122 968.444863728671,156 939,173 909.555136271329,156 909.555136271329,122.00000000000001 939,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：樣式和 UI 元件</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React 和 Next.js：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：React 進階和狀態管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-tailwind-css"><strong>1.順風CSS</strong></h2>

<pre><code class="language-bash">npm install -D tailwindcss @tailwindcss/vite
</code></pre>

<pre><code class="language-tsx">// Component với Tailwind
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    &lt;div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800"&gt;
      &lt;h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white"&gt;
        {title}
      &lt;/h2&gt;
      &lt;div className="text-gray-600 dark:text-gray-300"&gt;
        {children}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

// Conditional classes với clsx/cn
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    &lt;button
      className={cn(
        'rounded-md font-medium transition-colors',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
          'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    /&gt;
  );
}
</code></pre>

<h2 id="2-shadcn-ui"><strong>2.shadcn/ui</strong></h2>

<pre><code class="language-bash"># Initialize
npx shadcn@latest init

# Add components
npx shadcn@latest add button card input dialog
</code></pre>

<pre><code class="language-tsx">import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';

function UserCard({ user }: { user: User }) {
  return (
    &lt;Card&gt;
      &lt;CardHeader&gt;
        &lt;CardTitle&gt;{user.name}&lt;/CardTitle&gt;
      &lt;/CardHeader&gt;
      &lt;CardContent&gt;
        &lt;p&gt;{user.email}&lt;/p&gt;
        &lt;Dialog&gt;
          &lt;DialogTrigger asChild&gt;
            &lt;Button variant="outline"&gt;Edit&lt;/Button&gt;
          &lt;/DialogTrigger&gt;
          &lt;DialogContent&gt;
            &lt;DialogHeader&gt;
              &lt;DialogTitle&gt;Edit User&lt;/DialogTitle&gt;
            &lt;/DialogHeader&gt;
            &lt;Input defaultValue={user.name} /&gt;
          &lt;/DialogContent&gt;
        &lt;/Dialog&gt;
      &lt;/CardContent&gt;
    &lt;/Card&gt;
  );
}
</code></pre>

<h2 id="3-framer-motion"><strong>3.成幀器運動</strong></h2>

<pre><code class="language-bash">npm install motion
</code></pre>

<pre><code class="language-tsx">import { motion, AnimatePresence } from 'motion/react';

// Basic animation
function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    &lt;motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    &gt;
      {children}
    &lt;/motion.div&gt;
  );
}

// List animation
function AnimatedList({ items }: { items: Item[] }) {
  return (
    &lt;AnimatePresence&gt;
      {items.map(item =&gt; (
        &lt;motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        &gt;
          {item.name}
        &lt;/motion.div&gt;
      ))}
    &lt;/AnimatePresence&gt;
  );
}

// Page transition
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    &lt;motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'tween', duration: 0.2 }}
    &gt;
      {children}
    &lt;/motion.div&gt;
  );
}
</code></pre>

<h2 id="4-dark-mode"><strong>4. 深色模式</strong></h2>

<pre><code class="language-tsx">// useTheme hook
function useTheme() {
  const [theme, setTheme] = useState&lt;'light' | 'dark'&gt;(() =&gt; {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light' | 'dark')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() =&gt; {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =&gt; setTheme(prev =&gt; prev === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme };
}

// Toggle button
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    &lt;button onClick={toggleTheme}&gt;
      {theme === 'light' ? '🌙' : '☀️'}
    &lt;/button&gt;
  );
}
</code></pre>

<p>下一篇： <strong>Next.js 和應用程式路由器</strong> — 基於檔案的路由、佈局、範本和專案結構。</p>
