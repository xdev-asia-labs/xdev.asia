---
id: 019d8b40-b402-7001-b003-golang0000402
title: 第 14 課：gRPC 和協定緩衝區
slug: bai-14-grpc-va-protocol-buffers
description: >-
  Protocol Buffers 架構設計、程式碼產生。一元、伺服器流、客戶端流、雙向流。 gRPC 攔截器、錯誤處理、截止日期。用於 REST 相容性的
  gRPC 網關。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：進階功能
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: Golang：從基礎到高級
  slug: golang-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1273" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1273)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.650635094611,217.5 1051.650635094611,242.5 1030,255 1008.349364905389,242.5 1008.349364905389,217.5 1030,205" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：gRPC 和協定緩衝區</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-protocol-buffers"><strong>1. 協定緩衝區</strong></h2>

<h3 id="1-1-setup"><strong>1.1.設置</strong></h3>

<pre><code class="language-bash"># Install protoc compiler
brew install protobuf

# Install Go plugins
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# Go dependencies
go get google.golang.org/grpc
go get google.golang.org/protobuf
</code></pre>

<h3 id="1-2-proto-file"><strong>1.2.原始文件</strong></h3>

<pre><code class="language-protobuf">// proto/user/v1/user.proto
syntax = "proto3";

package user.v1;

option go_package = "myapp/gen/user/v1;userv1";

import "google/protobuf/timestamp.proto";
import "google/protobuf/empty.proto";

// Messages
message User {
    uint64 id = 1;
    string name = 2;
    string email = 3;
    Role role = 4;
    bool is_active = 5;
    google.protobuf.Timestamp created_at = 6;
}

enum Role {
    ROLE_UNSPECIFIED = 0;
    ROLE_USER = 1;
    ROLE_EDITOR = 2;
    ROLE_ADMIN = 3;
}

message CreateUserRequest {
    string name = 1;
    string email = 2;
    string password = 3;
}

message GetUserRequest {
    uint64 id = 1;
}

message ListUsersRequest {
    int32 page = 1;
    int32 page_size = 2;
    string search = 3;
}

message ListUsersResponse {
    repeated User users = 1;
    int32 total = 2;
    int32 page = 3;
}

message UpdateUserRequest {
    uint64 id = 1;
    optional string name = 2;
    optional string email = 3;
    optional Role role = 4;
}

// Service
service UserService {
    rpc CreateUser(CreateUserRequest) returns (User);
    rpc GetUser(GetUserRequest) returns (User);
    rpc ListUsers(ListUsersRequest) returns (ListUsersResponse);
    rpc UpdateUser(UpdateUserRequest) returns (User);
    rpc DeleteUser(GetUserRequest) returns (google.protobuf.Empty);
    
    // Server streaming
    rpc WatchUsers(google.protobuf.Empty) returns (stream User);
    
    // Bidirectional streaming
    rpc Chat(stream ChatMessage) returns (stream ChatMessage);
}

message ChatMessage {
    string sender = 1;
    string content = 2;
    google.protobuf.Timestamp sent_at = 3;
}
</code></pre>

<h3 id="1-3-code-generation"><strong>1.3.代碼生成</strong></h3>

<pre><code class="language-bash"># Generate Go code
protoc --go_out=. --go_opt=paths=source_relative \
       --go-grpc_out=. --go-grpc_opt=paths=source_relative \
       proto/user/v1/user.proto

# Makefile
.PHONY: proto
proto:
	protoc --go_out=. --go_opt=paths=source_relative \
	       --go-grpc_out=. --go-grpc_opt=paths=source_relative \
	       proto/**/**/*.proto
</code></pre>

<h2 id="2-grpc-server"><strong>2.gRPC伺服器</strong></h2>

<pre><code class="language-go">package grpcserver

import (
    "context"
    "fmt"
    
    userv1 "myapp/gen/user/v1"
    "google.golang.org/grpc/codes"
    "google.golang.org/grpc/status"
    "google.golang.org/protobuf/types/known/emptypb"
    "google.golang.org/protobuf/types/known/timestamppb"
)

type UserServer struct {
    userv1.UnimplementedUserServiceServer
    repo repository.UserRepository
}

func NewUserServer(repo repository.UserRepository) *UserServer {
    return &UserServer{repo: repo}
}

func (s *UserServer) CreateUser(ctx context.Context, req *userv1.CreateUserRequest) (*userv1.User, error) {
    // Validate input
    if req.Name == "" {
        return nil, status.Error(codes.InvalidArgument, "name is required")
    }
    if req.Email == "" {
        return nil, status.Error(codes.InvalidArgument, "email is required")
    }
    
    user, err := s.repo.Create(ctx, &model.User{
        Name:  req.Name,
        Email: req.Email,
    })
    if err != nil {
        return nil, status.Errorf(codes.Internal, "create user: %v", err)
    }
    
    return toProtoUser(user), nil
}

func (s *UserServer) GetUser(ctx context.Context, req *userv1.GetUserRequest) (*userv1.User, error) {
    user, err := s.repo.GetByID(ctx, uint(req.Id))
    if err != nil {
        return nil, status.Error(codes.NotFound, "user not found")
    }
    
    return toProtoUser(user), nil
}

func (s *UserServer) ListUsers(ctx context.Context, req *userv1.ListUsersRequest) (*userv1.ListUsersResponse, error) {
    page := int(req.Page)
    if page < 1 {
        page = 1
    }
    pageSize := int(req.PageSize)
    if pageSize < 1 || pageSize > 100 {
        pageSize = 20
    }
    
    users, total, err := s.repo.List(ctx, page, pageSize, req.Search)
    if err != nil {
        return nil, status.Errorf(codes.Internal, "list users: %v", err)
    }
    
    protoUsers := make([]*userv1.User, len(users))
    for i, u := range users {
        protoUsers[i] = toProtoUser(&u)
    }
    
    return &userv1.ListUsersResponse{
        Users: protoUsers,
        Total: int32(total),
        Page:  int32(page),
    }, nil
}

func (s *UserServer) DeleteUser(ctx context.Context, req *userv1.GetUserRequest) (*emptypb.Empty, error) {
    if err := s.repo.Delete(ctx, uint(req.Id)); err != nil {
        return nil, status.Error(codes.NotFound, "user not found")
    }
    return &emptypb.Empty{}, nil
}

// Server streaming
func (s *UserServer) WatchUsers(req *emptypb.Empty, stream userv1.UserService_WatchUsersServer) error {
    // Subscribe to user changes
    ch := s.repo.Subscribe()
    defer s.repo.Unsubscribe(ch)
    
    for {
        select {
        case <-stream.Context().Done():
            return nil
        case user := <-ch:
            if err := stream.Send(toProtoUser(user)); err != nil {
                return err
            }
        }
    }
}

func toProtoUser(u *model.User) *userv1.User {
    return &userv1.User{
        Id:        uint64(u.ID),
        Name:      u.Name,
        Email:     u.Email,
        IsActive:  u.IsActive,
        CreatedAt: timestamppb.New(u.CreatedAt),
    }
}
</code></pre>

<h2 id="3-grpc-server-setup"><strong>3. 伺服器設定</strong></h2>

<pre><code class="language-go">package main

import (
    "log"
    "net"
    
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
    
    userv1 "myapp/gen/user/v1"
)

func main() {
    lis, err := net.Listen("tcp", ":50051")
    if err != nil {
        log.Fatalf("Failed to listen: %v", err)
    }
    
    server := grpc.NewServer(
        grpc.ChainUnaryInterceptor(
            LoggingInterceptor,
            AuthInterceptor,
            RecoveryInterceptor,
        ),
        grpc.ChainStreamInterceptor(
            StreamLoggingInterceptor,
        ),
    )
    
    // Register services
    userv1.RegisterUserServiceServer(server, NewUserServer(userRepo))
    
    // Enable reflection for debugging (grpcurl, grpcui)
    reflection.Register(server)
    
    log.Printf("gRPC server listening on :50051")
    if err := server.Serve(lis); err != nil {
        log.Fatalf("Failed to serve: %v", err)
    }
}
</code></pre>

<h2 id="4-interceptors"><strong>4.攔截器（中介軟體）</strong></h2>

<pre><code class="language-go">import (
    "context"
    "log"
    "time"
    
    "google.golang.org/grpc"
    "google.golang.org/grpc/codes"
    "google.golang.org/grpc/metadata"
    "google.golang.org/grpc/status"
)

// Logging interceptor
func LoggingInterceptor(
    ctx context.Context,
    req interface{},
    info *grpc.UnaryServerInfo,
    handler grpc.UnaryHandler,
) (interface{}, error) {
    start := time.Now()
    
    resp, err := handler(ctx, req)
    
    duration := time.Since(start)
    statusCode := codes.OK
    if err != nil {
        statusCode = status.Code(err)
    }
    
    log.Printf("gRPC %s | %s | %v | %v",
        info.FullMethod, statusCode, duration, err)
    
    return resp, err
}

// Auth interceptor
func AuthInterceptor(
    ctx context.Context,
    req interface{},
    info *grpc.UnaryServerInfo,
    handler grpc.UnaryHandler,
) (interface{}, error) {
    // Skip auth for certain methods
    publicMethods := map[string]bool{
        "/user.v1.UserService/CreateUser": true,
    }
    if publicMethods[info.FullMethod] {
        return handler(ctx, req)
    }
    
    // Extract token from metadata
    md, ok := metadata.FromIncomingContext(ctx)
    if !ok {
        return nil, status.Error(codes.Unauthenticated, "missing metadata")
    }
    
    tokens := md.Get("authorization")
    if len(tokens) == 0 {
        return nil, status.Error(codes.Unauthenticated, "missing token")
    }
    
    // Validate token...
    claims, err := validateToken(tokens[0])
    if err != nil {
        return nil, status.Error(codes.Unauthenticated, "invalid token")
    }
    
    // Set user info in context
    ctx = context.WithValue(ctx, "user_id", claims.UserID)
    
    return handler(ctx, req)
}

// Recovery interceptor
func RecoveryInterceptor(
    ctx context.Context,
    req interface{},
    info *grpc.UnaryServerInfo,
    handler grpc.UnaryHandler,
) (resp interface{}, err error) {
    defer func() {
        if r := recover(); r != nil {
            log.Printf("Panic recovered in %s: %v", info.FullMethod, r)
            err = status.Errorf(codes.Internal, "internal error")
        }
    }()
    
    return handler(ctx, req)
}
</code></pre>

<h2 id="5-grpc-client"><strong>5.gRPC客戶端</strong></h2>

<pre><code class="language-go">package main

import (
    "context"
    "log"
    "time"
    
    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials/insecure"
    
    userv1 "myapp/gen/user/v1"
)

func main() {
    conn, err := grpc.NewClient("localhost:50051",
        grpc.WithTransportCredentials(insecure.NewCredentials()),
    )
    if err != nil {
        log.Fatalf("Connect failed: %v", err)
    }
    defer conn.Close()
    
    client := userv1.NewUserServiceClient(conn)
    
    // Unary call with deadline
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    user, err := client.CreateUser(ctx, &userv1.CreateUserRequest{
        Name:  "Duy Tran",
        Email: "duy@xdev.asia",
    })
    if err != nil {
        st, ok := status.FromError(err)
        if ok {
            log.Printf("gRPC error: code=%s, msg=%s", st.Code(), st.Message())
        }
        return
    }
    
    log.Printf("Created user: %+v", user)
    
    // Server streaming
    stream, err := client.WatchUsers(ctx, &emptypb.Empty{})
    if err != nil {
        log.Fatal(err)
    }
    
    for {
        user, err := stream.Recv()
        if err != nil {
            break
        }
        log.Printf("User update: %+v", user)
    }
}
</code></pre>

<h2 id="6-grpc-error-handling"><strong>6.gRPC 錯誤處理</strong></h2>

<table>
<thead><tr><th>gRPC 代碼</th><th>HTTP 程式碼</th><th>何時使用</th></tr></thead>
<tbody>
<tr><td>好的</td><td>200</td><td>成功</td></tr>
<tr><td>無效參數</td><td>400</td><td>輸入無效</td></tr>
<tr><td>未經身份驗證</td><td>401</td><td>未經驗證</td></tr>
<tr><td>權限被拒絕</td><td>403</td><td>無權利</td></tr>
<tr><td>未找到</td><td>404</td><td>資源不存在</td></tr>
<tr><td>已經存在</td><td>409</td><td>重複</td></tr>
<tr><td>內部</td><td>500</td><td>伺服器錯誤</td></tr>
<tr><td>不可用</td><td>503</td><td>服務暫停</td></tr>
<tr><td>超過截止日期</td><td>504</td><td>超時</td></tr>
</tbody>
</table>

<pre><code class="language-go">// Error with details
import "google.golang.org/genproto/googleapis/rpc/errdetails"

func detailedError() error {
    st := status.New(codes.InvalidArgument, "invalid input")
    
    st, _ = st.WithDetails(&errdetails.BadRequest{
        FieldViolations: []*errdetails.BadRequest_FieldViolation{
            {Field: "email", Description: "invalid email format"},
            {Field: "name", Description: "name is required"},
        },
    })
    
    return st.Err()
}
</code></pre>

<h2 id="7-grpc-gateway"><strong>7. gRPC-網關（REST 相容性）</strong></h2>

<pre><code class="language-bash">go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest
</code></pre>

<pre><code class="language-protobuf">import "google/api/annotations.proto";

service UserService {
    rpc GetUser(GetUserRequest) returns (User) {
        option (google.api.http) = {
            get: "/api/v1/users/{id}"
        };
    }
    
    rpc CreateUser(CreateUserRequest) returns (User) {
        option (google.api.http) = {
            post: "/api/v1/users"
            body: "*"
        };
    }
    
    rpc ListUsers(ListUsersRequest) returns (ListUsersResponse) {
        option (google.api.http) = {
            get: "/api/v1/users"
        };
    }
}
</code></pre>

<pre><code class="language-go">// Gateway server - proxy HTTP → gRPC
func runGateway() error {
    ctx := context.Background()
    mux := runtime.NewServeMux()
    
    opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}
    
    err := userv1.RegisterUserServiceHandlerFromEndpoint(ctx, mux, "localhost:50051", opts)
    if err != nil {
        return err
    }
    
    log.Println("Gateway listening on :8080")
    return http.ListenAndServe(":8080", mux)
}
</code></pre>

<p>下一篇： <strong>訊息佇列和事件驅動架構</strong> — RabbitMQ、Kafka 和事件源。</p>
