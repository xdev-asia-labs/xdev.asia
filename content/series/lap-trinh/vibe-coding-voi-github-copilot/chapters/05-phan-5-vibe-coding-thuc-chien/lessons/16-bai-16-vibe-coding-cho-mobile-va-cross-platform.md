---
id: 019f1c30-a503-7001-c001-v1b3c0d10503
title: 'Bài 16: Vibe Coding cho Mobile & Cross-Platform'
slug: bai-16-vibe-coding-cho-mobile-va-cross-platform
description: >-
  Phát triển ứng dụng mobile bằng Vibe Coding. React Native và Flutter
  workflows. UI generation, navigation, API integration. Platform-specific
  code. Testing mobile apps. Deploy lên App Store và Google Play.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 16
section_title: "Phần 5: Vibe Coding thực chiến — Xây dựng dự án thực tế"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-vibe-coding-mobile"><strong>1. Vibe Coding trên Mobile — Khác gì so với Web?</strong></h2>

<p>Mobile development có những đặc thù riêng mà Vibe Coding cần thích ứng:</p>

<table>
<thead>
<tr>
<th>Đặc điểm</th>
<th>Web</th>
<th>Mobile</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Layout</strong></td>
<td>CSS Flexbox/Grid</td>
<td>Platform-specific layout</td>
</tr>
<tr>
<td><strong>Navigation</strong></td>
<td>URL-based routing</td>
<td>Stack/Tab navigation</td>
</tr>
<tr>
<td><strong>Testing</strong></td>
<td>Browser → instant feedback</td>
<td>Emulator/Device → chậm hơn</td>
</tr>
<tr>
<td><strong>Native APIs</strong></td>
<td>Hạn chế</td>
<td>Camera, GPS, Sensors, Push</td>
</tr>
<tr>
<td><strong>Performance</strong></td>
<td>DOM rendering</td>
<td>Native rendering</td>
</tr>
<tr>
<td><strong>Deploy</strong></td>
<td>Vercel/Netlify</td>
<td>App Store review process</td>
</tr>
</tbody>
</table>

<h2 id="2-react-native"><strong>2. React Native với Vibe Coding</strong></h2>

<h3>2.1. Setup project</h3>
<pre><code class="language-text">// Prompt:
Create a React Native project with Expo for the Task Management app.
Include:
- TypeScript
- React Navigation (stack + bottom tabs)
- React Query for API calls
- AsyncStorage for local state
- Expo secure-store for auth tokens
- NativeWind (TailwindCSS for React Native)
</code></pre>

<h3>2.2. Shared types với Backend</h3>
<pre><code class="language-text">// Prompt:
I have a backend with these API responses (paste TypeScript types).
Generate React Native API client and hooks that match these types exactly.
Reuse the same Zod schemas from the web frontend.
</code></pre>

<pre><code class="language-typescript">// src/hooks/useTasks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import type { Task, CreateTaskInput } from '../types';

export function useTasks(projectId: string) {
  return useQuery({
    queryKey: ['tasks', projectId],
    queryFn: () => api.get&lt;Task[]&gt;(`/tasks?projectId=${projectId}`),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskInput) => api.post('/tasks', data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['tasks', variables.projectId],
      });
    },
  });
}
</code></pre>

<h3>2.3. Mobile-specific UI</h3>
<pre><code class="language-text">// Prompt:
Create a task list screen for React Native with:
- Pull to refresh
- Infinite scroll pagination
- Swipe to complete/delete
- FAB (floating action button) to add tasks
- Priority color indicators
- Use NativeWind for styling
</code></pre>

<pre><code class="language-tsx">// src/screens/TaskListScreen.tsx
import { FlatList, RefreshControl, View, Text, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useTasks } from '../hooks/useTasks';

export function TaskListScreen({ route }) {
  const { projectId } = route.params;
  const { data, isLoading, refetch } = useTasks(projectId);

  const priorityColors = {
    LOW: 'bg-green-500',
    MEDIUM: 'bg-yellow-500',
    HIGH: 'bg-orange-500',
    URGENT: 'bg-red-500',
  };

  const renderTask = ({ item: task }) =&gt; (
    &lt;Swipeable
      renderRightActions={() =&gt; (
        &lt;Pressable className="bg-green-500 justify-center px-6"
          onPress={() =&gt; completeTask(task.id)}&gt;
          &lt;Text className="text-white font-bold"&gt;Done&lt;/Text&gt;
        &lt;/Pressable&gt;
      )}&gt;
      &lt;View className="bg-white p-4 border-b border-gray-100 flex-row items-center"&gt;
        &lt;View className={`w-3 h-3 rounded-full mr-3 ${priorityColors[task.priority]}`} /&gt;
        &lt;View className="flex-1"&gt;
          &lt;Text className="font-semibold text-gray-900"&gt;{task.title}&lt;/Text&gt;
          &lt;Text className="text-gray-500 text-sm"&gt;{task.assignee?.name}&lt;/Text&gt;
        &lt;/View&gt;
      &lt;/View&gt;
    &lt;/Swipeable&gt;
  );

  return (
    &lt;View className="flex-1 bg-gray-50"&gt;
      &lt;FlatList
        data={data}
        renderItem={renderTask}
        refreshControl={
          &lt;RefreshControl refreshing={isLoading} onRefresh={refetch} /&gt;
        }
      /&gt;
    &lt;/View&gt;
  );
}
</code></pre>

<h2 id="3-flutter"><strong>3. Flutter với Vibe Coding</strong></h2>

<h3>3.1. Flutter project setup</h3>
<pre><code class="language-text">// Prompt:
Create a Flutter app for Task Management with:
- Clean architecture (presentation, domain, data layers)
- Riverpod for state management
- Go Router for navigation
- Dio for API calls
- Freezed for immutable models
- Material 3 design
</code></pre>

<h3>3.2. Dart model generation</h3>
<pre><code class="language-text">// Prompt:
Generate Freezed models for these API responses:
- Task (id, title, description, status, priority, dueDate, assignee)
- Project (id, name, description, owner)
- User (id, email, name, avatar)
Include fromJson/toJson serialization.
</code></pre>

<pre><code class="language-dart">// lib/models/task.dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'task.freezed.dart';
part 'task.g.dart';

@freezed
class Task with _$Task {
  const factory Task({
    required String id,
    required String title,
    String? description,
    @Default(TaskStatus.todo) TaskStatus status,
    @Default(Priority.medium) Priority priority,
    DateTime? dueDate,
    User? assignee,
  }) = _Task;

  factory Task.fromJson(Map&lt;String, dynamic&gt; json) =&gt; _$TaskFromJson(json);
}

enum TaskStatus {
  @JsonValue('TODO') todo,
  @JsonValue('IN_PROGRESS') inProgress,
  @JsonValue('IN_REVIEW') inReview,
  @JsonValue('DONE') done,
}

enum Priority {
  @JsonValue('LOW') low,
  @JsonValue('MEDIUM') medium,
  @JsonValue('HIGH') high,
  @JsonValue('URGENT') urgent,
}
</code></pre>

<h3>3.3. Flutter UI với Copilot</h3>
<pre><code class="language-text">// Prompt:
Create a Flutter task board widget with:
- Horizontal scrollable columns (Todo, In Progress, Done)
- Draggable task cards between columns
- Material 3 card design
- Pull to refresh
- Hero animation when opening task detail
</code></pre>

<h2 id="4-platform-specific"><strong>4. Platform-Specific Code</strong></h2>

<pre><code class="language-text">// Prompt:
Add push notifications to the mobile app:
- Firebase Cloud Messaging setup
- Handle foreground/background/terminated states  
- Deep link to specific task when notification tapped
- Platform-specific code for iOS (APNs) and Android (FCM)
</code></pre>

<p>Copilot hiểu <strong>platform differences</strong> và generate code phù hợp cho từng platform.</p>

<h2 id="5-so-sanh-frameworks"><strong>5. So sánh: React Native vs Flutter cho Vibe Coding</strong></h2>

<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>React Native</th>
<th>Flutter</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>AI code quality</strong></td>
<td>Tốt (nhiều training data)</td>
<td>Tốt (growing ecosystem)</td>
</tr>
<tr>
<td><strong>Code sharing với web</strong></td>
<td>Cao (shared TypeScript)</td>
<td>Thấp (Dart riêng)</td>
</tr>
<tr>
<td><strong>Copilot suggestions</strong></td>
<td>Rất chính xác (JS/TS)</td>
<td>Chính xác (Dart)</td>
</tr>
<tr>
<td><strong>Component generation</strong></td>
<td>Nhanh (JSX familiar)</td>
<td>Nhanh (widget tree)</td>
</tr>
<tr>
<td><strong>Testing với AI</strong></td>
<td>Jest + RTL (quen thuộc)</td>
<td>Widget testing (learning curve)</td>
</tr>
<tr>
<td><strong>Hot reload</strong></td>
<td>Fast Refresh ✅</td>
<td>Hot Reload ✅</td>
</tr>
</tbody>
</table>

<p><strong>Recommendation</strong>: Nếu team đã dùng React cho web → React Native. Nếu cần performance cao và custom UI → Flutter.</p>

<h2 id="6-testing-mobile"><strong>6. Testing Mobile Apps</strong></h2>

<pre><code class="language-text">// Prompt cho React Native:
Write tests for TaskListScreen:
- Renders task list from API
- Pull to refresh calls refetch
- Swipe right completes task
- Shows loading indicator
- Shows empty state when no tasks
Use @testing-library/react-native
</code></pre>

<pre><code class="language-text">// Prompt cho Flutter:
Write widget tests for TaskBoard:
- Renders columns with correct titles
- Shows tasks in correct columns
- Drag and drop changes task status
- Pull to refresh triggers reload
</code></pre>

<h2 id="7-deploy"><strong>7. Deploy Mobile Apps</strong></h2>

<pre><code class="language-text">// Prompt:
Create a CI/CD pipeline for the React Native app:
- GitHub Actions workflow
- Build for iOS (using Expo EAS)
- Build for Android (using Expo EAS)
- Auto-submit to TestFlight and Google Play Internal Testing
- Run tests before build
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Mobile Task</th>
<th>Vibe Coding Effectiveness</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>UI screens</strong></td>
<td>⭐⭐⭐⭐⭐ Rất hiệu quả</td>
</tr>
<tr>
<td><strong>API integration</strong></td>
<td>⭐⭐⭐⭐⭐ Type-safe và nhanh</td>
</tr>
<tr>
<td><strong>Navigation</strong></td>
<td>⭐⭐⭐⭐ Tốt với patterns quen</td>
</tr>
<tr>
<td><strong>Native APIs</strong></td>
<td>⭐⭐⭐ Cần review platform specifics</td>
</tr>
<tr>
<td><strong>Performance tuning</strong></td>
<td>⭐⭐ Cần human expertise</td>
</tr>
<tr>
<td><strong>App Store submission</strong></td>
<td>⭐⭐⭐ CI/CD setup tốt, nhưng cần manual review</td>
</tr>
</tbody>
</table>

<p>Phần 6 sẽ tập trung vào <strong>chất lượng và chuyên nghiệp</strong> — Code quality, security, technical debt, và làm việc trong team với Vibe Coding.</p>
