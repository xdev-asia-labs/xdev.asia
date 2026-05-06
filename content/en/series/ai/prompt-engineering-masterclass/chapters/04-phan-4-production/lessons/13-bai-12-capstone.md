---
id: 019c9619-ee12-7012-f012-ee1200000012
title: 'Lesson 12: Capstone — Building a Prompt Library for Businesses'
slug: bai-12-capstone
description: >-
  General project: building Prompt Library for businesses — registry,
  versioning, testing, A/B, deployment. Apply all the techniques from the
  previous 11 lessons.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: Production & Best Practices'
course:
  id: 019c9619-aa04-7004-b004-aa0400000004
  title: 'Prompt Engineering Masterclass: The Art of Giving Commands to AI'
  slug: prompt-engineering-masterclass
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4316" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4316)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1020" cy="210" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="130" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="110" x2="1100" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="140" x2="1050" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1031.650635094611,197.5 1031.650635094611,222.5 1010,235 988.349364905389,222.5 988.349364905389,197.5 1010,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Capstone — Build a Prompt Library</tspan>
      <tspan x="60" dy="42">Enterprise</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Prompt Engineering Masterclass: The Art of Giving Commands to AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Production & Best Practices</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This is a capstone lesson — a summary of **all** the techniques from the previous 11 lessons. You will build **Prompt Library for Enterprises**: a management, testing, deployment prompts system to serve many teams.

End product: a platform where the team can **browse prompts**, **edit**, **test**, **A/B test**, and **deploy** — all via UI or API.

```
┌─────────────────────────────────────────────┐
│           PROMPT LIBRARY PLATFORM           │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐  ┌──────────┐  ┌───────────┐  │
│  │ Registry │  │ Testing  │  │ A/B Test  │  │
│  │ (CRUD)   │  │ (Auto)   │  │ (Traffic) │  │
│  └────┬─────┘  └────┬─────┘  └─────┬─────┘  │
│       │              │              │        │
│  ┌────┴──────────────┴──────────────┴────┐  │
│  │         Prompt API Gateway            │  │
│  └───────────────────────────────────────┘  │
│       │                                      │
│  ┌────┴─────────────┐  ┌──────────────────┐ │
│  │ Version Control  │  │ Analytics &      │ │
│  │ (Git-backed)     │  │ Monitoring       │ │
│  └──────────────────┘  └──────────────────┘ │
└─────────────────────────────────────────────┘
```

---

## 1. Project Setup

### 1.1 Project structure

```
prompt-library/
├── api/
│   ├── main.py              # FastAPI app
│   ├── routes/
│   │   ├── prompts.py       # CRUD endpoints
│   │   ├── test.py          # Test endpoints
│   │   └── ab_test.py       # A/B testing endpoints
│   └── models.py            # Pydantic models
├── core/
│   ├── registry.py          # Prompt Registry
│   ├── renderer.py          # Template rendering
│   ├── tester.py            # Test runner
│   ├── ab_testing.py        # A/B test engine
│   └── deployer.py          # Canary deployer
├── prompts/                  # Prompt YAML files
│   ├── email-classifier/
│   ├── summarizer/
│   └── code-reviewer/
├── tests/
│   ├── golden/              # Golden datasets
│   └── test_prompts.py
├── dashboard/               # Streamlit dashboard
│   └── app.py
├── requirements.txt
└── README.md
```

### 1.2 Dependencies

```bash
pip install fastapi uvicorn pyyaml openai pydantic streamlit
pip install scipy pytest httpx  # Testing + stats
```

---

## 2. Core: Prompt Registry

### 2.1 Data Model

```python
"""core/registry.py — Prompt Registry"""
import yaml
from pathlib import Path
from datetime import datetime
from pydantic import BaseModel

class PromptMetadata(BaseModel):
    name: str
    version: str
    author: str
    created_at: datetime
    model: str
    temperature: float = 0
    max_tokens: int = 500
    description: str
    changelog: str = ""
    tags: list[str] = []

class PromptTemplate(BaseModel):
    system: str | None = None
    user: str

class PromptConfig(BaseModel):
    metadata: PromptMetadata
    prompt: PromptTemplate
    validation: dict = {}

class PromptRegistry:
    def __init__(self, base_dir: str = "prompts"):
        self.dir = Path(base_dir)
        self.dir.mkdir(exist_ok=True)

    def create(self, name: str, version: str, config: dict) -> Path:
        """Tạo prompt mới"""
        prompt_dir = self.dir / name
        prompt_dir.mkdir(exist_ok=True)

        path = prompt_dir / f"v{version}.yaml"
        if path.exists():
            raise FileExistsError(f"Version {version} already exists")

        with open(path, "w") as f:
            yaml.dump(config, f, allow_unicode=True, default_flow_style=False)

        return path

    def get(self, name: str, version: str = "latest") -> PromptConfig:
        """Load prompt"""
        prompt_dir = self.dir / name
        if not prompt_dir.exists():
            raise FileNotFoundError(f"Prompt '{name}' not found")

        if version == "latest":
            versions = sorted(prompt_dir.glob("v*.yaml"))
            path = versions[-1] if versions else None
        else:
            path = prompt_dir / f"v{version}.yaml"

        if not path or not path.exists():
            raise FileNotFoundError(f"Version {version} not found")

        with open(path) as f:
            data = yaml.safe_load(f)

        return PromptConfig(**data)

    def list_prompts(self) -> list[dict]:
        """Liệt kê tất cả prompts"""
        results = []
        for d in self.dir.iterdir():
            if d.is_dir():
                versions = sorted(d.glob("v*.yaml"))
                latest = versions[-1] if versions else None
                if latest:
                    with open(latest) as f:
                        data = yaml.safe_load(f)
                    results.append({
                        "name": d.name,
                        "versions": [v.stem for v in versions],
                        "latest": data["metadata"],
                    })
        return results

    def render(self, name: str, version: str = "latest",
               **variables) -> list[dict]:
        """Render prompt → API messages"""
        config = self.get(name, version)
        messages = []

        if config.prompt.system:
            messages.append({
                "role": "system",
                "content": config.prompt.system,
            })

        user_content = config.prompt.user
        for k, v in variables.items():
            user_content = user_content.replace(f"{{{{{k}}}}}", str(v))

        messages.append({"role": "user", "content": user_content})
        return messages
```

---

## 3. API Gateway

### 3.1 FastAPI Routes

```python
"""api/main.py — Prompt Library API"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from core.registry import PromptRegistry
from core.tester import PromptTester
from openai import OpenAI

app = FastAPI(title="Prompt Library API")
registry = PromptRegistry()
client = OpenAI()

class RunRequest(BaseModel):
    prompt_name: str
    version: str = "latest"
    variables: dict = {}

class RunResponse(BaseModel):
    output: str
    prompt_version: str
    model: str
    tokens_used: int
    latency_ms: float

@app.get("/prompts")
def list_prompts():
    """Liệt kê tất cả prompts"""
    return registry.list_prompts()

@app.get("/prompts/{name}")
def get_prompt(name: str, version: str = "latest"):
    """Lấy prompt detail"""
    try:
        config = registry.get(name, version)
        return config.model_dump()
    except FileNotFoundError:
        raise HTTPException(404, f"Prompt '{name}' not found")

@app.post("/prompts/{name}/run", response_model=RunResponse)
def run_prompt(name: str, req: RunRequest):
    """Chạy prompt với variables"""
    import time

    config = registry.get(name, req.version)
    messages = registry.render(name, req.version, **req.variables)

    start = time.time()
    response = client.chat.completions.create(
        model=config.metadata.model,
        messages=messages,
        temperature=config.metadata.temperature,
        max_tokens=config.metadata.max_tokens,
    )
    latency = (time.time() - start) * 1000

    return RunResponse(
        output=response.choices[0].message.content,
        prompt_version=config.metadata.version,
        model=config.metadata.model,
        tokens_used=response.usage.total_tokens,
        latency_ms=round(latency, 2),
    )

@app.get("/prompts/{name}/versions")
def list_versions(name: str):
    """Liệt kê versions"""
    return registry.list_versions(name)
```

---

## 4. Test Runner & Dashboard

### 4.1 Automated Test Runner

```python
"""core/tester.py — Prompt Test Runner"""
import json
from pathlib import Path

class PromptTester:
    def __init__(self, registry, client):
        self.registry = registry
        self.client = client

    def run_suite(self, name: str, version: str,
                  golden_path: str) -> dict:
        """Chạy test suite từ golden dataset"""
        with open(golden_path) as f:
            cases = json.load(f)

        results = {"passed": 0, "failed": 0, "details": []}

        for case in cases:
            messages = self.registry.render(name, version,
                                           **case["variables"])
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                temperature=0,
            )
            output = response.choices[0].message.content

            passed = self._check(output, case["expected"])
            results["passed" if passed else "failed"] += 1
            results["details"].append({
                "case_id": case["id"],
                "passed": passed,
                "output": output[:200],
            })

        total = results["passed"] + results["failed"]
        results["pass_rate"] = results["passed"] / total if total else 0
        return results

    def _check(self, output: str, expected: dict) -> bool:
        """Kiểm tra output vs expected"""
        try:
            data = json.loads(output)
            for key, value in expected.items():
                if key.endswith("_min"):
                    field = key.replace("_min", "")
                    if data.get(field, 0) < value:
                        return False
                elif data.get(key) != value:
                    return False
            return True
        except (json.JSONDecodeError, KeyError):
            return False
```

### 4.2 Streamlit Dashboard

```python
"""dashboard/app.py — Prompt Library Dashboard"""
import streamlit as st
import requests

API_URL = "http://localhost:8000"

st.set_page_config(page_title="Prompt Library", layout="wide")
st.title("Prompt Library Dashboard")

# Sidebar: danh sách prompts
prompts = requests.get(f"{API_URL}/prompts").json()
selected = st.sidebar.selectbox(
    "Chọn Prompt",
    [p["name"] for p in prompts],
)

if selected:
    detail = requests.get(f"{API_URL}/prompts/{selected}").json()

    col1, col2 = st.columns(2)

    with col1:
        st.subheader("Prompt Info")
        st.json(detail["metadata"])

        st.subheader("Template")
        if detail["prompt"].get("system"):
            st.code(detail["prompt"]["system"], language="text")
        st.code(detail["prompt"]["user"], language="text")

    with col2:
        st.subheader("Test Prompt")
        user_input = st.text_area("Input:", height=100)

        if st.button("Run"):
            result = requests.post(
                f"{API_URL}/prompts/{selected}/run",
                json={"prompt_name": selected, "variables": {"input": user_input}},
            ).json()

            st.success(f"Latency: {result['latency_ms']}ms | "
                      f"Tokens: {result['tokens_used']}")
            st.markdown(result["output"])
```

---

## 5. Checklist completed

```
□ Registry: CRUD prompts, versioning, rendering
□ API: FastAPI endpoints (list, get, run, test)
□ Test Runner: golden dataset, pass rate calculation
□ A/B Testing: traffic split, logging, significance test
□ Dashboard: Streamlit UI (browse, test, results)
□ CI/CD: GitHub Actions (lint, test, deploy)
□ Canary: gradual rollout, auto-rollback

Bonus:
□ Multi-model support (GPT-4o, Claude, Gemini)
□ Cost tracking per prompt per month
□ Team permissions (viewer, editor, admin)
□ Prompt sharing marketplace
```

---

## Summary

| Modules | Applied techniques | Reference article |
|--------|-------------------|--------------|
| **Registry** | YAML + Pydantic + caching | Lesson 11 |
| **Rendering** | Template variables, system+user | Lesson 1-3 |
| **Test Runner** | Golden dataset, assertions | Lesson 10 |
| **A/B Testing** | Traffic split, t-test | Lesson 11 |
| **API** | FastAPI, structured output | Lesson 6 |
| **Dashboard** | Streamlit visualization | Lesson 8 |
| **CI/CD** | GitHub Actions pipeline | Lesson 11 |

## Summary exercises (Capstone Project)

1. **MVP (2-3 hours):** Registry + API + 3 prompts + golden tests. Run `uvicorn api.main:app` and test with curl/httpx.
2. **Full (1-2 days):** Add A/B testing, Streamlit dashboard, CI/CD pipeline. Deploy locally or on VPS.
3. **Production (1 week):** Add authentication, cost tracking, team management, canary deployment. Deploy on cloud (fly.io or Railway).
4. **Presentation:** Record a 5-minute demo video: create prompt → edit → test → A/B test → deploy. Share with team/community.

> **Congratulations!** You have completed the Prompt Engineering Masterclass. You can apply all these techniques to real projects today.
