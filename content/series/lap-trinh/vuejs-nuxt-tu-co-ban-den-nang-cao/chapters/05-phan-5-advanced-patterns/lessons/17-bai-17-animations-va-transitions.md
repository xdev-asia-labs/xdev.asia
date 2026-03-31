---
id: 019d8b40-h501-7001-b009-vuenuxt000501
title: 'Bài 17: Animations & Transitions'
slug: bai-17-animations-va-transitions
description: >-
  Vue Transition, TransitionGroup. Page transitions, layout transitions.
  GSAP, Motion One integration. View Transitions API. Scroll-driven
  animations.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Advanced Patterns"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-transition"><strong>1. Vue Transition</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
const isVisible = ref(true)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="isVisible = !isVisible"&gt;Toggle&lt;/button&gt;

  &lt;Transition name="fade"&gt;
    &lt;div v-if="isVisible" class="box"&gt;Fade content&lt;/div&gt;
  &lt;/Transition&gt;

  &lt;Transition name="slide" mode="out-in"&gt;
    &lt;div :key="currentTab"&gt;{{ currentTab }}&lt;/div&gt;
  &lt;/Transition&gt;
&lt;/template&gt;

&lt;style&gt;
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
&lt;/style&gt;
</code></pre>

<h2 id="2-transition-group"><strong>2. TransitionGroup</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
const items = ref([1, 2, 3, 4, 5])

function addItem() {
  const num = Math.max(...items.value) + 1
  items.value.splice(Math.floor(Math.random() * items.value.length), 0, num)
}

function removeItem(item: number) {
  items.value = items.value.filter(i => i !== item)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="addItem"&gt;Add&lt;/button&gt;
  &lt;TransitionGroup name="list" tag="ul"&gt;
    &lt;li v-for="item in items" :key="item" @click="removeItem(item)"&gt;
      {{ item }}
    &lt;/li&gt;
  &lt;/TransitionGroup&gt;
&lt;/template&gt;

&lt;style&gt;
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.5s ease;
}
.list-leave-active {
  position: absolute;
}
&lt;/style&gt;
</code></pre>

<h2 id="3-page-transitions"><strong>3. Page Transitions (Nuxt)</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
})
</code></pre>

<pre><code class="language-css">/* assets/css/transitions.css */
.page-enter-active, .page-leave-active {
  transition: all 0.3s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active, .layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from, .layout-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</code></pre>

<pre><code class="language-vue">&lt;!-- Per-page custom transition --&gt;
&lt;script setup lang="ts"&gt;
definePageMeta({
  pageTransition: {
    name: 'rotate',
    mode: 'out-in',
  },
})
&lt;/script&gt;
</code></pre>

<h2 id="4-gsap"><strong>4. GSAP Integration</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import gsap from 'gsap'

const boxRef = ref&lt;HTMLElement | null&gt;(null)

onMounted(() => {
  if (boxRef.value) {
    gsap.from(boxRef.value, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out',
    })
  }
})

// Stagger animation
function animateList() {
  gsap.from('.list-item', {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
  })
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div ref="boxRef" class="box"&gt;Animated box&lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-view-transitions"><strong>5. View Transitions API</strong></h2>

<pre><code class="language-ts">// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    viewTransition: true, // Enable View Transitions API
  },
})
</code></pre>

<pre><code class="language-vue">&lt;template&gt;
  &lt;!-- Assign transition name --&gt;
  &lt;img
    :src="post.image"
    :style="{ viewTransitionName: `post-image-${post.id}` }"
  /&gt;
  &lt;h1 :style="{ viewTransitionName: `post-title-${post.id}` }"&gt;
    {{ post.title }}
  &lt;/h1&gt;
&lt;/template&gt;
</code></pre>

<p>Bài tiếp theo: <strong>Advanced Patterns & Custom Module</strong> — renderless, render functions, custom modules.</p>
