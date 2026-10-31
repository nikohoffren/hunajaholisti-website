import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/LanguageContext";
import Spinner from "../components/Spinner";

export default function OurStory() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <main>
      <section className="relative min-h-[55svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="HHkuva1.jpg"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/50 to-forest-900/25" />
        </div>
        <div className="relative page-shell w-full pb-12 pt-36 sm:pb-16">
          <p className="text-amber-300 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
            Hunajaholisti
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-2xl">
            {language === "fi" ? "Tarinamme" : "Our story"}
          </h1>
        </div>
      </section>

      <section className="page-shell py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative sticky top-28">
              {isLoading && <Spinner />}
              <img
                className="w-full aspect-[4/5] object-cover shadow-2xl shadow-forest-900/10"
                src="HHheidi1.jpg"
                alt="Heidi Kääriäinen"
                onLoad={() => imageLoaded()}
              />
              <p className="mt-4 font-display text-xl text-forest-900">
                Heidi Kääriäinen
              </p>
              <p className="text-forest-500 text-sm tracking-wide uppercase">
                {language === "fi" ? "Mehiläistarhaaja" : "Beekeeper"}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-forest-700 text-lg leading-relaxed">
            <p>
              {language === "fi"
                ? "Olen jo pienestä pitäen ollut kiinnostunut luonnosta ja sen monimuotoisuudesta. Mehiläistarhaus tuntui pitkään kaukaiselta haaveelta."
                : "I have always been interested in nature and its diversity. Beekeeping seemed like a distant dream for a long time."}
            </p>
            <p>
              {language === "fi"
                ? "Satuimme kerran sitten puhumaan yhdessä työkaverini kanssa mehiläisistä. Hän kertoi olleensa joskus pienenä tätinsä kaverina mehiläistarhoilla."
                : "One day, my colleague and I happened to talk about bees. She told me that she had been a helper at her aunt's beekeeping operation when she was little."}
            </p>
            <p>
              {language === "fi"
                ? "Aikamme siinä poristuamme kävi ilmi, että ehkäpä mehiläisten pito olisi minullekin täysin mahdollista. Siispä päätin ryhtyä toimeen."
                : "As we chatted, it became clear that beekeeping might be entirely possible for me too. So I decided to take action."}
            </p>
            <p>
              {language === "fi"
                ? "On kiehtovaa seurata mehiläisten yhteistyötä ja sitä miten kaikilla pesässä on oma tehtävänsä."
                : "It is fascinating to observe the collaboration of bees and how each bee has its own task in the hive."}
            </p>
            <p>
              {language === "fi"
                ? "Tällä hetkellä mehiläistarhani sijaitsee Pohjois-Savossa."
                : "Currently, my bee farm is located in Northern Savonia."}
            </p>
            {language === "fi" ? (
              <p>
                Mehiläistarhauksen arkea pääset vakoilemaan seuraamalla
                Instagramissa tiliä{" "}
                <a
                  href="https://www.instagram.com/hunajaholisti"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  Hunajaholisti
                </a>
                .
              </p>
            ) : (
              <p>
                You can spy on everyday life in beekeeping by following{" "}
                <a
                  href="https://www.instagram.com/hunajaholisti"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2"
                >
                  Hunajaholisti
                </a>{" "}
                on Instagram.
              </p>
            )}

            <p className="pt-6 font-display text-2xl text-forest-900">
              {language === "fi"
                ? "Hunajaisin terveisin, Heidi"
                : "With honey-filled regards, Heidi"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
