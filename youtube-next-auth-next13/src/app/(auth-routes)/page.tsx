'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/admin')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="mb-6 text-3xl">Login</h1>

      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input 
          className="h-12 p-2 bg-transparent border border-gray-300 rounded-md"
          type="text" 
          name="email" 
          placeholder="Digite seu e-mail" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          className="h-12 p-2 bg-transparent border border-gray-300 rounded-md"
          type="password" 
          name="password" 
          placeholder="Digite sua senha" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-12 text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
