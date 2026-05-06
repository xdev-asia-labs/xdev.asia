---
id: 019f1c30-a602-7001-c001-v1b3c0d10602
title: 'Lesson 18: Security in Vibe Coding'
slug: bai-18-security-trong-vibe-coding
description: >-
  Common security vulnerabilities in AI-generated code. OWASP Top 10 and Vibe
  Coding. Prompt injection risks. Secure coding patterns. Security scanning
  tools. Code review for security.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 18
section_title: 'Part 6: Professional Vibe Coding — Quality, Security & Production'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Security in Vibe Coding</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Professional Vibe Coding — Quality, Security & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-thuc-trang"><strong>1. Current status of security in AI-Generated Code</strong></h2>

<p>The year 2025-2026 sees a boom in Vibe Coding, but with it comes serious security concerns:</p>

<table>
<thead>
<tr>
<th>Research</th>
<th>Results</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>VeraCode (2026)</strong></td>
<td>72% of apps using AI code have security flaws</td>
</tr>
<tr>
<td><strong>Stanford (2025)</strong></td>
<td>Developers using AI write less secure code and are more confident about security</td>
</tr>
<tr>
<td><strong>GitHub (2026)</strong></td>
<td>AI code scanning catches 3x more issues when used with AI-generated code</td>
</tr>
</tbody>
</table>

<p><strong>Core problem</strong>: AI is trained on public code — including code with security vulnerabilities. AI does not discriminate <strong>example code</strong> (tutorial, StackOverflow) with <strong>production code</strong>.</p>

<h2 id="2-owasp-top-10"><strong>2. OWASP Top 10 and Vibe Coding</strong></h2>

<h3>2.1. Injection (A03:2021)</h3>
<p>AI often generates unsafe SQL queries:</p>

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

<h3>2.2. Broken Authentication (A07:2021)</h3>
<pre><code class="language-typescript">// ❌ AI có thể generate weak JWT:
jwt.sign(payload, 'secret123')  // Hardcoded secret!

// ✅ Secure version:
jwt.sign(payload, process.env.JWT_SECRET!, {
  expiresIn: '15m',
  algorithm: 'RS256',  // Asymmetric
})
</code></pre>

<h3>2.3. Sensitive Data Exposure (A02:2021)</h3>
<pre><code class="language-typescript">// ❌ AI có thể log sensitive data:
console.log('User login:', { email, password });
res.json({ user: { ...user } });  // Includes password hash!

// ✅ Chỉ return cần thiết:
const { password, ...safeUser } = user;
res.json({ user: safeUser });
</code></pre>

<h3>2.4. Insecure Direct Object Reference (A01:2021)</h3>
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

<h2 id="3-common-vulnerabilities"><strong>3. Common vulnerabilities in AI Code</strong></h2>

<table>
<thead>
<tr>
<th>Vulnerability</th>
<th>Frequency of AI</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Hardcoded secrets</strong></td>
<td>Very high</td>
<td>API keys, passwords in code</td>
</tr>
<tr>
<td><strong>Missing input validation</strong></td>
<td>High</td>
<td>Do not validate user input</td>
</tr>
<tr>
<td><strong>Weak crypto</strong></td>
<td>High</td>
<td>MD5 instead of bcrypt, SHA-256</td>
</tr>
<tr>
<td><strong>Missing authentication checks</strong></td>
<td>Average</td>
<td>Endpoint does not verify users</td>
</tr>
<tr>
<td><strong>SQL injection</strong></td>
<td>Average</td>
<td>String concatenation queries</td>
</tr>
<tr>
<td><strong>XSS</strong></td>
<td>Average</td>
<td>Direct HTML rendering</td>
</tr>
<tr>
<td><strong>Path traversal</strong></td>
<td>Low</td>
<td>Unsanitized file paths</td>
</tr>
</tbody>
</table>

<h2 id="4-prompt-injection"><strong>4. Prompt Injection Risks</strong></h2>

<p>When using MCP servers or processing user input via AI:</p>

<pre><code class="language-text">// User nhập vào form:
"; DROP TABLE users; --

// Nếu AI xử lý raw input:
AI có thể generate code chứa malicious input
</code></pre>

<h3>Prevention:</h3>
<ul>
<li>Never pass user input directly into the AI prompt</li>
<li>Sanitize input BEFORE sending it to AI</li>
<li>Validate AI output before executing</li>
<li>Use allowlists instead of denylists</li>
</ul>

<h2 id="5-secure-prompting"><strong>5. Secure Prompting Patterns</strong></h2>

<h3>5.1. Custom instructions for security</h3>
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

<h3>5.2. Security-first prompts</h3>
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

<h2 id="6-security-tools"><strong>6. Security Scanning Tools</strong></h2>

<h3>6.1. GitHub Advanced Security</h3>
<pre><code class="language-text">GitHub Secret Scanning: phát hiện secrets trong code
CodeQL: static analysis cho security vulnerabilities
Dependabot: scan dependencies cho known vulnerabilities
</code></pre>

<h3>6.2. In the CI/CD pipeline</h3>
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

<h3>6.3. IDE-level scanning</h3>
<pre><code class="language-text">// Copilot itself can help with security review:
@workspace /review Check all API endpoints for:
1. Missing authentication middleware
2. Missing input validation
3. SQL injection vulnerabilities
4. Hardcoded secrets
5. Sensitive data in responses
</code></pre>

<h2 id="7-secure-coding-patterns"><strong>7. Secure Coding Patterns for Vibe Coding</strong></h2>

<h3>Pattern 1: Validate-first middleware</h3>
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

<h3>Pattern 2: Authorization guard</h3>
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

<h3>Pattern 3: Output sanitization</h3>
<pre><code class="language-typescript">// Chỉ return fields cần thiết:
const sanitizeUser = (user: User) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  // Exclude: password, resetToken, etc.
});
</code></pre>

<h2 id="8-security-checklist"><strong>8. Security Checklist for Vibe Coding</strong></h2>

<table>
<thead>
<tr>
<th>#</th>
<th>Check</th>
<th>When</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>There are no hardcoded secrets</td>
<td>Every commit</td>
</tr>
<tr>
<td>2</td>
<td>Input validation at all endpoints</td>
<td>Each new endpoint</td>
</tr>
<tr>
<td>3</td>
<td>Auth middleware in protected routes</td>
<td>Each new route</td>
</tr>
<tr>
<td>4</td>
<td>Parameterized queries</td>
<td>Each DB query</td>
</tr>
<tr>
<td>5</td>
<td>No sensitive data in logs/responses</td>
<td>Each API response</td>
</tr>
<tr>
<td>6</td>
<td>Dependencies do not have CVEs</td>
<td>Every week</td>
</tr>
<tr>
<td>7</td>
<td>Security headers configured</td>
<td>One time + verify</td>
</tr>
<tr>
<td>8</td>
<td>Rate limiting on auth endpoints</td>
<td>One time + verify</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<p>Security in Vibe Coding requires <strong>different mindset</strong>:</p>

<ul>
<li><strong>Trust but verify</strong>: AI code always needs security review</li>
<li><strong>Defense in depth</strong>: Multiple layers of security checks</li>
<li><strong>Automate scanning</strong>: CI/CD must force AI issues to create</li>
<li><strong>Secure by default</strong>: Custom instructions enforce security patterns</li>
<li><strong>Stay updated</strong>: AI models improve but the threat landscape also changes</li>
</ul>

<p>Next article: <strong>Technical Debt & Maintainability</strong> — manage technical debt when using Vibe Coding.</p>
