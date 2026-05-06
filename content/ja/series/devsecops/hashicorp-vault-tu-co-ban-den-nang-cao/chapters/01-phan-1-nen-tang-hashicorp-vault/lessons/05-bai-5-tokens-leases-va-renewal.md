---
id: 019d8b30-b205-7001-c002-e0c5f8200105
title: 'レッスン 5: トークン、リース、更新'
slug: bai-5-tokens-leases-va-renewal
description: トークン タイプ (サービス トークン、バッチ トークン)、トークン階層と孤立トークン、トークン アクセサー、トークン ロール、定期トークン、トークン TTL および最大 TTL。リースの概念、リース期間、リースの更新 (ボールト リースの更新)、リースの取り消し (ボールト リースの取り消し)、およびプレフィックス ベースの取り消し。 Cubbyhole レスポンス ラッピングによる安全なシークレット配布。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 1: HashiCorp Vault プラットフォーム'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1464" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1464)"/>

  <!-- Decorations -->
  <g>
    <circle cx="706" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.2390923627308,216.5 1075.2390923627308,259.5 1038,281 1000.7609076372692,259.5 1000.7609076372692,216.5 1038,195" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 D​​evSecOps — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 5: トークン、リース、更新</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: HashiCorp Vault プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

＃＃ 導入

Mọi thao tác trên HashiCorp Vault (đọc secret, ghi dữ liệu, cấu hình policy) đều yêu cầu một **Token**. Token là cơ chế xác thực trung tâm của Vault — bất kể bạn login bằng phương thức nào (userpass, LDAP, OIDC, AWS IAM...), kết quả cuối cùng luôn là một Vault token.

トークンには、トークンと動的シークレットの両方のライフサイクル管理メカニズム (用語) である **リース** の概念が含まれています。リースにより、アクセスが永続的に行われないことが保証され、資格情報が漏洩するリスクが最小限に抑えられます。

このレッスンでは以下について詳しく説明します。

- トークンの種類と特徴
- Token hierarchy, orphan tokens, accessors
- トークン TTL、最大 TTL、および定期トークン
- リースの概念、更新、取り消し
- Cubbyhole Response Wrapping

## 1. Token Types

### 1.1 Service Tokens

サービス トークンは、Vault で最も伝統的で人気のあるトークンです。

**特性：**

- **トークン アクセサー** を備えています (トークン値を知らずにトークンを管理するために使用されます)
- **ストレージ バックエンド** (Raft、Consul など) に保存されます。
- **更新** サポート (TTL 拡張)
- トークンごとに個別の**カビーホール**を作成します
- Tham gia **parent-child hierarchy** (token tree)
- **子トークン**を作成できます
- Prefix: `hvs.` (Vault Service token)

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

### 1.2 Batch Tokens

バッチ トークンは、高パフォーマンスのワークロード向けに設計された軽量のトークンです。

**特性：**

- **ストレージには保存されません** - すべての情報はトークン自体にエンコードされます (暗号化された BLOB)
- **トークン アクセサーなし**
- **収納穴なし**
- **更新不可** — TTL がなくなると、新しいトークンを作成する必要があります
- **階層に参加しません** — 常に孤児です
- **子トークンを作成できません**
- サービストークンよりも大幅に大きいサイズ
- Prefix: `hvb.` (Vault Batch token)

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

### 1.3 サービストークンとバッチトークンの比較

|特長 |サービストークン |バッチトークン |
| --- | --- | --- |
|ストレージに保存 | ✅ はい | ❌ いいえ |
|トークン アクセサ | ✅ はい | ❌ いいえ |
|カビーホール | ✅ はい | ❌ いいえ |
|再生可能 | ✅ はい | ❌ いいえ |
|子トークン | ✅ 作成 | ❌ いいえ |
|取り消し | ✅ 明示的 | TTL 以外の場合のみ |
|パフォーマンス |下 | ✅ より高い |
|サイズ |小さい (~95 バイト) |大 (~500+ バイト) |
| Use case | General, admin | High-throughput, ephemeral |

### 1.4 どのタイプのトークンをいつ使用するか?

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

## 2. Token Hierarchy

### 2.1 Parent-Child Relationship

各サービス トークン (ルート トークンと孤立トークンを除く) には **親トークン** があります。親が取り消されると、子ツリー全体 (子トークンおよび関連するリース) も取り消されます。

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

### 2.2 Orphan Tokens

孤立トークンはどの階層にも属さず、独立して存在し、親が取り消されても影響を受けません。

```bash
# Tạo orphan token (yêu cầu quyền sudo hoặc root)
vault token create -orphan -policy=my-policy -ttl=24h

# Hoặc dùng auth method — tokens từ auth method mặc định là orphan
vault login -method=userpass username=admin
# → Token này là orphan (không có parent trong tree)
```

> ⚠️ **注意:** 親トークンの有効期限が切れても、孤立トークンは取り消されません。 「孤立した」トークンが長く残りすぎるのを避けるために、別の管理プロセスが必要です。

### 2.3 Token Lookup

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

## 3. Token Accessors

### 3.1 トークン アクセサーとは何ですか?

各サービス トークンには **アクセサー** があります。これは、**トークン値を知らなくても**トークンに対して管理操作を実行できる参照 ID です。これはセキュリティにとって重要です。管理者はシークレット トークンの値にアクセスせずにトークンを管理できます。

**アクセサにより次のことが可能になります:**

- トークンのメタデータの表示 (ポリシー、TTL、作成時間)
- Revoke token
- Renew token

**アクセサは以下を許可しません:**

- トークンを使用してシークレットにアクセスする
- 子トークンの作成

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

### 3.2 アクセサーでトークンを管理するスクリプト

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

## 4. Token Roles

### 4.1 トークンの役割とは何ですか?

トークン ロールは、トークン作成のための構成テンプレートです。トークンを作成するたびに複数のパラメーターを指定するのではなく、ロールを定義してそれを参照します。

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

### 4.2 トークンロールの重要なパラメータ

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

## 5. TTL、最大 TTL および定期トークン

### 5.1 Token TTL (Time To Live)

TTL は、トークンの有効期間を決定します。 TTL の有効期限が切れると、トークンは自動的に取り消されます。

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

### 5.2 Max TTL

最大 TTL はハード制限です。トークンは `creation_time + max_ttl` を超えて更新できません。その後、トークンは強制的に再作成されます。

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

### 5.3 Periodic Tokens

定期トークンには、**最大 TTL による制限がない**という特別な機能があります。更新されるたびに、TTL は値 `period` にリセットされます。トークンは、定期的に更新される限り無期限に存続できます。

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

> 📌 **Use case cho Periodic Token:**
>
> - 長時間実行されるアプリケーション (TTL が期限切れになる前に常に更新されます)
> - Vault Agent (トークンを自動的に更新)
> - CI/CD パイプラインは継続的に実行されます
> - マイクロサービスには安定したトークンが必要です

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

## 6. Leases

### 6.1 リースとは何ですか?

リースは各シークレットまたはトークンに添付されるメタデータであり、その有効期間を決定します。リースの有効期限が切れると、Vault はシークレットまたは関連トークンを自動的に**取り消し**します。

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

各リースには次のものがあります。

- **Lease ID:** Unique identifier cho lease
- **リース期間:** 残り時間 (TTL)
- **更新可能:** 更新可能または不可能

### 6.2 リース情報の表示

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

### 6.3 Lease Renewal

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

**Renew qua API:**

```bash
curl -X PUT \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  "${VAULT_ADDR}/v1/sys/leases/renew" \
  -d '{
    "lease_id": "database/creds/my-role/abc123def456",
    "increment": 7200
  }'
```

> ⚠️ **注意:** 最大 TTL を超えた場合、Vault は要求された増分よりも短いリース期間を返す場合があります。応答で `lease_duration` を常に確認してください。

### 6.4 Lease Revocation

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

### 6.5 Prefix-based Revocation

プレフィックスベースの取り消しは、インシデント対応のための強力なツールです。

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

### 6.6 すべてのリースを表示

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

## 7. Cubbyhole Response Wrapping

### 7.1 カビーホールとは何ですか?

各サービス トークンには個別の**収納穴**があります。これは、そのトークンのみがアクセスできる秘密のストレージです。トークンが取り消されると、カビーホールも削除されます。他のトークン (ルートも含めて) は、別のトークンの小部屋にアクセスできません。

```bash
# Ghi vào cubbyhole
vault write cubbyhole/my-secret password="super-secret-123"

# Đọc từ cubbyhole (chỉ token hiện tại mới đọc được)
vault read cubbyhole/my-secret

# Liệt kê keys trong cubbyhole
vault list cubbyhole/
```

### 7.2 Response Wrapping

レスポンス ラッピングは cubbyhole を使用して **シークレットを安全に配布**します。シークレットを直接送信する代わりに、Vault はシークレットを含む **ラッピング トークン**を小部屋に作成します。受信者はラッピング トークンを使用して、シークレットを 1 回だけラップ解除 (読み取り) します。

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

### 7.3 応答ラッピングの使用

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

### 7.4 トークン作成時のラップ

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

### 7.5 ラッピングトークンのチェック (再ラップとルックアップ)

```bash
# Lookup wrapping token (kiểm tra xem đã bị unwrap chưa)
vault token lookup hvs.wrapping-token

# Nếu token hợp lệ (chưa unwrap) → trả về metadata
# Nếu đã unwrap hoặc hết TTL → error

# Rewrap — tạo wrapping token mới chứa cùng data
VAULT_TOKEN=hvs.old-wrap-token vault unwrap -wrap-ttl=5m
# → Wrapping token mới, token cũ bị vô hiệu
```

### 7.6 中間者検出

応答ラッピングは MITM を検出できます。

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

## 8. Token Management Best Practices

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

### 8.2 トークン更新の自動化

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

### 8.3 リース テスト スクリプトの有効期限が近づいています

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

## 9. 実習ラボ

### ラボ 1: トークンのタイプと階層

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

### ラボ 2: リースの更新と取り消し

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

### Lab 3: Response Wrapping

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

＃＃ まとめ

|コンセプト |説明 |
| --- | --- |
| **サービストークン** |フル機能のトークン、ストレージに保管、アクセサーと小部屋付き |
| **バッチトークン** |軽量トークン、ストレージなし、高スループットのワークロードに使用 |
| **トークン階層** |親子関係 - 親を取り消すと、子ツリー全体が取り消されます。
| **孤立トークン** |階層の一部ではない独立したトークン |
| **トークン アクセサー** |参照 ID を使用すると、トークン値を知らなくてもトークンを管理できます。
| **トークンの役割** |トークン生成構成テンプレート - 標準化と権限の制限 |
| **定期トークン** |トークンは最大 TTL によって制限されません。定期的に更新された場合、トークンは無期限に存続します。
| **リース** |メタデータはシークレット/トークンの有効期間を決定します。
| **リース更新** |リース延長、最大 TTL によって制限される |
| **リースの取り消し** |リースを取り消し、対応する資格情報を削除/無効にする |
| **小部屋** |各トークンに関連付けられた個別の秘密ストレージ |
| **応答のラッピング** |ラッピング トークンを介してシークレットを安全に配布 — 1 回のみ使用 |

次の記事では、Vault 上のすべての操作を記録および監査するシステムである **監査デバイス** について学びます。
