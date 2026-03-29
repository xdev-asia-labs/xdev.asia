---
id: 019c9619-cc15-7015-d015-cc1500000015
title: 'Bài 15: Guardrails & Safety — Bảo vệ Agent khỏi "nổi loạn"'
slug: bai-15-guardrails-safety
description: >-
  Prompt injection defense, output validation, PII filtering. Guardrails frameworks: NeMo Guardrails, Guardrails AI. Human-in-the-loop patterns. Rate limiting và cost controls.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 6: Production & Triển khai thực tế"
course:
  id: 019c9619-aa02-7002-b002-aa0200000002
  title: "Build AI Agents: Từ Zero đến Production"
  slug: build-ai-agents
---

## Giới thiệu

Agent có quyền **hành động** — nghĩa là agent sai có thể gây **thiệt hại thực tế**: xóa file, gửi email sai, leak data. Safety không phải nice-to-have — nó là **requirement bắt buộc**.

---

## 1. Threats

### 1.1 Prompt Injection
User cố tình đưa instructions ẩn để hijack agent behavior.

### 1.2 Tool Misuse
Agent gọi tool sai cách: DELETE thay vì SELECT, gửi email cho sai người.

### 1.3 Data Leakage
Agent vô tình expose sensitive data trong response.

## 2. Defense Layers

```python
class GuardedAgent:
    def run(self, user_input):
        # Layer 1: Input validation
        if self.detect_injection(user_input):
            return "Suspicious input detected"
        
        # Layer 2: Tool permission check
        # Only allow approved tools
        
        # Layer 3: Output filtering
        output = self.agent.run(user_input)
        output = self.filter_pii(output)
        
        # Layer 4: Human approval for risky actions
        if self.is_risky_action(output):
            return self.request_human_approval(output)
        
        return output
```

---

## Tóm tắt

- Agent safety = input validation + tool permissions + output filtering + human approval
- Prompt injection là threat #1
- Never give agent DELETE/UPDATE permissions without approval
- Cost controls prevent runaway spending
- Human-in-the-loop cho high-stakes decisions

## Bài tập

1. Implement prompt injection detector
2. Build permission system cho tools (read-only vs read-write)
3. Implement PII filter (mask emails, phone numbers)
4. Xây human-in-the-loop approval flow

