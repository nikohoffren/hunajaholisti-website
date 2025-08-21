import React from "react";

interface PaymentIconProps {
  type: "card" | "google_pay" | "mobilepay" | "paypal";
  className?: string;
}

const PaymentIcons: React.FC<PaymentIconProps> = ({
  type,
  className = "w-8 h-8",
}) => {
  const icons = {
    card: (
      <div className="flex items-center justify-center space-x-2">
        <img
          src="/visa.png"
          alt="Visa"
          className={`${className} w-1/2`}
          style={{ objectFit: "contain" }}
        />
        <img
          src="/mastercard.png"
          alt="Mastercard"
          className={`${className} w-1/2`}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    google_pay: (
      <div className="overflow-hidden flex items-center justify-center">
        <img
          src="/googlepay.png"
          alt="Google Pay"
          className={`${className} scale-150`}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    mobilepay: (
      <img
        src="/mobilepay.png"
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
