---
id: cd53c397-00e4-45c4-a1d6-a633ee19e26a
title: 'FHIR Security trong R5'
slug: fhir-security-trong-r5
description: 'Chào các bạn! Hôm nay chúng ta sẽ đi sâu vào chủ đề bảo mật FHIR trong phiên bản mới nhất R5. Bài viết này sẽ giúp bạn hiểu rõ những thay đổi quan trọng về bảo mật trong phiên bản mới, cùng với các hướng dẫn thực tiễn…'
duration_minutes: 39
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 9: Bảo mật & Quyền riêng tư trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Chào các bạn! Hôm nay chúng ta sẽ đi sâu vào chủ đề bảo mật FHIR trong phiên bản mới nhất R5. Bài viết này sẽ giúp bạn hiểu rõ những thay đổi quan trọng về bảo mật trong phiên bản mới, cùng với các hướng dẫn thực tiễn để triển khai hiệu quả.

### Tại sao bảo mật FHIR lại quan trọng?

Trong lĩnh vực y tế, dữ liệu của bệnh nhân là những thông tin nhạy cảm nhất cần được bảo vệ nghiêm ngặt. Không chỉ vì các yêu cầu pháp lý như HIPAA hay GDPR, mà còn vì trách nhiệm đạo đức với bệnh nhân.

Thử tưởng tượng: thông tin về tiền sử bệnh tâm thần, các xét nghiệm HIV, hay các điều trị nhạy cảm của một người bị lộ ra ngoài - hậu quả có thể rất nghiêm trọng, từ kỳ thị xã hội đến mất việc làm.

FHIR đã trở thành tiêu chuẩn phổ biến nhất để trao đổi dữ liệu y tế, và trong R5, các tiêu chuẩn bảo mật đã được nâng cấp đáng kể.

### OAuth 2.0 và OpenID Connect: Nền tảng xác thực và ủy quyền

#### OAuth 2.0 trong FHIR R5: Cơ chế ủy quyền tiêu chuẩn

OAuth 2.0 hoạt động theo nguyên tắc ủy quyền: thay vì chia sẻ mật khẩu, người dùng (Resource Owner) cấp quyền cho ứng dụng (Client) truy cập tài nguyên của họ thông qua một mã truy cập (Access Token).

Hãy xem ví dụ thực tế:

**Trước đây (không sử dụng OAuth):**

1. Bệnh nhân muốn một ứng dụng di động truy cập dữ liệu từ bệnh viện
2. Bệnh nhân phải chia sẻ tên đăng nhập và mật khẩu của cổng thông tin bệnh viện với ứng dụng
3. Ứng dụng có toàn quyền truy cập vào tài khoản của bệnh nhân

**Với OAuth 2.0:**

1. Bệnh nhân chuyển hướng đến trang đăng nhập của bệnh viện
2. Sau khi đăng nhập, bệnh nhân chọn những dữ liệu cụ thể mà ứng dụng được phép truy cập (ví dụ: chỉ đọc kết quả xét nghiệm)
3. Bệnh viện cấp một token cho ứng dụng, token này chỉ có quyền truy cập vào dữ liệu được cho phép

Trong R5, PKCE (Proof Key for Code Exchange) được yêu cầu bắt buộc cho tất cả các ứng dụng để ngăn chặn tấn công đánh cắp mã ủy quyền. Đây là cách PKCE hoạt động:

```
+--------+                                  +---------------+
|        |--(A)-- Tạo code_verifier ------>|   Resource    |
|        |       & code_challenge          |     Owner     |
|        |                                  |  (Bệnh nhân)  |
|        |<-(B)---- Authorization Code ----|               |
|        |                                  +---------------+
| Client |                                  
| (App)  |                                  +---------------+
|        |--(C)-- Authorization Code ------>| Authorization |
|        |        & code_verifier           |     Server    |
|        |                                  | (Bệnh viện)   |
|        |<-(D)----- Access Token ----------|               |
+--------+                                  +---------------+
```

Ví dụ cụ thể về cách triển khai PKCE trong JavaScript:

```javascript
// 1. Tạo code_verifier (một chuỗi ngẫu nhiên)
const codeVerifier = generateRandomString(128);

// 2. Tạo code_challenge bằng cách băm và mã hóa code_verifier
async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  
  return base64UrlEncode(digest);
}

// 3. Gửi code_challenge trong request ủy quyền
const codeChallenge = await generateCodeChallenge(codeVerifier);
const authUrl = `https://auth.hospital.org/authorize?
  response_type=code&
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  code_challenge=${codeChallenge}&
  code_challenge_method=S256&
  scope=patient/Patient.read patient/Observation.read`;

// 4. Lưu code_verifier để sử dụng khi đổi code lấy token
localStorage.setItem('code_verifier', codeVerifier);
```

#### OpenID Connect: Lớp định danh trên OAuth 2.0

OpenID Connect thêm lớp xác thực người dùng vào OAuth 2.0. Trong R5, nó cung cấp ID Token chứa thông tin về người dùng (như ID và vai trò trong hệ thống y tế).

Một ID Token điển hình trong FHIR R5 sẽ có dạng:

```json
{
  "iss": "https://auth.benhvien.vn",
  "sub": "1234567890",
  "aud": "client_id_ung_dung",
  "exp": 1616239022,
  "iat": 1616235422,
  "auth_time": 1616235422,
  "nonce": "n-0S6_WzA2Mj",
  "fhirUser": "Practitioner/bacsi123",
  "profile": {
    "name": "Nguyễn Văn A",
    "given_name": "Văn A",
    "family_name": "Nguyễn",
    "email": "nguyenvana@hospital.org",
    "phone_number": "+84123456789",
    "practitioner_role": "bác sĩ nội khoa"
  }
}
```

### SMART on FHIR: Khung ứng dụng y tế thông minh trong R5

SMART on FHIR là một tiêu chuẩn mở rộng OpenID Connect và OAuth2 cho phạm vi y tế, giúp các ứng dụng tích hợp với hệ thống EMR một cách an toàn.

#### Cải tiến trong SMART App Launch Framework 2.0

SMART on FHIR 2.0 trong R5 giới thiệu nhiều cải tiến quan trọng:

**1. Launch Context Mở rộng**

Trước đây, SMART on FHIR chỉ hỗ trợ ngữ cảnh cho một bệnh nhân. Trong R5, bạn có thể:

```
// Launch URL với nhiều ngữ cảnh
https://app.example.com/launch?iss=https://ehr.hospital.org&launch=xyz123

// Token response chứa nhiều ngữ cảnh
{
  "access_token": "access_token_value",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "patient/*.read user/*.* launch",
  "patient": "patient123",
  "encounter": "encounter456",
  "practitioner": "practitioner789",
  "need_patient_banner": true,
  "smart_style_url": "https://ehr.hospital.org/smart-style.json"
}
```

**2. Backend Services Authentication**

SMART on FHIR 2.0 cải thiện xác thực cho các dịch vụ phía máy chủ:

```javascript
// 1. Tạo JWT để yêu cầu token
const header = {
  "alg": "RS384",
  "kid": "key-id-1",
  "typ": "JWT"
};

const now = Math.floor(Date.now() / 1000);
const payload = {
  "iss": "https://vaccine-service.example.com",
  "sub": "https://vaccine-service.example.com",
  "aud": "https://authorize.hospital.org/token",
  "exp": now + 300,
  "jti": "random-non-reusable-jwt-id-123"
};

const jwt = signJWT(header, payload, privateKey);

// 2. Gửi yêu cầu token
const tokenResponse = await fetch("https://authorize.hospital.org/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
    "grant_type": "client_credentials",
    "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    "client_assertion": jwt,
    "scope": "system/Patient.read system/Immunization.read"
  })
});
```

Ví dụ API request sử dụng token:

```javascript
const data = await fetch("https://fhir.hospital.org/fhir/Patient?_count=10", {
  headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Accept": "application/fhir+json"
  }
});
```

### JSON Web Tokens (JWT): Xương sống bảo mật trong FHIR R5

JWT là định dạng compact, khép kín để truyền thông tin một cách an toàn giữa các bên. Trong FHIR R5, JWT đóng vai trò quan trọng trong cả xác thực và ủy quyền.

#### Cấu trúc JWT

JWT gồm ba phần: Header, Payload, và Signature, phân tách bởi dấu chấm:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Sau khi giải mã base64:

**Header:**

```json
{
  "alg": "HS256",  // Thuật toán mã hóa
  "typ": "JWT"     // Loại token
}
```

**Payload:**

```json
{
  "sub": "1234567890",           // Subject (người dùng)
  "name": "John Doe",            // Thông tin người dùng
  "iat": 1516239022,             // Thời điểm phát hành
  "exp": 1516242622,             // Thời điểm hết hạn
  "scope": "patient/*.read",     // Phạm vi quyền truy cập FHIR
  "fhirUser": "Practitioner/123" // Định danh người dùng trong FHIR
}
```

**Signature:**

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

#### JWT Claims FHIR-specific trong R5

FHIR R5 định nghĩa một số claims đặc biệt trong JWT:

* **fhirUser**: URI tham chiếu đến resource FHIR của người dùng
* **patient**: ID bệnh nhân trong ngữ cảnh hiện tại
* **encounter**: ID cuộc thăm khám trong ngữ cảnh hiện tại
* **scope**: Danh sách các quyền được cấp (theo cú pháp SMART)

#### Xác thực JWT an toàn

Mã Java kiểm tra JWT:

```java
public Claims validateToken(String token) throws JwtException {
    try {
        // 1. Phân tích và xác thực token
        Jws<Claims> jws = Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .requireIssuer("https://auth.hospital.org")  // Kiểm tra issuer
            .requireAudience("https://fhir-api.hospital.org")  // Kiểm tra audience
            .setAllowedClockSkewSeconds(30)  // Cho phép sai lệch thời gian 30s
            .build()
            .parseClaimsJws(token);
        
        Claims claims = jws.getBody();
        
        // 2. Kiểm tra thời hạn token
        Date now = new Date();
        if (claims.getExpiration().before(now)) {
            throw new ExpiredJwtException(null, claims, "Token đã hết hạn");
        }
        
        // 3. Kiểm tra phạm vi quyền
        String scope = claims.get("scope", String.class);
        if (scope == null || scope.isEmpty()) {
            throw new JwtException("Token không có phạm vi quyền");
        }
        
        return claims;
    } catch (JwtException e) {
        logger.error("Lỗi xác thực JWT: " + e.getMessage());
        throw e;
    }
}
```

### Scopes và Permissions: Kiểm soát quyền chi tiết

Một trong những cải tiến quan trọng nhất trong R5 là hệ thống phân quyền chi tiết hơn.

#### Resource-Specific Scopes

SMART on FHIR và FHIR R5 giới thiệu cú pháp mới cho scope:

```
[context]/[resource-type].[permission]
```

Ví dụ:

* **patient/Patient.read**: Đọc dữ liệu của resource Patient trong phạm vi bệnh nhân hiện tại
* **user/Observation.write**: Tạo/cập nhật Observations trong phạm vi người dùng hiện tại
* **system/AllergyIntolerance.c**: Chỉ có quyền tạo (create) AllergyIntolerance, không đọc hoặc sửa

#### Compartment-Based Scopes

Compartment là tập hợp các resource liên quan đến một đối tượng cụ thể (bệnh nhân, bác sĩ, v.v.). FHIR R5 cho phép định nghĩa scope theo compartment:

```
patient/*.read       // Đọc TẤT CẢ dữ liệu liên quan đến bệnh nhân hiện tại
patient/*.*          // Toàn quyền với dữ liệu của bệnh nhân hiện tại
user/patient.*.read  // Chỉ đọc dữ liệu của bệnh nhân trong phạm vi người dùng
```

#### Triển khai hệ thống phân quyền

Dưới đây là một ví dụ thực tế về triển khai hệ thống phân quyền trong FHIR R5 với Java:

```java
@Component
public class FHIRAuthorizationInterceptor extends InterceptorAdapter {
    
    @Override
    public boolean incomingRequestPostProcessed(RequestDetails theRequestDetails, HttpServletRequest theRequest, HttpServletResponse theResponse) throws AuthenticationException {
        try {
            // 1. Lấy token từ header
            String authHeader = theRequestDetails.getHeader("Authorization");
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                throw new AuthenticationException("Không tìm thấy token");
            }
            
            String token = authHeader.substring(7);
            
            // 2. Xác thực token và lấy claims
            Claims claims = tokenService.validateToken(token);
            
            // 3. Lấy thông tin về request FHIR
            String resourceType = theRequestDetails.getResourceName();
            RestOperationTypeEnum operation = theRequestDetails.getRestOperationType();
            
            // 4. Lấy scope từ token
            String scopeString = claims.get("scope", String.class);
            Set<String> scopes = new HashSet<>(Arrays.asList(scopeString.split(" ")));
            
            // 5. Xác định context (patient, user, system)
            String context = determineContext(claims);
            
            // 6. Kiểm tra quyền truy cập
            boolean hasPermission = checkPermission(context, resourceType, operation, scopes);
            
            if (!hasPermission) {
                throw new AuthenticationException("Không đủ quyền truy cập");
            }
            
            // 7. Thêm thông tin người dùng vào request
            theRequestDetails.setAttribute("fhirUser", claims.get("fhirUser", String.class));
            theRequestDetails.setAttribute("userContext", context);
            
            return true;
            
        } catch (Exception e) {
            throw new AuthenticationException("Lỗi xác thực: " + e.getMessage());
        }
    }
    
    private String determineContext(Claims claims) {
        if (claims.containsKey("patient")) {
            return "patient";
        } else if (claims.containsKey("fhirUser")) {
            return "user";
        } else {
            return "system";
        }
    }
    
    private boolean checkPermission(String context, String resourceType, RestOperationTypeEnum operation, Set<String> scopes) {
        // Ánh xạ CRUD operation sang quyền SMART
        String permission = mapOperationToPermission(operation);
        
        // Kiểm tra các mức quyền từ rộng đến hẹp
        String[] scopePatterns = {
            context + "/*.*",                   // Toàn quyền trong context
            context + "/*." + permission,       // Quyền cụ thể trên mọi resource
            context + "/" + resourceType + ".*", // Toàn quyền trên resource cụ thể
            context + "/" + resourceType + "." + permission // Quyền cụ thể trên resource cụ thể
        };
        
        for (String pattern : scopePatterns) {
            if (scopes.contains(pattern)) {
                return true;
            }
        }
        
        return false;
    }
    
    private String mapOperationToPermission(RestOperationTypeEnum operation) {
        switch (operation) {
            case CREATE:
                return "c";
            case UPDATE:
                return "u";
            case DELETE:
                return "d";
            case READ:
            case VREAD:
            case SEARCH_TYPE:
            case HISTORY_TYPE:
            case HISTORY_INSTANCE:
                return "read";
            default:
                return "all";
        }
    }
}
```

### Audit Logging: Giám sát và truy vết trong FHIR R5

Audit logging là quá trình ghi lại các hoạt động trong hệ thống để theo dõi, phát hiện sự cố và đảm bảo tuân thủ. FHIR R5 cải thiện đáng kể resource AuditEvent.

#### AuditEvent trong R5

Cấu trúc AuditEvent trong R5 được thiết kế để dễ dàng truy vấn và phân tích:

```json
{
  "resourceType": "AuditEvent",
  "id": "audit-patient-access-00001",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Bác sĩ Nguyễn Văn A truy cập hồ sơ của bệnh nhân Trần Thị B</div>"
  },
  "recorded": "2023-03-15T15:30:10+07:00",
  "type": {
    "system": "http://terminology.hl7.org/CodeSystem/audit-event-type",
    "code": "rest",
    "display": "RESTful Operation"
  },
  "action": "R",
  "outcome": "0",
  "outcomeDesc": "Thành công",
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/security-role-type",
            "code": "humanuser",
            "display": "human user"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/bacsi-001",
        "display": "Nguyễn Văn A"
      },
      "requestor": true,
      "role": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
              "code": "PROV",
              "display": "healthcare provider"
            }
          ]
        }
      ],
      "altId": "BacSi_NVA",
      "network": {
        "address": "192.168.0.1",
        "type": "2"
      }
    }
  ],
  "source": {
    "observer": {
      "reference": "Device/fhir-server-001",
      "display": "FHIR Server"
    },
    "type": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
        "code": "3",
        "display": "Web Server"
      }
    ]
  },
  "entity": [
    {
      "what": {
        "reference": "Patient/patient-001",
        "display": "Trần Thị B"
      },
      "role": {
        "system": "http://terminology.hl7.org/CodeSystem/object-role",
        "code": "1",
        "display": "Patient"
      },
      "description": "Truy cập thông tin bệnh nhân"
    }
  ]
}
```

#### Triển khai Audit Logging tự động

Dưới đây là cách triển khai tự động hóa audit logging trong FHIR R5:

```java
@Component
public class AuditInterceptor extends ServerInterceptorAdapter {
    
    @Autowired
    private IFhirSystemDao<AuditEvent, ?> auditEventDao;
    
    @Override
    public void incomingRequestPreHandled(RequestDetails theRequest) {
        // Bỏ qua các request metadata
        if (theRequest.getRequestPath().contains("metadata")) {
            return;
        }
        
        // Tạo AuditEvent
        AuditEvent auditEvent = new AuditEvent();
        
        // Thiết lập thời gian
        auditEvent.setRecorded(new Date());
        
        // Thiết lập loại sự kiện
        AuditEvent.AuditEventType eventType = new AuditEvent.AuditEventType();
        Coding typeCoding = new Coding();
        typeCoding.setSystem("http://terminology.hl7.org/CodeSystem/audit-event-type");
        typeCoding.setCode("rest");
        typeCoding.setDisplay("RESTful Operation");
        eventType.addCoding(typeCoding);
        auditEvent.setType(eventType);
        
        // Thiết lập hành động (C,R,U,D)
        switch (theRequest.getRestOperationType()) {
            case CREATE:
                auditEvent.setAction(AuditEvent.AuditEventAction.C);
                break;
            case UPDATE:
                auditEvent.setAction(AuditEvent.AuditEventAction.U);
                break;
            case DELETE:
                auditEvent.setAction(AuditEvent.AuditEventAction.D);
                break;
            case READ:
            case VREAD:
            case SEARCH_TYPE:
            case HISTORY_TYPE:
                auditEvent.setAction(AuditEvent.AuditEventAction.R);
                break;
            default:
                auditEvent.setAction(AuditEvent.AuditEventAction.E);
                break;
        }
        
        // Thiết lập agent (người thực hiện)
        AuditEvent.AuditEventAgentComponent agent = new AuditEvent.AuditEventAgentComponent();
        agent.setRequestor(true);
        
        // Thông tin người dùng từ token
        String fhirUser = (String) theRequest.getAttribute("fhirUser");
        if (fhirUser != null) {
            Reference userRef = new Reference();
            userRef.setReference(fhirUser);
            agent.setWho(userRef);
        }
        
        // IP của người dùng
        AuditEvent.AuditEventAgentNetworkComponent network = new AuditEvent.AuditEventAgentNetworkComponent();
        network.setAddress(theRequest.getServletRequest().getRemoteAddr());
        network.setType(AuditEvent.AuditEventAgentNetworkType._2);
        agent.setNetwork(network);
        
        auditEvent.addAgent(agent);
        
        // Thiết lập source (nguồn)
        AuditEvent.AuditEventSourceComponent source = new AuditEvent.AuditEventSourceComponent();
        Reference sourceRef = new Reference();
        sourceRef.setReference("Device/fhir-server");
        source.setObserver(sourceRef);
        
        Coding sourceType = new Coding();
        sourceType.setSystem("http://terminology.hl7.org/CodeSystem/security-source-type");
        sourceType.setCode("3");
        sourceType.setDisplay("Web Server");
        source.addType(sourceType);
        
        auditEvent.setSource(source);
        
        // Thiết lập entity (đối tượng tác động)
        if (theRequest.getResourceName() != null && theRequest.getId() != null) {
            AuditEvent.AuditEventEntityComponent entity = new AuditEvent.AuditEventEntityComponent();
            Reference whatRef = new Reference();
            whatRef.setReference(theRequest.getResourceName() + "/" + theRequest.getId());
            entity.setWhat(whatRef);
            auditEvent.addEntity(entity);
        }
        
        // Lưu AuditEvent vào cơ sở dữ liệu
        auditEventDao.create(auditEvent);
    }
}
```

#### Giám sát và phân tích logs

Để tận dụng tối đa audit logs, bạn nên:

1. **Thiết lập cảnh báo** cho các mẫu truy cập bất thường:
   * Truy cập nhiều hồ sơ bệnh nhân trong thời gian ngắn
   * Truy cập vào giờ bất thường
   * Truy cập từ địa điểm bất thường
2.  **Tích hợp với hệ thống SIEM** (Security Information and Event Management):

    ```
    FHIR Server --> Audit Logs --> Log Forwarder --> SIEM System
                                    (Logstash)        (ELK Stack)
    ```
3.  **Phân tích xu hướng** để phát hiện sớm các vấn đề:

    ```sql
    -- Truy vấn để tìm người dùng truy cập nhiều bệnh nhân trong 1 giờ
    SELECT agent.who.reference, COUNT(DISTINCT entity.what.reference) as patient_count
    FROM AuditEvent
    WHERE recorded > DATEADD(HOUR, -1, GETDATE())
      AND entity.what.reference LIKE 'Patient/%'
    GROUP BY agent.who.reference
    HAVING COUNT(DISTINCT entity.what.reference) > 20
    ```

### Bảo mật FHIR Subscriptions trong R5

FHIR Subscriptions cho phép các ứng dụng đăng ký nhận thông báo khi có sự thay đổi về dữ liệu. R5 chuyển từ mô hình REST hook sang WebSocket và kênh dựa trên topic.

#### Bảo mật Subscription Endpoints

Ví dụ về mã tạo subscription an toàn:

```java
public Subscription createSecureSubscription(String criteria, String endpoint, String secret) {
    // 1. Tạo Subscription
    Subscription subscription = new Subscription();
    subscription.setStatus(Subscription.SubscriptionStatus.REQUESTED);
    
    // 2. Thiết lập tiêu chí (resource type + filters)
    subscription.setCriteria(criteria);
    
    // 3. Thiết lập kênh
    Subscription.SubscriptionChannelComponent channel = new Subscription.SubscriptionChannelComponent();
    channel.setType(Subscription.SubscriptionChannelType.RESTHOOK);
    channel.setEndpoint(endpoint);
    
    // 4. Thiết lập payload
    channel.setPayload(Subscription.ContentType.fromCode("application/fhir+json"));
    
    // 5. Thiết lập bảo mật
    channel.addHeader("Authorization: Bearer " + generateEndpointToken(endpoint, secret));
    
    // 6. Thiết lập mã hóa nếu cần
    if (endpoint.startsWith("https")) {
        // Sử dụng HTTPS cho bảo mật
        channel.addHeader("Content-Type: application/fhir+json");
    } else {
        throw new IllegalArgumentException("Endpoint phải sử dụng HTTPS");
    }
    
    subscription.setChannel(channel);
    
    return subscription;
}

private String generateEndpointToken(String endpoint, String secret) {
    // Tạo JWT token để xác thực endpoint khi nhận notification
    try {
        long now = System.currentTimeMillis() / 1000;
        
        // Tạo JWT với thông tin về subscription endpoint
        Map<String, Object> claims = new HashMap<>();
        claims.put("iss", "https://fhir-server.hospital.org");
        claims.put("sub", endpoint);
        claims.put("aud", endpoint);
        claims.put("exp", now + 31536000); // Hết hạn sau 1 năm
        claims.put("iat", now);
        claims.put("purpose", "subscription_authentication");
        
        // Ký JWT bằng secret
        return Jwts.builder()
            .setClaims(claims)
            .signWith(Keys.hmacShaKeyFor(secret.getBytes()))
            .compact();
    } catch (Exception e) {
        throw new RuntimeException("Không thể tạo token: " + e.getMessage());
    }
}
```

#### Xác thực Subscription Notifications

Khi một server FHIR gửi thông báo đến subscription endpoint, client cần xác thực rằng thông báo đến từ server hợp lệ:

```java
@RestController
public class SubscriptionNotificationController {
    
    @Value("${subscription.webhook.secret}")
    private String webhookSecret;
    
    @PostMapping("/fhir/subscription/notify")
    public ResponseEntity<String> handleNotification(
            @RequestBody String payload,
            @RequestHeader("X-Subscription-ID") String subscriptionId,
            @RequestHeader("Authorization") String authHeader) {
        
        try {
            // 1. Xác thực token từ header
            if (!authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(401).body("Token không hợp lệ");
            }
            
            String token = authHeader.substring(7);
            validateToken(token);
            
            // 2. Phân tích nội dung thông báo
            Bundle bundle = FhirContext.forR5().newJsonParser().parseResource(Bundle.class, payload);
            
            // 3. Xử lý các resource đã thay đổi
            for (Bundle.BundleEntryComponent entry : bundle.getEntry()) {
                Resource resource = entry.getResource();
                processResourceChange(resource);
            }
            
            return ResponseEntity.ok("Notification processed successfully");
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Lỗi xác thực: " + e.getMessage());
        }
    }
    
    private void validateToken(String token) throws Exception {
        try {
            // Giải mã và xác thực JWT
            Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(webhookSecret.getBytes()))
                .requireIssuer("https://fhir-server.hospital.org")
                .requireAudience("https://client-app.example.com/fhir/subscription/notify")
                .build()
                .parseClaimsJws(token);
            
            // Kiểm tra thời hạn
            Date now = new Date();
            if (claims.getBody().getExpiration().before(now)) {
                throw new Exception("Token hết hạn");
            }
            
            String purpose = claims.getBody().get("purpose", String.class);
            if (!"subscription_authentication".equals(purpose)) {
                throw new Exception("Token không được sử dụng cho subscription");
            }
        } catch (Exception e) {
            throw new Exception("Token không hợp lệ: " + e.getMessage());
        }
    }
    
    private void processResourceChange(Resource resource) {
        // Logic xử lý resource thay đổi
        // Ví dụ: thêm vào hàng đợi, cập nhật cache, gửi thông báo, v.v.
        String resourceType = resource.getResourceType().name();
        String resourceId = resource.getId();
        
        logger.info("Nhận thông báo thay đổi: {} {}", resourceType, resourceId);
        
        // Xử lý tùy theo loại resource
        if (resourceType.equals("Patient")) {
            updatePatientCache((Patient) resource);
        } else if (resourceType.equals("Observation")) {
            processNewObservation((Observation) resource);
        }
    }
}
```

#### Topic-Based Security trong R5

R5 giới thiệu khái niệm Topic-Based Subscriptions, cho phép kiểm soát chi tiết hơn:

```java
// Tạo subscription dựa trên topic thay vì criteria
public Subscription createTopicSubscription(String topic, String endpoint) {
    Subscription subscription = new Subscription();
    subscription.setStatus(Subscription.SubscriptionStatus.REQUESTED);
    
    // Sử dụng topic thay vì criteria
    CanonicalType topicReference = new CanonicalType();
    topicReference.setValue("http://example.org/fhir/SubscriptionTopic/" + topic);
    subscription.setTopic(topicReference);
    
    // Thiết lập filter (tùy chọn)
    if ("patient-demographics".equals(topic)) {
        Subscription.SubscriptionFilterByComponent filter = new Subscription.SubscriptionFilterByComponent();
        filter.setResourceType("Patient");
        filter.setSearchModifier(Subscription.FilterParameterModifier.EQUAL);
        filter.setSearchParamName("identifier");
        filter.setValue("MRN|12345");
        subscription.addFilterBy(filter);
    }
    
    // Thiết lập kênh
    Subscription.SubscriptionChannelComponent channel = new Subscription.SubscriptionChannelComponent();
    channel.setType(Subscription.SubscriptionChannelType.WEBSOCKET);
    channel.setEndpoint(endpoint);
    
    subscription.setChannel(channel);
    
    return subscription;
}
```

### Consent Management: Quản lý sự đồng ý của bệnh nhân

Trong R5, resource Consent được cải tiến để quản lý quyền riêng tư và sự đồng ý tốt hơn. Đây là ví dụ về một Consent trong R5:

```json
{
  "resourceType": "Consent",
  "id": "consent-001",
  "status": "active",
  "scope": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/consentscope",
        "code": "patient-privacy"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "IDSCL",
          "display": "information disclosure"
        }
      ]
    }
  ],
  "patient": {
    "reference": "Patient/patient-001",
    "display": "Nguyễn Văn X"
  },
  "dateTime": "2023-03-15T00:00:00Z",
  "performer": [
    {
      "reference": "Patient/patient-001"
    }
  ],
  "organization": [
    {
      "reference": "Organization/hospital-001",
      "display": "Bệnh viện ABC"
    }
  ],
  "sourceAttachment": {
    "title": "Biểu mẫu đồng ý điện tử",
    "url": "https://hospital.org/consent-forms/privacy-001.pdf"
  },
  "policy": [
    {
      "authority": "https://hospital.org/privacy-policy",
      "uri": "https://hospital.org/privacy-policy/v2023"
    }
  ],
  "provision": {
    "type": "permit",
    "period": {
      "start": "2023-03-15T00:00:00Z",
      "end": "2024-03-15T00:00:00Z"
    },
    "actor": [
      {
        "role": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-RoleClass",
              "code": "PROV",
              "display": "healthcare provider"
            }
          ]
        },
        "reference": {
          "reference": "Practitioner/bacsi-001",
          "display": "Bác sĩ Nguyễn Văn A"
        }
      }
    ],
    "action": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/consentaction",
            "code": "access",
            "display": "Access"
          }
        ]
      },
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/consentaction",
            "code": "correct",
            "display": "Correct"
          }
        ]
      }
    ],
    "class": [
      {
        "system": "http://hl7.org/fhir/resource-types",
        "code": "Observation",
        "display": "Observation"
      },
      {
        "system": "http://hl7.org/fhir/resource-types",
        "code": "MedicationStatement",
        "display": "MedicationStatement"
      }
    ]
  }
}
```

#### Triển khai Consent Enforcement

Dưới đây là cách triển khai kiểm tra đồng ý trong FHIR R5:

```java
@Component
public class ConsentEnforcementInterceptor extends InterceptorAdapter {
    
    @Autowired
    private IFhirResourceDao<Consent> consentDao;
    
    @Override
    public boolean incomingRequestPreHandled(RequestDetails theRequest) {
        try {
            // 1. Lấy thông tin người dùng từ token
            String fhirUser = (String) theRequest.getAttribute("fhirUser");
            if (fhirUser == null) {
                return true; // Không có thông tin người dùng, bỏ qua kiểm tra
            }
            
            // 2. Lấy thông tin bệnh nhân từ tham số hoặc resource
            String patientId = extractPatientId(theRequest);
            if (patientId == null) {
                return true; // Không liên quan đến bệnh nhân cụ thể
            }
            
            // 3. Lấy loại resource và hành động
            String resourceType = theRequest.getResourceName();
            String action = mapRestOperationToConsentAction(theRequest.getRestOperationType());
            
            // 4. Tìm kiếm các Consent liên quan
            SearchParameterMap map = new SearchParameterMap();
            map.add("patient", new ReferenceParam("Patient/" + patientId));
            map.add("status", new TokenParam("active"));
            map.add("scope", new TokenParam("http://terminology.hl7.org/CodeSystem/consentscope", "patient-privacy"));
            
            IBundleProvider results = consentDao.search(map);
            List<IBaseResource> consents = results.getResources(0, results.size());
            
            // 5. Kiểm tra mỗi Consent
            boolean hasApplicableConsent = false;
            boolean isPermitted = false;
            
            for (IBaseResource res : consents) {
                Consent consent = (Consent) res;
                
                // Kiểm tra xem Consent có áp dụng cho tình huống này không
                if (isConsentApplicable(consent, fhirUser, resourceType, action)) {
                    hasApplicableConsent = true;
                    
                    // Kiểm tra quyết định cho phép/từ chối
                    if (evaluateConsentDecision(consent, fhirUser, resourceType, action)) {
                        isPermitted = true;
                        break;
                    }
                }
            }
            
            // 6. Xử lý kết quả kiểm tra
            if (hasApplicableConsent && !isPermitted) {
                throw new AuthenticationException("Bệnh nhân không đồng ý với hoạt động này");
            }
            
            return true;
        } catch (Exception e) {
            if (e instanceof AuthenticationException) {
                throw (AuthenticationException) e;
            }
            return true; // Trong trường hợp lỗi, cho phép truy cập (tùy theo chính sách)
        }
    }
    
    private String extractPatientId(RequestDetails theRequest) {
        // Lấy patientId từ tham số tìm kiếm
        String patientParam = theRequest.getParameters().get("patient");
        if (patientParam != null) {
            return patientParam;
        }
        
        // Nếu là resource Patient
        if ("Patient".equals(theRequest.getResourceName()) && theRequest.getId() != null) {
            return theRequest.getId();
        }
        
        // Từ compartment
        String compartment = theRequest.getCompartmentName();
        if ("Patient".equals(compartment) && theRequest.getCompartmentId() != null) {
            return theRequest.getCompartmentId();
        }
        
        return null;
    }
    
    private String mapRestOperationToConsentAction(RestOperationTypeEnum operation) {
        switch (operation) {
            case READ:
            case VREAD:
            case SEARCH_TYPE:
            case HISTORY_TYPE:
            case HISTORY_INSTANCE:
                return "access";
            case CREATE:
                return "create";
            case UPDATE:
                return "correct";
            case DELETE:
                return "delete";
            default:
                return "access";
        }
    }
    
    private boolean isConsentApplicable(Consent consent, String fhirUser, String resourceType, String action) {
        // Kiểm tra thời hạn
        Consent.ProvisionComponent provision = consent.getProvision();
        if (provision == null) {
            return false;
        }
        
        Date now = new Date();
        if (provision.getPeriod() != null) {
            Date start = provision.getPeriod().getStart();
            Date end = provision.getPeriod().getEnd();
            
            if ((start != null && now.before(start)) || 
                (end != null && now.after(end))) {
                return false;
            }
        }
        
        // Kiểm tra actor (người thực hiện)
        boolean actorMatch = false;
        if (provision.getActor().isEmpty()) {
            actorMatch = true; // Nếu không chỉ định actor, áp dụng cho tất cả
        } else {
            for (Consent.ProvisionActorComponent actor : provision.getActor()) {
                if (actor.getReference() != null && 
                    fhirUser.equals(actor.getReference().getReference())) {
                    actorMatch = true;
                    break;
                }
            }
        }
        if (!actorMatch) {
            return false;
        }
        
        // Kiểm tra resource type
        boolean resourceMatch = false;
        if (provision.getClass_().isEmpty()) {
            resourceMatch = true; // Nếu không chỉ định class, áp dụng cho tất cả
        } else {
            for (Coding classCoding : provision.getClass_()) {
                if ("http://hl7.org/fhir/resource-types".equals(classCoding.getSystem()) && 
                    resourceType.equals(classCoding.getCode())) {
                    resourceMatch = true;
                    break;
                }
            }
        }
        if (!resourceMatch) {
            return false;
        }
        
        // Kiểm tra hành động
        boolean actionMatch = false;
        if (provision.getAction().isEmpty()) {
            actionMatch = true; // Nếu không chỉ định action, áp dụng cho tất cả
        } else {
            for (CodeableConcept actionConcept : provision.getAction()) {
                for (Coding actionCoding : actionConcept.getCoding()) {
                    if ("http://terminology.hl7.org/CodeSystem/consentaction".equals(actionCoding.getSystem()) && 
                        action.equals(actionCoding.getCode())) {
                        actionMatch = true;
                        break;
                    }
                }
                if (actionMatch) break;
            }
        }
        
        return actionMatch;
    }
    
    private boolean evaluateConsentDecision(Consent consent, String fhirUser, String resourceType, String action) {
        // Xác định quyết định cho phép/từ chối
        if (consent.getProvision() != null) {
            return "permit".equals(consent.getProvision().getType().toCode());
        }
        
        return false; // Mặc định từ chối nếu không có provision
    }
}
```

### Tiêu chuẩn mã hóa và bảo mật truyền thông

#### TLS và HTTPS

FHIR R5 yêu cầu tất cả giao tiếp phải được mã hóa bằng TLS 1.2 trở lên. Dưới đây là cấu hình Spring Boot cho HTTPS:

```java
@Configuration
public class HttpsConfig {
    
    @Bean
    public ServletWebServerFactory servletContainer() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory() {
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint securityConstraint = new SecurityConstraint();
                securityConstraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection collection = new SecurityCollection();
                collection.addPattern("/*");
                securityConstraint.addCollection(collection);
                context.addConstraint(securityConstraint);
            }
        };
        tomcat.addAdditionalTomcatConnectors(httpToHttpsRedirectConnector());
        return tomcat;
    }
    
    private Connector httpToHttpsRedirectConnector() {
        Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
        connector.setScheme("http");
        connector.setPort(8080);
        connector.setSecure(false);
        connector.setRedirectPort(8443);
        return connector;
    }
}
```

Và cấu hình trong `application.properties`:

```properties
server.port=8443
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=your-password
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=tomcat
server.ssl.enabled=true
```

#### Bảo mật API Endpoints

Spring Security có thể được sử dụng để bảo vệ các endpoint FHIR:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/fhir/metadata").permitAll() // Cho phép truy cập không xác thực vào capability statement
                .antMatchers("/fhir/**").authenticated() // Yêu cầu xác thực cho tất cả các endpoint FHIR khác
                .and()
            .oauth2ResourceServer()
                .jwt()
                .jwtAuthenticationConverter(fhirJwtAuthenticationConverter()) // Chuyển đổi JWT thành Authentication
                .and()
            .and()
            .csrf().disable() // FHIR API thường sử dụng Bearer token và không cần CSRF
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS); // RESTful API nên stateless
    }
    
    @Bean
    public Converter<Jwt, AbstractAuthenticationToken> fhirJwtAuthenticationConverter() {
        return new Converter<Jwt, AbstractAuthenticationToken>() {
            @Override
            public AbstractAuthenticationToken convert(Jwt jwt) {
                Map<String, Object> claims = jwt.getClaims();
                
                // Lấy scope từ token
                String scopeString = (String) claims.getOrDefault("scope", "");
                Collection<GrantedAuthority> authorities = Arrays.stream(scopeString.split(" "))
                        .map(scope -> new SimpleGrantedAuthority("SCOPE_" + scope))
                        .collect(Collectors.toList());
                
                // Lấy thông tin FHIR user
                String fhirUser = (String) claims.getOrDefault("fhirUser", "");
                
                // Tạo đối tượng xác thực với các quyền từ scope
                FhirUserAuthenticationToken auth = new FhirUserAuthenticationToken(
                        authorities, 
                        jwt, 
                        fhirUser);
                
                return auth;
            }
        };
    }
    
    // Lớp Authentication tùy chỉnh để lưu thông tin FHIR user
    public static class FhirUserAuthenticationToken extends JwtAuthenticationToken {
        private final String fhirUser;
        
        public FhirUserAuthenticationToken(Collection<? extends GrantedAuthority> authorities, Jwt jwt, String fhirUser) {
            super(jwt, authorities);
            this.fhirUser = fhirUser;
        }
        
        public String getFhirUser() {
            return fhirUser;
        }
    }
}
```

#### Kiểm soát lưu lượng và DDoS protection

Spring Boot có thể được tích hợp với Bucket4j để kiểm soát tốc độ:

```java
@Configuration
public class RateLimitConfig {
    
    @Bean
    public Bucket createBucket() {
        // Cho phép 100 request mỗi phút
        Bandwidth limit = Bandwidth.classic(100, Refill.greedy(100, Duration.ofMinutes(1)));
        return Bucket4j.builder().addLimit(limit).build();
    }
}

@Component
public class RateLimitInterceptor extends HandlerInterceptorAdapter {
    
    @Autowired
    private Bucket bucket;
    
    // Cache để lưu trữ buckets theo IP
    private ConcurrentHashMap<String, Bucket> buckets = new ConcurrentHashMap<>();
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // Lấy IP của client
        String ip = getClientIP(request);
        
        // Lấy hoặc tạo bucket cho IP này
        Bucket tokenBucket = buckets.computeIfAbsent(ip, k -> {
            // Tạo bucket mới cho IP này (10 request/phút)
            Bandwidth limit = Bandwidth.classic(10, Refill.intervally(10, Duration.ofMinutes(1)));
            return Bucket4j.builder().addLimit(limit).build();
        });
        
        // Kiểm tra và trừ token
        ConsumptionProbe probe = tokenBucket.tryConsumeAndReturnRemaining(1);
        if (probe.isConsumed()) {
            // Thêm headers để client biết còn bao nhiêu request
            response.addHeader("X-Rate-Limit-Remaining", String.valueOf(probe.getRemainingTokens()));
            return true;
        } else {
            // Vượt quá giới hạn
            response.setStatus(429); // Too Many Requests
            response.addHeader("X-Rate-Limit-Retry-After-Seconds", 
                               String.valueOf(TimeUnit.NANOSECONDS.toSeconds(probe.getNanosToWaitForRefill())));
            response.getWriter().append("Rate limit exceeded. Try again later.");
            return false;
        }
    }
    
    private String getClientIP(HttpServletRequest request) {
        String xfHeader = request.getHeader("X-Forwarded-For");
        if (xfHeader == null) {
            return request.getRemoteAddr();
        }
        return xfHeader.split(",")[0];
    }
}
```

### Thực tiễn triển khai bảo mật FHIR R5 toàn diện

Dưới đây là một số thực tiễn tốt nhất khi triển khai bảo mật cho FHIR R5:

#### 1. Kiến trúc bảo mật nhiều lớp

```
+------------------------+         +-------------------------+
| CLIENT                 |         | SERVER                  |
|                        |         |                         |
| +--------------------+ |         | +-------------------+   |
| | Authn/Authz Logic  | |<------->| | API Gateway       |   |
| +--------------------+ |         | | - TLS Termination |   |
| | Token Management   | |         | | - Rate Limiting   |   |
| +--------------------+ |         | | - DDoS Protection |   |
| | Secure Storage     | |         | +-------------------+   |
| +--------------------+ |         |          |              |
+------------------------+         |          v              |
                                   | +-------------------+   |
                                   | | Identity Provider |   |
                                   | | - Authentication  |   |
                                   | | - Token Issuance  |   |
                                   | +-------------------+   |
                                   |          |              |
                                   |          v              |
                                   | +-------------------+   |
                                   | | FHIR Server       |   |
                                   | | - Authorization   |   |
                                   | | - Validation      |   |
                                   | | - Audit Logging   |   |
                                   | +-------------------+   |
                                   |          |              |
                                   |          v              |
                                   | +-------------------+   |
                                   | | Database         |   |
                                   | | - Encryption     |   |
                                   | | - Backup/DR      |   |
                                   | +-------------------+   |
                                   +-------------------------+
```

#### 2. Danh sách kiểm tra triển khai bảo mật FHIR R5

**Xác thực và Ủy quyền**

* \[ ] Triển khai OAuth 2.0 với PKCE cho tất cả clients
* \[ ] Sử dụng OpenID Connect cho xác thực người dùng
* \[ ] Triển khai SMART on FHIR 2.0 cho ứng dụng y tế
* \[ ] Cấu hình scope chi tiết theo resource và hành động
* \[ ] Triển khai JWT với claims chuẩn FHIR
* \[ ] Xác thực mạnh cho backend services

**Quản lý dữ liệu**

* \[ ] Mã hóa dữ liệu đang chuyển (TLS 1.2+)
* \[ ] Mã hóa dữ liệu lưu trữ
* \[ ] Triển khai cơ chế quản lý đồng ý (Consent)
* \[ ] Tuân thủ quy định về lưu trữ dữ liệu

**Giám sát và Audit**

* \[ ] Ghi nhật ký tất cả các hoạt động truy cập (AuditEvent)
* \[ ] Thiết lập cảnh báo cho các hành vi bất thường
* \[ ] Tích hợp với hệ thống SIEM
* \[ ] Triển khai báo cáo định kỳ về hoạt động truy cập

**Bảo mật ứng dụng**

* \[ ] Kiểm soát tốc độ truy cập API
* \[ ] Bảo vệ chống DDoS
* \[ ] Kiểm tra lỗi bảo mật phổ biến (OWASP Top 10)
* \[ ] Cập nhật thường xuyên các thư viện và phụ thuộc

**Bảo mật Subscription**

* \[ ] Xác thực hai chiều cho subscription endpoints
* \[ ] Mã hóa nội dung thông báo
* \[ ] Triển khai Topic-based security

#### 3. Mẫu triển khai xác thực SMART on FHIR hoàn chỉnh

```java
@Configuration
public class SmartConfiguration {

    @Bean
    public JWKSource<SecurityContext> jwkSource() throws Exception {
        // Tạo cặp khóa RSA
        KeyPair keyPair = generateRsaKey();
        RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
        RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();

        // Tạo JWK từ cặp khóa
        RSAKey rsaKey = new RSAKey.Builder(publicKey)
                .privateKey(privateKey)
                .keyID(UUID.randomUUID().toString())
                .build();

        JWKSet jwkSet = new JWKSet(rsaKey);
        return (jwkSelector, securityContext) -> jwkSelector.select(jwkSet);
    }

    private static KeyPair generateRsaKey() throws Exception {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);
        return keyPairGenerator.generateKeyPair();
    }

    @Bean
    public OAuth2AuthorizationService authorizationService() {
        return new InMemoryOAuth2AuthorizationService();
    }

    @Bean
    public OAuth2TokenGenerator<?> tokenGenerator(JWKSource<SecurityContext> jwkSource) {
        JwtEncoder jwtEncoder = new NimbusJwtEncoder(jwkSource);
        JwtGenerator jwtGenerator = new JwtGenerator(jwtEncoder);

        OAuth2AccessTokenGenerator accessTokenGenerator = new OAuth2AccessTokenGenerator();
        OAuth2RefreshTokenGenerator refreshTokenGenerator = new OAuth2RefreshTokenGenerator();

        return new DelegatingOAuth2TokenGenerator(
                jwtGenerator, accessTokenGenerator, refreshTokenGenerator);
    }

    @Bean
    public RegisteredClientRepository registeredClientRepository() {
        RegisteredClient smartApp = RegisteredClient.withId(UUID.randomUUID().toString())
                .clientId("smart-app-client-id")
                .clientSecret("{noop}smart-app-client-secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
                .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
                .redirectUri("https://smart-app.example.com/callback")
                .scope("launch")
                .scope("patient/*.read")
                .scope("user/*.read")
                .clientSettings(ClientSettings.builder()
                        .requireAuthorizationConsent(true)
                        .requireProofKey(true)  // Yêu cầu PKCE
                        .build())
                .tokenSettings(TokenSettings.builder()
                        .accessTokenTimeToLive(Duration.ofMinutes(30))
                        .refreshTokenTimeToLive(Duration.ofDays(30))
                        .build())
                .build();

        RegisteredClient backendService = RegisteredClient.withId(UUID.randomUUID().toString())
                .clientId("backend-service-client-id")
                .clientSecret("{noop}backend-service-client-secret")
                .clientAuthenticationMethod(ClientAuthenticationMethod.PRIVATE_KEY_JWT)
                .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
                .scope("system/*.read")
                .scope("system/Patient.write")
                .scope("system/Observation.write")
                .tokenSettings(TokenSettings.builder()
                        .accessTokenTimeToLive(Duration.ofHours(1))
                        .build())
                .build();

        return new InMemoryRegisteredClientRepository(smartApp, backendService);
    }

    @Bean
    public ProviderSettings providerSettings() {
        return ProviderSettings.builder()
                .issuer("https://auth.hospital.org")
                .build();
    }

    @Bean
    public JwtDecoder jwtDecoder(JWKSource<SecurityContext> jwkSource) {
        return OAuth2AuthorizationServerConfiguration.jwtDecoder(jwkSource);
    }

    @Bean
    public AuthorizationServerSettings authorizationServerSettings() {
        return AuthorizationServerSettings.builder()
                .issuer("https://auth.hospital.org")
                .authorizationEndpoint("/oauth2/authorize")
                .tokenEndpoint("/oauth2/token")
                .jwkSetEndpoint("/oauth2/jwks")
                .tokenRevocationEndpoint("/oauth2/revoke")
                .tokenIntrospectionEndpoint("/oauth2/introspect")
                .build();
    }
}

@RestController
public class SmartController {
    @GetMapping("/.well-known/smart-configuration")
    public Map<String, Object> getSmartConfiguration() {
        Map<String, Object> config = new HashMap<>();
        config.put("authorization_endpoint", "https://auth.hospital.org/oauth2/authorize");
        config.put("token_endpoint", "https://auth.hospital.org/oauth2/token");
        config.put("token_endpoint_auth_methods_supported", Arrays.asList("client_secret_basic", "private_key_jwt"));
        config.put("registration_endpoint", "https://auth.hospital.org/oauth2/register");
        config.put("scopes_supported", Arrays.asList(
                "openid", "profile", "launch", "launch/patient", "launch/encounter",
                "patient/*.read", "patient/*.write", "user/*.read", "user/*.write",
                "system/*.read", "system/*.write"));
        config.put("response_types_supported", Arrays.asList("code", "token", "id_token", "code token", "code id_token"));
        config.put("management_endpoint", "https://auth.hospital.org/oauth2/manage");
        config.put("introspection_endpoint", "https://auth.hospital.org/oauth2/introspect");
        config.put("revocation_endpoint", "https://auth.hospital.org/oauth2/revoke");
        config.put("capabilities", Arrays.asList("launch-ehr", "context-standalone-patient", "permission-patient", "sso-openid-connect"));
        
        return config;
    }
}
```

#### 4. Bảo vệ dữ liệu nhạy cảm với Data Segmentation

R5 tăng cường hỗ trợ cho phân đoạn dữ liệu nhạy cảm. Dưới đây là cách triển khai:

```java
@Component
public class DataSegmentationService {
    
    @Autowired
    private ConsentRepository consentRepository;
    
    /**
     * Lọc dữ liệu dựa trên mức độ nhạy cảm và quyền truy cập
     */
    public <T extends Resource> T applySegmentation(T resource, RequestDetails requestDetails) {
        // Bỏ qua nếu không phải resource liên quan đến bệnh nhân
        if (!isPatientRelatedResource(resource)) {
            return resource;
        }

        // Lấy thông tin người dùng và quyền truy cập từ token
        FHIRClaimsExtractor claimsExtractor = new FHIRClaimsExtractor(requestDetails);
        Set<String> scopes = claimsExtractor.extractScopes();
        String fhirUser = claimsExtractor.extractFhirUser();
        
        // Xác định mức độ truy cập dựa trên vai trò và scope
        AccessLevel accessLevel = determineAccessLevel(fhirUser, scopes);
        
        // Lấy ID bệnh nhân từ resource
        String patientId = extractPatientId(resource);
        if (patientId == null) {
            return resource;
        }
        
        // Lấy các chính sách về dữ liệu nhạy cảm của bệnh nhân
        List<Consent> consents = consentRepository.findByPatientIdAndActive(patientId, true);
        
        // Áp dụng lọc dữ liệu
        return applyFilters(resource, consents, accessLevel);
    }
    
    private <T extends Resource> T applyFilters(T resource, List<Consent> consents, AccessLevel accessLevel) {
        // Tạo bản sao để tránh thay đổi bản gốc
        T filteredResource = createDeepCopy(resource);
        
        // Lọc dữ liệu nhạy cảm theo loại resource
        if (resource instanceof Observation) {
            return (T) filterObservation((Observation) filteredResource, consents, accessLevel);
        } else if (resource instanceof MedicationStatement) {
            return (T) filterMedicationStatement((MedicationStatement) filteredResource, consents, accessLevel);
        } else if (resource instanceof DiagnosticReport) {
            return (T) filterDiagnosticReport((DiagnosticReport) filteredResource, consents, accessLevel);
        } else if (resource instanceof Bundle) {
            return (T) filterBundle((Bundle) filteredResource, consents, accessLevel);
        }
        
        return filteredResource;
    }
    
    private Observation filterObservation(Observation observation, List<Consent> consents, AccessLevel accessLevel) {
        // Kiểm tra loại quan sát (ví dụ: xét nghiệm HIV, sức khỏe tâm thần, v.v.)
        SensitivityCategory sensitivity = determineSensitivity(observation);
        
        // Kiểm tra quyền truy cập vào dữ liệu nhạy cảm này
        if (!canAccessSensitiveData(sensitivity, consents, accessLevel)) {
            // Che giấu giá trị
            hideObservationValue(observation);
            
            // Đánh dấu là đã ẩn thông tin nhạy cảm
            Meta meta = observation.getMeta() != null ? observation.getMeta() : new Meta();
            meta.addSecurity(new Coding()
                .setSystem("http://terminology.hl7.org/CodeSystem/v3-ActCode")
                .setCode("REDACTED")
                .setDisplay("Redacted for privacy"));
            observation.setMeta(meta);
        }
        
        return observation;
    }
    
    private void hideObservationValue(Observation observation) {
        // Xóa giá trị nhưng giữ nguyên cấu trúc
        if (observation.hasValueQuantity()) {
            observation.setValue(null);
            observation.addNote(new Annotation().setText("Giá trị đã được ẩn do chính sách riêng tư"));
        } else if (observation.hasValueCodeableConcept()) {
            observation.setValue(null);
            observation.addNote(new Annotation().setText("Giá trị đã được ẩn do chính sách riêng tư"));
        } else if (observation.hasValueString()) {
            observation.setValue(null);
            observation.addNote(new Annotation().setText("Giá trị đã được ẩn do chính sách riêng tư"));
        }
        // Xử lý các loại giá trị khác...
    }
    
    private SensitivityCategory determineSensitivity(Observation observation) {
        // Xác định mức độ nhạy cảm dựa trên mã LOINC, SNOMED hoặc các mã khác
        if (observation.hasCode()) {
            CodeableConcept code = observation.getCode();
            
            for (Coding coding : code.getCoding()) {
                // Mã LOINC cho xét nghiệm HIV
                if ("http://loinc.org".equals(coding.getSystem()) && 
                    Arrays.asList("22356-8", "29893-5", "16249-0").contains(coding.getCode())) {
                    return SensitivityCategory.HIV;
                }
                
                // Mã LOINC cho xét nghiệm ma túy
                if ("http://loinc.org".equals(coding.getSystem()) && 
                    Arrays.asList("3393-7", "14334-3", "14335-0").contains(coding.getCode())) {
                    return SensitivityCategory.SUBSTANCE_ABUSE;
                }
                
                // Mã LOINC cho sức khỏe tâm thần
                if ("http://loinc.org".equals(coding.getSystem()) && 
                    Arrays.asList("58221-7", "63598-0", "70274-8").contains(coding.getCode())) {
                    return SensitivityCategory.MENTAL_HEALTH;
                }
            }
        }
        
        return SensitivityCategory.NORMAL;
    }
    
    private boolean canAccessSensitiveData(SensitivityCategory sensitivity, List<Consent> consents, AccessLevel accessLevel) {
        // Nếu không nhạy cảm, cho phép truy cập
        if (sensitivity == SensitivityCategory.NORMAL) {
            return true;
        }
        
        // Người dùng có quyền Break Glass luôn được truy cập
        if (accessLevel == AccessLevel.BREAK_GLASS) {
            return true;
        }
        
        // Kiểm tra từng consent
        for (Consent consent : consents) {
            // Nếu có provision áp dụng cho loại dữ liệu nhạy cảm này
            if (consentAppliesToSensitivity(consent, sensitivity)) {
                // Kiểm tra loại quyết định trong consent
                if (consent.getProvision() != null && 
                    "deny".equals(consent.getProvision().getType().toCode())) {
                    return false;
                } else if (consent.getProvision() != null && 
                    "permit".equals(consent.getProvision().getType().toCode())) {
                    // Kiểm tra mức độ truy cập cần thiết
                    if (accessLevelMatchesConsent(consent, accessLevel)) {
                        return true;
                    }
                }
            }
        }
        
        // Mặc định: từ chối truy cập vào dữ liệu nhạy cảm
        return false;
    }
    
    private enum SensitivityCategory {
        NORMAL,
        HIV,
        SUBSTANCE_ABUSE,
        MENTAL_HEALTH,
        GENETIC,
        SEXUAL_AND_REPRODUCTIVE_HEALTH
    }
    
    private enum AccessLevel {
        NORMAL,
        SENSITIVE,
        RESTRICTED,
        BREAK_GLASS
    }
}
```

#### 5. Mã hóa dữ liệu lưu trữ

FHIR R5 không quy định cách mã hóa dữ liệu lưu trữ, nhưng đây là một phần quan trọng của bảo mật toàn diện:

```java
@Configuration
public class DataEncryptionConfig {
    
    @Value("${encryption.key.identifier}")
    private String keyIdentifier;
    
    @Value("${encryption.algorithm}")
    private String algorithm;
    
    @Bean
    public EncryptionService encryptionService(KeyManagementService keyManagementService) {
        return new AESEncryptionService(keyManagementService.getKey(keyIdentifier), algorithm);
    }
    
    @Bean
    public KeyManagementService keyManagementService() {
        // Trong môi trường thực tế, sử dụng hệ thống quản lý khóa như AWS KMS, Azure Key Vault, HashiCorp Vault
        return new FileBasedKeyManagementService();
    }
}

@Component
public class AESEncryptionService implements EncryptionService {
    
    private final SecretKey secretKey;
    private final String algorithm;
    
    public AESEncryptionService(SecretKey secretKey, String algorithm) {
        this.secretKey = secretKey;
        this.algorithm = algorithm;
    }
    
    @Override
    public String encrypt(String data) throws EncryptionException {
        try {
            // Tạo IV ngẫu nhiên
            byte[] iv = new byte[16];
            SecureRandom random = new SecureRandom();
            random.nextBytes(iv);
            IvParameterSpec ivspec = new IvParameterSpec(iv);
            
            // Khởi tạo cipher
            Cipher cipher = Cipher.getInstance(algorithm);
            cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivspec);
            
            // Mã hóa dữ liệu
            byte[] encrypted = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
            
            // Nối IV và dữ liệu đã mã hóa
            byte[] encryptedWithIv = new byte[iv.length + encrypted.length];
            System.arraycopy(iv, 0, encryptedWithIv, 0, iv.length);
            System.arraycopy(encrypted, 0, encryptedWithIv, iv.length, encrypted.length);
            
            // Mã hóa base64 để lưu trữ
            return Base64.getEncoder().encodeToString(encryptedWithIv);
        } catch (Exception e) {
            throw new EncryptionException("Lỗi khi mã hóa dữ liệu", e);
        }
    }
    
    @Override
    public String decrypt(String encryptedData) throws EncryptionException {
        try {
            // Giải mã base64
            byte[] encryptedWithIv = Base64.getDecoder().decode(encryptedData);
            
            // Tách IV và dữ liệu đã mã hóa
            byte[] iv = new byte[16];
            byte[] encrypted = new byte[encryptedWithIv.length - 16];
            System.arraycopy(encryptedWithIv, 0, iv, 0, iv.length);
            System.arraycopy(encryptedWithIv, 16, encrypted, 0, encrypted.length);
            
            // Khởi tạo cipher
            Cipher cipher = Cipher.getInstance(algorithm);
            cipher.init(Cipher.DECRYPT_MODE, secretKey, new IvParameterSpec(iv));
            
            // Giải mã dữ liệu
            byte[] decrypted = cipher.doFinal(encrypted);
            
            return new String(decrypted, StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new EncryptionException("Lỗi khi giải mã dữ liệu", e);
        }
    }
}

@Entity
@Table(name = "patient_phi")
public class PatientPHI {
    
    @Id
    private String id;
    
    @Column(name = "patient_id")
    private String patientId;
    
    @Convert(converter = EncryptedStringConverter.class)
    @Column(name = "national_id", length = 512)
    private String nationalId;
    
    @Convert(converter = EncryptedStringConverter.class)
    @Column(name = "address", length = 1024)
    private String address;
    
    @Convert(converter = EncryptedStringConverter.class)
    @Column(name = "phone", length = 512)
    private String phone;
    
    // Getters và setters
}

@Converter
public class EncryptedStringConverter implements AttributeConverter<String, String> {
    
    @Autowired
    private EncryptionService encryptionService;
    
    @Override
    public String convertToDatabaseColumn(String attribute) {
        if (attribute == null) {
            return null;
        }
        try {
            return encryptionService.encrypt(attribute);
        } catch (EncryptionException e) {
            throw new PersistenceException("Lỗi khi mã hóa dữ liệu", e);
        }
    }
    
    @Override
    public String convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        try {
            return encryptionService.decrypt(dbData);
        } catch (EncryptionException e) {
            throw new PersistenceException("Lỗi khi giải mã dữ liệu", e);
        }
    }
}
```

### Kết luận: Hướng đến triển khai bảo mật FHIR R5

Bảo mật là một khía cạnh cốt lõi của FHIR R5 và được cải tiến đáng kể so với các phiên bản trước. Một triển khai bảo mật toàn diện cho FHIR R5 cần tích hợp nhiều lớp bảo vệ:

1. **Xác thực mạnh mẽ** sử dụng OAuth 2.0, OpenID Connect và SMART on FHIR
2. **Phân quyền chi tiết** với scope phù hợp cho từng loại resource và hành động
3. **Bảo vệ dữ liệu** thông qua mã hóa và kiểm soát truy cập dựa trên ngữ cảnh
4. **Quản lý đồng ý** cho phép bệnh nhân kiểm soát quyền truy cập vào dữ liệu của họ
5. **Giám sát và kiểm toán** để phát hiện và phản ứng nhanh chóng với các sự cố bảo mật
6. **Kiểm soát lưu lượng** để ngăn chặn lạm dụng hệ thống

FHIR R5 mang đến nhiều công cụ và tiêu chuẩn giúp đạt được các mục tiêu này. Khi triển khai, hãy nhớ rằng bảo mật là một quá trình liên tục, không phải một sản phẩm cuối cùng. Việc luôn cập nhật, kiểm tra và cải tiến các biện pháp bảo mật là chìa khóa để bảo vệ hiệu quả thông tin nhạy cảm của bệnh nhân.

Với việc áp dụng các tiêu chuẩn và thực tiễn tốt nhất được trình bày trong bài viết này, bạn sẽ xây dựng được nền tảng vững chắc cho hệ thống FHIR R5 an toàn và đáng tin cậy, đồng thời tuân thủ các quy định nghiêm ngặt về bảo mật và quyền riêng tư trong lĩnh vực y tế.

***

Trong các bài viết tiếp theo của series, chúng ta sẽ đi sâu hơn vào từng khía cạnh cụ thể của bảo mật FHIR R5, bao gồm hướng dẫn chi tiết về OAuth 2.0 và OpenID Connect, SMART on FHIR 2.0, JWT, quản lý phạm vi quyền truy cập, và giám sát hoạt động hệ thống.

Hãy để lại bình luận nếu bạn có bất kỳ câu hỏi hoặc chia sẻ về kinh nghiệm triển khai bảo mật FHIR trong tổ chức của mình!
