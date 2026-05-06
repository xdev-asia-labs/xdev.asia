---
id: 019d8a21-c110-7001-d001-e1f2a3b4c527
title: 第 27 課：案例研究 - 設計視訊串流平台
slug: bai-27-case-study-thiet-ke-video-streaming-platform
description: YouTube/Netflix 設計。影片上傳和處理管道。自適應位元率流（ABR）。用於視訊傳輸的 CDN。視訊編碼/轉碼。推薦系​​統概述。直播架構。
duration_minutes: 160
is_free: false
video_url: null
sort_order: 27
section_title: 第 7 部分：系統設計案例研究
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4747" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4747)"/>

  <!-- Decorations -->
  <g>
    <circle cx="670" cy="80" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="810" cy="200" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="60" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.3108891324554,92.5 940.3108891324554,127.5 910,145 879.6891108675446,127.5 879.6891108675446,92.50000000000001 910,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 27 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 27 課：案例研究 - 影片設計</tspan>
      <tspan x="60" dy="42">串流媒體平台</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：系統設計案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

視訊串流是網路上最消耗頻寬和儲存的用例之一。 YouTube 每天提供 10 億小時的影片。設計這個平台需要了解視訊處理、CDN 和大規模。

---

## 1. 要求與估算

```
Functional:
  - Upload video
  - Stream/watch video (on demand)
  - Search & discover videos
  - Comments, likes, subscribe
  - Live streaming
  - Adaptive quality (auto adjust based on bandwidth)

Estimation (YouTube-scale):
  DAU: 500M users
  Videos watched/day: 5B (avg 5 min each)
  Video uploads/day: 500K
  Average video: 300MB (original), 5 minutes

Storage:
  Upload: 500K × 300MB = 150TB/day (raw)
  Transcoded: 150TB × 3 (resolutions) = 450TB/day
  5 years: 450TB × 365 × 5 = 821PB  

Bandwidth:
  5B views × 20MB avg (compressed) = 100PB/day outbound
  Peak: ~1.5TB/s bandwidth
```

---

## 2. 影片上傳管道

```
┌──────────────────────────────────────────────────────────┐
│                                                           │
│  User uploads video                                       │
│      │                                                    │
│  ┌───▼────────┐                                          │
│  │ Upload     │ → Presigned URL → Direct to S3           │
│  │ Service    │ → Chunk upload (resumable)                │
│  └───┬────────┘                                          │
│      │                                                    │
│  ┌───▼────────┐    Raw video stored                      │
│  │ S3 (Raw)   │────────────────────┐                     │
│  └────────────┘                    │                     │
│                              ┌─────▼────────┐            │
│                              │ Transcoding  │            │
│                              │ Queue (SQS)  │            │
│                              └─────┬────────┘            │
│                                    │                     │
│                              ┌─────▼────────┐            │
│                              │ Transcoding  │            │
│                              │ Workers      │            │
│                              │ (FFmpeg)     │            │
│                              └─────┬────────┘            │
│                                    │                     │
│      ┌─────────────────────────────┼───────────────┐     │
│      ▼              ▼              ▼               │     │
│  ┌────────┐   ┌────────┐   ┌────────┐             │     │
│  │ 1080p  │   │ 720p   │   │ 480p   │ → S3 (CDN) │     │
│  │ H.264  │   │ H.264  │   │ H.264  │             │     │
│  └────────┘   └────────┘   └────────┘             │     │
│      │              │              │               │     │
│      └──────────────┼──────────────┘               │     │
│                     ▼                              │     │
│              ┌──────────────┐                      │     │
│              │ Metadata DB  │ Video ready!         │     │
│              │ (status:     │                      │     │
│              │  published)  │                      │     │
│              └──────────────┘                      │     │
└──────────────────────────────────────────────────────────┘
```

---

## 3.影片轉碼

```
Tại sao cần transcode?
  - Nhiều devices, nhiều bandwidth
  - Mobile 3G: 480p, Desktop fiber: 4K
  - Nhiều codec support

Transcoding outputs:
  Original: 4K, 2GB
  ├── 2160p (4K): H.265, 8Mbps
  ├── 1080p (FHD): H.264, 4Mbps
  ├── 720p (HD): H.264, 2Mbps
  ├── 480p (SD): H.264, 1Mbps
  └── 360p: H.264, 500Kbps + Audio only

DAG (Directed Acyclic Graph) Processing:
  ┌────────┐   ┌───────────┐   ┌──────────┐
  │ Decode │──►│ Filters   │──►│ Encode   │
  │ (input)│   │ (resize,  │   │(H.264/   │
  │        │   │ watermark,│   │ H.265)   │
  │        │   │ thumbnail)│   │          │
  └────────┘   └───────────┘   └──────────┘

  Parallel: Encode 5 resolutions đồng thời
  Chunk: Split video → transcode chunks → merge
  Cost: GPU instances (p3.2xlarge: ~$3/hour)
```

---

## 4. 自適應位元速率串流媒體 (ABR)

```
HLS (HTTP Live Streaming) / DASH:

  Video split thành segments (2-10 seconds each)
  Mỗi segment có nhiều quality levels

  Manifest file (.m3u8):
  #EXTM3U
  #EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360
  360p/playlist.m3u8
  #EXT-X-STREAM-INF:BANDWIDTH=2000000,RESOLUTION=1280x720
  720p/playlist.m3u8
  #EXT-X-STREAM-INF:BANDWIDTH=4000000,RESOLUTION=1920x1080
  1080p/playlist.m3u8

Player behavior:
  1. Download manifest
  2. Start with low quality
  3. Measure bandwidth
  4. Switch UP if bandwidth high (720p → 1080p)
  5. Switch DOWN if buffering (1080p → 480p)

  Bandwidth: ~~~~~▓▓▓▓▓▓▓▓▓▓▓▓░░░░▓▓▓▓▓▓
  Quality:   360p → 720p → 1080p → 720p → 1080p
```

---

## 5. 視訊 CDN

```
Architecture:
  Origin (S3) → CDN Edge Servers → Users

  First request for "video-123, segment 5, 720p":
    User → Edge (miss) → Origin → Edge (cache) → User

  Subsequent requests:
    User → Edge (hit!) → User  (fast!)

CDN Strategy:
  - Popular videos: Push to all edges
  - Long-tail: Pull on demand, cache
  - Geographic: Vietnam videos → Vietnam/Singapore edges
  - Eviction: LRU for segments, keep recent segments longer

Multi-CDN:
  video.example.com → DNS → CDN selection
  ├── Akamai (US traffic)
  ├── CloudFront (Asia traffic)
  └── Cloudflare (EU traffic)
  → Failover: If CDN A down → Route to CDN B
```

---

## 6. 影片播放架構

```
User clicks play:

1. Client → API: GET /api/videos/123
   Response: { title, description, manifest_url, thumbnail }

2. Client → CDN: GET manifest.m3u8
   Response: Available qualities + segment URLs

3. Client → CDN: GET segment_001_720p.ts
   Client → CDN: GET segment_002_720p.ts
   (prefetch next segments while playing)

4. Client: Monitor bandwidth → Adapt quality

DRM (Digital Rights Management):
  For paid content (Netflix):
  License server → Decrypt key → Player decrypts segments
  Widevine (Google), FairPlay (Apple), PlayReady (Microsoft)
```

---

## 7. 直播

```
Live streaming vs VOD:

  VOD:  Pre-transcoded, cached in CDN
  Live: Real-time transcoding, minimal caching

Live Pipeline:
  Broadcaster → Ingest Server (RTMP)
                     │
              ┌──────▼──────┐
              │ Real-time    │
              │ Transcoder   │
              │ (< 3s delay) │
              └──────┬──────┘
                     │
              ┌──────▼──────┐
              │ CDN Origin   │ ← New segment every 2-4s
              └──────┬──────┘
                     │
              ┌──────▼──────┐
              │ CDN Edge    │ → Viewers
              └─────────────┘

Latency targets:
  Broadcasting (TV): 5-30 seconds
  Low latency (Twitch): 2-5 seconds
  Ultra-low (WebRTC): < 1 second
  
  HLS standard: 15-30s delay
  Low-latency HLS: 2-5s delay
  WebRTC: < 1s (for video calls, not streaming)
```

---

## 總結

|組件|技術 |目的|
|------------|------------|---------|
|儲存| S3 |原始+轉碼影片 |
|轉碼| GPU 上的 FFmpeg |多重解析度 |
|串流媒體| HLS/DASH |自適應位元率 |
|交貨|多 CDN |低延遲，全球 |
|元資料 | PostgreSQL + Redis |視訊資訊+快取|
|搜尋 |彈性搜尋 |影片發現|

---

## 練習

1. **成本優化：** 每天轉碼 500K 影片（平均 5 分鐘，5 種解析度）。估計 GPU 時間和成本。設計優先權佇列（付費用戶先轉碼）。

2. **縮圖產生：** 為每個影片自動產生 3 個縮圖選項。管道設計。如果我們使用人工智慧來選擇最佳縮圖會怎麼樣？

3. **直播 + 點播：** 觀眾觀看直播，想要倒帶 5 分鐘。設計用於直播的 DVR（數位錄影機）功能。
