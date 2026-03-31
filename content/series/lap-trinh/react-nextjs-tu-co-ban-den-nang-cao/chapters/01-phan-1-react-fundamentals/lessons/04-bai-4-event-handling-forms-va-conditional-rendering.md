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
