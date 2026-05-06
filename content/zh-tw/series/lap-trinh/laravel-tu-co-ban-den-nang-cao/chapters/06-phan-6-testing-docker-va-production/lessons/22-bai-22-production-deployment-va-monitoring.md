---
id: 019d8b40-i604-7001-b010-laravel000604
title: 第 22 課：生產部署與監控
slug: bai-22-production-deployment-va-monitoring
description: >-
  零停機部署（Envoyer、Deployer）。 Laravel 望遠鏡，脈衝監測。 Sentry
  錯誤追蹤、結構化日誌記錄。普羅米修斯指標，健康檢查。擴展策略（Octane、負載平衡器、佇列工作執行緒）。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 22
section_title: 第 6 部分：測試、Docker 和生產
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: Laravel：從基礎到高級
  slug: laravel-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7324" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7324)"/>

  <!-- Decorations -->
  <g>
    <circle cx="952" cy="86" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="804" cy="278" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="656" cy="210" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="1008" cy="142" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="74" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="246" x2="1100" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="276" x2="1050" y2="346" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.507041555162,125.5 981.507041555162,166.5 946,187 910.492958444838,166.5 910.492958444838,125.50000000000001 946,105" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：生產部署與監控</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：測試、Docker 和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-zero-downtime"><strong>1. 零停機部署</strong></h2>

<pre><code class="language-bash"># Deployer (deployer.org)
composer require deployer/deployer --dev
</code></pre>

<pre><code class="language-php">// deploy.php
namespace Deployer;

require 'recipe/laravel.php';

host('production')
    ->set('remote_user', 'deploy')
    ->set('deploy_path', '/var/www/app');

task('deploy', [
    'deploy:prepare',
    'deploy:vendors',
    'artisan:storage:link',
    'artisan:config:cache',
    'artisan:route:cache',
    'artisan:view:cache',
    'artisan:migrate',
    'deploy:publish',
]);

after('deploy:failed', 'deploy:unlock');
</code></pre>

<h2 id="2-pulse"><strong>2.Laravel 脈衝監控</strong></h2>

<pre><code class="language-bash">composer require laravel/pulse
php artisan vendor:publish --provider="Laravel\Pulse\PulseServiceProvider"
php artisan migrate
</code></pre>

<pre><code class="language-php">// Dashboard tại /pulse
// Hiển thị: slow queries, exceptions, queue jobs, cache hits
Route::middleware(['auth', 'can:viewPulse'])->group(function () {
    Route::get('/pulse', function () {
        return view('vendor.pulse.dashboard');
    });
});
</code></pre>

<h2 id="3-sentry"><strong>3.哨兵錯誤追蹤</strong></h2>

<pre><code class="language-bash">composer require sentry/sentry-laravel
php artisan sentry:publish
</code></pre>

<pre><code class="language-env">SENTRY_LARAVEL_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
SENTRY_TRACES_SAMPLE_RATE=0.1
</code></pre>

<h2 id="4-logging"><strong>4. 結構化日誌記錄</strong></h2>

<pre><code class="language-php">// config/logging.php
'channels' => [
    'stack' => [
        'driver' => 'stack',
        'channels' => ['daily', 'stderr'],
    ],
    'daily' => [
        'driver' => 'daily',
        'path' => storage_path('logs/laravel.log'),
        'days' => 14,
    ],
],

// Sử dụng
Log::info('Order placed', ['order_id' => $order->id, 'total' => $order->total]);
</code></pre>

<h2 id="5-health-checks"><strong>5. 健康檢查</strong></h2>

<pre><code class="language-php">// routes/web.php
Route::get('/health', function () {
    try {
        DB::connection()->getPdo();
        Cache::store()->get('health-check');
        return response()->json(['status' => 'healthy']);
    } catch (\Exception $e) {
        return response()->json(['status' => 'unhealthy'], 503);
    }
});
</code></pre>

<h2 id="6-scaling"><strong>6. 擴展策略</strong></h2>

<table>
<thead><tr><th>策略</th><th>描述</th></tr></thead>
<tbody>
<tr><td>辛烷值</td><td>Swoole/FrankenPHP — 將應用程式保留在記憶體中</td></tr>
<tr><td>隊列工人</td><td>與許多工人橫向擴展</td></tr>
<tr><td>讀取副本</td><td>獨立的讀/寫資料庫</td></tr>
<tr><td>CDN</td><td>靜態資源、媒體文件</td></tr>
<tr><td>負載平衡器</td><td>Nginx/HAProxy 分配負載</td></tr>
<tr><td>Redis集群</td><td>緩存和會話擴展</td></tr>
</tbody>
</table>

<p>恭喜您完成系列 <strong>Laravel：從基礎到高級</strong>！ 🎉</p>
