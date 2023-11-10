'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    const result = await signIn('credentials', {
      email, 
      password,
      redirect: false
    })

    if(result?.error){
      console.log(result)
      return
    }
    
    router.replace('/admin')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-6 text-3xl">Login</h1>

      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className="rounded-md min-h-[30px]" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          className="rounded-md min-h-[30px]"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          className="bg-gray-400 text-red-800 rounded-md min-h-[30px]"
        >
          Login
        </button>
      </form>
    </main>
  )
}
