import { NextResponse } from 'next/server';
import { getMdxContent } from '@/lib/content';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const project = await getMdxContent('showcase', slug);

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const response = {
      id: slug,
      title: project.frontmatter.title,
      slug: slug,
      description: project.frontmatter.description || '',
      content: project.content,
      featured_image: project.frontmatter.featured_image || null,
      demo_url: project.frontmatter.demo_url || null,
      github_url: project.frontmatter.github_url || null,
      tech_stack: project.frontmatter.tech_stack || [],
      published_at: project.frontmatter.published_at || project.frontmatter.created_at,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error fetching showcase ${slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch showcase' }, { status: 500 });
  }
}
