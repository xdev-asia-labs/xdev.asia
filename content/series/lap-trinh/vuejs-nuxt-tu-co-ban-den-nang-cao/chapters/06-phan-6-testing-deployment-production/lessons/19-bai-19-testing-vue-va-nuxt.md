---
id: 019d8b40-h601-7001-b009-vuenuxt000601
title: 'Bài 19: Testing Vue & Nuxt'
slug: bai-19-testing-vue-va-nuxt
description: >-
  Vitest cho unit testing. Vue Test Utils, component testing.
  @nuxt/test-utils, Playwright E2E testing.
  MSW cho API mocking. Testing composables, Pinia stores.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Testing, Deployment & Production"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-vitest-setup"><strong>1. Thiết lập Vitest</strong></h2>

<pre><code class="language-bash">npx nuxi module add @nuxt/test-utils
npm i -D vitest @vue/test-utils happy-dom msw playwright-core
</code></pre>

<pre><code class="language-ts">// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['components/**', 'composables/**', 'stores/**'],
    },
  },
})
</code></pre>

<h2 id="2-component-testing"><strong>2. Component Testing với Vue Test Utils</strong></h2>

<pre><code class="language-ts">// tests/components/LoginForm.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import LoginForm from '~/components/LoginForm.vue'

describe('LoginForm', () => {
  it('renders form fields', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('validates required fields', async () => {
    const wrapper = mount(LoginForm)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Email là bắt buộc')
  })

  it('emits login event with credentials', async () => {
    const wrapper = mount(LoginForm)
    await wrapper.find('input[type="email"]').setValue('test@example.com')
    await wrapper.find('input[type="password"]').setValue('password123')
    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('login')?.[0]).toEqual([{
      email: 'test@example.com',
      password: 'password123',
    }])
  })
})
</code></pre>

<h2 id="3-composable-testing"><strong>3. Testing Composables</strong></h2>

<pre><code class="language-ts">// tests/composables/useCounter.test.ts
import { describe, it, expect } from 'vitest'
import { useCounter } from '~/composables/useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('increments and decrements', () => {
    const { count, increment, decrement } = useCounter(10)
    increment()
    expect(count.value).toBe(11)
    decrement()
    expect(count.value).toBe(10)
  })
})
</code></pre>

<h2 id="4-pinia-testing"><strong>4. Testing Pinia Store</strong></h2>

<pre><code class="language-ts">// tests/stores/cart.test.ts
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from '~/stores/cart'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds item to cart', () => {
    const store = useCartStore()
    store.addItem({ id: '1', name: 'Laptop', price: 999, quantity: 1 })
    expect(store.items).toHaveLength(1)
    expect(store.total).toBe(999)
  })

  it('increases quantity if item exists', () => {
    const store = useCartStore()
    store.addItem({ id: '1', name: 'Laptop', price: 999, quantity: 1 })
    store.addItem({ id: '1', name: 'Laptop', price: 999, quantity: 1 })
    expect(store.items).toHaveLength(1)
    expect(store.items[0].quantity).toBe(2)
    expect(store.total).toBe(1998)
  })
})
</code></pre>

<h2 id="5-msw"><strong>5. API Mocking với MSW</strong></h2>

<pre><code class="language-ts">// tests/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'Nguyen Van A' },
      { id: 2, name: 'Tran Thi B' },
    ])
  }),
  http.post('/api/login', async ({ request }) => {
    const body = await request.json() as { email: string }
    if (body.email === 'admin@test.com') {
      return HttpResponse.json({ token: 'fake-jwt' })
    }
    return HttpResponse.json({ error: 'Invalid' }, { status: 401 })
  }),
]

// tests/setup.ts
import { setupServer } from 'msw/node'
import { handlers } from './mocks/handlers'

export const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
</code></pre>

<h2 id="6-nuxt-test-utils"><strong>6. @nuxt/test-utils</strong></h2>

<pre><code class="language-ts">// tests/app.test.ts
import { describe, it, expect } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils/e2e'

describe('App', async () => {
  await setup({ browser: true })

  it('renders homepage', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Trang chủ')
  })

  it('navigates to about page', async () => {
    const page = await createPage('/')
    await page.click('a[href="/about"]')
    await page.waitForURL('/about')
    expect(await page.textContent('h1')).toBe('Giới thiệu')
  })
})
</code></pre>

<h2 id="7-e2e"><strong>7. E2E Testing với Playwright</strong></h2>

<pre><code class="language-ts">// e2e/login.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Login Flow', () => {
  test('successful login redirects to dashboard', async ({ page }) => {
    await page.goto('/login')
    await page.fill('[data-testid="email"]', 'admin@test.com')
    await page.fill('[data-testid="password"]', 'secret')
    await page.click('[data-testid="submit"]')
    await expect(page).toHaveURL('/dashboard')
    await expect(page.locator('h1')).toContainText('Dashboard')
  })

  test('invalid credentials show error', async ({ page }) => {
    await page.goto('/login')
    await page.fill('[data-testid="email"]', 'wrong@test.com')
    await page.fill('[data-testid="password"]', 'wrong')
    await page.click('[data-testid="submit"]')
    await expect(page.locator('.error')).toContainText('Sai thông tin')
  })
})
</code></pre>

<p>Bài tiếp theo: <strong>Performance Optimization</strong> — Bundle analysis, code splitting, caching.</p>
