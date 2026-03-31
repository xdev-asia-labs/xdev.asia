---
id: 019d8b40-b203-7001-b003-golang0000203
title: 'Bài 7: HTTP Server & JSON Handling'
slug: bai-7-http-server-va-json-handling
description: >-
  net/http package, ServeMux (Go 1.22+), Handlers, Middleware pattern.
  encoding/json, struct tags, custom marshaling. HTTP client, timeouts,
  connection pooling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Concurrency & Networking"
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: Từ Cơ bản đến Nâng cao'
  slug: golang-tu-co-ban-den-nang-cao
---

<h2 id="1-http-server"><strong>1. HTTP Server với net/http</strong></h2>

<p>Go có HTTP server built-in trong standard library, đủ mạnh cho production — không nhất thiết phải dùng framework.</p>

<h3 id="1-1-basic-server"><strong>1.1. Basic HTTP Server</strong></h3>

<pre><code class="language-go">package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    // Handler function
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    })
    
    http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusOK)
        fmt.Fprintf(w, `{"status": "ok"}`)
    })
    
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
</code></pre>

<h3 id="1-2-servemux"><strong>1.2. ServeMux (Go 1.22+ Enhanced Routing)</strong></h3>

<pre><code class="language-go">func main() {
    mux := http.NewServeMux()
    
    // Go 1.22+: Method patterns và path parameters
    mux.HandleFunc("GET /api/users", listUsers)
    mux.HandleFunc("POST /api/users", createUser)
    mux.HandleFunc("GET /api/users/{id}", getUser)
    mux.HandleFunc("PUT /api/users/{id}", updateUser)
    mux.HandleFunc("DELETE /api/users/{id}", deleteUser)
    
    // Static files
    mux.Handle("GET /static/", http.StripPrefix("/static/",
        http.FileServer(http.Dir("./static")),
    ))
    
    // Exact match vs prefix
    mux.HandleFunc("GET /api/", apiNotFound)     // Prefix match
    mux.HandleFunc("GET /api/health", apiHealth) // Exact match (priority)
    
    server := &http.Server{
        Addr:         ":8080",
        Handler:      mux,
        ReadTimeout:  15 * time.Second,
        WriteTimeout: 15 * time.Second,
        IdleTimeout:  60 * time.Second,
    }
    
    log.Println("Server starting on :8080")
    log.Fatal(server.ListenAndServe())
}

func getUser(w http.ResponseWriter, r *http.Request) {
    // Go 1.22+: Path parameter
    id := r.PathValue("id")
    
    // Query parameters
    page := r.URL.Query().Get("page")
    
    fmt.Fprintf(w, "User ID: %s, Page: %s", id, page)
}
</code></pre>

<h3 id="1-3-handler-interface"><strong>1.3. Handler Interface</strong></h3>

<pre><code class="language-go">// http.Handler interface
type Handler interface {
    ServeHTTP(ResponseWriter, *Request)
}

// Struct-based handler
type UserHandler struct {
    service *UserService
}

func NewUserHandler(service *UserService) *UserHandler {
    return &UserHandler{service: service}
}

func (h *UserHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case http.MethodGet:
        h.list(w, r)
    case http.MethodPost:
        h.create(w, r)
    default:
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
    }
}

func (h *UserHandler) list(w http.ResponseWriter, r *http.Request) {
    users, err := h.service.ListUsers(r.Context())
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    writeJSON(w, http.StatusOK, users)
}

func (h *UserHandler) create(w http.ResponseWriter, r *http.Request) {
    var input CreateUserInput
    if err := readJSON(r, &input); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    user, err := h.service.CreateUser(r.Context(), input)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    writeJSON(w, http.StatusCreated, user)
}
</code></pre>

<h3 id="1-4-middleware"><strong>1.4. Middleware Pattern</strong></h3>

<pre><code class="language-go">// Middleware: func(http.Handler) http.Handler

func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        
        // Wrap ResponseWriter để capture status code
        wrapped := &responseWriter{ResponseWriter: w, statusCode: http.StatusOK}
        
        next.ServeHTTP(wrapped, r)
        
        log.Printf("%s %s %d %s",
            r.Method, r.URL.Path, wrapped.statusCode, time.Since(start))
    })
}

type responseWriter struct {
    http.ResponseWriter
    statusCode int
}

func (rw *responseWriter) WriteHeader(code int) {
    rw.statusCode = code
    rw.ResponseWriter.WriteHeader(code)
}

func corsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
        
        if r.Method == http.MethodOptions {
            w.WriteHeader(http.StatusNoContent)
            return
        }
        
        next.ServeHTTP(w, r)
    })
}

func authMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if token == "" {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }
        
        // Validate token, set user in context
        userID, err := validateToken(token)
        if err != nil {
            http.Error(w, "Invalid token", http.StatusUnauthorized)
            return
        }
        
        ctx := context.WithValue(r.Context(), userIDKey, userID)
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}

func recoveryMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        defer func() {
            if err := recover(); err != nil {
                log.Printf("panic: %v\n%s", err, debug.Stack())
                http.Error(w, "Internal Server Error", http.StatusInternalServerError)
            }
        }()
        next.ServeHTTP(w, r)
    })
}

// Chain middlewares
func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /api/users", listUsers)
    
    // Apply middleware chain
    handler := recoveryMiddleware(
        loggingMiddleware(
            corsMiddleware(
                mux,
            ),
        ),
    )
    
    http.ListenAndServe(":8080", handler)
}
</code></pre>

<h2 id="2-json-handling"><strong>2. JSON Handling</strong></h2>

<h3 id="2-1-struct-tags"><strong>2.1. Struct Tags</strong></h3>

<pre><code class="language-go">import "encoding/json"

type User struct {
    ID        int       `json:"id"`
    Name      string    `json:"name"`
    Email     string    `json:"email"`
    Password  string    `json:"-"`                // Bỏ qua khi marshal
    Age       int       `json:"age,omitempty"`    // Bỏ qua nếu zero value
    Role      string    `json:"role,omitempty"`
    CreatedAt time.Time `json:"created_at"`
    DeletedAt *time.Time `json:"deleted_at,omitempty"` // Pointer + omitempty cho nullable
}

// json tags:
// `json:"field_name"`         - đổi tên field
// `json:"-"`                  - bỏ qua field
// `json:"name,omitempty"`     - bỏ qua nếu zero value
// `json:",string"`            - marshal number thành string
</code></pre>

<h3 id="2-2-marshal"><strong>2.2. Marshal (Struct → JSON)</strong></h3>

<pre><code class="language-go">func main() {
    user := User{
        ID:    1,
        Name:  "Alice",
        Email: "alice@example.com",
        Age:   30,
    }
    
    // Marshal → []byte
    data, err := json.Marshal(user)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(data))
    // {"id":1,"name":"Alice","email":"alice@example.com","age":30,"created_at":"0001-01-01T00:00:00Z"}
    
    // MarshalIndent → pretty print
    pretty, _ := json.MarshalIndent(user, "", "  ")
    fmt.Println(string(pretty))
    
    // Encode trực tiếp vào io.Writer (hiệu quả hơn cho HTTP)
    json.NewEncoder(os.Stdout).Encode(user)
}
</code></pre>

<h3 id="2-3-unmarshal"><strong>2.3. Unmarshal (JSON → Struct)</strong></h3>

<pre><code class="language-go">func main() {
    jsonStr := `{"id": 1, "name": "Alice", "email": "alice@example.com", "age": 30}`
    
    var user User
    err := json.Unmarshal([]byte(jsonStr), &user)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("%+v\n", user)
    
    // Decode từ io.Reader (HTTP request body)
    // json.NewDecoder(r.Body).Decode(&user)
    
    // Dynamic JSON (không biết structure)
    var data map[string]any
    json.Unmarshal([]byte(jsonStr), &data)
    fmt.Println(data["name"].(string)) // Type assertion cần thiết
    
    // JSON array
    jsonArray := `[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]`
    var users []User
    json.Unmarshal([]byte(jsonArray), &users)
}
</code></pre>

<h3 id="2-4-custom-marshaling"><strong>2.4. Custom Marshal/Unmarshal</strong></h3>

<pre><code class="language-go">// Custom time format
type CustomTime struct {
    time.Time
}

const timeFormat = "2006-01-02 15:04:05"

func (ct CustomTime) MarshalJSON() ([]byte, error) {
    return json.Marshal(ct.Format(timeFormat))
}

func (ct *CustomTime) UnmarshalJSON(data []byte) error {
    var s string
    if err := json.Unmarshal(data, &s); err != nil {
        return err
    }
    t, err := time.Parse(timeFormat, s)
    if err != nil {
        return err
    }
    ct.Time = t
    return nil
}

// Enum type
type Status string

const (
    StatusActive   Status = "active"
    StatusInactive Status = "inactive"
)

func (s *Status) UnmarshalJSON(data []byte) error {
    var str string
    if err := json.Unmarshal(data, &str); err != nil {
        return err
    }
    switch Status(str) {
    case StatusActive, StatusInactive:
        *s = Status(str)
        return nil
    default:
        return fmt.Errorf("invalid status: %s", str)
    }
}
</code></pre>

<h3 id="2-5-json-helpers"><strong>2.5. JSON Helper Functions</strong></h3>

<pre><code class="language-go">// Reusable JSON helpers cho HTTP handlers

func writeJSON(w http.ResponseWriter, status int, data any) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(status)
    json.NewEncoder(w).Encode(data)
}

func readJSON(r *http.Request, dst any) error {
    // Limit body size
    r.Body = http.MaxBytesReader(nil, r.Body, 1_048_576) // 1MB
    
    dec := json.NewDecoder(r.Body)
    dec.DisallowUnknownFields() // Strict mode
    
    if err := dec.Decode(dst); err != nil {
        return fmt.Errorf("invalid JSON: %w", err)
    }
    
    // Check for extra data
    if dec.More() {
        return errors.New("body must contain single JSON object")
    }
    
    return nil
}

type APIResponse struct {
    Success bool   `json:"success"`
    Data    any    `json:"data,omitempty"`
    Error   string `json:"error,omitempty"`
}

func writeSuccess(w http.ResponseWriter, data any) {
    writeJSON(w, http.StatusOK, APIResponse{Success: true, Data: data})
}

func writeError(w http.ResponseWriter, status int, message string) {
    writeJSON(w, status, APIResponse{Success: false, Error: message})
}
</code></pre>

<h2 id="3-http-client"><strong>3. HTTP Client</strong></h2>

<pre><code class="language-go">import (
    "context"
    "io"
    "net/http"
    "time"
)

// ⚠️ KHÔNG dùng http.DefaultClient trong production (không có timeout)

// Custom client với timeouts
var client = &http.Client{
    Timeout: 10 * time.Second,
    Transport: &http.Transport{
        MaxIdleConns:        100,
        MaxIdleConnsPerHost: 10,
        IdleConnTimeout:     90 * time.Second,
    },
}

// GET request
func fetchUser(ctx context.Context, id int) (*User, error) {
    url := fmt.Sprintf("https://api.example.com/users/%d", id)
    
    req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
    if err != nil {
        return nil, fmt.Errorf("create request: %w", err)
    }
    
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+token)
    
    resp, err := client.Do(req)
    if err != nil {
        return nil, fmt.Errorf("do request: %w", err)
    }
    defer resp.Body.Close()
    
    if resp.StatusCode != http.StatusOK {
        body, _ := io.ReadAll(resp.Body)
        return nil, fmt.Errorf("API error %d: %s", resp.StatusCode, body)
    }
    
    var user User
    if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
        return nil, fmt.Errorf("decode response: %w", err)
    }
    
    return &user, nil
}

// POST request
func createUser(ctx context.Context, input CreateUserInput) (*User, error) {
    body, err := json.Marshal(input)
    if err != nil {
        return nil, fmt.Errorf("marshal input: %w", err)
    }
    
    req, err := http.NewRequestWithContext(ctx, http.MethodPost,
        "https://api.example.com/users", bytes.NewReader(body))
    if err != nil {
        return nil, fmt.Errorf("create request: %w", err)
    }
    
    req.Header.Set("Content-Type", "application/json")
    
    resp, err := client.Do(req)
    if err != nil {
        return nil, fmt.Errorf("do request: %w", err)
    }
    defer resp.Body.Close()
    
    if resp.StatusCode != http.StatusCreated {
        body, _ := io.ReadAll(resp.Body)
        return nil, fmt.Errorf("API error %d: %s", resp.StatusCode, body)
    }
    
    var user User
    if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
        return nil, fmt.Errorf("decode response: %w", err)
    }
    
    return &user, nil
}
</code></pre>

<h2 id="4-graceful-shutdown"><strong>4. Graceful Shutdown</strong></h2>

<pre><code class="language-go">func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /health", healthHandler)
    mux.HandleFunc("GET /api/users", listUsersHandler)
    
    server := &http.Server{
        Addr:    ":8080",
        Handler: mux,
    }
    
    // Start server trong goroutine
    go func() {
        log.Println("Server starting on :8080")
        if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
            log.Fatal(err)
        }
    }()
    
    // Wait for interrupt signal
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
    &lt;-quit
    
    log.Println("Shutting down gracefully...")
    
    // Graceful shutdown with timeout
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    
    if err := server.Shutdown(ctx); err != nil {
        log.Fatal("Server forced to shutdown:", err)
    }
    
    log.Println("Server stopped")
}
</code></pre>

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>

<ul>
<li><strong>net/http</strong>: Production-ready HTTP server built-in</li>
<li><strong>Go 1.22+ ServeMux</strong>: Method patterns, path parameters — không cần router library</li>
<li><strong>Middleware</strong>: <code>func(http.Handler) http.Handler</code> pattern</li>
<li><strong>encoding/json</strong>: Struct tags, Marshal/Unmarshal, custom serialization</li>
<li><strong>HTTP Client</strong>: Luôn set timeout, dùng context, reuse client</li>
<li><strong>Graceful shutdown</strong>: Signal handling + server.Shutdown(ctx)</li>
</ul>

<p>Bài tiếp theo: <strong>Gin Framework & REST API</strong> — xây dựng REST API production-ready với Gin.</p>
