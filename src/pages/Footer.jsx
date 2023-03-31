import React, { useContext } from "react";
import { LanguageContext } from "/src/LanguageContext";

export default function Footer() {
    const { language } = useContext(LanguageContext)
    return <>
        <div id="footer">
            <div className="container smaller-width">
                <hr />
            </div>

            <div className="container center">
                <div className="icons">
                    <a href="https://www.facebook.com/hunajaholisti" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/hunajaholisti" target="_blank"><i className="fa fa-instagram"></i></a>
                </div>

                <p className="footer-text">
                    <strong>{language === "fi" ? "Hunajaholistin Hunaja" : "Honeyholic's Honey"}</strong>
                </p>

                <p className="footer-text">
                    <strong>Liitokuja 4 C,</strong>
                    <strong>03100 VIHTI</strong>
                </p>

                <p className="footer-text">
                    <strong>hunajaholisti@gmail.com</strong>
                </p>

                <p className="footer-text">
                    <strong>{language === "fi" ? "puh. 0" : "+358 "}44 0550575</strong>

                </p>
                <p className="footer-text">
                    <strong>{language === "fi" ? "Business ID: " : "Y-tunnus: "}3163385-5</strong>
                </p>
            </div>

            <footer className="section">
                <div className="grey-text center">Copyright &#169; 2023 Niko Hoffrén<br />Coded with Vite <a href="https://vitejs.dev/" target="_blank"><img src="/vite.svg" className="logos" alt="Vite logo" /></a> & React <a href="https://reactjs.org/" target="_blank"><img src="/react.svg" className="logos" alt="React logo" /></a>. Hosted by Netlify</div>
            </footer>
        </div>
    </>
}
