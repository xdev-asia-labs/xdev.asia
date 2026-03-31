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
