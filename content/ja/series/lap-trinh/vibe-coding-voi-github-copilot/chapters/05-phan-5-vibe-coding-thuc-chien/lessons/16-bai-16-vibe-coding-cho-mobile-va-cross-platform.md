---
id: 019f1c30-a503-7001-c001-v1b3c0d10503
title: 'レッスン 16: モバイルおよびクロスプラットフォーム向けの Vibe コーディング'
slug: bai-16-vibe-coding-cho-mobile-va-cross-platform
description: >-
  Vibe コーディングを使用してモバイル アプリケーションを開発します。 React Native および Flutter ワークフロー。
  UIの生成、ナビゲーション、APIの統合。プラットフォーム固有のコード。モバイルアプリのテスト。 App Store と Google Play
  に展開します。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 16
section_title: 'パート 5: Vibe コーディングの実際 — 実際のプロジェクトの構築'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2074" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2074)"/>

  <!-- Decorations -->
  <g>
    <circle cx="781" cy="233" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="962" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="643" cy="195" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="824" cy="176" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="157" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="63" x2="1100" y2="143" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="93" x2="1050" y2="163" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="945.9089653438086,94 945.9089653438086,132 913,151 880.0910346561914,132 880.0910346561914,94.00000000000001 913,75" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: モバイルおよびモバイル向けの Vibe コーディング</tspan>
      <tspan x="60" dy="42">クロスプラットフォーム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: Vibe コーディングの実際 — 実際のプロジェクトの構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vibe-coding-mobile"><strong>1. モバイルでの Vibe コーディング — Web とどう違うのですか?</strong></h2>

<p>モバイル開発には、Vibe コーディングが適応する必要がある独自の特性があります。</p>

<table>
<thead>
<tr>
<th>特徴</th>
<th>ウェブ</th>
<th>モバイル</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>レイアウト</strong></td>
<td>CSS フレックスボックス/グリッド</td>
<td>プラットフォーム固有のレイアウト</td>
</tr>
<tr>
<td><strong>ナビゲーション</strong></td>
<td>URLベースのルーティング</td>
<td>スタック/タブのナビゲーション</td>
</tr>
<tr>
<td><strong>テスト</strong></td>
<td>ブラウザ → 即時フィードバック</td>
<td>エミュレータ/デバイス → 遅い</td>
</tr>
<tr>
<td><strong>ネイティブAPI</strong></td>
<td>制限事項</td>
<td>カメラ、GPS、センサー、プッシュ</td>
</tr>
<tr>
<td><strong>パフォーマンス</strong></td>
<td>DOM レンダリング</td>
<td>ネイティブレンダリング</td>
</tr>
<tr>
<td><strong>デプロイ</strong></td>
<td>ヴァーセル/Netlify</td>
<td>App Storeの審査プロセス</td>
</tr>
</tbody>
</table>

<h2 id="2-react-native"><strong>2. Vibe コーディングでネイティブに反応する</strong></h2>

<h3>2.1.プロジェクトのセットアップ</h3>
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

<h3>2.2.バックエンドとの共有タイプ</h3>
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

<h3>2.3.モバイル固有の UI</h3>
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

<h2 id="3-flutter"><strong>3. Vibeコーディングによるフラッター</strong></h2>

<h3>3.1. Flutterプロジェクトのセットアップ</h3>
<pre><code class="language-text">// Prompt:
Create a Flutter app for Task Management with:
- Clean architecture (presentation, domain, data layers)
- Riverpod for state management
- Go Router for navigation
- Dio for API calls
- Freezed for immutable models
- Material 3 design
</code></pre>

<h3>3.2.ダーツモデルの生成</h3>
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

<h3>3.3. Copilot を使用した Flutter UI</h3>
<pre><code class="language-text">// Prompt:
Create a Flutter task board widget with:
- Horizontal scrollable columns (Todo, In Progress, Done)
- Draggable task cards between columns
- Material 3 card design
- Pull to refresh
- Hero animation when opening task detail
</code></pre>

<h2 id="4-platform-specific"><strong>4. プラットフォーム固有のコード</strong></h2>

<pre><code class="language-text">// Prompt:
Add push notifications to the mobile app:
- Firebase Cloud Messaging setup
- Handle foreground/background/terminated states  
- Deep link to specific task when notification tapped
- Platform-specific code for iOS (APNs) and Android (FCM)
</code></pre>

<p>副操縦士は理解しています <strong>プラットフォームの違い</strong> 各プラットフォームに適切なコードを生成します。</p>

<h2 id="5-so-sanh-frameworks"><strong>5. 比較: Vibe コーディングの React Native と Flutter</strong></h2>

<table>
<thead>
<tr>
<th>基準</th>
<th>ネイティブに反応する</th>
<th>フラッター</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>AIコードの品質</strong></td>
<td>良い (トレーニング データが豊富)</td>
<td>良好（エコシステムの成長）</td>
</tr>
<tr>
<td><strong>ウェブとのコード共有</strong></td>
<td>高 (共有 TypeScript)</td>
<td>ロー（プライベートダーツ）</td>
</tr>
<tr>
<td><strong>副操縦士の提案</strong></td>
<td>非常に正確 (JS/TS)</td>
<td>アキュレート（ダーツ）</td>
</tr>
<tr>
<td><strong>コンポーネントの生成</strong></td>
<td>高速 (JSX に馴染みのある)</td>
<td>高速 (ウィジェット ツリー)</td>
</tr>
<tr>
<td><strong>AIによるテスト</strong></td>
<td>Jest + RTL (おなじみ)</td>
<td>ウィジェットのテスト (学習曲線)</td>
</tr>
<tr>
<td><strong>ホットリロード</strong></td>
<td>高速リフレッシュ ✅</td>
<td>ホットリロード ✅</td>
</tr>
</tbody>
</table>

<p><strong>おすすめ</strong>: チームが Web 用 React → React Native を使用している場合。高パフォーマンスとカスタム UI が必要な場合 → Flutter。</p>

<h2 id="6-testing-mobile"><strong>6. モバイルアプリのテスト</strong></h2>

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

<h2 id="7-deploy"><strong>7. モバイルアプリの導入</strong></h2>

<pre><code class="language-text">// Prompt:
Create a CI/CD pipeline for the React Native app:
- GitHub Actions workflow
- Build for iOS (using Expo EAS)
- Build for Android (using Expo EAS)
- Auto-submit to TestFlight and Google Play Internal Testing
- Run tests before build
</code></pre>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>モバイルタスク</th>
<th>バイブコーディングの効果</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>UI画面</strong></td>
<td>⭐⭐⭐⭐⭐ 非常に効果的です</td>
</tr>
<tr>
<td><strong>API統合</strong></td>
<td>⭐⭐⭐⭐⭐ タイプセーフで高速</td>
</tr>
<tr>
<td><strong>ナビゲーション</strong></td>
<td>⭐⭐⭐⭐ 馴染みのある柄と相性が良いです</td>
</tr>
<tr>
<td><strong>ネイティブAPI</strong></td>
<td>⭐⭐⭐ プラットフォームの詳細を確認する必要があります</td>
</tr>
<tr>
<td><strong>パフォーマンスのチューニング</strong></td>
<td>⭐⭐人間の専門知識が必要</td>
</tr>
<tr>
<td><strong>App Storeへの申請</strong></td>
<td>⭐⭐⭐ CI/CD セットアップは良好ですが、手動でのレビューが必要です</td>
</tr>
</tbody>
</table>

<p>第 6 部では次の点に焦点を当てます。 <strong>品質とプロ意識</strong> — コードの品質、セキュリティ、技術的負債、および Vibecoding とのチームでの作業。</p>
