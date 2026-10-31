import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { LanguageContext } from "../components/LanguageContext";
import { CartContext } from "../components/CartContext";
import { HOLVI_SHOP_URL, SHOP } from "../config";
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

  const closeNav = () => setIsOpen(false);

  const desktopLinkClass =
    "text-sm font-semibold tracking-wide uppercase text-forest-800 bg-transparent transition-colors duration-200 hover:text-amber-600";

  const mobileLinkClass =
    "block px-6 py-4 text-base font-semibold tracking-wide uppercase text-forest-900";

  const logo = (
    <Link to="/" onClick={closeNav} className="flex items-center gap-3 group">
      <img
        className="h-11 w-11 rounded-full object-cover ring-2 ring-amber-400/60 transition-transform duration-200 group-hover:scale-105"
        src="HHlogo.jpg"
        alt="Hunajaholistin Hunaja logo"
      />
      <span className="hidden sm:block font-display text-lg text-forest-900 tracking-tight leading-tight">
        Hunajaholistin
        <span className="block text-sm text-amber-700 font-sans font-semibold tracking-wide uppercase">
          Hunaja
        </span>
      </span>
    </Link>
  );

  const navItems = (
    <>
      <li>
        <Link
          className={desktopLinkClass}
          to="/tarinamme"
          onClick={closeNav}
        >
          {language === "fi" ? "Tarinamme" : "Our story"}
        </Link>
      </li>
      <li>
        <a
          className={desktopLinkClass}
          href={HOLVI_SHOP_URL}
          target="_blank"
          rel="noreferrer noopener"
          onClick={closeNav}
        >
          {language === "fi" ? "Tuotteemme" : "Products"}
        </a>
      </li>
      <li>
        <Link className={desktopLinkClass} to="/galleria" onClick={closeNav}>
          {language === "fi" ? "Galleria" : "Gallery"}
        </Link>
      </li>
      <li>
        <LanguageSelector setLanguage={setLanguage} hoverClass="" />
      </li>
      {SHOP && (
        <li>
          <Link
            className={`${desktopLinkClass} relative inline-flex items-center gap-2`}
            to="/cart"
            onClick={closeNav}
            aria-label={language === "fi" ? "Ostoskori" : "Cart"}
          >
            <i className="fas fa-shopping-bag"></i>
            {cartItemsCount > 0 && (
              <span className="absolute -right-3 -top-2 bg-amber-500 text-forest-950 text-xs font-bold w-5 h-5 inline-flex justify-center items-center rounded-full">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Blur lives on this inner bar only — backdrop-filter traps fixed children */}
      <div className="border-b border-amber-700/10 bg-honey/80 backdrop-blur-md">
        <div className="page-shell flex items-center justify-between py-3">
          {logo}

          <button
            className="inline-flex lg:hidden items-center justify-center w-10 h-10 text-forest-800 bg-transparent"
            onClick={toggleSideNav}
            id="toggleButton"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <i className={`fa ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>

          <ul className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems}
          </ul>
        </div>
      </div>

      {/* Mobile drawer — sibling of blur bar so fixed positioning uses the viewport */}
      <div
        className={`lg:hidden fixed inset-0 top-[4.25rem] z-50 bg-honey transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="pt-4 pb-8 space-y-1 overflow-auto h-full">
          <li>
            <Link
              className={mobileLinkClass}
              to="/tarinamme"
              onClick={closeNav}
            >
              {language === "fi" ? "Tarinamme" : "Our story"}
            </Link>
          </li>
          <li>
            <a
              className={mobileLinkClass}
              href={HOLVI_SHOP_URL}
              target="_blank"
              rel="noreferrer noopener"
              onClick={closeNav}
            >
              {language === "fi" ? "Tuotteemme" : "Products"}
            </a>
          </li>
          <li>
            <Link
              className={mobileLinkClass}
              to="/galleria"
              onClick={closeNav}
            >
              {language === "fi" ? "Galleria" : "Gallery"}
            </Link>
          </li>
          <li className="px-6 pt-3">
            <LanguageSelector setLanguage={setLanguage} hoverClass="" />
          </li>
          {SHOP && (
            <li>
              <Link
                className={`${mobileLinkClass} inline-flex items-center gap-2`}
                to="/cart"
                onClick={closeNav}
                aria-label={language === "fi" ? "Ostoskori" : "Cart"}
              >
                <i className="fas fa-shopping-bag"></i>
                {language === "fi" ? "Ostoskori" : "Cart"}
                {cartItemsCount > 0 && (
                  <span className="bg-amber-500 text-forest-950 text-xs font-bold w-5 h-5 inline-flex justify-center items-center rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
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
