---
id: 019d8b39-bb22-7022-c022-ee2200000022
title: 'Bài 22: Model Serving với FastAPI + Docker'
slug: bai-22-model-serving-fastapi-docker
description: >-
  Đóng gói model, xây inference API, versioning model và triển khai dịch vụ ML
  nhỏ gọn.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 'Phần 4: Production, Explainability và Capstone'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Đào tạo xong mô hình nhưng không đưa vào sử dụng thì giá trị vẫn dừng ở notebook. Bài này giúp bạn đóng gói model thành một service đơn giản bằng FastAPI và Docker, đủ để demo nội bộ hoặc làm nền cho triển khai thật.

## Mục tiêu bài học

- Serialize model đúng cách.
- Tạo API nhận input và trả prediction.
- Đóng gói service bằng Docker.

## Đầu ra tối thiểu cần có

- File model đã lưu, ví dụ bằng joblib.
- File app FastAPI.
- File requirements hoặc tương đương.
- Dockerfile để chạy service ổn định.

## Quy trình đề xuất

1. Train model và lưu artifact.
2. Định nghĩa schema input hoặc output.
3. Viết endpoint /predict.
4. Test local bằng request mẫu.
5. Containerize bằng Docker.

## Code khung FastAPI

~~~python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
~~~

## Điều cần nghĩ thêm khi ra môi trường thật

- Logging request và response ở mức phù hợp.
- Quản lý version model.
- Validation input kỹ hơn.
- Timeout, retry và monitoring.

## Sai lầm thường gặp

- Lưu model nhưng quên preprocessing pipeline.
- Schema API không khớp với dữ liệu training.
- Test bằng dữ liệu đẹp, không test input lỗi.

## Bài tập thực hành

- Đóng gói model churn hoặc housing thành API.
- Tạo 3 request mẫu: hợp lệ, thiếu field, sai kiểu dữ liệu.
- Viết README ngắn mô tả cách chạy local bằng Docker.

## Tiêu chí hoàn thành

- [ ] Có API predict chạy local được.
- [ ] Docker build và run thành công.
- [ ] Schema input đủ rõ để người khác gọi API.

## Thực hành từng bước (nâng cao)

1. Chuẩn hóa schema input/output bằng Pydantic.
2. Đóng gói model + preprocessing thành artifact versioned.
3. Viết endpoint predict và health check.
4. Thêm logging cơ bản và xử lý lỗi rõ ràng.
5. Build Docker image và chạy smoke test bằng curl.

## Artifact nên nộp

- Mã nguồn API và Dockerfile chạy được.
- Ví dụ request/response cho 3 tình huống.
- README deployment local tối thiểu.

## Câu hỏi tự kiểm tra

- Vì sao phải version hóa model artifact?
- Nếu schema input thay đổi thì backward compatibility xử lý sao?
- Chỉ số runtime nào cần monitor ngay từ bản đầu?
