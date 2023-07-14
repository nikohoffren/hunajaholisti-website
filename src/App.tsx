import React, { useState, useMemo } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Products from "./pages/Products";
import SalesAndDeliveryConditions from "./pages/SalesAndDeliveryConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Payment from "./Payment";
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./layout/Footer";
import "./output.css";
import { LanguageContext } from "./components/LanguageContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./components/Success";
import { CartProvider } from "./components/CartContext";
import Modal from "./components/Modal";
import PrivateRoute from "./components/PrivateRoute";

//* Call loadStripe outside of a component's render to avoid recreating the Stripe object on every render
const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? ""
);

function App() {
    const [language, setLanguage] = useState("fi");
    const [cookieConsent, setCookieConsent] = useState(
        () => localStorage.getItem("cookieConsent") ?? ""
    );

    const contextValue = useMemo(
        () => ({ language, setLanguage }),
        [language, setLanguage]
    );

    return (
        <div className="flex flex-col min-h-screen">
            <CartProvider cookieConsent={cookieConsent}>
                <LanguageContext.Provider value={contextValue}>
                    <Navbar />
                    <div className="flex-grow">
                        <Elements stripe={stripePromise}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/tarinamme"
                                    element={<OurStory />}
                                />
                                <Route
                                    path="/tuotteemme"
                                    element={<Products />}
                                />
                                <Route
                                    path="/myyntiehdot"
                                    element={<SalesAndDeliveryConditions />}
                                />
                                <Route
                                    path="/tietosuojaseloste"
                                    element={<PrivacyPolicy />}
                                />
                                <Route path="/payment" element={<Payment />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route
                                    path="/checkout"
                                    element={
                                        <PrivateRoute
                                            path="/checkout"
                                            redirectTo="/"
                                            element={<Checkout />}
                                        />
                                    }
                                />
                                <Route path="/success" element={<Success />} />
                                {/* <Route
                                    path="/success"
                                    element={
                                        <PrivateRoute
                                            path="/success"
                                            redirectTo="/"
                                            element={<Success />}
                                        />
                                    }
                                /> */}
                            </Routes>
                        </Elements>
                    </div>
                    {cookieConsent === "" && (
                        <Modal
                            onAccept={() => {
                                setCookieConsent("true");
                                localStorage.setItem("cookieConsent", "true");
                            }}
                            onReject={() => {
                                setCookieConsent("false");
                                localStorage.setItem("cookieConsent", "false");
                            }}
                        />
                    )}
                    <Footer />
                </LanguageContext.Provider>
            </CartProvider>
        </div>
    );
}

export default App;
