---
id: 019e1a00-aa01-7001-c001-k8sha000403
title: 第 18 課：POSTGRESQL 備份、PITR 和災難復原
slug: bai-18-postgresql-backup-pitr-va-disaster-recovery
description: 使用 Barman/S3、ScheduledBackup CRD、時間點復原 (PITR)、從備份還原叢集以及災難復原程序進行自動備份。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: 第 4 部分：使用 Patroni 和 CloudNativePG 實作 PostgreSQL HA
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7198" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7198)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="62" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="170" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="94" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="278" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="122" x2="1100" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="152" x2="1050" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.0429399400242,103.5 954.0429399400242,140.5 922,159 889.9570600599758,140.5 889.9570600599758,103.50000000000001 922,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：POSTGRESQL 備援、PITR 與</tspan>
      <tspan x="60" dy="42">災難復原</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：PostgreSQL HA 與 Patroni &amp; CloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 設定備份目標（S3/Ceph 物件儲存）</li>
<li>✅ 設定 ScheduledBackup CRD 以進行自動備份</li>
<li>✅ 練習時間點恢復 (PITR)</li>
<li>✅ 從備份還原叢集</li>
<li>✅ 災難復原程序</li>
</ul>

<hr>

<h2 id="phan-1-backup-architecture">第 1 部分：備份架構</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-setup-backup-s3">第 2 部分：設定備份目標__HTMLTAG_86___

<h3 id="21-ceph-rgw-s3">2.1。使用 Ceph RGW（S3 相容）</h3>
___程式碼區塊_1___

___程式碼區塊_2___

<h3 id="22-update-cluster-backup-config">2.2。使用備份配置更新叢集</h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-3-scheduled-backup">第 3 部分：計畫備份</h2>

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-4-pitr">第 4 部分：時間點恢復 (PITR)</h2>

<h3 id="41-simulate-data-loss">4.1。模擬資料遺失</h3>
___程式碼區塊_6___

<h3 id="42-restore-pitr">4.2。使用 PITR</h3> 恢復
___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="phan-5-dr-procedures">第 5 部分：災難復原程序</h2>

<h3 id="51-full-cluster-restore">5.1。完整群集恢復（無 PITR）</h3>
___程式碼區塊_9___

<h3 id="52-verify-backup-integrity">5.2。驗證備份完整性</h3>
___程式碼區塊_10___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_112__HTMLTAG_113___Barman + S3</strong>：基礎備援+連續WAL歸檔</li>
___HTMLTAG_116__HTMLTAG_117___ScheduledBackup</strong>：自動每日備份，首選備用</li>
___HTMLTAG_120__HTMLTAG_121___PITR</strong>：恢復到保留期間內的任意點</li>
___HTMLTAG_124__HTMLTAG_125___還原 = 從備份建立新叢集</strong>，然後切換</li>
___HTMLTAG_128__HTMLTAG_129___retentionPolicy：30天</strong>：保留備份30天</li>
___HTMLTAG_132__HTMLTAG_133___定期測試復原</strong>：驗證每月備份完整性</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：備用實驗室</h3>
<ul>
<li>設定備份目標 (S3/MinIO)</li>
<li>設定 ScheduledBackup，驗證已成功建立備份</li>
</ul>

<h3 id="bt2">練習 2：PITR 實驗室</h3>
<ul>
<li>插入數據，注意時間戳</li>
<li>刪除資料（模擬事故）</li>
<li>恢復到刪除前的時間戳記</li>
<li>驗證資料已恢復__HTMLTAG_158___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第 19 課：PostgreSQL 故障轉移測試和切換</strong>中，我們將測試故障轉移場景和計畫的切換。 </p>