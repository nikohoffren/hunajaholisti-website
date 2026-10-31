import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import { LanguageContext } from "../components/LanguageContext";

interface IItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  alt: string;
}

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cartItems, total } = state;

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE", id });
  };

  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };

  const handleIncrease = (id: string) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

  const handleDecrease = (id: string) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  if (cartItems.length < 1) {
    return (
      <div className="pt-28 pb-20 page-shell">
        <div className="max-w-2xl mx-auto bg-honey-soft border border-amber-200/50 p-10 text-center">
          <h1 className="section-heading text-3xl mb-4">
            {language === "fi" ? "Ostoskorisi" : "Your cart"}
          </h1>
          <p className="text-forest-600 text-lg mb-8">
            {language === "fi" ? "Ostoskori on tyhjä." : "Your cart is empty."}
          </p>
          <Link to="/tuotteemme" className="btn-primary">
            {language === "fi" ? "Aloita ostaminen" : "Start shopping"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 page-shell">
      <div className="max-w-3xl mx-auto bg-honey-soft border border-amber-200/50 p-6 sm:p-10">
        <h1 className="section-heading text-3xl mb-8">
          {language === "fi" ? "Ostoskorisi" : "Your cart"}
        </h1>
        <div className="space-y-6">
          {cartItems &&
            cartItems.map((item: IItem) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4 border-b border-forest-100"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="rounded-full w-14 h-14 object-cover ring-2 ring-amber-200"
                    src={item.image}
                    alt={item.alt}
                  />
                  <div>
                    <h3 className="font-display text-xl text-forest-900">
                      {item.name}
                    </h3>
                    <p className="text-forest-600 text-sm mt-0.5">
                      {item.price / 100} € / {language === "fi" ? "kpl" : "pc"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="w-8 h-8 border border-forest-200 text-forest-800 hover:bg-forest-50 rounded"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold text-forest-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-8 h-8 border border-forest-200 text-forest-800 hover:bg-forest-50 rounded"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-sm text-forest-500 underline underline-offset-2 hover:text-amber-700"
                  >
                    {language === "fi" ? "Poista" : "Remove"}
                  </button>
                </div>
              </div>
            ))}
        </div>
        {cartItems && cartItems.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-forest-100">
            <div className="flex items-baseline gap-2">
              <span className="text-forest-600 font-medium">
                {language === "fi" ? "Yhteensä:" : "Total:"}
              </span>
              <span className="font-display text-2xl text-forest-900">
                {total / 100} €
              </span>
            </div>
            <Link to="/checkout" className="btn-primary">
              {language === "fi" ? "Siirry kassalle" : "Proceed to checkout"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
