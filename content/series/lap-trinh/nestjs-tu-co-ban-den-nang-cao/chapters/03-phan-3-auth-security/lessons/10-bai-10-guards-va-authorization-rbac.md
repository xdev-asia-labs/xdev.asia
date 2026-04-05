---
id: 019d8b40-a302-7001-b001-nestjs000302
title: 'Bài 10: Guards và Authorization - RBAC'
slug: bai-10-guards-va-authorization-rbac
description: >-
  Guards trong NestJS, AuthGuard, RolesGuard. Role-Based Access Control
  (RBAC), Permission-based authorization. Custom decorators @Roles(),
  @Public(). CASL integration.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7602" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7602)"/>

  <!-- Decorations -->
  <g>
    <circle cx="984" cy="122" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="868" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="752" cy="270" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="636" cy="214" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="158" r="20" fill="#f472b6" opacity="0.05"/>
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
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Lập trình — Bài 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Guards và Authorization - RBAC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Authentication &amp; Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-guards-la-gi"><strong>1. Guards là gì?</strong></h2>

<p>Guards quyết định request có được phép tiếp tục hay không. Chúng chạy <strong>sau middleware, trước interceptors và pipes</strong>. Use case chính: <strong>Authorization</strong> — kiểm tra user có quyền truy cập resource không.</p>

<pre><code class="language-typescript">import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return !!request.user;  // true = cho phép, false = 403
  }
}
</code></pre>

<h2 id="2-roles-guard"><strong>2. Role-Based Access Control (RBAC)</strong></h2>

<h3 id="roles-decorator"><strong>Custom @Roles() Decorator</strong></h3>

<pre><code class="language-typescript">// auth/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export enum Role {
  Admin = 'admin',
  Editor = 'editor',
  User = 'user',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
</code></pre>

<h3 id="roles-guard-implementation"><strong>RolesGuard Implementation</strong></h3>

<pre><code class="language-typescript">// auth/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Role } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Lấy roles yêu cầu từ metadata
    const requiredRoles = this.reflector.getAllAndOverride&lt;Role[]&gt;(ROLES_KEY, [
      context.getHandler(),  // Method-level
      context.getClass(),    // Class-level
    ]);

    // Nếu không có @Roles() → cho phép mọi user
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
</code></pre>

<h3 id="su-dung"><strong>Sử dụng</strong></h3>

<pre><code class="language-typescript">@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)  // Apply cho toàn controller
export class UsersController {
  
  @Get()
  @Roles(Role.Admin, Role.Editor)  // Chỉ admin và editor
  findAll() { ... }

  @Get(':id')
  @Roles(Role.Admin)  // Chỉ admin
  findOne(@Param('id') id: string) { ... }

  @Post()
  @Roles(Role.Admin)
  create(@Body() dto: CreateUserDto) { ... }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) { ... }
}
</code></pre>

<h2 id="3-permissions-guard"><strong>3. Permission-based Authorization</strong></h2>

<pre><code class="language-typescript">// Permissions decorator
export enum Permission {
  CreateUser = 'user:create',
  ReadUser = 'user:read',
  UpdateUser = 'user:update',
  DeleteUser = 'user:delete',
  ManageOrders = 'order:manage',
}

export const PERMISSIONS_KEY = 'permissions';
export const RequirePermissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);

// Permissions Guard
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride&lt;Permission[]&gt;(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!required) return true;

    const { user } = context.switchToHttp().getRequest();
    return required.every(perm => user.permissions?.includes(perm));
  }
}

// Sử dụng
@RequirePermissions(Permission.DeleteUser)
@Delete(':id')
remove(@Param('id') id: string) { ... }
</code></pre>

<h2 id="4-owner-guard"><strong>4. Resource Owner Guard</strong></h2>

<pre><code class="language-typescript">// Chỉ cho phép chủ sở hữu hoặc admin
@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(private usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise&lt;boolean&gt; {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const resourceId = request.params.id;

    // Admin luôn được quyền
    if (user.role === 'admin') return true;

    // Kiểm tra ownership
    return user.id === resourceId;
  }
}

@UseGuards(JwtAuthGuard, OwnerGuard)
@Patch(':id')
updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
  // Chỉ user sở hữu profile hoặc admin mới cập nhật được
}
</code></pre>

<h2 id="5-casl"><strong>5. CASL — Advanced Authorization</strong></h2>

<pre><code class="language-bash">npm install @casl/ability
</code></pre>

<pre><code class="language-typescript">// casl/casl-ability.factory.ts
import { AbilityBuilder, createMongoAbility, MongoAbility } from '@casl/ability';

export type AppAbility = MongoAbility;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User): AppAbility {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    if (user.role === 'admin') {
      can('manage', 'all');  // Admin có mọi quyền
    } else {
      can('read', 'Post');
      can('create', 'Post');
      can('update', 'Post', { authorId: user.id });  // Chỉ update post của mình
      can('delete', 'Post', { authorId: user.id });
      can('read', 'User', { id: user.id });           // Chỉ xem profile mình
      can('update', 'User', { id: user.id });
      cannot('delete', 'User');                        // Không được xóa user
    }

    return build();
  }
}

// Abilities Guard
@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const rules = this.reflector.get('check-abilities', context.getHandler());
    if (!rules) return true;

    const { user } = context.switchToHttp().getRequest();
    const ability = this.caslAbilityFactory.createForUser(user);

    return rules.every(rule => ability.can(rule.action, rule.subject));
  }
}
</code></pre>

<h2 id="6-composite-decorator"><strong>6. Composite Auth Decorator</strong></h2>

<pre><code class="language-typescript">// Kết hợp nhiều guards thành 1 decorator gọn
import { applyDecorators, UseGuards } from '@nestjs/common';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    Roles(...roles),
    UseGuards(JwtAuthGuard, RolesGuard),
  );
}

// Sử dụng cực gọn
@Auth(Role.Admin)
@Delete(':id')
remove(@Param('id') id: string) { ... }

@Auth(Role.Admin, Role.Editor)
@Post()
create(@Body() dto: CreatePostDto) { ... }
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><strong>Guards</strong>: Quyết định request có được tiếp tục không (canActivate)</li>
<li><strong>RBAC</strong>: Role-based qua @Roles() + RolesGuard</li>
<li><strong>Permissions</strong>: Fine-grained với permission strings</li>
<li><strong>Owner Guard</strong>: Resource ownership checking</li>
<li><strong>CASL</strong>: Attribute-based access control cho logic phức tạp</li>
<li><strong>Composite Decorators</strong>: @Auth() gộp nhiều guards</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Security Best Practices</strong> trong NestJS.</p>
