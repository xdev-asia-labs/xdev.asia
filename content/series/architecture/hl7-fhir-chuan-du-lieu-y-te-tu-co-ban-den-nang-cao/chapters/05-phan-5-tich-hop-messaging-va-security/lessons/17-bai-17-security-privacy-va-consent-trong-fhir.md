---
id: 019e0a10-a504-7001-d001-f1a7f8000504
title: 'Bài 17: Security, Privacy và Consent trong FHIR'
slug: bai-17-security-privacy-va-consent-trong-fhir
description: >-
  FHIR Security labels, AuditEvent resource, Provenance resource,
  Consent framework, RBAC/ABAC trong FHIR, mã hóa dữ liệu y tế,
  HIPAA compliance, GDPR, quy định bảo mật y tế Việt Nam,
  best practices bảo mật cho FHIR Server.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Tích hợp, Messaging và Security"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-fhir-security-overview"><strong>1. FHIR Security Overview</strong></h2>

<p>Dữ liệu y tế là một trong những loại dữ liệu nhạy cảm nhất. FHIR cung cấp nhiều cơ chế bảo mật tích hợp.</p>

<table>
<thead>
<tr><th>Lớp bảo mật</th><th>Cơ chế FHIR</th></tr>
</thead>
<tbody>
<tr><td>Authentication</td><td>SMART on FHIR, OAuth 2.0</td></tr>
<tr><td>Authorization</td><td>Clinical scopes, Consent</td></tr>
<tr><td>Audit</td><td>AuditEvent resource</td></tr>
<tr><td>Provenance</td><td>Provenance resource</td></tr>
<tr><td>Labeling</td><td>Security labels (meta.security)</td></tr>
<tr><td>Consent</td><td>Consent resource</td></tr>
<tr><td>Transport</td><td>TLS 1.2+</td></tr>
</tbody>
</table>

<h2 id="2-security-labels"><strong>2. Security Labels</strong></h2>

<p>Security labels gắn vào <code>meta.security</code> để gán nhãn bảo mật cho resources.</p>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "meta": {
    "security": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
        "code": "R",
        "display": "Restricted"
      },
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code": "HIV",
        "display": "HIV/AIDS information sensitivity"
      }
    ]
  }
}
</code></pre>

<h3 id="confidentiality-codes"><strong>Confidentiality Codes</strong></h3>

<table>
<thead>
<tr><th>Code</th><th>Display</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>U</td><td>Unrestricted</td><td>Không hạn chế</td></tr>
<tr><td>L</td><td>Low</td><td>Mức thấp</td></tr>
<tr><td>M</td><td>Moderate</td><td>Mức trung bình</td></tr>
<tr><td>N</td><td>Normal</td><td>Bình thường</td></tr>
<tr><td>R</td><td>Restricted</td><td>Hạn chế</td></tr>
<tr><td>V</td><td>Very Restricted</td><td>Rất hạn chế (tâm thần, HIV, lạm dụng)</td></tr>
</tbody>
</table>

<h2 id="3-auditevent"><strong>3. AuditEvent Resource</strong></h2>

<p>Ghi nhận <strong>mọi thao tác</strong> truy cập dữ liệu — WHO did WHAT to WHICH data, WHEN, WHERE, WHY.</p>

<pre><code class="language-json">{
  "resourceType": "AuditEvent",
  "category": [
    {
      "coding": [
        {
          "system": "http://dicom.nema.org/resources/ontology/DCM",
          "code": "110112",
          "display": "Query"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/restful-interaction",
        "code": "search-type",
        "display": "search"
      }
    ]
  },
  "action": "E",
  "recorded": "2025-01-15T10:30:00+07:00",
  "outcome": {
    "code": {
      "system": "http://terminology.hl7.org/CodeSystem/audit-event-outcome",
      "code": "success"
    }
  },
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://dicom.nema.org/resources/ontology/DCM",
            "code": "110153",
            "display": "Source Role ID"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/practitioner-001",
        "display": "BS. Trần Thị B"
      },
      "requestor": true,
      "networkString": "192.168.1.100"
    }
  ],
  "source": {
    "observer": {
      "reference": "Device/fhir-server-001"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
            "code": "4",
            "display": "Application Server"
          }
        ]
      }
    ]
  },
  "entity": [
    {
      "what": {
        "reference": "Patient/patient-001"
      },
      "role": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/object-role",
            "code": "1",
            "display": "Patient"
          }
        ]
      }
    }
  ]
}
</code></pre>

<h2 id="4-provenance"><strong>4. Provenance Resource</strong></h2>

<p>Ghi nhận <strong>nguồn gốc</strong> và <strong>lịch sử</strong> thay đổi của data — ai tạo, ai sửa, từ nguồn nào.</p>

<pre><code class="language-json">{
  "resourceType": "Provenance",
  "target": [
    {"reference": "Observation/obs-hba1c-001"}
  ],
  "recorded": "2025-01-15T10:30:00+07:00",
  "activity": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-DataOperation",
        "code": "CREATE"
      }
    ]
  },
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
            "code": "author"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/practitioner-001"
      },
      "onBehalfOf": {
        "reference": "Organization/org-lab-001"
      }
    }
  ],
  "entity": [
    {
      "role": "source",
      "what": {
        "reference": "Device/lab-analyzer-001",
        "display": "Máy xét nghiệm huyết học tự động"
      }
    }
  ]
}
</code></pre>

<h2 id="5-consent"><strong>5. Consent Resource</strong></h2>

<p><strong>Consent</strong> ghi nhận sự đồng ý/từ chối của bệnh nhân về việc sử dụng dữ liệu.</p>

<pre><code class="language-json">{
  "resourceType": "Consent",
  "status": "active",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/consentcategorycodes",
          "code": "59284-0",
          "display": "Patient Consent"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/patient-001"
  },
  "date": "2025-01-15",
  "grantor": [
    {
      "reference": "Patient/patient-001"
    }
  ],
  "controller": [
    {
      "reference": "Organization/org-bvdk-001"
    }
  ],
  "decision": "permit",
  "provision": [
    {
      "type": "permit",
      "actor": [
        {
          "role": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "PRCP",
                "display": "Primary information recipient"
              }
            ]
          },
          "reference": {
            "reference": "Organization/org-bvdk-001"
          }
        }
      ],
      "action": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentaction",
              "code": "access"
            }
          ]
        }
      ],
      "securityLabel": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
          "code": "N"
        }
      ],
      "purpose": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "TREAT",
          "display": "Treatment"
        }
      ],
      "provision": [
        {
          "type": "deny",
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "PSY",
              "display": "Psychiatry"
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="6-rbac-abac"><strong>6. RBAC/ABAC trong FHIR</strong></h2>

<table>
<thead>
<tr><th>Model</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>RBAC</td><td>Role-Based Access Control</td><td>Bác sĩ khoa Tim chỉ xem BN khoa Tim</td></tr>
<tr><td>ABAC</td><td>Attribute-Based Access Control</td><td>Dựa trên security label, location, time</td></tr>
<tr><td>PBAC</td><td>Purpose-Based Access Control</td><td>Chỉ truy cập cho mục đích điều trị (TREAT)</td></tr>
</tbody>
</table>

<h2 id="7-compliance"><strong>7. Compliance — HIPAA, GDPR, Việt Nam</strong></h2>

<table>
<thead>
<tr><th>Quy định</th><th>Phạm vi</th><th>Yêu cầu chính</th></tr>
</thead>
<tbody>
<tr><td>HIPAA</td><td>Hoa Kỳ</td><td>PHI protection, minimum necessary, audit trail, BAA</td></tr>
<tr><td>GDPR</td><td>EU</td><td>Consent, right to erasure, DPO, data portability</td></tr>
<tr><td>Luật ATTT mạng (86/2015)</td><td>Việt Nam</td><td>Bảo vệ thông tin cá nhân, thông báo khi breach</td></tr>
<tr><td>NĐ 13/2023/NĐ-CP</td><td>Việt Nam</td><td>Bảo vệ dữ liệu cá nhân, consent, DPO</td></tr>
<tr><td>TT 46/2018/TT-BYT</td><td>Việt Nam</td><td>Hồ sơ bệnh án điện tử, bảo mật</td></tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. Best Practices bảo mật FHIR Server</strong></h2>

<ol>
<li><strong>TLS 1.2+</strong> cho tất cả connections</li>
<li><strong>OAuth 2.0</strong> (SMART on FHIR) cho authentication/authorization</li>
<li><strong>AuditEvent</strong> log mọi truy cập — retention ≥ 7 năm (y tế)</li>
<li><strong>Security labels</strong> cho dữ liệu nhạy cảm (HIV, tâm thần, di truyền)</li>
<li><strong>Consent</strong> — lưu trữ và enforce sự đồng ý của bệnh nhân</li>
<li><strong>Encryption at rest</strong> — mã hóa database</li>
<li><strong>Network segmentation</strong> — FHIR server trong internal network</li>
<li><strong>Rate limiting</strong> — chống abuse API</li>
<li><strong>Input validation</strong> — validate tất cả FHIR resources</li>
<li><strong>Minimal exposure</strong> — chỉ expose cần thiết qua CapabilityStatement</li>
</ol>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<ul>
<li><p><strong>Security Labels</strong> — Gắn nhãn confidentiality, sensitivity lên resources</p></li>
<li><p><strong>AuditEvent</strong> — Audit trail cho mọi truy cập dữ liệu</p></li>
<li><p><strong>Provenance</strong> — Truy xuất nguồn gốc data</p></li>
<li><p><strong>Consent</strong> — Quản lý sự đồng ý bệnh nhân, permit/deny by purpose</p></li>
<li><p><strong>Compliance</strong> — HIPAA (US), GDPR (EU), NĐ 13/2023 (VN)</p></li>
</ul>
