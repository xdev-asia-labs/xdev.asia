---
id: 019f1c30-a502-7001-c001-v1b3c0d10502
title: 'Bài 15: Vibe Coding Full-Stack App — Phần 2: Frontend'
slug: bai-15-vibe-coding-full-stack-app-phan-2-frontend
description: >-
  Xây dựng frontend với React + Next.js + TailwindCSS bằng Vibe Coding.
  Component generation, responsive layout, form handling, API integration,
  state management. Testing frontend components với AI.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 15
section_title: "Phần 5: Vibe Coding thực chiến — Xây dựng dự án thực tế"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-setup-frontend"><strong>1. Setup Frontend Project</strong></h2>

<pre><code class="language-text">// Prompt cho Agent Mode:
Create a Next.js 15 frontend project with:
- TypeScript, App Router
- TailwindCSS v4 with custom design tokens
- Shadcn/ui components
- Axios for API calls
- React Hook Form + Zod validation
- Zustand for state management
- Connect to the backend API at localhost:3001
</code></pre>

<p>Agent Mode tự động chạy <code>npx create-next-app</code>, cài dependencies, cấu hình TailwindCSS, và scaffold project structure.</p>

<h2 id="2-component-generation"><strong>2. Component Generation — Sức mạnh của Vibe Coding</strong></h2>

<h3>2.1. Layout Components</h3>
<pre><code class="language-text">// Prompt:
Create a responsive dashboard layout with:
- Sidebar navigation (collapsible on mobile)
- Top header with user avatar dropdown
- Main content area with breadcrumbs
- Use TailwindCSS, dark mode support
- Sidebar items: Dashboard, Projects, Tasks, Settings
</code></pre>

<p>Copilot generate đầy đủ layout với responsive breakpoints:</p>

<pre><code class="language-tsx">// src/components/layout/DashboardLayout.tsx
'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/projects', label: 'Projects', icon: '📁' },
    { href: '/tasks', label: 'Tasks', icon: '✅' },
    { href: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    &lt;div className="flex h-screen bg-gray-50 dark:bg-gray-900"&gt;
      {/* Sidebar */}
      &lt;aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800
        transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}&gt;
        &lt;nav className="mt-8 px-4 space-y-2"&gt;
          {navItems.map((item) =&gt; (
            &lt;Link key={item.href} href={item.href}
              className="flex items-center px-4 py-3 rounded-lg
                hover:bg-gray-100 dark:hover:bg-gray-700"&gt;
              &lt;span className="mr-3"&gt;{item.icon}&lt;/span&gt;
              {item.label}
            &lt;/Link&gt;
          ))}
        &lt;/nav&gt;
      &lt;/aside&gt;

      {/* Main content */}
      &lt;main className="flex-1 overflow-y-auto p-6"&gt;
        {children}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h3>2.2. Task Board Component</h3>
<pre><code class="language-text">// Prompt:
Create a Kanban board component for tasks with:
- Columns: Todo, In Progress, In Review, Done
- Drag and drop between columns (use @dnd-kit)
- Task cards showing title, priority badge, assignee avatar, due date
- Add task button per column
- Animate card movement
</code></pre>

<h2 id="3-form-handling"><strong>3. Form Handling với AI</strong></h2>

<pre><code class="language-text">// Prompt:
Create a task creation form with:
- Title (required, max 255 chars)
- Description (optional, rich text editor)
- Priority select (Low, Medium, High, Urgent)
- Due date picker
- Assignee select (fetch from API)
- Project select
- Use React Hook Form + Zod validation
- Show inline validation errors
- Submit to POST /api/tasks
</code></pre>

<pre><code class="language-tsx">// src/components/tasks/CreateTaskForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '@/lib/api';

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']),
  dueDate: z.string().optional(),
  assigneeId: z.string().uuid().optional(),
  projectId: z.string().uuid(),
});

type TaskFormData = z.infer&lt;typeof taskSchema&gt;;

export function CreateTaskForm({ projectId, onSuccess }: {
  projectId: string;
  onSuccess: () =&gt; void;
}) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm&lt;TaskFormData&gt;({
      resolver: zodResolver(taskSchema),
      defaultValues: { projectId, priority: 'MEDIUM' },
    });

  const onSubmit = async (data: TaskFormData) =&gt; {
    await api.post('/tasks', data);
    onSuccess();
  };

  return (
    &lt;form onSubmit={handleSubmit(onSubmit)} className="space-y-4"&gt;
      &lt;div&gt;
        &lt;input {...register('title')}
          placeholder="Task title"
          className="w-full px-4 py-2 border rounded-lg" /&gt;
        {errors.title &amp;&amp;
          &lt;p className="text-red-500 text-sm mt-1"&gt;{errors.title.message}&lt;/p&gt;}
      &lt;/div&gt;

      &lt;div&gt;
        &lt;select {...register('priority')} className="w-full px-4 py-2 border rounded-lg"&gt;
          &lt;option value="LOW"&gt;🟢 Low&lt;/option&gt;
          &lt;option value="MEDIUM"&gt;🟡 Medium&lt;/option&gt;
          &lt;option value="HIGH"&gt;🟠 High&lt;/option&gt;
          &lt;option value="URGENT"&gt;🔴 Urgent&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;

      &lt;button type="submit" disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg
          hover:bg-blue-700 disabled:opacity-50"&gt;
        {isSubmitting ? 'Creating...' : 'Create Task'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}
</code></pre>

<h2 id="4-api-integration"><strong>4. API Integration</strong></h2>

<pre><code class="language-text">// Prompt:
Create an API client module with:
- Axios instance with base URL and auth interceptor
- Automatic token refresh on 401
- Type-safe API functions for tasks, projects, auth
- Loading and error state hooks
</code></pre>

<pre><code class="language-typescript">// src/lib/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
});

// Auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto refresh on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        const { data } = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          { refreshToken }
        );
        localStorage.setItem('accessToken', data.accessToken);
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        return api.request(error.config);
      }
    }
    return Promise.reject(error);
  }
);
</code></pre>

<h2 id="5-state-management"><strong>5. State Management với Zustand</strong></h2>

<pre><code class="language-text">// Prompt:
Create a Zustand store for task management with:
- Tasks list with CRUD operations
- Filter by status, priority, assignee
- Optimistic updates for status changes
- Integration with the API client
</code></pre>

<pre><code class="language-typescript">// src/stores/taskStore.ts
import { create } from 'zustand';
import { api } from '@/lib/api';

interface Task {
  id: string;
  title: string;
  status: 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  assignee?: { id: string; name: string; avatar?: string };
}

interface TaskStore {
  tasks: Task[];
  loading: boolean;
  fetchTasks: (projectId: string) => Promise&lt;void&gt;;
  updateStatus: (taskId: string, status: Task['status']) => Promise&lt;void&gt;;
}

export const useTaskStore = create&lt;TaskStore&gt;((set, get) => ({
  tasks: [],
  loading: false,

  fetchTasks: async (projectId) => {
    set({ loading: true });
    const { data } = await api.get(`/tasks?projectId=${projectId}`);
    set({ tasks: data.data, loading: false });
  },

  updateStatus: async (taskId, status) => {
    // Optimistic update
    const previousTasks = get().tasks;
    set({
      tasks: previousTasks.map((t) =>
        t.id === taskId ? { ...t, status } : t
      ),
    });

    try {
      await api.put(`/tasks/${taskId}`, { status });
    } catch {
      // Rollback on error
      set({ tasks: previousTasks });
    }
  },
}));
</code></pre>

<h2 id="6-responsive-design"><strong>6. Responsive Design</strong></h2>

<pre><code class="language-text">// Prompt:
Make the task board responsive:
- Desktop: 4-column Kanban layout
- Tablet: 2-column grid with horizontal scroll
- Mobile: single column with tab navigation for each status
- Preserve drag and drop on tablet, disable on mobile
</code></pre>

<p>Copilot generates responsive breakpoints và conditional rendering dựa trên screen size.</p>

<h2 id="7-dark-mode"><strong>7. Dark Mode</strong></h2>

<pre><code class="language-text">// Prompt:
Add dark mode toggle with:
- System preference detection
- Manual toggle in header
- Persist preference in localStorage
- Smooth transition animation
</code></pre>

<h2 id="8-testing-frontend"><strong>8. Testing Frontend Components</strong></h2>

<pre><code class="language-text">// Prompt:
Write tests for CreateTaskForm component:
- Renders all form fields
- Shows validation errors for empty title
- Submits form data to API
- Disables button while submitting
- Calls onSuccess after successful submit
Use React Testing Library + Jest
</code></pre>

<pre><code class="language-tsx">// src/components/tasks/__tests__/CreateTaskForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateTaskForm } from '../CreateTaskForm';
import { api } from '@/lib/api';

jest.mock('@/lib/api');

describe('CreateTaskForm', () => {
  const mockOnSuccess = jest.fn();
  const projectId = 'test-project-id';

  it('shows validation error for empty title', async () => {
    render(&lt;CreateTaskForm projectId={projectId} onSuccess={mockOnSuccess} /&gt;);

    await userEvent.click(screen.getByText('Create Task'));

    await waitFor(() => {
      expect(screen.getByText('Title is required')).toBeInTheDocument();
    });
  });

  it('submits form data correctly', async () => {
    (api.post as jest.Mock).mockResolvedValue({ data: {} });

    render(&lt;CreateTaskForm projectId={projectId} onSuccess={mockOnSuccess} /&gt;);

    await userEvent.type(screen.getByPlaceholderText('Task title'), 'New Task');
    await userEvent.click(screen.getByText('Create Task'));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/tasks', expect.objectContaining({
        title: 'New Task',
        projectId,
        priority: 'MEDIUM',
      }));
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });
});
</code></pre>

<h2 id="9-debug-voi-copilot"><strong>9. Debug Frontend với Copilot</strong></h2>

<p>Khi gặp lỗi runtime:</p>
<pre><code class="language-text">// Copy error vào chat:
I'm getting this error in the browser console:
"TypeError: Cannot read properties of undefined (reading 'map')"
at TaskBoard.tsx:45

The tasks data from the API might be null on first render.
Fix this with proper null checks and loading state.
</code></pre>

<p>Copilot phân tích error, tìm root cause, và fix code — thường thêm null checks và loading state.</p>

<h2 id="10-tong-ket"><strong>10. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Task</th>
<th>Vibe Coding Prompt</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Layout</strong></td>
<td>Describe layout structure</td>
<td>Responsive dashboard</td>
</tr>
<tr>
<td><strong>Components</strong></td>
<td>Describe UI behavior</td>
<td>Interactive components</td>
</tr>
<tr>
<td><strong>Forms</strong></td>
<td>Describe fields + validation</td>
<td>Type-safe forms</td>
</tr>
<tr>
<td><strong>API</strong></td>
<td>Describe endpoints</td>
<td>Type-safe client</td>
</tr>
<tr>
<td><strong>State</strong></td>
<td>Describe data flow</td>
<td>Zustand store</td>
</tr>
<tr>
<td><strong>Tests</strong></td>
<td>"Write tests for X"</td>
<td>RTL test suite</td>
</tr>
</tbody>
</table>

<p>Frontend Vibe Coding rất mạnh vì UI components có <strong>pattern lặp lại nhiều</strong> — AI excel ở việc generate repetitive UI code.</p>

<p>Bài tiếp theo: Mở rộng sang <strong>Mobile & Cross-Platform</strong> — React Native và Flutter với Vibe Coding.</p>
