---
id: 019d8b40-c104-7001-b004-django00000104
title: 'Lesson 4: Class-Based Views & Forms'
slug: bai-4-class-based-views-va-forms
description: >-
  Class-Based Views (ListView, DetailView, CreateView, UpdateView, DeleteView).
  Django Forms, ModelForms, formsets. CSRF protection, form validation, file
  upload.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 1: Django Fundamentals'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: From Basics to Advanced'
  slug: django-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2930" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2930)"/>

  <!-- Decorations -->
  <g>
    <circle cx="683" cy="79" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="766" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="849" cy="285" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="932" cy="128" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="231" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="209" x2="1100" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="239" x2="1050" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.1051177665153,137 997.1051177665153,181 959,203 920.8948822334847,181 920.8948822334847,137 959,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Class-Based Views & Forms</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Django Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cbv"><strong>1. Class-Based Views</strong></h2>

<pre><code class="language-python">from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Product

class ProductListView(ListView):
    model = Product
    template_name = 'products/list.html'
    context_object_name = 'products'
    paginate_by = 20

    def get_queryset(self):
        qs = super().get_queryset().filter(is_active=True)
        search = self.request.GET.get('q')
        if search:
            qs = qs.filter(name__icontains=search)
        return qs

class ProductDetailView(DetailView):
    model = Product
    slug_field = 'slug'
    template_name = 'products/detail.html'

class ProductCreateView(CreateView):
    model = Product
    fields = ['name', 'description', 'price', 'category', 'image']
    template_name = 'products/form.html'
    success_url = reverse_lazy('products:list')

class ProductUpdateView(UpdateView):
    model = Product
    fields = ['name', 'description', 'price', 'stock']
    template_name = 'products/form.html'

class ProductDeleteView(DeleteView):
    model = Product
    success_url = reverse_lazy('products:list')
</code></pre>

<h2 id="2-forms"><strong>2. Django Forms</strong></h2>

<pre><code class="language-python">from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'slug', 'description', 'price', 'category', 'image']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
            'price': forms.NumberInput(attrs={'min': 0, 'step': '0.01'}),
        }

    def clean_price(self):
        price = self.cleaned_data['price']
        if price <= 0:
            raise forms.ValidationError('Giá phải lớn hơn 0')
        return price

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get('name')
        if name and len(name) < 3:
            self.add_error('name', 'Tên phải có ít nhất 3 ký tự')
        return cleaned_data

# Contact form (không liên kết model)
class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)
</code></pre>

<h2 id="3-form-view"><strong>3. Form in View</strong></h2>

<pre><code class="language-python">from django.shortcuts import render, redirect
from django.contrib import messages

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Xử lý form data
            send_contact_email(form.cleaned_data)
            messages.success(request, 'Gửi thành công!')
            return redirect('contact')
    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})
</code></pre>

<h2 id="4-formsets"><strong>4. Formsets</strong></h2>

<pre><code class="language-python">from django.forms import modelformset_factory, inlineformset_factory

# ModelFormSet
ProductFormSet = modelformset_factory(Product, fields=['name', 'price'], extra=3)

# InlineFormSet (parent-child)
ImageFormSet = inlineformset_factory(
    Product, ProductImage,
    fields=['image', 'alt_text'],
    extra=3,
    can_delete=True,
)
</code></pre>

<h2 id="5-file-upload"><strong>5. File Upload</strong></h2>

<pre><code class="language-python">def upload_view(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save()
            return redirect('products:detail', slug=product.slug)
    else:
        form = ProductForm()
    return render(request, 'products/form.html', {'form': form})
</code></pre>

<pre><code class="language-html">&lt;form method="post" enctype="multipart/form-data"&gt;
  {% csrf_token %}
  {{ form.as_div }}
  &lt;button type="submit"&gt;Lưu&lt;/button&gt;
&lt;/form&gt;
</code></pre>

<p>Next article: <strong>DRF Serializers & Views</strong> — Django REST Framework setup.</p>
