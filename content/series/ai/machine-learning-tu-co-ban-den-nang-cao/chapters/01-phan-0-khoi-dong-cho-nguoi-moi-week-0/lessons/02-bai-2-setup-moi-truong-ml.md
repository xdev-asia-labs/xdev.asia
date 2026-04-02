---
id: 019d8b39-bb02-7002-c002-ee0200000002
title: 'Bài 2: Setup môi trường học ML chuẩn production'
slug: bai-2-setup-moi-truong-ml
description: >-
  Cài Python, Jupyter, VS Code, NumPy/Pandas/scikit-learn; tạo project template,
  quản lý dependency và notebook workflow.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 0: Khởi động cho người mới (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: Từ Cơ bản đến Nâng cao'
  slug: machine-learning-tu-co-ban-den-nang-cao
---
## Giới thiệu

Người mới học ML thường mất rất nhiều thời gian vì môi trường cài đặt lộn xộn: Python nhiều version, notebook chạy được hôm nay nhưng mai lỗi, package cài lung tung, file dự án không có cấu trúc. Bài này giúp bạn dựng một môi trường học và làm việc ổn định để từ bài sau chỉ tập trung vào học ML thay vì sửa lỗi cài đặt.

## Mục tiêu bài học

- Cài được môi trường Python sạch cho ML
- Biết cách tổ chức thư mục dự án để học và tái sử dụng code
- Chạy được notebook đầu tiên với NumPy, Pandas và scikit-learn

## 1. Chọn Python version nào?

Khuyến nghị dùng **Python 3.11**.

Lý do:

- Hầu hết thư viện ML phổ biến hỗ trợ tốt.
- Nhanh và ổn định hơn 3.9/3.10.
- Ít rủi ro incompatibility hơn so với các bản quá mới.

Kiểm tra version:

```bash
python --version
python3 --version
```

## 2. Dùng venv hay Conda?

Với người mới, có hai lựa chọn phổ biến:

### `venv`

Ưu điểm:

- Có sẵn trong Python.
- Nhẹ, đơn giản.

Nhược điểm:

- Kém tiện hơn khi làm việc với package có dependency native phức tạp.

### Conda / Miniconda

Ưu điểm:

- Quản lý môi trường tốt cho data/ML.
- Dễ cài package scientific hơn.

Nhược điểm:

- Hơi nặng hơn.

Trong khóa này, nếu bạn mới hoàn toàn, có thể dùng `venv`. Nếu bạn định học sâu lâu dài, có thể chuyển sang Conda.

## 3. Tạo project đầu tiên

Ví dụ với `venv`:

```bash
mkdir ml-course
cd ml-course

python -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install numpy pandas scikit-learn matplotlib jupyter
```

Trên Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

## 4. Cấu trúc thư mục gợi ý

```text
ml-course/
├── notebooks/
├── data/
│   ├── raw/
│   └── processed/
├── src/
│   ├── features/
│   ├── models/
│   └── utils/
├── outputs/
│   ├── figures/
│   └── models/
├── requirements.txt
└── README.md
```

Ý nghĩa:

- `notebooks/`: nơi thử nghiệm và học.
- `data/raw/`: dữ liệu gốc, không sửa trực tiếp.
- `data/processed/`: dữ liệu đã làm sạch.
- `src/`: code tái sử dụng.
- `outputs/`: model, biểu đồ, artifact.

## 5. Công cụ nên cài sẵn

### Bắt buộc

- Python
- VS Code
- Jupyter
- `numpy`, `pandas`, `scikit-learn`

### Nên có

- `matplotlib`, `seaborn`
- `ipykernel`
- `black` hoặc formatter tương tự

```bash
pip install seaborn ipykernel
```

## 6. Chạy notebook đầu tiên

```bash
jupyter notebook
```

Hoặc dùng VS Code mở file `.ipynb`.

Thử chạy đoạn sau:

```python
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris(as_frame=True)
df = iris.frame

print(df.head())
print(df.shape)
print(df['target'].value_counts())
```

Nếu notebook chạy được, môi trường của bạn đã đủ cho phần lớn bài học cơ bản trong series.

## 7. Những file nên có ngay từ đầu

### `requirements.txt`

```txt
numpy
pandas
scikit-learn
matplotlib
seaborn
jupyter
```

### `README.md`

README tối thiểu nên có:

- mục tiêu project
- cách cài môi trường
- cách chạy notebook hoặc script

## 8. Lỗi cài đặt hay gặp

### Lỗi: cài package xong nhưng notebook không nhận

Nguyên nhân thường là notebook đang chạy bằng kernel khác môi trường bạn vừa cài.

Cách xử lý:

```bash
python -m ipykernel install --user --name ml-course
```

Sau đó chọn đúng kernel trong VS Code/Jupyter.

### Lỗi: `ModuleNotFoundError`

Kiểm tra:

- đã activate môi trường chưa
- đang dùng đúng Python chưa
- package cài vào môi trường nào

### Lỗi: notebook quá lộn xộn

Giải pháp:

- notebook chỉ dùng để khám phá
- code tái sử dụng chuyển sang `src/`
- không để mọi thứ trong một file dài 1000 dòng

## 9. Chuẩn làm việc ngay từ đầu

Ba nguyên tắc nhỏ nhưng cực quan trọng:

1. Mỗi project dùng một môi trường riêng.
2. Không sửa trực tiếp dữ liệu gốc.
3. Ghi lại cách chạy project trong README.

Nếu làm ba việc này từ đầu, bạn sẽ đỡ rất nhiều đau đầu khi số project tăng lên.

## Bài tập thực hành

1. Tạo môi trường riêng cho series này.
2. Tạo cấu trúc thư mục theo mẫu ở trên.
3. Chạy notebook đầu tiên và lưu ảnh chụp hoặc output đầu ra.

## Sai lầm thường gặp

- Cài package vào môi trường global.
- Dùng một môi trường cho mọi project.
- Không biết notebook đang dùng kernel nào.

## Tiêu chí hoàn thành

- [ ] Tạo được môi trường ML riêng
- [ ] Chạy được notebook đầu tiên
- [ ] Có thư mục dự án gọn gàng, tái sử dụng được
