interface LocalizedData {
  name: string;
  description: string[];
  tax: string | undefined;
  alt: string;
}

interface Price {
  text: string;
  value: number;
}

export type callToAction = "add_to_cart" | "message_us" | "coming_soon";

export interface Product {
  id: string;
  price: Price | undefined;
  fi: LocalizedData;
  en: LocalizedData;
  exInfoURL: string | undefined;
  image: string;
  CTA: "add_to_cart" | "message_us" | "coming_soon";
}
export const productsData: Product[] = [
  {
    id: "1",
    price: {
      text: "49,00 €",
      value: 4900,
    },
    fi: {
      name: "Iso Kummipesä",
      description: [
        "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 5 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse.",
      ],

      alt: "Iso kummipesä",
      tax: "Sis. ALV 24,00%",
    },
    en: {
      name: "Big Adopt a Hive",
      description: [
        "Interested in beekeeping and love honey? Adopt a Hive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a Adopt a Hive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 5 jars of honey (350g). The recipient will also receive a diploma of the Adopt a Hive by mail.",
      ],
      alt: "Big Hive",
      tax: "VAT 24.00% included",
    },
    exInfoURL: undefined,
    image: "HHkuva5.jpg",
    CTA: "add_to_cart",
  },
  {
    id: "2",
    price: {
      text: "35,00 €",
      value: 3500,
    },
    fi: {
      name: "Pieni Kummipesä",
      description: [
        "Kiinnostaako mehiläistarhaus ja pidät hunajasta? Kummipesä on hyvä vaihtoehto seurata mehiläispesän elämää yhden hoitokauden verran. Se sopii mainiosti lahjaksi mehiläisistä kiinnostuneelle. Ostaessasi kummipesän lähetämme säännöllisesti terveiset mehiläispesältä sähköpostiisi. Totta kai satokauden päätteeksi kerätään hunajat ja ne toimitetaan saajalle heti linkouksen jälkeen. Pakettiin kuuluu säännöllisten pesäterveisten lisäksi 3 purkkia hunajaa (350g). Näiden lisäksi saajalle toimitetaan diplomi kummipesästä postitse.",
      ],
      alt: "Pieni Kummipesä",
      tax: "Sis. ALV 24,00%",
    },
    en: {
      name: "Small Adopt a Hive",
      description: [
        "Interested in beekeeping and love honey? Adopt a Hive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a Adopt a Hive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 3 jars of honey (350g). The recipient will also receive a diploma of the Adopt a Hive by mail.",
      ],
      alt: "Small Hive",
      tax: "VAT 24.00% included",
    },
    exInfoURL: undefined,
    image: "HHkuva5.jpg",
    CTA: "add_to_cart",
  },
  {
    id: "3",
    price: {
      text: "35,00 €",
      value: 3500,
    },
    fi: {
      name: "SIITEPÖLY 250g",
      description: [
        "Mehiläisten keräämä siitepöly sisältää ainakin proteiinia, aminohappoja, rasvoja, aminohappoja, A-, B-, C- ja E- vitamiineja, mineraalea, fytosteroleita, flavonoideja ja hiilihydraatteja. Mehiläiset keräävät tätä proteiinipitoista ruokaa toukilleen ruuaksi. Mehiläispesä tarvitsee siitepölyä noin 30-40kg vuodessa. Ihminenkin voi käyttää siitepölyä proteiinin lähteenä. Itse sekoittelen aamujogurttiini siitepölyä pari teelusikallista iltasella tekeytymään.",
        "Lisätietoa siitepölystä saa esimerkiksi täältä: ",
      ],

      alt: "Siitepöly",
      tax: "Sis. ALV 24,00%",
    },
    en: {
      name: "POLLEN 250g",
      description: [
        "Bees collect pollen as food for their larvae. Bees need pollen for about 30-40kg per year. Humans can also use pollen as a protein source. I mix a couple of teaspoons of pollen into my morning yogurt to ferment in the evening.",
        "Lisätietoa propoliksesta voit lukea esimerkiksi täältä: ",
      ],

      alt: "Pollen",
      tax: "VAT 24.00% included",
    },
    exInfoURL:
      "https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/",
    image: "HHkuvaSiitepoly.jpeg",
    CTA: "coming_soon",
  },
  {
    id: "4",
    price: {
      text: "35,00 €",
      value: 3500,
    },
    fi: {
      name: "PROPOLIS",
      description: [
        "Mehiläisten keräämä siitepöly sisältää ainakin proteiinia, aminohappoja, rasvoja, aminohappoja, A-, B-, C- ja E- vitamiineja, mineraalea, fytosteroleita, flavonoideja ja hiilihydraatteja. Mehiläiset keräävät tätä proteiinipitoista ruokaa toukilleen ruuaksi. Mehiläispesä tarvitsee siitepölyä noin 30-40kg vuodessa. Ihminenkin voi käyttää siitepölyä proteiinin lähteenä. Itse sekoittelen aamujogurttiini siitepölyä pari teelusikallista iltasella tekeytymään.",
        "Lisätietoa siitepölystä saa esimerkiksi täältä: ",
      ],

      alt: "Siitepöly",
      tax: "Sis. ALV 24,00%",
    },
    en: {
      name: "PROPOLIS",
      description: [
        "Propolis is a substance bees use to seal off unwanted holes in the hive. Propolis has a disinfectant effect in the beehive. Bees collect the ingredients for propolis from the buds of trees and shrubs. Buds secrete resinous and fragrant resinous substances.",
        "More information about propolis can be found here: ",
      ],

      alt: "Pollen",
      tax: "VAT 24.00% included",
    },
    exInfoURL:
      "https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/",
    image: "HHlogo.jpg",
    CTA: "coming_soon",
  },
  {
    id: "5",
    price: undefined,
    fi: {
      name: "Hunaja 350g",
      description: [
        "Mehiläistarhamme sijaitsevat puhtaan luonnon keskellä, kaukana isoista teistä ja ruuhkasta. Osa tarhoistamme sijaitsee metsäalueilla ja osa luomupeltojen vieressä.",
        "Moni kysyy onko hunajamme hyvää ja vastaus on tietysti: Kyllä, se on suorastaan herkullista! Hunajaa ei ole myöskään missään vaiheessa kuumennettu. Jos pidät kennohunajasta, sitä voi tiedustella suoraan meiltä esimerkiksi Facebookin yksityisviestillä.",
      ],

      alt: "Hunaja",
      tax: undefined,
    },
    en: {
      name: "Honey 350g",
      description: [
        "Our bee farms are located in the middle of pure nature, far from big roads and traffic. Some of our farms are located in forest areas and some next to organic fields.",
        "Many people ask if our honey is good and the answer is of course: Yes, it's delicious! Our honey has also never been heated. If you like comb honey, you can inquire about it directly from us via Facebook private message.",
      ],

      alt: "Honey",
      tax: undefined,
    },
    exInfoURL: undefined,
    image: "HHlahja.jpg",
    CTA: "message_us",
  },
];
