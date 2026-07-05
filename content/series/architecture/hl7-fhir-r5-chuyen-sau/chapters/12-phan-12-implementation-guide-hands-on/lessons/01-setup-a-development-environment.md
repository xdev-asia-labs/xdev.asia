---
id: 590a5210-5f8a-4b90-9e00-877d19ee8f38
title: 'Development environment'
slug: setup-a-development-environment
description: 'Trong bài viết này, chúng ta sẽ thiết lập một môi trường cơ bản cho hệ thống Y tế dựa trên HL7 FHIR R5, tập trung vào việc cài đặt và cấu hình HAPI FHIR Server, PostgreSQL (phiên bản mới nhất) và Keycloak, tất cả đều…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 12: Implementation Guide (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Trong bài viết này, chúng ta sẽ thiết lập một môi trường cơ bản cho hệ thống Y tế dựa trên HL7 FHIR R5, tập trung vào việc cài đặt và cấu hình HAPI FHIR Server, PostgreSQL (phiên bản mới nhất) và Keycloak, tất cả đều chạy trong container Podman.

### 1. Cài đặt Podman và Podman Compose

#### Windows

1.  Cài đặt WSL2 (Windows Subsystem for Linux) nếu chưa có:

    ```powershell
    wsl --install
    ```
2. Tải xuống và cài đặt Podman Desktop từ: https://podman-desktop.io/
3. Sau khi cài đặt, khởi động Podman Desktop và làm theo hướng dẫn thiết lập ban đầu
4.  Cài đặt Podman Compose trong WSL:

    ```bash
    pip3 install podman-compose
    ```

#### macOS

```bash
# Sử dụng Homebrew
brew install podman
podman machine init
podman machine start

# Cài đặt Podman Compose
pip3 install podman-compose

# Kiểm tra cài đặt
podman info
podman-compose --version
```

#### Linux (Ubuntu/Debian)

```bash
# Thêm repository
. /etc/os-release
sudo sh -c "echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /' > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list"
curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
sudo apt update

# Cài đặt Podman
sudo apt install podman

# Cài đặt Podman Compose
pip3 install podman-compose

# Kiểm tra cài đặt
podman --version
podman-compose --version
```

### 2. Tạo thư mục dự án

```bash
# Tạo thư mục dự án
mkdir -p fhir-healthcare-system
cd fhir-healthcare-system
```

### 3. Tạo file Podman Compose

Tạo file `podman-compose.yml` trong thư mục dự án:

```yaml
services:
  fhir:
    container_name: fhir
    image: "hapiproject/hapi:latest"
    ports:
      - "8080:8080"
    configs:
      - source: hapi
        target: /app/config/application.yaml
    depends_on:
      - db

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: admin
      POSTGRES_USER: admin
      POSTGRES_DB: hapi
      HAPI_FHIR_VERSION: R5
    volumes:
      - ./hapi.postgress.data:/var/lib/postgresql/data

  keycloak:
    image: quay.io/keycloak/keycloak:26.1.4
    container_name: fhir-keycloak
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://db:5432/hapi
      KC_DB_USERNAME: admin
      KC_DB_PASSWORD: admin
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
      KC_HTTP_PORT: 8080
      KC_HTTPS_PORT: 8443
      KC_HOSTNAME_STRICT: false
    ports:
      - "8081:8080"
      - "8443:8443"
    command: 
      - "start-dev"
    depends_on:
      - db

configs:
  hapi:
     file: ./hapi.application.yaml
```

### 4. Khởi động môi trường

```bash
# Khởi động các container
podman-compose up -d

# Kiểm tra các container đang chạy
podman-compose ps
```

### 5. Cấu hình Keycloak cho SMART on FHIR

Sau khi khởi động Keycloak, bạn có thể cấu hình SMART on FHIR:

1. Truy cập Admin Console: http://localhost:8090/auth/admin
2. Đăng nhập với tài khoản admin/admin
3. Tạo Realm mới có tên "fhir-realm"
4. Tạo Client có tên "fhir-client" với các cấu hình:
   * Access Type: public
   * Valid Redirect URIs: \*
   * Web Origins: \*
5. Tạo các roles: patient, practitioner, admin
6. Tạo một số người dùng test với roles khác nhau

### 6. Kiểm tra và quản lý hệ thống

#### Xem trạng thái các container

```bash
podman-compose ps
```

#### Xem logs của container

```bash
podman-compose logs hapi-fhir-server
podman-compose logs keycloak
podman-compose logs postgres-db
```

#### Truy cập vào PostgreSQL

```bash
podman exec -it fhir_postgres psql -U fhiruser -d fhirdb
```

#### Kiểm tra phiên bản PostgreSQL

```bash
podman exec -it fhir_postgres psql -U fhiruser -d fhirdb -c "SELECT version();"
```

#### Dừng tất cả các container

```bash
podman-compose stop
```

#### Khởi động lại tất cả các container

```bash
podman-compose start
```

#### Khởi động container cụ thể

```bash
podman-compose start postgres-db
```

#### Xóa tất cả các container

```bash
podman-compose down
```

#### Xóa tất cả các container và volume

```bash
podman-compose down -v
```

### 7. Truy cập các dịch vụ

Sau khi khởi động thành công, bạn có thể truy cập:

1. HAPI FHIR Server: http://localhost:8080 (mặc định có giao diện web)
2. Keycloak Admin Console: http://localhost:8090/auth/admin (user: admin, password: admin)

### 8. Kiểm tra HAPI FHIR Server

#### Kiểm tra phiên bản

```bash
curl http://localhost:8080/fhir/metadata | jq
```

#### Tìm kiếm bệnh nhân

```bash
curl http://localhost:8080/fhir/Patient | jq
```

#### Tìm kiếm bệnh nhân theo tên

```bash
curl "http://localhost:8080/fhir/Patient?name=Smith" | jq
```

### 9. Cấu hình bổ sung cho HAPI FHIR Server

Bạn có thể tùy chỉnh cấu hình HAPI FHIR Server bằng cách thêm các biến môi trường vào container:

```yaml
hapi-fhir-server:
  environment:
    # Giới hạn số lượng kết quả tìm kiếm
    HAPI_FHIR_DEFAULT_PAGE_SIZE: "20"
    HAPI_FHIR_MAX_PAGE_SIZE: "500"
    
    # Bật tính năng xác thực
    HAPI_FHIR_SECURITY_ENABLED: "true"
    
    # Cấu hình CORS
    HAPI_FHIR_CORS_ENABLED: "true"
    HAPI_FHIR_CORS_ALLOW_CREDENTIALS: "true"
    HAPI_FHIR_CORS_ALLOWED_ORIGIN: "*"
```

### 10. Tạo backup PostgreSQL

```bash
# Tạo backup
podman exec -it fhir_postgres pg_dump -U fhiruser -d fhirdb > fhirdb_backup.sql

# Khôi phục từ backup
podman exec -i fhir_postgres psql -U fhiruser -d fhirdb < fhirdb_backup.sql
```

### Kết luận

Bây giờ bạn đã thiết lập một môi trường cơ bản cho hệ thống Y tế dựa trên HL7 FHIR R5, bao gồm:

* PostgreSQL phiên bản mới nhất cho lưu trữ dữ liệu
* HAPI FHIR Server R5 cho xử lý FHIR resources
* Keycloak cho xác thực và phân quyền

Tất cả các dịch vụ đều chạy trong container Podman và được quản lý bằng Podman Compose. Môi trường này cung cấp một nền tảng vững chắc để bạn bắt đầu phát triển các ứng dụng y tế dựa trên FHIR R5.

Việc sử dụng PostgreSQL phiên bản mới nhất đảm bảo bạn được hưởng lợi từ các tính năng mới nhất, cải tiến hiệu suất và bảo mật của hệ quản trị cơ sở dữ liệu này.
