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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4723" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4723)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="133" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="254" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="115" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="236" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="97" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.9089653438086,124 975.9089653438086,162 943,181 910.0910346561914,162 910.0910346561914,124.00000000000001 943,105" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Setup môi trường học ML chuẩn</tspan>
      <tspan x="60" dy="42">production</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 0: Khởi động cho người mới (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
