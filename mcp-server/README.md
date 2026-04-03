# xDev Knowledge MCP Server

MCP Server đóng gói toàn bộ kiến thức xDev.asia - 57 series, 1200+ lessons, blog posts, showcases.

> **Categories**: AI & ML, Architecture, DevSecOps, Lập trình
> **Content**: Series tutorials, blog posts, product showcases
> **Languages**: Tiếng Việt & English

## Features

### 🔧 Tools (15 tools)

#### General Knowledge Tools

| Tool | Mô tả |
|------|--------|
| `search_xdev_knowledge` | Tìm kiếm toàn bộ knowledge base (series, blog, showcase) |
| `list_series` | Liệt kê 57 series theo category |
| `list_lessons` | Liệt kê bài học trong series |
| `read_series` | Đọc overview series |
| `read_lesson` | Đọc nội dung chi tiết bài học |
| `list_blog_posts` | Liệt kê blog posts theo topic |
| `list_showcases` | Liệt kê sản phẩm showcase |
| `read_content` | Đọc bất kỳ content file nào |
| `xdev_stats` | Thống kê nội dung website |

#### Healthcare Security Tools

| Tool | Mô tả |
|------|--------|
| `hipaa_compliance_check` | Kiểm tra HIPAA Technical Safeguards compliance |
| `generate_security_config` | Sinh cấu hình bảo mật PostgreSQL, Keycloak, Quarkus, K8s, Nginx |
| `threat_model_stride` | Phân tích STRIDE threats cho healthcare system |
| `calculate_dread_score` | Tính điểm DREAD severity |
| `classify_phi_data` | Phân loại PHI/ePHI/PII theo HIPAA 18 identifiers |
| `generate_rls_policy` | Sinh PostgreSQL Row-Level Security policies |

### 📚 Resources

| Resource | URI |
|----------|-----|
| xDev Overview | `xdev://overview` |
| Series Content | `xdev://series/{slug}` |
| Lesson Content | `xdev://lessons/{slug}` |
| HIPAA Reference | `healthcare-security://reference/hipaa` |
| Tech Stack | `healthcare-security://reference/tech-stack` |

### 💬 Prompts

| Prompt | Mô tả |
|--------|--------|
| `security_review` | Review code cho healthcare security issues |
| `hipaa_assessment` | Đánh giá HIPAA compliance cho hệ thống |
| `threat_analysis` | Phân tích threats cho microservices |
| `database_security_design` | Thiết kế database security (RLS, encryption, audit) |

## Setup

### 1. Install & Build

```bash
cd mcp-server
npm install
npm run build
```

### 2. Cấu hình VS Code

Thêm vào `.vscode/mcp.json`:

```json
{
  "servers": {
    "xdev-knowledge": {
      "type": "stdio",
      "command": "node",
      "args": ["${workspaceFolder}/mcp-server/dist/index.js"]
    }
  }
}
```

### 3. Test với MCP Inspector

```bash
npm run inspect
```

## Ví dụ sử dụng

### Tìm kiếm kiến thức

> "Tìm kiếm về Kubernetes deployment strategies"

### Liệt kê series

> "Liệt kê tất cả series về AI"

### Đọc bài học

> "Đọc bài học về PostgreSQL High Availability"

### Kiểm tra HIPAA compliance

> "Kiểm tra HIPAA compliance cho hệ thống EMR đang dùng PostgreSQL + Keycloak, đã có MFA và TLS nhưng chưa có audit logging"

### Sinh RLS policies

> "Tạo RLS policies cho bảng `medical_records` với columns: id, patient_id, doctor_id, department_id, diagnosis, prescription, created_at"

## Cấu trúc

```
mcp-server/
├── src/
│   ├── index.ts              # Entry point
│   ├── content-loader.ts     # Load ALL content từ markdown (series, blog, showcase)
│   ├── tools/
│   │   └── index.ts          # 15 MCP tools
│   ├── resources/
│   │   └── index.ts          # MCP resources (series, lessons, references)
│   ├── prompts/
│   │   └── index.ts          # Security prompt templates
│   └── data/
│       ├── hipaa-safeguards.ts    # HIPAA checklist data
│       ├── threat-patterns.ts     # STRIDE/DREAD patterns
│       ├── security-configs.ts    # Config templates
│       └── phi-classifier.ts      # PHI classification logic
├── package.json
└── tsconfig.json
```
