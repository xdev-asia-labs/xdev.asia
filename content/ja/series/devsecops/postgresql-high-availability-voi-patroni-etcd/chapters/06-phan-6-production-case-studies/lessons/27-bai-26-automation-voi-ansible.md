---
id: 019c9617-fbb2-70b7-a4db-23daa55ff807
title: 'レッスン 26: Ansible による自動化'
slug: bai-26-automation-voi-ansible
description: PostgreSQL HA クラスターのデプロイ、構成管理、自動テスト、CI/CD 統合のための Ansible プレイブックを作成します。
duration_minutes: 115
is_free: true
video_url: null
sort_order: 26
section_title: 'パート 6: 制作とケーススタディ'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 26</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 26: Ansible による自動化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 制作とケーススタディ_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンの後、次のことを行います:_</p><ul><li>Ansible を使用して Patroni クラスターのデプロイメントを自動化する_</li><li>プレイブックで構成を管理する_</li><li>自動化を実装するテスト_</li><li>データベースの変更をCI/CDに統合_</li><li>コードとしてのインフラストラクチャの原則を使用_</li></ul><h2 id="1-ansible-basics-for-postgresql">1。 PostgreSQL の Ansible の基本</h2><h3 id="11-install-ansible">1.1。 Ansible_</h3><pre><code class="language-bash"># Install Ansible
sudo apt-get update
sudo apt-get install -y ansible

# Or via pip
pip3 install ansible

# Verify
ansible --version
# ansible [core 2.15.5]
</code></pre><h3 id="12-inventory-file">1.2 をインストールします。インベントリ ファイル_</h3><pre><code class="language-ini"># inventory.ini
[postgres_cluster]
pg-node1 ansible_host=10.0.1.11 ansible_user=ubuntu
pg-node2 ansible_host=10.0.1.12 ansible_user=ubuntu
pg-node3 ansible_host=10.0.1.13 ansible_user=ubuntu

[etcd_cluster]
etcd-node1 ansible_host=10.0.1.11 ansible_user=ubuntu
etcd-node2 ansible_host=10.0.1.12 ansible_user=ubuntu
etcd-node3 ansible_host=10.0.1.13 ansible_user=ubuntu

[all:vars]
ansible_python_interpreter=/usr/bin/python3
ansible_ssh_private_key_file=~/.ssh/id_rsa
</code></pre><h3 id="13-ansible-configuration">1.3。 Ansible 構成</h3><pre><code class="language-ini"># ansible.cfg
[defaults]
inventory = inventory.ini
host_key_checking = False
retry_files_enabled = False
gathering = smart
fact_caching = jsonfile
fact_caching_connection = /tmp/ansible_facts
fact_caching_timeout = 86400

[ssh_connection]
ssh_args = -o ControlMaster=auto -o ControlPersist=60s
pipelining = True
</code></pre><h2 id="2-complete-patroni-deployment-playbook">2。 Patroni 導入プレイブック</h2><h3 id="21-main-playbook">2.1 を完了します。メイン プレイブック</h3><pre><code class="language-yaml"># site.yml
---
- name: Deploy PostgreSQL HA Cluster with Patroni
  hosts: all
  become: yes
  vars_files:
    - vars/main.yml
  roles:
    - common
    - etcd
    - postgresql
    - patroni
    - haproxy
    - monitoring
</code></pre><h3 id="22-variables">2.2。変数_</h3><pre><code class="language-yaml"># vars/main.yml
---
# PostgreSQL
postgresql_version: 18
postgresql_data_dir: /var/lib/postgresql/{{ postgresql_version }}/data
postgresql_bin_dir: /usr/lib/postgresql/{{ postgresql_version }}/bin

# Patroni
patroni_scope: postgres-cluster
patroni_namespace: /service/

# etcd
etcd_version: 3.5.11
etcd_data_dir: /var/lib/etcd
etcd_initial_cluster_token: etcd-cluster-token

# Cluster
cluster_nodes:
  - { name: pg-node1, ip: 10.0.1.11 }
  - { name: pg-node2, ip: 10.0.1.12 }
  - { name: pg-node3, ip: 10.0.1.13 }

# Passwords (use Ansible Vault in production!)
postgres_password: !vault |
  $ANSIBLE_VAULT;1.1;AES256
  ...encrypted...
replicator_password: !vault |
  $ANSIBLE_VAULT;1.1;AES256
  ...encrypted...
</code></pre><h3 id="23-common-role">2.3。共通の役割</h3><pre><code class="language-yaml"># roles/common/tasks/main.yml
---
- name: Update apt cache
  apt:
    update_cache: yes
    cache_valid_time: 3600

- name: Install common packages
  apt:
    name:
      - curl
      - wget
      - vim
      - git
      - htop
      - net-tools
      - python3
      - python3-pip
    state: present

- name: Set timezone
  timezone:
    name: Asia/Ho_Chi_Minh

- name: Configure sysctl for PostgreSQL
  sysctl:
    name: "{{ item.name }}"
    value: "{{ item.value }}"
    state: present
    reload: yes
  loop:
    - { name: 'vm.swappiness', value: '1' }
    - { name: 'vm.overcommit_memory', value: '2' }
    - { name: 'vm.dirty_ratio', value: '10' }
    - { name: 'vm.dirty_background_ratio', value: '3' }
    - { name: 'net.ipv4.tcp_keepalive_time', value: '60' }
    - { name: 'net.ipv4.tcp_keepalive_intvl', value: '10' }
    - { name: 'net.ipv4.tcp_keepalive_probes', value: '6' }

- name: Set system limits
  pam_limits:
    domain: postgres
    limit_type: "{{ item.type }}"
    limit_item: "{{ item.item }}"
    value: "{{ item.value }}"
  loop:
    - { type: 'soft', item: 'nofile', value: '65536' }
    - { type: 'hard', item: 'nofile', value: '65536' }
    - { type: 'soft', item: 'nproc', value: '8192' }
    - { type: 'hard', item: 'nproc', value: '8192' }
</code></pre><h3 id="24-etcd-role">2.4。 etcd ロール</h3><pre><code class="language-yaml"># roles/etcd/tasks/main.yml
---
- name: Create etcd user
  user:
    name: etcd
    shell: /bin/false
    system: yes
    home: "{{ etcd_data_dir }}"

- name: Download etcd
  get_url:
    url: "https://github.com/etcd-io/etcd/releases/download/v{{ etcd_version }}/etcd-v{{ etcd_version }}-linux-amd64.tar.gz"
    dest: /tmp/etcd.tar.gz

- name: Extract etcd
  unarchive:
    src: /tmp/etcd.tar.gz
    dest: /tmp
    remote_src: yes

- name: Install etcd binaries
  copy:
    src: "/tmp/etcd-v{{ etcd_version }}-linux-amd64/{{ item }}"
    dest: /usr/local/bin/{{ item }}
    mode: '0755'
    remote_src: yes
  loop:
    - etcd
    - etcdctl

- name: Create etcd data directory
  file:
    path: "{{ etcd_data_dir }}"
    state: directory
    owner: etcd
    group: etcd
    mode: '0755'

- name: Template etcd systemd service
  template:
    src: etcd.service.j2
    dest: /etc/systemd/system/etcd.service
  notify: restart etcd

- name: Start and enable etcd
  systemd:
    name: etcd
    state: started
    enabled: yes
    daemon_reload: yes
</code></pre><pre><code class="language-jinja2">{# roles/etcd/templates/etcd.service.j2 #}
[Unit]
Description=etcd key-value store
Documentation=https://github.com/etcd-io/etcd
After=network.target

[Service]
Type=notify
User=etcd
ExecStart=/usr/local/bin/etcd \
  --name {{ ansible_hostname }} \
  --data-dir {{ etcd_data_dir }} \
  --initial-advertise-peer-urls http://{{ ansible_default_ipv4.address }}:2380 \
  --listen-peer-urls http://{{ ansible_default_ipv4.address }}:2380 \
  --listen-client-urls http://{{ ansible_default_ipv4.address }}:2379,http://127.0.0.1:2379 \
  --advertise-client-urls http://{{ ansible_default_ipv4.address }}:2379 \
  --initial-cluster-token {{ etcd_initial_cluster_token }} \
  --initial-cluster {% for node in cluster_nodes %}{{ node.name }}=http://{{ node.ip }}:2380{% if not loop.last %},{% endif %}{% endfor %} \
  --initial-cluster-state new
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
</code></pre><h3 id="25-postgresql-role">2.5。 PostgreSQL ロール_</h3><pre><code class="language-yaml"># roles/postgresql/tasks/main.yml
---
- name: Add PostgreSQL apt key
  apt_key:
    url: https://www.postgresql.org/media/keys/ACCC4CF8.asc
    state: present

- name: Add PostgreSQL repository
  apt_repository:
    repo: "deb http://apt.postgresql.org/pub/repos/apt/ {{ ansible_distribution_release }}-pgdg main"
    state: present

- name: Install PostgreSQL
  apt:
    name:
      - "postgresql-{{ postgresql_version }}"
      - "postgresql-contrib-{{ postgresql_version }}"
      - "postgresql-server-dev-{{ postgresql_version }}"
    state: present
    update_cache: yes

- name: Stop and disable PostgreSQL (managed by Patroni)
  systemd:
    name: "postgresql@{{ postgresql_version }}-main"
    state: stopped
    enabled: no
  ignore_errors: yes

- name: Create PostgreSQL directories
  file:
    path: "{{ item }}"
    state: directory
    owner: postgres
    group: postgres
    mode: '0700'
  loop:
    - "{{ postgresql_data_dir }}"
    - /var/lib/postgresql/wal_archive
    - /var/lib/postgresql/backups
</code></pre><h3 id="26-patroni-role">2.6。パトローニの役割_</h3><pre><code class="language-yaml"># roles/patroni/tasks/main.yml
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
</code></pre><h2 id="3-deployment">3。導入_</h2><h3 id="31-run-playbook">3.1。プレイブック_</h3><pre><code class="language-bash"># Dry run (check mode)
ansible-playbook site.yml --check

# Execute
ansible-playbook site.yml

# With verbose output
ansible-playbook site.yml -vvv

# Specific tags
ansible-playbook site.yml --tags "postgresql,patroni"
</code></pre><h3 id="32-verify-deployment">3.2 を実行します。導入を確認</h3><pre><code class="language-yaml"># verify.yml
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
</code></pre><h2 id="4-configuration-management">4。構成管理</h2><h3 id="41-dynamic-configuration-update">4.1。動的構成の更新</h3><pre><code class="language-yaml"># update_config.yml
---
- name: Update Patroni configuration
  hosts: postgres_cluster
  become: yes
  vars:
    new_max_connections: 200
  tasks:
    - name: Update DCS configuration
      shell: |
        patronictl -c /etc/patroni/patroni.yml edit-config --apply - &lt;&lt;EOF
        postgresql:
          parameters:
            max_connections: {{ new_max_connections }}
        EOF
      run_once: true
      register: config_update

    - name: Restart nodes if needed
      shell: patronictl -c /etc/patroni/patroni.yml restart {{ patroni_scope }} {{ ansible_hostname }} --force
      when: "'Pending restart' in config_update.stdout"
</code></pre><h3 id="42-backup-automation">4.2。バックアップの自動化_</h3><pre><code class="language-yaml"># backup.yml
---
- name: Perform PostgreSQL backup
  hosts: postgres_cluster[0]  # Only on leader
  become: yes
  become_user: postgres
  vars:
    backup_dir: /var/lib/postgresql/backups
    backup_retention_days: 7
  tasks:
    - name: Create backup directory
      file:
        path: "{{ backup_dir }}"
        state: directory
        mode: '0700'

    - name: Run pg_basebackup
      shell: |
        pg_basebackup -D {{ backup_dir }}/backup_$(date +%Y%m%d_%H%M%S) \
          -Ft -z -Xs -P
      args:
        creates: "{{ backup_dir }}/backup_*"

    - name: Remove old backups
      find:
        paths: "{{ backup_dir }}"
        age: "{{ backup_retention_days }}d"
        recurse: yes
      register: old_backups

    - name: Delete old backups
      file:
        path: "{{ item.path }}"
        state: absent
      loop: "{{ old_backups.files }}"
</code></pre><h2 id="5-testing-automation">5。テストの自動化</h2><h3 id="51-molecule-for-testing">5.1。テスト用の分子_</h3><pre><code class="language-bash"># Install Molecule
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
</code></pre><h3 id="52-testinfra-for-validation">5.2。検証のためのテスト</h3><pre><code class="language-bash">pip3 install testinfra
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
</code></pre><h2 id="6-cicd-integration">6。 CI/CD の統合</h2><h3 id="61-gitlab-ci-example">6.1。 GitLab CI の例</h3><pre><code class="language-yaml"># .gitlab-ci.yml
stages:
  - lint
  - test
  - deploy_staging
  - deploy_production

variables:
  ANSIBLE_FORCE_COLOR: "true"

lint:
  stage: lint
  image: python:3.11
  before_script:
    - pip install ansible-lint yamllint
  script:
    - ansible-lint site.yml
    - yamllint .
  only:
    - merge_requests
    - main

test:
  stage: test
  image: python:3.11
  before_script:
    - pip install molecule molecule-plugins[docker] testinfra
  script:
    - molecule test
  only:
    - merge_requests
    - main

deploy_staging:
  stage: deploy_staging
  image: python:3.11
  before_script:
    - pip install ansible
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
  script:
    - ansible-playbook -i inventory/staging.ini site.yml
  only:
    - main
  environment:
    name: staging

deploy_production:
  stage: deploy_production
  image: python:3.11
  before_script:
    - pip install ansible
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
  script:
    - ansible-playbook -i inventory/production.ini site.yml
  only:
    - tags
  when: manual
  environment:
    name: production
</code></pre><h3 id="62-github-actions-example">6.2。 GitHub アクションの例_</h3><pre><code class="language-yaml"># .github/workflows/deploy.yml
name: Deploy Patroni Cluster

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: |
          pip install ansible-lint yamllint
      - name: Run linters
        run: |
          ansible-lint site.yml
          yamllint .

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install Molecule
        run: |
          pip install molecule molecule-plugins[docker]
      - name: Run Molecule tests
        run: |
          molecule test

  deploy_staging:
    needs: [lint, test]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install Ansible
        run: pip install ansible
      - name: Deploy to staging
        env:
          ANSIBLE_HOST_KEY_CHECKING: False
        run: |
          echo "${{ secrets.SSH_PRIVATE_KEY }}" &gt; private_key
          chmod 600 private_key
          ansible-playbook -i inventory/staging.ini site.yml --private-key=private_key
</code></pre><h2 id="7-best-practices">7。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Ansible Vault を使用</strong>&nbsp;- シークレットを暗号化</li><li><strong>べき等プレイブック</strong>&nbsp;- 複数回実行可能</li><li><strong>分子でのテスト</strong>&nbsp;- 本番前</li><li><strong>バージョン管理</strong>&nbsp;- すべての人にGitプレイブック_</li><li><strong>ドキュメント変数</strong>&nbsp;- README をクリア</li><li><strong>ロールを使用</strong>&nbsp;-組織</li><li><strong>タグタスク</strong>&nbsp;- 選択的実行</li><li><strong>CI/CD統合</strong>&nbsp;- 自動化テスト</li><li><strong>ドライラン</strong>&nbsp;- 常に最初に確認</li><li><strong>変更前のバックアップ</strong>&nbsp;- 安全性net</li></ol><h3 id="%E2%9D%8C-dont">❌ しないでください</h3><ol><li><strong>ハードコーディングしないでください秘密_</strong>&nbsp;- Vault を使用</li><li><strong>テストを省略しない</strong>&nbsp;- 最初にステージング_</li><li><strong>モジュールが存在する場合はシェルを使用しない</strong>&nbsp;- PostgreSQL モジュールを使用する_</li><li><strong>失敗したタスクを無視しない</strong>&nbsp;- エラーを処理する_</li><li><strong>バックアップなしで実行しない</strong>&nbsp;- 常にバックアップする最初_</li></ol><h2 id="8-lab-exercises">8。ラボ演習</h2><h3 id="lab-1-deploy-cluster-with-ansible">ラボ 1: Ansible を使用してクラスターをデプロイ</h3><p><strong>タスク</strong>:</p><ol><li>3 のインベントリをセットアップするノード_</li><li>ロールを含むプレイブックの作成</li><li>etcd クラスターのデプロイ_</li><li>PostgreSQL + Patroni のデプロイ_</li><li>クラスターの検証健康_</li></ol><h3 id="lab-2-configuration-management">ラボ 2: 構成管理</h3><p><strong>タスク</strong>:</p><ol><li>max_connections を更新プレイブック_</li><li>夜間バックアップの自動化_</li><li>DR フェイルオーバー用のプレイブックの作成_</li><li>構成ロールバックのテスト_</li><li>すべてを文書化するプレイブック</li></ol><h3 id="lab-3-cicd-pipeline">ラボ 3: CI/CD パイプライン</h3><p><strong>タスク</strong>:</p><ol><li>GitLab/GitHub のセットアップアクション_</li><li>リンティングステージを追加</li><li>分子テストを追加_</li><li>ステージングに自動的にデプロイ_</li><li>本番環境の手動承認_</li></ol><h3 id="lab-4-testing-with-molecule">ラボ4: Molecule を使用したテスト</h3><p><strong>タスク</strong>:</p><ol><li>Molecule シナリオの初期化</li><li>検証テストの作成_</li><li>テストの役割Docker コンテナ内_</li><li>クラスター機能の検証_</li><li>CI パイプラインへの統合_</li></ol><h2 id="9-t%E1%BB%95ng-k%E1%BA%BFt">9。概要_</h2><h3 id="automation-benefits">自動化のメリット_</h3><pre><code class="language-text">Manual vs Automated:
- Deployment time: 4 hours → 15 minutes
- Error rate: 30% → &lt; 1%
- Consistency: Variable → 100%
- Documentation: Outdated → Self-documenting
- Repeatability: Difficult → Trivial
</code></pre><h3 id="key-ansible-concepts">Ansible の主要な概念____HTMLTAG_276__CODEBLOCK_26___<h3 id="next-steps">次のステップ</h3><p>レッスン 27 では、表紙&nbsp;<strong>災害復旧訓練</strong>:</p><ul><li>DR計画手順</li><li>テスト方法</li><li>インシデント対応ワークフロー_</li><li>事後分析</li><li>完全な DR シミュレーション ラボ</li></ul>