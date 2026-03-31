---
id: 019f0b20-b601-7001-e001-f2b8f9000601
title: 'Bài 20: Domain-Specific AI — Healthcare, Finance & Legal Chatbot Compliance'
slug: bai-20-domain-specific-ai
description: >-
  Domain-specific compliance (HIPAA, PCI-DSS, legal), healthcare chatbot
  patterns, financial advisory guardrails, legal document analysis, domain
  knowledge fine-tuning, terminology mapping.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Advanced AI Capabilities"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-domain-challenges"><strong>1. Domain-Specific Chatbot Challenges</strong></h2>

<p>General-purpose chatbot không đủ cho industries có <strong>strict compliance requirements</strong> — Healthcare (HIPAA), Finance (PCI-DSS, SOX), Legal (attorney-client privilege). Mỗi domain cần specialized guardrails, knowledge, và response patterns.</p>

<table>
<thead>
<tr>
<th>Domain</th>
<th>Compliance</th>
<th>Key Challenge</th>
<th>Risk Level</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Healthcare</strong></td>
<td>HIPAA, HL7 FHIR</td>
<td>PHI protection, medical advice liability</td>
<td>Critical</td>
</tr>
<tr>
<td><strong>Finance</strong></td>
<td>PCI-DSS, SOX, MiFID II</td>
<td>Financial advice disclaimer, transaction safety</td>
<td>Critical</td>
</tr>
<tr>
<td><strong>Legal</strong></td>
<td>Attorney-client privilege</td>
<td>Not practicing law, document confidentiality</td>
<td>High</td>
</tr>
<tr>
<td><strong>Education</strong></td>
<td>FERPA, COPPA</td>
<td>Student data, age-appropriate content</td>
<td>High</td>
</tr>
<tr>
<td><strong>E-commerce</strong></td>
<td>Consumer protection laws</td>
<td>Pricing accuracy, refund policy compliance</td>
<td>Medium</td>
</tr>
</tbody>
</table>

<h2 id="2-healthcare-chatbot"><strong>2. Healthcare Chatbot — HIPAA Compliance</strong></h2>

<pre><code class="language-typescript">
class HealthcareChatbotConfig {
  static readonly guardrails: DomainGuardrails = {
    // PHI (Protected Health Information) detection & masking
    piiPatterns: [
      { type: 'medical_record_number', regex: /MRN[\s-]?\d{6,10}/gi },
      { type: 'insurance_id', regex: /INS[\s-]?\d{9,12}/gi },
      { type: 'diagnosis_code', regex: /[A-Z]\d{2}\.\d{1,4}/g }, // ICD-10
    ],

    // Medical advice disclaimer
    mandatoryDisclaimers: [
      'Thông tin này chỉ mang tính chất tham khảo, không thay thế tư vấn y tế chuyên nghiệp.',
      'Vui lòng liên hệ bác sĩ để được tư vấn chi tiết.',
    ],

    // Topics requiring immediate escalation
    emergencyKeywords: [
      'đau ngực', 'khó thở', 'chảy máu nhiều', 'bất tỉnh',
      'chest pain', 'difficulty breathing', 'unconscious',
    ],

    // Forbidden responses
    forbiddenActions: [
      'Không được chẩn đoán bệnh',
      'Không được kê đơn thuốc',
      'Không được đưa ra lời khuyên y tế cụ thể',
      'Không được xác nhận/phủ nhận tình trạng bệnh',
    ],
  };
}

class HealthcareGuardrail implements GuardrailRule {
  id = 'healthcare-compliance';
  type = 'output' as const;
  severity = 'block' as const;

  async check(content: string, context: GuardrailContext): Promise&lt;GuardrailResult&gt; {
    // Check for medical diagnosis patterns
    const diagnosisPatterns = [
      /bạn (có thể )?bị\s+(bệnh|hội chứng)/i,
      /chẩn đoán.*là/i,
      /bạn nên (uống|dùng)\s+thuốc/i,
      /you (may )?have\s+(disease|condition|syndrome)/i,
    ];

    for (const pattern of diagnosisPatterns) {
      if (pattern.test(content)) {
        return {
          passed: false,
          rule: this.id,
          severity: 'block',
          reason: 'Response contains medical diagnosis — not permitted',
          modifiedContent: content + '\n\n⚕️ ' +
            HealthcareChatbotConfig.guardrails.mandatoryDisclaimers[0],
        };
      }
    }

    // Emergency detection → immediate escalation
    const isEmergency = HealthcareChatbotConfig.guardrails.emergencyKeywords
      .some(kw =&gt; content.toLowerCase().includes(kw.toLowerCase()));

    if (isEmergency) {
      return {
        passed: false,
        rule: this.id,
        severity: 'block',
        reason: 'Emergency situation detected — escalate immediately',
        modifiedContent: '🚨 Đây có thể là tình huống khẩn cấp. Vui lòng gọi ngay 115 hoặc đến cơ sở y tế gần nhất.',
      };
    }

    return { passed: true, rule: this.id, severity: this.severity };
  }
}
</code></pre>

<h2 id="3-finance-chatbot"><strong>3. Finance Chatbot — PCI-DSS & Advisory Compliance</strong></h2>

<pre><code class="language-typescript">
class FinanceChatbotConfig {
  static readonly guardrails: DomainGuardrails = {
    piiPatterns: [
      { type: 'card_number', regex: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g },
      { type: 'cvv', regex: /\bCVV[\s:]*\d{3,4}\b/gi },
      { type: 'account_number', regex: /\b\d{10,16}\b/g },
    ],

    mandatoryDisclaimers: [
      'Thông tin này không phải là tư vấn đầu tư. Đầu tư luôn có rủi ro.',
      'Vui lòng tham khảo ý kiến chuyên gia tài chính trước khi quyết định.',
    ],

    forbiddenActions: [
      'Không được khuyên mua/bán cổ phiếu cụ thể',
      'Không được dự đoán giá crypto/chứng khoán',
      'Không được cam kết lợi nhuận',
      'Không được yêu cầu thông tin thẻ/tài khoản qua chat',
    ],
  };
}

class FinanceGuardrail implements GuardrailRule {
  id = 'finance-compliance';
  type = 'output' as const;
  severity = 'block' as const;

  async check(content: string, context: GuardrailContext): Promise&lt;GuardrailResult&gt; {
    // Check for investment advice
    const investmentAdvice = [
      /nên (mua|bán)\s+(cổ phiếu|coin|crypto)/i,
      /lợi nhuận.*%.*chắc chắn/i,
      /cam kết.*lợi nhuận/i,
      /buy|sell|invest in.*stock|crypto/i,
    ];

    for (const pattern of investmentAdvice) {
      if (pattern.test(content)) {
        return {
          passed: false,
          rule: this.id,
          severity: 'block',
          reason: 'Response contains financial advice — adding disclaimer',
          modifiedContent: content + '\n\n⚠️ ' +
            FinanceChatbotConfig.guardrails.mandatoryDisclaimers[0],
        };
      }
    }

    // Never store card numbers in conversation
    const hasCardData = FinanceChatbotConfig.guardrails.piiPatterns
      .some(p =&gt; p.regex.test(content));

    if (hasCardData) {
      return {
        passed: false,
        rule: this.id,
        severity: 'block',
        reason: 'PCI-DSS: Card data detected in response',
        modifiedContent: '[Thông tin thẻ đã được ẩn vì lý do bảo mật]',
      };
    }

    return { passed: true, rule: this.id, severity: this.severity };
  }
}
</code></pre>

<h2 id="4-domain-knowledge"><strong>4. Domain Knowledge Enhancement</strong></h2>

<pre><code class="language-typescript">
class DomainKnowledgeManager {
  // Terminology mapping for RAG improvement
  private terminologyMaps: Record&lt;string, Map&lt;string, string[]&gt;&gt; = {
    healthcare: new Map([
      ['đau đầu', ['headache', 'cephalgia', 'migraine', 'đau nửa đầu']],
      ['tiểu đường', ['diabetes', 'đái tháo đường', 'ĐTĐ', 'type 1', 'type 2']],
      ['huyết áp cao', ['hypertension', 'tăng huyết áp', 'high blood pressure']],
    ]),
    finance: new Map([
      ['lãi suất', ['interest rate', 'APR', 'APY', 'LS']],
      ['cổ phiếu', ['stock', 'equity', 'shares', 'CP']],
      ['trái phiếu', ['bond', 'fixed income', 'TP']],
    ]),
  };

  // Expand query with domain synonyms for better RAG
  expandQuery(query: string, domain: string): string {
    const termMap = this.terminologyMaps[domain];
    if (!termMap) return query;

    let expanded = query;
    for (const [term, synonyms] of termMap) {
      if (query.toLowerCase().includes(term.toLowerCase())) {
        expanded += ` (${synonyms.join(', ')})`;
      }
    }

    return expanded;
  }

  // Domain-specific response templates
  async formatDomainResponse(
    response: string,
    domain: string,
    config: DomainGuardrails,
  ): Promise&lt;string&gt; {
    let formatted = response;

    // Add mandatory disclaimers
    if (config.mandatoryDisclaimers.length &gt; 0) {
      const needsDisclaimer = await this.checkNeedsDisclaimer(response, domain);
      if (needsDisclaimer) {
        formatted += '\n\n---\n' + config.mandatoryDisclaimers[0];
      }
    }

    return formatted;
  }
}
</code></pre>

<h2 id="5-compliance-audit"><strong>5. Compliance Audit Trail</strong></h2>

<pre><code class="language-typescript">
class ComplianceAuditService {
  async logInteraction(event: ComplianceEvent): Promise&lt;void&gt; {
    // Immutable audit log (append-only)
    await this.db.complianceAudit.create({
      tenantId: event.tenantId,
      userId: event.userId,
      conversationId: event.conversationId,
      eventType: event.type,
      domain: event.domain,
      details: event.details,
      guardrailsTriggered: event.guardrailsTriggered,
      complianceStatus: event.status,
      timestamp: new Date(),
      // Hash for tamper detection
      hash: this.computeHash(event),
    });
  }

  async generateComplianceReport(
    tenantId: string,
    period: { from: Date; to: Date },
    domain: string,
  ): Promise&lt;ComplianceReport&gt; {
    const events = await this.db.complianceAudit.findMany({
      where: {
        tenantId,
        domain,
        timestamp: { gte: period.from, lte: period.to },
      },
    });

    return {
      period,
      domain,
      totalInteractions: events.length,
      guardrailTriggers: events.filter(e =&gt; e.guardrailsTriggered.length &gt; 0).length,
      complianceViolations: events.filter(e =&gt; e.complianceStatus === 'violation').length,
      escalations: events.filter(e =&gt; e.eventType === 'escalation').length,
      topTriggers: this.aggregateTopTriggers(events),
      recommendations: this.generateRecommendations(events),
    };
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 20</strong></h2>

<ul>
<li><strong>Healthcare</strong>: HIPAA compliance, PHI masking, no medical diagnosis, emergency escalation</li>
<li><strong>Finance</strong>: PCI-DSS (no card data in chat), no investment advice, mandatory disclaimers</li>
<li><strong>Legal</strong>: Attorney-client privilege, not practicing law, document confidentiality</li>
<li><strong>Domain Knowledge</strong>: Terminology mapping cho better RAG, domain-specific response templates</li>
<li><strong>Compliance Audit</strong>: Immutable audit trail, tamper detection, periodic compliance reports</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Multimodal AI — Image understanding, document OCR, chart/graph analysis, visual question answering.</p>
