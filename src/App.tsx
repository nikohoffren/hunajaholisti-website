import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tarinamme from "./pages/Tarinamme";
import Tuotteemme from "./pages/Tuotteemme";
import Myyntiehdot from "./pages/Myyntiehdot";
import Tietosuojaseloste from "./pages/Tietosuojaseloste";
import Payment from "./Payment";
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "./components/Footer";
import "./output.css";
import { LanguageContext } from "./components/LanguageContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./components/Success";
import { CartProvider } from "./components/CartContext";

//* Call loadStripe outside of a component's render to avoid recreating the Stripe object on every render
const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? ""
);

function App() {
    const [language, setLanguage] = useState("fi");

    const contextValue = useMemo(
        () => ({ language, setLanguage }),
        [language, setLanguage]
    );

    return (
        <div className="flex flex-col min-h-screen">
            <CartProvider>
                <LanguageContext.Provider value={contextValue}>
                    <Navbar />
                    <div className="flex-grow">
                        <Elements stripe={stripePromise}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/tarinamme"
                                    element={<Tarinamme />}
                                />
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
                                <Route
                                    path="/checkout"
                                    element={<Checkout />}
                                />
                                <Route path="/success" element={<Success />} />
                            </Routes>
                        </Elements>
                    </div>
                    <Footer />
                </LanguageContext.Provider>
            </CartProvider>
        </div>
    );
}

export default App;
