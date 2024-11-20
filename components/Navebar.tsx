import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {auth ,signOut,signIn } from '@/auth' 


const Navebar = async () => {
    const session = await auth()
  return (
    <header className='  bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
          <Link href={"/"}>
          <div className='ms-5'>
          <Image src="/logo.png" alt='logo' width={130} height={30}  />
          </div>
          </Link>
          <div className='flex me-5 items-center gap-5 text-black'>
          {session && session?.user?(
            <>
             <Link href={'/recipes/create'}>
              <span >Create</span>
             </Link>
             <form action={ async()=>{
                  'use server'
                  await signOut({redirectTo:"/"})
             } }>
                <button type='submit'>
                   Logout
                </button>
             </form>
             <Link href={`/user/${session?.id}`}>
               <span>{session?.user?.name}</span>
             </Link>
            </>
          ) : (
            <form action={async()=>{
                'use server'
                 await signIn('google')
            }}>
              <button type='submit'>
                Login
              </button>
            </form>
          )}
        </div>
        </nav>
      
    </header>
  )
}

export default Navebar