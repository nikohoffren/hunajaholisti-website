import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function Home() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  localStorage.setItem("userHasPurchased", "true");

  const [inProp, setInProp] = useState(false);
  const [textInProp, setTextInProp] = useState(false);

  React.useEffect(() => {
    setInProp(true);
    setTextInProp(true);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center my-20">
        <div className="sm:py-20"></div>
        <div className="py-5"></div>
        <div className="text-center">
          <CSSTransition in={textInProp} timeout={500} classNames="slide-text">
            <h1 className="text-5xl font-semibold text-yellow-400 mb-5">
              HUNAJAHOLISTIN HUNAJA
            </h1>
          </CSSTransition>
          <CSSTransition in={inProp} timeout={500} classNames="slide">
            <h5 className="text-yellow-200 mt-2 text-[1.5rem]">
              {language === "fi"
                ? "Pienen mehiläistarhan hunajaa"
                : "Honey from a small bee farm"}
            </h5>
          </CSSTransition>
          <div className="py-5"></div>
          <div className="py-5"></div>
          <CSSTransition in={textInProp} timeout={500} classNames="slide-text">
            <Link
              to="/tuotteemme"
              className="inline-block px-8 py-4 text-lg text-white bg-yellow-600 rounded-lg transform transition-all duration-200 hover:bg-yellow-500 hover:scale-105"
            >
              {language === "fi"
                ? "KATSO TÄSTÄ TUOTTEEMME"
                : "CHECK OUT OUR PRODUCTS HERE"}
            </Link>
          </CSSTransition>
        </div>

        <div className="sm:my-28"></div>
      </main>
    </>
  );
}
