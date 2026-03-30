---
id: 019d8b40-a301-7001-b001-nestjs000301
title: 'Bài 9: Authentication với Passport và JWT'
slug: bai-9-authentication-voi-passport-va-jwt
description: >-
  Triển khai Authentication với @nestjs/passport, Local strategy, JWT
  strategy. Access token, Refresh token, Token rotation. Bcrypt password
  hashing.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-setup-auth"><strong>1. Setup Authentication</strong></h2>

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

<h2 id="2-user-entity"><strong>2. User Entity với Password</strong></h2>

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

<h2 id="3-auth-service"><strong>3. Auth Service</strong></h2>

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

<h2 id="4-strategies"><strong>4. Passport Strategies</strong></h2>

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

<h2 id="5-auth-module"><strong>5. Auth Module</strong></h2>

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

<h2 id="6-auth-controller"><strong>6. Auth Controller</strong></h2>

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

<h2 id="7-protect-routes"><strong>7. Bảo vệ Routes</strong></h2>

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

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><strong>Passport</strong>: Local strategy (email/password) + JWT strategy (token)</li>
<li><strong>Access Token</strong>: Ngắn hạn (15m), gửi trong Authorization header</li>
<li><strong>Refresh Token</strong>: Dài hạn (7d), lưu hashed trong DB</li>
<li><strong>Token Rotation</strong>: Mỗi lần refresh tạo cặp tokens mới</li>
<li><strong>Global Guard + @Public()</strong>: Pattern bảo vệ mọi route mặc định</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Guards và Authorization — RBAC</strong>.</p>
