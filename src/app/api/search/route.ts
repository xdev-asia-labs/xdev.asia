import { NextResponse } from 'next/server';
import { listMdxSlugs, getMdxContent } from '@/lib/content';
import { loadAuthors, loadCategories } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim().length < 2) {
    return NextResponse.json({ 
      posts: [], 
      series: [] 
    });
  }

  const searchTerm = query.toLowerCase().trim();

  try {
    const [postSlugs, seriesSlugs] = await Promise.all([
      listMdxSlugs('blog'),
      listMdxSlugs('series'),
    ]);

    const authors = loadAuthors();
    const categories = loadCategories();

    // Search posts
    const posts = await Promise.all(
      postSlugs.map(async (slug) => {
        try {
          const post = await getMdxContent('blog', slug);
          if (!post) return null;

          // Check if query matches title, excerpt, or content
          const titleMatch = post.frontmatter.title?.toLowerCase().includes(searchTerm);
          const excerptMatch = post.frontmatter.excerpt?.toLowerCase().includes(searchTerm);
          const contentMatch = post.content?.toLowerCase().includes(searchTerm);

          if (!titleMatch && !excerptMatch && !contentMatch) {
            return null;
          }

          const author = authors.find((a) => a.id === post.frontmatter.author_id);
          const cat = categories.find((c) => c.slug === post.frontmatter.category);

          return {
            id: slug,
            title: post.frontmatter.title,
            slug: slug,
            excerpt: post.frontmatter.excerpt || null,
            featured_image: post.frontmatter.featured_image || null,
            type: 'blog',
            reading_time: post.frontmatter.reading_time || null,
            view_count: post.frontmatter.view_count || 0,
            published_at: post.frontmatter.published_at || post.frontmatter.created_at,
            author: author ? {
              id: author.id,
              name: author.name,
              avatar: author.avatar,
            } : null,
            category: cat ? {
              id: cat.id,
              name: cat.name,
              slug: cat.slug,
            } : null,
            tags: post.frontmatter.tags?.map((t: string) => ({ name: t, slug: t })) || [],
            comments_count: 0,
          };
        } catch (error) {
          console.error(`Error searching post ${slug}:`, error);
          return null;
        }
      })
    );

    // Search series
    const series = await Promise.all(
      seriesSlugs.map(async (slug) => {
        try {
          const item = await getMdxContent('series', slug);
          if (!item) return null;

          // Check if query matches title or description
          const titleMatch = item.frontmatter.title?.toLowerCase().includes(searchTerm);
          const descMatch = item.frontmatter.description?.toLowerCase().includes(searchTerm);

          if (!titleMatch && !descMatch) {
            return null;
          }

          const author = authors.find((a) => a.id === item.frontmatter.author_id);
          const cat = categories.find((c) => c.slug === item.frontmatter.category);

          return {
            id: slug,
            title: item.frontmatter.title,
            slug: slug,
            description: item.frontmatter.description || null,
            featured_image: item.frontmatter.featured_image || null,
            level: item.frontmatter.level || 'Beginner',
            duration_hours: item.frontmatter.duration_hours || 0,
            lesson_count: item.frontmatter.lesson_count || 0,
            price: '0',
            is_free: true,
            view_count: item.frontmatter.view_count || 0,
            average_rating: 0,
            review_count: 0,
            enrollment_count: 0,
            published_at: item.frontmatter.published_at || item.frontmatter.created_at,
            author: author ? {
              id: author.id,
              name: author.name,
              avatar: author.avatar,
            } : null,
            category: cat ? {
              id: cat.id,
              name: cat.name,
              slug: cat.slug,
            } : null,
            tags: item.frontmatter.tags?.map((t: string) => ({ name: t, slug: t })) || [],
          };
        } catch (error) {
          console.error(`Error searching series ${slug}:`, error);
          return null;
        }
      })
    );

    const validPosts = posts.filter((p) => p !== null).slice(0, 10);
    const validSeries = series.filter((s) => s !== null).slice(0, 10);

    return NextResponse.json({
      posts: validPosts,
      series: validSeries,
    });
  } catch (error) {
    console.error('Error searching:', error);
    return NextResponse.json({ error: 'Failed to search' }, { status: 500 });
  }
}
