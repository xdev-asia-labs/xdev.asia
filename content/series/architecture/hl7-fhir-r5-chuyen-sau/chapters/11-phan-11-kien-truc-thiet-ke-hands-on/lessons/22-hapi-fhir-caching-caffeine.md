---
id: ca51fa2e-5272-4f04-a1a2-c66cfb3d3c83
title: 'hapi-fhir-caching-caffeine'
slug: hapi-fhir-caching-caffeine
description: 'Caffeine là một thư viện caching hiệu suất cao cho Java, được phát triển để thay thế cho Guava Cache. Caffeine cung cấp các tính năng mạnh mẽ như:'
duration_minutes: 41
is_free: true
video_url: null
sort_order: 22
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Caffeine là một thư viện caching hiệu suất cao cho Java, được phát triển để thay thế cho Guava Cache. Caffeine cung cấp các tính năng mạnh mẽ như:

* Xóa dữ liệu dựa trên thời gian (time-based expiration)
* Xóa dữ liệu dựa trên số lượng (size-based eviction)
* Cập nhật dữ liệu không đồng bộ (asynchronous refresh)
* Thống kê hiệu suất cache
* Yếu hóa tham chiếu (reference weakness)

Caffeine được thiết kế để có hiệu suất vượt trội với thuật toán W-TinyLFU, giúp đạt được hit rate cao hơn so với các thuật toán LRU và LFU truyền thống.

### Tích hợp Caffeine Cache với HAPI FHIR

#### 1. Thêm các dependency cần thiết

```xml
<!-- HAPI FHIR Core -->
<dependency>
    <groupId>ca.uhn.hapi.fhir</groupId>
    <artifactId>hapi-fhir-base</artifactId>
    <version>6.4.0</version>
</dependency>

<!-- HAPI FHIR Structures R5 -->
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

<!-- Spring Boot Cache Starter -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<!-- Caffeine Cache -->
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
    <version>3.1.6</version>
</dependency>
```

#### 2. Cấu hình Spring Cache với Caffeine

```java
@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        cacheManager.setCaffeine(caffeineCacheBuilder());
        return cacheManager;
    }
    
    Caffeine<Object, Object> caffeineCacheBuilder() {
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(500)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .recordStats();
    }
    
    @Bean
    public Cache<String, IBaseResource> fhirResourceCache() {
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(1000)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .recordStats()
                .build();
    }
    
    @Bean
    public Cache<String, Bundle> searchResultCache() {
        return Caffeine.newBuilder()
                .initialCapacity(50)
                .maximumSize(200)
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .recordStats()
                .build();
    }
}
```

#### 3. Tạo HAPI FHIR Client với Caffeine Cache Interceptor

```java
@Configuration
public class FhirClientConfig {

    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
    
    @Bean
    public IGenericClient fhirClient(FhirContext fhirContext, 
                                    CacheInterceptor cacheInterceptor) {
        // Tạo client kết nối đến FHIR server
        IGenericClient client = fhirContext.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
        
        // Đăng ký interceptor để cache request/response
        client.registerInterceptor(cacheInterceptor);
        
        return client;
    }
    
    @Component
    public static class CacheInterceptor implements IClientInterceptor {
        
        private final Cache<String, IBaseResource> resourceCache;
        private final Cache<String, Bundle> searchCache;
        private final FhirContext fhirContext;
        
        public CacheInterceptor(FhirContext fhirContext,
                              @Qualifier("fhirResourceCache") Cache<String, IBaseResource> resourceCache,
                              @Qualifier("searchResultCache") Cache<String, Bundle> searchCache) {
            this.fhirContext = fhirContext;
            this.resourceCache = resourceCache;
            this.searchCache = searchCache;
        }
        
        @Override
        public void interceptRequest(IHttpRequest request) {
            // Kiểm tra nếu request đã có trong cache, bỏ qua việc gửi request
            if (request.getHttpVerbName().equals("GET")) {
                String requestUrl = request.getUri();
                
                // Kiểm tra loại request
                if (requestUrl.contains("_search") || requestUrl.contains("?")) {
                    // Search request
                    Bundle cachedBundle = searchCache.getIfPresent(requestUrl);
                    if (cachedBundle != null) {
                        request.addHeader("X-Cache", "HIT");
                        // Đánh dấu request đã có trong cache để xử lý sau
                        request.setAttribute("cached", true);
                        request.setAttribute("cachedResource", cachedBundle);
                    } else {
                        request.addHeader("X-Cache", "MISS");
                    }
                } else {
                    // Read request for a specific resource
                    IBaseResource cachedResource = resourceCache.getIfPresent(requestUrl);
                    if (cachedResource != null) {
                        request.addHeader("X-Cache", "HIT");
                        // Đánh dấu request đã có trong cache để xử lý sau
                        request.setAttribute("cached", true);
                        request.setAttribute("cachedResource", cachedResource);
                    } else {
                        request.addHeader("X-Cache", "MISS");
                    }
                }
            }
        }
        
        @Override
        public void interceptResponse(IHttpResponse response) throws IOException {
            if (!Boolean.TRUE.equals(response.getRequest().getAttribute("cached"))) {
                // Cache response chỉ khi đây là request thật (không phải từ cache)
                if (response.getStatus() == 200) {
                    String requestUrl = response.getRequest().getUri();
                    
                    // Đọc response body
                    String responseBody = new String(response.readEntity(), StandardCharsets.UTF_8);
                    
                    if (requestUrl.contains("_search") || requestUrl.contains("?")) {
                        // Cache search results
                        try {
                            Bundle bundle = (Bundle) fhirContext.newJsonParser().parseResource(responseBody);
                            searchCache.put(requestUrl, bundle);
                        } catch (Exception e) {
                            // Xử lý lỗi parse
                        }
                    } else {
                        // Cache individual resource
                        try {
                            IBaseResource resource = fhirContext.newJsonParser().parseResource(responseBody);
                            resourceCache.put(requestUrl, resource);
                        } catch (Exception e) {
                            // Xử lý lỗi parse
                        }
                    }
                    
                    // Phải đặt lại entity sau khi đọc
                    response.setEntity(responseBody.getBytes(StandardCharsets.UTF_8));
                }
            } else {
                // Trả về cached resource
                IBaseResource cachedResource = (IBaseResource) response.getRequest().getAttribute("cachedResource");
                
                if (cachedResource != null) {
                    // Convert resource thành JSON
                    String resourceJson = fhirContext.newJsonParser().encodeResourceToString(cachedResource);
                    
                    // Thiết lập response từ cached resource
                    response.setEntity(resourceJson.getBytes(StandardCharsets.UTF_8));
                }
            }
        }
    }
}
```

#### 4. Tạo CachingFhirClient để đơn giản hóa việc sử dụng

```java
@Service
public class CachingFhirClient {

    private final IGenericClient fhirClient;
    private final Cache<String, IBaseResource> resourceCache;
    private final Cache<String, Bundle> searchCache;
    private final FhirContext fhirContext;
    
    public CachingFhirClient(IGenericClient fhirClient,
                           @Qualifier("fhirResourceCache") Cache<String, IBaseResource> resourceCache,
                           @Qualifier("searchResultCache") Cache<String, Bundle> searchCache,
                           FhirContext fhirContext) {
        this.fhirClient = fhirClient;
        this.resourceCache = resourceCache;
        this.searchCache = searchCache;
        this.fhirContext = fhirContext;
    }
    
    /**
     * Đọc resource với cache
     */
    public <T extends IBaseResource> T read(Class<T> resourceType, String id) {
        String cacheKey = buildResourceCacheKey(resourceType, id);
        
        // Kiểm tra cache
        IBaseResource cachedResource = resourceCache.getIfPresent(cacheKey);
        if (cachedResource != null && resourceType.isInstance(cachedResource)) {
            return resourceType.cast(cachedResource);
        }
        
        // Nếu không có trong cache, đọc từ server
        T resource = fhirClient.read()
                .resource(resourceType)
                .withId(id)
                .execute();
                
        // Cache kết quả
        resourceCache.put(cacheKey, resource);
        
        return resource;
    }
    
    /**
     * Tìm kiếm resource với cache
     */
    public <T extends IBaseResource> Bundle search(Class<T> resourceType, Map<String, List<String>> parameters) {
        String cacheKey = buildSearchCacheKey(resourceType, parameters);
        
        // Kiểm tra cache
        Bundle cachedBundle = searchCache.getIfPresent(cacheKey);
        if (cachedBundle != null) {
            return cachedBundle;
        }
        
        // Tạo search query
        IQuery<Bundle> query = fhirClient.search()
                .forResource(resourceType)
                .returnBundle(Bundle.class);
                
        // Thêm các tham số tìm kiếm
        for (Map.Entry<String, List<String>> entry : parameters.entrySet()) {
            for (String value : entry.getValue()) {
                query = query.where(new StringClientParam(entry.getKey()).matches().value(value));
            }
        }
        
        // Thực hiện tìm kiếm
        Bundle result = query.execute();
        
        // Cache kết quả
        searchCache.put(cacheKey, result);
        
        return result;
    }
    
    /**
     * Tạo hoặc cập nhật resource và xóa cache
     */
    public MethodOutcome createOrUpdate(IBaseResource resource) {
        MethodOutcome outcome;
        
        if (resource.getIdElement().hasIdPart()) {
            // Update
            outcome = fhirClient.update()
                    .resource(resource)
                    .execute();
                    
            // Xóa cache cho resource này
            invalidateResourceCache(resource);
        } else {
            // Create
            outcome = fhirClient.create()
                    .resource(resource)
                    .execute();
        }
        
        // Xóa cache tìm kiếm liên quan (có thể cải tiến để chỉ xóa cache liên quan)
        invalidateSearchCache(resource.getClass().getSimpleName());
        
        return outcome;
    }
    
    /**
     * Xóa resource và invalidate cache
     */
    public void delete(Class<? extends IBaseResource> resourceType, String id) {
        fhirClient.delete()
                .resourceById(resourceType.getSimpleName(), id)
                .execute();
                
        // Xóa cache cho resource này
        String cacheKey = buildResourceCacheKey(resourceType, id);
        resourceCache.invalidate(cacheKey);
        
        // Xóa cache tìm kiếm liên quan
        invalidateSearchCache(resourceType.getSimpleName());
    }
    
    /**
     * Xóa cache cho một resource cụ thể
     */
    private void invalidateResourceCache(IBaseResource resource) {
        String resourceType = resource.getClass().getSimpleName();
        String id = resource.getIdElement().getIdPart();
        String cacheKey = buildResourceCacheKey(resourceType, id);
        resourceCache.invalidate(cacheKey);
    }
    
    /**
     * Xóa tất cả cache tìm kiếm cho một loại resource
     */
    private void invalidateSearchCache(String resourceType) {
        // Trong thực tế, bạn có thể cần một cơ chế phức tạp hơn để theo dõi và xóa có chọn lọc
        // Ở đây chúng ta sẽ sử dụng cách tiếp cận đơn giản: xóa tất cả cache search
        
        // Tạo một bản sao của tất cả keys
        Set<String> allKeys = new HashSet<>();
        searchCache.asMap().forEach((key, value) -> allKeys.add(key));
        
        // Xóa các key chứa resourceType
        for (String key : allKeys) {
            if (key.contains("/" + resourceType + "?")) {
                searchCache.invalidate(key);
            }
        }
    }
    
    /**
     * Tạo cache key cho resource
     */
    private String buildResourceCacheKey(Class<? extends IBaseResource> resourceType, String id) {
        return fhirClient.getServerBase() + "/" + resourceType.getSimpleName() + "/" + id;
    }
    
    private String buildResourceCacheKey(String resourceType, String id) {
        return fhirClient.getServerBase() + "/" + resourceType + "/" + id;
    }
    
    /**
     * Tạo cache key cho search query
     */
    private <T extends IBaseResource> String buildSearchCacheKey(Class<T> resourceType, Map<String, List<String>> parameters) {
        StringBuilder sb = new StringBuilder();
        sb.append(fhirClient.getServerBase()).append("/").append(resourceType.getSimpleName()).append("?");
        
        // Sắp xếp tham số để đảm bảo key nhất quán
        List<String> paramNames = new ArrayList<>(parameters.keySet());
        Collections.sort(paramNames);
        
        for (String param : paramNames) {
            List<String> values = parameters.get(param);
            Collections.sort(values);
            
            for (String value : values) {
                sb.append(param).append("=").append(value).append("&");
            }
        }
        
        return sb.toString();
    }
    
    /**
     * Làm sạch cache
     */
    public void clearAllCaches() {
        resourceCache.invalidateAll();
        searchCache.invalidateAll();
    }
    
    /**
     * Lấy thống kê cache
     */
    public Map<String, CacheStats> getCacheStats() {
        Map<String, CacheStats> stats = new HashMap<>();
        stats.put("resourceCache", resourceCache.stats());
        stats.put("searchCache", searchCache.stats());
        return stats;
    }
}
```

#### 5. Sử dụng caching trong Service layer

```java
@Service
public class PatientService {

    private final CachingFhirClient fhirClient;
    
    public PatientService(CachingFhirClient fhirClient) {
        this.fhirClient = fhirClient;
    }
    
    @Cacheable(cacheNames = "patientDetails", key = "#id")
    public Patient getPatient(String id) {
        return fhirClient.read(Patient.class, id);
    }
    
    @Cacheable(cacheNames = "patientSearches", key = "#root.methodName + '-' + #familyName + '-' + #givenName")
    public List<Patient> findPatientsByName(String familyName, String givenName) {
        Map<String, List<String>> searchParams = new HashMap<>();
        
        if (familyName != null) {
            searchParams.put(Patient.SP_FAMILY, Collections.singletonList(familyName));
        }
        
        if (givenName != null) {
            searchParams.put(Patient.SP_GIVEN, Collections.singletonList(givenName));
        }
        
        Bundle results = fhirClient.search(Patient.class, searchParams);
        
        return results.getEntry().stream()
                .map(entry -> (Patient) entry.getResource())
                .collect(Collectors.toList());
    }
    
    @CacheEvict(cacheNames = {"patientDetails", "patientSearches"}, key = "#patient.id")
    public MethodOutcome updatePatient(Patient patient) {
        return fhirClient.createOrUpdate(patient);
    }
    
    @CacheEvict(cacheNames = {"patientDetails", "patientSearches"}, allEntries = true)
    public void deletePatient(String id) {
        fhirClient.delete(Patient.class, id);
    }
}
```

#### 6. Custom Caffeine Cache cho Bundle Pagination

Khi làm việc với FHIR, pagination là một vấn đề phổ biến. Caffeine có thể giúp cache kết quả phân trang:

```java
@Component
public class BundlePaginationCache {

    private final Cache<String, PageCacheEntry> pageCache;
    private final FhirContext fhirContext;
    
    public BundlePaginationCache(FhirContext fhirContext) {
        this.fhirContext = fhirContext;
        this.pageCache = Caffeine.newBuilder()
                .initialCapacity(20)
                .maximumSize(100)
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .build();
    }
    
    /**
     * Cache một trang kết quả
     */
    public void cachePage(String url, Bundle bundle) {
        PageCacheEntry entry = new PageCacheEntry(
                bundle,
                getBundleNextLink(bundle),
                getBundlePrevLink(bundle)
        );
        pageCache.put(url, entry);
    }
    
    /**
     * Lấy một trang từ cache
     */
    public Bundle getPage(String url) {
        PageCacheEntry entry = pageCache.getIfPresent(url);
        return entry != null ? entry.getBundle() : null;
    }
    
    /**
     * Kiểm tra xem URL tiếp theo đã được cache chưa
     */
    public boolean hasNextPageCached(String currentUrl) {
        PageCacheEntry entry = pageCache.getIfPresent(currentUrl);
        if (entry != null && entry.getNextUrl() != null) {
            return pageCache.getIfPresent(entry.getNextUrl()) != null;
        }
        return false;
    }
    
    /**
     * Kiểm tra xem URL trước đó đã được cache chưa
     */
    public boolean hasPrevPageCached(String currentUrl) {
        PageCacheEntry entry = pageCache.getIfPresent(currentUrl);
        if (entry != null && entry.getPrevUrl() != null) {
            return pageCache.getIfPresent(entry.getPrevUrl()) != null;
        }
        return false;
    }
    
    /**
     * Lấy URL của trang tiếp theo từ cache
     */
    public String getNextPageUrl(String currentUrl) {
        PageCacheEntry entry = pageCache.getIfPresent(currentUrl);
        return entry != null ? entry.getNextUrl() : null;
    }
    
    /**
     * Lấy URL của trang trước từ cache
     */
    public String getPrevPageUrl(String currentUrl) {
        PageCacheEntry entry = pageCache.getIfPresent(currentUrl);
        return entry != null ? entry.getPrevUrl() : null;
    }
    
    /**
     * Xóa toàn bộ cache pagination
     */
    public void clearPaginationCache() {
        pageCache.invalidateAll();
    }
    
    /**
     * Helper method để lấy link tiếp theo từ Bundle
     */
    private String getBundleNextLink(Bundle bundle) {
        return bundle.getLink(Bundle.LINK_NEXT) != null 
                ? bundle.getLink(Bundle.LINK_NEXT).getUrl() : null;
    }
    
    /**
     * Helper method để lấy link trước từ Bundle
     */
    private String getBundlePrevLink(Bundle bundle) {
        return bundle.getLink(Bundle.LINK_PREV) != null 
                ? bundle.getLink(Bundle.LINK_PREV).getUrl() : null;
    }
    
    /**
     * Lớp đại diện cho một entry trong cache
     */
    private static class PageCacheEntry {
        private final Bundle bundle;
        private final String nextUrl;
        private final String prevUrl;
        
        public PageCacheEntry(Bundle bundle, String nextUrl, String prevUrl) {
            this.bundle = bundle;
            this.nextUrl = nextUrl;
            this.prevUrl = prevUrl;
        }
        
        public Bundle getBundle() {
            return bundle;
        }
        
        public String getNextUrl() {
            return nextUrl;
        }
        
        public String getPrevUrl() {
            return prevUrl;
        }
    }
}
```

#### 7. PaginationService sử dụng BundlePaginationCache

```java
@Service
public class FhirPaginationService {

    private final IGenericClient fhirClient;
    private final BundlePaginationCache paginationCache;
    
    public FhirPaginationService(IGenericClient fhirClient, BundlePaginationCache paginationCache) {
        this.fhirClient = fhirClient;
        this.paginationCache = paginationCache;
    }
    
    /**
     * Thực hiện tìm kiếm có phân trang với cache
     */
    public Bundle executeSearchWithCaching(IQuery<Bundle> query) {
        // Chuyển query thành URL string để dùng làm cache key
        String queryUrl = query.toString();
        
        // Kiểm tra cache
        Bundle cachedBundle = paginationCache.getPage(queryUrl);
        if (cachedBundle != null) {
            return cachedBundle;
        }
        
        // Thực hiện tìm kiếm
        Bundle bundle = query.execute();
        
        // Cache kết quả
        paginationCache.cachePage(queryUrl, bundle);
        
        // Kiểm tra và cache trước trang tiếp theo nếu có
        prefetchNextPage(bundle);
        
        return bundle;
    }
    
    /**
     * Lấy trang tiếp theo với cache
     */
    public Bundle getNextPage(Bundle currentBundle) {
        String currentUrl = currentBundle.getId();
        String nextUrl = paginationCache.getNextPageUrl(currentUrl);
        
        if (nextUrl != null) {
            // Kiểm tra cache
            Bundle cachedBundle = paginationCache.getPage(nextUrl);
            if (cachedBundle != null) {
                return cachedBundle;
            }
        } else if (currentBundle.getLink(Bundle.LINK_NEXT) != null) {
            nextUrl = currentBundle.getLink(Bundle.LINK_NEXT).getUrl();
        } else {
            return null; // Không có trang tiếp theo
        }
        
        // Lấy trang tiếp theo từ server
        Bundle nextBundle = fhirClient.loadPage().byUrl(nextUrl).andReturnBundle(Bundle.class).execute();
        
        // Cache trang
        paginationCache.cachePage(nextUrl, nextBundle);
        
        // Prefetch trang tiếp theo nếu có
        prefetchNextPage(nextBundle);
        
        return nextBundle;
    }
    
    /**
     * Lấy trang trước với cache
     */
    public Bundle getPreviousPage(Bundle currentBundle) {
        String currentUrl = currentBundle.getId();
        String prevUrl = paginationCache.getPrevPageUrl(currentUrl);
        
        if (prevUrl != null) {
            // Kiểm tra cache
            Bundle cachedBundle = paginationCache.getPage(prevUrl);
            if (cachedBundle != null) {
                return cachedBundle;
            }
        } else if (currentBundle.getLink(Bundle.LINK_PREV) != null) {
            prevUrl = currentBundle.getLink(Bundle.LINK_PREV).getUrl();
        } else {
            return null; // Không có trang trước
        }
        
        // Lấy trang trước từ server
        Bundle prevBundle = fhirClient.loadPage().byUrl(prevUrl).andReturnBundle(Bundle.class).execute();
        
        // Cache trang
        paginationCache.cachePage(prevUrl, prevBundle);
        
        return prevBundle;
    }
    
    /**
     * Prefetch trang tiếp theo để cải thiện UX
     */
    private void prefetchNextPage(Bundle bundle) {
        if (bundle.getLink(Bundle.LINK_NEXT) != null) {
            String nextUrl = bundle.getLink(Bundle.LINK_NEXT).getUrl();
            
            // Chỉ prefetch nếu chưa có trong cache
            if (paginationCache.getPage(nextUrl) == null) {
                // Sử dụng CompletableFuture để prefetch không đồng bộ
                CompletableFuture.runAsync(() -> {
                    try {
                        Bundle nextBundle = fhirClient.loadPage().byUrl(nextUrl)
                                .andReturnBundle(Bundle.class).execute();
                        paginationCache.cachePage(nextUrl, nextBundle);
                    } catch (Exception e) {
                        // Xử lý lỗi prefetch
                    }
                });
            }
        }
    }
}
```

#### 8. Controller hiển thị thống kê Cache

```java
@RestController
@RequestMapping("/api/cache")
public class CacheController {

    private final CachingFhirClient cachingFhirClient;
    private final BundlePaginationCache paginationCache;
    private final CacheManager cacheManager;
    
    public CacheController(CachingFhirClient cachingFhirClient, 
                           BundlePaginationCache paginationCache,
                           CacheManager cacheManager) {
        this.cachingFhirClient = cachingFhirClient;
        this.paginationCache = paginationCache;
        this.cacheManager = cacheManager;
    }
    
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getCacheStats() {
        Map<String, Object> stats = new HashMap<>();
        
        // Lấy thống kê từ FHIR client cache
        Map<String, CacheStats> clientStats = cachingFhirClient.getCacheStats();
        stats.put("fhirClientCache", clientStats);
        
        // Lấy thông tin cache từ Spring Cache Manager
        Collection<String> cacheNames = cacheManager.getCacheNames();
        Map<String, Object> springCacheStats = new HashMap<>();
        
        for (String name : cacheNames) {
            Cache cache = cacheManager.getCache(name);
            if (cache instanceof CaffeineCache) {
                CaffeineCache caffeineCache = (CaffeineCache) cache;
                springCacheStats.put(name, caffeineCache.getNativeCache().stats());
            }
        }
        
        stats.put("springCache", springCacheStats);
        
        return ResponseEntity.ok(stats);
    }
    
    @DeleteMapping
    public ResponseEntity<Void> clearAllCaches() {
        // Xóa FHIR client cache
        cachingFhirClient.clearAllCaches();
        
        // Xóa pagination cache
        paginationCache.clearPaginationCache();
        
        // Xóa Spring Cache
        Collection<String> cacheNames = cacheManager.getCacheNames();
        for (String name : cacheNames) {
            Cache cache = cacheManager.getCache(name);
            if (cache != null) {
                cache.clear();
            }
        }
        
        return ResponseEntity.noContent().build();
    }
}
```

### Cấu hình nâng cao Caffeine Cache với HAPI FHIR

#### 1. Cache cho các resource loại khác nhau

Trong thực tế, các loại resource khác nhau có thể có chính sách cache khác nhau:

```java
@Configuration
public class ResourceSpecificCacheConfig {

    @Bean
    public Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches() {
        Map<String, Cache<String, IBaseResource>> caches = new HashMap<>();
        
        // Patient cache - lưu lâu hơn vì ít thay đổi
        caches.put("Patient", Caffeine.newBuilder()
                .initialCapacity(50)
                .maximumSize(500)
                .expireAfterWrite(30, TimeUnit.MINUTES)
                .recordStats()
                .build());
        
        // Observation cache - lưu ngắn hơn vì có thể thay đổi thường xuyên
        caches.put("Observation", Caffeine.newBuilder()
                .initialCapacity(200)
                .maximumSize(1000)
                .expireAfterWrite(10, TimeUnit.MINUTES)
                .recordStats()
                .build());
        
        // Encounter cache - cân bằng giữa hiệu suất và tính cập nhật
        caches.put("Encounter", Caffeine.newBuilder()
                .initialCapacity(50)
                .maximumSize(300)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .recordStats()
                .build());
        
        // MedicationRequest cache - thời gian ngắn do có thể thay đổi
        caches.put("MedicationRequest", Caffeine.newBuilder()
                .initialCapacity(50)
                .maximumSize(300)
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .recordStats()
                .build());
        
        // Default cache cho các resource khác
        caches.put("default", Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(500)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .recordStats()
                .build());
        
        return caches;
    }
    
    // Interceptor để xử lý cache theo resource type
    @Component
    public class ResourceTypeAwareCacheInterceptor implements IClientInterceptor {
        
        private final Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches;
        private final FhirContext fhirContext;
        
        public ResourceTypeAwareCacheInterceptor(
                Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches,
                FhirContext fhirContext) {
            this.resourceTypeSpecificCaches = resourceTypeSpecificCaches;
            this.fhirContext = fhirContext;
        }
        
        @Override
        public void interceptRequest(IHttpRequest request) {
            if (request.getHttpVerbName().equals("GET") && !request.getUri().contains("_search")) {
                // Extract resource type from URL
                String url = request.getUri();
                String resourceType = extractResourceType(url);
                
                if (resourceType != null) {
                    // Try to get from appropriate cache
                    Cache<String, IBaseResource> cache = resourceTypeSpecificCaches.getOrDefault(
                            resourceType, resourceTypeSpecificCaches.get("default"));
                    
                    IBaseResource cachedResource = cache.getIfPresent(url);
                    if (cachedResource != null) {
                        request.addHeader("X-Cache", "HIT");
                        request.setAttribute("cached", true);
                        request.setAttribute("cachedResource", cachedResource);
                    } else {
                        request.addHeader("X-Cache", "MISS");
                    }
                }
            }
        }
        
        @Override
        public void interceptResponse(IHttpResponse response) throws IOException {
            if (!Boolean.TRUE.equals(response.getRequest().getAttribute("cached"))) {
                if (response.getStatus() == 200 && !response.getRequest().getUri().contains("_search")) {
                    String url = response.getRequest().getUri();
                    String resourceType = extractResourceType(url);
                    
                    if (resourceType != null) {
                        String responseBody = new String(response.readEntity(), StandardCharsets.UTF_8);
                        
                        try {
                            IBaseResource resource = fhirContext.newJsonParser().parseResource(responseBody);
                            
                            // Get appropriate cache
                            Cache<String, IBaseResource> cache = resourceTypeSpecificCaches.getOrDefault(
                                    resourceType, resourceTypeSpecificCaches.get("default"));
                            
                            // Cache the resource
                            cache.put(url, resource);
                        } catch (Exception e) {
                            // Handle parsing error
                        }
                        
                        response.setEntity(responseBody.getBytes(StandardCharsets.UTF_8));
                    }
                }
            } else {
                // Return cached resource
                IBaseResource cachedResource = (IBaseResource) response.getRequest().getAttribute("cachedResource");
                
                if (cachedResource != null) {
                    String resourceJson = fhirContext.newJsonParser().encodeResourceToString(cachedResource);
                    response.setEntity(resourceJson.getBytes(StandardCharsets.UTF_8));
                }
            }
        }
        
        private String extractResourceType(String url) {
            // Parse URL to extract resource type
            // Example: http://server/Patient/123 -> "Patient"
            Pattern pattern = Pattern.compile("/([A-Za-z]+)/[^/]+$");
            Matcher matcher = pattern.matcher(url);
            if (matcher.find()) {
                return matcher.group(1);
            }
            return null;
        }
    }
}
```

#### 2. Cache Warming Service

Để cải thiện hiệu suất khi khởi động ứng dụng, chúng ta có thể implement service làm nóng cache:

```java
@Service
public class CacheWarmingService {

    private final IGenericClient fhirClient;
    private final CachingFhirClient cachingFhirClient;
    private final Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches;
    private final CacheManager cacheManager;
    
    @Value("${cache.warming.enabled:true}")
    private boolean cacheWarmingEnabled;
    
    @Value("${cache.warming.resources:Patient,Practitioner,Organization}")
    private String[] resourceTypesToWarm;
    
    @Value("${cache.warming.count:50}")
    private int countPerResourceType;
    
    private static final Logger logger = LoggerFactory.getLogger(CacheWarmingService.class);
    
    public CacheWarmingService(IGenericClient fhirClient,
                             CachingFhirClient cachingFhirClient,
                             Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches,
                             CacheManager cacheManager) {
        this.fhirClient = fhirClient;
        this.cachingFhirClient = cachingFhirClient;
        this.resourceTypeSpecificCaches = resourceTypeSpecificCaches;
        this.cacheManager = cacheManager;
    }
    
    @PostConstruct
    public void warmCaches() {
        if (!cacheWarmingEnabled) {
            logger.info("Cache warming is disabled");
            return;
        }
        
        logger.info("Starting cache warming process...");
        
        // Run in separate thread to not block application startup
        CompletableFuture.runAsync(() -> {
            try {
                for (String resourceType : resourceTypesToWarm) {
                    logger.info("Warming cache for resource type: {}", resourceType);
                    warmResourceTypeCache(resourceType);
                }
                
                logger.info("Cache warming process completed");
            } catch (Exception e) {
                logger.error("Error during cache warming", e);
            }
        });
    }
    
    private void warmResourceTypeCache(String resourceType) {
        try {
            // First fetch common resources for this type
            Bundle bundle = fhirClient.search()
                    .forResource(resourceType)
                    .count(countPerResourceType)
                    .sort().descending("_lastUpdated")
                    .returnBundle(Bundle.class)
                    .execute();
            
            int warmed = 0;
            
            for (Bundle.BundleEntryComponent entry : bundle.getEntry()) {
                try {
                    IBaseResource resource = entry.getResource();
                    String id = resource.getIdElement().getIdPart();
                    
                    // Use our caching client to ensure it's properly cached
                    cachingFhirClient.read(resource.getClass(), id);
                    
                    warmed++;
                } catch (Exception e) {
                    logger.warn("Error warming cache for {} with ID: {}", resourceType, 
                            entry.getResource().getIdElement().getIdPart(), e);
                }
            }
            
            logger.info("Warmed cache for {} {} resources", warmed, resourceType);
            
        } catch (Exception e) {
            logger.error("Error warming cache for resource type: {}", resourceType, e);
        }
    }
    
    // Method to manually trigger cache warming
    public Map<String, Integer> warmCachesManually() {
        Map<String, Integer> results = new HashMap<>();
        
        for (String resourceType : resourceTypesToWarm) {
            try {
                // First fetch common resources for this type
                Bundle bundle = fhirClient.search()
                        .forResource(resourceType)
                        .count(countPerResourceType)
                        .sort().descending("_lastUpdated")
                        .returnBundle(Bundle.class)
                        .execute();
                
                int warmed = 0;
                
                for (Bundle.BundleEntryComponent entry : bundle.getEntry()) {
                    try {
                        IBaseResource resource = entry.getResource();
                        String id = resource.getIdElement().getIdPart();
                        
                        // Use our caching client to ensure it's properly cached
                        cachingFhirClient.read(resource.getClass(), id);
                        
                        warmed++;
                    } catch (Exception e) {
                        logger.warn("Error warming cache for {} with ID: {}", resourceType, 
                                entry.getResource().getIdElement().getIdPart(), e);
                    }
                }
                
                results.put(resourceType, warmed);
                
            } catch (Exception e) {
                logger.error("Error warming cache for resource type: {}", resourceType, e);
                results.put(resourceType, 0);
            }
        }
        
        return results;
    }
}
```

#### 3. Loader cho Write-Behind Caching

Đôi khi, bạn muốn update dữ liệu cache ngay lập tức và chỉ cập nhật server sau:

```java
@Component
public class WriteBehindCacheLoader {

    private final IGenericClient fhirClient;
    private final FhirContext fhirContext;
    
    private final BlockingQueue<CacheUpdateTask> updateQueue = new LinkedBlockingQueue<>();
    
    private static final Logger logger = LoggerFactory.getLogger(WriteBehindCacheLoader.class);
    
    public WriteBehindCacheLoader(IGenericClient fhirClient, FhirContext fhirContext) {
        this.fhirClient = fhirClient;
        this.fhirContext = fhirContext;
        
        // Start worker thread for processing updates
        startUpdateProcessor();
    }
    
    private void startUpdateProcessor() {
        Thread workerThread = new Thread(() -> {
            while (true) {
                try {
                    CacheUpdateTask task = updateQueue.take();
                    processUpdateTask(task);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    logger.error("Cache update worker interrupted", e);
                    break;
                } catch (Exception e) {
                    logger.error("Error processing cache update task", e);
                }
            }
        });
        
        workerThread.setDaemon(true);
        workerThread.setName("cache-update-worker");
        workerThread.start();
    }
    
    private void processUpdateTask(CacheUpdateTask task) {
        try {
            // Update cache first (already done when task was created)
            
            // Then update server
            IBaseResource resource = task.getResource();
            if (resource.getIdElement().hasIdPart()) {
                // Update
                fhirClient.update()
                        .resource(resource)
                        .execute();
            } else {
                // Create
                MethodOutcome outcome = fhirClient.create()
                        .resource(resource)
                        .execute();
                
                // Update the resource ID in cache if needed
                if (outcome.getId() != null && outcome.getResource() != null) {
                    task.getCallback().accept(outcome.getResource());
                }
            }
            
            logger.debug("Successfully processed write-behind update for {}", 
                    resource.getClass().getSimpleName());
        } catch (Exception e) {
            logger.error("Error during write-behind update", e);
            // Notify of failure if callback provided
            if (task.getErrorCallback() != null) {
                task.getErrorCallback().accept(e);
            }
        }
    }
    
    /**
     * Queue an update task that will be processed asynchronously
     */
    public void queueUpdateTask(IBaseResource resource, Consumer<IBaseResource> callback, Consumer<Exception> errorCallback) {
        CacheUpdateTask task = new CacheUpdateTask(resource, callback, errorCallback);
        updateQueue.offer(task);
    }
    
    /**
     * Class representing a cache update task
     */
    private static class CacheUpdateTask {
        private final IBaseResource resource;
        private final Consumer<IBaseResource> callback;
        private final Consumer<Exception> errorCallback;
        
        public CacheUpdateTask(IBaseResource resource, Consumer<IBaseResource> callback, 
                             Consumer<Exception> errorCallback) {
            this.resource = resource;
            this.callback = callback;
            this.errorCallback = errorCallback;
        }
        
        public IBaseResource getResource() {
            return resource;
        }
        
        public Consumer<IBaseResource> getCallback() {
            return callback;
        }
        
        public Consumer<Exception> getErrorCallback() {
            return errorCallback;
        }
    }
}
```

#### 4. Cache Eviction Listener

Để giám sát hoạt động xóa cache:

```java
@Component
public class CacheEvictionListener {

    private static final Logger logger = LoggerFactory.getLogger(CacheEvictionListener.class);
    
    @Bean
    public Cache<String, IBaseResource> fhirResourceCacheWithListener() {
        RemovalListener<String, IBaseResource> removalListener = (key, value, cause) -> {
            if (cause.wasEvicted()) {
                logger.debug("Resource evicted from cache: {} due to {}", key, cause);
                
                // Log more detail for certain eviction types
                if (cause == RemovalCause.SIZE) {
                    logger.info("Cache eviction due to size limit: {}", key);
                } else if (cause == RemovalCause.EXPIRED) {
                    logger.info("Cache entry expired: {}", key);
                }
            }
        };
        
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(1000)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .removalListener(removalListener)
                .recordStats()
                .build();
    }
    
    @Bean
    public Cache<String, Bundle> searchResultCacheWithListener() {
        RemovalListener<String, Bundle> removalListener = (key, value, cause) -> {
            if (cause.wasEvicted()) {
                logger.debug("Search result evicted from cache: {} due to {}", key, cause);
                
                // For search results, we might want to track which queries are frequently evicted
                if (value != null) {
                    int resultCount = value.getEntry().size();
                    logger.info("Search cache entry with {} results evicted due to {}: {}", 
                            resultCount, cause, key);
                }
            }
        };
        
        return Caffeine.newBuilder()
                .initialCapacity(50)
                .maximumSize(200)
                .expireAfterWrite(5, TimeUnit.MINUTES)
                .removalListener(removalListener)
                .recordStats()
                .build();
    }
    
    /**
     * Register removal listeners with Spring Cache Manager
     */
    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        
        // Configure default cache with listener
        Caffeine<Object, Object> caffeine = Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(500)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .removalListener((key, value, cause) -> {
                    if (cause.wasEvicted()) {
                        logger.debug("Entry evicted from Spring cache: key={}, cause={}", key, cause);
                    }
                })
                .recordStats();
        
        cacheManager.setCaffeine(caffeine);
        return cacheManager;
    }
}
```

#### 5. Caching cho Terminology và Value Sets

Value Sets thường được tham chiếu thường xuyên và thay đổi ít:

```java
@Service
public class TerminologyService {

    private final IGenericClient fhirClient;
    private final Cache<String, ValueSet> valueSetCache;
    private final Cache<CodeSystemLookupKey, List<Coding>> conceptLookupCache;
    
    public TerminologyService(IGenericClient fhirClient) {
        this.fhirClient = fhirClient;
        
        // Cache for Value Sets - longer TTL since they change infrequently
        this.valueSetCache = Caffeine.newBuilder()
                .initialCapacity(20)
                .maximumSize(100)
                .expireAfterWrite(1, TimeUnit.HOURS)
                .recordStats()
                .build();
        
        // Cache for concept lookups
        this.conceptLookupCache = Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(1000)
                .expireAfterWrite(30, TimeUnit.MINUTES)
                .recordStats()
                .build();
    }
    
    /**
     * Get a ValueSet by URL with caching
     */
    public ValueSet getValueSet(String url) {
        // Check cache first
        ValueSet cachedValueSet = valueSetCache.getIfPresent(url);
        if (cachedValueSet != null) {
            return cachedValueSet;
        }
        
        // If not in cache, fetch from server
        Bundle result = fhirClient.search()
                .forResource(ValueSet.class)
                .where(ValueSet.URL.matches().value(url))
                .returnBundle(Bundle.class)
                .execute();
        
        if (result.getEntry().isEmpty()) {
            throw new ResourceNotFoundException("ValueSet with URL " + url + " not found");
        }
        
        ValueSet valueSet = (ValueSet) result.getEntryFirstRep().getResource();
        
        // Cache the result
        valueSetCache.put(url, valueSet);
        
        return valueSet;
    }
    
    /**
     * Validate if a code is in a value set
     */
    public boolean validateCode(String valueSetUrl, String system, String code) {
        // Build validation parameters
        Parameters inParams = new Parameters();
        inParams.addParameter().setName("url").setValue(new UriType(valueSetUrl));
        inParams.addParameter().setName("system").setValue(new UriType(system));
        inParams.addParameter().setName("code").setValue(new StringType(code));
        
        // Check if in cache
        CodeSystemLookupKey key = new CodeSystemLookupKey(system, code);
        List<Coding> cachedCodes = conceptLookupCache.getIfPresent(key);
        
        if (cachedCodes != null) {
            // Search in cached results
            for (Coding coding : cachedCodes) {
                // This is a simplistic check - in real life you'd need to also validate value set membership
                if (coding.getSystem().equals(system) && coding.getCode().equals(code)) {
                    return true;
                }
            }
        }
        
        // If not found in cache, check with server
        Parameters outParams = fhirClient.operation()
                .onType(ValueSet.class)
                .named("validate-code")
                .withParameters(inParams)
                .execute();
        
        // Extract result
        BooleanType result = (BooleanType) outParams.getParameter("result");
        return result != null && result.booleanValue();
    }
    
    /**
     * Lookup code details with caching
     */
    public Coding lookupCode(String system, String code) {
        CodeSystemLookupKey key = new CodeSystemLookupKey(system, code);
        
        // Check cache
        List<Coding> cachedCodes = conceptLookupCache.getIfPresent(key);
        if (cachedCodes != null) {
            for (Coding coding : cachedCodes) {
                if (coding.getCode().equals(code)) {
                    return coding;
                }
            }
        }
        
        // If not in cache, lookup from server
        Parameters inParams = new Parameters();
        inParams.addParameter().setName("system").setValue(new UriType(system));
        inParams.addParameter().setName("code").setValue(new StringType(code));
        
        try {
            Parameters outParams = fhirClient.operation()
                    .onType(CodeSystem.class)
                    .named("lookup")
                    .withParameters(inParams)
                    .execute();
            
            // Extract result
            String display = ((StringType) outParams.getParameter("display")).getValue();
            
            Coding coding = new Coding()
                    .setSystem(system)
                    .setCode(code)
                    .setDisplay(display);
            
            // Cache the result
            List<Coding> codings = new ArrayList<>();
            codings.add(coding);
            conceptLookupCache.put(key, codings);
            
            return coding;
        } catch (Exception e) {
            // Handle lookup error
            return null;
        }
    }
    
    /**
     * Clear terminology caches
     */
    public void clearCaches() {
        valueSetCache.invalidateAll();
        conceptLookupCache.invalidateAll();
    }
    
    /**
     * Key class for code system lookups
     */
    private static class CodeSystemLookupKey {
        private final String system;
        private final String code;
        
        public CodeSystemLookupKey(String system, String code) {
            this.system = system;
            this.code = code;
        }
        
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            CodeSystemLookupKey that = (CodeSystemLookupKey) o;
            return Objects.equals(system, that.system) && Objects.equals(code, that.code);
        }
        
        @Override
        public int hashCode() {
            return Objects.hash(system, code);
        }
    }
}
```

#### 6. Caching cho FHIR Search Bundle & Reference Resolution

```java
@Service
public class ReferenceResolutionService {

    private final IGenericClient fhirClient;
    private final Cache<String, IBaseResource> resourceCache;
    private final Cache<List<String>, Map<String, IBaseResource>> batchReferenceCache;
    
    public ReferenceResolutionService(IGenericClient fhirClient) {
        this.fhirClient = fhirClient;
        
        // Cache for individual resources
        this.resourceCache = Caffeine.newBuilder()
                .initialCapacity(200)
                .maximumSize(1000)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .recordStats()
                .build();
        
        // Cache for batch reference resolution results
        this.batchReferenceCache = Caffeine.newBuilder()
                .initialCapacity(50)
                .maximumSize(200)
                .expireAfterWrite(10, TimeUnit.MINUTES)
                .recordStats()
                .build();
    }
    
    /**
     * Resolve a single reference with caching
     */
    public IBaseResource resolveReference(Reference reference) {
        if (reference == null || !reference.hasReference()) {
            return null;
        }
        
        String refString = reference.getReference();
        
        // Check cache first
        IBaseResource cached = resourceCache.getIfPresent(refString);
        if (cached != null) {
            return cached;
        }
        
        // If not in cache, resolve from server
        IBaseResource resource = fhirClient.read()
                .resource(getResourceTypeFromReference(refString))
                .withId(getIdFromReference(refString))
                .execute();
        
        // Cache the result
        resourceCache.put(refString, resource);
        
        return resource;
    }
    
    /**
     * Resolve multiple references in batch with caching
     */
    public Map<String, IBaseResource> resolveReferences(List<Reference> references) {
        if (references == null || references.isEmpty()) {
            return Collections.emptyMap();
        }
        
        // Extract reference strings
        List<String> refStrings = references.stream()
                .filter(Reference::hasReference)
                .map(Reference::getReference)
                .collect(Collectors.toList());
        
        // Sort for consistent cache key
        Collections.sort(refStrings);
        
        // Check batch cache
        Map<String, IBaseResource> batchResult = batchReferenceCache.getIfPresent(refStrings);
        if (batchResult != null) {
            return batchResult;
        }
        
        // Individual cache checks
        Map<String, IBaseResource> result = new HashMap<>();
        List<String> uncachedRefs = new ArrayList<>();
        
        for (String refString : refStrings) {
            IBaseResource cached = resourceCache.getIfPresent(refString);
            if (cached != null) {
                result.put(refString, cached);
            } else {
                uncachedRefs.add(refString);
            }
        }
        
        // If all were in cache, return immediately
        if (uncachedRefs.isEmpty()) {
            return result;
        }
        
        // Group by resource type for batch retrieval
        Map<String, List<String>> refsByType = uncachedRefs.stream()
                .collect(Collectors.groupingBy(this::getResourceTypeFromReference));
        
        // Fetch each resource type in batches
        for (Map.Entry<String, List<String>> entry : refsByType.entrySet()) {
            String resourceType = entry.getKey();
            List<String> ids = entry.getValue().stream()
                    .map(this::getIdFromReference)
                    .collect(Collectors.toList());
            
            // Construct comma-separated list for ?_id=id1,id2,id3
            String idParam = String.join(",", ids);
            
            // Batch retrieve resources
            Bundle bundle = fhirClient.search()
                    .forResource(resourceType)
                    .where(new TokenClientParam("_id").exactly().codes(ids))
                    .returnBundle(Bundle.class)
                    .execute();
            
            // Process and cache results
            for (Bundle.BundleEntryComponent entry2 : bundle.getEntry()) {
                IBaseResource resource = entry2.getResource();
                String refStr = resourceType + "/" + resource.getIdElement().getIdPart();
                
                // Add to result and cache individually
                result.put(refStr, resource);
                resourceCache.put(refStr, resource);
            }
        }
        
        // Cache the batch result
        batchReferenceCache.put(refStrings, new HashMap<>(result));
        
        return result;
    }
    
    /**
     * Extract resource type from reference string
     */
    private String getResourceTypeFromReference(String reference) {
        int slashIndex = reference.indexOf('/');
        return slashIndex > 0 ? reference.substring(0, slashIndex) : reference;
    }
    
    /**
     * Extract ID from reference string
     */
    private String getIdFromReference(String reference) {
        int slashIndex = reference.indexOf('/');
        return slashIndex > 0 ? reference.substring(slashIndex + 1) : reference;
    }
    
    /**
     * Clear reference resolution caches
     */
    public void clearCaches() {
        resourceCache.invalidateAll();
        batchReferenceCache.invalidateAll();
    }
}
```

### Giám sát và tối ưu Cache hiệu quả

#### 1. Metrics cho việc sử dụng Cache

```java
@Component
public class CacheMetricsExporter {

    private final Cache<String, IBaseResource> resourceCache;
    private final Cache<String, Bundle> searchCache;
    private final Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches;
    
    @Autowired(required = false)
    private MeterRegistry meterRegistry;
    
    public CacheMetricsExporter(
            @Qualifier("fhirResourceCache") Cache<String, IBaseResource> resourceCache,
            @Qualifier("searchResultCache") Cache<String, Bundle> searchCache,
            Map<String, Cache<String, IBaseResource>> resourceTypeSpecificCaches) {
        this.resourceCache = resourceCache;
        this.searchCache = searchCache;
        this.resourceTypeSpecificCaches = resourceTypeSpecificCaches;
        
        // Register metrics
        if (meterRegistry != null) {
            registerMetrics();
        }
    }
    
    private void registerMetrics() {
        // Resource cache metrics
        Gauge.builder("cache.resource.size", resourceCache, cache -> cache.estimatedSize())
                .description("Estimated number of entries in the resource cache")
                .register(meterRegistry);
        
        Gauge.builder("cache.resource.hitRate", resourceCache, cache -> cache.stats().hitRate())
                .description("Hit rate of the resource cache")
                .register(meterRegistry);
        
        Gauge.builder("cache.resource.missRate", resourceCache, cache -> cache.stats().missRate())
                .description("Miss rate of the resource cache")
                .register(meterRegistry);
        
        // Search cache metrics
        Gauge.builder("cache.search.size", searchCache, cache -> cache.estimatedSize())
                .description("Estimated number of entries in the search cache")
                .register(meterRegistry);
        
        Gauge.builder("cache.search.hitRate", searchCache, cache -> cache.stats().hitRate())
                .description("Hit rate of the search cache")
                .register(meterRegistry);
        
        Gauge.builder("cache.search.missRate", searchCache, cache -> cache.stats().missRate())
                .description("Miss rate of the search cache")
                .register(meterRegistry);
        
        // Resource-specific cache metrics
        resourceTypeSpecificCaches.forEach((resourceType, cache) -> {
            String suffix = resourceType.equals("default") ? "default" : resourceType.toLowerCase();
            
            Gauge.builder("cache.resource." + suffix + ".size", cache, c -> c.estimatedSize())
                    .description("Estimated number of entries in the " + resourceType + " cache")
                    .register(meterRegistry);
            
            Gauge.builder("cache.resource." + suffix + ".hitRate", cache, c -> c.stats().hitRate())
                    .description("Hit rate of the " + resourceType + " cache")
                    .register(meterRegistry);
        });
    }
    
    /**
     * Get current cache statistics for logging or reporting
     */
    public Map<String, Object> getCurrentCacheStats() {
        Map<String, Object> stats = new HashMap<>();
        
        // Resource cache stats
        stats.put("resourceCache.size", resourceCache.estimatedSize());
        stats.put("resourceCache.stats", resourceCache.stats());
        
        // Search cache stats
        stats.put("searchCache.size", searchCache.estimatedSize());
        stats.put("searchCache.stats", searchCache.stats());
        
        // Resource-specific cache stats
        Map<String, Object> resourceTypeStats = new HashMap<>();
        resourceTypeSpecificCaches.forEach((resourceType, cache) -> {
            Map<String, Object> cacheStats = new HashMap<>();
            cacheStats.put("size", cache.estimatedSize());
            cacheStats.put("hits", cache.stats().hitCount());
            cacheStats.put("misses", cache.stats().missCount());
            cacheStats.put("hitRate", cache.stats().hitRate());
            cacheStats.put("evictions", cache.stats().evictionCount());
            resourceTypeStats.put(resourceType, cacheStats);
        });
        stats.put("resourceTypeSpecificCaches", resourceTypeStats);
        
        return stats;
    }
}
```

#### 2. Dashboard Service để theo dõi hiệu suất Cache

```java
@Service
public class CacheDashboardService {

    private final CacheMetricsExporter metricsExporter;
    private final Cache<String, IBaseResource> resourceCache;
    private final Cache<String, Bundle> searchCache;
    
    private final Map<String, CacheStats> historicalStats = new ConcurrentHashMap<>();
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    
    private static final Logger logger = LoggerFactory.getLogger(CacheDashboardService.class);

    public CacheDashboardService(
            CacheMetricsExporter metricsExporter,
            @Qualifier("fhirResourceCache") Cache<String, IBaseResource> resourceCache,
            @Qualifier("searchResultCache") Cache<String, Bundle> searchCache) {
        this.metricsExporter = metricsExporter;
        this.resourceCache = resourceCache;
        this.searchCache = searchCache;
        
        // Schedule regular collection of cache stats
        scheduler.scheduleAtFixedRate(this::collectStats, 1, 5, TimeUnit.MINUTES);
    }
    
    private void collectStats() {
        try {
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
            
            // Collect current stats
            CacheStats resourceStats = resourceCache.stats();
            CacheStats searchStats = searchCache.stats();
            
            // Store in historical data
            historicalStats.put("resource_" + timestamp, resourceStats);
            historicalStats.put("search_" + timestamp, searchStats);
            
            // Log stats summary
            logger.info("Resource cache stats: hit_rate={}, miss_rate={}, eviction_count={}, size={}",
                    resourceStats.hitRate(), resourceStats.missRate(), 
                    resourceStats.evictionCount(), resourceCache.estimatedSize());
            
            logger.info("Search cache stats: hit_rate={}, miss_rate={}, eviction_count={}, size={}",
                    searchStats.hitRate(), searchStats.missRate(),
                    searchStats.evictionCount(), searchCache.estimatedSize());
            
            // Clean up old stats (keep last 24 hours = 288 entries at 5-minute intervals)
            cleanupOldStats(288);
        } catch (Exception e) {
            logger.error("Error collecting cache stats", e);
        }
    }
    
    private void cleanupOldStats(int maxEntries) {
        if (historicalStats.size() > maxEntries * 2) { // 2 entries per interval (resource and search)
            List<String> keys = new ArrayList<>(historicalStats.keySet());
            Collections.sort(keys);
            
            // Remove oldest entries
            int toRemove = keys.size() - (maxEntries * 2);
            for (int i = 0; i < toRemove; i++) {
                historicalStats.remove(keys.get(i));
            }
        }
    }
    
    /**
     * Get cache efficiency metrics for dashboard
     */
    public Map<String, Object> getDashboardMetrics() {
        Map<String, Object> metrics = new HashMap<>();
        
        // Current stats
        metrics.put("currentStats", metricsExporter.getCurrentCacheStats());
        
        // Historical hit rates
        Map<String, List<Double>> hitRates = new HashMap<>();
        List<Double> resourceHitRates = new ArrayList<>();
        List<Double> searchHitRates = new ArrayList<>();
        List<String> timestamps = new ArrayList<>();
        
        List<String> keys = new ArrayList<>(historicalStats.keySet());
        Collections.sort(keys);
        
        for (String key : keys) {
            if (key.startsWith("resource_")) {
                resourceHitRates.add(historicalStats.get(key).hitRate());
                timestamps.add(key.substring("resource_".length()));
            } else if (key.startsWith("search_")) {
                searchHitRates.add(historicalStats.get(key).hitRate());
            }
        }
        
        hitRates.put("resource", resourceHitRates);
        hitRates.put("search", searchHitRates);
        
        metrics.put("hitRates", hitRates);
        metrics.put("timestamps", timestamps);
        
        // Add additional metrics
        metrics.put("resourceCacheSize", resourceCache.estimatedSize());
        metrics.put("searchCacheSize", searchCache.estimatedSize());
        
        return metrics;
    }
    
    /**
     * Get recommendations to improve cache performance
     */
    public List<String> getCacheOptimizationRecommendations() {
        List<String> recommendations = new ArrayList<>();
        
        // Analyze resource cache
        CacheStats resourceStats = resourceCache.stats();
        if (resourceStats.hitRate() < 0.5) {
            recommendations.add("Resource cache hit rate is below 50%. Consider reviewing cache size or TTL settings.");
        }
        
        if (resourceStats.loadCount() > 0 && resourceStats.averageLoadPenalty() > 100_000_000) { // 100ms in nanoseconds
            recommendations.add("Resource loading time is high. Consider optimizing server requests or adding prefetching.");
        }
        
        if (resourceStats.evictionCount() > 1000) {
            recommendations.add("High number of resource cache evictions. Consider increasing cache size.");
        }
        
        // Analyze search cache
        CacheStats searchStats = searchCache.stats();
        if (searchStats.hitRate() < 0.3) {
            recommendations.add("Search cache hit rate is below 30%. Consider reviewing cache invalidation strategy.");
        }
        
        if (searchStats.evictionCount() > 500) {
            recommendations.add("High number of search cache evictions. Consider increasing cache size or reducing TTL.");
        }
        
        return recommendations;
    }
}
```

#### 3. REST Controller cho Cache Dashboard

```java
@RestController
@RequestMapping("/api/cache/dashboard")
public class CacheDashboardController {

    private final CacheDashboardService dashboardService;
    private final CacheWarmingService warmingService;
    
    public CacheDashboardController(CacheDashboardService dashboardService, 
                                   CacheWarmingService warmingService) {
        this.dashboardService = dashboardService;
        this.warmingService = warmingService;
    }
    
    @GetMapping("/metrics")
    public ResponseEntity<Map<String, Object>> getDashboardMetrics() {
        return ResponseEntity.ok(dashboardService.getDashboardMetrics());
    }
    
    @GetMapping("/recommendations")
    public ResponseEntity<List<String>> getRecommendations() {
        return ResponseEntity.ok(dashboardService.getCacheOptimizationRecommendations());
    }
    
    @PostMapping("/warm")
    public ResponseEntity<Map<String, Integer>> warmCaches() {
        Map<String, Integer> results = warmingService.warmCachesManually();
        return ResponseEntity.ok(results);
    }
    
    @DeleteMapping
    public ResponseEntity<Void> clearCaches() {
        // This should call a service that clears all caches
        // For simplicity, we're not implementing the full logic here
        return ResponseEntity.noContent().build();
    }
}
```

### Tối ưu hóa thêm với Caffeine

#### 1. Cấu hình Cache với các tùy chọn nâng cao

```java
@Configuration
public class AdvancedCaffeineCacheConfig {

    @Bean
    public Cache<String, IBaseResource> advancedResourceCache() {
        Ticker ticker = Ticker.systemTicker();
        
        return Caffeine.newBuilder()
                .initialCapacity(500)
                .maximumSize(5000)
                // Soft references allow entries to be collected by GC when memory is tight
                .softValues()
                // Expire after write
                .expireAfterWrite(30, TimeUnit.MINUTES)
                // But also expire after access
                .expireAfterAccess(20, TimeUnit.MINUTES)
                // Refresh asynchronously after 15 minutes
                .refreshAfterWrite(15, TimeUnit.MINUTES)
                // Custom ticker for testing
                .ticker(ticker)
                // Add executor for async operations
                .executor(Executors.newFixedThreadPool(2))
                // Custom weigher to account for resource size
                .weigher((key, resource) -> estimateResourceSize(resource))
                // Maximum weight instead of count
                .maximumWeight(100_000_000) // 100MB 
                // Add loader for async loading
                .buildAsync(this::loadResourceAsync);
    }
    
    /**
     * Estimate size of a FHIR resource in bytes 
     */
    private int estimateResourceSize(IBaseResource resource) {
        try {
            // Serialize to JSON and get byte count as estimation
            FhirContext ctx = FhirContext.forR5();
            String json = ctx.newJsonParser().encodeResourceToString(resource);
            return json.getBytes(StandardCharsets.UTF_8).length;
        } catch (Exception e) {
            // Default size estimation if serialization fails
            return 10000; // Assume 10KB
        }
    }
    
    /**
     * Async loader for resources
     */
    private CompletableFuture<IBaseResource> loadResourceAsync(String key) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                FhirContext ctx = FhirContext.forR5();
                IGenericClient client = ctx.newRestfulGenericClient("http://hapi.fhir.org/baseR5");
                
                // Parse key to extract resource type and ID
                String[] parts = key.split("/");
                if (parts.length != 2) {
                    throw new IllegalArgumentException("Invalid resource key: " + key);
                }
                
                String resourceType = parts[0];
                String id = parts[1];
                
                // Load the resource
                return client.read()
                        .resource(resourceType)
                        .withId(id)
                        .execute();
            } catch (Exception e) {
                throw new CompletionException("Failed to load resource: " + key, e);
            }
        });
    }
    
    @Bean
    public Scheduler refreshScheduler() {
        return Scheduler.forScheduledExecutorService(
                Executors.newScheduledThreadPool(1));
    }
}
```

#### 2. Kết hợp với Spring Cache

```java
@Configuration
@EnableCaching
public class HybridCacheConfig extends CachingConfigurerSupport {

    @Bean
    @Override
    public CacheManager cacheManager() {
        // Create a customized CaffeineCacheManager
        CaffeineCacheManager manager = new CaffeineCacheManager();
        
        // Set default Caffeine configuration
        manager.setCaffeine(defaultCacheBuilder());
        
        // Register specific cache configurations
        manager.setCacheSpecification("patientCache", 
                "initialCapacity=100,maximumSize=1000,expireAfterWrite=30m,recordStats");
        manager.setCacheSpecification("observationCache", 
                "initialCapacity=200,maximumSize=2000,expireAfterWrite=10m,recordStats");
        manager.setCacheSpecification("encounterCache", 
                "initialCapacity=50,maximumSize=500,expireAfterWrite=15m,recordStats");
        
        return manager;
    }
    
    Caffeine<Object, Object> defaultCacheBuilder() {
        return Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(500)
                .expireAfterWrite(15, TimeUnit.MINUTES)
                .recordStats();
    }
    
    @Bean
    @Override
    public KeyGenerator keyGenerator() {
        return new FhirResourceKeyGenerator();
    }
    
    /**
     * Custom key generator for FHIR resources
     */
    static class FhirResourceKeyGenerator implements KeyGenerator {
        @Override
        public Object generate(Object target, Method method, Object... params) {
            StringBuilder sb = new StringBuilder();
            sb.append(target.getClass().getSimpleName()).append(":");
            sb.append(method.getName());
            
            for (Object param : params) {
                if (param instanceof IBaseResource) {
                    IBaseResource resource = (IBaseResource) param;
                    // Use resource type and ID or hash code
                    if (resource.getIdElement() != null && resource.getIdElement().hasIdPart()) {
                        sb.append(":").append(resource.getClass().getSimpleName())
                          .append("/").append(resource.getIdElement().getIdPart());
                    } else {
                        sb.append(":").append(resource.getClass().getSimpleName())
                          .append("#").append(System.identityHashCode(resource));
                    }
                } else {
                    sb.append(":").append(param != null ? param.toString() : "null");
                }
            }
            
            return sb.toString();
        }
    }
    
    @Bean
    @Override
    public CacheErrorHandler errorHandler() {
        return new FhirCacheErrorHandler();
    }
    
    /**
     * Custom error handler for cache operations
     */
    static class FhirCacheErrorHandler implements CacheErrorHandler {
        
        private static final Logger logger = LoggerFactory.getLogger(FhirCacheErrorHandler.class);
        
        @Override
        public void handleCacheGetError(RuntimeException exception, Cache cache, Object key) {
            logger.error("Error getting from cache '{}' with key '{}': {}", 
                    cache.getName(), key, exception.getMessage());
            // Continue execution without failing
        }
        
        @Override
        public void handleCachePutError(RuntimeException exception, Cache cache, Object key, Object value) {
            logger.error("Error putting to cache '{}' with key '{}': {}", 
                    cache.getName(), key, exception.getMessage());
            // Continue execution without failing
        }
        
        @Override
        public void handleCacheEvictError(RuntimeException exception, Cache cache, Object key) {
            logger.error("Error evicting from cache '{}' with key '{}': {}", 
                    cache.getName(), key, exception.getMessage());
            // Continue execution without failing
        }
        
        @Override
        public void handleCacheClearError(RuntimeException exception, Cache cache) {
            logger.error("Error clearing cache '{}': {}", 
                    cache.getName(), exception.getMessage());
            // Continue execution without failing
        }
    }
}
```

### Kết luận

Kết hợp HAPI FHIR với Caffeine Cache cung cấp một giải pháp mạnh mẽ để tối ưu hóa hiệu suất ứng dụng y tế. Caffeine cung cấp các tính năng caching hiện đại và hiệu quả, giúp giảm tải cho FHIR server và cải thiện thời gian phản hồi.

Một số lợi ích chính khi sử dụng Caffeine Cache với HAPI FHIR:

1. **Hiệu suất cao**: Caffeine được tối ưu hóa về hiệu suất, sử dụng thuật toán W-TinyLFU cho tỷ lệ hit cao hơn.
2. **Linh hoạt**: Hỗ trợ nhiều cách xóa dữ liệu cache (time-based, size-based), cũng như cập nhật bất đồng bộ.
3. **Tích hợp dễ dàng**: Tích hợp liền mạch với Spring Cache và Spring Boot.
4. **Khả năng mở rộng**: Caffeine dễ dàng mở rộng theo nhu cầu của ứng dụng, từ caching đơn giản đến các tính năng nâng cao.
5. **Giám sát tốt**: Các tính năng statistics và metrics tích hợp giúp dễ dàng theo dõi hiệu suất cache.

Các kỹ thuật caching được trình bày trong bài viết này có thể giúp cải thiện hiệu suất ứng dụng FHIR của bạn, đặc biệt trong các tình huống sau:

* Xử lý lượng lớn dữ liệu FHIR
* Nhiều request đồng thời đến FHIR server
* Kết nối với FHIR server từ xa có độ trễ cao
* Xử lý các truy vấn tìm kiếm phức tạp
* Sử dụng lại dữ liệu tham khảo như terminologies và value sets

Khi triển khai caching cho HAPI FHIR, hãy theo dõi các metrics và điều chỉnh cấu hình cache để đạt được hiệu suất tối ưu cho ứng dụng cụ thể của bạn. Việc tìm ra sự cân bằng giữa kích thước cache, thời gian sống, và chiến lược làm mới là quan trọng để tối ưu hóa cả về hiệu suất lẫn sử dụng bộ nhớ.

### Tài nguyên bổ sung

* [Caffeine GitHub Repository](https://github.com/ben-manes/caffeine)
* [Caffeine Documentation](https://github.com/ben-manes/caffeine/wiki)
* [HAPI FHIR Documentation](https://hapifhir.io/hapi-fhir/docs/)
* [Spring Cache Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#cache)
