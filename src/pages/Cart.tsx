import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import { LanguageContext } from "../components/LanguageContext";

interface IItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { cartItems, total } = state;
    console.log("Cart items:", cartItems);

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
            <>
                <div className="py-20"></div>
                <div className="container backdrop-blur bg-white bg-opacity-5 mx-auto p-6 shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-100">
                        {language === "fi" ? "Ostoskorisi" : "Your Cart"}
                    </h2>
                    <p className="text-white">
                        {language === "fi"
                            ? "Ostoskori on tyhjä!"
                            : "Cart is empty!"}
                    </p>
                    <div className="text-center py-4">
                        <Link
                            to={"/tuotteemme"}
                            className="inline-block px-8 py-4 text-lg text-white bg-yellow-600 rounded-lg transform transition-all duration-200 hover:bg-yellow-500 hover:scale-105"
                        >
                            {language === "fi"
                                ? "Aloita ostaminen"
                                : "Start Shopping"}
                        </Link>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="py-20"></div>
                <div className="container backdrop-blur bg-white bg-opacity-5 mx-auto p-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-100">
                        {language === "fi" ? "Ostoskorisi" : "Your Cart"}
                    </h2>
                    <div className="space-y-4">
                        {cartItems &&
                            cartItems.map((item: IItem) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b py-4"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-gray-100 mr-4">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() =>
                                                    handleDecrease(item.id)
                                                }
                                                className="bg-red-400 text-white px-2 py-1 rounded"
                                            >
                                                -
                                            </button>
                                            <span className="text-white ">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleIncrease(item.id)
                                                }
                                                className="bg-green-400 text-white px-2 py-1 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold text-white mr-4">
                                            {item.price / 100} € / kpl
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                            className="text-sm text-red-500 underline hover:text-red-600"
                                        >
                                            {language === "fi"
                                                ? "Poista"
                                                : "Remove"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {cartItems && cartItems.length > 0 && (
                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                            <div className="flex items-center">
                                <span className="text-gray-100 font-semibold">
                                    {language === "fi" ? "Yhteensä:" : "Total:"}
                                </span>
                                <span className="text-white font-bold text-lg ml-2">
                                    {total / 100} €
                                </span>
                            </div>
                            <Link
                                to="/checkout"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                            >
                                {language === "fi"
                                    ? "Siirry kassalle"
                                    : "Proceed to Checkout"}
                            </Link>
                        </div>
                    )}
                </div>
            </>
        );
    }
};

export default Cart;
