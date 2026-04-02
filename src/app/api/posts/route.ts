import { NextResponse } from 'next/server';
import { listMdxSlugs, getMdxContent } from '@/lib/content';
import { loadAuthors, loadCategories } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');
  const limit = parseInt(searchParams.get('limit') || '20');
  const page = parseInt(searchParams.get('page') || '1');

  try {
    const slugs = listMdxSlugs('blog');
    const authors = loadAuthors();
    const categories = loadCategories();

    const posts = await Promise.all(
      slugs.map(async (slug) => {
        try {
          const post = await getMdxContent('blog', slug);
          if (!post) return null;

          // Filter by category
          if (category && post.frontmatter.category !== category) {
            return null;
          }

          // Filter by tag
          if (tag && !post.frontmatter.tags?.includes(tag)) {
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
          console.error(`Error loading post ${slug}:`, error);
          return null;
        }
      })
    );

    // Filter out null posts and sort by date
    const validPosts = posts
      .filter((p) => p !== null)
      .sort((a: any, b: any) => {
        const dateA = new Date(a.published_at || a.created_at);
        const dateB = new Date(b.published_at || b.created_at);
        return dateB.getTime() - dateA.getTime();
      });

    // Pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedPosts = validPosts.slice(start, end);

    return NextResponse.json(paginatedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
