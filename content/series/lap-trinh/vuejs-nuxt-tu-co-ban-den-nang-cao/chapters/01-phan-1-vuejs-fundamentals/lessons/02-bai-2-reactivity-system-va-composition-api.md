---
id: 019d8b40-h102-7001-b009-vuenuxt000102
title: 'Bài 2: Reactivity System & Composition API'
slug: bai-2-reactivity-system-va-composition-api
description: >-
  ref(), reactive(), computed(), watch(), watchEffect(). Composition API
  vs Options API. Reactivity fundamentals, Proxy-based reactivity.
  TypeScript integration, defineProps, defineEmits.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Vue.js Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-ref"><strong>1. ref() — Reactive Primitive</strong></h2>

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

<h2 id="2-reactive"><strong>2. reactive() — Reactive Object</strong></h2>

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

<h2 id="3-computed"><strong>3. computed() — Derived State</strong></h2>

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

<h2 id="4-watch"><strong>4. watch() & watchEffect()</strong></h2>

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

<h2 id="5-composition-vs-options"><strong>5. Composition API vs Options API</strong></h2>

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

<h2 id="6-typescript"><strong>6. TypeScript Integration</strong></h2>

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

<p>Bài tiếp theo: <strong>Components, Props & Events</strong> — slots, provide/inject, lifecycle hooks.</p>
