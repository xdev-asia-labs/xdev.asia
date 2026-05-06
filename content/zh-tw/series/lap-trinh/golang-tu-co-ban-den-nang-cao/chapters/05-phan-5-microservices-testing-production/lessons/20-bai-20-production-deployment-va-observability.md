---
id: 019d8b40-b504-7001-b003-golang0000504
title: 第 20 課：生產部署和可觀察性
slug: bai-20-production-deployment-va-observability
description: >-
  使用 slog/zerolog 進行結構化日誌記錄。 Prometheus 指標、Grafana 儀表板。開啟遙測追蹤。 Kubernetes
  部署。藍綠部署，金絲雀發布。生產檢查表。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: 第 5 部分：微服務、測試與生產
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2009" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2009)"/>

  <!-- Decorations -->
  <g>
    <circle cx="977" cy="141" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="854" cy="178" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="731" cy="215" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="608" cy="252" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="289" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="171" x2="1100" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="201" x2="1050" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.5166604983954,158 993.5166604983954,184 971,197 948.4833395016046,184 948.4833395016046,158 971,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：生產部署 &</tspan>
      <tspan x="60" dy="42">可觀察性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：微服務、測試與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-structured-logging"><strong>1. 結構化日誌記錄</strong></h2>

<h3 id="1-1-slog"><strong>1.1. slog（Go 1.21+ stdlib）</strong></h3>

<pre><code class="language-go">package main

import (
    "context"
    "log/slog"
    "os"
)

func setupLogger(env string) *slog.Logger {
    var handler slog.Handler
    
    if env == "production" {
        // JSON format for production (structured, parseable)
        handler = slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
            Level:     slog.LevelInfo,
            AddSource: true,
        })
    } else {
        // Text format for development (human-readable)
        handler = slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
            Level: slog.LevelDebug,
        })
    }
    
    logger := slog.New(handler)
    slog.SetDefault(logger)
    
    return logger
}

func main() {
    logger := setupLogger(os.Getenv("APP_ENV"))
    
    // Basic logging
    logger.Info("Server starting",
        "port", 8080,
        "version", "1.2.3",
    )
    
    // With context
    logger.InfoContext(ctx, "Request processed",
        "method", "GET",
        "path", "/api/users",
        "status", 200,
        "duration_ms", 45,
    )
    
    // Grouped attributes
    logger.Info("User action",
        slog.Group("user",
            slog.Uint64("id", 123),
            slog.String("email", "duy@xdev.asia"),
        ),
        slog.Group("request",
            slog.String("method", "POST"),
            slog.String("path", "/api/orders"),
        ),
    )
    
    // Child logger with persistent fields
    reqLogger := logger.With(
        "request_id", "abc-123",
        "user_id", 42,
    )
    reqLogger.Info("Processing order")
    reqLogger.Info("Order created", "order_id", 100)
}
</code></pre>

<h3 id="1-2-logging-middleware"><strong>1.2.日誌中間件</strong></h3>

<pre><code class="language-go">func LoggingMiddleware(logger *slog.Logger) gin.HandlerFunc {
    return func(c *gin.Context) {
        start := time.Now()
        path := c.Request.URL.Path
        
        // Process request
        c.Next()
        
        duration := time.Since(start)
        status := c.Writer.Status()
        
        attrs := []slog.Attr{
            slog.String("method", c.Request.Method),
            slog.String("path", path),
            slog.Int("status", status),
            slog.Duration("duration", duration),
            slog.String("client_ip", c.ClientIP()),
            slog.String("user_agent", c.Request.UserAgent()),
        }
        
        if requestID, exists := c.Get("request_id"); exists {
            attrs = append(attrs, slog.String("request_id", requestID.(string)))
        }
        
        level := slog.LevelInfo
        if status >= 500 {
            level = slog.LevelError
        } else if status >= 400 {
            level = slog.LevelWarn
        }
        
        logger.LogAttrs(c.Request.Context(), level, "HTTP Request", attrs...)
    }
}
</code></pre>

<h2 id="2-prometheus-metrics"><strong>2. 普羅米修斯指標</strong></h2>

<pre><code class="language-bash">go get github.com/prometheus/client_golang
</code></pre>

<pre><code class="language-go">package metrics

import (
    "strconv"
    "time"
    
    "github.com/gin-gonic/gin"
    "github.com/prometheus/client_golang/prometheus"
    "github.com/prometheus/client_golang/prometheus/promauto"
    "github.com/prometheus/client_golang/prometheus/promhttp"
)

var (
    httpRequestsTotal = promauto.NewCounterVec(
        prometheus.CounterOpts{
            Name: "http_requests_total",
            Help: "Total number of HTTP requests",
        },
        []string{"method", "path", "status"},
    )
    
    httpRequestDuration = promauto.NewHistogramVec(
        prometheus.HistogramOpts{
            Name:    "http_request_duration_seconds",
            Help:    "HTTP request duration in seconds",
            Buckets: []float64{.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10},
        },
        []string{"method", "path"},
    )
    
    activeConnections = promauto.NewGauge(prometheus.GaugeOpts{
        Name: "http_active_connections",
        Help: "Number of active HTTP connections",
    })
    
    dbQueryDuration = promauto.NewHistogramVec(
        prometheus.HistogramOpts{
            Name:    "db_query_duration_seconds",
            Help:    "Database query duration",
            Buckets: prometheus.DefBuckets,
        },
        []string{"operation", "table"},
    )
)

func MetricsMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        activeConnections.Inc()
        start := time.Now()
        
        c.Next()
        
        activeConnections.Dec()
        duration := time.Since(start).Seconds()
        status := strconv.Itoa(c.Writer.Status())
        
        httpRequestsTotal.WithLabelValues(c.Request.Method, c.FullPath(), status).Inc()
        httpRequestDuration.WithLabelValues(c.Request.Method, c.FullPath()).Observe(duration)
    }
}

// Expose metrics endpoint
// r.GET("/metrics", gin.WrapH(promhttp.Handler()))
</code></pre>

<h2 id="3-kubernetes-deployment"><strong>3.Kubernetes部署</strong></h2>

<pre><code class="language-yaml"># k8s/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-api
  labels:
    app: go-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: go-api
  template:
    metadata:
      labels:
        app: go-api
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8080"
        prometheus.io/path: "/metrics"
    spec:
      containers:
        - name: go-api
          image: ghcr.io/myorg/go-api:latest
          ports:
            - containerPort: 8080
          env:
            - name: APP_ENV
              value: production
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: db-secret
                  key: password
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 500m
              memory: 256Mi
          livenessProbe:
            httpGet:
              path: /healthz
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /readyz
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
          startupProbe:
            httpGet:
              path: /healthz
              port: 8080
            failureThreshold: 30
            periodSeconds: 2
      terminationGracePeriodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  name: go-api
spec:
  selector:
    app: go-api
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: go-api
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: go-api
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
</code></pre>

<h2 id="4-configuration"><strong>4. 配置管理</strong></h2>

<pre><code class="language-go">package config

import (
    "log"
    "os"
    "strconv"
    "time"
)

type Config struct {
    App      AppConfig
    DB       DBConfig
    Redis    RedisConfig
    JWT      JWTConfig
}

type AppConfig struct {
    Env  string
    Port int
}

type DBConfig struct {
    Host     string
    Port     int
    User     string
    Password string
    Name     string
    SSLMode  string
    MaxConns int
}

type RedisConfig struct {
    Addr     string
    Password string
    DB       int
}

type JWTConfig struct {
    AccessSecret  string
    RefreshSecret string
    AccessTTL     time.Duration
    RefreshTTL    time.Duration
}

func Load() *Config {
    return &Config{
        App: AppConfig{
            Env:  getEnv("APP_ENV", "development"),
            Port: getEnvInt("APP_PORT", 8080),
        },
        DB: DBConfig{
            Host:     getEnv("DB_HOST", "localhost"),
            Port:     getEnvInt("DB_PORT", 5432),
            User:     getEnv("DB_USER", "app"),
            Password: getEnvRequired("DB_PASSWORD"),
            Name:     getEnv("DB_NAME", "appdb"),
            SSLMode:  getEnv("DB_SSLMODE", "disable"),
            MaxConns: getEnvInt("DB_MAX_CONNS", 25),
        },
        Redis: RedisConfig{
            Addr:     getEnv("REDIS_ADDR", "localhost:6379"),
            Password: getEnv("REDIS_PASSWORD", ""),
            DB:       getEnvInt("REDIS_DB", 0),
        },
        JWT: JWTConfig{
            AccessSecret:  getEnvRequired("JWT_ACCESS_SECRET"),
            RefreshSecret: getEnvRequired("JWT_REFRESH_SECRET"),
            AccessTTL:     15 * time.Minute,
            RefreshTTL:    7 * 24 * time.Hour,
        },
    }
}

func getEnv(key, fallback string) string {
    if v := os.Getenv(key); v != "" {
        return v
    }
    return fallback
}

func getEnvRequired(key string) string {
    v := os.Getenv(key)
    if v == "" {
        log.Fatalf("Required env var %s is not set", key)
    }
    return v
}

func getEnvInt(key string, fallback int) int {
    if v := os.Getenv(key); v != "" {
        i, err := strconv.Atoi(v)
        if err != nil {
            log.Fatalf("Invalid int value for %s: %s", key, v)
        }
        return i
    }
    return fallback
}
</code></pre>

<h2 id="5-production-checklist"><strong>5. 生產檢查表</strong></h2>

<table>
<thead><tr><th>類別</th><th>專案</th><th>狀態</th></tr></thead>
<tbody>
<tr><td>安全性</td><td>已啟用 HTTPS/TLS</td><td>⑨</td></tr>
<tr><td>安全性</td><td>JWT 來自環境變數的秘密</td><td>⑨</td></tr>
<tr><td>安全性</td><td>CORS 正確配置</td><td>⑨</td></tr>
<tr><td>安全性</td><td>已啟用速率限制</td><td>⑨</td></tr>
<tr><td>安全性</td><td>所有端點上的輸入驗證</td><td>⑨</td></tr>
<tr><td>安全性</td><td>SQL注入預防（參數化查詢）</td><td>⑨</td></tr>
<tr><td>可靠性</td><td>優雅關機</td><td>⑨</td></tr>
<tr><td>可靠性</td><td>健康檢查（活躍度+準備度）</td><td>⑨</td></tr>
<tr><td>可靠性</td><td>外部呼叫斷路器</td><td>⑨</td></tr>
<tr><td>可靠性</td><td>使用指數退避重試</td><td>⑨</td></tr>
<tr><td>可靠性</td><td>連接池（DB、Redis、HTTP）</td><td>⑨</td></tr>
<tr><td>可觀察性</td><td>結構化日誌記錄 (JSON)</td><td>⑨</td></tr>
<tr><td>可觀察性</td><td>普羅米修斯指標</td><td>⑨</td></tr>
<tr><td>可觀察性</td><td>分散式追蹤</td><td>⑨</td></tr>
<tr><td>可觀察性</td><td>錯誤跟踪（哨兵）</td><td>⑨</td></tr>
<tr><td>效能</td><td>回應緩存（Redis）</td><td>⑨</td></tr>
<tr><td>效能</td><td>資料庫索引</td><td>⑨</td></tr>
<tr><td>效能</td><td>pprof 分析可用</td><td>⑨</td></tr>
<tr><td>開發營運</td><td>多階段 Docker 建置</td><td>⑨</td></tr>
<tr><td>開發營運</td><td>CI/CD 管道</td><td>⑨</td></tr>
<tr><td>開發營運</td><td>資料庫遷移是自動化的</td><td>⑨</td></tr>
<tr><td>開發營運</td><td>Kubernetes 清單</td><td>⑨</td></tr>
</tbody>
</table>

<p><strong>恭喜您完成 Golang：從基礎知識到進階系列！</strong> 您已經掌握了 Go 基礎、並發性、微服務的 Web 開發以及生產部署。繼續練習並建立真實的項目！</p>
