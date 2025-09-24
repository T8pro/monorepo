import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const paymentIntentId = formData.get('paymentIntentId') as string;
    const packageType = formData.get('packageType') as string;

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment intent ID is required' },
        { status: 400 },
      );
    }

    if (!packageType) {
      return NextResponse.json(
        { error: 'Package type is required' },
        { status: 400 },
      );
    }

    // Extract photos from FormData
    const photos = [];
    let index = 0;
    while (true) {
      const photoFile = formData.get(`photo_${index}`) as File | null;
      if (!photoFile) break;

      const photoId = formData.get(`photo_${index}_id`) as string;
      const photoName = formData.get(`photo_${index}_name`) as string;
      const photoType = formData.get(`photo_${index}_type`) as string;
      const photoSize = formData.get(`photo_${index}_size`) as string;
      const photoWidth = formData.get(`photo_${index}_width`) as string;
      const photoHeight = formData.get(`photo_${index}_height`) as string;

      photos.push({
        id: photoId,
        name: photoName,
        type: photoType,
        size: parseInt(photoSize),
        width: parseInt(photoWidth),
        height: parseInt(photoHeight),
        file: photoFile,
      });

      index++;
    }

    if (photos.length === 0) {
      return NextResponse.json(
        { error: 'No photos provided' },
        { status: 400 },
      );
    }

    // TODO: Verify payment intent with Stripe to ensure payment was successful
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    // if (paymentIntent.status !== 'succeeded') {
    //   return NextResponse.json({ error: 'Payment not confirmed' }, { status: 400 });
    // }

    // TODO: Process and upload photos to your storage service
    // This is where you would:
    // 1. Process each photo (resize, optimize, etc.)
    // 2. Upload to your storage service (AWS S3, Cloudinary, etc.)
    // 3. Save metadata to your database
    // 4. Send confirmation email to customer

    // Processing photos for package: ${packageType}
    // Payment Intent ID: ${paymentIntentId}

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // For now, return success
    return NextResponse.json({
      success: true,
      message: 'Photos processed successfully',
      processedCount: photos.length,
      packageType,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process photos' },
      { status: 500 },
    );
  }
}
