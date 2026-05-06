---
id: 019d8a21-c110-7001-d001-e1f2a3b4c512
title: 第 12 課：資料儲存模式 - 物件儲存、資料湖、時間序列
slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
description: >-
  物件儲存 (S3)
  架構和用例。資料湖、資料倉儲、Lakehouse。用於指標和物聯網的時間序列資料庫。搜尋引擎（Elasticsearch）。在實踐中堅持多語言。
duration_minutes: 140
is_free: false
video_url: null
sort_order: 12
section_title: 第 3 部分：資料庫架構與資料管理
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2398" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2398)"/>

  <!-- Decorations -->
  <g>
    <circle cx="650" cy="140" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="40" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="850" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="200" x2="1100" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="230" x2="1050" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1030.3108891324553,182.5 1030.3108891324553,217.5 1000,235 969.6891108675446,217.5 969.6891108675446,182.5 1000,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：資料儲存模式 - 對象</tspan>
      <tspan x="60" dy="42">儲存、資料湖、時間序列</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：資料庫架構與資料管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

並非所有資料都適合關聯式資料庫。照片、影片、日誌、指標、搜尋索引——每種類型的資料都需要正確的儲存引擎。本文探討了專用儲存系統。

---

## 1. 物件存儲

### 1.1 什麼是物件儲存？

```
Traditional File System:          Object Storage:
  /home/                           ┌─────────────────────┐
    /images/                       │     Flat Namespace   │
      /2024/                       │                      │
        /01/                       │  key → object (blob) │
          photo.jpg                │  key → object (blob) │
                                   │  key → object (blob) │
  Hierarchical                     └─────────────────────┘
  Directories, inodes              Flat, HTTP API
  Mount required                   REST access
```

### 1.2 S3 相容架構

```
Client: PUT /bucket/images/photo.jpg
         │
         ▼
  ┌──────────────┐
  │  API Gateway  │  ← REST: GET, PUT, DELETE, LIST
  └──────┬───────┘
         ▼
  ┌──────────────┐
  │  Metadata    │  ← Key → location mapping
  │  Service     │  ← ACL, versioning, lifecycle
  └──────┬───────┘
         ▼
  ┌──────────────────────────────────┐
  │  Data Layer (Distributed)       │
  │  ┌──────┐ ┌──────┐ ┌──────┐    │
  │  │Node 1│ │Node 2│ │Node 3│    │ ← 3x replication
  │  └──────┘ └──────┘ └──────┘    │
  └──────────────────────────────────┘
```

### 1.3 用例

|使用案例|範例|
|----------|--------|
|靜態資產 |圖片、CSS、JS → CDN 起源 |
|備份|資料庫轉儲、日誌存檔 |
|資料湖儲存|用於分析的原始資料 |
|媒體|影片、音訊檔案 |
|機器學習工件 |模型檔案、訓練資料集 |

### 1.4 預簽 URL 模式

```
Vấn đề: User upload file 100MB qua API server → bottleneck

Giải pháp: Presigned URL - upload trực tiếp lên S3

  Client → API: "Tôi muốn upload avatar.jpg"
  API → S3: GeneratePresignedURL(PUT, bucket, key, 15min)
  API → Client: "Upload tại URL này (hết hạn 15 phút)"
  Client → S3: PUT trực tiếp (không qua API server)
  S3 → SNS/Lambda: Trigger post-processing
```

```python
# Python - Generate presigned URL
import boto3

s3 = boto3.client('s3')
url = s3.generate_presigned_url(
    'put_object',
    Params={'Bucket': 'my-bucket', 'Key': 'uploads/avatar.jpg'},
    ExpiresIn=900  # 15 minutes
)
```

---

## 2. 資料湖、資料倉儲、Lakehouse

### 2.1 比較

```
Data Warehouse:           Data Lake:              Lakehouse:
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│ Structured only  │   │ Raw everything   │   │ Best of both     │
│ Schema-on-WRITE  │   │ Schema-on-READ   │   │ Schema evolution │
│ SQL queries      │   │ Any processing   │   │ SQL + ML + Stream│
│ Expensive        │   │ Cheap storage    │   │ Open formats     │
│                  │   │                  │   │                  │
│ Redshift, BQ,    │   │ S3 + Spark,     │   │ Delta Lake,      │
│ Snowflake        │   │ HDFS            │   │ Apache Iceberg   │
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### 2.2 資料湖架構

```
Data Sources              Ingestion           Storage Layers
┌──────────┐             ┌─────────┐        ┌─────────────────┐
│ APIs     │────────────►│         │───────►│ Raw Zone        │
│ DBs      │────────────►│ Kafka/  │───────►│ (landing)       │
│ Logs     │────────────►│ Spark   │        ├─────────────────┤
│ IoT      │────────────►│ Airflow │───────►│ Cleaned Zone    │
│ Files    │────────────►│         │        │ (validated)     │
└──────────┘             └─────────┘        ├─────────────────┤
                                            │ Curated Zone    │
                                            │ (analytics-ready│
                                            └────────┬────────┘
                                                     │
                                            ┌────────▼────────┐
                                            │ Consumption     │
                                            │ BI, ML, Reports │
                                            └─────────────────┘
```

---

## 3. 時間序列資料庫

### 3.1 時間序列資料特徵

```
Đặc điểm:
  - Append-mostly (ít update, delete)
  - Time-ordered
  - High write throughput
  - Recent data truy vấn nhiều hơn
  - Aggregations: avg, sum, percentile theo time window

Ví dụ:
  Metrics: CPU usage mỗi 10s, 100 servers → 864K points/ngày
  IoT: 10K sensors, mỗi giây 1 reading → 864M points/ngày
```

### 3.2 最佳化

```
1. Time-based partitioning:
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │ Jan 2024 │ │ Feb 2024 │ │ Mar 2024 │
   └──────────┘ └──────────┘ └──────────┘
   → Drop old partitions thay vì DELETE

2. Columnar storage:
   Row:    [time, cpu, mem, disk] [time, cpu, mem, disk] ...
   Column: [time, time, time...] [cpu, cpu, cpu...] [mem, mem, mem...]
   → Compression tốt hơn (cùng type data)
   → Aggregation nhanh hơn

3. Downsampling:
   Raw: 1 point/giây (86400/ngày)
   1h:  1 point/giờ (24/ngày)
   1d:  1 point/ngày
   → Giữ raw 7 ngày, 1h 30 ngày, 1d mãi mãi
```

### 3.3 流行的TSDB

|資料庫|建築|優點 |
|----------|------------|----------|
| **InfluxDB** |單機/叢集 |設定簡單，InfluxQL |
| **TimescaleDB** | PostgreSQL 擴充 |完整的 SQL、超表 |
| **普羅米修斯** |基於拉動的指標 | K8s 原生、PromQL |
| **點擊屋** |列式 OLAP |極快聚合 |
| **VictoriaMetrics** |普羅米修斯相容 |存儲效率|

### 3.4 PromQL 範例

```promql
# CPU usage trung bình 5 phút
avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) by (instance)

# Request rate per second (QPS)
rate(http_requests_total[5m])

# 99th percentile latency
histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))

# Alert: CPU > 80% trong 5 phút
avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) < 0.2
```

---

## 4. 搜尋引擎

### 4.1 Elasticsearch 架構

```
Cluster
├── Node 1 (Master + Data)
│   ├── Index: products
│   │   ├── Shard 0 (Primary)
│   │   └── Shard 2 (Replica)
│   └── Index: logs
│       └── Shard 1 (Primary)
│
├── Node 2 (Data)
│   ├── Index: products
│   │   ├── Shard 1 (Primary)
│   │   └── Shard 0 (Replica)
│   └── Index: logs
│       └── Shard 0 (Primary)
│
└── Node 3 (Data)
    ├── Index: products
    │   └── Shard 2 (Primary)
    └── Index: logs
        └── Shard 1 (Replica)
```

### 4.2 倒排索引

```
Documents:
  Doc 1: "Kiến trúc hệ thống phân tán"
  Doc 2: "Thiết kế hệ thống chat"
  Doc 3: "Kiến trúc microservices"

Inverted Index:
  "kiến trúc"  → [Doc 1, Doc 3]
  "hệ thống"   → [Doc 1, Doc 2]
  "phân tán"   → [Doc 1]
  "thiết kế"   → [Doc 2]
  "chat"       → [Doc 2]
  "microservices" → [Doc 3]

Query: "kiến trúc hệ thống"
  → "kiến trúc" ∩ "hệ thống" = [Doc 1]
  → Score: Doc 1 (match cả 2) > Doc 2, Doc 3
```

---

## 5. 多語言持久性

### 5.1 電子商務範例

```
┌─────────────────────────────────────────────────┐
│                 E-Commerce App                   │
├─────────┬──────────┬──────────┬────────┬────────┤
│ Users   │ Products │ Orders   │ Search │ Cache  │
│         │ Catalog  │          │        │        │
│PostgreSQL│ MongoDB │PostgreSQL│Elastic │ Redis  │
│         │          │          │Search  │        │
│Relational│Document │ACID txns │Full-text│Session│
│Schema   │Flexible  │Consistent│Scoring │Cart   │
│Joins    │Nested    │Foreign   │Facets  │Rate   │
│         │attrs     │keys      │        │Limit  │
└─────────┴──────────┴──────────┴────────┴────────┘
         │                                │
    ┌────▼────┐                    ┌──────▼──────┐
    │ S3      │                    │ InfluxDB    │
    │ Images  │                    │ Metrics     │
    │ Files   │                    │ Monitoring  │
    └─────────┘                    └─────────────┘
```

---

## 總結

|儲存類型|最適合 |範例|
|------------|---------|--------|
|關係型資料庫管理系統結構化、酸性 |使用者、訂單、帳單 |
|文檔資料庫 |靈活的架構 |產品目錄，CMS |
|鍵值 |簡單、快速|快取、會話 |
|物件儲存 |檔案、blob |映像、視訊、備份 |
|時間序列 |指標、物聯網 |監控、感測器資料 |
|搜尋引擎 |全文檢索 |產品搜尋、日誌 |
|圖資料庫 |關係 |社群網路、詐欺 |
|資料湖|原始分析|機器學習、商業智慧、報告 |

---

## 練習

1. **儲存設計：** 設計醫療保健系統的儲存架構：病患記錄（符合 HIPAA 標準）、醫學影像（DICOM）、生命徵象監測、處方搜尋。為每個用例選擇哪個資料庫？

2. **時間序列：** IoT 系統有 50K 個感測器，每個感測器每 5 秒發送一次資料。計算一年所需的儲存量。設計保留政策。

3. **搜尋架構：** 電子商務有1000萬種產品。搜尋系統設計支援：全文搜尋、篩選器（價格、品牌、類別）、分面導航、自動建議。
