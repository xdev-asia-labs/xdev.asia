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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5777" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5777)"/>

  <!-- Decorations -->
  <g>
    <circle cx="722" cy="116" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="844" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="966" cy="260" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1088" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="144" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="156" x2="1100" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="186" x2="1050" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ Kiến trúc — Bài 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 24: Security, IP Protection &amp;</tspan>
      <tspan x="60" dy="42">Compliance</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Operations, Security &amp; Scale</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
