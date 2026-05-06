---
id: 019d8b30-b214-7001-c002-e0c5f8200114
title: 第 14 課：策略 - ACL、Sentinel 和 RBAC
slug: bai-14-policies-acl-sentinel-va-rbac
description: Vault 策略系統、HCL 策略語法、基於路徑的策略、功能、策略範本、細粒度控制、Sentinel 策略（企業）、EGP、RGP、測試。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 14
section_title: 第 3 部分：身份驗證方法 - 身份驗證和授權
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-1303" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-1303）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="764" cy="222" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="928" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1092" cy="90" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="756" cy="154" r="28" fill="#f472b6" opacity="0.13"/>
    <圓cx =“920”cy =“218”r =“20”填滿=“#f472b6”不透明度=“0.05”/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <line x1 =“600”y1 =“222”x2 =“1100”y2 =“302”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“252”x2 =“1050”y2 =“322”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「954.0429399400242,103.5 954.0429399400242,140.5 922,159 889.9570600599758,140.5 889.9570600599758,103.50000000000001 922,85" 填滿 = "無" 描邊 = "#f472b6" 描邊寬度 = = "1" 不透明度 = = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f472b6”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f472b6”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 14 堂課</text>

  <!-- 標題 -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 14 課：策略 - ACL、Sentinel 和 RBAC</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證方法 - 驗證與授權</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-policy-system"><strong>1. Vault策略系統</strong></h2>

<p>Vault 使用<strong>基於策略的存取控制</strong>來控制存取。 Vault 上的每個操作都必須得到策略的允許。策略以 HCL（HashiCorp 設定語言）或 JSON 編寫。 </p>

<h3 id="nguyen-tac-co-ban"><strong>基礎</strong></h3>

<ul>
<li><p><strong>預設拒絕</strong> - 預設拒絕一切，除非策略允許</p></li>
<li><p><strong>基於路徑</strong> - 與 API 路徑關聯的策略</p></li>
<li><p><strong>累加性</strong> - 許多政策組合（聯合），最高權威獲勝</p></li>
<li><p><strong>拒絕獲勝</strong> — 如果有任何策略拒絕 → 拒絕（root 除外）</p></li>
</ul>

<h3 id="built-in-policies"><strong>內建政策</strong></h3>

<表>
<標題>
<tr><th>政策</th><th>說明</th><th>可以刪除嗎？ </th></tr>
</標題>
<正文>
<tr><td><code>root</code></td><td>完全權限，跳過所有檢查</td><td>否</td></tr>
<tr><td><code>預設</code></td><td>分配給所有token，允許基本操作</td><td>否（可編輯）</td></tr>
</tbody>
</表>

<h2 id="2-hcl-policy-syntax"><strong>2. HCL 策略語法</strong></h2>

<h3 id="capability"><strong>功能</strong></h3>

<表>
<標題>
<tr><th>功能</th><th>HTTP 動詞</th><th>描述</th></tr>
</標題>
<正文>
<tr><td><code>建立</code></td><td>POST</td><td>建立新資料</td></tr>
<tr><td><code>讀取</code></td><td>GET</td><td>讀取資料</td></tr>
<tr><td><code>更新</code></td><td>POST/PUT</td><td>更新資料</td></tr>
<tr><td><code>刪除</code></td><td>刪除</td><td>刪除資料</td></tr>
<tr><td><code>列表</code></td><td>LIST</td><td>列表鍵</td></tr>
<tr><td><code>sudo</code></td><td>—</td><td>允許在根保護路徑上進行操作</td></tr>
<tr><td><code>拒絕</code></td><td>—</td><td>拒絕所有訪問（總是獲勝）</td></tr>
<tr><td><code>補丁</code></td><td>PATCH</td><td>部分更新（KV v2）</td></tr>
</tbody>
</表>

<h3 id="vi-du-policy"><strong>基本政策範例</strong></h3>

<pre><code class="language-hcl">#policy-dev-team.hcl# KV cho 團隊開發的秘密
路徑“秘密/資料/dev/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」、「修補」]
}

路徑「秘密/元資料/dev/*」{
  功能= [“清單”，“讀取”，“刪除”]
}

# Chỉ đọc 秘密製作
路徑“秘密/數據/生產/*”{
  能力= [“讀”]
}

# Sinh 資料庫憑證
路徑“資料庫/creds/dev-readonly”{
  能力= [“讀”]
}

# Không được truy cập 管理路徑
路徑“sys/*”{
  能力= [“拒絕”]
}

# Cho phép đọc 健康狀況
路徑“系統/健康”{
  能力= [“讀”]
}

# 自我管理代幣
路徑“auth/token/lookup-self”{
  能力= [“讀”]
}

路徑“auth/token/renew-self”{
  能力= [“更新”]
}
</code></pre>

<h3 id="glob-patterns"><strong>全域模式</strong></h3>

<pre><code class="language-hcl"># * khớp mọi ký tự trong một 段
路徑“秘密/數據/團隊-*”{
  能力= [“讀”]
}
# Khớp：秘密/數據/團隊-alpha，秘密/數據/團隊-beta
# Không khớp：秘密/資料/team-alpha/sub

# + khớp ít nhất một 段 (bao gồm /)
路徑“秘密/數據/團隊-alpha/+”{
  能力= [“讀”]
}
# Khớp: 秘密/資料/team-alpha/db, 秘密/資料/team-alpha/api/keys
</code></pre>

<h3 id="fine-grained-control"><strong>細粒度控制</strong></h3>

<pre><code class="language-hcl"># Cho phép tạo nhưng chỉ với 參數 cụ thể
路徑“秘密/資料/生產/資料庫”{
  功能= [“創建”，“更新”]
  允許的參數 = {
    "data" = [] # Mọi giá trị
  }
  拒絕參數 = {
    "data" = ["*root*", "*admin*"] # Không cho key chứa root/admin
  }
}

# TTL 限制
路徑“資料庫/信用/生產”{
  能力= [“讀”]
  min_wrapping_ttl = "5m"
  max_wrapping_ttl = "30m"
}

# 必填參數
路徑“auth/approle/role/*”{
  功能= [“創建”，“更新”]
  required_parameters = ["token_policies", "secret_id_ttl"]
}
</code></pre>

<h2 id="3-policy-templates"><strong>3.策略範本</strong></h2>

<p>策略範本允許使用身分資訊建立動態策略：</p>

<pre><code class="language-hcl"># Mỗi user chỉ truy cập được KV path của mình
路徑「秘密/資料/使用者/{{identity.entity.name}}/*」{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}

# Dựa trên 元數據
路徑「秘密/資料/團隊/{{identity.entity.metadata.team}}/*」{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}

#Dựa trên 組
路徑「秘密/資料/群組/{{identity.groups.names.*.id}}/*」{
  能力= [“讀取”，“列表”]
}

# Dựa trên auth 方法別名
路徑「secret/data/k8s/{{identity.entity.aliases.auth_kubernetes_abc123.metadata.service_account_namespace}}/*」{
  能力= [“讀”]
}
</code></pre>

<h2 id="4-quan-ly-policies"><strong>4.管理策略</strong></h2>

<pre><code class="language-bash"># Tạo/cập nhật 策略文件
vault policy write dev-team policy-dev-team.hcl

# Tạo 政策 từ stdin
vault policy write admin-policy - &lt;&lt;EOF
路徑“sys/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」、「sudo」]
}
路徑“秘密/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}
EOF

# Liệt kê 政策
vault policy list

# 政策
vault policy read dev-team

# Xóa 政策
vault policy delete dev-team

# 格式化/驗證策略文件
vault policy fmt policy-dev-team.hcl# 測試能力
vault token capabilities &lt;token&gt; secret/data/dev/app1
# 建立、刪除、列出、讀取、更新

# 測試功能 của token hiện tại
vault token capabilities -self secret/data/dev/app1
</code></pre>

<h2 id="5-rbac-pattern"><strong>5。帶有 Vault 策略的 RBAC 模式</strong></h2>

<h3 id="organizational-rbac"><strong>組織的 RBAC 設計</strong></h3>

<pre><code class="language-hcl"># === 角色：vault-admin ===
# 策略-vault-admin.hcl
路徑“sys/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」、「sudo」]
}
路徑“auth/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」、「sudo」]
}

# === 角色：secrets-admin ===
# 策略秘密-admin.hcl
路徑“秘密/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}
路徑“資料庫/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}
路徑“pki/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}

# === 角色：開發人員 ===
# 策略開發者.hcl
路徑“秘密/資料/dev/*”{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}
路徑「資料庫/creds/dev-*」{
  能力= [“讀”]
}
路徑“pki/issue/dev-cert”{
  功能= [“創建”，“更新”]
}

# === 角色：操作員 ===
# 策略操作符.hcl
路徑“秘密/數據/生產/*”{
  能力= [“讀”]
}
路徑“資料庫/creds/prod-readonly”{
  能力= [“讀”]
}
路徑“系統/健康”{
  能力= [“讀”]
}
路徑“系統/指標”{
  能力= [“讀”]
}
</code></pre>

<h3 id="gan-policies-cho-groups"><strong>分配策略給身分群組</strong></h3>

<pre><code class="language-bash"># Tạo 內部組
vault write identity/group \
  名稱=“平台團隊”\
  政策=“秘密管理，保管庫管理”\
  member_entity_ids =“實體uuid-1，實體uuid-2”

# 外部群組（映射到 LDAP/OIDC）
vault write identity/group \
  名稱=“開發人員”\
  類型=“外部”\
  政策=“開發商”

# 映射外部群組 → LDAP 群組
vault write identity/group-alias \
  name="CN=開發人員、OU=群組、DC=公司、DC=com" \
  mount_accessor =“auth_ldap_abc123”\
  canonical_id="<組 ID>"
</code></pre>

<h2 id="6-sentinel-policies"><strong>6.哨兵策略（企業）</strong></h2>

<p><strong>Sentinel</strong> 是 HashiCorp 的策略即程式碼框架，它允許使用 Sentinel 語言建立比 ACL 更複雜的策略。 Sentinel 策略可以檢查請求上下文、一天中的時間、IP 位址和許多其他因素。 </p>

<h3 id="sentinel-types"><strong>兩種類型的 Sentinel 策略</strong></h3>

<表>
<標題>
<tr><th>類型</th><th>描述</th><th>範圍</th></tr>
</標題>
<正文>
<tr><td><strong>EGP</strong>（端點管理）</td><td>附加到特定 API 路徑</td><td>對該路徑的所有請求</td></tr>
<tr><td><strong>RGP</strong>（角色管理）</td><td>附加到令牌/身分</td><td>來自該身分的所有請求</td></tr>
</tbody>
</表>

<h3 id="egp-vi-du"><strong>EGP 範例 - 僅工作時間</strong></h3>

<pre><code class="language-python"># Chỉ cho phép truy cập 生產秘密 trong giờ làm việc
導入“時間”
導入“字串”

# Lấy thời gian hiện tại (UTC+7 cho 越南)
當前時間 = 時間.現在.小時 + 7
如果當前時間 >= 24 {
  當前時間 = 目前時間 - 24
}# Kiểm tra ngày trong tuần (1=星期一，7=星期日)
current_day = 時間.現在.工作日

# 營業時間：週一至週五，7:00-19:00 ICT
is_business_hours = current_day >= 1 且 current_day <= 5 且
                    current_hour >= 7 且 current_hour < 19

# Cho phép nếu trong 營業時間 hoặc là 緊急路徑
主要=規則{
  is_business_hours 或
  strings.has_prefix(request.path, "秘密/資料/緊急/")
}
</code></pre>

<pre><code class="language-bash"># Tạo EGP
vault write sys/policies/egp/business-hours \
  政策=“$（貓營業時間.sentinel）”\
  forcement_level="軟強制" \
  路徑=“秘密/數據/生產/*”
</code></pre>

<h3 id="rgp-vi-du"><strong>RGP 範例 - 請求驗證</strong></h3>

<pre><code class="language-python"># Yêu cầu MFA cho 操作 trên 生產
導入“MFA”
導入“字串”

# Kiểm tra nếu path là 製作
is_product = strings.has_prefix(request.path, "秘密/資料/生產/")

# 生產作業 cần MFA
main = is_生產時的規則 {
  mfa.methods.totp.valid
}
</code></pre>

<h3 id="enforcement-levels"><strong>執行等級</strong></h3>

<表>
<標題>
<tr><th>等級</th><th>失敗行為</th></tr>
</標題>
<正文>
<tr><td><code>諮詢</code></td><td>記錄警告，仍允許</td></tr>
<tr><td><code>軟強制</code></td><td>拒絕，但可以用 sudo 覆蓋</td></tr>
<tr><td><code>硬強制</code></td><td>拒絕，無法覆蓋</td></tr>
</tbody>
</表>

<h2 id="7-policy-testing"><strong>7.策略測試與除錯</strong></h2>

<pre><code class="language-bash"># Kiểm tra 功能 cụ thể
vault token capabilities -self secret/data/dev/app1

# Tạo 測試代幣 với 政策
vault token create -policy=dev-team -ttl=5m

# 測試操作
VAULT_TOKEN="test-token" 保管庫 kv 取得機密/dev/app1
VAULT_TOKEN="test-token" 保管庫 kv put Secret/dev/app1 key=value
VAULT_TOKEN="test-token"Vault kv get Secret/Production/db # 預期：權限被拒絕

# 驗證策略語法
vault policy fmt -check policy-file.hcl
</code></pre>

<h2 id="8-tong-ket"><strong>8。摘要</strong></h2>

<ul>
<li><p><strong>ACL 策略</strong> — 基於路徑、功能、全域模式、細粒度控制</p></li>
<li><p><strong>策略範本</strong> - 使用身分資料的動態策略</p></li>
<li><p><strong>RBAC 模式</strong> — 以群組為基礎的策略分配與組織結構</p></li>
<li><p><strong>哨兵策略</strong>（企業）- 策略即程式碼，複雜的業務規則</p></li>
</ul>

<p>下一篇文章將探討身分秘密引擎、實體、群組和多重身分驗證 - 完善 Vault 中的身分管理圖片。 </p>
