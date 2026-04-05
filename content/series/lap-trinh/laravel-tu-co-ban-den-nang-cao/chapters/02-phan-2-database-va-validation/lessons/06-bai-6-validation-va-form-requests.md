---
id: 019d8b40-i202-7001-b010-laravel000202
title: 'Bài 6: Validation & Form Requests'
slug: bai-6-validation-va-form-requests
description: >-
  Validation rules, custom validation. Form Request classes,
  authorization. Error messages, localization. File validation,
  conditional validation. Custom validation rules.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Database & Validation"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4832" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4832)"/>

  <!-- Decorations -->
  <g>
    <circle cx="633" cy="209" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="699" cy="155" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="128" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="101" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="159" x2="1100" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="189" x2="1050" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="988.444863728671,142 988.444863728671,176 959,193 929.555136271329,176 929.555136271329,142 959,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Lập trình — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Validation &amp; Form Requests</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Database &amp; Validation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-validation"><strong>1. Validation cơ bản</strong></h2>

<pre><code class="language-php">public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:8|confirmed',
        'role' => ['required', Rule::in(['admin', 'staff', 'customer'])],
        'avatar' => 'nullable|image|max:2048',
        'tags' => 'array|max:5',
        'tags.*' => 'string|max:50',
    ]);

    User::create($validated);
}
</code></pre>

<h2 id="2-form-request"><strong>2. Form Request</strong></h2>

<pre><code class="language-bash">php artisan make:request StoreProductRequest
</code></pre>

<pre><code class="language-php">namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', Product::class);
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'slug' => ['required', Rule::unique('products')->ignore($this->product)],
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string|max:5000',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Tên sản phẩm là bắt buộc.',
            'price.min' => 'Giá phải lớn hơn hoặc bằng 0.',
        ];
    }
}

// Controller
public function store(StoreProductRequest $request)
{
    Product::create($request->validated());
}
</code></pre>

<h2 id="3-custom-rule"><strong>3. Custom Validation Rule</strong></h2>

<pre><code class="language-php">namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NoSpam implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $spamWords = ['viagra', 'casino', 'lottery'];
        foreach ($spamWords as $word) {
            if (str_contains(strtolower($value), $word)) {
                $fail("Nội dung :attribute chứa từ không được phép.");
            }
        }
    }
}

// Sử dụng
'description' => ['required', new NoSpam],
</code></pre>

<h2 id="4-conditional"><strong>4. Conditional Validation</strong></h2>

<pre><code class="language-php">public function rules(): array
{
    return [
        'payment_method' => 'required|in:card,bank_transfer',
        'card_number' => 'required_if:payment_method,card|digits:16',
        'bank_name' => 'required_if:payment_method,bank_transfer',
    ];
}
</code></pre>

<p>Bài tiếp theo: <strong>API Resources & Response</strong>.</p>
