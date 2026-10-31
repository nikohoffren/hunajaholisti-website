import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-forest-100 mt-auto">
      <div className="page-shell py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-2xl text-white mb-3">
              Hunajaholistin Hunaja
            </p>
            <p className="text-forest-300 leading-relaxed">
              Liitokuja 4 C, 03100 VIHTI
            </p>
            <p className="text-forest-300 mt-1">
              <a
                href="mailto:hunajaholisti@gmail.com"
                className="hover:text-amber-300 transition-colors"
              >
                hunajaholisti@gmail.com
              </a>
            </p>
            <p className="text-forest-300 mt-1">
              {language === "fi" ? "puh. 0" : "+358 "}44 0550575
            </p>
            <p className="text-forest-400 text-sm mt-3">
              {language === "fi" ? "Y-tunnus: " : "Business ID: "}
              3163385-5
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-amber-400 mb-4">
              {language === "fi" ? "Seuraa meitä" : "Follow us"}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/hunajaholisti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-forest-700 text-white hover:border-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/hunajaholisti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-forest-700 text-white hover:border-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-amber-400 mb-2">
              {language === "fi" ? "Tietoa" : "Info"}
            </p>
            <Link
              to="/myyntiehdot"
              className="text-forest-200 hover:text-amber-300 transition-colors"
            >
              {language === "fi"
                ? "Myynti- ja toimitusehdot"
                : "Sales and delivery conditions"}
            </Link>
            <Link
              to="/tietosuojaseloste"
              className="text-forest-200 hover:text-amber-300 transition-colors"
            >
              {language === "fi" ? "Tietosuojaseloste" : "Privacy Policy"}
            </Link>
            <a
              href="https://hunaja.net/hunajatietoa/hunaja/"
              className="text-forest-200 hover:text-amber-300 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {language === "fi" ? "Tietoa hunajasta" : "Honey information"}
            </a>
            <a
              href="https://www.valio.fi/reseptiryhmat/hunajareseptit/"
              className="text-forest-200 hover:text-amber-300 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {language === "fi" ? "Hunajareseptejä" : "Honey recipes"}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-forest-800 text-center text-sm text-forest-400">
          {language === "fi" ? "Tekijänoikeus" : "Copyright"} &#169; 2021-
          {currentYear}{" "}
          <a
            className="text-amber-400 hover:text-amber-300 transition-colors"
            href="https://nikohoffren.com"
            target="_blank"
            rel="noreferrer"
          >
            Niko Hoffrén
          </a>
        </div>
      </div>
    </footer>
  );
}
