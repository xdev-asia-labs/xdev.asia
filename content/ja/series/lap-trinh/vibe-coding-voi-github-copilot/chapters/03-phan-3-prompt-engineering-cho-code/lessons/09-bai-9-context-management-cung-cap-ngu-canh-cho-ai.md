---
id: 019f1c30-a302-7001-c001-v1b3c0d10302
title: 'レッスン 9: コンテキスト管理 — AI にコンテキストを提供する'
slug: bai-9-context-management-cung-cap-ngu-canh-cho-ai
description: >-
  コンテキストウィンドウの役割。ファイル、フォルダー、選択内容を添付する方法。 #file、#selection、#editor
  参照。ワークスペースのインデックス作成。コードベースを認識したプロンプト。コンテキストを簡潔かつ効果的に保つためのヒント。新しいセッションが必要になるのはいつか、セッションを継続する必要があるのはいつか。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: コードの迅速なエンジニアリング'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7287" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7287)"/>

  <!-- Decorations -->
  <g>
    <circle cx="909" cy="257" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="718" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1027" cy="235" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="836" cy="224" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="107" x2="1100" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="137" x2="1050" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: コンテキスト管理 — 言語の提供</tspan>
      <tspan x="60" dy="42">AIのシーン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: コードの迅速なエンジニアリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-context-la-gi"><strong>1. コンテキストとは何ですか?なぜ重要ですか?</strong></h2>

<p>AIモデルは中身を「見る」ことしかできない <strong>コンテキストウィンドウ</strong> — リクエストごとに処理するテキストの量。十分なコンテキストを提供しない場合、AI は「推測」し、多くの場合、間違った推測をします。</p>

<pre><code class="language-text">Context window: [System prompt + Custom instructions + Your prompt + Attached files + History]
                ↑ tất cả phải fit trong giới hạn tokens của model
</code></pre>

<p><strong>良いコンテキスト = 良いコード。</strong> これが効果的な Vibe コーディングの原則 1 です。</p>

<h2 id="2-cac-loai-context"><strong>2. Copilot のコンテキストの種類</strong></h2>

<h3>2.1.暗黙的なコンテキスト (自動)</h3>
<p>Copilot は以下を自動的に収集します。</p>
<ul>
<li><strong>ファイルはアクティブです</strong> エディターで</li>
<li><strong>選択</strong> 現在(ある場合)</li>
<li><strong>タブを開く</strong></li>
<li><strong>ワークスペースの構造</strong> (ファイル/フォルダーツリー)</li>
<li><strong>診断</strong> (エラー、警告)</li>
<li><strong>端子出力</strong> 最寄りの</li>
</ul>

<h3>2.2.明示的なコンテキスト (あなたが提供)</h3>
<p>積極的に添付するもの:</p>
<ul>
<li><strong>#ファイル</strong>: 特定のファイルを添付します</li>
<li><strong>#選択</strong>: 選択されているコード</li>
<li><strong>#エディター</strong>: エディタ内の表示領域全体</li>
<li><strong>#コードベース</strong>: ワークスペースでの検索セマンティクス</li>
<li><strong>#terminalLastCommand</strong>: 実行したコマンドの出力</li>
<li><strong>ドラッグ＆ドロップ</strong> ファイルをチャットに追加する</li>
<li><strong>画像</strong>: スクリーンショットを添付 (2026 年 3 月の機能)</li>
</ul>

<h2 id="3-su-dung-context-variables"><strong>3. コンテキスト変数を使用する</strong></h2>

<h3>3.1. #file — 特定のファイルを添付する</h3>
<pre><code class="language-text">// Trong Chat view:
Look at #file:src/models/User.ts and #file:src/services/AuthService.ts
and create a password reset flow following the same patterns.
</code></pre>

<p>入力するとき <code>#ファイル:</code>, VS Code には、選択できるファイル ピッカーが表示されます。</p>

<h3>3.2. #selection — コードが選択中です</h3>
<pre><code class="language-text">// Select đoạn code trong editor, rồi trong Chat:
Explain #selection and suggest how to optimize it for performance.
</code></pre>

<h3>3.3. #codebase — ワークスペースでの検索セマンティクス</h3>
<pre><code class="language-text">// Copilot tự tìm files liên quan trong codebase:
#codebase How is authentication implemented in this project?
Show me the auth middleware and token verification logic.
</code></pre>

<h3>3.4. #terminalLastCommand — 出力ターミナル</h3>
<pre><code class="language-text">// Sau khi chạy test fail trong terminal:
#terminalLastCommand Fix the failing tests. Analyze the error output
and make the necessary code changes.
</code></pre>

<h2 id="4-workspace-indexing"><strong>4. ワークスペースのインデックス作成</strong></h2>

<p>VS Code は、Copilot がコードベースを理解できるように、ワークスペースに自動的にインデックスを付けます。</p>

<ul>
<li><strong>セマンティックインデックス</strong>: コードの意味を理解する (関数、クラス、関係)</li>
<li><strong>シンボルインデックス</strong>：関数名、変数、型</li>
<li><strong>ファイル構造</strong>: プロジェクトの構造を知る</li>
</ul>

<p>エージェントを実行すると、次のようなツールを使用できます。 <code>検索します。検索</code>、 <code>リストディレクトリ</code>、 <code>読む</code> 提供されたコンテキストに基づいてだけでなく、コードベースを積極的に探索します。</p>

<h2 id="5-chien-luoc-context"><strong>5. 効果的なコンテキスト戦略</strong></h2>

<h3>5.1.プロンプトが表示される前に正しいファイルを開きます</h3>
<pre><code class="language-text">// Trước khi viết prompt "Create UserService":
// Mở các files liên quan trong editor tabs:
Tab 1: models/User.ts        → Copilot biết User schema
Tab 2: services/AuthService.ts → Copilot biết coding pattern
Tab 3: routes/authRoutes.ts   → Copilot biết route conventions
Tab 4: tests/auth.test.ts     → Copilot biết testing pattern
</code></pre>

<h3>5.2.既存のパターンを参照する</h3>
<pre><code class="language-text">// Thay vì mô tả pattern từ đầu:
Create a ProductService following the exact same pattern as
#file:src/services/UserService.ts — same error handling,
same repository pattern, same validation approach.
</code></pre>

<h3>5.3.明示的な制約を提供する</h3>
<pre><code class="language-text">// Context about project conventions:
Our project uses:
- Prisma for database (schema at #file:prisma/schema.prisma)
- Zod for validation (see pattern in #file:src/schemas/userSchema.ts)
- Custom AppError class for errors (#file:src/utils/AppError.ts)

Now create the OrderService with CRUD operations.
</code></pre>

<h2 id="6-new-session-vs-continue"><strong>6. 新しいセッションと継続セッションはいつですか?</strong></h2>

<table>
<thead>
<tr>
<th>状況</th>
<th>アクション</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>同じ機能を継続する</td>
<td><strong>続ける</strong></td>
<td>コンテキストと履歴を保持する</td>
</tr>
<tr>
<td>まったく新しい機能</td>
<td><strong>新しいセッション</strong></td>
<td>コンテキストがきれいでノイズがない</td>
</tr>
<tr>
<td>コンテキストが長すぎます</td>
<td><strong>新しいセッション</strong> + 概要</td>
<td>コンテキストのオーバーフローを回避する</td>
</tr>
<tr>
<td>エージェントが間違った方向に進んでしまう</td>
<td><strong>新しいセッション</strong> +言い換え</td>
<td>歴史の間違いをリセットする</td>
</tr>
<tr>
<td>デバッグ関連の問題</td>
<td><strong>続ける</strong></td>
<td>AIはまずそれを修正する方法を知る必要がある</td>
</tr>
</tbody>
</table>

<h3>ヒント: 新しいセッションを作成するときの概要</h3>
<pre><code class="language-text">// Khi context quá dài, tạo new session với summary:
Context from previous session:
- We're building a task management app with Next.js 15 + Prisma
- Backend API is done (auth, CRUD for tasks, projects)
- Database schema is finalized
- Currently working on frontend

Continue from: Create the Task list page component with
filtering and sorting capabilities.
</code></pre>

<h2 id="7-images-as-context"><strong>7. コンテキストとしての画像 (2026 年の機能)</strong></h2>

<p>2026 年 3 月からは、 <strong>画像を添付する</strong> エージェントセッションに移動します。</p>

<ul>
<li>UIデザインのスクリーンショット→「このUIを構築する」</li>
<li>エラーのスクリーンショット → 「このエラーを修正する」</li>
<li>図/ワイヤーフレーム → 「このアーキテクチャを実装する」</li>
<li>Figma エクスポート → 「このデザインを React コンポーネントに変換」</li>
</ul>

<h2 id="8-anti-patterns"><strong>8. アンチパターンは避けるべきです</strong></h2>

<ul>
<li><strong>コードベース全体をダンプする</strong>: コンテキストが多すぎる = ノイズ、AI が混乱する</li>
<li><strong>コンテキストが提供されていません</strong>: AI はすべてを推測する必要があります</li>
<li><strong>添付ファイルは関係ありません</strong>: コンテキストウィンドウを無駄にする</li>
<li><strong>継続セッションが長すぎます</strong>: コンテキストの劣化、AI は最初の情報を「忘れる」</li>
<li><strong>フォーマットなしのコピー＆ペーストエラー</strong>: AI に混乱を引き起こす</li>
</ul>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<p>コンテキスト管理はスキルです <strong>Vibe コーディングの品質を決定する</strong>:</p>

<ul>
<li>✅ 正しいファイルを開く → 適切な暗黙的コンテキスト</li>
<li>✅ #file、#selection、#codebase → 明示的なコンテキストを正しく使用する</li>
<li>✅ 既存のパターンを参照 → 一貫した出力</li>
<li>✅ コンテキストが肥大化した場合の新しいセッション → 劣化を回避</li>
<li>✅ UI タスクの画像を添付 → ビジュアルコンテキスト</li>
</ul>

<p>次の曲はカバーになります <strong>高度なプロンプトパターン</strong> — スラッシュ コマンド、チャット参加者、および独自のプロンプト ライブラリを構築する方法。</p>
