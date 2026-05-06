import fs from "fs";
import path from "path";

const roadmapPath = "data/roadmaps/ai-engineer.json";
const roadmap = JSON.parse(fs.readFileSync(roadmapPath, "utf8"));

const linkByItem = {
  "AI product framing và success metrics": {
    label: "AI Engineer là gì? Từ prototype LLM đến sản phẩm AI production",
    url: "/blog/ai-engineer-production-readiness",
    type: "article",
  },
};

const artifactByItem = {
  "Vai trò AI Engineer trong product team": {
    lab: "Lab: viết AI feature brief 1 trang cho một assistant FAQ",
    artifact: "Artifact: role matrix + production readiness checklist",
    checklist: "Checklist: nêu được owner của quality, safety, cost, release và incident",
  },
  "Python, TypeScript và API backend cho AI apps": {
    lab: "Lab: build endpoint AI có timeout, retry, request_id và output validation",
    artifact: "Artifact: API contract + logging schema + env config checklist",
    checklist: "Checklist: chạy được endpoint và debug được lỗi timeout/invalid output",
  },
  "LLM mental model: token, context, embedding, fine-tuning": {
    lab: "Lab: tính token budget và so sánh prompt-only, RAG, fine-tuning cho 1 use case",
    artifact: "Artifact: decision tree Prompt vs RAG vs Fine-tuning",
    checklist: "Checklist: giải thích được context window, embedding và token cost bằng ví dụ",
  },
  "AI product framing và success metrics": {
    lab: "Lab: chuyển yêu cầu 'thêm AI chatbot' thành scope, metric và risk register",
    artifact: "Artifact: AI feature brief + success/guardrail metrics",
    checklist: "Checklist: có go/no-go criteria và fallback rõ ràng",
  },
  "Prompt contract và instruction hierarchy": {
    lab: "Lab: viết prompt contract versioned cho ticket classifier",
    artifact: "Artifact: prompt contract + changelog + examples",
    checklist: "Checklist: prompt có role, task, context, rules, output format và refusal behavior",
  },
  "Structured output, JSON schema và validation": {
    lab: "Lab: validate output bằng JSON schema/Zod/Pydantic và retry khi invalid",
    artifact: "Artifact: output schema + repair policy",
    checklist: "Checklist: backend không parse free-form text cho downstream workflow",
  },
  "Model selection, temperature và latency/cost trade-off": {
    lab: "Lab: benchmark cùng eval set qua 3 model/cấu hình",
    artifact: "Artifact: model comparison table + ADR chọn model",
    checklist: "Checklist: tính được cost per successful task, p95 latency và invalid output rate",
  },
  "Prompt regression tests": {
    lab: "Lab: tạo 50 prompt regression cases và chạy lại khi đổi prompt/model",
    artifact: "Artifact: golden dataset + regression report",
    checklist: "Checklist: biết block release khi correctness hoặc schema validity tụt",
  },
  "Data ingestion, chunking và metadata strategy": {
    lab: "Lab: ingest 20 tài liệu, chunk theo heading và gắn metadata",
    artifact: "Artifact: metadata schema + re-index policy",
    checklist: "Checklist: chunk có source, owner, updated_at, product_area và access_level",
  },
  "Embeddings, vector search và hybrid retrieval": {
    lab: "Lab: so sánh dense search, keyword search và hybrid retrieval",
    artifact: "Artifact: retrieval benchmark top-k + threshold notes",
    checklist: "Checklist: dùng metadata filter trước khi đưa context vào prompt",
  },
  "Grounded answer, citation và refusal": {
    lab: "Lab: thêm answer schema gồm answer, citations, confidence và missing_info",
    artifact: "Artifact: citation policy + no-answer policy",
    checklist: "Checklist: model biết từ chối khi context thiếu hoặc mâu thuẫn",
  },
  "Retrieval evaluation": {
    lab: "Lab: tạo 100 câu hỏi có expected supporting documents",
    artifact: "Artifact: RAG eval report context recall/precision/groundedness",
    checklist: "Checklist: phân biệt được lỗi retrieval, lỗi prompt và lỗi citation",
  },
  "Workflow vs agent decision framework": {
    lab: "Lab: thiết kế cùng một use case bằng workflow và agent rồi so sánh",
    artifact: "Artifact: workflow-agent decision record",
    checklist: "Checklist: nêu được khi nào không nên dùng agent",
  },
  "Tool calling, function schema và idempotency": {
    lab: "Lab: thiết kế 3 tools read/draft/write có schema và dry-run",
    artifact: "Artifact: tool catalog + permission matrix",
    checklist: "Checklist: write tool có confirmation, idempotency key và audit log",
  },
  "Agent memory, state và context engineering": {
    lab: "Lab: tách runtime state, conversation summary, user preference và domain memory",
    artifact: "Artifact: memory policy + context budget map",
    checklist: "Checklist: chặn được stale memory, memory poisoning và cross-user leak",
  },
  "Agent trace và trajectory evaluation": {
    lab: "Lab: chấm 30 agent tasks theo expected tools và argument correctness",
    artifact: "Artifact: trajectory eval dataset + failure taxonomy",
    checklist: "Checklist: phát hiện tool sai, tool thừa, tool thiếu và loop",
  },
  "Eval objective, dataset và rubrics": {
    lab: "Lab: viết rubric 1-5 cho correctness, groundedness, helpfulness và safety",
    artifact: "Artifact: eval plan + dataset card",
    checklist: "Checklist: dataset có typical, edge, adversarial và production cases",
  },
  "Automated graders và human-in-the-loop": {
    lab: "Lab: kết hợp schema check, exact match, LLM judge và human review queue",
    artifact: "Artifact: grader config + human review SOP",
    checklist: "Checklist: biết metric nào objective, metric nào cần human calibration",
  },
  "Continuous evaluation trong CI/CD": {
    lab: "Lab: tạo command eval và fail CI khi regression vượt ngưỡng",
    artifact: "Artifact: CI eval report + release gate policy",
    checklist: "Checklist: release bị block khi unsafe rate tăng hoặc correctness giảm",
  },
  "Online feedback và data flywheel": {
    lab: "Lab: thu feedback event và promote failed cases vào eval dataset",
    artifact: "Artifact: feedback schema + sampling policy",
    checklist: "Checklist: mỗi incident/negative feedback tạo được eval case mới",
  },
  "OWASP LLM risks và threat modeling": {
    lab: "Lab: viết abuse cases cho RAG/agent app theo LLM risks",
    artifact: "Artifact: LLM threat model + risk register",
    checklist: "Checklist: có mitigation cho prompt injection, data leak và excessive agency",
  },
  "Input/output guardrails": {
    lab: "Lab: thêm pre-model và post-model checks cho một AI endpoint",
    artifact: "Artifact: guardrail pipeline + escalation policy",
    checklist: "Checklist: unsafe, PII, ungrounded và out-of-scope requests có fallback",
  },
  "Tool permission và least privilege cho agents": {
    lab: "Lab: lọc tool list theo role, tenant, action type và risk level",
    artifact: "Artifact: least-privilege tool permission matrix",
    checklist: "Checklist: user không có quyền thì agent cũng không có quyền",
  },
  "Data governance, privacy và compliance basics": {
    lab: "Lab: lập data inventory cho prompt, response, logs, evals và retrieved docs",
    artifact: "Artifact: retention/deletion policy + tenant isolation checklist",
    checklist: "Checklist: biết dữ liệu nào chứa PII, secrets hoặc customer confidential",
  },
  "LLM observability và tracing": {
    lab: "Lab: gắn trace id qua request, retrieval, model call, tool call và feedback",
    artifact: "Artifact: trace schema + latency/cost dashboard",
    checklist: "Checklist: debug được một câu trả lời sai từ trace đến failed eval case",
  },
  "Latency và cost optimization": {
    lab: "Lab: áp dụng caching, context pruning và model routing cho một endpoint",
    artifact: "Artifact: cost optimization report",
    checklist: "Checklist: giảm cost/latency mà không làm tụt eval score quá ngưỡng",
  },
  "Deployment, rollback và incident response": {
    lab: "Lab: release prompt/model bằng feature flag và chuẩn bị rollback",
    artifact: "Artifact: deployment checklist + incident runbook",
    checklist: "Checklist: có kill switch, rollback prompt/model/index và postmortem template",
  },
  "Portfolio, certifications và interview readiness": {
    lab: "Lab: viết case study AI Engineer có demo, eval, safety và cost section",
    artifact: "Artifact: portfolio case study + interview story bank",
    checklist: "Checklist: giải thích được trade-off RAG vs fine-tuning, workflow vs agent, speed vs quality",
  },
};

const quizByItem = {
  "Python, TypeScript và API backend cho AI apps": [
    {
      q: "Một AI endpoint production tối thiểu cần log gì để debug?",
      options: ["Chỉ raw prompt đầy đủ", "Request id, latency, model version, token usage, error type và metadata đã redact", "Chỉ status 200/500", "Không cần log vì model provider đã lo"],
      answer: 1,
      explanation: "Trace và metadata đã redact giúp debug mà không làm lộ dữ liệu nhạy cảm.",
    },
    {
      q: "Khi model trả invalid JSON, cách xử lý nào an toàn hơn?",
      options: ["Parse bằng regex rồi ghi DB", "Retry có giới hạn hoặc fallback sau khi validate schema fail", "Bỏ qua validation", "Tăng temperature"],
      answer: 1,
      explanation: "Output model là untrusted data. Cần schema validation, retry có giới hạn và fallback rõ.",
    },
  ],
  "LLM mental model: token, context, embedding, fine-tuning": [
    {
      q: "Embedding chủ yếu dùng để làm gì trong RAG?",
      options: ["Mã hóa password", "So sánh độ tương đồng ngữ nghĩa để tìm context liên quan", "Giảm latency UI", "Thay thế hoàn toàn access control"],
      answer: 1,
      explanation: "Embedding biến nội dung thành vector để semantic search, nhưng vẫn cần metadata và permission filter.",
    },
    {
      q: "Khi tài liệu thay đổi thường xuyên, hướng nào thường phù hợp hơn fine-tuning?",
      options: ["RAG với re-index/freshness policy", "Tăng output tokens", "Xóa eval dataset", "Dùng temperature cao hơn"],
      answer: 0,
      explanation: "RAG phù hợp hơn cho knowledge base sống vì có thể cập nhật retrieval index mà không train lại model.",
    },
  ],
  "AI product framing và success metrics": [
    {
      q: "Success metric tốt cho AI support assistant nên đo gì?",
      options: ["Số lần gọi model càng nhiều càng tốt", "Task completion, answer helpfulness, escalation rate, latency và cost per task", "Màu giao diện", "Số dòng prompt"],
      answer: 1,
      explanation: "Metric cần gắn với giá trị sản phẩm và khả năng vận hành, không chỉ hoạt động kỹ thuật.",
    },
    {
      q: "Guardrail metric dùng để làm gì?",
      options: ["Đo rủi ro như unsafe answer, hallucination report, citation missing hoặc PII leak", "Thay thế toàn bộ success metric", "Chỉ dùng khi thiết kế logo", "Làm model nhanh hơn"],
      answer: 0,
      explanation: "Guardrail metric giúp release AI có ranh giới an toàn và điều kiện go/no-go rõ.",
    },
  ],
  "Prompt contract và instruction hierarchy": [
    {
      q: "Prompt changelog hữu ích nhất khi nào?",
      options: ["Khi cần truy vết vì sao behavior thay đổi sau mỗi version", "Khi muốn prompt dài hơn", "Khi không có eval", "Khi chỉ demo nội bộ"],
      answer: 0,
      explanation: "Prompt là contract sống, cần version và changelog như code/config production.",
    },
  ],
  "Structured output, JSON schema và validation": [
    {
      q: "Structured output vẫn cần business validation vì sao?",
      options: ["Schema chỉ kiểm tra shape/type, không tự đảm bảo business rule đúng", "Schema làm model không bao giờ sai", "Validation chỉ dành cho frontend", "Không cần nếu model mạnh"],
      answer: 0,
      explanation: "JSON hợp lệ vẫn có thể sai enum, sai ngữ nghĩa hoặc vi phạm policy nếu không validate business rules.",
    },
  ],
  "Model selection, temperature và latency/cost trade-off": [
    {
      q: "Metric nào tốt hơn cost/request khi so sánh model?",
      options: ["Cost per successful task", "Số chữ trong prompt", "Tên model dài hay ngắn", "Số màu trong UI"],
      answer: 0,
      explanation: "Model rẻ nhưng fail nhiều có thể đắt hơn tính theo task thành công.",
    },
    {
      q: "Model routing nghĩa là gì?",
      options: ["Dùng một model cho mọi task", "Route task dễ sang model nhỏ, task khó/low confidence sang model mạnh hoặc human review", "Random chọn model", "Chỉ đổi model khi deploy lỗi"],
      answer: 1,
      explanation: "Routing giúp cân bằng quality, latency và cost theo độ khó/rủi ro của task.",
    },
  ],
  "Prompt regression tests": [
    {
      q: "Khi nào nên chạy prompt regression tests?",
      options: ["Khi đổi prompt, model, schema, retrieval logic hoặc safety policy", "Chỉ cuối năm", "Chỉ khi user khen", "Không cần nếu có demo"],
      answer: 0,
      explanation: "Mỗi thay đổi có thể tạo regression hành vi nên cần chạy lại eval set.",
    },
    {
      q: "Golden dataset nên có gì ngoài happy path?",
      options: ["Edge cases, adversarial cases, missing data và historical failures", "Chỉ 5 câu dễ", "Chỉ câu hỏi do model tự tạo", "Chỉ dữ liệu tiếng Anh"],
      answer: 0,
      explanation: "Dataset phải đại diện cho rủi ro thật, không chỉ demo đẹp.",
    },
  ],
  "Data ingestion, chunking và metadata strategy": [
    {
      q: "Metadata nào quan trọng cho RAG enterprise?",
      options: ["source, updated_at, owner, access_level, tenant/product_area", "Màu nền tài liệu", "Tên file không cần version", "Số emoji trong doc"],
      answer: 0,
      explanation: "Metadata giúp filter đúng quyền, freshness, owner và domain trước khi đưa context vào prompt.",
    },
    {
      q: "Chunk quá lớn thường gây vấn đề gì?",
      options: ["Context nhiễu, tốn token và retrieval kém chính xác", "Model tự train lại", "Không cần citation", "Giảm cost tuyệt đối"],
      answer: 0,
      explanation: "Chunk quá lớn làm context loãng và khó xác định đoạn hỗ trợ answer.",
    },
  ],
  "Embeddings, vector search và hybrid retrieval": [
    {
      q: "Hybrid retrieval hữu ích nhất khi nào?",
      options: ["Khi query có mã lỗi, SKU, endpoint hoặc thuật ngữ chính xác", "Khi không có dữ liệu", "Khi muốn bỏ metadata", "Khi không cần eval"],
      answer: 0,
      explanation: "Keyword search vẫn mạnh với token chính xác; semantic search mạnh với paraphrase. Hybrid kết hợp cả hai.",
    },
  ],
  "Grounded answer, citation và refusal": [
    {
      q: "Khi retrieved context không đủ, behavior tốt nhất là gì?",
      options: ["Bịa câu trả lời hợp lý", "Từ chối hoặc hỏi thêm thông tin, kèm missing_info/next_action", "Ẩn citation", "Tăng temperature"],
      answer: 1,
      explanation: "No-answer policy giúp giảm hallucination và giữ niềm tin của user.",
    },
    {
      q: "Citation tốt cần hỗ trợ điều gì?",
      options: ["Claim quan trọng trong answer", "Trang trí UI", "Thay thế permission check", "Làm output dài hơn"],
      answer: 0,
      explanation: "Citation phải cho phép user/auditor kiểm tra nguồn của factual claims.",
    },
  ],
  "Retrieval evaluation": [
    {
      q: "Context recall đo gì?",
      options: ["Retrieved contexts có chứa tài liệu/đoạn đúng cần thiết hay không", "Model viết dài không", "Số người dùng online", "Màu chart"],
      answer: 0,
      explanation: "Nếu retrieval không lấy đúng nguồn, model khó trả lời grounded dù prompt tốt.",
    },
    {
      q: "Nếu answer sai, bước debug nào nên làm trước?",
      options: ["Kiểm tra retrieved docs có đúng không", "Đổi màu UI", "Xóa toàn bộ eval", "Tăng max tokens vô hạn"],
      answer: 0,
      explanation: "RAG lỗi có thể đến từ retrieval, prompt, model hoặc citation mapping; retrieval là lớp cần tách riêng để đo.",
    },
  ],
  "Workflow vs agent decision framework": [
    {
      q: "Hybrid workflow-agent thường an toàn hơn vì sao?",
      options: ["Code giữ policy/boundaries, agent xử lý phần linh hoạt trong phạm vi hẹp", "Agent được toàn quyền", "Không cần eval", "Không cần permission"],
      answer: 0,
      explanation: "Hybrid cho phép linh hoạt có kiểm soát, nhất là với tool write hoặc domain rủi ro.",
    },
  ],
  "Tool calling, function schema và idempotency": [
    {
      q: "Tool write production cần gì để retry an toàn?",
      options: ["Idempotency key", "Temperature cao", "Tên tool thật ngắn", "Không cần audit"],
      answer: 0,
      explanation: "Idempotency giúp retry không tạo side effect lặp như gửi nhiều email hoặc refund nhiều lần.",
    },
    {
      q: "Tool nào thường cần confirmation?",
      options: ["Tool read-only search docs", "Tool có side effect như gửi email, cập nhật CRM hoặc refund", "Tool format text nội bộ", "Tool tính token"],
      answer: 1,
      explanation: "Write/external side-effect tools có rủi ro nên cần dry-run/confirmation/approval.",
    },
  ],
  "Agent memory, state và context engineering": [
    {
      q: "Vì sao không nên lưu mọi user input vào memory dài hạn?",
      options: ["Có thể lưu suy đoán sai, PII hoặc instruction độc hại", "Vì memory luôn miễn phí", "Vì model không dùng memory", "Vì làm UI xấu"],
      answer: 0,
      explanation: "Memory cần policy, TTL, ownership, review và khả năng xóa.",
    },
    {
      q: "Context engineering là gì?",
      options: ["Chọn đúng thông tin đưa vào prompt theo budget và mục tiêu", "Nhét toàn bộ lịch sử vào prompt", "Tăng font size", "Chỉ viết system prompt dài"],
      answer: 0,
      explanation: "Context tốt là đủ và đúng, không phải càng nhiều càng tốt.",
    },
  ],
  "Agent trace và trajectory evaluation": [
    {
      q: "Trajectory eval đo gì?",
      options: ["Tool nào được gọi, thứ tự, argument, số bước và loop", "Chỉ final answer nghe hay không", "Màu logo", "Số file trong repo"],
      answer: 0,
      explanation: "Agent có thể final answer ổn nhưng dùng tool sai hoặc gây side effect nguy hiểm.",
    },
    {
      q: "Một lỗi trajectory nguy hiểm là gì?",
      options: ["Agent gọi send_email trước khi user confirmation", "Agent trả lời ngắn", "Agent dùng dark mode", "Agent có ít icon"],
      answer: 0,
      explanation: "Tool write/external side effect cần confirmation và permission gate trước khi thực thi.",
    },
  ],
  "Eval objective, dataset và rubrics": [
    {
      q: "Rubric tốt cần đặc điểm gì?",
      options: ["Tiêu chí cụ thể để reviewer chấm nhất quán", "Mơ hồ để linh hoạt", "Không cần ví dụ", "Chỉ một mức pass/fail cho mọi task"],
      answer: 0,
      explanation: "Rubric cụ thể giúp human review và LLM judge ít lệch hơn.",
    },
  ],
  "Automated graders và human-in-the-loop": [
    {
      q: "Metric nào thường objective hơn?",
      options: ["JSON schema validity", "Helpfulness tổng quát", "Tone dễ chịu", "Mức sáng tạo"],
      answer: 0,
      explanation: "Schema validity có thể kiểm bằng code; helpfulness thường cần rubric/judge/human calibration.",
    },
    {
      q: "Khi nào cần human review?",
      options: ["Case ambiguous, high-risk, low confidence hoặc failed judge calibration", "Mọi request không phân biệt", "Không bao giờ", "Chỉ khi UI lỗi"],
      answer: 0,
      explanation: "Human review nên tập trung vào vùng rủi ro và vùng metric tự động chưa tin cậy.",
    },
  ],
  "Continuous evaluation trong CI/CD": [
    {
      q: "Release gate cho AI nên block khi nào?",
      options: ["Unsafe rate tăng hoặc correctness/groundedness giảm vượt ngưỡng", "Logo hơi nhỏ", "Prompt ngắn hơn", "Dataset có thêm case"],
      answer: 0,
      explanation: "Release gate bảo vệ chất lượng và safety khi đổi prompt/model/RAG/tool.",
    },
    {
      q: "Eval report CI nên ghi thêm gì ngoài score?",
      options: ["Failed examples, latency, token usage và cost", "Chỉ ngày chạy", "Chỉ tên branch", "Không cần lưu"],
      answer: 0,
      explanation: "Failed examples và cost/latency giúp debug trade-off, không chỉ biết pass/fail.",
    },
  ],
  "Online feedback và data flywheel": [
    {
      q: "Negative feedback production nên dùng ra sao?",
      options: ["Review và promote case phù hợp vào eval dataset", "Xóa đi để score đẹp", "Chỉ đọc cho vui", "Dùng làm logo"],
      answer: 0,
      explanation: "Feedback thật là nguồn tạo eval cases mạnh nhất cho vòng cải tiến.",
    },
    {
      q: "Feedback event nên có gì?",
      options: ["rating, reason, correction nếu có, trace_id và metadata đã redact", "Password user", "Raw secret", "Không cần trace id"],
      answer: 0,
      explanation: "Trace id giúp nối feedback với prompt/model/retrieval/tool call để debug.",
    },
  ],
  "OWASP LLM risks và threat modeling": [
    {
      q: "Threat model LLM app nên bắt đầu từ đâu?",
      options: ["Dữ liệu không tin cậy, quyền tool, sensitive data và impact nếu model sai", "Màu nền", "Tên model", "Số bài blog"],
      answer: 0,
      explanation: "Rủi ro LLM nằm ở input không tin cậy, tool agency, data access và output handling.",
    },
  ],
  "Input/output guardrails": [
    {
      q: "Guardrail tốt nên đặt ở đâu?",
      options: ["Trước model, trong prompt/policy, sau model và quanh tool calls", "Chỉ một câu system prompt", "Chỉ frontend", "Chỉ sau khi incident"],
      answer: 0,
      explanation: "Defense-in-depth cần nhiều lớp vì một lớp có thể fail.",
    },
    {
      q: "Post-model check thường kiểm tra gì?",
      options: ["Unsafe output, PII, schema validity, groundedness/citation và tool call validity", "Màu nút", "Số lượt xem", "Tên file"],
      answer: 0,
      explanation: "Output model là untrusted data, cần kiểm trước khi hiển thị hoặc hành động.",
    },
  ],
  "Tool permission và least privilege cho agents": [
    {
      q: "Least privilege cho agent nghĩa là gì?",
      options: ["Agent chỉ thấy và gọi tools đúng quyền của user/context", "Agent thấy mọi tool để thông minh hơn", "Không cần auth", "Tool nào cũng read-only"],
      answer: 0,
      explanation: "User không có quyền thì agent cũng không có quyền; tool list nên được filter trước.",
    },
    {
      q: "Audit log tool call nên có gì?",
      options: ["trace id, actor, tenant, tool name, arguments đã redact, permission decision, result", "Raw PII đầy đủ", "Chỉ final answer", "Không cần nếu có confirmation"],
      answer: 0,
      explanation: "Audit log giúp điều tra incident và chứng minh action đã được kiểm soát.",
    },
  ],
  "Data governance, privacy và compliance basics": [
    {
      q: "Data inventory AI app nên liệt kê gì?",
      options: ["Prompt, response, retrieved docs, logs, eval data, traces và retention", "Chỉ source code", "Chỉ ảnh banner", "Không cần nếu dùng API ngoài"],
      answer: 0,
      explanation: "AI app xử lý nhiều loại dữ liệu; cần biết nơi lưu, quyền truy cập và retention.",
    },
    {
      q: "Cross-tenant leak trong RAG thường do thiếu gì?",
      options: ["Tenant/access metadata filter", "Ảnh minh họa", "Temperature", "Số quiz"],
      answer: 0,
      explanation: "RAG enterprise bắt buộc filter theo tenant và permission trước khi đưa context vào model.",
    },
  ],
  "LLM observability và tracing": [
    {
      q: "Khi user báo AI trả lời sai, trace giúp kiểm tra gì?",
      options: ["Prompt/model version, retrieved docs, tool calls, latency, token usage và feedback", "Chỉ màu UI", "Chỉ user agent browser", "Không giúp gì"],
      answer: 0,
      explanation: "Trace giúp tìm lỗi nằm ở retrieval, prompt, model, tool hay guardrail.",
    },
  ],
  "Latency và cost optimization": [
    {
      q: "Tối ưu cost nào thường an toàn trước?",
      options: ["Cache stable results, prune context, route task dễ sang model nhỏ và đo eval regression", "Cắt hết guardrails", "Xóa eval", "Không log token"],
      answer: 0,
      explanation: "Tối ưu phải đi cùng eval để không giảm chất lượng/safety ngoài ý muốn.",
    },
    {
      q: "Vì sao cần đo cost per successful task?",
      options: ["Vì retry/failure/escalation làm cost thực khác cost/request", "Vì dễ trang trí dashboard", "Vì không cần latency", "Vì model nào cũng như nhau"],
      answer: 0,
      explanation: "Cost/request thấp không có nghĩa cost sản phẩm thấp nếu failure rate cao.",
    },
  ],
  "Deployment, rollback và incident response": [
    {
      q: "AI app cần version những gì ngoài code?",
      options: ["Prompt, model, retrieval index, tool schema, guardrail policy và eval dataset", "Chỉ package.json", "Chỉ favicon", "Không cần version"],
      answer: 0,
      explanation: "Hành vi AI phụ thuộc nhiều config/tài sản ngoài code; cần version để rollback.",
    },
    {
      q: "Kill switch hữu ích khi nào?",
      options: ["Khi có incident safety/cost/tool misuse cần tắt nhanh feature hoặc quyền tool", "Khi muốn đổi theme", "Khi build warning", "Khi user đăng nhập"],
      answer: 0,
      explanation: "Kill switch giảm blast radius trong incident production.",
    },
  ],
  "Portfolio, certifications và interview readiness": [
    {
      q: "Portfolio AI Engineer mạnh nên có gì ngoài demo?",
      options: ["Architecture, eval report, safety review, cost/latency report và trade-offs", "Chỉ video chatbot", "Chỉ badge chứng chỉ", "Chỉ screenshot UI"],
      answer: 0,
      explanation: "Portfolio production cần chứng minh tư duy engineering, đo lường và vận hành.",
    },
    {
      q: "Trong interview, câu trade-off nào rất thường gặp?",
      options: ["RAG vs fine-tuning, workflow vs agent, quality vs latency/cost", "Logo tròn hay vuông", "Dùng font nào", "Màu card nào"],
      answer: 0,
      explanation: "AI Engineer cần giải thích quyết định kiến trúc theo trade-off thực tế.",
    },
  ],
};

for (const phase of roadmap.phases) {
  for (const item of phase.items) {
    const extraLink = linkByItem[item.name];
    if (extraLink && !item.resourceLinks?.some((link) => link.url === extraLink.url)) {
      item.resourceLinks = [...(item.resourceLinks ?? []), extraLink];
    }

    const artifact = artifactByItem[item.name];
    if (artifact) {
      item.lab = artifact.lab.replace(/^Lab: /, "");
      item.artifact = artifact.artifact.replace(/^Artifact: /, "");
      item.checklist = [artifact.checklist.replace(/^Checklist: /, "")];
      item.outcomes = [
        `Làm được mini-lab: ${item.lab}.`,
        `Tạo được artifact: ${item.artifact}.`,
        `Tự đánh giá được: ${item.checklist[0]}.`,
      ];

      item.resources = item.resources ?? [];
      item.resources = item.resources.filter(
        (resource) => !/^Lab: |^Artifact: |^Checklist: /.test(resource)
      );

      item.learningSteps = item.learningSteps ?? [];
      const labStep = `Hoàn thành ${artifact.lab.replace(/^Lab: /, "").replace(/^[a-z]/, (c) => c.toUpperCase())}.`;
      const artifactStep = `Nộp ${artifact.artifact.replace(/^Artifact: /, "")} để tự chứng minh đã làm được.`;
      const checklistStep = `Tự review: ${artifact.checklist.replace(/^Checklist: /, "")}.`;
      for (const step of [labStep, artifactStep, checklistStep]) {
        if (!item.learningSteps.includes(step)) item.learningSteps.push(step);
      }
    }

    const additions = quizByItem[item.name] ?? [];
    item.quiz = item.quiz ?? [];
    for (const question of additions) {
      if (item.quiz.length >= 2) break;
      if (!item.quiz.some((existing) => existing.q === question.q)) item.quiz.push(question);
    }
  }
}

fs.writeFileSync(roadmapPath, `${JSON.stringify(roadmap, null, 2)}\n`);

const postEnhancements = {
  "ai-engineer-production-readiness": {
    outcome: [
      "Phân biệt được AI Engineer với ML Engineer, Backend Engineer và Data Scientist.",
      "Viết được AI feature brief có success metric, guardrail metric và fallback.",
      "Tự đánh giá một prototype đã đủ production-ready hay chưa.",
    ],
    lab: "Chọn một chatbot FAQ hoặc ticket assistant. Viết 1 trang AI feature brief gồm user, task, dữ liệu được phép dùng, metric, rủi ro, fallback và go/no-go criteria.",
    checklist: ["Có owner cho quality/safety/cost không?", "Có eval trước release không?", "Có fallback khi model lỗi không?"],
  },
  "backend-ai-apps-python-typescript": {
    outcome: [
      "Build được endpoint AI có timeout, retry, request_id và structured logging.",
      "Biết khi nào dùng streaming, queue và background job.",
      "Thiết kế được config/secret handling tối thiểu cho staging và production.",
    ],
    lab: "Tạo endpoint phân loại ticket trả JSON, validate schema, retry 1 lần khi invalid, log latency/token/error đã redact.",
    checklist: ["Output có schema không?", "Retry có giới hạn không?", "Log có raw PII không?"],
  },
  "llm-mental-model-token-context-embedding": {
    outcome: [
      "Giải thích được token, context window, embedding, RAG và fine-tuning bằng ví dụ.",
      "Chọn được prompt-only, RAG hoặc fine-tuning cho một use case cụ thể.",
      "Tính được token budget sơ bộ cho một request production.",
    ],
    lab: "Lấy 20 FAQ, chạy prompt-only và RAG đơn giản, so sánh câu nào đúng, câu nào bịa, câu nào thiếu nguồn.",
    checklist: ["Có token budget không?", "Có biết dữ liệu nào nằm ngoài context không?", "Có decision tree Prompt/RAG/Fine-tuning không?"],
  },
  "prompt-contract-structured-output-ai": {
    outcome: [
      "Viết được prompt contract có role, task, context, rules, examples và output schema.",
      "Validate output model trước khi đưa vào workflow downstream.",
      "Tạo được regression cases cho prompt change.",
    ],
    lab: "Viết ticket classifier prompt contract, JSON schema, 20 test cases và retry policy khi model trả invalid output.",
    checklist: ["Backend còn parse free-form text không?", "Schema có enum/required fields không?", "Có changelog prompt không?"],
  },
  "model-selection-cost-latency-ai": {
    outcome: [
      "Benchmark được model theo quality, latency, cost và invalid output rate.",
      "Thiết kế được model routing cho task dễ/khó/high-risk.",
      "Viết được ADR chọn model bằng số liệu.",
    ],
    lab: "Chạy 50 cases qua 2-3 model hoặc cấu hình, lập bảng quality, p95 latency, token usage và cost per successful task.",
    checklist: ["Có cost per successful task không?", "Có threshold low confidence không?", "Có route sang human review không?"],
  },
  "rag-ingestion-vector-hybrid-retrieval": {
    outcome: [
      "Thiết kế được ingestion pipeline có chunking và metadata.",
      "So sánh được dense, keyword và hybrid retrieval.",
      "Biết dùng permission/freshness filter trước khi đưa context vào model.",
    ],
    lab: "Ingest 20 tài liệu, chunk theo heading, gắn metadata, chạy 50 câu hỏi và đo top-k có lấy đúng source không.",
    checklist: ["Chunk có owner/updated_at/access_level không?", "Có re-index policy không?", "Có hybrid search cho mã lỗi/SKU/API không?"],
  },
  "rag-groundedness-evaluation": {
    outcome: [
      "Thiết kế được answer schema có citation, confidence và missing_info.",
      "Đo được context recall, context precision, groundedness và citation accuracy.",
      "Viết được no-answer policy cho RAG.",
    ],
    lab: "Tạo 100 câu hỏi có expected supporting docs, đo top-3 recall và chấm groundedness thủ công cho 20 câu khó nhất.",
    checklist: ["Answer có citation đúng đoạn không?", "Model có từ chối khi thiếu nguồn không?", "Có tách lỗi retrieval với lỗi generation không?"],
  },
  "workflow-vs-agent-tool-calling": {
    outcome: [
      "Phân biệt được deterministic workflow, tool calling và agent.",
      "Biết khi nào không nên dùng agent.",
      "Thiết kế được hybrid flow có boundaries rõ.",
    ],
    lab: "Thiết kế cùng một support assistant bằng workflow và agent, so sánh latency, eval effort, permission risk và failure modes.",
    checklist: ["Flow có thật sự cần agent không?", "Tool write có confirmation không?", "Có eval trajectory không?"],
  },
  "mcp-tool-permission-agent-security": {
    outcome: [
      "Thiết kế được tool schema rõ side effect và permission.",
      "Phân loại tool read/draft/write/external-sensitive.",
      "Thêm được dry-run, confirmation, idempotency và audit log.",
    ],
    lab: "Thiết kế 5 tools cho support agent, ghi schema, permission, confirmation requirement, idempotency và audit fields.",
    checklist: ["Agent có thấy tool vượt quyền không?", "Tool write có idempotency key không?", "Audit log có trace id không?"],
  },
  "agent-memory-context-trajectory-eval": {
    outcome: [
      "Tách được runtime state, conversation summary, user preference và domain memory.",
      "Thiết kế được context budget cho agent.",
      "Đánh giá agent bằng tool trajectory thay vì chỉ final answer.",
    ],
    lab: "Tạo 30 agent tasks với expected tools/arguments, chạy agent và chấm tool precision, recall, argument correctness.",
    checklist: ["Memory có TTL/owner không?", "Có chặn memory poisoning không?", "Có phát hiện loop/tool thừa không?"],
  },
  "eval-driven-ai-engineering": {
    outcome: [
      "Viết được eval objective, dataset card và rubric.",
      "Kết hợp được exact checks, schema checks, LLM judge và human review.",
      "Đưa eval vào CI/CD làm release gate.",
    ],
    lab: "Tạo eval harness cho RAG assistant: 100 cases, expected docs, rubric groundedness, report và threshold fail CI.",
    checklist: ["Dataset có edge/adversarial cases không?", "Rubric có đủ cụ thể không?", "Release gate có block regression không?"],
  },
  "llm-security-owasp-guardrails": {
    outcome: [
      "Nhận diện được prompt injection, data leak, insecure output handling và excessive agency.",
      "Thiết kế được guardrails trước model, trong prompt và sau model.",
      "Viết được threat model cho RAG/agent app.",
    ],
    lab: "Tạo 20 adversarial cases cho RAG/agent app và kiểm tra guardrails có block/refuse/escalate đúng không.",
    checklist: ["Retrieved content có được coi là untrusted không?", "Tool quyền cao có confirmation không?", "Output có scan PII/safety không?"],
  },
  "ai-observability-cost-deployment": {
    outcome: [
      "Trace được một AI request qua retrieval, model call, tool calls và feedback.",
      "Đo được latency, token usage, cost và failed traces.",
      "Chuẩn bị được rollback, kill switch và incident runbook.",
    ],
    lab: "Gắn tracing cho một AI endpoint, cố tình tạo lỗi retrieval sai rồi dùng trace để debug đến failed eval case.",
    checklist: ["Prompt/model/retrieval index có version không?", "Có cost dashboard không?", "Có rollback và kill switch không?"],
  },
  "ai-engineer-portfolio-certifications": {
    outcome: [
      "Viết được portfolio case study có architecture, eval, safety, cost và deployment.",
      "Chuẩn bị được demo gồm happy path, edge case và safety/fallback case.",
      "Chọn được chứng chỉ phù hợp mục tiêu nghề nghiệp thay vì học lan man.",
    ],
    lab: "Viết case study 1 trang cho project AI assistant của bạn, kèm eval report trước/sau và safety review.",
    checklist: ["Có trade-off RAG vs fine-tuning không?", "Có cost/latency numbers không?", "Có demo safety case không?"],
  },
};

for (const [slug, data] of Object.entries(postEnhancements)) {
  const filePath = path.join("content", "blog", "ai", `${slug}.md`);
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("## Sau bài này bạn làm được gì?")) continue;
  const block = [
    "",
    "## Sau bài này bạn làm được gì?",
    "",
    ...data.outcome.map((line) => `- ${line}`),
    "",
    "## Mini-lab bắt buộc",
    "",
    data.lab,
    "",
    "## Checklist tự đánh giá",
    "",
    ...data.checklist.map((line) => `- ${line}`),
    "",
  ].join("\n");
  const endOfFrontmatter = content.indexOf("\n---\n", 4);
  const firstHeading = content.indexOf("\n## ", endOfFrontmatter + 5);
  if (firstHeading === -1) content = `${content.trim()}\n${block}\n`;
  else content = `${content.slice(0, firstHeading)}${block}${content.slice(firstHeading)}`;
  fs.writeFileSync(filePath, content);
}

console.log("AI Engineer roadmap and articles enriched.");
