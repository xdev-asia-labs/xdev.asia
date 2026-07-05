---
id: ddae5cd6-ec8f-4c2b-b9b0-a17c88662692
title: 'hapi-fhir-structures-r5'
slug: hapi-fhir-structures-r5
description: 'hapifhirstructuresr5 là thư viện Java cung cấp các lớp mô hình (model classes) cho phiên bản FHIR R5 (phiên bản 5.0.0), phát hành chính thức vào đầu năm 2023. Thư viện này triển khai đầy đủ các resource, datatype và các…'
duration_minutes: 25
is_free: true
video_url: null
sort_order: 8
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
`hapi-fhir-structures-r5` là thư viện Java cung cấp các lớp mô hình (model classes) cho phiên bản FHIR R5 (phiên bản 5.0.0), phát hành chính thức vào đầu năm 2023. Thư viện này triển khai đầy đủ các resource, datatype và các thành phần khác được định nghĩa trong đặc tả FHIR R5, cho phép nhà phát triển làm việc với FHIR R5 một cách tự nhiên trong môi trường Java.

FHIR R5 là phiên bản hiện đại nhất của tiêu chuẩn FHIR, mang đến nhiều cải tiến và bổ sung quan trọng so với các phiên bản trước đó. Thư viện `hapi-fhir-structures-r5` phản ánh đầy đủ các thay đổi này và cung cấp các API để thao tác với các cấu trúc dữ liệu FHIR R5.

### Đặc điểm chính

#### Package Structure

Các lớp model trong `hapi-fhir-structures-r5` được tổ chức trong package `org.hl7.fhir.r5.model`. Cấu trúc package này tuân theo cấu trúc được định nghĩa bởi HL7, giúp nhất quán với các triển khai tham chiếu chính thức.

#### Các loại lớp cơ bản

Thư viện bao gồm các loại lớp chính sau:

1. **Resource Classes**: Đại diện cho các FHIR resources (ví dụ: Patient, Observation, Encounter)
2. **Datatype Classes**: Đại diện cho các FHIR datatypes (ví dụ: HumanName, Address, Coding)
3. **Enumeration Classes**: Đại diện cho các giá trị enum được định nghĩa trong FHIR
4. **Base Classes**: Các lớp cơ sở cung cấp chức năng chung cho các resource và datatype

#### Resources mới trong R5

FHIR R5 giới thiệu nhiều resource mới không có trong R4, và tất cả đều được triển khai đầy đủ trong `hapi-fhir-structures-r5`:

* `InventoryReport`: Quản lý báo cáo hàng tồn kho
* `Requirements`: Xác định các yêu cầu cho hệ thống, phần mềm
* `TestPlan`: Quản lý kế hoạch kiểm thử
* `TestScript`: Quản lý kịch bản kiểm thử
* `SubscriptionStatus`: Quản lý trạng thái subscription
* `SubscriptionTopic`: Định nghĩa topic cho subscription
* `CitationStatus`: Trạng thái của citation
* `Evidence`: Bằng chứng khoa học
* `EvidenceReport`: Báo cáo bằng chứng
* `ChargeItemDefinition`: Định nghĩa các mục tính phí

#### Các thay đổi và cải tiến quan trọng

FHIR R5 có nhiều thay đổi đáng kể so với R4, và `hapi-fhir-structures-r5` phản ánh đầy đủ các thay đổi này:

1. **Cải tiến vòng đời của resources**: Trạng thái và quản lý vòng đời resources được cải thiện
2. **Mở rộng các datatype**: Thêm các field và tính năng mới cho các datatype
3. **Cải thiện terminology**: Bổ sung và cải tiến các cơ chế terminologies
4. **Cập nhật search parameters**: Cải tiến và thêm các search parameters mới
5. **Extensions được chuẩn hóa**: Nhiều extensions phổ biến đã trở thành phần chính thức của model

### Cài đặt và sử dụng

#### Thêm vào Maven Project

```xml
<!-- Thư viện cơ sở - luôn cần thiết -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-base</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- Thư viện structures cho FHIR R5 -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-structures-r5</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### Thêm vào Gradle Project

```groovy
implementation 'ca.uhn.hapi.fhir:hapi-fhir-base:6.4.0'
implementation 'ca.uhn.hapi.fhir:hapi-fhir-structures-r5:6.4.0'
```

### Ví dụ sử dụng hapi-fhir-structures-r5

#### Ví dụ 1: Tạo và serialization Patient Resource

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

import java.util.Date;

public class PatientExample {
    public static void main(String[] args) {
        // Khởi tạo FhirContext cho FHIR R5
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo Patient resource
        Patient patient = new Patient();
        
        // Thêm identifier (mã bệnh nhân)
        Identifier identifier = patient.addIdentifier();
        identifier.setSystem("http://hospital.example.org/patients");
        identifier.setValue("123456");
        
        // Thêm tên bệnh nhân
        HumanName name = patient.addName();
        name.setFamily("Nguyễn");
        name.addGiven("Văn");
        name.addGiven("A");
        name.setUse(HumanName.NameUse.OFFICIAL);
        
        // Thêm ngày sinh
        patient.setBirthDate(new Date());
        
        // Thêm giới tính
        patient.setGender(Enumerations.AdministrativeGender.MALE);
        
        // Thêm địa chỉ
        Address address = patient.addAddress();
        address.addLine("123 Đường Lê Lợi");
        address.setCity("Hà Nội");
        address.setCountry("VN");
        address.setUse(Address.AddressUse.HOME);
        
        // Thêm thông tin liên hệ
        ContactPoint phone = patient.addTelecom();
        phone.setSystem(ContactPoint.ContactPointSystem.PHONE);
        phone.setValue("0123456789");
        phone.setUse(ContactPoint.ContactPointUse.MOBILE);
        
        // Thiết lập trạng thái active
        patient.setActive(true);
        
        // Thêm liên hệ khẩn cấp (đặc trưng R5)
        Patient.ContactComponent contact = patient.addContact();
        contact.addRelationship().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v2-0131")
            .setCode("C")
            .setDisplay("Emergency Contact");
        
        HumanName contactName = contact.setName(new HumanName());
        contactName.setFamily("Trần");
        contactName.addGiven("Thị B");
        
        ContactPoint contactPhone = contact.addTelecom();
        contactPhone.setSystem(ContactPoint.ContactPointSystem.PHONE);
        contactPhone.setValue("0987654321");
        
        // Thêm quốc tịch (tính năng mới trong R5)
        Patient.CitizenshipComponent citizenship = patient.addCitizenship();
        CodeableConcept citizenshipCode = citizenship.setCode(new CodeableConcept());
        citizenshipCode.addCoding()
            .setSystem("urn:iso:std:iso:3166")
            .setCode("VN")
            .setDisplay("Vietnam");
        
        // Chuyển đổi thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(patient);
        
        System.out.println(json);
    }
}
```

#### Ví dụ 2: Tạo Observation Resource

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

import java.util.Date;

public class ObservationExample {
    public static void main(String[] args) {
        // Khởi tạo FhirContext cho FHIR R5
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo Observation resource
        Observation observation = new Observation();
        
        // Thiết lập identifier
        observation.addIdentifier()
            .setSystem("http://lab.example.org/observations")
            .setValue("OBS12345");
        
        // Thiết lập status
        observation.setStatus(Observation.ObservationStatus.FINAL);
        
        // Thiết lập category
        CodeableConcept category = observation.addCategory();
        category.addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/observation-category")
            .setCode("vital-signs")
            .setDisplay("Vital Signs");
        
        // Thiết lập code (loại observation)
        CodeableConcept code = observation.getCode();
        code.addCoding()
            .setSystem("http://loinc.org")
            .setCode("8867-4")
            .setDisplay("Heart rate");
        code.setText("Nhịp tim");
        
        // Thiết lập subject (bệnh nhân)
        observation.setSubject(new Reference("Patient/123456"));
        
        // Thiết lập thời gian thực hiện
        observation.setEffective(new DateTimeType(new Date()));
        observation.setIssued(new Date());
        
        // Thiết lập performer (người thực hiện)
        observation.addPerformer(new Reference("Practitioner/987654"));
        
        // Thiết lập kết quả (giá trị)
        Quantity value = new Quantity();
        value.setValue(80);
        value.setUnit("beats/minute");
        value.setSystem("http://unitsofmeasure.org");
        value.setCode("/min");
        observation.setValue(value);
        
        // Thiết lập range tham chiếu
        Observation.ObservationReferenceRangeComponent range = observation.addReferenceRange();
        range.setLow(new Quantity().setValue(60).setUnit("beats/minute"));
        range.setHigh(new Quantity().setValue(100).setUnit("beats/minute"));
        range.setText("60-100 bpm");
        
        // Thêm thông tin về phương pháp
        CodeableConcept method = observation.setMethod(new CodeableConcept());
        method.addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v2-0936")
            .setCode("AUSCULTATE")
            .setDisplay("Auscultation");
        
        // Thêm thông tin về thiết bị đo
        observation.setDevice(new Reference("Device/sphygmomanometer"));
        
        // Thêm note
        Annotation note = observation.addNote();
        note.setText("Bệnh nhân ổn định, không có triệu chứng bất thường");
        note.setTime(new Date());
        note.setAuthor(new Reference("Practitioner/987654"));
        
        // Thêm components (tính năng nâng cao trong R5)
        Observation.ObservationComponentComponent systolicComponent = observation.addComponent();
        systolicComponent.getCode().addCoding()
            .setSystem("http://loinc.org")
            .setCode("8480-6")
            .setDisplay("Systolic blood pressure");
        systolicComponent.setValue(new Quantity().setValue(120).setUnit("mmHg"));
        
        Observation.ObservationComponentComponent diastolicComponent = observation.addComponent();
        diastolicComponent.getCode().addCoding()
            .setSystem("http://loinc.org")
            .setCode("8462-4")
            .setDisplay("Diastolic blood pressure");
        diastolicComponent.setValue(new Quantity().setValue(80).setUnit("mmHg"));
        
        // Chuyển đổi thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(observation);
        
        System.out.println(json);
    }
}
```

#### Ví dụ 3: Tạo Encounter Resource

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

import java.text.SimpleDateFormat;
import java.util.Date;

public class EncounterExample {
    public static void main(String[] args) throws Exception {
        // Khởi tạo FhirContext cho FHIR R5
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo Encounter resource
        Encounter encounter = new Encounter();
        
        // Thiết lập identifier
        encounter.addIdentifier()
            .setSystem("http://hospital.example.org/encounters")
            .setValue("ENC12345");
        
        // Thiết lập status
        encounter.setStatus(Encounter.EncounterStatus.INPROGRESS);
        
        // Thiết lập class
        encounter.setClass_(new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-ActCode")
            .setCode("AMB")
            .setDisplay("ambulatory"));
        
        // Thiết lập type
        CodeableConcept type = encounter.addType();
        type.addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/encounter-type")
            .setCode("CHECKUP")
            .setDisplay("Routine check-up");
        
        // Thiết lập subject (bệnh nhân)
        encounter.setSubject(new Reference("Patient/123456"));
        
        // Thiết lập thời gian
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        Date startDate = dateFormat.parse("2023-05-15T09:00:00");
        Period period = new Period();
        period.setStart(startDate);
        period.setEnd(new Date(startDate.getTime() + 3600000)); // 1 giờ sau
        encounter.setPeriod(period);
        
        // Thiết lập service provider (cơ sở y tế)
        encounter.setServiceProvider(new Reference("Organization/hospital123"));
        
        // Thiết lập location
        Encounter.EncounterLocationComponent location = encounter.addLocation();
        location.setLocation(new Reference("Location/clinic-outpatient"));
        location.setStatus(Encounter.EncounterLocationStatus.ACTIVE);
        
        // Thiết lập participant (người tham gia)
        Encounter.EncounterParticipantComponent doctor = encounter.addParticipant();
        doctor.addType().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-ParticipationType")
            .setCode("PPRF")
            .setDisplay("primary performer");
        doctor.setIndividual(new Reference("Practitioner/doctor123"));
        
        // Thiết lập reason (lý do khám)
        CodeableConcept reason = encounter.addReasonCode();
        reason.addCoding()
            .setSystem("http://snomed.info/sct")
            .setCode("162673000")
            .setDisplay("General examination of patient");
        reason.setText("Khám sức khỏe định kỳ");
        
        // Thiết lập diagnosis
        Encounter.DiagnosisComponent diagnosis = encounter.addDiagnosis();
        diagnosis.setCondition(new Reference("Condition/diabetes123"));
        diagnosis.setUse(new CodeableConcept().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/diagnosis-role")
            .setCode("CC")
            .setDisplay("Chief complaint"));
        diagnosis.setRank(1);
        
        // Thiết lập hospitalization (thông tin nhập viện) - tính năng đặc biệt của R5
        Encounter.EncounterHospitalizationComponent hospitalization = encounter.getHospitalization();
        hospitalization.setAdmitSource(new CodeableConcept().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/admit-source")
            .setCode("gp")
            .setDisplay("General Practitioner referral"));
        
        // Thiết lập appointment
        encounter.setAppointment(new Reference("Appointment/appt123"));
        
        // Chuyển đổi thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(encounter);
        
        System.out.println(json);
    }
}
```

#### Ví dụ 4: Sử dụng Extension

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

public class ExtensionExample {
    public static void main(String[] args) {
        // Khởi tạo FhirContext cho FHIR R5
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo Patient resource
        Patient patient = new Patient();
        patient.addName().setFamily("Nguyễn").addGiven("Văn A");
        
        // Thêm extension đơn giản - nhóm máu
        Extension bloodTypeExtension = new Extension();
        bloodTypeExtension.setUrl("http://example.org/fhir/StructureDefinition/blood-type");
        
        CodeableConcept bloodType = new CodeableConcept();
        bloodType.addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-ObservationValue")
            .setCode("BLD-A")
            .setDisplay("Blood group A");
        
        bloodTypeExtension.setValue(bloodType);
        patient.addExtension(bloodTypeExtension);
        
        // Thêm extension với giá trị đơn giản
        Extension heightExtension = new Extension();
        heightExtension.setUrl("http://example.org/fhir/StructureDefinition/height");
        heightExtension.setValue(new Quantity().setValue(170).setUnit("cm"));
        patient.addExtension(heightExtension);
        
        // Thêm extension phức tạp - thông tin sinh trắc học
        Extension biometricsExtension = new Extension();
        biometricsExtension.setUrl("http://example.org/fhir/StructureDefinition/biometrics");
        
        // Thông tin vân tay
        Extension fingerprintExtension = new Extension();
        fingerprintExtension.setUrl("fingerprint");
        fingerprintExtension.setValue(new Attachment()
            .setContentType("image/png")
            .setUrl("http://example.org/fingerprints/patient123.png"));
        biometricsExtension.addExtension(fingerprintExtension);
        
        // Thông tin mống mắt
        Extension irisExtension = new Extension();
        irisExtension.setUrl("iris");
        irisExtension.setValue(new BooleanType(true));
        biometricsExtension.addExtension(irisExtension);
        
        patient.addExtension(biometricsExtension);
        
        // Thêm extension trực tiếp vào field cụ thể (modifierExtension)
        HumanName name = patient.getNameFirstRep();
        Extension nameValidityExtension = new Extension();
        nameValidityExtension.setUrl("http://example.org/fhir/StructureDefinition/name-validity");
        nameValidityExtension.setValue(new DateTimeType("2023-01-01"));
        name.addExtension(nameValidityExtension);
        
        // Thêm modifier extension
        Extension vipExtension = new Extension();
        vipExtension.setUrl("http://example.org/fhir/StructureDefinition/patient-vip");
        vipExtension.setValue(new BooleanType(true));
        patient.addModifierExtension(vipExtension);
        
        // Chuyển đổi thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(patient);
        
        System.out.println(json);
    }
}
```

#### Ví dụ 5: Tạo MedicationRequest với các tính năng đặc biệt của R5

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

import java.math.BigDecimal;
import java.util.Date;

public class MedicationRequestExample {
    public static void main(String[] args) {
        // Khởi tạo FhirContext cho FHIR R5
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo MedicationRequest resource
        MedicationRequest medicationRequest = new MedicationRequest();
        
        // Thiết lập identifier
        medicationRequest.addIdentifier()
            .setSystem("http://hospital.example.org/prescriptions")
            .setValue("PRE12345");
        
        // Thiết lập status
        medicationRequest.setStatus(MedicationRequest.MedicationRequestStatus.ACTIVE);
        
        // Thiết lập intent
        medicationRequest.setIntent(MedicationRequest.MedicationRequestIntent.ORDER);
        
        // Thiết lập thuốc
        CodeableConcept medication = new CodeableConcept();
        medication.addCoding()
            .setSystem("http://www.nlm.nih.gov/research/umls/rxnorm")
            .setCode("211307")
            .setDisplay("Paracetamol 500mg tablet");
        medication.setText("Paracetamol 500mg");
        medicationRequest.setMedication(medication);
        
        // Thiết lập bệnh nhân
        medicationRequest.setSubject(new Reference("Patient/123456"));
        
        // Thiết lập ngày kê đơn
        medicationRequest.setAuthoredOn(new Date());
        
        // Thiết lập bác sĩ kê đơn
        medicationRequest.setRequester(new Reference("Practitioner/doctor123"));
        
        // Thiết lập encounter
        medicationRequest.setEncounter(new Reference("Encounter/enc12345"));
        
        // Thiết lập lý do kê đơn
        CodeableConcept reasonCode = medicationRequest.addReasonCode();
        reasonCode.addCoding()
            .setSystem("http://snomed.info/sct")
            .setCode("386661006")
            .setDisplay("Fever");
        reasonCode.setText("Sốt");
        
        // Thiết lập hướng dẫn dùng thuốc
        Dosage dosage = medicationRequest.addDosageInstruction();
        
        // Cách sử dụng
        dosage.setText("Uống 1 viên mỗi 6 giờ khi cần thiết để giảm đau hoặc sốt. Không vượt quá 4 viên trong 24 giờ.");
        
        // Liều lượng
        Dosage.DosageDoseAndRateComponent doseAndRate = dosage.addDoseAndRate();
        doseAndRate.setType(new CodeableConcept().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/dose-rate-type")
            .setCode("ordered")
            .setDisplay("Ordered"));
        
        Quantity dose = new Quantity();
        dose.setValue(1);
        dose.setUnit("tablet");
        dose.setSystem("http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm");
        dose.setCode("TAB");
        doseAndRate.setDose(dose);
        
        // Tần suất sử dụng
        Timing timing = new Timing();
        timing.setRepeat(new Timing.TimingRepeatComponent()
            .setFrequency(1)
            .setPeriod(6)
            .setPeriodUnit(Timing.UnitsOfTime.H)
            .setWhen(Timing.EventTiming.HS));
        dosage.setTiming(timing);
        
        // Đường dùng
        dosage.setRoute(new CodeableConcept().addCoding()
            .setSystem("http://snomed.info/sct")
            .setCode("26643006")
            .setDisplay("Oral route"));
        
        // Liều tối đa
        Dosage.DosageDoseAndRateComponent maxDosePerDay = dosage.addDoseAndRate();
        maxDosePerDay.setType(new CodeableConcept().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/dose-rate-type")
            .setCode("maximum")
            .setDisplay("Maximum"));
        
        Quantity maxDose = new Quantity();
        maxDose.setValue(4);
        maxDose.setUnit("tablet");
        maxDose.setSystem("http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm");
        maxDose.setCode("TAB");
        maxDosePerDay.setDose(maxDose);
        
        // Thiết lập thông tin cấp phát (tính năng mới trong R5)
        MedicationRequest.MedicationRequestDispenseRequestComponent dispenseRequest = medicationRequest.getDispenseRequest();
        
        // Số lượng
        Quantity quantity = new Quantity();
        quantity.setValue(20);
        quantity.setUnit("tablet");
        quantity.setSystem("http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm");
        quantity.setCode("TAB");
        dispenseRequest.setQuantity(quantity);
        
        // Thời gian cấp thuốc
        Period dispenseInterval = new Period();
        dispenseInterval.setStart(new Date());
        // Thêm 10 ngày
        dispenseInterval.setEnd(new Date(System.currentTimeMillis() + 10*24*60*60*1000L));
        dispenseRequest.setValidityPeriod(dispenseInterval);
        
        // Số lần tái cấp
        dispenseRequest.setNumberOfRepeatsAllowed(2);
        
        // Thiết lập priority (tính năng đặc biệt của R5)
        medicationRequest.setPriority(MedicationRequest.MedicationRequestPriority.ROUTINE);
        
        // Thêm category (tính năng đặc biệt của R5)
        medicationRequest.addCategory().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/medicationrequest-category")
            .setCode("outpatient")
            .setDisplay("Outpatient");
        
        // Thêm note
        medicationRequest.addNote()
            .setText("Bệnh nhân có tiền sử dị ứng với aspirin")
            .setTime(new Date())
            .setAuthor(new Reference("Practitioner/doctor123"));
        
        // Substitution - cho phép thay thế thuốc generic (tính năng đặc biệt R5)
        MedicationRequest.MedicationRequestSubstitutionComponent substitution = medicationRequest.getSubstitution();
        substitution.setAllowed(new BooleanType(true));
        substitution.setReason(new CodeableConcept().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-ActReason")
            .setCode("FP")
            .setDisplay("formulary policy"));
        
        // Course of Therapy Type (tính năng đặc biệt R5)
        medicationRequest.setCourseOfTherapyType(new CodeableConcept().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy")
            .setCode("acute")
            .setDisplay("Short term"));
        
        // Chuyển đổi thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(medicationRequest);
        
        System.out.println(json);
    }
}
```

### Đặc điểm nâng cao của FHIR R5 trong hapi-fhir-structures-r5

#### 1. Resource Lifecycle Management

FHIR R5 đã cải thiện đáng kể việc quản lý vòng đời của resource thông qua các trạng thái và các tính năng mới. Trong `hapi-fhir-structures-r5`, điều này được thể hiện qua:

* Status histories
* Version tracking
* Improved status enumerations
* Lifecycle events

#### 2. Enhanced Extensions

FHIR R5 đã chuẩn hóa nhiều extensions phổ biến thành các field chính thức trong resource, và `hapi-fhir-structures-r5` phản ánh đầy đủ các thay đổi này:

* Extensions để biểu thị ethnicity và race
* Extensions về citizenship
* Extensions về gender identity

#### 3. Canonical References

R5 giới thiệu khái niệm canonical references, và `hapi-fhir-structures-r5` triển khai đầy đủ tính năng này:

```java
// Sử dụng canonical reference trong R5
CanonicalType canonicalRef = new CanonicalType("http://example.org/fhir/StructureDefinition/my-profile|1.0.0");
resource.getType().addProfile(canonicalRef);
```

Canonical references cho phép tham chiếu chính xác đến các artifact có URL và phiên bản cụ thể.

#### 4. Improved Search Parameters

FHIR R5 đã cải thiện và mở rộng các search parameters, và `hapi-fhir-structures-r5` đã cập nhật các model class để phản ánh những thay đổi này:

```java
// Sử dụng enhanced search parameters trong Resource class
SearchParameter searchParam = new SearchParameter();
searchParam.setName("patient-name");
searchParam.setDescription("Search by patient name");
searchParam.setCode("name");
searchParam.setType(Enumerations.SearchParamType.STRING);
searchParam.setExpression("Patient.name");
```

#### 5. Enhanced Terminology Support

R5 có hỗ trợ terminology mạnh mẽ hơn, và `hapi-fhir-structures-r5` bao gồm:

* Cải tiến trong CodeSystem và ValueSet
* Concept maps và translations
* Subsumption checking (kiểm tra quan hệ phân cấp)

#### 6. Subscription Resources

FHIR R5 giới thiệu các resources mới cho subscription framework, và tất cả đều có trong `hapi-fhir-structures-r5`:

```java
// Tạo SubscriptionTopic resource
SubscriptionTopic topic = new SubscriptionTopic();
topic.setUrl("http://example.org/fhir/SubscriptionTopic/patient-admission");
topic.setTitle("Patient Admission Notifications");
topic.setStatus(Enumerations.PublicationStatus.ACTIVE);

// Định nghĩa trigger
SubscriptionTopic.SubscriptionTopicTriggerComponent trigger = topic.addTrigger();
trigger.setType(SubscriptionTopic.SubscriptionTriggerType.RESOURCEUPDATE);
trigger.setResource("Encounter");
trigger.setContextFilterElement(new FHIRPathType("status = 'arrived' or status = 'triaged'"));

// Tạo Subscription sử dụng topic này
Subscription subscription = new Subscription();
subscription.setTopic("http://example.org/fhir/SubscriptionTopic/patient-admission");
subscription.setReason("Notify on patient admissions");
subscription.setStatus(Subscription.SubscriptionStatus.ACTIVE);

// Cấu hình endpoint
Subscription.SubscriptionChannelComponent channel = subscription.getChannel();
channel.setType(Subscription.SubscriptionChannelType.WEBSOCKET);
channel.setEndpoint("wss://example.org/fhir/subscription");
```

### Cấu trúc package của hapi-fhir-structures-r5

Thư viện `hapi-fhir-structures-r5` có cấu trúc package như sau:

1. **org.hl7.fhir.r5.model**: Package chính chứa tất cả các model classes
   * **Patient, Observation, Encounter, etc.**: Các resource classes
   * **HumanName, Address, CodeableConcept, etc.**: Các datatype classes
   * **Enumerations.java**: Chứa các enumerations
2. **org.hl7.fhir.r5.utils**: Chứa các utility classes cho model R5
   * **FhirPathEngine**: Triển khai FHIRPath cho R5
   * **ValidationEngine**: Engine validation cho R5
3. **org.hl7.fhir.r5.formats**: Chứa các formatter và parser cấp thấp
   * **XmlParser**: Parser XML cấp thấp
   * **JsonParser**: Parser JSON cấp thấp
4. **org.hl7.fhir.r5.terminologies**: Chứa các utility cho terminology
   * **ValueSetExpansionEngine**: Engine mở rộng ValueSet
   * **CodeSystemEngine**: Engine làm việc với CodeSystem

### Tích hợp với Spring Boot

Khi sử dụng `hapi-fhir-structures-r5` trong dự án Spring Boot, ta có thể tích hợp như sau:

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.Patient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FhirConfig {
    
    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IParser jsonParser(FhirContext fhirContext) {
        return fhirContext.newJsonParser().setPrettyPrint(true);
    }
    
    @Bean
    public IParser xmlParser(FhirContext fhirContext) {
        return fhirContext.newXmlParser().setPrettyPrint(true);
    }
}
```

Và sau đó sử dụng trong các service:

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    
    private final FhirContext fhirContext;
    private final IParser jsonParser;
    
    @Autowired
    public PatientService(FhirContext fhirContext, IParser jsonParser) {
        this.fhirContext = fhirContext;
        this.jsonParser = jsonParser;
    }
    
    public Patient createPatient(String familyName, String givenName) {
        Patient patient = new Patient();
        patient.addName().setFamily(familyName).addGiven(givenName);
        return patient;
    }
    
    public String serializePatient(Patient patient) {
        return jsonParser.encodeResourceToString(patient);
    }
    
    public Patient parsePatient(String json) {
        return jsonParser.parseResource(Patient.class, json);
    }
}
```

### Làm việc với Bundle và Transaction

Trong FHIR R5, Bundle được sử dụng để nhóm các resource lại với nhau cho các mục đích khác nhau (transaction, message, document, etc.). Dưới đây là ví dụ về việc tạo và xử lý Bundle transaction với `hapi-fhir-structures-r5`:

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

import java.util.Date;

public class BundleTransactionExample {
    public static void main(String[] args) {
        // Khởi tạo context
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo Bundle kiểu transaction
        Bundle bundle = new Bundle();
        bundle.setType(Bundle.BundleType.TRANSACTION);
        bundle.setTimestamp(new Date());
        
        // 1. Tạo Patient resource
        Patient patient = new Patient();
        patient.addIdentifier()
            .setSystem("http://hospital.example.org/patients")
            .setValue("12345");
        patient.addName()
            .setFamily("Nguyễn")
            .addGiven("Văn")
            .addGiven("A");
        
        // Thêm Patient vào bundle với HTTP POST operation
        Bundle.BundleEntryComponent patientEntry = bundle.addEntry();
        patientEntry.setResource(patient);
        patientEntry.getRequest()
            .setMethod(Bundle.HTTPVerb.POST)
            .setUrl("Patient");
        
        // 2. Tạo Encounter resource
        Encounter encounter = new Encounter();
        encounter.setStatus(Encounter.EncounterStatus.INPROGRESS);
        encounter.setClass_(new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-ActCode")
            .setCode("AMB")
            .setDisplay("ambulatory"));
            
        // Tham chiếu đến Patient đã tạo trước đó
        // Sử dụng conditional reference
        encounter.setSubject(new Reference("Patient?identifier=http://hospital.example.org/patients|12345"));
        
        // Thêm Encounter vào bundle với HTTP POST operation
        Bundle.BundleEntryComponent encounterEntry = bundle.addEntry();
        encounterEntry.setResource(encounter);
        encounterEntry.getRequest()
            .setMethod(Bundle.HTTPVerb.POST)
            .setUrl("Encounter");
        
        // 3. Tạo Observation resource
        Observation observation = new Observation();
        observation.setStatus(Observation.ObservationStatus.FINAL);
        observation.addCategory().addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/observation-category")
            .setCode("vital-signs")
            .setDisplay("Vital Signs");
        observation.getCode().addCoding()
            .setSystem("http://loinc.org")
            .setCode("8867-4")
            .setDisplay("Heart rate");
        
        // Tham chiếu đến Patient
        observation.setSubject(new Reference("Patient?identifier=http://hospital.example.org/patients|12345"));
        
        // Tham chiếu đến Encounter
        observation.setEncounter(new Reference("Encounter/urn:uuid:" + encounterEntry.getResource().getId()));
        
        // Thiết lập giá trị
        Quantity heartRate = new Quantity()
            .setValue(80)
            .setUnit("beats/minute")
            .setSystem("http://unitsofmeasure.org")
            .setCode("/min");
        observation.setValue(heartRate);
        
        // Thêm Observation vào bundle với HTTP POST operation
        Bundle.BundleEntryComponent observationEntry = bundle.addEntry();
        observationEntry.setResource(observation);
        observationEntry.getRequest()
            .setMethod(Bundle.HTTPVerb.POST)
            .setUrl("Observation");
        
        // Chuyển đổi bundle thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(bundle);
        
        System.out.println("Bundle Transaction JSON:");
        System.out.println(json);
    }
}
```

### Sử dụng FHIRPath với hapi-fhir-structures-r5

FHIR R5 cải thiện đáng kể sự hỗ trợ cho FHIRPath, và `hapi-fhir-structures-r5` cung cấp API để làm việc với FHIRPath:

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.fhirpath.IFhirPath;
import org.hl7.fhir.r5.model.*;

import java.util.List;

public class FhirPathExample {
    public static void main(String[] args) {
        // Khởi tạo context
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo FHIRPath engine
        IFhirPath fhirPath = ctx.newFhirPath();
        
        // Tạo Patient với nhiều tên và địa chỉ
        Patient patient = new Patient();
        
        // Tên chính thức
        patient.addName()
            .setUse(HumanName.NameUse.OFFICIAL)
            .setFamily("Nguyễn")
            .addGiven("Văn")
            .addGiven("A");
        
        // Biệt danh
        patient.addName()
            .setUse(HumanName.NameUse.NICKNAME)
            .addGiven("Tony");
        
        // Địa chỉ
        patient.addAddress()
            .setUse(Address.AddressUse.HOME)
            .addLine("123 Đường Lê Lợi")
            .setCity("Hà Nội")
            .setCountry("VN");
        
        patient.addAddress()
            .setUse(Address.AddressUse.WORK)
            .addLine("456 Đường Nguyễn Huệ")
            .setCity("Hồ Chí Minh")
            .setCountry("VN");
        
        // Sử dụng FHIRPath để truy vấn
        
        // 1. Lấy tất cả tên họ
        List<StringType> familyNames = fhirPath.evaluate(patient, "name.family", StringType.class);
        System.out.println("Family names:");
        for (StringType name : familyNames) {
            System.out.println(" - " + name.getValue());
        }
        
        // 2. Lấy tất cả tên đầu tiên
        List<StringType> givenNames = fhirPath.evaluate(patient, "name.given", StringType.class);
        System.out.println("\nGiven names:");
        for (StringType name : givenNames) {
            System.out.println(" - " + name.getValue());
        }
        
        // 3. Lấy biệt danh
        List<HumanName> nicknames = fhirPath.evaluate(patient, "name.where(use = 'nickname')", HumanName.class);
        System.out.println("\nNicknames:");
        for (HumanName name : nicknames) {
            System.out.println(" - " + name.getGivenAsSingleString());
        }
        
        // 4. Lấy tất cả thành phố
        List<StringType> cities = fhirPath.evaluate(patient, "address.city", StringType.class);
        System.out.println("\nCities:");
        for (StringType city : cities) {
            System.out.println(" - " + city.getValue());
        }
        
        // 5. Kiểm tra xem bệnh nhân có địa chỉ ở Hà Nội không
        List<BooleanType> hasHanoi = fhirPath.evaluate(patient, "address.where(city = 'Hà Nội').exists()", BooleanType.class);
        System.out.println("\nHas address in Hanoi: " + hasHanoi.get(0).getValue());
        
        // 6. Lấy địa chỉ nhà
        List<Address> homeAddresses = fhirPath.evaluate(patient, "address.where(use = 'home')", Address.class);
        System.out.println("\nHome addresses:");
        for (Address address : homeAddresses) {
            System.out.println(" - " + address.getLine().get(0).getValue() + ", " + address.getCity());
        }
    }
}
```

### Sử dụng Contained Resources trong R5

FHIR R5 cải thiện cách xử lý contained resources, và `hapi-fhir-structures-r5` cung cấp API để làm việc với chúng:

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.parser.IParser;
import org.hl7.fhir.r5.model.*;

public class ContainedResourceExample {
    public static void main(String[] args) {
        // Khởi tạo context
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo Practitioner resource (bác sĩ)
        Practitioner practitioner = new Practitioner();
        practitioner.setId("#doctor-1");
        practitioner.addName().setFamily("Trần").addGiven("Bác Sĩ");
        practitioner.addIdentifier()
            .setSystem("http://hospital.example.org/practitioners")
            .setValue("MD12345");
        
        // Tạo Organization resource (bệnh viện)
        Organization hospital = new Organization();
        hospital.setId("#hospital-1");
        hospital.setName("Bệnh viện Đa khoa Trung ương");
        hospital.addIdentifier()
            .setSystem("http://hospital.example.org/organizations")
            .setValue("ORG12345");
        
        // Tạo MedicationRequest với contained resources
        MedicationRequest medicationRequest = new MedicationRequest();
        
        // Thêm các contained resources
        medicationRequest.addContained(practitioner);
        medicationRequest.addContained(hospital);
        
        // Thiết lập thuộc tính cơ bản
        medicationRequest.setStatus(MedicationRequest.MedicationRequestStatus.ACTIVE);
        medicationRequest.setIntent(MedicationRequest.MedicationRequestIntent.ORDER);
        
        // Tham chiếu đến contained practitioner
        medicationRequest.setRequester(new Reference("#doctor-1"));
        
        // Thêm extension với tham chiếu đến contained organization
        Extension performerOrg = new Extension();
        performerOrg.setUrl("http://example.org/fhir/StructureDefinition/performing-organization");
        performerOrg.setValue(new Reference("#hospital-1"));
        medicationRequest.addExtension(performerOrg);
        
        // Tham chiếu đến bệnh nhân (không contained)
        medicationRequest.setSubject(new Reference("Patient/123456"));
        
        // Thiết lập thuốc
        CodeableConcept medication = new CodeableConcept();
        medication.addCoding()
            .setSystem("http://www.nlm.nih.gov/research/umls/rxnorm")
            .setCode("211307")
            .setDisplay("Paracetamol 500mg tablet");
        medicationRequest.setMedication(medication);
        
        // Thêm hướng dẫn dùng thuốc
        Dosage dosage = medicationRequest.addDosageInstruction();
        dosage.setText("Uống 1 viên mỗi 6 giờ khi cần");
        
        // Chuyển đổi thành JSON
        IParser parser = ctx.newJsonParser().setPrettyPrint(true);
        String json = parser.encodeResourceToString(medicationRequest);
        
        System.out.println("MedicationRequest with Contained Resources:");
        System.out.println(json);
        
        // Truy cập contained resources từ MedicationRequest
        System.out.println("\nAccessing contained resources:");
        
        for (Resource contained : medicationRequest.getContained()) {
            if (contained instanceof Practitioner) {
                Practitioner doc = (Practitioner) contained;
                System.out.println("Practitioner: " + doc.getNameFirstRep().getNameAsSingleString());
            } else if (contained instanceof Organization) {
                Organization org = (Organization) contained;
                System.out.println("Organization: " + org.getName());
            }
        }
    }
}
```

### Validation trong FHIR R5

Validation là một tính năng quan trọng trong FHIR R5, và `hapi-fhir-structures-r5` cung cấp sự hỗ trợ mạnh mẽ cho validation:

```java
import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.validation.FhirValidator;
import ca.uhn.fhir.validation.ValidationResult;
import org.hl7.fhir.r5.model.*;
import org.hl7.fhir.r5.hapi.validation.FhirInstanceValidator;

public class ValidationExample {
    public static void main(String[] args) {
        // Khởi tạo context
        FhirContext ctx = FhirContext.forR5();
        
        // Tạo validator
        FhirValidator validator = ctx.newValidator();
        
        // Thêm instance validator (kiểm tra cấu trúc và ràng buộc)
        validator.registerValidatorModule(new FhirInstanceValidator(ctx));
        
        // Tạo Patient resource hợp lệ
        Patient validPatient = new Patient();
        validPatient.addIdentifier()
            .setSystem("http://hospital.example.org/patients")
            .setValue("12345");
        validPatient.addName()
            .setFamily("Nguyễn")
            .addGiven("Văn")
            .addGiven("A");
        validPatient.setGender(Enumerations.AdministrativeGender.MALE);
        validPatient.setBirthDate(new DateType("1980-01-01").getValue());
        
        // Validate patient hợp lệ
        ValidationResult validResult = validator.validateWithResult(validPatient);
        
        System.out.println("Valid Patient Validation:");
        System.out.println("Is successful: " + validResult.isSuccessful());
        System.out.println("Message count: " + validResult.getMessages().size());
        validResult.getMessages().forEach(message -> 
            System.out.println(" - " + message.getSeverity() + ": " + message.getMessage()));
        
        // Tạo Patient resource không hợp lệ (thiếu identifier, name)
        Patient invalidPatient = new Patient();
        // Không thêm identifier
        // Thêm tên nhưng không có phần family name (bắt buộc)
        invalidPatient.addName().addGiven("Invalid");
        // Thiết lập giới tính với giá trị không hợp lệ
        // invalidPatient.setGenderElement(new Enumeration<>(new EnumFactory<>()));
        
        // Validate patient không hợp lệ
        ValidationResult invalidResult = validator.validateWithResult(invalidPatient);
        
        System.out.println("\nInvalid Patient Validation:");
        System.out.println("Is successful: " + invalidResult.isSuccessful());
        System.out.println("Message count: " + invalidResult.getMessages().size());
        invalidResult.getMessages().forEach(message -> 
            System.out.println(" - " + message.getSeverity() + ": " + message.getMessage()));
    }
}
```

### So sánh giữa hapi-fhir-structures-r5 và các phiên bản trước

| Tính năng                  | R4                  | R5                                         |
| -------------------------- | ------------------- | ------------------------------------------ |
| Canonical References       | Chưa có             | Được triển khai đầy đủ                     |
| Subscription Resources     | Chỉ có Subscription | Thêm SubscriptionTopic, SubscriptionStatus |
| Citizenship                | Chỉ có extension    | Field chính thức trong Patient             |
| Enhanced Search Parameters | Hỗ trợ cơ bản       | Được mở rộng và cải tiến                   |
| Bundled Parameters         | Hạn chế             | Được mở rộng                               |
| FHIRPath Support           | Hỗ trợ cơ bản       | Được mở rộng                               |
| Resource Lifecycle         | Đơn giản            | Được cải tiến đáng kể                      |

### Kết luận

Thư viện `hapi-fhir-structures-r5` cung cấp triển khai đầy đủ và mạnh mẽ cho chuẩn FHIR R5, mang đến cho nhà phát triển các công cụ cần thiết để xây dựng ứng dụng y tế hiện đại. Với việc bổ sung các resource mới, cải tiến các datatype hiện có, và cải thiện nhiều khía cạnh khác của FHIR, thư viện này là một thành phần thiết yếu cho bất kỳ dự án nào làm việc với FHIR R5.

Các lợi ích chính khi sử dụng `hapi-fhir-structures-r5` bao gồm:

* Triển khai đầy đủ chuẩn FHIR R5
* API trực quan và dễ sử dụng
* Tích hợp tốt với các thành phần khác của HAPI FHIR
* Hỗ trợ mạnh mẽ cho validation
* Hiệu suất tốt khi làm việc với large datasets

Khi xây dựng ứng dụng y tế hiện đại với FHIR R5, thư viện `hapi-fhir-structures-r5` là một công cụ không thể thiếu, giúp nhà phát triển tập trung vào logic nghiệp vụ thay vì phải lo lắng về các chi tiết triển khai của chuẩn FHIR.
