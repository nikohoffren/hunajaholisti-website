import React from "react";

interface PaymentIconProps {
  type: "card" | "googlepay" | "mobilepay" | "paypal";
  className?: string;
}

const PaymentIcons: React.FC<PaymentIconProps> = ({
  type,
  className = "w-8 h-8",
}) => {
  const icons = {
    card: (
      <img
        src="/visa-mastercard.png"
        alt="Visa & Mastercard"
        className={className}
        style={{ objectFit: "contain" }}
      />
    ),
    googlepay: (
      <img
        src="/google-pay.png"
        alt="Google Pay"
        className={className}
        style={{ objectFit: "contain" }}
      />
    ),
    mobilepay: (
      <img
        src="/mobile-pay.png"
        alt="Mobile Pay"
        className={className}
        style={{ objectFit: "contain" }}
      />
    ),
    paypal: (
      <img
        src="/paypal.png"
        alt="PayPal"
        className={className}
        style={{ objectFit: "contain" }}
      />
    ),
  };

  return icons[type];
};

export default PaymentIcons;
