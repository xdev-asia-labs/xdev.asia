---
id: 019d8b30-b208-7001-c002-e0c5f8200108
title: 第 8 課：PKI 秘密引擎 - 憑證授權單位
slug: bai-8-pki-secrets-engine-certificate-authority
description: >-
  PKI 深入研究、根 CA、中間 CA、憑證角色、頒發/簽署、CRL、OCSP、自動輪調、ACME、PKI 憑證計數器
  (1.21)、憑證管理器整合、mTLS。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：秘密引擎 - 管理秘密
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-9111" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-9111）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="1091" cy="43" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1073" cy="225" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="56" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1 =“600”y1 =“93”x2 =“1100”y2 =“173”筆畫=“＃34d399”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“123”x2 =“1050”y2 =“193”筆觸=“＃34d399”筆觸寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1017.2487113059643,179 1017.2487113059643,207 993,221 968.7512886940357,207 968.75121886953,19968.75125,198 993,165”填滿=“無”描邊=“#34d399”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#34d399”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“＃34d399”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 8 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 8 課：PKI 秘密引擎 - 憑證</tspan>
      <tspan x="60" dy="42">權限</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：秘密引擎 - 管理機密</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 介紹

PKI（公鑰基礎設施）秘密引擎將 Vault 變成一個完整的**憑證授權單位 (CA)**，能夠自動建立、簽署和管理 X.509 憑證。 Vault 無需從第三方購買憑證或管理單獨的 CA 伺服器，而是透過簡單的 API 提供 PKI 即服務。

### 為什麼需要 PKI 秘密引擎？

- **完全自動化**：透過 API/CLI、CI/CD 整合頒發證書
- **短期憑證**：降低憑證外洩的風險
- **mTLS**：安全的服務到服務通信
- **集中管理**：從一個地方管理所有證書
- **ACME 支援**：與 Let's Encrypt 協定相容

## 1. PKI 架構 — 根 CA 與中間 CA

### 1.1。 2層模型（建議）

```
┌─────────────────────────────────────────┐
│            Root CA (Offline)             │ ← Vault PKI mount: pki/
│         Validity: 10-20 years           │
│    Chỉ dùng để ký Intermediate CA       │
└────────────────┬────────────────────────┘
                 │ Signs
                 ▼
┌─────────────────────────────────────────┐
│        Intermediate CA (Online)          │ ← Vault PKI mount: pki_int/
│         Validity: 3-5 years             │
│    Dùng để issue certificates           │
└────────────────┬────────────────────────┘
                 │ Issues
                 ▼
┌─────────────────────────────────────────┐
│         Leaf Certificates               │
│    Validity: 30 days - 1 year           │
│    TLS, mTLS, code signing, etc.        │
└─────────────────────────────────────────┘
```

**為什麼要使用兩層樓？ **

- 根CA私鑰得到更好的保護（很少使用）
- 如果中間 CA 被洩露，只需撤銷並創建一個新的
- 不影響根CA信任鏈

## 2. 設定根 CA

### 2.1。啟用 PKI cho 根 CA

```bash
# Enable PKI engine cho Root CA
vault secrets enable -path=pki pki

# Cấu hình max lease TTL cho Root CA (20 năm)
vault secrets tune -max-lease-ttl=175200h pki
```

### 2.2。產生根證書

```bash
# Generate Root CA certificate
vault write -format=json pki/root/generate/internal \
  common_name="XDev Root Certificate Authority" \
  organization="XDev Asia" \
  ou="Infrastructure Security" \
  country="VN" \
  locality="Ho Chi Minh City" \
  issuer_name="root-2024" \
  ttl=175200h \
  key_type="rsa" \
  key_bits=4096 | tee /tmp/root-ca.json

# Extract Root CA certificate
jq -r '.data.certificate' /tmp/root-ca.json > /tmp/root-ca.pem

# Xem thông tin certificate
openssl x509 -in /tmp/root-ca.pem -text -noout | head -20

# Output:
# Certificate:
#     Data:
#         Version: 3 (0x2)
#         Serial Number: ...
#         Signature Algorithm: sha256WithRSAEncryption
#         Issuer: C = VN, L = Ho Chi Minh City, OU = Infrastructure Security, O = XDev Asia, CN = XDev Root Certificate Authority
#         Validity
#             Not Before: Jan 15 10:00:00 2024 GMT
#             Not After : Jan 15 10:00:00 2044 GMT
```

### 2.3。為根 CA 設定 URL

```bash
# Cấu hình CRL và Issuing URLs
vault write pki/config/urls \
  issuing_certificates="https://vault.xdev.asia/v1/pki/ca" \
  crl_distribution_points="https://vault.xdev.asia/v1/pki/crl" \
  ocsp_servers="https://vault.xdev.asia/v1/pki/ocsp"
```

## 3. 設定中間 CA

### 3.1。啟用 PKI cho 中間 CA

```bash
# Enable PKI engine cho Intermediate CA
vault secrets enable -path=pki_int pki

# Cấu hình max lease TTL (5 năm)
vault secrets tune -max-lease-ttl=43800h pki_int
```

### 3.2。產生 CSR cho 中間 CA

```bash
# Generate CSR (Certificate Signing Request)
vault write -format=json pki_int/intermediate/generate/internal \
  common_name="XDev Intermediate Certificate Authority" \
  organization="XDev Asia" \
  ou="Infrastructure Security" \
  country="VN" \
  issuer_name="intermediate-2024" \
  key_type="rsa" \
  key_bits=4096 | tee /tmp/intermediate-csr.json

# Extract CSR
jq -r '.data.csr' /tmp/intermediate-csr.json > /tmp/intermediate.csr
```

### 3.3。使用根 CA 簽署中間 CSR

```bash
# Root CA ký CSR của Intermediate CA
vault write -format=json pki/root/sign-intermediate \
  csr=@/tmp/intermediate.csr \
  format=pem_bundle \
  ttl=43800h | tee /tmp/intermediate-cert.json

# Extract signed certificate
jq -r '.data.certificate' /tmp/intermediate-cert.json > /tmp/intermediate.pem
```

### 3.4。將簽名憑證匯入中間 CA

```bash
# Set signed certificate cho Intermediate CA
vault write pki_int/intermediate/set-signed \
  certificate=@/tmp/intermediate.pem
```

### 3.5。為中間 CA 設定 URL

```bash
vault write pki_int/config/urls \
  issuing_certificates="https://vault.xdev.asia/v1/pki_int/ca" \
  crl_distribution_points="https://vault.xdev.asia/v1/pki_int/crl" \
  ocsp_servers="https://vault.xdev.asia/v1/pki_int/ocsp"
```

## 4. 憑證角色

角色定義頒發憑證的**範本**。每個角色指定網域模式、TTL、金鑰類型和允許的副檔名。

### 4.1。角色 cho Web 伺服器 TLS

```bash
vault write pki_int/roles/web-server \
  allowed_domains="xdev.asia,internal.xdev.asia" \
  allow_subdomains=true \
  allow_bare_domains=false \
  allow_wildcard_certificates=true \
  max_ttl="2160h" \
  ttl="720h" \
  key_type="rsa" \
  key_bits=2048 \
  key_usage="DigitalSignature,KeyEncipherment" \
  ext_key_usage="ServerAuth" \
  organization="XDev Asia" \
  country="VN" \
  require_cn=true \
  server_flag=true \
  client_flag=false
```

### 4.2。角色 cho mTLS 用戶端

```bash
vault write pki_int/roles/mtls-client \
  allowed_domains="services.internal" \
  allow_subdomains=true \
  max_ttl="720h" \
  ttl="168h" \
  key_type="ec" \
  key_bits=256 \
  key_usage="DigitalSignature" \
  ext_key_usage="ClientAuth" \
  require_cn=true \
  server_flag=false \
  client_flag=true \
  no_store=true
```

### 4.3。 mTLS 的角色（伺服器和客戶端）

```bash
vault write pki_int/roles/mtls-service \
  allowed_domains="services.internal" \
  allow_subdomains=true \
  allow_ip_sans=true \
  allowed_other_sans="" \
  max_ttl="720h" \
  ttl="168h" \
  key_type="ec" \
  key_bits=256 \
  key_usage="DigitalSignature,KeyEncipherment" \
  ext_key_usage="ServerAuth,ClientAuth" \
  require_cn=true \
  server_flag=true \
  client_flag=true
```

### 4.4。角色 cho 內在服務（短暫）

```bash
vault write pki_int/roles/internal-service \
  allowed_domains="svc.cluster.local,internal.xdev.asia" \
  allow_subdomains=true \
  allow_ip_sans=true \
  max_ttl="72h" \
  ttl="24h" \
  key_type="ec" \
  key_bits=256 \
  generate_lease=true \
  no_store=false
```

## 5. 頒發證書

### 5.1。頒發憑證 cho web 伺服器

```bash
# Issue certificate
vault write -format=json pki_int/issue/web-server \
  common_name="api.xdev.asia" \
  alt_names="api-v2.xdev.asia,api-internal.xdev.asia" \
  ip_sans="10.0.1.100" \
  ttl="720h" | tee /tmp/api-cert.json

# Extract certificate components
jq -r '.data.certificate' /tmp/api-cert.json > /tmp/api.crt
jq -r '.data.private_key' /tmp/api-cert.json > /tmp/api.key
jq -r '.data.ca_chain[]' /tmp/api-cert.json > /tmp/ca-chain.pem
jq -r '.data.issuing_ca' /tmp/api-cert.json > /tmp/issuing-ca.pem

# Xem thông tin certificate
openssl x509 -in /tmp/api.crt -text -noout

# Verify certificate chain
openssl verify -CAfile /tmp/ca-chain.pem /tmp/api.crt
# /tmp/api.crt: OK
```

### 5.2。頒發通配符證書

```bash
vault write -format=json pki_int/issue/web-server \
  common_name="*.xdev.asia" \
  ttl="720h" | tee /tmp/wildcard-cert.json
```

### 5.3。頒發憑證 cho mTLS 服務```bash
vault write -format=json pki_int/issue/mtls-service \
  common_name="payment-service.services.internal" \
  ip_sans="10.0.2.50" \
  ttl="168h" | tee /tmp/payment-svc-cert.json

# Extract cho service sử dụng
jq -r '.data.certificate' /tmp/payment-svc-cert.json > /etc/tls/tls.crt
jq -r '.data.private_key' /tmp/payment-svc-cert.json > /etc/tls/tls.key
jq -r '.data.ca_chain[]' /tmp/payment-svc-cert.json > /etc/tls/ca.crt
```

## 6. 簽署 CSR — 外部簽署憑證要求

當應用程式產生自己的私鑰並發送 CSR 進行簽署時：

```bash
# Application tạo private key và CSR
openssl req -new -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 \
  -keyout /tmp/app.key -out /tmp/app.csr -nodes \
  -subj "/CN=myapp.services.internal/O=XDev Asia"

# Vault ký CSR
vault write -format=json pki_int/sign/internal-service \
  csr=@/tmp/app.csr \
  common_name="myapp.services.internal" \
  ttl="24h" | tee /tmp/signed-cert.json

# Extract signed certificate
jq -r '.data.certificate' /tmp/signed-cert.json > /tmp/app.crt
```

## 7. CRL（憑證撤銷清單）

### 7.1。 CRL配置

```bash
# Cấu hình CRL settings
vault write pki_int/config/crl \
  expiry="72h" \
  disable=false \
  auto_rebuild=true \
  auto_rebuild_grace_period="12h" \
  enable_delta=true \
  delta_rebuild_interval="15m"
```

### 7.2。吊銷憑證

```bash
# Revoke bằng serial number
vault write pki_int/revoke \
  serial_number="39:dd:2e:90:b7:23:1f:8d:d3:7d:31:c5:1b:da:84:d0:5b:65:31:58"

# Revoke bằng certificate PEM
vault write pki_int/revoke \
  certificate=@/tmp/api.crt

# Xem CRL hiện tại
curl -s "$VAULT_ADDR/v1/pki_int/crl" | openssl crl -inform DER -text -noout
```

### 7.3。 Tidy－清理過期證書

```bash
# Tidy certificates database
vault write pki_int/tidy \
  tidy_cert_store=true \
  tidy_revoked_certs=true \
  tidy_revoked_cert_issuer_associations=true \
  tidy_expired_issuers=true \
  safety_buffer="72h" \
  issuer_safety_buffer="720h"

# Kiểm tra trạng thái tidy
vault read pki_int/tidy-status
```

## 8. OCSP（線上證書狀態協定）

OCSP 允許用戶端即時檢查憑證撤銷狀態。

### 8.1。啟用OCSP

```bash
# OCSP đã được enable mặc định khi cấu hình ocsp_servers URL
# Kiểm tra OCSP response
openssl ocsp \
  -issuer /tmp/issuing-ca.pem \
  -cert /tmp/api.crt \
  -url "$VAULT_ADDR/v1/pki_int/ocsp" \
  -resp_text

# Output:
# Response Status: successful (0x0)
# ...
# Cert Status: good
# This Update: Jan 15 12:00:00 2024 GMT
# Next Update: Jan 16 12:00:00 2024 GMT
```

## 9.ACME 協定支持

從 Vault 1.14+ 開始，PKI 引擎支援 **ACME 協定** — 與 Let's Encrypt 使用的協定相同。這允許與 ACME 客戶端（例如 certbot、cert-manager 等）整合。

### 9.1。啟用ACME

```bash
# Cấu hình cluster path (bắt buộc cho ACME)
vault write pki_int/config/cluster \
  path="https://vault.xdev.asia/v1/pki_int" \
  aia_path="https://vault.xdev.asia/v1/pki_int"

# Enable ACME
vault write pki_int/config/acme \
  enabled=true \
  allowed_roles="web-server,internal-service" \
  allow_role_ext_key_usage=true \
  default_directory_policy="role:web-server"
```

### 9.2。將 certbot 與 ACME Vault 結合使用

```bash
# Sử dụng certbot để request certificate từ Vault
certbot certonly \
  --server "https://vault.xdev.asia/v1/pki_int/acme/directory" \
  --standalone \
  --non-interactive \
  --agree-tos \
  --email admin@xdev.asia \
  -d "api.xdev.asia"
```

## 10. PKI 憑證計數器（Vault 1.21+）

Vault 1.21 新增了計算已頒發憑證的功能，有助於監控和合規性。

```bash
# Đọc certificate count
vault read pki_int/certificates/count

# Output:
# Key      Value
# ---      -----
# count    1547

# List certificates (serial numbers)
vault list pki_int/certs

# Đọc thông tin certificate cụ thể
vault read pki_int/cert/<serial-number>
```

## 11.整合式憑證管理員（Kubernetes）

### 11.1。安裝 cert-manager Vault 發行者

```yaml
# vault-issuer.yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: vault-issuer
spec:
  vault:
    server: https://vault.xdev.asia
    path: pki_int/sign/internal-service
    auth:
      kubernetes:
        role: cert-manager
        mountPath: /v1/auth/kubernetes
        serviceAccountRef:
          name: cert-manager-vault
```

### 11.2。請求 cert-manager 憑證

```yaml
# certificate.yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: api-tls
  namespace: default
spec:
  secretName: api-tls-secret
  duration: 720h
  renewBefore: 168h
  issuerRef:
    name: vault-issuer
    kind: ClusterIssuer
  commonName: api.services.internal
  dnsNames:
    - api.services.internal
    - api.default.svc.cluster.local
  ipAddresses:
    - 10.0.2.100
  privateKey:
    algorithm: ECDSA
    size: 256
```

### 11.3。在 Pod 中使用

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  template:
    spec:
      containers:
        - name: api
          image: myapp/api:latest
          volumeMounts:
            - name: tls
              mountPath: /etc/tls
              readOnly: true
          env:
            - name: TLS_CERT
              value: /etc/tls/tls.crt
            - name: TLS_KEY
              value: /etc/tls/tls.key
            - name: CA_CERT
              value: /etc/tls/ca.crt
      volumes:
        - name: tls
          secret:
            secretName: api-tls-secret
```

## 12.Thiết lập mTLS hoàn chỉnh

### 12.1。頒發伺服器證書

```bash
# Server certificate
vault write -format=json pki_int/issue/mtls-service \
  common_name="server.services.internal" \
  ttl="168h" > /tmp/server-cert.json

jq -r '.data.certificate' /tmp/server-cert.json > /etc/tls/server.crt
jq -r '.data.private_key' /tmp/server-cert.json > /etc/tls/server.key
jq -r '.data.ca_chain[]' /tmp/server-cert.json > /etc/tls/ca-bundle.crt
```

### 12.2。頒發客戶證書

```bash
# Client certificate
vault write -format=json pki_int/issue/mtls-client \
  common_name="client-app.services.internal" \
  ttl="168h" > /tmp/client-cert.json

jq -r '.data.certificate' /tmp/client-cert.json > /etc/tls/client.crt
jq -r '.data.private_key' /tmp/client-cert.json > /etc/tls/client.key
```

### 12.3。使用curl測試mTLS

```bash
# Server cần verify client certificate
# Client gửi request với certificate
curl --cacert /etc/tls/ca-bundle.crt \
  --cert /etc/tls/client.crt \
  --key /etc/tls/client.key \
  https://server.services.internal:8443/api/health
```

### 12.4。 Nginx mTLS 設定

```nginx
server {
    listen 8443 ssl;
    server_name server.services.internal;

    # Server certificate
    ssl_certificate     /etc/tls/server.crt;
    ssl_certificate_key /etc/tls/server.key;

    # mTLS — require client certificate
    ssl_client_certificate /etc/tls/ca-bundle.crt;
    ssl_verify_client on;
    ssl_verify_depth 2;

    # TLS settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://backend:8080;
        proxy_set_header X-Client-CN $ssl_client_s_dn_cn;
    }
}
```

## 13. 自動旋轉腳本

```bash
#!/bin/bash
# cert-renew.sh — Tự động renew certificate trước khi hết hạn

set -euo pipefail

CERT_PATH="/etc/tls/server.crt"
KEY_PATH="/etc/tls/server.key"
CA_PATH="/etc/tls/ca-bundle.crt"
ROLE="web-server"
CN="api.xdev.asia"
RENEW_BEFORE_DAYS=7

# Kiểm tra certificate còn bao nhiêu ngày
if [ -f "$CERT_PATH" ]; then
  EXPIRY=$(openssl x509 -in "$CERT_PATH" -enddate -noout | cut -d= -f2)
  EXPIRY_EPOCH=$(date -d "$EXPIRY" +%s 2>/dev/null || date -j -f "%b %d %T %Y %Z" "$EXPIRY" +%s)
  NOW_EPOCH=$(date +%s)
  DAYS_LEFT=$(( (EXPIRY_EPOCH - NOW_EPOCH) / 86400 ))
  
  echo "Certificate expires in $DAYS_LEFT days"
  
  if [ "$DAYS_LEFT" -gt "$RENEW_BEFORE_DAYS" ]; then
    echo "Certificate still valid. No renewal needed."
    exit 0
  fi
fi

echo "Renewing certificate..."

# Issue new certificate
RESULT=$(vault write -format=json "pki_int/issue/${ROLE}" \
  common_name="$CN" \
  ttl="720h")

echo "$RESULT" | jq -r '.data.certificate' > "$CERT_PATH"
echo "$RESULT" | jq -r '.data.private_key' > "$KEY_PATH"
echo "$RESULT" | jq -r '.data.ca_chain[]' > "$CA_PATH"

chmod 644 "$CERT_PATH" "$CA_PATH"
chmod 600 "$KEY_PATH"

echo "Certificate renewed successfully!"

# Reload service (nginx example)
nginx -s reload 2>/dev/null || true
```

## 14. PKI 政策

```hcl
# Policy cho application: chỉ issue certificates
path "pki_int/issue/web-server" {
  capabilities = ["create", "update"]
}

path "pki_int/sign/web-server" {
  capabilities = ["create", "update"]
}

# Policy cho cert-manager
path "pki_int/sign/internal-service" {
  capabilities = ["create", "update"]
}

# Policy cho PKI admin
path "pki_int/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "pki/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

# Read CA certificates (public)
path "pki/ca/pem" {
  capabilities = ["read"]
}

path "pki_int/ca/pem" {
  capabilities = ["read"]
}
```

## 15. 最佳實踐

### 15.1。證書生命週期

- ✅ Root CA TTL：10-20年，離線存儲
- ✅ 中級 CA TTL：3-5 年
- ✅ 葉子證書 TTL：30 天 - 1 年（越短越好）
- ✅ 當證書的有效期限剩下 1/3 時更新證書
- ✅ 使用 ECDSA P-256 進行葉證書（比 RSA 更快）

### 15.2。安全性

- ✅ 不要匯出根 CA 私鑰
- ✅ 針對 Root 和 Intermediate 的單獨 PKI 安裝
- ✅ 啟用 CRL 和 OCSP
- ✅ 定期整潔作業
- ✅ 監控證書數量和到期時間
- ✅ 限制團隊/服務的角色權限
- ✅ 使用 `no_store=true` 進行大量釋放

## 總結

在本課程中，您將使用 Vault 設定完整的 **PKI 基礎架構**：

1. **根CA + 中間CA** — 標準2層架構
2. **憑證角色** — 範本 cho Web 伺服器、mTLS、內部服務
3. **核發並簽署憑證** — 透過 CLI/API 自動進行
4. **CRL 和 OCSP** — 憑證撤銷
5. **ACME 支援** — 與 Let's Encrypt 協定相容
6. **憑證管理器整合** - Kubernetes 中的 PKI 自動化
7. **mTLS** — 服務到服務的安全性
8. **自動輪換** — 自動續訂證書

下一篇文章將探討 **Transit Secrets Engine** - 加密即服務，其中 Vault 可協助您加密資料而無需管理加密金鑰。
