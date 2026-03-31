---
id: 019d8b40-b504-7001-b003-golang0000504
title: 'Bài 20: Production Deployment & Observability'
slug: bai-20-production-deployment-va-observability
description: >-
  Structured logging với slog/zerolog. Prometheus metrics, Grafana dashboards.
  OpenTelemetry tracing. Kubernetes deployment.
  Blue-green deployment, canary releases. Production checklist.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Microservices, Testing & Production"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-structured-logging"><strong>1. Structured Logging</strong></h2>

<h3 id="1-1-slog"><strong>1.1. slog (Go 1.21+ stdlib)</strong></h3>

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

<h3 id="1-2-logging-middleware"><strong>1.2. Logging Middleware</strong></h3>

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

<h2 id="2-prometheus-metrics"><strong>2. Prometheus Metrics</strong></h2>

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

<h2 id="3-kubernetes-deployment"><strong>3. Kubernetes Deployment</strong></h2>

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

<h2 id="4-configuration"><strong>4. Configuration Management</strong></h2>

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

<h2 id="5-production-checklist"><strong>5. Production Checklist</strong></h2>

<table>
<thead><tr><th>Category</th><th>Item</th><th>Status</th></tr></thead>
<tbody>
<tr><td>Security</td><td>HTTPS/TLS enabled</td><td>☐</td></tr>
<tr><td>Security</td><td>JWT secrets from env vars</td><td>☐</td></tr>
<tr><td>Security</td><td>CORS properly configured</td><td>☐</td></tr>
<tr><td>Security</td><td>Rate limiting enabled</td><td>☐</td></tr>
<tr><td>Security</td><td>Input validation on all endpoints</td><td>☐</td></tr>
<tr><td>Security</td><td>SQL injection prevention (parameterized queries)</td><td>☐</td></tr>
<tr><td>Reliability</td><td>Graceful shutdown</td><td>☐</td></tr>
<tr><td>Reliability</td><td>Health checks (liveness + readiness)</td><td>☐</td></tr>
<tr><td>Reliability</td><td>Circuit breakers for external calls</td><td>☐</td></tr>
<tr><td>Reliability</td><td>Retry with exponential backoff</td><td>☐</td></tr>
<tr><td>Reliability</td><td>Connection pooling (DB, Redis, HTTP)</td><td>☐</td></tr>
<tr><td>Observability</td><td>Structured logging (JSON)</td><td>☐</td></tr>
<tr><td>Observability</td><td>Prometheus metrics</td><td>☐</td></tr>
<tr><td>Observability</td><td>Distributed tracing</td><td>☐</td></tr>
<tr><td>Observability</td><td>Error tracking (Sentry)</td><td>☐</td></tr>
<tr><td>Performance</td><td>Response caching (Redis)</td><td>☐</td></tr>
<tr><td>Performance</td><td>Database indexes</td><td>☐</td></tr>
<tr><td>Performance</td><td>pprof profiling available</td><td>☐</td></tr>
<tr><td>DevOps</td><td>Multi-stage Docker build</td><td>☐</td></tr>
<tr><td>DevOps</td><td>CI/CD pipeline</td><td>☐</td></tr>
<tr><td>DevOps</td><td>Database migrations automated</td><td>☐</td></tr>
<tr><td>DevOps</td><td>Kubernetes manifests</td><td>☐</td></tr>
</tbody>
</table>

<p><strong>Chúc mừng bạn đã hoàn thành series Golang: Từ Cơ bản đến Nâng cao!</strong> Bạn đã nắm vững từ Go fundamentals, concurrency, web development đến microservices và production deployment. Hãy tiếp tục thực hành và xây dựng các dự án thực tế!</p>
