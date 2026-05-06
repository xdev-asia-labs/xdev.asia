---
id: 019d8b30-b217-7001-c002-e0c5f8200117
title: 'レッスン 17: 変換とトークン化 - データ保護'
slug: bai-17-transform-va-tokenization-data-protection
description: Transform Secrets Engine (エンタープライズ) — フォーマット保持暗号化 (FPE)、マスキング、トークン化。 PCI DSS 準拠、PII 保護。トランジットとトランスフォームを比較します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 4: 高度なシークレット エンジン'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 D​​evSecOps — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 17: 変換とトークン化 - データ</tspan>
      <tspan x="60" dy="42">Protection</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度なシークレット エンジン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-transform-secrets-engine"><strong>1. Transform Secrets Engine Overview</strong></h2>

<p><strong>Transform Secrets Engine</strong> (Enterprise) は高度なデータ保護メカニズムを提供し、完全に異なる形式で暗号文を返す Transit Engine とは異なり、元の形式を保持しながら機密データを保護できます。</p>

<h3 id="ba-loai-transform"><strong>3種類のTransform</strong></h3>

<table>
<thead>
<tr><th>タイプ</th><th>説明</th><th>リバーシブル</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>FPE</strong></td><td>形式保持暗号化</td><td>はい</td><td>クレジット カード、SSN — 元の形式を維持</td></tr>
<tr><td><strong>マスキング</strong></td><td>データを文字でマスク</td><td>No</td><td>「****1234」を表示</td></tr>
<tr><td><strong>トークン化</strong></td><td>ランダムなトークンで置換</td><td>はい (検索)</td><td>PCI DSS、スコープ外環境</td></tr>
</tbody>
</table>

<h2 id="2-format-preserving-encryption"><strong>2. Format Preserving Encryption (FPE)</strong></h2>

<p>FPE はデータを暗号化しますが、<strong> は元の形式</strong> を保持します。たとえば、16 桁のクレジット カード番号は、他の 16 桁にエンコードされます。これにより、レガシー システムはスキーマを変更せずに動作を継続できます。</p>

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

<h3 id="su-dung-fpe"><strong>FPE を使用</strong></h3>

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

<p>マスキングは置換文字でデータをマスクします。<strong>は</strong>を反転できません。 UI、ログ、レポートへの表示に適しています。</p>

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

<p>Tokenization は機密データをランダムな <strong>token</strong> に置き換え、マッピングを別のストアに保存します。トークンは元のデータと数学的関係を持たない → FPE よりも安全です。</p>

<h3 id="tokenization-vs-fpe"><strong>Tokenization vs FPE</strong></h3>

<table>
<thead>
<tr><th>基準</th><th>FPE</th><th>トークン化</th></tr>
</thead>
<tbody>
<tr><td>元の形式を維持</td><td>はい</td><td>オプション</td></tr>
<tr><td>リバーシブル</td><td>はい (キーによる)</td><td>はい (ルックアップ ストアによる)</td></tr>
<tr><td>外部ストアが必要</td><td>いいえ</td><td>はい (内部または外部)</td></tr>
<tr><td>PCI DSS スコープ解除</td><td>いいえ (依然としてキー管理が必要)</td><td>はい (キーのない環境)</td></tr>
<tr><td>パフォーマンス</td><td>高速 (暗号化操作)</td><td>低速 (ストレージ ルックアップ)</td></tr>
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

<h2 id="5-transit-vs-transform"><strong>5。トランジットとトランスフォーム — いつどちらを使用するか?</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>トランジット</th><th>変換</th></tr>
</thead>
<tbody>
<tr><td>License</td><td>Community</td><td>Enterprise</td></tr>
<tr><td>出力形式</td><td>Base64 ciphertext</td><td>元の形式を維持する (FPE) またはトークン</td></tr>
<tr><td>スキーマ変更</td><td>列の型を変更する必要があります</td><td>変更する必要はありません</td></tr>
<tr><td>メインのユースケース</td><td>保存時の暗号化</td><td>PCI DSS、PII 保護</td></tr>
<tr><td>バッチ パフォーマンス</td><td>非常に良い</td><td>良好 (FPE)、まあまあ (トークン化)</td></tr>
<tr><td>キーローテーション</td><td>はい (再ラップ)</td><td>はい</td></tr>
</tbody>
</table>

<h3 id="vi-du-thuc-te"><strong>実践例</strong></h3>

<ul>
<li><p><strong>Transit</strong>: データベース内の電子メール、住所、医療データを暗号化 → 長い暗号文、使用するには復号化が必要</p></li>
<li><p><strong>Transform FPE</strong>: クレジット カード番号をエンコード → 従来の請求システムは引き続き 16 桁の形式を処理できます</p></li>
<li><p><strong>トークン化の変換</strong>: クレジット カードをトークンに置き換える → 開発/テスト環境が PCI</p></li> から完全にスコープ外される
<li><p><strong>Transform Masking</strong>: UI に ****1234 を表示 → 元のデータを復元できません</p></li>
</ul>

<h2 id="6-tich-hop-database"><strong>6。データベース ビューとの統合</strong></h2>

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

<h2 id="7-tong-ket"><strong>7。概要</strong></h2>

<ul>
<li><p><strong>FPE</strong> — レガシー システムと互換性のあるフォーマット保持エンコーディング</p></li>
<li><p><strong>Masking</strong> — UI/ログ</p></li> 用の、元に戻せないマスキング データ
<li><p><strong>Tokenization</strong> — ランダムなトークンに置き換え、環境のスコープを解除します</p></li>
<li><p><strong>Transit</strong> — 基本暗号化、コミュニティ エディション</p></li>
<li><p><strong>Transform</strong> — 高度なデータ保護、Enterprise</p></li>
</ul>

<p>次の記事では、KMIP、Consul、Nomad Secrets エンジンと、Vault 用のカスタム プラグインの開発方法について説明します。</p>
