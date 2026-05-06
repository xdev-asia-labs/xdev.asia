---
id: 019c9619-ab01-7001-c101-ab0100000001
title: 第一课：什么是计算机视觉？ — 基本影像處理
slug: bai-1-computer-vision-la-gi
description: 介紹電腦視覺的實際應用。使用 OpenCV 進行影像處理：調整大小、裁切、濾波、色彩空間。直方圖、邊緣檢測。基本臉部辨識演示。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：電腦視覺平台
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: 深度學習的電腦視覺：從 CNN 到 Vision Transformer
  slug: computer-vision-deep-learning
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5530" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5530)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="110" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="230" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.650635094611,217.5 1051.650635094611,242.5 1030,255 1008.349364905389,242.5 1008.349364905389,217.5 1030,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是電腦視覺？ — 圖片</tspan>
      <tspan x="60" dy="42">基礎加工</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">深度學習的電腦視覺：從 CNN 到 Vision Transformer</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：電腦視覺平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**電腦視覺 (CV)** — 或「電腦視覺」 — 是人工智慧領域，教導電腦像人類一樣**查看和理解**圖像和影片。從自動駕駛汽車、檢查缺陷產品、臉部辨識到統計商店中的顧客數量——所有這些都是電腦視覺的應用。

> 🎯 **為什麼要學履歷？ ** 電腦視覺是人工智慧領域最**實際應用**的領域——任何有相機和照片的行業都需要簡歷。

---

## 1.什麼是電腦視覺？

### 1.1 定義

電腦視覺是人工智慧領域，可協助電腦從圖像或影片中**提取有意義的資訊**，並根據該資訊**做出決策**。

```
Ảnh/Video (pixels) → CV Model → Thông tin (classification, detection, segmentation)
                                  ↓
                          Quyết định / Hành động
```

### 1.2 CV中的主要問題

|數學問題|描述 |範例|
|----------|--------|--------|
| **影像分類** |分類照片屬於哪一組 |狗與貓，正常與異常 X 光 |
| **物件偵測** |尋找位置 + 物件標籤 | YOLO 偵測人、車輛、標誌 |
| **影像分割** |對每個像素進行分類 |前景/背景分離，醫療 |
| **姿勢估計** |尋找身體關節|身體分析，AR |
| **影像產生** |建立新照片 |穩定擴散，DALL·E |
| **OCR** |識別圖像中的文字 |閱讀車牌和發票|

### 1.3 實際應用－它值多少錢？

```
🚗 Xe tự lái (Tesla, Waymo)       → Hàng tỷ USD
🏥 Y tế (X-ray, MRI, pathology)   → Cứu mạng người
🏭 Sản xuất (kiểm tra lỗi)        → Tiết kiệm triệu USD/năm
🛒 Bán lẻ (đếm khách, heatmap)    → Tăng doanh thu 15-20%
🌾 Nông nghiệp (phát hiện sâu bệnh) → Bảo vệ mùa vụ
📱 Smartphone (Face ID, AR)        → 3+ tỷ người dùng
🎮 Gaming / AR / VR                → Ngành giải trí khổng lồ
```

---

## 2. 數位影像 — 電腦「看起來」如何？

### 2.1 像素－基本單位

數位影像=數位矩陣（像素）。每個像素是 1 個或多個數值 (0-255)：

```python
import numpy as np

# Grayscale image: 1 giá trị/pixel (0=đen, 255=trắng)
gray_image = np.array([
    [0,   50,  100],
    [150, 200, 255],
])
# Shape: (2, 3) = 2 rows × 3 cols

# Color image (RGB): 3 giá trị/pixel
color_image = np.array([
    [[255, 0, 0],    [0, 255, 0]],   # Red, Green
    [[0, 0, 255],    [255, 255, 0]],  # Blue, Yellow
])
# Shape: (2, 2, 3) = 2 rows × 2 cols × 3 channels (R,G,B)
```

### 2.2 色彩空間 — RGB、BGR、HSV、灰階

```python
import cv2
import matplotlib.pyplot as plt

# OpenCV đọc ảnh dạng BGR (không phải RGB!)
img_bgr = cv2.imread("photo.jpg")          # Shape: (H, W, 3) — BGR
img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)  # Chuyển sang RGB
img_gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)  # Grayscale
img_hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)    # HSV

print(f"Kích thước ảnh: {img_bgr.shape}")
# Output: (480, 640, 3) → Height=480, Width=640, Channels=3

# HSV hữu ích cho detect màu cụ thể (lọc màu đỏ, xanh...)
# H: Hue (0-179), S: Saturation (0-255), V: Value/Brightness (0-255)
```

> **💡重要提示：** OpenCV 使用 **BGR**（藍色-綠色-紅色），而不是 RGB。使用 matplotlib（使用 RGB）顯示時，必須轉換： `cv2.cvtColor(img, cv2.COLOR_BGR2RGB)`。

---

## 3. 基礎 OpenCV — 影像處理

### 3.1 讀取、顯示與儲存影像

```python
import cv2
import matplotlib.pyplot as plt

# Đọc ảnh
img = cv2.imread("input.jpg")
print(f"Shape: {img.shape}")        # (Height, Width, Channels)
print(f"Dtype: {img.dtype}")        # uint8 (0-255)
print(f"Size: {img.size} bytes")    # Total pixels × channels

# Hiển thị với matplotlib (cần BGR → RGB)
plt.figure(figsize=(10, 6))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.title("Original Image")
plt.axis("off")
plt.show()

# Lưu ảnh
cv2.imwrite("output.jpg", img)
```

### 3.2 調整大小、裁切、旋轉

```python
# === RESIZE ===
# Resize về kích thước cố định
resized = cv2.resize(img, (640, 480))  # (width, height)

# Resize theo tỷ lệ
scaled = cv2.resize(img, None, fx=0.5, fy=0.5)  # 50%

# Interpolation methods:
# - cv2.INTER_AREA: tốt khi thu nhỏ
# - cv2.INTER_LINEAR: default, tốt cho phóng to
# - cv2.INTER_CUBIC: chất lượng cao hơn, chậm hơn
resized_hq = cv2.resize(img, (1920, 1080), interpolation=cv2.INTER_CUBIC)

# === CROP ===
# Crop = slicing numpy array — đơn giản!
h, w = img.shape[:2]
cropped = img[100:400, 200:500]  # img[y1:y2, x1:x2]

# Crop center
center_crop = img[h//4:3*h//4, w//4:3*w//4]

# === ROTATE ===
# Xoay 90°
rotated_90 = cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)

# Xoay góc bất kỳ
center = (w//2, h//2)
matrix = cv2.getRotationMatrix2D(center, angle=45, scale=1.0)
rotated_45 = cv2.warpAffine(img, matrix, (w, h))
```

### 3.3 在照片上繪圖 — 繪圖

```python
# Vẽ lên bản copy (không thay đổi ảnh gốc)
canvas = img.copy()

# Rectangle (bounding box)
cv2.rectangle(canvas, (100, 50), (300, 250), color=(0, 255, 0), thickness=2)

# Circle
cv2.circle(canvas, center=(200, 150), radius=50, color=(255, 0, 0), thickness=3)

# Text
cv2.putText(canvas, "Hello CV!", (100, 50),
            fontFace=cv2.FONT_HERSHEY_SIMPLEX,
            fontScale=1.0, color=(255, 255, 255), thickness=2)

# Line
cv2.line(canvas, (0, 0), (w, h), color=(0, 0, 255), thickness=2)
```

---

## 4. 影像濾鏡與邊緣偵測

### 4.1 模糊/平滑－降噪

```python
# Gaussian Blur — phổ biến nhất
blurred_gauss = cv2.GaussianBlur(img, ksize=(5, 5), sigmaX=0)

# Median Blur — tốt cho salt-and-pepper noise
blurred_median = cv2.medianBlur(img, ksize=5)

# Bilateral Filter — giữ cạnh nét, mượt vùng phẳng
blurred_bilateral = cv2.bilateralFilter(img, d=9, sigmaColor=75, sigmaSpace=75)

# So sánh
fig, axes = plt.subplots(1, 4, figsize=(20, 5))
titles = ["Original", "Gaussian", "Median", "Bilateral"]
images = [img, blurred_gauss, blurred_median, blurred_bilateral]
for ax, title, image in zip(axes, titles, images):
    ax.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
    ax.set_title(title)
    ax.axis("off")
plt.tight_layout()
plt.show()
```

### 4.2 邊緣偵測－邊緣偵測

```python
# Chuyển sang grayscale trước
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Canny Edge Detection — phổ biến nhất
edges_canny = cv2.Canny(gray, threshold1=50, threshold2=150)

# Sobel — detect cạnh theo hướng X hoặc Y
sobel_x = cv2.Sobel(gray, cv2.CV_64F, dx=1, dy=0, ksize=3)
sobel_y = cv2.Sobel(gray, cv2.CV_64F, dx=0, dy=1, ksize=3)
sobel_combined = cv2.magnitude(sobel_x, sobel_y)

# Laplacian
laplacian = cv2.Laplacian(gray, cv2.CV_64F)

# Visualize
fig, axes = plt.subplots(1, 4, figsize=(20, 5))
axes[0].imshow(gray, cmap='gray')
axes[0].set_title("Grayscale")
axes[1].imshow(edges_canny, cmap='gray')
axes[1].set_title("Canny")
axes[2].imshow(np.abs(sobel_combined), cmap='gray')
axes[2].set_title("Sobel")
axes[3].imshow(np.abs(laplacian), cmap='gray')
axes[3].set_title("Laplacian")
for ax in axes:
    ax.axis("off")
plt.tight_layout()
plt.show()
```

### 4.3 閾值處理－閾值處理

```python
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Simple Threshold
_, thresh_binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Otsu's Threshold — tự tìm ngưỡng tối ưu
_, thresh_otsu = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# Adaptive Threshold — thay đổi ngưỡng theo vùng (tốt khi ánh sáng không đều)
thresh_adaptive = cv2.adaptiveThreshold(
    gray, 255,
    cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv2.THRESH_BINARY, blockSize=11, C=2
)
```

---

## 5. 直方圖 — 分析像素分佈

```python
# Histogram cho ảnh grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
hist = cv2.calcHist([gray], [0], None, [256], [0, 256])

plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.imshow(gray, cmap='gray')
plt.title("Image")
plt.axis("off")

plt.subplot(1, 2, 2)
plt.plot(hist, color='black')
plt.title("Histogram")
plt.xlabel("Pixel Value")
plt.ylabel("Frequency")
plt.tight_layout()
plt.show()

# Histogram Equalization — cải thiện contrast
equalized = cv2.equalizeHist(gray)

# CLAHE — Adaptive Histogram Equalization (tốt hơn!)
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
clahe_img = clahe.apply(gray)
```

---

## 6. 輪廓 — 尋找物件輪廓

```python
# Đọc và chuyển grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold
_, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Tìm contours
contours, hierarchy = cv2.findContours(
    thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
)

print(f"Tìm thấy {len(contours)} contours")

# Vẽ contours lên ảnh
result = img.copy()
cv2.drawContours(result, contours, -1, (0, 255, 0), 2)

# Phân tích từng contour
for i, contour in enumerate(contours):
    area = cv2.contourArea(contour)
    perimeter = cv2.arcLength(contour, closed=True)
    x, y, w, h = cv2.boundingRect(contour)

    # Lọc contour nhỏ (nhiễu)
    if area > 500:
        cv2.rectangle(result, (x, y), (x+w, y+h), (255, 0, 0), 2)
        cv2.putText(result, f"Area: {area:.0f}", (x, y-10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 1)
```

---

## 7. 示範：基本臉部辨識

```python
"""Face Detection với Haar Cascade — phương pháp truyền thống"""
import cv2

# Load pre-trained face detector
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)

# Đọc ảnh
img = cv2.imread("group_photo.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Detect faces
faces = face_cascade.detectMultiScale(
    gray,
    scaleFactor=1.1,    # Scale mỗi bước (1.1 = 10%)
    minNeighbors=5,     # Số neighbors tối thiểu
    minSize=(30, 30)    # Kích thước face tối thiểu
)

print(f"Tìm thấy {len(faces)} khuôn mặt")

# Vẽ bounding box
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)
    cv2.putText(img, "Face", (x, y-10),
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

# Hiển thị
plt.figure(figsize=(12, 8))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.title(f"Detected {len(faces)} faces")
plt.axis("off")
plt.show()
```

> **⚠️ 注意：** Haar Cascade 是一種 **舊** 方法。從第 4 課開始，我們將使用 **YOLO** — 更快、更準確。

---

## 8. 基本履歷管道 - 將其放在一起

```python
"""Pipeline hoàn chỉnh: đọc ảnh → xử lý → detect → hiển thị"""

def simple_cv_pipeline(image_path):
    # 1. Đọc ảnh
    img = cv2.imread(image_path)
    if img is None:
        raise FileNotFoundError(f"Không tìm thấy: {image_path}")

    # 2. Tiền xử lý
    # Resize nếu quá lớn
    h, w = img.shape[:2]
    if max(h, w) > 1000:
        scale = 1000 / max(h, w)
        img = cv2.resize(img, None, fx=scale, fy=scale)

    # 3. Khử nhiễu
    denoised = cv2.GaussianBlur(img, (3, 3), 0)

    # 4. Chuyển grayscale
    gray = cv2.cvtColor(denoised, cv2.COLOR_BGR2GRAY)

    # 5. Edge detection
    edges = cv2.Canny(gray, 50, 150)

    # 6. Tìm contours
    contours, _ = cv2.findContours(
        edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
    )

    # 7. Lọc và vẽ
    result = img.copy()
    significant = [c for c in contours if cv2.contourArea(c) > 1000]
    cv2.drawContours(result, significant, -1, (0, 255, 0), 2)

    return result, len(significant)

# Sử dụng
result, count = simple_cv_pipeline("test_image.jpg")
print(f"Detected {count} objects")
```

---

## 總結

|概念 |記住|
|--------|--------|
| **電腦視覺** |人工智慧教會電腦檢視和理解照片/影片 |
| **像素** |基本單位，值0-255 |
| **色彩空間** | RGB、BGR (OpenCV)、HSV、灰階 |
| **過濾** |高斯模糊、中位數、雙邊 |
| **邊緣偵測** | Canny（最常見）、Sobel、拉普拉斯 |
| **閾值** |二元、Otsu（自選閾值）、自適應 |
| **輪廓** |物體輪廓，用於形狀分析 |
| **哈爾級聯** |經典人臉偵測，將被YOLO取代 |

## 一般練習

1. **設定環境：** 安裝OpenCV： `pip install opencv-python matplotlib numpy`
2. **圖像瀏覽器：** 編寫腳本來讀取圖像，列印出形狀、資料類型、最小/最大像素值。顯示原始影像、灰階圖和直方圖。
3. **邊緣藝術：** 將 Canny 邊緣偵測應用於 5 個不同的影像。嘗試更改閾值1和閾值2。哪張照片效果最好？
4. **人臉計數器：** 使用 Haar Cascade 偵測合照中的人臉。你能正確數出多少張臉？什麼時候錯了？
5. **迷你管道：** 使用輪廓+圓形過濾器建立管道來偵測圓形物體（硬幣/球）。

> **下一篇文章：** CNN 深度探究 — 了解 ResNet、EfficientNet、MobileNet 架構 — 所有現代 CV 模型的基礎。
