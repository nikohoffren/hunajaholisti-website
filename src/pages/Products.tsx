import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { CartContext } from "../components/CartContext";
import { useState } from "react";
import Spinner from "../components/Spinner";
import {
  HOLVI_ISO_KUMMIPESA_URL,
  HOLVI_PIENI_KUMMIPESA_URL,
  SHOP,
} from "../config";

const productsData = [
  {
    id: "1",
    nameFi: "Iso kummipesä",
    nameEn: "Big beehive",
    price: 4900,
    image: "HHkuva5.jpg",
    alt: "Iso kummipesä",
  },
  {
    id: "2",
    nameFi: "Pieni kummipesä",
    nameEn: "Small beehive",
    price: 3500,
    image: "HHkuva5.jpg",
    alt: "Iso kummipesä",
  },
];

export default function Products() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  const { dispatch } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = () => {
    setIsLoading(false);
  };

  const actionClass =
    "inline-flex items-center justify-center w-full mt-6 px-5 py-3 text-sm font-semibold tracking-wide uppercase bg-forest-700 text-white rounded-md transition-colors hover:bg-forest-600";

  return (
    <div className="pt-28 pb-20">
      <div className="page-shell text-center mb-14">
        <p className="text-amber-600 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
          {language === "fi" ? "Verkkokauppa" : "Shop"}
        </p>
        <h1 className="section-heading">
          {language === "fi" ? "Tuotteemme" : "Our products"}
        </h1>
        <p className="mt-4 text-forest-600 max-w-2xl mx-auto text-lg">
          {language === "fi"
            ? "Kuumentamatonta hunajaa ja mehiläistuotteita suoraan pieneltä tarhalta."
            : "Unheated honey and bee products straight from our small apiary."}
        </p>
      </div>

      <div className="page-shell grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Hunaja */}
        <article className="product-surface flex flex-col h-full">
          <div className="relative bg-mist-dark">
            {isLoading && <Spinner />}
            <img
              className="w-full h-56 object-cover"
              src="HHlahja.jpg"
              alt="Hunaja"
              onLoad={() => imageLoaded()}
            />
          </div>
          <div className="p-7 flex flex-col flex-grow">
            <h2 className="font-display text-2xl text-forest-900">
              {language === "fi" ? "Hunaja 350g" : "Honey 350g"}
            </h2>
            <p className="mt-4 text-forest-600 leading-relaxed flex-grow">
              {language === "fi"
                ? "Moni kysyy onko meidän hunaja hyvää ja vastaus on tietenkin: Kyllä, se on herkullista! Hunajamme ei ole myöskään koskaan lämmitetty. Jos pidät kennohunajasta, voit tiedustella sitä suoraan meiltä Facebookin yksityisviestillä."
                : "Many people ask if our honey is good and the answer is of course: Yes, it's delicious! Our honey has also never been heated. If you like comb honey, you can inquire about it directly from us via Facebook private message."}
            </p>
            <a
              href="https://www.facebook.com/Hunajaholisti/"
              target="_blank"
              rel="noreferrer"
              className={actionClass}
            >
              {language === "fi" ? "Lähetä viesti" : "Message us"}
            </a>
          </div>
        </article>

        {/* Pieni kummipesä */}
        <article className="product-surface flex flex-col h-full">
          <div className="relative bg-mist-dark">
            {isLoading && <Spinner />}
            <img
              className="w-full h-56 object-cover"
              src={productsData[1].image}
              alt={productsData[1].alt}
              onLoad={() => imageLoaded()}
            />
          </div>
          <div className="p-7 flex flex-col flex-grow">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl text-forest-900">
                {language === "fi" ? "Pieni Kummipesä" : "Small Adopt a Hive"}
              </h2>
              <p className="font-display text-xl text-amber-700 whitespace-nowrap">
                35,00 €
              </p>
            </div>
            <p className="mt-1 text-sm text-forest-500">
              {language === "fi" ? "Sis. ALV 24,00%" : "VAT 24.00% included"}
            </p>
            <p className="mt-4 text-forest-600 leading-relaxed flex-grow">
              {language === "fi"
                ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesän ostaessasi ennakkotilaat hunajaa vuodelle 2026! Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu 3 purkkia hunajaa (350g / purkki). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä. Jos ostat kummipesän ystävälle lahjaksi voit olla vielä yhteydessä sähköpostitse niin lähetetään terveiset oikeaan osoitteeseen :) Voit lisätä myös viestin lahjan saajalle. Laita sähköpostia osoitteeseen hunajaholisti@gmail.com"
                : "Curious about beekeeping and love honey? By purchasing the Adopt a Hive package you pre-order honey for the 2026 season. It is a great way to follow the life of a hive for one full care season and makes a thoughtful gift for anyone interested in bees. We send regular updates from the hive straight to your email, and once the harvest ends the honey is collected and delivered right after extraction. The package contains 3 jars of honey (350g / jar) and a printed Adopt a Hive diploma. Buying it as a gift? Email us at hunajaholisti@gmail.com and we’ll make sure the greetings go to the right address—you can even include a personal message for the recipient."}
            </p>
            {SHOP ? (
              <button
                onClick={() => {
                  const itemToAdd = {
                    id: productsData[1].id,
                    name:
                      language === "fi"
                        ? productsData[1].nameFi
                        : productsData[1].nameEn,
                    price: productsData[1].price,
                    image: productsData[1].image,
                    alt: productsData[1].alt,
                  };
                  dispatch({
                    type: "ADD",
                    item: itemToAdd,
                  });
                }}
                className={actionClass}
              >
                {language === "fi" ? "Lisää koriin" : "Add to cart"}
              </button>
            ) : (
              <a
                href={HOLVI_PIENI_KUMMIPESA_URL}
                target="_blank"
                rel="noreferrer noopener"
                className={actionClass}
              >
                {language === "fi" ? "Tilaa tuote" : "Order product"}
              </a>
            )}
          </div>
        </article>

        {/* Iso kummipesä */}
        <article className="product-surface flex flex-col h-full">
          <div className="relative bg-mist-dark">
            {isLoading && <Spinner />}
            <img
              className="w-full h-56 object-cover"
              src={productsData[0].image}
              alt={productsData[0].alt}
              onLoad={() => imageLoaded()}
            />
          </div>
          <div className="p-7 flex flex-col flex-grow">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl text-forest-900">
                {language === "fi" ? "Iso Kummipesä" : "Big Adopt a Hive"}
              </h2>
              <p className="font-display text-xl text-amber-700 whitespace-nowrap">
                49,00 €
              </p>
            </div>
            <p className="mt-1 text-sm text-forest-500">
              {language === "fi" ? "Sis. ALV 24,00%" : "VAT 24.00% included"}
            </p>
            <p className="mt-4 text-forest-600 leading-relaxed flex-grow">
              {language === "fi"
                ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesän ostaessasi ennakkotilaat hunajaa vuodelle 2026! Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu 5 purkkia hunajaa (350g / purkki). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä. Jos ostat kummipesän ystävälle lahjaksi voit olla vielä yhteydessä sähköpostitse niin lähetetään terveiset oikeaan osoitteeseen :) Voit lisätä myös viestin lahjan saajalle. Laita sähköpostia osoitteeseen hunajaholisti@gmail.com"
                : "Curious about beekeeping and fond of honey? Purchasing the Adopt a Hive package pre-orders honey for the 2026 season and lets you follow the hive for an entire care year. The experience suits gifts perfectly for bee enthusiasts. We send you regular greetings from the hive via email, and after the harvest the honey is collected and delivered immediately after spinning. This larger package includes 5 jars of honey (350g / jar) plus a printed Adopt a Hive diploma. Buying it as a gift? Email us at hunajaholisti@gmail.com and we’ll make sure the greetings go to the right address—you can even include a personal message for the recipient."}
            </p>
            {SHOP ? (
              <button
                onClick={() => {
                  const itemToAdd = {
                    id: productsData[0].id,
                    name:
                      language === "fi"
                        ? productsData[0].nameFi
                        : productsData[0].nameEn,
                    price: productsData[0].price,
                    image: productsData[0].image,
                    alt: productsData[0].alt,
                  };
                  dispatch({
                    type: "ADD",
                    item: itemToAdd,
                  });
                }}
                className={actionClass}
              >
                {language === "fi" ? "Lisää koriin" : "Add to cart"}
              </button>
            ) : (
              <a
                href={HOLVI_ISO_KUMMIPESA_URL}
                target="_blank"
                rel="noreferrer noopener"
                className={actionClass}
              >
                {language === "fi" ? "Tilaa tuote" : "Order product"}
              </a>
            )}
          </div>
        </article>

        {/* Siitepöly */}
        <article className="product-surface flex flex-col h-full">
          <div className="relative bg-mist-dark">
            {isLoading && <Spinner />}
            <img
              className="w-full h-56 object-cover"
              src="HHkuvaSiitepoly.jpeg"
              alt="Siitepöly"
              onLoad={() => imageLoaded()}
            />
            <span className="absolute top-4 left-4 bg-amber-500 text-forest-950 text-xs font-bold tracking-wide uppercase px-3 py-1">
              {language === "fi" ? "Tulossa 2026" : "Coming 2026"}
            </span>
          </div>
          <div className="p-7 flex flex-col flex-grow">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl text-forest-900">
                {language === "fi" ? "Siitepöly 250g" : "Pollen 250g"}
              </h2>
              <p className="font-display text-xl text-amber-700 whitespace-nowrap">
                35,00 €
              </p>
            </div>
            <p className="mt-1 text-sm text-forest-500">
              {language === "fi" ? "Sis. ALV 24,00%" : "VAT 24.00% included"}
            </p>
            <p className="mt-4 text-forest-600 leading-relaxed flex-grow">
              {language === "fi" ? (
                <>
                  Mehiläisten keräämä siitepöly sisältää ainakin proteiinia,
                  aminohappoja, rasvoja, A-, B-, C- ja E-vitamiineja,
                  mineraaleja, fytosteroleita, flavonoideja ja hiilihydraatteja.
                  Lisätietoa siitepölystä:{" "}
                  <a
                    href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 hover:text-amber-800 underline underline-offset-2"
                  >
                    hunaja.net
                  </a>
                </>
              ) : (
                <>
                  Bees collect pollen as food for their larvae. Humans can also
                  use pollen as a protein source. More information:{" "}
                  <a
                    href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 hover:text-amber-800 underline underline-offset-2"
                  >
                    hunaja.net
                  </a>
                </>
              )}
            </p>
            <a
              href="https://www.facebook.com/Hunajaholisti/"
              target="_blank"
              rel="noreferrer"
              className={`${actionClass} bg-forest-200 text-forest-800 hover:bg-forest-300`}
            >
              {language === "fi" ? "Tulossa 2026" : "Coming in 2026"}
            </a>
          </div>
        </article>

        {/* Propolis */}
        <article className="product-surface flex flex-col h-full">
          <div className="relative bg-mist-dark">
            {isLoading && <Spinner />}
            <img
              className="w-full h-56 object-cover"
              src="HHkuvaPropolis.jpeg"
              alt="Propolis"
              onLoad={() => imageLoaded()}
            />
            <span className="absolute top-4 left-4 bg-amber-500 text-forest-950 text-xs font-bold tracking-wide uppercase px-3 py-1">
              {language === "fi" ? "Tulossa 2026" : "Coming 2026"}
            </span>
          </div>
          <div className="p-7 flex flex-col flex-grow">
            <h2 className="font-display text-2xl text-forest-900">Propolis</h2>
            <p className="mt-1 text-sm text-forest-500 font-medium">
              {language === "fi"
                ? "Myyn propolista lastuina"
                : "Sold as propolis chips"}
            </p>
            <p className="mt-4 text-forest-600 leading-relaxed flex-grow">
              {language === "fi" ? (
                <>
                  Propolikseksi sanotaan ainetta jolla mehiläiset kittaavat
                  turhat raot pesässä. Propoliksella on desinfioiva vaikutus
                  mehiläispesässä. Lisätietoa:{" "}
                  <a
                    href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 hover:text-amber-800 underline underline-offset-2"
                  >
                    hunaja.net
                  </a>
                </>
              ) : (
                <>
                  Propolis is a substance bees use to seal unwanted gaps in the
                  hive. It has a disinfectant effect in the beehive. More
                  information:{" "}
                  <a
                    href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 hover:text-amber-800 underline underline-offset-2"
                  >
                    hunaja.net
                  </a>
                </>
              )}
            </p>
            <a
              href="https://www.facebook.com/Hunajaholisti/"
              target="_blank"
              rel="noreferrer"
              className={`${actionClass} bg-forest-200 text-forest-800 hover:bg-forest-300`}
            >
              {language === "fi" ? "Tulossa 2026" : "Coming in 2026"}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
