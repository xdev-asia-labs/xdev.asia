---
id: 019d8b40-i604-7001-b010-laravel000604
title: 'Bài 22: Production Deployment & Monitoring'
slug: bai-22-production-deployment-va-monitoring
description: >-
  Zero-downtime deployment (Envoyer, Deployer). Laravel Telescope,
  Pulse monitoring. Sentry error tracking, structured logging.
  Prometheus metrics, health checks. Scaling strategies
  (Octane, load balancer, queue workers).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: Testing, Docker & Production"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-zero-downtime"><strong>1. Zero-Downtime Deployment</strong></h2>

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

<h2 id="2-pulse"><strong>2. Laravel Pulse Monitoring</strong></h2>

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

<h2 id="3-sentry"><strong>3. Sentry Error Tracking</strong></h2>

<pre><code class="language-bash">composer require sentry/sentry-laravel
php artisan sentry:publish
</code></pre>

<pre><code class="language-env">SENTRY_LARAVEL_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
SENTRY_TRACES_SAMPLE_RATE=0.1
</code></pre>

<h2 id="4-logging"><strong>4. Structured Logging</strong></h2>

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

<h2 id="5-health-checks"><strong>5. Health Checks</strong></h2>

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

<h2 id="6-scaling"><strong>6. Scaling Strategies</strong></h2>

<table>
<thead><tr><th>Chiến lược</th><th>Mô tả</th></tr></thead>
<tbody>
<tr><td>Octane</td><td>Swoole/FrankenPHP — giữ app trong memory</td></tr>
<tr><td>Queue Workers</td><td>Scale horizontal với nhiều workers</td></tr>
<tr><td>Read Replicas</td><td>Tách read/write database</td></tr>
<tr><td>CDN</td><td>Static assets, media files</td></tr>
<tr><td>Load Balancer</td><td>Nginx/HAProxy phân tải</td></tr>
<tr><td>Redis Cluster</td><td>Cache & session scaling</td></tr>
</tbody>
</table>

<p>Chúc mừng bạn đã hoàn thành series <strong>Laravel: Từ Cơ bản đến Nâng cao</strong>! 🎉</p>
