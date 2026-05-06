---
id: 019d8b40-a301-7001-b001-nestjs000301
title: 第 9 課：使用 Passport 和 JWT 進行身份驗證
slug: bai-9-authentication-voi-passport-va-jwt
description: 使用@nestjs/passport、本機策略、JWT 策略實作身份驗證。存取令牌、刷新令牌、令牌輪換。 Bcrypt 密碼雜湊。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：身份驗證和安全性
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3531" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3531)"/>

  <!-- Decorations -->
  <g>
    <circle cx="809" cy="37" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="727" cy="215" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：使用 Passport 和 JWT 進行身份驗證</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：身份驗證和安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-setup-auth"><strong>1. 設定認證</strong></h2>

<pre><code class="language-bash"># Cài packages
npm install @nestjs/passport passport passport-local passport-jwt
npm install @nestjs/jwt bcrypt
npm install -D @types/passport-local @types/passport-jwt @types/bcrypt
</code></pre>

<pre><code class="language-bash"># Generate auth module
nest g module auth
nest g service auth
nest g controller auth
</code></pre>

<h2 id="2-user-entity"><strong>2. 帶密碼的使用者實體</strong></h2>

<pre><code class="language-typescript">// users/entities/user.entity.ts
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })  // Không trả về mặc định
  password: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ['admin', 'user'], default: 'user' })
  role: string;

  @Column({ nullable: true })
  refreshToken: string;

  // Hash password trước khi save
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12);
    }
  }

  async validatePassword(plainPassword: string): Promise&lt;boolean&gt; {
    return bcrypt.compare(plainPassword, this.password);
  }
}
</code></pre>

<h2 id="3-auth-service"><strong>3. 認證服務</strong></h2>

<pre><code class="language-typescript">// auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

interface JwtPayload {
  sub: string;  // user id
  email: string;
  role: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Validate user cho Local Strategy
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email, true); // include password
    if (!user) throw new UnauthorizedException('Email hoặc mật khẩu sai');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Email hoặc mật khẩu sai');

    const { password: _, ...result } = user;
    return result;
  }

  // Login — trả về tokens
  async login(user: any) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    // Lưu refresh token (hashed)
    await this.usersService.updateRefreshToken(
      user.id,
      await bcrypt.hash(refreshToken, 10),
    );

    return {
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    };
  }

  // Refresh token
  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findOne(userId);
    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Access denied');
    }

    const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!isMatch) throw new UnauthorizedException('Access denied');

    return this.login(user);
  }

  // Logout — xóa refresh token
  async logout(userId: string) {
    await this.usersService.updateRefreshToken(userId, null);
  }

  // Register
  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email đã tồn tại');

    const user = await this.usersService.create(dto);
    return this.login(user);
  }
}
</code></pre>

<h2 id="4-strategies"><strong>4. 護照策略</strong></h2>

<pre><code class="language-typescript">// auth/strategies/local.strategy.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Dùng email thay vì username
  }

  async validate(email: string, password: string) {
    return this.authService.validateUser(email, password);
    // Return value sẽ gắn vào request.user
  }
}
</code></pre>

<pre><code class="language-typescript">// auth/strategies/jwt.strategy.ts
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    // Return value gắn vào request.user
    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}
</code></pre>

<pre><code class="language-typescript">// auth/strategies/jwt-refresh.strategy.ts
@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayload) {
    const refreshToken = req.get('Authorization').replace('Bearer ', '').trim();
    return { ...payload, refreshToken };
  }
}
</code></pre>

<h2 id="5-auth-module"><strong>5. 認證模組</strong></h2>

<pre><code class="language-typescript">// auth/auth.module.ts
@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({}),  // Config động trong service
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthModule {}
</code></pre>

<h2 id="6-auth-controller"><strong>6. 認證控制器</strong></h2>

<pre><code class="language-typescript">// auth/auth.controller.ts
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  @HttpCode(200)
  async refreshTokens(@Req() req) {
    const { sub, refreshToken } = req.user;
    return this.authService.refreshTokens(sub, refreshToken);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req) {
    await this.authService.logout(req.user.id);
    return { message: 'Logged out' };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
</code></pre>

<h2 id="7-protect-routes"><strong>7. 保護路線</strong></h2>

<pre><code class="language-typescript">// Cách 1: UseGuards trực tiếp
@UseGuards(AuthGuard('jwt'))
@Get('protected')
protectedRoute() { return 'Only authenticated users'; }

// Cách 2: Custom JwtAuthGuard (khuyến nghị)
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException('Token không hợp lệ');
    }
    return user;
  }
}

// Cách 3: Global Guard + @Public() decorator
// auth/decorators/public.decorator.ts
import { SetMetadata } from '@nestjs/common';
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// Global guard kiểm tra mọi route
@Injectable()
export class GlobalJwtGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) { super(); }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    return super.canActivate(context);
  }
}

// Sử dụng
@Public()
@Get('health')
health() { return 'OK'; }  // Không cần auth
</code></pre>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><strong>護照</strong>：本地原則（郵箱/密碼）+JWT策略（token）</li>
<li><strong>訪問令牌</strong>：短期（15m），在授權標頭中發送</li>
<li><strong>刷新令牌</strong>：長期（7天），將雜湊保存在資料庫中</li>
<li><strong>代幣輪換</strong>：每次刷新都會建立一對新的令牌</li>
<li><strong>全域守衛 + @Public()</strong>：模式保護所有預設路由</li>
</ul>

<p>下一篇文章將探討 <strong>警衛與授權——RBAC</strong>。</p>
