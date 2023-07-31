import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageSelectorProps {
    setLanguage: (language: string) => void;
    hoverClass: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    setLanguage,
    hoverClass,
}) => {
    const { language } = useContext(LanguageContext);
    const [activeFin, setActiveFin] = useState(true); //set to fin language as default
    const [activeEn, setActiveEn] = useState(false);

    const handleClick = (lang: string) => {
        setLanguage(lang);

        if(lang=="fi"){
            setActiveFin(true);
            setActiveEn(false);
        }else{
            setActiveFin(false);
            setActiveEn(true);
        }
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => handleClick("fi")}
                className={`focus:outline-none ${
                    language === "fi" ? hoverClass : ""
                }`}
            >
                <img
                    src="./Flag_of_Finland.svg.png"
                    alt="Flag of Finland"
                    className={`cursor-pointer h-6 w-10 transition-transform duration-200 ease-in-out transform ${activeFin? `scale-105`:``} hover:scale-105`}
                />
            </button>
            <button
                onClick={() => handleClick("en")}
                className={`focus:outline-none ${
                    language === "en" ? hoverClass : ""
                }`}
            >
                <img
                    src="./flag-of-uk-and-us.jpg"
                    alt="Flag of UK"
                    className={`cursor-pointer h-6 w-10 transition-transform duration-200 ease-in-out transform ${activeEn? `scale-105`:``} hover:scale-105`}
                />
            </button>
        </div>
    );
};

export default LanguageSelector;
