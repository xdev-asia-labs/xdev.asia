---
id: 019d8b33-bb14-7014-c014-ee1400000014
title: 第 14 課：部署醫療 AI — 用於醫療保健的 MLOps
slug: bai-14-deploy-medical-ai
description: 符合 HIPAA 的基礎設施。臨床人工智慧的模型監測。臨床試驗中的 A/B 測試。用於醫療人工智慧的 Docker、Kubernetes。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：生產與合規性
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6195" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6195)"/>

  <!-- Decorations -->
  <g>
    <circle cx="847" cy="191" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1094" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="841" cy="125" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1088" cy="92" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="59" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="181" x2="1100" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="211" x2="1050" y2="281" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1012.1769145362398,163 1012.1769145362398,199 981,217 949.8230854637602,199 949.8230854637602,163 981,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：部署醫療 AI — MLOps</tspan>
      <tspan x="60" dy="42">醫療保健</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：生產與合規性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 從筆記本到量產差距龐大。在醫療保健領域，這一差距還包括 HIPAA、審計日誌、臨床整合和 99.9% 的正常運作時間。

---

## 1. 醫療AI生產架構

```
                 ┌─────────────────┐
  DICOM images → │  DICOM Gateway  │ ← Hospital PACS
                 │  (Orthanc)      │
                 └────────┬────────┘
                          │ HL7 v2 / FHIR
                          ▼
                 ┌─────────────────┐
                 │   AI Engine     │ ← Load balancer
                 │  (FastAPI +     │
                 │   GPU server)   │
                 └────────┬────────┘
                          │ Results
                          ▼
                 ┌─────────────────┐
                 │  Results Store  │ ← PostgreSQL + MinIO
                 │  + Audit Log    │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │  RIS/EMR        │ ← Radiologist workstation
                 │  Integration    │
                 └─────────────────┘
```

---

## 2. 符合 HIPAA 的 FastAPI 伺服器

```python
from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import jwt
import logging
import uuid
import hashlib
from datetime import datetime, timezone
import os

app = FastAPI(
    title="Medical AI API",
    # Không expose docs publicly trong production
    docs_url=None if os.getenv("ENV") == "production" else "/docs",
    redoc_url=None if os.getenv("ENV") == "production" else "/redoc",
)

# HIPAA Audit logging: mỗi access PHI phải được log
class AuditLogger:
    def __init__(self, db_connection):
        self.db = db_connection

    def log_access(
        self,
        user_id: str,
        action: str,          # READ, WRITE, PREDICT, EXPORT
        resource_type: str,   # PATIENT_IMAGE, PREDICTION, etc
        resource_id: str,     # Patient ID (de-identified)
        ip_address: str,
        success: bool,
        details: dict = None
    ):
        # KHÔNG log trực tiếp PHI (Protected Health Information)
        # Log resource ID (anonymized) + action + user + timestamp
        log_entry = {
            "log_id": str(uuid.uuid4()),
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "user_id": user_id,
            "action": action,
            "resource_type": resource_type,
            "resource_id": self._hash_resource_id(resource_id),  # Hash PHI
            "ip_address": ip_address,
            "success": success,
            "details": details or {}
        }
        # self.db.insert("audit_logs", log_entry)
        logging.getLogger("hipaa.audit").info(str(log_entry))

    def _hash_resource_id(self, resource_id: str) -> str:
        """One-way hash: không thể reverse về patient ID từ log."""
        return hashlib.sha256(
            (resource_id + os.getenv("AUDIT_SALT", "")).encode()
        ).hexdigest()[:16]


# JWT Authentication
security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Verify JWT. Role-based access control."""
    try:
        payload = jwt.decode(
            credentials.credentials,
            os.getenv("JWT_SECRET"),
            algorithms=["HS256"]
        )
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


class PredictionRequest(BaseModel):
    study_uid: str    # DICOM Study Instance UID (pseudonym, not patient name)
    modality: str     # CR, CT, MR, US
    requesting_physician: str


class PredictionResponse(BaseModel):
    prediction_id: str
    findings: list[dict]
    confidence_scores: dict
    model_version: str
    inference_time_ms: float
    disclaimer: str = (
        "AI output is for decision support ONLY. "
        "Final clinical decision must be made by licensed physician."
    )


@app.post("/api/v1/predict", response_model=PredictionResponse)
async def predict(
    request: Request,
    body: PredictionRequest,
    token: dict = Depends(verify_token)
):
    # Check role
    if "radiologist" not in token.get("roles", []) and "admin" not in token.get("roles", []):
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    start_time = datetime.now(timezone.utc)
    prediction_id = str(uuid.uuid4())
    
    # Tải ảnh từ DICOM server
    # image = load_from_dicom_server(body.study_uid)
    
    # Inference
    # findings = ai_model.predict(image)
    findings = [{"finding": "Cardiomegaly", "confidence": 0.87, "region": "cardiac_silhouette"}]
    
    inference_time = (datetime.now(timezone.utc) - start_time).total_seconds() * 1000
    
    # Log access
    # audit_logger.log_access(
    #     user_id=token["user_id"],
    #     action="PREDICT",
    #     resource_type="PATIENT_IMAGE",
    #     resource_id=body.study_uid,
    #     ip_address=request.client.host,
    #     success=True
    # )
    
    return PredictionResponse(
        prediction_id=prediction_id,
        findings=findings,
        confidence_scores={"cardiomegaly": 0.87},
        model_version=os.getenv("MODEL_VERSION", "1.0.0"),
        inference_time_ms=round(inference_time, 1)
    )
```

---

## 3. Docker 和 Kubernetes 部署

```dockerfile
# Dockerfile
FROM nvidia/cuda:12.1-runtime-ubuntu22.04

# Non-root user (security best practice)
RUN groupadd -r medai && useradd -r -g medai medai

WORKDIR /app

# Install Python
RUN apt-get update && apt-get install -y python3.11 python3-pip --no-install-recommends &&     rm -rf /var/lib/apt/lists/*

# Dependencies
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy app (không copy model weights vào image — mount via volume)
COPY --chown=medai:medai . .

USER medai

EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3     CMD curl -f http://localhost:8000/health || exit 1

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "2"]
```

```yaml
# kubernetes/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: medical-ai
  namespace: healthcare-ai
spec:
  replicas: 2
  selector:
    matchLabels:
      app: medical-ai
  template:
    spec:
      containers:
      - name: medical-ai
        image: registry.hospital.vn/medical-ai:1.2.0
        resources:
          limits:
            nvidia.com/gpu: "1"
            memory: "8Gi"
          requests:
            memory: "4Gi"
        env:
        - name: MODEL_VERSION
          value: "1.2.0"
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: ai-secrets
              key: jwt-secret
        volumeMounts:
        - name: model-weights
          mountPath: /models
          readOnly: true
      volumes:
      - name: model-weights
        persistentVolumeClaim:
          claimName: model-weights-pvc
```

---

## 4. 模型監控與漂移偵測

```python
import numpy as np
from scipy import stats

class ModelMonitor:
    """Monitor model performance và data drift trong production."""
    
    def detect_data_drift(
        self,
        reference_distribution: np.ndarray,
        current_distribution: np.ndarray,
        threshold: float = 0.05
    ) -> dict:
        """
        KS Test: detect shift trong input distribution.
        PSI (Population Stability Index): industry standard.
        """
        ks_stat, ks_pvalue = stats.ks_2samp(reference_distribution, current_distribution)
        
        # PSI: sum((actual% - expected%) * ln(actual%/expected%))
        # PSI < 0.1: no shift
        # 0.1-0.25: moderate shift
        # > 0.25: significant shift — investigate
        psi = self._calculate_psi(reference_distribution, current_distribution)
        
        return {
            "ks_statistic": round(float(ks_stat), 4),
            "ks_pvalue": round(float(ks_pvalue), 4),
            "drift_detected_ks": ks_pvalue < threshold,
            "psi": round(float(psi), 4),
            "psi_severity": (
                "No shift" if psi < 0.1 else
                "Moderate shift — monitor" if psi < 0.25 else
                "Significant shift — ALERT"
            )
        }
    
    def _calculate_psi(self, expected: np.ndarray, actual: np.ndarray, bins: int = 10) -> float:
        """Population Stability Index."""
        expected_hist, bin_edges = np.histogram(expected, bins=bins)
        actual_hist, _ = np.histogram(actual, bins=bin_edges)
        
        expected_pct = expected_hist / expected_hist.sum() + 1e-8
        actual_pct = actual_hist / actual_hist.sum() + 1e-8
        
        psi = np.sum((actual_pct - expected_pct) * np.log(actual_pct / expected_pct))
        return psi
    
    def check_prediction_drift(
        self,
        reference_preds: np.ndarray,     # Confidence scores từ validation
        current_preds: np.ndarray,        # Last 7-day predictions
    ) -> dict:
        """Detect nếu model confidence distribution thay đổi."""
        return self.detect_data_drift(reference_preds, current_preds)
```

---

## 5. 練習

1. 為第 4 課中的胸部 X 光 AI 建立 FastAPI 服務。新增身份驗證、審核日誌記錄和速率限制。使用 Locust 進行測試（負載測試）以確保 < 2s response time.

2. 實現漂移偵測管道：透過改變影像亮度分佈來模擬資料漂移。當PSI > 0.25時發出警報。

3. 使用 HPA（Horizo​​ntal Pod Autoscaler）在 Kubernetes 上部署：當 CPU > 70% 時進行擴充。測量延遲 P50/P95/P99。

**第 15 課**：Capstone — 從頭到尾建構醫療人工智慧系統。
