---
id: 019d8b40-b303-7001-b003-golang0000303
title: 'レッスン 11: 認証 - JWT と OAuth2'
slug: bai-11-authentication-jwt-va-oauth2
description: >-
  golang-jwt を使用した JWT、bcrypt パスワード ハッシュ。アクセストークン、リフレッシュトークン、トークンローテーション。 OAuth2
  フロー、Google/GitHub によるソーシャル ログイン。セッション管理。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: データベースと認証'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9243" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9243)"/>

  <!-- Decorations -->
  <g>
    <circle cx="796" cy="138" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="992" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="688" cy="210" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="884" cy="246" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="282" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="158" x2="1100" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="188" x2="1050" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1036.5788383248864,191.5 1036.5788383248864,224.5 1008,241 979.4211616751136,224.5 979.4211616751135,191.5 1008,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 プログラミング — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: 認証 - JWT と OAuth2</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: データベースと認証</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-password-hashing"><strong>1. bcrypt によるパスワードのハッシュ化</strong></h2>

<pre><code class="language-bash">go get golang.org/x/crypto/bcrypt
</code></pre>

<pre><code class="language-go">import "golang.org/x/crypto/bcrypt"

func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
    return string(bytes), err
}

func CheckPassword(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

// ⚠️ bcrypt rules:
// - DefaultCost = 10 (OK cho 2026)
// - Max password length = 72 bytes
// - Nếu password > 72 bytes, hash SHA-256 trước rồi bcrypt
// - KHÔNG dùng MD5, SHA-256 alone cho passwords
</code></pre>

<h2 id="2-jwt-authentication"><strong>2.JWT認証</strong></h2>

<h3 id="2-1-setup"><strong>2.1.セットアップ</strong></h3>

<pre><code class="language-bash">go get github.com/golang-jwt/jwt/v5
</code></pre>

<h3 id="2-2-token-service"><strong>2.2.サービストークン</strong></h3>

<pre><code class="language-go">package auth

import (
    "fmt"
    "time"
    
    "github.com/golang-jwt/jwt/v5"
)

type TokenService struct {
    accessSecret  []byte
    refreshSecret []byte
    accessTTL     time.Duration
    refreshTTL    time.Duration
}

func NewTokenService(accessSecret, refreshSecret string) *TokenService {
    return &TokenService{
        accessSecret:  []byte(accessSecret),
        refreshSecret: []byte(refreshSecret),
        accessTTL:     15 * time.Minute,
        refreshTTL:    7 * 24 * time.Hour, // 7 days
    }
}

// Custom claims
type AccessClaims struct {
    UserID uint   `json:"user_id"`
    Email  string `json:"email"`
    Role   string `json:"role"`
    jwt.RegisteredClaims
}

type RefreshClaims struct {
    UserID uint `json:"user_id"`
    jwt.RegisteredClaims
}

// Generate access token
func (s *TokenService) GenerateAccessToken(userID uint, email, role string) (string, error) {
    claims := AccessClaims{
        UserID: userID,
        Email:  email,
        Role:   role,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(time.Now().Add(s.accessTTL)),
            IssuedAt:  jwt.NewNumericDate(time.Now()),
            Issuer:    "my-api",
            Subject:   fmt.Sprintf("%d", userID),
        },
    }
    
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString(s.accessSecret)
}

// Generate refresh token
func (s *TokenService) GenerateRefreshToken(userID uint) (string, error) {
    claims := RefreshClaims{
        UserID: userID,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(time.Now().Add(s.refreshTTL)),
            IssuedAt:  jwt.NewNumericDate(time.Now()),
            Issuer:    "my-api",
        },
    }
    
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString(s.refreshSecret)
}

// Generate token pair
type TokenPair struct {
    AccessToken  string `json:"access_token"`
    RefreshToken string `json:"refresh_token"`
    ExpiresIn    int64  `json:"expires_in"` // seconds
}

func (s *TokenService) GenerateTokenPair(userID uint, email, role string) (*TokenPair, error) {
    accessToken, err := s.GenerateAccessToken(userID, email, role)
    if err != nil {
        return nil, fmt.Errorf("generate access token: %w", err)
    }
    
    refreshToken, err := s.GenerateRefreshToken(userID)
    if err != nil {
        return nil, fmt.Errorf("generate refresh token: %w", err)
    }
    
    return &TokenPair{
        AccessToken:  accessToken,
        RefreshToken: refreshToken,
        ExpiresIn:    int64(s.accessTTL.Seconds()),
    }, nil
}

// Validate access token
func (s *TokenService) ValidateAccessToken(tokenString string) (*AccessClaims, error) {
    token, err := jwt.ParseWithClaims(tokenString, &AccessClaims{}, func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
        }
        return s.accessSecret, nil
    })
    
    if err != nil {
        return nil, fmt.Errorf("parse token: %w", err)
    }
    
    claims, ok := token.Claims.(*AccessClaims)
    if !ok || !token.Valid {
        return nil, fmt.Errorf("invalid token claims")
    }
    
    return claims, nil
}

// Validate refresh token
func (s *TokenService) ValidateRefreshToken(tokenString string) (*RefreshClaims, error) {
    token, err := jwt.ParseWithClaims(tokenString, &RefreshClaims{}, func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
        }
        return s.refreshSecret, nil
    })
    
    if err != nil {
        return nil, fmt.Errorf("parse refresh token: %w", err)
    }
    
    claims, ok := token.Claims.(*RefreshClaims)
    if !ok || !token.Valid {
        return nil, fmt.Errorf("invalid refresh token")
    }
    
    return claims, nil
}
</code></pre>

<h2 id="3-auth-service"><strong>3. 認証サービス</strong></h2>

<pre><code class="language-go">package service

type AuthService struct {
    userRepo     repository.UserRepository
    tokenService *auth.TokenService
}

func NewAuthService(userRepo repository.UserRepository, tokenService *auth.TokenService) *AuthService {
    return &AuthService{
        userRepo:     userRepo,
        tokenService: tokenService,
    }
}

type LoginInput struct {
    Email    string `json:"email"    binding:"required,email"`
    Password string `json:"password" binding:"required"`
}

type RegisterInput struct {
    Name     string `json:"name"     binding:"required,min=2,max=50"`
    Email    string `json:"email"    binding:"required,email"`
    Password string `json:"password" binding:"required,min=8"`
}

func (s *AuthService) Login(ctx context.Context, input LoginInput) (*auth.TokenPair, error) {
    user, err := s.userRepo.GetByEmail(ctx, input.Email)
    if err != nil {
        return nil, fmt.Errorf("invalid credentials")
    }
    
    if !auth.CheckPassword(input.Password, user.Password) {
        return nil, fmt.Errorf("invalid credentials")
    }
    
    if !user.IsActive {
        return nil, fmt.Errorf("account is deactivated")
    }
    
    tokens, err := s.tokenService.GenerateTokenPair(user.ID, user.Email, user.Role)
    if err != nil {
        return nil, fmt.Errorf("generate tokens: %w", err)
    }
    
    return tokens, nil
}

func (s *AuthService) Register(ctx context.Context, input RegisterInput) (*auth.TokenPair, error) {
    // Check duplicate email
    existing, _ := s.userRepo.GetByEmail(ctx, input.Email)
    if existing != nil {
        return nil, fmt.Errorf("email already registered")
    }
    
    hashedPassword, err := auth.HashPassword(input.Password)
    if err != nil {
        return nil, fmt.Errorf("hash password: %w", err)
    }
    
    user := &model.User{
        Name:     input.Name,
        Email:    input.Email,
        Password: hashedPassword,
        Role:     "user",
        IsActive: true,
    }
    
    if err := s.userRepo.Create(ctx, user); err != nil {
        return nil, fmt.Errorf("create user: %w", err)
    }
    
    return s.tokenService.GenerateTokenPair(user.ID, user.Email, user.Role)
}

func (s *AuthService) RefreshToken(ctx context.Context, refreshToken string) (*auth.TokenPair, error) {
    claims, err := s.tokenService.ValidateRefreshToken(refreshToken)
    if err != nil {
        return nil, fmt.Errorf("invalid refresh token")
    }
    
    user, err := s.userRepo.GetByID(ctx, claims.UserID)
    if err != nil {
        return nil, fmt.Errorf("user not found")
    }
    
    if !user.IsActive {
        return nil, fmt.Errorf("account is deactivated")
    }
    
    // Token rotation: generate new token pair
    return s.tokenService.GenerateTokenPair(user.ID, user.Email, user.Role)
}
</code></pre>

<h2 id="4-auth-middleware"><strong>4. 認証ミドルウェア</strong></h2>

<pre><code class="language-go">package middleware

import (
    "net/http"
    "strings"
    
    "github.com/gin-gonic/gin"
)

type contextKey string

const (
    UserIDKey   contextKey = "user_id"
    UserRoleKey contextKey = "user_role"
)

func AuthMiddleware(tokenService *auth.TokenService) gin.HandlerFunc {
    return func(c *gin.Context) {
        authHeader := c.GetHeader("Authorization")
        if authHeader == "" {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
                "error": "Authorization header required",
            })
            return
        }
        
        // Extract Bearer token
        parts := strings.SplitN(authHeader, " ", 2)
        if len(parts) != 2 || parts[0] != "Bearer" {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
                "error": "Invalid authorization format. Use: Bearer {token}",
            })
            return
        }
        
        // Validate token
        claims, err := tokenService.ValidateAccessToken(parts[1])
        if err != nil {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
                "error": "Invalid or expired token",
            })
            return
        }
        
        // Set user info in context
        c.Set(string(UserIDKey), claims.UserID)
        c.Set(string(UserRoleKey), claims.Role)
        c.Set("user_email", claims.Email)
        
        c.Next()
    }
}

// Helper: get current user ID from context
func GetUserID(c *gin.Context) uint {
    id, _ := c.Get(string(UserIDKey))
    return id.(uint)
}

func GetUserRole(c *gin.Context) string {
    role, _ := c.Get(string(UserRoleKey))
    return role.(string)
}

// Role-based middleware
func RequireRole(roles ...string) gin.HandlerFunc {
    return func(c *gin.Context) {
        userRole := GetUserRole(c)
        
        for _, role := range roles {
            if userRole == role {
                c.Next()
                return
            }
        }
        
        c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
            "error": "Insufficient permissions",
        })
    }
}
</code></pre>

<h2 id="5-auth-handlers"><strong>5. 認証ハンドラー</strong></h2>

<pre><code class="language-go">package handler

type AuthHandler struct {
    authService *service.AuthService
}

func NewAuthHandler(authService *service.AuthService) *AuthHandler {
    return &AuthHandler{authService: authService}
}

func (h *AuthHandler) Login(c *gin.Context) {
    var input service.LoginInput
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
        return
    }
    
    tokens, err := h.authService.Login(c.Request.Context(), input)
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "success": true,
        "data":    tokens,
    })
}

func (h *AuthHandler) Register(c *gin.Context) {
    var input service.RegisterInput
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
        return
    }
    
    tokens, err := h.authService.Register(c.Request.Context(), input)
    if err != nil {
        c.JSON(http.StatusConflict, gin.H{"error": err.Error()})
        return
    }
    
    c.JSON(http.StatusCreated, gin.H{
        "success": true,
        "data":    tokens,
    })
}

func (h *AuthHandler) RefreshToken(c *gin.Context) {
    var input struct {
        RefreshToken string `json:"refresh_token" binding:"required"`
    }
    if err := c.ShouldBindJSON(&input); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
        return
    }
    
    tokens, err := h.authService.RefreshToken(c.Request.Context(), input.RefreshToken)
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "success": true,
        "data":    tokens,
    })
}

func (h *AuthHandler) GetProfile(c *gin.Context) {
    userID := middleware.GetUserID(c)
    
    user, err := h.authService.GetProfile(c.Request.Context(), userID)
    if err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "success": true,
        "data":    user,
    })
}

// Router setup
func SetupAuthRoutes(r *gin.Engine, authHandler *AuthHandler, tokenService *auth.TokenService) {
    auth := r.Group("/auth")
    {
        auth.POST("/login", authHandler.Login)
        auth.POST("/register", authHandler.Register)
        auth.POST("/refresh", authHandler.RefreshToken)
    }
    
    // Protected routes
    protected := r.Group("/api")
    protected.Use(middleware.AuthMiddleware(tokenService))
    {
        protected.GET("/profile", authHandler.GetProfile)
        
        // Admin only
        admin := protected.Group("/admin")
        admin.Use(middleware.RequireRole("admin"))
        {
            admin.GET("/users", adminListUsers)
            admin.DELETE("/users/:id", adminDeleteUser)
        }
    }
}
</code></pre>

<h2 id="6-security-best-practices"><strong>6. セキュリティのベストプラクティス</strong></h2>

<ul>
<li><strong>パスワード</strong>: bcrypt (コスト ≥ 10)、md5/sha256 のみなし</li>
<li><strong>JWT</strong>: 有効期間の短いアクセス トークン (15 分)、有効期間の長いリフレッシュ トークン (7 日間)</li>
<li><strong>トークンローテーション</strong>: リフレッシュ時に新しいトークンペアを発行します</li>
<li><strong>秘密</strong>: 環境変数を使用し、コード内にハードコードを使用しないでください。</li>
<li><strong>HTTPS</strong>: 運用環境では常に HTTPS を使用します</li>
<li><strong>レート制限</strong>: ログイン試行を制限します (ブルート フォース保護)</li>
<li><strong>エラーメッセージ</strong>: 一般的な「無効な資格情報」、電子メールの存在は明らかにされません</li>
</ul>

<p>次の記事: <strong>認可、セキュリティ、ミドルウェア</strong> — RBAC、Casbin、および高度なセキュリティ。</p>
