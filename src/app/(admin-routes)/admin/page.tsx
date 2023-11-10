import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import ButtonLogout from "@/app/components/ButtonLogout"
import { getServerSession } from "next-auth"

export default async function page() {

  const session = await getServerSession(nextAuthOptions)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-8">Olá {session?.user.name}, seja bem vindo!</h1>
        <ButtonLogout />
    </div>
  )
}
