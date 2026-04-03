import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { checkHIPAACompliance, HIPAA_SAFEGUARDS } from "../data/hipaa-safeguards.js";
import {
  STRIDE_CATEGORIES,
  HEALTHCARE_THREAT_PATTERNS,
  calculateDREAD,
} from "../data/threat-patterns.js";
import {
  SECURITY_CONFIGS,
  type ConfigComponent,
} from "../data/security-configs.js";
import { classifyFields, HIPAA_18_IDENTIFIERS } from "../data/phi-classifier.js";
import {
  searchAllContent,
  loadAllSeries,
  loadLessonsForSeries,
  loadAllLessons,
  loadBlogPosts,
  loadShowcases,
  readLessonContent,
  readSeriesIndex,
  readContentFile,
  getContentStats,
} from "../content-loader.js";

export function registerTools(server: McpServer) {
  // =====================================================
  // 1. HIPAA Compliance Checker
  // =====================================================
  server.tool(
    "hipaa_compliance_check",
    "Kiểm tra mức độ tuân thủ HIPAA Technical Safeguards cho hệ thống y tế. Trả về compliance score, gaps, và recommendations cụ thể cho Quarkus/PostgreSQL/Keycloak.",
    {
      system_description: z
        .string()
        .describe(
          "Mô tả hệ thống cần kiểm tra (architecture, components, security controls đang có)"
        ),
      implemented_controls: z
        .array(z.string())
        .describe(
          "Danh sách các security controls đã triển khai (vd: 'MFA', 'encryption at rest', 'audit logging')"
        ),
    },
    async ({ system_description, implemented_controls }) => {
      const result = checkHIPAACompliance(system_description, implemented_controls);

      let output = `# HIPAA Compliance Report\n\n`;
      output += `## Score: ${result.score}/${result.total} (${Math.round((result.score / result.total) * 100)}%)\n\n`;

      output += `## ✅ Implemented (${result.implemented.length})\n`;
      for (const item of result.implemented) {
        output += `- [${item.id}] ${item.category} > ${item.subcategory}\n`;
      }

      output += `\n## ❌ Gaps (${result.gaps.length})\n`;
      for (const gap of result.gaps) {
        const reqLabel = gap.required ? "🔴 REQUIRED" : "🟡 ADDRESSABLE";
        output += `\n### [${gap.id}] ${gap.subcategory} (${reqLabel})\n`;
        output += `- Standard: ${gap.standard}\n`;
        output += `- Requirement: ${gap.requirement}\n`;
        output += `- Implementation: ${gap.implementation}\n`;
        if (gap.quarkusImpl) output += `- Quarkus: ${gap.quarkusImpl}\n`;
        if (gap.postgresImpl) output += `- PostgreSQL: ${gap.postgresImpl}\n`;
        if (gap.keycloakImpl) output += `- Keycloak: ${gap.keycloakImpl}\n`;
      }

      output += `\n## 📋 Recommendations\n`;
      for (const rec of result.recommendations) {
        output += `${rec}\n`;
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 2. Security Config Generator
  // =====================================================
  server.tool(
    "generate_security_config",
    "Sinh cấu hình bảo mật cho PostgreSQL, Keycloak, Quarkus, Kubernetes, hoặc Nginx theo chuẩn y tế/HIPAA.",
    {
      component: z
        .enum(["postgresql", "keycloak", "quarkus", "kubernetes", "nginx"])
        .describe("Component cần sinh cấu hình"),
      config_name: z
        .string()
        .optional()
        .describe("Tên cấu hình cụ thể (optional - trả về tất cả nếu không chỉ định)"),
      context: z
        .string()
        .optional()
        .describe("Bối cảnh sử dụng (vd: 'multi-tenant hospital', 'patient portal')"),
    },
    async ({ component, config_name, context }) => {
      const configs = SECURITY_CONFIGS[component as ConfigComponent] || [];

      if (configs.length === 0) {
        return {
          content: [{ type: "text", text: `Không tìm thấy cấu hình cho component: ${component}` }],
        };
      }

      const filtered = config_name
        ? configs.filter((c) => c.name.toLowerCase().includes(config_name.toLowerCase()))
        : configs;

      let output = `# Security Configurations: ${component.toUpperCase()}\n\n`;
      if (context) output += `> Context: ${context}\n\n`;

      for (const config of filtered) {
        output += `## ${config.name}\n`;
        output += `${config.description}\n\n`;
        output += "```\n" + config.config + "\n```\n\n";
        output += `### Notes:\n`;
        for (const note of config.notes) {
          output += `- ${note}\n`;
        }
        output += "\n---\n\n";
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 3. Threat Model (STRIDE/DREAD)
  // =====================================================
  server.tool(
    "threat_model_stride",
    "Phân tích threat modeling STRIDE/DREAD cho hệ thống hoặc component y tế. Trả về threats, severity scores, và mitigations.",
    {
      system_component: z
        .string()
        .describe(
          "Component hoặc system cần phân tích (vd: 'Patient API', 'Database layer', 'Authentication flow')"
        ),
      stride_categories: z
        .array(z.enum(["S", "T", "R", "I", "D", "E"]))
        .optional()
        .describe("Chỉ phân tích categories cụ thể (mặc định: tất cả 6 categories)"),
      include_healthcare_patterns: z
        .boolean()
        .default(true)
        .describe("Bao gồm các threat patterns đặc thù healthcare"),
    },
    async ({ system_component, stride_categories, include_healthcare_patterns }) => {
      const categories = stride_categories
        ? STRIDE_CATEGORIES.filter((c) => stride_categories.includes(c.id as any))
        : STRIDE_CATEGORIES;

      let output = `# STRIDE Threat Model: ${system_component}\n\n`;

      for (const cat of categories) {
        output += `## ${cat.id} - ${cat.name}\n`;
        output += `${cat.description}\n\n`;
        output += `### Healthcare-specific Threats:\n`;
        for (const example of cat.healthcareExamples) {
          output += `- ${example}\n`;
        }
        output += `\n### Mitigations:\n`;
        for (const mitigation of cat.mitigations) {
          output += `- ✅ ${mitigation}\n`;
        }
        output += "\n---\n\n";
      }

      if (include_healthcare_patterns) {
        output += `## 🏥 Healthcare-Specific Threat Patterns\n\n`;
        for (const pattern of HEALTHCARE_THREAT_PATTERNS) {
          const dread = calculateDREAD(pattern.dreadDefaults);
          output += `### ${pattern.name}\n`;
          output += `- ${pattern.description}\n`;
          output += `- STRIDE Category: ${pattern.strideCategory}\n`;
          output += `- DREAD Score: **${dread.total}/10** (${dread.severity})\n`;
          output += `  - Damage: ${dread.damage} | Reproducibility: ${dread.reproducibility} | Exploitability: ${dread.exploitability}\n`;
          output += `  - Affected Users: ${dread.affectedUsers} | Discoverability: ${dread.discoverability}\n`;
          output += `- Controls:\n`;
          for (const control of pattern.controls) {
            output += `  - ${control}\n`;
          }
          output += "\n";
        }
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 4. DREAD Score Calculator
  // =====================================================
  server.tool(
    "calculate_dread_score",
    "Tính điểm DREAD để đánh giá severity của một threat cụ thể.",
    {
      threat_name: z.string().describe("Tên threat cần đánh giá"),
      damage: z.number().min(1).max(10).describe("Mức thiệt hại nếu bị khai thác (1-10)"),
      reproducibility: z.number().min(1).max(10).describe("Khả năng tái tạo attack (1-10)"),
      exploitability: z.number().min(1).max(10).describe("Độ dễ khai thác (1-10)"),
      affected_users: z.number().min(1).max(10).describe("Số users bị ảnh hưởng (1-10)"),
      discoverability: z.number().min(1).max(10).describe("Khả năng phát hiện lỗ hổng (1-10)"),
    },
    async ({ threat_name, damage, reproducibility, exploitability, affected_users, discoverability }) => {
      const result = calculateDREAD({
        damage,
        reproducibility,
        exploitability,
        affectedUsers: affected_users,
        discoverability,
      });

      let output = `# DREAD Assessment: ${threat_name}\n\n`;
      output += `| Metric | Score |\n|--------|-------|\n`;
      output += `| Damage | ${result.damage}/10 |\n`;
      output += `| Reproducibility | ${result.reproducibility}/10 |\n`;
      output += `| Exploitability | ${result.exploitability}/10 |\n`;
      output += `| Affected Users | ${result.affectedUsers}/10 |\n`;
      output += `| Discoverability | ${result.discoverability}/10 |\n`;
      output += `| **Average** | **${result.total}/10** |\n\n`;
      output += `## Severity: **${result.severity}**\n\n`;

      if (result.severity === "Critical") {
        output += `⚠️ CRITICAL - Yêu cầu remediation ngay lập tức. Escalate lên Security Team.\n`;
      } else if (result.severity === "High") {
        output += `🔴 HIGH - Cần fix trong sprint hiện tại. Thêm vào backlog ưu tiên cao.\n`;
      } else if (result.severity === "Medium") {
        output += `🟡 MEDIUM - Lên kế hoạch fix trong 1-2 sprints tới.\n`;
      } else {
        output += `🟢 LOW - Monitor và fix khi có resource.\n`;
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 5. PHI Data Classifier
  // =====================================================
  server.tool(
    "classify_phi_data",
    "Phân loại dữ liệu theo mức độ nhạy cảm PHI/ePHI/PII. Xác định HIPAA identifiers và đề xuất encryption, masking, retention.",
    {
      field_names: z
        .array(z.string())
        .describe(
          "Danh sách tên fields/columns cần phân loại (vd: ['patient_name', 'diagnosis', 'department_id'])"
        ),
    },
    async ({ field_names }) => {
      const classifications = classifyFields(field_names);

      let output = `# PHI Data Classification Report\n\n`;
      output += `| Field | Level | PHI? | HIPAA ID? | Recommendation |\n`;
      output += `|-------|-------|------|-----------|----------------|\n`;

      for (const cls of classifications) {
        const levelEmoji =
          cls.level === "RESTRICTED" ? "🔴" :
          cls.level === "CONFIDENTIAL" ? "🟠" :
          cls.level === "INTERNAL" ? "🟡" : "🟢";
        output += `| ${cls.field} | ${levelEmoji} ${cls.level} | ${cls.isPHI ? "Yes" : "No"} | ${cls.isHIPAAIdentifier ? "Yes" : "No"} | ${cls.recommendation} |\n`;
      }

      const restricted = classifications.filter((c) => c.level === "RESTRICTED");
      const confidential = classifications.filter((c) => c.level === "CONFIDENTIAL");

      output += `\n## Summary\n`;
      output += `- 🔴 RESTRICTED: ${restricted.length} fields (encrypt + RLS)\n`;
      output += `- 🟠 CONFIDENTIAL: ${confidential.length} fields (encrypt preferred)\n`;
      output += `- Total PHI fields: ${classifications.filter((c) => c.isPHI).length}\n`;
      output += `- HIPAA Identifiers: ${classifications.filter((c) => c.isHIPAAIdentifier).length}\n`;

      if (restricted.length > 0) {
        output += `\n## ⚠️ Action Required\n`;
        output += `${restricted.length} fields cần column-level encryption (AES-256-GCM) và RLS policies.\n`;
        output += `Sử dụng tool \`generate_security_config\` với component 'postgresql' để lấy template encryption.\n`;
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 6. RLS Policy Generator
  // =====================================================
  server.tool(
    "generate_rls_policy",
    "Sinh PostgreSQL Row-Level Security policies cho bảng dữ liệu y tế.",
    {
      table_name: z.string().describe("Tên bảng cần áp dụng RLS"),
      columns: z
        .array(z.string())
        .describe("Danh sách columns trong bảng"),
      roles: z
        .array(z.string())
        .default(["ADMIN", "DOCTOR", "NURSE", "PATIENT"])
        .describe("Danh sách roles cần phân quyền"),
      tenant_column: z
        .string()
        .optional()
        .describe("Column dùng cho multi-tenant isolation (vd: 'hospital_id')"),
      department_column: z
        .string()
        .optional()
        .describe("Column cho department-based access (vd: 'department_id')"),
      owner_column: z
        .string()
        .optional()
        .describe("Column cho record owner (vd: 'doctor_id' hoặc 'patient_id')"),
    },
    async ({ table_name, columns, roles, tenant_column, department_column, owner_column }) => {
      let sql = `-- =====================================================\n`;
      sql += `-- Row-Level Security Policies for: ${table_name}\n`;
      sql += `-- Generated by Healthcare Security MCP\n`;
      sql += `-- =====================================================\n\n`;

      sql += `-- Step 1: Enable RLS\n`;
      sql += `ALTER TABLE ${table_name} ENABLE ROW LEVEL SECURITY;\n`;
      sql += `ALTER TABLE ${table_name} FORCE ROW LEVEL SECURITY;\n\n`;

      // Admin full access
      if (roles.includes("ADMIN")) {
        sql += `-- Admin: full access\n`;
        sql += `CREATE POLICY admin_full_access ON ${table_name}\n`;
        sql += `  FOR ALL\n`;
        sql += `  USING (current_setting('app.current_role') = 'ADMIN');\n\n`;
      }

      // Tenant isolation
      if (tenant_column) {
        sql += `-- Multi-tenant isolation\n`;
        sql += `CREATE POLICY tenant_isolation ON ${table_name}\n`;
        sql += `  FOR ALL\n`;
        sql += `  USING (\n`;
        sql += `    ${tenant_column} = current_setting('app.current_tenant_id')::uuid\n`;
        sql += `    OR current_setting('app.current_role') = 'ADMIN'\n`;
        sql += `  );\n\n`;
      }

      // Department access
      if (department_column) {
        sql += `-- Department-based access\n`;
        sql += `CREATE POLICY department_access ON ${table_name}\n`;
        sql += `  FOR SELECT\n`;
        sql += `  USING (\n`;
        sql += `    ${department_column} = current_setting('app.current_department')::uuid\n`;
        sql += `    OR current_setting('app.current_role') IN ('ADMIN', 'CHIEF_DOCTOR')\n`;
        sql += `  );\n\n`;
      }

      // Owner access (doctor or patient)
      if (owner_column) {
        sql += `-- Owner access (assigned doctor/patient)\n`;
        sql += `CREATE POLICY owner_access ON ${table_name}\n`;
        sql += `  FOR SELECT\n`;
        sql += `  USING (\n`;
        sql += `    ${owner_column} = current_setting('app.current_user_id')::uuid\n`;
        sql += `  );\n\n`;
      }

      // Doctor access
      if (roles.includes("DOCTOR") && !owner_column) {
        sql += `-- Doctor: access assigned patients\n`;
        sql += `CREATE POLICY doctor_access ON ${table_name}\n`;
        sql += `  FOR SELECT\n`;
        sql += `  USING (\n`;
        sql += `    current_setting('app.current_role') IN ('DOCTOR', 'CHIEF_DOCTOR')\n`;
        sql += `    AND EXISTS (\n`;
        sql += `      SELECT 1 FROM doctor_patient_assignments dpa\n`;
        sql += `      WHERE dpa.patient_id = ${table_name}.patient_id\n`;
        sql += `        AND dpa.doctor_id = current_setting('app.current_user_id')::uuid\n`;
        sql += `        AND dpa.active = true\n`;
        sql += `    )\n`;
        sql += `  );\n\n`;
      }

      // Nurse read-only
      if (roles.includes("NURSE")) {
        sql += `-- Nurse: read-only trong department\n`;
        sql += `CREATE POLICY nurse_read_access ON ${table_name}\n`;
        sql += `  FOR SELECT\n`;
        sql += `  USING (\n`;
        sql += `    current_setting('app.current_role') IN ('NURSE', 'HEAD_NURSE')\n`;
        sql += `    ${department_column ? `AND ${department_column} = current_setting('app.current_department')::uuid` : ""}\n`;
        sql += `  );\n\n`;
      }

      // Patient self-access
      if (roles.includes("PATIENT")) {
        sql += `-- Patient: chỉ xem dữ liệu của mình\n`;
        sql += `CREATE POLICY patient_self_access ON ${table_name}\n`;
        sql += `  FOR SELECT\n`;
        sql += `  USING (\n`;
        sql += `    current_setting('app.current_role') = 'PATIENT'\n`;
        sql += `    AND patient_id = current_setting('app.current_user_id')::uuid\n`;
        sql += `  );\n\n`;
      }

      // Emergency access
      sql += `-- Emergency access (break-the-glass)\n`;
      sql += `CREATE POLICY emergency_access ON ${table_name}\n`;
      sql += `  FOR SELECT\n`;
      sql += `  USING (\n`;
      sql += `    current_setting('app.emergency_access', true)::boolean = true\n`;
      sql += `  );\n\n`;

      // Session variable setup function
      sql += `-- =====================================================\n`;
      sql += `-- Helper: Set session variables from Quarkus\n`;
      sql += `-- =====================================================\n`;
      sql += `CREATE OR REPLACE FUNCTION set_rls_context(\n`;
      sql += `  p_user_id UUID,\n`;
      sql += `  p_role TEXT,\n`;
      sql += `  p_tenant_id UUID DEFAULT NULL,\n`;
      sql += `  p_department UUID DEFAULT NULL,\n`;
      sql += `  p_emergency BOOLEAN DEFAULT FALSE\n`;
      sql += `) RETURNS VOID AS $$\n`;
      sql += `BEGIN\n`;
      sql += `  PERFORM set_config('app.current_user_id', p_user_id::text, true);\n`;
      sql += `  PERFORM set_config('app.current_role', p_role, true);\n`;
      sql += `  IF p_tenant_id IS NOT NULL THEN\n`;
      sql += `    PERFORM set_config('app.current_tenant_id', p_tenant_id::text, true);\n`;
      sql += `  END IF;\n`;
      sql += `  IF p_department IS NOT NULL THEN\n`;
      sql += `    PERFORM set_config('app.current_department', p_department::text, true);\n`;
      sql += `  END IF;\n`;
      sql += `  PERFORM set_config('app.emergency_access', p_emergency::text, true);\n`;
      sql += `END;\n`;
      sql += `$$ LANGUAGE plpgsql SECURITY DEFINER;\n`;

      let output = `# RLS Policies for \`${table_name}\`\n\n`;
      output += "```sql\n" + sql + "\n```\n\n";
      output += `## Quarkus Integration\n\n`;
      output += "```java\n";
      output += `// Gọi set_rls_context() trước mỗi query trong Quarkus\n`;
      output += `@ApplicationScoped\n`;
      output += `public class RLSContextFilter implements ContainerRequestFilter {\n`;
      output += `    @Inject SecurityIdentity identity;\n`;
      output += `    @Inject AgroalDataSource dataSource;\n\n`;
      output += `    @Override\n`;
      output += `    public void filter(ContainerRequestContext ctx) {\n`;
      output += `        var userId = identity.getAttribute("sub");\n`;
      output += `        var role = identity.getRoles().stream().findFirst().orElse("PATIENT");\n`;
      output += `        try (var conn = dataSource.getConnection();\n`;
      output += `             var stmt = conn.prepareStatement("SELECT set_rls_context(?, ?, ?, ?)")) {\n`;
      output += `            stmt.setObject(1, UUID.fromString(userId.toString()));\n`;
      output += `            stmt.setString(2, role);\n`;
      output += `            // Set tenant & department from JWT claims\n`;
      output += `            stmt.execute();\n`;
      output += `        }\n`;
      output += `    }\n`;
      output += `}\n`;
      output += "```\n";

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 7. Search All Knowledge Base
  // =====================================================
  server.tool(
    "search_xdev_knowledge",
    "Tìm kiếm kiến thức từ toàn bộ xDev.asia: 57 series, 1200+ lessons, blog posts, showcase. Hỗ trợ tiếng Việt và tiếng Anh.",
    {
      query: z
        .string()
        .describe("Từ khóa tìm kiếm (vd: 'Kubernetes', 'PostgreSQL HA', 'machine learning', 'mã hóa dữ liệu')"),
      max_results: z
        .number()
        .default(20)
        .describe("Số kết quả tối đa (mặc định 20)"),
    },
    async ({ query, max_results }) => {
      const results = searchAllContent(query, max_results);

      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `Không tìm thấy kết quả cho: "${query}". Thử từ khóa khác.` }],
        };
      }

      let output = `# Search Results: "${query}"\n\n`;
      output += `Found ${results.length} matches:\n\n`;

      for (const result of results) {
        const typeEmoji = result.type === "series" ? "📚" : result.type === "blog" ? "📝" : result.type === "showcase" ? "🚀" : "📄";
        output += `## ${typeEmoji} ${result.title}\n`;
        output += `📁 ${result.path} (${result.type})\n\n`;
        if (result.excerpt) {
          output += `> ${result.excerpt.replace(/\n/g, "\n> ")}\n\n`;
        }
        output += "---\n\n";
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 8. List All Series
  // =====================================================
  server.tool(
    "list_series",
    "Liệt kê tất cả series trên xDev.asia theo category: AI (20), Architecture (15), DevSecOps (9), Lập trình (13).",
    {
      category: z
        .enum(["all", "ai", "architecture", "devsecops", "lap-trinh"])
        .default("all")
        .describe("Lọc theo category (mặc định: tất cả)"),
    },
    async ({ category }) => {
      const allSeries = loadAllSeries();
      const filtered = category === "all"
        ? allSeries
        : allSeries.filter((s) => s.category === category);

      let output = `# xDev.asia Series (${filtered.length}/${allSeries.length})\n\n`;

      const grouped = new Map<string, typeof filtered>();
      for (const s of filtered) {
        const cat = s.category;
        if (!grouped.has(cat)) grouped.set(cat, []);
        grouped.get(cat)!.push(s);
      }

      const categoryLabels: Record<string, string> = {
        ai: "🤖 AI & Machine Learning",
        architecture: "🏗️ Architecture & System Design",
        devsecops: "🔐 DevSecOps",
        "lap-trinh": "💻 Lập trình",
      };

      for (const [cat, series] of grouped) {
        output += `## ${categoryLabels[cat] || cat} (${series.length})\n\n`;
        for (const s of series) {
          output += `- **${s.title}** (\`${s.slug}\`)\n`;
          output += `  ${s.lessonCount} lessons | ${s.level}\n`;
          if (s.description) {
            output += `  ${s.description.slice(0, 120)}...\n`;
          }
        }
        output += "\n";
      }

      output += `---\nDùng \`list_lessons\` với series_slug để xem bài học. Dùng \`read_series\` để đọc overview.\n`;
      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 9. List Lessons for a Series
  // =====================================================
  server.tool(
    "list_lessons",
    "Liệt kê bài học trong một series cụ thể.",
    {
      series_slug: z
        .string()
        .describe("Slug của series (lấy từ list_series)"),
    },
    async ({ series_slug }) => {
      const lessons = loadLessonsForSeries(series_slug);

      if (lessons.length === 0) {
        return {
          content: [{ type: "text", text: `Không tìm thấy lessons cho series: "${series_slug}". Dùng list_series để xem danh sách.` }],
        };
      }

      let output = `# Lessons: ${series_slug} (${lessons.length} bài)\n\n`;
      let currentSection = "";

      for (const lesson of lessons) {
        if (lesson.section !== currentSection) {
          currentSection = lesson.section;
          output += `\n## ${currentSection}\n\n`;
        }
        output += `- **${lesson.title}** (\`${lesson.slug}\`)\n`;
        if (lesson.description) {
          output += `  ${lesson.description.slice(0, 150)}...\n`;
        }
      }

      output += `\n---\nDùng \`read_lesson\` với slug để đọc nội dung chi tiết.\n`;
      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 10. Read Series Overview
  // =====================================================
  server.tool(
    "read_series",
    "Đọc overview (index.md) của một series - bao gồm mô tả, mục lục, thông tin tác giả.",
    {
      series_slug: z
        .string()
        .describe("Slug của series"),
    },
    async ({ series_slug }) => {
      const content = readSeriesIndex(series_slug);

      if (!content) {
        return {
          content: [{ type: "text", text: `Không tìm thấy series: "${series_slug}". Dùng list_series để xem danh sách.` }],
        };
      }

      return { content: [{ type: "text", text: content }] };
    }
  );

  // =====================================================
  // 11. Read Lesson Content
  // =====================================================
  server.tool(
    "read_lesson",
    "Đọc nội dung chi tiết của một bài học (lesson) trong bất kỳ series nào.",
    {
      slug: z
        .string()
        .describe("Slug của bài học (lấy từ list_lessons)"),
    },
    async ({ slug }) => {
      const content = readLessonContent(slug);

      if (!content) {
        return {
          content: [{ type: "text", text: `Không tìm thấy bài học: "${slug}". Dùng list_lessons để xem danh sách.` }],
        };
      }

      return { content: [{ type: "text", text: content }] };
    }
  );

  // =====================================================
  // 12. List Blog Posts
  // =====================================================
  server.tool(
    "list_blog_posts",
    "Liệt kê blog posts trên xDev.asia theo chủ đề: ai, architecture, cloud, database, devops, linux, programming, security.",
    {
      topic: z
        .string()
        .optional()
        .describe("Lọc theo topic (vd: 'devops', 'security'). Bỏ trống = tất cả."),
    },
    async ({ topic }) => {
      const posts = loadBlogPosts(topic);

      let output = `# Blog Posts (${posts.length})\n\n`;

      const grouped = new Map<string, typeof posts>();
      for (const p of posts) {
        if (!grouped.has(p.topic)) grouped.set(p.topic, []);
        grouped.get(p.topic)!.push(p);
      }

      for (const [t, topicPosts] of grouped) {
        output += `## ${t} (${topicPosts.length})\n\n`;
        for (const p of topicPosts) {
          output += `- **${p.title}** (\`${p.slug}\`)\n`;
          if (p.description) {
            output += `  ${p.description.slice(0, 150)}...\n`;
          }
        }
        output += "\n";
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 13. List Showcases
  // =====================================================
  server.tool(
    "list_showcases",
    "Liệt kê các sản phẩm/dự án showcase trên xDev.asia.",
    {},
    async () => {
      const showcases = loadShowcases();

      let output = `# Showcase Projects (${showcases.length})\n\n`;
      for (const s of showcases) {
        output += `## ${s.title}\n`;
        output += `Slug: \`${s.slug}\`\n`;
        if (s.description) {
          output += `${s.description.slice(0, 200)}\n`;
        }
        output += "\n";
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 14. Read Any Content
  // =====================================================
  server.tool(
    "read_content",
    "Đọc nội dung bất kỳ file markdown nào trên xDev.asia (blog, showcase, page).",
    {
      path: z
        .string()
        .describe("Relative path từ content/ (vd: 'blog/devops/cai-dat-harbor.md', 'showcase/xclaw.md')"),
    },
    async ({ path }) => {
      const content = readContentFile(path);

      if (!content) {
        return {
          content: [{ type: "text", text: `Không tìm thấy: "${path}". Dùng list_blog_posts hoặc list_showcases để xem danh sách.` }],
        };
      }

      return { content: [{ type: "text", text: content }] };
    }
  );

  // =====================================================
  // 15. Content Stats
  // =====================================================
  server.tool(
    "xdev_stats",
    "Xem thống kê tổng quan về nội dung xDev.asia: số series, lessons, blog posts, showcases.",
    {},
    async () => {
      const stats = getContentStats();

      let output = `# xDev.asia Content Statistics\n\n`;
      output += `| Metric | Count |\n|--------|-------|\n`;
      output += `| Series | ${stats.seriesCount} |\n`;
      output += `| Lessons | ${stats.lessonCount} |\n`;
      output += `| Blog Posts | ${stats.blogPostCount} |\n`;
      output += `| Showcases | ${stats.showcaseCount} |\n\n`;
      output += `## Categories\n`;
      for (const cat of stats.categories) {
        output += `- ${cat}\n`;
      }
      output += `\n## Blog Topics\n`;
      for (const topic of stats.blogTopics) {
        output += `- ${topic}\n`;
      }

      return { content: [{ type: "text", text: output }] };
    }
  );

  // =====================================================
  // 10. Security Audit Checklist
  // =====================================================
  server.tool(
    "security_audit_checklist",
    "Tạo security audit checklist cho một component hoặc toàn bộ hệ thống y tế.",
    {
      component: z
        .enum(["full_system", "api", "database", "authentication", "network", "container"])
        .describe("Component cần audit"),
    },
    async ({ component }) => {
      const checklists: Record<string, string[]> = {
        full_system: [
          "[ ] Tất cả communication sử dụng TLS 1.3",
          "[ ] MFA enabled cho tất cả nhân viên y tế",
          "[ ] PHI fields encrypted at rest (AES-256-GCM)",
          "[ ] Row-Level Security enabled trên tất cả bảng chứa PHI",
          "[ ] Audit logging cho mọi PHI access (pgAudit + OpenTelemetry)",
          "[ ] Backup encrypted và test restore định kỳ",
          "[ ] Penetration testing thực hiện trong 12 tháng qua",
          "[ ] Incident response plan documented và tested",
          "[ ] Data classification policy cho tất cả data types",
          "[ ] Business Associate Agreements (BAA) với vendors",
          "[ ] Employee security training hoàn thành trong năm",
          "[ ] Access review thực hiện quarterly",
        ],
        api: [
          "[ ] OAuth 2.0/OIDC authentication (KHÔNG dùng API key cho PHI)",
          "[ ] Rate limiting configured per endpoint",
          "[ ] Input validation cho tất cả request params",
          "[ ] SQL injection protection (parameterized queries)",
          "[ ] XSS prevention (Content-Security-Policy header)",
          "[ ] CORS restrictive (specific origins only)",
          "[ ] Response filtering dựa trên user role",
          "[ ] API versioning với deprecation policy",
          "[ ] Request/response size limits",
          "[ ] FHIR resource validation (nếu applicable)",
        ],
        database: [
          "[ ] PostgreSQL version supported (security patches)",
          "[ ] SSL/TLS required cho tất cả connections",
          "[ ] scram-sha-256 authentication (KHÔNG md5)",
          "[ ] pg_hba.conf: hostssl only, no host entries",
          "[ ] Row-Level Security enabled + FORCE",
          "[ ] pgcrypto cho column-level encryption",
          "[ ] pgAudit configured (read, write, ddl)",
          "[ ] Connection pooling với limits (PgBouncer)",
          "[ ] Least privilege: app user KHÔNG phải superuser",
          "[ ] Backup encryption enabled (pgBackRest/Barman)",
          "[ ] statement_timeout configured",
          "[ ] No default passwords",
        ],
        authentication: [
          "[ ] Keycloak realm configured với SSL required",
          "[ ] Password policy: min 12 chars, complexity requirements",
          "[ ] Brute force protection enabled",
          "[ ] MFA required (TOTP/WebAuthn)",
          "[ ] Session idle timeout: 15 phút (clinical workstations)",
          "[ ] Session max lifespan: 8 giờ",
          "[ ] Emergency access procedure documented",
          "[ ] Account lockout after failed attempts",
          "[ ] JWT signature verification (RS256/ES256)",
          "[ ] Token lifespan: max 15 phút",
          "[ ] Refresh token rotation enabled",
          "[ ] Admin console access restricted",
        ],
        network: [
          "[ ] WAF (Web Application Firewall) deployed",
          "[ ] Network segmentation (DMZ, internal, database zones)",
          "[ ] Kubernetes NetworkPolicies (deny by default)",
          "[ ] mTLS giữa microservices",
          "[ ] DNS filtering cho outbound traffic",
          "[ ] VPN cho remote access",
          "[ ] DDoS protection (CDN/WAF)",
          "[ ] Intrusion Detection System (IDS)",
        ],
        container: [
          "[ ] Base images: distroless hoặc minimal",
          "[ ] Image scanning (Trivy) trong CI/CD",
          "[ ] Images pinned by digest (SHA256)",
          "[ ] Pod Security Standards: restricted",
          "[ ] readOnlyRootFilesystem: true",
          "[ ] runAsNonRoot: true",
          "[ ] capabilities: drop ALL",
          "[ ] Resource limits configured",
          "[ ] Secrets từ External Secrets Operator",
          "[ ] SBOM generated cho mỗi release",
          "[ ] Runtime security monitoring (Falco)",
        ],
      };

      const items = checklists[component] || checklists.full_system;

      let output = `# Security Audit Checklist: ${component.toUpperCase()}\n\n`;
      output += `Dùng checklist này để đánh giá bảo mật hệ thống y tế.\n`;
      output += `Mark [x] cho items đã hoàn thành.\n\n`;

      for (const item of items) {
        output += `${item}\n`;
      }

      output += `\n---\n`;
      output += `Tham khảo: HIPAA Technical Safeguards (45 CFR §164.312)\n`;
      output += `Tool liên quan: hipaa_compliance_check, generate_security_config\n`;

      return { content: [{ type: "text", text: output }] };
    }
  );
}
