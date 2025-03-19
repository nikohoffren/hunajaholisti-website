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
  const [activeFin, setActiveFin] = useState(true);
  const [activeEn, setActiveEn] = useState(false);

  const handleClick = (lang: string) => {
    setLanguage(lang);

    if (lang === "fi") {
      setActiveFin(true);
      setActiveEn(false);
    } else {
      setActiveFin(false);
      setActiveEn(true);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleClick("fi")}
        className={`px-3 py-1 rounded-md transition-all duration-200 ease-in-out
          ${language === "fi"
            ? "bg-yellow-600 text-white"
            : "text-white hover:bg-yellow-600/50"}`}
      >
        FI
      </button>
      <button
        onClick={() => handleClick("en")}
        className={`px-3 py-1 rounded-md transition-all duration-200 ease-in-out
          ${language === "en"
            ? "bg-yellow-600 text-white"
            : "text-white hover:bg-yellow-600/50"}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
