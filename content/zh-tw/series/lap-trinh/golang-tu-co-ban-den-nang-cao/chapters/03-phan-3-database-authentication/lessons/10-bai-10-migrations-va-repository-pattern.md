---
id: 019d8b40-b302-7001-b003-golang0000302
title: 第 10 課：遷移與儲存庫模式
slug: bai-10-migrations-va-repository-pattern
description: golang-migrate，Atlas 遷移。儲存庫模式、服務層、使用 Wire/Fx 進行依賴注入。清潔建築專案結構。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：資料庫和身份驗證
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7950" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7950)"/>

  <!-- Decorations -->
  <g>
    <circle cx="766" cy="88" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1098" cy="40" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="146" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="252" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="68" x2="1100" y2="148" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="98" x2="1050" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：遷移與儲存庫模式</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：資料庫和身份驗證</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-database-migrations"><strong>1. 資料庫遷移</strong></h2>

<p>GORM AutoMigrate 開發方便，但是 <strong>不適合生產</strong> 因為它不支援回滾，不追蹤版本，也不管理安全架構變更。使用專門的遷移工具。</p>

<h3 id="1-1-golang-migrate"><strong>1.1. golang-遷移</strong></h3>

<pre><code class="language-bash"># Cài đặt
go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

# Hoặc brew (macOS)
brew install golang-migrate
</code></pre>

<pre><code class="language-bash"># Tạo migration
migrate create -ext sql -dir migrations -seq create_users_table

# Tạo ra 2 files:
# migrations/000001_create_users_table.up.sql
# migrations/000001_create_users_table.down.sql
</code></pre>

<pre><code class="language-sql">-- migrations/000001_create_users_table.up.sql
CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    role        VARCHAR(20) NOT NULL DEFAULT 'user',
    age         INTEGER DEFAULT 0,
    is_active   BOOLEAN DEFAULT TRUE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_deleted_at ON users(deleted_at);
</code></pre>

<pre><code class="language-sql">-- migrations/000001_create_users_table.down.sql
DROP TABLE IF EXISTS users;
</code></pre>

<pre><code class="language-sql">-- migrations/000002_create_posts_table.up.sql
CREATE TABLE posts (
    id          BIGSERIAL PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    slug        VARCHAR(255) NOT NULL UNIQUE,
    content     TEXT,
    published   BOOLEAN DEFAULT FALSE,
    author_id   BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ
);

CREATE INDEX idx_posts_author_id ON posts(author_id);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_published ON posts(published);
</code></pre>

<pre><code class="language-bash"># Chạy migrations
migrate -path migrations -database "postgres://user:pass@localhost:5432/mydb?sslmode=disable" up

# Rollback 1 step
migrate -path migrations -database "..." down 1

# Go to specific version
migrate -path migrations -database "..." goto 3

# Xem version hiện tại
migrate -path migrations -database "..." version

# Force version (khi migration bị stuck)
migrate -path migrations -database "..." force 2
</code></pre>

<h3 id="1-2-migrate-in-code"><strong>1.2.在程式碼中運行遷移</strong></h3>

<pre><code class="language-go">import (
    "github.com/golang-migrate/migrate/v4"
    _ "github.com/golang-migrate/migrate/v4/database/postgres"
    _ "github.com/golang-migrate/migrate/v4/source/file"
)

func RunMigrations(databaseURL string) error {
    m, err := migrate.New("file://migrations", databaseURL)
    if err != nil {
        return fmt.Errorf("create migrator: %w", err)
    }
    defer m.Close()
    
    if err := m.Up(); err != nil && err != migrate.ErrNoChange {
        return fmt.Errorf("run migrations: %w", err)
    }
    
    version, dirty, _ := m.Version()
    log.Printf("Migration version: %d, dirty: %v", version, dirty)
    
    return nil
}
</code></pre>

<h3 id="1-3-makefile"><strong>1.3.用於遷移的 Makefile</strong></h3>

<pre><code class="language-makefile">DB_URL=postgres://postgres:password@localhost:5432/mydb?sslmode=disable

.PHONY: migrate-create migrate-up migrate-down migrate-force

migrate-create:
	@read -p "Migration name: " name; \
	migrate create -ext sql -dir migrations -seq $$name

migrate-up:
	migrate -path migrations -database "$(DB_URL)" up

migrate-down:
	migrate -path migrations -database "$(DB_URL)" down 1

migrate-force:
	@read -p "Force version: " version; \
	migrate -path migrations -database "$(DB_URL)" force $$version

migrate-version:
	migrate -path migrations -database "$(DB_URL)" version
</code></pre>

<h2 id="2-repository-pattern"><strong>2. 儲存庫模式</strong></h2>

<p>儲存庫模式將資料存取邏輯與業務邏輯分開，使程式碼易於測試和維護。</p>

<h3 id="2-1-interface"><strong>2.1.儲存庫接口</strong></h3>

<pre><code class="language-go">// internal/repository/user_repository.go
package repository

import "context"

type UserRepository interface {
    Create(ctx context.Context, user *model.User) error
    GetByID(ctx context.Context, id uint) (*model.User, error)
    GetByEmail(ctx context.Context, email string) (*model.User, error)
    List(ctx context.Context, filter UserFilter) ([]model.User, int64, error)
    Update(ctx context.Context, user *model.User) error
    Delete(ctx context.Context, id uint) error
}

type UserFilter struct {
    Search   string
    Role     string
    IsActive *bool
    Page     int
    Limit    int
    SortBy   string
    SortDir  string
}

type PostRepository interface {
    Create(ctx context.Context, post *model.Post) error
    GetByID(ctx context.Context, id uint) (*model.Post, error)
    GetBySlug(ctx context.Context, slug string) (*model.Post, error)
    List(ctx context.Context, filter PostFilter) ([]model.Post, int64, error)
    Update(ctx context.Context, post *model.Post) error
    Delete(ctx context.Context, id uint) error
    GetByAuthor(ctx context.Context, authorID uint) ([]model.Post, error)
}
</code></pre>

<h3 id="2-2-gorm-implementation"><strong>2.2. GORM 實施</strong></h3>

<pre><code class="language-go">// internal/repository/gorm_user_repository.go
package repository

import (
    "context"
    "errors"
    "fmt"
    
    "gorm.io/gorm"
)

type gormUserRepository struct {
    db *gorm.DB
}

func NewGormUserRepository(db *gorm.DB) UserRepository {
    return &gormUserRepository{db: db}
}

func (r *gormUserRepository) Create(ctx context.Context, user *model.User) error {
    return r.db.WithContext(ctx).Create(user).Error
}

func (r *gormUserRepository) GetByID(ctx context.Context, id uint) (*model.User, error) {
    var user model.User
    err := r.db.WithContext(ctx).
        Preload("Profile").
        First(&user, id).Error
    
    if errors.Is(err, gorm.ErrRecordNotFound) {
        return nil, ErrNotFound
    }
    return &user, err
}

func (r *gormUserRepository) GetByEmail(ctx context.Context, email string) (*model.User, error) {
    var user model.User
    err := r.db.WithContext(ctx).
        Where("email = ?", email).
        First(&user).Error
    
    if errors.Is(err, gorm.ErrRecordNotFound) {
        return nil, ErrNotFound
    }
    return &user, err
}

func (r *gormUserRepository) List(ctx context.Context, filter UserFilter) ([]model.User, int64, error) {
    var users []model.User
    var total int64
    
    query := r.db.WithContext(ctx).Model(&model.User{})
    
    // Apply filters
    if filter.Search != "" {
        query = query.Where("name ILIKE ? OR email ILIKE ?",
            "%"+filter.Search+"%", "%"+filter.Search+"%")
    }
    if filter.Role != "" {
        query = query.Where("role = ?", filter.Role)
    }
    if filter.IsActive != nil {
        query = query.Where("is_active = ?", *filter.IsActive)
    }
    
    // Count total
    if err := query.Count(&total).Error; err != nil {
        return nil, 0, fmt.Errorf("count users: %w", err)
    }
    
    // Sorting
    sortBy := "created_at"
    if filter.SortBy != "" {
        sortBy = filter.SortBy
    }
    sortDir := "DESC"
    if filter.SortDir == "asc" {
        sortDir = "ASC"
    }
    query = query.Order(fmt.Sprintf("%s %s", sortBy, sortDir))
    
    // Pagination
    page := filter.Page
    if page < 1 { page = 1 }
    limit := filter.Limit
    if limit < 1 { limit = 20 }
    offset := (page - 1) * limit
    
    err := query.Offset(offset).Limit(limit).Find(&users).Error
    return users, total, err
}

func (r *gormUserRepository) Update(ctx context.Context, user *model.User) error {
    return r.db.WithContext(ctx).Save(user).Error
}

func (r *gormUserRepository) Delete(ctx context.Context, id uint) error {
    return r.db.WithContext(ctx).Delete(&model.User{}, id).Error
}

// Sentinel errors
var ErrNotFound = errors.New("record not found")
</code></pre>

<h2 id="3-service-layer"><strong>3.服務層</strong></h2>

<pre><code class="language-go">// internal/service/user_service.go
package service

import (
    "context"
    "fmt"
    
    "golang.org/x/crypto/bcrypt"
)

type UserService struct {
    repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) *UserService {
    return &UserService{repo: repo}
}

type CreateUserInput struct {
    Name     string `json:"name"     validate:"required,min=2,max=50"`
    Email    string `json:"email"    validate:"required,email"`
    Password string `json:"password" validate:"required,min=8"`
}

type UpdateUserInput struct {
    Name  *string `json:"name"  validate:"omitempty,min=2,max=50"`
    Email *string `json:"email" validate:"omitempty,email"`
    Age   *int    `json:"age"   validate:"omitempty,gte=0,lte=120"`
}

func (s *UserService) Create(ctx context.Context, input CreateUserInput) (*model.User, error) {
    // Check duplicate email
    existing, err := s.repo.GetByEmail(ctx, input.Email)
    if err == nil && existing != nil {
        return nil, fmt.Errorf("email already exists")
    }
    
    // Hash password
    hashed, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
    if err != nil {
        return nil, fmt.Errorf("hash password: %w", err)
    }
    
    user := &model.User{
        Name:     input.Name,
        Email:    input.Email,
        Password: string(hashed),
        Role:     "user",
        IsActive: true,
    }
    
    if err := s.repo.Create(ctx, user); err != nil {
        return nil, fmt.Errorf("create user: %w", err)
    }
    
    return user, nil
}

func (s *UserService) GetByID(ctx context.Context, id uint) (*model.User, error) {
    return s.repo.GetByID(ctx, id)
}

func (s *UserService) List(ctx context.Context, filter repository.UserFilter) ([]model.User, int64, error) {
    return s.repo.List(ctx, filter)
}

func (s *UserService) Update(ctx context.Context, id uint, input UpdateUserInput) (*model.User, error) {
    user, err := s.repo.GetByID(ctx, id)
    if err != nil {
        return nil, err
    }
    
    if input.Name != nil { user.Name = *input.Name }
    if input.Email != nil { user.Email = *input.Email }
    if input.Age != nil { user.Age = *input.Age }
    
    if err := s.repo.Update(ctx, user); err != nil {
        return nil, fmt.Errorf("update user: %w", err)
    }
    
    return user, nil
}

func (s *UserService) Delete(ctx context.Context, id uint) error {
    return s.repo.Delete(ctx, id)
}
</code></pre>

<h2 id="4-dependency-injection"><strong>4. 依賴注入</strong></h2>

<h3 id="4-1-manual-di"><strong>4.1.手動 DI（構造函數注入）</strong></h3>

<pre><code class="language-go">// cmd/api/main.go
func main() {
    // Load config
    cfg := config.Load()
    
    // Connect database
    db, err := database.Connect(cfg.DatabaseURL)
    if err != nil {
        log.Fatal(err)
    }
    
    // Wire up dependencies (manual DI)
    userRepo := repository.NewGormUserRepository(db)
    postRepo := repository.NewGormPostRepository(db)
    
    userService := service.NewUserService(userRepo)
    postService := service.NewPostService(postRepo)
    authService := service.NewAuthService(userRepo, cfg.JWTSecret)
    
    userHandler := handler.NewUserHandler(userService)
    postHandler := handler.NewPostHandler(postService)
    authHandler := handler.NewAuthHandler(authService)
    
    // Setup router
    router := handler.NewRouter(userHandler, postHandler, authHandler)
    
    // Start server
    server := &http.Server{
        Addr:    ":" + cfg.Port,
        Handler: router,
    }
    
    log.Printf("Server starting on :%s", cfg.Port)
    log.Fatal(server.ListenAndServe())
}
</code></pre>

<h3 id="4-2-wire"><strong>4.2. Google Wire（代碼產生 DI）</strong></h3>

<pre><code class="language-go">// Khi project lớn, manual DI phức tạp → dùng Wire

// go install github.com/google/wire/cmd/wire@latest

// internal/wire/wire.go
//go:build wireinject

package wire

import (
    "github.com/google/wire"
)

func InitializeApp(cfg *config.Config) (*App, error) {
    wire.Build(
        database.Connect,
        repository.NewGormUserRepository,
        repository.NewGormPostRepository,
        service.NewUserService,
        service.NewPostService,
        handler.NewUserHandler,
        handler.NewPostHandler,
        handler.NewRouter,
        NewApp,
    )
    return nil, nil
}

// Chạy: wire ./internal/wire/
// Tự generate wire_gen.go với dependency graph
</code></pre>

<h2 id="5-clean-architecture"><strong>5. 簡潔的架構</strong></h2>

<pre><code>┌─────────────────────────────────────────────┐
│                  HTTP Layer                  │
│  Handler → Parse Request → Call Service      │
│            → Format Response                 │
├─────────────────────────────────────────────┤
│               Service Layer                  │
│  Business Logic → Validation → Orchestrate   │
│  Depends on: Repository Interface            │
├─────────────────────────────────────────────┤
│             Repository Layer                 │
│  Data Access → GORM/SQL → Return Models     │
│  Implements: Repository Interface            │
├─────────────────────────────────────────────┤
│              Domain Models                   │
│  User, Post, Tag → No dependencies          │
└─────────────────────────────────────────────┘
</code></pre>

<pre><code>my-api/
├── cmd/api/main.go               # Entry point + DI wiring
├── internal/
│   ├── config/config.go          # Configuration
│   ├── model/                    # Domain models
│   │   ├── user.go
│   │   └── post.go
│   ├── repository/               # Data access (interface + impl)
│   │   ├── interfaces.go         # Repository interfaces
│   │   ├── gorm_user.go          # GORM implementation
│   │   └── gorm_post.go
│   ├── service/                  # Business logic
│   │   ├── user_service.go
│   │   └── post_service.go
│   ├── handler/                  # HTTP handlers
│   │   ├── router.go
│   │   ├── user_handler.go
│   │   └── post_handler.go
│   ├── middleware/               # HTTP middleware
│   │   ├── auth.go
│   │   └── logger.go
│   └── dto/                     # Data Transfer Objects
│       ├── request.go
│       └── response.go
├── migrations/                   # SQL migrations
├── go.mod
├── Makefile
└── Dockerfile
</code></pre>

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><strong>遷移</strong>：golang-migrate 用於版本控制的架構更改</li>
<li><strong>儲存庫模式</strong>：介面+實現，資料存取分離</li>
<li><strong>服務層</strong>：業務邏輯、驗證、編排</li>
<li><strong>依賴注入</strong>：手動（小）、線/FX（大）</li>
<li><strong>乾淨的架構</strong>：處理程序→服務→儲存庫→模型</li>
</ul>

<p>下一篇： <strong>身份驗證 - JWT 和 OAuth2</strong> — 使用 JWT 令牌的安全性 API。</p>
