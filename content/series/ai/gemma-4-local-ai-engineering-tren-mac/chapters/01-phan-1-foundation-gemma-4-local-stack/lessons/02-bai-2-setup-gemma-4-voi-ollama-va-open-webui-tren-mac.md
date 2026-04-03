---
id: 01970001-bb02-7002-d002-bb0200001002
title: 'Bài 2: Setup Gemma 4 với Ollama và Open WebUI trên Mac'
slug: bai-2-setup-gemma-4-voi-ollama-va-open-webui-tren-mac
description: >-
  Cài đặt đầy đủ runtime trên Apple Silicon, cấu hình model theo RAM,
  triển khai chat UI nội bộ cho QA, PM và Content.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Foundation - Gemma 4 Local Stack"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 Local AI Engineering trên Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

## Giới thiệu

Trong bài này bạn sẽ dựng một local stack chạy được ngay:

- Ollama làm model runtime
- Gemma 4 làm model chính
- Open WebUI làm giao diện chat cho toàn team

## 1. Cài Ollama

```bash
brew install ollama
brew services start ollama
curl http://127.0.0.1:11434/api/tags
```

Nếu endpoint trả JSON, runtime đã sẵn sàng.

## 2. Pull model Gemma 4

```bash
ollama pull gemma4
ollama run gemma4
```

Với máy RAM thấp hơn, ưu tiên biến thể quantized nhẹ để tránh swap.

## 3. Chạy Open WebUI

```bash
docker run -d \
  --name open-webui \
  -p 3000:8080 \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui:/app/backend/data \
  --restart unless-stopped \
  ghcr.io/open-webui/open-webui:main
```

Truy cập `http://localhost:3000` và đăng nhập tài khoản admin đầu tiên.

## 4. Chuẩn hóa model preset

Tạo preset theo use case:

- Coding: temperature thấp, context cao vừa phải
- Summarization: temperature trung bình, format ngắn
- Extraction: temperature thấp, output JSON cố định

Giữ preset ở tài liệu nội bộ để ai mới vào team dùng đúng mặc định.

## 5. Theo dõi tài nguyên trên Mac

Theo dõi 3 thứ:

- Memory pressure
- Swap usage
- Tokens/second thực tế

Khi swap tăng mạnh, giảm `num_ctx` hoặc model size trước khi tối ưu sâu.

## 6. Troubleshooting nhanh

1. Docker không gọi được Ollama: dùng `host.docker.internal`.
2. Model chạy chậm dần: kiểm tra swap và app nền.
3. UI không thấy model: kiểm tra `ollama list` và `OLLAMA_BASE_URL`.

## Bài tập

- Cài stack hoàn chỉnh và chụp lại sơ đồ endpoint.
- Tạo 3 preset model theo 3 use case.
- So sánh tốc độ với một prompt dài 2 lần liên tiếp.

## Demo code

Sau khi cài đặt xong, kiểm tra health check endpoint:

![Health Check](/images/blog/gemma4-series-demo/02-health-check.png)

Swagger UI tự động tạo documentation cho API:

![Swagger Docs](/images/blog/gemma4-series-demo/02-swagger-docs.png)

> Source code: [xdev-asia-labs/gemma-4-local-ai-engineering-on-mac](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac)

## Tóm tắt

Bạn đã có local runtime đầy đủ cho cả kỹ thuật và non-tech. Bài sau sẽ đưa stack này vào chuẩn API gateway để ứng dụng có thể tích hợp ổn định.