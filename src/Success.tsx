import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <>
            <div className="py-20"></div>
            <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-500">
                    Payment Successful!
                </h2>
                <p className="text-gray-700 mb-4">
                    Thank you for your purchase. Your order is being processed
                    and will be shipped out soon.
                </p>
                <Link
                    to="/tuotteemme"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Continue Shopping
                </Link>
            </div>
        </>
    );
};

export default Success;
