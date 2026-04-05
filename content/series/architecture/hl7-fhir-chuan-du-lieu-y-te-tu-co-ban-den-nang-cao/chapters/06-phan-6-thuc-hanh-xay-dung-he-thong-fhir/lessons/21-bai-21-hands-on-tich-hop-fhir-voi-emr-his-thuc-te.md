---
id: 019e0a10-a604-7001-d001-f1a7f8000604
title: 'Bài 21: Hands-on — Tích hợp FHIR với EMR/HIS thực tế'
slug: bai-21-hands-on-tich-hop-fhir-voi-emr-his-thuc-te
description: >-
  FHIR Facade pattern, data mapping từ legacy EMR/HIS, HL7 v2 to FHIR
  conversion, CDA to FHIR transformation, ETL pipeline cho dữ liệu y tế,
  integration patterns, middleware architecture, real-world challenges.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Thực hành - Xây dựng hệ thống FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5242" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5242)"/>

  <!-- Decorations -->
  <g>
    <circle cx="752" cy="206" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="904" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1056" cy="150" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="708" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="94" r="14" fill="#f87171" opacity="0.05"/>
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
    <polygon points="981.507041555162,125.5 981.507041555162,166.5 946,187 910.492958444838,166.5 910.492958444838,125.50000000000001 946,105" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ Kiến trúc — Bài 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 21: Hands-on — Tích hợp FHIR với</tspan>
      <tspan x="60" dy="42">EMR/HIS thực tế</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Thực hành - Xây dựng hệ thống FHIR</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-thach-thuc-tich-hop"><strong>1. Thách thức Tích hợp EMR/HIS</strong></h2>

<p>Hầu hết bệnh viện Việt Nam sử dụng hệ thống HIS/EMR nội bộ với cơ sở dữ liệu relational truyền thống. Tích hợp FHIR đòi hỏi xử lý nhiều vấn đề.</p>

<table>
<thead>
<tr><th>Thách thức</th><th>Mô tả</th><th>Giải pháp</th></tr>
</thead>
<tbody>
<tr><td>Schema khác biệt</td><td>HIS dùng bảng riêng, FHIR dùng resources</td><td>Data mapping layer</td></tr>
<tr><td>Dữ liệu không chuẩn</td><td>Tên, địa chỉ không theo format</td><td>Data cleansing + normalization</td></tr>
<tr><td>Mã nội bộ</td><td>HIS dùng mã riêng (ICD-10 VN, mã thuốc BV)</td><td>ConceptMap translation</td></tr>
<tr><td>Legacy protocols</td><td>HL7 v2, CDA, file XML/CSV</td><td>Converter/transformer</td></tr>
<tr><td>Performance</td><td>HIS phục vụ hàng ngàn user</td><td>Caching, async processing</td></tr>
<tr><td>Downtime</td><td>Không thể dừng HIS</td><td>Non-invasive integration</td></tr>
</tbody>
</table>

<h2 id="2-integration-patterns"><strong>2. Integration Patterns</strong></h2>

<h3 id="fhir-facade"><strong>Pattern 1: FHIR Facade</strong></h3>

<p>Đặt một lớp FHIR API phía trước HIS hiện tại, <strong>không thay đổi</strong> HIS. Facade đọc/ghi trực tiếp database HIS.</p>

<pre><code class="language-text">┌─────────────┐     ┌──────────────┐     ┌──────────┐
│ FHIR Client │────▶│ FHIR Facade  │────▶│  HIS DB  │
│ (App/Portal)│◀────│ (Middleware)  │◀────│(Oracle/  │
└─────────────┘     └──────────────┘     │ SQL Srv) │
                                          └──────────┘
</code></pre>

<pre><code class="language-java">@Component
public class HISPatientFacade implements IResourceProvider {
    
    @Autowired
    private HISPatientRepository hisRepo;
    
    @Autowired
    private PatientMapper mapper;
    
    @Override
    public Class&lt;Patient&gt; getResourceType() {
        return Patient.class;
    }
    
    @Read
    public Patient read(@IdParam IdType theId) {
        // Đọc từ HIS database
        HISBenhNhan bn = hisRepo.findByMaBN(theId.getIdPart());
        if (bn == null) {
            throw new ResourceNotFoundException(theId);
        }
        // Map sang FHIR Patient
        return mapper.toFhirPatient(bn);
    }
    
    @Search
    public List&lt;Patient&gt; searchByName(
            @RequiredParam(name = Patient.SP_NAME) StringParam name) {
        List&lt;HISBenhNhan&gt; results = hisRepo.findByTenContaining(
            name.getValue());
        return results.stream()
            .map(mapper::toFhirPatient)
            .collect(Collectors.toList());
    }
}
</code></pre>

<h3 id="data-mapper"><strong>Data Mapper: HIS → FHIR</strong></h3>

<pre><code class="language-java">@Component
public class PatientMapper {
    
    public Patient toFhirPatient(HISBenhNhan bn) {
        Patient patient = new Patient();
        
        // ID
        patient.setId(bn.getMaBenhNhan());
        
        // Identifier: Mã BN
        patient.addIdentifier()
            .setSystem("http://bv-abc.vn/fhir/sid/mabn")
            .setValue(bn.getMaBenhNhan());
        
        // Identifier: CCCD
        if (bn.getSoCCCD() != null) {
            patient.addIdentifier()
                .setSystem("http://fhir.vn/sid/cccd")
                .setValue(bn.getSoCCCD());
        }
        
        // Identifier: BHYT
        if (bn.getSoBHYT() != null) {
            patient.addIdentifier()
                .setSystem("http://fhir.vn/sid/bhyt")
                .setValue(bn.getSoBHYT());
        }
        
        // Họ tên
        HumanName name = patient.addName();
        name.setFamily(bn.getHo());
        name.addGiven(bn.getTen());
        name.setText(bn.getHoTen());
        
        // Giới tính: HIS dùng 0/1, FHIR dùng enum
        switch (bn.getGioiTinh()) {
            case 0: patient.setGender(AdministrativeGender.FEMALE); break;
            case 1: patient.setGender(AdministrativeGender.MALE); break;
            default: patient.setGender(AdministrativeGender.UNKNOWN);
        }
        
        // Ngày sinh
        patient.setBirthDate(bn.getNgaySinh());
        
        // Địa chỉ
        Address address = patient.addAddress();
        address.addLine(bn.getDiaChi());
        address.setDistrict(bn.getQuanHuyen());
        address.setCity(bn.getTinhThanh());
        
        // Số điện thoại
        if (bn.getSoDienThoai() != null) {
            patient.addTelecom()
                .setSystem(ContactPoint.ContactPointSystem.PHONE)
                .setValue(bn.getSoDienThoai());
        }
        
        return patient;
    }
    
    public HISBenhNhan toHISBenhNhan(Patient patient) {
        HISBenhNhan bn = new HISBenhNhan();
        
        // Map ngược từ FHIR → HIS
        HumanName name = patient.getNameFirstRep();
        bn.setHo(name.getFamily());
        bn.setTen(name.getGivenAsSingleString());
        bn.setHoTen(name.getText());
        
        // CCCD
        patient.getIdentifier().stream()
            .filter(i -> "http://fhir.vn/sid/cccd".equals(i.getSystem()))
            .findFirst()
            .ifPresent(i -> bn.setSoCCCD(i.getValue()));
        
        // Giới tính
        switch (patient.getGender()) {
            case MALE: bn.setGioiTinh(1); break;
            case FEMALE: bn.setGioiTinh(0); break;
            default: bn.setGioiTinh(-1);
        }
        
        bn.setNgaySinh(patient.getBirthDate());
        
        return bn;
    }
}
</code></pre>

<h3 id="sync-pattern"><strong>Pattern 2: Data Sync (ETL)</strong></h3>

<p>Đồng bộ dữ liệu từ HIS sang FHIR Server theo lịch (batch) hoặc real-time (CDC).</p>

<pre><code class="language-text">┌──────────┐     ┌───────────┐     ┌─────────────┐     ┌───────────┐
│  HIS DB  │────▶│  ETL/CDC  │────▶│ FHIR Server │────▶│ FHIR Apps │
│          │     │ Pipeline  │     │ (HAPI FHIR) │     │           │
└──────────┘     └───────────┘     └─────────────┘     └───────────┘
</code></pre>

<pre><code class="language-python"># ETL Pipeline: HIS PostgreSQL → FHIR Server
import psycopg2
import requests
from datetime import datetime

FHIR_BASE = "http://localhost:8080/fhir"

def sync_patients(last_sync: datetime):
    """Đồng bộ bệnh nhân mới/cập nhật từ HIS"""
    conn = psycopg2.connect(
        host="his-db", dbname="his", 
        user="readonly", password="***"
    )
    
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("""
        SELECT * FROM benh_nhan 
        WHERE ngay_cap_nhat > %s
        ORDER BY ngay_cap_nhat
    """, (last_sync,))
    
    for row in cur:
        patient = map_to_fhir_patient(row)
        
        # Upsert: PUT với ID
        resp = requests.put(
            f"{FHIR_BASE}/Patient/{row['ma_bn']}",
            json=patient,
            headers={"Content-Type": "application/fhir+json"}
        )
        
        if resp.status_code in (200, 201):
            print(f"Synced Patient/{row['ma_bn']}")
        else:
            print(f"Error: {resp.status_code} - {resp.text}")
    
    conn.close()

def map_to_fhir_patient(row):
    return {
        "resourceType": "Patient",
        "id": row["ma_bn"],
        "identifier": [
            {
                "system": "http://bv-abc.vn/fhir/sid/mabn",
                "value": row["ma_bn"]
            }
        ],
        "name": [{
            "family": row["ho"],
            "given": [row["ten"]],
            "text": row["ho_ten"]
        }],
        "gender": "male" if row["gioi_tinh"] == 1 else "female",
        "birthDate": row["ngay_sinh"].isoformat()
    }
</code></pre>

<h2 id="3-hl7-v2-to-fhir"><strong>3. HL7 v2 to FHIR Conversion</strong></h2>

<p>Nhiều hệ thống cũ giao tiếp qua HL7 v2 messages (ADT, ORM, ORU). FHIR cung cấp mapping chuyển đổi.</p>

<pre><code class="language-text">MSH|^~\&|HIS|BVDK|FHIR|GATEWAY|20250115103000||ADT^A01|MSG001|P|2.5
EVN|A01|20250115103000
PID|1||BN001^^^BVDK||Nguyen^Van A||19900515|M|||123 Nguyen Hue^^HCM^^700000^VN||0901234567
PV1|1|I|KHOA-NOI^P-301^G-01||||BS001^Tran^Thi B
</code></pre>

<pre><code class="language-java">// HL7 v2 → FHIR converter
public class V2ToFhirConverter {
    
    public Bundle convertADT_A01(Message v2Message) {
        ADT_A01 adt = (ADT_A01) v2Message;
        Bundle bundle = new Bundle();
        bundle.setType(Bundle.BundleType.TRANSACTION);
        
        // PID → Patient
        PID pid = adt.getPID();
        Patient patient = new Patient();
        patient.setId(pid.getPatientID().getIDNumber().getValue());
        
        HumanName name = patient.addName();
        name.setFamily(pid.getPatientName(0).getFamilyName()
            .getSurname().getValue());
        name.addGiven(pid.getPatientName(0).getGivenName().getValue());
        
        String gender = pid.getAdministrativeSex().getValue();
        patient.setGender("M".equals(gender) 
            ? AdministrativeGender.MALE 
            : AdministrativeGender.FEMALE);
        
        bundle.addEntry()
            .setResource(patient)
            .getRequest()
            .setMethod(Bundle.HTTPVerb.PUT)
            .setUrl("Patient/" + patient.getId());
        
        // PV1 → Encounter
        PV1 pv1 = adt.getPV1();
        Encounter encounter = new Encounter();
        encounter.setStatus(Encounter.EncounterStatus.INPROGRESS);
        encounter.setSubject(new Reference(
            "Patient/" + patient.getId()));
        
        // Location
        String ward = pv1.getAssignedPatientLocation()
            .getPointOfCare().getValue();
        encounter.addLocation()
            .setLocation(new Reference("Location/" + ward));
        
        bundle.addEntry()
            .setResource(encounter)
            .getRequest()
            .setMethod(Bundle.HTTPVerb.POST)
            .setUrl("Encounter");
        
        return bundle;
    }
}
</code></pre>

<h2 id="4-cda-to-fhir"><strong>4. CDA to FHIR Transformation</strong></h2>

<pre><code class="language-java">// CDA Document → FHIR Bundle
public Bundle convertCDAToFhir(ClinicalDocument cda) {
    Bundle bundle = new Bundle();
    bundle.setType(Bundle.BundleType.DOCUMENT);
    
    // CDA Header → Composition
    Composition composition = new Composition();
    composition.setStatus(Composition.CompositionStatus.FINAL);
    composition.setDate(cda.getEffectiveTime().getValue());
    composition.setTitle(cda.getTitle().getText());
    
    // CDA recordTarget → Patient
    RecordTarget rt = cda.getRecordTargets().get(0);
    Patient patient = mapCDAPatient(
        rt.getPatientRole());
    composition.setSubject(new Reference(
        "Patient/" + patient.getId()));
    
    // CDA Sections → Composition sections
    for (Section cdaSection : cda.getComponent()
            .getStructuredBody().getComponents()) {
        Composition.SectionComponent section = 
            composition.addSection();
        section.setTitle(cdaSection.getTitle().getText());
        section.getText().setDiv(
            cdaSection.getText().toXml());
        
        // Map CDA entries → FHIR resources
        for (Entry entry : cdaSection.getEntries()) {
            IBaseResource resource = mapCDAEntry(entry);
            bundle.addEntry().setResource(resource);
            section.addEntry(new Reference(resource));
        }
    }
    
    bundle.addEntry().setResource(composition);
    bundle.addEntry().setResource(patient);
    
    return bundle;
}
</code></pre>

<h2 id="5-conceptmap"><strong>5. Code Translation với ConceptMap</strong></h2>

<pre><code class="language-json">{
  "resourceType": "ConceptMap",
  "url": "http://bv-abc.vn/fhir/ConceptMap/his-gender-to-fhir",
  "name": "HISGenderToFHIR",
  "title": "HIS Gender Code → FHIR AdministrativeGender",
  "status": "active",
  "group": [
    {
      "source": "http://bv-abc.vn/his/gender",
      "target": "http://hl7.org/fhir/administrative-gender",
      "element": [
        {
          "code": "0",
          "display": "Nữ",
          "target": [
            {"code": "female", "relationship": "equivalent"}
          ]
        },
        {
          "code": "1",
          "display": "Nam",
          "target": [
            {"code": "male", "relationship": "equivalent"}
          ]
        },
        {
          "code": "2",
          "display": "Khác",
          "target": [
            {"code": "other", "relationship": "equivalent"}
          ]
        }
      ]
    }
  ]
}
</code></pre>

<pre><code class="language-bash"># Dùng $translate operation
curl 'http://localhost:8080/fhir/ConceptMap/$translate?\
system=http://bv-abc.vn/his/gender&\
code=1&\
target=http://hl7.org/fhir/administrative-gender'
</code></pre>

<h2 id="6-middleware-architecture"><strong>6. Middleware Architecture</strong></h2>

<pre><code class="language-text">┌──────────┐  ┌──────────┐  ┌──────────┐
│  HIS 1   │  │  HIS 2   │  │  LIS     │
│ (Oracle) │  │(SQL Srv) │  │ (HL7 v2) │
└────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │             │
     ▼             ▼             ▼
┌────────────────────────────────────────┐
│         Integration Engine             │
│  ┌──────────┐ ┌──────────┐ ┌────────┐ │
│  │ Adapters  │ │ Mappers  │ │ Router │ │
│  │ (DB/v2)   │ │ (→FHIR)  │ │        │ │
│  └──────────┘ └──────────┘ └────────┘ │
└────────────────┬───────────────────────┘
                 │
                 ▼
         ┌──────────────┐
         │ FHIR Server  │
         │ (HAPI FHIR)  │
         └──────┬───────┘
                │
     ┌──────────┼──────────┐
     ▼          ▼          ▼
┌────────┐ ┌────────┐ ┌────────┐
│Portal  │ │Mobile  │ │ HIE    │
│BN      │ │App     │ │Gateway │
└────────┘ └────────┘ └────────┘
</code></pre>

<h2 id="7-best-practices"><strong>7. Best Practices Tích hợp</strong></h2>

<ol>
<li><strong>Non-invasive</strong> — Không thay đổi HIS hiện tại, dùng Facade hoặc ETL</li>
<li><strong>Idempotent</strong> — PUT với ID cố định, sync lại không bị trùng</li>
<li><strong>Incremental sync</strong> — Chỉ đồng bộ data thay đổi (timestamp-based hoặc CDC)</li>
<li><strong>Error handling</strong> — Dead letter queue cho records thất bại</li>
<li><strong>Monitoring</strong> — Track sync lag, error rate, throughput</li>
<li><strong>Data quality</strong> — Validate trước khi đẩy vào FHIR Server</li>
<li><strong>ConceptMap</strong> — Dùng cho code translation, không hardcode mapping</li>
<li><strong>Rollback</strong> — Giữ bản gốc HIS, FHIR là secondary</li>
</ol>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>FHIR Facade</strong> — Lớp API FHIR phía trước HIS, map realtime, không sửa HIS</p></li>
<li><p><strong>Data Sync (ETL)</strong> — Đồng bộ batch/CDC từ HIS DB → FHIR Server</p></li>
<li><p><strong>HL7 v2 → FHIR</strong> — Chuyển đổi ADT/ORM/ORU messages sang FHIR resources</p></li>
<li><p><strong>CDA → FHIR</strong> — Transform CDA documents sang FHIR Bundle</p></li>
<li><p><strong>ConceptMap</strong> — Translate mã nội bộ HIS sang mã chuẩn (LOINC, SNOMED, ICD-10)</p></li>
<li><p><strong>Middleware</strong> — Integration engine xử lý nhiều nguồn dữ liệu</p></li>
</ul>
