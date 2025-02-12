import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };

  return (
    <footer className="backdrop-blur w-full bg-black bg-opacity-75 text-white py-4 px-8">
      <div className="container mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="mb-1 font-bold">Hunajaholistin Hunaja</p>
            <p className="">Liitokuja 4 C, 03100 VIHTI</p>
            <p className="">hunajaholisti@gmail.com</p>
            <p className="">
              {language === "fi" ? "puh. 0" : "+358 "}44 0550575
            </p>
            <p className="">
              {language === "fi" ? "Y-tunnus: " : "Business ID: "}
              3163385-5
            </p>
          </div>
          <div className="text-center mt-6">
            <p>
              {language === "fi"
                ? "Seuraa meitä somessa"
                : "Follow us on social media"}
            </p>
            <div className="mt-2">
              <a
                href="https://www.facebook.com/hunajaholisti"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl hover:scale-105 px-2"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/hunajaholisti"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-600 transition-colors duration-300 text-2xl hover:scale-105 px-2"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/myyntiehdot"
              className="text-white hover:text-blue-600 py-2"
            >
              {language === "fi"
                ? "Myynti- ja toimitusehdot"
                : "Sales and delivery conditions"}
            </Link>

            <br />
            <Link
              to="/tietosuojaseloste"
              className="text-white hover:text-blue-600 py-2"
            >
              {language === "fi" ? "Tietosuojaseloste" : "Privacy Policy"}
            </Link>
            <br />
            <a
              href=" https://hunaja.net/hunajatietoa/hunaja/"
              className="text-white hover:text-blue-600 py-2"
              target="_blank"
              rel="noreferrer"
            >
              {language === "fi" ? "Tietoa hunajasta" : "Honey information"}
            </a>
            <br />
            <a
              href="https://www.valio.fi/reseptiryhmat/hunajareseptit/"
              className="text-white hover:text-blue-600 py-2"
              target="_blank"
              rel="noreferrer"
            >
              {language === "fi" ? "Hunajareseptejä" : "Honey receipts"}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-m text-gray-200">
        {language === "fi" ? "Tekijänoikeus" : "Copyright"} &#169; 2021-2025{" "}
        <a
          className="text-red-200 hover:text-red-400"
          href="https://nikohoffren.com"
          target="_blank"
          rel="noreferrer"
        >
          Niko Hoffrén
        </a>
      </div>

      {/* <div className="mt-2 text-center text-sm text-gray-200">
        Developed with React
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
          <img src="/vite.svg" className="h-4 ml-1 mr-2" alt="Vite logo" />
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
          href="https://tailwindcss.com/"
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
        + Firebase
        <a
          href="https://firebase.google.com/?gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgMoc0M2B_wFfysfCjzTJA2VdnLLnINpcp_OU6cPLhzXvyl2_l-NieDOcaArpdEALw_wcB&gclsrc=aw.ds"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-gray-500 hover:text-gray-700"
        >
          <img
            src="/firebase.png"
            className="h-4 ml-1 mr-2"
            alt="Firebase logo"
          />
        </a>
        + Stripe
        <a
          href="https://stripe.com/en-fi"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-gray-500 hover:text-gray-700"
        >
          <img src="/stripe.png" className="h-4 ml-1 mr-2" alt="Stripe logo" />
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
      </div> */}
    </footer>
  );
}
