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
              console.log("Payment successful:", paymentIntent);
            }
          });
      }
    }
  }, [stripe, searchParams]);

  return (
    <div className="pt-28 pb-20 page-shell">
      <div className="max-w-2xl mx-auto bg-honey-soft border border-amber-200/50 p-8 sm:p-10 text-center">
        <h1 className="section-heading text-3xl text-forest-800 mb-4">
          {language === "fi" ? "Maksu suoritettu" : "Payment successful"}
        </h1>
        <p className="text-forest-600 leading-relaxed mb-8">
          {language === "fi"
            ? "Kiitos ostoksestasi! Tilauksesi on nyt käsittelyssä ja lähetetään sinulle pian. Lähetimme myös tilausvahvistuksen ilmoittamaanne sähköpostiosoitteeseen."
            : "Thank you for your purchase! Your order is being processed and will be shipped out soon. Order confirmation has been sent to the email address you provided."}
        </p>
        <Link to="/tuotteemme" className="btn-primary">
          {language === "fi" ? "Jatka ostamista" : "Continue shopping"}
        </Link>
      </div>
    </div>
  );
};

export default Success;
