---
id: 019d8b40-a502-7001-b001-nestjs000502
title: 'Lesson 18: Testing in NestJS'
slug: bai-18-testing-trong-nestjs
description: >-
  Unit testing, Integration testing, E2E testing in NestJS. Jest, Supertest,
  Test modules, Mock providers, Database testing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: 'Part 5: Microservices, Testing & Production'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9210" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9210)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1020" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="110" x2="1100" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="140" x2="1050" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Testing in NestJS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Microservices, Testing & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup"><strong>1. Testing in NestJS</strong></h2>

<p>NestJS has Jest built-in and provided <code>@nestjs/testing</code> package for testing module.</p>

<pre><code class="language-text">src/
├── users/
│   ├── users.service.ts
│   ├── users.service.spec.ts       ← Unit test
│   ├── users.controller.ts
│   ├── users.controller.spec.ts    ← Unit test
│   └── users.e2e-spec.ts           ← E2E test
└── test/
    └── app.e2e-spec.ts             ← Global E2E
</code></pre>

<h2 id="2-unit-testing"><strong>2. Unit Testing Services</strong></h2>

<pre><code class="language-typescript">// users/users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('UsersService', () =&gt; {
  let service: UsersService;
  let repo: jest.Mocked&lt;Repository&lt;User&gt;&gt;;

  const mockRepo = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () =&gt; {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockRepo },
      ],
    }).compile();

    service = module.get(UsersService);
    repo = module.get(getRepositoryToken(User));
  });

  afterEach(() =&gt; jest.clearAllMocks());

  describe('findAll', () =&gt; {
    it('should return array of users', async () =&gt; {
      const users = [{ id: '1', name: 'Test', email: 'test@test.com' }];
      mockRepo.find.mockResolvedValue(users);

      const result = await service.findAll();

      expect(result).toEqual(users);
      expect(mockRepo.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findById', () =&gt; {
    it('should return user when found', async () =&gt; {
      const user = { id: '1', name: 'Test' };
      mockRepo.findOne.mockResolvedValue(user);

      const result = await service.findById('1');

      expect(result).toEqual(user);
      expect(mockRepo.findOne).toHaveBeenCalledWith({ where: { id: '1' } });
    });

    it('should throw NotFoundException when not found', async () =&gt; {
      mockRepo.findOne.mockResolvedValue(null);

      await expect(service.findById('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () =&gt; {
    it('should create and return a user', async () =&gt; {
      const dto = { name: 'New User', email: 'new@test.com', password: 'pass123' };
      const saved = { id: '2', ...dto };
      mockRepo.create.mockReturnValue(saved);
      mockRepo.save.mockResolvedValue(saved);

      const result = await service.create(dto);

      expect(result).toEqual(saved);
    });
  });
});
</code></pre>

<h2 id="3-unit-testing-controllers"><strong>3. Unit Testing Controllers</strong></h2>

<pre><code class="language-typescript">// users/users.controller.spec.ts
describe('UsersController', () =&gt; {
  let controller: UsersController;
  let service: jest.Mocked&lt;UsersService&gt;;

  const mockService = {
    findAll: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () =&gt; {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockService }],
    }).compile();

    controller = module.get(UsersController);
    service = module.get(UsersService);
  });

  it('GET /users should return all users', async () =&gt; {
    const users = [{ id: '1', name: 'Test' }];
    mockService.findAll.mockResolvedValue(users);

    const result = await controller.findAll();

    expect(result).toEqual(users);
  });

  it('POST /users should create user', async () =&gt; {
    const dto = { name: 'New', email: 'new@test.com', password: 'pass' };
    const created = { id: '2', ...dto };
    mockService.create.mockResolvedValue(created);

    const result = await controller.create(dto);

    expect(result).toEqual(created);
    expect(mockService.create).toHaveBeenCalledWith(dto);
  });
});
</code></pre>

<h2 id="4-testing-guards"><strong>4. Testing Guards and Pipes</strong></h2>

<pre><code class="language-typescript">// Testing custom guard
describe('RolesGuard', () =&gt; {
  let guard: RolesGuard;
  let reflector: Reflector;

  beforeEach(async () =&gt; {
    const module = await Test.createTestingModule({
      providers: [RolesGuard, Reflector],
    }).compile();

    guard = module.get(RolesGuard);
    reflector = module.get(Reflector);
  });

  it('should allow access for correct role', () =&gt; {
    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(['admin']);

    const context = createMockExecutionContext({
      user: { role: 'admin' },
    });

    expect(guard.canActivate(context)).toBe(true);
  });

  it('should deny access for wrong role', () =&gt; {
    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(['admin']);

    const context = createMockExecutionContext({
      user: { role: 'user' },
    });

    expect(guard.canActivate(context)).toBe(false);
  });
});
</code></pre>

<h2 id="5-e2e-testing"><strong>5. E2E Testing</strong></h2>

<pre><code class="language-typescript">// test/users.e2e-spec.ts
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('Users (e2e)', () =&gt; {
  let app: INestApplication;
  let accessToken: string;

  beforeAll(async () =&gt; {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(DataSource)
      .useValue(testDataSource)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    // Login để lấy token
    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'admin@test.com', password: 'password' });
    accessToken = loginRes.body.accessToken;
  });

  afterAll(async () =&gt; {
    await app.close();
  });

  describe('GET /users', () =&gt; {
    it('should return 401 without token', () =&gt; {
      return request(app.getHttpServer())
        .get('/users')
        .expect(401);
    });

    it('should return users with valid token', () =&gt; {
      return request(app.getHttpServer())
        .get('/users')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200)
        .expect((res) =&gt; {
          expect(Array.isArray(res.body.data)).toBe(true);
        });
    });
  });

  describe('POST /users', () =&gt; {
    it('should create user with valid data', () =&gt; {
      return request(app.getHttpServer())
        .post('/users')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ name: 'E2E User', email: 'e2e@test.com', password: 'pass1234' })
        .expect(201)
        .expect((res) =&gt; {
          expect(res.body.data).toHaveProperty('id');
          expect(res.body.data.email).toBe('e2e@test.com');
        });
    });

    it('should return 400 with invalid email', () =&gt; {
      return request(app.getHttpServer())
        .post('/users')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ name: 'Bad', email: 'invalid', password: 'pass' })
        .expect(400);
    });
  });
});
</code></pre>

<h2 id="6-database-testing"><strong>6. Database Testing with Test Containers</strong></h2>

<pre><code class="language-typescript">// test/setup.ts
import { DataSource } from 'typeorm';

export const testDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  entities: [User, Post, Order],
  synchronize: true,
});

beforeAll(async () =&gt; {
  await testDataSource.initialize();
  // Seed test data
  await testDataSource.getRepository(User).save({
    email: 'admin@test.com',
    name: 'Admin',
    password: await bcrypt.hash('password', 10),
    role: 'admin',
  });
});

afterAll(async () =&gt; {
  await testDataSource.destroy();
});
</code></pre>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><strong>Unit tests</strong>: Mock dependencies, test logic isolation</li>
<li><strong>Controller tests</strong>: Mock service, test routing/validation</li>
<li><strong>Guard/Pipe tests</strong>: Mock ExecutionContext, Reflector</li>
<li><strong>E2E tests</strong>: Supertest, real HTTP requests, test full pipeline</li>
<li><strong>Database tests</strong>: SQLite in-memory or TestContainers</li>
</ul>

<p>The next article will explore <strong>Dockerize and CI/CD for NestJS</strong>.</p>
