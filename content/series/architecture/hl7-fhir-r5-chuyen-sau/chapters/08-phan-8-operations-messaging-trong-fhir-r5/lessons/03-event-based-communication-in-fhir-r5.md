---
id: 836c57e8-ca39-4ca0-971d-ae9a554315c9
title: 'Event-based Communication In FHIR R5'
slug: event-based-communication-in-fhir-r5
description: 'Giao tiếp dựa trên sự kiện là một mẫu thiết kế quan trọng trong các hệ thống phân tán, cho phép các thành phần khác nhau phản ứng khi có thay đổi mà không cần liên tục truy vấn để kiểm tra. Trong FHIR R5, cơ chế này đã…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 8: Operations & Messaging trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Giao tiếp dựa trên sự kiện là một mẫu thiết kế quan trọng trong các hệ thống phân tán, cho phép các thành phần khác nhau phản ứng khi có thay đổi mà không cần liên tục truy vấn để kiểm tra. Trong FHIR R5, cơ chế này đã được thiết kế lại hoàn toàn để cung cấp nhiều tính năng mạnh mẽ hơn, dễ cấu hình hơn và mở rộng hơn so với các phiên bản trước.

### 1. Subscription Resource (R5 Redesign)

Resource Subscription trong R5 đã được thiết kế lại hoàn toàn để khắc phục các hạn chế của phiên bản trước và mở rộng khả năng:

#### 1.1. Cấu trúc mới của Subscription

```json
{
  "resourceType": "Subscription",
  "id": "example",
  "status": "active",
  "topic": "http://example.org/fhir/SubscriptionTopic/patient-admission",
  "contact": [
    {
      "system": "email",
      "value": "subscription-admin@example.org"
    }
  ],
  "end": "2023-12-31T23:59:59Z",
  "reason": "Notify on patient admissions",
  "filterBy": [
    {
      "resourceType": "Encounter",
      "filterParameter": "type",
      "comparator": "eq",
      "value": "http://terminology.hl7.org/CodeSystem/v2-0004|E"
    },
    {
      "resourceType": "Encounter",
      "filterParameter": "status",
      "comparator": "eq",
      "value": "in-progress"
    }
  ],
  "channelType": "rest-hook",
  "endpoint": "https://webhook.example.org/fhir-subscription-endpoint",
  "heartbeatPeriod": 300,
  "timeout": 60,
  "contentType": "application/fhir+json",
  "content": "id-only"
}
```

Các thay đổi chính bao gồm:

* **Topic-based**: Subscription giờ đây tham chiếu đến một SubscriptionTopic định nghĩa các sự kiện
* **FilterBy rõ ràng hơn**: Cấu trúc lọc mới giúp xác định chính xác resource type và các tiêu chí
* **Phân tách Channel**: Cấu trúc kênh giao tiếp rõ ràng hơn với các thông số cụ thể
* **Content Options**: Nhiều tùy chọn hơn về nội dung được gửi khi có thông báo

#### 1.2. Tạo Subscription với REST API

**Request:**

```http
POST /fhir/Subscription HTTP/1.1
Host: example.org
Content-Type: application/fhir+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "resourceType": "Subscription",
  "status": "requested",
  "topic": "http://example.org/fhir/SubscriptionTopic/patient-admission",
  "reason": "Notify on new emergency admissions",
  "filterBy": [
    {
      "resourceType": "Encounter",
      "filterParameter": "type",
      "comparator": "eq",
      "value": "http://terminology.hl7.org/CodeSystem/v2-0004|E"
    }
  ],
  "channelType": "rest-hook",
  "endpoint": "https://client.example.org/fhir/subscription-notify",
  "heartbeatPeriod": 600,
  "contentType": "application/fhir+json",
  "content": "full-resource"
}
```

**Response:**

```http
HTTP/1.1 201 Created
Content-Type: application/fhir+json
Location: https://example.org/fhir/Subscription/123

{
  "resourceType": "Subscription",
  "id": "123",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2023-05-18T10:15:30Z"
  },
  "status": "active",
  "topic": "http://example.org/fhir/SubscriptionTopic/patient-admission",
  "reason": "Notify on new emergency admissions",
  "filterBy": [
    {
      "resourceType": "Encounter",
      "filterParameter": "type",
      "comparator": "eq",
      "value": "http://terminology.hl7.org/CodeSystem/v2-0004|E"
    }
  ],
  "channelType": "rest-hook",
  "endpoint": "https://client.example.org/fhir/subscription-notify",
  "heartbeatPeriod": 600,
  "contentType": "application/fhir+json",
  "content": "full-resource"
}
```

#### 1.3. Quản lý vòng đời Subscription

**Cập nhật trạng thái (tạm dừng):**

```http
PATCH /fhir/Subscription/123 HTTP/1.1
Host: example.org
Content-Type: application/json-patch+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

[
  { "op": "replace", "path": "/status", "value": "off" }
]
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json

{
  "resourceType": "Subscription",
  "id": "123",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2023-05-18T14:22:10Z"
  },
  "status": "off",
  "topic": "http://example.org/fhir/SubscriptionTopic/patient-admission",
  // Các trường khác
}
```

### 2. SubscriptionTopic

SubscriptionTopic là một resource mới trong R5, định nghĩa các loại sự kiện có thể đăng ký:

#### 2.1. Cấu trúc SubscriptionTopic

```json
{
  "resourceType": "SubscriptionTopic",
  "id": "patient-admission",
  "url": "http://example.org/fhir/SubscriptionTopic/patient-admission",
  "status": "active",
  "name": "PatientAdmission",
  "title": "Patient Admission Notifications",
  "date": "2023-01-15",
  "description": "Thông báo khi bệnh nhân được nhập viện",
  "resourceTrigger": [
    {
      "description": "Kích hoạt khi một Encounter mới được tạo",
      "resourceType": "Encounter",
      "supportedInteraction": [
        "create"
      ],
      "queryCriteria": {
        "previous": "status:not=in-progress",
        "current": "status=in-progress",
        "requireBoth": true
      }
    }
  ],
  "canFilterBy": [
    {
      "description": "Lọc theo loại Encounter",
      "resource": "Encounter",
      "filterParameter": "type"
    },
    {
      "description": "Lọc theo phòng/khoa",
      "resource": "Encounter",
      "filterParameter": "service-type"
    }
  ],
  "notificationShape": [
    {
      "resource": "Encounter",
      "include": [
        "Encounter:subject",
        "Encounter:participant"
      ]
    }
  ]
}
```

Các thành phần chính:

* **resourceTrigger**: Định nghĩa những thay đổi nào gây kích hoạt thông báo
* **canFilterBy**: Mô tả các tiêu chí có thể sử dụng để lọc thông báo
* **notificationShape**: Xác định cấu trúc của thông báo, bao gồm resource chính và các resource liên quan

#### 2.2. Lấy danh sách SubscriptionTopic

**Request:**

```http
GET /fhir/SubscriptionTopic HTTP/1.1
Host: example.org
Accept: application/fhir+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 3,
  "link": [
    {
      "relation": "self",
      "url": "https://example.org/fhir/SubscriptionTopic"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://example.org/fhir/SubscriptionTopic/patient-admission",
      "resource": {
        "resourceType": "SubscriptionTopic",
        "id": "patient-admission",
        "url": "http://example.org/fhir/SubscriptionTopic/patient-admission",
        "status": "active",
        "name": "PatientAdmission",
        // Chi tiết khác
      }
    },
    {
      "fullUrl": "https://example.org/fhir/SubscriptionTopic/medication-dispense",
      "resource": {
        "resourceType": "SubscriptionTopic",
        "id": "medication-dispense",
        // Chi tiết khác
      }
    },
    {
      "fullUrl": "https://example.org/fhir/SubscriptionTopic/lab-result",
      "resource": {
        "resourceType": "SubscriptionTopic",
        "id": "lab-result",
        // Chi tiết khác
      }
    }
  ]
}
```

#### 2.3. Tạo SubscriptionTopic tùy chỉnh

**Request:**

```http
POST /fhir/SubscriptionTopic HTTP/1.1
Host: example.org
Content-Type: application/fhir+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "resourceType": "SubscriptionTopic",
  "status": "active",
  "name": "CriticalLabResults",
  "description": "Thông báo khi có kết quả xét nghiệm ở mức nguy hiểm",
  "resourceTrigger": [
    {
      "description": "Observation mới hoặc cập nhật với cờ nguy hiểm",
      "resourceType": "Observation",
      "supportedInteraction": ["create", "update"],
      "queryCriteria": {
        "current": "status=final&interpretation=H,HH,L,LL"
      }
    }
  ],
  "canFilterBy": [
    {
      "description": "Lọc theo mã xét nghiệm",
      "resource": "Observation",
      "filterParameter": "code"
    }
  ]
}
```

### 3. Event-based Triggers

FHIR R5 giới thiệu cơ chế kích hoạt sự kiện linh hoạt:

#### 3.1. Resource Triggers

```json
"resourceTrigger": [
  {
    "description": "Kích hoạt khi nồng độ creatinine vượt quá 2.0 mg/dL",
    "resourceType": "Observation",
    "supportedInteraction": ["create", "update"],
    "queryCriteria": {
      "current": "code=http://loinc.org|38483-4&value-quantity=gt2.0",
      "requireBoth": false
    }
  }
]
```

Trong R5, bạn có thể xác định chính xác những thay đổi nào sẽ kích hoạt thông báo:

* **supportedInteraction**: Xác định loại tương tác (create, update, delete)
* **queryCriteria**: Điều kiện truy vấn cho trạng thái hiện tại hoặc trước đó của resource

#### 3.2. Event Triggers

```json
"eventTrigger": {
  "description": "Kích hoạt khi có sự kiện nhập viện",
  "event": {
    "coding": [
      {
        "system": "http://example.org/fhir/event-types",
        "code": "patient-admission"
      }
    ]
  },
  "resource": "Encounter"
}
```

R5 hỗ trợ cả kiểu kích hoạt dựa trên sự kiện cụ thể, mở rộng khả năng ngoài những thay đổi resource thông thường.

#### 3.3. Kiểm tra trạng thái kích hoạt với REST API

**Request:**

```http
GET /fhir/Subscription/123/$status HTTP/1.1
Host: example.org
Accept: application/fhir+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json

{
  "resourceType": "SubscriptionStatus",
  "status": "active",
  "type": "status",
  "eventsSinceSubscriptionStart": 42,
  "notificationEvent": [
    {
      "eventNumber": 42,
      "timestamp": "2023-05-18T15:30:22Z",
      "focus": "Encounter/12345",
      "additionalContext": [
        {
          "reference": "Patient/6789"
        }
      ]
    }
  ],
  "subscription": {
    "reference": "Subscription/123"
  },
  "topic": "http://example.org/fhir/SubscriptionTopic/patient-admission"
}
```

### 4. Notification Delivery Methods

R5 mở rộng đáng kể các phương thức gửi thông báo:

#### 4.1. REST-hook (Webhook)

```json
{
  "resourceType": "Subscription",
  "id": "rest-hook-example",
  // Các trường khác
  "channelType": "rest-hook",
  "endpoint": "https://client.example.org/fhir/subscription-notify",
  "header": [
    "Authorization: Bearer secret-token-xyz",
    "X-Source: FHIR-Server"
  ],
  "contentType": "application/fhir+json",
  "content": "full-resource"
}
```

REST-hook là phương thức thông báo phổ biến nhất, sử dụng HTTP POST để gửi thông báo đến một endpoint xác định.

**Ví dụ thông báo gửi đến webhook:**

```http
POST /fhir/subscription-notify HTTP/1.1
Host: client.example.org
Content-Type: application/fhir+json
Authorization: Bearer secret-token-xyz
X-Source: FHIR-Server

{
  "resourceType": "Bundle",
  "type": "history",
  "id": "notification-bundle-123",
  "timestamp": "2023-05-18T16:00:00Z",
  "entry": [
    {
      "fullUrl": "urn:uuid:9876",
      "resource": {
        "resourceType": "SubscriptionStatus",
        "status": "active",
        "type": "notification",
        "eventsSinceSubscriptionStart": 43,
        "subscription": {
          "reference": "Subscription/123"
        },
        "topic": "http://example.org/fhir/SubscriptionTopic/patient-admission",
        "focus": "Encounter/12346"
      },
      "request": {
        "method": "PUT",
        "url": "SubscriptionStatus"
      }
    },
    {
      "fullUrl": "https://example.org/fhir/Encounter/12346",
      "resource": {
        "resourceType": "Encounter",
        "id": "12346",
        "status": "in-progress",
        "class": {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "IMP",
          "display": "inpatient encounter"
        },
        "subject": {
          "reference": "Patient/6790"
        }
        // Các trường khác
      },
      "request": {
        "method": "POST",
        "url": "Encounter"
      }
    }
  ]
}
```

#### 4.2. Email

```json
{
  "resourceType": "Subscription",
  "id": "email-example",
  // Các trường khác
  "channelType": "email",
  "endpoint": "mailto:alerts@clinic.example.org",
  "parameter": [
    {
      "name": "subject",
      "value": "Thông báo bệnh nhân nhập viện"
    }
  ],
  "content": "empty"
}
```

Kênh email cho phép gửi thông báo tới địa chỉ email, với các tham số bổ sung như tiêu đề.

#### 4.3. WebSocket

```json
{
  "resourceType": "Subscription",
  "id": "websocket-example",
  // Các trường khác
  "channelType": "websocket",
  "content": "id-only",
  "parameter": [
    {
      "name": "websocket-criteria",
      "value": "Encounter?status=in-progress"
    }
  ]
}
```

WebSocket cho phép thiết lập kết nối hai chiều liên tục giữa máy khách và máy chủ:

**Thiết lập kết nối WebSocket:**

```http
GET /fhir/connect HTTP/1.1
Host: example.org
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Protocol: wss.fhir.subscription
Sec-WebSocket-Version: 13
```

#### 4.4. FHIR Messaging

```json
{
  "resourceType": "Subscription",
  "id": "message-example",
  // Các trường khác
  "channelType": "message",
  "endpoint": "https://example.org/fhir/endpoint/message-receiver",
  "content": "full-resource"
}
```

Kênh message sử dụng FHIR Messaging paradigm để gửi thông báo.

#### 4.5. Server-Sent Events (SSE)

```json
{
  "resourceType": "Subscription",
  "id": "sse-example",
  // Các trường khác
  "channelType": "sse",
  "content": "full-resource"
}
```

SSE là giao thức một chiều cho phép máy chủ gửi cập nhật đến máy khách qua kết nối HTTP:

**Thiết lập kết nối SSE:**

```http
GET /fhir/subscription/123/$events HTTP/1.1
Host: example.org
Accept: text/event-stream
Cache-Control: no-cache
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Webhook Integration

Webhook là phương thức phổ biến nhất để tích hợp FHIR Subscription. Dưới đây là chi tiết về triển khai và quản lý:

#### 5.1. Thiết lập Webhook Endpoint

Để nhận thông báo, bạn cần thiết lập một HTTP endpoint có thể truy cập từ internet:

```javascript
// Ví dụ sử dụng Node.js và Express
const express = require('express');
const app = express();
app.use(express.json({ type: 'application/fhir+json' }));

app.post('/fhir/subscription-notify', (req, res) => {
  // Xác thực request
  const authHeader = req.headers.authorization;
  if (!validateAuth(authHeader)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Xử lý bundle thông báo
  const bundle = req.body;
  if (bundle.resourceType === 'Bundle' && bundle.type === 'history') {
    // Lấy SubscriptionStatus từ entry đầu tiên
    const status = bundle.entry[0].resource;
    console.log(`Received notification #${status.eventsSinceSubscriptionStart}`);
    
    // Xử lý resource chính (thường là entry thứ hai)
    if (bundle.entry.length > 1) {
      const resource = bundle.entry[1].resource;
      console.log(`New ${resource.resourceType} with ID ${resource.id}`);
      processResource(resource);
    }
    
    // Gửi phản hồi thành công
    return res.status(200).send('OK');
  }
  
  res.status(400).send('Invalid notification format');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});

function processResource(resource) {
  // Xử lý resource theo nhu cầu của ứng dụng
  // Ví dụ: cập nhật cơ sở dữ liệu, gửi thông báo, v.v.
}

function validateAuth(authHeader) {
  // Kiểm tra tính hợp lệ của token xác thực
  return authHeader === 'Bearer secret-token-xyz';
}
```

#### 5.2. Bảo mật Webhook

Bảo mật là yếu tố quan trọng khi triển khai webhook:

1.  **Xác thực**: Sử dụng token trong header để xác thực nguồn gốc của thông báo

    ```json
    "header": [
      "Authorization: Bearer secret-token-xyz"
    ]
    ```
2. **HTTPS**: Luôn sử dụng HTTPS cho endpoint để mã hóa dữ liệu truyền tải
3. **IP Whitelist**: Giới hạn truy cập vào webhook endpoint từ các địa chỉ IP của máy chủ FHIR
4.  **Webhook Signature**: Triển khai chữ ký webhook để xác thực tính toàn vẹn của payload

    ```javascript
    // Kiểm tra chữ ký webhook
    const crypto = require('crypto');

    function verifySignature(payload, signature, secret) {
      const hmac = crypto.createHmac('sha256', secret);
      const digest = hmac.update(JSON.stringify(payload)).digest('hex');
      return crypto.timingSafeEqual(
        Buffer.from(digest),
        Buffer.from(signature)
      );
    }
    ```

#### 5.3. Xử lý lỗi và thử lại

FHIR R5 định nghĩa cơ chế xử lý lỗi và thử lại rõ ràng cho webhook:

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 60
Content-Type: application/fhir+json

{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "throttled",
      "details": {
        "text": "Server hiện đang quá tải, vui lòng thử lại sau 60 giây"
      }
    }
  ]
}
```

Khi webhook endpoint trả về mã lỗi, máy chủ FHIR sẽ thử lại theo chiến lược được cấu hình (ví dụ: thử lại sau khoảng thời gian tăng dần).

#### 5.4. Kiểm tra Webhook

**Test endpoint với REST API:**

```http
POST /fhir/Subscription/123/$test-notification HTTP/1.1
Host: example.org
Content-Type: application/fhir+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "eventNumber",
      "valueUnsignedInt": 1
    }
  ]
}
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "success",
      "valueBoolean": true
    },
    {
      "name": "endpoint-status",
      "valueString": "200 OK"
    },
    {
      "name": "endpoint-response",
      "valueString": "OK"
    }
  ]
}
```

#### 5.5. Giám sát và Logging

Để duy trì hoạt động hiệu quả, cần triển khai giám sát và ghi nhật ký:

**Truy vấn các sự kiện đã gửi:**

```http
GET /fhir/Subscription/123/$events?events-since=10&events-since-criterion=id HTTP/1.1
Host: example.org
Accept: application/fhir+json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "history",
  "entry": [
    {
      "fullUrl": "urn:uuid:67890",
      "resource": {
        "resourceType": "SubscriptionStatus",
        "status": "active",
        "type": "query-event",
        "eventsSinceSubscriptionStart": 15,
        "notificationEvent": [
          {
            "eventNumber": 11,
            "timestamp": "2023-05-17T08:10:12Z",
            "focus": "Encounter/12340"
          },
          // Các sự kiện khác
        ],
        "subscription": {
          "reference": "Subscription/123"
        }
      }
    }
  ]
}
```

### Kết luận

Event-based communication trong FHIR R5 là một cải tiến đáng kể so với các phiên bản trước. Thiết kế mới với SubscriptionTopic, cơ chế kích hoạt linh hoạt và nhiều phương thức gửi thông báo đã mở ra nhiều khả năng mới cho các hệ thống y tế hiện đại.

Với tư cách là Solution Architect, tôi thấy những cải tiến này đặc biệt có giá trị cho các hệ thống phân tán và ứng dụng real-time, cho phép thiết kế các giải pháp phản ứng nhanh với các thay đổi trong dữ liệu y tế.

Trong bài viết tiếp theo của series, chúng ta sẽ khám phá các mẫu thiết kế và best practices khi triển khai event-based communication trong các hệ thống y tế thực tế, với trọng tâm là khả năng mở rộng và bảo mật.
