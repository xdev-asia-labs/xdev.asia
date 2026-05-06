---
id: 019d8b40-i302-7001-b010-laravel000302
title: 'Lesson 10: Authorization — Gates & Policies'
slug: bai-10-authorization-gates-va-policies
description: >-
  Gates, Policies, Permissions. Spatie Laravel Permission package. Resource
  authorization, policy auto-discovery. Blade @can directives. Super admin, role
  hierarchy.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 3: Authentication & Authorization'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: From Basics to Advanced'
  slug: laravel-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1726" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1726)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="124" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="100" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="218" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="76" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="144" x2="1100" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="174" x2="1050" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.7749907475932,174.5 1027.7749907475932,213.5 994,233 960.2250092524068,213.5 960.2250092524068,174.5 994,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Authorization — Gates & Policies</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Authentication & Authorization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-gates"><strong>1. Gates</strong></h2>

<pre><code class="language-php">// AppServiceProvider
use Illuminate\Support\Facades\Gate;

Gate::define('manage-products', function (User $user) {
    return $user->role === 'admin' || $user->role === 'staff';
});

Gate::define('update-product', function (User $user, Product $product) {
    return $user->id === $product->user_id || $user->role === 'admin';
});

// Sử dụng
if (Gate::allows('manage-products')) { ... }
Gate::authorize('update-product', $product);
</code></pre>

<h2 id="2-policies"><strong>2. Policies</strong></h2>

<pre><code class="language-bash">php artisan make:policy ProductPolicy --model=Product
</code></pre>

<pre><code class="language-php">namespace App\Policies;

class ProductPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create products');
    }

    public function update(User $user, Product $product): bool
    {
        return $user->id === $product->user_id
            || $user->hasRole('admin');
    }

    public function delete(User $user, Product $product): bool
    {
        return $user->hasRole('admin');
    }
}

// Controller
public function update(Request $request, Product $product)
{
    $this->authorize('update', $product);
    // ...
}
</code></pre>

<h2 id="3-spatie-permission"><strong>3. Spatie Laravel Permission</strong></h2>

<pre><code class="language-bash">composer require spatie/laravel-permission
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
</code></pre>

<pre><code class="language-php">use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles;
}

// Tạo roles & permissions
$admin = Role::create(['name' => 'admin']);
$editor = Role::create(['name' => 'editor']);

Permission::create(['name' => 'create products']);
Permission::create(['name' => 'edit products']);
$admin->givePermissionTo(Permission::all());
$editor->givePermissionTo(['create products', 'edit products']);

// Gán
$user->assignRole('editor');
$user->hasRole('admin'); // false
$user->hasPermissionTo('edit products'); // true
</code></pre>

<h2 id="4-blade"><strong>4. Blade Authorization</strong></h2>

<pre><code class="language-blade">@can('update', $product)
    &lt;a href="{{ route('products.edit', $product) }}"&gt;Sửa&lt;/a&gt;
@endcan

@role('admin')
    &lt;a href="/admin"&gt;Admin Panel&lt;/a&gt;
@endrole

@hasanyrole('admin|editor')
    &lt;x-editor-toolbar /&gt;
@endhasanyrole
</code></pre>

<p>Next article: <strong>OAuth2, Passport & Socialite</strong>.</p>
