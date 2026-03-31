---
id: 019d8b40-b404-7001-b003-golang0000404
title: 'Bài 16: Caching, File Upload & Performance'
slug: bai-16-caching-file-upload-va-performance
description: >-
  Redis caching strategies, cache patterns. File upload với streaming,
  S3 integration. Performance profiling với pprof, benchmarking.
  Memory optimization, connection pooling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-redis-caching"><strong>1. Redis Caching</strong></h2>

<h3 id="1-1-setup"><strong>1.1. Setup</strong></h3>

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

<h3 id="1-2-cache-aside-pattern"><strong>1.2. Cache-Aside Pattern</strong></h3>

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

<h3 id="1-3-cache-patterns"><strong>1.3. Cache Patterns Summary</strong></h3>

<table>
<thead><tr><th>Pattern</th><th>Read</th><th>Write</th><th>Use case</th></tr></thead>
<tbody>
<tr><td>Cache-Aside</td><td>App reads cache → DB</td><td>App writes DB, invalidate cache</td><td>General purpose</td></tr>
<tr><td>Write-Through</td><td>App reads cache</td><td>Cache writes DB synchronously</td><td>Consistency important</td></tr>
<tr><td>Write-Behind</td><td>App reads cache</td><td>Cache writes DB asynchronously</td><td>Write-heavy</td></tr>
<tr><td>Read-Through</td><td>Cache loads from DB if miss</td><td>App writes DB</td><td>Read-heavy</td></tr>
</tbody>
</table>

<h3 id="1-4-singleflight"><strong>1.4. Singleflight (Cache Stampede Prevention)</strong></h3>

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

<h2 id="2-file-upload"><strong>2. File Upload</strong></h2>

<h3 id="2-1-basic-upload"><strong>2.1. Basic File Upload</strong></h3>

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

<h3 id="2-2-s3-upload"><strong>2.2. S3 Upload (MinIO / AWS S3)</strong></h3>

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

<h2 id="3-performance-profiling"><strong>3. Performance Profiling với pprof</strong></h2>

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

<h2 id="4-benchmarking"><strong>4. Benchmarking</strong></h2>

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

<h2 id="5-connection-pooling"><strong>5. Connection Pooling</strong></h2>

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

<p>Bài tiếp theo: <strong>Microservices Architecture với Go</strong> — service mesh, API gateway, và distributed systems.</p>
