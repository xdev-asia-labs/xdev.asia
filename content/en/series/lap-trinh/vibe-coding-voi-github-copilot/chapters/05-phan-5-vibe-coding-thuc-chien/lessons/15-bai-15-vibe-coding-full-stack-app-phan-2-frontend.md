---
id: 019f1c30-a502-7001-c001-v1b3c0d10502
title: 'Lesson 15: Vibe Coding Full-Stack App — Part 2: Frontend'
slug: bai-15-vibe-coding-full-stack-app-phan-2-frontend
description: >-
  Build frontend with React + Next.js + TailwindCSS with Vibe Coding. Component
  generation, responsive layout, form handling, API integration, state
  management. Testing frontend components with AI.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 15
section_title: 'Part 5: Vibe Coding in action — Building real projects'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1695" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1695)"/>

  <!-- Decorations -->
  <g>
    <circle cx="852" cy="226" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="604" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="856" cy="270" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="608" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="54" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="146" x2="1100" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="176" x2="1050" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1031.507041555162,175.5 1031.507041555162,216.5 996,237 960.492958444838,216.5 960.492958444838,175.5 996,155" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Vibe Coding Full-Stack App — Part</tspan>
      <tspan x="60" dy="42">2: Frontend</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Vibe Coding in action — Building real projects</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

<p>Agent Mode runs automatically <code>npx create-next-app</code>, install dependencies, configure TailwindCSS, and scaffold project structure.</p>

<h2 id="2-component-generation"><strong>2. Component Generation — The power of Vibe Coding</strong></h2>

<h3>2.1. Layout Components</h3>
<pre><code class="language-text">// Prompt:
Create a responsive dashboard layout with:
- Sidebar navigation (collapsible on mobile)
- Top header with user avatar dropdown
- Main content area with breadcrumbs
- Use TailwindCSS, dark mode support
- Sidebar items: Dashboard, Projects, Tasks, Settings
</code></pre>

<p>Copilot generates full layout with responsive breakpoints:</p>

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

<h2 id="3-form-handling"><strong>3. Form Handling with AI</strong></h2>

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

<h2 id="5-state-management"><strong>5. State Management with Zustand</strong></h2>

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

<p>Copilot generates responsive breakpoints and conditional rendering based on screen size.</p>

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

<h2 id="9-debug-voi-copilot"><strong>9. Debug Frontend with Copilot</strong></h2>

<p>When encountering a runtime error:</p>
<pre><code class="language-text">// Copy error vào chat:
I'm getting this error in the browser console:
"TypeError: Cannot read properties of undefined (reading 'map')"
at TaskBoard.tsx:45

The tasks data from the API might be null on first render.
Fix this with proper null checks and loading state.
</code></pre>

<p>Copilot analyzes errors, finds root causes, and fixes code — often adding null checks and loading states.</p>

<h2 id="10-tong-ket"><strong>10. Summary</strong></h2>

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
<td>Responsive dashboards</td>
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

<p>Frontend Vibe Coding is very powerful because UI components are <strong>pattern repeats a lot</strong> — AI excel at generating repetitive UI code.</p>

<p>Next article: Expand to <strong>Mobile & Cross-Platform</strong> — React Native and Flutter with Vibe Coding.</p>
