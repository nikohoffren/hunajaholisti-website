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
    <div className="fixed z-10 inset-x-0 bottom-0 p-4 bg-yellow-100 border-t shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {language === "fi" ? "Me käytämme evästeitä" : "We use cookies"}
          </h3>
          <p className="text-sm text-gray-500">
            {language === "fi"
              ? "Käytämme evästeitä tallentaaksemme ostoskorisi sisällön myöhempää käyttöä varten. Hyväksymällä annat meille luvan tallentaa tämän tiedon selaimeesi."
              : "We use cookies to save your cart contents for later use. By accepting, you allow us to store this information in your browser."}
          </p>
        </div>
        <div>
          <button
            type="button"
            className="mr-2 inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onAccept}
          >
            {language === "fi" ? "Hyväksy" : "I Accept"}
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
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
