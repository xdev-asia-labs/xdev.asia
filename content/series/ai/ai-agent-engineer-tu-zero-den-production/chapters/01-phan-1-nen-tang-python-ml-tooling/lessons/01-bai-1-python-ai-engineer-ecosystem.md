---
id: 019e0a01-bb01-7001-c001-ee0100000001
title: "Bài 1: Python cho AI Engineer — Ecosystem & Best Practices"
slug: bai-1-python-ai-engineer-ecosystem
description: >-
  Python ecosystem cho AI: NumPy, Pandas, scikit-learn. Virtual environments, dependency management. Coding patterns cho ML projects. Type hints, testing, project structure chuẩn production.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng — Python, ML & AI Tooling"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **95% dự án AI/ML production đều chạy trên Python.** Không phải vì Python nhanh nhất — mà vì ecosystem của nó không có đối thủ. Bài này sẽ giúp bạn setup môi trường, nắm tooling, và viết code Python theo chuẩn production mà mọi AI Engineer đều cần.

## 1. Tại sao Python thống trị AI/ML

Python không phải ngôn ngữ nhanh nhất. Cũng không phải ngôn ngữ "đẹp" nhất. Nhưng nó thắng tuyệt đối trong AI/ML vì 3 lý do:

**Thứ nhất — Ecosystem khổng lồ.** Từ data processing (Pandas, Polars) đến deep learning (PyTorch, TensorFlow), từ NLP (Hugging Face) đến AI Agent (LangChain, CrewAI) — tất cả đều Python-first.

**Thứ hai — Glue language hoàn hảo.** Python gọi C/C++/Rust ở tầng dưới (NumPy, PyTorch đều viết bằng C++), nên bạn code đơn giản nhưng performance vẫn cao.

**Thứ ba — Community.** Stack Overflow, GitHub, Hugging Face Hub — hầu hết tutorial, paper implementation, pretrained model đều release bằng Python trước.

```text
┌─────────────────────────────────────────────────┐
│              Python AI/ML Stack                  │
├─────────────────────────────────────────────────┤
│  Applications    │ AI Agents, RAG, Chatbots     │
│  Frameworks      │ LangChain, LlamaIndex, CrewAI│
│  LLM APIs        │ OpenAI, Anthropic, HuggingFace│
│  Deep Learning   │ PyTorch, TensorFlow, JAX     │
│  ML Libraries    │ scikit-learn, XGBoost, LightGBM│
│  Data Processing │ Pandas, Polars, NumPy        │
│  Infrastructure  │ FastAPI, Docker, MLflow      │
│  Python Runtime  │ CPython 3.11+ (performance!) │
│  C/C++/Rust Core │ BLAS, CUDA, Tokenizers       │
└─────────────────────────────────────────────────┘
```

### 1.1. Python version — Chọn gì?

Luôn dùng **Python 3.11+**. Lý do:

| Version | Status | Ghi chú |
|---------|--------|---------|
| 3.9 | Maintenance | Còn hỗ trợ, nhưng thiếu feature mới |
| 3.10 | Maintenance | `match/case` syntax, tốt |
| **3.11** | **Recommended** | **Nhanh hơn 10-60%**, exception groups |
| 3.12 | Current | Per-interpreter GIL (experimental) |
| 3.13 | Latest | Free-threaded mode (no-GIL experimental) |

> **Tip thực tế:** Nhiều library AI (PyTorch, TensorFlow) thường chậm support version mới nhất. Kiểm tra compatibility trước khi upgrade. Python 3.11 là sweet spot hiện tại.

## 2. Ecosystem Overview — Bộ công cụ AI Engineer

### 2.1. Data Processing — NumPy & Pandas

**NumPy** là nền tảng của mọi thứ. Mọi ML library đều build trên NumPy arrays.

```python
import numpy as np

# Vectorized operations — nhanh hơn loop Python 100x
data = np.random.randn(1_000_000)
normalized = (data - data.mean()) / data.std()

# Matrix operations cho ML
X = np.random.randn(1000, 10)  # 1000 samples, 10 features
weights = np.random.randn(10, 1)
predictions = X @ weights  # Matrix multiplication
```

**Pandas** cho tabular data. Bạn sẽ dùng nó trong mọi bước EDA và data preprocessing.

```python
import pandas as pd

# Load và xử lý data
df = pd.read_csv("customers.csv")

# Chain operations — clean & transform
cleaned = (
    df
    .dropna(subset=["email", "age"])
    .query("age >= 18")
    .assign(
        age_group=lambda x: pd.cut(x["age"], bins=[18, 30, 50, 100]),
        signup_date=lambda x: pd.to_datetime(x["signup_date"])
    )
)

print(cleaned.describe())
```

> **Tip:** Nếu data > 1GB, hãy xem xét **Polars** — API tương tự Pandas nhưng nhanh hơn 10-100x nhờ Rust backend và lazy evaluation.

### 2.2. Machine Learning — scikit-learn

**scikit-learn** là standard cho traditional ML. API cực kỳ consistent: `fit()` → `predict()` → `score()`.

```python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Train model — 3 dòng
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)
print(classification_report(y_test, model.predict(X_test)))
```

### 2.3. Deep Learning — PyTorch

**PyTorch** đã thắng cuộc chiến DL framework. Hầu hết paper mới, Hugging Face models đều dùng PyTorch.

```python
import torch
import torch.nn as nn

class SimpleClassifier(nn.Module):
    def __init__(self, input_dim: int, num_classes: int):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_dim, 128),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(128, num_classes),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.network(x)

# Sử dụng
model = SimpleClassifier(input_dim=768, num_classes=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)
```

### 2.4. LLM & NLP — Hugging Face

**Hugging Face Transformers** là gateway vào thế giới LLM. Bạn sẽ dùng nó rất nhiều trong series này.

```python
from transformers import pipeline

# Sentiment analysis — 2 dòng
classifier = pipeline("sentiment-analysis")
result = classifier("This AI course is amazing!")
# [{'label': 'POSITIVE', 'score': 0.9998}]

# Text generation với LLM
generator = pipeline("text-generation", model="microsoft/Phi-3-mini-4k-instruct")
output = generator("Explain AI agents in one sentence:", max_new_tokens=50)
```

### 2.5. Bảng tổng hợp Ecosystem

| Category | Library | Use Case | Khi nào dùng |
|----------|---------|----------|-------------|
| Array | NumPy | Numerical computing | Mọi lúc — nền tảng |
| DataFrame | Pandas / Polars | Tabular data | EDA, preprocessing |
| Visualization | Matplotlib / Plotly | Charts | EDA, reporting |
| ML | scikit-learn | Traditional ML | Classification, regression |
| DL | PyTorch | Deep learning | Neural networks, LLM |
| NLP | Hugging Face | LLM, embeddings | NLP tasks, fine-tuning |
| AI Agents | LangChain / CrewAI | Agent systems | RAG, tool calling |
| API | FastAPI | REST APIs | Model serving |
| Experiment | MLflow / W&B | Tracking | Training experiments |

## 3. Python Environment Management

Đây là phần nhiều người bỏ qua — và trả giá bằng "works on my machine" bugs.

### 3.1. So sánh các tool

```text
┌─────────────────────────────────────────────────────────┐
│            Environment Management Tools                  │
├──────────┬──────────────────────────────────────────────┤
│ venv     │ Built-in Python. Đơn giản, đủ dùng.         │
│ conda    │ Quản lý cả Python version + system libs.     │
│ poetry   │ Modern dependency management + lockfile.      │
│ uv       │ Blazing fast. Rust-based. Drop-in pip thay.  │
│ pip-tools│ pip-compile lockfile. Lightweight.            │
└──────────┴──────────────────────────────────────────────┘
```

| Tool | Speed | Lockfile | Python version mgmt | Best for |
|------|-------|----------|---------------------|----------|
| **venv + pip** | Trung bình | Không | Không | Beginners, scripts nhanh |
| **conda** | Chậm | environment.yml | ✅ Có | Data science, CUDA |
| **poetry** | Trung bình | ✅ poetry.lock | Không | Python packages |
| **uv** | ⚡ Rất nhanh | ✅ uv.lock | ✅ Có | **Recommended 2025+** |

### 3.2. Workflow với uv (Recommended)

**uv** đang thay thế pip, venv, pip-tools, và cả pyenv. Viết bằng Rust, nhanh gấp 10-100x so với pip.

```bash
# Cài uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Tạo project mới
uv init my-ai-project
cd my-ai-project

# uv tự quản lý Python version
uv python install 3.11

# Thêm dependencies
uv add numpy pandas scikit-learn
uv add torch --extra-index-url https://download.pytorch.org/whl/cpu
uv add transformers langchain

# Dev dependencies riêng
uv add --dev pytest ruff mypy ipykernel

# Sync environment (tạo venv + install tất cả)
uv sync

# Chạy script
uv run python train.py

# Lock dependencies cho reproducibility
uv lock
```

### 3.3. Workflow với venv + pip (Classic)

Nếu chưa quen uv, venv vẫn ổn cho project nhỏ:

```bash
# Tạo virtual environment
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows

# Install dependencies
pip install numpy pandas scikit-learn torch transformers

# Freeze dependencies
pip freeze > requirements.txt

# Reproduce trên máy khác
pip install -r requirements.txt
```

> **Quy tắc vàng:** Không bao giờ `pip install` vào system Python. Luôn dùng virtual environment.

## 4. Project Structure chuẩn cho ML/AI

Đừng để code ML nằm lung tung trong notebook. Đây là structure chuẩn production:

```text
my-ai-project/
├── pyproject.toml          # Project config (dependencies, tools)
├── README.md
├── .env                    # API keys (NEVER commit!)
├── .gitignore
│
├── src/
│   └── my_ai_project/
│       ├── __init__.py
│       ├── config.py       # Settings & configuration
│       ├── data/
│       │   ├── __init__.py
│       │   ├── loader.py   # Data loading
│       │   └── preprocessing.py
│       ├── models/
│       │   ├── __init__.py
│       │   ├── classifier.py
│       │   └── embeddings.py
│       ├── services/
│       │   ├── __init__.py
│       │   ├── llm_service.py
│       │   └── rag_service.py
│       └── utils/
│           ├── __init__.py
│           └── helpers.py
│
├── tests/
│   ├── conftest.py         # Shared fixtures
│   ├── test_data.py
│   ├── test_models.py
│   └── test_services.py
│
├── notebooks/              # EDA, experiments (NOT production)
│   └── 01_eda.ipynb
│
├── data/                   # Raw & processed data
│   ├── raw/
│   └── processed/
│
├── models/                 # Saved model artifacts
│   └── checkpoints/
│
└── scripts/                # One-off scripts
    ├── train.py
    └── evaluate.py
```

> **Key insight:** Code trong `src/` là importable package. Notebooks chỉ dùng cho exploration. Production code không bao giờ nằm trong notebook.

## 5. Coding Patterns cho AI Engineer

### 5.1. Type Hints — Không optional nữa

Type hints giúp IDE autocomplete, bắt bug sớm, và làm code self-documenting.

```python
from dataclasses import dataclass
from typing import Optional
import numpy as np
from numpy.typing import NDArray

@dataclass
class ModelConfig:
    """Configuration cho model training."""
    model_name: str
    learning_rate: float = 1e-4
    batch_size: int = 32
    max_epochs: int = 10
    device: str = "cuda"

@dataclass
class PredictionResult:
    """Kết quả prediction."""
    label: str
    confidence: float
    probabilities: dict[str, float]

def preprocess_features(
    raw_data: pd.DataFrame,
    feature_cols: list[str],
    target_col: str,
) -> tuple[NDArray[np.float32], NDArray[np.int64]]:
    """Preprocess raw data thành features và labels."""
    X = raw_data[feature_cols].to_numpy(dtype=np.float32)
    y = raw_data[target_col].to_numpy(dtype=np.int64)
    return X, y

def predict(
    model: nn.Module,
    text: str,
    tokenizer: Optional["PreTrainedTokenizer"] = None,
) -> PredictionResult:
    """Predict label cho input text."""
    ...
```

### 5.2. Configuration Management với Pydantic Settings

Không hardcode API keys hay hyperparameters. Dùng **pydantic-settings** để quản lý config:

```python
from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    """App settings — load từ .env file hoặc environment variables."""

    # API Keys
    openai_api_key: str = Field(..., description="OpenAI API key")
    hf_token: str = Field(default="", description="Hugging Face token")

    # Model config
    model_name: str = "gpt-4o-mini"
    temperature: float = 0.7
    max_tokens: int = 1024

    # Database
    vector_db_url: str = "http://localhost:6333"
    collection_name: str = "documents"

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}

# Sử dụng
settings = Settings()
print(settings.model_name)  # "gpt-4o-mini"
```

### 5.3. Error Handling Pattern

```python
from typing import Any

class AIServiceError(Exception):
    """Base error cho AI service."""
    pass

class LLMRateLimitError(AIServiceError):
    """Rate limit từ LLM provider."""
    def __init__(self, retry_after: float):
        self.retry_after = retry_after
        super().__init__(f"Rate limited. Retry after {retry_after}s")

class ModelNotFoundError(AIServiceError):
    """Model không tồn tại."""
    pass

# Sử dụng với retry logic
import time

def call_llm_with_retry(
    prompt: str,
    max_retries: int = 3,
) -> str:
    """Gọi LLM với retry khi bị rate limit."""
    for attempt in range(max_retries):
        try:
            return call_llm(prompt)
        except LLMRateLimitError as e:
            if attempt == max_retries - 1:
                raise
            time.sleep(e.retry_after)
    raise AIServiceError("Max retries exceeded")
```

## 6. Testing cho AI Code

### 6.1. pytest Basics

Testing AI code khác với testing web app. Output không deterministic, model load chậm, API calls tốn tiền.

```python
# tests/conftest.py
import pytest
import numpy as np

@pytest.fixture
def sample_embeddings() -> np.ndarray:
    """Tạo sample embeddings cho testing."""
    np.random.seed(42)
    return np.random.randn(100, 768).astype(np.float32)

@pytest.fixture
def sample_texts() -> list[str]:
    """Sample texts cho NLP testing."""
    return [
        "Machine learning is a subset of AI",
        "Deep learning uses neural networks",
        "Python is popular for data science",
    ]
```

```python
# tests/test_preprocessing.py
import numpy as np
import pytest
from my_ai_project.data.preprocessing import normalize_embeddings

def test_normalize_embeddings_unit_length(sample_embeddings):
    """Normalized embeddings phải có length = 1."""
    result = normalize_embeddings(sample_embeddings)
    norms = np.linalg.norm(result, axis=1)
    np.testing.assert_allclose(norms, 1.0, atol=1e-6)

def test_normalize_embeddings_preserves_shape(sample_embeddings):
    """Shape không được thay đổi sau normalization."""
    result = normalize_embeddings(sample_embeddings)
    assert result.shape == sample_embeddings.shape

def test_normalize_embeddings_zero_vector():
    """Zero vector phải handle gracefully."""
    zero = np.zeros((1, 768), dtype=np.float32)
    result = normalize_embeddings(zero)
    assert not np.any(np.isnan(result))
```

### 6.2. Testing ML Pipelines

```python
# tests/test_pipeline.py
import pytest
from sklearn.datasets import make_classification
from my_ai_project.models.classifier import train_classifier

@pytest.fixture
def synthetic_dataset():
    """Tạo synthetic dataset cho pipeline testing."""
    X, y = make_classification(
        n_samples=200, n_features=20,
        n_classes=2, random_state=42,
    )
    return X, y

def test_train_classifier_accuracy(synthetic_dataset):
    """Model phải đạt accuracy tối thiểu trên synthetic data."""
    X, y = synthetic_dataset
    model, metrics = train_classifier(X, y)
    assert metrics["accuracy"] > 0.7, f"Accuracy quá thấp: {metrics['accuracy']}"

def test_train_classifier_returns_model(synthetic_dataset):
    """train_classifier phải return model object."""
    X, y = synthetic_dataset
    model, _ = train_classifier(X, y)
    assert hasattr(model, "predict")
    assert hasattr(model, "predict_proba")
```

### 6.3. Mocking API Calls

Không gọi OpenAI API thật trong test. Dùng mock:

```python
# tests/test_llm_service.py
from unittest.mock import patch, MagicMock

def test_generate_response_returns_text():
    """LLM service phải return text response."""
    mock_response = MagicMock()
    mock_response.choices = [MagicMock(message=MagicMock(content="Hello!"))]

    with patch("my_ai_project.services.llm_service.client.chat.completions.create") as mock_create:
        mock_create.return_value = mock_response
        result = generate_response("Say hello")
        assert result == "Hello!"
        mock_create.assert_called_once()
```

## 7. Performance Tips

### 7.1. Vectorization — Luôn dùng NumPy operations

```python
import numpy as np
import time

data = np.random.randn(1_000_000)

# ❌ CHẬM — Python loop
start = time.time()
result_slow = [x ** 2 + 2 * x + 1 for x in data]
print(f"Python loop: {time.time() - start:.3f}s")

# ✅ NHANH — NumPy vectorized (nhanh hơn ~100x)
start = time.time()
result_fast = data ** 2 + 2 * data + 1
print(f"NumPy vectorized: {time.time() - start:.3f}s")
```

### 7.2. Async I/O cho API Calls

Khi gọi nhiều LLM API calls, dùng async để parallel:

```python
import asyncio
import httpx

async def call_llm_async(prompt: str, client: httpx.AsyncClient) -> str:
    """Gọi LLM API asynchronously."""
    response = await client.post(
        "https://api.openai.com/v1/chat/completions",
        json={
            "model": "gpt-4o-mini",
            "messages": [{"role": "user", "content": prompt}],
        },
        headers={"Authorization": f"Bearer {settings.openai_api_key}"},
    )
    return response.json()["choices"][0]["message"]["content"]

async def batch_generate(prompts: list[str]) -> list[str]:
    """Gọi nhiều prompts song song."""
    async with httpx.AsyncClient(timeout=30.0) as client:
        tasks = [call_llm_async(p, client) for p in prompts]
        return await asyncio.gather(*tasks)

# Chạy
results = asyncio.run(batch_generate([
    "Summarize AI agents",
    "Explain RAG",
    "What is fine-tuning?",
]))
```

### 7.3. Profiling — Tìm bottleneck

```python
# Dùng cProfile cho function-level profiling
import cProfile

cProfile.run("train_model(X_train, y_train)", sort="cumulative")

# Hoặc line_profiler cho line-by-line
# pip install line_profiler
# Thêm @profile decorator rồi chạy:
# kernprof -l -v train.py
```

### 7.4. Bảng Performance Tips

| Vấn đề | Giải pháp | Speedup |
|--------|-----------|---------|
| Python loop trên arrays | NumPy vectorization | 50-100x |
| Nhiều API calls tuần tự | `asyncio.gather()` | 5-20x |
| Load model mỗi request | Cache model globally | 10-100x |
| Large DataFrame operations | Polars thay Pandas | 5-50x |
| String concatenation trong loop | `"".join()` hoặc f-string | 2-5x |
| Không biết bottleneck ở đâu | `cProfile` + `line_profiler` | — |

## 8. Tooling — Linting & Formatting

Dùng **Ruff** — all-in-one linter + formatter cho Python. Nhanh gấp 100x so với flake8 + black + isort.

```bash
# Install
uv add --dev ruff

# Format code
ruff format .

# Lint + autofix
ruff check --fix .
```

Thêm config vào `pyproject.toml`:

```toml
[tool.ruff]
target-version = "py311"
line-length = 88

[tool.ruff.lint]
select = [
    "E",   # pycodestyle errors
    "F",   # pyflakes
    "I",   # isort
    "UP",  # pyupgrade
    "B",   # bugbear
    "SIM", # simplify
]

[tool.mypy]
python_version = "3.11"
strict = true
warn_return_any = true

[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v --tb=short"
```

## Tổng kết

Sau bài này, bạn đã nắm được:

- ✅ **Python ecosystem cho AI** — hiểu vai trò của NumPy, Pandas, scikit-learn, PyTorch, Hugging Face trong stack
- ✅ **Environment management** — setup project với uv (hoặc venv) đúng cách, không bao giờ dùng system Python
- ✅ **Project structure chuẩn** — tổ chức code ML/AI theo chuẩn production với `src/`, `tests/`, `notebooks/`
- ✅ **Type hints & dataclasses** — viết code Python readable, maintainable với type annotations
- ✅ **Configuration management** — dùng pydantic-settings quản lý API keys và hyperparameters
- ✅ **Testing patterns** — test AI code với pytest, fixtures, mocking API calls
- ✅ **Performance** — vectorization, async I/O, profiling
- ✅ **Tooling** — Ruff cho linting/formatting, mypy cho type checking

```text
┌─────────────────────────────────────────────┐
│         AI Engineer Python Workflow          │
│                                             │
│   uv init → uv add → code (src/) →         │
│   ruff format → mypy check →               │
│   pytest → uv run train.py → ship 🚀       │
└─────────────────────────────────────────────┘
```

## Bài tập

**Bài 1 — Setup Project (30 phút)**
Tạo một AI project từ đầu với `uv`:
- Init project, install NumPy, Pandas, scikit-learn, pytest
- Tạo project structure theo template ở Section 4
- Viết `config.py` dùng pydantic-settings với ít nhất 5 settings
- Chạy `ruff check` và `mypy` — fix hết errors

**Bài 2 — Data Pipeline (30 phút)**
Viết một data preprocessing module hoàn chỉnh:
- Load CSV data bằng Pandas
- Handle missing values, encode categorical features
- Normalize numerical features
- Split train/test
- Viết ít nhất 3 unit tests cho module này

**Bài 3 — Async API Client (30 phút)**
Xây dựng async client cho một LLM API:
- Dùng `httpx.AsyncClient` gọi API
- Implement retry logic với exponential backoff
- Implement rate limiting (max 10 requests/second)
- Viết tests dùng mock (không gọi API thật)

**Bài 4 — Performance Benchmark (20 phút)**
So sánh performance giữa:
- Python loop vs NumPy vectorization trên 1M elements
- Pandas vs Polars trên một DataFrame 100K rows
- Sequential vs Async cho 10 HTTP requests
- Ghi lại kết quả benchmark, giải thích tại sao có sự khác biệt

**Bài 5 — Code Review Challenge (10 phút)**
Review đoạn code sau và refactor theo best practices đã học (type hints, error handling, project structure):

```python
import openai
def chat(msg):
    r = openai.ChatCompletion.create(model="gpt-4", messages=[{"role":"user","content":msg}])
    return r.choices[0].message.content
data = []
for i in range(100):
    data.append(i**2)
```

---

> **Bài tiếp theo:** [Bài 2: Machine Learning Pipeline — Từ Data đến Model](/series/ai-agent-engineer-tu-zero-den-production/bai-2-ml-pipeline-data-den-model) — Chúng ta sẽ build end-to-end ML pipeline với scikit-learn, XGBoost, và MLflow tracking.
