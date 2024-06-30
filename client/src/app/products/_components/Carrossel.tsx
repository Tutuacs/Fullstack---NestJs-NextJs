"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    image:
      "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
    name: "Product 1",
  },
  { id: 2, image: "https://via.placeholder.com/300", name: "Product 2" },
  {
    id: 3,
    image:
      "https://mockup-api.teespring.com/v3/image/wcNwkS4Y-rtOKAuqwCsYaOw8Cv8/800/800.jpg",
    name: "Product 3",
  },
  { id: 4, image: "https://via.placeholder.com/300", name: "Product 4" },
  { id: 5, image: "https://via.placeholder.com/300", name: "Product 5" },
  {
    id: 6,
    image:
      "https://mockup-api.teespring.com/v3/image/btGArnfFfvESjsCyqh-RcuO3rr8/800/800.jpg",
    name: "Product 6",
  },
  { id: 7, image: "https://via.placeholder.com/300", name: "Product 7" },
  { id: 8, image: "https://via.placeholder.com/300", name: "Product 8" },
  {
    id: 9,
    image:
      "https://mockup-api.teespring.com/v3/image/9DxUJ2cP_LXHylWgTmXs6z84NXY/800/800.jpg",
    name: "Product 9",
  },
  { id: 10, image: "https://via.placeholder.com/300", name: "Product 10" },
  { id: 11, image: "https://via.placeholder.com/300", name: "Product 11" },
  {
    id: 12,
    image:
      "https://mockup-api.teespring.com/v3/image/eTcnVM9q_1-2jF_0bJ4NBa_rFKM/800/800.jpg",
    name: "Product 12",
  },
  { id: 13, image: "https://via.placeholder.com/300", name: "Product 13" },
  { id: 14, image: "https://via.placeholder.com/300", name: "Product 14" },
  {
    id: 15,
    image:
      "https://mockup-api.teespring.com/v3/image/aM870qcrxVLvHLnJPwu6w2olWKU/800/800.jpg",
    name: "Product 15",
  },
  { id: 16, image: "https://via.placeholder.com/300", name: "Product 16" },
  {
    id: 17,
    image:
      "https://mockup-api.teespring.com/v3/image/NGjr8zyNw7FCHuQYoryOEcl4GNk/800/800.jpg",
    name: "Product 17",
  },
  { id: 18, image: "https://via.placeholder.com/300", name: "Product 18" },
  {
    id: 19,
    image:
      "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg",
    name: "Product 19",
  },
  { id: 20, image: "https://via.placeholder.com/300", name: "Product 20" },
];

export default function DetailsCarrossel({title}: {title: string}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState(5000);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [intervalDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleNextClick = () => {
    nextSlide();
    setIntervalDelay(10000);
    setTimeout(() => {
      setIntervalDelay(5000);
    }, 10000);
  };

  const handlePrevClick = () => {
    prevSlide();
    setIntervalDelay(10000);
    setTimeout(() => {
      setIntervalDelay(5000);
    }, 10000);
  };

  const visibleProducts = products
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(
      products.slice(
        0,
        Math.max(0, currentIndex + itemsPerPage - products.length)
      )
    );

  return (
    <>
      <div className="w-full p-4 text-4xl text-center text-white bg-green-800 rounded-t-md">
        {title}
      </div>
      <div className="relative overflow-hidden full h-80 bg-slate-100">
        <div className="absolute top-0 flex justify-center w-full h-full transition-transform duration-500 ease-in-out">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`flex-shrink-0 p-4 pb-10 w-${100 / itemsPerPage}%`}
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-lg max-w-[300px] max-h-[300px]"
                />
                <h3 className="py-1 mt-0 text-center text-white bg-green-800 rounded-b-lg">
                  {product.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 px-3 py-64 font-bold transform -translate-y-1/2 rounded-lg text-slate-800 from-transparent to-gray-300 bg-gradient-to-l top-1/2 hover:to-gray-400"
        >
          Anterior
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 px-3 py-64 font-bold transform -translate-y-1/2 rounded-lg text-slate-800 from-transparent to-gray-300 bg-gradient-to-r top-1/2 hover:to-gray-400"
        >
          Próximo
        </button>
      </div>
    </>
  );
}
