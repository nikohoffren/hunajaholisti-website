import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import { CartContext } from "../components/CartContext";
import { useState } from "react";
import Spinner from "../components/Spinner";

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

  return (
    <>
      <div className="py-5"></div>
      <div className="container mx-auto text-center mt-20">
        <h3 className="text-4xl font-semibold text-white">
          {language === "fi" ? "TUOTTEEMME" : "PRODUCTS"}
        </h3>
      </div>
      <div className="container mx-auto my-8">
        <hr />
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-4">
        {/* Hunaja */}
        <div>
          <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="text-center">
              {isLoading && <Spinner />}
              <img
                className="w-full h-48 object-cover"
                src="HHlahja.jpg"
                alt="Hunaja"
                onLoad={() => imageLoaded()}
              />
            </div>
            <div className="p-8">
              <h5 className="text-2xl font-semibold text-white">
                {language === "fi" ? "Hunaja 350g" : "Honey 350g"}
              </h5>
              <p className="mt-4 text-sky-100">
                {language === "fi"
                  ? "Mehiläistarhamme sijaitsevat puhtaan luonnon keskellä, kaukana isoista teistä ja ruuhkasta. Osa tarhoistamme sijaitsee metsäalueilla ja osa luomupeltojen vieressä."
                  : "Our bee farms are located in the middle of pure nature, far from big roads and traffic. Some of our farms are located in forest areas and some next to organic fields."}
              </p>
              <p className="mt-4 text-sky-100">
                {language === "fi"
                  ? "Moni kysyy onko hunajamme hyvää ja vastaus on tietysti: Kyllä, se on suorastaan herkullista! Hunajaa ei ole myöskään missään vaiheessa kuumennettu. Jos pidät kennohunajasta, sitä voi tiedustella suoraan meiltä esimerkiksi Facebookin yksityisviestillä."
                  : "Many people ask if our honey is good and the answer is of course: Yes, it's delicious! Our honey has also never been heated. If you like comb honey, you can inquire about it directly from us via Facebook private message."}
              </p>
              <div className="mt-4 text-right">
                <a
                  href="https://www.facebook.com/Hunajaholisti/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  {language === "fi" ? "LÄHETÄ VIESTI" : "MESSAGE US"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pieni kummipesä */}
        <div>
          <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="text-center">
              {isLoading && <Spinner />}
              <img
                className="w-full h-48 object-cover"
                src={productsData[1].image}
                alt={productsData[1].alt}
                onLoad={() => imageLoaded()}
              />
            </div>
            <div className="p-8">
              <h5 className="text-2xl font-semibold text-white">
                {language === "fi" ? "Pieni Kummipesä" : "Small Adopt a Hive"}
              </h5>
              <h6 className="font-bold mt-1 text-[1.3rem] text-white">
                35,00 €
              </h6>
              <p className="mt-4 text-white">
                {language === "fi" ? "Sis. ALV 24,00%" : "VAT 24.00% included"}
              </p>
              <p className="mt-4 text-sky-100">
                {language === "fi"
                  ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 3 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse."
                  : "Interested in beekeeping and love honey? Adopt a Hive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a Adopt a Hive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 3 jars of honey (350g). The recipient will also receive a diploma of the Adopt a Hive by mail."}
              </p>
              <div className="mt-4 text-right">
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
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  {language === "fi" ? "LISÄÄ KORIIN" : "ADD TO CART"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Iso kummipesä */}
        <div>
          <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="text-center">
              {isLoading && <Spinner />}
              <img
                className="w-full h-48 object-cover"
                src={productsData[0].image}
                alt={productsData[0].alt}
                onLoad={() => imageLoaded()}
              />
            </div>
            <div className="p-8">
              <h5 className="text-2xl font-semibold text-white">
                {language === "fi" ? "Iso Kummipesä" : "Big Adopt a Hive"}
              </h5>
              <h6 className="font-bold mt-1 text-[1.3rem] text-white">
                49,00 €
              </h6>
              <p className="mt-4 text-gray-100">
                {language === "fi" ? "Sis. ALV 24,00%" : "VAT 24.00% included"}
              </p>
              <p className="mt-4 text-sky-100">
                {language === "fi"
                  ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 5 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse."
                  : "Interested in beekeeping and love honey? Adopt a Hive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a Adopt a Hive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 5 jars of honey (350g). The recipient will also receive a diploma of the Adopt a Hive by mail."}
              </p>
              <div className="mt-4 text-right">
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
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  {language === "fi" ? "LISÄÄ KORIIN" : "ADD TO CART"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Testi
                <div>
                   <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="text-center">
                   {isLoading && <Spinner />}
                        <img
                            className="w-full h-48 object-cover"
                            src="HHkuva5.jpg"
                            alt="Testi"
                            onLoad={() => imageLoaded()}
                        />
                        </div>
                        <div className="p-8">
                            <h5 className="text-2xl font-semibold text-gray-100">
                                {language === "fi"
                                    ? "Testi"
                                    : "Test"}
                            </h5>
                            <h6 className="font-bold mt-1 text-[1.3rem] text-white">35,00 €</h6>
                            <p className="mt-4 text-white">
                                {language === "fi"
                                    ? "Sis. ALV 24,00%"
                                    : "VAT 24.00% included"}
                            </p>
                            <p className="mt-4 text-gray-100">
                                {language === "fi"
                                    ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 3 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse."
                                    : "Interested in beekeeping and love honey? Beehive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a beehive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 3 jars of honey (350g). The recipient will also receive a diploma of the beehive by mail."}
                            </p>
                            <div className="mt-4 text-right">
                                <button
                                    onClick={() => {
                                        const itemToAdd = {
                                            id: "3",
                                            name:
                                                language === "fi"
                                                    ? "Testi"
                                                    : "Test",
                                            price: 51,
                                        };

                                        dispatch({
                                            type: "ADD",
                                            item: itemToAdd,
                                        });
                                    }}
                                    className="text-blue-500 hover:text-blue-700 hover:underline"
                                >
                                    {language === "fi"
                                        ? "LISÄÄ KORIIN"
                                        : "ADD TO CART"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/* Siitepöly */}
        <div>
          <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="text-center">
              {isLoading && <Spinner />}
              <img
                className="w-full h-48 object-cover"
                src="HHkuvaSiitepoly.jpeg"
                alt="Siitepöly"
                onLoad={() => imageLoaded()}
              />
            </div>
            <div className="p-8">
              <h5 className="text-2xl font-semibold text-white">
                {language === "fi" ? "SIITEPÖLY 250g" : "POLLEN 250g"}
              </h5>
              <h6 className="font-bold mt-1 text-[1.3rem] text-white">
                35,00 €
              </h6>
              <p className="mt-4 text-white">
                {language === "fi" ? "Sis. ALV 24,00%" : "VAT 24.00% included"}
              </p>
              <p className="mt-4 text-sky-100">
                {language === "fi" ? (
                  <>
                    Mehiläisten keräämä siitepöly sisältää ainakin proteiinia,
                    aminohappoja, rasvoja, aminohappoja, A-, B-, C- ja E-
                    vitamiineja, mineraalea, fytosteroleita, flavonoideja ja
                    hiilihydraatteja. Mehiläiset keräävät tätä proteiinipitoista
                    ruokaa toukilleen ruuaksi. Mehiläispesä tarvitsee siitepölyä
                    noin 30-40kg vuodessa. Ihminenkin voi käyttää siitepölyä
                    proteiinin lähteenä. Itse sekoittelen aamujogurttiini
                    siitepölyä pari teelusikallista iltasella tekeytymään.
                    Lisätietoa siitepölystä saa esimerkiksi täältä:{" "}
                    <a
                      href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/"
                      target="_blank"
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/
                    </a>
                    <br />
                    <br />
                    (Tulossa lisää 2023!)
                    <br />
                    <br />
                  </>
                ) : (
                  <>
                    Bees collect pollen as food for their larvae. Bees need
                    pollen for about 30-40kg per year. Humans can also use
                    pollen as a protein source. I mix a couple of teaspoons of
                    pollen into my morning yogurt to ferment in the evening.{" "}
                    <br />
                    <br />
                    More information about pollen can be found here:{" "}
                    <a
                      href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/"
                      target="_blank"
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/
                    </a>
                    <br />
                    <br />
                    (Coming soon 2023!)
                    <br />
                    <br />
                  </>
                )}
              </p>
              <div className="mt-4 text-right">
                <a
                  href="https://www.facebook.com/Hunajaholisti/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  {language === "fi" ? "TULOSSA 2023" : "COMING IN 2023"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Propolis */}
        <div>
          <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="text-center">
              {isLoading && <Spinner />}
              <img
                className="w-full h-48 object-cover"
                src="HHlogo.jpg"
                alt="Propolis"
                onLoad={() => imageLoaded()}
              />
            </div>
            <div className="p-8">
              <h5 className="text-2xl font-semibold text-white">PROPOLIS</h5>

              <p className="text-gray-300 smaller-text font-semibold">
                {language === "fi"
                  ? "Myyn propolista lastuina"
                  : "I sell propolis as chips"}
              </p>
              <p className="mt-4 text-sky-100">
                {language === "fi" ? (
                  <>
                    Propolikseksi sanotaan ainetta jolla mehiläiset kittaavat
                    turhat raot pesässä. Propoliksella on desinfioiva vaikutus
                    mehiläispesässä. Mehiläiset keräävät aineksia propolikseen
                    pensaiden ja puiden silmuista. Silmut erittävät pihkamaisia
                    ja tuoksuvia hartsimaisia aineita.
                    <br />
                    <br />
                    Lisätietoa propoliksesta voit lukea esimerkiksi täältä:{" "}
                    <a
                      href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/"
                      target="_blank"
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/
                    </a>
                    <br />
                    <br />
                    (Tulossa lisää 2023!)
                  </>
                ) : (
                  <>
                    Propolis is a substance bees use to seal off unwanted holes
                    in the hive. Propolis has a disinfectant effect in the
                    beehive. Bees collect the ingredients for propolis from the
                    buds of trees and shrubs. Buds secrete resinous and fragrant
                    resinous substances.
                    <br />
                    <br />
                    More information about propolis can be found here:{" "}
                    <a
                      href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/"
                      target="_blank"
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/
                    </a>
                    <br />
                    <br />
                    (Coming soon 2023!)
                  </>
                )}
              </p>
              <div className="mt-4 text-right">
                <a
                  href="https://www.facebook.com/Hunajaholisti/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  {language === "fi" ? "TULOSSA 2023" : "COMING IN 2023"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
