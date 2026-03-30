---
id: 019d8a21-c110-7001-d001-e1f2a3b4c512
title: "Bài 12: Data Storage Patterns - Object Storage, Data Lake, Time-Series"
slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
description: >-
  Object Storage (S3) architecture và use cases. Data Lake vs
  Data Warehouse vs Lakehouse. Time-Series databases cho metrics
  và IoT. Search engines (Elasticsearch). Polyglot persistence
  trong thực tế.
duration_minutes: 140
is_free: false
video_url: null
sort_order: 12
section_title: "Phần 3: Database Architecture & Data Management"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Không phải mọi data đều phù hợp với relational database. Ảnh, video, logs, metrics, search indexes — mỗi loại data cần storage engine phù hợp. Bài này khám phá các specialized storage systems.

---

## 1. Object Storage

### 1.1 Object Storage là gì?

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

### 1.2 S3-Compatible Architecture

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

### 1.3 Use Cases

| Use Case | Ví dụ |
|----------|-------|
| Static assets | Images, CSS, JS → CDN origin |
| Backups | Database dumps, log archives |
| Data Lake storage | Raw data cho analytics |
| Media | Video, audio files |
| ML artifacts | Model files, training datasets |

### 1.4 Presigned URLs Pattern

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

## 2. Data Lake vs Data Warehouse vs Lakehouse

### 2.1 So sánh

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

### 2.2 Data Lake Architecture

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

## 3. Time-Series Databases

### 3.1 Đặc điểm Time-Series Data

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

### 3.2 Optimizations

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

### 3.3 Popular TSDBs

| Database | Kiến trúc | Ưu điểm |
|----------|-----------|----------|
| **InfluxDB** | Standalone/Cluster | Dễ setup, InfluxQL |
| **TimescaleDB** | PostgreSQL extension | SQL đầy đủ, hypertables |
| **Prometheus** | Pull-based metrics | K8s native, PromQL |
| **ClickHouse** | Columnar OLAP | Cực nhanh aggregation |
| **VictoriaMetrics** | Prometheus-compatible | Hiệu quả storage |

### 3.4 PromQL ví dụ

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

## 4. Search Engines

### 4.1 Elasticsearch Architecture

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

### 4.2 Inverted Index

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

## 5. Polyglot Persistence

### 5.1 E-Commerce Example

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

## Tổng kết

| Storage Type | Best For | Ví dụ |
|-------------|----------|-------|
| RDBMS | Structured, ACID | Users, Orders, Billing |
| Document DB | Flexible schema | Product catalog, CMS |
| Key-Value | Simple, fast | Cache, Sessions |
| Object Storage | Files, blobs | Images, Videos, Backups |
| Time-Series | Metrics, IoT | Monitoring, Sensor data |
| Search Engine | Full-text search | Product search, Logs |
| Graph DB | Relationships | Social network, Fraud |
| Data Lake | Raw analytics | ML, BI, Reports |

---

## Bài tập

1. **Storage Design:** Thiết kế storage architecture cho hệ thống Healthcare: patient records (HIPAA compliant), medical images (DICOM), vital signs monitoring, prescription search. Chọn database nào cho mỗi use case?

2. **Time-Series:** IoT system có 50K sensors, mỗi sensor gửi data mỗi 5 giây. Tính storage cần thiết cho 1 năm. Thiết kế retention policy.

3. **Search Architecture:** E-commerce có 10M products. Thiết kế search system hỗ trợ: full-text search, filters (price, brand, category), faceted navigation, auto-suggest.
