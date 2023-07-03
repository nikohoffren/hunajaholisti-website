const stripe = require('stripe')(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = JSON.parse(event.body);

    const payment = await stripe.paymentIntents.create({
        amount: data.amount,
        currency: "eur",
        payment_method_types: ["card"],
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: payment.client_secret }),
    };
};
