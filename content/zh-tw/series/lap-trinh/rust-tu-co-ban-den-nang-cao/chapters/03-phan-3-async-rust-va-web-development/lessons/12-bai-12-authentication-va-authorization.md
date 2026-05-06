---
id: 019d8b40-f304-7001-b007-rust000000304
title: 第 12 課：身分驗證與授權
slug: bai-12-authentication-va-authorization
description: JWT 與 jsonwebtoken 箱，argon2 密碼哈希。基於中間件的身份驗證、提取器。 RBAC，塔式中介軟體。 OAuth2 整合。會話管理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 第 3 部分：非同步 Rust 和 Web 開發
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-548" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-548)"/>

  <!-- Decorations -->
  <g>
    <circle cx="987" cy="111" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="761" cy="165" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="192" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="101" x2="1100" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="131" x2="1050" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.1769145362398,183 1032.1769145362398,219 1001,237 969.8230854637602,219 969.8230854637602,183 1001,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：身分驗證與授權</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：非同步 Rust 和 Web 開發</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-password"><strong>1. 使用 Argon2 進行密碼雜湊處理</strong></h2>

<pre><code class="language-rust">use argon2::{Argon2, PasswordHash, PasswordHasher, PasswordVerifier};
use argon2::password_hash::rand_core::OsRng;
use argon2::password_hash::SaltString;

fn hash_password(password: &str) -> Result&lt;String, argon2::password_hash::Error&gt; {
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let hash = argon2.hash_password(password.as_bytes(), &salt)?;
    Ok(hash.to_string())
}

fn verify_password(password: &str, hash: &str) -> bool {
    let parsed_hash = PasswordHash::new(hash).unwrap();
    Argon2::default().verify_password(password.as_bytes(), &parsed_hash).is_ok()
}
</code></pre>

<h2 id="2-jwt"><strong>2.智威湯遜代幣</strong></h2>

<pre><code class="language-rust">use jsonwebtoken::{encode, decode, Header, Validation, EncodingKey, DecodingKey};
use serde::{Deserialize, Serialize};
use chrono::{Utc, Duration};

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: String,       // user id
    role: String,
    exp: usize,        // expiration
    iat: usize,        // issued at
}

struct JwtService {
    secret: String,
}

impl JwtService {
    fn create_token(&self, user_id: &str, role: &str) -> Result&lt;String, jsonwebtoken::errors::Error&gt; {
        let claims = Claims {
            sub: user_id.to_string(),
            role: role.to_string(),
            exp: (Utc::now() + Duration::hours(24)).timestamp() as usize,
            iat: Utc::now().timestamp() as usize,
        };
        encode(&Header::default(), &claims, &EncodingKey::from_secret(self.secret.as_bytes()))
    }

    fn verify_token(&self, token: &str) -> Result&lt;Claims, jsonwebtoken::errors::Error&gt; {
        let data = decode::&lt;Claims&gt;(
            token,
            &DecodingKey::from_secret(self.secret.as_bytes()),
            &Validation::default(),
        )?;
        Ok(data.claims)
    }
}
</code></pre>

<h2 id="3-middleware"><strong>3. 使用 Axum 的身份驗證中介軟體</strong></h2>

<pre><code class="language-rust">use axum::{extract::FromRequestParts, http::request::Parts};

struct AuthUser {
    user_id: String,
    role: String,
}

#[axum::async_trait]
impl&lt;S&gt; FromRequestParts&lt;S&gt; for AuthUser
where
    S: Send + Sync,
{
    type Rejection = AppError;

    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result&lt;Self, Self::Rejection&gt; {
        let auth_header = parts.headers
            .get("Authorization")
            .and_then(|v| v.to_str().ok())
            .ok_or(AppError::Unauthorized)?;

        let token = auth_header.strip_prefix("Bearer ")
            .ok_or(AppError::Unauthorized)?;

        let claims = jwt_service.verify_token(token)
            .map_err(|_| AppError::Unauthorized)?;

        Ok(AuthUser {
            user_id: claims.sub,
            role: claims.role,
        })
    }
}

// Handler — tự động extract auth
async fn get_profile(user: AuthUser) -> Json&lt;UserProfile&gt; {
    // user.user_id đã được verify
    Json(UserProfile { id: user.user_id })
}

// Role-based guard
async fn admin_only(user: AuthUser) -> Result&lt;Json&lt;String&gt;, AppError&gt; {
    if user.role != "admin" {
        return Err(AppError::Forbidden);
    }
    Ok(Json("Admin content".into()))
}
</code></pre>

<h2 id="4-login"><strong>4. 登入流程</strong></h2>

<pre><code class="language-rust">#[derive(Deserialize)]
struct LoginRequest {
    email: String,
    password: String,
}

#[derive(Serialize)]
struct LoginResponse {
    access_token: String,
    token_type: String,
    expires_in: u64,
}

async fn login(
    State(state): State&lt;AppState&gt;,
    Json(input): Json&lt;LoginRequest&gt;,
) -> Result&lt;Json&lt;LoginResponse&gt;, AppError&gt; {
    let user = state.user_repo.find_by_email(&input.email).await?
        .ok_or(AppError::Unauthorized)?;

    if !verify_password(&input.password, &user.password_hash) {
        return Err(AppError::Unauthorized);
    }

    let token = state.jwt.create_token(&user.id.to_string(), &user.role)?;
    Ok(Json(LoginResponse {
        access_token: token,
        token_type: "Bearer".into(),
        expires_in: 86400,
    }))
}
</code></pre>

<p>下一篇： <strong>WebSocket 和即時</strong>。</p>
