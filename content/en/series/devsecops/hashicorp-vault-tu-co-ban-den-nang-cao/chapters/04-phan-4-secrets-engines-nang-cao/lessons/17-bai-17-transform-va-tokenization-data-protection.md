---
id: 019d8b30-b217-7001-c002-e0c5f8200117
title: 'Lesson 17: Transform and Tokenization - Data Protection'
slug: bai-17-transform-va-tokenization-data-protection
description: Transform Secrets Engine (Enterprise) — Format Preserving Encryption (FPE), Masking, Tokenization. PCI DSS compliance, PII protection. Compare Transit vs Transform.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 17
section_title: 'Part 4: Advanced Secrets Engines'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2276" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2276)"/>

  <!-- Decorations -->
  <g>
    <circle cx="835" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1070" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="805" cy="245" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1040" cy="80" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="105" x2="1100" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="135" x2="1050" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.6410161513776,85 939.6410161513776,125 905,145 870.3589838486224,125 870.3589838486224,85.00000000000001 905,65" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 17: Transform and Tokenization - Data</tspan>
      <tspan x="60" dy="42">Protection</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Secrets Engines</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-transform-secrets-engine"><strong>1. Transform Secrets Engine Overview</strong></h2>

<p><strong>Transform Secrets Engine</strong> (Enterprise) provides advanced data protection mechanisms, allowing sensitive data to be protected while retaining the original format — unlike Transit Engine, which returns ciphertext in a completely different format.</p>

<h3 id="ba-loai-transform"><strong>Three types of Transform</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Description</th><th>Reversible</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>FPE</strong></td><td>Format Preserving Encryption</td><td>Yes</td><td>Credit card, SSN — keep original format</td></tr>
<tr><td><strong>Masking</strong></td><td>Mask data with characters</td><td>No</td><td>Display "****1234"</td></tr>
<tr><td><strong>Tokenization</strong></td><td>Replace with random token</td><td>Yes (lookup)</td><td>PCI DSS, de-scope environments</td></tr>
</tbody>
</table>

<h2 id="2-format-preserving-encryption"><strong>2. Format Preserving Encryption (FPE)</strong></h2>

<p>FPE encrypts the data but <strong>retains the original format</strong>. For example, a 16-digit credit card number is encoded into 16 other digits. This allows legacy systems to continue operating without schema changes.</p>

<h3 id="setup-fpe"><strong>Setup FPE</strong></h3>

<pre><code class="language-bash"># Enable Transform secrets engine
vault secrets enable transform

# Tạo alphabet (tập ký tự cho phép)
# Built-in: builtin/numeric, builtin/alphanumericlower, builtin/alphanumericupper

# Tạo template cho credit card
vault write transform/template/credit-card-tmpl \
  type=regex \
  pattern='(\d{4})-(\d{4})-(\d{4})-(\d{4})' \
  alphabet=builtin/numeric \
  encode_format='$1-$2-$3-$4' \
  decode_format='$1-$2-$3-$4'

# Tạo transformation
vault write transform/transformations/fpe/credit-card \
  template=credit-card-tmpl \
  tweak_source=internal \
  allowed_roles=payments

# Tạo role
vault write transform/role/payments \
  transformations=credit-card
</code></pre>

<h3 id="su-dung-fpe"><strong>Use FPE</strong></h3>

<pre><code class="language-bash"># Encode (encrypt)
vault write transform/encode/payments \
  value="4111-1111-1111-1111" \
  transformation=credit-card
# encoded_value: 7492-8372-1938-4726

# Decode (decrypt)
vault write transform/decode/payments \
  value="7492-8372-1938-4726" \
  transformation=credit-card
# decoded_value: 4111-1111-1111-1111

# Batch operations
vault write transform/encode/payments \
  batch_input='[
    {"value": "4111-1111-1111-1111", "transformation": "credit-card"},
    {"value": "5500-0000-0000-0004", "transformation": "credit-card"}
  ]'
</code></pre>

<h3 id="fpe-ssn"><strong>FPE cho SSN/CCCD</strong></h3>

<pre><code class="language-bash"># Template cho SSN (xxx-xx-xxxx)
vault write transform/template/ssn-tmpl \
  type=regex \
  pattern='(\d{3})-(\d{2})-(\d{4})' \
  alphabet=builtin/numeric

# Template cho CCCD Việt Nam (12 chữ số)
vault write transform/template/cccd-tmpl \
  type=regex \
  pattern='(\d{12})' \
  alphabet=builtin/numeric

vault write transform/transformations/fpe/cccd \
  template=cccd-tmpl \
  tweak_source=internal \
  allowed_roles=patient-data
</code></pre>

<h2 id="3-masking"><strong>3. Masking</strong></h2>

<p>Masking masks data with replacement characters — <strong>cannot reverse</strong>. Suitable for displaying on UI, logs, reports.</p>

<pre><code class="language-bash"># Tạo masking transformation
vault write transform/transformations/masking/card-mask \
  template=credit-card-tmpl \
  masking_character="#" \
  allowed_roles=display

vault write transform/role/display \
  transformations=card-mask

# Mask
vault write transform/encode/display \
  value="4111-1111-1111-1111" \
  transformation=card-mask
# encoded_value: ####-####-####-1111
</code></pre>

<h2 id="4-tokenization"><strong>4. Tokenization</strong></h2>

<p>Tokenization replaces sensitive data with a random <strong>token</strong>, storing the mapping in a separate store. Tokens have no mathematical relationship with the original data → more secure than FPE.</p>

<h3 id="tokenization-vs-fpe"><strong>Tokenization vs FPE</strong></h3>

<table>
<thead>
<tr><th>Criteria</th><th>FPE</th><th>Tokenization</th></tr>
</thead>
<tbody>
<tr><td>Keep original format</td><td>Yes</td><td>Optional</td></tr>
<tr><td>Reversible</td><td>Yes (by key)</td><td>Yes (by lookup store)</td></tr>
<tr><td>Need external store</td><td>No</td><td>Yes (internal or external)</td></tr>
<tr><td>PCI DSS de-scope</td><td>No (still needs key management)</td><td>Yes (environments without keys)</td></tr>
<tr><td>Performance</td><td>Fast (crypto operation)</td><td>Slower (storage lookup)</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Tạo tokenization store (internal)
vault write transform/stores/internal-store \
  type=internal

# Tạo tokenization transformation
vault write transform/transformations/tokenization/card-token \
  allowed_roles=tokenize-role \
  stores=internal-store \
  max_ttl=8760h

vault write transform/role/tokenize-role \
  transformations=card-token

# Tokenize
vault write transform/encode/tokenize-role \
  value="4111111111111111" \
  transformation=card-token
# encoded_value: Q4hx8AZDhk3jfn9876XYZ123...

# Detokenize
vault write transform/decode/tokenize-role \
  value="Q4hx8AZDhk3jfn9876XYZ123..." \
  transformation=card-token
# decoded_value: 4111111111111111

# Kiểm tra token metadata
vault write transform/tokeninfo/tokenize-role \
  value="Q4hx8AZDhk3jfn9876XYZ123..." \
  transformation=card-token
</code></pre>

<h2 id="5-transit-vs-transform"><strong>5. Transit vs Transform — When to use which?</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>Transit</th><th>Transform</th></tr>
</thead>
<tbody>
<tr><td>License</td><td>Community</td><td>Enterprise</td></tr>
<tr><td>Output format</td><td>Base64 ciphertext</td><td>Keep original format (FPE) or token</td></tr>
<tr><td>Schema changes</td><td>Need to change column type</td><td>No need to change</td></tr>
<tr><td>Use case main</td><td>Encrypt at rest</td><td>PCI DSS, PII protection</td></tr>
<tr><td>Batch performance</td><td>Very good</td><td>Good (FPE), fair (Tokenization)</td></tr>
<tr><td>Key rotation</td><td>Yes (rewrap)</td><td>Yes</td></tr>
</tbody>
</table>

<h3 id="vi-du-thuc-te"><strong>Practical example</strong></h3>

<ul>
<li><p><strong>Transit</strong>: Encrypt emails, addresses, medical data in the database → long ciphertext, need decrypt to use</p></li>
<li><p><strong>Transform FPE</strong>: Encode credit card number → legacy billing system can still handle 16-digit format</p></li>
<li><p><strong>Transform Tokenization</strong>: Replace credit card into token → dev/test environment completely de-scoped from PCI</p></li>
<li><p><strong>Transform Masking</strong>: Display ****1234 on UI → cannot recover original data</p></li>
</ul>

<h2 id="6-tich-hop-database"><strong>6. Integration with Database Views</strong></h2>

<pre><code class="language-sql">-- PostgreSQL view sử dụng Vault Transform
-- Application gọi Vault API để decode khi cần

-- Table gốc lưu tokenized data
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_name TEXT,
  card_token TEXT,          -- Tokenized value
  card_last4 TEXT,          -- Masked value cho display
  amount DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Application flow:
-- 1. User nhập card number
-- 2. App gửi đến Vault Transform → nhận token + masked
-- 3. Lưu token vào card_token, masked vào card_last4
-- 4. Khi cần charge → app gửi token đến Vault → nhận card number gốc
-- 5. Charge card rồi xóa plaintext khỏi memory
</code></pre>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>FPE</strong> — format-preserving encoding, compatible with legacy systems</p></li>
<li><p><strong>Masking</strong> — masking data, irreversible, for UI/logs</p></li>
<li><p><strong>Tokenization</strong> — replace with random token, de-scope environments</p></li>
<li><p><strong>Transit</strong> — basic encryption, Community edition</p></li>
<li><p><strong>Transform</strong> — advanced data protection, Enterprise</p></li>
</ul>

<p>The next article will explore KMIP, Consul, Nomad Secrets Engines and how to develop Custom Plugins for Vault.</p>
