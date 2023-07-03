import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Tarinamme from "./pages/Tarinamme";
import Tuotteemme from "./pages/Tuotteemme";
import Myyntiehdot from "./pages/Myyntiehdot";
import Tietosuojaseloste from "./pages/Tietosuojaseloste";
import Payment from "./pages/Payment";
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./pages/Footer";
import "./output.css";
import { LanguageContext } from "./LanguageContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./Success";
import { CartProvider } from "./CartContext";

//* Call loadStripe outside of a component's render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? '');

function App() {
    const [language, setLanguage] = useState("fi");

    const contextValue = useMemo(
        () => ({ language, setLanguage }),
        [language, setLanguage]
    );

    return (
        <>
            <CartProvider>
                <LanguageContext.Provider value={contextValue}>
                    <Navbar />
                    <Elements stripe={stripePromise}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/tarinamme" element={<Tarinamme />} />
                            <Route
                                path="/tuotteemme"
                                element={<Tuotteemme />}
                            />
                            <Route
                                path="/myyntiehdot"
                                element={<Myyntiehdot />}
                            />
                            <Route
                                path="/tietosuojaseloste"
                                element={<Tietosuojaseloste />}
                            />
                            <Route path="/payment" element={<Payment />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/success" element={<Success />} />
                        </Routes>
                    </Elements>
                    <Footer />
                </LanguageContext.Provider>
            </CartProvider>
        </>
    );
}

export default App;
