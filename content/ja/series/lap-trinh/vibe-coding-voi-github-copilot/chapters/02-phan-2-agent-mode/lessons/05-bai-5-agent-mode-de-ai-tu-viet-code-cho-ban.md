---
id: 019f1c30-a201-7001-c001-v1b3c0d10201
title: 'レッスン 5: エージェント モード — AI にコードを作成させます'
slug: bai-5-agent-mode-de-ai-tu-viet-code-cho-ban
description: >-
  エージェントとは何か、エージェントの動作方法 (計画 → 実行 → 検証)、エージェント ループ、チャット ビュー
  (Ctrl+Cmd+I)、エージェントと質問モードと計画モードの比較。権限レベル: デフォルト、承認のバイパス、自動操縦。実践: Agent
  を使用して最初の Web アプリを構築します。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: エージェント モード — AI が自動的にコードを作成します'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-824" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-824)"/>

  <!-- Decorations -->
  <g>
    <circle cx="661" cy="193" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="722" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="783" cy="215" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="844" cy="96" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="237" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: エージェント モード — AI にコード自体を記述させる</tspan>
      <tspan x="60" dy="42">あなた</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: エージェント モード — AI が自動的にコードを作成します</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-agent-la-gi"><strong>1. エージェントとは何ですか?</strong></h2>

<p>GitHub Copilot では、1 つ <strong>エージェント</strong> 現役のAIアシスタントです <strong>自律的に</strong> 完全なプログラミングタスクを完了します。数行のみを提案するインライン提案とは異なり、エージェントには次の機能があります。</p>

<ul>
<li>📋 <strong>計画を立てる</strong> (タスクをステップに分割します)</li>
<li>📝 <strong>複数のファイルを作成および編集する</strong> 同時に</li>
<li>💻 <strong>ターミナルコマンドを実行する</strong> (パッケージのインストール、ビルド、テスト)</li>
<li>🔄 <strong>自己修正</strong> エラーが発生した場合（自己修正）</li>
<li>🔧 <strong>ツールを使用する</strong> (ファイルの読み取り、検索、Web、拡張機能)</li>
</ul>

<p>これが基礎です <strong>リアルバイブコーディング</strong> — リクエストを記述すると、エージェントがそれをすべて実行します。</p>

<h2 id="2-agent-loop"><strong>2. エージェント ループ — エージェントの仕組み</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│              AGENT LOOP                          │
├─────────────────────────────────────────────────┤
│                                                  │
│  User Prompt: "Build a REST API for blog posts"  │
│           ↓                                      │
│  ┌─── PLAN ───┐                                  │
│  │ 1. Setup project                              │
│  │ 2. Create models                              │
│  │ 3. Create routes                              │
│  │ 4. Add middleware                             │
│  │ 5. Test                                       │
│  └────────────┘                                  │
│           ↓                                      │
│  ┌─── EXECUTE ──┐                                │
│  │ Create files  │ ←─ Tool: createFile           │
│  │ Write code    │ ←─ Tool: editFile             │
│  │ Run commands  │ ←─ Tool: runInTerminal        │
│  └──────────────┘                                │
│           ↓                                      │
│  ┌─── VERIFY ───┐                                │
│  │ Check errors  │ ←─ Tool: getErrors            │
│  │ Run tests     │ ←─ Tool: runInTerminal        │
│  │ Self-correct  │ → Quay lại EXECUTE nếu fail   │
│  └──────────────┘                                │
│           ↓                                      │
│  ✅ Complete → User review                       │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-ba-built-in-agents"><strong>3. 3 つの組み込みエージェント</strong></h2>

<h3>3.1.エージェント (デフォルト)</h3>
<p>変更の計画と実装、ファイルの作成、コマンドの実行、ツールの使用を自律的に行うことができます。これは、Vibe コーディングに最もよく使用されるエージェントです。</p>

<h3>3.2.計画</h3>
<p>構造化された実施計画を作成しますが、 <strong>コードを書かないでください</strong>。計画に問題がなければ、エージェントに実行を引き渡します。</p>

<h3>3.3.尋ねる</h3>
<p>コード、概念、コードベースに関する質問に答える <strong>ファイルを変更しないでください</strong>。コーディングする前に理解する必要がある場合に使用します。</p>

<pre><code class="language-text">Chọn agent trong Chat view:

┌────────────────────────────┐
│  Agent ▼                   │  ← Click dropdown
├────────────────────────────┤
│  ● Agent    (implement)    │
│  ○ Plan     (plan only)    │
│  ○ Ask      (Q&A only)     │
│  ○ Reviewer (custom)       │
└────────────────────────────┘
</code></pre>

<h2 id="4-permission-levels"><strong>4. 権限レベル — コントロールエージェントの権限</strong></h2>

<p>エージェントはコマンドを実行し、ファイルを変更する必要があります。自律性のレベルはユーザーが決定します。</p>

<table>
<thead>
<tr>
<th>レベル</th>
<th>説明</th>
<th>ときに適しています</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>デフォルトの承認</strong></td>
<td>書き込み/実行ツールの確認を求める</td>
<td>初めて使用する、製品コード</td>
</tr>
<tr>
<td><strong>承認をバイパスする</strong></td>
<td>すべてのツール呼び出しを自動承認する</td>
<td>信頼できるタスク、プロトタイプ</td>
</tr>
<tr>
<td><strong>オートパイロット (プレビュー)</strong></td>
<td>自動承認 + 質問の自動応答</td>
<td>完全に自律的なサイドプロジェクト</td>
</tr>
</tbody>
</table>

<p><strong>⚠️ セキュリティ上の注意:</strong> オートパイロット レベルでは、エージェントは任意のコマンドを実行できます。ローカル マシン上の信頼できるプロジェクトにのみ使用されます。</p>

<h2 id="5-hands-on-xay-dung-web-app"><strong>5. ハンズオン: エージェント モードで Web アプリを構築する</strong></h2>

<h3>ステップ 1: チャット ビューを開く</h3>
<p>プレス <code>Ctrl+Cmd+I</code> (macOS) または <code>Ctrl+Alt+I</code> (Windows/Linux)</p>

<h3>ステップ 2: エージェント モードを選択する</h3>
<p>ドロップダウンから選択します <strong>「エージェント」</strong></p>

<h3>ステップ 3: プロンプトを書き込む</h3>
<pre><code class="language-text">Create a modern expense tracker web application with:
- Add expenses with amount, category, and date
- View expenses in a table with sorting
- Dashboard with summary charts (total by category)
- Filter expenses by date range and category
- Local storage to persist data
- Modern dark theme UI with smooth animations
- Responsive design for mobile

Use vanilla HTML, CSS, and JavaScript. No frameworks needed.
</code></pre>

<h3>ステップ 4: エージェントの動作を観察する</h3>
<p>エージェントは次のことを行います:</p>
<ol>
<li>要件を分析する</li>
<li>ファイル構造を作成します。 <code>インデックス.html</code>、 <code>スタイル.css</code>、 <code>アプリ.js</code></li>
<li>HTML セマンティック構造を記述する</li>
<li>ダークテーマとレスポンシブで CSS を作成する</li>
<li>CRUD ロジック、チャート、フィルター用の JavaScript を作成する</li>
<li>プレビューを実行できます</li>
</ol>

<h3>ステップ 5: 確認して同意する</h3>
<p>ファイルごとの差分を表示 → を押す <strong>「保管してください」</strong> 受け入れるか、変更をリクエストします。</p>

<h3>ステップ 6: 反復する</h3>
<p>会話を続けて機能を追加します。</p>
<pre><code class="language-text">Add an export to CSV button and a monthly budget feature with progress bar
</code></pre>

<h2 id="6-agent-session-management"><strong>6. エージェントセッション管理</strong></h2>

<p>各タスクは 1 回で実行されます <strong>セッション。セッション</strong> 別途：</p>

<ul>
<li><strong>セッションリスト</strong>: チャットパネルにすべてのセッション (アクティブ、一時停止、完了) を表示します</li>
<li><strong>複数のセッション</strong>: さまざまなタスクに対して複数のセッションを並行して実行します。</li>
<li><strong>セッションを再開する</strong>: 古いセッションに戻って反復を続行します</li>
<li><strong>変更を確認する</strong>: セッション内のすべてのファイル変更を表示します</li>
</ul>

<h2 id="7-tools-agent-su-dung"><strong>7. エージェントが使用するツール</strong></h2>

<p>エージェントは組み込みツールにアクセスできます。</p>

<table>
<thead>
<tr>
<th>ツール</th>
<th>機能</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>読む</code></td>
<td>ワークスペース内のファイルを読み取る</td>
</tr>
<tr>
<td><code>編集ファイル</code></td>
<td>ファイルの作成/編集</td>
</tr>
<tr>
<td><code>runInターミナル</code></td>
<td>シェルコマンドを実行する</td>
</tr>
<tr>
<td><code>検索します。検索</code></td>
<td>コードベース内を検索する</td>
</tr>
<tr>
<td><code>リストディレクトリ</code></td>
<td>ディレクトリ内のファイルを一覧表示する</td>
</tr>
<tr>
<td><code>getErrors</code></td>
<td>コンパイル/lint エラーが発生する</td>
</tr>
<tr>
<td><code>ウェブ</code></td>
<td>ウェブを検索する</td>
</tr>
<tr>
<td><code>用途</code></td>
<td>シンボルの参照を検索する</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices-agent-mode"><strong>8. エージェント モードのベスト プラクティス</strong></h2>

<h3>✅ すべきこと:</h3>
<ul>
<li><strong>説明がわかりやすくて詳しい</strong>: 技術スタック、パターン、制約が含まれます</li>
<li><strong>大きなタスクを小さな部分に分割する</strong>: 「すべてをビルドする」のではなく、最初に「認証を追加」し、後で「CRUD を追加」します。</li>
<li><strong>各ステップを確認してください</strong>: 生成されたエージェント コード、特に重要なロジックを読み取ります。</li>
<li><strong>最初に /init を使用してください</strong>: エージェントが規則を理解できるようにカスタム指示を作成します。</li>
<li><strong>やり直すのではなく反復する</strong>: セッションを最初からやり直すのではなく続行します</li>
</ul>

<h3>❌ 次のことを行ってはなりません:</h3>
<ul>
<li>実稼働コードにオートパイロットを使用する</li>
<li>ファイルをレビューせずにすべてを受け入れる</li>
<li>プロンプトが曖昧すぎます:「改善してください」</li>
<li>エージェントが知らないうちにパッケージをインストールできるようにする</li>
<li>エラー メッセージをスキップ - 読み取られてエージェントに提供されます</li>
</ul>

<h2 id="9-debugging-voi-agent"><strong>9. エージェントモードでのデバッグ</strong></h2>

<p>エージェントは次のことができるため、デバッグに特に強力です。</p>
<ol>
<li>エラーメッセージを読んでください</li>
<li>複数のファイルにわたる根本原因を追跡する</li>
<li>修正を適用する</li>
<li>テストを再実行して確認します</li>
</ol>

<pre><code class="language-text">// Prompt ví dụ:
The test in tests/auth.test.ts is failing with "TypeError: Cannot read properties
of undefined (reading 'token')". Find the root cause and fix it.
</code></pre>

<h2 id="10-tong-ket"><strong>10. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>コンセプト</th>
<th>重要なポイント</th>
</tr>
</thead>
<tbody>
<tr>
<td>エージェント</td>
<td>自律型AIアシスタント：計画→実行→検証</td>
</tr>
<tr>
<td>3 つの組み込みエージェント</td>
<td>Agent（実行）、Plan（計画）、Ask（Q&A）</td>
</tr>
<tr>
<td>権限レベル</td>
<td>デフォルト → バイパス → 自動操縦 (自律性の向上)</td>
</tr>
<tr>
<td>エージェントループ</td>
<td>タスクが完了するまで実行と検証を繰り返します</td>
</tr>
<tr>
<td>セッション</td>
<td>各タスク = 1 セッション、並列実行可能</td>
</tr>
<tr>
<td>ベストプラクティス</td>
<td>プロンプトをクリア + コードを確認 + 反復</td>
</tr>
</tbody>
</table>

<p>次の記事ではさらに深く掘り下げていきます <strong>プランエージェント</strong> — コーディング前の計画手法により、AI 出力をより適切に制御できるようになります。</p>
