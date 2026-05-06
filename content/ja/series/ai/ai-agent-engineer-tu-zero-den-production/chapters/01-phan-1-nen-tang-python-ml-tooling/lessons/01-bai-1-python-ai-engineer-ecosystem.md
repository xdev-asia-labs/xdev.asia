---
id: 019e0a01-bb01-7001-c001-ee0100000001
title: 'レッスン 1: AI エンジニアのための Python — エコシステムとベスト プラクティス'
slug: bai-1-python-ai-engineer-ecosystem
description: >-
  AI 用の Python エコシステム: NumPy、Pandas、scikit-learn。仮想環境、依存関係の管理。 ML プロジェクトのコーディング
  パターン。タイプヒント、テスト、実稼働標準プロジェクト構造。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: 基礎 — Python、ML、AI ツール'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **AI/ML 制作プロジェクトの 95% は Python で実行されています。** Python が最速だからではなく、そのエコシステムが比類のないものだからです。この記事は、環境をセットアップし、ツールをマスターし、すべての AI エンジニアが必要とする運用標準の Python コードを作成するのに役立ちます。

## 1. Python が AI/ML を支配する理由

Python は最速の言語ではありません。それは最も「美しい」言語でもありません。しかし、AI/ML では次の 3 つの理由から絶対に勝利します。

**最初 — 巨大なエコシステム。** データ処理 (Pandas、Polars) からディープ ラーニング (PyTorch、TensorFlow)、NLP (Hugging Face) から AI エージェント (LangChain、CrewAI) まで、すべて Python ファーストです。

**2 番目 — Glue 言語は完璧です。** Python は C/C++/Rust を階下で呼び出します (NumPy、PyTorch はどちらも C++ で書かれています)。そのため、コードはシンプルですが、パフォーマンスは依然として高いです。

**3 番目 — コミュニティ。** Stack Overflow、GitHub、Hugging Face Hub — ほとんどのチュートリアル、ペーパー実装、事前トレーニング済みモデルは、最初に Python でリリースされます。

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

＃＃＃１．１． Python のバージョン — 何を選択するか?

常に **Python 3.11+** を使用してください。理由:

|バージョン |ステータス |メモ |
|----------|----------|----------|
| 3.9 |メンテナンス |まだサポートされていますが、新機能はありません |
| 3.10 |メンテナンス | `match/case` 構文、良いです |
| **3.11** | **推奨** | **10 ～ 60% 高速**、例外グループ |
| 3.12 |現在 |インタプリタごとの GIL (実験的) |
| 3.13 |最新 |フリースレッド モード (GIL なし実験的) |

> **実用的なヒント:** 多くの AI ライブラリ (PyTorch、TensorFlow) は、最新バージョンのサポートが遅いことがよくあります。アップグレードする前に互換性を確認してください。 Python 3.11 が現在のスイートスポットです。

## 2. エコシステムの概要 — AI エンジニア ツールキット

＃＃＃２．１．データ処理 — NumPy と Pandas

**NumPy** はすべての基盤です。すべての ML ライブラリは NumPy 配列上に構築されています。

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

表形式データの場合は **Pandas**。これは、すべての EDA およびデータ前処理ステップで使用します。

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

> **ヒント:** データが 1GB を超える場合は、**Polars** を検討してください。Pandas に似た API ですが、Rust バックエンドと遅延評価のおかげで 10 ～ 100 倍高速です。

＃＃＃２．２．機械学習 — scikit-learn

**scikit-learn** は従来の ML の標準です。非常に一貫性のある API: `fit()` → `predict()` → `score()`。

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

＃＃＃２．３．ディープラーニング — PyTorch

**PyTorch** は DL フレームワーク戦争に勝利しました。ほとんどの新しい論文、Hugging Face モデルは PyTorch を使用します。

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

＃＃＃２．４． LLM と NLP — ハグフェイス

**Hugging Face Transformers** は、LLM の世界への入り口です。このシリーズではよく使います。

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

＃＃＃２．５。生態系概要表

|カテゴリー |図書館 |使用例 |いつ使用するか |
|----------|----------|----------|---------------|
|配列 |ナムピ |数値計算 |いつでも — プラットフォーム |
|データフレーム |パンダ / 北極星 |表形式のデータ | EDA、前処理 |
|ビジュアライゼーション | Matplotlib / プロットリー |チャート | EDA、レポート |
| ML | scikit-learn |従来の ML |分類、回帰 |
| DL |パイトーチ |ディープラーニング |ニューラル ネットワーク、LLM |
| NLP |顔を抱きしめる | LLM、埋め込み | NLP タスク、微調整 |
| AIエージェント |ラングチェーン / CrewAI |エージェントシステム | RAG、ツール呼び出し |
| API |ファストAPI | REST API |モデル提供 |
|実験 | MLflow / W&B |追跡 |トレーニング実験 |

## 3. Python 環境管理

これは多くの人が見落としている部分であり、「私のマシンでは動作する」バグという代償を払っています。

＃＃＃３．１．ツールの比較

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

|ツール |スピード |ロックファイル | Python バージョン管理 |こんな方に最適 |
|----------|----------|----------|---------------------|----------|
| **venv + pip** |平均 |いいえ |いいえ |初心者、簡単なスクリプト |
| **コンダ** |遅い |環境.yml | ✅ はい |データサイエンス、CUDA |
| **詩** |平均 | ✅ 詩.ロック |いいえ | Python パッケージ |
| **UV** | ⚡ 非常に速い | ✅ uv.ロック | ✅ はい | **推奨 2025+** |

＃＃＃３．２． UV を使用したワークフロー (推奨)

**uv** は、pip、venv、pip-tools、さらには pyenv を置き換えます。 Rust で書かれており、pip よりも 10 ～ 100 倍高速です。

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

＃＃＃３．３． venv + pip を使用したワークフロー (クラシック)

UV に詳しくない場合でも、小規模なプロジェクトには venv が適しています。

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

> **黄金律:** 決してしない `pip install` システムPythonに。常に仮想環境を使用してください。

## 4. ML/AI の標準プロジェクト構造

ML コードをノートブックに放置しないでください。これは製品の標準構造です。

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

> **重要な洞察:** 内部コード `src/` インポート可能なパッケージです。ノートは探索のためにのみ使用されます。製品コードがノートブックに常駐することはありません。

## 5. AI エンジニアのためのコーディング パターン

＃＃＃５．１．タイプヒント — オプションではなくなりました

型ヒントは、IDE のオートコンプリート、バグの早期発見、コードの自己文書化に役立ちます。

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

＃＃＃５．２． Pydantic 設定による構成管理

API キーやハイパーパラメータをハードコーディングしないでください。 **pydantic-settings** を使用して構成を管理します。

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

＃＃＃５．３．エラー処理パターン

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

## 6. AI コードのテスト

＃＃＃６．１． pytestの基本

AI コードのテストは、Web アプリのテストとは異なります。出力は決定的ではなく、モデルの読み込みは遅く、API 呼び出しは高価です。

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

＃＃＃６．２． ML パイプラインのテスト

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

＃＃＃６．３． API呼び出しのモック化

テストでは実際の OpenAI API を呼び出さないでください。モックの使用:

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

## 7. パフォーマンスのヒント

＃＃＃７．１．ベクトル化 — 常に NumPy 操作を使用する

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

＃＃＃７．２． API呼び出しの非同期I/O

複数の LLM API 呼び出しを呼び出す場合は、async を使用して並列化します。

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

＃＃＃７．３．プロファイリング — ボトルネックを見つける

```python
# Dùng cProfile cho function-level profiling
import cProfile

cProfile.run("train_model(X_train, y_train)", sort="cumulative")

# Hoặc line_profiler cho line-by-line
# pip install line_profiler
# Thêm @profile decorator rồi chạy:
# kernprof -l -v train.py
```

＃＃＃７．４．パフォーマンスのヒント表

|問題 |ソリューション |スピードアップ |
|----------|----------|----------|
|配列に対する Python ループ | NumPy のベクトル化 | 50～100倍 |
|複数の連続した API 呼び出し | `asyncio.gather()` | 5～20倍 |
|リクエストごとにモデルをロード |モデルをグローバルにキャッシュ | 10～100倍 |
|大規模なデータフレーム操作 |北極星がパンダに取って代わる | 5～50倍 |
|ループ内の文字列連結 | `"".join()` または f 文字列 | 2～5倍 |
|ボトルネックがどこにあるのかわからない | `cProfile` + `line_profiler` | — |

## 8. ツール — リンティングとフォーマット

**Ruff** — Python 用のオールインワン リンター + フォーマッタを使用します。 flake8 + black + isort よりも 100 倍高速です。

```bash
# Install
uv add --dev ruff

# Format code
ruff format .

# Lint + autofix
ruff check --fix .
```

構成の追加 `pyproject.toml`:

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

## 概要

この記事を読み終えると、次のことが理解できるようになります。

- ✅ **AI 用の Python エコシステム** — スタックにおける NumPy、Pandas、scikit-learn、PyTorch、Hugging Face の役割を理解する
- ✅ **環境管理** — uv (または venv) を使用してプロジェクトを適切にセットアップし、システム Python は決して使用しないでください。
- ✅ **プロジェクト構造標準** — 実稼働標準に従って ML/AI コードを編成する `src/`、 `tests/`、 `notebooks/`
- ✅ **型ヒントとデータクラス** — 型注釈を付けて、読みやすく保守しやすい Python コードを作成します。
- ✅ **構成管理** — pydantic-settings を使用して API キーとハイパーパラメーターを管理します
- ✅ **パターンのテスト** — pytest、フィクスチャ、API 呼び出しのモックを使用して AI コードをテストします
- ✅ **パフォーマンス** — ベクトル化、非同期 I/O、プロファイリング
- ✅ **ツール** — リンティング/フォーマット用の Ruff、型チェック用の mypy

```text
┌─────────────────────────────────────────────┐
│         AI Engineer Python Workflow          │
│                                             │
│   uv init → uv add → code (src/) →         │
│   ruff format → mypy check →               │
│   pytest → uv run train.py → ship 🚀       │
└─────────────────────────────────────────────┘
```

## 演習

**レッスン 1 — プロジェクトのセットアップ (30 分)**
AI プロジェクトをゼロから作成する `uv`:
- プロジェクトの初期化、NumPy、Pandas、scikit-learn、pytest のインストール
- セクション 4 のテンプレートに従ってプロジェクト構造を作成します。
- 書く `config.py` 少なくとも 5 つの設定を持つ pydantic-settings を使用します
- 走る `ruff check` そして `mypy` — すべてのエラーを修正します

**レッスン 2 — データ パイプライン (30 分)**
完全なデータ前処理モジュールを作成します。
- Pandasを使用してCSVデータをロードします
- 欠損値の処理、カテゴリ特徴のエンコード
- 数値特徴を正規化する
- スプリットトレイン/テスト
- このモジュールに対して少なくとも 3 つの単体テストを作成します

**レッスン 3 — 非同期 API クライアント (30 分)**
LLM API の非同期クライアントを構築します。
- 使用する `httpx.AsyncClient` APIを呼び出す
- 指数バックオフを使用した再試行ロジックの実装
- レート制限の実装 (最大 10 リクエスト/秒)
- モックを使用してテストを作成します (実際の API を呼び出しません)

**レッスン 4 — パフォーマンス ベンチマーク (20 分)**
以下のパフォーマンスを比較します。
- 1M 要素の Python ループと NumPy ベクトル化
- 100K 行のデータフレームでの Pandas と Polars
- 10 個の HTTP リクエストのシーケンシャルと非同期
- ベンチマーク結果を記録し、違いがある理由を説明します

**レッスン 5 — コード レビュー チャレンジ (10 分)**
次のコードを確認し、学んだベスト プラクティス (型ヒント、エラー処理、プロジェクト構造) に従ってリファクタリングします。

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

> **次の記事:** [レッスン 2: 機械学習パイプライン — データからモデルまで](/series/ai-agent-engineer-tu-zero-den-production/bai-2-ml-pipeline-data-den-model) — scikit-learn、XGBoost、MLflow トラッキングを使用してエンドツーエンドの ML パイプラインを構築します。
