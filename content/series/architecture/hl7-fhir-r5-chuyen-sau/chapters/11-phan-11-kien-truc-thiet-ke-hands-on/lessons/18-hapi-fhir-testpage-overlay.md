---
id: 9a7daff5-1c04-4b8a-806e-2031e12239c0
title: 'hapi-fhir-testpage-overlay'
slug: hapi-fhir-testpage-overlay
description: 'hapifhirtestpageoverlay là một thành phần của hệ sinh thái HAPI FHIR cung cấp giao diện web đơn giản, trực quan cho phép nhà phát triển và người dùng tương tác, kiểm thử và khám phá FHIR server. Thành phần này được…'
duration_minutes: 22
is_free: true
video_url: null
sort_order: 18
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
## HAPI FHIR TestPage Overlay: Giao diện Web hiệu quả để truy cập và kiểm thử FHIR Server

### Giới thiệu

`hapi-fhir-testpage-overlay` là một thành phần của hệ sinh thái HAPI FHIR cung cấp giao diện web đơn giản, trực quan cho phép nhà phát triển và người dùng tương tác, kiểm thử và khám phá FHIR server. Thành phần này được thiết kế như một overlay có thể dễ dàng tích hợp vào bất kỳ HAPI FHIR server nào, cung cấp giao diện người dùng đồ họa (GUI) mạnh mẽ để thực hiện và kiểm tra các thao tác FHIR RESTful.

Khác với các công cụ dòng lệnh hoặc API clients đòi hỏi kiến thức lập trình, TestPage Overlay cho phép người dùng với các trình độ kỹ thuật khác nhau tương tác với FHIR server thông qua giao diện web thân thiện, làm cho việc khám phá, phát triển và gỡ lỗi ứng dụng FHIR trở nên dễ dàng hơn nhiều.

### Tính năng chính

#### 1. Giao diện khám phá server

TestPage Overlay cung cấp giao diện để khám phá các tính năng của FHIR server:

* **Conformance Statement Viewer**: Hiển thị chi tiết CapabilityStatement (metadata) của server
* **Resource Type Explorer**: Xem danh sách tất cả resource types được hỗ trợ
* **Search Parameters**: Hiển thị các parameters được hỗ trợ cho mỗi resource type
* **Operations Explorer**: Khám phá các operations có sẵn trên server

#### 2. CRUD Operations UI

Giao diện trực quan cho các thao tác CRUD (Create, Read, Update, Delete):

* **Create Resource**: Form tạo resource mới với JSON/XML editor
* **Read Resource**: Truy xuất resource theo ID
* **Update Resource**: Cập nhật resource hiện có
* **Delete Resource**: Xóa resource từ server
* **Versioning**: Xem và khôi phục các phiên bản trước của resource

#### 3. Tìm kiếm nâng cao

Công cụ tìm kiếm mạnh mẽ với giao diện trực quan:

* **Search Builder**: UI để xây dựng truy vấn tìm kiếm phức tạp
* **Parameter Support**: Hỗ trợ đầy đủ cho tất cả search parameter types
* **Chaining**: Giao diện cho phép chaining và reverse chaining
* **Includes**: Tích hợp \_include và \_revinclude
* **Pagination Controls**: Điều khiển phân trang kết quả tìm kiếm
* **Export Options**: Xuất kết quả tìm kiếm dưới dạng JSON/XML

#### 4. Thực thi Operations

Giao diện để thực thi các operations FHIR:

* **Standard Operations**: Hỗ trợ cho $everything, $validate, $meta
* **Custom Operations**: Thực thi các operations tùy chỉnh
* **Parameters Builder**: Giao diện xây dựng Parameters resources
* **Results Viewer**: Xem kết quả operations dưới dạng định dạng có cấu trúc

#### 5. Transaction Support

Giao diện cho việc xây dựng và thực thi FHIR transactions:

* **Bundle Builder**: Tạo và chỉnh sửa FHIR Bundle resources
* **Transaction Editor**: Thêm nhiều entries vào một transaction
* **Batch Editor**: Xây dựng và thực thi batch operations
* **Response Analyzer**: Phân tích kết quả bundle responses

#### 6. History & Validation

Các tính năng khác bao gồm:

* **History Viewer**: Xem lịch sử thay đổi của resources
* **Validation Tool**: Validate resources theo profiles
* **Diff Tool**: So sánh các phiên bản khác nhau của một resource
* **Formatting Options**: Chuyển đổi giữa JSON, XML và các định dạng khác

### Cài đặt và Tích hợp

#### 1. Maven Dependency

Thêm TestPage Overlay vào dự án Maven:

```xml
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-testpage-overlay</artifactId>
    <version>6.4.0</version>
</dependency>
```

#### 2. Tích hợp với HAPI FHIR JPA Server

```java
@Configuration
public class FhirServerConfig {
    
    @Bean
    public ServletRegistrationBean<RestfulServer> fhirServerServletRegistration() {
        ServletRegistrationBean<RestfulServer> servletRegistrationBean = new ServletRegistrationBean<>();
        RestfulServer fhirServlet = new RestfulServer();
        // Cấu hình FHIR server
        servletRegistrationBean.setServlet(fhirServlet);
        servletRegistrationBean.addUrlMappings("/fhir/*");
        return servletRegistrationBean;
    }
    
    @Bean
    public ServletRegistrationBean<TestPageOverlay> overlayRegistrationBean() {
        ServletRegistrationBean<TestPageOverlay> servletRegistrationBean = new ServletRegistrationBean<>();
        TestPageOverlay overlayServlet = new TestPageOverlay();
        
        // Cấu hình TestPage Overlay
        servletRegistrationBean.setServlet(overlayServlet);
        servletRegistrationBean.addUrlMappings("/testpage/*");
        
        // Cấu hình tùy chọn
        servletRegistrationBean.addInitParameter("serverId", "FHIR Server");
        servletRegistrationBean.addInitParameter("serverBase", "/fhir");
        servletRegistrationBean.addInitParameter("enableJsonEditor", "true");
        
        return servletRegistrationBean;
    }
}
```

#### 3. Tích hợp với Spring Boot

```java
@SpringBootApplication
public class FhirApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(FhirApplication.class, args);
    }
    
    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                // Redirect root to testpage
                registry.addViewController("/").setViewName("redirect:/testpage");
            }
        };
    }
    
    @Bean
    public TestPageOverlay testPageServlet() {
        TestPageOverlay overlay = new TestPageOverlay();
        
        // Cấu hình Theme
        overlay.setServerName("My FHIR Server");
        overlay.setServerVersion("6.4.0");
        overlay.setThemeName("default");
        
        // Cấu hình bảo mật
        overlay.setSecure(true);
        overlay.setAuthorizationInterceptor(new TestPageAuthorizationInterceptor());
        
        return overlay;
    }
    
    @Bean
    public ServletRegistrationBean<TestPageOverlay> overlayServletRegistration(TestPageOverlay testPageServlet) {
        ServletRegistrationBean<TestPageOverlay> bean = new ServletRegistrationBean<>(testPageServlet, "/testpage/*");
        bean.setLoadOnStartup(1);
        return bean;
    }
}
```

#### 4. Tích hợp với web.xml (Legacy)

```xml
<!-- Trong web.xml -->
<servlet>
    <servlet-name>testPageOverlay</servlet-name>
    <servlet-class>ca.uhn.fhir.to.TestPageOverlay</servlet-class>
    <init-param>
        <param-name>serverId</param-name>
        <param-value>FHIR Server</param-value>
    </init-param>
    <init-param>
        <param-name>serverBase</param-name>
        <param-value>/fhir</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>testPageOverlay</servlet-name>
    <url-pattern>/testpage/*</url-pattern>
</servlet-mapping>
```

### Tùy chỉnh và Mở rộng

#### 1. Theme Customization

TestPage Overlay có thể được tùy chỉnh theo thương hiệu tổ chức:

```java
@Component
public class CustomTestPageConfig {
    
    @Autowired
    private TestPageOverlay testPageOverlay;
    
    @PostConstruct
    public void configureOverlay() {
        // Cấu hình thông tin hiển thị
        testPageOverlay.setServerName("Organization FHIR Server");
        testPageOverlay.setServerVersion("Version 1.0");
        testPageOverlay.setServerDescription("FHIR Server của Tổ chức Y tế Việt Nam");
        
        // Theme configuration
        Properties themeProps = new Properties();
        themeProps.setProperty("primaryColor", "#007bff");
        themeProps.setProperty("secondaryColor", "#6c757d");
        themeProps.setProperty("backgroundColor", "#f8f9fa");
        themeProps.setProperty("logoUrl", "/images/org-logo.png");
        themeProps.setProperty("footerText", "© 2025 Tổ chức Y tế Việt Nam");
        
        testPageOverlay.setThemeProperties(themeProps);
    }
    
    @Bean
    public WebMvcConfigurer additionalResourceConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
                registry.addResourceHandler("/testpage/custom/**")
                    .addResourceLocations("classpath:/custom-testpage-assets/");
            }
        };
    }
}
```

#### 2. Bảo mật và Xác thực

Tích hợp bảo mật cho TestPage Overlay:

```java
@Component
public class TestPageAuthorizationInterceptor implements ITestPageAuthorizationInterceptor {
    
    @Autowired
    private UserService userService;
    
    @Override
    public boolean authorizeRequest(HttpServletRequest request, HttpServletResponse response) {
        // Kiểm tra session attribute cho người dùng đã xác thực
        Object authenticatedUser = request.getSession().getAttribute("authenticatedUser");
        
        if (authenticatedUser != null) {
            return true;
        }
        
        // Nếu không có request login, chuyển hướng đến trang login
        if (!request.getRequestURI().endsWith("/testpage/login")) {
            try {
                response.sendRedirect(request.getContextPath() + "/testpage/login");
                return false;
            } catch (IOException e) {
                throw new RuntimeException("Error redirecting to login", e);
            }
        }
        
        // Logic xác thực cho request login
        if (request.getMethod().equals("POST")) {
            String username = request.getParameter("username");
            String password = request.getParameter("password");
            
            if (userService.authenticate(username, password)) {
                request.getSession().setAttribute("authenticatedUser", username);
                
                // Chuyển hướng đến trang chính
                try {
                    response.sendRedirect(request.getContextPath() + "/testpage/home");
                    return false;
                } catch (IOException e) {
                    throw new RuntimeException("Error redirecting after login", e);
                }
            } else {
                // Login thất bại, hiển thị form login với thông báo lỗi
                request.setAttribute("loginError", "Invalid username or password");
                return true;
            }
        }
        
        // Allow access to the login page itself
        return true;
    }
    
    @Override
    public String getCustomLoginPage(HttpServletRequest request) {
        String error = (String) request.getAttribute("loginError");
        
        StringBuilder loginPage = new StringBuilder();
        loginPage.append("<!DOCTYPE html>\n")
            .append("<html>\n")
            .append("<head>\n")
            .append("    <title>Login - FHIR TestPage</title>\n")
            .append("    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n")
            .append("    <style>\n")
            .append("        body { background-color: #f5f5f5; }\n")
            .append("        .login-container { max-width: 400px; margin: 100px auto; }\n")
            .append("    </style>\n")
            .append("</head>\n")
            .append("<body>\n")
            .append("    <div class=\"container login-container\">\n")
            .append("        <div class=\"card\">\n")
            .append("            <div class=\"card-header bg-primary text-white\">\n")
            .append("                <h4 class=\"m-0\">FHIR TestPage Login</h4>\n")
            .append("            </div>\n")
            .append("            <div class=\"card-body\">\n");
            
        if (error != null) {
            loginPage.append("                <div class=\"alert alert-danger\">")
                .append(error)
                .append("</div>\n");
        }
            
        loginPage.append("                <form method=\"POST\" action=\"")
            .append(request.getContextPath())
            .append("/testpage/login\">\n")
            .append("                    <div class=\"form-group\">\n")
            .append("                        <label for=\"username\">Username</label>\n")
            .append("                        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" required>\n")
            .append("                    </div>\n")
            .append("                    <div class=\"form-group\">\n")
            .append("                        <label for=\"password\">Password</label>\n")
            .append("                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required>\n")
            .append("                    </div>\n")
            .append("                    <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n")
            .append("                </form>\n")
            .append("            </div>\n")
            .append("        </div>\n")
            .append("    </div>\n")
            .append("</body>\n")
            .append("</html>");
            
        return loginPage.toString();
    }
}
```

#### 3. Custom Operations UI

Tạo giao diện tùy chỉnh cho custom operations:

```java
@Component
public class CustomOperationsProvider implements ITestPageCustomOperationProvider {
    
    @Override
    public List<CustomOperation> provideOperations() {
        List<CustomOperation> operations = new ArrayList<>();
        
        // Thêm custom operation cho Patient
        CustomOperation patientRiskAssessment = new CustomOperation();
        patientRiskAssessment.setResourceType("Patient");
        patientRiskAssessment.setName("risk-assessment");
        patientRiskAssessment.setDescription("Đánh giá rủi ro bệnh lý cho bệnh nhân");
        
        // Thêm parameters
        List<CustomOperationParam> params = new ArrayList<>();
        
        CustomOperationParam patientIdParam = new CustomOperationParam();
        patientIdParam.setName("patientId");
        patientIdParam.setType("string");
        patientIdParam.setRequired(true);
        patientIdParam.setDescription("ID của bệnh nhân cần đánh giá");
        params.add(patientIdParam);
        
        CustomOperationParam assessmentTypeParam = new CustomOperationParam();
        assessmentTypeParam.setName("assessmentType");
        assessmentTypeParam.setType("code");
        assessmentTypeParam.setRequired(true);
        assessmentTypeParam.setDescription("Loại đánh giá rủi ro (CARDIAC, DIABETES, STROKE)");
        params.add(assessmentTypeParam);
        
        patientRiskAssessment.setParameters(params);
        operations.add(patientRiskAssessment);
        
        // Thêm custom operation ở mức system
        CustomOperation bulkExport = new CustomOperation();
        bulkExport.setResourceType("$system");
        bulkExport.setName("bulk-export");
        bulkExport.setDescription("Export dữ liệu số lượng lớn từ server");
        
        List<CustomOperationParam> exportParams = new ArrayList<>();
        
        CustomOperationParam sinceParam = new CustomOperationParam();
        sinceParam.setName("_since");
        sinceParam.setType("date");
        sinceParam.setRequired(false);
        sinceParam.setDescription("Chỉ export dữ liệu đã thay đổi từ ngày này");
        exportParams.add(sinceParam);
        
        CustomOperationParam typesParam = new CustomOperationParam();
        typesParam.setName("_type");
        typesParam.setType("string");
        typesParam.setRequired(false);
        typesParam.setDescription("Danh sách các resource types cần export");
        exportParams.add(typesParam);
        
        bulkExport.setParameters(exportParams);
        operations.add(bulkExport);
        
        return operations;
    }
}
```

### Trường hợp sử dụng thực tế

#### 1. Môi trường phát triển

TestPage Overlay được sử dụng rộng rãi trong môi trường phát triển:

```java
@Configuration
@Profile("development")
public class DevEnvironmentConfig {
    
    @Bean
    public ServletRegistrationBean<TestPageOverlay> devTestPageOverlay() {
        TestPageOverlay overlay = new TestPageOverlay();
        
        // Cấu hình cho môi trường dev
        overlay.setSecure(false); // Vô hiệu hóa bảo mật trong dev
        overlay.setServerName("FHIR Dev Server");
        overlay.setShowRequestUrl(true); // Hiển thị URL đầy đủ
        overlay.setShowStackTraceInErrorPage(true); // Hiện thông tin debug
        
        // Cấu hình môi trường dev khác
        Properties devProps = new Properties();
        devProps.setProperty("defaultResourceCount", "20");
        devProps.setProperty("enableConsole", "true");
        overlay.setProperties(devProps);
        
        // Đăng ký servlet
        ServletRegistrationBean<TestPageOverlay> bean = 
            new ServletRegistrationBean<>(overlay, "/dev/testpage/*");
        bean.setLoadOnStartup(1);
        
        return bean;
    }
    
    @Bean
    public WebMvcConfigurer devConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/dev").setViewName("redirect:/dev/testpage");
            }
        };
    }
}
```

#### 2. Hỗ trợ đào tạo

TestPage được sử dụng trong đào tạo FHIR cho nhân viên y tế:

```java
@Controller
@RequestMapping("/training")
public class FhirTrainingController {
    
    @Autowired
    private TestPageOverlay trainingOverlay;
    
    @PostConstruct
    public void configureTrainingOverlay() {
        // Cấu hình TestPage cho đào tạo
        trainingOverlay.setServerName("FHIR Training Environment");
        trainingOverlay.setSimplifiedMode(true); // UI đơn giản hóa
        trainingOverlay.setShowExamples(true); // Hiển thị ví dụ
        
        // Thêm resources mẫu
        trainingOverlay.addSampleResource("Patient", "/samples/patient-example.json");
        trainingOverlay.addSampleResource("Observation", "/samples/observation-example.json");
        trainingOverlay.addSampleResource("Encounter", "/samples/encounter-example.json");
    }
    
    @GetMapping("/intro")
    public String trainingIntroduction(Model model) {
        model.addAttribute("courseTitle", "FHIR for Healthcare Professionals");
        model.addAttribute("testPageUrl", "/training/testpage");
        return "training/intro";
    }
    
    @GetMapping("/exercises")
    public String trainingExercises(Model model) {
        List<TrainingExercise> exercises = getTrainingExercises();
        model.addAttribute("exercises", exercises);
        return "training/exercises";
    }
    
    private List<TrainingExercise> getTrainingExercises() {
        List<TrainingExercise> exercises = new ArrayList<>();
        
        // Exercise 1: Create Patient
        TrainingExercise ex1 = new TrainingExercise();
        ex1.setTitle("Tạo hồ sơ bệnh nhân");
        ex1.setDescription("Sử dụng TestPage để tạo một resource Patient mới");
        ex1.setTestPageLink("/training/testpage?resource=Patient&action=create");
        exercises.add(ex1);
        
        // Exercise 2: Search Patient
        TrainingExercise ex2 = new TrainingExercise();
        ex2.setTitle("Tìm kiếm bệnh nhân");
        ex2.setDescription("Thực hành tìm kiếm bệnh nhân theo tên và ngày sinh");
        ex2.setTestPageLink("/training/testpage?resource=Patient&action=search");
        exercises.add(ex2);
        
        // More exercises...
        
        return exercises;
    }
    
    public static class TrainingExercise {
        private String title;
        private String description;
        private String testPageLink;
        
        // Getters and setters
    }
}
```

#### 3. Monitoring và Debugging

TestPage là công cụ hữu ích trong monitoring và debugging FHIR server:

```java
@Configuration
public class TestPageMonitoringConfig {
    
    @Autowired
    private TestPageOverlay monitoringOverlay;
    
    @PostConstruct
    public void configureMonitoringOverlay() {
        // Cấu hình TestPage cho việc monitoring
        monitoringOverlay.setSecure(true);
        monitoringOverlay.setServerName("FHIR Monitoring Console");
        
        // Kích hoạt các tính năng monitoring
        Properties monitoringProps = new Properties();
        monitoringProps.setProperty("showServerMetrics", "true");
        monitoringProps.setProperty("showActiveTransactions", "true");
        monitoringProps.setProperty("refreshInterval", "10000"); // 10 seconds
        monitoringProps.setProperty("enableLogging", "true");
        monitoringOverlay.setProperties(monitoringProps);
        
        // Register monitoring interceptor
        monitoringOverlay.addInterceptor(new MonitoringInterceptor());
    }
    
    @Component
    public static class MonitoringInterceptor implements ITestPageInterceptor {
        
        private static final Logger logger = LoggerFactory.getLogger(MonitoringInterceptor.class);
        
        @Override
        public void interceptRequest(HttpServletRequest request, String serverBaseUrl, 
                                    String resourceName, String resourceId, String operation) {
            
            // Log admin operations in monitoring console
            String user = getCurrentUser(request);
            logger.info("Monitoring: User {} performed {} on {}/{} via TestPage Console", 
                      user, operation, resourceName, resourceId);
            
            // Record monitoring metrics
            updateMetrics(user, resourceName, operation);
        }
        
        private String getCurrentUser(HttpServletRequest request) {
            // Get current authenticated user
            Object user = request.getSession().getAttribute("authenticatedUser");
            return user != null ? user.toString() : "anonymous";
        }
        
        private void updateMetrics(String user, String resourceType, String operation) {
            // Implementation of metrics collection
            // ...
        }
    }
    
    @RestController
    @RequestMapping("/admin/monitoring")
    public class MonitoringController {
        
        @GetMapping("/metrics")
        public ResponseEntity<Map<String, Object>> getMetrics() {
            // Get current server metrics
            Map<String, Object> metrics = collectServerMetrics();
            return ResponseEntity.ok(metrics);
        }
        
        private Map<String, Object> collectServerMetrics() {
            // Implementation of server metrics collection
            Map<String, Object> metrics = new HashMap<>();
            // Populate metrics
            return metrics;
        }
    }
}
```

### Tính năng nâng cao

#### 1. Resource Comparison

TestPage Overlay hỗ trợ so sánh các phiên bản FHIR resources:

```java
@Component
public class ResourceComparisonExtension implements ITestPageExtension {
    
    @Override
    public String getExtensionName() {
        return "resource-comparison";
    }
    
    @Override
    public String getExtensionDescription() {
        return "So sánh các phiên bản FHIR resources hoặc giữa các resources khác nhau";
    }
    
    @Override
    public String getExtensionUrl() {
        return "comparison";
    }
    
    @Override
    public String getExtensionHtml() {
        return "<div class=\"container pt-3\">\n" +
                "  <h3>So sánh FHIR Resources</h3>\n" +
                "  <div class=\"row\">\n" +
                "    <div class=\"col-md-5\">\n" +
                "      <div class=\"form-group\">\n" +
                "        <label>Resource 1:</label>\n" +
                "        <select id=\"resource1-type\" class=\"form-control mb-2\"></select>\n" +
                "        <input id=\"resource1-id\" type=\"text\" class=\"form-control mb-2\" placeholder=\"ID\">\n" +
                "        <button id=\"load-resource1\" class=\"btn btn-primary\">Load</button>\n" +
                "      </div>\n" +
                "      <div id=\"resource1-container\" class=\"border p-2 mt-3\" style=\"min-height: 400px; max-height: 600px; overflow: auto;\">\n" +
                "        <pre id=\"resource1-json\"></pre>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class=\"col-md-2 d-flex align-items-center justify-content-center\">\n" +
                "      <div class=\"text-center\">\n" +
                "        <button id=\"compare-btn\" class=\"btn btn-success mb-3\">Compare</button>\n" +
                "        <div>\n" +
                "          <div class=\"form-check\">\n" +
                "            <input class=\"form-check-input\" type=\"radio\" name=\"compare-mode\" id=\"compare-mode-visual\" checked>\n" +
                "            <label class=\"form-check-label\" for=\"compare-mode-visual\">Visual</label>\n" +
                "          </div>\n" +
                "          <div class=\"form-check\">\n" +
                "            <input class=\"form-check-input\" type=\"radio\" name=\"compare-mode\" id=\"compare-mode-detail\">\n" +
                "            <label class=\"form-check-label\" for=\"compare-mode-detail\">Detailed</label>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class=\"col-md-5\">\n" +
                "      <div class=\"form-group\">\n" +
                "        <label>Resource 2:</label>\n" +
                "        <select id=\"resource2-type\" class=\"form-control mb-2\"></select>\n" +
                "        <input id=\"resource2-id\" type=\"text\" class=\"form-control mb-2\" placeholder=\"ID\">\n" +
                "        <button id=\"load-resource2\" class=\"btn btn-primary\">Load</button>\n" +
                "      </div>\n" +
                "      <div id=\"resource2-container\" class=\"border p-2 mt-3\" style=\"min-height: 400px; max-height: 600px; overflow: auto;\">\n" +
                "        <pre id=\"resource2-json\"></pre>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "  <div class=\"row mt-4\">\n" +
                "    <div class=\"col-12\">\n" +
                "      <h4>Kết quả so sánh</h4>\n" +
                "      <div id=\"comparison-result\" class=\"border p-3\" style=\"min-height: 200px;\">\n" +
                "        <p class=\"text-muted\">Chọn hai resources và nhấn Compare để xem sự khác biệt.</p>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</div>\n" +
                "<script src=\"/testpage/static/js/resource-comparison.js\"></script>";
    }
}
```

#### 2. Batch Request Builder

TestPage có thể được mở rộng với batch request builder nâng cao:

```java
@Component
public class BatchRequestBuilderExtension implements ITestPageExtension {
    
    @Override
    public String getExtensionName() {
        return "batch-builder";
    }
    
    @Override
    public String getExtensionDescription() {
        return "Xây dựng và thực thi FHIR Batch/Transaction requests";
    }
    
    @Override
    public String getExtensionUrl() {
        return "batch-builder";
    }
    
    @Override
    public String getExtensionHtml() {
        return "<div class=\"container pt-3\">\n" +
                "  <h3>FHIR Batch/Transaction Builder</h3>\n" +
                "  <div class=\"form-group\">\n" +
                "    <label>Bundle Type:</label>\n" +
                "    <select id=\"bundle-type\" class=\"form-control\">\n" +
                "      <option value=\"batch\">Batch</option>\n" +
                "      <option value=\"transaction\">Transaction</option>\n" +
                "    </select>\n" +
                "  </div>\n" +
                "  <div class=\"row mb-3\">\n" +
                "    <div class=\"col-md-"    <div class=\"col-md-12\">\n" +
               "      <button id=\"add-entry\" class=\"btn btn-primary\">Thêm Entry mới</button>\n" +
               "      <button id=\"clear-all\" class=\"btn btn-danger ml-2\">Xóa tất cả</button>\n" +
               "    </div>\n" +
               "  </div>\n" +
               "  <div id=\"entries-container\">\n" +
               "    <div class=\"card mb-3 entry-card\" id=\"entry-template\" style=\"display:none;\">\n" +
               "      <div class=\"card-header d-flex justify-content-between align-items-center\">\n" +
               "        <span>Entry <span class=\"entry-number\">1</span></span>\n" +
               "        <div>\n" +
               "          <button class=\"btn btn-sm btn-danger remove-entry\">Xóa</button>\n" +
               "        </div>\n" +
               "      </div>\n" +
               "      <div class=\"card-body\">\n" +
               "        <div class=\"form-group\">\n" +
               "          <label>HTTP Method:</label>\n" +
               "          <select class=\"form-control http-method\">\n" +
               "            <option value=\"GET\">GET</option>\n" +
               "            <option value=\"POST\">POST</option>\n" +
               "            <option value=\"PUT\">PUT</option>\n" +
               "            <option value=\"DELETE\">DELETE</option>\n" +
               "          </select>\n" +
               "        </div>\n" +
               "        <div class=\"form-group\">\n" +
               "          <label>URL:</label>\n" +
               "          <input type=\"text\" class=\"form-control entry-url\" placeholder=\"Patient/123 or Patient?name=Smith\">\n" +
               "        </div>\n" +
               "        <div class=\"form-group resource-container\" style=\"display:none;\">\n" +
               "          <label>Resource Body:</label>\n" +
               "          <div class=\"resource-editor\" style=\"height: 200px; border: 1px solid #ccc;\"></div>\n" +
               "        </div>\n" +
               "      </div>\n" +
               "    </div>\n" +
               "  </div>\n" +
               "  <div class=\"row mt-3\">\n" +
               "    <div class=\"col-md-12\">\n" +
               "      <button id=\"preview-bundle\" class=\"btn btn-info\">Preview Bundle</button>\n" +
               "      <button id=\"execute-bundle\" class=\"btn btn-success ml-2\">Execute</button>\n" +
               "    </div>\n" +
               "  </div>\n" +
               "  <div class=\"row mt-3\">\n" +
               "    <div class=\"col-md-12\">\n" +
               "      <div class=\"card\">\n" +
               "        <div class=\"card-header\">Bundle Preview</div>\n" +
               "        <div class=\"card-body\">\n" +
               "          <pre id=\"bundle-preview\" style=\"max-height: 400px; overflow: auto;\"></pre>\n" +
               "        </div>\n" +
               "      </div>\n" +
               "    </div>\n" +
               "  </div>\n" +
               "  <div class=\"row mt-3\">\n" +
               "    <div class=\"col-md-12\">\n" +
               "      <div class=\"card\">\n" +
               "        <div class=\"card-header\">Response</div>\n" +
               "        <div class=\"card-body\">\n" +
               "          <pre id=\"response-preview\" style=\"max-height: 400px; overflow: auto;\"></pre>\n" +
               "        </div>\n" +
               "      </div>\n" +
               "    </div>\n" +
               "  </div>\n" +
               "</div>\n" +
               "<script src=\"/testpage/static/js/batch-builder.js\"></script>";
   }
}
```

#### 3. SMART App Launcher

TestPage có thể được tích hợp với SMART on FHIR App Launcher:

```java
@Component
public class SmartAppLauncherExtension implements ITestPageExtension {
    
    @Autowired
    private Environment env;
    
    @Override
    public String getExtensionName() {
        return "smart-app-launcher";
    }
    
    @Override
    public String getExtensionDescription() {
        return "Khởi chạy và thử nghiệm SMART on FHIR Apps";
    }
    
    @Override
    public String getExtensionUrl() {
        return "smart-launcher";
    }
    
    @Override
    public String getExtensionHtml() {
        String authEndpoint = env.getProperty("fhir.smart.auth-endpoint", "http://localhost:8080/auth");
        String tokenEndpoint = env.getProperty("fhir.smart.token-endpoint", "http://localhost:8080/token");
        String fhirServerBase = env.getProperty("fhir.server.base-url", "http://localhost:8080/fhir");
        
        return "<div class=\"container pt-3\">\n" +
                "  <h3>SMART on FHIR App Launcher</h3>\n" +
                "  <div class=\"row\">\n" +
                "    <div class=\"col-md-6\">\n" +
                "      <div class=\"card\">\n" +
                "        <div class=\"card-header bg-primary text-white\">App Configuration</div>\n" +
                "        <div class=\"card-body\">\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>App Launch URL:</label>\n" +
                "            <input type=\"text\" id=\"app-url\" class=\"form-control\" placeholder=\"https://example.org/smart-app/launch.html\">\n" +
                "          </div>\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>Client ID:</label>\n" +
                "            <input type=\"text\" id=\"client-id\" class=\"form-control\" placeholder=\"client_id\">\n" +
                "          </div>\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>Scope:</label>\n" +
                "            <input type=\"text\" id=\"scope\" class=\"form-control\" value=\"patient/*.read launch/patient\">\n" +
                "          </div>\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>Launch Type:</label>\n" +
                "            <select id=\"launch-type\" class=\"form-control\">\n" +
                "              <option value=\"patient\">Patient Context</option>\n" +
                "              <option value=\"provider\">Provider Context</option>\n" +
                "              <option value=\"standalone\">Standalone Launch</option>\n" +
                "            </select>\n" +
                "          </div>\n" +
                "          <div id=\"patient-context\" class=\"form-group\">\n" +
                "            <label>Patient:</label>\n" +
                "            <select id=\"patient-id\" class=\"form-control\"></select>\n" +
                "          </div>\n" +
                "          <div id=\"provider-context\" class=\"form-group\" style=\"display:none;\">\n" +
                "            <label>Provider:</label>\n" +
                "            <select id=\"provider-id\" class=\"form-control\"></select>\n" +
                "          </div>\n" +
                "          <button id=\"launch-app\" class=\"btn btn-success mt-3\">Launch App</button>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "    <div class=\"col-md-6\">\n" +
                "      <div class=\"card\">\n" +
                "        <div class=\"card-header bg-info text-white\">SMART Configuration</div>\n" +
                "        <div class=\"card-body\">\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>FHIR Server Base URL:</label>\n" +
                "            <input type=\"text\" id=\"fhir-server-url\" class=\"form-control\" value=\"" + fhirServerBase + "\">\n" +
                "          </div>\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>Authorization Endpoint:</label>\n" +
                "            <input type=\"text\" id=\"auth-endpoint\" class=\"form-control\" value=\"" + authEndpoint + "\">\n" +
                "          </div>\n" +
                "          <div class=\"form-group\">\n" +
                "            <label>Token Endpoint:</label>\n" +
                "            <input type=\"text\" id=\"token-endpoint\" class=\"form-control\" value=\"" + tokenEndpoint + "\">\n" +
                "          </div>\n" +
                "          <div class=\"alert alert-info\">\n" +
                "            <strong>Note:</strong> SMART on FHIR configuration should be enabled on your FHIR server for this launcher to work correctly.\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "      <div class=\"card mt-3\">\n" +
                "        <div class=\"card-header bg-secondary text-white\">Recent Launches</div>\n" +
                "        <div class=\"card-body p-0\">\n" +
                "          <ul id=\"launch-history\" class=\"list-group list-group-flush\">\n" +
                "            <li class=\"list-group-item text-muted\">No recent launches</li>\n" +
                "          </ul>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "  <div class=\"row mt-4\">\n" +
                "    <div class=\"col-12\">\n" +
                "      <div class=\"card\">\n" +
                "        <div class=\"card-header bg-dark text-white\">App Preview</div>\n" +
                "        <div class=\"card-body p-0\" style=\"height: 600px;\">\n" +
                "          <iframe id=\"app-frame\" style=\"width: 100%; height: 100%; border: none;\" src=\"about:blank\"></iframe>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</div>\n" +
                "<script src=\"/testpage/static/js/smart-launcher.js\"></script>";
    }
}
```

### Hướng dẫn Sử dụng

#### 1. Resource Browsing và CRUD

TestPage Overlay cho phép người dùng dễ dàng duyệt và sử dụng các resources:

1. **Browse Resources**: Xem danh sách resource types hỗ trợ từ trang chủ
2. **Create Resource**:
   * Chọn resource type
   * Nhấp vào "Create"
   * Điền thông tin trong editor
   * Nhấp "Save" để tạo resource
3. **Read Resource**:
   * Nhập ID của resource
   * Nhấp "Read" để xem resource
4. **Update Resource**:
   * Đọc resource
   * Sửa đổi trong editor
   * Nhấp "Update" để lưu thay đổi
5. **Delete Resource**:
   * Đọc resource
   * Nhấp "Delete" để xóa resource

#### 2. Search Interface

Thực hiện tìm kiếm nâng cao:

1. **Basic Search**:
   * Chọn resource type
   * Nhấp "Search"
   * Nhập các parameters cơ bản
   * Nhấp "Run Search"
2. **Advanced Search**:
   * Thêm nhiều search parameters
   * Sử dụng modifiers (eq, ne, gt, lt, etc.)
   * Kết hợp với AND/OR operators
   * Cấu hình \_include và \_revinclude
3. **Sorting và Pagination**:
   * Thiết lập \_sort parameter
   * Cấu hình \_count để kiểm soát số lượng kết quả
   * Sử dụng paginated navigation

#### 3. Thực hiện Operations

Gọi standard và custom operations:

1. **Operations Menu**:
   * Xem danh sách operations có sẵn
   * Chọn type: instance, type hoặc system
2. **Parameters**:
   * Cung cấp parameters cần thiết
   * Thêm/xóa parameter để tùy chỉnh
3. **Execution**:
   * Nhấp "Execute" để chạy operation
   * Xem kết quả dưới dạng JSON/XML
   * Xem logs và response headers

### Kết luận

`hapi-fhir-testpage-overlay` là một thành phần thiết yếu trong hệ sinh thái HAPI FHIR, cung cấp giao diện trực quan và mạnh mẽ để tương tác với FHIR server. Đây là công cụ vô giá cho nhà phát triển, quản trị viên hệ thống và thậm chí người dùng cuối để khám phá, thử nghiệm và sử dụng các tính năng của FHIR server.

Các lợi ích chính của TestPage Overlay bao gồm:

1. **Giao diện thân thiện với người dùng**: Giảm bớt đường cong học tập của FHIR
2. **Khám phá trực quan**: Dễ dàng hiểu cấu trúc và tính năng của server
3. **Tính linh hoạt**: Có thể tùy chỉnh và mở rộng theo nhu cầu cụ thể
4. **Hỗ trợ phát triển**: Công cụ thiết yếu trong quá trình phát triển và gỡ lỗi
5. **Hỗ trợ đào tạo**: Lý tưởng cho việc đào tạo người dùng về FHIR

Với khả năng tùy chỉnh cao và khả năng tích hợp dễ dàng, `hapi-fhir-testpage-overlay` là công cụ không thể thiếu trong bộ công cụ của bất kỳ nhà phát triển FHIR nào, giúp rút ngắn thời gian phát triển, tăng cường hiểu biết về FHIR và cải thiện chất lượng triển khai.
