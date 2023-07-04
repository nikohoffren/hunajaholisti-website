import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

export default function Home() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    return (
        <>
            <main className="flex flex-col items-center my-20">
                <div className="py-20"></div>
                <div className="py-5"></div>
                <div className="text-center">
                    <h1 className="text-5xl font-semibold text-yellow-400 mb-5">
                        HUNAJAHOLISTIN HUNAJA
                    </h1>

                    <h5 className="text-yellow-200 mt-2 text-lg">
                        {language === "fi"
                            ? "Pienen mehiläistarhan hunajaa"
                            : "Honey from a small bee farm"}
                    </h5>
                    <div className="py-5"></div>
                    <a
                        href="https://holvi.com/shop/WbXD2B/"
                        className="inline-block px-8 py-4 text-lg text-white bg-yellow-500 rounded-lg transform transition-all duration-200 hover:bg-yellow-600 hover:scale-105"
                        target="_blank"
                    >
                        {language === "fi"
                            ? "SIIRRY TÄSTÄ VERKKOKAUPPAAN"
                            : "GO TO ONLINE STORE"}
                    </a>
                </div>

                <div className="my-28"></div>
            </main>
        </>
    );
}
