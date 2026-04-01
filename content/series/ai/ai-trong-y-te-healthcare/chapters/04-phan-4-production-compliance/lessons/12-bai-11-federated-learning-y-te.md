---
id: 019d8b33-bb11-7011-c011-ee1100000011
title: "Bài 11: Federated Learning cho Y tế"
slug: bai-11-federated-learning-y-te
description: >-
  Federated Learning: train mà không share data. Privacy-preserving AI. Flower framework. Multi-hospital collaboration.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 4: Production & Compliance"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> 5 bệnh viện, 5 data silos. Không ai muốn share patient data. Federated Learning cho phép train model chung mà data không bao giờ rời khỏi bệnh viện.

---

## 1. Vấn đề: Data Silos trong Y tế

```
Bệnh viện A (500 X-rays)    Bệnh viện B (300 X-rays)    Bệnh viện C (800 X-rays)
        |                           |                           |
    Model A (underfitting)      Model B (underfitting)      Model C (underfitting)
    
    → Không ai có đủ data để train tốt
    → Không thể share data: HIPAA, GDPR, luật bảo mật VN
```

**Federated Learning giải quyết vấn đề này:**
```
Mỗi bệnh viện train local → Upload gradient/weights (KHÔNG phải data)
                              ↓
                      Central Server aggregate
                              ↓
                      Global model → Distribute lại
```

---

## 2. FedAvg Algorithm

```python
import torch
import copy
from typing import List, Dict
import numpy as np

class FedAvgServer:
    """
    FedAvg: Federated Averaging (McMahan et al., 2017)
    Global model = weighted average of local models
    Weight = số lượng training samples của mỗi client
    """
    def __init__(self, global_model: torch.nn.Module):
        self.global_model = global_model
        self.round = 0

    def aggregate(self, client_updates: List[Dict]) -> None:
        """
        client_updates: list of {
            "state_dict": model state dict,
            "num_samples": int
        }
        
        Công thức FedAvg:
        w_global = sum(n_k * w_k) / sum(n_k)
        n_k = number of samples of client k
        w_k = model weights of client k
        """
        total_samples = sum(u["num_samples"] for u in client_updates)
        
        # Tính weighted average
        averaged_state_dict = {}
        for key in client_updates[0]["state_dict"].keys():
            stacked = torch.stack([
                u["state_dict"][key].float() * (u["num_samples"] / total_samples)
                for u in client_updates
            ])
            averaged_state_dict[key] = stacked.sum(dim=0)
        
        self.global_model.load_state_dict(averaged_state_dict)
        self.round += 1
        print(f"Round {self.round}: Aggregated {len(client_updates)} clients, "
              f"total {total_samples} samples")

    def distribute(self) -> dict:
        """Return current global model weights."""
        return copy.deepcopy(self.global_model.state_dict())


class FedAvgClient:
    """Client (hospital) trong federated learning."""
    def __init__(
        self,
        client_id: str,
        local_model: torch.nn.Module,
        train_loader,
        device: str = "cuda"
    ):
        self.client_id = client_id
        self.model = local_model.to(device)
        self.train_loader = train_loader
        self.device = device
        self.num_samples = len(train_loader.dataset)

    def local_train(
        self,
        global_weights: dict,
        n_local_epochs: int = 5,
        lr: float = 0.001
    ) -> dict:
        """
        Receive global weights → train locally → return updated weights.
        Data KHÔNG bao giờ rời máy của client.
        """
        # Load global weights
        self.model.load_state_dict(global_weights)
        self.model.train()
        
        optimizer = torch.optim.SGD(self.model.parameters(), lr=lr, momentum=0.9)
        criterion = torch.nn.BCEWithLogitsLoss()
        
        for epoch in range(n_local_epochs):
            epoch_loss = 0
            for batch in self.train_loader:
                images = batch["image"].to(self.device)
                labels = batch["label"].float().to(self.device)
                
                optimizer.zero_grad()
                outputs = self.model(images).squeeze()
                loss = criterion(outputs, labels)
                loss.backward()
                optimizer.step()
                epoch_loss += loss.item()
        
        return {
            "state_dict": copy.deepcopy(self.model.state_dict()),
            "num_samples": self.num_samples,
            "client_id": self.client_id,
            "final_loss": round(epoch_loss / len(self.train_loader), 4)
        }
```

---

## 3. Flower Framework — Production Federated Learning

```python
import flwr as fl
import torch
from collections import OrderedDict

class MedicalFlowerClient(fl.client.NumPyClient):
    """
    Flower: thư viện federated learning production-ready.
    
    Tích hợp với Docker, Kubernetes.
    Hỗ trợ TLS encryption giữa client-server.
    Supports: FedAvg, FedProx, FedNova, Scaffold, ...
    """
    def __init__(self, model, train_loader, val_loader, device):
        self.model = model.to(device)
        self.train_loader = train_loader
        self.val_loader = val_loader
        self.device = device

    def get_parameters(self, config):
        """Trả về model parameters dưới dạng numpy arrays."""
        return [
            val.cpu().numpy()
            for _, val in self.model.state_dict().items()
        ]

    def set_parameters(self, parameters):
        """Load parameters từ server."""
        params_dict = zip(self.model.state_dict().keys(), parameters)
        state_dict = OrderedDict({k: torch.tensor(v) for k, v in params_dict})
        self.model.load_state_dict(state_dict, strict=True)

    def fit(self, parameters, config):
        """Train local model và return updated parameters."""
        self.set_parameters(parameters)
        
        # Local training
        n_epochs = config.get("local_epochs", 5)
        train_model_local(self.model, self.train_loader, n_epochs, self.device)
        
        return (
            self.get_parameters(config),
            len(self.train_loader.dataset),
            {}
        )

    def evaluate(self, parameters, config):
        """Evaluate model trên local validation set."""
        self.set_parameters(parameters)
        loss, metrics = evaluate_model(self.model, self.val_loader, self.device)
        return (
            float(loss),
            len(self.val_loader.dataset),
            metrics  # {"auc": 0.87, "accuracy": 0.91}
        )

# Server-side strategy
strategy = fl.server.strategy.FedAvg(
    min_fit_clients=3,          # Minimum clients per round
    min_evaluate_clients=3,
    min_available_clients=5,    # Wait for 5 hospitals
    evaluate_metrics_aggregation_fn=weighted_average_metrics,
    # FedProx: thêm proximal term để handle data heterogeneity
    # strategy = fl.server.strategy.FedProx(proximal_mu=0.1, ...)
)

def weighted_average_metrics(metrics):
    """Aggregate validation metrics từ multiple hospitals."""
    total_samples = sum(num_samples for num_samples, _ in metrics)
    weighted_auc = sum(
        m.get("auc", 0) * num_samples / total_samples
        for num_samples, m in metrics
    )
    return {"auc": round(weighted_auc, 4)}


# Chạy Flower server
def start_flower_server():
    fl.server.start_server(
        server_address="0.0.0.0:8080",
        config=fl.server.ServerConfig(num_rounds=10),
        strategy=strategy,
        # TLS: certificates
        # certificates=(server_cert, server_key, ca_cert)
    )
```

---

## 4. Differential Privacy

Federated Learning vẫn có thể bị **gradient inversion attack**: từ gradient reconstruct lại dữ liệu gốc.

```python
from opacus import PrivacyEngine  # Facebook's DP library

def add_differential_privacy(
    model: torch.nn.Module,
    optimizer: torch.optim.Optimizer,
    data_loader,
    target_epsilon: float = 1.0,  # Privacy budget: nhỏ hơn = bảo mật hơn
    target_delta: float = 1e-5,
    max_grad_norm: float = 1.0,   # Gradient clipping
):
    """
    Differential Privacy với Opacus.
    
    ε = 1.0: strict (medical standard)
    ε = 10.0: moderate  
    δ = 1e-5: probability of privacy violation
    
    Trade-off: privacy ↑ → accuracy ↓
    Medical consensus: ε ≤ 1 cho patient data
    """
    privacy_engine = PrivacyEngine()
    
    model, optimizer, data_loader = privacy_engine.make_private_with_epsilon(
        module=model,
        optimizer=optimizer,
        data_loader=data_loader,
        epochs=10,
        target_epsilon=target_epsilon,
        target_delta=target_delta,
        max_grad_norm=max_grad_norm,
    )
    
    return model, optimizer, data_loader, privacy_engine
```

---

## 5. Bài tập

1. Implement FedAvg từ đầu (không dùng Flower). Simulate 3 hospitals với các dataset sizes khác nhau (1000, 500, 2000). So sánh global model vs best individual model.

2. Thêm Differential Privacy với Opacus. Train với ε = [0.1, 1.0, 10.0]. Plot accuracy vs ε curve.

3. Implement gradient inversion attack (Zhu et al., 2019) để demonstrate tại sao cần DP. Reconstruct 1 training image từ gradients.

**Bài 12**: Explainable AI — làm cho bác sĩ tin tưởng AI.
