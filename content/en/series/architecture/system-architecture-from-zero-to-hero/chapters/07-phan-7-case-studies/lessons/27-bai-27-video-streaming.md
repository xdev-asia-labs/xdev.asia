---
id: 019d8a21-c110-7001-d001-e1f2a3b4c527
title: 'Lesson 27: Case Study - Designing Video Streaming Platform'
slug: bai-27-case-study-thiet-ke-video-streaming-platform
description: >-
  YouTube/Netflix design. Video upload & processing pipeline. Adaptive Bitrate
  Streaming (ABR). CDN for video delivery. Video encoding/transcoding.
  Recommendation system overview. Live streaming architecture.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 27
section_title: 'Part 7: System Design Case Studies'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 27</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 27: Case Study - Video Design</tspan>
      <tspan x="60" dy="42">Streaming Platform</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: System Design Case Studies</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Video streaming is one of the most bandwidth and storage consuming use cases on the Internet. YouTube serves 1 billion hours of video every day. Designing this platform requires an understanding of video processing, CDN, and massive scale.

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

## Summary

| Components | Technology | Purpose |
|-----------|-----------|---------|
| Storage | S3 | Raw + transcoded videos |
| Transcoding | FFmpeg on GPU | Multi-resolution |
| Streaming | HLS/DASH | Adaptive bitrate |
| Delivery | Multi-CDN | Low latency, global |
| Metadata | PostgreSQL + Redis | Video info + cache |
| Search | Elasticsearch | Video discovery |

---

## Exercises

1. **Cost Optimization:** Transcoding 500K videos/day (avg 5 min, 5 resolutions). Estimate GPU hours and cost. Design a priority queue (paid users transcode first).

2. **Thumbnail Generation:** Automatically generate 3 thumbnail options for each video. Pipeline design. What if we use AI to choose the best thumbnail?

3. **Live + VOD:** Viewer watches live stream, wants to rewind 5 minutes. Design DVR (Digital Video Recorder) feature for live streams.
