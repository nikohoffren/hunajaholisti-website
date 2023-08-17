import React, { ReactNode, useContext } from "react";
import { Product } from "src/productsData";
import { CartContext } from "../components/CartContext";

interface ProductCardProps {
    image: ReactNode;
    product: Product;
    lang: string;
    children?: React.ReactNode;
}

interface CardWrapperProps {
    children: ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
    return (
        <div>
            <div className="backdrop-blur max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                {children}
            </div>
        </div >
    );
};

// 'ADD TO CART' CARD
const ProductAddToCart: React.FC<ProductCardProps> = ({
    image,
    product,
    lang
}) => {
    const { dispatch } = useContext(CartContext);
    return (
        <CardWrapper>
            <div className="text-center">
                {image}
            </div>
            <div className="p-8">
                {/* Name */}
                <h5 className="text-2xl font-semibold text-white">
                    {lang === "fi"
                        ? product.fi.name
                        : product.en.name}
                </h5>
                {/* Price */}
                <h6 className="font-bold mt-1 text-[1.3rem] text-white">
                    {product.price?.text}
                </h6>
                {/* Tax */}
                <p className="mt-4 text-gray-100">
                    {lang === "fi"
                        ? "Sis. ALV 24,00%"
                        : "VAT 24.00% included"}
                </p>
                {/* Descriptions */}
                {product.fi.description.map((fiDescription: string, idx: number) => (
                    <p key={idx} className="mt-4 text-sky-100">
                        {
                            lang === "fi" ? fiDescription : product.en.description[idx]
                        }
                    </p>
                ))}
                {/* CTA */}
                <div className="mt-4 text-right">
                    <button
                        onClick={() => {
                            const itemToAdd = {
                                id: product.id,
                                name:
                                    lang === "fi"
                                        ? product.fi.name
                                        : product.en.name,
                                price: product.price?.value,
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
                </div>
            </div>
        </CardWrapper>
    );
}

// 'COMING SOON' CARD
const ProductSoon: React.FC<ProductCardProps> = ({
    image,
    product,
    lang,
    children
}) => {
    return (
        <CardWrapper>
            <div className="text-center">
                {image}
            </div>
            <div className="p-8">
                {/* Name */}
                <h5 className="text-2xl font-semibold text-white">
                    {lang === "fi"
                        ? product.fi.name
                        : product.en.name}
                </h5>
                {children}
                {/* Description 
                     // since the code uses p.fi.description to iterate, instead of using p.fi.description[idx] (again) in the loop, it uses fiDescription*/}
                {
                    product.fi.description.map((fiDescription: string, idx: number) => (
                        <p key={idx} className="mt-4 text-sky-100">
                            {
                                lang === "fi" ? fiDescription : product.en.description[idx]
                            }

                        </p>
                    ))
                }
                {/* Info URL */}
                <p className=" text-sky-100">
                    <a
                        href={product.moreInfoUrl}
                        target="_blank"
                        className="text-yellow-600 hover:text-yellow-800"
                    >
                        {product.moreInfoUrl}
                    </a>
                    <br />
                    <br />
                    {lang === "fi"
                        ? "(Tulossa lisää 2023!)"
                        : "(Coming soon 2023!)"}
                </p>
                {/* CTA */}
                <div className="mt-4 text-right">
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
                </div>
            </div>
        </CardWrapper>
    );
}

// 'MESSAGE US' CARD
const ProductMessageUs: React.FC<ProductCardProps> = ({
    image,
    product,
    lang,
    
}) => {
    return (
        <CardWrapper>
            <div className="text-center">
                {image}
            </div>
            <div className="p-8">
                {/* Name */}
                <h5 className="text-2xl font-semibold text-white">
                    {lang === "fi"
                        ? product.fi.name
                        : product.en.name}
                </h5>
               
                {/* Descriptions */}
                {product.fi.description.map((fiDescription: string, idx: number) => (
                    <p key={idx} className="mt-4 text-sky-100">
                        {
                            lang === "fi" ? fiDescription : product.en.description[idx]
                        }
                    </p>
                ))
                }
                {/* CTA */}
                <div className="mt-4 text-right">
                    <a
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
                </div>
            </div>
        </CardWrapper>
    );
}


export { ProductAddToCart, ProductMessageUs, ProductSoon };