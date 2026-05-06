---
id: 019f1c30-a501-7001-c001-v1b3c0d10501
title: 'Lesson 14: Vibe Coding Full-Stack App — Part 1: Backend'
slug: bai-14-vibe-coding-full-stack-app-phan-1-backend
description: >-
  Build a complete backend using Vibe Coding. Setup Node.js + Express +
  TypeScript. Database schema design with AI. REST API, authentication,
  validation. Agent Mode workflow for backend development.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: 'Part 5: Vibe Coding in action — Building real projects'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9027" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9027)"/>

  <!-- Decorations -->
  <g>
    <circle cx="812" cy="186" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="1024" cy="238" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="736" cy="30" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="948" cy="82" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="134" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.507041555162,205.5 1061.507041555162,246.5 1026,267 990.492958444838,246.5 990.492958444838,205.5 1026,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: Vibe Coding Full-Stack App — Part</tspan>
      <tspan x="60" dy="42">1: Backend</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Vibe Coding in action — Building real projects</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-gioi-thieu-du-an"><strong>1. Introducing the real-life project</strong></h2>

<p>In the next 3 lessons, we will build <strong>Task Management App</strong> Complete with Vibe Coding. The goal is to experience the end-to-end development process with AI.</p>

<h3>Project overview:</h3>
<table>
<thead>
<tr>
<th>Layer</th>
<th>Technology</th>
<th>Lesson</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Backend</strong></td>
<td>Node.js + Express + TypeScript</td>
<td>Lesson 14 (this lesson)</td>
</tr>
<tr>
<td><strong>Frontend</strong></td>
<td>React + Next.js + TailwindCSS</td>
<td>Lesson 15</td>
</tr>
<tr>
<td><strong>Mobile</strong></td>
<td>React Native / Flutter</td>
<td>Lesson 16</td>
</tr>
<tr>
<td><strong>Database</strong></td>
<td>PostgreSQL + Prisma ORM</td>
<td>Lesson 14</td>
</tr>
<tr>
<td><strong>Auth</strong></td>
<td>JWT + bcrypt</td>
<td>Lesson 14</td>
</tr>
</tbody>
</table>

<h2 id="2-khoi-tao-project"><strong>2. Create a project using Vibe Coding</strong></h2>

<h3>Step 1: Use Agent Mode to scaffold</h3>
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

<p>Agent Mode will automatically:</p>
<ul>
<li>Run <code>npm init</code>, install dependencies</li>
<li>Create <code>tsconfig.json</code>, <code>.eslintrc</code>, <code>.prettierrc</code></li>
<li>Create folder structure</li>
<li>Setup Docker Compose</li>
</ul>

<h3>Step 2: Project structure is created</h3>
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

<h2 id="3-database-schema-design"><strong>3. Database Schema Design with AI</strong></h2>

<pre><code class="language-text">// Prompt:
Design a Prisma schema for a task management app with:
- Users (email, password hash, name, avatar)
- Projects (name, description, owner)
- Tasks (title, description, status, priority, assignee, due date)
- Comments on tasks
- Project memberships with roles
</code></pre>

<p>Copilot will generate schema:</p>

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

<h2 id="6-vibe-coding-workflow"><strong>6. Vibe Coding Workflow for Backend</strong></h2>

<h3>Optimal process:</h3>

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

<h3>Tips when Vibe Coding backend:</h3>
<ul>
<li><strong>Clearly describe business logic</strong>: AI does not know your domain</li>
<li><strong>Request tests at the same time</strong>: "Create the service AND its unit tests"</li>
<li><strong>Review security</strong>: Always check input validation, auth checks</li>
<li><strong>Database migrations</strong>: Use <code>prisma migrate dev</code> after AI changed the schema</li>
<li><strong>Use copilot-instructions.md</strong>: Define coding standards for the project</li>
</ul>

<h2 id="7-testing-voi-ai"><strong>7. Testing with AI</strong></h2>

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

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<table>
<thead>
<tr>
<th>Step</th>
<th>Vibe Coding Approach</th>
<th>Time saving</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Project setup</strong></td>
<td>Agent Mode scaffold</td>
<td>~2 hours → 5 minutes</td>
</tr>
<tr>
<td><strong>DB Schema</strong></td>
<td>Describing entities → Prisma schema</td>
<td>~1 hour → 10 minutes</td>
</tr>
<tr>
<td><strong>Auth</strong></td>
<td>Describe flow → full implementation</td>
<td>~4 hours → 20 minutes</td>
</tr>
<tr>
<td><strong>CRUD API</strong></td>
<td>Describe endpoints → controller + service</td>
<td>~3 hours → 15 minutes</td>
</tr>
<tr>
<td><strong>Tests</strong></td>
<td>"Write tests for X" → comprehensive suite</td>
<td>~3 hours → 10 minutes</td>
</tr>
</tbody>
</table>

<p><strong>Important note</strong>: The above time savings are ideal. Actually you still need it <strong>review, debug, and refine</strong> AI code is born. Vibe Coding reduces coding time but <strong>Do not reduce review time</strong>.</p>

<p>Next article: Construction <strong>Frontend</strong> for app — React + Next.js + TailwindCSS, API connection, responsive design.</p>
