---
id: 019d8b40-i101-7001-b010-laravel000101
title: 'Bài 1: Giới thiệu Laravel — Framework PHP Elegant nhất'
slug: bai-1-gioi-thieu-laravel
description: >-
  Laravel là gì, triết lý "elegant syntax". So sánh Laravel vs Symfony
  vs Django vs Spring. PHP 8.4 essentials (readonly, enums, fibers,
  named arguments). Laravel Sail, Herd setup.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Laravel Fundamentals"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<h2 id="1-laravel-la-gi"><strong>1. Laravel là gì?</strong></h2>

<p>Laravel là PHP framework phổ biến nhất, theo triết lý <strong>"elegant syntax"</strong> — code sạch, dễ đọc, developer experience đặt lên hàng đầu. Laravel cung cấp hệ sinh thái hoàn chỉnh: ORM (Eloquent), queue, cache, auth, testing, deployment.</p>

<table>
<thead><tr><th>Framework</th><th>Ngôn ngữ</th><th>ORM</th><th>Ưu điểm</th></tr></thead>
<tbody>
<tr><td>Laravel</td><td>PHP</td><td>Eloquent</td><td>Hệ sinh thái lớn, DX tuyệt vời</td></tr>
<tr><td>Symfony</td><td>PHP</td><td>Doctrine</td><td>Enterprise, linh hoạt</td></tr>
<tr><td>Django</td><td>Python</td><td>Django ORM</td><td>Batteries-included, admin built-in</td></tr>
<tr><td>Spring Boot</td><td>Java</td><td>JPA/Hibernate</td><td>Enterprise, microservices</td></tr>
</tbody>
</table>

<h2 id="2-php-84"><strong>2. PHP 8.4 Essentials</strong></h2>

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

<h2 id="3-setup"><strong>3. Cài đặt Laravel</strong></h2>

<pre><code class="language-bash"># Với Composer
composer create-project laravel/laravel my-app

# Với Laravel Installer
composer global require laravel/installer
laravel new my-app

# Với Laravel Sail (Docker)
curl -s "https://laravel.build/my-app?with=pgsql,redis" | bash
cd my-app && ./vendor/bin/sail up
</code></pre>

<h2 id="4-structure"><strong>4. Cấu trúc thư mục</strong></h2>

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

<p>Bài tiếp theo: <strong>Routing, Controllers & Middleware</strong>.</p>
