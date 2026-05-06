---
id: 019d8b30-b217-7001-c002-e0c5f8200117
title: 第 17 課：轉換與標記化 - 資料保護
slug: bai-17-transform-va-tokenization-data-protection
description: Transform Secrets Engine（企業）— 格式保留加密 (FPE)、屏蔽、標記化。 PCI DSS 合規性、PII 保護。比較運輸與轉換。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 17
section_title: 第 4 部分：進階秘密引擎
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-2276" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-2276）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="835" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <圓cx =“1070”cy =“150”r =“23”填入=“#fb923c”不透明度=“0.05”/>
    <circle cx="805" cy="245" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1040" cy="80" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <line x1 =“600”y1 =“105”x2 =“1100”y2 =“185”筆畫=“#fb923c”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“135”x2 =“1050”y2 =“205”筆畫=“#fb923c”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「939.6410161513776,85 939.6410161513776,125 905,145 870.3589838486224,125 870.35898389838486224,125 870.35898389838486224,125 870.358983. 905,65" 填色 = "無" 筆畫 = "#fb923c" 筆畫寬度 = "1" 不透明度 = = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fb923c”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fb923c”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 17 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 17 課：轉換與標記化 - 資料</tspan>
      <tspan x="60" dy="42">保護</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階機密引擎</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-transform-secrets-engine"><strong>1.轉換秘密引擎概論</strong></h2>

<p><strong>Transform Secrets Engine</strong>（企業版）提供先進的資料保護機制，允許敏感資料受到保護，同時保留原始格式 - 與 Transit Engine 不同，Transit Engine 以完全不同的格式傳回密文。 </p>

<h3 id="ba-loai-transform"><strong>三種類型的變換</strong></h3>

<表>
<標題>
<tr><th>類型</th><th>描述</th><th>可逆</th><th>用例</th></tr>
</標題>
<正文>
<tr><td><strong>FPE</strong></td><td>格式保留加密</td><td>是</td><td>信用卡、SSN — 保持原始格式</td></tr>
<tr><td><strong>屏蔽</strong></td><td>用字元屏蔽資料</td><td>否</td><td>顯示「****1234」</td></tr>
<tr><td><strong>令牌化</strong></td><td>用隨機令牌替換</td><td>是（查找）</td><td>PCI DSS，取消範圍環境</td></tr>
</tbody>
</表>

<h2 id="2-format-preserving-encryption"><strong>2.格式保留加密（FPE）</strong></h2>

<p>FPE 對資料進行加密，但<strong>保留原始格式</strong>。例如，16 位信用卡號被編碼為 16 位其他數字。這使得遺留系統無需更改架構即可繼續運作。 </p>

<h3 id="setup-fpe"><strong>設定 FPE</strong></h3>

<pre><code class="language-bash"># 啟用轉換秘密引擎
vault secrets enable transform

# Tạo 字母表 (tập ký tự cho phép)
# 內建：內建/數字、內建/字母數字下、內建/字母數字上

# Tạo 模板 cho 信用卡
vault write transform/template/credit-card-tmpl \
  類型=正規表示式 \
  模式='(\d{4})-(\d{4})-(\d{4})-(\d{4})' \
  字母=內建/數字 \
  編碼格式='$1-$2-$3-$4' \
  解碼格式='$1-$2-$3-$4'

# Tạo 變換
vault write transform/transformations/fpe/credit-card \
  範本=信用卡-tmpl \
  Tweak_source=內部\
  allowed_roles=付款

#陶角色
vault write transform/role/payments \
  轉換=信用卡
</code></pre>

<h3 id="su-dung-fpe"><strong>使用 FPE</strong></h3><pre><code class="language-bash"># 編碼（加密）
vault write transform/encode/payments \
  值=“4111-1111-1111-1111”\
  轉型=信用卡
# 編碼值：7492-8372-1938-4726

# 解碼（解密）
vault write transform/decode/payments \
  值=“7492-8372-1938-4726”\
  轉型=信用卡
# 解碼值：4111-1111-1111-1111

# 批次操作
vault write transform/encode/payments \
  批次輸入='[
    {"value": "4111-1111-1111-1111", "transformation": "信用卡"},
    {“值”：“5500-0000-0000-0004”，“轉換”：“信用卡”}
  ]'
</code></pre>

<h3 id="fpe-ssn"><strong>FPE cho SSN/CCCD</strong></h3>

<pre><code class="language-bash"># 範本 cho SSN (xxx-xx-xxxx)
vault write transform/template/ssn-tmpl \
  類型=正規表示式 \
  模式='(\d{3})-(\d{2})-(\d{4})' \
  字母=內建/數字

# 模板 cho CCCD Việt Nam (12 chữ số)
vault write transform/template/cccd-tmpl \
  類型=正規表示式 \
  模式='(\d{12})' \
  字母=內建/數字

vault write transform/transformations/fpe/cccd \
  模板=cccd-tmpl \
  Tweak_source=內部\
  allowed_roles=患者數據
</code></pre>

<h2 id="3-masking"><strong>3.遮蔽</strong></h2>

<p>用替換字元屏蔽資料 - <strong>無法反轉</strong>。適合在 UI、日誌、報告上顯示。 </p>

<pre><code class="language-bash"># Tạo 遮罩轉換
vault write transform/transformations/masking/card-mask \
  範本=信用卡-tmpl \
  masking_character="#" \
  allowed_roles=顯示

vault write transform/role/display \
  轉換=卡片掩碼

# 面膜
vault write transform/encode/display \
  值=“4111-1111-1111-1111”\
  變換=卡片掩碼
# 編碼值：####-####-####-1111
</code></pre>

<h2 id="4-tokenization"><strong>4.代幣化</strong></h2>

<p>令牌化使用隨機<strong>令牌</strong>替換敏感數據，並將映射儲存在單獨的儲存中。代幣與原始資料沒有數學關係→比FPE更安全。 </p>

<h3 id="tokenization-vs-fpe"><strong>令牌化與 FPE</strong></h3>

<表>
<標題>
<tr><th>標準</th><th>FPE</th><th>標記化</th></tr>
</標題>
<正文>
<tr><td>保留原始格式</td><td>是</td><td>可選</td></tr>
<tr><td>可逆</td><td>是（透過密鑰）</td><td>是（透過查找儲存）</td></tr>
<tr><td>需要外部儲存</td><td>否</td><td>是（內部或外部）</td></tr>
<tr><td>PCI DSS 取消範圍</td><td>否（仍需要密鑰管理）</td><td>是（沒有密鑰的環境）</td></tr>
<tr><td>效能</td><td>快速（加密操作）</td><td>較慢（儲存查找）</td></tr>
</tbody>
</表>

<pre><code class="language-bash"># Tạo 標記化儲存（內部）
vault write transform/stores/internal-store \
  類型=內部

# Tạo 標記化轉換
vault write transform/transformations/tokenization/card-token \
  allowed_roles=標記化角色 \
  商店=內部商店\
  最大生存時間=8760h

vault write transform/role/tokenize-role \
  轉換=卡令牌

# 標記化
vault write transform/encode/tokenize-role \
  值=“4111111111111111”\
  轉換=卡令牌
# 編碼值：Q4hx8AZDhk3jfn9876XYZ123...

# 去代幣化
vault write transform/decode/tokenize-role \
  值=“Q4hx8AZDhk3jfn9876XYZ123...”\
  轉換=卡令牌
# 解碼值：4111111111111111

# Kiểm tra 代幣元數據
vault write transform/tokeninfo/tokenize-role \
  值=“Q4hx8AZDhk3jfn9876XYZ123...”\
  轉換=卡令牌
</code></pre>

<h2 id="5-transit-vs-transform"><strong>5。 Transit 與 Transform — 何時使用哪一個？ </strong></h2><表>
<標題>
<tr><th>條件</th><th>傳送</th><th>轉換</th></tr>
</標題>
<正文>
<tr><td>許可證</td><td>社區</td><td>企業</td></tr>
<tr><td>輸出格式</td><td>Base64密文</td><td>保留原始格式（FPE）或令牌</td></tr>
<tr><td>架構變更</td><td>需要更改列類型</td><td>無需更改</td></tr>
<tr><td>主要用例</td><td>靜態加密</td><td>PCI DSS、PII 保護</td></tr>
<tr><td>批量性能</td><td>非常好</td><td>良好（FPE），一般（通證化）</td></tr>
<tr><td>密鑰輪換</td><td>是（重新包裝）</td><td>是</td></tr>
</tbody>
</表>

<h3 id="vi-du-thuc-te"><strong>實際範例</strong></h3>

<ul>
<li><p><strong>中轉</strong>：加密資料庫中的電子郵件、地址、醫療資料→長密文，需要解密才能使用</p></li>
<li><p><strong>轉換 FPE</strong>：對信用卡號進行編碼 → 舊版計費系統仍可處理 16 位數格式</p></li>
<li><p><strong>轉變令牌化</strong>：將信用卡替換為令牌→完全脫離 PCI 範圍的開發/測試環境</p></li>
<li><p><strong>轉換屏蔽</strong>：在 UI 上顯示 ****1234 → 無法恢復原始資料</p></li>
</ul>

<h2 id="6-tich-hop-database"><strong>6。與資料庫視圖整合</strong></h2>

<pre><code class="language-sql">-- PostgreSQL 視圖 Vault 轉換
-- 應用程式 Vault API 並解碼 khi cần

-- 表 gốc lưu 標記化數據
建立表訂單（
  id 串行主鍵，
  客戶名稱文本，
  card_token TEXT, -- 標記化值
  card_last4 TEXT, -- 屏蔽值cho顯示
  金額 DECIMAL(10,2),
  建立時間為 TIMESTAMPTZ 預設值 NOW()
）；

-- 申請流程：
-- 1. 用戶nhập卡號
-- 2. App gửi đến Vault Transform → nhận token + masked
-- 3. Lưu token vào card_token, masked vào card_last4
-- 4. Khi cần 充值 → 應用程式 gửi 代幣 đến Vault → nhận 卡號 gốc
-- 5. 儲值卡透過明文存儲
</code></pre>

<h2 id="7-tong-ket"><strong>7.摘要</strong></h2>

<ul>
<li><p><strong>FPE</strong> — 保留格式的編碼，與舊系統相容</p></li>
<li><p><strong>屏蔽</strong> - 屏蔽數據，不可逆，用於 UI/日誌</p></li>
<li><p><strong>令牌化</strong> - 替換為隨機令牌，取消環境範圍</p></li>
<li><p><strong>Transit</strong> — 基本加密，社群版</p></li>
<li><p><strong>轉型</strong> — 進階資料保護，企業</p></li>
</ul>

<p>下一篇文章將探討 KMIP、Consul、Nomad Secrets Engines 以及如何為 Vault 開發自訂外掛程式。 </p>
