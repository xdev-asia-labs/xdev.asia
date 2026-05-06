---
id: 019d8b40-b404-7001-b003-golang0000404
title: 第 16 課：快取、檔案上傳和效能
slug: bai-16-caching-file-upload-va-performance
description: Redis 快取策略、快取模式。具有串流傳輸的文件上傳、S3 整合。使用 pprof 進行效能分析、基準測試。記憶體優化，連接池。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：進階功能
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7847" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7847)"/>

  <!-- Decorations -->
  <g>
    <circle cx="640" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="170" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="70" x2="1100" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="100" x2="1050" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.650635094611,107.5 941.650635094611,132.5 920,145 898.349364905389,132.5 898.349364905389,107.5 920,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：快取、檔案上傳和效能</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-redis-caching"><strong>1.Redis緩存</strong></h2>

<h3 id="1-1-setup"><strong>1.1.設置</strong></h3>

<pre><code class="language-bash">go get github.com/redis/go-redis/v9
</code></pre>

<pre><code class="language-go">package cache

import (
    "context"
    "encoding/json"
    "fmt"
    "time"
    
    "github.com/redis/go-redis/v9"
)

type RedisCache struct {
    client *redis.Client
}

func NewRedisCache(addr, password string, db int) *RedisCache {
    client := redis.NewClient(&redis.Options{
        Addr:         addr,
        Password:     password,
        DB:           db,
        PoolSize:     20,
        MinIdleConns: 5,
        DialTimeout:  5 * time.Second,
        ReadTimeout:  3 * time.Second,
        WriteTimeout: 3 * time.Second,
    })
    
    return &RedisCache{client: client}
}

// Generic cache methods
func (c *RedisCache) Set(ctx context.Context, key string, value interface{}, ttl time.Duration) error {
    data, err := json.Marshal(value)
    if err != nil {
        return err
    }
    return c.client.Set(ctx, key, data, ttl).Err()
}

func (c *RedisCache) Get(ctx context.Context, key string, dest interface{}) error {
    data, err := c.client.Get(ctx, key).Bytes()
    if err != nil {
        return err
    }
    return json.Unmarshal(data, dest)
}

func (c *RedisCache) Delete(ctx context.Context, keys ...string) error {
    return c.client.Del(ctx, keys...).Err()
}

func (c *RedisCache) DeletePattern(ctx context.Context, pattern string) error {
    iter := c.client.Scan(ctx, 0, pattern, 100).Iterator()
    var keys []string
    for iter.Next(ctx) {
        keys = append(keys, iter.Val())
    }
    if len(keys) > 0 {
        return c.client.Del(ctx, keys...).Err()
    }
    return nil
}
</code></pre>

<h3 id="1-2-cache-aside-pattern"><strong>1.2.快取預留模式</strong></h3>

<pre><code class="language-go">func (s *UserService) GetUser(ctx context.Context, id uint) (*User, error) {
    cacheKey := fmt.Sprintf("user:%d", id)
    
    // 1. Try cache first
    var user User
    if err := s.cache.Get(ctx, cacheKey, &user); err == nil {
        return &user, nil // Cache hit
    }
    
    // 2. Cache miss → query DB
    dbUser, err := s.repo.GetByID(ctx, id)
    if err != nil {
        return nil, err
    }
    
    // 3. Store in cache
    s.cache.Set(ctx, cacheKey, dbUser, 30*time.Minute)
    
    return dbUser, nil
}

// Invalidate on update
func (s *UserService) UpdateUser(ctx context.Context, id uint, input UpdateInput) error {
    if err := s.repo.Update(ctx, id, input); err != nil {
        return err
    }
    
    // Invalidate cache
    return s.cache.Delete(ctx, fmt.Sprintf("user:%d", id))
}
</code></pre>

<h3 id="1-3-cache-patterns"><strong>1.3.快取模式總結</strong></h3>

<table>
<thead><tr><th>圖案</th><th>閱讀</th><th>寫</th><th>使用案例</th></tr></thead>
<tbody>
<tr><td>快取旁路</td><td>應用程式讀取快取→資料庫</td><td>應用程式寫入資料庫，使快取無效</td><td>一般</td></tr>
<tr><td>直寫式</td><td>應用程式讀取快取</td><td>Cache同步寫入DB</td><td>一致性很重要</td></tr>
<tr><td>後寫式</td><td>應用程式讀取快取</td><td>快取異步寫入資料庫</td><td>寫重</td></tr>
<tr><td>通讀</td><td>如果未命中，則從資料庫快取加載</td><td>應用程式寫入資料庫</td><td>重讀</td></tr>
</tbody>
</table>

<h3 id="1-4-singleflight"><strong>1.4. Singleflight（緩存踩踏預防）</strong></h3>

<pre><code class="language-go">import "golang.org/x/sync/singleflight"

var group singleflight.Group

func (s *UserService) GetUserSingleflight(ctx context.Context, id uint) (*User, error) {
    cacheKey := fmt.Sprintf("user:%d", id)
    
    // Singleflight: chỉ 1 goroutine query DB, các goroutine khác chờ kết quả
    result, err, _ := group.Do(cacheKey, func() (interface{}, error) {
        // Try cache
        var user User
        if err := s.cache.Get(ctx, cacheKey, &user); err == nil {
            return &user, nil
        }
        
        // Query DB
        dbUser, err := s.repo.GetByID(ctx, id)
        if err != nil {
            return nil, err
        }
        
        // Cache result
        s.cache.Set(ctx, cacheKey, dbUser, 30*time.Minute)
        return dbUser, nil
    })
    
    if err != nil {
        return nil, err
    }
    return result.(*User), nil
}
</code></pre>

<h2 id="2-file-upload"><strong>2. 文件上傳</strong></h2>

<h3 id="2-1-basic-upload"><strong>2.1.基本文件上傳</strong></h3>

<pre><code class="language-go">func UploadHandler(c *gin.Context) {
    // Max 32 MB
    c.Request.ParseMultipartForm(32 << 20)
    
    file, header, err := c.Request.FormFile("file")
    if err != nil {
        c.JSON(400, gin.H{"error": "No file uploaded"})
        return
    }
    defer file.Close()
    
    // Validate file type
    allowedTypes := map[string]bool{
        "image/jpeg": true,
        "image/png":  true,
        "image/webp": true,
        "application/pdf": true,
    }
    
    contentType := header.Header.Get("Content-Type")
    if !allowedTypes[contentType] {
        c.JSON(400, gin.H{"error": "File type not allowed"})
        return
    }
    
    // Validate file size (max 10MB)
    if header.Size > 10<<20 {
        c.JSON(400, gin.H{"error": "File too large (max 10MB)"})
        return
    }
    
    // Generate safe filename
    ext := filepath.Ext(header.Filename)
    filename := fmt.Sprintf("%s%s", uuid.New().String(), ext)
    
    // Save to disk
    dst := filepath.Join("uploads", filename)
    out, err := os.Create(dst)
    if err != nil {
        c.JSON(500, gin.H{"error": "Failed to save file"})
        return
    }
    defer out.Close()
    
    if _, err := io.Copy(out, file); err != nil {
        c.JSON(500, gin.H{"error": "Failed to write file"})
        return
    }
    
    c.JSON(200, gin.H{
        "filename": filename,
        "size":     header.Size,
        "url":      fmt.Sprintf("/uploads/%s", filename),
    })
}
</code></pre>

<h3 id="2-2-s3-upload"><strong>2.2. S3 上傳（MinIO/AWS S3）</strong></h3>

<pre><code class="language-bash">go get github.com/aws/aws-sdk-go-v2/service/s3
go get github.com/aws/aws-sdk-go-v2/config
</code></pre>

<pre><code class="language-go">package storage

import (
    "context"
    "fmt"
    "io"
    "time"
    
    "github.com/aws/aws-sdk-go-v2/aws"
    "github.com/aws/aws-sdk-go-v2/config"
    "github.com/aws/aws-sdk-go-v2/service/s3"
)

type S3Storage struct {
    client *s3.Client
    bucket string
}

func NewS3Storage(ctx context.Context, bucket string) (*S3Storage, error) {
    cfg, err := config.LoadDefaultConfig(ctx)
    if err != nil {
        return nil, err
    }
    
    return &S3Storage{
        client: s3.NewFromConfig(cfg),
        bucket: bucket,
    }, nil
}

func (s *S3Storage) Upload(ctx context.Context, key string, body io.Reader, contentType string) (string, error) {
    _, err := s.client.PutObject(ctx, &s3.PutObjectInput{
        Bucket:      aws.String(s.bucket),
        Key:         aws.String(key),
        Body:        body,
        ContentType: aws.String(contentType),
    })
    if err != nil {
        return "", fmt.Errorf("upload to S3: %w", err)
    }
    
    return fmt.Sprintf("https://%s.s3.amazonaws.com/%s", s.bucket, key), nil
}

// Presigned URL (direct client upload)
func (s *S3Storage) GetPresignedURL(ctx context.Context, key, contentType string) (string, error) {
    presignClient := s3.NewPresignClient(s.client)
    
    req, err := presignClient.PresignPutObject(ctx, &s3.PutObjectInput{
        Bucket:      aws.String(s.bucket),
        Key:         aws.String(key),
        ContentType: aws.String(contentType),
    }, s3.WithPresignExpires(15*time.Minute))
    
    if err != nil {
        return "", err
    }
    
    return req.URL, nil
}
</code></pre>

<h2 id="3-performance-profiling"><strong>3. 使用 pprof 進行效能分析</strong></h2>

<pre><code class="language-go">import (
    "net/http"
    _ "net/http/pprof" // Import cho side-effect
)

func main() {
    // Expose pprof endpoints
    go func() {
        // ⚠️ Chỉ expose trong development, KHÔNG expose public!
        http.ListenAndServe("localhost:6060", nil)
    }()
    
    // Your main server...
}
</code></pre>

<pre><code class="language-bash"># CPU profiling
go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30

# Memory profiling
go tool pprof http://localhost:6060/debug/pprof/heap

# Goroutine analysis
go tool pprof http://localhost:6060/debug/pprof/goroutine

# Interactive commands trong pprof:
# top10        - Top 10 functions by CPU/memory
# list funcName - Show source code with annotations
# web          - Open flame graph in browser
</code></pre>

<h2 id="4-benchmarking"><strong>4. 基準測試</strong></h2>

<pre><code class="language-go">// user_service_test.go
func BenchmarkGetUser(b *testing.B) {
    svc := setupService()
    ctx := context.Background()
    
    b.ResetTimer()
    b.RunParallel(func(pb *testing.PB) {
        for pb.Next() {
            _, _ = svc.GetUser(ctx, 1)
        }
    })
}

func BenchmarkGetUserCached(b *testing.B) {
    svc := setupServiceWithCache()
    ctx := context.Background()
    
    // Warm cache
    svc.GetUser(ctx, 1)
    
    b.ResetTimer()
    b.RunParallel(func(pb *testing.PB) {
        for pb.Next() {
            _, _ = svc.GetUser(ctx, 1)
        }
    })
}
</code></pre>

<pre><code class="language-bash"># Run benchmarks
go test -bench=. -benchmem -count=3 ./...

# Output:
# BenchmarkGetUser-8         5000   300000 ns/op   2048 B/op   20 allocs/op
# BenchmarkGetUserCached-8  500000    3000 ns/op    256 B/op    3 allocs/op
</code></pre>

<h2 id="5-connection-pooling"><strong>5. 連接池</strong></h2>

<pre><code class="language-go">// GORM connection pool
sqlDB, _ := db.DB()
sqlDB.SetMaxOpenConns(25)          // Max open connections
sqlDB.SetMaxIdleConns(10)          // Max idle connections
sqlDB.SetConnMaxLifetime(5 * time.Minute) // Max connection lifetime
sqlDB.SetConnMaxIdleTime(5 * time.Minute) // Max idle time

// HTTP client pool
httpClient := &http.Client{
    Transport: &http.Transport{
        MaxIdleConns:        100,
        MaxIdleConnsPerHost: 10,
        IdleConnTimeout:     90 * time.Second,
    },
    Timeout: 30 * time.Second,
}
</code></pre>

<p>下一篇： <strong>Go 的微服務架構</strong> — 服務網格、API 閘道和分散式系統。</p>
