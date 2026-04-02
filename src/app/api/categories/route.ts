import { NextResponse } from 'next/server';
import { loadCategories } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    const categories = loadCategories();
    
    // Filter by type if provided
    const filtered = type 
      ? categories.filter((c) => c.type === type)
      : categories;

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
