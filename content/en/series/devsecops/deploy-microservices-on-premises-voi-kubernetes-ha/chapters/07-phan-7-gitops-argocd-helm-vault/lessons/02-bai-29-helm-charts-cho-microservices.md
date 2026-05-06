---
id: 019e1a00-aa01-7001-c001-k8sha000702
title: 'LESSON 29: HELM CHARTS FOR MICROSERVICES — TEMPLATE, VALUES, DEPENDENCIES'
slug: bai-29-helm-charts-cho-microservices
description: 'Build reusable Helm charts for microservices: template functions, values ​​management, chart dependencies, library charts, Helmfile multi-environment, and best practices.'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 29
section_title: 'Part 7: GitOps with ArgoCD, Helm & Vault'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9620" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9620)"/>

  <!-- Decorations -->
  <g>
    <circle cx="873" cy="89" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="919" cy="215" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="81" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="958.444863728671,112 958.444863728671,146 929,163 899.555136271329,146 899.555136271329,112.00000000000001 929,95" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 29</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 29: HELM CHARTS FOR MICROSERVICES —</tspan>
      <tspan x="60" dy="42">TEMPLATE, VALUES, DEPENDENCIES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: GitOps with ArgoCD, Helm &amp; Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<ul>
<li>✅ Helm chart structure and template engine</li>
<li>✅ Build reusable microservice base chart</li>
<li>✅ Values management: defaults, overrides, environments</li>
<li>✅ Chart dependencies and library charts</li>
<li>✅ Helmfile for multi-environment deployment</li>
<li>✅ Best practices: linting, testing, packaging</li>
</ul>

<hr>

<h2 id="phan-1-structure">PART 1: HELM CHART STRUCTURE</h2>

<pre><code>
microservice-chart/
├── Chart.yaml              # Chart metadata
├── values.yaml             # Default values
├── values-staging.yaml     # Staging overrides
├── values-production.yaml  # Production overrides
├── templates/
│   ├── NOTES.txt           # Post-install notes
│   ├── _helpers.tpl        # Template helpers
│   ├── deployment.yaml     # Deployment
│   ├── service.yaml        # Service
│   ├── hpa.yaml            # HorizontalPodAutoscaler
│   ├── ingress.yaml        # Ingress/VirtualService
│   ├── configmap.yaml      # ConfigMap
│   ├── secret.yaml         # Secret (ExternalSecret)
│   ├── serviceaccount.yaml # ServiceAccount
│   ├── pdb.yaml            # PodDisruptionBudget
│   └── tests/
│       └── test-connection.yaml
└── charts/                 # Dependencies
</code></pre>

<h3 id="11-chart-yaml">1.1. Chart.yaml</h3>
<pre><code class="language-yaml"># Chart.yaml:
apiVersion: v2
name: microservice
description: Base Helm chart for microservices
type: application
version: 1.0.0
appVersion: "1.0.0"

dependencies:
  - name: postgresql
    version: "15.x.x"
    repository: "https://charts.bitnami.com/bitnami"
    condition: postgresql.enabled
  - name: redis
    version: "19.x.x"
    repository: "https://charts.bitnami.com/bitnami"
    condition: redis.enabled
</code></pre>

<hr>

<h2 id="phan-2-templates">PART 2: DETAILED TEMPLATES</h2>

<h3 id="21-helpers">2.1. _helpers.tpl</h3>
<pre><code class="language-yaml"># templates/_helpers.tpl:
{{- define "microservice.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "microservice.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{- define "microservice.labels" -}}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
app.kubernetes.io/name: {{ include "microservice.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Values.image.tag | default .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{- define "microservice.selectorLabels" -}}
app.kubernetes.io/name: {{ include "microservice.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
</code></pre>

<h3 id="22-deployment">2.2. Deployment Template</h3>
<pre><code class="language-yaml"># templates/deployment.yaml:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "microservice.fullname" . }}
  labels:
    {{- include "microservice.labels" . | nindent 4 }}
    version: {{ .Values.image.tag | default .Chart.AppVersion }}
spec:
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "microservice.selectorLabels" . | nindent 6 }}
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        {{- include "microservice.selectorLabels" . | nindent 8 }}
        version: {{ .Values.image.tag | default .Chart.AppVersion }}
      annotations:
        checksum/config: {{ include (print .Template.BasePath "/configmap.yaml") . | sha256sum }}
    spec:
      serviceAccountName: {{ include "microservice.fullname" . }}
      
      {{- with .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          
          ports:
            - name: http
              containerPort: {{ .Values.service.targetPort | default 8080 }}
              protocol: TCP
          
          {{- if .Values.env }}
          env:
            {{- range $key, $value := .Values.env }}
            - name: {{ $key }}
              value: {{ $value | quote }}
            {{- end }}
          {{- end }}
          
          {{- if .Values.envFrom }}
          envFrom:
            {{- toYaml .Values.envFrom | nindent 12 }}
          {{- end }}
          
          {{- if .Values.livenessProbe.enabled }}
          livenessProbe:
            httpGet:
              path: {{ .Values.livenessProbe.path }}
              port: http
            initialDelaySeconds: {{ .Values.livenessProbe.initialDelaySeconds }}
            periodSeconds: {{ .Values.livenessProbe.periodSeconds }}
            failureThreshold: {{ .Values.livenessProbe.failureThreshold }}
          {{- end }}
          
          {{- if .Values.readinessProbe.enabled }}
          readinessProbe:
            httpGet:
              path: {{ .Values.readinessProbe.path }}
              port: http
            initialDelaySeconds: {{ .Values.readinessProbe.initialDelaySeconds }}
            periodSeconds: {{ .Values.readinessProbe.periodSeconds }}
          {{- end }}
          
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
      
      {{- with .Values.nodeSelector }}
      nodeSelector:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      
      {{- with .Values.topologySpreadConstraints }}
      topologySpreadConstraints:
        {{- toYaml . | nindent 8 }}
      {{- end }}
</code></pre>

<h3 id="23-values">2.3. Default Values</h3>
<pre><code class="language-yaml"># values.yaml:
replicaCount: 2

image:
  repository: registry.myapp.com/order-service
  tag: ""
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80
  targetPort: 8080

resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70

livenessProbe:
  enabled: true
  path: /healthz
  initialDelaySeconds: 30
  periodSeconds: 10
  failureThreshold: 3

readinessProbe:
  enabled: true
  path: /readyz
  initialDelaySeconds: 5
  periodSeconds: 5

env: {}
envFrom: []

postgresql:
  enabled: false

redis:
  enabled: false
</code></pre>

<hr>

<h2 id="phan-3-multi-env">PART 3: MULTI-ENVIRONMENT MANAGEMENT</h2>

<pre><code class="language-yaml"># values-production.yaml:
replicaCount: 3

image:
  tag: "v1.5.2"

resources:
  requests:
    cpu: 500m
    memory: 512Mi
  limits:
    cpu: "2"
    memory: 2Gi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 20

env:
  LOG_LEVEL: "warn"
  ENVIRONMENT: "production"
</code></pre>

<pre><code class="language-yaml"># values-staging.yaml:
replicaCount: 1

image:
  tag: "latest"

resources:
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: false

env:
  LOG_LEVEL: "debug"
  ENVIRONMENT: "staging"
</code></pre>

<hr>

<h2 id="phan-4-helmfile">PART 4: HELMFILE — MULTI-SERVICE DEPLOYMENT</h2>

<pre><code class="language-yaml"># helmfile.yaml:
environments:
  staging:
    values:
      - environments/staging/values.yaml
  production:
    values:
      - environments/production/values.yaml

repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami

releases:
  - name: order-service
    namespace: default
    chart: ./charts/microservice
    values:
      - apps/order-service/values.yaml
      - apps/order-service/values-{{ .Environment.Name }}.yaml

  - name: payment-service
    namespace: default
    chart: ./charts/microservice
    values:
      - apps/payment-service/values.yaml
      - apps/payment-service/values-{{ .Environment.Name }}.yaml

  - name: user-service
    namespace: default
    chart: ./charts/microservice
    values:
      - apps/user-service/values.yaml
      - apps/user-service/values-{{ .Environment.Name }}.yaml
</code></pre>

<pre><code class="language-bash"># Deploy all services:
helmfile -e production sync

# Diff before deploy:
helmfile -e production diff

# Destroy all:
helmfile -e staging destroy
</code></pre>

<hr>

<h2 id="phan-5-testing">PART 5: HELM TESTING & CI</h2>

<pre><code class="language-bash"># Lint chart:
helm lint ./charts/microservice

# Template rendering (dry-run):
helm template order-service ./charts/microservice \
  -f values-production.yaml \
  --debug

# Test install:
helm install order-test ./charts/microservice \
  --dry-run --debug

# Unit testing with helm-unittest:
helm plugin install https://github.com/helm-unittest/helm-unittest

# Run tests:
helm unittest ./charts/microservice
</code></pre>

<pre><code class="language-yaml"># tests/deployment_test.yaml:
suite: test deployment
templates:
  - templates/deployment.yaml
tests:
  - it: should have correct replica count
    set:
      replicaCount: 3
    asserts:
      - equal:
          path: spec.replicas
          value: 3

  - it: should set resources
    asserts:
      - isNotEmpty:
          path: spec.template.spec.containers[0].resources
</code></pre>

<hr><h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Base chart</strong>: 1 reusable chart for all microservices</li>
<li><strong>Values layering</strong>: defaults → service → environment</li>
<li><strong>Helmfile</strong>: Multi-service, multi-env deployment orchestration</li>
<li><strong>Template helpers</strong>: DRY, consistent labels/names</li>
<li><strong>Testing</strong>: Lint + template + unit test in CI</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES__HTMLTAG_133___

<h3 id="bt1">Exercise 1: Build Base Chart</h3>
<ul>
<li>Create microservice Helm chart__HTMLTAG_138___
<li>Deploy 3 services using same chart with different values__HTMLTAG_140___
<li>Add HPA, PDB templates__HTMLTAG_142___
</ul>

<h3 id="bt2">Exercise 2: Helmfile Multi-env</h3>
<ul>
<li>Setup staging + production environments</li>
<li>Deploy all services with helmfile sync</li>
<li>Review changes with helmfile diff</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 30: Secrets Management with HashiCorp Vault</strong>, we will configure centralized secrets management.</p>