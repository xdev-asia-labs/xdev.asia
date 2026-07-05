---
id: 651faa5e-ddb7-421b-a1be-ed6693d0d1c4
title: 'Discovery Service'
slug: discovery-service
description: 'Service discovery đóng vai trò then chốt trong hệ thống microservices, giúp các service tìm thấy và giao tiếp với nhau mà không cần hardcode địa chỉ. Theo kiến trúc đã thiết kế, discoveryservice sẽ chạy trên cổng 8761…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 12: Implementation Guide (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Service discovery đóng vai trò then chốt trong hệ thống microservices, giúp các service tìm thấy và giao tiếp với nhau mà không cần hardcode địa chỉ. Theo kiến trúc đã thiết kế, `discovery-service` sẽ chạy trên cổng 8761 và đóng vai trò đăng ký và phát hiện các service trong hệ thống.

### Tạo project Spring Boot

Đầu tiên, chúng ta cần tạo một Spring Boot project mới với các dependencies cần thiết cho Eureka Server.

#### Cấu trúc file pom.xml

```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

File pom.xml của chúng ta bao gồm các dependencies quan trọng:

* Spring Cloud Netflix Eureka Server để chạy server discovery
* Spring Boot Actuator cho health check và monitoring
* Spring Security để bảo vệ Eureka dashboard
* Micrometer Prometheus để tích hợp với hệ thống monitoring

### Cấu hình application.yml

Tiếp theo, ta cấu hình file application.yml như sau:

```yaml
server:
  port: 8761

spring:
  application:
    name: discovery-service
  security:
    user:
      name: ${EUREKA_USERNAME:eureka}
      password: ${EUREKA_PASSWORD:password}

# Cấu hình Eureka Server
eureka:
  instance:
    hostname: localhost
  client:
    registerWithEureka: false
    fetchRegistry: false
    serviceUrl:
      defaultZone: http://${spring.security.user.name}:${spring.security.user.password}@${eureka.instance.hostname}:${server.port}/eureka/
  server:
    enableSelfPreservation: false
    waitTimeInMsWhenSyncEmpty: 0

# Cấu hình cho production
---
spring:
  config:
    activate:
      on-profile: prod
eureka:
  instance:
    preferIpAddress: true
  server:
    enableSelfPreservation: true

# Cấu hình monitoring
management:
  endpoints:
    web:
      exposure:
        include: health,info,prometheus,metrics
  endpoint:
    health:
      show-details: when_authorized
      roles: ADMIN
  metrics:
    export:
      prometheus:
        enabled: true
    tags:
      application: ${spring.application.name}
```

Cấu hình này thiết lập:

* Cổng 8761 cho Eureka Server
* Tài khoản và mật khẩu bảo mật cho Eureka
* Cấu hình self-preservation mode tùy theo môi trường
* Các endpoint monitoring qua Actuator
* Profile `prod` với các thiết lập phù hợp cho môi trường production

### Class chính cho Eureka Server

File Java chính để khởi động Eureka Server như sau:

```java

@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServiceApplication.class, args);
    }
}
```

Annotation `@EnableEurekaServer` kích hoạt chức năng Eureka Server trong ứng dụng.

### Cấu hình Security

Để bảo vệ Eureka dashboard, ta cấu hình Spring Security:

```java
package com.healthcare.discovery.config;

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
            .csrf(csrf -> csrf.ignoringRequestMatchers("/eureka/**"))
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/actuator/health/**").permitAll()
                .requestMatchers("/actuator/info").permitAll()
                .requestMatchers("/actuator/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .httpBasic();
        
        return http.build();
    }
}
```

Cấu hình này:

* Bỏ qua CSRF cho các endpoint Eureka
* Cho phép public access đến health check endpoints
* Bảo vệ các endpoint khác bằng xác thực HTTP Basic

### Containerization với Docker

#### Dockerfile

Để triển khai service trong Docker, ta cần tạo Dockerfile:

```dockerfile

FROM openjdk:24-slim-bullseye

WORKDIR /app

COPY target/discovery-service-*.jar app.jar

HEALTHCHECK --interval=30s --timeout=30s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8761/actuator/health || exit 1

EXPOSE 8761

ENTRYPOINT ["java", "-jar", "app.jar"]
```

Dockerfile này:

* Sử dụng Eclipse Temurin JRE 21 Alpine làm base image (nhẹ và an toàn)
* Cấu hình health check để Docker có thể theo dõi trạng thái container
* Mở cổng 8761
* Chạy ứng dụng Spring Boot

#### Docker Compose

Để dễ dàng chạy service trong môi trường local và dev, ta tạo file docker-compose.yml:

```yaml
version: '3.8'

services:
  discovery-service:
    build: .
    image: healthcare/discovery-service:latest
    container_name: discovery-service
    ports:
      - "8761:8761"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - EUREKA_USERNAME=eureka
      - EUREKA_PASSWORD=securepassword
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8761/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    networks:
      - healthcare-network
    restart: unless-stopped

networks:
  healthcare-network:
    driver: bridge
```

### Tích hợp với các Service khác

Các microservices khác trong hệ thống cần kết nối tới Eureka Server để đăng ký. Để làm điều này, chúng cần thêm dependency và cấu hình sau:

#### Dependencies cho Eureka Client

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

#### Cấu hình Eureka Client

Trong file application.yml của mỗi service:

```yaml
spring:
  application:
    name: service-name  # Tên của service

eureka:
  client:
    serviceUrl:
      defaultZone: http://eureka:password@discovery-service:8761/eureka/
    register-with-eureka: true
    fetch-registry: true
  instance:
    prefer-ip-address: true
```

### Build và Run

#### Build service với Maven

```bash
mvn clean package
```

#### Run với Java

```bash
java -jar target/discovery-service-0.0.1-SNAPSHOT.jar
```

#### Run với Docker Compose

```bash
docker-compose up -d
```

### Kết luận

Trong bài viết này, chúng ta đã xây dựng thành công service discovery cho hệ thống microservices y tế FHIR R5 sử dụng Spring Cloud Netflix Eureka. Service này sẽ là nền tảng cho việc triển khai các services khác trong hệ thống, cho phép chúng tìm kiếm và giao tiếp với nhau một cách linh hoạt.

Các bước tiếp theo bao gồm:

1. Triển khai API Gateway (cổng 8080)
2. Triển khai các services trong Patient Domain (cổng 8101-8199)
3. Triển khai các services trong Clinical Domain (cổng 8201-8299)

Discovery Service là bước đầu tiên quan trọng trong hành trình xây dựng hệ thống y tế hiện đại dựa trên FHIR R5 và microservices architecture.
