---
id: 019c9619-ab01-7001-c101-ab0100000001
title: 'Bài 1: Computer Vision là gì? — Image Processing cơ bản'
slug: bai-1-computer-vision-la-gi
description: >-
  Giới thiệu Computer Vision, ứng dụng thực tế. Image processing với
  OpenCV: resize, crop, filter, color spaces. Histogram, edge detection.
  Demo nhận dạng khuôn mặt cơ bản.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng Computer Vision"
course:
  id: 019c9619-aa06-7006-b006-aa0600000006
  title: "Computer Vision với Deep Learning: Từ CNN đến Vision Transformer"
  slug: computer-vision-deep-learning
---

## Giới thiệu

**Computer Vision (CV)** — hay "Thị giác máy tính" — là lĩnh vực AI dạy máy tính **nhìn và hiểu** hình ảnh, video giống con người. Từ xe tự lái, kiểm tra sản phẩm lỗi, nhận dạng khuôn mặt, đến đếm khách trong cửa hàng — tất cả đều là ứng dụng của Computer Vision.

> 🎯 **Tại sao học CV?** Computer Vision là mảng AI có **ứng dụng thực tế nhiều nhất** — bất kỳ ngành nào có camera, có ảnh, đều cần CV.

---

## 1. Computer Vision là gì?

### 1.1 Định nghĩa

Computer Vision là lĩnh vực AI giúp máy tính **trích xuất thông tin có ý nghĩa** từ hình ảnh hoặc video, và **đưa ra quyết định** dựa trên thông tin đó.

```
Ảnh/Video (pixels) → CV Model → Thông tin (classification, detection, segmentation)
                                  ↓
                          Quyết định / Hành động
```

### 1.2 Các bài toán chính trong CV

| Bài toán | Mô tả | Ví dụ |
|----------|--------|-------|
| **Image Classification** | Phân loại ảnh thuộc nhóm nào | Chó vs Mèo, X-ray bình thường vs bất thường |
| **Object Detection** | Tìm VỊ TRÍ + nhãn đối tượng | YOLO detect người, xe, biển báo |
| **Image Segmentation** | Phân loại TỪNG PIXEL | Tách foreground/background, y tế |
| **Pose Estimation** | Tìm các khớp cơ thể | Phân tích thể thao, AR |
| **Image Generation** | Tạo ảnh mới | Stable Diffusion, DALL·E |
| **OCR** | Nhận dạng chữ trong ảnh | Đọc biển số xe, hóa đơn |

### 1.3 Ứng dụng thực tế — Đáng giá bao nhiêu?

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

## 2. Ảnh Số — Máy tính "nhìn" như thế nào?

### 2.1 Pixel — đơn vị cơ bản

Ảnh số = ma trận số (pixels). Mỗi pixel là 1 hoặc nhiều giá trị số (0-255):

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

### 2.2 Color Spaces — RGB, BGR, HSV, Grayscale

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

> **💡 Lưu ý quan trọng:** OpenCV dùng **BGR** (Blue-Green-Red), KHÔNG phải RGB. Khi hiển thị bằng matplotlib (dùng RGB), bạn phải convert: `cv2.cvtColor(img, cv2.COLOR_BGR2RGB)`.

---

## 3. OpenCV Cơ Bản — Image Processing

### 3.1 Đọc, hiển thị, lưu ảnh

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

### 3.2 Resize, Crop, Rotate

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

### 3.3 Vẽ trên ảnh — Drawing

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

## 4. Image Filtering & Edge Detection

### 4.1 Blur / Smoothing — Khử nhiễu

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

### 4.2 Edge Detection — Phát hiện cạnh

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

### 4.3 Thresholding — Phân ngưỡng

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

## 5. Histogram — Phân tích phân bố pixel

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

## 6. Contours — Tìm đường viền đối tượng

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

## 7. Demo: Nhận dạng khuôn mặt cơ bản

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

> **⚠️ Lưu ý:** Haar Cascade là phương pháp **cũ**. Từ bài 4 trở đi, chúng ta sẽ dùng **YOLO** — nhanh và chính xác hơn rất nhiều.

---

## 8. Pipeline CV cơ bản — Kết hợp lại

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Computer Vision** | AI dạy máy tính nhìn và hiểu ảnh/video |
| **Pixel** | Đơn vị cơ bản, giá trị 0-255 |
| **Color Space** | RGB, BGR (OpenCV), HSV, Grayscale |
| **Filtering** | Gaussian Blur, Median, Bilateral |
| **Edge Detection** | Canny (phổ biến nhất), Sobel, Laplacian |
| **Threshold** | Binary, Otsu (tự chọn ngưỡng), Adaptive |
| **Contours** | Đường viền đối tượng, dùng cho shape analysis |
| **Haar Cascade** | Face detection cổ điển, sẽ được thay bằng YOLO |

## Bài tập tổng hợp

1. **Setup Environment:** Cài đặt OpenCV: `pip install opencv-python matplotlib numpy`
2. **Image Explorer:** Viết script đọc 1 ảnh, in ra shape, dtype, min/max pixel value. Hiển thị ảnh gốc, grayscale, và histogram.
3. **Edge Art:** Áp dụng Canny Edge Detection lên 5 ảnh khác nhau. Thử thay đổi threshold1 và threshold2. Ảnh nào cho kết quả đẹp nhất?
4. **Face Counter:** Dùng Haar Cascade detect khuôn mặt trong ảnh nhóm. Đếm chính xác bao nhiêu khuôn mặt? Khi nào nó sai?
5. **Mini Pipeline:** Xây pipeline phát hiện đối tượng hình tròn (coins/balls) dùng contours + circularity filter.

> **Bài tiếp theo:** CNN Deep Dive — tìm hiểu kiến trúc ResNet, EfficientNet, MobileNet — nền tảng của mọi model CV hiện đại.
