import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import ImageCarousel from "src/components/ImageCarousel";

export default function Gallery() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };

  return (
    <div className="pt-28 pb-20">
      <div className="page-shell text-center mb-12">
        <p className="text-amber-600 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
          {language === "fi" ? "Kuvia tarhalta" : "From the apiary"}
        </p>
        <h1 className="section-heading">
          {language === "fi" ? "Galleria" : "Gallery"}
        </h1>
        <p className="mt-4 text-forest-600 max-w-xl mx-auto">
          {language === "fi"
            ? "Katso vilaus mehiläistarhan arjesta ja luonnon keskellä tehtävästä työstä."
            : "A glimpse into daily life at the apiary and work among nature."}
        </p>
      </div>
      <div className="page-shell">
        <ImageCarousel />
      </div>
    </div>
  );
}
