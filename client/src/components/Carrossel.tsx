"use client";
import React, { useState, useEffect } from "react";

const products = [
  { id: 1, image: "https://via.placeholder.com/300", name: "Product 1" },
  { id: 2, image: "https://via.placeholder.com/300", name: "Product 2" },
  { id: 3, image: "https://via.placeholder.com/300", name: "Product 3" },
  { id: 4, image: "https://via.placeholder.com/300", name: "Product 4" },
  { id: 5, image: "https://via.placeholder.com/300", name: "Product 5" },
  { id: 6, image: "https://via.placeholder.com/300", name: "Product 6" },
  { id: 7, image: "https://via.placeholder.com/300", name: "Product 7" },
  { id: 8, image: "https://via.placeholder.com/300", name: "Product 8" },
  { id: 9, image: "https://via.placeholder.com/300", name: "Product 9" },
  { id: 10, image: "https://via.placeholder.com/300", name: "Product 10" },
  { id: 11, image: "https://via.placeholder.com/300", name: "Product 11" },
  { id: 12, image: "https://via.placeholder.com/300", name: "Product 12" },
  { id: 13, image: "https://via.placeholder.com/300", name: "Product 13" },
  { id: 14, image: "https://via.placeholder.com/300", name: "Product 14" },
  { id: 15, image: "https://via.placeholder.com/300", name: "Product 15" },
  { id: 16, image: "https://via.placeholder.com/300", name: "Product 16" },
  { id: 17, image: "https://via.placeholder.com/300", name: "Product 17" },
  { id: 18, image: "https://via.placeholder.com/300", name: "Product 18" },
  { id: 19, image: "https://via.placeholder.com/300", name: "Product 19" },
  { id: 20, image: "https://via.placeholder.com/300", name: "Product 20" },
];

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [intervalDelay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + products.length) % products.length);
  };

  const handleNextClick = () => {
    nextSlide();
    setIntervalDelay(80000); // Delay increased to 10 seconds after clicking
    setTimeout(() => {
      setIntervalDelay(5000); // Revert back to 5 seconds after delay
    }, 10000);
  };

  const handlePrevClick = () => {
    prevSlide();
    setIntervalDelay(80000); // Delay increased to 10 seconds after clicking
    setTimeout(() => {
      setIntervalDelay(5000); // Revert back to 5 seconds after delay
    }, 10000);
  };

  const visibleProducts = products
    .slice(currentIndex, currentIndex + 4)
    .concat(products.slice(0, Math.max(0, currentIndex + 4 - products.length)));

  return (
    <div className="relative w-full h-64 overflow-hidden bg-slate-100">
      <div className="absolute top-0 left-0 flex w-full h-full transition-transform duration-500 ease-in-out">
        {visibleProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-1/4 p-4 pb-10">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg"
            />
            <h3 className="mt-1 text-center">{product.name}</h3>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 px-4 py-64 text-white transform -translate-y-1/2 rounded-lg from-transparent to-gray-300 bg-gradient-to-l top-1/2 hover:to-gray-400"
      >
        Anterior
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 px-4 py-64 text-white transform -translate-y-1/2 rounded-lg from-transparent to-gray-300 bg-gradient-to-r top-1/2 hover:to-gray-400"
      >
        Próxima
      </button>
    </div>
  );
}
