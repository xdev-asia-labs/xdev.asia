---
id: cka-d1-l03
title: '第3課：RBAC & 授權'
slug: 03-rbac-cka
description: >-
  Role/ClusterRole、RoleBinding/ClusterRoleBinding。ServiceAccount。
  CKA 考試中的權限管理與 RBAC 除錯。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 3
section_title: "領域1: Cluster Architecture, Installation & Configuration (25%)"
course:
  id: lt-cka-series-001
  title: 'CKA 認證備考 — Certified Kubernetes Administrator'
  slug: luyen-thi-cka
---

<img src="/storage/uploads/2026/04/k8s-cert-cka-bai3-rbac.png" alt="RBAC 模型 — Role、ClusterRole、RoleBinding、ClusterRoleBinding" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="rbac-model">1. RBAC 模型</h2>

<pre><code class="language-text">RBAC 的四種資源：

Namespace 範圍 RBAC：
  Role ──────────► 定義特定 Namespace 的權限
  RoleBinding ──► 將 User 或 SA 綁定到 Role

叢集範圍 RBAC：
  ClusterRole ────► 定義叢集層級的權限
  ClusterRoleBinding ► 將 User 或 SA 綁定到 ClusterRole</code></pre>

<h2 id="role">2. Role & ClusterRole</h2>

<pre><code class="language-text"># Namespace 內的權限（Role）
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: dev
  name: pod-reader
rules:
- apiGroups: [""]         # core API group
  resources: ["pods"]
  verbs: ["get", "list", "watch"]

---
# 叢集層級的權限（ClusterRole）
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-reader
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "list", "watch"]
- apiGroups: [""]
  resources: ["persistentvolumes"]
  verbs: ["get", "list"]</code></pre>

<h2 id="rolebinding">3. RoleBinding & ClusterRoleBinding</h2>

<pre><code class="language-text"># 將 User 綁定到 Role
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: dev
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io

---
# 將 SA 綁定到 ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-nodes-global
subjects:
- kind: ServiceAccount
  name: monitoring-sa
  namespace: monitoring
roleRef:
  kind: ClusterRole
  name: node-reader
  apiGroup: rbac.authorization.k8s.io</code></pre>

<blockquote><p><strong>考試重點：</strong><code>kubectl auth can-i</code> 是 RBAC 除錯的利器。<code>kubectl auth can-i get pods --as jane -n dev</code> 可以檢查特定使用者的權限。</p></blockquote>

<h2 id="serviceaccount">4. ServiceAccount</h2>

<pre><code class="language-text"># 建立 SA
kubectl create serviceaccount monitoring-sa -n monitoring

# 確認 SA token（v1.24+ 使用 TokenRequest API）
kubectl create token monitoring-sa -n monitoring

# 在 Pod 中指定 SA
apiVersion: v1
kind: Pod
metadata:
  name: monitor-pod
spec:
  serviceAccountName: monitoring-sa
  containers:
  - name: app
    image: monitor:latest</code></pre>

<h2 id="debug-rbac">5. RBAC 除錯</h2>

<pre><code class="language-text"># 權限檢查
kubectl auth can-i create deployments --as jane -n dev
kubectl auth can-i delete nodes --as system:serviceaccount:monitoring:monitoring-sa

# 列出所有權限
kubectl auth can-i --list --as jane -n dev

# 檢查 RBAC 資源
kubectl get roles,rolebindings -n dev
kubectl get clusterroles,clusterrolebindings | grep node-reader
kubectl describe rolebinding read-pods -n dev</code></pre>

<h2 id="cheatsheet">6. 速查表</h2>

<table>
<thead><tr><th>任務</th><th>指令</th></tr></thead>
<tbody>
<tr><td>建立 Role</td><td><code>kubectl create role NAME --verb=get,list --resource=pods -n NS</code></td></tr>
<tr><td>建立 RoleBinding</td><td><code>kubectl create rolebinding NAME --role=ROLE --user=USER -n NS</code></td></tr>
<tr><td>建立 ClusterRole</td><td><code>kubectl create clusterrole NAME --verb=get,list --resource=nodes</code></td></tr>
<tr><td>權限檢查</td><td><code>kubectl auth can-i VERB RESOURCE --as USER -n NS</code></td></tr>
<tr><td>建立 SA</td><td><code>kubectl create sa NAME -n NS</code></td></tr>
</tbody>
</table>

<h2 id="practice">7. 練習題</h2>

<p><strong>Q1：</strong>使用者 john 可以在 dev namespace 中建立 Pod，但在 default namespace 中不行。使用了哪種 RBAC 資源組合？</p>
<ul>
<li>A) ClusterRole + ClusterRoleBinding</li>
<li>B) Role（dev ns 內）+ RoleBinding（dev ns 內） ✓</li>
<li>C) ClusterRole + RoleBinding（dev ns 內）</li>
<li>D) Role（default ns 內）+ RoleBinding</li>
</ul>
<p><em>解析：限定特定 Namespace 的權限使用 Role 和 RoleBinding。選項 C 技術上也正確，但 B 是最直接的答案。使用 RoleBinding 綁定 ClusterRole 時，ClusterRole 的權限僅在該 Namespace 內生效。</em></p>

<p><strong>Q2：</strong>kubectl auth can-i delete pods --as system:serviceaccount:app:mysa -n app 結果為 "no"，需要授予什麼權限？</p>
<ul>
<li>A) 在 app Namespace 建立 Pod delete 的 Role 和 RoleBinding，綁定 ServiceAccount mysa ✓</li>
<li>B) 在 kube-system Namespace 授予 admin 的 cluster-admin 權限</li>
<li>C) 刪除並重新建立 ServiceAccount</li>
<li>D) 重新啟動 kubelet</li>
</ul>
<p><em>解析：要授予 ServiceAccount Pod 刪除權限，需建立 verb: delete 的 Role 並用 RoleBinding 綁定 SA。指令：kubectl create role pod-deleter --verb=delete --resource=pods -n app，kubectl create rolebinding pod-deleter-binding --role=pod-deleter --serviceaccount=app:mysa -n app。</em></p>

<p><strong>Q3：</strong>ClusterRoleBinding 和 RoleBinding 的差異是什麼？</p>
<ul>
<li>A) 只有 ClusterRoleBinding 支援 ServiceAccount</li>
<li>B) ClusterRoleBinding 在整個叢集生效，RoleBinding 只在特定 Namespace 內生效 ✓</li>
<li>C) RoleBinding 無法參照 ClusterRole</li>
<li>D) ClusterRoleBinding 可以參照 Role</li>
</ul>
<p><em>解析：ClusterRoleBinding 是叢集範圍，RoleBinding 是 Namespace 範圍。RoleBinding 可以參照 ClusterRole（此時 ClusterRole 的權限會限定在該 Namespace 內）。</em></p>
