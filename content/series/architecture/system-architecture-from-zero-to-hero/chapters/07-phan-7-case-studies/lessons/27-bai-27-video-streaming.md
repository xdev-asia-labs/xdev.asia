---
id: 019d8a21-c110-7001-d001-e1f2a3b4c527
title: "Bài 27: Case Study - Thiết kế Video Streaming Platform"
slug: bai-27-case-study-thiet-ke-video-streaming-platform
description: >-
  Thiết kế YouTube/Netflix. Video upload & processing pipeline.
  Adaptive Bitrate Streaming (ABR). CDN cho video delivery.
  Video encoding/transcoding. Recommendation system overview.
  Live streaming architecture.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 27
section_title: "Phần 7: System Design Case Studies"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Video streaming là một trong những use cases tốn bandwidth và storage nhất trên Internet. YouTube phục vụ 1 tỷ giờ video mỗi ngày. Thiết kế platform này đòi hỏi hiểu về video processing, CDN, và massive scale.

---

## 1. Requirements & Estimation

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

## 2. Video Upload Pipeline

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

## 3. Video Transcoding

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

## 4. Adaptive Bitrate Streaming (ABR)

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

## 5. CDN for Video

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

## 6. Video Playback Architecture

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

## 7. Live Streaming

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

## Tổng kết

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Storage | S3 | Raw + transcoded videos |
| Transcoding | FFmpeg on GPU | Multi-resolution |
| Streaming | HLS/DASH | Adaptive bitrate |
| Delivery | Multi-CDN | Low latency, global |
| Metadata | PostgreSQL + Redis | Video info + cache |
| Search | Elasticsearch | Video discovery |

---

## Bài tập

1. **Cost Optimization:** Transcoding 500K videos/day (avg 5 min, 5 resolutions). Estimate GPU hours và cost. Thiết kế priority queue (paid users transcode trước).

2. **Thumbnail Generation:** Tự động generate 3 thumbnail options cho mỗi video. Thiết kế pipeline. Nếu dùng AI để chọn best thumbnail?

3. **Live + VOD:** Viewer xem live stream, muốn rewind 5 phút. Thiết kế DVR (Digital Video Recorder) feature cho live streams.
