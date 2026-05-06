---
id: 019d8b40-b101-7001-b003-golang0000101
title: 'Lesson 1: Introducing Go - Cloud Native language'
slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
description: >-
  Why Go? Compare with Rust, Java, Python. History, design philosophy, Go
  ecosystem. Install, GOPATH, Go modules. Hello World and go toolchain.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Go Fundamentals'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: From Basics to Advanced'
  slug: golang-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2788" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2788)"/>

  <!-- Decorations -->
  <g>
    <circle cx="996" cy="238" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="134" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="788" cy="30" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="186" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="82" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="58" x2="1100" y2="138" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="88" x2="1050" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="986.5788383248864,141.5 986.5788383248864,174.5 958,191 929.4211616751136,174.5 929.4211616751135,141.5 958,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Introducing Go - The language of Cloud</tspan>
      <tspan x="60" dy="42">Native</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Go Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-go-la-gi"><strong>1. What is Go?</strong></h2>

<p>Go (or Golang) is an open source programming language created by <strong>Robert Griesemer</strong>, <strong>Rob Pike</strong> and <strong>Ken Thompson</strong> at Google in 2007, officially released in 2009. Go was designed to solve real problems in large-scale software development: <strong>compile quickly</strong>, <strong>simple concurrency</strong>, <strong>deployment is easy</strong>.</p>

<p>Go is a language <strong>statically typed</strong>, <strong>compiled</strong>, creating a unique binary with no runtime dependencies. This is why Go is the top choice for <strong>Cloud Native</strong> — Docker, Kubernetes, Terraform, Prometheus, etcd are all written in Go.</p>

<h3 id="dac-diem-noi-bat"><strong>Outstanding features</strong></h3>

<ul>
<li><strong>Simple & readable</strong>: Only 25 keywords, minimalist syntax, easy to read code</li>
<li><strong>Fast compilation</strong>: Compile entire large projects in seconds</li>
<li><strong>Built-in concurrency</strong>: Goroutines and Channels are first-class citizens</li>
<li><strong>Static binary</strong>: Single binary, easy cross-compile for any OS/architecture</li>
<li><strong>Garbage collected</strong>: Efficient GC, low latency (sub-millisecond from Go 1.19+)</li>
<li><strong>Rich standard library</strong>: HTTP server, JSON, crypto, testing... built-in</li>
</ul>

<h2 id="2-tai-sao-chon-go"><strong>2. Why choose Go?</strong></h2>

<h3 id="go-trong-industry"><strong>Go in Industry</strong></h3>

<p>Go is widely used by large companies:</p>

<table>
<thead>
<tr><th>Company</th><th>Products using Go</th></tr>
</thead>
<tbody>
<tr><td>Google</td><td>Kubernetes, gVisor, many internal services</td></tr>
<tr><td>Docker</td><td>Docker Engine, Docker Compose</td></tr>
<tr><td>HashiCorp</td><td>Terraform, Consul, Vault, Nomad</td></tr>
<tr><td>Uber</td><td>Microservices platform, Jaeger tracing</td></tr>
<tr><td>Cloudflare</td><td>Edge computing, DNS, security tools</td></tr>
<tr><td>Twitch</td><td>Chat service (process millions messages/sec)</td></tr>
<tr><td>Netflix</td><td>Infrastructure tooling</td></tr>
<tr><td>Dropbox</td><td>Migration from Python to Go for performance</td></tr>
</tbody>
</table>

<h3 id="use-cases"><strong>Most suitable use cases</strong></h3>

<ul>
<li><strong>Microservices & APIs</strong>: REST, gRPC, GraphQL backends</li>
<li><strong>Cloud infrastructure</strong>: CLI tools, operators, controllers</li>
<li><strong>DevOps tooling</strong>: CI/CD, monitoring, automation</li>
<li><strong>Networking</strong>: Proxies, load balancers, VPN</li>
<li><strong>Data pipelines</strong>: ETL, stream processing</li>
<li><strong>Blockchain</strong>: Ethereum Go client (Geth)</li>
</ul>

<h2 id="3-so-sanh-go"><strong>3. Compare Go with other languages</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>Go</th><th>Rust</th><th>Java</th><th>Python</th><th>Node.js</th></tr>
</thead>
<tbody>
<tr><td>Typing</td><td>Static</td><td>Static</td><td>Static</td><td>Dynamic</td><td>Dynamic</td></tr>
<tr><td>Compilation</td><td>Native binary</td><td>Native binary</td><td>JVM bytecode</td><td>Interpreted</td><td>JIT (V8)</td></tr>
<tr><td>GC</td><td>Yes (low latency)</td><td>No (ownership)</td><td>Yes (JVM GC)</td><td>Yes</td><td>Yes (V8 GC)</td></tr>
<tr><td>Concurrency</td><td>Goroutines</td><td>async/await + threads</td><td>Virtual Threads</td><td>asyncio</td><td>Event loop</td></tr>
<tr><td>Learning Curve</td><td>Low</td><td>High</td><td>Average</td><td>Low</td><td>Low</td></tr>
<tr><td>Performance</td><td>High</td><td>Very high</td><td>High</td><td>Low</td><td>Average</td></tr>
<tr><td>Memory Usage</td><td>Low</td><td>Very low</td><td>High</td><td>High</td><td>Average</td></tr>
<tr><td>Deploy Size</td><td>~10-20MB</td><td>~5-15MB</td><td>JRE + JAR</td><td>Runtime + deps</td><td>Runtime + node_modules</td></tr>
<tr><td>Ecosystem</td><td>Good</td><td>Developing</td><td>Very big</td><td>Very big</td><td>Very big</td></tr>
</tbody>
</table>

<p><strong>When to choose Go instead of Rust?</strong> Go when you need to write quickly, team onboarding quickly, GC acceptable. Rust when you need zero-cost abstractions, absolute memory safety, embedded/systems.</p>

<p><strong>When to choose Go instead of Java?</strong> Go when you need container-friendly (compact, fast start), no need for JVM ecosystem. Java when needed Spring ecosystem, enterprise standards, legacy integration.</p>

<h2 id="4-triet-ly-thiet-ke"><strong>4. Go's design philosophy</strong></h2>

<p>Go follows very special design principles:</p>

<h3 id="4-1-simplicity"><strong>4.1. Simplicity over cleverness</strong></h3>

<pre><code class="language-go">// Go: explicit, simple
if err != nil {
    return fmt.Errorf("failed to read file: %w", err)
}

// Không có: exceptions, try-catch, generics phức tạp
// Không có: inheritance, ternary operator
// Không có: optional chaining, null coalescing
</code></pre>

<h3 id="4-2-composition"><strong>4.2. Composition over Inheritance</strong></h3>

<pre><code class="language-go">// Go sử dụng embedding thay vì inheritance
type Animal struct {
    Name string
}

func (a Animal) Speak() string {
    return a.Name + " speaks"
}

type Dog struct {
    Animal  // embedding, không phải inheritance
    Breed string
}

// Dog "kế thừa" method Speak() từ Animal
dog := Dog{Animal: Animal{Name: "Rex"}, Breed: "Labrador"}
fmt.Println(dog.Speak()) // "Rex speaks"
</code></pre>

<h3 id="4-3-concurrency"><strong>4.3. Concurrency is not parallelism</strong></h3>

<p>Rob Pike: <em>"Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once."</em></p>

<pre><code class="language-go">// Goroutines: lightweight concurrent execution
go func() {
    // Chạy concurrent, chi phí ~2KB stack
}()

// Channels: communication between goroutines
ch := make(chan string)
go func() { ch &lt;- "hello" }()
msg := &lt;-ch
</code></pre>

<h3 id="4-4-gofmt"><strong>4.4. One way to format</strong></h3>

<p><code>gofmt</code> Automatically format code according to unique standards. No more arguing about code style.</p>

<h2 id="5-cai-dat-go"><strong>5. Install Go</strong></h2>

<h3 id="5-1-macos"><strong>5.1. macOS</strong></h3>

<pre><code class="language-bash"># Cách 1: Homebrew (khuyến nghị)
brew install go

# Cách 2: Download từ go.dev
# Tải file .pkg từ https://go.dev/dl/ và cài đặt

# Verify
go version
# go version go1.23.x darwin/arm64
</code></pre>

<h3 id="5-2-linux"><strong>5.2. Linux (Ubuntu/Debian)</strong></h3>

<pre><code class="language-bash"># Download và extract
wget https://go.dev/dl/go1.23.4.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.23.4.linux-amd64.tar.gz

# Thêm vào PATH (thêm vào ~/.bashrc hoặc ~/.zshrc)
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# Verify
go version
</code></pre>

<h3 id="5-3-windows"><strong>5.3. Windows</strong></h3>

<pre><code class="language-powershell"># Cách 1: Winget
winget install GoLang.Go

# Cách 2: Download .msi từ https://go.dev/dl/

# Verify (mở terminal mới)
go version
</code></pre>

<h3 id="5-4-gopath"><strong>5.4. GOPATH and Go Workspace</strong></h3>

<pre><code class="language-bash"># Xem cấu hình Go
go env

# Các biến quan trọng:
# GOROOT  = /usr/local/go       (Go installation)
# GOPATH  = $HOME/go            (Go workspace)
# GOBIN   = $GOPATH/bin         (Compiled binaries)
# GOMODCACHE = $GOPATH/pkg/mod  (Module cache)

# Go workspace structure:
# ~/go/
# ├── bin/        ← Installed binaries (golangci-lint, air, etc.)
# ├── pkg/mod/    ← Downloaded module cache
# └── src/        ← (Legacy, không dùng với modules)
</code></pre>

<h2 id="6-hello-world"><strong>6. Hello World - The first Go program</strong></h2>

<h3 id="6-1-khoi-tao-project"><strong>6.1. Initialize project</strong></h3>

<pre><code class="language-bash"># Tạo thư mục project
mkdir hello-go && cd hello-go

# Khởi tạo Go module
go mod init github.com/yourname/hello-go
# Tạo file go.mod - quản lý dependencies
</code></pre>

<h3 id="6-2-viet-code"><strong>6.2. Write code</strong></h3>

<pre><code class="language-go">// main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go! 🚀")
    
    // Variables
    name := "Gopher"  // short declaration
    age := 15         // Go ra đời 2009
    
    fmt.Printf("Xin chào %s, Go đã %d tuổi!\n", name, age)
}
</code></pre>

<h3 id="6-3-chay-va-build"><strong>6.3. Run and Build</strong></h3>

<pre><code class="language-bash"># Chạy trực tiếp (compile + run)
go run main.go
# Output: Hello, Go! 🚀
# Output: Xin chào Gopher, Go đã 15 tuổi!

# Build binary
go build -o hello-go main.go
./hello-go

# Cross-compile cho Linux (từ macOS)
GOOS=linux GOARCH=amd64 go build -o hello-go-linux main.go

# Cross-compile cho Windows 
GOOS=windows GOARCH=amd64 go build -o hello-go.exe main.go
</code></pre>

<h2 id="7-go-toolchain"><strong>7. Go Toolchain</strong></h2>

<p>Go comes with a powerful set of tools, no additional installation required:</p>

<table>
<thead>
<tr><th>Command</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td><code>go run</code></td><td>Compile and run directly</td></tr>
<tr><td><code>go build</code></td><td>Compile into binary</td></tr>
<tr><td><code>go test</code></td><td>Run tests</td></tr>
<tr><td><code>go fmt</code></td><td>Format code according to standards</td></tr>
<tr><td><code>go vet</code></td><td>Detect potential errors</td></tr>
<tr><td><code>go mod init</code></td><td>Initialize new module</td></tr>
<tr><td><code>go mod tidy</code></td><td>Clean up dependencies</td></tr>
<tr><td><code>go get</code></td><td>Download dependencies</td></tr>
<tr><td><code>go install</code></td><td>Compile and install binary into $GOBIN</td></tr>
<tr><td><code>go read</code></td><td>See documentation</td></tr>
<tr><td><code>go generate</code></td><td>Run code generation</td></tr>
<tr><td><code>go work</code></td><td>Workspace mode (multi-module)</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Xem docs của một package
go doc fmt
go doc fmt.Printf

# Format toàn bộ project
go fmt ./...

# Kiểm tra lỗi tiềm ẩn
go vet ./...

# Download và clean dependencies
go mod tidy
</code></pre>

<h2 id="8-editor-setup"><strong>8. Editor Setup</strong></h2>

<h3 id="8-1-vscode"><strong>8.1. VS Code (recommended)</strong></h3>

<pre><code class="language-json">// Cài extension: "Go" by Go Team at Google

// settings.json
{
  "go.formatTool": "goimports",
  "go.lintTool": "golangci-lint",
  "go.useLanguageServer": true,
  "editor.formatOnSave": true,
  "[go]": {
    "editor.defaultFormatter": "golang.go",
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit"
    }
  }
}
</code></pre>

<h3 id="8-2-goland"><strong>8.2. GoLand (JetBrains)</strong></h3>

<p>GoLand is a specialized IDE for Go, with the best support for debugging, refactoring, and testing. Suitable for large projects.</p>

<h3 id="8-3-tools"><strong>8.3. Essential Tools</strong></h3>

<pre><code class="language-bash"># golangci-lint - meta-linter (chạy 50+ linters)
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

# air - live reload khi phát triển
go install github.com/air-verse/air@latest

# gotests - generate test stubs
go install github.com/cweill/gotests/gotests@latest

# mockery - generate mocks  
go install github.com/vektra/mockery/v2@latest

# swag - Swagger docs generation
go install github.com/swaggo/swag/cmd/swag@latest
</code></pre>

<h2 id="9-go-modules"><strong>9. Basic Go Modules</strong></h2>

<p>Go Modules (since Go 1.11) is the official dependency management system:</p>

<pre><code class="language-bash"># go.mod - khai báo module và dependencies
module github.com/yourname/hello-go

go 1.23

require (
    github.com/gin-gonic/gin v1.10.0
    github.com/joho/godotenv v1.5.1
)
</code></pre>

<pre><code class="language-bash"># Thêm dependency
go get github.com/gin-gonic/gin@latest

# Update dependency
go get -u github.com/gin-gonic/gin

# Remove unused dependencies  
go mod tidy

# Vendor dependencies (copy vào project)
go mod vendor
</code></pre>

<h2 id="10-project-structure"><strong>10. Standard Project Structure</strong></h2>

<p>Theo <a href="https://github.com/golang-standards/project-layout">golang-standards/project-layout</a>:</p>

<pre><code>my-go-project/
├── cmd/                    # Entry points (main packages)
│   ├── api/
│   │   └── main.go         # API server
│   └── worker/
│       └── main.go         # Background worker
├── internal/               # Private packages (không thể import từ ngoài)
│   ├── handler/            # HTTP handlers
│   ├── service/            # Business logic
│   ├── repository/         # Data access
│   └── model/              # Domain models
├── pkg/                    # Public packages (có thể import)
│   └── validator/
├── config/                 # Configuration files
├── migrations/             # Database migrations
├── api/                    # API specs (OpenAPI, protobuf)
├── scripts/                # Build, deploy scripts
├── go.mod
├── go.sum
├── Makefile
├── Dockerfile
└── README.md
</code></pre>

<h2 id="11-tong-ket"><strong>11. Summary</strong></h2>

<p>Go is a simple yet powerful language, designed for the cloud-native era. With fast compilation, concurrency built-in, static binary, and rich standard library, Go is ideal for backend services, microservices, and infrastructure tooling.</p>

<p>In the next article, we will go deeper <strong>Variables, Types & Control Flow</strong> — the syntactic foundation of Go.</p>
