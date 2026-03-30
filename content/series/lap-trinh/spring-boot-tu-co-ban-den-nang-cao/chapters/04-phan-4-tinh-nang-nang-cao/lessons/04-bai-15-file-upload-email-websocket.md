---
id: 019c9617-fc15-7015-a015-fc1500000015
title: 'Bài 15: File Upload/Download, Email & WebSocket'
slug: bai-15-file-upload-email-websocket
description: >-
  Multipart file upload với validation. File download streaming. Gửi email với
  Spring Mail và Thymeleaf templates. Real-time communication với WebSocket và STOMP.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: "Phần 4: Tính năng Nâng cao"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Ba tính năng thường gặp trong mọi ứng dụng enterprise: upload/download file, gửi email thông báo, và real-time communication qua WebSocket. Bài này hướng dẫn implement production-ready cho từng tính năng.

---

## 1. File Upload

### 1.1 Cấu hình

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

### 1.2 Upload Controller

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

### 1.3 File Storage Service

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

## 2. File Download

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

## 3. Gửi Email với Spring Mail

### 3.1 Cấu hình

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

### 3.2 Email Service

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

## 4. WebSocket & STOMP

### 4.1 Cấu hình WebSocket

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

### 4.2 WebSocket Controller

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

### 4.3 Push Notification từ Server

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

## Tóm tắt

- File upload với validation (type, size), path traversal prevention, và unique filename generation
- Spring Mail hỗ trợ text, HTML, và attachment emails — kết hợp @Async để gửi không blocking
- WebSocket + STOMP cho real-time communication: broadcast (topic), private messages (queue), server-push notifications

## Bài tập

1. Implement file upload API: hỗ trợ image (JPEG, PNG, WebP), max 5MB. Validate content type và tạo thumbnail
2. Tạo email service gửi welcome email với HTML template khi user đăng ký. Dùng @Async để không blocking
3. Implement chat room đơn giản với WebSocket: user join room, send message, receive real-time messages
