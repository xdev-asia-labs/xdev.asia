import { NextResponse } from 'next/server';
import { listMdxSlugs, getMdxContent } from '@/lib/content';

export async function GET() {
  try {
    const slugs = listMdxSlugs('showcase');

    const projects = await Promise.all(
      slugs.map(async (slug) => {
        try {
          const item = await getMdxContent('showcase', slug);
          if (!item) return null;

          return {
            id: slug,
            title: item.frontmatter.title,
            slug: slug,
            description: item.frontmatter.description || '',
            content: item.content,
            featured_image: item.frontmatter.featured_image || null,
            demo_url: item.frontmatter.demo_url || null,
            github_url: item.frontmatter.github_url || null,
            tech_stack: item.frontmatter.tech_stack || [],
            published_at: item.frontmatter.published_at || item.frontmatter.created_at,
          };
        } catch (error) {
          console.error(`Error loading showcase ${slug}:`, error);
          return null;
        }
      })
    );

    // Filter out null projects
    const validProjects = projects.filter((p) => p !== null);

    return NextResponse.json(validProjects);
  } catch (error) {
    console.error('Error fetching showcase:', error);
    return NextResponse.json({ error: 'Failed to fetch showcase' }, { status: 500 });
  }
}
