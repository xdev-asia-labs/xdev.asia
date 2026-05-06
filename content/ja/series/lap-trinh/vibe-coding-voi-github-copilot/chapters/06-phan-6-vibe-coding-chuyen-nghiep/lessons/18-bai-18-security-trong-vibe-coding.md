---
id: 019f1c30-a602-7001-c001-v1b3c0d10602
title: 'レッスン 18: Vibe コーディングにおけるセキュリティ'
slug: bai-18-security-trong-vibe-coding
description: >-
  AI によって生成されたコードによくあるセキュリティ脆弱性。 OWASP トップ 10 と Vibe
  コーディング。即時注射のリスク。安全なコーディングパターン。セキュリティスキャンツール。セキュリティのためのコードレビュー。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 18
section_title: 'パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3684" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3684)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1080" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: Vibe コーディングにおけるセキュリティ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-thuc-trang"><strong>1. AI 生成コードのセキュリティの現状</strong></h2>

<p>2025 年から 2026 年にかけて Vibe コーディングがブームになりますが、それに伴いセキュリティ上の深刻な懸念が生じます。</p>

<table>
<thead>
<tr>
<th>研究</th>
<th>結果</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ベラコード (2026)</strong></td>
<td>AI コードを使用するアプリの 72% にセキュリティ上の欠陥がある</td>
</tr>
<tr>
<td><strong>スタンフォード (2025)</strong></td>
<td>AI を使用する開発者は安全性の低いコードを作成し、セキュリティについてはより自信を持っています</td>
</tr>
<tr>
<td><strong>GitHub (2026)</strong></td>
<td>AI コード スキャンは、AI 生成コードと併用すると 3 倍多くの問題を検出します</td>
</tr>
</tbody>
</table>

<p><strong>核心的な問題</strong>: AI は、セキュリティ上の脆弱性のあるコードを含む公開コードに基づいてトレーニングされています。 AIは差別しない <strong>コード例</strong> (チュートリアル、StackOverflow) <strong>プロダクションコード</strong>。</p>

<h2 id="2-owasp-top-10"><strong>2. OWASP トップ 10 と Vibe コーディング</strong></h2>

<h3>2.1.注射 (A03:2021)</h3>
<p>AI は安全でない SQL クエリを生成することがよくあります。</p>

<pre><code class="language-typescript">// ❌ AI có thể generate:
const users = await db.query(
  `SELECT * FROM users WHERE email = '${email}'`
);

// ✅ Phải yêu cầu:
const users = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);
</code></pre>

<pre><code class="language-text">// Prompt an toàn:
Always use parameterized queries. Never concatenate user input
into SQL strings. Use ORM methods when available.
</code></pre>

<h3>2.2.認証の失敗 (A07:2021)</h3>
<pre><code class="language-typescript">// ❌ AI có thể generate weak JWT:
jwt.sign(payload, 'secret123')  // Hardcoded secret!

// ✅ Secure version:
jwt.sign(payload, process.env.JWT_SECRET!, {
  expiresIn: '15m',
  algorithm: 'RS256',  // Asymmetric
})
</code></pre>

<h3>2.3.機密データの漏洩 (A02:2021)</h3>
<pre><code class="language-typescript">// ❌ AI có thể log sensitive data:
console.log('User login:', { email, password });
res.json({ user: { ...user } });  // Includes password hash!

// ✅ Chỉ return cần thiết:
const { password, ...safeUser } = user;
res.json({ user: safeUser });
</code></pre>

<h3>2.4.安全でない直接オブジェクト参照 (A01:2021)</h3>
<pre><code class="language-typescript">// ❌ AI thường bỏ auth check:
app.get('/api/tasks/:id', async (req, res) => {
  const task = await prisma.task.findUnique({
    where: { id: req.params.id },
  });
  res.json(task);  // Any user can access any task!
});

// ✅ Luôn check ownership:
app.get('/api/tasks/:id', auth, async (req, res) => {
  const task = await prisma.task.findFirst({
    where: {
      id: req.params.id,
      project: {
        members: { some: { userId: req.userId } },
      },
    },
  });
  if (!task) return res.status(404).json({ error: 'Not found' });
  res.json(task);
});
</code></pre>

<h2 id="3-common-vulnerabilities"><strong>3. AI コードの一般的な脆弱性</strong></h2>

<table>
<thead>
<tr>
<th>脆弱性</th>
<th>AIの頻度</th>
<th>例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ハードコードされたシークレット</strong></td>
<td>非常に高い</td>
<td>コード内の API キー、パスワード</td>
</tr>
<tr>
<td><strong>入力検証が欠落している</strong></td>
<td>高</td>
<td>ユーザー入力を検証しない</td>
</tr>
<tr>
<td><strong>弱い暗号通貨</strong></td>
<td>高</td>
<td>bcrypt、SHA-256 の代わりに MD5</td>
</tr>
<tr>
<td><strong>認証チェックが欠落している</strong></td>
<td>平均</td>
<td>エンドポイントがユーザーを検証しない</td>
</tr>
<tr>
<td><strong>SQLインジェクション</strong></td>
<td>平均</td>
<td>文字列連結クエリ</td>
</tr>
<tr>
<td><strong>XSS</strong></td>
<td>平均</td>
<td>HTML の直接レンダリング</td>
</tr>
<tr>
<td><strong>パストラバーサル</strong></td>
<td>低い</td>
<td>サニタイズされていないファイルパス</td>
</tr>
</tbody>
</table>

<h2 id="4-prompt-injection"><strong>4. 即時注射のリスク</strong></h2>

<p>MCP サーバーを使用する場合、または AI を介してユーザー入力を処理する場合:</p>

<pre><code class="language-text">// User nhập vào form:
"; DROP TABLE users; --

// Nếu AI xử lý raw input:
AI có thể generate code chứa malicious input
</code></pre>

<h3>予防:</h3>
<ul>
<li>ユーザー入力を AI プロンプトに直接渡さないでください</li>
<li>AI に送信する前に入力をサニタイズする</li>
<li>実行前に AI 出力を検証する</li>
<li>拒否リストの代わりに許可リストを使用する</li>
</ul>

<h2 id="5-secure-prompting"><strong>5. 安全なプロンプトパターン</strong></h2>

<h3>5.1.セキュリティのためのカスタム指示</h3>
<pre><code class="language-markdown"><!-- .github/copilot-instructions.md -->
## Security Requirements

- NEVER hardcode secrets, API keys, or passwords
- ALWAYS use parameterized queries, never string concatenation for SQL
- ALWAYS validate and sanitize user input at API boundaries
- ALWAYS check authorization before returning data
- NEVER log sensitive data (passwords, tokens, PII)
- Use bcrypt with cost factor >= 12 for password hashing
- Use HTTPS for all external API calls
- Set security headers (CORS, CSP, HSTS)
- Implement rate limiting on auth endpoints
</code></pre>

<h3>5.2.セキュリティ第一のプロンプト</h3>
<pre><code class="language-text">// Thay vì:
Create a login endpoint

// Dùng:
Create a secure login endpoint with:
- Rate limiting (5 attempts per minute per IP)
- Password hashing with bcrypt (cost 12)
- JWT with short expiry (15 min) + refresh token
- Account lockout after 10 failed attempts
- Audit logging for failed attempts
- No password in response or logs
</code></pre>

<h2 id="6-security-tools"><strong>6. セキュリティスキャンツール</strong></h2>

<h3>6.1. GitHub の高度なセキュリティ</h3>
<pre><code class="language-text">GitHub Secret Scanning: phát hiện secrets trong code
CodeQL: static analysis cho security vulnerabilities
Dependabot: scan dependencies cho known vulnerabilities
</code></pre>

<h3>6.2. CI/CD パイプライン内</h3>
<pre><code class="language-yaml"># .github/workflows/security.yml
name: Security Scan
on: [pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # Dependency scan
      - run: npm audit --audit-level=high

      # Secret detection
      - uses: trufflesecurity/trufflehog@main
        with:
          path: ./

      # SAST scan
      - uses: github/codeql-action/analyze@v3
        with:
          languages: javascript-typescript

      # Container scan (if using Docker)
      - uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          scan-ref: .
</code></pre>

<h3>6.3. IDEレベルのスキャン</h3>
<pre><code class="language-text">// Copilot itself can help with security review:
@workspace /review Check all API endpoints for:
1. Missing authentication middleware
2. Missing input validation
3. SQL injection vulnerabilities
4. Hardcoded secrets
5. Sensitive data in responses
</code></pre>

<h2 id="7-secure-coding-patterns"><strong>7. Vibe コーディングの安全なコーディング パターン</strong></h2>

<h3>パターン 1: 最初にミドルウェアを検証する</h3>
<pre><code class="language-typescript">// Yêu cầu AI tạo validation middleware:
const validateRequest = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.issues,
      });
    }
    req.body = result.data;  // Use validated data
    next();
  };
};
</code></pre>

<h3>パターン 2: 認可ガード</h3>
<pre><code class="language-typescript">// Resource-level authorization:
const canAccessProject = async (userId: string, projectId: string) => {
  const member = await prisma.projectMember.findUnique({
    where: {
      userId_projectId: { userId, projectId },
    },
  });
  return member !== null;
};
</code></pre>

<h3>パターン 3: 出力のサニタイズ</h3>
<pre><code class="language-typescript">// Chỉ return fields cần thiết:
const sanitizeUser = (user: User) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  // Exclude: password, resetToken, etc.
});
</code></pre>

<h2 id="8-security-checklist"><strong>8. Vibe コーディングのセキュリティ チェックリスト</strong></h2>

<table>
<thead>
<tr>
<th>#</th>
<th>チェックする</th>
<th>いつ</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>ハードコードされたシークレットはありません</td>
<td>すべてのコミット</td>
</tr>
<tr>
<td>2</td>
<td>すべてのエンドポイントでの入力検証</td>
<td>新しい各エンドポイント</td>
</tr>
<tr>
<td>3</td>
<td>保護されたルートの認証ミドルウェア</td>
<td>それぞれの新ルート</td>
</tr>
<tr>
<td>4</td>
<td>パラメータ化されたクエリ</td>
<td>各DBクエリ</td>
</tr>
<tr>
<td>5</td>
<td>ログ/応答に機密データがない</td>
<td>各APIのレスポンス</td>
</tr>
<tr>
<td>6</td>
<td>依存関係には CVE がありません</td>
<td>毎週</td>
</tr>
<tr>
<td>7</td>
<td>設定されたセキュリティヘッダー</td>
<td>1 回 + 検証</td>
</tr>
<tr>
<td>8</td>
<td>認証エンドポイントのレート制限</td>
<td>1 回 + 検証</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<p>Vibe コーディングのセキュリティには次の要件が必要です <strong>異なる考え方</strong>:</p>

<ul>
<li><strong>信頼するが検証する</strong>: AI コードには常にセキュリティ レビューが必要です</li>
<li><strong>多層防御</strong>: 複数層のセキュリティチェック</li>
<li><strong>スキャンを自動化する</strong>: CI/CD は AI の問題を強制的に作成する必要があります</li>
<li><strong>デフォルトで安全</strong>: カスタム命令によりセキュリティ パターンを適用</li>
<li><strong>最新情報を入手</strong>: AI モデルは向上しますが、脅威の状況も変化します</li>
</ul>

<p>次の記事: <strong>技術的負債と保守性</strong> — Vibe コーディングを使用する際の技術的負債を管理します。</p>
