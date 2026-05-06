---
id: 02760001-ba02-4001-a013-000000000001
title: "API và Data Contract cho Software BA: Đọc, hỏi và viết yêu cầu tích hợp thế nào?"
slug: api-data-contracts-software-ba
excerpt: >-
  Software BA không cần code API nhưng cần hiểu endpoint, payload, validation,
  error code, event, data lineage và contract. Bài này đưa template yêu cầu tích
  hợp, ví dụ đặt lịch và checklist giúp BA làm việc tốt hơn với Dev/Data/QA.
featured_image: /images/blog/rest-api-data-validation-ba.png
type: blog
reading_time: 17
view_count: 0
meta: null
published_at: '2026-05-06T10:30:00.000000Z'
created_at: '2026-05-06T10:30:00.000000Z'
author: {id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf, name: Duy Tran, avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg}
category: {id: 019c9616-cat1-7001-a001-000000000001, name: AI, slug: ai}
tags: [{name: BA, slug: ba}, {name: API, slug: api}, {name: Data Contract, slug: data-contract}, {name: Integration, slug: integration}, {name: Software BA, slug: software-ba}]
comments: []
---

Software BA không cần viết code backend, nhưng nếu bạn làm sản phẩm số, bạn sẽ liên tục gặp câu hỏi về API và data:

- Hệ thống nào gửi dữ liệu?
- Field nào bắt buộc?
- Khi lỗi thì trả message gì?
- Data lấy từ nguồn nào?
- Có cần audit log không?
- API có được gọi lại nếu timeout không?
- Event có thể bị duplicate không?

Nếu BA né phần này hoàn toàn, requirement sẽ bị hổng ở vùng handoff giữa business và engineering.

## 1. API contract là gì?

API contract là thỏa thuận giữa bên gọi và bên cung cấp API.

Một contract thường có:

- Endpoint hoặc event name.
- Method: GET, POST, PUT, PATCH, DELETE.
- Request payload.
- Response payload.
- Validation rule.
- Error code/message.
- Authentication/authorization.
- Rate limit hoặc quota.
- Versioning.
- SLA/availability.

BA không cần quyết định toàn bộ kỹ thuật, nhưng BA cần đảm bảo contract phản ánh đúng nghiệp vụ.

## 2. Data contract là gì?

Data contract là thỏa thuận về dữ liệu được trao đổi hoặc lưu trữ.

Ví dụ field `appointmentStatus`:

| Thuộc tính | Giá trị |
|---|---|
| Type | enum |
| Allowed values | Pending, Confirmed, Cancelled, Completed, NoShow |
| Required | Yes |
| Source | Booking Service |
| Owner | Product Ops |
| Sensitive | No |
| Retention | 7 years |
| Used by | UI, report, notification, audit |

Nếu field không có owner, không rõ source, không rõ allowed values, hệ thống sẽ dễ phát sinh sai lệch giữa UI, API, database và report.

## 3. Template yêu cầu tích hợp cho BA

```markdown
# Integration Requirement

## 1. Business context
- Business process:
- Trigger:
- Actor/system:
- Success outcome:

## 2. Systems involved
- Source system:
- Target system:
- External dependency:

## 3. API / event
- Endpoint/event:
- Method:
- Authentication:
- Frequency:
- Idempotency requirement:

## 4. Request data
| Field | Type | Required | Validation | Source | Notes |

## 5. Response data
| Field | Type | Required | Meaning | UI/report usage |

## 6. Error handling
| Error | Cause | User message | Retry? | Escalation |

## 7. Non-functional requirements
- Performance:
- Availability:
- Security/privacy:
- Audit/logging:
- Monitoring:

## 8. Open questions
```

Template này đủ nhẹ để dùng trong Agile, nhưng đủ rõ để Dev và QA không phải tự suy diễn.

## 4. Ví dụ: đặt lịch khám

Requirement:

> Khi bệnh nhân chọn slot và bấm xác nhận, hệ thống phải tạo appointment nếu slot còn trống và trả về mã lịch hẹn.

API gợi ý:

```http
POST /appointments
```

Request:

```json
{
  "patientId": "PAT-123",
  "doctorId": "DOC-456",
  "slotId": "SLOT-789",
  "reason": "Follow-up consultation",
  "channel": "WEB"
}
```

Validation:

| Field | Rule |
|---|---|
| patientId | Required, must exist, active patient |
| doctorId | Required, must exist, accepting booking |
| slotId | Required, must be available at submit time |
| reason | Optional, max 500 chars |
| channel | Required, enum WEB/MOBILE/CALL_CENTER |

Response success:

```json
{
  "appointmentId": "APT-20260506-001",
  "status": "Confirmed",
  "confirmationCode": "XDA-8821"
}
```

Errors:

| Code | Cause | User message | BA note |
|---|---|---|---|
| SLOT_UNAVAILABLE | Slot was taken | Slot này vừa được đặt. Vui lòng chọn giờ khác. | Must show alternative slots |
| PATIENT_BLOCKED | Patient cannot book | Tài khoản của bạn cần được hỗ trợ trước khi đặt lịch. | Route to support |
| VALIDATION_ERROR | Missing/invalid field | Vui lòng kiểm tra lại thông tin. | Highlight field |
| SYSTEM_TIMEOUT | Service timeout | Hệ thống đang bận. Vui lòng thử lại. | Need idempotency |

## 5. Câu hỏi BA nên hỏi Dev/Data/QA

Với API:

- API synchronous hay asynchronous?
- Có cần idempotency key để tránh tạo trùng không?
- Timeout bao lâu?
- Có retry không? Retry bao nhiêu lần?
- Error nào user được thấy, error nào chỉ log?
- API có version không?
- Có audit log cho request/response quan trọng không?

Với data:

- Field source of truth là hệ thống nào?
- Field có thể null không?
- Có PII/PHI/financial data không?
- Retention và deletion rule là gì?
- Report dùng dữ liệu real-time hay batch?
- Có data lineage từ source đến dashboard không?

Với QA:

- Có contract test không?
- Có test case cho duplicate request không?
- Có test case cho stale data không?
- Có test permission không?
- Có test backward compatibility không?

## 6. Checklist API/data requirement

- Endpoint/event được đặt tên rõ.
- Trigger business rõ.
- Request/response có field, type, required, validation.
- Error handling có code, cause, user message, retry/escalation.
- Permission rõ.
- Sensitive data được đánh dấu.
- Audit/logging rõ.
- Performance và availability đo được.
- Idempotency/duplicate handling rõ nếu có transaction.
- Contract có version hoặc change policy.

## 7. Lỗi thường gặp

**Lỗi 1: Chỉ viết màn hình, không viết data**

UI chỉ là một phần. Nếu không rõ data từ đâu đến và đi đâu, report, notification, audit và integration sẽ sai.

**Lỗi 2: Không mô tả lỗi**

Happy path thường dễ. Lỗi mới là nơi user experience và support cost bùng lên.

**Lỗi 3: Không hỏi idempotency**

Trong các giao dịch tạo đơn, thanh toán, đặt lịch, retry có thể tạo trùng. BA nên hỏi sớm để business rule và UX không bị thiếu.

## Nguồn tham khảo

- IEEE/ISO/IEC 29148-2018: https://standards.ieee.org/ieee/29148/6937/
- OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
- IIBA BABOK Guide: https://www.iiba.org/standards-and-resources/babok/

## Kết luận

API/data literacy giúp Software BA không bị mù ở đoạn tích hợp. Bạn không cần code, nhưng cần biết hỏi đúng câu về contract, validation, error, security, audit và data ownership. Đây là năng lực phân biệt BA viết requirement cho slide với BA viết requirement cho software thật.
