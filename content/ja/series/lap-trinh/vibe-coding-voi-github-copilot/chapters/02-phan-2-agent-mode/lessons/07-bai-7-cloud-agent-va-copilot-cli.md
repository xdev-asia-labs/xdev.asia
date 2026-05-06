---
id: 019f1c30-a203-7001-c001-v1b3c0d10203
title: 'レッスン 7: クラウド エージェントと Copilot CLI — エージェントはどこでも実行されます'
slug: bai-7-cloud-agent-va-copilot-cli
description: >-
  ローカル エージェント、クラウド エージェント、Copilot CLI、サードパーティ エージェント。 Cloud Agent: ブランチの作成、実装、PR
  のオープンを自動的に行います。 Copilot CLI: ターミナルからエージェントを実行し、Git ワークツリーを分離します。エージェント
  タイプ間のハンドオフ。セッション管理。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: エージェント モード — AI が自動的にコードを作成します'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5218" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5218)"/>

  <!-- Decorations -->
  <g>
    <circle cx="822" cy="236" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="1044" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="766" cy="200" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="988" cy="182" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="164" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="56" x2="1100" y2="136" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="86" x2="1050" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.8467875173176,190.5 1032.8467875173176,221.5 1006,237 979.1532124826824,221.5 979.1532124826824,190.5 1006,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: クラウド エージェントと Copilot CLI — エージェント</tspan>
      <tspan x="60" dy="42">どこでも走ります</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: エージェント モード — AI が自動的にコードを作成します</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-agent-types-overview"><strong>1. エージェントの種類の概要</strong></h2>

<p>GitHub Copilot を使用すると、必要なワークフローと監視レベルに応じて、さまざまな場所でエージェントを実行できます。</p>

<table>
<thead>
<tr>
<th>エージェントの種類</th>
<th>どこに逃げますか？</th>
<th>インタラクション</th>
<th>主な使用例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ローカルエージェント</strong></td>
<td>VS Code、あなたのマシン</td>
<td>インタラクティブ</td>
<td>毎日コーディング、デバッグ、反復</td>
</tr>
<tr>
<td><strong>コパイロット CLI</strong></td>
<td>端末、背景</td>
<td>自律型</td>
<td>並列タスク、ワークツリーの分離</td>
</tr>
<tr>
<td><strong>クラウドエージェント</strong></td>
<td>GitHub クラウド</td>
<td>PR経由</td>
<td>チーム連携、課題→PR</td>
</tr>
<tr>
<td><strong>サードパーティ</strong></td>
<td>人間学/OpenAI</td>
<td>SDKベース</td>
<td>特定の AI プロバイダーの好み</td>
</tr>
</tbody>
</table>

<h2 id="2-local-agent"><strong>2. ローカルエージェント (VS コード)</strong></h2>

<p>これは、レッスン 5 で学習したエージェントです。ローカル エージェントが実行されます。 <strong>VSコードで</strong> ワークスペースへの完全なアクセス権:</p>

<ul>
<li>✅ プロジェクト内のすべてのファイルにアクセスします</li>
<li>✅ ターミナルコマンドを実行する</li>
<li>✅ VS Code 拡張機能と MCP サーバーを使用する</li>
<li>✅ インタラクティブ — 各ステップを確認します</li>
<li>✅ デバッグコンテキスト (ブレークポイント、テスト出力)</li>
</ul>

<p><strong>以下に最適:</strong> 綿密な監視が必要な場合のインタラクティブな開発、デバッグ。</p>

<h2 id="3-copilot-cli"><strong>3. Copilot CLI — ターミナルからのエージェント</strong></h2>

<p>Copilot CLI でエージェントを実行できる <strong>コマンドラインから</strong>、バックグラウンドで自律的に動作します。</p>

<h3>3.1.インストール</h3>
<pre><code class="language-bash"># Copilot CLI được tích hợp trong GitHub CLI
gh extension install github/gh-copilot

# Hoặc nếu đã có, upgrade
gh extension upgrade github/gh-copilot
</code></pre>

<h3>3.2.基本的な使い方</h3>
<pre><code class="language-bash"># Chạy agent task
gh copilot agent "Add input validation to all API endpoints in src/routes/"

# Với worktree isolation (không ảnh hưởng branch hiện tại)
gh copilot agent --worktree "Refactor database queries to use prepared statements"
</code></pre>

<h3>3.3. Git ワークツリー — 安全な雰囲気のコーディング</h3>
<p>Git Worktree を使用すると、エージェントは Git Worktree で作業できるようになります <strong>別々にコピーする</strong> コードベースの内容は、コーディングしているブランチには影響しません。</p>

<pre><code class="language-text">main (bạn đang code ở đây)
  └── worktree/copilot-task-1/ (Agent chạy ở đây)
      └── Isolated copy, riêng branch
</code></pre>

<p>エージェントが完了したら、変更を確認し、OK であればマージします。</p>

<h3>3.4.複数のタスクを並行して実行する</h3>
<pre><code class="language-bash"># Terminal 1: Task A
gh copilot agent --worktree "Add unit tests for UserService"

# Terminal 2: Task B (song song)
gh copilot agent --worktree "Create API documentation with OpenAPI spec"

# Terminal 3: Bạn vẫn code bình thường trên main branch
</code></pre>

<h2 id="4-cloud-agent"><strong>4. クラウド エージェント — GitHub 上のコーディング エージェント</strong></h2>

<p>クラウド エージェント (別名 <strong>コパイロットコーディングエージェント</strong>) で実行されます <strong>GitHub インフラストラクチャ</strong>、完全に自律的:</p>

<h3>4.1.ワークフロー</h3>
<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│           CLOUD AGENT WORKFLOW                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. Assign issue/task cho Agent                  │
│     (assign to "copilot" on GitHub)              │
│           ↓                                      │
│  2. Agent tự tạo branch                         │
│           ↓                                      │
│  3. Agent implement changes                     │
│     (code, tests, docs)                          │
│           ↓                                      │
│  4. Agent mở Pull Request                       │
│           ↓                                      │
│  5. Team review PR như bình thường               │
│           ↓                                      │
│  6. Merge khi approved                           │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h3>4.2.クラウドエージェントをトリガーする</h3>

<p><strong>方法 1: GitHub 問題を割り当てる</strong></p>
<pre><code class="language-text">GitHub Issue → Assignees → Assign to "copilot"
</code></pre>

<p><strong>方法 2: 号/PR コメントでの言及</strong></p>
<pre><code class="language-text">@copilot Can you implement the dark mode feature described in this issue?
</code></pre>

<p><strong>方法 3: VS Code から — ローカル セッションをハンドオフする</strong></p>
<p>セッションタイプのドロップダウンを選択→「<strong>クラウド</strong>" → エージェントはクラウド上でタスクを続行します。</p>

<h3>4.3.クラウドエージェントの構成</h3>
<p>ファイルの作成 <code>.github/copilot-coding-agent.yml</code> (またはリポジトリ設定を介して構成します):</p>

<pre><code class="language-yaml"># Validation tools cho Cloud Agent
validation:
  - name: "lint"
    command: "npm run lint"
  - name: "test"
    command: "npm test"
  - name: "build"
    command: "npm run build"
</code></pre>

<h3>4.4.クラウドエージェントの監視</h3>
<ul>
<li>コミットのトレース → セッション ログ (2026 年 3 月の機能)</li>
<li>複数のエージェントセッションを管理するためのセッションフィルター</li>
<li>Copilot の使用状況メトリクスは、アクティブなコーディング エージェント ユーザーを追跡します。</li>
</ul>

<h2 id="5-third-party-agents"><strong>5. サードパーティエージェント</strong></h2>

<p>VS Code は、他のプロバイダーからのエージェントの実行をサポートしています。</p>

<ul>
<li><strong>人間性（クロード）</strong>: 推理力に優れたクロードを代理人として使用する</li>
<li><strong>OpenAI</strong>: GPT モデルをエージェントとして使用します</li>
</ul>

<p>セッションタイプのドロップダウンから選択→「<strong>サードパーティ</strong>」→プロバイダを選択します。</p>

<h2 id="6-hand-off-giua-agent-types"><strong>6. エージェントタイプ間のハンドオフ</strong></h2>

<p>最も優れた機能の 1 つは、次のことが可能です。 <strong>あるエージェント タイプから別のエージェント タイプにタスクを転送する</strong>コンテキストをそのまま維持します。</p>

<pre><code class="language-text">Ví dụ workflow end-to-end:

1. LOCAL (Plan):    Lập kế hoạch feature mới
       ↓ hand off
2. LOCAL (Agent):   Implement interactive, review từng step
       ↓ hand off
3. COPILOT CLI:     Chạy parallel tasks cho testing
       ↓ hand off  
4. CLOUD (Agent):   Tạo PR, team review

Context được chuyển toàn bộ qua mỗi hand off!
</code></pre>

<h3>引き継ぎ方法:</h3>
<ul>
<li><strong>ローカル → CLI</strong>: チャットで、セッション タイプのドロップダウンから [CLI で続行] を選択します。</li>
<li><strong>CLI → クラウド</strong>: CLI セッションで、次のように入力します。 <code>/デリゲート</code></li>
<li><strong>ローカル→クラウド</strong>: セッションタイプのドロップダウンから「クラウド」を選択します</li>
</ul>

<h2 id="7-chon-agent-type-nao"><strong>7. エージェント タイプの選択手順</strong></h2>

<table>
<thead>
<tr>
<th>シナリオ</th>
<th>推奨されるエージェントのタイプ</th>
</tr>
</thead>
<tbody>
<tr>
<td>ブレインストーミング、アイデアの探索</td>
<td>ローカルエージェント（問い合わせ）</td>
</tr>
<tr>
<td>計画の実施</td>
<td>現地代理店（予定）</td>
</tr>
<tr>
<td>インタラクティブなビルド機能</td>
<td>ローカルエージェント</td>
</tr>
<tr>
<td>エディターのコンテキストを使用してデバッグする</td>
<td>ローカルエージェント</td>
</tr>
<tr>
<td>タスクの背景を監視する必要はありません</td>
<td>コパイロット CLI</td>
</tr>
<tr>
<td>多くの概念実証を試してみる</td>
<td>Copilot CLI (ワークツリー)</td>
</tr>
<tr>
<td>レビューチームの PR を作成する</td>
<td>クラウドエージェント</td>
</tr>
<tr>
<td>GitHub の問題を AI に割り当てる</td>
<td>クラウドエージェント</td>
</tr>
<tr>
<td>特定の AI プロバイダーを使用する</td>
<td>サードパーティエージェント</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. ベストプラクティス</strong></h2>

<ul>
<li><strong>実験的なタスクにワークツリーを使用する</strong> — メインブランチには影響しません</li>
<li><strong>Cloud Agent の検証ツールを構成する</strong> — PR品質の確保</li>
<li><strong>使用状況メトリクスを監視する</strong> — コストと効率を追跡する</li>
<li><strong>適切な場合は手を離してください</strong> — ローカルで計画し、クラウドで実装</li>
<li><strong>Cloud Agent PR を慎重に確認する</strong> — 若手開発者によるコードレビューなど</li>
</ul>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<p>GitHub Copilot エージェントは、 <strong>多様な生態系</strong> — 開発ワークフローの各段階に適したエージェントのタイプを選択します。本当の強さは能力にある <strong>シームレスなハンドオフ</strong> タイプ間。</p>

<p>パート 3 からは、Vibe コーディングの最も重要なスキルについて説明します。 <strong>コードの迅速なエンジニアリング</strong> — AI が高品質のコードを生成できるようにプロンプトを作成する方法。</p>
