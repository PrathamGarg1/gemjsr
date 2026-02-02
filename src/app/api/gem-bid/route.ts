import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { b_no } = await req.json();

        if (!b_no) {
            return NextResponse.json({ error: 'Bid number required' }, { status: 400 });
        }

        return NextResponse.json({
            success: true,
            b_no: b_no,
            url: 'https://bidplus.gem.gov.in/all-bids'
        });

    } catch (error) {
        console.error('GeM Proxy Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
