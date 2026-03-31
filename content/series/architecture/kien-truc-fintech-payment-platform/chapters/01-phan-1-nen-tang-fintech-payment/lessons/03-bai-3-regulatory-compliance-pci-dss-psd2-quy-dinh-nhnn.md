---
id: 019d8a21-c503-7005-d001-e1f2a3b4c503
title: "Bài 3: Regulatory Compliance - PCI-DSS, PSD2 & Quy định NHNN Việt Nam"
slug: bai-3-regulatory-compliance-pci-dss-psd2-quy-dinh-nhnn
description: >-
  Tổng quan về compliance trong FinTech. PCI-DSS requirements cho
  payment processing. PSD2 và Open Banking. Quy định của Ngân hàng
  Nhà nước Việt Nam về thanh toán điện tử, ví điện tử. Thiết kế
  hệ thống đáp ứng compliance.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền Tảng FinTech & Payment"
course:
  id: 019d8a21-c500-7005-d001-e1f2a3b4c5d6
  title: "Kiến trúc FinTech & Payment Platform"
  slug: kien-truc-fintech-payment-platform
---

## Giới thiệu

Trong FinTech, compliance không phải là "nice-to-have" — nó là **bắt buộc**. Một payment platform phải tuân thủ hàng loạt quy định về bảo mật, quyền riêng tư, và reporting. Vi phạm có thể dẫn đến phạt hàng triệu đô, mất license, và mất niềm tin khách hàng.

---

## 1. PCI-DSS — Payment Card Industry Data Security Standard

### 1.1 Tổng quan PCI-DSS

PCI-DSS là tiêu chuẩn bảo mật bắt buộc cho mọi tổ chức xử lý, lưu trữ, hoặc truyền tải dữ liệu thẻ thanh toán.

```
PCI-DSS v4.0 (2024+) — 12 Requirements:
├── Build & Maintain Secure Network
│   ├── 1. Firewall configuration
│   └── 2. No vendor-supplied defaults
├── Protect Cardholder Data
│   ├── 3. Protect stored data
│   └── 4. Encrypt transmission
├── Vulnerability Management
│   ├── 5. Anti-malware
│   └── 6. Secure development
├── Access Control
│   ├── 7. Restrict access (need-to-know)
│   ├── 8. Unique IDs for access
│   └── 9. Physical access control
├── Monitoring & Testing
│   ├── 10. Track & monitor access
│   └── 11. Regular security testing
└── Security Policy
    └── 12. Information security policy
```

### 1.2 PCI-DSS Compliance Levels

| Level | Tiêu chí | Yêu cầu |
|-------|---------|---------|
| **Level 1** | >6M transactions/year | Annual on-site audit (QSA) |
| **Level 2** | 1M-6M transactions/year | Annual SAQ, quarterly scan |
| **Level 3** | 20K-1M transactions/year | Annual SAQ, quarterly scan |
| **Level 4** | <20K transactions/year | Annual SAQ |

### 1.3 Thiết kế hệ thống PCI-DSS Compliant

```
┌─────────────────────────────────────────────────────┐
│                  PCI-DSS SCOPE                       │
│  ┌─────────────────────────────────────────────┐    │
│  │         Cardholder Data Environment (CDE)    │    │
│  │                                               │    │
│  │  ┌──────────┐    ┌──────────┐   ┌─────────┐ │    │
│  │  │ Payment  │    │   HSM    │   │Tokenizer│ │    │
│  │  │ Service  │    │          │   │         │ │    │
│  │  └──────────┘    └──────────┘   └─────────┘ │    │
│  │                                               │    │
│  │  Network Segmentation (VLAN/Firewall)        │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │         Connected Systems (Reduced Scope)    │    │
│  │  ┌──────────┐    ┌──────────┐               │    │
│  │  │ API GW   │    │ Logging  │               │    │
│  │  └──────────┘    └──────────┘               │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  Out of Scope: Wallet Service, Reporting, etc.      │
│  (if properly segmented)                             │
└─────────────────────────────────────────────────────┘
```

**Strategy: Minimize PCI scope** bằng tokenization — thay thế card data bằng tokens ngay lập tức, các service khác chỉ xử lý tokens.

### 1.4 Tokenization Flow

```
Customer ─── PAN: 4111...1111 ───► Tokenizer ─── Token: tok_abc123 ──►
                                       │
                                  ┌────▼────┐
                                  │   HSM   │  (Hardware Security Module)
                                  │ Encrypt │
                                  │ & Store │
                                  └─────────┘

Everywhere else in the system: only tok_abc123 is used
PAN never leaves the CDE (Cardholder Data Environment)
```

---

## 2. PSD2 và Open Banking

### 2.1 PSD2 — Payment Services Directive 2

PSD2 là directive của EU yêu cầu ngân hàng mở API cho third-party:

```
PSD2 Key Requirements:
├── Strong Customer Authentication (SCA)
│   ├── Knowledge (password, PIN)
│   ├── Possession (phone, token)
│   └── Inherence (biometrics)
│   → At least 2 of 3 factors required
│
├── Open Banking APIs
│   ├── Account Information Service (AIS)
│   ├── Payment Initiation Service (PIS)
│   └── Card-Based Payment Instrument (CBPII)
│
└── Consumer Protection
    ├── Reduced liability for unauthorized transactions
    ├── No surcharges for card payments
    └── Faster complaint resolution
```

### 2.2 3D Secure 2 (3DS2) — SCA Implementation

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│ Customer │   │ Merchant │   │  Card    │   │  Issuer  │
│          │   │  (PSP)   │   │ Network  │   │  Bank    │
└────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘
     │              │              │              │
     │  Checkout    │              │              │
     ├─────────────►│              │              │
     │              │  3DS Auth    │              │
     │              ├─────────────►│              │
     │              │              │  Auth Req    │
     │              │              ├─────────────►│
     │              │              │              │
     │              │              │  Risk-based  │
     │              │              │  Decision    │
     │              │              │◄─────────────┤
     │              │              │              │
     │     Challenge (if needed)   │              │
     │◄────────────────────────────┤              │
     │  OTP/Biometric              │              │
     ├────────────────────────────►│              │
     │              │              │              │
     │              │  Auth Result │              │
     │              │◄─────────────┤              │
     │  Result      │              │              │
     │◄─────────────┤              │              │
```

---

## 3. Quy định NHNN Việt Nam

### 3.1 Khung pháp lý

```
Hệ thống quy định FinTech tại Việt Nam:
├── Luật Ngân hàng Nhà nước (2010)
├── Luật Các tổ chức tín dụng (2024, sửa đổi)
├── Luật Giao dịch điện tử (2023)
├── Nghị định 101/2012 về thanh toán không dùng tiền mặt
│   └── Nghị định 35/2023 (sửa đổi)
├── Thông tư 39/2014 về trung gian thanh toán
├── Thông tư 23/2022 về dịch vụ ví điện tử
└── Sandbox FinTech (Nghị định 13/2023)
```

### 3.2 Yêu cầu cho Ví điện tử

| Yêu cầu | Nội dung |
|---------|---------|
| **Giấy phép** | Phải được NHNN cấp phép trung gian thanh toán |
| **Vốn điều lệ** | Tối thiểu 50 tỷ VND |
| **KYC** | Xác minh danh tính qua CCCD/eKYC |
| **Hạn mức** | Ví chưa xác minh: 10 triệu. Đã xác minh: 100 triệu |
| **Liên kết** | Phải liên kết với tài khoản ngân hàng |
| **Báo cáo** | Báo cáo định kỳ cho NHNN |
| **Lưu trữ** | Lưu trữ giao dịch tối thiểu 10 năm |
| **An toàn** | Tuân thủ tiêu chuẩn an toàn thông tin NHNN |

### 3.3 eKYC Requirements

```
eKYC Flow (theo quy định NHNN):
├── 1. Thu thập thông tin
│   ├── CCCD (Căn cước công dân gắn chip)
│   ├── NFC đọc chip CCCD
│   └── Video call / Liveness detection
├── 2. Xác minh
│   ├── OCR trích xuất thông tin CCCD
│   ├── Face matching (ảnh CCCD vs selfie)
│   ├── Liveness check (chống giả mạo)
│   └── Cross-check với CSDL quốc gia
├── 3. Phân loại rủi ro
│   ├── Low risk: Giao dịch < 10 triệu
│   ├── Medium risk: 10-100 triệu
│   └── High risk: > 100 triệu (cần xác minh thêm)
└── 4. Lưu trữ & Báo cáo
    ├── Lưu trữ hồ sơ KYC >= 5 năm
    └── Báo cáo NHNN theo quy định
```

---

## 4. Compliance Architecture

### 4.1 Compliance-by-Design Principles

```
┌─────────────────────────────────────────────────────────┐
│              COMPLIANCE-BY-DESIGN                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Data Minimization                                    │
│     → Chỉ thu thập dữ liệu cần thiết                  │
│                                                          │
│  2. Encryption Everywhere                                │
│     → At rest (AES-256), In transit (TLS 1.3)          │
│                                                          │
│  3. Audit Trail                                          │
│     → Immutable logs cho mọi thay đổi                  │
│                                                          │
│  4. Access Control                                       │
│     → RBAC + need-to-know principle                    │
│                                                          │
│  5. Data Retention                                       │
│     → Policy-driven retention & deletion               │
│                                                          │
│  6. Consent Management                                   │
│     → Explicit consent, easy withdrawal                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Audit Trail Design

```sql
-- Immutable audit log table
CREATE TABLE audit_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    timestamp       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actor_id        UUID NOT NULL,
    actor_type      VARCHAR(50) NOT NULL, -- 'user', 'system', 'admin'
    action          VARCHAR(100) NOT NULL,
    resource_type   VARCHAR(100) NOT NULL,
    resource_id     UUID NOT NULL,
    old_value       JSONB,
    new_value       JSONB,
    ip_address      INET,
    user_agent      TEXT,
    correlation_id  UUID NOT NULL,
    -- No UPDATE or DELETE allowed
    CHECK (action IN ('CREATE', 'UPDATE', 'DELETE', 'READ', 'EXPORT'))
);

-- Append-only: revoke UPDATE and DELETE
REVOKE UPDATE, DELETE ON audit_log FROM app_user;
```

---

## 5. Compliance Monitoring & Reporting

### 5.1 Automated Compliance Checks

```yaml
compliance_checks:
  pci_dss:
    - name: "Encryption at rest"
      check: "All databases use AES-256 encryption"
      frequency: daily
    - name: "Access logging"
      check: "All CDE access is logged"
      frequency: real-time
    - name: "Vulnerability scan"
      check: "ASV scan completed"
      frequency: quarterly

  nhnn:
    - name: "Transaction limits"
      check: "Wallet limits enforced"
      frequency: real-time
    - name: "KYC verification"
      check: "All users verified before limit increase"
      frequency: on-event
    - name: "Regulatory reporting"
      check: "Monthly reports submitted"
      frequency: monthly
```

---

## Tổng kết

Compliance trong FinTech là nền tảng không thể thiếu. Key takeaways:
- **PCI-DSS**: Minimize scope bằng tokenization, network segmentation
- **PSD2/SCA**: 3D Secure 2 cho Strong Customer Authentication
- **NHNN VN**: eKYC, hạn mức ví, báo cáo định kỳ
- **Design principles**: Data minimization, encryption, audit trails

**Bài tiếp theo**: Chúng ta sẽ bắt đầu xây dựng **Payment Gateway Architecture** — luồng thanh toán end-to-end từ checkout đến settlement.
