---
id: 019e0a10-a503-7001-d001-f1a7f8000503
title: 'Lesson 16: SMART on FHIR - OAuth2 and medical applications'
slug: bai-16-smart-on-fhir-oauth2-va-ung-dung-y-te
description: >-
  SMART App Launch Framework, OAuth 2.0 in healthcare, clinical scopes, launch
  context (EHR launch, standalone launch), SMART Backend Services
  (system-to-system), CDS Hooks (Clinical Decision Support). Practice creating
  simple SMART apps.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 5: Integration, Messaging and Security'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ Architecture — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: SMART on FHIR - OAuth2 and applications</tspan>
      <tspan x="60" dy="42">medical</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Integration, Messaging and Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-smart-on-fhir-overview"><strong>1. SMART on FHIR Overview</strong></h2>

<p><strong>SMART</strong> (Substitutable Medical Applications, Reusable Technologies) on FHIR is a framework that allows third-party medical applications to securely integrate with EHR/EMR via OAuth 2.0 + FHIR.</p>

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

<h2 id="2-launch-types"><strong>2. Launch Types</strong></h2>

<h3 id="ehr-launch"><strong>EHR Launch</strong></h3>

<p>App is opened <strong>from within the EHR</strong> — EHR transmits context (patient, encounter).</p>

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

<h3 id="standalone-launch"><strong>Standalone Launch</strong></h3>

<p>App runs <strong>independent</strong>, find the FHIR server yourself and ask for permission.</p>

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

<h2 id="3-clinical-scopes"><strong>3. Clinical Scopes (SMART v2)</strong></h2>

<p>SMART scopes control what applications are allowed to access:</p>

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

<h3 id="scope-characters"><strong>CRUDS Operations</strong></h3>

<table>
<thead>
<tr><th>Characters</th><th>Operation</th></tr>
</thead>
<tbody>
<tr><td>c</td><td>Create</td></tr>
<tr><td>r</td><td>Read</td></tr>
<tr><td>u</td><td>Update</td></tr>
<tr><td>d</td><td>Delete</td></tr>
<tr><td>s</td><td>Search</td></tr>
</tbody>
</table>

<h2 id="4-oauth2-flow"><strong>4. OAuth 2.0 Authorization Code Flow</strong></h2>

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

<h2 id="5-backend-services"><strong>5. SMART Backend Services (System-to-System)</strong></h2>

<p>No user interaction required — use <strong>client_credentials</strong> with JWT assertions.</p>

<pre><code class="language-http">POST https://auth.hospital.vn/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&scope=system/Patient.rs system/Observation.rs
&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
&client_assertion=eyJ...signed_jwt...
</code></pre>

<h2 id="6-cds-hooks"><strong>6. CDS Hooks — Clinical Decision Support</strong></h2>

<p>CDS Hooks allow applications to provision <strong>clinical suggestion</strong> at the time of decision making in the EHR.</p>

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

<h3 id="cds-response"><strong>CDS Response (Cards)</strong></h3>

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

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>SMART on FHIR</strong> — OAuth 2.0 + FHIR for third-party health apps</p></li>
<li><p><strong>EHR Launch</strong> — Open the app from within the EHR, get the available context</p></li>
<li><p><strong>Standalone Launch</strong> — The app runs independently, asking for permissions on its own</p></li>
<li><p><strong>Clinical Scopes</strong> — patient/*, user/*, system/* with cruds permissions</p></li>
<li><p><strong>Backend Services</strong> — System-to-system, JWT client assertion</p></li>
<li><p><strong>CDS Hooks</strong> — Decision support at point-of-care</p></li>
</ul>
