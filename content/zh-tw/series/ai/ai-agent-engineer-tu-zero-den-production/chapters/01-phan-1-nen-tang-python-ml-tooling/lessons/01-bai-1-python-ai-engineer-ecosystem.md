---
id: 019e0a01-bb01-7001-c001-ee0100000001
title: 第 1 課： AI 工程師的 Python — 生態系統和最佳實踐
slug: bai-1-python-ai-engineer-ecosystem
description: >-
  AI 的 Python 生態系：NumPy、Pandas、scikit-learn。虛擬環境、依賴管理。 ML
  項目的編碼模式。類型提示、測試、生產標準項目結構。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：基礎 — Python、ML 與 AI 工具
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **95% 的 AI/ML 生產專案在 Python 上運作。 ** 不是因為 Python 是最快的，而是因為它的生態系統是無與倫比的。本文將協助您設定環境、掌握工具並編寫每個 AI 工程師所需的生產標準 Python 程式碼。

## 1. 為什麼 Python 主導 AI/ML

Python 不是最快的語言。它也不是最「美麗」的語言。但它在 AI/ML 領域絕對獲勝，原因有 3 個：

**第一名－龐大的生態系。 **从数据处理（Pandas、Polars）到深度学习（PyTorch、TensorFlow），从 NLP（Hugging Face）到 AI Agent（LangChain、CrewAI）——全部都是 Python 优先。

**第二名－Glue語言很完美。 ** Python呼叫樓下的C/C++/Rust（NumPy、PyTorch都是用C++寫的），所以你的程式碼很簡單，但效能還是很高。

**第三——社區。 ** Stack Overflow、GitHub、Hugging Face Hub——大多數教程、論文實作、預訓練模型先以 Python 發布。

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

### 1.1。 Python版本－選擇什麼？

始終使用 **Python 3.11+**。原因：

|版本 |狀態 |筆記|
|--------|--------|--------|
| 3.9 | 3.9保養|仍受支持，但缺乏新功能 |
| 3.10 | 3.10保養| `match/case` 文法，好|
| **3.11** | **推薦** | **快 10-60%**，例外群體 |
| 3.12 | 3.12目前|每個解譯器 GIL（實驗）|
| 3.13 |最新 |自由線程模式（無 GIL 實驗）|

> **實用提示：** 許多 AI 庫（PyTorch、TensorFlow）通常支援最新版本的速度很慢。升級前檢查相容性。 Python 3.11 是目前的最佳選擇。

## 2. 生態系概述 — AI 工程師工具包

### 2.1。資料處理——NumPy 和 Pandas

**NumPy** 是一切的基礎。所有 ML 庫都是基於 NumPy 數組建構的。

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

**Pandas** 用於表格資料。您將在每個 EDA 和資料預處理步驟中使用它。

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

> **提示：** 如果数据 > 1GB，请考虑 **Polars** — API 类似于 Pandas，但由于 Rust 后端和惰性求值，速度提高了 10-100 倍。

### 2.2。機器學習——scikit-learn

**scikit-learn** 是傳統機器學習的標準。極為一致的 API： `fit()` → `predict()` → `score()`。

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

### 2.3。深度學習——PyTorch

**PyTorch** 贏得了深度學習框架之戰。大多數新論文 Hugging Face 模型都使用 PyTorch。

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

### 2.4。 LLM & NLP — 擁抱臉

**擁抱臉部變形金剛**是通往法學碩士世界的大門。在本系列中您將大量使用它。

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

### 2.5。生態系總表

|類別 |圖書館 |使用案例|何時使用 |
|----------|--------|----------|------------|
|陣列 | NumPy |數值計算|隨時—平台|
|資料框|熊貓 / 北極熊 |表格資料| EDA、預處理|
|可視化| Matplotlib / 繪圖 |圖表| EDA、報告 |
|機器學習 | scikit 學習 |傳統機器學習 |分類、回歸 |
| DL | PyTorch |深度學習 |神經網絡，法學碩士 |
|自然語言處理 |擁抱臉| LLM，嵌入 | NLP 任務，微調 |
|人工智慧代理 |浪鏈/CrewAI |代理系統| RAG，工具呼叫|
|應用程式介面 |快速API | REST API |模特兒服務|
|實驗| MLflow / W＆B |追蹤 |訓練實驗|

## 3.Python環境管理

這是許多人忽略的部分，並且付出了「在我的機器上運行」錯誤的代價。

### 3.1。比較工具

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

|工具|速度|鎖定檔案 | Python 版本管理 |最適合 |
|--------|--------|----------|---------------------|----------|
| **venv + 點** |平均 |沒有 |沒有 |初學者，快速腳本 |
| **康達** |慢|環境.yml | ✅ 是的 |資料科學、CUDA |
| **詩歌** |平均 | ✅ 詩.鎖 |沒有 | Python 包 |
| **紫外線** | ⚡ 非常快| ✅ 紫外線鎖定 | ✅ 是的 | **建議超過 2025 年** |

### 3.2。使用 uv 的工作流程（建議）

**uv** 正在取代 pip、venv、pip-tools，甚至 pyenv。用 Rust 寫，比 pip 快 10-100 倍。

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

### 3.3。 venv + pip 的工作流程（經典）

如果您不熟悉 uv，對於小型專案 venv 仍然沒問題：

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

> **黃金法則：** 絕不 `pip install` 進入系統Python。始終使用虛擬環境。

## 4. ML/AI 的標準專案結構

不要將機器學習代碼留在筆記本中。這是生產標準結構：

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

> **關鍵見解：** 內部程式碼 `src/` 是一個可導入的套件。筆記本僅用於探索。生產代碼永遠不會駐留在筆記本中。

## 5. AI 工程師的程式設計模式

### 5.1。類型提示－不再是可選的

類型提示有助於 IDE 自動完成、儘早發現錯誤並進行程式碼自記錄。

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

### 5.2。使用 Pydantic 設定進行設定管理

不要對 API 金鑰或超參數進行硬編碼。使用 **pydantic-settings** 來管理設定：

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

### 5.3。錯誤處理模式

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

## 6. AI 程式碼測試

### 6.1。 pytest基礎知識

測試 AI 程式碼與測試 Web 應用程式不同。輸出不確定、模型載入緩慢、API 呼叫成本高昂。

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

### 6.2。測試機器學習管道

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

### 6.3。模擬 API 呼叫

測試中不要呼叫實際的OpenAI API。使用模擬：

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

## 7. 效能提示

### 7.1。向量化－始終使用 NumPy 運算

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

### 7.2。 API 呼叫的非同步 I/O

當呼叫多個LLM API呼叫時，使用async來並行化：

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

### 7.3。分析——找出瓶頸

```python
# Dùng cProfile cho function-level profiling
import cProfile

cProfile.run("train_model(X_train, y_train)", sort="cumulative")

# Hoặc line_profiler cho line-by-line
# pip install line_profiler
# Thêm @profile decorator rồi chạy:
# kernprof -l -v train.py
```

### 7.4。效能提示表

|問題 |解決方案 |加速|
|--------|------------|---------|
| Python 數組循環 | NumPy 向量化 | 50-100 倍 |
|多個連續 API 呼叫 | `asyncio.gather()` | 5-20 倍 |
|根據請求載入模型 |全域快取模型 | 10-100 倍 |
|大型 DataFrame 操作 |北極熊取代熊貓| 5-50 倍 |
|循環中的字串連接 | `"".join()` 或 f 字串 | 2-5 倍 |
|不知道瓶頸在哪裡 | `cProfile` + `line_profiler` | — |

## 8. 工具 — Linting 和格式

使用 **Ruff** — 適用於 Python 的一體化 linter + 格式化程式。比 flake8 + black + isort 快 100 倍。

```bash
# Install
uv add --dev ruff

# Format code
ruff format .

# Lint + autofix
ruff check --fix .
```

新增配置 `pyproject.toml`:

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

## 總結

讀完本文，您將了解：

- ✅ **AI 的 Python 生態系統** — 了解 NumPy、Pandas、scikit-learn、PyTorch、Hugging Face 在堆疊中的作用
- ✅ **環境管理** — 正確使用 uv（或 venv）設定項目，切勿使用系統 Python
- ✅ **專案結構標準** — 根據生產標準組織 ML/AI 程式碼 `src/`, `tests/`, `notebooks/`
- ✅ **類型提示與資料類別** — 使用型別註解編寫可讀、可維護的 Python 程式碼
- ✅ **設定管理** — 使用 pydantic-settings 來管理 API 金鑰和超參數
- ✅ **測試模式** — 使用 pytest、fixtures、mocking API 呼叫來測試 AI 程式碼
- ✅ **效能** — 向量化、非同步 I/O、分析
- ✅ **工具** - Ruff 用於 linting/formatting，mypy 用於類型檢查

```text
┌─────────────────────────────────────────────┐
│         AI Engineer Python Workflow          │
│                                             │
│   uv init → uv add → code (src/) →         │
│   ruff format → mypy check →               │
│   pytest → uv run train.py → ship 🚀       │
└─────────────────────────────────────────────┘
```

## 練習

**第 1 課 — 設定項目（30 分鐘）**
從頭開始創建一個 AI 項目 `uv`:
- 初始化項目，安裝NumPy、Pandas、scikit-learn、pytest
- 根據第 4 節中的範本建立專案結構
- 寫 `config.py` 使用至少 5 個設定的 pydantic-settings
- 運行 `ruff check` 和 `mypy` — 修復所有錯誤

**第 2 課 — 資料管道（30 分鐘）**
編寫一個完整的資料預處理模組：
- 使用 Pandas 載入 CSV 數據
- 處理缺失值，編碼分類特徵
- 標準化數值特徵
- 分開訓練/測試
- 為此模組編寫至少 3 個單元測試

**第 3 課 — 非同步 API 用戶端（30 分鐘）**
為 LLM API 建立非同步客戶端：
- 使用 `httpx.AsyncClient` 呼叫API
- 使用指數退避實現重試邏輯
- 實施速率限制（每秒最多 10 個請求）
- 使用模擬編寫測試（不呼叫真實的 API）

**第 4 課 — 性能基準（20 分鐘）**
比較以下各項之間的性能：
- 1M 元素上的 Python 循環與 NumPy 向量化
- 10 萬行 DataFrame 上的 Pandas 與 Polars
- 10 個 HTTP 請求的順序與非同步
- 記錄基準測試結果，解釋為什麼會有差異

**第 5 課 — 程式碼審查挑戰（10 分鐘）**
查看以下程式碼並根據學到的最佳實踐（類型提示、錯誤處理、專案結構）進行重構：

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

> **下一篇文章：** [第 2 課：機器學習流程 — 從資料到模型](/series/ai-agent-engineer-tu-zero-den-production/bai-2-ml-pipeline-data-den-model) — 我們將使用 scikit-learn、XGBoost 和 MLflow 追蹤建置端對端 ML 管道。
