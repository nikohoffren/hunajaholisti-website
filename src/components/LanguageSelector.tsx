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
    <div className={`inline-flex rounded-md border border-amber-700/15 overflow-hidden bg-transparent ${hoverClass}`}>
      <button
        onClick={() => handleClick("fi")}
        className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors duration-200
          ${
            language === "fi"
              ? "bg-forest-700/90 text-white"
              : "bg-transparent text-forest-700 hover:bg-honey/40"
          }`}
        aria-pressed={language === "fi"}
      >
        FI
      </button>
      <button
        onClick={() => handleClick("en")}
        className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-colors duration-200
          ${
            language === "en"
              ? "bg-forest-700/90 text-white"
              : "bg-transparent text-forest-700 hover:bg-honey/40"
          }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
