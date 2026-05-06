---
id: 019e0a10-a602-7001-d001-f1a7f8000602
title: 'レッスン 19: 実践 — FHIR クライアントとアプリケーションの統合'
slug: bai-19-hands-on-fhir-client-va-tich-hop-ung-dung
description: >-
  HAPI FHIR クライアント (Java)、fhir.js (JavaScript)、Python fhirclient、Fluent クライアント
  API、汎用クライアント、React + FHIR を使用した患者管理アプリケーションの構築、モバイル アプリの統合、エラー処理および再試行パターン。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 6: 実践 - FHIR システムの構築'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9660" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9660)"/>

  <!-- Decorations -->
  <g>
    <circle cx="889" cy="57" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="66" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="967" cy="75" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="84" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="93" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: 実践 — FHIR クライアントと統合</tspan>
      <tspan x="60" dy="42">アプリケーション</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実践 - FHIR システムの構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fhir-client-overview"><strong>1. FHIR クライアントの概要</strong></h2>

<p>FHIR クライアントは、アプリケーションが RESTful API を介して FHIR サーバーと通信するのに役立つライブラリです。各言語には独自のライブラリがあります。</p>

<table>
<thead>
<tr><th>言語</th><th>図書館</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td>ジャワ</td><td>HAPI FHIR クライアント</td><td>最も完全な、汎用 + 流暢な API</td></tr>
<tr><td>JavaScript</td><td>fhirclient.js / fhir.js</td><td>ブラウザ + Node.js、FHIR 上の SMART</td></tr>
<tr><td>パイソン</td><td>親密なクライアント</td><td>SMART on FHIR、Pydantic モデル</td></tr>
<tr><td>.NET</td><td>Firely SDK (Hl7.Fhir)</td><td>NuGet パッケージ、強力な型指定</td></tr>
<tr><td>スウィフト</td><td>Swift-FHIR</td><td>iOS/macOSネイティブ</td></tr>
</tbody>
</table>

<h2 id="2-hapi-fhir-client-java"><strong>2.HAPI FHIR クライアント (Java)</strong></h2>

<h3 id="generic-client"><strong>汎用クライアント</strong></h3>

<pre><code class="language-java">FhirContext ctx = FhirContext.forR5();
IGenericClient client = ctx.newRestfulGenericClient(
    "http://localhost:8080/fhir");

// READ
Patient patient = client.read()
    .resource(Patient.class)
    .withId("patient-001")
    .execute();

System.out.println("Bệnh nhân: " + 
    patient.getNameFirstRep().getNameAsSingleString());

// CREATE
Patient newPatient = new Patient();
newPatient.addName()
    .setFamily("Nguyễn")
    .addGiven("Văn A");
newPatient.addIdentifier()
    .setSystem("http://xdev.asia/fhir/sid/cccd")
    .setValue("001234567890");
newPatient.setGender(Enumerations.AdministrativeGender.MALE);
newPatient.setBirthDateElement(new DateType("1990-05-15"));

MethodOutcome outcome = client.create()
    .resource(newPatient)
    .execute();

System.out.println("Created ID: " + 
    outcome.getId().getIdPart());

// SEARCH
Bundle results = client.search()
    .forResource(Patient.class)
    .where(Patient.NAME.matches().value("Nguyễn"))
    .and(Patient.BIRTHDATE.afterOrEquals().day("1990-01-01"))
    .returnBundle(Bundle.class)
    .execute();

for (Bundle.BundleEntryComponent entry : results.getEntry()) {
    Patient p = (Patient) entry.getResource();
    System.out.println(p.getNameFirstRep().getNameAsSingleString());
}
</code></pre>

<h3 id="fluent-client"><strong>Fluent クライアント — 注釈ベース</strong></h3>

<pre><code class="language-java">// Định nghĩa interface
@FhirClient
public interface PatientClient {
    
    @Read
    Patient readPatient(@IdParam IdType id);
    
    @Search
    Bundle searchByName(
        @RequiredParam(name = Patient.SP_NAME) StringParam name);
    
    @Create
    MethodOutcome createPatient(@ResourceParam Patient patient);
    
    @Update
    MethodOutcome updatePatient(
        @IdParam IdType id, 
        @ResourceParam Patient patient);
    
    @Delete
    void deletePatient(@IdParam IdType id);
}

// Sử dụng
PatientClient patientClient = ctx.newRestfulClient(
    PatientClient.class, "http://localhost:8080/fhir");
Patient patient = patientClient.readPatient(new IdType("patient-001"));
</code></pre>

<h2 id="3-javascript-fhir-client"><strong>3. JavaScript FHIR クライアント (fhirclient.js)</strong></h2>

<pre><code class="language-bash">npm install fhirclient
</code></pre>

<pre><code class="language-javascript">import FHIR from 'fhirclient';

// Kết nối FHIR Server (standalone launch)
const client = FHIR.client({
  serverUrl: 'http://localhost:8080/fhir'
});

// Read Patient
const patient = await client.request('Patient/patient-001');
console.log(`Bệnh nhân: ${patient.name[0].family} ${patient.name[0].given[0]}`);

// Search
const bundle = await client.request(
  'Patient?name=Nguyen&birthdate=ge1990-01-01&_count=20'
);
bundle.entry?.forEach(entry => {
  console.log(entry.resource.name[0].text);
});

// Create
const newPatient = {
  resourceType: 'Patient',
  name: [{ family: 'Trần', given: ['Thị B'] }],
  gender: 'female',
  birthDate: '1995-08-20',
  identifier: [{
    system: 'http://xdev.asia/fhir/sid/cccd',
    value: '001987654321'
  }]
};

const created = await client.create(newPatient);
console.log('Created:', created.id);
</code></pre>

<h3 id="smart-launch"><strong>SMART on FHIR の発売</strong></h3>

<pre><code class="language-javascript">// launch.html — redirect page
FHIR.oauth2.authorize({
  clientId: 'my-fhir-app',
  scope: 'patient/*.read user/Patient.read launch/patient',
  redirectUri: '/callback'
});

// callback.html — sau khi authorize
FHIR.oauth2.ready()
  .then(client => {
    // Tự động lấy Patient context
    return client.patient.read();
  })
  .then(patient => {
    console.log('Current patient:', patient.name[0].text);
    
    // Lấy Observations của patient hiện tại
    return client.request(
      `Observation?patient=${patient.id}&code=8867-4&_sort=-date&_count=10`
    );
  })
  .then(bundle => {
    bundle.entry?.forEach(entry => {
      const obs = entry.resource;
      console.log(`${obs.code.text}: ${obs.valueQuantity.value} ${obs.valueQuantity.unit}`);
    });
  });
</code></pre>

<h2 id="4-python-fhir-client"><strong>4. Python FHIR クライアント</strong></h2>

<pre><code class="language-bash">pip install fhirclient
</code></pre>

<pre><code class="language-python">from fhirclient import client
from fhirclient.models.patient import Patient
from fhirclient.models.observation import Observation

# Cấu hình
settings = {
    'app_id': 'my_fhir_app',
    'api_base': 'http://localhost:8080/fhir'
}
smart = client.FHIRClient(settings=settings)

# Read Patient
patient = Patient.read('patient-001', smart.server)
print(f"Bệnh nhân: {patient.name[0].family} {patient.name[0].given[0]}")

# Search
search = Patient.where(struct={
    'name': 'Nguyen',
    'birthdate': 'ge1990-01-01'
})
patients = search.perform_resources(smart.server)
for p in patients:
    print(f"  - {p.name[0].text} ({p.birthDate.isostring})")

# Create Observation
obs = Observation()
obs.status = 'final'
obs.code = {
    'coding': [{
        'system': 'http://loinc.org',
        'code': '8867-4',
        'display': 'Heart rate'
    }]
}
obs.subject = {'reference': f'Patient/patient-001'}
obs.valueQuantity = {
    'value': 72,
    'unit': 'beats/minute',
    'system': 'http://unitsofmeasure.org',
    'code': '/min'
}
result = obs.create(smart.server)
print(f"Created Observation: {result}")
</code></pre>

<h2 id="5-react-fhir-app"><strong>5. React を使用して患者管理アプリケーションを構築する</strong></h2>

<pre><code class="language-tsx">// PatientList.tsx
import { useState, useEffect } from 'react';
import FHIR from 'fhirclient';

interface FHIRPatient {
  id: string;
  name: Array<{ family: string; given: string[] }>;
  gender: string;
  birthDate: string;
}

export function PatientList() {
  const [patients, setPatients] = useState&lt;FHIRPatient[]&gt;([]);
  const [search, setSearch] = useState('');
  const client = FHIR.client({ serverUrl: '/fhir' });

  useEffect(() => {
    loadPatients();
  }, [search]);

  async function loadPatients() {
    const params = search 
      ? `Patient?name=${encodeURIComponent(search)}&_count=20`
      : 'Patient?_count=20&_sort=-_lastUpdated';
    
    const bundle = await client.request(params);
    const list = bundle.entry?.map(
      (e: any) => e.resource as FHIRPatient
    ) || [];
    setPatients(list);
  }

  return (
    &lt;div&gt;
      &lt;input 
        placeholder="Tìm bệnh nhân..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      /&gt;
      &lt;table&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            &lt;th&gt;ID&lt;/th&gt;
            &lt;th&gt;Họ tên&lt;/th&gt;
            &lt;th&gt;Giới tính&lt;/th&gt;
            &lt;th&gt;Ngày sinh&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
          {patients.map(p => (
            &lt;tr key={p.id}&gt;
              &lt;td&gt;{p.id}&lt;/td&gt;
              &lt;td&gt;{p.name[0]?.family} {p.name[0]?.given?.join(' ')}&lt;/td&gt;
              &lt;td&gt;{p.gender}&lt;/td&gt;
              &lt;td&gt;{p.birthDate}&lt;/td&gt;
            &lt;/tr&gt;
          ))}
        &lt;/tbody&gt;
      &lt;/table&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2 id="6-error-handling"><strong>6. エラー処理と再試行パターン</strong></h2>

<pre><code class="language-java">// Java - Retry với exponential backoff
public &lt;T extends IBaseResource&gt; T readWithRetry(
        Class&lt;T&gt; resourceClass, String id, int maxRetries) {
    
    int attempt = 0;
    while (attempt &lt; maxRetries) {
        try {
            return client.read()
                .resource(resourceClass)
                .withId(id)
                .execute();
        } catch (ResourceNotFoundException e) {
            throw e; // 404 — không retry
        } catch (FhirClientConnectionException e) {
            attempt++;
            if (attempt == maxRetries) throw e;
            
            long delay = (long) Math.pow(2, attempt) * 1000;
            Thread.sleep(delay);
        }
    }
    throw new IllegalStateException("Max retries exceeded");
}
</code></pre>

<pre><code class="language-java">// OperationOutcome handling
try {
    client.create().resource(patient).execute();
} catch (UnprocessableEntityException e) {
    OperationOutcome oo = (OperationOutcome) e.getOperationOutcome();
    for (var issue : oo.getIssue()) {
        System.err.println(String.format("[%s] %s: %s",
            issue.getSeverity(),
            issue.getLocation(),
            issue.getDiagnostics()));
    }
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>HAPI FHIR クライアント (Java)</strong> — 柔軟性のための汎用クライアント、タイプセーフのための Fluent クライアント</p></li>
<li><p><strong>firclient.js</strong> — SMART on FHIR の起動、ブラウザ + Node.js</p></li>
<li><p><strong>Python のクライアント</strong> — Pydantic モデル、データ パイプラインの統合が簡単</p></li>
<li><p><strong>反応 + FHIR</strong> — 患者管理 SPA は FHIR サーバーに直接接続します</p></li>
<li><p><strong>エラー処理</strong> — OperationOutcome の解析、指数バックオフを使用して再試行します</p></li>
</ul>
