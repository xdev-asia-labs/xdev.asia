---
id: 019e0a01-aa01-7001-b001-ff0500000001
title: AI代理工程師：從零到生產
slug: ai-agent-engineer-tu-zero-den-production
description: >-
  AI 代理工程綜合課程 — 從 Python 和 ML 基礎、NLP 和 LLM（LLaMA、Mistral、Qwen、Phi）、帶有向量資料庫的
  RAG（FAISS、Milvus、Pinecone），到使用 LangChain、LlamaIndex、CrewAI、LangGraph 建立 AI
  代理系統。練習微調、快速工程、工具呼叫、多重代理。在 AWS/Azure/GCP 上使用 FastAPI、Docker、微服務、MLOps、CI/CD
  部署生產。完全滿足領先科技公司的AI/ML工程師招募要求。
featured_image: uploads/2026/04/ai-agent-engineer-cover.png
level: intermediate
duration_hours: 80
lesson_count: 22
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-15T10:00:00.000000Z'
created_at: '2026-04-15T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat1-7001-a001-000000000001
  name: 人工智慧與機器學習
  slug: ai-machine-learning
tags:
  - name: AI
    slug: ai
  - name: LLM
    slug: llm
  - name: Machine Learning
    slug: machine-learning
  - name: NLP
    slug: nlp
  - name: RAG
    slug: rag
  - name: Python
    slug: python
  - name: Deep Learning
    slug: deep-learning
  - name: Docker
    slug: docker
  - name: Microservices
    slug: microservices
  - name: Fine-tuning
    slug: fine-tuning
  - name: Prompt Engineering
    slug: prompt-engineering
sections:
  - id: section-agent-01
    title: 第 1 部分：基礎 — Python、ML 與 AI 工具
    description: 為 AI 工程師打下 Python、機器學習管道和深度學習的堅實基礎
    sort_order: 1
    lessons:
      - id: 019e0a01-bb01-7001-c001-ee0100000001
        title: 第 1 課： AI 工程師的 Python — 生態系統和最佳實踐
        slug: bai-1-python-ai-engineer-ecosystem
        description: >-
          AI 的 Python 生態系：NumPy、Pandas、scikit-learn。虛擬環境、依賴管理。 ML
          項目的編碼模式。類型提示、測試、生產標準項目結構。
        duration_minutes: 120
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019e0a01-bb02-7001-c001-ee0200000001
        title: 第 2 課：機器學習流程 — 從資料到模型
        slug: bai-2-ml-pipeline-data-den-model
        description: 端對端機器學習管道：資料收集、預處理、特徵工程。模型訓練、評估、超參數調整。 scikit 學習、XGBoost。 ML流追蹤。
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a01-bb03-7001-c001-ee0300000001
        title: 第 3 課：深度學習與神經網路基礎知識
        slug: bai-3-deep-learning-neural-networks
        description: >-
          神經網路基礎知識。 PyTorch 基礎知識。 CNN、RNN 概述。訓練循環、損失函數、最佳化器。 GPU
          訓練。遷移學習概念。模型序列化。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-agent-02
    title: 第 2 部分：NLP 和大型語言模型 (LLM)
    description: 深入研究 NLP、Transformer 架構和流行的開源法學碩士
    sort_order: 2
    lessons:
      - id: 019e0a01-bb04-7001-c001-ee0400000001
        title: 第 4 課：NLP 基礎 — 標記、嵌入與轉換器
        slug: bai-4-nlp-tokenization-embeddings-transformer
        description: >-
          NLP 管道：標記化（BPE、WordPiece、SentencePiece）。詞嵌入（Word2Vec、GloVe）。
          Transformer 架構：自註意力、多頭注意力、位置編碼。擁抱臉部變形金剛庫。
        duration_minutes: 180
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e0a01-bb05-7001-c001-ee0500000001
        title: 第 5 課：LLM 深入研究 — LLaMA、Mistral、Qwen、Phi
        slug: bai-5-llm-deep-dive-llama-mistral-qwen-phi
        description: >-
          開源LLM的詳細比較：LLaMA 3、Mistral、Qwen 2.5、Phi-3/4。架構差異、基準、用例。使用 Ollama、vLLM
          在本地運行。商業型號：GPT-4、Claude、Gemini。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a01-bb06-7001-c001-ee0600000001
        title: 第 6 課：微調法學碩士 — LoRA、QLoRA 與 PEFT
        slug: bai-6-fine-tuning-llm-lora-qlora-peft
        description: >-
          微調策略：完全微調與參數高效率。 LoRA、QLoRA、PEFT。資料集準備，使用 Hugging Face TRL
          進行訓練。評估指標。合併適配器。針對特定領域的任務練習微調 Mistral/LLaMA。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a01-bb07-7001-c001-ee0700000001
        title: 第 7 課：快速工程和 LLM 評估
        slug: bai-7-prompt-engineering-llm-evaluation
        description: >-
          快速工程技術：零鏡頭、少鏡頭、思想鏈、思想樹。系統提示，結構化輸出。
          LLM評估：BLEU、ROUGE、人類評估。法學碩士作為法官。基準測試框架。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-agent-03
    title: 第 3 部分：RAG、嵌入和向量資料庫
    description: 利用向量資料庫和先進的檢索技術來建立完整的 RAG 系統
    sort_order: 3
    lessons:
      - id: 019e0a01-bb08-7001-c001-ee0800000001
        title: 第 8 課：嵌入與語意搜尋基礎知識
        slug: bai-8-embeddings-semantic-search
        description: >-
          文字嵌入：句子轉換器、OpenAI 嵌入。嵌入模型比較。餘弦相似度，語意搜尋。分塊策略：固定大小、語意、遞歸。
          PDF、Web、資料庫的文檔載入器。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0a01-bb09-7001-c001-ee0900000001
        title: 第 9 課：向量資料庫 — FAISS、Milvus、Pinecone
        slug: bai-9-vector-database-faiss-milvus-pinecone
        description: >-
          向量資料庫概念：索引（IVF、HNSW、PQ）、相似性搜尋。 FAISS 促進當地發展。 Milvus 分散式設定。松果託管服務。
          Chroma、Weaviate 替代品。性能基準、成本比較。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a01-bb10-7001-c001-ee1000000001
        title: 第 10 課：RAG 管道 — LangChain 和 LlamaIndex
        slug: bai-10-rag-pipeline-langchain-llamaindex
        description: >-
          RAG架構：索引、檢索、產生。 LangChain RAG鏈。 LlamaIndex 資料框架。文檔處理管道。獵犬類型。響應綜合。使用
          RAGAS 進行評估。練習建立完整的 RAG 聊天機器人。
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a01-bb11-7001-c001-ee1100000001
        title: 第 11 課：高級 RAG — 重新排名、HyDE 和 Self-RAG
        slug: bai-11-advanced-rag-reranking-hyde-self-rag
        description: >-
          進階檢索：混合搜尋（稀疏+密集）、重新排序（Cohere、交叉編碼器）。查詢轉換：HyDE、多重查詢、後退提示。自我破爛，破爛不堪。代理
          RAG、圖 RAG。生產優化。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-agent-04
    title: 第 4 部分：AI 代理和基於代理的系統
    description: 課程核心－建構AI Agent從概念到多智能體生產系統
    sort_order: 4
    lessons:
      - id: 019e0a01-bb12-7001-c001-ee1200000001
        title: 第 12 課：AI 代理基礎 — 概念與架構
        slug: bai-12-ai-agent-fundamentals-concepts
        description: >-
          什麼是AI代理？代理、聊天機器人、管道。核心組成：感知、推理、行動。代理架構：反應、計畫與執行、反射。代理循環，狀態管理。人工智慧代理的分類。現實世界的用例。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a01-bb13-7001-c001-ee1300000001
        title: 第 13 課：工具呼叫、函數呼叫和 ReAct 模式
        slug: bai-13-tool-calling-function-calling-react
        description: >-
          函數呼叫 API（OpenAI、Anthropic）。工具定義，架構設計。 ReAct
          模式實作。工具選擇、錯誤處理、重試邏輯。自訂工具：網頁搜尋、資料庫查詢、API 呼叫、程式碼執行。練習使用工具呼叫建構代理。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a01-bb14-7001-c001-ee1400000001
        title: 第 14 課：多代理系統 — CrewAI、AutoGen 和 LangGraph
        slug: bai-14-multi-agent-crewai-autogen-langgraph
        description: >-
          多代理架構：分層、協作、競爭。 CrewAI 框架。微軟 AutoGen。 LangGraph
          狀態機。代理通訊協定。編排模式。練習建立多代理團隊來執行複雜的任務。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0a01-bb15-7001-c001-ee1500000001
        title: 第 15 課：AI 代理中的記憶、規劃與推理
        slug: bai-15-memory-planning-reasoning-ai-agent
        description: 記憶類型：短期（對話）、長期（向量儲存）、情境。规划策略：任务分解、子目标生成。鍊式思考推理。自我反思，迭代完善。人機互動模式。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a01-bb16-7001-c001-ee1600000001
        title: 第 16 課：建構生產型 AI 代理 — 端到端項目
        slug: bai-16-production-ai-agent-end-to-end
        description: >-
          Capstone專案：建構完整的AI Agent系統。需求分析，架構設計。 RAG + 工具呼叫 +
          多代理。對話管理、串流回應。錯誤處理、後備策略。測試人工智慧代理。演示部署。
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-agent-05
    title: 第 5 部分：API、微服務和 MLOps
    description: 使用 FastAPI、Docker 和 MLOps 管道建置可用於生產的 AI 服務
    sort_order: 5
    lessons:
      - id: 019e0a01-bb17-7001-c001-ee1700000001
        title: 第 17 課：用於 AI 服務的 FastAPI
        slug: bai-17-fastapi-ai-services
        description: >-
          FastAPI 基礎：非同步/等待、Pydantic 模型、依賴注入。串流響應 (SSE)。用於即時聊天的
          WebSocket。文件上傳處理。身份驗證、速率限制。 OpenAPI 文件。後台任務。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a01-bb18-7001-c001-ee1800000001
        title: 第 18 課：人工智慧的 Docker 和微服務架構
        slug: bai-18-docker-microservices-ai
        description: >-
          適用於 AI 的 Docker：多階段建置、GPU 支援、模型快取。用於本地開發的 Docker Compose。微服務模式：API
          閘道、服務網格。訊息佇列（Redis、RabbitMQ）。分離服務：推理、嵌入、檢索、編排。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e0a01-bb19-7001-c001-ee1900000001
        title: 第 19 課：MLOps — CI/CD、監控與模型註冊
        slug: bai-19-mlops-cicd-monitoring-model-registry
        description: >-
          MLOps 基礎：模型版本控制、實驗追蹤（MLflow、W&B）。 AI 的 CI/CD 管道：GitHub
          Actions，測試策略。模型註冊表。監控：延遲、品質指標、漂移偵測。日誌記錄和可觀察性（LangSmith）。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-agent-06
    title: 第 6 部分：部署 AI 系統生產
    description: 在雲端部署、擴充和保護 AI 系統
    sort_order: 6
    lessons:
      - id: 019e0a01-bb20-7001-c001-ee2000000001
        title: 第 20 課：雲端部署 — 適用於 AI 的 AWS、Azure 和 GCP
        slug: bai-20-cloud-deployment-aws-azure-gcp
        description: >-
          AWS：SageMaker、Bedrock、Lambda。 Azure：OpenAI 服務、ML Studio。
          GCP：頂點人工智慧。適用於 AI 工作負載的 Kubernetes。無伺服器執行個體與專用 GPU 執行個體。基礎架構即程式碼
          (Terraform)。成本估算。
        duration_minutes: 180
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a01-bb21-7001-c001-ee2100000001
        title: 第 21 課：擴充、快取和成本優化
        slug: bai-21-scaling-caching-cost-optimization
        description: >-
          擴展策略：水平、自動擴展、負載平衡。快取層：Redis、語意快取。模型量化（GPTQ、AWQ、GGUF）。批次推理請求。令牌使用優化。成本分析和預算。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a01-bb22-7001-c001-ee2200000001
        title: 第 22 課：安全、護欄和負責任的人工智慧
        slug: bai-22-security-guardrails-responsible-ai
        description: >-
          AI安全：提示注入、資料中毒、模型擷取。 Guardrails 框架（NeMo Guardrails、Guardrails
          AI）。內容過濾、PII 檢測。速率限制、濫用預防。負責任的人工智慧：減少偏見、公平、透明。合規性（GDPR、人工智慧法案）。
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
locale: zh-tw
---

