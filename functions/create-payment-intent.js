const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { amount, customerDetails } = JSON.parse(event.body);

  const payment = await stripe.paymentIntents.create({
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
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ clientSecret: payment.client_secret }),
  };
};
