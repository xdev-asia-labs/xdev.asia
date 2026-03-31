---
id: 019f0b20-a301-7001-e001-f2b8f9000301
title: 'Bài 8: Product Catalog & SKU Architecture — Variant Management & Design-Product Binding'
slug: bai-8-product-catalog-sku-architecture
description: >-
  Kiến trúc product catalog cho POD, SKU management strategy, base product + design = sellable product,
  variant matrix (size × color × design), inventory-less model, product data model,
  multi-channel product sync.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Product & E-Commerce Platform"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-pod-product-model"><strong>1. POD Product Data Model</strong></h2>

<p>Trong POD, product không tồn tại trong kho (inventory-less) — chỉ được sản xuất khi có đơn hàng. Mô hình product là <strong>Base Product × Design = Sellable Product</strong>.</p>

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

<h2 id="2-data-model"><strong>2. Domain Data Model</strong></h2>

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

<h2 id="3-sku-strategy"><strong>3. SKU Generation Strategy</strong></h2>

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

<h2 id="4-variant-matrix"><strong>4. Variant Matrix & Inventory-less Model</strong></h2>

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

<h2 id="5-product-search"><strong>5. Product Search & Discovery</strong></h2>

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

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Concept</th><th>POD Approach</th><th>Traditional E-commerce</th></tr>
</thead>
<tbody>
<tr><td>Product Creation</td><td>Base Product × Design = SKU</td><td>Fixed SKU from warehouse</td></tr>
<tr><td>Inventory</td><td>Virtual (inventory-less)</td><td>Physical stock count</td></tr>
<tr><td>SKU Count</td><td>Potentially millions (combinatorial)</td><td>Hundreds to thousands</td></tr>
<tr><td>Product Images</td><td>Auto-generated mockups</td><td>Manual photography</td></tr>
<tr><td>Pricing</td><td>Base cost + margin per variant</td><td>Fixed price per SKU</td></tr>
<tr><td>Availability</td><td>Always available (supplier permitting)</td><td>Out-of-stock possible</td></tr>
<tr><td>Search</td><td>AI tags + semantic + keyword</td><td>Manual categorization</td></tr>
</tbody>
</table>
