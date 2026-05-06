---
id: 019c9617-fbb2-70b7-a4db-23daa55ff807
title: 第 26 課：使用 Ansible 實現自動化
slug: bai-26-automation-voi-ansible
description: 建立 Ansible playbook，用於 PostgreSQL HA 叢集的部署、組態管理、自動化測試和 CI/CD 整合。
duration_minutes: 115
is_free: true
video_url: null
sort_order: 26
section_title: 第 6 部分：製作與案例研究
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2070" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2070)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1095" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1090" cy="230" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1085" cy="85" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="1080" cy="200" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="55" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 26 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 26 課：使用 Ansible 實現自動化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：製作與製作案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___使用 Ansible 自動執行 Patroni 叢集部署____HTMLTAG_71__HTMLTAG_7221212112112112121121212121212121213233 級分錄管理配置____HTMLTAG_73__HTMLTAG_74___實作自動化測試____HTMLTAG_75__HTMLTAG_76___將資料庫變更整合到 CI/CD 中____HTMLTAG_77__HTMLTAG_78___使用基礎架構即程式碼原則____HTMLTAG_79__11G_79__1 PostgreSQL 的 Ansible 基礎知識___HTMLTAG_82__HTMLTAG_83___1.1。安裝 Ansible___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。庫存檔案____HTMLTAG_86__CODEBLOCK_1__HTMLTAG_87___1.3。 Ansible 設定___HTMLTAG_88__CODEBLOCK_2__HTMLTAG_89___2。完整的 Patroni 部署手冊___HTMLTAG_90__HTMLTAG_91___2.1。主要劇本___HTMLTAG_92__CODEBLOCK_3__HTMLTAG_93___2.2。變數___HTMLTAG_94__CODEBLOCK_4__HTMLTAG_95___2.3。常見角色___HTMLTAG_96__CODEBLOCK_5__HTMLTAG_97___2.4。 etcd 角色___HTMLTAG_98__CODEBLOCK_6__CODEBLOCK_7__HTMLTAG_99___2.5。 PostgreSQL 角色___HTMLTAG_100__CODEBLOCK_8__HTMLTAG_101___2.6。守護者角色</h3><pre><code class="language-yaml"># roles/patroni/tasks/main.yml
---
- name: Install Python dependencies
  pip:
    name:
      - patroni[etcd]
      - psycopg2-binary
      - python-etcd
    state: present
    executable: pip3

- name: Create Patroni configuration directory
  file:
    path: /etc/patroni
    state: directory
    owner: postgres
    group: postgres
    mode: '0755'

- name: Template Patroni configuration
  template:
    src: patroni.yml.j2
    dest: /etc/patroni/patroni.yml
    owner: postgres
    group: postgres
    mode: '0600'
  notify: restart patroni

- name: Template Patroni systemd service
  template:
    src: patroni.service.j2
    dest: /etc/systemd/system/patroni.service
  notify: restart patroni

- name: Start and enable Patroni
  systemd:
    name: patroni
    state: started
    enabled: yes
    daemon_reload: yes

- name: Wait for Patroni to be ready
  wait_for:
    port: 8008
    timeout: 60
</code></pre><pre><code class="language-jinja2">{# roles/patroni/templates/patroni.yml.j2 #}
scope: {{ patroni_scope }}
name: {{ ansible_hostname }}

restapi:
  listen: {{ ansible_default_ipv4.address }}:8008
  connect_address: {{ ansible_default_ipv4.address }}:8008

etcd:
  hosts: {% for node in cluster_nodes %}{{ node.ip }}:2379{% if not loop.last %},{% endif %}{% endfor %}

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    postgresql:
      use_pg_rewind: true
      use_slots: true
      parameters:
        max_connections: 100
        shared_buffers: 256MB
        effective_cache_size: 1GB
        maintenance_work_mem: 64MB
        checkpoint_completion_target: 0.9
        wal_buffers: 16MB
        default_statistics_target: 100
        random_page_cost: 1.1
        effective_io_concurrency: 200
        work_mem: 2621kB
        min_wal_size: 1GB
        max_wal_size: 4GB
        max_worker_processes: 4
        max_parallel_workers_per_gather: 2
        max_parallel_workers: 4
        max_parallel_maintenance_workers: 2
        wal_level: replica
        max_wal_senders: 10
        max_replication_slots: 10
        hot_standby: on
        archive_mode: on
        archive_command: 'test ! -f /var/lib/postgresql/wal_archive/%f &amp;&amp; cp %p /var/lib/postgresql/wal_archive/%f'

  initdb:
    - encoding: UTF8
    - data-checksums

  pg_hba:
    - host replication replicator 0.0.0.0/0 scram-sha-256
    - host all all 0.0.0.0/0 scram-sha-256

postgresql:
  listen: 0.0.0.0:5432
  connect_address: {{ ansible_default_ipv4.address }}:5432
  data_dir: {{ postgresql_data_dir }}
  bin_dir: {{ postgresql_bin_dir }}
  authentication:
    replication:
      username: replicator
      password: {{ replicator_password }}
    superuser:
      username: postgres
      password: {{ postgres_password }}

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h2 id="3-deployment">3。部署___HTMLTAG_104__HTMLTAG_105___3.1。運行劇本___HTMLTAG_106__CODEBLOCK_11__HTMLTAG_107___3.2。驗證部署</h3><pre><code class="language-yaml"># verify.yml
---
- name: Verify Patroni cluster
  hosts: postgres_cluster
  tasks:
    - name: Check Patroni service
      systemd:
        name: patroni
        state: started
      register: patroni_status

    - name: Get cluster status
      command: patronictl -c /etc/patroni/patroni.yml list
      register: cluster_status
      changed_when: false

    - name: Display cluster status
      debug:
        var: cluster_status.stdout_lines

    - name: Check PostgreSQL connectivity
      postgresql_ping:
        db: postgres
        login_host: localhost
        login_user: postgres
        login_password: "{{ postgres_password }}"
      become_user: postgres
</code></pre><pre><code class="language-bash">ansible-playbook verify.yml
</code></pre><h2 id="4-configuration-management">4。設定管理___HTMLTAG_110__HTMLTAG_111___4.1。動態設定更新___HTMLTAG_112__CODEBLOCK_14__HTMLTAG_113___4.2。備份自動化___HTMLTAG_114__CODEBLOCK_15__HTMLTAG_115___5。測試自動化___HTMLTAG_116__HTMLTAG_117___5.1。用於測試的分子_</h3><pre><code class="language-bash"># Install Molecule
pip3 install molecule molecule-plugins[docker]

# Initialize Molecule scenario
cd roles/patroni
molecule init scenario --driver-name docker
</code></pre><pre><code class="language-yaml"># roles/patroni/molecule/default/molecule.yml
---
dependency:
  name: galaxy
driver:
  name: docker
platforms:
  - name: pg-node1
    image: ubuntu:22.04
    pre_build_image: true
  - name: pg-node2
    image: ubuntu:22.04
    pre_build_image: true
  - name: pg-node3
    image: ubuntu:22.04
    pre_build_image: true
provisioner:
  name: ansible
verifier:
  name: ansible
</code></pre><pre><code class="language-yaml"># roles/patroni/molecule/default/verify.yml
---
- name: Verify
  hosts: all
  tasks:
    - name: Check Patroni is running
      systemd:
        name: patroni
        state: started
      register: result
      failed_when: result.status.ActiveState != 'active'

    - name: Check cluster has leader
      shell: patronictl -c /etc/patroni/patroni.yml list | grep Leader
      register: leader_check
      failed_when: leader_check.rc != 0
</code></pre><pre><code class="language-bash"># Run tests
molecule test
</code></pre><h3 id="52-testinfra-for-validation">5.2。用於驗證的測試基礎設施</h3><pre><code class="language-bash">pip3 install testinfra
</code></pre><pre><code class="language-python"># tests/test_patroni.py
import testinfra

def test_patroni_service(host):
    """Test Patroni service is running"""
    service = host.service("patroni")
    assert service.is_running
    assert service.is_enabled

def test_postgresql_port(host):
    """Test PostgreSQL port is listening"""
    assert host.socket("tcp://0.0.0.0:5432").is_listening

def test_patroni_rest_api(host):
    """Test Patroni REST API"""
    assert host.socket("tcp://0.0.0.0:8008").is_listening

def test_etcd_connectivity(host):
    """Test etcd cluster health"""
    cmd = host.run("etcdctl endpoint health")
    assert cmd.rc == 0
    assert "healthy" in cmd.stdout

def test_cluster_has_leader(host):
    """Test cluster has exactly one leader"""
    cmd = host.run("patronictl -c /etc/patroni/patroni.yml list")
    assert cmd.rc == 0
    assert cmd.stdout.count("Leader") == 1

def test_replication_lag(host):
    """Test replication lag is low"""
    cmd = host.run("sudo -u postgres psql -Atc \"SELECT pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) FROM pg_stat_replication;\"")
    if cmd.rc == 0 and cmd.stdout:
        lag = int(cmd.stdout.strip())
        assert lag &lt; 1048576  # &lt; 1MB lag
</code></pre><pre><code class="language-bash"># Run tests
pytest tests/test_patroni.py -v
</code></pre><h2 id="6-cicd-integration">6。 CI/CD 整合___HTMLTAG_122__HTMLTAG_123___6.1。亞搏體育appGitLab CI範例___HTMLTAG_124__CODEBLOCK_23__HTMLTAG_125___6.2。 GitHub 操作範例___HTMLTAG_126__CODEBLOCK_24__HTMLTAG_127___7。最佳實務___HTMLTAG_128__HTMLTAG_129___✅ 應該___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132__HTMLTAG_133___使用 Ansible Vault</strong>&nbsp;-加密機密___HTMLTAG_135__HTMLTAG_136__HTMLTAG_137___冪等playbook</strong>- 可以執行多次___HTMLTAG_139__HTMLTAG_140__HTMLTAG_141___在分子中測試___HTMLTAGsp-142___&nb生產前___HTMLTAG_143__HTMLTAG_144__HTMLTAG_145___版本控制</strong>&nbsp;- 所有人的 Git劇本____HTMLTAG_147__HTMLTAG_148__HTMLTAG_149____MLTAG_147__HTMLTAG_148__HTMLTAG_149_______清除自述文件___HTMLTAG_151__HTMLTAG_152__HTMLTAG_153___使用角色</strong>- 模組化組織___HTMLTAG_155__HTMLTAG_156__HTMLTAG_157___標記任務</strong>-選擇性執行___HTMLTAG_159__HTMLTAG_160__HTMLTAG_161___CI/CD 整合</strong>- 自動化測試___HTMLTAG_163__HTMLTAG_164__HTMLTAG_165___試運行</strong>-始終--首先檢查___HTMLTAG_167__HTMLTAG_168__HTMLTAG_169___更改前備份</strong>-安全net___HTMLTAG_171__HTMLTAG_172__HTMLTAG_173___❌不要___HTMLTAG_174__HTMLTAG_175______HTMLTAG_176__HTMLTAG_177___不要硬編碼秘密</strong>&nbsp;- 使用 Vault___HTMLTAG_179__HTMLTAG_180__HTMLTAG_181___不要跳過測試</strong>&nbsp;--18415MLTAG_183__HTMLTAG_184__HTMLTAG184___MLTAG_183__HTMLTAG_184__HTMLTAG_1851 shell</strong>&nbsp;-使用 PostgreSQL 模組____HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___不要忽略失敗的任務</strong>-處理錯誤____HTMLTAG_191__HTMLTAG_192__HTMLTAG_193___不要在沒有備份的情況下執行</strong>- 總是備份首先___HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___8。實驗室練習___HTMLTAG_198__HTMLTAG_199___實驗室 1：使用 Ansible 部署叢集___HTMLTAG_200__HTMLTAG_201__HTMLTAG_202___任務</strong>:___HTMLTAG_204__HTMLTAG_20516的庫存節點____HTMLTAG_207__HTMLTAG_208___建立包含角色的劇本___HTMLTAG_209__HTMLTAG_210___部署etcd叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集____HTMLTAG_211__HTMLTAG_212___部署PostgreSQL +叢集_- Patroni____HTMLTAG_213__HTMLTAG_214___驗證叢集運作狀況___HTMLTAG_215__HTMLTAG_216__HTMLTAG_217___實驗室2：設定管理____HT MLTAG_218__HTMLTAG_219__HTMLTAG_220___任務</strong>：___HTMLTAG_222__HTMLTAG_223__HTMLTAG_224___透過劇本更新最大連線數____HTMLTAG_225__HTMLTAG_226___自動夜間備份____HTMLTAG_227__HTMLTAG_228___為災難復原建立劇本故障轉移____HTMLTAG_229 __HTMLTAG_230___測試配置回溯____HTMLTAG_231__HTMLTAG_232___記錄所有劇本___HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___實驗室3：CI/CD管道___HTMLTAG_236__HTMLTAG_237__HTMLTAG_238___任務</strong>：___HTMLTAG_240__HTMLTAG_241__HTMLTAG_242___設定GitLab/GitHubHubMLTAG_241__HTMLTAG_242___設定GitLab/GitHubHubMLTAG_241__HTMLTAG_242_____4HTTA1_244124124124124212441_242___224ML nting階段___HTMLTAG_245__HTMLTAG_246___新增分子測試____HTMLTAG_247__HTMLTAG_248___自動部署到臨時階段____HTMLTAG_249__HTMLTAG_250___手動核准生產____HTMLTAG_251__HTMLTAG_25252525251__ 4：測試Molecule___HTMLTAG_254__HTMLTAG_255__HTMLTAG_256___任務</strong>：___HTMLTAG_258__HTMLTAG_259__HTMLTAG_260___初始化 Molecule場景___HTMLTAG_261__HTMLTAG_262___編寫驗證測試____HTMLTAG_263__HTMLTAG_264___在 Docker中測試角色容器____HTMLTAG_265__HTMLTAG_266___驗證叢集功能____HTMLTAG_267__HTMLTAG_268___整合到CI管道____HTMLTAG_269__HTMLTAG_270__HTMLTAG_271___9。摘要____HTMLTAG_272__HTMLTAG_273___自動化優勢____HTMLTAG_274__CODEBLOCK_25__HTMLTAG_275___關鍵 Ansible 概念____HTMLTAG_276__CODEBLOCK_26__HTMLTAG_277___1HTML 课将封面<strong>灾难恢复演习</strong>：___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284___灾难恢复规划程序___HTMLTAG_285__HTMLTAG_286___测试方法___HTM LTAG_287__HTMLTAG_288___事件回應工作流程___HTMLTAG_289__HTMLTAG_290___事後分析___HTMLTAG_291__HTMLTAG_292___完整災難復原模擬實驗室___HTMLTAG_293__HTMLTAG_294___