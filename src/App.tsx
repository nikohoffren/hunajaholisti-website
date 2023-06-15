import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Tarinamme from "./pages/Tarinamme";
import Tuotteemme from "./pages/Tuotteemme";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import './output.css';

import { LanguageContext } from "./LanguageContext";

function App() {
    const [language, setLanguage] = useState("fi");

    return (
        <>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tarinamme" element={<Tarinamme />} />
                    <Route path="/tuotteemme" element={<Tuotteemme />} />
                    {/* <Route path="/verkkokauppa" element={<Verkkokauppa />} /> */}
                </Routes>
                <Footer />
            </LanguageContext.Provider>
        </>
    );
}

export default App;
