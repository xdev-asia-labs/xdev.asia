---
id: 019d8b30-b209-7001-c002-e0c5f8200109
title: 'Lesson 9: Transit Secrets Engine - Encryption as a Service'
slug: bai-9-transit-secrets-engine-encryption-as-a-service
description: Transit concept, encryption keys, Encrypt/Decrypt, Key rotation, rewrapping, Key types, HMAC, Sign/Verify, Data key generation, Convergent encryption, Batch operations, BYOK.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 2: Secrets Engines - Managing Secrets'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4462" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4462)"/>

  <!-- Decorations -->
  <g>
    <circle cx="840" cy="50" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364905389,157.5 970,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 9: Transit Secrets Engine - Encryption</tspan>
      <tspan x="60" dy="42">as a Service</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Secrets Engines - Managing Secrets</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduce

Transit Secrets Engine provides **Encryption as a Service (EaaS)** — allowing applications to encrypt and decrypt data without managing encryption keys**. Data is encrypted "in transit" through Vault and returned to the application, Vault does not store data.

### Why use Transit?

- **Separate key management and data storage**: Applications never see the encryption key
- **Key rotation**: Rotate keys without re-encrypting all data
- **Centralized cryptography**: Ensure the correct algorithms and key sizes are used
- **Audit trail**: All crypto operations are logged
- **Compliance**: Meets PCI-DSS and HIPAA requirements for key management

### Operational model

```
┌──────────────┐                    ┌───────────┐
│  Application │                    │   Vault   │
│              │                    │  Transit  │
│  plaintext ──┼── encrypt ────────▶│           │
│              │◀── ciphertext ─────┼──         │
│              │                    │           │
│  ciphertext ─┼── decrypt ────────▶│           │
│              │◀── plaintext ──────┼──         │
│              │                    │           │
│  Lưu cipher  │                    │ Quản lý   │
│  vào DB      │                    │ keys      │
└──────────────┘                    └───────────┘
```

> **Important:** Vault Transit DOES NOT store data. It just performs cryptographic operations and returns results.

## 1. Enable Transit Secrets Engine

```bash
# Enable transit engine
vault secrets enable transit

# Xác nhận
vault secrets list | grep transit
# transit/    transit    transit_abc123    n/a
```

## 2. Encryption Keys — Create and Manage

### 2.1. Generate encryption key

```bash
# Tạo key mặc định (AES-256-GCM)
vault write -f transit/keys/my-app-key

# Tạo key với type cụ thể
vault write transit/keys/payment-key \
  type="aes256-gcm96" \
  exportable=false \
  allow_plaintext_backup=false

# Đọc thông tin key
vault read transit/keys/my-app-key

# Output:
# Key                       Value
# ---                       -----
# allow_plaintext_backup    false
# auto_rotate_period        0s
# deletion_allowed          false
# derived                   false
# exportable                false
# imported_key              false
# keys                      map[1:1705312200]
# latest_version            1
# min_available_version     0
# min_decryption_version    1
# min_encryption_version    0
# name                      my-app-key
# supports_decryption       true
# supports_derivation       true
# supports_encryption       true
# supports_signing          false
# type                      aes256-gcm96
```

### 2.2. Key types

| Key Type | Algorithm | Use |
|---|---|---|
| `aes128-gcm96` | AES-128-GCM | Encrypt/Decrypt |
| `aes256-gcm96` | AES-256-GCM (default) | Encrypt/Decrypt |
| `chacha20-poly1305` | ChaCha20-Poly1305 | Encrypt/Decrypt |
| `ed25519` | Ed25519 | Sign/Verify |
| `ecdsa-p256` | ECDSA P-256 | Sign/Verify |
| `ecdsa-p384` | ECDSA P-384 | Sign/Verify |
| `ecdsa-p521` | ECDSA P-521 | Sign/Verify |
| `rsa-2048` | RSA 2048-bit | Encrypt/Decrypt, Sign/Verify |
| `rsa-3072` | RSA 3072-bit | Encrypt/Decrypt, Sign/Verify |
| `rsa-4096` | RSA 4096-bit | Encrypt/Decrypt, Sign/Verify |
| `hmac` | HMAC | HMAC generation |

### 2.3. Key configuration

```bash
# Cho phép xóa key (mặc định: false)
vault write transit/keys/my-app-key/config \
  deletion_allowed=true

# Thiết lập auto-rotation (mỗi 30 ngày)
vault write transit/keys/my-app-key/config \
  auto_rotate_period="720h"

# Giới hạn minimum encryption version
vault write transit/keys/my-app-key/config \
  min_encryption_version=2

# Giới hạn minimum decryption version
vault write transit/keys/my-app-key/config \
  min_decryption_version=1
```

## 3. Encrypt and Decrypt

### 3.1. Encrypt (Encryption)

```bash
# Dữ liệu PHẢI được encode Base64 trước khi gửi
# Encode plaintext sang base64
echo -n "Thông tin bí mật của tôi" | base64
# VGjDtG5nIHRpbiBiw60gbcOtdCBj4bunYSB0w7Rp

# Encrypt
vault write -format=json transit/encrypt/my-app-key \
  plaintext="$(echo -n 'Thông tin bí mật của tôi' | base64)"

# Output:
# {
#   "data": {
#     "ciphertext": "vault:v1:8SDd3WHDELevel1TVSKMQQ+gO1WwP2SfEwACJ3PKpLYJ9oNAiT1...",
#     "key_version": 1
#   }
# }
```

Ciphertext structure: `vault:v{version}:{base64-encoded-ciphertext}`

- `vault:` — fixed prefix
- `v1` — version of the key used
- The rest — encrypted data

### 3.2. Decrypt (Decrypt)

```bash
# Decrypt
vault write -format=json transit/decrypt/my-app-key \
  ciphertext="vault:v1:8SDd3WHDELevel1TVSKMQQ+gO1WwP2SfEwACJ3PKpLYJ9oNAiT1..."

# Output:
# {
#   "data": {
#     "plaintext": "VGjDtG5nIHRpbiBiw60gbcOtdCBj4bunYSB0w7Rp"
#   }
# }

# Decode base64 để lấy plaintext gốc
echo "VGjDtG5nIHRpbiBiw60gbcOtdCBj4bunYSB0w7Rp" | base64 -d
# Thông tin bí mật của tôi
```

### 3.3. One-liner encrypt/decrypt

```bash
# Encrypt one-liner
CIPHERTEXT=$(vault write -field=ciphertext transit/encrypt/my-app-key \
  plaintext="$(echo -n 'secret data' | base64)")

echo "Ciphertext: $CIPHERTEXT"

# Decrypt one-liner
PLAINTEXT=$(vault write -field=plaintext transit/decrypt/my-app-key \
  ciphertext="$CIPHERTEXT" | base64 -d)

echo "Plaintext: $PLAINTEXT"
```

## 4. Key Rotation

Key rotation allows creating a new version of the key without affecting data encrypted with the old version.

### 4.1. Rotate key

```bash
# Rotate key — tạo version mới
vault write -f transit/keys/my-app-key/rotate

# Kiểm tra — latest_version tăng lên
vault read transit/keys/my-app-key

# Output:
# latest_version    2
# keys              map[1:1705312200 2:1705398600]
```

### 4.2. Encrypt sau rotation

```bash
# Encrypt với key mới nhất (v2)
vault write -field=ciphertext transit/encrypt/my-app-key \
  plaintext="$(echo -n 'new data' | base64)"
# vault:v2:xyz...  ← Lưu ý prefix v2

# Decrypt dữ liệu cũ (v1) vẫn hoạt động
vault write -field=plaintext transit/decrypt/my-app-key \
  ciphertext="vault:v1:old-ciphertext..." | base64 -d
```

## 5. Rewrapping — Upgrade Ciphertext

Rewrap allows "upgrading" ciphertext from old key version to new version **without decrypting**.

```bash
# Rewrap ciphertext từ v1 sang latest version (v2)
vault write -field=ciphertext transit/rewrap/my-app-key \
  ciphertext="vault:v1:old-ciphertext..."
# vault:v2:new-ciphertext...  ← Giờ đã dùng v2
```

### 5.1. Batch rewrite script

```bash
#!/bin/bash
# rewrap-secrets.sh — Rewrap tất cả ciphertext trong database

set -euo pipefail

KEY_NAME="my-app-key"
DB_HOST="db.internal"
DB_NAME="myapp"

# Lấy tất cả records có ciphertext cũ
RECORDS=$(psql -h "$DB_HOST" -d "$DB_NAME" -t -A -c "
  SELECT id, encrypted_data
  FROM sensitive_data
  WHERE encrypted_data LIKE 'vault:v1:%'
")

COUNT=0
while IFS='|' read -r id ciphertext; do
  [ -z "$id" ] && continue
  
  # Rewrap
  NEW_CIPHERTEXT=$(vault write -field=ciphertext \
    "transit/rewrap/${KEY_NAME}" \
    ciphertext="$ciphertext")
  
  # Update database
  psql -h "$DB_HOST" -d "$DB_NAME" -c "
    UPDATE sensitive_data
    SET encrypted_data = '$NEW_CIPHERTEXT'
    WHERE id = $id
  "
  
  COUNT=$((COUNT + 1))
done <<< "$RECORDS"

echo "Rewrapped $COUNT records"
```

### 5.2. Enforce minimum encryption version

After rewrap is complete, you must use the new version key:

```bash
# Bắt buộc encrypt với version >= 2
vault write transit/keys/my-app-key/config \
  min_encryption_version=2

# Chặn decrypt dữ liệu version < 2 (sau khi rewrap xong hết)
vault write transit/keys/my-app-key/config \
  min_decryption_version=2
```

## 6. Data Key Generation (Envelope Encryption)

When you need to encrypt large data, use **envelope encryption** — Vault creates a data key, the application uses that key to encrypt locally.

### 6.1. Generate data key

```bash
# Generate data key — trả về cả plaintext và encrypted version
vault write -format=json transit/datakey/plaintext/my-app-key

# Output:
# {
#   "data": {
#     "ciphertext": "vault:v1:abc...",     ← encrypted data key (lưu cùng dữ liệu)
#     "key_version": 2,
#     "plaintext": "dGhpcyBpcyBhIDMyLWJ..." ← data key (dùng xong phải xóa khỏi memory)
#   }
# }

# Generate wrapped-only data key (không trả plaintext)
vault write -format=json transit/datakey/wrapped/my-app-key
```

### 6.2. Envelope encryption workflow

```
1. App gọi Vault → transit/datakey/plaintext/my-app-key
2. Vault trả về: plaintext_key + encrypted_key
3. App dùng plaintext_key để encrypt dữ liệu locally (AES-GCM)
4. App lưu: encrypted_data + encrypted_key vào storage
5. App XÓA plaintext_key khỏi memory

Khi decrypt:
1. App đọc encrypted_key từ storage
2. App gọi Vault → transit/decrypt/my-app-key với encrypted_key
3. Vault trả về plaintext_key
4. App dùng plaintext_key để decrypt dữ liệu locally
5. App XÓA plaintext_key khỏi memory
```

### 6.3. Python envelope encryption example

```python
import hvac
import os
import base64
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

client = hvac.Client(
    url=os.environ['VAULT_ADDR'],
    token=os.environ['VAULT_TOKEN']
)

def envelope_encrypt(data: bytes, key_name: str) -> dict:
    """Encrypt dữ liệu lớn sử dụng envelope encryption."""
    # 1. Lấy data key từ Vault
    response = client.secrets.transit.generate_data_key(
        name=key_name,
        key_type='plaintext'
    )
    
    plaintext_key = base64.b64decode(response['data']['plaintext'])
    encrypted_key = response['data']['ciphertext']
    
    # 2. Encrypt locally bằng data key
    aesgcm = AESGCM(plaintext_key[:32])  # AES-256
    nonce = os.urandom(12)
    ciphertext = aesgcm.encrypt(nonce, data, None)
    
    # 3. XÓA plaintext key khỏi memory
    del plaintext_key
    
    return {
        'encrypted_key': encrypted_key,
        'nonce': base64.b64encode(nonce).decode(),
        'ciphertext': base64.b64encode(ciphertext).decode()
    }

def envelope_decrypt(envelope: dict, key_name: str) -> bytes:
    """Decrypt dữ liệu sử dụng envelope encryption."""
    # 1. Decrypt data key qua Vault
    response = client.secrets.transit.decrypt_data(
        name=key_name,
        ciphertext=envelope['encrypted_key']
    )
    
    plaintext_key = base64.b64decode(response['data']['plaintext'])
    
    # 2. Decrypt locally
    aesgcm = AESGCM(plaintext_key[:32])
    nonce = base64.b64decode(envelope['nonce'])
    ciphertext = base64.b64decode(envelope['ciphertext'])
    
    plaintext = aesgcm.decrypt(nonce, ciphertext, None)
    
    # 3. XÓA plaintext key
    del plaintext_key
    
    return plaintext

# Sử dụng
large_data = b"This is a large file content..." * 10000
envelope = envelope_encrypt(large_data, 'my-app-key')
recovered = envelope_decrypt(envelope, 'my-app-key')
assert recovered == large_data
```

## 7. HMAC — Hash-based Message Authentication Code

```bash
# Tạo HMAC key
vault write -f transit/keys/hmac-key type=hmac

# Generate HMAC
vault write -format=json transit/hmac/hmac-key \
  input="$(echo -n 'data to authenticate' | base64)"

# Output:
# {
#   "data": {
#     "hmac": "vault:v1:UG5pdmVyc2FsIEhNQUM..."
#   }
# }

# Verify HMAC
vault write transit/verify/hmac-key \
  input="$(echo -n 'data to authenticate' | base64)" \
  hmac="vault:v1:UG5pdmVyc2FsIEhNQUM..."

# Output:
# Key      Value
# ---      -----
# valid    true

# Sử dụng HMAC algorithm cụ thể
vault write transit/hmac/hmac-key \
  input="$(echo -n 'data' | base64)" \
  algorithm="sha2-512"
```

## 8. Sign and Verify — Digital signature

### 8.1. Generate signing key

```bash
# Tạo ECDSA signing key
vault write transit/keys/signing-key type=ecdsa-p256

# Tạo Ed25519 signing key
vault write transit/keys/ed25519-key type=ed25519

# Tạo RSA signing key
vault write transit/keys/rsa-signing type=rsa-4096
```

### 8.2. Sign data

```bash
# Sign với ECDSA
vault write -format=json transit/sign/signing-key \
  input="$(echo -n 'document content to sign' | base64)"

# Output:
# {
#   "data": {
#     "key_version": 1,
#     "signature": "vault:v1:MEYCIQDx..."
#   }
# }

# Sign với hash algorithm cụ thể
vault write -format=json transit/sign/signing-key \
  input="$(echo -n 'document content' | base64)" \
  hash_algorithm="sha2-512" \
  signature_algorithm="pkcs1v15"
```

### 8.3. Verify signature

```bash
vault write transit/verify/signing-key \
  input="$(echo -n 'document content to sign' | base64)" \
  signature="vault:v1:MEYCIQDx..."

# Output:
# Key      Value
# ---      -----
# valid    true
```

### 8.4. Prehashed signing

```bash
# Khi data đã được hash sẵn
DATA_HASH=$(echo -n 'large document' | sha256sum | cut -d' ' -f1)

vault write transit/sign/signing-key \
  input="$(echo -n "$DATA_HASH" | xxd -r -p | base64)" \
  prehashed=true \
  hash_algorithm="sha2-256"
```

## 9. Convergent Encryption

Convergent encryption ensures that **same plaintext always produces the same ciphertext** — useful for searching on encrypted data.

### 9.1. Create convergent keys

```bash
# Tạo key với convergent encryption
vault write transit/keys/search-key \
  type="aes256-gcm96" \
  derived=true \
  convergent_encryption=true
```

### 9.2. Encrypt with context

```bash
# Context phải giống nhau để tạo cùng ciphertext
CONTEXT=$(echo -n "user-email" | base64)

# Encrypt
vault write -field=ciphertext transit/encrypt/search-key \
  plaintext="$(echo -n 'user@example.com' | base64)" \
  context="$CONTEXT"
# vault:v1:abc123...

# Encrypt lại cùng data + context → cùng ciphertext
vault write -field=ciphertext transit/encrypt/search-key \
  plaintext="$(echo -n 'user@example.com' | base64)" \
  context="$CONTEXT"
# vault:v1:abc123...  ← GIỐNG NHAU!

# Khác context → khác ciphertext
vault write -field=ciphertext transit/encrypt/search-key \
  plaintext="$(echo -n 'user@example.com' | base64)" \
  context="$(echo -n 'other-context' | base64)"
# vault:v1:xyz789...  ← KHÁC
```

### 9.3. Use case: Search on encrypted emails

```sql
-- Lưu encrypted email vào database
INSERT INTO users (name, encrypted_email) VALUES
  ('User A', 'vault:v1:abc123...');

-- Search bằng cách encrypt search term với cùng context
-- App encrypt 'user@example.com' → 'vault:v1:abc123...'
SELECT * FROM users WHERE encrypted_email = 'vault:v1:abc123...';
```

## 10. Batch Operations

### 10.1. Batch encrypt

```bash
# Batch encrypt nhiều items cùng lúc
vault write transit/encrypt/my-app-key \
  batch_input='[
    {"plaintext": "'$(echo -n 'secret1' | base64)'"},
    {"plaintext": "'$(echo -n 'secret2' | base64)'"},
    {"plaintext": "'$(echo -n 'secret3' | base64)'"}
  ]'

# API call
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{
    "batch_input": [
      {"plaintext": "c2VjcmV0MQ=="},
      {"plaintext": "c2VjcmV0Mg=="},
      {"plaintext": "c2VjcmV0Mw=="}
    ]
  }' \
  "$VAULT_ADDR/v1/transit/encrypt/my-app-key"
```

### 10.2. Batch decrypt

```bash
curl --header "X-Vault-Token: $VAULT_TOKEN" \
  --request POST \
  --data '{
    "batch_input": [
      {"ciphertext": "vault:v1:abc..."},
      {"ciphertext": "vault:v1:def..."},
      {"ciphertext": "vault:v1:ghi..."}
    ]
  }' \
  "$VAULT_ADDR/v1/transit/decrypt/my-app-key"
```

## 11. BYOK — Bring Your Own Key

Import encryption key from outside into Vault Transit.

### 11.1. Get the wrapping key

```bash
# Lấy Vault's wrapping key (RSA public key)
vault read -format=json transit/wrapping_key | jq -r '.data.public_key' > /tmp/wrapping-key.pem
```

### 11.2. Wrap and import key

```bash
# Generate key bên ngoài
openssl rand -hex 32 > /tmp/my-key.hex

# Wrap key bằng Vault's wrapping key
# (Sử dụng PKCS#1 OAEP with SHA-256)
echo -n "$(cat /tmp/my-key.hex)" | xxd -r -p | \
  openssl pkeyutl -encrypt -pubin -inkey /tmp/wrapping-key.pem \
  -pkeyopt rsa_padding_mode:oaep -pkeyopt rsa_oaep_md:sha256 | \
  base64 -w0 > /tmp/wrapped-key.b64

# Import vào Vault
vault write transit/keys/imported-key/import \
  ciphertext="$(cat /tmp/wrapped-key.b64)" \
  type="aes256-gcm96"

# Cleanup
rm -f /tmp/my-key.hex /tmp/wrapped-key.b64 /tmp/wrapping-key.pem
```

## 12. Policies cho Transit

```hcl
# Policy cho application: chỉ encrypt/decrypt
path "transit/encrypt/my-app-key" {
  capabilities = ["update"]
}

path "transit/decrypt/my-app-key" {
  capabilities = ["update"]
}

# Policy cho data key generation
path "transit/datakey/plaintext/my-app-key" {
  capabilities = ["update"]
}

# Policy cho signing service
path "transit/sign/signing-key" {
  capabilities = ["update"]
}

path "transit/verify/signing-key" {
  capabilities = ["update"]
}

# Policy cho HMAC
path "transit/hmac/hmac-key" {
  capabilities = ["update"]
}

# Policy cho key admin (rotation, config)
path "transit/keys/*" {
  capabilities = ["create", "read", "update", "list"]
}

# KHÔNG cho phép export keys
path "transit/export/*" {
  capabilities = ["deny"]
}
```

## 13. Best Practices

### 13.1. Key Management

- ✅ Separate key for each application/use case
- ✅ Enable auto-rotation (30-90 days)
- ✅ Set `exportable=false` (default)
- ✅ Use `min_encryption_version` after key rotation
- ✅ Rewrap ciphertext periodically

### 13.2. Performance

- ✅ Use batch operations for bulk encrypt/decrypt
- ✅ Envelope encryption for data > 1MB
- ✅ Cache data keys on the client side when needed (short-lived)
- ✅ ChaCha20-Poly1305 for software-only env (no AES-NI)

### 13.3. Security

- ✅ Do not log plaintext, only log ciphertext
- ✅ Separate encrypt/decrypt permissions
- ✅ Audit log for all crypto operations
- ✅ DELETE plaintext keys from memory immediately after use

## Summary

In this lesson, you have mastered the Transit Secrets Engine:

1. **Encrypt/Decrypt** — encrypts data via Vault API
2. **Key rotation** — rotate keys safely, no need to re-encrypt
3. **Rewrapping** — upgrade ciphertext to new key version
4. **Data key generation** — envelope encryption for large data
5. **HMAC** — message authentication
6. **Sign/Verify** — digital signature
7. **Convergent encryption** — search on encrypted data
8. **Batch operations** — efficient batch processing
9. **BYOK** — import key from outside

The next article will explore **AWS, Azure, GCP Cloud Secrets Engines** — creating dynamic credentials for multi-cloud environments.
