---
id: 019d8b40-c104-7001-b004-django00000104
title: 'Bài 4: Class-Based Views & Forms'
slug: bai-4-class-based-views-va-forms
description: >-
  Class-Based Views (ListView, DetailView, CreateView, UpdateView,
  DeleteView). Django Forms, ModelForms, formsets. CSRF protection,
  form validation, file upload.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Django Fundamentals"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

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

<h2 id="3-form-view"><strong>3. Form trong View</strong></h2>

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

<p>Bài tiếp theo: <strong>DRF Serializers & Views</strong> — Django REST Framework setup.</p>
