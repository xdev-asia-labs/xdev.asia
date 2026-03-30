---
id: 019d8b40-a203-7001-b001-nestjs000203
title: 'Bài 7: TypeORM và Prisma - Kết nối Database'
slug: bai-7-typeorm-va-prisma-ket-noi-database
description: >-
  Kết nối PostgreSQL/MySQL với TypeORM và Prisma. Entities, Repositories,
  Relations, Migrations, Seeding. So sánh TypeORM vs Prisma và khi nào
  dùng cái nào.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Providers, Dependency Injection & Data Layer"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-typeorm-setup"><strong>1. TypeORM — Setup với NestJS</strong></h2>

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

<h2 id="2-entities"><strong>2. Định nghĩa Entities</strong></h2>

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

<h2 id="5-prisma-setup"><strong>5. Prisma — Setup với NestJS</strong></h2>

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

<h3 id="prisma-service"><strong>Prisma Service trong NestJS</strong></h3>

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
<tr><th>Tiêu chí</th><th>TypeORM</th><th>Prisma</th></tr>
</thead>
<tbody>
<tr><td>Schema definition</td><td>TypeScript Decorators</td><td>Prisma Schema Language</td></tr>
<tr><td>Type safety</td><td>Trung bình</td><td>Rất cao (auto-generated)</td></tr>
<tr><td>Query API</td><td>Repository + QueryBuilder</td><td>Prisma Client (fluent API)</td></tr>
<tr><td>Migrations</td><td>TypeORM migrations</td><td>Prisma Migrate</td></tr>
<tr><td>Raw SQL</td><td>Dễ dàng</td><td>$queryRaw / $executeRaw</td></tr>
<tr><td>Relations</td><td>Decorators-based</td><td>Schema-based</td></tr>
<tr><td>Performance</td><td>Tốt</td><td>Rất tốt (Rust engine)</td></tr>
<tr><td>GUI Tool</td><td>Không có</td><td>Prisma Studio</td></tr>
<tr><td>NestJS integration</td><td>@nestjs/typeorm (official)</td><td>Manual PrismaService</td></tr>
<tr><td>Phù hợp</td><td>Quen Active Record/Data Mapper</td><td>Modern, type-safe first</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><strong>TypeORM</strong>: Integration chính thức, decorator-based entities, QueryBuilder cho complex queries</li>
<li><strong>Prisma</strong>: Type-safe auto-generated client, schema-first, Prisma Studio GUI</li>
<li>Cả hai đều hỗ trợ PostgreSQL, MySQL, SQLite, SQL Server</li>
<li>Production luôn dùng <strong>Migrations</strong>, KHÔNG dùng <code>synchronize: true</code></li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Validation, Pipes và Exception Filters</strong>.</p>
