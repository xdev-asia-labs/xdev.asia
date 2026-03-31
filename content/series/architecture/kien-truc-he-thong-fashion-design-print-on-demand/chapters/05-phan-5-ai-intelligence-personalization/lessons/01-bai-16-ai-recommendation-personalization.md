---
id: 019f0b20-a501-7001-e001-f2b8f9000501
title: 'Bài 16: AI Recommendation & Personalization — Product Discovery, Collaborative Filtering & Dynamic Storefront'
slug: bai-16-ai-recommendation-personalization
description: >-
  AI recommendation engine cho POD, collaborative filtering, content-based filtering,
  hybrid approach, real-time personalization, dynamic storefront, A/B testing,
  embedding-based similarity, session-based recommendations.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: AI-Powered Intelligence & Personalization"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-recommendation-architecture"><strong>1. Recommendation System Architecture</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────┐
│                  Recommendation Engine                   │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ Collaborative│  │Content-Based │  │  Trending &   │  │
│  │  Filtering   │  │  Filtering   │  │  Popularity   │  │
│  │              │  │              │  │               │  │
│  │"Users who    │  │"Similar      │  │"Hot right now"│  │
│  │ bought X     │  │ designs to   │  │"Trending in   │  │
│  │ also bought" │  │ what you     │  │ streetwear"   │  │
│  │              │  │ viewed"      │  │               │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬────────┘  │
│         └─────────────────┼─────────────────┘           │
│                           ▼                              │
│                  ┌────────────────┐                      │
│                  │  Hybrid Ranker │                      │
│                  │  (ML scoring)  │                      │
│                  └───────┬────────┘                      │
│                          │                               │
│                  ┌───────▼────────┐                      │
│                  │ Personalization│                      │
│                  │  (user profile │                      │
│                  │   + context)   │                      │
│                  └───────┬────────┘                      │
└──────────────────────────┼──────────────────────────────┘
                           ▼
                   Ranked Product List
</code></pre>

<h2 id="2-collaborative-filtering"><strong>2. Collaborative Filtering</strong></h2>

<pre><code class="language-typescript">// User-Item interaction matrix
interface InteractionData {
  userId: string;
  productId: string;
  interactionType: InteractionType;
  timestamp: Date;
  weight: number;                    // Implicit feedback weight
}

type InteractionType =
  | 'view'          // weight: 1
  | 'click'         // weight: 2
  | 'add_to_cart'   // weight: 4
  | 'purchase'      // weight: 8
  | 'favorite'      // weight: 5
  | 'share'         // weight: 3
  | 'review_5star'  // weight: 10
  | 'return';       // weight: -5

// Matrix Factorization (ALS — Alternating Least Squares)
class CollaborativeFilterModel {
  private userFactors: Map&lt;string, number[]&gt;;   // User embedding vectors
  private itemFactors: Map&lt;string, number[]&gt;;   // Item embedding vectors
  private latentDim = 64;

  async train(interactions: InteractionData[]): Promise&lt;void&gt; {
    // Build sparse interaction matrix
    const matrix = buildSparseMatrix(interactions);
    
    // ALS training
    for (let epoch = 0; epoch < 20; epoch++) {
      // Fix items, optimize users
      this.userFactors = solveALS(matrix, this.itemFactors, 'user');
      // Fix users, optimize items
      this.itemFactors = solveALS(matrix, this.userFactors, 'item');
    }
  }

  recommend(userId: string, topK: number = 20): ScoredProduct[] {
    const userVector = this.userFactors.get(userId);
    if (!userVector) return this.popularItems(topK);

    // Dot product: user vector × all item vectors
    const scores: ScoredProduct[] = [];
    for (const [itemId, itemVector] of this.itemFactors) {
      const score = dotProduct(userVector, itemVector);
      scores.push({ productId: itemId, score });
    }

    return scores.sort((a, b) => b.score - a.score).slice(0, topK);
  }
}
</code></pre>

<h2 id="3-content-based"><strong>3. Content-Based Filtering (Visual Similarity)</strong></h2>

<pre><code class="language-typescript">// Dùng CLIP embeddings để tìm designs tương tự về visual
interface VisualSimilarityService {
  // Embed design image into vector space
  embedDesign(imageUrl: string): Promise&lt;number[]&gt;;
  
  // Find similar designs by vector similarity
  findSimilar(embedding: number[], topK: number): Promise&lt;SimilarDesign[]&gt;;
  
  // Search by text (CLIP text → image)
  searchByText(query: string, topK: number): Promise&lt;SimilarDesign[]&gt;;
}

// CLIP embedding pipeline
async function buildDesignEmbedding(designId: string): Promise&lt;number[]&gt; {
  const design = await designRepo.get(designId);
  
  // 1. Generate CLIP image embedding (768-dim vector)
  const imageEmbedding = await clipModel.encodeImage(design.thumbnailUrl);
  
  // 2. Text metadata embedding (from title + tags)
  const textEmbedding = await clipModel.encodeText(
    `${design.title} ${design.tags.join(' ')} ${design.style}`
  );

  // 3. Combine: weighted average
  const combined = weightedAverage(imageEmbedding, textEmbedding, 0.7, 0.3);

  // 4. Store in vector database
  await vectorDB.upsert({
    id: designId,
    vector: combined,
    metadata: {
      style: design.style,
      category: design.category,
      colors: design.colorPalette,
      tags: design.tags,
    },
  });

  return combined;
}

// Vector similarity search (Qdrant / Pinecone / pgvector)
async function findSimilarDesigns(
  queryVector: number[],
  filters: SimilarityFilters,
  topK: number = 20,
): Promise&lt;SimilarDesign[]&gt; {
  const results = await vectorDB.search({
    vector: queryVector,
    limit: topK,
    filter: {
      must: [
        filters.style && { key: 'style', match: { value: filters.style } },
        filters.category && { key: 'category', match: { value: filters.category } },
      ].filter(Boolean),
    },
    score_threshold: 0.5,  // Minimum cosine similarity
  });

  return results.map(r => ({
    designId: r.id,
    similarity: r.score,
    metadata: r.metadata,
  }));
}
</code></pre>

<h2 id="4-personalization"><strong>4. Real-time Personalization</strong></h2>

<pre><code class="language-typescript">// User profile for personalization
interface UserProfile {
  userId: string;
  
  // Inferred preferences
  preferredStyles: Map&lt;string, number&gt;;        // 'minimalist': 0.8, 'streetwear': 0.6
  preferredColors: Map&lt;string, number&gt;;        // '#1a1a2e': 0.9
  preferredCategories: Map&lt;string, number&gt;;    // 'tshirt': 0.7, 'hoodie': 0.3
  priceRange: { min: number; max: number };
  
  // Behavioral signals
  recentViews: string[];                       // Last 50 viewed product IDs
  purchaseHistory: string[];
  searchHistory: string[];
  
  // Context
  location: string;
  device: 'mobile' | 'desktop';
  timeOfDay: string;
  season: string;
}

// Session-based recommendations for new/anonymous users
interface SessionRecommender {
  getRecommendations(session: BrowsingSession): Promise&lt;ScoredProduct[]&gt;;
}

class SessionBasedRecommender implements SessionRecommender {
  async getRecommendations(session: BrowsingSession): Promise&lt;ScoredProduct[]&gt; {
    if (session.viewedProducts.length === 0) {
      // Cold start: trending + popular
      return this.getTrending(session.context);
    }

    // Build session embedding from viewed items
    const viewedEmbeddings = await Promise.all(
      session.viewedProducts.slice(-10).map(id => vectorDB.getVector(id))
    );
    
    // Average of recent views = "session intent" vector
    const sessionVector = averageVectors(viewedEmbeddings);

    // Find similar items (excluding already viewed)
    return findSimilarDesigns(sessionVector, {}, 20)
      .then(results => results.filter(r => 
        !session.viewedProducts.includes(r.designId)
      ));
  }
}
</code></pre>

<h2 id="5-recommendation-slots"><strong>5. Recommendation Placement Slots</strong></h2>

<pre><code class="language-typescript">// Different recommendation strategies for different page positions
const RECOMMENDATION_SLOTS: Record&lt;string, RecommendationConfig&gt; = {
  // Homepage
  homepage_trending: {
    strategy: 'trending',
    title: 'Xu hướng hot nhất',
    count: 12,
    refresh: '1h',
  },
  homepage_personalized: {
    strategy: 'personalized',
    title: 'Dành riêng cho bạn',
    count: 12,
    refresh: 'realtime',
    fallback: 'trending',      // If no user data
  },
  
  // Product detail page
  pdp_similar: {
    strategy: 'visual_similarity',
    title: 'Thiết kế tương tự',
    count: 8,
    contextRequired: 'productId',
  },
  pdp_also_bought: {
    strategy: 'collaborative',
    title: 'Người mua cũng thích',
    count: 8,
    contextRequired: 'productId',
  },
  
  // Cart page
  cart_upsell: {
    strategy: 'cross_sell',
    title: 'Kết hợp hoàn hảo',
    count: 4,
    contextRequired: 'cartItems',
  },
  
  // Post-purchase
  post_purchase: {
    strategy: 'next_purchase',
    title: 'Có thể bạn sẽ thích',
    count: 6,
    contextRequired: 'orderId',
  },
};
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Algorithm</th><th>Input</th><th>Best For</th><th>Cold Start?</th></tr>
</thead>
<tbody>
<tr><td>Collaborative (ALS)</td><td>User-item interactions</td><td>"Also bought" recommendations</td><td>No — needs history</td></tr>
<tr><td>Content-based (CLIP)</td><td>Design image + metadata</td><td>"Similar designs" visual match</td><td>Yes — works on item features</td></tr>
<tr><td>Session-based</td><td>Current browsing session</td><td>Anonymous user recommendations</td><td>Yes — uses session context</td></tr>
<tr><td>Trending/Popular</td><td>Aggregate sales + views</td><td>Homepage, cold start fallback</td><td>Yes</td></tr>
<tr><td>Hybrid Ranker</td><td>All above + user profile</td><td>Final personalized ranking</td><td>Degrades gracefully</td></tr>
</tbody>
</table>
