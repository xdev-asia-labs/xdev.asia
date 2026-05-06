---
id: 019d8b33-bb06-7006-c006-ee0600000006
title: 第 6 課：物體檢測和病理學 AI
slug: bai-6-detection-pathology
description: 用於病變檢測的 YOLO/Faster R-CNN。整個幻燈片影像分析。數位病理學工作流程。細胞計數、組織分類。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：醫學影像 AI — 醫療保健電腦視覺
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2405" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2405)"/>

  <!-- Decorations -->
  <g>
    <circle cx="907" cy="91" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="714" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1021" cy="45" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="828" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="259" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="61" x2="1100" y2="141" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="91" x2="1050" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="942.1769145362398,93 942.1769145362398,129 911,147 879.8230854637602,129 879.8230854637602,93.00000000000001 911,75" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：物體檢測和病理學 AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：醫學影像 AI — 醫療保健電腦視覺</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 從本文中，您將了解如何使用 YOLO 和 Faster R-CNN 檢測醫學影像中的病變，分析整個組織病理學標本（Whole Slide Image），並自動計數癌細胞。

---

## 1. 醫療保健中的物體檢測：具體挑戰

醫學對象檢測比自然影像中的檢測更困難，因為：

|問題 |現實世界|健康 |
|--------|--------------|--------|
|物體大小|汽車 ~10% 的照片 |微動脈瘤 < 0.1% 照片 |
|物體形狀|清晰、一致 |病灶可能非常不規則|
|密度| 1-10 個物件/幀 |數百個細胞/貼片 |
|不平衡|光| 1000 個正常斑塊中有 1 個病灶 |
|地面真相|快|放射科醫生每次 CT 需要 3-5 分鐘 |

---

## 2. YOLO cho Lesion Detection trong CT

```python
from ultralytics import YOLO
import cv2
import numpy as np

# YOLOv8 — state of the art cho medical object detection 2024
# Ưu điểm cho y tế:
# - Real-time inference (< 10ms/image trên GPU)
# - Tốt cho deployment trên clinical workstation
# - Anchor-free → handle lesion sizes đa dạng tốt hơn YOLOv5

class LesionDetector:
    """
    Detect pulmonary nodules (u phổi nhỏ) trong CT slices
    Sử dụng YOLOv8 fine-tuned trên LUNA16 dataset
    """
    def __init__(self, model_path: str, conf_threshold: float = 0.25):
        self.model = YOLO(model_path)
        self.conf_threshold = conf_threshold
        self.class_names = {0: "nodule", 1: "mass"}

    def detect_in_ct_volume(
        self,
        ct_volume: np.ndarray,  # (n_slices, H, W) HU values
        pixel_spacing: float = 0.7  # mm/pixel
    ) -> 列表[字典]：
        ”“”
        檢測整個CT體積內的結節
        傳回帶有 3D 座標的檢測列表
        ”“”
        所有檢測= []

        對於 enumerate(ct_volume) 中的 slice_idx、ct_slice：
            # 應用肺窗
            視窗 = apply_windowing(ct_slice, window_center=-600, window_width=1500)
            image_uint8 = (視窗化 * 255).astype(np.uint8)
            image_rgb = cv2.cvtColor(image_uint8, cv2.COLOR_GRAY2RGB)

            #推理
            結果= self.model(image_rgb,conf=self.conf_threshold,verbose=False)

            對於結果中的結果：
                對於 result.boxes 中的框：
                    x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                    conf = float(box.conf[0])
                    cls = int(box.cls[0])

                    # 轉換像素 → 毫米
                    直徑毫米 = ((x2-x1) + (y2-y1)) / 2 * 像素間距

                    all_detections.append({
                        “slice_idx”：slice_idx，
                        「bbox_pixels」：[x1，y1，x2，y2]，
                        「信心」：conf，
                        「類別」：self.class_names.get（cls，「未知」），
                        「直徑_毫米」：圓形（直徑_毫米，1），
                        # 肺-RADS： < 6mm = 1, 6-8mm = 2, > 8毫米= 3/4
                        「lung_rads」：self._lung_rads_category（直徑_毫米）
                    })

        # 跨切片非極大值抑制 (3D NMS)
        返回 self._3d_nms(all_detections)

    def _lung_rads_category(self,diameter_mm: float) -> str:
        """根據 ACR 指南進行 Lung-RADS 分類"""
        如果直徑_mm < 6:
            return "1 (Negative)"
        elif diameter_mm < 8:
            return "2 (Benign, annual follow-up)"
        elif diameter_mm < 15:
            return "3 (Probably Benign, 6-month CT)"
        else:
            return "4A (Suspicious, 3-month CT or PET)"

    def _3d_nms(self, detections: list, z_overlap_threshold: int = 3) -> 清單：
        """合併相鄰切片（同一節點）的偵測"""
        如果沒有檢測到：
            返回[]
        # 組偵測在空間和切片位置方面彼此接近
        # ...（聚類邏輯）
        返回檢測
```

### 2.1。在醫療資料集上訓練 YOLO

```蟒蛇
# YOLO的資料集格式：YOLO txt格式
# 每個圖像需要一個對應的標籤.txt檔案
# 格式：class_id x_center y_center width height (歸一化0-1)

導入作業系統
從 pathlib 導入路徑

def Convert_dicom_annotations_to_yolo(
    注释：列表[dict]，
    影像大小：元組 = (512, 512)
) -> 字符串:
    ”“”
    轉換醫學註釋（x1,y1,x2,y2像素）→YOLO格式
    
    註：[{“class”：0，“x1”：100，“y1”：80，“x2”：150，“y2”：130}]
    ”“”
    H、W = 影像大小
    行=[]

    對於註釋中的 ann：
        x_center = ((ann["x1"] + ann["x2"]) / 2) / W
        y_center = ((ann["y1"] + ann["y2"]) / 2) / H
        寬度 = (ann["x2"] - ann["x1"]) / W
        高度 = (ann["y2"] - ann["y1"]) / H
        lines.append(f"{ann['class']} {x_center:.6f} {y_center:.6f} {寬度:.6f} {高度:.6f}")

    返回“\n”.join(行)

# 用於訓練的 YAML 配置
yolo_config = """
路徑：/data/luna16_yolo
火车：图像/火车
val：圖像/val
测试：图像/测试

nc: 2 # 類別數
名稱：['結節'，'腫塊']

# 針對醫學影像優化的訓練超參數
# 資料增強：保守（如第 3 課所述）
”“”

# 從 YOLOv8 預訓練中進行微調
model = YOLO('yolov8m.pt') # 中等大小：平衡精度/速度

结果=模型.train(
    数据=“luna16.yaml”，
    纪元=100，
    imgsz=512,
    批次=16，
    lr0=0.001，
    lrf=0.01，
    動量=0.937，
    权重衰减=0.0005，
    # 醫療特定的增強設置
    Fliplr=0.5, # 水平翻轉OK
    Flipud=0.0, # 沒有垂直翻轉
    Degrees=10.0, # 小旋轉
    翻譯=0.1，
    比例=0.1，
    # 禁用不適合醫療的增強
    馬賽克=0.0, # 馬賽克創建不切實際的圖像
    混合=0.0，
）
```

---

## 3. Faster R-CNN cho High-Recall Detection

當需要**高召回率**時（遺漏病變是不可接受的）：

```蟒蛇
導入火炬視覺
從 torchvision.models.detection 導入 FasterRCNN
從 torchvision.models.detection.rpn 導入 AnchorGenerator

def create_medical_faster_rcnn(num_classes: int = 2) -> FasterRCNN:
    ”“”
    具有 ResNet-50 FPN 主幹的更快 R-CNN
    針對醫學病灶的客製化錨定尺寸（通常小於自然物體）
    ”“”
    # 主幹：具有特徵金字塔網絡的 ResNet-50
    骨幹 = torchvision.models.detection.backbone_utils.resnet_fpn_backbone(
        'resnet50'，預訓練=True
    ）

    # 针对医学病变的定制锚点
    # 病灶尺寸：5-50mm → 圖片 512px，間距 0.7mm → 7-71 像素
    # 添加比默认更多的小锚点
    锚生成器 = 锚生成器（
        size=((8,), (16,), (32,), (64,), (128,)), # 小於預設值
        纵横比=((0.5, 1.0, 2.0),) * 5
    ）

    roi_pooler = torchvision.ops.MultiScaleRoIAlign(
        featmap_names=['0', '1', '2', '3'],
        output_size=7,
        sampling_ratio=2
    ）

    model = FasterRCNN(
        backbone=backbone,
        num_classes=num_classes,
        rpn_anchor_generator=anchor_generator,
        box_roi_pool=roi_pooler,
        # 降低NMS閾值→保留更多偵測（召回率>精確度）
        box_nms_thresh=0.3,
        # RPN 的较低分数阈值
        rpn_nms_thresh=0.5,
        # 報告檢測的最低分數
        box_score_thresh=0.1,
    ）
    返回模型
```

---

## 4. Digital Pathology — Whole Slide Image Analysis

**全玻片影像 (WSI)**：以高解析度掃描的組織病理學標本。

- 典型尺寸：**100,000 × 100,000 像素**（40 倍放大倍率）
- 文件內容：每張投影片 1-10 GB
- Format: `.svs`, `.ndpi`, `.mrxs`, `.tiff`

```
WSI Challenge:
1. 無法將整個內容載入記憶體 → 右側圖塊
2. 多重解析度：40x、20x、10x、5x、2.5x
3. 染色差異：H&E顏色因醫院而異
4. 偽影：折疊、模糊、墨跡
```

### 4.1。加載並平鋪 WSI

```蟒蛇
import openslide #WSI閱讀庫
將 numpy 導入為 np
從 PIL 匯入影像

WSI處理器類別：
    ”“”
    管道處理整個幻燈片影像以進行 AI 分析
    ”“”
    def __init__(self, wsi_path: str, patch_size: int = 256, 放大倍率: int = 20):
        self.slide = openslide.OpenSlide(wsi_path)
        self.patch_size = patch_size

        # 找到所需放大倍率對應的級別
        native_mag = float(self.slide.properties.get(
            openslide.PROPERTY_NAME_OBJECTIVE_POWER，40
        ））
        downsample_factor = native_mag / 放大倍率
        self.level = self.slide.get_best_level_for_downsample(downsample_factor)
        self.level_downsample = self.slide.level_downsamples[self.level]

    def get_tissue_mask(self,thumbnail_size: tuple = (1000, 1000)) -> np.ndarray:
        ”“”
        創建組織蒙版：區分組織與背景（白色）
        用於指從組織區域提取斑塊，忽略背景
        ”“”
        縮圖 = self.slide.get_thumbnail(thumbnail_size)
        thumbnail_np = np.array(thumbnail.convert('RGB'))

        # 轉換為HSV：組織具有高飽和度
        導入CV2
        hsv = cv2.cvtColor(thumbnail_np, cv2.COLOR_RGB2HSV)

        # 閾值：S > 20 和 V < 220 → tissue
        tissue_mask = (hsv[:, :, 1] > 20) & (HSV[:, :, 2] < 220)
        tissue_mask = tissue_mask.astype(np.uint8) * 255

        # Morphological operations để clean up
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (10, 10))
        tissue_mask = cv2.morphologyEx(tissue_mask, cv2.MORPH_CLOSE, kernel)

        return tissue_mask

    def extract_patches(self, tissue_mask: np.ndarray, min_tissue_pct: float = 0.5):
        """
        Generator: yield patches từ tissue regions
        """
        W, H = self.slide.level_dimensions[self.level]
        thumb_H, thumb_W = tissue_mask.shape

        scale_x = W / thumb_W
        scale_y = H / thumb_H

        step = self.patch_size

        for y in range(0, H - self.patch_size, step):
            for x in range(0, W - self.patch_size, step):
                # Check tissue percentage trong patch (trên thumbnail)
                thumb_y = int(y / scale_y)
                thumb_x = int(x / scale_x)
                thumb_ph = max(1, int(self.patch_size / scale_y))
                thumb_pw = max(1, int(self.patch_size / scale_x))

                patch_mask = tissue_mask[
                    thumb_y:thumb_y+thumb_ph,
                    thumb_x:thumb_x+thumb_pw
                ]
                tissue_pct = patch_mask.mean() / 255

                if tissue_pct >= 最小組織百分比：
                    # 轉換等級座標→等級0座標
                    x0 = int(x * self.level_downsample)
                    y0 = int(y * self.level_downsample)

                    補丁= self.slide.read_region(
                        (x0, y0), 自水平,
                        （自我補丁大小，自我補丁大小）
                    ）
                    patch_rgb = np.array(patch.convert('RGB'))

                    產量 patch_rgb, (x, y)

    def 關閉（自身）：
        self.slide.close()
```

### 4.2. Stain Normalization (Macenko Method)

```蟒蛇
導入CV2
將 numpy 導入為 np

def macenko_stain_normalization(
    來源影像：np.ndarray，
    目標映像：np.ndarray
) -> np.ndarray:
    ”“”
    Macenko 染色標準化：將 H&E 顏色標準化為目標參考。
    
    H&E染色：
    - H（蘇木精）：細胞核染色 → 紫色/藍色
    - E（曙紅）：細胞質染色→粉紅色
    
    每家醫院、每天的染色都不同→如果不正常化，人工智慧就會感到困惑
    ”“”
    def get_stain_matrix(映像: np.ndarray, beta: float = 0.15, alpha: float = 1):
        圖片 = image.astype(np.float32) / 255

        # 光密度
        影像[影像==0] = 1e-6
        OD = -np.log(圖片)

        # 重塑為 (N, 3)
        OD_flat = OD.reshape(-1, 3)

        # 刪除光密度低的像素（背景）
        OD_hat = OD_flat[(OD_flat > beta).any(axis=1)]

        # SVD 尋找染色方向
        _, _, V = np.linalg.svd(OD_hat, full_matrices=False)
        stain_matrix = V[:2, :] # 2 個污點：H 和 E

        返回污點矩陣

    stain_src = get_stain_matrix(來源映像)
    stain_tgt = get_stain_matrix(目標映像)

    # 分離污點並重新標準化
    source_od = -np.log((source_image.astype(np.float32) + 1) / 256)
    source_od_flat = source_od.reshape(-1, 3)

    濃縮 = np.linalg.lstsq(stain_src.T, source_od_flat.T, rcond=None)[0].T

    # 用目標染色矩陣重建
    Normalized_od = 濃度@stain_tgt
    歸一化 = np.exp(-normalized_od.reshape(source_image.shape)) * 255
    傳回 np.clip(歸一化, 0, 255).astype(np.uint8)
```

### 4.3. Multiple Instance Learning (MIL) cho WSI Classification

問題：WSI 有「癌症」或「正常」等標籤，但只有**一小部分**的補丁實際上含有癌症。

```蟒蛇
進口火炬
將 torch.nn 導入為 nn

類別 AttentionMIL(nn.Module):
    ”“”
    用於 WSI 分類的基於注意力的多實例學習
    
    想法：
    1.提取每個單獨補丁的特徵（無需標記每個補丁）
    2.使用Attention來了解哪些補丁最重要
    3. 聚合為投影片層級預測
    
    “包”=整個 WSI
    “實例”= 1 個補丁
    僅包級標籤（癌症/正常），無實例標籤
    ”“”
    def __init__(自身，feature_dim：int = 512，hidden_dim：int = 256)：
        超級().__init__()

        # 特徵提取器：預先訓練的 ResNet（凍結）
        從 torchvision.models 導入 resnet50，ResNet50_Weights
        主幹= resnet50（權重= ResNet50_Weights.IMAGENET1K_V1）
        self.feature_extractor = nn.Sequential(*list(backbone.children())[:-1])
        對於 self.feature_extractor.parameters() 中的參數：
            param.requires_grad = False # 凍結骨幹網

        # 注意力機制
        self.attention = nn.Sequential(
            nn.Linear（feature_dim，hidden_dim），
            nn.Tanh(),
            nn.Linear(hidden_dim, 1)
        ）

        #分類器
        self.classifier = nn.Linear(feature_dim, 1)

    defforward(self, patch: torch.Tensor) -> 元組:
        ”“”
        補丁：（N_補丁，3，H，W）
        回傳：（bag_probability，attention_weights）
        ”“”
        # 提取每個補丁的特徵
        使用 torch.no_grad()：
            特徵 = self.feature_extractor(補丁)
        features = features.squeeze() # (N_patches, feature_dim)

        # 注意力權重
        A = self.attention(features) # (N_patches, 1)
        A = torch.softmax(A, dim=0) # 標準化

        # 聚合：加權和
        z = (A * features).sum(dim=0, keepdim=True) # (1, feature_dim)

        # 預測
        logit = self.classifier(z)
        prob = torch.sigmoid(logit)

        return prob.squeeze(), A.squeeze() # (1,), (N_patches,)
```

---

## 5. 利用 AI 進行細胞計數

```蟒蛇
進口火炬
將 torch.nn 導入為 nn

類別 CellCountingModel(nn.Module):
    ”“”
    用於細胞計數的密度圖方法：
    - 預測密度圖，而不是檢測每個細胞
    - 總密度圖值 ≈ 單元格數量
    - 具有重疊細胞的穩健性（在病理學中常見）
    
    用於：計數乳癌的有絲分裂（核分裂）
    - Ki-67指數：分裂細胞的百分比
    - 對於預後和治療計劃很重要
    ”“”
    def __init__(自身):
        超級().__init__()
        # 修改 VGG16 用於密度估計
        從 torchvision.models 導入 vgg16, VGG16_Weights
        vgg = vgg16(權重=VGG16_Weights.IMAGENET1K_V1)
        特徵 = 列表(vgg.features.children())

        self.frontend = nn.Sequential(*features[:23]) #Pool4

        self.backend = nn.Sequential(
            nn.Conv2d(512, 256, 3, 填充=2, 膨脹=2),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 128, 3, 填充=2, 膨脹=2),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 64, 3, 填充=1),
            nn.ReLU(inplace=True),
        ）

        self.output = nn.Conv2d(64, 1, 1)

    defforward(self, x: torch.Tensor) -> torch.Tensor:
        ”“”
        返回：密度圖（batch、1、H/8、W/8）
        計數=密度圖.sum()*歸一化因子
        ”“”
        x = self.frontend(x)
        x = self.backend(x)
        返回 self.output(x)

def 產生密度圖（
    cell_positions: list[tuple], # [(x1,y1), (x2,y2), ...]
    圖片大小：元組，
    西格瑪：浮動= 5.0
) -> np.ndarray:
    ”“”
    從點註釋（點註釋）建立密度圖
    每個單元 = 1 個高斯斑點
    ”“”
    從 scipy.ndimage 導入 gaussian_filter
    密度 = np.zeros(image_size, dtype=np.float32)

    對於 cell_positions 中的 x、y：
        如果 0 <= x < image_size[1] and 0 <= y < image_size[0]:
            density[int(y), int(x)] = 1.0

    # Smooth với Gaussian kernel
    density = gaussian_filter(density, sigma=sigma)
    return density
```

---

## 6.總結與練習

在這篇文章之後：
- ✅ YOLO cho real-time lesion detection trong CT
- ✅ Faster R-CNN cho high-recall detection
- ✅ WSI pipeline: tissue masking, tiling, stain normalization
- ✅ MIL (Multiple Instance Learning) cho slide classification
- ✅ 使用密度圖進行細胞計數

**第 7 課**：離開醫學影像，轉向 **臨床 NLP** — 使用 BioBERT 分析醫療記錄。

---

＃＃ 鍛煉

1. FROC 分析：Free-Response ROC 是節點偵測的標準指標。執行 FROC 曲線並計算 1/4/8 FP/掃描的靈敏度。為什麼FROC比ROC更適合檢測任務？

2.下載CAMELYON16資料集（淋巴結轉移檢測）。訓練一個簡單的 MIL 模型。目標：AUC > 測試集上為0.85。

3. 對來自 5 家不同醫院的一組 50 個 WSI 修補程式實施 Macenko 標準化管道。可視化標準化前後的顏色。計算顏色統計（R/G/B 通道的平均值、標準差）。

## 2. 架構與原理

### 核心架構

```python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. 練習

### 設定

```bash
pip install torch transformers datasets
```

### 訓練管道

```python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
```

---

## 4. 最佳實踐

|方面|推薦|
|--------|----------------|
|數據|品質重於數量 |
|型號|從簡單開始，擴大規模 |
|培訓|監控損耗曲線|
|評價|使用適當的指標|

---

## 總結

|概念 |重點 |
|--------|-------------|
|建築|適合問題|
|培訓|仔細調整超參數 |
|評價|多個指標|
