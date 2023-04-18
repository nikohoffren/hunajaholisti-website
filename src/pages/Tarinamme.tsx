import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Tarinamme() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  return (
      <>
        <div className="container center">
          <h3>{language === "fi" ? "TARINAMME" : "OUR STORY"}</h3>
        </div>
        <div className="container margin-bottom even-smaller-width">
          <hr />
        </div>

        <div className="container center">
          <div className="img-container">
            <img className="circle" src="HHheidi1.jpg" alt="Heidi Kääriäinen" />
          </div>
          <div className="small-padding">
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
            <br />
            <br />
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
            <p>
              {language === "fi"
                ? "Mehiläistarhauksen arkea pääset vakoilemaan seuraamalla Instagramissa tiliä Hunajaholisti."
                : "You can spy on everyday life in beekeeping by following Hunajaholisti on Instagram."}
            </p>
            <br />
            <br />
            <p>
              <span className="bold">
                {language === "fi" ? "Hunajaisin terveisin, Heidi" : "Best regards, Heidi"}
              </span>
            </p>
                <div className="container really-small-width extra-small-padding">
                  <hr className="hr-grey" />
              </div>
          </div>
        </div>
      </>
    )
}
