---
id: 019d8b39-bb02-7002-c002-ee0200000002
title: 'Lesson 2: Set up a production standard ML learning environment'
slug: bai-2-setup-moi-truong-ml
description: >-
  Install Python, Jupyter, VS Code, NumPy/Pandas/scikit-learn; create project
  templates, manage dependencies and notebook workflows.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 0: Getting started for newbies (Week 0)'
course:
  id: 019d8b39-aa01-7001-b001-ff1000000001
  title: 'Machine Learning: From Basics to Advanced'
  slug: machine-learning-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4723" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4723)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="133" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="254" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="115" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="236" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="97" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.9089653438086,124 975.9089653438086,162 943,181 910.0910346561914,162 910.0910346561914,124.00000000000001 943,105" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Set up a standard ML learning environment</tspan>
      <tspan x="60" dy="42">production. production</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Machine Learning: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 0: Getting started for newbies (Week 0)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

People new to ML often spend a lot of time because of the messy installation environment: many versions of Python, notebooks that work today but fail tomorrow, packages installed haphazardly, project files with no structure. This article helps you build a stable learning and working environment so that from the next lesson you can only focus on learning ML instead of fixing installation errors.

## Lesson objectives

- Install a clean Python environment for ML
- Know how to organize project folders to learn and reuse code
- Run first notebook with NumPy, Pandas and scikit-learn

## 1. Which Python version to choose?

**Python 3.11** is recommended.

Reason:

- Most popular ML libraries support it well.
- Faster and more stable than 3.9/3.10.
- Less risk of incompatibility than newer versions.

Check version:

```bash
python --version
python3 --version
```

## 2. Use venv or Conda?

For newbies, there are two popular options:

### `venv`

Advantages:

- Available in Python.
- Light, simple.

Disadvantages:

- Less convenient when working with packages with complex native dependencies.

### Conda / Miniconda

Advantages:

- Good environment management for data/ML.
- Easier to install scientific package.

Disadvantages:

- Slightly heavier.

In this course, if you are completely new, you can use it `venv`. If you plan on deep learning long term, maybe switch to Conda.

## 3. Create the first project

For example with `venv`:

```bash
mkdir ml-course
cd ml-course

python -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install numpy pandas scikit-learn matplotlib jupyter
```

On Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

## 4. Suggested folder structure

```text
ml-course/
├── notebooks/
├── data/
│   ├── raw/
│   └── processed/
├── src/
│   ├── features/
│   ├── models/
│   └── utils/
├── outputs/
│   ├── figures/
│   └── models/
├── requirements.txt
└── README.md
```

Meaning:

- `notebooks/`: a place to experiment and learn.
- `data/raw/`: original data, not edited directly.
- `data/processed/`: cleaned data.
- `src/`: reusable code.
- `outputs/`: model, chart, artifact.

## 5. Tools should be pre-installed

### Required

- Python
- VS Code
- Jupyter
- `numpy`, `pandas`, `scikit-learn`

### Should have

- `matplotlib`, `seaborn`
- `ipykernel`
- `black` or similar formatter

```bash
pip install seaborn ipykernel
```

## 6. Run the first notebook

```bash
jupyter notebook
```

Or use VS Code to open the file `.ipynb`.

Try running the following:

```python
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris(as_frame=True)
df = iris.frame

print(df.head())
print(df.shape)
print(df['target'].value_counts())
```

If the notebook works, your environment is sufficient for most of the basic lessons in the series.

## 7. The files should be there from the beginning

### `requirements.txt`

```txt
numpy
pandas
scikit-learn
matplotlib
seaborn
jupyter
```

### `README.md`

The minimum README should contain:

- project goal
- how to install the environment
- how to run notebook or script

## 8. Common installation errors

### Error: installed package but notebook does not recognize it

The reason is usually that the notebook is running a different kernel from the environment you just installed.

How to handle:

```bash
python -m ipykernel install --user --name ml-course
```

Then select the correct kernel in VS Code/Jupyter.

### Error: `ModuleNotFoundError`

Check:

- Has the environment been activated yet?
- Are you using Python correctly?
- Which environment does the package install into?

### Error: notebook is too messy

Solution:

- notebook is only used for exploration
- Reusable code switched `src/`
- don't put everything in a file 1000 lines long

## 9. Standard work from the beginning

Three small but extremely important principles:

1. Each project uses a separate environment.
2. Do not edit the original data directly.
3. Record how to run the project in README.

If you do these three things from the beginning, you will save a lot of headaches as the number of projects increases.

## Practice exercises

1. Create a separate environment for this series.
2. Create a folder structure according to the sample above.
3. Run the first notebook and save the snapshot or output.

## Common mistakes

- Install the package into the global environment.
- Use one environment for every project.
- I don't know which kernel the notebook is using.

## Completion criteria

- [ ] Create your own ML environment
- [ ] Run the first notebook
- [ ] Have neat, reusable project folders
