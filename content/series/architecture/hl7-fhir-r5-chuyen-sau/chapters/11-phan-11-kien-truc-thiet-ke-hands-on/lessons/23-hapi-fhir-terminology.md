---
id: cb00ebba-618c-40c1-b6a9-fc019ea5678c
title: 'hapi-fhir-terminology'
slug: hapi-fhir-terminology
description: 'Để xây dựng các ứng dụng y tế hiện đại tuân thủ chuẩn FHIR, việc quản lý thuật ngữ (terminology) đóng vai trò cốt yếu. Module hapifhirterminology cung cấp các công cụ mạnh mẽ để làm việc với hệ thống mã hóa y tế, giúp…'
duration_minutes: 42
is_free: true
video_url: null
sort_order: 23
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Để xây dựng các ứng dụng y tế hiện đại tuân thủ chuẩn FHIR, việc quản lý thuật ngữ (terminology) đóng vai trò cốt yếu. Module `hapi-fhir-terminology` cung cấp các công cụ mạnh mẽ để làm việc với hệ thống mã hóa y tế, giúp đảm bảo tính nhất quán và tương tác giữa các hệ thống. Bài viết này sẽ trình bày chi tiết về cách tích hợp và sử dụng thư viện này trong các ứng dụng Spring Boot.

Trong ngành y tế, thuật ngữ được sử dụng để mô tả chẩn đoán, thủ thuật, thuốc, và các khái niệm lâm sàng khác. FHIR hỗ trợ việc quản lý thuật ngữ thông qua các resource như:

* **CodeSystem**: Định nghĩa một tập hợp các mã và ý nghĩa của chúng (ví dụ: SNOMED CT, LOINC, ICD-10)
* **ValueSet**: Xác định tập hợp các mã có thể sử dụng trong một ngữ cảnh cụ thể
* **ConceptMap**: Ánh xạ các mã giữa các CodeSystem khác nhau
* **NamingSystem**: Định nghĩa hệ thống định danh như MRN hoặc mã bảo hiểm

### Cài đặt HAPI FHIR Terminology

#### Thêm dependencies

```xml
<!-- HAPI FHIR Core -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-base</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- HAPI FHIR R5 Structures -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-structures-r5</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- HAPI FHIR Terminology -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-jpaserver-base</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- HAPI FHIR Terminology - JPA -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-jpaserver-model</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- Database cho JPA Storage -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
</dependency>
```

### Cấu hình Terminology Service trong Spring Boot

#### 1. Cấu hình cơ bản

```java
@Configuration
public class TerminologyConfig {

    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IValidationSupport validationSupport(FhirContext fhirContext, DataSource dataSource) {
        // Sử dụng JPA-based terminology storage
        DaoConfig daoConfig = new DaoConfig();
        daoConfig.setAllowExternalReferences(true);
        
        // Tạo JPA-based validation support
        JpaValidationSupportFactory factory = new JpaValidationSupportFactory(dataSource);
        JpaPersistedResourceValidationSupport jpaValidationSupport = factory.build();
        jpaValidationSupport.setDaoConfig(daoConfig);
        jpaValidationSupport.setFhirContext(fhirContext);
        
        // Kết hợp JPA validation support với các support khác
        ValidationSupportChain validationSupportChain = new ValidationSupportChain();
        
        // Thêm DefaultProfileValidationSupport cho các resource mặc định
        validationSupportChain.addValidationSupport(new DefaultProfileValidationSupport(fhirContext));
        
        // Thêm InMemoryTerminologyServerValidationSupport 
        validationSupportChain.addValidationSupport(new InMemoryTerminologyServerValidationSupport(fhirContext));
        
        // Thêm JPA validation support
        validationSupportChain.addValidationSupport(jpaValidationSupport);
        
        return validationSupportChain;
    }
    
    @Bean
    public ITerminologyService terminologyService(FhirContext fhirContext, IValidationSupport validationSupport) {
        TerminologyServiceR5 terminologyService = new TerminologyServiceR5();
        terminologyService.setContext(fhirContext);
        terminologyService.setValidationSupport(validationSupport);
        return terminologyService;
    }
    
    @Bean
    public TerminologyServiceBean terminologyServiceBean(ITerminologyService terminologyService) {
        return new TerminologyServiceBean(terminologyService);
    }
}
```

#### 2. Tạo Schema Database cho Terminology

```sql
-- CodeSystem Table
CREATE TABLE IF NOT EXISTS term_code_system (
    pid BIGSERIAL PRIMARY KEY,
    code_system_uri VARCHAR(255) NOT NULL,
    cs_name VARCHAR(255),
    cs_version VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_uri_version UNIQUE (code_system_uri, cs_version)
);

-- Concept Table
CREATE TABLE IF NOT EXISTS term_concept (
    pid BIGSERIAL PRIMARY KEY,
    code_system_pid BIGINT NOT NULL,
    code VARCHAR(100) NOT NULL,
    display VARCHAR(500),
    concept_parent BIGINT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_code_system_code UNIQUE (code_system_pid, code),
    CONSTRAINT fk_term_concept_code_system FOREIGN KEY (code_system_pid) REFERENCES term_code_system(pid),
    CONSTRAINT fk_term_concept_parent FOREIGN KEY (concept_parent) REFERENCES term_concept(pid)
);

-- CodeSystem Version Table
CREATE TABLE IF NOT EXISTS term_code_system_version (
    pid BIGSERIAL PRIMARY KEY,
    code_system_pid BIGINT NOT NULL,
    version VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_term_cs_version_code_system FOREIGN KEY (code_system_pid) REFERENCES term_code_system(pid)
);

-- ValueSet Table
CREATE TABLE IF NOT EXISTS term_value_set (
    pid BIGSERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    vs_version VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_url_version UNIQUE (url, vs_version)
);

-- ValueSet Concept Table
CREATE TABLE IF NOT EXISTS term_value_set_concept (
    pid BIGSERIAL PRIMARY KEY,
    valueset_pid BIGINT NOT NULL,
    system_uri VARCHAR(255) NOT NULL,
    system_version VARCHAR(255),
    code VARCHAR(100) NOT NULL,
    display VARCHAR(500),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_term_vs_concept_valueset FOREIGN KEY (valueset_pid) REFERENCES term_value_set(pid)
);

-- ConceptMap Table
CREATE TABLE IF NOT EXISTS term_concept_map (
    pid BIGSERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    cm_version VARCHAR(255),
    source_value_set VARCHAR(255),
    target_value_set VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_url_version UNIQUE (url, cm_version)
);

-- ConceptMap Group Table
CREATE TABLE IF NOT EXISTS term_concept_map_group (
    pid BIGSERIAL PRIMARY KEY,
    concept_map_pid BIGINT NOT NULL,
    source_code_system VARCHAR(255),
    source_code_system_version VARCHAR(255),
    target_code_system VARCHAR(255),
    target_code_system_version VARCHAR(255),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_term_cm_group_concept_map FOREIGN KEY (concept_map_pid) REFERENCES term_concept_map(pid)
);

-- ConceptMap Group Element Table
CREATE TABLE IF NOT EXISTS term_concept_map_group_element (
    pid BIGSERIAL PRIMARY KEY,
    concept_map_group_pid BIGINT NOT NULL,
    source_code VARCHAR(100) NOT NULL,
    source_display VARCHAR(500),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_term_cm_element_group FOREIGN KEY (concept_map_group_pid) REFERENCES term_concept_map_group(pid)
);

-- ConceptMap Group Element Target Table
CREATE TABLE IF NOT EXISTS term_concept_map_group_element_target (
    pid BIGSERIAL PRIMARY KEY,
    concept_map_group_element_pid BIGINT NOT NULL,
    target_code VARCHAR(100) NOT NULL,
    target_display VARCHAR(500),
    equivalence VARCHAR(50),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_term_cm_target_element FOREIGN KEY (concept_map_group_element_pid) REFERENCES term_concept_map_group_element(pid)
);
```

#### 3. Bean Service để tương tác với Terminology Service

```java
@Service
public class TerminologyServiceBean {

    private final ITerminologyService terminologyService;
    private final FhirContext fhirContext;
    
    public TerminologyServiceBean(ITerminologyService terminologyService) {
        this.terminologyService = terminologyService;
        this.fhirContext = (FhirContext) terminologyService.getFhirContext();
    }
    
    /**
     * Kiểm tra xem một mã có thuộc một ValueSet không
     */
    public boolean validateCode(String valueSetUrl, String code, String system) {
        ValidateCodeResult result = terminologyService.validateCode(
            new ValidateCodeParameters()
                .withValueSetUrl(valueSetUrl)
                .withCode(code)
                .withSystem(system)
        );
        return result.isResult();
    }
    
    /**
     * Tra cứu thông tin của một mã
     */
    public LookupCodeResult lookupCode(String code, String system) {
        return terminologyService.lookupCode(
            new LookupCodeParameters()
                .withCode(code)
                .withSystem(system)
        );
    }
    
    /**
     * Lấy các mã từ một ValueSet
     */
    public List<Coding> expandValueSet(String valueSetUrl) {
        ValueSetExpansionOutcome outcome = terminologyService.expandValueSet(
            new ValueSetExpansionParameters()
                .withUrl(valueSetUrl)
        );
        
        ValueSet expandedValueSet = outcome.getValueSet();
        List<Coding> codings = new ArrayList<>();
        
        if (expandedValueSet != null && expandedValueSet.hasExpansion()) {
            for (ValueSet.ValueSetExpansionContainsComponent contains : expandedValueSet.getExpansion().getContains()) {
                Coding coding = new Coding();
                coding.setSystem(contains.getSystem());
                coding.setCode(contains.getCode());
                coding.setDisplay(contains.getDisplay());
                codings.add(coding);
            }
        }
        
        return codings;
    }
    
    /**
     * Tìm concept phù hợp
     */
    public List<Coding> findConcepts(String valueSetUrl, String searchText) {
        ValueSetExpansionOutcome outcome = terminologyService.expandValueSet(
            new ValueSetExpansionParameters()
                .withUrl(valueSetUrl)
                .withFilter(searchText)
        );
        
        ValueSet expandedValueSet = outcome.getValueSet();
        List<Coding> codings = new ArrayList<>();
        
        if (expandedValueSet != null && expandedValueSet.hasExpansion()) {
            for (ValueSet.ValueSetExpansionContainsComponent contains : expandedValueSet.getExpansion().getContains()) {
                Coding coding = new Coding();
                coding.setSystem(contains.getSystem());
                coding.setCode(contains.getCode());
                coding.setDisplay(contains.getDisplay());
                codings.add(coding);
            }
        }
        
        return codings;
    }
    
    /**
     * Ánh xạ mã giữa các hệ thống mã hóa khác nhau
     */
    public List<Coding> translateCoding(String conceptMapUrl, Coding sourceCoding) {
        TranslateConceptResults results = terminologyService.translateConcept(
            new TranslateConceptParameters()
                .withConceptMapUrl(conceptMapUrl)
                .withSystem(sourceCoding.getSystem())
                .withCode(sourceCoding.getCode())
        );
        
        List<Coding> targetCodings = new ArrayList<>();
        
        for (TranslateConceptResult result : results.getResults()) {
            Coding targetCoding = new Coding();
            targetCoding.setSystem(result.getSystem());
            targetCoding.setCode(result.getCode());
            targetCoding.setDisplay(result.getDisplay());
            targetCodings.add(targetCoding);
        }
        
        return targetCodings;
    }
    
    /**
     * Nhập CodeSystem vào hệ thống
     */
    public void uploadCodeSystem(CodeSystem codeSystem) {
        IValidationSupport validationSupport = terminologyService.getValidationSupport();
        if (validationSupport instanceof JpaPersistedResourceValidationSupport) {
            JpaPersistedResourceValidationSupport jpaSupport = (JpaPersistedResourceValidationSupport) validationSupport;
            jpaSupport.storeResource(codeSystem);
        }
    }
    
    /**
     * Nhập ValueSet vào hệ thống
     */
    public void uploadValueSet(ValueSet valueSet) {
        IValidationSupport validationSupport = terminologyService.getValidationSupport();
        if (validationSupport instanceof JpaPersistedResourceValidationSupport) {
            JpaPersistedResourceValidationSupport jpaSupport = (JpaPersistedResourceValidationSupport) validationSupport;
            jpaSupport.storeResource(valueSet);
        }
    }
    
    /**
     * Nhập ConceptMap vào hệ thống
     */
    public void uploadConceptMap(ConceptMap conceptMap) {
        IValidationSupport validationSupport = terminologyService.getValidationSupport();
        if (validationSupport instanceof JpaPersistedResourceValidationSupport) {
            JpaPersistedResourceValidationSupport jpaSupport = (JpaPersistedResourceValidationSupport) validationSupport;
            jpaSupport.storeResource(conceptMap);
        }
    }
}
```

### Sử dụng Terminology Service trong ứng dụng

#### 1. Controller để cung cấp API Terminology

```java
@RestController
@RequestMapping("/api/terminology")
public class TerminologyController {

    private final TerminologyServiceBean terminologyService;
    private final FhirContext fhirContext;
    
    public TerminologyController(TerminologyServiceBean terminologyService, FhirContext fhirContext) {
        this.terminologyService = terminologyService;
        this.fhirContext = fhirContext;
    }
    
    @GetMapping("/validate")
    public ResponseEntity<Map<String, Boolean>> validateCode(
            @RequestParam String valueSetUrl,
            @RequestParam String code,
            @RequestParam String system) {
        boolean isValid = terminologyService.validateCode(valueSetUrl, code, system);
        Map<String, Boolean> response = Collections.singletonMap("valid", isValid);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/lookup")
    public ResponseEntity<Map<String, Object>> lookupCode(
            @RequestParam String code,
            @RequestParam String system) {
        LookupCodeResult result = terminologyService.lookupCode(code, system);
        
        Map<String, Object> response = new HashMap<>();
        response.put("code", result.getCode());
        response.put("system", result.getSystem());
        response.put("display", result.getDisplay());
        response.put("properties", result.getProperties());
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/valuesets/{url}/expansion")
    public ResponseEntity<List<Map<String, String>>> expandValueSet(
            @PathVariable String url,
            @RequestParam(required = false) String filter) {
        List<Coding> codings;
        
        if (filter != null && !filter.isEmpty()) {
            codings = terminologyService.findConcepts(url, filter);
        } else {
            codings = terminologyService.expandValueSet(url);
        }
        
        List<Map<String, String>> response = codings.stream()
                .map(coding -> {
                    Map<String, String> map = new HashMap<>();
                    map.put("system", coding.getSystem());
                    map.put("code", coding.getCode());
                    map.put("display", coding.getDisplay());
                    return map;
                })
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/translate")
    public ResponseEntity<List<Map<String, String>>> translateCoding(
            @RequestParam String conceptMapUrl,
            @RequestBody Map<String, String> sourceCoding) {
        
        Coding coding = new Coding();
        coding.setSystem(sourceCoding.get("system"));
        coding.setCode(sourceCoding.get("code"));
        
        List<Coding> translatedCodings = terminologyService.translateCoding(conceptMapUrl, coding);
        
        List<Map<String, String>> response = translatedCodings.stream()
                .map(translatedCoding -> {
                    Map<String, String> map = new HashMap<>();
                    map.put("system", translatedCoding.getSystem());
                    map.put("code", translatedCoding.getCode());
                    map.put("display", translatedCoding.getDisplay());
                    return map;
                })
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/codesystems")
    public ResponseEntity<Void> uploadCodeSystem(@RequestBody String codeSystemJson) {
        try {
            CodeSystem codeSystem = fhirContext.newJsonParser().parseResource(CodeSystem.class, codeSystemJson);
            terminologyService.uploadCodeSystem(codeSystem);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @PostMapping("/valuesets")
    public ResponseEntity<Void> uploadValueSet(@RequestBody String valueSetJson) {
        try {
            ValueSet valueSet = fhirContext.newJsonParser().parseResource(ValueSet.class, valueSetJson);
            terminologyService.uploadValueSet(valueSet);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @PostMapping("/conceptmaps")
    public ResponseEntity<Void> uploadConceptMap(@RequestBody String conceptMapJson) {
        try {
            ConceptMap conceptMap = fhirContext.newJsonParser().parseResource(ConceptMap.class, conceptMapJson);
            terminologyService.uploadConceptMap(conceptMap);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
```

#### 2. Service để quản lý Terminology trong ứng dụng

```java
@Service
public class ClinicalService {

    private final TerminologyServiceBean terminologyService;
    
    // ValueSet URL cho các loại dữ liệu thường dùng
    private static final String DIAGNOSIS_VALUESET_URL = "http://hl7.org/fhir/ValueSet/icd10";
    private static final String LAB_TEST_VALUESET_URL = "http://loinc.org/vs";
    private static final String MEDICATION_VALUESET_URL = "http://www.nlm.nih.gov/research/umls/rxnorm/vs";
    
    public ClinicalService(TerminologyServiceBean terminologyService) {
        this.terminologyService = terminologyService;
    }
    
    /**
     * Xác thực chẩn đoán ICD-10
     */
    public boolean validateDiagnosis(String icd10Code) {
        return terminologyService.validateCode(
                DIAGNOSIS_VALUESET_URL,
                icd10Code,
                "http://hl7.org/fhir/sid/icd-10"
        );
    }
    
    /**
     * Lấy mô tả của chẩn đoán
     */
    public String getDiagnosisDisplay(String icd10Code) {
        LookupCodeResult result = terminologyService.lookupCode(
                icd10Code,
                "http://hl7.org/fhir/sid/icd-10"
        );
        return result.getDisplay();
    }
    
    /**
     * Tìm kiếm chẩn đoán theo từ khóa
     */
    public List<Coding> searchDiagnoses(String searchText) {
        return terminologyService.findConcepts(DIAGNOSIS_VALUESET_URL, searchText);
    }
    
    /**
     * Xác thực xét nghiệm LOINC
     */
    public boolean validateLabTest(String loincCode) {
        return terminologyService.validateCode(
                LAB_TEST_VALUESET_URL,
                loincCode,
                "http://loinc.org"
        );
    }
    
    /**
     * Tìm kiếm xét nghiệm theo từ khóa
     */
    public List<Coding> searchLabTests(String searchText) {
        return terminologyService.findConcepts(LAB_TEST_VALUESET_URL, searchText);
    }
    
    /**
     * Xác thực mã thuốc RxNorm
     */
    public boolean validateMedication(String rxNormCode) {
        return terminologyService.validateCode(
                MEDICATION_VALUESET_URL,
                rxNormCode,
                "http://www.nlm.nih.gov/research/umls/rxnorm"
        );
    }
    
    /**
     * Tìm kiếm thuốc theo từ khóa
     */
    public List<Coding> searchMedications(String searchText) {
        return terminologyService.findConcepts(MEDICATION_VALUESET_URL, searchText);
    }
    
    /**
     * Chuyển đổi mã ICD-10 sang SNOMED CT
     */
    public List<Coding> translateIcd10ToSnomed(String icd10Code) {
        Coding icd10Coding = new Coding()
                .setSystem("http://hl7.org/fhir/sid/icd-10")
                .setCode(icd10Code);
        
        return terminologyService.translateCoding(
                "http://example.org/fhir/ConceptMap/icd10-to-snomed",
                icd10Coding
        );
    }
}
```

#### 3. Sử dụng trong việc validate và truy vấn FHIR Resource

```java
@Service
public class ObservationService {

    private final IGenericClient fhirClient;
    private final TerminologyServiceBean terminologyService;
    private final FhirContext fhirContext;
    
    public ObservationService(IGenericClient fhirClient, 
                             TerminologyServiceBean terminologyService,
                             FhirContext fhirContext) {
        this.fhirClient = fhirClient;
        this.terminologyService = terminologyService;
        this.fhirContext = fhirContext;
    }
    
    /**
     * Tạo observation mới với validation terminology
     */
    public Observation createObservation(Observation observation) {
        // Kiểm tra mã LOINC hợp lệ
        if (observation.hasCode() && observation.getCode().hasCoding()) {
            Coding coding = observation.getCode().getCodingFirstRep();
            
            if (coding.getSystem().equals("http://loinc.org")) {
                boolean isValid = terminologyService.validateCode(
                        "http://loinc.org/vs",
                        coding.getCode(),
                        coding.getSystem()
                );
                
                if (!isValid) {
                    throw new IllegalArgumentException("Invalid LOINC code: " + coding.getCode());
                }
                
                // Đảm bảo display đúng
                LookupCodeResult result = terminologyService.lookupCode(coding.getCode(), coding.getSystem());
                coding.setDisplay(result.getDisplay());
            }
        }
        
        // Lưu observation
        MethodOutcome outcome = fhirClient.create()
                .resource(observation)
                .execute();
        
        return (Observation) outcome.getResource();
    }
    
    /**
     * Tìm observations theo loại xét nghiệm
     */
    public List<Observation> findObservationsByType(String loincCode) {
        // Expand ValueSet để tìm các mã liên quan
        List<Coding> relatedCodes = new ArrayList<>();
        
        try {
            // Tìm kiếm các mã tương đương hoặc liên quan
            Coding sourceCoding = new Coding()
                    .setSystem("http://loinc.org")
                    .setCode(loincCode);
            
            List<Coding> equivalentCodes = terminologyService.translateCoding(
                    "http://example.org/fhir/ConceptMap/loinc-related",
                    sourceCoding
            );
            
            relatedCodes.addAll(equivalentCodes);
        } catch (Exception e) {
            // Nếu không có mapping, chỉ sử dụng mã gốc
            relatedCodes.add(new Coding()
                    .setSystem("http://loinc.org")
                    .setCode(loincCode));
        }
        
        // Tạo điều kiện tìm kiếm kết hợp các mã liên quan
        Bundle results;
        
        if (relatedCodes.size() > 1) {
            // Sử dụng OR để tìm kiếm với nhiều mã
            String query = relatedCodes.stream()
                    .map(coding -> "code=" + coding.getSystem() + "|" + coding.getCode())
                    .collect(Collectors.joining("&"));
            
            results = fhirClient.search()
                    .byUrl("Observation?" + query)
                    .returnBundle(Bundle.class)
                    .execute();
        } else {
            // Tìm kiếm đơn giản với một mã
            Coding coding = relatedCodes.get(0);
            
            results = fhirClient.search()
                    .forResource(Observation.class)
                    .where(Observation.CODE.exactly()
                            .systemAndCode(coding.getSystem(), coding.getCode()))
                    .returnBundle(Bundle.class)
                    .execute();
        }
        
        return results.getEntry().stream()
                .map(entry -> (Observation) entry.getResource())
                .collect(Collectors.toList());
    }
    
    /**
     * Chuyển đổi một Observation từ LOINC sang SNOMED
     */
    public Observation translateObservationCoding(Observation observation) {
        if (!observation.hasCode() || !observation.getCode().hasCoding()) {
            return observation;
        }
        
        Coding loincCoding = null;
        
        // Tìm LOINC coding
        for (Coding coding : observation.getCode().getCoding()) {
            if (coding.getSystem().equals("http://loinc.org")) {
                loincCoding = coding;
                break;
            }
        }
        
        if (loincCoding != null) {
            // Chuyển đổi LOINC sang SNOMED
            try {
                List<Coding> snomedCodings = terminologyService.translateCoding(
                        "http://example.org/fhir/ConceptMap/loinc-to-snomed",
                        loincCoding
                );
                
                // Thêm coding SNOMED vào observation
                for (Coding snomedCoding : snomedCodings) {
                    observation.getCode().addCoding(snomedCoding);
                }
            } catch (Exception e) {
                // Xử lý trường hợp không tìm thấy mapping
            }
        }
        
        return observation;
    }
}
```

### Tích hợp với External Terminology Server

HAPI FHIR cũng hỗ trợ kết nối với external terminology server như Ontoserver hoặc VSAC:

```java
@Configuration
public class ExternalTerminologyConfig {

    @Bean
    public IValidationSupport remoteTerminologyValidationSupport(FhirContext fhirContext) {
        // Kết nối với External Terminology Server
        RemoteTerminologyServiceValidationSupport remoteSupport = 
                new RemoteTerminologyServiceValidationSupport(fhirContext);
        
        // Thiết lập URL của Terminology Server
        remoteSupport.setBaseUrl("https://r4.ontoserver.csiro.au/fhir");
        
        // Thêm authentication nếu cần
        remoteSupport.setBearerToken("your-auth-token");
        
        return remoteSupport;
    }
    
    @Bean
    public IValidationSupport combinedTerminologySupport(
            FhirContext fhirContext,
            IValidationSupport jpaValidationSupport,
            IValidationSupport remoteTerminologyValidationSupport) {
        
        ValidationSupportChain validationSupportChain = new ValidationSupportChain();
        
        // Thêm local validation support đầu tiên
        validationSupportChain.addValidationSupport(new DefaultProfileValidationSupport(fhirContext));
         validationSupportChain.addValidationSupport(jpaValidationSupport);
        
        // Thêm remote validation support (nếu local không có)
        validationSupportChain.addValidationSupport(remoteTerminologyValidationSupport);
        
        return validationSupportChain;
    }
    
    @Bean
    public ExternalTerminologyServiceClient externalTerminologyServiceClient(
            FhirContext fhirContext,
            RestTemplateBuilder restTemplateBuilder) {
        
        RestTemplate restTemplate = restTemplateBuilder
                .setConnectTimeout(Duration.ofSeconds(10))
                .setReadTimeout(Duration.ofSeconds(30))
                .build();
        
        return new ExternalTerminologyServiceClient(fhirContext, restTemplate);
    }
}

@Service
public class ExternalTerminologyServiceClient {

    private final FhirContext fhirContext;
    private final RestTemplate restTemplate;
    private final String baseUrl = "https://r4.ontoserver.csiro.au/fhir";
    
    public ExternalTerminologyServiceClient(FhirContext fhirContext, RestTemplate restTemplate) {
        this.fhirContext = fhirContext;
        this.restTemplate = restTemplate;
    }
    
    /**
     * Gọi $validate-code operation
     */
    public boolean validateCodeUsingExternalService(String valueSetUrl, String code, String system) {
        // Tạo Parameters resource
        Parameters parameters = new Parameters();
        parameters.addParameter().setName("url").setValue(new UriType(valueSetUrl));
        parameters.addParameter().setName("code").setValue(new StringType(code));
        parameters.addParameter().setName("system").setValue(new UriType(system));
        
        // Convert to JSON
        String requestBody = fhirContext.newJsonParser().encodeResourceToString(parameters);
        
        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        // Make request
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        
        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    baseUrl + "/ValueSet/$validate-code",
                    HttpMethod.POST,
                    entity,
                    String.class);
            
            // Parse response
            Parameters responseParameters = fhirContext.newJsonParser()
                    .parseResource(Parameters.class, response.getBody());
            
            // Extract result
            for (Parameters.ParametersParameterComponent param : responseParameters.getParameter()) {
                if (param.getName().equals("result") && param.getValue() instanceof BooleanType) {
                    return ((BooleanType) param.getValue()).booleanValue();
                }
            }
            
            return false;
        } catch (Exception e) {
            // Log and handle error
            return false;
        }
    }
    
    /**
     * Gọi $expand operation
     */
    public List<Coding> expandValueSetUsingExternalService(String valueSetUrl, String filter) {
        try {
            // Build URL with query parameters
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl + "/ValueSet/$expand")
                    .queryParam("url", valueSetUrl);
            
            if (filter != null && !filter.isEmpty()) {
                builder.queryParam("filter", filter);
            }
            
            // Set headers
            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            
            // Make request
            ResponseEntity<String> response = restTemplate.exchange(
                    builder.toUriString(),
                    HttpMethod.GET,
                    new HttpEntity<>(headers),
                    String.class);
            
            // Parse response
            ValueSet expandedValueSet = fhirContext.newJsonParser()
                    .parseResource(ValueSet.class, response.getBody());
            
            // Extract codings
            List<Coding> codings = new ArrayList<>();
            
            if (expandedValueSet.hasExpansion()) {
                for (ValueSet.ValueSetExpansionContainsComponent contains : 
                        expandedValueSet.getExpansion().getContains()) {
                    Coding coding = new Coding();
                    coding.setSystem(contains.getSystem());
                    coding.setCode(contains.getCode());
                    coding.setDisplay(contains.getDisplay());
                    codings.add(coding);
                }
            }
            
            return codings;
        } catch (Exception e) {
            // Log and handle error
            return Collections.emptyList();
        }
    }
    
    /**
     * Gọi $translate operation
     */
    public List<Coding> translateConceptUsingExternalService(
            String conceptMapUrl, String sourceSystem, String sourceCode) {
        
        // Tạo Parameters resource
        Parameters parameters = new Parameters();
        parameters.addParameter().setName("url").setValue(new UriType(conceptMapUrl));
        parameters.addParameter().setName("system").setValue(new UriType(sourceSystem));
        parameters.addParameter().setName("code").setValue(new StringType(sourceCode));
        
        // Convert to JSON
        String requestBody = fhirContext.newJsonParser().encodeResourceToString(parameters);
        
        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        
        // Make request
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        
        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    baseUrl + "/ConceptMap/$translate",
                    HttpMethod.POST,
                    entity,
                    String.class);
            
            // Parse response
            Parameters responseParameters = fhirContext.newJsonParser()
                    .parseResource(Parameters.class, response.getBody());
            
            // Extract results
            List<Coding> codings = new ArrayList<>();
            
            for (Parameters.ParametersParameterComponent param : responseParameters.getParameter()) {
                if (param.getName().equals("match")) {
                    // Get nested parameters for each match
                    for (Parameters.ParametersParameterComponent matchParam : param.getPart()) {
                        if (matchParam.getName().equals("concept")) {
                            Coding coding = (Coding) matchParam.getValue();
                            codings.add(coding);
                        }
                    }
                }
            }
            
            return codings;
        } catch (Exception e) {
            // Log and handle error
            return Collections.emptyList();
        }
    }
}
```

### Tạo và quản lý CodeSystem, ValueSet và ConceptMap

#### 1. Service để quản lý CodeSystem

```java
@Service
public class CodeSystemManagementService {

    private final IGenericClient fhirClient;
    private final FhirContext fhirContext;
    private final TerminologyServiceBean terminologyService;
    
    public CodeSystemManagementService(IGenericClient fhirClient, 
                                     FhirContext fhirContext,
                                     TerminologyServiceBean terminologyService) {
        this.fhirClient = fhirClient;
        this.fhirContext = fhirContext;
        this.terminologyService = terminologyService;
    }
    
    /**
     * Tạo một CodeSystem mới với các concepts
     */
    public CodeSystem createCodeSystem(String url, String name, String version, 
                                     String description, List<ConceptDto> concepts) {
        
        CodeSystem codeSystem = new CodeSystem();
        codeSystem.setUrl(url);
        codeSystem.setName(name);
        codeSystem.setVersion(version);
        codeSystem.setDescription(description);
        codeSystem.setStatus(Enumerations.PublicationStatus.ACTIVE);
        codeSystem.setContent(CodeSystem.CodeSystemContentMode.COMPLETE);
        codeSystem.setDate(new Date());
        codeSystem.setCaseSensitive(true);
        
        // Thêm concepts
        for (ConceptDto conceptDto : concepts) {
            CodeSystem.ConceptDefinitionComponent concept = codeSystem.addConcept();
            concept.setCode(conceptDto.getCode());
            concept.setDisplay(conceptDto.getDisplay());
            concept.setDefinition(conceptDto.getDefinition());
            
            // Thêm properties cho concept nếu có
            if (conceptDto.getProperties() != null) {
                for (Map.Entry<String, String> entry : conceptDto.getProperties().entrySet()) {
                    concept.addProperty()
                        .setCode(entry.getKey())
                        .setValue(new StringType(entry.getValue()));
                }
            }
        }
        
        // Lưu CodeSystem vào server
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(codeSystem)
                    .execute();
            
            if (outcome.getResource() != null) {
                CodeSystem createdSystem = (CodeSystem) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadCodeSystem(createdSystem);
                
                return createdSystem;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create CodeSystem: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Tìm kiếm CodeSystem theo URL
     */
    public CodeSystem findCodeSystemByUrl(String url) {
        try {
            Bundle bundle = fhirClient.search()
                    .forResource(CodeSystem.class)
                    .where(CodeSystem.URL.matches().value(url))
                    .returnBundle(Bundle.class)
                    .execute();
            
            if (!bundle.getEntry().isEmpty()) {
                return (CodeSystem) bundle.getEntryFirstRep().getResource();
            }
        } catch (Exception e) {
            // Xử lý lỗi
        }
        
        return null;
    }
    
    /**
     * Thêm concept vào CodeSystem hiện có
     */
    public CodeSystem addConceptToCodeSystem(String codeSystemUrl, ConceptDto conceptDto) {
        // Tìm CodeSystem
        CodeSystem codeSystem = findCodeSystemByUrl(codeSystemUrl);
        
        if (codeSystem == null) {
            throw new ResourceNotFoundException("CodeSystem not found: " + codeSystemUrl);
        }
        
        // Kiểm tra xem concept đã tồn tại chưa
        for (CodeSystem.ConceptDefinitionComponent existingConcept : codeSystem.getConcept()) {
            if (existingConcept.getCode().equals(conceptDto.getCode())) {
                throw new IllegalArgumentException("Concept with code " + conceptDto.getCode() + " already exists");
            }
        }
        
        // Thêm concept mới
        CodeSystem.ConceptDefinitionComponent concept = codeSystem.addConcept();
        concept.setCode(conceptDto.getCode());
        concept.setDisplay(conceptDto.getDisplay());
        concept.setDefinition(conceptDto.getDefinition());
        
        // Thêm properties cho concept nếu có
        if (conceptDto.getProperties() != null) {
            for (Map.Entry<String, String> entry : conceptDto.getProperties().entrySet()) {
                concept.addProperty()
                    .setCode(entry.getKey())
                    .setValue(new StringType(entry.getValue()));
            }
        }
        
        // Cập nhật CodeSystem
        try {
            MethodOutcome outcome = fhirClient.update()
                    .resource(codeSystem)
                    .execute();
            
            if (outcome.getResource() != null) {
                CodeSystem updatedSystem = (CodeSystem) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadCodeSystem(updatedSystem);
                
                return updatedSystem;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to update CodeSystem: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Nhập CodeSystem từ file
     */
    public CodeSystem importCodeSystemFromCsv(String url, String name, InputStream csvData) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(csvData));
        
        CodeSystem codeSystem = new CodeSystem();
        codeSystem.setUrl(url);
        codeSystem.setName(name);
        codeSystem.setStatus(Enumerations.PublicationStatus.ACTIVE);
        codeSystem.setContent(CodeSystem.CodeSystemContentMode.COMPLETE);
        codeSystem.setDate(new Date());
        codeSystem.setCaseSensitive(true);
        
        // Đọc header
        String line = reader.readLine();
        if (line == null) {
            throw new IllegalArgumentException("Empty CSV file");
        }
        
        String[] headers = line.split(",");
        
        // Đọc dữ liệu
        while ((line = reader.readLine()) != null) {
            String[] values = line.split(",");
            
            if (values.length >= 2) {
                CodeSystem.ConceptDefinitionComponent concept = codeSystem.addConcept();
                concept.setCode(values[0].trim());
                concept.setDisplay(values[1].trim());
                
                // Nếu có thêm thông tin
                if (values.length >= 3) {
                    concept.setDefinition(values[2].trim());
                }
                
                // Xử lý properties nếu có
                for (int i = 3; i < Math.min(values.length, headers.length); i++) {
                    if (values[i] != null && !values[i].trim().isEmpty()) {
                        concept.addProperty()
                            .setCode(headers[i])
                            .setValue(new StringType(values[i].trim()));
                    }
                }
            }
        }
        
        // Lưu CodeSystem
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(codeSystem)
                    .execute();
            
            if (outcome.getResource() != null) {
                CodeSystem createdSystem = (CodeSystem) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadCodeSystem(createdSystem);
                
                return createdSystem;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create CodeSystem: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    public static class ConceptDto {
        private String code;
        private String display;
        private String definition;
        private Map<String, String> properties;
        
        // Getters and setters
        public String getCode() { return code; }
        public void setCode(String code) { this.code = code; }
        
        public String getDisplay() { return display; }
        public void setDisplay(String display) { this.display = display; }
        
        public String getDefinition() { return definition; }
        public void setDefinition(String definition) { this.definition = definition; }
        
        public Map<String, String> getProperties() { return properties; }
        public void setProperties(Map<String, String> properties) { this.properties = properties; }
    }
}
```

#### 2. Service để quản lý ValueSet

```java
@Service
public class ValueSetManagementService {

    private final IGenericClient fhirClient;
    private final FhirContext fhirContext;
    private final TerminologyServiceBean terminologyService;
    
    public ValueSetManagementService(IGenericClient fhirClient, 
                                   FhirContext fhirContext,
                                   TerminologyServiceBean terminologyService) {
        this.fhirClient = fhirClient;
        this.fhirContext = fhirContext;
        this.terminologyService = terminologyService;
    }
    
    /**
     * Tạo một ValueSet mới
     */
    public ValueSet createValueSet(String url, String name, String description) {
        ValueSet valueSet = new ValueSet();
        valueSet.setUrl(url);
        valueSet.setName(name);
        valueSet.setDescription(description);
        valueSet.setStatus(Enumerations.PublicationStatus.ACTIVE);
        valueSet.setDate(new Date());
        
        // Lưu ValueSet
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(valueSet)
                    .execute();
            
            if (outcome.getResource() != null) {
                ValueSet createdValueSet = (ValueSet) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadValueSet(createdValueSet);
                
                return createdValueSet;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create ValueSet: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Thêm include criteria cho một ValueSet
     */
    public ValueSet addIncludeToValueSet(String valueSetUrl, String system, List<String> codes, String filter) {
        // Tìm ValueSet
        ValueSet valueSet = findValueSetByUrl(valueSetUrl);
        
        if (valueSet == null) {
            throw new ResourceNotFoundException("ValueSet not found: " + valueSetUrl);
        }
        
        // Tạo include nếu chưa có
        ValueSet.ValueSetComposeComponent compose = valueSet.getCompose();
        if (compose == null) {
            compose = valueSet.setCompose(new ValueSet.ValueSetComposeComponent());
        }
        
        // Tạo include component mới
        ValueSet.ConceptSetComponent include = compose.addInclude();
        include.setSystem(system);
        
        // Thêm các codes nếu có
        if (codes != null && !codes.isEmpty()) {
            for (String code : codes) {
                include.addConcept().setCode(code);
            }
        }
        
        // Thêm filter nếu có
        if (filter != null && !filter.isEmpty()) {
            ValueSet.ConceptSetFilterComponent filterComponent = include.addFilter();
            // Parse filter (đơn giản hóa ví dụ)
            String[] parts = filter.split("=");
            if (parts.length == 2) {
                filterComponent.setProperty(parts[0]);
                filterComponent.setOp(ValueSet.FilterOperator.EQUAL);
                filterComponent.setValue(parts[1]);
            }
        }
        
        // Cập nhật ValueSet
        try {
            MethodOutcome outcome = fhirClient.update()
                    .resource(valueSet)
                    .execute();
            
            if (outcome.getResource() != null) {
                ValueSet updatedValueSet = (ValueSet) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadValueSet(updatedValueSet);
                
                return updatedValueSet;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to update ValueSet: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Tìm kiếm ValueSet theo URL
     */
    public ValueSet findValueSetByUrl(String url) {
        try {
            Bundle bundle = fhirClient.search()
                    .forResource(ValueSet.class)
                    .where(ValueSet.URL.matches().value(url))
                    .returnBundle(Bundle.class)
                    .execute();
            
            if (!bundle.getEntry().isEmpty()) {
                return (ValueSet) bundle.getEntryFirstRep().getResource();
            }
        } catch (Exception e) {
            // Xử lý lỗi
        }
        
        return null;
    }
    
    /**
     * Expand một ValueSet để lấy các concepts
     */
    public List<Coding> expandValueSet(String valueSetUrl) {
        return terminologyService.expandValueSet(valueSetUrl);
    }
    
    /**
     * Tạo một ValueSet từ các codes được chọn lọc từ một code system
     */
    public ValueSet createValueSetFromCodesystem(String valueSetUrl, String name, 
                                               String description, String codeSystemUrl, 
                                               List<String> selectedCodes) {
        
        ValueSet valueSet = new ValueSet();
        valueSet.setUrl(valueSetUrl);
        valueSet.setName(name);
        valueSet.setDescription(description);
        valueSet.setStatus(Enumerations.PublicationStatus.ACTIVE);
        valueSet.setDate(new Date());
        
        // Tạo include criteria
        ValueSet.ValueSetComposeComponent compose = valueSet.setCompose(new ValueSet.ValueSetComposeComponent());
        ValueSet.ConceptSetComponent include = compose.addInclude();
        include.setSystem(codeSystemUrl);
        
        // Thêm các codes đã chọn
        for (String code : selectedCodes) {
            include.addConcept().setCode(code);
        }
        
        // Lưu ValueSet
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(valueSet)
                    .execute();
            
            if (outcome.getResource() != null) {
                ValueSet createdValueSet = (ValueSet) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadValueSet(createdValueSet);
                
                return createdValueSet;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create ValueSet: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Tạo ValueSet bằng cách include hết một CodeSystem
     */
    public ValueSet createValueSetFromEntireCodeSystem(String valueSetUrl, String name, 
                                                    String description, String codeSystemUrl) {
        
        ValueSet valueSet = new ValueSet();
        valueSet.setUrl(valueSetUrl);
        valueSet.setName(name);
        valueSet.setDescription(description);
        valueSet.setStatus(Enumerations.PublicationStatus.ACTIVE);
        valueSet.setDate(new Date());
        
        // Tạo include criteria cho toàn bộ code system
        ValueSet.ValueSetComposeComponent compose = valueSet.setCompose(new ValueSet.ValueSetComposeComponent());
        ValueSet.ConceptSetComponent include = compose.addInclude();
        include.setSystem(codeSystemUrl);
        
        // Lưu ValueSet
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(valueSet)
                    .execute();
            
            if (outcome.getResource() != null) {
                ValueSet createdValueSet = (ValueSet) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadValueSet(createdValueSet);
                
                return createdValueSet;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create ValueSet: " + e.getMessage(), e);
        }
        
        return null;
    }
}
```

#### 3. Service để quản lý ConceptMap

```java
@Service
public class ConceptMapManagementService {

    private final IGenericClient fhirClient;
    private final FhirContext fhirContext;
    private final TerminologyServiceBean terminologyService;
    
    public ConceptMapManagementService(IGenericClient fhirClient, 
                                     FhirContext fhirContext,
                                     TerminologyServiceBean terminologyService) {
        this.fhirClient = fhirClient;
        this.fhirContext = fhirContext;
        this.terminologyService = terminologyService;
    }
    
    /**
     * Tạo ConceptMap mới
     */
    public ConceptMap createConceptMap(String url, String name, String description,
                                     String sourceValueSetUrl, String targetValueSetUrl) {
        
        ConceptMap conceptMap = new ConceptMap();
        conceptMap.setUrl(url);
        conceptMap.setName(name);
        conceptMap.setDescription(description);
        conceptMap.setStatus(Enumerations.PublicationStatus.ACTIVE);
        conceptMap.setDate(new Date());
        
        // Thiết lập source và target
        conceptMap.setSourceScope(new CanonicalType(sourceValueSetUrl));
        conceptMap.setTargetScope(new CanonicalType(targetValueSetUrl));
        
        // Lưu ConceptMap
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(conceptMap)
                    .execute();
            
            if (outcome.getResource() != null) {
                ConceptMap createdMap = (ConceptMap) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadConceptMap(createdMap);
                
                return createdMap;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create ConceptMap: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Thêm mapping vào ConceptMap
     */
    public ConceptMap addMappingToConceptMap(String conceptMapUrl, MappingDto mappingDto) {
        // Tìm ConceptMap
        ConceptMap conceptMap = findConceptMapByUrl(conceptMapUrl);
        
        if (conceptMap == null) {
            throw new ResourceNotFoundException("ConceptMap not found: " + conceptMapUrl);
        }
        
        // Tìm group phù hợp hoặc tạo mới
        ConceptMap.ConceptMapGroupComponent group = null;
        
        for (ConceptMap.ConceptMapGroupComponent existingGroup : conceptMap.getGroup()) {
            if (existingGroup.getSource().equals(mappingDto.getSourceSystem()) &&
                existingGroup.getTarget().equals(mappingDto.getTargetSystem())) {
                group = existingGroup;
                break;
            }
        }
        
        if (group == null) {
            group = conceptMap.addGroup();
            group.setSource(mappingDto.getSourceSystem());
            group.setTarget(mappingDto.getTargetSystem());
        }
        
        // Tìm element phù hợp hoặc tạo mới
        ConceptMap.SourceElementComponent element = null;
        
        for (ConceptMap.SourceElementComponent existingElement : group.getElement()) {
            if (existingElement.getCode().equals(mappingDto.getSourceCode())) {
                element = existingElement;
                break;
            }
        }
        
        if (element == null) {
            element = group.addElement();
            element.setCode(mappingDto.getSourceCode());
            
            // Thêm display nếu có
            if (mappingDto.getSourceDisplay() != null) {
                element.setDisplay(mappingDto.getSourceDisplay());
            }
        }
        
        // Thêm target mới
        ConceptMap.TargetElementComponent target = element.addTarget();
        target.setCode(mappingDto.getTargetCode());
        
        if (mappingDto.getTargetDisplay() != null) {
            target.setDisplay(mappingDto.getTargetDisplay());
        }
        
        // Set equivalence
        ConceptMap.ConceptMapEquivalence equivalence;
        try {
            equivalence = ConceptMap.ConceptMapEquivalence.fromCode(mappingDto.getEquivalence());
        } catch (Exception e) {
            // Default to equal if invalid
            equivalence = ConceptMap.ConceptMapEquivalence.EQUAL;
        }
        target.setEquivalence(equivalence);
        
        // Cập nhật ConceptMap
        try {
            MethodOutcome outcome = fhirClient.update()
                    .resource(conceptMap)
                    .execute();
            
            if (outcome.getResource() != null) {
                ConceptMap updatedMap = (ConceptMap) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadConceptMap(updatedMap);
                
                return updatedMap;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to update ConceptMap: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Tìm kiếm ConceptMap theo URL
     */
    public ConceptMap findConceptMapByUrl(String url) {
        try {
            Bundle bundle = fhirClient.search()
                    .forResource(ConceptMap.class)
                    .where(ConceptMap.URL.matches().value(url))
                    .returnBundle(Bundle.class)
                    .execute();
            
            if (!bundle.getEntry().isEmpty()) {
                return (ConceptMap) bundle.getEntryFirstRep().getResource();
            }
        } catch (Exception e) {
            // Xử lý lỗi
        }
        
        return null;
    }
    
    /**
     * Nhập ConceptMap từ file CSV
     */
    public ConceptMap importConceptMapFromCsv(String url, String name, String description,
                                            String sourceValueSetUrl, String targetValueSetUrl,
                                            InputStream csvData) throws IOException {
        
        BufferedReader reader = new BufferedReader(new InputStreamReader(csvData));
        
        ConceptMap conceptMap = new ConceptMap();
        conceptMap.setUrl(url);
        conceptMap.setName(name);
        conceptMap.setDescription(description);
        conceptMap.setStatus(Enumerations.PublicationStatus.ACTIVE);
        conceptMap.setDate(new Date());
        
        // Thiết lập source và target
        conceptMap.setSourceScope(new CanonicalType(sourceValueSetUrl));
        conceptMap.setTargetScope(new CanonicalType(targetValueSetUrl));
        
        // Map để theo dõi các group
        Map<String, Map<String, ConceptMap.ConceptMapGroupComponent>> groupMap = new HashMap<>();
        
        // Đọc header
        String line = reader.readLine();
        if (line == null) {
            throw new IllegalArgumentException("Empty CSV file");
        }
        
        // Format mong đợi: sourceSystem,sourceCode,sourceDisplay,targetSystem,targetCode,targetDisplay,equivalence
        
        // Đọc dữ liệu
        while ((line = reader.readLine()) != null) {
            String[] values = line.split(",");
            
            if (values.length >= 5) {
                String sourceSystem = values[0].trim();
                String sourceCode = values[1].trim();
                String sourceDisplay = values.length > 2 ? values[2].trim() : null;
                String targetSystem = values[3].trim();
                String targetCode = values[4].trim();
                String targetDisplay = values.length > 5 ? values[5].trim() : null;
                String equivalence = values.length > 6 ? values[6].trim() : "equivalent";
                
                // Tìm hoặc tạo group
                Map<String, ConceptMap.ConceptMapGroupComponent> targetGroups = 
                        groupMap.computeIfAbsent(sourceSystem, k -> new HashMap<>());
                
                ConceptMap.ConceptMapGroupComponent group = targetGroups.get(targetSystem);
                if (group == null) {
                    group = conceptMap.addGroup();
                    group.setSource(sourceSystem);
                    group.setTarget(targetSystem);
                    targetGroups.put(targetSystem, group);
                }
                
                // Tìm element phù hợp hoặc tạo mới
                ConceptMap.SourceElementComponent element = null;
                
                for (ConceptMap.SourceElementComponent existingElement : group.getElement()) {
                    if (existingElement.getCode().equals(sourceCode)) {
                        element = existingElement;
                        break;
                    }
                }
                
                if (element == null) {
                    element = group.addElement();
                    element.setCode(sourceCode);
                    
                    if (sourceDisplay != null && !sourceDisplay.isEmpty()) {
                        element.setDisplay(sourceDisplay);
                    }
                }
                
                // Thêm target
                ConceptMap.TargetElementComponent target = element.addTarget();
                target.setCode(targetCode);
                
                if (targetDisplay != null && !targetDisplay.isEmpty()) {
                    target.setDisplay(targetDisplay);
                }
                
                // Set equivalence
                try {
                    ConceptMap.ConceptMapEquivalence equiv = 
                            ConceptMap.ConceptMapEquivalence.fromCode(equivalence.toLowerCase());
                    target.setEquivalence(equiv);
                } catch (Exception e) {
                    // Default to equal if invalid
                    target.setEquivalence(ConceptMap.ConceptMapEquivalence.EQUAL);
                }
            }
        }
        
        // Lưu ConceptMap
        try {
            MethodOutcome outcome = fhirClient.create()
                    .resource(conceptMap)
                    .execute();
            
            if (outcome.getResource() != null) {
                ConceptMap createdMap = (ConceptMap) outcome.getResource();
                
                // Upload vào terminology service
                terminologyService.uploadConceptMap(createdMap);
                
                return createdMap;
            }
        } catch (Exception e) {
            // Xử lý lỗi
            throw new RuntimeException("Failed to create ConceptMap: " + e.getMessage(), e);
        }
        
        return null;
    }
    
    /**
     * Thực hiện dịch một mã từ hệ thống này sang hệ thống khác
     */
    public List<Coding> translateConcept(String conceptMapUrl, String code, String system) {
        Coding sourceCoding = new Coding()
                .setSystem(system)
                .setCode(code);
        
        return terminologyService.translateCoding(conceptMapUrl, sourceCoding);
    }
    
    public static class MappingDto {
        private String sourceSystem;
        private String sourceCode;
        private String sourceDisplay;
        private String targetSystem;
        private String targetCode;
        private String targetDisplay;
        private String equivalence;
        
        // Getters and setters
        public String getSourceSystem() { return sourceSystem; }
        public void setSourceSystem(String sourceSystem) { this.sourceSystem = sourceSystem; }
        
        public String getSourceCode() { return sourceCode; }
        public void setSourceCode(String sourceCode) { this.sourceCode = sourceCode; }
        
        public String getSourceDisplay() { return sourceDisplay; }
        public void setSourceDisplay(String sourceDisplay) { this.sourceDisplay = sourceDisplay; }
        
        public String getTargetSystem() { return targetSystem; }
        public void setTargetSystem(String targetSystem) { this.targetSystem = targetSystem; }
        
        public String getTargetCode() { return targetCode; }
        public void setTargetCode(String targetCode) { this.targetCode = targetCode; }
        
        public String getTargetDisplay() { return targetDisplay; }
        public void setTargetDisplay(String targetDisplay) { this.targetDisplay = targetDisplay; }
        
        public String getEquivalence() { return equivalence; }
        public void setEquivalence(String equivalence) { this.equivalence = equivalence; }
    }
}
```

### Tích hợp Terminology với UI

Để làm các ứng dụng y tế dễ sử dụng hơn, bạn có thể tích hợp chức năng tìm kiếm và lựa chọn thuật ngữ vào UI. Dưới đây là các API REST để tích hợp với ReactJS frontend:

```java
@RestController
@RequestMapping("/api/terminology")
public class TerminologyUIController {

    private final ValueSetManagementService valueSetService;
    private final CodeSystemManagementService codeSystemService;
    private final ConceptMapManagementService conceptMapService;
    private final TerminologyServiceBean terminologyService;
    
    public TerminologyUIController(ValueSetManagementService valueSetService,
                                 CodeSystemManagementService codeSystemService,
                                 ConceptMapManagementService conceptMapService,
                                 TerminologyServiceBean terminologyService) {
        this.valueSetService = valueSetService;
        this.codeSystemService = codeSystemService;
        this.conceptMapService = conceptMapService;
        this.terminologyService = terminologyService;
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<CodingDto>> searchConcepts(
            @RequestParam String valueSetUrl,
            @RequestParam String searchText) {
        
        List<Coding> codings = terminologyService.findConcepts(valueSetUrl, searchText);
        
        List<CodingDto> results = codings.stream()
                .map(coding -> new CodingDto(
                        coding.getSystem(),
                        coding.getCode(),
                        coding.getDisplay()))
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/diagnoses/search")
    public ResponseEntity<List<CodingDto>> searchDiagnoses(@RequestParam String searchText) {
        // ValueSet URL cho ICD-10
        final String ICD10_VALUESET_URL = "http://hl7.org/fhir/ValueSet/icd10";
        
        List<Coding> codings = terminologyService.findConcepts(ICD10_VALUESET_URL, searchText);
        
        List<CodingDto> results = codings.stream()
                .map(coding -> new CodingDto(
                        coding.getSystem(),
                        coding.getCode(),
                        coding.getDisplay()))
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/procedures/search")
    public ResponseEntity<List<CodingDto>> searchProcedures(@RequestParam String searchText) {
        // ValueSet URL cho SNOMED CT Procedures
        final String SNOMED_PROCEDURES_VALUESET_URL = "http://snomed.info/sct?fhir_vs=ecl/<<71388002";
        
        List<Coding> codings = terminologyService.findConcepts(SNOMED_PROCEDURES_VALUESET_URL, searchText);
        
        List<CodingDto> results = codings.stream()
                .map(coding -> new CodingDto(
                        coding.getSystem(),
                        coding.getCode(),
                        coding.getDisplay()))
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/medications/search")
    public ResponseEntity<List<CodingDto>> searchMedications(@RequestParam String searchText) {
        // ValueSet URL cho RxNorm
        final String RXNORM_VALUESET_URL = "http://www.nlm.nih.gov/research/umls/rxnorm/vs";
        
        List<Coding> codings = terminologyService.findConcepts(RXNORM_VALUESET_URL, searchText);
        
        List<CodingDto> results = codings.stream()
                .map(coding -> new CodingDto(
                        coding.getSystem(),
                        coding.getCode(),
                        coding.getDisplay()))
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/lab-tests/search")
    public ResponseEntity<List<CodingDto>> searchLabTests(@RequestParam String searchText) {
        // ValueSet URL cho LOINC
        final String LOINC_VALUESET_URL = "http://loinc.org/vs";
        
        List<Coding> codings = terminologyService.findConcepts(LOINC_VALUESET_URL, searchText);
        
        List<CodingDto> results = codings.stream()
                .map(coding -> new CodingDto(
                        coding.getSystem(),
                        coding.getCode(),
                        coding.getDisplay()))
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/valuesets")
    public ResponseEntity<List<ValueSetDto>> getValueSets() {
        Bundle bundle = fhirClient.search()
                .forResource(ValueSet.class)
                .count(100)
                .returnBundle(Bundle.class)
                .execute();
        
        List<ValueSetDto> results = bundle.getEntry().stream()
                .map(entry -> {
                    ValueSet vs = (ValueSet) entry.getResource();
                    return new ValueSetDto(
                            vs.getUrl(),
                            vs.getName(),
                            vs.getDescription(),
                            vs.getVersion());
                })
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/codesystems")
    public ResponseEntity<List<CodeSystemDto>> getCodeSystems() {
        Bundle bundle = fhirClient.search()
                .forResource(CodeSystem.class)
                .count(100)
                .returnBundle(Bundle.class)
                .execute();
        
        List<CodeSystemDto> results = bundle.getEntry().stream()
                .map(entry -> {
                    CodeSystem cs = (CodeSystem) entry.getResource();
                    return new CodeSystemDto(
                            cs.getUrl(),
                            cs.getName(),
                            cs.getDescription(),
                            cs.getVersion());
                })
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/conceptmaps")
    public ResponseEntity<List<ConceptMapDto>> getConceptMaps() {
        Bundle bundle = fhirClient.search()
                .forResource(ConceptMap.class)
                .count(100)
                .returnBundle(Bundle.class)
                .execute();
        
        List<ConceptMapDto> results = bundle.getEntry().stream()
                .map(entry -> {
                    ConceptMap cm = (ConceptMap) entry.getResource();
                    return new ConceptMapDto(
                            cm.getUrl(),
                            cm.getName(),
                            cm.getDescription(),
                            cm.getSourceScope().getValue(),
                            cm.getTargetScope().getValue());
                })
                .collect(Collectors.toList());
        
        return ResponseEntity.ok(results);
    }
    
    // DTO classes
    public static class CodingDto {
        private String system;
        private String code;
        private String display;
        
        public CodingDto(String system, String code, String display) {
            this.system = system;
            this.code = code;
            this.display = display;
        }
        
        // Getters
        public String getSystem() { return system; }
        public String getCode() { return code; }
        public String getDisplay() { return display; }
    }
    
    public static class ValueSetDto {
        private String url;
        private String name;
        private String description;
        private String version;
        
        public ValueSetDto(String url, String name, String description, String version) {
            this.url = url;
            this.name = name;
            this.description = description;
            this.version = version;
        }
        
        // Getters
        public String getUrl() { return url; }
        public String getName() { return name; }
        public String getDescription() { return description; }
        public String getVersion() { return version; }
    }
    
    public static class CodeSystemDto {
        private String url;
        private String name;
        private String description;
        private String version;
        
        public CodeSystemDto(String url, String name, String description, String version) {
            this.url = url;
            this.name = name;
            this.description = description;
            this.version = version;
        }
        
        // Getters
        public String getUrl() { return url; }
        public String getName() { return name; }
        public String getDescription() { return description; }
        public String getVersion() { return version; }
    }
    
    public static class ConceptMapDto {
        private String url;
        private String name;
        private String description;
        private String sourceValueSet;
        private String targetValueSet;
        
        public ConceptMapDto(String url, String name, String description, 
                           String sourceValueSet, String targetValueSet) {
            this.url = url;
            this.name = name;
            this.description = description;
            this.sourceValueSet = sourceValueSet;
            this.targetValueSet = targetValueSet;
        }
        
        // Getters
        public String getUrl() { return url; }
        public String getName() { return name; }
        public String getDescription() { return description; }
        public String getSourceValueSet() { return sourceValueSet; }
        public String getTargetValueSet() { return targetValueSet; }
    }
}
```

### Component ReactJS để tích hợp với Terminology Service

Mẫu component React để sử dụng trong frontend:

```jsx
// DiagnosisSelector.jsx
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Spin } from 'antd';
import axios from 'axios';

const { Option } = Select;

const DiagnosisSelector = ({ value, onChange }) => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Search when text changes but only after 500ms delay
    const handler = setTimeout(() => {
      if (searchText.length >= 2) {
        searchDiagnoses(searchText);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  const searchDiagnoses = async (text) => {
    setLoading(true);
    try {
      const response = await axios.get('/api/terminology/diagnoses/search', {
        params: { searchText: text }
      });
      setOptions(response.data || []);
    } catch (error) {
      console.error('Error searching diagnoses:', error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (value) => {
    // Find the selected option
    const selectedOption = options.find(option => `${option.system}|${option.code}` === value);
    if (selectedOption) {
      onChange({
        system: selectedOption.system,
        code: selectedOption.code,
        display: selectedOption.display
      });
    }
  };

  return (
    <Select
      showSearch
      placeholder="Search for a diagnosis"
      defaultActiveFirstOption={false}
      suffixIcon={loading ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={setSearchText}
      onChange={handleSelect}
      notFoundContent={loading ? <Spin size="small" /> : "No diagnoses found"}
      style={{ width: '100%' }}
      value={value ? `${value.system}|${value.code}` : undefined}
    >
      {options.map(option => (
        <Option key={`${option.system}|${option.code}`} value={`${option.system}|${option.code}`}>
          {option.code} - {option.display}
        </Option>
      ))}
    </Select>
  );
};

export default DiagnosisSelector;
```

```jsx
// LabTestSelector.jsx
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Spin } from 'antd';
import axios from 'axios';

const { Option } = Select;

const LabTestSelector = ({ value, onChange }) => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Search when text changes but only after 500ms delay
    const handler = setTimeout(() => {
      if (searchText.length >= 2) {
        searchLabTests(searchText);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  const searchLabTests = async (text) => {
    setLoading(true);
    try {
      const response = await axios.get('/api/terminology/lab-tests/search', {
        params: { searchText: text }
      });
      setOptions(response.data || []);
    } catch (error) {
      console.error('Error searching lab tests:', error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (value) => {
    // Find the selected option
    const selectedOption = options.find(option => `${option.system}|${option.code}` === value);
    if (selectedOption) {
      onChange({
        system: selectedOption.system,
        code: selectedOption.code,
        display: selectedOption.display
      });
    }
  };

  return (
    <Select
      showSearch
      placeholder="Search for a lab test"
      defaultActiveFirstOption={false}
      suffixIcon={loading ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={setSearchText}
      onChange={handleSelect}
      notFoundContent={loading ? <Spin size="small" /> : "No lab tests found"}
      style={{ width: '100%' }}
      value={value ? `${value.system}|${value.code}` : undefined}
    >
      {options.map(option => (
        <Option key={`${option.system}|${option.code}`} value={`${option.system}|${option.code}`}>
          {option.code} - {option.display}
        </Option>
      ))}
    </Select>
  );
};

export default LabTestSelector;
```

### Xử lý và triển khai Terminology trong môi trường sản xuất

#### 1. Chiến lược preloading popular terminologies

Để cải thiện hiệu suất, bạn có thể triển khai service để preload các hệ thống mã phổ biến:

```java
@Service
public class TerminologyPreloadService {

    private final IGenericClient fhirClient;
    private final TerminologyServiceBean terminologyService;
    private static final Logger logger = LoggerFactory.getLogger(TerminologyPreloadService.class);
    
    @Value("${terminology.preload.enabled:true}")
    private boolean preloadEnabled;
    
    @Value("${terminology.preload.delay:5000}")
    private long preloadDelay;
    
    private final ExecutorService executorService = Executors.newSingleThreadExecutor();
    
    public TerminologyPreloadService(IGenericClient fhirClient, 
                                   TerminologyServiceBean terminologyService) {
        this.fhirClient = fhirClient;
        this.terminologyService = terminologyService;
    }
    
    @PostConstruct
    public void preloadTerminologies() {
        if (!preloadEnabled) {
            logger.info("Terminology preload is disabled");
            return;
        }
        
        // Delay preloading để không làm chậm khởi động ứng dụng
        executorService.submit(() -> {
            try {
                logger.info("Waiting {} ms before starting terminology preload", preloadDelay);
                Thread.sleep(preloadDelay);
                
                logger.info("Starting terminology preload");
                preloadCommonTerminologies();
                logger.info("Terminology preload completed");
            } catch (Exception e) {
                logger.error("Error during terminology preload", e);
            }
        });
    }
    
    private void preloadCommonTerminologies() {
        // Preload ICD-10
        try {
            logger.info("Preloading ICD-10 ValueSet");
            terminologyService.expandValueSet("http://hl7.org/fhir/ValueSet/icd10");
            logger.info("ICD-10 ValueSet preloaded successfully");
        } catch (Exception e) {
            logger.error("Error preloading ICD-10 ValueSet", e);
        }
        
        // Preload LOINC
        try {
            logger.info("Preloading LOINC ValueSet");
            terminologyService.expandValueSet("http://loinc.org/vs");
            logger.info("LOINC ValueSet preloaded successfully");
        } catch (Exception e) {
            logger.error("Error preloading LOINC ValueSet", e);
        }
        
        // Preload common SNOMED CT ValueSets
        try {
            logger.info("Preloading SNOMED CT Clinical Findings");
            terminologyService.expandValueSet("http://snomed.info/sct?fhir_vs=ecl/<<404684003");
            logger.info("SNOMED CT Clinical Findings preloaded successfully");
        } catch (Exception e) {
            logger.error("Error preloading SNOMED CT Clinical Findings", e);
        }
        
        // Preload RxNorm
        try {
            logger.info("Preloading RxNorm ValueSet");
            terminologyService.expandValueSet("http://www.nlm.nih.gov/research/umls/rxnorm/vs");
            logger.info("RxNorm ValueSet preloaded successfully");
        } catch (Exception e) {
            logger.error("Error preloading RxNorm ValueSet", e);
        }
    }
    
    @PreDestroy
    public void shutdown() {
        executorService.shutdown();
    }
}
```

#### 2. Performance Monitoring và Caching

```java
@Configuration
@EnableCaching
public class TerminologyCacheConfig {

    @Bean
    public CacheManager terminologyCacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        
        // Cấu hình các cache
        ConcurrentMapCache valueSetCache = new ConcurrentMapCache("valueSetCache", 
                CacheBuilder.newBuilder()
                        .expireAfterWrite(2, TimeUnit.HOURS)
                        .maximumSize(100)
                        .recordStats()
                        .build()
                        .asMap(),
                false);
        
        ConcurrentMapCache lookupCache = new ConcurrentMapCache("lookupCache", 
                CacheBuilder.newBuilder()
                        .expireAfterWrite(24, TimeUnit.HOURS)
                        .maximumSize(10000)
                        .recordStats()
                        .build()
                        .asMap(),
                false);
        
        ConcurrentMapCache translateCache = new ConcurrentMapCache("translateCache", 
                CacheBuilder.newBuilder()
                        .expireAfterWrite(12, TimeUnit.HOURS)
                        .maximumSize(5000)
                        .recordStats()
                        .build()
                        .asMap(),
                false);
        
        cacheManager.setCaches(Arrays.asList(valueSetCache, lookupCache, translateCache));
        return cacheManager;
    }
    
    @Bean
    public CacheMetricsCollector terminologyCacheMetrics(MeterRegistry registry) {
        CacheMetricsCollector collector = new CacheMetricsCollector();
        collector.register(registry);
        return collector;
    }
}

@Service
public class CachedTerminologyService {

    private final TerminologyServiceBean terminologyService;
    
    public CachedTerminologyService(TerminologyServiceBean terminologyService) {
        this.terminologyService = terminologyService;
    }
    
    @Cacheable(value = "valueSetCache", key = "#valueSetUrl + '|' + #filter")
    public List<Coding> findConcepts(String valueSetUrl, String filter) {
        return terminologyService.findConcepts(valueSetUrl, filter);
    }
    
    @Cacheable(value = "lookupCache", key = "#system + '|' + #code")
    public LookupCodeResult lookupCode(String code, String system) {
        return terminologyService.lookupCode(code, system);
    }
    
    @Cacheable(value = "translateCache", key = "#conceptMapUrl + '|' + #sourceCoding.system + '|' + #sourceCoding.code")
    public List<Coding> translateCoding(String conceptMapUrl, Coding sourceCoding) {
        return terminologyService.translateCoding(conceptMapUrl, sourceCoding);
    }
    
    @Cacheable(value = "valueSetCache", key = "#valueSetUrl")
    public List<Coding> expandValueSet(String valueSetUrl) {
        return terminologyService.expandValueSet(valueSetUrl);
    }
    
    @Cacheable(value = "valueSetCache", key = "'validate|' + #valueSetUrl + '|' + #system + '|' + #code")
    public boolean validateCode(String valueSetUrl, String code, String system) {
        return terminologyService.validateCode(valueSetUrl, code, system);
    }
}
```

### Kết luận

Thư viện `hapi-fhir-terminology` cung cấp một nền tảng mạnh mẽ để quản lý và sử dụng thuật ngữ y tế trong các ứng dụng FHIR. Việc tích hợp đúng cách sẽ giúp cải thiện khả năng tương tác giữa các hệ thống, đảm bảo tính nhất quán dữ liệu và nâng cao trải nghiệm người dùng.

Những lợi ích chính khi sử dụng HAPI FHIR Terminology:

1. **Mã hóa dữ liệu chuẩn hóa**: Sử dụng các hệ thống mã chuẩn như SNOMED CT, LOINC, ICD-10 giúp đảm bảo tính nhất quán và khả năng trao đổi dữ liệu.
2. **Tìm kiếm trực quan**: Hỗ trợ tìm kiếm các thuật ngữ y tế phức tạp thông qua các ValueSet và CodeSystem.
3. **Ánh xạ giữa các hệ thống mã hóa**: Khả năng chuyển đổi mã giữa các hệ thống khác nhau (ví dụ: từ ICD-10 sang SNOMED CT).
4. **Quản lý thuật ngữ linh hoạt**: Hỗ trợ tạo và quản lý các CodeSystem, ValueSet và ConceptMap tùy chỉnh.
5. **Tích hợp UI thân thiện**: Tạo trải nghiệm người dùng tốt hơn với các component lựa chọn thuật ngữ.
6. **Khả năng mở rộng**: Hỗ trợ kết nối với các terminology server bên ngoài để truy cập vào kho thuật ngữ lớn hơn.

Trong thời đại y tế số hiện đại, việc quản lý thuật ngữ hiệu quả là nền tảng quan trọng cho các hệ thống y tế thông minh, cá nhân hóa và tương thích. HAPI FHIR Terminology cung cấp các công cụ cần thiết để đạt được mục tiêu này trong môi trường Spring Boot.

### Tài nguyên bổ sung

* [HAPI FHIR Documentation](https://hapifhir.io/hapi-fhir/docs/)
* [HL7 FHIR Terminology Module](https://www.hl7.org/fhir/terminology-module.html)
* [SNOMED International](https://www.snomed.org/)
* [LOINC](https://loinc.org/)
* [VSAC - Value Set Authority Center](https://vsac.nlm.nih.gov/)
* [Ontoserver](https://ontoserver.csiro.au/)
