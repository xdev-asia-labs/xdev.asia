---
id: 019d8b30-b205-7001-c002-e0c5f8200105
title: 第 5 課：令牌、租賃和續約
slug: bai-5-tokens-leases-va-renewal
description: >-
  令牌類型（服務令牌、批次令牌）、令牌層次結構和孤立令牌、令牌存取器、令牌角色、定期令牌、令牌 TTL 和最大
  TTL。租賃概念、租賃期間、租賃續約（保管庫租賃續約）、租賃撤銷（保管庫租賃撤銷）和基於前綴的撤銷。用於安全秘密分發的 Cubbyhole 回應包裝。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 1 部分：HashiCorp Vault 平台
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-1464" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-1464）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="706" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“862”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <line x1 =“600”y1 =“188”x2 =“1100”y2 =“268”筆畫=“#2dd4bf”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“218”x2 =“1050”y2 =“288”筆觸=“#2dd4bf”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=“1075.2390923627308,216.5 1075.2390923627308,259.5 1038,281 1000.7609076372692,259.5 10627609076372692,259.5 10962,692627,692,2596. 1038,195" 填滿 = "無" 描邊 = "#2dd4bf" 描邊寬度 = "1" 不透明度 = = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#2dd4bf”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#2dd4bf”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 5 課</text>

  <!-- 標題 -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 5 課：代幣、租賃與續約</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HashiCorp Vault 平台</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

HashiCorp Vault 上的每個操作（讀取機密、寫入資料、配置策略）都需要 **令牌**。令牌是 Vault 的中央驗證機制 - 無論您如何登入（使用者密碼、LDAP、OIDC、AWS IAM...），最終結果始終是 Vault 令牌。

令牌包含**租賃**的概念 - 令牌和動態秘密的生命週期管理機制（術語）。租賃可確保沒有永久訪問，從而最大限度地降低憑證洩露的風險。

本課將深入探討：

- 代幣類型和特徵
- 令牌層次結構、孤兒令牌、存取器
- 令牌 TTL、最大 TTL 和週期性令牌
- 租賃概念、續約和撤銷
- Cubbyhole 響應包裝

## 1. 代幣類型

### 1.1 服務令牌

服務令牌是 Vault 中最傳統和最受歡迎的令牌。

**特點：**

- 具有**令牌存取器**（用於在不知道令牌值的情況下管理令牌）
- 儲存在**儲存後端**（Raft、Consul 等）
- **續訂**支援（TTL擴充）
- 為每個代幣創建單獨的 **Cubbyhole**
- Tham gia **父子層次結構**（代幣樹）
- 可以創建**子代幣**
- 前綴：`hvs.`（Vault 服務令牌）

```bash
# Tạo service token
vault token create -policy=my-policy -ttl=1h

# Output:
# Key                  Value
# ---                  -----
# token                hvs.CAESIGxyz123...
# token_accessor       aAbBcCdDeE...
# token_duration       1h
# token_renewable      true
# token_policies       ["default" "my-policy"]
# identity_policies    []
# policies             ["default" "my-policy"]
# token_type           service
```

### 1.2 批量代幣

Batch Token 是一種輕量級令牌，專為高效能工作負載而設計。

**特點：**

- **不保存在儲存中** - 所有資訊都編碼在令牌本身中（加密的 blob）
- **無令牌存取器**
- **無隔間**
- **不可更新** — 當 TTL 用完時，必須建立新令牌
- **不參與等級制度** — 始終是孤兒
- **無法創建子代幣**
- 比服務代幣大得多
- 前綴：`hvb.`（Vault Batch 令牌）

```bash
# Tạo batch token
vault token create -type=batch -policy=my-policy -ttl=1h

# Output:
# Key                  Value
# ---                  -----
# token                hvb.AAAAAQxxxxxxxxxxxx...  # Dài hơn nhiều
# token_accessor       n/a
# token_duration       1h
# token_renewable      false
# token_policies       ["default" "my-policy"]
# token_type           batch
```

### 1.3 比較服務令牌與批次令牌|特點|服務代幣 |批量代幣 |
| ---| ---| ---|
|儲存在儲存空間 | ✅ 是的 | ❌ 否 |
|令牌存取器 | ✅ 是的 | ❌ 否 |
|隔間| ✅ 是的 | ❌ 否 |
|再生能源| ✅ 是的 | ❌ 否 |
|兒童代幣| ✅ 創建 | ❌ 否 |
|撤銷| ✅ 明確 |僅超出 TTL |
|性能|降低| ✅ 更高 |
|尺寸|小（~95 位元組）|大（~500+ 位元組）|
|使用案例 |一般，管理者 |高通量、短暫 |

### 1.4 何時使用哪一種類型的令牌？

```
Service Token → Khi cần:
  ├── Renewal (gia hạn)
  ├── Revocation (thu hồi tức thì)
  ├── Cubbyhole (response wrapping)
  ├── Token hierarchy (parent-child)
  └── Audit trail (token accessor tracking)

Batch Token → Khi cần:
  ├── High throughput (microservices, serverless)
  ├── Minimal storage overhead
  ├── Stateless systems
  └── Short-lived operations
```

## 2. 代幣層次結構

### 2.1 親子關係

每個服務令牌（根令牌和孤立令牌除外）都有一個**父令牌**。當父級被撤銷時，整個子樹（子代幣和相關租約）也被撤銷。

```
Root Token
├── Token A (admin)
│   ├── Token A1 (app-1)
│   │   ├── Token A1a (worker-1)
│   │   └── Token A1b (worker-2)
│   └── Token A2 (app-2)
└── Token B (devops)
    └── Token B1 (ci-cd)

# Nếu revoke Token A:
# → Token A1, A1a, A1b, A2 đều bị revoke
# → Token B, B1 KHÔNG bị ảnh hưởng
```

```bash
# Revoke một token → toàn bộ tree con bị revoke
vault token revoke hvs.token-A

# Xem token hierarchy (qua accessor)
vault token lookup -accessor aAbBcCdDeE
```

### 2.2 孤兒代幣

孤兒代幣不屬於任何層次結構 - 它們獨立存在，當父代幣被撤銷時不受影響。

```bash
# Tạo orphan token (yêu cầu quyền sudo hoặc root)
vault token create -orphan -policy=my-policy -ttl=24h

# Hoặc dùng auth method — tokens từ auth method mặc định là orphan
vault login -method=userpass username=admin
# → Token này là orphan (không có parent trong tree)
```

> ⚠️ **注意：** 當父代幣過期時，孤兒代幣不會被撤銷。應該有一個單獨的管理流程，以避免「孤立」代幣停留時間過長。

### 2.3 令牌查找

```bash
# Xem thông tin token hiện tại
vault token lookup

# Output:
# Key                 Value
# ---                 -----
# accessor            aAbBcCdD...
# creation_time       1705312800
# creation_ttl        768h
# display_name        userpass-admin
# entity_id           xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
# expire_time         2025-02-15T10:00:00Z
# explicit_max_ttl    0s
# id                  hvs.CAESIGxyz...
# issue_time          2025-01-15T10:00:00Z
# meta                map[username:admin]
# num_uses            0
# orphan              true
# path                auth/userpass/login/admin
# policies            [default admin-policy]
# renewable           true
# ttl                 678h45m
# type                service

# Lookup bằng accessor (không cần biết token value)
vault token lookup -accessor aAbBcCdD...

# Lookup token cụ thể
vault token lookup hvs.CAESIGxyz...
```

## 3. 令牌存取器

### 3.1 什麼是令牌存取器？

每個服務令牌都有一個**存取器** - 一個參考 ID，允許在**不知道令牌值**的情況下對令牌執行管理操作。這對於安全性很重要：管理員可以管理令牌而無需存取秘密令牌值。

**存取器允許：**

- 查看代幣元資料（策略、TTL、創建時間）
- 撤銷令牌
- 更新令牌

**存取器不允許：**

- 使用令牌來存取秘密
- 創建子代幣

```bash
# Liệt kê tất cả token accessors
vault list auth/token/accessors

# Output:
# Keys
# ----
# aAbBcCdDeEfF...
# gGhHiIjJkKlL...
# mMnNoOpPqQrR...

# Lookup token qua accessor
vault token lookup -accessor aAbBcCdDeEfF

# Revoke token qua accessor
vault token revoke -accessor aAbBcCdDeEfF

# Renew token qua accessor
vault token renew -accessor aAbBcCdDeEfF
```

### 3.2 使用存取器管理令牌的腳本

```bash
#!/bin/bash
# list-and-audit-tokens.sh
# Liệt kê tất cả tokens và thông tin chi tiết

echo "=== Vault Token Audit ==="
echo ""

# Lấy danh sách accessors
ACCESSORS=$(vault list -format=json auth/token/accessors | jq -r '.[]')

echo "Token Accessor | Display Name | Policies | TTL | Orphan"
echo "--- | --- | --- | --- | ---"

for accessor in $ACCESSORS; do
  # Lookup từng token qua accessor
  INFO=$(vault token lookup -accessor "$accessor" -format=json 2>/dev/null)
  if [ $? -eq 0 ]; then
    DISPLAY=$(echo "$INFO" | jq -r '.data.display_name')
    POLICIES=$(echo "$INFO" | jq -r '.data.policies | join(",")')
    TTL=$(echo "$INFO" | jq -r '.data.ttl')
    ORPHAN=$(echo "$INFO" | jq -r '.data.orphan')

    echo "${accessor:0:16}... | $DISPLAY | $POLICIES | ${TTL}s | $ORPHAN"
  fi
done
```

## 4. 代幣角色

### 4.1 什麼是代幣角色？

Token Role是Token創建的設定範本。您無需在每次建立令牌時指定多個參數，而是定義一個角色並引用它。

```bash
# Tạo token role
vault write auth/token/roles/app-role \
  allowed_policies="app-read,app-write" \
  disallowed_policies="admin" \
  orphan=true \
  renewable=true \
  token_period=0 \
  token_ttl=1h \
  token_max_ttl=24h \
  token_explicit_max_ttl=0 \
  token_type=service \
  token_num_uses=0 \
  token_no_default_policy=false

# Tạo token từ role
vault token create -role=app-role -policy=app-read

# Xem role config
vault read auth/token/roles/app-role
```

### 4.2 Token Role重要參數

```bash
# Role cho CI/CD pipeline — token ngắn hạn, không renewable
vault write auth/token/roles/cicd-role \
  allowed_policies="cicd-deploy" \
  orphan=true \
  renewable=false \
  token_ttl=30m \
  token_max_ttl=1h \
  token_type=batch \
  token_num_uses=10         # Chỉ dùng được 10 lần

# Role cho application — periodic token, tự renew
vault write auth/token/roles/app-periodic-role \
  allowed_policies="app-read" \
  orphan=true \
  renewable=true \
  token_period=1h           # Token không hết hạn nếu renew đều đặn
  token_type=service

# Role cho admin — limited, không orphan
vault write auth/token/roles/limited-admin \
  allowed_policies="admin-read" \
  disallowed_policies="root" \
  orphan=false \
  renewable=true \
  token_ttl=2h \
  token_max_ttl=8h
```

## 5. TTL、最大 TTL 和週期性令牌

### 5.1 令牌 TTL（生存時間）

TTL 決定令牌的有效時間。當 TTL 過期時，令牌將自動撤銷。

```
                    Token Lifecycle
                    
Created ──────────────────────────────── Expired
  │                                        │
  │◄──────── TTL (1h) ────────────────────►│
  │                                        │
  │    Renew    Renew    Renew             │
  │      │        │        │               │
  │      ▼        ▼        ▼               │
  │  ┌──1h──┐ ┌──1h──┐ ┌──1h──┐          │
  │  │      │ │      │ │      │    Max TTL │
  │◄─┴──────┴─┴──────┴─┴──────┴──────────►│
  │                                        │
  0h       1h       2h       3h     ...   32d (default max)
```

```bash
# Tạo token với TTL 1 giờ
vault token create -policy=my-policy -ttl=1h

# Xem TTL còn lại
vault token lookup -format=json | jq '.data.ttl'

# Các system default
vault read sys/auth/token/tune
# default_lease_ttl    768h (32 days)
# max_lease_ttl        768h (32 days)
```

### 5.2 最大 TTL

最大 TTL 是一個硬性限制－令牌的更新不能超過 `creation_time + max_ttl`。然後強制重新創建令牌。

```bash
# Hệ thống TTL hierarchy (áp dụng giá trị nhỏ nhất)
#
# 1. System Max TTL (sys/config/default-lease-ttl)
#    └── Mặc định: 768h (32 ngày)
#
# 2. Auth Mount Max TTL
#    vault auth tune -max-lease-ttl=48h auth/userpass/
#
# 3. Auth Role Max TTL
#    vault write auth/userpass/users/admin token_max_ttl=24h ...
#
# 4. Token Create Max TTL
#    vault token create -explicit-max-ttl=12h

# Ví dụ:
# System Max: 768h
# Mount Max:  48h
# Role Max:   24h
# → Token Max TTL = 24h (giá trị nhỏ nhất)

# Cấu hình default TTL cho auth mount
vault auth tune -default-lease-ttl=1h -max-lease-ttl=24h auth/userpass/
```

### 5.3 週期性代幣

週期性令牌有一個特殊功能：**不受最大 TTL 限制**。每次更新時，TTL 都會重設為值 `period` — 只要定期更新，令牌就可以無限期地存在。

```bash
# Tạo periodic token (yêu cầu quyền sudo)
vault token create \
  -policy=app-read \
  -period=1h

# Output:
# token_duration    1h
# token_renewable   true
# token_policies    [default app-read]

# Renew periodic token → TTL reset về 1h mỗi lần
vault token renew hvs.periodic-token-xxx
# → ttl: 1h (reset, không bị max TTL giới hạn)
```

> 📌 **用例 cho 週期性令牌：**
>
> - 長時間運行的應用程式（始終在 TTL 過期之前更新）
> - Vault Agent（自動更新令牌）
> - CI/CD 管道持續運行
> - 微服務需要穩定的代幣

```bash
# Ví dụ: Application tự renew periodic token
# renew-token.sh — chạy bằng cron mỗi 30 phút

#!/bin/bash
VAULT_TOKEN=$(cat /etc/vault.d/.vault-token)
RESULT=$(curl -s \
  -X PUT \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  "${VAULT_ADDR}/v1/auth/token/renew-self" \
  -d '{"increment": "1h"}')

TTL=$(echo "$RESULT" | jq -r '.auth.lease_duration')
echo "$(date): Token renewed. New TTL: ${TTL}s"
```

## 6. 租賃

### 6.1 什麼是租賃？

租約是附加到每個秘密或令牌的元數據，確定其有效期。當租約到期時，Vault 會自動**撤銷**秘密或相關令牌。

```
                    Lease Lifecycle
                    
┌─────────────────────────────────────────────────┐
│ Secret Created              Secret Revoked       │
│     │                           │                │
│     │◄─── Lease Duration ──────►│                │
│     │         (1h)              │                │
│     │                           │                │
│     │  Renew (+30m)             │                │
│     │     │                     │                │
│     │     │◄── New Duration ──►│                │
│     │     │      (1h)          │                │
│     │                    Max TTL│                │
│     │◄──────────────────────────►                │
│                                                   │
└─────────────────────────────────────────────────┘
```

每個租約都有：

- **租賃 ID：** 唯一識別碼 cho Lease
- **租賃期限：** 剩餘時間 (TTL)
- **可續訂：** 可續訂或不續訂### 6.2 查看租賃信息

```bash
# Khi đọc dynamic secret, Vault trả về lease info
vault read database/creds/my-role

# Output:
# Key                Value
# ---                -----
# lease_id           database/creds/my-role/abc123def456...
# lease_duration     1h
# lease_renewable    true
# password           A1a-xxxxxxxxxx
# username           v-userpass-my-role-xxxxxxxxxx

# Xem chi tiết lease
vault lease lookup database/creds/my-role/abc123def456

# Output:
# Key             Value
# ---             -----
# expire_time     2025-01-15T11:00:00Z
# id              database/creds/my-role/abc123def456
# issue_time      2025-01-15T10:00:00Z
# last_renewal    <nil>
# renewable       true
# ttl             45m30s
```

### 6.3 續租

```bash
# Renew lease — gia hạn thêm thời gian
vault lease renew database/creds/my-role/abc123def456

# Renew với increment cụ thể
vault lease renew -increment=2h database/creds/my-role/abc123def456

# Output:
# Key                Value
# ---                -----
# lease_id           database/creds/my-role/abc123def456
# lease_duration     2h
# lease_renewable    true
```

**更新 API：**

```bash
curl -X PUT \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  "${VAULT_ADDR}/v1/sys/leases/renew" \
  -d '{
    "lease_id": "database/creds/my-role/abc123def456",
    "increment": 7200
  }'
```

> ⚠️ **注意：** 如果超過最大 TTL，Vault 可能會傳回短於請求增量的租約期限。始終檢查 `lease_duration` 作為回應。

### 6.4 租約撤銷

```bash
# Revoke một lease cụ thể
vault lease revoke database/creds/my-role/abc123def456
# → Database credential (user) bị xóa/vô hiệu hóa ngay lập tức

# Revoke theo prefix — revoke TẤT CẢ leases với prefix
vault lease revoke -prefix database/creds/my-role/
# → Tất cả credentials cho role "my-role" bị revoke

# Revoke toàn bộ leases của một secrets engine
vault lease revoke -prefix database/
# → Tất cả database credentials bị revoke

# Force revoke (bỏ qua errors từ backend)
vault lease revoke -force database/creds/my-role/abc123def456
```

### 6.5 基於前綴的撤銷

基於前綴的撤銷是事件回應的強大工具：

```bash
# Scenario: Phát hiện database bị xâm nhập
# → Revoke TẤT CẢ database credentials ngay lập tức

# Revoke tất cả credentials cho một database role
vault lease revoke -prefix database/creds/compromised-role/

# Revoke tất cả credentials cho toàn bộ database engine
vault lease revoke -prefix database/

# Revoke tất cả dynamic secrets trên AWS
vault lease revoke -prefix aws/

# Kiểm tra: liệt kê leases (nên trống sau khi revoke)
vault list sys/leases/lookup/database/creds/my-role/
```

### 6.6 查看所有租賃

```bash
# Liệt kê leases theo path
vault list sys/leases/lookup/database/creds/my-role/

# Output:
# Keys
# ----
# abc123def456...
# ghi789jkl012...
# mno345pqr678...

# Đếm số leases đang active
vault list -format=json sys/leases/lookup/database/creds/my-role/ | jq '. | length'
# Output: 3
```

## 7. Cubbyhole 響應包裝

### 7.1 什麼是Cubbyhole？

每個服務令牌都有一個單獨的 **cubbyhole** - 一個只能由該令牌存取的秘密儲存。當令牌被撤銷時，小隔間也會被刪除。沒有其他令牌（甚至 root）可以存取另一個令牌的小房間。

```bash
# Ghi vào cubbyhole
vault write cubbyhole/my-secret password="super-secret-123"

# Đọc từ cubbyhole (chỉ token hiện tại mới đọc được)
vault read cubbyhole/my-secret

# Liệt kê keys trong cubbyhole
vault list cubbyhole/
```

### 7.2 回應包裝

響應包裝使用 cubbyhole 來**安全地分發秘密**。 Vault 不是直接發送秘密，而是創建一個**包裝令牌**，其中包含在小隔間中的秘密。接收者僅使用包裝令牌來解開（讀取）秘密一次。

```
┌────────────────────────────────────────────────────────┐
│  Quy trình Response Wrapping                            │
│                                                          │
│  1. Admin yêu cầu secret với -wrap-ttl                  │
│     ┌─────┐                         ┌───────┐          │
│     │Admin│ ──vault read -wrap-ttl──►│ Vault │          │
│     └─────┘                         └───┬───┘          │
│                                         │               │
│  2. Vault tạo wrapping token + cubbyhole │               │
│     ┌──────────────────┐                │               │
│     │Wrapping Token    │◄───────────────┘               │
│     │  hvs.wrap-xxx    │                                │
│     │  cubbyhole:      │                                │
│     │    {secret data} │                                │
│     └──────────────────┘                                │
│                                                          │
│  3. Admin gửi wrapping token cho App                    │
│     ┌─────┐  hvs.wrap-xxx  ┌─────┐                     │
│     │Admin│ ───────────────►│ App │                     │
│     └─────┘                 └──┬──┘                     │
│                                │                         │
│  4. App unwrap → nhận secret (1 lần duy nhất)           │
│     ┌─────┐                  ┌───────┐                  │
│     │ App │ ──unwrap────────►│ Vault │                  │
│     └─────┘                  └───┬───┘                  │
│                                  │                       │
│     ← {secret data}  ───────────┘                       │
│     (wrapping token bị revoke ngay sau đó)              │
│                                                          │
└────────────────────────────────────────────────────────┘
```

### 7.3 使用回應包裝

```bash
# Wrap khi đọc secret
vault read -wrap-ttl=5m secret/data/db-creds

# Output:
# Key                              Value
# ---                              -----
# wrapping_token                   hvs.CAESI_wrap_token_xxx...
# wrapping_accessor                aAbBcCdD...
# wrapping_token_ttl               5m
# wrapping_token_creation_time     2025-01-15T10:00:00Z
# wrapping_token_creation_path     secret/data/db-creds

# Gửi wrapping_token cho người/app cần nhận secret
# (qua secure channel — không cần quá bảo mật vì token chỉ dùng 1 lần)

# Unwrap (người nhận thực hiện)
VAULT_TOKEN=hvs.CAESI_wrap_token_xxx vault unwrap

# Output:
# Key         Value
# ---         -----
# data        map[password:db-pass-123 username:db-admin]
# metadata    map[created_time:2025-01-15T10:00:00Z ...]

# Thử unwrap lần 2 → THẤT BẠI (chỉ dùng được 1 lần)
VAULT_TOKEN=hvs.CAESI_wrap_token_xxx vault unwrap
# Error: wrapping token is not valid or does not exist
```

### 7.4 建立代幣時換行

```bash
# Admin tạo token cho ứng dụng, wrap kết quả
vault token create \
  -policy=app-read \
  -ttl=24h \
  -wrap-ttl=10m

# Output: wrapping_token (không phải actual token)
# → Gửi wrapping_token cho app
# → App unwrap để nhận actual token

# Unwrap phía app
VAULT_TOKEN=hvs.wrapping-token vault unwrap -format=json | jq -r '.auth.client_token'
# → hvs.actual-app-token-xxx
```

### 7.5 檢查包裝令牌（重新包裝和尋找）

```bash
# Lookup wrapping token (kiểm tra xem đã bị unwrap chưa)
vault token lookup hvs.wrapping-token

# Nếu token hợp lệ (chưa unwrap) → trả về metadata
# Nếu đã unwrap hoặc hết TTL → error

# Rewrap — tạo wrapping token mới chứa cùng data
VAULT_TOKEN=hvs.old-wrap-token vault unwrap -wrap-ttl=5m
# → Wrapping token mới, token cũ bị vô hiệu
```

### 7.6 中間人檢測

響應包裝能夠偵測 MITM：

```bash
# Scenario:
# 1. Admin tạo wrapping token, gửi cho App
# 2. Attacker chặn được wrapping token
# 3. Attacker unwrap → lấy được secret
# 4. App unwrap → THẤT BẠI (đã bị unwrap rồi)
# → App phát hiện có ai đó đã đọc secret

# Best practice: App thử unwrap → nếu thất bại → ALARM
# → Admin investigate + revoke credentials + re-issue

# Kiểm tra creation path (anti-tampering)
vault write sys/wrapping/lookup token=hvs.wrapping-token-xxx
# → wrapping_token_creation_path cho biết secret gốc từ đâu
```

## 8. 代幣管理最佳實踐

### 8.1 一般原則

```bash
# 1. Luôn thiết lập TTL cho tokens
vault token create -policy=app -ttl=1h  # ✅
vault token create -policy=app          # ⚠️ Dùng default TTL

# 2. Sử dụng token roles để chuẩn hóa
vault write auth/token/roles/standard-app \
  allowed_policies="app-read" \
  token_ttl=1h \
  token_max_ttl=24h \
  orphan=true

# 3. Dùng batch tokens cho workloads ephemeral
vault token create -type=batch -policy=read-only -ttl=30m

# 4. Revoke root token sau khi setup xong
vault token revoke hvs.root-token-xxx
```

### 8.2 自動令牌更新

```python
#!/usr/bin/env python3
"""vault_token_renewer.py - Tự động renew Vault token."""

import os
import time
import logging
import requests

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

VAULT_ADDR = os.environ.get("VAULT_ADDR", "https://vault.example.com:8200")
VAULT_TOKEN = os.environ["VAULT_TOKEN"]

def get_token_ttl():
    """Lấy TTL còn lại của token."""
    resp = requests.get(
        f"{VAULT_ADDR}/v1/auth/token/lookup-self",
        headers={"X-Vault-Token": VAULT_TOKEN},
    )
    resp.raise_for_status()
    return resp.json()["data"]["ttl"]

def renew_token(increment=3600):
    """Renew token."""
    resp = requests.put(
        f"{VAULT_ADDR}/v1/auth/token/renew-self",
        headers={"X-Vault-Token": VAULT_TOKEN},
        json={"increment": str(increment)},
    )
    resp.raise_for_status()
    new_ttl = resp.json()["auth"]["lease_duration"]
    logger.info(f"Token renewed. New TTL: {new_ttl}s")
    return new_ttl

def main():
    """Main loop - renew khi TTL còn dưới 50%."""
    while True:
        ttl = get_token_ttl()
        logger.info(f"Current TTL: {ttl}s")

        # Renew khi còn dưới 50% TTL
        sleep_time = max(ttl * 0.5, 60)  # Ít nhất 60 giây

        if ttl < 300:  # Ít hơn 5 phút → renew ngay
            renew_token()
        else:
            logger.info(f"Sleeping {sleep_time}s before next check")

        time.sleep(sleep_time)

if __name__ == "__main__":
    main()
```

### 8.3 租賃測試腳本即將過期

```bash
#!/bin/bash
# check-expiring-leases.sh
# Kiểm tra leases sắp hết hạn trong vòng 1 giờ

THRESHOLD_SECONDS=3600  # 1 giờ

echo "=== Leases sắp hết hạn (< 1h) ==="
echo ""

# Kiểm tra database leases
PATHS=("database/creds/" "aws/creds/" "pki/issue/")

for base_path in "${PATHS[@]}"; do
  ROLES=$(vault list -format=json "sys/leases/lookup/${base_path}" 2>/dev/null | jq -r '.[]' 2>/dev/null)

  for role in $ROLES; do
    LEASES=$(vault list -format=json "sys/leases/lookup/${base_path}${role}" 2>/dev/null | jq -r '.[]' 2>/dev/null)

    for lease_id_suffix in $LEASES; do
      FULL_LEASE_ID="${base_path}${role}${lease_id_suffix}"
      LEASE_INFO=$(vault lease lookup -format=json "$FULL_LEASE_ID" 2>/dev/null)

      if [ $? -eq 0 ]; then
        TTL=$(echo "$LEASE_INFO" | jq -r '.data.ttl')
        if [ "$TTL" -lt "$THRESHOLD_SECONDS" ]; then
          EXPIRE=$(echo "$LEASE_INFO" | jq -r '.data.expire_time')
          echo "⚠️  $FULL_LEASE_ID"
          echo "   TTL: ${TTL}s | Expires: $EXPIRE"
          echo ""
        fi
      fi
    done
  done
done
```

## 9. 實作實驗室

### 實驗 1：代幣類型與層次結構

```bash
# Setup: Login với root token
export VAULT_ADDR="http://127.0.0.1:8200"
vault login $ROOT_TOKEN

# Tạo policy
vault policy write app-read - <<EOF
path "secret/data/*" {
  capabilities = ["read", "list"]
}
EOF

# 1. Tạo service token (parent)
PARENT=$(vault token create -policy=app-read -ttl=2h -format=json | jq -r '.auth.client_token')
echo "Parent: $PARENT"

# 2. Tạo child token (dùng parent token)
VAULT_TOKEN=$PARENT vault token create -policy=app-read -ttl=1h -format=json
CHILD=$(VAULT_TOKEN=$PARENT vault token create -policy=app-read -ttl=1h -format=json | jq -r '.auth.client_token')
echo "Child: $CHILD"

# 3. Xác nhận child token hoạt động
VAULT_TOKEN=$CHILD vault token lookup

# 4. Revoke parent → child cũng bị revoke
vault token revoke $PARENT

# 5. Xác nhận child không còn hoạt động
VAULT_TOKEN=$CHILD vault token lookup
# → Error: permission denied (đã bị revoke)
```

### 實驗 2：租約續約與撤銷

```bash
# Giả sử đã enable database secrets engine
vault secrets enable database

# Configure database connection (ví dụ PostgreSQL)
vault write database/config/my-postgresql \
  plugin_name=postgresql-database-plugin \
  allowed_roles="my-role" \
  connection_url="postgresql://{{username}}:{{password}}@db.example.com:5432/mydb?sslmode=require" \
  username="vault-admin" \
  password="vault-admin-pass"

# Tạo role
vault write database/roles/my-role \
  db_name=my-postgresql \
  creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
  default_ttl="1h" \
  max_ttl="24h"

# 1. Tạo database credential
vault read database/creds/my-role
# → Ghi nhận lease_id

LEASE_ID="database/creds/my-role/abc123..."

# 2. Kiểm tra lease
vault lease lookup $LEASE_ID

# 3. Renew lease
vault lease renew -increment=2h $LEASE_ID

# 4. Kiểm tra TTL mới
vault lease lookup $LEASE_ID

# 5. Revoke lease
vault lease revoke $LEASE_ID

# 6. Xác nhận credential đã bị xóa khỏi database
# (user không còn tồn tại trong PostgreSQL)
```

### 實驗 3：反應包裝

```bash
# 1. Ghi secret
vault kv put secret/app/db-creds \
  username="app-user" \
  password="super-secret-password"

# 2. Đọc với response wrapping
WRAP_RESULT=$(vault kv get -wrap-ttl=5m -format=json secret/app/db-creds)
WRAP_TOKEN=$(echo "$WRAP_RESULT" | jq -r '.wrap_info.token')
echo "Wrapping Token: $WRAP_TOKEN"

# 3. Kiểm tra wrapping token
vault token lookup $WRAP_TOKEN

# 4. Unwrap (mô phỏng app nhận secret)
VAULT_TOKEN=$WRAP_TOKEN vault unwrap -format=json | jq '.data.data'
# Output:
# {
#   "password": "super-secret-password",
#   "username": "app-user"
# }

# 5. Thử unwrap lần 2 → thất bại
VAULT_TOKEN=$WRAP_TOKEN vault unwrap
# Error: wrapping token is not valid or does not exist

# 6. Wrap token khi tạo
WRAP_TOKEN_CREATE=$(vault token create \
  -policy=app-read \
  -ttl=24h \
  -wrap-ttl=5m \
  -format=json | jq -r '.wrap_info.token')

# 7. App unwrap để nhận actual token
ACTUAL_TOKEN=$(VAULT_TOKEN=$WRAP_TOKEN_CREATE vault unwrap -format=json | jq -r '.auth.client_token')
echo "Actual App Token: $ACTUAL_TOKEN"

# 8. Sử dụng actual token
VAULT_TOKEN=$ACTUAL_TOKEN vault kv get secret/app/db-creds
```

## 總結

|概念 |描述 |
| ---| ---|
| **服務令牌** |全功能令牌，儲存在記憶體中，帶有存取器和小隔間 |
| **批次令牌** |輕量級令牌，無存儲，用於高吞吐量工作負載 |
| **代幣層次結構** |父子關係－撤銷父項將撤銷整個子樹 |
| **孤兒代幣** |獨立令牌，不屬於任何層次結構 |
| **令牌存取器** |參考 ID 允許在不知道代幣價值的情況下進行代幣管理 |
| **代幣角色** | Token產生組態範本－標準化與權限限制|
| **定期令牌** |令牌不受最大 TTL 的限制 — 如果定期更新，則無限期有效 |
| **租賃** |元資料決定秘密/令牌的有效期限 |
| **續租** |租約延期，受最大 TTL 限制 |
| **租約撤銷** |撤銷租約，刪除/停用對應憑證 |
| **小隔間** |每個令牌附加單獨的秘密存放 |
| **回應包裝** |透過包裝令牌安全地分發秘密－僅使用一次 |

在下一篇文章中，我們將了解**審核設備** - 記錄和審核 Vault 上所有操作的系統。
