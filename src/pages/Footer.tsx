import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Footer() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };

    return (
        <div className="bg-black bg-opacity-60 text-white py-4 px-8">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mt-4 space-y-4">
                    <div className="flex space-x-6 mb-4">
                        <a
                            href="https://www.facebook.com/hunajaholisti"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-blue-600 text-4xl transition-transform duration-200 ease-in-out transform hover:scale-105"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/hunajaholisti"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-purple-600 text-4xl transition-transform duration-200 ease-in-out transform hover:scale-105"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>

                    <p className="mb-2 font-bold">
                        {language === "fi"
                            ? "Hunajaholistin Hunaja"
                            : "Honeyholic's Honey"}
                    </p>

                    <p className="mb-1 font-bold">Liitokuja 4 C, 03100 VIHTI</p>

                    <p className="mb-1 font-bold">hunajaholisti@gmail.com</p>

                    <p className="mb-1 font-bold">
                        {language === "fi" ? "puh. 0" : "+358 "}44 0550575
                    </p>

                    <p className="mb-1 font-bold">
                        {language === "fi" ? "Y-tunnus: " : "Business ID: "}
                        3163385-5
                    </p>
                </div>

                <footer className="mt-8 text-center text-sm text-gray-200">
                    {language === "fi" ? "Tekijänoikeus" : "Copyright"} &#169;
                    2021-2023 Niko Hoffrén
                    <br />
                    Coded with React
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                    >
                        <img
                            src="/react.svg"
                            className="h-4 ml-1 mr-2 logos"
                            alt="React logo"
                        />
                    </a>
                    + Vite
                    <a
                        href="https://vitejs.dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                    >
                        <img
                            src="/vite.svg"
                            className="h-4 ml-1 mr-2"
                            alt="Vite logo"
                        />
                    </a>
                    + TypeScript
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                    >
                        <img
                            src="/typescript.png"
                            className="h-4 ml-1 mr-2"
                            alt="TypeScript logo"
                        />
                    </a>
                    + Tailwind CSS
                    <a
                        href=" https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                    >
                        <img
                            src="/tailwind.png"
                            className="h-4 ml-1 mr-2"
                            alt="Tailwind logo"
                        />
                    </a>
                    & Hosted by Netlify
                    <a
                        href="https://www.netlify.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                    >
                        <img
                            src="/netlify.png"
                            className="h-4 ml-1 mr-2"
                            alt="Netlify logo"
                        />
                    </a>
                </footer>
            </div>
        </div>
    );
}
