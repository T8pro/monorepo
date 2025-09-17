import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;
  const photo = payload.photo as { name: string; size: number } | undefined;

  if (!photo) {
    return NextResponse.json(
      { message: 'Photo is required.' },
      { status: 400 },
    );
  }

  // TODO: Persist the payload and photo reference in a real backend.
  return NextResponse.json(
    {
      success: true,
      receivedAt: new Date().toISOString(),
      payload,
    },
    { status: 200 },
  );
}
