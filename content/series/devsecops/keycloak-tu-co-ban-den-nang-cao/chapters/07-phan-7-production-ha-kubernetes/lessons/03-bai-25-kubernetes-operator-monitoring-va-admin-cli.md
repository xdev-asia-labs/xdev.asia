---
id: 019d8b30-b125-7001-c001-e0c5f8100125
title: 'Bài 25: Kubernetes Operator, Monitoring và Admin CLI'
slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
description: >-
  Keycloak Operator (CRDs: Keycloak, KeycloakRealmImport), cài đặt Operator qua
  OLM/kubectl, custom resource configuration, realm import automation, Operator
  upgrade strategies. Monitoring với Prometheus + Grafana (Keycloak metrics, JVM
  metrics, Infinispan metrics, custom dashboards). Admin CLI (kcadm.sh) mastery -
  tất cả operations (realms, users, clients, roles, groups, identity providers,
  flows, components). Backup & restore strategies cho Kubernetes.
duration_minutes: 260
is_free: true
video_url: null
sort_order: 25
section_title: "Phần 7: Production, HA và Kubernetes"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7570" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7570)"/>

  <!-- Decorations -->
  <g>
    <circle cx="852" cy="66" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="604" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="856" cy="90" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="608" cy="102" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="114" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="246" x2="1100" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="276" x2="1050" y2="346" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.507041555162,125.5 981.507041555162,166.5 946,187 910.492958444838,166.5 910.492958444838,125.50000000000001 946,105" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 25: Kubernetes Operator, Monitoring và</tspan>
      <tspan x="60" dy="42">Admin CLI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Production, HA và Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-keycloak-kubernetes-operator-overview"><strong>1. Keycloak Kubernetes Operator Overview</strong></h2>

<p>Keycloak Operator là Kubernetes Operator chính thức, quản lý Keycloak deployment theo <strong>declarative approach</strong>. Operator sử dụng Custom Resource Definitions (CRDs) để định nghĩa desired state, sau đó tự động reconcile để đảm bảo actual state khớp.</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────────┐
│                  Keycloak Operator Architecture                  │
│                                                                  │
│  ┌─────────────────┐     ┌─────────────────────────────────┐    │
│  │  Keycloak CR     │────►│      Keycloak Operator          │    │
│  │  (desired state) │     │                                 │    │
│  └─────────────────┘     │  - Watch Keycloak CRs            │    │
│                           │  - Create/Update StatefulSet    │    │
│  ┌─────────────────┐     │  - Manage Services              │    │
│  │  KeycloakRealm   │────►│  - Configure TLS               │    │
│  │  Import CR       │     │  - Handle upgrades              │    │
│  └─────────────────┘     └──────────┬──────────────────────┘    │
│                                      │                           │
│                           ┌──────────▼──────────────────────┐    │
│                           │     Managed Resources           │    │
│                           │                                 │    │
│                           │  ┌─────────────┐                │    │
│                           │  │ StatefulSet  │ (Keycloak pods)│    │
│                           │  └─────────────┘                │    │
│                           │  ┌─────────────┐                │    │
│                           │  │  Service     │ (ClusterIP)    │    │
│                           │  └─────────────┘                │    │
│                           │  ┌─────────────┐                │    │
│                           │  │  Service     │ (Headless/     │    │
│                           │  │  (discovery) │  JGroups)      │    │
│                           │  └─────────────┘                │    │
│                           └─────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="11-crds-overview"><strong>1.1 CRDs Overview</strong></h3>

<table>
<thead>
<tr><th>CRD</th><th>API Group</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td><code>Keycloak</code></td><td><code>k8s.keycloak.org/v2alpha1</code></td><td>Định nghĩa Keycloak deployment (instances, DB, hostname, TLS, features)</td></tr>
<tr><td><code>KeycloakRealmImport</code></td><td><code>k8s.keycloak.org/v2alpha1</code></td><td>Import realm configuration từ JSON</td></tr>
</tbody>
</table>

<h2 id="2-installing-keycloak-operator"><strong>2. Installing Keycloak Operator</strong></h2>

<h3 id="21-method-1-kubectl-apply-manifests"><strong>2.1 Method 1: kubectl apply (Manifests)</strong></h3>

<pre><code class="language-bash"># Tạo namespace
kubectl create namespace keycloak

# Install CRDs
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/refs/heads/main/kubernetes/keycloaks.k8s.keycloak.org-v1.yml
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/refs/heads/main/kubernetes/keycloakrealmimports.k8s.keycloak.org-v1.yml

# Install Operator
kubectl apply -n keycloak \
  -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/refs/heads/main/kubernetes/kubernetes.yml

# Verify installation
kubectl get pods -n keycloak
kubectl get crd | grep keycloak
</code></pre>

<h3 id="22-method-2-olm-operator-lifecycle-manager"><strong>2.2 Method 2: OLM (Operator Lifecycle Manager)</strong></h3>

<pre><code class="language-bash"># Install OLM nếu chưa có
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.28.0/install.sh | bash -s v0.28.0

# Install Keycloak Operator via OLM
kubectl apply -f - &lt;&lt;EOF
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: keycloak-operator
  namespace: operators
spec:
  channel: fast
  name: keycloak-operator
  source: community-operators
  sourceNamespace: olm
  installPlanApproval: Automatic
EOF

# Verify
kubectl get csv -n operators | grep keycloak
</code></pre>

<h3 id="23-method-3-helm-chart"><strong>2.3 Method 3: Helm Chart</strong></h3>

<pre><code class="language-bash"># Thêm Bitnami repo (community Helm chart)
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Install Keycloak (bao gồm Operator)
helm install keycloak bitnami/keycloak \
  --namespace keycloak \
  --create-namespace \
  --set auth.adminUser=admin \
  --set auth.adminPassword=admin \
  --set postgresql.enabled=true \
  --set postgresql.auth.postgresPassword=pg_password \
  --set production=true \
  --set proxy=edge

# Hoặc sử dụng values file
helm install keycloak bitnami/keycloak \
  --namespace keycloak \
  -f keycloak-values.yaml
</code></pre>

<h2 id="3-keycloak-cr-configuration"><strong>3. Keycloak CR Configuration</strong></h2>

<h3 id="31-basic-keycloak-cr"><strong>3.1 Basic Keycloak CR</strong></h3>

<pre><code class="language-yaml"># keycloak.yaml - Keycloak Custom Resource
apiVersion: k8s.keycloak.org/v2alpha1
kind: Keycloak
metadata:
  name: keycloak
  namespace: keycloak
  labels:
    app: keycloak
spec:
  # Số instances (pods)
  instances: 3

  # Database configuration
  db:
    vendor: postgres
    url: jdbc:postgresql://postgres-service:5432/keycloak
    usernameSecret:
      name: keycloak-db-secret
      key: username
    passwordSecret:
      name: keycloak-db-secret
      key: password
    poolInitialSize: 25
    poolMinSize: 25
    poolMaxSize: 100

  # Hostname configuration
  hostname:
    hostname: auth.example.com
    admin: admin-auth.example.com
    strict: true
    backchannelDynamic: false

  # HTTP/TLS configuration
  http:
    tlsSecret: keycloak-tls-secret
    httpEnabled: false
    httpPort: 8080
    httpsPort: 8443

  # Container image
  image: quay.io/keycloak/keycloak:26.0

  # Image pull secrets (private registry)
  imagePullSecrets:
    - name: registry-credentials

  # Features
  features:
    enabled:
      - token-exchange
      - admin-fine-grained-authz
      - declarative-user-profile
    disabled:
      - impersonation

  # Additional options
  additionalOptions:
    - name: proxy-headers
      value: xforwarded
    - name: health-enabled
      value: "true"
    - name: metrics-enabled
      value: "true"
    - name: log
      value: console
    - name: log-level
      value: info
    - name: log-console-output
      value: json
    - name: cache
      value: ispn
    - name: cache-stack
      value: kubernetes

  # Resource requirements
  resources:
    requests:
      cpu: "500m"
      memory: "1Gi"
    limits:
      cpu: "2"
      memory: "2Gi"

  # Unsupported configurations (escape hatch)
  unsupported:
    podTemplate:
      metadata:
        labels:
          app.kubernetes.io/name: keycloak
          app.kubernetes.io/component: server
      spec:
        containers:
          - env:
              - name: JAVA_OPTS_KC_HEAP
                value: "-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"
              - name: JAVA_OPTS_APPEND
                value: >-
                  -XX:+UseG1GC
                  -XX:MaxGCPauseMillis=200
                  -XX:+UseContainerSupport
                  -XX:+ExitOnOutOfMemoryError
                  -Djgroups.dns.query=keycloak-discovery.keycloak.svc.cluster.local
</code></pre>

<h3 id="32-supporting-resources"><strong>3.2 Supporting Resources</strong></h3>

<pre><code class="language-yaml"># keycloak-secrets.yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-db-secret
  namespace: keycloak
type: Opaque
stringData:
  username: keycloak
  password: secure_db_password
---
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-tls-secret
  namespace: keycloak
type: kubernetes.io/tls
data:
  tls.crt: <base64-encoded-cert>
  tls.key: <base64-encoded-key>
---
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-admin-secret
  namespace: keycloak
type: Opaque
stringData:
  username: admin
  password: secure_admin_password
</code></pre>

<h3 id="33-keycloak-cr-status"><strong>3.3 Keycloak CR Status</strong></h3>

<pre><code class="language-bash"># Check Keycloak CR status
kubectl get keycloak -n keycloak

# Detailed status
kubectl describe keycloak keycloak -n keycloak

# Status output example:
# Status:
#   Conditions:
#     - Type: Ready
#       Status: "True"
#     - Type: HasErrors
#       Status: "False"
#     - Type: RollingUpdate
#       Status: "False"
#   Instances: 3
#   Selector: app=keycloak
</code></pre>

<h2 id="4-keycloakrealmimport-cr"><strong>4. KeycloakRealmImport CR</strong></h2>

<h3 id="41-realm-import-configuration"><strong>4.1 Realm Import Configuration</strong></h3>

<pre><code class="language-yaml"># realm-import.yaml - Import realm via Operator
apiVersion: k8s.keycloak.org/v2alpha1
kind: KeycloakRealmImport
metadata:
  name: my-realm-import
  namespace: keycloak
spec:
  # Tên Keycloak CR để import vào
  keycloakCRName: keycloak

  # Realm JSON (inline)
  realm:
    realm: my-realm
    enabled: true
    displayName: "My Application Realm"

    # Login settings
    registrationAllowed: false
    loginWithEmailAllowed: true
    duplicateEmailsAllowed: false
    resetPasswordAllowed: true
    editUsernameAllowed: false
    bruteForceProtected: true

    # Token settings
    ssoSessionIdleTimeout: 1800
    ssoSessionMaxLifespan: 36000
    accessTokenLifespan: 300
    accessCodeLifespan: 60

    # Roles
    roles:
      realm:
        - name: ADMIN
          description: "Administrator role"
        - name: USER
          description: "Regular user role"
        - name: MANAGER
          description: "Manager role"

    # Default roles
    defaultRoles:
      - USER

    # Clients
    clients:
      - clientId: my-web-app
        name: "My Web Application"
        enabled: true
        publicClient: true
        standardFlowEnabled: true
        directAccessGrantsEnabled: false
        rootUrl: "https://app.example.com"
        baseUrl: "/"
        redirectUris:
          - "https://app.example.com/*"
        webOrigins:
          - "https://app.example.com"
        protocol: openid-connect
        attributes:
          pkce.code.challenge.method: "S256"
          post.logout.redirect.uris: "https://app.example.com/*"

      - clientId: my-api
        name: "My API Service"
        enabled: true
        publicClient: false
        bearerOnly: true
        standardFlowEnabled: false
        serviceAccountsEnabled: false
        protocol: openid-connect

      - clientId: my-service-account
        name: "Service Account Client"
        enabled: true
        publicClient: false
        standardFlowEnabled: false
        serviceAccountsEnabled: true
        protocol: openid-connect
        secret: "change-me-in-production"

    # Client scopes
    clientScopes:
      - name: custom-scope
        protocol: openid-connect
        attributes:
          display.on.consent.screen: "true"
        protocolMappers:
          - name: custom-audience
            protocol: openid-connect
            protocolMapper: oidc-audience-mapper
            config:
              included.client.audience: my-api
              access.token.claim: "true"
</code></pre>

<pre><code class="language-bash"># Apply realm import
kubectl apply -f realm-import.yaml

# Check status
kubectl get keycloakrealmimport -n keycloak

# View details
kubectl describe keycloakrealmimport my-realm-import -n keycloak

# Status shows:
# Conditions:
#   - Type: Done
#     Status: "True"
#   - Type: HasErrors
#     Status: "False"
</code></pre>

<h3 id="42-realm-import-tu-file-json"><strong>4.2 Realm Import từ file JSON</strong></h3>

<pre><code class="language-bash"># Tạo ConfigMap từ realm JSON file
kubectl create configmap my-realm-json \
  --from-file=realm.json=my-realm-export.json \
  -n keycloak

# Hoặc dùng kustomize để generate KeycloakRealmImport từ JSON file
</code></pre>

<h2 id="5-operator-upgrade-strategies"><strong>5. Operator Upgrade Strategies</strong></h2>

<pre><code class="language-yaml"># Keycloak CR với upgrade strategy
apiVersion: k8s.keycloak.org/v2alpha1
kind: Keycloak
metadata:
  name: keycloak
  namespace: keycloak
spec:
  instances: 3
  image: quay.io/keycloak/keycloak:26.0  # Update version here

  # Operator sẽ dùng RollingUpdate strategy mặc định
  # StatefulSet được tạo với:
  #   updateStrategy:
  #     type: RollingUpdate
  #     rollingUpdate:
  #       partition: 0

  unsupported:
    podTemplate:
      spec:
        # Ensure proper shutdown
        terminationGracePeriodSeconds: 60
</code></pre>

<pre><code class="language-bash"># Upgrade process
# 1. Update image version trong Keycloak CR
kubectl patch keycloak keycloak -n keycloak \
  --type=merge \
  -p '{"spec":{"image":"quay.io/keycloak/keycloak:26.1"}}'

# 2. Monitor upgrade
kubectl rollout status statefulset/keycloak -n keycloak --timeout=600s

# 3. Watch pods
kubectl get pods -n keycloak -w

# 4. Rollback nếu cần
kubectl patch keycloak keycloak -n keycloak \
  --type=merge \
  -p '{"spec":{"image":"quay.io/keycloak/keycloak:26.0"}}'
</code></pre>

<h2 id="6-monitoring-voi-prometheus-grafana"><strong>6. Monitoring với Prometheus + Grafana</strong></h2>

<h3 id="61-enabling-metrics"><strong>6.1 Enabling Metrics</strong></h3>

<pre><code class="language-yaml"># Keycloak CR - enable metrics
apiVersion: k8s.keycloak.org/v2alpha1
kind: Keycloak
metadata:
  name: keycloak
  namespace: keycloak
spec:
  additionalOptions:
    - name: metrics-enabled
      value: "true"
    - name: health-enabled
      value: "true"
</code></pre>

<h3 id="62-prometheus-servicemonitor"><strong>6.2 Prometheus ServiceMonitor</strong></h3>

<pre><code class="language-yaml"># servicemonitor.yaml - Prometheus scrape config
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: keycloak-metrics
  namespace: keycloak
  labels:
    app: keycloak
    release: prometheus  # Match Prometheus operator label selector
spec:
  selector:
    matchLabels:
      app: keycloak
      app.kubernetes.io/managed-by: keycloak-operator
  endpoints:
    - port: https
      path: /metrics
      scheme: https
      tlsConfig:
        insecureSkipVerify: true  # Hoặc cấu hình CA cert
      interval: 30s
      scrapeTimeout: 10s
      honorLabels: true
  namespaceSelector:
    matchNames:
      - keycloak
</code></pre>

<h3 id="63-key-keycloak-metrics"><strong>6.3 Key Keycloak Metrics</strong></h3>

<table>
<thead>
<tr><th>Metric</th><th>Type</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><code>keycloak_logins_total</code></td><td>Counter</td><td>Total successful logins (by realm, provider, client_id)</td></tr>
<tr><td><code>keycloak_registrations_total</code></td><td>Counter</td><td>Total user registrations</td></tr>
<tr><td><code>keycloak_failed_login_attempts_total</code></td><td>Counter</td><td>Total failed login attempts (by error type)</td></tr>
<tr><td><code>keycloak_request_duration_seconds</code></td><td>Histogram</td><td>Request duration distribution</td></tr>
<tr><td><code>keycloak_refresh_tokens_total</code></td><td>Counter</td><td>Total token refreshes</td></tr>
<tr><td><code>keycloak_client_logins_total</code></td><td>Counter</td><td>Client credential logins</td></tr>
<tr><td><code>vendor_memory_heap_usage_bytes</code></td><td>Gauge</td><td>JVM heap memory usage</td></tr>
<tr><td><code>vendor_memory_non_heap_usage_bytes</code></td><td>Gauge</td><td>JVM non-heap memory (metaspace)</td></tr>
<tr><td><code>vendor_cpu_processCpuLoad</code></td><td>Gauge</td><td>JVM process CPU utilization</td></tr>
<tr><td><code>vendor_gc_pause_seconds</code></td><td>Summary</td><td>GC pause duration</td></tr>
<tr><td><code>vendor_thread_count</code></td><td>Gauge</td><td>Active JVM threads</td></tr>
<tr><td><code>vendor_db_pool_active_count</code></td><td>Gauge</td><td>Active database connections</td></tr>
<tr><td><code>vendor_db_pool_available_count</code></td><td>Gauge</td><td>Available database connections</td></tr>
</tbody>
</table>

<h3 id="64-grafana-dashboards"><strong>6.4 Grafana Dashboards</strong></h3>

<pre><code class="language-yaml"># grafana-dashboard-configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: keycloak-grafana-dashboard
  namespace: monitoring
  labels:
    grafana_dashboard: "1"
data:
  keycloak-dashboard.json: |
    {
      "annotations": { "list": [] },
      "title": "Keycloak Overview",
      "uid": "keycloak-overview",
      "panels": [
        {
          "title": "Login Rate (per minute)",
          "type": "timeseries",
          "targets": [
            {
              "expr": "sum(rate(keycloak_logins_total[5m])) by (realm) * 60",
              "legendFormat": "{{realm}}"
            }
          ],
          "gridPos": { "h": 8, "w": 12, "x": 0, "y": 0 }
        },
        {
          "title": "Failed Login Rate",
          "type": "timeseries",
          "targets": [
            {
              "expr": "sum(rate(keycloak_failed_login_attempts_total[5m])) by (realm, error) * 60",
              "legendFormat": "{{realm}} - {{error}}"
            }
          ],
          "gridPos": { "h": 8, "w": 12, "x": 12, "y": 0 }
        },
        {
          "title": "Request Duration p95",
          "type": "timeseries",
          "targets": [
            {
              "expr": "histogram_quantile(0.95, sum(rate(keycloak_request_duration_seconds_bucket[5m])) by (le))",
              "legendFormat": "p95"
            },
            {
              "expr": "histogram_quantile(0.99, sum(rate(keycloak_request_duration_seconds_bucket[5m])) by (le))",
              "legendFormat": "p99"
            }
          ],
          "gridPos": { "h": 8, "w": 12, "x": 0, "y": 8 }
        },
        {
          "title": "JVM Heap Usage",
          "type": "gauge",
          "targets": [
            {
              "expr": "vendor_memory_heap_usage_bytes / vendor_memory_heap_max_bytes * 100",
              "legendFormat": "Heap %"
            }
          ],
          "gridPos": { "h": 8, "w": 6, "x": 12, "y": 8 }
        },
        {
          "title": "DB Connection Pool",
          "type": "timeseries",
          "targets": [
            {
              "expr": "vendor_db_pool_active_count",
              "legendFormat": "Active"
            },
            {
              "expr": "vendor_db_pool_available_count",
              "legendFormat": "Available"
            }
          ],
          "gridPos": { "h": 8, "w": 6, "x": 18, "y": 8 }
        }
      ]
    }
</code></pre>

<h3 id="65-alerting-rules"><strong>6.5 Alerting Rules</strong></h3>

<pre><code class="language-yaml"># prometheus-rules.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: keycloak-alerts
  namespace: keycloak
  labels:
    release: prometheus
spec:
  groups:
    - name: keycloak.rules
      rules:
        # High failed login rate
        - alert: KeycloakHighFailedLoginRate
          expr: >
            sum(rate(keycloak_failed_login_attempts_total[5m])) by (realm) > 10
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: "High failed login rate on realm {{ $labels.realm }}"
            description: >
              Failed login rate is {{ $value | humanize }}/s on realm {{ $labels.realm }}.
              Possible brute force attack.

        # Keycloak pod not ready
        - alert: KeycloakPodNotReady
          expr: >
            kube_pod_status_ready{namespace="keycloak", pod=~"keycloak-.*"} == 0
          for: 2m
          labels:
            severity: critical
          annotations:
            summary: "Keycloak pod {{ $labels.pod }} is not ready"
            description: "Pod {{ $labels.pod }} has been not ready for 2 minutes."

        # High response time
        - alert: KeycloakHighResponseTime
          expr: >
            histogram_quantile(0.95,
              sum(rate(keycloak_request_duration_seconds_bucket[5m])) by (le)
            ) > 1.0
          for: 10m
          labels:
            severity: warning
          annotations:
            summary: "Keycloak p95 response time exceeds 1 second"
            description: "p95 latency is {{ $value | humanize }}s for the last 10 minutes."

        # High JVM heap usage
        - alert: KeycloakHighHeapUsage
          expr: >
            vendor_memory_heap_usage_bytes / vendor_memory_heap_max_bytes * 100 > 85
          for: 10m
          labels:
            severity: warning
          annotations:
            summary: "Keycloak JVM heap usage > 85%"
            description: "Heap usage is {{ $value | humanize }}%. Consider scaling or increasing memory."

        # Database connection pool exhaustion
        - alert: KeycloakDBPoolExhausted
          expr: >
            vendor_db_pool_available_count < 5
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: "Keycloak database connection pool nearly exhausted"
            description: "Only {{ $value }} connections available. Increase pool size or investigate slow queries."

        # No successful logins (potential outage)
        - alert: KeycloakNoLogins
          expr: >
            sum(rate(keycloak_logins_total[10m])) == 0
          for: 15m
          labels:
            severity: critical
          annotations:
            summary: "No successful logins in the last 15 minutes"
            description: "Keycloak may be experiencing an outage."

        # High error rate
        - alert: KeycloakHighErrorRate
          expr: >
            sum(rate(keycloak_request_duration_seconds_count{status=~"5.."}[5m]))
            / sum(rate(keycloak_request_duration_seconds_count[5m])) > 0.05
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: "Keycloak error rate exceeds 5%"
            description: "{{ $value | humanizePercentage }} of requests are returning 5xx errors."
</code></pre>

<h2 id="7-admin-cli-kcadmsh"><strong>7. Admin CLI (kcadm.sh)</strong></h2>

<h3 id="71-authentication"><strong>7.1 Authentication</strong></h3>

<pre><code class="language-bash"># Login vào Keycloak Admin CLI
bin/kcadm.sh config credentials \
  --server https://auth.example.com \
  --realm master \
  --user admin \
  --password admin_password

# Login với client credentials (service account)
bin/kcadm.sh config credentials \
  --server https://auth.example.com \
  --realm master \
  --client admin-cli \
  --secret client_secret

# Trong container
kubectl exec -it keycloak-0 -n keycloak -- \
  /opt/keycloak/bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin
</code></pre>

<h3 id="72-realm-operations"><strong>7.2 Realm Operations</strong></h3>

<pre><code class="language-bash"># ===== Realm CRUD =====

# List tất cả realms
bin/kcadm.sh get realms --fields realm,enabled

# Tạo realm mới
bin/kcadm.sh create realms \
  -s realm=my-new-realm \
  -s enabled=true \
  -s displayName="My New Realm" \
  -s registrationAllowed=false \
  -s loginWithEmailAllowed=true \
  -s resetPasswordAllowed=true \
  -s bruteForceProtected=true \
  -s permanentLockout=false \
  -s maxFailureWaitSeconds=900 \
  -s failureFactor=5

# Get realm details
bin/kcadm.sh get realms/my-new-realm

# Update realm
bin/kcadm.sh update realms/my-new-realm \
  -s "ssoSessionIdleTimeout=1800" \
  -s "ssoSessionMaxLifespan=36000" \
  -s "accessTokenLifespan=300"

# Delete realm
bin/kcadm.sh delete realms/my-new-realm
</code></pre>

<h3 id="73-user-operations"><strong>7.3 User Operations</strong></h3>

<pre><code class="language-bash"># ===== User CRUD =====

# Tạo user mới
bin/kcadm.sh create users -r my-realm \
  -s username=john.doe \
  -s email=john@example.com \
  -s firstName=John \
  -s lastName=Doe \
  -s enabled=true \
  -s emailVerified=true

# Set password cho user
bin/kcadm.sh set-password -r my-realm \
  --username john.doe \
  --new-password "SecureP@ss123" \
  --temporary=false

# List users
bin/kcadm.sh get users -r my-realm --fields id,username,email,enabled

# Search users
bin/kcadm.sh get users -r my-realm -q "username=john"
bin/kcadm.sh get users -r my-realm -q "email=john@example.com"

# Get user by ID
bin/kcadm.sh get users/USER_ID -r my-realm

# Update user
bin/kcadm.sh update users/USER_ID -r my-realm \
  -s firstName="Jonathan" \
  -s "attributes.department=[\"Engineering\"]"

# Disable user
bin/kcadm.sh update users/USER_ID -r my-realm \
  -s enabled=false

# Delete user
bin/kcadm.sh delete users/USER_ID -r my-realm

# ===== User Roles =====

# Add realm role to user
bin/kcadm.sh add-roles -r my-realm \
  --uusername john.doe \
  --rolename ADMIN

# Add client role to user
bin/kcadm.sh add-roles -r my-realm \
  --uusername john.doe \
  --cclientid my-app \
  --rolename app-admin

# Remove role from user
bin/kcadm.sh remove-roles -r my-realm \
  --uusername john.doe \
  --rolename ADMIN

# List user roles
bin/kcadm.sh get-roles -r my-realm --uusername john.doe

# ===== User Groups =====

# Add user to group
bin/kcadm.sh update users/USER_ID/groups/GROUP_ID -r my-realm \
  -s realm=my-realm -s userId=USER_ID -s groupId=GROUP_ID -n

# Remove user from group
bin/kcadm.sh delete users/USER_ID/groups/GROUP_ID -r my-realm

# List user groups
bin/kcadm.sh get users/USER_ID/groups -r my-realm
</code></pre>

<h3 id="74-client-operations"><strong>7.4 Client Operations</strong></h3>

<pre><code class="language-bash"># ===== Client CRUD =====

# Tạo public client (SPA)
bin/kcadm.sh create clients -r my-realm \
  -s clientId=my-spa \
  -s name="My SPA Application" \
  -s enabled=true \
  -s publicClient=true \
  -s standardFlowEnabled=true \
  -s directAccessGrantsEnabled=false \
  -s 'redirectUris=["https://app.example.com/*"]' \
  -s 'webOrigins=["https://app.example.com"]' \
  -s protocol=openid-connect \
  -s 'attributes={"pkce.code.challenge.method":"S256"}'

# Tạo confidential client (backend service)
bin/kcadm.sh create clients -r my-realm \
  -s clientId=my-backend \
  -s name="My Backend Service" \
  -s enabled=true \
  -s publicClient=false \
  -s serviceAccountsEnabled=true \
  -s standardFlowEnabled=false \
  -s protocol=openid-connect

# Tạo bearer-only client (API)
bin/kcadm.sh create clients -r my-realm \
  -s clientId=my-api \
  -s name="My API" \
  -s enabled=true \
  -s publicClient=false \
  -s bearerOnly=true \
  -s protocol=openid-connect

# List clients
bin/kcadm.sh get clients -r my-realm --fields id,clientId,enabled

# Get client secret
bin/kcadm.sh get clients/CLIENT_ID/client-secret -r my-realm

# Regenerate client secret
bin/kcadm.sh create clients/CLIENT_ID/client-secret -r my-realm

# Update client
bin/kcadm.sh update clients/CLIENT_ID -r my-realm \
  -s 'redirectUris=["https://new-app.example.com/*"]'

# Delete client
bin/kcadm.sh delete clients/CLIENT_ID -r my-realm
</code></pre>

<h3 id="75-role-operations"><strong>7.5 Role Operations</strong></h3>

<pre><code class="language-bash"># ===== Realm Roles =====

# Create realm role
bin/kcadm.sh create roles -r my-realm \
  -s name=SUPERVISOR \
  -s description="Supervisor role"

# List realm roles
bin/kcadm.sh get roles -r my-realm

# Get role details
bin/kcadm.sh get roles/SUPERVISOR -r my-realm

# Create composite role (role chứa roles khác)
bin/kcadm.sh add-roles -r my-realm \
  --rname SUPERVISOR \
  --rolename USER \
  --rolename MANAGER

# Delete role
bin/kcadm.sh delete roles/SUPERVISOR -r my-realm

# ===== Client Roles =====

# Create client role
bin/kcadm.sh create clients/CLIENT_ID/roles -r my-realm \
  -s name=client-admin \
  -s description="Client administrator"

# List client roles
bin/kcadm.sh get clients/CLIENT_ID/roles -r my-realm
</code></pre>

<h3 id="76-group-operations"><strong>7.6 Group Operations</strong></h3>

<pre><code class="language-bash"># ===== Group CRUD =====

# Create group
bin/kcadm.sh create groups -r my-realm \
  -s name="Engineering"

# Create sub-group
bin/kcadm.sh create groups/PARENT_GROUP_ID/children -r my-realm \
  -s name="Backend Team"

# List groups
bin/kcadm.sh get groups -r my-realm

# Add role to group
bin/kcadm.sh add-roles -r my-realm \
  --gname Engineering \
  --rolename USER

# List group members
bin/kcadm.sh get groups/GROUP_ID/members -r my-realm

# Delete group
bin/kcadm.sh delete groups/GROUP_ID -r my-realm
</code></pre>

<h3 id="77-identity-provider-operations"><strong>7.7 Identity Provider Operations</strong></h3>

<pre><code class="language-bash"># ===== Identity Provider CRUD =====

# Create Google Identity Provider
bin/kcadm.sh create identity-provider/instances -r my-realm \
  -s alias=google \
  -s providerId=google \
  -s enabled=true \
  -s 'config.clientId=GOOGLE_CLIENT_ID' \
  -s 'config.clientSecret=GOOGLE_CLIENT_SECRET' \
  -s 'config.defaultScope=openid email profile' \
  -s trustEmail=true \
  -s firstBrokerLoginFlowAlias="first broker login"

# Create OIDC Identity Provider
bin/kcadm.sh create identity-provider/instances -r my-realm \
  -s alias=corporate-idp \
  -s providerId=oidc \
  -s enabled=true \
  -s 'config.authorizationUrl=https://idp.example.com/authorize' \
  -s 'config.tokenUrl=https://idp.example.com/token' \
  -s 'config.clientId=keycloak-client' \
  -s 'config.clientSecret=client_secret' \
  -s 'config.userInfoUrl=https://idp.example.com/userinfo' \
  -s 'config.defaultScope=openid email profile'

# Create SAML Identity Provider
bin/kcadm.sh create identity-provider/instances -r my-realm \
  -s alias=saml-idp \
  -s providerId=saml \
  -s enabled=true \
  -s 'config.singleSignOnServiceUrl=https://idp.example.com/sso' \
  -s 'config.nameIDPolicyFormat=urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress' \
  -s 'config.principalType=ATTRIBUTE' \
  -s 'config.principalAttribute=email'

# List identity providers
bin/kcadm.sh get identity-provider/instances -r my-realm

# Update identity provider
bin/kcadm.sh update identity-provider/instances/google -r my-realm \
  -s enabled=false

# Delete identity provider
bin/kcadm.sh delete identity-provider/instances/google -r my-realm

# ===== Identity Provider Mappers =====

# Create mapper
bin/kcadm.sh create identity-provider/instances/google/mappers -r my-realm \
  -s name="email-mapper" \
  -s identityProviderMapper=hardcoded-user-session-attribute-idp-mapper \
  -s identityProviderAlias=google \
  -s 'config={"syncMode":"INHERIT","attribute":"email","attribute.value":""}'
</code></pre>

<h3 id="78-authentication-flow-management"><strong>7.8 Authentication Flow Management</strong></h3>

<pre><code class="language-bash"># ===== Authentication Flows =====

# List authentication flows
bin/kcadm.sh get authentication/flows -r my-realm --fields id,alias,builtIn

# Get flow executions
bin/kcadm.sh get authentication/flows/browser/executions -r my-realm

# Copy built-in flow (để customize)
bin/kcadm.sh create authentication/flows/browser/copy -r my-realm \
  -s newName="Custom Browser Flow"

# Add execution to flow
bin/kcadm.sh create authentication/flows/Custom%20Browser%20Flow/executions/execution -r my-realm \
  -s provider=auth-otp-form

# Update execution requirement
bin/kcadm.sh update authentication/flows/Custom%20Browser%20Flow/executions -r my-realm \
  -b '[{"id":"EXECUTION_ID","requirement":"REQUIRED"}]'

# Set flow as realm browser flow
bin/kcadm.sh update realms/my-realm \
  -s browserFlow="Custom Browser Flow"
</code></pre>

<h3 id="79-component-management"><strong>7.9 Component Management</strong></h3>

<pre><code class="language-bash"># ===== LDAP User Federation =====

# Create LDAP provider
bin/kcadm.sh create components -r my-realm \
  -s name="Corporate LDAP" \
  -s providerId=ldap \
  -s providerType=org.keycloak.storage.UserStorageProvider \
  -s 'config.vendor=["ad"]' \
  -s 'config.connectionUrl=["ldaps://ldap.example.com:636"]' \
  -s 'config.bindDn=["cn=admin,dc=example,dc=com"]' \
  -s 'config.bindCredential=["ldap_password"]' \
  -s 'config.usersDn=["ou=users,dc=example,dc=com"]' \
  -s 'config.userObjectClasses=["person, organizationalPerson, user"]' \
  -s 'config.usernameLDAPAttribute=["sAMAccountName"]' \
  -s 'config.uuidLDAPAttribute=["objectGUID"]' \
  -s 'config.rdnLDAPAttribute=["cn"]' \
  -s 'config.editMode=["READ_ONLY"]' \
  -s 'config.syncRegistrations=["false"]' \
  -s 'config.searchScope=["2"]' \
  -s 'config.pagination=["true"]' \
  -s 'config.batchSizeForSync=["1000"]' \
  -s 'config.importEnabled=["true"]'

# List components
bin/kcadm.sh get components -r my-realm -q type=org.keycloak.storage.UserStorageProvider

# Trigger LDAP sync
bin/kcadm.sh create user-storage/COMPONENT_ID/sync -r my-realm -s action=triggerFullSync
bin/kcadm.sh create user-storage/COMPONENT_ID/sync -r my-realm -s action=triggerChangedUsersSync
</code></pre>

<h3 id="710-export-import-va-scripting"><strong>7.10 Export/Import và Scripting</strong></h3>

<pre><code class="language-bash"># ===== Export realm =====

# Partial export (via Admin API)
bin/kcadm.sh create realms/my-realm/partial-export \
  -s exportClients=true \
  -s exportGroupsAndRoles=true \
  -o > my-realm-export.json

# ===== Scripting Automation =====
</code></pre>

<pre><code class="language-bash">#!/bin/bash
# setup-realm.sh - Automated realm setup script

KEYCLOAK_URL="https://auth.example.com"
REALM="my-realm"
KCADM="bin/kcadm.sh"

# 1. Login
$KCADM config credentials \
  --server "$KEYCLOAK_URL" \
  --realm master \
  --user admin \
  --password "$KEYCLOAK_ADMIN_PASSWORD"

# 2. Create Realm
echo "=== Creating realm: $REALM ==="
$KCADM create realms \
  -s realm="$REALM" \
  -s enabled=true \
  -s displayName="My Application" \
  -s loginWithEmailAllowed=true \
  -s resetPasswordAllowed=true \
  -s bruteForceProtected=true \
  -s failureFactor=5 \
  -s ssoSessionIdleTimeout=1800 \
  -s accessTokenLifespan=300

# 3. Create Roles
echo "=== Creating roles ==="
for ROLE in ADMIN USER MANAGER; do
  $KCADM create roles -r "$REALM" -s name="$ROLE"
done

# 4. Create Clients
echo "=== Creating clients ==="

# SPA Client
$KCADM create clients -r "$REALM" \
  -s clientId=my-spa \
  -s publicClient=true \
  -s standardFlowEnabled=true \
  -s directAccessGrantsEnabled=false \
  -s 'redirectUris=["https://app.example.com/*"]' \
  -s 'webOrigins=["https://app.example.com"]' \
  -s 'attributes={"pkce.code.challenge.method":"S256"}'

# API Client
$KCADM create clients -r "$REALM" \
  -s clientId=my-api \
  -s publicClient=false \
  -s bearerOnly=true

# Service Account
$KCADM create clients -r "$REALM" \
  -s clientId=my-service \
  -s publicClient=false \
  -s serviceAccountsEnabled=true \
  -s standardFlowEnabled=false

# 5. Create Test Users
echo "=== Creating test users ==="
$KCADM create users -r "$REALM" \
  -s username=admin-user \
  -s email=admin@example.com \
  -s firstName=Admin \
  -s lastName=User \
  -s enabled=true \
  -s emailVerified=true

$KCADM set-password -r "$REALM" \
  --username admin-user \
  --new-password "Admin@123" \
  --temporary=false

$KCADM add-roles -r "$REALM" \
  --uusername admin-user \
  --rolename ADMIN

echo "=== Realm setup completed ==="
</code></pre>

<h2 id="8-backup-strategies-cho-kubernetes"><strong>8. Backup Strategies cho Kubernetes</strong></h2>

<h3 id="81-database-backup"><strong>8.1 Database Backup</strong></h3>

<pre><code class="language-yaml"># cronjob-db-backup.yaml - Automated database backup
apiVersion: batch/v1
kind: CronJob
metadata:
  name: keycloak-db-backup
  namespace: keycloak
spec:
  schedule: "0 2 * * *"  # Daily at 2 AM
  concurrencyPolicy: Forbid
  successfulJobsHistoryLimit: 7
  failedJobsHistoryLimit: 3
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
            - name: backup
              image: postgres:16-alpine
              env:
                - name: PGHOST
                  value: postgres-service
                - name: PGDATABASE
                  value: keycloak
                - name: PGUSER
                  valueFrom:
                    secretKeyRef:
                      name: keycloak-db-secret
                      key: username
                - name: PGPASSWORD
                  valueFrom:
                    secretKeyRef:
                      name: keycloak-db-secret
                      key: password
              command:
                - /bin/sh
                - -c
                - |
                  BACKUP_FILE="/backups/keycloak-$(date +%Y%m%d_%H%M%S).dump"
                  echo "Starting backup to $BACKUP_FILE"

                  pg_dump --format=custom --compress=9 \
                    --file="$BACKUP_FILE"

                  if [ $? -eq 0 ]; then
                    echo "Backup successful: $BACKUP_FILE"
                    # Cleanup old backups (keep last 30 days)
                    find /backups -name "keycloak-*.dump" -mtime +30 -delete
                  else
                    echo "Backup failed!"
                    exit 1
                  fi
              volumeMounts:
                - name: backup-volume
                  mountPath: /backups
          volumes:
            - name: backup-volume
              persistentVolumeClaim:
                claimName: keycloak-backup-pvc
</code></pre>

<h3 id="82-realm-export-backup"><strong>8.2 Realm Export Backup</strong></h3>

<pre><code class="language-yaml"># cronjob-realm-export.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: keycloak-realm-export
  namespace: keycloak
spec:
  schedule: "0 3 * * *"  # Daily at 3 AM
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
            - name: export
              image: curlimages/curl:latest
              env:
                - name: KC_URL
                  value: "http://keycloak-service:8080"
                - name: KC_ADMIN_USER
                  valueFrom:
                    secretKeyRef:
                      name: keycloak-admin-secret
                      key: username
                - name: KC_ADMIN_PASS
                  valueFrom:
                    secretKeyRef:
                      name: keycloak-admin-secret
                      key: password
              command:
                - /bin/sh
                - -c
                - |
                  # Get admin token
                  TOKEN=$(curl -s \
                    -d "client_id=admin-cli" \
                    -d "username=$KC_ADMIN_USER" \
                    -d "password=$KC_ADMIN_PASS" \
                    -d "grant_type=password" \
                    "$KC_URL/realms/master/protocol/openid-connect/token" \
                    | grep -o '"access_token":"[^"]*"' | cut -d'"' -f4)

                  if [ -z "$TOKEN" ]; then
                    echo "Failed to get admin token"
                    exit 1
                  fi

                  # Export each realm
                  REALMS=$(curl -s \
                    -H "Authorization: Bearer $TOKEN" \
                    "$KC_URL/admin/realms" \
                    | grep -o '"realm":"[^"]*"' | cut -d'"' -f4)

                  TIMESTAMP=$(date +%Y%m%d_%H%M%S)
                  for REALM in $REALMS; do
                    echo "Exporting realm: $REALM"
                    curl -s \
                      -H "Authorization: Bearer $TOKEN" \
                      "$KC_URL/admin/realms/$REALM/partial-export?exportClients=true&exportGroupsAndRoles=true" \
                      -o "/backups/realm-${REALM}-${TIMESTAMP}.json"
                  done

                  echo "Export completed"
              volumeMounts:
                - name: backup-volume
                  mountPath: /backups
          volumes:
            - name: backup-volume
              persistentVolumeClaim:
                claimName: keycloak-backup-pvc
</code></pre>

<h3 id="83-velero-backup-cho-kubernetes"><strong>8.3 Velero Backup cho Kubernetes</strong></h3>

<pre><code class="language-bash"># Install Velero
velero install \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:v1.9.0 \
  --bucket keycloak-backups \
  --secret-file ./credentials-velero \
  --backup-location-config region=ap-southeast-1 \
  --snapshot-location-config region=ap-southeast-1

# Create backup schedule
velero create schedule keycloak-daily \
  --schedule="0 2 * * *" \
  --include-namespaces keycloak \
  --ttl 720h  # Keep backups for 30 days

# Manual backup
velero backup create keycloak-manual-$(date +%Y%m%d) \
  --include-namespaces keycloak \
  --wait

# List backups
velero backup get

# Restore from backup
velero restore create --from-backup keycloak-manual-20260330 \
  --include-namespaces keycloak

# Verify restore
kubectl get all -n keycloak
</code></pre>

<h2 id="9-complete-kubernetes-deployment"><strong>9. Complete Kubernetes Deployment</strong></h2>

<p>Dưới đây là tất cả manifests cần thiết để deploy Keycloak hoàn chỉnh trên Kubernetes:</p>

<pre><code class="language-yaml"># 01-namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: keycloak
  labels:
    app.kubernetes.io/part-of: keycloak
---
# 02-secrets.yaml
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-db-secret
  namespace: keycloak
type: Opaque
stringData:
  username: keycloak
  password: "secure_db_password_here"
---
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-admin-secret
  namespace: keycloak
type: Opaque
stringData:
  username: admin
  password: "secure_admin_password_here"
---
# 03-postgresql-statefulset.yaml
apiVersion: v1
kind: Service
metadata:
  name: postgres
  namespace: keycloak
spec:
  type: ClusterIP
  selector:
    app: postgres
  ports:
    - port: 5432
      targetPort: 5432
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: keycloak
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:16-alpine
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_DB
              value: keycloak
            - name: POSTGRES_USER
              valueFrom:
                secretKeyRef:
                  name: keycloak-db-secret
                  key: username
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: keycloak-db-secret
                  key: password
            - name: PGDATA
              value: /var/lib/postgresql/data/pgdata
          volumeMounts:
            - name: pgdata
              mountPath: /var/lib/postgresql/data
          resources:
            requests:
              cpu: 500m
              memory: 1Gi
            limits:
              cpu: "2"
              memory: 2Gi
          readinessProbe:
            exec:
              command: ["pg_isready", "-U", "keycloak"]
            initialDelaySeconds: 5
            periodSeconds: 10
          livenessProbe:
            exec:
              command: ["pg_isready", "-U", "keycloak"]
            initialDelaySeconds: 30
            periodSeconds: 10
  volumeClaimTemplates:
    - metadata:
        name: pgdata
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 20Gi
---
# 04-keycloak-cr.yaml
apiVersion: k8s.keycloak.org/v2alpha1
kind: Keycloak
metadata:
  name: keycloak
  namespace: keycloak
spec:
  instances: 3
  db:
    vendor: postgres
    url: jdbc:postgresql://postgres:5432/keycloak
    usernameSecret:
      name: keycloak-db-secret
      key: username
    passwordSecret:
      name: keycloak-db-secret
      key: password
    poolInitialSize: 25
    poolMinSize: 25
    poolMaxSize: 100
  hostname:
    hostname: auth.example.com
    strict: true
  http:
    tlsSecret: keycloak-tls-secret
    httpEnabled: false
  features:
    enabled:
      - token-exchange
  additionalOptions:
    - name: proxy-headers
      value: xforwarded
    - name: health-enabled
      value: "true"
    - name: metrics-enabled
      value: "true"
    - name: cache
      value: ispn
    - name: cache-stack
      value: kubernetes
    - name: log-console-output
      value: json
  resources:
    requests:
      cpu: 500m
      memory: 1Gi
    limits:
      cpu: "2"
      memory: 2Gi
  unsupported:
    podTemplate:
      metadata:
        labels:
          app.kubernetes.io/name: keycloak
      spec:
        containers:
          - env:
              - name: JAVA_OPTS_KC_HEAP
                value: "-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"
              - name: JAVA_OPTS_APPEND
                value: >-
                  -XX:+UseG1GC -XX:MaxGCPauseMillis=200
                  -XX:+UseContainerSupport -XX:+ExitOnOutOfMemoryError
                  -Djgroups.dns.query=keycloak-discovery.keycloak.svc.cluster.local
              - name: KC_BOOTSTRAP_ADMIN_USERNAME
                valueFrom:
                  secretKeyRef:
                    name: keycloak-admin-secret
                    key: username
              - name: KC_BOOTSTRAP_ADMIN_PASSWORD
                valueFrom:
                  secretKeyRef:
                    name: keycloak-admin-secret
                    key: password
---
# 05-ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: keycloak
  namespace: keycloak
  annotations:
    nginx.ingress.kubernetes.io/proxy-buffer-size: "128k"
    nginx.ingress.kubernetes.io/proxy-buffers-number: "4"
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/session-cookie-name: "KC_ROUTE"
    nginx.ingress.kubernetes.io/session-cookie-expires: "3600"
    nginx.ingress.kubernetes.io/session-cookie-secure: "true"
    nginx.ingress.kubernetes.io/session-cookie-httponly: "true"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - auth.example.com
      secretName: keycloak-tls-secret
  rules:
    - host: auth.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: keycloak-service
                port:
                  number: 8443
---
# 06-servicemonitor.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: keycloak
  namespace: keycloak
  labels:
    release: prometheus
spec:
  selector:
    matchLabels:
      app: keycloak
  endpoints:
    - port: https
      path: /metrics
      scheme: https
      tlsConfig:
        insecureSkipVerify: true
      interval: 30s
  namespaceSelector:
    matchNames:
      - keycloak
---
# 07-prometheus-rules.yaml
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: keycloak-alerts
  namespace: keycloak
  labels:
    release: prometheus
spec:
  groups:
    - name: keycloak.rules
      rules:
        - alert: KeycloakPodNotReady
          expr: kube_pod_status_ready{namespace="keycloak", pod=~"keycloak-.*"} == 0
          for: 2m
          labels:
            severity: critical
          annotations:
            summary: "Keycloak pod {{ $labels.pod }} not ready"
        - alert: KeycloakHighFailedLogins
          expr: sum(rate(keycloak_failed_login_attempts_total[5m])) by (realm) > 10
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: "High failed login rate on {{ $labels.realm }}"
        - alert: KeycloakHighLatency
          expr: histogram_quantile(0.95, sum(rate(keycloak_request_duration_seconds_bucket[5m])) by (le)) > 1
          for: 10m
          labels:
            severity: warning
          annotations:
            summary: "Keycloak p95 latency exceeds 1s"
</code></pre>

<pre><code class="language-bash"># Deploy tất cả
kubectl apply -f 01-namespace.yaml
kubectl apply -f 02-secrets.yaml
kubectl apply -f 03-postgresql-statefulset.yaml

# Chờ PostgreSQL ready
kubectl wait --for=condition=ready pod/postgres-0 -n keycloak --timeout=120s

# Deploy Keycloak (cần Operator đã installed)
kubectl apply -f 04-keycloak-cr.yaml
kubectl apply -f 05-ingress.yaml
kubectl apply -f 06-servicemonitor.yaml
kubectl apply -f 07-prometheus-rules.yaml

# Verify
kubectl get all -n keycloak
kubectl get keycloak -n keycloak
kubectl logs -f keycloak-0 -n keycloak
</code></pre>
