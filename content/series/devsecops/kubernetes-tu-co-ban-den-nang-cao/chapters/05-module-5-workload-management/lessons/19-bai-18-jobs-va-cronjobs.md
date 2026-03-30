---
id: 019c9618-0301-7000-8000-c1147ba22e13
title: 'BÀI 18: JOBS VÀ CRONJOBS'
slug: bai-18-jobs-va-cronjobs
description: >-
  Batch processing với Jobs (single, parallel, indexed, work queue), CronJobs với timezone support (GA K8s 1.27). JobSet (CNCF project) cho nhóm Jobs phụ thuộc nhau — lý tưởng cho AI/ML training pipelines.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 18
section_title: 'Module 5: Workload Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<h2>Jobs và CronJobs trong Kubernetes</h2>

<p>Trong Kubernetes, <strong>Deployments</strong> và <strong>StatefulSets</strong> được thiết kế cho các workloads chạy liên tục — chúng luôn cố gắng duy trì một số lượng Pod nhất định. Nhưng nhiều tác vụ trong thực tế không cần chạy mãi mãi: xử lý một batch dữ liệu, chạy database migration, train một model ML, hoặc gửi email hàng loạt. Đây là lúc <strong>Jobs</strong> và <strong>CronJobs</strong> phát huy tác dụng.</p>

<h2>1. Jobs là gì? Batch Workloads và Run-to-Completion</h2>

<p>Một <strong>Job</strong> trong Kubernetes tạo ra một hoặc nhiều Pods với mục tiêu hoàn thành một tác vụ cụ thể. Khác với Deployment, Job theo dõi số lượng completions thành công — khi đủ số Pod hoàn thành, Job được coi là done.</p>

<p>Đặc điểm quan trọng của Jobs:</p>
<ul>
  <li><strong>Run-to-completion</strong>: Pod chạy xong và exit với code 0 nghĩa là thành công</li>
  <li><strong>Retry tự động</strong>: Nếu Pod fail, Job tự tạo Pod mới theo <code>backoffLimit</code></li>
  <li><strong>Tracking completions</strong>: Job biết đã hoàn thành bao nhiêu trong tổng số cần thiết</li>
  <li><strong>Parallelism</strong>: Nhiều Pod có thể chạy song song để tăng throughput</li>
</ul>

<p>Ví dụ Job đơn giản nhất — tính số Pi:</p>

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

<p>Lưu ý <code>restartPolicy: Never</code> — với Jobs, bạn chỉ được dùng <code>Never</code> hoặc <code>OnFailure</code>, không được dùng <code>Always</code>.</p>

<h2>2. Job Completion Modes</h2>

<p>Kubernetes hỗ trợ ba completion modes cho Jobs, phù hợp với các use case khác nhau.</p>

<h3>2.1 NonIndexed (Default)</h3>

<p>Job hoàn thành khi đủ số completions thành công. Các Pods không có thứ tự — chúng đều làm cùng một công việc và Job cần đủ <code>completions</code> Pod thành công.</p>

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

<p><strong>Indexed Jobs</strong> là tính năng rất mạnh — mỗi Pod nhận được một index duy nhất từ 0 đến <code>completions-1</code> thông qua biến môi trường <code>JOB_COMPLETION_INDEX</code>. Điều này lý tưởng cho <strong>data partitioning</strong>: mỗi Pod xử lý một phần dữ liệu xác định.</p>

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

<p>Kubernetes tự động inject biến <code>JOB_COMPLETION_INDEX</code> vào mỗi Pod. Pod 0 xử lý partition 0, Pod 1 xử lý partition 1, v.v. — không bao giờ trùng lặp dù có Pod restart.</p>

<h3>2.3 Work Queue</h3>

<p>Với work queue pattern, nhiều Pod cùng lấy task từ một hàng đợi (Redis, RabbitMQ, SQS). Job hoàn thành khi queue rỗng và không còn Pod nào đang xử lý.</p>

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

<h2>3. Job Parameters Chi Tiết</h2>

<p>Hiểu rõ các parameters của Job giúp bạn tối ưu cho từng use case:</p>

<ul>
  <li><strong>completions</strong>: Tổng số Pod cần hoàn thành thành công. Mặc định là 1.</li>
  <li><strong>parallelism</strong>: Số Pod tối đa chạy đồng thời. Mặc định là 1.</li>
  <li><strong>backoffLimit</strong>: Số lần retry trước khi Job bị đánh dấu failed. Mặc định là 6.</li>
  <li><strong>activeDeadlineSeconds</strong>: Thời gian tối đa (giây) Job được phép chạy. Vượt quá → Job bị terminate.</li>
  <li><strong>ttlSecondsAfterFinished</strong>: Xóa Job (và Pods) sau N giây kể từ khi hoàn thành.</li>
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

<p>Từ Kubernetes 1.31, <strong>Pod Failure Policy</strong> cho phép bạn định nghĩa hành vi chi tiết khi Pod fail — không phải lúc nào cũng nên retry.</p>

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

<p>Các <code>action</code> có thể dùng:</p>
<ul>
  <li><strong>FailJob</strong>: Dừng toàn bộ Job ngay lập tức, đánh dấu failed</li>
  <li><strong>Ignore</strong>: Không tính vào backoffLimit, tạo Pod mới</li>
  <li><strong>Count</strong>: Tính vào backoffLimit như bình thường (default behavior)</li>
</ul>

<h2>5. Job TTL — Dọn Dẹp Tự Động</h2>

<p>Jobs và Pods của chúng sẽ tồn tại mãi sau khi hoàn thành nếu không có cơ chế dọn dẹp. Dùng <code>ttlSecondsAfterFinished</code> để tự động xóa:</p>

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
</code></pre>

<p>Bạn cũng có thể patch Jobs hiện có: <code>kubectl patch job old-job -p '{"spec":{"ttlSecondsAfterFinished":0}}'</code> — điều này xóa Job ngay lập tức.</p>

<h2>6. CronJobs — Lên Lịch Tác Vụ</h2>

<p><strong>CronJob</strong> tự động tạo Jobs theo lịch định kỳ, sử dụng cú pháp cron quen thuộc.</p>

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

<p>Trước K8s 1.27, tất cả CronJobs đều dùng UTC của controller. Từ K8s 1.27, <code>timeZone</code> field là GA — bạn có thể chỉ định timezone bất kỳ theo IANA timezone database:</p>

<pre><code class="language-yaml">spec:
  schedule: "0 9 * * 1-5"          # 9 giờ sáng thứ 2-6
  timeZone: "Asia/Ho_Chi_Minh"     # Vietnam timezone (UTC+7)
</code></pre>

<p>Các timezone phổ biến:</p>
<ul>
  <li><code>Asia/Ho_Chi_Minh</code> — Việt Nam (UTC+7)</li>
  <li><code>Asia/Singapore</code> — Singapore (UTC+8)</li>
  <li><code>America/New_York</code> — Eastern US</li>
  <li><code>Europe/London</code> — UK</li>
  <li><code>UTC</code> — Coordinated Universal Time</li>
</ul>

<h3>6.2 ConcurrencyPolicy</h3>

<p>Điều quan trọng cần quyết định: phải làm gì nếu một Job cũ chưa xong khi đến lịch chạy Job mới?</p>
<ul>
  <li><strong>Allow</strong> (default): Tạo Job mới kể cả khi Job cũ đang chạy — cẩn thận với race conditions</li>
  <li><strong>Forbid</strong>: Bỏ qua Job mới, Job cũ vẫn tiếp tục</li>
  <li><strong>Replace</strong>: Xóa Job cũ, tạo Job mới thay thế</li>
</ul>

<h2>7. JobSet — CNCF Project cho Distributed Jobs</h2>

<p><strong>JobSet</strong> là một CNCF project (hiện đang ở giai đoạn Sandbox) được thiết kế để điều phối nhiều Jobs có quan hệ phụ thuộc nhau. Đây là công cụ lý tưởng cho <strong>distributed ML training pipelines</strong>.</p>

<p>Cài đặt JobSet:</p>
<pre><code class="language-bash">kubectl apply --server-side -f \
  https://github.com/kubernetes-sigs/jobset/releases/download/v0.7.0/manifests.yaml
</code></pre>

<h3>7.1 JobSet cho Distributed ML Training</h3>

<p>Scenario: Train một model với kiến trúc Parameter Server — một nhóm pods làm parameter server (lưu trữ gradients), một nhóm khác làm workers (tính toán).</p>

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

<h3>7.2 Tính Năng Nổi Bật của JobSet</h3>

<ul>
  <li><strong>Failure policy propagation</strong>: Nếu một Job trong set fail, toàn bộ JobSet có thể restart hoặc fail cùng — không để Jobs "orphan"</li>
  <li><strong>DNS-based communication</strong>: Các Jobs trong JobSet tự động có DNS records để giao tiếp với nhau (<code>{jobset-name}-{job-name}-{job-index}-{pod-index}.{jobset-name}</code>)</li>
  <li><strong>Exclusive topology</strong>: Đảm bảo các Pods của cùng Job được schedule trên cùng rack/node (giảm network latency)</li>
  <li><strong>Startup sequencing</strong>: Chỉ start worker sau khi PS đã sẵn sàng</li>
</ul>

<h3>7.3 Theo Dõi JobSet</h3>

<pre><code class="language-bash"># Xem trạng thái JobSet
kubectl get jobset -n ml-training

# Xem chi tiết
kubectl describe jobset ml-training-pytorch -n ml-training

# Xem logs của parameter server
kubectl logs -l jobset.sigs.k8s.io/job-name=parameter-server -n ml-training

# Xem logs của tất cả workers
kubectl logs -l jobset.sigs.k8s.io/job-name=worker -n ml-training --prefix
</code></pre>

<h2>8. Tổng Kết: Khi Nào Dùng Gì?</h2>

<ul>
  <li><strong>Job đơn giản</strong>: Một tác vụ, chạy một lần — dùng basic Job</li>
  <li><strong>Parallel processing không cần order</strong>: NonIndexed Job với completions + parallelism</li>
  <li><strong>Data partitioning</strong>: Indexed Job — mỗi Pod xử lý partition xác định</li>
  <li><strong>Queue-based processing</strong>: Work queue Job + Redis/RabbitMQ</li>
  <li><strong>Scheduled tasks</strong>: CronJob với timezone support</li>
  <li><strong>Distributed training/HPC</strong>: JobSet cho multi-job coordination</li>
</ul>

<p>Jobs và CronJobs là nền tảng của mọi batch processing system trên Kubernetes. Hiểu rõ các completion modes và failure policies giúp bạn xây dựng pipelines đáng tin cậy, đặc biệt với AI/ML workloads ngày càng phổ biến.</p>
