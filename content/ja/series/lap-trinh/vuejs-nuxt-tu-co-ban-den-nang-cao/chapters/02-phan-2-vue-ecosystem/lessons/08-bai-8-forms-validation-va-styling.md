---
id: 019d8b40-h204-7001-b009-vuenuxt000204
title: 'レッスン 8: フォーム、検証、スタイル設定'
slug: bai-8-forms-validation-va-styling
description: >-
  フォーム処理、v-model 修飾子。 VeeValidate、Zod スキーマ検証。 Tailwind CSS、UnoCSS。コンポーネント ライブラリ
  (PrimeVue、Vuetify、Naive UI)。 CSS スコープの CSS モジュール。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: Vue エコシステム'
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js と Nuxt: 基本から高度まで'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1151" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1151)"/>

  <!-- Decorations -->
  <g>
    <circle cx="782" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="964" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="646" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="828" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="244" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="236" x2="1100" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="266" x2="1050" y2="336" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1012.8467875173176,170.5 1012.8467875173176,201.5 986,217 959.1532124826824,201.5 959.1532124826824,170.5 986,155" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: フォーム、検証、スタイル設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vue.js と Nuxt: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: Vue エコシステム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-forms"><strong>1. フォームの処理</strong></h2>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  role: 'user',
  notifications: true,
  tags: [] as string[],
})

function handleSubmit() {
  console.log(form)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit.prevent="handleSubmit"&gt;
    &lt;input v-model.trim="form.name" placeholder="Tên" /&gt;
    &lt;input v-model.lazy="form.email" type="email" placeholder="Email" /&gt;

    &lt;select v-model="form.role"&gt;
      &lt;option value="user"&gt;User&lt;/option&gt;
      &lt;option value="admin"&gt;Admin&lt;/option&gt;
    &lt;/select&gt;

    &lt;label&gt;
      &lt;input type="checkbox" v-model="form.notifications" /&gt;
      Nhận thông báo
    &lt;/label&gt;

    &lt;div&gt;
      &lt;label v-for="tag in ['vue', 'nuxt', 'ts']" :key="tag"&gt;
        &lt;input type="checkbox" v-model="form.tags" :value="tag" /&gt;
        {{ tag }}
      &lt;/label&gt;
    &lt;/div&gt;

    &lt;button type="submit"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;
</code></pre>

<h2 id="2-vee-validate"><strong>2. VeeValidate + Zod</strong></h2>

<pre><code class="language-bash">npm install vee-validate @vee-validate/zod zod
</code></pre>

<pre><code class="language-vue">&lt;script setup lang="ts"&gt;
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const schema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Tên ít nhất 2 ký tự'),
    email: z.string().email('Email không hợp lệ'),
    password: z
      .string()
      .min(8, 'Mật khẩu ít nhất 8 ký tự')
      .regex(/[A-Z]/, 'Cần ít nhất 1 chữ hoa'),
  })
)

const { defineField, handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values) => {
  await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(values),
  })
})
&lt;/script&gt;

&lt;template&gt;
  &lt;form @submit="onSubmit"&gt;
    &lt;div&gt;
      &lt;input v-model="name" v-bind="nameAttrs" placeholder="Tên" /&gt;
      &lt;span v-if="errors.name" class="error"&gt;{{ errors.name }}&lt;/span&gt;
    &lt;/div&gt;

    &lt;div&gt;
      &lt;input v-model="email" v-bind="emailAttrs" type="email" placeholder="Email" /&gt;
      &lt;span v-if="errors.email" class="error"&gt;{{ errors.email }}&lt;/span&gt;
    &lt;/div&gt;

    &lt;div&gt;
      &lt;input v-model="password" v-bind="passwordAttrs" type="password" placeholder="Mật khẩu" /&gt;
      &lt;span v-if="errors.password" class="error"&gt;{{ errors.password }}&lt;/span&gt;
    &lt;/div&gt;

    &lt;button type="submit" :disabled="isSubmitting"&gt;Đăng ký&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;
</code></pre>

<h2 id="3-tailwind"><strong>3. 追い風 CSS</strong></h2>

<pre><code class="language-vue">&lt;template&gt;
  &lt;div class="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"&gt;
    &lt;h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"&gt;
      {{ title }}
    &lt;/h2&gt;
    &lt;p class="text-gray-600 dark:text-gray-300 leading-relaxed"&gt;
      {{ description }}
    &lt;/p&gt;
    &lt;button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md 
                   hover:bg-blue-700 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500"&gt;
      Xem thêm
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>

<h2 id="4-scoped-css"><strong>4. CSS スコープとモジュール</strong></h2>

<pre><code class="language-vue">&lt;!-- Scoped CSS --&gt;
&lt;style scoped&gt;
.card { padding: 1rem; }
.card :deep(.child-class) { color: red; } /* Affect child components */
.card :slotted(p) { margin: 0; } /* Affect slot content */
:global(.app-title) { font-size: 2rem; } /* Global style */
&lt;/style&gt;

&lt;!-- CSS Modules --&gt;
&lt;style module&gt;
.red { color: red; }
.bold { font-weight: bold; }
&lt;/style&gt;

&lt;template&gt;
  &lt;p :class="$style.red"&gt;Red text&lt;/p&gt;
  &lt;p :class="[$style.red, $style.bold]"&gt;Red bold&lt;/p&gt;
&lt;/template&gt;
</code></pre>

<h2 id="5-component-libraries"><strong>5. コンポーネントライブラリ</strong></h2>

<table>
<thead><tr><th>図書館</th><th>スタイル</th><th>コンポーネント</th><th>バンドル</th></tr></thead>
<tbody>
<tr><td>プライムビュー</td><td>スタイルなし/テーマあり</td><td>90+</td><td>ツリーシェイク可能</td></tr>
<tr><td>ヴエティファイ</td><td>マテリアルデザイン</td><td>80+</td><td>大</td></tr>
<tr><td>素朴なUI</td><td>カスタムテーマ</td><td>90+</td><td>ツリーシェイク可能</td></tr>
<tr><td>Radix Vue</td><td>ヘッドレス</td><td>40歳以上</td><td>最小限</td></tr>
<tr><td>shadcn-vue</td><td>追い風</td><td>40歳以上</td><td>コピー＆ペースト</td></tr>
</tbody>
</table>

<p>次の記事: <strong>Nuxt 3 とファイルベースのルーティング</strong> — Nuxt 3 フレームワークを始めましょう。</p>
