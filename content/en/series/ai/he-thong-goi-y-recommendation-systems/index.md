---
id: 019d8b36-aa01-7001-b001-ff0700000001
title: 'Recommendation Systems: From Basic to Production'
slug: he-thong-goi-y-recommendation-systems
description: >-
  Comprehensive course on Recommendation Systems — from Collaborative Filtering,
  Content-based, Matrix Factorization to Deep Learning RecSys with Two-Tower,
  Graph Neural Networks, Sequence Models. Hands-on with Python, PyTorch,
  LightFM, and deploy production-ready recommendation engine.
featured_image: uploads/2026/03/he-thong-goi-y-recommendation-systems-cover.png
level: intermediate
duration_hours: 42
lesson_count: 14
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: Recommendation Systems
    slug: recommendation-systems
  - name: Collaborative Filtering
    slug: collaborative-filtering
  - name: Matrix Factorization
    slug: matrix-factorization
  - name: Deep RecSys
    slug: deep-recsys
  - name: Two-Tower
    slug: two-tower
  - name: Graph Neural Networks
    slug: graph-neural-networks
  - name: Personalization
    slug: personalization
  - name: PyTorch
    slug: pytorch
  - name: Python
    slug: python
  - name: AI
    slug: ai
sections:
  - id: section-rec-01
    title: 'Part 1: Recommendation Systems Platform'
    description: 'Collaborative filtering, content-based, hybrid approaches'
    sort_order: 1
    lessons:
      - id: 019d8b36-bb01-7001-c001-ee0100000001
        title: 'Lesson 1: What are Recommendation Systems? — Overview & Taxonomy'
        slug: bai-1-recsys-tong-quan
        description: >-
          RecSys landscape. Collaborative vs Content-based vs Hybrid. Explicit
          vs Implicit feedback. Evaluation metrics: NDCG, MAP, Hit Rate.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b36-bb02-7002-c002-ee0200000002
        title: 'Lesson 2: Collaborative Filtering — User-based & Item-based'
        slug: bai-2-collaborative-filtering
        description: >-
          User-based CF: similarity metrics. Item-based CF. Neighborhood
          methods. Cosine similarity, Pearson correlation. Cold-start problem.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b36-bb03-7003-c003-ee0300000003
        title: 'Lesson 3: Matrix Factorization — SVD, ALS & BPR'
        slug: bai-3-matrix-factorization
        description: >-
          SVD decomposition. ALS: Alternating Least Squares. BPR: Bayesian
          Personalized Ranking. Implicit feedback handling. Surprise library.
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-rec-02
    title: 'Part 2: Deep Learning for Recommendation'
    description: 'Neural collaborative filtering, embeddings, two-tower'
    sort_order: 2
    lessons:
      - id: 019d8b36-bb04-7004-c004-ee0400000004
        title: 'Lesson 4: Content-based & Feature Engineering for RecSys'
        slug: bai-4-content-based-features
        description: >-
          Content-based filtering. TF-IDF, embedding features. User/item
          profiling. Feature stores for RecSys. LightFM hybrid.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b36-bb05-7005-c005-ee0500000005
        title: 'Lesson 5: Neural Collaborative Filtering & Embedding'
        slug: bai-5-neural-cf-embedding
        description: >-
          NCF architecture. Embedding layers. GMF + MLP. Wide & Deep. DeepFM.
          Feature interaction learning.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b36-bb06-7006-c006-ee0600000006
        title: 'Lesson 6: Two-Tower Architecture & Retrieval'
        slug: bai-6-two-tower-retrieval
        description: >-
          Two-tower model: user tower + item tower. Approximate Nearest Neighbor
          (ANN). FAISS, ScaNN. Candidate generation at scale.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b36-bb07-7007-c007-ee0700000007
        title: 'Lesson 7: Sequence Models — GRU4Rec, SASRec & Transformers'
        slug: bai-7-sequence-models-recsys
        description: >-
          Session-based recommendations. GRU4Rec. Self-Attention: SASRec,
          BERT4Rec. Transformer for sequential recommendation.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-rec-03
    title: 'Part 3: Advanced RecSys — Knowledge Graph, Multi-task & GNN'
    description: 'Graph-based, knowledge-aware, multi-objective recommendation'
    sort_order: 3
    lessons:
      - id: 019d8b36-bb08-7008-c008-ee0800000008
        title: 'Lesson 8: Graph Neural Networks for Recommendation'
        slug: bai-8-gnn-recommendation
        description: >-
          User-item bipartite graph. LightGCN. PinSage. Message passing for
          recommendations. PyG implementation.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b36-bb09-7009-c009-ee0900000009
        title: 'Lesson 9: Knowledge Graph Recommendation'
        slug: bai-9-knowledge-graph-recsys
        description: >-
          Knowledge Graph embeddings. KGAT. Side information integration.
          Explainable recommendations via KG paths.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8b36-bb10-7010-c010-ee1000000010
        title: 'Lesson 10: Multi-task & Multi-objective Ranking'
        slug: bai-10-multi-task-ranking
        description: >-
          Multi-task learning: CTR + CVR. MMOE, PLE architects. Re-ranking.
          Diversity, fairness, novelty objectives.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-rec-04
    title: 'Part 4: RecSys Production — Deploy & Scale'
    description: 'Production architecture, A/B testing, real-time serving'
    sort_order: 4
    lessons:
      - id: 019d8b36-bb11-7011-c011-ee1100000011
        title: 'Lesson 11: LLM-powered Recommendations'
        slug: bai-11-llm-recommendations
        description: >-
          LLM as recommender. Conversational RecSys. Prompt-based
          recommendation. RAG for product search. LLM + traditional RecSys
          hybrid.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b36-bb12-7012-c012-ee1200000012
        title: 'Lesson 12: Production RecSys Architecture'
        slug: bai-12-production-recsys-architecture
        description: >-
          3-stage pipeline: candidate gen → scoring → re-ranking. Feature store.
          Real-time vs batch. System design for million-scale.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b36-bb13-7013-c013-ee1300000013
        title: 'Lesson 13: A/B Testing & Evaluation for RecSys'
        slug: bai-13-ab-testing-evaluation
        description: >-
          Online vs offline metrics. A/B testing framework. Interleaving.
          Counterfactual evaluation. Business metrics alignment.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b36-bb14-7014-c014-ee1400000014
        title: 'Lesson 14: Capstone — E-commerce Recommendation Engine'
        slug: bai-14-capstone-recsys
        description: >-
          Project summary: Build e-commerce recommendation engine end-to-end.
          Two-tower retrieval + re-ranking + A/B testing + deployment.
        duration_minutes: 240
        is_free: true
        sort_order: 13
        video_url: null
locale: en
---

