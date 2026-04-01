---
id: 019d5b01-bb21-7021-c021-bb2100000021
title: 'Bài 21: Chạy AI Local với Ollama trên Apple Silicon'
slug: bai-21-ollama-apple-silicon
description: >-
  Hướng dẫn thực chiến chạy LLM local trên Mac M1/M2/M3/M4 với Ollama:
  cài đặt, chọn model theo RAM, benchmark tốc độ, tối ưu hiệu năng và tích hợp
  API cho ứng dụng.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Production & Nâng cao"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

## Tổng quan

Apple Silicon (M-series) là nền tảng rất tốt để chạy AI local nhờ unified memory và GPU tích hợp. Bài này tập trung vào thực hành với Ollama để bạn có thể:

- Chạy LLM offline ngay trên Mac
- Chọn model phù hợp theo cấu hình máy
- Đo tốc độ thực tế và tối ưu hiệu năng
- Expose API cục bộ để tích hợp vào app

---

## 1. Yêu cầu phần cứng và phần mềm

### 1.1 Phần cứng khuyến nghị

| Cấu hình Mac | Model phù hợp | Gợi ý sử dụng |
|---|---|---|
| 8GB RAM | `phi3:mini`, `qwen2.5:3b`, `llama3.2:3b` | Chat cơ bản, prototyping |
| 16GB RAM | `qwen2.5:7b`, `mistral:7b` | Coding assistant, RAG nhỏ |
| 24GB+ RAM | `qwen2.5:14b`, `phi4` | Chất lượng cao hơn, ngữ cảnh dài |

> Quy tắc nhanh: model càng lớn thì chất lượng thường tốt hơn, nhưng tốc độ và RAM tiêu thụ cũng tăng theo.

### 1.2 Software

- macOS 14+ (Sonoma hoặc mới hơn)
- Homebrew
- Terminal (zsh)
- Python 3.10+ (nếu tích hợp API)

---

## 2. Cài Ollama trên macOS

```bash
# Cài bằng Homebrew
brew install ollama

# Kiểm tra version
ollama --version

# Start service (nếu chưa tự chạy)
brew services start ollama

# Test nhanh API
curl http://localhost:11434/api/tags
```

Nếu bạn cài từ app chính thức, Ollama thường tự khởi động daemon trên port `11434`.

---

## 3. Chạy model đầu tiên

```bash
# Pull model nhỏ, chạy nhanh
ollama run llama3.2:3b

# Một số model phổ biến khác
ollama run qwen2.5:7b
ollama run mistral:7b
ollama run phi3:mini
```

Các lệnh hữu ích:

```bash
# Danh sách model đã tải
ollama list

# Dừng model đang chạy
ollama stop llama3.2:3b

# Xóa model để giải phóng dung lượng
ollama rm llama3.2:3b
```

---

## 4. Benchmark nhanh trên Apple Silicon

Bạn có thể đo tốc độ sinh token bằng `ollama ps` và log thời gian phản hồi.

### 4.1 Script benchmark đơn giản

```bash
START=$(date +%s)

curl -s http://localhost:11434/api/generate \
  -d '{
    "model": "qwen2.5:7b",
    "prompt": "Giải thích sự khác nhau giữa Docker và VM trong 8 gạch đầu dòng.",
    "stream": false
  }' > /tmp/ollama-bench.json

END=$(date +%s)
echo "Latency: $((END-START))s"
```

### 4.2 Mục tiêu thực tế

- 3B model: phản hồi nhanh, phù hợp chat realtime
- 7B model: cân bằng tốt giữa chất lượng và tốc độ
- 14B model: tốt cho tác vụ khó, nhưng cần RAM lớn hơn

---

## 5. Tối ưu hiệu năng trên M1/M2/M3/M4

### 5.1 Chọn model theo use case

- Hỏi đáp ngắn hoặc automation: ưu tiên 3B hoặc 7B
- Code generation: ưu tiên `qwen2.5-coder` hoặc model coding chuyên dụng
- RAG tiếng Việt: dùng embedding model riêng (`nomic-embed-text`) + 7B instruct model

### 5.2 Giới hạn context hợp lý

Context quá lớn sẽ làm chậm rõ rệt. Bắt đầu với 4K-8K tokens, chỉ tăng khi thật sự cần.

### 5.3 Quản lý dung lượng ổ đĩa

Model thường nặng vài GB đến hàng chục GB.

```bash
# Kiểm tra dung lượng model
ollama list

# Xóa các model ít dùng
ollama rm mistral:7b
```

### 5.4 Tắt ứng dụng ngốn RAM

Do Apple Silicon dùng unified memory, RAM bị chia sẻ giữa CPU/GPU. Đóng Chrome tabs, Docker containers không cần thiết để model chạy ổn định hơn.

---

## 6. Tích hợp API vào ứng dụng

Ollama hỗ trợ REST API local, rất tiện cho app nội bộ và môi trường dev.

### 6.1 Gọi API trực tiếp

```bash
curl http://localhost:11434/api/chat \
  -d '{
    "model": "qwen2.5:7b",
    "messages": [
      {"role": "user", "content": "Viết hàm Python đọc CSV và lọc cột price > 100"}
    ],
    "stream": false
  }'
```

### 6.2 Dùng OpenAI SDK với endpoint Ollama

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama"
)

response = client.chat.completions.create(
    model="qwen2.5:7b",
    messages=[
        {"role": "system", "content": "Bạn là trợ lý kỹ thuật ngắn gọn."},
        {"role": "user", "content": "Tạo checklist hardening cho Nginx."}
    ],
    temperature=0.3
)

print(response.choices[0].message.content)
```

---

## 7. Troubleshooting thường gặp

### Lỗi: `address already in use`

Port `11434` đang bị chiếm.

```bash
lsof -i :11434
kill -9 <PID>
brew services restart ollama
```

### Lỗi: model chạy chậm hoặc bị kill

- Giảm kích thước model (14B -> 7B -> 3B)
- Giảm context window
- Đóng ứng dụng nặng RAM

### Lỗi: không gọi được từ Docker container

Dùng `host.docker.internal` thay vì `localhost`.

```env
OLLAMA_BASE_URL=http://host.docker.internal:11434/v1
```

---

## 8. Bảo mật khi chạy local AI

- Không expose cổng Ollama ra Internet công khai
- Nếu cần remote access, đặt sau VPN hoặc reverse proxy có auth
- Log prompt/response cần ẩn dữ liệu nhạy cảm (PII, secrets)

---

## Tóm tắt

- Apple Silicon chạy AI local rất hiệu quả cho dev và PoC
- Ollama giúp setup nhanh chỉ trong vài phút
- 7B models là điểm cân bằng tốt nhất cho đa số use case
- Có thể tích hợp ngay vào stack hiện tại qua OpenAI-compatible API

## Bài tập thực hành

1. Cài Ollama trên máy M-series của bạn và chạy `llama3.2:3b`
2. So sánh latency giữa `llama3.2:3b` và `qwen2.5:7b`
3. Tích hợp endpoint Ollama vào app nhỏ dùng OpenAI SDK
4. Viết bảng benchmark riêng theo thiết bị của bạn (M1/M2/M3/M4, RAM, tokens/s)
