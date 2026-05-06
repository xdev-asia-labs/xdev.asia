---
id: 019d8b30-b125-7001-c001-e0c5f8100125
title: 第 25 課：Kubernetes Operator、監控與管理 CLI
slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
description: Keycloak Operator（CRD：Keycloak、KeycloakRealmImport），透過 OLM/kubectl 安裝 Operator、自訂資源配置、領域匯入自動化、Operator 升級策略。使用 Prometheus + Grafana 進行監控（Keycloak 指標、JVM 指標、Infinispan 指標、自訂儀表板）。管理 CLI (kcadm.sh) 掌握 - 所有操作（領域、使用者、用戶端、角色、群組、身分提供者、流程、元件）。 Kubernetes 的備份和復原策略。
duration_minutes: 260
is_free: true
video_url: null
sort_order: 25
section_title: 第 7 部分：生產、HA 和 Kubernetes
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 25 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 25 課：Kubernetes 操作員、監控與</tspan>
      <tspan x="60" dy="42">管理 CLI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：生產、HA 和 Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。 Keycloak Kubernetes 操作員概述___HTMLTAG_69__HTMLTAG_70___

<p>Keycloak Operator 是官方的 Kubernetes Operator，根據 <strong>聲明式方法</strong> 管理 Keycloak 部署。操作員使用自訂資源定義 (CRD) 來定義所需的狀態，然後自動協調以確保實際狀態匹配。 </p>

___預編碼_0___

___HTMLTAG_75__HTMLTAG_76___1.1 CRD 概論___HTMLTAG_77__HTMLTAG_78___

<table>
<thead>
___HTMLTAG_81__HTMLTAG_82___CRD___HTMLTAG_83__HTMLTAG_84___API 群組___HTMLTAG_85__HTMLTAG_86___用途___HTMLTAG_87__HTMLTAG_88___
</thead>
<tbody>
___HTMLTAG_91__HTMLTAG_92__HTMLTAG_93___Keycloak___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96__HTMLTAG_97___k8s.keycloak.org/v2alpha1</code>___UMLG_98______HTTAG_910___部署（實例、資料庫、主機名稱、TLS、功能）___HTMLTAG_101__HTMLTAG_102___
___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___KeycloakRealmImport___HTMLTAG_106__HTMLTAG_107__HTM LTAG_108__HTMLTAG_109___k8s.keycloak.org/v2alpha1___HTMLTAG_110__HTMLTAG_111__HTMLTAG_112___從下列位置匯入領域設定JSON___HTMLTAG_113__HTMLTAG_114___
</tbody>
</table>

___HTMLTAG_117__HTMLTAG_118___2。安裝 Keycloak Operator___HTMLTAG_119__HTMLTAG_120___

___HTMLTAG_121__HTMLTAG_122___2.1 方法 1：kubectl apply（清單）___HTMLTAG_123__HTMLTAG_124___

___預編碼_1___

___HTMLTAG_125__HTMLTAG_126___2.2 方法 2：OLM（操作員生命週期管理器）___HTMLTAG_127__HTMLTAG_128___

___預編碼_2___

___HTMLTAG_129__HTMLTAG_130___2.3 方法 3：Helm 圖表___HTMLTAG_131__HTMLTAG_132___

___預編碼_3___

___HTMLTAG_133__HTMLTAG_134___3。 Keycloak CR 設定___HTMLTAG_135__HTMLTAG_136___

___HTMLTAG_137__HTMLTAG_138___3.1 基本鑰匙斗篷 CR___HTMLTAG_139__HTMLTAG_140______預編碼_4___

___HTMLTAG_141__HTMLTAG_142___3.2 支援資源___HTMLTAG_143__HTMLTAG_144___

___預編碼_5___

___HTMLTAG_145__HTMLTAG_146___3.3 鑰匙斗篷 CR 狀態___HTMLTAG_147__HTMLTAG_148___

___預編碼_6___

___HTMLTAG_149__HTMLTAG_150___4。 KeycloakRealmImport CR___HTMLTAG_151__HTMLTAG_152___

___HTMLTAG_153__HTMLTAG_154___4.1 領域導入設定___HTMLTAG_155__HTMLTAG_156___

___預編碼_7___

___預編碼_8___

___HTMLTAG_157__HTMLTAG_158___4.2 從 JSON 檔案匯入領域___HTMLTAG_159__HTMLTAG_160___

___預編碼_9___

___HTMLTAG_161__HTMLTAG_162___5。運營商升級策略___HTMLTAG_163__HTMLTAG_164___

___預編碼_10___

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

___HTMLTAG_165__HTMLTAG_166___6。使用 Prometheus + Grafana 進行監控___HTMLTAG_167__HTMLTAG_168___

___HTMLTAG_169__HTMLTAG_170___6.1 啟用指標___HTMLTAG_171__HTMLTAG_172___

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

___HTMLTAG_173__HTMLTAG_174___6.2 Prometheus 服務監視器___HTMLTAG_175__HTMLTAG_176___

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

___HTMLTAG_177__HTMLTAG_178___6.3 Keycloak 關鍵指標___HTMLTAG_179__HTMLTAG_180___<table>
<thead>
___HTMLTAG_183__HTMLTAG_184___公制____HTMLTAG_185__HTMLTAG_186___類型___HTMLTAG_187__HTMLTAG_188___說明____HTMLTAG_189__HTMLTAG_190___
</thead>
<tbody>
___HTMLTAG_193__HTMLTAG_194__HTMLTAG_195___keycloak_logins_total___HTMLTAG_196__HTMLTAG_197__HTMLT AG_198___計數器____HTMLTAG_199__HTMLTAG_200___成功登入總數（按領域、提供者、client_id）___HTMLTAG_201__HTMLTAG_202___
___HTMLTAG_203__HTMLTAG_204__HTMLTAG_205___keycloak_registrations_total___HTMLTAG_206__HTMLTAG_207__HTMLTAG_208___計數器___HTMLTAG_209__HTMLTAG_210_208___ML2121112________
___HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___keycloak_failed_login_attempts_total___HTMLTAG_216__HTMLTA G_217__HTMLTAG_218____計數器____HTMLTAG_219__HTMLTAG_220___失敗登入嘗試總數（以錯誤類型）___HTMLTAG_221__HTMLTAG_222___
___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___keycloak_request_duration_seconds____HTMLTAG_226__HTMLTAG_227__HTMLTAG_228___直方圖___HTMLTAG_229__HTMLTAG_230113230___ML_UML_229__HT
___HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___keycloak_refresh_tokens_total___HTMLTAG_236__HTMLTAG_237__HTMLTAG_238___計數器___HTMLTAG_239__HTMLTAG_240___MLG1420_____
___HTMLTAG_243__HTMLTAG_244__HTMLTAG_245___keycloak_client_logins_total___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248____logins_total___HT____249__HTMLTAG_250____MLU_250_MLHT
___HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___vendor_memory_heap_usage_bytes___HTMLTAG_256__HTMLTAG_257__HTMLTAG_258____________HTMLTAG_259__HTMLTAG_26010260260259__
___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___vendor_memory_non_heap_usage_bytes___HTMLTAG_266__HTML TAG_267__HTMLTAG_268____計量___HTMLTAG_269__HTMLTAG_270___JVM非堆記憶體（元空間）___HTMLTAG_271__HTMLTAG_272___
___HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___vendor_cpu_processCpuLoad___HTMLTAG_276__HTMLTAG_277__HTMLTAG_278___計量___HTMLTAG_2791HTMLTAGMLTAG_278___計量___HTMLTAG_2791HTMLTAG1801801802____ML
___HTMLTAG_283__HTMLTAG_284__HTMLTAG_285____vendor_gc_pause_seconds____HTMLTAG_286__HTMLTAG_287__HTMLTAG_288____摘要___HTMLTAG_289__HTMLTAG129070147076____ML
___HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___vendor_thread_count___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298_________HTMLTAG_299__HTMLTAG_300___活動 JVM___ 測量____HTMLTAG_299__HTMLTAG_300___活動 JVM___]130130_______ML
___HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___vendor_db_pool_active_count___HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___ML]___HTMLTAG_309__HTMLTAG_ML310___1308___ML1312________
___HTMLTAG_313__HTMLTAG_314__HTMLTAG_315___vendor_db_pool_available_count___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318___計量___HTMLTAG_319__HTMLTAGML_320____318120____MLTAG_319__HTMLTAGML_320___G1320____23__
</tbody>
</table>

___HTMLTAG_325__HTMLTAG_326___6.4 Grafana 儀表板___HTMLTAG_327__HTMLTAG_328___

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

___HTMLTAG_329__HTMLTAG_330___6.5 警報規則___HTMLTAG_331__HTMLTAG_332___<pre><code class="language-yaml"># prometheus-rules.yaml
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

___HTMLTAG_333__HTMLTAG_334___7。管理 CLI (kcadm.sh)___HTMLTAG_335__HTMLTAG_336___

___HTMLTAG_337__HTMLTAG_338___7.1 驗證___HTMLTAG_339__HTMLTAG_340___

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

___HTMLTAG_341__HTMLTAG_342___7.2 領域操作___HTMLTAG_343__HTMLTAG_344___

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

___HTMLTAG_345__HTMLTAG_346___7.3 使用者操作____HTMLTAG_347__HTMLTAG_348___

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

___HTMLTAG_349__HTMLTAG_350___7.4 用戶端操作____HTMLTAG_351__HTMLTAG_352___

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

___HTMLTAG_353__HTMLTAG_354___7.5 角色操作___HTMLTAG_355__HTMLTAG_356___

___預編碼_20___

___HTMLTAG_357__HTMLTAG_358___7.6 群組操作___HTMLTAG_359__HTMLTAG_360___

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

___HTMLTAG_361__HTMLTAG_362___7.7 身分識別提供者操作___HTMLTAG_363__HTMLTAG_364___

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

___HTMLTAG_365__HTMLTAG_366___7.8 驗證流程管理___HTMLTAG_367__HTMLTAG_368___

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

___HTMLTAG_369__HTMLTAG_370___7.9 元件管理___HTMLTAG_371__HTMLTAG_372___

___預編碼_24___

___HTMLTAG_373__HTMLTAG_374___7.10 匯出/匯入與腳本___HTMLTAG_375__HTMLTAG_376___

___預編碼_25___

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

___HTMLTAG_377__HTMLTAG_378___8。 Kubernetes 的備援策略___HTMLTAG_379__HTMLTAG_380___

___HTMLTAG_381__HTMLTAG_382___8.1 資料庫備份___HTMLTAG_383__HTMLTAG_384___

___預編碼_27___

___HTMLTAG_385__HTMLTAG_386___8.2 領域匯出備份___HTMLTAG_387__HTMLTAG_388___

___預編碼_28___

___HTMLTAG_389__HTMLTAG_390___8.3 Kubernetes 的 Velero 備份___HTMLTAG_391__HTMLTAG_392___

___預編碼_29___

___HTMLTAG_393__HTMLTAG_394___9。完成 Kubernetes 部署___HTMLTAG_395__HTMLTAG_396___

<p>以下是在 Kubernetes 上完全部署 Keycloak 所需的所有清單：</p>

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