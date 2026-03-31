---
id: 019f1c30-a501-7001-c001-v1b3c0d10501
title: 'Bài 14: Vibe Coding Full-Stack App — Phần 1: Backend'
slug: bai-14-vibe-coding-full-stack-app-phan-1-backend
description: >-
  Xây dựng backend hoàn chỉnh bằng Vibe Coding. Setup Node.js + Express +
  TypeScript. Database schema design với AI. REST API, authentication,
  validation. Agent Mode workflow cho backend development.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: "Phần 5: Vibe Coding thực chiến — Xây dựng dự án thực tế"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-gioi-thieu-du-an"><strong>1. Giới thiệu dự án thực chiến</strong></h2>

<p>Trong 3 bài tiếp theo, chúng ta sẽ xây dựng <strong>Task Management App</strong> hoàn chỉnh bằng Vibe Coding. Mục tiêu là trải nghiệm quy trình phát triển end-to-end với AI.</p>

<h3>Tổng quan dự án:</h3>
<table>
<thead>
<tr>
<th>Layer</th>
<th>Technology</th>
<th>Bài học</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Backend</strong></td>
<td>Node.js + Express + TypeScript</td>
<td>Bài 14 (bài này)</td>
</tr>
<tr>
<td><strong>Frontend</strong></td>
<td>React + Next.js + TailwindCSS</td>
<td>Bài 15</td>
</tr>
<tr>
<td><strong>Mobile</strong></td>
<td>React Native / Flutter</td>
<td>Bài 16</td>
</tr>
<tr>
<td><strong>Database</strong></td>
<td>PostgreSQL + Prisma ORM</td>
<td>Bài 14</td>
</tr>
<tr>
<td><strong>Auth</strong></td>
<td>JWT + bcrypt</td>
<td>Bài 14</td>
</tr>
</tbody>
</table>

<h2 id="2-khoi-tao-project"><strong>2. Khởi tạo project bằng Vibe Coding</strong></h2>

<h3>Bước 1: Dùng Agent Mode để scaffold</h3>
<pre><code class="language-text">// Prompt cho Agent Mode:
Create a new Node.js backend project with:
- TypeScript configuration
- Express.js server
- Prisma ORM with PostgreSQL
- JWT authentication
- Project structure following clean architecture
- ESLint + Prettier configuration
- Docker Compose for PostgreSQL
</code></pre>

<p>Agent Mode sẽ tự động:</p>
<ul>
<li>Chạy <code>npm init</code>, cài dependencies</li>
<li>Tạo <code>tsconfig.json</code>, <code>.eslintrc</code>, <code>.prettierrc</code></li>
<li>Tạo cấu trúc thư mục</li>
<li>Setup Docker Compose</li>
</ul>

<h3>Bước 2: Project structure được tạo ra</h3>
<pre><code class="language-text">task-api/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   └── task.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── validate.middleware.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   └── task.routes.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── task.service.ts
│   ├── types/
│   │   └── index.ts
│   └── app.ts
├── prisma/
│   └── schema.prisma
├── docker-compose.yml
├── tsconfig.json
└── package.json
</code></pre>

<h2 id="3-database-schema-design"><strong>3. Database Schema Design với AI</strong></h2>

<pre><code class="language-text">// Prompt:
Design a Prisma schema for a task management app with:
- Users (email, password hash, name, avatar)
- Projects (name, description, owner)
- Tasks (title, description, status, priority, assignee, due date)
- Comments on tasks
- Project memberships with roles
</code></pre>

<p>Copilot sẽ generate schema:</p>

<pre><code class="language-prisma">// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  ownedProjects  Project[]
  memberships    ProjectMember[]
  assignedTasks  Task[]          @relation("AssignedTasks")
  createdTasks   Task[]          @relation("CreatedTasks")
  comments       Comment[]
}

model Project {
  id          String   @id @default(uuid())
  name        String
  description String?
  ownerId     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  owner   User            @relation(fields: [ownerId], references: [id])
  members ProjectMember[]
  tasks   Task[]
}

model ProjectMember {
  id        String @id @default(uuid())
  role      Role   @default(MEMBER)
  userId    String
  projectId String

  user    User    @relation(fields: [userId], references: [id])
  project Project @relation(fields: [projectId], references: [id])

  @@unique([userId, projectId])
}

enum Role {
  OWNER
  ADMIN
  MEMBER
}

model Task {
  id          String     @id @default(uuid())
  title       String
  description String?
  status      TaskStatus @default(TODO)
  priority    Priority   @default(MEDIUM)
  dueDate     DateTime?
  projectId   String
  assigneeId  String?
  creatorId   String
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  project  Project   @relation(fields: [projectId], references: [id])
  assignee User?     @relation("AssignedTasks", fields: [assigneeId], references: [id])
  creator  User      @relation("CreatedTasks", fields: [creatorId], references: [id])
  comments Comment[]
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  IN_REVIEW
  DONE
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

model Comment {
  id        String   @id @default(uuid())
  content   String
  taskId    String
  authorId  String
  createdAt DateTime @default(now())

  task   Task @relation(fields: [taskId], references: [id])
  author User @relation(fields: [authorId], references: [id])
}
</code></pre>

<h2 id="4-authentication"><strong>4. Authentication — JWT Flow</strong></h2>

<pre><code class="language-text">// Prompt:
Implement JWT authentication with:
- Register endpoint with email validation and password hashing
- Login endpoint returning access + refresh tokens
- Auth middleware that validates JWT
- Refresh token rotation
- Use bcrypt for password hashing
</code></pre>

<p>Copilot generate auth service:</p>

<pre><code class="language-typescript">// src/services/auth.service.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma';

export class AuthService {
  async register(email: string, password: string, name: string) {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    return this.generateTokens(user.id);
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    return this.generateTokens(user.id);
  }

  private generateTokens(userId: string) {
    const accessToken = jwt.sign(
      { userId },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );
    const refreshToken = jwt.sign(
      { userId },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: '7d' }
    );

    return { accessToken, refreshToken };
  }
}
</code></pre>

<h2 id="5-rest-api"><strong>5. REST API — CRUD Operations</strong></h2>

<pre><code class="language-text">// Prompt:
Create CRUD endpoints for tasks with:
- GET /api/tasks — list tasks with filtering and pagination
- POST /api/tasks — create new task
- PUT /api/tasks/:id — update task
- DELETE /api/tasks/:id — delete task
- Include authorization checks
- Validate request body with Zod
</code></pre>

<p>Copilot generate controller:</p>

<pre><code class="language-typescript">// src/controllers/task.controller.ts
import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

const createTaskSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  dueDate: z.string().datetime().optional(),
  projectId: z.string().uuid(),
  assigneeId: z.string().uuid().optional(),
});

export class TaskController {
  async list(req: Request, res: Response) {
    const { projectId, status, priority, page = '1', limit = '20' } = req.query;

    const tasks = await prisma.task.findMany({
      where: {
        projectId: projectId as string,
        status: status as any,
        priority: priority as any,
      },
      include: {
        assignee: { select: { id: true, name: true, avatar: true } },
        _count: { select: { comments: true } },
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    });

    res.json({ data: tasks });
  }

  async create(req: Request, res: Response) {
    const data = createTaskSchema.parse(req.body);

    const task = await prisma.task.create({
      data: {
        ...data,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
        creatorId: req.userId!, // from auth middleware
      },
    });

    res.status(201).json({ data: task });
  }
}
</code></pre>

<h2 id="6-vibe-coding-workflow"><strong>6. Vibe Coding Workflow cho Backend</strong></h2>

<h3>Quy trình tối ưu:</h3>

<pre><code class="language-text">┌──────────────────────────────────────────────────┐
│           BACKEND VIBE CODING WORKFLOW            │
├──────────────────────────────────────────────────┤
│                                                   │
│  1. Mô tả feature bằng ngôn ngữ tự nhiên        │
│     ↓                                             │
│  2. Agent Mode scaffold files                     │
│     ↓                                             │
│  3. Review generated code                         │
│     ↓                                             │
│  4. Prompt: "Write tests for this"               │
│     ↓                                             │
│  5. Agent chạy tests, fix lỗi                    │
│     ↓                                             │
│  6. Prompt: "Add error handling and validation"   │
│     ↓                                             │
│  7. Review final code → Commit                   │
│                                                   │
└──────────────────────────────────────────────────┘
</code></pre>

<h3>Tips khi Vibe Coding backend:</h3>
<ul>
<li><strong>Mô tả rõ business logic</strong>: AI không biết domain của bạn</li>
<li><strong>Yêu cầu tests cùng lúc</strong>: "Create the service AND its unit tests"</li>
<li><strong>Review security</strong>: Luôn kiểm tra input validation, auth checks</li>
<li><strong>Database migrations</strong>: Dùng <code>prisma migrate dev</code> sau khi AI thay đổi schema</li>
<li><strong>Sử dụng copilot-instructions.md</strong>: Định nghĩa coding standards cho project</li>
</ul>

<h2 id="7-testing-voi-ai"><strong>7. Testing với AI</strong></h2>

<pre><code class="language-text">// Prompt:
Write comprehensive tests for AuthService including:
- Successful registration
- Duplicate email registration
- Successful login
- Invalid credentials
- Token generation and verification
Use Jest with supertest for integration tests.
</code></pre>

<pre><code class="language-typescript">// src/services/__tests__/auth.service.test.ts
import { AuthService } from '../auth.service';
import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';

describe('AuthService', () => {
  const authService = new AuthService();

  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  describe('register', () => {
    it('should create user and return tokens', async () => {
      const result = await authService.register(
        'test@example.com', 'Password123!', 'Test User'
      );

      expect(result.accessToken).toBeDefined();
      expect(result.refreshToken).toBeDefined();

      const user = await prisma.user.findUnique({
        where: { email: 'test@example.com' },
      });
      expect(user).toBeDefined();
      expect(user!.name).toBe('Test User');
    });

    it('should hash password correctly', async () => {
      await authService.register(
        'test@example.com', 'Password123!', 'Test User'
      );

      const user = await prisma.user.findUnique({
        where: { email: 'test@example.com' },
      });
      expect(user!.password).not.toBe('Password123!');
      expect(await bcrypt.compare('Password123!', user!.password)).toBe(true);
    });

    it('should reject duplicate email', async () => {
      await authService.register(
        'test@example.com', 'Password123!', 'Test User'
      );

      await expect(
        authService.register('test@example.com', 'Other456!', 'Other User')
      ).rejects.toThrow('Email already registered');
    });
  });
});
</code></pre>

<h2 id="8-error-handling"><strong>8. Error Handling Pattern</strong></h2>

<pre><code class="language-text">// Prompt:
Add global error handling middleware with:
- Custom AppError class with status codes
- Async error wrapper for controllers
- Prisma error handling (unique constraint, not found)
- Request validation errors (Zod)
- Structured error response format
</code></pre>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Bước</th>
<th>Vibe Coding Approach</th>
<th>Thời gian tiết kiệm</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Project setup</strong></td>
<td>Agent Mode scaffold</td>
<td>~2 giờ → 5 phút</td>
</tr>
<tr>
<td><strong>DB Schema</strong></td>
<td>Mô tả entities → Prisma schema</td>
<td>~1 giờ → 10 phút</td>
</tr>
<tr>
<td><strong>Auth</strong></td>
<td>Describe flow → full implementation</td>
<td>~4 giờ → 20 phút</td>
</tr>
<tr>
<td><strong>CRUD API</strong></td>
<td>Describe endpoints → controller + service</td>
<td>~3 giờ → 15 phút</td>
</tr>
<tr>
<td><strong>Tests</strong></td>
<td>"Write tests for X" → comprehensive suite</td>
<td>~3 giờ → 10 phút</td>
</tr>
</tbody>
</table>

<p><strong>Lưu ý quan trọng</strong>: Thời gian tiết kiệm ở trên là lý tưởng. Thực tế bạn vẫn cần <strong>review, debug, và tinh chỉnh</strong> code AI sinh ra. Vibe Coding giảm thời gian viết code nhưng <strong>không giảm thời gian review</strong>.</p>

<p>Bài tiếp theo: Xây dựng <strong>Frontend</strong> cho app — React + Next.js + TailwindCSS, kết nối API, responsive design.</p>
