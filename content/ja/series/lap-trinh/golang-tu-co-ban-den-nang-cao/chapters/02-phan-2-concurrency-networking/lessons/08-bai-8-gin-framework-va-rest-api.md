---
id: 019d8b40-b204-7001-b003-golang0000204
title: 'レッスン 8: Jin フレームワークと REST API'
slug: bai-8-gin-framework-va-rest-api
description: >-
  Gin フレームワークのセットアップ、ルーティング、ミドルウェア。バインディングをリクエストし、go-playground/validator
  で検証します。応答処理、エラー管理。 swaggo を使用した Swagger ドキュメント。ジン対ファイバー対エコー対チーを比較してください。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: 同時実行性とネットワーキング'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8366" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8366)"/>

  <!-- Decorations -->
  <g>
    <circle cx="825" cy="85" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="35" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="140" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="175" x2="1100" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="205" x2="1050" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.9807621135333,210 1050.9807621135333,240 1025,255 999.0192378864668,240 999.0192378864668,210 1025,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: Jin フレームワークと REST API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 同時実行性とネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-gioi-thieu-gin"><strong>1. Jin フレームワークの導入</strong></h2>

<p>Gin は、Go 用の最も人気のある HTTP Web フレームワークです。 Gin は、その高性能 (httprouter を使用)、直感的な API、および豊富なミドルウェア エコシステムで際立っています。</p>

<h3 id="1-1-so-sanh"><strong>1.1. Jin と他のフレームワークを比較する</strong></h3>

<table>
<thead>
<tr><th>基準</th><th>ジン</th><th>エコー</th><th>繊維</th><th>チー</th></tr>
</thead>
<tbody>
<tr><td>パフォーマンス</td><td>非常に高い</td><td>非常に高い</td><td>最高 (高速 http)</td><td>高</td></tr>
<tr><td>人気</td><td>⭐ 80,000+</td><td>⭐ 30,000+</td><td>⭐ 34,000+</td><td>⭐18,000+</td></tr>
<tr><td>API スタイル</td><td>特急っぽい</td><td>特急っぽい</td><td>特急っぽい</td><td>ネット/http互換性</td></tr>
<tr><td>ミドルウェア</td><td>たくさん</td><td>たくさん</td><td>たくさん</td><td>チー互換</td></tr>
<tr><td>ネット/http互換</td><td>部分的</td><td>フル</td><td>❌ (高速http)</td><td>フル</td></tr>
<tr><td>検証</td><td>内蔵</td><td>内蔵</td><td>内蔵</td><td>マニュアル</td></tr>
<tr><td>闊歩する</td><td>スワッゴ</td><td>スワッゴ</td><td>スワッゴ</td><td>スワッゴ</td></tr>
</tbody>
</table>

<p><strong>ジンを選ぶタイミングは？</strong> 最も人気があり、リソースが豊富で、機能とパフォーマンスのバランスが取れています。ほとんどのプロジェクトに適しています。</p>

<h3 id="1-2-setup"><strong>1.2.セットアップ</strong></h3>

<pre><code class="language-bash">mkdir gin-api && cd gin-api
go mod init github.com/yourname/gin-api
go get github.com/gin-gonic/gin
</code></pre>

<pre><code class="language-go">package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    // gin.Default() = Logger + Recovery middleware
    r := gin.Default()
    
    // gin.New() = no middleware (production)
    // r := gin.New()
    // r.Use(gin.Logger(), gin.Recovery())
    
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "pong",
        })
    })
    
    r.Run(":8080") // Default :8080
}
</code></pre>

<h2 id="2-routing"><strong>2. ルーティング</strong></h2>

<pre><code class="language-go">func main() {
    r := gin.Default()
    
    // Basic routes
    r.GET("/users", listUsers)
    r.POST("/users", createUser)
    r.GET("/users/:id", getUser)          // Path parameter
    r.PUT("/users/:id", updateUser)
    r.DELETE("/users/:id", deleteUser)
    
    // Route groups
    api := r.Group("/api/v1")
    {
        users := api.Group("/users")
        {
            users.GET("", listUsers)
            users.POST("", createUser)
            users.GET("/:id", getUser)
            users.PUT("/:id", updateUser)
            users.DELETE("/:id", deleteUser)
        }
        
        posts := api.Group("/posts")
        posts.Use(authMiddleware())  // Middleware cho group
        {
            posts.GET("", listPosts)
            posts.POST("", createPost)
        }
    }
    
    // Wildcard route
    r.GET("/files/*filepath", func(c *gin.Context) {
        filepath := c.Param("filepath")
        c.String(http.StatusOK, "File: %s", filepath)
    })
    
    r.Run(":8080")
}
</code></pre>

<h2 id="3-request-handling"><strong>3. リクエストの処理</strong></h2>

<h3 id="3-1-parameters"><strong>3.1.パラメータ</strong></h3>

<pre><code class="language-go">func getUser(c *gin.Context) {
    // Path parameter
    id := c.Param("id")
    
    // Query parameters
    page := c.DefaultQuery("page", "1")
    limit := c.DefaultQuery("limit", "10")
    search := c.Query("search")   // "" if not present
    
    // Header
    token := c.GetHeader("Authorization")
    
    c.JSON(http.StatusOK, gin.H{
        "id":     id,
        "page":   page,
        "limit":  limit,
        "search": search,
        "token":  token,
    })
}
</code></pre>

<h3 id="3-2-binding"><strong>3.2.リクエストのバインディングと検証</strong></h3>

<pre><code class="language-go">// Gin sử dụng go-playground/validator cho validation

type CreateUserInput struct {
    Name     string `json:"name"     binding:"required,min=2,max=50"`
    Email    string `json:"email"    binding:"required,email"`
    Password string `json:"password" binding:"required,min=8,max=72"`
    Age      int    `json:"age"      binding:"required,gte=18,lte=120"`
    Role     string `json:"role"     binding:"required,oneof=admin user moderator"`
}

type UpdateUserInput struct {
    Name  *string `json:"name"  binding:"omitempty,min=2,max=50"`
    Email *string `json:"email" binding:"omitempty,email"`
    Age   *int    `json:"age"   binding:"omitempty,gte=18,lte=120"`
}

// Query parameters binding
type ListUsersQuery struct {
    Page   int    `form:"page"   binding:"omitempty,min=1"`
    Limit  int    `form:"limit"  binding:"omitempty,min=1,max=100"`
    Search string `form:"search" binding:"omitempty,max=200"`
    SortBy string `form:"sort_by" binding:"omitempty,oneof=name email created_at"`
}

func createUser(c *gin.Context) {
    var input CreateUserInput
    
    // ShouldBindJSON - returns error (không abort)
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{
            "error":   "Validation failed",
            "details": formatValidationErrors(err),
        })
        return
    }
    
    // ... create user
    c.JSON(http.StatusCreated, gin.H{
        "message": "User created",
        "data":    input,
    })
}

func listUsers(c *gin.Context) {
    var query ListUsersQuery
    if err := c.ShouldBindQuery(&query); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    
    // Set defaults
    if query.Page == 0 { query.Page = 1 }
    if query.Limit == 0 { query.Limit = 20 }
    
    // ... fetch users
}

// Format validation errors
func formatValidationErrors(err error) map[string]string {
    errors := make(map[string]string)
    
    var ve validator.ValidationErrors
    if stderrors.As(err, &ve) {
        for _, fe := range ve {
            field := fe.Field()
            switch fe.Tag() {
            case "required":
                errors[field] = field + " is required"
            case "email":
                errors[field] = "Invalid email format"
            case "min":
                errors[field] = field + " must be at least " + fe.Param()
            case "max":
                errors[field] = field + " must be at most " + fe.Param()
            default:
                errors[field] = "Invalid " + field
            }
        }
    }
    
    return errors
}
</code></pre>

<h3 id="3-3-custom-validation"><strong>3.3.カスタムバリデーター</strong></h3>

<pre><code class="language-go">import "github.com/go-playground/validator/v10"

// Custom validator
func setupValidators(r *gin.Engine) {
    if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
        // Custom validation tag
        v.RegisterValidation("strong_password", func(fl validator.FieldLevel) bool {
            password := fl.Field().String()
            hasUpper := false
            hasLower := false
            hasDigit := false
            for _, ch := range password {
                switch {
                case unicode.IsUpper(ch):
                    hasUpper = true
                case unicode.IsLower(ch):
                    hasLower = true
                case unicode.IsDigit(ch):
                    hasDigit = true
                }
            }
            return hasUpper && hasLower && hasDigit
        })
        
        // Vietnamese phone number
        v.RegisterValidation("vn_phone", func(fl validator.FieldLevel) bool {
            phone := fl.Field().String()
            matched, _ := regexp.MatchString(`^(0|\+84)(3|5|7|8|9)\d{8}$`, phone)
            return matched
        })
    }
}

type RegisterInput struct {
    Password string `json:"password" binding:"required,min=8,strong_password"`
    Phone    string `json:"phone"    binding:"required,vn_phone"`
}
</code></pre>

<h2 id="4-middleware"><strong>4. ミドルウェア</strong></h2>

<pre><code class="language-go">// Auth middleware
func authMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        token := c.GetHeader("Authorization")
        if token == "" {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
                "error": "Authorization header required",
            })
            return
        }
        
        // Remove "Bearer " prefix
        token = strings.TrimPrefix(token, "Bearer ")
        
        claims, err := validateJWT(token)
        if err != nil {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
                "error": "Invalid token",
            })
            return
        }
        
        // Set user info in context
        c.Set("user_id", claims.UserID)
        c.Set("user_role", claims.Role)
        
        c.Next() // Continue to next handler
    }
}

// Rate limiting middleware  
func rateLimitMiddleware(rps int) gin.HandlerFunc {
    limiter := rate.NewLimiter(rate.Limit(rps), rps)
    
    return func(c *gin.Context) {
        if !limiter.Allow() {
            c.AbortWithStatusJSON(http.StatusTooManyRequests, gin.H{
                "error": "Rate limit exceeded",
            })
            return
        }
        c.Next()
    }
}

// Request ID middleware
func requestIDMiddleware() gin.HandlerFunc {
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

// Usage
func main() {
    r := gin.New()
    
    // Global middleware
    r.Use(gin.Logger())
    r.Use(gin.Recovery())
    r.Use(requestIDMiddleware())
    r.Use(corsMiddleware())
    
    // Public routes
    r.POST("/auth/login", loginHandler)
    r.POST("/auth/register", registerHandler)
    
    // Protected routes
    protected := r.Group("/api")
    protected.Use(authMiddleware())
    protected.Use(rateLimitMiddleware(100))
    {
        protected.GET("/profile", getProfile)
        protected.PUT("/profile", updateProfile)
    }
    
    r.Run(":8080")
}
</code></pre>

<h2 id="5-response-handling"><strong>5. 応答の処理</strong></h2>

<pre><code class="language-go">// Standardized API Response
type APIResponse struct {
    Success    bool        `json:"success"`
    Data       any         `json:"data,omitempty"`
    Error      *APIError   `json:"error,omitempty"`
    Pagination *Pagination `json:"pagination,omitempty"`
}

type APIError struct {
    Code    string            `json:"code"`
    Message string            `json:"message"`
    Details map[string]string `json:"details,omitempty"`
}

type Pagination struct {
    Page       int   `json:"page"`
    Limit      int   `json:"limit"`
    Total      int64 `json:"total"`
    TotalPages int   `json:"total_pages"`
}

// Helper functions
func respondSuccess(c *gin.Context, data any) {
    c.JSON(http.StatusOK, APIResponse{
        Success: true,
        Data:    data,
    })
}

func respondCreated(c *gin.Context, data any) {
    c.JSON(http.StatusCreated, APIResponse{
        Success: true,
        Data:    data,
    })
}

func respondError(c *gin.Context, status int, code, message string) {
    c.JSON(status, APIResponse{
        Success: false,
        Error: &APIError{
            Code:    code,
            Message: message,
        },
    })
}

func respondPaginated(c *gin.Context, data any, page, limit int, total int64) {
    totalPages := int(total) / limit
    if int(total)%limit > 0 {
        totalPages++
    }
    
    c.JSON(http.StatusOK, APIResponse{
        Success: true,
        Data:    data,
        Pagination: &Pagination{
            Page:       page,
            Limit:      limit,
            Total:      total,
            TotalPages: totalPages,
        },
    })
}

// Usage
func listUsersHandler(c *gin.Context) {
    users, total, err := userService.List(c.Request.Context(), page, limit)
    if err != nil {
        respondError(c, http.StatusInternalServerError, "INTERNAL_ERROR", "Failed to fetch users")
        return
    }
    respondPaginated(c, users, page, limit, total)
}
</code></pre>

<h2 id="6-error-handling"><strong>6. 一元的なエラー処理</strong></h2>

<pre><code class="language-go">// Custom error types
type AppError struct {
    Code    int    `json:"-"`
    ErrCode string `json:"code"`
    Message string `json:"message"`
}

func (e *AppError) Error() string {
    return e.Message
}

var (
    ErrNotFound     = &AppError{Code: 404, ErrCode: "NOT_FOUND", Message: "Resource not found"}
    ErrUnauthorized = &AppError{Code: 401, ErrCode: "UNAUTHORIZED", Message: "Unauthorized"}
    ErrForbidden    = &AppError{Code: 403, ErrCode: "FORBIDDEN", Message: "Forbidden"}
    ErrBadRequest   = &AppError{Code: 400, ErrCode: "BAD_REQUEST", Message: "Bad request"}
)

// Error handling middleware
func errorHandler() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Next() // Process request
        
        // Check for errors after handler
        if len(c.Errors) > 0 {
            err := c.Errors.Last().Err
            
            var appErr *AppError
            if errors.As(err, &appErr) {
                c.JSON(appErr.Code, APIResponse{
                    Success: false,
                    Error:   &APIError{Code: appErr.ErrCode, Message: appErr.Message},
                })
                return
            }
            
            // Unknown error
            c.JSON(http.StatusInternalServerError, APIResponse{
                Success: false,
                Error:   &APIError{Code: "INTERNAL_ERROR", Message: "Internal server error"},
            })
        }
    }
}

// Usage in handler
func getUserHandler(c *gin.Context) {
    id := c.Param("id")
    user, err := userService.GetByID(c.Request.Context(), id)
    if err != nil {
        c.Error(err) // Add error to context
        return
    }
    respondSuccess(c, user)
}
</code></pre>

<h2 id="7-project-structure"><strong>7. Jin APIのプロジェクト構造</strong></h2>

<pre><code>gin-api/
├── cmd/
│   └── api/
│       └── main.go               # Entry point
├── internal/
│   ├── config/
│   │   └── config.go             # App configuration
│   ├── handler/
│   │   ├── user_handler.go       # HTTP handlers
│   │   ├── auth_handler.go
│   │   └── router.go             # Route definitions
│   ├── middleware/
│   │   ├── auth.go
│   │   ├── cors.go
│   │   ├── logger.go
│   │   └── ratelimit.go
│   ├── model/
│   │   ├── user.go               # Domain models
│   │   └── post.go
│   ├── repository/
│   │   ├── user_repository.go    # Data access
│   │   └── post_repository.go
│   ├── service/
│   │   ├── user_service.go       # Business logic
│   │   └── auth_service.go
│   └── dto/
│       ├── request.go            # Request DTOs
│       └── response.go           # Response DTOs
├── pkg/
│   ├── database/
│   │   └── postgres.go
│   └── validator/
│       └── custom.go
├── migrations/
├── docs/                          # Swagger generated
├── go.mod
├── go.sum
├── Makefile
└── Dockerfile
</code></pre>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<ul>
<li><strong>ジン</strong>: 最も人気のあるフレームワーク、高性能、豊富なミドルウェア</li>
<li><strong>ルーティング</strong>: グループ、パスパラメータ、クエリパラメータ、ワイルドカード</li>
<li><strong>バインディング</strong>: ShouldBindJSON、ShouldBindQuery (バリデータタグ付き)</li>
<li><strong>ミドルウェア</strong>: 認証、レート制限、CORS、リクエストID、エラー処理</li>
<li><strong>応答</strong>: 標準化された API 応答フォーマット</li>
<li><strong>プロジェクトの構造</strong>: ハンドラー → サービス → リポジトリ層</li>
</ul>

<p>次の部分: <strong>GORM とデータベースの統合</strong> — PostgreSQL に接続し、データ層を処理します。</p>
