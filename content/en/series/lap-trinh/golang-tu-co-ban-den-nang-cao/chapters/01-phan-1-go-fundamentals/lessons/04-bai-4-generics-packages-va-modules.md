---
id: 019d8b40-b104-7001-b003-golang0000104
title: 'Lesson 4: Generics, Packages & Modules'
slug: bai-4-generics-packages-va-modules
description: >-
  Go Generics (type parameters, constraints). Package organization, visibility
  rules, init functions. Go modules, versioning, dependency management,
  workspace mode.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 1: Go Fundamentals'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: From Basics to Advanced'
  slug: golang-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5300" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5300)"/>

  <!-- Decorations -->
  <g>
    <circle cx="700" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Generics, Packages & Modules</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Go Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-generics"><strong>1. Generics in Go (Go 1.18+)</strong></h2>

<p>Generics allow writing functions and types that work with many different types while still maintaining type safety. Before Go 1.18, must use <code>interface{}</code> or code generation.</p>

<h3 id="1-1-generic-functions"><strong>1.1. Generic Functions</strong></h3>

<pre><code class="language-go">package main

import (
    "cmp"
    "fmt"
)

// Generic function với type parameter T
func Max[T cmp.Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}

// Multiple type parameters
func Map[T any, U any](slice []T, fn func(T) U) []U {
    result := make([]U, len(slice))
    for i, v := range slice {
        result[i] = fn(v)
    }
    return result
}

// Filter
func Filter[T any](slice []T, predicate func(T) bool) []T {
    var result []T
    for _, v := range slice {
        if predicate(v) {
            result = append(result, v)
        }
    }
    return result
}

// Reduce
func Reduce[T any, U any](slice []T, initial U, fn func(U, T) U) U {
    result := initial
    for _, v := range slice {
        result = fn(result, v)
    }
    return result
}

func main() {
    // Type inference - Go tự suy luận type
    fmt.Println(Max(3, 5))           // int: 5
    fmt.Println(Max(3.14, 2.71))     // float64: 3.14
    fmt.Println(Max("apple", "banana")) // string: "banana"
    
    // Explicit type
    fmt.Println(Max[int](10, 20))    // 20
    
    // Map: []int → []string
    nums := []int{1, 2, 3, 4, 5}
    strs := Map(nums, func(n int) string {
        return fmt.Sprintf("num_%d", n)
    })
    fmt.Println(strs) // [num_1, num_2, num_3, num_4, num_5]
    
    // Filter
    evens := Filter(nums, func(n int) bool {
        return n%2 == 0
    })
    fmt.Println(evens) // [2, 4]
    
    // Reduce
    sum := Reduce(nums, 0, func(acc, n int) int {
        return acc + n
    })
    fmt.Println(sum) // 15
}
</code></pre>

<h3 id="1-2-constraints"><strong>1.2. Type Constraints</strong></h3>

<pre><code class="language-go">import "golang.org/x/exp/constraints"

// Built-in constraints (Go 1.21+: cmp package)
// any          = interface{} (mọi type)
// comparable   = types hỗ trợ == và !=
// cmp.Ordered  = types hỗ trợ &lt;, &gt;, &lt;=, &gt;=

// Custom constraint
type Number interface {
    ~int | ~int8 | ~int16 | ~int32 | ~int64 |
    ~float32 | ~float64
}

func Sum[T Number](nums []T) T {
    var total T
    for _, n := range nums {
        total += n
    }
    return total
}

// ~ (tilde) cho phép underlying types
type Celsius float64
type Fahrenheit float64

// Celsius có underlying type float64, nên match ~float64
var temp Celsius = 36.5
fmt.Println(Sum([]Celsius{36.5, 37.0, 36.8})) // OK nhờ ~float64

// Constraint với methods
type Stringer interface {
    String() string
}

func PrintAll[T Stringer](items []T) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}

// Composite constraint (methods + types)
type StringLike interface {
    ~string
    Len() int
}
</code></pre>

<h3 id="1-3-generic-types"><strong>1.3. Generic Types (Struct, Interface)</strong></h3>

<pre><code class="language-go">// Generic Stack
type Stack[T any] struct {
    items []T
}

func NewStack[T any]() *Stack[T] {
    return &Stack[T]{items: make([]T, 0)}
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }
    last := len(s.items) - 1
    item := s.items[last]
    s.items = s.items[:last]
    return item, true
}

func (s *Stack[T]) Peek() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }
    return s.items[len(s.items)-1], true
}

func (s *Stack[T]) Len() int {
    return len(s.items)
}

// Generic Result type (like Rust)
type Result[T any] struct {
    Value T
    Err   error
}

func Ok[T any](value T) Result[T] {
    return Result[T]{Value: value}
}

func Fail[T any](err error) Result[T] {
    return Result[T]{Err: err}
}

func (r Result[T]) Unwrap() (T, error) {
    return r.Value, r.Err
}

func main() {
    // Stack of ints
    intStack := NewStack[int]()
    intStack.Push(1)
    intStack.Push(2)
    intStack.Push(3)
    
    val, ok := intStack.Pop()
    fmt.Println(val, ok) // 3, true
    
    // Stack of strings
    strStack := NewStack[string]()
    strStack.Push("hello")
    strStack.Push("world")
    
    // Result
    r := Ok(42)
    v, err := r.Unwrap()
    fmt.Println(v, err) // 42, nil
}
</code></pre>

<h3 id="1-4-slices-maps-package"><strong>1.4. slices & maps packages (Go 1.21+)</strong></h3>

<pre><code class="language-go">import (
    "fmt"
    "maps"
    "slices"
)

func main() {
    // slices package - generic slice operations
    nums := []int{3, 1, 4, 1, 5, 9, 2, 6}
    
    slices.Sort(nums)                          // [1, 1, 2, 3, 4, 5, 6, 9]
    fmt.Println(slices.Contains(nums, 5))      // true
    fmt.Println(slices.Index(nums, 4))          // 4
    fmt.Println(slices.Min(nums))               // 1
    fmt.Println(slices.Max(nums))               // 9
    
    // slices.SortFunc cho custom sorting
    type Person struct {
        Name string
        Age  int
    }
    people := []Person{
        {"Alice", 30},
        {"Bob", 25},
        {"Carol", 28},
    }
    slices.SortFunc(people, func(a, b Person) int {
        return a.Age - b.Age
    })
    
    // Compact (remove consecutive duplicates)
    sorted := []int{1, 1, 2, 2, 3, 3}
    unique := slices.Compact(sorted) // [1, 2, 3]
    
    // maps package
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    
    keys := slices.Sorted(maps.Keys(m))      // ["a", "b", "c"]
    values := slices.Sorted(maps.Values(m))  // [1, 2, 3]
    
    // Clone
    m2 := maps.Clone(m)
    
    // Equal
    fmt.Println(maps.Equal(m, m2))  // true
    
    fmt.Println(unique, keys, values)
}
</code></pre>

<h2 id="2-packages"><strong>2. Packages</strong></h2>

<h3 id="2-1-package-basics"><strong>2.1. Package Basics</strong></h3>

<pre><code class="language-go">// Mỗi file Go thuộc một package
// Package = thư mục chứa các file .go cùng package name
// main package = entry point (có func main)

// Quy tắc đặt tên package:
// - Lowercase, single word: user, auth, config
// - Không dùng camelCase hay snake_case
// - Ngắn gọn, mô tả chức năng

// Visibility rules:
// Exported (public)   = Viết hoa chữ cái đầu: User, GetName(), MaxRetries
// Unexported (private) = Viết thường: user, getName(), maxRetries
</code></pre>

<h3 id="2-2-package-structure"><strong>2.2. Package Organization</strong></h3>

<pre><code class="language-go">// Project structure:
// myapp/
// ├── cmd/api/main.go          ← package main
// ├── internal/
// │   ├── user/
// │   │   ├── handler.go       ← package user
// │   │   ├── service.go       ← package user
// │   │   ├── repository.go    ← package user
// │   │   └── model.go         ← package user
// │   └── auth/
// │       ├── jwt.go           ← package auth
// │       └── middleware.go    ← package auth
// └── pkg/
//     └── validator/
//         └── validator.go     ← package validator

// internal/ → chỉ import được từ parent module
// pkg/      → public, ai cũng import được
</code></pre>

<pre><code class="language-go">// internal/user/model.go
package user

import "time"

// User - Exported (public)
type User struct {
    ID        int       `json:"id"`
    Name      string    `json:"name"`
    Email     string    `json:"email"`
    password  string    // unexported (private) - chỉ truy cập trong package user
    CreatedAt time.Time `json:"created_at"`
}

// NewUser - Exported constructor
func NewUser(name, email, password string) *User {
    return &User{
        Name:      name,
        Email:     email,
        password:  hashPassword(password), // gọi private function
        CreatedAt: time.Now(),
    }
}

// hashPassword - unexported (private)
func hashPassword(pwd string) string {
    // ... hash logic
    return pwd
}
</code></pre>

<h3 id="2-3-init-function"><strong>2.3. init() Function</strong></h3>

<pre><code class="language-go">package config

import (
    "fmt"
    "os"
)

var (
    DatabaseURL string
    Port        string
)

// init() chạy TỰ ĐỘNG khi package được import
// Chạy trước main(), theo thứ tự import
func init() {
    DatabaseURL = os.Getenv("DATABASE_URL")
    if DatabaseURL == "" {
        DatabaseURL = "postgres://localhost:5432/mydb"
    }
    
    Port = os.Getenv("PORT")
    if Port == "" {
        Port = "8080"
    }
    
    fmt.Println("Config initialized")
}

// ⚠️ Best practice: Hạn chế dùng init()
// - Khó test, khó debug
// - Implicit side effects
// - Thay bằng explicit initialization: config.Load()
</code></pre>

<h3 id="2-4-import"><strong>2.4. Import Patterns</strong></h3>

<pre><code class="language-go">import (
    // Standard library
    "fmt"
    "net/http"
    "os"
    
    // Third-party (blank line separator)
    "github.com/gin-gonic/gin"
    "github.com/jackc/pgx/v5"
    
    // Internal packages (blank line separator)
    "github.com/yourname/myapp/internal/user"
    "github.com/yourname/myapp/internal/auth"
)

// Alias import
import (
    stdhttp "net/http"         // alias
    _ "github.com/lib/pq"     // blank import (chỉ chạy init())
    . "fmt"                    // dot import (KHÔNG khuyến khích)
)

// Blank import (_ ) dùng cho:
// - Database drivers: _ "github.com/lib/pq"
// - Image decoders: _ "image/png"
// Chỉ chạy init(), không dùng package trực tiếp
</code></pre>

<h2 id="3-go-modules"><strong>3. Go Modules</strong></h2>

<h3 id="3-1-module-basics"><strong>3.1. Module Basics</strong></h3>

<pre><code class="language-bash"># Khởi tạo module
go mod init github.com/yourname/myapp

# go.mod file
module github.com/yourname/myapp

go 1.23

require (
    github.com/gin-gonic/gin v1.10.0
    github.com/jackc/pgx/v5 v5.7.1
    go.uber.org/zap v1.27.0
)

require (
    // indirect dependencies (tự động thêm)
    github.com/bytedance/sonic v1.12.4 // indirect
    github.com/go-playground/validator/v10 v10.23.0 // indirect
    // ...
)
</code></pre>

<h3 id="3-2-dependency-management"><strong>3.2. Dependency Management</strong></h3>

<pre><code class="language-bash"># Thêm dependency
go get github.com/gin-gonic/gin@latest
go get github.com/gin-gonic/gin@v1.10.0   # specific version
go get github.com/gin-gonic/gin@main      # branch

# Update dependency
go get -u github.com/gin-gonic/gin        # latest minor/patch
go get -u=patch github.com/gin-gonic/gin  # latest patch only

# Update tất cả
go get -u ./...

# Remove unused dependencies
go mod tidy

# Verify dependencies (checksum)
go mod verify

# Download dependencies (cho CI/Docker)
go mod download

# Vendor mode (copy deps vào project)
go mod vendor
go build -mod=vendor ./...

# Xem dependency graph
go mod graph
</code></pre>

<h3 id="3-3-versioning"><strong>3.3. Semantic Versioning</strong></h3>

<pre><code class="language-go">// Go sử dụng Semantic Versioning: vMAJOR.MINOR.PATCH
// v1.2.3
// MAJOR: Breaking changes (phải thay đổi import path cho v2+)
// MINOR: New features, backwards compatible
// PATCH: Bug fixes

// Major version v2+ phải thay đổi module path:
// v1: github.com/jackc/pgx
// v5: github.com/jackc/pgx/v5

import "github.com/jackc/pgx/v5"  // Module path bao gồm /v5

// go.mod
require github.com/jackc/pgx/v5 v5.7.1
</code></pre>

<h3 id="3-4-workspace"><strong>3.4. Workspace Mode (Go 1.18+)</strong></h3>

<pre><code class="language-bash"># Workspace cho multi-module development
# Khi bạn có nhiều modules liên quan và muốn develop cùng lúc

# Structure:
# workspace/
# ├── go.work
# ├── service-a/
# │   ├── go.mod
# │   └── main.go
# ├── service-b/
# │   ├── go.mod
# │   └── main.go
# └── shared-lib/
#     ├── go.mod
#     └── utils.go

# Khởi tạo workspace
go work init ./service-a ./service-b ./shared-lib

# go.work file
go 1.23

use (
    ./service-a
    ./service-b
    ./shared-lib
)

# Thêm module vào workspace
go work use ./new-service

# ⚠️ KHÔNG commit go.work vào git cho libraries
# CÓ THỂ commit cho monorepo applications
</code></pre>

<h3 id="3-5-replace-directive"><strong>3.5. Replace Directive</strong></h3>

<pre><code class="language-go">// go.mod - replace cho local development hoặc fork

module github.com/yourname/myapp

go 1.23

require (
    github.com/original/library v1.0.0
)

// Replace với local path (development)
replace github.com/original/library => ../my-fork

// Replace với fork
replace github.com/original/library => github.com/yourfork/library v1.0.1

// ⚠️ Dùng workspace mode thay vì replace khi có thể
</code></pre>

<h2 id="4-build-tags"><strong>4. Build Tags & Conditional Compilation</strong></h2>

<pre><code class="language-go">// Build tags cho phép include/exclude files khi build

//go:build linux
// +build linux
// File này chỉ compile trên Linux

//go:build !windows
// File này compile trên mọi OS trừ Windows

//go:build integration
// File này chỉ compile khi: go test -tags=integration

// Ví dụ: database driver khác nhau cho từng môi trường
//go:build prod

package config

var DatabaseURL = "postgres://prod-server:5432/mydb"
</code></pre>

<pre><code class="language-bash"># Build với tags
go build -tags=prod ./...
go test -tags=integration ./...
</code></pre>

<h2 id="5-tong-ket"><strong>5. Summary</strong></h2>

<ul>
<li><strong>Generics</strong>: Type parameters, constraints (any, comparable, cmp.Ordered), generic structs</li>
<li><strong>slices/maps packages</strong>: Generic helper functions for collections (Go 1.21+)</li>
<li><strong>Packages</strong>: Uppercase = exported, lowercase = unexported, small & focused</li>
<li><strong>Go Modules</strong>: go.mod, semantic versioning, go mod tidy, vendor mode</li>
<li><strong>Workspace</strong>: Multi-module development, go.work</li>
</ul>

<p>Next part: <strong>Goroutines & Channels</strong> — the concurrency power of Go, making it the top choice for high-performance systems.</p>
