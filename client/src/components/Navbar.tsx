"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className="flex items-center justify-between pt-2 bg-green-500 shadow-lg">
        <div className="flex items-center">
          <Link className="py-1" href="/">
            {/* <Image
              src="/logo_morelate_horizontal_b.png"
              alt="home"
              width={200}
              height={40}
            /> */}
          </Link>
        </div>
        <div className={`flex items-center md:hidden ${
              isOpen ? "mr-0" : "mr-2"
            }`}>
          <button
            onClick={toggleMenu}
            className={`p-2 text-2xl mb-0 py-4 rounded-tl-lg font-bold focus:outline-none ${
              isOpen ? "text-white bg-green-800 px-8" : "text-white"
            }`}
          >
            Menu
          </button>
        </div>
        <div className="hidden md:flex md:items-end md:text-end md:mr-0">
          <Link
            className="p-4 my-0 text-lg font-bold text-white md:mr-0 hover:rounded-t-lg hover:text-slate-800 hover:bg-gray-200"
            href="/magic-chat"
          >
            {/* Chat magico */}
          </Link>
          <Link
            className="p-4 my-0 text-lg font-bold text-white hover:rounded-t-lg hover:text-slate-800 hover:bg-gray-200"
            href="/products"
          >
            Produtos
          </Link>
          <Link
            className="p-4 my-0 text-lg font-bold text-white hover:rounded-t-lg hover:text-slate-800 hover:bg-gray-200"
            href="/trucks"
          >
            Caminhões
          </Link>
          <Link
            className="p-4 my-0 text-lg font-bold text-white hover:rounded-t-lg hover:text-slate-800 hover:bg-gray-200"
            href="/login"
          >
            Login
          </Link>
        </div>
      </main>
      {isOpen && (
        <div className={`absolute right-0 items-end w-[130px] mt-0 mr-0 bg-green-800 rounded-bl-lg md:hidden menu-open`}>
          <Link
            className="block p-4 my-0 mr-2 text-sm font-bold text-white rounded-r-lg hover:text-slate-800 hover:bg-gray-200"
            href="/magic-chat"
          >
            Chat magico
          </Link>
          <Link
            className="block p-4 my-0 mr-2 text-sm font-bold text-white rounded-r-lg hover:text-slate-800 hover:bg-gray-200"
            href="/products"
          >
            Produtos
          </Link>
          <Link
            className="block p-4 my-0 mr-2 text-sm font-bold text-white rounded-r-lg hover:text-slate-800 hover:bg-gray-200"
            href="/trucks"
          >
            Caminhões
          </Link>
          <Link
            className="block p-4 my-0 mr-2 text-sm font-bold text-white rounded-tr-lg hover:text-slate-800 hover:bg-gray-200"
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}
