---
id: 01970001-bb03-7003-d003-bb0300001003
title: 'Bài 3: Xây API gateway cho Gemma 4 và policy tầng ứng dụng'
slug: bai-3-xay-api-gateway-cho-gemma-4-va-policy-tang-ung-dung
description: >-
  Dựng FastAPI gateway, chuẩn hóa timeout, retry, structured output,
  logging metadata và phân quyền truy cập model theo team.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 2: Integration - API, Prompting và App Embedding"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 Local AI Engineering trên Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

## Giới thiệu

Gateway là lớp quan trọng nhất để local AI stack chạy ổn định. Nó giúp team kiểm soát chất lượng và bảo mật, thay vì để client gọi trực tiếp model runtime.

## 1. Mẫu API tối thiểu

```python
from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

class ChatReq(BaseModel):
    prompt: str
    model: str = "gemma4"

@app.post("/chat")
def chat(req: ChatReq):
    r = requests.post(
        "http://127.0.0.1:11434/api/generate",
        json={"model": req.model, "prompt": req.prompt, "stream": False},
        timeout=90,
    )
    r.raise_for_status()
    data = r.json()
    return {"answer": data.get("response", ""), "model": req.model}
```

## 2. Policy bắt buộc ở gateway

- Timeout cứng theo endpoint
- Retry giới hạn cho lỗi tạm thời
- Whitelist model được phép dùng
- Limit kích thước prompt để tránh abuse

## 3. Structured output

Khi app cần JSON, ép contract ngay từ gateway:

- Prompt contract rõ ràng
- Validate schema trước khi trả client
- Nếu fail schema, trả lỗi có mã cụ thể

## 4. Authentication nội bộ

Tối thiểu triển khai:

- API key theo service
- Rate limit theo key
- Logging theo tenant/team

Nếu dùng trong doanh nghiệp, kết nối SSO ở gateway thay vì tại model layer.

## 5. Logging và tracing

Mỗi request nên log:

- `request_id`
- `endpoint`
- `model`
- `latency_ms`
- `prompt_tokens_est`
- `status`

Không log dữ liệu nhạy cảm nguyên văn nếu có PII.

## 6. Fallback model strategy

Thiết kế fallback để hệ thống không chết cứng:

1. Model chính timeout
2. Tự chuyển model nhẹ hơn
3. Trả response có cờ `degraded_mode=true`

## Demo code

Kết quả test Chat API qua gateway:

![Chat Response](/images/blog/gemma4-series-demo/03-chat-response.png)

Model policy enforcement — chặn model không được phép:

![Policy Enforcement](/images/blog/gemma4-series-demo/03-policy-enforcement.png)

> Source code: [02-api-gateway](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/02-api-gateway)

## Tóm tắt

Gateway biến local LLM thành một dịch vụ đúng nghĩa. Bài tiếp theo sẽ đi sâu vào prompt contract, JSON schema và regression test để giữ hành vi model ổn định theo thời gian.