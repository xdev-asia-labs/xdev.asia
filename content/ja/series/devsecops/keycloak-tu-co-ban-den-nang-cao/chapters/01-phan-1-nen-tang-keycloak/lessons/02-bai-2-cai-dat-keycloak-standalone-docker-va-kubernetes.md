---
id: 019d8b30-b102-7001-c001-e0c5f8100102
title: 'レッスン 2: Keycloak のインストール - スタンドアロン、Docker、Kubernetes'
slug: bai-2-cai-dat-keycloak-standalone-docker-va-kubernetes
description: Keycloak 26.x をベアメタル (Ubuntu/CentOS)、Docker Compose、および Kubernetes Operator にインストールする手順。データベース バックエンド (PostgreSQL、MySQL、MariaDB)、HTTPS/TLS、リバース プロキシ (Nginx、HAProxy)、ホスト名構成 v2 を構成し、開発モードと本番モードで Keycloak を実行します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: Keycloak プラットフォーム'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-deployment-options-2026.png" alt="Keycloak Deployment Options" style="max-width: 800px; width: 100%; border-radius: 12px;" />
<p><em>3 Keycloak のデプロイ方法: スタンドアロン、Docker Compose、Kubernetes Operator</em></p>
</div>

<h2 id="1-yeu-cau-he-thong"><strong>1.システム要件</strong></h2>
<p>Keycloak 26.x をインストールする前に、システムが次の要件を満たしていることを確認してください:</p>

<ul>
<li><p><strong>Java</strong>: JDK 17 または 21 (OpenJDK 21 を推奨)</p></li>
<li><p><strong>データベース</strong>: PostgreSQL 13-16 (推奨)、MySQL 8.0+、MariaDB 10.6+</p></li>
<li><p><strong>RAM</strong>: 最小 512MB (運用環境では 2GB 以上を推奨)</p></li>
<li><p><strong>CPU</strong>: 最小 1 コア (運用環境では 2 コア以上を推奨)</p></li>
<li><p><strong>OS</strong>: Linux (Ubuntu 22.04/24.04、CentOS 9、RHEL 9)、macOS、Windows</p></li>
</ul>

<h2 id="2-cai-dat-bare-metal"><strong>2.ベアメタル (Ubuntu) にインストール</strong></h2>

<h3 id="21-cai-dat-java"><strong>2.1. Java 21</strong></h3> をインストールする
___プレコード_0___

<h3 id="22-cai-dat-postgresql"><strong>2.2. PostgreSQL をインストール</strong></h3>
___プレコード_1___

<h3 id="23-tai-va-cai-dat-keycloak"><strong>2.3. Keycloakをダウンロードしてインストール</strong></h3>
___プレコード_2___

<h3 id="24-tao-admin-user"><strong>2.4。管理者ユーザーの作成_</strong></h3>
___プレコード_3___

<h2 id="3-cai-dat-docker"><strong>3. Docker および Docker Compose を使用してインストール</strong></h2>

<h3 id="31-docker-don-gian"><strong>3.1.シンプルな Docker (開発)</strong></h3>
___プレコード_4___

<h3 id="32-docker-compose-production"><strong>3.2. Docker Compose (本番環境対応)</strong></h3>
___プレコード_5___

<h2 id="4-kubernetes-operator"><strong>4. Kubernetes オペレーターのデプロイ</strong></h2>

<h3 id="41-cai-dat-operator"><strong>4.1。 Keycloak Operator をインストール</strong></h3>
___プレコード_6___

<h3 id="42-keycloak-cr"><strong>4.2. Keycloakカスタムリソース</strong></h3>
___プレコード_7___

<h2 id="5-dev-vs-prod"><strong>5.開発モードと運用モード_</strong></h2><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準__HTMLTAG_98___
<th>開発 (開始-開発)</th>
<th>制作 (開始)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>データベース</strong></td>
<td>H2 埋め込み (デフォルト)</td>
<td>PostgreSQL/MySQL (必須)</td>
</tr>
<tr>
<td><strong>HTTPS</strong></td>
<td>オプション</td>
<td>必須 (またはプロキシ)</td>
</tr>
<tr>
<td><strong>ホスト名</strong></td>
<td>ローカルホスト (自動)</td>
<td>ホスト名を構成する必要があります__HTMLTAG_134___
</tr>
<tr>
<td><strong>キャッシュ</strong></td>
<td>ローカル キャッシュ__HTMLTAG_142___
<td>分散キャッシュ (Infinispan)</td>
</tr>
<tr>
<td><strong>テーマ キャッシュ</strong></td>
<td>無効化 (ホットリロード)</td>
<td>有効</td>
</tr>
<tr>
<td><strong>ビルド</strong></td>
<td>最初にビルドする必要はありません</td>
<td>_最初に kc.sh ビルドを実行する必要があります</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h2 id="6-cau-hinh-https"><strong>6. HTTPS/TLS の構成</strong></h2>
___プレコード_8___

<h2 id="7-reverse-proxy"><strong>7.リバース プロキシの構成 (Nginx)</strong></h2>
___プレコード_9___

<h2 id="8-systemd-service"><strong>8。 Systemd サービスの作成</strong></h2>
___プレコード_10___
___プレコード_11___