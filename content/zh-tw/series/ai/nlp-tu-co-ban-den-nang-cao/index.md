---
id: 019d8b30-aa01-7001-b001-ff0100000001
title: NLP 從基礎到進階：掌握自然語言處理
slug: nlp-tu-co-ban-den-nang-cao
description: >-
  自然語言處理 (NLP) 綜合課程 — 從標記化平台、字詞嵌入到 Transformer
  架構、BERT、GPT。練習文字分類、NER、情緒分析、機器翻譯、問答，並使用 Python、Hugging Face 和 spaCy 建立可用於生產的
  NLP 管道。
featured_image: uploads/2026/03/nlp-tu-co-ban-den-nang-cao-cover.png
level: beginner
duration_hours: 60
lesson_count: 20
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
  name: 人工智慧與機器學習
  slug: ai-machine-learning
tags:
  - name: NLP
    slug: nlp
  - name: Natural Language Processing
    slug: natural-language-processing
  - name: Transformer
    slug: transformer
  - name: BERT
    slug: bert
  - name: GPT
    slug: gpt
  - name: Hugging Face
    slug: hugging-face
  - name: spaCy
    slug: spacy
  - name: Tokenization
    slug: tokenization
  - name: Word Embeddings
    slug: word-embeddings
  - name: Text Classification
    slug: text-classification
  - name: NER
    slug: ner
  - name: Sentiment Analysis
    slug: sentiment-analysis
  - name: Python
    slug: python
  - name: Deep Learning
    slug: deep-learning
  - name: AI
    slug: ai
sections:
  - id: section-nlp-01
    title: 第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言
    description: 掌握 NLP 的核心概念與傳統技術
    sort_order: 1
    lessons:
      - id: 019d8b30-bb01-7001-c001-ee0100000001
        title: 第一课：什么是 NLP？ ——自然語言處理領域概述
        slug: bai-1-nlp-la-gi
        description: >-
          NLP的定義，從基於規則到深度學習的發展史。核心問題：分類、NER、POS標記、解析、產生、QA、摘要。 NLP 管道概述。使用
          Python 的簡單端對端演示。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019d8b30-bb02-7002-c002-ee0200000002
        title: 第 2 課：文字預處理－文字清理與標準化
        slug: bai-2-text-preprocessing
        description: >-
          標記化（單字、子單字、字元級）。小寫、詞幹、詞形還原。停用詞刪除。用於文字清理的正規表示式。 Unicode 和編碼問題。使用 Python
          和 spaCy 進行實際管道預處理。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b30-bb03-7003-c003-ee0300000003
        title: 第 3 課：標記化深入研究 — 從 Word 到 BPE、WordPiece、SentencePiece
        slug: bai-3-tokenization-deep-dive
        description: >-
          比較標記化方法：空白、BPE、WordPiece、Unigram、SentencePiece。詞彙量大小和權衡。從頭開始進行分詞器訓練。擁抱臉部部分詞器庫。越南語和特定的標記化挑戰。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-nlp-02
    title: 第 2 部分：語言表示－從 BoW 到詞嵌入
    description: 計算機如何透過向量理解單字和句子的含義
    sort_order: 2
    lessons:
      - id: 019d8b30-bb04-7004-c004-ee0400000004
        title: 第 4 課：詞袋、TF-IDF 和 N-gram — 經典方法
        slug: bai-4-bow-tfidf-ngrams
        description: >-
          詞袋模型。 TF-IDF 加權和數學直覺。用於語言建模的 N 元語法。 CountVectorizer 和 TfidfVectorizer
          與 scikit-learn。優點和缺點以及什麼時候仍然有效？
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b30-bb05-7005-c005-ee0500000005
        title: 第 5 課：詞嵌入 — Word2Vec、GloVe、FastText
        slug: bai-5-word-embeddings
        description: >-
          從單熱向量到密集向量。 Word2Vec：CBOW 與 Skip-gram，負採樣。 GloVe：共生矩陣分解。
          FastText：子詞嵌入。使用 t-SNE/UMAP 進行視覺化。針對越南語的預訓練嵌入。親身體驗 Gensim。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8b30-bb06-7006-c006-ee0600000006
        title: 第 6 課：句子和文件嵌入 — 從 Doc2Vec 到 Sentence-BERT
        slug: bai-6-sentence-document-embeddings
        description: >-
          Doc2Vec
          和段落向量。句子嵌入：平均池化、Sentence-BERT、E5、BGE。語意相似度和餘弦距離。應用：語意搜尋、聚類、重複資料刪除。使用
          Sentence-Transformers 庫進行演示。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-nlp-03
    title: 第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer
    description: 用於語言處理的核心神經網路架構
    sort_order: 3
    lessons:
      - id: 019d8b30-bb07-7007-c007-ee0700000007
        title: 第 7 課：RNN 和 LSTM — 順序序列處理
        slug: bai-7-rnn-lstm
        description: >-
          遞歸神經網路：架構、時間反向傳播。梯度消失問題。 LSTM：單元狀態、門（遺忘、輸入、輸出）。 GRU：簡化變體。雙向 RNN。使用
          PyTorch 進行實際文字分類。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b30-bb08-7008-c008-ee0800000008
        title: 第8課：注意力機制－NLP的轉折點
        slug: bai-8-attention-mechanism
        description: >-
          直覺：為什麼我們需要注意力？ Bahdanau 注意力 vs Luong
          注意力。自我關注。縮放點積注意力。多頭關注。可視化注意力權重。備受關注的 Seq2Seq 誕生了 Transformer 平台。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b30-bb09-7009-c009-ee0900000009
        title: 第 9 課：Transformer —“你所需要的就是注意力”
        slug: bai-9-transformer
        description: >-
          詳細的 Transformer 架構：編碼器-解碼器、位置編碼、層歸一化、前饋網路。為什麼 Transformer 勝過
          RNN：平行化、遠端依賴。使用 PyTorch 從頭開始編寫 Transformer 程式碼。帶註釋的 Transformer 演練。
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-nlp-04
    title: 第 4 部分：預訓練語言模型 — BERT、GPT 及其他
    description: NLP 的遷移學習時代－訓練一次，隨處使用
    sort_order: 4
    lessons:
      - id: 019d8b30-bb10-7010-c010-ee1000000010
        title: 第 10 課：BERT－Transformers 的雙向編碼器表示
        slug: bai-10-bert
        description: >-
          BERT 架構：掩碼語言建模、下一句預測。預訓練與微調範例。 BERT
          變體：RoBERTa、ALBERT、DistilBERT、PhoBERT（越南語）。特徵提取與微調。使用 Hugging Face
          Transformer 進行演示分類。
        duration_minutes: 180
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b30-bb11-7011-c011-ee1100000011
        title: 第 11 課：GPT 與自迴歸模型 — 生成式預訓練 Transformer
        slug: bai-11-gpt-autoregressive
        description: >-
          GPT 架構：因果語言建模。 GPT-1 → GPT-2 → GPT-3 → ​​GPT-4 演化。自回歸產生：溫度、top-k、top-p
          採樣。新興能力。情境學習。比較 BERT（編碼器）與 GPT（解碼器）與 T5（編碼器-解碼器）。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b30-bb12-7012-c012-ee1200000012
        title: 第十二課：抱臉生態系－現代NLP實踐
        slug: bai-12-hugging-face-ecosystem
        description: >-
          Transformers
          庫深入研究：管道、AutoModel、AutoTokenizer。模型中心：尋找並使用預先訓練的模型。數據集庫。用於快速微調的訓練器
          API。 PEFT/LoRA 用於高效調整。加速多 GPU。演示空間。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-nlp-05
    title: 第 5 部分：應用 NLP 問題 — 實作項目
    description: 練習現實生活中最常見的NLP問題
    sort_order: 5
    lessons:
      - id: 019d8b30-bb13-7013-c013-ee1300000013
        title: 第 13 課：文本分類與情緒分析
        slug: bai-13-text-classification-sentiment
        description: >-
          端到端的文字分類管道。情緒分析：二元、多類、基於面向。針對越南語分類微調 BERT/PhoBERT。評價：準確率、F1、混淆矩陣。使用
          FastAPI 部署模型。
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8b30-bb14-7014-c014-ee1400000014
        title: 第 14 課：命名實體辨識 (NER) — 實體擷取
        slug: bai-14-ner
        description: >-
          什麼是 NER：實體類型（PER、ORG、LOC、DATE）。 IOB/BIO 標記。用於序列標記的 CRF。為 NER 微調 BERT。
          spaCy NER 訓練。特定領域（醫療、法律）的自訂實體類型。評價：實體等級F1。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b30-bb15-7015-c015-ee1500000015
        title: 第十五課：問答－智慧問答系統
        slug: bai-15-question-answering
        description: >-
          QA 類型：抽取式、抽象式、開放式域。 SQuAD 資料集和格式。微調 BERT 以進行抽取式
          QA。檢索增強的品質保證。用於檢索的交叉編碼器與雙編碼器。親自動手建構越南語的 QA 系統。
        duration_minutes: 180
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b30-bb16-7016-c016-ee1600000016
        title: 第 16 課：文本摘要和機器翻譯
        slug: bai-16-summarization-translation
        description: >-
          提取與抽象總結。 T5、BART、Pegasus 進行總結。評估：ROUGE
          指標。機器翻譯：MarianMT、mBART、NLLB。翻譯品質：BLEU、chrF。演示總結新聞和越南語翻譯。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-nlp-06
    title: 第 6 部分：NLP 產生與現代趨勢
    description: 將NLP投入生產並更新最新趨勢
    sort_order: 6
    lessons:
      - id: 019d8b30-bb17-7017-c017-ee1700000017
        title: 第 17 課：越南語 NLP — 挑戰與解決方案
        slug: bai-17-nlp-tieng-viet
        description: >-
          越南語語言特徵：分詞（VnCoreNLP、underthesea）、變音符號、複合詞。
          PhoBERT、ViT5、BARTpho。越南資料集：VLSP、vietnews。越南任務的基準模型。多語言 NLP 的最佳實踐。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8b30-bb18-7018-c018-ee1800000018
        title: 第 18 課：NLP 管道生產 — NLP 的 MLOps
        slug: bai-18-nlp-pipeline-production
        description: >-
          生產 NLP 管道：資料攝取→預處理→推理→後處理。模型服務：FastAPI、Triton、vLLM。監控：資料漂移、模型漂移。 NLP
          模型的 CI/CD。日誌記錄和錯誤處理。擴展考慮因素。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b30-bb19-7019-c019-ee1900000019
        title: 第 19 課：現代 LLM 和 NLP — RAG、代理和 2026 年趨勢
        slug: bai-19-llm-nlp-hien-dai
        description: >-
          從傳統的NLP到LLM時代。檢索增強生成。情境學習與微調。 NLP 任務的快速工程。用於 NLP 工作流程的 AI
          代理程式。多模式自然語言處理。趨勢：小語言模式、合成資料、憲法人工智慧。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b30-bb20-7020-c020-ee2000000020
        title: 第 20 課：Capstone 專案 — 建置端對端 NLP 平台
        slug: bai-20-capstone-project
        description: >-
          總結項目：建立一個完整的NLP平台－針對特定領域（醫學、法律或電子商務）的文本分類+NER+QA。流程：資料→訓練→評估→服務→監控。最佳實踐清單和職業路線圖。
        duration_minutes: 240
        is_free: true
        sort_order: 19
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---

## 系列介紹

**NLP 從基礎到高級**是一門幫助您掌握**自然語言處理**整個領域的課程 - 從理論基礎到生產實踐。該課程包括傳統方法和 2026 年最現代的技術。

> 🎯 **完成課程後，您將：**
> - 深入理解電腦如何「理解」自然語言
> - 精通Transformer、BERT、GPT和Hugging Face生態系統
> - 建立NLP應用程式：文字分類、NER、QA、摘要
> - 部署 NLP 管道生產就緒
> - 可以處理特定的越南語NLP問題

## 學習路徑

### 第 1 部分：NLP 基礎

- **第 1 課：** 什麼是 NLP？ — 現場概況及管道概況
- **第 2 課：** 文字預處理 — 分詞、字幹擷取、詞形還原
- **第 3 課：** 標記化深入研究 — BPE、WordPiece、SentencePiece

### 第 2 部分：語言表徵

- **第 4 課：** BoW、TF-IDF 和 N-gram — 經典方法
- **第 5 課：** 字嵌入 — Word2Vec、GloVe、FastText
- **第 6 課：** 句子和文件嵌入 — Sentence-BERT，E5

### 第 3 部分：NLP 深度學習

- **第 7 課：** RNN 和 LSTM — 順序字串處理
- **第8課：**注意力機制－NLP的轉折點
- **第 9 課：** Transformer — “你所需要的就是注意力”

### 第 4 部分：預訓練語言模型

- **第 10 課：** BERT — 越南語雙向編碼器與 PhoBERT
- **第 11 課：** GPT 與自迴歸模型 — 生成式 AI
- **第12課：**擁抱臉生態系－現代NLP實踐

### 第 5 部分：應用 NLP 問題

- **第 13 課：** 文本分類與情緒分析
- **第 14 課：** 命名實體辨識 (NER)
- **第 15 課：** 問答
- **第 16 課：** 文字摘要與機器翻譯

### 第 6 部分：NLP 生產與趨勢

- **第 17 課：** 越南語 NLP — 挑戰與解決方案
- **第 18 課：** NLP 管道生產 — NLP 的 MLOps
- **第 19 課：** 現代 LLM 和 NLP — RAG、代理、2026 年趨勢
- **第 20 課：** Capstone 專案 — 建構端對端 NLP 平台

## 先決條件

- **基礎Python**（變數、函數、類別、列表理解）
- **數學**：基本線性代數（向量、矩陣）、機率
- 對機器學習的基本了解（監督/無監督）
- 無需具備 NLP 經驗

## 使用的工具

-Python 3.10+
- PyTorch / TensorFlow
- 擁抱臉部變壓器、資料集、分詞器
- spaCy、NLTK、Gensim
- 谷歌Colab（免費GPU）
- 用於模型服務的 FastAPI
