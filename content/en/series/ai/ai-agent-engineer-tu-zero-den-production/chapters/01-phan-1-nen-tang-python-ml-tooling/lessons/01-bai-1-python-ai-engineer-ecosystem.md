---
id: 019e0a01-bb01-7001-c001-ee0100000001
title: 'Lesson 1: Python for AI Engineers — Ecosystem & Best Practices'
slug: bai-1-python-ai-engineer-ecosystem
description: >-
  Python ecosystem for AI: NumPy, Pandas, scikit-learn. Virtual environments,
  dependency management. Coding patterns for ML projects. Type hints, testing,
  production standard project structure.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Foundation — Python, ML & AI Tooling'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> **95% of AI/ML production projects run on Python.** Not because Python is the fastest — but because its ecosystem is unrivaled. This article will help you set up the environment, master tooling, and write production-standard Python code that every AI Engineer needs.

## 1. Why Python dominates AI/ML

Python is not the fastest language. Nor is it the most "beautiful" language. But it absolutely wins in AI/ML for 3 reasons:

**First — Huge Ecosystem.** From data processing (Pandas, Polars) to deep learning (PyTorch, TensorFlow), from NLP (Hugging Face) to AI Agent (LangChain, CrewAI) — all Python-first.

**Second — Glue language is perfect.** Python calls C/C++/Rust downstairs (NumPy, PyTorch are both written in C++), so your code is simple but performance is still high.

**Third — Community.** Stack Overflow, GitHub, Hugging Face Hub — most tutorials, paper implementation, pretrained models are released in Python first.

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

### 1.1. Python version — What to choose?

Always use **Python 3.11+**. Reason:

| Version | Status | Notes |
|--------|--------|--------|
| 3.9 | Maintenance | Still supported, but lacks new features |
| 3.10 | Maintenance | `match/case` syntax, good |
| **3.11** | **Recommended** | **10-60% faster**, exception groups |
| 3.12 | Current | Per-interpreter GIL (experimental) |
| 3.13 | Latest | Free-threaded mode (no-GIL experimental) |

> **Practical tip:** Many AI libraries (PyTorch, TensorFlow) are often slow to support the latest versions. Check compatibility before upgrading. Python 3.11 is the current sweet spot.

## 2. Ecosystem Overview — AI Engineer Toolkit

### 2.1. Data Processing — NumPy & Pandas

**NumPy** is the foundation of everything. All ML libraries are built on NumPy arrays.

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

**Pandas** for tabular data. You will use it in every EDA and data preprocessing step.

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

> **Tip:** If data > 1GB, consider **Polars** — API similar to Pandas but 10-100x faster thanks to Rust backend and lazy evaluation.

### 2.2. Machine Learning — scikit-learn

**scikit-learn** is the standard for traditional ML. Extremely consistent API: `fit()` → `predict()` → `score()`.

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

**PyTorch** has won the DL framework war. Most new papers, Hugging Face models use PyTorch.

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

**Hugging Face Transformers** is the gateway to the world of LLM. You will use it a lot in this series.

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

### 2.5. Ecosystem summary table

| Category | Library | Use Case | When to use |
|----------|--------|----------|-------------|
| Array | NumPy | Numerical computing | Anytime — platform |
| DataFrame | Pandas / Polars | Tabular data | EDA, preprocessing |
| Visualization | Matplotlib / Plotly | Charts | EDA, reporting |
| ML | scikit-learn | Traditional ML | Classification, regression |
| DL | PyTorch | Deep learning | Neural networks, LLM |
| NLP | Hugging Face | LLM, embeddings | NLP tasks, fine-tuning |
| AI Agents | LangChain / CrewAI | Agent systems | RAG, tool calling |
| API | FastAPI | REST APIs | Model serving |
| Experiment | MLflow / W&B | Tracking | Training experiments |

## 3. Python Environment Management

This is the part many people overlook — and pay the price in "works on my machine" bugs.

### 3.1. Compare tools

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

| Tools | Speed ​​| Lockfile | Python version mgmt | Best for |
|-------|-------|----------|---------------------|----------|
| **venv + pip** | Average | No | No | Beginners, quick scripts |
| **conda** | Slow | environment.yml | ✅ Yes | Data science, CUDA |
| **poetry** | Average | ✅ poetry.lock | No | Python packages |
| **uv** | ⚡ Very fast | ✅ uv.lock | ✅ Yes | **Recommended 2025+** |

### 3.2. Workflow with uv (Recommended)

**uv** is replacing pip, venv, pip-tools, and even pyenv. Written in Rust, 10-100x faster than pip.

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

### 3.3. Workflow with venv + pip (Classic)

If you are not familiar with uv, venv is still fine for small projects:

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

> **Golden Rule:** Never `pip install` into system Python. Always use virtual environments.

## 4. Standard Project Structure for ML/AI

Don't leave ML code lying around in your notebook. This is the production standard structure:

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

> **Key insight:** Internal code `src/` is an importable package. Notebooks are only used for exploration. Production code never resides in the notebook.

## 5. Coding Patterns for AI Engineers

### 5.1. Type Hints — No longer optional

Type hints help the IDE autocomplete, catch bugs early, and do code self-documenting.

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

### 5.2. Configuration Management with Pydantic Settings

Do not hardcode API keys or hyperparameters. Use **pydantic-settings** to manage config:

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

## 6. Testing for AI Code

### 6.1. pytest Basics

Testing AI code is different from testing web app. Output is not deterministic, model loads slowly, API calls are expensive.

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

Do not call the actual OpenAI API in the test. Using mocks:

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

### 7.1. Vectorization — Always use NumPy operations

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

### 7.2. Async I/O for API Calls

When calling multiple LLM API calls, use async to parallelize:

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

### 7.3. Profiling — Find bottlenecks

```python
# Dùng cProfile cho function-level profiling
import cProfile

cProfile.run("train_model(X_train, y_train)", sort="cumulative")

# Hoặc line_profiler cho line-by-line
# pip install line_profiler
# Thêm @profile decorator rồi chạy:
# kernprof -l -v train.py
```

### 7.4. Performance Tips table

| Problem | Solution | Speedup |
|--------|-----------|---------|
| Python loop on arrays | NumPy vectorization | 50-100x |
| Multiple sequential API calls | `asyncio.gather()` | 5-20x |
| Load model per request | Cache model globally | 10-100x |
| Large DataFrame operations | Polars replace Pandas | 5-50x |
| String concatenation in loop | `"".join()` or f-string | 2-5x |
| Don't know where the bottleneck is | `cProfile` + `line_profiler` | — |

## 8. Tooling — Linting & Formatting

Use **Ruff** — all-in-one linter + formatter for Python. 100x faster than flake8 + black + isort.

```bash
# Install
uv add --dev ruff

# Format code
ruff format .

# Lint + autofix
ruff check --fix .
```

Add config `pyproject.toml`:

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

## Summary

After this article, you will understand:

- ✅ **Python ecosystem for AI** — understand the role of NumPy, Pandas, scikit-learn, PyTorch, Hugging Face in the stack
- ✅ **Environment management** — setup project with uv (or venv) properly, never use system Python
- ✅ **Project structure standard** — organize ML/AI code according to production standards `src/`, `tests/`, `notebooks/`
- ✅ **Type hints & dataclasses** — write readable, maintainable Python code with type annotations
- ✅ **Configuration management** — use pydantic-settings to manage API keys and hyperparameters
- ✅ **Testing patterns** — test AI code with pytest, fixtures, mocking API calls
- ✅ **Performance** — vectorization, async I/O, profiling
- ✅ **Tooling** — Ruff for linting/formatting, mypy for type checking

```text
┌─────────────────────────────────────────────┐
│         AI Engineer Python Workflow          │
│                                             │
│   uv init → uv add → code (src/) →         │
│   ruff format → mypy check →               │
│   pytest → uv run train.py → ship 🚀       │
└─────────────────────────────────────────────┘
```

## Exercises

**Lesson 1 — Setup Project (30 minutes)**
Create an AI project from scratch with `uv`:
- Init project, install NumPy, Pandas, scikit-learn, pytest
- Create project structure according to the template in Section 4
- Write `config.py` Use pydantic-settings with at least 5 settings
- Run `ruff check` and `mypy` — fix all errors

**Lesson 2 — Data Pipeline (30 minutes)**
Write a complete data preprocessing module:
- Load CSV data using Pandas
- Handle missing values, encode categorical features
- Normalize numerical features
- Split train/test
- Write at least 3 unit tests for this module

**Lesson 3 — Async API Client (30 minutes)**
Build an async client for an LLM API:
- Use `httpx.AsyncClient` call API
- Implement retry logic with exponential backoff
- Implement rate limiting (max 10 requests/second)
- Write tests using mocks (not calling real APIs)

**Lesson 4 — Performance Benchmark (20 minutes)**
Compare performance between:
- Python loop vs NumPy vectorization on 1M elements
- Pandas vs Polars on a 100K rows DataFrame
- Sequential vs Async for 10 HTTP requests
- Record benchmark results, explain why there are differences

**Lesson 5 — Code Review Challenge (10 minutes)**
Review the following code and refactor according to the best practices learned (type hints, error handling, project structure):

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

> **Next article:** [Lesson 2: Machine Learning Pipeline — From Data to Model](/series/ai-agent-engineer-tu-zero-den-production/bai-2-ml-pipeline-data-den-model) — We will build end-to-end ML pipeline with scikit-learn, XGBoost, and MLflow tracking.
