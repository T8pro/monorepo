import { NextResponse } from 'next/server';

type VerifyRequest = {
  email: string;
};

export async function POST(request: Request) {
  const { email } = (await request.json()) as Partial<VerifyRequest>;

  const exists = false;

  return NextResponse.json(
    {
      email,
      exists,
    },
    { status: 200 },
  );
}
