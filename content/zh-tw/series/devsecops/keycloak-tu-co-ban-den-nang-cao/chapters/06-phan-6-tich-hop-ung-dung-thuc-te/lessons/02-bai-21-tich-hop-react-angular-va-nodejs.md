---
id: 019d8b30-b121-7001-c001-e0c5f8100121
title: 第 21 課：整合 React、Angular 和 Node.js
slug: bai-21-tich-hop-react-angular-va-nodejs
description: 將Keycloak與前端整合（React使用keycloak-js或react-oidc-context，Angular使用angular-auth-oidc-client）、身份驗證狀態管理、靜默令牌刷新、受保護的路由、基於角色的UI渲染。後端 Node.js/Express 具有 Passport-keycloak-connect 或 jose JWT 驗證、中介軟體驗證、API 閘道模式。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 21
section_title: 第六部分：整合實際應用
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7896" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7896)"/>

  <!-- Decorations -->
  <g>
    <circle cx="620" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：整合 React、Angular 和 Node.js</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：整合實際應用__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_65__HTMLTAG_66___1。前端和 Node.js 整合概述___HTMLTAG_67__HTMLTAG_68___

<p>將 Keycloak 與前端應用程式整合時，我們使用 <strong> 帶有 PKCE 的授權代碼流</strong>（代碼交換的證明密鑰）- 單頁應用程式 (SPA) 和公共客戶端最標準、最安全的流程。 </p>

___預編碼_0___

<table>
<thead>
___HTMLTAG_75__HTMLTAG_76___平台___HTMLTAG_77__HTMLTAG_78___函式庫___HTMLTAG_79__HTMLTAG_80___方法___HTMLTAG_81__HTMLTAG_82___
</thead>
<tbody>
___HTMLTAG_85__HTMLTAG_86___React___HTMLTAG_87__HTMLTAG_88__HTMLTAG_89___react-oidc-context</code>（建議）/<code>keycloak-js</code>（建議）/<code>keyclo_-js___HTMLTAG_____客戶端/Keycloak適配器___HTMLTAG_95__HTMLTAG_96___
___HTMLTAG_97__HTMLTAG_98___Angular____HTMLTAG_99__HTMLTAG_100__HTMLTAG_101___angular-auth-oidc-client___HTMLTAG_102__HTMLTAG_103__HTMLTAG_104___MLTAG_102__HTMLTAG_103__HTMLTAG_104___MLTAG_102__HTMLTAG_103__HTMLTAG_104___MLTAG_102__HTMLTAG_103__HTMLTAG_104____DCG10101074107070700707070707070707070707070707070707_707]。
___HTMLTAG_107__HTMLTAG_108___Node.js___HTMLTAG_109__HTMLTAG_110__HTMLTAG_111___jose</code> / <code>__passport-keycloak-conconnect___MLTAGMLGMLG113_____5驗證/護照策略___HTMLTAG_117__HTMLTAG_118___
</tbody>
</table>

___HTMLTAG_121__HTMLTAG_122___2。 React + Keycloak 整合___HTMLTAG_123__HTMLTAG_124___

___HTMLTAG_125__HTMLTAG_126___2.1 方法 1：react-oidc-context（建議）___HTMLTAG_127__HTMLTAG_128___

___HTMLTAG_129__HTMLTAG_130___react-oidc-context</code> 是一個現代 OIDC 函式庫，基於 <code>oidc-client-ts</code>，推薦用於新的 React 應用程式：</p>

___預編碼_1___

<h4>2.1.1 AuthProvider 設定</h4>

___預編碼_2___

<h4>2.1.2 useAuth 掛鉤用法</h4>

___預編碼_3___<h4>2.1.3 使用存取權杖的 API 呼叫</h4>

___預編碼_4___

<h4>2.1.4 受保護的路由__HTMLTAG_142___

___預編碼_5___

___預編碼_6___

<h4>2.1.5 角色為基礎的 UI 渲染</h4>

___預編碼_7___

___HTMLTAG_145__HTMLTAG_146___2.2 方法 2：keycloak-js 適配器___HTMLTAG_147__HTMLTAG_148___

___HTMLTAG_149__HTMLTAG_150___keycloak-js</code> 是 Keycloak 的官方適配器。仍然運作良好，但 <code>react-oidc-context</code> 優先用於新項目，因為它更符合 OIDC 標準：</p>

___預編碼_8___

___預編碼_9___

___預編碼_10___

<pre><code class="language-tsx">// Sử dụng keycloak-js trong component
import { useKeycloak } from './KeycloakProvider';

function Profile() {
  const { keycloak, authenticated } = useKeycloak();

  if (!authenticated) {
    return &lt;button onClick={() =&gt; keycloak.login()}&gt;Login&lt;/button&gt;;
  }

  return (
    &lt;div&gt;
      &lt;h2&gt;{keycloak.tokenParsed?.preferred_username}&lt;/h2&gt;
      &lt;p&gt;Email: {keycloak.tokenParsed?.email}&lt;/p&gt;

      {/* Role-based rendering */}
      {keycloak.hasRealmRole('ADMIN') && (
        &lt;p&gt;🔑 You are an Admin&lt;/p&gt;
      )}
      {keycloak.hasResourceRole('editor', 'my-react-client') && (
        &lt;p&gt;✏️ You have editor access&lt;/p&gt;
      )}

      &lt;button onClick={() =&gt; keycloak.logout()}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

___HTMLTAG_155__HTMLTAG_156___2.3 SPA 的 Keycloak 用戶端設定___HTMLTAG_157__HTMLTAG_158___

<p>在 Keycloak 中為 React/Angular SPA 建立客戶端：</p>

<pre><code class="language-text">Client Settings:
  Client ID:           my-react-client
  Client Protocol:     openid-connect
  Access Type:         public (SPA không có client_secret)
  Standard Flow:       ON (Authorization Code Flow)
  Direct Access:       OFF (không dùng cho SPA)
  Implicit Flow:       OFF (deprecated, dùng PKCE thay thế)

  Valid Redirect URIs:
    - http://localhost:3000/*
    - http://localhost:4200/*

  Valid Post Logout Redirect URIs:
    - http://localhost:3000/*
    - http://localhost:4200/*

  Web Origins:
    - http://localhost:3000
    - http://localhost:4200
    - + (cho phép tất cả origin từ redirect URIs)

  Advanced Settings:
    Proof Key for Code Exchange (PKCE): S256
    Access Token Lifespan: 5 minutes
    Refresh Token: Enable
</code></pre>

___HTMLTAG_161__HTMLTAG_162___3。 Angular + Keycloak 整合___HTMLTAG_163__HTMLTAG_164___

___HTMLTAG_165__HTMLTAG_166___3.1 安裝 Angular-auth-oidc-client___HTMLTAG_167__HTMLTAG_168___

<pre><code class="language-bash">npm install angular-auth-oidc-client
</code></pre>

___HTMLTAG_169__HTMLTAG_170___3.2 OIDC 模組配置___HTMLTAG_171__HTMLTAG_172___

<pre><code class="language-typescript">// src/app/app.config.ts (Angular 17+ standalone)
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAuth, LogLevel } from 'angular-auth-oidc-client';
import { routes } from './app.routes';
import { authInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAuth({
      config: {
        authority: 'http://localhost:8080/realms/my-realm',
        redirectUrl: window.location.origin + '/callback',
        postLogoutRedirectUri: window.location.origin,
        clientId: 'my-angular-client',
        scope: 'openid profile email',
        responseType: 'code',
        // Silent renew
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew.html',
        useRefreshToken: true,
        // Logging
        logLevel: LogLevel.Debug,
        // Auto login
        autoUserInfo: true,
        // Token renewal
        renewTimeBeforeTokenExpiresInSec: 30,
      },
    }),
  ],
};
</code></pre>

___HTMLTAG_173__HTMLTAG_174___3.3 驗證服務___HTMLTAG_175__HTMLTAG_176___

<pre><code class="language-typescript">// src/app/auth/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private oidcService = inject(OidcSecurityService);

  isAuthenticated$ = this.oidcService.isAuthenticated$.pipe(
    map((result) => result.isAuthenticated)
  );

  userData$ = this.oidcService.userData$;

  login(): void {
    this.oidcService.authorize();
  }

  logout(): void {
    this.oidcService
      .logoff()
      .subscribe((result) => console.log('Logged out', result));
  }

  getAccessToken(): string {
    let token = '';
    this.oidcService
      .getAccessToken()
      .subscribe((t) => (token = t));
    return token;
  }

  hasRole(role: string): boolean {
    let hasRole = false;
    this.userData$.subscribe((userData) => {
      const realmRoles = userData?.userData?.realm_access?.roles || [];
      hasRole = realmRoles.includes(role);
    });
    return hasRole;
  }

  getUserRoles(): string[] {
    let roles: string[] = [];
    this.userData$.subscribe((userData) => {
      roles = userData?.userData?.realm_access?.roles || [];
    });
    return roles;
  }
}
</code></pre>

___HTMLTAG_177__HTMLTAG_178___3.4 驗證___HTMLTAG_179__HTMLTAG_180___

<pre><code class="language-typescript">// src/app/auth/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const oidcService = inject(OidcSecurityService);
  const router = inject(Router);

  return oidcService.isAuthenticated$.pipe(
    take(1),
    map(({ isAuthenticated }) => {
      if (!isAuthenticated) {
        oidcService.authorize();
        return false;
      }

      // Kiểm tra required roles nếu có
      const requiredRoles = route.data?.['roles'] as string[];
      if (requiredRoles && requiredRoles.length > 0) {
        // Kiểm tra roles từ token
        const token = oidcService.getPayloadFromAccessToken();
        const userRoles: string[] =
          token?.realm_access?.roles || [];
        const hasRole = requiredRoles.some((role) =>
          userRoles.includes(role)
        );

        if (!hasRole) {
          router.navigate(['/unauthorized']);
          return false;
        }
      }

      return true;
    })
  );
};
</code></pre>

___HTMLTAG_181__HTMLTAG_182___3.5 HTTP 攔截器___HTMLTAG_183__HTMLTAG_184___

<pre><code class="language-typescript">// src/app/auth/auth.interceptor.ts
import { HttpInterceptorFn, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { switchMap, take } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest&lt;unknown&gt;,
  next: HttpHandlerFn
) => {
  const oidcService = inject(OidcSecurityService);

  // Chỉ thêm token cho API calls
  if (!req.url.includes('/api/')) {
    return next(req);
  }

  return oidcService.getAccessToken().pipe(
    take(1),
    switchMap((token) => {
      if (token) {
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next(clonedReq);
      }
      return next(req);
    })
  );
};
</code></pre>

___HTMLTAG_185__HTMLTAG_186___3.6 路由設定___HTMLTAG_187__HTMLTAG_188___

<pre><code class="language-typescript">// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'callback',
    loadComponent: () =>
      import('./pages/callback/callback.component').then(
        (m) => m.CallbackComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then(
        (m) => m.AdminComponent
      ),
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./pages/unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent
      ),
  },
];
</code></pre>

___HTMLTAG_189__HTMLTAG_190___3.7 元件使用 Auth___HTMLTAG_191__HTMLTAG_192___

<pre><code class="language-typescript">// src/app/pages/dashboard/dashboard.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    &lt;div *ngIf="isAuthenticated"&gt;
      &lt;h2&gt;Dashboard&lt;/h2&gt;
      &lt;p&gt;Username: {{ userData?.preferred_username }}&lt;/p&gt;
      &lt;p&gt;Email: {{ userData?.email }}&lt;/p&gt;
      &lt;p&gt;Roles: {{ roles.join(', ') }}&lt;/p&gt;

      &lt;div *ngIf="authService.hasRole('ADMIN')"&gt;
        &lt;h3&gt;Admin Section&lt;/h3&gt;
        &lt;p&gt;Nội dung chỉ dành cho Admin&lt;/p&gt;
      &lt;/div&gt;

      &lt;button (click)="authService.logout()"&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  `,
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  private oidcService = inject(OidcSecurityService);

  isAuthenticated = false;
  userData: any = null;
  roles: string[] = [];

  ngOnInit(): void {
    this.oidcService.isAuthenticated$.subscribe(
      (result) => (this.isAuthenticated = result.isAuthenticated)
    );

    this.oidcService.userData$.subscribe((result) => {
      this.userData = result.userData;
      this.roles = this.userData?.realm_access?.roles || [];
    });
  }
}
</code></pre>

___HTMLTAG_193__HTMLTAG_194___4。 Node.js/Express + Keycloak 整合___HTMLTAG_195__HTMLTAG_196___

___HTMLTAG_197__HTMLTAG_198___4.1 方法 1：jose JWT 驗證（建議）___HTMLTAG_199__HTMLTAG_200___

<p>使用函式庫 <code>jose</code> 驗證 JWT 令牌 - 輕量級方法，不依賴於特定框架的適配器：</p>

___預編碼_20___

<pre><code class="language-typescript">// src/middleware/auth.ts
import { createRemoteJWKSet, jwtVerify, JWTPayload } from 'jose';
import { Request, Response, NextFunction } from 'express';

// Keycloak configuration
const KEYCLOAK_URL = process.env.KEYCLOAK_URL || 'http://localhost:8080';
const REALM = process.env.KEYCLOAK_REALM || 'my-realm';
const ISSUER = `${KEYCLOAK_URL}/realms/${REALM}`;
const JWKS_URI = `${ISSUER}/protocol/openid-connect/certs`;

// Tạo JWKS client (tự cache keys)
const JWKS = createRemoteJWKSet(new URL(JWKS_URI));

// Extended Request type
interface AuthenticatedRequest extends Request {
  user?: {
    sub: string;
    username: string;
    email: string;
    roles: string[];
    clientRoles: string[];
  };
}

// JWT verification middleware
export async function authenticate(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise&lt;void&gt; {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing or invalid Authorization header' });
    return;
  }

  const token = authHeader.substring(7);

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: ISSUER,
      // Optionally validate audience
      // audience: 'my-client',
    });

    // Extract user info from JWT claims
    req.user = {
      sub: payload.sub || '',
      username: (payload as any).preferred_username || '',
      email: (payload as any).email || '',
      roles: extractRealmRoles(payload),
      clientRoles: extractClientRoles(payload, 'my-client'),
    };

    next();
  } catch (err) {
    console.error('JWT verification failed:', err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// Extract realm roles từ JWT
function extractRealmRoles(payload: JWTPayload): string[] {
  const realmAccess = (payload as any).realm_access;
  return realmAccess?.roles || [];
}

// Extract client roles từ JWT
function extractClientRoles(
  payload: JWTPayload,
  clientId: string
): string[] {
  const resourceAccess = (payload as any).resource_access;
  return resourceAccess?.[clientId]?.roles || [];
}

// Role check middleware factory
export function requireRole(...roles: string[]) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const userRoles = [...req.user.roles, ...req.user.clientRoles];
    const hasRole = roles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      res.status(403).json({
        error: 'Forbidden',
        message: `Required roles: ${roles.join(', ')}`,
      });
      return;
    }

    next();
  };
}
</code></pre>

___HTMLTAG_205__HTMLTAG_206___4.2 快速申請___HTMLTAG_207__HTMLTAG_208___

<pre><code class="language-typescript">// src/app.ts
import express from 'express';
import cors from 'cors';
import { authenticate, requireRole } from './middleware/auth';

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
}));
app.use(express.json());

// ========== Public Routes ==========

app.get('/api/public/health', (req, res) => {
  res.json({ status: 'UP' });
});

// ========== Protected Routes ==========

// Tất cả routes dưới đây yêu cầu authentication
app.use('/api', authenticate);

app.get('/api/me', (req: any, res) => {
  res.json({
    username: req.user.username,
    email: req.user.email,
    roles: req.user.roles,
  });
});

// User routes
app.get('/api/users', requireRole('USER', 'ADMIN'), (req, res) => {
  res.json({
    message: 'User list',
    users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ],
  });
});

// Admin routes
app.get(
  '/api/admin/dashboard',
  requireRole('ADMIN'),
  (req: any, res) => {
    res.json({
      message: 'Admin Dashboard',
      adminUser: req.user.username,
    });
  }
);

app.post(
  '/api/admin/users',
  requireRole('ADMIN'),
  (req: any, res) => {
    res.json({
      message: 'User created',
      createdBy: req.user.username,
      user: req.body,
    });
  }
);

// ========== Start Server ==========

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
</code></pre>

___HTMLTAG_209__HTMLTAG_210___4.3 方法 2：護照-鑰匙斗篷-連接___HTMLTAG_211__HTMLTAG_212___

<p>如果您在專案中使用了 Passport.js，則可以使用 <code>passport-keycloak-connect</code>:</p>

<pre><code class="language-bash">npm install passport passport-keycloak-connect express-session
npm install -D @types/passport @types/express-session
</code></pre>

___預編碼_24___

___HTMLTAG_217__HTMLTAG_218___5。靜默令牌刷新___HTMLTAG_219__HTMLTAG_220___

<p>令牌刷新對於確保無縫的使用者體驗非常重要。主要有2個方法：</p>

___HTMLTAG_223__HTMLTAG_224___5.1 刷新令牌輪換___HTMLTAG_225__HTMLTAG_226___

___預編碼_25___

___HTMLTAG_227__HTMLTAG_228___5.2 React-oidc-context 自動刷新___HTMLTAG_229__HTMLTAG_230___

<pre><code class="language-tsx">// Đã bật trong config
const oidcConfig = {
  // ...
  automaticSilentRenew: true,
};

// Lắng nghe sự kiện token refresh
import { useAuth } from 'react-oidc-context';

function TokenMonitor() {
  const auth = useAuth();

  useEffect(() => {
    // Sự kiện khi token được renew thành công
    return auth.events.addAccessTokenExpiring(() => {
      console.log('Token is about to expire, renewing...');
    });
  }, [auth.events]);

  useEffect(() => {
    return auth.events.addAccessTokenExpired(() => {
      console.log('Token expired, signing in silently...');
      auth.signinSilent().catch(() => {
        // Silent renew failed, redirect to login
        auth.signinRedirect();
      });
    });
  }, [auth.events, auth]);

  return null;
}
</code></pre>

___HTMLTAG_231__HTMLTAG_232___5.3 靜默檢查 SSO HTML___HTMLTAG_233__HTMLTAG_234___

<p>建立檔案 <code>public/silent-check-sso.html</code> 用於靜默 SSO 檢查：</p>

___預編碼_27___

___HTMLTAG_239__HTMLTAG_240___6。 Keycloak 用戶端設定參考___HTMLTAG_241__HTMLTAG_242___<p>請參閱 Keycloak 用戶端設定以了解應用程式類型：</p>

<table>
<thead>
___HTMLTAG_247__HTMLTAG_248___設定___HTMLTAG_249__HTMLTAG_250___SPA（React/Angular）____HTMLTAG_251__HTMLTAG_252___Node.js 後端_</th>MLTAG_252___Node.js 後端____
</thead>
<tbody>
___HTMLTAG_257__HTMLTAG_258___客戶端協定___HTMLTAG_259__HTMLTAG_260___openid-connect___HTMLTAG_261__HTMLTAG_262___openid-connect____HTMLTAG_263__HTMLTAG_262___openid-connect____HTMLTAG_263__HTMLTAG_264___
___HTMLTAG_265__HTMLTAG_266___存取類型___HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___公___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272__HTMLTAG_270__HTMLTAG_271__HTMLTAG_272__HTMLTAGML_273____HTMLTAMLTA475____MLTAG
___HTMLTAG_277__HTMLTAG_278___標準流程___HTMLTAG_279__HTMLTAG_280___開啟___HTMLTAG_281__HTMLTAG_282___開啟（如果是網路應用）___HTMLTAG_283__HTMLTAG_284___
___HTMLTAG_285__HTMLTAG_286___直接存取___HTMLTAG_287__HTMLTAG_288___關閉___HTMLTAG_289__HTMLTAG_290____關閉___HTMLTAG_291__HTMLTAG_292______
___HTMLTAG_293__HTMLTAG_294___服務帳戶___HTMLTAG_295__HTMLTAG_296___關閉___HTMLTAG_297__HTMLTAG_298___開啟（如果需要）___HTMLTAG_299__HTMLTAG_300___
___HTMLTAG_301__HTMLTAG_302___PKCE____HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___S256____HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___不適用___MLGML____41307________
___HTMLTAG_311__HTMLTAG_312___有效重定向 URI___HTMLTAG_313__HTMLTAG_314__HTMLTAG_315__URL_1___>___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318__URL_316__HTMLTAG_317__HTMLTAG_318__URL________20___4_______
___HTMLTAG_321__HTMLTAG_322___網頁來源___HTMLTAG_323__HTMLTAG_324__HTMLTAG_325__URL_3___>___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___+___MLG____ML313____]
</tbody>
</table>

___HTMLTAG_334__HTMLTAG_335___7。摘要___HTMLTAG_336__HTMLTAG_337___<table>
<thead>
___HTMLTAG_340__HTMLTAG_341___平台____HTMLTAG_342__HTMLTAG_343___函式庫___HTMLTAG_344__HTMLTAG_345_______HTMLTAG_346__HTMLTAG_347_____345_______HTMLTAG_346__HTMLTAG_347____________MLG____MLTAGMLHTG3_______________
</thead>
<tbody>
___HTMLTAG_352__HTMLTAG_353___React___HTMLTAG_354__HTMLTAG_355__HTMLTAG_356___react-oidc-context____HTMLTAG_357__H TMLTAG_358__HTMLTAG_359___OIDC標準、鉤子API、自動刷新___HTMLTAG_360__HTMLTAG_361___需要配置重定向URI正確___HTMLTAG_362__HTMLTAG_363___
___HTMLTAG_364__HTMLTAG_365___React___HTMLTAG_366__HTMLTAG_367__HTMLTAG_368____keycloak-js___HTMLTAG_369__ HTMLTAG_370__HTMLTAG_371___官方適配器，完整API___HTMLTAG_372__HTMLTAG_373___緊密耦合鑰匙斗篷___HTMLTAG_374__HTMLTAG_375___
___HTMLTAG_376__HTMLTAG_377___Angular____HTMLTAG_378__HTMLTAG_379__HTMLTAG_380___angular-auth-oidc-client___HTMLTAG_381__HTMLTAG_382__HTMLTAGular_383_____HTMLTAGng原生、守衛、攔截器___HTMLTAG_384__HTMLTAG_385___設定比反應___HTMLTAG_386__HTMLTAG_387___
___HTMLTAG_388__HTMLTAG_389___Node.js___HTMLTAG_390__HTMLTAG_391__HTMLTAG_392____jose___HTMLTAG_393__HTM LTAG_394__HTMLTAG_395___輕量級，無依賴，標準___HTMLTAG_396__HTMLTAG_397___需要實現中間件你自己___HTMLTAG_398__HTMLTAG_399___
___HTMLTAG_400__HTMLTAG_401___Node.js___HTMLTAG_402__HTMLTAG_403__HTMLTAG_404___passport-keycloak-connect___HTMLTAG_405__HTMLTAG_406__HTMLTAG_407___Passport.整合生態系統___HTMLTAG_408__HTMLTAG_409___需要會話管理___HTMLTAG_410__HTMLTAG_411___
</tbody>
</table>

<p>在下一篇文章中，我們將學習如何將Keycloak與API網關（Nginx、Kong、Traefik）和微服務架構整合。 </p>