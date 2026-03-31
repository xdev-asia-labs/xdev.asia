---
id: 019d8b40-b503-7001-b003-golang0000503
title: 'Bài 19: Docker, CI/CD & DevOps'
slug: bai-19-docker-cicd-va-devops
description: >-
  Multi-stage Docker builds cho Go. Docker Compose cho development.
  GitHub Actions CI/CD pipeline. GoReleaser, semantic versioning.
  Health checks, graceful shutdown.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Microservices, Testing & Production"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-dockerfile"><strong>1. Multi-stage Dockerfile</strong></h2>

<pre><code class="language-dockerfile"># Build stage
FROM golang:1.23-alpine AS builder

RUN apk add --no-cache git ca-certificates

WORKDIR /app

# Cache dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source
COPY . .

# Build with optimizations
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
    go build -ldflags="-w -s -X main.version=$(git describe --tags --always)" \
    -o /app/server ./cmd/server

# Production stage
FROM scratch

# Copy CA certificates (for HTTPS calls)
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Copy binary
COPY --from=builder /app/server /server

# Copy config (if needed)
COPY --from=builder /app/config /config

EXPOSE 8080

ENTRYPOINT ["/server"]
</code></pre>

<h3 id="1-1-dockerfile-tips"><strong>1.1. Dockerfile Tips</strong></h3>

<ul>
<li><strong>scratch</strong>: Image nhỏ nhất (~5-15MB), chỉ chứa binary</li>
<li><strong>alpine</strong>: Nếu cần shell debugging (~20-30MB)</li>
<li><strong>CGO_ENABLED=0</strong>: Static binary, không cần libc</li>
<li><strong>-ldflags="-w -s"</strong>: Strip debug info, giảm binary size 30%</li>
<li><strong>.dockerignore</strong>: Exclude vendor, .git, tests</li>
</ul>

<pre><code class="language-text"># .dockerignore
.git
.github
.vscode
vendor
*_test.go
README.md
docker-compose*.yml
</code></pre>

<h2 id="2-docker-compose"><strong>2. Docker Compose</strong></h2>

<pre><code class="language-yaml"># docker-compose.yml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USER=app
      - DB_PASSWORD=secret
      - DB_NAME=appdb
      - REDIS_ADDR=redis:6379
      - JWT_SECRET=your-secret-key
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_started
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--spider", "http://localhost:8080/health"]
      interval: 30s
      timeout: 5s
      retries: 3

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: appdb
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app -d appdb"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data

  migrate:
    build: .
    command: ["/server", "migrate", "up"]
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USER=app
      - DB_PASSWORD=secret
      - DB_NAME=appdb

volumes:
  pgdata:
  redisdata:
</code></pre>

<h2 id="3-graceful-shutdown"><strong>3. Graceful Shutdown</strong></h2>

<pre><code class="language-go">package main

import (
    "context"
    "log"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"
)

func main() {
    router := setupRouter()
    
    srv := &http.Server{
        Addr:         ":8080",
        Handler:      router,
        ReadTimeout:  15 * time.Second,
        WriteTimeout: 15 * time.Second,
        IdleTimeout:  60 * time.Second,
    }
    
    // Start server in goroutine
    go func() {
        log.Printf("Server starting on :8080")
        if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
            log.Fatalf("Server error: %v", err)
        }
    }()
    
    // Wait for interrupt signal
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
    <-quit
    
    log.Println("Shutting down server...")
    
    // Graceful shutdown with timeout
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    
    if err := srv.Shutdown(ctx); err != nil {
        log.Fatalf("Server forced to shutdown: %v", err)
    }
    
    // Close database connections
    sqlDB, _ := db.DB()
    sqlDB.Close()
    
    // Close Redis
    redisClient.Close()
    
    log.Println("Server stopped gracefully")
}
</code></pre>

<h2 id="4-health-checks"><strong>4. Health Checks</strong></h2>

<pre><code class="language-go">func HealthCheck(db *gorm.DB, redis *redis.Client) gin.HandlerFunc {
    return func(c *gin.Context) {
        checks := map[string]string{}
        healthy := true
        
        // Check database
        sqlDB, _ := db.DB()
        if err := sqlDB.Ping(); err != nil {
            checks["database"] = "unhealthy: " + err.Error()
            healthy = false
        } else {
            checks["database"] = "healthy"
        }
        
        // Check Redis
        if err := redis.Ping(c).Err(); err != nil {
            checks["redis"] = "unhealthy: " + err.Error()
            healthy = false
        } else {
            checks["redis"] = "healthy"
        }
        
        status := http.StatusOK
        if !healthy {
            status = http.StatusServiceUnavailable
        }
        
        c.JSON(status, gin.H{
            "status": map[bool]string{true: "healthy", false: "unhealthy"}[healthy],
            "checks": checks,
        })
    }
}

// Liveness: app is running
// r.GET("/healthz", func(c *gin.Context) { c.JSON(200, gin.H{"status": "ok"}) })

// Readiness: app is ready to serve
// r.GET("/readyz", HealthCheck(db, redis))
</code></pre>

<h2 id="5-github-actions"><strong>5. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml"># .github/workflows/ci.yml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
          POSTGRES_DB: testdb
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-go@v5
        with:
          go-version: '1.23'
      
      - name: Cache Go modules
        uses: actions/cache@v4
        with:
          path: ~/go/pkg/mod
          key: ${{ runner.os }}-go-${{ hashFiles('**/go.sum') }}
      
      - name: Lint
        uses: golangci/golangci-lint-action@v6
        with:
          version: latest
      
      - name: Test
        run: go test -race -coverprofile=coverage.out ./...
        env:
          DB_HOST: localhost
          DB_PORT: 5432
          DB_USER: test
          DB_PASSWORD: test
          DB_NAME: testdb
      
      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          file: ./coverage.out

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: |
            ghcr.io/${{ github.repository }}:latest
            ghcr.io/${{ github.repository }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
</code></pre>

<h2 id="6-makefile"><strong>6. Makefile</strong></h2>

<pre><code class="language-makefile">.PHONY: build test lint run docker-build docker-run

# Variables
APP_NAME := myapp
VERSION := $(shell git describe --tags --always --dirty)
BUILD_TIME := $(shell date -u '+%Y-%m-%dT%H:%M:%SZ')

# Build
build:
	CGO_ENABLED=0 go build -ldflags="-w -s -X main.version=$(VERSION)" -o bin/$(APP_NAME) ./cmd/server

# Run
run:
	go run ./cmd/server

# Test
test:
	go test -race -coverprofile=coverage.out ./...
	go tool cover -func=coverage.out

# Lint
lint:
	golangci-lint run ./...

# Docker
docker-build:
	docker build -t $(APP_NAME):$(VERSION) .

docker-run:
	docker compose up -d

docker-down:
	docker compose down -v

# Migration
migrate-up:
	go run ./cmd/server migrate up

migrate-down:
	go run ./cmd/server migrate down

# Proto
proto:
	protoc --go_out=. --go_opt=paths=source_relative \
	       --go-grpc_out=. --go-grpc_opt=paths=source_relative \
	       proto/**/**/*.proto
</code></pre>

<p>Bài tiếp theo: <strong>Production Deployment & Observability</strong> — structured logging, metrics, monitoring, và deployment strategies.</p>
