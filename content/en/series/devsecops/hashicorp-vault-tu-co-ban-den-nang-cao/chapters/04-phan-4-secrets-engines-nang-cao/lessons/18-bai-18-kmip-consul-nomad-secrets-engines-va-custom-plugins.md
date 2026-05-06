---
id: 019d8b30-b218-7001-c002-e0c5f8200118
title: 'Lesson 18: KMIP, Consul, Nomad Secrets Engines and Custom Plugins'
slug: bai-18-kmip-consul-nomad-secrets-engines-va-custom-plugins
description: KMIP Secrets Engine, Consul Secrets Engine, Nomad Secrets Engine, Vault Plugin System — architecture, catalog, developing custom plugins using Go.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 'Part 4: Advanced Secrets Engines'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-43" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-43)"/>

  <!-- Decorations -->
  <g>
    <circle cx="894" cy="252" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="688" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="982" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="776" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="112" x2="1100" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="142" x2="1050" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 18: KMIP, Consul, Nomad Secrets</tspan>
<tspan x="60" dy="42">Engines and Custom Plugins</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Secrets Engines</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kmip-secrets-engine"><strong>1. KMIP Secrets Engine (Enterprise)</strong></h2>

<p><strong>KMIP (Key Management Interoperability Protocol)</strong> is the OASIS standard protocol for cryptographic keys management. KMIP Secrets Engine allows Vault to act as a <strong>KMIP Server</strong>, providing key management for KMIP-enabled databases, storage systems, and applications.</p>

<h3 id="use-cases-kmip"><strong>Use Cases</strong></h3>

<ul>
<li><p><strong>MongoDB Enterprise</strong> — encryption at rest with KMIP</p></li>
<li><p><strong>MySQL Enterprise</strong> — TDE (Transparent Data Encryption)</p></li>
<li><p><strong>VMware vSphere</strong> — VM encryption</p></li>
<li><p><strong>NetApp</strong> — storage encryption</p></li>
</ul>

<h3 id="setup-kmip"><strong>Setup KMIP</strong></h3>

<pre><code class="language-bash"># Enable KMIP
vault secrets enable kmip

# Cấu hình KMIP listener
vault write kmip/config \
  listen_addrs="0.0.0.0:5696" \
  tls_ca_key_type="ec" \
  tls_ca_key_bits=256 \
  default_tls_client_key_type="ec" \
  default_tls_client_key_bits=256

# Tạo scope (logical separation)
vault write -f kmip/scope/mongodb

# Tạo role trong scope
vault write kmip/scope/mongodb/role/admin \
  operation_activate=true \
  operation_create=true \
  operation_destroy=true \
  operation_discover_versions=true \
  operation_get=true \
  operation_locate=true \
  operation_rekey=true

# Sinh client certificate cho MongoDB
vault write -format=json kmip/scope/mongodb/role/admin/credential/generate \
  format=pem > mongodb-kmip-creds.json

# Extract cert và key
cat mongodb-kmip-creds.json | jq -r '.data.certificate' > client.pem
cat mongodb-kmip-creds.json | jq -r '.data.private_key' >> client.pem
cat mongodb-kmip-creds.json | jq -r '.data.ca_chain[]' > ca.pem
</code></pre>

<h3 id="mongodb-kmip"><strong>MongoDB with KMIP Vault</strong></h3>

<pre><code class="language-yaml"># mongod.conf
security:
  enableEncryption: true
  kmip:
    serverName: vault.company.com
    port: 5696
    clientCertificateFile: /etc/mongodb/client.pem
    serverCAFile: /etc/mongodb/ca.pem
    keyStatePollingSeconds: 60
</code></pre>

<h2 id="2-consul-secrets-engine"><strong>2. Consul Secrets Engine</strong></h2>

<p><strong>Consul Secrets Engine</strong> generates <strong>dynamic Consul ACL tokens</strong>, allowing applications to access the Consul service mesh and KV store with short-term credentials.</p>

<pre><code class="language-bash"># Enable Consul secrets engine
vault secrets enable consul

# Cấu hình kết nối Consul
vault write consul/config/access \
  address="consul.company.com:8500" \
  token="&lt;consul-management-token&gt;"

# Tạo role
vault write consul/roles/app-readonly \
  policies="app-readonly-policy" \
  ttl=1h \
  max_ttl=4h

# Consul policy (tạo trước trên Consul)
# app-readonly-policy:
#   key_prefix "app/" { policy = "read" }
#   service_prefix "" { policy = "read" }

# Sinh dynamic Consul token
vault read consul/creds/app-readonly
# token: 2f76e8b4-a3d0-...
# lease_duration: 1h

# Token tự động revoke khi hết lease
</code></pre>

<h2 id="3-nomad-secrets-engine"><strong>3. Nomad Secrets Engine</strong></h2>

<p><strong>Nomad Secrets Engine</strong> sinh <strong>dynamic Nomad ACL tokens</strong>.</p>

<pre><code class="language-bash"># Enable Nomad secrets engine
vault secrets enable nomad

# Cấu hình
vault write nomad/config/access \
  address="https://nomad.company.com:4646" \
  token="&lt;nomad-management-token&gt;"

# Tạo role
vault write nomad/role/deploy \
  policies="deploy-policy" \
  type="client" \
  ttl=30m

# Sinh Nomad token
vault read nomad/creds/deploy
# secret_id: 5e1c1a...
# accessor_id: 3d2b...
</code></pre>

<h2 id="4-vault-plugin-system"><strong>4. Vault Plugin System</strong></h2>

<p>Vault has a plugin-based architecture — all secrets engines and auth methods are plugins. You can develop custom plugins using Go.</p>

<h3 id="plugin-architecture"><strong>Plugin Architecture</strong></h3>

<pre><code>┌─────────────────────────────────────────────────┐
│                  Vault Server                   │
│                                                 │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ Built-in     │  │ External     │            │
│  │ Plugins      │  │ Plugins      │            │
│  │ (kv, transit,│  │ (custom,     │            │
│  │  pki, aws)   │  │  community)  │            │
│  └──────────────┘  └──────┬───────┘            │
│                           │                     │
│                    gRPC over Unix Socket         │
│                    (mutually authenticated)      │
│                           │                     │
│                    ┌──────┴───────┐             │
│                    │ Plugin Binary│             │
│                    │ (separate    │             │
│                    │  process)    │             │
│                    └──────────────┘             │
└─────────────────────────────────────────────────┘
</code></pre>

<h3 id="plugin-catalog"><strong>Plugin Catalog</strong></h3>

<pre><code class="language-bash"># Liệt kê built-in plugins
vault plugin list

# Liệt kê chỉ secrets plugins
vault plugin list secret

# Liệt kê auth plugins
vault plugin list auth

# Đăng ký custom plugin
vault plugin register -sha256="$(sha256sum vault-plugin-myengine | cut -d' ' -f1)" \
  secret vault-plugin-myengine

# Enable custom plugin
vault secrets enable -path=myengine vault-plugin-myengine
</code></pre>

<h3 id="developing-custom-plugin"><strong>Developing Custom Secrets Engine</strong></h3>

<pre><code class="language-go">// main.go
package main

import (
    "os"
    "github.com/hashicorp/go-hclog"
    "github.com/hashicorp/vault/api"
    "github.com/hashicorp/vault/sdk/framework"
    "github.com/hashicorp/vault/sdk/logical"
    "github.com/hashicorp/vault/sdk/plugin"
)

func main() {
    apiClientMeta := &amp;api.PluginAPIClientMeta{}
    flags := apiClientMeta.FlagSet()
    flags.Parse(os.Args[1:])

    tlsConfig := apiClientMeta.GetTLSConfig()
    tlsProviderFunc := api.VaultPluginTLSProvider(tlsConfig)

    err := plugin.ServeMultiplex(&amp;plugin.ServeOpts{
        BackendFactoryFunc: Factory,
        TLSProviderFunc:    tlsProviderFunc,
    })
    if err != nil {
        logger := hclog.New(&amp;hclog.LoggerOptions{})
        logger.Error("plugin shutting down", "error", err)
        os.Exit(1)
    }
}

func Factory(ctx context.Context, conf *logical.BackendConfig) (logical.Backend, error) {
    b := &amp;backend{}
    b.Backend = &amp;framework.Backend{
        Help: "My custom secrets engine",
        BackendType: logical.TypeLogical,
        Paths: []*framework.Path{
            b.pathCreds(),
            b.pathConfig(),
        },
        Secrets: []*framework.Secret{
            b.secretCreds(),
        },
    }
    if err := b.Setup(ctx, conf); err != nil {
        return nil, err
    }
    return b, nil
}

type backend struct {
    *framework.Backend
}
</code></pre>

<h3 id="plugin-multiplexing"><strong>Plugin Multiplexing</strong></h3>

<p>Plugin multiplexing (Vault 1.12+) allows one plugin process to serve multiple mounts, reducing resource usage:</p>

<pre><code class="language-go">// Sử dụng plugin.ServeMultiplex thay vì plugin.Serve
err := plugin.ServeMultiplex(&amp;plugin.ServeOpts{
    BackendFactoryFunc: Factory,
    TLSProviderFunc:    tlsProviderFunc,
})
</code></pre>

<h3 id="versioned-plugins"><strong>Versioned Plugins</strong></h3>

<pre><code class="language-bash"># Đăng ký plugin version mới
vault plugin register \
  -sha256="..." \
  -version="v2.0.0" \
  secret vault-plugin-myengine

# Liệt kê versions
vault plugin info secret vault-plugin-myengine

# Pin mount đến version cụ thể
vault secrets tune -plugin-version="v2.0.0" myengine/

# Reload plugin (zero-downtime)
vault plugin reload -plugin vault-plugin-myengine
</code></pre>

<h2 id="5-community-plugins"><strong>5. Notable Community Plugins</strong></h2>

<table>
<thead>
<tr><th>Plugin</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>vault-plugin-secrets-github</td><td>Dynamic GitHub tokens</td></tr>
<tr><td>vault-plugin-secrets-kafka</td><td>Kafka credentials</td></tr>
<tr><td>vault-plugin-secrets-artifactory</td><td>JFrog Artifactory tokens</td></tr>
<tr><td>vault-plugin-auth-kerberos</td><td>Kerberos/SPNEGO auth</td></tr>
<tr><td>vault-plugin-secrets-openldap</td><td>OpenLDAP credentials</td></tr>
</tbody>
</table>

<h2 id="6-tong-ket"><strong>6. Summary</strong></h2>

<ul>
<li><p><strong>KMIP</strong> — standard key management, MongoDB/MySQL/VMware integration</p></li>
<li><p><strong>Consul/Nomad Engines</strong> — dynamic ACL tokens cho HashiCorp ecosystem</p></li>
<li><p><strong>Plugin System</strong> — extensible architecture, custom plugins using Go</p></li>
<li><p><strong>Plugin Multiplexing</strong> — performance improvement cho multiple mounts</p></li>
</ul>

<p>The next section will explore Vault Agent, Vault Proxy, and Kubernetes Integration — how to deliver secrets to applications automatically.</p>
