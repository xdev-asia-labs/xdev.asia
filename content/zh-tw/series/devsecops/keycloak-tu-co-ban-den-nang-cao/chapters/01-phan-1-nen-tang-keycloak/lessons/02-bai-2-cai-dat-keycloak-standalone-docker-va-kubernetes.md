---
id: 019d8b30-b102-7001-c001-e0c5f8100102
title: 第 2 課：安裝 Keycloak - 獨立版、Docker 和 Kubernetes
slug: bai-2-cai-dat-keycloak-standalone-docker-va-kubernetes
description: 在裸機 (Ubuntu/CentOS)、Docker Compose 和 Kubernetes Operator 上安裝 Keycloak 26.x 的說明。設定資料庫後端（PostgreSQL、MySQL、MariaDB）、HTTPS/TLS、反向代理（Nginx、HAProxy）、主機名稱配置 v2 並在開發與生產模式下執行 Keycloak。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：Keycloak 平台
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-deployment-options-2026.png" alt="Keycloak Deployment Options" style="max-width: 800px; width: 100%; border-radius: 12px;" />
___HTMLTAG_2__HTMLTAG_3___3 Keycloak 部署方法：獨立、Docker Compose、Kubernetes Operator___HTMLTAG_4__HTMLTAG_5___
</div>

___HTMLTAG_7__HTMLTAG_8___1。系統需求___HTMLTAG_9__HTMLTAG_10___
<p>在安裝 Keycloak 26.x 之前，請確保您的系統符合以下要求：</p>

<ul>
___HTMLTAG_14__HTMLTAG_15__HTMLTAG_16___Java</strong>：JDK 17 或 21（建議使用 OpenJDK 21）___HTMLTAG_18__HTMLTAG_19___
___HTMLTAG_20__HTMLTAG_21__HTMLTAG_22___資料庫</strong>：PostgreSQL 13-16（推薦）、MySQL 8.0+、MariaDB 10.6+___HTMLTAG_24__HTMLTAG_25___
___HTMLTAG_26__HTMLTAG_27__HTMLTAG_28___RAM</strong>：至少 512MB（建議 2GB+ 用於生產）___HTMLTAG_30__HTMLTAG_31___
___HTMLTAG_32__HTMLTAG_33__HTMLTAG_34___CPU</strong>：至少 1 個核心（建議生產使用 2 個以上核心）___HTMLTAG_36__HTMLTAG_37___
___HTMLTAG_38__HTMLTAG_39__HTMLTAG_40___作業系統</strong>：Linux（Ubuntu 22.04/24.04、CentOS 9、RHEL 9）、macOS、Windows___HTMLTAG_42__HTMLTAG_43___
</ul>

___HTMLTAG_45__HTMLTAG_46___2。在裸機上安裝 (Ubuntu)___HTMLTAG_47__HTMLTAG_48___

___HTMLTAG_49__HTMLTAG_50___2.1。安裝 Java 21___HTMLTAG_51__HTMLTAG_52___
___預編碼_0___

___HTMLTAG_53__HTMLTAG_54___2.2。安裝 PostgreSQL___HTMLTAG_55__HTMLTAG_56___
___預編碼_1___

___HTMLTAG_57__HTMLTAG_58___2.3。下載並安裝 Keycloak___HTMLTAG_59__HTMLTAG_60___
___預編碼_2___

___HTMLTAG_61__HTMLTAG_62___2.4。建立管理員使用者___HTMLTAG_63__HTMLTAG_64___
___預編碼_3___

___HTMLTAG_65__HTMLTAG_66___3。使用 Docker 和 Docker Compose 安裝___HTMLTAG_67__HTMLTAG_68___

___HTMLTAG_69__HTMLTAG_70___3.1。簡單 Docker（開發）___HTMLTAG_71__HTMLTAG_72___
___預編碼_4___

___HTMLTAG_73__HTMLTAG_74___3.2。 Docker Compose（生產就緒）___HTMLTAG_75__HTMLTAG_76___
___預編碼_5___

___HTMLTAG_77__HTMLTAG_78___4。 Kubernetes Operator 部署___HTMLTAG_79__HTMLTAG_80___

___HTMLTAG_81__HTMLTAG_82___4.1。安裝 Keycloak Operator___HTMLTAG_83__HTMLTAG_84___
___預編碼_6___

___HTMLTAG_85__HTMLTAG_86___4.2。 Keycloak 自訂資源___HTMLTAG_87__HTMLTAG_88___
___預編碼_7___

___HTMLTAG_89__HTMLTAG_90___5。開發模式與生產模式___HTMLTAG_91__HTMLTAG_92___<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準__HTMLTAG_98___
<th>開發（啟動開發）</th>
<th>生產（開始）</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_107__HTMLTAG_108___資料庫___HTMLTAG_109__HTMLTAG_110___
<td>H2 嵌入（預設）</td>
<td>PostgreSQL/MySQL（必需）</td>
</tr>
<tr>
___HTMLTAG_117__HTMLTAG_118___HTTPS___HTMLTAG_119__HTMLTAG_120___
<td>可選</td>
<td>必需（或代理）</td>
</tr>
<tr>
___HTMLTAG_127__HTMLTAG_128___主機名稱___HTMLTAG_129__HTMLTAG_130___
<td>本地主機（自動）</td>
<td>必須設定主機名稱__HTMLTAG_134___
</tr>
<tr>
___HTMLTAG_137__HTMLTAG_138___快取___HTMLTAG_139__HTMLTAG_140___
<td>本地快取__HTMLTAG_142___
<td>分散式快取 (Infinispan)</td>
</tr>
<tr>
___HTMLTAG_147__HTMLTAG_148___主題快取___HTMLTAG_149__HTMLTAG_150___
<td>停用（熱重載）</td>
<td>已啟用</td>
</tr>
<tr>
___HTMLTAG_157__HTMLTAG_158___建構___HTMLTAG_159__HTMLTAG_160___
<td>無須先建構</td>
<td>應先執行 kc.sh 建置</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

___HTMLTAG_169__HTMLTAG_170___6。設定 HTTPS/TLS___HTMLTAG_171__HTMLTAG_172___
___預編碼_8___

___HTMLTAG_173__HTMLTAG_174___7。設定反向代理 (Nginx)___HTMLTAG_175__HTMLTAG_176___
___預編碼_9___

___HTMLTAG_177__HTMLTAG_178___8。建立 Systemd 服務___HTMLTAG_179__HTMLTAG_180___
___預編碼_10___
<pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl enable keycloak
sudo systemctl start keycloak</code></pre>