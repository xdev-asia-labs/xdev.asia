---
id: 3ebfc6a4-ffd7-4d16-96c4-683f781c58da
title: 'hapi-fhir-spring-boot'
slug: hapi-fhir-spring-boot
description: 'HAPI FHIR là một thư viện mã nguồn mở Java cung cấp nhiều công cụ để làm việc với tiêu chuẩn HL7 FHIR. Nó hỗ trợ đầy đủ từ FHIR DSTU2 đến R5, hiện đang ở phiên bản 6.4.0 (tính đến thời điểm viết bài). Kết hợp với Spring…'
duration_minutes: 27
is_free: true
video_url: null
sort_order: 20
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
HAPI FHIR là một thư viện mã nguồn mở Java cung cấp nhiều công cụ để làm việc với tiêu chuẩn HL7 FHIR. Nó hỗ trợ đầy đủ từ FHIR DSTU2 đến R5, hiện đang ở phiên bản 6.4.0 (tính đến thời điểm viết bài). Kết hợp với Spring Boot, HAPI FHIR tạo nên một nền tảng mạnh mẽ cho việc phát triển các ứng dụng y tế hiện đại.

Các tính năng chính của HAPI FHIR bao gồm:

* Mô hình dữ liệu đầy đủ cho tất cả FHIR Resources
* Client API để tương tác với FHIR servers
* Server framework để triển khai FHIR RESTful API
* JPA server với persistence và search
* Validation framework
* Hỗ trợ cho các operations FHIR

### Thiết lập dự án

#### 1. Khởi tạo dự án Spring Boot

Đầu tiên, tạo một dự án Spring Boot mới sử dụng Spring Initializr (https://start.spring.io/) với các dependency cơ bản: Spring Web, Spring Data JPA, và PostgreSQL Driver.

#### 2. Thêm HAPI FHIR dependencies

Thêm các dependency của HAPI FHIR vào file `pom.xml`:

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

<!-- HAPI FHIR JPA Server (nếu bạn muốn triển khai FHIR server) -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-jpaserver-base</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- HAPI FHIR Validation Resources -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-validation-resources-r5</artifactId>
    <version>6.4.0</version>
</dependency>
```

### Mô hình tích hợp HAPI FHIR

Có ba mô hình chính để tích hợp HAPI FHIR trong Spring Boot:

1. **FHIR Client**: Kết nối đến FHIR server có sẵn
2. **FHIR REST API**: Tạo API tuân thủ FHIR từ ứng dụng Spring Boot
3. **FHIR JPA Server**: Triển khai FHIR server đầy đủ với persistence

Chúng ta sẽ khám phá từng mô hình một cách chi tiết.

### Mô hình 1: HAPI FHIR Client

Mô hình này phù hợp khi bạn cần tích hợp với FHIR server bên ngoài hoặc sử dụng FHIR API của bên thứ ba.

#### Cấu hình FHIR Client

```java
@Configuration
public class FhirClientConfig {

    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IGenericClient fhirClient(FhirContext fhirContext) {
        // Cấu hình client factory - ví dụ sử dụng Apache HTTP Client
        IRestfulClientFactory factory = fhirContext.getRestfulClientFactory();
        factory.setSocketTimeout(60000); // timeout sau 60 giây
        factory.setConnectTimeout(15000); // timeout kết nối sau 15 giây
        
        // Tạo client kết nối đến FHIR server
        IGenericClient client = fhirContext.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
        
        // Thêm interceptor để xử lý authentication
        client.registerInterceptor(new BearerTokenAuthInterceptor("YOUR_TOKEN"));
        
        // Thêm interceptor để log requests và responses
        client.registerInterceptor(new LoggingInterceptor(true));
        
        return client;
    }
    
    // Custom interceptor cho Bearer Token Authentication
    public class BearerTokenAuthInterceptor implements IClientInterceptor {
        private final String token;
        
        public BearerTokenAuthInterceptor(String token) {
            this.token = token;
        }
        
        @Override
        public void interceptRequest(IHttpRequest request) {
            request.addHeader("Authorization", "Bearer " + token);
        }
        
        @Override
        public void interceptResponse(IHttpResponse response) {
            // Không cần xử lý response
        }
    }
}
```

#### Service để tương tác với FHIR Server

```java
@Service
public class PatientService {
    private final IGenericClient fhirClient;
    private final FhirContext fhirContext;
    
    @Autowired
    public PatientService(IGenericClient fhirClient, FhirContext fhirContext) {
        this.fhirClient = fhirClient;
        this.fhirContext = fhirContext;
    }
    
    // Lấy thông tin bệnh nhân theo ID
    public Patient getPatient(String id) {
        try {
            return fhirClient.read()
                    .resource(Patient.class)
                    .withId(id)
                    .execute();
        } catch (ResourceNotFoundException e) {
            throw new EntityNotFoundException("Patient with ID " + id + " not found");
        }
    }
    
    // Tìm kiếm bệnh nhân theo họ
    public List<Patient> findPatientsByName(String familyName) {
        Bundle results = fhirClient.search()
                .forResource(Patient.class)
                .where(Patient.FAMILY.matches().value(familyName))
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
    
    // Cập nhật thông tin bệnh nhân
    public MethodOutcome updatePatient(Patient patient) {
        return fhirClient.update()
                .resource(patient)
                .execute();
    }
    
    // Xóa bệnh nhân
    public void deletePatient(String id) {
        fhirClient.delete()
                .resourceById("Patient", id)
                .execute();
    }
    
    // Tìm kiếm tất cả các observation của bệnh nhân
    public List<Observation> getPatientObservations(String patientId) {
        Bundle results = fhirClient.search()
                .forResource(Observation.class)
                .where(Observation.SUBJECT.hasId("Patient/" + patientId))
                .returnBundle(Bundle.class)
                .execute();
        
        return results.getEntry().stream()
                .map(entry -> (Observation) entry.getResource())
                .collect(Collectors.toList());
    }
}
```

#### Controller để tích hợp với ứng dụng

```java
@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private final PatientService patientService;
    private final FhirContext fhirContext;
    
    @Autowired
    public PatientController(PatientService patientService, FhirContext fhirContext) {
        this.patientService = patientService;
        this.fhirContext = fhirContext;
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PatientDTO> getPatient(@PathVariable String id) {
        Patient fhirPatient = patientService.getPatient(id);
        PatientDTO dto = convertToDTO(fhirPatient);
        return ResponseEntity.ok(dto);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<PatientDTO>> searchPatients(@RequestParam String familyName) {
        List<Patient> patients = patientService.findPatientsByName(familyName);
        List<PatientDTO> dtos = patients.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }
    
    @PostMapping
    public ResponseEntity<PatientDTO> createPatient(@RequestBody PatientDTO patientDTO) {
        Patient fhirPatient = convertToFhir(patientDTO);
        MethodOutcome outcome = patientService.createPatient(fhirPatient);
        Patient created = (Patient) outcome.getResource();
        PatientDTO createdDTO = convertToDTO(created);
        
        return ResponseEntity
                .created(URI.create("/api/patients/" + created.getIdElement().getIdPart()))
                .body(createdDTO);
    }
    
    // Helper methods to convert between FHIR models and DTOs
    private PatientDTO convertToDTO(Patient patient) {
        PatientDTO dto = new PatientDTO();
        dto.setId(patient.getIdElement().getIdPart());
        
        if (patient.hasName()) {
            HumanName name = patient.getNameFirstRep();
            dto.setFirstName(name.getGivenAsSingleString());
            dto.setLastName(name.getFamily());
        }
        
        if (patient.hasBirthDate()) {
            dto.setBirthDate(patient.getBirthDate());
        }
        
        if (patient.hasGender()) {
            dto.setGender(patient.getGender().toString());
        }
        
        return dto;
    }
    
    private Patient convertToFhir(PatientDTO dto) {
        Patient patient = new Patient();
        
        if (dto.getId() != null) {
            patient.setId(dto.getId());
        }
        
        HumanName name = patient.addName();
        name.setFamily(dto.getLastName());
        name.addGiven(dto.getFirstName());
        
        if (dto.getBirthDate() != null) {
            patient.setBirthDate(dto.getBirthDate());
        }
        
        if (dto.getGender() != null) {
            patient.setGender(Enumerations.AdministrativeGender.fromCode(dto.getGender()));
        }
        
        return patient;
    }
}
```

### Mô hình 2: FHIR REST API

Mô hình này cho phép bạn tạo một API RESTful tuân thủ chuẩn FHIR, nhưng với logic xử lý và lưu trữ tùy chỉnh của riêng bạn.

#### Cấu hình FHIR Server

```java
@Configuration
public class FhirRestConfig {

    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IFhirResourceDao<Patient> patientDao(PatientRepository patientRepository, FhirContext fhirContext) {
        return new CustomPatientDao(patientRepository, fhirContext);
    }
    
    @Bean
    public RestfulServer fhirServer(FhirContext fhirContext, List<IResourceProvider> resourceProviders) {
        RestfulServer server = new RestfulServer(fhirContext);
        server.setResourceProviders(resourceProviders);
        
        // Các cấu hình khác
        server.setDefaultResponseEncoding(EncodingEnum.JSON);
        server.setPagingProvider(new DefaultBundlePageProvider(100));
        
        return server;
    }
}
```

#### Provider để phục vụ FHIR Resources

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
    public Patient read(@IdParam IdType theId) {
        return patientDao.read(theId);
    }
    
    @Search
    public List<Patient> search(
            @OptionalParam(name = Patient.SP_FAMILY) StringParam familyName,
            @OptionalParam(name = Patient.SP_GIVEN) StringParam givenName,
            @OptionalParam(name = Patient.SP_BIRTHDATE) DateParam birthDate) {
        
        SearchParameterMap searchParams = new SearchParameterMap();
        
        if (familyName != null) {
            searchParams.add(Patient.SP_FAMILY, familyName);
        }
        
        if (givenName != null) {
            searchParams.add(Patient.SP_GIVEN, givenName);
        }
        
        if (birthDate != null) {
            searchParams.add(Patient.SP_BIRTHDATE, birthDate);
        }
        
        IBundleProvider results = patientDao.search(searchParams);
        return results.getResources(0, results.size());
    }
    
    @Create
    public MethodOutcome create(@ResourceParam Patient patient) {
        return patientDao.create(patient);
    }
    
    @Update
    public MethodOutcome update(@IdParam IdType theId, @ResourceParam Patient patient) {
        patient.setId(theId);
        return patientDao.update(patient);
    }
    
    @Delete
    public void delete(@IdParam IdType theId) {
        patientDao.delete(theId);
    }
}
```

#### DAO Implementation với tích hợp database

```java
public class CustomPatientDao implements IFhirResourceDao<Patient> {

    private final PatientRepository patientRepository;
    private final FhirContext fhirContext;
    
    public CustomPatientDao(PatientRepository patientRepository, FhirContext fhirContext) {
        this.patientRepository = patientRepository;
        this.fhirContext = fhirContext;
    }
    
    @Override
    public Patient read(IdType theId) {
        return patientRepository.findById(theId.getIdPart())
                .orElseThrow(() -> new ResourceNotFoundException("Patient with ID " + theId.getIdPart() + " not found"));
    }
    
    @Override
    public MethodOutcome create(Patient patient) {
        // Tạo ID mới nếu chưa có
        if (patient.getIdElement().isEmpty()) {
            patient.setId(IdType.newRandomUuid());
        }
        
        Patient savedPatient = patientRepository.save(patient);
        MethodOutcome outcome = new MethodOutcome();
        outcome.setResource(savedPatient);
        outcome.setCreated(true);
        outcome.setId(savedPatient.getIdElement());
        
        return outcome;
    }
    
    @Override
    public MethodOutcome update(Patient patient) {
        // Kiểm tra xem resource có tồn tại không
        read(patient.getIdElement());
        
        Patient updatedPatient = patientRepository.save(patient);
        MethodOutcome outcome = new MethodOutcome();
        outcome.setResource(updatedPatient);
        outcome.setId(updatedPatient.getIdElement());
        
        return outcome;
    }
    
    @Override
    public IBundleProvider search(SearchParameterMap params) {
        // Triển khai tìm kiếm dựa trên các tham số
        String familyName = null;
        String givenName = null;
        Date birthDate = null;
        
        if (params.containsKey(Patient.SP_FAMILY)) {
            StringParam param = (StringParam) params.get(Patient.SP_FAMILY).get(0).getValuesAsQueryTokens().get(0);
            familyName = param.getValue();
        }
        
        if (params.containsKey(Patient.SP_GIVEN)) {
            StringParam param = (StringParam) params.get(Patient.SP_GIVEN).get(0).getValuesAsQueryTokens().get(0);
            givenName = param.getValue();
        }
        
        if (params.containsKey(Patient.SP_BIRTHDATE)) {
            DateParam param = (DateParam) params.get(Patient.SP_BIRTHDATE).get(0).getValuesAsQueryTokens().get(0);
            birthDate = param.getValue();
        }
        
        List<Patient> results = patientRepository.search(familyName, givenName, birthDate);
        
        return new SimpleBundleProvider(results);
    }
    
    @Override
    public void delete(IdType theId) {
        patientRepository.deleteById(theId.getIdPart());
    }
}
```

#### Repository để lưu trữ FHIR Resources

```java
@Repository
public class PatientRepository {

    private final JdbcTemplate jdbcTemplate;
    private final FhirContext fhirContext;
    
    @Autowired
    public PatientRepository(JdbcTemplate jdbcTemplate, FhirContext fhirContext) {
        this.jdbcTemplate = jdbcTemplate;
        this.fhirContext = fhirContext;
    }
    
    public Optional<Patient> findById(String id) {
        try {
            String json = jdbcTemplate.queryForObject(
                "SELECT resource_data FROM fhir_resources WHERE id = ? AND resource_type = 'Patient'",
                String.class,
                id
            );
            
            if (json != null) {
                Patient patient = fhirContext.newJsonParser().parseResource(Patient.class, json);
                return Optional.of(patient);
            }
            
            return Optional.empty();
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }
    
    public Patient save(Patient patient) {
        String id = patient.getIdElement().getIdPart();
        if (id == null) {
            id = UUID.randomUUID().toString();
            patient.setId(id);
        }
        
        String json = fhirContext.newJsonParser().encodeResourceToString(patient);
        
        jdbcTemplate.update(
            "INSERT INTO fhir_resources (id, resource_type, resource_data) VALUES (?, ?, ?::jsonb) " +
            "ON CONFLICT (id) DO UPDATE SET resource_data = ?::jsonb",
            id, "Patient", json, json
        );
        
        return patient;
    }
    
    public void deleteById(String id) {
        jdbcTemplate.update(
            "DELETE FROM fhir_resources WHERE id = ? AND resource_type = 'Patient'",
            id
        );
    }
    
    public List<Patient> search(String familyName, String givenName, Date birthDate) {
        StringBuilder sql = new StringBuilder("SELECT resource_data FROM fhir_resources WHERE resource_type = 'Patient'");
        List<Object> params = new ArrayList<>();
        
        if (familyName != null) {
            sql.append(" AND resource_data#>>'{name,0,family}' = ?");
            params.add(familyName);
        }
        
        if (givenName != null) {
            sql.append(" AND resource_data#>>'{name,0,given,0}' = ?");
            params.add(givenName);
        }
        
        if (birthDate != null) {
            // Format date to YYYY-MM-DD
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            sql.append(" AND resource_data->>'birthDate' = ?");
            params.add(sdf.format(birthDate));
        }
        
        List<String> results = jdbcTemplate.queryForList(
            sql.toString(),
            String.class,
            params.toArray()
        );
        
        return results.stream()
                .map(json -> fhirContext.newJsonParser().parseResource(Patient.class, json))
                .collect(Collectors.toList());
    }
}
```

#### Servlet Filter để xử lý FHIR Requests

```java
@Component
public class FhirRestServletFilter extends OncePerRequestFilter {

    private final RestfulServer fhirServer;
    
    @Autowired
    public FhirRestServletFilter(RestfulServer fhirServer) {
        this.fhirServer = fhirServer;
    }
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) 
            throws ServletException, IOException {
        
        // Chỉ xử lý các request đến /fhir/*
        if (request.getRequestURI().startsWith("/fhir/")) {
            // Forward request đến HAPI FHIR Server
            fhirServer.handleRequest(request, response);
        } else {
            // Tiếp tục với chuỗi filter
            filterChain.doFilter(request, response);
        }
    }
}
```

### Mô hình 3: FHIR JPA Server

Mô hình này triển khai một FHIR Server đầy đủ tính năng sử dụng HAPI FHIR JPA Server. Đây là giải pháp nếu bạn cần một FHIR server hoàn chỉnh với các tính năng persistence, search, và transaction.

#### Cấu hình FHIR JPA Server

```java
@Configuration
public class FhirJpaConfig {

    @Bean
    public DaoConfig daoConfig() {
        DaoConfig config = new DaoConfig();
        config.setAllowExternalReferences(true);
        config.setReuseCachedSearchResultsForMillis(null);
        config.setResourceServerIdStrategy(DaoConfig.IdStrategyEnum.UUID);
        return config;
    }
    
    @Bean
    public DataSource dataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://localhost:5432/fhir");
        dataSource.setUsername("fhiruser");
        dataSource.setPassword("fhirpass");
        return dataSource;
    }
    
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactory = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactory.setDataSource(dataSource());
        entityManagerFactory.setPackagesToScan("ca.uhn.fhir.jpa.entity");
        entityManagerFactory.setPersistenceProvider(new HibernatePersistenceProvider());
        
        HibernateJpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
        jpaVendorAdapter.setDatabasePlatform("org.hibernate.dialect.PostgreSQL95Dialect");
        entityManagerFactory.setJpaVendorAdapter(jpaVendorAdapter);
        
        Properties jpaProperties = new Properties();
        jpaProperties.put("hibernate.dialect", "org.hibernate.dialect.PostgreSQL95Dialect");
        jpaProperties.put("hibernate.format_sql", "true");
        jpaProperties.put("hibernate.show_sql", "false");
        jpaProperties.put("hibernate.hbm2ddl.auto", "update");
        jpaProperties.put("hibernate.jdbc.batch_size", "20");
        entityManagerFactory.setJpaProperties(jpaProperties);
        
        return entityManagerFactory;
    }
    
    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
        JpaTransactionManager manager = new JpaTransactionManager();
        manager.setEntityManagerFactory(entityManagerFactory);
        return manager;
    }
    
    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public TerminologyDeferredStorageSvc terminologyDeferredStorageSvc() {
        return new TerminologyDeferredStorageSvc();
    }
    
    @Bean
    public IValidationSupport validationSupport() {
        InMemoryTerminologyServerValidationSupport terminologyServer = new InMemoryTerminologyServerValidationSupport(fhirContext());
        DefaultProfileValidationSupport defaultProfileValidationSupport = new DefaultProfileValidationSupport(fhirContext());
        return new ValidationSupportChain(terminologyServer, defaultProfileValidationSupport);
    }
    
    @Bean
    public JpaStorageSettings jpaStorageSettings() {
        JpaStorageSettings settings = new JpaStorageSettings();
        settings.setIndexMissingFields(DaoConfig.IndexEnabledEnum.ENABLED);
        return settings;
    }
}
```

#### Tạo FHIR JPA Server

```java
@Configuration
public class FhirServerConfig {

    @Autowired
    private FhirContext fhirContext;
    
    @Autowired
    private DaoConfig daoConfig;
    
    @Autowired
    private EntityManagerFactory entityManagerFactory;
    
    @Autowired
    private PlatformTransactionManager transactionManager;
    
    @Autowired
    private IValidationSupport validationSupport;
    
    @Autowired
    private JpaStorageSettings jpaStorageSettings;
    
    @Bean
    public JpaValidationSupportChain jpaValidationSupportChain() {
        return new JpaValidationSupportChain();
    }
    
    @Bean
    public ModelConfig modelConfig() {
        return new ModelConfig();
    }
    
    @Bean
    public DaoRegistry daoRegistry() {
        return new DaoRegistry();
    }
    
    @Bean
    public IFhirSystemDao<Bundle, Meta> systemDao() {
        JpaSystemDao<Bundle, Meta> systemDao = new JpaSystemDao<>();
        systemDao.setResourceType(Bundle.class);
        systemDao.setContext(fhirContext);
        systemDao.setConfig(daoConfig);
        systemDao.setEmProvider(() -> entityManager());
        return systemDao;
    }
    
    @Bean
    public IFhirResourceDao<Patient> patientDao() {
        JpaResourceDao<Patient> patientDao = new JpaResourceDao<>();
        patientDao.setResourceType(Patient.class);
        patientDao.setContext(fhirContext);
        patientDao.setConfig(daoConfig);
        patientDao.setEmProvider(() -> entityManager());
        return patientDao;
    }
    
    @Bean
    public EntityManager entityManager() {
        return entityManagerFactory.createEntityManager();
    }
    
    @Bean
    public RestfulServer fhirServer() {
        RestfulServer server = new RestfulServer(fhirContext);
        
        // Register resource providers
        server.setResourceProviders(
            new JpaResourceProviderR5<Patient>(fhirContext, patientDao(), daoConfig),
            // Thêm các resource providers khác tại đây
            new SystemProviderR5(systemDao(), fhirContext, daoConfig)
        );
        
        // Cấu hình format
        server.setDefaultResponseEncoding(EncodingEnum.JSON);
        
        // Thêm các interceptors
        server.registerInterceptor(new ResponseHighlighterInterceptor());
        
        // Cấu hình paging
        server.setPagingProvider(new DatabaseBackedPagingProvider());
        
        return server;
    }
}
```

#### Servlet để xử lý FHIR Requests

```java
@WebServlet(urlPatterns = {"/fhir/*"}, displayName = "FHIR Server")
public class FhirServlet extends HttpServlet {

    @Autowired
    private RestfulServer fhirServer;
    
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        fhirServer.handleRequest(req, resp);
    }
}
```

### Tích hợp với bảo mật

FHIR đi kèm với profile bảo mật SMART on FHIR, là một tiêu chuẩn dựa trên OAuth2. Dưới đây là cách tích hợp với Spring Security:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/fhir/metadata").permitAll() // Cho phép truy cập vào capability statement
                .requestMatchers("/fhir/**").hasAuthority("SCOPE_patient/*.read") // Yêu cầu scope cụ thể
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
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
    public JwtDecoder jwtDecoder() {
        return JwtDecoders.fromOidcIssuerLocation("https://auth.example.com/realms/healthcare");
    }
}
```

#### Tích hợp với Keycloak cho SMART on FHIR

Keycloak là một giải pháp Identity và Access Management mã nguồn mở phổ biến cho triển khai SMART on FHIR:

```java
@Configuration
public class KeycloakConfig {

    @Value("${keycloak.auth-server-url}")
    private String authServerUrl;

    @Value("${keycloak.realm}")
    private String realm;

    @Value("${keycloak.resource}")
    private String clientId;

    @Value("${keycloak.credentials.secret}")
    private String clientSecret;

    @Bean
    public OAuth2RestTemplate keycloakRestTemplate() {
        ClientCredentialsResourceDetails resourceDetails = new ClientCredentialsResourceDetails();
        resourceDetails.setAccessTokenUri(authServerUrl + "/realms/" + realm + "/protocol/openid-connect/token");
        resourceDetails.setClientId(clientId);
        resourceDetails.setClientSecret(clientSecret);
        
        OAuth2RestTemplate template = new OAuth2RestTemplate(resourceDetails);
        template.setMessageConverters(Arrays.asList(new MappingJackson2HttpMessageConverter()));
        
        return template;
    }
    
    @Bean
    public SmartLaunchContextExtractor smartLaunchContextExtractor() {
        return new SmartLaunchContextExtractor();
    }
    
    // Class để trích xuất SMART Launch Context từ JWT
    public class SmartLaunchContextExtractor {
        
        public SmartLaunchContext extractFromJwt(Jwt jwt) {
            SmartLaunchContext context = new SmartLaunchContext();
            
            // Trích xuất patient ID
            String patientId = jwt.getClaimAsString("patient_id");
            if (patientId != null) {
                context.setPatientId(patientId);
            }
            
            // Trích xuất encounter ID
            String encounterId = jwt.getClaimAsString("encounter_id");
            if (encounterId != null) {
                context.setEncounterId(encounterId);
            }
            
            return context;
        }
    }
    
    // Lớp để lưu trữ thông tin SMART Launch Context
    public class SmartLaunchContext {
        private String patientId;
        private String encounterId;
        
        // Getters và setters
        public String getPatientId() {
            return patientId;
        }
        
        public void setPatientId(String patientId) {
            this.patientId = patientId;
        }
        
        public String getEncounterId() {
            return encounterId;
        }
        
        public void setEncounterId(String encounterId) {
            this.encounterId = encounterId;
        }
    }
}
```

### Xử lý Subscription và Notification

FHIR R5 cung cấp cơ chế Subscription để thông báo khi có thay đổi trên resources:

```java
@Configuration
public class FhirSubscriptionConfig {

    @Bean
    public SubscriptionRegistry subscriptionRegistry(FhirContext fhirContext) {
        SubscriptionRegistry registry = new SubscriptionRegistry();
        registry.setFhirContext(fhirContext);
        return registry;
    }
    
    @Bean
    public SubscriptionMatcherInterceptor subscriptionMatcherInterceptor(SubscriptionRegistry subscriptionRegistry) {
        SubscriptionMatcherInterceptor interceptor = new SubscriptionMatcherInterceptor();
        interceptor.setSubscriptionRegistry(subscriptionRegistry);
        return interceptor;
    }
    
    @Bean
    public SubscriptionActivatingInterceptor subscriptionActivatingInterceptor(SubscriptionRegistry subscriptionRegistry) {
        SubscriptionActivatingInterceptor interceptor = new SubscriptionActivatingInterceptor();
        interceptor.setSubscriptionRegistry(subscriptionRegistry);
        return interceptor;
    }
    
    @Bean
    public EmailSubscriptionDeliveryInterceptor emailInterceptor(FhirContext fhirContext) {
        EmailSubscriptionDeliveryInterceptor interceptor = new EmailSubscriptionDeliveryInterceptor();
        interceptor.setFhirContext(fhirContext);
        interceptor.setEmailSender(javaMailSender());
        return interceptor;
    }
    
    @Bean
    public RestHookSubscriptionDeliveryInterceptor webhookInterceptor(FhirContext fhirContext) {
        RestHookSubscriptionDeliveryInterceptor interceptor = new RestHookSubscriptionDeliveryInterceptor();
        interceptor.setFhirContext(fhirContext);
        return interceptor;
    }
    
    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.example.com");
        mailSender.setPort(587);
        mailSender.setUsername("notifications@example.com");
        mailSender.setPassword("password");
        
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        
        return mailSender;
    }
}
```

#### Service để quản lý Subscription

```java
@Service
public class SubscriptionService {

    private final IGenericClient fhirClient;
    private final FhirContext fhirContext;
    
    @Autowired
    public SubscriptionService(IGenericClient fhirClient, FhirContext fhirContext) {
        this.fhirClient = fhirClient;
        this.fhirContext = fhirContext;
    }
    
    // Tạo Subscription cho một Patient
    public Subscription createPatientSubscription(String patientId, String endpoint, String email) {
        Subscription subscription = new Subscription();
        
        // Thiết lập status
        subscription.setStatus(Subscription.SubscriptionStatus.REQUESTED);
        
        // Thiết lập criteria - theo dõi khi có thay đổi về Patient
        subscription.setCriteria("Patient?_id=" + patientId);
        
        // Thiết lập channel - REST Hook
        Subscription.SubscriptionChannelComponent channel = subscription.getChannel();
        channel.setType(Subscription.SubscriptionChannelType.RESTHOOK);
        channel.setEndpoint(endpoint);
        channel.setPayload("application/fhir+json");
        
        // Thêm tham số cho email
        if (email != null) {
            Parameters params = new Parameters();
            params.addParameter().setName("email").setValue(new StringType(email));
            subscription.setChannelTypeParamsElement(fhirContext.newJsonParser().encodeResourceToString(params));
        }
        
        // Lưu subscription
        MethodOutcome outcome = fhirClient.create()
                .resource(subscription)
                .execute();
        
        return (Subscription) outcome.getResource();
    }
    
    // Hủy Subscription
    public void cancelSubscription(String subscriptionId) {
        Subscription subscription = fhirClient.read()
                .resource(Subscription.class)
                .withId(subscriptionId)
                .execute();
        
        subscription.setStatus(Subscription.SubscriptionStatus.OFF);
        
        fhirClient.update()
                .resource(subscription)
                .execute();
    }
    
    // Lấy danh sách Subscription của bệnh nhân
    public List<Subscription> getPatientSubscriptions(String patientId) {
        Bundle bundle = fhirClient.search()
                .forResource(Subscription.class)
                .where(Subscription.CRITERIA.matches().value("Patient?_id=" + patientId))
                .returnBundle(Bundle.class)
                .execute();
        
        return bundle.getEntry().stream()
                .map(entry -> (Subscription) entry.getResource())
                .collect(Collectors.toList());
    }
}
```

#### Controller xử lý Subscription Webhook

```java
@RestController
@RequestMapping("/api/subscription-notifications")
public class SubscriptionWebhookController {

    private static final Logger logger = LoggerFactory.getLogger(SubscriptionWebhookController.class);
    
    private final FhirContext fhirContext;
    private final NotificationService notificationService;
    
    @Autowired
    public SubscriptionWebhookController(FhirContext fhirContext, NotificationService notificationService) {
        this.fhirContext = fhirContext;
        this.notificationService = notificationService;
    }
    
    @PostMapping
    public ResponseEntity<String> handleSubscriptionNotification(@RequestBody String payload) {
        logger.info("Received subscription notification");
        
        try {
            // Parse FHIR resource từ payload
            IBaseResource resource = fhirContext.newJsonParser().parseResource(payload);
            
            // Xác định loại resource
            if (resource instanceof Patient) {
                Patient patient = (Patient) resource;
                logger.info("Patient update received: {}", patient.getIdElement().getIdPart());
                
                // Xử lý thông báo
                notificationService.processPatientUpdate(patient);
            } else if (resource instanceof Observation) {
                Observation observation = (Observation) resource;
                logger.info("Observation update received: {}", observation.getIdElement().getIdPart());
                
                // Xử lý thông báo
                notificationService.processObservationUpdate(observation);
            } else {
                logger.info("Update received for resource type: {}", resource.getClass().getSimpleName());
            }
            
            return ResponseEntity.ok("Notification processed successfully");
        } catch (Exception e) {
            logger.error("Error processing subscription notification", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error processing notification: " + e.getMessage());
        }
    }
}
```

### Validation với HAPI FHIR

Validation là một phần quan trọng khi làm việc với FHIR để đảm bảo dữ liệu tuân thủ các quy tắc và constraints:

```java
@Service
public class FhirValidationService {

    private final FhirContext fhirContext;
    private final FhirValidator validator;
    
    @Autowired
    public FhirValidationService(FhirContext fhirContext) {
        this.fhirContext = fhirContext;
        this.validator = fhirContext.newValidator();
        
        // Thêm validator module - validation dựa trên StructureDefinition
        FhirInstanceValidator instanceValidator = new FhirInstanceValidator(fhirContext);
        validator.registerValidatorModule(instanceValidator);
        
        // Thêm SchemaBaseValidator nếu cần validation dựa trên schema
        validator.registerValidatorModule(new SchemaBaseValidator(fhirContext));
    }
    
    // Validate FHIR resource
    public ValidationResult validateResource(IBaseResource resource) {
        return validator.validateWithResult(resource);
    }
    
    // Validate FHIR resource với profile cụ thể
    public ValidationResult validateResourceWithProfile(IBaseResource resource, String profileUrl) {
        IValidationContext context = ValidationContext.forResource(fhirContext, resource, profileUrl);
        return validator.validateWithResult(context);
    }
    
    // Validate với custom logic và throw exception nếu không hợp lệ
    public void validateAndThrow(IBaseResource resource) throws ResourceValidationException {
        ValidationResult result = validateResource(resource);
        
        if (!result.isSuccessful()) {
            // Lọc các lỗi
            List<String> errors = result.getMessages().stream()
                    .filter(msg -> msg.getSeverity() == ResultSeverityEnum.ERROR)
                    .map(SingleValidationMessage::getMessage)
                    .collect(Collectors.toList());
            
            throw new ResourceValidationException("Resource validation failed: " + String.join(", ", errors));
        }
    }
    
    // Custom validator cho business rules
    public ValidationResult validateBusinessRules(Patient patient) {
        List<SingleValidationMessage> messages = new ArrayList<>();
        
        // Ví dụ rule: Bệnh nhân phải có ít nhất một tên
        if (!patient.hasName()) {
            SingleValidationMessage message = new SingleValidationMessage();
            message.setLocationString("Patient");
            message.setSeverity(ResultSeverityEnum.ERROR);
            message.setMessage("Patient must have at least one name");
            messages.add(message);
        }
        
        // Ví dụ rule: Bệnh nhân phải có ngày sinh
        if (!patient.hasBirthDate()) {
            SingleValidationMessage message = new SingleValidationMessage();
            message.setLocationString("Patient.birthDate");
            message.setSeverity(ResultSeverityEnum.WARNING);
            message.setMessage("Patient should have a birth date");
            messages.add(message);
        }
        
        return new ValidationResult(messages);
    }
}

// Custom exception cho validation errors
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ResourceValidationException extends RuntimeException {
    public ResourceValidationException(String message) {
        super(message);
    }
}
```

### Tích hợp với PostgreSQL JSONB

PostgreSQL cung cấp kiểu dữ liệu JSONB mạnh mẽ cho việc lưu trữ và truy vấn FHIR resources:

```java
@Configuration
public class JdbcConfig {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://localhost:5432/fhir_db");
        dataSource.setUsername("fhiruser");
        dataSource.setPassword("fhirpass");
        return dataSource;
    }
    
    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
    
    @Bean
    public PlatformTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}
```

#### Schema cho lưu trữ FHIR Resources với JSONB

```sql
CREATE TABLE fhir_resources (
    id VARCHAR(64) NOT NULL,
    resource_type VARCHAR(64) NOT NULL,
    version_id VARCHAR(64) NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
    resource_data JSONB NOT NULL,
    PRIMARY KEY (id, resource_type)
);

-- Index cho tìm kiếm
CREATE INDEX idx_fhir_resources_type ON fhir_resources(resource_type);
CREATE INDEX idx_fhir_resources_last_updated ON fhir_resources(last_updated);
CREATE INDEX idx_fhir_resources_not_deleted ON fhir_resources(is_deleted) WHERE is_deleted = FALSE;

-- Các index JSONB cho tìm kiếm thường xuyên
CREATE INDEX idx_patient_name_family ON fhir_resources ((resource_data#>>'{name,0,family}')) 
    WHERE resource_type = 'Patient';
CREATE INDEX idx_patient_identifier ON fhir_resources ((resource_data#>>'{identifier,0,value}')) 
    WHERE resource_type = 'Patient';
CREATE INDEX idx_observation_subject ON fhir_resources ((resource_data#>>'{subject,reference}')) 
    WHERE resource_type = 'Observation';
```

#### Repository cho PostgreSQL JSONB

```java
@Repository
public class FhirResourceRepository {

    private final JdbcTemplate jdbcTemplate;
    private final FhirContext fhirContext;
    
    @Autowired
    public FhirResourceRepository(JdbcTemplate jdbcTemplate, FhirContext fhirContext) {
        this.jdbcTemplate = jdbcTemplate;
        this.fhirContext = fhirContext;
    }
    
    // Lưu FHIR resource
    @Transactional
    public <T extends IBaseResource> T save(T resource) {
        String resourceType = resource.getClass().getSimpleName();
        String id = ensureResourceId(resource);
        String versionId = generateVersionId();
        String json = fhirContext.newJsonParser().encodeResourceToString(resource);
        
        jdbcTemplate.update(
            "INSERT INTO fhir_resources (id, resource_type, version_id, last_updated, resource_data) " +
            "VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?::jsonb) " +
            "ON CONFLICT (id, resource_type) DO UPDATE " +
            "SET version_id = ?, last_updated = CURRENT_TIMESTAMP, resource_data = ?::jsonb, is_deleted = FALSE",
            id, resourceType, versionId, json, versionId, json
        );
        
        // Cập nhật version ID cho resource
        updateResourceVersion(resource, versionId);
        
        return resource;
    }
    
    // Đọc FHIR resource theo ID
    @SuppressWarnings("unchecked")
    public <T extends IBaseResource> Optional<T> findById(Class<T> resourceType, String id) {
        try {
            String resourceTypeName = resourceType.getSimpleName();
            
            String json = jdbcTemplate.queryForObject(
                "SELECT resource_data FROM fhir_resources " +
                "WHERE id = ? AND resource_type = ? AND is_deleted = FALSE",
                String.class,
                id, resourceTypeName
            );
            
            if (json != null) {
                T resource = (T) fhirContext.newJsonParser().parseResource(resourceType, json);
                return Optional.of(resource);
            }
            
            return Optional.empty();
        } catch (EmptyResultDataAccessException e) {
            return Optional.empty();
        }
    }
    
    // Xóa FHIR resource (logical delete)
    @Transactional
    public void deleteById(Class<? extends IBaseResource> resourceType, String id) {
        String resourceTypeName = resourceType.getSimpleName();
        
        jdbcTemplate.update(
            "UPDATE fhir_resources SET is_deleted = TRUE, last_updated = CURRENT_TIMESTAMP " +
            "WHERE id = ? AND resource_type = ?",
            id, resourceTypeName
        );
    }
    
    // Tìm kiếm bệnh nhân theo họ
    public List<Patient> findPatientsByFamilyName(String familyName) {
        List<String> results = jdbcTemplate.queryForList(
            "SELECT resource_data FROM fhir_resources " +
            "WHERE resource_type = 'Patient' AND resource_data#>>'{name,0,family}' = ? AND is_deleted = FALSE",
            String.class,
            familyName
        );
        
        return results.stream()
                .map(json -> fhirContext.newJsonParser().parseResource(Patient.class, json))
                .collect(Collectors.toList());
    }
    
    // Tìm kiếm observation của bệnh nhân
    public List<Observation> findObservationsByPatientId(String patientId) {
        List<String> results = jdbcTemplate.queryForList(
            "SELECT resource_data FROM fhir_resources " +
            "WHERE resource_type = 'Observation' AND " +
            "resource_data#>>'{subject,reference}' = ? AND is_deleted = FALSE",
            String.class,
            "Patient/" + patientId
        );
        
        return results.stream()
                .map(json -> fhirContext.newJsonParser().parseResource(Observation.class, json))
                .collect(Collectors.toList());
    }
    
    // Helper methods
    private String ensureResourceId(IBaseResource resource) {
        if (resource.getIdElement().isEmpty() || resource.getIdElement().isLocal()) {
            String id = UUID.randomUUID().toString();
            resource.setId(id);
            return id;
        }
        return resource.getIdElement().getIdPart();
    }
    
    private String generateVersionId() {
        return UUID.randomUUID().toString();
    }
    
    private void updateResourceVersion(IBaseResource resource, String versionId) {
        IdType id = (IdType) resource.getIdElement();
        resource.setId(new IdType(id.getResourceType(), id.getIdPart(), versionId));
    }
}
```

### Tích hợp với ReactJS Frontend

#### Cấu hình CORS để cho phép frontend kết nối

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
        
        registry.addMapping("/fhir/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

#### API Controller cho tích hợp frontend

```java
@RestController
@RequestMapping("/api/patients")
public class PatientApiController {

    private final PatientService patientService;
    
    @Autowired
    public PatientApiController(PatientService patientService) {
        this.patientService = patientService;
    }
    
    @GetMapping
    public ResponseEntity<List<PatientDTO>> getAllPatients(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String identifier,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        
        List<PatientDTO> patients = patientService.searchPatients(name, identifier, page, size);
        return ResponseEntity.ok(patients);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PatientDTO> getPatient(@PathVariable String id) {
        PatientDTO patient = patientService.getPatientById(id);
        return ResponseEntity.ok(patient);
    }
    
    @PostMapping
    public ResponseEntity<PatientDTO> createPatient(@RequestBody @Valid PatientDTO patientDTO) {
        PatientDTO created = patientService.createPatient(patientDTO);
        return ResponseEntity
                .created(URI.create("/api/patients/" + created.getId()))
                .body(created);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<PatientDTO> updatePatient(
            @PathVariable String id, 
            @RequestBody @Valid PatientDTO patientDTO) {
        
        patientDTO.setId(id);
        PatientDTO updated = patientService.updatePatient(patientDTO);
        return ResponseEntity.ok(updated);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable String id) {
        patientService.deletePatient(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/{id}/observations")
    public ResponseEntity<List<ObservationDTO>> getPatientObservations(@PathVariable String id) {
        List<ObservationDTO> observations = patientService.getPatientObservations(id);
        return ResponseEntity.ok(observations);
    }
}
```

### Kết luận

Trong bài viết này, chúng ta đã khám phá chi tiết cách tích hợp HAPI FHIR vào ứng dụng Spring Boot từ cơ bản đến nâng cao. Chúng ta đã đi qua ba mô hình chính:

1. **FHIR Client** - kết nối đến FHIR server bên ngoài
2. **FHIR REST API** - tạo API tuân thủ FHIR sử dụng logic nghiệp vụ tùy chỉnh
3. **FHIR JPA Server** - triển khai FHIR server đầy đủ tính năng

Ngoài ra, chúng ta đã tìm hiểu các chủ đề quan trọng khác bao gồm:

* Bảo mật và SMART on FHIR
* Subscription và notification
* Validation
* Lưu trữ với PostgreSQL JSONB
* Tích hợp với ReactJS frontend

HAPI FHIR và Spring Boot tạo nên sự kết hợp mạnh mẽ để xây dựng các ứng dụng y tế hiện đại, đáp ứng các tiêu chuẩn interoperability mới nhất. Với sự phát triển nhanh chóng của các tiêu chuẩn y tế và công nghệ phần mềm, việc kết hợp giữa HAPI FHIR và Spring Boot sẽ tiếp tục là lựa chọn hàng đầu cho các nhà phát triển trong lĩnh vực y tế.

### Tài nguyên bổ sung

* HAPI FHIR Documentation: [https://hapifhir.io/hapi-fhir/docs/](https://hapifhir.io/hapi-fhir/docs/)
* Spring Boot Documentation: [https://docs.spring.io/spring-boot/docs/current/reference/html/](https://docs.spring.io/spring-boot/docs/current/reference/html/)
* HL7 FHIR Specification: [https://hl7.org/fhir/](https://hl7.org/fhir/)
* SMART on FHIR: [https://docs.smarthealthit.org/](https://docs.smarthealthit.org/)
* HAPI FHIR JPA Server Starter: [https://github.com/hapifhir/hapi-fhir-jpaserver-starter](https://github.com/hapifhir/hapi-fhir-jpaserver-starter)
