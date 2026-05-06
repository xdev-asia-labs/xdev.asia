---
id: 019d8b40-b101-7001-b003-golang0000101
title: 'レッスン 1: Go の紹介 - クラウドネイティブ言語'
slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
description: >-
  なぜ行くのですか？ Rust、Java、Python と比較してください。歴史、設計哲学、Go エコシステム。 GOPATH、Go
  モジュールをインストールします。 Hello World と go ツールチェーン。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: Go の基礎'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 プログラミング — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: Go の紹介 - クラウドの言語</tspan>
      <tspan x="60" dy="42">ネイティブ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Go の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-go-la-gi"><strong>1.囲碁とは何ですか?</strong></h2>

<p>Go (または Golang) は、によって作成されたオープンソース プログラミング言語です。 <strong>ロバート・グリーズマー</strong>、 <strong>ロブ・パイク</strong> そして <strong>ケン・トンプソン</strong> 2007 年に Google で開発され、2009 年に正式にリリースされました。Go は、大規模なソフトウェア開発における実際の問題を解決するために設計されました。 <strong>すぐにコンパイルする</strong>、 <strong>単純な同時実行</strong>、 <strong>導入は簡単です</strong>。</p>

<p>Go は言語です <strong>静的に型付けされた</strong>、 <strong>コンパイルされた</strong>、実行時の依存関係のない一意のバイナリを作成します。これが、Go が最適な選択肢である理由です。 <strong>クラウドネイティブ</strong> — Docker、Kubernetes、Terraform、Prometheus、etcd はすべて Go で書かれています。</p>

<h3 id="dac-diem-noi-bat"><strong>優れた機能</strong></h3>

<ul>
<li><strong>シンプルで読みやすい</strong>: キーワードはわずか 25、最小限の構文、読みやすいコード</li>
<li><strong>高速コンパイル</strong>: 大規模プロジェクト全体を数秒でコンパイル</li>
<li><strong>組み込みの同時実行性</strong>: ゴルーチンとチャネルは第一級市民です</li>
<li><strong>静的バイナリ</strong>: 単一バイナリ、あらゆる OS/アーキテクチャ向けの簡単なクロスコンパイル</li>
<li><strong>収集されたガベージ</strong>: 効率的な GC、低レイテンシー (Go 1.19 以降ではミリ秒未満)</li>
<li><strong>豊富な標準ライブラリ</strong>: HTTP サーバー、JSON、暗号化、テスト...組み込み</li>
</ul>

<h2 id="2-tai-sao-chon-go"><strong>2. なぜ Go を選ぶのですか?</strong></h2>

<h3 id="go-trong-industry"><strong>業界に参入する</strong></h3>

<p>Go は大企業で広く使用されています。</p>

<table>
<thead>
<tr><th>会社名</th><th>Goを使用した製品</th></tr>
</thead>
<tbody>
<tr><td>Google</td><td>Kubernetes、gVisor、多くの内部サービス</td></tr>
<tr><td>ドッカー</td><td>Docker エンジン、Docker Compose</td></tr>
<tr><td>ハシコーポレーション</td><td>Terraform、Consul、Vault、Nomad</td></tr>
<tr><td>ウーバー</td><td>マイクロサービス プラットフォーム、Jaeger トレース</td></tr>
<tr><td>クラウドフレア</td><td>エッジコンピューティング、DNS、セキュリティツール</td></tr>
<tr><td>けいれん</td><td>チャット サービス (1 秒あたり数百万のメッセージを処理)</td></tr>
<tr><td>Netflix</td><td>インフラストラクチャツール</td></tr>
<tr><td>ドロップボックス</td><td>パフォーマンス向上のための Python から Go への移行</td></tr>
</tbody>
</table>

<h3 id="use-cases"><strong>最適な使用例</strong></h3>

<ul>
<li><strong>マイクロサービスとAPI</strong>: REST、gRPC、GraphQL バックエンド</li>
<li><strong>クラウドインフラストラクチャ</strong>: CLI ツール、オペレーター、コントローラー</li>
<li><strong>DevOpsツール</strong>：CI/CD、モニタリング、自動化</li>
<li><strong>ネットワーキング</strong>: プロキシ、ロードバランサー、VPN</li>
<li><strong>データパイプライン</strong>：ETL、ストリーム処理</li>
<li><strong>ブロックチェーン</strong>: イーサリアム Go クライアント (Geth)</li>
</ul>

<h2 id="3-so-sanh-go"><strong>3. Go を他の言語と比較する</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>行く</th><th>さび</th><th>ジャワ</th><th>パイソン</th><th>Node.js</th></tr>
</thead>
<tbody>
<tr><td>タイピング</td><td>静的</td><td>静的</td><td>静的</td><td>ダイナミック</td><td>ダイナミック</td></tr>
<tr><td>編集</td><td>ネイティブバイナリ</td><td>ネイティブバイナリ</td><td>JVMバイトコード</td><td>通訳済み</td><td>ジット (V8)</td></tr>
<tr><td>GC</td><td>はい (低遅延)</td><td>いいえ（所有権）</td><td>はい (JVM GC)</td><td>はい</td><td>はい (V8 GC)</td></tr>
<tr><td>同時実行性</td><td>ゴルーチン</td><td>非同期/待機 + スレッド</td><td>仮想スレッド</td><td>非同期</td><td>イベントループ</td></tr>
<tr><td>学習曲線</td><td>低い</td><td>高</td><td>平均</td><td>低い</td><td>低い</td></tr>
<tr><td>パフォーマンス</td><td>高</td><td>非常に高い</td><td>高</td><td>低い</td><td>平均</td></tr>
<tr><td>メモリ使用量</td><td>低い</td><td>非常に低い</td><td>高</td><td>高</td><td>平均</td></tr>
<tr><td>展開サイズ</td><td>～10～20MB</td><td>~5～15MB</td><td>JRE + JAR</td><td>ランタイム + デプス</td><td>ランタイム + ノードモジュール</td></tr>
<tr><td>生態系</td><td>良い</td><td>開発中</td><td>とても大きい</td><td>とても大きい</td><td>とても大きい</td></tr>
</tbody>
</table>

<p><strong>Rust ではなく Go を選択するのはどのような場合ですか?</strong> 素早く書く必要がある場合、チームのオンボーディングを迅速に行う必要がある場合、GC を許容できる場合に行ってください。ゼロコストの抽象化、絶対的なメモリ安全性、組み込み/システムが必要な場合は Rust を使用してください。</p>

<p><strong>Java ではなく Go を選択するのはどのような場合ですか?</strong> コンテナーフレンドリー (コンパクト、高速起動) が必要な場合に使用し、JVM エコシステムは必要ありません。必要な場合は Java Spring エコシステム、エンタープライズ標準、レガシー統合。</p>

<h2 id="4-triet-ly-thiet-ke"><strong>4. Go の設計哲学</strong></h2>

<p>Go は非常に特殊な設計原則に従っています。</p>

<h3 id="4-1-simplicity"><strong>4.1.賢さよりも単純さ</strong></h3>

<pre><code class="language-go">// Go: explicit, simple
if err != nil {
    return fmt.Errorf("failed to read file: %w", err)
}

// Không có: exceptions, try-catch, generics phức tạp
// Không có: inheritance, ternary operator
// Không có: optional chaining, null coalescing
</code></pre>

<h3 id="4-2-composition"><strong>4.2.継承よりも構成</strong></h3>

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

<h3 id="4-3-concurrency"><strong>4.3.同時実行は並列処理ではありません</strong></h3>

<p>ロブ・パイク： <em>「並行性とは、一度に多くのことを処理することです。並列性とは、一度に多くのことを行うことです。」</em></p>

<pre><code class="language-go">// Goroutines: lightweight concurrent execution
go func() {
    // Chạy concurrent, chi phí ~2KB stack
}()

// Channels: communication between goroutines
ch := make(chan string)
go func() { ch &lt;- "hello" }()
msg := &lt;-ch
</code></pre>

<h3 id="4-4-gofmt"><strong>4.4.フォーマットする一つの方法</strong></h3>

<p><code>ゴーフムト</code> 独自の標準に従ってコードを自動的にフォーマットします。コードスタイルについて議論する必要はもうありません。</p>

<h2 id="5-cai-dat-go"><strong>5.Goをインストールする</strong></h2>

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

<h3 id="5-3-windows"><strong>5.3.窓</strong></h3>

<pre><code class="language-powershell"># Cách 1: Winget
winget install GoLang.Go

# Cách 2: Download .msi từ https://go.dev/dl/

# Verify (mở terminal mới)
go version
</code></pre>

<h3 id="5-4-gopath"><strong>5.4. GOPATH と Go ワークスペース</strong></h3>

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

<h2 id="6-hello-world"><strong>6. Hello World - 最初の Go プログラム</strong></h2>

<h3 id="6-1-khoi-tao-project"><strong>6.1.プロジェクトの初期化</strong></h3>

<pre><code class="language-bash"># Tạo thư mục project
mkdir hello-go && cd hello-go

# Khởi tạo Go module
go mod init github.com/yourname/hello-go
# Tạo file go.mod - quản lý dependencies
</code></pre>

<h3 id="6-2-viet-code"><strong>6.2.コードを書く</strong></h3>

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

<h3 id="6-3-chay-va-build"><strong>6.3.実行して構築する</strong></h3>

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

<h2 id="7-go-toolchain"><strong>7.Goツールチェーン</strong></h2>

<p>Go には強力なツール セットが付属しており、追加のインストールは必要ありません。</p>

<table>
<thead>
<tr><th>コマンド</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td><code>走りに行きます</code></td><td>直接コンパイルして実行する</td></tr>
<tr><td><code>作りに行く</code></td><td>バイナリにコンパイルする</td></tr>
<tr><td><code>テストに行く</code></td><td>テストの実行</td></tr>
<tr><td><code>行ってください</code></td><td>標準に従ってコードをフォーマットする</td></tr>
<tr><td><code>獣医に行く</code></td><td>潜在的なエラーを検出する</td></tr>
<tr><td><code>mod initに行く</code></td><td>新しいモジュールを初期化する</td></tr>
<tr><td><code>モッド整頓に行く</code></td><td>依存関係をクリーンアップする</td></tr>
<tr><td><code>取りに行く</code></td><td>依存関係をダウンロードする</td></tr>
<tr><td><code>インストールに行く</code></td><td>バイナリをコンパイルして $GOBIN にインストールします</td></tr>
<tr><td><code>読みに行く</code></td><td>ドキュメントを参照してください</td></tr>
<tr><td><code>生成しに行く</code></td><td>コード生成を実行する</td></tr>
<tr><td><code>仕事に行く</code></td><td>ワークスペースモード（マルチモジュール）</td></tr>
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

<h2 id="8-editor-setup"><strong>8. エディターのセットアップ</strong></h2>

<h3 id="8-1-vscode"><strong>8.1. VS コード (推奨)</strong></h3>

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

<p>GoLand は Go に特化した IDE であり、デバッグ、リファクタリング、テストを最適にサポートします。大規模なプロジェクトに適しています。</p>

<h3 id="8-3-tools"><strong>8.3.必須ツール</strong></h3>

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

<h2 id="9-go-modules"><strong>9. 基本的な Go モジュール</strong></h2>

<p>Go Modules (Go 1.11 以降) は公式の依存関係管理システムです。</p>

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

<h2 id="10-project-structure"><strong>10. 標準的なプロジェクト構造</strong></h2>

<p>テオ <a href="https://github.com/golang-standards/project-layout">golang-standards/プロジェクトレイアウト</a>:</p>

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

<h2 id="11-tong-ket"><strong>11. まとめ</strong></h2>

<p>Go は、クラウドネイティブ時代向けに設計された、シンプルかつ強力な言語です。高速なコンパイル、組み込みの同時実行、静的バイナリ、豊富な標準ライブラリを備えた Go は、バックエンド サービス、マイクロサービス、インフラストラクチャ ツールに最適です。</p>

<p>次の記事ではさらに深く掘り下げていきます <strong>変数、型、制御フロー</strong> — Go の構文上の基礎。</p>
