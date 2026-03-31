---
id: 019f0b20-a703-7001-e001-f2b8f9000703
title: 'Bài 24: Security, IP Protection & Compliance'
slug: bai-24-security-ip-protection-compliance
description: >-
  Security architecture cho POD platform — authn/authz, API security,
  IP protection, DMCA workflow, plagiarism detection,
  compliance (GDPR, PCI-DSS, accessibility).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 24
section_title: "Phần 7: Operations, Security & Scale"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-security-baseline"><strong>1. Security Baseline</strong></h2>

<pre><code class="language-text">Identity Layer
  - OAuth2/OIDC
  - MFA for admin/finance
  - RBAC + scoped tokens

API Layer
  - Rate limiting
  - WAF + bot protection
  - Request signing (webhooks)

Data Layer
  - Encryption at rest (KMS)
  - TLS in transit
  - Secrets rotation
</code></pre>

<h2 id="2-authz-model"><strong>2. Authorization Model</strong></h2>

<pre><code class="language-typescript">type Role = 'owner' | 'designer' | 'operator' | 'finance' | 'support' | 'viewer';

type Permission =
  | 'design:write'
  | 'product:publish'
  | 'order:manage'
  | 'payout:approve'
  | 'moderation:review'
  | 'security:audit';

interface AccessPolicy {
  role: Role;
  permissions: Permission[];
  resourceScope: 'shop' | 'org' | 'global';
}
</code></pre>

<h2 id="3-api-security"><strong>3. API Security</strong></h2>

<ul>
<li>Per-client rate limit + burst control</li>
<li>API key rotation + scope restrictions</li>
<li>HMAC signature verification cho webhooks</li>
<li>Idempotency key cho endpoints tài chính</li>
</ul>

<h2 id="4-ip-protection"><strong>4. IP Protection cho Designs</strong></h2>

<pre><code class="language-text">Upload design
  -> perceptual hash
  -> CLIP embedding similarity search
  -> trademark text scan (OCR)
  -> risk score
  -> allow / review / block
</code></pre>

<pre><code class="language-typescript">function ipRiskScore(input: {
  similarity: number;
  trademarkHit: boolean;
  bannedKeywordHit: boolean;
}): number {
  let score = 0;
  if (input.similarity > 0.9) score += 50;
  if (input.trademarkHit) score += 35;
  if (input.bannedKeywordHit) score += 20;
  return Math.min(score, 100);
}
</code></pre>

<h2 id="5-dmca-workflow"><strong>5. DMCA / Takedown Workflow</strong></h2>

<pre><code class="language-text">Claim received
  -> validate claimant identity
  -> locate listings/designs
  -> temporary unpublish
  -> notify seller/designer
  -> counter-notice window
  -> final decision + audit log
</code></pre>

<ul>
<li>Track SLA xử lý claim</li>
<li>Lưu audit trail đầy đủ để phục vụ legal</li>
</ul>

<h2 id="6-compliance"><strong>6. Compliance Matrix</strong></h2>

<table>
<thead>
<tr><th>Framework</th><th>Scope</th><th>Actions</th></tr>
</thead>
<tbody>
<tr><td>GDPR</td><td>PII EU users</td><td>Consent, data deletion, data export</td></tr>
<tr><td>PCI-DSS</td><td>Payments</td><td>Tokenization, no raw card storage</td></tr>
<tr><td>COPPA</td><td>Children data</td><td>Age controls, parental consent</td></tr>
<tr><td>Accessibility (ADA/WCAG)</td><td>Storefront</td><td>Keyboard nav, contrast, alt text</td></tr>
</tbody>
</table>

<h2 id="7-security-observability"><strong>7. Security Observability</strong></h2>

<ul>
<li>SIEM integration cho auth anomalies</li>
<li>Alert brute-force/login spikes</li>
<li>Track webhook signature failures</li>
<li>Quarterly pen-test + dependency audit</li>
</ul>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>Security by design</strong> cần đi cùng mọi domain của platform</p></li>
<li><p><strong>IP protection</strong> là yếu tố sống còn trong POD</p></li>
<li><p><strong>DMCA workflow</strong> cần minh bạch, có audit log đầy đủ</p></li>
<li><p><strong>Compliance</strong> không chỉ legal, còn ảnh hưởng trust và khả năng scale quốc tế</p></li>
</ul>
