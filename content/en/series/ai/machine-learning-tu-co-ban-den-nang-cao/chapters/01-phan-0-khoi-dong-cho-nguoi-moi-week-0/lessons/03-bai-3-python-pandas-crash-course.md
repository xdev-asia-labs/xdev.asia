---
id: 019d8b39-bb03-7003-c003-ee0300000003
title: 'Lesson 3: Python/Pandas crash course for ML'
slug: bai-3-python-pandas-crash-course
description: >-
  DataFrame, filtering, groupby, merge, basic missing data handling and fast EDA
  for those not familiar with Python data.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 0: Getting started for newbies (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Python/Pandas crash course for ML</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 0: Getting started for newbies (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You don't need to be a Python expert to learn ML, but you must be comfortable enough with tabular data. This article is a "crash course" that focuses on exactly what is needed most in ML: reading data, filtering, transforming, checking for missing data, and creating simple features.

## Lesson objectives

- Read and explore data using Pandas
- Perform the most common operations before training the model
- Know when to use a notebook and when to separate code into separate files

## 1. Two libraries you will use constantly

### NumPy

Used for array arithmetic and vectorization operations.

### Pandas

Used for tabular data (`DataFrame`).

In most basic ML projects, you will spend more time in Pandas than in the model.

## 2. Create a first DataFrame

```python
import pandas as pd

df = pd.DataFrame({
    'dien_tich': [45, 60, 80, 120],
    'so_phong': [1, 2, 3, 4],
    'gia': [1.2, 1.8, 2.6, 4.1]
})

print(df)
```

The result is a table with rows and columns. In ML:

- each row is usually an observation
- each column is a feature or target

## 3. 5 Pandas actions to remember immediately

### Quick view of data

```python
df.head()
df.shape
df.columns
df.info()
df.describe()
```

### Select column

```python
df['dien_tich']
df[['dien_tich', 'so_phong']]
```

### Filter the stream

```python
df[df['so_phong'] >= 2]
```

### Create new column

```python
df['gia_m2'] = df['gia'] / df['dien_tich']
```

### Arrange

```python
df.sort_values('gia', ascending=False)
```

## 4. Read data from CSV

```python
df = pd.read_csv('data/raw/houses.csv')
```

The first thing after reading data should always be:

```python
print(df.head())
print(df.shape)
print(df.isnull().sum())
```

The goal is to answer three questions:

1. How many rows and columns does the data have?
2. Which column is missing data?
3. Which column is number, which column is text?

## 5. What are missing values?

Missing values ​​are missing data cells. For example, the customer does not declare their age, or the system does not record a certain field.

Check:

```python
df.isnull().sum()
```

Basic handling:

- skip rows/columns if too many are missing
- fill in the mean, median or mode value
- added flags `is_missing`

For example:

```python
df['tuoi'] = df['tuoi'].fillna(df['tuoi'].median())
```

## 6. Categorical variables

Many non-numeric columns, for example:

- city
- service package type
- gender

ML models often do not work directly with plain text, so they need to be transformed. The most basic way is one-hot encoding.

```python
pd.get_dummies(df, columns=['thanh_pho'], drop_first=True)
```

## 7. Groupby and aggregation

This is a very powerful skill for understanding data and creating features.

```python
df.groupby('thanh_pho')['gia'].mean()
df.groupby('loai_khach')['doanh_thu'].agg(['mean', 'count'])
```

Application example:

- Average revenue by customer group
- number of purchases by city
- churn rate by service package

## 8. Merge data

In practice, data rarely resides in a single table.

```python
customers = pd.read_csv('customers.csv')
orders = pd.read_csv('orders.csv')

df = customers.merge(orders, on='customer_id', how='left')
```

Important rule: after merging, always check the line number and newly generated null values.

## 9. Basic feature engineering

Feature engineering is creating additional columns to help the model learn better.

For example:

- `gia_m2 = gia / dien_tich`
- `thoi_gian_su_dung = ngay_hien_tai - ngay_dang_ky`
- `tong_chi_tieu_30_ngay`

Good features often come from understanding the problem rather than from model tricks.

## 10. Notebook or script?

### Use a notebook when:

- explore data
- draw graphs
- quickly try out ideas

### Use script / module when:

- code is repeated many times
- Needs reuse
- want the pipeline to be clean and easy to maintain

Practical principles:

- notebook to explore
- `src/` to produce code

## Short example: First EDA

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

## Practice exercises

1. Read any CSV file and run `head`, `info`, `describe`.
2. Create at least 2 new features from the original data.
3. Write 3 sentences describing what you learned from EDA.

## Common mistakes

- Edit data without understanding what that column means.
- Create features using information from the future.
- Merge finished but did not check the line number.

## Completion criteria

- [ ] Can read CSV into DataFrame
- [ ] Can perform basic filter, groupby, and merge
- [ ] Create a new meaningful feature for the problem
