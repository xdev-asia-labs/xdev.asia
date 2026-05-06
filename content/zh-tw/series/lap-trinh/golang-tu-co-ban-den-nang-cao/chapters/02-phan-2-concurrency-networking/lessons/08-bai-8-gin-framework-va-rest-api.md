---
id: 019d8b40-b204-7001-b003-golang0000204
title: 第 8 課：Gin 框架與 REST API
slug: bai-8-gin-framework-va-rest-api
description: >-
  Gin 框架設定、路由、中介軟體。請求綁定，使用 go-playground/validator 進行驗證。回應處理、錯誤管理。 Swagger 文件與
  swaggo。比較 Gin、Fiber、Echo 和 Chi。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：並發與網絡
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：Gin 框架與 REST API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：並發與網絡</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-gioi-thieu-gin"><strong>1.Gin框架介紹</strong></h2>

<p>Gin 是最受歡迎的 Go HTTP Web 框架。 Gin 因其高效能（使用 httprouter）、直覺的 API 和豐富的中間件生態系統而脫穎而出。</p>

<h3 id="1-1-so-sanh"><strong>1.1.比較 Gin 與其他框架</strong></h3>

<table>
<thead>
<tr><th>標準</th><th>琴酒</th><th>迴音</th><th>纖維</th><th>志</th></tr>
</thead>
<tbody>
<tr><td>效能</td><td>非常高</td><td>非常高</td><td>最高（fasthttp）</td><td>高</td></tr>
<tr><td>人氣</td><td>⭐ 80k+</td><td>⭐ 30k+</td><td>⭐ 34k+</td><td>⭐ 18k+</td></tr>
<tr><td>API風格</td><td>類似快遞</td><td>類似快遞</td><td>類似快遞</td><td>相容 net/http</td></tr>
<tr><td>中介軟體</td><td>很多</td><td>很多</td><td>很多</td><td>氣相容</td></tr>
<tr><td>網路/http 相容</td><td>部分</td><td>滿</td><td>❌（快速http）</td><td>滿</td></tr>
<tr><td>驗證</td><td>內建</td><td>內建</td><td>內建</td><td>手冊</td></tr>
<tr><td>昂首闊步</td><td>斯瓦戈</td><td>斯瓦戈</td><td>斯瓦戈</td><td>斯瓦戈</td></tr>
</tbody>
</table>

<p><strong>什麼時候選擇杜松子酒？</strong> 最受歡迎，資源豐富，功能和效能之間取得了良好的平衡。適合大多數項目。</p>

<h3 id="1-2-setup"><strong>1.2.設置</strong></h3>

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

<h2 id="2-routing"><strong>2. 路由</strong></h2>

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

<h2 id="3-request-handling"><strong>3. 請求處理</strong></h2>

<h3 id="3-1-parameters"><strong>3.1.參數</strong></h3>

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

<h3 id="3-2-binding"><strong>3.2.請求綁定和驗證</strong></h3>

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

<h3 id="3-3-custom-validation"><strong>3.3.自訂驗證器</strong></h3>

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

<h2 id="4-middleware"><strong>4. 中介軟體</strong></h2>

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

<h2 id="5-response-handling"><strong>5. 響應處理</strong></h2>

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

<h2 id="6-error-handling"><strong>6. 集中錯誤處理</strong></h2>

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

<h2 id="7-project-structure"><strong>7. Gin API 的專案結構</strong></h2>

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

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><strong>琴酒</strong>：最受歡迎的框架，高性能，豐富的中間件</li>
<li><strong>路由</strong>：群組、路徑參數、查詢參數、通配符</li>
<li><strong>裝訂</strong>：ShouldBindJSON，帶有驗證器標籤的ShouldBindQuery</li>
<li><strong>中介軟體</strong>：身份驗證、速率限制、CORS、請求 ID、錯誤處理</li>
<li><strong>回應</strong>：標準化API回應格式</li>
<li><strong>專案結構</strong>：處理程序→服務→儲存庫層</li>
</ul>

<p>下一部分： <strong>GORM 和資料庫集成</strong> — 連接Go到PostgreSQL並處理資料層。</p>
