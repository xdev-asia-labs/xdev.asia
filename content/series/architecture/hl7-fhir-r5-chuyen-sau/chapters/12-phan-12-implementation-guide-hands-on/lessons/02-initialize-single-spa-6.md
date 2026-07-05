---
id: 23bfd230-a893-4fe2-bcd7-7eb22900c0fc
title: 'Initialize Single-SPA 6'
slug: initialize-single-spa-6
description: 'Trong bài viết này, tôi sẽ hướng dẫn chi tiết cách cài đặt môi trường phát triển cho ứng dụng Micro Frontend tích hợp HL7 FHIR, sử dụng SingleSPA 6, ReactJS, Redux và Keycloak SMART on FHIR. Hãy cùng đi qua các bước…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 12: Implementation Guide (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Trong bài viết này, tôi sẽ hướng dẫn chi tiết cách cài đặt môi trường phát triển cho ứng dụng Micro Frontend tích hợp HL7 FHIR, sử dụng Single-SPA 6, ReactJS, Redux và Keycloak SMART on FHIR. Hãy cùng đi qua các bước thiết lập cơ bản để có thể bắt đầu dự án.

### 1. Cài đặt NodeJS và npm/yarn

#### Cài đặt NodeJS

NodeJS là nền tảng cần thiết để phát triển ứng dụng JavaScript hiện đại. Chúng ta sẽ sử dụng phiên bản LTS (Long Term Support) mới nhất.

**Cài đặt trên Windows:**

1. Truy cập trang web chính thức [nodejs.org](https://nodejs.org/)
2. Tải xuống phiên bản LTS (khuyến nghị sử dụng v20.x)
3. Chạy file cài đặt và làm theo hướng dẫn

**Cài đặt trên macOS:**

```bash
# Sử dụng Homebrew
brew install node
```

**Cài đặt trên Linux (Ubuntu/Debian):**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Cài đặt Yarn (tùy chọn)

Yarn là công cụ quản lý gói thay thế cho npm với một số cải tiến về hiệu suất và độ tin cậy.

```bash
npm install -g yarn
```

Kiểm tra cài đặt:

```bash
node -v  # Kiểm tra phiên bản Node.js
npm -v   # Kiểm tra phiên bản npm
yarn -v  # Kiểm tra phiên bản Yarn (nếu đã cài đặt)
```

### 2. Thiết lập Single-SPA 6.x

Single-SPA là một framework JavaScript cho phép xây dựng các ứng dụng Micro Frontend. Bây giờ chúng ta sẽ sử dụng công cụ CLI của nó để khởi tạo dự án.

```bash
# Tạo thư mục dự án
mkdir healthcare-micro-frontends
cd healthcare-micro-frontends

# Cài đặt công cụ CLI của Single-SPA
npm install -g create-single-spa

# Khởi tạo ứng dụng container (shell)
npx create-single-spa
```

Khi chạy lệnh `create-single-spa`, bạn sẽ được yêu cầu trả lời một số câu hỏi:

1. Chọn `single-spa root config` (đây sẽ là container app)
2. Đặt tên thư mục (ví dụ: `container` hoặc `root-config`)
3. Chọn package manager (npm hoặc yarn)
4. Chọn sử dụng TypeScript hoặc không (khuyến nghị chọn "Yes")
5. Chọn các tùy chọn khác theo nhu cầu của bạn

Sau khi hoàn thành, Single-SPA sẽ tạo cấu trúc cơ bản cho ứng dụng container.

### 3. Tạo cấu trúc project theo mô hình đã cung cấp

Dựa trên mô hình đã được cung cấp trong tài liệu, chúng ta sẽ tiếp tục tạo các Micro Frontend riêng biệt và các thư viện chia sẻ.

#### Tạo Patient Micro Frontend

```bash
cd healthcare-micro-frontends
npx create-single-spa
```

Chọn các tùy chọn sau:

1. Chọn `single-spa application / parcel`
2. Đặt tên thư mục là `patient`
3. Chọn framework là `react`
4. Chọn package manager (npm hoặc yarn)
5. Chọn sử dụng TypeScript hoặc không
6. Chọn CSS framework (hoặc "None")

#### Tạo Appointment Micro Frontend

```bash
npx create-single-spa
```

Chọn tùy chọn tương tự như trên, nhưng đặt tên thư mục là `appointment`.

#### Tạo Medication Micro Frontend

```bash
npx create-single-spa
```

Chọn tùy chọn tương tự, đặt tên thư mục là `medication`.

#### Tạo Auth Micro Frontend

```bash
npx create-single-spa
```

Chọn tùy chọn tương tự, đặt tên thư mục là `auth`.

#### Tạo thư viện Shared UI

```bash
npx create-single-spa
```

Chọn các tùy chọn sau:

1. Chọn `in-browser utility module (styleguide, API cache, etc)`
2. Đặt tên thư mục là `shared-ui`
3. Chọn package manager (npm hoặc yarn)
4. Chọn sử dụng TypeScript hoặc không

#### Tạo thư viện API Client

```bash
npx create-single-spa
```

Chọn các tùy chọn tương tự, đặt tên thư mục là `api-client`.

### 4. Cấu hình port cho các ứng dụng

Để tránh xung đột và dễ quản lý, chúng ta sẽ cấu hình các port cho từng ứng dụng trong dải 7xxx:

| Ứng dụng    | Port |
| ----------- | ---- |
| Container   | 7000 |
| Patient     | 7001 |
| Appointment | 7002 |
| Medication  | 7003 |
| Auth        | 7004 |
| Shared UI   | 7005 |
| API Client  | 7006 |

#### Cấu hình port trong webpack.config.js của Container

Mở file `container/webpack.config.js` và cập nhật như sau:

```javascript
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "healthcare";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 7000,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
```

Tương tự, cập nhật file webpack.config.js trong các thư mục khác với port tương ứng.

### 5. Cấu hình Module Federation

Module Federation là một tính năng của Webpack 5 cho phép chia sẻ mã giữa các ứng dụng. Đây là cơ chế quan trọng để các Micro Frontend có thể hoạt động cùng nhau.

#### Cấu hình trong Container

Cập nhật file `container/webpack.config.js`:

```javascript
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "healthcare";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 7000,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          patient: `patient@http://localhost:7001/healthcare-patient.js`,
          appointment: `appointment@http://localhost:7002/healthcare-appointment.js`,
          medication: `medication@http://localhost:7003/healthcare-medication.js`,
          auth: `auth@http://localhost:7004/healthcare-auth.js`,
          sharedUi: `shared_ui@http://localhost:7005/healthcare-shared-ui.js`,
          apiClient: `api_client@http://localhost:7006/healthcare-api-client.js`,
        },
        shared: {
          react: { singleton: true, requiredVersion: "^18.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
          "react-router-dom": { singleton: true, requiredVersion: "^6.0.0" },
          redux: { singleton: true, requiredVersion: "^4.0.0" },
          "react-redux": { singleton: true, requiredVersion: "^8.0.0" },
        },
      }),
      new HtmlWebpackPlugin({
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
```

#### Cấu hình trong Patient Micro Frontend

Cập nhật file `patient/webpack.config.js`:

```javascript
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "healthcare",
    projectName: "patient",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 7001,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "patient",
        filename: "healthcare-patient.js",
        exposes: {
          "./PatientRoot": "./src/root.component.js",
          "./PatientList": "./src/components/PatientList/PatientList.js",
          "./PatientDetail": "./src/components/PatientDetail/PatientDetail.js",
        },
        shared: {
          react: { singleton: true, requiredVersion: "^18.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
          "react-router-dom": { singleton: true, requiredVersion: "^6.0.0" },
        },
      }),
    ],
  });
};
```

Tương tự, cập nhật các file webpack.config.js trong các thư mục khác (appointment, medication, auth, shared-ui, api-client) với port và cấu hình phù hợp.

### 6. Cài đặt các dependencies cần thiết

#### Cài đặt dependencies cho Container

```bash
cd container
npm install react react-dom react-router-dom redux react-redux @reduxjs/toolkit
```

#### Cài đặt dependencies cho các Micro Frontend

Thực hiện tương tự cho mỗi Micro Frontend (patient, appointment, medication, auth):

```bash
cd ../patient
npm install react react-dom react-router-dom
```

#### Cài đặt dependencies cho thư viện API Client

```bash
cd ../api-client
npm install fhirclient
```

### 7. Tạo cấu trúc thư mục chuẩn

Sau khi tạo các ứng dụng, hãy tổ chức cấu trúc thư mục bên trong mỗi Micro Frontend theo mô hình đã cung cấp. Ví dụ cho Patient App:

```bash
cd patient
mkdir -p src/components/PatientList
mkdir -p src/components/PatientDetail
mkdir -p src/components/PatientCreate
mkdir -p src/services
mkdir -p src/models
mkdir -p src/utils
```

Tương tự, tạo cấu trúc thư mục cho các Micro Frontend khác theo mô hình.

### 8. Tạo file để chạy đồng thời tất cả các ứng dụng

Tạo file `package.json` trong thư mục gốc để quản lý việc chạy tất cả các ứng dụng:

```bash
cd ..
```

Tạo file `package.json` với nội dung:

```json
{
  "name": "healthcare-micro-frontends",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrently \"cd container && npm start\" \"cd patient && npm start\" \"cd appointment && npm start\" \"cd medication && npm start\" \"cd auth && npm start\" \"cd shared-ui && npm start\" \"cd api-client && npm start\""
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

Cài đặt các dependencies cần thiết:

```bash
npm install
```

### 9. Tạo file cấu hình đồng bộ port

Để dễ dàng quản lý các port, tạo file `port-config.json` trong thư mục gốc:

```json
{
  "container": 7000,
  "patient": 7001,
  "appointment": 7002,
  "medication": 7003,
  "auth": 7004,
  "shared-ui": 7005,
  "api-client": 7006
}
```

### 10. Kiểm tra cài đặt

Bây giờ bạn có thể chạy ứng dụng để kiểm tra xem mọi thứ đã hoạt động chưa:

```bash
npm start
```

Sau khi chạy lệnh này, bạn có thể truy cập vào ứng dụng tại http://localhost:7000 để xem kết quả.

### Cấu trúc thư mục cuối cùng

Sau khi hoàn thành các bước trên, cấu trúc thư mục của dự án sẽ như sau:

```
healthcare-micro-frontends/
│
├── container/                # Ứng dụng shell chính
│   ├── src/
│   │   ├── components/       # Các thành phần chung
│   │   ├── routing/          # Cấu hình định tuyến
│   │   ├── event-bus/        # Quản lý sự kiện giữa các MFE
│   │   ├── shared-state/     # Quản lý trạng thái chung
│   │   └── App.js
│   ├── webpack.config.js     # Cấu hình module federation
│   └── package.json
│
├── patient/                  # Micro frontend quản lý bệnh nhân
│   ├── src/
│   │   ├── components/
│   │   │   ├── PatientList/
│   │   │   ├── PatientDetail/
│   │   │   └── PatientCreate/
│   │   ├── services/         # API calls đến FHIR Patient endpoint
│   │   ├── models/           # Patient data models
│   │   ├── utils/
│   │   └── index.js          # Entry point
│   ├── webpack.config.js
│   └── package.json
│
├── appointment/              # Micro frontend quản lý lịch hẹn
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppointmentCalendar/
│   │   │   ├── BookingForm/
│   │   │   └── AppointmentDetail/
│   │   ├── services/         # API calls đến FHIR Appointment endpoint
│   │   ├── models/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
│
├── medication/               # Micro frontend quản lý thuốc
│   ├── src/
│   │   ├── components/
│   │   │   ├── MedicationList/
│   │   │   ├── PrescriptionForm/
│   │   │   └── MedicationDetail/
│   │   ├── services/         # API calls đến FHIR MedicationRequest
│   │   ├── models/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
│
├── auth/                     # Micro frontend xác thực
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login/
│   │   │   ├── Registration/
│   │   │   └── UserProfile/
│   │   ├── services/         # Authentication services (SMART on FHIR)
│   │   ├── utils/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
│
├── shared-ui/                # Thư viện UI components dùng chung
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Form/
│   │   │   ├── Table/
│   │   │   ├── ClinicalViews/ # Components y tế chuyên biệt
│   │   │   └── index.js
│   │   ├── styles/
│   │   ├── utils/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
│
├── api-client/               # Thư viện FHIR client dùng chung
│   ├── src/
│   │   ├── fhir-client/
│   │   ├── resources/        # FHIR resource clients
│   │   ├── utils/
│   │   └── index.js
│   └── package.json
│
├── port-config.json          # Cấu hình port cho các ứng dụng
└── package.json              # Script để chạy tất cả các ứng dụng
```

### Kết luận

Qua bài viết này, chúng ta đã hoàn thành việc cài đặt môi trường phát triển và tạo cấu trúc dự án cho ứng dụng Micro Frontend y tế sử dụng HL7 FHIR. Cấu trúc này tuân theo mô hình đã cung cấp và sử dụng các công nghệ hiện đại như Single-SPA 6.x, ReactJS, Redux và Keycloak SMART on FHIR.

Việc tổ chức các Micro Frontend theo cách này mang lại nhiều lợi ích:

* Các nhóm có thể làm việc độc lập trên từng module
* Dễ dàng bảo trì và mở rộng
* Có thể triển khai từng phần riêng biệt
* Tăng tính tái sử dụng và mô-đun hóa

Trong các bài học tiếp theo, chúng ta sẽ tiếp tục xây dựng các chức năng cụ thể cho từng Micro Frontend và tích hợp chúng lại với nhau.
