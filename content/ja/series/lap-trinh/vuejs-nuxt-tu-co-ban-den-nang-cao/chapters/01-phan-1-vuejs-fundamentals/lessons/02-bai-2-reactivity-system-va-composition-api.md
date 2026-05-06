---
id: 019d8b40-h102-7001-b009-vuenuxt000102
title: 'レッスン 2: 反応性システムと組成 API'
slug: bai-2-reactivity-system-va-composition-api
description: >-
  ref()、reactive()、computed()、watch()、watchEffect()。構成 API とオプション
  API。反応性の基礎、プロキシベースの反応性。 TypeScript の統合、defineProps、defineEmits。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: Vue.js の基礎'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3732" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3732)"/>

  <!-- Decorations -->
  <g>
    <circle cx="882" cy="96" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="664" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="946" cy="140" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="728" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="184" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="136" x2="1100" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="166" x2="1050" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.8467875173176,120.5 962.8467875173176,151.5 936,167 909.1532124826824,151.5 909.1532124826824,120.50000000000001 936,105" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: 反応性システムと組成 API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Vue.js の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ref"><strong>1. ref() — リアクティブプリミティブ</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const count = ref(0)          // Ref&lt;number&gt;
const name = ref('Vue')       // Ref&lt;string&gt;
const isVisible = ref(true)   // Ref&lt;boolean&gt;
const user = ref&lt;User | null&gt;(null) // Ref&lt;User | null&gt;

// Truy cập qua .value trong script
console.log(count.value) // 0
count.value++

// Trong template — auto unwrap (không cần .value)
&lt;/script&gt;

&lt;template&gt;
  &lt;p&gt;{{ count }}&lt;/p&gt;
  &lt;p&gt;{{ name }}&lt;/p&gt;
&lt;/template&gt;
</code></pre>

<h2 id="2-reactive"><strong>2. reactive() — リアクティブオブジェクト</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { reactive } from 'vue'

interface FormState {
  name: string
  email: string
  age: number
}

const form = reactive&lt;FormState&gt;({
  name: '',
  email: '',
  age: 0,
})

// Truy cập trực tiếp (không cần .value)
form.name = 'Duy'
form.age = 25

// ⚠️ Không reassign — sẽ mất reactivity
// form = { name: 'New', email: '', age: 0 } // ❌
&lt;/script&gt;
</code></pre>

<h2 id="3-computed"><strong>3. computed() — 派生状態</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue'

const firstName = ref('Duy')
const lastName = ref('Tran')

// Read-only computed
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// Writable computed
const fullNameWritable = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (value: string) => {
    const [first, ...rest] = value.split(' ')
    firstName.value = first
    lastName.value = rest.join(' ')
  },
})

// Computed với TypeScript
const items = ref&lt;{ price: number; qty: number }[]&gt;([])
const total = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.qty, 0)
)
&lt;/script&gt;
</code></pre>

<h2 id="4-watch"><strong>4. watch() と watchEffect()</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { ref, watch, watchEffect } from 'vue'

const searchQuery = ref('')
const page = ref(1)

// Watch single ref
watch(searchQuery, (newVal, oldVal) => {
  console.log(`Search: ${oldVal} → ${newVal}`)
  page.value = 1 // Reset page khi search thay đổi
})

// Watch multiple sources
watch([searchQuery, page], ([newQuery, newPage], [oldQuery, oldPage]) => {
  fetchResults(newQuery, newPage)
})

// Watch with options
watch(
  () => form.name,
  (newName) => { validateName(newName) },
  { immediate: true, deep: false }
)

// watchEffect — auto-track dependencies
watchEffect(() => {
  // Tự động track searchQuery.value và page.value
  console.log(`Fetching: ${searchQuery.value}, page ${page.value}`)
})

// Cleanup
watchEffect((onCleanup) => {
  const controller = new AbortController()
  fetch(`/api/search?q=${searchQuery.value}`, { signal: controller.signal })
  onCleanup(() => controller.abort())
})
&lt;/script&gt;
</code></pre>

<h2 id="5-composition-vs-options"><strong>5. 構成 API とオプション API</strong></h2>

<pre><code class="language-vue">&lt;!-- ❌ Options API (legacy) --&gt;
&lt;script lang="ts"&gt;
export default {
  data() {
    return { count: 0 }
  },
  computed: {
    doubled() { return this.count * 2 }
  },
  methods: {
    increment() { this.count++ }
  },
}
&lt;/script&gt;

&lt;!-- ✅ Composition API (recommended) --&gt;
&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
function increment() { count.value++ }
&lt;/script&gt;
</code></pre>

<h2 id="6-typescript"><strong>6. TypeScript の統合</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
// Props với TypeScript
const props = defineProps&lt;{
  title: string
  count?: number
  items: string[]
}&gt;()

// Props với defaults
const props = withDefaults(defineProps&lt;{
  title: string
  count?: number
}&gt;(), {
  count: 0,
})

// Emits với TypeScript
const emit = defineEmits&lt;{
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}&gt;()

emit('update', 'new value')
emit('delete', 123)
&lt;/script&gt;
</code></pre>

<p>次の記事: <strong>コンポーネント、プロップ、イベント</strong> — スロット、提供/注入、ライフサイクル フック。</p>
