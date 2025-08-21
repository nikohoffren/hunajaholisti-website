import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { useStripe } from "@stripe/react-stripe-js";

const Success = () => {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  const stripe = useStripe();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Handle PayPal return
    if (stripe) {
      const payment_intent = searchParams.get("payment_intent");
      const payment_intent_client_secret = searchParams.get(
        "payment_intent_client_secret"
      );

      if (payment_intent && payment_intent_client_secret) {
        stripe
          .retrievePaymentIntent(payment_intent_client_secret)
          .then(({ paymentIntent }) => {
            if (paymentIntent && paymentIntent.status === "succeeded") {
              // Payment was successful, order processing is handled by Firebase trigger
              console.log("Payment successful:", paymentIntent);
            }
          });
      }
    }
  }, [stripe, searchParams]);

  return (
    <>
      <div className="py-20"></div>
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          {language === "fi" ? "Maksu suoritettu" : "Payment Successful"}
        </h2>
        <p className="text-gray-700 mb-4">
          {language === "fi"
            ? "Kiitos ostoksestasi! Tilauksesi on nyt käsittelyssä ja lähetetään sinulle pian. Lähetimme myös tilausvahvistuksen ilmoittamaanne sähköpostiosoitteeseen."
            : "Thank you for your purchase! Your order is being processed and will be shipped out soon. Order confirmation has been sent to the email address you provided."}
        </p>
        <div className="py-5"></div>
        <Link
          to="/tuotteemme"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          {language === "fi" ? "Jatka ostamista" : "Continue Shopping"}
        </Link>
      </div>
    </>
  );
};

export default Success;
