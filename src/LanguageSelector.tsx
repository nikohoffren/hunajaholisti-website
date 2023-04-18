import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageSelectorProps {
  setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
  const { language } = useContext(LanguageContext);

  const handleClick = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="language-selector">
      <button
        onClick={() => handleClick("fi")}
        className={language === "fi" ? "active" : ""}
      >
        <img
          src="./Flag_of_Finland.svg.png"
          alt=""
          className="language-flag"
        />
      </button>
      <button
        onClick={() => handleClick("en")}
        className={language === "en" ? "active" : ""}
      >
        <img
          src="./Flag_of_the_United_Kingdom_(1-2).svg.png"
          alt=""
          className="language-flag"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
