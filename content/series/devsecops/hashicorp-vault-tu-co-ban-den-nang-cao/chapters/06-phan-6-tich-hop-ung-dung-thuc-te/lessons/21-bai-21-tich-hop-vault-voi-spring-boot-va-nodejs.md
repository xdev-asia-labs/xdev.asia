---
id: 019d8b30-b221-7001-c002-e0c5f8200121
title: 'Bài 21: Tích hợp Vault với Spring Boot và Node.js'
slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
description: >-
  Spring Cloud Vault, Spring Boot auto-configuration, PropertySource binding,
  Node.js với node-vault, Python hvac, Go SDK.
  Application patterns, Secret Zero problem.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Tích hợp ứng dụng thực tế"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-spring-boot-vault"><strong>1. Spring Boot với Vault</strong></h2>

<h3 id="spring-cloud-vault"><strong>Spring Cloud Vault</strong></h3>

<p><strong>Spring Cloud Vault</strong> tích hợp Vault như một PropertySource trong Spring Boot — secrets từ Vault tự động binding vào application properties.</p>

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

<h3 id="cau-hinh-spring"><strong>Cấu hình</strong></h3>

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

<h3 id="su-dung-secrets"><strong>Sử dụng Secrets trong Code</strong></h3>

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

<h2 id="2-nodejs-vault"><strong>2. Node.js với Vault</strong></h2>

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

<h3 id="kubernetes-auth-nodejs"><strong>Kubernetes Auth từ Node.js</strong></h3>

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

<h2 id="3-python-hvac"><strong>3. Python với hvac</strong></h2>

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
<tr><th>Pattern</th><th>Cách hoạt động</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
</thead>
<tbody>
<tr><td><strong>Direct API</strong></td><td>App gọi Vault API trực tiếp</td><td>Full control</td><td>App phải biết Vault, handle renewal</td></tr>
<tr><td><strong>Agent Sidecar</strong></td><td>Vault Agent render files</td><td>App đọc file, không biết Vault</td><td>Sidecar overhead</td></tr>
<tr><td><strong>Env Injection</strong></td><td>Secrets inject vào env vars</td><td>Đơn giản, universal</td><td>Static, không auto-rotate</td></tr>
<tr><td><strong>CSI Volume</strong></td><td>Secrets mount vào volume</td><td>Native K8s, không sidecar</td><td>Hạn chế dynamic secrets</td></tr>
<tr><td><strong>VSO</strong></td><td>Operator sync vào K8s Secret</td><td>Recommended, auto-refresh</td><td>Secret trong K8s etcd</td></tr>
</tbody>
</table>

<h2 id="5-secret-zero-problem"><strong>5. Secret Zero Problem</strong></h2>

<p>"Secret Zero" là paradox: để lấy secrets từ Vault, cần một secret đầu tiên để xác thực. Các giải pháp:</p>

<ul>
<li><p><strong>Platform Identity</strong>: Kubernetes SA, AWS IAM Role, Azure Managed Identity → không cần secret</p></li>
<li><p><strong>Response Wrapping</strong>: Orchestrator sinh wrapped SecretID, giao cho app. App unwrap 1 lần</p></li>
<li><p><strong>CI/CD OIDC</strong>: GitHub Actions/GitLab CI OIDC tokens → JWT auth, không static secrets</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>Spring Cloud Vault</strong> — tích hợp sâu nhất, auto PropertySource binding, dynamic credential rotation</p></li>
<li><p><strong>Node.js (node-vault)</strong> — client library linh hoạt, async/await API</p></li>
<li><p><strong>Python (hvac)</strong> — comprehensive client cho scripting và applications</p></li>
<li><p><strong>Platform Identity</strong> — giải quyết Secret Zero problem hiệu quả nhất</p></li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu cách tích hợp Vault với Terraform, Ansible và CI/CD Pipelines — Infrastructure as Code meets Secret Management.</p>
