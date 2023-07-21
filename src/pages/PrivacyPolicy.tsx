import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

export default function PrivacyPolicy() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };

    return (
        <div className="container mx-auto py-8">
            <div className="py-10"></div>
            <div className="container mx-auto text-center mt-20">
                <h3 className="text-4xl font-semibold text-white">
                    {language === "fi" ? "Tietosuojaseloste" : "Privacy policy"}
                </h3>
            </div>

            <div className="container mx-auto my-8">
                <hr className="border-gray-300" />
            </div>

            <div className="bg-black text-white shadow-md rounded-lg p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "fi" ? "Yleistä" : "General"}
                    </h2>
                    <p className="text-gray-700">
                        {language === "fi"
                            ? "Päivitetty viimeksi: 18.6.2023\n\nTätä verkkosivua ylläpitää Hunajaholistin Hunaja.\n\nTietosuoja on meille tärkeää ja yksityisyytesi suojaamiseksi noudatamme tässä tietosuojakäytännössä ilmaistuja periaatteita. Käsittelemme aina henkilötietojasi luotettavalla tavalla sekä sitoudumme toimimaan läpinäkyvästi ja avoimesti. Pyydämme sinua tutustumaan tähän tietosuojakäytäntöön, jossa selitämme miten ja mitä henkilötietoja keräämme sekä mitä teemme niillä.\n\nNoudatamme Euroopan unionin yleistä tietosuoja-asetusta (2016/679) sekä muuta soveltuvaa ja kulloinkin voimassaolevaa henkilötietojen käsittelyyn ja tietosuojaan liittyvää lainsäädäntöä ja viranomaisohjeistusta."
                            : "Last updated: June 18, 2023\n\nThis website is maintained by Hunajaholistin Hunaja.\n\nPrivacy is important to us, and to protect your privacy, we adhere to the principles stated in this privacy policy. We always handle your personal data in a reliable manner and commit to acting transparently and openly. Please read this privacy policy to understand how and what personal data we collect and what we do with it.\n\nWe comply with the General Data Protection Regulation (GDPR) of the European Union (EU) (2016/679), as well as other applicable and current legislation and official guidelines on the processing of personal data and privacy."}
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "fi"
                            ? "Kuka kerää henkilötietojasi?"
                            : "Who collects your personal data?"}
                    </h2>
                    <p className="text-gray-700">
                        {language === "fi"
                            ? "Hunajaholistin Hunaja, Y-tunnus 3163385-5\nLiitokuja 4 C, 03100 VIHTI\nPuh. +358 (0) 44 0550575\nEmail: hunajaholisti@gmail.com"
                            : "Hunajaholistin Hunaja, Business ID 3163385-5\nLiitokuja 4 C, 03100 VIHTI\nPhone: +358 (0) 44 0550575\nEmail: hunajaholisti@gmail.com"}
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "fi"
                            ? "Miten keräämme henkilötietojasi?"
                            : "How do we collect your personal data?"}
                    </h2>
                    <p className="text-gray-700">
                        {language === "fi"
                            ? "Pääasiassa keräämme henkilötietojasi sinulta itseltäsi (esimerkiksi kun ostat tuotteitamme verkkokaupastamme tai asioit kanssamme sähköpostitse). Saatamme kerätä henkilötietojasi myös koskien verkkosivumme käyttöä. Mikäli et anna pyytämiämme henkilötietoja, emme mahdollisesti voi tarjota pyytämääsi tuotetta, palvelua tai toimenpidettä. Edellä mainituissa tapauksissa henkilötietojesi käsittely perustuu antamaasi suostumukseen tai muuhun henkilötietolainsäädännön mukaiseen käsittelyn oikeusperusteeseen.\n\nJoissakin tapauksissa meidän saattaa olla välttämätöntä kerätä henkilötietojasi kolmannelta osapuolelta. Saatamme esimerkiksi kerätä henkilötietojasi työnantajaltasi, mikäli työnantajasi on asiakkaamme. Tietojen kerääminen kolmannelta osapuolelta tulee kyseeseen esimerkiksi silloin, jos se on tarpeen meidän tai kolmannen osapuolen, kuten työnantajasi, oikeutettujen etujen toteuttamiseksi.\n\nJoissakin tapauksissa henkilötietojesi käsittely saattaa olla tarpeen lakisääteisen velvoitteemme noudattamiseksi."
                            : "We primarily collect your personal data directly from you (for example, when you purchase our products from our online store or communicate with us via email). We may also collect your personal data regarding the use of our website. If you do not provide the requested personal data, we may not be able to provide the requested product, service, or action. In the aforementioned cases, the processing of your personal data is based on your consent or other legal basis for processing under personal data legislation.\n\nIn some cases, it may be necessary for us to collect your personal data from a third party. For example, we may collect your personal data from your employer if your employer is our customer. The collection of information from third parties may be necessary to fulfill our or a third party's legitimate interests.\n\nIn some cases, the processing of your personal data may be necessary to comply with a legal obligation."}
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "fi"
                            ? "Mitä henkilötietojasi käsittelemme?"
                            : "What personal data do we process?"}
                    </h2>
                    <p className="text-gray-700">
                        {language === "fi"
                            ? "Pääsääntöisesti keräämme vain sellaisia henkilötietoja, joita verkkosivullamme vierailevat käyttäjät antavat vapaaehtoisesti ja joiden antaminen on välttämätöntä niihin tarkoituksiin, jota varten tiedot kerätään. Jotkut tiedot ovat välttämättömiä mahdollistaaksemme verkkosivumme ja sillä esiintyvien ominaisuuksien käytön (tähän sisältyvät evästeet).\n\nKeräämiämme henkilötietoja ovat:\n\n- Verkkokaupasta ostavien henkilöiden nimi, osoite, puhelinnumero, sähköpostiosoite\n- Sivuston vierailijoiden IP-osoite\n- Verkkosivun käyttöä koskevat muut tiedot: vierailun kellonaika, käytetyt sivut, selaintyyppi, mistä verkko-osoitteesta käyttäjä on tullut verkkosivulle, miltä palvelimelta käyttäjä on tullut verkkosivulle ja mistä verkkotunnuksesta käyttäjä on tullut verkkosivulle\n\nSaatamme pyytää sinulta erilaisia yhteystietoja, jos tahdot vastaanottaa uutisointi- tai markkinointimateriaaliamme tai olet kiinnostunut tarjoamistamme tuotteista tai haluat ilmoittautua sopimustuottajaksi. Tällöin keräämiämme henkilötietojasi saattavat olla nimi, osoite, sähköpostiosoite, puhelinnumero ja edustamasi yritys.\n\nEmme kerää erityisiin henkilötietoryhmiin kuuluvia tietoja verkkosivullamme."
                            : "We primarily collect only those personal data that users visiting our website voluntarily provide and that are necessary for the purposes for which the information is collected. Some data is necessary to enable the use of our website and its features (including cookies).\n\nThe personal data we collect include:\n\n- Name, address, phone number, email address of individuals purchasing from our online store\n- IP address of website visitors\n- Other information related to website usage: visit time, pages visited, browser type, referring URL, originating server, and referring domain\n\nWe may ask you for various contact details if you wish to receive our newsletters or marketing materials, or if you are interested in our products or want to register as a contract producer. In such cases, the personal data we may collect include name, address, email address, phone number, and the company you represent.\n\nWe do not collect information belonging to special categories of personal data on our website."}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        {language === "fi"
                            ? "Mihin tarkoituksiin käytämme henkilötietojasi?"
                            : "For what purposes do we use your personal data?"}
                    </h2>
                    <p className="text-gray-700">
                        {language === "fi"
                            ? "Käytämme keräämiämme henkilötietoja seuraaviin tarkoituksiin:\n\n- Palvelujen tarjoaminen ja toteuttaminen: käsittelemme henkilötietojasi tarjotaksemme sinulle tuotteita ja palveluja, kuten tilausten käsittely, maksujen suorittaminen, toimitusten järjestäminen ja asiakaspalvelun tarjoaminen.\n- Asiakassuhteen hallinta: käsittelemme henkilötietojasi asiakassuhteen hoitamiseksi, yhteydenottoihin vastaamiseksi ja asiakaspalvelun tarjoamiseksi.\n- Markkinointi: voimme käyttää henkilötietojasi lähettääksemme sinulle markkinointimateriaalia, uutiskirjeitä tai tarjouksia, jos olet antanut suostumuksesi tai osoittanut kiinnostusta vastaanottaa tällaisia viestejä. Voit peruuttaa suostumuksesi markkinointiviestintään milloin tahansa.\n- Verkkosivujen kehittäminen ja analysointi: keräämme tietoja verkkosivumme käytöstä ja suoritamme analytiikkaa ja tilastointia verkkosivun kehittämiseksi ja parantamiseksi."
                            : "We use the personal data we collect for the following purposes:\n\n- Provision and implementation of services: We process your personal data to provide you with products and services, such as order processing, payment processing, arranging deliveries, and providing customer service.\n- Management of customer relationships: We process your personal data to manage customer relationships, respond to inquiries, and provide customer service.\n- Marketing: We may use your personal data to send you marketing materials, newsletters, or offers if you have given your consent or expressed interest in receiving such communications. You can unsubscribe from marketing communications at any time.\n- Website development and analysis: We collect information about the use of our website and perform analytics and statistics to develop and improve the website."}
                    </p>
                </div>
            </div>
        </div>
    );
}
