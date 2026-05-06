---
id: 019e0a10-a201-7001-d001-f1a7f8000201
title: 'レッスン 4: 患者、医師、組織 - 管理リソース'
slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
description: >-
  リソース 患者の詳細 (人口統計、識別子、連絡先、リンク)、医師と医師の役割、組織、場所、エンドポイント。 FHIR
  サーバーで患者を作成、読み取り、更新する練習をします。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: コア FHIR リソース'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: 患者、医師、組織</tspan>
      <tspan x="60" dy="42">- 管理リソース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: コア FHIR リソース</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-patient-resource"><strong>1. 患者リソース — 医療データセンター</strong></h2>

<p><strong>患者</strong> は FHIR の最も重要なリソースです。ほぼすべての臨床データが患者に関連付けられています。これはレベルアップする最初のリソースでもあります <strong>規範的</strong> (安定、下位互換性)。</p>

<h3 id="cau-truc-patient"><strong>患者リソースの構造</strong></h3>

<table>
<thead>
<tr><th>要素</th><th>種類</th><th>カーディナリティ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>識別子</td><td>識別子[]</td><td>0..*</td><td>識別コード (CCCD、健康保険、MRN...)</td></tr>
<tr><td>アクティブな</td><td>ブール値</td><td>0..1</td><td>録音はアクティブですか?</td></tr>
<tr><td>名前</td><td>人間名[]</td><td>0..*</td><td>患者さんのフルネーム</td></tr>
<tr><td>電気通信</td><td>連絡先[]</td><td>0..*</td><td>電話番号、メールアドレス</td></tr>
<tr><td>性別</td><td>コード</td><td>0..1</td><td>男性 |女性 |その他 |未知。不明</td></tr>
<tr><td>生年月日</td><td>日付。日付</td><td>0..1</td><td>生年月日</td></tr>
<tr><td>故人[x]</td><td>ブール値/日付時刻</td><td>0..1</td><td>紛失しましたか？</td></tr>
<tr><td>住所</td><td>住所[]</td><td>0..*</td><td>住所</td></tr>
<tr><td>婚姻状況</td><td>コード可能なコンセプト</td><td>0..1</td><td>婚姻状況</td></tr>
<tr><td>複数の誕生[x]</td><td>ブール値/整数</td><td>0..1</td><td>双子/三つ子?</td></tr>
<tr><td>写真。写真</td><td>添付ファイル[]</td><td>0..*</td><td>代表写真</td></tr>
<tr><td>連絡先。連絡先</td><td>バックボーン要素[]</td><td>0..*</td><td>連絡先担当者</td></tr>
<tr><td>コミュニケーション。コミュニケーション</td><td>バックボーン要素[]</td><td>0..*</td><td>コミュニケーション言語</td></tr>
<tr><td>一般開業医</td><td>参照[]</td><td>0..*</td><td>かかりつけ医</td></tr>
<tr><td>組織の管理</td><td>参考資料</td><td>0..1</td><td>記録管理を整理する</td></tr>
<tr><td>リンク。リンク</td><td>バックボーン要素[]</td><td>0..*</td><td>別のレコードへのリンク (マージ)</td></tr>
</tbody>
</table>

<h3 id="patient-viet-nam"><strong>ベトナム人患者向けの患者リソース — 全例</strong></h3>

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

<h3 id="identifier-patterns"><strong>ベトナムの識別子パターン</strong></h3>

<table>
<thead>
<tr><th>IDの種類</th><th>システム（URL）</th><th>値の例</th></tr>
</thead>
<tbody>
<tr><td>国民 ID カード (CCCD)</td><td>http://fhir.vn/sid/cccd</td><td>001085012345</td></tr>
<tr><td>健康保険証</td><td>http://fhir.vn/sid/bhyt</td><td>DN4850112340001</td></tr>
<tr><td>患者コード (MRN)</td><td>http://benhvien.vn/sid/mrn</td><td>BN-2026-00123</td></tr>
<tr><td>パスポート</td><td>http://fhir.vn/sid/passport</td><td>C1234567</td></tr>
</tbody>
</table>

<h2 id="2-practitioner-resource"><strong>2. 医師向けリソース — 医療スタッフ</strong></h2>

<p><strong>開業医</strong> 医師、看護師、薬剤師、技術者など、医療に関わるあらゆる個人を表します。</p>

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

<h3 id="practitioner-role"><strong>PractitionerRole — 特定の役割</strong></h3>

<p><strong>プラクティショナー役割</strong> 特定の組織における開業医の役割について説明します。医師は多くの PractitionerRoles (さまざまな場所で働く) を持つことができます。</p>

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

<h2 id="3-organization-resource"><strong>3. 組織リソース — 医療施設</strong></h2>

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

<h2 id="4-location-resource"><strong>4. 位置リソース — 位置</strong></h2>

<p><strong>場所</strong> 物理的な場所を説明します: 診療所、部門、病院のベッド、手術室など。</p>

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

<h2 id="5-quan-he-giua-resources"><strong>5. 管理リソース間の関係</strong></h2>

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

<h2 id="6-thuc-hanh"><strong>6. 実践: 完全なリソース システムを作成する</strong></h2>

<p>病院での患者登録という実際的なワークフローを作成してみましょう。</p>

<h3 id="buoc-1-tao-organization"><strong>ステップ 1: 組織を作成する</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Organization \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Organization","name":"Bệnh viện Đa khoa A","active":true}'
# Ghi lại id trả về → {org-id}
</code></pre>

<h3 id="buoc-2-tao-practitioner"><strong>ステップ 2: プラクティショナーを作成する</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Practitioner \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Practitioner","name":[{"family":"Trần","given":["Minh","Đức"],"prefix":["BS"]}],"active":true}'
# Ghi lại id trả về → {prac-id}
</code></pre>

<h3 id="buoc-3-tao-patient"><strong>ステップ 3: 組織および医師に関連付けられた患者を作成する</strong></h3>
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

<h3 id="buoc-4-verify"><strong>ステップ 4: 確認 — _include を使用して患者を検索する</strong></h3>
<pre><code class="language-bash"># Tìm patient kèm thông tin Practitioner
curl -s "http://localhost:8080/fhir/Patient?_include=Patient:general-practitioner" | jq '.entry[].resource.resourceType'
# Kết quả: "Patient", "Practitioner"
</code></pre>

<h2 id="7-tom-tat"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>患者</strong>: データセンター、識別子、人口統計、連絡先が含まれます</p></li>
<li><p><strong>開業医</strong>：医療従事者の個人情報、学位、証明書</p></li>
<li><p><strong>プラクティショナー役割</strong>: 特定の組織における特定の役割 (1 人が複数の役割を担う)</p></li>
<li><p><strong>組織</strong>: 病院、診療所、科、部門</p></li>
<li><p><strong>場所</strong>: 物理的な場所 (部屋、床、ベッド)</p></li>
<li><p>リソースは相互にリンクされています <strong>参考文献</strong></p></li>
<li><p>使用する <strong>識別子</strong> ベトナムの状況に適したもの（CCCD、健康保険、MRN）</p></li>
</ul>
