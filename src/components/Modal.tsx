import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

interface ModalProps {
  onAccept: () => void;
  onReject: () => void;
}

function Modal({ onAccept, onReject }: ModalProps) {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  return (
    <div className="fixed z-50 inset-x-0 bottom-0 p-4 sm:p-5 bg-honey-soft border-t border-amber-200/50 shadow-[0_-8px_30px_rgba(31,47,39,0.08)]">
      <div className="page-shell flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="max-w-3xl">
          <h3 className="font-display text-lg text-forest-900">
            {language === "fi" ? "Käytämme evästeitä" : "We use cookies"}
          </h3>
          <p className="text-sm text-forest-600 mt-1 leading-relaxed">
            {language === "fi"
              ? "Käytämme evästeitä tallentaaksemme ostoskorisi sisällön myöhempää käyttöä varten. Hyväksymällä annat meille luvan tallentaa tämän tiedon selaimeesi."
              : "We use cookies to save your cart contents for later use. By accepting, you allow us to store this information in your browser."}
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            className="btn-primary text-xs px-5 py-2.5"
            onClick={onAccept}
          >
            {language === "fi" ? "Hyväksy" : "I Accept"}
          </button>
          <button
            type="button"
            className="btn-secondary text-xs px-5 py-2.5"
            onClick={onReject}
          >
            {language === "fi" ? "Hylkää" : "I Reject"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
