import { NextResponse } from 'next/server';

type DownloadRequest = {
  name?: string;
  email?: string;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function POST(request: Request) {
  const payload = (await request.json()) as DownloadRequest;
  const name = payload.name?.trim();
  const email = payload.email?.trim();

  if (!name || !email) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please provide your name and email to download the e-book.',
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        success: false,
        message: 'Enter a valid email address to receive the e-book.',
      },
      { status: 400 },
    );
  }

  await sleep(800);

  return NextResponse.json({
    success: true,
    message: 'Thanks! The e-book download link is on its way to your inbox.',
  });
}
