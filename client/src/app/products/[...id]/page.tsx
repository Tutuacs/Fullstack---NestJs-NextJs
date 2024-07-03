"use client";
// type Props = {
//     params: {
//       id: string;
//     };
//   };

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DetailsCarrossel from "../_components/Carrossel";
import Footer from "@/components/Footer";

type Product = {
  id: string;
  name: string;
  color: string;
  promotion: boolean;
  images: string[];
  variants?: Product[];
  price: number;
  details: string;
};

export default function ProductDetails() {
  const initialProduct = {
    id: "19",
    name: "Product 19",
    color: "black",
    promotion: true,
    images: [
      "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
      "https://mockup-api.teespring.com/v3/image/wcNwkS4Y-rtOKAuqwCsYaOw8Cv8/800/800.jpg",
      "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg",
    ],
    variants: [
      {
        id: "20",
        name: "Variant 1",
        color: "red",
        promotion: false,
        images: [
          "https://mockup-api.teespring.com/v3/image/wcNwkS4Y-rtOKAuqwCsYaOw8Cv8/800/800.jpg",
          "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
        ],
        price: 20.99,
        details: "Details for variant 1",
      },
      {
        id: "21",
        name: "Variant 2",
        color: "white",
        promotion: true,
        images: [
          "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg",
          "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
        ],
        price: 24.99,
        details: "Details for variant 2",
      },
    ],
    price: 19.99,
    details: "Product 19 details",
  };

  const [product, setProduct] = useState<Product>(initialProduct);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleVariantChange = (selectedProduct: Product) => {
    setProduct(selectedProduct);
    setCurrentImageIndex(0);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const products = [product];

  return (
    <main>
      <div className="flex-col my-10 md:mx-4 lg:mx-10">
        <div className="w-3/4 m-auto bg-white border-4 border-green-800 rounded-lg lg:flex sm:flex-col lg:flex-row md:flex">
          {products.map((product: Product) => (
            <>
              <div className="m-4">
                <div className="flex-row" key={product.id}>
                  <div className="relative p-4 overflow-hidden bg-white rounded-lg shadow">
                    {/* Faixa cinza na parte superior */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-white"></div>
                    {/* Faixa cinza na parte esquerda */}
                    <button
                      onClick={handlePreviousImage}
                      className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r hover:from-slate-800 from-slate-500 to-transparent"
                    ></button>
                    {/* Faixa cinza na parte direita */}
                    <button
                      onClick={handleNextImage}
                      className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l hover:from-slate-800 from-slate-500 to-transparent"
                    ></button>

                    {product.promotion && (
                      <div className="absolute w-24 text-xs font-bold text-center text-white transform -rotate-45 bg-red-600 top-[20px] -left-[20px]">
                        Promoção
                      </div>
                    )}

                    {/* <Link href={`/products/${product.id}`}> */}
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover max-w-[300px] max-h-[300px] rounded-lg m-2 mx-auto"
                    />
                    {/* </Link> */}

                    <div className="mt-2 lg:mt-4 lg:text-center"></div>
                  </div>
                </div>
              </div>
              <div className="m-4">
                <div className="mb-4 text-2xl font-bold">{product.name}</div>
                <div className="mb-4 text-lg">R$ {product.price}</div>
                <div className="mb-4 text-wrap">{product.details}</div>
                <div className="flex mb-4 space-x-2">
                  <button
                    onClick={() => handleVariantChange(initialProduct)}
                    className="w-8 h-8 border-2 border-green-800 rounded-full"
                    style={{ backgroundColor: initialProduct.color }}
                    title={initialProduct.name}
                  ></button>
                  {initialProduct.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantChange(variant)}
                      className="w-8 h-8 border-2 border-green-800 rounded-full"
                      style={{ backgroundColor: variant.color }}
                      title={variant.name}
                    ></button>
                  ))}
                </div>

                <div>
                  <button className="px-4 py-2 font-bold text-white bg-green-500 rounded-lg md:w-full lg:w-32 hover:bg-green-700 focus:outline-none focus:shadow-outline">
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="w-3/4 m-auto my-10">
          <DetailsCarrossel title="Produtos relacionados" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
