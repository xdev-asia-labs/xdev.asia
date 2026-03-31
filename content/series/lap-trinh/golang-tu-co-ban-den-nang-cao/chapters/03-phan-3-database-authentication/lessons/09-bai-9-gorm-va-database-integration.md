---
id: 019d8b40-b301-7001-b003-golang0000301
title: 'Bài 9: GORM & Database Integration'
slug: bai-9-gorm-va-database-integration
description: >-
  GORM v2 ORM, models, associations (HasOne, HasMany, BelongsTo,
  Many2Many). CRUD operations, scopes, hooks. Connection pool tuning.
  So sánh GORM vs sqlx vs sqlc vs Ent.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Database & Authentication"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-go-orm-landscape"><strong>1. Go ORM Landscape</strong></h2>

<table>
<thead>
<tr><th>Library</th><th>Type</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
</thead>
<tbody>
<tr><td><strong>GORM</strong></td><td>Full ORM</td><td>Feature-rich, popular, associations</td><td>Reflection overhead, magic</td></tr>
<tr><td><strong>sqlx</strong></td><td>SQL helper</td><td>Lightweight, raw SQL, fast</td><td>No migrations, manual queries</td></tr>
<tr><td><strong>sqlc</strong></td><td>Code generator</td><td>Type-safe, compile-time check</td><td>SQL-first, setup phức tạp</td></tr>
<tr><td><strong>Ent</strong></td><td>Graph ORM</td><td>Schema-first, code generation</td><td>Learning curve, opinionated</td></tr>
<tr><td><strong>Bun</strong></td><td>SQL-first ORM</td><td>Fast, struct mapping, migrations</td><td>Ít popular hơn</td></tr>
</tbody>
</table>

<p>Khóa học này tập trung vào <strong>GORM v2</strong> — ORM phổ biến nhất cho Go, phù hợp cho hầu hết projects.</p>

<h2 id="2-setup"><strong>2. Setup GORM với PostgreSQL</strong></h2>

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

<h2 id="3-models"><strong>3. Defining Models</strong></h2>

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

<h2 id="4-crud"><strong>4. CRUD Operations</strong></h2>

<h3 id="4-1-create"><strong>4.1. Create</strong></h3>

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

<h3 id="4-2-read"><strong>4.2. Read (Query)</strong></h3>

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

<h3 id="4-3-update"><strong>4.3. Update</strong></h3>

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

<h3 id="4-4-delete"><strong>4.4. Delete</strong></h3>

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

<h2 id="5-advanced"><strong>5. Advanced GORM Features</strong></h2>

<h3 id="5-1-scopes"><strong>5.1. Scopes (Reusable queries)</strong></h3>

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

<h3 id="5-2-hooks"><strong>5.2. Hooks (Callbacks)</strong></h3>

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

<h3 id="5-3-transactions"><strong>5.3. Transactions</strong></h3>

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

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><strong>GORM v2</strong>: Full-featured ORM, associations, hooks, scopes</li>
<li><strong>Models</strong>: Struct tags cho column config, soft delete với gorm.DeletedAt</li>
<li><strong>CRUD</strong>: Create, Find, Update, Delete với chainable query builder</li>
<li><strong>Preload</strong>: Eager loading associations, nested preload, conditional preload</li>
<li><strong>Scopes</strong>: Reusable query conditions (pagination, search, filters)</li>
<li><strong>Transactions</strong>: Auto transaction, nested savepoints</li>
<li><strong>Connection Pool</strong>: MaxOpenConns, MaxIdleConns, ConnMaxLifetime</li>
</ul>

<p>Bài tiếp theo: <strong>Migrations & Repository Pattern</strong> — database migrations và clean architecture.</p>
