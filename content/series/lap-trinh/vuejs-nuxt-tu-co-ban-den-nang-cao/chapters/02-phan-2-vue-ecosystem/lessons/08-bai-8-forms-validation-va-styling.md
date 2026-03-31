---
id: 019d8b40-h204-7001-b009-vuenuxt000204
title: 'Bài 8: Forms, Validation & Styling'
slug: bai-8-forms-validation-va-styling
description: >-
  Form handling, v-model modifiers. VeeValidate, Zod schema validation.
  Tailwind CSS, UnoCSS. Component libraries (PrimeVue, Vuetify,
  Naive UI). CSS Scoped, CSS Modules.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Vue Ecosystem"
course:
  id: 019d8b40-h100-7001-b009-vuenuxt000001
  title: 'Vue.js & Nuxt: Từ Cơ bản đến Nâng cao'
  slug: vuejs-nuxt-tu-co-ban-den-nang-cao
---

<h2 id="1-forms"><strong>1. Form Handling</strong></h2>

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

<h2 id="3-tailwind"><strong>3. Tailwind CSS</strong></h2>

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

<h2 id="4-scoped-css"><strong>4. CSS Scoped & Modules</strong></h2>

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

<h2 id="5-component-libraries"><strong>5. Component Libraries</strong></h2>

<table>
<thead><tr><th>Library</th><th>Style</th><th>Components</th><th>Bundle</th></tr></thead>
<tbody>
<tr><td>PrimeVue</td><td>Unstyled / themed</td><td>90+</td><td>Tree-shakeable</td></tr>
<tr><td>Vuetify</td><td>Material Design</td><td>80+</td><td>Large</td></tr>
<tr><td>Naive UI</td><td>Custom theme</td><td>90+</td><td>Tree-shakeable</td></tr>
<tr><td>Radix Vue</td><td>Headless</td><td>40+</td><td>Minimal</td></tr>
<tr><td>shadcn-vue</td><td>Tailwind</td><td>40+</td><td>Copy-paste</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Nuxt 3 & File-based Routing</strong> — bắt đầu với Nuxt 3 framework.</p>
