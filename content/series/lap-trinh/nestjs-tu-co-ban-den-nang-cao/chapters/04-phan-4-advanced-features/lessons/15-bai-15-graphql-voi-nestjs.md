---
id: 019d8b40-a403-7001-b001-nestjs000403
title: 'Bài 15: GraphQL với NestJS'
slug: bai-15-graphql-voi-nestjs
description: >-
  GraphQL API với NestJS. Code-first approach, Resolvers, Queries,
  Mutations, Subscriptions, DataLoader, Authentication.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Cài đặt GraphQL</strong></h2>

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

<h2 id="2-object-types"><strong>2. Object Types (Code-first)</strong></h2>

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

<h2 id="3-resolvers"><strong>3. Resolvers</strong></h2>

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

<h2 id="4-input-types"><strong>4. Input Types và Mutations</strong></h2>

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

<h2 id="5-auth-graphql"><strong>5. Authentication cho GraphQL</strong></h2>

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

<h2 id="6-dataloader"><strong>6. DataLoader — Giải quyết N+1</strong></h2>

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

<h2 id="7-subscriptions"><strong>7. Subscriptions (Real-time)</strong></h2>

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

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><strong>Code-first</strong>: Dùng decorators để generate schema tự động</li>
<li><strong>Resolvers</strong>: Query, Mutation, Subscription, ResolveField</li>
<li><strong>DataLoader</strong>: Batch queries, giải quyết N+1 problem</li>
<li><strong>Auth</strong>: GqlAuthGuard + CurrentUser decorator</li>
<li><strong>Subscriptions</strong>: Real-time updates qua WebSocket</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>File Upload, Caching và Task Scheduling</strong>.</p>
