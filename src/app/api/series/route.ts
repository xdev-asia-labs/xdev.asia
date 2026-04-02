import { NextResponse } from 'next/server';
import { listMdxSlugs, getMdxContent } from '@/lib/content';
import { loadAuthors, loadCategories } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '20');
  const page = parseInt(searchParams.get('page') || '1');

  try {
    const slugs = listMdxSlugs('series');
    const authors = loadAuthors();
    const categories = loadCategories();

    const series = await Promise.all(
      slugs.map(async (slug) => {
        try {
          const item = await getMdxContent('series', slug);
          if (!item) return null;

          // Filter by category
          if (category && item.frontmatter.category !== category) {
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
          console.error(`Error loading series ${slug}:`, error);
          return null;
        }
      })
    );

    // Filter out null series and sort by date
    const validSeries = series
      .filter((s) => s !== null)
      .sort((a: any, b: any) => {
        const dateA = new Date(a.published_at);
        const dateB = new Date(b.published_at);
        return dateB.getTime() - dateA.getTime();
      });

    // Pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedSeries = validSeries.slice(start, end);

    return NextResponse.json(paginatedSeries);
  } catch (error) {
    console.error('Error fetching series:', error);
    return NextResponse.json({ error: 'Failed to fetch series' }, { status: 500 });
  }
}
