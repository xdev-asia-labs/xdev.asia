---
id: 019d8b30-b219-7001-c002-e0c5f8200119
title: 'Lesson 19: Vault Agent and Vault Proxy'
slug: bai-19-vault-agent-va-vault-proxy
description: Vault Agent overview, Auto-auth, Template rendering, File sink, Agent caching, Vault Proxy, API proxy mode. Compare Agent vs Proxy, deployment patterns.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 5: Vault Agent, Proxy and Kubernetes Integration'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 19: Vault Agent and Vault Proxy</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Vault Agent, Proxy and Kubernetes Integration</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-agent-overview"><strong>1. Vault Agent Overview</strong></h2>

<p><strong>Vault Agent</strong> is a daemon client that runs alongside the application, automatically handling authentication, token renewal, and secret retrieval. Agent solves the "Secret Zero" problem — applications do not need to know how to authenticate with Vault.</p>

<h3 id="chuc-nang-agent"><strong>Main function</strong></h3>

<ul>
<li><p><strong>Auto-auth</strong> — automatically authenticate and renew tokens</p></li>
<li><p><strong>Template rendering</strong> — render secrets into config files</p></li>
<li><p><strong>Caching</strong> — cache responses to reduce load on Vault server</p></li>
<li><p><strong>API Proxy</strong> — application calls Agent instead of calling Vault directly</p></li>
</ul>

<h3 id="kien-truc-agent"><strong>Architecture</strong></h3>

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

<p>Auto-auth automatically authenticates with Vault and renews tokens. Supports all auth methods:</p>

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

<h3 id="auto-auth-approle"><strong>Auto-auth with AppRole</strong></h3>

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

<h3 id="auto-auth-aws"><strong>Auto-auth with AWS IAM</strong></h3>

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

<p>Vault Agent uses <strong>Consul Template syntax</strong> to render secrets into config files. Templates automatically re-render when secrets change.</p>

<h3 id="cau-hinh-template"><strong>Template Configuration</strong></h3>

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

<p>Applications calls Agent (localhost:8100) instead of calling the Vault server directly. Agent cache responses and automatically handle authentication.</p>

<h2 id="5-vault-proxy"><strong>5. Vault Proxy</strong></h2>

<p><strong>Vault Proxy</strong> (Vault 1.14+) is a simplified version of Vault Agent, focusing on <strong>API proxying and caching</strong> without template rendering.</p>

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

<h2 id="6-agent-vs-proxy"><strong>6. Agent vs Proxy — When to use which?</strong></h2>

<table>
<thead>
<tr><th>Feature</th><th>Vault Agent</th><th>Vault Proxy</th></tr>
</thead>
<tbody>
<tr><td>Auto-auth</td><td>✅</td><td>✅</td></tr>
<tr><td>Template rendering</td><td>✅</td><td>❌</td></tr>
<tr><td>API Proxy</td><td>✅</td><td>✅</td></tr>
<tr><td>Caching</td><td>✅</td><td>✅</td></tr>
<tr><td>Process Supervisor</td><td>✅</td><td>❌</td></tr>
<tr><td>Footprint</td><td>Larger</td><td>Smaller</td></tr>
<tr><td>Use case</td><td>Need to render files</td><td>Just need proxy API</td></tr>
</tbody>
</table>

<ul>
<li><p><strong>Agent</strong>: When application reads secrets from files (config files, env files)</p></li>
<li><p><strong>Proxy</strong>: When application calls Vault API directly, caching and auto-auth are needed</p></li>
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

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<ul>
<li><p><strong>Vault Agent</strong> — full-featured daemon: auto-auth, templates, caching, API proxy</p></li>
<li><p><strong>Vault Proxy</strong> — lightweight proxy: auto-auth, caching, API proxy (no templates)</p></li>
<li><p><strong>Auto-auth</strong> — automatically authenticates and renews tokens, resolves Secret Zero</p></li>
<li><p><strong>Templates</strong> — render secrets into config files, auto re-render when secrets change</p></li>
<li><p><strong>Deployment patterns</strong> — systemd, Docker sidecar, K8s init/sidecar container</p></li>
</ul>

<p>The next article will dive into Vault on Kubernetes — Helm chart, Vault Secrets Operator, CSI Provider and Agent Injector.</p>
