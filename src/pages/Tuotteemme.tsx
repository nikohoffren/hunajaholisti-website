import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Tuotteemme() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    return (
        <>
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
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <img
                            className="w-full h-48 object-cover"
                            src="HHlahja.jpg"
                            alt="Hunaja"
                        />
                        <div className="p-8">
                            <h5 className="text-2xl font-semibold text-gray-900">
                                {language === "fi"
                                    ? "Hunaja 350g"
                                    : "Honey 350g"}
                            </h5>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Mehiläistarhamme sijaitsevat puhtaan luonnon keskellä, kaukana isoista teistä ja ruuhkasta. Osa tarhoistamme sijaitsee metsäalueilla ja osa luomupeltojen vieressä."
                                    : "Our bee farms are located in the middle of pure nature, far from big roads and traffic. Some of our farms are located in forest areas and some next to organic fields."}
                            </p>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Moni kysyy onko hunajamme hyvää ja vastaus on tietysti: Kyllä, se on suorastaan herkullista! Hunajaa ei ole myöskään missään vaiheessa kuumennettu. Jos pidät kennohunajasta, sitä voi tiedustella suoraan meiltä esimerkiksi Facebookin yksityisviestillä."
                                    : "Many people ask if our honey is good and the answer is of course: Yes, it's delicious! Our honey has also never been heated. If you like comb honey, you can inquire about it directly from us via Facebook private message."}
                            </p>
                            <div className="mt-4 text-right">
                                <a
                                    href="https://www.facebook.com/Hunajaholisti/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:text-blue-700 underline"
                                >
                                    {language === "fi"
                                        ? "LÄHETÄ VIESTI"
                                        : "MESSAGE US"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Iso kummipesä */}
                <div>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <img
                            className="w-full h-48 object-cover"
                            src="HHkuva5.jpg"
                            alt="Iso kummipesä"
                        />
                        <div className="p-8">
                            <h5 className="text-2xl font-semibold text-gray-900">
                                {language === "fi"
                                    ? "Iso kummipesä"
                                    : "Big beehive"}
                            </h5>
                            <h6>49,00 €</h6>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Sis. ALV 24,00%"
                                    : "VAT 24.00% included"}
                            </p>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 5 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse."
                                    : "Interested in beekeeping and love honey? Beehive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a beehive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 5 jars of honey (350g). The recipient will also receive a diploma of the beehive by mail."}
                            </p>
                            <div className="mt-4 text-right">
                                <a
                                    href="https://holvi.com/shop/WbXD2B/product/74a78df2a6bf30c97d4a5a6bbe3fbb25/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:text-blue-700 underline"
                                >
                                    {language === "fi" ? "TILAA" : "ORDER NOW"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pieni kummipesä */}
                <div>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <img
                            className="w-full h-48 object-cover"
                            src="HHkuva5.jpg"
                            alt="Pieni kummipesä"
                        />
                        <div className="p-8">
                            <h5 className="text-2xl font-semibold text-gray-900">
                                {language === "fi"
                                    ? "Pieni kummipesä"
                                    : "Small beehive"}
                            </h5>
                            <h6>35,00 €</h6>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Sis. ALV 24,00%"
                                    : "VAT 24.00% included"}
                            </p>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 3 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse."
                                    : "Interested in beekeeping and love honey? Beehive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a beehive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 3 jars of honey (350g). The recipient will also receive a diploma of the beehive by mail."}
                            </p>
                            <div className="mt-4 text-right">
                                <a
                                    href="https://holvi.com/shop/WbXD2B/product/d216cdfbf6aeabecaa77955c217444c7/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:text-blue-700 underline"
                                >
                                    {language === "fi" ? "TILAA" : "ORDER NOW"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Siitepöly */}
                <div>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <img
                            className="w-full h-48 object-cover"
                            src="HHkuvaSiitepoly.jpeg"
                            alt="Siitepöly"
                        />
                        <div className="p-8">
                            <h5 className="text-2xl font-semibold text-gray-900">
                                {language === "fi"
                                    ? "SIITEPÖLY 250g"
                                    : "POLLEN 250g"}
                            </h5>
                            <h6>35,00 €</h6>
                            <p className="mt-4 text-gray-700">
                                {language === "fi"
                                    ? "Sis. ALV 24,00%"
                                    : "VAT 24.00% included"}
                            </p>
                            <p className="mt-4 text-gray-700">
                                {language === "fi" ? (
                                    <>
                                        Mehiläisten keräämä siitepöly sisältää
                                        ainakin proteiinia, aminohappoja,
                                        rasvoja, aminohappoja, A-, B-, C- ja E-
                                        vitamiineja, mineraalea, fytosteroleita,
                                        flavonoideja ja hiilihydraatteja.
                                        Mehiläiset keräävät tätä
                                        proteiinipitoista ruokaa toukilleen
                                        ruuaksi. Mehiläispesä tarvitsee
                                        siitepölyä noin 30-40kg vuodessa.
                                        Ihminenkin voi käyttää siitepölyä
                                        proteiinin lähteenä. Itse sekoittelen
                                        aamujogurttiini siitepölyä pari
                                        teelusikallista iltasella tekeytymään.
                                        Lisätietoa siitepölystä saa esimerkiksi
                                        täältä:{" "}
                                        <a
                                            href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/"
                                            target="_blank"
                                            className="ff-accent"
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
                                        Bees collect pollen as food for their
                                        larvae. Bees need pollen for about
                                        30-40kg per year. Humans can also use
                                        pollen as a protein source. I mix a
                                        couple of teaspoons of pollen into my
                                        morning yogurt to ferment in the
                                        evening. <br />
                                        <br />
                                        More information about pollen can be
                                        found here:{" "}
                                        <a
                                            href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/"
                                            target="_blank"
                                            className="ff-accent"
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
                                    href="https://holvi.com/shop/WbXD2B/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:text-blue-700 underline"
                                >
                                    {language === "fi"
                                        ? "TULOSSA 2023"
                                        : "COMING IN 2023"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Propolis */}
                <div>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <img
                            className="w-full h-48 object-cover"
                            src="HHlogo.jpg"
                            alt="Propolis"
                        />
                        <div className="p-8">
                            <h5 className="text-2xl font-semibold text-gray-900">
                                PROPOLIS
                            </h5>
                            <p className="grey-text smaller-text">
                                {language === "fi"
                                    ? "Myyn propolista lastuina"
                                    : "I sell propolis as chips"}
                            </p>
                            {language === "fi" ? (
                                <>
                                    Propolikseksi sanotaan ainetta jolla
                                    mehiläiset kittaavat turhat raot pesässä.
                                    Propoliksella on desinfioiva vaikutus
                                    mehiläispesässä. Mehiläiset keräävät
                                    aineksia propolikseen pensaiden ja puiden
                                    silmuista. Silmut erittävät pihkamaisia ja
                                    tuoksuvia hartsimaisia aineita.
                                    <br />
                                    <br />
                                    Lisätietoa propoliksesta voit lukea
                                    esimerkiksi täältä:{" "}
                                    <a
                                        href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/"
                                        target="_blank"
                                        className="ff-accent"
                                    >
                                        https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/
                                    </a>
                                    <br />
                                    <br />
                                    (Tulossa lisää 2023!)
                                </>
                            ) : (
                                <>
                                    Propolis is a substance bees use to seal off
                                    unwanted holes in the hive. Propolis has a
                                    disinfectant effect in the beehive. Bees
                                    collect the ingredients for propolis from
                                    the buds of trees and shrubs. Buds secrete
                                    resinous and fragrant resinous substances.
                                    <br />
                                    <br />
                                    More information about propolis can be found
                                    here:{" "}
                                    <a
                                        href="https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/"
                                        target="_blank"
                                        className="ff-accent"
                                    >
                                        https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/
                                    </a>
                                    <br />
                                    <br />
                                    (Coming soon 2023!)
                                </>
                            )}
                            <div className="mt-4 text-right">
                                <a
                                    href="https://holvi.com/shop/WbXD2B/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:text-blue-700 underline"
                                >
                                    {language === "fi"
                                        ? "TULOSSA 2023"
                                        : "COMING IN 2023"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
