import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

export default function SalesAndDeliveryConditions() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };

    return (
        <div className="container mx-auto py-8">
            <div className="py-10"></div>
            <div className="container mx-auto text-center mt-20">
                <h3 className="text-4xl font-semibold text-white">
                    {language === "fi"
                        ? "Yleiset myynti- ja toimitusehdot"
                        : "General Sales and Delivery Conditions"}
                </h3>
            </div>
            <div className="container mx-auto my-8">
                <hr className="border-gray-300" />
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
                <div className="px-4 py-5">
                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi" ? "§ 1 Voimassaolo" : "§ 1 Validity"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Näitä ehtoja sovelletaan palveluntarjoajan kanssa sopimuksiin, jotka tehdään Hunajaholistin Hunaja, y-tunnus 3163385-5 kanssa verkkokaupassa www.hunajaholisti.fi."
                            : "(1) These terms apply to contracts made with the service provider, made with Hunajaholistin Hunaja, business ID 3163385-5 in the online store www.hunajaholisti.fi."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi"
                            ? "§ 2 Sopimuskumppani"
                            : "§ 2 Contractual Partner"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "Yrityksen nimi: Hunajaholistin Hunaja,\nOsoite: Liitokuja 4 C, 03100 VIHTI, SUOMI FINLAND,\nEmail: hunajaholisti@gmail.com,\nPuh. +358 (0) 44 0550575"
                            : "Company name: Hunajaholistin Hunaja,\nAddress: Liitokuja 4 C, 03100 VIHTI, SUOMI FINLAND,\nEmail: hunajaholisti@gmail.com,\nPhone: +358 (0) 44 0550575"}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi"
                            ? "§ 3 Sopimusehdot"
                            : "§ 3 Contract Terms"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Sopimuksen kohteena on tavaroiden (elintarvikkeiden) myynti kuluttajille Suomessa."
                            : "(1) The subject of the contract is the sale of goods (food) to consumers in Finland."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(2) Heti kun tuote on julkaistu verkkosivuillamme, esitämme sitovan tarjouksen verkkokaupan ostoskorijärjestelmän kautta tuotekuvauksessa määritellyin ehdoin."
                            : "(2) As soon as the product is published on our website, we present a binding offer through the online store's shopping cart system under the conditions defined in the product description."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(3) Sopimus tehdään ostoskorijärjestelmän kautta seuraavasti: ostettavaksi tarkoitetut tavarat sijoitetaan 'ostoskoriin'. Voit käyttää vastaavaa painiketta navigointipalkissa avataksesi 'ostoskorin' ja tehdäksesi siellä muutoksia milloin tahansa. Kassasivulla voit lisätä henkilötietosi sekä valitsemasi maksu- ja toimitustavan. Lähettämällä tilauksen vastaavan painikkeen kautta ('maksuvelvollinen tilaus' tai vastaava kuvaus) ilmoitat oikeudellisesti sitovan hyväksynnän tarjoukselle, jolloin sopimus tehdään, ja hyväksyt yleiset ehdot, tavaroiden hinnat ja toimituskulut. Tilaus vahvistetaan maksamalla ostoskorin sisältö. Tämä voidaan tehdä joko pikamaksujärjestelmän kautta tai ennakkomaksulla."
                            : "(3) The contract is concluded through the shopping cart system as follows: the goods to be purchased are placed in the 'shopping cart.' You can use the corresponding button in the navigation bar to open the 'shopping cart' and make changes there at any time. On the checkout page, you can add your personal information as well as select your preferred payment and delivery method. By submitting the order via the corresponding button ('order with payment obligation' or similar description), you legally declare your binding acceptance of the offer, and the contract is concluded. You also accept the general terms and conditions, the prices of the goods, and the delivery costs. The order is confirmed by paying the contents of the shopping cart. This can be done either through the express payment system or by prepayment."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(4) Saat tilausvahvistuksen ja maksuvahvistuksen sähköpostitse. Tilausvahvistuksessa näkyvät tilatut tuotteet, mahdolliset alennukset ja toimituskulut. Tilauksen käsittely ja kaikkien sopimuksen tekemisen yhteydessä tarvittavien tietojen toimittaminen automatisoidaan osittain sähköpostitse. Varmista siis, että ostoksesi yhteydessä käyttämäsi sähköpostiosoite on oikea ja että sähköpostiviestien vastaanotto on teknisesti mahdollista eikä sitä estetä roskapostisuodattimien kautta."
                            : "(4) You will receive order confirmation and payment confirmation by email. The order confirmation will show the ordered products, any discounts, and delivery costs. The processing of the order and the provision of all necessary information in connection with the conclusion of the contract will be partly automated by email. Therefore, please ensure that the email address you use for your purchase is correct and that the receipt of email messages is technically possible and not blocked by spam filters."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi" ? "§ 4 Maksaminen" : "§ 4 Payment"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Tavaroiden hinnat ja toimituskulut sisältävät arvonlisäveron. Arvonlisävero riippuu kohdemaasta. Suomeen lähetettävien tavaroiden osalta käytetään Suomessa sovellettavaa arvonlisäverokantaa."
                            : "(1) The prices of the goods and the delivery costs include value-added tax. The value-added tax depends on the destination country. For goods sent to Finland, the applicable value-added tax rate in Finland is used."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(2) Myynti EU:n ulkopuolisiin maihin ja Ahvenanmaalle on arvonlisäverotonta. Verkkokaupan hinnat voivat olla arvonlisäverovapaita riippuen siitä, mistä kohdemaasta tilaus on tehty. Tämä tehdään joko käyttäjän IP-osoitteen avulla, kirjautumalla käyttäjätilille (syöttämällä osoitetiedot) tai viimeistään tilauksen kassalla, kun asiakas on valinnut oikean toimitusmaan."
                            : "(2) Sales to countries outside the EU and to Åland are exempt from value-added tax. The prices in the online store may be exempt from value-added tax, depending on the country from which the order is placed. This is done either through the user's IP address, by logging into the user account (entering address information), or at the latest at the checkout when the customer has selected the correct delivery country."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(3) Kaikki verkkokaupassa käytettävissä olevat maksutavat käsitellään turvallisesti. Maksut tehdään salatun SSL-yhteyden (Secure Sockets Layer) kautta."
                            : "(3) All payment methods available in the online store are processed securely. Payments are made through an encrypted SSL connection (Secure Sockets Layer)."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi"
                            ? "§ 5 Toimitus-, vastuu- ja virhetilanteet"
                            : "§ 5 Delivery, Liability, and Error Situations"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Tilaukset lähetetään arkipäivinä maksun vastaanottamisen jälkeen (yleensä 1-2 päivää). Poikkeavat toimitusajat on ilmoitettu verkkokaupan etusivulla tai kyseisen tuotteen kohdalla. Jos tuotetta ei ole saatavilla tai toimitusaika on muusta syystä pidempi, siitä ilmoitetaan erikseen verkkosivuillamme."
                            : "(1) Orders are dispatched on business days after the payment has been received (usually 1-2 days). Deviating delivery times are indicated on the homepage of the online store or for the respective product. If a product is not available or the delivery time is longer for other reasons, this will be communicated separately on our website."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(2) Toimitamme tilaukset toimitusosoitteeseen antamasi tiedon perusteella. On sinun vastuullasi ilmoittaa toimitusosoite oikein. Jos toimitus ei onnistu virheellisen tai puutteellisen toimitusosoitteen takia, vastaat mahdollisista ylimääräisistä toimituskuluista."
                            : "(2) We deliver orders to the delivery address based on the information you provide. It is your responsibility to provide the correct delivery address. If the delivery fails due to an incorrect or incomplete delivery address, you will be responsible for any additional delivery costs."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(3) Riski tilauksen tuotteiden katoamisesta tai vahingoittumisesta siirtyy sinulle tai valtuutetulle vastaanottajalle toimituksen yhteydessä. Jos paketti on selvästi vaurioitunut kuljetuksessa, sinun on tehtävä asiasta välittömästi reklamaatio kuljetusyhtiölle."
                            : "(3) The risk of loss or damage to the products in the order passes to you or the authorized recipient upon delivery. If the package is clearly damaged during transportation, you must immediately make a complaint to the transportation company."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi" ? "§ 6 Palautukset" : "§ 6 Returns"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Sinulla on Suomen kuluttajasuojalain mukainen oikeus peruuttaa tilaus tai osa siitä 14 päivän kuluessa tilauksen vastaanottamisesta. Peruuttamisoikeuden käyttämiseksi sinun on ilmoitettava meille päätöksestäsi peruuttaa sopimus yksiselitteisellä tavalla (esimerkiksi kirjeellä postitse tai sähköpostitse). Voit käyttää myös tulostettavaa palautuslomakettamme, mutta sen käyttö ei ole pakollista."
                            : "(1) You have the right to cancel the order or a part of it in accordance with the Finnish Consumer Protection Act within 14 days of receiving the order. To exercise the right of cancellation, you must notify us of your decision to cancel the contract in an unambiguous manner (e.g., by letter or email). You can also use our printable return form, but its use is not mandatory."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(2) Jos peruutat sopimuksen, palautamme sinulle kaikki saamamme suoritukset, mukaan lukien toimituskustannukset (paitsi lisäkustannukset, jos olet valinnut jonkin muun kuin edullisimman toimitustapamme tarjoaman vakiotoimitustavan), viivytyksettä ja joka tapauksessa viimeistään 14 päivän kuluttua peruuttamisilmoituksen saatuamme. Suoritamme palautuksen käyttäen samaa maksutapaa kuin alkuperäisessä liiketoimessa, ellet ole nimenomaisesti suostunut muuhun, ja joka tapauksessa siten, että sinulle ei aiheudu suoritusten palauttamisesta kustannuksia."
                            : "(2) If you cancel the contract, we will refund all payments received from you, including delivery costs (except for additional costs incurred if you have chosen a delivery method other than the least expensive standard delivery method we offer), without undue delay and in any case no later than 14 days from the date we receive notice of cancellation. We will make the refund using the same means of payment as you used in the original transaction, unless you have expressly agreed otherwise, and in any case, without any fees charged to you for the refund."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(3) Sinun on palautettava tavarat viivytyksettä ja viimeistään 14 päivän kuluttua peruuttamisilmoituksen tekemisestä. Määräaikaa on noudatettu, jos lähetät tavarat takaisin ennen kyseisen 14 päivän määräajan päättymistä. Palauttamisesta aiheutuvat suorat kulut sinun on maksettava."
                            : "(3) You must return the goods without undue delay and in any case no later than 14 days from the date of cancellation. The deadline is met if you send back the goods before the expiry of the 14-day period. You will bear the direct cost of returning the goods."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(4) Sinun vastuullasi on vain sellaisen tavaroiden arvon alentumisen korvaaminen, joka on seuraus- ta muusta kuin tavaroiden luonteen, ominaisuuksien ja toimivuuden toteamiseksi tarvittavasta käsittelystä. Voit tutustua tuotteeseen ja kokeilla sitä samaan tapaan kuin voisit tehdä myymälässä, mutta et ottaa sitä varsinaiseen käyttöön."
                            : "(4) You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics, and functioning of the goods. You may examine the product and try it out in the same way as you would in a store, but you may not put it into actual use."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi"
                            ? "§ 7 Reklamaatiot"
                            : "§ 7 Complaints"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Jos tuote on virheellinen tai vaurioitunut, ota välittömästi yhteyttä asiakaspalveluumme ja ilmoita reklamaatiosta. Reklamaation yhteydessä pyydämme sinua toimittamaan tarkat tiedot virheestä tai vauriosta sekä tilausnumeron tai muut tilausta koskevat tiedot."
                            : "(1) If the product is defective or damaged, please contact our customer service immediately and report the complaint. In connection with the complaint, we ask you to provide detailed information about the defect or damage, as well as the order number or other information related to the order."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(2) Reklamaatiot käsitellään yleensä viivytyksettä. Voimme tarvittaessa pyytää sinua lähettämään lisätietoja tai valokuvia reklamaation tueksi. Hyväksyttyä reklamaatiota koskevat hyvitykset tai korvaukset suoritetaan sopimuksen mukaisella tavalla."
                            : "(2) Complaints are usually processed without delay. If necessary, we may ask you to provide additional information or photographs to support the complaint. Compensations or reimbursements related to accepted complaints are made in accordance with the contract."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi"
                            ? "§ 8 Ylivoimainen este"
                            : "§ 8 Force Majeure"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "Emme ole vastuussa viivästyksistä tai vahingoista, jotka aiheutuvat meidän vaikutusmahdollisuuksiemme ulkopuolella olevasta esteestä, jota emme ole kohtuudella voineet ennakoida tai joka vaikuttaa olennaisesti sopimuksen täyttämiseen, kuten esimerkiksi lakko, tulipalo, sota, viranomaismääräys, liikennehäiriöt tai muu vastaava ylivoimainen este."
                            : "We are not liable for delays or damages caused by an obstacle beyond our control, which we could not reasonably have anticipated or which significantly affects the fulfillment of the contract, such as a strike, fire, war, official order, traffic disruption, or other similar force majeure."}
                    </p>

                    <h2 className="font-semibold text-2xl mb-4">
                        {language === "fi"
                            ? "§ 9 Riitojen ratkaisu"
                            : "§ 9 Dispute Resolution"}
                    </h2>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(1) Tästä sopimuksesta aiheutuvat riidat pyritään ensisijaisesti ratkaisemaan neuvottelemalla osapuolten kesken."
                            : "(1) Disputes arising from this agreement shall primarily be resolved through negotiation between the parties."}
                    </p>
                    <p className="mb-2">
                        {language === "fi"
                            ? "(2) Mikäli neuvotteluissa ei päästä ratkaisuun, riidat käsitellään toimivaltaisessa tuomioistuimessa Suomen lainsäädännön mukaisesti."
                            : "(2) If the negotiations do not lead to a resolution, the disputes shall be resolved in a competent court in accordance with Finnish law."}
                    </p>
                </div>
            </div>
        </div>
    );
}
