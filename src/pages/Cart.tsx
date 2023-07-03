import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "src/CartContext";

interface IItem {
    id: string;
    name: string;
    price: number;
}

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { cartItems, total } = state;
    console.log("Cart items:", cartItems);

    const handleRemove = (id: string) => {
        dispatch({ type: "REMOVE", id });
    };

    return (
        <>
            <div className="py-20"></div>
            <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    Your Cart
                </h2>
                <div className="space-y-4">
                    {cartItems &&
                        cartItems.map((item: IItem) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                <h3 className="text-lg font-semibold text-gray-600">
                                    {item.name}
                                </h3>
                                <div className="flex items-center">
                                    <p className="font-bold text-gray-700 mr-4">
                                        ${item.price}
                                    </p>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-sm text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                {cartItems && cartItems.length > 0 && (
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                        <div className="flex items-center">
                            <span className="text-gray-600">Total:</span>
                            <span className="text-gray-700 font-bold text-lg ml-2">
                                ${total}
                            </span>
                        </div>
                        <Link
                            to="/checkout"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
