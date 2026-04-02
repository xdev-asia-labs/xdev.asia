import { NextResponse } from 'next/server';
import { getMdxContent } from '@/lib/content';
import { loadAuthors, loadCategories } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const series = await getMdxContent('series', slug);

    if (!series) {
      return NextResponse.json({ error: 'Series not found' }, { status: 404 });
    }

    const authors = loadAuthors();
    const categories = loadCategories();

    const author = authors.find((a) => a.id === series.frontmatter.author_id);
    const category = categories.find((c) => c.slug === series.frontmatter.category);

    const response = {
      id: slug,
      title: series.frontmatter.title,
      slug: slug,
      description: series.frontmatter.description || null,
      content: series.content,
      featured_image: series.frontmatter.featured_image || null,
      level: series.frontmatter.level || 'Beginner',
      duration_hours: series.frontmatter.duration_hours || 0,
      lesson_count: series.frontmatter.lesson_count || 0,
      price: '0',
      is_free: true,
      view_count: series.frontmatter.view_count || 0,
      average_rating: 0,
      review_count: 0,
      enrollment_count: 0,
      published_at: series.frontmatter.published_at || series.frontmatter.created_at,
      author: author ? {
        id: author.id,
        name: author.name,
        avatar: author.avatar,
      } : null,
      category: category ? {
        id: category.id,
        name: category.name,
        slug: category.slug,
      } : null,
      tags: series.frontmatter.tags?.map((t: string) => ({ name: t, slug: t })) || [],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error fetching series ${slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch series' }, { status: 500 });
  }
}
