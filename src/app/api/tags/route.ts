import { NextResponse } from 'next/server';
import { loadTags } from '@/lib/data';

export async function GET() {
  try {
    const tags = loadTags();
    return NextResponse.json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 });
  }
}
