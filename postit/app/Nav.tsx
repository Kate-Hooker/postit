import Link from 'next/link'
import Login from './auth/Login'
import Logged from './auth/Logged'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/auth/[...nextauth]'
import prisma from '../../postit/prisma/client'

export default async function Nav() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={'/'}>
        <h1 className="font-bold text-lg">Send it.</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image?}/>}
        <Login />
      </ul>
    </nav>
  )
}
