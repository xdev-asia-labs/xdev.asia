---
id: 019d8b40-d203-7001-b005-reactnx000203
title: 'Bài 7: Styling & UI Components'
slug: bai-7-styling-va-ui-components
description: >-
  Tailwind CSS integration, CSS Modules. Component libraries (shadcn/ui,
  Radix UI). Animation với Framer Motion. Responsive design,
  theming (dark mode).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: React Advanced & State Management"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<h2 id="1-tailwind-css"><strong>1. Tailwind CSS</strong></h2>

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

<h2 id="2-shadcn-ui"><strong>2. shadcn/ui</strong></h2>

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

<h2 id="3-framer-motion"><strong>3. Framer Motion</strong></h2>

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

<h2 id="4-dark-mode"><strong>4. Dark Mode</strong></h2>

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

<p>Bài tiếp theo: <strong>Next.js & App Router</strong> — file-based routing, layouts, templates, và project structure.</p>
