import Stripe from "stripe";

const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);

export const handler = async function (event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    console.log("Received request body:", event.body);

    const { amount, customerDetails, payment_method_id } = JSON.parse(
      event.body
    );

    console.log("Parsed data:", {
      amount,
      customerDetails: !!customerDetails,
      payment_method_id,
    });

    if (!amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Amount is required",
        }),
      };
    }

    if (!customerDetails) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Customer details are required",
        }),
      };
    }

    let paymentMethodTypes = ["card"]; //* Default to card only

    if (payment_method_id) {
      paymentMethodTypes = ["card", "google_pay", "apple_pay"];
    }

    const paymentIntentData = {
      amount: amount,
      currency: "eur",
      payment_method_types: paymentMethodTypes,
      metadata: {
        customerName: customerDetails.name || "",
        customerAddress: customerDetails.address || "",
        customerZip: customerDetails.zip || "",
        customerCity: customerDetails.city || "",
        customerEmail: customerDetails.email || "",
        customerPhone: customerDetails.phone || "",
        customerMessage: customerDetails.message || "",
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
