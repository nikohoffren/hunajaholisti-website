import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
    PayPalButtons,
    usePayPalScriptReducer,
    FUNDING,
} from "@paypal/react-paypal-js";
import Spinner from "../components/Spinner";
import { CartContext } from "../components/CartContext";
import { LanguageContext } from "../components/LanguageContext";
import { collection, addDoc } from "firebase/firestore";
import db from "src/firebase";

const Checkout = () => {
    type Errors = {
        name?: string;
        address?: string;
        zip?: string;
        city?: string;
        email?: string;
        phone?: string;
    };

    const [orderID, setOrderID] = useState(null);
    const [customerDetails, setCustomerDetails] = useState({
        name: "",
        address: "",
        zip: "",
        city: "",
        email: "",
        phone: "",
    });
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { state, dispatch } = useContext(CartContext);
    const totalAmount = state.total;
    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
    const [errors, setErrors] = useState<Errors>({});

    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    const addOrderToFirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                name: customerDetails.name,
                address: customerDetails.address,
                zip: customerDetails.zip,
                city: customerDetails.city,
                email: customerDetails.email,
                phone: customerDetails.phone,
                totalAmount,
                products: state.cartItems,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        //* Form validation
        let formErrors: Errors = {};
        if (customerDetails.name === "") {
            formErrors.name = "Name is required!";
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
        setErrors(formErrors);

        //* If there are errors, stop the form from submitting
        if (Object.keys(formErrors).length > 0) {
            return;
        }

        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        //* Fetch the secret from the Netlify function
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
            } else {
                if (result.paymentIntent.status === "succeeded") {
                    console.log("Payment succeeded!");
                    addOrderToFirestore();
                    dispatch({ type: "CLEAR" });
                    navigate("/success");
                }
            }
        }
        setLoading(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomerDetails({
            ...customerDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleApprove = (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            console.log(details);
            addOrderToFirestore();
            dispatch({ type: "CLEAR" });
            navigate("/success");
        });
    };

    if (isPending) return <Spinner />;

    return (
        <>
            <div className="container mx-auto px-4 pt-16">
                <div className="p-6 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">
                        {language === "fi" ? "Kassa" : "Checkout"}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="p-4 border border-gray-300 rounded-md">
                            <CardElement className="p-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
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
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                {language === "fi"
                                    ? "Postiosoite:"
                                    : "Address:"}
                            </label>
                            <input
                                name="address"
                                type="text"
                                value={customerDetails.address}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            {errors.address && (
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.address}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
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
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.zip}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
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
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.city}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
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
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                {language === "fi"
                                    ? "Puhelinnumero:"
                                    : "Phone:"}
                            </label>
                            <input
                                name="phone"
                                type="tel"
                                value={customerDetails.phone}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            {errors.phone && (
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={!stripe || loading}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full md:w-auto"
                        >
                            {loading ? (
                                <Spinner />
                            ) : language === "fi" ? (
                                "Maksa"
                            ) : (
                                "Proceed to Pay"
                            )}
                        </button>
                        {/* <div className="mt-4">
                            <h3 className="mb-3 text-gray-700 mt-4">
                                {language === "fi"
                                    ? "Tai maksa PayPalilla:"
                                    : "Or Pay with PayPal:"}
                            </h3>
                            <PayPalButtons
                                fundingSource={FUNDING.PAYPAL}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: (
                                                        Number(totalAmount) /
                                                        100
                                                    ).toFixed(2),
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={handleApprove}
                            />
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;
