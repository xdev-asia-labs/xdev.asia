---
id: 019d8b33-bb09-7009-c009-ee0900000009
title: 'レッスン 9: AI を使用した創薬 — GNN と分子生成'
slug: bai-9-drug-discovery-gnn
description: 分子特性予測のためのグラフ ニューラル ネットワーク。 SMILES代表。分子の生成。バーチャル上映。アドメットの予測。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: 臨床 NLP とゲノミクス AI'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: '医療とヘルスケアにおける AI: 実戦アプリケーション'
  slug: ai-trong-y-te-healthcare
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9718" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9718)"/>

  <!-- Decorations -->
  <g>
    <circle cx="920" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
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
    <polygon points="931.650635094611,97.5 931.650635094611,122.5 910,135 888.349364905389,122.5 888.349364905389,97.5 910,85" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: AI を使用した創薬 — GNN と</tspan>
      <tspan x="60" dy="42">分子生成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">医療とヘルスケアにおける AI: 実戦アプリケーション</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 臨床 NLP とゲノミクス AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> AlphaFold2 はタンパク質のフォールディングを解決するのに 50 年かかりました。 GNN は、従来の 10 ～ 15 年に及ぶ検査の代わりに、数日で新薬候補を見つけることができます。

---

## 1. 創薬パイプラインと AI 介入スコア

```
Target ID → Hit Finding → Lead Optimization → ADMET → Clinical Trials
 (protein)   (molecules)   (synthesis)       (toxicity)  (human)
   ↑                ↑              ↑               ↑
 AlphaFold2    Virtual        GNN Property    ML-ADMET
 Genomics      Screening      Prediction      prediction
```

**従来のアプローチの問題:**
- 10～15年、薬剤あたり10～20億ドルの費用がかかる
- 臨床試験では90%が失敗する
- ほとんどの失敗は ADMET (吸収、分布、代謝、排泄、毒性) によるものです

---

## 2. SMILES とグラフによる分子表現

```python
from rdkit import Chem
from rdkit.Chem import Draw, Descriptors, AllChem
import numpy as np

# SMILES: Simplified Molecular Input Line Entry System
# Aspirin: CC(=O)Oc1ccccc1C(=O)O
aspirin_smiles = "CC(=O)Oc1ccccc1C(=O)O"
mol = Chem.MolFromSmiles(aspirin_smiles)

# Molecular fingerprint (Morgan/ECFP): fixed-size binary vector
def smiles_to_fingerprint(smiles: str, radius: int = 2, n_bits: int = 2048) -> np.ndarray:
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        return np.zeros(n_bits)
    fp = AllChem.GetMorganFingerprintAsBitVect(mol, radius, nBits=n_bits)
    return np.array(fp)

# RDKit descriptors: 200 physicochemical properties
def smiles_to_descriptors(smiles: str) -> dict:
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        return {}
    return {
        "MolWt": Descriptors.MolWt(mol),
        "LogP": Descriptors.MolLogP(mol),        # Lipophilicity
        "NumHDonors": Descriptors.NumHDonors(mol),
        "NumHAcceptors": Descriptors.NumHAcceptors(mol),
        "TPSA": Descriptors.TPSA(mol),            # Topological polar surface area
        "NumRotatableBonds": Descriptors.NumRotatableBonds(mol),
        "AromaticRings": Descriptors.NumAromaticRings(mol),
    }

# Lipinski Rule of Five: oral bioavailability predictor
def lipinski_rule_of_five(smiles: str) -> dict:
    desc = smiles_to_descriptors(smiles)
    mw = desc.get("MolWt", 999)
    logp = desc.get("LogP", 999)
    hbd = desc.get("NumHDonors", 999)
    hba = desc.get("NumHAcceptors", 999)
    
    violations = sum([mw > 500, logp > 5, hbd > 5, hba > 10])
    return {
        **desc,
        "lipinski_violations": violations,
        "drug_like": violations <= 1  # <= 1 violation = drug-like
    }
```

---

## 3. 分子特性予測のためのグラフニューラルネットワーク

```python
import torch
import torch.nn as nn
from torch_geometric.data import Data, DataLoader
from torch_geometric.nn import GCNConv, GATConv, global_mean_pool

# Atom features: one-hot encode atomic properties
ATOM_TYPES = ['C', 'N', 'O', 'F', 'P', 'S', 'Cl', 'Br', 'I', 'Other']
HYBRIDIZATION = ['SP', 'SP2', 'SP3', 'Other']

def mol_to_graph(smiles: str, label: float = None) -> Data:
    """Convert SMILES → PyTorch Geometric Graph."""
    mol = Chem.MolFromSmiles(smiles)
    if mol is None:
        return None
    
    # Node features: atom properties
    node_features = []
    for atom in mol.GetAtoms():
        symbol = atom.GetSymbol()
        atom_type_onehot = [int(symbol == t) for t in ATOM_TYPES[:-1]] + [int(symbol not in ATOM_TYPES[:-1])]
        
        hyb = str(atom.GetHybridization()).split('.')[-1]
        hyb_onehot = [int(hyb == h) for h in HYBRIDIZATION[:-1]] + [int(hyb not in HYBRIDIZATION[:-1])]
        
        features = atom_type_onehot + hyb_onehot + [
            atom.GetFormalCharge(),
            atom.GetNumRadicalElectrons(),
            int(atom.GetIsAromatic()),
            int(atom.IsInRing()),
            atom.GetDegree() / 6.0,   # Normalized
        ]
        node_features.append(features)
    
    x = torch.tensor(node_features, dtype=torch.float)
    
    # Edge index: bonds (undirected)
    edge_index = []
    for bond in mol.GetBonds():
        i, j = bond.GetBeginAtomIdx(), bond.GetEndAtomIdx()
        edge_index.extend([[i, j], [j, i]])
    
    edge_index = torch.tensor(edge_index, dtype=torch.long).t().contiguous()
    
    data = Data(x=x, edge_index=edge_index)
    if label is not None:
        data.y = torch.tensor([label], dtype=torch.float)
    return data


class MolecularGNN(nn.Module):
    """
    GNN cho molecular property prediction (QSAR: Quantitative Structure-Activity Relationship).
    
    Dùng cho:
    - Predict binding affinity (IC50, Ki)
    - Predict solubility, logP, BBB penetration
    - Toxicity prediction (hERG channel blocker, etc.)
    """
    def __init__(self, in_features: int = 24, hidden: int = 128, out_features: int = 1):
        super().__init__()
        
        # Message passing layers (Graph Attention Networks)
        self.conv1 = GATConv(in_features, hidden, heads=4, concat=True)
        self.conv2 = GATConv(hidden * 4, hidden, heads=4, concat=True)
        self.conv3 = GATConv(hidden * 4, hidden, heads=1, concat=False)
        
        self.norm1 = nn.LayerNorm(hidden * 4)
        self.norm2 = nn.LayerNorm(hidden * 4)
        self.norm3 = nn.LayerNorm(hidden)
        
        # Readout: aggregate node features → graph-level
        # global_mean_pool (in forward)
        
        # Prediction head
        self.mlp = nn.Sequential(
            nn.Linear(hidden, hidden // 2),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden // 2, out_features)
        )
    
    def forward(self, data):
        x, edge_index, batch = data.x, data.edge_index, data.batch
        
        x = self.norm1(torch.relu(self.conv1(x, edge_index)))
        x = self.norm2(torch.relu(self.conv2(x, edge_index)))
        x = self.norm3(torch.relu(self.conv3(x, edge_index)))
        
        # Global pooling: aggregate atoms → molecule representation
        x = global_mean_pool(x, batch)  # (batch_size, hidden)
        
        return self.mlp(x).squeeze(-1)
```

---

## 4. ADMET の予測

```python
from sklearn.ensemble import RandomForestClassifier, GradientBoostingRegressor

class ADMETPredictor:
    """
    Predict ADMET properties từ molecular fingerprints.
    Dataset: Tox21, ESOL, HIV, BACE, BBBP, ClinTox (MoleculeNet benchmark)
    """
    def __init__(self):
        self.models = {
            # Absorption
            "oral_bioavailability": RandomForestClassifier(n_estimators=200),
            "solubility": GradientBoostingRegressor(n_estimators=200),
            # Distribution
            "bbb_penetration": RandomForestClassifier(n_estimators=200),
            # Metabolism  
            "cyp450_inhibition": RandomForestClassifier(n_estimators=200),
            # Excretion
            "half_life": GradientBoostingRegressor(n_estimators=200),
            # Toxicity
            "herg_inhibition": RandomForestClassifier(n_estimators=200),
            "hepatotoxicity": RandomForestClassifier(n_estimators=200),
        }
    
    def predict(self, smiles: str) -> dict:
        fp = smiles_to_fingerprint(smiles)
        results = {}
        for prop, model in self.models.items():
            # Check if model is fitted
            try:
                pred = model.predict(fp.reshape(1, -1))[0]
                if hasattr(model, "predict_proba"):
                    prob = model.predict_proba(fp.reshape(1, -1))[0]
                    results[prop] = {
                        "label": int(pred),
                        "probability": round(float(prob.max()), 3)
                    }
                else:
                    results[prop] = round(float(pred), 4)
            except Exception:
                results[prop] = None
        return results
```

---

## 5. 仮想スクリーニング パイプライン

```python
def virtual_screening(
    target_smiles_or_pdb: str,
    candidate_library: list[str],
    gnn_model: MolecularGNN,
    admet_predictor: ADMETPredictor,
    top_k: int = 20
) -> list[dict]:
    """
    1. Filter drug-like molecules (Lipinski RO5)
    2. Predict binding affinity với GNN
    3. Filter by ADMET (remove toxic, BBB-unsuitable candidates)
    4. Rank và return top-K
    """
    results = []
    
    for smiles in candidate_library:
        # Step 1: Drug-likeness filter
        lipinski = lipinski_rule_of_five(smiles)
        if not lipinski["drug_like"]:
            continue
        
        # Step 2: Binding affinity prediction
        graph = mol_to_graph(smiles)
        if graph is None:
            continue
        
        with torch.no_grad():
            score = gnn_model(graph).item()
        
        # Step 3: ADMET
        admet = admet_predictor.predict(smiles)
        if admet.get("herg_inhibition", {}).get("probability", 0) > 0.8:
            continue  # High cardiac toxicity risk → skip
        if admet.get("hepatotoxicity", {}).get("probability", 0) > 0.7:
            continue  # Liver toxicity risk → skip
        
        results.append({
            "smiles": smiles,
            "predicted_affinity": round(score, 4),
            "lipinski": lipinski,
            "admet": admet
        })
    
    # Rank by binding affinity
    results.sort(key=lambda x: x["predicted_affinity"])
    return results[:top_k]
```

---

## 6. 演習

1. MoleculeNet から BBBP (血液脳関門貫通) データセットをダウンロードします。 GNN とランダム フォレスト + モーガンの指紋をトレーニングします。 ROC-AUCの比較。

2. Lipinski フィルターを実装し、ZINC データベース サンプル (10,000 分子) 内の薬物様分子の比率を報告します。

3. GATConv のアテンション ウェイトを視覚化します。結合する重要な原子を強調表示します。結晶構造が存在する場合、既知の結合部位と重複します。

**レッスン 10**: ゲノミクスとタンパク質構造 AI。
