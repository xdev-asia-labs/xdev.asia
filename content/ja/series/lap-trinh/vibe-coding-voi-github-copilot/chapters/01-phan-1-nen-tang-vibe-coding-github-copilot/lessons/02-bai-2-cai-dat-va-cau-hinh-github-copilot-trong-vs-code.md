---
id: 019f1c30-a102-7001-c001-v1b3c0d10102
title: 'レッスン 2: VS Code で GitHub Copilot をインストールして構成する'
slug: bai-2-cai-dat-va-cau-hinh-github-copilot-trong-vs-code
description: >-
  GitHub Copilot (Free/Pro/Pro+/Enterprise) にサインアップし、拡張機能をインストールし、設定を構成し、モデル
  (GPT-5.4、Claude、Gemini) を選択し、自動モデル選択、キーボード ショートカット、および基本的なワークフローを行います。
duration_minutes: 45
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: Vibe コーディング プラットフォームと GitHub Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6782" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6782)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1003" cy="199" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="809" cy="225" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="108" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: GitHub Copilot のインストールと構成</tspan>
      <tspan x="60" dy="42">VSコードで</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Vibe コーディング プラットフォームと GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cac-goi-github-copilot"><strong>1. GitHub コパイロット パッケージ (2026)</strong></h2>

<p>GitHub Copilot は、個人や企業に適したさまざまなプランを提供しています。</p>

<table>
<thead>
<tr>
<th>パッケージ</th>
<th>価格</th>
<th>主な特徴</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>副操縦士無料</strong></td>
<td>$0/月</td>
<td>インラインでの提案とチャットでのやりとりを月ごとに制限します。自動モデルの選択。</td>
</tr>
<tr>
<td><strong>コパイロット プロ</strong></td>
<td>$10/月</td>
<td>無制限の完了とチャット。多くのモデル。コパイロット メモリ (プレビュー)。</td>
</tr>
<tr>
<td><strong>コパイロット プロ+</strong></td>
<td>$39/月</td>
<td>プレミアム モデル、Copilot メモリ、クラウド エージェント、より高いレート制限。</td>
</tr>
<tr>
<td><strong>副操縦士事業</strong></td>
<td>ユーザーあたり月額 19 ドル</td>
<td>組織のポリシー、コンテンツの除外、監査ログ、IP 補償。</td>
</tr>
<tr>
<td><strong>副操縦士エンタープライズ</strong></td>
<td>ユーザーあたり月額 39 ドル</td>
<td>ナレッジベース、微調整されたモデル、高度なセキュリティ。</td>
</tr>
</tbody>
</table>

<p><strong>特に学生向け:</strong> GitHub はプログラムを通じて Copilot を無料で提供します <strong>GitHub 教育</strong> (GitHub 学生開発者パック)。</p>

<h2 id="2-cai-dat-github-copilot"><strong>2. VS Code に GitHub Copilot をインストールする</strong></h2>

<h3>ステップ 1: VS コードをインストールする</h3>
<p>からダウンロードしてインストールします <a href="https://code.visualstudio.com/">code.visualstudio.com</a>。使用を推奨するバージョン <strong>安定した</strong> (または <strong>インサイダー</strong> 最新の機能を体験したい場合)。</p>

<h3>ステップ 2: GitHub Copilot にログインする</h3>
<ol>
<li>VS コードを開く</li>
<li>ホバーイン <strong>副操縦士のアイコン</strong> ステータスバー(右下隅)</li>
<li>選択 <strong>「副操縦士の設定」</strong></li>
<li>GitHub アカウントにログインします</li>
<li>定期購読をお持ちでない場合 → 自動的に定期購読されます <strong>副操縦士無料</strong></li>
</ol>

<pre><code class="language-text">Status Bar: [Copilot Icon] → "Set up Copilot" → Sign in with GitHub
</code></pre>

<h3>ステップ 3: インストールを確認する</h3>
<p>ログインに成功した後:</p>
<ul>
<li>ステータス バーのコパイロット アイコンがアクティブな状態に変わります</li>
<li>任意のコード ファイルを開く → 入力を開始する → インライン候補 (ゴースト テキスト) を表示する</li>
<li>チャットビューを開く <code>Ctrl+Cmd+I</code> (macOS) または <code>Ctrl+Alt+I</code> (Windows/Linux)</li>
</ul>

<h2 id="3-chon-ai-model"><strong>3. AIモデルの選択</strong></h2>

<p>GitHub Copilot を使用すると、各タスクに適切な AI モデルを選択できます。</p>

<h3>現在のモデル (2026 年 3 月):</h3>

<table>
<thead>
<tr>
<th>モデル</th>
<th>プロバイダー</th>
<th>特徴</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GPT-5.4</strong></td>
<td>OpenAI</td>
<td>コーディングに最適な最新、最強。 2026 年 3 月から一般提供開始。</td>
</tr>
<tr>
<td><strong>GPT-5.4ミニ</strong></td>
<td>OpenAI</td>
<td>より軽く、より速く、単純な作業に適しています。</td>
</tr>
<tr>
<td><strong>GPT-5.3-コーデックス</strong></td>
<td>OpenAI</td>
<td>コード生成用に最適化された長期サポート。</td>
</tr>
<tr>
<td><strong>クロード (人族)</strong></td>
<td>人間的</td>
<td>推理力に優れ、指示は従う。</td>
</tr>
<tr>
<td><strong>ジェミニ 3.1 プロ</strong></td>
<td>Google</td>
<td>長いコンテキスト。JetBrains/Xcode/Eclipse をサポートします。</td>
</tr>
<tr>
<td><strong>Grok コード高速 1</strong></td>
<td>xAI</td>
<td>高速で、Copilot Free 自動選択で使用されます。</td>
</tr>
</tbody>
</table>

<h3>自動モデル選択</h3>
<p>デフォルトでは、Copilot が使用されます <strong>自動</strong> — 各プロンプトに対して最適なモデルを自動的に選択します。クリックすると変更できます <strong>モデルのドロップダウン</strong> チャットビューで。</p>

<pre><code class="language-text">Chat view → Model dropdown (góc trên) → Chọn model cụ thể hoặc "Auto"
</code></pre>

<h2 id="4-cau-hinh-settings"><strong>4. 重要な設定を構成する</strong></h2>

<p>VS コード設定を開く (<code>コマンド+、</code>）「副操縦士」を検索します。</p>

<h3>4.1.インライン提案</h3>
<pre><code class="language-json">{
  // Bật/tắt inline suggestions
  "editor.inlineSuggest.enabled": true,

  // Bật Next Edit Suggestions (NES)
  "editor.inlineSuggest.edits.enabled": true,

  // Tự động hiển thị suggestions
  "github.copilot.editor.enableAutoCompletions": true
}
</code></pre>

<h3>4.2.エージェントモード</h3>
<pre><code class="language-json">{
  // Bật Agent mode (quan trọng!)
  "chat.agent.enabled": true,

  // Cho phép agent chạy terminal commands
  "github.copilot.chat.agent.runCommands": true
}
</code></pre>

<h3>4.3.特定の言語</h3>
<pre><code class="language-json">{
  // Tắt Copilot cho một số ngôn ngữ
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "yaml": true
  }
}
</code></pre>

<h2 id="5-keyboard-shortcuts"><strong>5. 覚えておきたいキーボードショートカット</strong></h2>

<table>
<thead>
<tr>
<th>ショートカット (macOS)</th>
<th>ショートカット (Win/Linux)</th>
<th>機能</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>タブ</code></td>
<td><code>タブ</code></td>
<td>インライン提案を受け入れる</td>
</tr>
<tr>
<td><code>Esc</code></td>
<td><code>Esc</code></td>
<td>提案を却下する</td>
</tr>
<tr>
<td><code>オプション+]</code></td>
<td><code>Alt+]</code></td>
<td>次の提案</td>
</tr>
<tr>
<td><code>オプション+[</code></td>
<td><code>Alt+[</code></td>
<td>以前の提案</td>
</tr>
<tr>
<td><code>コマンド+→</code></td>
<td><code>Ctrl+→</code></td>
<td>一言ずつ受け入れる</td>
</tr>
<tr>
<td><code>Cmd+I</code></td>
<td><code>Ctrl+I</code></td>
<td>インラインチャット</td>
</tr>
<tr>
<td><code>Ctrl+Cmd+I</code></td>
<td><code>Ctrl+Alt+I</code></td>
<td>チャットビューを開く</td>
</tr>
</tbody>
</table>

<h2 id="6-first-interactions"><strong>6. 最初の対話</strong></h2>

<h3>6.1.インライン提案をテストする</h3>
<p>ファイルの作成 <code>こんにちは。</code> そして入力を開始します:</p>

<pre><code class="language-python"># Function to calculate fibonacci numbers
def fibonacci(</code></pre>

<p>Copilot は関数本体を自動的に提案します。プレス <code>タブ</code> 受け入れること。</p>

<h3>6.2.テストチャットビュー</h3>
<p>チャットビューを開く (<code>Ctrl+Cmd+I</code>) を入力し、次のように入力します。</p>

<pre><code class="language-text">Create a simple Python script that reads a CSV file and generates a bar chart using matplotlib
</code></pre>

<h3>6.3.テストエージェントモード</h3>
<p>チャットビューで、選択します <strong>エージェント</strong> ドロップダウンから次のように入力します。</p>

<pre><code class="language-text">Create a simple todo web app with HTML, CSS, and JavaScript. Make it modern and responsive.
</code></pre>

<p>エージェントが自動的にファイルを作成し、コードを記述し、プロジェクトをセットアップする様子を観察します。</p>

<h2 id="7-cau-truc-giao-dien"><strong>7. Copilot インターフェース構造を理解する</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│  VS Code + GitHub Copilot                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌────────────────────────────┐   │
│  │ Chat     │  │ Editor                     │   │
│  │ View     │  │                            │   │
│  │          │  │  [Ghost text suggestions]   │   │
│  │ Agent ▼  │  │                            │   │
│  │ Model ▼  │  │  Cmd+I → Inline Chat      │   │
│  │          │  │                            │   │
│  │ Sessions │  │                            │   │
│  │ list     │  │                            │   │
│  └──────────┘  └────────────────────────────┘   │
│                                                  │
│  Status Bar: [Copilot ●] [Model: Auto]          │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="8-troubleshooting"><strong>8. 一般的な問題のトラブルシューティング</strong></h2>

<table>
<thead>
<tr>
<th>問題</th>
<th>解決策</th>
</tr>
</thead>
<tbody>
<tr>
<td>提案が表示されない</td>
<td>ステータス バーの Copilot アイコンをチェックし、サインインしていることを確認してください</td>
</tr>
<tr>
<td>エージェントモードが表示されない</td>
<td>オンにする <code>チャットエージェント有効</code> 設定で</td>
</tr>
<tr>
<td>低品質の提案</td>
<td>モデルを変更してコンテキスト (コメント、ファイルを開く) を追加してみてください。</td>
</tr>
<tr>
<td>レート制限に達しました</td>
<td>Free から Pro にアップグレードするか、新しい月がリセットされるまで待ちます</td>
</tr>
<tr>
<td>拡張機能の競合</td>
<td>他の AI 拡張機能 (Tabnine、Codeium など) をオフにする</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<p>Vibe コーディングを始める準備ができました。行われた内容の概要:</p>

<ul>
<li>✅ Copilot パッケージを理解し、適切なパッケージを選択する</li>
<li>✅ VS Code で GitHub Copilot をインストールしてログインします</li>
<li>✅ 適切な AI モデルを選択します</li>
<li>✅ 重要な設定を構成する</li>
<li>✅ キーボードショートカットを理解する</li>
<li>✅ インライン提案、チャット、エージェント モードのテストに成功</li>
</ul>

<p>次の記事ではさらに深く掘り下げていきます <strong>インラインの提案と次の編集の提案</strong> — 毎日のコーディングを高速化するのに役立つコア機能。</p>
