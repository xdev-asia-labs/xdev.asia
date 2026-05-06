---
id: 019d8b40-b103-7001-b003-golang0000103
title: 'レッスン 3: 関数、インターフェイス、エラー処理'
slug: bai-3-functions-interfaces-va-error-handling
description: >-
  関数、複数の戻り値、可変長関数。インターフェース、埋め込み、継承よりも合成。エラー処理パターン、カスタム
  エラー、errors.Is/As、パニック/リカバリ。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: Go の基礎'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6210" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6210)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="46" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="230" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="62" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="154" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 関数、インターフェイス、エラー</tspan>
      <tspan x="60" dy="42">取り扱い</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Go の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-functions"><strong>1. Goの関数</strong></h2>

<p>関数は Go の基本的な構成要素です。 Go 関数には他の言語と比べて多くのユニークな機能があります。</p>

<h3 id="1-1-basic-functions"><strong>1.1.基本機能</strong></h3>

<pre><code class="language-go">package main

import "fmt"

// Function cơ bản
func greet(name string) string {
    return "Hello, " + name + "!"
}

// Multiple parameters cùng type
func add(a, b int) int {
    return a + b
}

// Multiple return values - đặc trưng Go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func swap(a, b string) (first, second string) {
    first = b
    second = a
    return // naked return - trả named values
}

func main() {
    fmt.Println(greet("Go"))       // "Hello, Go!"
    fmt.Println(add(3, 5))         // 8
    
    result, err := divide(10, 3)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(result)            // 3.333...
    
    a, b := swap("hello", "world")
    fmt.Println(a, b)              // "world" "hello"
}
</code></pre>

<h3 id="1-2-variadic-functions"><strong>1.2.可変個引数関数</strong></h3>

<pre><code class="language-go">// Variadic function - nhận số lượng tham số bất kỳ
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

// Mix fixed và variadic params
func printf(format string, args ...interface{}) {
    fmt.Printf(format, args...)
}

func main() {
    fmt.Println(sum(1, 2, 3))         // 6
    fmt.Println(sum(1, 2, 3, 4, 5))   // 15
    
    // Spread slice
    nums := []int{10, 20, 30}
    fmt.Println(sum(nums...))          // 60
}
</code></pre>

<h3 id="1-3-first-class-functions"><strong>1.3.最高級の関数</strong></h3>

<pre><code class="language-go">// Function as variable
var multiply func(int, int) int = func(a, b int) int {
    return a * b
}

// Function as parameter (callback)
func apply(a, b int, op func(int, int) int) int {
    return op(a, b)
}

// Function as return value (closure)
func makeCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

// Function type alias
type MathFunc func(int, int) int

func calculate(a, b int, fn MathFunc) int {
    return fn(a, b)
}

func main() {
    // Anonymous function (lambda)
    double := func(x int) int {
        return x * 2
    }
    fmt.Println(double(5)) // 10
    
    // Callback
    fmt.Println(apply(3, 4, multiply))  // 12
    fmt.Println(apply(10, 3, func(a, b int) int {
        return a - b
    }))                                  // 7
    
    // Closure
    counter := makeCounter()
    fmt.Println(counter()) // 1
    fmt.Println(counter()) // 2
    fmt.Println(counter()) // 3
    
    // IIFE (Immediately Invoked Function Expression)
    result := func(x int) int {
        return x * x
    }(5)
    fmt.Println(result) // 25
}
</code></pre>

<h3 id="1-4-defer"><strong>1.4.延期</strong></h3>

<pre><code class="language-go">import "os"

// defer: thực thi khi function return (LIFO order)
func readFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close() // Đảm bảo file luôn được close
    
    // ... đọc file
    return nil
}

func main() {
    // Defer chạy theo LIFO (Last In, First Out)
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    // Output: 3, 2, 1
    
    // Use case phổ biến: cleanup resources
    // defer mutex.Unlock()
    // defer rows.Close()
    // defer tx.Rollback()
    // defer span.End()
}
</code></pre>

<h2 id="2-interfaces"><strong>2. インターフェース</strong></h2>

<p>Go のインターフェイスは次のとおりです。 <strong>暗黙的.暗黙的</strong> — type はメソッドを実装するだけでよく、「implements」を宣言する必要はありません。これは Java/C# と比較すると大きな違いです。</p>

<h3 id="2-1-basic-interface"><strong>2.1.インターフェースの定義</strong></h3>

<pre><code class="language-go">// Interface definition
type Shape interface {
    Area() float64
    Perimeter() float64
}

// Circle implements Shape implicitly
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

// Rectangle implements Shape implicitly
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Hàm nhận interface
func printShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\n", s.Area(), s.Perimeter())
}

func main() {
    c := Circle{Radius: 5}
    r := Rectangle{Width: 10, Height: 3}
    
    printShapeInfo(c)  // Area: 78.54, Perimeter: 31.42
    printShapeInfo(r)  // Area: 30.00, Perimeter: 26.00
    
    // Slice of interfaces
    shapes := []Shape{c, r}
    for _, s := range shapes {
        printShapeInfo(s)
    }
}
</code></pre>

<h3 id="2-2-common-interfaces"><strong>2.2. Go の共通インターフェース</strong></h3>

<pre><code class="language-go">// io.Reader - interface quan trọng nhất
type Reader interface {
    Read(p []byte) (n int, err error)
}

// io.Writer
type Writer interface {
    Write(p []byte) (n int, err error)
}

// fmt.Stringer (tương đương toString() trong Java)
type Stringer interface {
    String() string
}

// error interface
type error interface {
    Error() string
}

// sort.Interface
type Interface interface {
    Len() int
    Less(i, j int) bool
    Swap(i, j int)
}

// Implement Stringer
type User struct {
    Name string
    Age  int
}

func (u User) String() string {
    return fmt.Sprintf("%s (age %d)", u.Name, u.Age)
}

func main() {
    user := User{Name: "Alice", Age: 30}
    fmt.Println(user) // "Alice (age 30)" - tự gọi String()
}
</code></pre>

<h3 id="2-3-interface-composition"><strong>2.3.インターフェース構成（エンベディング）</strong></h3>

<pre><code class="language-go">// Compose interfaces từ các interfaces nhỏ
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type Closer interface {
    Close() error
}

// Composed interface
type ReadWriter interface {
    Reader
    Writer
}

type ReadWriteCloser interface {
    Reader
    Writer
    Closer
}

// Best practice: Keep interfaces SMALL
// Go proverb: "The bigger the interface, the weaker the abstraction"
// Thường chỉ 1-3 methods
</code></pre>

<h3 id="2-4-empty-interface"><strong>2.4.空のインターフェイスと任意の</strong></h3>

<pre><code class="language-go">// interface{} (Go &lt; 1.18) hoặc any (Go 1.18+) chấp nhận mọi type
func printAnything(v any) {
    fmt.Printf("Type: %T, Value: %v\n", v, v)
}

func main() {
    printAnything(42)           // Type: int, Value: 42
    printAnything("hello")      // Type: string, Value: hello
    printAnything(true)         // Type: bool, Value: true
    printAnything([]int{1, 2})  // Type: []int, Value: [1 2]
    
    // map[string]any - thường dùng cho JSON
    data := map[string]any{
        "name":  "Alice",
        "age":   30,
        "roles": []string{"admin", "user"},
    }
    fmt.Println(data)
}
</code></pre>

<h2 id="3-error-handling"><strong>3. エラー処理</strong></h2>

<p>Go には例外 (トライキャッチ) はありません。使用されるエラー処理 <strong>明示的な戻り値</strong> — これは意図的な設計上の選択です。</p>

<h3 id="3-1-basic-error"><strong>3.1.基本的なエラー処理</strong></h3>

<pre><code class="language-go">import (
    "errors"
    "fmt"
    "os"
    "strconv"
)

// Hàm trả về (result, error)
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// fmt.Errorf với format string
func findUser(id int) (*User, error) {
    if id <= 0 {
        return nil, fmt.Errorf("invalid user ID: %d", id)
    }
    // ... lookup user
    return &User{Name: "Alice"}, nil
}

func main() {
    // Pattern: check error immediately
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(result)
    
    // Chaining error checks
    f, err := os.Open("config.json")
    if err != nil {
        fmt.Println("Cannot open file:", err)
        return
    }
    defer f.Close()
    
    // strconv error example
    num, err := strconv.Atoi("abc")
    if err != nil {
        fmt.Println("Parse error:", err)
    }
    fmt.Println(num)
}
</code></pre>

<h3 id="3-2-custom-errors"><strong>3.2.カスタムエラー</strong></h3>

<pre><code class="language-go">// Custom error type
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation failed on %s: %s", e.Field, e.Message)
}

// Sentinel errors (pre-defined errors)
var (
    ErrNotFound     = errors.New("not found")
    ErrUnauthorized = errors.New("unauthorized")
    ErrForbidden    = errors.New("forbidden")
)

func getUser(id int) (*User, error) {
    if id <= 0 {
        return nil, &ValidationError{
            Field:   "id",
            Message: "must be positive",
        }
    }
    // ... user not in DB
    return nil, fmt.Errorf("user %d: %w", id, ErrNotFound)
}
</code></pre>

<h3 id="3-3-error-wrapping"><strong>3.3.エラー ラッピング (Go 1.13 以降)</strong></h3>

<pre><code class="language-go">import "errors"

func readConfig() error {
    f, err := os.Open("config.yaml")
    if err != nil {
        // %w wraps the original error
        return fmt.Errorf("readConfig: %w", err)
    }
    defer f.Close()
    
    // ... parse
    return nil
}

func initApp() error {
    if err := readConfig(); err != nil {
        return fmt.Errorf("initApp: %w", err)
    }
    return nil
}

func main() {
    err := initApp()
    if err != nil {
        fmt.Println(err)
        // "initApp: readConfig: open config.yaml: no such file or directory"
        
        // errors.Is - check nếu error chain chứa target error
        if errors.Is(err, os.ErrNotExist) {
            fmt.Println("File does not exist")
        }
        
        // errors.As - extract specific error type từ chain
        var pathErr *os.PathError
        if errors.As(err, &pathErr) {
            fmt.Println("Path:", pathErr.Path)
            fmt.Println("Op:", pathErr.Op)
        }
    }
}
</code></pre>

<h3 id="3-4-panic-recover"><strong>3.4.パニック＆リカバリー</strong></h3>

<pre><code class="language-go">// panic: dùng cho unrecoverable errors (thay vì throw)
// recover: bắt panic (thay vì catch)

func riskyOperation() {
    // panic dừng execution, unwind stack
    panic("something went terribly wrong")
}

// recover chỉ hoạt động trong defer
func safeOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()
    
    riskyOperation()
    fmt.Println("This won't print")
}

func main() {
    safeOperation()
    fmt.Println("Program continues normally")
}

// ⚠️ Quy tắc:
// - KHÔNG dùng panic cho business logic errors
// - Dùng panic khi: programmer error, unrecoverable state
// - recover thường dùng trong middleware (HTTP handler recovery)
</code></pre>

<h3 id="3-5-error-patterns"><strong>3.5.エラー処理パターンは一般的に使用されます</strong></h3>

<pre><code class="language-go">// Pattern 1: Early return
func processOrder(order *Order) error {
    if order == nil {
        return errors.New("order is nil")
    }
    if order.Total <= 0 {
        return fmt.Errorf("invalid total: %.2f", order.Total)
    }
    if err := validateItems(order.Items); err != nil {
        return fmt.Errorf("validate items: %w", err)
    }
    if err := chargePayment(order); err != nil {
        return fmt.Errorf("charge payment: %w", err)
    }
    return nil
}

// Pattern 2: Error type assertion for flow control
func handleError(err error) {
    var validErr *ValidationError
    if errors.As(err, &validErr) {
        // 400 Bad Request
        fmt.Printf("Validation: %s - %s\n", validErr.Field, validErr.Message)
        return
    }
    if errors.Is(err, ErrNotFound) {
        // 404 Not Found
        fmt.Println("Resource not found")
        return
    }
    if errors.Is(err, ErrUnauthorized) {
        // 401 Unauthorized
        fmt.Println("Please login")
        return
    }
    // 500 Internal Server Error
    fmt.Println("Internal error:", err)
}

// Pattern 3: errors.Join (Go 1.20+) - multiple errors
func validateUser(u *User) error {
    var errs []error
    if u.Name == "" {
        errs = append(errs, errors.New("name is required"))
    }
    if u.Email == "" {
        errs = append(errs, errors.New("email is required"))
    }
    if u.Age < 0 {
        errs = append(errs, errors.New("age must be non-negative"))
    }
    return errors.Join(errs...)
}
</code></pre>

<h2 id="4-struct-embedding"><strong>4. 構造の埋め込み（合成）</strong></h2>

<pre><code class="language-go">// Go dùng composition thay vì inheritance
type BaseModel struct {
    ID        int
    CreatedAt time.Time
    UpdatedAt time.Time
}

type User struct {
    BaseModel          // Embedding - "kế thừa" tất cả fields và methods
    Name      string
    Email     string
}

type Post struct {
    BaseModel
    Title   string
    Content string
    Author  User
}

func main() {
    user := User{
        BaseModel: BaseModel{
            ID:        1,
            CreatedAt: time.Now(),
        },
        Name:  "Alice",
        Email: "alice@example.com",
    }
    
    // Access embedded fields trực tiếp
    fmt.Println(user.ID)        // 1 (từ BaseModel)
    fmt.Println(user.Name)      // "Alice"
    fmt.Println(user.CreatedAt) // (từ BaseModel)
}
</code></pre>

<h2 id="5-tong-ket"><strong>5. まとめ</strong></h2>

<ul>
<li><strong>機能</strong>: 複数の戻り値、ファーストクラス、クロージャ、遅延</li>
<li><strong>インターフェース</strong>: 暗黙的な実装、小さなインターフェイス、合成</li>
<li><strong>エラー処理</strong>: 明示的なエラー、ラッピング (%w)、errors.Is/As、カスタム エラー</li>
<li><strong>構成</strong>: 継承の代わりに構造体を埋め込む</li>
<li><strong>パニック/回復</strong>: 回復不可能なエラーのみが対象であり、ビジネス ロジックは対象外です</li>
</ul>

<p>次の記事: <strong>ジェネリック、パッケージ、モジュール</strong> — Go での型パラメーター システムとコード管理。</p>
