---
id: 2d742e3e-2b2c-41aa-a641-85ac69c600d4
title: 'hapi-fhir-validation-resources'
slug: hapi-fhir-validation-resources
description: 'hapifhirvalidationresources là thư viện cung cấp các tài nguyên cần thiết cho việc validation FHIR resources, bao gồm các StructureDefinition, ValueSet, CodeSystem và các tài nguyên terminologies khác. Thư viện này đóng…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 19
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
`hapi-fhir-validation-resources` là thư viện cung cấp các tài nguyên cần thiết cho việc validation FHIR resources, bao gồm các StructureDefinition, ValueSet, CodeSystem và các tài nguyên terminologies khác. Thư viện này đóng vai trò quan trọng trong việc đảm bảo tính chính xác và tuân thủ của dữ liệu FHIR trong ứng dụng y tế.

### Các tính năng chính

#### 1. Cung cấp tài nguyên validation chuẩn

Thư viện cung cấp các tài nguyên validation chuẩn theo đặc tả FHIR R5, bao gồm:

* Các StructureDefinition cho tất cả resource types
* ValueSets và CodeSystems tiêu chuẩn
* Các datatypes và extensions định nghĩa trong FHIR R5

#### 2. Hỗ trợ nhiều profiles

* Profiles tiêu chuẩn từ HL7 FHIR
* Profiles quốc tế (ví dụ: US Core, AU Base, UK Core)
* Khả năng nạp và sử dụng profiles tùy chỉnh

#### 3. Tích hợp với HAPI FHIR Validator

* Cung cấp các tài nguyên cần thiết cho `FhirInstanceValidator`
* Tích hợp liền mạch với `ValidationSupportChain`
* Hỗ trợ cả validation offline và trực tuyến

### Cài đặt và cấu hình

#### Thêm dependency vào Maven project

```xml
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-validation-resources-r5</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### Cấu hình cơ bản với Spring Boot

```java
@Configuration
public class FhirValidationConfig {

    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }

    @Bean
    public DefaultProfileValidationSupport defaultProfileValidationSupport() {
        return new DefaultProfileValidationSupport(fhirContext());
    }

    @Bean
    public PrePopulatedValidationSupport prePopulatedValidationSupport() {
        PrePopulatedValidationSupport validationSupport = new PrePopulatedValidationSupport(fhirContext());
        // Có thể thêm các resource tùy chỉnh ở đây
        return validationSupport;
    }

    @Bean
    public InMemoryTerminologyServerValidationSupport terminologyServerValidationSupport() {
        return new InMemoryTerminologyServerValidationSupport(fhirContext());
    }

    @Bean
    public ValidationSupportChain validationSupportChain() {
        ValidationSupportChain validationSupportChain = new ValidationSupportChain(
            defaultProfileValidationSupport(),
            prePopulatedValidationSupport(),
            terminologyServerValidationSupport()
        );
        return validationSupportChain;
    }

    @Bean
    public FhirInstanceValidator fhirInstanceValidator() {
        FhirInstanceValidator validator = new FhirInstanceValidator(validationSupportChain());
        return validator;
    }
    
    @Bean
    public FhirValidator fhirValidator() {
        FhirValidator validator = fhirContext().newValidator();
        validator.registerValidatorModule(fhirInstanceValidator());
        return validator;
    }
}
```

### Ví dụ sử dụng

#### Validation cơ bản

```java
@Service
public class FhirValidationService {

    private final FhirValidator validator;
    private final FhirContext fhirContext;

    public FhirValidationService(FhirValidator validator, FhirContext fhirContext) {
        this.validator = validator;
        this.fhirContext = fhirContext;
    }

    public ValidationResult validateResource(IBaseResource resource) {
        return validator.validateWithResult(resource);
    }

    public ValidationResult validateResourceAgainstProfile(IBaseResource resource, String profileUrl) {
        ValidationOptions options = new ValidationOptions();
        options.addProfileForValidation(profileUrl);
        return validator.validateWithResult(resource, options);
    }

    public ValidationResult validateJsonResource(String jsonResource) {
        IBaseResource resource = fhirContext.newJsonParser().parseResource(jsonResource);
        return validator.validateWithResult(resource);
    }
    
    public boolean isValid(IBaseResource resource) {
        ValidationResult result = validator.validateWithResult(resource);
        return result.isSuccessful();
    }
    
    public List<SingleValidationMessage> getValidationErrors(IBaseResource resource) {
        ValidationResult result = validator.validateWithResult(resource);
        return result.getMessages().stream()
            .filter(m -> m.getSeverity() == ResultSeverityEnum.ERROR)
            .collect(Collectors.toList());
    }
}
```

#### Ví dụ tích hợp với REST API

```java
@RestController
@RequestMapping("/api/validation")
public class ValidationController {

    private final FhirValidationService validationService;
    private final FhirContext fhirContext;

    public ValidationController(FhirValidationService validationService, FhirContext fhirContext) {
        this.validationService = validationService;
        this.fhirContext = fhirContext;
    }

    @PostMapping("/patient")
    public ResponseEntity<?> validatePatient(@RequestBody String patientJson) {
        try {
            Patient patient = fhirContext.newJsonParser().parseResource(Patient.class, patientJson);
            ValidationResult result = validationService.validateResource(patient);
            
            if (result.isSuccessful()) {
                return ResponseEntity.ok(Map.of("valid", true));
            } else {
                List<Map<String, Object>> issues = result.getMessages().stream()
                    .map(msg -> Map.of(
                        "severity", msg.getSeverity().name(),
                        "location", msg.getLocationString(),
                        "message", msg.getMessage()
                    ))
                    .collect(Collectors.toList());
                
                return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
                    .body(Map.of(
                        "valid", false,
                        "issues", issues
                    ));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(Map.of(
                    "valid", false,
                    "error", "Failed to parse resource: " + e.getMessage()
                ));
        }
    }

    @PostMapping("/patient/profile/{profileName}")
    public ResponseEntity<?> validatePatientAgainstProfile(
            @RequestBody String patientJson,
            @PathVariable String profileName) {
        
        String profileUrl;
        switch (profileName) {
            case "basic":
                profileUrl = "http://hl7.org/fhir/StructureDefinition/Patient";
                break;
            case "uscore":
                profileUrl = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient";
                break;
            default:
                return ResponseEntity.badRequest().body("Unknown profile: " + profileName);
        }
        
        try {
            Patient patient = fhirContext.newJsonParser().parseResource(Patient.class, patientJson);
            ValidationResult result = validationService.validateResourceAgainstProfile(patient, profileUrl);
            
            if (result.isSuccessful()) {
                return ResponseEntity.ok(Map.of("valid", true));
            } else {
                List<Map<String, Object>> issues = result.getMessages().stream()
                    .map(msg -> Map.of(
                        "severity", msg.getSeverity().name(),
                        "location", msg.getLocationString(),
                        "message", msg.getMessage()
                    ))
                    .collect(Collectors.toList());
                
                return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
                    .body(Map.of(
                        "valid", false,
                        "profile", profileUrl,
                        "issues", issues
                    ));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(Map.of(
                    "valid", false,
                    "error", "Failed to parse resource: " + e.getMessage()
                ));
        }
    }
}
```

### Tùy chỉnh validation

#### Nạp profiles tùy chỉnh

```java
@Component
public class CustomProfileLoader {

    private final FhirContext fhirContext;
    private final PrePopulatedValidationSupport validationSupport;
    
    public CustomProfileLoader(
            FhirContext fhirContext,
            PrePopulatedValidationSupport validationSupport) {
        this.fhirContext = fhirContext;
        this.validationSupport = validationSupport;
    }
    
    @PostConstruct
    public void loadProfiles() {
        try {
            // Nạp StructureDefinition
            IParser parser = fhirContext.newJsonParser();
            
            // Đọc profile từ file
            String profileJson = Files.readString(Paths.get("path/to/custom-patient-profile.json"));
            StructureDefinition profile = parser.parseResource(StructureDefinition.class, profileJson);
            
            // Thêm vào validation support
            validationSupport.addStructureDefinition(profile);
            
            // Nạp ValueSet
            String valueSetJson = Files.readString(Paths.get("path/to/custom-valueset.json"));
            ValueSet valueSet = parser.parseResource(ValueSet.class, valueSetJson);
            validationSupport.addValueSet(valueSet);
            
            // Nạp CodeSystem
            String codeSystemJson = Files.readString(Paths.get("path/to/custom-codesystem.json"));
            CodeSystem codeSystem = parser.parseResource(CodeSystem.class, codeSystemJson);
            validationSupport.addCodeSystem(codeSystem);
            
        } catch (Exception e) {
            throw new RuntimeException("Error loading custom profiles", e);
        }
    }
}
```

#### Tạo custom validation module

```java
@Component
public class CustomPatientValidator implements IValidatorModule {
    
    @Override
    public ValidationResult validateResource(IBaseResource resource) {
        List<SingleValidationMessage> messages = new ArrayList<>();
        
        // Kiểm tra chỉ áp dụng cho Patient resources
        if (resource instanceof Patient) {
            Patient patient = (Patient) resource;
            
            // Kiểm tra quy tắc tùy chỉnh: tên phải có ít nhất 2 từ
            if (patient.hasName() && patient.getNameFirstRep().hasGiven()) {
                String givenName = patient.getNameFirstRep().getGivenAsSingleString();
                if (givenName.split(" ").length < 2) {
                    SingleValidationMessage message = new SingleValidationMessage();
                    message.setLocationString("Patient.name.given");
                    message.setSeverity(ResultSeverityEnum.WARNING);
                    message.setMessage("Given name should have at least 2 words for Vietnamese patients");
                    messages.add(message);
                }
            }
            
            // Kiểm tra yêu cầu về địa chỉ
            if (patient.hasAddress() && !patient.getAddressFirstRep().hasCity()) {
                SingleValidationMessage message = new SingleValidationMessage();
                message.setLocationString("Patient.address");
                message.setSeverity(ResultSeverityEnum.ERROR);
                message.setMessage("Address must include city");
                messages.add(message);
            }
        }
        
        return new ValidationResult(messages);
    }
}
```

#### Đăng ký custom validator

```java
@Configuration
public class CustomValidationConfig {

    @Bean
    public CustomPatientValidator customPatientValidator() {
        return new CustomPatientValidator();
    }
    
    @Bean
    public FhirValidator fhirValidatorWithCustomModules(
            FhirContext fhirContext, 
            FhirInstanceValidator instanceValidator,
            CustomPatientValidator customPatientValidator) {
        FhirValidator validator = fhirContext.newValidator();
        validator.registerValidatorModule(instanceValidator);
        validator.registerValidatorModule(customPatientValidator);
        return validator;
    }
}
```

### Bài tập thực hành cho Khóa học

#### Bài tập 1: Xây dựng Validation Service

Xây dựng một service để validation các FHIR resources theo yêu cầu của hệ thống y tế Việt Nam:

1. Validation Patient resource với các quy tắc:
   * Họ và tên phải có đầy đủ
   * Mã định danh phải là CMND/CCCD hoặc Hộ chiếu
   * Địa chỉ phải có đầy đủ thông tin: số nhà, đường phố, phường/xã, quận/huyện, tỉnh/thành phố
   * Số điện thoại phải theo định dạng Việt Nam
2. Validation Observation resource với các quy tắc:
   * Phải có reference đến Patient
   * Code phải có trong hệ thống mã LOINC hoặc SNOMED CT
   * Effective time phải có giá trị
   * Các chỉ số sinh hiệu phải nằm trong ngưỡng bình thường

#### Bài tập 2: Tạo Custom Profile

Tạo custom profile cho Patient resource dành riêng cho bệnh nhân Việt Nam:

1. Sử dụng FHIR Profiler hoặc Forge để tạo profile
2. Định nghĩa các extension cho:
   * Mã BHYT
   * Dân tộc
   * Nơi sinh
   * Nghề nghiệp theo danh mục Việt Nam
3. Áp dụng các ràng buộc (constraints) phù hợp
4. Nạp profile vào hệ thống và validation

#### Bài tập 3: Xây dựng REST API cho Validation

Xây dựng REST API để client có thể gửi resources để validation:

1. Endpoint cho validation resource theo profile tiêu chuẩn
2. Endpoint cho validation resource theo profile tùy chỉnh
3. Endpoint để liệt kê các profile có sẵn trong hệ thống
4. Xử lý và trả về kết quả validation theo định dạng chuẩn

### Kết luận

HAPI FHIR Validation Resources là một thành phần quan trọng trong việc đảm bảo tính chính xác và tuân thủ của dữ liệu FHIR trong ứng dụng y tế. Thông qua validation, bạn có thể:

* Đảm bảo dữ liệu tuân thủ tiêu chuẩn FHIR R5
* Áp dụng các quy tắc nghiệp vụ đặc thù cho hệ thống y tế Việt Nam
* Tạo và sử dụng các profile tùy chỉnh cho các use cases cụ thể
* Xác thực dữ liệu trước khi lưu trữ hoặc trao đổi với các hệ thống khác

Trong các module tiếp theo của khóa học, chúng ta sẽ đi sâu hơn vào cách sử dụng validation trong các flows nghiệp vụ cụ thể và tích hợp với các thành phần khác của hệ thống.
