---
id: 019d8b40-a304-7001-b002-fastapi000304
title: 'レッスン 12: ソーシャル ログインと OAuth2 プロバイダー'
slug: bai-12-social-login-va-oauth2-providers
description: >-
  OAuth2 認証コード フロー、Google、GitHub、Facebook によるソーシャル ログイン。 Authlib
  の統合、アカウントのリンク、OpenID Connect。マルチプロバイダー認証戦略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: 認証とセキュリティ'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: 基本から高度まで'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2947" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2947)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="99" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="145" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="168" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="249" x2="1100" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="279" x2="1050" y2="349" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="987.1051177665153,127 987.1051177665153,171 949,193 910.8948822334847,171 910.8948822334847,127.00000000000001 949,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: ソーシャル ログインと OAuth2 プロバイダー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証とセキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-oauth2-flow"><strong>1. OAuth2認可コードの流れ</strong></h2>

<p>ソーシャル ログインでは、Web アプリケーションにとって最も安全なフローである OAuth2 認証コード フローが使用されます。</p>

<pre><code>User → App → Provider (Google/GitHub) → User Login → Callback → App → JWT Token

┌──────┐     ┌──────┐     ┌──────────┐
│ User │────→│  App │────→│ Provider │
│      │     │      │     │ (Google) │
│      │←────│      │←────│          │
└──────┘     └──────┘     └──────────┘
  1. Click     2. Redirect    3. Login
  "Login       to Provider    & Consent
   with
   Google"
              5. Exchange     4. Redirect
              code for        back with
              token           auth code
</code></pre>

<h2 id="2-setup"><strong>2. Authlib のセットアップ</strong></h2>

<pre><code class="language-bash">uv add authlib httpx
</code></pre>

<pre><code class="language-python"># app/config.py - thêm OAuth settings
class Settings(BaseSettings):
    # ... existing settings
    
    # Google OAuth2
    google_client_id: str = ""
    google_client_secret: str = ""
    
    # GitHub OAuth2
    github_client_id: str = ""
    github_client_secret: str = ""
    
    # OAuth callback URL
    oauth_redirect_base: str = "http://localhost:8000"
</code></pre>

<h2 id="3-oauth-config"><strong>3. OAuth2プロバイダーの構成</strong></h2>

<pre><code class="language-python"># app/core/oauth.py
from authlib.integrations.starlette_client import OAuth

from app.config import settings

oauth = OAuth()

# Google
oauth.register(
    name="google",
    client_id=settings.google_client_id,
    client_secret=settings.google_client_secret,
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)

# GitHub
oauth.register(
    name="github",
    client_id=settings.github_client_id,
    client_secret=settings.github_client_secret,
    access_token_url="https://github.com/login/oauth/access_token",
    authorize_url="https://github.com/login/oauth/authorize",
    api_base_url="https://api.github.com/",
    client_kwargs={"scope": "user:email"},
)
</code></pre>

<h2 id="4-social-auth-model"><strong>4. ソーシャルアカウントモデル</strong></h2>

<pre><code class="language-python"># app/models/social_account.py
from datetime import datetime

from sqlalchemy import String, Integer, ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class SocialAccount(Base):
    __tablename__ = "social_accounts"
    __table_args__ = (
        UniqueConstraint("provider", "provider_user_id", name="uq_social_provider_user"),
    )

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    provider: Mapped[str] = mapped_column(String(50), nullable=False)  # "google", "github"
    provider_user_id: Mapped[str] = mapped_column(String(255), nullable=False)
    provider_email: Mapped[str | None] = mapped_column(String(255))
    access_token: Mapped[str | None] = mapped_column(String(500))
    refresh_token: Mapped[str | None] = mapped_column(String(500))
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

    # Relationship
    user: Mapped["User"] = relationship(back_populates="social_accounts")
</code></pre>

<h2 id="5-oauth-routes"><strong>5. OAuth2 ルート</strong></h2>

<pre><code class="language-python"># app/api/v1/oauth.py
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import RedirectResponse

from app.config import settings
from app.core.database import get_db
from app.core.oauth import oauth
from app.core.security import create_access_token, create_refresh_token, hash_password
from app.models.social_account import SocialAccount
from app.models.user import User
from app.schemas.auth import TokenResponse

router = APIRouter(prefix="/oauth", tags=["OAuth2"])


# ========== Google ==========

@router.get("/google/login")
async def google_login(request: Request):
    """Redirect đến Google login page."""
    redirect_uri = f"{settings.oauth_redirect_base}/api/v1/oauth/google/callback"
    return await oauth.google.authorize_redirect(request, redirect_uri)


@router.get("/google/callback")
async def google_callback(
    request: Request,
    session: AsyncSession = Depends(get_db),
):
    """Callback sau khi Google authenticate."""
    try:
        token = await oauth.google.authorize_access_token(request)
    except Exception:
        raise HTTPException(status_code=400, detail="OAuth authentication failed")

    # Lấy user info từ Google
    user_info = token.get("userinfo")
    if not user_info:
        raise HTTPException(status_code=400, detail="Failed to get user info")

    google_id = user_info["sub"]
    email = user_info["email"]
    name = user_info.get("name", email.split("@")[0])

    # Tìm hoặc tạo user
    user = await find_or_create_social_user(
        session=session,
        provider="google",
        provider_user_id=google_id,
        email=email,
        name=name,
        access_token=token.get("access_token"),
    )

    # Generate JWT tokens
    access_token = create_access_token(data={"sub": str(user.id)})
    refresh_token = create_refresh_token(data={"sub": str(user.id)})

    # Redirect to frontend with tokens
    frontend_url = f"{settings.cors_origins[0]}/auth/callback"
    return RedirectResponse(
        url=f"{frontend_url}?access_token={access_token}&refresh_token={refresh_token}"
    )


# ========== GitHub ==========

@router.get("/github/login")
async def github_login(request: Request):
    """Redirect đến GitHub login page."""
    redirect_uri = f"{settings.oauth_redirect_base}/api/v1/oauth/github/callback"
    return await oauth.github.authorize_redirect(request, redirect_uri)


@router.get("/github/callback")
async def github_callback(
    request: Request,
    session: AsyncSession = Depends(get_db),
):
    """Callback sau khi GitHub authenticate."""
    try:
        token = await oauth.github.authorize_access_token(request)
    except Exception:
        raise HTTPException(status_code=400, detail="OAuth authentication failed")

    # Lấy user info từ GitHub API
    resp = await oauth.github.get("user", token=token)
    user_info = resp.json()

    # Lấy email (GitHub có thể không trả email public)
    if not user_info.get("email"):
        email_resp = await oauth.github.get("user/emails", token=token)
        emails = email_resp.json()
        primary_email = next(
            (e["email"] for e in emails if e["primary"] and e["verified"]),
            None,
        )
        user_info["email"] = primary_email

    if not user_info.get("email"):
        raise HTTPException(status_code=400, detail="Email not available from GitHub")

    user = await find_or_create_social_user(
        session=session,
        provider="github",
        provider_user_id=str(user_info["id"]),
        email=user_info["email"],
        name=user_info.get("name") or user_info["login"],
        access_token=token.get("access_token"),
    )

    access_token = create_access_token(data={"sub": str(user.id)})
    refresh_token = create_refresh_token(data={"sub": str(user.id)})

    frontend_url = f"{settings.cors_origins[0]}/auth/callback"
    return RedirectResponse(
        url=f"{frontend_url}?access_token={access_token}&refresh_token={refresh_token}"
    )


# ========== Helper ==========

async def find_or_create_social_user(
    session: AsyncSession,
    provider: str,
    provider_user_id: str,
    email: str,
    name: str,
    access_token: str | None = None,
) -> User:
    """Tìm user từ social account hoặc tạo mới."""
    import secrets

    # 1. Tìm social account đã liên kết
    result = await session.execute(
        select(SocialAccount)
        .where(
            SocialAccount.provider == provider,
            SocialAccount.provider_user_id == provider_user_id,
        )
    )
    social = result.scalar_one_or_none()

    if social:
        # Cập nhật access token
        social.access_token = access_token
        await session.flush()

        # Lấy user
        result = await session.execute(
            select(User).where(User.id == social.user_id)
        )
        return result.scalar_one()

    # 2. Tìm user bằng email
    result = await session.execute(
        select(User).where(User.email == email)
    )
    user = result.scalar_one_or_none()

    if not user:
        # 3. Tạo user mới
        user = User(
            name=name,
            email=email,
            hashed_password=hash_password(secrets.token_urlsafe(32)),
            is_active=True,
        )
        session.add(user)
        await session.flush()

    # 4. Tạo social account link
    social = SocialAccount(
        user_id=user.id,
        provider=provider,
        provider_user_id=provider_user_id,
        provider_email=email,
        access_token=access_token,
    )
    session.add(social)
    await session.flush()

    return user
</code></pre>

<h2 id="6-starlette-session"><strong>6. セッションミドルウェア（OAuth状態用）</strong></h2>

<pre><code class="language-python"># app/main.py
from starlette.middleware.sessions import SessionMiddleware

# OAuth cần session để lưu state
app.add_middleware(
    SessionMiddleware,
    secret_key=settings.secret_key.get_secret_value(),
    same_site="lax",
    https_only=settings.environment == "production",
)
</code></pre>

<h2 id="tong-ket"><strong>概要</strong></h2>

<p>この記事では、ソーシャル ログインが実装されています。</p>

<ul>
<li><strong>OAuth2認可コードフロー</strong>: フローは Web アプリにとって安全です</li>
<li><strong>Googleログイン</strong>: OpenID Connect with Google</li>
<li><strong>GitHub ログイン</strong>: GitHub API を使用した OAuth2</li>
<li><strong>アカウントリンク</strong>: ソーシャルアカウントを既存のユーザーとリンクします</li>
<li><strong>自動登録</strong>：初回ソーシャルログイン時に自動的にアカウントを作成します</li>
</ul>

<p>次の記事では、ミドルウェア、イベント、およびライフスパンの管理について説明します。</p>
