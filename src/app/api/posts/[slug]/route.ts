import { NextResponse } from 'next/server';
import { getMdxContent } from '@/lib/content';
import { loadAuthors, loadCategories } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const post = await getMdxContent('blog', slug);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const authors = loadAuthors();
    const categories = loadCategories();

    const author = authors.find((a) => a.id === post.frontmatter.author_id);
    const category = categories.find((c) => c.slug === post.frontmatter.category);

    const response = {
      id: slug,
      title: post.frontmatter.title,
      slug: slug,
      excerpt: post.frontmatter.excerpt || null,
      content: post.content,
      featured_image: post.frontmatter.featured_image || null,
      type: 'blog',
      reading_time: post.frontmatter.reading_time || null,
      view_count: post.frontmatter.view_count || 0,
      meta: null,
      published_at: post.frontmatter.published_at || post.frontmatter.created_at,
      created_at: post.frontmatter.created_at,
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
      tags: post.frontmatter.tags?.map((t: string) => ({ name: t, slug: t })) || [],
      comments_count: 0,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
