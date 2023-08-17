interface LocalizedData {
  name: string;
  description: string[];
  alt: string;
}

interface Price {
  text: string;
  value: number;
}

export type callToAction = "add_to_cart" | "message_us" | "coming_soon";

export interface Product {
  id: string;
  indexName: string;
  price: Price | undefined;
  fi: LocalizedData;
  en: LocalizedData;
  image: string;
  extraUrl: string | undefined;
  cta: "add_to_cart" | "message_us" | "coming_soon";
}
export const productsData: Product[] = [
  {
    /* Hunaja */
    id: "5",
    indexName: "Honey350",
    price: undefined,
    fi: {
      name: "Hunaja 350g",
      description: [
        "Mehiläistarhamme sijaitsevat puhtaan luonnon keskellä, kaukana isoista teistä ja ruuhkasta. Osa tarhoistamme sijaitsee metsäalueilla ja osa luomupeltojen vieressä.",
        "Moni kysyy onko hunajamme hyvää ja vastaus on tietysti: Kyllä, se on suorastaan herkullista! Hunajaa ei ole myöskään missään vaiheessa kuumennettu. Jos pidät kennohunajasta, sitä voi tiedustella suoraan meiltä esimerkiksi Facebookin yksityisviestillä.",
      ],
      alt: "Hunaja",
    },
    en: {
      name: "Honey 350g",
      description: [
        "Our bee farms are located in the middle of pure nature, far from big roads and traffic. Some of our farms are located in forest areas and some next to organic fields.",
        "Many people ask if our honey is good and the answer is of course: Yes, it's delicious! Our honey has also never been heated. If you like comb honey, you can inquire about it directly from us via Facebook private message.",
      ],
      alt: "Honey",
    },
    image: "HHlahja.jpg",
    extraUrl: undefined,
    cta: "message_us",
  },
  {
    /* Iso kummipesä */
    id: "1",
    indexName: "BigHive",
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
    },
    en: {
      name: "Big Adopt a Hive",
      description: [
        "Interested in beekeeping and love honey? Adopt a Hive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a Adopt a Hive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 5 jars of honey (350g). The recipient will also receive a diploma of the Adopt a Hive by mail.",
      ],
      alt: "Big Hive",
    },
    image: "HHkuva5.jpg",
    extraUrl: undefined,
    cta: "add_to_cart",
  },
  {
    /* Pieni kummipesä */
    id: "2",
    indexName: "SmallHive",

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
    },
    en: {
      name: "Small Adopt a Hive",
      description: [
        "Interested in beekeeping and love honey? Adopt a Hive is a great way to observe the life of a beehive for one season. It is also a great gift for someone interested in bees. When you buy a Adopt a Hive, we will regularly send you updates from the beehive via email. Of course, at the end of the harvest season, we will collect the honey and deliver it to the recipient immediately after extraction. In addition to regular hive updates, the package includes 3 jars of honey (350g). The recipient will also receive a diploma of the Adopt a Hive by mail.",
      ],
      alt: "Small Hive",
    },
    image: "HHkuva5.jpg",
    extraUrl: undefined,
    cta: "add_to_cart",
  },
  {
    /* Siitepöly */
    id: "3",
    indexName: "Pollen250",
    price: {
      text: "35,00 €",
      value: 3500,
    },
    fi: {
      name: "SIITEPÖLY 250g",
      description: [
        "Mehiläisten keräämä siitepöly sisältää ainakin proteiinia, aminohappoja, rasvoja, aminohappoja, A-, B-, C- ja E- vitamiineja, mineraalea, fytosteroleita, flavonoideja ja hiilihydraatteja. Mehiläiset keräävät tätä proteiinipitoista ruokaa toukilleen ruuaksi. Mehiläispesä tarvitsee siitepölyä noin 30-40kg vuodessa. Ihminenkin voi käyttää siitepölyä proteiinin lähteenä. Itse sekoittelen aamujogurttiini siitepölyä pari teelusikallista iltasella tekeytymään.",
      ],

      alt: "Siitepöly",
    },
    en: {
      name: "POLLEN 250g",
      description: [
        "Bees collect pollen as food for their larvae. Bees need pollen for about 30-40kg per year. Humans can also use pollen as a protein source. I mix a couple of teaspoons of pollen into my morning yogurt to ferment in the evening.",
      ],

      alt: "Pollen",
    },
    image: "HHkuvaSiitepoly.jpeg",
    extraUrl:
      "https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/siitepoly/",
    cta: "coming_soon",
  },
  {
    id: "4",
    indexName: "Propolis",
    price: {
      text: "35,00 €",
      value: 3500,
    },
    fi: {
      name: "PROPOLIS",
      description: [
        "Mehiläisten keräämä siitepöly sisältää ainakin proteiinia, aminohappoja, rasvoja, aminohappoja, A-, B-, C- ja E- vitamiineja, mineraalea, fytosteroleita, flavonoideja ja hiilihydraatteja. Mehiläiset keräävät tätä proteiinipitoista ruokaa toukilleen ruuaksi. Mehiläispesä tarvitsee siitepölyä noin 30-40kg vuodessa. Ihminenkin voi käyttää siitepölyä proteiinin lähteenä. Itse sekoittelen aamujogurttiini siitepölyä pari teelusikallista iltasella tekeytymään.",
      ],
      alt: "Siitepöly",
    },
    en: {
      name: "PROPOLIS",
      description: [
        "Propolis is a substance bees use to seal off unwanted holes in the hive. Propolis has a disinfectant effect in the beehive. Bees collect the ingredients for propolis from the buds of trees and shrubs. Buds secrete resinous and fragrant resinous substances.",
      ],
      alt: "Pollen",
    },
    image: "HHlogo.jpg",
    extraUrl: "https://hunaja.net/hunajatietoa/muut-mehilaistuotteet/propolis/",
    cta: "coming_soon",
  },
];
