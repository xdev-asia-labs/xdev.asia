---
id: 019d8b40-a203-7001-b001-nestjs000203
title: 'Lesson 7: TypeORM and Prisma - Database connection'
slug: bai-7-typeorm-va-prisma-ket-noi-database
description: >-
  Connect PostgreSQL/MySQL with TypeORM and Prisma. Entities, Repositories,
  Relations, Migrations, Seeding. Compare TypeORM vs Prisma and when to use
  which one.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Providers, Dependency Injection & Data Layer'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5932" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5932)"/>

  <!-- Decorations -->
  <g>
    <circle cx="984" cy="102" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="868" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="752" cy="150" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="636" cy="174" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="198" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="182" x2="1100" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="212" x2="1050" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1014.0429399400242,163.5 1014.0429399400242,200.5 982,219 949.9570600599758,200.5 949.9570600599758,163.5 982,145" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: TypeORM and Prisma - Connection</tspan>
      <tspan x="60" dy="42">Database</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Providers, Dependency Injection & Data Layer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-typeorm-setup"><strong>1. TypeORM — Setup with NestJS</strong></h2>

<pre><code class="language-bash"># Cài package
npm install @nestjs/typeorm typeorm pg
# pg = PostgreSQL driver, thay bằng mysql2 cho MySQL
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'nestjs_demo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // ⚠️ CHỈ dùng dev, KHÔNG dùng production!
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
</code></pre>

<h2 id="2-entities"><strong>2. Definition of Entities</strong></h2>

<pre><code class="language-typescript">// users/entities/user.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, OneToMany,
} from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })  // Không include trong SELECT mặc định
  password: string;

  @Column({ type: 'enum', enum: ['admin', 'user'], default: 'user' })
  role: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
</code></pre>

<pre><code class="language-typescript">// posts/entities/post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Tag } from '../../tags/entities/tag.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  author: User;

  @Column()
  authorId: string;

  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable()  // Tạo join table posts_tags
  tags: Tag[];
}
</code></pre>

<h2 id="3-repository-pattern"><strong>3. Repository Pattern</strong></h2>

<pre><code class="language-typescript">// users.module.ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],  // Đăng ký repository
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
</code></pre>

<pre><code class="language-typescript">// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository&lt;User&gt;,
  ) {}

  async create(dto: CreateUserDto): Promise&lt;User&gt; {
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async findAll(page = 1, limit = 10): Promise&lt;{ data: User[]; total: number }&gt; {
    const [data, total] = await this.userRepo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { createdAt: 'DESC' },
    });
    return { data, total };
  }

  async findOne(id: string): Promise&lt;User&gt; {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['posts'],
    });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise&lt;User&gt; {
    await this.userRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise&lt;void&gt; {
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
  }

  // QueryBuilder cho queries phức tạp
  async search(keyword: string): Promise&lt;User[]&gt; {
    return this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.posts', 'post')
      .where('user.name ILIKE :keyword', { keyword: `%${keyword}%` })
      .orWhere('user.email ILIKE :keyword', { keyword: `%${keyword}%` })
      .orderBy('user.createdAt', 'DESC')
      .getMany();
  }
}
</code></pre>

<h2 id="4-migrations"><strong>4. Migrations</strong></h2>

<pre><code class="language-bash"># Tạo migration
npx typeorm migration:generate src/migrations/CreateUsers -d src/data-source.ts

# Chạy migration
npx typeorm migration:run -d src/data-source.ts

# Revert migration
npx typeorm migration:revert -d src/data-source.ts
</code></pre>

<pre><code class="language-typescript">// src/data-source.ts — cho CLI
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'nestjs_demo',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
</code></pre>

<h2 id="5-prisma-setup"><strong>5. Prisma — Setup with NestJS</strong></h2>

<pre><code class="language-bash"># Cài Prisma
npm install prisma --save-dev
npm install @prisma/client

# Init Prisma
npx prisma init
</code></pre>

<pre><code class="language-prisma">// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  name      String   @db.VarChar(100)
  email     String   @unique
  password  String
  role      Role     @default(USER)
  isActive  Boolean  @default(true)
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String   @db.Text
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId  String
  tags      Tag[]
  createdAt DateTime @default(now())

  @@map("posts")
}

model Tag {
  id    String @id @default(uuid())
  name  String @unique
  posts Post[]

  @@map("tags")
}

enum Role {
  ADMIN
  USER
}
</code></pre>

<pre><code class="language-bash"># Generate Prisma Client
npx prisma generate

# Tạo migration
npx prisma migrate dev --name init

# Prisma Studio (GUI)
npx prisma studio
</code></pre>

<h3 id="prisma-service"><strong>Prisma Service in NestJS</strong></h3>

<pre><code class="language-typescript">// prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient 
  implements OnModuleInit, OnModuleDestroy {
  
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

// prisma/prisma.module.ts
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
</code></pre>

<pre><code class="language-typescript">// users.service.ts — với Prisma
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }

  async findAll(page = 1, limit = 10) {
    const [data, total] = await Promise.all([
      this.prisma.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: { posts: true },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count(),
    ]);
    return { data, total };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { posts: { include: { tags: true } } },
    });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }
}
</code></pre>

<h2 id="6-so-sanh"><strong>6. TypeORM vs Prisma</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>TypeORM</th><th>Prisma</th></tr>
</thead>
<tbody>
<tr><td>Schema definitions</td><td>TypeScript Decorators</td><td>Prisma Schema Language</td></tr>
<tr><td>Type safety</td><td>Average</td><td>Very high (auto-generated)</td></tr>
<tr><td>Query API</td><td>Repository + QueryBuilder</td><td>Prisma Client (fluent API)</td></tr>
<tr><td>Migrations</td><td>TypeORM migrations</td><td>Prisma Migrate</td></tr>
<tr><td>Raw SQL</td><td>Easy</td><td>$queryRaw / $executeRaw</td></tr>
<tr><td>Relations</td><td>Decorators-based</td><td>Schema-based</td></tr>
<tr><td>Performance</td><td>Good</td><td>Very good (Rust engine)</td></tr>
<tr><td>GUI Tools</td><td>No</td><td>Prisma Studio</td></tr>
<tr><td>NestJS integration</td><td>@nestjs/typebug (official)</td><td>Manual PrismaService</td></tr>
<tr><td>Suitable</td><td>Familiar with Active Record/Data Mapper</td><td>Modern, type-safe first</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><strong>TypeORM</strong>: Official integration, decorator-based entities, QueryBuilder for complex queries</li>
<li><strong>Prisma</strong>: Type-safe auto-generated client, schema-first, Prisma Studio GUI</li>
<li>Both support PostgreSQL, MySQL, SQLite, SQL Server</li>
<li>Production always uses it <strong>Migrations</strong>, DO NOT use <code>synchronize: true</code></li>
</ul>

<p>The next article will explore <strong>Validation, Pipes and Exception Filters</strong>.</p>
