---
id: 019d8b40-a403-7001-b001-nestjs000403
title: 第 15 課：GraphQL 與 NestJS
slug: bai-15-graphql-voi-nestjs
description: 帶有 NestJS 的 GraphQL API。程式碼優先方法、解析器、查詢、突變、訂閱、資料載入器、身份驗證。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 第 4 部分：進階功能
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7785" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7785)"/>

  <!-- Decorations -->
  <g>
    <circle cx="868" cy="54" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="636" cy="62" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="904" cy="70" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="672" cy="78" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="86" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="114" x2="1100" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="144" x2="1050" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.1147367097487,199.5 1039.1147367097487,228.5 1014,243 988.8852632902513,228.5 988.8852632902513,199.5 1014,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：GraphQL 與 NestJS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-setup"><strong>1.安裝GraphQL</strong></h2>

<pre><code class="language-bash">npm install @nestjs/graphql @nestjs/apollo @apollo/server graphql
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot&lt;ApolloDriverConfig&gt;({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV !== 'production',
      context: ({ req, res }) =&gt; ({ req, res }),
    }),
  ],
})
export class AppModule {}
</code></pre>

<h2 id="2-object-types"><strong>2. 物件類型（程式碼優先）</strong></h2>

<pre><code class="language-typescript">// users/models/user.model.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() =&gt; ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() =&gt; Int)
  age: number;

  @Field(() =&gt; [Post], { nullable: 'items' })
  posts?: Post[];

  @Field()
  createdAt: Date;
}

@ObjectType()
export class Post {
  @Field(() =&gt; ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() =&gt; User)
  author: User;
}
</code></pre>

<h2 id="3-resolvers"><strong>3. 旋轉變壓器</strong></h2>

<pre><code class="language-typescript">// users/users.resolver.ts
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';

@Resolver(() =&gt; User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  @Query(() =&gt; [User], { name: 'users' })
  findAll(
    @Args('limit', { type: () =&gt; Int, defaultValue: 10 }) limit: number,
    @Args('offset', { type: () =&gt; Int, defaultValue: 0 }) offset: number,
  ) {
    return this.usersService.findAll({ limit, offset });
  }

  @Query(() =&gt; User, { name: 'user' })
  findOne(@Args('id', { type: () =&gt; ID }) id: string) {
    return this.usersService.findById(id);
  }

  // ResolveField cho nested relation
  @ResolveField(() =&gt; [Post])
  posts(@Parent() user: User) {
    return this.postsService.findByAuthorId(user.id);
  }
}
</code></pre>

<h2 id="4-input-types"><strong>4. 輸入類型和變異</strong></h2>

<pre><code class="language-typescript">// users/dto/create-user.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(2)
  name: string;

  @Field()
  @MinLength(8)
  password: string;
}

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() =&gt; ID)
  id: string;
}
</code></pre>

<pre><code class="language-typescript">// Mutations trong resolver
@Mutation(() =&gt; User)
createUser(@Args('input') input: CreateUserInput) {
  return this.usersService.create(input);
}

@Mutation(() =&gt; User)
@UseGuards(GqlAuthGuard)
updateUser(
  @Args('input') input: UpdateUserInput,
  @CurrentUser() currentUser: User,
) {
  return this.usersService.update(input.id, input);
}

@Mutation(() =&gt; Boolean)
@UseGuards(GqlAuthGuard)
deleteUser(@Args('id', { type: () =&gt; ID }) id: string) {
  return this.usersService.delete(id);
}
</code></pre>

<h2 id="5-auth-graphql"><strong>5. GraphQL 的身份驗證</strong></h2>

<pre><code class="language-typescript">// auth/gql-auth.guard.ts
import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

// Current user decorator cho GraphQL
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) =&gt; {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
</code></pre>

<h2 id="6-dataloader"><strong>6. DataLoader — 求解 N+1</strong></h2>

<pre><code class="language-bash">npm install dataloader
</code></pre>

<pre><code class="language-typescript">// common/dataloader/users.loader.ts
import DataLoader from 'dataloader';

@Injectable({ scope: Scope.REQUEST })
export class UsersLoader {
  constructor(private usersService: UsersService) {}

  readonly batchUsers = new DataLoader&lt;string, User&gt;(async (ids: string[]) =&gt; {
    const users = await this.usersService.findByIds([...ids]);
    const usersMap = new Map(users.map((u) =&gt; [u.id, u]));
    return ids.map((id) =&gt; usersMap.get(id));
  });
}

// Sử dụng trong resolver
@ResolveField(() =&gt; User)
author(@Parent() post: Post) {
  return this.usersLoader.batchUsers.load(post.authorId);
}
</code></pre>

<h2 id="7-subscriptions"><strong>7. 訂閱（即時）</strong></h2>

<pre><code class="language-typescript">// app.module.ts - Enable subscriptions
GraphQLModule.forRoot&lt;ApolloDriverConfig&gt;({
  driver: ApolloDriver,
  autoSchemaFile: true,
  subscriptions: {
    'graphql-ws': true,
  },
})

// posts/posts.resolver.ts
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() =&gt; Post)
export class PostsResolver {
  @Mutation(() =&gt; Post)
  async createPost(@Args('input') input: CreatePostInput) {
    const post = await this.postsService.create(input);
    pubSub.publish('postCreated', { postCreated: post });
    return post;
  }

  @Subscription(() =&gt; Post)
  postCreated() {
    return pubSub.asyncIterableIterator('postCreated');
  }
}
</code></pre>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><strong>程式碼優先</strong>：使用裝飾器自動產生schema</li>
<li><strong>旋轉變壓器</strong>：查詢、變異、訂閱、ResolveField</li>
<li><strong>資料載入器</strong>：批次查詢，解決N+1問題</li>
<li><strong>授權</strong>: GqlAuthGuard + CurrentUser 裝飾器</li>
<li><strong>訂閱</strong>：透過WebSocket即時更新</li>
</ul>

<p>下一篇文章將探討 <strong>文件上傳、快取和任務調度</strong>。</p>
