---
id: 019d8b40-a302-7001-b002-fastapi000302
title: 'Bài 10: Authorization - RBAC & Permissions'
slug: bai-10-authorization-rbac-va-permissions
description: >-
  Role-Based Access Control, Permission-based authorization trong FastAPI.
  Custom dependencies cho authorization, decorator patterns.
  Multi-tenant authorization strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2435" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2435)"/>

  <!-- Decorations -->
  <g>
    <circle cx="766" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1098" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.2390923627308,146.5 1005.2390923627308,189.5 968,211 930.7609076372692,189.5 930.7609076372692,146.5 968,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Lập trình — Bài 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Authorization - RBAC &amp; Permissions</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Authentication &amp; Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-rbac-overview"><strong>1. Role-Based Access Control (RBAC)</strong></h2>

<p>RBAC là mô hình phân quyền phổ biến nhất, trong đó permissions được gán cho roles, và users được gán roles. FastAPI không có RBAC built-in nhưng triển khai rất đơn giản với dependency injection.</p>

<h2 id="2-role-models"><strong>2. Database Models cho RBAC</strong></h2>

<pre><code class="language-python"># app/models/role.py
from sqlalchemy import String, Integer, ForeignKey, Table, Column
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base

# Association tables
user_roles = Table(
    "user_roles",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True),
    Column("role_id", Integer, ForeignKey("roles.id", ondelete="CASCADE"), primary_key=True),
)

role_permissions = Table(
    "role_permissions",
    Base.metadata,
    Column("role_id", Integer, ForeignKey("roles.id", ondelete="CASCADE"), primary_key=True),
    Column("permission_id", Integer, ForeignKey("permissions.id", ondelete="CASCADE"), primary_key=True),
)


class Role(Base):
    __tablename__ = "roles"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    description: Mapped[str | None] = mapped_column(String(200))

    # Relationships
    users: Mapped[list["User"]] = relationship(
        secondary=user_roles, back_populates="roles"
    )
    permissions: Mapped[list["Permission"]] = relationship(
        secondary=role_permissions, back_populates="roles", lazy="selectin"
    )


class Permission(Base):
    __tablename__ = "permissions"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    description: Mapped[str | None] = mapped_column(String(200))
    resource: Mapped[str] = mapped_column(String(50))  # "users", "posts", etc.
    action: Mapped[str] = mapped_column(String(50))     # "create", "read", "update", "delete"

    roles: Mapped[list["Role"]] = relationship(
        secondary=role_permissions, back_populates="permissions"
    )
</code></pre>

<h2 id="3-rbac-dependencies"><strong>3. RBAC Dependencies</strong></h2>

<pre><code class="language-python"># app/core/permissions.py
from collections.abc import Callable
from functools import wraps

from fastapi import Depends, HTTPException, status

from app.core.auth import get_current_user
from app.models.user import User


class RoleChecker:
    """Dependency: kiểm tra user có role cần thiết không."""

    def __init__(self, allowed_roles: list[str]):
        self.allowed_roles = allowed_roles

    async def __call__(self, current_user: User = Depends(get_current_user)) -> User:
        user_roles = [role.name for role in current_user.roles]
        if not any(role in self.allowed_roles for role in user_roles):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Requires one of roles: {', '.join(self.allowed_roles)}",
            )
        return current_user


class PermissionChecker:
    """Dependency: kiểm tra user có permission cụ thể không."""

    def __init__(self, required_permissions: list[str]):
        self.required_permissions = required_permissions

    async def __call__(self, current_user: User = Depends(get_current_user)) -> User:
        user_permissions = set()
        for role in current_user.roles:
            for perm in role.permissions:
                user_permissions.add(perm.name)

        missing = set(self.required_permissions) - user_permissions
        if missing:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Missing permissions: {', '.join(missing)}",
            )
        return current_user


# Pre-built role checkers
require_admin = RoleChecker(["admin"])
require_moderator = RoleChecker(["admin", "moderator"])
require_user = RoleChecker(["admin", "moderator", "user"])

# Pre-built permission checkers
can_create_post = PermissionChecker(["posts:create"])
can_delete_post = PermissionChecker(["posts:delete"])
can_manage_users = PermissionChecker(["users:create", "users:update", "users:delete"])
</code></pre>

<h2 id="4-su-dung-rbac"><strong>4. Sử dụng RBAC trong Routes</strong></h2>

<pre><code class="language-python"># app/api/v1/admin.py
from fastapi import APIRouter, Depends

from app.core.permissions import require_admin, require_moderator, PermissionChecker
from app.models.user import User

router = APIRouter(prefix="/admin", tags=["Admin"])


# Chỉ admin mới truy cập được
@router.get("/dashboard")
async def admin_dashboard(
    current_user: User = Depends(require_admin),
):
    return {"message": f"Welcome admin {current_user.name}"}


# Admin hoặc moderator
@router.get("/reports")
async def view_reports(
    current_user: User = Depends(require_moderator),
):
    return {"message": "Reports data"}


# Permission-based
@router.delete("/users/{user_id}")
async def delete_user(
    user_id: int,
    current_user: User = Depends(PermissionChecker(["users:delete"])),
):
    return {"message": f"User {user_id} deleted by {current_user.name}"}


# Inline permission check
@router.post("/posts/{post_id}/publish")
async def publish_post(
    post_id: int,
    current_user: User = Depends(PermissionChecker(["posts:update", "posts:publish"])),
):
    return {"message": f"Post {post_id} published"}
</code></pre>

<h2 id="5-resource-ownership"><strong>5. Resource Ownership Check</strong></h2>

<pre><code class="language-python"># app/core/ownership.py
from fastapi import Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.auth import get_current_user
from app.core.database import get_db
from app.models.user import User


class OwnerOrAdmin:
    """
    Dependency: cho phép truy cập nếu:
    - User là chủ sở hữu resource, HOẶC
    - User có role admin
    """

    def __init__(self, model, id_param: str = "id"):
        self.model = model
        self.id_param = id_param

    async def __call__(
        self,
        current_user: User = Depends(get_current_user),
        session: AsyncSession = Depends(get_db),
        **kwargs,
    ) -> User:
        return current_user


# Sử dụng trong routes
from app.models.post import Post

@router.put("/posts/{post_id}")
async def update_post(
    post_id: int,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db),
):
    """Chỉ author hoặc admin mới sửa được post."""
    from sqlalchemy import select

    result = await session.execute(
        select(Post).where(Post.id == post_id)
    )
    post = result.scalar_one_or_none()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    # Check ownership hoặc admin role
    is_owner = post.author_id == current_user.id
    is_admin = any(role.name == "admin" for role in current_user.roles)

    if not is_owner and not is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You can only edit your own posts",
        )

    return {"message": "Post updated"}
</code></pre>

<h2 id="6-seed-permissions"><strong>6. Seed Roles & Permissions</strong></h2>

<pre><code class="language-python"># scripts/seed_permissions.py
import asyncio

from app.core.database import async_session, engine, Base
from app.models.role import Role, Permission


PERMISSIONS = [
    # Users
    ("users:create", "Create users", "users", "create"),
    ("users:read", "Read users", "users", "read"),
    ("users:update", "Update users", "users", "update"),
    ("users:delete", "Delete users", "users", "delete"),
    # Posts
    ("posts:create", "Create posts", "posts", "create"),
    ("posts:read", "Read posts", "posts", "read"),
    ("posts:update", "Update posts", "posts", "update"),
    ("posts:delete", "Delete posts", "posts", "delete"),
    ("posts:publish", "Publish posts", "posts", "publish"),
]

ROLES = {
    "admin": ["users:create", "users:read", "users:update", "users:delete",
              "posts:create", "posts:read", "posts:update", "posts:delete", "posts:publish"],
    "moderator": ["users:read", "posts:read", "posts:update", "posts:delete", "posts:publish"],
    "user": ["users:read", "posts:create", "posts:read"],
}


async def seed():
    async with async_session() as session:
        # Create permissions
        perm_map = {}
        for name, desc, resource, action in PERMISSIONS:
            perm = Permission(name=name, description=desc, resource=resource, action=action)
            session.add(perm)
            perm_map[name] = perm
        await session.flush()

        # Create roles with permissions
        for role_name, perm_names in ROLES.items():
            role = Role(name=role_name, description=f"{role_name.title()} role")
            role.permissions = [perm_map[p] for p in perm_names]
            session.add(role)

        await session.commit()
        print("Roles and permissions seeded!")


if __name__ == "__main__":
    asyncio.run(seed())
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này đã xây dựng hệ thống authorization hoàn chỉnh:</p>

<ul>
<li><strong>RBAC Models</strong>: Users → Roles → Permissions (many-to-many)</li>
<li><strong>RoleChecker</strong>: Dependency kiểm tra roles</li>
<li><strong>PermissionChecker</strong>: Dependency kiểm tra permissions</li>
<li><strong>Resource Ownership</strong>: Chỉ owner hoặc admin mới sửa/xóa</li>
<li><strong>Seeding</strong>: Script seed roles và permissions</li>
</ul>

<p>Bài tiếp theo sẽ tập trung vào Security Best Practices.</p>
