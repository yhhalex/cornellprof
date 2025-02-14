import React from 'react'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'


const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm front-works-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={20} />
        </Link>

        <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/professor/create">
                  <span>Create</span>
                </Link>

                <form action={async () => {
                  "use server";
                  await signOut;
                }}>
                  <button type='submit'>
                    <span> Logout </span>
                    </button>
                </form>

                <Link href="/user/${session?.id}">
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <form action ={async () => {
                "use server";
                await signIn('github');
              }}>
              <button type="submit">
                <span> Login </span> 
              </button>
              </form>
            )}
        </div>
      </nav>
    </header>

  )
}

export default Navbar