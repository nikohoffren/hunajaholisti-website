import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../components/LanguageContext";

export default function OurStory() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    return (
        <>
            <div className="container mx-auto text-center mt-20">
                <h3 className="text-4xl font-semibold text-white">
                    {language === "fi" ? "TARINAMME" : "OUR STORY"}
                </h3>
            </div>
            <div className="container mx-auto my-8">
                <hr />
            </div>

            <div className="container mx-auto text-center text-white">
                <div className="w-1/2 mx-auto">
                    <img
                        className="w-1/2 h-1/2 object-cover rounded-full mx-auto mb-3"
                        src="HHheidi1.jpg"
                        alt="Heidi Kääriäinen"
                    />
                </div>
                <div className="px-4 py-5">
                    <p className="mb-2">
                        {language === "fi"
                            ? "Olen jo pienestä pitäen ollut kiinnostunut luonnosta ja sen monimuotoisuudesta. Mehiläistarhaus tuntui pitkään kaukaiselta haaveelta."
                            : "I have always been interested in nature and its diversity. Beekeeping seemed like a distant dream for a long time."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "Satuimme kerran sitten puhumaan yhdessä työkaverini kanssa mehiläisistä. Hän kertoi olleensa joskus pienenä tätinsä kaverina mehiläistarhoilla."
                            : "One day, my colleague and I happened to talk about bees. She told me that she had been a helper at her aunt's beekeeping operation when she was little."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "Aikamme siinä poristuamme kävi ilmi, että ehkäpä mehiläisten pito olisi minullekin täysin mahdollista. Siispä päätin ryhtyä toimeen."
                            : "As we chatted, it became clear that beekeeping might be entirely possible for me too. So I decided to take action."}
                    </p>
                    <br />
                    <br />
                    <p className="mb-2">
                        {language === "fi"
                            ? "On kiehtovaa seurata mehiläisten yhteistyötä ja sitä miten kaikilla pesässä on oma tehtävänsä."
                            : "It is fascinating to observe the collaboration of bees and how each bee has its own task in the hive."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "Tällä hetkellä mehiläistarhani sijaitsee Pohjois-Savossa."
                            : "Currently, my bee farm is located in Northern Savonia."}
                    </p>
                    {language === "fi" ? (
                        <p className="mb-2">
                            Mehiläistarhauksen arkea pääset vakoilemaan
                            seuraamalla Instagramissa tiliä{" "}
                            <a
                                href="https://www.instagram.com/hunajaholisti"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Hunajaholisti
                            </a>
                            .
                        </p>
                    ) : (
                        <p className="mb-2">
                            You can spy on everyday life in beekeeping by
                            following{" "}
                            <a
                                href="https://www.instagram.com/hunajaholisti"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                Hunajaholisti
                            </a>{" "}
                            on Instagram.
                        </p>
                    )}

                    <br />
                    <br />
                    <p>
                        <span className="font-bold">
                            {language === "fi"
                                ? "Hunajaisin terveisin, Heidi"
                                : "With honey-filled regards, Heidi"}
                        </span>
                    </p>
                    <div className="container mx-auto my-5 px-4 md:w-1/4">
                        <hr className="border-gray-400" />
                    </div>
                </div>
            </div>
        </>
    );
}
