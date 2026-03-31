---
id: 019d8b40-a203-7001-b002-fastapi000203
title: 'Bài 7: Alembic Migrations & Database Seeding'
slug: bai-7-alembic-migrations-va-database-seeding
description: >-
  Cấu hình Alembic cho async SQLAlchemy, auto-generate migrations,
  migration strategies. Database seeding, bulk operations, raw SQL.
  Multi-database và schema versioning.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Pydantic, Database & ORM"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-alembic-setup"><strong>1. Cài đặt và Cấu hình Alembic</strong></h2>

<h3 id="cai-dat"><strong>Cài đặt</strong></h3>

<pre><code class="language-bash"># Cài đặt Alembic
uv add alembic

# Khởi tạo Alembic (async template)
alembic init -t async alembic
</code></pre>

<p>Cấu trúc thư mục sau khi init:</p>

<pre><code>project/
├── alembic/
│   ├── env.py              # Alembic environment config
│   ├── script.py.mako      # Migration template
│   └── versions/           # Migration files
│       └── .gitkeep
├── alembic.ini             # Alembic configuration
└── app/
    └── ...
</code></pre>

<h3 id="config-alembic-ini"><strong>Cấu hình alembic.ini</strong></h3>

<pre><code class="language-ini"># alembic.ini
[alembic]
script_location = alembic
# Để trống, sẽ set trong env.py
sqlalchemy.url =

[loggers]
keys = root,sqlalchemy,alembic

[handlers]
keys = console

[formatters]
keys = generic

[logger_root]
level = WARNING
handlers = console

[logger_sqlalchemy]
level = WARNING
handlers =
qualname = sqlalchemy.engine

[logger_alembic]
level = INFO
handlers =
qualname = alembic

[handler_console]
class = StreamHandler
args = (sys.stderr,)
level = NOTSET
formatter = generic

[formatter_generic]
format = %(levelname)-5.5s [%(name)s] %(message)s
datefmt = %H:%M:%S
</code></pre>

<h3 id="env-py"><strong>Cấu hình env.py cho Async SQLAlchemy</strong></h3>

<pre><code class="language-python"># alembic/env.py
import asyncio
from logging.config import fileConfig

from alembic import context
from sqlalchemy import pool
from sqlalchemy.ext.asyncio import async_engine_from_config

from app.config import settings
from app.core.database import Base

# Import tất cả models để Alembic detect được
from app.models.user import User  # noqa: F401
from app.models.post import Post, Comment  # noqa: F401

config = context.config

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Set database URL từ settings
config.set_main_option("sqlalchemy.url", settings.database_url)

target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()


def do_run_migrations(connection):
    context.configure(
        connection=connection,
        target_metadata=target_metadata,
        compare_type=True,       # Detect column type changes
        compare_server_default=True,  # Detect default value changes
    )
    with context.begin_transaction():
        context.run_migrations()


async def run_async_migrations() -> None:
    """Run migrations in 'online' mode with async engine."""
    connectable = async_engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    async with connectable.connect() as connection:
        await connection.run_sync(do_run_migrations)
    await connectable.dispose()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    asyncio.run(run_async_migrations())


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
</code></pre>

<h2 id="2-tao-migrations"><strong>2. Tạo và Chạy Migrations</strong></h2>

<pre><code class="language-bash"># Auto-generate migration từ model changes
alembic revision --autogenerate -m "create users table"

# Chạy tất cả migrations
alembic upgrade head

# Chạy migration cụ thể
alembic upgrade +1          # Upgrade 1 version
alembic upgrade abc123      # Upgrade đến revision cụ thể

# Rollback
alembic downgrade -1        # Rollback 1 version
alembic downgrade base      # Rollback tất cả

# Xem migration history
alembic history --verbose

# Xem current revision
alembic current

# Xem SQL sẽ được chạy (không thực thi)
alembic upgrade head --sql
</code></pre>

<h3 id="migration-file"><strong>Migration file mẫu</strong></h3>

<pre><code class="language-python"># alembic/versions/001_create_users_table.py
"""create users table

Revision ID: abc123def456
Revises:
Create Date: 2026-03-31 12:00:00.000000
"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "abc123def456"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("name", sa.String(length=100), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("bio", sa.Text(), nullable=True),
        sa.Column("is_active", sa.Boolean(), default=True),
        sa.Column("created_at", sa.DateTime(), nullable=False),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("email"),
    )
    op.create_index("ix_users_email", "users", ["email"])


def downgrade() -> None:
    op.drop_index("ix_users_email", table_name="users")
    op.drop_table("users")
</code></pre>

<h2 id="3-manual-migrations"><strong>3. Manual Migrations</strong></h2>

<pre><code class="language-python"># Tạo migration trống cho custom changes
# alembic revision -m "add full_text_search index"

"""add full_text_search index

Revision ID: def789ghi012
"""
from alembic import op
import sqlalchemy as sa

revision: str = "def789ghi012"
down_revision: str = "abc123def456"


def upgrade() -> None:
    # Thêm column
    op.add_column("users", sa.Column("phone", sa.String(20), nullable=True))

    # Thêm index
    op.create_index("ix_users_name", "users", ["name"])

    # Raw SQL (PostgreSQL full-text search)
    op.execute("""
        ALTER TABLE posts
        ADD COLUMN search_vector tsvector
        GENERATED ALWAYS AS (
            setweight(to_tsvector('vietnamese', coalesce(title, '')), 'A') ||
            setweight(to_tsvector('vietnamese', coalesce(content, '')), 'B')
        ) STORED
    """)
    op.execute("""
        CREATE INDEX ix_posts_search ON posts USING gin(search_vector)
    """)


def downgrade() -> None:
    op.execute("DROP INDEX IF EXISTS ix_posts_search")
    op.execute("ALTER TABLE posts DROP COLUMN IF EXISTS search_vector")
    op.drop_index("ix_users_name", table_name="users")
    op.drop_column("users", "phone")
</code></pre>

<h2 id="4-data-migrations"><strong>4. Data Migrations</strong></h2>

<pre><code class="language-python">"""seed default roles

Revision ID: ghi345jkl678
"""
from alembic import op
import sqlalchemy as sa
from datetime import datetime

revision: str = "ghi345jkl678"
down_revision: str = "def789ghi012"


def upgrade() -> None:
    # Data migration: insert default roles
    roles_table = sa.table(
        "roles",
        sa.column("id", sa.Integer),
        sa.column("name", sa.String),
        sa.column("description", sa.String),
        sa.column("created_at", sa.DateTime),
    )
    op.bulk_insert(roles_table, [
        {"id": 1, "name": "admin", "description": "Administrator", "created_at": datetime.utcnow()},
        {"id": 2, "name": "user", "description": "Regular User", "created_at": datetime.utcnow()},
        {"id": 3, "name": "moderator", "description": "Moderator", "created_at": datetime.utcnow()},
    ])


def downgrade() -> None:
    op.execute("DELETE FROM roles WHERE name IN ('admin', 'user', 'moderator')")
</code></pre>

<h2 id="5-database-seeding"><strong>5. Database Seeding</strong></h2>

<pre><code class="language-python"># scripts/seed.py
import asyncio

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import async_session, engine, Base
from app.models.user import User, Role


async def seed_roles(session: AsyncSession) -> None:
    """Seed default roles."""
    roles = [
        Role(name="admin", description="Administrator"),
        Role(name="user", description="Regular User"),
        Role(name="moderator", description="Content Moderator"),
    ]
    session.add_all(roles)
    await session.flush()
    print(f"Seeded {len(roles)} roles")


async def seed_users(session: AsyncSession) -> None:
    """Seed test users."""
    from app.core.security import hash_password

    users = [
        User(
            name="Admin User",
            email="admin@example.com",
            hashed_password=hash_password("admin123"),
            is_active=True,
        ),
        User(
            name="Test User",
            email="user@example.com",
            hashed_password=hash_password("user123"),
            is_active=True,
        ),
    ]
    session.add_all(users)
    await session.flush()
    print(f"Seeded {len(users)} users")


async def main():
    # Create tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    # Seed data
    async with async_session() as session:
        await seed_roles(session)
        await seed_users(session)
        await session.commit()

    await engine.dispose()
    print("Database seeded successfully!")


if __name__ == "__main__":
    asyncio.run(main())
</code></pre>

<pre><code class="language-bash"># Chạy seeder
uv run python -m scripts.seed
</code></pre>

<h2 id="6-best-practices"><strong>6. Migration Best Practices</strong></h2>

<h3 id="naming-convention"><strong>Naming Convention</strong></h3>

<pre><code class="language-python"># app/core/database.py - Thêm naming convention
from sqlalchemy import MetaData

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s",
}

class Base(DeclarativeBase):
    metadata = MetaData(naming_convention=convention)
</code></pre>

<h3 id="tips"><strong>Tips quan trọng</strong></h3>

<ul>
<li>Luôn review autogenerate migration trước khi chạy</li>
<li>Tách data migration và schema migration</li>
<li>Test migrations cả upgrade và downgrade</li>
<li>Không sửa migration đã chạy trên production</li>
<li>Dùng <code>--sql</code> flag để preview SQL trước khi chạy trên production</li>
</ul>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này đã học:</p>

<ul>
<li><strong>Alembic setup</strong>: Cấu hình cho async SQLAlchemy</li>
<li><strong>Auto-generate</strong>: Tự động tạo migrations từ model changes</li>
<li><strong>Manual migrations</strong>: Tạo migration tùy chỉnh (indexes, raw SQL)</li>
<li><strong>Data migrations</strong>: Seed data trong migration</li>
<li><strong>Database seeding</strong>: Script seed data cho development</li>
</ul>

<p>Bài tiếp theo sẽ xây dựng CRUD API hoàn chỉnh với Repository pattern.</p>
