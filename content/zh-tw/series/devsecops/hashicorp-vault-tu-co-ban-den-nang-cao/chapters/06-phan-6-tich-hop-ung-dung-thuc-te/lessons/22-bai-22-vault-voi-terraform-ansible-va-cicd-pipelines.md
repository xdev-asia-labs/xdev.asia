---
id: 019d8b30-b222-7001-c002-e0c5f8200122
title: 第 22 課：帶有 Terraform、Ansible 和 CI/CD 管道的 Vault
slug: bai-22-vault-voi-terraform-ansible-va-cicd-pipelines
description: >-
  Terraform Vault Provider、Ansible Vault 查找、CI/CD 整合、GitHub Actions OIDC、GitLab
  CI JWT、Jenkins、ArgoCD Vault 外掛程式、外部 Secrets Operator。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 22
section_title: 第六部分：整合實際應用
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-9593" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-9593）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="899" cy="167" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="698" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="997" cy="85" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="796" cy="44" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="263" r="20" fill="#818cf8" opacity="0.1"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#818cf8”不透明度=“0.15”/>
    <line x1 =“600”y1 =“77”x2 =“1100”y2 =“157”筆畫=“#818cf8”筆觸寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“107”x2 =“1050”y2 =“177”筆畫=“#818cf8”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1004.712812921102,161 1004.712812921102,193 977,209 949.287187078898,193 949.2871870178 977,145”填滿=“無”描邊=“#818cf8”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#818cf8”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#818cf8”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 22 課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 22 課：使用 Terraform、Ansible 與 Vault</tspan>
      <tspan x="60" dy="42">CI/CD 管道</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：整合實際應用</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-terraform-vault-provider"><strong>1. Terraform Vault 供應商</strong></h2>

<p><strong>Terraform Vault Provider</strong> 支援 Vault 即程式碼配置管理 - 秘密引擎、驗證方法、策略、實體、群組，所有這些都在 Git 中進行版本控制。 </p>

<h3 id="cau-hinh-provider"><strong>提供者配置</strong></h3>

<pre><code class="language-hcl">#providers.tf
terraform {
  必要的提供者{
    vault = {
      來源=“hashicorp/Vault”
      版本=“~>4.0”
    }
  }
}

提供者「金庫」{
  位址 = "https://vault.company.com:8200"
  # 驗證 VAULT_TOKEN 環境變數 hoặc:
  # auth_login {
  # 路徑 = "auth/approle/login"
  # 參數 = {
  # role_id = var.vault_role_id
  # Secret_id = var.vault_secret_id
  # }
  # }
}
</code></pre>

<h3 id="quan-ly-secrets-engines"><strong>管理秘密引擎</strong></h3>

<pre><code class="language-hcl">#secrets-engines.tf

# KV v2
資源“vault_mount”“kv”{
  路徑=“秘密”
  類型=“kv-v2”
  描述 =“KV v2 秘密引擎”
  選項={
    版本=“2”
    最大版本 = 10
  }
}

# 資料庫秘密引擎
資源“vault_mount”“資料庫”{
  路徑=“資料庫”
  類型=“資料庫”
}

資源“vault_database_secret_backend_connection”“postgres”{
  後端 =Vault_mount.database.path
  名稱 =“生產-postgres”
  allowed_roles = [“應用程式角色”，“唯讀角色”]

  PostgreSQL {
    connection_url = "postgresql://{{使用者名稱}}:{{密碼}}@db.company.com:5432/生產"
    使用者名稱 = var.db_admin_user
    密碼 = var.db_admin_password
  }
}資源“vault_database_secret_backend_role”“app_role”{
  後端 =Vault_mount.database.path
  名稱 =“應用程式角色”
  db_name =Vault_database_secret_backend_connection.postgres.name
  預設存活時間 = 3600
  最大存活時間 = 14400
  創建語句 = [
    "建立角色 \"{{name}}\"，登入密碼為 '{{password}}'，有效期限為 '{{expiration}}'；",
    "將 SCHEMA public 中所有表格的選擇、插入、更新、刪除授予 \"{{name}}\";",
  ]
  撤銷語句 = [
    "從\"{{name}}\"撤銷公用架構中所有資料表的所有權限；"，
    "如果存在則刪除角色 \"{{name}}\";",
  ]
}

# 公鑰基礎設施
資源“vault_mount”“pki”{
  路徑=“pki”
  類型=“pki”
  max_lease_ttl_seconds = 315360000 # 10 年
}

資源「vault_pki_secret_backend_root_cert」「根」{
  後端=Vault_mount.pki.path
  類型=“內部”
  common_name = "公司根 CA"
  ttl =“315360000”
}
</code></pre>

<h3 id="quan-ly-auth-methods"><strong>管理驗證方法</strong></h3>

<pre><code class="language-hcl"># auth.tf

# Kubernetes 驗證
資源「vault_auth_backend」「kubernetes」{
  類型=“kubernetes”
  路徑=“kubernetes”
}

資源“vault_kubernetes_auth_backend_config”“配置”{
  後端=Vault_auth_backend.kubernetes.path
  kubernetes_host = “https://kubernetes.default.svc:443"
}

資源“vault_kubernetes_auth_backend_role”“webapp”{
  後端=Vault_auth_backend.kubernetes.path
  角色名稱=“網頁應用程式”
  bound_service_account_names = [“webapp-sa”]
  bound_service_account_namespaces = [「生產」]
  token_policies = ["webapp-policy"]
  令牌_TTL = 3600
}

# 應用角色
資源「vault_auth_backend」「approle」{
  類型=“approle”
}

資源“vault_approle_auth_backend_role”“cicd”{
  後端=Vault_auth_backend.approle.path
  role_name = "cicd-管道"
  token_policies = ["cicd-deploy"]
  令牌_TTL = 1800
  秘密 ID TTL = 600
  Secret_id_num_uses = 1
}
</code></pre>

<h3 id="quan-ly-policies"><strong>政策管理</strong></h3>

<pre><code class="language-hcl">#policy.tf

資源“vault_policy”“webapp”{
  名稱 =“webapp-policy”
  政策 = 文件（“政策/webapp.hcl”）
}

資源“vault_policy”“cicd”{
  名稱 =“cicd-部署”
  政策=<<EOT
路徑“秘密/數據/生產/*”{
  能力= [“讀”]
}
路徑“資料庫/信用/應用程式角色”{
  能力= [“讀”]
}
環氧乙烷
}
</code></pre>

<h3 id="doc-secrets-tu-vault"><strong>從 Terraform 中的 Vault 讀取機密</strong></h3>

<pre><code class="language-hcl"># 是 Terraform 資源的秘密
資料“vault_kv_secret_v2”“db_creds”{
  掛載=“秘密”
  名稱 =“生產/資料庫”
}

資源“aws_db_instance”“生產”{
  引擎=“postgres”
  使用者名稱 = data.vault_kv_secret_v2.db_creds.data["使用者名稱"]
  密碼 = data.vault_kv_secret_v2.db_creds.data["密碼"]
  # ...其他配置
}
</code></pre>

<h2 id="2-ansible-vault-integration"><strong>2. Ansible 與 Vault</strong></h2>

<h3 id="ansible-lookup-plugin"><strong>找外掛</strong></h3><pre><code class="language-yaml"># playbook.yml
- 名稱：部署應用程式
  主機：網頁伺服器
  變數：
    db_password: "{{ Lookup('hashi_vault', '秘密/資料/生產/db:密碼') }}"
    api_key: "{{ Lookup('hashi_vault', '秘密/資料/生產/api:key') }}"

  任務：
    - 名稱：配置應用程式
      模板：
        原始碼：app.conf.j2
        目標：/etc/app/app.conf
        模式：'0640'
      變數：
        db_host：“{{查找（'hashi_vault'，'秘密/資料/生產/db：主機'）}}”

    - name：取得動態資料庫憑證
      設定事實：
        db_creds: "{{ Lookup('hashi_vault', '資料庫/creds/deploy-role') }}"

    - 名稱：執行資料庫遷移
      命令：./migrate.sh
      環境：
        DB_USER：“{{db_creds.用戶名}}”
        DB_PASS：“{{ db_creds.password }}”
</code></pre>

<h3 id="ansible-modules"><strong>Ansible 集合</strong></h3>

<pre><code class="language-bash"># 安裝集合
ansible-galaxy collection install community.hashi_vault
</code></pre>

<pre><code class="language-yaml">- name: 讀取 KV 秘密
  Community.hashi_vault.vault_kv2_get：
    網址：https://vault.company.com:8200
    引擎安裝點：秘密
    路徑：生產/資料庫
    auth_method：approle
    角色_id：“{{Vault_role_id}}”
    秘密_id：“{{vault_secret_id}}”
  報名：db_secret

- 名稱：寫入KV秘密
  Community.hashi_vault.vault_kv2_write：
    網址：https://vault.company.com:8200
    引擎安裝點：秘密
    路徑：生產/應用程式/部署訊息
    數據：
      版本：“{{ app_version }}”
      部署者：“{{ ansible_user_id }}”
      部署於：“{{ ansible_date_time.iso8601 }}”
</code></pre>

<h2 id="3-cicd-integration"><strong>3. CI/CD 整合</strong></h2>

<h3 id="github-actions-oidc"><strong>GitHub 操作（OIDC — 建議）</strong></h3>

<pre><code class="language-yaml"># .github/workflows/deploy.yml
名稱：部署
於：
  推：
    分支：[主要]

權限：
  id 令牌：寫入
  內容： 閱讀

職位：
  部署：
    運行：ubuntu-latest
    步驟：
      - 使用：actions/checkout@v4

      - 姓名：從 Vault 取得秘密
        使用：hashicorp/vault-action@v3
        與：
          網址：https://vault.company.com:8200
          方法：jwt
          路徑：github-actions
          角色：我的應用程式
          jwtGithubAudience：https://github.com/my-org
          導出環境：true
          秘密： |
            秘密/資料/生產/資料庫使用者名稱|資料庫使用者；
            秘密/資料/生產/資料庫密碼 |資料庫通行證；
            秘密/資料/生產/註冊令牌 | REGISTRY_TOKEN

      - 名稱：建置與推播
        運行： |
          迴聲“$REGISTRY_TOKEN”| docker login -u _token --password-stdinregistry.company.com
          docker build -t registry.company.com/myapp:${{ github.sha }} .
          docker push registry.company.com/myapp:${{ github.sha }}
</code></pre>

<h3 id="argocd-vault-plugin"><strong>ArgoCD Vault 外掛程式</strong></h3>

<pre><code class="language-yaml"># ArgoCD 應用程式清單
api版本：argoproj.io/v1alpha1
種類： 應用
元數據：
  名稱： 網路應用程式
規格：
  來源：
    倉庫地址：https://github.com/company/webapp
    路徑：k8s
    插件：
      名稱： argocd-vault-plugin
      環境：
        - 名稱：AVP_TYPE
          價值：金庫
        - 名稱：AVP_AUTH_TYPE
          值：k8s
        - 名稱：VAULT_ADDR
          值：https://vault.company.com:8200
        - 名稱：AVP_K8S_ROLE
          值：argocd
</code></pre><pre><code class="language-yaml"># k8s/secret.yaml（範本）
api版本：v1
種類：秘密
元數據：
  名稱：應用程式秘密
  註：
    avp.kubernetes.io/path：“秘密/資料/生產/webapp”
類型: 不透明
字串資料：
  DB_PASSWORD：<密碼>
  API_KEY：<api_key>
</code></pre>

<h3 id="external-secrets-operator"><strong>外部機密操作員</strong></h3>

<pre><code class="language-yaml"># ClusterSecretStore
api版本：external-secrets.io/v1beta1
種類：ClusterSecretStore
元數據：
  名稱：保管庫存儲
規格：
  提供者：
    vault:
      伺服器：「https://vault.company.com:8200"
      路徑：“秘密”
      版本：“v2”
      授權：
        庫伯內特：
          掛載路徑：“kubernetes”
          角色：“外部秘密”
          服務帳號參考：
            名稱：外部秘密-sa

---
# 外部秘密
api版本：external-secrets.io/v1beta1
種類：外部秘密
元數據：
  名稱：應用程式資料庫秘密
  命名空間：生產
規格：
  刷新間隔：1m
  秘密商店參考：
    種類：ClusterSecretStore
    名稱：保管庫存儲
  目標：
    名稱：應用程式資料庫憑證
    建立策略：所有者
  數據：
    - 金鑰：使用者名稱
      遠端參考：
        關鍵：生產/資料庫
        屬性：使用者名稱
    - 密鑰：密碼
      遠端參考：
        關鍵：生產/資料庫
        屬性：密碼
</code></pre>

<h2 id="4-gitops-workflow"><strong>4. Vault trong GitOps 工作流程</strong></h2>

<pre><code>┌────────────┐ 推送配置 ┌────────────┐
│ 開發人員 │ ──────────────▶ │ Git │
│ │ │ （清單 │
└──────────────┘ │ + 秘密 │
                                 │ 佔位符│
                                 └──────┬────────┘
                                        │
                                   ArgoCD / 通量
                                        │
                                        ▼
                                 ┌────────────┐
                                 │ AVP / ESO │
                                 │ （解決 │
                                 │ 秘密） │
                                 └──────┬────────┘
                                        │
                           取得秘密 │
                                        ▼
                                 ┌────────────┐
                                 │ 金庫 │
                                 │ │
                                 └────────────┘
</code></pre>

<h2 id="5-tong-ket"><strong>5。摘要</strong></h2>

<ul>
<li><p><strong>Terraform Vault Provider</strong> - Vault 配置作為程式碼，管理所有 Vault 設定</p></li>
<li><p><strong>Ansible</strong> - 用於操作工作流程的查找外掛程式和集合</p></li>
<li><p><strong>GitHub Actions</strong> — 基於 OIDC（無靜態機密）、vault-action</p></li>
<li><p><strong>ArgoCD Vault 外掛程式</strong> — 解析 GitOps 中的秘密佔位符</p></li>
<li><p><strong>外部 Secrets Operator</strong> - 來自 Vault 的 Kubernetes 原生同步</p></li>
</ul>

<p>最後一部分將進入生產和企業 - HA、整合儲存、複製、命名空間、監控和故障排除。 </p>
