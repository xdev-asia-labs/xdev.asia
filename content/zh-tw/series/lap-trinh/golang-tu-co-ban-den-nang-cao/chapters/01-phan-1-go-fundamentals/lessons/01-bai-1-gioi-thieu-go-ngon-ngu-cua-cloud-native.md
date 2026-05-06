---
id: 019d8b40-b101-7001-b003-golang0000101
title: 第 1 課：Go 簡介 - 雲端原生語言
slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
description: 為什麼要去？與 Rust、Java、Python 進行比較。歷史、設計理念、Go 生態系。安裝、GOPATH、Go 模組。你好世界和去工具鏈。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Go 基礎知識
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：Go 簡介 - 雲端語言</tspan>
      <tspan x="60" dy="42">本地人</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Go 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-go-la-gi"><strong>1. 什麼是圍棋？</strong></h2>

<p>Go（或 Golang）是一種開源程式語言，由 <strong>羅伯特·格里塞默</strong>, <strong>羅布派克</strong> 和 <strong>肯湯普森</strong> 2007年在Google發布，2009年正式發布。 Go旨在解決大規模軟體開發的實際問題： <strong>快速編譯</strong>, <strong>簡單並行</strong>, <strong>部署簡單</strong>。</p>

<p>Go 是一種語言 <strong>靜態型別</strong>, <strong>編譯的</strong>，建立一個沒有運行時依賴性的唯一二進位。這就是為什麼 Go 是首選 <strong>雲端原生</strong> — Docker、Kubernetes、Terraform、Prometheus 等都是用 Go 寫的。</p>

<h3 id="dac-diem-noi-bat"><strong>突出特點</strong></h3>

<ul>
<li><strong>簡單易讀</strong>：只有25個關鍵字，極簡語法，易於閱讀程式碼</li>
<li><strong>快速編譯</strong>：在幾秒鐘內編譯整個大型項目</li>
<li><strong>內建並行</strong>：Goroutines 和 Channels 是一等公民</li>
<li><strong>靜態二進位文件</strong>：單一二進位文件，可輕鬆交叉編譯任何作業系統/架構</li>
<li><strong>垃圾收集</strong>：高效率 GC，低延遲（從 Go 1.19+ 開始為亞毫秒）</li>
<li><strong>豐富的標準庫</strong>：HTTP 伺服器、JSON、加密、測試...內建</li>
</ul>

<h2 id="2-tai-sao-chon-go"><strong>2. 為什麼選擇Go？</strong></h2>

<h3 id="go-trong-industry"><strong>進入工業界</strong></h3>

<p>Go 被大公司廣泛使用：</p>

<table>
<thead>
<tr><th>公司簡介</th><th>使用 Go 的產品</th></tr>
</thead>
<tbody>
<tr><td>Google</td><td>Kubernetes、gVisor、許多內部服務</td></tr>
<tr><td>碼頭工人</td><td>Docker 引擎、Docker 組合</td></tr>
<tr><td>橋公司</td><td>Terraform、Consul、Vault、Nomad</td></tr>
<tr><td>優步</td><td>微服務平台、Jaeger 追蹤</td></tr>
<tr><td>雲耀</td><td>邊緣運算、DNS、安全工具</td></tr>
<tr><td>抽搐</td><td>聊天服務（每秒處理數百萬條訊息）</td></tr>
<tr><td>Netflix</td><td>基礎設施工具</td></tr>
<tr><td>Dropbox</td><td>從 Python 遷移到 Go 以提高效能</td></tr>
</tbody>
</table>

<h3 id="use-cases"><strong>最合適的用例</strong></h3>

<ul>
<li><strong>微服務和 API</strong>：REST、gRPC、GraphQL 後端</li>
<li><strong>雲端基礎設施</strong>：CLI 工具、操作員、控制器</li>
<li><strong>開發營運工具</strong>：CI/CD、監控、自動化</li>
<li><strong>網路</strong>：代理、負載平衡器、VPN</li>
<li><strong>數據管道</strong>：ETL，流處理</li>
<li><strong>區塊鏈</strong>：以太坊Go客戶端（Geth）</li>
</ul>

<h2 id="3-so-sanh-go"><strong>3. Go 與其他語言的比較</strong></h2>

<table>
<thead>
<tr><th>標準</th><th>去</th><th>鐵鏽</th><th>爪哇</th><th>蟒蛇</th><th>Node.js</th></tr>
</thead>
<tbody>
<tr><td>打字</td><td>靜態</td><td>靜態</td><td>靜態</td><td>動態</td><td>動態</td></tr>
<tr><td>編譯</td><td>本機二進位文件</td><td>本機二進位文件</td><td>JVM字節碼</td><td>解釋</td><td>即時生產（V8）</td></tr>
<tr><td>氣相層析</td><td>是（低延遲）</td><td>否（所有權）</td><td>是（JVM GC）</td><td>是的</td><td>是（V8 GC）</td></tr>
<tr><td>並發性</td><td>Goroutine</td><td>非同步/等待+線程</td><td>虛擬線程</td><td>非同步</td><td>事件循環</td></tr>
<tr><td>學習曲線</td><td>低</td><td>高</td><td>平均</td><td>低</td><td>低</td></tr>
<tr><td>效能</td><td>高</td><td>非常高</td><td>高</td><td>低</td><td>平均</td></tr>
<tr><td>記憶體使用情況</td><td>低</td><td>很低</td><td>高</td><td>高</td><td>平均</td></tr>
<tr><td>部署規模</td><td>〜10-20MB</td><td>〜5-15MB</td><td>JRE+JAR</td><td>運行時 + 依賴項</td><td>運行時 + 節點模組</td></tr>
<tr><td>生態系統</td><td>好</td><td>發展中</td><td>很大</td><td>很大</td><td>很大</td></tr>
</tbody>
</table>

<p><strong>何時選擇 Go 而不是 Rust？</strong> 當你需要快速寫作、快速團隊入職、GC 可接受時，就去吧。當您需要零成本抽象、絕對記憶體安全、嵌入式/系統時，請使用 Rust。</p>

<p><strong>何時選擇 Go 而不是 Java？</strong> 當您需要容器友善（緊湊、快速啟動）、不需要 JVM 生態系統時就可以使用。需要時使用 Java Spring 生態系統、企業標準、遺留整合。</p>

<h2 id="4-triet-ly-thiet-ke"><strong>4.Go的設計理念</strong></h2>

<p>Go 遵循非常特殊的設計原則：</p>

<h3 id="4-1-simplicity"><strong>4.1.簡單勝過聰明</strong></h3>

<pre><code class="language-go">// Go: explicit, simple
if err != nil {
    return fmt.Errorf("failed to read file: %w", err)
}

// Không có: exceptions, try-catch, generics phức tạp
// Không có: inheritance, ternary operator
// Không có: optional chaining, null coalescing
</code></pre>

<h3 id="4-2-composition"><strong>4.2.組合優於繼承</strong></h3>

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

<h3 id="4-3-concurrency"><strong>4.3.並發不是並行</strong></h3>

<p>羅布派克： <em>“並發是指同時處理很多事情。並行性是指同時處理很多事情。”</em></p>

<pre><code class="language-go">// Goroutines: lightweight concurrent execution
go func() {
    // Chạy concurrent, chi phí ~2KB stack
}()

// Channels: communication between goroutines
ch := make(chan string)
go func() { ch &lt;- "hello" }()
msg := &lt;-ch
</code></pre>

<h3 id="4-4-gofmt"><strong>4.4.一種格式化方法</strong></h3>

<p><code>戈夫姆特</code> 根據獨特的標準自動格式化程式碼。不再爭論代碼風格。</p>

<h2 id="5-cai-dat-go"><strong>5.安裝Go</strong></h2>

<h3 id="5-1-macos"><strong>5.1. macOS</strong></h3>

<pre><code class="language-bash"># Cách 1: Homebrew (khuyến nghị)
brew install go

# Cách 2: Download từ go.dev
# Tải file .pkg từ https://go.dev/dl/ và cài đặt

# Verify
go version
# go version go1.23.x darwin/arm64
</code></pre>

<h3 id="5-2-linux"><strong>5.2. Linux（Ubuntu/Debian）</strong></h3>

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

<h3 id="5-3-windows"><strong>5.3.窗戶</strong></h3>

<pre><code class="language-powershell"># Cách 1: Winget
winget install GoLang.Go

# Cách 2: Download .msi từ https://go.dev/dl/

# Verify (mở terminal mới)
go version
</code></pre>

<h3 id="5-4-gopath"><strong>5.4. GOPATH 和 Go 工作區</strong></h3>

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

<h2 id="6-hello-world"><strong>6.Hello World－第一個Go程序</strong></h2>

<h3 id="6-1-khoi-tao-project"><strong>6.1.初始化項目</strong></h3>

<pre><code class="language-bash"># Tạo thư mục project
mkdir hello-go && cd hello-go

# Khởi tạo Go module
go mod init github.com/yourname/hello-go
# Tạo file go.mod - quản lý dependencies
</code></pre>

<h3 id="6-2-viet-code"><strong>6.2.編寫程式碼</strong></h3>

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

<h3 id="6-3-chay-va-build"><strong>6.3.運行和構建</strong></h3>

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

<h2 id="7-go-toolchain"><strong>7.Go工具鏈</strong></h2>

<p>Go 附帶了一套強大的工具，無需額外安裝：</p>

<table>
<thead>
<tr><th>命令</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td><code>去跑步</code></td><td>直接編譯運行</td></tr>
<tr><td><code>去建造</code></td><td>編譯成二進位</td></tr>
<tr><td><code>去測試</code></td><td>運行測試</td></tr>
<tr><td><code>去FMT</code></td><td>根據標準格式化程式碼</td></tr>
<tr><td><code>去看獸醫</code></td><td>檢測潛在錯誤</td></tr>
<tr><td><code>去模組初始化</code></td><td>初始化新模組</td></tr>
<tr><td><code>保持整潔</code></td><td>清理依賴關係</td></tr>
<tr><td><code>去拿</code></td><td>下載依賴項</td></tr>
<tr><td><code>去安裝</code></td><td>編譯二進位檔案並將其安裝到 $GOBIN 中</td></tr>
<tr><td><code>去讀書</code></td><td>查看文件</td></tr>
<tr><td><code>去生成</code></td><td>運行程式碼生成</td></tr>
<tr><td><code>去工作</code></td><td>工作區模式（多模組）</td></tr>
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

<h2 id="8-editor-setup"><strong>8. 編輯器設定</strong></h2>

<h3 id="8-1-vscode"><strong>8.1. VS 代碼（建議）</strong></h3>

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

<h3 id="8-2-goland"><strong>8.2. GoLand（JetBrains）</strong></h3>

<p>GoLand 是 Go 的專用 IDE，為調試、重構和測試提供最佳支援。適合大型專案。</p>

<h3 id="8-3-tools"><strong>8.3.必備工具</strong></h3>

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

<h2 id="9-go-modules"><strong>9. 基本 Go 模組</strong></h2>

<p>Go Modules（自 Go 1.11 起）是官方的依賴管理系統：</p>

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

<h2 id="10-project-structure"><strong>10. 標準項目結構</strong></h2>

<p>西奧 <a href="https://github.com/golang-standards/project-layout">golang 標準/專案佈局</a>：</p>

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

<h2 id="11-tong-ket"><strong>11. 總結</strong></h2>

<p>Go 是一種簡單但功能強大的語言，專為雲端原生時代而設計。 Go 具有快速編譯、內建並發、靜態二進位和豐富的標準函式庫，非常適合後端服務、微服務和基礎設施工具。</p>

<p>在下一篇文章中，我們將深入探討 <strong>變數、類型和控制流</strong> ——Go 的語法基礎。</p>
