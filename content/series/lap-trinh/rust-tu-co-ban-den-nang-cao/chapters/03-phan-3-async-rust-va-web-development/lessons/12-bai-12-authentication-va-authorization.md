---
id: 019d8b40-f304-7001-b007-rust000000304
title: 'Bài 12: Authentication & Authorization'
slug: bai-12-authentication-va-authorization
description: >-
  JWT với jsonwebtoken crate, argon2 password hashing.
  Middleware-based auth, extractors. RBAC, tower middleware.
  OAuth2 integration. Session management.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Async Rust & Web Development"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-password"><strong>1. Password Hashing với Argon2</strong></h2>

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

<h2 id="2-jwt"><strong>2. JWT Token</strong></h2>

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

<h2 id="3-middleware"><strong>3. Auth Middleware với Axum</strong></h2>

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

<h2 id="4-login"><strong>4. Login Flow</strong></h2>

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

<p>Bài tiếp theo: <strong>WebSockets & Real-time</strong>.</p>
