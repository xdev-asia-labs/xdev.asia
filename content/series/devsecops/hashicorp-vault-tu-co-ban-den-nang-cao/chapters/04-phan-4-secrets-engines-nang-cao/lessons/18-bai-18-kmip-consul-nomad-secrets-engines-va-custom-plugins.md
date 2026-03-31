---
id: 019d8b30-b218-7001-c002-e0c5f8200118
title: 'Bài 18: KMIP, Consul, Nomad Secrets Engines và Custom Plugins'
slug: bai-18-kmip-consul-nomad-secrets-engines-va-custom-plugins
description: >-
  KMIP Secrets Engine, Consul Secrets Engine, Nomad Secrets Engine,
  Vault Plugin System — architecture, catalog, developing custom plugins bằng Go.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 4: Secrets Engines nâng cao"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-kmip-secrets-engine"><strong>1. KMIP Secrets Engine (Enterprise)</strong></h2>

<p><strong>KMIP (Key Management Interoperability Protocol)</strong> là giao thức chuẩn OASIS cho quản lý cryptographic keys. KMIP Secrets Engine cho phép Vault hoạt động như một <strong>KMIP Server</strong>, cung cấp key management cho databases, storage systems, và applications hỗ trợ KMIP.</p>

<h3 id="use-cases-kmip"><strong>Use Cases</strong></h3>

<ul>
<li><p><strong>MongoDB Enterprise</strong> — encryption at rest với KMIP</p></li>
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

<h3 id="mongodb-kmip"><strong>MongoDB với Vault KMIP</strong></h3>

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

<p><strong>Consul Secrets Engine</strong> sinh <strong>dynamic Consul ACL tokens</strong>, cho phép ứng dụng truy cập Consul service mesh và KV store với credentials ngắn hạn.</p>

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

<p>Vault có kiến trúc plugin-based — mọi secrets engine và auth method đều là plugins. Bạn có thể phát triển custom plugins bằng Go.</p>

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

<p>Plugin multiplexing (Vault 1.12+) cho phép một plugin process phục vụ nhiều mounts, giảm resource usage:</p>

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

<h2 id="5-community-plugins"><strong>5. Community Plugins đáng chú ý</strong></h2>

<table>
<thead>
<tr><th>Plugin</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>vault-plugin-secrets-github</td><td>Dynamic GitHub tokens</td></tr>
<tr><td>vault-plugin-secrets-kafka</td><td>Kafka credentials</td></tr>
<tr><td>vault-plugin-secrets-artifactory</td><td>JFrog Artifactory tokens</td></tr>
<tr><td>vault-plugin-auth-kerberos</td><td>Kerberos/SPNEGO auth</td></tr>
<tr><td>vault-plugin-secrets-openldap</td><td>OpenLDAP credentials</td></tr>
</tbody>
</table>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>KMIP</strong> — standard key management, tích hợp MongoDB/MySQL/VMware</p></li>
<li><p><strong>Consul/Nomad Engines</strong> — dynamic ACL tokens cho HashiCorp ecosystem</p></li>
<li><p><strong>Plugin System</strong> — extensible architecture, custom plugins bằng Go</p></li>
<li><p><strong>Plugin Multiplexing</strong> — performance improvement cho multiple mounts</p></li>
</ul>

<p>Phần tiếp theo sẽ khám phá Vault Agent, Vault Proxy và Kubernetes Integration — cách deliver secrets đến applications một cách tự động.</p>
