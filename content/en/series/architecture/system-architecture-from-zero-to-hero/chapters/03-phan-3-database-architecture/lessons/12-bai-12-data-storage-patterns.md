---
id: 019d8a21-c110-7001-d001-e1f2a3b4c512
title: 'Lesson 12: Data Storage Patterns - Object Storage, Data Lake, Time-Series'
slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
description: >-
  Object Storage (S3) architecture and use cases. Data Lake vs Data Warehouse vs
  Lakehouse. Time-Series databases for metrics and IoT. Search engines
  (Elasticsearch). Polyglot persistence in practice.
duration_minutes: 140
is_free: false
video_url: null
sort_order: 12
section_title: 'Part 3: Database Architecture & Data Management'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Data Storage Patterns - Objects</tspan>
      <tspan x="60" dy="42">Storage, Data Lake, Time-Series</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Database Architecture & Data Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Not all data is suitable for a relational database. Photos, videos, logs, metrics, search indexes — each type of data needs the right storage engine. This article explores specialized storage systems.

---

## 1. Object Storage

### 1.1 What is Object Storage?

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

| Use Case | Example |
|----------|-------|
| Static assets | Images, CSS, JS → CDN origin |
| Backups | Database dumps, log archives |
| Data Lake storage | Raw data for analytics |
| Media | Videos, audio files |
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

### 2.1 Comparison

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

### 3.1 Time-Series Data characteristics

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

| Database | Architecture | Advantages |
|----------|-----------|----------|
| **InfluxDB** | Standalone/Cluster | Easy setup, InfluxQL |
| **TimescaleDB** | PostgreSQL extension | Full SQL, hypertables |
| **Prometheus** | Pull-based metrics | K8s native, PromQL |
| **ClickHouse** | Columnar OLAP | Extremely fast aggregation |
| **VictoriaMetrics** | Prometheus-compatible | Storage efficiency |

### 3.4 PromQL example

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

## Summary

| Storage Type | Best For | Example |
|-------------|----------|-------|
| RDBMS | Structured, ACID | Users, Orders, Billing |
| DocumentDB | Flexible schema | Product catalog, CMS |
| Key-Value | Simple, fast | Cache, Sessions |
| Object Storage | Files, blobs | Images, Videos, Backups |
| Time Series | Metrics, IoT | Monitoring, Sensor data |
| Search Engine | Full-text search | Product search, Logs |
| GraphDB | Relationships | Social networks, Fraud |
| Data Lake | Raw analytics | ML, BI, Reports |

---

## Exercises

1. **Storage Design:** Design storage architecture for Healthcare system: patient records (HIPAA compliant), medical images (DICOM), vital signs monitoring, prescription search. Which database to choose for each use case?

2. **Time-Series:** IoT system has 50K sensors, each sensor sends data every 5 seconds. Calculate storage needed for 1 year. Design retention policy.

3. **Search Architecture:** E-commerce has 10M products. Search system design supports: full-text search, filters (price, brand, category), faceted navigation, auto-suggest.
