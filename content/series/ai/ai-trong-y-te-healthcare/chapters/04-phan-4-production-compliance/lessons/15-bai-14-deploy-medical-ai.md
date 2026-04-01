---
id: 019d8b33-bb14-7014-c014-ee1400000014
title: "Bài 14: Deploy Medical AI — MLOps cho Healthcare"
slug: bai-14-deploy-medical-ai
description: >-
  HIPAA-compliant infrastructure. Model monitoring cho clinical AI. A/B testing trong clinical trials. Docker, Kubernetes cho medical AI.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Production & Compliance"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> Từ notebook đến production là một khoảng cách rất lớn. Trong y tế, khoảng cách này còn gồm HIPAA, audit logs, clinical integration, và 99.9% uptime.

---

## 1. Medical AI Production Architecture

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

## 2. HIPAA-Compliant FastAPI Server

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

## 3. Docker & Kubernetes Deployment

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

## 4. Model Monitoring và Drift Detection

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

## 5. Bài tập

1. Build FastAPI service cho chest X-ray AI từ bài 4. Add authentication, audit logging, và rate limiting. Test với Locust (load testing) để đảm bảo < 2s response time.

2. Implement drift detection pipeline: simulate data drift bằng cách shift image brightness distribution. Alert khi PSI > 0.25.

3. Deploy trên Kubernetes với HPA (Horizontal Pod Autoscaler): scale up khi CPU > 70%. Measure latency P50/P95/P99.

**Bài 15**: Capstone — xây dựng Medical AI system từ đầu đến cuối.
