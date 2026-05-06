---
id: 019e0a10-a201-7001-d001-f1a7f8000201
title: 第 4 課：病人、從業人員、組織 - 行政資源
slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
description: 資源 患者詳細資料（人口統計、識別碼、聯絡人、連結）、從業者和從業者角色、組織、位置、端點。練習在 FHIR 伺服器上建立、閱讀和更新患者。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：FHIR 核心資源
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2971" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2971)"/>

  <!-- Decorations -->
  <g>
    <circle cx="807" cy="91" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="721" cy="45" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="152" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="259" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="161" x2="1100" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="191" x2="1050" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.1769145362398,143 992.1769145362398,179 961,197 929.8230854637602,179 929.8230854637602,143 961,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ 建築 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：病人、從業人員、組織</tspan>
      <tspan x="60" dy="42">- 行政資源</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：FHIR 核心資源</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-patient-resource"><strong>1. 病患資源－醫療資料中心</strong></h2>

<p><strong>病人</strong> 是 FHIR 中最重要的資源——幾乎所有臨床數據都與患者相關。這也是第一個升級的資源 <strong>規範性</strong> （穩定，向後相容）。</p>

<h3 id="cau-truc-patient"><strong>病患資源結構</strong></h3>

<table>
<thead>
<tr><th>元素</th><th>類型</th><th>基數</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>識別符</td><td>標識符[]</td><td>0..*</td><td>識別碼（CCCD、健康保險、MRN...）</td></tr>
<tr><td>活躍的</td><td>布林值</td><td>0..1</td><td>錄音是否處於活動狀態？</td></tr>
<tr><td>姓名</td><td>人名[]</td><td>0..*</td><td>患者的全名</td></tr>
<tr><td>電信</td><td>聯絡點[]</td><td>0..*</td><td>電話號碼、電子郵件</td></tr>
<tr><td>性別</td><td>程式碼</td><td>0..1</td><td>男 |女 |其他|未知。未知</td></tr>
<tr><td>出生日期</td><td>日期。日期</td><td>0..1</td><td>出生日期</td></tr>
<tr><td>已故[x]</td><td>布林值/日期時間</td><td>0..1</td><td>迷路了？</td></tr>
<tr><td>地址</td><td>地址[]</td><td>0..*</td><td>地址</td></tr>
<tr><td>婚姻狀況</td><td>可編碼概念</td><td>0..1</td><td>婚姻狀況</td></tr>
<tr><td>多胞胎[x]</td><td>布林/整數</td><td>0..1</td><td>雙胞胎/三胞胎？</td></tr>
<tr><td>照片。照片</td><td>附件[]</td><td>0..*</td><td>代表照片</td></tr>
<tr><td>聯繫。聯絡方式</td><td>骨幹元素[]</td><td>0..*</td><td>聯絡人</td></tr>
<tr><td>溝通。溝通</td><td>骨幹元素[]</td><td>0..*</td><td>溝通語言</td></tr>
<tr><td>全科醫生</td><td>參考文獻[]</td><td>0..*</td><td>初級保健醫生</td></tr>
<tr><td>管理組織</td><td>參考</td><td>0..1</td><td>組織記錄管理</td></tr>
<tr><td>鏈接。連結</td><td>骨幹元素[]</td><td>0..*</td><td>連結到另一筆記錄（合併）</td></tr>
</tbody>
</table>

<h3 id="patient-viet-nam"><strong>越南病患的病患資源 — 完整範例</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "vn-patient-001",
  "meta": {
    "profile": ["http://fhir.vn/StructureDefinition/vn-core-patient"]
  },
  "identifier": [
    {
      "use": "official",
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "NI",
          "display": "National unique individual identifier"
        }]
      },
      "system": "http://fhir.vn/sid/cccd",
      "value": "001085012345"
    },
    {
      "use": "secondary",
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "SB",
          "display": "Social Beneficiary Identifier"
        }]
      },
      "system": "http://fhir.vn/sid/bhyt",
      "value": "DN4850112340001"
    },
    {
      "use": "usual",
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "MR",
          "display": "Medical record number"
        }]
      },
      "system": "http://benhvien-a.vn/sid/mrn",
      "value": "BN-2026-00123"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "text": "Nguyễn Văn An",
      "family": "Nguyễn",
      "given": ["Văn", "An"]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "+84901234567",
      "use": "mobile",
      "rank": 1
    },
    {
      "system": "email",
      "value": "nguyen.van.an@email.com",
      "use": "home"
    }
  ],
  "gender": "male",
  "birthDate": "1985-03-15",
  "address": [
    {
      "use": "home",
      "type": "physical",
      "text": "123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
      "line": ["123 Lê Lợi"],
      "city": "Thành phố Hồ Chí Minh",
      "district": "Quận 1",
      "state": "Thành phố Hồ Chí Minh",
      "postalCode": "700000",
      "country": "VN"
    }
  ],
  "maritalStatus": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
      "code": "M",
      "display": "Married"
    }],
    "text": "Đã kết hôn"
  },
  "contact": [
    {
      "relationship": [{
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
          "code": "N",
          "display": "Next-of-Kin"
        }]
      }],
      "name": {
        "text": "Trần Thị Bình",
        "family": "Trần",
        "given": ["Thị", "Bình"]
      },
      "telecom": [{
        "system": "phone",
        "value": "+84907654321"
      }]
    }
  ],
  "communication": [{
    "language": {
      "coding": [{
        "system": "urn:ietf:bcp:47",
        "code": "vi",
        "display": "Vietnamese"
      }]
    },
    "preferred": true
  }],
  "managingOrganization": {
    "reference": "Organization/benhvien-a",
    "display": "Bệnh viện Đại học Y Dược TP.HCM"
  }
}
</code></pre>

<h3 id="identifier-patterns"><strong>越南的識別模式</strong></h3>

<table>
<thead>
<tr><th>身分證類型</th><th>系統（網址）</th><th>值範例</th></tr>
</thead>
<tbody>
<tr><td>公民身分證（CCCD）</td><td>http://fhir.vn/sid/cccd</td><td>001085012345</td></tr>
<tr><td>健康保險卡</td><td>http://fhir.vn/sid/bhyt</td><td>DN4850112340001</td></tr>
<tr><td>病患代碼 (MRN)</td><td>http://benhvien.vn/sid/mrn</td><td>BN-2026-00123</td></tr>
<tr><td>護照</td><td>http://fhir.vn/sid/passport</td><td>C1234567</td></tr>
</tbody>
</table>

<h2 id="2-practitioner-resource"><strong>2.從業人員資源－醫務人員</strong></h2>

<p><strong>從業者</strong> 代表參與醫療保健的任何個人：醫生、護士、藥劑師、技術人員......</p>

<pre><code class="language-json">{
  "resourceType": "Practitioner",
  "id": "dr-tran-001",
  "identifier": [{
    "system": "http://fhir.vn/sid/physician-license",
    "value": "BS-TPHCM-2010-00456"
  }],
  "active": true,
  "name": [{
    "use": "official",
    "text": "TS.BS Trần Minh Đức",
    "family": "Trần",
    "given": ["Minh", "Đức"],
    "prefix": ["TS.BS"]
  }],
  "telecom": [{
    "system": "phone",
    "value": "+84909876543",
    "use": "work"
  }],
  "gender": "male",
  "birthDate": "1978-05-20",
  "qualification": [
    {
      "identifier": [{
        "system": "http://fhir.vn/sid/medical-degree",
        "value": "BSCK2-NKH-2010"
      }],
      "code": {
        "coding": [{
          "system": "http://fhir.vn/CodeSystem/qualification",
          "code": "BSCK2",
          "display": "Bác sĩ Chuyên khoa II"
        }]
      },
      "issuer": {
        "display": "Đại học Y Dược TP.HCM"
      }
    }
  ],
  "communication": [{
    "coding": [{
      "system": "urn:ietf:bcp:47",
      "code": "vi"
    }]
  }]
}
</code></pre>

<h3 id="practitioner-role"><strong>PractitionerRole — 特定角色</strong></h3>

<p><strong>從業者角色</strong> 描述特定組織中從業者的角色。一名醫生可以擁有多個從業者角色（在多個地方工作）。</p>

<pre><code class="language-json">{
  "resourceType": "PractitionerRole",
  "id": "dr-tran-role-bva",
  "active": true,
  "practitioner": {
    "reference": "Practitioner/dr-tran-001",
    "display": "TS.BS Trần Minh Đức"
  },
  "organization": {
    "reference": "Organization/benhvien-a",
    "display": "Bệnh viện A"
  },
  "code": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/practitioner-role",
      "code": "doctor",
      "display": "Doctor"
    }]
  }],
  "specialty": [{
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "394579002",
      "display": "Cardiology"
    }],
    "text": "Tim mạch"
  }],
  "location": [{
    "reference": "Location/phong-kham-tim-mach"
  }],
  "availableTime": [{
    "daysOfWeek": ["mon", "tue", "wed", "thu", "fri"],
    "availableStartTime": "07:30:00",
    "availableEndTime": "16:30:00"
  }]
}
</code></pre>

<h2 id="3-organization-resource"><strong>3. 組織資源－醫療設施</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Organization",
  "id": "benhvien-a",
  "identifier": [
    {
      "system": "http://fhir.vn/sid/facility-code",
      "value": "79001"
    },
    {
      "system": "http://fhir.vn/sid/bhxh-facility",
      "value": "79-001"
    }
  ],
  "active": true,
  "type": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/organization-type",
      "code": "prov",
      "display": "Healthcare Provider"
    }]
  }],
  "name": "Bệnh viện Đại học Y Dược TP.HCM",
  "alias": ["BV ĐHYD"],
  "telecom": [
    {
      "system": "phone",
      "value": "+842838554269",
      "use": "work"
    },
    {
      "system": "url",
      "value": "https://www.bvdhydtphcm.vn"
    }
  ],
  "address": [{
    "use": "work",
    "line": ["215 Hồng Bàng"],
    "city": "Thành phố Hồ Chí Minh",
    "district": "Quận 5",
    "country": "VN"
  }]
}
</code></pre>

<h2 id="4-location-resource"><strong>4.位置資源－位置</strong></h2>

<p><strong>地點</strong> 描述實體位置：診所、科室、病床、手術室…</p>

<pre><code class="language-json">{
  "resourceType": "Location",
  "id": "phong-kham-tim-mach",
  "status": "active",
  "name": "Phòng khám Tim mạch - Tầng 3",
  "description": "Phòng khám chuyên khoa Tim mạch, tầng 3 tòa nhà B",
  "mode": "instance",
  "type": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "CARD",
      "display": "Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities"
    }]
  }],
  "telecom": [{
    "system": "phone",
    "value": "+842838554269-303"
  }],
  "address": {
    "line": ["Tầng 3, Tòa B, 215 Hồng Bàng"],
    "city": "TP.HCM",
    "country": "VN"
  },
  "physicalType": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
      "code": "ro",
      "display": "Room"
    }]
  },
  "managingOrganization": {
    "reference": "Organization/benhvien-a"
  }
}
</code></pre>

<h2 id="5-quan-he-giua-resources"><strong>5. 行政資源之間的關係</strong></h2>

<pre><code>┌──────────────────┐
│   Organization   │ ← Bệnh viện/Phòng khám
│   (benhvien-a)   │
└───────┬──────────┘
        │ managingOrganization
        ▼
┌──────────────────┐        ┌──────────────────────┐
│    Location      │◄───────│   PractitionerRole   │
│ (phong-kham-tm)  │        │  (dr-tran-role-bva)  │
└──────────────────┘        └───────┬──────────────┘
                                    │ practitioner
                                    ▼
                            ┌──────────────────┐
                            │  Practitioner    │
                            │  (dr-tran-001)   │
                            └──────────────────┘
                                    ▲ generalPractitioner
                                    │
                            ┌──────────────────┐
                            │    Patient       │
                            │ (vn-patient-001) │
                            └──────────────────┘
</code></pre>

<h2 id="6-thuc-hanh"><strong>6.實踐：創造完整的資源系統</strong></h2>

<p>讓我們建立一個實用的工作流程：在醫院進行病患登記。</p>

<h3 id="buoc-1-tao-organization"><strong>第 1 步：建立組織</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Organization \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Organization","name":"Bệnh viện Đa khoa A","active":true}'
# Ghi lại id trả về → {org-id}
</code></pre>

<h3 id="buoc-2-tao-practitioner"><strong>第2步：創建從業者</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Practitioner \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Practitioner","name":[{"family":"Trần","given":["Minh","Đức"],"prefix":["BS"]}],"active":true}'
# Ghi lại id trả về → {prac-id}
</code></pre>

<h3 id="buoc-3-tao-patient"><strong>步驟 3：創建與組織和從業者關聯的患者</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Patient \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Patient",
    "name": [{"family":"Nguyễn","given":["Thị","Mai"]}],
    "gender": "female",
    "birthDate": "1992-08-10",
    "generalPractitioner": [{"reference":"Practitioner/{prac-id}"}],
    "managingOrganization": {"reference":"Organization/{org-id}"}
  }'
</code></pre>

<h3 id="buoc-4-verify"><strong>步驟 4： 驗證 — 搜尋帶有 _include 的患者</strong></h3>
<pre><code class="language-bash"># Tìm patient kèm thông tin Practitioner
curl -s "http://localhost:8080/fhir/Patient?_include=Patient:general-practitioner" | jq '.entry[].resource.resourceType'
# Kết quả: "Patient", "Practitioner"
</code></pre>

<h2 id="7-tom-tat"><strong>七、總結</strong></h2>

<ul>
<li><p><strong>病人</strong>：資料中心，包含識別碼、人口統計資料、聯絡人</p></li>
<li><p><strong>從業者</strong>：醫務人員個人資料、學位、證書</p></li>
<li><p><strong>從業者角色</strong>：特定組織中的特定角色（1 人擔任多種角色）</p></li>
<li><p><strong>組織機構</strong>：醫院、診所、科室、科室</p></li>
<li><p><strong>地點</strong>：物理位置（房間、樓層、床）</p></li>
<li><p>資源連結在一起 <strong>參考文獻</strong></p></li>
<li><p>使用 <strong>識別符</strong> 適合越南情況（CCCD、健康保險、MRN）</p></li>
</ul>
