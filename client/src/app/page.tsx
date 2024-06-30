import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Carrossel from "@/components/Carrossel";
import Image from "next/image";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col min-h-full mb-10">
        <section className="w-full">
          <div className="flex flex-col items-center bg-gray-200">
            <Image src="/banner.png" alt="home" width={1200} height={300} className="mt-10" />
            <h1 className="mb-10 text-6xl font-bold text-center text-black animate-pulse">
              Morelate distribuidora de peças
            </h1>
            <Carrossel title="Ultimos produtos adicionados" />
            <About />
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
