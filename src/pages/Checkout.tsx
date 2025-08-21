import React, {
  ChangeEventHandler,
  useContext,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Spinner from "../components/Spinner";
import PaymentIcons from "../components/PaymentIcons";
import { CartContext } from "../components/CartContext";
import { LanguageContext } from "../components/LanguageContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const Checkout = () => {
  type Errors = {
    name?: string;
    address?: string;
    zip?: string;
    city?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  const [orderID, setOrderID] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    message: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isGooglePayAvailable, setIsGooglePayAvailable] = useState(true);
  const [isMobilePayAvailable, setIsMobilePayAvailable] = useState(true);
  const [isPayPalAvailable, setIsPayPalAvailable] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const totalAmount = state.total;
  const [errors, setErrors] = useState<Errors>({});

  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };

  //* Check for Google Pay, Mobile Pay, and PayPal availability
  useEffect(() => {
    if (stripe) {
      // Always show Google Pay and Mobile Pay buttons
      setIsGooglePayAvailable(true);
      setIsMobilePayAvailable(true);
      setIsPayPalAvailable(false); //! Disable PayPal for now

      const paymentRequest = stripe.paymentRequest({
        country: "FI",
        currency: "eur",
        total: {
          label: language === "fi" ? "Hunajaholisti" : "Hunajaholisti",
          amount: totalAmount,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      paymentRequest
        .canMakePayment()
        .then((result: any) => {
          console.log("Payment method availability check:", result);
          console.log("User agent:", navigator.userAgent);
          console.log(
            "Is mobile:",
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
          );

          const isMobileDevice =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            );

          console.log("Payment methods final status:", {
            googlePay: result?.googlePay,
            mobilePay: result?.mobilepay,
            isMobileDevice,
            environment: process.env.NODE_ENV,
            userAgent: navigator.userAgent,
          });
        })
        .catch((error) => {
          console.log("Payment method detection error:", error);
        });
    }
  }, [stripe, totalAmount, language]);

  const addOrderToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        name: customerDetails.name,
        address: customerDetails.address,
        zip: customerDetails.zip,
        city: customerDetails.city,
        email: customerDetails.email,
        phone: customerDetails.phone,
        message: customerDetails.message,
        totalAmount,
        products: state.cartItems,
        paymentMethod,
      });
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error adding document: ", e);
      }
    }
  };

  const validateForm = () => {
    let formErrors: Errors = {};

    if (language === "fi") {
      if (customerDetails.name === "") {
        formErrors.name = "Kirjoita nimesi";
      }
      if (customerDetails.address === "") {
        formErrors.address = "Kirjoita osoitteesi";
      }
      if (customerDetails.zip === "") {
        formErrors.zip = "Kirjoita postinumerosi";
      }
      if (customerDetails.city === "") {
        formErrors.city = "Kirjoita kaupunkisi";
      }
      if (customerDetails.email === "") {
        formErrors.email = "Kirjoita sähköpostiosoitteesi";
      }
      if (customerDetails.phone === "") {
        formErrors.phone = "Kirjoita puhelinnumerosi";
      }
    } else {
      if (customerDetails.name === "") {
        formErrors.name = "Name is required";
      }
      if (customerDetails.address === "") {
        formErrors.address = "Address is required";
      }
      if (customerDetails.zip === "") {
        formErrors.zip = "Zip is required";
      }
      if (customerDetails.city === "") {
        formErrors.city = "City is required";
      }
      if (customerDetails.email === "") {
        formErrors.email = "Email is required";
      }
      if (customerDetails.phone === "") {
        formErrors.phone = "Phone is required";
      }
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleCardPayment = async () => {
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalAmount, customerDetails }),
        }
      );

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        setLoading(false);
        return;
      }

      const clientSecret = data.clientSecret;
      const cardElement = elements.getElement(CardElement);

      if (cardElement) {
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });

        if (result.error) {
          alert(result.error.message);
          setLoading(false);
        } else {
          if (result.paymentIntent.status === "succeeded") {
            if (process.env.NODE_ENV === "development") {
              console.log("Payment succeeded!");
            }
            localStorage.setItem("userHasPurchased", "true");
            addOrderToFirestore();
            dispatch({ type: "CLEAR" });
            navigate("/success");
            setLoading(false);
          }
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Payment error:", error);
      }
      alert(
        language === "fi"
          ? "Maksuvirhe. Yritä uudelleen."
          : "Payment error. Please try again."
      );
      setLoading(false);
    }
  };

  const handleGooglePayPayment = async () => {
    if (!stripe) return;

    const paymentRequest = stripe.paymentRequest({
      country: "FI",
      currency: "eur",
      total: {
        label: language === "fi" ? "Hunajaholisti" : "Hunajaholisti",
        amount: totalAmount,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    //* Check if Google Pay is available before showing
    const canMakePayment = await paymentRequest.canMakePayment();

    if (!canMakePayment || !canMakePayment.googlePay) {
      alert(
        language === "fi"
          ? "Google Pay ei ole saatavilla tällä laitteella. Käytä korttimaksua."
          : "Google Pay is not available on this device. Please use card payment."
      );
      setLoading(false);
      return;
    }

    paymentRequest.on("paymentmethod", async (event: any) => {
      try {
        const response = await fetch(
          "/.netlify/functions/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: totalAmount,
              customerDetails,
              payment_method_id: event.paymentMethod.id,
            }),
          }
        );

        const data = await response.json();

        if (data.error) {
          alert(data.error);
          setLoading(false);
          return;
        }

        const { error } = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: event.paymentMethod.id,
        });

        if (error) {
          alert(error.message);
          setLoading(false);
        } else {
          localStorage.setItem("userHasPurchased", "true");
          addOrderToFirestore();
          dispatch({ type: "CLEAR" });
          navigate("/success");
          setLoading(false);
        }
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("Payment error:", error);
        }
        alert(
          language === "fi"
            ? "Maksuvirhe. Yritä uudelleen."
            : "Payment error. Please try again."
        );
        setLoading(false);
      }
    });

    paymentRequest.on("cancel", () => {
      setLoading(false);
    });

    paymentRequest.show();
  };

  const handleMobilePayPayment = async () => {
    if (!stripe) return;

    const paymentRequest = stripe.paymentRequest({
      country: "FI",
      currency: "eur",
      total: {
        label: language === "fi" ? "Hunajaholisti" : "Hunajaholisti",
        amount: totalAmount,
      },
      requestPayerName: true,
      requestPayerEmail: true,
      //* Mobile Pay specific configuration
      disableWallets: ["googlePay"], //* Disable Google Pay when using Mobile Pay
    });

    //* Check if Mobile Pay is available before showing
    const canMakePayment = await paymentRequest.canMakePayment();

    if (process.env.NODE_ENV === "development") {
      console.log("Mobile Pay canMakePayment result:", canMakePayment);
    }

    if (!canMakePayment || !canMakePayment.mobilepay) {
      console.log(
        "Mobile Pay not available. Available methods:",
        canMakePayment
      );
      alert(
        language === "fi"
          ? "Mobile Pay ei ole saatavilla tällä laitteella. Käytä korttimaksua."
          : "Mobile Pay is not available on this device. Please use card payment."
      );
      setLoading(false);
      return;
    }

    paymentRequest.on("paymentmethod", async (event: any) => {
      try {
        const response = await fetch(
          "/.netlify/functions/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: totalAmount,
              customerDetails,
              payment_method_id: event.paymentMethod.id,
            }),
          }
        );

        const data = await response.json();

        if (data.error) {
          alert(data.error);
          setLoading(false);
          return;
        }

        const { error } = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: event.paymentMethod.id,
        });

        if (error) {
          alert(error.message);
          setLoading(false);
        } else {
          localStorage.setItem("userHasPurchased", "true");
          addOrderToFirestore();
          dispatch({ type: "CLEAR" });
          navigate("/success");
          setLoading(false);
        }
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("Payment error:", error);
        }
        alert(
          language === "fi"
            ? "Maksuvirhe. Yritä uudelleen."
            : "Payment error. Please try again."
        );
        setLoading(false);
      }
    });

    paymentRequest.on("cancel", () => {
      setLoading(false);
    });

    paymentRequest.show();
  };

  const handlePayPalPayment = async () => {
    if (!stripe) return;

    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalAmount,
            customerDetails,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        setLoading(false);
        return;
      }

      const { error } = await stripe.confirmPayment({
        clientSecret: data.clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
      });

      if (error) {
        if (process.env.NODE_ENV === "development") {
          console.error("PayPal confirmation error:", error);
        }
        alert(`PayPal Error: ${error.message}`);
        setLoading(false);
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("PayPal payment error:", error);
      }
      alert(
        language === "fi"
          ? "Maksuvirhe. Yritä uudelleen."
          : "Payment error. Please try again."
      );
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    switch (paymentMethod) {
      case "card":
        await handleCardPayment();
        break;
      case "google_pay":
        await handleGooglePayPayment();
        break;
      case "mobilepay":
        await handleMobilePayPayment();
        break;
      case "paypal":
        await handlePayPalPayment();
        break;
      default:
        setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDetails({
      ...customerDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="py-10"></div>
      <div className="container mx-auto px-4 pt-16">
        <div className="p-6 backdrop-blur bg-white bg-opacity-5 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">
            {language === "fi" ? "Kassa" : "Checkout"}
          </h2>

          {/* Order Summary */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {language === "fi" ? "Tilauksen yhteenveto" : "Order Summary"}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {language === "fi" ? "Yhteensä:" : "Total:"}
              </span>
              <span className="text-xl font-bold text-gray-800">
                {(totalAmount / 100).toFixed(2)} €
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-100">
              {language === "fi"
                ? "Valitse maksutapa:"
                : "Select payment method:"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`p-4 border-2 rounded-lg transition-all duration-300 relative ${
                  paymentMethod === "card"
                    ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200"
                    : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-25 hover:shadow-md hover:scale-105"
                }`}
              >
                <div className="text-center relative">
                  <PaymentIcons type="card" className="w-26 h-20 mx-auto" />
                  {paymentMethod === "card" && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                </div>
              </button>

              {isGooglePayAvailable && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod("google_pay")}
                  className={`p-4 border-2 rounded-lg transition-all duration-300 relative ${
                    paymentMethod === "google_pay"
                      ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200"
                      : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-25 hover:shadow-md hover:scale-105"
                  }`}
                >
                  <div className="text-center relative">
                    <PaymentIcons type="google_pay" className="h-20 mx-auto" />
                    {paymentMethod === "google_pay" && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                </button>
              )}

              {isMobilePayAvailable && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod("mobilepay")}
                  className={`p-4 border-2 rounded-lg transition-all duration-300 relative ${
                    paymentMethod === "mobilepay"
                      ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200"
                      : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-25 hover:shadow-md hover:scale-105"
                  }`}
                >
                  <div className="text-center relative">
                    <PaymentIcons type="mobilepay" className="h-20 mx-auto" />
                    {paymentMethod === "mobilepay" && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                </button>
              )}

              {/* {isPayPalAvailable && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-4 border-2 rounded-lg transition-all duration-300 relative ${
                    paymentMethod === "paypal"
                      ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200"
                      : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-25 hover:shadow-md hover:scale-105"
                  }`}
                >
                  <div className="text-center relative">
                    <PaymentIcons type="paypal" className="h-20 mx-auto" />
                    {paymentMethod === "paypal" && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                </button>
              )} */}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Card Payment Element - only show when card is selected */}
            {paymentMethod === "card" && (
              <div className="p-4 border border-gray-300 rounded-md bg-white">
                <CardElement className="p-2 bg-white" />
              </div>
            )}

            {/* Customer Details Form */}
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Nimi:" : "Name:"}
              </label>
              <input
                name="name"
                type="text"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Postiosoite:" : "Address:"}
              </label>
              <input
                name="address"
                type="text"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.address && (
                <p className="mt-2 text-sm text-red-600">{errors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Postinumero:" : "Zip:"}
              </label>
              <input
                name="zip"
                type="number"
                value={customerDetails.zip}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.zip && (
                <p className="mt-2 text-sm text-red-600">{errors.zip}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Kaupunki:" : "City:"}
              </label>
              <input
                name="city"
                type="text"
                value={customerDetails.city}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.city && (
                <p className="mt-2 text-sm text-red-600">{errors.city}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Sähköposti:" : "Email:"}
              </label>
              <input
                name="email"
                type="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Puhelinnumero:" : "Phone:"}
              </label>
              <input
                name="phone"
                type="tel"
                value={customerDetails.phone}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-100">
                {language === "fi" ? "Viesti:" : "Message:"}
              </label>
              <textarea
                name="message"
                value={customerDetails.message}
                onChange={
                  handleInputChange as unknown as ChangeEventHandler<HTMLTextAreaElement>
                }
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            {/* Payment Button - show for all payment methods */}
            <button
              type="submit"
              disabled={!stripe || loading}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full md:w-auto flex justify-center items-center"
              style={{ minWidth: "150px" }}
            >
              {loading ? (
                <Spinner />
              ) : language === "fi" ? (
                "Maksa"
              ) : (
                "Proceed to Pay"
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="py-5"></div>
    </>
  );
};

export default Checkout;
