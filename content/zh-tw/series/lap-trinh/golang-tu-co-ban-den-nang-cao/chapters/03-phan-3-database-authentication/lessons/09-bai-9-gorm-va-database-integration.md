---
id: 019d8b40-b301-7001-b003-golang0000301
title: 第 9 課：GORM 與資料庫集成
slug: bai-9-gorm-va-database-integration
description: >-
  GORM v2 ORM、模型、關聯（HasOne、HasMany、BelongsTo、Many2Many）。 CRUD 操作、作用域、掛鉤。連接池調整。比較
  GORM、sqlx、sqlc 和 Ent。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：資料庫和身份驗證
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3359" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3359)"/>

  <!-- Decorations -->
  <g>
    <circle cx="869" cy="217" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="638" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="907" cy="255" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="676" cy="144" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="187" x2="1100" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="217" x2="1050" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1073.3730669589463,216 1073.3730669589463,258 1037,279 1000.6269330410536,258 1000.6269330410536,216 1037,195" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：GORM 與資料庫集成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：資料庫和身份驗證</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-go-orm-landscape"><strong>1. 走向 ORM 格局</strong></h2>

<table>
<thead>
<tr><th>圖書館</th><th>類型</th><th>優點</th><th>缺點</th></tr>
</thead>
<tbody>
<tr><td><strong>戈爾姆</strong></td><td>完整的 ORM</td><td>功能豐富、流行、聯想</td><td>頭頂反射，魔法</td></tr>
<tr><td><strong>sqlx</strong></td><td>SQL助手</td><td>輕量級、原始 SQL、快速</td><td>無需遷移，手動查詢</td></tr>
<tr><td><strong>sqlc</strong></td><td>程式碼產生器</td><td>類型安全、編譯時檢查</td><td>SQL優先，複雜的設置</td></tr>
<tr><td><strong>耳鼻喉科</strong></td><td>圖 ORM</td><td>模式優先，程式碼生成</td><td>學習曲線，固執己見</td></tr>
<tr><td><strong>包子</strong></td><td>SQL優先的ORM</td><td>快速、結構映射、遷移</td><td>不太受歡迎</td></tr>
</tbody>
</table>

<p>本課程重點在於 <strong>GORM v2</strong> — 最受歡迎的 Go ORM，適合大多數專案。</p>

<h2 id="2-setup"><strong>2. 使用 PostgreSQL 設定 GORM</strong></h2>

<pre><code class="language-bash">go get gorm.io/gorm
go get gorm.io/driver/postgres
</code></pre>

<pre><code class="language-go">package database

import (
    "fmt"
    "log"
    "os"
    "time"
    
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect() error {
    dsn := fmt.Sprintf(
        "host=%s port=%s user=%s password=%s dbname=%s sslmode=disable TimeZone=Asia/Ho_Chi_Minh",
        os.Getenv("DB_HOST"),
        os.Getenv("DB_PORT"),
        os.Getenv("DB_USER"),
        os.Getenv("DB_PASSWORD"),
        os.Getenv("DB_NAME"),
    )
    
    var err error
    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
        Logger: logger.Default.LogMode(logger.Info),
        // Performance settings
        PrepareStmt:                              true,
        SkipDefaultTransaction:                   true,
        DisableForeignKeyConstraintWhenMigrating: false,
    })
    if err != nil {
        return fmt.Errorf("connect database: %w", err)
    }
    
    // Connection pool settings
    sqlDB, err := DB.DB()
    if err != nil {
        return fmt.Errorf("get sql.DB: %w", err)
    }
    
    sqlDB.SetMaxOpenConns(25)                 // Max open connections
    sqlDB.SetMaxIdleConns(10)                 // Max idle connections
    sqlDB.SetConnMaxLifetime(5 * time.Minute) // Connection max lifetime
    sqlDB.SetConnMaxIdleTime(1 * time.Minute) // Idle connection max lifetime
    
    log.Println("Database connected")
    return nil
}
</code></pre>

<h2 id="3-models"><strong>3. 定義模型</strong></h2>

<pre><code class="language-go">import (
    "time"
    "gorm.io/gorm"
)

// Base model (thay gorm.Model để customize)
type BaseModel struct {
    ID        uint           `json:"id"         gorm:"primaryKey"`
    CreatedAt time.Time      `json:"created_at"`
    UpdatedAt time.Time      `json:"updated_at"`
    DeletedAt gorm.DeletedAt `json:"-"          gorm:"index"` // Soft delete
}

// User model
type User struct {
    BaseModel
    Name     string  `json:"name"     gorm:"size:100;not null"`
    Email    string  `json:"email"    gorm:"size:255;uniqueIndex;not null"`
    Password string  `json:"-"        gorm:"size:255;not null"`
    Age      int     `json:"age"      gorm:"default:0"`
    Role     string  `json:"role"     gorm:"size:20;default:'user'"`
    IsActive bool    `json:"is_active" gorm:"default:true"`
    
    // Associations
    Profile  *Profile `json:"profile,omitempty"  gorm:"constraint:OnDelete:CASCADE"`
    Posts    []Post   `json:"posts,omitempty"    gorm:"foreignKey:AuthorID"`
    Tags     []Tag   `json:"tags,omitempty"     gorm:"many2many:user_tags"`
}

// TableName - custom table name
func (User) TableName() string {
    return "users"
}

// Profile - HasOne relationship
type Profile struct {
    ID     uint   `json:"id"      gorm:"primaryKey"`
    UserID uint   `json:"user_id" gorm:"uniqueIndex;not null"`
    Bio    string `json:"bio"     gorm:"type:text"`
    Avatar string `json:"avatar"  gorm:"size:500"`
    Phone  string `json:"phone"   gorm:"size:20"`
}

// Post - BelongsTo User
type Post struct {
    BaseModel
    Title     string `json:"title"      gorm:"size:255;not null"`
    Content   string `json:"content"    gorm:"type:text"`
    Slug      string `json:"slug"       gorm:"size:255;uniqueIndex"`
    Published bool   `json:"published"  gorm:"default:false"`
    AuthorID  uint   `json:"author_id"  gorm:"index;not null"`
    
    Author    User       `json:"author,omitempty"    gorm:"foreignKey:AuthorID"`
    Tags      []Tag      `json:"tags,omitempty"      gorm:"many2many:post_tags"`
    Comments  []Comment  `json:"comments,omitempty"`
}

// Tag - Many2Many
type Tag struct {
    ID   uint   `json:"id"   gorm:"primaryKey"`
    Name string `json:"name" gorm:"size:50;uniqueIndex;not null"`
    Slug string `json:"slug" gorm:"size:50;uniqueIndex;not null"`
}

// Comment - BelongsTo Post
type Comment struct {
    BaseModel
    Content  string `json:"content"   gorm:"type:text;not null"`
    PostID   uint   `json:"post_id"   gorm:"index;not null"`
    AuthorID uint   `json:"author_id" gorm:"index;not null"`
    Author   User   `json:"author"    gorm:"foreignKey:AuthorID"`
}

// Auto Migrate
func Migrate(db *gorm.DB) error {
    return db.AutoMigrate(
        &User{},
        &Profile{},
        &Post{},
        &Tag{},
        &Comment{},
    )
}
</code></pre>

<h2 id="4-crud"><strong>4.增刪改查操作</strong></h2>

<h3 id="4-1-create"><strong>4.1.創建</strong></h3>

<pre><code class="language-go">// Create single record
user := User{
    Name:     "Alice",
    Email:    "alice@example.com",
    Password: hashedPassword,
    Role:     "user",
}
result := db.Create(&user)
// user.ID được auto-fill sau khi create
fmt.Println(user.ID)           // 1
fmt.Println(result.RowsAffected) // 1
fmt.Println(result.Error)       // nil

// Create with selected fields
db.Select("Name", "Email", "Password").Create(&user)

// Batch create
users := []User{
    {Name: "Bob", Email: "bob@example.com"},
    {Name: "Carol", Email: "carol@example.com"},
}
db.Create(&users) // Batch insert

// CreateInBatches (cho large datasets)
db.CreateInBatches(&users, 100) // 100 records per batch

// Create with associations
user := User{
    Name:  "Dave",
    Email: "dave@example.com",
    Profile: &Profile{
        Bio:    "Go developer",
        Avatar: "avatar.jpg",
    },
}
db.Create(&user) // Tạo user + profile
</code></pre>

<h3 id="4-2-read"><strong>4.2.讀取（查詢）</strong></h3>

<pre><code class="language-go">// Find by primary key
var user User
db.First(&user, 1)                    // WHERE id = 1
db.First(&user, "id = ?", "1")       // WHERE id = '1'

// Find by condition
db.Where("email = ?", "alice@example.com").First(&user)
db.Where("role = ? AND is_active = ?", "admin", true).Find(&users)

// Where with struct (chỉ non-zero fields)
db.Where(&User{Role: "admin", IsActive: true}).Find(&users)

// Where with map
db.Where(map[string]any{"role": "admin"}).Find(&users)

// Not / Or
db.Not("role = ?", "admin").Find(&users)
db.Where("role = ?", "admin").Or("role = ?", "moderator").Find(&users)

// Select specific fields
db.Select("id", "name", "email").Find(&users)

// Order, Limit, Offset
db.Order("created_at DESC").Limit(10).Offset(20).Find(&users)

// Count
var count int64
db.Model(&User{}).Where("is_active = ?", true).Count(&count)

// Pluck (single column)
var emails []string
db.Model(&User{}).Pluck("email", &emails)

// Distinct
db.Distinct("role").Model(&User{}).Pluck("role", &roles)

// Raw SQL
db.Raw("SELECT * FROM users WHERE age > ?", 18).Scan(&users)

// Preload associations (Eager loading)
db.Preload("Profile").Preload("Posts").Find(&users)

// Nested preload
db.Preload("Posts.Comments.Author").Find(&users)

// Conditional preload
db.Preload("Posts", "published = ?", true).Find(&users)

// Preload with custom query
db.Preload("Posts", func(db *gorm.DB) *gorm.DB {
    return db.Where("published = ?", true).Order("created_at DESC").Limit(5)
}).Find(&users)

// Joins (instead of Preload for filtering)
db.Joins("Profile").Where("profiles.bio LIKE ?", "%Go%").Find(&users)
</code></pre>

<h3 id="4-3-update"><strong>4.3.更新</strong></h3>

<pre><code class="language-go">// Update single field
db.Model(&user).Update("name", "Alice Updated")

// Update multiple fields
db.Model(&user).Updates(User{Name: "Alice", Age: 30})
// ⚠️ Struct update bỏ qua zero values (age=0, active=false)

// Update với map (bao gồm zero values)
db.Model(&user).Updates(map[string]any{
    "name":      "Alice",
    "age":       0,       // Được update
    "is_active": false,   // Được update
})

// Update with condition
db.Model(&User{}).Where("role = ?", "user").Update("is_active", false)

// Batch update
db.Model(&User{}).Where("created_at < ?", time.Now().AddDate(-1, 0, 0)).
    Updates(map[string]any{"is_active": false})

// Update selected fields only
db.Model(&user).Select("Name", "Age").Updates(User{Name: "Alice", Age: 30})

// SQL Expression
db.Model(&post).Update("view_count", gorm.Expr("view_count + ?", 1))
</code></pre>

<h3 id="4-4-delete"><strong>4.4.刪除</strong></h3>

<pre><code class="language-go">// Soft delete (nếu model có DeletedAt field)
db.Delete(&user, 1)
// UPDATE users SET deleted_at = NOW() WHERE id = 1

// Delete with condition
db.Where("is_active = ?", false).Delete(&User{})

// Hard delete (bỏ qua soft delete)
db.Unscoped().Delete(&user, 1)
// DELETE FROM users WHERE id = 1

// Query including soft deleted
db.Unscoped().Where("id = ?", 1).Find(&user)
</code></pre>

<h2 id="5-advanced"><strong>5. 高階 GORM 功能</strong></h2>

<h3 id="5-1-scopes"><strong>5.1.範圍（可重複使用查詢）</strong></h3>

<pre><code class="language-go">// Scope = reusable query builder
func ActiveUsers(db *gorm.DB) *gorm.DB {
    return db.Where("is_active = ?", true)
}

func AdminRole(db *gorm.DB) *gorm.DB {
    return db.Where("role = ?", "admin")
}

func Paginate(page, limit int) func(db *gorm.DB) *gorm.DB {
    return func(db *gorm.DB) *gorm.DB {
        offset := (page - 1) * limit
        return db.Offset(offset).Limit(limit)
    }
}

func Search(keyword string) func(db *gorm.DB) *gorm.DB {
    return func(db *gorm.DB) *gorm.DB {
        if keyword == "" {
            return db
        }
        return db.Where("name ILIKE ? OR email ILIKE ?",
            "%"+keyword+"%", "%"+keyword+"%")
    }
}

// Usage
db.Scopes(ActiveUsers, AdminRole, Paginate(1, 10)).Find(&users)
db.Scopes(Search("alice"), Paginate(page, limit)).Find(&users)
</code></pre>

<h3 id="5-2-hooks"><strong>5.2.鉤子（回調）</strong></h3>

<pre><code class="language-go">// BeforeCreate hook
func (u *User) BeforeCreate(tx *gorm.DB) error {
    if u.Password != "" {
        hashed, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
        if err != nil {
            return err
        }
        u.Password = string(hashed)
    }
    return nil
}

// BeforeUpdate hook
func (u *User) BeforeUpdate(tx *gorm.DB) error {
    // Validate trước khi update
    if u.Email != "" && !isValidEmail(u.Email) {
        return errors.New("invalid email format")
    }
    return nil
}

// AfterCreate hook
func (u *User) AfterCreate(tx *gorm.DB) error {
    // Send welcome email, create profile, etc.
    log.Printf("User created: %d - %s", u.ID, u.Email)
    return nil
}

// Available hooks:
// BeforeSave, BeforeCreate, BeforeUpdate, BeforeDelete
// AfterSave, AfterCreate, AfterUpdate, AfterDelete
// AfterFind
</code></pre>

<h3 id="5-3-transactions"><strong>5.3.交易</strong></h3>

<pre><code class="language-go">// Auto transaction
err := db.Transaction(func(tx *gorm.DB) error {
    // Tạo user
    user := User{Name: "Alice", Email: "alice@example.com"}
    if err := tx.Create(&user).Error; err != nil {
        return err // Rollback
    }
    
    // Tạo profile
    profile := Profile{UserID: user.ID, Bio: "New user"}
    if err := tx.Create(&profile).Error; err != nil {
        return err // Rollback
    }
    
    // Tạo welcome post
    post := Post{Title: "Welcome", AuthorID: user.ID}
    if err := tx.Create(&post).Error; err != nil {
        return err // Rollback
    }
    
    return nil // Commit
})

// Nested transactions (savepoints)
db.Transaction(func(tx *gorm.DB) error {
    tx.Create(&user1)
    
    tx.Transaction(func(tx2 *gorm.DB) error {
        tx2.Create(&user2)
        return errors.New("rollback user2 only") // Savepoint rollback
    })
    
    return nil // user1 committed
})
    
// Manual transaction
tx := db.Begin()
defer func() {
    if r := recover(); r != nil {
        tx.Rollback()
    }
}()

if err := tx.Create(&user).Error; err != nil {
    tx.Rollback()
    return err
}

tx.Commit()
</code></pre>

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><strong>GORM v2</strong>：全功能的 ORM、關聯、鉤子、範圍</li>
<li><strong>型號</strong>：列配置的結構標籤，使用 gorm.DeletedAt 進行軟刪除</li>
<li><strong>增刪改查</strong>：使用可連結查詢產生器建立、尋找、更新、刪除</li>
<li><strong>預載</strong>：預載關聯、嵌套預載、條件預載</li>
<li><strong>範圍</strong>：可重複使用的查詢條件（分頁、搜尋、篩選）</li>
<li><strong>交易</strong>：自動事務，巢狀保存點</li>
<li><strong>連接池</strong>：MaxOpenConns、MaxIdleConns、ConnMaxLifetime</li>
</ul>

<p>下一篇： <strong>遷移和儲存庫模式</strong> — 資料庫遷移和乾淨的架構。</p>
