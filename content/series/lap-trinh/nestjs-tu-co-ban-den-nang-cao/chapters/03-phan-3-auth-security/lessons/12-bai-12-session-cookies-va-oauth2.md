---
id: 019d8b40-a304-7001-b001-nestjs000304
title: 'Bài 12: Session, Cookies và OAuth2'
slug: bai-12-session-cookies-va-oauth2
description: >-
  Session management, Cookie-based auth, OAuth2 với Google/GitHub.
  Social login integration, Account linking. OpenID Connect basics.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-session"><strong>1. Session Management</strong></h2>

<pre><code class="language-bash">npm install express-session @types/express-session connect-redis
</code></pre>

<pre><code class="language-typescript">// main.ts
import * as session from 'express-session';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';

const redisClient = createClient({ url: process.env.REDIS_URL });
await redisClient.connect();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 1 ngày
  },
}));
</code></pre>

<pre><code class="language-typescript">// Sử dụng session trong controller
@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: LoginDto, @Session() session: Record&lt;string, any&gt;) {
    const user = this.authService.validate(dto);
    session.userId = user.id;
    session.role = user.role;
    return { message: 'Logged in' };
  }

  @Post('logout')
  logout(@Session() session: Record&lt;string, any&gt;) {
    session.destroy();
    return { message: 'Logged out' };
  }
}
</code></pre>

<h2 id="2-cookies"><strong>2. Cookie-based Authentication</strong></h2>

<pre><code class="language-typescript">import { Response } from 'express';

@Post('login')
async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
  const { accessToken, refreshToken } = await this.authService.login(dto);
  
  // Set access token trong HttpOnly cookie
  res.cookie('access_token', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000,  // 15 phút
  });

  // Refresh token trong separate cookie
  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/auth/refresh',  // Chỉ gửi khi refresh
    maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 ngày
  });

  return { message: 'Logged in' };
}

// JWT Strategy đọc từ cookie
@Injectable()
export class JwtCookieStrategy extends PassportStrategy(Strategy, 'jwt-cookie') {
  constructor() {
    super({
      jwtFromRequest: (req: Request) => req.cookies?.access_token,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    });
  }

  validate(payload: JwtPayload) {
    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}
</code></pre>

<h2 id="3-oauth2-google"><strong>3. OAuth2 — Google Login</strong></h2>

<pre><code class="language-bash">npm install passport-google-oauth20
npm install -D @types/passport-google-oauth20
</code></pre>

<pre><code class="language-typescript">// auth/strategies/google.strategy.ts
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private config: ConfigService) {
    super({
      clientID: config.get('GOOGLE_CLIENT_ID'),
      clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: config.get('GOOGLE_CALLBACK_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      avatar: photos[0]?.value,
      provider: 'google',
      providerId: profile.id,
    };
    done(null, user);
  }
}
</code></pre>

<pre><code class="language-typescript">// auth/auth.controller.ts
@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {}  // Redirect tới Google

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req, @Res() res: Response) {
    const tokens = await this.authService.socialLogin(req.user);
    
    // Redirect về frontend với token
    res.redirect(
      `${process.env.FRONTEND_URL}/auth/callback?token=${tokens.accessToken}`
    );
  }
}
</code></pre>

<h2 id="4-oauth2-github"><strong>4. OAuth2 — GitHub Login</strong></h2>

<pre><code class="language-bash">npm install passport-github2
</code></pre>

<pre><code class="language-typescript">@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private config: ConfigService) {
    super({
      clientID: config.get('GITHUB_CLIENT_ID'),
      clientSecret: config.get('GITHUB_CLIENT_SECRET'),
      callbackURL: config.get('GITHUB_CALLBACK_URL'),
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    return {
      email: profile.emails?.[0]?.value,
      name: profile.displayName || profile.username,
      avatar: profile.photos?.[0]?.value,
      provider: 'github',
      providerId: profile.id.toString(),
    };
  }
}
</code></pre>

<h2 id="5-social-login-service"><strong>5. Social Login Service — Account Linking</strong></h2>

<pre><code class="language-typescript">@Injectable()
export class AuthService {
  async socialLogin(socialUser: SocialUser) {
    // 1. Tìm user theo provider + providerId
    let user = await this.usersService.findByProvider(
      socialUser.provider,
      socialUser.providerId,
    );

    if (!user) {
      // 2. Tìm theo email (account linking)
      user = await this.usersService.findByEmail(socialUser.email);
      
      if (user) {
        // Link social account vào user hiện có
        await this.usersService.linkSocialAccount(user.id, {
          provider: socialUser.provider,
          providerId: socialUser.providerId,
        });
      } else {
        // 3. Tạo user mới
        user = await this.usersService.create({
          email: socialUser.email,
          name: socialUser.name,
          avatar: socialUser.avatar,
          provider: socialUser.provider,
          providerId: socialUser.providerId,
        });
      }
    }

    return this.generateTokens(user);
  }
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><strong>Sessions</strong>: Server-side state, dùng Redis store cho production</li>
<li><strong>Cookies</strong>: HttpOnly + Secure + SameSite cho token storage an toàn</li>
<li><strong>OAuth2</strong>: Social login với Google, GitHub, Facebook</li>
<li><strong>Account Linking</strong>: Gộp nhiều providers vào 1 user account</li>
<li>JWT trong cookie an toàn hơn localStorage (chống XSS)</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Interceptors, Middleware và Request Lifecycle</strong>.</p>
