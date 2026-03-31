---
id: 019d8b40-a301-7001-b002-fastapi000301
title: 'Bài 9: Authentication với OAuth2 và JWT'
slug: bai-9-authentication-voi-oauth2-va-jwt
description: >-
  OAuth2 password flow trong FastAPI, JWT access token và refresh token.
  Password hashing với Passlib/Bcrypt. Token rotation, blacklisting.
  Security schemes trong OpenAPI.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-auth-overview"><strong>1. Authentication trong FastAPI</strong></h2>

<p>FastAPI hỗ trợ nhiều authentication schemes theo chuẩn OpenAPI/OAuth2. Trong bài này, chúng ta sẽ triển khai JWT-based authentication - phương pháp phổ biến nhất cho REST APIs.</p>

<h3 id="cai-dat"><strong>Cài đặt dependencies</strong></h3>

<pre><code class="language-bash">uv add python-jose[cryptography] passlib[bcrypt] python-multipart
</code></pre>

<h2 id="2-password-hashing"><strong>2. Password Hashing</strong></h2>

<pre><code class="language-python"># app/core/security.py
from datetime import datetime, timedelta, timezone

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.config import settings

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Hash password với bcrypt."""
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify password against hash."""
    return pwd_context.verify(plain_password, hashed_password)


# JWT Token
def create_access_token(
    data: dict,
    expires_delta: timedelta | None = None,
) -> str:
    """Tạo JWT access token."""
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=settings.jwt_expiration_minutes)
    )
    to_encode.update({"exp": expire, "type": "access"})
    return jwt.encode(
        to_encode,
        settings.secret_key.get_secret_value(),
        algorithm=settings.jwt_algorithm,
    )


def create_refresh_token(
    data: dict,
    expires_delta: timedelta | None = None,
) -> str:
    """Tạo JWT refresh token (thời hạn dài hơn)."""
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(days=7)
    )
    to_encode.update({"exp": expire, "type": "refresh"})
    return jwt.encode(
        to_encode,
        settings.secret_key.get_secret_value(),
        algorithm=settings.jwt_algorithm,
    )


def decode_token(token: str) -> dict | None:
    """Decode và verify JWT token."""
    try:
        payload = jwt.decode(
            token,
            settings.secret_key.get_secret_value(),
            algorithms=[settings.jwt_algorithm],
        )
        return payload
    except JWTError:
        return None
</code></pre>

<h2 id="3-auth-schemas"><strong>3. Auth Schemas</strong></h2>

<pre><code class="language-python"># app/schemas/auth.py
from pydantic import BaseModel, Field


class LoginRequest(BaseModel):
    email: str = Field(..., examples=["user@example.com"])
    password: str = Field(..., min_length=8, examples=["password123"])


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int  # seconds


class RefreshTokenRequest(BaseModel):
    refresh_token: str


class TokenPayload(BaseModel):
    sub: str  # user id
    exp: int
    type: str  # "access" or "refresh"
</code></pre>

<h2 id="4-auth-dependencies"><strong>4. Auth Dependencies</strong></h2>

<pre><code class="language-python"># app/core/auth.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.security import decode_token
from app.models.user import User
from app.repositories.user_repo import UserRepository

# OAuth2 scheme - Swagger UI sẽ hiện nút "Authorize"
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    session: AsyncSession = Depends(get_db),
) -> User:
    """Dependency: lấy current user từ JWT token."""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    # Decode token
    payload = decode_token(token)
    if payload is None:
        raise credentials_exception

    # Check token type
    if payload.get("type") != "access":
        raise credentials_exception

    # Get user
    user_id = payload.get("sub")
    if user_id is None:
        raise credentials_exception

    repo = UserRepository(session)
    user = await repo.get(int(user_id))
    if user is None:
        raise credentials_exception

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is deactivated",
        )

    return user


async def get_current_active_user(
    current_user: User = Depends(get_current_user),
) -> User:
    """Dependency: đảm bảo user đang active."""
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user",
        )
    return current_user


# Optional auth (cho endpoints có thể truy cập cả khi chưa login)
async def get_optional_user(
    token: str | None = Depends(OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login", auto_error=False)),
    session: AsyncSession = Depends(get_db),
) -> User | None:
    """Dependency: optional current user."""
    if token is None:
        return None
    try:
        return await get_current_user(token, session)
    except HTTPException:
        return None
</code></pre>

<h2 id="5-auth-routes"><strong>5. Auth Routes</strong></h2>

<pre><code class="language-python"># app/api/v1/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.core.auth import get_current_user
from app.core.database import get_db
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)
from app.models.user import User
from app.repositories.user_repo import UserRepository
from app.schemas.auth import LoginRequest, RefreshTokenRequest, TokenResponse
from app.schemas.user import UserCreate, UserResponse

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(
    data: UserCreate,
    session: AsyncSession = Depends(get_db),
):
    """Đăng ký tài khoản mới."""
    repo = UserRepository(session)

    # Check email exists
    if await repo.get_by_email(data.email):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered",
        )

    user = User(
        name=data.name,
        email=data.email,
        hashed_password=hash_password(data.password),
    )
    user = await repo.create(user)
    return user


@router.post("/login", response_model=TokenResponse)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: AsyncSession = Depends(get_db),
):
    """Đăng nhập và nhận JWT tokens."""
    repo = UserRepository(session)

    # Authenticate user
    user = await repo.get_by_email(form_data.username)  # username = email
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account is deactivated",
        )

    # Generate tokens
    access_token = create_access_token(data={"sub": str(user.id)})
    refresh_token = create_refresh_token(data={"sub": str(user.id)})

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        expires_in=settings.jwt_expiration_minutes * 60,
    )


@router.post("/refresh", response_model=TokenResponse)
async def refresh_token(
    data: RefreshTokenRequest,
    session: AsyncSession = Depends(get_db),
):
    """Làm mới access token bằng refresh token."""
    payload = decode_token(data.refresh_token)
    if payload is None or payload.get("type") != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token",
        )

    user_id = payload.get("sub")
    repo = UserRepository(session)
    user = await repo.get(int(user_id))
    if not user or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found or inactive",
        )

    # Generate new tokens (token rotation)
    access_token = create_access_token(data={"sub": str(user.id)})
    refresh_token = create_refresh_token(data={"sub": str(user.id)})

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        expires_in=settings.jwt_expiration_minutes * 60,
    )


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)):
    """Lấy thông tin user hiện tại."""
    return current_user


@router.post("/logout")
async def logout(current_user: User = Depends(get_current_user)):
    """Đăng xuất (client-side token removal)."""
    # Với JWT stateless, logout thường xử lý ở client
    # Với token blacklist (nâng cao), thêm token vào blacklist
    return {"message": "Successfully logged out"}
</code></pre>

<h2 id="6-protected-routes"><strong>6. Sử dụng Auth trong Routes</strong></h2>

<pre><code class="language-python"># app/api/v1/posts.py
from fastapi import APIRouter, Depends

from app.core.auth import get_current_user, get_optional_user
from app.models.user import User

router = APIRouter(prefix="/posts", tags=["Posts"])


# Route yêu cầu authentication
@router.post("/")
async def create_post(
    current_user: User = Depends(get_current_user),
):
    """Chỉ user đã login mới tạo được post."""
    return {"message": f"Post created by {current_user.name}"}


# Route public nhưng có thêm thông tin nếu đã login
@router.get("/")
async def list_posts(
    current_user: User | None = Depends(get_optional_user),
):
    """Ai cũng xem được, nhưng user đã login thấy thêm thông tin."""
    posts = [{"id": 1, "title": "Hello World"}]
    if current_user:
        return {"posts": posts, "can_create": True}
    return {"posts": posts, "can_create": False}
</code></pre>

<h2 id="7-token-blacklist"><strong>7. Token Blacklist (Nâng cao)</strong></h2>

<pre><code class="language-python"># app/core/token_blacklist.py
import redis.asyncio as redis

from app.config import settings


class TokenBlacklist:
    """Redis-based token blacklist cho logout."""

    def __init__(self):
        self.redis = redis.from_url(settings.redis_url)

    async def blacklist(self, token: str, expires_in: int) -> None:
        """Thêm token vào blacklist."""
        await self.redis.setex(f"bl:{token}", expires_in, "1")

    async def is_blacklisted(self, token: str) -> bool:
        """Kiểm tra token có bị blacklist không."""
        result = await self.redis.get(f"bl:{token}")
        return result is not None

    async def close(self) -> None:
        await self.redis.close()


token_blacklist = TokenBlacklist()
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này đã triển khai authentication hoàn chỉnh:</p>

<ul>
<li><strong>Password Hashing</strong>: Bcrypt thông qua Passlib</li>
<li><strong>JWT Tokens</strong>: Access token + Refresh token</li>
<li><strong>OAuth2</strong>: Password flow theo chuẩn OpenAPI</li>
<li><strong>Auth Dependencies</strong>: get_current_user, get_optional_user</li>
<li><strong>Token Rotation</strong>: Refresh token mechanism</li>
<li><strong>Token Blacklist</strong>: Redis-based logout</li>
</ul>

<p>Bài tiếp theo sẽ triển khai Authorization với RBAC.</p>
