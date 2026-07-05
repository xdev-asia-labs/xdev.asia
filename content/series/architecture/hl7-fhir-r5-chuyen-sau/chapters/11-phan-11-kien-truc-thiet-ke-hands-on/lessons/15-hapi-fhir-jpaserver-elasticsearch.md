---
id: f1cdf4b6-359e-42fd-ba6b-8d0cdb875a39
title: 'hapi-fhir-jpaserver-elasticsearch'
slug: hapi-fhir-jpaserver-elasticsearch
description: 'hapifhirjpaserverelasticsearch là một module mở rộng quan trọng trong hệ sinh thái HAPI FHIR, kết hợp sức mạnh của cơ sở dữ liệu quan hệ (qua JPA) với khả năng tìm kiếm mạnh mẽ của Elasticsearch. Module này giải quyết…'
duration_minutes: 25
is_free: true
video_url: null
sort_order: 15
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
`hapi-fhir-jpaserver-elasticsearch` là một module mở rộng quan trọng trong hệ sinh thái HAPI FHIR, kết hợp sức mạnh của cơ sở dữ liệu quan hệ (qua JPA) với khả năng tìm kiếm mạnh mẽ của Elasticsearch. Module này giải quyết một trong những thách thức lớn nhất trong các hệ thống FHIR - việc tìm kiếm hiệu quả trên khối lượng lớn dữ liệu y tế có cấu trúc phức tạp.

Trong khi `hapi-fhir-jpaserver-base` cung cấp khả năng lưu trữ và truy vấn cơ bản thông qua JPA, thì việc tìm kiếm full-text, tìm kiếm địa lý (geo-spatial), và các truy vấn phức tạp trên dữ liệu lớn có thể gặp hạn chế về hiệu suất. `hapi-fhir-jpaserver-elasticsearch` khắc phục những hạn chế này bằng cách đánh chỉ mục (indexing) FHIR resources vào Elasticsearch, cho phép các truy vấn phức tạp, full-text search, và khả năng mở rộng tốt hơn.

### Kiến trúc và Tích hợp

#### 1. Mô hình Tích hợp

`hapi-fhir-jpaserver-elasticsearch` triển khai một mô hình "write-through" trong đó:

* Dữ liệu FHIR được lưu trữ chính thức trong cơ sở dữ liệu quan hệ thông qua JPA
* Dữ liệu được tự động đánh chỉ mục (indexed) vào Elasticsearch
* Các tìm kiếm phức tạp được chuyển hướng đến Elasticsearch
* Các tìm kiếm đơn giản vẫn có thể sử dụng JPA

#### 2. Thành phần chính

Module bao gồm các thành phần chính sau:

* **ElasticsearchSvcImpl**: Dịch vụ chính quản lý kết nối và tương tác với Elasticsearch
* **ElasticsearchIndexer**: Chịu trách nhiệm chuyển đổi FHIR resources thành tài liệu Elasticsearch
* **ElasticsearchSearchBuilder**: Chuyển đổi FHIR search parameters thành Elasticsearch queries
* **ElasticsearchHibernatePropertiesBuilder**: Cấu hình Hibernate Search để làm việc với Elasticsearch
* **ElasticsearchPointcut**: Định nghĩa các hook points trong quá trình indexing và searching

```java
// ElasticsearchSvcImpl triển khai tương tác với Elasticsearch
@Service
public class ElasticsearchSvcImpl implements IElasticsearchSvc {
    
    private final RestHighLevelClient myClient;
    private final ElasticsearchIndexer myIndexer;
    
    @Override
    public void index(ResourceTable theResourceTable, IBaseResource theResource) {
        // Chuyển đổi FHIR resource thành JSON document
        Map<String, Object> document = myIndexer.createIndexDocumentForResource(theResourceTable, theResource);
        
        // Đánh chỉ mục document vào Elasticsearch
        IndexRequest request = new IndexRequest(getIndexName())
            .id(theResourceTable.getIdDt().getValue())
            .source(document);
        
        try {
            myClient.index(request, RequestOptions.DEFAULT);
        } catch (IOException e) {
            throw new InternalErrorException("Failed to index resource: " + e.getMessage());
        }
    }
    
    @Override
    public List<Long> search(SearchParameterMap theParams) {
        // Chuyển đổi search parameters thành Elasticsearch query
        SearchRequest searchRequest = createSearchRequest(theParams);
        
        // Thực hiện tìm kiếm
        try {
            SearchResponse response = myClient.search(searchRequest, RequestOptions.DEFAULT);
            
            // Xử lý kết quả
            return extractResourceIds(response);
        } catch (IOException e) {
            throw new InternalErrorException("Failed to execute search: " + e.getMessage());
        }
    }
}
```

### Tính năng chính

#### 1. Full-Text Search

Khả năng tìm kiếm toàn văn mạnh mẽ vượt xa các tính năng tìm kiếm của cơ sở dữ liệu quan hệ:

* **Analysis và Tokenization**: Phân tích text thông minh với stemming, stopwords, synonyms
* **Fuzzy Matching**: Tìm kiếm khớp mờ cho phép sai lỗi chính tả
* **Phrase Matching**: Tìm kiếm chính xác cụm từ
* **Relevance Scoring**: Xếp hạng kết quả theo độ phù hợp

```java
// Ví dụ truy vấn full-text tìm bệnh nhân theo tên
BoolQueryBuilder query = QueryBuilders.boolQuery()
    .should(QueryBuilders.matchPhraseQuery("name.family", "Nguyen").boost(2.0f))
    .should(QueryBuilders.fuzzyQuery("name.given", "Minh").fuzziness(Fuzziness.AUTO));

SearchSourceBuilder sourceBuilder = new SearchSourceBuilder()
    .query(query)
    .from(0)
    .size(20)
    .sort("_score", SortOrder.DESC);
```

#### 2. Geo-Spatial Search

Tìm kiếm dựa trên vị trí địa lý, đặc biệt hữu ích cho các ứng dụng y tế dựa trên vị trí:

* **Distance Queries**: Tìm kiếm trong phạm vi khoảng cách
* **Bounding Box**: Tìm kiếm trong một vùng địa lý
* **Geo-Shape Queries**: Tìm kiếm dựa trên hình dạng địa lý phức tạp

```java
// Tìm các cơ sở y tế trong bán kính 10km từ một điểm
GeoDistanceQueryBuilder geoQuery = QueryBuilders.geoDistanceQuery("position")
    .point(21.0278, 105.8342)  // Tọa độ Hà Nội
    .distance("10km");

SearchSourceBuilder sourceBuilder = new SearchSourceBuilder()
    .query(geoQuery)
    .sort(new GeoDistanceSortBuilder("position", 21.0278, 105.8342)
        .order(SortOrder.ASC));
```

#### 3. Advanced Query Capabilities

Elasticsearch cung cấp các khả năng truy vấn nâng cao:

* **Aggregations**: Phân tích và nhóm dữ liệu
* **Nested Queries**: Tìm kiếm trong cấu trúc dữ liệu lồng nhau
* **Multi-field Search**: Tìm kiếm trên nhiều trường cùng lúc
* **Range Queries**: Tìm kiếm trong phạm vi giá trị

```java
// Tìm kiếm observations trong một khoảng giá trị và nhóm theo loại
BoolQueryBuilder query = QueryBuilders.boolQuery()
    .must(QueryBuilders.rangeQuery("valueQuantity.value").gte(100).lte(180))
    .must(QueryBuilders.matchQuery("code.coding.system", "http://loinc.org"));

AggregationBuilder aggregation = AggregationBuilders.terms("by_code")
    .field("code.coding.code.keyword")
    .size(10);

SearchSourceBuilder sourceBuilder = new SearchSourceBuilder()
    .query(query)
    .aggregation(aggregation);
```

#### 4. Performance và Scalability

Elasticsearch được thiết kế cho hiệu suất cao và khả năng mở rộng:

* **Distributed Architecture**: Kiến trúc phân tán cho phép mở rộng ngang
* **Sharding**: Phân chia dữ liệu thành các shards để phân phối tải
* **Replication**: Nhân bản dữ liệu để tăng tính sẵn sàng và khả năng chịu lỗi
* **Caching**: Caching nhiều cấp độ để tối ưu hiệu suất

#### 5. Near Real-Time Indexing

Đánh chỉ mục gần thời gian thực giúp dữ liệu tìm kiếm luôn được cập nhật:

* **Bulk Indexing**: Indexing hàng loạt để tối ưu hiệu suất
* **Refresh Control**: Kiểm soát thời điểm dữ liệu mới có thể tìm kiếm được
* **Index Versioning**: Theo dõi phiên bản của tài liệu

### Cấu hình và Triển khai

#### 1. Cấu hình cơ bản với Spring Boot

```java
@Configuration
public class ElasticsearchConfig {
    
    @Value("${elasticsearch.host:localhost}")
    private String host;
    
    @Value("${elasticsearch.port:9200}")
    private int port;
    
    @Value("${elasticsearch.username:}")
    private String username;
    
    @Value("${elasticsearch.password:}")
    private String password;
    
    @Bean
    public RestHighLevelClient elasticsearchClient() {
        final CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
        if (StringUtils.isNotEmpty(username) && StringUtils.isNotEmpty(password)) {
            credentialsProvider.setCredentials(AuthScope.ANY,
                    new UsernamePasswordCredentials(username, password));
        }
        
        RestClientBuilder builder = RestClient.builder(
                new HttpHost(host, port))
                .setHttpClientConfigCallback(httpClientBuilder -> httpClientBuilder
                        .setDefaultCredentialsProvider(credentialsProvider));
        
        return new RestHighLevelClient(builder);
    }
    
    @Bean
    public ElasticsearchSvcImpl elasticsearchService(FhirContext fhirContext, DaoConfig daoConfig) {
        ElasticsearchSvcImpl service = new ElasticsearchSvcImpl();
        service.setClient(elasticsearchClient());
        service.setEnabled(true);
        service.setIndexNamePrefix("fhir_");
        service.setFhirContext(fhirContext);
        service.setDaoConfig(daoConfig);
        return service;
    }
    
    @Bean
    public ElasticsearchIndexer elasticsearchIndexer(FhirContext fhirContext) {
        ElasticsearchIndexer indexer = new ElasticsearchIndexer();
        indexer.setFhirContext(fhirContext);
        return indexer;
    }
}
```

#### 2. Cấu hình HAPI FHIR Server với Elasticsearch

```java
@Configuration
public class FhirServerConfig {
    
    @Autowired
    private ElasticsearchSvcImpl elasticsearchSvc;
    
    @Bean
    public DaoConfig daoConfig() {
        DaoConfig config = new DaoConfig();
        config.setAllowExternalReferences(true);
        
        // Kích hoạt Elasticsearch cho tìm kiếm nâng cao
        config.setAdvancedLuceneIndexing(true);
        
        // Cấu hình các search types sử dụng Elasticsearch
        EnumSet<SearchTypeEnum> elasticsearchEnabledTypes = EnumSet.of(
            SearchTypeEnum.STRING,
            SearchTypeEnum.TOKEN,
            SearchTypeEnum.REFERENCE,
            SearchTypeEnum.DATE,
            SearchTypeEnum.QUANTITY
        );
        config.setElasticsearchIndexingEnabled(elasticsearchEnabledTypes);
        
        return config;
    }
    
    @Bean
    public ISearchBuilder searchBuilder() {
        ElasticsearchHibernateSearchBuilder builder = new ElasticsearchHibernateSearchBuilder();
        builder.setElasticsearchSvc(elasticsearchSvc);
        builder.setDaoConfig(daoConfig());
        return builder;
    }
    
    @PostConstruct
    public void initializeElasticsearch() {
        // Đăng ký Elasticsearch interceptors
        InterceptorService interceptorService = appCtx.getBean(InterceptorService.class);
        interceptorService.registerInterceptor(new ElasticsearchIndexingInterceptor(elasticsearchSvc));
        
        // Khởi tạo index nếu cần
        elasticsearchSvc.createIndexesIfNeeded();
    }
}
```

#### 3. Tùy chỉnh Elasticsearch Mappings

```java
@Component
public class CustomElasticsearchMappingProvider {
    
    @Autowired
    private RestHighLevelClient client;
    
    @PostConstruct
    public void createCustomMappings() throws IOException {
        // Patient index mapping
        XContentBuilder patientMapping = XContentFactory.jsonBuilder()
            .startObject()
                .startObject("properties")
                    // Name fields with custom analyzers
                    .startObject("name")
                        .startObject("properties")
                            .startObject("family")
                                .field("type", "text")
                                .field("analyzer", "standard")
                                .startObject("fields")
                                    .startObject("keyword")
                                        .field("type", "keyword")
                                        .field("ignore_above", 256)
                                    .endObject()
                                .endObject()
                            .endObject()
                            .startObject("given")
                                .field("type", "text")
                                .field("analyzer", "standard")
                                .startObject("fields")
                                    .startObject("keyword")
                                        .field("type", "keyword")
                                        .field("ignore_above", 256)
                                    .endObject()
                                .endObject()
                            .endObject()
                        .endObject()
                    .endObject()
                    
                    // Identifier fields
                    .startObject("identifier")
                        .startObject("properties")
                            .startObject("value")
                                .field("type", "keyword")
                            .endObject()
                            .startObject("system")
                                .field("type", "keyword")
                            .endObject()
                        .endObject()
                    .endObject()
                    
                    // Address with geo-point for location search
                    .startObject("address")
                        .startObject("properties")
                            .startObject("position")
                                .field("type", "geo_point")
                            .endObject()
                            .startObject("city")
                                .field("type", "text")
                                .field("analyzer", "standard")
                                .startObject("fields")
                                    .startObject("keyword")
                                        .field("type", "keyword")
                                    .endObject()
                                .endObject()
                            .endObject()
                        .endObject()
                    .endObject()
                .endObject()
            .endObject();
        
        // Create or update mapping
        PutMappingRequest request = new PutMappingRequest("fhir_patient")
            .source(patientMapping);
        
        client.indices().putMapping(request, RequestOptions.DEFAULT);
    }
}
```

#### 4. Docker Compose cho triển khai

```yaml
# docker-compose.yml
version: '3.8'
services:
  fhir-server:
    image: hapiproject/hapi:latest
    ports:
      - "8080:8080"
    environment:
      - spring.datasource.url=jdbc:postgresql://db:5432/hapi
      - spring.datasource.username=postgres
      - spring.datasource.password=postgres
      - hapi.fhir.elasticsearch.enabled=true
      - hapi.fhir.elasticsearch.host=elasticsearch
      - hapi.fhir.elasticsearch.port=9200
      - hapi.fhir.elasticsearch.protocol=http
      - hapi.fhir.elasticsearch.username=elastic
      - hapi.fhir.elasticsearch.password=changeme
      - hapi.fhir.elasticsearch.index_prefix=fhir_
    depends_on:
      - db
      - elasticsearch
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=hapi
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data
  
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.0
    environment:
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      - xpack.security.enabled=true
      - ELASTIC_PASSWORD=changeme
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch-data:/usr/share/elasticsearch/data
    ulimits:
      memlock:
        soft: -1
        hard: -1
  
  kibana:
    image: docker.elastic.co/kibana/kibana:7.17.0
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
      - ELASTICSEARCH_USERNAME=elastic
      - ELASTICSEARCH_PASSWORD=changeme
    depends_on:
      - elasticsearch

volumes:
  postgres-data:
  elasticsearch-data:
```

### Tùy chỉnh Search và Indexing

#### 1. Custom Search Builder

```java
@Component
public class CustomElasticsearchSearchBuilder extends ElasticsearchHibernateSearchBuilder {
    
    @Override
    public IBundleProvider search(SearchParameterMap theParams) {
        // Kiểm tra xem có nên sử dụng Elasticsearch hay không
        if (shouldUseElasticsearch(theParams)) {
            // Thực hiện tìm kiếm với Elasticsearch
            return doElasticsearchSearch(theParams);
        } else {
            // Fallback về tìm kiếm JPA tiêu chuẩn
            return super.search(theParams);
        }
    }
    
    private boolean shouldUseElasticsearch(SearchParameterMap theParams) {
        // Đánh giá search parameters - sử dụng Elasticsearch cho:
        // - Full-text search
        // - Geo-spatial search
        // - Các truy vấn phức tạp khác
        
        for (Map.Entry<String, List<List<IQueryParameterType>>> entry : theParams.entrySet()) {
            String paramName = entry.getKey();
            
            // Full-text search params
            if (paramName.endsWith(":contains") || paramName.endsWith(":exact")) {
                return true;
            }
            
            // Geo-spatial search
            if (paramName.equals("near") || paramName.contains("location")) {
                return true;
            }
            
            // Complex params
            if (theParams.getLastUpdated() != null || theParams.containsKey("_content")) {
                return true;
            }
        }
        
        return false;
    }
    
    private IBundleProvider doElasticsearchSearch(SearchParameterMap theParams) {
        // Implement Elasticsearch search logic
        // ...
        
        // Return bundle provider with results
        return new SimpleBundleProvider(results);
    }
}
```

#### 2. Custom Indexer

```java
@Component
public class EnhancedElasticsearchIndexer extends ElasticsearchIndexer {
    
    @Override
    public Map<String, Object> createIndexDocumentForResource(ResourceTable theResourceTable, IBaseResource theResource) {
        Map<String, Object> document = super.createIndexDocumentForResource(theResourceTable, theResource);
        
        // Thêm các trường tùy chỉnh hoặc biến đổi dữ liệu
        if (theResource instanceof Patient) {
            Patient patient = (Patient) theResource;
            
            // Thêm trường tìm kiếm tùy chỉnh - tên đầy đủ
            if (patient.hasName()) {
                HumanName name = patient.getNameFirstRep();
                String fullName = name.getGivenAsSingleString() + " " + name.getFamily();
                document.put("fullName", fullName);
            }
            
            // Thêm geo-point cho địa chỉ
            if (patient.hasAddress()) {
                Address address = patient.getAddressFirstRep();
                if (address.hasExtension("http://hl7.org/fhir/StructureDefinition/geolocation")) {
                    // Extract lat/long từ extension
                    Extension ext = address.getExtensionByUrl("http://hl7.org/fhir/StructureDefinition/geolocation");
                    Map<String, Double> position = extractGeoPosition(ext);
                    
                    if (position != null) {
                        document.put("position", position);
                    }
                }
            }
        }
        
        return document;
    }
    
    private Map<String, Double> extractGeoPosition(Extension extension) {
        try {
            Extension latExt = extension.getExtensionByUrl("latitude");
            Extension lonExt = extension.getExtensionByUrl("longitude");
            
            if (latExt != null && lonExt != null) {
                Double lat = ((DecimalType) latExt.getValue()).getValueAsNumber().doubleValue();
                Double lon = ((DecimalType) lonExt.getValue()).getValueAsNumber().doubleValue();
                
                Map<String, Double> position = new HashMap<>();
                position.put("lat", lat);
                position.put("lon", lon);
                return position;
            }
        } catch (Exception e) {
            // Handle parsing errors
        }
        
        return null;
    }
}
```

### Ví dụ Thực tế

#### 1. Full-Text Search cho Hồ sơ Bệnh nhân

```java
@RestController
@RequestMapping("/api/patient-search")
public class PatientSearchController {
    
    @Autowired
    private ElasticsearchSvcImpl elasticsearchSvc;
    
    @Autowired
    private IFhirResourceDao<Patient> patientDao;
    
    @Autowired
    private FhirContext fhirContext;
    
    @GetMapping("/fulltext")
    public List<PatientDTO> searchPatientsByFullText(
            @RequestParam String query,
            @RequestParam(required = false, defaultValue = "0") int from,
            @RequestParam(required = false, defaultValue = "10") int size) {
        
        try {
            // Tạo Elasticsearch query
            BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
            
            // Tìm kiếm trong nhiều trường
            boolQuery.should(QueryBuilders.matchQuery("name.family", query).boost(2.0f));
            boolQuery.should(QueryBuilders.matchQuery("name.given", query).boost(2.0f));
            boolQuery.should(QueryBuilders.matchQuery("fullName", query).boost(3.0f));
            boolQuery.should(QueryBuilders.matchQuery("identifier.value", query).boost(4.0f));
            boolQuery.should(QueryBuilders.matchQuery("address.city", query));
            boolQuery.should(QueryBuilders.matchQuery("telecom.value", query));
            
            // Fuzzy matching cho phép sai lỗi chính tả
            boolQuery.should(QueryBuilders.fuzzyQuery("name.family", query)
                .fuzziness(Fuzziness.AUTO));
            
            SearchSourceBuilder sourceBuilder = new SearchSourceBuilder()
                .query(boolQuery)
                .from(from)
                .size(size)
                .sort("_score", SortOrder.DESC);
            
            // Thực hiện tìm kiếm
            List<Long> resourceIds = elasticsearchSvc.searchForIds("fhir_patient", sourceBuilder);
            
            // Lấy patient resources từ database
            List<PatientDTO> results = new ArrayList<>();
            for (Long id : resourceIds) {
                Patient patient = patientDao.read(new IdType("Patient", id));
                results.add(convertToDTO(patient));
            }
            
            return results;
            
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, 
                    "Error performing search: " + e.getMessage());
        }
    }
    
    private PatientDTO convertToDTO(Patient patient) {
        PatientDTO dto = new PatientDTO();
        
        // Set ID
        dto.setId(patient.getIdElement().getIdPart());
        
        // Set name
        if (patient.hasName()) {
            HumanName name = patient.getNameFirstRep();
            dto.setFamilyName(name.getFamily());
            dto.setGivenName(name.getGivenAsSingleString());
        }
        
        // Set identifier
        if (patient.hasIdentifier()) {
            Identifier identifier = patient.getIdentifierFirstRep();
            dto.setIdentifierSystem(identifier.getSystem());
            dto.setIdentifierValue(identifier.getValue());
        }
        
        // Set other fields
        dto.setBirthDate(patient.hasBirthDate() ? patient.getBirthDate() : null);
        dto.setGender(patient.hasGender() ? patient.getGender().getDisplay() : null);
        
        return dto;
    }
}
```

#### 2. Geo-Spatial Search cho Cơ sở Y tế

```java
@RestController
@RequestMapping("/api/location-search")
public class LocationSearchController {
    
    @Autowired
    private ElasticsearchSvcImpl elasticsearchSvc;
    
    @Autowired
    private IFhirResourceDao<Location> locationDao;
    
    @GetMapping("/nearby")
    public List<LocationDTO> findNearbyLocations(
            @RequestParam Double lat,
            @RequestParam Double lon,
            @RequestParam(required = false, defaultValue = "10") Double distanceKm,
            @RequestParam(required = false) String type) {
        
        try {
            // Tạo geo query
            BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
            
            // Add geo distance filter
            boolQuery.must(QueryBuilders.geoDistanceQuery("position")
                .point(lat, lon)
                .distance(distanceKm, DistanceUnit.KILOMETERS));
            
            // Add type filter if specified
            if (StringUtils.isNotEmpty(type)) {
                boolQuery.must(QueryBuilders.termQuery("type.coding.code.keyword", type));
            }
            
            // Add sort by distance
            GeoDistanceSortBuilder sortBuilder = new GeoDistanceSortBuilder("position", lat, lon)
                .order(SortOrder.ASC)
                .unit(DistanceUnit.KILOMETERS);
            
            SearchSourceBuilder sourceBuilder = new SearchSourceBuilder()
                .query(boolQuery)
                .sort(sortBuilder)
                .size(50);
            
            // Thực hiện tìm kiếm
            List<Long> resourceIds = elasticsearchSvc.searchForIds("fhir_location", sourceBuilder);
            
            // Lấy location resources từ database
            List<LocationDTO> results = new ArrayList<>();
            for (Long id : resourceIds) {
                Location location = locationDao.read(new IdType("Location", id));
                LocationDTO dto = convertToDTO(location);
                
                // Tính toán khoảng cách từ Elasticsearch response
                // ...
                
                results.add(dto);
            }
            
            return results;
            
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, 
                    "Error performing geo search: " + e.getMessage());
        }
    }
    
    private LocationDTO convertToDTO(Location location) {
        LocationDTO dto = new LocationDTO();
        
        // Map fields from Location to DTO
        dto.setId(location.getIdElement().getIdPart());
        dto.setName(location.getName());
        
        if (location.hasType() && location.getTypeFirstRep().hasCoding()) {
            Coding typeCoding = location.getTypeFirstRep().getCodingFirstRep();
            dto.setTypeCode(typeCoding.getCode());
            dto.setTypeDisplay(typeCoding.getDisplay());
        }
        
        if (location.hasAddress()) {
            Address address = location.getAddress();
            dto.setCity(address.getCity());
            dto.setStreet(address.getLine().isEmpty() ? null : address.getLineFirstRep().getValue());
            dto.setPostalCode(address.getPostalCode());
            dto.setCountry(address.getCountry());
        }
        
        if (location.hasPosition()) {
            dto.setLatitude(location.getPosition().getLatitude().doubleValue());
            dto.setLongitude(location.getPosition().getLongitude().doubleValue());
        }
        
        return dto;
    }
}
```

#### 3. Tìm kiếm Clinical Data với Aggregations

```java
@RestController
@RequestMapping("/api/clinical-search")
public class ClinicalSearchController {
    
    @Autowired
    private RestHighLevelClient elasticsearchClient;
    
    @Autowired
    private IFhirResourceDao<Observation> observationDao;
    
    @GetMapping("/stats")
    public Map<String, Object> getObservationStatistics(
            @RequestParam String patientId,
            @RequestParam(required = false) String code,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate) throws IOException {
        
        BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
        
        // Filter by patient
        boolQuery.must(QueryBuilders.termQuery("subject.reference.keyword", "Patient/" + patientId));
        
        // Filter by code if specified
        if (StringUtils.isNotEmpty(code)) {
            boolQuery.must(QueryBuilders.termQuery("code.coding.code.keyword", code));
        }
        
        // Filter by date range if specified
        if (StringUtils.isNotEmpty(fromDate) || StringUtils.isNotEmpty(toDate)) {
            RangeQueryBuilder dateQuery = QueryBuilders.rangeQuery("effectiveDateTime");
            
            if (StringUtils.isNotEmpty(fromDate)) {
                dateQuery.gte(fromDate);
            }
            
            if (StringUtils.isNotEmpty(toDate)) {
               dateQuery.lte(toDate);
           }
           
           boolQuery.must(dateQuery);
       }
       
       // Add aggregations
       AggregationBuilder statsAgg = AggregationBuilders.stats("value_stats")
           .field("valueQuantity.value");
           
       AggregationBuilder dateHistogram = AggregationBuilders.dateHistogram("by_date")
           .field("effectiveDateTime")
           .calendarInterval(DateHistogramInterval.DAY)
           .format("yyyy-MM-dd");
           
       AggregationBuilder codeAgg = AggregationBuilders.terms("by_code")
           .field("code.coding.code.keyword")
           .size(10);
           
       // Build search request
       SearchRequest searchRequest = new SearchRequest("fhir_observation");
       SearchSourceBuilder sourceBuilder = new SearchSourceBuilder()
           .query(boolQuery)
           .aggregation(statsAgg)
           .aggregation(dateHistogram)
           .aggregation(codeAgg)
           .size(0); // We only want aggregations, not actual documents
           
       searchRequest.source(sourceBuilder);
       
       // Execute search
       SearchResponse response = elasticsearchClient.search(searchRequest, RequestOptions.DEFAULT);
       
       // Process results
       Map<String, Object> result = new HashMap<>();
       
       // Extract stats
       Stats valueStats = response.getAggregations().get("value_stats");
       Map<String, Object> stats = new HashMap<>();
       stats.put("min", valueStats.getMin());
       stats.put("max", valueStats.getMax());
       stats.put("avg", valueStats.getAvg());
       stats.put("sum", valueStats.getSum());
       stats.put("count", valueStats.getCount());
       result.put("statistics", stats);
       
       // Extract date histogram
       Histogram dateHist = response.getAggregations().get("by_date");
       List<Map<String, Object>> dateData = new ArrayList<>();
       for (Histogram.Bucket bucket : dateHist.getBuckets()) {
           Map<String, Object> entry = new HashMap<>();
           entry.put("date", bucket.getKeyAsString());
           entry.put("count", bucket.getDocCount());
           dateData.add(entry);
       }
       result.put("dateHistogram", dateData);
       
       // Extract code distribution
       Terms codeTerms = response.getAggregations().get("by_code");
       List<Map<String, Object>> codeData = new ArrayList<>();
       for (Terms.Bucket bucket : codeTerms.getBuckets()) {
           Map<String, Object> entry = new HashMap<>();
           entry.put("code", bucket.getKeyAsString());
           entry.put("count", bucket.getDocCount());
           codeData.add(entry);
       }
       result.put("codeDistribution", codeData);
       
       return result;
   }
}
```

### Hiệu năng và Tối ưu hóa

#### 1. Cấu hình Indexing

```java
@Configuration
public class ElasticsearchIndexingConfig {
    
    @Autowired
    private RestHighLevelClient client;
    
    @Bean
    public ElasticsearchIndexingService indexingService() {
        ElasticsearchIndexingService service = new ElasticsearchIndexingService();
        service.setClient(client);
        service.setBulkSize(1000); // Số lượng documents trong mỗi bulk request
        service.setRefreshPolicy(WriteRequest.RefreshPolicy.WAIT_UNTIL);
        service.setConcurrentWorkers(4); // Số lượng worker threads
        service.setBackoffStrategy(new ExponentialBackoff(1000, 3)); // Retry strategy
        return service;
    }
    
    @PostConstruct
    public void configureIndexSettings() throws IOException {
        // Cấu hình index settings
        Map<String, Object> settings = new HashMap<>();
        
        // Cấu hình shards và replicas
        Map<String, Object> indexSettings = new HashMap<>();
        indexSettings.put("number_of_shards", 5);
        indexSettings.put("number_of_replicas", 1);
        
        // Cấu hình analyzers
        Map<String, Object> analysis = new HashMap<>();
        
        // Custom analyzer cho tiếng Việt
        Map<String, Object> analyzers = new HashMap<>();
        Map<String, Object> vietnameseAnalyzer = new HashMap<>();
        vietnameseAnalyzer.put("type", "custom");
        vietnameseAnalyzer.put("tokenizer", "standard");
        vietnameseAnalyzer.put("filter", new String[]{"lowercase", "asciifolding", "vietnamese_stop"});
        analyzers.put("vietnamese", vietnameseAnalyzer);
        
        // Custom filters
        Map<String, Object> filters = new HashMap<>();
        Map<String, Object> vietnameseStop = new HashMap<>();
        vietnameseStop.put("type", "stop");
        vietnameseStop.put("stopwords", new String[]{"và", "hoặc", "trong", "ngoài", "là"});
        filters.put("vietnamese_stop", vietnameseStop);
        
        analysis.put("analyzer", analyzers);
        analysis.put("filter", filters);
        
        indexSettings.put("analysis", analysis);
        settings.put("settings", indexSettings);
        
        // Áp dụng settings cho indexes
        String[] indices = {"fhir_patient", "fhir_observation", "fhir_location"};
        for (String index : indices) {
            // Kiểm tra xem index đã tồn tại chưa
            boolean exists = client.indices().exists(
                    new GetIndexRequest(index), RequestOptions.DEFAULT);
            
            if (!exists) {
                // Tạo index với settings
                CreateIndexRequest createRequest = new CreateIndexRequest(index)
                        .settings(settings);
                client.indices().create(createRequest, RequestOptions.DEFAULT);
            } else {
                // Cập nhật settings cho index đã tồn tại
                UpdateSettingsRequest updateRequest = new UpdateSettingsRequest(index)
                        .settings(settings);
                client.indices().putSettings(updateRequest, RequestOptions.DEFAULT);
            }
        }
    }
}
```

#### 2. Reindexing và Migration

```java
@Component
public class ElasticsearchReindexingService {
    
    private static final Logger logger = LoggerFactory.getLogger(ElasticsearchReindexingService.class);
    
    @Autowired
    private RestHighLevelClient client;
    
    @Autowired
    private DaoRegistry daoRegistry;
    
    @Autowired
    private ElasticsearchSvcImpl elasticsearchSvc;
    
    /**
     * Reindex toàn bộ dữ liệu FHIR vào Elasticsearch
     */
    public void reindexAllResources() {
        logger.info("Starting full reindexing of all FHIR resources");
        
        // Lấy danh sách các resource types đã đăng ký
        for (Class<? extends IBaseResource> resourceType : daoRegistry.getRegisteredDaoTypes()) {
            try {
                reindexResourceType(resourceType);
            } catch (Exception e) {
                logger.error("Error reindexing resource type {}: {}", 
                        resourceType.getSimpleName(), e.getMessage(), e);
            }
        }
        
        logger.info("Full reindexing completed");
    }
    
    /**
     * Reindex một resource type cụ thể
     */
    @SuppressWarnings("unchecked")
    public <T extends IBaseResource> void reindexResourceType(Class<T> resourceType) {
        String resourceName = resourceType.getSimpleName();
        logger.info("Reindexing resource type: {}", resourceName);
        
        // Lấy DAO cho resource type
        IFhirResourceDao<T> dao = (IFhirResourceDao<T>) daoRegistry.getResourceDao(resourceType);
        
        // Tìm kiếm tất cả resources của loại này
        SearchParameterMap emptySearch = new SearchParameterMap();
        emptySearch.setLoadSynchronous(true);
        
        // Để tránh OOM, xử lý theo batches
        int batchSize = 1000;
        int offset = 0;
        int total = 0;
        
        IBundleProvider results = dao.search(emptySearch);
        int totalSize = results.size();
        
        logger.info("Found {} resources of type {}", totalSize, resourceName);
        
        List<IBaseResource> batch;
        do {
            batch = results.getResources(offset, Math.min(offset + batchSize, totalSize));
            
            List<IndexRequest> bulkRequests = new ArrayList<>();
            for (IBaseResource resource : batch) {
                try {
                    // Tạo index document
                    ResourceTable resourceTable = extractResourceTable(resource);
                    Map<String, Object> document = elasticsearchSvc.createIndexDocumentForResource(resourceTable, resource);
                    
                    // Tạo index request
                    IndexRequest request = new IndexRequest("fhir_" + resourceName.toLowerCase())
                            .id(resource.getIdElement().getIdPart())
                            .source(document);
                    
                    bulkRequests.add(request);
                } catch (Exception e) {
                    logger.warn("Error indexing resource {}: {}", 
                            resource.getIdElement().getValue(), e.getMessage());
                }
            }
            
            // Execute bulk request
            if (!bulkRequests.isEmpty()) {
                try {
                    BulkRequest bulkRequest = new BulkRequest();
                    bulkRequests.forEach(bulkRequest::add);
                    
                    BulkResponse bulkResponse = client.bulk(bulkRequest, RequestOptions.DEFAULT);
                    
                    if (bulkResponse.hasFailures()) {
                        logger.warn("Bulk indexing has failures: {}", bulkResponse.buildFailureMessage());
                    }
                    
                    total += bulkRequests.size();
                    logger.info("Indexed batch of {} resources, total: {}/{}", 
                            bulkRequests.size(), total, totalSize);
                    
                } catch (IOException e) {
                    logger.error("Error executing bulk request: {}", e.getMessage(), e);
                }
            }
            
            offset += batch.size();
        } while (!batch.isEmpty() && offset < totalSize);
        
        logger.info("Completed reindexing of resource type {}: {} resources processed", 
                resourceName, total);
    }
    
    /**
     * Extract ResourceTable từ resource
     */
    private ResourceTable extractResourceTable(IBaseResource resource) {
        // Trong triển khai thực tế, bạn sẽ cần lấy ResourceTable từ database
        // Đây là một implementation đơn giản
        ResourceTable resourceTable = new ResourceTable();
        resourceTable.setResourceType(resource.getClass().getSimpleName());
        resourceTable.setIdDt(resource.getIdElement());
        return resourceTable;
    }
    
    /**
     * Migrate một index từ mapping cũ sang mapping mới
     */
    public void migrateIndex(String sourceIndex, String targetIndex, Map<String, Object> newMapping) throws IOException {
        logger.info("Starting migration from {} to {}", sourceIndex, targetIndex);
        
        // Tạo target index với mapping mới
        CreateIndexRequest createRequest = new CreateIndexRequest(targetIndex)
                .mapping(newMapping);
        client.indices().create(createRequest, RequestOptions.DEFAULT);
        
        // Tạo reindex request
        ReindexRequest reindexRequest = new ReindexRequest();
        reindexRequest.setSourceIndices(sourceIndex);
        reindexRequest.setDestIndex(targetIndex);
        
        // Thiết lập script để transform data (nếu cần)
        /*
        reindexRequest.setScript(
            new Script(ScriptType.INLINE, "painless",
                "ctx._source.fullName = ctx._source.name.given + ' ' + ctx._source.name.family",
                Collections.emptyMap())
        );
        */
        
        // Thực hiện reindex
        BulkByScrollResponse response = client.reindex(reindexRequest, RequestOptions.DEFAULT);
        
        logger.info("Migration completed: {} documents processed, took {}ms",
                response.getTotal(), response.getTook().getMillis());
        
        // Sau khi migration thành công, có thể đổi tên index
        // client.indices().delete(new DeleteIndexRequest(sourceIndex), RequestOptions.DEFAULT);
        // client.indices().updateAliases(...)
    }
}
```

#### 3. Monitoring và Performance

```java
@Component
public class ElasticsearchPerformanceMonitor {
    
    private static final Logger logger = LoggerFactory.getLogger(ElasticsearchPerformanceMonitor.class);
    
    @Autowired
    private RestHighLevelClient client;
    
    @Autowired
    private MeterRegistry meterRegistry;
    
    private Timer searchTimer;
    private Timer indexTimer;
    private Counter searchErrorCounter;
    private Counter indexErrorCounter;
    
    @PostConstruct
    public void initialize() {
        // Khởi tạo timers và counters
        searchTimer = Timer.builder("elasticsearch.search.duration")
                .description("Time taken for Elasticsearch searches")
                .register(meterRegistry);
        
        indexTimer = Timer.builder("elasticsearch.index.duration")
                .description("Time taken for Elasticsearch indexing")
                .register(meterRegistry);
        
        searchErrorCounter = Counter.builder("elasticsearch.search.errors")
                .description("Number of Elasticsearch search errors")
                .register(meterRegistry);
        
        indexErrorCounter = Counter.builder("elasticsearch.index.errors")
                .description("Number of Elasticsearch indexing errors")
                .register(meterRegistry);
        
        // Bắt đầu monitoring thread
        schedulePeriodicCheck();
    }
    
    public void recordSearch(long durationMs, String resourceType, boolean success) {
        searchTimer.record(durationMs, TimeUnit.MILLISECONDS);
        
        if (!success) {
            searchErrorCounter.increment();
        }
        
        // Log slow queries
        if (durationMs > 1000) {
            logger.warn("Slow search query for resource type {}: {}ms", resourceType, durationMs);
        }
    }
    
    public void recordIndexing(long durationMs, String resourceType, boolean success) {
        indexTimer.record(durationMs, TimeUnit.MILLISECONDS);
        
        if (!success) {
            indexErrorCounter.increment();
        }
        
        // Log slow indexing
        if (durationMs > 500) {
            logger.warn("Slow indexing for resource type {}: {}ms", resourceType, durationMs);
        }
    }
    
    private void schedulePeriodicCheck() {
        ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
        
        executor.scheduleAtFixedRate(() -> {
            try {
                checkClusterHealth();
                checkIndexStats();
            } catch (Exception e) {
                logger.error("Error during periodic Elasticsearch check: {}", e.getMessage(), e);
            }
        }, 1, 15, TimeUnit.MINUTES);
    }
    
    private void checkClusterHealth() throws IOException {
        ClusterHealthRequest request = new ClusterHealthRequest();
        ClusterHealthResponse response = client.cluster().health(request, RequestOptions.DEFAULT);
        
        String status = response.getStatus().name();
        int numberOfNodes = response.getNumberOfNodes();
        int activeShards = response.getActiveShards();
        int relocatingShards = response.getRelocatingShards();
        int initializingShards = response.getInitializingShards();
        int unassignedShards = response.getUnassignedShards();
        
        logger.info("Elasticsearch cluster health: status={}, nodes={}, active_shards={}, " +
                    "relocating_shards={}, initializing_shards={}, unassigned_shards={}",
                    status, numberOfNodes, activeShards, relocatingShards, 
                    initializingShards, unassignedShards);
        
        // Record metrics
        meterRegistry.gauge("elasticsearch.cluster.nodes", numberOfNodes);
        meterRegistry.gauge("elasticsearch.cluster.shards.active", activeShards);
        meterRegistry.gauge("elasticsearch.cluster.shards.relocating", relocatingShards);
        meterRegistry.gauge("elasticsearch.cluster.shards.initializing", initializingShards);
        meterRegistry.gauge("elasticsearch.cluster.shards.unassigned", unassignedShards);
        
        // Alert on issues
        if ("RED".equals(status)) {
            logger.error("Elasticsearch cluster health is RED!");
            // Send alert
        } else if ("YELLOW".equals(status)) {
            logger.warn("Elasticsearch cluster health is YELLOW");
        }
        
        if (unassignedShards > 0) {
            logger.warn("Elasticsearch has {} unassigned shards", unassignedShards);
        }
    }
    
    private void checkIndexStats() throws IOException {
        // Get stats for all FHIR indexes
        IndicesStatsRequest request = new IndicesStatsRequest()
                .indices("fhir_*");
        
        IndicesStatsResponse response = client.indices().stats(request, RequestOptions.DEFAULT);
        
        // Total stats
        CommonStats total = response.getTotal();
        long totalDocs = total.getDocs().getCount();
        long totalSizeBytes = total.getStore().getSizeInBytes();
        long totalSearchQueries = total.getSearch().getQueryTotal();
        
        logger.info("Elasticsearch indices stats: docs={}, size={}MB, search_queries={}",
                    totalDocs, totalSizeBytes / (1024 * 1024), totalSearchQueries);
        
        // Record metrics
        meterRegistry.gauge("elasticsearch.indices.docs", totalDocs);
        meterRegistry.gauge("elasticsearch.indices.size_bytes", totalSizeBytes);
        meterRegistry.gauge("elasticsearch.indices.search_queries", totalSearchQueries);
        
        // Per-index stats
        for (Map.Entry<String, IndexStats> entry : response.getIndices().entrySet()) {
            String indexName = entry.getKey();
            IndexStats stats = entry.getValue();
            
            long docCount = stats.getPrimaries().getDocs().getCount();
            long sizeBytes = stats.getPrimaries().getStore().getSizeInBytes();
            
            logger.debug("Index {}: docs={}, size={}MB",
                    indexName, docCount, sizeBytes / (1024 * 1024));
            
            // Log warning for large indexes
            if (sizeBytes > 10 * 1024 * 1024 * 1024L) { // 10GB
                logger.warn("Index {} is very large: {}GB",
                        indexName, sizeBytes / (1024 * 1024 * 1024));
            }
        }
    }
}
```

### Kết luận

`hapi-fhir-jpaserver-elasticsearch` là một thành phần quan trọng trong hệ sinh thái HAPI FHIR, cung cấp khả năng tìm kiếm mạnh mẽ và hiệu suất cao cho các ứng dụng y tế. Bằng cách kết hợp sức mạnh của cơ sở dữ liệu quan hệ (thông qua JPA) và Elasticsearch, module này giải quyết một trong những thách thức lớn nhất trong các hệ thống FHIR - việc tìm kiếm hiệu quả trên dữ liệu y tế phức tạp.

Các tính năng nổi bật của module bao gồm:

1. **Full-Text Search**: Tìm kiếm toàn văn mạnh mẽ với phân tích ngôn ngữ, fuzzy matching và relevance scoring
2. **Geo-Spatial Search**: Tìm kiếm dựa trên vị trí địa lý cho các ứng dụng y tế dựa trên location
3. **Advanced Query Capabilities**: Aggregations, nested queries, và range queries cho phép phân tích dữ liệu phức tạp
4. **Performance và Scalability**: Hiệu suất cao và khả năng mở rộng nhờ kiến trúc phân tán của Elasticsearch
5. **Near Real-Time Indexing**: Đánh chỉ mục gần thời gian thực giúp dữ liệu tìm kiếm luôn được cập nhật

Triển khai và tích hợp `hapi-fhir-jpaserver-elasticsearch` vào hệ thống FHIR đòi hỏi sự hiểu biết về cả HAPI FHIR và Elasticsearch, nhưng lợi ích mang lại là rất đáng kể về mặt hiệu suất tìm kiếm và khả năng mở rộng. Đối với các hệ thống y tế với khối lượng dữ liệu lớn hoặc yêu cầu tìm kiếm phức tạp, việc tích hợp Elasticsearch là một lựa chọn rất đáng cân nhắc.

Với khả năng tùy biến cao và tối ưu hóa hiệu suất, `hapi-fhir-jpaserver-elasticsearch` cung cấp nền tảng vững chắc cho việc xây dựng các ứng dụng y tế hiện đại với khả năng tìm kiếm mạnh mẽ trên dữ liệu FHIR.
