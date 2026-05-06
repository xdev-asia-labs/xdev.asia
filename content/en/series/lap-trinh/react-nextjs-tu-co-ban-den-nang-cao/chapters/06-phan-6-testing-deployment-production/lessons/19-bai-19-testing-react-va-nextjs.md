---
id: 019d8b40-d601-7001-b005-reactnx000601
title: 'Lesson 19: Testing React & Next.js'
slug: bai-19-testing-react-va-nextjs
description: >-
  Jest & React Testing Library setup. Unit testing components, hooks, utils.
  Integration testing. Playwright E2E testing. MSW mocking, snapshot testing.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 6: Testing, Deployment & Production'
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: From Basics to Advanced'
  slug: react-nextjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6975" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6975)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1075" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="160" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="975" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="225" x2="1100" y2="305" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="255" x2="1050" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.6410161513776,155 1009.6410161513776,195 975,215 940.3589838486224,195 940.3589838486224,155 975,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 19: Testing React & Next.js</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React & Next.js: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Testing, Deployment & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Setup Jest & React Testing Library</strong></h2>

<pre><code class="language-bash">npm install -D jest @jest/types ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
</code></pre>

<pre><code class="language-ts">// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  setupFilesAfterSetup: ['&lt;rootDir&gt;/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '&lt;rootDir&gt;/src/$1',
  },
};

export default createJestConfig(config);
</code></pre>

<pre><code class="language-ts">// jest.setup.ts
import '@testing-library/jest-dom';
</code></pre>

<h2 id="2-unit-test"><strong>2. Unit Testing Components</strong></h2>

<pre><code class="language-tsx">// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/Button';

describe('Button', () => {
  it('renders with text', () => {
    render(&lt;Button&gt;Click me&lt;/Button&gt;);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(&lt;Button onClick={onClick}&gt;Click&lt;/Button&gt;);
    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(&lt;Button loading&gt;Submit&lt;/Button&gt;);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
</code></pre>

<h2 id="3-hook-test"><strong>3. Testing Custom Hooks</strong></h2>

<pre><code class="language-tsx">import { renderHook, act } from '@testing-library/react';
import { useCounter } from '@/hooks/useCounter';

describe('useCounter', () => {
  it('increments counter', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);

    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it('resets to initial value', () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.count).toBe(5);
  });
});
</code></pre>

<h2 id="4-msw"><strong>4. MSW (Mock Service Worker)</strong></h2>

<pre><code class="language-ts">// mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json([
      { id: '1', title: 'Post 1' },
      { id: '2', title: 'Post 2' },
    ]);
  }),
  http.post('/api/posts', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ id: '3', ...body }, { status: 201 });
  }),
];
</code></pre>

<pre><code class="language-ts">// mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
</code></pre>

<h2 id="5-integration"><strong>5. Integration Testing</strong></h2>

<pre><code class="language-tsx">import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '@/mocks/server';
import { PostList } from '@/components/PostList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('PostList', () => {
  it('loads and displays posts', async () => {
    render(&lt;PostList /&gt;);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
      expect(screen.getByText('Post 2')).toBeInTheDocument();
    });
  });
});
</code></pre>

<h2 id="6-playwright"><strong>6. Playwright E2E Testing</strong></h2>

<pre><code class="language-ts">// e2e/blog.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('should display blog posts', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
    await expect(page.locator('article')).toHaveCount(10);
  });

  test('should navigate to post detail', async ({ page }) => {
    await page.goto('/blog');
    await page.getByText('First Post').click();
    await expect(page).toHaveURL(/\/blog\/.+/);
    await expect(page.getByRole('article')).toBeVisible();
  });

  test('should search posts', async ({ page }) => {
    await page.goto('/blog');
    await page.getByPlaceholder('Tìm kiếm').fill('React');
    await page.keyboard.press('Enter');
    await expect(page.locator('article')).toHaveCount(3);
  });
});
</code></pre>

<p>Next article: <strong>Performance Optimization</strong> — Core Web Vitals, lazy loading, bundle analysis.</p>
