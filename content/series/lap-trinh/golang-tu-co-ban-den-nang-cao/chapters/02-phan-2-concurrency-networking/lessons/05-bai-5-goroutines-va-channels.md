---
id: 019d8b40-b201-7001-b003-golang0000201
title: 'Bài 5: Goroutines & Channels'
slug: bai-5-goroutines-va-channels
description: >-
  Goroutines, WaitGroup, buffered/unbuffered channels. Select statement,
  channel directions, fan-in/fan-out patterns. Concurrency vs parallelism.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Concurrency & Networking"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-concurrency-vs-parallelism"><strong>1. Concurrency vs Parallelism</strong></h2>

<p>Trước khi bắt đầu, cần phân biệt 2 khái niệm thường bị nhầm lẫn:</p>

<ul>
<li><strong>Concurrency</strong>: Xử lý nhiều tasks cùng lúc bằng cách <em>luân phiên</em> (1 CPU core chạy xen kẽ). Giống 1 người nấu ăn chuẩn bị nhiều món.</li>
<li><strong>Parallelism</strong>: Thực sự <em>chạy đồng thời</em> trên nhiều CPU cores. Giống nhiều người nấu ăn mỗi người 1 món.</li>
</ul>

<p>Go được thiết kế cho <strong>concurrency</strong> — giúp viết chương trình xử lý nhiều tasks hiệu quả. Go runtime tự động schedule goroutines lên OS threads, tận dụng parallelism khi có nhiều CPU cores.</p>

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

<h2 id="2-goroutines"><strong>2. Goroutines</strong></h2>

<p>Goroutine là lightweight thread được quản lý bởi Go runtime. Khởi tạo chỉ với ~2KB stack (so với OS thread ~1-8MB), có thể tạo hàng triệu goroutines.</p>

<h3 id="2-1-basic-goroutine"><strong>2.1. Tạo Goroutine</strong></h3>

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

<h3 id="2-2-waitgroup"><strong>2.2. sync.WaitGroup</strong></h3>

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

<h3 id="2-3-goroutine-leaks"><strong>2.3. Goroutine Leaks</strong></h3>

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

<h2 id="3-channels"><strong>3. Channels</strong></h2>

<p>Channels là cơ chế communication giữa goroutines. Go proverb: <em>"Don't communicate by sharing memory, share memory by communicating."</em></p>

<h3 id="3-1-unbuffered"><strong>3.1. Unbuffered Channel</strong></h3>

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

<h3 id="3-2-buffered"><strong>3.2. Buffered Channel</strong></h3>

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

<h3 id="3-3-channel-directions"><strong>3.3. Channel Directions</strong></h3>

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

<h3 id="3-4-close-range"><strong>3.4. Close & Range</strong></h3>

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

<h2 id="4-select"><strong>4. Select Statement</strong></h2>

<p><code>select</code> cho phép chờ trên nhiều channel operations — giống switch nhưng cho channels.</p>

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

<h2 id="5-patterns"><strong>5. Concurrency Patterns</strong></h2>

<h3 id="5-1-fan-out-fan-in"><strong>5.1. Fan-Out / Fan-In</strong></h3>

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

<h3 id="5-2-pipeline"><strong>5.2. Pipeline Pattern</strong></h3>

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

<h3 id="5-3-worker-pool"><strong>5.3. Worker Pool</strong></h3>

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

<h3 id="5-4-done-channel"><strong>5.4. Done Channel (Cancellation)</strong></h3>

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

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><strong>Goroutines</strong>: Lightweight threads (~2KB), tạo với <code>go</code> keyword</li>
<li><strong>WaitGroup</strong>: Chờ group goroutines hoàn thành</li>
<li><strong>Channels</strong>: Communication between goroutines (unbuffered = sync, buffered = async)</li>
<li><strong>Select</strong>: Multiplexing trên nhiều channels</li>
<li><strong>Patterns</strong>: Fan-Out/Fan-In, Pipeline, Worker Pool, Done Channel</li>
<li><strong>Quy tắc</strong>: Sender close channel, dùng context/done cho cancellation, tránh goroutine leaks</li>
</ul>

<p>Bài tiếp theo: <strong>Context, Sync & Concurrency Patterns</strong> — context package, mutex, và các patterns nâng cao.</p>
