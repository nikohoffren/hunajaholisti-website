import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import {
  HOLVI_ISO_KUMMIPESA_URL,
  HOLVI_PIENI_KUMMIPESA_URL,
  HOLVI_SHOP_URL,
} from "../config";

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

  const inquiryItems = [
    {
      titleFi: "Kennohunaja",
      titleEn: "Comb honey",
      bodyFi:
        "Jos pidät kennohunajasta, tiedustele sitä suoraan meiltä Facebook-viestillä tai sähköpostilla.",
      bodyEn:
        "If you enjoy comb honey, inquire about it via Facebook message or email.",
      image: "HHkuva3.jpg",
    },
    {
      titleFi: "Siitepöly",
      titleEn: "Pollen",
      bodyFi:
        "Siitepölyä on tulossa vuonna 2027. Voit jo nyt jättää kiinnostusviestin Facebookissa tai sähköpostitse.",
      bodyEn:
        "Pollen is coming in 2027. You can already leave an interest note via Facebook or email.",
      image: "HHkuvaSiitepoly.jpeg",
    },
    {
      titleFi: "Propolis",
      titleEn: "Propolis",
      bodyFi:
        "Myyn propolista lastuina. Kysy saatavuutta ja määriä Facebook-viestillä tai sähköpostilla.",
      bodyEn:
        "Propolis is sold as chips. Ask about availability and amounts via Facebook or email.",
      image: "HHkuvaPropolis.jpeg",
    },
  ];

  return (
    <main>
      <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="HHbackground2.png"
            alt=""
            className="h-full w-full object-cover animate-slow-zoom"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/55 to-forest-900/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/50 via-transparent to-transparent" />
        </div>

        <div className="relative page-shell w-full pb-16 pt-32 sm:pb-24 sm:pt-28">
          <CSSTransition in={textInProp} timeout={700} classNames="slide-text">
            <div className="max-w-2xl">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
                Hunajaholistin Hunaja
              </h1>
              <CSSTransition in={inProp} timeout={700} classNames="slide-text">
                <p className="mt-5 text-xl sm:text-2xl text-amber-200 font-display">
                  {language === "fi"
                    ? "Hunajaa puhtaan luonnon keskeltä"
                    : "Honey from the heart of nature"}
                </p>
              </CSSTransition>
              <p className="mt-4 text-base sm:text-lg text-forest-100 max-w-lg leading-relaxed">
                {language === "fi"
                  ? "Pienen mehiläistarhan hunajaa Pohjois-Savosta - kuumentamatonta ja aidosti käsityönä."
                  : "Unheated honey from a small apiary in Northern Savonia - crafted with care."}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={HOLVI_SHOP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary bg-amber-500 hover:bg-amber-400 text-forest-950"
                >
                  {language === "fi" ? "Tuotteemme" : "Our products"}
                </a>
                <Link
                  to="/tarinamme"
                  className="btn-secondary border-white/40 text-white hover:bg-white/10 hover:border-white"
                >
                  {language === "fi" ? "Lue tarinamme" : "Our story"}
                </Link>
              </div>
            </div>
          </CSSTransition>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-amber-600 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
              {language === "fi" ? "Miksi meidän hunajamme" : "Why our honey"}
            </p>
            <h2 className="section-heading">
              {language === "fi"
                ? "Pienen tarhan maku, suoraan luonnosta"
                : "Small-farm flavor, straight from nature"}
            </h2>
            <p className="mt-5 text-forest-600 text-lg leading-relaxed">
              {language === "fi"
                ? "Hunajamme ei ole koskaan lämmitetty. Jokainen purkki kertoo mehiläisten työn ja pohjoissavolaisen luonnon tarinan."
                : "Our honey is never heated. Every jar carries the work of the bees and the story of Northern Savonia’s nature."}
            </p>
            <a
              href={HOLVI_SHOP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary mt-8"
            >
              {language === "fi" ? "Siirry Holvi-kauppaan" : "Visit Holvi shop"}
            </a>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-3 bg-amber-200/40 blur-2xl rounded-full"
              aria-hidden="true"
            />
            <img
              src="HHlahja.jpg"
              alt={language === "fi" ? "Hunajapurkki" : "Jar of honey"}
              className="relative w-full aspect-[4/5] object-cover shadow-2xl shadow-forest-900/15"
            />
          </div>
        </div>
      </section>

      <section className="relative min-h-[70svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="HHkuva5.jpg"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/65 to-forest-900/20" />
        </div>
        <div className="relative page-shell w-full pb-14 pt-40 sm:pb-20">
          <p className="text-amber-300 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
            {language === "fi" ? "Kummipesä 2027" : "Adopt a hive 2027"}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white max-w-3xl leading-tight">
            {language === "fi"
              ? "Seuraa pesän elämää ja vastaanota hunajasato"
              : "Follow a hive’s season and receive the harvest"}
          </h2>
          <p className="mt-5 text-lg text-forest-100 max-w-2xl leading-relaxed">
            {language === "fi"
              ? "Kummipesän ostaessasi ennakkotilaat hunajaa vuodelle 2027. Saat säännöllisesti terveisiä pesältä sähköpostiisi, ja satokauden päätteeksi hunaja toimitetaan heti linkouksen jälkeen — sopii myös lahjaksi."
              : "Buying an Adopt a Hive package pre-orders honey for 2027. You’ll receive regular hive updates by email, and after the harvest the honey is delivered right after extraction — also a thoughtful gift."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={HOLVI_PIENI_KUMMIPESA_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary bg-amber-500 hover:bg-amber-400 text-forest-950"
            >
              {language === "fi"
                ? "Pieni Kummipesä — 35 €"
                : "Small Adopt a Hive — €35"}
            </a>
            <a
              href={HOLVI_ISO_KUMMIPESA_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary border-white/40 text-white hover:bg-white/10 hover:border-white"
            >
              {language === "fi"
                ? "Iso Kummipesä — 49 €"
                : "Big Adopt a Hive — €49"}
            </a>
          </div>
          <p className="mt-5 text-sm text-forest-300 max-w-xl">
            {language === "fi"
              ? "Pieni sisältää 3 × 350 g hunajaa, iso 5 × 350 g — molemmissa kummipesädiplomi. Lahjatilauksissa: hunajaholisti@gmail.com"
              : "Small includes 3 × 350 g jars, large 5 × 350 g — both with a diploma. For gifts: hunajaholisti@gmail.com"}
          </p>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-amber-600 text-sm font-semibold tracking-[0.18em] uppercase mb-3">
            {language === "fi" ? "Muut mehiläistuotteet" : "Other bee products"}
          </p>
          <h2 className="section-heading">
            {language === "fi"
              ? "Näin tilaat kennohunajaa, siitepölyä ja propolista"
              : "How to inquire about comb honey, pollen and propolis"}
          </h2>
          <p className="mt-4 text-forest-600 text-lg leading-relaxed">
            {language === "fi"
              ? "Näitä tuotteita ei myydä Holvi-kaupassa. Ota yhteyttä Facebook-yksityisviestillä tai sähköpostilla, niin autamme tilauksessa."
              : "These products are not sold in the Holvi shop. Reach out via Facebook private message or email and we’ll help with your order."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {inquiryItems.map((item) => (
            <div key={item.titleEn}>
              <img
                src={item.image}
                alt={language === "fi" ? item.titleFi : item.titleEn}
                className="w-full aspect-[4/3] object-cover mb-5"
              />
              <h3 className="font-display text-2xl text-forest-900">
                {language === "fi" ? item.titleFi : item.titleEn}
              </h3>
              <p className="mt-3 text-forest-600 leading-relaxed">
                {language === "fi" ? item.bodyFi : item.bodyEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://www.facebook.com/Hunajaholisti/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary"
          >
            {language === "fi" ? "Lähetä Facebook-viesti" : "Message on Facebook"}
          </a>
          <a
            href="mailto:hunajaholisti@gmail.com"
            className="btn-secondary"
          >
            hunajaholisti@gmail.com
          </a>
        </div>
      </section>

      <section className="bg-forest-900 text-white">
        <div className="page-shell py-16 sm:py-20 grid sm:grid-cols-3 gap-10 text-center sm:text-left">
          {[
            {
              titleFi: "Kuumentamatonta",
              titleEn: "Never heated",
              bodyFi: "Säilyttää hunajan luonnollisen aromin ja rakenteen.",
              bodyEn: "Preserves the honey’s natural aroma and texture.",
            },
            {
              titleFi: "Pieni tarha",
              titleEn: "Small apiary",
              bodyFi: "Huolella hoidettuja mehiläispesiä Pohjois-Savossa.",
              bodyEn: "Carefully tended hives in Northern Savonia.",
            },
            {
              titleFi: "Kummipesä",
              titleEn: "Adopt a hive",
              bodyFi: "Seuraa pesän elämää ja vastaanota hunajasato.",
              bodyEn: "Follow a hive’s season and receive the harvest.",
            },
          ].map((item) => (
            <div key={item.titleEn}>
              <h3 className="font-display text-2xl text-amber-300">
                {language === "fi" ? item.titleFi : item.titleEn}
              </h3>
              <p className="mt-3 text-forest-200 leading-relaxed">
                {language === "fi" ? item.bodyFi : item.bodyEn}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
