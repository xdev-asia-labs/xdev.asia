---
id: 019d8b40-b102-7001-b003-golang0000102
title: 'Bài 2: Variables, Types & Control Flow'
slug: bai-2-variables-types-va-control-flow
description: >-
  Primitive types, composite types (array, slice, map, struct). Pointers,
  constants, iota. If/else, switch, for loops, range. Type assertions
  và type switches.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Go Fundamentals"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3266" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3266)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="90" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.650635094611,167.5 1001.650635094611,192.5 980,205 958.349364905389,192.5 958.349364905389,167.5 980,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Variables, Types &amp; Control Flow</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Go Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-variables"><strong>1. Khai báo biến trong Go</strong></h2>

<p>Go có nhiều cách khai báo biến, mỗi cách phù hợp với context khác nhau:</p>

<h3 id="1-1-var-keyword"><strong>1.1. Sử dụng <code>var</code></strong></h3>

<pre><code class="language-go">package main

import "fmt"

func main() {
    // Khai báo với type
    var name string = "Gopher"
    var age int = 15
    
    // Type inference (Go tự suy luận type)
    var language = "Go"      // string
    var version = 1.23       // float64
    
    // Khai báo không gán giá trị (zero value)
    var count int            // 0
    var active bool          // false
    var message string       // ""
    var pointer *int         // nil
    
    // Khai báo nhiều biến
    var (
        host   string = "localhost"
        port   int    = 8080
        debug  bool   = true
    )
    
    fmt.Println(name, age, language, version)
    fmt.Println(count, active, message, pointer)
    fmt.Println(host, port, debug)
}
</code></pre>

<h3 id="1-2-short-declaration"><strong>1.2. Short declaration <code>:=</code></strong></h3>

<pre><code class="language-go">func main() {
    // Short declaration - chỉ dùng TRONG function
    name := "Gopher"           // var name string = "Gopher"
    age := 15                  // var age int = 15
    pi := 3.14159              // var pi float64 = 3.14159
    isActive := true           // var isActive bool = true
    
    // Khai báo nhiều biến
    x, y := 10, 20
    host, port := "localhost", 8080
    
    // Swap values
    x, y = y, x
    
    fmt.Println(name, age, pi, isActive, x, y, host, port)
}
</code></pre>

<p><strong>Quy tắc sử dụng</strong>: Dùng <code>:=</code> trong function (ngắn gọn). Dùng <code>var</code> ở package level hoặc khi cần zero value.</p>

<h3 id="1-3-constants"><strong>1.3. Constants và <code>iota</code></strong></h3>

<pre><code class="language-go">// Constants - giá trị không đổi
const Pi = 3.14159
const AppName = "MyApp"

// Group constants
const (
    MaxRetries = 3
    Timeout    = 30 // seconds
    Version    = "1.0.0"
)

// iota - auto-increment cho enums
type Status int

const (
    StatusPending  Status = iota // 0
    StatusActive                 // 1
    StatusInactive               // 2
    StatusDeleted                // 3
)

// iota nâng cao
type Permission int

const (
    Read    Permission = 1 &lt;&lt; iota // 1  (001)
    Write                           // 2  (010)
    Execute                         // 4  (100)
)

// Kết hợp permissions bằng bitwise OR
const ReadWrite = Read | Write      // 3  (011)
const All = Read | Write | Execute  // 7  (111)

func main() {
    fmt.Println(StatusPending)     // 0
    fmt.Println(StatusActive)      // 1
    fmt.Println(Read | Write)      // 3
    fmt.Println(All)               // 7
}
</code></pre>

<h2 id="2-primitive-types"><strong>2. Primitive Types</strong></h2>

<h3 id="2-1-numeric"><strong>2.1. Numeric Types</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Size</th><th>Range</th><th>Zero Value</th></tr>
</thead>
<tbody>
<tr><td><code>int8</code></td><td>1 byte</td><td>-128 → 127</td><td>0</td></tr>
<tr><td><code>int16</code></td><td>2 bytes</td><td>-32768 → 32767</td><td>0</td></tr>
<tr><td><code>int32</code> / <code>rune</code></td><td>4 bytes</td><td>-2^31 → 2^31-1</td><td>0</td></tr>
<tr><td><code>int64</code></td><td>8 bytes</td><td>-2^63 → 2^63-1</td><td>0</td></tr>
<tr><td><code>int</code></td><td>4 or 8 bytes</td><td>Platform dependent</td><td>0</td></tr>
<tr><td><code>uint8</code> / <code>byte</code></td><td>1 byte</td><td>0 → 255</td><td>0</td></tr>
<tr><td><code>uint16</code></td><td>2 bytes</td><td>0 → 65535</td><td>0</td></tr>
<tr><td><code>uint32</code></td><td>4 bytes</td><td>0 → 2^32-1</td><td>0</td></tr>
<tr><td><code>uint64</code></td><td>8 bytes</td><td>0 → 2^64-1</td><td>0</td></tr>
<tr><td><code>float32</code></td><td>4 bytes</td><td>IEEE-754</td><td>0.0</td></tr>
<tr><td><code>float64</code></td><td>8 bytes</td><td>IEEE-754</td><td>0.0</td></tr>
<tr><td><code>complex64</code></td><td>8 bytes</td><td>float32 + float32i</td><td>(0+0i)</td></tr>
<tr><td><code>complex128</code></td><td>16 bytes</td><td>float64 + float64i</td><td>(0+0i)</td></tr>
</tbody>
</table>

<pre><code class="language-go">func main() {
    // Thường dùng: int, float64
    var count int = 42
    var price float64 = 19.99
    
    // byte = uint8, thường dùng cho raw data
    var b byte = 'A'   // 65
    
    // rune = int32, đại diện Unicode code point
    var r rune = '🚀'  // 128640
    
    // Type conversion - phải explicit
    var i int = 42
    var f float64 = float64(i)    // int → float64
    var u uint = uint(f)          // float64 → uint
    
    fmt.Println(count, price, b, r, f, u)
}
</code></pre>

<h3 id="2-2-string"><strong>2.2. String</strong></h3>

<pre><code class="language-go">import (
    "fmt"
    "strings"
)

func main() {
    // String là immutable sequence of bytes (UTF-8)
    greeting := "Xin chào Go! 🚀"
    
    // String operations
    fmt.Println(len(greeting))              // byte length ≠ rune count
    fmt.Println([]rune(greeting))           // convert to rune slice
    fmt.Println(len([]rune(greeting)))      // rune (character) count
    
    // String concatenation
    first := "Hello"
    last := "World"
    full := first + " " + last             // simple concatenation
    
    // fmt.Sprintf - formatted string
    msg := fmt.Sprintf("Name: %s, Age: %d", "Go", 15)
    
    // strings package
    fmt.Println(strings.ToUpper("hello"))          // "HELLO"
    fmt.Println(strings.Contains("hello", "ell"))  // true
    fmt.Println(strings.Split("a,b,c", ","))       // ["a", "b", "c"]
    fmt.Println(strings.Join([]string{"a", "b"}, "-")) // "a-b"
    fmt.Println(strings.TrimSpace("  hello  "))    // "hello"
    fmt.Println(strings.ReplaceAll("aabb", "a", "x")) // "xxbb"
    
    // Raw string literal (backticks)
    query := `SELECT * FROM users
              WHERE active = true
              ORDER BY created_at DESC`
    
    fmt.Println(full, msg, query)
}
</code></pre>

<h3 id="2-3-bool"><strong>2.3. Boolean</strong></h3>

<pre><code class="language-go">func main() {
    var isActive bool = true
    var isDeleted bool       // zero value: false
    
    // Boolean operators
    result := isActive && !isDeleted  // AND, NOT
    either := isActive || isDeleted   // OR
    
    fmt.Println(result, either)
}
</code></pre>

<h2 id="3-composite-types"><strong>3. Composite Types</strong></h2>

<h3 id="3-1-array"><strong>3.1. Array (Fixed size)</strong></h3>

<pre><code class="language-go">func main() {
    // Array - fixed size, ít dùng trực tiếp
    var nums [5]int                       // [0, 0, 0, 0, 0]
    nums[0] = 10
    nums[4] = 50
    
    colors := [3]string{"red", "green", "blue"}
    
    // Compiler đếm size
    primes := [...]int{2, 3, 5, 7, 11}  // size = 5
    
    fmt.Println(nums, colors, primes)
    fmt.Println(len(primes))              // 5
}
</code></pre>

<h3 id="3-2-slice"><strong>3.2. Slice (Dynamic array) - Quan trọng nhất!</strong></h3>

<pre><code class="language-go">func main() {
    // Slice - dynamic, dùng nhiều nhất
    nums := []int{1, 2, 3, 4, 5}
    
    // make(type, length, capacity)
    scores := make([]int, 0, 10)  // len=0, cap=10
    
    // Append
    scores = append(scores, 95, 87, 92)
    fmt.Println(scores)     // [95, 87, 92]
    fmt.Println(len(scores)) // 3
    fmt.Println(cap(scores)) // 10
    
    // Slicing (sub-slice)
    first3 := nums[:3]    // [1, 2, 3]
    last3 := nums[2:]     // [3, 4, 5]
    middle := nums[1:4]   // [2, 3, 4]
    
    // ⚠️ Slices share underlying array!
    middle[0] = 99
    fmt.Println(nums)      // [1, 99, 3, 4, 5] - nums cũng bị thay đổi!
    
    // Copy để tránh shared reference
    copied := make([]int, len(nums))
    copy(copied, nums)
    
    // Delete element at index 2
    nums = append(nums[:2], nums[3:]...)
    
    // slices package (Go 1.21+)
    // import "slices"
    // slices.Sort(nums)
    // slices.Contains(nums, 3)
    // slices.Index(nums, 3)
    
    fmt.Println(first3, last3, copied)
}
</code></pre>

<h3 id="3-3-map"><strong>3.3. Map (Key-Value)</strong></h3>

<pre><code class="language-go">func main() {
    // Map literal
    ages := map[string]int{
        "Alice": 30,
        "Bob":   25,
        "Carol": 28,
    }
    
    // make
    scores := make(map[string]float64)
    scores["math"] = 9.5
    scores["english"] = 8.0
    
    // Access
    age := ages["Alice"]         // 30
    
    // Check existence (comma-ok idiom)
    val, ok := ages["Dave"]
    if !ok {
        fmt.Println("Dave not found") // val = 0 (zero value)
    }
    
    // Delete
    delete(ages, "Bob")
    
    // Iterate
    for key, value := range ages {
        fmt.Printf("%s: %d\n", key, value)
    }
    
    // Map size
    fmt.Println(len(ages))
    
    fmt.Println(age, val)
}
</code></pre>

<h3 id="3-4-struct"><strong>3.4. Struct</strong></h3>

<pre><code class="language-go">// Struct definition
type User struct {
    ID        int
    Name      string
    Email     string
    Age       int
    IsActive  bool
    CreatedAt time.Time
}

// Method trên struct
func (u User) FullInfo() string {
    return fmt.Sprintf("%s (%s)", u.Name, u.Email)
}

// Pointer receiver - có thể modify struct
func (u *User) Deactivate() {
    u.IsActive = false
}

func main() {
    // Tạo struct
    user1 := User{
        ID:       1,
        Name:     "Alice",
        Email:    "alice@example.com",
        Age:      30,
        IsActive: true,
    }
    
    // Partial initialization
    user2 := User{Name: "Bob", Email: "bob@example.com"}
    // Các field khác = zero value
    
    // Access fields
    fmt.Println(user1.Name)        // "Alice"
    fmt.Println(user1.FullInfo())  // "Alice (alice@example.com)"
    
    // Pointer to struct
    user1.Deactivate()
    fmt.Println(user1.IsActive)    // false
    
    // Anonymous struct (dùng cho test, temporary)
    point := struct {
        X, Y int
    }{X: 10, Y: 20}
    
    fmt.Println(user2, point)
}
</code></pre>

<h2 id="4-pointers"><strong>4. Pointers</strong></h2>

<pre><code class="language-go">func main() {
    // Pointer lưu địa chỉ bộ nhớ
    x := 42
    p := &x         // p là *int, trỏ đến x
    
    fmt.Println(x)   // 42
    fmt.Println(p)   // 0xc0000b4008 (địa chỉ)
    fmt.Println(*p)  // 42 (dereference - lấy giá trị)
    
    *p = 100         // thay đổi giá trị qua pointer
    fmt.Println(x)   // 100
    
    // new() tạo pointer đến zero value
    n := new(int)    // *int, giá trị = 0
    *n = 42
    
    // Nil pointer
    var ptr *string  // nil
    if ptr == nil {
        fmt.Println("ptr is nil")
    }
}

// Pass by value vs pass by pointer
func double(x int) {
    x *= 2  // Không ảnh hưởng bên ngoài
}

func doublePtr(x *int) {
    *x *= 2  // Thay đổi giá trị gốc
}

// Go KHÔNG CÓ pointer arithmetic (an toàn hơn C/C++)
</code></pre>

<h2 id="5-zero-values"><strong>5. Zero Values</strong></h2>

<p>Mọi biến trong Go đều được khởi tạo với zero value nếu không gán giá trị:</p>

<table>
<thead>
<tr><th>Type</th><th>Zero Value</th></tr>
</thead>
<tbody>
<tr><td><code>int, float64, ...</code></td><td><code>0</code></td></tr>
<tr><td><code>bool</code></td><td><code>false</code></td></tr>
<tr><td><code>string</code></td><td><code>""</code> (empty string)</td></tr>
<tr><td><code>pointer, slice, map, func, interface, channel</code></td><td><code>nil</code></td></tr>
<tr><td><code>array</code></td><td>Array of zero values</td></tr>
<tr><td><code>struct</code></td><td>Struct with zero-value fields</td></tr>
</tbody>
</table>

<pre><code class="language-go">func main() {
    var i int       // 0
    var f float64   // 0
    var b bool      // false
    var s string    // ""
    var p *int      // nil
    var sl []int    // nil (nhưng len=0, append vẫn hoạt động)
    var m map[string]int // nil (⚠️ KHÔNG thể write, phải make trước)
    
    // ⚠️ Nil map panic khi write
    // m["key"] = 1  // panic: assignment to entry in nil map
    m = make(map[string]int)
    m["key"] = 1  // OK
    
    fmt.Println(i, f, b, s, p, sl, m)
}
</code></pre>

<h2 id="6-control-flow"><strong>6. Control Flow</strong></h2>

<h3 id="6-1-if-else"><strong>6.1. If / Else</strong></h3>

<pre><code class="language-go">func main() {
    age := 20
    
    // Standard if-else
    if age >= 18 {
        fmt.Println("Adult")
    } else if age >= 13 {
        fmt.Println("Teenager")
    } else {
        fmt.Println("Child")
    }
    
    // If với initialization (Go idiom phổ biến)
    if err := doSomething(); err != nil {
        fmt.Println("Error:", err)
        return
    }
    // err không tồn tại ở ngoài if scope
    
    // Comma-ok pattern
    if val, ok := myMap["key"]; ok {
        fmt.Println("Found:", val)
    }
}
</code></pre>

<h3 id="6-2-switch"><strong>6.2. Switch</strong></h3>

<pre><code class="language-go">func main() {
    day := "Monday"
    
    // Switch - không cần break (auto break)
    switch day {
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
        fmt.Println("Weekday")
    case "Saturday", "Sunday":
        fmt.Println("Weekend")
    default:
        fmt.Println("Invalid day")
    }
    
    // Switch không có expression (thay if-else chain)
    score := 85
    switch {
    case score >= 90:
        fmt.Println("A")
    case score >= 80:
        fmt.Println("B")
    case score >= 70:
        fmt.Println("C")
    default:
        fmt.Println("F")
    }
    
    // Type switch
    var i interface{} = "hello"
    switch v := i.(type) {
    case int:
        fmt.Printf("Integer: %d\n", v)
    case string:
        fmt.Printf("String: %s\n", v)
    case bool:
        fmt.Printf("Boolean: %t\n", v)
    default:
        fmt.Printf("Unknown type: %T\n", v)
    }
    
    // fallthrough (hiếm dùng)
    switch 3 {
    case 3:
        fmt.Println("3")
        fallthrough  // tiếp tục case tiếp theo
    case 4:
        fmt.Println("4")
    }
    // Output: 3, 4
}
</code></pre>

<h3 id="6-3-for"><strong>6.3. For Loops</strong></h3>

<pre><code class="language-go">func main() {
    // Go CHỈ CÓ for loop (không có while, do-while)
    
    // Classic for
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
    
    // While-style  
    count := 0
    for count < 10 {
        count++
    }
    
    // Infinite loop
    // for {
    //     // break khi cần
    // }
    
    // Range over slice
    fruits := []string{"apple", "banana", "cherry"}
    for index, fruit := range fruits {
        fmt.Printf("%d: %s\n", index, fruit)
    }
    
    // Chỉ lấy value
    for _, fruit := range fruits {
        fmt.Println(fruit)
    }
    
    // Chỉ lấy index
    for i := range fruits {
        fmt.Println(i)
    }
    
    // Range over map
    ages := map[string]int{"Alice": 30, "Bob": 25}
    for name, age := range ages {
        fmt.Printf("%s is %d\n", name, age)
    }
    
    // Range over string (iterates runes)
    for i, ch := range "Hello 🌍" {
        fmt.Printf("%d: %c (%d)\n", i, ch, ch)
    }
    
    // Range over integer (Go 1.22+)
    for i := range 5 {
        fmt.Println(i) // 0, 1, 2, 3, 4
    }
    
    // break, continue, labels
    for i := 0; i < 10; i++ {
        if i == 3 { continue }  // skip 3
        if i == 7 { break }     // stop at 7
        fmt.Println(i)
    }
}
</code></pre>

<h2 id="7-type-system"><strong>7. Type Assertions & Conversions</strong></h2>

<pre><code class="language-go">func main() {
    // Type assertion (cho interface)
    var i interface{} = "hello"
    
    // Dangerous (panics nếu sai type)
    s := i.(string)
    fmt.Println(s) // "hello"
    
    // Safe (comma-ok pattern)
    s, ok := i.(string)
    if ok {
        fmt.Println("String:", s)
    }
    
    n, ok := i.(int)
    if !ok {
        fmt.Println("Not an int") // n = 0
    }
    
    // Type conversion (explicit)
    var x int = 42
    var f float64 = float64(x)
    var u uint = uint(f)
    
    // String conversions
    import "strconv"
    
    numStr := strconv.Itoa(42)           // int → string: "42"
    num, err := strconv.Atoi("42")       // string → int: 42
    flt, err := strconv.ParseFloat("3.14", 64) // string → float64
    boolVal, err := strconv.ParseBool("true")  // string → bool
    
    fmt.Println(f, u, numStr, num, flt, boolVal, err)
}
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<p>Go có hệ thống type đơn giản nhưng đầy đủ. Những điểm quan trọng cần nhớ:</p>

<ul>
<li><strong>Dùng <code>:=</code></strong> cho local variables, <code>var</code> cho package level hoặc zero value</li>
<li><strong>Slice</strong> dùng nhiều hơn Array, luôn dùng <code>append</code> để thêm phần tử</li>
<li><strong>Map</strong> phải <code>make</code> trước khi write (nil map → panic)</li>
<li><strong>Pointer</strong> dùng khi cần modify value hoặc tránh copy lớn</li>
<li><strong>Zero values</strong> là đặc trưng quan trọng, giúp code an toàn hơn</li>
<li><strong>For</strong> là loop duy nhất, sử dụng <code>range</code> để iterate</li>
<li><strong>Type conversion</strong> luôn explicit, không có implicit conversion</li>
</ul>

<p>Bài tiếp theo: <strong>Functions, Interfaces & Error Handling</strong> — ba trụ cột của Go programming.</p>
