---
id: 019d8b40-i101-7001-b010-laravel000101
title: 第 1 課：Laravel 簡介－最優雅的 PHP 框架
slug: bai-1-gioi-thieu-laravel
description: >-
  什麼是 Laravel，「優雅語法」哲學。比較 Laravel、Symfony、Django、Spring。 PHP 8.4
  重點（唯讀、枚舉、纖程、命名參數）。 Laravel Sail，Herd 設定。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Laravel 基礎知識
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: Laravel：從基礎到高級
  slug: laravel-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3208" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3208)"/>

  <!-- Decorations -->
  <g>
    <circle cx="651" cy="223" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="753" cy="265" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="156" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="47" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.2487113059643,159 997.2487113059643,187 973,201 948.7512886940357,187 948.7512886940357,159 973,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：Laravel 簡介 — PHP 框架</tspan>
      <tspan x="60" dy="42">最優雅的</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Laravel 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-laravel-la-gi"><strong>1.Laravel是什麼？</strong></h2>

<p>從哲學上講，Laravel 是最受歡迎的 PHP 框架 <strong>“優雅的語法”</strong> — 程式碼乾淨、易於閱讀，開發人員體驗至上。 Laravel 提供了完整的生態系統：ORM（Eloquent）、佇列、快取、身份驗證、測試、部署。</p>

<table>
<thead><tr><th>框架</th><th>語言</th><th>ORM</th><th>優點</th></tr></thead>
<tbody>
<tr><td>拉維爾</td><td>PHP</td><td>雄辯</td><td>大生態系統，大DX</td></tr>
<tr><td>交響樂團</td><td>PHP</td><td>教義</td><td>企業化、靈活化</td></tr>
<tr><td>薑戈</td><td>蟒蛇</td><td>Django ORM</td><td>含電池，內建管理</td></tr>
<tr><td>春季啟動</td><td>爪哇</td><td>JPA/休眠</td><td>企業、微服務</td></tr>
</tbody>
</table>

<h2 id="2-php-84"><strong>2.PHP 8.4 要點</strong></h2>

<pre><code class="language-php">&lt;?php
// Enums
enum UserRole: string {
    case Admin = 'admin';
    case Staff = 'staff';
    case Customer = 'customer';
}

// Readonly properties
class Product {
    public function __construct(
        public readonly string $name,
        public readonly float $price,
    ) {}
}

// Named arguments
$user = User::create(
    name: 'John',
    email: 'john@example.com',
    role: UserRole::Customer,
);

// Match expression
$label = match($status) {
    'active' => 'Hoạt động',
    'inactive' => 'Tạm dừng',
    default => 'Không xác định',
};
</code></pre>

<h2 id="3-setup"><strong>3. 安裝 Laravel</strong></h2>

<pre><code class="language-bash"># Với Composer
composer create-project laravel/laravel my-app

# Với Laravel Installer
composer global require laravel/installer
laravel new my-app

# Với Laravel Sail (Docker)
curl -s "https://laravel.build/my-app?with=pgsql,redis" | bash
cd my-app && ./vendor/bin/sail up
</code></pre>

<h2 id="4-structure"><strong>4. 資料夾結構</strong></h2>

<pre><code class="language-text">my-app/
├── app/
│   ├── Http/Controllers/
│   ├── Models/
│   └── Providers/
├── config/
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── resources/views/
├── routes/
│   ├── web.php
│   └── api.php
├── storage/
├── tests/
├── .env
└── artisan
</code></pre>

<pre><code class="language-bash"># Artisan commands
php artisan serve          # Dev server
php artisan make:model Product -mfc  # Model + migration + factory + controller
php artisan migrate        # Chạy migrations
php artisan tinker         # REPL
</code></pre>

<p>下一篇： <strong>路由、控制器和中介軟體</strong>。</p>
