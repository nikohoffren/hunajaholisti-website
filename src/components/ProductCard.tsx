import React, { ReactNode, useContext } from "react";
import { Product } from "src/components/productsData";
import { CartContext } from "../components/CartContext";

interface ProductCardProps {
    body: ReactNode;
    head: ReactNode;
    product: Product;
    lang: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    body,
    head,
    product,
    lang
}) => {
    return (
        < div >
            <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="text-center">
                    {head}
                </div>
                <div className="p-8">
                    {body}
                    <div className="mt-4 text-right">
                        {renderCta(product, lang)}
                    </div>
                </div>
            </div>
        </div >
    );
}

function renderCta(p: Product, lang: string): ReactNode {
    switch (p.CTA) {
        case "add_to_cart":
            const { dispatch } = useContext(CartContext);
            return (
                <button
                    onClick={() => {
                        const itemToAdd = {
                            id: p.id,
                            name:
                                lang === "fi"
                                    ? p.fi.name
                                    : p.en.name,
                            price: p.price?.value,
                        };
                        dispatch({
                            type: "ADD",
                            item: itemToAdd,
                        });
                    }}
                    className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                    {lang === "fi"
                        ? "LISÄÄ KORIIN"
                        : "ADD TO CART"}
                </button>
            )
        case "coming_soon":
            return (
                <a
                    href="https://www.facebook.com/Hunajaholisti/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                    {lang === "fi"
                        ? "TULOSSA 2023"
                        : "COMING IN 2023"}
                </a>
            )
        case "message_us":
            return (
                < a
                    href="https://www.facebook.com/Hunajaholisti/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                    {
                        lang === "fi"
                            ? "LÄHETÄ VIESTI"
                            : "MESSAGE US"
                    }
                </a >
            )
    }
}

export default ProductCard;