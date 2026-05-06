---
id: 019c9617-fc15-7015-a015-fc1500000015
title: 第 15 課：文件上傳/下載、電子郵件和 WebSocket
slug: bai-15-file-upload-email-websocket
description: >-
  帶驗證的分段文件上傳。文件下載流。使用 Spring Mail 和 Thymeleaf 範本發送電子郵件。與 WebSocket 和 STOMP
  進行即時通訊。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: 第 4 部分：進階功能
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1210" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1210)"/>

  <!-- Decorations -->
  <g>
    <circle cx="867" cy="191" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="634" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="901" cy="125" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="668" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="59" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="141" x2="1100" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="171" x2="1050" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1022.1769145362398,173 1022.1769145362398,209 991,227 959.8230854637602,209 959.8230854637602,173 991,155" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：文件上傳/下載、電子郵件和</tspan>
      <tspan x="60" dy="42">WebSockets</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

所有企業應用程式共有三個功能：文件上傳/下載、電子郵件通知以及透過 WebSocket 進行即時通訊。本文指導每個功能的生產就緒實施。

---

## 1. 文件上傳

### 1.1 配置

```yaml
# application.yml
spring:
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 50MB

app:
  upload:
    dir: ./uploads
    allowed-types: image/jpeg,image/png,image/webp,application/pdf
```

### 1.2 上傳控制器

```java
@RestController
@RequestMapping("/api/v1/files")
public class FileController {

    private final FileStorageService fileStorageService;

    public FileController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<FileResponse> uploadFile(
            @RequestParam("file") MultipartFile file) {
        FileResponse response = fileStorageService.store(file);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/upload-multiple")
    public ResponseEntity<List<FileResponse>> uploadMultiple(
            @RequestParam("files") List<MultipartFile> files) {
        List<FileResponse> responses = files.stream()
            .map(fileStorageService::store)
            .toList();
        return ResponseEntity.status(HttpStatus.CREATED).body(responses);
    }
}
```

### 1.3 檔案儲存服務

```java
@Service
public class FileStorageService {

    private final Path uploadDir;
    private final List<String> allowedTypes;

    public FileStorageService(
            @Value("${app.upload.dir}") String uploadDir,
            @Value("${app.upload.allowed-types}") List<String> allowedTypes) {
        this.uploadDir = Path.of(uploadDir).toAbsolutePath().normalize();
        this.allowedTypes = allowedTypes;
        try {
            Files.createDirectories(this.uploadDir);
        } catch (IOException e) {
            throw new RuntimeException("Cannot create upload directory", e);
        }
    }

    public FileResponse store(MultipartFile file) {
        // Validate
        if (file.isEmpty()) {
            throw new BadRequestException("File is empty");
        }
        if (!allowedTypes.contains(file.getContentType())) {
            throw new BadRequestException("File type not allowed: "
                + file.getContentType());
        }

        // Generate unique filename
        String extension = StringUtils.getFilenameExtension(
            file.getOriginalFilename());
        String fileName = UUID.randomUUID() + "." + extension;

        // Prevent path traversal
        Path targetPath = uploadDir.resolve(fileName).normalize();
        if (!targetPath.startsWith(uploadDir)) {
            throw new BadRequestException("Invalid file path");
        }

        try {
            Files.copy(file.getInputStream(), targetPath,
                StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }

        return new FileResponse(fileName, file.getContentType(), file.getSize(),
            "/api/v1/files/download/" + fileName);
    }
}
```

---

## 2. 檔案下載

```java
@GetMapping("/download/{fileName}")
public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
    Path filePath = uploadDir.resolve(fileName).normalize();
    if (!filePath.startsWith(uploadDir)) {
        throw new BadRequestException("Invalid file path");
    }

    Resource resource = new UrlResource(filePath.toUri());
    if (!resource.exists()) {
        throw new ResourceNotFoundException("File", "name", fileName);
    }

    String contentType = Files.probeContentType(filePath);
    return ResponseEntity.ok()
        .contentType(MediaType.parseMediaType(
            contentType != null ? contentType : "application/octet-stream"))
        .header(HttpHeaders.CONTENT_DISPOSITION,
            "attachment; filename=\"" + resource.getFilename() + "\"")
        .body(resource);
}
```

---

## 3. 使用 Spring Mail 傳送電子郵件

### 3.1 配置

```yaml
spring:
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${MAIL_USERNAME}
    password: ${MAIL_PASSWORD}
    properties:
      mail.smtp.auth: true
      mail.smtp.starttls.enable: true
```

### 3.2 電子郵件服務

```java
@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // Text email
    public void sendSimpleEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        message.setFrom("noreply@example.com");
        mailSender.send(message);
    }

    // HTML email
    public void sendHtmlEmail(String to, String subject,
                               String htmlContent) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlContent, true);
        helper.setFrom("noreply@example.com");
        mailSender.send(message);
    }

    // Email với attachment
    public void sendEmailWithAttachment(String to, String subject,
                                         String text, Path attachment)
            throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(text);
        helper.addAttachment(attachment.getFileName().toString(),
            new FileSystemResource(attachment));
        mailSender.send(message);
    }
}
```

---

## 4.WebSocket 和 STOMP

### 4.1 WebSocket 配置

```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic", "/queue");
        config.setApplicationDestinationPrefixes("/app");
        config.setUserDestinationPrefix("/user");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
            .setAllowedOrigins("http://localhost:3000")
            .withSockJS();
    }
}
```

### 4.2 WebSocket 控制器

```java
@Controller
public class ChatController {

    @MessageMapping("/chat.send")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(ChatMessage message) {
        message.setTimestamp(Instant.now());
        return message;
    }

    @MessageMapping("/chat.private")
    @SendToUser("/queue/private")
    public ChatMessage sendPrivateMessage(
            @Payload ChatMessage message,
            Principal principal) {
        message.setSender(principal.getName());
        return message;
    }
}
```

### 4.3 伺服器推播通知

```java
@Service
public class NotificationPushService {

    private final SimpMessagingTemplate messagingTemplate;

    public NotificationPushService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    // Broadcast tới tất cả subscriber
    public void broadcastNotification(NotificationMessage notification) {
        messagingTemplate.convertAndSend("/topic/notifications", notification);
    }

    // Gửi tới user cụ thể
    public void sendToUser(String username, NotificationMessage notification) {
        messagingTemplate.convertAndSendToUser(
            username, "/queue/notifications", notification);
    }
}
```

---

## 總結

- 檔案上傳與驗證（類型、大小）、路徑遍歷預防和唯一檔案名稱生成
- Spring Mail 支援文字、HTML 和附件電子郵件 — 與 @Async 結合以實現非阻塞傳送
- WebSocket + STOMP 用於即時通訊：廣播（主題）、私人訊息（佇列）、伺服器推播通知

## 練習

1. 實作檔案上傳API：支援圖片（JPEG、PNG、WebP），最大5MB。驗證內容類型並建立縮圖
2. 建立一個電子郵件服務，在使用者註冊時發送帶有 HTML 範本的歡迎電子郵件。使用@Async不阻塞
3.使用WebSocket實現簡單的聊天室：使用者加入房間、發送訊息、接收即時訊息
