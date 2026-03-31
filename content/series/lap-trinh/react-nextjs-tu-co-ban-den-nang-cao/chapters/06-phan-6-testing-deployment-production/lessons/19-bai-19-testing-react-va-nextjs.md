---
id: 019d8b40-d601-7001-b005-reactnx000601
title: 'Bài 19: Testing React & Next.js'
slug: bai-19-testing-react-va-nextjs
description: >-
  Jest & React Testing Library setup. Unit testing components,
  hooks, utils. Integration testing. Playwright E2E testing.
  MSW mocking, snapshot testing.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Performance Optimization</strong> — Core Web Vitals, lazy loading, bundle analysis.</p>
