---
id: 019d8b30-b219-7001-c002-e0c5f8200119
title: 'レッスン 19: Vault Agent と Vault Proxy'
slug: bai-19-vault-agent-va-vault-proxy
description: Vault Agent の概要、自動認証、テンプレート レンダリング、ファイル シンク、エージェント キャッシュ、Vault プロキシ、API プロキシ モード。エージェントとプロキシ、展開パターンを比較します。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 5: Vault Agent、プロキシ、および Kubernetes の統合'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1558" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1558)"/>

  <!-- Decorations -->
  <g>
    <circle cx="818" cy="264" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1036" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="754" cy="160" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="972" cy="238" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="64" x2="1100" y2="144" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="94" x2="1050" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.7749907475932,144.5 997.7749907475932,183.5 964,203 930.2250092524068,183.5 930.2250092524068,144.5 964,125" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 D​​evSecOps — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 19: Vault Agent と Vault Proxy</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Vault Agent, Proxy và Kubernetes Integration</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-agent-overview"><strong>1. Vault Agent Overview</strong></h2>

<p><strong>Vault Agent</strong> は、アプリケーションと並行して実行されるデーモン クライアントで、認証、トークンの更新、およびシークレットの取得を自動的に処理します。エージェントは「シークレット ゼロ」問題を解決します。アプリケーションは Vault で認証する方法を知る必要がありません。</p>

<h3 id="chuc-nang-agent"><strong>メイン関数</strong></h3>

<ul>
<li><p><strong>Auto-auth</strong> — トークンを自動的に認証および更新</p></li>
<li><p><strong>テンプレートのレンダリング</strong> — シークレットを構成ファイルにレンダリング</p></li>
<li><p><strong>Caching</strong> — Vault サーバーの負荷を軽減するために応答をキャッシュします</p></li>
<li><p><strong>API Proxy</strong> — アプリケーションは Vault を直接呼び出す代わりにエージェントを呼び出します</p></li>
</ul>

<h3 id="kien-truc-agent"><strong>アーキテクチャ</strong></h3>

<pre><code>┌─────────────────────────────────────────────────┐
│                  Application Host               │
│                                                 │
│  ┌──────────┐                ┌───────────────┐ │
│  │   App    │  Read files    │  Vault Agent  │ │
│  │          │ ◀──────────── │               │ │
│  │          │  (rendered     │  Auto-auth    │ │
│  │          │   templates)   │  Templates    │ │
│  │          │                │  Caching      │ │
│  └──────────┘                └───────┬───────┘ │
│                                      │         │
└──────────────────────────────────────┼─────────┘
                                       │
                              Vault API (HTTPS)
                                       │
                                       ▼
                               ┌──────────────┐
                               │ Vault Server │
                               └──────────────┘
</code></pre>

<h2 id="2-auto-auth"><strong>2. Auto-auth</strong></h2>

<p>Auto-auth は、Vault で自動的に認証し、トークンを更新します。 Supports all auth methods:</p>

<pre><code class="language-hcl"># vault-agent.hcl

vault {
  address = "https://vault.company.com:8200"
  tls_skip_verify = false
}

auto_auth {
  method "kubernetes" {
    mount_path = "auth/kubernetes"
    config = {
      role = "webapp"
    }
  }

  # Lưu token vào file
  sink "file" {
    config = {
      path = "/tmp/vault-token"
      mode = 0640
    }
  }

  # Lưu token vào file khác (wrapped)
  sink "file" {
    wrap_ttl = "5m"
    config = {
      path = "/tmp/vault-token-wrapped"
    }
  }
}
</code></pre>

<h3 id="auto-auth-approle"><strong>AppRole による自動認証</strong></h3>

<pre><code class="language-hcl">auto_auth {
  method "approle" {
    mount_path = "auth/approle"
    config = {
      role_id_file_path   = "/etc/vault/role-id"
      secret_id_file_path = "/etc/vault/secret-id"
      remove_secret_id_file_after_reading = true
    }
  }

  sink "file" {
    config = {
      path = "/tmp/vault-token"
    }
  }
}
</code></pre>

<h3 id="auto-auth-aws"><strong>AWS IAM による自動認証</strong></h3>

<pre><code class="language-hcl">auto_auth {
  method "aws" {
    mount_path = "auth/aws"
    config = {
      type = "iam"
      role = "webapp"
      header_value = "vault.company.com"
    }
  }

  sink "file" {
    config = {
      path = "/tmp/vault-token"
    }
  }
}
</code></pre>

<h2 id="3-template-rendering"><strong>3. Template Rendering</strong></h2>

<p>Vault Agent は、<strong>Consul テンプレート構文</strong> を使用して、シークレットを構成ファイルにレンダリングします。シークレットが変更されると、テンプレートは自動的に再レン​​ダリングされます。</p>

<h3 id="cau-hinh-template"><strong>テンプレート構成</strong></h3>

<pre><code class="language-hcl"># vault-agent.hcl (tiếp)

template {
  source      = "/etc/vault/templates/app.conf.tpl"
  destination = "/etc/app/app.conf"
  perms       = 0640
  command     = "systemctl reload app"  # Chạy sau khi render
  error_on_missing_key = true
}

template {
  source      = "/etc/vault/templates/db.env.tpl"
  destination = "/etc/app/db.env"
  perms       = 0600
}

# Inline template (không cần file tpl)
template {
  contents    = "{{ with secret \"secret/data/app/config\" }}DB_HOST={{ .Data.data.host }}{{ end }}"
  destination = "/etc/app/db-host"
}
</code></pre>

<h3 id="template-syntax"><strong>Template Syntax</strong></h3>

<pre><code class="language-text"># /etc/vault/templates/app.conf.tpl

# KV v2 secret
{{ with secret "secret/data/production/db" }}
DB_HOST={{ .Data.data.host }}
DB_PORT={{ .Data.data.port }}
DB_NAME={{ .Data.data.database }}
DB_USER={{ .Data.data.username }}
DB_PASS={{ .Data.data.password }}
{{ end }}

# Dynamic database credentials
{{ with secret "database/creds/app-role" }}
DB_DYNAMIC_USER={{ .Data.username }}
DB_DYNAMIC_PASS={{ .Data.password }}
# Lease: {{ .LeaseID }} ({{ .LeaseDuration }}s)
{{ end }}

# PKI certificate
{{ with secret "pki/issue/app-cert" "common_name=app.company.com" "ttl=24h" }}
{{ .Data.certificate }}
{{ .Data.private_key }}
{{ end }}

# Conditional
{{ with secret "secret/data/production/feature-flags" }}
{{ if .Data.data.enable_cache }}
CACHE_ENABLED=true
CACHE_TTL={{ .Data.data.cache_ttl }}
{{ else }}
CACHE_ENABLED=false
{{ end }}
{{ end }}
</code></pre>

<h3 id="env-template"><strong>Environment Variable Template</strong></h3>

<pre><code class="language-text"># /etc/vault/templates/db.env.tpl
{{ with secret "secret/data/production/db" -}}
export DB_HOST="{{ .Data.data.host }}"
export DB_PORT="{{ .Data.data.port }}"
export DB_USER="{{ .Data.data.username }}"
export DB_PASS="{{ .Data.data.password }}"
{{- end }}
</code></pre>

<h2 id="4-agent-caching"><strong>4. Agent Caching</strong></h2>

<pre><code class="language-hcl"># Caching configuration
cache {
  use_auto_auth_token = true

  persist {
    type = "kubernetes"
    path = "/vault/agent-cache"
  }
}

listener "tcp" {
  address     = "127.0.0.1:8100"
  tls_disable = true
}
</code></pre>

<p>Applications は、Vault サーバーを直接呼び出すのではなく、エージェント (localhost:8100) を呼び出します。エージェントは応答をキャッシュし、認証を自動的に処理します。</p>

<h2 id="5-vault-proxy"><strong>5. Vault Proxy</strong></h2>

<p><strong>Vault Proxy</strong> (Vault 1.14+) は、テンプレートのレンダリングを行わない <strong>API プロキシとキャッシング</strong> に焦点を当てた、Vault Agent の簡素化されたバージョンです。</p>

<pre><code class="language-hcl"># vault-proxy.hcl

vault {
  address = "https://vault.company.com:8200"
}

auto_auth {
  method "kubernetes" {
    mount_path = "auth/kubernetes"
    config = {
      role = "webapp"
    }
  }
}

api_proxy {
  use_auto_auth_token = "force"
}

cache {
  use_auto_auth_token = true

  persist {
    type = "kubernetes"
    path = "/vault/proxy-cache"
  }
}

listener "tcp" {
  address     = "127.0.0.1:8100"
  tls_disable = true
}
</code></pre>

<h3 id="static-secret-caching"><strong>Static Secret Caching</strong></h3>

<pre><code class="language-hcl"># Cache static secrets (KV v2)
cache {
  use_auto_auth_token = true

  persist {
    type = "kubernetes"
    path = "/vault/proxy-cache"
  }

  # Static secret caching (mới)
  static_secret_token_wait = "5s"
}
</code></pre>

<h2 id="6-agent-vs-proxy"><strong>6。エージェントとプロキシ — いつどちらを使用するか?</strong></h2>

<table>
<thead>
<tr><th>Tính năng</th><th>Vault Agent</th><th>Vault Proxy</th></tr>
</thead>
<tbody>
<tr><td>Auto-auth</td><td>✅</td><td>✅</td></tr>
<tr><td>Template rendering</td><td>✅</td><td>❌</td></tr>
<tr><td>API Proxy</td><td>✅</td><td>✅</td></tr>
<tr><td>Caching</td><td>✅</td><td>✅</td></tr>
<tr><td>Process Supervisor</td><td>✅</td><td>❌</td></tr>
<tr><td>フットプリント</td><td>大きい</td><td>小さい</td></tr>
<tr><td>ユースケース</td><td>ファイルをレンダリングする必要がある</td><td>プロキシ API のみが必要</td></tr>
</tbody>
</table>

<ul>
<li><p><strong>Agent</strong>: アプリケーションがファイル (構成ファイル、環境ファイル) からシークレットを読み取るとき</p></li>
<li><p><strong>Proxy</strong>: アプリケーションが Vault API を直接呼び出す場合、キャッシュと自動認証が必要です</p></li>
</ul>

<h2 id="7-deployment-patterns"><strong>7. Deployment Patterns</strong></h2>

<h3 id="systemd"><strong>Systemd Service</strong></h3>

<pre><code class="language-ini"># /etc/systemd/system/vault-agent.service
[Unit]
Description=Vault Agent
Requires=network-online.target
After=network-online.target

[Service]
User=vault
Group=vault
ExecStart=/usr/bin/vault agent -config=/etc/vault/agent.hcl
ExecReload=/bin/kill -HUP $MAINPID
KillSignal=SIGTERM
Restart=on-failure
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
</code></pre>

<h3 id="docker-sidecar"><strong>Docker Sidecar</strong></h3>

<pre><code class="language-yaml"># docker-compose.yml
services:
  vault-agent:
    image: hashicorp/vault:1.21
    command: vault agent -config=/vault/config/agent.hcl
    volumes:
      - ./agent.hcl:/vault/config/agent.hcl:ro
      - ./templates:/vault/templates:ro
      - shared-secrets:/vault/secrets
    restart: unless-stopped

  webapp:
    image: myapp:latest
    volumes:
      - shared-secrets:/etc/app/secrets:ro
    depends_on:
      - vault-agent

volumes:
  shared-secrets:
</code></pre>

<h3 id="k8s-init-container"><strong>Kubernetes Init Container</strong></h3>

<pre><code class="language-yaml">apiVersion: v1
kind: Pod
metadata:
  name: webapp
spec:
  initContainers:
    - name: vault-agent-init
      image: hashicorp/vault:1.21
      command: ["vault", "agent", "-config=/vault/config/agent.hcl", "-exit-after-auth"]
      volumeMounts:
        - name: vault-config
          mountPath: /vault/config
        - name: vault-secrets
          mountPath: /vault/secrets
  containers:
    - name: webapp
      image: myapp:latest
      volumeMounts:
        - name: vault-secrets
          mountPath: /etc/app/secrets
          readOnly: true
  volumes:
    - name: vault-config
      configMap:
        name: vault-agent-config
    - name: vault-secrets
      emptyDir:
        medium: Memory
</code></pre>

<h2 id="8-tong-ket"><strong>8。概要</strong></h2>

<ul>
<li><p><strong>Vault Agent</strong> — full-featured daemon: auto-auth, templates, caching, API proxy</p></li>
<li><p><strong>Vault Proxy</strong> — lightweight proxy: auto-auth, caching, API proxy (no templates)</p></li>
<li><p><strong>Auto-auth</strong> — トークンを自動的に認証および更新し、Secret Zero</p></li> を解決します。
<li><p><strong>Templates</strong> — シークレットを設定ファイルにレンダリングし、シークレットが変更されると自動的に再レン​​ダリング</p></li>
<li><p><strong>Deployment patterns</strong> — systemd, Docker sidecar, K8s init/sidecar container</p></li>
</ul>

<p>次の記事では、Kubernetes 上の Vault — Helm チャート、Vault Secrets Operator、CSI Provider、Agent Injector について詳しく説明します。</p>
