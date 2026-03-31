---
id: 019d8b40-a201-7001-b002-fastapi000201
title: 'Bài 5: Pydantic V2 - Data Validation & Serialization'
slug: bai-5-pydantic-v2-data-validation-va-serialization
description: >-
  Pydantic BaseModel, Field validators, model_validator, computed fields.
  Custom types, JSON Schema generation, Settings management với
  pydantic-settings. Nested models và discriminated unions.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Pydantic, Database & ORM"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-pydantic-v2-overview"><strong>1. Pydantic V2 - Tổng quan</strong></h2>

<p>Pydantic V2 là thư viện data validation nhanh nhất cho Python, được viết lại core bằng Rust (pydantic-core). FastAPI sử dụng Pydantic cho mọi thứ: request validation, response serialization, settings management.</p>

<h3 id="v1-vs-v2"><strong>Thay đổi chính từ V1 sang V2:</strong></h3>

<ul>
<li>Core viết bằng Rust → nhanh hơn 5-50x</li>
<li><code>model_validate()</code> thay cho <code>parse_obj()</code></li>
<li><code>model_dump()</code> thay cho <code>.dict()</code></li>
<li><code>model_dump_json()</code> thay cho <code>.json()</code></li>
<li><code>model_config</code> thay cho <code>class Config</code></li>
<li><code>@field_validator</code> thay cho <code>@validator</code></li>
<li><code>@model_validator</code> thay cho <code>@root_validator</code></li>
</ul>

<h2 id="2-basemodel"><strong>2. BaseModel cơ bản</strong></h2>

<pre><code class="language-python">from pydantic import BaseModel, Field
from datetime import datetime
from enum import Enum


class UserRole(str, Enum):
    admin = "admin"
    user = "user"
    moderator = "moderator"


class UserBase(BaseModel):
    """Base user schema cho shared fields."""
    name: str = Field(..., min_length=2, max_length=50)
    email: str = Field(..., pattern=r"^[\w.+-]+@[\w-]+\.[\w.]+$")
    role: UserRole = Field(default=UserRole.user)
    bio: str | None = Field(None, max_length=500)
    tags: list[str] = Field(default_factory=list, max_length=10)


class UserCreate(UserBase):
    """Schema cho tạo user mới."""
    password: str = Field(..., min_length=8, max_length=128)


class UserUpdate(BaseModel):
    """Schema cho update user - tất cả fields optional."""
    name: str | None = Field(None, min_length=2, max_length=50)
    email: str | None = Field(None, pattern=r"^[\w.+-]+@[\w-]+\.[\w.]+$")
    bio: str | None = None
    tags: list[str] | None = None


class UserResponse(UserBase):
    """Schema cho response - KHÔNG bao giờ trả password."""
    id: int
    is_active: bool = True
    created_at: datetime
    updated_at: datetime | None = None

    model_config = {"from_attributes": True}  # Cho phép đọc từ ORM objects


# Sử dụng
user = UserCreate(
    name="Alice",
    email="alice@example.com",
    password="securepass123",
    role="admin",
)
print(user.model_dump())
# {'name': 'Alice', 'email': 'alice@example.com', 'role': 'admin', ...}

print(user.model_dump(exclude={"password"}))
# {'name': 'Alice', 'email': 'alice@example.com', 'role': 'admin', ...}

print(user.model_dump_json(indent=2))
# JSON string

# Validate từ dict
data = {"name": "Bob", "email": "bob@example.com", "password": "pass12345"}
user2 = UserCreate.model_validate(data)

# Validate từ JSON string
json_str = '{"name": "Charlie", "email": "charlie@example.com", "password": "secure123"}'
user3 = UserCreate.model_validate_json(json_str)
</code></pre>

<h2 id="3-field-validators"><strong>3. Field Validators</strong></h2>

<pre><code class="language-python">from pydantic import BaseModel, Field, field_validator, ValidationInfo
import re


class Product(BaseModel):
    name: str
    sku: str
    price: float
    discount_price: float | None = None
    tags: list[str] = []

    @field_validator("name")
    @classmethod
    def name_must_be_titlecase(cls, v: str) -> str:
        """Tự động capitalize name."""
        return v.strip().title()

    @field_validator("sku")
    @classmethod
    def validate_sku(cls, v: str) -> str:
        """SKU phải theo format: ABC-12345."""
        pattern = r"^[A-Z]{3}-\d{5}$"
        if not re.match(pattern, v):
            raise ValueError(f"SKU must match format XXX-00000, got: {v}")
        return v

    @field_validator("price")
    @classmethod
    def price_must_be_positive(cls, v: float) -> float:
        if v <= 0:
            raise ValueError("Price must be positive")
        return round(v, 2)

    @field_validator("discount_price")
    @classmethod
    def discount_must_be_less_than_price(cls, v: float | None, info: ValidationInfo) -> float | None:
        """Discount price phải nhỏ hơn price."""
        if v is not None and "price" in info.data:
            if v >= info.data["price"]:
                raise ValueError("Discount price must be less than regular price")
        return v

    @field_validator("tags", mode="before")
    @classmethod
    def parse_tags(cls, v):
        """Cho phép tags là string comma-separated hoặc list."""
        if isinstance(v, str):
            return [tag.strip() for tag in v.split(",") if tag.strip()]
        return v


# Test
product = Product(
    name="gaming laptop",
    sku="LAP-00001",
    price=1299.999,
    discount_price=999.99,
    tags="gaming, electronics, new",
)
print(product.name)       # "Gaming Laptop"
print(product.price)      # 1300.0
print(product.tags)       # ["gaming", "electronics", "new"]
</code></pre>

<h2 id="4-model-validators"><strong>4. Model Validators</strong></h2>

<pre><code class="language-python">from pydantic import BaseModel, model_validator
from typing import Self


class DateRange(BaseModel):
    start_date: str
    end_date: str

    @model_validator(mode="after")
    def check_dates(self) -> Self:
        if self.start_date >= self.end_date:
            raise ValueError("end_date must be after start_date")
        return self


class PaymentRequest(BaseModel):
    amount: float
    currency: str
    payment_method: str
    card_number: str | None = None
    bank_account: str | None = None

    @model_validator(mode="after")
    def validate_payment_details(self) -> Self:
        if self.payment_method == "card" and not self.card_number:
            raise ValueError("card_number is required for card payments")
        if self.payment_method == "bank" and not self.bank_account:
            raise ValueError("bank_account is required for bank transfers")
        return self

    @model_validator(mode="before")
    @classmethod
    def normalize_currency(cls, data: dict) -> dict:
        """Pre-processing: normalize currency to uppercase."""
        if isinstance(data, dict) and "currency" in data:
            data["currency"] = data["currency"].upper()
        return data
</code></pre>

<h2 id="5-computed-fields"><strong>5. Computed Fields</strong></h2>

<pre><code class="language-python">from pydantic import BaseModel, computed_field
from datetime import datetime, date


class OrderItem(BaseModel):
    product_name: str
    unit_price: float
    quantity: int
    tax_rate: float = 0.1  # 10% tax

    @computed_field
    @property
    def subtotal(self) -> float:
        return round(self.unit_price * self.quantity, 2)

    @computed_field
    @property
    def tax_amount(self) -> float:
        return round(self.subtotal * self.tax_rate, 2)

    @computed_field
    @property
    def total(self) -> float:
        return round(self.subtotal + self.tax_amount, 2)


class UserProfile(BaseModel):
    first_name: str
    last_name: str
    birth_date: date

    @computed_field
    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"

    @computed_field
    @property
    def age(self) -> int:
        today = date.today()
        return today.year - self.birth_date.year - (
            (today.month, today.day) < (self.birth_date.month, self.birth_date.day)
        )


# Test
item = OrderItem(product_name="Laptop", unit_price=999.99, quantity=2)
print(item.model_dump())
# {'product_name': 'Laptop', 'unit_price': 999.99, 'quantity': 2,
#  'tax_rate': 0.1, 'subtotal': 1999.98, 'tax_amount': 200.0, 'total': 2199.98}
</code></pre>

<h2 id="6-nested-models"><strong>6. Nested Models & Discriminated Unions</strong></h2>

<pre><code class="language-python">from pydantic import BaseModel, Field
from typing import Annotated, Literal
from datetime import datetime


# Nested models
class Address(BaseModel):
    street: str
    city: str
    country: str
    zip_code: str


class Company(BaseModel):
    name: str
    address: Address
    employees_count: int


class UserWithCompany(BaseModel):
    name: str
    email: str
    company: Company | None = None
    addresses: list[Address] = []


# Discriminated Unions - polymorphic models
class EmailNotification(BaseModel):
    type: Literal["email"] = "email"
    to: str
    subject: str
    body: str


class SMSNotification(BaseModel):
    type: Literal["sms"] = "sms"
    phone: str
    message: str


class PushNotification(BaseModel):
    type: Literal["push"] = "push"
    device_token: str
    title: str
    body: str


Notification = Annotated[
    EmailNotification | SMSNotification | PushNotification,
    Field(discriminator="type"),
]


class NotificationRequest(BaseModel):
    notifications: list[Notification]


# FastAPI sẽ tự động validate đúng type dựa trên "type" field
# {
#   "notifications": [
#     {"type": "email", "to": "alice@example.com", "subject": "Hi", "body": "Hello"},
#     {"type": "sms", "phone": "+84123456789", "message": "Hello SMS"}
#   ]
# }
</code></pre>

<h2 id="7-custom-types"><strong>7. Custom Types</strong></h2>

<pre><code class="language-python">from pydantic import BaseModel, BeforeValidator, AfterValidator, PlainSerializer
from typing import Annotated
from datetime import datetime


# Custom type với Annotated
def validate_phone(v: str) -> str:
    """Validate và normalize phone number."""
    # Xóa khoảng trắng và dấu gạch
    cleaned = v.replace(" ", "").replace("-", "").replace("(", "").replace(")", "")
    if not cleaned.startswith("+"):
        cleaned = "+84" + cleaned.lstrip("0")
    if len(cleaned) < 10 or len(cleaned) > 15:
        raise ValueError("Invalid phone number length")
    return cleaned

PhoneNumber = Annotated[str, AfterValidator(validate_phone)]


# Custom datetime serializer
def serialize_datetime(v: datetime) -> str:
    return v.strftime("%Y-%m-%d %H:%M:%S")

FormattedDatetime = Annotated[datetime, PlainSerializer(serialize_datetime)]


# Sử dụng
class Contact(BaseModel):
    name: str
    phone: PhoneNumber
    created_at: FormattedDatetime = Field(default_factory=datetime.now)


contact = Contact(name="Alice", phone="0912345678")
print(contact.phone)  # "+84912345678"
print(contact.model_dump())
# {'name': 'Alice', 'phone': '+84912345678', 'created_at': '2026-03-31 12:00:00'}
</code></pre>

<h2 id="8-pydantic-settings"><strong>8. Pydantic Settings</strong></h2>

<pre><code class="language-python">from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field, SecretStr
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings - đọc từ environment variables và .env file."""

    # App
    app_name: str = "FastAPI Tutorial"
    app_version: str = "1.0.0"
    debug: bool = False
    environment: str = Field("development", pattern=r"^(development|staging|production)$")

    # Server
    host: str = "0.0.0.0"
    port: int = 8000
    workers: int = 1

    # Database
    database_url: str = "postgresql+asyncpg://user:pass@localhost:5432/mydb"
    db_pool_size: int = 20
    db_max_overflow: int = 10

    # Redis
    redis_url: str = "redis://localhost:6379/0"

    # Security
    secret_key: SecretStr  # Sử dụng SecretStr để ẩn trong logs
    jwt_algorithm: str = "HS256"
    jwt_expiration_minutes: int = 30

    # CORS
    cors_origins: list[str] = ["http://localhost:3000"]

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        env_prefix="",  # Không thêm prefix
        case_sensitive=False,
    )


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance."""
    return Settings()


# Sử dụng trong FastAPI
from fastapi import FastAPI, Depends

app = FastAPI()

@app.get("/settings")
async def show_settings(settings: Settings = Depends(get_settings)):
    return {
        "app_name": settings.app_name,
        "environment": settings.environment,
        "debug": settings.debug,
    }
</code></pre>

<p>File <code>.env</code>:</p>

<pre><code class="language-bash">APP_NAME="My FastAPI App"
DEBUG=true
ENVIRONMENT=development
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/mydb
SECRET_KEY=your-super-secret-key-here
CORS_ORIGINS=["http://localhost:3000","http://localhost:8080"]
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Pydantic V2 là trái tim của FastAPI, cung cấp:</p>

<ul>
<li><strong>BaseModel</strong>: Data validation với type hints</li>
<li><strong>Field Validators</strong>: Custom validation logic cho từng field</li>
<li><strong>Model Validators</strong>: Cross-field validation</li>
<li><strong>Computed Fields</strong>: Derived values tự động</li>
<li><strong>Nested Models</strong>: Complex data structures</li>
<li><strong>Discriminated Unions</strong>: Polymorphic models</li>
<li><strong>Custom Types</strong>: Reusable validation logic</li>
<li><strong>Settings</strong>: Configuration management từ env vars</li>
</ul>

<p>Bài tiếp theo sẽ hướng dẫn kết nối Database với SQLAlchemy 2.0 async.</p>
