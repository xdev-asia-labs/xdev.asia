---
id: 019f0b20-b603-7001-e001-f2b8f9000603
title: 'レッスン 22: ワークフローの自動化 — チャットボットによってトリガーされるワークフローとプロセス オーケストレーション'
slug: bai-22-workflow-automation
description: >-
  チャットボットによってトリガーされるワークフロー、承認フロー、n8n/Temporal
  との統合、イベント駆動型の自動化、人間参加型のワークフロー、長​​時間実行プロセス。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 6: 高度な AI 機能'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4946)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1005" cy="125" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="910" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="815" cy="275" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="720" cy="220" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="165" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="215" x2="1100" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="245" x2="1050" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.9807621135332,150 990.9807621135332,180 965,195 939.0192378864668,180 939.0192378864668,150 965,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: ワークフローの自動化 —</tspan>
      <tspan x="60" dy="42">チャットボットによってトリガーされるワークフローとプロセス</tspan>
      <tspan x="60" dy="42">オーケストレーション</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 高度な AI 機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-workflow-overview"><strong>1. チャットボットによってトリガーされるワークフロー — 概要</strong></h2>

<p>チャットボット企業は質問に答えるだけではなく、そうすべきです <strong>ビジネスプロセスを実行する</strong>。 「Jira チケットの作成」、「休暇申請の承認」、「新入社員の入社」まで、必要なものすべてが揃っています <strong>ワークフローエンジン</strong> 後ろが強い。</p>

<pre><code class="language-text">
┌─────────── WORKFLOW ARCHITECTURE ─────────────────────┐
│                                                       │
│  User: "Tạo đơn xin nghỉ phép 3 ngày từ thứ 2"      │
│                     │                                 │
│              ┌──────▼──────┐                          │
│              │  AI Engine  │                          │
│              │  (Extract   │                          │
│              │   intent)   │                          │
│              └──────┬──────┘                          │
│                     │                                 │
│              ┌──────▼──────────────────┐              │
│              │  WORKFLOW ORCHESTRATOR  │              │
│              │  ┌──────────────────┐   │              │
│              │  │ 1. Validate      │   │              │
│              │  │    leave balance  │   │              │
│              │  │ 2. Create request │   │              │
│              │  │ 3. Notify manager│   │              │
│              │  │ 4. Wait approval │   │              │
│              │  │ 5. Update HR sys │   │              │
│              │  │ 6. Confirm user  │   │              │
│              │  └──────────────────┘   │              │
│              └──────┬──────────────────┘              │
│                     │                                 │
│          ┌──────────┼──────────┐                      │
│          ▼          ▼          ▼                       │
│     ┌────────┐ ┌────────┐ ┌────────┐                  │
│     │  HR    │ │ Slack  │ │ Email  │                   │
│     │ System │ │ Notify │ │ Notify │                   │
│     └────────┘ └────────┘ └────────┘                   │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-workflow-engine"><strong>2. ワークフローエンジンの設計</strong></h2>

<pre><code class="language-typescript">
// Workflow Definition DSL
interface WorkflowDefinition {
  id: string;
  name: string;
  trigger: WorkflowTrigger;
  steps: WorkflowStep[];
  timeout: string; // ISO 8601 duration
  onError: ErrorHandler;
}

interface WorkflowStep {
  id: string;
  name: string;
  type: 'action' | 'condition' | 'approval' | 'wait' | 'parallel';
  config: StepConfig;
  onSuccess?: string; // Next step ID
  onFailure?: string;
}

// Workflow Engine
class WorkflowEngine {
  constructor(
    private readonly store: WorkflowStore,
    private readonly executor: StepExecutor,
    private readonly eventBus: EventBus,
  ) {}

  async startWorkflow(
    definitionId: string,
    input: Record&lt;string, unknown&gt;,
    context: WorkflowContext,
  ): Promise&lt;WorkflowInstance&gt; {
    const definition = await this.store.getDefinition(definitionId);

    // Create instance
    const instance: WorkflowInstance = {
      id: crypto.randomUUID(),
      definitionId,
      status: 'running',
      input,
      context,
      currentStepId: definition.steps[0].id,
      state: {},
      startedAt: new Date(),
      history: [],
    };

    await this.store.saveInstance(instance);

    // Start execution
    await this.executeNextStep(instance, definition);

    return instance;
  }

  private async executeNextStep(
    instance: WorkflowInstance,
    definition: WorkflowDefinition,
  ): Promise&lt;void&gt; {
    const step = definition.steps.find(
      s =&gt; s.id === instance.currentStepId,
    );
    if (!step) {
      await this.completeWorkflow(instance, 'completed');
      return;
    }

    // Log history
    instance.history.push({
      stepId: step.id,
      stepName: step.name,
      startedAt: new Date(),
      status: 'running',
    });

    try {
      switch (step.type) {
        case 'action':
          await this.executeAction(instance, step);
          break;
        case 'condition':
          await this.evaluateCondition(instance, step, definition);
          break;
        case 'approval':
          await this.requestApproval(instance, step);
          return; // Pauses here — resumes on approval event
        case 'wait':
          await this.scheduleResume(instance, step);
          return; // Pauses here — resumes on timer
        case 'parallel':
          await this.executeParallel(instance, step);
          break;
      }

      // Move to next step
      instance.currentStepId = step.onSuccess ?? null;
      await this.store.saveInstance(instance);

      if (instance.currentStepId) {
        await this.executeNextStep(instance, definition);
      } else {
        await this.completeWorkflow(instance, 'completed');
      }
    } catch (error) {
      await this.handleStepError(instance, step, error);
    }
  }

  // Resume workflow when approval comes in
  async handleApproval(
    instanceId: string,
    approved: boolean,
    approvedBy: string,
  ): Promise&lt;void&gt; {
    const instance = await this.store.getInstance(instanceId);
    const definition = await this.store.getDefinition(instance.definitionId);
    const step = definition.steps.find(
      s =&gt; s.id === instance.currentStepId,
    );

    // Update history
    const historyEntry = instance.history.find(
      h =&gt; h.stepId === step.id && h.status === 'running',
    );
    if (historyEntry) {
      historyEntry.status = approved ? 'approved' : 'rejected';
      historyEntry.completedAt = new Date();
      historyEntry.metadata = { approvedBy };
    }

    // Route based on approval result
    instance.currentStepId = approved ? step.onSuccess : step.onFailure;
    instance.state.approvalResult = { approved, approvedBy };
    await this.store.saveInstance(instance);

    if (instance.currentStepId) {
      await this.executeNextStep(instance, definition);
    } else {
      await this.completeWorkflow(
        instance,
        approved ? 'completed' : 'rejected',
      );
    }
  }
}
</code></pre>

<h2 id="3-workflow-definitions"><strong>3. 事前に構築されたワークフローテンプレート</strong></h2>

<pre><code class="language-typescript">
// Leave Request Workflow
const leaveRequestWorkflow: WorkflowDefinition = {
  id: 'leave-request',
  name: 'Đơn xin nghỉ phép',
  trigger: { type: 'chatbot', intent: 'request_leave' },
  timeout: 'P7D', // 7 days
  steps: [
    {
      id: 'validate',
      name: 'Kiểm tra số ngày phép còn lại',
      type: 'action',
      config: {
        action: 'hr.checkLeaveBalance',
        input: { employeeId: '{{context.userId}}' },
      },
      onSuccess: 'create_request',
      onFailure: 'insufficient_leave',
    },
    {
      id: 'insufficient_leave',
      name: 'Thông báo hết phép',
      type: 'action',
      config: {
        action: 'chatbot.sendMessage',
        input: {
          message: 'Bạn chỉ còn {{state.remainingDays}} ngày phép. '
            + 'Không đủ cho {{input.days}} ngày yêu cầu.',
        },
      },
    },
    {
      id: 'create_request',
      name: 'Tạo đơn nghỉ phép',
      type: 'action',
      config: {
        action: 'hr.createLeaveRequest',
        input: {
          employeeId: '{{context.userId}}',
          startDate: '{{input.startDate}}',
          days: '{{input.days}}',
          reason: '{{input.reason}}',
        },
      },
      onSuccess: 'notify_manager',
    },
    {
      id: 'notify_manager',
      name: 'Gửi thông báo cho quản lý',
      type: 'action',
      config: {
        action: 'notification.send',
        input: {
          channel: 'slack',
          recipient: '{{state.managerId}}',
          message: '{{context.userName}} xin nghỉ phép {{input.days}} ngày.',
          actions: [
            { label: 'Approve', value: 'approve' },
            { label: 'Reject', value: 'reject' },
          ],
        },
      },
      onSuccess: 'wait_approval',
    },
    {
      id: 'wait_approval',
      name: 'Chờ phê duyệt',
      type: 'approval',
      config: {
        approvers: ['{{state.managerId}}'],
        timeout: 'P3D', // 3 days
        escalateTo: '{{state.hrDirectorId}}',
      },
      onSuccess: 'update_hr',
      onFailure: 'notify_rejected',
    },
    {
      id: 'update_hr',
      name: 'Cập nhật hệ thống HR',
      type: 'action',
      config: {
        action: 'hr.approveLeave',
        input: { requestId: '{{state.requestId}}' },
      },
      onSuccess: 'confirm_user',
    },
    {
      id: 'confirm_user',
      name: 'Xác nhận cho nhân viên',
      type: 'action',
      config: {
        action: 'chatbot.sendMessage',
        input: {
          message: 'Đơn nghỉ phép đã được duyệt! '
            + 'Bạn nghỉ từ {{input.startDate}}, {{input.days}} ngày.',
        },
      },
    },
    {
      id: 'notify_rejected',
      name: 'Thông báo từ chối',
      type: 'action',
      config: {
        action: 'chatbot.sendMessage',
        input: {
          message: 'Đơn nghỉ phép bị từ chối. Lý do: {{state.rejectionReason}}',
        },
      },
    },
  ],
  onError: {
    action: 'chatbot.sendMessage',
    input: { message: 'Có lỗi xảy ra khi xử lý đơn. Vui lòng thử lại sau.' },
  },
};
</code></pre>

<h2 id="4-temporal-integration"><strong>4. 時間的統合 — 耐久性のあるワークフロー</strong></h2>

<pre><code class="language-typescript">
import { proxyActivities, executeChild, sleep } from '@temporalio/workflow';

// Temporal Workflow for long-running processes
export async function employeeOnboardingWorkflow(
  input: OnboardingInput,
): Promise&lt;OnboardingResult&gt; {
  const { createAccounts, sendNotifications, setupEquipment, hrActivities }
    = proxyActivities&lt;OnboardingActivities&gt;({
      startToCloseTimeout: '10 minutes',
      retry: { maximumAttempts: 3 },
    });

  // Step 1: Create accounts in parallel
  const [emailAccount, slackAccount, jiraAccount] = await Promise.all([
    createAccounts.createEmail(input.employee),
    createAccounts.createSlack(input.employee),
    createAccounts.createJira(input.employee),
  ]);

  // Step 2: Setup equipment (may take days)
  const equipmentRequest = await setupEquipment.requestLaptop(input.employee);

  // Step 3: Notify chatbot — user gets progress updates
  await sendNotifications.notifyChatbot({
    userId: input.requesterId,
    message: `Accounts created. Equipment request #${equipmentRequest.id} submitted.`,
  });

  // Step 4: Wait for equipment delivery (durable timer)
  await sleep('3 days');

  // Step 5: Check equipment status
  const equipmentStatus = await setupEquipment.checkStatus(equipmentRequest.id);

  // Step 6: Schedule orientation
  const orientation = await hrActivities.scheduleOrientation({
    employeeId: input.employee.id,
    startDate: input.startDate,
  });

  // Step 7: Child workflow — training plan
  const trainingCompletion = await executeChild(
    trainingPlanWorkflow,
    { args: [{ employeeId: input.employee.id, role: input.employee.role }] },
  );

  return {
    employee: input.employee,
    accounts: { emailAccount, slackAccount, jiraAccount },
    equipment: equipmentStatus,
    orientation,
    trainingCompleted: trainingCompletion,
  };
}
</code></pre>

<h2 id="5-chatbot-workflow-bridge"><strong>5. チャットボット ↔ ワークフローブリッジ</strong></h2>

<pre><code class="language-typescript">
class ChatbotWorkflowBridge {
  constructor(
    private readonly workflowEngine: WorkflowEngine,
    private readonly intentMapper: IntentToWorkflowMapper,
  ) {}

  // Map chatbot intent to workflow
  async handleIntent(
    intent: string,
    parameters: Record&lt;string, unknown&gt;,
    context: ChatContext,
  ): Promise&lt;WorkflowResponse&gt; {
    const workflowId = this.intentMapper.getWorkflow(intent);
    if (!workflowId) {
      return { type: 'no_workflow', message: 'No workflow mapped for this intent.' };
    }

    // Check if user has pending workflow of same type
    const pending = await this.workflowEngine.findPendingWorkflow(
      context.userId,
      workflowId,
    );
    if (pending) {
      return {
        type: 'existing_workflow',
        message: `Bạn đã có yêu cầu đang xử lý (ID: ${pending.id}). `
          + `Trạng thái: ${pending.status}`,
        workflow: pending,
      };
    }

    // Start new workflow
    const instance = await this.workflowEngine.startWorkflow(
      workflowId,
      parameters,
      {
        userId: context.userId,
        tenantId: context.tenantId,
        conversationId: context.conversationId,
        channel: context.channel,
      },
    );

    return {
      type: 'workflow_started',
      message: `Yêu cầu đã được tạo (ID: ${instance.id}). `
        + `Tôi sẽ cập nhật tiến trình cho bạn.`,
      workflow: instance,
    };
  }

  // Handle workflow status check from chatbot
  async checkWorkflowStatus(
    userId: string,
    workflowId?: string,
  ): Promise&lt;string&gt; {
    const workflows = workflowId
      ? [await this.workflowEngine.getInstance(workflowId)]
      : await this.workflowEngine.getUserWorkflows(userId);

    if (workflows.length === 0) {
      return 'Bạn không có yêu cầu nào đang xử lý.';
    }

    return workflows.map(w =&gt; {
      const current = w.history.filter(h =&gt; h.status === 'completed').length;
      const total = w.history.length;
      return `📋 ${w.definitionId} (ID: ${w.id})\n`
        + `   Trạng thái: ${w.status}\n`
        + `   Tiến trình: ${current}/${total} steps\n`
        + `   Bước hiện tại: ${w.currentStepId}`;
    }).join('\n\n');
  }
}
</code></pre>

<h2 id="6-event-driven"><strong>6. イベント駆動型の自動化</strong></h2>

<pre><code class="language-typescript">
class EventDrivenAutomation {
  constructor(
    private readonly eventBus: EventBus,
    private readonly workflowEngine: WorkflowEngine,
    private readonly chatbot: ChatbotService,
  ) {
    this.registerAutomations();
  }

  private registerAutomations(): void {
    // Auto-trigger workflow on specific events
    this.eventBus.on('ticket.created', async (event) =&gt; {
      // Auto-assign based on category
      if (event.data.priority === 'critical') {
        await this.workflowEngine.startWorkflow('critical-escalation', {
          ticketId: event.data.ticketId,
          category: event.data.category,
        }, { userId: 'system', tenantId: event.data.tenantId });
      }
    });

    // Proactive notification automation
    this.eventBus.on('deployment.completed', async (event) =&gt; {
      // Notify relevant users via chatbot
      const subscribers = await this.getDeploymentSubscribers(
        event.data.service,
      );
      for (const userId of subscribers) {
        await this.chatbot.sendProactiveMessage(userId, {
          text: `🚀 Service "${event.data.service}" deployed v${event.data.version}`,
          actions: [
            { label: 'View changelog', action: 'view_changelog', data: event.data },
            { label: 'Rollback', action: 'rollback', data: event.data },
          ],
        });
      }
    });

    // SLA breach automation
    this.eventBus.on('sla.warning', async (event) =&gt; {
      await this.workflowEngine.startWorkflow('sla-escalation', {
        ticketId: event.data.ticketId,
        remainingMinutes: event.data.remainingMinutes,
        assignee: event.data.assignee,
      }, { userId: 'system', tenantId: event.data.tenantId });
    });
  }
}
</code></pre>

<h2 id="tong-ket"><strong>レッスン 22 のまとめ</strong></h2>

<ul>
<li><strong>ワークフローエンジン</strong>: アクション、条件、承認、待機、並列ステップによるステート マシン アプローチ</li>
<li><strong>承認フロー</strong>: ワークフローを一時停止 → 承認者に通知 → 承認イベントで再開</li>
<li><strong>時間的統合</strong>: 長時間実行プロセス (数日/数週間) のための耐久性のあるワークフロー</li>
<li><strong>チャットボットブリッジ</strong>: インテント → ワークフローのマッピング、ステータスの確認、進捗状況の更新の送信</li>
<li><strong>イベント駆動型</strong>: ビジネス イベント (チケット、展開、SLA) での自動トリガー ワークフロー</li>
</ul>

<p><strong>次の記事:</strong> GPU インフラストラクチャとモデルの提供 — セルフホスト型 LLM 導入、vLLM/TGI、GPU クラスター管理、モデル キャッシュ、自動スケーリング推論。</p>
