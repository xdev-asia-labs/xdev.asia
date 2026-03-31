---
id: 019d8b40-a104-7001-b002-fastapi000104
title: 'Bài 4: Path Operations, Request & Response'
slug: bai-4-path-operations-request-va-response
description: >-
  Path parameters, Query parameters, Request body, Headers, Cookies.
  HTTP methods, Status codes, Response models, JSONResponse.
  Type validation tự động với Pydantic.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Nền tảng Python & FastAPI"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-path-parameters"><strong>1. Path Parameters</strong></h2>

<p>Path parameters cho phép capture giá trị từ URL path. FastAPI tự động parse và validate dựa trên type hints:</p>

<pre><code class="language-python">from fastapi import FastAPI, Path
from enum import Enum

app = FastAPI()

# Basic path parameter - tự động validate là int
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}
# GET /users/42 → {"user_id": 42}
# GET /users/abc → 422 Validation Error

# Multiple path parameters
@app.get("/users/{user_id}/posts/{post_id}")
async def get_user_post(user_id: int, post_id: int):
    return {"user_id": user_id, "post_id": post_id}

# Path parameter validation với Path()
@app.get("/items/{item_id}")
async def get_item(
    item_id: int = Path(
        ...,
        title="Item ID",
        description="The unique identifier of the item",
        gt=0,        # greater than 0
        le=10000,    # less than or equal to 10000
        examples=[42],
    )
):
    return {"item_id": item_id}

# Enum path parameter
class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    return {"model": model_name, "value": model_name.value}
# GET /models/alexnet → {"model": "alexnet", "value": "alexnet"}
# GET /models/invalid → 422 Validation Error

# File path parameter
@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}
# GET /files/home/user/data.csv → {"file_path": "home/user/data.csv"}
</code></pre>

<h2 id="2-query-parameters"><strong>2. Query Parameters</strong></h2>

<p>Query parameters là các tham số sau dấu <code>?</code> trong URL:</p>

<pre><code class="language-python">from fastapi import FastAPI, Query

app = FastAPI()

# Basic query parameters
@app.get("/items/")
async def list_items(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}
# GET /items/?skip=0&limit=20

# Optional query parameter
@app.get("/search/")
async def search(q: str | None = None):
    if q:
        return {"results": f"Searching for: {q}"}
    return {"results": "No search query"}

# Required query parameter (không có default value)
@app.get("/search/required")
async def search_required(q: str):
    return {"results": f"Searching for: {q}"}
# GET /search/required → 422 Error (q is required)

# Query parameter validation với Query()
@app.get("/items/search")
async def search_items(
    q: str = Query(
        ...,
        min_length=3,
        max_length=50,
        pattern=r"^[a-zA-Z0-9\s]+$",
        title="Search Query",
        description="Search term for items",
        examples=["laptop"],
    ),
    category: str | None = Query(None, max_length=20),
    min_price: float = Query(0, ge=0),
    max_price: float = Query(10000, le=100000),
    tags: list[str] = Query(default=[]),
):
    return {
        "q": q,
        "category": category,
        "price_range": [min_price, max_price],
        "tags": tags,
    }
# GET /items/search?q=laptop&tags=gaming&tags=new

# Boolean query parameters
@app.get("/items/filter")
async def filter_items(
    is_available: bool = True,
    include_deleted: bool = False,
):
    return {"is_available": is_available, "include_deleted": include_deleted}
# GET /items/filter?is_available=true&include_deleted=false
# GET /items/filter?is_available=1  ← cũng hoạt động
# GET /items/filter?is_available=yes  ← cũng hoạt động
</code></pre>

<h2 id="3-request-body"><strong>3. Request Body</strong></h2>

<p>FastAPI sử dụng Pydantic models cho request body validation:</p>

<pre><code class="language-python">from fastapi import FastAPI, Body
from pydantic import BaseModel, Field, field_validator
from datetime import datetime

app = FastAPI()

# Pydantic model cho request body
class ItemCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: str | None = Field(None, max_length=500)
    price: float = Field(..., gt=0, description="Price must be positive")
    tax: float | None = Field(None, ge=0)
    tags: list[str] = Field(default_factory=list, max_length=10)

    @field_validator("name")
    @classmethod
    def name_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Name cannot be empty or whitespace")
        return v.strip()

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "Laptop",
                    "description": "A powerful gaming laptop",
                    "price": 1299.99,
                    "tax": 129.99,
                    "tags": ["electronics", "gaming"],
                }
            ]
        }
    }

@app.post("/items/")
async def create_item(item: ItemCreate):
    item_dict = item.model_dump()
    if item.tax:
        item_dict["total_price"] = item.price + item.tax
    return item_dict

# Multiple body parameters
class User(BaseModel):
    name: str
    email: str

class Order(BaseModel):
    item_id: int
    quantity: int = Field(..., gt=0)

@app.post("/orders/")
async def create_order(user: User, order: Order):
    return {"user": user, "order": order}
# Request body:
# {
#   "user": {"name": "Alice", "email": "alice@example.com"},
#   "order": {"item_id": 1, "quantity": 2}
# }

# Body với singular values
@app.put("/items/{item_id}")
async def update_item(
    item_id: int,
    item: ItemCreate,
    importance: int = Body(..., gt=0, le=5),
    note: str = Body(None),
):
    return {
        "item_id": item_id,
        "item": item,
        "importance": importance,
        "note": note,
    }
</code></pre>

<h2 id="4-headers-cookies"><strong>4. Headers & Cookies</strong></h2>

<pre><code class="language-python">from fastapi import FastAPI, Header, Cookie

app = FastAPI()

# Headers
@app.get("/headers/")
async def read_headers(
    user_agent: str | None = Header(None),
    x_request_id: str | None = Header(None, alias="X-Request-ID"),
    accept_language: str = Header("en"),
):
    return {
        "user_agent": user_agent,
        "request_id": x_request_id,
        "language": accept_language,
    }

# Duplicate headers (list)
@app.get("/multi-headers/")
async def read_multi_headers(
    x_token: list[str] | None = Header(None),
):
    return {"x_token": x_token}

# Cookies
@app.get("/cookies/")
async def read_cookies(
    session_id: str | None = Cookie(None),
    tracking_id: str | None = Cookie(None),
):
    return {"session_id": session_id, "tracking_id": tracking_id}
</code></pre>

<h2 id="5-response-model"><strong>5. Response Model & Status Codes</strong></h2>

<pre><code class="language-python">from fastapi import FastAPI, status
from fastapi.responses import JSONResponse, RedirectResponse
from pydantic import BaseModel

app = FastAPI()

# Response model - filter output fields
class UserIn(BaseModel):
    name: str
    email: str
    password: str

class UserOut(BaseModel):
    name: str
    email: str
    # password is NOT included in response!

@app.post(
    "/users/",
    response_model=UserOut,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new user",
    description="Create a new user with name, email and password",
    response_description="The created user (without password)",
)
async def create_user(user: UserIn):
    # Password sẽ bị loại bỏ khỏi response nhờ response_model=UserOut
    return user

# Multiple response models
class ItemSummary(BaseModel):
    name: str
    price: float

class ItemDetail(BaseModel):
    name: str
    price: float
    description: str | None
    tax: float | None
    tags: list[str]

@app.get(
    "/items/{item_id}",
    response_model=ItemDetail,
    responses={
        200: {"description": "Item found", "model": ItemDetail},
        404: {"description": "Item not found"},
    },
)
async def get_item(item_id: int):
    ...

# Custom response
@app.get("/custom-response/")
async def custom_response():
    return JSONResponse(
        status_code=200,
        content={"message": "Custom response"},
        headers={"X-Custom-Header": "custom-value"},
    )

# Redirect
@app.get("/old-path")
async def redirect():
    return RedirectResponse(url="/new-path", status_code=status.HTTP_301_MOVED_PERMANENTLY)

# Response với exclude/include
class FullItem(BaseModel):
    name: str
    description: str | None
    price: float
    tax: float | None
    internal_code: str

@app.get(
    "/items/public/{item_id}",
    response_model=FullItem,
    response_model_exclude={"internal_code"},
    response_model_exclude_unset=True,
)
async def get_public_item(item_id: int):
    return FullItem(
        name="Laptop",
        description=None,
        price=999.99,
        tax=None,
        internal_code="INTERNAL-001",
    )
    # Response: {"name": "Laptop", "price": 999.99}
    # description, tax excluded (unset), internal_code excluded explicitly
</code></pre>

<h2 id="6-form-data"><strong>6. Form Data & File Upload</strong></h2>

<pre><code class="language-python">from fastapi import FastAPI, Form, File, UploadFile

app = FastAPI()

# Form data
@app.post("/login/")
async def login(
    username: str = Form(...),
    password: str = Form(...),
):
    return {"username": username}

# File upload
@app.post("/upload/")
async def upload_file(
    file: UploadFile = File(..., description="File to upload"),
):
    contents = await file.read()
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "size": len(contents),
    }

# Multiple files
@app.post("/upload-multiple/")
async def upload_multiple(
    files: list[UploadFile] = File(..., description="Multiple files"),
):
    return [{"filename": f.filename, "size": f.size} for f in files]

# Form + File mixed
@app.post("/submit/")
async def submit_form(
    name: str = Form(...),
    description: str = Form(None),
    file: UploadFile = File(...),
):
    return {
        "name": name,
        "description": description,
        "filename": file.filename,
    }
</code></pre>

<h2 id="7-error-handling"><strong>7. Error Handling</strong></h2>

<pre><code class="language-python">from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

app = FastAPI()

# HTTPException
@app.get("/items/{item_id}")
async def get_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item {item_id} not found",
            headers={"X-Error": "Item not found"},
        )
    return items_db[item_id]

# Custom exception
class ItemNotFoundError(Exception):
    def __init__(self, item_id: int):
        self.item_id = item_id

@app.exception_handler(ItemNotFoundError)
async def item_not_found_handler(request: Request, exc: ItemNotFoundError):
    return JSONResponse(
        status_code=404,
        content={
            "error": "item_not_found",
            "message": f"Item with id {exc.item_id} was not found",
            "path": str(request.url),
        },
    )

# Override validation error format
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    errors = []
    for error in exc.errors():
        errors.append({
            "field": " → ".join(str(loc) for loc in error["loc"]),
            "message": error["msg"],
            "type": error["type"],
        })
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={"errors": errors},
    )
</code></pre>

<h2 id="8-request-lifecycle"><strong>8. Request Lifecycle trong FastAPI</strong></h2>

<pre><code>Client Request
    │
    ▼
┌─────────────────────┐
│    Middleware (1)     │  ← Process request
├─────────────────────┤
│    Middleware (2)     │
├─────────────────────┤
│    Exception Handler │  ← Catch exceptions
├─────────────────────┤
│    Dependency (DI)   │  ← Resolve dependencies
├─────────────────────┤
│    Path Operation    │  ← Execute handler
├─────────────────────┤
│    Response Model    │  ← Serialize &amp; filter
├─────────────────────┤
│    Middleware (2)     │  ← Process response
├─────────────────────┤
│    Middleware (1)     │
└─────────────────────┘
    │
    ▼
Client Response
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này, chúng ta đã tìm hiểu:</p>

<ul>
<li><strong>Path Parameters</strong>: Capture values từ URL, auto-validate với type hints</li>
<li><strong>Query Parameters</strong>: Optional/required query strings, validation với Query()</li>
<li><strong>Request Body</strong>: Pydantic models cho structured data, field validators</li>
<li><strong>Headers & Cookies</strong>: Đọc HTTP headers và cookies</li>
<li><strong>Response Model</strong>: Control output format, filter fields, status codes</li>
<li><strong>Error Handling</strong>: HTTPException, custom exceptions, validation errors</li>
</ul>

<p>Bài tiếp theo sẽ đi vào Pydantic V2 - công cụ validation và serialization mạnh mẽ nhất của FastAPI.</p>
