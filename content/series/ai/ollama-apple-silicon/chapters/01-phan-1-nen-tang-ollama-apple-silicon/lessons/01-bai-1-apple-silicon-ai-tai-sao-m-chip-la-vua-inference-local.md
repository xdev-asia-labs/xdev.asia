---
id: 019c9619-bb01-7001-d001-bb0100000001
title: 'Bài 1: Apple Silicon & AI - Tại sao M-chip là vua inference local'
slug: bai-1-apple-silicon-ai-tai-sao-m-chip-la-vua-inference-local
description: >-
  Unified Memory Architecture (UMA) là gì và tại sao nó thay đổi cuộc chơi AI local.
  So sánh M1/M2/M3/M4 với NVIDIA GPU. Memory bandwidth, Neural Engine, GPU cores.
  Tại sao LLM 7B-30B chạy mượt trên MacBook.
duration_minutes: 45
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng - Ollama & Apple Silicon"
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Chạy AI Local với Ollama trên Apple Silicon
  slug: ollama-apple-silicon
---

## Giới thiệu

Năm 2026, chạy AI local trên laptop không còn là "chơi cho vui" mà là kỹ năng thực sự hữu ích. Và Apple Silicon là một trong những nền tảng inference local tốt nhất hiện nay.

Bài này sẽ giúp bạn hiểu **tại sao** Apple Silicon lại mạnh cho AI, trước khi bước vào cài đặt ở bài tiếp theo.

---

## 1. Unified Memory Architecture (UMA) — Game changer

Trên hầu hết các hệ thống truyền thống, CPU và GPU có vùng nhớ **riêng biệt**:

```
[CPU] ←→ [System RAM 32GB]
  ↕ (PCIe bus - bottleneck)
[GPU] ←→ [VRAM 8-24GB]
```

Khi chạy LLM trên NVIDIA GPU, model phải nằm hoàn toàn trong VRAM. Nếu model 13B cần 8GB mà GPU chỉ có 8GB VRAM, bạn sẽ gặp Out of Memory Error.

Apple Silicon dùng **Unified Memory Architecture**:

```
[CPU cores] ←→
[GPU cores] ←→  [Unified Memory 16-192GB]
[Neural Engine] ←→
[Media Engine] ←→
```

**Tất cả** CPU, GPU, Neural Engine đều truy cập chung một pool memory. Model LLM 13B cần 8GB? Cả CPU lẫn GPU đều "thấy" nó mà không cần copy data qua lại.

> 💡 **Key insight**: Trên Apple Silicon, bạn có thể load model lớn hơn nhiều so với card đồ họa rời cùng tầm giá, vì RAM hệ thống = "VRAM".

---

## 2. Memory Bandwidth — Tốc độ đọc/ghi quyết định inference

LLM inference phụ thuộc rất lớn vào **memory bandwidth** — tốc độ đọc weights từ RAM. Đây là bottleneck chính khi chạy LLM.

| Chip | Memory Bandwidth | RAM tối đa |
|------|------------------|------------|
| M1 | 68.25 GB/s | 16 GB |
| M1 Pro | 200 GB/s | 32 GB |
| M1 Max | 400 GB/s | 64 GB |
| M1 Ultra | 800 GB/s | 128 GB |
| M2 | 100 GB/s | 24 GB |
| M2 Pro | 200 GB/s | 32 GB |
| M2 Max | 400 GB/s | 96 GB |
| M2 Ultra | 800 GB/s | 192 GB |
| M3 | 100 GB/s | 24 GB |
| M3 Pro | 150 GB/s | 36 GB |
| M3 Max | 400 GB/s | 128 GB |
| M4 | 120 GB/s | 32 GB |
| M4 Pro | 273 GB/s | 48 GB |
| M4 Max | 546 GB/s | 128 GB |

**So sánh với NVIDIA:**

| GPU | VRAM | Bandwidth | Giá |
|-----|------|-----------|-----|
| RTX 4060 | 8 GB | 272 GB/s | ~$300 |
| RTX 4070 Ti | 12 GB | 504 GB/s | ~$750 |
| RTX 4090 | 24 GB | 1008 GB/s | ~$1600 |

NVIDIA có bandwidth cao hơn ở tầm cao cấp, nhưng bị giới hạn bởi VRAM. Một RTX 4060 có 272 GB/s bandwidth nhưng chỉ có **8GB VRAM** — không đủ cho model 13B.

Trong khi đó, MacBook Pro M3 Pro 36GB: bandwidth 150 GB/s, nhưng có thể load model **30B quantized** thoải mái vì toàn bộ 36GB đều khả dụng.

---

## 3. GPU Cores trên Apple Silicon

Apple Silicon tích hợp GPU trực tiếp trên chip (integrated GPU), nhưng đây là GPU **rất mạnh**, không phải loại "inte HD graphics" yếu ớt:

| Chip | GPU Cores | FP16 TFLOPS |
|------|-----------|-------------|
| M1 | 7-8 | 2.6 |
| M2 | 10 | 3.6 |
| M3 | 10 | 4.1 |
| M3 Pro | 14-18 | 7.4 |
| M3 Max | 30-40 | 14.2 |
| M4 | 10 | 4.6 |
| M4 Pro | 20 | 8.7 |
| M4 Max | 40 | 17.4 |

GPU cores này chạy inference LLM cực hiệu quả, đặc biệt khi dùng framework **MLX** của Apple (sẽ học ở Phần 2).

---

## 4. Neural Engine — Hidden gem

Mỗi chip Apple Silicon có **Neural Engine** — bộ xử lý chuyên dụng cho machine learning:

- M1: 16 cores, 11 TOPS
- M2: 16 cores, 15.8 TOPS
- M3: 16 cores, 18 TOPS
- M4: 16 cores, 38 TOPS

Neural Engine tối ưu cho các phép tính matrix đặc trưng của neural network. Hiện tại, phần lớn framework inference (Ollama, llama.cpp) chủ yếu dùng GPU, nhưng Core ML và một số framework mới đã bắt đầu tận dụng Neural Engine.

---

## 5. Tại sao LLM 7B-30B chạy mượt trên Mac?

Hãy tính toán cụ thể:

**Model Llama 3.2 8B (Q4 quantized):**

- Kích thước: ~4.5 GB
- Inference cần ~5.5 GB RAM (model + KV cache + overhead)
- MacBook Air M2 (8GB RAM): chạy được, nhưng chật
- MacBook Pro M3 (18GB RAM): chạy rất thoải mái

**Model Qwen 2.5 32B (Q4 quantized):**

- Kích thước: ~18 GB
- Inference cần ~22 GB RAM
- MacBook Pro 36 GB: chạy mượt
- MacBook Air 24 GB: chạy được nhưng không nên mở nhiều app khác

**Tốc độ generation thực tế trên M3 Pro (36GB):**

| Model | Tokens/giây | Cảm nhận |
|-------|-------------|----------|
| Llama 3.2 3B Q4 | ~65 tok/s | Cực nhanh |
| Llama 3.2 8B Q4 | ~32 tok/s | Rất nhanh |
| Gemma 3 12B Q4 | ~22 tok/s | Nhanh |
| Qwen 2.5 14B Q4 | ~18 tok/s | Tốt |
| Qwen 2.5 32B Q4 | ~8 tok/s | Chấp nhận được |

> 💡 Con người đọc ~250 từ/phút ≈ ~5 tokens/giây. Nên 8 tok/s đã nhanh hơn tốc độ đọc.

---

## 6. So sánh tổng thể: Mac vs PC cho AI local

| Tiêu chí | Mac Apple Silicon | PC + NVIDIA GPU |
|----------|-------------------|-----------------|
| Max model size | Phụ thuộc RAM (lên đến 192GB) | Phụ thuộc VRAM (thường 8-24GB) |
| Bandwidth | 100-800 GB/s | 272-1000 GB/s |
| Giá/GB "VRAM" | Rẻ hơn nhiều | Đắt (RTX 4090: $1600 cho 24GB) |
| Tiếng ồn | Im lặng | Quạt chạy to |
| Điện năng | 15-65W | GPU alone 100-450W |
| Di động | Laptop mỏng nhẹ | Desktop hoặc gaming laptop nặng |
| Ecosystem | macOS only | Linux/Windows, nhiều tool hơn |

**Kết luận**: Mac Apple Silicon là lựa chọn tuyệt vời cho developer muốn chạy AI local hàng ngày. Không phải nhanh nhất, nhưng là sự cân bằng tốt nhất giữa hiệu năng, tiện lợi, tiếng ồn và di động.

---

## 7. Kiểm tra Mac của bạn

Mở Terminal và chạy:

```bash
# Xem chip và RAM
system_profiler SPHardwareDataType | grep -E "(Chip|Memory)"
```

Output mẫu:

```
Chip: Apple M3 Pro
Total Number of Cores: 12 (6 performance and 6 efficiency)
Memory: 36 GB
```

Hoặc dùng lệnh:

```bash
# Xem GPU cores
system_profiler SPDisplaysDataType | grep "Total Number of Cores"
```

Ghi nhớ thông tin này — bạn sẽ cần nó để chọn model phù hợp ở Bài 3.

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| UMA | CPU + GPU dùng chung RAM → load model lớn hơn |
| Memory Bandwidth | Quyết định tốc độ inference, M3 Max đạt 400 GB/s |
| GPU Cores | Integrated nhưng mạnh, chạy LLM inference hiệu quả |
| Neural Engine | Bộ xử lý AI chuyên dụng, đang được tận dụng dần |
| Model size sweet spot | 3B-14B cho 16GB RAM, 14B-32B cho 32GB+ RAM |

---

## Bài tập

1. Kiểm tra Mac của bạn: chip gì, bao nhiêu RAM, bao nhiêu GPU cores?
2. Dựa vào bảng memory bandwidth, ước tính Mac của bạn có thể chạy model size tối đa bao nhiêu?
3. So sánh: nếu bạn có cùng ngân sách mua RTX 4070 Ti ($750), mua thêm RAM cho Mac hay mua GPU rời sẽ hợp lý hơn?

**Bài tiếp theo**: Cài đặt Ollama và chạy LLM đầu tiên trong 5 phút →
