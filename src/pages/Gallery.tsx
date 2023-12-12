import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/LanguageContext";
import Spinner from "../components/Spinner";
import ImageCarousel from "src/components/ImageCarousel";

export default function Gallery() {
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
      <div className="py-12" />
      <ImageCarousel />
    </>
  );
}
