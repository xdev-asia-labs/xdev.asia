---
id: 019c9619-bb04-7004-d004-bb0400000004
title: 'レッスン 4: MLX フレームワーク - 内部の Apple インテリジェンス'
slug: bai-4-mlx-framework-apple-intelligence-duoi-nap-capo
description: >-
  MLX とは何ですか? Apple がそれを作成した理由は何ですか?遅延評価アーキテクチャ、統合された計算グラフ。 MLX、llama.cpp、Core
  ML を比較します。 M1/M2/M3/M4 の実際のベンチマーク。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 2: MLX - Apple のネイティブ フレームワークによる 3 倍の高速化'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-772" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-772)"/>

  <!-- Decorations -->
  <g>
    <circle cx="895" cy="95" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="985" cy="225" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="160" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1019.6410161513776,165 1019.6410161513776,205 985,225 950.3589838486224,205 950.3589838486224,165 985,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: MLX フレームワーク - Apple Intelligence</tspan>
      <tspan x="60" dy="42">ボンネットの下で</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: MLX - Apple のネイティブ フレームワークによる 3 倍の高速化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Ollama は **llama.cpp** を使用して LLM を実行します。これはすでに非常に高速です。しかし、Apple には「秘密兵器」があります。**MLX** です。これは、ユニファイド メモリのすべての機能を利用する、Apple Silicon 専用に設計された機械学習フレームワークです。

結果？推論は、同じハードウェア上の llama.cpp より 2 ～ 3 倍高速です。

---

＃＃１．MLXとは何ですか？

[MLX](https://github.com/ml-explore/mlx) は、Apple Research のオープンソース フレームワークで、2023 年後半にリリースされました。PyTorch が NVIDIA CUDA 用に設計されているのと同様に、**Apple Silicon** 用に設計されています。

### 主な特長

- **統合メモリ**: モデル、データ、計算は同じメモリを共有します - コピー オーバーヘッドはゼロです
- **遅延評価**: 必要な場合のみ計算し、計算グラフを自動的に最適化します。
- **動的形状**: 各形状テンソルを事前にコンパイルする必要はありません
- **NumPy のような API**: NumPy/PyTorch を知っているなら馴染み深い
- **マルチデバイス**: GPU、CPU、ニューラル エンジンを自動的に利用します

### MLX と他のフレームワーク

|特長 | MLX |ラマ.cpp | PyTorch (MPS) |コアML |
|----------|-----|-----------|------|-----------|
|ターゲット |アップルシリコン |クロスプラットフォーム |クロスプラットフォーム |アップルのみ |
|バックエンド |金属 |メタル/CPU | MPS | ANE + GPU |
|統合メモリ対応 | ✅ ネイティブ | ❌ 移植済み | ❌ 移植済み | ✅ ネイティブ |
|使いやすさ | ★★★★★ | ★★★☆ | ★★★★ | ★★☆☆ |
| LLM 推論速度 |最速 |速い |遅い |高速 (ただし制限あり) |
|モデルエコシステム |ハギングフェイスMLX |ググフ |パイトーチ | CoreML モデル |
|トレーニングサポート | ✅ | ❌ | ✅ | ❌ |

---

## 2. MLX のほうが速いのはなぜですか?

### ゼロコピーメモリアクセス

llama.cpp で Metal を実行します。

```
[CPU loads model] → [Copy to GPU buffer] → [GPU compute] → [Copy result back]
```

MLX の場合:

```
[Load model to unified memory] → [GPU compute directly] → [Result already accessible]
```

CPU と GPU の間でデータを相互にコピーする手順はありません。 Apple Silicon では、両方が同じ物理メモリにアクセスします。

### 遅延評価グラフ

```python
import mlx.core as mx

# Không tính ngay!
a = mx.array([1, 2, 3])
b = mx.array([4, 5, 6])
c = a + b        # Chưa tính
d = c * 2         # Chưa tính
result = d.sum()  # Chưa tính

# Chỉ tính khi cần giá trị
mx.eval(result)   # Bây giờ mới tính tất cả, tối ưu tự động
```

MLX はすべての操作を計算グラフに収集し、実行前に最適化します。 LLM 推論では、各トークンの生成には何千もの行列演算が必要となるため、これは大きな違いを生みます。

### メタルシェーダーの最適化

MLX は、Apple GPU アーキテクチャ、特に LLM 推論で最も一般的な演算である量子化行列の乗算に最適化されたカスタム Metal シェーダを使用します。

---

## 3. MLX をインストールする

### 前提条件

```bash
# Python 3.9+ (khuyến nghị 3.11+)
python3 --version

# pip
pip3 --version
```

### MLX コアをインストールする

```bash
pip3 install mlx
```

### 設定を確認する

```python
python3 -c "
import mlx.core as mx
print(f'MLX version: {mx.__version__}')
print(f'Default device: {mx.default_device()}')
a = mx.array([1.0, 2.0, 3.0])
print(f'Test: {a * 2}')
"
```

期待される出力:

```
MLX version: 0.x.x
Default device: Device(gpu, 0)
Test: array([2, 4, 6], dtype=float32)
```

> 💡 `Device(gpu, 0)` つまり、MLX は自動的に Apple GPU を使用します。それ以上の設定は必要ありません。

---

## 4. MLX のコア概念

### 配列

```python
import mlx.core as mx

# Tạo array (giống NumPy)
a = mx.array([1, 2, 3, 4])
b = mx.zeros((3, 4))
c = mx.random.normal((2, 3))

# Operations
d = mx.matmul(c, b[:, :3].T)  # Matrix multiplication

# Dtype
e = mx.array([1.0, 2.0], dtype=mx.float16)
```

### デバイスの配置

```python
# MLX tự động dùng GPU
# Nhưng bạn có thể chỉ định:
with mx.stream(mx.cpu):
    result_cpu = mx.matmul(a, b)  # Chạy trên CPU

with mx.stream(mx.gpu):
    result_gpu = mx.matmul(a, b)  # Chạy trên GPU
```

### 実際の遅延評価

```python
import mlx.core as mx
import time

# Tạo matrix lớn
a = mx.random.normal((4096, 4096))
b = mx.random.normal((4096, 4096))

# Chưa tính!
c = mx.matmul(a, b)
print(type(c))  # <class 'mlx.core.array'>

# Tính khi cần
start = time.time()
mx.eval(c)
print(f"Matmul 4096x4096: {time.time() - start:.4f}s")
```

---

## 5. ベンチマーク: MLX 対 llama.cpp

Llama 3.2 8B Q4 を搭載した **MacBook Pro M3 Pro (36GB RAM)** でのベンチマーク:

|メトリクス | llama.cpp (オラマ) | MLX（mlx-lm） |スピードアップ |
|----------|----------|----------|----------|
|迅速な処理 | 280 トーク/秒 | 650 トーク/秒 | **2.3x** |
|トークン生成 | 32 トーク/秒 | 58 トーク/秒 | **1.8x** |
|最初のトークンまでの時間 | 0.45秒 | 0.19秒 | **2.4x** |
|メモリ使用量 | 6.5GB | 5.8GB | -11% |

**M4 Max (128GB)** の場合:

|メトリクス |ラマ.cpp | MLX |スピードアップ |
|-----|----------|-----|----------|
|プロンプト (8B Q4) | 680 トーク/秒 | 1450 トーク/秒 | **2.1x** |
|世代 (8B Q4) | 65 トーク/秒 | 105 トーク/秒 | **1.6x** |
|世代 (32B Q4) | 22トーク/秒 | 42 トーク/秒 | **1.9x** |

> 💡 MLX は、**プロンプト処理** (プレフィル) で特に高速です。これにより、チャット中に「即時のフィードバック」の感覚が生まれます。

---

## 6. MLX をいつ使用するか、llama.cpp をいつ使用するか?

|状況 |推奨事項 |
|----------|---------------|
| Mac で最高速度が必要 | MLX |
| OpenAI 互換 API が必要 |オラマ (llama.cpp) |
|美しい UI が必要 (WebUI を開く...) |オラマ |
| Linux/Windows 上で動作 |ラマ.cpp |
|ローカルでのトレーニング/微調整 | MLX |
|クイックプロトタイピング | MLX |
|本番サーバー | Ollama (より安定) |

**朗報**: 両方を使用できます。日常使用には Ollama を、速度やカスタム パイプラインが必要な場合には MLX を使用します。レッスン 6 では、その組み合わせについて説明します。

---

## 7. MLX エコシステム

MLX にはコア ライブラリがあるだけではありません。 Apple とコミュニティは豊かなエコシステムを構築してきました。

|パッケージ |説明 |
|------|------|
| `mlx` |コアアレイフレームワーク |
| `mlx-lm` | LLM 推論と微調整 |
| `mlx-vlm` |視覚言語モデル |
| `mlx-whisper` |音声からテキストへ |
| `mlx-audio` |テキスト読み上げ |
| `mlx-image` |画像生成（安定拡散） |

Hugging Face には、モデルを MLX 形式に変換することに特化したコミュニティ **MLX コミュニティ** があります。

- [huggingface.co/mlx-community](https://huggingface.co/mlx-community)
- すぐに使用できる数百の量子化済みモデル

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| MLX | Apple Silicon 向けに設計された Apple の ML フレームワーク |
|ゼロコピー |ユニファイドメモリのおかげでCPU↔GPUデータをコピーする必要はありません |
|遅延評価 |演算を収集し、計算前にグラフを最適化します。
|スピードアップ | Mac では llama.cpp よりも約 1.5 ～ 2.5 倍高速 |
|エコシステム | mlx-lm、mlx-vlm、mlx-whisper、mlx-audio |

---

## 演習

1.インストール `mlx` 基本的なテストを実行します: 配列の作成、matmul、デバイスのチェック
2. サイズを増加させた matmul のベンチマーク (1024、2048、4096、8192) — プロット タイム チャート
3. 比較する `mx.array` と `numpy.array` 同じ計算の場合、どちらが速いでしょうか?

**次の記事**: mlx-lm をインストールして MLX 量子化モデルを実行する →
