---
id: 019c9619-ff07-7007-a007-ff0700000007
title: 'Bài 7: Query Transformation — HyDE, Multi-Query, Step-Back'
slug: bai-7-query-transformation
description: >-
  Biến đổi câu hỏi user để retrieval chính xác hơn. HyDE (tạo hypothetical
  document), Multi-Query (sinh nhiều biến thể), Step-Back (hỏi tổng quan
  trước).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Query & Retrieval Nâng cao"
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: "RAG Thực Chiến: Từ Basic đến Advanced"
  slug: rag-thuc-chien
---

![Query Transformation: HyDE, Multi-Query, Step-Back](/storage/uploads/2026/04/rag-bai-7-query-transform.png)

## Giới thiệu

Câu hỏi của người dùng thường **không lý tưởng** cho việc tìm kiếm: quá ngắn, mơ hồ, hoặc dùng từ khác tài liệu. Query Transformation biến đổi câu hỏi gốc thành dạng **tối ưu cho retrieval**.

> **Ví dụ:** User hỏi "Nghỉ phép thế nào?" → quá mơ hồ. Biến đổi thành:
> - "Quy trình xin nghỉ phép năm và các bước phê duyệt"
> - "Số ngày nghỉ phép cho nhân viên full-time và part-time"
> - "Chính sách nghỉ phép khi nhân viên có việc khẩn cấp"
> → 3 queries tìm kiếm 3 khía cạnh khác nhau!

Bài này cover 3 kỹ thuật chính:

| Kỹ thuật | Ý tưởng | Khi nào dùng |
|---------|---------|-------------|
| **Multi-Query** | Sinh nhiều biến thể của câu hỏi | Câu hỏi mơ hồ, nhiều khía cạnh |
| **HyDE** | Tạo "đáp án giả" để tìm đáp án thật | Query ngắn, khác ngôn ngữ tài liệu |
| **Step-Back** | Hỏi câu tổng quan trước | Câu hỏi quá cụ thể |

---

## 1. Multi-Query — Sinh nhiều biến thể

### 1.1 Vấn đề

```
User query:    "lương thế nào?"
Vector search: tìm 1 lần → có thể miss "chế độ đãi ngộ", "phúc lợi"

Multi-Query:   "lương thế nào?" → LLM sinh 3 queries:
               Q1: "Mức lương cơ bản và bậc lương"
               Q2: "Chế độ đãi ngộ, thưởng, phúc lợi"
               Q3: "Quy trình review và tăng lương"
               → Search 3 lần → merge kết quả → cover nhiều khía cạnh!
```

### 1.2 Implementation

```python
"""Multi-Query Retriever — tự sinh nhiều câu hỏi biến thể"""
from langchain.retrievers import MultiQueryRetriever
from langchain_openai import ChatOpenAI
from langchain_community.vectorstores import Chroma

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)
vectorstore = Chroma(...)  # Đã index sẵn

retriever = MultiQueryRetriever.from_llm(
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    llm=llm,
)

# Nội bộ: LLM sinh 3 câu hỏi khác nhau, search mỗi câu, merge kết quả
results = retriever.invoke("lương thế nào?")
# Trả về documents từ CẢ 3 queries (đã deduplicate)
```

### 1.3 Custom prompt cho Multi-Query

```python
"""Custom prompt — kiểm soát cách sinh biến thể"""
from langchain.prompts import PromptTemplate

MULTI_QUERY_PROMPT = PromptTemplate(
    input_variables=["question"],
    template="""Bạn là AI assistant. Nhiệm vụ: sinh 3 câu hỏi biến thể
cho câu hỏi gốc, mỗi câu tập trung 1 khía cạnh khác nhau.

Câu hỏi gốc: {question}

Sinh 3 câu hỏi (mỗi câu 1 dòng, không đánh số):""",
)

retriever = MultiQueryRetriever.from_llm(
    retriever=vectorstore.as_retriever(),
    llm=llm,
    prompt=MULTI_QUERY_PROMPT,
)
```

> **💡 Bài tập 1:** Implement Multi-Query Retriever. So sánh retrieval recall giữa single query vs multi-query trên 10 câu test. Multi-query có cover nhiều khía cạnh hơn không?

---

## 2. HyDE — Hypothetical Document Embeddings

### 2.1 Ý tưởng

```
Vấn đề: User query (câu hỏi) và document (đáp án)
         có dạng KHÁC NHAU → embedding khác nhau

Query:   "Nghỉ phép bao nhiêu ngày?"     → embedding Q
Doc:     "Nhân viên full-time được 15     → embedding D
          ngày phép mỗi năm."

Q và D có thể cách xa nhau trong vector space!

HyDE giải quyết:
1. LLM tạo "đáp án giả" từ câu hỏi (hypothetical document)
2. Embed đáp án giả → gần hơn với đáp án thật
3. Dùng embedding đáp án giả để tìm đáp án thật

Query:      "Nghỉ phép bao nhiêu ngày?"
            ↓ LLM generate
HyDE doc:   "Theo chính sách công ty, nhân viên toàn thời gian
             được hưởng 15 ngày nghỉ phép có lương mỗi năm..."
            ↓ embed
HyDE embed: [0.45, 0.12, ...]  ← GẦN với doc thật hơn!
            ↓ search
Real doc:   "Nhân viên full-time: 15 ngày phép/năm" ← MATCH!
```

### 2.2 Implementation

```python
"""HyDE — Hypothetical Document Embeddings"""
from langchain.chains import HypotheticalDocumentEmbedder
from langchain_openai import ChatOpenAI, OpenAIEmbeddings

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# HyDE embedder: wrap LLM + embedding
hyde_embeddings = HypotheticalDocumentEmbedder.from_llm(
    llm=llm,
    base_embeddings=embeddings,
    prompt_key="web_search",  # Hoặc custom prompt
)

# Dùng HyDE embeddings thay OpenAIEmbeddings trong retriever
vectorstore = Chroma(
    collection_name="docs",
    embedding_function=hyde_embeddings,  # ← HyDE thay vì direct
)

retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
results = retriever.invoke("Nghỉ phép bao nhiêu ngày?")
```

### 2.3 Custom HyDE Prompt

```python
"""Custom prompt cho HyDE — kiểm soát chất lượng hypothetical doc"""
from langchain.prompts import PromptTemplate

HYDE_PROMPT = PromptTemplate(
    input_variables=["question"],
    template="""Viết 1 đoạn văn ngắn (50-100 từ) trả lời câu hỏi sau,
giả sử bạn đang viết tài liệu chính thức cho công ty:

Câu hỏi: {question}

Đoạn trả lời:""",
)

hyde_embeddings = HypotheticalDocumentEmbedder(
    llm_chain=LLMChain(llm=llm, prompt=HYDE_PROMPT),
    base_embeddings=embeddings,
)
```

### 2.4 Khi nào dùng HyDE?

| Scenario | HyDE có hiệu quả? | Lý do |
|---------|:---:|-------|
| Query ngắn (2-3 từ) | ✅ | Expand thành đoạn giàu context |
| Query dạng câu hỏi, doc dạng tường thuật | ✅ | Bridge gap question↔answer |
| Cross-language (hỏi tiếng Việt, doc English) | ✅ | LLM generate cùng ngôn ngữ doc |
| Query đã rõ ràng, dài | ❌ | HyDE thêm noise |
| Real-time (latency-critical) | ❌ | Thêm 1 LLM call = chậm hơn |

> **💡 Bài tập 2:** So sánh retrieval accuracy: direct embedding vs HyDE. Dùng 10 câu hỏi ngắn (2-3 từ). HyDE tốt hơn bao nhiêu %?

---

## 3. Step-Back Prompting

### 3.1 Ý tưởng

```
Câu hỏi quá CỤ THỂ: "Nhân viên bộ phận Kế toán nghỉ phép
                       ngày 31/12 có được không?"

Vector search: không tìm thấy (quá cụ thể, không ai viết exact match)

Step-Back: Lùi 1 bước → hỏi câu TỔNG QUÁT trước:
           "Quy định nghỉ phép vào ngày lễ, cuối năm?"
           → Tìm được! Rồi kết hợp context trả lời câu cụ thể.
```

### 3.2 Implementation

```python
"""Step-Back Prompting cho RAG"""
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# Step 1: Generate step-back question
step_back_prompt = ChatPromptTemplate.from_messages([
    ("system", """Bạn là expert tạo câu hỏi tổng quát hơn.
Cho 1 câu hỏi cụ thể, tạo câu hỏi TỔNG QUÁT hơn 1 bậc
để tìm kiếm context rộng hơn."""),
    ("human", "Câu hỏi: {question}\n\nCâu hỏi tổng quát hơn:"),
])

step_back_chain = step_back_prompt | llm

# Step 2: Search cả câu gốc + step-back
def step_back_retrieval(question: str, retriever):
    # Tạo step-back question
    step_back_q = step_back_chain.invoke({"question": question}).content
    
    # Search cả 2
    original_docs = retriever.invoke(question)
    step_back_docs = retriever.invoke(step_back_q)
    
    # Merge + deduplicate
    all_docs = original_docs + step_back_docs
    seen = set()
    unique_docs = []
    for doc in all_docs:
        key = doc.page_content[:100]
        if key not in seen:
            seen.add(key)
            unique_docs.append(doc)
    
    return unique_docs

results = step_back_retrieval(
    "Nhân viên Kế toán nghỉ phép ngày 31/12 có được không?",
    retriever
)
```

---

## 4. Kết hợp nhiều kỹ thuật

### 4.1 Pipeline thực tế

```
User query
    │
    ├──→ Multi-Query (sinh 3 biến thể)
    │        │
    │        ├──→ Query 1 → Vector search → docs_1
    │        ├──→ Query 2 → Vector search → docs_2
    │        └──→ Query 3 → Vector search → docs_3
    │
    ├──→ Step-Back (câu tổng quát)
    │        └──→ BM25 search → docs_4
    │
    └──→ HyDE (hypothetical doc)
             └──→ Vector search → docs_5
    
    Merge all → Deduplicate → Re-rank (bài tiếp theo) → Top K
```

### 4.2 Routing — Chọn strategy theo loại query

```python
"""Router: tự chọn strategy phù hợp với câu hỏi"""
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

router_prompt = ChatPromptTemplate.from_messages([
    ("system", """Phân loại câu hỏi thành 1 trong 3 loại:
- MULTI_QUERY: câu hỏi mơ hồ, nhiều khía cạnh
- HYDE: câu hỏi ngắn, khó match trực tiếp
- STEP_BACK: câu hỏi quá cụ thể, cần context rộng
- DIRECT: câu hỏi rõ ràng, không cần transform

Chỉ trả lời 1 từ: MULTI_QUERY, HYDE, STEP_BACK, hoặc DIRECT."""),
    ("human", "{question}"),
])

def smart_retrieve(question, retriever):
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    strategy = (router_prompt | llm).invoke({"question": question}).content.strip()
    
    if strategy == "MULTI_QUERY":
        return multi_query_retrieve(question, retriever)
    elif strategy == "HYDE":
        return hyde_retrieve(question, retriever)
    elif strategy == "STEP_BACK":
        return step_back_retrieval(question, retriever)
    else:
        return retriever.invoke(question)
```

> **💡 Bài tập 3:** Implement router. Test với 15 câu hỏi (5 mơ hồ, 5 ngắn, 5 cụ thể). Router chọn đúng strategy bao nhiêu %?

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Multi-Query** | Sinh nhiều biến thể, tìm nhiều khía cạnh |
| **HyDE** | Tạo đáp án giả → embed → tìm đáp án thật |
| **Step-Back** | Hỏi tổng quát trước, cụ thể sau |
| **Router** | Tự chọn strategy theo loại câu hỏi |
| **Combine** | Kết hợp nhiều kỹ thuật + merge + dedup |

## Bài tập tổng hợp

1. ✅ Hoàn thành 3 bài tập nhỏ (1, 2, 3)
2. **Full Pipeline:** Implement pipeline kết hợp: Router → chọn strategy → retrieve → merge. Test trên 20 câu hỏi đa dạng.
3. **Benchmark:** So sánh accuracy 4 approaches (direct, multi-query, HyDE, step-back) trên cùng 1 dataset. Vẽ biểu đồ so sánh.
4. **Latency vs Quality:** Đo thời gian xử lý mỗi strategy. HyDE chậm hơn bao nhiêu? Multi-query chậm hơn bao nhiêu? Trade-off có đáng?

> **Bài tiếp theo:** Re-Ranking & Contextual Compression — sau khi retrieve xong, làm sao chọn đúng chunks tốt nhất và nén context cho LLM.
