---
id: 019d8b39-bb02-7002-c002-ee0200000002
title: 'レッスン 2: 実稼働標準の ML 学習環境をセットアップする'
slug: bai-2-setup-moi-truong-ml
description: >-
  Python、Jupyter、VS Code、NumPy/Pandas/scikit-learn をインストールします。プロジェクト
  テンプレートを作成し、依存関係とノートブック ワークフローを管理します。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 0: 初心者のための入門 (第 0 週)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: 標準の ML 学習環境をセットアップする</tspan>
      <tspan x="60" dy="42">生産。生産</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 0: 初心者のための入門 (第 0 週)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ML を初めて使用する人は、多くのバージョンの Python、今日は機能しても明日には機能しなくなるノートブック、無計画にインストールされたパッケージ、構造のないプロジェクト ファイルなど、煩雑なインストール環境のせいで多くの時間を費やすことがよくあります。この記事は、安定した学習環境と作業環境を構築するのに役立ちます。これにより、次のレッスンからは、インストール エラーを修正するのではなく、ML の学習のみに集中できるようになります。

## レッスンの目標

- ML 用のクリーンな Python 環境をインストールする
- コードを学習して再利用するためにプロジェクト フォルダーを整理する方法を知る
- NumPy、Pandas、scikit-learn を使用して最初のノートブックを実行する

## 1. どの Python バージョンを選択しますか?

**Python 3.11** が推奨されます。

理由:

- ほとんどの一般的な ML ライブラリはそれを適切にサポートしています。
- 3.9/3.10よりも高速で安定しています。
- 新しいバージョンよりも非互換性のリスクが低くなります。

バージョンを確認します:

```bash
python --version
python3 --version
```

## 2. venv または Conda を使用しますか?

初心者にとっては、次の 2 つの一般的なオプションがあります。

### `venv`

利点:

- Python で利用可能です。
- 軽くてシンプル。

短所:

- 複雑なネイティブ依存関係を持つパッケージを操作する場合はあまり便利ではありません。

### コンダ / ミニコンダ

利点:

- データ/ML の適切な環境管理。
- 科学的パッケージのインストールが簡単になりました。

短所:

- 若干重くなりました。

このコースは全く初めての方でも大丈夫です `venv`。長期的にディープラーニングを計画している場合は、Conda に切り替えるとよいでしょう。

## 3. 最初のプロジェクトを作成する

たとえば `venv`:

```bash
mkdir ml-course
cd ml-course

python -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install numpy pandas scikit-learn matplotlib jupyter
```

Windows PowerShell の場合:

```powershell
.venv\Scripts\Activate.ps1
```

## 4. 推奨されるフォルダー構造

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

意味:

- `notebooks/`: 実験と学習の場所。
- `data/raw/`: 直接編集されていないオリジナルのデータ。
- `data/processed/`: クリーンアップされたデータ。
- `src/`: 再利用可能なコード。
- `outputs/`: モデル、チャート、アーティファクト。

## 5. ツールは事前にインストールされている必要があります

### 必須

- パイソン
- VSコード
- ジュピター
- `numpy`、 `pandas`、 `scikit-learn`

### あるべきです

- `matplotlib`、 `seaborn`
- `ipykernel`
- `black` または同様のフォーマッタ

```bash
pip install seaborn ipykernel
```

## 6. 最初のノートブックを実行します

```bash
jupyter notebook
```

または、VS Code を使用してファイルを開きます `.ipynb`。

以下を実行してみてください。

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

ノートブックが機能する場合は、このシリーズの基本的なレッスンのほとんどを実行できる環境が十分にあります。

## 7. ファイルは最初からそこにあるはずです

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

最低限の README には以下が含まれている必要があります。

- プロジェクトの目標
- 環境のインストール方法
- ノートブックまたはスクリプトの実行方法

## 8. 一般的なインストールエラー

### エラー: パッケージがインストールされましたが、ノートブックがそれを認識しません

通常、その理由は、ノートブックがインストールしたばかりの環境とは異なるカーネルを実行していることです。

取り扱い方法:

```bash
python -m ipykernel install --user --name ml-course
```

次に、VS Code/Jupyter で正しいカーネルを選択します。

＃＃＃ エラー： `ModuleNotFoundError`

確認してください:

- 環境はもう有効化されていますか?
- Python を正しく使用していますか?
- パッケージはどの環境にインストールされますか?

### エラー: ノートブックが乱雑すぎます

解決策:

- ノートは探索のみに使用されます
- 再利用可能なコードの切り替え `src/`
- 1000 行の長さのファイルにすべてを入れないでください

##9. 最初からの標準作業

小さいながらも非常に重要な 3 つの原則:

1. 各プロジェクトは個別の環境を使用します。
2. オリジナルデータを直接編集しないでください。
3. プロジェクトの実行方法を README に記録します。

最初からこれら 3 つのことを実行しておけば、プロジェクトの数が増えても大きな問題を避けることができます。

## 練習問題を練習する

1. このシリーズ用に別の環境を作成します。
2. 上記のサンプルに従ってフォルダー構造を作成します。
3. 最初のノートブックを実行し、スナップショットまたは出力を保存します。

## よくある間違い

- パッケージをグローバル環境にインストールします。
- プロジェクトごとに 1 つの環境を使用します。
- ノートブックがどのカーネルを使用しているかわかりません。

## 完了基準

- [ ] 独自の ML 環境を作成する
- [ ] 最初のノートブックを実行します
- [ ] きちんとした再利用可能なプロジェクト フォルダーを用意する
