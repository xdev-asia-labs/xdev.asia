---
id: 019d8b33-bb06-7006-c006-ee0600000006
title: 'レッスン 6: 物体検出と病理学 AI'
slug: bai-6-detection-pathology
description: 病変検出のための YOLO/より高速な R-CNN。スライド全体の画像分析。デジタル病理学ワークフロー。細胞計数、組織分類。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: 医用画像 AI — ヘルスケアのためのコンピューター ビジョン'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: '医療とヘルスケアにおける AI: 実戦アプリケーション'
  slug: ai-trong-y-te-healthcare
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: 物体検出と病理学 AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">医療とヘルスケアにおける AI: 実戦アプリケーション</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 医用画像 AI — ヘルスケアのためのコンピューター ビジョン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> この記事では、YOLO と Faster R-CNN を使用して医療画像から病変を検出し、病理組織標本全体 (スライド全体画像) を解析し、がん細胞を自動的にカウントする方法を理解します。

---

## 1. 医療における物体検出: 特有の課題

医療対象物の検出は、次の理由から自然画像での検出よりも困難です。

|問題 |現実世界 |健康 |
|------|--------------|------|
|オブジェクトのサイズ |車の写真の ~10% |微小動脈腫瘍 < 0.1% 写真 |
|オブジェクトの形状 |明確で一貫性のある |病変は非常に不規則になる場合があります。
|密度 | 1 ～ 10 オブジェクト/フレーム |パッチあたり数百のセル |
|アンバランス |ライト |正常パッチ 1000 個に 1 個の病変 |
|グラウンドトゥルース |速い |放射線科医は CT あたり 3 ～ 5 分かかります |

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
    ) -> リスト[辞書]:
        「」
        CTボリューム全体で結節を検出
        3D 座標を含む検出リストを返します。
        「」
        すべての検出 = []

        enumerate(ct_volume)のslice_idx、ct_sliceの場合:
            # 肺ウィンドウを適用する
            windowed = apply_windowing(ct_slice, window_center=-600, window_width=1500)
            image_uint8 = (ウィンドウ * 255).astype(np.uint8)
            image_rgb = cv2.cvtColor(image_uint8, cv2.COLOR_GRAY2RGB)

            #推論
            結果 = self.model(image_rgb、conf=self.conf_threshold、verbose=False)

            結果の結果の場合:
                result.boxes のボックスの場合:
                    x1、y1、x2、y2 = box.xyxy[0].cpu().numpy()
                    conf = float(box.conf[0])
                    cls = int(box.cls[0])

                    # ピクセル → mm に変換
                    直径 mm = ((x2-x1) + (y2-y1)) / 2 * ピクセル間隔

                    all_detections.append({
                        "スライスidx": スライスidx、
                        "bbox_pixels": [x1, y1, x2, y2],
                        「自信」: conf、
                        "クラス": self.class_names.get(cls, "unknown"),
                        "直径_mm": 円形(直径_mm, 1),
                        # 肺-RADS: < 6mm = 1, 6-8mm = 2, > 8mm = 3/4
                        "lung_rads": self._lung_rads_category(直径_mm)
                    })

        # スライス全体にわたる非最大抑制 (3D NMS)
        self._3d_nms(all_detections) を返す

    def _lung_rads_category(self, 直径_mm: float) -> str:
        """ACR ガイドラインに基づく肺-RADS 分類"""
        直径_mmの場合 < 6:
            return "1 (Negative)"
        elif diameter_mm < 8:
            return "2 (Benign, annual follow-up)"
        elif diameter_mm < 15:
            return "3 (Probably Benign, 6-month CT)"
        else:
            return "4A (Suspicious, 3-month CT or PET)"

    def _3d_nms(self, detections: list, z_overlap_threshold: int = 3) -> リスト:
        """隣接するスライスからの検出をマージします (同じノード)"""
        検出されない場合:
            [] を返す
        # グループ検出は空間的およびスライス位置の点で互いに近い
        # ... (クラスタリングロジック)
        リターン検出
```

＃＃＃２．１．医療データセットでの YOLO のトレーニング

```パイソン
# YOLO のデータセット形式: YOLO txt 形式
# 各画像には対応するラベルの .txt ファイルが必要です
# 形式: class_id x_center y_center width height (正規化された 0-1)

OSをインポートする
pathlibインポートパスから

def Convert_dicom_annotations_to_yolo(
    注釈: list[dict]、
    画像サイズ: タプル = (512, 512)
) -> 文字列:
    「」
    医療注釈 (x1,y1,x2,y2 ピクセル) → YOLO 形式に変換
    
    アノテーション: [{"クラス": 0, "x1": 100, "y1": 80, "x2": 150, "y2": 130}]
    「」
    高さ、幅 = 画像サイズ
    行数 = []

    注釈内のアンの場合:
        x_center = ((ann["x1"] + ann["x2"]) / 2) / W
        y_center = ((ann["y1"] + ann["y2"]) / 2) / H
        幅 = (ann["x2"] - ann["x1"]) / W
        身長 = (ann["y2"] - ann["y1"]) / H
        Lines.append(f"{ann['class']} {x_center:.6f} {y_center:.6f} {width:.6f} {height:.6f}")

    "\n".join(行)を返します

# トレーニング用の YAML 構成
yolo_config = """
パス: /data/luna16_yolo
電車: 画像/電車
val: 画像/val
テスト: 画像/テスト

NC: 2 # クラス数
名前: ['結節'、'塊']

# 医療画像用に最適化されたハイパーパラメータのトレーニング
# データ拡張: 保守的 (レッスン 3 で学習したとおり)
「」

# 事前トレーニングされた YOLOv8 からの微調整
model = YOLO('yolov8m.pt') # 中型サイズ: バランス精度/速度

結果 = model.train(
    データ = "luna16.yaml",
    エポック=100、
    imgsz=512、
    バッチ=16、
    lr0=0.001、
    lrf=0.01、
    運動量=0.937、
    体重減衰=0.0005、
    # 医療固有の拡張設定
    flicklr=0.5, # 水平反転OK
    flickud=0.0, # 垂直方向の反転はありません
    度=10.0、# 小さな回転
    変換=0.1、
    スケール=0.1、
    # 医療には適さない拡張を無効にする
    mosaic=0.0, # モザイクは非現実的な画像を作成します
    ミックスアップ=0.0、
）
```

---

## 3. Faster R-CNN cho High-Recall Detection

**高度な再現率**が必要な場合 (病変の見逃しは許容されません):

```パイソン
輸入トーチビジョン
torchvision.models.detection からインポート FasterRCNN
torchvision.models.detection.rpn から AnchorGenerator をインポート

def create_medical_faster_rcnn(num_classes: int = 2) -> FasterRCNN:
    「」
    ResNet-50 FPN バックボーンによる高速 R-CNN
    医療病変用のカスタムアンカーサイズ (通常は自然物体より小さい)
    「」
    # バックボーン: 機能ピラミッド ネットワークを備えた ResNet-50
    backbone = torchvision.models.detection.backbone_utils.resnet_fpn_backbone(
        'resnet50'、事前トレーニング済み = True
    ）

    # 医学的病変のカスタムアンカー
    # 病変サイズ: 5-50mm → 画像 512px、間隔 0.7mm → 7-71 ピクセル
    # デフォルトよりも小さなアンカーを追加します
    アンカージェネレーター = アンカージェネレーター(
        size=((8,), (16,), (32,), (64,), (128,)), # デフォルトより小さい
        アスペクト比=((0.5, 1.0, 2.0),) * 5
    ）

    roi_pooler = torchvision.ops.MultiScaleRoIAlign(
        featmap_names=['0', '1', '2', '3'],
        出力サイズ=7、
        サンプリング率=2
    ）

    モデル = FasterRCNN(
        バックボーン＝背骨、
        num_classes=num_classes、
        rpn_anchor_generator=アンカー_ジェネレーター、
        box_roi_pool=roi_pooler、
        # NMS しきい値を下げる → より多くの検出を維持 (再現率 > 精度)
        box_nms_thresh=0.3、
        # RPN の下限スコアしきい値
        rpn_nms_thresh=0.5、
        # 検出を報告するための最小スコア
        box_score_thresh=0.1、
    ）
    リターンモデル
```

---

## 4. Digital Pathology — Whole Slide Image Analysis

**全スライド画像 (WSI)**: 高解像度でスキャンされた病理組織標本。

- 一般的なサイズ: **100,000 × 100,000 ピクセル** (倍率 40 倍)
- ファイルコンテンツ: スライドあたり 1 ～ 10 GB
- Format: `.svs`, `.ndpi`, `.mrxs`, `.tiff`

```
WSI チャレンジ:
1. 全体をメモリにロードできない → 右のタイル
2. マルチ解像度: 40x、20x、10x、5x、2.5x
3. 染色のばらつき: H&E の色は病院によって異なります。
4. アーティファクト: 折り目、ぼかし、インク跡
```

＃＃＃４．１． WSI のロードとタイル化

```パイソン
openslide をインポート # WSI 読み取りライブラリ
numpyをnpとしてインポート
PILインポート画像から

クラス WSIProcessor:
    「」
    パイプライン処理 AI 分析用スライド全体画像
    「」
    def __init__(self、wsi_path: str、patch_size: int = 256、倍率: int = 20):
        self.slide = openslide.OpenSlide(wsi_path)
        self.patch_size = パッチ_サイズ

        # 希望の倍率に対応するレベルを見つける
        Native_mag = float(self.slide.properties.get(
            openslide.PROPERTY_NAME_OBJECTIVE_POWER、40
        ))
        ダウンサンプル係数 = ネイティブマグ / 倍率
        self.level = self.slide.get_best_level_for_downsample(downsample_factor)
        self.level_downsample = self.slide.level_downsamples[self.level]

    def get_tissue_mask(self, sumnail_size: tuple = (1000, 1000)) -> np.ndarray:
        「」
        組織マスクの作成: 組織と背景 (白) を区別します。
        バックグラウンドを無視して組織領域からパッチを抽出することを指すために使用されます。
        「」
        サムネイル = self.slide.get_thumbnail(thumbnail_size)
        summnail_np = np.array(thumbnail.convert('RGB'))

        # HSV に変換: 組織の彩度が高い
        インポートCV2
        hsv = cv2.cvtColor(thumbnail_np, cv2.COLOR_RGB2HSV)

        # しきい値: S > 20 および V < 220 → tissue
        tissue_mask = (hsv[:, :, 1] > 20) & (hsv[:, :, 2] < 220)
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

                if tissue_pct >= min_tissue_pct:
                    # レベル座標→レベル0座標に変換
                    x0 = int(x * self.level_downsample)
                    y0 = int(y * self.level_downsample)

                    パッチ = self.slide.read_region(
                        (x0, y0)、自己.レベル、
                        (self.patch_size, self.patch_size)
                    ）
                    patch_rgb = np.array(patch.convert('RGB'))

                    生成パッチ_rgb, (x, y)

    def close(self):
        self.slide.close()
```

### 4.2. Stain Normalization (Macenko Method)

```パイソン
インポートCV2
numpyをnpとしてインポート

def macenko_stain_normalization(
    ソースイメージ: np.ndarray、
    ターゲット画像: np.ndarray
) -> np.ndarray:
    「」
    Macenko 染色正規化: H&E カラーをターゲット参照に正規化します。
    
    H&E 染色:
    - H (ヘマトキシリン): 細胞核を染色 → 紫/青
    ・E（エオシン）：細胞質染色 → ピンク色
    
    病院ごとに毎日染色が異なる → 正常化しないとAIが混乱する
    「」
    def get_stain_matrix(画像: np.ndarray、ベータ: float = 0.15、アルファ: float = 1):
        画像 = image.astype(np.float32) / 255

        # 光学濃度
        画像[画像 == 0] = 1e-6
        OD = -np.log(画像)

        # (N, 3) に変形します
        OD_フラット = OD.reshape(-1, 3)

        # 光学濃度の低いピクセルを削除します (背景)
        OD_hat = OD_フラット[(OD_フラット > ベータ).any(axis=1)]

        # SVD による汚れの方向の検索
        _, _, V = np.linalg.svd(OD_hat, full_matrices=False)
        tain_matrix = V[:2, :] # 2 汚れ: H および E

        染色行列を返す

    tain_src = get_stain_matrix(source_image)
    tain_tgt = get_stain_matrix(ターゲット画像)

    # 汚れを分離して正規化する
    source_od = -np.log((source_image.astype(np.float32) + 1) / 256)
    ソース_od_フラット = ソース_od.reshape(-1, 3)

    集中 = np.linalg.lstsq(stain_src.T, source_od_ flat.T, rcond=None)[0].T

    # ターゲット染色マトリックスを使用して再構築します
    Normalized_od = 濃度@stain_tgt
    正規化 = np.exp(-normalized_od.reshape(source_image.shape)) * 255
    return np.clip(normalized, 0, 255).astype(np.uint8)
```

### 4.3. Multiple Instance Learning (MIL) cho WSI Classification

問題: WSI には「がん」や「正常」などのラベルが付いていますが、実際にがんが含まれているのはパッチの**ごく一部**だけです。

```パイソン
輸入トーチ
torch.nn を nn としてインポート

クラスアテンションMIL(nn.Module):
    「」
    WSI 分類のための注意ベースの複数インスタンス学習
    
    アイデア:
    1. 個々のパッチの特徴を抽出します（各パッチにラベルを付ける必要はありません）
    2. アテンションを使用して、どのパッチが最も重要であるかを確認します
    3. スライドレベルの予測に集約する
    
    「バッグ」 = WSI 全体
    「インスタンス」 = 1 パッチ
    バッグレベルのラベル（がん/正常）のみ、インスタンスラベルなし
    「」
    def __init__(self, feature_dim: int = 512, hidden_dim: int = 256):
        super().__init__()

        # 特徴抽出器: 事前トレーニングされた ResNet (凍結)
        torchvision.models から resnet50、ResNet50_Weights をインポート
        バックボーン = resnet50(weights=ResNet50_Weights.IMAGENET1K_V1)
        self.feature_extractor = nn.Sequential(*list(backbone.children())[:-1])
        self.feature_extractor.parameters() のパラメータ:
            param.requires_grad = False # バックボーンをフリーズします

        # アテンションメカニズム
        self.attention = nn.Sequential(
            nn.Linear(feature_dim, hidden_dim),
            nn.Tanh()、
            nn.Linear(hidden_dim, 1)
        ）

        #分類子
        self.classifier = nn.Linear(feature_dim, 1)

    def forward(self, patches: torch.Tensor) -> タプル:
        「」
        パッチ: (N_パッチ、3、H、W)
        戻り値: (bag_probability、attention_weights)
        「」
        # パッチごとの特徴を抽出する
        torch.no_grad() を使用:
            features = self.feature_extractor(パッチ)
        features = features.squeeze() # (N_patches, feature_dim)

        # アテンションウェイト
        A = self.attention(features) # (N_patches, 1)
        A = torch.softmax(A, dim=0) # 正規化

        # 集計: 加重合計
        z = (A * features).sum(dim=0, keepdim=True) # (1, feature_dim)

        # 予測する
        logit = self.classifier(z)
        prob = torch.sigmoid(logit)

        return prob.squeeze(), A.squeeze() # (1,), (N_patches,)
```

---

## 5. AI による細胞計数

```パイソン
輸入トーチ
torch.nn を nn としてインポート

クラス CellCountingModel(nn.Module):
    「」
    細胞計数のための密度マップアプローチ:
    - 各セルを検出する代わりに、密度マップを予測します
    - 総密度マップ値 ≈ セル数
    - 細胞が重なり合って堅牢 (病理学で一般的)
    
    用途: 乳がんの有糸分裂 (核分裂) のカウント
    - Ki-67 インデックス: 分裂細胞の割合
    - 予後と治療計画にとって重要
    「」
    def __init__(自分自身):
        super().__init__()
        # 密度推定用に VGG16 を修正
        torchvision.models から vgg16、VGG16_Weights をインポート
        vgg = vgg16(weights=VGG16_Weights.IMAGENET1K_V1)
        features = list(vgg.features.children())

        self.frontend = nn.Sequential(*features[:23]) #Pool4

        self.backend = nn.Sequential(
            nn.Conv2d(512, 256, 3, パディング=2, 拡張=2),
            nn.ReLU(inplace=True)、
            nn.Conv2d(256, 128, 3, パディング = 2, 拡張 = 2),
            nn.ReLU(inplace=True)、
            nn.Conv2d(128, 64, 3, パディング=1),
            nn.ReLU(inplace=True)、
        ）

        self.output = nn.Conv2d(64, 1, 1)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        「」
        戻り値: 密度マップ (バッチ、1、H/8、W/8)
        カウント = 密度マップ.sum() * 正規化係数
        「」
        x = self.frontend(x)
        x = self.backend(x)
        self.output(x) を返す

defgenerate_density_map(
    cell_positions: list[タプル]、# [(x1,y1), (x2,y2), ...]
    image_size: タプル、
    シグマ: 浮動小数点 = 5.0
) -> np.ndarray:
    「」
    ポイントアノテーション（ドットアノテーション）から密度マップを作成
    各セル = 1 ガウスブロブ
    「」
    scipy.ndimage から gaussian_filter をインポート
    密度 = np.zeros(image_size, dtype=np.float32)

    cell_positions の x、y の場合:
        0の場合 <= x < image_size[1] and 0 <= y < image_size[0]:
            density[int(y), int(x)] = 1.0

    # Smooth với Gaussian kernel
    density = gaussian_filter(density, sigma=sigma)
    return density
```

---

## 6. まとめと演習

この投稿の後:
- ✅ YOLO cho real-time lesion detection trong CT
- ✅ Faster R-CNN cho high-recall detection
- ✅ WSI pipeline: tissue masking, tiling, stain normalization
- ✅ MIL (Multiple Instance Learning) cho slide classification
- ✅ 密度マップによる細胞計数

**レッスン 7**: 医用画像処理を離れ、**臨床 NLP** に移行します — BioBERT を使用した医療記録の分析。

---

＃＃ エクササイズ

1. FROC 分析: 自由応答 ROC はノード検出の標準メトリックです。 FROC 曲線を実装し、1/4/8 FP/スキャンで感度を計算します。検出タスクには ROC よりも FROC の方が適しているのはなぜですか?

2. CAMELYON16 データセット (リンパ節転移検出) をダウンロードします。単純な MIL モデルをトレーニングします。対象：AUC > テストセットでは0.85。

3. 5 つの異なる病院からの 50 個の WSI パッチのセットに対して Macenko 正規化パイプラインを実装します。正規化の前後の色を視覚化します。色の統計 (R/G/B チャンネルの平均値、標準値) を計算します。

## 2. アーキテクチャと原則

### コアアーキテクチャ

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

## 3. 練習する

### セットアップ

```bash
pip install torch transformers datasets
```

### トレーニング パイプライン

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

## 4. ベストプラクティス

|側面 |推薦 |
|------|------|
|データ |量より質 |
|モデル |シンプルに始めてスケールアップ |
|トレーニング |損失曲線を監視する |
|評価 |適切な指標を使用する |

---

## 概要

|コンセプト |重要なポイント |
|----------|---------------|
|建築 |問題に適した |
|トレーニング |ハイパーパラメータの慎重な調整 |
|評価 |複数のメトリクス |
