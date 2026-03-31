---
id: 019d8b40-i302-7001-b010-laravel000302
title: 'Bài 10: Authorization — Gates & Policies'
slug: bai-10-authorization-gates-va-policies
description: >-
  Gates, Policies, Permissions. Spatie Laravel Permission package.
  Resource authorization, policy auto-discovery. Blade @can
  directives. Super admin, role hierarchy.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Authentication & Authorization"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>OAuth2, Passport & Socialite</strong>.</p>
