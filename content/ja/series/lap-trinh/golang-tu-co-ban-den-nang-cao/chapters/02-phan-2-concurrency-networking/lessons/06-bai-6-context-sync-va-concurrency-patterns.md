---
id: 019d8b40-b202-7001-b003-golang0000202
title: 'レッスン 6: コンテキスト、同期、同時実行パターン'
slug: bai-6-context-sync-va-concurrency-patterns
description: >-
  コンテキスト パッケージ (WithCancel、WithTimeout、WithValue)。
  sync.Mutex、RWMutex、sync.Once、sync.Pool。ワーカー プール、パイプライン、レート リミッター、セマフォ パターン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: 同時実行性とネットワーキング'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5531" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5531)"/>

  <!-- Decorations -->
  <g>
    <circle cx="827" cy="71" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1054" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="781" cy="185" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1008" cy="112" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="39" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.1769145362398,153 1002.1769145362398,189 971,207 939.8230854637602,189 939.8230854637602,153 971,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: コンテキスト、同期、同時実行性</tspan>
      <tspan x="60" dy="42">パターン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 同時実行性とネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-context-package"><strong>1. コンテキストパッケージ</strong></h2>

<p><code>コンテキスト</code> は同時実行制御のために Go で最も重要なパッケージです。コンテキストキャリー <strong>締め切り</strong>、 <strong>キャンセル信号</strong> そして <strong>リクエストスコープの値</strong> 関数境界とゴルーチンを介して。</p>

<h3 id="1-1-context-basics"><strong>1.1.コンテキストの基本</strong></h3>

<pre><code class="language-go">import "context"

// context.Background() - root context, dùng trong main/init/tests
ctx := context.Background()

// context.TODO() - placeholder khi chưa biết dùng context nào
ctx := context.TODO()

// ⚠️ Quy tắc: context LUÔN là parameter đầu tiên
func GetUser(ctx context.Context, id int) (*User, error) {
    // ...
}

// KHÔNG lưu context trong struct
// ❌ type Server struct { ctx context.Context }
// ✅ Truyền context qua function parameter
</code></pre>

<h3 id="1-2-withcancel"><strong>1.2. context.WithCancel</strong></h3>

<pre><code class="language-go">func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel() // ⚠️ LUÔN gọi cancel để tránh resource leak
    
    go func(ctx context.Context) {
        for {
            select {
            case &lt;-ctx.Done():
                fmt.Println("Worker cancelled:", ctx.Err())
                return
            default:
                fmt.Println("Working...")
                time.Sleep(500 * time.Millisecond)
            }
        }
    }(ctx)
    
    time.Sleep(2 * time.Second)
    cancel() // Signal cancellation
    time.Sleep(100 * time.Millisecond)
}
</code></pre>

<h3 id="1-3-withtimeout"><strong>1.3. context.WithTimeout および WithDeadline</strong></h3>

<pre><code class="language-go">// WithTimeout: cancel sau duration
func fetchData(ctx context.Context) (string, error) {
    ctx, cancel := context.WithTimeout(ctx, 3*time.Second)
    defer cancel()
    
    ch := make(chan string, 1)
    go func() {
        // Simulate slow operation
        time.Sleep(5 * time.Second)
        ch &lt;- "data"
    }()
    
    select {
    case data := &lt;-ch:
        return data, nil
    case &lt;-ctx.Done():
        return "", fmt.Errorf("fetch timed out: %w", ctx.Err())
    }
}

// WithDeadline: cancel tại thời điểm cụ thể
func processUntil(ctx context.Context) {
    deadline := time.Now().Add(10 * time.Second)
    ctx, cancel := context.WithDeadline(ctx, deadline)
    defer cancel()
    
    if d, ok := ctx.Deadline(); ok {
        fmt.Println("Deadline:", d)
    }
    
    // ... process
}

func main() {
    ctx := context.Background()
    data, err := fetchData(ctx)
    if err != nil {
        fmt.Println("Error:", err) // "fetch timed out: context deadline exceeded"
        return
    }
    fmt.Println(data)
}
</code></pre>

<h3 id="1-4-withvalue"><strong>1.4. context.WithValue</strong></h3>

<pre><code class="language-go">// WithValue: gắn request-scoped data vào context
// ⚠️ Chỉ dùng cho cross-cutting concerns: request ID, auth info, trace ID
// ❌ KHÔNG dùng cho function parameters

type contextKey string

const (
    requestIDKey contextKey = "request_id"
    userIDKey    contextKey = "user_id"
)

func withRequestID(ctx context.Context, requestID string) context.Context {
    return context.WithValue(ctx, requestIDKey, requestID)
}

func getRequestID(ctx context.Context) string {
    if id, ok := ctx.Value(requestIDKey).(string); ok {
        return id
    }
    return ""
}

// Middleware pattern
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        requestID := uuid.New().String()
        ctx := withRequestID(r.Context(), requestID)
        
        log.Printf("[%s] %s %s", requestID, r.Method, r.URL.Path)
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}

func handler(w http.ResponseWriter, r *http.Request) {
    requestID := getRequestID(r.Context())
    fmt.Fprintf(w, "Request ID: %s", requestID)
}
</code></pre>

<h3 id="1-5-context-propagation"><strong>1.5.コンテキストの伝播</strong></h3>

<pre><code class="language-go">// Context lan truyền qua call chain
func handleRequest(ctx context.Context) error {
    // Thêm timeout cho toàn bộ request
    ctx, cancel := context.WithTimeout(ctx, 10*time.Second)
    defer cancel()
    
    // Gọi service layer
    user, err := userService.GetUser(ctx, 123)
    if err != nil {
        return err
    }
    
    // Gọi nhiều services concurrent
    g, ctx := errgroup.WithContext(ctx)
    
    var orders []Order
    g.Go(func() error {
        var err error
        orders, err = orderService.GetOrders(ctx, user.ID)
        return err
    })
    
    var notifications []Notification
    g.Go(func() error {
        var err error
        notifications, err = notifService.GetNotifications(ctx, user.ID)
        return err
    })
    
    if err := g.Wait(); err != nil {
        return err // Nếu 1 goroutine fail, context tự cancel các goroutine khác
    }
    
    // ... use orders, notifications
    return nil
}
</code></pre>

<h2 id="2-sync-package"><strong>2.同期パッケージ</strong></h2>

<h3 id="2-1-mutex"><strong>2.1.同期ミューテックス</strong></h3>

<pre><code class="language-go">// Mutex bảo vệ shared data khỏi race conditions

type SafeCounter struct {
    mu    sync.Mutex
    count map[string]int
}

func NewSafeCounter() *SafeCounter {
    return &SafeCounter{
        count: make(map[string]int),
    }
}

func (c *SafeCounter) Increment(key string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.count[key]++
}

func (c *SafeCounter) Get(key string) int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.count[key]
}

func main() {
    counter := NewSafeCounter()
    var wg sync.WaitGroup
    
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter.Increment("visits")
        }()
    }
    
    wg.Wait()
    fmt.Println(counter.Get("visits")) // 1000 (always correct)
}

// Detect race conditions:
// go run -race main.go
// go test -race ./...
</code></pre>

<h3 id="2-2-rwmutex"><strong>2.2. sync.RWMutex</strong></h3>

<pre><code class="language-go">// RWMutex: nhiều readers đồng thời, nhưng writer exclusive
type Cache struct {
    mu   sync.RWMutex
    data map[string]string
}

func NewCache() *Cache {
    return &Cache{data: make(map[string]string)}
}

func (c *Cache) Get(key string) (string, bool) {
    c.mu.RLock()         // Read lock - nhiều goroutines đọc cùng lúc
    defer c.mu.RUnlock()
    val, ok := c.data[key]
    return val, ok
}

func (c *Cache) Set(key, value string) {
    c.mu.Lock()          // Write lock - exclusive
    defer c.mu.Unlock()
    c.data[key] = value
}

func (c *Cache) Delete(key string) {
    c.mu.Lock()
    defer c.mu.Unlock()
    delete(c.data, key)
}
</code></pre>

<h3 id="2-3-once"><strong>2.3.同期1回</strong></h3>

<pre><code class="language-go">// sync.Once đảm bảo function chỉ chạy 1 lần (thread-safe singleton)

var (
    instance *Database
    once     sync.Once
)

type Database struct {
    conn string
}

func GetDatabase() *Database {
    once.Do(func() {
        fmt.Println("Initializing database...")
        instance = &Database{conn: "postgres://localhost/mydb"}
    })
    return instance
}

func main() {
    // Gọi từ nhiều goroutines - chỉ init 1 lần
    var wg sync.WaitGroup
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            db := GetDatabase()
            fmt.Println(db.conn)
        }()
    }
    wg.Wait()
    // "Initializing database..." chỉ in 1 lần
}
</code></pre>

<h3 id="2-4-pool"><strong>2.4.同期プール</strong></h3>

<pre><code class="language-go">// sync.Pool: tái sử dụng objects tạm thời, giảm GC pressure

var bufferPool = sync.Pool{
    New: func() any {
        return new(bytes.Buffer)
    },
}

func processRequest(data []byte) string {
    // Lấy buffer từ pool
    buf := bufferPool.Get().(*bytes.Buffer)
    defer func() {
        buf.Reset()
        bufferPool.Put(buf) // Trả lại pool
    }()
    
    buf.Write(data)
    buf.WriteString(" processed")
    return buf.String()
}

// Use case phổ biến:
// - JSON encoder/decoder
// - HTTP request/response buffers
// - Temporary byte slices
</code></pre>

<h3 id="2-5-map"><strong>2.5.同期マップ</strong></h3>

<pre><code class="language-go">// sync.Map: concurrent-safe map (không cần mutex)
// Phù hợp khi: keys ổn định, read nhiều hơn write

var cache sync.Map

func main() {
    // Store
    cache.Store("key1", "value1")
    cache.Store("key2", 42)
    
    // Load
    val, ok := cache.Load("key1")
    if ok {
        fmt.Println(val.(string)) // "value1"
    }
    
    // LoadOrStore (get or set if not exists)
    actual, loaded := cache.LoadOrStore("key3", "default")
    fmt.Println(actual, loaded) // "default", false (mới tạo)
    
    // Delete
    cache.Delete("key1")
    
    // Range
    cache.Range(func(key, value any) bool {
        fmt.Printf("%v: %v\n", key, value)
        return true // return false để dừng
    })
}
</code></pre>

<h2 id="3-errgroup"><strong>3. errgroup (golang.org/x/sync)</strong></h2>

<pre><code class="language-go">import "golang.org/x/sync/errgroup"

// errgroup: chạy nhiều goroutines, collect errors, auto cancellation

func fetchUserData(ctx context.Context, userID int) (*UserProfile, error) {
    g, ctx := errgroup.WithContext(ctx)
    
    var user *User
    var orders []Order
    var reviews []Review
    
    // Fetch user info
    g.Go(func() error {
        var err error
        user, err = getUser(ctx, userID)
        return err
    })
    
    // Fetch orders (concurrent)
    g.Go(func() error {
        var err error
        orders, err = getOrders(ctx, userID)
        return err
    })
    
    // Fetch reviews (concurrent)
    g.Go(func() error {
        var err error
        reviews, err = getReviews(ctx, userID)
        return err
    })
    
    // Wait for all goroutines
    if err := g.Wait(); err != nil {
        return nil, err // Returns first error, cancels others
    }
    
    return &UserProfile{
        User:    user,
        Orders:  orders,
        Reviews: reviews,
    }, nil
}

// errgroup with concurrency limit
func processItems(ctx context.Context, items []Item) error {
    g, ctx := errgroup.WithContext(ctx)
    g.SetLimit(10) // Max 10 concurrent goroutines
    
    for _, item := range items {
        item := item // capture loop variable
        g.Go(func() error {
            return processItem(ctx, item)
        })
    }
    
    return g.Wait()
}
</code></pre>

<h2 id="4-patterns-nang-cao"><strong>4. 高度な同時実行パターン</strong></h2>

<h3 id="4-1-semaphore"><strong>4.1.セマフォパターン</strong></h3>

<pre><code class="language-go">// Semaphore giới hạn số goroutines chạy đồng thời

type Semaphore struct {
    ch chan struct{}
}

func NewSemaphore(max int) *Semaphore {
    return &Semaphore{ch: make(chan struct{}, max)}
}

func (s *Semaphore) Acquire() {
    s.ch &lt;- struct{}{}
}

func (s *Semaphore) Release() {
    &lt;-s.ch
}

func main() {
    sem := NewSemaphore(3) // Max 3 concurrent
    var wg sync.WaitGroup
    
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            sem.Acquire()
            defer sem.Release()
            
            fmt.Printf("Worker %d running\n", id)
            time.Sleep(time.Second)
        }(i)
    }
    
    wg.Wait()
}

// Hoặc dùng golang.org/x/sync/semaphore cho weighted semaphore
</code></pre>

<h3 id="4-2-rate-limiter"><strong>4.2.レートリミッター</strong></h3>

<pre><code class="language-go">// Rate limiter với time.Ticker

func rateLimitedProcess(items []string, rps int) {
    ticker := time.NewTicker(time.Second / time.Duration(rps))
    defer ticker.Stop()
    
    for _, item := range items {
        &lt;-ticker.C // Chờ tick
        go func(item string) {
            fmt.Println("Processing:", item)
        }(item)
    }
}

// Token bucket rate limiter
type RateLimiter struct {
    tokens chan struct{}
}

func NewRateLimiter(rate int, burst int) *RateLimiter {
    rl := &RateLimiter{
        tokens: make(chan struct{}, burst),
    }
    
    // Fill tokens
    for i := 0; i < burst; i++ {
        rl.tokens &lt;- struct{}{}
    }
    
    // Refill tokens
    go func() {
        ticker := time.NewTicker(time.Second / time.Duration(rate))
        defer ticker.Stop()
        for range ticker.C {
            select {
            case rl.tokens &lt;- struct{}{}:
            default: // bucket full
            }
        }
    }()
    
    return rl
}

func (rl *RateLimiter) Allow() bool {
    select {
    case &lt;-rl.tokens:
        return true
    default:
        return false
    }
}
</code></pre>

<h3 id="4-3-or-done"><strong>4.3.オーダンチャンネル</strong></h3>

<pre><code class="language-go">// Wrap channel với done signal
func orDone(done &lt;-chan struct{}, ch &lt;-chan int) &lt;-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for {
            select {
            case &lt;-done:
                return
            case val, ok := &lt;-ch:
                if !ok {
                    return
                }
                select {
                case out &lt;- val:
                case &lt;-done:
                    return
                }
            }
        }
    }()
    return out
}
</code></pre>

<h2 id="5-best-practices"><strong>5. 同時実行のベストプラクティス</strong></h2>

<ul>
<li><strong>常に使用する <code>走りに行く - レース</code></strong> 競合状態を検出する</li>
<li><strong>コンテキストは最初のパラメータです</strong> I/O を持つすべての関数の</li>
<li><strong>常に cancel() を呼び出します</strong> と <code>延期キャンセル()</code></li>
<li><strong>チャンネルを優先する</strong> コミュニケーションのために、 <strong>ミューテックス</strong> 国家を守るために</li>
<li><strong>メモリを共有しない</strong> — チャネル経由でコピーを送信する</li>
<li><strong>goroutine リークを回避する</strong> — goroutine を返す方法は常にあります</li>
<li><strong>エラーグループを使用する</strong> WaitGroup + 手動エラー処理の代わりに</li>
<li><strong>バッファリングされたチャネル</strong> 既知のサイズのデータの場合、同期用にバッファリングされていない</li>
</ul>

<p>次の記事: <strong>HTTP サーバーと JSON の処理</strong> — 標準ライブラリを使用して HTTP サーバーを構築します。</p>
