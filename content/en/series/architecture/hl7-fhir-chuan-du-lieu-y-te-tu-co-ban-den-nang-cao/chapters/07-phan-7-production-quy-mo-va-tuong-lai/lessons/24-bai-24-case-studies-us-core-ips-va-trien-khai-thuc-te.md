---
id: 019e0a10-a703-7001-d001-f1a7f8000703
title: 'Lesson 24: Case Studies — US Core, IPS and Practical Implementation'
slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
description: >-
  Analyze US Core Implementation Guide, International Patient Summary (IPS), AU
  Core (Australia), UK Core, lessons from actual implementation, compare
  countries, apply to Vietnam.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 24
section_title: 'Part 7: Production, Scale and Future'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9907" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9907)"/>

  <!-- Decorations -->
  <g>
    <circle cx="888" cy="34" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="676" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="964" cy="210" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="752" cy="38" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="126" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="174" x2="1100" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="204" x2="1050" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1049.1147367097487,209.5 1049.1147367097487,238.5 1024,253 998.8852632902513,238.5 998.8852632902513,209.5 1024,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Architecture — Lesson 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 24: Case Studies — US Core, IPS and</tspan>
      <tspan x="60" dy="42">Realistic Implementation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Production, Scale and Future</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-us-core"><strong>1. US Core Implementation Guide</strong></h2>

<p><strong>US Core</strong> is the official US IG, required for all EHR systems certified under ONC (21st Century Cures Act). This is the most important reference IG in the world.</p>

<h3 id="us-core-profiles"><strong>Main US Core Profiles</strong></h3>

<table>
<thead>
<tr><th>Profile</th><th>Base Resource</th><th>Featured request</th></tr>
</thead>
<tbody>
<tr><td>US Core Patients</td><td>Patient</td><td>Race, ethnicity extensions; MRN identifier</td></tr>
<tr><td>US Core Conditions</td><td>Condition</td><td>SNOMED CT + ICD-10-CM; Clinical status required</td></tr>
<tr><td>US Core Observation</td><td>Observation</td><td>Vital Signs, Lab Results, Social History</td></tr>
<tr><td>US Core MedicationRequest</td><td>MedicationRequest</td><td>RxNorm coding required</td></tr>
<tr><td>US Core Encounter</td><td>Encounter</td><td>Class, type, participant required</td></tr>
<tr><td>US Core Procedures</td><td>Procedure</td><td>CPT/SNOMED CT coding</td></tr>
<tr><td>US Core AllergyIntolerance</td><td>AllergyIntolerance</td><td>Clinical status + reaction</td></tr>
<tr><td>US Core DocumentReference</td><td>DocumentReference</td><td>Clinical Notes (C-CDA on FHIR)</td></tr>
</tbody>
</table>

<h3 id="us-core-patient-example"><strong>US Core Patient — Example</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2106-3",
            "display": "White"
          }
        },
        {"url": "text", "valueString": "White"}
      ]
    },
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2186-5",
            "display": "Not Hispanic or Latino"
          }
        }
      ]
    }
  ],
  "identifier": [
    {
      "system": "http://hospital.example.org/mrn",
      "value": "MRN123456"
    }
  ],
  "name": [
    {"family": "Smith", "given": ["John", "A."]}
  ],
  "gender": "male",
  "birthDate": "1985-03-15"
}
</code></pre>

<h3 id="us-core-lessons"><strong>Lessons from US Core</strong></h3>

<ol>
<li><strong>Standard Mandate</strong> — ONC rule (2020) requires EHR vendors to implement US Core</li>
<li><strong>USCDI</strong> — US Core Data for Interoperability defines minimal data elements</li>
<li><strong>Terminology binding</strong> — Required SNOMED CT, LOINC, RxNorm</li>
<li><strong>$everything operation</strong> — Patient Access API for patient portals</li>
<li><strong>Bulk Data</strong> — Payer-to-Payer data exchange</li>
</ol>

<h2 id="2-ips"><strong>2. International Patient Summary (IPS)</strong></h2>

<p><strong>IPS</strong> is a summary of cross-border health records — minimally, regardless of jurisdiction. ISO 27269:2021.</p>

<h3 id="ips-sections"><strong>IPS Sections required</strong></h3>

<table>
<thead>
<tr><th>Section</th><th>FHIR Resource</th><th>Content</th></tr>
</thead>
<tbody>
<tr><td>Medication Summary</td><td>MedicationStatement</td><td>Medicines in use</td></tr>
<tr><td>Allergies and Intolerances</td><td>AllergyIntolerance</td><td>Allergy, BDR medication</td></tr>
<tr><td>Problem List</td><td>Condition</td><td>Disease under treatment</td></tr>
<tr><td>Immunizations</td><td>Immunization</td><td>Vaccination</td></tr>
<tr><td>Procedures History</td><td>Procedure</td><td>Surgery and procedures performed</td></tr>
</tbody>
</table>

<h3 id="ips-document"><strong>IPS Document Bundle</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips"
          ]
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "60591-5",
              "display": "Patient summary Document"
            }
          ]
        },
        "subject": {"reference": "Patient/patient-001"},
        "date": "2025-01-15",
        "author": [{"reference": "Practitioner/practitioner-001"}],
        "title": "International Patient Summary",
        "section": [
          {
            "title": "Active Problems",
            "code": {"coding": [{"system": "http://loinc.org", "code": "11450-4"}]},
            "entry": [{"reference": "Condition/cond-001"}]
          },
          {
            "title": "Medication Summary",
            "code": {"coding": [{"system": "http://loinc.org", "code": "10160-0"}]},
            "entry": [{"reference": "MedicationStatement/med-001"}]
          },
          {
            "title": "Allergies and Intolerances",
            "code": {"coding": [{"system": "http://loinc.org", "code": "48765-2"}]},
            "entry": [{"reference": "AllergyIntolerance/allergy-001"}]
          }
        ]
      }
    }
  ]
}
</code></pre>

<h3 id="ips-use-case"><strong>Use case IPS for Vietnam</strong></h3>

<ul>
<li><strong>Medical tourism</strong> — Japanese/Korean patients coming to Vietnam bring IPS</li>
<li><strong>Foreign workers</strong> — Vietnamese workers in Japan/Korea need IPS</li>
<li><strong>International hospital transfer</strong> — FV Hospital, Vinmec International</li>
</ul>

<h2 id="3-au-core"><strong>3. AU Core (Australia)</strong></h2>

<table>
<thead>
<tr><th>Characteristics</th><th>AU Core</th><th>Lessons for Vietnam</th></tr>
</thead>
<tbody>
<tr><td>Identifier</td><td>IHI (Individual Healthcare Identifier)</td><td>Similar to CCCD/health insurance</td></tr>
<tr><td>Indigenous status</td><td>Aboriginal/Torres Strait Islander extension</td><td>Similar to Ethnic Vietnam extension</td></tr>
<tr><td>Healthcare providers</td><td>HPI-I (identifier for BS)</td><td>Practicing certificate code</td></tr>
<tr><td>Organization</td><td>HPI-O (identifier for organizations)</td><td>Medical facility code</td></tr>
<tr><td>Terminology</td><td>SNOMED CT-AU, PBS, AMT</td><td>ICD-10 VN, Health insurance drugs</td></tr>
</tbody>
</table>

<h2 id="4-uk-core"><strong>4. UK Core</strong></h2>

<table>
<thead>
<tr><th>Characteristics</th><th>UK Core</th><th>Lessons for Vietnam</th></tr>
</thead>
<tbody>
<tr><td>NHS Number</td><td>10-digit unique ID for each citizen</td><td>CCCD 12 numbers</td></tr>
<tr><td>Ethnicity</td><td>ONS 2011 Census categories</td><td>54 Vietnamese ethnic groups</td></tr>
<tr><td>GP Practice</td><td>ODS code for every GP</td><td>Initial medical facility code</td></tr>
<tr><td>dm+d</td><td>NHS Dictionary of Medicines</td><td>List of drugs under health insurance</td></tr>
<tr><td>SNOMED CT UK</td><td>UK clinical terms</td><td>ICD-10 VN</td></tr>
</tbody>
</table>

<h2 id="5-so-sanh"><strong>5. Compare Implementation Guides</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>US Core</th><th>AU Core</th><th>UK Core</th><th>VN Core (recommended)</th></tr>
</thead>
<tbody>
<tr><td>FHIR Version</td><td>R4</td><td>R4</td><td>R4</td><td>R5</td></tr>
<tr><td>Patient ID</td><td>MRN/SSN</td><td>IHI</td><td>NHS Number</td><td>CCCD</td></tr>
<tr><td>Insurance</td><td>Coverage</td><td>Medicare</td><td>NHS</td><td>Health insurance</td></tr>
<tr><td>Diagnosis code</td><td>ICD-10-CM</td><td>ICD-10-AM</td><td>SNOMED CT</td><td>ICD-10 VN</td></tr>
<tr><td>Drug code</td><td>RxNorm</td><td>AMT</td><td>dm+d</td><td>Health insurance medicine</td></tr>
<tr><td>Lab code</td><td>LOINC</td><td>LOINC</td><td>LOINC</td><td>LOINC</td></tr>
<tr><td>Mandate</td><td>ONC Rule</td><td>ADHA</td><td>NHS Digital</td><td>MOH (future)</td></tr>
</tbody>
</table>

<h2 id="6-bai-hoc"><strong>6. Lessons from actual implementation</strong></h2>

<ol>
<li><strong>Start small</strong> — US Core starts with 15 profiles, gradually expanding</li>
<li><strong>Government mandate</strong> — Need legal regulations (ONC Rule, ADHA) to promote adoption</li>
<li><strong>Terminology first</strong> — Build CodeSystems/ValueSets (ICD-10 VN, Health Insurance Drugs) before profiles</li>
<li><strong>Testing infrastructure</strong> — US has Touchstone, Inferno for conformance testing</li>
<li><strong>Community</strong> — Connectathon, IG balloting, community feedback</li>
<li><strong>Backward compatibility</strong> — US Core keeps R4 because of its large ecosystem; VN can start R5</li>
<li><strong>Must Support</strong> — Clearly define must-support semantics for vendors</li>
</ol>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>US Core</strong> — Largest reference IG, required by ONC, using SNOMED CT + LOINC + RxNorm</p></li>
<li><p><strong>IPS</strong> — Summary of cross-border records, ISO 27269, 5 sections required</p></li>
<li><p><strong>AU/UK Core</strong> — Each country customizes its own identifier, terminology, and legislation</p></li>
<li><p><strong>VN Core</strong> — Need to build on international lessons, starting from terminology + Patient profile</p></li>
</ul>
