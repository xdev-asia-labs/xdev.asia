---
id: 126793a7-07a3-49ac-9265-d3f830344982
title: 'Config Server'
slug: config-server
description: 'Trong hệ thống microservices phức tạp như một ứng dụng y tế dựa trên FHIR R5, việc quản lý cấu hình một cách hiệu quả và khám phá dịch vụ là vô cùng quan trọng. Bài viết này sẽ trình bày cách kết hợp Spring Cloud Config…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 5
section_title: 'Phần 12: Implementation Guide (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Trong hệ thống microservices phức tạp như một ứng dụng y tế dựa trên FHIR R5, việc quản lý cấu hình một cách hiệu quả và khám phá dịch vụ là vô cùng quan trọng. Bài viết này sẽ trình bày cách kết hợp Spring Cloud Config Server sử dụng backend lưu trữ file cục bộ và Eureka Service Discovery để xây dựng một nền tảng vững chắc cho hệ thống y tế.

### Tại sao cần Config Server và Eureka trong hệ thống y tế?

Các hệ thống y tế hiện đại sử dụng kiến trúc microservices có những thách thức đặc thù:

1. **Nhiều microservices riêng biệt** - Mỗi service như patient-service, encounter-service cần cấu hình riêng và khả năng định vị các dịch vụ khác
2. **Môi trường đa dạng** - Từ development, testing, staging đến production
3. **Thông tin nhạy cảm** - Thông tin kết nối database, credentials API cần được bảo vệ
4. **Cập nhật linh hoạt** - Khả năng cập nhật cấu hình mà không cần triển khai lại dịch vụ
5. **Định vị dịch vụ động** - Khả năng tự động phát hiện vị trí của các dịch vụ khác trong mạng

Spring Cloud Config Server và Eureka cùng nhau giải quyết tất cả những vấn đề này.

### Phần 1: Thiết lập Config Server với File System Backend

#### 1. Tạo dự án Config Server

Đầu tiên, tạo một dự án Spring Boot với dependency Spring Cloud Config Server:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-config-server</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
</dependencies>
```

#### 2. Cấu hình application.yml với File System Backend

Thay vì sử dụng Git repository, chúng ta sẽ cấu hình Config Server để đọc cấu hình từ file system:

```yaml
server:
  port: 8888

spring:
  application:
    name: config-server
  profiles:
    active: native  # Kích hoạt native profile để sử dụng file system
  cloud:
    config:
      server:
        native:
          search-locations: 
            - file:./config-repo
            - file:./config-repo/{application}
            - file:./config-repo/{application}/{profile}
  security:
    user:
      name: ${CONFIG_SERVER_USERNAME:configuser}
      password: ${CONFIG_SERVER_PASSWORD:configpassword}

# Cấu hình Eureka Client
eureka:
  client:
    serviceUrl:
      defaultZone: http://${EUREKA_HOST:localhost}:${EUREKA_PORT:8761}/eureka/
    register-with-eureka: true
    fetch-registry: true
  instance:
    prefer-ip-address: true
    lease-renewal-interval-in-seconds: 10
    metadata-map:
      management.context-path: /actuator

management:
  endpoints:
    web:
      exposure:
        include: health,info,refresh
  endpoint:
    health:
      show-details: when_authorized
```

#### 3. Kích hoạt Config Server trong class chính

```java

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```

#### 4. Tạo cấu trúc thư mục và file cấu hình

Tạo thư mục `config-repo` trong thư mục gốc của dự án Config Server với cấu trúc như sau:

```
config-repo/
├── application.yml              # Cấu hình chung cho tất cả dịch vụ
├── terminology-service/
│   ├── terminology-service.yml      # Cấu hình mặc định
│   ├── terminology-service-dev.yml  # Cấu hình môi trường development
│   └── terminology-service-prod.yml # Cấu hình môi trường production
└── ...các service khác...
```

#### 5. Cấu hình bảo mật

```java

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/actuator/health/**").permitAll()
                .anyRequest().authenticated())
            .httpBasic();
        
        return http.build();
    }
}
```

### Phần 2: Ví dụ file cấu hình trong file system

#### 1. Ví dụ file cấu hình chung (application.yml)

```yaml
# config-repo/application.yml
eureka:
  client:
    serviceUrl:
      defaultZone: http://${EUREKA_USERNAME:eurekauser}:${EUREKA_PASSWORD:eurekapassword}@${EUREKA_HOST:localhost}:${EUREKA_PORT:8761}/eureka/
  instance:
    prefer-ip-address: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,refresh
  endpoint:
    health:
      show-details: when-authorized

spring:
  sleuth:
    sampler:
      probability: 1.0
  zipkin:
    base-url: http://zipkin:9411

logging:
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
  level:
    root: INFO
    org.springframework.web: INFO
    com.healthcare: DEBUG
```

#### 2. Ví dụ cấu hình patient-service

```yaml
# config-repo/terminology-service/terminology-service.yml
spring:
  datasource:
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: none
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true

fhir:
  version: R5
  resource:
    patient:
      validation:
        enabled: true
      extensions:
        ethnicity:
          url: http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity
        birthsex:
          url: http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex

server:
  port: 8101
```

```yaml
# config-repo/terminology-service/terminology-service-dev.yml
spring:
  data:
    mongodb:
      uri: mongodb://${MONGODB_HOST:localhost}:${MONGODB_PORT:27017}/terminology_dev
      username: ${MONGODB_USERNAME:admin}
      password: ${MONGODB_PASSWORD:admin}

logging:
  level:
    com.healthcare.patient: DEBUG
    org.hibernate.SQL: DEBUG

fhir:
  resource:
    patient:
      validation:
        severity: WARNING
```

```yaml
# config-repo/patient-service/terminology-service-prod.yml
spring:
  datasource:
    url: jdbc:postgresql://postgres:5432/terminology_prod
    username: ${PATIENT_DB_USERNAME}
    password: ${PATIENT_DB_PASSWORD}
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5

logging:
  level:
    com.healthcare.patient: INFO
    org.hibernate.SQL: INFO

fhir:
  resource:
    patient:
      validation:
        severity: ERROR
```

### Phần 3: Kết nối các Service với Config Server và Eureka

#### 1. Thêm dependencies vào service client

Các service client cần thêm dependencies sau để kết nối với Config Server và Eureka:

```xml
<dependencies>
    <!-- Config Client -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-config</artifactId>
    </dependency>
    <!-- Eureka Client -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-bootstrap</artifactId>
    </dependency>
</dependencies>
```

#### 2. Cấu hình bootstrap.yml cho service client

```yaml
# bootstrap.yml
spring:
  application:
    name: terminology-service
  cloud:
    config:
      uri: http://${CONFIG_SERVER_HOST:localhost}:${CONFIG_SERVER_PORT:8888}
      fail-fast: true
      username: ${CONFIG_CLIENT_USERNAME:configuser}
      password: ${CONFIG_CLIENT_PASSWORD:configpassword}
  profiles:
    active: ${SPRING_PROFILES_ACTIVE:dev}

# Cấu hình Eureka client nếu Config Server không hoạt động
eureka:
  client:
    serviceUrl:
      defaultZone: http://${EUREKA_USERNAME:eurekauser}:${EUREKA_PASSWORD:eurekapassword}@${EUREKA_HOST:localhost}:${EUREKA_PORT:8761}/eureka/
```

#### 3. Kích hoạt Eureka Client trong class chính&#x20;

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TerminologyServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(PatientServiceApplication.class, args);
    }
}
```

### Phần 5: Triển khai và Mở rộng

#### 1. Triển khai trên Docker Compose

```yaml
version: '3.8'

services:
  config-server:
    build: ./config-server
    container_name: config-server
    ports:
      - "8888:8888"
    volumes:
      - ./config-repo:/app/config-repo  # Mount thư mục cấu hình vào container
    environment:
      - CONFIG_SERVER_USERNAME=configuser
      - CONFIG_SERVER_PASSWORD=securepassword
      - SPRING_PROFILES_ACTIVE=native,docker
      - EUREKA_HOST=discovery-service
      - EUREKA_PORT=8761
      - EUREKA_USERNAME=eurekauser
      - EUREKA_PASSWORD=eurekapassword
    networks:
      - healthcare-network
    depends_on:
      - discovery-service
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8888/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3

networks:
  healthcare-network:
    driver: bridge
```

#### 2. Kubernetes Deployment

Triển khai Config Server trên Kubernetes với ConfigMap để mount file cấu hình:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: config-repo
  namespace: healthcare
data:
  "application.yml": |
    eureka:
      client:
        serviceUrl:
          defaultZone: http://${EUREKA_USERNAME}:${EUREKA_PASSWORD}@discovery-service:8761/eureka/
      instance:
        prefer-ip-address: true
    # ... nội dung file application.yml ...
  
  "terminology-service.yml": |
    spring:
      datasource:
        driver-class-name: org.postgresql.Driver
    # ... nội dung file patient-service.yml ...
  
  "terminology-service-dev.yml": |
    spring:
      datasource:
        url: jdbc:postgresql://postgres:5432/patient_dev
    # ... nội dung file patient-service-dev.yml ...
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: config-server
  namespace: healthcare
spec:
  replicas: 2
  selector:
    matchLabels:
      app: config-server
  template:
    metadata:
      labels:
        app: config-server
    spec:
      containers:
      - name: config-server
        image: healthcare/config-server:latest
        ports:
        - containerPort: 8888
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "native,kubernetes"
        - name: CONFIG_SERVER_USERNAME
          valueFrom:
            secretKeyRef:
              name: config-server-secrets
              key: username
        - name: CONFIG_SERVER_PASSWORD
          valueFrom:
            secretKeyRef:
              name: config-server-secrets
              key: password
        volumeMounts:
        - name: config-repo-volume
          mountPath: /app/config-repo
      volumes:
      - name: config-repo-volume
        configMap:
          name: config-repo
```

### Phần 6: Lợi ích và Nhược điểm của File System Backend

#### Lợi ích

1. **Đơn giản hóa**: Không cần cấu hình Git repository hoặc công cụ quản lý phiên bản
2. **Performance**: Truy cập nhanh hơn vì đọc trực tiếp từ file system
3. **Kiểm soát trực tiếp**: Sửa đổi file cấu hình trực tiếp mà không cần commit
4. **Không phụ thuộc mạng**: Hoạt động offline, không cần kết nối đến Git server
5. **Tích hợp dễ dàng**: Phù hợp với các môi trường containerized như Docker và Kubernetes

#### Nhược điểm

1. **Thiếu phiên bản**: Không có lịch sử phiên bản như Git repository
2. **Thiếu collaboration**: Không có các tính năng như pull requests, review
3. **Manual synchronization**: Cần đồng bộ hóa thủ công giữa nhiều instance Config Server
4. **Không có audit trail**: Khó theo dõi ai đã thay đổi cấu hình và khi nào

### Phần 7: Best Practices

#### 1. Quản lý cấu hình trong Docker

Khi sử dụng Config Server với file system backend trong Docker, nên sử dụng volume để mount thư mục cấu hình từ host:

```yaml
volumes:
  - ./config-repo:/app/config-repo
```

#### 2. Quản lý cấu hình trong Kubernetes

Trong Kubernetes, có hai cách quản lý cấu hình cho Config Server:

**Sử dụng ConfigMap**

Phù hợp cho cấu hình không nhạy cảm:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: config-repo
data:
  "application.yml": |
    # nội dung file application.yml
  "terminology-service.yml": |
    # nội dung file patient-service.yml
```

**Sử dụng Persistent Volume**

Phù hợp khi cần lưu trữ nhiều file cấu hình hoặc cấu hình lớn:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: config-repo-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

```yaml
volumeMounts:
- name: config-repo-volume
  mountPath: /app/config-repo
volumes:
- name: config-repo-volume
  persistentVolumeClaim:
    claimName: config-repo-pvc
```

#### 3. Refresh Configuration

Để refresh cấu hình mà không khởi động lại service:

```
POST /actuator/refresh
```

Hoặc sử dụng Spring Cloud Bus để refresh tất cả các service:

```
POST /actuator/busrefresh
```

#### 4. Bảo mật thông tin nhạy cảm

Không nên lưu trữ thông tin nhạy cảm trực tiếp trong file cấu hình. Thay vào đó, sử dụng một trong các phương pháp sau:

**Sử dụng biến môi trường**

```yaml
spring:
  datasource:
    username: ${PATIENT_DB_USERNAME}
    password: ${PATIENT_DB_PASSWORD}
```

**Mã hóa các thuộc tính nhạy cảm**

Sử dụng Spring Cloud Config Server's encryption và decryption tính năng:

```yaml
encrypt:
  key: ${ENCRYPT_KEY}

spring:
  datasource:
    username: '{cipher}AQA6UNBa...'
    password: '{cipher}AQA1kQjd...'
```

### Kết luận

Kết hợp Spring Cloud Config Server với File System Backend và Eureka Service Discovery tạo nên một nền tảng vững chắc cho hệ thống y tế dựa trên FHIR R5 với kiến trúc microservices. Lựa chọn File System Backend giúp đơn giản hóa việc quản lý cấu hình trong các môi trường container hóa như Docker và Kubernetes.

Những lợi ích chính bao gồm:

1. **Quản lý cấu hình tập trung**: Thay đổi cấu hình mà không cần triển khai lại dịch vụ
2. **Đơn giản hóa triển khai**: Sử dụng file system thay vì Git repository
3. **Service Discovery tự động**: Các dịch vụ tự động phát hiện và giao tiếp với nhau
4. **High Availability**: Khả năng mở rộng và chịu lỗi cao
5. **Bảo mật**: Bảo vệ thông tin nhạy cảm
6. **Giám sát thời gian thực**: Theo dõi trạng thái và sức khỏe của các service

Việc triển khai đúng cách Spring Cloud Config Server với File System Backend và Eureka Service Discovery sẽ giúp đơn giản hóa quá trình quản lý, vận hành và mở rộng hệ thống y tế dựa trên FHIR, đồng thời tăng cường tính linh hoạt và độ tin cậy của toàn bộ hệ thống.
