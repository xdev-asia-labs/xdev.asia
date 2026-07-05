---
id: 2498cfc1-2c0c-442d-8f2b-002bd72e77fd
title: 'hapi-fhir-oauth2'
slug: hapi-fhir-oauth2
description: 'OAuth2 là một giao thức xác thực và ủy quyền tiêu chuẩn được sử dụng rộng rãi trong các ứng dụng hiện đại, bao gồm cả hệ thống y tế. Khi kết hợp HAPI FHIR với OAuth2, bạn có thể xây dựng ứng dụng y tế tuân thủ SMART on…'
duration_minutes: 25
is_free: true
video_url: null
sort_order: 21
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
## Tích hợp HAPI FHIR với OAuth2 trong Spring Boot

OAuth2 là một giao thức xác thực và ủy quyền tiêu chuẩn được sử dụng rộng rãi trong các ứng dụng hiện đại, bao gồm cả hệ thống y tế. Khi kết hợp HAPI FHIR với OAuth2, bạn có thể xây dựng ứng dụng y tế tuân thủ SMART on FHIR - một tiêu chuẩn bảo mật cho ứng dụng y tế. Bài viết này sẽ hướng dẫn chi tiết về việc tích hợp HAPI FHIR với OAuth2 trong môi trường Spring Boot.

### Giới thiệu về SMART on FHIR và OAuth2

SMART on FHIR (Substitutable Medical Applications, Reusable Technologies) là một tiêu chuẩn mở cho phép ứng dụng y tế chạy trên nhiều nền tảng khác nhau và tích hợp với nhiều hệ thống EHR. SMART on FHIR sử dụng OAuth2 làm cơ chế xác thực và ủy quyền.

OAuth2 trong môi trường y tế cung cấp một số lợi ích quan trọng:

* **Bảo mật**: Xác thực mạnh mẽ và ủy quyền chi tiết
* **Phạm vi quyền hạn (scopes)**: Hạn chế quyền truy cập dựa trên nhu cầu thực tế (ví dụ: chỉ đọc hoặc cả đọc và ghi)
* **Tương thích**: Làm việc với nhiều hệ thống khác nhau
* **Trải nghiệm người dùng**: Đăng nhập một lần (single sign-on)

### Cài đặt các dependency cần thiết

Để tích hợp HAPI FHIR với OAuth2 trong Spring Boot, bạn cần thêm các dependency sau vào file `pom.xml`:

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

<!-- HAPI FHIR Client -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-client</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- Spring Security OAuth2 Client -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>

<!-- Spring Security OAuth2 Resource Server -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
</dependency>

<!-- Spring Security Web -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### Cấu hình OAuth2 trong Spring Boot

#### 1. Cấu hình application.yml

Đầu tiên, cấu hình thông tin OAuth2 trong file `application.yml`:

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          fhir-client:
            client-id: fhir-client
            client-secret: your-client-secret
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/{registrationId}"
            scope: launch/patient,patient/*.read,patient/*.write
        provider:
          fhir-client:
            authorization-uri: https://auth.example.com/oauth2/authorize
            token-uri: https://auth.example.com/oauth2/token
            jwk-set-uri: https://auth.example.com/.well-known/jwks.json
            user-info-uri: https://auth.example.com/userinfo
            user-name-attribute: sub
      resourceserver:
        jwt:
          issuer-uri: https://auth.example.com
```

#### 2. Cấu hình Spring Security với OAuth2

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/home", "/login").permitAll()
                .requestMatchers("/fhir/metadata").permitAll() // Cho phép truy cập vào capability statement
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/fhir/Patient/**").hasAuthority("SCOPE_patient/*.read")
                .requestMatchers("/fhir/Observation/**").hasAuthority("SCOPE_patient/*.read")
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
                .failureUrl("/login?error")
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );
        
        return http.build();
    }
    
    private Converter<Jwt, AbstractAuthenticationToken> jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(jwt -> {
            List<String> scopes = jwt.getClaimAsStringList("scope");
            if (scopes == null) {
                return Collections.emptyList();
            }
            
            return scopes.stream()
                    .map(scope -> new SimpleGrantedAuthority("SCOPE_" + scope))
                    .collect(Collectors.toList());
        });
        return converter;
    }
    
    @Bean
    public JwtDecoder jwtDecoder(OAuth2ResourceServerProperties properties) {
        return JwtDecoders.fromIssuerLocation(properties.getJwt().getIssuerUri());
    }
}
```

### Tích hợp OAuth2 với HAPI FHIR Client

#### 1. Cấu hình HAPI FHIR Client với OAuth2

```java
@Configuration
public class FhirClientConfig {

    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IGenericClient fhirClient(FhirContext fhirContext, OAuth2AuthorizedClientService clientService) {
        // Tạo client kết nối đến FHIR server
        IGenericClient client = fhirContext.newRestfulGenericClient("https://fhir.example.com/fhir");
        
        // Đăng ký interceptor để xử lý OAuth2 token
        client.registerInterceptor(new OAuth2ClientCredentialsInterceptor(clientService));
        
        return client;
    }
    
    // Custom interceptor cho OAuth2 Client Credentials flow
    public class OAuth2ClientCredentialsInterceptor implements IClientInterceptor {
        
        private final OAuth2AuthorizedClientService clientService;
        
        public OAuth2ClientCredentialsInterceptor(OAuth2AuthorizedClientService clientService) {
            this.clientService = clientService;
        }
        
        @Override
        public void interceptRequest(IHttpRequest request) {
            // Lấy thông tin client hiện tại
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            
            if (authentication != null && authentication.isAuthenticated()) {
                OAuth2AuthorizedClient authorizedClient = clientService.loadAuthorizedClient(
                        "fhir-client", authentication.getName());
                
                if (authorizedClient != null) {
                    String accessToken = authorizedClient.getAccessToken().getTokenValue();
                    request.addHeader("Authorization", "Bearer " + accessToken);
                }
            }
        }
        
        @Override
        public void interceptResponse(IHttpResponse response) {
            // Không cần xử lý response
        }
    }
}
```

#### 2. Service sử dụng OAuth2 Client

```java
@Service
public class PatientService {

    private final IGenericClient fhirClient;
    
    @Autowired
    public PatientService(IGenericClient fhirClient) {
        this.fhirClient = fhirClient;
    }
    
    // Lấy thông tin bệnh nhân theo ID
    public Patient getPatient(String id) {
        return fhirClient.read()
                .resource(Patient.class)
                .withId(id)
                .execute();
    }
    
    // Lấy danh sách bệnh nhân theo tham số tìm kiếm
    public List<Patient> searchPatients(String name, int count) {
        Bundle results = fhirClient.search()
                .forResource(Patient.class)
                .where(Patient.NAME.matches().value(name))
                .count(count)
                .returnBundle(Bundle.class)
                .execute();
        
        return results.getEntry().stream()
                .map(entry -> (Patient) entry.getResource())
                .collect(Collectors.toList());
    }
    
    // Tạo bệnh nhân mới
    public MethodOutcome createPatient(Patient patient) {
        return fhirClient.create()
                .resource(patient)
                .execute();
    }
}
```

### Triển khai SMART on FHIR Launch

SMART on FHIR định nghĩa một flow launch đặc biệt, nơi EHR có thể khởi chạy ứng dụng bên ngoài và cung cấp context như thông tin bệnh nhân.

#### 1. Controller xử lý SMART Launch Sequence

```java
@Controller
public class SmartLaunchController {

    private final OAuth2AuthorizedClientService clientService;
    private final FhirContext fhirContext;
    
    @Autowired
    public SmartLaunchController(OAuth2AuthorizedClientService clientService, FhirContext fhirContext) {
        this.clientService = clientService;
        this.fhirContext = fhirContext;
    }
    
    @GetMapping("/smart/launch")
    public String handleSmartLaunch(
            @RequestParam("iss") String issuer,
            @RequestParam(value = "launch", required = false) String launchToken,
            HttpServletRequest request) {
        
        // Lưu thông tin issuer và launch token vào session
        HttpSession session = request.getSession();
        session.setAttribute("smart.issuer", issuer);
        
        if (launchToken != null) {
            session.setAttribute("smart.launch", launchToken);
        }
        
        // Chuyển hướng đến trang OAuth2 authorization
        return "redirect:/oauth2/authorization/fhir-client";
    }
    
    @GetMapping("/smart/callback")
    public String handleCallback(Authentication authentication, HttpServletRequest request) {
        // Lấy context từ token JWT
        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
        OAuth2AuthorizedClient authorizedClient = clientService.loadAuthorizedClient(
                oauthToken.getAuthorizedClientRegistrationId(),
                oauthToken.getName());
        
        // Trích xuất thông tin từ token
        String accessToken = authorizedClient.getAccessToken().getTokenValue();
        JWT jwt = JWTParser.parse(accessToken);
        
        // Lấy patient ID từ token (nếu có)
        String patientId = jwt.getJWTClaimsSet().getStringClaim("patient");
        
        if (patientId != null) {
            // Lưu patient ID vào session để sử dụng sau này
            request.getSession().setAttribute("smart.patient", patientId);
            
            // Chuyển hướng đến trang patient detail
            return "redirect:/patient/" + patientId;
        }
        
        // Nếu không có patient ID, chuyển đến dashboard chung
        return "redirect:/dashboard";
    }
}
```

#### 2. Tạo SmartContextService để quản lý SMART context

```java
@Service
public class SmartContextService {

    private final IGenericClient fhirClient;
    
    public SmartContextService(IGenericClient fhirClient) {
        this.fhirClient = fhirClient;
    }
    
    // Lấy thông tin bệnh nhân từ context
    public Patient getCurrentPatient(HttpSession session) {
        String patientId = (String) session.getAttribute("smart.patient");
        
        if (patientId != null) {
            return fhirClient.read()
                    .resource(Patient.class)
                    .withId(patientId)
                    .execute();
        }
        
        return null;
    }
    
    // Lấy thông tin bác sĩ từ context
    public Practitioner getCurrentPractitioner(HttpSession session) {
        String practitionerId = (String) session.getAttribute("smart.practitioner");
        
        if (practitionerId != null) {
            return fhirClient.read()
                    .resource(Practitioner.class)
                    .withId(practitionerId)
                    .execute();
        }
        
        return null;
    }
    
    // Lấy thông tin encounter từ context
    public Encounter getCurrentEncounter(HttpSession session) {
        String encounterId = (String) session.getAttribute("smart.encounter");
        
        if (encounterId != null) {
            return fhirClient.read()
                    .resource(Encounter.class)
                    .withId(encounterId)
                    .execute();
        }
        
        return null;
    }
    
    // Kiểm tra quyền hạn của người dùng hiện tại
    public boolean hasScope(Authentication authentication, String scope) {
        if (authentication == null) {
            return false;
        }
        
        return authentication.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("SCOPE_" + scope));
    }
}
```

### Triển khai HAPI FHIR Server với OAuth2

#### 1. Tạo RestfulServer với OAuth2 integration

```java
@Component
public class FhirRestfulServer extends RestfulServer {

    @Autowired
    public FhirRestfulServer(FhirContext fhirContext,
                            List<IResourceProvider> resourceProviders,
                            RequestMappingInfoHandlerMapping handlerMapping) {
        super(fhirContext);
        
        // Đăng ký resource providers
        setResourceProviders(resourceProviders);
        
        // Cấu hình response encoding
        setDefaultResponseEncoding(EncodingEnum.JSON);
        
        // Đăng ký interceptor
        registerInterceptor(new OAuth2AuthorizationInterceptor());
        
        // Thêm CORS support
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.addAllowedOrigin("*");
        CorsInterceptor corsInterceptor = new CorsInterceptor(config);
        registerInterceptor(corsInterceptor);
        
        // Thêm logging
        LoggingInterceptor loggingInterceptor = new LoggingInterceptor();
        loggingInterceptor.setLoggerName("fhir.access");
        loggingInterceptor.setMessageFormat(
                "Path[${servletPath}] Source[${requestHeader.x-forwarded-for}] " +
                "Operation[${operationType} ${operationName} ${idOrResourceName}] " +
                "UA[${requestHeader.user-agent}] Params[${requestParameters}] " +
                "ResponseEncoding[${responseEncodingNoDefault}]");
        registerInterceptor(loggingInterceptor);
    }
    
    // OAuth2 Authorization Interceptor
    private class OAuth2AuthorizationInterceptor extends InterceptorAdapter {
        
        @Override
        public boolean incomingRequestPostProcessed(RequestDetails theRequestDetails, HttpServletRequest theRequest, HttpServletResponse theResponse) throws AuthenticationException {
            
            // Kiểm tra xem đây có phải là metadata request không (luôn cho phép)
            if (theRequestDetails.getRequestPath().equals("metadata")) {
                return true;
            }
            
            // Lấy JWT token từ Authorization header
            String authHeader = theRequest.getHeader("Authorization");
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                unauthorized(theResponse, "No authorization token provided");
                return false;
            }
            
            String token = authHeader.substring(7);
            
            try {
                // Verify token (trong thực tế, sử dụng JwtDecoder của Spring)
                JWT jwt = JWTParser.parse(token);
                
                // Lấy các scopes từ token
                List<String> scopes = jwt.getJWTClaimsSet().getStringListClaim("scope");
                
                // Kiểm tra quyền hạn với resource và operation
                String resourceType = theRequestDetails.getResourceName();
                RestOperationTypeEnum operation = theRequestDetails.getRestOperationType();
                
                boolean hasPermission = false;
                
                // Kiểm tra scope phù hợp với resource type và operation
                if (resourceType != null && operation != null) {
                    if (operation == RestOperationTypeEnum.READ || operation == RestOperationTypeEnum.VREAD 
                            || operation == RestOperationTypeEnum.SEARCH_TYPE) {
                        hasPermission = scopes.contains("patient/" + resourceType + ".read") 
                                || scopes.contains("patient/*." + "read") 
                                || scopes.contains("patient/" + resourceType + ".*") 
                                || scopes.contains("patient/*.*");
                    } else if (operation == RestOperationTypeEnum.CREATE || operation == RestOperationTypeEnum.UPDATE 
                            || operation == RestOperationTypeEnum.DELETE) {
                        hasPermission = scopes.contains("patient/" + resourceType + ".write") 
                                || scopes.contains("patient/*." + "write") 
                                || scopes.contains("patient/" + resourceType + ".*") 
                                || scopes.contains("patient/*.*");
                    }
                }
                
                if (!hasPermission) {
                    unauthorized(theResponse, "Insufficient permissions to access " + resourceType);
                    return false;
                }
                
                // Kiểm tra thông tin patient context nếu có compartment restriction
                String patientId = jwt.getJWTClaimsSet().getStringClaim("patient");
                if (patientId != null && resourceType != null) {
                    // Lưu patientId vào request attribute để sử dụng trong ResourceProvider
                    theRequest.setAttribute("smart.patientId", patientId);
                }
                
                return true;
            } catch (Exception e) {
                unauthorized(theResponse, "Invalid token: " + e.getMessage());
                return false;
            }
        }
        
        private void unauthorized(HttpServletResponse response, String message) throws AuthenticationException {
            throw new AuthenticationException(message);
        }
    }
}
```

#### 2. PatientResourceProvider với bảo mật OAuth2

```java
@Component
public class PatientResourceProvider implements IResourceProvider {

    private final IFhirResourceDao<Patient> patientDao;
    
    @Autowired
    public PatientResourceProvider(IFhirResourceDao<Patient> patientDao) {
        this.patientDao = patientDao;
    }
    
    @Override
    public Class<? extends IBaseResource> getResourceType() {
        return Patient.class;
    }
    
    @Read
    public Patient read(@IdParam IdType theId, RequestDetails theRequestDetails) {
        // Kiểm tra compartment restriction nếu có
        String contextPatientId = (String) theRequestDetails.getServletRequest().getAttribute("smart.patientId");
        
        if (contextPatientId != null && !theId.getIdPart().equals(contextPatientId)) {
            // Chỉ cho phép truy cập vào patient trong context
            throw new ForbiddenOperationException("Access denied to patient outside of current context");
        }
        
        return patientDao.read(theId);
    }
    
    @Search
    public IBundleProvider search(
            @OptionalParam(name = Patient.SP_FAMILY) StringParam familyName,
            @OptionalParam(name = Patient.SP_GIVEN) StringParam givenName,
            @OptionalParam(name = Patient.SP_BIRTHDATE) DateParam birthDate,
            RequestDetails theRequestDetails) {
        
        SearchParameterMap params = new SearchParameterMap();
        
        if (familyName != null) {
            params.add(Patient.SP_FAMILY, familyName);
        }
        
        if (givenName != null) {
            params.add(Patient.SP_GIVEN, givenName);
        }
        
        if (birthDate != null) {
            params.add(Patient.SP_BIRTHDATE, birthDate);
        }
        
        // Kiểm tra compartment restriction nếu có
        String contextPatientId = (String) theRequestDetails.getServletRequest().getAttribute("smart.patientId");
        
        if (contextPatientId != null) {
            // Chỉ tìm kiếm patient trong context
            params.add(Patient.SP_RES_ID, new TokenParam(contextPatientId));
        }
        
        return patientDao.search(params);
    }
    
    @Create
    public MethodOutcome create(@ResourceParam Patient patient, RequestDetails theRequestDetails) {
        // Kiểm tra compartment restriction nếu có
        String contextPatientId = (String) theRequestDetails.getServletRequest().getAttribute("smart.patientId");
        
        if (contextPatientId != null && patient.getIdElement().hasIdPart() && 
                !patient.getIdElement().getIdPart().equals(contextPatientId)) {
            throw new ForbiddenOperationException("Cannot create patient outside of current context");
        }
        
        return patientDao.create(patient);
    }
    
    @Update
    public MethodOutcome update(@IdParam IdType theId, @ResourceParam Patient patient, RequestDetails theRequestDetails) {
        // Kiểm tra compartment restriction nếu có
        String contextPatientId = (String) theRequestDetails.getServletRequest().getAttribute("smart.patientId");
        
        if (contextPatientId != null && !theId.getIdPart().equals(contextPatientId)) {
            throw new ForbiddenOperationException("Cannot update patient outside of current context");
        }
        
        patient.setId(theId);
        return patientDao.update(patient);
    }
    
    @Delete
    public MethodOutcome delete(@IdParam IdType theId, RequestDetails theRequestDetails) {
        // Kiểm tra compartment restriction nếu có
        String contextPatientId = (String) theRequestDetails.getServletRequest().getAttribute("smart.patientId");
        
        if (contextPatientId != null && !theId.getIdPart().equals(contextPatientId)) {
            throw new ForbiddenOperationException("Cannot delete patient outside of current context");
        }
        
        MethodOutcome outcome = new MethodOutcome();
        outcome.setId(theId);
        patientDao.delete(theId);
        return outcome;
    }
}
```

### Cấu hình và triển khai Capability Statement

Capability Statement là một tài nguyên quan trọng trong FHIR, mô tả khả năng của server bao gồm cả thông tin bảo mật:

```java
@Component
public class OAuth2CapabilityStatementProvider implements IServerConformanceProvider<CapabilityStatement> {

    private final FhirContext fhirContext;
    
    @Autowired
    public OAuth2CapabilityStatementProvider(FhirContext fhirContext) {
        this.fhirContext = fhirContext;
    }
    
    @Override
    public CapabilityStatement getServerConformance(HttpServletRequest request) {
        CapabilityStatement capabilityStatement = new CapabilityStatement();
        
        // Thông tin cơ bản
        capabilityStatement.setStatus(Enumerations.PublicationStatus.ACTIVE);
        capabilityStatement.setDate(new Date());
        capabilityStatement.setPublisher("Example Healthcare Organization");
        capabilityStatement.setKind(CapabilityStatement.CapabilityStatementKind.INSTANCE);
        
        // Thông tin phiên bản FHIR
        capabilityStatement.setFhirVersion(Enumerations.FHIRVersion._5_0_0);
        capabilityStatement.setFormat(List.of(new CodeType("json"), new CodeType("xml")));
        
        // Thông tin bảo mật
        CapabilityStatement.CapabilityStatementRestSecurityComponent security = new CapabilityStatement.CapabilityStatementRestSecurityComponent();
        
        // Thêm SMART on FHIR extension
        Extension smartExtension = new Extension();
        smartExtension.setUrl("http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris");
        
        // Thêm các endpoint OAuth2
        smartExtension.addExtension()
            .setUrl("authorize")
            .setValue(new UriType("https://auth.example.com/oauth2/authorize"));
            
        smartExtension.addExtension()
            .setUrl("token")
            .setValue(new UriType("https://auth.example.com/oauth2/token"));
            
        smartExtension.addExtension()
            .setUrl("register")
            .setValue(new UriType("https://auth.example.com/oauth2/register"));
            
        security.addExtension(smartExtension);
        
        // Thêm thông tin service
        CodeableConcept serviceCC = new CodeableConcept();
        serviceCC.addCoding()
            .setSystem("http://terminology.hl7.org/CodeSystem/restful-security-service")
            .setCode("SMART-on-FHIR")
            .setDisplay("SMART on FHIR");
        security.setService(List.of(serviceCC));
        
        // Thêm thông tin mô tả bảo mật
        security.setDescription("OAuth2 using SMART-on-FHIR profile");
        
        // Thêm resource component cho mỗi loại resource được hỗ trợ
        CapabilityStatement.CapabilityStatementRestComponent rest = new CapabilityStatement.CapabilityStatementRestComponent();
        rest.setMode(CapabilityStatement.RestfulCapabilityMode.SERVER);
        rest.setSecurity(security);
        
        // Thêm Patient resource
        CapabilityStatement.CapabilityStatementRestResourceComponent patientResource = new CapabilityStatement.CapabilityStatementRestResourceComponent();
        patientResource.setType("Patient");
        patientResource.setProfile("http://hl7.org/fhir/StructureDefinition/Patient");
        
        // Thêm các tương tác được hỗ trợ
        patientResource.addInteraction()
            .setCode(CapabilityStatement.TypeRestfulInteraction.READ)
            .setDocumentation("Đọc thông tin bệnh nhân theo ID");
            
        patientResource.addInteraction()
            .setCode(CapabilityStatement.TypeRestfulInteraction.SEARCH_TYPE)
            .setDocumentation("Tìm kiếm bệnh nhân theo các tiêu chí");
            
        patientResource.addInteraction()
            .setCode(CapabilityStatement.TypeRestfulInteraction.CREATE)
            .setDocumentation("Tạo bệnh nhân mới");
            
        patientResource.addInteraction()
            .setCode(CapabilityStatement.TypeRestfulInteraction.UPDATE)
            .setDocumentation("Cập nhật thông tin bệnh nhân");
            
        patientResource.addInteraction()
            .setCode(CapabilityStatement.TypeRestfulInteraction.DELETE)
            .setDocumentation("Xóa bệnh nhân");
        
        // Thêm search params
        patientResource.addSearchParam()
            .setName("family")
            .setType(Enumerations.SearchParamType.STRING)
            .setDocumentation("Tìm kiếm theo họ");
            
        patientResource.addSearchParam()
            .setName("given")
            .setType(Enumerations.SearchParamType.STRING)
            .setDocumentation("Tìm kiếm theo tên");
            
        patientResource.addSearchParam()
            .setName("birthdate")
            .setType(Enumerations.SearchParamType.DATE)
            .setDocumentation("Tìm kiếm theo ngày sinh");
        
        rest.addResource(patientResource);
        
        // Thêm tương tự cho các resource type khác (Observation, Encounter, etc.)
        
        capabilityStatement.addRest(rest);
        
        return capabilityStatement;
    }
}
```

### Cấu hình file Properties cho OAuth2

Để dễ dàng cấu hình và triển khai trên nhiều môi trường, bạn nên sử dụng các file properties/yaml:

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          fhir-client:
            client-id: ${OAUTH2_CLIENT_ID:fhir-client}
            client-secret: ${OAUTH2_CLIENT_SECRET:your-client-secret}
            authorization-grant-type: authorization_code
            redirect-uri: ${OAUTH2_REDIRECT_URI:{baseUrl}/login/oauth2/code/{registrationId}}
            scope: ${OAUTH2_SCOPES:launch/patient,patient/*.read,patient/*.write}
        provider:
          fhir-client:
            authorization-uri: ${OAUTH2_AUTH_URI:https://auth.example.com/oauth2/authorize}
            token-uri: ${OAUTH2_TOKEN_URI:https://auth.example.com/oauth2/token}
            jwk-set-uri: ${OAUTH2_JWK_URI:https://auth.example.com/.well-known/jwks.json}
            user-info-uri: ${OAUTH2_USERINFO_URI:https://auth.example.com/userinfo}
            user-name-attribute: sub
      resourceserver:
        jwt:
          issuer-uri: ${OAUTH2_ISSUER_URI:https://auth.example.com}
          jwk-set-uri: ${OAUTH2_JWK_URI:https://auth.example.com/.well-known/jwks.json}

# Cấu hình HAPI FHIR
hapi:
  fhir:
    server:
      path: /fhir
      address: ${FHIR_SERVER_ADDRESS:http://localhost:8080/fhir}
    rest:
      server-name: HAPI FHIR R5 Server
      server-version: 6.4.0
      implementation-description: HAPI FHIR R5 Server with OAuth2
      default-page-size: 20
      max-page-size: 200
      default-response-encoding: json
    validation:
      enabled: true
      request-only: false
      server-mode: ENABLED
    oauth2:
      enabled: true
      introspection:
        url: ${OAUTH2_INTROSPECT_URL:https://auth.example.com/oauth2/introspect}
        client-id: ${OAUTH2_RESOURCE_ID:fhir-resource-server}
        client-secret: ${OAUTH2_RESOURCE_SECRET:resource-server-secret}
```

### Tích hợp với Keycloak cho SMART on FHIR

Keycloak là một giải pháp Identity và Access Management mã nguồn mở phổ biến cho triển khai SMART on FHIR. Dưới đây là cách tích hợp Keycloak với HAPI FHIR:

#### 1. Cấu hình Keycloak Realm và Client

Đầu tiên, bạn cần thiết lập Keycloak:

* Tạo Realm "healthcare"
* Tạo Client "fhir-client" (đây là ứng dụng của bạn)
* Tạo Client "fhir-resource-server" (đây là FHIR server)
* Tạo các Roles và SMART on FHIR Scopes

#### 2. Cấu hình KeycloakConfig trong ứng dụng

```java
@Configuration
public class KeycloakConfig {

    @Value("${keycloak.auth-server-url}")
    private String keycloakServerUrl;

    @Value("${keycloak.realm}")
    private String realm;

    @Bean
    public KeycloakClientRequestFactory keycloakClientRequestFactory() {
        return new KeycloakClientRequestFactory();
    }

    @Bean
    public KeycloakRestTemplate keycloakRestTemplate(KeycloakClientRequestFactory factory) {
        return new KeycloakRestTemplate(factory);
    }

    @Bean
    public PolicyEnforcer policyEnforcer() {
        String configPath = "keycloak-policy-enforcer.json";
        try (InputStream is = getClass().getClassLoader().getResourceAsStream(configPath)) {
            return PolicyEnforcer.builder()
                    .configInputStream(is)
                    .build();
        } catch (IOException e) {
            throw new RuntimeException("Failed to load policy enforcer configuration", e);
        }
    }

    @Bean
    public FilterRegistrationBean<KeycloakAuthenticationFilter> keycloakAuthenticationFilter() {
        FilterRegistrationBean<KeycloakAuthenticationFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new KeycloakAuthenticationFilter());
        registrationBean.addUrlPatterns("/fhir/*");
        registrationBean.setOrder(1);
        return registrationBean;
    }

    // Cấu hình KeycloakAuthenticationProvider
    @Bean
    public KeycloakAuthenticationProvider keycloakAuthenticationProvider() {
        KeycloakAuthenticationProvider provider = new KeycloakAuthenticationProvider();
        provider.setGrantedAuthoritiesMapper(new SimpleAuthorityMapper());
        return provider;
    }

    // Cấu hình SecurityAdapter
    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        http
            .csrf().disable()
            .authorizeExchange()
                .pathMatchers("/fhir/metadata").permitAll()
                .pathMatchers("/fhir/**").authenticated()
                .anyExchange().permitAll()
            .and()
            .oauth2ResourceServer()
                .jwt()
                .jwtAuthenticationConverter(keycloakJwtAuthenticationConverter());
        return http.build();
    }

    private Converter<Jwt, AbstractAuthenticationToken> keycloakJwtAuthenticationConverter() {
        return new ReactiveJwtAuthenticationConverterAdapter(new KeycloakJwtAuthenticationConverter());
    }

    // Cấu hình adapter cho Keycloak
    @Bean
    public KeycloakConfigResolver keycloakConfigResolver() {
        return new KeycloakSpringBootConfigResolver();
    }
}
```

#### 3. Mapper cho thông tin SMART on FHIR

Keycloak hỗ trợ custom protocol mapper để thêm thông tin SMART context vào token:

```java
public class SmartOnFhirContextMapper extends AbstractOIDCProtocolMapper implements OIDCAccessTokenMapper {
    
    private static final String PROVIDER_ID = "smart-on-fhir-context-mapper";
    private static final String PATIENT_ID = "patient";
    private static final String ENCOUNTER_ID = "encounter";
    
    @Override
    public String getDisplayType() {
        return "SMART on FHIR Context";
    }
    
    @Override
    public String getProtocol() {
        return OIDCLoginProtocol.LOGIN_PROTOCOL;
    }
    
    @Override
    public String getId() {
        return PROVIDER_ID;
    }
    
    @Override
    protected void setClaim(IDToken token, ProtocolMapperModel mappingModel, KeycloakSession session, 
                          UserSessionModel userSession, ClientSessionContext clientSessionCtx) {
        
        // Lấy thông tin patient từ launch context
        String launchContext = userSession.getNote("launch_context");
        if (launchContext != null) {
            try {
                JSONObject context = new JSONObject(launchContext);
                if (context.has(PATIENT_ID)) {
                    token.getOtherClaims().put(PATIENT_ID, context.getString(PATIENT_ID));
                }
                if (context.has(ENCOUNTER_ID)) {
                    token.getOtherClaims().put(ENCOUNTER_ID, context.getString(ENCOUNTER_ID));
                }
            } catch (Exception e) {
                // Xử lý lỗi
            }
        }
    }
}
```

### Sử dụng SMART on FHIR App Launcher

Để cung cấp một môi trường test hoàn chỉnh, bạn có thể triển khai SMART App Launcher:

```java
@Controller
@RequestMapping("/smart-launcher")
public class SmartAppLauncherController {

    private final IFhirResourceDao<Patient> patientDao;
    private final IFhirResourceDao<Encounter> encounterDao;
    private final FhirContext fhirContext;
    
    @Autowired
    public SmartAppLauncherController(IFhirResourceDao<Patient> patientDao, 
                                      IFhirResourceDao<Encounter> encounterDao, 
                                      FhirContext fhirContext) {
        this.patientDao = patientDao;
        this.encounterDao = encounterDao;
        this.fhirContext = fhirContext;
    }
    
    @GetMapping
    public String showLauncher(Model model) {
        // Lấy danh sách patient để hiển thị
        IBundleProvider patientBundle = patientDao.search(new SearchParameterMap());
        List<Patient> patients = patientBundle.getResources(0, 10);
        model.addAttribute("patients", patients);
        
        // Lấy danh sách encounter để hiển thị
        IBundleProvider encounterBundle = encounterDao.search(new SearchParameterMap());
        List<Encounter> encounters = encounterBundle.getResources(0, 10);
        model.addAttribute("encounters", encounters);
        
        // Thêm danh sách ứng dụng SMART
        model.addAttribute("apps", getSmartApps());
        
        return "smart-launcher";
    }
    
    @PostMapping("/launch")
    public String launchApp(@RequestParam String appUrl,
                           @RequestParam(required = false) String patientId,
                           @RequestParam(required = false) String encounterId,
                           HttpServletRequest request) {
        
        // Tạo launch context
        String launchToken = generateLaunchToken(patientId, encounterId, request);
        
        // Tạo redirect URL
        String redirectUrl = appUrl + "?iss=" + getServerBaseUrl(request) + 
                             "&launch=" + launchToken;
        
        return "redirect:" + redirectUrl;
    }
    
    private String generateLaunchToken(String patientId, String encounterId, HttpServletRequest request) {
        // Tạo context chứa thông tin patient và encounter
        JSONObject launchContext = new JSONObject();
        if (patientId != null && !patientId.isEmpty()) {
            launchContext.put("patient", patientId);
        }
        if (encounterId != null && !encounterId.isEmpty()) {
            launchContext.put("encounter", encounterId);
        }
        
        // Lưu context vào session để sử dụng sau này
        HttpSession session = request.getSession();
        String launchToken = UUID.randomUUID().toString();
        session.setAttribute("smart_launch_" + launchToken, launchContext.toString());
        
        return launchToken;
    }
    
    private String getServerBaseUrl(HttpServletRequest request) {
        String scheme = request.getScheme();
        String serverName = request.getServerName();
        int port = request.getServerPort();
        String contextPath = request.getContextPath();
        
        return scheme + "://" + serverName + ":" + port + contextPath;
    }
    
    private List<Map<String, String>> getSmartApps() {
        List<Map<String, String>> apps = new ArrayList<>();
        
        // Thêm một số ứng dụng SMART mẫu
        Map<String, String> growthChart = new HashMap<>();
        growthChart.put("name", "Growth Chart");
        growthChart.put("url", "https://smart.hl7.org/growth-chart-app/launch.html");
        growthChart.put("description", "Pediatric Growth Chart Application");
        apps.add(growthChart);
        
        Map<String, String> bpCentiles = new HashMap<>();
        bpCentiles.put("name", "BP Centiles");
        bpCentiles.put("url", "https://smart.hl7.org/bp-centiles-app/launch.html");
        bpCentiles.put("description", "Blood Pressure Percentiles Application");
        apps.add(bpCentiles);
        
        Map<String, String> cardiacRisk = new HashMap<>();
        cardiacRisk.put("name", "Cardiac Risk");
        cardiacRisk.put("url", "https://smart.hl7.org/cardiac-risk-app/launch.html");
        cardiacRisk.put("description", "Cardiac Risk Assessment Application");
        apps.add(cardiacRisk);
        
        return apps;
    }
}
```

### Lớp trung gian: OAuth2FhirClientContext

Để giúp quản lý context của FHIR client với OAuth2, chúng ta có thể tạo một lớp trung gian:

```java
@Component
public class OAuth2FhirClientContext {

    private final FhirContext fhirContext;
    private final RestTemplateBuilder restTemplateBuilder;
    private final OAuth2AuthorizedClientService clientService;
    
    // ThreadLocal để lưu client cho mỗi thread
    private final ThreadLocal<IGenericClient> threadLocalClient = new ThreadLocal<>();
    
    @Autowired
    public OAuth2FhirClientContext(FhirContext fhirContext, 
                                   RestTemplateBuilder restTemplateBuilder,
                                   OAuth2AuthorizedClientService clientService) {
        this.fhirContext = fhirContext;
        this.restTemplateBuilder = restTemplateBuilder;
        this.clientService = clientService;
    }
    
    // Lấy client cho người dùng hiện tại
    public IGenericClient getClient(Authentication authentication, String serverBase) {
        if (threadLocalClient.get() != null) {
            return threadLocalClient.get();
        }
        
        IGenericClient client = fhirContext.newRestfulGenericClient(serverBase);
        
        // Thêm interceptor để xử lý OAuth2 token
        client.registerInterceptor(new OAuth2ClientInterceptor(authentication, clientService));
        
        // Lưu client vào ThreadLocal
        threadLocalClient.set(client);
        
        return client;
    }
    
    // Xóa client sau khi sử dụng
    public void clearClient() {
        threadLocalClient.remove();
    }
    
    // Interceptor để thêm OAuth2 token vào request
    private class OAuth2ClientInterceptor implements IClientInterceptor {
        
        private final Authentication authentication;
        private final OAuth2AuthorizedClientService clientService;
        
        public OAuth2ClientInterceptor(Authentication authentication, OAuth2AuthorizedClientService clientService) {
            this.authentication = authentication;
            this.clientService = clientService;
        }
        
        @Override
        public void interceptRequest(IHttpRequest request) {
            if (authentication != null && authentication.isAuthenticated()) {
                OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
                
                OAuth2AuthorizedClient authorizedClient = clientService.loadAuthorizedClient(
                        oauthToken.getAuthorizedClientRegistrationId(),
                        authentication.getName());
                
                if (authorizedClient != null) {
                    String accessToken = authorizedClient.getAccessToken().getTokenValue();
                    request.addHeader("Authorization", "Bearer " + accessToken);
                }
            }
        }
        
        @Override
        public void interceptResponse(IHttpResponse response) {
            // Không cần xử lý response
        }
    }
}
```

### Quản lý Refresh Token

Để xử lý trường hợp access token hết hạn, cần cài đặt cơ chế refresh token:

```java
@Component
public class OAuth2TokenRefresher {

    private final OAuth2AuthorizedClientService clientService;
    private final ClientRegistrationRepository clientRegistrationRepository;
    private final OAuth2AuthorizedClientRepository authorizedClientRepository;
    
    @Autowired
    public OAuth2TokenRefresher(OAuth2AuthorizedClientService clientService,
                              ClientRegistrationRepository clientRegistrationRepository,
                              OAuth2AuthorizedClientRepository authorizedClientRepository) {
        this.clientService = clientService;
        this.clientRegistrationRepository = clientRegistrationRepository;
        this.authorizedClientRepository = authorizedClientRepository;
    }
    
    /**
     * Kiểm tra và refresh token nếu cần
     */
    public OAuth2AuthorizedClient checkAndRefreshToken(String clientRegistrationId, String principalName, 
                                                       HttpServletRequest request, HttpServletResponse response) {
        
        // Lấy thông tin client đã authorized
        OAuth2AuthorizedClient authorizedClient = clientService.loadAuthorizedClient(
                clientRegistrationId, principalName);
        
        if (authorizedClient != null) {
            // Kiểm tra xem token có sắp hết hạn không (còn < 5 phút)
            OAuth2AccessToken accessToken = authorizedClient.getAccessToken();
            Instant expiresAt = accessToken.getExpiresAt();
            
            if (expiresAt != null && Instant.now().plusSeconds(300).isAfter(expiresAt)) {
                // Token sắp hết hạn, tiến hành refresh
                OAuth2RefreshToken refreshToken = authorizedClient.getRefreshToken();
                
                if (refreshToken != null) {
                    try {
                        // Lấy thông tin client registration
                        ClientRegistration clientRegistration = clientRegistrationRepository.findByRegistrationId(clientRegistrationId);
                        
                        // Tạo authentication object
                        Authentication principal = new UsernamePasswordAuthenticationToken(principalName, "n/a");
                        
                        // Refresh token
                        OAuth2AuthorizedClient refreshedClient = refreshAuthorizedClient(
                                authorizedClient, clientRegistration, refreshToken);
                        
                        // Lưu client đã refresh
                        authorizedClientRepository.saveAuthorizedClient(
                                refreshedClient, principal, request, response);
                        
                        return refreshedClient;
                    } catch (Exception e) {
                        // Xử lý lỗi khi refresh token
                        throw new OAuth2AuthenticationException(
                                new OAuth2Error("invalid_token", "Failed to refresh token", null), e);
                    }
                }
            }
        }
        
        return authorizedClient;
    }
    
    /**
     * Refresh token và tạo OAuth2AuthorizedClient mới
     */
    private OAuth2AuthorizedClient refreshAuthorizedClient(OAuth2AuthorizedClient client, 
                                                         ClientRegistration registration,
                                                         OAuth2RefreshToken refreshToken) {
        
        // Chuẩn bị request parameters
        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
        parameters.add(OAuth2ParameterNames.GRANT_TYPE, AuthorizationGrantType.REFRESH_TOKEN.getValue());
        parameters.add(OAuth2ParameterNames.REFRESH_TOKEN, refreshToken.getTokenValue());
        
        // Thêm client authentication nếu cần
        if (ClientAuthenticationMethod.CLIENT_SECRET_BASIC.equals(registration.getClientAuthenticationMethod())) {
            // Basic Authentication
            parameters.add(OAuth2ParameterNames.CLIENT_ID, registration.getClientId());
            parameters.add(OAuth2ParameterNames.CLIENT_SECRET, registration.getClientSecret());
        }
        
        // Tạo request
        RestTemplate restTemplate = new RestTemplate();
        
        // Thêm HTTP Basic Auth nếu cần
        if (ClientAuthenticationMethod.CLIENT_SECRET_BASIC.equals(registration.getClientAuthenticationMethod())) {
            restTemplate.getInterceptors().add(new BasicAuthenticationInterceptor(
                    registration.getClientId(), registration.getClientSecret()));
        }
        
        // Thực hiện request
        ResponseEntity<OAuth2AccessTokenResponse> response = restTemplate.exchange(
                registration.getProviderDetails().getTokenUri(),
                HttpMethod.POST,
                new HttpEntity<>(parameters),
                OAuth2AccessTokenResponse.class);
        
        OAuth2AccessTokenResponse tokenResponse = response.getBody();
        
        // Tạo OAuth2AuthorizedClient mới
        OAuth2AccessToken newAccessToken = new OAuth2AccessToken(
                OAuth2AccessToken.TokenType.BEARER,
                tokenResponse.getAccessToken().getTokenValue(),
                tokenResponse.getAccessToken().getIssuedAt(),
                tokenResponse.getAccessToken().getExpiresAt(),
                new HashSet<>(tokenResponse.getAccessToken().getScopes()));
        
        OAuth2RefreshToken newRefreshToken = null;
        if (tokenResponse.getRefreshToken() != null) {
            newRefreshToken = tokenResponse.getRefreshToken();
        } else {
            // Giữ refresh token cũ nếu server không trả về refresh token mới
            newRefreshToken = refreshToken;
        }
        
        return new OAuth2AuthorizedClient(
                registration,
                client.getPrincipalName(),
                newAccessToken,
                newRefreshToken);
    }
}
```

### Triển khai Exception Handling cho OAuth2

```java
@ControllerAdvice
public class OAuth2ExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(OAuth2ExceptionHandler.class);
    
    @ExceptionHandler(OAuth2AuthenticationException.class)
    public ResponseEntity<Map<String, String>> handleOAuth2AuthenticationException(OAuth2AuthenticationException ex) {
        logger.error("OAuth2 Authentication Exception", ex);
        
        Map<String, String> error = new HashMap<>();
        error.put("error", ex.getError().getErrorCode());
        error.put("error_description", ex.getError().getDescription());
        
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
    }
    
    @ExceptionHandler(ClientAuthorizationException.class)
    public String handleClientAuthorizationException(ClientAuthorizationException ex, 
                                                    HttpServletRequest request) {
        logger.error("Client Authorization Exception", ex);
        
        // Xóa token hiện tại và chuyển hướng đến trang login
        request.getSession().invalidate();
        
        return "redirect:/login";
    }
    
    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<Map<String, String>> handleAccessDeniedException(AccessDeniedException ex) {
        logger.error("Access Denied Exception", ex);
        
        Map<String, String> error = new HashMap<>();
        error.put("error", "access_denied");
        error.put("error_description", "Insufficient permissions to access the requested resource");
        
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
    }
}
```

### Kết luận

HAPI FHIR kết hợp với OAuth2 và SMART on FHIR tạo nên nền tảng mạnh mẽ cho việc xây dựng các ứng dụng y tế hiện đại, đảm bảo tính bảo mật và interoperability. Bài viết đã trình bày chi tiết về:

1. **Cấu hình OAuth2 trong Spring Boot**: Triển khai các thành phần cần thiết để tích hợp OAuth2 với Spring Security
2. **HAPI FHIR Client với OAuth2**: Tạo client có khả năng xác thực qua OAuth2
3. **SMART on FHIR Launch Context**: Xử lý và duy trì context thông qua quá trình launch
4. **FHIR Server bảo mật bằng OAuth2**: Triển khai server với các cơ chế xác thực và ủy quyền
5. **Capability Statement với thông tin bảo mật**: Mô tả khả năng bảo mật của server
6. **Tích hợp Keycloak**: Sử dụng Keycloak như một Identity Provider cho SMART on FHIR
7. **Xử lý Refresh Token**: Tự động làm mới token hết hạn
8. **Exception Handling**: Xử lý các lỗi liên quan đến OAuth2

Với kiến trúc này, bạn có thể xây dựng các ứng dụng y tế tuân thủ các tiêu chuẩn mới nhất, đảm bảo bảo mật dữ liệu y tế nhạy cảm, đồng thời cung cấp trải nghiệm người dùng liền mạch.

### Tài nguyên bổ sung

* [SMART on FHIR Documentation](https://docs.smarthealthit.org/)
* [HAPI FHIR Documentation](https://hapifhir.io/hapi-fhir/docs/)
* [Spring Security OAuth2 Guide](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html)
* [Keycloak Documentation](https://www.keycloak.org/documentation)
* [HL7 FHIR Security & Privacy Module](https://hl7.org/fhir/security.html)
* [SMART App Launch Framework](http://hl7.org/fhir/smart-app-launch/)
