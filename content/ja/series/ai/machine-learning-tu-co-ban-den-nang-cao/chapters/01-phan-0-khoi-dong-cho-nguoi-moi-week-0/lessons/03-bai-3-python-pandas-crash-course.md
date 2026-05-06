---
id: 019d8b39-bb03-7003-c003-ee0300000003
title: 'レッスン 3: ML のための Python/Pandas 短期集中コース'
slug: bai-3-python-pandas-crash-course
description: DataFrame、フィルタリング、groupby、merge、基本的な欠損データ処理、および Python データに慣れていない人向けの高速 EDA。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 0: 初心者のための入門 (第 0 週)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: '機械学習: 基本から高度まで'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7527" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7527)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="90" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="120" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.9807621135332,160 1000.9807621135332,190 975,205 949.0192378864668,190 949.0192378864668,160 975,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: ML のための Python/Pandas 短期集中コース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">機械学習: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 0: 初心者のための入門 (第 0 週)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ML を学ぶのに Python の専門家である必要はありませんが、表形式のデータに十分慣れている必要があります。この記事は、ML で最も必要なこと、つまりデータの読み取り、フィルタリング、変換、欠落データのチェック、および単純な機能の作成に焦点を当てた「集中コース」です。

## レッスンの目標

- Pandas を使用してデータを読み取り、探索する
- モデルをトレーニングする前に最も一般的な操作を実行します。
- いつノートブックを使用するのか、いつコードを別のファイルに分割するのかを理解する

## 1. 常に使用する 2 つのライブラリ

### NumPy

配列の算術演算とベクトル化演算に使用されます。

### パンダ

表形式のデータに使用されます (`DataFrame`）。

ほとんどの基本的な ML プロジェクトでは、モデルよりも Pandas に多くの時間を費やします。

## 2. 最初のデータフレームを作成します

```python
import pandas as pd

df = pd.DataFrame({
    'dien_tich': [45, 60, 80, 120],
    'so_phong': [1, 2, 3, 4],
    'gia': [1.2, 1.8, 2.6, 4.1]
})

print(df)
```

結果は、行と列を含むテーブルになります。 ML では:

- 各行は通常、観測値です
- 各列は機能またはターゲットです

## 3. すぐに覚えておくべき 5 つのパンダのアクション

### データのクイックビュー

```python
df.head()
df.shape
df.columns
df.info()
df.describe()
```

### 列を選択

```python
df['dien_tich']
df[['dien_tich', 'so_phong']]
```

### ストリームをフィルタリングする

```python
df[df['so_phong'] >= 2]
```

### 新しい列を作成する

```python
df['gia_m2'] = df['gia'] / df['dien_tich']
```

### アレンジ

```python
df.sort_values('gia', ascending=False)
```

## 4. CSVからデータを読み取る

```python
df = pd.read_csv('data/raw/houses.csv')
```

データを読み取った後は、常に次のことを行う必要があります。

```python
print(df.head())
print(df.shape)
print(df.isnull().sum())
```

目標は、次の 3 つの質問に答えることです。

1. データの行数と列数は何ですか?
2. データが欠落している列はどれですか?
3. どの列が数値で、どの列がテキストですか?

## 5. 欠損値とは何ですか?

欠損値とはデータセルが欠落していることを指します。たとえば、顧客が年齢を申告しなかったり、システムが特定のフィールドを記録しなかったりします。

確認してください:

```python
df.isnull().sum()
```

基本的な取り扱い:

- 欠落している行/列が多すぎる場合はスキップします
- 平均値、中央値、または最頻値を入力します
- フラグを追加しました `is_missing`

たとえば:

```python
df['tuoi'] = df['tuoi'].fillna(df['tuoi'].median())
```

## 6. カテゴリ変数

多くの非数値列は次のとおりです。

- 都市
- サービスパッケージの種類
- 性別

ML モデルはプレーン テキストでは直接機能しないことが多いため、変換する必要があります。最も基本的な方法はワンホット エンコーディングです。

```python
pd.get_dummies(df, columns=['thanh_pho'], drop_first=True)
```

## 7. Groupby と集約

これは、データを理解し、フィーチャを作成するための非常に強力なスキルです。

```python
df.groupby('thanh_pho')['gia'].mean()
df.groupby('loai_khach')['doanh_thu'].agg(['mean', 'count'])
```

応用例：

- 顧客グループ別の平均収益
- 都市別の購入数
- サービスパッケージ別の解約率

## 8. データの結合

実際には、データが 1 つのテーブルに存在することはほとんどありません。

```python
customers = pd.read_csv('customers.csv')
orders = pd.read_csv('orders.csv')

df = customers.merge(orders, on='customer_id', how='left')
```

重要なルール: マージ後は、行番号と新しく生成された null 値を必ず確認してください。

## 9. 基本的な特徴量エンジニアリング

特徴エンジニアリングでは、モデルの学習を改善するために追加の列を作成しています。

たとえば:

- `gia_m2 = gia / dien_tich`
- `thoi_gian_su_dung = ngay_hien_tai - ngay_dang_ky`
- `tong_chi_tieu_30_ngay`

優れた機能は、多くの場合、モデルのトリックからではなく、問題の理解から生まれます。

## 10. ノートブックですか、それともスクリプトですか?

### 次の場合にノートブックを使用します。

- データを探索する
- グラフを描く
- アイデアをすぐに試してみる

### 次の場合にスクリプト/モジュールを使用します。

- コードが何度も繰り返される
- 再利用が必要
- パイプラインをきれいにしてメンテナンスを容易にしたい

実践的な原則:

- 探索するためのノートブック
- `src/` コードを生成する

## 短い例: 最初の EDA

```python
import pandas as pd

df = pd.read_csv('data/raw/customers.csv')

print(df.head())
print(df.shape)
print(df.isnull().sum())
print(df['plan'].value_counts())

df['monthly_spend'] = df['total_spend'] / df['months_active']
print(df[['monthly_spend', 'churn']].head())
```

## 練習問題を練習する

1. 任意の CSV ファイルを読み取り、実行します `head`、 `info`、 `describe`。
2. 元のデータから少なくとも 2 つの新しいフィーチャを作成します。
3. EDA から学んだことを説明する文を 3 つ書きます。

## よくある間違い

- その列の意味を理解せずにデータを編集する。
- 未来からの情報を使用して機能を作成します。
- マージは完了しましたが、行番号をチェックしませんでした。

## 完了基準

- [ ] CSVをDataFrameに読み込むことができます
- [ ] 基本的なフィルター、グループ化、マージを実行できます
- [ ] 問題に対して意味のある新しい特徴を作成します
