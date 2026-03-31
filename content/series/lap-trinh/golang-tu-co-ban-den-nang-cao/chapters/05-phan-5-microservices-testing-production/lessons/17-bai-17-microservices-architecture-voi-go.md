---
id: 019d8b40-b501-7001-b003-golang0000501
title: 'Bài 17: Microservices Architecture với Go'
slug: bai-17-microservices-architecture-voi-go
description: >-
  Microservices design principles, service decomposition. API Gateway pattern.
  Service discovery, circuit breaker. Distributed tracing, saga pattern.
  Go Kit, Go Micro frameworks.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Microservices, Testing & Production"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-microservices-overview"><strong>1. Microservices Overview</strong></h2>

<table>
<thead><tr><th>Aspect</th><th>Monolith</th><th>Microservices</th></tr></thead>
<tbody>
<tr><td>Deployment</td><td>All-or-nothing</td><td>Independent per service</td></tr>
<tr><td>Scaling</td><td>Scale everything</td><td>Scale individual services</td></tr>
<tr><td>Tech stack</td><td>Single language/framework</td><td>Polyglot</td></tr>
<tr><td>Team</td><td>Large team, shared codebase</td><td>Small teams per service</td></tr>
<tr><td>Complexity</td><td>Code complexity</td><td>Operational complexity</td></tr>
<tr><td>Data</td><td>Shared database</td><td>Database per service</td></tr>
</tbody>
</table>

<h2 id="2-project-structure"><strong>2. Project Structure</strong></h2>

<pre><code class="language-text">microservices/
├── api-gateway/
│   ├── main.go
│   ├── routes.go
│   └── proxy.go
├── services/
│   ├── user-service/
│   │   ├── cmd/
│   │   │   └── main.go
│   │   ├── internal/
│   │   │   ├── handler/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   └── model/
│   │   ├── proto/
│   │   ├── Dockerfile
│   │   └── go.mod
│   ├── order-service/
│   │   └── ... (same structure)
│   ├── product-service/
│   │   └── ...
│   └── notification-service/
│       └── ...
├── shared/
│   ├── proto/         # Shared protobuf definitions
│   ├── middleware/     # Common middleware
│   └── config/        # Shared configuration
├── docker-compose.yml
└── Makefile
</code></pre>

<h2 id="3-api-gateway"><strong>3. API Gateway</strong></h2>

<pre><code class="language-go">package gateway

import (
    "net/http"
    "net/http/httputil"
    "net/url"
    "strings"
    
    "github.com/gin-gonic/gin"
)

type ServiceConfig struct {
    Name    string
    URL     string
    Prefix  string
}

type Gateway struct {
    services map[string]*httputil.ReverseProxy
}

func NewGateway(configs []ServiceConfig) *Gateway {
    gw := &Gateway{
        services: make(map[string]*httputil.ReverseProxy),
    }
    
    for _, cfg := range configs {
        target, _ := url.Parse(cfg.URL)
        proxy := httputil.NewSingleHostReverseProxy(target)
        
        // Custom error handler
        proxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, err error) {
            w.WriteHeader(http.StatusBadGateway)
            w.Write([]byte(`{"error":"service unavailable"}`))
        }
        
        gw.services[cfg.Prefix] = proxy
    }
    
    return gw
}

func (gw *Gateway) ProxyHandler(c *gin.Context) {
    path := c.Request.URL.Path
    
    for prefix, proxy := range gw.services {
        if strings.HasPrefix(path, prefix) {
            // Strip prefix
            c.Request.URL.Path = strings.TrimPrefix(path, prefix)
            proxy.ServeHTTP(c.Writer, c.Request)
            return
        }
    }
    
    c.JSON(404, gin.H{"error": "service not found"})
}

func main() {
    gw := NewGateway([]ServiceConfig{
        {Name: "user", URL: "http://user-service:8081", Prefix: "/api/users"},
        {Name: "order", URL: "http://order-service:8082", Prefix: "/api/orders"},
        {Name: "product", URL: "http://product-service:8083", Prefix: "/api/products"},
    })
    
    r := gin.Default()
    r.Use(RateLimitMiddleware())
    r.Use(AuthMiddleware())
    
    r.Any("/api/*path", gw.ProxyHandler)
    r.Run(":8080")
}
</code></pre>

<h2 id="4-circuit-breaker"><strong>4. Circuit Breaker</strong></h2>

<pre><code class="language-bash">go get github.com/sony/gobreaker
</code></pre>

<pre><code class="language-go">package resilience

import (
    "fmt"
    "time"
    
    "github.com/sony/gobreaker"
)

func NewCircuitBreaker(name string) *gobreaker.CircuitBreaker {
    return gobreaker.NewCircuitBreaker(gobreaker.Settings{
        Name:        name,
        MaxRequests: 3,                // Half-open: allow 3 requests
        Interval:    60 * time.Second, // Reset counts after 60s
        Timeout:     30 * time.Second, // Open → Half-open after 30s
        ReadyToTrip: func(counts gobreaker.Counts) bool {
            // Open circuit after 5 consecutive failures
            return counts.ConsecutiveFailures >= 5
        },
        OnStateChange: func(name string, from, to gobreaker.State) {
            log.Printf("Circuit breaker %s: %s → %s", name, from, to)
        },
    })
}

// Usage trong service client
type UserClient struct {
    baseURL string
    cb      *gobreaker.CircuitBreaker
    client  *http.Client
}

func (c *UserClient) GetUser(ctx context.Context, id uint) (*User, error) {
    result, err := c.cb.Execute(func() (interface{}, error) {
        url := fmt.Sprintf("%s/users/%d", c.baseURL, id)
        
        req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)
        resp, err := c.client.Do(req)
        if err != nil {
            return nil, err
        }
        defer resp.Body.Close()
        
        if resp.StatusCode >= 500 {
            return nil, fmt.Errorf("server error: %d", resp.StatusCode)
        }
        
        var user User
        json.NewDecoder(resp.Body).Decode(&user)
        return &user, nil
    })
    
    if err != nil {
        return nil, err
    }
    return result.(*User), nil
}
</code></pre>

<h2 id="5-service-discovery"><strong>5. Service Discovery với Consul</strong></h2>

<pre><code class="language-bash">go get github.com/hashicorp/consul/api
</code></pre>

<pre><code class="language-go">package discovery

import (
    "fmt"
    "log"
    
    "github.com/hashicorp/consul/api"
)

type ServiceRegistry struct {
    client *api.Client
}

func NewServiceRegistry(addr string) (*ServiceRegistry, error) {
    config := api.DefaultConfig()
    config.Address = addr
    
    client, err := api.NewClient(config)
    if err != nil {
        return nil, err
    }
    
    return &ServiceRegistry{client: client}, nil
}

// Register service
func (r *ServiceRegistry) Register(name, host string, port int) error {
    return r.client.Agent().ServiceRegister(&api.AgentServiceRegistration{
        ID:      fmt.Sprintf("%s-%s-%d", name, host, port),
        Name:    name,
        Address: host,
        Port:    port,
        Check: &api.AgentServiceCheck{
            HTTP:                           fmt.Sprintf("http://%s:%d/health", host, port),
            Interval:                       "10s",
            Timeout:                        "5s",
            DeregisterCriticalServiceAfter: "30s",
        },
    })
}

// Discover service
func (r *ServiceRegistry) Discover(name string) (string, error) {
    services, _, err := r.client.Health().Service(name, "", true, nil)
    if err != nil {
        return "", err
    }
    
    if len(services) == 0 {
        return "", fmt.Errorf("no healthy instances of %s", name)
    }
    
    // Simple round-robin (production: dùng load balancer)
    svc := services[0]
    return fmt.Sprintf("http://%s:%d", svc.Service.Address, svc.Service.Port), nil
}

// Deregister on shutdown
func (r *ServiceRegistry) Deregister(serviceID string) error {
    return r.client.Agent().ServiceDeregister(serviceID)
}
</code></pre>

<h2 id="6-distributed-tracing"><strong>6. Distributed Tracing với OpenTelemetry</strong></h2>

<pre><code class="language-bash">go get go.opentelemetry.io/otel
go get go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp
go get go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin
</code></pre>

<pre><code class="language-go">package tracing

import (
    "context"
    
    "go.opentelemetry.io/otel"
    "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
    "go.opentelemetry.io/otel/sdk/resource"
    sdktrace "go.opentelemetry.io/otel/sdk/trace"
    semconv "go.opentelemetry.io/otel/semconv/v1.24.0"
)

func InitTracer(ctx context.Context, serviceName string) (func(), error) {
    exporter, err := otlptracehttp.New(ctx,
        otlptracehttp.WithEndpoint("jaeger:4318"),
        otlptracehttp.WithInsecure(),
    )
    if err != nil {
        return nil, err
    }
    
    tp := sdktrace.NewTracerProvider(
        sdktrace.WithBatcher(exporter),
        sdktrace.WithResource(resource.NewWithAttributes(
            semconv.SchemaURL,
            semconv.ServiceNameKey.String(serviceName),
        )),
    )
    
    otel.SetTracerProvider(tp)
    
    cleanup := func() {
        tp.Shutdown(ctx)
    }
    
    return cleanup, nil
}

// Usage in Gin
// r.Use(otelgin.Middleware("user-service"))
</code></pre>

<h2 id="7-saga-pattern"><strong>7. Saga Pattern (Distributed Transactions)</strong></h2>

<pre><code class="language-go">// Choreography-based saga
type OrderSaga struct {
    eventBus EventBus
}

// Mỗi service lắng nghe events và thực hiện compensation nếu cần
// Order flow: CreateOrder → ReserveInventory → ProcessPayment → ConfirmOrder
// Compensation: CancelOrder ← RestoreInventory ← RefundPayment

type SagaStep struct {
    Name       string
    Execute    func(ctx context.Context, data interface{}) error
    Compensate func(ctx context.Context, data interface{}) error
}

type SagaOrchestrator struct {
    steps []SagaStep
}

func (s *SagaOrchestrator) Run(ctx context.Context, data interface{}) error {
    completedSteps := make([]int, 0)
    
    for i, step := range s.steps {
        if err := step.Execute(ctx, data); err != nil {
            // Compensate completed steps in reverse
            for j := len(completedSteps) - 1; j >= 0; j-- {
                idx := completedSteps[j]
                if compErr := s.steps[idx].Compensate(ctx, data); compErr != nil {
                    log.Printf("Compensation failed for step %s: %v", s.steps[idx].Name, compErr)
                }
            }
            return fmt.Errorf("saga failed at step %s: %w", step.Name, err)
        }
        completedSteps = append(completedSteps, i)
    }
    
    return nil
}
</code></pre>

<p>Bài tiếp theo: <strong>Testing trong Go</strong> — unit tests, integration tests, mocking, và test patterns.</p>
