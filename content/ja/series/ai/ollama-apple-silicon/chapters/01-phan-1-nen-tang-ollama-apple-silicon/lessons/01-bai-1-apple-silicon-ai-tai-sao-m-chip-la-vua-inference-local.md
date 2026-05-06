---
id: 019c9619-bb01-7001-d001-bb0100000001
title: 'レッスン 1: Apple シリコンと AI - M チップがローカル推論の王様である理由'
slug: bai-1-apple-silicon-ai-tai-sao-m-chip-la-vua-inference-local
description: >-
  ユニファイド メモリ アーキテクチャ (UMA) とは何ですか?また、それがローカル AI ゲームを変える理由は何ですか? M1/M2/M3/M4 と
  NVIDIA GPU を比較します。メモリ帯域幅、ニューラル エンジン、GPU コア。 LLM 7B-30B が MacBook
  でスムーズに動作するのはなぜですか?
duration_minutes: 45
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: プラットフォーム - Ollama と Apple Silicon'
course:
  id: 019c9619-aa11-7011-b011-aa1100000011
  title: Apple Silicon で Ollama を使用して AI Local を実行する
  slug: ollama-apple-silicon
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2699" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2699)"/>

  <!-- Decorations -->
  <g>
    <circle cx="727" cy="191" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="981" cy="125" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="92" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="59" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.1769145362398,153 1002.1769145362398,189 971,207 939.8230854637602,189 939.8230854637602,153 971,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI と ML — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: Apple Silicon と AI - なぜ M チップを使うのか</tspan>
      <tspan x="60" dy="42">局所推論の王様です</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Apple Silicon で Ollama を使用して AI Local を実行する</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: プラットフォーム - Ollama と Apple Silicon</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

2026 年には、ラップトップ上で AI をローカルで実行することは、もはや単なる「遊び」ではなく、真に役立つスキルになります。そして、Apple Silicon は現在最高のローカル推論プラットフォームの 1 つです。

この記事は、次の記事で設定に入る前に、**なぜ** Apple Silicon が AI に強いのかを理解するのに役立ちます。

---

## 1. ユニファイド メモリ アーキテクチャ (UMA) — ゲームチェンジャー

ほとんどの従来のシステムでは、CPU と GPU には **別々の** メモリ領域があります。

```
[CPU] ←→ [System RAM 32GB]
  ↕ (PCIe bus - bottleneck)
[GPU] ←→ [VRAM 8-24GB]
```

NVIDIA GPU で LLM を実行する場合、モデル全体が VRAM 内に存在する必要があります。 13B モデルに 8GB が必要でも、GPU の VRAM が 8GB しかない場合、メモリ不足エラーが発生します。

Apple Silicon は **ユニファイド メモリ アーキテクチャ** を使用します。

```
[CPU cores] ←→
[GPU cores] ←→  [Unified Memory 16-192GB]
[Neural Engine] ←→
[Media Engine] ←→
```

**すべて**の CPU、GPU、ニューラル エンジンは同じメモリ プールにアクセスします。モデル LLM 13B には 8GB が必要ですか? CPU と GPU の両方は、データを前後にコピーする必要なく、それを「認識」します。

> 💡 **重要な洞察**: Apple Silicon では、システム RAM = 「VRAM」であるため、同じ価格帯の個別グラフィックス カードよりもはるかに大きなモデルをロードできます。

---

## 2. メモリ帯域幅 — 読み取り/書き込み速度が推論を決定します

LLM 推論は、**メモリ帯域幅**、つまり RAM から重みを読み取る速度に大きく依存します。これは、LLM を実行するときの主なボトルネックです。

|チップス |メモリ帯域幅 |最大RAM |
|----------|----------|---------------|
| M1 | 68.25 GB/秒 | 16GB |
| M1プロ | 200 GB/秒 | 32GB |
| M1マックス | 400 GB/秒 | 64GB |
| M1ウルトラ | 800 GB/秒 | 128GB |
| M2 | 100 GB/秒 | 24GB |
| M2プロ | 200 GB/秒 | 32GB |
| M2マックス | 400 GB/秒 | 96GB |
| M2ウルトラ | 800 GB/秒 | 192GB |
| M3 | 100 GB/秒 | 24GB |
| M3プロ | 150 GB/秒 | 36GB |
| M3マックス | 400 GB/秒 | 128GB |
| M4 | 120 GB/秒 | 32GB |
| M4プロ | 273 GB/秒 | 48GB |
| M4マックス | 546 GB/秒 | 128GB |

**NVIDIA との比較:**

| GPU | VRAM |帯域幅 |価格 |
|-----|-----|----------||-----|
| RTX4060 | 8GB | 272 GB/秒 | ~$300 |
| RTX 4070 Ti | 12GB | 504 GB/秒 | ~$750 |
| RTX4090 | 24GB | 1008 GB/秒 | ~1600ドル |

NVIDIA はハイエンドの帯域幅が高くなりますが、VRAM によって制限されます。 RTX 4060 の帯域幅は 272 GB/秒ですが、**8GB VRAM** しかなく、13B モデルには十分ではありません。

一方、MacBook Pro M3 Pro 36GB: 帯域幅 150 GB/s ですが、36GB がすべて利用可能なため、**30B 量子化** モデルを快適にロードできます。

---

## 3. Apple Silicon 上の GPU コア

Apple Silicon は GPU をチップ上に直接統合します (統合 GPU) が、これは **非常に強力な** GPU であり、弱い「インテ HD グラフィックス」タイプではありません。

|チップス | GPUコア | FP16 TFLOPS |
|------|-----------|---------------|
| M1 | 7-8 | 2.6 |
| M2 | 10 | 3.6 |
| M3 | 10 | 4.1 |
| M3プロ | 14-18 | 7.4 |
| M3マックス | 30-40 | 14.2 |
| M4 | 10 | 4.6 |
| M4プロ | 20 | 8.7 |
| M4マックス | 40 | 17.4 |

これらの GPU コアは、特に Apple の **MLX** フレームワークを使用する場合に、LLM 推論を非常に効果的に実行します (パート 2 で学習します)。

---

## 4. ニューラル エンジン — 隠れた宝石

各 Apple Silicon チップには、機械学習専用のプロセッサである **Neural Engine** が搭載されています。

- M1: 16 コア、11 TOPS
- M2: 16 コア、15.8 TOPS
- M3: 16 コア、18 TOPS
- M4: 16 コア、38 TOPS

Neural Engine は、ニューラル ネットワークに特有の行列計算用に最適化されています。現在、ほとんどの推論フレームワーク (Ollama、llama.cpp) は主に GPU を使用していますが、Core ML といくつかの新しいフレームワークは Neural Engine を利用し始めています。

---

## 5. LLM 7B-30B が Mac 上でスムーズに動作するのはなぜですか?

具体的に計算してみましょう。

**モデル Llama 3.2 8B (Q4 量子化):**

- サイズ: ~4.5 GB
- 推論には約 5.5 GB の RAM (モデル + KV キャッシュ + オーバーヘッド) が必要です
- MacBook Air M2 (8GB RAM): 動作しますが、きついです
- MacBook Pro M3 (18GB RAM): 非常に快適に動作します

**モデル Qwen 2.5 32B (Q4 量子化):**

- サイズ: ~18 GB
- 推論には最大 22 GB の RAM が必要です
- MacBook Pro 36 GB: スムーズに動作します
- MacBook Air 24 GB: 実行できますが、他の多くのアプリを開くことはできません

**M3 Pro (36GB) での実際の生成速度:**

|モデル |トークン/秒 |気持ち |
|----------|---------------|----------|
|ラマ 3.2 3B Q4 | ~65 トーク/秒 |非常に速い |
|ラマ 3.2 8B Q4 | ~32 トーク/秒 |非常に速い |
|ジェマ 3 12B Q4 | ~22 トーク/秒 |速い |
|クウェン 2.5 14B Q4 | ~18 トーク/秒 |良い |
|クウェン 2.5 32B Q4 | ~8 トーク/秒 |許容される |

> 💡 人間は 1 分あたり約 250 ワード ≈ 1 秒あたり約 5 トークンを読み取ります。つまり、8 tok/s はすでに読み取り速度よりも高速です。

---

## 6. 全体的な比較: ローカル AI の Mac と PC の比較

|基準 | Mac Apple シリコン | PC + NVIDIA GPU |
|----------|-------------------|------|
|モデルの最大サイズ | RAM に依存 (最大 192GB) | VRAM に依存 (通常 8 ～ 24GB) |
|帯域幅 | 100 ～ 800 GB/秒 | 272-1000 GB/秒 |
|価格/GB「VRAM」 |はるかに安い |高価 (RTX 4090: 24GB で 1600 ドル) |
|ノイズ |沈黙 |ファンがうるさく動作しています。
|電気 | 15-65W | GPU 単体 100-450W |
|モバイル |薄くて軽いノートパソコン |デスクトップまたは重いゲーム用ラップトップ |
|エコシステム | macOS のみ | Linux/Windows、その他のツール |

**結論**: Mac Apple Silicon は、AI を日常的にローカルで実行したい開発者にとって最適な選択肢です。最速ではありませんが、パフォーマンス、利便性、ノイズ、携帯性のバランスが最適です。

---

## 7. Mac をテストする

ターミナルを開いて次を実行します。

```bash
# Xem chip và RAM
system_profiler SPHardwareDataType | grep -E "(Chip|Memory)"
```

出力例:

```
Chip: Apple M3 Pro
Total Number of Cores: 12 (6 performance and 6 efficiency)
Memory: 36 GB
```

または、次のコマンドを使用します。

```bash
# Xem GPU cores
system_profiler SPDisplaysDataType | grep "Total Number of Cores"
```

この情報は覚えておいてください。レッスン 3 で適切なモデルを選択するために必要になります。

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
|ユマ | CPU + GPU 共有 RAM → より大きなモデルをロード |
|メモリ帯域幅 |推論速度を決定すると、M3 Max は 400 GB/秒に達します |
| GPUコア |統合されているが強力で、LLM 推論を効果的に実行します。
|ニューラル エンジン |専用AIプロセッサ、徐々に活用中 |
|モデルサイズ スイートスポット | 16GB RAM の場合は 3B-14B、32GB 以上の RAM の場合は 14B-32B |

---

## 演習

1. Mac を確認します。チップ、RAM、GPU コアの数は何ですか?
2. メモリ帯域幅の表に基づいて、Mac が実行できる最大サイズのモデルを見積もってください。
3. 比較: RTX 4070 Ti (750 ドル) を購入するのと同じ予算がある場合、Mac 用にさらに RAM を購入するか、それとも別の GPU を購入する方が賢明でしょうか?

**次の投稿**: Ollama をインストールし、5 分で最初の LLM を実行します →
