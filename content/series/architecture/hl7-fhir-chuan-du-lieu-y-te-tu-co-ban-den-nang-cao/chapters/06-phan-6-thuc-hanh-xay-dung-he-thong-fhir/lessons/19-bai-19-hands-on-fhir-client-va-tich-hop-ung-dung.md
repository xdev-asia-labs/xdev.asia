---
id: 019e0a10-a602-7001-d001-f1a7f8000602
title: 'Bài 19: Hands-on — FHIR Client và Tích hợp Ứng dụng'
slug: bai-19-hands-on-fhir-client-va-tich-hop-ung-dung
description: >-
  HAPI FHIR Client (Java), fhir.js (JavaScript), Python fhirclient,
  Fluent Client API, Generic Client, xây dựng ứng dụng quản lý bệnh nhân
  với React + FHIR, mobile app integration, error handling và retry patterns.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Thực hành - Xây dựng hệ thống FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-fhir-client-overview"><strong>1. FHIR Client Overview</strong></h2>

<p>FHIR Client là thư viện giúp ứng dụng giao tiếp với FHIR Server qua RESTful API. Mỗi ngôn ngữ có thư viện riêng.</p>

<table>
<thead>
<tr><th>Ngôn ngữ</th><th>Thư viện</th><th>Đặc điểm</th></tr>
</thead>
<tbody>
<tr><td>Java</td><td>HAPI FHIR Client</td><td>Đầy đủ nhất, Generic + Fluent API</td></tr>
<tr><td>JavaScript</td><td>fhirclient.js / fhir.js</td><td>Browser + Node.js, SMART on FHIR</td></tr>
<tr><td>Python</td><td>fhirclient</td><td>SMART on FHIR, Pydantic models</td></tr>
<tr><td>.NET</td><td>Firely SDK (Hl7.Fhir)</td><td>NuGet package, strong typing</td></tr>
<tr><td>Swift</td><td>Swift-FHIR</td><td>iOS/macOS native</td></tr>
</tbody>
</table>

<h2 id="2-hapi-fhir-client-java"><strong>2. HAPI FHIR Client (Java)</strong></h2>

<h3 id="generic-client"><strong>Generic Client</strong></h3>

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

<h3 id="fluent-client"><strong>Fluent Client — Annotation-based</strong></h3>

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

<h2 id="3-javascript-fhir-client"><strong>3. JavaScript FHIR Client (fhirclient.js)</strong></h2>

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

<h3 id="smart-launch"><strong>SMART on FHIR Launch</strong></h3>

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

<h2 id="4-python-fhir-client"><strong>4. Python FHIR Client</strong></h2>

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

<h2 id="5-react-fhir-app"><strong>5. Xây dựng ứng dụng Quản lý BN với React</strong></h2>

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

<h2 id="6-error-handling"><strong>6. Error Handling và Retry Patterns</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>HAPI FHIR Client (Java)</strong> — Generic Client cho flexibility, Fluent Client cho type-safety</p></li>
<li><p><strong>fhirclient.js</strong> — SMART on FHIR launch, browser + Node.js</p></li>
<li><p><strong>Python fhirclient</strong> — Pydantic models, dễ tích hợp data pipeline</p></li>
<li><p><strong>React + FHIR</strong> — SPA quản lý bệnh nhân kết nối trực tiếp FHIR Server</p></li>
<li><p><strong>Error handling</strong> — OperationOutcome parsing, retry với exponential backoff</p></li>
</ul>
