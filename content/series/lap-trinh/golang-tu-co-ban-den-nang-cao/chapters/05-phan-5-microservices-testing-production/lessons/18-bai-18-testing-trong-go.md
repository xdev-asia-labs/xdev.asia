---
id: 019d8b40-b502-7001-b003-golang0000502
title: 'Bài 18: Testing trong Go'
slug: bai-18-testing-trong-go
description: >-
  Unit testing, table-driven tests. Mocking với testify, mockery.
  Integration tests with testcontainers. HTTP handler testing.
  Benchmark tests, fuzzing. Test coverage, CI integration.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Microservices, Testing & Production"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-testing-basics"><strong>1. Testing Basics</strong></h2>

<pre><code class="language-go">// math.go
package math

func Add(a, b int) int { return a + b }
func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", result)
    }
}

func TestDivide(t *testing.T) {
    result, err := Divide(10, 2)
    if err != nil {
        t.Fatalf("unexpected error: %v", err)
    }
    if result != 5 {
        t.Errorf("Divide(10, 2) = %f; want 5", result)
    }
}

func TestDivideByZero(t *testing.T) {
    _, err := Divide(10, 0)
    if err == nil {
        t.Error("expected error for division by zero")
    }
}
</code></pre>

<h2 id="2-table-driven-tests"><strong>2. Table-Driven Tests</strong></h2>

<pre><code class="language-go">func TestAdd_TableDriven(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive numbers", 2, 3, 5},
        {"negative numbers", -2, -3, -5},
        {"mixed", -2, 3, 1},
        {"zeros", 0, 0, 0},
        {"large numbers", 1000000, 2000000, 3000000},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := Add(tt.a, tt.b)
            if result != tt.expected {
                t.Errorf("Add(%d, %d) = %d; want %d", tt.a, tt.b, result, tt.expected)
            }
        })
    }
}

func TestDivide_TableDriven(t *testing.T) {
    tests := []struct {
        name      string
        a, b      float64
        expected  float64
        expectErr bool
    }{
        {"normal", 10, 2, 5, false},
        {"division by zero", 10, 0, 0, true},
        {"negative", -10, 2, -5, false},
        {"decimal", 7, 3, 2.3333333333333335, false},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result, err := Divide(tt.a, tt.b)
            
            if tt.expectErr {
                if err == nil {
                    t.Error("expected error, got nil")
                }
                return
            }
            
            if err != nil {
                t.Fatalf("unexpected error: %v", err)
            }
            if result != tt.expected {
                t.Errorf("got %f; want %f", result, tt.expected)
            }
        })
    }
}
</code></pre>

<h2 id="3-testify"><strong>3. Testify — Assertions & Mocking</strong></h2>

<pre><code class="language-bash">go get github.com/stretchr/testify
</code></pre>

<pre><code class="language-go">import (
    "testing"
    
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/require"
)

func TestAdd_Testify(t *testing.T) {
    assert.Equal(t, 5, Add(2, 3))
    assert.NotEqual(t, 4, Add(2, 3))
}

func TestDivide_Testify(t *testing.T) {
    result, err := Divide(10, 2)
    require.NoError(t, err)              // Fail immediately if error
    assert.Equal(t, 5.0, result)
    assert.InDelta(t, 5.0, result, 0.01) // Float comparison
    
    _, err = Divide(10, 0)
    assert.Error(t, err)
    assert.Contains(t, err.Error(), "division by zero")
}
</code></pre>

<h3 id="3-1-interface-mocking"><strong>3.1. Interface Mocking</strong></h3>

<pre><code class="language-go">// Repository interface
type UserRepository interface {
    GetByID(ctx context.Context, id uint) (*User, error)
    Create(ctx context.Context, user *User) error
    GetByEmail(ctx context.Context, email string) (*User, error)
}

// Mock (auto-generate: go install github.com/vektra/mockery/v2@latest)
// mockery --name=UserRepository --output=mocks

// Manual mock
type MockUserRepository struct {
    mock.Mock
}

func (m *MockUserRepository) GetByID(ctx context.Context, id uint) (*User, error) {
    args := m.Called(ctx, id)
    if args.Get(0) == nil {
        return nil, args.Error(1)
    }
    return args.Get(0).(*User), args.Error(1)
}

func (m *MockUserRepository) Create(ctx context.Context, user *User) error {
    args := m.Called(ctx, user)
    return args.Error(0)
}

func (m *MockUserRepository) GetByEmail(ctx context.Context, email string) (*User, error) {
    args := m.Called(ctx, email)
    if args.Get(0) == nil {
        return nil, args.Error(1)
    }
    return args.Get(0).(*User), args.Error(1)
}

// Test with mock
func TestUserService_GetUser(t *testing.T) {
    mockRepo := new(MockUserRepository)
    svc := NewUserService(mockRepo)
    
    expectedUser := &User{ID: 1, Name: "Duy", Email: "duy@xdev.asia"}
    
    // Setup expectations
    mockRepo.On("GetByID", mock.Anything, uint(1)).Return(expectedUser, nil)
    mockRepo.On("GetByID", mock.Anything, uint(999)).Return(nil, fmt.Errorf("not found"))
    
    // Test success
    user, err := svc.GetUser(context.Background(), 1)
    require.NoError(t, err)
    assert.Equal(t, "Duy", user.Name)
    
    // Test not found
    _, err = svc.GetUser(context.Background(), 999)
    assert.Error(t, err)
    
    // Verify expectations
    mockRepo.AssertExpectations(t)
    mockRepo.AssertCalled(t, "GetByID", mock.Anything, uint(1))
}
</code></pre>

<h2 id="4-http-handler-testing"><strong>4. HTTP Handler Testing</strong></h2>

<pre><code class="language-go">import (
    "bytes"
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"
    
    "github.com/gin-gonic/gin"
    "github.com/stretchr/testify/assert"
)

func setupRouter() *gin.Engine {
    gin.SetMode(gin.TestMode)
    r := gin.New()
    
    mockRepo := new(MockUserRepository)
    svc := NewUserService(mockRepo)
    handler := NewUserHandler(svc)
    
    mockRepo.On("GetByID", mock.Anything, uint(1)).Return(&User{
        ID: 1, Name: "Duy", Email: "duy@xdev.asia",
    }, nil)
    
    r.GET("/users/:id", handler.GetUser)
    r.POST("/users", handler.CreateUser)
    
    return r
}

func TestGetUser_Success(t *testing.T) {
    router := setupRouter()
    
    w := httptest.NewRecorder()
    req, _ := http.NewRequest("GET", "/users/1", nil)
    router.ServeHTTP(w, req)
    
    assert.Equal(t, http.StatusOK, w.Code)
    
    var response map[string]interface{}
    json.Unmarshal(w.Body.Bytes(), &response)
    
    data := response["data"].(map[string]interface{})
    assert.Equal(t, "Duy", data["name"])
}

func TestCreateUser_Validation(t *testing.T) {
    router := setupRouter()
    
    tests := []struct {
        name       string
        body       map[string]interface{}
        wantStatus int
    }{
        {
            name:       "missing name",
            body:       map[string]interface{}{"email": "test@test.com"},
            wantStatus: http.StatusBadRequest,
        },
        {
            name:       "invalid email",
            body:       map[string]interface{}{"name": "Test", "email": "invalid"},
            wantStatus: http.StatusBadRequest,
        },
        {
            name:       "valid input",
            body:       map[string]interface{}{"name": "Test", "email": "test@test.com", "password": "12345678"},
            wantStatus: http.StatusCreated,
        },
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            body, _ := json.Marshal(tt.body)
            w := httptest.NewRecorder()
            req, _ := http.NewRequest("POST", "/users", bytes.NewBuffer(body))
            req.Header.Set("Content-Type", "application/json")
            
            router.ServeHTTP(w, req)
            assert.Equal(t, tt.wantStatus, w.Code)
        })
    }
}
</code></pre>

<h2 id="5-integration-tests"><strong>5. Integration Tests với Testcontainers</strong></h2>

<pre><code class="language-bash">go get github.com/testcontainers/testcontainers-go
go get github.com/testcontainers/testcontainers-go/modules/postgres
</code></pre>

<pre><code class="language-go">import (
    "context"
    "testing"
    
    "github.com/testcontainers/testcontainers-go"
    "github.com/testcontainers/testcontainers-go/modules/postgres"
    "github.com/testcontainers/testcontainers-go/wait"
)

func setupPostgres(t *testing.T) (string, func()) {
    ctx := context.Background()
    
    pgContainer, err := postgres.Run(ctx,
        "postgres:16-alpine",
        postgres.WithDatabase("testdb"),
        postgres.WithUsername("test"),
        postgres.WithPassword("test"),
        testcontainers.WithWaitStrategy(
            wait.ForLog("database system is ready to accept connections").
                WithOccurrence(2),
        ),
    )
    require.NoError(t, err)
    
    connStr, err := pgContainer.ConnectionString(ctx, "sslmode=disable")
    require.NoError(t, err)
    
    cleanup := func() {
        pgContainer.Terminate(ctx)
    }
    
    return connStr, cleanup
}

func TestUserRepository_Integration(t *testing.T) {
    if testing.Short() {
        t.Skip("skipping integration test")
    }
    
    connStr, cleanup := setupPostgres(t)
    defer cleanup()
    
    // Setup GORM with test database
    db, err := gorm.Open(postgres.Open(connStr), &gorm.Config{})
    require.NoError(t, err)
    
    db.AutoMigrate(&User{})
    
    repo := NewUserRepository(db)
    ctx := context.Background()
    
    // Test Create
    user := &User{Name: "Test User", Email: "test@test.com"}
    err = repo.Create(ctx, user)
    assert.NoError(t, err)
    assert.NotZero(t, user.ID)
    
    // Test GetByID
    found, err := repo.GetByID(ctx, user.ID)
    assert.NoError(t, err)
    assert.Equal(t, "Test User", found.Name)
    
    // Test GetByEmail
    found, err = repo.GetByEmail(ctx, "test@test.com")
    assert.NoError(t, err)
    assert.Equal(t, user.ID, found.ID)
}
</code></pre>

<h2 id="6-fuzzing"><strong>6. Fuzz Testing</strong></h2>

<pre><code class="language-go">func FuzzDivide(f *testing.F) {
    // Seed corpus
    f.Add(10.0, 2.0)
    f.Add(0.0, 1.0)
    f.Add(-5.0, 3.0)
    
    f.Fuzz(func(t *testing.T, a, b float64) {
        result, err := Divide(a, b)
        
        if b == 0 {
            if err == nil {
                t.Error("expected error for division by zero")
            }
            return
        }
        
        if err != nil {
            t.Errorf("unexpected error: %v", err)
        }
        
        // Verify: a / b * b ≈ a
        if !math.IsNaN(result) && !math.IsInf(result, 0) {
            if diff := math.Abs(result*b - a); diff > 1e-9 {
                t.Errorf("Divide(%f, %f) = %f; verification failed", a, b, result)
            }
        }
    })
}
</code></pre>

<pre><code class="language-bash"># Run fuzz tests
go test -fuzz=FuzzDivide -fuzztime=30s ./...
</code></pre>

<h2 id="7-test-commands"><strong>7. Test Commands</strong></h2>

<pre><code class="language-bash"># Run all tests
go test ./...

# Run with verbose output
go test -v ./...

# Run specific test
go test -run TestAdd ./math/

# Run with race detector
go test -race ./...

# Skip long tests
go test -short ./...

# Coverage
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out -o coverage.html
go tool cover -func=coverage.out

# Benchmark
go test -bench=. -benchmem ./...

# Fuzz
go test -fuzz=FuzzDivide -fuzztime=30s ./...
</code></pre>

<p>Bài tiếp theo: <strong>Docker, CI/CD & DevOps</strong> — containerization, pipeline, và deployment automation.</p>
