---
id: 019d8b30-b221-7001-c002-e0c5f8200121
title: 第 21 課：將 Vault 與 Spring Boot 和 Node.js 集成
slug: bai-21-tich-hop-vault-voi-spring-boot-va-nodejs
description: >-
  Spring Cloud Vault、Spring Boot 自動配置、PropertySource 綁定、帶有 node-vault 的
  Node.js、Python hvac、Go SDK。應用模式，零秘密問題。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 21
section_title: 第六部分：整合實際應用
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-6430" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-6430）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="938" cy="164" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="776" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="614" cy="80" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="952" cy="38" r="28" fill="#fbbf24" opacity="0.11"/>
    <圓cx =“790”cy =“256”r =“32”填滿=“#fbbf24”不透明度=“0.05”/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填滿=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <line x1 =“600”y1 =“124”x2 =“1100”y2 =“204”筆觸=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“154”x2 =“1050”y2 =“224”筆畫=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=“1057.7749907475932,204.5 1057.7749907475932,243.5 1024,263 990.2250092524068,243.59095. 1024,185" 填色 = "無" 筆畫 = "#fbbf24" 筆畫寬度 = "1" 不透明度 = = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fbbf24”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fbbf24”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 21 課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 21 課：將 Vault 與 Spring Boot 整合</tspan>
      <tspan x="60" dy="42">Node.js</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：整合實際應用</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-spring-boot-vault"><strong>1.有 Vault 的 Spring Boot</strong></h2>

<h3 id="spring-cloud-vault"><strong>Spring Cloud Vault</strong></h3>

<p><strong>Spring Cloud Vault</strong> 將 Vault 作為 Spring Boot 中的 PropertySource 整合 - Vault 中的機密會自動綁定到應用程式屬性。 </p>

<pre><code class="language-xml"><!-- pom.xml -->
<依賴關係>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-vault-config</artifactId>
</依賴>
<依賴關係>
    <groupId>org.springframework.vault</groupId>
    <artifactId>spring-vault-core</artifactId>
</依賴>
</code></pre>

<h3 id="cau-hinh-spring"><strong>配置</strong></h3>

<pre><code class="language-yaml"># application.yml
春天：
  雲：
    vault:
      uri：https://vault.company.com:8200
      身份驗證：KUBERNETES
      庫伯內特：
        角色：網頁應用程式
        kubernetes 路徑：auth/kubernetes
        服務帳戶令牌檔案：/var/run/secrets/kubernetes.io/serviceaccount/token
      千伏：
        啟用：真
        後端：秘密
        預設上下文：生產/webapp
        設定檔分隔符號：/
      資料庫：
        啟用：真
        角色：webapp-db
        後端：資料庫
      配置：
        生命週期：
          啟用：真
          最短更新時間：10秒
          過期閾值：1m
</code></pre>

<h3 id="approle-spring"><strong>AppRole 驗證</strong></h3>

<pre><code class="language-yaml">彈簧：
  雲：
    vault:
      uri：https://vault.company.com:8200
      認證：APPROLE
      應用程式角色：
        角色 ID：${VAULT_ROLE_ID}
        秘密 ID：${VAULT_SECRET_ID}
        應用程式角色路徑：auth/approle
</code></pre>

<h3 id="su-dung-secrets"><strong>在程式碼中使用 Secret</strong></h3>

<pre><code class="language-java">// Vault 和 @Value 綁定的秘密
@服務
公共類別資料庫服務{

    @Value("${db.用戶名}")
    私有字串 dbUsername;

    @Value("${db.password}")
    私有字串 dbPassword；@Value("${api.key}")
    私有字串 apiKey；
}

// Hoặc dùng @ConfigurationProperties
@配置
@ConfigurationProperties（前綴=“db”）
公共類別資料庫配置{
    私有字符串主機；
    私有 int 連接埠；
    私有字串使用者名稱；
    私有字符串密碼；
    // 取得器、設定器
}
</code></pre>

<h3 id="dynamic-database-creds"><strong>動態資料庫憑證</strong></h3>

<pre><code class="language-java">@Configuration
公共類別 VaultDatabaseConfig {

    @豆子
    公共資料來源資料來源（
            SecretLeaseContainer 租借貨櫃，
            @Value("${spring.datasource.url}") 字串 url) {

        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl(url);

        // Lắng nghe 秘密輪換
        LeaseContainer.addLeaseListener(事件 -> {
            if (event.getSource().getPath().equals("database/creds/webapp-db")) {
                if (SecretLeaseExpiredEvent 的事件實例 ||
                    SecretLeaseCreatedEvent 事件實例) {

                    Map<String, Object> Secrets = event.getSource().getSecrets();
                    dataSource.setUsername((String)secrets.get("使用者名稱"));
                    dataSource.setPassword((String) Secrets.get("密碼"));

                    // 軟驅逐連接
                    dataSource.getHikariPoolMXBean()
                        .softEvictConnections();
                }
            }
        });

        返回資料來源；
    }
}
</code></pre>

<h3 id="transit-encryption"><strong>Java 傳輸加密</strong></h3>

<pre><code class="language-java">@Service
公共類加密服務{

    私有最終 VaultTransitOperations 傳輸；

    公共 EncryptionService(VaultTemplateVaultTemplate) {
        this.transit =VaultTemplate.opsForTransit();
    }

    公共字串加密（字串明文）{
        返回transit.encrypt(“my-app-key”, plaintext);
    }

    公共字串解密（字串密文）{
        return transit.decrypt("my-app-key", ciphertext);
    }

    // 批次加密
    public List<VaultEncryptionResult> encryptBatch(List<String> plaintexts) {
        List<Plaintext> batch = plaintexts.stream()
            .map(明文::of)
            .collect(Collectors.toList());
        返回transit.encrypt(“my-app-key”,batch);
    }
}
</code></pre>

<h2 id="2-nodejs-vault"><strong>2. Node.js 與 Vault</strong></h2>

<h3 id="node-vault-client"><strong>node-vault 用戶端</strong></h3>

<pre><code class="language-javascript">// npm install node-vault
constVault = require('node-vault')({
  api版本: 'v1',
  端點：process.env.VAULT_ADDR || 'https://vault.company.com:8200',
});

// 透過 AppRole 登入
非同步函數登入() {
  const 結果 = 等待Vault.approleLogin({
    role_id：process.env.VAULT_ROLE_ID，
    Secret_id：process.env.VAULT_SECRET_ID，
  });
  vault.token = result.auth.client_token;
  返回結果；
}

// Đọc KV 秘密
非同步函數 getSecret(path) {
  const 結果 = 等待Vault.read(`secret/data/${path}`);
  返回結果.數據.數據;
}// Sinh 資料庫憑證
非同步函數 getDatabaseCreds(角色) {
  const 結果 = 等待Vault.read(`database/creds/${role}`);
  返回{
    使用者名稱：結果.資料.使用者名，
    密碼：結果.資料.密碼，
    租賃Id：結果.lease_id，
    租賃持續時間：結果.lease_duration，
  };
}

// 加密傳輸
非同步函數加密（明文）{
  const 結果=等待vault.write('transit/encrypt/my-key', {
    明文： Buffer.from(plaintext).toString('base64'),
  });
  返回結果.數據.密文；
}

// 主要
（異步（）=> {
  等待登入（）；
  const dbConfig =等待 getSecret('生產/db');
  console.log(`Connecting to ${dbConfig.host}:${dbConfig.port}`);
})();
</code></pre>

<h3 id="kubernetes-auth-nodejs"><strong>來自 Node.js 的 Kubernetes 驗證</strong></h3>

<pre><code class="language-javascript">const fs = require('fs');

非同步函數 k8sLogin() {
  const jwt = fs.readFileSync(
    '/var/run/secrets/kubernetes.io/serviceaccount/token',
    'utf8'
  ）；

  const 結果 = 等待Vault.kubernetesLogin({
    角色：'網頁應用程式'，
    傑威特：傑威特，
  });

  vault.token = result.auth.client_token;
  返回結果；
}
</code></pre>

<h2 id="3-python-hvac"><strong>3. Python 與暖通空調</strong></h2>

<pre><code class="language-python"># pip install hvac
進口暖通空調

客戶端 = hvac.Client(url='https://vault.company.com:8200')

# 應用程式角色登入
client.auth.approle.login(
    role_id=os.environ['VAULT_ROLE_ID'],
    Secret_id=os.environ['VAULT_SECRET_ID'],
）

# KV v2
秘密 = client.secrets.kv.v2.read_secret_version(
    路徑='生產/資料庫',
    mount_point='秘密',
）
db_password = 秘密['資料']['資料']['密碼']

# 資料庫動態憑證
信用 = client.secrets.database.generate_credentials(
    name='應用程式角色',
    mount_point='資料庫',
）
print(f"使用者名稱: {creds['data']['使用者名稱']}")
print(f"密碼: {creds['data']['password']}")

# 傳輸加密
結果 = client.secrets.transit.encrypt_data(
    name='我的密鑰',
    plaintext=base64.b64encode(b'敏感資料').decode(),
）
密文 = 結果['數據']['密文']
</code></pre>

<h2 id="4-application-patterns"><strong>4.應用模式</strong></h2>

<表>
<標題>
<tr><th>模式</th><th>運作方式</th><th>優點</th><th>缺點</th></tr>
</標題>
<正文>
<tr><td><strong>直接API</strong></td><td>應用直接呼叫Vault API</td><td>完全控制</td><td>應用程式必須了解Vault，處理續訂</td></tr>
<tr><td><strong>Agent Sidecar</strong></td><td>Vault Agent 渲染文件</td><td>應用讀取文件，未知 Vault</td><td>Sidecar 開銷</td></tr>
<tr><td><strong>環境注入</strong></td><td>秘密注入環境變數</td><td>簡單，通用</td><td>靜態，無自動旋轉</td></tr>
<tr><td><strong>CSI 卷</strong></td><td>秘密掛載到卷</td><td>原生 K8s，無 sidecar</td><td>限制動態秘密</td></tr>
<tr><td><strong>VSO</strong></td><td>Operator 同步到 K8s Secret</td><td>推薦，自動刷新</td><td>K8s etcd 中的 Secret</td></tr>
</tbody>
</表>

<h2 id="5-secret-zero-problem"><strong>5。秘密零問題</strong></h2>

<p>「秘密零」是個悖論：要從保險庫取得秘密，需要第一個秘密進行身分驗證。解決方案：</p><ul>
<li><p><strong>平台身分</strong>：Kubernetes SA、AWS IAM 角色、Azure 託管身分 → 無密碼</p></li>
<li><p><strong>回應包裝</strong>：Orchestrator 產生包裝的 SecretID，分配給應用程式。應用程式解開一次</p></li>
<li><p><strong>CI/CD OIDC</strong>：GitHub Actions/GitLab CI OIDC 令牌 → JWT 驗證，無靜態機密</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6。摘要</strong></h2>

<ul>
<li><p><strong>Spring Cloud Vault</strong> — 最深度整合、自動 PropertySource 綁定、動態憑證輪替</p></li>
<li><p><strong>Node.js (node-vault)</strong> — 靈活的客戶端程式庫、非同步/等待 API</p></li>
<li><p><strong>Python (hvac)</strong> — 用於腳本編寫和應用程式的綜合客戶端</p></li>
<li><p><strong>平台身分</strong>－最有效地解決零秘密問題</p></li>
</ul>

<p>下一篇文章將了解如何將 Vault 與 Terraform、Ansible 和 CI/CD 管道整合 - 基礎設施即程式碼與秘密管理結合。 </p>
