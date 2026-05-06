---
id: 019f1c30-a601-7001-c001-v1b3c0d10601
title: 'レッスン 17: コードの品質とレビュー — Vibe 責任あるコーディング'
slug: bai-17-code-quality-va-review-vibe-coding-co-trach-nhiem
description: >-
  Vibe コーディングを使用する場合は、コードの品質を確保します。 AI が生成したコードをコードレビューします。リンティング、フォーマット、タイプ
  セーフティ。指標と KPI。アンチパターンは避けるべきです。 Vibe コーディング ワークフローにおけるコード品質のベスト プラクティス。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 17
section_title: 'パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6972" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6972)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="220" x2="1100" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="250" x2="1050" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: コードの品質とレビュー — Vibe</tspan>
      <tspan x="60" dy="42">責任を持ってコーディングする</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-van-de-chat-luong"><strong>1. Vibe コーディングの品質問題</strong></h2>

<p>Andrej Karpathy は、Vibecoding を紹介する際に次のように述べました。 <em>「ただ物事を見たり、発言したり、実行したり、コピー＆ペーストしたりするだけで、ほとんどうまくいきます。」</em> でも <strong>「ほとんど機能します」</strong> 製品コードには十分ではありません。</p>

<p>実際のデータ (2025-2026):</p>
<table>
<thead>
<tr>
<th>ソース</th>
<th>検出</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GitClear (2025)</strong></td>
<td>AI 適用後に「コード チャーン」が増加 - より多くのコードが作成され、編集/削除される</td>
</tr>
<tr>
<td><strong>ベラコード (2026)</strong></td>
<td>AI 生成コードを使用するアプリケーションの 72% には少なくとも 1 つのセキュリティ脆弱性があります</td>
</tr>
<tr>
<td><strong>コードラビット (2026)</strong></td>
<td>AI コードレビューは人間のレビュー担当者が見逃すバグを検出します</td>
</tr>
</tbody>
</table>

<h2 id="2-review-ai-code"><strong>2. AI が生成したコードをレビューする方法</strong></h2>

<h3>2.1. AI コードのチェックリストのレビュー</h3>
<ul>
<li>✅ <strong>論理的な正しさ</strong>: コードは必要なことを実行しますか?</li>
<li>✅ <strong>エッジケース</strong>: AI はヌル、空、境界のケースを見逃すことがよくあります</li>
<li>✅ <strong>エラー処理</strong>: エラーのキャッチは適切ですか?</li>
<li>✅ <strong>セキュリティ</strong>: 入力検証、認証チェック、SQL インジェクション</li>
<li>✅ <strong>パフォーマンス</strong>: N+1 クエリ、不必要な再レンダリング</li>
<li>✅ <strong>ネーミング</strong>: 変数、関数には意味がありますか?</li>
<li>✅ <strong>重複</strong>: AI は既存のコードを再利用する代わりに生成することがよくあります。</li>
</ul>

<h3>2.2. Copilot を使用して独自のコードをレビューする</h3>
<pre><code class="language-text">// Prompt:
Review this code for:
1. Security vulnerabilities
2. Performance issues
3. Edge cases not handled
4. Code that doesn't follow our project conventions
5. Potential bugs

Be critical and thorough. List every issue found.
</code></pre>

<h3>2.3. AI コードではアンチパターンが一般的です</h3>

<table>
<thead>
<tr>
<th>アンチパターン</th>
<th>たとえば</th>
<th>修正</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>神機能</strong></td>
<td>すべてを実行する 200 行の関数 1 つ</td>
<td>より小さな機能に分割する</td>
</tr>
<tr>
<td><strong>コードをコピーして貼り付けます</strong></td>
<td>ロジックを抽出するのではなく繰り返す</td>
<td>共有ユーティリティの抽出</td>
</tr>
<tr>
<td><strong>ハードコードされた値</strong></td>
<td>マジックナンバー、コード内のURL</td>
<td>config/env に移動</td>
</tr>
<tr>
<td><strong>弱いエラー処理</strong></td>
<td>サイレントキャッチまたは一般的なエラー</td>
<td>特定のエラー処理</td>
</tr>
<tr>
<td><strong>検証が欠落している</strong></td>
<td>ユーザー入力を完全に信頼します</td>
<td>境界で検証する</td>
</tr>
<tr>
<td><strong>オーバーエンジニアリング</strong></td>
<td>抽象化が早すぎる、1 件の工場出荷時のパターン</td>
<td>YAGNI — 必要な場合にのみ構築する</td>
</tr>
</tbody>
</table>

<h2 id="3-automated-quality"><strong>3. 自動化された品質ゲート</strong></h2>

<h3>3.1. ESLint + Prettier + Copilot フック</h3>
<pre><code class="language-json">// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "github.copilot.chat.hooks": {
    "postSave": [
      {
        "command": "npx eslint --fix ${file}",
        "pattern": "**/*.{ts,tsx}"
      }
    ]
  }
}
</code></pre>

<h3>3.2.事前コミットフック</h3>
<pre><code class="language-json">// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  }
}
</code></pre>

<h3>3.3. CI/CDの品質チェック</h3>
<pre><code class="language-yaml"># .github/workflows/quality.yml
name: Code Quality
on: [pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx tsc --noEmit          # Type check
      - run: npx eslint .              # Lint
      - run: npm test -- --coverage    # Tests + coverage
      - run: npx knip                  # Dead code detection
</code></pre>

<h2 id="4-type-safety"><strong>4. タイプ セーフティ — 防御の第一線</strong></h2>

<p>TypeScript の厳密モードは、AI が作成する多くのバグを検出します。</p>

<pre><code class="language-json">// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
</code></pre>

<pre><code class="language-text">// Prompt mẫu yêu cầu type safety:
Ensure all functions have explicit return types.
Use discriminated unions for API responses.
No 'any' types — use 'unknown' with type guards instead.
</code></pre>

<h2 id="5-test-coverage"><strong>5. テストカバレッジ戦略</strong></h2>

<p>AIコードが必要 <strong>もっとテストしてください</strong>、それ以上:</p>

<pre><code class="language-text">// Prompt:
Write tests for the TaskService focusing on:
1. Happy path for each method
2. Edge cases: empty input, null values, max length
3. Authorization: user can only access own projects
4. Concurrent modifications
5. Database constraint violations
</code></pre>

<h3>最小カバレッジ目標:</h3>
<table>
<thead>
<tr>
<th>レイヤー</th>
<th>ターゲット</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ビジネスロジック</strong></td>
<td>90%以上</td>
<td>コアドメインは正確である必要がある</td>
</tr>
<tr>
<td><strong>APIエンドポイント</strong></td>
<td>80%以上</td>
<td>契約の結合テスト</td>
</tr>
<tr>
<td><strong>UIコンポーネント</strong></td>
<td>70%以上</td>
<td>UXのインタラクションテスト</td>
</tr>
<tr>
<td><strong>公共事業</strong></td>
<td>95%以上</td>
<td>純粋な関数はテストが簡単です</td>
</tr>
</tbody>
</table>

<h2 id="6-metrics-va-kpis"><strong>6. Vibe コーディングの指標と KPI</strong></h2>

<table>
<thead>
<tr>
<th>メトリック</th>
<th>何を測定するのか?</th>
<th>ターゲット</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>合格率</strong></td>
<td>AI による提案の受け入れ率 (%)</td>
<td>30 ～ 40% (高すぎる = レビューなし)</td>
</tr>
<tr>
<td><strong>コードチャーン</strong></td>
<td>2 週間以内に編集/削除されたコードの割合</td>
<td><25%</td>
</tr>
<tr>
<td><strong>バグ密度</strong></td>
<td>1000 LOC あたりのバグ数</td>
<td>AI以前と比較して削減または維持</td>
</tr>
<tr>
<td><strong>コメントをレビューする</strong></td>
<td>レビュー担当者が AI コードの修正をリクエストした回数</td>
<td>時間の経過とともに減少します</td>
</tr>
<tr>
<td><strong>PR マージまでの時間</strong></td>
<td>PR 作成からマージまでの時間</td>
<td>減額されましたが、審査スキップによるものではありません</td>
</tr>
</tbody>
</table>

<h2 id="7-best-practices"><strong>7. ベストプラクティスの概要</strong></h2>

<ol>
<li><strong>盲目的に受け入れないでください</strong>: AI が生成した各行を読み取ります</li>
<li><strong>AIに説明してもらう</strong>: 「なぜこのアプローチを選んだのか説明してください」</li>
<li><strong>可能な場合は最初にテストする</strong>: 最初にテストを作成し、AI を使用して実装します</li>
<li><strong>インクリメンタル生成</strong>: 各小さなパーツを生成し、続行する前に確認します。</li>
<li><strong>カスタム命令</strong>: 合格したコーディング標準を強制します <code>副操縦士の指示.md</code></li>
<li><strong>自動化ゲート</strong>: CI/CD は人間のレビュー担当者が見逃したバグを発見します</li>
<li><strong>品質を測定する</strong>: AI が助けになっているのか害を与えているのかを知るために指標を追跡する</li>
</ol>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<p><strong>責任を持って Vibe コーディングを行う</strong> ＝AIのスピードを活かす＋人間工学の品質を維持する。</p>

<p>生成された AI コードをレビューする必要がある <strong>もっと慎重に</strong> 人間が書いたコード。理由は次のとおりです。</p>
<ul>
<li>AIはビジネスコンテキストを理解できない</li>
<li>AI は「正しく動作する」コードよりも「正しく見える」コードを優先します</li>
<li>AI は現在プロジェクトにどのようなコードがあるのかを知りません</li>
</ul>

<p>次の記事: <strong>Vibe コーディングのセキュリティ</strong> — 一般的なセキュリティ脆弱性とその回避方法。</p>
