import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { LanguageContext } from "../components/LanguageContext";
import { CartContext } from "../components/CartContext";
import React from "react";
interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Navbar() {
    const { state } = useContext(CartContext);
    const cartItemsCount = state.cartItems.reduce(
        (count: any, item: { quantity: any }) => count + item.quantity,
        0
    );

    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-black bg-opacity-75 p-3 pl-8 pr-8 fixed flex items-center justify-between top-0 w-full z-50 lg:backdrop-blur">
                <div className="flex justify-between items-center w-full lg:w-auto">
                    <button
                        className="inline-block lg:hidden w-8 h-8 bg-black-500 text-white p-1 ml-3"
                        onClick={toggleSideNav}
                        id="toggleButton"
                    >
                        {isOpen ? "=" : <i className="fa fa-bars"></i>}
                    </button>
                </div>

                <ul
                    className={`fixed backdrop-blur transform top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white pt-20 pb-5 space-y-3 transition-transform duration-200 ease-in-out overflow-auto ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:static lg:translate-x-0 lg:flex lg:items-center lg:w-auto lg:space-y-0 lg:space-x-10 lg:pt-0 lg:pb-0 lg:bg-transparent`}
                >
                    <li className="mobile-img">
                        <Link to="/" onClick={toggleSideNav}>
                            <div className="group-hover:border-white">
                                <img
                                    className="header-logo h-12 w-12 transition-transform duration-200 ease-in-out transform hover:scale-105"
                                    src="HHlogo.jpg"
                                    alt="Hunajaholistin Hunaja logo"
                                />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-6 mx-2 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-white lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-yellow-300 hover:scale-105"
                            to="/tarinamme"
                            onClick={toggleSideNav}
                        >
                            {language === "fi" ? "TARINAMME" : "OUR STORY"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-6 mx-2 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-white lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-yellow-300 hover:scale-105"
                            to="/tuotteemme"
                            onClick={toggleSideNav}
                        >
                            {language === "fi" ? "TUOTTEEMME" : "PRODUCTS"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-6 mx-2 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-white lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-yellow-300 hover:scale-105"
                            to="/galleria"
                            onClick={toggleSideNav}
                        >
                            {language === "fi" ? "GALLERIA" : "GALLERY"}
                        </Link>
                    </li>
                    {/* <li>
                        <a
                            className="block px-6 mx-2 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-white lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-yellow-300 hover:scale-105"
                            href="https://holvi.com/shop/WbXD2B/"
                            target="_blank"
                            onClick={toggleSideNav}
                        >
                            {language === "fi" ? "VERKKOKAUPPA" : "ONLINE SHOP"}
                        </a>
                    </li> */}
                    <li className="px-5 py-3 lg:px-0 lg:py-0 mobile-img-flag">
                        <LanguageSelector
                            setLanguage={setLanguage}
                            hoverClass="hover:shadow-lg"
                        />
                    </li>
                    <li>
                        <Link
                            className="block px-6 mx-2 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-800 hover:text-white lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-yellow-300 hover:scale-105"
                            to="/cart"
                            onClick={toggleSideNav}
                        >
                            <i className="fas fa-shopping-cart"></i>

                            {cartItemsCount > 0 && (
                                <span className="bg-red-500 rounded-full text-white text-sm w-5 h-5 inline-flex justify-center items-center ml-1">
                                    {cartItemsCount}
                                </span>
                            )}
                            {/* {language === "fi" ? " Ostoskori" : " Cart"} */}
                        </Link>
                    </li>
                </ul>
            </nav>
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
