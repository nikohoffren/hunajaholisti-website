import React from "react";
import { Link } from "react-router-dom";

// You should replace this with your actual cart items
const cartItems = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
];

const Cart = () => {
    return (
        <>
            {" "}
            <div className="py-20"></div>
            <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    Your Cart
                </h2>
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b py-4"
                        >
                            <h3 className="text-lg font-semibold text-gray-600">
                                {item.name}
                            </h3>
                            <p className="font-bold text-gray-700">
                                ${item.price}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                        <span className="text-gray-600">Total:</span>
                        <span className="text-gray-700 font-bold text-lg ml-2">
                            $
                            {cartItems.reduce(
                                (total, item) => total + item.price,
                                0
                            )}
                        </span>
                    </div>
                    <Link
                        to="/checkout"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;
