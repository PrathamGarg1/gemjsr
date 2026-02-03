import { NextResponse } from 'next/server';

const MODAL_URL = process.env.NEXT_PUBLIC_MODAL_URL || 'https://podshorts--smart-search-final-searchengine-search.modal.run';
const API_KEY = process.env.MODAL_API_KEY;

export async function POST(req: Request) {
  try {
    if (!API_KEY) {
      console.error('MODAL_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await req.json();

    const response = await fetch(`${MODAL_URL.replace(/\/$/, '')}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Backend error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Search proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
