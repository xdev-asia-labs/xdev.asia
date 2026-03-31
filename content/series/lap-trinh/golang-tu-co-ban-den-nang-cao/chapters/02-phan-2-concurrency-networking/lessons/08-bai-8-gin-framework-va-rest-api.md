---
id: 019d8b40-b204-7001-b003-golang0000204
title: 'Bài 8: Gin Framework & REST API'
slug: bai-8-gin-framework-va-rest-api
description: >-
  Gin framework setup, routing, middleware. Request binding, validation
  với go-playground/validator. Response handling, error management.
  Swagger docs với swaggo. So sánh Gin vs Fiber vs Echo vs Chi.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Concurrency & Networking"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-gioi-thieu-gin"><strong>1. Giới thiệu Gin Framework</strong></h2>

<p>Gin là HTTP web framework phổ biến nhất cho Go. Gin nổi bật với hiệu suất cao (dùng httprouter), API trực quan, và middleware ecosystem phong phú.</p>

<h3 id="1-1-so-sanh"><strong>1.1. So sánh Gin vs các Frameworks khác</strong></h3>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Gin</th><th>Echo</th><th>Fiber</th><th>Chi</th></tr>
</thead>
<tbody>
<tr><td>Performance</td><td>Rất cao</td><td>Rất cao</td><td>Cao nhất (fasthttp)</td><td>Cao</td></tr>
<tr><td>Popularity</td><td>⭐ 80k+</td><td>⭐ 30k+</td><td>⭐ 34k+</td><td>⭐ 18k+</td></tr>
<tr><td>API Style</td><td>Express-like</td><td>Express-like</td><td>Express-like</td><td>net/http compatible</td></tr>
<tr><td>Middleware</td><td>Nhiều</td><td>Nhiều</td><td>Nhiều</td><td>Chi compatible</td></tr>
<tr><td>net/http compat</td><td>Partial</td><td>Full</td><td>❌ (fasthttp)</td><td>Full</td></tr>
<tr><td>Validation</td><td>Built-in</td><td>Built-in</td><td>Built-in</td><td>Manual</td></tr>
<tr><td>Swagger</td><td>swaggo</td><td>swaggo</td><td>swaggo</td><td>swaggo</td></tr>
</tbody>
</table>

<p><strong>Khi nào chọn Gin?</strong> Phổ biến nhất, nhiều resources, balance tốt giữa features và performance. Phù hợp cho hầu hết projects.</p>

<h3 id="1-2-setup"><strong>1.2. Setup</strong></h3>

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

<h2 id="2-routing"><strong>2. Routing</strong></h2>

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

<h2 id="3-request-handling"><strong>3. Request Handling</strong></h2>

<h3 id="3-1-parameters"><strong>3.1. Parameters</strong></h3>

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

<h3 id="3-2-binding"><strong>3.2. Request Binding & Validation</strong></h3>

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

<h3 id="3-3-custom-validation"><strong>3.3. Custom Validators</strong></h3>

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

<h2 id="4-middleware"><strong>4. Middleware</strong></h2>

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

<h2 id="5-response-handling"><strong>5. Response Handling</strong></h2>

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

<h2 id="6-error-handling"><strong>6. Centralized Error Handling</strong></h2>

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

<h2 id="7-project-structure"><strong>7. Project Structure cho Gin API</strong></h2>

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

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><strong>Gin</strong>: Framework phổ biến nhất, hiệu suất cao, middleware rich</li>
<li><strong>Routing</strong>: Groups, path params, query params, wildcards</li>
<li><strong>Binding</strong>: ShouldBindJSON, ShouldBindQuery với validator tags</li>
<li><strong>Middleware</strong>: Auth, rate limiting, CORS, request ID, error handling</li>
<li><strong>Response</strong>: Standardized API response format</li>
<li><strong>Project structure</strong>: Handler → Service → Repository layers</li>
</ul>

<p>Phần tiếp theo: <strong>GORM & Database Integration</strong> — kết nối Go với PostgreSQL và xử lý data layer.</p>
