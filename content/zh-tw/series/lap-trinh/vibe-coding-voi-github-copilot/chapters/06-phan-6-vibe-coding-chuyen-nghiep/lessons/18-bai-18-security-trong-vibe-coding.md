---
id: 019f1c30-a602-7001-c001-v1b3c0d10602
title: 第 18 課：Vibe 編碼中的安全性
slug: bai-18-security-trong-vibe-coding
description: 人工智慧生成程式碼中常見的安全漏洞。 OWASP 前 10 名和 Vibe 编码。提示注入風險。安全的編碼模式。安全掃描工具。代码审查以确保安全。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 18
section_title: 第 6 部分：專業 Vibe 編碼 — 品質、安全與生產
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：Vibe 編碼中的安全性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：專業 Vibe 編碼 — 品質、安全與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-thuc-trang"><strong>1. AI生成程式碼的安全現狀</strong></h2>

<p>2025-2026 年，Vibe Coding 將會蓬勃發展，但隨之而來的是嚴重的安全問題：</p>

<table>
<thead>
<tr>
<th>研究</th>
<th>結果</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>維拉代碼 (2026)</strong></td>
<td>72% 使用 AI 程式碼的應用程式有安全缺陷</td>
</tr>
<tr>
<td><strong>史丹佛大學 (2025)</strong></td>
<td>使用人工智慧的開發人員編寫的程式碼安全性較低，但對安全性更有信心</td>
</tr>
<tr>
<td><strong>GitHub (2026)</strong></td>
<td>與 AI 產生的程式碼一起使用時，AI 程式碼掃描擷取的問題數量增加了 3 倍</td>
</tr>
</tbody>
</table>

<p><strong>核心問題</strong>：人工智慧接受公共程式碼的訓練－包括存在安全漏洞的程式碼。人工智慧沒有歧視 <strong>範例程式碼</strong> （教程，StackOverflow） <strong>生產程式碼</strong>。</p>

<h2 id="2-owasp-top-10"><strong>2. OWASP Top 10 和 Vibe 編碼</strong></h2>

<h3>2.1.注射 (A03:2021)</h3>
<p>AI經常產生不安全的SQL查詢：</p>

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

<h3>2.2.身份驗證被破壞 (A07:2021)</h3>
<pre><code class="language-typescript">// ❌ AI có thể generate weak JWT:
jwt.sign(payload, 'secret123')  // Hardcoded secret!

// ✅ Secure version:
jwt.sign(payload, process.env.JWT_SECRET!, {
  expiresIn: '15m',
  algorithm: 'RS256',  // Asymmetric
})
</code></pre>

<h3>2.3.敏感資料暴露 (A02:2021)</h3>
<pre><code class="language-typescript">// ❌ AI có thể log sensitive data:
console.log('User login:', { email, password });
res.json({ user: { ...user } });  // Includes password hash!

// ✅ Chỉ return cần thiết:
const { password, ...safeUser } = user;
res.json({ user: safeUser });
</code></pre>

<h3>2.4.不安全的直接物件參考 (A01:2021)</h3>
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

<h2 id="3-common-vulnerabilities"><strong>3. AI程式碼常見漏洞</strong></h2>

<table>
<thead>
<tr>
<th>漏洞</th>
<th>人工智慧的頻率</th>
<th>範例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>硬編碼的秘密</strong></td>
<td>非常高</td>
<td>API 金鑰、程式碼中的密碼</td>
</tr>
<tr>
<td><strong>缺少輸入驗證</strong></td>
<td>高</td>
<td>不驗證使用者輸入</td>
</tr>
<tr>
<td><strong>弱加密</strong></td>
<td>高</td>
<td>MD5 代替 bcrypt、SHA-256</td>
</tr>
<tr>
<td><strong>缺少身份驗證檢查</strong></td>
<td>平均</td>
<td>端點不驗證用戶</td>
</tr>
<tr>
<td><strong>SQL注入</strong></td>
<td>平均</td>
<td>字串連接查詢</td>
</tr>
<tr>
<td><strong>跨站腳本攻擊</strong></td>
<td>平均</td>
<td>直接 HTML 渲染</td>
</tr>
<tr>
<td><strong>路徑遍歷</strong></td>
<td>低</td>
<td>未清理的檔案路徑</td>
</tr>
</tbody>
</table>

<h2 id="4-prompt-injection"><strong>4. 及時注射風險</strong></h2>

<p>使用 MCP 伺服器或透過 AI 處理使用者輸入時：</p>

<pre><code class="language-text">// User nhập vào form:
"; DROP TABLE users; --

// Nếu AI xử lý raw input:
AI có thể generate code chứa malicious input
</code></pre>

<h3>預防：</h3>
<ul>
<li>切勿將使用者輸入直接傳遞到 AI 提示中</li>
<li>在將輸入傳送給 AI 之前對其進行清理</li>
<li>執行前驗證 AI 輸出</li>
<li>使用允許列表而不是拒絕列表</li>
</ul>

<h2 id="5-secure-prompting"><strong>5. 安全提示模式</strong></h2>

<h3>5.1.自訂安全說明</h3>
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

<h3>5.2.安全第一提示</h3>
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

<h2 id="6-security-tools"><strong>6.安全掃描工具</strong></h2>

<h3>6.1. GitHub 高階安全性</h3>
<pre><code class="language-text">GitHub Secret Scanning: phát hiện secrets trong code
CodeQL: static analysis cho security vulnerabilities
Dependabot: scan dependencies cho known vulnerabilities
</code></pre>

<h3>6.2.在 CI/CD 管道中</h3>
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

<h3>6.3. IDE級掃描</h3>
<pre><code class="language-text">// Copilot itself can help with security review:
@workspace /review Check all API endpoints for:
1. Missing authentication middleware
2. Missing input validation
3. SQL injection vulnerabilities
4. Hardcoded secrets
5. Sensitive data in responses
</code></pre>

<h2 id="7-secure-coding-patterns"><strong>7. Vibe 編碼的安全編碼模式</strong></h2>

<h3>模式 1：驗證優先中間件</h3>
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

<h3>模式二：授權守衛</h3>
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

<h3>模式 3：輸出清理</h3>
<pre><code class="language-typescript">// Chỉ return fields cần thiết:
const sanitizeUser = (user: User) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  // Exclude: password, resetToken, etc.
});
</code></pre>

<h2 id="8-security-checklist"><strong>8. Vibe 編碼的安全檢查表</strong></h2>

<table>
<thead>
<tr>
<th>#</th>
<th>檢查</th>
<th>當</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>沒有硬編碼的秘密</td>
<td>每次提交</td>
</tr>
<tr>
<td>2</td>
<td>所有端點的輸入驗證</td>
<td>每個新端點</td>
</tr>
<tr>
<td>3</td>
<td>受保護路由中的身份驗證中間件</td>
<td>每條新航線</td>
</tr>
<tr>
<td>4</td>
<td>參數化查詢</td>
<td>每個資料庫查詢</td>
</tr>
<tr>
<td>5</td>
<td>日誌/回應中沒有敏感數據</td>
<td>每個API回應</td>
</tr>
<tr>
<td>6</td>
<td>依賴項沒有 CVE</td>
<td>每週</td>
</tr>
<tr>
<td>7</td>
<td>配置的安全標頭</td>
<td>一次+驗證</td>
</tr>
<tr>
<td>8</td>
<td>身份驗證端點的速率限制</td>
<td>一次+驗證</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. 總結</strong></h2>

<p>Vibe 編碼的安全性要求 <strong>不同的心態</strong>：</p>

<ul>
<li><strong>信任但驗證</strong>：AI代碼總是需要安全審查</li>
<li><strong>縱深防禦</strong>：多層安全檢查</li>
<li><strong>自動掃描</strong>：CI/CD 必須迫使 AI 問題產生</li>
<li><strong>預設安全</strong>：自訂指令強制執行安全模式</li>
<li><strong>保持更新</strong>：人工智慧模型得到改進，但威脅情勢也發生了變化</li>
</ul>

<p>下一篇： <strong>技術債和可維護性</strong> — 使用 Vibe Coding 時管理技術債。</p>
