"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

export default function Register() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="p-8 bg-white rounded-t-lg w-96">
        <h1 className="mb-6 text-2xl font-bold text-center">Registre-se</h1>
        <form>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-green-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              placeholder="Digite seu email de login"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-green-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              placeholder="Digite sua senha"
            />
          </div>
            <button
              type="submit"
              className="w-full py-2 mx-0 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline hover:animate-pulse"
            >
              Cadastrar
            </button>
        </form>
      </div>
      <Link href="/login">
        <div className="flex p-8 m-auto text-2xl text-white rounded-b-lg hover:bg-slate-800 bg-slate-900 w-96 hover:text-green-400">
          <div className="m-auto">
          Já tenho cadastro
          </div>
        </div>
      </Link>
    </main>
  );
}
