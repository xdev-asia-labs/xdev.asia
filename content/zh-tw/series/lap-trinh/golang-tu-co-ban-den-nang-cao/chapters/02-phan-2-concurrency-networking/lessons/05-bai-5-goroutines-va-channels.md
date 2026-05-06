---
id: 019d8b40-b201-7001-b003-golang0000201
title: 第 5 課：Goroutine 和 Channels
slug: bai-5-goroutines-va-channels
description: Goroutines、WaitGroup、緩衝/無緩衝通道。選擇語句、頻道方向、扇入/扇出模式。並發與並行。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：並發與網絡
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5772" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5772)"/>

  <!-- Decorations -->
  <g>
    <circle cx="639" cy="247" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="146" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="717" cy="45" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="204" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="103" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="97" x2="1100" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="127" x2="1050" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.712812921102,231 1074.712812921102,263 1047,279 1019.287187078898,263 1019.287187078898,231 1047,215" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：Goroutine 和 Channels</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：並發與網絡</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-concurrency-vs-parallelism"><strong>1. 並發與並行</strong></h2>

<p>在開始之前，有必要區分兩個經常被混淆的概念：</p>

<ul>
<li><strong>並發性</strong>：同時處理多個任務 <em>交替地</em> （1個CPU核心交替運作）。就像一個廚師準備很多菜一樣。</li>
<li><strong>平行性</strong>: 真的 <em>同時運行</em> 在多個 CPU 核心上。和很多人一樣，每個人都會做一道菜。</li>
</ul>

<p>Go 的設計目的是 <strong>並發性</strong> - 協助編寫有效處理多個任務的程式。 Go 運行時自動將 goroutine 調度到作業系統執行緒上，在有多個 CPU 核心時利用並行性。</p>

<pre><code>┌─────────── Go Runtime Scheduler ───────────┐
│                                             │
│  Goroutine 1  Goroutine 2  Goroutine 3     │
│      │             │             │          │
│      ▼             ▼             ▼          │
│  ┌────────┐   ┌────────┐   ┌────────┐     │
│  │ OS     │   │ OS     │   │ OS     │     │
│  │Thread 1│   │Thread 2│   │Thread 3│     │
│  └────────┘   └────────┘   └────────┘     │
│      │             │             │          │
│      ▼             ▼             ▼          │
│   CPU Core 1   CPU Core 2   CPU Core 3     │
└─────────────────────────────────────────────┘
</code></pre>

<h2 id="2-goroutines"><strong>2. Goroutine</strong></h2>

<p>Goroutines 是由 Go 運行時管理的輕量級執行緒。僅用 ~2KB 堆疊初始化（與作業系統線程 ~1-8MB 相比），可以創建數百萬個 goroutine。</p>

<h3 id="2-1-basic-goroutine"><strong>2.1.創建協程</strong></h3>

<pre><code class="language-go">package main

import (
    "fmt"
    "time"
)

func sayHello(name string) {
    for i := 0; i < 3; i++ {
        fmt.Printf("Hello from %s (%d)\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // go keyword tạo goroutine
    go sayHello("Goroutine 1")
    go sayHello("Goroutine 2")
    
    // Anonymous goroutine
    go func() {
        fmt.Println("Hello from anonymous goroutine")
    }()
    
    // ⚠️ main() là goroutine chính
    // Khi main() kết thúc, TẤT CẢ goroutines dừng lại
    time.Sleep(500 * time.Millisecond) // Chờ goroutines hoàn thành
    fmt.Println("Main done")
}
</code></pre>

<h3 id="2-2-waitgroup"><strong>2.2.同步等待群組</strong></h3>

<pre><code class="language-go">import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done() // Giảm counter khi xong
    
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Duration(id) * 100 * time.Millisecond)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    
    for i := 1; i <= 5; i++ {
        wg.Add(1) // Tăng counter
        go worker(i, &wg)
    }
    
    wg.Wait() // Block cho đến khi counter = 0
    fmt.Println("All workers completed")
}
</code></pre>

<h3 id="2-3-goroutine-leaks"><strong>2.3. Goroutine 洩漏</strong></h3>

<pre><code class="language-go">// ⚠️ TRÁNH goroutine leaks - goroutine không bao giờ kết thúc

// ❌ Bad: goroutine leak
func badExample() {
    ch := make(chan int)
    go func() {
        val := &lt;-ch // Block forever nếu không ai gửi
        fmt.Println(val)
    }()
    // Function return, goroutine vẫn chạy (leaked!)
}

// ✅ Good: dùng context để cancel
func goodExample(ctx context.Context) {
    ch := make(chan int)
    go func() {
        select {
        case val := &lt;-ch:
            fmt.Println(val)
        case &lt;-ctx.Done():
            fmt.Println("Cancelled")
            return
        }
    }()
}

// Kiểm tra goroutine leaks trong test:
// import "runtime"
// before := runtime.NumGoroutine()
// ... run test ...
// after := runtime.NumGoroutine()
// assert after == before
</code></pre>

<h2 id="3-channels"><strong>3. 頻道</strong></h2>

<p>通道是 goroutine 之間的通訊機制。走諺語： <em>“不要透過共享記憶來交流，而是透過交流來共享記憶。”</em></p>

<h3 id="3-1-unbuffered"><strong>3.1.無緩衝通道</strong></h3>

<pre><code class="language-go">func main() {
    // Unbuffered channel - synchronous
    // Sender blocks cho đến khi receiver sẵn sàng (và ngược lại)
    ch := make(chan string)
    
    go func() {
        ch &lt;- "Hello"  // Send - blocks cho đến khi có receiver
    }()
    
    msg := &lt;-ch         // Receive - blocks cho đến khi có sender
    fmt.Println(msg)     // "Hello"
}
</code></pre>

<h3 id="3-2-buffered"><strong>3.2.緩衝通道</strong></h3>

<pre><code class="language-go">func main() {
    // Buffered channel - asynchronous (cho đến khi buffer đầy)
    ch := make(chan int, 3) // Buffer size = 3
    
    ch &lt;- 1  // Không block (buffer chưa đầy)
    ch &lt;- 2  // Không block
    ch &lt;- 3  // Không block
    // ch &lt;- 4 // ⚠️ Block! Buffer đầy, chờ receiver
    
    fmt.Println(&lt;-ch)  // 1 (FIFO)
    fmt.Println(&lt;-ch)  // 2
    fmt.Println(&lt;-ch)  // 3
    
    fmt.Println(len(ch))  // 0 (số items trong buffer)
    fmt.Println(cap(ch))  // 3 (buffer capacity)
}
</code></pre>

<h3 id="3-3-channel-directions"><strong>3.3.頻道方向</strong></h3>

<pre><code class="language-go">// Send-only channel: chan&lt;- T
// Receive-only channel: &lt;-chan T

func producer(out chan&lt;- int) {
    for i := 0; i < 5; i++ {
        out &lt;- i
    }
    close(out) // Đóng channel khi xong gửi
}

func consumer(in &lt;-chan int) {
    for val := range in { // range tự dừng khi channel closed
        fmt.Println("Received:", val)
    }
}

func main() {
    ch := make(chan int, 5)
    
    go producer(ch)  // chan tự convert thành chan&lt;-
    consumer(ch)     // chan tự convert thành &lt;-chan
}
</code></pre>

<h3 id="3-4-close-range"><strong>3.4.近距離和範圍</strong></h3>

<pre><code class="language-go">func fibonacci(n int, ch chan&lt;- int) {
    a, b := 0, 1
    for i := 0; i < n; i++ {
        ch &lt;- a
        a, b = b, a+b
    }
    close(ch) // Signal: không còn data
}

func main() {
    ch := make(chan int, 10)
    go fibonacci(10, ch)
    
    // Range over channel - dừng khi channel closed
    for val := range ch {
        fmt.Println(val)
    }
    
    // Check if channel is closed
    val, ok := &lt;-ch
    if !ok {
        fmt.Println("Channel closed, val =", val) // zero value
    }
    
    // ⚠️ Rules:
    // - Chỉ SENDER close channel, không bao giờ receiver
    // - Send vào closed channel → panic
    // - Receive từ closed channel → zero value, false
    // - Close channel đã closed → panic
}
</code></pre>

<h2 id="4-select"><strong>4. 選擇語句</strong></h2>

<p><code>選擇</code> 允許等待多個通道操作－類似於通道的切換。</p>

<pre><code class="language-go">func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(100 * time.Millisecond)
        ch1 &lt;- "from ch1"
    }()
    
    go func() {
        time.Sleep(200 * time.Millisecond)
        ch2 &lt;- "from ch2"
    }()
    
    // select chờ channel nào sẵn sàng trước
    for i := 0; i < 2; i++ {
        select {
        case msg := &lt;-ch1:
            fmt.Println(msg)
        case msg := &lt;-ch2:
            fmt.Println(msg)
        }
    }
}

// Timeout pattern
func fetchWithTimeout(url string) (string, error) {
    ch := make(chan string, 1)
    
    go func() {
        // ... fetch data
        ch &lt;- "data"
    }()
    
    select {
    case data := &lt;-ch:
        return data, nil
    case &lt;-time.After(5 * time.Second):
        return "", fmt.Errorf("timeout after 5s")
    }
}

// Non-blocking send/receive
func nonBlocking() {
    ch := make(chan int, 1)
    
    select {
    case val := &lt;-ch:
        fmt.Println("Received:", val)
    default:
        fmt.Println("No data available") // Không block
    }
    
    select {
    case ch &lt;- 42:
        fmt.Println("Sent")
    default:
        fmt.Println("Channel full") // Không block
    }
}
</code></pre>

<h2 id="5-patterns"><strong>5. 並發模式</strong></h2>

<h3 id="5-1-fan-out-fan-in"><strong>5.1.扇出/扇入</strong></h3>

<pre><code class="language-go">// Fan-Out: 1 producer → nhiều workers
// Fan-In: nhiều producers → 1 consumer

// Fan-Out
func fanOut(jobs &lt;-chan int, numWorkers int) []&lt;-chan int {
    workers := make([]&lt;-chan int, numWorkers)
    for i := 0; i < numWorkers; i++ {
        workers[i] = worker(i, jobs)
    }
    return workers
}

func worker(id int, jobs &lt;-chan int) &lt;-chan int {
    results := make(chan int)
    go func() {
        defer close(results)
        for job := range jobs {
            // Process job
            results &lt;- job * job
            fmt.Printf("Worker %d processed job %d\n", id, job)
        }
    }()
    return results
}

// Fan-In: merge nhiều channels thành 1
func fanIn(channels ...&lt;-chan int) &lt;-chan int {
    merged := make(chan int)
    var wg sync.WaitGroup
    
    for _, ch := range channels {
        wg.Add(1)
        go func(c &lt;-chan int) {
            defer wg.Done()
            for val := range c {
                merged &lt;- val
            }
        }(ch)
    }
    
    go func() {
        wg.Wait()
        close(merged)
    }()
    
    return merged
}

func main() {
    // Tạo jobs
    jobs := make(chan int, 10)
    go func() {
        for i := 1; i <= 10; i++ {
            jobs &lt;- i
        }
        close(jobs)
    }()
    
    // Fan-Out: 3 workers
    workers := fanOut(jobs, 3)
    
    // Fan-In: merge results
    results := fanIn(workers...)
    
    for result := range results {
        fmt.Println("Result:", result)
    }
}
</code></pre>

<h3 id="5-2-pipeline"><strong>5.2.管道模式</strong></h3>

<pre><code class="language-go">// Pipeline: chuỗi stages, mỗi stage nhận input channel và trả output channel

func generate(nums ...int) &lt;-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for _, n := range nums {
            out &lt;- n
        }
    }()
    return out
}

func square(in &lt;-chan int) &lt;-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for n := range in {
            out &lt;- n * n
        }
    }()
    return out
}

func filter(in &lt;-chan int, predicate func(int) bool) &lt;-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for n := range in {
            if predicate(n) {
                out &lt;- n
            }
        }
    }()
    return out
}

func main() {
    // Pipeline: generate → square → filter (> 10)
    numbers := generate(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    squared := square(numbers)
    filtered := filter(squared, func(n int) bool {
        return n > 10
    })
    
    for val := range filtered {
        fmt.Println(val) // 16, 25, 36, 49, 64, 81, 100
    }
}
</code></pre>

<h3 id="5-3-worker-pool"><strong>5.3.工人池</strong></h3>

<pre><code class="language-go">type Job struct {
    ID   int
    Data string
}

type Result struct {
    JobID  int
    Output string
}

func workerPool(numWorkers int, jobs &lt;-chan Job) &lt;-chan Result {
    results := make(chan Result, len(jobs))
    var wg sync.WaitGroup
    
    for i := 0; i < numWorkers; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            for job := range jobs {
                // Process job
                output := fmt.Sprintf("Worker %d processed: %s", workerID, job.Data)
                results &lt;- Result{JobID: job.ID, Output: output}
            }
        }(i)
    }
    
    go func() {
        wg.Wait()
        close(results)
    }()
    
    return results
}

func main() {
    jobs := make(chan Job, 20)
    
    // Enqueue jobs
    for i := 1; i <= 20; i++ {
        jobs &lt;- Job{ID: i, Data: fmt.Sprintf("task-%d", i)}
    }
    close(jobs)
    
    // Start worker pool (5 workers)
    results := workerPool(5, jobs)
    
    for result := range results {
        fmt.Printf("Job %d: %s\n", result.JobID, result.Output)
    }
}
</code></pre>

<h3 id="5-4-done-channel"><strong>5.4.完成頻道（取消）</strong></h3>

<pre><code class="language-go">func generator(done &lt;-chan struct{}) &lt;-chan int {
    ch := make(chan int)
    go func() {
        defer close(ch)
        i := 0
        for {
            select {
            case &lt;-done:
                return // Cleanup khi cancelled
            case ch &lt;- i:
                i++
            }
        }
    }()
    return ch
}

func main() {
    done := make(chan struct{})
    nums := generator(done)
    
    // Lấy 5 số rồi cancel
    for i := 0; i < 5; i++ {
        fmt.Println(&lt;-nums)
    }
    
    close(done) // Signal all goroutines to stop
}
</code></pre>

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><strong>Goroutine</strong>：輕量級線程（~2KB），使用以下命令創建 <code>走吧。去</code> 關鍵字。關鍵字</li>
<li><strong>等待組</strong>：等待群組 goroutine 完成</li>
<li><strong>頻道</strong>：goroutine之間的通訊（無緩衝=同步，緩衝=非同步）</li>
<li><strong>選擇</strong>：多通道復用</li>
<li><strong>圖案</strong>：扇出/扇入、管道、工作池、完成通道</li>
<li><strong>規則</strong>：發送者關閉通道，使用context/done進行取消，避免goroutine洩漏</li>
</ul>

<p>下一篇： <strong>上下文、同步和並發模式</strong> — 上下文套件、互斥體和進階模式。</p>
