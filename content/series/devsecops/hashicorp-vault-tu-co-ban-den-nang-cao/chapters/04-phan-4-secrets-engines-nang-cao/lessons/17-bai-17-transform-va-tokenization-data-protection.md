---
id: 019d8b30-b217-7001-c002-e0c5f8200117
title: 'Bài 17: Transform và Tokenization - Data Protection'
slug: bai-17-transform-va-tokenization-data-protection
description: >-
  Transform Secrets Engine (Enterprise) — Format Preserving Encryption (FPE),
  Masking, Tokenization. PCI DSS compliance, PII protection.
  So sánh Transit vs Transform.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 4: Secrets Engines nâng cao"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-transform-secrets-engine"><strong>1. Transform Secrets Engine Overview</strong></h2>

<p><strong>Transform Secrets Engine</strong> (Enterprise) cung cấp các cơ chế data protection nâng cao, cho phép bảo vệ dữ liệu nhạy cảm mà vẫn giữ nguyên format ban đầu — khác với Transit Engine trả về ciphertext hoàn toàn khác format.</p>

<h3 id="ba-loai-transform"><strong>Ba loại Transform</strong></h3>

<table>
<thead>
<tr><th>Loại</th><th>Mô tả</th><th>Reversible</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>FPE</strong></td><td>Format Preserving Encryption</td><td>Có</td><td>Credit card, SSN — giữ format gốc</td></tr>
<tr><td><strong>Masking</strong></td><td>Che dữ liệu bằng ký tự</td><td>Không</td><td>Hiển thị "****1234"</td></tr>
<tr><td><strong>Tokenization</strong></td><td>Thay bằng token ngẫu nhiên</td><td>Có (lookup)</td><td>PCI DSS, de-scope environments</td></tr>
</tbody>
</table>

<h2 id="2-format-preserving-encryption"><strong>2. Format Preserving Encryption (FPE)</strong></h2>

<p>FPE mã hóa dữ liệu nhưng <strong>giữ nguyên format gốc</strong>. Ví dụ: credit card number 16 chữ số mã hóa thành 16 chữ số khác. Điều này cho phép legacy systems tiếp tục hoạt động mà không cần thay đổi schema.</p>

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

<h3 id="su-dung-fpe"><strong>Sử dụng FPE</strong></h3>

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

<p>Masking che dữ liệu bằng ký tự thay thế — <strong>không thể reverse</strong>. Phù hợp cho hiển thị trên UI, logs, reports.</p>

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

<p>Tokenization thay thế dữ liệu nhạy cảm bằng một <strong>token ngẫu nhiên</strong>, lưu mapping trong store riêng. Token không có quan hệ toán học với dữ liệu gốc → an toàn hơn FPE.</p>

<h3 id="tokenization-vs-fpe"><strong>Tokenization vs FPE</strong></h3>

<table>
<thead>
<tr><th>Tiêu chí</th><th>FPE</th><th>Tokenization</th></tr>
</thead>
<tbody>
<tr><td>Giữ format gốc</td><td>Có</td><td>Tùy chọn</td></tr>
<tr><td>Reversible</td><td>Có (bằng key)</td><td>Có (bằng lookup store)</td></tr>
<tr><td>Cần external store</td><td>Không</td><td>Có (internal hoặc external)</td></tr>
<tr><td>PCI DSS de-scope</td><td>Không (vẫn cần key management)</td><td>Có (environments không có key)</td></tr>
<tr><td>Performance</td><td>Nhanh (crypto operation)</td><td>Chậm hơn (storage lookup)</td></tr>
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

<h2 id="5-transit-vs-transform"><strong>5. Transit vs Transform — Khi nào dùng cái nào?</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Transit</th><th>Transform</th></tr>
</thead>
<tbody>
<tr><td>License</td><td>Community</td><td>Enterprise</td></tr>
<tr><td>Output format</td><td>Base64 ciphertext</td><td>Giữ format gốc (FPE) hoặc token</td></tr>
<tr><td>Schema changes</td><td>Cần thay đổi column type</td><td>Không cần thay đổi</td></tr>
<tr><td>Use case chính</td><td>Encrypt at rest</td><td>PCI DSS, PII protection</td></tr>
<tr><td>Batch performance</td><td>Rất tốt</td><td>Tốt (FPE), khá (Tokenization)</td></tr>
<tr><td>Key rotation</td><td>Có (rewrap)</td><td>Có</td></tr>
</tbody>
</table>

<h3 id="vi-du-thuc-te"><strong>Ví dụ thực tế</strong></h3>

<ul>
<li><p><strong>Transit</strong>: Mã hóa email, địa chỉ, dữ liệu y tế trong database → ciphertext dài, cần decrypt để dùng</p></li>
<li><p><strong>Transform FPE</strong>: Mã hóa credit card number → legacy billing system vẫn xử lý được format 16 chữ số</p></li>
<li><p><strong>Transform Tokenization</strong>: Thay credit card thành token → dev/test environment hoàn toàn de-scoped khỏi PCI</p></li>
<li><p><strong>Transform Masking</strong>: Hiển thị ****1234 trên UI → không thể recover data gốc</p></li>
</ul>

<h2 id="6-tich-hop-database"><strong>6. Tích hợp với Database Views</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>FPE</strong> — mã hóa giữ format, phù hợp legacy systems</p></li>
<li><p><strong>Masking</strong> — che dữ liệu, irreversible, cho UI/logs</p></li>
<li><p><strong>Tokenization</strong> — thay bằng random token, de-scope environments</p></li>
<li><p><strong>Transit</strong> — encryption cơ bản, Community edition</p></li>
<li><p><strong>Transform</strong> — data protection nâng cao, Enterprise</p></li>
</ul>

<p>Bài tiếp theo sẽ khám phá KMIP, Consul, Nomad Secrets Engines và cách phát triển Custom Plugins cho Vault.</p>
