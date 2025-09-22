import path from 'node:path';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

type DownloadRequest = {
  name?: string;
  email?: string;
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

async function sendEbookEmail(name: string, email: string): Promise<void> {
  const templatePath = path.join(process.cwd(), 'templates', 'ebook-free.hbs');

  await sendEmail(email, 'Your E-book Download - Retouch Pro', templatePath, {
    name,
    email,
    domain: process.env.APP_URL || 'http://localhost:3000',
  });
}

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

  try {
    await sendEbookEmail(name, email);

    return NextResponse.json({
      success: true,
      message:
        'Thank you! The e-book download link has been sent to your email.',
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Error sending email. Please try again in a few minutes.',
      },
      { status: 500 },
    );
  }
}
