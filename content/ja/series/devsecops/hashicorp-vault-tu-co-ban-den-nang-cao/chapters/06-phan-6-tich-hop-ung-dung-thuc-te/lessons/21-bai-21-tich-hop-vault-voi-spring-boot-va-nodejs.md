---
id: 019d8b30-b221-7001-c002-e0c5f8200121
title: 'レッスン 21: Vault と Spring Boot および Node.js の統合'
slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
description: Spring Cloud Vault、Spring Boot 自動構成、PropertySource バインディング、ノード ボールトを備えた Node.js、Python hvac、Go SDK。応用パターン、シークレットゼロ問題。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 6: 実際のアプリケーションの統合'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6430" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6430)"/>

  <!-- Decorations -->
  <g>
    <circle cx="938" cy="164" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="776" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="614" cy="80" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="952" cy="38" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="256" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.7749907475932,204.5 1057.7749907475932,243.5 1024,263 990.2250092524068,243.5 990.2250092524068,204.5 1024,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 D​​evSecOps — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 21: Vault と Spring Boot および</tspan> の統合
      <tspan x="60" dy="42">Node.js</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実用的なアプリケーションの統合</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-spring-boot-vault"><strong>1。 Vault</strong></h2> を使用した Spring Boot

<h3 id="spring-cloud-vault"><strong>Spring Cloud Vault</strong></h3>

<p><strong>Spring Cloud Vault</strong> は、Spring Boot の PropertySource として Vault を統合します。Vault のシークレットはアプリケーション プロパティに自動的にバインドされます。</p>

<pre><code class="language-xml">&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-vault-config&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.vault&lt;/groupId&gt;
    &lt;artifactId&gt;spring-vault-core&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>

<h3 id="cau-hinh-spring"><strong>構成</strong></h3>

<pre><code class="language-yaml"># application.yml
spring:
  cloud:
    vault:
      uri: https://vault.company.com:8200
      authentication: KUBERNETES
      kubernetes:
        role: webapp
        kubernetes-path: auth/kubernetes
        service-account-token-file: /var/run/secrets/kubernetes.io/serviceaccount/token
      kv:
        enabled: true
        backend: secret
        default-context: production/webapp
        profile-separator: /
      database:
        enabled: true
        role: webapp-db
        backend: database
      config:
        lifecycle:
          enabled: true
          min-renewal: 10s
          expiry-threshold: 1m
</code></pre>

<h3 id="approle-spring"><strong>AppRole Authentication</strong></h3>

<pre><code class="language-yaml">spring:
  cloud:
    vault:
      uri: https://vault.company.com:8200
      authentication: APPROLE
      app-role:
        role-id: ${VAULT_ROLE_ID}
        secret-id: ${VAULT_SECRET_ID}
        app-role-path: auth/approle
</code></pre>

<h3 id="su-dung-secrets"><strong>コードでのシークレットの使用</strong></h3>

<pre><code class="language-java">// Secrets từ Vault tự động binding vào @Value
@Service
public class DatabaseService {

    @Value("${db.username}")
    private String dbUsername;

    @Value("${db.password}")
    private String dbPassword;

    @Value("${api.key}")
    private String apiKey;
}

// Hoặc dùng @ConfigurationProperties
@Configuration
@ConfigurationProperties(prefix = "db")
public class DatabaseConfig {
    private String host;
    private int port;
    private String username;
    private String password;
    // getters, setters
}
</code></pre>

<h3 id="dynamic-database-creds"><strong>Dynamic Database Credentials</strong></h3>

<pre><code class="language-java">@Configuration
public class VaultDatabaseConfig {

    @Bean
    public DataSource dataSource(
            SecretLeaseContainer leaseContainer,
            @Value("${spring.datasource.url}") String url) {

        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(url);

        // Lắng nghe secret rotation
        leaseContainer.addLeaseListener(event -> {
            if (event.getSource().getPath().equals("database/creds/webapp-db")) {
                if (event instanceof SecretLeaseExpiredEvent ||
                    event instanceof SecretLeaseCreatedEvent) {

                    Map&lt;String, Object&gt; secrets = event.getSource().getSecrets();
                    dataSource.setUsername((String) secrets.get("username"));
                    dataSource.setPassword((String) secrets.get("password"));

                    // Soft evict connections
                    dataSource.getHikariPoolMXBean()
                        .softEvictConnections();
                }
            }
        });

        return dataSource;
    }
}
</code></pre>

<h3 id="transit-encryption"><strong>Transit Encryption trong Java</strong></h3>

<pre><code class="language-java">@Service
public class EncryptionService {

    private final VaultTransitOperations transit;

    public EncryptionService(VaultTemplate vaultTemplate) {
        this.transit = vaultTemplate.opsForTransit();
    }

    public String encrypt(String plaintext) {
        return transit.encrypt("my-app-key", plaintext);
    }

    public String decrypt(String ciphertext) {
        return transit.decrypt("my-app-key", ciphertext);
    }

    // Batch encryption
    public List&lt;VaultEncryptionResult&gt; encryptBatch(List&lt;String&gt; plaintexts) {
        List&lt;Plaintext&gt; batch = plaintexts.stream()
            .map(Plaintext::of)
            .collect(Collectors.toList());
        return transit.encrypt("my-app-key", batch);
    }
}
</code></pre>

<h2 id="2-nodejs-vault"><strong>2。 Vault</strong></h2> を使用した Node.js

<h3 id="node-vault-client"><strong>node-vault Client</strong></h3>

<pre><code class="language-javascript">// npm install node-vault
const vault = require('node-vault')({
  apiVersion: 'v1',
  endpoint: process.env.VAULT_ADDR || 'https://vault.company.com:8200',
});

// Login với AppRole
async function login() {
  const result = await vault.approleLogin({
    role_id: process.env.VAULT_ROLE_ID,
    secret_id: process.env.VAULT_SECRET_ID,
  });
  vault.token = result.auth.client_token;
  return result;
}

// Đọc KV secret
async function getSecret(path) {
  const result = await vault.read(`secret/data/${path}`);
  return result.data.data;
}

// Sinh database credentials
async function getDatabaseCreds(role) {
  const result = await vault.read(`database/creds/${role}`);
  return {
    username: result.data.username,
    password: result.data.password,
    leaseId: result.lease_id,
    leaseDuration: result.lease_duration,
  };
}

// Encrypt với Transit
async function encrypt(plaintext) {
  const result = await vault.write('transit/encrypt/my-key', {
    plaintext: Buffer.from(plaintext).toString('base64'),
  });
  return result.data.ciphertext;
}

// Main
(async () => {
  await login();
  const dbConfig = await getSecret('production/db');
  console.log(`Connecting to ${dbConfig.host}:${dbConfig.port}`);
})();
</code></pre>

<h3 id="kubernetes-auth-nodejs"><strong>Node.js からの Kubernetes 認証</strong></h3>

<pre><code class="language-javascript">const fs = require('fs');

async function k8sLogin() {
  const jwt = fs.readFileSync(
    '/var/run/secrets/kubernetes.io/serviceaccount/token',
    'utf8'
  );

  const result = await vault.kubernetesLogin({
    role: 'webapp',
    jwt: jwt,
  });

  vault.token = result.auth.client_token;
  return result;
}
</code></pre>

<h2 id="3-python-hvac"><strong>3。 hvac</strong></h2> を使用した Python

<pre><code class="language-python"># pip install hvac
import hvac

client = hvac.Client(url='https://vault.company.com:8200')

# AppRole login
client.auth.approle.login(
    role_id=os.environ['VAULT_ROLE_ID'],
    secret_id=os.environ['VAULT_SECRET_ID'],
)

# KV v2
secret = client.secrets.kv.v2.read_secret_version(
    path='production/db',
    mount_point='secret',
)
db_password = secret['data']['data']['password']

# Database dynamic credentials
creds = client.secrets.database.generate_credentials(
    name='app-role',
    mount_point='database',
)
print(f"Username: {creds['data']['username']}")
print(f"Password: {creds['data']['password']}")

# Transit encrypt
result = client.secrets.transit.encrypt_data(
    name='my-key',
    plaintext=base64.b64encode(b'sensitive data').decode(),
)
ciphertext = result['data']['ciphertext']
</code></pre>

<h2 id="4-application-patterns"><strong>4. Application Patterns</strong></h2>

<table>
<thead>
<tr><th>パターン</th><th>仕組み</th><th>メリット</th><th>デメリット</th></tr>
</thead>
<tbody>
<tr><td><strong>直接 API</strong></td><td>アプリは Vault API を直接呼び出します</td><td>フル コントロール</td><td>アプリは Vault を認識し、更新を処理する必要があります</td></tr>
<tr><td><strong>Agent Sidecar</strong></td><td>Vault Agent レンダリング ファイル</td><td>App がファイルを読み取る、不明 Vault</td><td>Sidecar オーバーヘッド</td></tr>
<tr><td><strong>Env Injection</strong></td><td>Secrets を env vars に注入</td><td>シンプル、ユニバーサル</td><td>静的、自動回転なし</td></tr>
<tr><td><strong>CSI ボリューム</strong></td><td>ボリュームにシークレットをマウント</td><td>ネイティブ K8、サイドカーなし</td><td>動的シークレットを制限</td></tr>
<tr><td><strong>VSO</strong></td><td>Operator を K8s Secret に同期</td><td>推奨、自動更新</td><td>K8s の Secret etcd</td></tr>
</tbody>
</table>

<h2 id="5-secret-zero-problem"><strong>5. Secret Zero Problem</strong></h2>

<p>「シークレット ゼロ」は矛盾しています。Vault からシークレットを取得するには、認証に最初のシークレットが必要です。解決策:</p>

<ul>
<li><p><strong>プラットフォーム ID</strong>: Kubernetes SA、AWS IAM ロール、Azure マネージド ID → シークレットは不要</p></li>
<li><p><strong>Response Wrapping</strong>: Orchestrator はラップされた SecretID を生成し、アプリに割り当てます。アプリは一度アンラップ</p></li>
<li><p><strong>CI/CD OIDC</strong>: GitHub Actions/GitLab CI OIDC トークン → JWT 認証、静的シークレットなし</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6。概要</strong></h2>

<ul>
<li><p><strong>Spring Cloud Vault</strong> — 最も深い統合、自動 PropertySource バインディング、動的な認証情報のローテーション</p></li>
<li><p><strong>Node.js (node-vault)</strong> — 柔軟なクライアント ライブラリ、非同期/待機 API</p></li>
<li><p><strong>Python (hvac)</strong> — スクリプトおよびアプリケーション用の包括的なクライアント</p></li>
<li><p><strong>プラットフォーム ID</strong> — シークレット ゼロの問題を最も効果的に解決します</p></li>
</ul>

<p>次の記事では、Vault を Terraform、Ansible、CI/CD パイプラインと統合する方法を学びます — コードとしてのインフラストラクチャとシークレット管理の融合。</p>
