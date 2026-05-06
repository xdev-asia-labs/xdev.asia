---
id: 019c9617-fca3-7052-a885-88f8b8f0ba2a
title: 'Lesson 14: Microservices and Service Mesh in NGINX'
slug: bai-14-microservices-va-service-mesh-trong-nginx
description: >-
  A lesson on Microservices and Service Mesh with Nginx — service discovery, API Gateway patterns, rate limiting per service, circuit breakers, retry policies, distributed tracing, service mesh integration (Consul, Istio), sidecar pattern, canary deployments, and blue-green deployments.
duration_minutes: 245
is_free: true
video_url: null
sort_order: 14
section_title: "Part 5: Production & Advanced"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4627" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4627)"/>

  <!-- Decorations -->
  <g>
    <circle cx="851" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="602" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="853" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="604" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.2487113059643,159 997.2487113059643,187 973,201 948.7512886940357,187 948.7512886940357,159 973,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Microservices and Service Mesh</tspan>
      <tspan x="60" dy="42">trong NGINX</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Production &amp; Advanced</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-microservices-architecture-overview"><strong>1. Microservices Architecture Overview</strong></h2><h3 id="11-monolith-vs-microservices"><strong>1.1. Monolith vs Microservices</strong></h3><p><strong>Monolithic Architecture:</strong></p><pre><code>┌────────────────────────────────┐
│      Single Application        │
│  ┌──────────────────────────┐  │
│  │   Web Layer              │  │
│  ├──────────────────────────┤  │
│  │   Business Logic         │  │
│  ├──────────────────────────┤  │
│  │   Data Access            │  │
│  └──────────────────────────┘  │
│              │                 │
│              ▼                 │
│      ┌──────────────┐          │
│      │   Database   │          │
│      └──────────────┘          │
└────────────────────────────────┘
</code></pre><p><strong>Microservices Architecture:</strong></p><pre><code>                    ┌──────────────┐
                    │ API Gateway  │
                    │   (Nginx)    │
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    ┌───▼───┐         ┌───▼───┐         ┌───▼───┐
    │ User  │         │Order  │         │Product│
    │Service│         │Service│         │Service│
    └───┬───┘         └───┬───┘         └───┬───┘
        │                 │                  │
    ┌───▼───┐         ┌───▼───┐         ┌───▼───┐
    │User DB│         │Order  │         │Product│
    │       │         │  DB   │         │  DB   │
    └───────┘         └───────┘         └───────┘
</code></pre><h3 id="12-api-gateway-pattern"><strong>1.2. API Gateway Pattern</strong></h3><pre><code class="language-nginx"># API Gateway configuration
http {
    # Service discovery (will be populated dynamically)
    upstream user_service {
        server user-service-1:8081;
        server user-service-2:8081;
        server user-service-3:8081;
        keepalive 32;
    }
    
    upstream order_service {
        server order-service-1:8082;
        server order-service-2:8082;
        keepalive 32;
    }
    
    upstream product_service {
        server product-service-1:8083;
        server product-service-2:8083;
        keepalive 32;
    }
    
    upstream payment_service {
        server payment-service-1:8084;
        keepalive 16;
    }
    
    # Rate limiting per service
    limit_req_zone $binary_remote_addr zone=user_limit:10m rate=100r/s;
    limit_req_zone $binary_remote_addr zone=order_limit:10m rate=50r/s;
    limit_req_zone $binary_remote_addr zone=product_limit:10m rate=200r/s;
    limit_req_zone $binary_remote_addr zone=payment_limit:10m rate=10r/s;
    
    server {
        listen 80;
        server_name api.example.com;
        
        # Global headers
        add_header X-Gateway "nginx-api-gateway" always;
        
        # User service
        location /api/users {
            limit_req zone=user_limit burst=20 nodelay;
            
            proxy_pass http://user_service;
            include includes/proxy_params.conf;
            include includes/timeout_params.conf;
        }
        
        # Order service
        location /api/orders {
            limit_req zone=order_limit burst=10 nodelay;
            
            proxy_pass http://order_service;
            include includes/proxy_params.conf;
            include includes/timeout_params.conf;
        }
        
        # Product service
        location /api/products {
            limit_req zone=product_limit burst=50 nodelay;
            
            proxy_pass http://product_service;
            include includes/proxy_params.conf;
            include includes/timeout_params.conf;
        }
        
        # Payment service (stricter limits)
        location /api/payments {
            limit_req zone=payment_limit burst=5;
            limit_conn addr 5;
            
            proxy_pass http://payment_service;
            include includes/proxy_params.conf;
            
            # Longer timeout for payments
            proxy_read_timeout 60s;
        }
        
        # Health check aggregation
        location /health {
            access_log off;
            
            content_by_lua_block {
                local http = require "resty.http"
                local cjson = require "cjson"
                
                local services = {
                    {name = "user", url = "http://user-service-1:8081/health"},
                    {name = "order", url = "http://order-service-1:8082/health"},
                    {name = "product", url = "http://product-service-1:8083/health"},
                    {name = "payment", url = "http://payment-service-1:8084/health"}
                }
                
                local results = {}
                local all_healthy = true
                
                for _, service in ipairs(services) do
                    local httpc = http.new()
                    local res, err = httpc:request_uri(service.url, {
                        method = "GET",
                        keepalive_timeout = 60000,
                        keepalive_pool = 10
                    })
                    
                    if res and res.status == 200 then
                        results[service.name] = "healthy"
                    else
                        results[service.name] = "unhealthy"
                        all_healthy = false
                    end
                end
                
                ngx.status = all_healthy and 200 or 503
                ngx.say(cjson.encode(results))
            }
        }
    }
}
</code></pre><p><strong>Include files:</strong></p><pre><code class="language-nginx"># /etc/nginx/includes/proxy_params.conf
proxy_http_version 1.1;
proxy_set_header Connection "";

proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Request-ID $request_id;

# Add tracing headers
proxy_set_header X-B3-TraceId $request_id;
proxy_set_header X-B3-SpanId $request_id;
</code></pre><pre><code class="language-nginx"># /etc/nginx/includes/timeout_params.conf
proxy_connect_timeout 5s;
proxy_send_timeout 10s;
proxy_read_timeout 30s;

proxy_next_upstream error timeout http_502 http_503 http_504;
proxy_next_upstream_tries 2;
proxy_next_upstream_timeout 10s;
</code></pre><h3 id="13-service-mesh-benefits"><strong>1.3. Service Mesh Benefits</strong></h3><p><strong>Without Service Mesh:</strong></p><pre><code>Service A → Service B (manual retries, timeouts in code)
Service A → Service C (manual circuit breaker)
Service B → Service D (manual tracing)
</code></pre><p><strong>With Service Mesh:</strong></p><pre><code>Service A → Sidecar → Sidecar → Service B
    ↓          ↓         ↓          ↓
  Logic    Retries   Tracing   Circuit Breaker
</code></pre><hr><h2 id="2-service-discovery"><strong>2. Service Discovery</strong></h2><h3 id="21-static-configuration"><strong>2.1. Static Configuration</strong></h3><pre><code class="language-nginx"># Simple static upstream
upstream user_service {
    server 10.0.1.10:8080;
    server 10.0.1.11:8080;
    server 10.0.1.12:8080;
}

# Problems:
# - Manual updates required
# - No dynamic scaling
# - Hard to manage in cloud environments
</code></pre><h3 id="22-dns-based-service-discovery"><strong>2.2. DNS-based Service Discovery</strong></h3><pre><code class="language-nginx"># DNS-based discovery
upstream user_service {
    # Resolve DNS on each request
    server user-service.internal:8080 resolve;
    
    # Or with resolver directive
    # resolver 10.0.0.2 valid=10s;
}

http {
    resolver 10.0.0.2 valid=10s;
    resolver_timeout 5s;
    
    upstream dynamic_backend {
        zone backend 64k;
        server backend.internal:8080 resolve;
    }
}
</code></pre><h3 id="23-consul-service-discovery"><strong>2.3. Consul Service Discovery</strong></h3><p><strong>Install Consul:</strong></p><pre><code class="language-bash"># Download Consul
wget https://releases.hashicorp.com/consul/1.17.0/consul_1.17.0_linux_amd64.zip
unzip consul_1.17.0_linux_amd64.zip
sudo mv consul /usr/local/bin/

# Start Consul agent
consul agent -dev
</code></pre><p><strong>Register services with Consul:</strong></p><pre><code class="language-json">// user-service.json
{
  "service": {
    "name": "user-service",
    "tags": ["v1", "production"],
    "port": 8080,
    "check": {
      "http": "http://localhost:8080/health",
      "interval": "10s",
      "timeout": "1s"
    }
  }
}
</code></pre><pre><code class="language-bash"># Register service
consul services register user-service.json
</code></pre><p><strong>Nginx with Consul Template:</strong></p><pre><code class="language-bash"># Install Consul Template
wget https://releases.hashicorp.com/consul-template/0.34.0/consul-template_0.34.0_linux_amd64.zip
unzip consul-template_0.34.0_linux_amd64.zip
sudo mv consul-template /usr/local/bin/
</code></pre><p><strong>Template file:</strong></p><pre><code class="language-nginx"># /etc/nginx/templates/upstream.conf.ctmpl
{{range services}}
upstream {{.Name}} {
    zone {{.Name}} 64k;
    {{range service .Name}}
    server {{.Address}}:{{.Port}} max_fails=3 fail_timeout=30s;
    {{end}}
    keepalive 32;
}
{{end}}

server {
    listen 80;
    
    {{range services}}
    location /api/{{.Name}} {
        proxy_pass http://{{.Name}};
        include /etc/nginx/includes/proxy_params.conf;
    }
    {{end}}
}
</code></pre><p><strong>Run Consul Template:</strong></p><pre><code class="language-bash">consul-template \
    -template "/etc/nginx/templates/upstream.conf.ctmpl:/etc/nginx/conf.d/upstream.conf:nginx -s reload" \
    -consul-addr "localhost:8500"
</code></pre><p><strong>Systemd service:</strong></p><pre><code class="language-ini"># /etc/systemd/system/consul-template.service
[Unit]
Description=Consul Template
Requires=network-online.target
After=network-online.target

[Service]
Type=simple
User=nginx
Group=nginx
ExecStart=/usr/local/bin/consul-template \
    -template "/etc/nginx/templates/upstream.conf.ctmpl:/etc/nginx/conf.d/upstream.conf:nginx -s reload" \
    -consul-addr "localhost:8500"
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=10s

[Install]
WantedBy=multi-user.target
</code></pre><h3 id="24-kubernetes-service-discovery"><strong>2.4. Kubernetes Service Discovery</strong></h3><pre><code class="language-yaml"># kubernetes-ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-gateway
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /api/users
        pathType: Prefix
        backend:
          service:
            name: user-service
            port:
              number: 8080
      - path: /api/orders
        pathType: Prefix
        backend:
          service:
            name: order-service
            port:
              number: 8080
      - path: /api/products
        pathType: Prefix
        backend:
          service:
            name: product-service
            port:
              number: 8080
</code></pre><hr><h2 id="3-circuit-breaker-pattern"><strong>3. Circuit Breaker Pattern</strong></h2><h3 id="31-basic-circuit-breaker"><strong>3.1. Basic Circuit Breaker</strong></h3><pre><code class="language-nginx"># Circuit breaker with passive health checks
upstream backend {
    server backend1.example.com:8080 max_fails=3 fail_timeout=30s;
    server backend2.example.com:8080 max_fails=3 fail_timeout=30s;
    server backend3.example.com:8080 max_fails=3 fail_timeout=30s;
}

server {
    location /api/ {
        proxy_pass http://backend;
        
        # Circuit breaker behavior
        proxy_next_upstream error timeout http_502 http_503 http_504;
        proxy_next_upstream_tries 2;
        proxy_next_upstream_timeout 5s;
        
        # If all backends fail, return cached response
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        
        # Timeouts
        proxy_connect_timeout 2s;
        proxy_read_timeout 5s;
    }
}
</code></pre><h3 id="32-advanced-circuit-breaker-with-lua"><strong>3.2. Advanced Circuit Breaker with Lua</strong></h3><pre><code class="language-nginx">http {
    lua_shared_dict circuit_breaker 10m;
    
    init_by_lua_block {
        -- Circuit breaker configuration
        circuit_breaker = {
            threshold = 5,           -- Open after 5 failures
            timeout = 30,            -- Try again after 30s
            half_open_requests = 1   -- Allow 1 request when half-open
        }
    }
    
    server {
        location /api/payment {
            access_by_lua_block {
                local cb = ngx.shared.circuit_breaker
                local key = "payment_service"
                
                -- Get circuit state
                local failures = cb:get(key .. ":failures") or 0
                local state = cb:get(key .. ":state") or "closed"
                local last_failure = cb:get(key .. ":last_failure") or 0
                
                -- Check if circuit is open
                if state == "open" then
                    local now = ngx.now()
                    if now - last_failure &lt; circuit_breaker.timeout then
                        ngx.status = 503
                        ngx.say("Circuit breaker is open")
                        return ngx.exit(503)
                    else
                        -- Move to half-open
                        cb:set(key .. ":state", "half-open")
                        state = "half-open"
                    end
                end
                
                -- Half-open: allow limited requests
                if state == "half-open" then
                    local half_open_count = cb:incr(key .. ":half_open_count", 1, 0)
                    if half_open_count &gt; circuit_breaker.half_open_requests then
                        ngx.status = 503
                        ngx.say("Circuit breaker is half-open, try again")
                        return ngx.exit(503)
                    end
                end
            }
            
            proxy_pass http://payment_service;
            
            log_by_lua_block {
                local cb = ngx.shared.circuit_breaker
                local key = "payment_service"
                local status = ngx.status
                
                if status &gt;= 500 then
                    -- Increment failure count
                    local failures = cb:incr(key .. ":failures", 1, 0)
                    cb:set(key .. ":last_failure", ngx.now())
                    
                    -- Open circuit if threshold reached
                    if failures &gt;= circuit_breaker.threshold then
                        cb:set(key .. ":state", "open")
                        ngx.log(ngx.ERR, "Circuit breaker opened for " .. key)
                    end
                else
                    -- Success - reset or close circuit
                    local state = cb:get(key .. ":state")
                    if state == "half-open" then
                        cb:set(key .. ":state", "closed")
                        cb:set(key .. ":failures", 0)
                        cb:set(key .. ":half_open_count", 0)
                        ngx.log(ngx.INFO, "Circuit breaker closed for " .. key)
                    elseif state == "closed" then
                        cb:set(key .. ":failures", 0)
                    end
                end
            }
        }
    }
}
</code></pre><h3 id="33-circuit-breaker-monitoring"><strong>3.3. Circuit Breaker Monitoring</strong></h3><pre><code class="language-nginx">server {
    listen 8080;
    
    location /circuit-breaker/status {
        access_log off;
        
        content_by_lua_block {
            local cb = ngx.shared.circuit_breaker
            local cjson = require "cjson"
            
            local services = {"payment_service", "order_service", "user_service"}
            local status = {}
            
            for _, service in ipairs(services) do
                status[service] = {
                    state = cb:get(service .. ":state") or "closed",
                    failures = cb:get(service .. ":failures") or 0,
                    last_failure = cb:get(service .. ":last_failure") or 0
                }
            end
            
            ngx.say(cjson.encode(status))
        }
    }
}
</code></pre><hr><h2 id="4-retry-policies"><strong>4. Retry Policies</strong></h2><h3 id="41-basic-retry-configuration"><strong>4.1. Basic Retry Configuration</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    location /api/ {
        proxy_pass http://backend;
        
        # Retry on these conditions
        proxy_next_upstream error timeout http_502 http_503 http_504;
        
        # Maximum retry attempts
        proxy_next_upstream_tries 3;
        
        # Total timeout for all retries
        proxy_next_upstream_timeout 10s;
        
        # Connection timeout
        proxy_connect_timeout 2s;
        proxy_send_timeout 5s;
        proxy_read_timeout 5s;
    }
}
</code></pre><h3 id="42-exponential-backoff"><strong>4.2. Exponential Backoff</strong></h3><pre><code class="language-nginx">http {
    lua_shared_dict retry_state 10m;
    
    server {
        location /api/with-backoff {
            rewrite_by_lua_block {
                local retry_state = ngx.shared.retry_state
                local key = ngx.var.request_id
                
                local attempt = retry_state:incr(key, 1, 0)
                
                if attempt &gt; 1 then
                    -- Exponential backoff: 2^(attempt-1) * 100ms
                    local delay = math.pow(2, attempt - 1) * 0.1
                    ngx.sleep(delay)
                end
                
                -- Max 3 attempts
                if attempt &gt; 3 then
                    ngx.status = 503
                    ngx.say("Max retries exceeded")
                    return ngx.exit(503)
                end
            }
            
            proxy_pass http://backend;
            
            log_by_lua_block {
                local retry_state = ngx.shared.retry_state
                local key = ngx.var.request_id
                
                -- Clean up on success
                if ngx.status &lt; 500 then
                    retry_state:delete(key)
                end
            }
        }
    }
}
</code></pre><h3 id="43-retry-budget"><strong>4.3. Retry Budget</strong></h3><pre><code class="language-nginx">http {
    lua_shared_dict retry_budget 10m;
    
    init_by_lua_block {
        -- Allow 10% of requests to be retries
        retry_budget_limit = 0.1
    }
    
    server {
        location /api/ {
            access_by_lua_block {
                local budget = ngx.shared.retry_budget
                
                -- Get counters
                local total = budget:get("total_requests") or 0
                local retries = budget:get("total_retries") or 0
                
                -- Check if this is a retry
                local is_retry = ngx.var.arg_retry == "1"
                
                if is_retry then
                    local retry_ratio = retries / (total + 1)
                    if retry_ratio &gt;= retry_budget_limit then
                        ngx.status = 503
                        ngx.say("Retry budget exceeded")
                        return ngx.exit(503)
                    end
                    budget:incr("total_retries", 1, 0)
                end
                
                budget:incr("total_requests", 1, 0)
            }
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><hr><h2 id="5-rate-limiting-per-service"><strong>5. Rate Limiting per Service</strong></h2><h3 id="51-service-specific-rate-limits"><strong>5.1. Service-specific Rate Limits</strong></h3><pre><code class="language-nginx">http {
    # Different limits for different services
    limit_req_zone $binary_remote_addr zone=user_svc:10m rate=100r/s;
    limit_req_zone $binary_remote_addr zone=order_svc:10m rate=50r/s;
    limit_req_zone $binary_remote_addr zone=product_svc:10m rate=200r/s;
    limit_req_zone $binary_remote_addr zone=payment_svc:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=admin_svc:10m rate=5r/s;
    
    server {
        listen 80;
        
        # User service - high limit
        location /api/users {
            limit_req zone=user_svc burst=200 nodelay;
            proxy_pass http://user_service;
        }
        
        # Order service - medium limit
        location /api/orders {
            limit_req zone=order_svc burst=100 nodelay;
            proxy_pass http://order_service;
        }
        
        # Product service - highest limit (read-heavy)
        location /api/products {
            limit_req zone=product_svc burst=400 nodelay;
            proxy_pass http://product_service;
        }
        
        # Payment service - strict limit (critical)
        location /api/payments {
            limit_req zone=payment_svc burst=5;
            limit_conn addr 3;
            proxy_pass http://payment_service;
        }
        
        # Admin service - very strict
        location /api/admin {
            limit_req zone=admin_svc burst=2;
            limit_conn addr 1;
            
            # Also require auth
            auth_basic "Admin Area";
            auth_basic_user_file /etc/nginx/.htpasswd;
            
            proxy_pass http://admin_service;
        }
    }
}
</code></pre><h3 id="52-per-user-rate-limiting"><strong>5.2. Per-user Rate Limiting</strong></h3><pre><code class="language-nginx">http {
    # Extract user ID from JWT or cookie
    map $http_authorization $user_id {
        default "anonymous";
        ~*Bearer\s+([A-Za-z0-9-_.]+) $1;
    }
    
    # Rate limit by user ID
    limit_req_zone $user_id zone=per_user:10m rate=50r/s;
    
    # Different limits for different user tiers
    map $user_id $user_tier {
        default "free";
        ~*premium_ "premium";
        ~*enterprise_ "enterprise";
    }
    
    map $user_tier $rate_limit_zone {
        free per_user_free;
        premium per_user_premium;
        enterprise per_user_enterprise;
    }
    
    limit_req_zone $user_id zone=per_user_free:10m rate=10r/s;
    limit_req_zone $user_id zone=per_user_premium:10m rate=50r/s;
    limit_req_zone $user_id zone=per_user_enterprise:10m rate=200r/s;
    
    server {
        location /api/ {
            # Apply rate limit based on user tier
            limit_req zone=$rate_limit_zone burst=20 nodelay;
            
            proxy_pass http://backend;
            
            # Add rate limit info to response
            add_header X-RateLimit-Tier $user_tier;
        }
    }
}
</code></pre><h3 id="53-token-bucket-algorithm"><strong>5.3. Token Bucket Algorithm</strong></h3><pre><code class="language-nginx">http {
    lua_shared_dict token_bucket 10m;
    
    server {
        location /api/ {
            access_by_lua_block {
                local tb = ngx.shared.token_bucket
                local user_id = ngx.var.http_x_user_id or ngx.var.remote_addr
                
                -- Token bucket configuration
                local capacity = 100      -- Max tokens
                local refill_rate = 10    -- Tokens per second
                
                -- Get current state
                local key = "tb:" .. user_id
                local tokens = tb:get(key .. ":tokens") or capacity
                local last_refill = tb:get(key .. ":last_refill") or ngx.now()
                
                -- Refill tokens
                local now = ngx.now()
                local time_passed = now - last_refill
                local new_tokens = math.min(capacity, tokens + (time_passed * refill_rate))
                
                -- Check if request allowed
                if new_tokens &gt;= 1 then
                    -- Allow request
                    tb:set(key .. ":tokens", new_tokens - 1)
                    tb:set(key .. ":last_refill", now)
                    
                    -- Add headers
                    ngx.header["X-RateLimit-Remaining"] = math.floor(new_tokens - 1)
                    ngx.header["X-RateLimit-Limit"] = capacity
                else
                    -- Rate limited
                    ngx.status = 429
                    ngx.header["Retry-After"] = math.ceil((1 - new_tokens) / refill_rate)
                    ngx.say("Rate limit exceeded")
                    return ngx.exit(429)
                end
            }
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><hr><h2 id="6-distributed-tracing"><strong>6. Distributed Tracing</strong></h2><h3 id="61-opentelemetry-integration"><strong>6.1. OpenTelemetry Integration</strong></h3><pre><code class="language-nginx">http {
    # Generate unique request ID
    map $request_id $trace_id {
        default $request_id;
    }
    
    log_format trace '$remote_addr - [$time_local] "$request" '
                    '$status $body_bytes_sent '
                    'trace_id=$trace_id '
                    'span_id=$request_id '
                    'parent_span=$http_x_parent_span '
                    'service=api-gateway '
                    'duration=$request_time';
    
    access_log /var/log/nginx/trace.log trace;
    
    server {
        listen 80;
        
        location /api/ {
            # Add tracing headers
            proxy_set_header X-Trace-ID $trace_id;
            proxy_set_header X-Span-ID $request_id;
            proxy_set_header X-Parent-Span $request_id;
            
            # Service name
            proxy_set_header X-Service-Name "api-gateway";
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="62-jaeger-integration"><strong>6.2. Jaeger Integration</strong></h3><pre><code class="language-nginx">http {
    lua_shared_dict tracing 10m;
    
    init_by_lua_block {
        local jaeger = require "jaeger"
        tracer = jaeger.new_tracer("nginx-gateway", {
            sampler = {
                type = "const",
                param = 1  -- Sample all requests
            },
            reporter = {
                endpoint = "http://jaeger:14268/api/traces"
            }
        })
    }
    
    server {
        location /api/ {
            access_by_lua_block {
                local span = tracer:start_span("nginx-gateway")
                span:set_tag("http.method", ngx.var.request_method)
                span:set_tag("http.url", ngx.var.request_uri)
                span:set_tag("http.host", ngx.var.host)
                
                -- Store span for later
                ngx.ctx.span = span
            }
            
            proxy_pass http://backend;
            
            # Forward trace context
            proxy_set_header uber-trace-id $http_uber_trace_id;
            
            log_by_lua_block {
                local span = ngx.ctx.span
                if span then
                    span:set_tag("http.status_code", ngx.status)
                    span:finish()
                end
            }
        }
    }
}
</code></pre><h3 id="63-zipkin-integration"><strong>6.3. Zipkin Integration</strong></h3><pre><code class="language-nginx">http {
    # Zipkin headers
    map $http_x_b3_traceid $trace_id {
        default $request_id;
        ~.+ $http_x_b3_traceid;
    }
    
    map $http_x_b3_spanid $span_id {
        default $request_id;
        ~.+ $http_x_b3_spanid;
    }
    
    server {
        location /api/ {
            # B3 propagation headers
            proxy_set_header X-B3-TraceId $trace_id;
            proxy_set_header X-B3-SpanId $span_id;
            proxy_set_header X-B3-ParentSpanId $span_id;
            proxy_set_header X-B3-Sampled "1";
            
            proxy_pass http://backend;
            
            # Log tracing info
            access_log /var/log/nginx/trace.log;
        }
    }
}
</code></pre><hr><h2 id="7-service-mesh-integration"><strong>7. Service Mesh Integration</strong></h2><h3 id="71-istio-sidecar-pattern"><strong>7.1. Istio Sidecar Pattern</strong></h3><p><strong>Kubernetes deployment with Istio:</strong></p><pre><code class="language-yaml"># deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
        version: v1
      annotations:
        sidecar.istio.io/inject: "true"
    spec:
      containers:
      - name: user-service
        image: user-service:v1
        ports:
        - containerPort: 8080
</code></pre><p><strong>Istio VirtualService:</strong></p><pre><code class="language-yaml"># virtualservice.yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: user-service
spec:
  hosts:
  - user-service
  http:
  - match:
    - headers:
        x-user-tier:
          exact: premium
    route:
    - destination:
        host: user-service
        subset: v2
      weight: 100
  - route:
    - destination:
        host: user-service
        subset: v1
      weight: 90
    - destination:
        host: user-service
        subset: v2
      weight: 10
</code></pre><p><strong>Istio DestinationRule:</strong></p><pre><code class="language-yaml"># destinationrule.yaml
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: user-service
spec:
  host: user-service
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 50
        http2MaxRequests: 100
        maxRequestsPerConnection: 2
    loadBalancer:
      simple: LEAST_REQUEST
    outlierDetection:
      consecutiveErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
</code></pre><h3 id="72-consul-connect"><strong>7.2. Consul Connect</strong></h3><p><strong>Service definition with Connect:</strong></p><pre><code class="language-json">{
  "service": {
    "name": "user-service",
    "port": 8080,
    "connect": {
      "sidecar_service": {
        "port": 20000,
        "proxy": {
          "upstreams": [
            {
              "destination_name": "order-service",
              "local_bind_port": 8081
            },
            {
              "destination_name": "product-service",
              "local_bind_port": 8082
            }
          ],
          "config": {
            "protocol": "http",
            "local_request_timeout_ms": 5000
          }
        }
      }
    }
  }
}
</code></pre><p><strong>Nginx with Consul Connect:</strong></p><pre><code class="language-nginx">upstream order_service {
    # Connect to Consul Connect sidecar
    server 127.0.0.1:8081;
    keepalive 32;
}

upstream product_service {
    server 127.0.0.1:8082;
    keepalive 32;
}

server {
    listen 8080;
    
    location /api/orders {
        proxy_pass http://order_service;
    }
    
    location /api/products {
        proxy_pass http://product_service;
    }
}
</code></pre><h3 id="73-linkerd-integration"><strong>7.3. Linkerd Integration</strong></h3><p><strong>Linkerd proxy injection:</strong></p><pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-gateway
  annotations:
    linkerd.io/inject: enabled
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx-gateway
  template:
    metadata:
      labels:
        app: nginx-gateway
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
</code></pre><p><strong>Service profile for retry budget:</strong></p><pre><code class="language-yaml">apiVersion: linkerd.io/v1alpha2
kind: ServiceProfile
metadata:
  name: user-service
spec:
  routes:
  - name: GET /api/users
    condition:
      method: GET
      pathRegex: /api/users/.*
    responseClasses:
    - condition:
        status:
          min: 500
          max: 599
      isFailure: true
    retries:
      limit: 3
      budget:
        minRetriesPerSecond: 10
        ttl: 10s
        retryRatio: 0.2
</code></pre><hr><h2 id="8-canary-deployments"><strong>8. Canary Deployments</strong></h2><h3 id="81-basic-canary-with-weight"><strong>8.1. Basic Canary with Weight</strong></h3><pre><code class="language-nginx">upstream user_service_v1 {
    server user-v1-1:8080;
    server user-v1-2:8080;
}

upstream user_service_v2 {
    server user-v2-1:8080;
    server user-v2-2:8080;
}

# Split clients based on IP
split_clients "${remote_addr}" $version {
    90% "v1";
    10% "v2";
}

server {
    location /api/users {
        if ($version = "v1") {
            proxy_pass http://user_service_v1;
        }
        
        if ($version = "v2") {
            proxy_pass http://user_service_v2;
        }
        
        add_header X-Version $version;
    }
}
</code></pre><h3 id="82-header-based-canary"><strong>8.2. Header-based Canary</strong></h3><pre><code class="language-nginx"># Route by header
map $http_x_canary $backend {
    default user_service_v1;
    "true" user_service_v2;
}

upstream user_service_v1 {
    server user-v1:8080;
}

upstream user_service_v2 {
    server user-v2:8080;
}

server {
    location /api/users {
        proxy_pass http://$backend;
        add_header X-Backend $backend;
    }
}

# Usage:
# Normal: curl http://api.example.com/api/users
# Canary: curl -H "X-Canary: true" http://api.example.com/api/users
</code></pre><h3 id="83-progressive-canary-rollout"><strong>8.3. Progressive Canary Rollout</strong></h3><pre><code class="language-nginx"># Gradually increase canary traffic
map $time_iso8601 $canary_percentage {
    ~2024-01-01 10;
    ~2024-01-02 25;
    ~2024-01-03 50;
    ~2024-01-04 75;
    default 100;
}

split_clients "${remote_addr}${http_user_agent}" $version {
    ${canary_percentage}% "v2";
    * "v1";
}

server {
    location /api/users {
        if ($version = "v1") {
            proxy_pass http://user_service_v1;
        }
        
        if ($version = "v2") {
            proxy_pass http://user_service_v2;
        }
    }
}
</code></pre><h3 id="84-feature-flag-based-canary"><strong>8.4. Feature Flag-based Canary</strong></h3><pre><code class="language-nginx">http {
    lua_shared_dict feature_flags 10m;
    
    init_by_lua_block {
        local ff = ngx.shared.feature_flags
        ff:set("new_ui_enabled", "false")
        ff:set("new_ui_percentage", 10)
    }
    
    server {
        location /api/users {
            access_by_lua_block {
                local ff = ngx.shared.feature_flags
                local enabled = ff:get("new_ui_enabled")
                local percentage = ff:get("new_ui_percentage") or 0
                
                if enabled == "true" then
                    -- Random selection based on percentage
                    local random = math.random(100)
                    if random &lt;= percentage then
                        ngx.var.backend = "user_service_v2"
                    else
                        ngx.var.backend = "user_service_v1"
                    end
                else
                    ngx.var.backend = "user_service_v1"
                end
            }
            
            proxy_pass http://$backend;
        }
        
        # Feature flag management endpoint
        location /admin/feature-flags {
            content_by_lua_block {
                local ff = ngx.shared.feature_flags
                local cjson = require "cjson"
                
                if ngx.req.get_method() == "GET" then
                    local flags = {
                        new_ui_enabled = ff:get("new_ui_enabled"),
                        new_ui_percentage = ff:get("new_ui_percentage")
                    }
                    ngx.say(cjson.encode(flags))
                elseif ngx.req.get_method() == "POST" then
                    ngx.req.read_body()
                    local data = cjson.decode(ngx.req.get_body_data())
                    
                    if data.new_ui_enabled then
                        ff:set("new_ui_enabled", data.new_ui_enabled)
                    end
                    if data.new_ui_percentage then
                        ff:set("new_ui_percentage", data.new_ui_percentage)
                    end
                    
                    ngx.say("Feature flags updated")
                end
            }
        }
    }
}
</code></pre><hr><h2 id="9-blue-green-deployments"><strong>9. Blue-Green Deployments</strong></h2><h3 id="91-basic-blue-green-setup"><strong>9.1. Basic Blue-Green Setup</strong></h3><pre><code class="language-nginx"># Blue environment (current production)
upstream blue_env {
    server blue-1:8080;
    server blue-2:8080;
    server blue-3:8080;
}

# Green environment (new version)
upstream green_env {
    server green-1:8080;
    server green-2:8080;
    server green-3:8080;
}

# Active environment
map $http_host $active_env {
    default blue_env;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://$active_env;
        add_header X-Environment $active_env;
    }
}
</code></pre><p><strong>Switch script:</strong></p><pre><code class="language-bash">#!/bin/bash
# switch_environment.sh

CURRENT=$(curl -s http://localhost/env)

if [ "$CURRENT" == "blue" ]; then
    NEW="green"
else
    NEW="blue"
fi

# Update configuration
sed -i "s/default blue_env/default ${NEW}_env/" /etc/nginx/nginx.conf

# Test configuration
nginx -t

if [ $? -eq 0 ]; then
    # Reload Nginx
    nginx -s reload
    echo "Switched to $NEW environment"
else
    echo "Configuration test failed, rollback"
    sed -i "s/default ${NEW}_env/default ${CURRENT}_env/" /etc/nginx/nginx.conf
fi
</code></pre><h3 id="92-blue-green-with-traffic-shaping"><strong>9.2. Blue-Green with Traffic Shaping</strong></h3><pre><code class="language-nginx"># Gradual cutover
split_clients "${remote_addr}" $environment {
    75% "blue_env";    # Old version gets 75%
    25% "green_env";   # New version gets 25%
}

server {
    location / {
        proxy_pass http://$environment;
        add_header X-Environment $environment;
    }
}

# After validation, switch to 100% green
# Then update:
# split_clients "${remote_addr}" $environment {
#     0% "blue_env";
#     100% "green_env";
# }
</code></pre><h3 id="93-blue-green-with-smoke-tests"><strong>9.3. Blue-Green with Smoke Tests</strong></h3><pre><code class="language-nginx">server {
    # Production traffic
    location / {
        proxy_pass http://$active_env;
    }
    
    # Smoke test endpoint for green
    location /test/green {
        proxy_pass http://green_env;
        
        # Only allow from internal network
        allow 10.0.0.0/8;
        deny all;
        
        add_header X-Test-Environment "green";
    }
}
</code></pre><p><strong>Automated smoke test:</strong></p><pre><code class="language-bash">#!/bin/bash
# smoke_test.sh

GREEN_URL="http://localhost/test/green"
TESTS=(
    "/health"
    "/api/users"
    "/api/products"
)

echo "Running smoke tests on green environment..."

FAILED=0
for test in "${TESTS[@]}"; do
    URL="${GREEN_URL}${test}"
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)
    
    if [ $STATUS -eq 200 ]; then
        echo "✓ PASS: $test"
    else
        echo "✗ FAIL: $test (Status: $STATUS)"
        FAILED=1
    fi
done

if [ $FAILED -eq 0 ]; then
    echo "All smoke tests passed. Ready to switch."
    exit 0
else
    echo "Smoke tests failed. Do not switch."
    exit 1
fi
</code></pre><hr><h2 id="10-complete-microservices-example"><strong>10. Complete Microservices Example</strong></h2><h3 id="101-full-api-gateway-configuration"><strong>10.1. Full API Gateway Configuration</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf

user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;

error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    
    log_format trace '$remote_addr - [$time_local] "$request" '
                    '$status $body_bytes_sent '
                    'trace_id=$request_id '
                    'upstream=$upstream_addr '
                    'upstream_time=$upstream_response_time '
                    'request_time=$request_time';
    
    access_log /var/log/nginx/access.log main;
    access_log /var/log/nginx/trace.log trace;
    
    # Performance settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    server_tokens off;
    
    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss;
    
    # Rate limiting zones
    limit_req_zone $binary_remote_addr zone=global:10m rate=1000r/s;
    limit_req_zone $binary_remote_addr zone=user_svc:10m rate=100r/s;
    limit_req_zone $binary_remote_addr zone=order_svc:10m rate=50r/s;
    limit_req_zone $binary_remote_addr zone=payment_svc:10m rate=10r/s;
    
    # Connection limiting
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    
    # Upstreams
    include /etc/nginx/conf.d/upstreams/*.conf;
    
    # Servers
    include /etc/nginx/conf.d/servers/*.conf;
}
</code></pre><p><strong>Upstreams configuration:</strong></p><pre><code class="language-nginx"># /etc/nginx/conf.d/upstreams/services.conf

upstream user_service {
    least_conn;
    server user-1.internal:8080 max_fails=3 fail_timeout=30s;
    server user-2.internal:8080 max_fails=3 fail_timeout=30s;
    server user-3.internal:8080 max_fails=3 fail_timeout=30s;
    keepalive 64;
}

upstream order_service {
    least_conn;
    server order-1.internal:8080 max_fails=3 fail_timeout=30s;
    server order-2.internal:8080 max_fails=3 fail_timeout=30s;
    keepalive 32;
}

upstream product_service {
    least_conn;
    server product-1.internal:8080 max_fails=3 fail_timeout=30s;
    server product-2.internal:8080 max_fails=3 fail_timeout=30s;
    server product-3.internal:8080 max_fails=3 fail_timeout=30s;
    keepalive 64;
}

upstream payment_service {
    server payment-1.internal:8080 max_fails=2 fail_timeout=10s;
    server payment-2.internal:8080 max_fails=2 fail_timeout=10s backup;
    keepalive 16;
}
</code></pre><p><strong>Server configuration:</strong></p><pre><code class="language-nginx"># /etc/nginx/conf.d/servers/api-gateway.conf

server {
    listen 80;
    listen [::]:80;
    server_name api.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name api.example.com;
    
    # SSL
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Global rate limit
    limit_req zone=global burst=2000 nodelay;
    limit_conn addr 50;
    
    # Health check
    location /health {
        access_log off;
        return 200 "OK\n";
        add_header Content-Type text/plain;
    }
    
    # User service
    location /api/v1/users {
        limit_req zone=user_svc burst=200 nodelay;
        
        proxy_pass http://user_service/users;
        include /etc/nginx/includes/proxy.conf;
        include /etc/nginx/includes/tracing.conf;
    }
    
    # Order service
    location /api/v1/orders {
        limit_req zone=order_svc burst=100 nodelay;
        
        proxy_pass http://order_service/orders;
        include /etc/nginx/includes/proxy.conf;
        include /etc/nginx/includes/tracing.conf;
    }
    
    # Product service
    location /api/v1/products {
        proxy_pass http://product_service/products;
        include /etc/nginx/includes/proxy.conf;
        include /etc/nginx/includes/tracing.conf;
        
        # Cache product listings
        proxy_cache product_cache;
        proxy_cache_valid 200 5m;
        proxy_cache_use_stale error timeout updating;
        add_header X-Cache-Status $upstream_cache_status;
    }
    
    # Payment service (critical)
    location /api/v1/payments {
        limit_req zone=payment_svc burst=5;
        limit_conn addr 3;
        
        proxy_pass http://payment_service/payments;
        include /etc/nginx/includes/proxy.conf;
        include /etc/nginx/includes/tracing.conf;
        
        # Longer timeout for payments
        proxy_read_timeout 60s;
        
        # No caching for payments
        proxy_no_cache 1;
        proxy_cache_bypass 1;
    }
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Microservices architecture patterns</li><li>✅ API Gateway implementation</li><li>✅ Service discovery (static, DNS, Consul)</li><li>✅ Circuit breaker patterns</li><li>✅ Retry policies với exponential backoff</li><li>✅ Per-service rate limiting</li><li>✅ Distributed tracing (OpenTelemetry, Jaeger, Zipkin)</li><li>✅ Service mesh integration (Istio, Consul Connect, Linkerd)</li><li>✅ Canary deployments</li><li>✅ Blue-green deployments</li></ul><p><strong>Key takeaways:</strong></p><ul><li>API Gateway là central point for routing</li><li>Service discovery enables dynamic scaling</li><li>Circuit breakers prevent cascading failures</li><li>Distributed tracing essential for debugging</li><li>Rate limiting protects services</li><li>Service mesh adds observability và resilience</li><li>Canary và blue-green enable safe deployments</li></ul><p><strong>Microservices Checklist:</strong></p><ul><li>✅ API Gateway configured</li><li>✅ Service discovery implemented</li><li>✅ Health checks on all services</li><li>✅ Circuit breakers configured</li><li>✅ Retry policies defined</li><li>✅ Rate limiting per service</li><li>✅ Distributed tracing enabled</li><li>✅ Monitoring và alerting</li><li>✅ Deployment strategies tested</li><li>✅ Documentation complete</li></ul><p>With these 14 comprehensive lessons, you now have all the knowledge needed to deploy and manage Nginx in production environments from basic to advanced, including microservices architectures! 🎉</p>
