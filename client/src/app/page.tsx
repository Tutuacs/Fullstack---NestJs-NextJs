import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-full">
        <section className="w-10/12">
          <div className="flex items-center justify-center h-screen bg-gray-200">
            <h1 className="text-6xl text-black">Seu Site</h1>
          </div>
        </section>
        <section className="w-2/12 bg-gray-200 hover:bg-gradient-to-l hover:from-gray-400 hover:to-gray-200">
          <div className="flex justify-center h-screen text-center">
            <h2 className="text-4xl text-center text-black">Seu Site2</h2>
          </div>
        </section>
      </div>
      <footer id="footer" className="flex items-center justify-center w-full h-24 bg-gray-900">
        <p className="text-white">© 2024 Seu Site. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
