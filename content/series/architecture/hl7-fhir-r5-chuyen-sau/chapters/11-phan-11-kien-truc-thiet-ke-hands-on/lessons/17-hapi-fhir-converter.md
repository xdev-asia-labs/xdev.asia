---
id: 3ae4f876-a1c7-42d4-9242-e297ef529f34
title: 'hapi-fhir-converter'
slug: hapi-fhir-converter
description: 'hapifhirconverter là một thành phần quan trọng trong hệ sinh thái HAPI FHIR, được thiết kế đặc biệt để chuyển đổi dữ liệu giữa các phiên bản FHIR khác nhau (R2/DSTU2, R3/STU3, R4, R4B và R5) cũng như chuyển đổi giữa…'
duration_minutes: 25
is_free: true
video_url: null
sort_order: 17
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
`hapi-fhir-converter` là một thành phần quan trọng trong hệ sinh thái HAPI FHIR, được thiết kế đặc biệt để chuyển đổi dữ liệu giữa các phiên bản FHIR khác nhau (R2/DSTU2, R3/STU3, R4, R4B và R5) cũng như chuyển đổi giữa FHIR và các định dạng y tế khác. Trong bối cảnh các hệ thống y tế có thể sử dụng các phiên bản FHIR khác nhau và cần tương tác với các hệ thống legacy, công cụ chuyển đổi này đóng vai trò thiết yếu trong việc đảm bảo tính tương tác liền mạch.

Module này giải quyết một trong những thách thức lớn trong việc triển khai FHIR - làm thế nào để kết nối các hệ thống sử dụng các phiên bản FHIR khác nhau hoặc chuyển đổi từ các định dạng cũ (như HL7 v2, CDA) sang FHIR.

### Kiến trúc và Thành phần

#### 1. Cấu trúc cốt lõi

`hapi-fhir-converter` được xây dựng theo kiến trúc module với các thành phần chính:

* **VersionConverterInterceptor**: Interceptor để chuyển đổi tự động giữa các phiên bản FHIR
* **ResourceConverter**: Interface chính định nghĩa API chuyển đổi
* **BaseVersionConverterService**: Triển khai chung của service chuyển đổi
* **VersionTypeConverter**: Xử lý chuyển đổi các kiểu dữ liệu cụ thể
* **HL7v2Converter**: Chuyển đổi từ HL7v2 sang FHIR
* **CDAConverter**: Chuyển đổi từ CDA sang FHIR

```java
// Ví dụ cấu trúc VersionConverterInterceptor
@Interceptor
public class VersionConverterInterceptor {
    
    private IVersionConverterService converterService;
    private FhirContext targetContext;
    
    public VersionConverterInterceptor(FhirContext targetContext) {
        this.targetContext = targetContext;
        this.converterService = new VersionConverterService(targetContext);
    }
    
    @Hook(Pointcut.SERVER_INCOMING_REQUEST_POST_PROCESSED)
    public void incomingRequestPostProcessed(RequestDetails requestDetails) {
        IBaseResource resource = requestDetails.getResource();
        if (resource != null) {
            // Chuyển đổi resource đến phiên bản mục tiêu
            IBaseResource converted = converterService.convertResource(resource);
            requestDetails.setResource(converted);
        }
    }
    
    @Hook(Pointcut.SERVER_OUTGOING_RESPONSE)
    public void outgoingResponse(RequestDetails requestDetails, ResponseDetails responseDetails) {
        IBaseResource resource = responseDetails.getResponseResource();
        if (resource != null) {
            // Chuyển đổi resource để phù hợp với yêu cầu client
            FhirVersionEnum requestedVersion = determineRequestedVersion(requestDetails);
            IBaseResource converted = converterService.convertResourceToVersion(resource, requestedVersion);
            responseDetails.setResponseResource(converted);
        }
    }
    
    private FhirVersionEnum determineRequestedVersion(RequestDetails requestDetails) {
        // Logic xác định phiên bản yêu cầu từ client
        // Có thể từ header, parameter, hoặc endpoint URL
        return FhirVersionEnum.R4;
    }
}
```

#### 2. Bản đồ chuyển đổi

Một phần quan trọng của `hapi-fhir-converter` là các bản đồ chuyển đổi tùy chỉnh giữa các phiên bản:

```java
@Component
public class StructureMapRegistry {
    
    private Map<String, StructureMap> structureMaps = new HashMap<>();
    
    @PostConstruct
    public void loadMaps() {
        // Tải các StructureMap từ file
        loadMapFromFile("Patient_R4_to_R5.map");
        loadMapFromFile("Observation_R4_to_R5.map");
        // Thêm các map khác
    }
    
    public StructureMap getMap(String sourceType, FhirVersionEnum sourceVersion, FhirVersionEnum targetVersion) {
        String key = sourceType + "_" + sourceVersion + "_to_" + targetVersion;
        return structureMaps.get(key);
    }
    
    private void loadMapFromFile(String filename) {
        try {
            InputStream is = getClass().getResourceAsStream("/maps/" + filename);
            if (is != null) {
                String mapContent = IOUtils.toString(is, StandardCharsets.UTF_8);
                FhirContext ctx = FhirContext.forR5();
                IBaseResource resource = ctx.newJsonParser().parseResource(mapContent);
                if (resource instanceof StructureMap) {
                    StructureMap map = (StructureMap) resource;
                    String key = extractMapKey(map);
                    structureMaps.put(key, map);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Error loading structure map: " + filename, e);
        }
    }
    
    private String extractMapKey(StructureMap map) {
        String sourceType = map.getStructure().get(0).getUrl();
        String targetType = map.getStructure().get(1).getUrl();
        return sourceType + "_to_" + targetType;
    }
}
```

### Tính năng chính

#### 1. Chuyển đổi giữa các phiên bản FHIR

Chức năng cốt lõi của `hapi-fhir-converter` là chuyển đổi resources giữa các phiên bản FHIR khác nhau:

```java
// Ví dụ: Chuyển đổi Patient từ R4 sang R5
public class VersionConverterExample {
    public static void main(String[] args) {
        // Tạo Patient R4
        FhirContext ctxR4 = FhirContext.forR4();
        org.hl7.fhir.r4.model.Patient patientR4 = new org.hl7.fhir.r4.model.Patient();
        patientR4.addName().setFamily("Smith").addGiven("John");
        patientR4.setGender(org.hl7.fhir.r4.model.Enumerations.AdministrativeGender.MALE);
        patientR4.setBirthDate(new Date());
        
        // Chuyển đổi sang R5
        FhirContext ctxR5 = FhirContext.forR5();
        IVersionConverterService converterService = new VersionConverterService(ctxR5);
        org.hl7.fhir.r5.model.Patient patientR5 = (org.hl7.fhir.r5.model.Patient)
                converterService.convertResource(patientR4);
        
        // In JSON của Patient R5
        String json = ctxR5.newJsonParser().setPrettyPrint(true)
                .encodeResourceToString(patientR5);
        System.out.println(json);
    }
}
```

#### 2. Chuyển đổi hai chiều

`hapi-fhir-converter` hỗ trợ chuyển đổi hai chiều giữa các phiên bản FHIR:

```java
// Ví dụ: Chuyển đổi hai chiều giữa R4 và R5
public class BidirectionalConversionExample {
    public static void main(String[] args) {
        FhirContext ctxR4 = FhirContext.forR4();
        FhirContext ctxR5 = FhirContext.forR5();
        
        // Tạo converter R4->R5
        IVersionConverterService r4ToR5Converter = new VersionConverterService(ctxR5);
        
        // Tạo converter R5->R4
        IVersionConverterService r5ToR4Converter = new VersionConverterService(ctxR4);
        
        // Tạo Patient R4
        org.hl7.fhir.r4.model.Patient originalR4 = new org.hl7.fhir.r4.model.Patient();
        originalR4.addName().setFamily("Smith").addGiven("John");
        originalR4.setGender(org.hl7.fhir.r4.model.Enumerations.AdministrativeGender.MALE);
        originalR4.setBirthDate(new Date());
        
        // Chuyển đổi từ R4 sang R5
        org.hl7.fhir.r5.model.Patient convertedToR5 = (org.hl7.fhir.r5.model.Patient)
                r4ToR5Converter.convertResource(originalR4);
        
        // Thêm field chỉ có trong R5
        convertedToR5.addCitizenship().setStatus(org.hl7.fhir.r5.model.Patient.CitizenshipStatus.ACTIVE);
        
        // Chuyển đổi lại từ R5 sang R4
        org.hl7.fhir.r4.model.Patient convertedBackToR4 = (org.hl7.fhir.r4.model.Patient)
                r5ToR4Converter.convertResource(convertedToR5);
        
        // So sánh R4 ban đầu và R4 sau khi chuyển đổi
        System.out.println("Original R4: " + ctxR4.newJsonParser().encodeResourceToString(originalR4));
        System.out.println("Converted R5: " + ctxR5.newJsonParser().encodeResourceToString(convertedToR5));
        System.out.println("Converted back to R4: " + ctxR4.newJsonParser().encodeResourceToString(convertedBackToR4));
    }
}
```

#### 3. HL7v2 tới FHIR Conversion

Chuyển đổi từ HL7v2 message sang FHIR resource:

```java
public class HL7v2ToFHIRExample {
    public static void main(String[] args) throws Exception {
        // Tạo context FHIR R4
        FhirContext ctx = FhirContext.forR4();
        
        // Tạo converter HL7v2 sang FHIR
        HL7v2Converter converter = new HL7v2Converter(ctx);
        
        // Ví dụ HL7v2 ADT message
        String hl7Message = "MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20220101120000||ADT^A01|MSG000001|P|2.5|\r" +
                "PID|1||12345^^^MRN^MR||Smith^John^Q^Jr||19800101|M|||123 Main St^^New York^NY^10001^USA^^^NY||^PRN^PH^^^555^1234567||||||987-65-4321|\r" +
                "PV1|1|I|2000^2012^01||||004777^Smith^John^^^MD|||SUR||||ADM|A0|";
        
        // Chuyển đổi sang Bundle FHIR
        org.hl7.fhir.r4.model.Bundle bundle = converter.convertToFhir(hl7Message);
        
        // In ra kết quả
        String json = ctx.newJsonParser().setPrettyPrint(true).encodeResourceToString(bundle);
        System.out.println(json);
    }
}
```

#### 4. CDA tới FHIR Conversion

Chuyển đổi từ CDA document sang FHIR:

```java
public class CDAToFHIRExample {
    public static void main(String[] args) throws Exception {
        // Tạo context FHIR R4
        FhirContext ctx = FhirContext.forR4();
        
        // Tạo converter CDA sang FHIR
        CDAConverter converter = new CDAConverter(ctx);
        
        // Đọc file CDA
        File cdaFile = new File("src/test/resources/sample-ccd.xml");
        FileInputStream fis = new FileInputStream(cdaFile);
        String cdaXml = IOUtils.toString(fis, StandardCharsets.UTF_8);
        
        // Chuyển đổi sang FHIR Bundle
        org.hl7.fhir.r4.model.Bundle bundle = converter.convertToFhir(cdaXml);
        
        // In ra kết quả
        String json = ctx.newJsonParser().setPrettyPrint(true).encodeResourceToString(bundle);
        System.out.println(json);
    }
}
```

#### 5. Custom Mapping với FHIRPath

`hapi-fhir-converter` cho phép áp dụng các chuyển đổi tùy chỉnh sử dụng FHIRPath:

```java
public class CustomMappingExample {
    public static void main(String[] args) {
        FhirContext ctxR4 = FhirContext.forR4();
        FhirContext ctxR5 = FhirContext.forR5();
        
        // Tạo converter với custom mapping
        CustomVersionConverterService converter = new CustomVersionConverterService(ctxR4, ctxR5);
        
        // Thêm custom mapping cho Patient
        converter.addCustomMapping("Patient", "gender", (sourceResource, targetResource) -> {
            org.hl7.fhir.r4.model.Patient sourcePatient = (org.hl7.fhir.r4.model.Patient) sourceResource;
            org.hl7.fhir.r5.model.Patient targetPatient = (org.hl7.fhir.r5.model.Patient) targetResource;
            
            // Custom logic cho gender
            if (sourcePatient.hasGender()) {
                switch (sourcePatient.getGender()) {
                    case MALE:
                        targetPatient.setGender(org.hl7.fhir.r5.model.Enumerations.AdministrativeGender.MALE);
                        // Thêm extension tùy chỉnh
                        targetPatient.addExtension()
                            .setUrl("http://example.org/gender-detail")
                            .setValue(new org.hl7.fhir.r5.model.StringType("Male"));
                        break;
                    case FEMALE:
                        targetPatient.setGender(org.hl7.fhir.r5.model.Enumerations.AdministrativeGender.FEMALE);
                        targetPatient.addExtension()
                            .setUrl("http://example.org/gender-detail")
                            .setValue(new org.hl7.fhir.r5.model.StringType("Female"));
                        break;
                    default:
                        targetPatient.setGender(org.hl7.fhir.r5.model.Enumerations.AdministrativeGender.OTHER);
                }
            }
        });
        
        // Tạo patient R4
        org.hl7.fhir.r4.model.Patient patientR4 = new org.hl7.fhir.r4.model.Patient();
        patientR4.setGender(org.hl7.fhir.r4.model.Enumerations.AdministrativeGender.MALE);
        
        // Chuyển đổi sang R5 với custom mapping
        org.hl7.fhir.r5.model.Patient patientR5 = (org.hl7.fhir.r5.model.Patient)
                converter.convertResource(patientR4);
        
        // In kết quả
        String json = ctxR5.newJsonParser().setPrettyPrint(true).encodeResourceToString(patientR5);
        System.out.println(json);
    }
    
    // Interface cho custom mapping function
    interface MappingFunction {
        void apply(IBaseResource source, IBaseResource target);
    }
    
    static class CustomVersionConverterService extends BaseVersionConverterService {
        private Map<String, Map<String, MappingFunction>> customMappings = new HashMap<>();
        private FhirContext sourceContext;
        private FhirContext targetContext;
        
        public CustomVersionConverterService(FhirContext sourceContext, FhirContext targetContext) {
            super(targetContext);
            this.sourceContext = sourceContext;
            this.targetContext = targetContext;
        }
        
        public void addCustomMapping(String resourceType, String field, MappingFunction function) {
            customMappings.computeIfAbsent(resourceType, k -> new HashMap<>())
                .put(field, function);
        }
        
        @Override
        public IBaseResource convertResource(IBaseResource resource) {
            // Perform basic conversion first
            IBaseResource converted = super.convertResource(resource);
            
            // Apply custom mappings
            String resourceType = resource.fhirType();
            if (customMappings.containsKey(resourceType)) {
                Map<String, MappingFunction> fieldMappings = customMappings.get(resourceType);
                for (MappingFunction function : fieldMappings.values()) {
                    function.apply(resource, converted);
                }
            }
            
            return converted;
        }
    }
}
```

### Cấu hình và Triển khai

#### 1. Tích hợp với Spring Boot

```java
@Configuration
public class FhirConverterConfig {
    
    @Bean
    public FhirContext fhirContextR4() {
        return FhirContext.forR4();
    }
    
    @Bean
    public FhirContext fhirContextR5() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IVersionConverterService versionConverterService(FhirContext fhirContextR5) {
        return new VersionConverterService(fhirContextR5);
    }
    
    @Bean
    public VersionConverterInterceptor versionConverterInterceptor(
            IVersionConverterService versionConverterService, FhirContext fhirContextR5) {
        VersionConverterInterceptor interceptor = new VersionConverterInterceptor();
        interceptor.setConverterService(versionConverterService);
        interceptor.setTargetContext(fhirContextR5);
        return interceptor;
    }
    
    @Bean
    public HL7v2Converter hl7v2Converter(FhirContext fhirContextR4) {
        return new HL7v2Converter(fhirContextR4);
    }
    
    @Bean
    public CDAConverter cdaConverter(FhirContext fhirContextR4) {
        return new CDAConverter(fhirContextR4);
    }
}
```

#### 2. Cấu hình với HAPI FHIR Server

```java
@Configuration
public class FhirServerConfig {
    
    @Autowired
    private VersionConverterInterceptor versionConverterInterceptor;
    
    @Bean
    public ServletRegistrationBean<RestfulServer> fhirServlet() {
        RestfulServer fhirServer = new RestfulServer();
        
        // Configure FHIR server
        fhirServer.setResourceProviders(
                // Resource providers
        );
        
        // Register version converter interceptor
        fhirServer.registerInterceptor(versionConverterInterceptor);
        
        // Other configuration
        
        ServletRegistrationBean<RestfulServer> bean = new ServletRegistrationBean<>(fhirServer, "/fhir/*");
        bean.setLoadOnStartup(1);
        
        return bean;
    }
}
```

#### 3. RESTful API cho Converter

```java
@RestController
@RequestMapping("/api/convert")
public class ConversionController {
    
    @Autowired
    private IVersionConverterService versionConverterService;
    
    @Autowired
    private HL7v2Converter hl7v2Converter;
    
    @Autowired
    private CDAConverter cdaConverter;
    
    @Autowired
    private FhirContext fhirContextR4;
    
    @Autowired
    private FhirContext fhirContextR5;
    
    /**
     * Convert FHIR resource between versions
     */
    @PostMapping("/fhir/{sourceVersion}/{targetVersion}")
    public ResponseEntity<String> convertFhirVersion(
            @PathVariable String sourceVersion,
            @PathVariable String targetVersion,
            @RequestBody String sourceResource) {
        
        try {
            // Parse source resource
            FhirContext sourceContext = getFhirContext(sourceVersion);
            IBaseResource resource = sourceContext.newJsonParser().parseResource(sourceResource);
            
            // Convert to target version
            IBaseResource converted = versionConverterService.convertResourceToVersion(
                    resource, getFhirVersionEnum(targetVersion));
            
            // Encode to JSON
            FhirContext targetContext = getFhirContext(targetVersion);
            String result = targetContext.newJsonParser().setPrettyPrint(true)
                    .encodeResourceToString(converted);
            
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Conversion error: " + e.getMessage());
        }
    }
    
    /**
     * Convert HL7v2 to FHIR
     */
    @PostMapping("/hl7v2-to-fhir")
    public ResponseEntity<String> convertHL7v2ToFhir(@RequestBody String hl7Message) {
        try {
            org.hl7.fhir.r4.model.Bundle bundle = hl7v2Converter.convertToFhir(hl7Message);
            String result = fhirContextR4.newJsonParser().setPrettyPrint(true)
                    .encodeResourceToString(bundle);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Conversion error: " + e.getMessage());
        }
    }
    
    /**
     * Convert CDA to FHIR
     */
    @PostMapping("/cda-to-fhir")
    public ResponseEntity<String> convertCDAToFhir(@RequestBody String cdaDocument) {
        try {
            org.hl7.fhir.r4.model.Bundle bundle = cdaConverter.convertToFhir(cdaDocument);
            String result = fhirContextR4.newJsonParser().setPrettyPrint(true)
                    .encodeResourceToString(bundle);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Conversion error: " + e.getMessage());
        }
    }
    
    private FhirContext getFhirContext(String version) {
        switch (version.toUpperCase()) {
            case "R4":
                return fhirContextR4;
            case "R5":
                return fhirContextR5;
            default:
                throw new IllegalArgumentException("Unsupported FHIR version: " + version);
        }
    }
    
    private FhirVersionEnum getFhirVersionEnum(String version) {
        switch (version.toUpperCase()) {
            case "R4":
                return FhirVersionEnum.R4;
            case "R5":
                return FhirVersionEnum.R5;
            default:
                throw new IllegalArgumentException("Unsupported FHIR version: " + version);
        }
    }
}
```

### Ứng dụng thực tế

#### 1. Proxy Server đa phiên bản

```java
@Component
public class MultiVersionProxyConfig {
    
    @Autowired
    private IVersionConverterService versionConverterService;
    
    @Autowired
    private FhirContext fhirContextR4;
    
    @Autowired
    private FhirContext fhirContextR5;
    
    @Bean
    public WebClient webClient() {
        return WebClient.builder().build();
    }
    
    @RestController
    @RequestMapping("/proxy")
    public class MultiVersionProxyController {
        
        @Autowired
        private WebClient webClient;
        
        private static final String TARGET_SERVER = "http://hapi.fhir.org/baseR5";
        
        /**
         * Proxy FHIR requests with version conversion
         */
        @RequestMapping(value = "/**", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
        public ResponseEntity<String> proxyRequest(
                HttpServletRequest request,
                @RequestBody(required = false) String body) {
            
            try {
                // Extract client requested version from header
                String clientVersion = request.getHeader("X-FHIR-Version");
                if (clientVersion == null) {
                    clientVersion = "R4"; // Default
                }
                
                // Build target URL
                String path = (String) request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
                String targetUrl = TARGET_SERVER + path.substring("/proxy".length());
                
                // Convert request body if needed
                String convertedBody = body;
                if (body != null && !body.isEmpty() && request.getMethod().equals("POST") || request.getMethod().equals("PUT")) {
                    convertedBody = convertRequestBody(body, clientVersion, "R5");
                }
                
                // Forward request to target server
                WebClient.RequestBodySpec requestSpec = webClient.method(HttpMethod.valueOf(request.getMethod()))
                        .uri(targetUrl);
                
                // Copy headers
                Enumeration<String> headerNames = request.getHeaderNames();
                while (headerNames.hasMoreElements()) {
                    String headerName = headerNames.nextElement();
                    if (!headerName.toLowerCase().startsWith("content") && !headerName.equalsIgnoreCase("accept")) {
                        requestSpec.header(headerName, request.getHeader(headerName));
                    }
                }
                
                // Set content type
                requestSpec.header("Content-Type", "application/fhir+json");
                requestSpec.header("Accept", "application/fhir+json");
                
                // Execute request
                String responseBody;
                if (convertedBody != null) {
                    responseBody = requestSpec.bodyValue(convertedBody)
                            .retrieve()
                            .bodyToMono(String.class)
                            .block();
                } else {
                    responseBody = requestSpec
                            .retrieve()
                            .bodyToMono(String.class)
                            .block();
                }
                
                // Convert response back to client version
                String convertedResponse = convertResponseBody(responseBody, "R5", clientVersion);
                
                return ResponseEntity.ok(convertedResponse);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("Proxy error: " + e.getMessage());
            }
        }
        
        private String convertRequestBody(String body, String sourceVersion, String targetVersion) {
            try {
                // Parse source resource
                FhirContext sourceContext = getFhirContext(sourceVersion);
                IBaseResource resource = sourceContext.newJsonParser().parseResource(body);
                
                // Convert to target version
                IBaseResource converted = versionConverterService.convertResourceToVersion(
                        resource, getFhirVersionEnum(targetVersion));
                
                // Encode to JSON
                FhirContext targetContext = getFhirContext(targetVersion);
                return targetContext.newJsonParser().encodeResourceToString(converted);
            } catch (Exception e) {
                throw new RuntimeException("Error converting request: " + e.getMessage(), e);
            }
        }
        
        private String convertResponseBody(String body, String sourceVersion, String targetVersion) {
            try {
                // Check if body is a FHIR resource
                if (body == null || body.isEmpty() || !body.contains("resourceType")) {
                    return body;
                }
                
                // Parse source resource
                FhirContext sourceContext = getFhirContext(sourceVersion);
                IBaseResource resource = sourceContext.newJsonParser().parseResource(body);
                
                // Convert to target version
                IBaseResource converted = versionConverterService.convertResourceToVersion(
                        resource, getFhirVersionEnum(targetVersion));
                
                // Encode to JSON
                FhirContext targetContext = getFhirContext(targetVersion);
                return targetContext.newJsonParser().encodeResourceToString(converted);
            } catch (Exception e) {
                throw new RuntimeException("Error converting response: " + e.getMessage(), e);
            }
        }
        
        private FhirContext getFhirContext(String version) {
            switch (version.toUpperCase()) {
                case "R4":
                    return fhirContextR4;
                case "R5":
                    return fhirContextR5;
                default:
                    throw new IllegalArgumentException("Unsupported FHIR version: " + version);
            }
        }
        
        private FhirVersionEnum getFhirVersionEnum(String version) {
            switch (version.toUpperCase()) {
                case "R4":
                    return FhirVersionEnum.R4;
                case "R5":
                    return FhirVersionEnum.R5;
                default:
                    throw new IllegalArgumentException("Unsupported FHIR version: " + version);
            }
        }
    }
}
```

#### 2. HL7v2 Integration Service

<pre class="language-java"><code class="lang-java">@Service
public class HL7v2IntegrationService {
    
    private static final Logger logger = LoggerFactory.getLogger(HL7v2IntegrationService.class);
    
    @Autowired
    private HL7v2Converter hl7v2Converter;
    
    @Autowired
    private IGenericClient fhirClient;
    
    /**
     * Process incoming HL7v2 message and send to FHIR server
     */
    public void processHL7v2Message(String hl7Message) {
        try {
            logger.info("Processing HL7v2 message");
            
            // Convert to FHIR Bundle
            org.hl7.fhir.r4.model.Bundle fhirBundle = hl7v2Converter.convertToFhir(hl7Message);
            
            // Process each entry in the bundle
            for (Bundle.BundleEntryComponent entry : fhirBundle.getEntry()) {
                IBaseResource resource = entry.getResource();
                
                // Determine
<strong>               // Determine resource type and ID
</strong>               String resourceType = resource.fhirType();
               String id = resource.getIdElement().getIdPart();
               
               // Check if resource already exists
               if (id != null &#x26;&#x26; !id.isEmpty()) {
                   try {
                       // Try to read existing resource
                       IBaseResource existingResource = fhirClient.read()
                               .resource(resourceType)
                               .withId(id)
                               .execute();
                       
                       // Update existing resource
                       logger.info("Updating existing {} resource with ID: {}", resourceType, id);
                       fhirClient.update()
                               .resource(resource)
                               .execute();
                   } catch (ResourceNotFoundException e) {
                       // Resource does not exist, create it
                       createResource(resource, resourceType);
                   }
               } else {
                   // No ID provided, create new resource
                   createResource(resource, resourceType);
               }
           }
           
           logger.info("HL7v2 message processing completed");
       } catch (Exception e) {
           logger.error("Error processing HL7v2 message: {}", e.getMessage(), e);
           throw new RuntimeException("HL7v2 processing failed", e);
       }
   }
   
   private void createResource(IBaseResource resource, String resourceType) {
       logger.info("Creating new {} resource", resourceType);
       MethodOutcome outcome = fhirClient.create()
               .resource(resource)
               .execute();
       logger.info("Created {} with ID: {}", resourceType, outcome.getId().getValue());
   }
   
   /**
    * Listen to HL7v2 messages from MLLP server
    */
   @Component
   public static class HL7v2MLLPReceiver {
       
       @Autowired
       private HL7v2IntegrationService integrationService;
       
       private MinLowerLayerProtocolServer mllpServer;
       
       @PostConstruct
       public void startServer() throws Exception {
           int port = 6661; // Default MLLP port
           
           // Create MLLP server
           mllpServer = new MinLowerLayerProtocolServer(port, message -> {
               // This is called when a message is received
               String hl7Message = new String(message, StandardCharsets.UTF_8);
               integrationService.processHL7v2Message(hl7Message);
               
               // Return ACK message
               return createAcknowledgmentMessage(hl7Message).getBytes(StandardCharsets.UTF_8);
           });
           
           // Start server in a separate thread
           new Thread(() -> {
               try {
                   mllpServer.start();
               } catch (Exception e) {
                   logger.error("Error starting MLLP server: {}", e.getMessage(), e);
               }
           }).start();
           
           logger.info("MLLP server started on port {}", port);
       }
       
       @PreDestroy
       public void stopServer() {
           if (mllpServer != null) {
               try {
                   mllpServer.stop();
                   logger.info("MLLP server stopped");
               } catch (Exception e) {
                   logger.error("Error stopping MLLP server: {}", e.getMessage(), e);
               }
           }
       }
       
       private String createAcknowledgmentMessage(String originalMessage) {
           try {
               // Extract message header information from original message
               String[] lines = originalMessage.split("\r");
               String mshSegment = lines[0];
               String[] mshFields = mshSegment.split("\\|");
               
               // Generate ACK message
               StringBuilder ack = new StringBuilder();
               ack.append("MSH|^~\\&#x26;|");
               ack.append(mshFields[4]).append("|"); // Receiving app becomes sending app
               ack.append(mshFields[5]).append("|"); // Receiving facility becomes sending facility
               ack.append(mshFields[2]).append("|"); // Sending app becomes receiving app
               ack.append(mshFields[3]).append("|"); // Sending facility becomes receiving facility
               
               // Add date/time
               SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
               ack.append(sdf.format(new Date())).append("|");
               
               // Message type
               ack.append("|ACK|");
               
               // Control ID
               ack.append(mshFields[9]).append("|");
               
               // Processing ID
               ack.append(mshFields[10]).append("|");
               
               // Version ID
               ack.append(mshFields[11]).append("|");
               
               // Add MSA segment
               ack.append("\rMSA|AA|").append(mshFields[9]).append("|Message processed successfully|");
               
               return ack.toString();
           } catch (Exception e) {
               logger.error("Error creating ACK message: {}", e.getMessage(), e);
               return "MSH|^~\\&#x26;|HAPI|HAPISERVER|||||ACK|||2.5\rMSA|AE|UNKNOWN|Error creating acknowledgment|";
           }
       }
   }
}
</code></pre>

#### 3. CDA Document Repository

```java
@Service
public class CDADocumentService {
    
    private static final Logger logger = LoggerFactory.getLogger(CDADocumentService.class);
    
    @Autowired
    private CDAConverter cdaConverter;
    
    @Autowired
    private IGenericClient fhirClient;
    
    @Autowired
    private FhirContext fhirContext;
    
    /**
     * Store CDA document and convert to FHIR resources
     */
    public String storeCDADocument(String cdaDocument, String patientId) {
        try {
            logger.info("Processing CDA document for patient {}", patientId);
            
            // Convert to FHIR Bundle
            org.hl7.fhir.r4.model.Bundle fhirBundle = cdaConverter.convertToFhir(cdaDocument);
            
            // Store the original document as DocumentReference
            DocumentReference docRef = createDocumentReference(cdaDocument, patientId);
            
            // Link the bundle to the DocumentReference
            for (Bundle.BundleEntryComponent entry : fhirBundle.getEntry()) {
                IBaseResource resource = entry.getResource();
                
                // Add provenance information linking to the document
                if (resource instanceof Patient || 
                    resource instanceof Condition || 
                    resource instanceof Observation || 
                    resource instanceof MedicationStatement) {
                    
                    // Add extension to link to document source
                    addDocumentSourceExtension(resource, docRef.getId());
                }
                
                // Create/update resource
                createOrUpdateResource(resource);
            }
            
            logger.info("CDA document processing completed, created DocumentReference: {}", docRef.getId());
            return docRef.getId();
            
        } catch (Exception e) {
            logger.error("Error processing CDA document: {}", e.getMessage(), e);
            throw new RuntimeException("CDA processing failed", e);
        }
    }
    
    private DocumentReference createDocumentReference(String cdaDocument, String patientId) {
        logger.info("Creating DocumentReference for CDA document");
        
        // Create DocumentReference resource
        DocumentReference docRef = new DocumentReference();
        
        // Set status
        docRef.setStatus(DocumentReference.DocumentReferenceStatus.CURRENT);
        
        // Set document type
        CodeableConcept type = docRef.getType();
        type.addCoding()
            .setSystem("http://loinc.org")
            .setCode("34133-9")
            .setDisplay("Summarization of Episode Note");
        
        // Set category
        docRef.addCategory()
            .addCoding()
            .setSystem("http://loinc.org")
            .setCode("11488-4")
            .setDisplay("Consult Note");
        
        // Set subject
        docRef.setSubject(new Reference("Patient/" + patientId));
        
        // Set content
        DocumentReference.DocumentReferenceContentComponent content = docRef.addContent();
        
        // Set the attachment
        Attachment attachment = content.getAttachment();
        attachment.setContentType("text/xml");
        attachment.setData(cdaDocument.getBytes(StandardCharsets.UTF_8));
        
        // Set format
        content.setFormat(new Coding()
            .setSystem("urn:oid:1.3.6.1.4.1.19376.1.2.3")
            .setCode("urn:hl7-org:sdtc:xsd:CDA.xsd")
            .setDisplay("CDA/CCD Document"));
        
        // Set date
        docRef.setDate(new Date());
        
        // Create on FHIR server
        MethodOutcome outcome = fhirClient.create()
            .resource(docRef)
            .execute();
        
        // Update the resource with the assigned ID
        docRef.setId(outcome.getId().getValue());
        
        return docRef;
    }
    
    private void addDocumentSourceExtension(IBaseResource resource, String documentReferenceId) {
        // Add extension to resource to link back to source document
        if (resource instanceof DomainResource) {
            DomainResource domainResource = (DomainResource) resource;
            
            Extension sourceExt = new Extension();
            sourceExt.setUrl("http://example.org/fhir/StructureDefinition/document-source");
            sourceExt.setValue(new Reference(documentReferenceId));
            
            domainResource.addExtension(sourceExt);
        }
    }
    
    private void createOrUpdateResource(IBaseResource resource) {
        String resourceType = resource.fhirType();
        String id = resource.getIdElement().getIdPart();
        
        // Check if resource already exists
        if (id != null && !id.isEmpty()) {
            try {
                // Try to read existing resource
                fhirClient.read()
                    .resource(resourceType)
                    .withId(id)
                    .execute();
                
                // Update existing resource
                logger.info("Updating existing {} resource with ID: {}", resourceType, id);
                fhirClient.update()
                    .resource(resource)
                    .execute();
            } catch (ResourceNotFoundException e) {
                // Resource does not exist, create it
                createResource(resource, resourceType);
            }
        } else {
            // No ID provided, create new resource
            createResource(resource, resourceType);
        }
    }
    
    private void createResource(IBaseResource resource, String resourceType) {
        logger.info("Creating new {} resource", resourceType);
        MethodOutcome outcome = fhirClient.create()
            .resource(resource)
            .execute();
        logger.info("Created {} with ID: {}", resourceType, outcome.getId().getValue());
    }
}
```

### Thách thức và Giải pháp

#### 1. Xử lý Sự khác biệt giữa các phiên bản

Một thách thức lớn trong chuyển đổi giữa các phiên bản FHIR là xử lý những thay đổi cấu trúc và ngữ nghĩa. `hapi-fhir-converter` xử lý vấn đề này bằng cách:

1. **Mapping Tables**: Sử dụng bảng ánh xạ chi tiết giữa các phiên bản
2. **Fallback Logic**: Xác định các giá trị fallback cho các trường không tương thích
3. **Extension Handling**: Giữ extensions khi có thể và chuyển đổi thành trường chính thức khi phù hợp
4. **Version Markers**: Đánh dấu dữ liệu nguồn để theo dõi nguồn gốc

#### 2. Xử lý dữ liệu mở rộng

Khi chuyển đổi từ phiên bản mới hơn sang phiên bản cũ hơn, thông tin có thể bị mất. `hapi-fhir-converter` giải quyết vấn đề này bằng cách:

1. **Extension Preservation**: Lưu trữ dữ liệu không tương thích trong extensions
2. **Metadata Tags**: Thêm tags để đánh dấu dữ liệu đã được chuyển đổi
3. **Configurable Loss**: Cho phép cấu hình cách xử lý dữ liệu có thể bị mất
4. **Custom Transformers**: Hỗ trợ biến đổi tùy chỉnh để xử lý các trường hợp đặc biệt

#### 3. Hiệu suất cho dữ liệu lớn

Đối với khối lượng dữ liệu lớn, hiệu suất chuyển đổi là rất quan trọng:

```java
@Configuration
public class ConverterPerformanceConfig {
    
    @Bean
    public ConverterCachingService converterCachingService() {
        return new ConverterCachingService();
    }
    
    @Component
    public static class ConverterCachingService {
        
        private final LoadingCache<CacheKey, IBaseResource> conversionCache;
        
        public ConverterCachingService() {
            conversionCache = Caffeine.newBuilder()
                .maximumSize(10_000)
                .expireAfterWrite(1, TimeUnit.HOURS)
                .recordStats()
                .build(key -> convertResource(key));
        }
        
        public IBaseResource getConvertedResource(IBaseResource source, FhirVersionEnum targetVersion) {
            CacheKey key = new CacheKey(source, targetVersion);
            return conversionCache.get(key);
        }
        
        private IBaseResource convertResource(CacheKey key) {
            // Perform actual conversion
            // This is a placeholder for the actual conversion logic
            return null;
        }
        
        public CacheStats getCacheStats() {
            return conversionCache.stats();
        }
        
        private static class CacheKey {
            private final String resourceId;
            private final String resourceType;
            private final FhirVersionEnum sourceVersion;
            private final FhirVersionEnum targetVersion;
            private final int hashCode;
            
            public CacheKey(IBaseResource resource, FhirVersionEnum targetVersion) {
                this.resourceId = resource.getIdElement().getIdPart();
                this.resourceType = resource.fhirType();
                this.sourceVersion = getResourceVersion(resource);
                this.targetVersion = targetVersion;
                this.hashCode = calculateHashCode();
            }
            
            private FhirVersionEnum getResourceVersion(IBaseResource resource) {
                // Determine version from resource class
                String className = resource.getClass().getName();
                if (className.contains(".r5.")) {
                    return FhirVersionEnum.R5;
                } else if (className.contains(".r4.")) {
                    return FhirVersionEnum.R4;
                } else if (className.contains(".r4b.")) {
                    return FhirVersionEnum.R4B;
                } else if (className.contains(".dstu3.")) {
                    return FhirVersionEnum.DSTU3;
                } else if (className.contains(".dstu2.")) {
                    return FhirVersionEnum.DSTU2;
                } else {
                    throw new IllegalArgumentException("Unknown resource version: " + className);
                }
            }
            
            private int calculateHashCode() {
                return Objects.hash(resourceId, resourceType, sourceVersion, targetVersion);
            }
            
            @Override
            public boolean equals(Object obj) {
                if (this == obj) return true;
                if (obj == null || getClass() != obj.getClass()) return false;
                CacheKey that = (CacheKey) obj;
                return Objects.equals(resourceId, that.resourceId) &&
                       Objects.equals(resourceType, that.resourceType) &&
                       sourceVersion == that.sourceVersion &&
                       targetVersion == that.targetVersion;
            }
            
            @Override
            public int hashCode() {
                return hashCode;
            }
        }
    }
    
    @Bean
    public BatchConverter batchConverter(IVersionConverterService versionConverterService) {
        return new BatchConverter(versionConverterService);
    }
    
    @Component
    public static class BatchConverter {
        
        private final IVersionConverterService converterService;
        private final ExecutorService executorService;
        
        public BatchConverter(IVersionConverterService converterService) {
            this.converterService = converterService;
            this.executorService = Executors.newFixedThreadPool(
                Runtime.getRuntime().availableProcessors());
        }
        
        public List<IBaseResource> convertBatch(List<IBaseResource> resources, 
                                              FhirVersionEnum targetVersion) {
            try {
                // Submit tasks for parallel conversion
                List<CompletableFuture<IBaseResource>> futures = resources.stream()
                    .map(resource -> CompletableFuture.supplyAsync(
                        () -> converterService.convertResourceToVersion(resource, targetVersion),
                        executorService))
                    .collect(Collectors.toList());
                
                // Wait for all conversions to complete
                CompletableFuture<Void> allFutures = CompletableFuture.allOf(
                    futures.toArray(new CompletableFuture[0]));
                
                // Get results
                allFutures.join();
                return futures.stream()
                    .map(CompletableFuture::join)
                    .collect(Collectors.toList());
                
            } catch (Exception e) {
                throw new RuntimeException("Error during batch conversion", e);
            }
        }
        
        @PreDestroy
        public void shutdown() {
            executorService.shutdown();
            try {
                if (!executorService.awaitTermination(5, TimeUnit.SECONDS)) {
                    executorService.shutdownNow();
                }
            } catch (InterruptedException e) {
                executorService.shutdownNow();
            }
        }
    }
}
```

### Kết luận

`hapi-fhir-converter` là một thành phần mạnh mẽ và linh hoạt trong hệ sinh thái HAPI FHIR, giải quyết thách thức lớn của việc tương tác giữa các hệ thống sử dụng các phiên bản FHIR khác nhau cũng như chuyển đổi từ các định dạng y tế cũ sang FHIR. Với khả năng chuyển đổi hai chiều giữa các phiên bản FHIR và chuyển đổi từ HL7v2/CDA sang FHIR, module này đóng vai trò quan trọng trong việc xây dựng các hệ thống y tế hiện đại và tương thích.

Các tính năng chính của `hapi-fhir-converter` bao gồm:

1. **Chuyển đổi phiên bản FHIR**: Chuyển đổi liền mạch giữa FHIR R2, R3, R4, R4B và R5
2. **Chuyển đổi HL7v2/CDA**: Chuyển đổi từ các định dạng legacy sang FHIR
3. **Custom Mapping**: Hỗ trợ ánh xạ tùy chỉnh với FHIRPath
4. **Extension Handling**: Xử lý thông minh các extensions
5. **Hiệu suất cao**: Caching và xử lý bất đồng bộ cho trường hợp khối lượng lớn

Triển khai `hapi-fhir-converter` trong các ứng dụng y tế giúp giải quyết vấn đề tương tác giữa các hệ thống, đơn giản hóa việc nâng cấp phiên bản, và tạo điều kiện cho việc tích hợp với các hệ thống legacy.
