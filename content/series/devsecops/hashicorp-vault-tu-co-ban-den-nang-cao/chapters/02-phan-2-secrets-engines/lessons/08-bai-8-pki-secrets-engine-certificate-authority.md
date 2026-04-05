---
id: 019d8b30-b208-7001-c002-e0c5f8200108
title: 'Bài 8: PKI Secrets Engine - Certificate Authority'
slug: bai-8-pki-secrets-engine-certificate-authority
description: >-
  PKI deep dive, Root CA, Intermediate CA, Certificate roles, Issue/Sign, CRL, OCSP, Auto-rotation, ACME, PKI certificate counter (1.21), cert-manager integration, mTLS.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Secrets Engines - Quản lý Bí mật"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9111" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9111)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1091" cy="43" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1073" cy="225" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="56" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="93" x2="1100" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="123" x2="1050" y2="193" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.2487113059643,179 1017.2487113059643,207 993,221 968.7512886940357,207 968.7512886940357,179 993,165" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: PKI Secrets Engine - Certificate</tspan>
      <tspan x="60" dy="42">Authority</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Secrets Engines - Quản lý Bí mật</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

PKI (Public Key Infrastructure) Secrets Engine biến Vault thành một **Certificate Authority (CA)** hoàn chỉnh, có khả năng tạo, ký, và quản lý X.509 certificates một cách tự động. Thay vì mua certificates từ bên thứ ba hoặc quản lý CA server riêng, Vault cung cấp PKI-as-a-Service với API đơn giản.

### Tại sao cần PKI Secrets Engine?

- **Tự động hóa hoàn toàn**: Issue certificates qua API/CLI, tích hợp CI/CD
- **Short-lived certificates**: Giảm rủi ro khi certificate bị compromise
- **mTLS**: Bảo mật service-to-service communication
- **Centralized management**: Quản lý tất cả certificates từ một nơi
- **ACME support**: Tương thích với Let's Encrypt protocol

## 1. Kiến trúc PKI — Root CA và Intermediate CA

### 1.1. Mô hình 2 tầng (khuyến nghị)

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

**Tại sao dùng 2 tầng?**

- Root CA private key được bảo vệ tốt hơn (ít khi sử dụng)
- Nếu Intermediate CA bị compromise, chỉ cần revoke và tạo mới
- Không ảnh hưởng đến Root CA trust chain

## 2. Thiết lập Root CA

### 2.1. Enable PKI cho Root CA

```bash
# Enable PKI engine cho Root CA
vault secrets enable -path=pki pki

# Cấu hình max lease TTL cho Root CA (20 năm)
vault secrets tune -max-lease-ttl=175200h pki
```

### 2.2. Generate Root Certificate

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

### 2.3. Cấu hình URLs cho Root CA

```bash
# Cấu hình CRL và Issuing URLs
vault write pki/config/urls \
  issuing_certificates="https://vault.xdev.asia/v1/pki/ca" \
  crl_distribution_points="https://vault.xdev.asia/v1/pki/crl" \
  ocsp_servers="https://vault.xdev.asia/v1/pki/ocsp"
```

## 3. Thiết lập Intermediate CA

### 3.1. Enable PKI cho Intermediate CA

```bash
# Enable PKI engine cho Intermediate CA
vault secrets enable -path=pki_int pki

# Cấu hình max lease TTL (5 năm)
vault secrets tune -max-lease-ttl=43800h pki_int
```

### 3.2. Generate CSR cho Intermediate CA

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

### 3.3. Sign Intermediate CSR bằng Root CA

```bash
# Root CA ký CSR của Intermediate CA
vault write -format=json pki/root/sign-intermediate \
  csr=@/tmp/intermediate.csr \
  format=pem_bundle \
  ttl=43800h | tee /tmp/intermediate-cert.json

# Extract signed certificate
jq -r '.data.certificate' /tmp/intermediate-cert.json > /tmp/intermediate.pem
```

### 3.4. Import signed certificate vào Intermediate CA

```bash
# Set signed certificate cho Intermediate CA
vault write pki_int/intermediate/set-signed \
  certificate=@/tmp/intermediate.pem
```

### 3.5. Cấu hình URLs cho Intermediate CA

```bash
vault write pki_int/config/urls \
  issuing_certificates="https://vault.xdev.asia/v1/pki_int/ca" \
  crl_distribution_points="https://vault.xdev.asia/v1/pki_int/crl" \
  ocsp_servers="https://vault.xdev.asia/v1/pki_int/ocsp"
```

## 4. Certificate Roles

Roles định nghĩa **template** cho certificates được issue. Mỗi role quy định domain patterns, TTL, key types, và các extensions cho phép.

### 4.1. Role cho Web Server TLS

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

### 4.2. Role cho mTLS Client

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

### 4.3. Role cho mTLS (cả Server và Client)

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

### 4.4. Role cho Internal Services (short-lived)

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

## 5. Issue Certificates

### 5.1. Issue certificate cho web server

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

### 5.2. Issue wildcard certificate

```bash
vault write -format=json pki_int/issue/web-server \
  common_name="*.xdev.asia" \
  ttl="720h" | tee /tmp/wildcard-cert.json
```

### 5.3. Issue certificate cho mTLS service

```bash
vault write -format=json pki_int/issue/mtls-service \
  common_name="payment-service.services.internal" \
  ip_sans="10.0.2.50" \
  ttl="168h" | tee /tmp/payment-svc-cert.json

# Extract cho service sử dụng
jq -r '.data.certificate' /tmp/payment-svc-cert.json > /etc/tls/tls.crt
jq -r '.data.private_key' /tmp/payment-svc-cert.json > /etc/tls/tls.key
jq -r '.data.ca_chain[]' /tmp/payment-svc-cert.json > /etc/tls/ca.crt
```

## 6. Sign CSR — Ký Certificate Request bên ngoài

Khi application tự generate private key và gửi CSR để ký:

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

## 7. CRL (Certificate Revocation List)

### 7.1. Cấu hình CRL

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

### 7.2. Revoke Certificate

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

### 7.3. Tidy — Cleanup expired certificates

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

## 8. OCSP (Online Certificate Status Protocol)

OCSP cho phép clients kiểm tra trạng thái revocation của certificate theo real-time.

### 8.1. Enable OCSP

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

## 9. ACME Protocol Support

Từ Vault 1.14+, PKI engine hỗ trợ **ACME protocol** — cùng protocol mà Let's Encrypt sử dụng. Điều này cho phép tích hợp với các ACME clients như certbot, cert-manager, etc.

### 9.1. Enable ACME

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

### 9.2. Sử dụng certbot với Vault ACME

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

## 10. PKI Certificate Counter (Vault 1.21+)

Vault 1.21 thêm tính năng đếm certificates đã issue, giúp monitoring và compliance.

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

## 11. Tích hợp cert-manager (Kubernetes)

### 11.1. Cài đặt cert-manager Vault Issuer

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

### 11.2. Request certificate qua cert-manager

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

### 11.3. Sử dụng trong Pod

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

## 12. Thiết lập mTLS hoàn chỉnh

### 12.1. Issue Server Certificate

```bash
# Server certificate
vault write -format=json pki_int/issue/mtls-service \
  common_name="server.services.internal" \
  ttl="168h" > /tmp/server-cert.json

jq -r '.data.certificate' /tmp/server-cert.json > /etc/tls/server.crt
jq -r '.data.private_key' /tmp/server-cert.json > /etc/tls/server.key
jq -r '.data.ca_chain[]' /tmp/server-cert.json > /etc/tls/ca-bundle.crt
```

### 12.2. Issue Client Certificate

```bash
# Client certificate
vault write -format=json pki_int/issue/mtls-client \
  common_name="client-app.services.internal" \
  ttl="168h" > /tmp/client-cert.json

jq -r '.data.certificate' /tmp/client-cert.json > /etc/tls/client.crt
jq -r '.data.private_key' /tmp/client-cert.json > /etc/tls/client.key
```

### 12.3. Test mTLS với curl

```bash
# Server cần verify client certificate
# Client gửi request với certificate
curl --cacert /etc/tls/ca-bundle.crt \
  --cert /etc/tls/client.crt \
  --key /etc/tls/client.key \
  https://server.services.internal:8443/api/health
```

### 12.4. Nginx mTLS Configuration

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

## 13. Auto-Rotation Script

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

## 14. Policies cho PKI

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

## 15. Best Practices

### 15.1. Certificate Lifecycle

- ✅ Root CA TTL: 10-20 năm, offline storage
- ✅ Intermediate CA TTL: 3-5 năm
- ✅ Leaf certificates TTL: 30 ngày - 1 năm (càng ngắn càng tốt)
- ✅ Renew certificates khi còn 1/3 thời gian sống
- ✅ Sử dụng ECDSA P-256 cho leaf certs (nhanh hơn RSA)

### 15.2. Security

- ✅ Không export Root CA private key
- ✅ Separate PKI mounts cho Root và Intermediate
- ✅ Enable CRL và OCSP
- ✅ Regular tidy operations
- ✅ Monitor certificate count và expiration
- ✅ Restrict role permissions theo team/service
- ✅ Sử dụng `no_store=true` cho high-volume issuance

## Tổng kết

Trong bài học này, bạn đã thiết lập một **PKI infrastructure hoàn chỉnh** với Vault:

1. **Root CA + Intermediate CA** — kiến trúc 2 tầng chuẩn
2. **Certificate Roles** — templates cho web server, mTLS, internal services
3. **Issue và Sign certificates** — tự động qua CLI/API
4. **CRL và OCSP** — certificate revocation
5. **ACME support** — tương thích Let's Encrypt protocol
6. **cert-manager integration** — tự động PKI trong Kubernetes
7. **mTLS** — bảo mật service-to-service
8. **Auto-rotation** — tự động renew certificates

Bài tiếp theo sẽ khám phá **Transit Secrets Engine** — Encryption as a Service, nơi Vault giúp bạn mã hóa dữ liệu mà không cần quản lý encryption keys.
