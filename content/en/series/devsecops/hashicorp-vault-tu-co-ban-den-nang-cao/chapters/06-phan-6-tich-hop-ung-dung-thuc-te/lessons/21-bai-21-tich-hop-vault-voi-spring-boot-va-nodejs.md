---
id: 019d8b30-b221-7001-c002-e0c5f8200121
title: 'Lesson 21: Integrating Vault with Spring Boot and Node.js'
slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
description: Spring Cloud Vault, Spring Boot auto-configuration, PropertySource binding, Node.js with node-vault, Python hvac, Go SDK. Application patterns, Secret Zero problem.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 21
section_title: 'Part 6: Integrating practical applications'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 21: Integrating Vault with Spring Boot and</tspan>
      <tspan x="60" dy="42">Node.js</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Integrating practical applications</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-spring-boot-vault"><strong>1. Spring Boot with Vault</strong></h2>

<h3 id="spring-cloud-vault"><strong>Spring Cloud Vault</strong></h3>

<p><strong>Spring Cloud Vault</strong> integrates Vault as a PropertySource in Spring Boot — secrets from Vault automatically bind to application properties.</p>

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

<h3 id="cau-hinh-spring"><strong>Configuration</strong></h3>

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

<h3 id="su-dung-secrets"><strong>Using Secrets in Code</strong></h3>

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

<h2 id="2-nodejs-vault"><strong>2. Node.js with Vault</strong></h2>

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

<h3 id="kubernetes-auth-nodejs"><strong>Kubernetes Auth from Node.js</strong></h3>

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

<h2 id="3-python-hvac"><strong>3. Python with hvac</strong></h2>

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
<tr><th>Pattern</th><th>How it works</th><th>Advantages</th><th>Disadvantages</th></tr>
</thead>
<tbody>
<tr><td><strong>Direct API</strong></td><td>App calls Vault API directly</td><td>Full control</td><td>App must know Vault, handle renewal</td></tr>
<tr><td><strong>Agent Sidecar</strong></td><td>Vault Agent render files</td><td>App reads files, unknown Vault</td><td>Sidecar overhead</td></tr>
<tr><td><strong>Env Injection</strong></td><td>Secrets inject into env vars</td><td>Simple, universal</td><td>Static, no auto-rotate</td></tr>
<tr><td><strong>CSI Volume</strong></td><td>Secrets mount to volume</td><td>Native K8s, no sidecar</td><td>Restrict dynamic secrets</td></tr>
<tr><td><strong>VSO</strong></td><td>Operator sync into K8s Secret</td><td>Recommended, auto-refresh</td><td>Secret in K8s etcd</td></tr>
</tbody>
</table>

<h2 id="5-secret-zero-problem"><strong>5. Secret Zero Problem</strong></h2>

<p>"Secret Zero" is a paradox: to get secrets from the Vault, a first secret is needed for authentication. Solutions:</p>

<ul>
<li><p><strong>Platform Identity</strong>: Kubernetes SA, AWS IAM Role, Azure Managed Identity → no secret needed</p></li>
<li><p><strong>Response Wrapping</strong>: Orchestrator generates wrapped SecretID, assigned to app. App unwrap once</p></li>
<li><p><strong>CI/CD OIDC</strong>: GitHub Actions/GitLab CI OIDC tokens → JWT auth, no static secrets</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6. Summary</strong></h2>

<ul>
<li><p><strong>Spring Cloud Vault</strong> — deepest integration, auto PropertySource binding, dynamic credential rotation</p></li>
<li><p><strong>Node.js (node-vault)</strong> — flexible client library, async/await API</p></li>
<li><p><strong>Python (hvac)</strong> — comprehensive client for scripting and applications</p></li>
<li><p><strong>Platform Identity</strong> — solve the Secret Zero problem most effectively</p></li>
</ul>

<p>The next article will learn how to integrate Vault with Terraform, Ansible and CI/CD Pipelines — Infrastructure as Code meets Secret Management.</p>
