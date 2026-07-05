---
id: 7e11e30e-d9e6-4fd3-be45-4c3e9a2f3e2e
title: 'Keycloak for SMART'
slug: keycloak-for-smart
description: 'Keycloak là một giải pháp quản lý danh tính và truy cập mã nguồn mở mạnh mẽ, có thể cấu hình để hỗ trợ giao thức xác thực SMART on FHIR (Substitutable Medical Applications and Reusable Technologies) cho các ứng dụng y…'
duration_minutes: 15
is_free: true
video_url: null
sort_order: 28
section_title: 'Phần 11: Kiến trúc & Thiết kế (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Keycloak là một giải pháp quản lý danh tính và truy cập mã nguồn mở mạnh mẽ, có thể cấu hình để hỗ trợ giao thức xác thực SMART on FHIR (Substitutable Medical Applications and Reusable Technologies) cho các ứng dụng y tế. Tích hợp Keycloak với SMART on FHIR mang lại giải pháp bảo mật toàn diện cho hệ sinh thái ứng dụng y tế tương thích FHIR.

### SMART on FHIR là gì?

SMART on FHIR là một bộ tiêu chuẩn mở cho phép các ứng dụng y tế tích hợp an toàn với các hệ thống lưu trữ dữ liệu lâm sàng. Nó kết hợp:

* Tiêu chuẩn FHIR cho dữ liệu y tế
* OAuth 2.0 và OpenID Connect cho xác thực và ủy quyền

SMART on FHIR cho phép các ứng dụng bên thứ ba đăng ký, xác thực và yêu cầu quyền truy cập vào dữ liệu y tế một cách an toàn.

### Tại sao sử dụng Keycloak cho SMART on FHIR?

#### Lợi ích chính

1. **Sẵn sàng doanh nghiệp**: Keycloak được RedHat hỗ trợ và được sử dụng rộng rãi trong các triển khai doanh nghiệp
2. **Mã nguồn mở**: Giải pháp miễn phí, tùy chỉnh được và được hỗ trợ bởi cộng đồng lớn
3. **Tích hợp tốt với FHIR**: Hỗ trợ các khía cạnh chính của SMART on FHIR bao gồm OAuth 2.0 và OpenID Connect
4. **Đa ứng dụng**: Quản lý xác thực cho nhiều ứng dụng và dịch vụ từ một nơi
5. **Tính linh hoạt cao**: Cung cấp nhiều tùy chọn tích hợp với các hệ thống danh tính hiện có

### Kiến trúc tham khảo

Một kiến trúc điển hình sử dụng Keycloak cho SMART on FHIR bao gồm:

1. **Ứng dụng SMART**: Các ứng dụng y tế (web, di động) cần truy cập dữ liệu FHIR
2. **Keycloak Server**: Xử lý xác thực, ủy quyền và quản lý phiên
3. **FHIR Server**: Lưu trữ dữ liệu lâm sàng, xác minh token và thực thi kiểm soát truy cập
4. **Hệ thống danh tính**: Tùy chọn tích hợp với LDAP/Active Directory hoặc các hệ thống danh tính khác

### Thiết lập Keycloak cho SMART on FHIR

#### 1. Cài đặt và cấu hình Keycloak

```bash
# Tải và giải nén Keycloak
wget https://github.com/keycloak/keycloak/releases/download/18.0.0/keycloak-18.0.0.tar.gz
tar -xzf keycloak-18.0.0.tar.gz

# Khởi động Keycloak
cd keycloak-18.0.0/bin
./standalone.sh
```

#### 2. Tạo Realm, Client và Scopes

1. **Tạo một Realm mới**: Nhóm tài khoản người dùng và ứng dụng liên quan
2. **Tạo Client cho FHIR Server**:
   * Client Type: `confidential`
   * Access Type: `bearer-only`
   * Service Accounts Enabled: `true`
3. **Tạo Client cho ứng dụng SMART**:
   * Client Type: `public` or `confidential` (tùy loại ứng dụng)
   * Redirect URIs: URL callback của ứng dụng
   * Web Origins: Nguồn gốc của ứng dụng
4. **Tạo Client Scopes cho SMART**:
   * `patient/*.read`
   * `patient/*.write`
   * `user/*.read`
   * `user/*.write`
   * `launch/patient`
   * `launch/encounter`
   * `offline_access`

#### 3. Tùy chỉnh OAuth 2.0 cho SMART on FHIR

```java
public class SmartFhirAuthenticator extends Authenticator {
    @Override
    public void authenticate(AuthenticationFlowContext context) {
        // Xử lý các tham số launch và context SMART
        String launchContext = context.getHttpRequest().getUri().getQueryParameters().getFirst("launch");
        
        // Kiểm tra và xác thực thông tin launch context
        if (launchContext != null) {
            // Lưu thông tin launch context
            AuthenticationSessionModel authSession = context.getAuthenticationSession();
            authSession.setAuthNote("smart_launch_context", launchContext);
        }
        
        // Tiếp tục luồng xác thực
        context.success();
    }
}
```

#### 4. Tạo Token Mapper cho thông tin SMART

```java
public class SmartContextMapper extends AbstractOIDCProtocolMapper implements OIDCAccessTokenMapper {
    @Override
    protected void setClaim(IDToken token, ProtocolMapperModel mappingModel, UserSessionModel userSession) {
        // Lấy thông tin patient/encounter từ AuthSession
        String launchContext = userSession.getNote("smart_launch_context");
        
        // Giải mã và thêm vào token
        if (launchContext != null) {
            try {
                JSONObject contextObj = new JSONObject(launchContext);
                if (contextObj.has("patient")) {
                    token.getOtherClaims().put("patient", contextObj.getString("patient"));
                }
                if (contextObj.has("encounter")) {
                    token.getOtherClaims().put("encounter", contextObj.getString("encounter"));
                }
            } catch (Exception e) {
                // Xử lý lỗi
            }
        }
    }
}
```

### Luồng xác thực SMART on FHIR với Keycloak

1. **Khởi tạo xác thực**: Ứng dụng SMART chuyển hướng đến Keycloak với tham số SMART (launch, scope)
2. **Xác thực người dùng**: Người dùng đăng nhập vào Keycloak
3. **Đồng ý (Consent)**: Người dùng chấp nhận cấp quyền cho ứng dụng (nếu cấu hình yêu cầu)
4. **Chuyển hướng trở lại**: Keycloak chuyển hướng về ứng dụng với mã ủy quyền
5. **Trao đổi token**: Ứng dụng đổi mã lấy access token từ Keycloak
6. **Truy cập dữ liệu**: Ứng dụng sử dụng token để truy cập FHIR API

### Cấu hình FHIR Server để sử dụng Keycloak

#### HAPI FHIR Server

```java
@Configuration
public class FhirServerConfig {
    @Bean
    public IServerInterceptor keycloakInterceptor() {
        KeycloakInterceptor interceptor = new KeycloakInterceptor();
        interceptor.setKeycloakConfigPath("/path/to/keycloak.json");
        return interceptor;
    }
}

public class KeycloakInterceptor extends InterceptorAdapter {
    private KeycloakDeployment keycloakDeployment;
    
    @Override
    public boolean incomingRequestPreProcessed(HttpServletRequest request, HttpServletResponse response) {
        // Xác thực token Keycloak
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            try {
                AccessToken accessToken = keycloakDeployment.getTokenVerifier().verify(token).getToken();
                
                // Kiểm tra phạm vi (scopes)
                String scopes = accessToken.getScope();
                
                // Xác thực FhirContext từ token
                String patientId = accessToken.getOtherClaims().get("patient").toString();
                request.setAttribute("patient_id", patientId);
                
                return true;
            } catch (Exception e) {
                // Xử lý lỗi xác thực
                response.setStatus(401);
                return false;
            }
        }
        
        response.setStatus(401);
        return false;
    }
}
```

### Thử thách và giải pháp

#### 1. Ánh xạ phạm vi SMART vào Keycloak

**Thách thức**: Keycloak không hỗ trợ cú pháp phạm vi SMART on FHIR mặc định.

**Giải pháp**: Tạo client scopes tùy chỉnh và triển khai protocol mapper để chuyển đổi scopes.

#### 2. Xử lý launch context

**Thách thức**: SMART on FHIR yêu cầu xử lý tham số launch.

**Giải pháp**: Triển khai authenticator tùy chỉnh để lưu và xử lý launch context.

#### 3. Nâng cấp token không gián đoạn

**Thách thức**: Duy trì phiên người dùng khi token hết hạn.

**Giải pháp**: Cấu hình refresh token và triển khai xử lý phía client.

### Ví dụ ứng dụng SMART on FHIR

```javascript
// Khởi tạo client SMART với Keycloak
const smartClient = FHIR.client({
  serverUrl: "https://fhir-server.example.com/fhir",
  auth: {
    type: "smart",
    iss: "https://keycloak.example.com/auth/realms/healthcare",
    redirectUri: "https://app.example.com/callback",
    clientId: "smart-app-client",
    scope: "launch patient/*.read offline_access"
  }
});

// Bắt đầu quy trình xác thực
smartClient.authorize().then(function() {
  // Đã xác thực, sẵn sàng truy cập dữ liệu
  return smartClient.patient.read();
}).then(function(patient) {
  console.log("Đã lấy thông tin bệnh nhân:", patient);
}).catch(function(error) {
  console.error("Lỗi:", error);
});
```

### Kết luận

Keycloak cung cấp một nền tảng mạnh mẽ và linh hoạt để triển khai xác thực SMART on FHIR cho các ứng dụng y tế. Với khả năng hỗ trợ OAuth 2.0 và OpenID Connect, cùng với các tùy chỉnh đặc thù cho SMART on FHIR, Keycloak là lựa chọn tuyệt vời cho các tổ chức y tế cần giải pháp xác thực mã nguồn mở, đáng tin cậy và dễ tích hợp.

Mặc dù yêu cầu một số tùy chỉnh để hỗ trợ đầy đủ đặc tả SMART on FHIR, những nỗ lực này được đền đáp bằng một hệ thống xác thực mạnh mẽ, thống nhất và có thể mở rộng cho toàn bộ hệ sinh thái ứng dụng y tế.
