import { NextResponse } from "next/server";

// TODO: Install and configure Stripe
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-04-10" });

interface CheckoutItem {
  productId: string;
  variant: string;
  size: string;
  quantity: number;
}

interface CheckoutRequestBody {
  items: CheckoutItem[];
}

export async function POST(request: Request) {
  try {
    const body: CheckoutRequestBody = await request.json();
    const { items } = body;

    // Validate request
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Keine Artikel im Warenkorb." },
        { status: 400 }
      );
    }

    for (const item of items) {
      if (!item.productId || !item.variant || !item.size || !item.quantity) {
        return NextResponse.json(
          { error: "Ungültige Artikeldaten." },
          { status: 400 }
        );
      }
    }

    // TODO: Replace this placeholder with real Stripe Checkout session creation.
    //
    // Example Stripe integration:
    //
    // const lineItems = items.map((item) => ({
    //   price_data: {
    //     currency: "eur",
    //     product_data: {
    //       name: `Pfotenkissen – ${item.variant} (${item.size})`,
    //       // images: [getProductImageUrl(item.productId)],
    //     },
    //     unit_amount: getPrice(item.productId, item.variant, item.size), // price in cents
    //   },
    //   quantity: item.quantity,
    // }));
    //
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card", "sepa_debit"],
    //   line_items: lineItems,
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/danke?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/warenkorb`,
    //   shipping_address_collection: { allowed_countries: ["DE", "AT", "CH"] },
    //   locale: "de",
    // });
    //
    // return NextResponse.json({ url: session.url });

    // Placeholder response — returns a fake checkout URL
    console.log("Checkout request received:", JSON.stringify(items, null, 2));

    return NextResponse.json({
      url: "/danke?session_id=placeholder_session_id",
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Beim Erstellen der Checkout-Sitzung ist ein Fehler aufgetreten." },
      { status: 500 }
    );
  }
}
