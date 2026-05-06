---
id: 019c9618-0301-7000-8000-c1147ba22e13
title: 'LESSON 18: JOBS AND CRONJOBS'
slug: bai-18-jobs-va-cronjobs
description: Batch processing with Jobs (single, parallel, indexed, work queue), CronJobs with timezone support (GA K8s 1.27). JobSet (CNCF project) for a group of dependent Jobs — ideal for AI/ML training pipelines.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 18
section_title: 'Module 5: Workload Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9859" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9859)"/>

  <!-- Decorations -->
  <g>
    <circle cx="606" cy="88" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="612" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="618" cy="40" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="624" cy="146" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="252" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.2390923627308,166.5 1025.2390923627308,209.5 988,231 950.7609076372692,209.5 950.7609076372692,166.5 988,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 18: JOBS AND CRONJOBS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 5: Workload Management__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Jobs and CronJobs in Kubernetes__HTMLTAG_66___

<p>In Kubernetes, <strong>Deployments</strong> and <strong>StatefulSets</strong> are designed for continuously running workloads — they always try to maintain a certain number of Pods. But many real-world tasks don't need to run forever: process a batch of data, run a database migration, train an ML model, or send mass emails. This is where <strong>Jobs</strong> and <strong>CronJobs</strong> come into play.</p>

<h2>1. What are jobs? Batch Workloads and Run-to-Completion</h2>

<p>A <strong>Job</strong> in Kubernetes creates one or more Pods with the goal of completing a specific task. Unlike Deployment, Job tracks the number of successful completions — when enough Pods are completed, the Job is considered done.</p>

<p>Important Jobs Features:</p>
<ul>
  <li><strong>Run-to-completion</strong>: Pod finished running and exited with code 0 meaning success</li>
  <li><strong>Automatic Retry</strong>: If Pod fails, Job automatically creates a new Pod according to <code>backoffLimit</code></li>
  <li><strong>Tracking completions</strong>: Job knows how many have been completed out of the total needed</li>
  <li><strong>Parallelism</strong>: Multiple Pods can run in parallel to increase throughput</li>
</ul>

<p>Simple Job example — calculate Pi:</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: pi-calculator
  namespace: default
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl:5.34
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
        resources:
          requests:
            cpu: "250m"
            memory: "64Mi"
          limits:
            cpu: "500m"
            memory: "128Mi"
      restartPolicy: Never
  backoffLimit: 4
</code></pre>

<p>Note <code>restartPolicy: Never</code> — for Jobs, you can only use <code>Never</code> or <code>OnFailure</code>, not used <code>Always</code>.</p>

<h2>2. Job Completion Modes</h2><p>Kubernetes supports three completion modes for Jobs, suitable for different use cases.</p>

<h3>2.1 NonIndexed (Default)</h3>

<p>Job is completed when there are enough successful completions. The Pods are unordered — they all do the same job and the Job needs enough <code>completions</code> Pod to succeed.</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: nonindexed-parallel-job
spec:
  completions: 5        # Cần 5 Pod hoàn thành thành công
  parallelism: 2        # Chạy tối đa 2 Pod cùng lúc
  completionMode: NonIndexed  # Đây là default, có thể bỏ qua
  template:
    spec:
      containers:
      - name: worker
        image: busybox:1.35
        command: ["sh", "-c", "echo Processing task; sleep 10; echo Done"]
      restartPolicy: Never
  backoffLimit: 3
</code></pre>

<h3>2.2 Indexed Jobs</h3>

<p><strong>Indexed Jobs</strong> is a very powerful feature — each Pod receives a unique index from 0 to <code>completions-1</code> via the environment variable <code>JOB_COMPLETION_INDEX</code>. This is ideal for <strong>data partitioning</strong>: each Pod processes a defined portion of data.</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: indexed-data-processor
spec:
  completions: 10       # 10 partitions
  parallelism: 3        # Xử lý 3 partitions cùng lúc
  completionMode: Indexed
  template:
    spec:
      containers:
      - name: data-processor
        image: python:3.11-slim
        command:
        - python3
        - -c
        - |
          import os
          partition_id = int(os.environ['JOB_COMPLETION_INDEX'])
          total_partitions = 10
          # Xử lý dữ liệu từ partition partition_id
          start = partition_id * 1000
          end = start + 1000
          print(f"Processing records {start} to {end}")
          # ... thực tế sẽ query database hoặc đọc file
        env:
        - name: JOB_COMPLETION_INDEX
          valueFrom:
            fieldRef:
              fieldPath: metadata.annotations['batch.kubernetes.io/job-completion-index']
      restartPolicy: Never
  backoffLimit: 6
</code></pre>

<p>Kubernetes automatically injects the variable <code>JOB_COMPLETION_INDEX</code> into each Pod. Pod 0 processes partition 0, Pod 1 processes partition 1, and so on. — never duplicates even if Pod restarts.</p>

<h3>2.3 Work Queue</h3>

<p>With the work queue pattern, multiple Pods take tasks from one queue (Redis, RabbitMQ, SQS). The job is completed when the queue is empty and there are no more Pods in process.</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: queue-worker
spec:
  parallelism: 4    # 4 workers đồng thời
  # completions không set = work queue mode (hoàn thành khi 1 Pod exit 0)
  template:
    spec:
      containers:
      - name: worker
        image: my-queue-worker:v1.2
        env:
        - name: QUEUE_URL
          value: "redis://redis-service:6379/queue:tasks"
        - name: MAX_TASKS
          value: "100"
        resources:
          requests:
            cpu: "500m"
            memory: "256Mi"
      restartPolicy: OnFailure
</code></pre>

<h2>3. Job Parameters Details</h2>

<p>Understanding Job parameters helps you optimize for each use case:</p>

<ul>
  <li><strong>completions</strong>: Total number of Pods that need to complete successfully. Default is 1.</li>
  <li><strong>parallelism</strong>: Maximum number of Pods running simultaneously. Default is 1.</li>
  <li><strong>backoffLimit</strong>: Number of retries before the Job is marked failed. Default is 6.</li>
  <li><strong>activeDeadlineSeconds</strong>: Maximum time (seconds) the Job is allowed to run. Exceeded → Job terminated.</li>
  <li><strong>ttlSecondsAfterFinished</strong>: Delete Job (and Pods) N seconds after completion.</li>
</ul>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: time-limited-job
spec:
  completions: 3
  parallelism: 3
  backoffLimit: 2
  activeDeadlineSeconds: 600    # Job phải xong trong 10 phút
  ttlSecondsAfterFinished: 3600 # Xóa sau 1 giờ
  template:
    spec:
      containers:
      - name: worker
        image: busybox:1.35
        command: ["sh", "-c", "sleep 30 && echo completed"]
      restartPolicy: Never
</code></pre>

<h2>4. Pod Failure Policies (K8s 1.31+)</h2>

<p>From Kubernetes 1.31, <strong>Pod Failure Policy</strong> allows you to define granular behavior when a Pod fails — retry is not always recommended.</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: job-with-failure-policy
spec:
  completions: 5
  parallelism: 2
  backoffLimit: 6
  podFailurePolicy:
    rules:
    # Nếu Pod exit với code 42 (business error), đừng retry — fail ngay
    - action: FailJob
      onExitCodes:
        containerName: main
        operator: In
        values: [42]
    # Nếu node bị preempt (OOM, spot interruption), ignore và retry
    - action: Ignore
      onPodConditions:
      - type: DisruptionTarget
    # Các lỗi khác: retry như bình thường
    - action: Count
      onExitCodes:
        operator: NotIn
        values: [0, 42]
  template:
    spec:
      containers:
      - name: main
        image: my-batch-processor:v2
        command: ["./process"]
      restartPolicy: Never
</code></pre>

<p>The <code>action</code> can be used:</p>
<ul>
  <li><strong>FailJob</strong>: Stop the entire Job immediately, mark failed</li>
  <li><strong>Ignore</strong>: Not counted in backoffLimit, create new Pod</li>
  <li><strong>Count</strong>: Counts into backoffLimit as usual (default behavior)</li>
</ul>

<h2>5. Job TTL — Automatic Cleanup</h2>

<p>Jobs and their Pods will persist forever after completion without a cleanup mechanism. Use <code>ttlSecondsAfterFinished</code> to automatically delete:</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: Job
metadata:
  name: cleanup-demo
spec:
  ttlSecondsAfterFinished: 300  # Xóa 5 phút sau khi xong (kể cả failed)
  template:
    spec:
      containers:
      - name: task
        image: busybox:1.35
        command: ["echo", "Hello from Job"]
      restartPolicy: Never
</code></pre><p>You can also patch existing Jobs: <code>kubectl patch job old-job -p '{"spec":{"ttlSecondsAfterFinished":0}}'</code> — this removes the Job immediately.</p>

<h2>6. CronJobs — Schedule Task</h2>

<p><strong>CronJob</strong> automatically creates Jobs on a regular schedule, using familiar cron syntax.</p>

<pre><code class="language-yaml">apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-report
  namespace: production
spec:
  schedule: "0 2 * * *"    # 2 giờ sáng mỗi ngày
  timeZone: "Asia/Ho_Chi_Minh"   # GA từ K8s 1.27
  concurrencyPolicy: Forbid        # Không chạy job mới nếu job cũ đang chạy
  startingDeadlineSeconds: 300     # Nếu trễ quá 5 phút, bỏ qua
  successfulJobsHistoryLimit: 3    # Giữ 3 successful jobs gần nhất
  failedJobsHistoryLimit: 1        # Giữ 1 failed job gần nhất
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 86400  # Xóa sau 24 giờ
      template:
        spec:
          containers:
          - name: report-generator
            image: my-report-app:v1.5
            command: ["python", "generate_report.py", "--date", "yesterday"]
            env:
            - name: DB_HOST
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: host
          restartPolicy: OnFailure
</code></pre>

<h3>6.1 CronJob Timezone Support (GA K8s 1.27)</h3>

<p>Before K8s 1.27, all CronJobs used the UTC of the controller. From K8s 1.27, <code>timeZone</code> field is GA — you can specify any timezone according to IANA timezone database:</p>

<pre><code class="language-yaml">spec:
  schedule: "0 9 * * 1-5"          # 9 giờ sáng thứ 2-6
  timeZone: "Asia/Ho_Chi_Minh"     # Vietnam timezone (UTC+7)
</code></pre>

<p>Popular timezones:</p>
<ul>
  <li><code>Asia/Ho_Chi_Minh</code> — Vietnam (UTC+7)</li>
  <li><code>Asia/Singapore</code> — Singapore (UTC+8)</li>
  <li><code>America/New_York</code> — Eastern US</li>
  <li><code>Europe/London</code> — UK</li>
  <li><code>UTC</code> — Coordinated Universal Time</li>
</ul>

<h3>6.2 ConcurrencyPolicy</h3>

<p>Important thing to decide: what to do if an old Job is not finished when the new Job is scheduled to run?</p>
<ul>
  <li><strong>Allow</strong> (default): Create a new Job even if the old Job is running — be careful with race conditions</li>
  <li><strong>Forbid</strong>: Skip the new Job, the old Job still continues</li>
  <li><strong>Replace</strong>: Delete old Job, create new Job to replace</li>
</ul>

<h2>7. JobSet — CNCF Project for Distributed Jobs</h2>

<p><strong>JobSet</strong> is a CNCF project (currently in the Sandbox stage) designed to coordinate multiple dependent Jobs. This is the ideal tool for <strong>distributed ML training pipelines__HTMLTAG_267___.</p>

<p>JobSet Settings:</p>
<pre><code class="language-bash">kubectl apply --server-side -f \
  https://github.com/kubernetes-sigs/jobset/releases/download/v0.7.0/manifests.yaml
</code></pre>

<h3>7.1 JobSet for Distributed ML Training</h3>

<p>Scenario: Train a model with Parameter Server architecture — one group of pods as parameter servers (store gradients), another group as workers (calculation).</p>

<pre><code class="language-yaml">apiVersion: jobset.x-k8s.io/v1alpha2
kind: JobSet
metadata:
  name: ml-training-pytorch
  namespace: ml-training
  annotations:
    jobset.sigs.k8s.io/exclusive-topology: kubernetes.io/hostname
spec:
  failurePolicy:
    maxRestarts: 3        # Restart toàn bộ JobSet nếu có failure
  replicatedJobs:
  # Parameter Server: lưu model state, nhận gradients từ workers
  - name: parameter-server
    replicas: 1
    template:
      spec:
        completions: 2
        parallelism: 2
        completionMode: Indexed
        template:
          spec:
            containers:
            - name: ps
              image: pytorch/pytorch:2.2-cuda12.1-cudnn8-runtime
              command: ["python", "train.py", "--role", "ps"]
              env:
              - name: ROLE
                value: "parameter-server"
              - name: JOB_INDEX
                valueFrom:
                  fieldRef:
                    fieldPath: metadata.annotations['batch.kubernetes.io/job-completion-index']
              resources:
                requests:
                  cpu: "4"
                  memory: "16Gi"
            restartPolicy: Never

  # Workers: tính toán gradients, gửi lên PS
  - name: worker
    replicas: 1
    template:
      spec:
        completions: 8      # 8 workers
        parallelism: 8
        completionMode: Indexed
        template:
          spec:
            containers:
            - name: worker
              image: pytorch/pytorch:2.2-cuda12.1-cudnn8-runtime
              command: ["python", "train.py", "--role", "worker"]
              env:
              - name: ROLE
                value: "worker"
              - name: PS_HOSTS
                value: "ml-training-pytorch-parameter-server-0-0.ml-training-pytorch:8080,ml-training-pytorch-parameter-server-0-1.ml-training-pytorch:8080"
              resources:
                requests:
                  cpu: "4"
                  memory: "16Gi"
                  nvidia.com/gpu: "1"
                limits:
                  nvidia.com/gpu: "1"
            restartPolicy: Never
</code></pre>

<h3>7.2 Outstanding Features of JobSet__HTMLTAG_276___<ul>
  <li><strong>Failure policy propagation</strong>: If a Job in the set fails, the entire JobSet can restart or fail together — no "orphan" Jobs__HTMLTAG_281___
  <li><strong>DNS-based communication</strong>: Jobs in JobSet automatically have DNS records to communicate with each other (<code>{jobset-name}-{job-name}-{job-index}-{pod-index}.{jobset-name}</code>)</li>
  <li><strong>Exclusive topology</strong>: Ensure Pods of the same Job are scheduled on the same rack/node (reduces network latency)</li>
  <li><strong>Startup sequencing__HTMLTAG_294___: Only start worker after PS is ready</li>
</ul>

<h3>7.3 JobSet Tracking</h3>

<pre><code class="language-bash"># Xem trạng thái JobSet
kubectl get jobset -n ml-training

# Xem chi tiết
kubectl describe jobset ml-training-pytorch -n ml-training

# Xem logs của parameter server
kubectl logs -l jobset.sigs.k8s.io/job-name=parameter-server -n ml-training

# Xem logs của tất cả workers
kubectl logs -l jobset.sigs.k8s.io/job-name=worker -n ml-training --prefix
</code></pre>

<h2>8. Summary: When to Use What?</h2>

<ul>
  <li><strong>SimpleJob</strong>: One task, run once — use basic Job</li>
  <li><strong>Parallel processing without order</strong>: NonIndexed Job with completions + parallelism</li>
  <li><strong>Data partitioning</strong>: Indexed Job — each Pod processes the specified partition</li>
  <li><strong>Queue-based processing</strong>: Work queue Job + Redis/RabbitMQ</li>
  <li><strong>Scheduled tasks</strong>: CronJob with timezone support</li>
  <li><strong>Distributed training/HPC</strong>: JobSet for multi-job coordination</li>
</ul>

<p>Jobs and CronJobs are the foundation of every batch processing system on Kubernetes. Understanding completion modes and failure policies helps you build reliable pipelines, especially with AI/ML workloads becoming more popular.</p>