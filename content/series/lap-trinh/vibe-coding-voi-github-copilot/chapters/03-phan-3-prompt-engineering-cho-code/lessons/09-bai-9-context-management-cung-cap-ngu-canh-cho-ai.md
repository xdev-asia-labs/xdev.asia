---
id: 019f1c30-a302-7001-c001-v1b3c0d10302
title: 'Bài 9: Context Management — Cung cấp ngữ cảnh cho AI'
slug: bai-9-context-management-cung-cap-ngu-canh-cho-ai
description: >-
  Vai trò của context window. Cách attach files, folders, selections.
  #file, #selection, #editor references. Workspace indexing.
  Codebase-aware prompting. Tips giữ context gọn và hiệu quả.
  Khi nào cần new session vs continue session.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Prompt Engineering cho Code"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-context-la-gi"><strong>1. Context là gì và tại sao quan trọng?</strong></h2>

<p>AI model chỉ "thấy" được những gì nằm trong <strong>context window</strong> — lượng text mà nó xử lý cho mỗi request. Nếu bạn không cung cấp đủ context, AI sẽ "đoán" và thường đoán sai.</p>

<pre><code class="language-text">Context window: [System prompt + Custom instructions + Your prompt + Attached files + History]
                ↑ tất cả phải fit trong giới hạn tokens của model
</code></pre>

<p><strong>Context tốt = Code tốt.</strong> Đây là nguyên tắc #1 của Vibe Coding hiệu quả.</p>

<h2 id="2-cac-loai-context"><strong>2. Các loại context trong Copilot</strong></h2>

<h3>2.1. Implicit Context (tự động)</h3>
<p>Copilot tự động thu thập:</p>
<ul>
<li><strong>File đang active</strong> trong editor</li>
<li><strong>Selection</strong> hiện tại (nếu có)</li>
<li><strong>Các tab đang mở</strong></li>
<li><strong>Workspace structure</strong> (file/folder tree)</li>
<li><strong>Diagnostics</strong> (errors, warnings)</li>
<li><strong>Terminal output</strong> gần nhất</li>
</ul>

<h3>2.2. Explicit Context (bạn cung cấp)</h3>
<p>Bạn chủ động attach:</p>
<ul>
<li><strong>#file</strong>: attach file cụ thể</li>
<li><strong>#selection</strong>: đoạn code đang select</li>
<li><strong>#editor</strong>: toàn bộ visible area trong editor</li>
<li><strong>#codebase</strong>: search semantic trong workspace</li>
<li><strong>#terminalLastCommand</strong>: output của command vừa chạy</li>
<li><strong>Drag & drop</strong> files vào chat</li>
<li><strong>Images</strong>: attach screenshots (Mar 2026 feature)</li>
</ul>

<h2 id="3-su-dung-context-variables"><strong>3. Sử dụng Context Variables</strong></h2>

<h3>3.1. #file — Attach file cụ thể</h3>
<pre><code class="language-text">// Trong Chat view:
Look at #file:src/models/User.ts and #file:src/services/AuthService.ts
and create a password reset flow following the same patterns.
</code></pre>

<p>Khi gõ <code>#file:</code>, VS Code hiển thị file picker để bạn chọn.</p>

<h3>3.2. #selection — Code đang select</h3>
<pre><code class="language-text">// Select đoạn code trong editor, rồi trong Chat:
Explain #selection and suggest how to optimize it for performance.
</code></pre>

<h3>3.3. #codebase — Tìm kiếm semantic trong workspace</h3>
<pre><code class="language-text">// Copilot tự tìm files liên quan trong codebase:
#codebase How is authentication implemented in this project?
Show me the auth middleware and token verification logic.
</code></pre>

<h3>3.4. #terminalLastCommand — Output terminal</h3>
<pre><code class="language-text">// Sau khi chạy test fail trong terminal:
#terminalLastCommand Fix the failing tests. Analyze the error output
and make the necessary code changes.
</code></pre>

<h2 id="4-workspace-indexing"><strong>4. Workspace Indexing</strong></h2>

<p>VS Code tự động index workspace để Copilot hiểu codebase:</p>

<ul>
<li><strong>Semantic index</strong>: hiểu ý nghĩa code (functions, classes, relationships)</li>
<li><strong>Symbol index</strong>: tên functions, variables, types</li>
<li><strong>File structure</strong>: biết project structure</li>
</ul>

<p>Khi Agent chạy, nó có thể dùng tools như <code>search</code>, <code>listDir</code>, <code>read</code> để chủ động khám phá codebase — không chỉ dựa vào context bạn cung cấp.</p>

<h2 id="5-chien-luoc-context"><strong>5. Chiến lược Context hiệu quả</strong></h2>

<h3>5.1. Mở đúng files trước khi prompt</h3>
<pre><code class="language-text">// Trước khi viết prompt "Create UserService":
// Mở các files liên quan trong editor tabs:
Tab 1: models/User.ts        → Copilot biết User schema
Tab 2: services/AuthService.ts → Copilot biết coding pattern
Tab 3: routes/authRoutes.ts   → Copilot biết route conventions
Tab 4: tests/auth.test.ts     → Copilot biết testing pattern
</code></pre>

<h3>5.2. Reference existing patterns</h3>
<pre><code class="language-text">// Thay vì mô tả pattern từ đầu:
Create a ProductService following the exact same pattern as
#file:src/services/UserService.ts — same error handling,
same repository pattern, same validation approach.
</code></pre>

<h3>5.3. Cung cấp constraints rõ ràng</h3>
<pre><code class="language-text">// Context about project conventions:
Our project uses:
- Prisma for database (schema at #file:prisma/schema.prisma)
- Zod for validation (see pattern in #file:src/schemas/userSchema.ts)
- Custom AppError class for errors (#file:src/utils/AppError.ts)

Now create the OrderService with CRUD operations.
</code></pre>

<h2 id="6-new-session-vs-continue"><strong>6. Khi nào New Session vs Continue Session?</strong></h2>

<table>
<thead>
<tr>
<th>Tình huống</th>
<th>Hành động</th>
<th>Lý do</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tiếp tục cùng feature</td>
<td><strong>Continue</strong></td>
<td>Giữ context + history</td>
</tr>
<tr>
<td>Feature hoàn toàn mới</td>
<td><strong>New session</strong></td>
<td>Context sạch, không bị nhiễu</td>
</tr>
<tr>
<td>Context bị quá dài</td>
<td><strong>New session</strong> + summary</td>
<td>Tránh context overflow</td>
</tr>
<tr>
<td>Agent đi sai hướng</td>
<td><strong>New session</strong> + rephrase</td>
<td>Reset mistakes in history</td>
</tr>
<tr>
<td>Debug issue liên quan</td>
<td><strong>Continue</strong></td>
<td>AI cần biết fix trước đó</td>
</tr>
</tbody>
</table>

<h3>Tip: Summary khi tạo new session</h3>
<pre><code class="language-text">// Khi context quá dài, tạo new session với summary:
Context from previous session:
- We're building a task management app with Next.js 15 + Prisma
- Backend API is done (auth, CRUD for tasks, projects)
- Database schema is finalized
- Currently working on frontend

Continue from: Create the Task list page component with
filtering and sorting capabilities.
</code></pre>

<h2 id="7-images-as-context"><strong>7. Images as Context (2026 Feature)</strong></h2>

<p>Từ tháng 3/2026, bạn có thể <strong>attach images</strong> vào agent sessions:</p>

<ul>
<li>Screenshot của UI design → "Build this UI"</li>
<li>Screenshot của error → "Fix this error"</li>
<li>Diagram/wireframe → "Implement this architecture"</li>
<li>Figma export → "Convert this design to React components"</li>
</ul>

<h2 id="8-anti-patterns"><strong>8. Anti-patterns cần tránh</strong></h2>

<ul>
<li><strong>Dump toàn bộ codebase</strong>: quá nhiều context = noise, AI bị confuse</li>
<li><strong>Không cung cấp context nào</strong>: AI phải đoán everything</li>
<li><strong>Attach file không liên quan</strong>: waste context window</li>
<li><strong>Continue session quá dài</strong>: context degrade, AI "quên" thông tin đầu</li>
<li><strong>Copy-paste error không format</strong>: gây confuse cho AI</li>
</ul>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<p>Context management là kỹ năng <strong>quyết định chất lượng Vibe Coding</strong>:</p>

<ul>
<li>✅ Mở đúng files → implicit context tốt</li>
<li>✅ Dùng #file, #selection, #codebase → explicit context chính xác</li>
<li>✅ Reference existing patterns → output nhất quán</li>
<li>✅ New session khi context bloated → tránh degrade</li>
<li>✅ Attach images cho UI tasks → visual context</li>
</ul>

<p>Bài tiếp theo sẽ cover <strong>Prompt Patterns nâng cao</strong> — slash commands, chat participants, và cách xây dựng prompt library cá nhân.</p>
