---
id: 019d8b40-d104-7001-b005-reactnx000104
title: 'Bài 4: Event Handling, Forms & Conditional Rendering'
slug: bai-4-event-handling-forms-va-conditional-rendering
description: >-
  Event handling, synthetic events. Controlled/uncontrolled components,
  form libraries (React Hook Form, Zod validation). Lists, keys,
  conditional rendering patterns.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: React Fundamentals"
course:
  id: 019d8b40-d100-7001-b005-reactnx000001
  title: 'React & Next.js: Từ Cơ bản đến Nâng cao'
  slug: react-nextjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6029" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6029)"/>

  <!-- Decorations -->
  <g>
    <circle cx="810" cy="140" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="730" cy="40" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 949.6891108675446,162.5 980,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: Event Handling, Forms &amp; Conditional</tspan>
      <tspan x="60" dy="42">Rendering</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">React &amp; Next.js: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: React Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-event-handling"><strong>1. Event Handling</strong></h2>

<pre><code class="language-tsx">function EventDemo() {
  // Inline handler
  return &lt;button onClick={() =&gt; console.log('clicked')}&gt;Click&lt;/button&gt;;

  // Named handler (khuyến khích)
  const handleClick = (e: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; {
    e.preventDefault();
    console.log('clicked', e.currentTarget);
  };

  // Handler with parameters
  const handleDelete = (id: number) =&gt; () =&gt; {
    console.log('delete', id);
  };

  return (
    &lt;div&gt;
      &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;
      &lt;button onClick={handleDelete(1)}&gt;Delete #1&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="2-controlled-forms"><strong>2. Controlled Forms</strong></h2>

<pre><code class="language-tsx">function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState&lt;Record&lt;string, string&gt;&gt;({});

  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    const { name, value } = e.target;
    setForm(prev =&gt; ({ ...prev, [name]: value }));
  };

  const validate = () =&gt; {
    const newErrors: Record&lt;string, string&gt; = {};
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password.length &lt; 8) newErrors.password = 'Min 8 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) =&gt; {
    e.preventDefault();
    if (validate()) {
      console.log('Submit:', form);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;input name="email" value={form.email} onChange={handleChange} /&gt;
        {errors.email &amp;&amp; &lt;span className="error"&gt;{errors.email}&lt;/span&gt;}
      &lt;/div&gt;
      &lt;div&gt;
        &lt;input name="password" type="password" value={form.password} onChange={handleChange} /&gt;
        {errors.password &amp;&amp; &lt;span className="error"&gt;{errors.password}&lt;/span&gt;}
      &lt;/div&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="3-react-hook-form-zod"><strong>3. React Hook Form + Zod</strong></h2>

<pre><code class="language-bash">npm install react-hook-form @hookform/resolvers zod
</code></pre>

<pre><code class="language-tsx">import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema definition
const registerSchema = z.object({
  name: z.string().min(2, 'Tên ít nhất 2 ký tự').max(50),
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(8, 'Mật khẩu ít nhất 8 ký tự'),
  confirmPassword: z.string(),
  role: z.enum(['user', 'admin']),
  agreeTerms: z.literal(true, {
    errorMap: () =&gt; ({ message: 'Bạn phải đồng ý điều khoản' }),
  }),
}).refine(data =&gt; data.password === data.confirmPassword, {
  message: 'Mật khẩu không khớp',
  path: ['confirmPassword'],
});

type RegisterForm = z.infer&lt;typeof registerSchema&gt;;

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm&lt;RegisterForm&gt;({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'user',
    },
  });

  const onSubmit = async (data: RegisterForm) =&gt; {
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.ok) reset();
  };

  return (
    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;div&gt;
        &lt;label&gt;Name&lt;/label&gt;
        &lt;input {...register('name')} /&gt;
        {errors.name &amp;&amp; &lt;p className="error"&gt;{errors.name.message}&lt;/p&gt;}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;Email&lt;/label&gt;
        &lt;input {...register('email')} type="email" /&gt;
        {errors.email &amp;&amp; &lt;p className="error"&gt;{errors.email.message}&lt;/p&gt;}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;Password&lt;/label&gt;
        &lt;input {...register('password')} type="password" /&gt;
        {errors.password &amp;&amp; &lt;p className="error"&gt;{errors.password.message}&lt;/p&gt;}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;Confirm Password&lt;/label&gt;
        &lt;input {...register('confirmPassword')} type="password" /&gt;
        {errors.confirmPassword &amp;&amp; &lt;p className="error"&gt;{errors.confirmPassword.message}&lt;/p&gt;}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;select {...register('role')}&gt;
          &lt;option value="user"&gt;User&lt;/option&gt;
          &lt;option value="admin"&gt;Admin&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;label&gt;
          &lt;input {...register('agreeTerms')} type="checkbox" /&gt;
          Đồng ý điều khoản sử dụng
        &lt;/label&gt;
        {errors.agreeTerms &amp;&amp; &lt;p className="error"&gt;{errors.agreeTerms.message}&lt;/p&gt;}
      &lt;/div&gt;

      &lt;button type="submit" disabled={isSubmitting}&gt;
        {isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="4-conditional-rendering"><strong>4. Conditional Rendering Patterns</strong></h2>

<pre><code class="language-tsx">function Dashboard({ user, notifications, isLoading, error }: Props) {
  // Pattern 1: Early return
  if (isLoading) return &lt;Skeleton /&gt;;
  if (error) return &lt;ErrorMessage error={error} /&gt;;
  if (!user) return &lt;LoginPrompt /&gt;;

  // Pattern 2: Logical AND (&amp;&amp;)
  // ⚠️ Cẩn thận với falsy values (0, '')
  return (
    &lt;div&gt;
      {notifications.length &gt; 0 &amp;&amp; (
        &lt;Badge count={notifications.length} /&gt;
      )}

      {/* Pattern 3: Ternary */}
      {user.role === 'admin' ? &lt;AdminPanel /&gt; : &lt;UserPanel /&gt;}

      {/* Pattern 4: Object mapping */}
      {{
        active: &lt;ActiveStatus /&gt;,
        pending: &lt;PendingStatus /&gt;,
        inactive: &lt;InactiveStatus /&gt;,
      }[user.status]}
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="5-lists-keys"><strong>5. Lists & Keys</strong></h2>

<pre><code class="language-tsx">interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    &lt;ul&gt;
      {todos.map(todo =&gt; (
        // ✅ Key phải unique, stable, từ data
        &lt;li key={todo.id}&gt;
          &lt;span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}&gt;
            {todo.title}
          &lt;/span&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// ❌ KHÔNG dùng index làm key khi list thay đổi (add/remove/reorder)
// ❌ &lt;li key={index}&gt; → lỗi khi sort/filter
// ✅ &lt;li key={item.id}&gt; → unique identifier từ data
</code></pre>

<p>Bài tiếp theo: <strong>Context API & State Management</strong> — Zustand, TanStack Query, và state management strategies.</p>
