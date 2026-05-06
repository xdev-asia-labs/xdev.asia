---
id: 019d8b40-a304-7001-b001-nestjs000304
title: 第 12 課：會話、Cookie 和 OAuth2
slug: bai-12-session-cookies-va-oauth2
description: 會話管理、基於 Cookie 的身份驗證、使用 Google/GitHub 的 OAuth2。社群登入整合、帳戶連結。 OpenID 連結基礎知識。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 第 3 部分：身份驗證和安全性
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8751" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8751)"/>

  <!-- Decorations -->
  <g>
    <circle cx="627" cy="211" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="654" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="681" cy="245" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="708" cy="132" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="279" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.1769145362398,103 952.1769145362398,139 921,157 889.8230854637602,139 889.8230854637602,103.00000000000001 921,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：會話、Cookie 和 OAuth2</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：身份驗證和安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-session"><strong>1. 會話管理</strong></h2>

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

<h2 id="2-cookies"><strong>2. 基於Cookie的身份驗證</strong></h2>

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

<h2 id="3-oauth2-google"><strong>3.OAuth2——Google登錄</strong></h2>

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

<h2 id="4-oauth2-github"><strong>4.OAuth2——GitHub登錄</strong></h2>

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

<h2 id="5-social-login-service"><strong>5. 社群登入服務－帳號關聯</strong></h2>

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

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><strong>會議</strong>：伺服器端狀態，使用Redis儲存進行生產</li>
<li><strong>餅乾</strong>：HttpOnly + Secure + SameSite 用於安全性令牌存儲</li>
<li><strong>OAuth2</strong>：使用 Google、GitHub、Facebook 進行社群登錄</li>
<li><strong>帳戶關聯</strong>：將多個提供者合併到一個使用者帳戶中</li>
<li>Cookies中的JWT比localStorage更安全（防XSS）</li>
</ul>

<p>下一篇文章將探討 <strong>攔截器、中間件和請求生命週期</strong>。</p>
