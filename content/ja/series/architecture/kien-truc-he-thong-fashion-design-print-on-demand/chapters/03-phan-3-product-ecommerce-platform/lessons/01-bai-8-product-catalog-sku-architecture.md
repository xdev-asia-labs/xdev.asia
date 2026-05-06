---
id: 019f0b20-a301-7001-e001-f2b8f9000301
title: 'レッスン 8: 製品カタログと SKU アーキテクチャ — バリアント管理と設計と製品のバインディング'
slug: bai-8-product-catalog-sku-architecture
description: >-
  POD の製品カタログ アーキテクチャ、SKU 管理戦略、基本製品 + デザイン = 販売可能な製品、バリエーション マトリックス (サイズ × カラー ×
  デザイン)、在庫なしモデル、製品データ モデル、マルチチャネル製品同期。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: 製品と電子商取引プラットフォーム'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6148" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6148)"/>

  <!-- Decorations -->
  <g>
    <circle cx="701" cy="173" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="903" cy="95" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="277" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.9089653438086,154 1005.9089653438086,192 973,211 940.0910346561914,192 940.0910346561914,154 973,135" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ アーキテクチャ — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: 製品カタログと SKU アーキテクチャ</tspan>
      <tspan x="60" dy="42">— バリアント管理と設計 - 製品</tspan>
      <tspan x="60" dy="42">バインディング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 製品と電子商取引プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-pod-product-model"><strong>1. POD 製品データモデル</strong></h2>

<p>POD では、製品は在庫に存在せず (在庫レス)、注文があった場合にのみ生産されます。製品型番は、 <strong>ベース商品×デザイン＝売れる商品</strong>。</p>

<pre><code class="language-text">Product Composition Model
┌────────────────────┐     ┌────────────────────┐
│   Base Product     │     │      Design        │
│ (from Supplier)    │     │  (from Designer)   │
│                    │     │                    │
│ - T-shirt          │     │ - Image file       │
│ - Hoodie           │  ×  │ - Print area       │
│ - Mug              │     │ - Color variants   │
│ - Phone case       │     │ - Placement config │
│                    │     │                    │
│ Variants:          │     │                    │
│ - Size (S,M,L,XL)  │     │                    │
│ - Color (20+)      │     │                    │
│ - Material         │     │                    │
└────────┬───────────┘     └────────┬───────────┘
         │                          │
         └──────────┬───────────────┘
                    ▼
         ┌────────────────────┐
         │  Sellable Product  │
         │  (Published SKU)   │
         │                    │
         │ SKU: TS-BLK-L-D42  │
         │ = T-shirt Black L  │
         │ + Design #42       │
         │                    │
         │ Variants: N × M    │
         │ (base × design)    │
         └────────────────────┘
</code></pre>

<h2 id="2-data-model"><strong>2. ドメインデータモデル</strong></h2>

<pre><code class="language-typescript">// Base Product: Template sản phẩm từ supplier (chưa có design)
interface BaseProduct {
  id: string;
  supplierId: string;
  name: string;                          // "Unisex Jersey T-Shirt"
  category: ProductCategory;
  
  // Print specifications
  printAreas: PrintArea[];               // Front, Back, Sleeve, etc.
  printMethods: PrintMethod[];           // DTG, DTF, Sublimation
  
  // Variants matrix
  availableSizes: Size[];                // S, M, L, XL, 2XL
  availableColors: ProductColor[];       // 20+ colors
  
  // Supplier info
  baseCost: Money;                       // Cost per unit from supplier
  productionTime: Duration;             // 2-5 business days
  
  // Constraints
  maxPrintDPI: number;                   // 300
  minOrderQuantity: number;              // 1 (POD) or bulk
  weight: Weight;                        // For shipping calculation
  
  status: 'active' | 'discontinued' | 'out_of_stock';
}

interface PrintArea {
  id: string;
  name: string;                          // "Front", "Back", "Left Sleeve"
  position: AreaPosition;
  maxWidth: number;                      // inches
  maxHeight: number;
  supportedMethods: PrintMethod[];
}

// Design: Tác phẩm thiết kế của designer
interface Design {
  id: string;
  designerId: string;
  title: string;
  description: string;
  
  // File assets
  files: {
    printFile: string;                   // High-res file URL (300+ DPI)
    preview: string;                     // Web preview
    thumbnail: string;
  };
  
  // Design metadata
  dimensions: { width: number; height: number; dpi: number };
  colorProfile: 'srgb' | 'adobe_rgb' | 'cmyk';
  hasTransparency: boolean;
  colorCount: number;
  
  // Placement configs per product type
  placements: DesignPlacement[];
  
  // AI-generated metadata
  aiTags: string[];
  aiCategory: string;
  aiColorPalette: string[];
  
  status: 'draft' | 'review' | 'approved' | 'published' | 'rejected';
}

// Sellable Product: Base Product + Design = SKU
interface SellableProduct {
  id: string;
  baseProductId: string;
  designId: string;
  
  // Published info
  title: string;                         // "Mountain Sunset Tee"
  description: string;
  slug: string;                          // "mountain-sunset-tee"
  
  // Pricing
  price: Money;                          // Retail price
  compareAtPrice?: Money;                // Original price (for discount display)
  
  // Generated SKU variants
  variants: ProductVariant[];
  
  // Visual assets (auto-generated mockups)
  images: ProductImage[];
  
  // Sales channels
  channels: SalesChannel[];
  
  // SEO
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  
  status: 'draft' | 'active' | 'archived';
  publishedAt?: Date;
}
</code></pre>

<h2 id="3-sku-strategy"><strong>3. SKU 生成戦略</strong></h2>

<pre><code class="language-typescript">// SKU Format: {ProductType}-{Color}-{Size}-{DesignID}
// Example: TS-BLK-L-D0042 = T-shirt, Black, Large, Design #42

interface SKUGenerator {
  generate(baseProduct: BaseProduct, design: Design): ProductVariant[];
}

function generateSKUVariants(
  baseProduct: BaseProduct,
  design: Design,
): ProductVariant[] {
  const variants: ProductVariant[] = [];
  const productCode = PRODUCT_CODES[baseProduct.category]; // 'TS', 'HD', 'MG'
  const designCode = `D${design.id.slice(-4).toUpperCase()}`;

  for (const color of baseProduct.availableColors) {
    // Check if design works on this color
    const compatibility = checkDesignColorCompatibility(design, color);
    if (!compatibility.compatible) continue;

    for (const size of baseProduct.availableSizes) {
      const sku = `${productCode}-${color.code}-${size.code}-${designCode}`;
      
      variants.push({
        id: generateVariantId(),
        sku,
        baseProductId: baseProduct.id,
        designId: design.id,
        color: color,
        size: size,
        
        // Pricing
        cost: calculateVariantCost(baseProduct, color, size),
        price: calculateRetailPrice(baseProduct, design, color, size),
        
        // No physical inventory — POD
        inventoryPolicy: 'continue_selling',   // Always available
        requiresShipping: true,
        
        // Weight for shipping
        weight: baseProduct.weight,
        
        // Auto-generated mockup for this specific variant
        mockupUrl: `/mockups/${sku}.webp`,
      });
    }
  }

  return variants;
}

// Variant matrix example for a single design on T-shirt:
// 6 sizes × 20 colors = 120 SKU variants per design
// 100 designs × 120 variants = 12,000 SKUs cho 1 product type
// Scale: 10 product types × 1,000 designs = 1.2M SKUs
</code></pre>

<h2 id="4-variant-matrix"><strong>4. バリアントマトリックスと在庫なしモデル</strong></h2>

<pre><code class="language-typescript">// POD Inventory: "Virtual" — không stock, chỉ track availability từ supplier
interface PODInventory {
  // Check if supplier can fulfill
  checkAvailability(variant: ProductVariant): Promise&lt;AvailabilityResult&gt;;
  
  // Sync supplier stock status
  syncSupplierStock(supplierId: string): Promise&lt;void&gt;;
  
  // Handle out-of-stock from supplier
  handleStockout(variantSku: string): Promise&lt;void&gt;;
}

interface AvailabilityResult {
  available: boolean;
  estimatedProductionTime: Duration;
  supplierStock: 'in_stock' | 'low_stock' | 'out_of_stock';
  
  // If primary supplier out of stock → fallback
  alternativeSuppliers: Array<{
    supplierId: string;
    cost: Money;
    productionTime: Duration;
  }>;
}

// Supplier catalog sync: Định kỳ sync danh sách base products từ suppliers
interface SupplierCatalogSync {
  syncInterval: Duration;               // Every 6 hours
  
  // API integration với các POD suppliers
  suppliers: Array<{
    id: string;
    name: string;                        // 'Printful', 'Printify', 'Gooten'
    apiType: 'rest' | 'graphql' | 'webhook';
    catalogEndpoint: string;
    
    // Product mapping (supplier product ID → our base product ID)
    productMapping: Map&lt;string, string&gt;;
  }>;
}
</code></pre>

<h2 id="5-product-search"><strong>5. 製品の検索と発見</strong></h2>

<pre><code class="language-typescript">// Elasticsearch/Meilisearch product index
interface ProductSearchIndex {
  id: string;
  title: string;
  description: string;
  designerName: string;
  
  // Facets
  category: string;
  tags: string[];
  colors: string[];
  sizes: string[];
  priceRange: { min: number; max: number };
  
  // AI-generated fields
  aiTags: string[];
  style: string;               // 'minimalist', 'streetwear', 'vintage'
  mood: string[];               // 'fun', 'dark', 'colorful'
  
  // Ranking signals
  salesCount: number;
  viewCount: number;
  favoriteCount: number;
  averageRating: number;
  
  // Vector embedding for semantic search
  designEmbedding: number[];    // CLIP embedding of design image
  textEmbedding: number[];      // Text embedding of title + description
}

// Hybrid search: keyword + semantic
async function searchProducts(query: string, filters: SearchFilters): Promise&lt;SearchResult&gt; {
  const results = await searchEngine.search({
    q: query,
    
    // Keyword matching
    attributesToSearchOn: ['title', 'description', 'tags', 'aiTags'],
    
    // Semantic vector search (if enabled)
    vector: await embedText(query),
    
    // Filters
    filter: [
      filters.category && `category = "${filters.category}"`,
      filters.minPrice && `priceRange.min >= ${filters.minPrice}`,
      filters.maxPrice && `priceRange.max <= ${filters.maxPrice}`,
      filters.colors?.length && `colors IN [${filters.colors.map(c => `"${c}"`).join(',')}]`,
    ].filter(Boolean),
    
    // Ranking
    rankingRules: [
      'words',             // Keyword relevance
      'typo',
      'proximity',
      'attribute',
      'sort',
      'exactness',
      'salesCount:desc',   // Popular products first
    ],
    
    // Facets for filter UI
    facets: ['category', 'tags', 'colors', 'sizes', 'priceRange', 'style'],
    
    limit: 24,
    offset: filters.page * 24,
  });

  return results;
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. まとめ</strong></h2>

<table>
<thead>
<tr><th>コンセプト</th><th>POD アプローチ</th><th>従来の電子商取引</th></tr>
</thead>
<tbody>
<tr><td>製品づくり</td><td>基本製品 × デザイン = SKU</td><td>倉庫からの固定 SKU</td></tr>
<tr><td>在庫</td><td>バーチャル（在庫レス）</td><td>物理的な在庫数</td></tr>
<tr><td>SKU 数</td><td>潜在的に数百万（組み合わせ）</td><td>数百から数千</td></tr>
<tr><td>製品画像</td><td>自動生成されたモックアップ</td><td>マニュアル撮影</td></tr>
<tr><td>価格設定</td><td>基本コスト + バリアントごとのマージン</td><td>SKUごとの固定価格</td></tr>
<tr><td>可用性</td><td>いつでも利用可能 (サプライヤーが許可)</td><td>在庫切れの可能性あり</td></tr>
<tr><td>検索</td><td>AI タグ + セマンティック + キーワード</td><td>手動による分類</td></tr>
</tbody>
</table>
