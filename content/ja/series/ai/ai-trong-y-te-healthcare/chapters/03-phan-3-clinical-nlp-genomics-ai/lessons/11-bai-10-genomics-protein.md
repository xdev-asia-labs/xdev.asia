---
id: 019d8b33-bb10-7010-c010-ee1000000010
title: 'レッスン 10: ゲノミクスとタンパク質構造の予測'
slug: bai-10-genomics-protein
description: DNA 配列分析。異形の呼び出し。 AlphaFold の概要。タンパク質構造予測の基礎。ゲノミクス データ パイプライン。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: 臨床 NLP とゲノミクス AI'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: '医療とヘルスケアにおける AI: 実戦アプリケーション'
  slug: ai-trong-y-te-healthcare
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4671" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4671)"/>

  <!-- Decorations -->
  <g>
    <circle cx="884" cy="282" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="106" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="952" cy="190" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="274" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="98" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="182" x2="1100" y2="262" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="212" x2="1050" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: ゲノミクスとタンパク質の構造</tspan>
      <tspan x="60" dy="42">予測</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">医療とヘルスケアにおける AI: 実戦アプリケーション</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 臨床 NLP とゲノミクス AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> あなたの DNA には 30 億の文字が含まれています。 1 つの文字の違いにより、癌が発生したり、薬が無効になったりする可能性があります。 AI は数時間でゲノム全体を読み取ることができるようになりました。

---

## 1. ゲノミクス AI — 概要

```
Sequencing data (FASTQ)
    ↓
Alignment (BWA, STAR)
    ↓
Variant Calling (GATK, DeepVariant)
    ↓
Annotation (ANNOVAR, VEP)
    ↓
Interpretation (AI + clinical knowledge)
    ↓
Clinical Decision (pharmacogenomics, cancer typing)
```

**ゲノミクスにおける AI の 3 つの主な用途:**
1. **バリアント呼び出し**: DeepVariant (Google) — CNN ベース、GATK を上回るパフォーマンス
2. **機能アノテーション**: タンパク質の機能に対するバリアントの影響を予測します。
3. **がんゲノミクス**: 腫瘍変異量、MSI、HRD スコアリング

---

## 2. 深層学習による DNA 配列の処理

```python
import torch
import torch.nn as nn
import numpy as np

# One-hot encode DNA sequences
DNA_VOCAB = {'A': 0, 'T': 1, 'G': 2, 'C': 3, 'N': 4}  # N = unknown

def encode_dna(sequence: str, max_len: int = 1000) -> torch.Tensor:
    """
    One-hot encode DNA sequence.
    'ATGC' → (4, L) tensor (4 nucleotides × sequence length)
    """
    seq = sequence.upper()[:max_len]
    # Pad if shorter
    seq = seq.ljust(max_len, 'N')
    
    encoding = torch.zeros(5, max_len, dtype=torch.float32)
    for i, base in enumerate(seq):
        idx = DNA_VOCAB.get(base, 4)  # N for unknown
        encoding[idx, i] = 1.0
    return encoding[:4]  # Remove N channel (model handles it as 0)


class DNAConvNet(nn.Module):
    """
    CNN cho DNA sequence classification.
    Ứng dụng: promoter region prediction, splice site detection,
    transcription factor binding site prediction.
    
    ENCODE project: annotate 80% của human genome với regulatory elements.
    """
    def __init__(self, n_classes: int = 2, seq_len: int = 1000):
        super().__init__()
        
        # First conv: detect short motifs (k-mers ~6-10 bp)
        self.conv1 = nn.Conv1d(4, 320, kernel_size=8, padding=4)
        self.pool1 = nn.MaxPool1d(4)
        
        # Second conv: combine motifs → patterns
        self.conv2 = nn.Conv1d(320, 480, kernel_size=8, padding=4)
        self.pool2 = nn.MaxPool1d(4)
        
        # Third conv: higher-order structure
        self.conv3 = nn.Conv1d(480, 960, kernel_size=8, padding=4)
        
        self.dropout1 = nn.Dropout(0.2)
        self.dropout2 = nn.Dropout(0.5)
        
        self.global_pool = nn.AdaptiveAvgPool1d(1)
        
        self.classifier = nn.Sequential(
            nn.Linear(960, 925),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(925, n_classes)
        )
    
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """x: (batch, 4, seq_len)"""
        x = torch.relu(self.conv1(x))
        x = self.pool1(x)
        x = self.dropout1(x)
        
        x = torch.relu(self.conv2(x))
        x = self.pool2(x)
        x = self.dropout1(x)
        
        x = torch.relu(self.conv3(x))
        x = self.dropout2(x)
        
        x = self.global_pool(x).squeeze(-1)
        return self.classifier(x)
```

---

## 3. バリアント効果の予測

```python
def predict_variant_effect(
    wild_type_seq: str,
    mutant_seq: str,
    model: DNAConvNet,
    context_window: int = 500
) -> dict:
    """
    Predict functional effect của SNP/indel.
    So sánh model score của wild-type vs mutant sequence.
    
    Inspired by: DeepSEA, Enformer (DeepMind)
    """
    wt_encoded = encode_dna(wild_type_seq, max_len=context_window).unsqueeze(0)
    mt_encoded = encode_dna(mutant_seq, max_len=context_window).unsqueeze(0)
    
    model.eval()
    with torch.no_grad():
        wt_score = torch.softmax(model(wt_encoded), dim=-1)
        mt_score = torch.softmax(model(mt_encoded), dim=-1)
    
    # Delta score: ΔTF-binding = model(mutant) - model(WT)
    delta = (mt_score - wt_score).squeeze()
    
    return {
        "wt_score": wt_score.squeeze().tolist(),
        "mt_score": mt_score.squeeze().tolist(),
        "delta_score": delta.tolist(),
        "predicted_impact": "HIGH" if abs(delta.max().item()) > 0.2 else "LOW"
    }
```

---

## 4. AlphaFold2 — タンパク質構造の予測

```python
# AlphaFold2 predict 3D structure từ amino acid sequence
# Không cần viết lại model — dùng ColabFold API hoặc LocalColabFold

import subprocess
import json
from pathlib import Path

def predict_protein_structure(
    sequence: str,
    output_dir: str,
    model_type: str = "alphafold2_multimer_v3"
) -> dict:
    """
    Wrapper cho ColabFold (AlphaFold2-based, nhanh hơn original 40-60x).
    
    Cài đặt: pip install colabfold[alphafold]
    Hoặc dùng ColabFold notebook: https://colab.research.google.com/...
    """
    os.makedirs(output_dir, exist_ok=True)
    
    # Tạo FASTA file
    fasta_path = os.path.join(output_dir, "query.fasta")
    with open(fasta_path, 'w') as f:
        f.write(f">protein\n{sequence}\n")
    
    # Run ColabFold (command line)
    cmd = [
        "colabfold_batch",
        fasta_path,
        output_dir,
        "--model-type", model_type,
        "--num-recycle", "3",
        "--use-gpu-relax",
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(f"ColabFold failed: {result.stderr}")
    
    # Parse pLDDT scores (per-residue confidence, 0-100)
    pdb_files = list(Path(output_dir).glob("*.pdb"))
    plddts = parse_plddt_from_pdb(str(pdb_files[0])) if pdb_files else None
    
    return {
        "pdb_file": str(pdb_files[0]) if pdb_files else None,
        "mean_plddt": float(np.mean(plddts)) if plddts else None,
        "output_dir": output_dir
    }

def parse_plddt_from_pdb(pdb_path: str) -> list[float]:
    """Extract pLDDT scores từ B-factor column của PDB file."""
    plddts = []
    with open(pdb_path) as f:
        for line in f:
            if line.startswith("ATOM"):
                try:
                    plddt = float(line[60:66].strip())
                    plddts.append(plddt)
                except ValueError:
                    pass
    return plddts

def interpret_plddt(mean_plddt: float) -> str:
    """
    pLDDT confidence categories theo AlphaFold documentation:
    > 90: Very high confidence (correct within experimental error)
    70-90: High confidence
    50-70: Low confidence (backbone might be correct, side chains unreliable)
    < 50: Disordered region (intrinsically disordered proteins)
    """
    if mean_plddt > 90:
        return "Very high confidence — suitable for drug docking"
    elif mean_plddt > 70:
        return "High confidence — backbone reliable"
    elif mean_plddt > 50:
        return "Low confidence — use with caution"
    else:
        return "Likely intrinsically disordered region"
```

---

## 5. がんゲノミクス: 変異シグネチャ分析

```python
def analyze_mutation_signatures(somatic_variants: list[dict]) -> dict:
    """
    Mutational signatures: pattern của DNA mutations đặc trưng cho từng mutagenic process.
    
    SBS1: Age (clock-like) — C>T at CpG
    SBS4: Tobacco smoking — C>A transversions
    SBS6/15: Mismatch repair deficiency (MSI) — many small indels
    SBS3: BRCA1/2 deficiency (HRD) — deletions at microhomologies
    
    Dataset: COSMIC v3.4 mutational signatures
    """
    from collections import defaultdict
    
    # Count mutation types (96 trinucleotide contexts)
    mutation_counts = defaultdict(int)
    
    for variant in somatic_variants:
        chrom = variant["chrom"]
        pos = variant["pos"]
        ref = variant["ref"]
        alt = variant["alt"]
        
        if len(ref) == 1 and len(alt) == 1:  # SNV only
            # Get trinucleotide context from reference genome
            # context = get_trinucleotide_context(chrom, pos)
            mutation_type = f"{ref}>{alt}"
            mutation_counts[mutation_type] += 1
    
    # Classify by Tumor Mutation Burden (TMB)
    tmb = len(somatic_variants) / 38.0  # mutations per Mb (38 Mb exome)
    
    tmb_category = (
        "TMB-High (≥10 mut/Mb)" if tmb >= 10 else
        "TMB-Low (<10 mut/Mb)"
    )
    
    return {
        "total_somatic_mutations": len(somatic_variants),
        "tmb_per_mb": round(tmb, 2),
        "tmb_category": tmb_category,
        "mutation_counts": dict(mutation_counts),
    }
```

---

## 6. 演習

1. ClinVar データベースをダウンロードします。バリアントアノテーション + タンパク質の特徴からバイナリ分類子 (良性か病原性) をトレーニングします。目標 AUC > 0.85。

2. UniProt の 3 つのタンパク質 (1 つの無秩序なタンパク質、1 つの酵素、1 つの膜タンパク質) の AlphaFold2 構造を視覚化します。 pLDDT 分布を比較します。

3. 変異シグネチャのデコンボリューションを実装します。TCGA 肺腺癌 MAF ファイルをダウンロードし、トリヌクレオチド数を抽出し、COSMIC シグネチャを NMF で適合させます。

**レッスン 11**: フェデレーテッド ラーニング — 複数の病院に対応する AI、絶対に安全。
