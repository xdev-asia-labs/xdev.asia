---
id: 019d8b40-b304-7001-b003-golang0000304
title: 'レッスン 12: 認可、セキュリティ、ミドルウェア'
slug: bai-12-authorization-security-va-middleware
description: >-
  Casbin を使用した RBAC、許可モデル。 CORS 構成、レート制限、セキュリティ ヘッダー。入力検証、SQL インジェクション防止、XSS
  保護。カスタムミドルウェアチェーン。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: データベースと認証'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6248" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6248)"/>

  <!-- Decorations -->
  <g>
    <circle cx="740" cy="90" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="70" x2="1100" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="100" x2="1050" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.650635094611,107.5 941.650635094611,132.5 920,145 898.349364905389,132.5 898.349364905389,107.5 920,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: 認可、セキュリティ、</tspan>
      <tspan x="60" dy="42">ミドルウェア</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: データベースと認証</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-rbac-voi-casbin"><strong>1. Casbin を使用したロールベースのアクセス制御 (RBAC)</strong></h2>

<h3 id="1-1-setup"><strong>1.1.セットアップ</strong></h3>

<pre><code class="language-bash">go get github.com/casbin/casbin/v2
go get github.com/casbin/gorm-adapter/v3
</code></pre>

<h3 id="1-2-model-config"><strong>1.2.モデル構成</strong></h3>

<pre><code class="language-ini"># config/rbac_model.conf
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && keyMatch2(r.obj, p.obj) && r.act == p.act
</code></pre>

<ul>
<li><strong>サブ</strong>: 件名 (ユーザーの役割)</li>
<li><strong>オブジェクト</strong>: オブジェクト (API パス)</li>
<li><strong>行動する。行動する</strong>: アクション (HTTP メソッド)</li>
</ul>

<h3 id="1-3-policy-rules"><strong>1.3.ポリシールール</strong></h3>

<pre><code class="language-csv"># config/rbac_policy.csv
p, admin,  /api/*,         GET
p, admin,  /api/*,         POST
p, admin,  /api/*,         PUT
p, admin,  /api/*,         DELETE
p, admin,  /admin/*,       GET
p, admin,  /admin/*,       POST

p, editor, /api/posts,     GET
p, editor, /api/posts,     POST
p, editor, /api/posts/:id, PUT
p, editor, /api/posts/:id, DELETE

p, user,   /api/posts,     GET
p, user,   /api/profile,   GET
p, user,   /api/profile,   PUT

g, admin, editor
g, editor, user
</code></pre>

<h3 id="1-4-casbin-middleware"><strong>1.4.キャビンミドルウェア</strong></h3>

<pre><code class="language-go">package middleware

import (
    "net/http"
    
    "github.com/casbin/casbin/v2"
    "github.com/gin-gonic/gin"
)

func CasbinMiddleware(enforcer *casbin.Enforcer) gin.HandlerFunc {
    return func(c *gin.Context) {
        role := GetUserRole(c)
        path := c.Request.URL.Path
        method := c.Request.Method
        
        allowed, err := enforcer.Enforce(role, path, method)
        if err != nil {
            c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
                "error": "Authorization error",
            })
            return
        }
        
        if !allowed {
            c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
                "error": "Access denied",
            })
            return
        }
        
        c.Next()
    }
}

// Setup enforcer
func SetupCasbin() (*casbin.Enforcer, error) {
    enforcer, err := casbin.NewEnforcer("config/rbac_model.conf", "config/rbac_policy.csv")
    if err != nil {
        return nil, err
    }
    
    // Load policies
    if err := enforcer.LoadPolicy(); err != nil {
        return nil, err
    }
    
    return enforcer, nil
}
</code></pre>

<h2 id="2-cors-configuration"><strong>2. CORS の構成</strong></h2>

<pre><code class="language-bash">go get github.com/gin-contrib/cors
</code></pre>

<pre><code class="language-go">import "github.com/gin-contrib/cors"

func SetupCORS(r *gin.Engine) {
    config := cors.Config{
        AllowOrigins:     []string{"https://example.com", "https://admin.example.com"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour, // Preflight cache
    }
    
    r.Use(cors.New(config))
}

// ⚠️ KHÔNG dùng AllowAllOrigins: true trong production
// ⚠️ KHÔNG dùng AllowOrigins: []string{"*"} khi AllowCredentials: true
</code></pre>

<h2 id="3-rate-limiting"><strong>3. レート制限</strong></h2>

<pre><code class="language-go">package middleware

import (
    "net/http"
    "sync"
    "time"
    
    "github.com/gin-gonic/gin"
    "golang.org/x/time/rate"
)

type IPRateLimiter struct {
    mu       sync.RWMutex
    limiters map[string]*rate.Limiter
    rate     rate.Limit
    burst    int
}

func NewIPRateLimiter(r rate.Limit, burst int) *IPRateLimiter {
    return &IPRateLimiter{
        limiters: make(map[string]*rate.Limiter),
        rate:     r,
        burst:    burst,
    }
}

func (rl *IPRateLimiter) GetLimiter(ip string) *rate.Limiter {
    rl.mu.Lock()
    defer rl.mu.Unlock()
    
    limiter, exists := rl.limiters[ip]
    if !exists {
        limiter = rate.NewLimiter(rl.rate, rl.burst)
        rl.limiters[ip] = limiter
    }
    
    return limiter
}

func RateLimitMiddleware(rps float64, burst int) gin.HandlerFunc {
    limiter := NewIPRateLimiter(rate.Limit(rps), burst)
    
    // Cleanup old entries periodically
    go func() {
        for range time.Tick(10 * time.Minute) {
            limiter.mu.Lock()
            limiter.limiters = make(map[string]*rate.Limiter)
            limiter.mu.Unlock()
        }
    }()
    
    return func(c *gin.Context) {
        ip := c.ClientIP()
        l := limiter.GetLimiter(ip)
        
        if !l.Allow() {
            c.AbortWithStatusJSON(http.StatusTooManyRequests, gin.H{
                "error": "Too many requests. Please try again later.",
            })
            return
        }
        
        c.Next()
    }
}

// Usage: r.Use(RateLimitMiddleware(10, 20)) // 10 req/s, burst 20
</code></pre>

<h2 id="4-security-headers"><strong>4. セキュリティヘッダー</strong></h2>

<pre><code class="language-go">func SecurityHeadersMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Header("X-Content-Type-Options", "nosniff")
        c.Header("X-Frame-Options", "DENY")
        c.Header("X-XSS-Protection", "1; mode=block")
        c.Header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
        c.Header("Content-Security-Policy", "default-src 'self'")
        c.Header("Referrer-Policy", "strict-origin-when-cross-origin")
        c.Header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        
        c.Next()
    }
}
</code></pre>

<h2 id="5-input-validation"><strong>5. 入力の検証</strong></h2>

<pre><code class="language-go">package validator

import (
    "regexp"
    
    "github.com/go-playground/validator/v10"
)

// Custom validators
func RegisterCustomValidators(v *validator.Validate) {
    // Username: chữ, số, gạch dưới, 3-30 ký tự
    v.RegisterValidation("username", func(fl validator.FieldLevel) bool {
        re := regexp.MustCompile(`^[a-zA-Z0-9_]{3,30}$`)
        return re.MatchString(fl.Field().String())
    })
    
    // No HTML tags (XSS prevention)
    v.RegisterValidation("noscript", func(fl validator.FieldLevel) bool {
        re := regexp.MustCompile(`<[^>]*>`)
        return !re.MatchString(fl.Field().String())
    })
    
    // Vietnamese phone number
    v.RegisterValidation("vnphone", func(fl validator.FieldLevel) bool {
        re := regexp.MustCompile(`^(\+84|0)(3|5|7|8|9)\d{8}$`)
        return re.MatchString(fl.Field().String())
    })
}

// Input structs with validation
type CreatePostInput struct {
    Title   string   `json:"title"   binding:"required,min=5,max=200,noscript"`
    Content string   `json:"content" binding:"required,min=50"`
    Tags    []string `json:"tags"    binding:"max=10,dive,min=1,max=50"`
}
</code></pre>

<h2 id="6-sql-injection-prevention"><strong>6. SQL インジェクションの防止</strong></h2>

<pre><code class="language-go">// ❌ NGUY HIỂM - SQL Injection
db.Raw("SELECT * FROM users WHERE email = '" + email + "'")

// ✅ AN TOÀN - Parameterized queries
db.Raw("SELECT * FROM users WHERE email = ?", email)

// ✅ AN TOÀN - GORM methods
db.Where("email = ?", email).First(&user)

// ✅ AN TOÀN - Named parameters
db.Where("email = @email AND role = @role", map[string]interface{}{
    "email": email, "role": role,
}).First(&user)
</code></pre>

<h2 id="7-middleware-chain"><strong>7. 完全なミドルウェア チェーン</strong></h2>

<pre><code class="language-go">func SetupRouter(tokenService *auth.TokenService, enforcer *casbin.Enforcer) *gin.Engine {
    r := gin.New()
    
    // Global middleware (thứ tự quan trọng!)
    r.Use(gin.Recovery())                      // 1. Recover panics
    r.Use(SecurityHeadersMiddleware())         // 2. Security headers
    r.Use(SetupCORS(r))                        // 3. CORS
    r.Use(RequestIDMiddleware())               // 4. Request ID
    r.Use(LoggingMiddleware())                 // 5. Structured logging
    r.Use(RateLimitMiddleware(100, 200))       // 6. Rate limit
    
    // Public routes
    public := r.Group("/auth")
    public.Use(RateLimitMiddleware(5, 10))     // Stricter rate limit for auth
    {
        public.POST("/login", authHandler.Login)
        public.POST("/register", authHandler.Register)
        public.POST("/refresh", authHandler.RefreshToken)
    }
    
    // Protected routes
    api := r.Group("/api")
    api.Use(AuthMiddleware(tokenService))       // Auth required
    api.Use(CasbinMiddleware(enforcer))         // RBAC check
    {
        api.GET("/profile", getProfile)
        api.PUT("/profile", updateProfile)
        api.GET("/posts", listPosts)
        api.POST("/posts", createPost)
    }
    
    return r
}
</code></pre>

<h2 id="8-request-id-middleware"><strong>8. リクエストIDミドルウェア</strong></h2>

<pre><code class="language-go">import "github.com/google/uuid"

func RequestIDMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        requestID := c.GetHeader("X-Request-ID")
        if requestID == "" {
            requestID = uuid.New().String()
        }
        
        c.Set("request_id", requestID)
        c.Header("X-Request-ID", requestID)
        c.Next()
    }
}
</code></pre>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<table>
<thead><tr><th>レイヤー</th><th>目的</th><th>ツール</th></tr></thead>
<tbody>
<tr><td>認証</td><td>ユーザー認証</td><td>JWT + bcrypt</td></tr>
<tr><td>認可</td><td>分散化</td><td>RBAC キャビン</td></tr>
<tr><td>レート制限</td><td>アンチDDoS/ブルートフォース</td><td>golang.org/x/time/rate</td></tr>
<tr><td>入力の検証</td><td>入力の検証とサニタイズ</td><td>ゴープレイグラウンド/バリデーター</td></tr>
<tr><td>SQLの防止</td><td>SQLインジェクションを防ぐ</td><td>GORM パラメータ化クエリ</td></tr>
<tr><td>ヘッダー</td><td>セキュリティヘッダー</td><td>カスタムミドルウェア</td></tr>
<tr><td>コルス</td><td>クロスオリジン制御</td><td>ジン貢献/cors</td></tr>
</tbody>
</table>

<p>次の記事: <strong>WebSocket とリアルタイム通信</strong> — ゴリラ/ウェブソケット、チャット ルーム、ブロードキャスト パターン。</p>
