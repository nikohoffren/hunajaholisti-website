import React, { useContext } from "react";
import { LanguageContext } from "/src/LanguageContext";

export default function Home() {
    const { language } = useContext(LanguageContext)
    return <>

    <main className="center margin">
        <div className="padding"></div>

        <div className= "text-box">
            <h1>{language === "fi" ? "HUNAJAHOLISTIN HUNAJA" : "HONEYHOLIC'S HONEY"}</h1>
            <h5 class="white-text">{language === "fi" ? "Pienen mehiläistarhan hunajaa" : "Honey from a small bee farm"}</h5>
            <div className="padding"></div>
            <a href="https://holvi.com/shop/WbXD2B/" className="hero-btn ff-accent" target="_blank">{language === "fi" ? "KATSO TÄSTÄ TUOTTEEMME" : "CHECK OUT OUR PRODUCTS HERE"}</a>
        </div>

        <div className="huge-padding"></div>
    </main>

    </>
}



