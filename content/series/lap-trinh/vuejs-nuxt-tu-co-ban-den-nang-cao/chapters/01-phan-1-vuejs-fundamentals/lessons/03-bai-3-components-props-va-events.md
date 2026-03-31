---
id: 019d8b40-h103-7001-b009-vuenuxt000103
title: 'Bài 3: Components, Props & Events'
slug: bai-3-components-props-va-events
description: >-
  Component registration, props validation. v-model, custom events,
  emit. Slots (default, named, scoped). Provide/inject, component
  lifecycle hooks.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Vue.js Fundamentals"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-component"><strong>1. Component Registration</strong></h2>

<pre><code class="language-vue">&lt;!-- UserCard.vue --&gt;
&lt;script setup lang="ts"&gt;
interface Props {
  name: string
  email: string
  avatar?: string
  role?: 'admin' | 'user' | 'editor'
}

const props = withDefaults(defineProps&lt;Props&gt;(), {
  role: 'user',
})
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="user-card"&gt;
    &lt;img :src="props.avatar || '/default-avatar.png'" :alt="props.name" /&gt;
    &lt;h3&gt;{{ props.name }}&lt;/h3&gt;
    &lt;p&gt;{{ props.email }}&lt;/p&gt;
    &lt;span class="badge"&gt;{{ props.role }}&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<pre><code class="language-vue">&lt;!-- Parent.vue — sử dụng component --&gt;
&lt;script setup lang="ts"&gt;
import UserCard from './UserCard.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;UserCard name="Duy Tran" email="duy@xdev.asia" role="admin" /&gt;
&lt;/template&gt;
</code></pre>

<h2 id="2-v-model"><strong>2. v-model & Custom Events</strong></h2>

<pre><code class="language-vue">&lt;!-- SearchInput.vue --&gt;
&lt;script setup lang="ts"&gt;
const model = defineModel&lt;string&gt;()
// Vue 3.4+ — defineModel replaces props + emit pattern

const emit = defineEmits&lt;{
  (e: 'search', query: string): void
}&gt;()

function handleSearch() {
  if (model.value) {
    emit('search', model.value)
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="search"&gt;
    &lt;input v-model="model" placeholder="Tìm kiếm..." @keydown.enter="handleSearch" /&gt;
    &lt;button @click="handleSearch"&gt;🔍&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Parent --&gt;
&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
const query = ref('')
&lt;/script&gt;

&lt;template&gt;
  &lt;SearchInput v-model="query" @search="handleSearch" /&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-slots"><strong>3. Slots</strong></h2>

<pre><code class="language-vue">&lt;!-- Card.vue --&gt;
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;!-- Named slots --&gt;
    &lt;div class="card-header"&gt;
      &lt;slot name="header"&gt;Default Header&lt;/slot&gt;
    &lt;/div&gt;

    &lt;div class="card-body"&gt;
      &lt;slot&gt;Default content&lt;/slot&gt;
    &lt;/div&gt;

    &lt;div class="card-footer"&gt;
      &lt;slot name="footer" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Usage --&gt;
&lt;Card&gt;
  &lt;template #header&gt;
    &lt;h2&gt;Tiêu đề&lt;/h2&gt;
  &lt;/template&gt;

  &lt;p&gt;Nội dung chính&lt;/p&gt;

  &lt;template #footer&gt;
    &lt;button&gt;Submit&lt;/button&gt;
  &lt;/template&gt;
&lt;/Card&gt;
</code></pre>

<h2 id="4-scoped-slots"><strong>4. Scoped Slots</strong></h2>

<pre><code class="language-vue">&lt;!-- DataTable.vue --&gt;
&lt;script setup lang="ts" generic="T"&gt;
defineProps&lt;{
  items: T[]
  columns: { key: keyof T; label: string }[]
}&gt;()
&lt;/script&gt;

&lt;template&gt;
  &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th v-for="col in columns" :key="String(col.key)"&gt;{{ col.label }}&lt;/th&gt;
        &lt;th&gt;Actions&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr v-for="(item, index) in items" :key="index"&gt;
        &lt;td v-for="col in columns" :key="String(col.key)"&gt;
          &lt;slot :name="String(col.key)" :value="item[col.key]" :item="item"&gt;
            {{ item[col.key] }}
          &lt;/slot&gt;
        &lt;/td&gt;
        &lt;td&gt;
          &lt;slot name="actions" :item="item" /&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-provide-inject"><strong>5. Provide / Inject</strong></h2>

<pre><code class="language-vue">&lt;!-- Parent — provide --&gt;
&lt;script setup lang="ts"&gt;
import { provide, ref } from 'vue'

const theme = ref&lt;'light' | 'dark'&gt;('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

provide('theme', { theme, toggleTheme })
&lt;/script&gt;

&lt;!-- Deep child — inject --&gt;
&lt;script setup lang="ts"&gt;
import { inject } from 'vue'

const { theme, toggleTheme } = inject('theme')!
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="toggleTheme"&gt;
    Current: {{ theme }}
  &lt;/button&gt;
&lt;/template&gt;
</code></pre>

<h2 id="6-lifecycle"><strong>6. Lifecycle Hooks</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Component mounted — DOM ready')
  window.addEventListener('resize', handleResize)
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted — cleanup')
  window.removeEventListener('resize', handleResize)
})
&lt;/script&gt;
</code></pre>

<p>Bài tiếp theo: <strong>Directives, Rendering & Template Refs</strong> — custom directives, render functions, Teleport.</p>
