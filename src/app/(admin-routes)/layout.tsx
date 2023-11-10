import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import nextAuthOptions from '../../config/next-auth.config'

type PrivateLayoutProps = {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

    const session = await getServerSession(nextAuthOptions)

    if(!session) {
        redirect('/')
    }

    return <>{children}</>
}
