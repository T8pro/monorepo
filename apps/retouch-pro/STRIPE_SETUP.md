# Stripe Integration Setup

This document explains how to set up Stripe payment integration for the retouch-pro app.

## Environment Variables

Create a `.env.local` file in the app root with the following variables:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

### Getting Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers** > **API keys**
3. Copy the **Publishable key** and **Secret key**
4. For testing, use the test keys (they start with `pk_test_` and `sk_test_`)
5. For production, use the live keys (they start with `pk_live_` and `sk_live_`)

## How It Works

### Payment Flow

1. User selects photos on the upload page
2. User clicks "Checkout" button
3. Checkout modal opens on the same page (photos are preserved)
4. Stripe PaymentElement is rendered with payment form
5. User enters payment details and submits
6. Payment is processed through Stripe
7. On success, photos are uploaded to your API
8. Photos are cleared from context only after successful upload
9. User is redirected to thank you page

### Key Components

- **`/app/providers.tsx`**: Wraps app with Stripe Elements provider
- **`/app/api/payment-intent/route.ts`**: Creates Stripe payment intents
- **`/app/api/upload-single-photo/route.ts`**: Processes individual photo uploads after payment (sequential queue)
- **`/app/api/upload-photos/route.ts`**: Legacy bulk upload endpoint (deprecated)
- **`/features/upload-images/checkout-modal/`**: Checkout modal component
- **`/features/upload-images/context/`**: Updated context with checkout state management

### Package Pricing

The app uses dynamic pricing based on photo count:

- **1-5 photos**: No Package ($15 per photo)
- **6-11 photos**: Quick Fix ($10 per photo)
- **12-23 photos**: Growth Accelerator ($8.33 per photo)
- **24+ photos**: Premium ($6 per photo)

## Testing

Use Stripe's test card numbers for testing:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires authentication**: 4000 0025 0000 3155

## Production Deployment

1. Update environment variables with live Stripe keys
2. Ensure your domain is added to Stripe's allowed origins
3. Test the complete payment flow in production

## Security Notes

- Never expose secret keys in client-side code
- Always validate payment amounts on the server
- Use HTTPS in production
- Implement proper error handling and logging
