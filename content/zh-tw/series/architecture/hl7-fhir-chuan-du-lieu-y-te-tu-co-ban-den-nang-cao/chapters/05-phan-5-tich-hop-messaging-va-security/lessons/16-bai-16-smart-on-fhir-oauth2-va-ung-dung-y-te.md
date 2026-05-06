---
id: 019e0a10-a503-7001-d001-f1a7f8000503
title: 第 16 課：FHIR 上的 SMART - OAuth2 和醫療應用
slug: bai-16-smart-on-fhir-oauth2-va-ung-dung-y-te
description: >-
  SMART 應用程式啟動框架、醫療保健中的 OAuth 2.0、臨床範圍、啟動情境（EHR 啟動、獨立啟動）、SMART 後端服務（系統到系統）、CDS
  Hooks（臨床決策支援）。練習建立簡單的 SMART 應用程式。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 第 5 部分：整合、訊息傳遞與安全性
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4553" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4553)"/>

  <!-- Decorations -->
  <g>
    <circle cx="652" cy="266" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="704" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="756" cy="250" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="808" cy="242" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="234" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="246" x2="1100" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="276" x2="1050" y2="346" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1081.507041555162,225.5 1081.507041555162,266.5 1046,287 1010.492958444838,266.5 1010.492958444838,225.5 1046,205" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ 建築 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：FHIR 上的 SMART - OAuth2 和應用程式</tspan>
      <tspan x="60" dy="42">醫療</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：整合、訊息傳遞與安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-smart-on-fhir-overview"><strong>1. FHIR 上的 SMART 概述</strong></h2>

<p><strong>智慧</strong> FHIR 上的（可替代醫療應用程式、可重複使用技術）是一個框架，允許第三方醫療應用程式透過 OAuth 2.0 + FHIR 與 EHR/EMR 安全整合。</p>

<pre><code>
┌─────────────┐                    ┌─────────────┐
│  SMART App  │   OAuth 2.0 flow   │   EHR/EMR   │
│  (web/      │ ◀────────────────▶ │  (FHIR      │
│  mobile)    │   FHIR API calls   │   Server)   │
└─────────────┘                    └─────────────┘
       │                                  │
       │        ┌──────────────┐          │
       └───────▶│  Auth Server │◀─────────┘
                │  (OAuth 2.0) │
                └──────────────┘
</code></pre>

<h2 id="2-launch-types"><strong>2. 啟動類型</strong></h2>

<h3 id="ehr-launch"><strong>電子病歷發布</strong></h3>

<p>應用程式已打開 <strong>從電子病歷內部</strong> — EHR 傳遞背景資訊（病人、遭遇）。</p>

<pre><code>
1. Bác sĩ click "Open App" trong EHR
2. EHR redirect → App với launch parameter
3. App → Authorization Server (authorize endpoint)
4. User đồng ý → Auth Server trả code
5. App đổi code → access_token + id_token
6. App gọi FHIR API với access_token
</code></pre>

<pre><code class="language-http">GET https://smart-app.example.com/launch
  ?iss=https://fhir-server.hospital.vn/fhir/r5
  &launch=xyz123
</code></pre>

<h3 id="standalone-launch"><strong>獨立啟動</strong></h3>

<p>應用程式運行 <strong>獨立的</strong>，自己找到FHIR伺服器並請求許可。</p>

<pre><code class="language-http">GET https://fhir-server.hospital.vn/fhir/r5/.well-known/smart-configuration
</code></pre>

<pre><code class="language-json">{
  "authorization_endpoint": "https://auth.hospital.vn/authorize",
  "token_endpoint": "https://auth.hospital.vn/token",
  "capabilities": [
    "launch-ehr",
    "launch-standalone",
    "client-public",
    "client-confidential-symmetric",
    "sso-openid-connect",
    "context-ehr-patient",
    "permission-v2"
  ],
  "scopes_supported": [
    "openid",
    "fhirUser",
    "launch",
    "launch/patient",
    "patient/*.rs",
    "user/*.cruds"
  ]
}
</code></pre>

<h2 id="3-clinical-scopes"><strong>3. 臨床範圍（SMART v2）</strong></h2>

<p>SMART 範圍控制允許應用程式存取的內容：</p>

<pre><code># Scope format (v2):
# [context]/[resourceType].[cruds]

# Patient-level scopes (data của patient cụ thể)
patient/Patient.rs          # Read Patient + Search
patient/Observation.rs      # Read + Search Observations
patient/MedicationRequest.rs

# User-level scopes (theo quyền của user đang login)
user/Patient.cruds          # Full CRUD + Search on Patient
user/Encounter.rs
user/*.rs                   # Read + Search tất cả resources

# System-level scopes (backend services)
system/Patient.rs
system/*.rs
</code></pre>

<h3 id="scope-characters"><strong>CRUD操作</strong></h3>

<table>
<thead>
<tr><th>人物</th><th>操作</th></tr>
</thead>
<tbody>
<tr><td>c</td><td>創建</td></tr>
<tr><td>r</td><td>閱讀</td></tr>
<tr><td>你</td><td>更新</td></tr>
<tr><td>d</td><td>刪除</td></tr>
<tr><td>s</td><td>搜尋</td></tr>
</tbody>
</table>

<h2 id="4-oauth2-flow"><strong>4. OAuth 2.0 授權代碼流程</strong></h2>

<pre><code class="language-http"># Step 1: Authorization Request
GET https://auth.hospital.vn/authorize
  ?response_type=code
  &client_id=my-smart-app
  &redirect_uri=https://smart-app.example.com/callback
  &scope=launch/patient openid fhirUser patient/Patient.rs patient/Observation.rs
  &state=random-state-value
  &aud=https://fhir-server.hospital.vn/fhir/r5
  &code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM
  &code_challenge_method=S256
</code></pre>

<pre><code class="language-http"># Step 2: Token Exchange
POST https://auth.hospital.vn/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=auth-code-from-callback
&redirect_uri=https://smart-app.example.com/callback
&client_id=my-smart-app
&code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
</code></pre>

<pre><code class="language-json">{
  "access_token": "eyJ...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "launch/patient openid fhirUser patient/Patient.rs patient/Observation.rs",
  "id_token": "eyJ...",
  "patient": "patient-001",
  "encounter": "encounter-001",
  "fhirUser": "Practitioner/practitioner-001"
}
</code></pre>

<pre><code class="language-http"># Step 3: FHIR API Calls
GET https://fhir-server.hospital.vn/fhir/r5/Patient/patient-001
Authorization: Bearer eyJ...
</code></pre>

<h2 id="5-backend-services"><strong>5. SMART後端服務（系統到系統）</strong></h2>

<p>無需用戶互動——使用 <strong>客戶憑證</strong> 與 JWT 斷言。</p>

<pre><code class="language-http">POST https://auth.hospital.vn/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&scope=system/Patient.rs system/Observation.rs
&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
&client_assertion=eyJ...signed_jwt...
</code></pre>

<h2 id="6-cds-hooks"><strong>6.CDS Hooks－臨床決策支持</strong></h2>

<p>CDS Hooks 允許應用程式配置 <strong>臨床建議</strong> 在 EHR 中做出決策時。</p>

<pre><code class="language-json">{
  "hookInstance": "uuid-001",
  "hook": "patient-view",
  "fhirServer": "https://fhir-server.hospital.vn/fhir/r5",
  "fhirAuthorization": {
    "access_token": "eyJ...",
    "token_type": "Bearer",
    "scope": "patient/Patient.rs patient/Observation.rs"
  },
  "context": {
    "userId": "Practitioner/practitioner-001",
    "patientId": "patient-001"
  }
}
</code></pre>

<h3 id="cds-response"><strong>CDS 回應（卡）</strong></h3>

<pre><code class="language-json">{
  "cards": [
    {
      "uuid": "card-001",
      "summary": "HbA1c cao — Cần điều chỉnh thuốc tiểu đường",
      "detail": "HbA1c gần nhất: 8.5% (2025-01-10). Mục tiêu: < 7%. Xem xét tăng liều Metformin hoặc thêm thuốc mới.",
      "indicator": "warning",
      "source": {
        "label": "Diabetes Management CDS",
        "url": "https://cds.hospital.vn"
      },
      "suggestions": [
        {
          "label": "Kê đơn Metformin 1000mg",
          "actions": [
            {
              "type": "create",
              "description": "Tạo MedicationRequest Metformin 1000mg",
              "resource": {
                "resourceType": "MedicationRequest",
                "status": "draft",
                "intent": "proposal"
              }
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><p><strong>FHIR 上的智能</strong> — 適用於第三方健康應用程式的 OAuth 2.0 + FHIR</p></li>
<li><p><strong>電子病歷發布</strong> — 從 EHR 開啟應用程序，以取得可用的上下文</p></li>
<li><p><strong>獨立啟動</strong> — 應用程式獨立運行，自行要求權限</p></li>
<li><p><strong>臨床範圍</strong> — 具有 CRUDS 權限的病人/*、使用者/*、系統/*</p></li>
<li><p><strong>後端服務</strong> — 系統到系統，JWT 用戶端斷言</p></li>
<li><p><strong>CDS 掛鉤</strong> — 護理點決策支持</p></li>
</ul>
