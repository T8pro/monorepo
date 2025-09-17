import { NextResponse } from 'next/server';

type VerifyRequest = {
  email: string;
};

export async function POST(request: Request) {
  const { email } = (await request.json()) as Partial<VerifyRequest>;

  // TODO: Replace with actual verification logic against your data source.
  const exists = false;

  return NextResponse.json(
    {
      email,
      exists,
    },
    { status: 200 },
  );
}
