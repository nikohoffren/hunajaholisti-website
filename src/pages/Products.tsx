import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { useState } from "react";
import Spinner from "../components/Spinner";

import { productsData } from "src/components/productsData";
import ProductCard from "src/components/ProductCard";


export default function Products() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };

    const [isLoading, setIsLoading] = useState(true);
    const imageLoaded = () => {
        setIsLoading(false);
    };

    return (
        <>
            <div className="py-5"></div>
            <div className="container mx-auto text-center mt-20">
                <h3 className="text-4xl font-semibold text-white">
                    {language === "fi" ? "TUOTTEEMME" : "PRODUCTS"}
                </h3>
            </div>
            <div className="container mx-auto my-8">
                <hr />
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-4">


                {productsData.map((p, idx) => (
                    <ProductCard
                        key={idx}
                        product={p}
                        lang={language}
                        head={<> {isLoading && <Spinner />}
                            <img
                                className="w-full h-48 object-cover"
                                src={p.image}
                                alt={language === "fi"
                                    ? p.fi.alt
                                    : p.en.alt}
                                onLoad={() => imageLoaded()}
                            /></>}
                        body={<>
                            <h5 className="text-2xl font-semibold text-white">
                                {language === "fi"
                                    ? p.fi.name
                                    : p.en.name}
                            </h5>
                            {
                                // since the code uses p.fi.description to iterate,
                                // instead of using p.fi.description[idx] in the loop
                                // it uses fiDescription
                                p.fi.description.map((fiDescription, idx) => (
                                    <p key={idx} className="mt-4 text-sky-100">
                                        {
                                            language === "fi" ? fiDescription : p.en.description[idx]
                                        }
                                    </p>


                                ))
                            }
                            {
                                // conditionally place a url
                                p.exInfoURL ?
                                    <a
                                        href={p.exInfoURL}
                                        target="_blank"
                                        className="text-yellow-600 hover:text-yellow-800"
                                    >
                                        {p.exInfoURL}
                                    </a> : "x"
                            }
                        </>}
                    />
                ))
                }
            </div >
        </>
    );
}
