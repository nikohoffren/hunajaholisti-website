import Stripe from "stripe";

const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);

export const handler = async function (event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { amount, customerDetails, payment_method_id } = JSON.parse(
      event.body
    );

    const paymentIntentData = {
      amount: amount,
      currency: "eur",
      payment_method_types: ["card"],
      metadata: {
        customerName: customerDetails.name,
        customerAddress: customerDetails.address,
        customerZip: customerDetails.zip,
        customerCity: customerDetails.city,
        customerEmail: customerDetails.email,
        customerPhone: customerDetails.phone,
        customerMessage: customerDetails.message,
      },
    };

    //* If a payment method ID is provided, attach it to the payment intent
    if (payment_method_id) {
      paymentIntentData.payment_method = payment_method_id;
      paymentIntentData.confirm = true;
    }

    const payment = await stripe.paymentIntents.create(paymentIntentData);

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: payment.client_secret }),
    };
  } catch (error) {
    console.error("Payment intent creation error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Payment intent creation failed",
        details: error.message,
      }),
    };
  }
};
