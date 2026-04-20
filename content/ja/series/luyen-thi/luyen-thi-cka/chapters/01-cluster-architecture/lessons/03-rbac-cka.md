---
id: cka-d1-l03
title: 'レッスン3: RBAC & 認可'
slug: 03-rbac-cka
description: >-
  Role/ClusterRole、RoleBinding/ClusterRoleBinding。ServiceAccount。
  CKA試験での権限管理とRBACデバッグ。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 3
section_title: "ドメイン1: Cluster Architecture, Installation & Configuration (25%)"
course:
  id: lt-cka-series-001
  title: 'CKA認定試験対策 — Certified Kubernetes Administrator'
  slug: luyen-thi-cka
---

<img src="/storage/uploads/2026/04/k8s-cert-cka-bai3-rbac.png" alt="RBACモデル — Role、ClusterRole、RoleBinding、ClusterRoleBinding" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="rbac-model">1. RBACモデル</h2>

<pre><code class="language-text">RBACの4つのリソース:

NamespaceスコープRBAC:
  Role ──────────► 特定Namespaceの権限を定義
  RoleBinding ──► UserまたはSAをRoleにバインド

クラスタスコープRBAC:
  ClusterRole ────► クラスタ全体の権限を定義
  ClusterRoleBinding ► UserまたはSAをClusterRoleにバインド</code></pre>

<h2 id="role">2. Role & ClusterRole</h2>

<pre><code class="language-text"># Namespace内の権限（Role）
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
# クラスタ全体の権限（ClusterRole）
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

<pre><code class="language-text"># UserをRoleにバインド
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
# SAをClusterRoleにバインド
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

<blockquote><p><strong>試験のポイント：</strong><code>kubectl auth can-i</code>はRBACデバッグの強力なツールです。<code>kubectl auth can-i get pods --as jane -n dev</code>で特定ユーザーの権限を確認できます。</p></blockquote>

<h2 id="serviceaccount">4. ServiceAccount</h2>

<pre><code class="language-text"># SAの作成
kubectl create serviceaccount monitoring-sa -n monitoring

# SAトークンの確認（v1.24+ではTokenRequest APIを使用）
kubectl create token monitoring-sa -n monitoring

# PodにSAを指定
apiVersion: v1
kind: Pod
metadata:
  name: monitor-pod
spec:
  serviceAccountName: monitoring-sa
  containers:
  - name: app
    image: monitor:latest</code></pre>

<h2 id="debug-rbac">5. RBACデバッグ</h2>

<pre><code class="language-text"># 権限チェック
kubectl auth can-i create deployments --as jane -n dev
kubectl auth can-i delete nodes --as system:serviceaccount:monitoring:monitoring-sa

# 全権限の確認
kubectl auth can-i --list --as jane -n dev

# RBACリソースの確認
kubectl get roles,rolebindings -n dev
kubectl get clusterroles,clusterrolebindings | grep node-reader
kubectl describe rolebinding read-pods -n dev</code></pre>

<h2 id="cheatsheet">6. チートシート</h2>

<table>
<thead><tr><th>タスク</th><th>コマンド</th></tr></thead>
<tbody>
<tr><td>Role作成</td><td><code>kubectl create role NAME --verb=get,list --resource=pods -n NS</code></td></tr>
<tr><td>RoleBinding作成</td><td><code>kubectl create rolebinding NAME --role=ROLE --user=USER -n NS</code></td></tr>
<tr><td>ClusterRole作成</td><td><code>kubectl create clusterrole NAME --verb=get,list --resource=nodes</code></td></tr>
<tr><td>権限チェック</td><td><code>kubectl auth can-i VERB RESOURCE --as USER -n NS</code></td></tr>
<tr><td>SA作成</td><td><code>kubectl create sa NAME -n NS</code></td></tr>
</tbody>
</table>

<h2 id="practice">7. 練習問題</h2>

<p><strong>Q1：</strong>ユーザーjohnがdev namespaceでPodの作成はできるが、default namespaceではできない場合、どのRBACリソースの組み合わせが使われていますか？</p>
<ul>
<li>A) ClusterRole + ClusterRoleBinding</li>
<li>B) Role（dev ns内）+ RoleBinding（dev ns内） ✓</li>
<li>C) ClusterRole + RoleBinding（dev ns内）</li>
<li>D) Role（default ns内）+ RoleBinding</li>
</ul>
<p><em>解説：特定のNamespaceに限定した権限にはRoleとRoleBindingを使用します。選択肢Cも技術的に正しいですが、Bが最も直接的な回答です。ClusterRoleをRoleBindingで使用すると、そのNamespace内でのみClusterRoleの権限が適用されます。</em></p>

<p><strong>Q2：</strong>kubectl auth can-i delete pods --as system:serviceaccount:app:mysa -n appの結果が"no"の場合、どのような権限を付与する必要がありますか？</p>
<ul>
<li>A) app NamespaceにPod deleteのRoleとRoleBindingを作成し、ServiceAccount mysaにバインド ✓</li>
<li>B) kube-system Namespaceでadminのcluster-admin権限を付与</li>
<li>C) ServiceAccountを削除して再作成</li>
<li>D) kubeletを再起動</li>
</ul>
<p><em>解説：ServiceAccountにPod削除権限を付与するには、verb: deleteのRoleを作成し、RoleBindingでSAにバインドします。kubectl create role pod-deleter --verb=delete --resource=pods -n app、kubectl create rolebinding pod-deleter-binding --role=pod-deleter --serviceaccount=app:mysa -n appで実行できます。</em></p>

<p><strong>Q3：</strong>ClusterRoleBindingとRoleBindingの違いは？</p>
<ul>
<li>A) ClusterRoleBindingのみがServiceAccountをサポートする</li>
<li>B) ClusterRoleBindingはクラスタ全体で有効、RoleBindingは特定のNamespace内でのみ有効 ✓</li>
<li>C) RoleBindingはClusterRoleを参照できない</li>
<li>D) ClusterRoleBindingはRoleを参照できる</li>
</ul>
<p><em>解説：ClusterRoleBindingはクラスタ全体のスコープ、RoleBindingはNamespaceスコープです。RoleBindingはClusterRoleを参照できます（その場合、ClusterRoleの権限はそのNamespace内に限定されます）。</em></p>
