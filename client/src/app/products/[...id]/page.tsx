"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
    params: {
      id: string;
    };
  };

type Product = {
  id: string;
  name: string;
  images: string[];
  variants: string[];
  price: number;
  details: string;
};

const fetchProductDetails = async (productId: string): Promise<Product> => {
  // Simulated API call, replace with actual API fetch
  const response = await fetch(`/api/product/${productId}`);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch product details");
  // }
  if (response.status !== 200) {
    const product = {
      id: "19",
      name: "Product 19",
      images: [
        "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
        "https://mockup-api.teespring.com/v3/image/wcNwkS4Y-rtOKAuqwCsYaOw8Cv8/800/800.jpg",
        "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg",
      ],
      variants: [
        "20",
        "21",
      ],
      price: 19.99,
      details: "Product 19 details",
    };

    return product
    
  }
  return response.json();
};

export default function ProductDetailsPage({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductDetails(params.id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
        // Handle error loading product
      }
    };
    loadProduct();
  }, [params.id]);

  const handleVariantSelect = (index: number) => {
    setSelectedVariantIndex(index);
  };

  const handlePrevImage = () => {
    setSelectedVariantIndex((prevIndex) =>
      prevIndex === 0 ? (product?.images?.length ?? 0) - 1 : prevIndex - 1
    );
  };
  
  const handleNextImage = () => {
    setSelectedVariantIndex((prevIndex) =>
      prevIndex === (product?.images?.length ?? 0) - 1 ? 0 : prevIndex + 1
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {/* Product Card */}
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <button className="absolute top-0 left-0 p-2 m-2 bg-gray-200 rounded-lg" onClick={handlePrevImage}>
            &lt;
          </button>
          <button className="absolute top-0 right-0 p-2 m-2 bg-gray-200 rounded-lg" onClick={handleNextImage}>
            &gt;
          </button>
          <Image
            src={product.images[selectedVariantIndex]}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleVariantSelect(index)}
              className={`p-2 rounded-lg ${
                index === selectedVariantIndex ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              <Image
                src={image}
                alt={product.name}
                width={60}
                height={60}
                className="object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details Card */}
      <div className="flex-1 max-w-md mx-auto mt-4 md:mt-0">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.details}</p>
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

    