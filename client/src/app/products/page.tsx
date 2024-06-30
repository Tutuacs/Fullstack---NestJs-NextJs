"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image: string;
  promotion: boolean;
};

const fetchProducts = async (page: number) => {
  // Simulação de uma requisição ao backend
  const response = await fetch(`/api/products?page=${page}`);
  console.log(response.status);
  if (response.status !== 200) {
    return [
      {
        id: 1,
        image:
          "https://mockup-api.teespring.com/v3/image/2NgQ1ZAAW-l7xCRHhBDvI1B1C8U/800/800.jpg",
        name: "Product 1",
        promotion: true,
      },
      {
        id: 2,
        image: "https://via.placeholder.com/300",
        name: "Product 2",
        promotion: true,
      },
      {
        id: 3,
        image:
          "https://mockup-api.teespring.com/v3/image/wcNwkS4Y-rtOKAuqwCsYaOw8Cv8/800/800.jpg",
        name: "Product 3",
        promotion: true,
      },
      {
        id: 4,
        image: "https://via.placeholder.com/300",
        name: "Product 4",
        promotion: true,
      },
      {
        id: 5,
        image: "https://via.placeholder.com/300",
        name: "Product 5",
        promotion: true,
      },
      {
        id: 6,
        image:
          "https://mockup-api.teespring.com/v3/image/btGArnfFfvESjsCyqh-RcuO3rr8/800/800.jpg",
        name: "Product 6",
        promotion: true,
      },
      {
        id: 7,
        image: "https://via.placeholder.com/300",
        name: "Product 7",
        promotion: false,
      },
      {
        id: 8,
        image: "https://via.placeholder.com/300",
        name: "Product 8",
        promotion: false,
      },
      {
        id: 9,
        image:
          "https://mockup-api.teespring.com/v3/image/9DxUJ2cP_LXHylWgTmXs6z84NXY/800/800.jpg",
        name: "Product 9",
        promotion: false,
      },
      {
        id: 10,
        image: "https://via.placeholder.com/300",
        name: "Product 10",
        promotion: false,
      },
      {
        id: 11,
        image: "https://via.placeholder.com/300",
        name: "Product 11",
        promotion: false,
      },
      {
        id: 12,
        image:
          "https://mockup-api.teespring.com/v3/image/eTcnVM9q_1-2jF_0bJ4NBa_rFKM/800/800.jpg",
        name: "Product 12",
        promotion: false,
      },
      {
        id: 13,
        image: "https://via.placeholder.com/300",
        name: "Product 13",
        promotion: false,
      },
      {
        id: 14,
        image: "https://via.placeholder.com/300",
        name: "Product 14",
        promotion: false,
      },
      {
        id: 15,
        image:
          "https://mockup-api.teespring.com/v3/image/aM870qcrxVLvHLnJPwu6w2olWKU/800/800.jpg",
        name: "Product 15",
        promotion: false,
      },
      {
        id: 16,
        image: "https://via.placeholder.com/300",
        name: "Product 16",
        promotion: false,
      },
      {
        id: 17,
        image:
          "https://mockup-api.teespring.com/v3/image/NGjr8zyNw7FCHuQYoryOEcl4GNk/800/800.jpg",
        name: "Product 17",
        promotion: false,
      },
      {
        id: 18,
        image: "https://via.placeholder.com/300",
        name: "Product 18",
        promotion: false,
      },
      {
        id: 19,
        image:
          "https://mockup-api.teespring.com/v3/image/_IvBZ0jhry5FAXEOWFw3ynpo8ig/800/800.jpg",
        name: "Product 19",
        promotion: false,
      },
      {
        id: 20,
        image: "https://via.placeholder.com/300",
        name: "Product 20",
        promotion: false,
      },
    ];
  }
  const data = await response.json();
  return data.products;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const newProducts = await fetchProducts(page);
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setLoading(false);
    };
    loadProducts();
  }, [page]);

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">
      <aside className="p-4 mt-4 bg-gray-100 border-t-4 border-b-4 border-r-4 rounded-r-lg border-slate-800 lg:w-1/4 md:w-1/4 sm:w-2/4">
        <h2 className="mt-4 mb-4 text-xl font-bold">Filtros</h2>
        {/* Adicione os elementos de filtro aqui */}
      </aside>
      <main className="p-4 md:w-3/4 lg:w-3/4 sm:w-2/4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product: Product) => (
            <div className="flex-row" key={product.id}>
              <div
                className="relative p-4 overflow-hidden bg-white rounded-t-lg shadow"
              >
                {/* Faixa cinza na parte superior */}
                <div className="absolute top-0 left-0 w-full h-4 bg-white"></div>
                {/* Faixa cinza na parte esquerda */}
                <div className="absolute top-0 left-0 w-4 h-full bg-white"></div>

                {product.promotion && (
                  <div className="absolute w-24 text-xs font-bold text-center text-white transform -rotate-45 bg-red-600 top-[20px] -left-[20px]">
                    Promoção
                  </div>
                )}

                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover max-w-[300px] max-h-[300px] rounded-lg m-2 mx-auto"
                  />
                  <h3 className="mt-2 text-lg font-bold text-center">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-2 lg:mt-4 lg:text-center"></div>
              </div>
              <Link href={`/products/${product.id}`}>
                <button className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-b-lg hover:bg-green-700 focus:outline-none focus:shadow-outline">
                  Detalhes
                </button>
              </Link>
            </div>
          ))}
        </div>
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
          </div>
        )}
      </main>
    </div>
  );
}
