import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "./LanguageContext";

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Navbar() {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="black small-margin-top">
                <div className={`${!isOpen ? "nav-links" : "nav-links-2"}`}>
                    <i className="fa fa-times" onClick={toggleSideNav}></i>
                    <ul id="navLinks" className="right center">
                        <li onClick={toggleSideNav}>
                            <CustomLink to="/">
                                <img
                                    className="header-logo"
                                    src="HHlogo.jpg"
                                    alt=""
                                />
                            </CustomLink>
                        </li>
                        <li onClick={toggleSideNav}>
                            <CustomLink
                                className="btn yellow black-text custom-buttons"
                                to="/tarinamme"
                            >
                                {language === "fi" ? "TARINAMME" : "OUR STORY"}
                            </CustomLink>
                        </li>
                        <li onClick={toggleSideNav}>
                            <CustomLink
                                className="btn yellow black-text custom-buttons"
                                to="/tuotteemme"
                            >
                                {language === "fi" ? "TUOTTEEMME" : "PRODUCTS"}
                            </CustomLink>
                        </li>
                        <li onClick={toggleSideNav}>
                            <a
                                href="https://holvi.com/shop/WbXD2B/"
                                className="btn yellow black-text custom-buttons"
                                target="_blank"
                            >
                                {language === "fi"
                                    ? "VERKKOKAUPPA"
                                    : "ONLINE SHOP"}
                            </a>
                        </li>
                        <li>
                            <LanguageSelector setLanguage={setLanguage} />
                        </li>
                    </ul>
                </div>
                <i className="fa fa-bars right" onClick={toggleSideNav}></i>
            </nav>
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link to={to} className={isActive ? "active" : ""} {...props}>
            {children}
        </Link>
    );
}
